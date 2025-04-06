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
    "2HpATLiF8Yi6QwtTSZZbcF213YdwhyNf6K9isTSmsUdNABxPJY8uuRASygZjewRvjxkvFfmi9APBatUENpss2k8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UAjwNgcrpdW7mp8pbsBLLnSVqPgrzhGT25qPFvdgQMUuf4PVtD54VSEPkDVWQ9bKHKxoZEE2jgYmu6npYxW6eV1",
  "key1": "2xm7k4MMDtfadsKaKABZFbd7QhBqzRM9QY71UcfQ1v7KkZfZxvD2zy9pLGtw5Y7yRSip1a2ZXRN37JwFjMsttMZx",
  "key2": "3NRVPeQ4u7FKhDahfLEvZnadxSwVRdshrVV7CYYiDMwCeGQTcj5EHGLRa4iBDcAe2sAoFHPpGdXyy3TCgy9jR1vZ",
  "key3": "3MoPXYBjNNnCVEtYppsw9cXeS4Bbu1AbXekT9RYfi6PQussEhX5gf4MyvDgtJLdYqgKs5C4qHXt9Nu55wbwNd7sh",
  "key4": "3KWhqDTGaoLfArqaJJPMhG3wArebsKwrqQmjsemnpmRdUxu9FSGbwCm5bP8CGdovjBMqGyCLjqLStqZSrGUeqEeM",
  "key5": "4JYgXpxWQC9ngwnGpWBZjVbsBxJjtodWuXC1qidHFwasTzCbc6njZZZXfdFJ3r5vzEWe9h9CdFQrDn6Koubvcjfv",
  "key6": "2QVEdkYKbfqc98UzEsDm9QoAGdPUxdEpkuaqDiiSkjBT3TdTjtcHAnPBFG7cj27TVqSTG9DEWe8gbpaf4Cgdrphp",
  "key7": "5v4YqXDYjaXVUBqXsbxj97KND2vec2JQZK4Wty1e4r47gnUbMWvAWdduNzqA7fsRSoBKRUoWZLDTLMD2CgTcpH5a",
  "key8": "5tSQTBu89b3n194tmWRSLV7Tcmkp6ymxQkc77PcpoQgSW8fFbpJmrbPn3inguB8K9AAaYvH15k5RrMhNfVnfa8Pm",
  "key9": "2NJ98rDkTNkX4f2C5BrLRSXJSaqLqE814WoU2Y6tDDYwtkUmhkFvir53vgxuz1KtkDU2yHkra1rvgaRb4bcWJQM",
  "key10": "55mRgMTkkAK3ZSu4VVt7BZhg9qEzLX2zdk97mY6DYuJivpUFJEUCwcEMQQbSDdoEGjRxQLfxfxD4gnTpgfksVFdu",
  "key11": "3gEQrd8SiikFdCi7VyGmDvQjNtyNB5wZx1xerAqm2mhE5nHmVHqGnBXircaA4iUcv91h7P4QEMDGBDYCsZGqF7vi",
  "key12": "5oYPLbbQKPVcgGwX1RZkEauPgAVWdHLsmBY9xg5ApcFbFyPUFFcGHXxwx1kziyyiM9MJ9uQeoeyPnymT9auZgeZa",
  "key13": "2FMuZLDbbma6YFxVdAjAm64pbqciLiE9zfGVfnJi1F7WDczBEATGUGhMs9o1vwU2f12sU9UeNZ9U7kzozdgs5p2w",
  "key14": "2TcnNg1mZ6Xfi656WfRA7gVHMPR51nhXqNcGUYZZym9Ab7yDx8QgYAFBVrr4DoKLUPFBZ8BAFe1aTPjjbAyoRSbp",
  "key15": "7UT6E6EeyUxe9MKwCAdrRtqTo4RhfWb4mVnuUMf8PqiKKd1yTww1ZMGn5mkiqZzJpQCgpLrXSPnKeEWEhQUMjwR",
  "key16": "4ngqZyMRXB5xDT7fZ1dtcLmXFqQTF5UKxKVCZJYJByRrqpsSbZKirNaWPLj4uGS543UkHv8x3vxMQtTMBsFdWpZn",
  "key17": "2McukJmAWgqfcri5pP2E7JLWC6oeFGh1k7URf5W1moDkAZjNkNFZ1kEMeiwE77JjBPMQwhZ8jntP4gA6TfDwyL8x",
  "key18": "jC195hkA1YWTaCVCjsjSnXZKcusBoyfWzSUdHsevRKsbdA24UDG55CnFu15EK8SxYppRrT2ZzQQpRbkYGx2aMNQ",
  "key19": "3x1Lz2bHCHVxJYNq6EoUWvCFkYxSzPsboLjVn3ZD9hpmMWuQEsACqFXu5GtchbWMTxzrfZNTFXU4jcPByW7uKnEQ",
  "key20": "4eM1UXL3pw7HUxcEvPDUPngCvdukRkfyRtTyk4yktakGUYHUxs6WVQ9qEgUiiXHMmJK8sT83M8BzLmbQyhReQrZP",
  "key21": "5YdK2dhrhSmNYAakoKW2WMQWkB5k6xuevCTmUA3bcrbPakccEAnn6PQEMmYCuHzUYCEXSRE4ByD9GFoTx5y3sJqv",
  "key22": "5HGUDWUvmp1xU9vM8tU5obynK1bczos7AF63oGzRzpav7EfvngaDoibfyssGejQKzfeJx9zfEWThSgxHUMEAquEY",
  "key23": "2Yx1z9XcMEc34QMUDzmtYvsmFUjeyWcCtrj2DsRGLbryRQRPR4ymJJKUghWvPHVLjP9vjqwzF1qryJhEqarLrHvv",
  "key24": "3WoWU1UBKgTjkBpWwm3SbuqD141pEaWNdFUYvDymeb7uv3TjJhhzsBfPKjDC8b9s6JWFPCjDPB5C1DjYpMiFeyoF",
  "key25": "65Hxg1a1UvX7e2Pojn7EtWiZynQQMCXBjjV6hnJQNsfk3Wqg9dCNqs8bNHQxibhvzcVBYCEiMvWNwdX7cYgmbHkx",
  "key26": "33Jeu4AkdBDVSFPZ1JSETicVoVVJi4CWwRTS2BVo9dkCGyNwv4q7MzGjbGyPeFgwHKTxZqi9ukLqt87PVErGbRtd",
  "key27": "4ez9adRmVqjJicQk9jBCvv4iM1eeohni2eVUSjDbYPvCCGogXpFXur1dSaHrQCYYAfS7pNzHJrtPihxTsa195sfb",
  "key28": "LaxbmdxGtyRePJwJHVPzo5tkMt1CjCKnbbgQ8dbVqyLiZ5Tcmzq97KVUzNFve2myd5qxa5Dr4BW11JJEHCzekVt",
  "key29": "3MxtdPCcfd8UtoBrCHRavx3Moc1YUMJcZMeszZAhAJAVd5ZjkzmvftVF7ZvW16Ha66YXB5cQTUvr5McDvbYN2m2T",
  "key30": "2un3gT6kcP6rMyb11zi1XtuDJPn64DQsMdKSxGvdtA7atUNfV62FhrD6gEmAesgpNwBSZQrtGUtzjTwxqxAEtfFD"
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
