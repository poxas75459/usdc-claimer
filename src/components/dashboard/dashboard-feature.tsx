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
    "fRQErMWfXfcWQ45cXV9hAYjuDCL43X7zfLPQ9FT4DBALCLCtBon78QySQJkGCPqtHog9zs8yJYJcF7paexBS5po"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kZM6eeGqpsAZQbWaoLT9Ui6DciLEuVay66yhuJBbvPHqTGmkxi8tggDXcDT3672VD4JeZFjmuVW1QLxkcwQHPMy",
  "key1": "h5uj4i22fQDr7jXvNCi7dzou1vhkX1garosyKjQnftQvu2AF37F4LP7wia1GhxWBx8yvVeQNK23bGsZExZDVeiK",
  "key2": "5Cy3pJXWhv7z7fEnKTdbwjz7kSUPo17GBgbJKWX9DZetHXZXcLHc5vCqAJACuUF9gk4yTyu79eMbX56KhEBYZXGk",
  "key3": "cDaiz3KZArKtxDSSPYNv93sjaimeU8MTQDduFHCNzYH81Ra5UYYhQUqhUupk9QPJgnTFe2S2nuEqTMwe4gbHMPg",
  "key4": "3cAczEnYumcwpmE4hQremQJs17Ca4Hv4hZk1KW5mAwSwfkC8dMQozsckxM6Nv2mumAGA9NLquCtUVc7gSBCEkha8",
  "key5": "4GX8YHYZ8Veg3vAoWy29tBdmsRnkzmyt9cvypY1jkbuGnxcPPPJHKAPsMMQmbENkK3k57TqzSNBu4Tex9bnGVfUK",
  "key6": "332knhmz49br56uKDAdgiDXc4LWSQzwLCXab9iHNw3vGb4jAwZfAZEmMGzrNYq2kwmDdigyDW8pGVXiEcXi3d7Nx",
  "key7": "jihkfffoRZBXbckF7v5sJrpcMUSSeiCoGvnhnFfWHFp4pbFQeCQi4bvCGfdAfv5n22Fn49jVwcALxmTGVVujji2",
  "key8": "4AHmfzeWfFY2bxmUiBhN8vTYrAKS5mx2Ugd24XTZUSf1spZGYpJxHug35iZpPCxSJw4AEZqPT2BWn49uPJqSB2mV",
  "key9": "3fKx3B7kdQ9FBnmZCnnb3k5qLbTH1f4UKWcFazaLAz7Q1pyw57XGYHVErYPA4Az1Nn5y2HMmpAEPMV21w3p3jjiA",
  "key10": "4tQ7KjzL8X7tfxk8JeYjb1eBp6o4mf2s4GHNJvTNkXCRi6pa8XicX55spbtSJFC8rVWqkjt1NAdhipnW3zhQnwif",
  "key11": "4Yw4tieF3qP949JtvpSWWJDD7UqpBx7PQzNAPanurkHdhmJM5jcvANFyHzJLjpDH5Ks3pfmFH8vLtc5LJU31JrXG",
  "key12": "2D24Wt4DbcjmR5LJXiipeiGt2Ux7TE3ScucGyyzBR5ZLSi8wADCTh3AxAvnptt7krfiGffCsz9SzL3yUg6dPUdm1",
  "key13": "2LuCjNq2VKtxJgNvrgmXPygQTckpxQodvfes6Dx9t8hFBJ831665aFYYvCwtUUeQnbV22hKbszsrfMey4uEYR4mQ",
  "key14": "5qS7qEp8VvBxSRmFRLGzp1P8AqWEcheS1QNbPqHoqQd2TV354gEVZMNvrzkAwneQYuNW38sLhw8epq5NApefc36P",
  "key15": "4GWTvw8WfZReSDi3AJG3PBs9jcABu27rGiVPosrE9Mvo9b8YUFDsqLKPdP8VyP1Yt8muCLzeT6uqRehbRwwAQEzY",
  "key16": "2HRMMXC6uAYTxwnWkmBvk7phtfhzkrBRvAnFL48Ax7kVezF6Fq1bzE5d4T3RE4n9nAM8bVABEk8eEti7Wa9E1Qrn",
  "key17": "26b7a9jtMu78QnsjyM2Sw3CPszzBaqQJ86eQqN49x6eQX8baJvQXTpLkLRNJCo56BHxc8xmWRqxEMoZ6uEgZgVBF",
  "key18": "TnUfNGN7aad2h9ctiprvQAS5souDca3xRa7DMKftqP9EybY4JrQE3NaHrLYrUwycTQVywHV1g9PwP5X3du6oyCx",
  "key19": "5TwUYTmBsKYUwCTkHZXU914HbafwLfDqNsexCuVu7AHjfDTVM3YWD3JXmphHgNyG6zeS58VL46h8DH8NmS3JkBqf",
  "key20": "3z2A3LrPtTFBjhrxK4EGq9j3ZweoNkQsztgMMDKpNtrDdVd4CzBQXbtoxFBZJNpPr7VUQo9a4BSqfg4jW8DhNcWC",
  "key21": "5jdtJNwBmw78RGLqPcvPFz2rBJEfuqJDq6vfufEgxkS7385Lpi1fuer2qBSfTbUKniLBJ6bc9y6Red1Vu857GSFv",
  "key22": "S5pkTznFZjHkbJBsCvA7Cqf5D7arUasysFGvg6GxehAm2YckG9bvDuWjRsjURkznK6AjXbijaLQsVtuTyTjJWG3",
  "key23": "5niBj4ECRxA2wFAV1fBEtXZxgYz6cEHqeLGUcejeYUjKCFTvqJtjxADGsdwKsJ1dVXzsg2319xhHnXW3FVbxywGg",
  "key24": "2DN3H7VnLuSTXZ3bD8XPRGm1rYsW21UcDNt4hJyidKjbjGZtF8oBYWGLbKjeZEge8GxxRjTY2eS9nVwMk9MMHwtK",
  "key25": "5277meYnzfbdQC24LqwNrmvZHvEnJMvfrUTXJ63UJNhpeDLX3jfZDXCGJoD9Y5ctE8LTqzmtVkDjsMzBhKr2hoKp",
  "key26": "4V7CTWWLTc5SZCcpPC83ywxy52R2sf6gjvTJbiSYg2SyGpRL2QGq4iZw487SNH7W9HmDMTLJuTorYhcEdU6ngfmm",
  "key27": "5Hb4myiWFrV2fS13KLQQiu1kzKegsVXgkoMTJM5vSPNts8EVjnPaGozjq8RzMLxKCKod7x8mA85npM8djMVigb4b",
  "key28": "2qaDMuPvGgvfpDDSFry55BkU3774BmkPuS8ZBYSAk6HTrGbcCeBHQuoSm9D86G1UpgHcmg61xzMAH3K7tGDVzSFb",
  "key29": "2pzJQBmS2cgxTK7xMNRxukhHPRD9pBwkM5WK77dBsP9EyfT5Y7aiJaSjYhzYpu6TffXkJicoKQipdLSDWZj8HSpJ",
  "key30": "5LaBw7jskdmt1jnoYsRDA948qCdbBPsLxbKZhpb58FXAz9q6SGZaWQU7bSTX2o6HcQyr3w8w3DarPFf5EfQsEHW",
  "key31": "BkAPS3bXfCUeCGT36HLjAvns7W6vZ7VzBYjeEjhH4oVbSKB8kPuGFxavVUw7b1imUVm4wZbxugA86yjiKDqUM1q",
  "key32": "q8X2MWg59RtnEXn6h8SEfG2kHNXsinisawCLs3oxDHzp7qLzca38CQWttVVHFoV1oM52dZQ6pmC4RsPUX6y7Pbw",
  "key33": "5F68ct3LEU7QfiyNJpYZmSc2Y6EF1cs4j3s6KA7Kx3DkEjx8FkumqhVb63Cm8EVBBBGeUbeB3JjMR6YaffFVxf23",
  "key34": "26NkzSig2pvyeTv9q8f1RquAUEem5CRGdQPEgGqjHywDAXYHLRoEHD5xpvtxT46vbyG6cofPEcfQYhurjqEpeZjY",
  "key35": "3UzofqE78RWXHHQuLA481rhuNbGABBgNhzGyc3HTXTDidN1CC5r6TgM7sSBSjtLAAEgibBqVPK1m6gj6ebBxrwjD",
  "key36": "4SNcw9BedRt7si4QtrDCNKV7jUKBZxhZKGzAJ6ZB5nPc3J8iEppwu4ZHKJNvKjP56ZezNkp1yUH9ZiFkcGZACb9",
  "key37": "2egsyFJfbzufgb3M5uNcKPUF2zFcVeg4M5d9mGmXk9UzHiMqmPfE7ur3sMyK8j3FhANvw53iYvMvH6EDr1izw7uk",
  "key38": "3WJw5M8jtucjYiwYfzvmpapCb2ACoidhRBHgCAuteFM3o8BQoTSPs86FqTgKf5vSyMTu7bQnKpDkrHBFTQ1ACYSQ",
  "key39": "3LRSKkvH1UKkavajKEWEP2GY42D9TSUndz1wEeTVv9JHLjPYEawUnXmHSYnaBHE9VnMhgHwFC6N9ntpqFZ6rX5sd"
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
