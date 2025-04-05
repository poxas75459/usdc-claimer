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
    "3iv4QVJbY9h7XSaJ5fwrRKNcthETvS7ci6kGsu66H9ywXSMnav9ezPcycDMdJweDna9F22MNPR7imExvaBqz3q4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A3nXRYUQFRN5LTN9P4CZQ9ijNFTmYyEB6p7vNY6uaLu1VGiNwZzsQZNadDxThoVnC2G2uA7SsqTVzopNPZ4snHW",
  "key1": "5DanuLnHgwbfayqTwoDNJirwoVaC2ZaQwLcE11zkQwh651VbnsJVTKGf1Jv6RLbtPUmAprLZtKKU8bD3T2PsWe5G",
  "key2": "38ijJV7wSCsjiA9yhryv4uXCrGUTKZFwnCie3TGVSQ289M73SQGmvcrbfPR9bV7RXbBqXnYr3pUAm5tQrAQnwMwU",
  "key3": "5asozBmgiDsEnDocDpZ3cPSeM4kW8RBY8gRG1BvGQHHWzweuHSqJaX1urNJmLrU7NmTD2k8dd66L3Z9E2qx1RToA",
  "key4": "2hXncLxZQmsxLSPWiH9t6FLNVgffTk9Pdo5UqdSTsZG7SpzQQcavdv8VZmUzp9dHiLjuQWeciSvLkRvBvnFqZPNg",
  "key5": "3RkRTUgzvs6Wu6eWv4hyvr4Mk1fgS5Avf6Eb9D5tzDVTAvVra8rcpQ2D5g5kh8CvBQPRoGA7aGJSdcokoEoGkWLC",
  "key6": "4VD4uuybXyzCg2XfAPzgQ6rVrYrkoraF9TX1YV7RCJMhtFsRaCFa1pCREUUrnMqpsWvW9CwA5PCGoP3r8Gr3ckFM",
  "key7": "5FQTZwnqqGYvM7SA8dk2MWFxAuHvGaWSUfa6HqpvNoWi4BGh73Y6HXiLLFfXNuuACeKMcmLEcMo1r1j2rmnZbCcU",
  "key8": "5DE6yi1kwVHpuZzMkNqbU2rgk6mvKMMKw3prK1doSHNjjLkcpxKkDboCgdXgbv1JEXizTAYb5DE37w7A7Bz1HU4Y",
  "key9": "2kmjCiK2fePfVx9uXQTGuG7D44czS82CXYbpEi8CwDpEprkhpycoMvS3csGp7m1W86wjri7ttFRA9jfcnnciievD",
  "key10": "5PDcjWKszdxN5K5FArSBXiAXBiTxsVFFpwgfdgnZvefDgNytVoX8j3RNt4H8RR1WRWEiXRA8VQf4CaijB8AHwweu",
  "key11": "4rbacKGZHPNNygnQVvwQmStqQgGj3HeHhuWXx3eMU9HNWYuSLsn8G1L5U1jSTaKERheJE5FpBmtQ9fnZfZzFto8h",
  "key12": "425Nb87XPErDMTCM3XDefHfLtBZaLW1XBgP7XNcfonYnWRNCQNo5J2mdhGqh6KTLthCwrjVy3wNKhi2h9TgMhJWE",
  "key13": "61FSGUCvxMHGe6ztq5AWpPAGhbiMccRCicNX24A8Xg4qh3anHkHWHw5d6ct1GszZaPhDFqdjkux2YVqeryk2N48r",
  "key14": "JovDgmL3iBABeqWXHS9EF8yWLS9dFGxnVzCMPfagV6Wf4DrNS9X3cdTbYxW1kTXvH6x1VSxhpwTcBowcHnKhWNB",
  "key15": "5k5UpBK5AqL9c8RSZbiTVX4z6N8N2gz8GQfs4NXtLzrpFipZGKTJ6EKX4mS7hvYuaz5wpzNWsGuNCG1hfGJvWqxu",
  "key16": "4bMcePWS9xTGeRdanFuwZCTKAu3arpjC53Eenwpub7uVnHsE3UZdWn46dF8kzkFeu4r39iU3xLC7PWt14qjEzPN2",
  "key17": "a85zss3oAANoFAWjXx4TgspoYczGaZdiDFSaQearyVSbM7LLH1cBrAwngnPGwd9TY8ME3AjzpLiS21Fm7rp1vwn",
  "key18": "2UNr1XLCajAPkgUWRCq41yon1k8wS2mGGDXURpfAm55WnW4ejfCxxtqRtp2XNjCsyBXFrTkyTSUawPAAcCvpAu2b",
  "key19": "2y7UyCvQ7kt9vRLMmMoSTPHisLPzLdBAGMnSSPaKds4UTYCvy9828JjvV4SyM4UR12jFGLtbiYhpb9bXyCq7rR2B",
  "key20": "2Mgq3tms1dZ4jYTE9F64Hyw1goEYWhLa4i1T3dDhMeMd7r8DerBKKCCaQQrCcnio5uUqUyntaAxyWqvEjPfwEa3u",
  "key21": "2tYJMpQEeYoTBBnjZ8dRUyifWXXHm7mFwrB3phb2KHfVPf1EpJeG4CJMPL6j2t3ELVZ5NahwYiJyEzqr76P2JTia",
  "key22": "3NjgPHbZWibLkSwGZJb3eSvFweZnR7TcRas6P4sgdbDwLZaZ6BmCegvgtmRBk8cPGPvV4bdp82BX6eWynL2pzkdT",
  "key23": "3pF1Egf36QRHHyJUbWHwMM8NCjtj19Z9gcNNfvep9JbUnqgMiX6ttASjRyacb5uq3KTtzm9uN4qkpdCqXdZVNHQi",
  "key24": "JpB55irxe6xVhLxqwboYk1CBSxpHazuPjm1gUdvCErz3jgUDkEmwXhM5JVfZfQGYzmrCn4Huz2QGRh5N4Ut3g9H",
  "key25": "2dCSwF8XXCDzuKTbwfjQEuX9oMuF9m3hTEuDEp8PEamt7uaBB8X5G3kQxLKKxhhYuuYsjouAUebhupp4nhbFsPeK",
  "key26": "4454b7VvFooZEEBo86jobM19u34eLCQWRbKdsexviZyKbL3dcChU1ZasQGpvKDrBxR3XLaDh7VM8FUianF9Msim7",
  "key27": "5Lb2jRN7EuuKmksZBaLKR9TNtjEGCFJ5YE8cbygqH7bLRGfBhgxU1xuxf5nnpG7L2dbLCRuYX1EMHv91zJw37Kg6",
  "key28": "2jKi9gRy7jWqeake6tz365TwWr4BoNpu48rQfD6b9G3SihPDzoeiZCX5PQuUrP4r8au6s5EUBvmQPYXkptVEZCAp"
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
