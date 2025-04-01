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
    "5DnGAvTeCJi6L5ivhdZJJNNRsGMFzcNdnQuVZuA9EycYyuNk2cc7eEUHFd41oaAk9TWczxeB3rJN6y9kT2g4Bwbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MyV16uZonpyTVW2nN4GqUCQpr4z8AYDH4JDcAgagsEdXRuv6VXMQYzzaraevKhFnZ5zQEoJvX89MRto69HAEPhd",
  "key1": "4d84HJQ9DuzbzZsfYnG57deHZUR6PkrtiyhCrcZKEWqQTRxki851gkfQwhrWW1hWPasymXvthS2V5pMGPNRqdrM9",
  "key2": "66sES8WKs9WAmFGV88hakKtCx83qL4XcRdA924EbRPmk4Z1r1Laz5JKDLkzMBXmVxvWQBgRnwDCoamDBvsm1acs5",
  "key3": "zoX6knq1cHB9EWtsAJZMsonQff9UVULCsTTG9qSKLxrDLy6y7C4LUqqfAb96C1ssLRef5k9e4w4fH3ptWFSQVfi",
  "key4": "2wGhpE3khFyVhgx3VjtvVxd2teUe27fTiWPjLUo8B6Ao57GJ1gftfG4PLX1xpq7CDBBFhSjRkNnDaEuAb7ks5ihg",
  "key5": "2LpJEJKpzxfQtWwVtiyCF3Yy77fnriTgkgsDECt154cQxw6gafcHZmXdoauBMtyT4jGejLG4c7tYdebKQtNCrFxz",
  "key6": "FyC2cniyRAfk2N9mKkbdA6eyb47Vg7NMsCGhwsbqZkeoj7gZZLWbaUHw1vUAYRGg2KDbmLWRxSLrEuWeFjGo19T",
  "key7": "2ZHS9wbTT7FaLKAoNHHtVyTK6h9dvnXGkMN9GcmsQFnbkLC4ZjnNX5YyxAA7zQmgDjXUWU5rwDtGFHbfMuW9vhNw",
  "key8": "51RS8GuEdqLFUajCJuE7anCRrVQPKsdkv1dnUnyYK8YYw1tXYxMunD5HSkcQaw2cNRzxFn24FMdmFWTPtDdkiTJ4",
  "key9": "4xbdTo7Va5vwnWpRRQCd2omWwni8JSYeoUDt5TN7oS4W7hCPGziMXs8QPCFg6dA8Zo2eGmkRG7Q8wLqTUeLSnTH7",
  "key10": "5uqxmnZyuZFYjYqT8GwXHT3ZdYPckDfU2Wnh6ogWxJaaaXUiz314r27nKN8xaaHtYuEeJ4a9X9SLdzebktGYTKby",
  "key11": "5EpTWQN7CEkS4Z22VLBwWoWWijYXzR6g8QXX7G1Kog3M4ho7szNyhcHEY6Jg3uaDi11FDeBDnyGZUAWTFkec7NCf",
  "key12": "5UnYCK4bLjwkP28PbLAWJzAuacEqeDR3gWW2SWfg6kZo4FQ4PPKiuxwogKPBibXidRmpDt2mDp9mUZo4gibLC6rT",
  "key13": "Ls1yoQWfyvQEfQu1SZHK6NHABpLKS9GKmBcMvCNe8RCTsFFhXhwJsA6ZFZdbDxucnHmcJFiD4PMadFz7LFr6PS2",
  "key14": "2FZAvqZfaNzxJ4PwtquSP3JRYU6SMJu1corCCX9UmWjPWNMHVgaw5VFieQcDNfcq6yvRnJCNxiEDqoFjLAz7AS8k",
  "key15": "3TfVo4iUUVFKF1jGeu7ig6KF9wKzFFQhVaSWSZ4GTjMLVQ8zfiQFLhyEqrFCYNYyhmygKENKvwAnGJCJt1fwedob",
  "key16": "4QWobFBs3UBfu9GE7w3qDMfdXpWWUSP4JoAwg58SV2D9BeakqwRD9G3Kt4kyx8Gt2LMMXvsFpnkpLTMCyDpXJXUq",
  "key17": "54EU1nrxkdeJvDSXEgzzL2mmLa14MWUNfn5hRRJvghvCgqxBu5J8mYHZVRKwak1Enm16m5c3uqi9oL3LEh2qhRVG",
  "key18": "413oA2ZRMuBLo6h6ngmuH3TBFd3pGZmooABUYfRASfP2ugvcXXiwbPQF76Y1MDyRn9fwcw9o1UWSjwVML2QtXNw9",
  "key19": "FxDY78gvxGCR32rDtH91tgshgQmZpefW8kMYQ3MutfpDQMaoyyTd1zuQVW8yMsqpwCqrGpsrpkRcVmqG8YRD3Mi",
  "key20": "QxFqoGW1yiHCP2nW6d6FamDRgwvGdPk2QGaUM3RFV5QTnck4AhYdzTsTfeAHfnC2rUDiBsAp9qHEdM392eoUHmG",
  "key21": "4SCCymQPPXSHTtNKyngvEtQGCYemJ7atMKWfrizUHdVUE6Qpt9QUUPB626qV7p7Bhjjfi7YTYTJnAAM9KfnUMKfZ",
  "key22": "2ax3g5aoXzYX7WkpWN39gJouJViS3cAPP68KhGpQ6HE7hZsBD1nVJ1Fe4igNtvJQPoXN4aRqRJPq2bA16jb3ak8Y",
  "key23": "x1qKp9B2njR7g5xQkjc5zxGEmymqVrh5iRKJRoYqBMmDgrkatjoGLZMvdhMeaFDRERQBrSyf4zTbSqu3mWcByRB",
  "key24": "5dP6cxktmQF1cMxefkVD6zB3dbi5Fv7nJDCGHeJZN4ziVZDdvijALtxWgTuNcYTHgYFtpw9ZJZ1D46oY2kr7yqr5",
  "key25": "AHK9c3wqh3HYaRA1gHd91eVD2xCiVkJ6AxzYqYyfE2rKiJDSVFJyfrT8TeVo9jEiGPKbTZytcNsMLMeVyaEFBZz",
  "key26": "J7jBbBSTt2q75N25PMGn6RpE13PBNqWzxW4L3V4QStTdzNtuzpB9uyXmbY3QCNxrfzqVjpuPj2xuDqkF397zBZ6",
  "key27": "2MPzS5G4FhqLRpbBvFrTfddf77MafbXgpk3bo4oQdQdMBPgtw5VgwvWoBKK4o8QCw6XCNxz4LtSTiZaxeEStz9io",
  "key28": "2ZwYVWdmbe67aptQs23V79mizZojtbf3W1NqHCG5uyk4hMgPv23JSNoMfNbBDWH31SGsyxh5Gy8nu3irsBUJvGNR",
  "key29": "3y3yVDXGpAYP5nnCJJdKXxdHDU199m4YkKqtUWSQcePwQhhQhPvY5cRvrtzeLo3Mct4yHd7jp57n5cskiLmaBDsP",
  "key30": "27xfzyoGKmFuzvUAzZy6d2DFXjLwNghaAczgtVX8Pmb1okUp7C6cvLke4XarSgEuzq9ieEVeUp6CRmFTsAzn2L4J",
  "key31": "3xFFtxJ9WzKqkjHLwb5eLSfemSuT5QTj2hVHJM5X443C8FqRgpAnbL7ZryDgEEdjqKDuQXUS9uy1egJwCMr82wuQ",
  "key32": "4MkMvNwT5ip1jVCzV94Z3DthMN4CbgE6nk1GYZTKNoUZyhYPQG7ovS5PneKc5ZdZv796jm1PYaTQgHrixnLWvdmw",
  "key33": "8KFNdKKz9PmNSE1SSfvN9ukXbUoGSgezAn1BYnzZzNfnbLEX9ZXLUsHtjcRvNYQLnLMTkbBuZ6qkwBF38Jpz9qX",
  "key34": "wFwgbRqzbTR6ZStKfzmHNvwDUfTpkc9sHqfyeZx9j9e4oJhJB2zEUzjXAyJMGHVid5kpp9KvoHHTypwtrGgYJZR",
  "key35": "ME9EUmNDNGsW4Lr6abC5XA2fWVkFE78wbS4GS3N4RVT95vpfa2683p8bFYpKbe9dKKV8u5RBZs5Z2DzUXQdPmi5",
  "key36": "4neXMEQSo84Anfrcx4C1kMtuVAExEuGX56vHzMZXHQWKaXkxtGty67bh6NTSDtXooNau74SFtJNg8sENmMQ4cPJ"
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
