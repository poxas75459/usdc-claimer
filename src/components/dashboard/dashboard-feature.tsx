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
    "3X6U5TUeErWYgADUEc1QBxRoaxggBxrD2wtCD9ReSydJXHeWiaxAJRzRz3VpDwrfUzAAvTQ78DAPsLZyhJz5DS1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fwcXyTcWWq58PrG8WDmsd4yZvKwWoQRF78xQMv2BsQoLsfxghERsrE9gz1qyUhXdEoPZkH11EG68gBnrmf74MB9",
  "key1": "5jLYmjmAysXddmx7hX3ujYUx89c6V4RLzLx3L1mSz2KLyai258RjCDbRZjTMZApouMWBpXs2PhS6YY9VQQTxjtcM",
  "key2": "4xg4pSYE1AoPaAjuGCsBYfgPypFnsbUTapg3JPmox9DnrtxnHpgyCQeNW61B9fjR9sJU2Fiw2cXtEpHH32MVLzxp",
  "key3": "3SfJqu8EtXFLNeExuMeU1X3E8vYbujpXWFF5uneVyCbusL8nMXwGcZCaJT5ASEu6QVuVP9GSeF62xfqXHvtWvZAr",
  "key4": "3k4h2qESP9R4mqmXBecW9Cqzj1XVSm4sD4832HM1VvaDhS9JtsWGSryucme9aY5uk65AThwpjAMh1PKh4oYPK1RB",
  "key5": "4vFQNHhAfVmT4iQ51YjYJKLZFNKjz75ifYdaAvjhTAYw8314EzGnimsg66sSf3bzbLUiWFrLyMHBXUFM4UZJKuTP",
  "key6": "4WYL41ixr5chmNtxV194Qtq7yvSqjfuqDFdEvsmsADrFoDhQEQjMZr3CB1L429SVJWbhP4TWcuosXUrohV7SLA3M",
  "key7": "126wEtJgnctE99kCNJp3azDGk9GDy6ShAprAQBccJkecez98Rg921s5ZA4AWBqPbapVqVLuSXbS1zBCEJWJfn9Et",
  "key8": "5ukcHiMqSi71UxMiriUYn5VazBMXaPc3ShMyFrhJ2ZD8bZFCuLCbJXAm984M9U77ZYpNumgjbKhh1unz2v84PzHh",
  "key9": "3GzJR1bnH9QWDfkg6rukwGVXnyLQEnpz75GA9LwXcfqG33ndqsuJYEY2KL6QBmqsYh69hpqxirV627WRY18Mjmiw",
  "key10": "trY8HpcmH25tDYvFQf9VcN8UAkdT1TnxCuxm9ouLFzYdS4Bf8NRn4jYSy2Q2g2d6bBwjfNvZ1XWKUSCKMtQxBY9",
  "key11": "4rB5rmjDXauCHV6KpgHpFL2aZDjk5u8MS5NmfYk4v59Nxw9uU2sUW9XcYfJPnnYQzCUrWMQPDVXvPkgfSsCjJ4ty",
  "key12": "3vLkBZoEoEPpaxAM94kbUBptZLjuVFvcYRcj9joLNkTjB8iRDiDLnH3Jokr5tHzbzEB3HX148nWuyyp47VgFzCYr",
  "key13": "23zuWobMsSQVSb9NeC4hkdZUSakPU3MHmq2832pFFBEePXs2f3RKV3GnF7YUj3qjNN22LQRktWYMRxdgZs1jRzvh",
  "key14": "565ajUGzo3sAXMDvJedvDTMbQomNTrT8D4yP1S82PVHKX636Y6urWqx2KDW3CocgMi54gbtS6VWM4hiqJpWNwoJw",
  "key15": "mneLZcwiBnBcZqMprdiZu4foQNahJ5WJX1qN6S3HbHVGJqrvy2SRKaWPDd5mY7MidXWKjdupfzUpMzr8ui7gyta",
  "key16": "xRTjsrou4Cem3rJoKwfBUKRRQK9twk5aohXo2G42fSQocbBRKN2YwxzGSfTXVPfi79V7LFVKvDq6VnxPiyMrWv9",
  "key17": "2jZcLx4557NPGNJphYmFhdZifZz8eGB3XvRSWGV7TfGjZB99wV4KiLQVDj1ToBe4277WsuioqGR2imaRca94Thdu",
  "key18": "4opbvZyRVVhzfkNJtdvMe5d89T5DSYptA6SGrwWhUnZdFWhi3AF4tfzpso3yE17d5C6TidWnJBc1NtmQFgx2CKFq",
  "key19": "3FGwLunM31PNPDERPtNg5sXPSVphAA4AdDzdMTMoPhvMek9Yw5Gy8B7L5RpvsKhAVPwVSpZiSY51GsFErD1rTH7G",
  "key20": "4u25zWUrvSHyFpSbcaekm9oRMhCv2AMv1eAF3SF1etsGp2ybpwhUpcozY777EGtuXzQHRWB1rcqsu72e4STFYyJB",
  "key21": "3FEc3VA5oVjZ5Krdhdoc2dRYHBfc4CnQyFxCPBjKjhSfpTp22fRHv2tmTkGifaaakhsxunmkuGse3dWPW1Zkn9ja",
  "key22": "AZ9m6MY4iyqTvrqFp5LJ1gua4LET8ehP32VmR9wbu8cuTyp7LxyNjRMk9QBo1LQC94EbhVPNUngQWmTP6MHTBq3",
  "key23": "41JXcVr5kaFRWvtx3A1A6WpnMnzLyREtjgh6sqWHeC5w5DubkYrqh6sccp7JBBSa7M3P2WBLJqHyY4CPkK93GD52",
  "key24": "5bxjWghuR16ksMN1UR11mHUTwLktqpU2B7gsCop8FmSUCSAnR7fPbsi3NHgDZGroARZVjHN69UF8tEHQckpXitAc",
  "key25": "22Xjc8CfRFJEY58BELcqQ5TB6YReV7LSfQ3Mpn3t6Qh4HWqyPVFE3e6sj8eQCJpeFzAa5MFZEfbqDQtZzWBAoqUV",
  "key26": "5RE3RCxtBGvBEij47CfVRzuBLe2MN4DV11dSUvZGMxSkMKkTAYgjX9KUoexZJhb3oexJzxpDNVGFAZirffH2Juk9",
  "key27": "3ExXdAy1TjvECL3ArX17bnZetP1nHsHtwS2MNz1FfsMqPsdC1cFCcANB6EesrGjfQ7PVeWF6C91fJFjjHSg4RQw2",
  "key28": "3zyMQrVy5x6Wj3QepzzpA9LnRoZHgKU19VopCTgEZTYZV5V2gTVg1yw2hhY3Pt3eCxBYQ3Nagx6VxcErdmi6mY8Y",
  "key29": "5yr8CeZQ3DZyf6i3nqRLcBLYCJZfNLeJXkb8fqL68Ab76FMkq3naBVSxhBDkomvfhqRaX95YQGb5aRu3oPowdBmb",
  "key30": "3tqJ6X9g6rnxf8w5YUG9LVvuE316rtkjZTX432CEhkZ7FxtVHSvNRwGsJCjkDvSb9p95zEP2TuX8karCqAhj6zue",
  "key31": "5pmhpjjjziEMQ5nLny39gMQKzW2UTjFSMXr5eH87SHd5vqBUR3aorZDxqAaxd7YYXc7J46vSLTZniqwnuWcK65iK",
  "key32": "2dbF9DRvA8SH1VD4vYsVw9aqLGyzBaB6zxxqCJVJrrK3gUiu35fc5gYhz8Wuici9cVMtST39rTkfchKrx5Du7WS",
  "key33": "3TRRNTiFy8rt1Cfy9SNLKUYnQLAmsZ5Pvqx79UTAgriHcjvS3mgtYid3uQFFnW1YMkDWAPUtNYWr7J4eTaWZJXL",
  "key34": "5SM6Cc1rJaL5crm5kTXc624cSUaWu2DgJthyCdicHi6GoNRXozYBYx3ePtRyKczRrzWhmKiJzoLUhxhdbmUDS6X8",
  "key35": "3vAsbTYdbkEm6YMvbKkByFrP5pFeyCVoQzRihboqtR7uCmVAN3VYLcgMqMrx1YuXNGnsLbpjJL6RhFXyVdruyE6X",
  "key36": "4fKYgwpWXdAozcHCYfqfj4ue4uuoyGyum4y9i2kCiHLFr5bzk2iExcX3rG36GTcFYgxgJRqJdvK7METdFYBVHS8c",
  "key37": "aRMmZVw4JhkisAiGTdxe79eZyJcrU8ZLor5MF1ssrBsEmqKJLin1RCvNe79PdUwTWDCEyLwQHf1dmwDkxQnUqFE",
  "key38": "4QL5V9oWjrn8qByvRMuyKRA9VHbS1ZjFGrDbFrfDe5eoQRLGsbEpDCq1EzKNexDTnjQhYTCGag426oaz3dtK5us5",
  "key39": "43aLGmNH6q13jfMAdV8dYiXQ1VhPnedjHkY72BmfH9shTz59f338yAQuV1Muu7rTUF4C6dMmHKxEdkiom9bhhTRr",
  "key40": "53oWJ4RNRRQxUBViuomUBYqhJKH9zBrZwcGXn6HQYs65N2rAZR4hTTDn7UMBCdGU4i8My6gbSAtz2nAHEs6hg6KA",
  "key41": "3HzGVRwAQvNWnHfZ4PgtVHsqjFMgDw8SCCqgegZ2yAxR5XuqExkremGmGBxdZMnGVdeMAXQm1eoRVmp9bAVdytJR",
  "key42": "2SfZbb8kb5YutdNpqQBn5STijjkgapLR8NnsVV6kzNVBAGznJPsecDUD7CtdFFE3h25ShQvrgBnihGKH7VYku7z8",
  "key43": "5eryjY7TBKkcNRGa4ejDHRipkyYCNkdyrnvq4eVNM73cXedZCSeXvoLFtg3P8ftemtxCNznp4ZkuN286w87HMxwV",
  "key44": "JTxcWXe5dkxCeo1cY8QeqbWjP7RXvkFXS7krePfqUSroqmDsPCoZJwzEju1XvLug8vF9aDCv3zSszcYg5EYtqtz",
  "key45": "5MEWGiyFNLzzef3Dop5bZtLdFk4k9wFg9akeVG4a15JqsgfHN4bkMQ99kK92wdLUkaKh3P2fQ2DTC2SDHZoKGDkp"
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
