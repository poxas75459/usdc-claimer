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
    "2RM6D9CLyGaTon3643N3pVhuLvRxfitKKs9vKqFBpVnD6md4AXmAKoLFQtZoRfG7k3ovko98pTZCoHCMhuj9zdwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oF37QynzXQFntGEHx9qfkxZoFhVDfuG15y3Nea12BNHMs5x7SRKYXaAJX5jntoU4MmhNFjwhDj5KW2wNx5qbaLh",
  "key1": "3uoeftddnQsJkDqAkB4RU8hgz72jmEWKPmGypCdRysS8S7mszsWhXf7jS4U7hwXhyZ5c5TMGA5qkkmufVYmWGCCy",
  "key2": "SS6EBMB92UCjPdyJuarjVrLoj3SxTEEX3WAjB4UwqT9gcx5uYZtVPCoTAGXcgV8QvsjwQMz5nJyxriq7vprYd4u",
  "key3": "FWq6txb58cuRbb3nnCx1i65qDWnkyDPM9T8g5H2FiWfMxB1DTcthva6q8MnZC6dS8GLoH9cMD8MeaB3ka5Zbhp1",
  "key4": "rSoYUkgbxgW641hkCiLdHUx9GdxDonL6VMK12zXspVdD462Yi3cXQttN1wYbxPnYdZV8nHwat6TLqt1Q993RgAd",
  "key5": "4qrSCSY1S9xtwVoAm8xUin7dhj2wvEY2eEHCwjXxMP4Ddkh57K4yuZuLa6AvaNzCVqXxKDSN5wLsh2wTDijdikJz",
  "key6": "4P2HJ9e12jmsBwdd3WtsujQNhtrpdUw5nKKsVFEiKkd6GdvdXyUrFcK64JzW6QyP4gyEEUCgCoqKRnnvjhHMob9Y",
  "key7": "5vrPv54kvFk61SaX7z92rs79AWULoJrja6SVjE9QxJpQVaA9N21dPnUwPtyu9vDW7nLjx1yFXgahUswymMTXAmk2",
  "key8": "2G9ejap8RYxc6Vh8StfGRXqemNxqQquhrQCiktmhCKX3GDyXncUAfgVT3ZHE6xdz18NywVPCGNVxbHb2pYEGQGrg",
  "key9": "3qFUaiR6t7FeTdxJjBtE164SjA51WjqqGe1eoCpjEdzegtBKGqAVshiakqb1aFEWRZzXF8RShE7fx2ZsrhZ8vNEc",
  "key10": "5BrCHAT968wxZeXZ6ReRh8iCDCZFXCNWDHL71piXd8eiE2Vd8GwUQY7YFTYtcxNxW86Sy8yHVJNzAuCXja2cPtyq",
  "key11": "2VDgiUDMoHLs1JEd6r1AcA6ZQY8ELWr2456fs3onCCVfyxv4LyjPWXQoFZx2yBzaZLxANKTtp6PPFKLLhovQdMQj",
  "key12": "5NVyvYLWPbcYS7UbfTuDEqFYB7YgiM9Z5aw8WrgkTEREhUeAvLRzcbByGLkfri8HRcLu8rbjQzWwhuBJmiyiqyXJ",
  "key13": "rQh6RFWmUb1tve6AVSL8ZiMUu9UTMyQAThow84cwTWE85y8jWa3CQSzKjpda6RuiMY82QimDFksBonntYyxCFP6",
  "key14": "5SbpoQpSqvHa1NJPXYgb28FdLpRpTAnsJEFzAw2kaF8Pv5M4yTGXbZ5v2XbPMs5ZXod8diq6j5ikhT9G1D6YZ6Em",
  "key15": "2qgSF7oPT3qC4zHK2Nk8ErVJo86QStHzRFbD9s9qAEfD47oyL22MwyRngtynZYS4pihPvDXSPxPDk3d3rwiQL6SL",
  "key16": "5vZAs6qP4D58usX5k6eaR1bMv1tCLHMijv934yvBETHvMb3cVURLDXQSRTtRgF9NdPah7xoje3xZreYh8Pgoieb2",
  "key17": "5xDz2DCSEX9HQwdRJSwnxwKx4bobkkKZdGZ9eYqKFc8uAro9Rp45XQNmS6XWin8wPKicMepRHNZYeCwqkfL317vp",
  "key18": "264NTrh9pqcHVUbnxojmgKZQwG45Lgz9wc28p2iiykZKw2KcYDAjM9WyYh2d2MLKDn1KttefZzZHBiB5hzHc7cMA",
  "key19": "q1MzsP2RBoWAZkHdGpCcYR7msPzoQBjj126K8eQkd8A7rYmoJocGteDNQ2reZBj3mD43kKsnSN4vdfaeTBWsiLM",
  "key20": "4hQc3HrQsTx4ajQP7mzsULLSYymfAXZwSwRRoSigbWu8xNXnRbRswj2qxpp46pGUNigN6Cv8Wv1fGiqKJbkTRcFR",
  "key21": "U3AAfnYiGkmeYvebbytjc9m3waFLfoobpLc1doECtj3n8PH1kxQzeghb7QEDadGRHX2NNNc6zRknkDBcYJrTNXF",
  "key22": "4oGAih6bhsZeBbbKYxX3JNACPTTN2LgvcM8yQxwnA1i6m2mZHcjX2PoNoRXo1FeEGSpyK14eVX3tCqhcpdHYFMnb",
  "key23": "3Yae5B3njfmX81zv8wHbfTRvEnXFE6AihykTMrcccAT69mihP6PaME6m77diopoocNkgN4XiuLaDyVRWxZfAJ5sU",
  "key24": "2Tij4CLwxK93MxH5GqTPjDS618v8V8XC6WMcbNdzgj9YwuneVJr2k3ifK92bgv1rSszyNKGjT5G644u7HdTy1g9p",
  "key25": "64sH8pEHxZWeqSnkbXXBxrVUgbLVTGKYAZHy8XvTnei2WNqVmcAE49wXmXZcYdxEbc9jWJ8hpxZRhy51K9KEGLcr",
  "key26": "3LNqzP5b7JUT5mZ2X6VfAiyVNGhsDnfcvfGewKQXSPJAiQN1towLTzrM3PeMdk4nAHTZKkvqwUz69D6VyycZiqk6",
  "key27": "3qmAjsAkRpmEmsF6jdxvE3z3W2FeQhpzCHSCW2khtcZreohcrWpkDCs7n1R51o4kHeMnvj9CSSo3szFgvbmvfUUu",
  "key28": "uUf9QbhcioLjeGhaZWJEXqxYerKZDctXKHHGXHtLHNWnecwbdfrVmrq3ZVL6yEyP8L9rtEH78a9q5XW77qoish3",
  "key29": "5Ac42pDZxg5ePjoh6R1knoVDaJiqUtXNFLDmYRC9Ffa4XZNQG3j7vvYXGVUMpRNfLXyeqCwJKkpnn2v9Ut5aLqTQ",
  "key30": "4HkpLvqhCbUdt7mmFCXZnJK9i6qy9VLZGFBXbP5eERcXSw2QCqBkcPzN32YNbTvF3GJNtGruZDJq9yEnhgZ3EPee",
  "key31": "28FC9TwrH8gfSowTuQVKyiZ5x5GZtE5pc1bCMiPHjMnNYXtrZfcxkUSfi7hWVWVGUzwffjW8XNB8pGA7ttayETR7",
  "key32": "4TeJRaxN6emAEQLtmntYGsMvJYEQrVQczaLzGSJozSmo3FZrxR58jmkcDbTfQrVzVkEFURw3GCfhSgMMA4C2nckt",
  "key33": "3gyPqDyiwRFG4PXb2FNLNkKvt6Hhn6yoLLBc214CEaUW2iAVmq9TjSvtr9nqg8XNAJG9swoSqG5iZGULhsdnP1pH",
  "key34": "5npBrpgQEoAemxewXpkTCbfjbBMHTJHhEFyhH4XMjjCg8arT5mhuYos7etyvCW5Pz1Qg7W9XRa9RApK3LYDcPePk",
  "key35": "4F9Su1yr46VYNQCeu9fsj9Z5xvzume19LRm8SRQSkLRjmHNW4YMoZ7ctjuYNHfM5uUE1BoEiiTrSNcepMCTeAJHL",
  "key36": "3o63m5WYQ1WX6RFSQzRoNyuHfZpNrqvqNNdypUcTFMnR3SJhExjhTfqPEbrZvN5GZ1c59sHLER7e4jY56pQkXQoi",
  "key37": "5cZZJzZzwaqQtBGq6AYGwR3SULzTvorcehSVfvL7p1d5bAMgoFibLUdwSuZWJ86Zqa1Ugh1ssb6xgMBd5zFSi6aw",
  "key38": "2ie6jfF45d2GBWwPeyVzCYEAJ5jmnVVMTxoYXqmEYoHpTwqoexskobc6zqxQURuQhUUWZqtaBPkLRFHFCPMEzjXh",
  "key39": "3xrM1XPFm45qBdtis75MArq815veE3v5BacDgLjmTQuhMJtQCuLMXK3vZ2YQPrBj2z15TYD1jW2KAcW1jBEt6PyA",
  "key40": "2YUFwgTThN1GveNtqqaDmNEPiyaJhpYpksx7J5KGUyxz1D4FK6ZCqL5Ur4BshqJYzNqV5WtCJ6NRHc3NFmwN9BE4",
  "key41": "4k8sQFMWKWArZz71DSiQT9VVeocVrSdbHzj3az8Nw5vvxpmjLoivDLAj7MteziyAW5b65UpE4emdZVHCmPmZYdN",
  "key42": "4TeEVvnkmYnwVtcB2NfzPuJFA3C73E6JQBoGmo9fG9HduoMVx8UprH4Gkry8NoN9RLYbbXStQHAhcHvn294bKjCA"
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
