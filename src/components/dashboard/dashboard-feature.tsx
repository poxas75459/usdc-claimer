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
    "5aJjA9N3DBC5zuAF2ikNMDYaVkDEjGb5cyA5qg6UfmSS1ySp4sb1uPvv8XgN9uRzbE6mPZXe1xE7hXPkJqEiNSoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PJ6vvSEmvEZEdGzAATdAWYGDRR8mEziCNkSLianXR93FAuyEqv5YDbzmJfxXw7GsJ43cnsduoikpuDXbeR2gxDP",
  "key1": "442UN67vFDsTG5CkEn3GNW56sXyZuvv8QBg36BHmG35bi58tqsh7gkHJoSfxyF6y2YQQ3YBU2CTJZA8NYw2UggCb",
  "key2": "2vKj8CepMgsKbkc9DsRnGn56inqEJUf7VQc1p8nsDVHi7GTnZMzVREdhQ5pRUaAkaqr4tfhAaFTPUCVTNGBxnhja",
  "key3": "5PAeNKkSrbvmUAYhgRZUvmxmCxkapESLH7F9nGVh5KvAnjkSfY556Mqvvgw1nXvoGJWYwkjx4CjKkVbzpioBw1Vr",
  "key4": "2yXaLSWUuMhUFRL2yoL275S8EhkPHx7EumUXahcHzaYXCpXzATmNFhi4rnZoYoVCjs3ndyQthdUg7mzMBVctyEaa",
  "key5": "e1zRJSN8XfXtjN1AEqhG8CRTGdjt7MVHwCSMb3f6azzfWEi1LZQ3BZW4Ss9gcCkH32KV3TZMV5Lq6tQpK7SKWkc",
  "key6": "5YEERB1Lb2121vJy4iSepPPaSrYEVSTnfBNCTTMCDhPzVd8QUS1NfUP3XUdJP448D2TfcvMrKSq3bt8r8arfAhNW",
  "key7": "ebpafRXz7JE5c79HwsWiYrrLrYpyyQXqgb1sdXNxxVb6dMcXAwDu5N5Si6nnbydSQaM4taVaGZHxyFEqaXEAZ9f",
  "key8": "38AnETnEnikWP8v4WnsAyQagzRhfMLQ3vSf8XyQAgJ9dLGkJuL6KQcq13CQLUwyAtUfigJ3huwzYEQHTzZEA4TJz",
  "key9": "zzqaNewhWMFfqCE6ydU7tv6giGZQmCWaRQRQSNyrRaFnh3qLxE1ZaXaKDYk2wrKbXJ4jp11q4tBjLmZ8FZoDNvC",
  "key10": "PFr6JaDLegjjukBKhyq4CxKcwAXiMyXr6E4kXsE1s2spQ5a7JxQ9JfFwDZTzPreQA7NyRM8LSdQKwNxNaCe1g36",
  "key11": "2TZebGw3pz4wq1vfZ5efTRekuRd9STJsMgdLhLBdfiPAU4xZiAtYQHL9n7VC4zTpV1C6BKgBPgHXeGhFmkMvFEe",
  "key12": "urrH93GYNEjiGu5u9jZG8VRwtNegW5jZudDqjPuzCQnbMgXDAsKQdyRV7KfAG9VcYrQBeUVBBwmtLcycUDWFChn",
  "key13": "3BnJHkucXhmytr4ChnxAEfnS21Qw4GymS6BpjY6R5vyUamBLJ21mw34wLANxyMN14hVppoAu3TTyzyxVE1VmwfHD",
  "key14": "MMfnrsezDwvq7EX7xH5VNuABv2xEjyhBfsu83GUsyYdGAqvEEAnNEibijQNHEBfmJiregULGigxVUJDFXmv8P9p",
  "key15": "4gaiGVYNcRLBbeVeWWdNgmM7cmmu2HQNUpWtYxwBcyHxHpPqVNYBKEtdGuaXXLwM4cThkMkfrZ289E9AfoFwCAJz",
  "key16": "BcMXZmaocHuupNJbWGtfK4qbWKgGcSPPJ7aJnUnZys5KY9dS3CZkrjQGcmHkt5WbS4RcLP39bjYTaodmPCWSRLG",
  "key17": "5F48Sc6rDU9Z6y47C9B8zTqrR9yJr9LrsGZCqGuQDtHwKr1hfXJZqiqsq18cnHPJszx7yGTsQQXSt86fRc7kXgmN",
  "key18": "4VMXoX2rSS869FjX1B4uyPt1Znqsiqb232JCM6Gec3qonQv9MXfviNLYb1WjrFymFpue8LtUW6xpYyRTLmoKN2VA",
  "key19": "YUpNkqAVuaXn7ZoqxCZw7ZyVjdu1U4uEDfPM6qNGMVEFC6PsDCUmMgShYDKXNkdZ7sjTSvXTj18JB82vRB72rQx",
  "key20": "kWhPNUvSh1rQaH52PHCTw2CCkJoimmu2XRfnJirnTTS3pkCgSrxMZqtEBUN8rVQYAfwN891Wt1sECg2RUT78fsd",
  "key21": "2Rh5kKwoRAFmzgwsfrQ3P6sbF262RQyu38WELaWVmcdRd5Ljyk6gzejQFiz2btLByNMbfQtMNY2F8adKg4mH5nBw",
  "key22": "49ShZ7Fus4FGLduFN8BtfWLgxf8cupB39SBFGHAL6EasJimf7DNqcroXoDzz12hZcAixSafxEmba3equCWBnDzqw",
  "key23": "2TLDaQ6Jfk5ZrP4s8bfGGtnRgmNu6Gw3425JLvDQYGBZBafk1JgrSE6aGNbmfggSVKdHi8iVAXATHpJgqvrKjZoc",
  "key24": "2prFYqezPuQbHu65nuwqMxvdpybhGyiVgTMkE2Knh1oTEPitSjktVAP7Hjeggu1B7i7czQD1y9p2XLeyguyv8eAk",
  "key25": "5yuvkx47DHj1zEMhgbtN3N9yWdQzWdxAnz4spmn6SewVa817cLz1kRnPTzoJgA259ZaXbuCtNpkxjpP7u5vgQh8L",
  "key26": "sXVCnASy2WF1i7wQrKyaUtEnsfiPv4rqipjkPcGWBFTuYtmJfCxBapycCUA4y4NeLPRnksUnh1CLPXgf56nsBXx",
  "key27": "35FidyvVCFbUmi7Vk28FZiisJziHpkFezbFTpYpjZwxMKTxQHXeGLEAQkS7HpprjHub5b5rrLJG1Y9wtwrjWKV9m",
  "key28": "AK1q1f75dWbRyR4BGKA5X561Xbfo8LUB9kRyXq9Yqqzsfi58dyWUos8GDjo27uqyBMPYj4AKjNTZoSzU8Zf5yWo",
  "key29": "5e5D5Zo4HVcRW3SEkbDwhBze4eLdezyCMkYWtrsk2a12WUZXdyRSVFWGwaJKj2zrP7DTRVA1BwyjmufsunoZrpDx",
  "key30": "4wypXW7hZwSq8o8Z4fuDb2JNVNTaDqQ6UqMhw24keCfRchUH9mZiNUETdsuzXpW54EW1fXGD5G5yL5EJ1YbfRVx3",
  "key31": "3agSfLuqNdEXmdbBac9nW2Ly9cERekVnjqepGzUgySPgkZv5SnRUqQbp3bNtLiTmEBJAvzPmwaRJHWhPRfNghTaM",
  "key32": "5JXj4FcFRA1im3j4GCTaR3DW5WGdrvg2XMUDUL5Ja7XR385BakFQQvc7MdNwXBPh38LNkGmUkeAZYuSfFV2zzQPw",
  "key33": "2oAQS4b7otyZkq2oHCYP4oJaX9Ry5qCv3RRQZHMXTmqEvpfZCJemuFt2dmsJVRbeEiwomigASPwXcLtuaVK4y2CT",
  "key34": "5nz6Hdi5C9yGqvvoavWhC7Rbtzb6fo7zFrQVKQzr6zK2GX2HiZU89meM8vib9mrnjnjSMLEMfF5PDXNqCuHQJ6EK"
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
