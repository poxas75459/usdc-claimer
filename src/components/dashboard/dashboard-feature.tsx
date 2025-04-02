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
    "2g3QLa5XTFLNfk6NKm8BLJWHsKmFwiodNXK3AbAAWcnGSYN6J3RoLdLkCWFtXXBQudqk46PAmmoyyJwgv5oXZVEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63eZvivkN9GwAbmYod4E374Mj9S8rzi4kStzpzu7GednZzdwwwGFFqYn3kSCQfqcN9oLbwPq7vSuT1mjUYYL1T7S",
  "key1": "sMexTSGW19m11cP3BZZopCXQkUf9j7Gr26jDwdow9SfUebC6WALzcP6bhkH59sFTbhX6fqstv7pK7jCoQCm5i2L",
  "key2": "3xBTn9ygLY2rg2sBHoJjAqFeHJJqyDejNkXJLc623Tp8tdmr48PDeiQ9i4xMPBNd9NWcKLtiTthSvBze8zw2DUG4",
  "key3": "pxAaLNQ5tyjLYAF2os1TbqHbfLgEtTiBvvRi7BBzrmEBu4KWsDC7ALVGzUmXaskJ2QuatUdSWsGBTsvjpyvNuSZ",
  "key4": "2PdsvoH2AB5LyJdJR9fwSME6HbfppSfWBK3iSNCFZzgPE15DvoyE44LLjDFbjn1ccQDuaos5SVzG8wNZzXtErbju",
  "key5": "3W6fDx26cNeFN745Uo5Fen2tVQs4Pu1pzZ7atR2rLiDawehtWRFmeSwd1CKNAaaR2skMXHsWEMfnP8xS55TDmeNd",
  "key6": "3kf8zpdFQNdUMZHSE6Qjkb1hx7NxbgDSqhG25FBxkGnoCwP6EV55R6qT36P4UNBMWhLwdg5JoQvRQS4GMCzS3sxi",
  "key7": "62CStr3C9VWUwrVzqFz9wrJsk76cpb49Bhr3EVuKddjMqun5ZNL76q5Tzux6WXZG6nCMbbpFE1e7HxKqy9LMf8Qh",
  "key8": "4jjA7tN2Zu1fCXyjqDtciBsxR6YeTeC8PwBTeKURpxxcpMj3aaqkzUioqYxtNv9aYz5SoatKzgGWXnga7t3jPjKR",
  "key9": "2aS6Tyy9ZtW9UayqjG4onoqBSHgGGTPFHXiqVJ25EZciBwhJk4XucJsjC8fzwAscmsdHr29ohi8X8P1zH18skALH",
  "key10": "5mC3EYPowrxwxxDDh6HV3fd8VtZZBg3PsAsarRHaYrT41H4ZsNefn2NewCPr2tuzsG2f8rcKpv6XReVgWjvsULF8",
  "key11": "5Q4WnmgVAbuj2MZCrtvDRN6Y7hgNBMkyLUmCiP7VRdt4CAGtxdGyGYwoPbhYxJqzfdhr6Zro3SX9P2UCskWs4yQ3",
  "key12": "4KMLP721oeUugfoM3WHeN4eCVT3TTWbD1bRPKyqvjXhCMEt1C7V3cWN6VL14TY5N1eZWKDDoHe9sFg3UMUYyNwsJ",
  "key13": "fybWm26EGYW6mPJPxEur71ATHmjcLqoDBboJMb8eHxw1YxuxTKAZbwgggv9fyEdmzpdkFsPTLojXDY2BgCi6gZF",
  "key14": "henPrSYvKWRbhk59dzkbySWed5inpEEaBA7zNsme4CAiPJqNKuwXhscZhqtGPEtEFCLYEUonyKDRpgmxWzq6NSy",
  "key15": "J5sUrJPwTPYByAjLjdyH66CxjTvJKv84Bexr1YhJUiKfVTwv62Z8QNnB2Pxs7pYunuYAE8j9X32YpFUnnUfMuxt",
  "key16": "39RNcp8arS2UuUunwVC3y9HZe125rWPi5DNkmfRvo2FxvSmbXUfpBCwLKZS9q5dgnFJ8sTiTQGLzibceyYAvuPHN",
  "key17": "3ctVGvKWajyeh6uwyPe2KbTMZutyG8gNgztGL6tgGTBtaYtCDqqsCkknnvDBkMuo2szdV9X9kWQadsmwFaRQDdfx",
  "key18": "4FuCCmxzRviwJgTCUwf1Dzbj2BC2WyY5q39sA98ffd95HKTH3gbF5bsfr2b3L8iW4jLbk4Kjkr5BYN5toDZDv4VU",
  "key19": "3vRqy1Jz7ABMHRAqxC3PX8UbjndH9DaLvteCbJ7mBwrUuLX9QF1bK4s7XiRLdmiPMVqrxhrZPuyVoz4mjb1KV6Zk",
  "key20": "4975ZbxfS1edCKTaHV2J7agk8b1ywFfUZ1TwfsFtCC8bDheWLwysGYTLzoma6z5esovs52aZ57XhpXLRxZbXEYUy",
  "key21": "3YB7kZBWF1VFEmfPrZoBEpDa96ZaoV1d7vTdef7hbJcEzxFQjSjRfEew38siJtKQhgTF9LiQ1yoz3p2CtfKEUFQR",
  "key22": "4FTbU7NYeVAjJc7dKhof8oYGmUa1kDKbJxqHmcY4ntWXw336go5dDJHmZdE3KNUaSsXisD2VVy3WNF11NiLFKgmv",
  "key23": "4BuKB5Z3REzmBusCb85ANVYm2LMyim2gvFm3ydTFtHJRqz4oXo5SAVs7mZYP2m4ENhYnJMR39njy3qhTNfKvWeAS",
  "key24": "4yB2q1zLmAB6jCPkDAaG5bzX58znUSfotrs1go5Vr119moGUWQQ3tdEtCg7rZmazQevFPRaRthtZudc577cGmnpW",
  "key25": "5TFDWGtjiqW5vgidUii7aGmkGLXGEDJb54UwfvXxMniAzgDWiSpUVq2Wgu3Kv1PF7yqhqMuoJXzugTnonkv31pqP",
  "key26": "3TcnyPd5XzcmcRgfQFWtqr5GFPLx2ao8JGu4DQsjCKQy9howkxwAQHYTVaGYZWxrrkfsWyWuPP78frT2BECQjGUE",
  "key27": "4kMaCuH5hvVHXViJV1aK24uKBqPenzLMV76Xz1NvFCn7YhtLroRycgqviLnZHiBUPWhAjwuW8T1xxYnm3867Ns7",
  "key28": "4MXzCf4jutbCrqUuKg8D7w2379GY9JuMMJv2bDK9oDmazL1WBKSttDY4x7PSK6fvLhuuNbQQpXsbprEaNEimd6Rr",
  "key29": "3KWTFs3oykbEhmeidNmVXsBaApP5f3f4vmfF3fKHkFNDeTZazGghm1c7kEJznzEnC9tEwQQuGocUruzc2hLP5Jig",
  "key30": "5A7Ktwn99bx84kkmMJZxmVaeaqZsWP9wvGbDj7nyDTn14gKgvq2j1ZDeJZNvkBknvEKvTcs9GrSQZUQFqjxMPTe3",
  "key31": "EUQiRy68UKFXRJmh2V8dmMF3XoaQdMENtho1JRAQzxwezFFggac7Uv6uLRAzQmXxBxYFdJhqZR93tMW41fnwNF7",
  "key32": "Z7i6v1P2EGssM6teMq47ojbEZyMXJvdv5rp8VmTvmbsZmsaRCqL3acFRD8GWB9VQiX9EYRBYKKou8d7dJU6n4bX",
  "key33": "2kMsvA1zJfnHXJycLUXqRgr3otMWgZ1jjNBcyyWkskcrCV74MPvMUMXqf6taPnzgTsWcdFCwFWfmudDaFvsbQ8Nn",
  "key34": "4UoC6sMnQtk9zXKGFkJeneDA3dGkknuysU7daioTQGRYhp5Tju9FtFUrZGEJmGbV1YjHYeDdxUu7h1oLeDyR5r7y",
  "key35": "39ZomRN4Y3UAKvad6cM31m64TvsMd5tXqFQxwwfSphiTXj2DkoMm7wjDiHQSomAmcb5vdd8hdDRnCn6GJBW952Ge",
  "key36": "5LfQba73eVgY5DXPPSoeMkboxL6QTMLsw9LfGfgnErQrAz6665cyZFyceLvD37sVQCTPhyYg7nWoohfV1WupyqfN"
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
