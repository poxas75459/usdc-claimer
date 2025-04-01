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
    "2762qytT4FTtyFS8QZzN1SW6rEuT9GQY6rHDA46eDy5cfJhj5GiS9sMDPVp11USMsxtqafSa5fzDHGRmVyDphBxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3GBcWj8fS7GTBUkTAWiXCUKPqdGJSwYPmts3FhhC4YYjCfugZzy3SPUudp2yJk6LrxRkhGt6GS5BWaWYNReZrq",
  "key1": "oCPRk1JXwMDNN3XF8hjdBnQb6zsYnK79CPjFyc6ZVy2imZfhQXShitD8TYZeGL5PBbcPM21ki3dBU4XR7zXFRmf",
  "key2": "2kSjmPm7ppR1TbuKtM2c17CgtYpi4rMpaLaH34fRP5eZZiCVYstM97X5HgBrAi9BaQutARQYwAEEJ4K1NwDLpugj",
  "key3": "34NVi6eBp2JmTtb78bxg5qUFArS8vvjHYX6GPyJKQUoqffVuLBFTrRS5cQgkwjtJ9dHcyGhRdiAbpjBwNAnjy2Dd",
  "key4": "3LsAvn4qnexrSxx4cb7jjywB2aMMP9sgQ951x5t9LsHrBcb8VB6pKGToMUFceVKwLWbuNPKXGndL3UdqdSnAvsXS",
  "key5": "5dQsSuwpoLQiAih4V4fQ5hMmKurRx4zrkegBQUWt8tYyQ4sW4QE8usMUypitR8WxdR1fvqwmrnyhMECGYcgmVpBi",
  "key6": "Em5rgJhCLd3FDCqb8hGq8XMipv1seT7u2Hb1X6ARN3Jkdji4VRBFwzQeXBXPkyDCMSkaFDdHWfnsNH9r51thvpC",
  "key7": "4MQKQ1Puv3iQSsRk1skmqUHBsrHm3vd3zdjvuFM6X4QnuQiLerWvkLDKsDvy1cZAzh8S3n71D6PXpAQABLuhDQHZ",
  "key8": "Zd8s8LMqUMDarDQHmvF7nSNPPXzTVXrRABGhqgQLnYZ5n7VyR8VYEW19rUQ2v4DEk3iegqe1XRDQzeamWZeztue",
  "key9": "4C95kJBdL38rRqzGyL2DEcXUhPMdNZ9QDGNxbauv98jrveYdS45n7FAquua2seYoQhDFgbvxHEVyHZorfKuoJKag",
  "key10": "4WzYRYD3E2mdNJZSWbydrmp4LYjrkxcTxw2ZMwWrxtVVdaoRPguQUwqDdpdovCN7HTXDw15RuPww7cSTiFgZ8zwE",
  "key11": "5H9Aufciz1jyJcmrYrWknt2Cjrg9SLKdnjKR3KP8vddLuep8szRDAdkKks1WjVNjSgLF42z6M7Yx9e9upJES8rB6",
  "key12": "61UsZa5TLspV8my6GeaQ3tYUU8wJYr8zwMtEy5ueHxpzzZS7RbNCzyLs8UY8Z8qmQPt4NeEnL8v5ZvXGXmaKnKTj",
  "key13": "ugZEazn3Tt7bycsa2gVRD5ZvfvYEGhzStQJEq4p41dj8vkiF3GE46T1frw4HrgkZDgSNjH1YRLZ2MQuxPSZ3cf7",
  "key14": "DqNYvKHzApvSpN2yeja6bDV1p9RcsBP2ZiAjiWAo2ssEAsPRytCSPQhotfDiXXtL1G4i2ugNP4rPgSQUyHskemu",
  "key15": "5kCf9FTbzK32JxWvsvBJXa75mHQzgFjC9Y6k1MCYocpeqihU2vyDHpR95wBnEad8wP4JALD2L5mBcNY99br6SaH9",
  "key16": "pu1eigEzYUxWgk8gGPDCJP6F4aWJ6TuYcGKnb8Ee7ic8DERQgQKS2FZUmYaxPmtveiwGL6UnMhjqkp2iSQTF4cm",
  "key17": "22uuC7igf64wVDMfEQaBiAyvooFsZng7Wc8KBgv3cmMzp9LMhykhvVjyTesH84UE4wKkNJBXD8Po1o2q3uRspVks",
  "key18": "Esbb9idxQqsYaws7DRKovBwhJJnVMT5fWcUufToMKshWMEiKtLroBzf4Nihb3MYKwGjhEbpcrjNQB5C8UKBWBBa",
  "key19": "2j54cRgtXNbwH3hqRcdx51ugZG2s8TqVVQDNecLERWkqXhxa7mPVNRUYprBJ16ns2btTj4xKpEXUtBYNyyypPTM4",
  "key20": "3gfcg2Y2Bx3cxGYnPqT7Ta6LcuYbUrbYhhTdoSimM4c5U1DYvKnXg5ouY42W4Qz79YGMnep9ixkanm1ef3VCNpqw",
  "key21": "3xQDZX7KUh72mHQKNj2ZRytGsjR4NTBnMecFuSPARdQ2aSfQLabQ7nJ24qGHJufE9mpGKVKQdX6f9A5r29orDCtq",
  "key22": "2BhpaFGSpo8zK1A4uPdh2t8xxLoa9JCynr6vCT1rSgLXyZAek5UTWw4YNhWDZCtd6NdbPD8j6mh2MQuMN9uGYQCT",
  "key23": "5LPPeetCXjcBMMuJaqasZagzkGYjndw69pDoTovSG29brmHdXxkqZV7DQGrcx8f98KmNRfpY9v8vi9tq2YBzpdkF",
  "key24": "46jk7FbWkqK7mWkXgbvF18fy5hJwEnfRaXrLWbRBjkXjh66Q3FVhZYSqPXvYAzQEUNHhsoQMwYBpykdT9mvmuHSg",
  "key25": "oWS3ctRDxjRLkpL35vfX7eqmDhhP1aoGqPbgjVtMnAz7UnFaPCR4WwJii73Yopb8FhdSMZZSguFrREePhf4idG7",
  "key26": "62HV847yYBYeUpYTMZhvPc2oAoqNqowJPkqABR1obzsrTaJrnWuPU8WtAZjyV33C5PRp6DmPjiNk3cr4pUg37EcA",
  "key27": "DrhF1YP8Tv5fvvyEhCuTALWCu4UJZtWLoc7oaHaNWPzmQCaBB4sLoicMUFLJ6VCJ5yAYAozvWZhQu3534ubDCYm",
  "key28": "3BxZPkLq71SBhg4rUK6FsRYCh8ErBbk9sCa2998qMAGkw1m7n6oGt9dAyEYfRbm24XXHKznV1ain3kjibB4NNxYv",
  "key29": "53AhSJVU3Xyzx585asgwhRobnR8PgWUwhmPzK9HLyFf3wEAmmw1nXz979a5XF6RbSRLxjyv2bhRYdTMzsGdeJqna",
  "key30": "AnsYHyeDQkU8xx4JNCkqLGGbUuRF6UYtesHpWBvWfdS6fcKhMq786f27X6orQzWRaaQeZpdg5NftPenCg9x1s7j",
  "key31": "2kGdtVgWDj2gfqVSA6Uh16MYJcwTaVbcQmNdCLrhKWteJEEDNebtsHw6zg84sYhjz87iKXEvC56epZdknXa1ftLE",
  "key32": "5n9DQqBJw8x3ZpVZvXoC6tLkRUxWBAYDdusXJsEdGcKGhGLPNuXWnRCcE3mEToAv86VZUV7fFjsswPSmH3Q1Pns8",
  "key33": "28wEdNZ8J2MzRGVz65mzcYMRyDpfWqCn5GiGKPNHpSutb2fNHYxE9dvZD9pZhxqEzaC9d5NAfxmEy7jWzwNGRJmL",
  "key34": "3PqGDSM299JC7CNBGuexZFMzSPPqMZdPqGRyEakSvgV9gqKoiw9FqTGmW71CzygU5tuZfoUixchGWyQAMxCWzDBb",
  "key35": "eoPE9NJSWTxU8GcQsJWsLD3vtyTk7SiykehuGn32uLBTNeQT2Aq1hdRimLxsoSpByzsa15mtFc6GKmsJcWpQ71h",
  "key36": "4LwvqULU47p5TqWdLUd5P49wsrybYgWcRER85SxW9Z6wy68cNhbiyYyXTuL6GTzZQn6n6QZXjq11UxuQPn1dYMUk",
  "key37": "J5i9rceaohNAyPC4HGKr3oMjSsBzstPEMehvMTpYzaVyJtze2iMb28WjFH7PHTS6SLC4ir9tfS2crRhiKu5zwHk",
  "key38": "4A6gTt4B7Vg9b8dnFS1j3CqmonKoYaUnQiSJEXuWQKCcRXPmbtR5AGiQjr8yqBKx1paomz8cz6LPgVzL3MALmthT",
  "key39": "3EgYrtUyUyZkLSh4Zu1V6SSjYRo8aEPtZqhXybjUQXuLkSFAMPv6byV1UTyZ3kLMV3bAL9Pf5nsiDY8Ru5D6mn52",
  "key40": "2yj1NVQrsdYDM8Mb4izgc8VWNWGx2rzNrAGwz4zcFouMNEZQYY4y5eh7EMw9YqVTa7rcikLgdY74JfbC4Pcyi5j9",
  "key41": "36p84jGs5Q1fXgjTWx6BWTMWr1NaCuKxB7bMZDbYnxASRJqtwpnhfp7SD7r9ZhyiGRZwEo5tCeQfyTmT2hgmc4AA",
  "key42": "3HWkVjWswqTqxs36eZhKj8i1cdHXVihmh9CoeLoCD3XkSJsVhn7Li7uG5VtZ5gRmwUXH1kvJjHNrKp2zgkirRDfe",
  "key43": "4utQEHyaYvX6ykBrA2Hc2KR3tJMutgs7deqpV3Jpv7qEPnmydbiPGRtmQzWNvT5ox2Jy3vN5EPM8XZEE8vRCr188",
  "key44": "5JEZZrgPn5jWBmJJtAGdU5wtXsy2DN4aP1oW8b2o5kpqPJBCDBALh6mgngnzKDZ2XQZUzbEc4gGSZAiyi3RXMoCD",
  "key45": "5wsPgtR1Ymwf7Gt9Huq61hAHe3jPjxpKFivWvFE3dQHaMCpzkhJ23SsUFpeCDRdsLCqJ5QSddqeZ6ChCFNbo1gsQ",
  "key46": "fZaB8mGwhtAqY1QwCEXbg1H1aing5NzVEyAzapnaKsJFnrhcGB3Q1SKBmsTXdxQKRNUXkS7QeaTLjL3Ck6FARFC"
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
