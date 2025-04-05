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
    "fffEbFynMU1d8uHJrWHBnGMQCGFxp7nij2mRz8YEZUbYo2DmPVS1pPFmQZKTXH4VAgmf6BFxSsyHJ4HZqd4Shqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y88czAReq9CJWmm1csMmFrm1VfJV3YuCxe3xopGN2UTtCVuF1judv2YDTwZgbueNnRF5kKmvDEhLoaxYc7koBhc",
  "key1": "45VuEhxhmwAzpLg3rRvScEkaNafRuZ1CDYAWL2pxPesPdqb9tAV6RzPdUaE7uFURvtiAfAbP5Aua6BQdVdTthmBk",
  "key2": "2eLfcDmvFXrMTZUqpqKLpdhwVrPJbk2PaC1EepZz64RnyiNnSVaojiRvALjDv2wVmjarADnYTACsG3E6Dwrx7zR",
  "key3": "5zigZBwimnjehyEVBErzMYk6pWxd3sP27NtikAoNE625XtnUbiAaLhjmmMnSipsGz9PeG3yzer6YCc6gnRCxRVJ4",
  "key4": "2Hf1Wj7zWLHNgoTf11Vj7MzxVZURx8cH2q9Kz4WKWsW95KSQLRMEs4VtpKNWL4c5TUnuseGPBoivzxeAwwLMNtXb",
  "key5": "3D7w9WZ7xQPZjZNWLzoqoYBjJgw33CBL64tD1fVeM32pa26BQWaAzhTcuh5yBp9h3DwH5vS3afRta3EqVkSgGo7d",
  "key6": "3toPUH5LKBdRS89xcV9Bw2tzRz2UcVs3McM5oRqcoiHiecwcPuVAED9nFzQ1pFUR8UKKvk61C3RxrLeRpGR6wQV8",
  "key7": "5G4LcoWSLRDbtPGd3HDt8236G9iSP1DfNT7g8xckziu1txCNYkEHMuRwpqk9QnCvwr4XLQADk5v7PNdDkHpnCBER",
  "key8": "67XSLuxhP3M31HQ6KcqEdiqA6TPzB15jfGUNaFA2NLVpuVSU3U734BKVtzszrkJm6mAeK44dMAMNaNwujsaoh4kw",
  "key9": "5VE2Xv7nLLjfUAtkcWqhqCUMqBKnZfb4WNLeSuZZBVEQWfGiVspc32z8iBdp57Pcz7qxvzfPgSddC9sEWpSTNceX",
  "key10": "3kN3MGMtjzNFMg592dDBQe4d5F4zJ9hE4U7dr2SRECm7iCFehCxVQmcYULSMhBjgQ6EpZiCk4jQE1DZmrWY7cYNk",
  "key11": "PvNy3cu83UX4BRPWZLmpEAPFLeHSQVavfUdgpvFC2mEqSGK8Nuxf3YVKMnzWw1yELP5fzWwL1XPqPKa9JsHYEcn",
  "key12": "PhV2j7qQcq15NdCs3ZDxHzFae8MGaueFDEb5jhP714UjhWbomfmMkq28AFgDuPsRApV311aq8ev351fsKYbvZSi",
  "key13": "4TYYxn3kEiysviJ2FX75Z7qLJrqthJw9QvMqu5ZTT4C9wFmdRpqX7Uw3e7A6YZyELETePW4LDcHoVyqkSnnVEbYd",
  "key14": "4P1xgjEdYymvWqvpvwsZBVhi7Kc7m2WZu4CK1SP3eR1uo8o2KAox4uhUvtMipAN9sZbPMAqrqnGQYvSNBFxJ7Daw",
  "key15": "5BD4rh85pdChJfKbEMftSA487E3SaM86LMALAZ8tYuSW43XssnsSoRzGZLLzcQbPR8KxAmGURiiebMRJ6EFWYPUo",
  "key16": "5otvQmWBUc6pvGYoXBTyCStoZkQWumGuH71A91THo1ZzNZk8a7ZsoH63E7CF9n2LCWmfQkk8W5ux6WTVqfDDVhCN",
  "key17": "3k9pgrAhrkAq4tqWXiBNVQnSTr1HmmbdWFns6rW3b697C4GVQaqcK7Ua13Bs5wd5ufqUdFKD3y51j9CpaKvVRC1U",
  "key18": "22NPHfJiNw6zbwHJ4198A3RVZoviN1gV3WU3JoHiMzW6Br1LkoxyD6bxSEqESa6b2hToYjUv5os5taqwYEtiztEA",
  "key19": "4xsedBPtL77NSw38aSgb8UtVgCk4Sfoz594FpJSWvuajTte3b7LJWif5XGX58opUtPw1GrG56BdnVhJsPaHG5iVN",
  "key20": "4CtuWroLcbQmLug4ULYPBBQbdFSCZE6Nqe22nZJRHw4uyxjM23HZFLNEiCxJcEJjRt4LoBBMbofM1QTT8FvnRa99",
  "key21": "5qkZZnadGsbNcQkExeYEjDuRpk94RqBfBEzpLEeRQvAoAnNtF9n6v8NYMgbVap8L88JrSBS6eUfdtLLGjiQxMaFq",
  "key22": "5AUWaNjo8f3dXvoDfxCwprTJPJqvDaFmFBRJKkrHc8VrbL8KkHRpZfXCwirfkP8JmZexGMrTcbvayXGYV96ML3KV",
  "key23": "a6tZweNhtP6dtQUZYzGaf2S7Y7mgUGaGHv3s75eN5jn7BuhdswZ8vgx1dgozJvDzMjFHu34uAFP7HGDKGnNQ44p",
  "key24": "5n9yicpyZPmLNi2pQcp5G1K6KxYHqnrRqxkoTPE1aMLP8RgJfQsQx3nQv7LAu1D8o6NoLa4MaCJjNYVqpzmygkzy",
  "key25": "3D5sNtk7a6e7QuJV7grjmdmZi4qUfJq6VGrHu93kQg8mAcWqeqK8zSQWD4iDCoHrVBmdGhRKJYswhUjQtXWoLg5W",
  "key26": "vT4uRXUkwTnnLCHxKTJx69JpsZkMoGVxbzoT3guSbrJvm2ZDtoij4mRpLEr2ndaMeHZYFg5vpdyBMEGWdiQYDcE",
  "key27": "CZuP4wFLP2CGh73aWckH9GqpjbesQ7nSxnUxGWwJQiRX1wVDJUttRWRzAFmc9hPMiBrb7Ze5ZZ35PdCM62jDYgm",
  "key28": "3noPby1hzC5KZV6t1Xg2uzprKKhL4JoP6evCe3k5xnsd76TstLenaeRyVN4m5RXH1Y9e3wgHQoH3K94S9gTV9KmC",
  "key29": "24Gsq293YNjt92AguPSjs7rujF96GqZtRAhca6Xxfwzg6gK2aup7SZvzvGnihhbR7Kmt4EnUDHsoHo3xrHue4Lzj",
  "key30": "5qgia42r6gLkFtGAqQWNatxXHhkqGnSz3NzMBGD5mXHcRzWJ7hNS8npNP3oSiPAsxoKDgBE9NbogfboUi7o52tpC",
  "key31": "4iQTT9EsZKSPd6CUPiXWntpN7NPhDBK9of7zZLbA3FD2ERsyziBaHViPUacwBe4gYaS2Yr4zyczXRAFpP81NEYDN",
  "key32": "54eFRRDf454rsDq8CzqDy6n1dJwyVbG6sWFtW2vjqL155R8WGWmTh5NmVgad4ojrJhKbJ1pcrefav8VoJfsREy3J",
  "key33": "5AZv2AKKmbrdmBzBFo2jXcQkxRTfGb1VrTf61vx19qXXLrfSNNWbtjnvVwJR8zg9NBxh3kMujv4BPt9Cru9YNLUF",
  "key34": "2BsdeynQALA1ksgGo9nNatkzskD2L2urR62rjhcGDwYPUEcRnoMb2KyQYxF4fWD43LZMy1Et8c8QbpDc4ABk4DwT",
  "key35": "WdF2NetKqddL2JVy65CwSJNwKW9cwDmm14oYrCnZuTivCp33v2XgRiXK2Y52qJ68wrk5wGCozUTntXbbFvf5DfB",
  "key36": "4HF3z3HGL6jqihQLgRLJwhCNqwM7ZQY5trvWkmvkL63a2r5S5o3iL7AEADTTP8AvEM5q7qX7cXxecgDMHP3tx6eL",
  "key37": "5JMhv8ymKJAe2RKsvU2xrgDCWpN7ULvBa7nDc7J3Qur9Yyq6z5o2LRKqiYX9JpcSqn2nLL5G4BC7jJmU5qf4aky",
  "key38": "38CAE6QxjcD5wXKSzu6w1UTuCCLTibsEq6Nb6N5E9GWLLKiz98ZqAqS1vUpeHsirCygY6qdm3NoNPmL5r94h33sk",
  "key39": "4dKZ6Xa2U5LpdpshYJKuRvpaJZ6TN7DGfhKWrQLrvhRbnx7NZANYuiNAvZeBDZeXBgtgKSW9JZn16nVEnEgBzUkc",
  "key40": "3DJ2GfsNppsLiSo8eHZkzp7JjWetvSBwN1X4DWW3V4iQCuN1L4g3NBwDZHVf1mzQ66AmKdg8rgcmfitTaNYbEXzp",
  "key41": "TfrZBGcChXaiAYnBKrKMWyToETQZoc2GNHTrEUfi68jkAGf5L1jwfBdfLupjWVh86v7FZRwuokjUSypSfFEsbZD",
  "key42": "3LZ3Nmk49MtMWPSHquGE3r6o35ns3YeNVYHVPcAX9knvkNVVhzUu8x17NKCNrLQL3ofJcLmXQXQGG3d8PQpVQWDF",
  "key43": "2bReWVyNeN24caSyND37ACXmi6zKnRLRYvZGXjRJSgoSYjF79UPva2vwQVCsV5oHEWRh5vQtM2eCktu95mtVhG8N"
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
