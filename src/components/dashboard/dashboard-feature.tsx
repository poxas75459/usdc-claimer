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
    "3vgzSBiVybJ3LAEp1dvNnFcx8K3XS5wQA1HiLt1N6r32octFXq4f42koc29GEM2oK1QigT13HSR3tnsZ5HXQDuWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ouobm2y1WqRXCUmkcnv7DdLW3JgjPcwT19i6jtNK2RtJQr2PrEFK4Bgs4DsSXg2EqXwFCk6WS8ruVycq4xGUEWh",
  "key1": "HLBX9PFcaJBYB2uSRWqr3iUcTP8FGMVTBfEnWBVRArKYgibefi4FejUdaNu5emejqRYYtFfCzdx17VChi73EBX8",
  "key2": "5wREyrU3zec18A7pjVjmYJRfyCpxQLZ5HCEH4rWuU83BW7yg3JjsgHH5WRtBXGDZnHUXdV8mML2W1as9XPMYUCu4",
  "key3": "4UYGH6giGzRvroWHtdv4BkhxGz1dS5cWMUu9AduadNARRxE9htRKGE6XQ8oLhtx794GATJ9JCWx7Q4f6ooo3EHqZ",
  "key4": "3D34njwEfsd4XGwq89PRfQudAo6fPM6R5QLdUdG8s4mYgdsQysJDX6yZaa6fRW3aKop9M3GLf5Ga9BaBpAY8hxSb",
  "key5": "2mau53zXt6wddVnsDRduP7gu4WAgN9dvzmpBnzsQS8UD96vpjEMu1GU4oLRwuw6gkM7yTT91dgZQCr5J9msnzunz",
  "key6": "ZnbNAtjeJBSTCrJNZBmEGhuxEc28a7bwJxM3hGQ3uyxW3avY63MXCY2PfCQqiP4PBcbcgXDU3StnXLAoXHpUqBx",
  "key7": "4xRsqnWysdnjBBhAZoqAiZ4YfZjDFd7KCaEgHoh44e12CnpzjGDhEx8CQsfkGtQN2iFQbTeUiYd8imdcLk7F67xX",
  "key8": "44rveA1ephsFMFLnaFjuYFtCscGmiMEtKXvhMT7PQcSkJMxqc9Hf5N28DEk5QtP4PiMr9h8s8sTvxKhpZ9TzLDfX",
  "key9": "3Saxtn8yz8ymUvppssYZBpntTF4MNAzekJ7nPhzYqRK92brph3NJPjBcE6GnZqunYNSE19NPycUaPzDzLNLxWcAF",
  "key10": "2xBQr37fLetbSmo1j57JTUWj8ihNQtkwW8HaNFoUAcpPrVyZSype3qDJgTdPKKrYWGPKg13uM5VU7GTme4CpjmBa",
  "key11": "2Gq3Q4kFQzWFReLXERSxFwroTSrQMYvCu6hKtNvs7a9KMTP1QBJM3d6eut4a8M2HQbdKwcfj9zFCH46saNDqiTCZ",
  "key12": "uXQ2eTtLroKYAY6sv9xubweYLdkLjDRJHziXdQd3Tfw2bWeUxNZJcphoMo3d9em9d4q6hRptn7ZUqHY9YxmXusV",
  "key13": "WzJ2Ph7ropn8zhnTHMZHDRERwCcsiRFDbfFihYGwA65BzGXMv7ianExtu9rAhrnK4nuDeeUVUp4Uq55DnZDoNyJ",
  "key14": "MJnoW5oTHY4oomuLdtJicagSDaPXFUTwagPGgXHKZ8SGhUzsX3gwrEdSZV7kRrwuShdW1kQLFbTXwCDHNQu5VY3",
  "key15": "4a4EfhwNpLVgoTTbpBiZzbF3LT3geL4RgGCFnuriVmGxuCSu9JBQoYDCQ9UEKus1ZxNdWffsCg3WJR8kfNPYmwKj",
  "key16": "2LZWeLwy6wpee9Ds5xtjBtnL3ZXt6zgzRGMuduK84nm37UfbjWtdGDc7YHBRVyBgxjUs9bYenp8UiG3f9tur3gTH",
  "key17": "3P3ecCeKvFV485ELUp8La3fqRJK5vwmDhihZ31zDhejH7msTPsgS5cbYLgL35v5UCNi9DUDvVGKsdNTnGj5JvLjV",
  "key18": "4iAAjp7NYCzs1ZYPDQLjaiLGj9PsQjPid2giTP1o1jT51xviTAwkoPa7GNjq1goPbC8pLneNDQfqmCHkBHAfBTwX",
  "key19": "5Zz8BT9JCaVJhPU498gFxmV1sDypYrNucLAPQqy21PrtZqBUasnFxDH1wqe3V5wsxYYtu8gF5P1fRQtYZJSFX4Qq",
  "key20": "3tYQGyX5KWGTUKkipEw9umksMRjovevFxDsgQ6CT5XE48UZXtcbNtHPtR5dnRY9mMtkRyWRfPANzwUpvE9A5QFcp",
  "key21": "4hwZyn9A2kt1bRyJ1Rx6A7TTq4B2egFkwfWeNctfMZX8V8a9Vo7x3E9VtaBfTyG2bZuowYdXN1oGWecR6YRsRXpu",
  "key22": "4xLFmJV1e4XmA3gtZzgdsqD7Dqdmwv6JHRWKeVfsvaCGSYRhR3yF3kR2rb8i7KZ1MGZ9yacS4Y1qwDty8BcTFPZD",
  "key23": "4NWspBkuAdT9GkbX8LfKLHipt6viG1jDyexANZExsmbUSpcehdyEfkFvZHZ9Fv83JEauF1sNYAbU4vNsq95gH1Pp",
  "key24": "344AczAVFvdhjHd5iYLHhHydRZRRMZNjwC9Jfkg7oFt88KwiRhRTjf74JRdqorZHEHgVTQGq48pL4LM5axEND7DU",
  "key25": "5gZCYnFZcEvQtrBmxDzoykmiwhwxm4xuR8gru5Yi8cxGLRY1Vzsd7ejvtBcTr3MbHL2pECjyfzUHyT9ZQaRhDGpE",
  "key26": "2v7QixzwjfX7G8exwtXU76HfwcPw6pt9RZXaX8puaCcZPL3MX9MVFqjTmuvpbyz1tEULMuRPRFULMwDQTjh5TiRy",
  "key27": "2wYb7n626YH6avP8hQqvzukaeSvuZTVuAndwwKmNCLrGmJh2zNqvtbEgP5cE8u6VM2w7p9Cta59cRNFL3bmKZv24",
  "key28": "427kEGNSCJ1Gkpg4zVpHZxMJTuutswcvg8yAVaiCs6u4hDfjTMUf4TS9bkqq2nC6nwRE7m7fXeXRcxk3MyBdZrFk",
  "key29": "4J6RzuJzygfAxrwim9DovvNsVjiG2cNxyQ5eYSViBk2mgxY4gDYpWJdSCnKDiCMVR7FvVX4CgLre7JVsZLxBnmW1",
  "key30": "kgWiWCFEdT45sULyr9pQYFRcN1XwuQfBLpfxNgJawVYpQh4FzTu3rveZuotPzVrK6svkmEXEcGPHh7wi3smSKvA",
  "key31": "4QnKvHFgJmDRoDcSe3crFbHVvcp3KNYMXUKErzvAFzxegKDKv2dFb8DCXUV9cq8AsXsG7opU2s9rGvkoAhSd88zq",
  "key32": "se3FEhQ17ATSQotrp2Hd5nhM4Y72M2fYvuKkKGuu4b5bpxef2B2QKJfGWa55Gxa2wxTeL5BRi7cF3B6giELNrvz",
  "key33": "28yKG2Xx1kt1BoTTEcEnz4VAfWFrssCHu7n6fn2VaHotcAcLhnr8Ns3g5spM5oXbsDWjzHkAwcsTpiMR78ebbxna",
  "key34": "2zfBLHsHFrZ59U4DGVppVcy4eXqCrZoBpaQa8xzZMWvfeJY2wnzqhMu1E2G4AgX3rP5P6HpK9vcKVoLnKEcmeNwp",
  "key35": "3djW7UbkDBWgWsygeV9FKVGtSJJ6iw9qeAD4oYfcpXkGR2HLoL5mHMs53oqUDs9bbouCuusWpzBmBP7ykzAGcH4E",
  "key36": "2fsQB8SZKdG3K8PizPEfjaAEdbEUvx9G6R5nUeff89JJMQWuueBBVnNM93xZa19Dt7a1g7GgttreD8oZuToC3M9L",
  "key37": "2atHkyHr4fznYT7qC9S6BfxRQv71EDvWFWx6SAUJykARNVGSVWmJnMKaQtZJ52TK2KaLLmZsuEYhJGJ6AXqQKAuU",
  "key38": "5zoeAgKEtTF1Qc5G53ESeVvh85VTazXbTPaPKAgyXTjio1RupX6mvyeWfnqwdgRPEHraBTUWjdghij5PV4vX8EJm",
  "key39": "2N5D9Vd9Ub6Lau3mcikJwTVhxeD9iLFR2iUYujgqQmTsyoM9vGvqbL2hr2mZ5hoE7kuueFGdMe92oPVbZ15UXoM2",
  "key40": "3V1MP7NAySni4MBmZBGp1iaLEdVEaZ5WzA7VTnWGTNj47wyZ5MZ1UBj97TXDyKECRQ3QyuBDgA3HuUKhLWUTfJyQ",
  "key41": "LYgVzndYcMDNxBEziSWrweQ7vp6QerWF4vY3M1N27osthcUmAYXWJAkrjTqAZkqMBZtBZXDeubrj7MgNLmu2a4R"
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
