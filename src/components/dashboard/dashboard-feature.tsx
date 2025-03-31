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
    "346jWPitCDmgctRCC55o2mBKJKMDWQKh3WKPL3kreQABx3nHKGhs1t6uiBcivncVzXq7HVoa4WXzMtGSmGyMnQRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZAihf6sSXqdaxZWMnHgmywma8siKerHsrHQZGz1HbvXfvScnQnpHzeN7bJRN3SEVTLFnBqG1JzEoJodqv2TWR56",
  "key1": "ce64KY3WqcYgLyewetiitm5r82XoaQsFf1xMeWhKnARTYszoeWmbhnQtJCfLto4vbcUsxmDANeKUeTsW8X8UzVA",
  "key2": "44srePQFN56AjoKNZyseRsUBZ95EJFQRvgEZ5KZLjRHh7dW8AQ7ZRSWavjmiG8vEccD6FjTr5PNZALBL83yZhKmF",
  "key3": "22JFge4vJhegLPyGEfsRtKBBdkcjFMQyscNkEnQkfAq1d2ZEspFstEZeenaEWGQfamicKnHLFQgveCdkuLLeG3C2",
  "key4": "2FJhEtkuDfeYPvbqW5zTDadFz3aP66yAh4wS84G2qEBriePGXKVzXGkRvfv4ck3rKXW5dbdz8C3zThG6B5fxnikn",
  "key5": "5eSYJ8aa8pc3rs5NoRiSmetjd1YwnMHLxt6wPJShxETvWgAaepaA6NLv341wcheRjt4zvm16cJRS5taBVaCZMbHP",
  "key6": "6BaTgJKbG7Skfw5y8z8DPYGCBiGbg1S2LsWWT35cWEwNVayysDfF2NMqtqS9o8cjdHEH6kNpA8jWzuJPP9TTDAB",
  "key7": "4BoLYbjGraSbp8qR7CiJBkV4AvdhK2WZyt46zDXZm68A8ZRnv2oofRp3jVqLYQaVsnknJAtpPZMYohj8kHFUeSzp",
  "key8": "5xq6e3bayEyDS5frabs4BVifbeuYrgEzhe5FFRMDT3aL2xGsqmqwaVWGtKAzM2aJPkLAweU9z1CyW9xHYkC7xYP9",
  "key9": "4huGc29LEcriGjC3YrGxsVD5NYdRMimeq687eYsbWvsuteWvqHSU9t4W7BdBLPD4TE8FvGJExwqVyUBLXEhbeAcH",
  "key10": "5QRbqwdPyoKqrQA2Pb485Bio1CoXqtGNtgCtR74TJ9Wfx68LMsYuvJXdjzdMLXWhxXqV99uEuXYtCBUsFTSTpvag",
  "key11": "4cbitGNeLWdAHz2NxtLX1oDhY62uVbRBZKE72te4ab8wyE4PwLaar2b1z9oaxvzQk4UZSfCZqoC6LtsBkSPfVVXz",
  "key12": "Pc3FEaLXrFpN1AwnPpqb4rXebbaFvd5JdrwxZL9N6a7q8cae5fs6davmTouhTxKwBWsdKu4VrPyk6uNvHfAkRM1",
  "key13": "5GzqAbwpgRj9B2Wa6KUft9jei3ZuGSKkjYMvZ8puEtM3rc3NgaLU7acKjeacDm37F1JySPfxctuvkfPY39UndmzG",
  "key14": "JhAndB1ehPZ8LNkoKMjKRq3czzyQqHgWUngtzrwRdTyjH9SBjZVux21RCsSTkTh8ddyKtPaioiK25UfyGvQvfJ2",
  "key15": "2iceNhdeas58Wuo5c7LQ4fF5VhdE5Nj1X7dWrvN7advE6NKQrJEiSS4UUJkjTuvCKSCdUUQgmvq84Fne2tx7p6Vf",
  "key16": "3Qg5bMxVbneDtGQv6dmY8jmSHKpYydg8D9eQJnF9g12uKQJhFk2ETq4tSFaE7VWp7R2MsX7Q9NKQgsbbbW2fJYgL",
  "key17": "62WbksUCfYZsvjQexELw3SN1tmE47gRFjXTyiRCzKzo5dRZQnJBRtipz9GdMvW6AQ9QqRru93nytC3X7f2sNp6DK",
  "key18": "3HjqcKTApSXdHZ6b9cvpbzqTUs1kKGa7Sk1upfP3chbsTwTZRjZAbTZae9eiuLHpxpYVdJuT1rGzm8YyxswQti6B",
  "key19": "XCQPdRn6QijwJfsJjmYFa8FBJucSsatxDv1XfQPXJB13VtbSLY9Nd6BCGQBQevdnaugSXa6347bJ37qi3N7CcWL",
  "key20": "5KLD8HA5mX5yM3UVev4gopZE4qxGBRbtZzFLFSNzjbsK8GGx1ThqJHuywgNMzqZUBMTSLLDycbDk1RrvbwXaG9cy",
  "key21": "hfacut59XaNpBJvPjba79PrhDwGgsT5NtY6CL753odbLgShsLtwXaB2VX9mpxVJeWz8C768SxLR7y33MbnmHoX9",
  "key22": "3LaZufSCQPzVqWvSon9vL65mTGrnmNUVJxgdctGFHdienhTRC4dTn4yFq1Jxre846xoVaSNKvYqwx9SL9fwQbu96",
  "key23": "PVkYyr2EyiU2oAAqSQYHEhgp2sGxm154fmHdw9z5jifoHCgD3EYwNy5gnCjgDD3TeyJG2PiQTUowTYCFyBDEytT",
  "key24": "5n9gAMesTFppTsGzyad5tSLEyhTo5Vx8EViyjc5WahQcbKWeNnHnDzonVuKS4rt2Kby5Uxs72vtPGX8BM7U6TkeD",
  "key25": "dNWffpY8zHNUnM4qMgvjMemw58NvAgGYNtn5UWATmcurdnGnwAk2qK8166K84YwxUkeGsSeNfd7CYka1ciiBhSj",
  "key26": "22Cfp8NMptJWmN3oujPMcnMXNupLAmv58WWCZA7qkQHRjVzYudhbWPuxuUvkbka7YnKEtLe7Q9bBnvgJwNteAzhr",
  "key27": "2TXKtYWhYrepPnu64H1tm9QXFtZVaPqUD4hL8CnHeGLocPnwM1JEttHsa41GeecmrJ4ey7rPekU7rdtdqAHPgBXT",
  "key28": "5GzyeuJCGkZLmebk9aVA69tBY1uBSEFcxCAGRNPxBaERWPEjTSZjubndQ6T8EDWW2A43PLZ8gG4rwqrz5euiyHLa",
  "key29": "4NQ7VusH6YTHUxViYEypC9hLWAyz4fARmsJaSDQxecLY2HcRUvnjtbNWZqNippt7WDkmGS36g6WZwDeWVWF89UWg",
  "key30": "3iAXFauHaeE4kE7RyFD2ZKgHARkgNLHChcek8jguRLTdRYC4eFjAy1xybDSNzumGdDK7TrgeKXHeB9d11Wi15pnw",
  "key31": "2DNtVMth7vLCGZtqKCYLxpPGC19UejcZqrffhUHqsmhx3AqzTL8K6p8AdBRpsM8uwUDNHszPgJEQ16WhwUmimdBX",
  "key32": "3fQBusnPBLbQ5yFgL8KZtDpDUvjvVn1oNbd4xe4zwpkebP3ABH7awS5P1c8jMQLJy27ikUrJnEUQx4d5JSJdaZRe",
  "key33": "4vVxVKbmzmRtxdMajvMtqCAsjhiTCzSwoETRSp9doS1tfWL7WoGTwRoDmN5TUMBc6Q3Hgzx9JXaS6YTgV75dBfUT",
  "key34": "43MDhNQ51H3z788UvCnFxcA7du5ggLvzg9MoPS5GMdTemuc8rTLZXHaLrqrV5m4CzN1Va2ZmbG6H9QUoMKhvsLrK",
  "key35": "tk7n3wM7McDELpLQUZi8dF76G91j3v3nGfa6b1FH1kLrM5N47CoNtUmfpcnwWJ4pupdeeoKRpCdTi4BP26ZZSFM",
  "key36": "2voc3MWaxDyrh7mqLzEuWeePsQmKsJdLKFEerRa7gWVGBgctz7u1tNUs7o6ZupE3La4GAGChwbZ657ReNyL9p9Vf",
  "key37": "S21Pg4sUZBrWHfAfRz5yfeJgpebuWLCidZHp3bNtBEwLCPQVmZNGhfymffxkJvLjiHQxjDuYPvotSxVKGhD4DPg",
  "key38": "4yCUtbM28h5dsHjGCCcxr2oUEtXrdWwKMqzPQamxxyLEmSqFfngtn53cS2wkQo2LxXq1nHDX4KNen5XSFB6382Sj",
  "key39": "4G27szijkcsEbBWp7ikimViRmDGmfSSEQt5q61orMH3CdcrTcG1VWpm19MJL3EdM5p5g4n6utA3k6rDBcify6Q8E",
  "key40": "5csKHpt6URuJ5549cerTypo4D2W5MMkLofNmbEw6q3JGW6rMUVAiv8kwvP6sBgkhxK1AUuAhVz7EfCJNjHCq22ac",
  "key41": "5F3MFqvhscvUwE1vrJXbENTfoz5SBD8GcKHq35GaQZrGaNJCbBAEWSrXxjiGjMqRzeWrSJo1YtALnc7ZqB9zacUq"
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
