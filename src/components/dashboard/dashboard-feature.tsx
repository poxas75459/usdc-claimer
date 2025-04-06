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
    "3xHWNyMRJzFSqK62f7gEn1aGV2jRdQ5xU5g4drCL13oUQz7v9LGrD7pgZPTAjEkGyfUmT2xP9jPVn7TmRquCDqyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d7fqzVRp4WjU4YmoQ2jVw7pghEz3xAq9qzGpz3w6EFqjCDEas1WfJ5UWHecMLUxLpBF9xa7eDWqz9HrC7CqyWKx",
  "key1": "2KJA3C88AK7s6739D7KdSByhQK4GDxfWeK6qtgHF3hE1EHQacLh8DzPxG2FJVogWvqZQwfLBSECbpf9Mo5AKZVLy",
  "key2": "4yhhBZB7QbcktBzHNAH132wg9RjS2cdpgj1GnEdFvGYjeUiruZFz7JUEAuEdFFuJBWHw9LjTMoSY2PJsAjCZ4nG1",
  "key3": "5PmVaFqTT35aPFLQ68DuVsrAg1jFD9LzD3TaMPtXtAbuR2zD2sCRY2zP2GcPi49LYM7ieqsgfpxgXk2hUkarm94k",
  "key4": "W1QfxFF43KKQJbHq3DGLt21u27kUsip8ooWh8shqgor8KzZ49X8Je2SQpZzFmG1sDh9GGRzHKDNgoXQDhvGJCvu",
  "key5": "GFNNGj1V8bvBJndxNmZDcrGj4mb7y7BFnsUkUo6DcMooX3hy2BYE7TCBs5KjJrE6Tixb3kcKuiAGzHbvPSsriiW",
  "key6": "27T2QP3vtZq8NTRcDy4UZPKKC4ZeoWirU63WUspuQeSYJAdqPqkFbeD2bfyRf28sQh3WCybHVVFDyv2rgbCAtMjj",
  "key7": "3rWwYzQnJMykVjcFQjpKPFfwEqNhF8zy3kDyGEyoUa3wLrSEwVd5gac6TmJuWXvcLnY7zQftarfoY8VbbDWDoLzK",
  "key8": "Ny6TEbz6BrVFSQpGpjQAb1C8P6JtA6QdSFhnmoG3MMxd796QfTHMcUS5A13UhZ9JhS1bx2iajKJKYT1qVe88G6b",
  "key9": "5EFKvpcn74eaDAZG5F7esVCoNw4bsHCtQ63zXhyc4k14DiYfro8tY6RtXZFZwFfe71As6w1r7GZjc3A7pd1bkRuy",
  "key10": "4XxGkULK6WtvrYLVKZgZmwT4NDWNwxKZmVd1zUyi1fugkKur3BWCt93vVdbdwvcMQk4uKNj1ggbCB7bFXcjwErzc",
  "key11": "BKoxdckbRTJgGmuiLGREyezXnunZiJEY1svZi1YW5UWU7QSx2QZuai7n6XrRURqYnBY9wgzZDiXsFQjd8YF47SK",
  "key12": "466vBksP7tJDJm1WDEtL34SpzFm5mpbmBe2jS8F6ZmCpvXQM8NB3eC42afXehLBzjwPdWcPE5MkLs5CmNMh4u7j8",
  "key13": "3qNsmYUHG436YAHhKaNUtv1nTtuGSSirKt7fcb9GMQagZ89bZWaDN8TDJLtFXMTGnDLstqu58awiVduoLDyLRL4X",
  "key14": "4eLvLXTmuyrR55EiNP8pLGySdCArSUP1yi2wtRTijpThEEfPaPNUeaHcaDeaoCJnXuzoUY7ZpivvTWkUWMdAqPng",
  "key15": "4hg9vGyfAiR3q5ttnjyGGeBsFLPoGiVQ4qRmuzjzes2QzLzWHEACBUMHcwgHCLmobXaLjxMxizcuKrquR7Kf73oy",
  "key16": "2dZ2yJt32CJJfKbvUG2V8o8Czh3xxxTJwZdyJbdDsP6kbfu9gr7qsvAbVwchEpkCc2bg7fnCNrmJKJvcUxEw5Ad4",
  "key17": "3tNZ8bS6Y1X6X1xC67xriYMxpfWKdVBMQnTGEQDY7xaQJrSnu639CpMcsaqHCVg4uhdBMZzsGPDKk8HdnhYwVs96",
  "key18": "2bqFgDnam7DxACbQ5QY8MfetUsiXBwSjFkEyhAP234szrYeTFMLzjk5avc1mJdAHdR3vS4CkEMtaQQYVQ9r2jRJe",
  "key19": "2J9zs1zAH1EFn8nrzLbf94Qq4QjrLBEm4t1YksUyCuuYYtZsppqpnd5Dj3vpnN1kiygKTnTaU6Md5uYnAiTNJKBn",
  "key20": "uZtjvmnBPP5pq3FPhwtiFYoUYhNv5bVrn2u9jEUWW1EtQmSXT4aWjKMorsEHP21bH7Z1D89ggRjjrV81YxhzDUR",
  "key21": "5XzPABT5nWf2yBrozcxayAZsSSTqvk3yrDn4yP4UVZnDJ7CWCPeX4FSYTaMWeAcnuYt6eB1wFU3ZEFrD9139NxSz",
  "key22": "4nCd7XaAyoAcXWbBv6c32RkNkPdAFUoXz5ijwm7HknwuDcCfyLJQSUKG52P8ojvRNpxwahuiAnZY759vaoAGRb8Q",
  "key23": "oDSeVgRyszyqnnLoEd4wrcSwjeZsCxBAoU7e2wwrXjmSxseTAB7PrzgFwZppH9A3xks4FSRuWD2q94DUiBGFhY1",
  "key24": "3ij7GhmiUiQFbTqbm3DXNy2mFuexu5M2bEAykvDfWZyYVGoD7Be75ogXxiuKtxD5eoR1mnkdYN7M1ND779RuWw9y",
  "key25": "3Laxe6hXnZNH1NQzpKLPfPLRX7eKive35ycQFtFz8FCT4cvQr6ZUjvPAcXPQULZ6KRzFixaNiHdQvZsthkWDSkL5",
  "key26": "5omnGTxGvjUkiXzqLyM3XYhWEohBpUGZ6EYADTmCD7vbg2LqLycsmpjqfiSFrBuUkVoMqfUZxSei5ds9PENcnKYx",
  "key27": "4nY78ffMdUQHaN6iZBpTVuMRiXnZANTgC8YRRf1D1Sh2DLTAU8fxj5BYGAY7thZF8h9yK4YNscV8qjLjXJXpkP6n",
  "key28": "AmBgFHTWJb9175SbAtVFv8uFLJPHpo3Qs9jZ2nDJYEPMYXoSEqAmCLtE6La3My1o74LyS2MSGbPvaAWCZr6KpwS",
  "key29": "4Subtrr9fv4nqgiRLUefxkyQ7JjxcpPH4Az7HM1Q76t7ArQJBu1wBz3HSXQEwkM6aAoGfz5egsy5yhNhD1kb8HE",
  "key30": "3SVag1fbdLqMmydDJ5jgkNDFa4U6VbNZWBt9hgEqaBRPpKv8JhfRTLcuDL6wN7R7TY2oasxhp2aQmc8z8X7tgkv3",
  "key31": "3BCbgaKjmzghQH8CxYUASKFEDCfbpmf3hSRF4oE6Urdm2EQgKA99bKi81aGuhNNRB9eW8JqXfZXdgc31kFRMyxu4",
  "key32": "4vEYjsQr7GxqdLg9ivTTX4TNBW7AkowuWLkZJJqVRMGa18HHEzhVe3tfdHjPq4ut5aGK1oSfkmxDbdwCZ3w9KzR2",
  "key33": "61TLuUPktvU9PJWu3F9MxrRC1sNcLqBPgVYGCZDjQHJ5BuTQPWYuUjrhSNfKjVqDyh32hwg42L4VnCYpgyDw7hBf",
  "key34": "2LinoXMgdX9Q9tbyt8HzZEe3UMpTKz3iFNpT7MJW5fQssqk9VArz3uS8RZtFZMhbj1WL6P3LuP43tWMsc9fdmnj7",
  "key35": "2osiLH6sjnXHtWH7jjRoRgqS5MfReq6BZk8w5KT58FYL11toPnTEEMGZUUkCGv6VW3yMwX1m4CpJcwmj77GZjQSo",
  "key36": "r7mcnePdxiHtFqo3c9SSrCJurZYguSb8GTDR8phRYXLjzXrLcAyGCkzfW3uAMN7vCGVrVGmNmXyhgVZjgyzowxU",
  "key37": "DJroAeVTk8RoTtNX97Gco7KfN4mR164VHBDxa1jRwk4YnM7rovqUgKSjBTto7c9tCT3gR3QJQmtmM382Lk3gxc4",
  "key38": "24uV7SgGu1MmFSoYpL6nMCLn1mE6wsZzyAZxYAwbsCH6YPMCo3pPoymhWawapBtQKcDqsY5fbB8XbDSxmrU6jVq5",
  "key39": "525jAthknvjceFHdugEQH4sfj8uAEQyg9hEf36nTTHhpJDHEDUb3idXRYmxTo2Q2QcjKdwSNzfcQ9Z9GwF89fTAm",
  "key40": "2aQ4aYb4QyViVXWBntY75YXYfTZqaM1A41H7ZwGxhRVppq9YfjF64vjsbHfDCRw3NBBDFM4L9DaVtt4BRTx91V3t",
  "key41": "3ct8zyo56aKoTZ9xXnUGhiG6rGKgXvFXxafi6JNAdYVxiCg44nVJAAukHXDuHQXpqn4BSCSUEmT3pT3ANzqdaQVP",
  "key42": "i5xgDTNMBUbNeFhmXPmgTU2N27BVmDaqqY8CJBeCjkjbe91ERq2kBWubWwTnSCi1b6oyyWKQHEDGW1tGyt21Kih",
  "key43": "5SpuYZj82seSoWaWJvpK3XYwMMQXGddCPBHwstRTrB1LvfHXYRhjVBu5GhiYAveigSzcvFqP7RR4YJUFveqb5R32",
  "key44": "4S7KkL8rdapVyNWRU2et42N6KpWswJ71cYZd5YQm2ZG9V2nNPJpVe4toqUaxYipWjCUiwjYTSfVgYNzyN1VKCbkn",
  "key45": "2WPKj1aP3Hh4zFqt9QLekoD17UwKxiP3esgoJEBdurKAPFKs7EqPFLf73ZwQAPBq9v78XRytehi9KWP2R3jTV3gW",
  "key46": "3NKfp5NJi8uHFTSVh6uU5qB39gqch26oHX4goaTaVd2dzmmVHLFoJmiGvkUTYswARxZG13EwCQbn2GhqpukzkWm5",
  "key47": "5VBU4sHBwh4JtA83Y46ZSiVUWBcdVhPsi9uUPfFmwFVhCKPtSat52zMZTSoxJopoUUoqf6nfZgziswvGwuxtps2b",
  "key48": "4gRezpntU21MXQb8qiwsLHYA5qEC39iH6NPw6mFNBjArkGFB8xbGw51Zi9PEErvH8asoxQipb52cCFhkCun3Z2CV",
  "key49": "H3CjxULXqnX1odoCE86xCjVPdBfKwLYXMd4E8fT2SsxUKgozvbTaQj1V23BCP4bbrSeDeFMGCRHHjaohiPkCcmd"
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
