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
    "4tqxQm5ehxBNbBcNwLaBqBWiAWky81j2LU75Zbu5KJ1ymRDYWbAQGz1vFHpJk1YgV41e4mziLVhsNp6FvgDdCaKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bwWtSDsgK9ri4ig3GESSHQ4ZNCFTa6nBBvQhJTcmTuajuyjS7g7FWLGRXcs6HL3aM9R2SrBdQXUcg5AThyGvFKz",
  "key1": "5R6FHJuFML9YvscbLpXkfueMg8Kad38THw8tgiYtQZUhEKnzGt4rC8wGZFbeZ16K2X3TcWwgGdBhmuMdfVsk88UY",
  "key2": "3vRPaqdpgsCw9tcQb9JH33vruYw1PuLQxjmmQ54jA29o1N1Y1KPb1AZqvUz6qFsHmhcFUFyjxA7g3DhDkeCXMyZb",
  "key3": "5NSJPrijJ8dEAFKw5AGsfsp2yECZxHto8b1DH9P6zj8zb1Uptshp26iHzX9oe6SnomvNMGtjFZrtkfmkMtW6h2Up",
  "key4": "G7D6KiGqXmQPPszmParfuVuUEB9dEqFNEW8BUzp9P6YdbNKnhCiPG9jaj6nvUMjMYSim1GdGdxJBFf7bWxLrmmm",
  "key5": "2rzBwe9kzBy5XKADdKqUkwAW8jBZ5bm62NtNqr2oXsUY8k4YbestE7ALYgbtPLLeuDkLZzBrnQk8wuMYu8Lo413c",
  "key6": "3w83Y9dmJEucPFw9EBsqqzCja8myDxo8nNsH3esa1oc5tKTcaEzoNLYrkuhVRcny5vkXDqPVuaywRr5THwdk1AnD",
  "key7": "4eCkB9SbynP9y6yN9T1yBfnUc56aMFQRkRxUZz8xiY7Acai8bKs7P1KXhtUoaPQZVEQN1eXuWPJGiaUbDzEFe3my",
  "key8": "5XVtYvJyuF1KKbuFuChFMd9S9M7Wsoh4aomgxU1ihzC5UaLCNubx3PLqfaRDzzbcbttD3oMJ58hTqtwbgTeiX9UV",
  "key9": "WDcDHAjULTDPd98cYToi9tmRcjJvPPEM3oVrdZf5eXEpLjjApgN4gByDZtjTHzTayfoZcPrdZ12diqXCEH5E6W9",
  "key10": "5H35KsNQ9tzpSXkvBgoeLi34KEhAMsTVpFUo46wZZjWZcrra8MDrcxsB71sUULZrgnN6AwjsVyAEu2fVF8xh4nDU",
  "key11": "5ehiujMbeXmPraiokuU8QqR7aCLqDAq96NRznrUscp19TqAsKdwMURb6Y9xQ8y9bh5HG6SrGswaGtemxP7cbbVmQ",
  "key12": "gaq48hTV1y1q2eXnrZyEPcKRbFwAAEooyW2tJDTDzeVZC8erAkfYewueTeB4Gbda7B55BnU4ukgJz16yFhPVzjF",
  "key13": "62jsDJWcEuyAw37QFuA7nG7zf5aeV8aXmVjYd9p5KziEnFQH9bsx6sXrWkbHoCLfNUES2rmiDG6cJqBQV6HbrqmF",
  "key14": "57NqGSvRMgHfYxfJ18UsEepuAXNthKXBE9dY33omDgTUsHMYxeaAM1j2kyQJTm3Zt5YHcDxhjsdTiLBX2yjDWxiQ",
  "key15": "RS3orridP7zF54QRCQxYUuYTRZg4Bfc9BSxxyJV8i1Z69mMsVBGpaY32bhkjYZXvS9zpUCKDtTyfTcswiYCN5kT",
  "key16": "4iPpzqkXytCopPz9nsCk4D8AV1UChkcZgBitCsmN7vfTeD2s7gwirLEi1jdZHDxfy71cPMVAjRVunWQaR2zoF8uw",
  "key17": "4W8N5nUDNe8KBPYk6xAu2KDGgT6rHehAuii4dvFsN57QZwuRsvrBBsKBzF56RAdVK2RqLpCKPAR1ZgNFBcEEYZ3h",
  "key18": "3966GTqqewKi4tVd5JUXEHmi2GogsoGXQ6ivwdVgBQrXkuSkLXUQfUGrosm3eNbeTkbY5V6kvZUGg9RXktToWotK",
  "key19": "4vTj1X8o6Zs5BB8PrDzvGHDausFCj2jbVuuwFFzcpcmBfwZVP5xW5rTCNkoi3WsyS6XW4CyqAMb5EjF8BhtGo9z7",
  "key20": "5kRzQU3XFAtW8mm97KhKASC5SUKW5xEF4UAE1Q1nhHDY8cRxLBP47kBCArYKqE4RETWk3bgae2gUND1sNN3r8GMH",
  "key21": "3wwPtM9QBSfv3HqSeYm1Ce8RHkAji7mJLw2QbcViiDSa56tHEn674KUuLAYBwmED2XykTwoiqNF7NnZfyqLWY8vg",
  "key22": "jHPMU5yAySSLmbxYgSzLk343rasvVW6e3tzXkGuodBTfXTr3A8SX5zUTFUn58wwVcGhW4xDnL4KmrobxYnfEQWY",
  "key23": "SLPDu6kkq1rfCNjhE7speKHH5tFQvZw3zA8VWw96BSzbiwcHcQfYQxeFecPijbxNjepEGbsNNtEoJruMVMm6Tr9",
  "key24": "3q3WdwBEbpLWx6iitxNN8sDUGorh2eMbLgG1T11hJcCybL8xryjNcj7vvhyfNaxuRmiGj2js6R6fTGSLqeG7RwxP",
  "key25": "2Hw2P8uiEi1NuvaG6Jsi8CUAFC9QaYZLVRXRsMvV3ruWPv2n3sJ4As3aiGH9CqdrPwLwYz2vUAHisNkPZ39kRbg5",
  "key26": "3GcytH6D9PZvLZdYTXwhFew1DmYPAnGnEJA8zmycg2zs4iVHy1ykJhezYa1Bv8MZj1yztmdWr8kN1BZrac3AM85V",
  "key27": "2zMCFeUx1Abn7drvt7UsWRCqNawNAqQvvAwkDyzxhdUptEtf1cUGwk7GYsCW3UGNYiDqZqX557gwnGf6LCsS8wKw",
  "key28": "CVyXGsKfd7tk9N2CWUWuaesttmuDbkYcs6PEGRufCZ6MiHLfo6dQ7vVjoKB11TBoHpYjdFgLHjszGy7QQtqojhA",
  "key29": "4fX1BDgMv9jVYmHnGHMDYyrMTk6L2ZBwJf2FEmztkmUyrku4jBBgdgEFZJBYyL15XNrqBm6E5pRwTopcL1DyP2DM",
  "key30": "2FKKkXGtCc1bpKHDZMYC5z9C13y6vAkJ9nQ2Q8Z9beEJVmeyT2KjskLYXFLNyLo5eDYnmqa3TKX6KKhVhryM5rZJ",
  "key31": "2m1d7kvHagW2ck9EdRo8HFZaMEoiMvGtYn7z6wqoqacatQTSAKx3QAgwd1pDNm65hDqEDa9GhXPqRqsGviuigYzV",
  "key32": "5PmLz8qsquSJs5umeRNKuE9Ge3wKuVqPQsHas6HtariSCP6B1QjiudjDuXjdz6Ysk3gsr5K8RG4NfL7zvF8FzC6F",
  "key33": "3Sat8EerHeT2DgTNSXkpvQxrvCfu9HTSa41nYXcz9Q9WSEeMuWc8a43dMsuqsDmsdmScQDwk4nxtXw1qXYb3WUa8",
  "key34": "2o7AfJ5hPrUozE6wZq8qnMK6x96BoACb42bvQkvNWhJRMgrZ3gTFBszzinb2mXYWp6tszrDhLHccvW7SUPiX7t4P",
  "key35": "48obwXG7dCEMeRm73X4k6Tjnaffq5FBgKBujtRkXp1srpau24wXiPqGC8gABiJji8UV8dZq8zNZKF35EaCyRQHk8",
  "key36": "3Rw6oU3qhYTmnce6XGN8Qfmu3CYzCRUUT4HrR2S1sZsy3W9Yf8jQLr3WV8HgBp48YvXLfrztnmbcP7sfNrhjAtLh",
  "key37": "2JqtR2ryyLUv9uP73L9iak9H4ZS46iga2XvxYLYQ5rWm2tj46HuYFThonrgoqqkGHJn4PTxXPRnpR3EjpoC5Gotw",
  "key38": "5GXV4dvNaK3UKZzGFU3XQqy4fwSvmhCYrZZNzouG6e5VAfAdF8nmqvPS4DGusPG1A1FQMguhm79BQsFP7VN66Hmn",
  "key39": "5knFGxYvRNyLiH7TQ5UKurTmoyirsK6kkSK9zB8YEBSoZ3b2Z6CKZe2bxnDyxu4FHYVdJyFw2ki9K7rxDysqgZFn",
  "key40": "2X5YR4LpQqR4KRtUpCJ4Z58SdH48gi5DxAW5Uxc1VjwVohWVUsHgLbQaTUWt2YmxQaxGwQ4KuTojvCLAebyJASKW",
  "key41": "52XxsPmJoPH3H1ZnF44YV21zvs4dKJyrTAo1M6LHyqUMS5Ny4CQDHKVhN7Ff1LamFbeFcByF3dWCwSpXcmwzqjsb"
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
