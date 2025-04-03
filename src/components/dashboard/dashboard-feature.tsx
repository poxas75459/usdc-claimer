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
    "5A2zyTBK7ReoVoZGbMzas7xZaGNffKjhnYJYk6yVBW1i7PTcCm6uZP7DSEcB8XsXgLeL9kisGUA6dH9pi77uHPw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MqSCptfrzrqXzPj4eeTn3szPrweDyBFdUYCy9MtSRFfEinApxcWhMRhCMoUAe464w3P4Nkz7Tj8xEAscCWsmYHs",
  "key1": "2z2fVs6beuUhsKKCkGKhcdm114wZjauhMziTtkcHYxbXVBHVt6H22nwJAbhfKJXtc74MbVBNiWWiSaPtNVdhyiFZ",
  "key2": "4JjSi4SM6GDtRs3wiUENn2rD6r1GKx3RwmkfnDEsu5uzSgN2eQyXdGvFMMbRXPYVNfcdBkoGEdB77ba6RiyEGA5j",
  "key3": "545AzakZ5Ms1LrSBtTKHVWsTZfqmMw6bxk2Nwv7wZF5duzCDzfyhC2LueffAU2HtcgfhK7wXtgYBpUyZMFaSwjgE",
  "key4": "4ZsoVQ9txoSJXkRzwZzXiQE1sNYXz47BzayR7czUcuWeQKAG4RmSLhmGtMUZFGJa1KK42GM7zgPWbPV2XHEEQqB2",
  "key5": "5uLB8YwB2dZrZVpo8xGgZQzQ6L5cYL9VhQcR8F9qxaSMx2vovtn9KuW9LUBGskR2xNRkWbGsqBNCdDuiyZJReMmi",
  "key6": "5SZo7qYngvUqreraBNJwnPEQmQnfpy5dHGFWZu3MGm33MpwdczXPypupPAqHJd3PEcXYkrjWwUo3u3EEnx7kNtCM",
  "key7": "2v7CVx2SDvuhRArzo8VUx7GmRHEUmLw5UVW6w8PJwEuqpAiChyMexZ7xppkDgYBus6emJbYV3R3CqR1BJkEi252w",
  "key8": "3riqPUJZvfsTVgkJ9tYmyDcKy6B8znzrKckLE3au5wQS19SNPGGvd33ZRrF9qRz2RxovDDNfkEbYdZyhwgkWn2PR",
  "key9": "4UF5zrerigMXRJ7tU7nRJ2koR9yR2yBWUEeuC3XiwebV7sTfKikDrgeCtL9uWhVzyQ8spWFtwXFCscMa4452yWHA",
  "key10": "2T5kpqWJJLVSKmrumdENKqoTT1h8Rd2v8QsRaCY7HQqzrDz4C9hyRtookLAjDMEABET9GQMcqpag75nkhBwtiSTd",
  "key11": "2bR6UKUsjtGNnpfymqsLCKf1Kp8Kzp7pE5hKGHBqCNzD5qxaCh2qchD65Pxon3noqA2QCmtA11H2Z5fMLrKCVw1B",
  "key12": "39oAs1sn3PFhA5sEZAtk2ntDfqob3GNfqS7P8DYnvYTnvmLr3hzBG4SdF6omGFCG7s6e5gdt1Z3yN1iqgKnfN89A",
  "key13": "3osPdcx9xBr8TFuxf9P8LCFN18Xs6LuDR3Ra9SpRMhBBYuZL3A5bGwGM2FzWnx6oNFBdHzby8beioJoVxDQ1KGVY",
  "key14": "3CFKiibQUwKuVyPgfkaQvYWvUeBZ78mBXrmSCDDmvi3C1zZHHXZB6U3tmHgUkHtRaUqVxG7DLmNiGGVwTwGnT6VK",
  "key15": "5dhsq2BQknvGnBB3VhuhdifWFD18pHtE25usyXzDgsx1KR1T6CY9FN6zqUVCmKNvxVhd16DhdVzjJrxGuEXtgvDG",
  "key16": "3FjTBmQsM8rrVVibx79k57dejH2264vj1C6WXanqYXPZZrAqKXArG5KFJP9UyWYrdf49kTkVRaBtsbySD2fnPQN7",
  "key17": "41oRzk7uZ3batcR7z2wj7RAxvGt5QWgxBHVck9gUkXWqdayWmRhaUKvDnhe1SH2zXS1zSiEKyQj9xEpNRueu47Mw",
  "key18": "3N7fmEzhDLxJtGqE24rbwEa5q615xy3Nrdbkp1Huq4cLdkhrJbRey7NnxDbWmonoduH8kzoxhtmk2qCSjP15FiUS",
  "key19": "XFnkyYaSDPaVvAfD9Pc31gpZuR5X6Nru4AqKkNEVPYdLaHHuehdNdJfq1hCAATyFS6HckEag34hXY6CuJ67aKfX",
  "key20": "2uTwWrGvN5ZGEkZ6gYieHfX2ZuJ2iNhJc65CqstopYtVjH36wAigU1HgEfVr5bt9QdY4ZL7bFFbZHTuh3nZXLH5k",
  "key21": "3yHoXvRsokSuwuyvKC9S2tK8mdahnYvxCPctU1u8cV6aPSxhYr8SDFXThGVdosbBTFCPNeJeThASSNvkccjYWDBn",
  "key22": "3LxUYCuNMgUegGJYbH9nEmEyV63Aaqs3kFWq5RqLszT2bRbCByFX6Q3FDkmiFCo3uCzuR9ob9xTzg6ut17t9xK2T",
  "key23": "sYNp3gsLDzkxT8S1azGXe6nUoirGsMDrQPi4yckVLYgxGTUgDvYAsaJgnHQwaZk3ticYTNsQYQRG3149QZq18xt",
  "key24": "HTkcZ7H7xcnNp4hyJFdxVwivCeWovFtSQqHp8twE5TR5DVG2F8WTZ7YuEUe2NJXkrSpC3HENEzocTkyRJiugE1q",
  "key25": "m9Egb2bGaJpxhUnPne1N2udCDrxo9FCLbV5sha3jPHCPjrVSh9VcRMzTZ5a8hvAbRWFKYuW9FsVSY44SQrcq8vG",
  "key26": "2KkqYkniae8PBFEPdehWv6sD1NPNjL6TyYqDyENfzwF5amvGMsj8cRpqFLFQVxgQkRTwyg5rtEzYUe3xpCNxc2fq",
  "key27": "TnEyzkQ19pqS9LL7F9CMX7FQEH9Lf7XKsRGivif9a2thHECAKkDjNeW5bgdXvCp9wx8MR1rZcjcuUaJsfxVotXg",
  "key28": "647dzcJABaAPK9cJM7qX11Q6Y2XXBwHkkn5h9cBv37Ve9fFrTaBY5cWByTNqVSMVbhcC1SCUsXWwG18xYA86ZY6Y",
  "key29": "4jXkojRuhkgYQ25gRYjgBX8EBGW5cqNBnRiJ2mevSEmnvCGwGWvaes5zsHw5FJpbtavV1AqMKpcf2snXL9DTdLKz",
  "key30": "5uiUj2NK6e3ksF3P5i9BuzBY8T1j8wAY5tkVc93DYt5YukgqeNFMTEAyqrFVU8LsgJoiwHL3qm6bQKWsnesfAvfa",
  "key31": "3WqSyWKhhH6G9ApqY4Vvb8CVVaQYbXE3ntx6QYVLmb5oB421JCEt6LNCrT6cHrhBzX66rinJ125oUZiMGYWdwhZ4",
  "key32": "3RFro47ycmyGgskMLxDExoogAJvZRgUMaPrBYvoBAyGXCzuswCUjovgkU993jb4UPf196uUgf3h5G8BuXPWxMjuA",
  "key33": "jAbEjNcbeKtsn4gXN4yGt24FUch14R6NRFPJcqgt9ugfyw2U824LaUfna9YgZD43goUb7ZqmoTgHnfanYVzJU5g",
  "key34": "4STdsZ54DBGT43kgpVVmNJobeDCUdXHjiumnZha1LLbH6pLUoPNFQ7PXVTXYECWLkbpnY1YdeWmuJagYFeCrfWTd",
  "key35": "29WCcs2ARkABN7bXCeBZV9KXbC6WQrgUJNSem49MGRaDBFt5c3XW5DSHqE3AMXV7asEL5WJpYaUzdZErmRNm3WWe",
  "key36": "D211AkUc4g5QyDuKcc29gTVyB4soKV63Btyf75EuGQWWy7eQeEMosHgGoaV5ST9kKV1zfoHMaDLgeom7DqRjzPQ"
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
