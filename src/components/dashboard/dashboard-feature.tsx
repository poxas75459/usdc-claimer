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
    "FShH92tT5Hjntj4wr8yYjoM2TMXB8tJPbwhYwmYr6hh6PQpYyXfTJWnVmw6V4WkwiwGD27sTn18iuyggvPQCCB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "518zj5dCXLy3deKwr53zcYbPp4E74ZFbvhFWaFKYQH98Pmzu8WCC9w8F8z9ATWwPv16u96Sr5cnmi8eMRRPFnRkD",
  "key1": "2GZco3vWEnyS8aPGcs34QhWRRsgUS3djp3J7qF5nTkKMZ1wpkZj4JD6dCX2xW83ckYiCt6ES29EFfkrTxNtTo5ba",
  "key2": "39oL5nZQ97Mo27PPTihmJdksibyAiGNzsZnbbSWhZ7xYESTPN5WJifJPSLEdUHZxXgrGbywvWBdBLZihXtreNyLf",
  "key3": "5yVY2GLDvSHvz5GixFPXG4bHiHMt1wDDxyuAyxsX1KwnsTFtwXGrbomURFGir4TMXs4Ykpi4sV1GNVfuegdNCm3y",
  "key4": "KiC312Ra8H4fWzWssihzn2Udb8rH7wq9ifubcTPiNp3ddx7QxzzSK43dAVsHbbFLKA4HNM2PdRsHEXfR2w9rLLQ",
  "key5": "5AK1W1JQSJsypMPZaJXb9zQ68YtgdCguhkNjrh3UYLgkjY687XHRujL521vMhesWTGwkRw2x3Rw9UDxhfvt2mTsZ",
  "key6": "32AnBd6EtQoxiM3JzaqUC7B26KYW7P9eydjhZez2iFd2mYKRAg6mpXuq6EwaNwTpMRTztqxQ8PTQLbe2LXP8CJFL",
  "key7": "4jBqkiqrt2JUVKv399qFEgkgv5zSFMdGSp3f32FQCiSRxcaBSR52aUjKdqJTsBt3cyeeKU6vhs8iHfVGnknovsu1",
  "key8": "tGR9LhPhDnqc3Xr2kFeL8HeJHrBebq3assVZjefSCpxAaZjb5qFBJiRMmPdrN3i33Ra9w5fqzJQLjjcTdbj3V3a",
  "key9": "35gVneeVppLPo5cp6rPTfMhyrrxUD5Q2t5iJBaKRnVUsHq6Y5LeMpmGzM2UQYhK9JUtnVb3Fh3DngqY9v7VmdE8g",
  "key10": "5hnnZYKFMaBgcCUNa79xDsqwbeCavgSw1CV165gSN9SRiPskv4XRH7MroQz5htp7GTxeLGSsY2rVkMpGwkJSPnXE",
  "key11": "5a1FHrpLQ5yLAPCq9tEj65enUCx3nifcgH4b1QoPMA4dC2y4RhXGAULEDaL4bUUBg3yYWu9w2dDyccmTRvjkBCYP",
  "key12": "2xMvD442hVAwAJQWLKKczhXdzaa3jGPAZu6REBGHKcwNptvtZLtEbbxTsAXn1ZJk3oLhrsh8iK7LYonbQLAnktkA",
  "key13": "679xeUxbwkvcmTDv2JJ6bn2CqgvmzyvS3XmQpdQuH85MbhTbcumdJvkGakwgewePgbqdPAsrbok1pDT3goPoGdCT",
  "key14": "5r9P38PFWL96i6V45hZ1DZDsXs6dVkLQijmipE8iDrA1hS8P1aVxnXYMUN4MBrKZQkD8eyzQyaCHmwCnNo1kxdJz",
  "key15": "2we1svKRLrztUF5p3tt1fMrAQT6SnGBFgErxyTFUbBMBw8pxEcdMUVJeGpXZujL9naSkDFfvkapfcEzLtb7Z7seQ",
  "key16": "4VqTE23UbJCxUtdVj7ATnVr3XTc4ijNbjwnHZxCP91oiUHPjxLZFZfa6K21bASiDY2MMg4QD22JABeDcaQQWY1b2",
  "key17": "5C671pT93DWQr816AZx71mXzhf4Ua5BSSiJPSNLCVoaC2CVWFP3yZMo8TWDpHC3XRmPzU62w4tfcbf8eqrF4QXH9",
  "key18": "YViBkHyikeR7vK81182C2yw6QrHewEkNLBigSLPg5fijxHkVFtvxiRgkmt8kXKiRXNMgCAt8YcSeqh5xn18zbh8",
  "key19": "278ZgRFXt6F8FRQ6YejFX5AoL2xtMroGJVGy1bpo5vwTagMxH5CHjeNaztV7tYDE4yZxdtmAHqCcKBjtvrV8ntNP",
  "key20": "5esCbPwCsYLAdxxbwgL6fxR67QV1Zj5kFs8pMY8g4rRyRj25gNV2KE2dm2vNZ4sbhj78YKRP1TsHCoSuSTmWnGUJ",
  "key21": "5Uoe4VQk8ZctDq7qsWjGoZfPN2q59ay5mcEXTzcR7GY194ptRj6Pgize5dezZFiGKQ1qfkWYHVSkvsjCA1NCe6he",
  "key22": "64qNJeJT2DSrk42th1U6XB2SsNjMaRDKewTCv4UdW1FwWU7Hfc78JLdya5Pc2pSsDaHNYcifVQnMPJmdjxqMZ8rr",
  "key23": "4baamskkUYJQnQ51Jes5dGH1smfnoVHtmg83cJaEaJBibdNmp77xsp1XQLBrUmgpDD8c9P1F3VUG5imkCuN8qtms",
  "key24": "23UsvbD4MjzcHZNr12r3cdFTaL57sgxiZZFgsKy1zuPP2APBEMkeRuUrH3YeewLafKfnpKbcnSZzRxA6wJqHzafn",
  "key25": "3VhnXsBLMTRJhHubMHfzvp9cvTBYV2WzhmrhxKkPnq2qVbczmVmzKmre3iUhT9tXnfpwp4s8ntNmMqYZmkzSz5F7",
  "key26": "3NqvxZSvze6gS7kLERouF25mw8Qdu1uKKaE86BmDDZVebFhaD1GJUEfH148bJyV52gWzNVJCLmFGYoW7HCn7YEaG",
  "key27": "5xs6XeFT2MDFrXKwr4k6sggvjK8VDQYcLmeofwDoayoQyM1MAwXRffHymnVAzaJgv5CfvqZmtcjhtCpk2X1RbUhm",
  "key28": "57duGoQSKupmvxT1zwjrWWLfXopXqyJUsrGk5KktErZjKsRGQdK2x4Y5UTFfcx8xbPdpcCqzWRT3GqKWwrgKUoRh",
  "key29": "5eibsbke8C6bF77c1XQkxKNCe3kMe6xewrtwco4Ek41jeMMP6QiyS9nHCZm5mf8ZKTb2zjCngiaWHbbirZL9djpb",
  "key30": "3U26EWqhopFTSB7vSASUr4orAnnyHLuMnspxjUgmP6ahLYYyGqFb7zShPD5izYE1i8nTLohg2aZvGkBAZbi57XPK",
  "key31": "2HJQHxsb4JrZkid5ppPvJoAjYp8WKBVvcpqkXEvc3XEj1YBaQAS2E8qi83LmiqzPupkXRRKXJDR7eA5WGgUouV7H",
  "key32": "5SsKYLnPgLLoVXcxcVfnsF15iyMKhWEnnoJh2vavSRVUDvK33BX1LwmpFAS1aBwa6NKmFsLe21Y888NBbixnqwrG",
  "key33": "3bbz8zZiwhowRJ9DJjjidvaw9WC3n7eqz8dSjYQxkVpSsehGu8FNGniRiHEyMeE46AUeBXtQWJRkEstZWi7jYF3Y",
  "key34": "5ePgiCaBhQUUHF4iLTDoPrAnNscGmj9q75Rz9LA5nLSZ3L8xvX8gvD71eVG2V4qZdmqB6kCduM5RyUyc6DFhHZbr",
  "key35": "4XVWJDmorQAYrzCQCtokEBk1EvNi5NXJXfnEi2GnxDmtFAhKSCRJ82CtnJse55ix7WS6KEwtxTvvfXoE4gvKxNJJ",
  "key36": "3rWositxJYzr7f2HobGVynWeFEfpoURJ2yVJrVsNHzYZnt8S2vNPrWK82kYLVx8u2wgE3w4J83xDWnLZc3BfFdMA",
  "key37": "5xpd2nqYn3kekgs7kk4C5sR3ijWMTyPJ74dLDbhK8CrMHAWBrijDuU54CdtNZggTxDk9Bv7ysVW2M1Ccm47T9vcM",
  "key38": "2b4fHqtaQw8dsfeJzREoZzJjwCxNCxhd7JR5NEReD4SC3Xz4sgewWppjVzZ4ZgET536LRgAAVYQWWgvLWUpj4QR4",
  "key39": "3x2FiUE7xZhAfUh8qYHpYw9zgsWPByRWsLoyADMTog89jvz7swMLqG5WFZqnkSF9uTgYyezT81gJ8P4z3UzJbXmB"
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
