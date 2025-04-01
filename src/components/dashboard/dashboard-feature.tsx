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
    "3GQmWhWkkEifxy9BCjrAhHa3LHDvg6zBKernbYHoRa2tGS4oivfAa8KuyAQS7wY76y2kioCmpitj6Ab1cFuAXyBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Thep5PqNtS7hvHfQHFwaSJcBFjUL83SLTTjJMvjvF2HQfe9PTJ6KCUP5WRtogMfcuPop2Fyrt58vYA5WCJRdojY",
  "key1": "hy45PXBaS6yAiwQL1kKfWHToPitf8KiYM8eNVWPcaXGcUgdFoWjCz5mrNc2hJpLQw25FygkLjgUSciF4bjxgUmw",
  "key2": "vDwGZJJ4RDkLdWMSTSqc3PqmtFWvcvqBcwEejSwEZhqzBBuZJ1goNF8nPJTJUXW9qaB593FD7ZgTaDJg13JwmsN",
  "key3": "4JQcETbsfdqDhQwrHU4WUAU2fHcGWroLsbTSc886vqFEhrLtXyYRASWcbtfftfWgQT7zEXh4uDf4Q3bVQGyZRBN3",
  "key4": "2emCpsS6pEroxYXDRq4iwjNLcdJpyCwPuZemobCvDVjgPHm9AaQx9Fg6dHc7eZexH265nA6f6MzD9Vu5TshXaRLS",
  "key5": "5T8i5UjtqTDRQKsPPBSvVzqGSHnGyZKWir3b1TmbGGSZBBXKF1MwQDDrVqTvAT68PKZUshae8pqsCdqafn6aSviD",
  "key6": "odLH61aA1W4w1E5vua95B11eepMSSB4DPcX1NaXyKjXwGeLyFGKPDn4iZjEjunWK43GeikC3jbHpFVtEWC3kGMe",
  "key7": "55zjwPZULfwDWb1vg3y3nVhgD3MX2ex5QBkYSy6f5JRS6LTzcSwNhGevL4qYQ7idF1MEdeEFGEPy7xHbcP9E9Tw4",
  "key8": "4iD1m2P6hFd7kFEdDXewjJUghHnw74Svxzby78UNeZcDxSHvPhVDPFjFzrQEsWCZ8sD8LtgcxRSpxSmZpRQimUy9",
  "key9": "tqbDEmbkw9SuLmptZiuiep8wF6wDreRxfTTTYAc84uXuCj6Qs2XPfQ8WwZeWkboHrKkJtvjfwYoerDJ7BP94vpB",
  "key10": "43CaCiyNe5PbsX88Brn7HWu78GpvyDtgxAwjDmkQbBnFTYNpeKiYyieY9KiHFBSC7CeG2GRxstmbar1JqEE2QTbT",
  "key11": "5VC3qdxyLy9SVzwffnXAG9PeZAjtawULQXzm328aYbuvnSn1v5QDbthpggYjfztZup5uK7v5T2TVxTAAG13KBfNM",
  "key12": "59JtAcLxLwiYradhqW8VpDuJSmnwuiV619DYtYtmyPzS31i8DmyGFj8SKGXGCn57HVHv4L6aG6jG4mEcSc7zMqtL",
  "key13": "3XdoeCj9PE7shzYYmgDbnzD3Y9bUMPU1aJjMZAgNcCw7S1SYWg9oo9ddFq8KPN6TesY2wYZC5LxyKmsAmpRZL7Wq",
  "key14": "3uh5AuphkAsXy66S8BZWRh6Gm7vzE8Wy2bdjLteqfcktEimB9UeprhC1imX6pxmtDsyyQES7ArLTET691CvHFhJo",
  "key15": "3aKH1efRbvmg9sKmdD5RBNSEMvbf8pi7TSsCZ5oGvvzi2jC1qThcqhfdgxzLEJapB2TYrVPBBj1r14Fd8kwkjz3A",
  "key16": "3uh9Stz4sFYSAHMBWxhFpASC7oNX17rhMYDLmy3bo4u4BCydj61ohURfepc2pPfEZwSkJHqVcMs1kGQ5N3L3jZbA",
  "key17": "2NMojTXUdMnmVx3a1HNDmQpbDpqAeFKejYEYwjDVqPMbPM6eusGnYQg8nedvwNjtKd7ebMQsGuxmoXGnfjeQsYrK",
  "key18": "2W5cUnbk9f6SuVDaqAVKynraRLV1g4aN9GhaVDc22wWj4ZUjhfnYtcm7HFzajxkuij8KyEfgETNpGf2LT2aVFoTw",
  "key19": "MGfr5j6LfmouCnxSbVPkXyCgDafWF66TYbB7PXebr5iQqxUTRnigcEAuMFMiUL4pfXNPLmaN8b7kTQNv8TrvrNy",
  "key20": "5wPp4MnfL7tcodzS2AXPRco7QMLKnixAVrkhwsodU3ScNbdbG5GVJQYzgXLSRZBPMw6E7agnXkuWDF3k8YR8R3do",
  "key21": "3mU47f7CqrxQjoKPM6hzTQipQbSFAAvYffgvt3dTusZFBk2brZiYAGnB8mKewLC4s23hPMtApzKjMPTu4qxEXwPj",
  "key22": "34z2LosYfHnmxZC4dBST8Ra9yFZw85ueoTWHcBh7B92cQqNGSdC8xTWWgCJRHj2GBNREXCuXyPVvAut14kMXLqqz",
  "key23": "QLr9EJB9ttgMdwyRNw7fW1wzwmNcteUVGuDbAeTAUj5wJpDk7YzqQeZUkodNFXaeXsGMa4Xbbj94fmBQCwVjiBV",
  "key24": "2LfGYVHw9DHtDnQ2rTkXmCNENr84ZHrb1NeHC1ieZZin3pVDj8vp6bvdk9hwmG7ynMvaTaBs2jx8BafF8tGxbiDy",
  "key25": "4vSS52xV44KHsPtMeXU6bipFbAenh47cmEQ9j1Ur2WFRX4GMXE8kajidAAKsmAaTAhKiWvD1WUpCvP96KFtPwV1Q",
  "key26": "5KwiZ94qs5QRmvoAqcggDQg7TxWxN8BqMb2GxqkQXNU6sXU4NjgQtbvPBiCsZcd1k4EdtWc2QdHXebNiBu5AiKsH",
  "key27": "5RhR4UZWzeU7Ci7UyvvCorRgdEXAfKAKRGZGhye5DXUHX5g2prFTBLzKHjeGWqhrdaFoimZF5bz9pDwhERmq95qA",
  "key28": "5oWNXveiwhFsACNGG8qZq9xDfrXAVUrmR9cZYuPnm8aiJbyAyQQHcPXMHaMX11QMt3nrJH9RofQXxFvc4eJoVUN7",
  "key29": "545oJTtVM36CrcvyZ7L5D1Sj3nuDYXVfXveS5sshiq3sgSCVnA9NLMUwedaiTy2h2cLFwUei4vKEUFWFwGMWr7Wa",
  "key30": "4jtYougPrDiNUnTMkyDvkwuYbY2nb1rmRpjeinUMJFpMTGeJJU5RaWSegTsWpEUYPPsRcSEeetLVpM5i1rmtQNsK",
  "key31": "41NYq3aYsZCALJdkGFVSHyCUDYp6aRF36z2jdAaofS4VRCZoGQtP79NSXudosgpCuer4MvwcAjHRmQxFm6Rx5eSK",
  "key32": "2s5RKysBP5SH2FJfhkXjn3MuPcV5FCFyyrTHAMX76dQKsdv5cH3CxmLtdhox46gyLB6RCq3EZvEQWTQfFjeGdDna",
  "key33": "52yUyaF7a6QK1TDVTPZgdFKnwUBgUy5EJvoafj8NVRRXjo5Daxq7R1ThjLnPDDbm26YFAnGj5q1LzpoGpwnEN7c2",
  "key34": "3HEPVsHmG6tWYrwrNG1sfYHkb3j2jkpTQmnFjKMYB9nEuRoHWHCK7miyBZH7XZKbyZhdPvnafSTHLMBQ9cbAwyTj",
  "key35": "T1QACKa7TL4skmGXKKU7FhjpbqAoHFowfQbSd97cZs2qDU6Tb3keQgNA6SgHputPRArzBqEnkT1SfjUYwruSN9t",
  "key36": "2hkhD5dNadWjDndSVFadERPCRVScmpcnYefh5iaRexKiq8mKnYfFjQoTJkdW61fQkTqZK6hqroUKTKddXCRuy75z",
  "key37": "2V4wRFUJkkV1FQrBSE93sjETk3DAuace196i75AHymhutxHEdqBRwALCLRrE53BfyDFCKmVUa3YC9iDvbiPWiUkP",
  "key38": "5AGrKDssZRSciEsdajBmctKp5GJswx3QW1A7AsXQ62sbCgQwjYWkydYRBppiX1s436Lqu2wyAMoQE9u9fGcHLDMr",
  "key39": "5JM2bp4XU4EP1rZRCtx1n1ErgWtkRkwqECtSVk7hMpzw5gJapiq8tLn6aYs3SfwBbvtV3zMytvJLrrqsEmZ9bcTe",
  "key40": "5UF1VGatBK5qRacYckoGMwo9FFZ3zFwo3nJNm1mVVMowp2d4CCtX587vSYtCyLHYqv4haj4pHFnbfSaBncuQNQPq",
  "key41": "5w6Gtvt2aefi3j3zpRzt8Ug2UV8eE1JAJeK2LVftgfc1pSPnTsjtJZB1dYnsdWQDB4ZuuGxokwUtps5tB85eXog8",
  "key42": "G5G2shpwNBfXyLQuciW3npKXRWCfNbEo2w5Q7XY8FuyRQMzcnxAimduq7pCo2gzbaKpcgJ9Wd8f99AWpZuNstkw"
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
