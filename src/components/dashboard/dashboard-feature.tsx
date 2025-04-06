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
    "2PFahdQA689rAsRSmcZXaLX4HvVbThb9KetBTXWVdDAhFoTLTkwVtexE8rDRBMdnuJyaRvxzXfnFUYerPbVWj6fy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dWxsH8TmZkepMU76pKsDMdigDWk2R7VQ2cvMtHLpm9NrNKbUzvUnbCuFiK5XaefPwXigpe9Y5EYQBLzmwNQXrAv",
  "key1": "E8iag7nw4TVieLS9eS1yqH3SVLQqSYY7KN9sscVPTmKGrLYwSpzBzHCjFWocWZPxahKFsfQGr2t2HmM97Xmt7YK",
  "key2": "3axWmV8CRcAakaWHGD2UsNmh8Fx2jTxioCP5CrkQbvFZoFrY5Dvex9Qjnveg23KCvVxhZ38Bx7GEEXw5JQvZDYCE",
  "key3": "41kNHpYS9mi8iALfhKWYJ8xmLh8HzdtqHdVdrTYiaHzX2xMG1jXqT3vgdYEvWiyMjKYiAR6CnXAjpLE3QMb4a7qL",
  "key4": "4QFvqGNRSrzysVR3gSSMUv15CNxJvNAG7UY7gzREg5ouGf3LG2bGJRGUsukm21APySq5dBYBsa88hBaGvamgF2R8",
  "key5": "62mznGNuUPXD6thb4VVcNQLQEti2VboZKzaW6wqyFCkyCKjSjhEnqZm6hC9rDQQ5cGAKGRkKqF49nuMrQEQMGQAi",
  "key6": "5LCFerEUYFQaRgmZshQrvuzq58ktxyTviHfYgmu1Z6oBYQUhWHyUnjvr5ZGMcYVoHcg6UgAdwf5PCY5yRrxYrKkS",
  "key7": "4t3M517cDDmJhijuHaxsRcxmeXsoQpRtmy5ikKucgrCc88eEtTFDzBpiobcvjBioaq9RTQV2Z8LbtUrKpd3yGKGj",
  "key8": "TQPxn973d2MFS4CkGUtEGsaGiemyuPMspsSvgoptBSHoMmEuimjzW6w2i8TcimAeb4GiXESHVYTmL9qHMFNomYz",
  "key9": "2BAgc41qXcChfn7AnKtcqjFPzSfzSuh6ZWiJqcHWRtDywmZH2gJLJF7Nn9GqZy96a4cdkg9U4cQ4XUXio87jVy5M",
  "key10": "zuiApG1dn5XxEQG476evNjkorxG5NBY2xczbCErBcLKofDNt7CfQQsWNrk4n79WXAhcFVjK41hsHxUYuu76dynn",
  "key11": "146swPSKYLxG19xddPsrhXNY3AQLMdHJdTgHy2XsrQpPJtH7ASM4tc6h9HeuXuZDMfjBSMFMRo1f4vPChE4Cvsr",
  "key12": "3T8Eua4Vbnn3qorrJoejBvqQGDcpPfegaNNKSTvAZsdYkefU8coovBZMXTC4Pnxvb9yxw3oRWeHyQyuJymGcMhQs",
  "key13": "5vHdmz1pLnJo7EDBbFmunmtQpQ7jYDtaRes4SMNnqv7CxmULZDHEpdPc1rWzqW2XpS1kzuV1wPdbx4AL9URGagCf",
  "key14": "457SDyCzUWT1cUDyqvr6JGmx6bUSW2NH5VKq1Na3sxdx5hi8TMksdMtd5tFsX8xD6iQp9bWfWPmLgEQQS9WajHT1",
  "key15": "27dB64RnrNKPLJETnYLk2jG8iaDhjEFwQeZSbwJRD9jVU3teh48QeETsQqsbFESWYdkBZky8oxKVyH5YBEYVem4a",
  "key16": "5gtexnAr9ivXknciKQiTbGQrKoywcBSZj7LLYQC1y9wNA5w9fPaY9ysw5wGVhvB1CAreJ7CmKKRVPPMrD5XLxrHF",
  "key17": "j16dyMH4dYfaquJhSVfkgsLHyUHNTwDpTLizN5JDaMMGHcAcQ4x3QT2yMvAH4PbpCxDTDcRwqYpGDj4u2bodh8B",
  "key18": "2ue7igzpFuTATjJCov5t8DNb8UGgo4qGkMo4C8cpHU6Wo6hjeB7v7zsoj84h37W8TZyr9c3S4Yii5s9TqhW3Eink",
  "key19": "4ZWegiAhbtPaBtqapifZcSTzeiSidPheD35nfpv2cLvrsyH7wb26fGG9kMGmYcuJrj96ijr5JKHCMPchi8G1S3am",
  "key20": "yvTbEs64eaSqfLCaYqdKBPhngbAWPS4M372W8ucuuogbfbSAzHBgBNfXen74L8hbfWgbucKVSpEEK33ud7CxxwY",
  "key21": "2JkDciKXxRuiqZGy2wYYWH94UC54JxV2S8zpMYcr6PsGxgsqeisS7BSz11YM58vvHuf8TohDU7pkymjPqaD23FmU",
  "key22": "4KGZszvhUq8kuAQusjM6DdGRQmKCT289sVAyeG8aSN6bxyomkoWp4KtcVBWKn8o6n7aUvnqEnPeRV5vymSGczXxG",
  "key23": "28NJGrBd5d8vJAznje95g1sgR4siHJvPsbvxMWzdjiqKYH4iBSVwYT4xJEpdNVRQAP8auEPauFMk87FfjZooENAi",
  "key24": "udH4PpFu6P9iWSLgjEoq4FZ3eoDRAWMoydL9cfciJkVENrfncLaH6uY74erpFmDkn2ehY2HpwtBLwiDHUWe1pgi",
  "key25": "3KpgwSu6d6YZor81716pJ8DGjcEbjxsDsm4jeeZxJW9hufWaqvWg8aqmFf5FNgRRCQC8A7kqLV2zqs6LSLaVsCjK",
  "key26": "3ZMqUVXVZbQsm4Y82Wo1PFJJLoxLTtwCjKACx7Jffh1Noe8J1aqf7rrJi5Fc8zaJGt1PdqamyPhcYdnfLoG3KHCR",
  "key27": "2g62VXPmgLypWTXHbi9Br5XHRMJ3D43DERhAru5aGWLNLomk7aywHFXrgdhFXRLpub1tu2daAYgPdShLUUjqadgc",
  "key28": "3sxbLtnxeEWwCx6wbQAM1yqT3tYzYPByJ1H49z6kzu8PbMkGhBQ2zdV8yXfBsSiq6XigtvRzMADpYazQwtQkbgKv",
  "key29": "3n16Qqz4RFRSdGyQk8QeRQksWyP6GfRDx4pbGoSaHui8uGJUxBhEtBgPvj1aVESaYToGD3XXxLUovqCtxotumqrj",
  "key30": "2YN82XXYMmUZD7uLPDwNQX4SRieU6t38Bhcpx8Skdqtste1z3NaJpdLSjvcRfSFGna1MMp1DcFXoMSpG7io2Bzg6",
  "key31": "5xwrsDQfzJQGRmGiUYYA3FQy7yFnJXGZR85ciELBLdD3qcdtjvWU26MsSoeDVA7knSXqMVQTdWf3rPNDN3tXziyQ",
  "key32": "2ffxkTZQKQz3PhVnwcDJX1mSDZFkJ3X9b7iEYcZMsTcENpQaNeECY7J3gmXfzyJJcrrpLEcGRw3RF9T7GaDmz4fC",
  "key33": "2zti9PMspoph9dFLLyhBnp4EKaMmEoF8ptikfH5CFrXDBVdTn6UUbiefBQD2soTJxAVie4M7T4BhyaJRweod6bka",
  "key34": "5txnMkT6wng4ZSwp18fPEKw86fkDSnwW454H7Aeb4QBBmNCxRCH4M7znvskRUMhPzTYPbt7MitKuf7dReE9KZVPj",
  "key35": "215Qs2xjS9RENrfmhr59vzLywZtQK1KSsSyBs1nfq6CEsqYPNxsrDQTZ2vHiLXtXhZ2SwXnH8E4XwAeR5fGrFQuN",
  "key36": "5anvRxspXgh9b3m3ZmrxFsH97vNcEQT3QvGWNebpJGRrLotxX9RrsbS5F4Xm4RCLYSRG1jVhj4DcprCMMZ4szaVE",
  "key37": "5sHEmQXtGZC5Cm4ANMJsgaXnPTFPuXYdJ7FQZZ4Vup8MyyjRqpaLhgwb7VXxpK9nf1hZYmcjbywoErtDKVPDumyQ",
  "key38": "4dKyPUBbjH5CcPu8hEPkp1zcbAnKfvn6583Zg4NwUPdhTZ6LHMMzTzhbckeQjgqA3kCFGF8mGBVvX7ARXimNTwqo",
  "key39": "3fvMaRkbYNmiEWA8LT3jdQrCqHXvJk9a3etiVPiJ3UEJCDqMugdsbCGuZxpZNqbsxbPLps4VtV1LWdK9ArhDw5Mc",
  "key40": "5hb8iZjzQ3u3tA982p4SjQRCpUzj8ksxJVVXaJWAsMpiHCG15M7RjSgoYSXCgannUvM6hJtupVY42V9R51CwCTAr",
  "key41": "3mi7UruV86VH4VoHHhj3VwnbDpuqmhdFDoKtCn3CtuVUXFpN3nEoiuAp6wHxnEsywdT949cd5CGP4QxoH6HymXfF",
  "key42": "22Ktg2R5C63y1gCCqh1PhWxEAHBkbDUzxtN1ZojqosWNGhw6Hz8nnj5tybmjCXNX5PmzY1n5tUpZXUxeJS8kDjmt",
  "key43": "4utEBuFMr485WLwSEkXbrrL1vrPhZ1DccxQmJoCpqSVdtsbwzSQh9R2fDx4WYEvzZEvrE9cuhryCHUP9gt6vdy5g",
  "key44": "3LphxrY3kasyZzKchSVWinT1NJ1VsWrphYRaRCCZr34sgdYuFSKaXhBzBTwNo5PEWKxQuWybn1RVvYXasMauz6ux",
  "key45": "qvfPkwG8eTBH76QmrC6pncC3m4n24z9sPCn8SiSbuwRjLfcuToQzMedPrbK9RZLVPNSdo4b5DSDASYQVAdRuhbJ",
  "key46": "3UDGqqM4fbGzhUmZVAzVHwPfjenNb317ngmrHfkvPLHqGn7my58hFbJqQsV6Xs8H5VLoH1WQ9ZyFpo2qTfNmQxNU",
  "key47": "2EYMYNqbJ2V7GrHckiMY49Ki6aH5JyvVLcz83vhriEi2q8GcqY4jXrRq8nJLxeNhtb9aj4W84qrRaMAJisPPYiGo",
  "key48": "76pL4vrd85Ff9hUSHmWrSz8FnkGNEM82zr1sdvq9P15hvz6rCTnghP3J2J18LzD1YDKKbZB5ze3RFyMLAJRmqm8",
  "key49": "5ddkc8zFWnN92xhiySe5NoQfhhXdt81M8dpvJwNGtTn1wi4VGd73jnLRF4w7K7SyqncJrZWyo14DYUriybpcsJcg"
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
