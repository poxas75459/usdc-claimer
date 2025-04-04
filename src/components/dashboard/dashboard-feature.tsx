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
    "2QQapr61FnXgtsoa3LJBGPDyQBRrnL51E11rs6kNHtzhcpLgnJc8pV7hZmCsebTEGR8ZNFuAfWfpDot3TuiZLdGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43m5kfRscFseNW4ZKtsmvofRPnig6Srdf5rcRdDmgzbhsuQX8U2MnRTWTUbtyXHxX8Vp2ec7wBpJaMW4ZDJVLocn",
  "key1": "3Y8CFHTqSVgmFaiAuS5iLNSusx4N25Eu4UzkkqhCwYmVCiRRQUZhdeY5PPcCUG3htwZ3AuahWHgnYK2nbiZLJ8BJ",
  "key2": "5g8gf57bXcurTDMYV5jzA17A9wscfPy1mSVWipC3hZAK5UECxxLrcZHPBdvbBg2nRoHp6j7AsSATEW3DJeRH2Umz",
  "key3": "3MrYJJXGoCeGUK4MNEkHWjKLHQ7D31N9DrGwBfFeuUJ3E1bcH8o6Qn6ztj7r1L3hkkkJG8L98bx9WbCzU74aFgUJ",
  "key4": "5qZurU3eqjhhmzk2i1jGUxR7ELWLmyWyjrPyTCbxC2wcttcPx4tvRPQqwfoBsbgdgoDbbeYeDaMxAskvsJPTjCZp",
  "key5": "viaRjGioAZiq3mv4pVRvuKaE5jB1ADEHJgnpmEPGyDgpQoyaEA4b4sxjh3WziqHxwBosWw5niaw5gzvfaMss5d5",
  "key6": "TB5WbmpnGfyWechVXHCKbSHLRnYv6UPDR4x1iz3va9inAsdr5ifuVgGVL3E6PSc2h3vdvux9TkTX4QicnNXb5Rh",
  "key7": "53yCtpbVEBxzFS54adCi1YEyjCG2FYBXdLXJC8Mo3vc9F8UwP1HRNhQD61WdGtMv8hz1SpjGoFTCQAiVpo4sFAwE",
  "key8": "4JfNnN8q7WLBXMne76mCA6A7cxnjS4tKKsYHAU4ARf5iS5M7kEa4MVtiAmZ9PWXXy8JQaDDpYiiLrATW6zQQvmw",
  "key9": "4Ta5qeUmQNRboTp4nZziVuYYk2Hat9TSqDXQ2FkvRiDrsZNHJHArXGWHCmjMtBMPv4RoydN8HbeeRhhUbCmC2ZqG",
  "key10": "5mAAPeoyY6ZvAipD8qv6pkc5wGxoQc1ShdcdUC7iswsvhLSgajhdcMjhwzJ1r5PYNUzxtNM4qnSM7G8e9256Yh3w",
  "key11": "2AE2frDhCnfiTsJiAEZbXG5XWQrDhvGRfsewhv41i8xG7iPGjZJhWGWe1QB5CUx6ZAtLyGktudTYsqYwcdyyrnx9",
  "key12": "3C39T2vZKTda7H3cukKsvuXXYzsh2T3V2th5zQHbWFxdZ6NaZHPhJyzmKE4rVmohNJPQuriDpJpFXxKXX7tTBNnT",
  "key13": "J2ABg4ZkRvYYdfJhZMARGEBbm5nnBdcQLCXpJP422kKpLEZjH2bNAmAA396tqNm1VGTMa2xew1QQNBgHj25deNx",
  "key14": "2FWfsVpbBRPpX296cVNT9ByovGkAfRAPKKzTHv2KZBjiaTZZNtg6QJm98gd5BmWCFUCjKhpTuV4U8nsz3WvpuYoi",
  "key15": "3CoUfL5snyoDFa5PnqVRxqLeU2SVF4pmhsYVMjTtN1wbdn31gcuH9ftES67wWk5ryidhBPMLeQ2VoNFQhkRt9ZxR",
  "key16": "LaRpfnJ6FFRzYnwsJLifqCGnHF676zvGz47LZKVaMzt2f2osSh2pNr18CA9FT2aq6TpcuPU9F7vWBxrwyFhiwAc",
  "key17": "5v2ZXQQpc4z57mJj43itDgHUXtLJHrzxFmAVSvJPb1ubuasaKPRp3Rvbggg4xCUjhgUaiC65XfSQcEqkfURHbey8",
  "key18": "5etWuwPPMFfcgjTyabgRpNtbCq9gVq4xoV8VhSGbDCWdkbtBqK8me1gdzXqq8cPPKS9YAgZAZd7oFiUvhMKiZ9aX",
  "key19": "21zSmgcX8KPhAJnjtVKtCFosW7YdmX1s11jzScigkVPscFhs7ck6mFb6nUCFnBnujC98qt2Ljy9PDTC7fb7kS4ep",
  "key20": "3uqLfwnAAYwF9xrFrjqxBUWF16NNpSJryjXtheKNRtZjVGxKV2AHsmvJ7Kjzwp9UFM5bWJC5ypgruyWXAqkAijYX",
  "key21": "2bKUsfnSKRNw2sVWEpuqqqyrcGBrfVhUGdpXBtEtZmQzpG23aG8i89qSErQws7j4WChhaQbdEyHdtBRZenWfD4Fk",
  "key22": "3kvJrwdyaEB476b692UP6AoABNbtZVjoNZkPzA7faUcCjiWBJ6m1iqZCx8wXgbecVTSmZ9Wikx9mV5NLpTLo2Ciz",
  "key23": "3HS8SLSPEhwj1hMm6bwFqLDn51E6rDfc3ezC7gQ8c4VZJ2nZo8Jo9mbVNAq7avZrad3oCVhSU5EaSRCE33TfbaGk",
  "key24": "5zPMTe8sjMPKYeZaa8YaT9Pb1ugo3TjMaU8JDPiX7vtSF6D4Qvqi6rhV2eb3Lg1pp3CDtCXgi7PUnZGGvNmFWWtu",
  "key25": "8wtTSvTp2qNZj77vjocivL4F2oN2jyGU9VKXczAtBWwZ6XTyU19QNXzSV2xqMGTnCs4S8zxkQ58wxuqpdwyyr8A",
  "key26": "5pDYB5aYuHrmN3Gqa3E4QmiyBM3tyQJZUcGH7uyuM6wNWXypPhH5LYc5unhYFbdzVyEScPc7V5yoQCoSeYF5ARAj",
  "key27": "4XhaxHrPhAt71D55JJ8hJDu8B9dRkg5beE366qLfSmG3HasW8XdNHYQgmNKkmMAAxst9jE6jdrSeB3UG3Ns2c7jB",
  "key28": "2WaYiETbMvJC896c21PByPrPMcgDg3Y8riJLrcJZrigSb41YxWtpbHA5LVMdCh7tEDRigPDHMdxnCFnrGbfusc2z",
  "key29": "3REmf8onwBzEZWm7vzuRX5CrpXgR8xJ3a6XAc4ajYzYcvF7k79PjEtCrUaheQtQt9Epwr1DWm8vBZwXwLZhLYDKw",
  "key30": "31BKMgoH3sMgzR84HoBXurBXfpdC9rPgg4o3Kgup4pxG8UEcJvsP8sTuU857BKP8wjZ6pm1pb6shNNAEavhQxWYM",
  "key31": "3GrkXhqekkGdY9pe2adTWBcEB3u5JGdncNbFVSQn3davx2pcx3hR9qDDtkF3iL52ppfKpjn98BqwatQQf4ThrS8S",
  "key32": "53emUMEcJxMDmmSWmERCnuqcA17xxLp4MoXQkWVaUj9ULG1fPck8nt48p8h9E9w44qTQPxx3oeLyRAg9BJjbmLNo",
  "key33": "4SytEp2wFi91NrApPCvV58UZ2T5zUmWr43V3RwyRfqC94QDvbbTt4a6pJ5VaFEkZ6N4TuiL6AY49XSh5iytJks59",
  "key34": "3nmLAeB2BtMMvPfecpks6SEoaviZcf3mbAApBFndxSSpani6d7jSKGFZxPxGhwgV3PGvsCMjh1ossbmzhr4MPW4Y",
  "key35": "5GDzM8DycR6P6xp3S59mjHL3tRK7dcxFcQMoEt2hugk5b8q6kFWuk8RzzKAk8ejAT2Fe4XgxhWZVRNYpsmUvwzc4",
  "key36": "61P8iK4M26VqSS7tzZuVW7a3UrGNtgGjQfuunc8KMP84X83qdqqhPfCARJEMYsAKmVLCxBS5ZZnNo6ECu9JwzQDP",
  "key37": "2ndXYKM2o6qvCbdD3HHP8RJCexf8f8JSfnLTWBZ6yH5EUwfAE35YX4uWJyNR2jqjRLWGAae72rGNgcaGSE6WMZxg",
  "key38": "5eTGoCfVYdB2kmzbGsvLMsCdVS4Wp68SW56itja9oCBguuWT9R6WLkbRiCb62CmDkh2BnbBHR16oR2UdUCbiTv3K",
  "key39": "4jL3T25znCYqt5A9V29UEABxEJg4KkjKM5XjeKWA1QKEifZhkkeFmVtAuEfr1jPEEV2md4ufLEPZDYFkXLntK9e1",
  "key40": "5EsRaNQ7F4dpaDVUFk8vxJ6u9DK8QW7jLqEbgw9jM1LU9w6bMQdrAYhpiHmoCZvcj26dfXW6UgadYh1E17jkkwKi",
  "key41": "5VAgWWjxyNUykJD1yjDDP4CTN3R3z3QAoDg3MCsryVxs9spowdDiFdzfmCkiXwBDMXPjuJPj3jfEDVYcs5ymxu2Y",
  "key42": "3m3czNdCANms6evx5MxdQpKrfQB2Dh9hCQri15gWdz5cY4epQrTtKyzwyujLeRuRTsC8xFeY3F9YwmESrh6VQCpp",
  "key43": "2nunyQxLx4bc6JtWfsnpgH16o9KPFyedVGweyFgaHfxNLP79ExscTnCqwJEn95ySzrWvEQ6LsLGNijvw67P8iCpD",
  "key44": "3Y2hVhAsEMWts1quLVQ7NC7JmsVCvtfx5LXb1FMn8zjaZobVJbSSxcC7utoMeTjU4jdj4vLnTt5njtHqoX2cC2D6",
  "key45": "3hioUYo6onVPaGMEqVjg55SmSaURJSWcLKzj75YUVkJ2gZok6ht4QexeQNMc5793brMAWde9SFV7xjMLH5mP52sQ",
  "key46": "DYAmL3oeZtyCzgAVmePHHQSoK9J6FcNeD2aRA5KwwocGKmNQGxShwwq8kh1qMr1cY8sSQgfTEPgZjwzqewwGK4E",
  "key47": "4w4cKpEQNHHeisp53xJ4zCDFWoMG9RprVWES323Uf7vzNcknT9ZNJhttXH45zjUKKxETZv3MYtW2uXAQJyHRehrG",
  "key48": "4oyGFDQASUkNq9HdqCcjmjVoBEixY2eSnQ6GWiE6SkK2R7Uc9AVJaBiAiG9AxmkirWNTQ7LKiS7zpLb53GAf2nkS"
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
