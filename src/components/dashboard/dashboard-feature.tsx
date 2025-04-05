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
    "2x9oR55HcAT5pBAv4FxGsWgoJwWPBq7xc4D4w3Tz1qVJshwfCTRa1oPvU6hWkhJe1ziDvPF78Ns94vL9nxmvD7n1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BMBDPyNDo4NWWg6y8UQGfipSznQyEQGnhXysqVD13TfT364QEi4bSkZpiTQsVzcYGmkX7P8mvJmgHVeXTaLGicv",
  "key1": "3ABNEMWD5Tzv5fTYpfm17m4YAjPmUUHgBhwYDVf9jWHZNoaQPsMrmg54UnRuzHBe4LicEWfiAjCCeF3pgZ5WtEjd",
  "key2": "4CmsQZQkRXfCAXNiSheMERrbNjXTm7FgMSQiz8ja93Emepn5iPB3kZsk4ECXcHBb3JMRNVLvo1J4WxaKfeMfPDNq",
  "key3": "2daTrP2p1VyM9PiywnDTqdqnuxCFWKJYaQEtbJjKjEqsmHC3fGt2w2w4kAydGN9NEa7NHZCn9M6XWQQjLFUAxBkx",
  "key4": "4N2MhmXoZ5AqE7uWVaK79s2mN2ePmhnGrzowW7CPyJWhkvnHKCERHLFp7uBaBq9wpQPb3P47Bd5o5xzkASyf3ug3",
  "key5": "2fK5PySShLXRCQaBSB3T6htgfFzLAv1dQEog7CNcuWP6bhqQt8YnwAsbHzS1tMJCJ3fjJxugY8EBZKt3zYYfvQUf",
  "key6": "4KAThgtMERNk3PjNTM4fSxHKPWoxUCoDj7z7HbwGyCdRevdBNcC34Jq6TPuwKM7Nq3pf4SRwGoabWjteJSpqns7k",
  "key7": "2YfjCNp7QaLhhGqSt3zQ4UZnXCG2nW8dhvw37SvAuE3UvDQQpjRSsibma9cQpuJVznKt3AtL5fAmj5S1sHEs6qQV",
  "key8": "5wRoaEywGk6t3tgTxUoZXwW3v6x3dmeLGNTKuwGHoMTNBQGByPb1mUn4srzeCngRXWFjZd6rS652Z6KtUy9fff6T",
  "key9": "hN3crD6LZ9QDJVaAsE1SPymdCTrHEY13onKPLuC6Gna75uiUtW2d9Z9Rb8s6ceXwXRxToAyDyQhEVfBgDsTEtf6",
  "key10": "3jRiFpt4zMRU91f1zhRMyEJj4oYGQtXqDNvMdYw1YH2uiVBBQg2HY96NcapqVb1UvpsKzEMshP724Qzr9mjk7zRG",
  "key11": "nnCd186sFMvcoJ3V7K4LR9vYJyuujjxdQxJiRQF9uHEsRVdrzgYwA2BKiiWD5DSabiG2EpNCTf75Z9NvxBSZ1b1",
  "key12": "4wnj7gbTkQnq4LFmXzEQXMrBJgAzXbX1tsPyrbgchvVdkX69rnJgPB2V2nPBqmEgsq1LnxbAfvmexgiXi3pJBo1v",
  "key13": "5k4KEq882Z5AKuAFvCag2rgUa6gCLYk8JDCCbCye3Nmae7PfrdsKUfBEsuHrNQ7hKBViPhJCqCfYbxgz38BGwxAX",
  "key14": "2V56YCHhGgS2fwiUaBkrjGQ9bWqZaozui5qRiBKBANXZqwHgSdpL1oCa45e4VA26kx34ajuKsSMcNRJbpzT9odCp",
  "key15": "5a2V815nXLJnbGkQDzjqsGiBLUtMfBhMYAPRvi1eTBNAqV3cEkzgv2bkbBwRBcXs21rBTSJqhKaksyB58H3W3in5",
  "key16": "4fqJrgPSbEHzzBMiEMrCu92jgDsmFGv6VmCLg5kNE1cbXHYdJtH1XLmTK9NUzoS1pCbV7NTrMa6pP6zyiKMG8C92",
  "key17": "2HwYEk877xS69kLVxJPBEDERTCCDiVkwwPWYeaQ2e5RANBg2r3VNepCLE3mGXav3jTekkmyM8M685r7dTNSfJU1M",
  "key18": "5EaZDktzyKmcjaLXAFu92rmtngVQ3VH5s26HSsuuXs9uaKhCRhsnLRbbnydaaB4wfRKzrVDNjXZq4PhHK5xnvEJC",
  "key19": "64YSUbJPif42wPett3B43prAm2cCaKveFMKJWyu9rNcSNMkEfjmKLNS2yEURchCLdzsLUyFvg92pKH1gsEJgHjtd",
  "key20": "kkyYFwEr8xwhRJMPTW4c1W2agLrNufrzzCYo7VHwwqiyKoi8jBZjLpyGTboEGLq85em3dK5ap8rSNj3hCq2g1EL",
  "key21": "5oKZ83AJhqxwaHZGditGpX7qLyB4TbDtFngTa3LiRtgPSDhdLC8pcPR54bCr7qnu59XCoCXe115oNGezyEY9XL9r",
  "key22": "2NaYbYypDpn7mTV5vVKcqbRTtCniHtQyWK7z5CHr15YLYCxCiubyNoeVRx7UPs6Byz8BirmoS3aEcMzNw77FrPkM",
  "key23": "64aYLgKUanitBquwp2zrjJnwK3rLkKVuQ531zXSHYfuza3CsFKdZjNtSbemy8xaUQZJWwAhvxeayUYgwWqtcgjAV",
  "key24": "2BGxaaZMg2GrNjEEFNGTH7xHFd7578Uua6r2A1GeML92uSitjyBcA4vJfMqHCeJkDiqusVrQ1LFv1ThLnmWXaWhD",
  "key25": "2PRnr5zmrr2v1rbyBG8S8exupJteRrKWnpRFdGnyMVur9SiZhHCk6yMYJ8DKCMFdrpFieKNJv8LsmHpU7fyuyrgn",
  "key26": "2aq85t5sQGbhD2oCRsnbQJnCqBZ3UBbrWDLShK8pyvEzm2foAeUf9auJGj2FtrHRcj4XCZXWxqwhRGPeM1ZrM6ZD",
  "key27": "4arFrhyhGaiGRJcdTWiLdP97uUK15BuEARsU8T6aCgKKaWjFpcwYk6iDPUWAGmhLeJt2yGqGDr9fn8McgXpxcBvj",
  "key28": "2ZtfSwcqxpdoFxXvrnmS6Q6cQwFdJwoNFrSVC6a4VDYiycBBrewZpbawRRKfSYrYmnF1Akj4VYgPfQj5yrVCWSNX",
  "key29": "4PVMVTmMKeZ1SXaxH5YApL7ThHNzbzCLhAwqrGEVvW59XUxRVpgQH3JcmmyLeJyZN1CGRTFN4urnP67VMDLJcLEw",
  "key30": "4hdaLv1NMJZUB9cMNVY3hja7q64B83oZzxkKmzoPS8qctF423DM25QejEQcGXGe9UB7XVighMhLdatdjUCzx1fxa",
  "key31": "4Y6ZsZrFWX9H96X5vbgJewfYFeinxAWUd2j1xW5NBJp1rf3WQnVZYMkPyv9jYdGY7paxTgxkEoQ4azA7Kum3aLqR",
  "key32": "4G86G4tufsJrpXyYC7v7NNku8XQazdcNTGnDqm8CQugkqPDkVRKxWc5UWYxsUqqVaFTLK7SVZheEuwLTi3LEV44T",
  "key33": "2L56wik2hma1dPXF2TNZZ8yZzK9ee8yNGLGxwGBA7SiQBUmt2ydertjvatJtxMPYw1zBJUGpHyq45zKbAPUDXKfu",
  "key34": "5rh8tuTEMfxBbDYVN2dY2Ww2rbyn4E8exozah8wjse1RkR87dabx1zkrqyGHqApAy6GtMHRM6HnxxrEUr3qes2it",
  "key35": "29a8c7cs9MRAGHFcbZteWibFHgKpqDyBbLSoqcWGyAKWurdn7YgmoxRj12dHcc8UB82L26JnVs3CVswbxZsLrsFb",
  "key36": "5E2dray3FcxAcWWvNGan79SiV68sJ5ydtbaq3M7qYcVynpdhMGaMMdGqvHEjamC44ZJoJbU9GhULcXwmqa6QBVGk",
  "key37": "3uAAUNrJNBR1UWFnGGHzkm1KrG3NgVkpYbUAGjvPMiKP33kn8gZCKn8bs2UKrQAu3SL9jAjYbyyipfxD7CPwWp2L",
  "key38": "5mVxDswe4Hd9MwEWb4FAfC3ebTaZYQtBQqAPeyNxjNPDKC11cSTsu5FMcwv4UCd4FEZ7AWyvSjpprNtvsoF56nms",
  "key39": "2k99JkKyrFdFn8r5SuWtfWYmhpZf2HHvQTbhBEDeyNvMfknPLtZ4UffdzDu25b6m7jZUxa37DmDAWduMZoghMeHw"
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
