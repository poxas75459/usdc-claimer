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
    "2r1dP2FTWGkqQ7xMwfjahYigduKddynMiCjFN3UgPCwiQkryqyMWcnBUouxUAohLd8TV4fKTQvyHMwpAfmPQDV4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q2H7suXWWrA54zXPygjGFzWTSakKoDxVoVY8bdDTbmwuhPsCY6s7LpvsfPRUtcKSzMqJpWrzSB8WoAPgTzjb4b8",
  "key1": "3a5Pnfs5M5dzXcCm3eJgoo6qZstw98aFqkpVrGvpgoCY414PgWCBCMegPgAP3FHAz7gvbMDazS8Uy3Mkn3Vq4cv1",
  "key2": "3N1MAFfD8P9k279QVfj2qCQ6X14XAzbyfAq1XHVUHAUrJJgPSdio7H9pBWrzgAyz3sgEdCv49Y9HRjQRyPqvu4jw",
  "key3": "5Dv9CRPyrQLtkMh9PLMQrnf8GbfY2JhAyQXEtQV3yS7yQBQmBf2F978uP1uadT6rVBCpUUspnkwSnG28FzJkcpEk",
  "key4": "5nzuqqYsLiSm2hmT1MffhGNvHWBrCnVFYnS2C4RZE2kqc2QbUMdVFe5vaKyW4dkQL7XvbiUCzSkaqU4fnAwhzzLC",
  "key5": "5K3DWeuB4NPbhtU6XS8NX1sDup3eXLNoSemmr4WMh7MRT4sLU3Nk8iwD6kY5B8aFy4avvvyg3DfKYGPYd94rmG7B",
  "key6": "jFEKPyQiypByq9CAmQiwmEsyhJCcxgJSQvCkL1gyg4ACims7svYt2dp9TDwbWCPBuEfpk8QjpFGYcSkNRrP1M8w",
  "key7": "Wco7FKhbjczNCV2fiUTDQmY5WixNuBVT184yCu8win4VyJ1LsuNfNuvQ61XumBnLup4AfnTBRcpWveqkQ9dG6Yv",
  "key8": "3migApS5gGBMvGkj9TtW9D7YzjLLcsE4UmrahYs3muak8jFGHGDZAZZcjbxwtFFLaYQYhawR7M29eDU5K6GR8XLC",
  "key9": "73L473iwTixLyRc9gfo5Bq7NGrADH1BvP9AhXojDPopzfFgzaENkGDZGqftsAuxDUWC7aaGFNWis292pmj8m1pa",
  "key10": "2fTugGBHU3FmfiNozv7QXa5L7CmhPUUeXMad5LXXrHGHcYK86eQdJaTYCuqowrQDNsBeqwSkgchoKuMKTCMKMHag",
  "key11": "4exrT4zSXu8miHwsKMRkKR1ctkcu2JoJ6Rxi4zvvRitUUoxY9f13qLYG9H8NBP4VmwZiUHn3CDVm4R11zXmQNYcp",
  "key12": "2cyYYLyyjT8zvCGEi5p9jgWt6Y6hMv42nWCUtdtBdYCf1u6bEoMa3nBNyayQVsRmyrbyYxc5izRwJBhGjmdnLk4j",
  "key13": "64zL3UMg2rFZneJzkv4ibXFXTvoNh1xfHWiMxpxbUJj5kwkKgGL19YxUdWa5E6Hd5b3EhzWMw6LrcLn5qccbdBXF",
  "key14": "HEGVwK5wfpjq87ujFcM56eNcswjaSHzZzd957xLDN4ASp8S4dFBw9BtbSxZoLVgarXB5sGr7P9CpZWJMNSqDPGb",
  "key15": "2m6UdjmvgqXKy1j114MQbVUXPQHgH8691tQfeGrW1BTa7S1sqn3gmC4DYTfr85jubUsWUbRCKNxL25yJhLvpXQKW",
  "key16": "4xrDK1CWtyryihR1xx8mtE1BtA4HTD1vcAQs1VzA2T1oCxA64KLMMfp5EzZP3hYVJP8aegfTQPHzrdnWPauncASL",
  "key17": "3bRr78GKdLGkTcQNBaXjiMUZhhScWDmBkPWaxi8jmfbxg8h4BCC5uU5TM88xaN4QfnS99rUy1efXjpLWwZfmePhG",
  "key18": "473euDZ37eSMUz2LdLHn9GdJVCnbT2sXQS7o5uKDqptXhh8y2SsQYyz7pYTcDrsGWXNmv85SgbAs5D2H5uu4igL7",
  "key19": "2zNRL6aFxCLYijX4n9MgAgPk5wR2meHs24tCfRsf6aMcViHv3VGJBKEYPbmiR7WCh8AKwjix7GQPDpFCfmeJ8ymG",
  "key20": "3UDMgFj7kBGmAiWBAyX647AjFxzVuj2u7oxZH532ePiJw1YpHn3my5vbh8NgUV5TporeEAP4afomU4wZ9eVc6p23",
  "key21": "24VbRr8bHZhwQzV6bWzwqDoiQ16NmsgtrWSPjE85f5gopMn1ZMDyMp2MXASaBj7dGUF7MxgcsYjHc1jD1EJApDHL",
  "key22": "3pCFEVccwGpkFc8ECucp4msqsKJZLfwsxKZpX3fpr5AT95V3vZpTUTNEwGPG7H6zEhmC3geAdBW4TcBCDPyNqN35",
  "key23": "2HKcuz21YEdvNGiDxBeSqVMC9DhTSv9XHMmroL57BRrvXAcr6DqL7WzSUZu5WHaNgwjrwRkePTiJhyKGFf9osTba",
  "key24": "2HU9Xa6W3KQKvbuuHq7VAVWpu2HtSc4YQx4QgHRwevCgCoJ9GFFyCNGffRmXrGJHr33FCLgm9k8othj1QNPJ2oLN",
  "key25": "5CBwfanUjsyxjrh3aVobm5LeLmxsKtpDyNgRQ42oC63KcmEvSzxFpLKBkrcfZVprBBU34UqTgw6CJMy82j4oaUpG",
  "key26": "2SRuryUorM6Dsdbh9oBoQKawK6VinvDsuheW8Ldn1XREjbg4B2MXsA3qZNDDE8Q95nfmJM8TZtutTrKWYEYmaQ8t",
  "key27": "LisVtrRi3UVAp3x7M8uHsYR2Tq1LK8gxQYnf9VtZkwuxdPbDDVVyoecy68yYRDnhXqkRdFgDKASeev4LC2kNysu",
  "key28": "5TAnnCN16Jmd31buPdgar4fMfUm4ZpRSEsPMim8NxwJ9jgHgpyctUbWZJ8akNhXaNHqTiY7WmwZagB7EAcy9HW9W",
  "key29": "5LqPwBTVH74gbX31utb1D5SkYQq4aYqBDShofrtUFAgfYV6MKLAWdCdxsLLLZNnxp3ZKY8robCxmCmJzAn7c7qvj",
  "key30": "2MpmdCm8ukEpcC2FCsD5HiJP231ES9QeRM7gbUhMbGo8qrFuH1Jd1aCHwcX7C8au6S833FwedrDWdh7rmSWVtnSu",
  "key31": "2Rj5Ntuzd7m4buCHYCCdUH4kNhn6UE46kYoaDSdhg38PbWJbcvYLxVWqDf9jJjfWUyv4NCgkyHWz5TkR3NRca1Px",
  "key32": "4V9sSSz4ywniUZJYoeD4kyxtrk9JDdjEyZiEDH4fG1NnJompHcMPDMg6rZAa9ZT8GJcDTczTs5S8zmmKGEgkcKQ7",
  "key33": "3azQ3PZkTMeCSggk8tkVJVjvrGDM31cCytQNFduccv4UzmvSkqz5hTQBwVH4ZHcL6w7A3ioE6tSomfjLfj7ifghN",
  "key34": "MKhEk7kCe5BxhttsXj4iqXqLz8MNVahzvED85Wne8MXcLy3FvWpJ7PjqB274KnnfFgWtm8oJZm5MdFxaoSrw7hf",
  "key35": "29Uo8Q3WKJh58s9L6cx3UfjiJ2Y7CHAC5eRngEA2BTxL2kLAWwV5LcnXtPXqs5VEnj2i63vwrpauzuiYqAZs8a9j"
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
