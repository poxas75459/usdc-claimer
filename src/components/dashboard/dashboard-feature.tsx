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
    "5VLojNrDmq3m5H8nuUJ8hyC3pM4ibcTT1qVJsSNAZb46EMTW9RAeV7juzapty2mdwn4T48bv8JLatiGgVQgbQLWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tUPbHSmoZAK2xCcwd2azSiVnjhgTd65pTPMZ4Qk64GRLPFugHTTHHSm2RRSbpyGv5zRPqKyKo1tsPUwfSzx18cr",
  "key1": "5oJ44p8WnbXnJKWuhkjkkmnkkhApBinudTTBVtEd2NWNrnbEY25njZVpmuQBDeU72vFVaK6TYqSd6nMFR38Cxwmw",
  "key2": "3tJ8bCkKTqUctEDZBWVkzCzkgGKo5fi3pFrYmY3i76mLYrKhzzbyUgCxiMsxEM6c2b3ntH4rivLZwQFKetK5aEhB",
  "key3": "4qLbib9P9FoB8Bz7Y6gBzLtHvqFAuBk3agPiZuvVDNpHXadVLLejGPjutAMaVJ7WEg684wpomuoT5Mznnxx7MMDC",
  "key4": "5Rn7m77Hom7aEfzmGGReq6QWvzPFdq3omAjme9jc5y5Mq5PwjA7vryGSqb6xHCj5hM1d7dv9WzGxmqWX1xmpksmz",
  "key5": "3QFez8XH7vTFo5ER5tFqvztfigjwHnuSCoL3WZyzLcRJXbHuhHT2sp3HXtCyT1tMLzbRH6ATUJexBugkW6m56DuG",
  "key6": "3D4v9GDiKkPrekNK58GGGPbd1UTTtQA9zKKrTvUMAHC4ATbikJP1XArF7NfCqMS6oRxYu2tr76WoPR4RiC3eQdr9",
  "key7": "41fouGmbnnw1aLWZWiiANG8Bb1v4F8oDxfdKsyrKQw4HZYz5v9Ndpym1z4nndw5hkDTEFw4SEqqbjGfgrDmxoh9u",
  "key8": "q6QmMSsTLiu48Tcan9xe8eTgwkrGwuFqiNWbRMNFPgWMTRRvUotck6JB22qsZoVXwQtUhfDswX2ymbjfqAcWw3j",
  "key9": "4q5GxwQhdQitGBq2x7iKQEZJzVz33fkWpJ5X4cGY3JUsewVwtonUCvRNGC7g4Zy8oi1US6E17nKdbHyPzJDJResV",
  "key10": "4Fe3GnwPcgeeBAcGch6d1m4iZuwT2kBDDfQQXx3qc9E3pU2uKtjKHijc8kdDN2cbBtXcFXoUoSqAvBWFPPz2g9PV",
  "key11": "25dR78Dk51EMqyvd6jWCPeab8UFsAnPQruR3QUPFWbN8hdq2xRQ6Tk5wvbnrTL25aNuSnGmAoMfRRJrCRfVaoTS6",
  "key12": "5j11z9EVZkUf7Mf6b4DSjuUYxdP1oafe8zPW1AVZHBLVWsGvn7sse6TzdjBDmguH4RKkGur9gRuMG6zHaDz5hhHc",
  "key13": "57dHtyFRou6D5n6iAEkRtNoJ6UtGkCtCEka8QZhtZzUECKrVFocorx5hEZVYrHneaVykmhN7PScCaQgLnk5SHJU7",
  "key14": "3YcsZM9uooTv33gTPPAYrsD9J6U6Q6EvvpAw2aMxTJ2pSKNq2yDFEeQdxshNWgYpCR7vQzPkPanW3g66fbK5ubnu",
  "key15": "48epuzh7SUwkfCLGttdANBhASb7uH1ddcYsVnFwczPX72gtqS4Z8GCSxToNT4knNQBQh92Ucs3YXVFpT5zG93P32",
  "key16": "39yvi54DpYRMd4urF9nA1zpvmW2d8VxNZc3FUYgney2MV7Kr39VRBYwn61vEQxzB9LMYSauPfwvBjR3zYiFy2HCT",
  "key17": "2HtJ3igNm5xfBfUXAo2aPMJmMuwMSEjGCET9xQQHjNiZVEdmghinS123phhFpDKF6V6aoiELTPTM6dKYxhLkomHv",
  "key18": "31DVTjdazJWoPicXraPdkxR9KPRc6vvJ5QBntKBuVEsNKwMQ3xPcTEdZ7GZAXhAxxPppfKroTXX3kYgkMt7hbUG",
  "key19": "8scTVp3piuB8WHMprFECHGH6ntZr2LypTV67SELWfgTebUw8ohFzQssauPZQh7jL238Afjbr8iDzwUBLHSM52nR",
  "key20": "2P4uGQR7sKqu9VUziQ3XNVpcDo3a9jSh4pyepx7TRdFjMXHsVBL6hS4AgSq36eVSrUUiA223YUjqddoi3BNSDNuy",
  "key21": "5shvjDKVW9uzL94fPdDycJzt2H4b9nrB8wFGTWh3w1utSWLMX5Tf13bRQzPi3iAxoTvUCgiCjWShxbZE2gLLGJfB",
  "key22": "NyXkPvQzJtFivMjjFLijDVLutAT4NA3DHXDT4DWviZDCRb7Kx19wSKV9WzRDjsTbRmPKURJTDuZsEk9dKE622sD",
  "key23": "51HdwBrXAZcWbVUXLMDYP6gTaMHxZdTjStNNqMd5jxe6wDzFpS6d56cjjsJDZAQNesdJG8KKtbwuEoDrnVQkhSKJ",
  "key24": "3F9wdAmWsVSb9VJFrf4woEHtagnfHjpWmXPmJGgZ2YLFpVYJg37QCgKHtTr6k1CwEA7FuEQp1335jaGoyQYgtKrQ",
  "key25": "4EGpHnjB81Htem3DP2YeLeYyMzdxPfnmSz8sjYAAoQdMPw1Yrv4aSchtrYPDKdAxjxGrGu5WNXbsyR7tuhPDxMMo",
  "key26": "Me75EFg7kzw2SAZDz5K2XfEJJbFjHDSEiYJQ9VNFfZVzcJWfmy7vNKC8PVJwYGWbU4KaAp3hnXZdYc2cHaaNwWJ",
  "key27": "4aw9r42a7cMX7bVKvdc5JW97qVemHwcuxVza4XCLa7xxEXNpqcv9yGSmhzqn93iTy5s6qQmGzy7mQ4haH4tx1LxQ",
  "key28": "4dLnMSEnaX7VrswLt8RSYfqEp1Fpsnhp76Nt7rwZMjfWr6FSvEKckGP4ZmbBUmy6H4PL8A9RPtDYNDJbZL9KnJRT",
  "key29": "2HQA2um7JhAXMH4b33nWbPd7yuqvA6NJX3bQzMzqCesq347tcPuideVuPdWctPs2bxiN2YS8B5QjZwBi6KAeMDTf",
  "key30": "5g17wD3tJ14gYVCqHDTGutqdJixVTizpzHzu5EjCnBiRtsbznKjXuh18yBfT3zYzYXeykeqqoaUFdASh6a7EdvSf",
  "key31": "3rrRzyDwLtDmLc5pTNus3wJeoje9rjCzpqWfXez6n3KZuMfaaFPYvE3XTdax6SJ9WywFVdJj8kHhLkqp7eU6SovU",
  "key32": "5kFbUuXFSsQ3RKuvpD1swLJxN1z4xShcKfYrbrJYL9k1eBiL8qYDJNwKXTHNaHovLWmoJcgUwAxFrREvfDgwJzCL",
  "key33": "5zjLMj4pkeNu6xzT1myRdBVYn1bh5DHgmdUAaum4K31p6dj76zDfhhQyJbN4Jb9Yv3GW5kXiskjjdnoBZyhtDHB1",
  "key34": "27rpXUCtuZJswc6UzdYkTHQArp9qJxQYbhtnC4atRhPqsbEr6YYi72ADv9g6EKrXLbqV6bg9dkDoBVdSzb6UdcEE"
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
