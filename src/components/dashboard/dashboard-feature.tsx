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
    "3VqjqcxnhD9yPb3U7ZRRxJv2unthK8bG6AWb2oAQKz2VWbe1MVq65FXwcihHAiVTsvrSQ6mWfaWHDgvftpY6hwnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UGoiTkPLZwNPEpBMxw5K5ndePfYcMghGpsxVe82za5BYA2gmuSpuHL1QXTrNkvXCJH8LVpND5SzHWmeeF8x16nF",
  "key1": "4iMoFTtgh86DsDoyhYf5yFTESYLwsh8j75a4wdkNfxgE3k5ytRxhnrbTe5ZV827vKbGdwChL8sytQXtxK5B6Whr8",
  "key2": "2nKUddZC8RMrCX73WoKdQgPGtLQgtrjUc7Tsij9hLsiU8XSFATTrcSjVnmUX4c8A29ahA5ApryzzPQYwqW3ikKmB",
  "key3": "2vXxYrVjqFS2XcAp5XtNVDLMmJbQffccGneTWb7dpsgUsTEkn6np3EwMX15ryxBQyaKZy8g1Q7x3HpfHkMdeBWu1",
  "key4": "5FyX9E3rz7pPBcMrQxWhQFazZZ2wAyh9TEy5bnJ99CT1meSd3T7Q5ByyLFUTwdZBUN8gjZUgewMSGhReZnPR8rge",
  "key5": "31K7dvVHdBgdHLr252kYQ2UtEVHrbsehBQ3m7rZdSBE5DpSb9xLHrGzDYjDbf6udwQdXdiqLutQCNSe9gdDXaFu8",
  "key6": "5L3JohaVrXMgM2VRnDUxMPgcGtnsAspG2NQznuePiVvKmkBdHukiKnFbGQB1W9gyBr1UTRP4UKGHz3dBr7jsdx1K",
  "key7": "Awd7xrvXGe3MEXREZkqei6xWbb1LqPtvJvrj3xs9YNRBqrGciJCb3LyWVphLuN6nqAGNTeJpckpJTyuCq3YS4DG",
  "key8": "4CxfddM9WGhSHobCesKY6ffbwT5sCaAnKTHYDrgELnqGNWb7egfThTv7YzEDyYvcCLeiTMk2ParM7MfX5qpPkQ1R",
  "key9": "5tRrdduQVfb2zvb4w77mpqxgrfnoQ43gqX4WqtpvTBamBzCLKZA7GBbxFUfUTh6Q7GbprGErmo9uyw5zxpBJad56",
  "key10": "4HRT7BjFesxtYeNoT5Raf8R6fLwzSs8N8x35Ft6YTaKKECifgTfbhvjvopuEsDdvsV2CQhPFDYRvPXRxXbtVCFNZ",
  "key11": "4PX7stUcacE8Rcn3ns9cz6XVgCZzjrkmmTSEXQMGPfa9i2xHWtKLQjGn5NoK3eAkreD6rmWRnE297iLsnhG3ifRo",
  "key12": "4Y6UT7eZCWR9EdQwLMYiLMir6HWRcaFELm89u9tVeyhd5A9THGDN8KweggVUigD9f24M62Qrjw37ZN8j1KEpkjgm",
  "key13": "2uKroucp7bLYv4vtDs1PrrFFA6eVMo7kanYRvbw9Vy76CcLSUx5ToLtRcSsRSxawY8eEaYms6P6YXS3C2H64fQgR",
  "key14": "46ZVdBQk8ieihHpkiJLF9jNN2CjfPx1VeAeFjAFaayfBWZasuu2785ZMVg1mPxr5UGUs527TKsDWgsSFm2xecR6d",
  "key15": "2kHLf7G31tN7fzne2MVH94bMyjARAFrwiqMMH2BmRzFd3iVLUV7puLPAYBh1rbrLcxB4ZL1WPN7SmjAQ7YYbj1td",
  "key16": "3dgy7AoTHM8Y5yzTFjqme7KA9MmufzgAXzwVgkh7ZyybsVDwG2ABSRtX7mQbLbJhzWu9mm5PV1g7YJ8WwVDpqHQG",
  "key17": "ojSZAxnkZfTYkrc5Kqu2kSRFRECm3iocA8FhFWF5jQheVneADf8UG3TmGpTGT2zSH57iNh64RZrrRWo88igtvyY",
  "key18": "5YUQMb254pxjBZ6SQ3zmq3XgdFmrAC48XrK2whzAnm4KnVZ4jcpBPPZ4N4rkTThJkGPNAaBPyQaosGjz939Suhk7",
  "key19": "cXft3BgXnDFDCtHrgZNNw9Ucs5VU6obdmrSZLqdgmuVwUXBWKt6c4G7XFpAVCq2rqr1jjgwrVdPfWBnMZsQf3hy",
  "key20": "4TXYgHvHXUk3s5ghNtA8Y5yuCZHgBEoHnWpS1QXv8SDAbQFfL4mG4jEqh6J8yr2u26wTLXh1oWMT7UPAqgAfnmyu",
  "key21": "4NsSeeQKWTEiGqWyUzAxtDDL3tWTqLEimbEa4oEtMWfVENQbREKnepLyj69sk68toiAaVp7piuHvkbtpa1JggL2W",
  "key22": "2dzz9sYw8ZHkdBoDhXB99qk9P7FKNq3TAD9mobavUvxo3xwzQeLeVAyE3HgFcwxkVaSkKcyL8VrU47qE3pYszFhD",
  "key23": "2ZEPS76D2SWuFh9ezzDDhqousQFcBs53jUEoVy3ioRx6ZazpRjSiBv9HXw97jeLGQsgT5paMVZM6xUTHopcxdJ79",
  "key24": "4VLGnENf9MMU52QWiD3hr4PyHKMyMghzRxTbw7DFaY9YGbZd7fgeMHdQU3epfCAVx1dvtQ4BNE37Fo1HG2rYCys7",
  "key25": "3BEUd2LCwGXyj5wy63LZ28TNVbKwJNkPUyRBLsF8ANWAYF5VSr2UcptrakCxksjWWGuNpRK9Jx63xqUXCZWb5Ld7",
  "key26": "5SXt3tvqLJPnMGkyo6MYKAgmuF8vU5vGThGBfNQK9XAKfyagj8Gi3gefRJUyYrQqnqXrm2DTupcg2s9y81pcix1L"
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
