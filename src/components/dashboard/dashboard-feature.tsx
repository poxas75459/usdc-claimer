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
    "5tFTQ4QBhvpeWqHocKLJmaLfDvdbuvT67tKvFoczAbuvSmsTMzvStUwabnThnbv5atZi3msat93kqmDNNcgv9qFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mr9rsCD8erdHPofMQ8NecHzshmcrhHC6F4twHxnwNd2yMt7JDVxcJ2JrkCZPCXGHhyss6N8mVuu1TCH7MVX6sty",
  "key1": "3eY26ofYrh4twSw93A18hvCXMNenMMt6g4quy4RFmgHVD7Aziat1eqovZ6q8fQL3CitL2ogUBcL293neNGD3yUwj",
  "key2": "K8MZHfQbFUC8fnGsWjnBX1sPPTE2tz7UrF7ngRKLnwqtbza9r9tqdNqq7h9KeUEBeg76xrDqCuZpw6d4zLjbyLw",
  "key3": "3ScxmKHL5Afuwmbges49kvYXV4vm7swycFDDz2jcGFbj2Vw8LDRjwYLippqUyrUuYhDC8dpdWp6QLm3pTq9sEsdV",
  "key4": "yTTarpPxsbSR84GyTBmLanr9GUzCdjbbgRcEugAL9pYep6zM5mnVg7PbdgmXkJ7onr8EsPkHgnYzJogoZvDisih",
  "key5": "gCHxu5S1EqemZHiXEAwDd31pd8ivYdbM73JYy45tUotcay9pBnNz27xwB8m9RjJmfBgrVzNX9TBdDXmBTtVCsUn",
  "key6": "2WfKNpfJksTDrtZ7qLG2UuQ4DsBh98yuRg5viEAgUuFzCyj3vG1EBvhSqqiQcyfwM38JyX69j18tHdAanezRcgPE",
  "key7": "5Fpb7LjbAJjkeptR2NX2KhUmcMBBTa2ytGw4v7NNpz6m9B81YvsLhKqpHJEydPbrNuo6GHRcTk5sLM8SFJJKCiwR",
  "key8": "3MSyybCEMoqfbm4HtjsWFWb4ZpT2HgAwVjwwmW2EpnNu9qhwv2P6NaHxFUwgjmNMkDSxp6o9JBGvwyqgLhZBHK3X",
  "key9": "3t2RVxsrGx6CoVVr2nX2Hn3pwwQMoHRyD2xhRTTDPBv1jjt9ASq3Zeptq6akPLLby9NpWgcWU3N5j2vogjKwbaX2",
  "key10": "3JmXUZNhaawWEagqzESmpbCJ31FZ7Jm8ECyHTyoyiVKevFfhaGcaAsYh6NgwezGcKcZAjzUAsW3J2JtyKs7N2kUk",
  "key11": "4XXJcKySBxx4id4vq5wk64Ebyc4vSqoaPTYWGfZEPFxbBNX6pYNXqycHJTmdHSit8V8DjUVrK9YdXBtuZ9dnwWLS",
  "key12": "4KebpFfmEGYmDr3scbNX9bZHusWquEncH1HcCXM5UTprUMYugcZozfn9T6bYSYHrgXFzf87NEph5Z5CNEyvDe6gr",
  "key13": "4hQinZoGQUU8uZeHY6YztAkEAMX3Bf6BMaUeDShzcH6WYojiqz7NvAkq7kCMcUQsUyEjWoxrUFJoJEKsN8haBy2K",
  "key14": "3qgsVKJ4RPWEXSZu7425ibpBKFcEe7DfSGJJD7h9VHseKrGMb6VupkZqv5gcp4ZPV1DChk3aVdyRRM8pEPDdDNea",
  "key15": "4yoxVFNxWJfW3H5yt9Aekvx4DPzvtH9BSgpCAk5M6NVJBNqCsTsemWmcysTXt5jgjJ3WiywpmeaX9xXNuNnVqRk",
  "key16": "v7C3yhGARbiDCgrSgF4yWYgt2b5tcYdkTHZfzsgzwGF3XkQWJ2CASDnYFTvouQHxx6oPgw2jgXNvFAG3sV58X1D",
  "key17": "2FQbd1MSS2t5cqiQsw67ZD9QtUfb5ZnPN4nLmjFF5hp9agtUdiHHAcTUW5zno7r9a7JxXDYt48cjiZioAkPKqxZX",
  "key18": "67JTfzTnXxMv9zq3S1ty8Usor4J48SdygXtC3NhuvqFcaVrVJgBBZTECGdxk8uAfZubCwWZvXbX7yc2XMu5jgDgX",
  "key19": "Jhp2YHM1KYn6rat27XXn8C36xpB6GCfcEuwX2f1ppVEFoaqK8LgxsaFGFm2Ymf7EEKWsxRQd3aKWQrT3FmJkuVN",
  "key20": "623JthmXMWyAroWswXG6vjNDv8DQqqRgPm8GRzBgk2APbDvkg7cWFhFFVUmVskUAipQthnqYX9XiJz4pXuULtyQf",
  "key21": "J7FoHKbLqyHMcK3VCQ4AiNZfpmxbrmUx8mxwMQB8Y5eQorgs1vFxtLxtGVWdFUA3wz5yWnG5USKQ5FVbgPFbLA9",
  "key22": "r8vwXm3BgzeqzsVvjh5UGjGMujsLdHoNWnvaep6z43uSiWhc2f3xA8RvVUrHGCqAxqaZNjBJrtMEHhwGiXG5QSQ",
  "key23": "5raMggEP8uHqXCKfUYu1phoVoesLXc7tkzkSJm3CQKJQeEPufKqBaUYE8T4jkTtkWAWqcYWUL6UkeHwxSVraiTd3",
  "key24": "3f6E1AHs7FDXZRmCi2mcSUb2vwLmU7dbHE3fsY2mEHuzb9fjRzfaiVK9ePwfSRV6fUXh3EYZdvfavkEdgZ41Niub",
  "key25": "FwvuseW2NH13urcLr2UGdky1vsQNEtbrpu2vFwPQToUj7Q8f1hv68Ea9rcR3wbvFzSWQQsHVvnuqor4LC2FnNr2",
  "key26": "3B8Cj76CuYFR1wjuY646DKeZcY518jSwK2JkWMDQDWKaQNA4ysU8g5jWZfzJNuwz9DAoZWTaJ4TLQpgsrdDAMruf",
  "key27": "4FJwqS84chp3gxMHuo5ABQT77k4qrsCi1Nuacjyiymf4c97Gjk4wd3nPNwqZcnUQ6iQ8S7re1Taboq4yZNfy4ret",
  "key28": "5etay8DEUxbTuETR9FvBNhGSWW7t7oMKwNUKsxsdVvSZzTaG8QFjy2oEuRgXEYYj5nW1sF2bXJ9XRFjrkF15zAEd",
  "key29": "52v62BCT8n9gaBJdw6hdsqKatt3C3J25nAYESF2sgrr1RHNE1ATJBFkVyShhuFKAJzU5z8zZk1u4CyrNGNWVY5J9",
  "key30": "4186tAHUy8dwVmAZWpX9bEmt3o17g9fgfiQGk3on8kAfVSNH7S1tgKmByM8MoPEedqSbGsmfUwNZzvgHv9jkX8mM",
  "key31": "361r7bdYGxFoE1T97eyGuT5rHoRSm9ZKMseDHoJhgvuncBFnPvApNmnGFRea5Lfyvrai7CaVx3t9PGH3SDFWUPHh",
  "key32": "4J8E2355tybLkdQfbHXxZrArgjCHVasjF6KE9oUgb69GwcfRVv16CNor3aTK7uQrbkmgPTWyyTVf4JZtzs8RGSd3",
  "key33": "3R7vcWmNdzpZn9Cjz4z2pCjFLg42tHfQjSWveKaD4vUmaHqitL3nRFDMEB4vmLUH2pDZMNtAEGwHsnHZFezZ4BZV",
  "key34": "3n34i1jJFFByxWJ5uzUTzkxxwonKbqAzyEb6qc1CGz1rRKAnJcACeWm6fHHqYLG1RDPbh5eepTAkJjZ1BPzitxnR",
  "key35": "4Ny5og2LDVFuuKDKnpdQAsPsqkfiurLTbsns1ePZ6dA5MfJzbMBz8LMmBidogGiLw3m3ozKbFJhbhCYWavxpjWCJ",
  "key36": "3vVtGsxCPRcmSixjeXbWJLzzinfm5bU4dh3ozFZ7mCV7ezTrQB2HsHfKizFk1qzgoq8skgiUEVDa8agnA8PdYP1q",
  "key37": "2miBAQfChHhwUgTGN9A9sGSnmmM7yi766YGx7waFiW3vX8xTs54e4UWtu2EwEFuxxLfPcoRJ3KXExg6oGUWyVtLB",
  "key38": "5WC4Ht6cFTLRdXhyrBVQV9s5MfK7Ro9U6uFk9CaNYyPyhsxp4BEx9N3ob8j8p1PrxUrA38q437VcpxzrTT98PK1U",
  "key39": "2peGMYWP5221jxspoMDv1S6SrgrqqULyGu7LYsx6cYh7de2MUHL3D2Jxymhoz9Myf7qjGvZttCHCmtbQ4grrsAHm",
  "key40": "5juJyeRPZXjLjPLBE4SXwq6wY6sb8xZSSN8NPnsZTMNaG2nNtnRGR3Q2AzCUSiuYHsuU8MccLaUo5suWtjTPEhZE",
  "key41": "49V59NxymGDTr5pTAVA2HytAE6kMm67SK34Y9UBJya2Qk4YCqV1dTuA3dTofmKX2xxhDE9FtNPDUnPxyzADDRpvS",
  "key42": "3U6rziBdNQNdmniNad8N7k2TtfPvJFAumSFf4Uvyf8ed6xhzHzSaDSLFLNkozBGJgGXNrY9wL6smyvrnXiZRiDG3",
  "key43": "5rWMEpUgYy9WQjwmjcbseRpdpkmCbAp2QcaASALGWGjfpVJYR3FtTyA9ooMza3GrULHECFGMNuUomcjQF9Q8RqPw",
  "key44": "8d9uAevA6KFXuKVQpEb9KHqzivbh8phXXQBYTuycpBPEZ6KQeJbB7sFscAj2XYrvyuZt2MeEcfi9bpofgcdPmAQ",
  "key45": "4fxViiDF2wn2F8W1rqVuA4xdhSfbLGzSasLavUxCPXf2dHD5TQPFHx5uu2jsnKk6uVZ5BULGoi5RadhXy96QKH73",
  "key46": "4MduGK2wXDNwxqRwPQkMM88Vf8w9JzFbNz1uAbefgdZvDMjSyixjs1kbSgP6gJZXLGhzPnff8Yfg1T3bJUbN7xiL",
  "key47": "2a5tBai9mVSRpnhvmbWEUQHMf2eGya26vDukLXo7JcomaiuhpBfyKky4G7g3r9wtYHsHEijHW6cMGonjQSeb1ifc",
  "key48": "3VV6UPTQLoQoaWUijtQe94sy7pixRaumopBBcgB51tSoNq71bvoLaTZqbkwBsXC7p1JcpdaJYtRq2ufZf83Px1Xo"
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
