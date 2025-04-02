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
    "j9RQXcaBNJziCqN926krFyL3viKDVRXp1HZ1Hb2gEBeBbtphnGKsSNbFcvAYZpDN9qnoGbTfLD7y9UErCf5RtyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VNwzu5vXbChJKDDtuh4QureMpMmL1s692BgjSj2ZoCwRyvS4NnkJqemNuzyDUT4n5ChWJFJgW57qsHtMFxXussw",
  "key1": "311hyZVkDuApDE6XVDfpxjxR6tkursLX9kC8HksS36gGBXrzS8dX8QC5RbZZhRwivfZ316E9uk2bJF3KPZgET7zY",
  "key2": "5ZzXqjfhL4iWTX4EVnfnHGfoQtighbpgtNUWx3AohkhbBb2z3qPwVKsUtu7P3a9eCEighhdmd6jPaAPgsHJvdupo",
  "key3": "5ZGhxnDLANs1tUJASPC8tkfrncDnZoaVgqUP5Y3asmE7h62bVyde7JpovCWnZqyzj3weGvki6sV8omb5Xzxw4XK7",
  "key4": "28rHHXJsKZhM3HdEud5RoN87YP8hwjRN1CseuNZRPuykrNhhwJyfDjs2qKZ9qxo9G9jdXai8jckPxr4PKjtTVwV1",
  "key5": "32CuFUZqHSWCF8Vpph335pa9d6iXEF9hfFLm7NCDHYEKLw9uNV1cH6uPYbcTudJyoomLkzL8nTzK27pCVGiQGVJK",
  "key6": "27NPHi5Jrb5euVNzNEqZhfwqGJW4GGhkYX4nVBnzHwaSLja7odx1kLJKJuaobsaGSrHFRnRA9zmu5ARknc3iN1L2",
  "key7": "62Q7bWTZRS93rVy27ePSjFEa2cyb2Ms8GYnktZ5RQPhbNUZsxGK6Pd2wkR4ZdF8Ho26YEmV7TEk2tU2tacizc8Az",
  "key8": "gMnxBQE7qVsFNrkeiCBMuwzDgoRy335i2s7ixPmMW3xeLL11FfsH1JwAeRfSNmbckfdtecJvnGMQUtTqd9PtPod",
  "key9": "33EfYquT4P4LKB5o797nUzLWoe8LLsEG6MDHnKnm2m4pzsikAuSMxAcgQDQi9idy6XoLcjS4YgqEsLxhvn8uxWJs",
  "key10": "4DYJywzMCHTL8zZivwQEdsLn59GjQm6j89fUPTjvycFFA6rqa9Bvx85eFDW7hKWdcSWsAgmuMLqx6NYgxeNYcUmJ",
  "key11": "2xNCwpKkfMKd7QKpsPGp43TfVLvqu7gdgpC2Hv2KBeRCVFrTe8LGFbKjp4mmRgWBwTpKL9Ch4am5C9kyKdpe4i82",
  "key12": "n7AeCXc1oihxH63YrCyQof38NaQoFm5dtBiZbfGFMuFazHvC32gEUGwMfyfCiDNZ6eN4UBzzko2TztSxpXVjY39",
  "key13": "4iRx1jafBcVMf4PC1tbE4kTG1gCE7G3Jb3WnAUbzEZPLoXs3NGGS2pJgY6oRD3eFFvvvypWpKn58Lo96cGBVzp9C",
  "key14": "35NaNhCaG5z2VK9eGaVc7k5GsdUAyBsYJPgWqusB13vA2TXdtGjgcznXhNQ4C3HzrbrSX1MnBYmFqJuHx7YJcsq2",
  "key15": "2mJck5wQv5Ut9GHQqWvrQCcNCdJrET8xFmPDnWxidCiLRQDJezbsB2q4sgqViri9x4442Ek1T1DTymzLkBrdVJ8w",
  "key16": "66pUpPsoTbianS8wJMdWKEpub8vBUvXX33bR8xD9X5NHpM1daVTYDVT6F3zsC2HRtJcWLfSa1fw8sMmb3uyLfoFo",
  "key17": "3PVHR4RKSqbtNWzGemmfQYF4WsFP4UnwfVLoGcJ1Nok85T5K19Z8agQa74BgrvgS2oc6a59imhLgF8N7R6mcq6Rb",
  "key18": "2xMv1XrbvDqQVqqPk2jxngSTRBD6ydq5zbmHe4HRfqH5hvsqpzH3aRs1CiG4RZnqjHY4McAo39SeRV57ZnuTEubL",
  "key19": "2SH9NGzACC176n6CXwdy7MqPevTQfHaGmbJpv56v3zk3mnt9UrwjAonWBKx3WBUU58RdRnEYhEFf2rLoXwcHyjMG",
  "key20": "28HxYPUGKkvaTcMpWnJWBRUHE8ZUCf7F7XFH6TJSEgCz2KoKgbq2jiZC39BBiMMC7yg9w2hgg4d6BDhyE69pUL6r",
  "key21": "9AoQuYR611SMj9M2rWoijURn4XazAJLT5b4m85kmZyYo3gwajx4Vucre9w3qVhdXUrravKBsLbbDFrGVWvV6W6t",
  "key22": "2HGRGTJkXMiSasrbvaBRzmVdwpZDHANbjzTPMuwshBSA5vz67qpXQmuqgPFG7v4iL4FRyo3JDNJkudG9ikECqQoB",
  "key23": "wqffx6BntfE7tGMK4SqXXjawtFQg8mfrYg8RrgAVLGpZiDCub16JLu1VL56soVVauii6qztZLUZMjQUyaRAU1CX",
  "key24": "3yASvjxzUJ9KSjJ1nzeecLRppASUdQDpx5hMWneURo6QkR2Sg5Z3vDAAeFpnGJGjNeSi7JRN5NZuUdxkiP7c8AxZ",
  "key25": "2jgSh6igfqxYSx3fjLkcL6Dhs4KHsGMxLD5BosyQ9jJ1k7gZPkR6zABkN6G2iPZrMtHmjXJpJXAGA6ikqBBeSN5V",
  "key26": "34prJBzShVN7XmmUgTPSZcZzGy1R83eXGzX5oEgauyvDzyJiD1kGnoBAnXZNaSBf2gmdVAsyHoGaSnUWkmG1QohT",
  "key27": "2MG4pYAYTuUXtvBbmQXSqYBWkm29sUvf4xkUbQokQx6Txg5a8v48HGKYqDR9Mjx1iSzXnpzUtodaoF7Xi1jaMF8Q",
  "key28": "4xZ4Soiqgz63LJSvvSCk4Z7zSFEU9CVNS3d9CqXeZCwNptXQ7duAJ5JUPxwjPcnutx47sJnKeTQ9X6wtTYJZgSCj",
  "key29": "2ixbRrz3VxoPVJoWCcqtACD5DBnaYyTPfihkk9m1knKhgiRe63r9wTWxJ5mgTihVRKV2vLa2tPveLZ1fqjrjS9xH",
  "key30": "G5musnHsvAin81zr9v3Z9MWPtxdNeyPXjoCLpwp69GvDNbvhopzMez4drfgoZFmXXPwqaERSL6kU9p9hkDG3qZV",
  "key31": "4FYWzJ9YbDFzQkxuukkStq1Zbg8hqbdcx2RvfbXvcQacvBf3cnZTKx3iJDj8HUKGA4m2Z8wFr2w7fCJdkaD6AJ6x",
  "key32": "4YALL9W3kfDPCPC7WhQ5dThJxTeHnytCNeGnchYBxSs8ouD8tfFuGMdjhATVd8tKWjXqSnd5iFKS83yweWPHct8j",
  "key33": "81L1s8cd6XSmo4hpTWWPukvfL6mTvVaYoCuTbuY41xK2HwWg23JzotBcKobWD6hpRiTAxzMtL9nsDmh5JHLSrx4",
  "key34": "53Xo2fCERVw8SaEBU4c6wo4G41MzyK3aLtoHHEWEJTo9kvng831o62kHVbM7johPBru1avQ6oKwzHLNCZ5Nu3joz",
  "key35": "xgEydU1mKGCJH4ZRcAAd4VWPBgkR5WVfajkUQGN6Ww7xG6EVt6k9qNiTUdwYSFpUMra7MqZka9H6wevpLxBXwKu"
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
