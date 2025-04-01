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
    "5diYbSPZURs6DpZ7H2hcjxJbcQCxutgzbxP9FWU2RwztgQbsD8sFe23pvxHf3XzNkbVoAxAXeWS4ibCXZhTqRyFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ohPZYxRM4TfFpJ17Yx12PCZzAdW31fp4CXCE59YkF7JWJTtVgBZHLqeJDsCXtES9S7uWZZ8bcCWndTjdLxfwBPh",
  "key1": "3hVxqdwzqbptAqb3gpBE6BDpsEM8i5WijJwBxzLjGGs7SMQtwyRGh9aiZ2tU5mqQ9AfmiMgZuW5EDKsEVHT7tha1",
  "key2": "3732PokwZM6u6WgZno4R3m1ZvLxH3FoKi7nPqDeVFNzuyKDkwuvJnQuLcMc6bGHoe13BpWgGAReAz1dtgp4LcuDg",
  "key3": "5h74Ws3GA874uQWarc8fMbemgLec5GQs92DouG3rv7LEsLvRDcT3Q47JMHZ7umq7ErfrQdm3tYTsa4sp2RCiwWdo",
  "key4": "3z3dQHaXLrFaXTJ8bbcAsyXnV7re87ckzn7FZwdg6FRKJeJHxgQTSDykcYH17o42dinD67pFR1Xmr84Rvg7BJfNx",
  "key5": "SMqNxTEGcTLVqTAn4CJZXGFHPGoygVSH71j6uz2eKbn76j3cyWwvEJaBDzeSjZFEVtQf1btJ1AwwsEwzk2VuH2e",
  "key6": "28bFxLjnYo5NtcsVSuG9QuZwhoLm2ueQqL3uYG5Rs6Tnqr9dquRzkCWKWdkpgzoPm6FWLuQvx8bzKr9EXToevrzn",
  "key7": "4y71Gi8V6ntnoY1KwM4syDgtwXKuHJzdGrC9yMkeSFSQrEzTKcAGHrn4ghi5sbgLTJ4ddt2s8toBQMh4N8YVPLnd",
  "key8": "3p9eohi8sYNX9hL9Ar8D6S6LkXReFaqmGrhcmcXsdLWUMZoNggMgghSVu3wnCcJLCnM2dbXpfMrDjNsEiGp8sNU5",
  "key9": "2d1Xovb9vpaGNTi96dAtMWkdt4prcTUGJsJRrjgbTHWa2rwzeMGQ1bC8zJTttrs8UUTbYGxQmfpPN41FzqgWH75h",
  "key10": "5zvrjxZDRqrG7WRWfQuVqtre7qV4vDFq1t4Wq5eNKxWqGW2unGmxJ7qDVrnAPz3znxTEioMd5Wobv4b3MECqP6Yw",
  "key11": "4AcMkujSRQPAd96hSHb2HU5xVCFj9uKyvAcVZ8g7aoZXRd3YGJ5K9AnQeqRRR8xtckKTXAqohDE6gtjGT5sjrn9B",
  "key12": "48sJt2UQuriWjDwv2DouugcAwLHM2aiqSarnw1XsMDySfFgZLzXzMdakufZ9btTW92QUZ35VNDvYCRQDx8deg7k2",
  "key13": "5Fj6tBHfd6bLm7ryQAHecc7J1ZPjzVewu61ZsD8THh8wBPdLyAyGoP1SpYh5JBCVg9z3uYwba7LddFMZDVpZyLLb",
  "key14": "3CWBCTsrUH9qFts8RTnFimWpXgjL9J3c3HmFU4UDAs8QiUziYVXkW7hZNVaHN6hiZDNHnwpRJXnrJgJTkv5isykh",
  "key15": "66k72KiL9iQSJxwHMWXiPsSc9y3CLrxQ5vW4jaYHAUMGQpB2AFVkJ8ZisZLnyk7vGT2xAfrnnSqYiPXXhh9gwnxj",
  "key16": "4GcA1J976aWQE3LPZhxNChhMDGsGa2vzkqJvkwaqLapVWfyVfSLnFtXqQnUpYe1Bex37vLGbJ3jJzUGzamT49KpW",
  "key17": "2HRNE4eaXnQrNNaCsCKvkEd5658Dsd5Hfc9pqaoXmcJtxAoatpMjBECi8sQcVTvS11M4ihQxexY9uxWJJeZ2WwWw",
  "key18": "2gk18qU6Ywj6wYfFT4cTuyQrJVzNjaCqLor4Hava7Ln8QUjQZbSSPKqYRuLjkXpHqPi5iKyMuNjSqkS7xujFBrpW",
  "key19": "4sENyRkPuPWPWGp7HspS6amC3JSfELYEFnQgy3v4RMv1pE71UnCrfPhckUTquuvhPX6qg3ESxCBa8aq4A7SzA1c7",
  "key20": "4DtPeEjjhEEbWmFy8Q9TCrJJ6Q7uYKPEjuzZsAN6QaAXGV9V8VpYRaruMwBreR7WeuGdSoQnC3sUc54fRVsm3xox",
  "key21": "pFXfJtdHr9cbtCabE9ND8UQweCTJ1aaYFjm8wADstchTiZbcB35Zt38h7L4n5vfvEb5qzCDLpHEbXsicEbM74et",
  "key22": "4YmfLoRAV82FetZwycfGxRieyJaj3LVxm3mrJM2jEFaQLcRTUhXpRP8JQkQ4F7wA9YpiWuGriJuF9XPexojDYy1F",
  "key23": "5jwdALrW6ZEHtzmakid84AesvZHrGGVt2pCWHiPsiKms6YL5WnV721rDrGYfUtpWeCL1SKMg9M5TRB4yqB2W8pPT",
  "key24": "5mWUaJyWccHqec3fmKZ4c2PkoFZ8emMsBWUfHUNEFq25yranAZgQuS7H1yonP9dxiimamUybgyvgUCdmUqK3x7KM",
  "key25": "4KAdDrqMDsWM9UQbEr8DDHVfveyT5kqEVHEJf4c8gmuPHz2gEtcpA9hFAUSPeo1NAABY8NeX6ap831dfdjJuoQKo",
  "key26": "2NiujDMYtxQcLrz3v4FdLYHGdTT4qeFoa7zdhShx4pdusgrxJTYndPsRzZnQZznTHpwFwJcVfgyLFNKjLXCcqWNz",
  "key27": "5gtGDftN86uCGenHfzoNndrioKS5BJAXMyDKdkucSW6CZj6B2RsV5KddhnXfRtukbELVfVXxcGWyeWKWNn6h1wY2",
  "key28": "27ML81x3SjAgaHV37ChUPSfhyBj7RtXip9AJrF5mfFky8QKhSq55Wi3FML7c1535nnWHPojTF3Zyxz86za4arEp8",
  "key29": "3R3XbyLbui45BEZSU3spdLq9GPfa3TF7QBYZHvZUuhPPCqSpagNgpW7nzuZxXrKR6Kob8wC6FacD2au4QSaTDLiQ",
  "key30": "57vWrHCGwYiHd3BqeBxmRMsLCpWq2sDQ5Yfg7mm3bjDf2Vr7CkZPGCbGLoNLFAwwWEBUCL9FiMDQcmRwwCNPANeK",
  "key31": "42V4b6W8AKVSW8pvAEaGcCrZ6ZibfRMA9yddCVRkP5Y8cRvfQEhQCL5qS9vMPLTkF28TXyEDFA4AuF8wdbcVarg8",
  "key32": "3G6kCyPUbxnBEusAzPBinX2mrFyJnT3AR2zgkLYJKgo5ThzCZ1Nz8JoEnhivzKcAarQHecLQgsZ5di7TXukSbDbr",
  "key33": "37jMg4w5AZJoBioMELfJqV3jtEJNwpgb9mXuVGsQRQzVPkifTKFrkhCWCGSj3ayYVEYcYJP7U7LXYXYmBULjQhLr",
  "key34": "2hPC3CDouFHo49jK8BZzpAoLPK8crBjfUgd14VSGd31SGycafJUye84SbCK7L3S6f7HiWPRUTw37pTQcpxTnC7A8",
  "key35": "5DvhtscBkR9kwZvK2SoSrpUmgcU9XP6XC9ebhRCryojcCHEdSj1cE6jP89qe28S6892JCfxCKZhomHXKR7FiGhgH"
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
