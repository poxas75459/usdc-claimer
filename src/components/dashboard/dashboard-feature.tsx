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
    "2VYQWwVDASVifthyEgQ1ngEQxsTPWtSnAKsPCXT4Fh2JsYzPNLW885CVQECU56eK3Mhn8bHin6jq33dTbVXR5yyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8s7H8KRhprmDDKA4fmP519i2WpyMxwL3GSXm2njBFTQLFPsACKhi8w8uYu1JEFu88L1j7QTo624LqRr1SuYWZLV",
  "key1": "3pzB5AWbeftV9PjthcFZzeQq7Qg59rZGLhU45EPKjCzSgFXSmCm7bE9kp5RYQqHZadKmGYjGvLeAf2FkEydQ841H",
  "key2": "3hFfcDwW9HsmVvyyZEUzdkPiipiEvbVzvJHNWUMpvsYm1D8X67NfgdnAxTN1aJYJqjMcEAEusBpbMCbsVBb1Qjdg",
  "key3": "5PK48m5AaQcGZAGS8d34g8Kj2henZP7cMTXjLmsmBeHvf81nE1pXrwb65vXeVPWa2xeTbkPd6yfPcgDWBCDnDHCe",
  "key4": "4uYRNbttobko3tAPBr8EcM57XNXom2KJZ89BsqDQ8S9Kp2pdWjFBi781dcqLq6k8CfdvHXz9YZkBC3LfV7dJziEk",
  "key5": "5qTdEffLiiVhhEnXWUaFCceQiaXkTP8bXyiJ88mvbPsgsqUPMn3u29CPH8BTw2AyeDqY9Kgd7T92SWiUYkuFRk4M",
  "key6": "CckofbNf9SK8LnpoQUVTz1v78XPcPRyypTpCi2sGZ15h6VouksXUoQY8CjLSos691Agh4THxx37od6HzLoubyyr",
  "key7": "5K4d5EWkQGf6Na7wzGwBPbpZj9yQAQEyZZLrAbYpAvzzYGmtRTB12poADSPuhSBj8jhRaTGBTXddzZDSu2F9cDxT",
  "key8": "3HarufpDkdph6oTvti4cCbNze73Xe1cPkFySmSkP24A54dSLrzjo1F8c34Va9LvggLFiBxNxwzqdvoWAxGvDhmGQ",
  "key9": "3ng4M5JGzHmTCm6EFRJDh772AqMGiWLtPoP9mwvvdDtQE9g32p3BBpexXMyiW5YfZntuxQXgJu7CnCL9aJf6qsDT",
  "key10": "5qjmGVhcMHuSiYd8tFJ8bx4ikmTNyy4MpFkfsNmkEKZfRUPQEs3eNzLJ2C2xwB5sj5sLSKbHYJU4YkVFNir5yP5x",
  "key11": "3ck4oNXAbSQNHzJarSkqPr8J64TXmBtPdnfG5VoCyZw546jUjPqHVFJzGFBMDh1TZ1sJdKFRYmcxpg5tYfaxxmaP",
  "key12": "2qwvoHriZE9hC9aX3SdoHaTzKG87rR3ANr3p1bDqNkELNKUSDrG8FHQxfgwKjoa6Heu2kahEzQwUboExnboyA9iM",
  "key13": "CGEAdNrv4Nbkn6926UcLaouUCccVihsWNUz3LdG87Lx6AxcuNpsfRURRegg9PyUCvY4etQ7E7CnHHoiqHechPQ8",
  "key14": "3akAZDKs5EZ1PawKS8uNdAKWF9e1a22NB9q88DRb8pyvy13fGsMwnCFkshEHtbvs8PHZ3RgPhS9G1uUEsD8mxx9n",
  "key15": "5X6DK7wuALaeGh2qdw3tDpRL1PfRffL1htSdM8pu7xideb6UsJmEyU2q7cbJKQm4QEXLCTpxLT2ZUsNTqZqN1nuE",
  "key16": "4Q98QZw7oMzxm5jySaT7TtBuAxaGEp4vwVaoiUYkDd3q62tPZj6ApuCJHUaw3rDtaGu8FVma83x7guNsUNjy3Fc1",
  "key17": "3wKdE9ohE9T6oEjbhSEBtK3JjGPZnLktnupsQCSiGSgKMP4DsSYrdGENnpDwA34XdkEicLrB1HtfPjjKa6iF9MLj",
  "key18": "3CQZmzr5k7qTxVKvKnSnDsa5hCSHs3HU9cZNFqNvyPxUDKBqhxxNXLoL623KFbNnwJt8ZJAFfYxhMbZ2iHowGD9S",
  "key19": "21uKVf21Se1WrH36SkU8moqsFD5qDWd5KZrLPLk1NVYUoEyReeYbqiBxpyC3S5oSNJq3v7fLwSuHZ5dfaUW69fBo",
  "key20": "4DhptiH8A4KxGGtrzBTmWj8v2g9o6HR99mNAo5CckcnbU3AWgLcPbq1Kjzinf1fbRGiAUQYbFeFndKKbuEHQZFuT",
  "key21": "r73sotwTDyhNiuyWXKpxJ9N8zxPoFMLu47sfFcbe7obSk6XrzP2sX9m5hy9qBuPbFeFhdZ1TW7fjBaMosr2GGWh",
  "key22": "croUdcgvgYUpPr2Qi8U7mrrKGKyZPHVRKSaRPJTGgMTSnvpLnqzNbXjvTvFtbSPmWaQ15SbA5K6Tj4TMZphytyq",
  "key23": "RNNT4uiHwD6SnsXUnoFzDwZQqaTh4mhALEftDWvim2WaTSCJm9skicGrQs3pn6Y1VmrmVVXZMxF4seoRTyjo1ro",
  "key24": "5C6zvxj11uKWXugabEvVaBx1doFahmv3DzsV9CaJDej3Sy42r9R32VU94MLp8reeUmNLVnKYaaxs7w33PfvkXx3M",
  "key25": "23GfpTp5Z2SKyomXi49wW6gpJ6k7s5gQqJRapM1GUJdcvKkNzcgZTpWD9NaqyrVKKvzFKpzUx5ZJHRokDBpnua14",
  "key26": "5qfi3P7JY4NWZP95BiBpoRKgQAZc5dgfHBcEjJkikA5Gmeui7SZQv1JT47yvcCx3vrE6sK44iG9GUpLS1ZFqFx5x",
  "key27": "y6MZbkAn5daLN6c2YxeeroVNudgXJtvvCWPkXqB2VbKD2hrAKyu1CGxnxWZFc2At26BejaGBsqmPRP8g6qbKKGv",
  "key28": "4sE1NRQ3rS12krHHRdgjY7aarxvpLmcD75pRA5JysFdBFFeofoSVSENmLxc5n57k9tXGpfBXKHaZTjLamrRwsQrJ",
  "key29": "tQitayfC5UfSnEeD7TTv5unimfFif5x6ne9RYGRRLfCu4y3JLeNSPy1i15neNfrWYS7zv1DPZT5bsWrN3NrTVk8",
  "key30": "B93fsmd7Tp9hoVwsD29AbmAsDDVJ5vjPzJgGNQU8Gkxk7TUUfankfjzqtLGyxXF6r7fU3br8HHqeoygwWhQKRZb",
  "key31": "4XMg6Lw3wPA2AyXSgsTCADntEzvxk2dSzwrNH1QVodnbNB3GTvL9brjFjpvSSZuTD1Q2zgYmE7U9hdHQRpDFzyNe",
  "key32": "4PJhKiZCW6nntWZbnYGuUSVX9pL3pYyCW5tCGVPvaePTJoW9Dkie3UB39cHkn69QiTNQYJ7oq6C4S8znkR5PPWer",
  "key33": "5qjx4F6BRJLF73uKhUBML3t6sBjswA4LNHpznommbtn23FDLNsG4HAfqJ3RK9RqYCjLeiMpcP4RWFEpBMjxNGvM6",
  "key34": "2ij3Ff27uGZVY6Mp34BFb9Td3TTNeZQYcyVaQtLZ475RsRiwUsBZyDXQuZrnorcvnccburMwKUi2pzh9FaHiLEqy"
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
