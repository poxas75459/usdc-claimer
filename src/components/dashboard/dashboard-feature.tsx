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
    "3CTnhkJ18gbunn7x7EDib7U41uLKAe46JLSwft3Htp1eWgzWMkLUoHPdrfagauqvmDq2qk5Go6G67zo8FB9LuNgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t1UAcjnPURPNh2fFPw7aUc4UYQRQA71xveor5MnH2ZfkcvWj36UgaP3KWeK4Cx7LAoCuNTgh98sFdvxBX7ZmDwJ",
  "key1": "3VAuB8ARnEJTVQfBhk1kUhNSKNnYJN2NYsCsnLbrvfA8wF2FSWRT6z1xJKaruNCyFgJfEShngWrMYF8AesmWH17a",
  "key2": "67fzD8hMvCsQJSfBDC9KHwfrPUaKYsLbSc4usdwgPagVyqZj6FFQbQJFqrgWXTspd478PF4Uq5FmdqymvpNBktso",
  "key3": "38vD2MJ7aHS4frNeQV2XDpddgZ4nfGVu1mu4gETgRhzPgM1D8Ra6MkN9AxDYzV64aC1dt5FUFEGkYeZT4jpAamS4",
  "key4": "3A5XVbG3R5tzRMkwF7PFgHBYdUsPvKTYbEW9Nm5DZWSTv2zCFQ2g3m6apoDTRZ4hBmYUtPbRd1x1gfmf3c7ahR2t",
  "key5": "QArh12fS2tmdRvMUvog1GpDGNhbE8S6af1XKtHLWxMTReh1zac44MjkcrfArL6ErsYBd7DgP9gR5XpnqisM6H7c",
  "key6": "3RVgxoc1zWDth9vfcuXre1NFXbKQf7RsrGxvv53PV6HGeUsxeKHSe3hAyQbiJAjvyaCCrfM1VRJ5gLe9Q7GFtiWL",
  "key7": "2YERGrWBvVnWa1Az5jDyGuEGDqtbGv2J38E2mLAwvSPXuUYDgspZRqwpeMcG75HVAQQXqjUWeYird29WrB29MjBx",
  "key8": "5w8X2SQtq6zzFoJpsCsZdMXDUbnonzDR61eJyXja5bCmeXai5i3jhbhhzQr8wQVyf3c1qqzLa9nsKzL5NyHHSUez",
  "key9": "2vogwRQg2tHQ7UpXujec1E2QurfvcWKgpPGVAGRKTrJAZ3F7DwfVubfdnwfjrwochapZdVNYdokRXjU7gTCYdHaS",
  "key10": "3x8yAJTjskzvo7Sr4KbfNT6f5YSMZdNmbGAmF5Mhs258BNbuuufESxANEUETBQWu7YLR8uRp9BLRP7u6HbQNa6rh",
  "key11": "42TCSjW4xW9ncQyTrds7VPRzbwisfmURqXT9jd8qTdS9Ra7sRDj6qN1EFYcZXGTUhYAksuqN2NWPUSoqGREsPWU3",
  "key12": "251vZL72xfNmSqhrmZXc36vv2ugcpGBReaWwRDyiqiZGbAZiDt3VkUPjASoFr3Wu1gqrDpyVrCBm9DjmiEXhyYTu",
  "key13": "4MJV1K5vi6MahXgwPQrLTNxZBrqtoBPd96Ld5xCDax6NNsUK1Mnghj4LWtKNiWCCXxZ4a6KvRVAtS4QkHw6BrYxB",
  "key14": "3c8Fig7wSCuenLqRi3ZhWPbxSXsnQuFj8P3UZ2pgtj5jr5RGRzJ5Z9QSF5z3L5hR6GyKbbEFV9tezW1gV7EiWuT2",
  "key15": "4v6dYMJBtvaw71pNfyhipAFdCcn2nQr1efdrH3qkwsPDmok5h9ZexRPd6sRLQVp1Dqaq3BN6cAbS8pfu5egB7Ei4",
  "key16": "5PeUQms9iww5JmHpVWet1urEns2mdsGpEEJU2vf7HkeLPLDE63YGW9QG3dorCgfW1wU5aPFU6ftzHXJLwvcjgDe6",
  "key17": "4epCKHD6oh2oHXZjab6MTo1wAr1BY6TZnWF2zJs9LLwfoJ1NSPzw19Z6UAQnPSh16jMdLb16F3ZV6QWpiCQCpE5g",
  "key18": "32TgLs5fGB9NtRhbNX3WkyGyBm61LwLCuGhKGiTPsj7LexB3Y1AkwtqUb8JGytX4YesMEexKKxsavphWgUmzwoKp",
  "key19": "5nEs11ZVfGoBVwyTYDA4vkVybtaCRVDukFuAghktvFfWwKCiRXADWwfvjvnXAnPeDXEQyqGZYMXdJyRWFXQwXHN2",
  "key20": "2TpRPZdx1njumzHBkYf9KF4umkRXvN2KwUY1fdqCgFEDf9jaVTbDuRz1tfEpvVs2fZcpXiMtz1ZyUjZ5WmdoEPcp",
  "key21": "6rTLE1idu1UL8JYkh6rzDHV6ZXsbo9vhQV9YRE6Fy2gYgPibXkZGJxM4o6S23ohTKoYtaWQsk5eNfp5CS48ky66",
  "key22": "58XfUY7CozY2bnYBsn6DS1CvW6vBP956WChoQpJXGLyFoHrfmo2t6UfpUrPN1g8TNw2PCUpWx8pJCiYWPbtn7Bki",
  "key23": "5KTheWWmXfGxR4SG1XCHpES3GaXthK4Xs8Cimt562UM6AiVJXr279JJ238XLz5Qh1rBhAajy25qod7oxpqz11FtC",
  "key24": "5woduDQ5yjDMNMSF4PKsPk3J78D9ikmEMaMKhoXdBTPtbkE2S2rchMYxUUBzHKkSwZ1uuPhXnG1AJJuHjuHqgmog",
  "key25": "4K8zLmgEsBsUwVM2db5uoBGLvGQWYc2cA4shTaNCfr5PvADKFUzdFicCeGvdfQcYPZPpxcPXBzAvsAeNogwhbs4e",
  "key26": "3LYSbrVmCPmjBQQbFNcNGKusooSs9xu2bHqDvGiCRuKYqDGjUiTGX4nWZfyBxpS79UhSYPRcJ7z74yCQfe8YDmuW",
  "key27": "3PLZ4NtULcfouZuP6HvdvDeM4R3tqbdh7quapBu9fwk68t7FN5JScuDqWBnYb3x441YpJ3HYWcfgVHiMfPnUJdWP",
  "key28": "44F5mehNwPgzNpXAJcbfnrKSEHvwjNFf6jFg9KA1D46VtmP9sRuAuVdQLJfJ788QP86jpxDESExtr3RGtVfdJeHB",
  "key29": "4uyQLQCsLmN6UFzNL5KSEimchyChcqy8om8cnMtJGdjVi2Q6JbSX8wCNmCQDBTkqqsdSonxLBHW38coMfdETa3tr",
  "key30": "Fa2KDL63L2yBHdAAFtmqbzzvePyYVQRRdjvpmBhhYYFJieCyLgEiJZshFutQtmy5MrVw9EH9Gz3TkLfr1xd1hiE",
  "key31": "5fPwaLBSYRvak8D8u15E9mYTVYepHGknj9PZ4Y4Kj5b7cPJPkKmmnA2Us571zgWfVWqkBP1YxuQeohL546jHRzT8",
  "key32": "2yrH4sPbbXv1AjHLv7GLieuwZFFCguUfJk95C338TS9PayL69irkhtX6xe2fGYk7yDNAtDgu9jJFTCRyGxRws5P9",
  "key33": "3c2PuCQgA2UtemXo9o6tc5TjvucXVqKg1yiKSQr7fz5Rg8Xm8NKHKJv116wALj1sTw5NaFdtFMipQwx4RvpVXAXX",
  "key34": "64uPCf13VRpAL6Pjox3iLiWZjRQDRhFH4NwRtzHjEUMw3NjPWpK1zxCVrFYrJLKsAFyfhGCvFrD3w6e7WkQxYuzu",
  "key35": "ycvEKK4YcmSW3WziqdMFDbhdx61DtSzBxYJgWiwhDfcSP3QTUhjngrjqa8EFMPyVBG2VtQzhyt4bSNCjD2JYZCP",
  "key36": "fe8oE5bzmKGUinz5Cjibhn4htAB4Gfgh8M8wk3Da4iS15ykqbYQ7TePoajzsC4kxDrJEzoaoBi95b8tG8hEPhPM",
  "key37": "4Fat9izJ6vw7DUfU7Sxv3mwZbvXtEfhViWbHTg3gT6dmueHiGQ3yegp2dNxb3ra2hApsdG4cjAt9S9d7BUcnFHGp"
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
