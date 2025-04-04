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
    "3jX9AFS47WU7tKY5f4gQcGNsFr2CX7kzfLQxLzuRXWq5bgpgoCg2nLtqx4wQGGw3mvGyiGHFQpGQqLanebPZLjhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YGJmUx2aKTLd7AjH4p9tYSQG4Mr5pxo4yBuopT4vBMyne3FhDNEkMgWn5K49PWbKZbxLgKASX8bCjG4Ld7RTCAQ",
  "key1": "4E4DbZe5XoxnMk4kzL9psmi9KHTQkD3u1D42uz3NqEURUc53E4yd789rbwyhXEnV1r4LJPADjwegv5DF1sk2ZAir",
  "key2": "4jNw8eAvFCsD41uqS3U3gV1XR5BskMrHgXJKrN5M7iezivATLMWEQGVfNhA9f94eUVB8Ujmi6Q8KSYS3aixjDTme",
  "key3": "2vajd1Y6kDaNLsbb6beVSp9Yp46pKqN9NCZoZdnJuUvfAb8Go7SzT23RsR1SPJBVf1xJiYCPiX9mm2WP94saCwLQ",
  "key4": "5w9FEPgtp6nyxzToetngnbpHmaetEwc6MMn1wq1bEoGFVboaaL3W18TURapkGxZAXEHj1Kt23E8KK3vLKYmpvCKi",
  "key5": "3k2EjkcMFwiUpVLcWLnVnvprrxsWGMTpjnHsi1jz1udkquiQWzoGpRhoWaE5PYzzHr327noMv1BxhCK1TJdZDLyf",
  "key6": "5xLZTPy8v9h4NtbJBSnstZDQ2ngvjHd8pJM9p5px2qssLb7XKu9fhU9eQGrrbU7ByzHokYkWcFrbzthjtRPa4mkT",
  "key7": "23X35Z5tcvoDMH5za9LEFoqAfFpYqjFnv99JEsz2JL8sJNCKbL9SMNs9vxHWYH9yVBZ6g1sX44BeW11qWWA31ofd",
  "key8": "2wQ4EQYwyzUzDgZGDGmvuqZ3KyJHQQ3nAQ4p5W2DtHaeM1zriCRpZgUBC5CXfNnX8BcLryEQgjdJsrvCqLW6hnD6",
  "key9": "3akkWQEg5sHQFNVBw7Eba8B1JCxABP16s6NVUzTBsH2nuz8VQhF63fLewUACRsRqqXKcDufA3uDWTrvGbgQvCCYR",
  "key10": "4pJtPbnYCc4wcbSbd9hh7CSpFfEUjo2m3zvAbtMMRFXBJdn3RidqM3wyJYio6mNu1BxEkTExg9xjuUw9mKmcvY2B",
  "key11": "5Efr59HdQrb26hjGh5QDSn3JnoMf9WeWRraDGxKWDPaSWMFPj7Q37WrmMZ3Egssg7pH86EFbhBoceHXJ2qZDiHFG",
  "key12": "29j1ieXLYyLAET5pfpTVjdYaJmrgT1GCq45hs79RmxmZba6EpTMUz5koVqwzMXvo6MQtPa1YrSyYfGKy3BJWWf9f",
  "key13": "42egmmYXhzqvtdQfkSHh6LEfyyLbmV81u2y9oRJWLZUNtGcJoahczhjsbj6DqAwYxUWaDux4VJ8VJ85CpiqpbHsB",
  "key14": "4BdMqEZyttmFkhsD97XeJ3bTPTf9BtZRdKohUUT41i5bC1nEexPG14XZYXvp3ydauSsytJKP1BbhnwUpoeuVQ2UU",
  "key15": "2U1BeasbcSynf3TBg6GU596r6Ri6mkULnEhdYNPiwJUhekXbyGMES5TqkuYdWxsAMuPiSZrT3xJtgmkFwxoUKnM5",
  "key16": "2Avn67Fq37jWA9K4Gy9fDVdU76vdQe2fjNg9d7TiDCmpwpBerVsFerYgDuWbvbDmWsaTeRsP1YjSDZkwkSuEVTNn",
  "key17": "5CfmN7jefzhKwejFDwWuCgsbCmjWwCmGHTV5foZBTLmFeBexbxt64t6wmdFS3vuR2igXKhAspb4toUQL8mTgzVcN",
  "key18": "4P8ZgktKw5eXRx351NK6yCKdeyn6xkDGtNUfwSgnh2p2a7qUEMZgL8CaYPoHxBCX7Ag55DCQDZsQxtjVZA4ZZZCE",
  "key19": "4qQ6ZQxi7tZkQyTSKWUPsB3ZVZGftdZT2SzJJTULvUN9dYqo7jUsb9gQrMEiATo82w38c96SoSfgAsufdnFZjpLr",
  "key20": "AiQ7vSKyjYZJ4n4JwWbdWt2G6Tr9vpp1P8G7x1cwz4esoj4Q7JE5DcCDRjx2fu2gFfDPtLDpCC5ZPiejdhUmGst",
  "key21": "3EdRMEnBNLyqyp1qJY9BouSUzTu8dqCGDjCDPg9VxWVztCwtSKg2YcqwWpsaAYEc2awG1rdZnjZg8PH5CA6bjnK9",
  "key22": "j39z3KHnmX3ivGyCovSahLCr9cbB6kWRkdQURNpqNoRv2CASYBueEVt1CpRmwTNNNhJVCZAtjeYAGdX429vWZwu",
  "key23": "5FEf72hpxVopXWuc9S4gopv46Yis5B9yxDPGJ6ZC9zyavFvDRjF27qGRN1xX2GSCu2CpiC4Wnou15WxrgL9AsZ1W",
  "key24": "4DdurUAruY43BVYhwCPwH3BuSnDihxzhswpGpVeFJTUXfoc4JkrxYzTnCREvi1A6iLqf2145GRawCLbpAyCixA35",
  "key25": "5dZw8pTvNb13jGBGmFrKEdXRavRq93GJhLPYBayoHyvFcud2MZyx6ahbR4XdZdvYfXXFdWH5uakXgerrbRGBF6Qc",
  "key26": "3wnRrPi2a7fEwfnopzeeifaBgGMxv7tsz353DPAw2mPN2iY79oFdFHsEcVGRZL6UTncQw4eGAzJXyohqrZxDge58",
  "key27": "257sLTBboGzqgzBmygj9HpFj8GyksSGugYDEB3tQDBAbnVtTS5J8kmQHsAGfN1fGRQpo4iLveVYgsUqDWFptH88Q",
  "key28": "2sE8XgjRemQuPdcDzkJUyhLdNogmhTUSvtc2CQux4Yx7ktAmMMgpot4tA7584729SC6fuXdGEYw8TqGfaKoC8Syq",
  "key29": "4zRo93FfmC7qSqqdxf8ojqeW9QW2kG3vdrRiEAditxhz7nd3AWetgjWvfo3gLtRBtG2Lm6A6NZ5xj3YwDP1awupv",
  "key30": "3CXm3DFRFakFUwmCbgVTPQguBvhcrgfFnLhJZu3NmgGMo3eHoRXAK2wDAyj6KJ2huc8kbD2EuFhmcEPPBrv6kCjN",
  "key31": "3MP7XKM2N2EnE3MAQjkVGZXsCX8Tbnvydhx4GA6ZLZkEN1Xx329h71pfjzGUZqiswUTULRFwFMm4BwXJ8G6zJGVD",
  "key32": "3quqjwX1Jua5cgNykkAEv3tjYGHudTFApD9YXQST9qZqY9yndC7ZQkRdPoyBSLUQRyFPTmDHYeqYuYQwUxzDu31C",
  "key33": "5iVZ2hXD4ZuiTYXhwUeJZPG5SRPLF7MxLsG7JspQgpryRGgEPAsakKnfxYbwscXH4gWuPFpny3bw8xjC8NV2Gi3o",
  "key34": "3JSFMyEkVonWkiF6zy9JAHUPtL9euxERYLCzXoTYgZ3haSzY2WAeceppwVLiZkA1Uux3iK8Yt8gNgYKg1xGCWvSt",
  "key35": "4EFh75rvmqn95eRsRonbMHZdEtfJTG38TG8cv11qgvqNzSPvtGC5Fg8jQYf7DqUtSTwpm4JArkNwPqb7fb4cBwar",
  "key36": "434QBFgcKf1QVa8CswY7wCeM1uTfSiZ4iP3VPSVpJNSrSPEqM3EfqH1terW3Z49oEzDv221iFjPqP2f4WpiFBnAe",
  "key37": "3VeJp4qbjSJPUotBn87H3AW4xQooVNN3GwEgHFpgCqgmXehrR3vLZb5pyW5NqEw8pJdv3kLZtgJbihvB3ePASao9",
  "key38": "inguDBMkb1tE3Zz9Hda9opUvpd1FQbsk1nfciDS6eX2GvhzSAbP2Q2BeGZ5i4Ee5siWxExq58CrmJLpbciYYnfy"
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
