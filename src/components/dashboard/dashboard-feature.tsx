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
    "dY4RsoWhR1bgWRMcJLtxAnsFxpDrrewp4b2mZLgyK1Gb69mBb1JgHyq2Exyux5s4xXqevT8eEZwMjawxUDkkF8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NfhnhSETigLHYWbiME4zP2sHdiaN5bD5Q6tZpGFErfSzeN8TMJPZEj8ZVVNvGpLCtmguYndjBFGPpFy2ZC54foZ",
  "key1": "4z6xRa3qg96LGeK76dsrwLEtZg5Yg2HiCpiQhj4DKVvpxTNX33P1uTausr88vQiYnhXQvkvhDRpv5YZnBkeM1mX6",
  "key2": "Rex6Az3g6UdF7tjmiZALGMFpGTWnPNs3LYXutC1sJ2DB7gNyBh7gS9SWFk2zh7arum7tK4vPsaggQRiPjd7zw36",
  "key3": "5pVBP1RWAy2oEdV7uw7saZhvpsmpSXvVAX3QQ8oDKebSQkDskoeijVXMMptszvm7acEaZg3UtUSpKssvfgyecupZ",
  "key4": "3dWAKBoKW9gWyrtGWVev8T9n2fHZK7LoxyRb8FR1t7Y4cc3DECvmUwQkStZTZN5ZNPZtAQoDouQUBofPqq16DFTN",
  "key5": "64k3FoAwr4fd2TSnYuTPDQZHWSfTykqf2AkJyUrDWMYHNvnJkskn4sLgnVTWjFAXNyyCsihm1KhGa7yz14j826iv",
  "key6": "4XsjQMTKNmZwJzoYs9buq6ETzdEZ9YWLQo6ah829i7TVqkmWbmC6vDW1DxZ23vN9y27AfnzdW62pi4vfKUJWdgCN",
  "key7": "4hPuqexQCo5CD16XKAvwqXLXvi1bH2ua5NnBWnbDDbayKGumw7xcg9cqwrN3atoqdmCR5o31UCHGUhq3eCqP1mSG",
  "key8": "5Vq5LhE7f9RFfBi9tzxyjpwfk1SfnYLKNxCRbD3gQFeDXppo6ag84u3i1qkQajgLDrELWVyPqDfRmDSHFoBiLBgx",
  "key9": "5sByjErdFYLFp52y847pNKUEFVrJQwuN6VrsQq8GKK3qzVoxGNNv95BfPrko9B5ESBfAMAjJ5fE5x84Z75TR5Seh",
  "key10": "2EtTv1RZ9AnnaLxcYh4qtxK4oMmXQ42cvh2yWTmV72WY1AjFU9pUyJKHX9kubT4qjbhQhTiBt1BVv6LKFLq3wh7C",
  "key11": "38wH28Vz1vY5D53PHXtRtTQYyA67viE63fMqiVygbkJQoi86C1b8RxG8EGReKGwBNxb813zr81Bt13rcMatNzVMq",
  "key12": "3gAC4JZU49DxJC6RBMzQZaXe7JojWQV6XXrgK2X3S9xMs6k2DDmWmXouDkXLhymjwzSr7k5Hq15PoEqCeBBKqRa2",
  "key13": "5Ppewr4fJhYG1uGgvwVVL45FuMpPNbxJwUnA2y9cqGyr9yGAEYDdZgwrpno9zAMrrx1EBPgbu8b4exCD19VYCNfb",
  "key14": "5HRoNgjVbQdgfi1qkXy1XG8vpY9WoD4QDT9fSHPHRNDX1aJpnuJBjty1yPnDMcMrCGHKjwu6p7q86qzsiq1e9uwB",
  "key15": "V3XiooBK2AzzsjzXpSMUoHBiCLwQHD5wC8Ax4asP6YckRuNgWnhuXoq3xbVTA2z42pCTkPUppZzYm5Z1nTCRxS4",
  "key16": "3eBp4i336v6JLd2xiJ5W2NAs58xBbczs7h4xLMb8eeHfVqjQki3nLK72vwgKAHWCsf2ywdKapnF1Ynnr5eyGL2So",
  "key17": "5gsnTPtGBX4BKqnQyfNSsXy52YSE1zAqCrLTZmMKEWieBEyEaAYcjg7trNn4uM2WnuzxCCGaS6xhDG5hFQZBJCjw",
  "key18": "4zeZACGY1jZCRtYeCvNAfVsWPgFsF4qZ48qsQeaRVdmnyYvNxmQpMjXHCtBQc2yYAS63zotMMsh5qaDeMW8BAfkS",
  "key19": "4SMmZrpSzwEAryE6PjmnQhmyE26jbqqTCY14ttcw2z8NnCKs1GQzHvmea4WqWpXGzQb4aCfCnSdfcQQhhqD1pJSn",
  "key20": "4GFY8cTt5HsBzx13z1iXJ8N3mHYaAE4WTMLanMZiG4UELy5eQpPX6DCR3r3ZxPKNmPXubHpZZUmp4unrBQAgSEPF",
  "key21": "2sVC21cTr5FYeVm9ZDRCnUr1wgJHcty1R1KJ1UxioqFaw4B7oiQUvQemudkQ9qR7FkVjYvv6gckWibHmF7Zu9qiz",
  "key22": "3qukQ4ApHYqcwKngHfwt6RvbTk2Vjt5WyMimDWTGQS9kXmtfkXpwWLWUtAmfcLzhFModq2buY3U9f37VUu437zEE",
  "key23": "4c5ie7hJYPJdgGDP9PfQR5M6gEGTvVF9Dojo4qhpVCGc2Pq6LzZ3fdFv8bfHc9F7bLgYSBfmF6t7hqNPxVhZBahZ",
  "key24": "4nXib1m3SvzqB9u6xpHjf8vPYHsTDnqUpU62FMdXyQp6koZ62ACv7KrV3VbQR4pszHEdceks7NpBKTZsV4S3rmWr",
  "key25": "5Q3Xb5TEHiKXXmDRcDGFZ5CTj56mGd8wiq3mt1yZh6XJpe9JxpteHvQgFcbQVpmkakt3k1pU5shefxw7rQXJUQMe",
  "key26": "1A7KDiaXW3qaVwSFoEzhCHyiKBhu7mQjQqQ7St9w1kLHSWoMkQgwL6CM1gEwxRW21B76MnFDy6zYTJTWMFMUeRa",
  "key27": "3cscCtTPS7paYFNMGJzEmg4FBA9dQeU7f58xL9j9Mowbeo3iEgCtjhNUCLMmFVRw93LHhgfXWgsK11yhtRiEbswc",
  "key28": "3RYVUsBw5fFrVJPi3tPksfAx3TU13RaRiuL1Rphz4Z5vWZ1uz5pkvziLH7Lp2ud6zYY3FVjRCtncgXmkYFKwbCSr",
  "key29": "2J5aEDgc5AbHAsRBv8Afgtn5ZtqCypDSiGMNL2EKa66rDP3LejL8Sq99hosdrKfutKPaKmJao3gC6NB6Qum4FbAk",
  "key30": "3o1U5PvgZTyEfQzQxkzJCNCW3iTUZwjYqD7P1nnXqsZ3o4ca6dzanwAaxLkfYUfYufAqZYtaTK4fHTrreKSZZUNs",
  "key31": "5Mv7Hd36E3fXqCxHeaQj3TZXAP58vQR4tRpYSH7o27tgDsBYMWTbguNdTbtk2EHEVuTRtyMFfTTRmDRFRu9NphrU",
  "key32": "3LRfQ1ekPmUFcnXNYiKKQoQx4DS2f5SBHybdG3xFxZzec9Dva193QUcjy1mVW7GRqNZQP6k81gFzDsMs1BntFrTr",
  "key33": "3enNcUeQpTBpztjYisQCdfy2W5AK4V48qUNjJSEqX3xDMmJTZ77fhnxoDaCmAdbc5jzoNF9C3vrRXXcz7Xhxdh88",
  "key34": "4LCuMFsznjJydnZdyuDymzaCAu8ZXidRkbh4pDVmmNhR8XDWvbHrFsjEhScxC2KZsWergjcKBjXyLs7SbT53w8oQ",
  "key35": "4QWzmRLApGDMQkLsveNUHHpRDhTfwCMhKu8nPXmBCUL2VywVF28dK98A3qzVXhwsLRdGqeyPjbPwzTEGQRsv1BKf",
  "key36": "2uFYzNvydjFikZ3A9TdC2EzB6NsBSZp1DziChJ4cuF4LzPiM6AoQZo45FH2YtBtD367tRX4V7iPF3BwMWqtdE5VQ",
  "key37": "58nyQj3mv2RRPcuo2JR97qGyYTVPbHrbsbaCFHJXmb7XUigML4n66WYbv6kfHPmc4xSrrSBWRXBLemcVtpYNK6uc",
  "key38": "487WNdhs3iaFz6GejK85NXh9wfW8NorVMvSytwn9j3oAV96P8YRxixZ1WymKzeHECGJjp4HYhSx6T8XfZVa66H1h",
  "key39": "2Zsu1ve9UrRxhSdPojUgN9b36ggSPgihRjUkDZvdJhFQ7q6KnX9SGAq9TAdudffkM4cSMTVpwqBv4ifKnnHgcjyy",
  "key40": "2UhbYNnSgYZGrJb261UhUo9Vr3PoLXRr4ujvqXJxNA62ZGBdKTgH8osynF3FwEjZHSZEDjzx3Y4iPEcRGqiWHM2L",
  "key41": "2zmNnzrPSjGr9gkCRvZ7ECbLp4WLREH5brj9wrk56jEen6wLFSQvW4Nj2RnhjvQ9xgEGcYA3veMZZtiGEwFb51FP",
  "key42": "5acVWAMEaEoV46Q5i7due4NLmHES2sJfXfwVoQsH4MLcd1V5BCyjgeLrMiw345uPpz2rmctqDeoRFrw7uwsMSLxx"
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
