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
    "2nwBbWAvgdgzp54dLZNm2CqE8sa5LyhE5RzYgEyDqoGYy5x1guEPzsX199oo6gaGosThpqAKEM4dQqvwRiEBPZMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67R2j7NzVF2ziGY9yGS1NWUSPJQL6FvRAKSY5o2s3NHaXs3htNtUjCMeGCmPmrtvdKdNGyjutUoWoCjThb6mMgfY",
  "key1": "6LsWgTDWp8qFryfQpGeYqq3EwR3CDEgDbx1rMMvw1Py5Sve3nFyxv31T271u2uvSycFgT7ZqiUGEq21aD82Jqxv",
  "key2": "LrDcCxko7h8xsaLrhd8WY72xNXWSRvPEEk6NaVc1Cyy7sXCXPrCdMLc56adNyZuxtkJ3dzbnK9EdioRxwaGZcSn",
  "key3": "4xpE3ckAQCx5Rgs7q2q7Mam7C5MYJgfQAftvxS5U18eAPs69cWjynaFpTvv98EJQnEc4KgSqgq1FUUotXz5ftN3o",
  "key4": "4KhJuDDYJ6g1yixsjiDjp8Bzn52PuWutSm5eLhbQmCYZ1eiSczMp4yrioRnfALePcYDxGkqufSiHLEcfgqQwsrjK",
  "key5": "9R48UztPQqmTSTthcfbyUF8m11V3CVS7nQKXxTuT5psQrtzrsTqgFqEwsCy6GscdRWK3uDJhaLGCpmcPriATHF8",
  "key6": "5CBT2zwWwgipnoV8rScSZkPtVPDdvD1uvKAKTXSdTkVYhR61HZKGDnseZ9p8EXezqVDyHLR7M9vrnsKdRCQoj5N1",
  "key7": "f2n49ZkdDt2QcMendQWns2b3ndD2pUnATktthvo2iZVcJwcBoAJHWYQpL9uXPrUfLAwWcD44T4C8dpHZ5fshqKo",
  "key8": "5PGu2ZebGyCAL3bpJ8kirg5ekjpkW8a9JN6zbNYssx2b5HgvErbkA4WFJZBSPTtPPuwBFduWrcJ7FrBYpHtrvGRi",
  "key9": "5LyWRJJgqDCu7E4tTZcoPxn3bHjbzak1w9hrzScbRzaX9X1dKtFetCAgbkfbyqCXXjsQmxAQEQETZXJYXysVTpyy",
  "key10": "DCtEJmX1UnCfGecEWm51JHFowje6SUfD3WHGzdRfEqSCG83C775a4fcM1sJhFVumTpZMeMjN3nQ4TQ1rVTQtUCh",
  "key11": "5yVxYEUUPUAx2qLcSCNstS4bSdMh8aR5QjGUdP2DeUcwKp1ygVCfAUViGq1FzSCRV29X2rMgKmzEQtdNHLcosNVw",
  "key12": "4b5RJnQZTsbgZuEwezT27qQCTgWEcU1Vp6d8jokdXv6KZK82jZdc4PTmZMbP8oVtYKvThogU5YGfXtWJj86ASHCH",
  "key13": "2gQ44ubRUypSzwkZme1XhjwpBViqYja4k4R78D3MgsavRvuJv6Nv6upQbGHHeS6hu69XmJkRxhmNBs8YjT1uxCpe",
  "key14": "4hoz9eU7TsvDxYwAfws9qZWWWRpvDC58CbeBvaNjAV1brEz9wxFno5TBz6DfsNMpa9rgA2gNfLFRfa9bjKD4r7YU",
  "key15": "5srFsjdS3p7M6zFCh1ntYkbJrneXmPPgYiWRtCry4zWFAqywYCbDxhwo8VbdqzM25F4cVR7ZqA91xzdBRdYcwyV2",
  "key16": "39tZSFSUniZHLNScopwmHBFYWvDfSgyH2qWkQLPA7VPK6q76jeoW5uyyS6Dehkqg9mkgpERZjFeRzAcfjPCTypnZ",
  "key17": "8hMf4U5orS7fp2Rs2idFTjdj1TSo525C47kzWidir8aWcSNnbjompzuWhFU8qWv6Y7T4opfqkyuVEDb2Pwns7LW",
  "key18": "3FBCEsdkcmdJMu8MHKuHJBSfrP9PYwbA9RDfFvT83PgGHTXZzWikRW4CJPKdBCWFa8i7srUFUKEGwRjcpNFfZB7",
  "key19": "2jAfTdxjk5Cyukbohr6GM9DDcjP4ymqQFf7Bcta3dPF8id9wJ2DLfLwanwDsBQMEUZZfcR5FeTM4Y87dLYHwV9HN",
  "key20": "3KhvDSavHBrAV5eDtoCVrUSwKhp2mnr9tLqq9kmGMrGsmzPwRJWk93Ue9q6fr12ECLBRVK62tqFSzyMdAhhp4At8",
  "key21": "43nymY1ohtunuP4vBxM4U2Ugcqjo2cM9KivVgcvbCD3P5ZGCwBrcfYTmTSEeDQPyebP8VvEbWQQGAdDQupJCDGbc",
  "key22": "47Momoq1GbE1azSTuGyGVppdgvf258p569cxYRBv45rTRTNJwGXpt8KzRpcd2QWiEVAqv6sBhp6zsVTZKTzQb7ws",
  "key23": "2ehdgcvNcPFh9teds42PuFdz9M4Bsyeee9eKRuXUfQvxH2CS8VqfnuWRxbPF7PFJYref9LfxTdJ5SRETyDmkoTHV",
  "key24": "5s8mVwiKD51mdxGE6udz3961iGnhFETUgcgfq6Cc8vsBKZQ9aCkSHuu95KrCMLzaRGZSwNVE2W8ziy2qdiq6m7S9",
  "key25": "3zte4RwkGdZoyGTMxRBM5UbUbEWJX45fSKoKDKLNPjzR1vkf8hGnk9QZEeAAqBH9JJzk382pve7D9aTo4ajskiGc",
  "key26": "2EfmugqswvTf3ZpgXCeqUivtZXWJGf5QdBNiAiFA7ftstuwRHQfwrZHyQGezWnmjqSFPRF6Ebm4anDsgE2YXsMQh",
  "key27": "3oUyxdV5AALtAbNUSegeo6EgwJC16y58nytrV8qt9SzZUyfTLtKimXMAAYXY1BZC7Qe12zS4JRdQGbCQP8A5V4Zv",
  "key28": "2w9U69yqgDgtvW8GvuYEfkeA9Ag8vqNwdFreQsCn7R2iqMTKJ7RTCLrVWvKy4Sa1cmitNasNSn7qdyGhT8Fa7Mfk",
  "key29": "2coMAyQDdk6KSZYuoqsBzn2FNyQ3kiUxTu9aj1khqx8sFRTgKyBoEV8DCgssq53Ks3ixUMWHH7n3uRnySVWjWa8z",
  "key30": "22okoDUoK24vuQmhPnBcnRPGawLx8hiC8j41yvYnhn5tsAFzCjTJMbKTBzQ6ou3YuiAw3Ec2y7H4H8cGNLVP7YWq",
  "key31": "mLPZqHteYdjbhfCmvgrtL7ciRLHzTYEnu1wYVjYqiWtMxR9udssPLL1mptqvqnNv7yeP4EHJCmVoBX7oCYNcsRN",
  "key32": "5ZBs5N1PgrePV9m6SFfWcrdTAZHvEHz2kSAoSsTpZLwjNPMxkdBpMWdtGvwdSbUDMTcFXupjLz3Ly4H1fEJuAYS3",
  "key33": "5MTevkFxSneuVia6wHg7whz7UTWnPNGxYrDU3RTZatMXjAcT1s3QDm7SSDPtCRrYzaHCpJiTr5vWLq2wky37Qwd7",
  "key34": "4YWi7m7WrWWVPRY6hhaYvbVjk3p2u1QkvSyebvschHCxooE5EVz5Ka51uivgK9WLStaLWJWFsVS8rW6zbuFLoB2M",
  "key35": "2cLjKYHE4cvgcdS78xEUUFXxAnVtppHfuYgzXetJ3oe42FuwUtyDaRzJS9RkgmsJNMttQdkUGvWABKkXhvGrBJWE",
  "key36": "3ECtN1iHTDvQPosFQXpXoQpPGBxnwuvzPqYrnY4DA9g2SAZBESJSGZ7puQZSQBnkredTiJqGMpXLNuJRpSh9pXVs",
  "key37": "4aGtiCrcxBVgkiXoxLeqHfpHJxbtfdbqT3EoES1pA2RGoWPYJfuFzyog2khqeTjBJPNQFFAMrc2DkA3RSDvAah9y",
  "key38": "5nNwJGQgTqAzjgy2bmPRvuGnbigEobuuqi6HNMetF21SGya1VL8MEEMHstmURWnJC7YWwg2ESvrYkMxwPuuE9cm5",
  "key39": "3j3huUgQBjT1GKMoKeDREPX5wxMUnEX92cFqmedz7yTBtAMB1wrszzKeVNNFhCyNJdu485QY6ghMQC3f5SiYhhvw",
  "key40": "5HUcJmcVpLreVQvRu5zaGdejBYfwT2CbgchtRCmZ7pujFB9HxETDda8N4tkXQj1aDDbNZmSCDeaPAVJcqcn4n2BZ",
  "key41": "4LUbYNP6PUxjGs9MHnWQ2fiokKviXH4dTv1Xk7YZvRkgf9kLygbYuEjekiLsv89XyajHG7D8PPQcFSVchSNNbcxX",
  "key42": "5cQ76eCCYHJTUbCGGXjghR7y92V3tNahyupb9QMtSjgnKHi4myz1jSNAdSh98Jzqp4YKjqU1f5MjzRaNHsJadtzn",
  "key43": "5cJegprYt9yv8KtB2VgpNCpo9c1Dqe9DzrvtfnKFaqHz7Xozj5QR2j5ui9cEdgwYYKCULRodKsjNa5KnXotFVKaE",
  "key44": "2RnGbQ6rCjCsWS72ho59q82HBv3ySFJDNZPsPu3zWRENBt4D4dZ7U6rrVn2KoEG1XaQLootnwgUJohtMgGLfnxG3",
  "key45": "5ZvuxckZ2HKtnNPUKXZr6vJ79SSzXyCbaUpYUSYd1d5Av7BiF2hfBzRPa4VSg61otrLP6GwPCpQyAoEQUA5PuEsH",
  "key46": "4P5pz35r7DvDLUAteHevmAFLUFyh5vkaTbupXh8FerPFCCZ3cEYRM8gH7MELN13TQqnaKuzX2ofaaLccN5KyQ9YN",
  "key47": "3bkEBYRWTcvCjMYx7rQMyA5mvF3t6jDrJnf7SD48qM5AQuXUagqrhU6bMP22Du4X98ViY1z5b73p4U6s1n3xmxoV",
  "key48": "5FitD4n1UQwc3txaQzQ9wx6Ayoh4zCf2Nn3okqdcZHr3Scuwb16Z3sMAPmrxTBDHSTkomtFqzac6Ufv6tuXTNU5e"
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
