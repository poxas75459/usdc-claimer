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
    "48RpbUhMvLyNmD2hTnmARXzU8gauB1r4cbdEVZDKCTa1jpxXZeMc4rW5URcvZdntR8aNJuJJXzeqZE176ZGeg3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hpb3Desgi48nB1Dhpnt5wK34A68VyaBjNvEnkHjbRjEVEqmk6RCSLcojT4ukk27ASVbiCLxDDEEuig3aStg9DWV",
  "key1": "iFq8e3Jz4tAuKzQHu4VHvHNtiy1uwSLyuwX4hTa9wtLnfwVhGQUtvpRPedsf3gYGq5szZQjfEyEJ6kkioXvWKwW",
  "key2": "2L6vY5RedP8iYH6bjTuvFMdirtUfmKQrB2gDdv4T814ZUH3iZXJ44TCwewEt8cKpzWanG8JSpyWG5HYfhwf64ZMR",
  "key3": "3P922zSa9qMGXVnMCY7czhE8DdGbmzSRUa8dm7urw4vZpoiPMtvRXsNjeedKhBz3NMd53nhN39srRWRGjbcg8qKL",
  "key4": "52gvbpa3itr3FpTx9YiQ8SL9YdiV7ZJJmiovo7wbHedEprme3MN6pLHMVTuczGWmKTJQthNJJpUTqoZoXdqfFJiy",
  "key5": "55Qk5SUmfYxaqEvmYp8VmuH4rUqSPFUaFSrGqLuBV2UWa6PHs32FpC6Royngu9D9rM2GBUKSSzEGUzfTeRWt7Fm6",
  "key6": "4CnosQrASNSMSngvggs5uVhZab2J4rBK8SaZ1zWcCBQZsFp8ZDMkUH5si8Kwx3X2mUmpa37td8EwDujk5DTAasR8",
  "key7": "4QEQDE2fpo1nRtxKBzVKrJYd1QPBLtKzYrnWn1T5WLNhisarqs7se8ygRXks5bZcB3xk77L3H2gpFKkfKxMk8KPy",
  "key8": "4wRRQhwTpVjKHUJnFfJMEQ14P4jLsjVkiHyGypNr64UJoYozLyhZaEuLMDbRXtu4buhveeJHziZ4HCagxqcGGL22",
  "key9": "2yiXUymbMAybJw9uGCPaYzVnDUB5vvpRv8CkrE2db1vbtNfCYAHNC2RtULS6iCgFaEWfGYiQjAANsLSS3xxVx6ux",
  "key10": "4XB6xWVueur1bqMif7e5TaADABYT45Sb9nWE2GCauQEtUY333EekQh5SSRHt4zcHAMenRKCbEZ7wSn4FJkHqueG",
  "key11": "Nw2R4wGxYARuVHE6cMyUChk6c3ucNtxBezhbNFwXRdvhyiFUJ5WNaDKF9j33CjwYJmPTELoUafg12FsiKHQ8oeU",
  "key12": "2eRizeoofVNj7dAaJbhJhWAv8HGRmzJNjePvAa6kBNzPe146E3kZpQnEBXKc8Y8rHhWDXVwHHHWqKwPBHS9KJebb",
  "key13": "5hb6CZzG6jKt9Es46UtCeYhwSHsBoLyeYyiJC1eP6ZPY6nZztH86Ky2dQvvVn96x78pj2rgbp8QUxuts4aiMoDWN",
  "key14": "4HeUbSu5zHHJaHv1QeS5jDBAbQgswxEdJPhc223PASzJtyWKiCkgrLv5noNtQsBgFou9UFffX6hktGPvdxGhugDV",
  "key15": "35bsmrd4RkehnJrsi4QgDHng5AezjwzcdZmVzpqhdgCatHG73HJ9mhGT17cBjG5pdP4k89mwZo4ahpstSc6UrCM7",
  "key16": "44iRAwLjFT9N4hvj3EGXgeE5N51663bSAo7ivK72ymamcazeJYL4RbbTnpWTk8cP6mTbr4uv65MkEGnxSz8zFyex",
  "key17": "egMfwgjRUjQTzNaatgGpstjAgayMxa6ckryzm7gaLoPY7qxy3rKZcYYSWQWZ7fRunvyC8n6evRTYr5tZY5RudeL",
  "key18": "2jERVibgrUeKPfjkPyG66xW7LASos45hRtZKCcvQpzyK7PqDHgyDgBGTWUajkGh8Qn1ckzbzPjbCcyhYicr3mtE",
  "key19": "2aWiNhoN62ixam4tAv58Ufna78kr94ufUR6vqbMWFUoQMsdrEc4DWzZymZrW9dvRN75Hsv4MJ4dA2vsKoMJwPmbq",
  "key20": "5ZzPN6rUxTrsFS5RUPKvPGs9EkSFjdsbjHRcXB2WJFRghw7zkbaLZ5W3eq6HbQ1Gco4mjvXRnnDwmpfWXYFmdZZN",
  "key21": "67Wi9jSH7SzqFJbDq9EAUQqU6NE5VeNKSe1Rf1s5WXQ2oGu9JwRPJjqy19kdoGTr2yraCYFEGuMixGiWScszdnUA",
  "key22": "4FQv4xppKE576AXo2axZZoKujv2wu2r7VZ5fzfbSwp6qyEs8W3tWiecgFQztxRYonn6JtiULCRoKgrGpKRoGBUxF",
  "key23": "4kitnqdbygj5hmcYmCWKwymgjTbk8HyZFCyUB8fXUQeKbM6csWWL1kTVqPA5kihFNCQPhKzD47EzcU4Sc4E6wU7j",
  "key24": "MSMCqJccFxw5pr9QTJeBkh9jaVSR12hmYEvRjt7X8WtbV3WmkaYVGramL5fWFdDug7hyShYF2gDyr55ykvxyfUX",
  "key25": "3T1HjbbXchGAjU4XebqXhSVQxPrMaKiP6LnHy9MHgTVqgBiTBEjsDKQRiF5AmMv9y8wsXCFxaLtD7PaxBnvA7Mjc",
  "key26": "2kJJ8k8fDVBH6o4Cetb5MJhBKiMtprKnwhLZmHsSKhjT1agGhDBu4nvqz8MFwiS2icMRww5HuGJ9sf452bFr6tyb",
  "key27": "26wbv5BU7koDpeAGdvDVNNE5f5JUS41F9ALhTKQjSpz5E2krT2g3gGcTgk4zEF1GwQsBYom2NxGGcpzstfS6mtzP",
  "key28": "2w1oeHaPM5C4GYhy2BnSMTocanth5wQV5MS4XUCHgaR3djrPbSUn52qENw3HfmeWddAm9ZkazjxZqdhpn97NX11x",
  "key29": "5t9cn87n6K7PCgGrncomZmfYQfn1jjUjDoFfiHDsmCjAmcQFMwUPXUvGBMcUqrDnU9VCDzksm6NUZVwpoMZqFc3",
  "key30": "5oHTYSB9MSAuTDqsU7mvp3vMrYBfNkUfHVGcE6uBEY1FX4hcWdhLCSvUszEdz8WQVTpNHmzEuqVuAgLi6pUW9YHB",
  "key31": "2HhbWhpqY7cM2k8oAAU5yG1oksJBczXcMXxn36Zao7HzjnBg82tAjQ1qKGuXE4RsdBw8MrMuqLpVVczCZBTsSz6D"
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
