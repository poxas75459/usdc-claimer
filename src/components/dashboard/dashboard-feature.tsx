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
    "3SWyB8tPK8afdatdZzKhBEFmjffRcvdPDufACwSV7bQhdfsiYquH7XVc6HsJoZnjkyNhvtLoReMymxTQgawGokVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U7mdoF9ZRBu9UG9uCC17mpue4NTQrAM6eoDX7hr4qc1FsqrVUd5VzTjtLAYoN7uBCeZbAAPLFioWjnrC5BbTUpc",
  "key1": "5Ez1r6QqaQp75rhYrUKE2pF5tbfoMM5aW39ARqVxcayps9JERVQfeSusi2gdp3mdVXb7N4eq9ZQUAyVExnivxpLv",
  "key2": "2jfXHTFMbUS14mSpNutVqVvzMaAvnjRsvCLDUCoRaEUx4inX7LRJpxhp4jSPHhFrBiFZ9cw6XMVgkPburtyqU7L4",
  "key3": "zyiSL6se7W3WLgzzU1BZe6pefnmXigk3BcTrZfsC619ppWNFY5GwB8fZCgFZYd4XsGovMQowZDXRsJuvy4KNtHj",
  "key4": "25sFtEwL2gDUGiAN3uSpF7HuF9FnnQqpLxrWKA2gHpEpo8JEQNirtbZoVTcCBfxdvtKUs9po3nUp6AS1x89mfS32",
  "key5": "3mEFCW6LXe3XXK2AK1rCY3GN2tapec9B7RHLyxvCXinfiiLM6EJdAEorjLE1dathwNn4TaSjqsRYAUqrk6owhYqy",
  "key6": "E2FsTjLrqjKgXKzPVKGmR67cBXyLitUwjxeF1NPEQksfc2pnZJPHaK9Cv3BJL4y8bRuwJeMEAozmdBN4ecu6mAG",
  "key7": "4StqC8nzRqJg3aWZuBEo5oMctHk9xNRZHNaBJUokKKk34qBdGW67NDh95LsJGeG6zEp2qPtCp22nvxymrxEkEUsJ",
  "key8": "4wEKgHZEc4Co25h3vxBBQGHMJvSTqf7oLjkbMkQGURnDf5eKy97dLAEdvLY2mt92AV2X7Do93Twvbytw6WiQBwWo",
  "key9": "4Xfk95kwBAPXS3j4JLcndsgS9bTbK47bcLeWhtJxSdsSTFPcjzTUMf3zfzYaLw8z1s7Eqvha2E82nypMDLCviNie",
  "key10": "5viM4ubJpzYfpNLtvi3tBLwc3gULoQLBswKnWsEdcJzFyMR3YdMMiBXcmtzJtxnUmZiYnHB6Htycxc3mV5xnv2DY",
  "key11": "Sj2VK3A8diCCDgdcSsqqDFbBwZh6CweaMgb66VVPs81VB1nsh77DgkExSSozj25XfYw9UVZfZbAsUVeH1EbhX9Y",
  "key12": "4sFG2XYBsw91J4ij3ntZNVjxM5unvn7rUTBDCgWpxzhJS7DK9gbBe2kaUG9JgpaCYh7rjrsRd5tLbbF1W8hPbdsC",
  "key13": "5f9GvbQowkQYe7y6JnMf8ufuWJPEvB4AZYtCWQ22A7fR4wSoV5YcfkkGGW6eANMJTu2snjqFf3gS6fmumhdRhi1e",
  "key14": "KMKWsF48jZczRk8oomRoJNksK1RtbiuTQgvyYV3UUm8Erw55fm9KZJqsmcmrUahFndaeFtcn5EE5YFSMw79oJJN",
  "key15": "4i6hDtePMZGGUnQ6VJQBGDyR1fzm35oXzzZs2DWhJBHdGPBt2i3e9wzkWjp3ZZeLmwoYvfdnpRQ412wfj6RnRtZg",
  "key16": "2CtQds279fYzjKaWy543CjSsCuvXARNaRx87S9bEjqNHdESA6cYdJ44pc9xKMfBciyRHWn47ohLWwo3EWvHppL6J",
  "key17": "223PWWWVdwKp1DjdXwx9KxLyC7U2EJr25oY9EUYQW5XmVkKTQeRH3ReEkvdsXe9muEyZqJtrUhP7GkpZxMSjMsKj",
  "key18": "2NdNqCA4tbD4UwQkcYMMZSdym8KXvkhf7XXaEo4oPPxWot9WzyE9LiPVoSQzupN4xw4j1ef87pFF1mH6tn749ZiP",
  "key19": "3HrBcovrhzgSV8JHrtDzzASiYNtZmCRuRRdMrTPutQvckYC4DfGHgyfC9DwvBvupVToTPVHSbQWAN4DVUj5zshUL",
  "key20": "3PWQAJtDd27xYwqmQM9yaoKxBnUs9C1hXHvBvbzHzj7QUkPLRzZx6CMQAzUgRVpbNHbwuqnFrq37JmZrWx3VgBGb",
  "key21": "915ogZDVmsTENoa8RrdqK5dtn3GaqLNXF1Dz4VjtawKdJM25PU5Px5wXEF8miTKC3qNMbk1jizhJF2WWXt5SxXv",
  "key22": "Ba9UBExqCeU7jYqzApvU5BwY92rr2TJoWXpfsd5hx6MPFs1zPwHtH7DJugYEmZtE7ES1uegrBvCbDvbcY2dhbkT",
  "key23": "3rfyQoLBWaDaGmyejMKTzaQqfdhoQKzTaaSfqmxw64Dgjr4CjHywFS8b3ogn3rd6ndruyaTvFa7AVGc6XVHYRRFx",
  "key24": "2ybbcw6rfycUSW5x7ff6nKWxTiXmzWeLw8h3ekcN4TYr5TRw2ynEpKAEnd3tCGWfxhGDstndYMBAaBaSfwA1s9Kz",
  "key25": "4igAjrPQE6arL6o3jGcXNxhGMSLtzsuXjewVSs7baZGiTkPueJgMZJRUegzdQyPiwaAgWNeo9dHhLa1TEdBVzZSf",
  "key26": "4K2wemsv7Doj7CQsafprDo5DuxXooC66EUjYKURaWvWBMyeopdaVrC39Z43b2wujR1iur6A68bcKtAgTtsFwJmrE",
  "key27": "4k3XfziFzk4ubwyB98L3FEjb6S1wpTKeVStJkoedNA99t48TwrZfTFDtn2eTNgh7YmwHagWoRUgTiqmsjCKo5Wyh",
  "key28": "4LYqfyDeLPsJe2ybJaooV9Z8m7HbSsVDnABxM5yVoXg5Bho1tU8otDr3xJLwfeJYFjnCEz1w9NL3ttK34MD2ErUN",
  "key29": "2h4ixUK9SibqRQsuXymkGNUR1YN1sG7fvV4Hcw9ZfTcaLnbKVHVoSEB9YQ1QuT6iPAgY2Txcg8CMKodZat4sDqyf",
  "key30": "hVy1PX9r8FbjFvKCaERGRATxYrJ9QwqRaYXCzVXVzGCQqYP1p6sutsQsh1W1i3EWhCh6nguzUm4sd2d33TEuJAE",
  "key31": "4bo16FRsHYePG3wm5WcvqHBwaCw7bwig9SnESaMBcX66znuxQeswxfwrrEkegREZdyk56jndgyxC8GEpgEbwMsXF",
  "key32": "2zXHBZ7GPQ6tLY6jAm75XgLeN4pQ1i7mg8yvtBzuV59hc47NopjPEHnVrXvXi5q3cc8pXZFkVRMMCv3uLsZJh4Jy",
  "key33": "bDkMY2xECGw8rMXhyZs9Tg5QratTbZMBkHX5BcTrbBdMKmajAJu3YrwaLYY2zC2GtvEqDZZSNgpsJe7M36GgnR5",
  "key34": "58oM3QmGrDStafVzJdcGgmCTPm8eCAuYXBxoz78gNkVfaGmFjbVCn1imn82F8VFXtrdXBDomSSCotSdt9s3ekvQT"
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
