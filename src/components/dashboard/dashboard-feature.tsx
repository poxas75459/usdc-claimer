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
    "67YvXwtrLV2d5F3B451v7xsjQzkNjoukhLvnCbi69Tmj5KjqXx3kxYG9ZEfw62hTyTDJN7hehug4QBEsZfugCdJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UhpN9zaH2vQsvUHaeNw6G69V8v3WtnhWBny5aYehMSyxgV3LrB64i5o76e1dq897Ntgvck9iA2LpdkbM63audZV",
  "key1": "eNLGTBf6kJaLEw7fB5KxQTzVVpQftEoVUn7oM7zzjoMGEsUJqCcVgJazxd4RRw3uiE4TahwTRRLPdWQyU8YUEFB",
  "key2": "TgSLV3h4gs3srfs9vtZAU7CDgSEG7ntRzZ1PySSBnysHfiBY6MxLowD4vFt9bpsUc9fB61P14dThr4R644wuhCh",
  "key3": "Mw8TFZZzwxgohpuEkY9AKYoxQ2RhxtUQaumxPMfUrf9Ao54ZHsWcF7SsDdsCnztCQaHotvJs4Zhe8tqTF4Z1Uzv",
  "key4": "5P8Yph5EnjTdtMoZntZcEZWAHCM99Yo1rrnYxkbQVhfKHuTH21i2hRNMweBJkhbqprnocJS2wiyhParwHbYDfM4U",
  "key5": "5RdthoCJKxS5VxCGAua6xjqRPeAMTK7AFFCDgfF55vMiwcD8i8QFnmAShxxbXJqGQxm55BJcez7gjtpjU46Fsoyp",
  "key6": "QsxsfBS1omtvQJckgYvV82F1PwewM8yQYzi86zVgngbmcXcoJ9RiQ4n56BL9w6eawRXTHJTCBPvnoXfPbGZiDDc",
  "key7": "3dwkwpbRxEWT6PPpx3V9tsZd187cPj6K2Hwg67Fm1tMdZL7pKEwJHrbfBHMKZbb3wSA38nxQq775QamcTRKwzV9B",
  "key8": "2a5qQ5akchnF426y5bCR2TdhAU9KmXNoSM7sBpnw2bYJNDwVmoYfzCj7wTR6Uj6YpiY5nv2ZWw6p7mTZyGK1jSMV",
  "key9": "5uLCY2zAPVzNJkDTk1Df4ULxirKrbCKTWGxxzxoicQG42QkcMP12zjeZ55deJcPrQajrFZGExk7u1wryTKymnk4b",
  "key10": "3xys7P964XQLDbVBczUKPrhq2QmEN3aTm589eqC2HHdP4cT8eHxHWg4Bu7FW4qCnNiyQFu5meLeFdt54Wai46Vn8",
  "key11": "3Rw5G9ztvaQenKwPgD7wiwXEhrYtKwKo4Jy73igFMYy6Sn6NVT4kzdSWCSu6NSPrQ3pCCDk1eVQuhXKdRRzqZcGa",
  "key12": "5otwTFjvgSdcxzddxzsxwbwAyY1dYcoJ4WYQNRhmbPxZRocCiALi1PaTrjVMCRSRmhH2iHKEwYRgCSL8jgMWzyzU",
  "key13": "2cJJnd38JXaPM4qWsrhoYwuojrffMHLH7wSa13vVoTsbEyUv8yuQJ3kzRmMXx1EoH59PD7kiABSuDweeYDepLZmU",
  "key14": "4oYgpycGjGfxqfqhYzGg71T3MBvLNuqpvUmAAZdu7fS5iGgJH92zrEb9VW8HMBGbFmbFu3PueLhM1gPgYXzzokVG",
  "key15": "4r4CTnQDvBKrvBJuJvL9kbKT6PR9XsqXStSLpTpcnjEgBiLo4trRBeZFA8THaTvc5uHt44QiUs8yB6tiQfV1eyci",
  "key16": "4dhqBPG11pdS5FyXLdHck9qjGDUy88p2n3viZpi6oQTbnr4HyuFuNTLaqkt1JqhSTcejFjqzzm9uiVjHevQkpvR4",
  "key17": "3y1aHi9xGRw7oN7PWTecykGnSD3APSkJ95C5SK3TwrbhGuCwo6EA1yftPy61ZfR4RGftgnGgibrXtssgZ1z2DJ8K",
  "key18": "2TuTjvgYucLsdrgodqA6DvddtBzuW67yivNdrsM4j53HBXQWvffVGKYxT96tsCAT1jAvudScP38L8WqefsTDXvRz",
  "key19": "2PRBwTcUV2NE9zGvTu9WgMaYetmDGhDBfi1uHVcmCn67cKpNcthtXVW3Hm3tjywimcn53FjY3PuCrt59zi4Bz2Ej",
  "key20": "2LeQAQD1qActr2cZ3VvGC1yGek61LsUNUmZttXCErZExyRK53Cnw4FhZxiWR95srWUbYR2te7PzmQMaTsbNsQrfq",
  "key21": "3WHFsYZwG9EMXzw5bbKqcQomBX2BF7u8wg5zsQqz3QCmae5WDTBgLEm6A6AiSTWqawe8qeXAs4xVdkB2S5VNAKGK",
  "key22": "3Ndq1zzhbgpvDnQyNDY15shKxYHozkpCh8EWVfKti8QLVSzbSJ2AvaHphCtWnc5iuNDLoESZrgrmpDykyd521L8P",
  "key23": "rXdbYrrccbrqHsNkNL5DdqQxYYLhTqMicRSjSA3EDem8uw3AT1bq8X44Qw9Dfn8v5NXvbL3QaW5Rm5vNYN9ejVp",
  "key24": "5UcBqPZYnjLLPfhmk5k9EThnn5kEofYrNBYdEkE6sKVykenzKf6JL11gDqTpEZzENs4HisSwehxVnkVcsz8HLVW9",
  "key25": "3MRGeSvavrPStdkBX8xf71RrFgLFfLrnyc3jLAXcCktTzT9KjLKE51H972N8ARwYhVrk2MYdYEuKmWz3hqqKPPdp",
  "key26": "Wkzu6SKdUeZfxYW7Tt1L4FHvjL6k5kz4BdnF6NPmHC1eDzPNP2G2LMgpaSe9fNCDjXL57kiP1vik2TiMsSFovui",
  "key27": "5DfxexgDCVvwExsvumRvFyQR8tTczScYFJeB4WjZvP9xbvKQgVHUDpv46RiMLifqb7Kpr5xtn6xsoyShmCzuCY4w",
  "key28": "29ViHs63YoEgyFaVCqRH9zQ6c5hoGTqrbgM1NCHprYxnxu5BoGyEx81RZ7BXahEnWkWSN4zH6k8G4M92G2CRBQ8k",
  "key29": "66MEfBX2Jo5h3PCFpc8EqsLm7tU9s1WCjyrSWYb3h6TmyFYUgq4QrUjmoYTwxX1TAZcx1mQVeJSswwRMVq7F5xMj",
  "key30": "EC8H27VCyMkdNsDZUx64Dvv6Y9rydZR6mT19yPXbN6r3qQ3WDUi57p9fLYEj9RWgX8R4VEsMYQ1GkTZsb34FSm7",
  "key31": "3GH6izK6gZ4JyJnEWhx5VQVAe63NKjuYSjKMmiSPDhwt9h8F4HcqQQxWPyFhiCGmpdfrvayxkJhbsfr2E5VZHqfq",
  "key32": "UNLTSh9MvkNHmwXkVF9zqSwWo7ipu1TREut8ZNW573hrHhS7erMsPFo8aWnDsnd8uTgc1DswebbjccyhLqV3NWe",
  "key33": "5KGZFQCCy5tzUq6zRzyjuySJJmAL4Bx6pTPe4v6ZzBdQktV8JEGZaj5L2aGqwjMDzkbZ1cKAngHQVtz4RNvC9LMP",
  "key34": "2bytHV1EaLEHEsKJgn7r2sZwQumRDRXoPkiifZqPHgJmJyRrbJM3XiyXvVJTCMSP76VtympyyZL516eRVtpJE78",
  "key35": "4AaUNoLUmnUNEFt5i3ukW1fzj5h1Q1PR23AjhDJaUeYeQ44d9WHum1eGomvsPhFXVqrbv9ZJvPhDB2qXPx8bTD39",
  "key36": "47FK3BEXfhtmM1E1AMUyktmzuPZUcaaTCNwjEReQzpD67Mj5KAU31VwMim24NtKrm5femcckyzK5bEjdybuvyGV8",
  "key37": "4Nnw3BkFELSrTL7Q9eeFqtPFjk23f7tQPkvRwcY458rY2tK2YuQa7czuw33cCAkhC7JrYd1r8vjTZfKfXb4vyhWb",
  "key38": "XpThqGtJttPNY53T1AGrjtmsyzVWizGe7tsQc9xHkuT7t3PBywcoVSgijAGWQbPkfusJ81BxMUBfyXZGo7DiSKf",
  "key39": "4vc2gsB1CSGU15QhukDWAdurNnvkzyQsLrBPygQUhVMbZE9tshyr5ERU8krUhYkZDVPfoeRmr4PG7dXsFwvRsYBk"
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
