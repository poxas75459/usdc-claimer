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
    "5nT1vafPg73WXizDMU6HC2sy4Ue6Li5sYzjVUxxmGauFEX2fJaiPWLv2rzqZuB77qUqsCkdtieSwRwpYJA6iWAte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36SeddjzDP1MsdRPPnUDyfRcgXwpq8DenJCZQFBBYtkxJiz2B6BNFWS7mCnazPxiZMzw3ayK2BLihp3yxNtCQQPH",
  "key1": "etpmWBSuxRhuB8WHher623G8THuRcukZ2A82rTnPrvmV2YpwST86igHBDoi4W8NkiL7KVDT8Xr6L1tze6dRnmPo",
  "key2": "64QkUG9dZ6d6bRgcCjDaLLbCet5byU4No7bX8GTijbySBGePH5B1EcyiziFFvGmr6zJoFYQgwEGHaNMnjaLA5ntY",
  "key3": "3EQHhLuU9cGSSLmKReoXKGwuX4GLkRw2rcpbpFcHd1fJRE3KFnhDdY4jSECq3K228tFRizLJ85RxYomQrdapYf3c",
  "key4": "4ehLGBxCawnu9XTx42t8mP9bQg3yGie81yukfAHt6fvEaYqErje4UqAKBsBzbYkEPrVejs1e5WGt5jW1HvgJVwcq",
  "key5": "51mxAHy2EDZB12kP14fXc5r9RBqmbMETkoMkR67N2HrKBF9pgJD1MDxUHpaChKFMNE5zWD6fJ6WtKKwka7CncMyN",
  "key6": "5fv2YTMqvrGLg44QDSfT88fpibi5qXs7Z5HvjRbavNXMapsSpn8qYykYx3QRSsA6zfoFccjvxqNZh1oJVVTy2RDq",
  "key7": "2HfMFuKydv97oLJ2qpGEavYKFjPJEyyxvzabAFBegcUKi71xb97imifRdnHaWPBaCwocaqJREXP9XSFyo37mGEEG",
  "key8": "2aXf2H7W2dfxPybJ9VMfaA3EEkHaqF4ViqMR3VshEMQS8VBWgzSrzC8nVnkaptPtgvysq4LHHb4KCVKyzvui2Eqv",
  "key9": "3orRiPEdxBPw7hWXBEApAMdyy8eybGhMPzpxy47r8FfDLtbMGgcap5UG6LHh7eonC71kKmjV8phXBpAWGb38BFsr",
  "key10": "5skbYZuPTUnzuR6QoazugGWfX4iTeSCFVuc1VxjtJ4RhBi23KxCMAQoBDNBPecFUzywpA7L4fXLHYEsPxHX5GfV4",
  "key11": "3FXW67HoUpEFjdLAdrUKjCSbLP9k6JyFnDvkCHzLBWvXnMYa3JuwT5DFbhRyFr2PfpRQJhJLRKxM6gec6LwAwdG4",
  "key12": "bXw2HTYzkuBRcc8RQ1wb5b8Gt2L22DHhBD6WjPPMPRhvYtCZJv25N1ne5wE3WfZirnkEhKStkwS1rJVbP25HQrx",
  "key13": "638sPjtV3Qo1qCYGrswK9ftRNfWyvLJqjumsaKevJ2Lfj4ZghPo5hFHV8fDumgE1y95FEB8iVoVeJFMyz3S8SaHB",
  "key14": "waK32s749k1Gk4QL3zR1ZYRdrG4MUsu3vgHmzKYZtPgBYdZX7EygfJd6os5DeiZ6E26URpA3D97oZEFvY71uJhq",
  "key15": "3Bc2enqCMtM7GceyDEU5NpXSa24Lmqzqz1646LGbGNsSVPsTFBfjmAR7BKvV6qdSikAtq5Xb3nFweySC3QzcvmAM",
  "key16": "51jXZTgCKdJ6dXAZ25mi5v1DbPu9qqz5mp5qGhYa6WBzpy4xCR833KwyXhE9VC1WR3Rq3rnToXreA4hh2GsuN2iQ",
  "key17": "5hiALqbtM1ReQjjvs3tHRuDSN3Lm7kSZxydK2eCJVNxTkcJLcYmLSgv4SnG2rmdpFgjA8wBnpyPHGMx6yyNAutyW",
  "key18": "rfycnf4cCWnnT48mLuBahFe7ouk9FdgZCZWisBMurPKJak89LsfHRviS6jbRGQ9Jt7593bqE4pNREnWujjHNCS1",
  "key19": "2U2guEny37JB8Taa9SR1z8rdwn4SzhePZN9hw19vfC8kin1VQZ3k7oxC4UEaZ469k4zJ5f1xqNJZtCD3NHBEoPA7",
  "key20": "5tBYQSUzTC4S4jajR25bQH7hWL2v3ff6wnv9fcoXHtZSFEKXDY6aFbHuiDD4MwEbYxAm69Uqn1fC5p7LGGRDD5fH",
  "key21": "5ECw993pberQtAfx7p8WTRN93V3A22pc9dZJUeJnqjvr5La2K6FcdtFtbGtWYyPebyNn8XZPfZp3ivQcpzFyfEMs",
  "key22": "2Zp9Pj5UKaXKtLcbGDqBfhqq6NozN5u3fbEY7ZdJdf8w9vfqBYpFy9jHVyJ7qSnSyMY389NNFgfyHgNqLp3VEAAJ",
  "key23": "4XNhEVf1W4XU5M5hZFVv2UWmEqUXkYx7VUKsfYg25vhpfSZgiJRpuc2ccK9N5Wk1cuqWDLVUJdW3C6nvD8ry2vK9",
  "key24": "3jqwhxxNh8c1nvnUn6DTeD9JePh1x3mmRdPQizSby5MPitaXu8ouhsTYnmBw1tGnv4md4S3HxZcTrpzrxGifU4vC",
  "key25": "43Xp6WpbQEn3xgKax3oCXKy1gFRqEtfbRaqwP3ycdBUWJECf87R5Jsknw9K4edbN6QA3LtaPfPcKh6nz7BdzWoyL",
  "key26": "2HFn6Tb63XVmaH6bEKuGetvak7tXoZ8mmayaGh174vMRqzKMzNbqQtqch83HANKaLe93pUtYRHaaAE1axNcerp1S"
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
