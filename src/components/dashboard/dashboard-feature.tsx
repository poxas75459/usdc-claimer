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
    "3saqUjjyLc871SJakHKoMa7GWcsNrUVD9hpptMrdkrhv8apjWX4WmxF5qk3EVbSzR6V8N8n3a9nVCZQVi4Ucw1ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xXWft8Z7jyi6VcwaPYSTfnzEUbCEcWVc75AoJXmeqWkTjgMqPr81Di5N3GPqoRHvZ3U5KcDLSEzctgvQnUJ6a5h",
  "key1": "hQevRrHkcvJU5DStwDTLUdaT2mq752Uygqcs87rG4W5StdeDF8QW1mwyQsxxosgtKWHj3rzaG8htjapofBmCiE4",
  "key2": "P2F3mRJVKbRz1YwcCmPGwC7zkC9s4eJupv3MjATXwnYpAFDDSbaCGp2AvnC9TTC5FGEb5oLppc4ZvKUc5oP8azJ",
  "key3": "2ACjHXKP28mbLzTVYsbmHr1EgFV2o4zYqocDbnCbnG71wUZC9RWePAanyZiGNNJjGAnrn2Wgx4pQFUv3GiFvw977",
  "key4": "3eeffMHe1jsR1VHQDSCtvc8SRHgVQtLniRuLTyy4KqDkZdQbS9HRiVKKF8Em6b92gCr9SwNNNPnA3bLnPkfX4RNe",
  "key5": "5Ukj4sUMxgF9d4bn91KMhxWmejAYj4seDudawyjF8iTg3hfbgVGsdZw85yquUFvFWLnbBXRLpSvHKsbEeAdgeKFv",
  "key6": "i16nXkSGPNgdAw7hMFXuwPYmAw7EegYXykMmKYgtr69eacHwk7GddDXgFAoAYd63GDsMZtD1HyJg6BLB58cevWr",
  "key7": "52U911Wx399QnGAQY1YhjVqraHKZDATd3i4ESEAMv7Q6VMPGxYGa942CuccyHdi4Zb4pEMvM4Muq2KQuawWHQf9t",
  "key8": "4HPio5qVcSrFVLVs9SMgvNLi9bCD1YNz4YrVgsePPtN7UVekVkP7bRkvhKKC3idiUFbBQfFfStYzsmdKR4UFu5Wg",
  "key9": "dTGPdDEb99vnD9J5xSaxqT68QXA4boUPGoXNagH4VCjUzvwGQXjUiuojKScMzbNxxGguidaq2oatvkNthmiiSAe",
  "key10": "3DYNmDnB44pncYFEP7F4R9GWF5Vn3fwEvYduhUn55jirSMN3pPsC5QNojtSGwpxW5hoq8PJHhCdnmzfmCHbdc9Hg",
  "key11": "s1k1j8XiDnkik7xX8HDLr6FBzUhiQV8k2TKgXhiPAE9vbtCt7U1FTbCspYtHGiZTrojPGJS2cr1c8r4rvfwBnLw",
  "key12": "2PCQ2XuE6qGU6M2nZxHtnaSqSMxDVs4uHdJAi85yzCgRxJKzwQcyXeSJKv58fV9yG7WnCWuWr7MJysJoCyCkFws8",
  "key13": "43F7BsDKntwLNz7GdaW3mrKhj991bctmn6etJkwsDv2sdeWjWoWJeDEUSKFDQuF5a66DmwhAtctka4ec77BFm8jE",
  "key14": "SXjhyt7to5VemeQX3t3MKE3oXYwvWJiKBj4XT9bPwdYKrm8JLAJdKWH2W5AdLZy4jLATzjSjcDfoWSBMksVwccr",
  "key15": "5xUWsBwmdqCPdtpmgC1WZ2FmecK6xiRY7gtSY5XWvdNbPU1QeknPnnwmUVuHpNuurpxALpznHg6n9aFw6k2tpJHW",
  "key16": "fA36LKDfeu9BnnPPZ1PaFBqNo97NqCVbH4UtWXyriSHMjXUviPmspu7djvCjmNbFKxjTQ9wavXgB54mTAFbQ6Tt",
  "key17": "37Qdbh6c4asCEA2kLhYxwvvZa3LfrmFvirQwv5AHh9TGN9kh2f61VsUUfBov4uXpCr3V6QFPNCiKimK7cS1TpafM",
  "key18": "UxrZtxYLvErkMbqmz6FX8YyahQKCBbX12LHXtqC8cZHFqr8zHi7g4SpU9tWkBLSL8uEUjLVnwTQWjpCXCec5fE9",
  "key19": "2g4z9gHJDG8GcoXrP5TseGV81CqZ3wJe7RT5Nz41vLfiTiKKojzQGLhyuTu8qxyuG3qvLhK73NGyMBKpL6yPMu74",
  "key20": "9sjKbEnuWuPTu3jArsu2912D1QCUHo7LvYnPZumgwqbDjuCrqNBxA1Nra1dyjW9wvxTY5JvmN7NRukhBjmrwkES",
  "key21": "4jDCKzv5LXFR79Rw5cFx5NinqBqS6dQ69fYpkSs2DxaydiTqUbHX9jvdvbdL43bQxsBZzJMDgQRrb41e7Tv6vWnj",
  "key22": "4LACtSpLUTp4cx7TSsmKN4s8PWraHU79ffFcU5W7ZnPgGBDuLEpo46ZqjyWVQZZGnfk5EEL8g2tfvDScyn7G7CuH",
  "key23": "2VVLC9VCi4pZQHMu1Ma5czVcTodBHJHD8GwGwvGJHFakrwEZDFLgtL17TcvUBa28LvQRnVCo3Hn8iPeVcVDMKJY2",
  "key24": "kj4dyXSk6yLgRTHnXWkY2bmL3pknAd9HXm3DbdbyoZzjnHde6Rys911oN5wi2GCtWHmDE39sEZvAfeKMdYajEf5",
  "key25": "oiYPgkFusqfXmBoULimoBDQUbpVwEkDbvcFEFqLLX41hRcvgXmvBdMohpUrEaTm72jMERY8e7atHVUP6NT3Anhy",
  "key26": "4YCRaPuLmsjrSFBDKwAKFWYsvkJzequdEko8Z8XtkgBdCveknmJ3eS3e67Tsct4mX6hqDQvWJWUqc5zLsZK8GEs2",
  "key27": "5nsN5em2SsEgd8CxVXmD6wEvET1DK2Av4f5DuP2BuRgfYmEa25tEyQp6uiQ8qFqKxkkYFMpwDwJZxKqEL1CJitNX",
  "key28": "4LikiaB9GHZ9pBZ1VDpjbS2engUY5P7j5Z4HVa5YJt2BRiwJ5646WLzKKcjKm2Hunc9KxSHtTQQxrfwVA5t2HJje",
  "key29": "5eW7b8PgavkJxuMqkFceqszEuTkwZRsxadJowtXHihisAdF61fVRbSiKyoMuSwdXa9XA9eHRXKdioPk7FKDeDV36",
  "key30": "34oZKon9yHiRHrACk7FsJkaRUiApQWMbH6oBgWpZ1UPK4XqVyhnkvDcjEP3tZNnUynq3XFNN8AEYq8dHRNdivRJb",
  "key31": "48UFvB2K6NoiUHbcKbpeeuuyYSgwWejFs5kS7ieP3P5yMWLTiqDAYGvmNVfpk3CT8T4azPDv5WZy4EsVQhs8KSop",
  "key32": "G7R9dk7gfaKyHoZohe9mN1dU2cnxuRvAUmrbfiEHpH9bGhqznxiywiRWcKF7to2vaCpFL5eV5ywFkMZasuM3HNV",
  "key33": "cRdGdjLf9c3ftVM7fwLZDY28NVVzXiUJuLXxajPusBK4aptysc2E3VcF82kGwmSkYsxt5eUTT6YpHR4pf4wA5FZ",
  "key34": "UkPVo6DAuhNWf8oqJwC9UaRpEbQKqyePm1VjH8ZMhrVU9BormQwhrvNJ5ZCD638GQRaGFGEKW3vehPjJR9U5snB",
  "key35": "VkxB7f9wrdQ2fMJMdkSr5ygzYg5deLhPrSGtT8bvkbFzH7wqiP3pVuQFivgN7aB7r8iEKmob2B9RMJnujy5rBaG",
  "key36": "5BLws31ZW5u6PGAPejyG4hBQN4EfQMb3Ma4gRDEhQ1fCP79ENZJrc3TrUDmKcBATF2zQnnm8f5Y8bWQNKg2WnSmo",
  "key37": "313YJ2wMsQRH3b1k6QcXYvA8rfRH2gSprioCVuzc5aQu39HEMoJxghoEGX4VDvCjnxpAtBzsovJHgHwQzwTK22zt",
  "key38": "4qjr9yWDDCCD2EmJFKhxJ62YyYUvEQLVVEML6PDifEakNCgKWvat1jPxjXQn74ZRpDFVpBFTv9jfwhPX1P5RaTt6",
  "key39": "Jf7ftevdnL6BNx63kxwZbzj5aMR62DwsnD8km6gqHe6nLrvn8H1RnoUeFmCN9L2Cwiys6tkYtSbDFf5AcqQQucF",
  "key40": "M28KPFoFfNzCgVBKNnXmTKRG97LEjDiK27R1vfh8DkwmzL5ai67WjLNT3MgP56mXRr77JLgdCgShDACmPNg7CHJ"
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
