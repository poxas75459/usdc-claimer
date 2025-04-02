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
    "2n5TWxPmSGfT2pCp8z25CBcxFeqn2CdF3FxJfJdFtx5XfY2MtyVSuzsaCA4qv74cNyd7ChvJsDdkxwm1Fz71eTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uWpUFW22MnWcVAwVBavz2H7dc9ZZpuhMceC6qrUxrrbNu7TAspLkBsDyvVgungoe3CysoacQJmnUSG8hDfrSzgT",
  "key1": "Cu9kYeCdkmTiDLrjNV8ViFRPSrHqCDYqdQoVc4ZceYGhRrTUCTA5GnDXsro111YPeJRgJjtWu3SoYaBx14tSgFq",
  "key2": "64RfZpKeK7YfxCvpkYBwtGcCkZtyydTxPR2j6g7ESDb4CBqBjuu9Dv5ph9cUwSazNGqfEuJEeNJmMSUSqZr15C4Z",
  "key3": "5XWjtyGhxEeoCoLrr2qeuE9jyujLHd99McBUH1Hz6HMa2ZAtXV7hgaKbJWSwnyue9DnaMa2qn5GHgyxdsCW4cecH",
  "key4": "2r9oMMMKY6e7WjYZwhEL8ihTXvy47KVt7urTRSd91DHX3aWuajjNM7DSxnL96ubXNAYMjS3D6D9UEc2fNk8bYHQj",
  "key5": "59aELQGyj1PCLdfJ819gSEjsx4hSaAAAuMQra9e9VZsziYirvENzq7yWE1V32NvKCfdEfsmCV6GeXy6inRWHtJA9",
  "key6": "3JbnVFgkhtYos2kZRquC9doAVhbqpzMMDh1a5gpGmgLFdStQvwzV3QWPWZakBjeA2TgCABEd6UyBkbBr9Up1uVVm",
  "key7": "2H7RPLjxCnXJzRFUjAsSDVwvMVgw29UzvpN4X2kZFtUh1c1a7RqzfYZoo1AgyWyPZxztm1bYvzqdYpsAqYGa7T6B",
  "key8": "5PgCnX4ZfpubPzQGYDBa4SWC81ZSvaA68ZqVaGr6498hqmLsNonGVWGkYS71AUocAJojqSoNpySSAadttNfDunZ5",
  "key9": "4wNzJXfF5ftoTTjk1D7VUXCV1CUQK1BKxDEGoGRxrFQFHCS7tz3BidepcTCSzWa9USyjQXcxDwUc7L2UKoZ7bWeD",
  "key10": "2GhXKsv7KuXswpfBYEufFvTLafG34rmE7ACujLhUemS4ycM1CJDC1ANAZW1TjxSFwXa1eYLZZoE5qKdtofsGf7VC",
  "key11": "4fFURQDsTJ5dec2WLYzL2Lw24oMmktXpYzEzRBnzazotX1mQfaKGim9T6dXLHfU3UPxWYQpLDC6J3yuCyc5dwLEg",
  "key12": "2wpUZ9LyFYVANLXJ2LWzgdHEa5HzUHqnV7wVpztPzTgM1emJkyRs3B4E14bBGCjBAeUKtVWxHEmud39kXTu8vPeG",
  "key13": "4eHKGAAMTit2MUkuSqzTkRogaf2pdPSpQXFkBgQVcwQGggv9RumQTVao34J3R4P75g3Dv1n4PkT9ZoE9GGEmN7Wj",
  "key14": "57SiNoDyWfjHgtQZ5R9Cvvn1Ha9LnAwaJU8CuJg5cuELx4e6EKbpTvorKPhYqgHYDznuZuzgxLijtmtmgNktcSrM",
  "key15": "bwrSih7FVWiQVukxiEzymVC3daMcrmQmMkGxtygVzqY1sTQRBUzNrmdminofJM2Ycm1LW4XdkKJ9mKgXVV4Vvyw",
  "key16": "62PpoB4TNQ5iJUBthY2AZRtfxjVkRamBW6PQ87whfahCvRhvRhdheeinz9Pv2nyx7zkAbmuFPNUcvL9ukQ9NFhpa",
  "key17": "2fM55ZQeUwPbhPKtCWuGghS2NyFeYNfjbQw977vNTE1YBTNrjriW1ZojCZ9YwB8b6t8aG6YTcYjUVVKtyZucCrFC",
  "key18": "3cU3HPfGjSsFKTzisDqbvyFf7Ep8CzHkHhXwR5q5DRuKoAfFB1WMMLJu634ePPSNkWCUzqzgRcaZGUQsAUMdvKv9",
  "key19": "yfxk3GKLqM6CJHwsnCzU5Lmyk5wk8mLjnVeV4CQqZJunKrDoawZryrp48UUKr3sR333J2KhDbGrqnPJRLdp9Zsw",
  "key20": "3RcNgdDNwN3qUwLxPwKeWUdMvR9oPMv6WBLJo8hMfbZK4qQXdM5zEDuedow4jorevbULW12K3f8Z5NTMJ3XWXeE4",
  "key21": "2AHt7NrpZb8Kj4YGwT4mtdDLpiUAsF6CmxVEVbbXdMH2NM59sXe9BmpomTe79xWSnzq4gkwRAztiHT9xEoaN7cu4",
  "key22": "fUTWGZvSG5P27YFs5joJDQC5uFvKvGij9ApfmQq1maZC5jg3MFhwH46e9CUWV62S24vxsKKdW7qAiRSoKsRpd3A",
  "key23": "2YyGX8hCSnsJ5biqHsXWAxuW7h1FaLSPi19Au4Dss3voB4Wk9Hw1zywCn5tWjsP2BZR59HdnVRgL2Ao2PuDMzDzd",
  "key24": "5vgnD34fxWinfBGnpLobcDVvYWENSZPAAvZ4BhfPe8C14bAkREqLcBBaF41asg4KYgqJnVKq1hvzipgEA5sjcUwz",
  "key25": "4HQZTsNkugTTrEs2YxDeww5JthbV7TKTMceyTxcNRe6Sye85USQkGzLy2varggRUYLkh621xfZVaEfMHQDa2kNn7",
  "key26": "4edyENunfPmDe2HAu4PN57B6JUqP2HqhpBknBJrBeyE8nGRtUvyjhMF4Eg96nUp3zk49kNeJhBFvuMujvwAeqpm3",
  "key27": "247gaJX66pN4pNLoT8RuSVEBjY9hTCuuMaudcteFUoMbgCpWBm331VAznDjdkwpFeKczJKahXXuvKWCvSGGtG7UZ",
  "key28": "3mhcRwKwjgnGbAenXechUD693k2BMYZWimphSVpi27xwtKD4y61GzyUKeMwaGv1jHEfNE5dw3BhDtwh9g63wMiwq",
  "key29": "4tKkqPQvNaxSb6GXrCvx5hAGsFEMRzRbYq7AqGyuaAST1SUyxZzFGrJ4aTF7WG1yqojffcdve5MA3GzbTN6heShC",
  "key30": "5w3zeceF9RbeuMXmcNNphBGaY9e7cv9T7fakYuPWmK4cPoKi3F6CtDnpeCW7A3yitLpTfDyaFtPguaEegbmzi9Bq",
  "key31": "uUQTzm433QxXGnBoeqTEJFs7VgpCbZWScH2sFFQB5EDcJx1TNvBJfuvfpm6AQ3n2p4RAPYtMUYJj7Q7zq1q9Nxf",
  "key32": "4rHAUmFwnDNWZ2RYNjrNCtxARCoenViAQBtUMTccGNiGPkhWdxioxxd3VNzA4kwdVTGH8PTBntvempBkmxJQv7zw",
  "key33": "2M3hrbsSbcFqusXVsb9HziGTve1FiRYy1WC9UYmPgxQrxu31UiWq28Qu4M66sa9QLiFCiTwsHxQuL65RC1HzL7qX",
  "key34": "wgKBtiBN8xTkzVjGaTEt5ZAYo1zJLK16D7p49JJwXiL6VBsi28QGnmY1y6gArSBT5rr4JHRN5kZCfaiEPdoVj4q",
  "key35": "2VJMGdqXE66CJ8irEqwdomz7KpLJG36wWXPUTBx5cj18UrmnL4eQEGsebm7WtQbUyZ3jmwAmhK29rq48xrp86vCm",
  "key36": "2qifAZ7o4oRM4T8jPDMKmcf1iQ2hYkfzxYArw3GsPqKULRt4CuG1Kn6o4fB44swZDz6DFAv82iU4gCQLbWC9TWL"
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
