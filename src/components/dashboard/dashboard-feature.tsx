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
    "3zCWbZamyQ9gFG42QpESzxETJC9yuy1zuJpyEvJFrCBueqKTtN2wfjZQ4rPQF8jpjw4SyRZkAtTcBrE8LWy4utUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39C4Ga63FYWs4Lgb7gUeSKwhWZ2FZhS9xDU8PY7nVZBNz7NocRyWj4RPKsesFsc6zcbE7fjaHRVe7gdj1RTc9tMV",
  "key1": "4onXpHfEMurNQTCTRKYDzDYLY3E4Kbd866XYgcKHWutTV82Sob7XqzR62VhpRnbcHiTrgT2jb2yePZEt9MZa4vn6",
  "key2": "3vSA5zwYtbYi3h4Rf2wziaHAq6cZiqWZhNY4XueKiKzgDiuHf5Hp32oauV2vU4apXUhwd9G12BponduAfEDsxaGz",
  "key3": "35z2jmJNNgM9uyi6NsfNSZfscJ6BDKj5J8o1iBQubdvRzwtF4svRvy5ng7MR2USMdK4p6kGtFCmGnum2eBzDW62G",
  "key4": "4GGuZ1kX9vZz3jbSWzM8uXaN9cCsodPzUjM9bZcTNVHnMNgyYzkgkaiRseY8p7qPw5LDGqmgh2G4ZnYtYciEJPtm",
  "key5": "5Az1Rq23UxppZ81yPJEqKKFJwncFmejuTiT7ReWntTUNCU8Ps2vEGdMpGEVwQD4rt4XHU7hz3gJZ3QypTm26Aq2V",
  "key6": "5Qmj5oyfsSTwufiQqBhVNhQB7wDUS34vp9PWR8ZyTEpBVRSaxdPdnXjn4mGpqeroaSsR6M4hsVRTYPQF9YnD6N37",
  "key7": "25CWkC7CZGcdZYEo1TnihDXFwjVXHRnFXTakZ2LT6aZj1gSe7vnZBV4ryGrZ8YqPwTbzcYCUe75hogZUt1cKxreS",
  "key8": "3c2nVnm22juY8WqFkSsd2p9NhLuF85EU4oM7Us2e4G78Dysqk91ifaphMLbumg1uA2HrYuCP5pD2CV4ydC6iXY7s",
  "key9": "4H8VHpCqMYj6bBLM3wJoyaHDBzr4G8SBFsNHzTvGFuNgyGJoUhnppuWvCWavqSYwyYRRhyM9bFVMQxZLBR4XSFhX",
  "key10": "3E1rc2ojCZqaApyyNzDAPCcNyzqpYaGSpb2PW1iitHCXTQ1oB7zFniGzzJ44LqMrd78DxFh8U2NPrzEnxicihtud",
  "key11": "5TcSSHHvdoAszXmeVZrAEbKnwZScakx2SVtN1YEd8WXmZmB9oKMUDq9DoYuzhj6DA4HxNvCs49XC5vwgwmdfbUir",
  "key12": "5xJavVmy5dNDXgmtJ57cfepwEY6aZkWPgYVbPD5v8eMGJotpNAQwDdBXzyCgSdw9Rkssp7LquSguiM1XnWcodPob",
  "key13": "5GA8DbDqZzFEH2b87Zq1KH56JiyYS76k83FvzBJhLa5rwDQowmmY2ELe3wQeccBXHqQSYmHgqY4z4G7hMGUsaKLX",
  "key14": "4CeHYrDrvGsu2m4nVpyvtzvF157u5kn95Y4PBmXAeJyVGbf7aFsPzxyZZ7Lbz94Af2DoUXV1jkhc4GWQX27mUXPa",
  "key15": "3zvKy315zhctp1EGnxNfxUdYT1W5i9e43bCJ8fcfBB5nZQ8x2xV9uodyXZuCDwjbebFMpUkGjXEQESQhW9Pj7ZFJ",
  "key16": "vK6gdS4Z8Ux9brFPHpsUXSBcxRiEoXuDksVnRVv65EuHQJ36jwxp94CQ72R67p9weji27N5aF3n82F7nQFcYDkX",
  "key17": "2MdcdnZKrzdzJYAcAwehKVz2Bruq9YQgjDdX9phmf17yKKHS5GgmwTw3EamSkBG3m5jbF7jKjj1xhzUg45aDcccQ",
  "key18": "65EMpQmoxFY4HCMpKTzpowWuV5f1PrtHskrLJ4wEU6a9DXmPMWDcpxSMs5zz1inorUJBr7FnvMqZvcJ6wxkyDfZV",
  "key19": "56wwaZYXkb6GytA7TJTtEyNWj84CUADkQD6qn6dpbGGFgX4pLb6Mvjd3NsY2Mqr3GGyCb2h5oKhk1NAJppZYcUCE",
  "key20": "24WTn9ZPSokitq4DHEvwkpuxWSRwYkNJEJDr6MJ39XqfWLHT2YbYMa68Y3mxARTHVjkp7MXmQAKPEzQ7BqPZRiBz",
  "key21": "4JTRfaE2smp64ywDahwF2Nx24EEeSKzvV8ETDd6DbJy79QEz9rji5r3eePDpt1zF4eYomkHsPvt1uBYFCGpz7dbf",
  "key22": "2Dy9Tt57pUz3mUFt33iuD2Sgc399oLdBMM45rp5v8b8EPtNV9UU8RsgtrYMFJhbUP2KsUyqogn2DbaNUwREtRcpD",
  "key23": "31k5EmcTDSL4kziDhM4cNhjEucBLF7h1RXwbi28Rdh2UrDn4FpxQjoHU8tv9hvzQZVtNC3TWpjsXFG6VdiSg1fBW",
  "key24": "57zYtT2GN5AmL8N98XTjJT9Ey4LxkhKBii6H2NH9B5WxMBCg3Kouj4htdNs2d6Ask5tNMn6wuPUp4nRsTAon7zkb",
  "key25": "5yPe4SEoBSczDEgiCYxdGgUQmJJ6uB3nDxKhUdU35eEnPq6H572gA1ZBLmBGfLRHjx4DbC7m8arPzmejZquGkqbU",
  "key26": "3ryz6F5kVJtwSDPeNz7kapGhBRMUCf5d9ViBVgqFtK54T7TadSoXiP9gEryf3tVzvV1bnT8jz3Syu4P8GXhJPcQd",
  "key27": "35rMSxgR4ZSLK5A1y2CwRj1u5LSNECVvRJBdzz5Pa1h8BTxNBz82wx5nNpbAsdEE95u7kqVAG8zQZRhC2TjF7ncJ",
  "key28": "Rbu7JUzwUpX9QhMbNvSpZryUNCXtD33AX3qJMhECUZffzv2T1G6Siyuk7KTEkBqitX2KgGCAjcioyd4ZvudP41E",
  "key29": "2KFPKAg6aqrwVrP8HrjmHVzyWFMnW4edB2HxA44kF5LBoJ8HL8FwkZLHgwAmVbMmezY7SpSELTbW5Ed9HRFf6b3q",
  "key30": "55ta5Afa1L8fLwKV3XT9rVUwBYdeDp6BUj99g4tdwX2HvxnBicWXwwoT7ZxaUpCJkMCgyhkUP4ovpbg8SY7Yjti6",
  "key31": "3URKL1pqG7dEtryxrWMxvjCBSGUDZMXzU7pRTewtFeCStDFHWhbSDTZqR8mSNYAP6VXJyukcspWgNyPN6LdQdxaY",
  "key32": "3FLU9m1mrs9yyPbKTECrBXAvrBMzixxxoLuywyRE4csofVUa2Wwq1kgSTscZHvJovaHc9iQRC9CftNi2e9Zpkyuh",
  "key33": "WkAwtcuituiEQgKmYJcbuN62Fp1vJy6HmJECXrZGDtoSf1bEWDGg8Pd8rqCmq84rDC783ASemhPCn3XCee4DkGW",
  "key34": "Q2zdpJG1kC3vWMS5Aezgq8KAA4bB3542LzyGG491xsNuPJGqG625fW45EPLBa3YYnehMTNx34tEjoYe8fMjvX8S"
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
