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
    "akqTXVQqTLRR1PvBZHj2TkqgK6u5bCyA4ZE8WfsYe6HamEwdXQf3BEDVJDmXt8Kt8FsZjmkF3Ws8iHAvnyKRM3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d6r8pSEpStifBqtdFMB9bfLKMPUw3r5WBnbgX87WdmbQomxoYkKZ4XfvBwBV2AqtthmrDTEoFy1ArdUo3ejvYUH",
  "key1": "5BDr4WXtftwh8WUwcBsA41LmjKtUk5gKxdmKFYEcyFK8aHXYvouCZ2Gtrcc5JwXb4FM9bwDP4pPmuiGNXSFFQfrp",
  "key2": "5hjTGDE845JLesPEvWv8yNrosSPW3vo6k9zUPfEJ4VYpZidxWDZaH2WQN5BRSV3vdWW1vPdAh3yQNw266Gd7yLco",
  "key3": "3hnG1R84PczCy3xxpgkNgxfQMzYXak6FH9GtZ85TJUws8tvafftvQ1qSEVKCbcSmnES8zbU52r9PXPSkW2K7HCUE",
  "key4": "3qBZytA38239G9JdEYooZEZaJA198ZQWJGAh7F2nAWQBBZnsTwokcLG8NbqzeN3pTYLdXod3GVWHTxM5diECqu8w",
  "key5": "3gU2tjZSUsgNHMPbZk4Rtjcrywhn5AXAocjDdCkG1RkqcJhqcBUTPGDwvw5Q4kcU38H1r1hKXNRB81qvdY2BnoMw",
  "key6": "5LgziRdMVWvANdRbpnd24CPxYFeKiYQeDu3wtT2b1dxyiTqpzAnLLvhcdmLg6NZLE94zfxEsRVeRqETXrcnjmMLf",
  "key7": "5JfeqGnuTB8HFu8unaxpM1ufKMEh2VKQmRWq9q3RhGR8atYQTwPe7d2TKjRjcLoKnQVLC5kVBqSDzpZuFujtUqy9",
  "key8": "7UAN3nHCYQWQCkNjeQf3oe1GQdV9WRkSnpg6YN3sJaHe6aL5LxpDYhqHe4DdNe3coPbo35jKJWEWryNjaQ5yPqk",
  "key9": "t1GRqL3Kchz37MeCGEpYei9Aiy4ZHpTQQjJq9huJKBBWnJc8mv6ZqkTUC64JXGDSso1saSjsJ9CZToU2nbJjYi3",
  "key10": "4N2vmvzPKGXqo1w7e8PSHbu98zFYoUaFKQ4QnrwzRe8U7u9Q1BLvtiDgpvGh5qgo2PvnTn16SJPHjCd6Pe1mnHLt",
  "key11": "4phvJ76CwRvK46B2hEum8BZLJQKzcf2SCJuE3PDxT9tHvskp2TEMFjWTmtCyayPAaudRg2WS8CxSFzckbSsBAR8i",
  "key12": "w9nTjtr6P3eCCfMf6hp5xW4YXqroYKJVMM9WM28kc6RZ3ANTm3z1r7fdu1hPEerciWb4fns51aNTCG6eixjGdUi",
  "key13": "2F8Bdp9PP9s8a2KqYQycv92KM7NWTivdhkDCzM2yEJspvPPHaydr7VHoXZoRdtXjwr2ziouoHLVAN95jDknG3mZS",
  "key14": "5iSuPLoWjNfFPmbSWZ37BYaGp7tT76q21v3VTwwC7XKxJJisJeN47PyKAPktYQz7BWCqhbByBpH78ASzmpcvDV75",
  "key15": "5NoMK5yAcTGyFd6PaT75MeLzXX242SjK979CH5oSTkr4CAV5G6uq3ru7aQVkGbqqJwTnbdnpTqNETt6JMTux71XJ",
  "key16": "fXavARDDJQBUxSahiUkpr3NcJqEUCXEzfKgUSyEYkZvjMMMMRiYPHkvni7JRvRzwTfW4D5WgHAmDxXZXsqbUEmS",
  "key17": "E9BWBuAK7iw2n3pMqc5Eb48Ndo8XNcpYcKgLpCQ9yfgEFGu1VgnqR2SqBd9WNspeGWY8TCJ7yZdAj39mbsg4jGF",
  "key18": "Y2tuGfguVLhQKtPXamVHVntLjjX4uRvpsFNFy3xuwjgQbrzdqrwTD6gDcmgEG67mHVZ885WVb5wutrxXqQ8UqFX",
  "key19": "4m5x6xNvKAoqTM4aDvShuTgSmmMUfr1xcPwhVT5E5CnYhb5iriT8MgXDEn9TqNkADZ3BkbNNdP1tMRLF9pdt1UGD",
  "key20": "5ouafJvm2m7cHDiMhvgzqRym6dK4PZYfTCcaBsboc1MYymX98XyQYxM6VMwHQQs7Xm1syFZN2HFdVK2VD2eJNCrw",
  "key21": "4uPQuZUt9pVSryvKtydcBuVcjiP3c97FdeiyCdHhZBScQKg5QM6EACVf7ULD2gtRFf1VebFEN4KijSyn3g1xhebK",
  "key22": "H7L5AzKxTiJaSgPNiYxNB6p2eV9dgGJvAj37iPc8ubh38DkP7Lhyf1BQjp9qojy3f26U4RLMGTT28bDE2SgN3p5",
  "key23": "dVZxn3n62nf7i55Y6Fv49i3rtooPfwm76vGLFai3y2w3zcog7HHsUdUtSbFfqpVXoDjSg9GNHRHUXhHn8xGWwJx",
  "key24": "55QmsCUquL9TwFGnpQx7S5GAWtK3uPxdrkYqyATd6nkQhREh3tpiJe1mHsFWpy7c8P7Es7QUcRQA4sZXhJfQc1zU",
  "key25": "25be9QLDpA6fiDeFw4M3MVbum8XabAzshwp3ryvdEFrpprc7RSAGk9bqbdF32c3qaoLQCPnkgPWQf1K3ioYXRhff",
  "key26": "MvGrp78fjJ3xpBbRuqGcCErQsSaM8uy5DMCruVEbTNtpFan339UScSMNFMJYHPjntkekin4tAVExkAsh52HsFmB",
  "key27": "jAfHYDYYUh6otcqP3g7U95KAmQyFsxZFjTtk7thfqrK4enEUKdDk56X7U4azLVr4gi1xXnEJhnX8qH4D74i82bd",
  "key28": "vM3ZLLYyYiotTz7t7n7o7MZy4RswpJrsbi3X3vj8BhTJSBXtsRvY9mH4psxiEP8XzKsModN9XKMDSsQWgxYRAg5",
  "key29": "2P3eGLbXsQiEKyUCey9cdJc7S1XCn4E25JakkMji1sZbPNJya1ASJKk8yqN1gwqQw9ugRACnmpeSzTEPchTbx3yo",
  "key30": "2122Hm7LSwkVsABjsn7mR7dVLqbWmuYRHo8719jei11uPiLJbv7aiPw5s15jvcu5eu1ibY57Hxvre53hjFBuqEB6",
  "key31": "3iDdV6io5k3s5YrbdkHU2z2QGkQMgSCjRtGyD3VZCNePMtCxNX3UtC1CJkqrFvguBjEjuvq4ALeJYPZH3har4RAd",
  "key32": "5fGNqhYb9Jbc87qgHTForsip6arRs8BJQ2qx9TthHnZkWopZA7f1KhRsTaVxYiKY613Q8TsM457k8zGKMUkz83Ys",
  "key33": "3DqMo93NL5sNGcJF7tZEzpmbSXmTfFS924oaGC9kkJEv76ZuDkhmrVweQPJY62UoxAg1GpTMNj1MQLzQ6k2FJoNP"
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
