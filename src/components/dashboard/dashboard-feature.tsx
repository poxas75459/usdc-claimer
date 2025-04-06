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
    "43tnBVDVCjZGvm7w5gfrpVkumGJqo2sXDPFDqndT6pCmL9XZeoLJzE9NzxjHK1eHbyBi1JmzppCnnGXT6nnYt7xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XdsiFj4sKdirxd8NJdhsBj7dCN8ELRkRT2KhucUb2WWVpApzg3tFJZQGnnE5EW31816KzcUNd8Xe3NuMbCULGKH",
  "key1": "5SRG2yYBdAmWqa61SStPwhYY4ZfJMM3ah28re8Zkq5ZPQfm2JEVcvZdcuyw1oYYc8HcQG8aaJPsAJNEZDBSp3nui",
  "key2": "3yueHGgda1SVMcryDo44C29AGHV9yhb8SKc5uP1HKHo1r3nmrfS5uF6Ttrkauuc3kgLKUuXJqYK2XKZ55JvsDrwU",
  "key3": "24X2pTuEr1WPzXicqwpPYwM92PWWtKrxB8xkLzn7UH6FqzowAvWJFV4jmVHqmQRhs6d3ECkBvyPtiPK6fHBUUohZ",
  "key4": "3e9SUXqfsLyL8jfSb7iyJoC6eEVPLe3Ddz4Nzv74kkjtKzQWmuZ4xsJJrpBQU1CHhj8QTyidQW29Gx7fotJmMZ8d",
  "key5": "2BWucSHZEFV6ZTzRT8tCdVL6Y9fhRLeQLHfQqFTZKSLB4ENZM5reCvvquTTY8Nsx3VLMrLc5kfTr2mMW2JJ5v47k",
  "key6": "5vQUEJET47amviEahCtJXut5qfEKA5UyurMJstrwBw8jUgmwbSB1fnj5u7zNCnXkdatpRwTDsWrFYjm5kRqxZmnu",
  "key7": "3oQvZKSZDmqBhE7ZmiUGRHYg2udwrt2AUGURYnmaS255RbMdWYGWPvNfnFDDFG53XYzkdD67TQ33kM3MNS2Hwhvp",
  "key8": "VRjZ8cc46aqPYA169E6UffKutJy79QzHrR9bW3Uf7dpZGRXJuYkdE75jg1u8octWEfdzRkYZ1YrxupH4qmHAmze",
  "key9": "4SsxieWd9fpKRFmZRcUaoaCdu41G89DyuyZJQ4vk3X5JRKpavsum4hUnXy59aQhMmUQDWcDBdi81qTxgBueJSSyZ",
  "key10": "qUECEvV2eSaJ2zpFoJmddcQxSAxwWMPfa3spvLY1o1uNjjk83eQACiGrgz4XME9EnJSEgMkDe9A4qa5uAqLpFsn",
  "key11": "3cbLPY6umzxcq6pFQxCyzquy81KNmMjsqomekbwEru4aiNwEic7tmChNGhcPvYUzwa6afqUUpewdHnxvWEWTVmSp",
  "key12": "4cShFGpVRRTmsxPA18TnRdsd4A6Jdd4zTUtk4TQbbrzaP2i1zFg7DidiGgjQWQbnK19VNNjjR3X2M3HzW33cosah",
  "key13": "3MssUF8g3GLfeuN4KvMb5iGRnM9FzZ6amcwfdnHbSbvFXx3yyZn19iyNE9KvVsGuPBN2N8wJSjpYJid7Wz9kaqX8",
  "key14": "4mbVnYuJgBNtnCdaTcrkxfsJSB6MHhnrBHjmTsr6xucCZFKCsELKSkDMMVwWiiWbn9g7sMpkYnoZtdxvRuUm4Zd1",
  "key15": "3QRMaaCNBMkgd5QrNeKWxmmz6ooLAL6BmmnPg9ZXxEV8MD9N65BHu9kFQt44FSkfDXE4LgXh7kpqB5MYre9jX5W5",
  "key16": "37t3Jz252fN1Y3o5qzBoTFtci3zfWcwUWcrAPuPfbSABpJuoEWJoHRp5koon8u3WKe5BJcJXzF9B3ckFgsLMbTbe",
  "key17": "22n1gupyReCQN2PTXNS49iVp65VatN3YD88NruEdRohvjoi3m1kh8RyekSfSoR7Gpz4q2f6KeXT8FP11kQdUypyy",
  "key18": "4j5b6ZZbXMhZURzbmubeTVrYbu6ZFXeByMjQCgcaWwH5jAeEc4a6EbK2FEwmTU7VGTmPJ5kgJnmZDCYbCX9kpdvn",
  "key19": "xnfJ3wDXExdArqnrGRsrhqGoLhHQwcpRv2cJdiyy1NayELSo7et57Yjcw84NiY2hPKq1jCxKbqAcPkdSHxF3ocs",
  "key20": "2VRyFBqwbZDxam8axTwy1M2oyBqDPdyZMBV7eniHB9tKXNTgEFQgYTcTHzv8eumWs4CDfrEpZdBZYXn1WFi6d9UK",
  "key21": "3A59fLYK7hCm2Q2iDppBWyJiKJd6Djmm5Y7VkeFGx8snNLcy3ihi2U3sBZ6Q6PCFJv7Gu1tKAWaaAiYS3R7b2aeR",
  "key22": "KNPLMMEWkNvrWVMTQKJXHXM6wqTtWHEfVcZNz7GpFq1GzLhgrkC5StNJUBDWU4kgXCsCfydu2ii14EdwFgVrcqo",
  "key23": "2Lpa6GPwnJyq97eJinF6NdxrvPpgKFryF5yJdahumufg6dvaWVmWhqxAGqFQiMK6pcodDccRJn1rhcjjW8uWBowb",
  "key24": "4nzQ74s3vbEjZZ6z59jkgBy1BYCKWacSoSdAWmtWfGy7qsSBgBhzh7MkiVZyENDg1GUmnWattHVhjNz5vsN7gnkP",
  "key25": "5YvcRRfnB8bxukUYT7ZyJACVeGwTaUsJmv5W9rgUzAyNgZaXCUZpaWK9JAA2zyhLu5YPNiPRUyehmEsjLYrnWrZZ",
  "key26": "3dMW6d1K8cKyzZn3VpDg68iEiDpHgq926QbYiuuM2dyBtmsVYg7ysjbtxYyNeddY4WwrUeakHNJgqYFfzQNMRG3p",
  "key27": "JAZNqihSxz4JirotQWGDrenE8SBWP3LnBNPALEQA3z6Eyxun6r9V6UNbvbYy7jzybMByp8GjJ71c1VveLVhyNMs",
  "key28": "4KTUQtrEkHP5jZTPEnor14mUzxDaEJGg4r5rbqsNCDBoE6Qx8h7idF8YcsEw3KLM3u8c7Jau25SXkA3XqChhrQcX",
  "key29": "q3ojxEcLgDqgo1L3vxfnodVJKT5pPnPhKmVUEmjrix8z4aFFkuwEJ8qcRonzjPYzE8Lr6ozcxwrY6VaLhxFHjo7"
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
