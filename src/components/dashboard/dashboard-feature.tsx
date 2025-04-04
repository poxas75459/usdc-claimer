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
    "4UmFLH5To756PhSrh3r5hEbjZzkkx41efeuFRxn9DqiKjPSves7kE6MRFzn9XWE8L5KoxaLeYFEwPqiVSddAVGQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GievcU6JYFWqtJcfcLMb4kzjqNtWwvZXc6RbphrhC1GrLxVJLz4srisf5evwSEd9u1Ncy7iQvfHebTKLnpAUCUd",
  "key1": "2Wq9fcLbnq76etrtDYRPHjxtdVSxKdvYRSbSbwPRRoyio2MQ1yZuJU75uLZNeVLSAw316MbaHEhkfH4roXCnMXLZ",
  "key2": "M1aDLUXtoXLHCH3e6gptM1jNs4j2vQyKdNZVk7nZaqAwpgA1NuoJSFsXmqGY6DeLW9G6152Psa17MLjSPFgBvFN",
  "key3": "3M3bUShR5StuV3h8WBsB7H7yAWLf1Fy5wjovevoij4YySrN1pe4B6N2bYy57y1hdRGVv6yvvNmCouMwsVjbCbj6n",
  "key4": "3TCXf7gheieT5PVhtjVq5upqyEbzi5xktdxyaJLzY8CHDfGMh4Ti1Syst48YqNdZ8RiEAoSUvrws9QUCaZZzLYev",
  "key5": "2iu3Z2QXQog6PMX2XdYZUePQfeoMv629HTrtXdbEF6bye2kZoMAwzc99o2kzBBcahcTGLa53RVW5q2dtUQVyEK9p",
  "key6": "62WXR7k13kEKSwBVTj9XMxd2JMS4j4oDRaZDv48fMZuGauiM5narAshgBamfzkAaeUNt8VamHtNdcXeQz2nmTQD7",
  "key7": "66yh4N6EMpeKjHqqW2P5HsDuDHEkMWxLc3UUrpHeumpUhq8vR1AnGyhrch1BSwCUYC3HVhZxLT57pW2S3xKxYHjo",
  "key8": "PK781ARBdXpPVfim68WEdG1zGd6vY5jdd6yh9qoccPRPrkRSj3BdLRsyyQDLwGotknh5VhFXzGdQKYxRZFKs9Xa",
  "key9": "38qz1N5DnQzvJ2E2jMJyxMHpruArG85yL48mh94T6vR5dzXjucPPr3vokjr3Jqc7ZGPtBAeqWKozrgi8BXgSsiDC",
  "key10": "2tNkhdZ9vZtM18LxjEC8RwNnEfmRh26UccwTPPnDStYx8ezHV1AaHdNTfZH24qAFJcCGMPUJQhQVZRcawWA75byh",
  "key11": "Z6pAApiygxKn5kxypAu2oQMUfjkzaQZ7tgMmqCibNdvJpvdvvWE675a1n6uA2SvAkq2gJn3XP94ksbrqB4oChud",
  "key12": "2z9ZqPPD7NYRjQWex3eh23qb5XnPakRAKEagaBbyyDU7gDThwbfgo41T1WQ3VT34QoGheFigjp6FfXkuSNWPRKoQ",
  "key13": "ZrzovcDC57b8v7zBr7HZWswuMYEk6FSadYMtS5TpjPsCNvDm9q7jYFWLCEKfMFkTu2FUyxD7Y6iWtynP3CphaFw",
  "key14": "59hdXHA2CgrsDCLmSnP3Dw7GPsXXKuEURNGy1HyYDaFXvFAhDqkYrSdgm7tFUw1e2DKe9hGmQKG2SLG3ZJ4r9LzP",
  "key15": "3dVFs7BWdXM2oS6LhNLwJ8Zwers2fLHgEzEwE3X8thaMzfAkJ6eAu4n7GKJeqqmmGJwY6AjXJQbMYUkwQzhvJcZX",
  "key16": "5ZPq2J3tfVi3rAsq8EDUZ3QjfQQNipxQUz5CzdihZaiN42sVPcSGHYGpiX1i5greaihf5YK8TKktVH1Fx8j93nBx",
  "key17": "44uVndDdFssM8zH6HAbmyE7BwbmZh66PwnVYSidBckDzqfAGfKZZHHXuRR9Cvq1zkXy16pEo53nryXuijqKpxp88",
  "key18": "48UV3keVqU92Avw8XtC4VPXzBSY4UijYrqzd2WQNPPDXACghEoxLagyreb2sc1L7CDqDUz3i1wfjTfcsBuWDAfVL",
  "key19": "5dujcTXSRzCaUHyrovQ5y4ZiCSw9JyHMKUvigxYrE2hq1b5W1GkTYvqZVXLDQruGEQEFbZ7pPXewMHdPCrAjRL8C",
  "key20": "2ARQkY56za2Xwj3c9xzhPn6uBG6wVZ9ia8zr6mkG2GMX3XYdxx9rV45Z66HuQ9YZtZAeGsBHCgKupA1yBH9ksoxk",
  "key21": "3wEZeR1SyMW2LDY3qHEMPWhGLnfj5rpWpZXKVZbsFpHp4L7FAXiXqE1rUYEGFVpX21KF8JyTu2ANyUaq3zamLoVk",
  "key22": "44cbdmQ4uP2rTz1aH28dz8NNTMuK1xejKpDphX7MSEm2T4wJmVmmKHdMY4HgTBa1J5qdDHepfjeL2nAxijBa7DuS",
  "key23": "vUp6WaWZCXZoDhkwcaQz7MZXnfb2mN6vNCHJcJc9WukWzu9HJ6Fu3xs6W6mGZNiByUBmvyaKw1KbGF5cfixwLy7",
  "key24": "7UsTEhdExVtNe3qyUXbQy7iMpwGeTqS97iMzt4h5AcC4EWaLhunmYUMaNvRmpvwTzServKJwXzWHDkaG6Syt23Z",
  "key25": "2ftMBtD1vaJqCGbjXox3DS2wBMPRD4TtPwCkVenxvKa4aamGaGXvasZ3GMCQAkdyvbksLVCD6PGMbGPvXR7RMJ6h",
  "key26": "3EzSCMxqq3tRi8DMZZiDUFRtYfCzsbmNPBmaBGuCF2ru121CTGxafMZXM2vQcyCf11NATawVgHgrpCqJ2x4W4eVR",
  "key27": "2CB9C35ZEppb4gJyGMDuT886PkZX2tpy6cWsiufXbJw1tsuo9dPWgaW61zUXpGt8cykm5BXkJjrm6pdN88pXhhBs",
  "key28": "33a9XnS7tE5iBZoKqqU5qrZPNwRVpDZPk9iMmfcegE9QfY5cQwaW5ALEXAdSJXkFsksSzGzGViLd2GnPVRF53JXW",
  "key29": "5dopYz93C75CyKALm3igR9G9ckuJgKD86BABcf6hdo4ebbLvA2VFcciMtF7yKM8VUFUxTP5ujtM7f9qPmmr3ynSj",
  "key30": "5xkUVEv2sF2dW7UuR2nDeLtMjCgUmB1xSG4bQ8vyLkinW5ayQPx67n2RrthFUx2STLcQ4aimiV7XxSxVqH38f4Jj",
  "key31": "2kpzWXkFbdPXDHuDobeCgTQSriULuGGm7UKu9Qj6yAMwwpPyUAh35kDS1mUaJQw91YYVcF1M8R6AUNVkhx1HQjeu",
  "key32": "3E57Pq5ztkmivd2X25V6wTHZxSiBf1JsiqiSkSLGs5Aath3eTcC8UQW9CADtLAAH77DGJ1w9yrwHDSigQUSaozkM",
  "key33": "5ALzSGEgHbNo5oySEzaqT4yqqJMfDgqzDu95RNhjxTJqFds28k7AQibki25ZZVnKpFDr41vrDbYScoLGCRu8rkBS",
  "key34": "Ljw6445ZdQ3siPLtEFc7fGFxSCKm7cJPGJwot8dvRKN8m9q8gAmzJPSsUyWqV9MTDU91sm7EXFhoDqNebcH6YzS",
  "key35": "4poKMHd8nT3i48puupTKeXdPrvUSiAh4s13GfmbAaq1amFXsQUMvS6UbWUXGp1FvqRRRnkkHqZAJqhsWY2h74tPa",
  "key36": "5BykjVgijFa9eZfpZqjSV1Wb9xSoBJZwvEf2m52Wu32h2MQwuj23GQ1y4kuVDou4sJ1hFCnej4PxYvc1YA9ukG6J",
  "key37": "na7ZeMsLkzJfhLQty7VjhJyAts1hWtUALgJLBThZAYoPMvGCEDnhJGXnJV5WJfvBoyfNcseAGyyP9yPyg8ASoTm",
  "key38": "Q2niibsoAiydhCGoQPLSW6MuJeYY7vMmXi5WmmE5NpoB8HVjxa9SP1BBsH1PY2K8F6EJ1uWjBvZ9NBKEvLjBpyR",
  "key39": "65EH9Wns7tvmP9EiVkiXJEMsBRySfErsVJVVqJFqgKtV6hgmHYMUG1QP4QxPiwstgMsYVi7h4d47VVgZrxyM2jua",
  "key40": "2sFGN4B5FFU9rx64JMaehLQATGRVbJTpLTmjCLht99rRtWpDpXS89NiWDr4RMG2x6M6DV76QUjkPVf1Y4QVqmfEn",
  "key41": "3gkPCZxqsSMAAdnxECEmJRqbTkc8ZrFEjgjKqCKPhXPFjG6egcUQDMnhRp8oRqcqFArPPMtoC6smcrErJTUf2Ymh"
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
