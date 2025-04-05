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
    "XVrwfDYinzoKJM7jDtQUMzpmrx4AMbzMFYKgd8SJguusdrCjyHbeTDpe7uwBGTyzy4taCTQs5jyk6Cmvfb3fTjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21tKdQZ7Mjo18XavUKA5EE9mqerBDcjxFMDraSKhUmRZyfpndank38PkA57TB7i35JysRdPrmuWT4KoKbX4v72s9",
  "key1": "2Cxo95NkHhHNuC85ya6anEKDucfKsdjiSGkzyjU4Xzs6Fzu2ssH8iDw7vQHucKndXxvcCAB9RUVEk8n1vCtD1BHn",
  "key2": "29d7tHKssmtV4fsGfPXqe219iA5FJqMzxRmF96u6ALSo2Fzv9HCb65ENQLQSSTmDwe6PM9BWK3ovsnHUigSsP1tr",
  "key3": "4HKsUdzMvBRPzvHaGrhRQHCH3f92ZsPLYjbq7icFdrtCee9JVjDSF36CWwB9SkquKUiu2HG62iHfYmyudAmfcu4p",
  "key4": "4VUTxa3Qp1ZX12PcWGDfQarmbUyDRwGjpeGCMjNV3v7yRC9tffyUvwhmg2emWTrQgbgCjoEhHGZGguKzAuJAqfsg",
  "key5": "s559vaud95S5wma6Grcsjzx1JGYBotnJ6bU5Wd86rPPVBzkwwFmJc5TjBXWVnMcLF63xipdHvpGfGSqAQBcWBk6",
  "key6": "21fyTbKvxZp82CF97JPXsWNdkTC3TAfr2hi8EBybfN5UqKKXomSqsCzabLtyQtDkpF6iVZe4DS2QmGTshbQWmPkk",
  "key7": "3FJ4ThpxcGeHV7EWbWmABQc5edko6kCH59yB3GksWJ9DD9ha5HH2v4KqL4QU2xk1VKWyX6x9KhUNLE2nR6ZmhHhG",
  "key8": "45QCqiVZjZ28wTWcHpd5bR6LZAn1Ux2dBACPtZvgnK54EaCbtrrWdEDjfh1SfYdEEDTwD7aRiLMhkwRS8kgerTUv",
  "key9": "zMfgwmeghm6QpKz9yT8ofzm4dFYstbRQ8EqdCDxatWb6sYzYAfySr4MmAzxmta79Wqwdremm3Msx1EFj2LPPG18",
  "key10": "E4aVBZs2qUWpfB7eUVfryWDhvTa9NSTA7aCaCQU5mBWHn8TGQKp1iX2q5kpWLW1PDZE7efiraSst2rpF7u9dwQa",
  "key11": "5nVenawimoKzyntuuWTSMKSxhVAYPJer6xsS9QBAQjMzsEBWcJTuZTPPuURiTrsxYfC2U4zmgufMYwb4w9oc9wMz",
  "key12": "EGAivEU9CgHR1JzYV8vSrXviE6dSUghvbDMRFHwniSom9aqnfZUseydapxjiwA8DezpvrsZ9WEeV8asQfkEMpw8",
  "key13": "2EVXoPoUdGxU1n4BmbvsgygCFsqaGUHRFfbtFSoymhrq6pHxVAqxE3s88GFhV7GEqGm52ZCqsEAX4F2HBUDjS4Cb",
  "key14": "5o8RT3NAZqxs56RTxKfBJkNvX6MVm5oCJTFacyQAytAws5Zypmp7pguWiKPtwGu8rfiUaTr9sL6mtZJ2P3KChMtH",
  "key15": "4di4sGrWgpUmYXkp42xmwcH7Bqje88E7Pi7WdmF9CyXPYi6jsNZGjq4Wzjq4UNo985VyWZQizXUT6FJHiLRvPpYt",
  "key16": "3FARdaFmQjCAAgaDuksdPyQL1kh1rFKX9CNyobS8GcqdXjMZVsmZGPJ8DTus2A36xLRQse3xNRjc7v78mc4KMFiB",
  "key17": "4j2QNeuUhNgzQoqBgegoBEFSbnC9fHyPVhUErwACAuhJmRQevUPZfKonjdAHm6sjK88GKqyfgrytZq6v2jdqxbfz",
  "key18": "5Q2LdZyzjTWYuE6s4a8KSQBD8aao5diY6TkivcVjJU2gFDhBY96HoatRUuHQfzUtbyMiZfeEtZvzd9HYjagq4g85",
  "key19": "4rB9SQUXEbiinZ4HVo9eQieARY8PXTyHGCjBagisC6YMnkZAM2n5WbiG6TmDcRRJ3Zn4tmDdriuVXvQPCAZFWCtC",
  "key20": "2aYJfksD1cQrvngioWqnBD9ApsiCkqvbDjEvGfyyrVi8kZUKxY1ktArsacKw3VCYUgWkNa8CvRZn4ZSfeAw8jaUw",
  "key21": "2uKTxH2eNBoRWwmn4oynCxwcGcyd6tX1Eki9KEbAHPp6VLoYQbCDqDV6pmbv8mx7qM8mG37gRP5rubReqkzA9Lhb",
  "key22": "2A1W8598xwo5eXJ27bvYXCFZ34DxFbNm7ejVK2zy3aUGxXSyGgvAJudphnJXoQKKJ6tiScM9qtVFWn9A14mcv7ZN",
  "key23": "jazcaHheF2NGiNyoAj4j74fvXWwQgW682bcN9FVAZgaiDSGc6Ed2o6bbQd58VjTvBLMvhZTxBm6FqjtoHQX7265",
  "key24": "frUCK1YuDPnKZK3EUv2dN222FDNs8SVmh1HnFB7VWJDF393siK5LeQgxqgmVyfKFwXxAHvYGAsYmkL9d7wZmmc3",
  "key25": "5uyAeYm7v2uiYdFEWEVmy11NaCdFagQM8a8qsCAsSYP32mU7kLtNwENe4byq8w6FHFgTZnCnZnWiBovHQBtgjPsp",
  "key26": "5o9dVVjE3qMp8tsVAnU7ZWs11856arCzXwYdYvcZbfssSu2qUE3tJabJKBpjFFkPAnacSCNZGXU1wp7qcog7Vr82",
  "key27": "5uAXJ5UrSnpSYPXaDdkz56h7bUvmjM42FeUt56ghAoT5EVC2aKCmwaL3Fz5bkbRoCuStnJGcsW3EbFnPVBBGrsdL",
  "key28": "aDtBseeV5UCm91qbR2ePATmFSZpo9qDQKtdCNLa5ZcaAKRazKrzrz426YhfyoWYbnn7WuqVB8K1JpLMEsaW2Vn7",
  "key29": "2kXTG6pczsCpL6KHzeoz3jUDfHYmwCgJXswa4NJ9YabipktwSsYvHfXB5EZeauFe493y1DqHH719nJw2k8bq7wMo",
  "key30": "4vwCYEVieMMzYB68hsePHepLnf1dDd46sCSzkTjM4ZkZ4n2QwRVdx93ZuVRvquyDtwt1H93Kh82Wc9a6UsnWFrgw",
  "key31": "2LECCrEP8JmrsZBB6jMx9pSDCKaghT8EGxaVFVoscmYGqryuybBPMFPPvft7S5LPU5rFhGcE7MmzBhE3YFKhyeSh"
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
