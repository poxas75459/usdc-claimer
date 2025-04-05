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
    "5EGXRnzTE8JY4cc3L4MZqtUAmVr9TLwo7TR5W57Dw1NSAZgpG6rwRTRch2WMhCSLCRPC19WqToS7nQDqSLW4dB54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29p3UStVcVvUqC9hgfVXaG73dDi41WfdhbiRZJPtsMkVgjfNFnaeHwmS5CpndoFdD12cLUw89cHgJUP1riWA3E2Q",
  "key1": "3RgGYKJwS6ejc3deqwwPDQdc7H5dHMHRwisBbEM58dfZu594AgKy8khW2rX9JtSkJ995xbn9w61LmXe44UG73UAd",
  "key2": "4j245WrzU6kQbHzyEwM2icVrFtdt5MPv79GtDFAD7YyAuQrezptcR7zA1fHTi3aU5zZvk6CWzHtRVXgJeADQoccv",
  "key3": "3WWegUC8x3aYydj33UjPR611FkYvcKAoiw4fDSE42Qu8ZYSuutJwhE7jRYfzywpuUk19phxWHKiS48rpjvWhbqoJ",
  "key4": "2SZEyhGLHRHM4eeXdmXVCzQw59MCTeCbv58F6eP3oksbupFjNcjTnF5eYKtAFyYDesFu9mQdUD7agFnbjH716Mnx",
  "key5": "5xPte7v1NX2xiS42GVzoEZYtPyjof9DQ8hmCrRXK93vTysHTqPj4JgRxkMt8B8KdD4EJE9EnUhNMHxhqQq3nrcra",
  "key6": "65qak1S7Xrx1rz4NjrwKgu38NbtRkyYP7U16WscBgM6zyZ93WoC6pAAYW2EWhbiqqRqCLSAntfzKsrQjLRnjhdPY",
  "key7": "28LCKzfdqdijXRoS6tbkTT9tg6G2JY8Gs6QCZsusiSXLj1opLGyHgRvGB1WEUgDnhXiKPrKRQLqK65XnzodmyoAN",
  "key8": "63yXVLJQqhP3ERSaYFySMZ455T3jA7buTqcb3xKpzEeDxZqbcRrjw1xJ6VAANwpNn9HcWcZtzsFEHegQr9DWYbVc",
  "key9": "2jC9nuGUQUHdxVcV3kMTgkJt6N2gFUJb4BrTgf9Su7N1Y65mCiYpmZdwWPKNXyTZbEfAYZHt4bq1zJuqR6NvwgfQ",
  "key10": "3Sjche7EoffRYc9sjJNvJxbYRGwPAQTHfMyc6VYrH3PyvMtnKzWwsh5emLrLGhZDz7DScL4nmB5TEDZazYnHWQd8",
  "key11": "4e34PYYNQQu6PFAb4hzYxULYXgqTWL8sKCFbCLJNspF1SvSFnnT1Fpwn1NstFJV9GL1MU7h3dLkyanjKqVy8bPzu",
  "key12": "3WCzENkvktGXMrAMmzPiDoUVXjDtdaMuocMUvkSdswGHkJX2xhn237k3JScb98awghhPMDa9xBgdMy4Vptnjh1Xe",
  "key13": "U1qAwb3frFdAgk8MtJyd1PuKFY6FgpLSyQDCrGVxM5my83wthLV8QP1WpoMpmN5wuT2RA4awWMkU36uHdXsD1xH",
  "key14": "omxZ12ZXnGDBzM3xjyVAXN1PAvVWTaX5127XVELZE68kML62YjAgduLhxNvZ9YTWSJy57qZVcBqRVt9VxPUgMDP",
  "key15": "4SWq4wRxQyWqXpjXV6gxPpzQRYBjSZgY35ij9jYBTfqqCi16LcByWoJRnr85iCLYauQ6iqUmkurh3zYex7F4f2QF",
  "key16": "39FaKqZjBCxNGRJn63K79FA3RFv7ZUf3G2ig2G1YKdZb4rZsNceeNURNeoS6a892txna8wfzhpQcvZJGpbHG3JwY",
  "key17": "2gsahnu58CaMnyp6QamF3uEd12WNJM4LvDdiUoBhhWioqintzZeaKdXGwF2m2XbMRGhpiFUrNMDYEiYyyzQ6CGoZ",
  "key18": "3ayjbsQ1akeM54boZB1F5Pfz8BzRsAhUPd8JM79bbtAK7PgpfQbgJSCW6AEv1Xbjncz89s5B8PAQjiXWH88EK4Gj",
  "key19": "2usyPKAfSJEth8V1ejStxyXvV6YNs8BY3ZyDmtk63q4skyp6HHoy1VDv3Q3wc76n27mCwCd5jqeMR5CTWSE13oz",
  "key20": "KYCAXVg8YSEWWxqxm7wdpjSZLrXTRR2eSgdc1vG4cgYHSaGRVh6ZyAV5EXj8c41r7hHYc1GrHaXHW1CzEb9cQhv",
  "key21": "mQghPpg51cWQqvsGMHzzruDwpkMMoJBvcutS9okoTrq5rKNotpJwdmjNo4tMDJ2djpRudbyTkkEXhEHEpf8bjJ5",
  "key22": "3RXbNNCqbdNMUNxrxD9dxez41WYQ5Hk2wXCTcVr6RABjWrdFzw55szRjAfFaeggwh4cxq3Cys8f7eF92cUwDVKMr",
  "key23": "2YSebu6Wy8jo1kTY76E6DmgszbXPxHpWwvoWdkFYs6b743byKCK8zEtrQQtBwtDKqtTh9jKJscKjAm8sf2GfSLAz",
  "key24": "51RMjApiazrZtBiF1mH5ZePad628LrFVngmemXcYJnWN8Qdd8epusjZPrxvwFhy2CwyyPY9BuDC5h9UVtnboJsD4",
  "key25": "5voURNVofU1J3PnC6tJcfyAUrpqGTTgUcNSvMYef1nhuqHhy7wWnQyyXtzFCUy9kmimv8hLnHRQLcfx9LcYwsE4L",
  "key26": "Awvc1YkXuyxpq9dsKuSLQtuf6ErtdzRb9Lg5hABn3J1c51CvLLDsdhBcKArzREvkwQJHQFTZF4cZQkAmP1v2z4f",
  "key27": "4qnnr22b5G7kSVN8ugVjZce9UcXiQhgcVatANoudqwTkkBqyA3Nr1rhMT9NGq3UkLhATGBFM2v45ymnUTBNA5r58",
  "key28": "5LuNANrdjvV3qTdQWDfH8TswN12gZDY5srhmHBk1r7jxBVo56nAJ6NYFjCmguXWFjHFhjfT3DtdrDuaqE9TSYM5d",
  "key29": "sLb8vxarLg31wEYeeqmiF3PFJfxHNZDsKVHhY4P2Y7uxr4y47BcRXPPz7KaEWJEheYemdVH2ZNEpo76R4SvuYKx",
  "key30": "2EZtWPUTd5fzwZwB75QGETYYHGfXKEkNoi2HRmAMjKhddqDUiZ1qmJKsnf8GYEVZbMZqLtZuNgFCUEuotEvYPcNH",
  "key31": "22ZgGB9cUZVzLRY7VfmW1AyPTL1TwoHfDM2kZSepAYesGXvXtJ1pFcS1NfZu4EVYTc1rjVnkyXNpnEZjWfix8USp",
  "key32": "4DARk18KfX81qxyUzJRcYxkhafjorCXbFMWWvT5SHL9cu9EEtM266ThACpXt7TeKfvkci8yV8qN6oqGRfUZA4YQt",
  "key33": "5HrfviFhFrnNcYETsbabdpYch3bkCoDqKvbu18f4ZFJ3f7TsKTWztUr1LvRctwhqtp9nrxqeSKsZ9QZtsRR6GEFN"
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
