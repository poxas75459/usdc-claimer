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
    "z3qqMokiUKujG5a7aMuV7Uaun56mgYKZzacjj42sa2c3gtdrSCM7bfGnnWFQN4Ha15veN9FYdGa5opxinrq1AZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NeEjmunZfFFKXituZiToNnauJXpf6uC15cib7Gj5Vvm88D5Qnub9CBVMntNH6BL2mXiwWvEzKD2djppBGB5FXvm",
  "key1": "55DyrbMiAQAtNeb4W8g6rwPDb88Sd6pHMejwUvX6mvNP2LxtjffCXQBdUtExqRJDtagtKvbPdNobR9WbB1HYtdox",
  "key2": "2hjHWbJ98kjo7VpfSktqgeRF4V1P4MbeCgy7HNoM5DZQCnzMTGTFoXqTp49emvDqvwMsjys9BD5pUcSVZKKLEJx7",
  "key3": "272Kz3qHTExHrWYgKCA6nMNExFzc7YZUaCfFMrYsSmqmLxe6NvrZB5Egc2XdcqHgJKayLFAZV2Qvyk4hMwo9JVLL",
  "key4": "3qjrdTkuFsbwo3xnvD3nQhoWzMmcoMJ44xFp9BwwQa66NG3Zb3QE4fB8njbrQCbeH25DmUtEp2aVTVJuvxv98McA",
  "key5": "3ccGcRrGqsD7b6ZK3QEQU49wrpQFia87FJp5xobnSUSmWPfd7VWmu8s4Qw72HAexvh8BH9Librc2cZZJNZUkJjes",
  "key6": "futNRCm9ygD5F8hgNzGSQ5Gw6iVNPQqEA6DHtsCCbTVdy1dNdJRebLEueCuDBgKovMwwTYd4GPDCLnYM6UUfVgK",
  "key7": "3HoswAeWyo4WgSqCsbMW7U2StAhgwhR9PkDdXHsDQ3ZqgKL7kW9cijamjeALFNm9mevraicKoxCsgQrXeq3am3vT",
  "key8": "vaezTteEezRxpswwxYLZ19XnnhDQ3HvS6mbpsbHwRHzbE9ftVUTxbzbEAkKSjJV53siDnTd4aFLUmr26s6UESRB",
  "key9": "2KbMb36QmJg3JrSHe5Vdmp7j4CMBLLiFzMK5Q81A4dFg4rYW5qH4dop2UQqDNF56HXs3symoatDDLbboxcJxDHCZ",
  "key10": "35Mk4EJUejamNL3JB7YSrBUBSAotBEDM8bDgKjjKEK7ScVJcaTQ5Yid6WgFLaV3Wjq1qDfBqXDGDJyXMTugU59Vs",
  "key11": "3ZYfiVevqtKuGfBV9ySNboD6QydJ1Hwz2peUj8NY4e3hHSzaTPHEUBXp5neS1YWCqVMZxzaqZZLvabuT1Qh2kpW5",
  "key12": "2a2bZjeabmqmPAaRw13n1aU6MipDTgau64E82RHpcmMZ5vdEk2xY2fWXmKyYvR8ma5Ysrh5rycWWuNddiqsi1s4F",
  "key13": "2qwPRsA6tcJ9h9qujU6ff23CJiUzi3dRHF6fqcHLvQWYizhaTG96VHtRqeM25KP6EUK8xcTG5Snohv9B85NoQ5KN",
  "key14": "2NdvhU6gk9k6gc1Ebe65GpyAX9WZgckBmSfg2fheQwdg3mT47XGDP3n1dr5wWPjcqm1xDbXaKuSCJkeY6WYytG9o",
  "key15": "5qSPe9FZ5ttrxo7x6Y8xAXewGCkbjpjKT2P4TK7kTP2gdYa4j6xMvQMBaKWkq3Rp7vmZPVchjpphKNAUjytYbP6t",
  "key16": "5joHcGe9cybFzd91LYEoii1HcVrKodrq1FX7RFJL5hmmh6qkksHYDoFYdxec9JRUJ5BNSkfmxZs8BG9u13NVe2jn",
  "key17": "3RZTHuaGGw2erzx9xtRV85eh77nd2LUbJfLLy7zTRbb962k6DwEXnsp5RyuVaDNLaRa9CJ32R9deap1cCWZwq9EP",
  "key18": "3LjwQaBcEWaqL1SBwjzrfuMnL8B1i6uj2Rcq7aRm4Zu2b49QJQYrtQiaTkXwT2hS69DKqgUZoSMTRMLEBgb23rpB",
  "key19": "4pp6tqYrSMh8oSNPQrv3Gc2ypQ6wsrgNv6CdDgHSy2WLQKdhcZbngNmbyH9xUsdYugCdrb1Wf6YLRtcGJ8CYUYoP",
  "key20": "3NC2mTK7WZk81ttCdEfLfUcWZ7vEecEZ6tfKfRMiDahfb43cmtB7yESQmHF53L9dgCV3YorUUQKLGURm6tgaMVEk",
  "key21": "2gYtELvNBUyeXsF5pKoFNYmf831Ao6PGzqbd1BBUEeR5fKVWSucSdLRGwf5JFjMF6M61XGLEzPCjb5J1UWNiqt8A",
  "key22": "5DkrrHMKjpWkk9ka7qYHaJTbBiqh1gAZNk4nWu8YLEdoZ7zzj4tEbuXRqtAX4pwesXaPHMC9XfhvanB693pPFfmq",
  "key23": "4o3BFGGKtcCnmpwq3inUJ12hYKRCVRBA3yBVWGd3RKHhJqYkPXJfbaQRcRe4zZXo6CuMPer53HVzzFKrYDjKDhvr",
  "key24": "2QrhzYGNnwiDxX6DNoUyLwpPdAvzWuUEyN1hYghkVxUM1Momtxsymovv7V2vMhh7doVL434KFVuZLVbTFQkepmCD",
  "key25": "2K4GaDXZCAXdcrR7rVzHhN9kssWexm8U39EoZroA6SJrFQr5g6tm4BugXJPBwryWstWW5Dj9Ah8EWgiF57WBbVCb",
  "key26": "3MivepHJkvS6GGpqBjTmYw8PGgtwJEU4bxQNx3EVZDs4SYJPqm1c8PhskspTNokK6fBqJfsg5WxGgnh2KowrjcpD",
  "key27": "3og6ifkJzBbea3sUFM6cocMADSbuUcegeXb5fvt4VZAgK2SMERwbk8gfZdDVZ9ETTeGkVEcEaTwTKW14JASSYbAQ",
  "key28": "3R2yfjztofyFynFXBzazqoAKKBx8d87CXipok1uCaJxvGkiLxdRwwPfUyRcZ74syrxP2siGnHMoFJZJVkL5WJyDy",
  "key29": "3WSDKdUpGEKPP1s2DjwdJEH9LGUZrv5Siwi8MRyLBqq7GpanUDBu6PLytsAVuYHr2jTtm4QESxoFAbnq1M4pn65G",
  "key30": "EtPN77kWZftsWErSbPB2D4P9Sp3M6Q12Vy9w7Jw7Ydp3XBESu21NsmM31brJVRsiD2wQ9m7x6WVChdHH7GVYNFT",
  "key31": "38S7UbrQV2vUee2VdmBfjCyb8zzHoFJUWjzfTToBeSDYdYtQqdsfoodxL2dPfcbqgfs2UHLbW39jN1UXvzxnbUnf",
  "key32": "5MTxK6WRLCNpkoN9G9vKcrqaKGHwELBTrBMsxPpq34Cx9Z4tysCn9RQiVPsU1jVEG1pNjpUXWuhfGroPkKfLncJ7",
  "key33": "5WWWGGkUEio43ZtUeZZ4GrC2WDAi6FGdiS1pwT4n2VM65Mtv2PcpLYPx5q36GPBfQR9cXRxTuc85CsC1b1jnqcEW",
  "key34": "3UJKGLXToh57Fiu7WegJ8PFXCaHDXL1ErGqA6hkz38iNohgYifeShABRLJFErkLrYHZQTP9f3uT1WCZ1Vm9ubvHK",
  "key35": "45gzY9BDdEQQmd9TbktmHYpPkMzfiWtxRJ9bPcKn7zWPGRUT9DnjjaidBMShZF1DwMXaopeuacqPpZ5QzNJ1xCY5",
  "key36": "4drf7pNUsdLrFVb22uEVUTPazFRdpbfZSKfreGGTUJnoMWumeCRnddoLR89LK9T4QT8ikBjWpMtsJyp1ePHmgpUo",
  "key37": "5YdMET42Xmh268MnDxAavuWYKMnwVjDxhGUymUF6EMKnTqBmUwtoyqBfMidXqdQHks39zChd5MD5RPSDmYXeNbKG",
  "key38": "5NZDm6bLXauVuxdRFSiRmebe3wHBtGBRoG9Vqfw355uj7Uv4ghpThoC1pjuSTiB9DPVKQNmDVAzN64JduChNr671",
  "key39": "5D8dGhvYxJk1G2J2JrJTheFWtYDCPncMSggFHYmPZ8C12uYRPgH5rxKAtLtZVtALG7VKAGTPAyrSajcSGed8tthL",
  "key40": "V9euprKJpTF3xMx84vRCTvPVqrTrcCrstJ6CjhSXvT2LuToxFAKttTZJpHQczhUdes35A3JMS7Urz5RfUdY2hmN",
  "key41": "45RdFDLutYCi5NKEfLejykxenpVtjdfEF1PGXhoYkVRF2kSHWZsvXhcaZuzTRoTXmGb9B1iA2ePJxXRN65DTw7PV",
  "key42": "37Ns26hoeoHTufK6V7peffTXvx5XYMJyEP9JcuUKAj7r3G8P7Y7TkEsu3HrXmAnB8h7yVxcrUkf9ya6YH1mda62",
  "key43": "36EJCeckVACCyYD4nsEEJCZDuqPkodhG6mhGyPPVSYZYr3jSkQbnwMVZz5v7BEvzPuiGsuiXTmVNmu6gb5HjHKnp",
  "key44": "4WU5GyTA2LdvBvkXnBmiBLsuvHBPZHsAFEASQ1DYdNejpzfKqpsE1GnSgJ7TTWokNerw9rR3rPcjTRs3eX6o2CE",
  "key45": "3dAsnaV3bPLN8MQVkCyniqY6p4VWsYjkEjpYbq12QetusVApUtbVTQGjPNcTvVKiv2JDkKqtrRc1rRCZVp4mxaAH",
  "key46": "365a5tX7UpVqdpeMzxrt3XAUdx2HzzXDphCntYRtHxZnhzhnUnNS3DchkqiVZNQJBJxtA4QyPvRpRtPsbj3msoLE",
  "key47": "4zR9PbanxVRxhpLFFWyHLdsxRchY7GjcSFBfd3uekBuae3oTmjgRkbjCMRTmLVbSbX9o5Zm8v9XD4dX8rADwaABB",
  "key48": "2rCQ2woAf5dEwEAoGiWPVk6xetiwY4GQee3FB2JN17McqyX6kortL9SpHrCcifA9A1VGfR6VBtU62Wwpi1yoUBZC"
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
