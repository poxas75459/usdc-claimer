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
    "3dHmpbu7UWiVUkc8Vp2PbzomH3tJm2uPeUhd5ProXStcQHByz4AfXaA2RdJrWdSivRBcTSsVzwKBVDT9HMaLxC3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jfc9kXiq3U5ZzoBseK8P9VMnVKq4MeiDsmXM3EFvVAv1VQcQPhUervosFaWSo87FtajuuUiK6yKTJvXX4pByoD5",
  "key1": "2oLpVdv6QKJ8fHRvrY4RJfoxKsCsCjiSjoSF4xJP5yJynq4V2BSDMBMqYCpWuEGP9ArcimGJBTxpdgDCH2fQkE2p",
  "key2": "38xhq5RHXXbTc1UMW6SCTjzXLQVZ9Rwv17Mh4LsfPMnGKe7jhcx2L3Mgb6Gfh6Tn4AX5fVKSbR8FPRJx6w8uHq7z",
  "key3": "4ZX37JJWyf4nFWgVkm9zrQgi6rydcKzQSu6wXrKeivBkP9muY9Cb7YuwTx61JbyRygoQ1dBxM1qAm4438iCABhy8",
  "key4": "4BygjXha1UV6hjbYuxStLFmf8vAKdppjgG695JFXQMvv2qsgEBmSA4Po1qRTw8cpHKZCCzbMBu5yYw5N681Tp6hV",
  "key5": "4iC2yJbnghaVbsiQ8ZZTkZNMVu12Aak3WEeQG6WkGC7TayzQiuBo9GFKjJAYavC2umd7KG5jLrsqtReF3EEuUNye",
  "key6": "5ZPtCCEqwcYXUiK4WNJsifoPcoqCu5TUR5x4aztGKMhi3UMReGguFSMW7Q2hk7qSrtRFpGXvF37Pn3PKb7KPUpqQ",
  "key7": "5PQHs8D2TB34AzJ9NyWotSdZDXc3Ch848PdB7ia164ooHLkaPsw5723Qc9eDh5e7C4pk758T7pKaxn1eZPCxAP9c",
  "key8": "45p8LLo7gBAbjLDKCkx7RevaLzhYVbog5TJjtHfKEYGcQnxWzCM2rF3W5dJCWNLyZVZ8VZnJbpVWcK4sX5UGKFPV",
  "key9": "32op5vK5M8bnPDKnAW7tPwTQsMFudq35Vu2DtDXJPjLfoPxHf964rUpqstnXrZ8czWgh4mkFifZJWq5P3CX5SGLU",
  "key10": "2WdxyJ3iMyASQC7Mw9EV1k3uxTsrPhX8hxyfq3f3J8aq691suRANh3YR7Y2SSU7XXhrrDLZrhP9FTK3jguKrCVZ7",
  "key11": "2DFXS5Qf5zzEaoo5nrpTyZhwwEqfXtY2nBnrZSvJRFNtAr5HKyVx3VRRPc4mgWHh835PpLfTVWusuJDaGXhjZixJ",
  "key12": "2g8TEi35e6LB7rC8VEKvciybjFDAHaKsqe2k8xwetFHzfW3wg8d66rQFsN1NMzbgEQ3A28dTWQrcNfdxyryY5ikz",
  "key13": "Qz5pygVga1pWPqzjeBb8EwgyVbz9SoYcpmvWk4SeuT8h4E8U7FvP3EhJQazWmc7KPEY64TUMJEADeq8fBK1LERy",
  "key14": "i76MBygpNR8zbhFje1dczLp6K7jsZxkHV5V7zYwosX548iPa9uwJC451SfGUxAHzCPhk2ptkVrYi5UNXbzQcrnn",
  "key15": "2qKzLNKcoekwVNb29twc5HfccyMQGLCcgAMYeufYpVsLzjP7q5xMaQW5NFX6HsozHnKwYue77fS3wgzJK2rPUNYP",
  "key16": "ScC5TTnB7vEKoCn1SNdaEeDMBWEREL3RoPiaWGWrVmU2oGdQhSyp3NrpPppvMriZ5sC4viYMB1PjUhok1UPN4DL",
  "key17": "3at2HahwokX3eg4CFZaHEdPHm1ejBCtQrf2ZepU6tQYKTDu6JCPUHJKMieBPAAD7rwz4MTbatgMCGRUTcBGjJVaH",
  "key18": "PeGXz9oYzHVLaPYyMxQT1asETRZVKvwVBXMTcoHm94FGYSVvxZwvqEUf53YLDuBiAGNQ2QwtdjwdW2NbSmvnZ7c",
  "key19": "7e8iKhbGp7CQDvE4vLww28eYfAkDVwegwznE8NQfD9GLj1NoRnpb9WVmc94W4M34FAooyBZpxpW4Lve4ZYBp5JA",
  "key20": "3BLTtaUXBoowjQq2A4RZHrZ7gG4KRKpyeUXkG7E7yyH7CF2kbm5R8VL61B3WMjmBwi51xJ6kwFUAwA4keovTZjJq",
  "key21": "5ouTGVaaFB94ZMbgHSW6ijPSgCVZosHYHfY866zeF5LXRkbpy47rEYMCxg3NBSMka3JNmQymzhqH3G5D1oxeXzEs",
  "key22": "fQbjEvDYLcF88FaDRneHtn1b2hB4tAedpkmXJRXq9SPfGFNYrJaVDXJxYfYKFFXDML3TohkQCTQQzAmmkRALGdh",
  "key23": "2BLAMGiG1oF9HdiCKmUWcSZJ86hdifnW82Jw98Txh3skySRp9SrRpYQwdGXFT3UUaNhqKUHtjHyhCNMYrHiBk4Q6",
  "key24": "4CDX8NKjEpv85Fjs9BNFDW7tA8MZy5TT8Z73YqiTQF1TYE8pdaPqshCMy4SBeP6VzbqAui8onZTQQpCERGDRk1Rn",
  "key25": "2nY6LAv4uJTqrDTVSWEVY1sH8dTCtsMTH6UGVzAsUHbWWrE9zwzEt2TaN3aLyc4X64faoBvvHFhAFN4AsY8bWTJ4",
  "key26": "4pmpmgUPNbG4f6kqQMV7GhgPRWodBBJHNAgk3JjSPjPAaW2becyxWPEfS4RTGwKvypjbs71hpDZjYRA38E9iUaF2",
  "key27": "5bbm1twEaNMsxzQtbZHb5uZc2o7UUqKGub783aCKwEb4EetGWf5KkNR14FbJvz4aGN7YTf88Mk9AvhfngvuTsiiC",
  "key28": "2V7BMEPoMbcxKcVFoLxVaebpxE4RAwpTZvqj8Y3jsLSkd6bDVj4UeNA8eebH1PuGxUK8wtSL71PZzSQdopNc8UNz",
  "key29": "3mAJgWGyFKuV9qgAkZGCEHL56xwfRqSfr2txprg83NH95P7Lva5FAdk1SxUNzaSL8H7GFajHNtF4KK7duTdA1bvD",
  "key30": "k37emSJe1dW7UEXJBcPFwctF8dykYaA5YHa8ePCxbVnTEk5yRMo2LQfTnADYVh6YkPUv5utbPCmrhqpkjRPDohX",
  "key31": "5GvHWev6EmJov9NAJFC4cHkaQ7jgy98qBZEmeVjedRYcM5ckknyYUN9qoSLBApRQc7d9G9T2kGGWdxwdKionhzbj",
  "key32": "EU1F8UhHSFnSXwAz3S9MWBHh2acQHFtRQ6jh2ru8CUA4c4C3koUKpuVqKi6aNGc2RaRkbkQV9TAWyEGWdMEcTQp",
  "key33": "3yqt1S9hVgXA9LiFV8Jyj9bVtsdHFd2EjQxpB77sTGMaQRb8o9rXFcx4P7Ek5jxGYBoWswCH5SiaqbhV1Nvr5tGz",
  "key34": "5GMq4WrsTuTWfwUFu8ZV88Z9KQ7mky9pxYa1XskhKWMRTHLwYDEYWSPahxe88q4XtnXuMXcBezYbtaT1fCn3xsGL",
  "key35": "3jccpjiHZfoEs8M2icH2gPyzvFiMihf9rupWHbwuSFFUhf9uRneGwzRzjfBczhySjkSrKaGQbC35zU4L6mNzM7ww",
  "key36": "4X9nQZt3ZramkzvcZG2ikeuXPfE5p94YV2UPKq6yschqMna92ZpQgndxDDMKLaU1fczjefYS8zUH83YoyqoCy7tV",
  "key37": "66NjtoQDm6tckVib5FGjhfiqFyi2BtLuvAC3wNsJM4KoBMeqsMfYxYdLYYyGb6i6Szwidf3Mh7VfrNPJSoDdkL7c",
  "key38": "5hDqzbpeX2ys84Wgp83Ajq78Z3673dYBvvQv7cNsUthYWArHJtmPuSMiqkhSuJJGJS2vNGiEsm3eq1w3PATAMW89",
  "key39": "2ch2CfBug1kheSeVThPZXDcWQ1weJmEDZdbAQjRTEjyeGxHMpGomcgKjTXjmuJJ8SCbQjRi4javYXFhgisQpcxr3",
  "key40": "hPVap8fFW6KnYF2eCtevRghFeQHUXqSseSP1Mr7LumisKTYzGCp8GHaFWqLfh6cewGaz3JPJBEKCSYMd9wXBqk6",
  "key41": "26xYYnjsRxxqk6Vt3ZYXaNPWDwdigiVfbxyVZGWA3i6yySqof67tjmRw8jdqDKunDyEVZB4DWcDDpWYVwSdaUBuN",
  "key42": "3WKSSUYDW5nRH2zMmH55gnRKFyZKhiDJocKp5vXG6ZBHKgua4vANK1eqNMhhtym5VnJdPwp9eQuN8j9X9rmirDGX",
  "key43": "38961NbCGNfV4TkLicEhRZnZET17g9nyNhJMaUNkusrjQF2CbQSj46s6QmD43Z24tC8VgA3sZs6W8xumep9jdWqo",
  "key44": "2NWHym5mCcKUiVY6fpGgfkthAsjdC3om1V1u3nP4vYFV51U9iGd27cWFvpdduJy7iqALqKfdEPp3t2neb5ENod8n",
  "key45": "5bsLnHxEESGZfdr6pbJ5hjSMfEWLVqe3cJMySzyY3tPA2w3ZicWp8H4Gos5LX6CMEacR6LVPYXoA52iMWhDbg5Zy",
  "key46": "5F6tMc8gdhAFdN1KWsLzEDmugN4nYNXQH4VNmnu23FgyhmboEZgbWyosVZsoriS5h5dR3Et1X73SYeZiKVnKiqCP"
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
