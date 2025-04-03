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
    "3dDE44K2Fd3dxah2CyPaqrWjgMMgb1Y5JDTP9uVQ3yMcsABvcArhyzLBhBTZg7urze3ExnLuoLgZnrwinSNLM3nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BqtJeorfeK1R1nCnMhSr4rM5PHxBQ78A2QJ9h7ykrXNkBiqu8Pdsnn8kiZgyELG3gwaw8U8oMsL6Brmshz3gNvc",
  "key1": "5Hpeuy14BxvV1J18hmLarywE1ZrZD8dQ4XxbY6okoKxLEcfskbJfTezfiJkBkzgB1vyjMT932XrwNJLERLtNDHc2",
  "key2": "5N23FpQKoUizJRbwMC3ZCJXtaCKuziasjuph54WYPQJ78WGeK82GEn9k89T6zmLX44BsLMRiwwcrDKsKTz2y3CE5",
  "key3": "4AeKbGNTfrSnpX9qRms9Q82bxXfkjWt2ipqJXnNXoJXA7KbbkYMbeiQcZnSKrmpn9yEDKs5ughKvKTW5HTpFdxb1",
  "key4": "37ZBhVKWht3GEMMMxw9HLgufiJ7QpnDnaCqb5ERMEMfVpEh7uxgxRdz1ogCGA5HUoTbBTvzzAtNak5GNVTA4Y7Kn",
  "key5": "4Gocd2jXzBpgDwfQniv2zyoYNVGMSjbHvsGMg4YP7gARhWCL5LCrN5c8DxorTF2gajv5XyzZjRg1FqvWCf9vz5YR",
  "key6": "32xeAD48xHhfR9MpMB6AXqKKiGVizH5ZdXeKQybcSLw5Lfr7fa2Ssh11QKGTseZ1NqueudsAM1GnF81AhMnAavZE",
  "key7": "5PiUknF8eMfiFi1FZthioH7PNv93YocC1Ud72P1a5Ekc1rmMUVZDNN3JEry4KpRcSwGUF9Zj2KmW5zJWGDMgDUs6",
  "key8": "4nUWDih7e3pVUM4HXhiAJMbGN2jv9mdFxEAbuTnotRL3vzZQiBt9LH1exHfkd3vRgAPudcxjfeYhTYzrEbDmSVXo",
  "key9": "4jGtaHjGvYXW2AAcR76iwy7pR5Unt57XCmBhEuNNkCi5KcnfzfAQqCX6Jb5xVzD78J4WQdLWRsoHxpqFG12jaha9",
  "key10": "5Hg2TYLaw2GYazLB2MT9rivk7TkbyE3bFS1KRBSZMWjT3bimY85aeDn3JS3skiukWF9ZTXWesfXcuoWXMrV7az37",
  "key11": "7b7ZbUBm2grUkEj3DuesGkrBmMua8o8zAiYe6gKyzxbDziaeMPBgNiaAVBD3TCimTA81tPhmViywt6zCDjydMmk",
  "key12": "2J4WMAC9ZA248Pb2vFRdBREeKsmUHekPyQ5EShsiEK7AWJXK6qPV3d2oJxa66M6Jw4LHQjAzuAgcqHJ61hxEMC9p",
  "key13": "3VYCXP9qo355Azm2DcAiqrmDF5mWCsys56EK72mA5STK279LcYMbR7cpgGinDXwC7PqHpvkSmcxZpuJ1JUJtpSpe",
  "key14": "31ozz26hp94KaLsYqJCjUFEWEWeLamcwJjzMsvNYtsEHsvGLNc5Ddmd3hB6p23DZqtp3stR2RPHfSAXJmbxhD7HV",
  "key15": "pcMXGytPuyrNWiqrqAkCYtqzQnZGezSuWVScdWiEA2wmt2GfNU117K1y8U6SXZFDeW3jYTufWsneCMJ2NjSJWyJ",
  "key16": "4wY3vE2gBzh3PzPPWNZTHr9bsgDJU2QCECYs1Gx2W7K2VSzYbE6qSa25MvktVQtQ2LVYVGRofMLqWNgoxyvyLHLX",
  "key17": "2o8oEFcAuDZTz9gSanCPxzpTFLSFgjZCd4EGDnLYwZa6v5TDVcvnR35NznZ9s9jypCVnJtLmcYb3Z4AFVREfziCX",
  "key18": "5dQGtNd3a2YW6gwJWqTf4AijLHEkY3xDnv7D2Tnxge4D6BrYQ9GoW4GvyYDL8vEeakQURx9qUzaVjACdxy4w99he",
  "key19": "5XydpAPWJfH4CDnSq3rJtNKopvndoyDty6y5wi8ScFk8ShKftXFxokq2YDDyuYFUwVeSCPGjLJepgqkSjvsuTc5B",
  "key20": "4SqHiuVSRobC8yhw4RXo9dNFQaaq9cuRUQqF5YxNqYoTwDBi1eZUAwTBChEGU4C4qj73h5N4UAC9o1EgCtb9TBJb",
  "key21": "3ATbwb13R5XRKD2mTiAbFyAx1UY67U6yVWZy1vedoeFewD6inSaccmSQugLn4yJXTPeshfhmHbD55kPdu8FCtHZ9",
  "key22": "qz4TxzysPt7QU7hYtvsCgKEYzDqNdkbfFsoAGCXaniaH6jiLGgx7kt6ER9qWEbiuFxxZDHdE5kWpEX6BDJAQf8N",
  "key23": "2eYckXUxqRGoAdXy5MeDTNq6SscCHe9pF2MrsBmEEu8WMJ8i7ksV4VZHqqGSRmKU41hLsZ8chpfX22eAjK4U5u8",
  "key24": "3Vdp4rwcTX5WWTRTAkcPUC1y4vWvfGP53gYMYjoGiWJukj7SdhE1kp588DxQgYEXtNDMmm3jYgErxJfGgfa6p1EE",
  "key25": "ag9RitidWq3EtGF4WPxUwXWpXtzpZFk6qBfiff4UYZZRXcDFYVJPutnhWVSvFzdHQF7vnxMmn8zrHBbaLQQhupV",
  "key26": "4PSXj7yWAPPm31FJV4x6qFVr1KHFKam8bCSpQvU3xwHfR33b9fT5kUDMXpEuAv2CzQLp4WmAAwf246cUN3zMhQT7",
  "key27": "3PAUzgsoFYKUAWw1FsgWij1kt1ZuBiGXN69ak9jMg4TsSZVHk3TNVqVT39QvdF55xSfa695t67GT8gFc9EBUkczi",
  "key28": "3KZ3smhkH78znMbRoCWZ35FT2X1i545BJ5sK5Y3uNUwaHGcrBtKL7JYAchARzuJHKcH2cFR3A1Tnt3YMfDFKgTxG",
  "key29": "5J3QanGwWU99Axu91hSnRTDiorPHwgh2nUbbC1tfk6iZ4JWtYE5kNHjYxmqw4cCnejcSZQPWzyvxr6NunXVA7Vb5",
  "key30": "4MpipkvR4K9djrahrCf3aiDNou87xGvmzq7ny2doTqfUB596gRPMPFzhzYCKxBfxNeiVJqGjj6stAqxcXYPe2M1a",
  "key31": "5vr3tvaBoo6rXWXjY4tdgKrEayNk3NRRddDC8jMTL1wimw8Yme3dtVks5D3eUQJGe3Z6MrTaFxxfacxPWhMZverZ",
  "key32": "4LX3Yfx2kchtx4xCjm2La9z6oukpPvm3LYmrE9VQaMZ7upHEkzsBbn9skEm9boS6NCJVjBy931f4qBMUSRQWnBqj",
  "key33": "4TAZsPeop7vgm47DufoffsdrUZkh37zTDALnD9pyp6brZwLCTJmPgZxaY7wifPfKQ2E2SKjqodmLab5o7FQx99xb",
  "key34": "bsqi5bkzJb4T2FYEmuR8p6zDGtSvauH3TgNyjJBzGet4U12HyRUfYaVvckyAcvkM8DxNB6JknHn8HRydHbcye2G",
  "key35": "5o3dgLStJnt3ybQ65BK4wSTuURJYvMAt9TNkJrtdBBpSNKy5Y68YhKk4Z4awtvQUDBTjyfgH8Eimb1PZ5SgeKJNo",
  "key36": "3fbTwPvTCQnpyah1f21pwm9TfDBpRmnhnfJg99pRN22Ky755tpcwuAyVBs3cqXaqSja9oMLquL8WpHnrXB1T8LwS",
  "key37": "MwvUMKQNaA9NLEvx6HER7LDZaeEBV4RHG8VdXrb26ZTAnsSAMwZYDpMSW4pZ4ToNRonrxbzGYFXbhzpbYHJeFr1",
  "key38": "4Ht7kbXggTDFL8mYmCK8zCEECvdcAzMrP3LCut9fE9zuNjBk9QpFPnKjHESUzXfoUuCb4K81vRHDbmwVzuRyqL4n",
  "key39": "4DMAzDbYcLHh36TZNTKKYsUTQd4T6qCMPJdKaGChRTnEg2D3TGbiKjuUb7YgxES2ymEJdaXVczfVydmwFucPNK4g",
  "key40": "oCDxVx82Wn5FHgTRnSqPgXj6tBLVS5x7g6HZtGzXFJ77pDHz1JnpsJACXk4ek2gwfgLsghRRyRwkVLbw3b43obC",
  "key41": "4YNBPn3hyc3xz6xx5wMKnwoZWUu8Ld9YfhbmwtGkZqJ8yLBGzKWhPA969xxcLqsaEGL1Px6cJWqz8uM34UZYZyFN",
  "key42": "4xTxEfVsTDj69PXqAvzVHKm35FMpu3bCCVVswkXUSHsJTeqKytQqdmkdDna3d2TXnvCSdPyvXVntTGv3zmyNEAbq",
  "key43": "5TgTpnJSdTNoz6ser5Z5eerxS7d79Dt1GiEYVRcJ44w5cFBPX993Rkod87J6zkMxzLQnDTJhuUS8RavGv8inmZUH",
  "key44": "ngADjqBPMoECA2U4WcA99C84z8cGiaiN9fCgmW2Ypd3Euc9FU7V4QwuNtBZAWDABXiRXMy9XqQWRJZfsunDDH55",
  "key45": "Qmj8ik2iPWGMMTdEEP5mazQWygozGJheXLgfgFD2ByywWzQbhbNpHF5pJ6weNtkt16fqjdRaTNtnSgfg7FTpqGC",
  "key46": "4w5Qrk8ztjZQp5sNQ9MFEtMMQFHzPo7ZBnQYatu7KAZpW2DuiVmLdfZSxq44553ocnzAZ4SK5yd1KC1pbtz2SUZe"
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
