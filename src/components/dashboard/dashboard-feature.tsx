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
    "53k6hdJQ94ErYNK8tw8Jj2GY2phGahFGohGMfUYGzoSK2uShBupVEnYhvCX92xub47UvamPtJNWr9FDM7cs7h93w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oq6tLFhDZnAiZsJomiYGtMb5Spz5rk41vGvsHf5FqFbNmr1h4trMPUJVYsojkXcoD2DFwYcSN2nYUg6K4E59fxQ",
  "key1": "3eJC4L1Bw6D3P5ezwcruEUNveM7SCNJk3pXeSfjAti8TDpTJWEDUJFoWNsiMtTAidMpaYkQQkri2oGJUudLN7Q45",
  "key2": "4kCeHxjoPNsfif6627UvsT48gRU7qqkBVPddDk9jsn9jZ2qF3WaFGZZSdmftzfKbXg6bAxZzpAs7JzUgoYB2DdXL",
  "key3": "2HRsikFJc9TQxYGaaauSBXtZMX9XX6apb9GZbdEHfWsVPhWqMZftKgdBgDG7FKJ5AP7cJnDqUq6odtv2oywim5GN",
  "key4": "47xhXfdwQ6BNTtRPivizQFFZebPp4u5XGYpX9gNj1kZqU5vx4Xh8kGFn5ByEG2E5dJ68SQQN2k6amNwsPAKuSgj7",
  "key5": "5PEj45QFRsqdJuGYyiCHJaAV8T8B2gPQeXdhutJa4XXPieL7f9GY7Pdwq9WdJWAKYy8h7dzNdqyUwgBnvxwTpJ4S",
  "key6": "2G4z4c3YvGq1uEnRY5znqsw3m3KRon3Andhhx9vqkxZPfVBBGTcyaLRCuUB2wAV3osNMLHftzjqXX1o19XjN2g5Y",
  "key7": "38mUYKmyqqmKMY1nZctRZYDFZhyTjHZUQ5XCqTxQsHJnc8fueF3pEYiLkt72EujHcH6yBdojBTrQm7WogCerbnBW",
  "key8": "3dqq8MGCUw8nYjeXRrxiprgxjr1WpKpkx38wcxCeoZLoT1XtQt8UyeFGPzqzxQVPNHugvxrTBX5k8aXFrNFvJ4J2",
  "key9": "2JbnsonQ5iEwXhkDuLv99safp3uQjzaLbhR969YdNdtMgJdCNQHuK14x2NdSAobRXaicENv8puLb7zvmvF7Mipsm",
  "key10": "5UhWwYN4EYpPyPMwV3M1fgyawSLugFRxDeetL9Q4z1Zgi3uPNwvphYvBsxBZojkNHoMQpqWcc5jttKwv7nk9bGmV",
  "key11": "3HcELL8NVvuWnmAHiM3tXH8UyW3LpiQ53mGKSonKiSYKKtKj2DEuQAvwo62Nz2U4P8K55aoEzGWBLAb763PotXda",
  "key12": "2J8sUN8wSit8cN7qk2sCajUXGXEvDZx9MGw9cYTaB5zPq2ZDLRfzR2agnuQep7qwNj2FTJiFCUrQV14ZhBqSiz1N",
  "key13": "3YZ79aP8PfGJnhhGVgnqd2rtR11v8nhHgeTqmrW2wBLD2hXMy1qG3KnnTTAjQ3NCEJ2mLKfWERfwcrfRJSxLYcu2",
  "key14": "2n6EhKRfeFhsnXsMQ2b1cmpApTk7d9FpUuTrDiduvWPV5Byfh3zrno1R9bJZGJhskiixsadyqHGqr4ZCtKGn5d1J",
  "key15": "3p6R2tYrZwuM4N2rmQHrqnfD9Ztr9qF73Y7bdkYdNNGzs3rBpNfPW5yYa4PkLdNt5VPZz9w7cuxUFotL2tu21Y2S",
  "key16": "5STSzQB8JzFB9xNhkihCGdWqaRUKVuAvy5d8iiGhQ4K9xPcWXGLT7gabqC78voKHZrywYXLqPHhp1kStxCGXBf46",
  "key17": "AgMcVfPF7ujTg9Lze11Ni9cxJuKDZgSmkAqBSeZhxcHywWycsaD2GqxmtZTvDa1wdHDZaFpj41aqZnEW2PGLY9p",
  "key18": "3C2EzVH6qP4oQSwpcoWShWcphpWZ2BssLpcGu82BtCP8oN531b7cJLsxLDqbmhuWFDggPuFJA6mwsogsVaQC6qxu",
  "key19": "4mHYMbYivzCZ1Vb4VzDRnrSy3M98LFd9NWw2GghPvjZpg9DYjrz9cctPdw31VP4LLQeHfcmrtAMGuSJrCseWwXzh",
  "key20": "318JeawgTbdgE5zZyFYfGpW5KfEN6Z98fZuWtmefUQLtrdm6NEemoigVfnUi15DLKXVmSMXAa8KkNdmcWCM2N2z",
  "key21": "kKABnXWTaBXTMYc9yfWaBGfBcPwrE8ThF27vEN4xHUsyhJnVZ4gKG9VcJnFzNuw46KQsrKiCF1VnxXSmFPhL1mC",
  "key22": "5Ah643jGEsTWKtEmzmEnE3EUFG1MjRhSNXDsMSshzSZTQJfhfmoyT2fX8nFKHXfLZ427zDm7CGsZYCUVWPYjf7T",
  "key23": "kiFW6TNpQuzNoA2mLCdKKe58knxucat6Pfuu4BWTK5aGuDie7TQTz1dvt4Lk1PPWGYeHMpgQgu7EPzZFCFFefgp",
  "key24": "3MAFaumj3Raw36434u3QM3YcEJW9PLNKcuMgAf6DrMX1VNvXqqKKddLJdijU9KTMY8WyAnEfZe8iyiB6ZwSWxduk"
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
