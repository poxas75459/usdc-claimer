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
    "2cH8tvuH99Qn8je5KKi7enDak8BEuj5wj1fEdrk8V2479BsWEKkJ8Hu6wKnxJyYvZmMHhcD7wZDComjUpPXZ226z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64saxbbeCG4hgAgA7xS6VCCrYr5DKVSeXbfKCWzLToH73xvibovrpS3X8rt26W6WZ62UgUAMrMyPjMUvioXDGthX",
  "key1": "5Fg379TnPYeHHnvDz3k3S65GMuS15XB5JdVmVDycyr8uXdHXYQFv4WsSJNeJVULNvKeME7qE9g9zZf5dcU93Ny53",
  "key2": "4hyd5wDHmASe8DL6SFuFM6xxj5jEK4228FkqAVbttgvxRBsoUzNBrokWN9c6TqJkaTUxqxQVRQNmNhDYnmyKrUSZ",
  "key3": "3LmyBviteJ1MdtPTaDt3dowtrCrzXJVem5xLUTmA6aTWY2hXpYwqQkyHrgfzJqdJtBqmsfCdo49uKQJE9McmuFPa",
  "key4": "t4u2W5FqrR7HqbJLiWeBRorGKnaSBCxow7rri18hRZr7JidVvpuxtP1EXeyGGRrdYovjhQQsj4CqKFWAifsj5uV",
  "key5": "5AwBAHTHtEN94aQmNmAKWZXywECMy4XSV57gSm1ncNLxDegKvahNFis1yiqnZyd1hG8kGfmtHRRNsR1M8So3nQJo",
  "key6": "53FHbxA2E9jo7bQZ6mUTNBT38P27TAm2hBJhh42BUmNqzTYPuG6uiriCA7LJyX83sztwQTVAU3QLTukNdop7j5wW",
  "key7": "24u5tqS5LeY4CN3PVvXhZsdTn6RiLFUhiiwowrT9p5RhTukQpjN6DfmKjBEvPwN1MCeRJrU7VV4wCnosgoYcjEQK",
  "key8": "4mn7geo2C2aHL1heRr31wcET4jRasCL6VtmtipzaxrA5jq2ex4SPXXwqZyhP8AfEjjyDJit85gU7msVqc8NicD1b",
  "key9": "6qJnvWethJpJjHSLhd7Qve9jPHVHBt1a1ATXyg9SGmwrJD6nHLGtBrpgz8Uj8TSqMUCMa6H3XoA2VP2VGWJQe1H",
  "key10": "vaNqn1eutWzPhjjb5sGbpemebSiDedHPiiYP7c7KSag2S3jAimCZv95F8WUuKJCiHrdWxa9hbL7JiJpVSDqnGGz",
  "key11": "55w9itmfJGDyccG8uzLKWphJ4tFad9dE1gTK3ZVqCB6iorP9PttsXdaRDt5CSSKN5UX7VHFCdoJCscKQ3z63Q4iR",
  "key12": "3bZv4tvW5ytwzj6TCoz5DfFg27kCgSYy4jVXcYpAowDFGw6KAzzw9HTViEAnEcjz5j7jvjUdYSKptigDMyR2JfaU",
  "key13": "Fdj2suUnyG7K2uxuDeG3KK7Ms986LcbfwFRr52KtrwDnBCDeR5BFikcFS4p1s4TuCzhAptkb2YZNCQVRvZbtUWX",
  "key14": "4iUfPyZS3g31PwRA8vuYiE9JaZtfsymKqmbp8qHbV98cddVKxB8LcFiti9xxJL6cFh8r73rGRQ7R5Podu1qnSHS9",
  "key15": "2cGDQhsxkdQFTqrVpdjYt7rHmoyWiB8f9yQYNaKZRkkdTGTf5jL8L3txPuZ3iSEr1oQkz1GFe9KsYxP7saHdwxft",
  "key16": "4unyfPHe3XU4KTJw9tAewqz6mfRLLAeWfxJA5fpEnxfUeyFUcmiYkPstV2WQ6ysQU49pgTX8fggt232r5D5UEY6v",
  "key17": "CREUXHFG6FgifASj41EdtXBpSxHvQijsvBmkJELS7EBbNBrypLd75XRE8HnWVt7rV4fqtKwJ27YYTCHfmo9jYeL",
  "key18": "2t1YAMEMWDuBUSRUCEsCqjNUPiAC5EiVycCfafXkBeCaBwpUC4aNEpwEaUJU8XGR4jc43CXvV9REjuhBBHuuvLWi",
  "key19": "83KoAN2dhr8prXUFQS2AefaPA2Q3YUb3JZFWu7xzmRSUeYNv6Sa7VATq8b1MuYAJ7RZSYC5RXfb3ypYKHGHfxuD",
  "key20": "4NEFggWN9tMpYDcavW4Bezdfi118GwTDtDY3Y1amoWzxa3DJPzdZStoiFWg3fswNs4B3vgjDGukadmpUV17vKSt6",
  "key21": "3oQuTnm4DpL2qjJHNALjehbx6UHh5vQ6EKjMs3dD11UNhsKVrx2rn367Rvx3GAowQPTU8dByfRxS6NPqxZ9mF324",
  "key22": "5th2nwx1MhrfCgnfh73NdePVGVihxxyUzgEaBvmUVDPB8utSjKpvRQ8tFN3i5JUdiNnf5BBmpQ89mqM5uiDSfnRa",
  "key23": "4KiUJeUsB6FfCzodjZkJEbPRPokKSKZgcBvNXKdHFGXE4xkLX2Wa7gnmxqZAc1xNUxwSoB93uptitrEFEJSGLPQZ",
  "key24": "vfhEa4wAooH6RQWFEynH1RYfAoqpBwPXjm9SjJLL8kxaVRAfGknPp9nnNpga2WudcHJ955NTZkdghLfR5JX4pEE",
  "key25": "4S5mwjfMWVKpFd7LwLQL4xiTN7CBA9bHujZmgV16EeD8dkZsbWmFL2ZD9WJP49rnSdQCbV3XD6ob3HZD7UkNAcnw",
  "key26": "2Lxf1oNiSL4wr3oPNWXYSJzm9yt8n2SJvDRWteTrBcqdYmJL1FuSU2hhza6tUR7dNaTWehSdo2cRc6g4GqcVpdni",
  "key27": "3Zab9ppv6Wu7eBNi63zKVQHo4moK4dwBLJ2TA2PKjsJooyV2Cp4JEBVPPajEtBAtzpZcmTTV1i3AvHwnpNoMKM9L",
  "key28": "m1csD5KmtdnSj3733nwL7wPPHTbaLfMUwF3WnCfeUGydsQzAwBqWDWQzRdGDyyAipDSctE9nFJW1QCUgxqoqRmz",
  "key29": "JhuxfF8a539KF2KYnqu6ZAgmpU6tJEeKrqAYCDXKgWNdm3uKcARFigwjgerFJG8Wb2SXTQr7fh7nERGVScRqNjn",
  "key30": "wjLmt5LM6EmabfbX1arTkuSWHQs9Yk2qsDjpHdpDhgdzDAiMm7bzVfr1yUZofJD9PokmfhY2wr7koQR3ghPhstj",
  "key31": "28LQWyKQ5XczmbNDgPpuZUGMQK5P5uibNf56pNK5kGBFGbZRVuGCC4KFD7Jh76MxwHmiKfR4LWcwA1huHg4JzLSK",
  "key32": "23kERTTDCHdEQfdCU15ZEtejF7USSXwCtbVWieHXK815ExmXfs19bS3hHfT84cLJ41yn3F52HAtTpRFnsVQK9gCF",
  "key33": "4xTeksJHXfM1CCY5cSuwFpyh7mksRpCU4HPGHVBH8gD7Jmv47rVSdV2JjbCUjCh9FmSmCKq922ZXivAywX1cHiEZ",
  "key34": "7qJYHig1hDo8NiVWQucoB4tXyfRoS5fun6rUDPZqPmwztu4RpzXeWf2rRBCnjwdJX1CGswmoVfHivJwwiHidYqj",
  "key35": "5ZMwda1i8v21UZzWdFxPoAEMqgBcAH9SdcuKS85nPGFsVATyig7f6ZurUHzNofbDUzYejZwUWoUUhtwCbpbfpSyb",
  "key36": "3xbLjewQzwU6kPhbJx6iNaT4yT2aGMWEsvNawR7RA1BBzWFCRMk19e33c9WzDvYFywtKTUwFyM1ZPTre7YJBfazW",
  "key37": "CDVnWo3jM2qAeQbR5ykWJ3K7co65g3EmiKYVB3m776rBbiw59fzgGyrb1KWhiWSGQFCnp3Mzub3DNZFxd6TrdBN",
  "key38": "2yLmWrrsH9kPRhnqE91Etwp48dgM88vPDbXQ3xPUYFFLqkYdRiwXEbPNgqKdXGkbJi9UgLyUbafQYV1UQWmjxSmZ",
  "key39": "4qmCYFqWJFa93ZrDNGjNbVCTUVaJSDV2BbUg3ge2vcjo4MmRUccSFRXVD76P96oLrYBg74RLaWYfwtP1zofm5bLK",
  "key40": "4XzFmy3383BtuHjnbggbXsLnvMB8bVxMfqqVdSPeAwqQdpYdaPGkY97vbYAjjuZoNGCYhH4HsKnYa1QZDBnR2VT2",
  "key41": "4Um9kr4Ld9829bAAsFhTtpKPJBbdWn6PNPKLViwG6Pjk7jQj9tzt9eRspsiUjjU9cnXgsezQnJQmsD7kYFhSp5q9"
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
