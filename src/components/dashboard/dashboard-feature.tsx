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
    "4BL1ZiQutdQGY46ybFNbSXNrNs2rGZGV5jg5t2WrJZu4uDMZWcpnJnVAyc6jUdtDkuXe6gsywyN5fw3HivwbsCH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jDebfF8sYH8Kyb43yAwESgWERRfELhnMmAZ3qbmXxFbySHbjdYDs1AS9UTyTmBmtxJHUv4CMgo3J5ksbwupWi4o",
  "key1": "2sgceNGbLDEZh2MqqsQzr5TXxmUjwj1FgvwzgrfEK6Jop6RtoRGiMZj2sifjjhTJMxuXb7djRGoh1KfpQ6ZHrRom",
  "key2": "hBE2ozFR5i25Q4DensXPPZhypgMWkhSU2F6mUPVDZus4YJAcFx6UTpT6YWpAkrWyScjHL7VbkMTyLCtEGovZzTP",
  "key3": "4UxorJZR47HM32LrmUJRdTFmQmc8TaQTcrt8Txsgdjt7cJZRPkiuxD4QYBXjoM9pYzoSFgTMS9bdvf8Dpeasq9of",
  "key4": "237upPBnUh114t6VtToJUqAPg9rTkvp3VezbjeRtxeSANyJWV1TMw7WM2p1iMASurqD27euVEhU5SwsP6QcigsCj",
  "key5": "gt2P9deFFXTwm8VBRafN5Li3guesteyFNZT3BQpNo47q2ChKjKPbn8J1wxbKm6pSGDXDcRAYBwKBbp5bLeFJPLn",
  "key6": "2C3yGd25vdpazLpGhftDYdoVYKtY3tP3UfKjLgLsFH6mpn6F5kZxqErwU7ZNpMAQT2CxpsShXhigfaxky2mjkDZ8",
  "key7": "5zxYP87hX8PpqpTyPTFDtpoevgwUhLRWK4C9rAB4T889LgG1PhAdMisWrYdR1q2gu49h7zbqF54EUGQ2g7Tut9tC",
  "key8": "5cj8KaGyEW26x9YbVRXaJn17cgaMBsdVnuFWvbYNa5cxhNwiWDPizkerz6AmVEdFQ3nMw7fhpxQgnoLSkbfjwXAx",
  "key9": "28B6gujHtMkY7hCwZyLrPXxs3Cf83qAz1yxaDZomC8f2GVcAwamXxESg1YVjjaQRxm1zTukGV8Ko8nh96HmQpYdq",
  "key10": "2Vx336cjxT4SZZhbaFAQvDUwTwMFFwTMa7NUdYXrPdT8d2xQtahspJN9bYtayeChoutn4sRWZKeaWxAFz2FfnDfB",
  "key11": "2k9v4EkrHmEThEprMszz7JMUGDbfaqZHeYS1iMapWAL5FtCmdySBQj8jWE9hkMEKGv7mEq7f7Cf8iWXutMZTfh5d",
  "key12": "2VxzQt79MbTEiSnhMJtdKnmGhM3nSxSB5d2EkgXAAfssUpBpFjE2esM9ASEiiz6foVH4goRJYf5m3gDA8pQzYUmS",
  "key13": "21uLMKLqFP3enxMHK7w3LGepxSpq53v9rygXsVehJ6u9LJcPJ3NsNAXSEMv5on6SWVKtJVyKowQVvSg9sHmvcuHq",
  "key14": "3uV1TFtgv5Bu5FKjZhYkdDYfR8eA14z8U94w7ox6xiP9UJ2uku4JbNdY1ZS9zbjynRdkFdHeijWvttCCu1i9rKKv",
  "key15": "3c4gSZmRZF6W5GrJVViMRZvnXiE7ukwwwF5uqB6S6v2h48fzdWNsd4GVoNpLChCwCKRWU8Krzs15DWcXjVKoW4om",
  "key16": "4YY92VD3zHL7kx7w3UeAxyuwmRidBaKBwBiVEYmNJzsPgvVgwv5K4VPh1KKiG6ydHoerAj7aPXX3fJQRbZW94WwJ",
  "key17": "5Ay8oiNwXim8WRRRdfxE4nDNTqgsY8XkLYibqqpnfuVeWi2uNpMR6pFWjwtmz9M76751HaLXMazbjkmGLdVfgdxi",
  "key18": "3qMqmk4aycX3Upa65e4wjRKpyNbC15GFz832iCVm6gHLF1EBjP2jVe1pJcUqmLriknhyZk8fQ7zjUEhCSgspV7sx",
  "key19": "3vzBPHucCfFekz1RDuZUKPeXHvNDQUjMhXKL5kitpZYZPSNtoesW68HspRXqknVGyo3XiKnQajiEXcuPaFTaVFro",
  "key20": "3h227SvhMJK3g6zhJdFGZQc8z7P2hkfESF8AEcXb7XWdpbAAw6gQ8hCPJqJQY1FAEjN1i73PGTpFifafgfQE8dtS",
  "key21": "6qFrcxPXKsUhRGu14jEmKmrjWzdjMZCa5iVwHJQa5G8jXWNYKuvChsgPXrf5ENKxHF82eBwuQcpo5Q1vT6X92xy",
  "key22": "2YscFfKUxB5CKZeAyqxWtn4pdvLhKqtPTN6JyJnf2DMXP7mYCfHETzpKt46faTodSbLugiDVUj2hwPCTaiRSdvRQ",
  "key23": "3Ge48tbBo9LamBHRa1LGYEEAt6bHSfNvwh1YowGBzR7BNm5RDu4pzbe52wNRSu7k4xN692rMnyLHLR4bVw48Wiuq",
  "key24": "3MgEp2DphdihuP5yxojzyY82Hc1pfr6cyitaUSXhfyr5rZzPk3o1MxkYAvv9AnCmCKuwuwg5ZXoxjRXN4zT5meQs",
  "key25": "3PwsepkvHW9pDtPcFKhu6xkujatrZnyyZAAGJSBzS4Q5E8WtWHQT8JozLsztHumQq13AHsWDGX5yX4T9AzFGviNn",
  "key26": "335YvzdWhWcWXUysfQqV2K4vSg8SXYpxxZG6AK5vvJLX52wa68zD4ocSakw2kccvTnaYfe6gKdAwu33P3zRs3vno",
  "key27": "24KEgLF6fvgfzNjjCMTyvHcjuguMG9rKuZYxLL7miq847LP11j6Yrc9RVooSpzUyiurDgGfF3RDP7LKwQauMMVDd",
  "key28": "3o6zZSFgQV2stdeQPAZzK9xmJoVn9bY2gmoa1Jqdvs68cZ4HPzFZiHvhieGfVvs9DUossrnUJ7YvNTPyKFWnAq69",
  "key29": "5rA9ZCVJdfNf5xmLshR71yeo2Pz9rdRCcWZVG9pM8iiXgefCmwwRMpaFkNKheiySepqpzR7F4k2v8ZHRyzaZhsYV",
  "key30": "3xqKuUZWxJn6Jk6QmV1UT16QTJuWf15VN55v5F2AMpTpVRUZLpnJoHvgrqKuTxj71B8m6r5xtpvwTxnVkoZiGKnU",
  "key31": "66QwmRD5jjfVPcxoJzotSJnwsbMpmJFs8i4cftA25U4pvHvhPEbsBrCJgJAzKTqbuqjBnDaWnNv122FRzts3o9Rb",
  "key32": "5dXJNVahzjK71gT49kb6SiA8jt9kf9xpaLXV4wBwNAm1LxC48Rty7RgWjZcxxDpo23KihM73vKgtDQExvPWExSY9",
  "key33": "4HWPWa5qcb8BBQWUDJ1ynoYk21dmNWbnE8ZEjRX1fFVf75aHfcERmptT8CmDhGYhAJoXhDvVaXgFjhoTRtsB9gLY",
  "key34": "3ACFn5HLqp9XjCr7kareAemyPXHQpXqhBkifTEDprLaqBFa8aKY6GxR7fnrmxuuMQxYJgZPAqKD3QfMREA9PYxeM",
  "key35": "2ppPovtroH56usCoGDpNujDqey5yiX4V7nFxvNeFYjiJpeWow1aUSdt2Ap2ZavCvCkHaafemeazSA4BNDiPwKkWp",
  "key36": "2oF69pFkeGrGpPTKYbBpVq7nAaukb9eAErDXXo4pCpBXDj46mEXnU43kfPFDpnpTNQTxouD3nT2XMmdhSB2VihUp",
  "key37": "2mHYQxpjm5uSyH4WGgfSo3PBAcVzWLvaNgVqxJC9F8kNmkL4e4tSmNp9FqebsBB7tNYL3QaVn5ZEZPQ4BfqMmi5B",
  "key38": "4bkTeeQuENB8SPrcz5rUJQ18yEanrTV21XkWftEC72jeh3VXrq69q8m57yS9vLQ2UXTfDH6b2fe713J6w91THLch",
  "key39": "5QmguCCSzS8b8XRU1SJNmDNxgiSs4s9vz9vRgdNJuQwdX6ZPzoP4TPQ9FyygUc36ZZFf4nGyorMMr6aZBy5F84U9"
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
