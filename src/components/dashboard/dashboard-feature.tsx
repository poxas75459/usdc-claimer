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
    "KrM23R6QonUPsT7iH9ptXCpZwKnQUAfi2EhJoJs1z9i2YiUpL53uGUjFpYvcrxHBJsNhsnDsxpczg3SYyBdbLQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XU1Ro5X9fmm5bYPggZsyLGFzn7qf2JzfbwHtnXh17edr3myRMucnWmApXLfYqAE195kLKUq8jYqXam4EEV598E3",
  "key1": "4VgoNcNkooBK9j1Qftx9LNpCaPvrxYh1oEjE9yLWSF3CpmeWbS8WL736q6JB6WUNqSUtc5Cy44tx4uficzYo69Ka",
  "key2": "EH1EFZPEYq6MfxrGH9nXqrZFT1TCtNHJqPV9CK8p2XWAnf4cLuZ4rNQbHUsn2HQzHQMKuPueNfs9nug1Q57u7wA",
  "key3": "3oW3WoLxduBJJYYBUxUdVYs61JpmLaFshtXNQjt9ZKkLviYG13uSxv125v3EF4mZUJ64KDK71f9hpz2h3Cq1NeLM",
  "key4": "53pAcKLEkMjemRfc2iVTwNGVQfCAc59q8D84v5mmDpm1CNAFVgcdJcnYVSJC4mF6isJ9dNkvZBb4jiWbYD9v4zE9",
  "key5": "4gpP7tqueArcGsvZnfFCZrzQCj1193MqLgGxTtHeQuorYwpnGq88auEv4WCVnJTi4wbQGSMw3rjpDA1Pzoh2TEzz",
  "key6": "2sSs7KjmDqiFjMHJAzEsJWnnmnYW3ZppWNT4vYKUz7JkCGyW1Xgm5zB13ctnWeMcf2QyktGgsUjPSePouREG2pTg",
  "key7": "4NNATF7PrEaNKCgwC2mbTbnnt4Kpk4JUBeqmhu9Ekbkwt8SKHzJrbqBoMf38hCAL1BduYsqf6GUWwbpwbS4DigNz",
  "key8": "3Hqr7vp5jBPc5aNWJbS11t316tFK9TtzhbM9efwZAzjFZ9NfvwLwM1KTzcTnWeUkz9pPjNWmSxKBJcbDKHWU45T6",
  "key9": "24dPGPLELTm2gSkYqC64fcXWCUNYKR5VCwuk6M1dXWWMVHMwSdzpUzT2LsyhoC3oL7avU7vqL7JhDE5xD5EkLujV",
  "key10": "5L77ZFMEEt4qXLZkbFJnpQ2v53yiZTrUKvKX2X5A7MpTVRWkS3jP5gRoWjRFJmMzsvx4WDvh2eCUsZYWitPu1h1t",
  "key11": "4z4YxPaw1TcNUTs5R1gabYPR7WoX1SgRkyLf3wzgt8xz6epMLUqHAx8GdrcaPsxecSBS2Ch7CcaxFwkvbqfrM7jf",
  "key12": "5QLJ6d69ptVgrm8SSK98qVHrN1ip4Aywdhmppt4hGJ3aXrDhhYVRzV4z9UgFdwdWaRriKuxRjZpHjzTTAptdVQMA",
  "key13": "2hredhsuSPmQmWYFSZrrnU5CZQ7W7ebbVEF7vxzJ26QUKDChF9yYtwQVbqEvkgUJTVqe1RXM5FdghD8hRKynNSrf",
  "key14": "4N42ndnTAJmwVjTicFTCMMqysAZhdKJhM2qPxSNsa2RNM8w56es6HSWEUNEQdFJEHb3yP9GyNFRBJyXeWXdmyJiK",
  "key15": "2FfwGYNGPBgX8qSJ2FwW7Sq1C6B8haMz6pvLMDrUHtiY8ZitWbkSu85KAYFigSPX59esJEZVYFxjwS4hdcrzDcPM",
  "key16": "5pMzoZZ8JZ12yN1BwgLXyqQtXhN2S74KByh3xuUeGVBsv7KpEF7ambE42P2srLaZikssVyw8ZVTBp4otGQB3vxUU",
  "key17": "2cX8f7tAdC3U87QzGNGqxNrJoUPZWWFbr2WzLD4gzbNRFdfmcsyfR3hBEk1Ebp1NtarqcaV6K4SGzXDNctXiL2ba",
  "key18": "5UH4RQGpMohCkR78VWpdxWkGsNE1QWpeTS24fyiyVnVuADchpowKUDUx87tHzbK9rSDaGae6iL14MNnKbGG43ByD",
  "key19": "5TWax1iPADzhEuEWEMi4zvNC84h56dZeSU81bDrLnXmAEhuX97RrLX4HUFQBTuZ7ZWiuw4pMuDFFTquKGSaPRUUB",
  "key20": "25gLycAviGYeVWHMdiwSX5M3K8cT9Ggy9o1mJv1FYLHm23wyuWABe819cuqAw7bAaaTYB9TE1NNu9jo4PLnaDGSj",
  "key21": "2fRxutCxSu2S4E3Y6eoaKnPaEfLP9KEGZWgEVsTnLZhnroeLx8j5woVzwjzqd3bbf7cSVhAUVH7qrf7eSLgT6dha",
  "key22": "2wr773CVUNxawN41qJr1U8aDySCpH9dgc8wSqKXmUbZDDYxbA3pWmp1t5MiuXVfmTbqNrqEAdiodnzdTD1rRPrvx",
  "key23": "3rWf2qYsGDERAEQvfS1TV1bSG5NQisQoW2EsJvA23UBEPAHz9Xrng1aWp1DYaGe62jwmCfTpSPTNYM2hFHwPFqt2",
  "key24": "VbnU61rcK77bbdRSwytcYsz4KH3d27pFpczRsoKQ6j1qCWACbwVdMMnQxT11VjtTu11ovFiyrP5rKkw7euuHCgR",
  "key25": "2mDZA2tzfTL69FdUK6K5cTp4vXehAxrDUAips9crGFcqmLviEPFuvD6sixQ4FJ1hozZUVKwtApx3SUxdihPkjvRh",
  "key26": "3yQ1zpP24mJwueDHbnaAVhWzWL5tASodSBnhKd58zCPwMSggjV2M8p7rCs1NLbqeLiEHcpLfuRYYb1NXYpZCbQPC",
  "key27": "4LTjK62kySt7rc5NB2jTcGNzBxbtEY8YUSY97KXhp61yhqKLubozQEssFisPwEsNjtcXBja2rxFNdV9Sx2yKgfQy",
  "key28": "44KrQ5ewwxxLxFAQUva5v5YDaDZaEZaZvRagRTgfnTEyAhyshDeG1dh8TtZnt9dZtkeKApYs9Up6DykHdCW3JzMG",
  "key29": "3if1QJPMLHz2j9m7EEvZdC2LmRppeJVZFEG48mx31nmQ7pTwfgfs9jLB77gHu56HjMdsFHTNU8fVbLUw9fxTJEGh",
  "key30": "336EpDyV7o2WCA3yYKxn6Mb8H9NcD2KfThxsQzoCJCrWAbappKW9CxJ34Ww6CGeGr7upR5rMd1q3TorgSWkezc38",
  "key31": "5efnLnnww36HrBZmZ4s3nVgtozPZGXpK5HWyWKPTphWsQcZv7XQNpy2K6AR9r187QPd7nRzsFChrRownM2MhuQ1v",
  "key32": "2JBT1QgQmiNLfWZhNrfWqd87kriXAZyCsrTFgdjuDKUnmq6nN9TimjDN9E6PC67vjc4fkebXSeBGNs82fksQuMMA",
  "key33": "PRp32jsjqqKjinb1WTi7bmCfnVLZdm6jPJrya8Vs1Z2ULhucG6osukseg3Ar9KB4UXjyak3DoSVB7UQV9HKouQS",
  "key34": "hJ7e6jDG9ZbHNMJEMG9LGoShh1ZBZ1gCnrJhhZemFD1jLWxfPh96uqPs81k2jttwWuXvPwtAdsk5RiLkLhxcexf",
  "key35": "K96NaiHqsUYhqXxxR23qyQtTeWFStzyyJtMMFtkBC4MjHNUocX5gB9htzr1hNAJ6YNY54k1PJqRSHL5YEj57TPW",
  "key36": "3U8AGBuAgnpV1vL9hqHKGEFka2mkSorb5h7gCbiKQiz1gvBwHeiQuxpNafgPPavnVnxMnabThXiiSvWXmipqUCQr",
  "key37": "3uQ38cfvLXv6UuxrnVjHyEaLk8mwFgznFhQCuP1WdNHuAaeL4LSQhzLqq5ysAEZRaPm41QwZiEz5XXMAq9nxgSBf",
  "key38": "vUrWH4DqHyhmXEMU9vSNj8DPD7fQzynxRPFpBKcYJSQeXNkhrV3RqsJMa93ujRepUL2HWcVZ2iQ8M1ffYwsgwwE",
  "key39": "7vDN1sUZHJKBGxFsLpi9USyhAozkrGBpVRZJsju3Z4dxHqtrsQqfyHjNAqxgVKagQvujK4PZmf8UH1bMK3534bv",
  "key40": "5hFdZQ5EN4J9wJJNAha9MWWSSbjSXsf4W22n6eb6H9BUEotdMhMxtW93Me3QZFqFpy4uBua5guQMEhQxbmn6pLpc",
  "key41": "5TNoRqTwM7w9mykNT1cnKN3RanyzqUMqDUfTnwnMYiFoPMfBtdt9w5TdGM8dF2SV4E5QnKZcpGST3JfTsf8ERJn",
  "key42": "BLjMknFQYnjpJPPiJBSDBRfMrYYLKbVVRKEgxyDEEiX5rvKWuuD7Xono1XkYycgSFoUKQLQpqj2Ki8fpfAQkUaM",
  "key43": "5YdNR8as2YK5PuFabit5ZSH1nNbte2aSt5rzchigud5QCVNhtQvNTCYQXhG4DSBybcPHeB1C5do5iZ1ZpD6XkD7B",
  "key44": "2rSpDYWdWyaPWU1AmGt32srdnkmGjULnh7VAv8U2SZfMp3nHrF8hfrUQ5JwFRvreVqSZ95YXAbBu2cHGbShvmuVX",
  "key45": "2TvB32sXV1aAadskztNE4FprbDmK8d783FCLrkJ8Crsbk9BRXdxfYkHj11D8MsAriqgrCBvUWL7UGvwTnRDjoCQi",
  "key46": "4zQPnK9eycY9LaejYPX2keMZpW1XBxcKwnYtL4SPB7odxbUVCdPmMsmiPXcSdvnE6VsoZSxoKEaq5JbDQvQaGff6",
  "key47": "4P86iwpEgD6zuAnUu1Mafdv6zuoSnF55UfUvgLymy9YqJiKScHvMefiQY5jEZawEWZxLmfj7xtwL5MTn5qhJzPiS",
  "key48": "54dfdGrg5sHypZdKRrBXQXQfGDPUopv1FZpSudcjBfEFoxKWXv3SA4D6brsXUDiggz2W6QTkQcgZFN2Gt5oDtALg"
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
