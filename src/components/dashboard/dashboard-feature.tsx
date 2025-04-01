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
    "5dzyWPP1DAbiuLU8oWudxB3DUHSVdtzY9RMCJkXxoDDSzWQ9BsitC7T5KkM1iK1VQefNQ3nRqRiMA2QeupYi6iXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5emavWr9cWngg7pcAaYsRAHeKp79S78cUTXqxfrhynmT7RG9q7YpDA2pfipofuKVo2MQiMCmH7etGENB7cs5137K",
  "key1": "3KEVaCRRaGYERyZydFJKQhCcjQGPzUawyhJiqGScwLKtf6b664923WtpU42dUMh4pGrx7x81hMQvtbVtoq9mskao",
  "key2": "ukQotnGheH6s69zNmMvQH7VRrikZE1eYoSWEposVu5eVp64YqiKUFUtniZSe71EpPRjdpSYNT9kNUsTtk3MghLf",
  "key3": "GNKSVGucka75Q2dVVLpgxBvoSduUuYRLhgF1gzk3C9HG56p8vtkRJsk1v5WFbuZWDDiVmo5TM13Jzk5mQBdpa1m",
  "key4": "3BEAwRDaYUCVw8Ei1kJJEUKgX8KCLLBg5G5udnXNeMwKoJKgh95pUYCT4DH2nMD7JAEiKEeqoVyygvYoyGs82hjU",
  "key5": "35uEGisCytbGKE6Ka3LN4zjwSkZmMq9LhK3BmohbHnMMfDkrm4bMucW59ycgzkTN7VvieTRRjhbPFXTFWtE67ECP",
  "key6": "2fwTBi5Y3zhZfaggUQdG9ybSkKYvbM2BagAJUjYVkMRZY7Ry21e8WcYMRtR5URbeMEia18UfEv8YYyJBempKipWw",
  "key7": "4VknnwoB9vuyKmxtEMam4TnLgJKrDrGwSRNApfwRLcCMFYrKaKJ6JY6WWF6sR2aj4fnxzHZVwwffXEHzB9H23DuV",
  "key8": "YkLuEfLUM9XusjpafV77bZwYvPpb8r1Rgw5CEKSUA99YfYUnHHyXxrMCap6gjeDM3KH9pGDiRMuZrMzXbke8sTK",
  "key9": "Ae7w8WBCGxquBDEqiwmnyDr76nppNN1nEw3NzATu2tnfuG4YrxA9E2qLZGQpqRHcMoWQJHhTz7z979wqWihVZiQ",
  "key10": "4RCMqkre1o2ALyU3xepP2fLPNqduMSEJBGCv3fbFMGDBVjuv6CzsE7Voptop4uUwgqb8MSGVKHagAj6u4E7ySvGb",
  "key11": "3Eyqbxo5aumXK9seX3vmmZMQnsv5Xn9Bfa5LUf5RkLj4mXzKsnMjURGuEiUJQtr6KnaU4ja4vcxsCT6H8KWab5x6",
  "key12": "2Q7DdVQZFkrPaXiSKsDjSw2kktWXUPw53DZAnxWogup1MSUhe5PZqhdvdcv8HKxJ5X7nCZs6pUc15RHFSEUmY2kJ",
  "key13": "2ajf53ByVyEL1eDQjyr81R8XwTLEb92Coc5QLEVkD7ywz2gcbdgxMR7LDiFNzJReRqPmmAsbQyZ1rCMLDeAD5w6B",
  "key14": "2zuUHTYkYBuutRnxwgwZECtQvvsNy8Y8Ejrj5tNxfxu1AR2aXr4iJiFBqiu57Wn6qRhKTn2BsJrqgz6kKGom6YN5",
  "key15": "4hec38KXtpWe6ugMS8wpnTYvrQryouQM7v7tEoQqJN5rJyHx1vsg1r27wouwzKQDM3U6Fs37AXocViQ3rZ1cfGEN",
  "key16": "33nA7HfHDGmYgq5sYgqGKSURzFWADnBMLoaEE8JAf6o9L5rPYWNXBpVY8WaQEs5FaUkB7rJXm6Pb866XvTz5Y9TN",
  "key17": "67FeD1fCJh9KQYZJ4hBRhkrrp51qLEF52ALAGiZ1HtDwUE3Xt9PXpiLVntrHygE6pCtMyuNCaqox3EBmLBa6TPzm",
  "key18": "BL82Du9dVhkA71zjcg4kjXN3KDiT8PKAoKarMJHUYn4uK8jLcyAknGfvRsv5wojKybAK3cy1SpK2ZL8KdXxR2iE",
  "key19": "4fupZPNCzhTTbWw1jCBondhcTrtTCpauVjD6RpAzrgKfF8C2KnW7TuuXV5iTN2NjwhDqKBveGyiYV2S2NVZh1ACJ",
  "key20": "5EJW5SH1VwAHtpG8CmL7ZZLqppMmq8nxnDAZvuaX7FADiaDqDG55C4EWsLjKYrwyKS529SemKhKaC4sUzt8NghEt",
  "key21": "4NsR5DL8FZTsAc65hwU3876Gkojke9Lw8Vt7sjYPPTjKPpirRgFWvMYSAZvfBCGxSkEzndSg2C72XDXdDaoWjyce",
  "key22": "2VG4mqYTndpJQRUdZntXkpTBWK4VeP771UDTXnYbud2xj4KXgxRYgX72wgFFuWMcK3QppnkioaKeEMhTqZkdyJ8U",
  "key23": "4f4pDtgHR4j7pVSBbjyCyDa9rEPXzwJ1MB8fKHgFa8Jii1tNtvpghRZFFkeWLuqXTxGnKijB7srMqTNppVGooyve",
  "key24": "5SXskGv9m1Pw8ChWMiCJu8nbsVd6syG6kZVoKHaVwDfmTmexvJbcnCiu4pPWTiadM8EDZP66jSoAKxyd2oicbSU4",
  "key25": "4NYTWuZor1Py2jqpLbkGmjQmAm3UD7CisKMW2KDP4anVgMu3oJzXVTVzN53gHK6Pf8Vurf7w1wMMnVUmCyxrqD2A",
  "key26": "4MdZfVuZTBSXHTNBdKtZdwUSVP6Z6YSdYJPWeSS4UAMSj4fjEbZq6CbygpcKKkmwhFtvx7YKJjhVcai4VhHBoyiu",
  "key27": "2VkQnj1KkrKbYPXXj2M8SbwJFbbSCUpEXJddH528At2V68XwHWhDVpvbr264MVMiZSEHDUWtYrDfNyRpGh632mYc",
  "key28": "3CHBmwA21BjB6TbzwGYNCwPJAetWp8TcwF7yq3oBfbi4tmFqsFJEAd8HyR9WrXM62JhrmSjWgm9bowZow8vc8uvH",
  "key29": "4yz4A3EgEV2kFQ2JAuLJmCEjbDuy3N9HdKwXsb7NUrtiZpuvJx4kz5kK4SzQebVKaKiJNdbsqNaQjutgmxx12yCg",
  "key30": "5g5c1F8QptCqFccRGTTZvKhqxgfx4mh9Zm9h2KTYYEMt8QUUrmBaYQn3ai263sbEvHX9egfWh3qYBsNAYZRhB8m1",
  "key31": "25Zrz3BMgKJTyC9fEKLMwMtqaAnbmR8rYaaun49FbW9ZH7oX7r47MytWRfJuc6uoETP4axdNTunALi2a7DE7QG3D",
  "key32": "5miEu85r6wbAE3BjQ2E2XXNfNGofq21DGbC6AfwMRHWXChEHoTz9M1btaqg6fRr5vUFxjR2YvwE7YWkm67NKWagq",
  "key33": "2zLaaEXhP9sPSpxUYGgCd4ehfWW5qpDHttaeFpvguKWdPV8iW1d9BQRnp912cV565u4P3dXiuLq2vjPqZaegq6LD",
  "key34": "2oj3zRrqhcWeymj2QHVq5UM8zFo9TShwQXxTZW3xmLjqZ4rgJyGr9zVxdoGRZ9eGDcNXhTtkQgGA3NtWqMxgoT5p",
  "key35": "5srVgCmspwq1BNL4WwtH9nUDgG27rwxPLZyyVn3YMkMDyyzALNyXRFMq9yw3N2Ji2iSSGbksmM3ErFbA2f4Utsc",
  "key36": "2ctgxhTxEKjTU1eGuYfcUMGAh9etNLK39DRjuwiyeEEAudLKN6VjoFvsrw4n7r3tad77WTjczp1GHWtb56pxYneF",
  "key37": "32EssRvhbNbZ2BaKApyNt4yZoikkpyvNSfFkbyHDSzTLaEiPzuGa39sFfB5J6QTDoXdbwiJapoGU8fM6of3hyHMV",
  "key38": "4Trqu3z4EqrEgNwioL4LJRDtLVaL6DiXLhoDZ5MWD37UX7vHMisLu7jQ3QdZ16q2rbYhhJkShvGQScEzqGVrVbem"
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
