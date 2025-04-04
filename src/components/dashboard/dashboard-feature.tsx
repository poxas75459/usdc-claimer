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
    "3L2QeTGzTQmjQhA6hywxA4QdZsQB2s16ms7KkMSUbA947arsAxHiJ7shQgXuLBpVuxjTfvwr5oas3iHNmWV75jgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y6zh44NdmQHaB8voMB1LVJzGEYTnMzG9Z7uQB3Y6omDncuLEo87EGn1KNZ8emqHfytgvANe7yaGGSCSXUCi1mWH",
  "key1": "FJsTaJngTLSXhbHAMc1m9Pdcj5ikZXg9AkWsGPRzeVGc1U7d2EWsDhUcm8bSbZk21fkajvjtc1XYdoeUsR1Gfz9",
  "key2": "5BDPy5urRNY5GAw7oQSH32QBBWLaLMGs5FrqxXzxczcwZHFW5zmQNAibk272sfv8UNpDgmAVhP4Y5Ncs4xNRPCMu",
  "key3": "4ZWy2tSV1fVUw2i8Yx7Qjg1s8Pw7ob2S2C4zTh2u78Mmtj1PQRs57HQWdDPD8CGRQjj1bwRTRjvMUcqpaUbAePod",
  "key4": "2hsyrT6Bcy77zxmh6YxG8pgBmKkgRu4aQmzSgc9eHFaK6N6vsHQ9ntCCCVJUhctDAmRq6VvmsrieCudBDZSgv3EK",
  "key5": "3EjwD1paE9E43frYWB7sfyL3nubF47dTQM5LDPRoUsBU8pkjJpDX2HVQi4WuCF4PpHKhTmVFHmtvcYe6wgQQAMSh",
  "key6": "3nXjZweic87EHjVSUTtkvQUeNXxQmaSsUN6eij1kPwZWK28PjL5HQ8zzGV4haYCuyjkXcewc9jjw7jp6fEx1pF36",
  "key7": "vLoiigyfn2FXo2uzBn2NQeCJaC6dDKoPsRtHrAWKfr1E8Fp1bVWke4cpDL1Begjsk5qzFcSYk2tWphoBwiQB815",
  "key8": "5G4PyGDfyNgUGhkdxRc5hGFa7P7jJrwxTj1J8yYPcVdGLyC7inWMeecV6Sj1qEu13sytAJrtR6j7bY3uN2Fu6jkL",
  "key9": "451Q4bBYGbtLyhPo4653z1XuEQ2NXk7PcPScVTxVk2jB2ph9Y5to7C43T7Q2cF8gz1a2XmzeZCSXkgNnQGMBV3ja",
  "key10": "3gcfBHdLupjgtFCUfGkJvKm7VdDv3RTCqDgd5CDATrV79JQWxcxWiTbiPgEJpnHmRUp2Poj1pm7A9dnC55Yqxq1X",
  "key11": "cnDqZmnkPEEZzB8xTttjNCc9GHMxCMfs8mXpGXNHP7EMknB61v4HK2R8RufyTjALrniR4VmtQoKjiLPrYABx1rR",
  "key12": "4wFiaT4983atkGFWgFp3oHDTex1dw5e4rRWsQCwx4nMgS7RAWeGW14YXP6VkZ25XhaMdmvmWZrqBwkQaicY5txDT",
  "key13": "2UyEwL3wqhYNNJUoyMfDDE9Q5EdikSNVkAaT6YvasYBj5Rw5hKob8LuAoTRZ74cpaa36HjESwcn9LPM7WzJAD5VQ",
  "key14": "iXppXyQzp717Ea3H9qzKtHHfdd9uKSKwsGEv1zJGShhB7Rq3Q2nG3KrhwS2MqYBpZxPqDbmTPu8TVtfCnnFmbZq",
  "key15": "44MMNnBwCre5cP9i4BLiJYQcJ9Ci2DfBsA9QLeX4RVAFJoWU2E6WaLREtzhRhrbfDScCEVS2K3GrYxP2xYU2bMdQ",
  "key16": "611nST4MEQTX58WDjcqT2ZLP9zKknrE66KVx7vGuRmoJP6TTta6wboC3ag1x8PocKjDnTRRQ8YBLwprgAR6PWaQM",
  "key17": "2zrHeLwdLvmBsCtao3AW7NNuh58aG4emggim2PkwBi7WqcgZiyFWwmRxTNaHmm7G46iEzQUiVz1MpBLyrspQ81CZ",
  "key18": "2FxBchLu9yYWEJCY4Md8JEBgjFiCAkft4pLw1GepBdar6mYUGfM2Sy2a48C4vchZ1ziteRScsJusU29ogA2J2Bvr",
  "key19": "5yhu8khrZrqwCDNwrPwmqKX5MFGvhuefD8WTTmaW3z7tjcR6rtSWkuT9H5LmPA9fhDovSiEDQoodVcSSnbaqJKZs",
  "key20": "9JoRZpovC4CbLgDaMXC563qoo79reDUAB4EKH4Qpmp5iYLPUDt8Q3uSW9YD7PL62KECHDxTf5joT3WtkthLipuP",
  "key21": "4cXGvdxCT5y6BZqeeqg4NWUoed4cR5RsG5YS46emqUFQtzQYMNVGf3x7Z9CZYq2hiR3MicSmiZc55C9XRUhpGjh8",
  "key22": "xurJxpBT5rJbSj3tWzRCoSziKJA61nZavdVygJkgEvJT8BZ3mNMTLWncysEWbvZzy26a8dm8KjhNTkaENJGZ2qa",
  "key23": "4jrhTZJSgkTgAu2DUbqL6TdQSsiyStVmr1q3xAtdPRtnyLk9jWJ8CbmuhZ3qjLQFiwxoHhtEYXSWKcMh8gUQoesa",
  "key24": "2Wi8iFfdGjMJHnfBJ65QRwHoenmDJfXXrRfhQZQRtioQVx5cGAqvM6Hwko1UywrPzcPg2HG4ggx5M536mzNLwBbZ",
  "key25": "2nQAXb55KF5BfbkSWxFAC36tjeoLmipVLv7wPrgTuxfQek5kPwn2MNtmHnJdc26WipLzp8CqiRgyJQwFxdbLxgkH",
  "key26": "44h69eTfYVwKPTQFYAUgWWyCnYVuP3YFEPSuqRrUmEY9469g2fPCFqk85YVTupm43ua7rEm2W9VCee6qsmhArvs4",
  "key27": "4kVULk2fWKtZSNKjpTBqpNaYyobSawiuiBKV3yfb3UrpKjVHDfbgu6nAhGWykjPMcH3iMFo719ftQxPc2ud7qZxc",
  "key28": "LiEguNXUYRU2DsjGCtakPgBL96UNDDnJikA4W91my8k6o6NuGrXpKN1fCpQyHNKUka9muoJXnKMEuJQxp3Zd7Ks",
  "key29": "VNw7vfLoK4akFZxdAR9xx8XvpDJseCB1xJqiHSz4kevZsRzCwDoYeJbbq6ZJBnTU7s1Vt3DkT2njK2Dyf7ssugW",
  "key30": "5yETT3a6fihnjhkLS44HYDtymNqG7eNEDojqp5aTcNZnD3GupGG4zcFzQ6EazEQFRPB6871Yjd41A5iwYy9v78za",
  "key31": "5qDok7vb5GCXFrKWsxbPsSAcyxGXsQq86Hoo6ed51K5anNXxZT2arHjVwoRedLqxbsFDZyzhPQ21tJP4aq2HiadK",
  "key32": "5JGv6QHnjV4MLuNJrFy3dBXFsKquffHFsgzWW4Xdz2i8v8C6ynL3Yhmx338FKcarKWjjFXmDbVpQHeBQphSg6pxp",
  "key33": "pkLv3VQRwMzXt5FUQQoZFUbkbzdUKGBEkFMpiSMevMpHab6Myk3SZGLRFPod4G6EWacBL9A46AswFVLMCQaKNZu",
  "key34": "5QH34RS9B4aU3bZPgKkkJeJByE46a3yjcek5TqWLZf5YBBVyi8yEjSZKmUxCUtd41eRzXBKkbKZGGVwwF6frXFSR",
  "key35": "5RuwA8ZRTUAaT27uNiZgY29crSj2AkmKgQWMCvc1hu26avPQWWsqiBBAAAEXWtuyMf2CxLajDb7K5APTypqjkRnc",
  "key36": "5ARSSXzrGnJ4JyWD1fXqXVxAPX8mawcjgrTBdtEnfK9mQhyeBougNC6UjZHAM5CAqcp2PBPYofLxdCHHAbco3xti"
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
