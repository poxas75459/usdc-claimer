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
    "63sAz9MXnW7KBRH1MMHtENiJ4q81jM6et5Y2QyyM83ege32LEBmAnmAHRT8suRJeqF8c6nWXzaXr6imnvKrzYHrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJ3A9GPe3Suo5PLunVoCWECtuTyoSBknX97Pyz6SiSdgbK5qNp612AatnoKNibEmMqXnLb8ZiW69Cpmf4gHkLG",
  "key1": "uRTqKu2WznWh8Aq6e83WChrzKLh6puqdmEmFG5WrAxZ3fUZpETJrAqTJZkMupuCreXDdiRvxhe2NFgrH7bDBUTM",
  "key2": "5ouSgzxgVYhuzBFRJTTWNUYBTCEsLbax2ZVx2XnaQ6PYCeYxPmbxLsJJm1cxWeK8P3Dzpe5hdT6hvifmaUsJiYkH",
  "key3": "Cw9Hgx8jC3AkbRUvnUZY6qfPH2a4NHwb95DvPEXuUL7xHu766pFvoEYA3y462TPtoqwcj17rw5GJSPSMk9zsmV8",
  "key4": "33JAnBRaUrJvQZCzogpaLkTmQHfjZoSnFmX4a1As9rTMLXFbszBUvwhxBgGKaLFpAAZekLuNCrmqE6pnYPLDVSZx",
  "key5": "5hXLxUkAipRnJH8QwtoiBuqYLx4qA6Nnu4PCp2L15M7ZHS4aLxmn7imeQ2aTTQRr1a1FapxbHd7NzCMj2qFHsDvE",
  "key6": "fzGBdGzrv8LHD9Nyof79ALsDZAjGZRPksfQ6vN5nQMdk2HdweZGX272wdceScwaTjtMQ1eoZ1sLvkGS92fpwois",
  "key7": "4U6nP3KKc3wTA3qBfQ6dFkw4WbjDj5ydvmxPsZUNVFcWE5ySccvSZZrTaFbA4GzR3i2qzgund4tkZyfbuLcR9s7h",
  "key8": "48hbyypFSDkj37rkFcmLzhhNvdKCvwnLy7VSCPtqYZMbCxUXQ5tyeMhHUnTQs3VU1iv1TC18EGzjp3qqUPJL4byC",
  "key9": "5N8nRg5TWBMm7MqHJNf8hWPdCMevnw3zZ7CQhobi435tZ6yxWB272PWUs5GjXbooUiQipREH1u91dRvBitjENv4o",
  "key10": "EXkr1MtKVTR42DwQHFJvUHogQNWp2VizGXT1Es3gpYrHgr1To1h6Ct8dwiG5sJ71MZXePjFRYns3GAHBk75f3h1",
  "key11": "sjnuNWDuGWMAC4AjQZnb9crTrhRxBVE87fkGm9LJpEFoB4wi1Kmc1ySBBWdg7VvnJG5H5ut6mnaU7DJogZyTujb",
  "key12": "L25i82ayqrqgfkiPickfN5JWBXk3Qa9GiSjeFkEL7AKn63qvJULvNVifE99xnBoeFnXK49foTCijhCDUjzj3nCE",
  "key13": "8G7QJKnGmChnH7KT7tvaAByLvn6rB3PLL5CzjD81VPWbUPbfPjWy36PVzN6uHgmBTmSKMqXvFaYnp85TjfLZqjH",
  "key14": "5vWbVRpoqvQXxVYowLAmvMXNu4s9w19A8dJjLMoytYUa5UUCfbQHTriCWjWLCr5d5L8VHsAD8NbpLG2dVqMXcF4G",
  "key15": "3t56Xno33WoB28vppHxAfv2fDL6uhrjPmBtdgz2sxZZhbfJZo6XmzHBaW1Q67EJ538UJekDMp6DDcN8zmEKsMSpR",
  "key16": "3GxDTU1RSH8LzB3ADuYMmLHVNFBjVKUHSoqjtVivh5wsrvLVUyE1xsCdkSoWYDit2x35zGzZQg2RtiZwVCN6639B",
  "key17": "2WfmUBSTwmPiFpxphfNRF2yfR6Yo4sfT1B4Db3dVm5smTcnfQnK2ec4puCTMD829VM2R1SMDqB88dNuPJAWfmkK9",
  "key18": "2RS4jRCcdC1ywWn1fbJXZAUX3WTqtsquqtdsfqoao7kVsVMHvEAr6hcURBUykC2sxAdJCASwz8P4LTKMHhiGZEGY",
  "key19": "ZsBN2A2zuYy7JNBNxjmiUeuHm5v3sV9Wi3fRErhy5vLaNzbqhegtV84pRromh2B3s3Joh3Jvf8U1N6RNwWeUFsK",
  "key20": "4p9Vppj6CpBcb56YybprAst2Kyx6dv1qxHka9aku9MbX2DhsuCUZ215HVWmkGzPtAMma5CuTwSc1es5EhJC5ySzT",
  "key21": "5muR3gh8dLphjZkpBHuWvt34RP247x5AgProUKySRXqLcvckQHPXcic7sqJPcvD9xckrMzUJHs9ih3AnsprAXpVT",
  "key22": "2BxPhkSrm3LodF1MLNf4Yx7a8voWwuAL2rtsDAfAWtitDxQkpsjzSKSHXs161ze4eoZGPm5QEqd2o2AisN1homue",
  "key23": "5B34HPANvgkXN4ojbqzMFyYZik9AYzMbQb9hNQKDJ8Ark4qoWvTpQvmAUnHQqaaxg3cn9rzVCM7on5QCCUqYM6cp",
  "key24": "eeNsbuNdt1kFMaHCp9yaiZuEmn65X9NYmMKvxzqvK6mVgaGCxzvVHuEBe8p7crtnd91MVdPxNvaCwTns1ke17Y7",
  "key25": "4bbLSjSiuZMGv3784Gh3GbfgpfNVSvA8LvtWrnohk5KnmqA96egPtPrm4TrEAkWiXgEP68oQ7PHZYjRoFGVmrtpJ",
  "key26": "DTzXve9V6dpB6ThnmcyXbtm1n19BqtQhuDgRhKoSsdkvzipUVkiQtex6tnMPVPbYXVJ2CfbGh5zLc7bJHUc8UAv",
  "key27": "4BmqiFngoFTJMQRiTSLqvHPzPyCM3TxojrDhYkmRo8D5LrRRYumdHAaADpVLs92VqC6Sp3ab9vaqJzdyj49og1my",
  "key28": "eoH8DceY7L2rPm2o5pmWNvHHn2CFX1hfwLJkyJjKAUyKdfj4gva6UwHzpaKtwawvjDpLcNnhhBGpP9aApcqMHaY",
  "key29": "27HvVVUQSJLTBGhEp7SYPuXYm5a7zm4jBBQCb9bvkRh6BhyrZvKavCjxGUGDiJ8QnqNr7D2FyD2D1xeATq8VFtVP",
  "key30": "CV36dXHuQJgH51wxmU5G38LHR1Hm8ym8wfJSms2g6ad442U5qdGyhusRph3BQwzGVdPwDCWAzPuigj22gAu86dZ",
  "key31": "2p8zpCB4qm7UuMvGQsUhLCxiYgKgVovUo7HZxWb2t5BEDhNPBSX2vPEqxDkhvC4fooVjmhdvG7k3KABSMdm9iJT3",
  "key32": "52u6XbAregQEScaoPGL7V8tRz19rpN92zrt79T6Dfivtbayksq6vJxQEJTxSntVfPBVhbWcFkC4KTqDiN26tkhPJ",
  "key33": "2JTk9msuu3qDztc1coVG4R2Qmf56KZVdSytAZvavgazihxZxLwpvXfvwgpYgtr2PDDmnffjEpGtpxXf5WeMYg4sY",
  "key34": "21AUXxmSS3iPq8ur8oVyqmiXE4aQf3k1yAUbdxYyMFNhMD9TBZbZtARAgy8mzWejnovsnzPcrHXg8KmiPTVMjenM",
  "key35": "2RyPpzpoJyBV4eK9punqevKwCxTSDsDkBGZLfPJVpTrBezR9xgzUFggtLZeu4DJmNLbPDGMJBBrP3uwKo4GdRJkG",
  "key36": "4WkjW1RbrUHmbcv5FPa9qELcsF9GqKG2GYeAi5L2DBNEfH75QfLPoVD1hRnFEgsSHsjexre45aZ5JLaQ3vT4WMAj",
  "key37": "K2KTXFeK1MdWsSv5aC4Ld8GN1cD7dvHWavpJ9HttWQzDShkfFKCqNpwuW6macQANL8cgqmDqGLtxz6FiyXMgUDb",
  "key38": "SKL9phg6ZB3xVRiCYBdJbxTdEGQ6Mr9o8pSEdZTmN5ihdCyPGZV58Z3zoFqGiY9z7iXps2CYf17m2vUnwDk23RJ",
  "key39": "CJ1P7Sudz2Cu8EMchyp73oQsTwr2M66s8prykrSvFwCoroFdZe9VnJXhBefTySG9usoKppKDL65uQ28ngkiU97M"
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
