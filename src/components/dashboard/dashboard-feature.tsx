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
    "nzCXaqwCs3nZEwxaz5z9gH26KqUGSzzuHTeaJXunpD7KUyTFe9JuPQjwZf6SQinLzSAZKjj8SpPwSQSxvPf2Wzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y8vkPTLFgjxsTBuyC83JNeksUmtKMKTBZcMaLMWzSJE8fCMorP2XorDPH7EcGo5g8uXc5KGTQ5y5NV8wgcGPjd",
  "key1": "4GNJHbjK3ZyTSXP6Se7zv9sELnMe6duc7G7qMXDoXQirP2v1dSFKUeVMK1hh4F5UfwZWZZmVd99bVr9suPMpbsgP",
  "key2": "8CkJRmqK6dgonfvBQHiPfV4nyByFswSHe5JcBrHyJwonX55irzJJXZ8Q29sPoabD74111hf1Hm8RaB2mAq34Krk",
  "key3": "4BaCUy9ZLeHJ7DqCmA2oPHqUK33d1QyVSZvUppYbcr5MVKdcLVQagYCMd5Rnn4crGevf3kuor3imZQhJ7nfdbhkD",
  "key4": "4KVckrygGB5BXma3ssGXMU93Uv1jik7bEJuR1CVyvitWuFSbEFTFZxiVyvGbLmJwnTQfSGXFeQo6bzgxYWQZx4c6",
  "key5": "4QfFNgrk1XbzmZxpdyECq6zh8D3ZENs4pNFWFabdC7GPC3PCj1gmSSJDJyQPCNiNo6K5LA6MbnQR8m5KszXiC6pj",
  "key6": "JNqxs9mmJWW4RQpPunwvkpVNTXFyCZ7KpFrGU54V8QcraApjSDjXKA4sjLAEmAkDjiPXfsdbAvaN8zDproSNafP",
  "key7": "su2vX9HRizCR5DWHStGZeb5emiWzLfNUMCXvwgT2csZyELxovctuDjKLWBLG8iECZrzikA6o8ZGN4jmFtJfS8FE",
  "key8": "jjPiYJcR4uiaYKjsWoRo89jHNVFD8eBUAy5mRwSRedzQ8XY9TN9L4HjAaZDAMhQ35g7AukyRkpu9vXEi3Jw8NNL",
  "key9": "5MChL1DKXQFYy4qDVtamahNNfqkv2DjhuiPYCbybtmLNJ6uaXMWvtthRqNGMdN4YthbRkt8dCa4pohpJDeUZkKso",
  "key10": "5ns3F14eYiaVC4dSVELVkwNXmBCvjEJ7PkMFXiq6H6LNTPGbHNjDbRkatHsh72y1PftnyvFNShcLn1FarxLiCm86",
  "key11": "477qrF4kS9M5zMqr4fpgtmCRq1pS6Ds6scGTuVCxsutAnFNrsaufUZVQrb1ft6qnBfkUDKKQezE664JF4tcxH9s",
  "key12": "2GeRQh7igbdetKwCWXWGb8tnHnocBo8Cyzhur8d2KQ3hxMSZdhReSh7L7EuMHWcsdqF7uZ1wJSzLZTnT398ERzt5",
  "key13": "4BJmfXZfJraWyG39tYLb8DmRD7bhemRALWbyS62v9q2Xh6hZ3qbabauMyxXYXbBLkDUKvLFQFWN4TbEZSoPTNDZ9",
  "key14": "iQifrUnet4omVSpcUEjMYwKD6iwmRJSFZ3HwBGM4TCvG2SghAPVrNNbM4m2SE3Gb3tLNdooHQ7AueGUq3ss497d",
  "key15": "5yxbdZKDpvHur61m2HMUKBtWom89TN1Xe79be734Xqt9GkFEoAZFZp5EReCKd9mwd8xGeRVtqNm1Jz9JottchmRC",
  "key16": "5mVNHBmGM7ZZFqhcQ67aL9ezKrCzDwuwFXjGzTHwopTPpK3425N3K1cr9kuZgywizPjxXdUMJAUEkQA8uXmmsBX7",
  "key17": "3pyBFiJB8mUTo1hZmgUunmgxWQskrGrM7CWraeMRhkm3qtEAGdAmH7RgavJVv9pnbuM3z8rJPbsSDRDfpMqgPTde",
  "key18": "V7zuyetri831ywjhpKAvykEo5KQZsz4ZiZufJYnq9xWbHsmSmqkMEKNSLtisj3Kwtd56hQsyG5Bikjz7PXcEz2z",
  "key19": "p4UvpFLtrGhtZLCWWwj2U43dCA1qsbNfARndgDWSm4epyP3w8hX3XAaMswAiMr9isLrL1aoU7GGLurLLy4hSoJr",
  "key20": "4gKsJe2WgEDAb2uMFvJVCpCGd97cEhXgimRB7PCvJZ7TDJB82rQa5nX7GKPbyFsaCgQy6mSBGL4wuA33evsdqemu",
  "key21": "5jnA99BNkJVZnHCijNgKspaX2wAzE7sqzYzfSzh676LBLzBkB6NcEzE1qS3g2Kx1jTnKzFvP4nuryn21uZ7PsNJ1",
  "key22": "5gQo31gFpMmb5kwvpcGMVjzj9quDrEPQWsoNmWnJHNkMq6bqZ2bpCEeBPuEMU5ZWoHiCFsHG5RtjNyVg7NyRg637",
  "key23": "3AponErF2SPaouJPxUYSw321X1pXU5rfNvBKWtXVS1QpYcAGV6qRa4wgbbzuSatFdUZAeLUw6BVnzeAKkxE7WqnG",
  "key24": "wVjhAdXyo4VCPMw1oHkw1fQSi66kZp8efDR5RWQmWhRATxSKthGr5mDjzaGNRmjUSsFEBUvpK5SY2YdoEQFkyLZ",
  "key25": "3hCkxyCByFufq3UntUnvuUbcxsJWCJgtRYdDuFNL5msq9VbKN8JHv2kzL3XuJAgdiejUE2cPVjUMkPNeYebgSeH5",
  "key26": "BQhHTkgV7cNSpMMBrLA5roXd1AfxTjUEGQGNDdusTjDmcCkQ49B4pfjZzjK75U2yMZUpuWKkkuPjySf8TbTL2gf",
  "key27": "4vNRm3srTH3CKYQcGsb5FCRubbJKB7NZ5MnC736hJL6C6RsXapJB9BUC9w4zykQTMSLjthW27c3ctCxwZcuxgYi9",
  "key28": "6iyittpHE3JnDi9kN36YMJfNncjNEiLCnnRVTX6xRNMzW1o6nCrbqNh7jf46jz3x73RRLPyZGz91B5WHuLJbnDb",
  "key29": "ECwrryz4yB9Hgq6HE8UqtgmMaELfUXfZR5oek1dJ6QvQScDydFjC848V13HdkrpzrYXHvrFDRVR7BDrrounnSkM",
  "key30": "2PR4BzHZdwBDLJKQd79KuFP41N34GTesqpwfgfEhu61WRYxuZCMTqdDYNJ48KQR8DrSpCmzdcd4oZgMqLoZtWs7t",
  "key31": "5qMCxUiQmUYzUsFFrtuQqZ8NeWHzHGiSypEBiNWv8rBmLb1jnZtW5vbMuUikB6BfcjEspwqCX6ajQz4xci7Swu1X",
  "key32": "34FXdcR3Lxua59YqNDiKNkCiy6jzvJKwerzKCNcx4U5FMtoe7Zo9PFCJgBHfpcbUxZix8Jdd2YRGzvL7LTNN7He5",
  "key33": "5WPgUsdc5AmFFPSTLj1qZXccT9CCsdVnCDMAQ8PWEgMpUxZmva94iELDzShh4AVNqoEQdbzvHzUH2GoYxvc2EU4k",
  "key34": "2aGdQ4EHBV54tnVdnq2XfB67mx8Q5C89zbyjZrh2ZhHGtPAm6EqgXGoWaw7GKP2sTmKHkLwJnBp59QmT2G2Vambg",
  "key35": "4A9jVPWmGUyhbzXayy7TPb6bzsMw22fhMn9LbC8pFGiygvkfJipRNPxAf6UzLCuNdwkaszx6thy8V3mnq7zzZjKS",
  "key36": "54Tww2nitVk4L5EDGWHsfdjpG4Bibij2RiD4WTqiBNhrref3tUkHsYX3rdbyNUyh7nQL918x1fSqUqWhBsSDaqEG",
  "key37": "5eFyi56S2AnTWL76Dkfnt2GE3LTcJiVDY5C2sexBkHNbBqbzZ76BBdsucvLZhhtjYchBkmmEYVUsNynxz9TkeWPw",
  "key38": "vGEFMr4JjTWABwHoNdnEth3PZYxuizgMjBdSsaqvbCrKMho1NMzpKZ2ZLDRCzbdQuTqd2CNyij4oU7JqBvwn11X",
  "key39": "4nzoXMKSD3CExhAqgPtUfMpwx7Z35B5BH6jhy16ndXAohV63uUnhdCMnFTioFzNjsGZANhu5WvJeYBtPizVcA4NY",
  "key40": "2UuufAJdqy7XmJHHuAsX9QNQTPahVxQKFakkVDXUpnoVeRFuECHrYPYd3vj9UGqB9vZwK1g2MiFJ55UStvxoW4UK",
  "key41": "opUvcrJ7t8pmDENeAoeBoQBM85eGwojCV6ukKZPmRiDYVdXcUF9ycT2ubKVJpbVk2jScNFN1apqKFqFRe5Y1DMk",
  "key42": "48CFQYdCYS6PRcvAfq17LPqcKSaP9nCuw1sHvpDPM2y1xfmJKkzcg7Ak9V92Q5HmCGPJe5YTiQhEEL8KZhxcteBh",
  "key43": "2B3q3NsDczYonASxoorrncqMQgZKycasLoeyHZTtoTB9E64ifQkvEHT3uaNqAg7N7Bj5ythZzNPHE8ZSeTMnoYBn"
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
