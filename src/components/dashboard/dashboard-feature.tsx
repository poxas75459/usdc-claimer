/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4hCqsb4AdTFyfsQheC3Xvfe12AKYDWDC3sokbkvxNLcWzEBLLvTVkE7YP1rM4qFuncmHm5xXYPzwAjtrbsrmRprT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rke5rdFG5BRdZbjjp3mTeRVGUdQCrQJ86NmSFXfKZiAvvEzkqWS7bwEZ5AAbkKvp1yJ3Bcv2H9Ac4j9jNUEaiob",
  "key1": "4eVrVMMryY5EqNgSMYPVJCV6cdEf1B7Psmwo7m953ZbDkRCDqxHAQ8StQpTXZMyeEFxXdkVPyjLGRoQFJuMnArHz",
  "key2": "1h67iyJYxwaMH16sWG3vVSDV8Te2jG1w9BthyaekaNbJTxkXv1faBrDp5CbMFS1dXKW8yoax76xC63PYukA4u8U",
  "key3": "3cd6H5GYW2oMxYUG3NeUpbE6Ejtz7d5zHaJRiU6WmJoskSAbKZu2zaKzZL9Ky1y1vWEv4dp2FbrYHBhdpsJEMTQ9",
  "key4": "j96UqEuJxxvAYuC3xL1CWKxqDqCx2bHZmrGys6ekSE52s8nxDZK913RvtFCPhD9wQwRR9MEtc35zyxox6DzpJsA",
  "key5": "5vFEdSPQYAf47vXBofea7uB8b1K5KismSqbm8wSRbe6LAtEdwohtpr9qFNbv2tfcndb83mWKbbvVF1xeZFVf9zBF",
  "key6": "8SuCifSsVgGhWhhgA6vRBVtSzwXYtxxxwcAvC9CL8b8nHa9gAkXbAHEm7Tu6PCsjb1S2JmouvfNLQxJRsTTjjrD",
  "key7": "2my2f7u3aqEBbePK3gxo5V3C8nvvc7bPJxaqxQFoxNqhk5XWe3PBuTnhbvAcLSzB1mysERAPFD8dQjdbX5QbTLwf",
  "key8": "2tQcq2WU5BKvGobf7HJ5VvtzGGVAtEe6WoK1P6J9WYWJTWw9V8zWJKTTuKwg9ovCvMhFY59Kioi9thHYnLFXWVXk",
  "key9": "NSgvJSusShCaatod1Ln9FDKVgn8kUsXEmNXuYwDMXAhmi1EHXbMQhJN9RAjD86nzeVrdeKBLwvBvXp56Zy9GHkM",
  "key10": "39fe6gRppQsH9WrefKuMUKrWmJktQUGMTtbVVzNZL6LLHzyQWhLg7cUTEfZTmXDKE9zUkvcUSeFfYZUszXcJcb3i",
  "key11": "2Xma1AcnmWF4dF9wTVGCJE73HvznL5d5wNppUGoXdFtp8uqcHxVdpazTw6UPr2qt7ekZeUGeg9VXg4Xfj1tjFtds",
  "key12": "3JHSAr8ZwsEKKKRaRjfkjMzZAEGBRSgS8MUZaMLyLFoPC3T7RZAaJCkAzTigExzpMJThATrnU9W6BfmTrMAD4s44",
  "key13": "soJZshR2yBSeCmaiNCEfdfjiFrr48TX2tSxtKEyfpASYoUH5S37jp95XcW58rtDCoJJsKxsKbmfyLD3rNEvUcdp",
  "key14": "2EP71XK1sRdpCFAhAYUbMaBQzzDCKh6btrfZomqrJp7m2Z9o2RLSsvgZEN6vv6tr9ZCP7xHkDE9rVUQnuwPWRFYP",
  "key15": "56iRncvRad5nR1mPbuoTSjzcTECFefGhnMPjRDVsuyyaqPmcZ8NL4DC72V5KXinJfg67YcivW1DdiyTYjkSikE9x",
  "key16": "2RvBGkWgDasmv4b96Kror52ndi9j63S8s27GoTm8y8gXZ1mrRbrJKW2UpCx88pnk6pUAGtLyabFBVkG1wVmVXgEn",
  "key17": "29inubaSUL7UBWYq6g2Bid7p1RWLPr6EUxzFp5gdczKNZo9iJTzAMHbVv9Fb2XrXJQG2zxEiXBUpz3U81W5Kdt1Q",
  "key18": "26THKFX7AimP7TNMMSh6hKY3cE52QUWXRs2KTtje89RdUdL76gA7gXFqFfbXjSeYBfWTVb9yk6SAFhQr6vTsYwBs",
  "key19": "Fa7csfFCuQqR7tCeVkAYezDSBsUnx8YP9jSXyRLvzJRRdfqQFvxsJVZLhZtYsPQrt18qZyo2tauYjXZZN4JiQro",
  "key20": "5zX2dCerY18LD3DJhxhnCnGNnnMN9JPjbyoEJzEkwcyKc9cb96NJ9C8Fwo4FEdRTd1baisFqtQsZzo3YzAM8vsJk",
  "key21": "44UwSCemsMRVEfd6JWrJtkACtfV9NEwYekkYwB2U1SbmKPPMcRw4wUmVX3TTeBKXE8H1ELqyvPBKgNbYweoA8y8P",
  "key22": "4Rq4rZrQDJwRRt6cdv44DR8i9JSp7Vrzwdr6MT3jBuadkBoFM8BGH8jGLdS7r1t4V1WQPnevZK1Gv88V39gjqvfN",
  "key23": "55owq5PyC4YqWNrqVE5ngSSH47WRJNtRBN8w6TM91zkRorjfpwhiF6J6WZ7Z5ncjLgmqEktCYrUygNj6u84yTfDA",
  "key24": "3DQgPiN5ywXBZZnW6Va8EzJfhM5YFwq7Dz9bZ3vmR3spDJ81hM9ScCEc2KvNBgrveZAaZBo59ZmE8GFmVWhR1wHw",
  "key25": "663tfFCesaxGmeVgG3joGxsC3XA7PmHdjufdy6H6NqPNRDZAST3ALh4atoLkgoirtdN6Mw3LUND4k3MbfRxuQd57",
  "key26": "2SYe7KKUAwJVtfvCzQsAPPAEeXrkAm71zGQyxtgHATNP1mVQhSShdHbJhhnRUScuTkpUJ94aQ27NsVNdZrBdL6Kp",
  "key27": "4sTMBiKqv687vqst9k2izf3FoNdPhre4pRLwtWw3MZyiVsFwt2dGS6ENPJzVoeTHHhBRnBUXtvP5zPoc9ugDLyv2",
  "key28": "2HbmGmr6mELfxw7tm7iMVVe57XeoC6dt6syiwCvqzmWWcQmNuQC6hWTXyDu9zL8XVfArXrY3vcEJTCMgZa8PB4Zu",
  "key29": "5dthi4wPhwD8BvtXt83xtNvfA38QgTJufQUEhNR9CYUddNZZKNh4Mcdz52wAzUovbZLqz1AxqJKj7ePyGnva1Xn9",
  "key30": "unbDpcB4Ps2yAcZaa3aKyzDhNRLDzAU9XY2NCQJsHHivPi6DUycNjLKP1Btu7sz3jvh7XqV1tUVV3mG3PsA6Ey9",
  "key31": "3TnYtM3nZejYpXXLG14vfNhT3q2pKfCUNDZJt6jsP7g9P1wxELkjQ1r9yuFzQnsfHnRhTq8gJfJdHR4YkSM7NRwm",
  "key32": "4ZdBTjQkavLcuFWfPusT7qFnmErq38ngK8GJTsrbhYfoH4n1PNpMVc14LWbRsN9FSphnvspVPFFzNJguDg7GPyaG",
  "key33": "5autvbECCXEhx4QWJzx7uFTbxhuAL2qpm6G7jibHyqFSidebSSuAV7vbvQe8ya2ax1gWfzQ6JXwJGcNtUwj53xqu",
  "key34": "3GnqxEcSGV46LguKbdXZF3w8x7jHfqraLiHvo13ATbE8dGtu38G9ZzY82u4ZX3WHQUsNThmi1CZwJ6VhUYBUtby3",
  "key35": "52LKxwWy8Q2vTJT6q2PMvGtFSQiiCVrbCNyN8ysk7BDvGjSyfXjypo6LcLEAyf2PidaYokm7X7ch8JVHvky6JG5R",
  "key36": "5xgKWyagQfQUjJYEVQPVbbnWJfbhwNPFcJXxQ1BbdP431qQd45wnWD8bgafXwwu1pjthVqapcMEDQfv7Ddn7Gd1S",
  "key37": "46GYibipEgbAq7DASJss9EDYdtAVQ4JHUyQvBsxJ3EbM5Bca2Z8zyJ8TW1CmtUEcya4jHHGQaLe9P231fThirctJ",
  "key38": "4Ywa4zQrCEvaWwqqG6roVka7GeUwDyzK8wsTTrRFjZRX2fb88EEd4sZHisSRDoZseKt2QeEhb4DoPGvUFMaybs3m",
  "key39": "63qqAnr7aWos3dghwr1fhmr9skppmoWoeHWAGfyW5K2SBhdxnRtZT3LMnv591ZrWyRuUKV9HLKbvEAAyM79CVt4A",
  "key40": "4DMtgafSEgXGmTbrpZezkvMDrwsyCaPSDqj3FejNftySZWFkFJNSGVcmG6A1KdtYHjcismBWVtpfiPEWHxqC6FtV",
  "key41": "2nTA22J3vWduUne46MBCzx393f78dxDXKdCTADuaLBka2WBBkciSAxsDzErK1VdG4DXkMd76wXRn3KES5Ch9SnPz",
  "key42": "4tDDEQeiHgKtKZrnDZYPMEdQjxSnBqnJQamGTUybfiKxUcmKUkuBnK99etYz4pX8VXy6JWhu5g4Wk7Qx5R77x6tV",
  "key43": "rugpQ1iKCKU6P6YL2Bbf1gbWq3DALungZQP7amhdfoxrs21ytZ4CBTqf6S9v5S9kAXNBX5NAegTrivapsYskpoL",
  "key44": "29A2eLNekSKU2hJ9gyrR4P4YsKChYfdq6PMLbX3VVsmWCLqX7iJQHsNtegLTZMERWmTLu8ZK3KkFggWzdyRVnCBh",
  "key45": "ZsvTzanpiakmLVzNTkrAYvVcpZpHhRrxxuAS5ADJeCFM9JtHGg5KkxGqpBgU3hW3DNNafaENtrRjscH2akWA54E",
  "key46": "5zvAKN9SryPykvrTNnGb6LWd2QegFHYvFvkyEfabKLvPXoSnvh87fov8xbmCEPYUQLHyFvXPTTcjARinb3sc564F",
  "key47": "v96cniT9XAAXsvgDihdUTYCMU8ZDWTkiUtZ9EwVaFizZGHQqeMPMQWiw8twYc4gVuLVQDn3Q8TfT1qg1diZBteL",
  "key48": "RdMsAbgAMtRywim3dNPfJUXt1TemySmVc62EaBsWQJehrJ4yWyFpMRiNcdyK3iNM2mxRJ3AboBFVQrJx3NA6C3Y",
  "key49": "44AtfyqQyFwUHPag3LfphzFzoAjkPGWmki5XWncxEBMEaqJrny31fLKGU4ySndkRn5SVhv1gQVG4YLreM1vJvDTx"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
