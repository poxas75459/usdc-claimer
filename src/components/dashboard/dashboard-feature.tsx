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
    "3zZ5mtdLGsFgMT6cEpZFgEfwmQS2KxjLHSdSg8W49cArdTXMAsKBg5gkoFx1ELzc8XLEAZLisJCHv6gCMPWCkrVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53T5i6EVmnF3KcnKnjX2fCcCnKBJF1UnpLwdxryDoKHN4JBTHRK6tYLtxwdCf4YTkeh527vZaAr1phpSrvnCXbr8",
  "key1": "5hDjAWycibxt3FUVFtx1FdQFwKCbzyjDoz7BzPS12iqMJK1vG4fSggMdvH5EgPbmGRQWCbEo7Jh4BQ58TcrgSyLp",
  "key2": "4RTBvVz6VmFsrW75wDX7BPpK6KFRPteYZe4dNgDWLJRArt4WfvuqnXpdbNAdc6jQcF9C3LqGckZznVo5ydYeV5qn",
  "key3": "hN6fMRfwA3zSErenUbqwpv3jHPyaYUPj6bGPJznr53iEMxgdA1NFcfE1FR2KtBNJBRwsJ4tUeorbphZgBZpKeVi",
  "key4": "4vNYxFRdTgyd2zYhUTZh13y1WBiQSmh73n8bn8f7GA7qfc63z1bsq1LpKcndhp6UCtWimKNowtRrVw3nV1iyoHqp",
  "key5": "4CLLrWJmEVHrkjCWhnqVPknkpWB28WxoMYPCHmRddu1wdDLhJxQUb7hvBDpRsp142kZw8faRNZAFPyb297qw7ymL",
  "key6": "qXx9b4TEW2UZJ24FKnGmn9vcZnzGptfirHC9mSM6B3obPrxMxCpQJZg1yGf6nqU8AqDGZWgDZW5QzKmBegJEokm",
  "key7": "2NPANTVT6YFUj8K5eeMeoRx5qZrnTRinqCSRX7UDcqEQbRdmjAvFiCFULSYLLM8mXshWS3nbD9yMDdGyPYvLL5sE",
  "key8": "5rJnfqmf6nkyooaETonz7e5KZNM2HRTMTT5buZ8FaAURuwb7o5kypWohkwrP42oAxvjHKRuuUzNHtc5W7M2SHbV1",
  "key9": "3ewpdHPpF5teAWBiAsBsFGEYx6WcfgcnSjTeRQXaN6xXpGbz29aMJCju4CtfrDZ2JZwBunHKj2hHPZHfv28kUnkv",
  "key10": "2Km3ijDQS1rcy41Nbj7C3Vm5zRffzBNonacKAnCiAc71RGRdYmN7bs8SD2h62b6yRbuUEhrxkYq4q3XDuDgFJP1T",
  "key11": "4sKF3gDEEKbRqXQtx2srEA81T34Bzs49LFhkct2fqsQUjsgQRCFKzcnB5w3LYs1ZNrxPGpQZYXM9MDDUMQCE2Dfu",
  "key12": "c6LB3M44wSSMACZNUYe8TqDd6Q3QjQ2bFCBEw4tAZuH2BS6PKmJr9Wgh52VHTXWaHWZ9tF241LRezqdfQqu5ce7",
  "key13": "627njwc57jq27Uhjw6iJrauUFm5EHbGHZNr3rHKtEn2KL3xXjsyvCyLyX7S4JXfm1F5jjj93TUBom9ERzYYyP1Y6",
  "key14": "5ofP6YioQAyxQp7Rzux5idYnAtHh5qFSZ4MMs6jRLQC38srMd3eHiXhUUgk3Ug2cCMfwGnLam4jmB5tW9EtcDYnY",
  "key15": "44Ei3xbiTJDM8vWQuYVBWCShLyT9t2CG16BGEPCEnGbZyphb9TS7YNzgYU47SgZCx47HTtstKNzsxfpJaWPDtkKd",
  "key16": "41vfvStNVYKJogbTYRsXYcpukeQZHr6opFp9pjVopNEFofXndNvCBdedDE9dY2UsmUJjUDzxd1FoE6Yiyh9SLWPw",
  "key17": "4fWQY1napdxRpg1A9pNNcJnYQgZ89Kx9rjBqETLbVLGmKvzSE9UJ1uJMNugs4ugZX6R2bqWeSRPVSUeVMeu48yfF",
  "key18": "3FDs7aVvBAWU963jhyV7qgvqGiACxvp67sirfW5Yini75Nosm6xwnSVxEbCCfVoWKdiajQWjTkvY1n9Z2avHYkmQ",
  "key19": "29JqMp9yd4naKe4MPZYJm5JDpgo7HDbFvVNHwCyEysnsFU1DoNyM4nsYJ9Y6wPvXSx3NJeGiwheYpqqCYXSvUZPY",
  "key20": "5GpGSdGoPKXQVUahiJKzNuhd3grXNTGJRpJiXUhvmyAzixTqa7GH8fZFB92fuxF6meo2vskpKW2oSqNz9JwteGNs",
  "key21": "4YMUDiYSXgv7eRyQ1cNeQUtsC4d7XzdpyEvKVwsr5KQ3caTmamSLW6LtJCKChS7Vvpmi5ZeuHtftpuxPJKrfDWUj",
  "key22": "25T7yXkgsHHG22Xnu1etzPaohYYKDi8tnKLrGDBc2hr2VLQzWTuN81a4hofdE8g3waJS3NiNEVCrqW3GXg5JXtEY",
  "key23": "5Q3rZSYMzNABpnRruUtuYEEAa5TLhb9XqLXAEpdECRuqDgLHcufamnhDnxymA1bPyRywGVggyD9ivYpfZGEivvAm",
  "key24": "2nqQXSEjo6iZEy8s9PhsjPChinQsKfTdmGaMHtGBgperSFmjTJmUjUgBqfCoiTBvpujnUiwQw4mknXLEfkzJY19d",
  "key25": "7cSWNvNdEjr2tKyHoyvFS4FqtAvfxwU3DmFJqYn5U9yFXVBcwk2oCqFCJLHX7eE5d3xvY2SGE7pM36cJjqSYbAc",
  "key26": "3e6U1aAPyFtKrXP4oyUZgUHf7ajCPugAEN1yMQQSSaFsPzLKDxes9Rn1EgFhCYYmd5FMWzgzMWpWmbH3HdKSzQHS",
  "key27": "576z9dnU31FvGB7SDaDqHbEDrRNSc16psyiyzbqvP1x1TmCwpTXZvh4WYNpUxs6pzoEcuT8cP88Lc1eBNh6torKu",
  "key28": "4y1FGrvMejytaP8FG6WP4tUH8viwhuuBr4wNxYqK61uEgEGe6JwsoRQKZ1CZNofvAYXbD4wYLhgGNqNdJ3EjKFgN",
  "key29": "5XhEwPgfYwKB6bztc2RJutr38UskXnjPGHGrvBs9zjuP1CZmujkQncFkvZvR62xR7Rn4rd2YwKXmkdWZ5hxHeQTG",
  "key30": "2HBdaPg1ALkob7Z339vyhXCni4qrEA9sXss62CmnsrFuigTZViR1cCc1RF4SquVozGiLUQPjPRp3nK8EjR5sBvQa",
  "key31": "VEtwEzTyNoRDAxXKLi9zTi2GwXGqHCnMYxmZ1Nx9NR73TwfvVEjCG4F5qZnCaZSLVBNssigfgeDDejibg7zogS5",
  "key32": "625DvRoxpbpxwyqL8EUwvfieK4MRpiNRuymTWLBntK3Q1EzS8uvppVHL4nngzMYrzQAiMYiVBZs6QznDksDFgovB",
  "key33": "32v92pceQxNnNkLmev4idhyrLtK8nbYA1u7hENQGtCFfVuU1aYWuRXjTbBEs57PvKfvqvUJw78jXpehfz1AHZLNo",
  "key34": "5cQ2fg7ap865d87ukUMZVdKJR4UAwejQpw3GTLFVNNmfs7fSRNfbNgUKzAtqxxiUX5NZdGoahueUAVCnpk8oYyDH",
  "key35": "gNfxGE1JBTMdG5oZD76uQiXpspTuMeAnstihUg4ripmuS1GfSmSnze6Pw7h9TZ98FrkEV7DkEyT9tbciXBjBd76",
  "key36": "4XHraChmHvB3zyHhpoPyGuWrY9bTAoeX8tyoFXskA3aQ5XQRTKHUNfSKegwKWbrykz6vobyhPUerUMBHioVS6eY6",
  "key37": "5FDSf5fTmEGNM3UGZAE9jcqr4LyxdxX7tQGd2qQCpnTKgiZfprsRjMNTBTQR2G4hQTeFJ5uurbydjnc4h2q1ybWx",
  "key38": "33xfkEzTsUkkgQhGNPiUPcYwyvHD9PsBgpo5QSphMZjAtNwe4UxMg9bR2Jfn6hWXPQnuagWfxwiDPNx542m6eyBa",
  "key39": "2MFW3xBwHjaAPuymJcGKN4JA6nxFow3Gt9WJ8Cy3mFaJXLx5btrGQKezL63bDpGaUZSLS6VPpJqkZBCwaV2QCjDm",
  "key40": "2sqUz4UN2Xq82DbD1PS7gJx9dk2Yoh7QigSfPoFq5MbXnmrdRSh1AQ7gDe2ud2PavbA1f1m4BZFk93ELCQLLv3dh",
  "key41": "45V4LJp6d42CUa737vr5bLzfF5Cu6kZych1WS15gwec5ZrQfHCySSkMdc4dBn8ZLha3oayFxNMCuayXiWYRkqrrr",
  "key42": "2jbBpBh1KWzVYJ5jZkyVYbk867WwRsxzECLwX2pKdj3XodKCQdZSg4JznWQMdrJV684NHZUGysVx6JijHQdvSx6b",
  "key43": "3SMkgbc9qWAn32qrwc6odP7YhZk7d2eQf3toeMRiP1Jr18xhp6ffMJHaEaNLB3WFfbBCdV8sAYUsD92iWzKPciMU",
  "key44": "481t1a1Tv3GMwnnhBbC8AaA8Jwn9KLZp311BGqv2smumXhWmAmcx34Xi5hTi1H6RknbXjbQpLs4ocQk3Vj9y5J89",
  "key45": "57kQnF8wzLXEeyQvFVTjF2KSjJr85uC6vvhNZCyRGNxVApuMRHvuZ4LBnvHmQs1AiCuhaGG6NFqjQjNvjFKXG9bj"
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
