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
    "2ZhD1wx1RDd46BjJ4keZQSC9whXoLqiZUebfsAvK4cbS1Paun9Cyo5pqyWTaa9stctH6HX7CMT4ojByGjLrWNPFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25QyA1puLzoqpg12f8w99uYgYRwpDV5J425yNU5xeEPeBx9ypGRzTGnmUNJ1djpkaP2Yt8jhHHeXuN1EM5KrsN2z",
  "key1": "2tZ7CS6SHSZy47x5h3JVphQM9U8DBTi7qLHAi6j7RZUoc7Y1eF3S8wSQSud7wd4cyLKTA1WF4834mMug72pzdP7Q",
  "key2": "VaBepN7SwwASwLNdyLVCCgTwxHjA4ptbtrs68MfwPY3yXnAhgaLzVu7nKx3o9zuwdMkDii99RzCmxAzwUfTx1x8",
  "key3": "WXn54QqGiZwW9jR3tTtGVd5qfh2RnCpEuzgtYtp526h91ba8AqWPwSKwcT5MFb3Mnq9zdCAjMFJ3TEkvbcJZoEu",
  "key4": "3R65eZgEA4f7A9tDVp6JhbuuzHexmQkbE9MFRcaVy3KWaVht96pNTL18Gb5aHDbm3rSN1Asp1rcpjWXMUYcU3P2v",
  "key5": "5TrPqDLec5fMT1Kt7vSPqPP7v1ffXqrUQHPVr1wf5a2h4XTyDPvXzAGQEtyYBUBxkouTYngGkpTfvkzL6AN9Ca8o",
  "key6": "4gijimbuCG5k3dHra41wqZD78JDJCaD9jhtJ7o9txgG9GKnDmPX35dYGR7KfYsCLJRQYb3F1FNS9TXgEZmpfLGff",
  "key7": "66F8avpxDXZqoKxe1GPqazHnL6oUXn9wXG6rf9zwRLgjzvEtC1daNnof8nD853fF7piGBnDiyKCW6bxzga2JCZNT",
  "key8": "3AVJGnGEwvdvZ6KxJUjX6xp8jTT5mVFMzdnpuxnQHaohu1ENqR9XKAprKK36qdCQZuSbh8RV16jmPwkBzmPt5CnZ",
  "key9": "23oaKsmhEoJ5Yyxj6Tf64cZJuoS55fyXMuAm8MM5hvrRLH5fqxjUmcFxynUivmjuvbpyNtdWDfrVsdwaXHzqD2ty",
  "key10": "dwyVSxpwhHvoyH3ZtX766TvAYuELM4GGGtes1gnchcCRaabqJQekjkaXrNb55VZpNvAcnZedXcVVRm1623QJThY",
  "key11": "5GjwFuFewz6uJScFqQcbLmtq6SHJFHGWixM2G2J79YQjhnDSYVK9uee9hixQnprSgvY6dSBUfVWmcckGuBqD3WcP",
  "key12": "5zFWsxHgfHFYxWmcSabtH4orDdLyya7FHrcuq7nse5oYTgXymSybvzYabyNpggPoZ6NfcynBQdjVGEZq9c22FxED",
  "key13": "4dAb9HVBf1USwpp3YjKxv1vVkWtTeY4jEcBEqoDyuBrgs2dJo9JXGrKf2QrCYyLmVUPqdmraGv1NXeDXpsctKjpR",
  "key14": "4mcPg4i4EqtfPKrvM984xkNCbyBHvGRFfTaoQJJaEM7uLFfQPGbWM8YUEsr1e7dHM53PFSx8VatG5LjmZKXRaXb9",
  "key15": "5Y68VTzwxtVPwzERPvdgNt63HEvJkYriNnoB8i6XGzarDWckrrz53ruUtQFkXQd9MvZFME82eWYjvh6T294ZSvb3",
  "key16": "3Lw3BLsxMWcx2JFVZrUQrHSM6YCWfCSAf5RitTbiMir9F3rKzci6y1wYPxuvkHPSxJDWzj87S9HMBtMtjegz31hZ",
  "key17": "2PtF7sKwahRoR8u3h3n1cC1rNkhHi9uMEAW8PdR752qH6gi1HpthnULsFmiCvMgA33tSvpwtJ7oPXqfe8LZvPsGb",
  "key18": "67EiBjNRHae4J6ZEeK8fVY3A2B2kB5ovP1sk5DjdGN1PJD3Fx6pKejg5KGa8MVmMkjSR5npyWhEuWFyx9e6oaYfh",
  "key19": "2Ytu2KL2mG3w72jmUowSAdCR9wbqpWwndBf15RQchKMfcrdkmzg2aufa5aCZKSGuDjiF9GcrrrhE3impMrrPba8g",
  "key20": "4WRSC1qkn4dNpjRXektWBJEtbNqSChJ7hm4zuf6ZARY6VcBUK9QHLNhoEWTxnGCSJsQxWKrVd9uaoAmgzVsHUbVd",
  "key21": "3fptEpwszaRdycL95CPtvx9MpJpVReJPf3CojvuCXoMa5DEXukKMyrhE96A9asgbLJkC4RgJajqz1bwiuLqgPQGr",
  "key22": "2yHQtvEfmXGSiYvDsNg37YiR2s6BWC5JpeDyJj76XPxxV19dA4MwgTXt9fdyjBnwne93TazW9wbbf31P9f4yVbRh",
  "key23": "2djEy2H8Ymm95CA4tp8AVmhjPyKkyvmq6UWMhNVF5S9ECF5EBU7kFKNwRzXiMmq7ETKFEao6kcFtfUjG37pdyMhT",
  "key24": "4ov4KqrgKNcfNSMkZPLLzfzFNPkZ31j2PvsPFfHSVdro8aksy2fTKxosQ3rQSt8m2szaDzrDBdwxrHx5ZVCVmH5L",
  "key25": "3mAFdDZuajpz2xf8n4DXx4egyuLtrSqRoh4iy5rLHC7axZzXkDPHiUfVoY3aQMxhHhEj6L49n8aBjrpKoT1GoVAt",
  "key26": "iJPTA4aGbcsrXqRm8BgXzKzYppyFhpWhxVAraT4qRjfB3CrPYYSX4P2tPHactmaJhjkpz5KYVUWtK18XSS4Pe7k",
  "key27": "Ntz9UFQof4jhDsC28Upq5nqgur1wvkwdiEbb6uaKYosPEkNm6VrTAdJWCZa3CJnA5vfr46gJKXF8uPEhv1rFKei",
  "key28": "3mtBqehdfv42eNui3BTxyEjn4K28EmmuLuD1sm77hirruTfZEYhYES5mNUPnvxA1We9ob7NBeSwyDmCLFC9ueoC3",
  "key29": "5EZ4GRCxudRCtQqZHZrbpc7vGc1NbRoKJaeUq9WzhVqGmMUCDFgwpDcpGQHW6E51sZS6prczb171ZWp4nkqBnkoC",
  "key30": "4DUjSCAqW3RGNRHpSvzM8KbB9WdX6VB9nXN5kLaBH3QYFPeyWXtHr6W7QvdJEe7WoGUqrvVo77diSVRGUjd2xGxU",
  "key31": "5B5QPiyYKQeqCm8Agqbgnd1SZWAQ91cXq95ee2Ab1iJeL3pepceRQC6Ac1Czg4LHa2yBBzno5onguWH5WphYqHYY",
  "key32": "5nTvQaNjLA84g3VCc7vNsnJFFDWqShNz1DjqLxdU3fFtx3bsAAU4RKYncfCNAxE2JNxkWPsDcPr1dV2QakBbFVv1",
  "key33": "5ZUE2wJjrsvN2wH5vZbC2aARRXqqY2DekJjrsvRrvpcUXzfnp1WtqVPzRb5JeAXNTEjVft2zPgrpyKULCigtRm7u",
  "key34": "2Ag1NThcFimnu4Y3r749VCwjQ5pp8yvegnfa9cHVe7teWei4gxeJhWcRYauTb2US6mAqC2sfLAhLfXGbsdfLqPtd",
  "key35": "3iAk8F5fzbSomGHwaSjjavndL5CfyQH544tPsmoLVELidFN8Up1XZDmZM3hiFA9Q3skR2XDcW9qJC4o9L83LTTrz",
  "key36": "G4xpiX77DRCzNZ5YX9TQUMSNkT7o7dkjv1yqzr9Tbzdi2QNU1HZTEpK2K3Vcg3ufw7LM8Ri4M6CXP3XjRPAyM1G",
  "key37": "3w1e5UxPefhdoURzGxCYfcL13JiNPfpy4RMwJVTKrcPa4gaYTuKANuXvNBj7ALXdNRPiwagiV8GTczwkfcUUK7ru",
  "key38": "4Sz7SwMy4b6nuLM69CgDmehzuXG68KWPXZz58CL8tmL8oKLWtgx9dtMTEHJri1iA7bJCoy9e3MG4p1ZSXR69VZkR",
  "key39": "5Vs2P7XVyKriioqx5Ho81LZMug9Xy152VTepdBWN6ccW1HkMrXdYHESNMtZC6DGKnxPBjWYUjXiHTwJuBks97WvV",
  "key40": "2S3ddfAH3mB2FHvdQKnaSKr69NAp3EEt9m8Dq3f26PMmy6F4QEadDHtDK3GMNkJP7XUMC9FwzFDbnBGGJdVVTGKG",
  "key41": "4yGdKvMCwuT4RbeuQBSufpeBZAMYwXw5fRpxyjbr6uXqWBoxJp3BoaR9zcT69gVNxjicbtJUvbwdnheNdqL8sXpw",
  "key42": "3fhpu7vtqyQV1sDWawuunc7q1SLAWTKK7fdQwy67MyZ2GvLZfHWhykoDV9Uxc8m4H3vgxcp7b4Ynss6YwFsyUZrb",
  "key43": "5yxyQZqp1smh9m5Hkrnce8dnn9TGiD7fmotAMmX3AGnARSvZmtvKjEKWxhjdRqF5MgYWgTMzcz2fbSdohxWsgLzM",
  "key44": "5xWZhhy9HM34JeoDsKH75BPAGpPzgWgmsJs9hFPLEb8ZcrzmAwGgZw6ADnGxtATXPA1LzACUGR4nC4raX75tHyEw",
  "key45": "66muPZdRbXfSuuH3ZGpXedoi4jo8xjkLSptDxo961ki3h9fKhjANW88KdDuEHwZ6cDiSG3C5qaz4kTXiRXsYRFhz",
  "key46": "229rCLd7j8BvPa3CoJXrhfkLxcBvSWX8KfJcLcQ2bWkFv8AnntXSkQWGo3pES6Hv2gpKdj1D1YPpzpJp9uwi2UbT",
  "key47": "3uVd4MktURzkxQRiMMGLTTSA3SWac8zJNQFZFsqm9VGsMUHazCkVVsKJbmB3YFUyCFGjxH2TLikkd7uxaMTdQ1hE"
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
