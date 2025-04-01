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
    "3xMuPmiyhG4CtmpWhkcqdJbvxLvCQwbYWZRq8dWJWbiPb81AspdtUoXPDaSK6WvS5j8yXbKvQyY1eRAA1kVyXpED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dxs9TUYt2uRLqnqiisnAET8ksrCKP8cotSCzQWPxDMq9Hp6pBJaTuywRSux1ASQPqZTvhhHDW8pxxEVy8JWG5tR",
  "key1": "3R9nxMHeUY9gyZaNTnLBQST7n87QXQ95UozaRwtpggMVhmpg6Zyk66jqPuF6oW34WgwwCZjiEhxfHd6c8foJur61",
  "key2": "3msgvzamGKjDh1hAAprN7e4J267xziRP5dQDDYimPEHTWSyAP4MhuwnNDGk1X4H8hME53QpWETPkyJr47AXYEmX8",
  "key3": "25zenMBNxbhRH6PzHe9BB5f7N6sDFeTv2eCWnJyJMAbyZRkHHC37eFe5N4AsA26ututWS7Y2udhs2PVo5EXcbHpU",
  "key4": "2rthTeJuoHCN5scLq6SCpBnH627ZXKzbf6iAqMGm9uq951bp56EZoz4fmGKBbhRTS8Zebn3hAR34LtLCregV45YD",
  "key5": "5T219wzbXa5pBvzYVLi6Q1u8t9XSmoStCePQFYW55ZivCqVh3VSvqPgnGbivhGgZJzmD6ucrpB4hp2kANuqaC4hp",
  "key6": "4jrvPpoEpUeK9hqjJDC8ocDsXpqmkHhikEMtwc5oYkAWdH6BtSNuSWXu93qKHko1jCCSzzXyuq1PGy3HLGREUWfD",
  "key7": "42YhQxNxw6RLdafMbLxxoeaWdJ68V8EtgJB1W77RQGAu3xceXwLSHtbUxJRDCXY1QJaBZ3p18kHh6CkobCy7EiVq",
  "key8": "SieSvWuRqxzC6NcFE62SN6igjHoZibbdCdzfF4nkw11pWrddyMwtt8NPVm7FustYcojMRc6HeiPRH8NXo3M8icc",
  "key9": "5yBCY4CVNWV6ju5B99jBEbpdHPBc26BhWCFwHYqRk1sKS4H3AryK26BA7zWfHbocfHLWuPSoqabCMK9xLa7YUS7R",
  "key10": "m1XcUraoEfKjZiFRW1ucz7qLGDcx6XQ4J2TQ9WvQ1pMkfajmuXi9cFp8SwNqzsgcjdwpQP9g7WYqpWQRcJSBwrs",
  "key11": "TpwQTkHijTMpWJ19Xz8PmMM8jWh9bNAL9UbBM6AnAmKAQ9HeZ7QXjVf7ZEaJVKpnoU3gC9WjK9mKTuRsxJ7EKx7",
  "key12": "Dhk6QWSe9MGrJwxtJHRoZqd78Gt5JwwvbqUtyiuS27ULAPA45mztHiLm2WkFVAKRnYa9YAzrPZ1i5t75pzZHq5g",
  "key13": "5FV86RWpJVjTLR1KWXybtDYG2r2vdXiXUHQf72jmhrunbrH9bFCwxBcG3amMeuwbA9XwApPSt93qbkcjUi5Jf4cK",
  "key14": "2JSKEuneUnys9PwKabujEA6n4DDP5EKjghxg2qhBNQpWzig7JCsYVnmLwiZrtZJUmydjMtMhmFAvKoG8TdyHCqum",
  "key15": "2Cxez69FAdnpfrKkqHCNPvXq548P5u9TFJnAJBLn5Jh1JTS31mN3RNy8nLTZYcm5jNxcmjqG97ueSZT43HUbBB2U",
  "key16": "3svGgUC5wfQxKrS6cyk4cUTsAQBXuEYfWADo1UFAn3ksQf2DJ6aZcHpq76bNdQSTFYPJMZxg8tChMXMK8CWWBwYR",
  "key17": "esvsgGrGmeYzAqiczkrSDjTeiKdXbF73GziSCasSHrMr1yTp1HvKmEHZuhAYvmMswJpANmnpHKdBz3QSX3dsjCi",
  "key18": "2mhCHbNTVd3Dx9DLdLYRzdfjoWbcHVKwPb6Cm9eyE6xmXbC8UBaZkYqnRWsWsdz8CMXECLwTNH5kiii85givbhWx",
  "key19": "5a4aCX9hg8rqLuV2eNyXzsLu1wxoi4s9QQjDD7mSh72LEhNRR5gcPE9Vdk6CQwgNanqQDNH1rjew8BcWb3u7cdb6",
  "key20": "G4cgsmaWFPD6kDnksGZAoSvu1tJbRkrLD8XZvhd2XFGnh1kPj6UA2G5FnhUPHLSg6uW2FUDkpCwiUTqebaba7vo",
  "key21": "25dNvukAUbHNHbiTFHYueShnp74mSfSr4jMtmLuE2aNAVNC4P4ZYEPewD62MB8wcVBj27n1Hd8axRr5dpqVHdod7",
  "key22": "duvmiAFnpoHkVLNaaRaAekYwchZXm9Jt9amQhnfaubzPUdrC8gTE6CmesjyLGaRcgZc3fhfQ2AuoX3xtRej1JUK",
  "key23": "29mqDTDyCdvzzaS5dQ9ETYk5Q6GYmG8aVxk1NwJNs9BfjpH2gdvZArDKPc5rGXqZamZhcWjWQgRkiGqgsxjGwVfZ",
  "key24": "5kqy7ktGmg5sqY7JBqoZyfGoF3oFW35DYqhLwvMqJh4AtUUe6k9GH3auaf78EQwfqfkN9reDvJ2Q9PDanAE14MyW",
  "key25": "xnApjP7GsmZhFjU8Z4mSRr9kNP3RDs4ZYPMne43ebchXnx4pWTLaPDbNaU7ai74CVYkKj3jU7S4MRj1iw66Z4WF",
  "key26": "4Wn92Yi3eZQBmy6rfnUrZBAB2zBfC9Mbp3qmZFJqKmpdLcpCqKboNQYx2vkhKQeZPgEbUZwqsS66sJFp6EdWo3gY",
  "key27": "4gifzWV4B9NtJbqNDh2uYHUU9Vqpi2EGy1PdAb93tbnD1VwERFAkXVMTtKVES9352NcdBoYfFkPopEryjYcK2E5L",
  "key28": "2SsFdqxF2fBXFTBSXKcC5ak1JgGnc1fML1rEz1XDDPJqeCSgrEPLYoeBMDRYTxYVkvr1ydBTEZT92oLkG9zF4hP3",
  "key29": "3AK4nUh5y4Y32oC4JfsUoU9VJ2h4Bik5GLsyoEeJ49zYhUnGoLsPQtzqjXrLk1Zxig64rtoEKdyLa2FhemzuJLEX",
  "key30": "2YSeer6AUQVHWgqjQeAXh379xprbPx9s7DWTP4NDTD6GyvSy7Na8qnKakh5ebtNpHz3fgXejNTrnjcCgScJb56h2",
  "key31": "pxcEEbgeEBCQwewm1Hu7tSb5RsdyWSCxzJHQCpAgaEVL2KJH2Xiosey3y9AVyfWHYjSzVFEVFctBdCBheXkbsJ7",
  "key32": "2pzAbdSoCamp3Z4opeekeHBSwsJe97M4BUbmeWVPyyw8fWuhRvpf5iPSAo5WgAidVsgEYY8gbKCr1r54T7QqXJVq",
  "key33": "2xAKXiuvurRukp2B8AKoKUxDp6cWuHPZsAPatiaX3SzJBy5dyysPywefxZ4eErhRCcYKsL7g5CmAWRR7NQRxNjh2",
  "key34": "iuoXiksd6dfFwpgf7D361x294yAzWnbF4sa6TUayXWTjKkTxPTBGBwCwGt1oMUBRn3StCc5GX9Cv6BRuWrNYQa6",
  "key35": "31A1uyZL7VTEK75DvVpRyXffQRLqo64Zgqmji3CrRNkA1wdfoxFKAXvifJfPvCWq82Cma1gmXnsPjKXYyM7zKmLv",
  "key36": "3zYcWj8trv6DmWAARhzPYdCm3nEEbN9ZziPtgPbFJs7zaZgNYDzWHmV2Bt9GZgs3zs9rJ7FBAgLdW6GK6bntu6U3",
  "key37": "5PUus1AqXu6DFN58suisWfdVjzAmQNXWgti4wHXFmPA1mRJFPAro7vktqsWUqaJtDyrw17jZMm4YtkDjEMm8zj2v",
  "key38": "z9hTYXu6ygXQYf8CyCGQmT1f59rm3BDbyfZbXmWMJTDyuaavWbmnQrFJCBNMWj9SBZpkBGe1LTbR1qE7mG3V6kh"
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
