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
    "gvKYdAWutWf77fd1EXvMqJXXTrFyRNJn7Qj7ge3aNRbGQaUJRqfS4Q3esS76iRHjRCQJKUKfh2fWnAChccFJjxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h23iAEkproVZadH2fmqCHWqJFiKUyypTWfQJu9oGmHo7ctGQpkEeLVBMS58z2KNr7t6zRNDkv9qkAj2Gy7BMSN9",
  "key1": "3rq4z83z3b6tJ15v9mZYdA8SAcAF1XXgWcYJKTofNuoCjj6WjUhmWTVgdVUWEtX3UvLSSeT2RBTXV2uPxduVcKbT",
  "key2": "26o5Jh54CttF62MqrK6XkBSGqxV1ZbqHHo8jGshJCkneis3qgw5PYnq1ueqwbPBTSuQMhtN5nyBeTq7cmkTem4Mo",
  "key3": "cCR9oGPfmecbySTp24An75Q6nEPNDcn4hFNYR6H8zrEip3Q9KoSaaD8y4gJZPdoEx34NrKH48HceTVqZLmg2NTU",
  "key4": "2HMKtYwYMRQi1jfJavoyYPWGog3MJqwDQjzwoXQxDYVfrsn3BsnNBEZdG3jCywc8mLvjJPM1vpbxB8YGzaf54ycV",
  "key5": "3TvJG291DcVgqVW4pgN8n2p8ybbUYVrWGPQTN8ZPcXRcdgwgNNzbMYt6speaXXL71ZUHDpj2DgTUG1i7QoifD85R",
  "key6": "2NZtfDfegnrgbGBudujGq5JZxcb6q67hY8rFYMXSrMTT2grhmgEXfvTrGN2ows4hP28w8GUo1KRABhA8dprvHZPp",
  "key7": "2TMXuog3utD72Fpy2zFjNmssessuV6LMmsPJuTLtrossFSN77ewQ35fxeuCiMBNrTXBiic5eRMAHR4dWR8V4HPfD",
  "key8": "UQAsg8HJ8s8rfDvynsXvm5nLQzfzhSJswToWLnL2EEZ911XimecgtgeBr4vRH5aB9uuYrhKuDvXUfprp3147D7a",
  "key9": "3wR36cnS5oWPTU5xTHLRTqAE8sKnXMimwkwBb5B2FD3oQmwoTKdNnTymFrEJNDJ6QdraJTFzgHXP3RpxtJqckrcF",
  "key10": "3noLrFzK155oCeZwo2MQusQXM8NA7k8X2uStr8FrATnDzDnqiXRD5xxKSm93idheVCXuKXtVFoQMJQWijijwsMWc",
  "key11": "5HDQDxx2mpYn2AtiDbnv3sro8LNmLjgpNpo7pjPUW1K3jckBRS6Eq4pyazCDqcSjgBy6Nc4pfyB1seP5EHTR6TSA",
  "key12": "2riRAx44LXS8QnkGXwtEazRdGjer9BsAjGLU36inB3rks5E9VLHzssGHDEpRvtaVMk5vSFCnvdSrTToMUaACb7u2",
  "key13": "KrrvZ5372ajBUbFPNZpm2DH5GYZEKFZ8Nj9XiYZ5Hfa7yCyBBHsbAvzgjcUjA1aYyCnptCyjkdP3vKtgdP3c9Pt",
  "key14": "62brLFS6eYeYNedzLnxcjjAYobfLw72iNUtBjYfMDSPSuH8FDo1j1wZh5HADyKTBrNtZuG5z14cabCmJRQq19M5X",
  "key15": "2T9U3WZuUeuKN5wZu4jpDzzfMP4MU3tAtZcqcLWLqjFaKMuopAyHWcXQF7vk7p6qvfadXvLTpZiETaxSMECm19Zb",
  "key16": "2KiXBuJNcD2DxnprZXtLhNG4hGy4xbiQNNJe9vHMKiJe1wM16pVscJFmroWKq9dFcCa6fjvETAR88F9X4MWxFwAo",
  "key17": "4J5Yc6fBYeYnYCVaBeH8AXBt4VfpzF5WDCDAYrvMMAxf5sa1EsCo4g5mXki9J5FjsUwq6grmN78uiuZaLasdvCkb",
  "key18": "4B74mqTnMxb1PtvuR6MJSjr8AioduDVJ1pZLS8ECCCaGqV4gr4tYFLu63DFyh2SKzGUiJtA2CmZ2BcrBZJxSFLmk",
  "key19": "Rk7mB2q9DDeVJtLQZ2pwPucFEmH86riCALLQV1sDoGgQuu76VBQYv4VHpRuxZ6jrKZRhFepnVYvxSn7ZSPPm9Pp",
  "key20": "4msCpi77pDCNbrs26EBpSux9mTbDcuZjzkamj6yYZf3KyCmeYWQD4i8QAMuybpasVXvJMbJEdqQZBQ7rt3mu7PBA",
  "key21": "t17PiwU5tQhuymGHsHwZz9rAeSrYkz6AM5USDejeQK7VHNBCCT48wHBCHc7up6hudUUF63qb1HG6zdG2CXmvZfE",
  "key22": "2X9NBWefRktGZdKSbEpjKw1Z3J6rZfuwTWSLfFmb1YYnmGkHuGdcqCZGgNmNYX2BTWqCfA6gvMs43m7Aj2MU54tb",
  "key23": "3qpdfZpX28WTEU6Cmfk3KeNbr8XmtvBkBjGqesUpYxgug2Pj6wePLcBkPMVz79XsGk33rk8EkywUWdTtE4ZTWz2A",
  "key24": "5XTfkCXUKs9ZQrM9Ka2oaivxBMjem2h327uun94bc5z29jSGbA9UTYHwEoqym78oM5EJwm3MYW4XdrB7hAW1mrb4",
  "key25": "2PPYWnWPDccEgkZH3duD42tj6do9njkeAMz7BfcSUg12sFvbqU7tbbQwAd1DiPn8jV1mZBKxpRAQkX2xT3eM7DEH",
  "key26": "3rmrKSUfAiqmwgHazwRrYcX3v8jcu2sLyzPPAEVDiUtPA3JprN99WWh6SAvJdxe3XRZ8T1zxYccxrsfxVvfSvCR8",
  "key27": "DaZBscGxAixmkwWUjWrteUwig4SBH9yJKngqRiL5Bu6RVgob5CKhsQi5U1tBEdrUh9g1R4q3cmqWCUfzgUN2TQR",
  "key28": "4wJdeFQqyZoATTdz7ArmRcHbvL9QNBVmcaDqgfTY8vi672YtA2wkyxthNweVSvfmmrKhWRG6C7h6YJAGfb4hpEYZ",
  "key29": "DD2upAGXTXcYhFMVnq417LhQaseGPChcMFuPvjAheqkxiBr9HzA2LqVkyHYhZ7ge2AhwuLewQ4yzqwYWWgc2Vaf",
  "key30": "3BkRqmEHw9gqPzcMsn47beeWowyfHn1NAgZZWFJ3cqLjxYWb5wY87GSVj9trxv3gV6MnerpyhzA8siFXm2HnzkEa",
  "key31": "4tABigKzNPsvEJW4MepVBK48TwANk4uWw56var3TmeDBd4Az8zGM85CbLghUawdprkfjwUSCSk6jk9btM6pdi7Vh",
  "key32": "WNpYbMjakbBZfpZwLDWn3SBmnyGrcSZzBkCJdHdTpg8tKN1PPxXEWo8kLa8eUVdBbKQsGLpQ6ZXbBnyp37pofiU",
  "key33": "24CeovJ6cvCvs1nWgNPB79sWUxpiHCCZWomSYb4CFkiAkyFwz6TxqrJGCB9q2iRPmYy2zj48vQgmDpNGWD18BNsX",
  "key34": "4xU9V3CNGyLBjeZun7BMqRmz2PZekAZUPYUdkEgEr9eisZ5qXNYjKvsARCVSJYrojc6qBURM8GRfpfztSRPbHM4o",
  "key35": "3BsHdXBMsCpX8tNpGYNPePKfc7ZkCkH7UnFu8SumD8FvjvBQQmXRDpPr7JxorgwuczzzCrjpZiK6dT2JqC9ZZC63",
  "key36": "4Z67bXt1hjVC25AisFa2WiXdsyBbFRX8ptXtrJtY4WRGFXXXoeJPCazTRqfjBoNrziEXMoLWnrUwMHnP7nDFDMCX",
  "key37": "3nng9Ukc3VfgwiamYd9okrfWbaaawgpdgTsTVfpsATyrSsJTAfSeidRP1A2fJ2sS15rdQG1vRT5cUb3fSnqH2ckd",
  "key38": "58rLZeq83tg7Q9xtPgGpKg2jDgu4XEooV3G4pKBnhEjs5797xt97H8eVMEoefugYwYLL33mAyzTEa8h9HYGDRPso",
  "key39": "5zpXq7SiB3rnVs8HxNS5WN3cYigymG4WaKXfn86oPqmbqX7L9p9nzPkXsBDi8AZnYfjPsrYuvMi2ZDis13eiCGRw",
  "key40": "buAdrYSF3eZATadT4kdEoB6TXVL7HACTHySCov3g6fFoodxcTT5h9usYPMUfmWyn28cQBsYym1kTx6Fwpp4F2gf",
  "key41": "3fAbXTiiTRg3fYbpZnzmVXkB4UidAkpz45dUZtT59Yp2skRBy5ehJxmiMTsHigJtxvaAusMGR7wFVdPZnzXoRJm",
  "key42": "3ePxp4QoABMzG8b57vD9KRDomisrTmQrYsoPGWuaQEU9xmEMEgv912ccRqW3VPuCrqAdeavDifcSkSGk8qzndPeX",
  "key43": "VxZwUqsBqDF4N9WPWxfSa6jBNKtht2yRUcxTEjB7B3qPSH68cRMTQpwbJCoJoxsc4jKrX18bfHwdTAGAL9Wsv81",
  "key44": "3eiCiMSqQjnALeZf415AgwunEFRhAr2imodfmgRunNk6exd4yKDctDUfgjEN62Vv3H7BabYwkcCEqGCaSFiwkSct",
  "key45": "2BcTnMpqKkQWuzvJMtVECvdWJixyDUVdVWdvp7uN98B5f2d4o9pXjC8LbfPtdQTgff3SoqsHkqg6AuzhGFZeCzyf",
  "key46": "4E7Y5GC8By4GV7H2936gAVSvoVRNprjvwuEpMGWNnQt8Trp3ZQ9K7xRxi3LbpnCX68sgGdr8FmiFQnrqdxC9wEPK",
  "key47": "3fKUVW5Ugvmc3cw5znuBihtLMy7Z5Eri7evtnA248mh7oK5orLtFbnSrNHFYueeDm4dxteVKJeU4HASK544Pcrc2",
  "key48": "3xW8yFBYSBZPb5NgiCYfRV5MFurjRtndJKfrNcMGhhqLUqGPV4S3Uw9M43yaMpbmU5tnRFzeBZCrgrLXGxTXQFgs",
  "key49": "3ghqGANGc3aLdL5p8HCdbktijGUiYryg9qysmT31mhYMLyPH8hC3sirT6uDpG8oqGiG3okW4CM2RkBxD1PPzigys"
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
