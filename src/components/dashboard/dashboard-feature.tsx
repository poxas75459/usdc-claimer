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
    "4Csd32aB38RywfBcpSpCk2aaG7AyzzBTgM5cGfpV9MkmAHyCqDNGRfSp1WUfVypcccG3y2vffCdT3XaU3cQ4puSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53LaomuRG7ZUtcPe5bUCzq5kGCMYUn5hbSwKb1G8ywVDxT4zM8jsBdi7xJN1etxUKWJiKRxoZQzZFqiSeKD9HGqJ",
  "key1": "3KpoXuPQX2ofirbso1kj9wwMu9MkWsEHqrckmYnRhneuWjubJfNT2T6nxvWJGeXnTJ7Jpydu9the7KH6t7hRbwoy",
  "key2": "RyfnPSQ3ZAjuXRzp1d7buzy9afrEFrbvKfRNGErnEjsxmgnkdpfwHH8KrZMDsXvKdeReFwAbJDszs6G7oKLiTE7",
  "key3": "5d7Tm22vnqhVX35dNESkYL7DJmREKPHQkJzZ7aKiSh1yM8JbUSLqvF2gesVSFbatDaUsYFTq5vBN37dcACzHeGmV",
  "key4": "3EVfrHajnQo6TTCDsDX2nx9fyWoXkevDRMNT5ZZvyjL5YteGUaqkg5HeHyRH2ZhRYGqTabJZpB2muTph8FfvaR6V",
  "key5": "5sTKrxP4ZRWDK1EfZryHH5WmdfZ46ptdKtRvstiSKuhPQX3BdCWNqgojiunFKrU6rKZWpbH2RohkF15Y5MrWuBPW",
  "key6": "2aevETtDjG7SheVPbZNLZEKAupRYqbodg1Z6MqdpLt1gPbHdjeFFgn3PDvYs19oepJ6cySKAZpjwpKrXwwth1xiU",
  "key7": "A4LQBpvZyqrXwFQw2Uouai6nUrDZJcnLmH9e8A6NJNcTHS2YTQjmrc8qexTEg7KtzAoJbVaekwgLWeVoaUWwSNM",
  "key8": "2fcV28HRim2GYBnqzJ7fECEifERDAuoDXRio5KZj3nK5zqs7LHH9MUWPXEQsLepD8EEMXZFPpqscktcDcM3ndfGw",
  "key9": "LmrAfiyHQq9iVpAUBtbberrDVLvySFXs539Quza2NUobeTZbSsfpXKA9FKzBWZtf2FmQgGLroaDkKKduMAMhXbH",
  "key10": "2pRXZPgxps91MKxpeYfo53BpeJVxpoWdqtAaL4RV7jKwuiv18Ko91R3zPZnKXZ3Gc8ksVJVTgamJiK6PePrEqwTs",
  "key11": "2miytXZ6SR3XmZm3ez5W4YMcNMH3u33KoS4R9tW7kq8hqyxRzkRNoaerL6o61xcKuXPKg6n6L2GeD4eWYc5wHCd9",
  "key12": "2PLtvwLhUiAbZF1fqC8pJJeiDMvbmn1WmtTVgPqrzQbtE5YSdWnsGK5JHF2vDiYKG3Hp9j3SqxXQPDftGaSeXoXU",
  "key13": "4zrNLEHizhftyrDcBpFd9LcHPmqX3pju4HKBrNXWBy8toW1maf9TY4RSA8UrNaW5y8CR2nC8XhEx2cr232CecNHv",
  "key14": "5pbiS1i1kxatdx6i6xTfXqmRwxY589KGUEYu9XADUMon34hYEgVR72u8mZcY6EHjT94NBnWbuRsRAnvSAXZjypv3",
  "key15": "3beyWavCm5JYhUWEyuBfEJVt13Xrco3PARbpozhFezRscXYNqvK47poqtugLY3ATRN9JujXugM9oGnYLGcv2sDE6",
  "key16": "YmiiqZf6QgvUmPntQPjqoyRZgx1F12yCGYCxtgNsMcdoXbtztxSK6mnzSv3W9S3rZdng1vUFkokTgS28dkWGWUn",
  "key17": "2Af1rGCSkp9Mac2N55iR6MkbTcjPHedPaDA1RGT4i7GQkF6QFcg92X5QjVBv1pb6r7zhZGHULEkXZhbDrNNXCQRK",
  "key18": "5oALAWzFN3kdDdVwmTmtMnoV354og5vdtEqXQ2xwTM7d8ndyHpDh2XAmLcETi5oFof9JqMPBKtA9C7ZBLoqrwvfx",
  "key19": "2gsPM4HcUPWC35hLKYkn5Y6MKMVo1HuudX3r3NqszkAecAjiG85mtBpDnAYE3tBUTKqXq9uukfqHF6MsnwZj7VCG",
  "key20": "5omViJzr8MXKXonxjMVyeQWRKRyGK7RaeZHyd7hooy3jLD1kWbmqnHunWWFcvnX2eLx2K35LUCJF39EnKZCBAMbN",
  "key21": "5kt2BpVFCJe7CuNFM5kMrJFfDoUk3YMurEopbAHDVUvWCkboawS8BbRh36QtEAW1hEWwvU9vXbmuKCmV62iyEQRa",
  "key22": "5MT6ytBDmUiqzcrDaL8wztFjsnmiqh9yVRRCYPfLfazJpaC9qRtRYqVb9KU1zX1BvtGKguFCEH66A8tS4rziuK6X",
  "key23": "uLtvGqSRYnjrJTgNygn9jwkX9twwem8WwfQ4XeSFsRyz3o2hqiPVS54xyNdZBm5yPUjtgX3TA5RV2AKqAo71FQL",
  "key24": "2BMFcXxDxsDWnfrc2CcRCtpnPrNGZ83J1NZ1Z22eBbxJRrjtsbJHWCZmqARRViYGF19dQju8JuTjwTbUHScNymq9",
  "key25": "2mvcBKfQSub6ohEvDUNYMLvzytWJV3jb4YRfpZFAfrnAzb9fE48D97Wsdx5fmUNUxniLB53gDCqHYNMiuNC5iyn3",
  "key26": "2P64z6zkhMifRDgfFQn3u4DzMMVxAn4sd7HDVttWULHQLksNN22KxCwvhXN4ccZAiUj9WU6zSAddTcu5AkssuzwM",
  "key27": "53y4Pi8j9NypMbNpQUGg7Ty73ssedmYgkMfCTdEgAV1cGxa7pr9ZJKMCqf61XD1xuF9m55S8QBVVqitzVKDtwvy3",
  "key28": "4UHNRqsBDsHqivwyw4fJ5u9oC9XsrvsitXQvM8HitzBeJTSgihtHQ6ZqgYRbTB4HRYyns4nZCfMQiQi2tcVYbUa4",
  "key29": "427DjeKJRUs6c9R9farJM3VnFpC7ZgkmiB6Wwb1z7o3DfaRHZC3aWyTLEcDDtMmDVBhkekonifwb9HjM3TRPhMq7",
  "key30": "3nwp8FnoNVbjBswvkYfmhDMv3NYiP3KEXxDNH4eogkJLC8WFkhKhyrsPhR8Ut74BGTXe3Z9xQYH4rZzJkFpPGD2u",
  "key31": "3n2cgcfnHxQVLcSQSS6moRtiSgQfvJ7qSKvzndYnkzYdx8LKsBv3GgcDWBE3DQR1eiB7aXd4TR9PUL3N46NCKvT4",
  "key32": "2tNwVqnnuQow5FwVs9bWepAPJXABvz1A4cPfgo5KtLZKV2Hht5YHAE7xgVmqwiB1fhTkxEQKmjNyDxhqyRAe2wf2",
  "key33": "3HVW29qZyzppZY1dQ1GXpzXwARcciLRhtwVGTpt3zFwoZdxVphnNSB3P4Dy2AN3sstgWwbopazpoccPTMNRiC8Ai",
  "key34": "3cDgyddifRK33GHuyQMBBLk7RT7txP6biWXdULrYHguRgcvqnsUT8P22StP3jFjk3tib9hj5uECUMSXGTBX8zoqb",
  "key35": "4L9TyL8XJAVrV3Bw2RFRrNFqTd4D8tVAy9Q54ca7hyRDj1o1FpAEAuKG1T7tn2fAfzP1joe8WueRPYd6h8JvpmVQ",
  "key36": "5nppcLHNwxzzNafjEyN2FfGtA2j1ECT5GRmESfiGPSuXeuUqB5coHGcX8BzyxuKnRDHzq6XN7GzYGidXiqwE7dSu",
  "key37": "67KJLVFwC21wshHNpaZvTabXs2r4VsaFW8RRLVU3uQqyonJAKssCTiLJPDc1rxzCnJHqqvZNE4e9qG6v4ZRddtak",
  "key38": "pENN5t8KRVMH7u68PQwTZXLpF5qXeGoTge4z8C8EhgtBFfCwfDSTsJ4NPwa7j3NcVoeNQjaFKGUHEUNSu1AmNRc",
  "key39": "416aL56fTJJagTjwEhdnRjo9kT2DTGuu5fpoJsNqXhjwCTYefoYNS4rPWcUCzuryghAnUWZoBaSuK25WTQkHSKgw",
  "key40": "3ZRmJwAFVj6h7rSZVMdpBAN4hTrDDUKLW6CotcgQVFzP44MPURhSKDv9rHJM8emhe9mqDtgqxJRojbps8AyaNgWX",
  "key41": "N6cw7fYuV5mXFaBkjqPifTegnRjanhSQtenD2oi2pGm3WhCqb7wRio45FFRzhoSLBXfpzstpiQMdgWnGqcjh7dH",
  "key42": "41h4UndwjtwBGUyd8qAK8vapwPteL4YsUmGS5YEFiEgT5uVDBjmXgRKrRfVhxAxa9yqUG46s6PwtYaWvBBD1Mf8G",
  "key43": "2J3pYEovvSwBLAURm34tRsxae1FjPB6BR2sfncwag2gU4BjjKBvbmfdGZuxWrT5pn56iSUGQ35zeJQuMG9TGPYUm",
  "key44": "uhPB6v9KjaydZLJBrojNiK8hr1R5sVh5SDa6uaNLewk8FMxM3w7jCUAtG6QRyABLTaRHoRzptQGpoc1Tz3uAFx2"
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
