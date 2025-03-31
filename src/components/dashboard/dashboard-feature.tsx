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
    "5umgjL4R77KUMiXc9uCsiwPvZHQvntzLM6vJCxwwSV2cgRqmeCgFrtxguefEYSKy2iKCygRfR7siwXzTXosGvov5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rwwXBY3L91up3fj7SAgffth9VFW4uJcNfhWaHEpMPyGug2T8FmaACFbpq9SPjKnc61vvqDXkHsVRCGUeiEWjai3",
  "key1": "5GPQ4f1rFmVD7iPJcTatuRGyGD2CCAaPP1iX5tC7Mav3jVetHW73cFFVBg5q4iFcvdZpDf1vKoHy7ohh6KCpTZEp",
  "key2": "fUm4ywA3tQwLSRGndeb7XMFcbURGSfD8n1ppAZ7nfZaKX6oxQVJw2psYxZxxdPQnKJFPipFM6RMsi98Radvtzoz",
  "key3": "5ib3meffi8q7Z2VbrDQcALaT1EaDqRCVbDaPQLCLPLQ2GofR31odXLiUAi828LWoQxG4Fk2ATUn7JpxHwzqzdKjz",
  "key4": "54rRLo7roF612TRJAFLeZkU5HWf9T1xiHHzpt6JfgobzgsCk6wBXuiu25r6km8MB9S3cTDdSGWqAnpeaYRS4iLGY",
  "key5": "45i4XRWE4wKBM6Tkdb2m6CRhdQGbhFppEEZWTtagZGLjGxUN7jHZ27bB8hZxyVAvVp7HXri5KnCY3xuFJS2uDQVj",
  "key6": "3eNsYgbctzkFsiT8jmGiYwcMNXNj7QquqvXnLVbuZkiK6emP8wsRzFNyNvCWMyt9a2NtyiNcBJ6X93GftvVtQNVf",
  "key7": "3DmNJvtvvHQHo9nfnTv78CTjCY3ro2aw92Mvx4AX5twF5UAaRv3BJRg2mqkTT8VpsJZ3uQajm5ecBqeMmArYuTHU",
  "key8": "4sA3JiZ1S7Di9EcUpKBDj92GsL4LXzHTLgdbx8bFtJRhaEAPz5nQSa2EgVG2Wj8EbapBPkUQpmNfFv89EQKEKEMh",
  "key9": "36r1fs48R7i9Du7E9T9YsK2Kgrm7TGthDDVKRJsyGSwv2ese3YvqxZKXBsXw5FMbzpiah5BSE6jn4zxo2U9RESwj",
  "key10": "2zZkX3Bpy5YN4oJgMzLzMXziYwbajsRdbPfFE1bwVf4oXwkQjxf2TWUoK1MfFnwWszk3RinSq2PPYvdCpXTPLRRZ",
  "key11": "4pDptZ4tAGBwUTN7yPU62MRimfdx2hubofWnhSFeufF4ooNS5qBSJH4bxkAh3LEp62UfUjW1NeHh7TH246eGCNzD",
  "key12": "5rAWfgz4yZeeNkmjHZXA5Gx2AiGeXsBN8P7FTzyJoeNefVcDJXpZ6qQpuLYrRKouebATNWGei8mzxH6SwJdEPrfe",
  "key13": "3rzN9MQrZncP4nJs2zxWbWRWtuAu7qcc13mZKzMy7sxmYSnWYQ2PviYG2TXoqt5abcqMhGBrtcSHPDby5REaXN8F",
  "key14": "55XMjxaUaMh1vVGh16hFbAEETPiyTtppvBi31qEb1temJrBEmuf7skvXaq6jkk1hX4VHCeRG2A7JgoSiUoFVN4yf",
  "key15": "4c26xAeuoPHH2jhTWDrTm5wsTsaMiSrQwou3aA5xprp4dH7xvhgANDXSQDoMVqZcWomnJJbgLWkzRNhvyRXosGpC",
  "key16": "3gNfbgQqMfngpYzt8ZZAqNU7GtH8GXBYKNbzPnfrq5uyaTVjQNycMrQg8y4uXQUrZmm39DhavGS8LJBM4ETdvYg",
  "key17": "4JeigCjegPHLuwWpcwzrbzeGa5Rta86qsbgRnaKZCTW8MvvQSXbgroAyLmMjFZB3rJoxo4utyYNanCCvS35Mp2r",
  "key18": "4SG5BMxAqzhMT9CcrDmWrr6kjsscDRJqYPa5s1q1d4z2X9Wp5rwzCyCyi5GQTX39Sik9mBoZK2tPB4FD7ntDoxSN",
  "key19": "2BJGFKwoS9sNBiqBPygMjTyApRYMjTwqkghVATPskb5jUdUuFZ8Q96VSyULsBmWWMTMwhqtHmsJJRFHuEDyr32QQ",
  "key20": "4PpWnHkn8ER362LChguMqmiPbGfWCPH8RhZc6o6PwD2yCK72pC8KnGKukBGjbXNMyKRN21rdRymUZt8NfREknfH2",
  "key21": "We1hQCJrVdsoYYy7BWopJxemX5QBSthi42jbcBjBmBJ6r9WdsYcNqs5imp3oZpNCBpLGTYApw6Tx1atvFkFknFy",
  "key22": "2uKDf8ij3BnFEkK9zMZCXsbFxhq69iJu2Pt63JauvH3HPahopbP8YomLcP2t8xhs4Evf6rfN2TiHbDn2PafHzu6P",
  "key23": "3rfpB86Mm87f23TKxKVzPCwkhX9j4HKAdkJxkJkQ5dgeXvkR3bD1kR354bFzMECbLDzNHcaurGj2X7DjLXQMEsKp",
  "key24": "3L2ZQxWVHHpvQyBCNHVjFbw2SxVJvKXuoARoXPrMKS54rD7tnqRSs2xrUQVJDi2QpPd9iStsWkhE1eP7AES1qksU",
  "key25": "ZrMRhVuSnk9sm6YNaofwoVZo9H99kEvmuRioohGvfA2eEh1yFGBgwKmGX9sKsoceQoEZjafvB8JnUtapgZ8AfGz",
  "key26": "2u2PV9G6p2kWHSY2dzSAE1mqMofpBG6RYnRmWDdW7yfU5VtBWXFG4rUc4AYP66kjHgadRtSTbTQuyWLcFeH8fczH",
  "key27": "49k99rkq2rUQWWpVC9jywEMSDib6QKqNcJsbcDfWUy4KaULMhumJBLDvQ6uhrMSmc6QVHRVZeTuGMjrV269s1iTi",
  "key28": "2HL14doPzjQTqRkfmcLDdRdk9YmatdfeJE7umbp5gBp1K3TLdXFruXdJbMezHt4ptWm3yBxjnAiQ58RMn5oGyYZk",
  "key29": "3n58J6ywpCv7vG9HK7JL6vWDB3FpoYrG8A467EXVDks5UoJhj63j1hbGQ7prcKEcGPHVg85ndzig5vbRMC4mDm7",
  "key30": "4VNkUnbyoRwnKSR8ADUyAMvjpDUnxyqZxJBEXW5J7FWMLZ64bZyMvwvc3U17Ro7KvWD3c7M6E7gwWopNvqWkYpf",
  "key31": "MDbU9orGceV7wUmGMhp1GAfA6TPJZaaDe7WchpxcLTaG1kUVJVbFuuMBUxaMj6oX6fZ5QdLqYEjM4Cai6MrXxXF",
  "key32": "31usuX4kxeCgdw6u1Pi4NWQS6FrrXfUtEBcSbP26ZVHNQ8EWer1ow7MKp1MVUxt3oLDNJisR3FFqYXpzHWzpDawH",
  "key33": "3kKVXoduifD3P4rqxKnJe7yjDMpBY8DmRHugLmvPQxoaETzFeDY3gMuRgLkJf3ux3k3Hi2DhQYryRzRsbz5AxZhx",
  "key34": "3hA4DAAFW29EXxwPvCFS9bE4X6Wcw15uJ7a3TC4E4zrubMEw6JtV2qSn3b99NZxnm9TazKRS1EPdr2XyXhE69xzS",
  "key35": "3iYmTLheVzLqBF7YZYHAZYqnDpDJu1cam2bveeJ1ThyMiVczzmDooC3mMwinRJSUMVG7FCf9rd5FUhaAF8H1QVax",
  "key36": "mvVTUhBhJUrYFooR6b3VWhv42hZuozjoJTP73sozs4bYo14979zq7u9Vk19Cxr31j6mwfGymedCJVuxvazUtFoY",
  "key37": "4oCbtPvHjwwx4qvzLq9juRTp2qMwvusFXY9UEPti4otkNpjd6nGqC4KhM3apKMLt4wzvRcYpPm5MFVjW562SEAhR",
  "key38": "3YdrCFEfdfDVzkFBG6kTyzovXrh6ChLizKDGFS9qSUxyEDTtYUZtfV99Rr1qQjTqvDmSBg6AajKg2LEY7vGSXXyP",
  "key39": "4Pau6PhKWDPX4xETH1DEdR7DkVNUZBtFVMsQhd1pGZKtzfkyBgYF6cp1Szf9k5pqnMbrubMcecUCnyZ6xJLF1bwA",
  "key40": "4j1gnQZGo4CrAHD5jGaarD2RXYhvqsF5G15qhT6imB9kghk6jzpDHzrpLJZ7Ui8uLPJvDdT47smqLghct4C8LS97",
  "key41": "4VKpu2WYD8DDqxzQ3G9gmd4Jeu9UTRzA91y5iuBMqqJdGuuoA38cAcHf2Uhg6JjRtAmU43677nZU5qA5bDHN8j4K",
  "key42": "2j7g6MYTJC7ho1oWiJTkCAgPUAg9K3wcn4qA3tEsycyVkUnWYKSkZXZ8BYGhdTqMaMPArQCXGQCc2vYzVkTtAsfZ",
  "key43": "5f8duMypTE21Ds1vy5JTUamjX3rHnUE71kYWnZaNNGidyLzsGDpU5VSzf7KT5pE6AT5HrHXtJNEdbNXfDdb324tZ",
  "key44": "3y6t3CB9pYW65VaA5WnMos8ssEBPk1GszeTy9wNdhUGPVr7uE66dd4bt7ctKspZ5M5Vt2vVTKji4hCASnBEFaf6P",
  "key45": "4F5wVotCEzeDhxGKSmqGodugcqyyT9sUmnAjr3unUxXkAwnfGxN1y93zBg5mPaTpTMLfrpoMwPa7DkgLeHAy59gQ",
  "key46": "5PesR2Uu1vZwR9iCBJGDr4bUoM723em6PVJLB3xfQLD1s7rGgsAB3d6Xmr2CJAjgMHboRm8aPFSLrRpJZwcF2eBZ",
  "key47": "3sfv13PZT4EjrhhotbQuLhzQPY3R1BovEoPtxo1dnKsrNEFCniuPUoQLDhDfRiUnUMXg79W8RoG2hwbui6XXssqY",
  "key48": "64Jx5TeewULtRdyTLhEULCAjYgpm91bKTgHt1zDqtbRF3HopaMezwGsFP7YzQa4cWiBPgXwTMLTuD2ervtqzM5b7",
  "key49": "51ueku1xCgSsEYZAG52nAPsx7DpfBZkdU7TmPGZLUhHQ8VwB7LxJRCp9CX8Z1GsTV4cMhL5a7rqZbZENidMyifnE"
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
