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
    "EtTuuw4zp99bm47MVjUZYx3bXcnUqcRxYZvMCx6h2VVompEQ9oLZe8FKesem5baW7ZVorqcryWFb52rnRvYghY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65wFV83JEubRrzajVC8jktva8XNkHu2xrwoqow6NcxVxFrCcU1eidtd9mkXJqbWL8zARBLXHGP46SXgRURjEkqdj",
  "key1": "5GYWCxtpzqyURj7NHAaPdBy5BMrCc6mpNLEuh2GNnZDGAftF8NKKpDv8hFQrNtQP9VPG2XFt7gyTdvVHGEbQYTb8",
  "key2": "3gf6pX1QVGBydvG2yoEcp8zE8o4upoPQ7pNBwBcw78CzWH6tQzbGB8Lcz1iQWTAniuhPc184XFMTJ8zxmyC5sH67",
  "key3": "4AJxfcJfvGrm9PDBY7tpRAZxeGBMKnfySLijeGNiRZCL4TekqrXEQA6reTwFpCk1AVHmCWRzx6wR4HuCvRzzw9Ey",
  "key4": "39NSTyGp97KVykerFDAVjGDMMHMvUTbTg3khssJ2tAC3wLJ2QwcnKCY893zPqXCg9NtXgRpG4TJv534rz7z3J1P8",
  "key5": "5hLLfYsxH8G9pTcCnrWGw8vaDHDaFNomzWwMLHbhij2UcqUvJFwHtyLTXgxTkxEm7Pn4ug8FmvJLEror42dVKZaW",
  "key6": "5PRpfR1ichDJwy4fm4Deaf37ZyoMRNLvgE6hHSaQKzupej6WunawaALY4VLfQr9S9PGd16HHx7CJRG5faYGzdR3V",
  "key7": "2vCgpmoZ4K84AtauZChJ1Fm2nkfPk2hGxJWkC8uEBqgwFxNHrYftYfrQJHYSctGchNCvQXg9NgE6ZbLGw3oEFx1N",
  "key8": "47T25ErbxFQk1fRYEYFvLADyLAt8FovTSz69F4osYmuo5PR7ANV2eg6kcNbJTL8tZbXwg6ABcHvD4aU1nNorxGCq",
  "key9": "3vdzMSnRRehAVrerK7o7d2Xt8TRd6H7g65efAPZe7WR6CxA2WD4vmxzNoE3eXYcj5zHV6nZmx7x976NsjmsoUwSs",
  "key10": "5Rh22LZV6MaRzkYjhmjPsWUeyXuKf95rCu13ribDgs8Vu8TCnRzQkY1jXvANEXX9YWBFgBLyXELLTWpLCfiuGajJ",
  "key11": "tYiC4FS5SVZeFMq2JKp6L3LZQgMptDjYe7BSmqFMqvDCvF8zbp9W8hMkipANRsLC4ZAqK5nc3WsnAxAMgEBXwp8",
  "key12": "56gFEL9BL5E8123xQxGTAsapMbxnNcMwiwk6ccsL9VM9ZNtnVcGy1RBRjCBzfDL5WPByqsNN2S9m85cbENksSGL5",
  "key13": "3Hd7WuEzRUaSpumzwoqnHxvuUUb7EGK9pMERvb1QRX9g4pJvGw1ZcCRNvsHarvS3obptHp8CVaM8fW5PB5b7F7xN",
  "key14": "PnSXne8ejioci1bHu6pH6Am7FxrjmbjqpZwEXMheGPLRpVnE1GeinZ7raoV4tA4uDGM7fXEHGwXxjtAzQV8CsYJ",
  "key15": "K9wcJPqxK1h6sDouJP8foeFcJcpCyyfC5LT5Ggqog9Kv26SrdoRVvcAyNApvwKpACjz7Fx14xud1kHKp54PMS1m",
  "key16": "4J6rXhKRMvGGz5YfCgDevXvy3M7PE2655zCVrmtm9WuUA15PcYXtZnszM1p3LrVZswWx5EBa9rJextyNobJ9PErz",
  "key17": "584PsK6ahv8PAQjMAWAUyESMsjV2XDG4JBqMBVmPuLsFB5Qj4azCYwzcvQGwiGunmf75CLApEAjbjRhiSCCbXRNk",
  "key18": "3A9LfFTyEj9pdYrPKmd87hUqrnA2mh7fiaPmNj892gbZAKFHxuwFpX7XAPemZdwwm3wqaMAFhnBbxkif2cZXCsDx",
  "key19": "2SxdwFfWhHpH69Htbn1Zea6Kexqwn9iHqDABeuhxGHwy1rtDGfw3xPuxWZPRM5eKiqMUDuNPAASspCnq3M6Hoh2",
  "key20": "22XMcivEJwBdAZRaQPqR9jendmpkYeA2t9mzdLhp4rLFV8j7c1RxZtQkeiLAPWBdBRPJq6YwhcjpDAciJD1o3Gmf",
  "key21": "5eTii38xDBxqMLJFod5Rwu8Dy1NoDKRpE84ZH9CPS1HmTWWrpvs3Vr8iB8kKZTxqTkdHPQ84bRP4QbNjHwEjmDKa",
  "key22": "71nG3yW1n7cDTftSDVugMCLGhZF53zRDQ9QE6EGDDW2gYFYz7ztALqTRzDCpjHNDmVwUqYsUdWjFbXoPSbHu1RE",
  "key23": "47TvGH7d1RVvcafGMnSKc4QH8mUbaigeJKx11vuAEgXn5bCUYqEajGbiUuaqm9i9uR3GUS1JxDj1vpbRVsbNtVQ3",
  "key24": "5hDafzjcEbFLfKjV7KtjQfTi8UqqzugPQHjBsukF6CdizMKQQbRwPbKM1aY4JyhvQqGEPtZFGcpaoTPm9FtYoDMY",
  "key25": "5Qen3UvApeJr53BSDM6nrVviWeZEbwttvq3jVC7cEehjqToY6VmzicFbQSyurTFNJAkdgschvrqqjqFC74FizsJr",
  "key26": "4FbbaZB1ArE2vmo8YhfVfWMSZ4ipYcL3bb5hwbini6XtdD1WvFvopTPwxUqbKbjADUHnN5AnUZFsyyXUzezPKRBR",
  "key27": "2kCyiVzaPBCT4RaAxTfDzFuLEyDMBELw3eRuetwVDZ7bpvpeMUJ886M3xxSJ73ddnjDpxfNv4nCaoBuB9NhfVtKj",
  "key28": "5TxxdvWrwjT9TVtaG9UkQfUknKxSDLUwdFbaK962JSTze7K54BpF4TuiTeR29paL7VDekLvCLPbrfuyFAhyVrVhc",
  "key29": "EX3TcsLNmLnybJzV8hoRzVzBbCVDd5Suu1KPvNVm4iE61HKFdsYhFpu8iNL4bEkCE3NaDXA6jJHZeJdeSAKzRU8",
  "key30": "5x8vgLLjDFZrRnfwvVWUyFDNsi7s1Vvxs9FEqHYg76Qk1SRByGE7UcrYjHau87rmvDJKEgQPwRF8keNByrXxdajv",
  "key31": "4pTEAW5iGD9gNXpBEUKiEYQJyeVVBEqQTxxvkiaXgaeZvsPZtnwnsDkTddJgHy7uvn7PKgeeuZiMrJstF5AnyKDe",
  "key32": "5rNzSTpGCdrhfb7a55w6abPxsYiC3NBrAMHLrhmA4WfwqrQP8tddg24Uk9HUCg7NCYdTuQQGRS1weRW3L9TJ62pY",
  "key33": "4j5pBYVzVM77pJCMJPBDPAxtRGYheGxVLChWZEijPksgo1NGXFs7G64mzoRqGgdmg6a3TBCiRgHnero6wrJuAeAQ",
  "key34": "5RcjySsHiTJn7iuqFW9eqHogNaE1FywaoUSP3YZNZQxq3ZrpDG8qJTKyBdVihTDkfXn44NXzLfxcHYzGunE8uwYK",
  "key35": "5cmajmEEw5pdYJkXLHx7vovp1tsjhpy5jAdBStkbgTjM2z5vphbMkHqN47QBkNm1i8tk3GFwfTESjJoG4psvJV18",
  "key36": "42v2xzt75JNYrbDtXbtP46taX5aJ6ZiFcADq4camvkhv1jWP41FUy4GexmC84XGrtsJXvGvkt79SGC5mNKC46g3W",
  "key37": "5sztsf9RYML1ZSguQHTpgDx4oLaGNQg2zNKiyW8ZajAntjH4nxexUKvi8uYVR3atrLAnFCpTCJEsvg4Ls1TNXF5H",
  "key38": "3HaZDizc8J6tayDg576i1ivQUK6ssMvCW3C4e3tdrqWKYzvsWrE4bdS4ZAebFyuiwibZxaWdSiU72qpmXkTR7WHa",
  "key39": "3KWfYkCuTBkkXGsTPmvbVghhJ4QpbLTXJw8pGY3w2QnpdzYSNcCBkAHPeaWZoFMERU7b15MFwG5FiSoaBTbXrYsu",
  "key40": "4xZuSWqrtRRpiXtXn7My7zquRyG2Z4Uk1xPXhwBpbeL3rnzvZsyfPtN3JU5B45wtFxkD3ZxUBHGwazRgqKk6Qsr5",
  "key41": "3uXPr3Cgg5upiynHVVUtex8RcQXUFrQm59S9jtt6BEUxTEKUJxfw1fLNnWFvkmdp5rx47pHwF4JK2awwutN13zpH",
  "key42": "5gZGvpbFPjHxmNtCtJLMJybjwhL6T2xfTmj4qq9962VjohhY6PthffXLKuz5Cw2QSpRYMtFeBsX4SxbVmWUKECHD",
  "key43": "2NjwpAyZYgmuKxxYzZoTH1evdcWPo1yuHRDVzJrv9Uu5Fv6MBLPXhBVLAm6wvzHhyppE29SKzt44DRy8fkxV4LMX"
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
