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
    "jaPEVLRmuLhJnwDsqEBpb5vxRLDrpysu5GsPkvA4hXRBETbsGrPfz4XdQo1AqA5eKyQ7SkrJsg9noXCu6bZdqj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Me9g9Pg7XRTKuX91KvhUvXB7G46A9WxP7rEhSTVPYBk39WqmpLWsJbMyvrMRxJKXNTNYMVVFmXQ3r9HF9Gectib",
  "key1": "4NeBDSGQ3DBqBY9SdZ6tbN9jhVZQwjwnyo9Ta2HpBuQDLKVqgwaG3xjraiJrwMNRYmdR7WBQX1K1iWFfXb9BDSPQ",
  "key2": "4AXakALjXcVi4q93zxuCusvexvppF8vb1MPQoniYv5gJbhxsSWeMaXn6kwoTA9QXf25qdAFL74D7G2fnuxUVQpcJ",
  "key3": "63WYko7V7SRCajd2AaqNS4QcmM5yDycrBDd3fwLuuTtm1v2XDhzwJN3tCzy4aRsCKx2kvTB3GrL2mjaVqqbJcKaC",
  "key4": "9b3EX6BVURcBw4DajXQNqb33Mp99S1vju7qLuyubaQcYh7GBhnT5cF5NjvqwaLmCzjgjd7Ejh1xEaBaG24sZfFd",
  "key5": "3xBHH6RhU7aSnW9rw8zWJZGgE7bo6PznUXGS8rXQC148C1iTraNReNx3VPAi9uBjQ7YEU7LPjQ4Kc4M6onSybZm8",
  "key6": "q7RqWyHWeUoEvYtGXBZrsW2cuJsr1UK7bDmHReiaVh8ryHQrXTPo2gvhfLcGbAoZEWEYaa7ZGPjbyiEUQE3m7an",
  "key7": "4o65eJEcmhVjCmoB7NMtgon7tsfJYQwWHjvvRGiiiMBWUdaoLcVnN4dUtomvApiwDPXNWdcW8ZBnrHATanBn9YHL",
  "key8": "3KEmaG7NANBzgAMD5Zd3x6Wo7Su5jAHKeFqfLoQdCbkiT5uEvkBmw2pA1B5sj75WtUGiFagSp8Jmt2QYBRqkwRdj",
  "key9": "4KmK7JQmi7mWdUQje6FP4UKLJ7EzkWMwp1f5xSDWVm7s2CLU7GwtMg9mW3x6dRgMDkLrepEnb8eT1GwzjgBCPDRM",
  "key10": "5jHkcgme7qCuYeykdaogYJ31NZGh28yEbHFgJAQAMiiov5Rxyh2K3kzhtKehiZSJiA1DNrDrGRDgpurTv2Pgan4o",
  "key11": "5uAp8RafZ7zwWpoEZYFHPuwVinjQJiBnyj3e3UozC9wDntG63RzNYCm4cykqHs238QavDLLUtcdY9YYdTcrxwvXy",
  "key12": "3e8pm9yoZPx6dfRPMFdQe5L9tCMxf6Vb2az3SBdergPJnYYvZrzCgdCi6ngRuuqJt8kusvoNs3oM935JcUGtM8LV",
  "key13": "Ad4JoZkiwuPTKRp1ghEub2c9QZsxYr37mTT215FsbpN7gC9yoNYWG6vZKxRLieryEyqGC4iA5ks1atMGx7hfeUU",
  "key14": "61Jt1A7hg4WREBAkUrjq7T2U17jfVD3jiJ9rbVtissqarzDCbbbayo8z6R3mH7i5EgHogLNiTup5xjphFiPX9HSg",
  "key15": "39kT1wUy1Ph8RG56TbGTg9f6cyv9nSesjWfbzazXBRrm8B5uJuFC7JLNMSjBqW2XZRn76xzumxmefVNRaRfmnJV9",
  "key16": "eTimoNad5oGooA8W8odHurqzG8GSkpRQTdB1JN5R7ahx8m9MVenvEgHghNNwsuZG23T81ueqjdgDrDtvVutyTa2",
  "key17": "5mCqTYQrCDT4bfdod4nvSgr41ZgxZwihdr7xRQMXqyrcBV8Yn6tB2kZakwN4HvDt6eHz8SeQhErRAgwxXFWpdjKJ",
  "key18": "612dUMuDjkhA5YMKA8pWsXyWafic1VYQhJvkpBdCoBJjhNY2sTEQWQZ1MK4a3Zy3vrc3f7QH972JMeG1LDiPjU2W",
  "key19": "4xF7ESDU7WsxGabHF1HF6B3j3QjrzmjuKLuXaF1jmsA9ZJmowpi5up8BQgu1DEmHQ5ETboAXgY9BtsyX9JZpcWw7",
  "key20": "2StF8FiR4MfKA3yP1pMZLEtCMoJRFbb5TAeVbszBCp5Z2jpd9M1JxkA46nQnYAuvVfBuc8UAbUJnLEXECeAcghkG",
  "key21": "3ZEX8uyXNbdxMXGmwLCTxX72k4pwrYeL32nyErcp13UkyU3roefMW7htyPLd8vxoTK3WTkhVg3je3xHpDsf86cau",
  "key22": "52HR6a1PgxpoHC2EGxs5q4gJXx876Lk62vKq19YVcycgiEgefiWE3HiSS2iVrqeZMese7tETqP3c21pWcLeAfmHB",
  "key23": "52esT2mTXxL836Qk9MnwBfyKHKmikfukCqzD4e5dreH5vACqvphHs8djz4fKRrHWYA3zPFpHPbwEueniYupN2jxQ",
  "key24": "4njD4ib6V8gMpqTKETwhT62Ld4LMkLzfhJFjkMYRivM2uYGb7rC8jxoeyg5jEtNBUuiEAVSnSgqoKB2CWoYMoJ8a",
  "key25": "53hM8iG9bTnVaS5YBPMRPfWsuKAvbH1MkUpzRcp7Tg4Mxi7fYKDh9qPeAqNzodsVFCb2LdReKhfaosP5uo46qaXv",
  "key26": "4VRNGkcRWhbvhtFTwCA4GZYL1usSNYL9X7V9P4Cx9rgvCovcH8DdG7rC4LimZmPLahEVJwLLPFujxHUuEVKnDYvS",
  "key27": "22sRUxMNKtQ8uTffTQKR6eMqtdBZ8FXC7qmwYqfrgPPZU2sMGgsVisRPL1s8to8gkKZnCrHzngREdqmk3WSqtCyi",
  "key28": "2xTggvDB4CfMt6Sp1PD74AocLgPu97Wy8GnrqgMZCUVF1AZnAnLrX6eCHLMJVnRn1oNnhQoSWxkpqjgRJwdUyW5c",
  "key29": "4K5KQaU9zHGN65NbTF6LbhxDC5ZJKDC4zL5T1oQTaDyzS3cgofZ5KAM6PE5BS4VytnNVMTymFPAwJdDdpUZjPwi4",
  "key30": "5VTiQEYp9yhVZfKTu1GX5VgtXmoUqG9ffwjp6gqoRJMnfStxrzVocqMW7bNGEvwsY6TyFJ9rTNmXhPSDLJVkyc7w",
  "key31": "3e7AFeHBKQ68omAksWwKqYWJUK4XRVZrG4ipq8B1MGoympWNGGWjogGmxwh74kHTA3KojuzVVLJ748uNQFVF8xcs",
  "key32": "5qzqvED7DaMdEcNJ49v59GkHxttWcXxbqi4HJNiGrG1JTedMmq5VaNNCSHio8NPL6Ttss9RoefxHvJn5wQsiwga8"
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
