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
    "cX1emc3CbTrfKFR7hJCwhuKVF35ujbCZLPJ2xKy9YidVVeuoUf1QNcEfoXRM9XrKvknNPWdVYDeaApeSR66Dyv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39mKtb3kTKp1L6mH4nSPzXwHDGQQy9cZbVsaHZB2mgGop1bWGDDwjcXkqHkrMQauvS4xTNYVZcJh9uLZj91E5Pxq",
  "key1": "4uB7vHR1aghicMQ4VSrrKdK7kpYwisCUajmp9Gj1ZBssPU68PKyUCEz6ZcNfXu18mJTVMWCqDE1xYp9TMpkDtSQu",
  "key2": "5Zka2bUQC8WoRPvY2U8169DYgE1jhYq5rkYpVihscNa1iNmjNyfz5NDdx1fM7cRoAqHKUA4NqfzANLCa8DqqYzxp",
  "key3": "3MPAHBtqaQyP3ua1Nt3qotCph64MLGJtQPYNf3khsDpG9YQQGYuvE1wUeJbHfuFs1Wms2yJrzVYhwsjcCMz2W8oQ",
  "key4": "5EiK7nrketcCBAvHfAtnojiQdTxsbofER2X2Sy2C9Au8kqn5aej8v3Yw8ckvcTtceUhgGFhm9qsgwC2sppF7KSKa",
  "key5": "52uCzAVPBCeGLtJVJv4axwKTqza3dUXyS9iGKdh3tKRQrri31iEV9sKybGmsppp1eQuSQhEvumb4vQinimsHCgob",
  "key6": "Tma1J78iMNEFvFVNfhF3bGwSya9uw2YHc2T9bn3yMC2SQeFBNppoEtTCTURmgF2ompKBo5HccyVANiDNmWoFu5V",
  "key7": "4HurtPFZ1wr3xokQn2YDnvzftzmTk6i7G4aWFZvZcgqRN7nPyeTTjPJhK8MmjF2Pdz3nqJX3ideCBPsRWz6wGxvY",
  "key8": "5dRRSRwXwksnUR71z3vBW34uU2mqkrPpssQXiP9AfgTn3KGMtvzFJ6jqGoMmTzKLhosp9ghivf2Q1YegDAf7xq98",
  "key9": "4gMzC6Es9tpFmdtDygwbv5vqGWS8fViZhYz9VU1eEfp43tS2XPHYJLi571KaQUvP1GJWNBPABZhti6EXrA9VWTwF",
  "key10": "4Bv2CULSQZLeHdkToi3iMktC98Hw4wS1CZBhtQScWh2R2apQmofPPGFKZ8jUp4zXWRDDz7fVarZwz9bmp4TUKuyd",
  "key11": "477oRF6FGqjm3RwcqbhjTJZAHU48sw2hVGiPzab2BE2LyYBpi5HXPDoVTdrKXoJCBGXK47R7e9WgwJqTAdJpF211",
  "key12": "ng6JexHD9HPTQ1bVYU7cnMzRqrYSBDt176QyCXHJqq8UMa1kuYUQgou4L31eVCR3uuuHNJsVS8QZdWEnrdYRZRZ",
  "key13": "dSUgeaudgouUeutQTHBFtwszSFS1FwVyMr9ncnYbZPXx8kFobQ9Cpfi9ANzowH29JtNJnUFEXKpxtKE1QdgBy6n",
  "key14": "LNy8EVeVRBWbjbgXbqPtUYppQYPZ8g1JKFYwavvrbMa8ka9fJDQwfVY6Kb5ix1FkfbfDf7VErG2yJQX3gb9LRzM",
  "key15": "3pLuukJVNc8kCLEGuxf8u7XUzNXxwDLMxjPGiKYozjpeFVmFNexo8iiqCXcDjM6jkeD8cNUxqGnNYUodVh2pEb2",
  "key16": "cXpUbT5qKMznymkveuAgo7inn5FFM56BA3tSkcy1a11FDf4p1nxczyxWTVGB96jb1sQdKKXXiC6KhLY3UrCTMF8",
  "key17": "25EezUqMgnrPMaKrBvxdgg8tCvmc5Z7xtdNprMjAepEGteLkFjDP4PvrAPH4j7tNWKnn9A92nFh3ekCVv4aR5arn",
  "key18": "4qBRXwbdJNsfj8zQQyNF4XdhFEw2D9GRdhpi9FhoZ5Ew3Zn65mgMX7aUKh275Co89ZFpT9R8iE7QSbj7td5RJD2c",
  "key19": "5YACEsmmrWRnTonQW42vWhHJzdstxhp8zeZKcBcnY8y5ppRmasKJKmNY3Xm3bXN3oAw5yCuNU4EcFBNuFNQyfS8n",
  "key20": "548GqY12Dk4JW6BJJFQQmPx2jVX4eH7awVbmPpbSFeRcKvN6MLSo4TJTrME1bVvfnRmsmRzpwzFueoSPzFsZFswe",
  "key21": "2fPSMpUwL59NNRhG4sEz6YEn31CeZUS71Vri6G1UCR2cJgsumzDFMDYWDZiNmSbpsx5oNgt1kmbPYYMbhHJztqhp",
  "key22": "3cjeqr4mPVvcxfVBnH7WS4Dhm2PELbrhQTxQoqSiTDjoA8GvbZowctvbE2WnSqzYFP338rgC932auBgh7qHQTPQ9",
  "key23": "46XFJAHE7ohEcxyhfYFj4Rh6pSaKVd3AEMisp9XdSC6fH8Ck82jBn3oGy5cVqniPPoY4qxR1MPsrMNKWMAP1KeQk",
  "key24": "5bTqBwLrMFCo7vEVTXF5b3RgBDonVatsVBotUeiX8uMJwkJZsMmqdNYgfwhLaycDL1RBK5AgB4edz9HXf7Wa7QRm",
  "key25": "4dNncAYk7gU3uSXVQdTL4qx5pq4T1Abzs1xHxG6nSU9WQf87bmMNMMJQNK8fTG17mi9j1jM8eFhUxdF1HM93Q5Ls",
  "key26": "3HBXxZs6KKcSY2VoTeNVMJ8vay68QKqvhoSKYjBiEkFyLjjfvmmkYu6hhMhCiJxF6HZbek4Rv8ZqRb5yQ6hwYAuL",
  "key27": "3vk6sBSfmKouvpgoGUVU2e5NRqPDouYzj7H1iPktEEqzrn7L9Upt6oCq6BRgLTFczmCtsYjmaAxB42MvsKqpdDMS",
  "key28": "5u7zfAN6kHTNy1FNkeuftTcE2pG745MbhMW9HyVEGhiuq2JoAGCqyiocWexPSaCECdwg8WHtzaThfN5MGgnHrmUo",
  "key29": "2rtSbLpVbEGb4GvL8m1BuZTQdxu29vFTwHuRh9d7vu3eEg998sL4i8bfdLpiP8yTSqwcmJaqcTgYTGeSBGjj1Sjk",
  "key30": "4Xyawqg3o8EAqj2C8gp4Upg6GtGzaiWoYnKBtoTU5tVSNDdTvvRUkXcAb3xT513tpJWFSjycHnkMkhAgcxa9aR8v",
  "key31": "524spVACPwUrHVqrY95nEf6XYTwetcVCU8y9wASwT1MgJbpHv5dwoBkf7SGQcTfxWRoTHb3bDSwehwNzAxLWc3JM"
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
