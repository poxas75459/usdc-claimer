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
    "tk4g81V6aWysJZPDTizPGuPpQK9YA4ZMSJjLHE2gZWJFnSBufAVgzJJg2ouvsDSmepTnGndvguamYHjPt7fc1gQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pQLMo5cF3Fksoq2MNKaUT26R9CnsKTrxQDUkcCfojkj5sdcc3cRkXNaGG8cnNbvBJGMqFqsmKsGqNQxszRCMHQR",
  "key1": "5orkTdTaV8cA6f8cMF4yKACWn1aYqXxrNXpziAAm7QPyZs7De8is2id1yKmavefN1chBCLHBRgjSgewuLJPpNETK",
  "key2": "2LswSUh76UChExaWn2fjmTvtdnigS5bhVXTsoZnG7UJ7feVgWTkBr7fVWPnQyFixgBJMZamRyPApEzsGeyBUxKY2",
  "key3": "63SEUfTbjzvpKA14v3LYPrBJhv59cruGg4XCv6jJs7EwAntiujeLoWTowd1XsUx5u74GwRneb8d2trjXz2AQjZt2",
  "key4": "QtNHiLbJFUfnMAJ2RhSNmEG15XGWgg2jraPFgjDuk9jqfYdpM5yePYtpp6sKWBSVbFpL9pwb3D3Je1Tw6cN6hGs",
  "key5": "4uMRf51GjEy6CSKBfaMaGk3Mi6qyRqBq6HE3sLw5b7sJCrYxNs4ZurrRRpbBJvzQv3mT1MVA4b8CrRhDBJiU2f7E",
  "key6": "3yrwNcazLybA9XwdoLnV4gmnkM8vVKcGGH7sGvT3XGHpPXKrtSfogJbuynxjWGnfGBrbBjmiby8D5KKF7fU6tVLd",
  "key7": "5aDHqECJda4QxXT3crUC4SQJpbQ3u4jVTTGVyNNoACQTNuv3qg2TMJjasJV36TDe153wY189vVFoMG5pwkpJfF7r",
  "key8": "3Ho2CmXUBkqZT2WwpTWHrMirYoPxzaML1Vcxsrfb9gHApWbBTCY1P61AgfnPnJfc5Vrcj9JzqRgBjGQuxTTt84q8",
  "key9": "7CFi7NMWvGPgc4ReZtqxpNtcm1v77ukXDPGYVrAJhBoMunGDmtatw4e3ZwWqWhHfifrj5gJUgqEiNL2cH7aQWUr",
  "key10": "jimvgjvJB5Tfv9FoEfJAYP8piiEp5LTji3XWPQ6uCC8vMcV2umukFuNt7rG2gsRvf8Zo1BB2GHqRFQrPpcwStVi",
  "key11": "3JDWHu6hcccCTGEcJomKSyX7bhTzbmGZ8sSdrpWDW9Wqv1qznFePTsB2aNvTFnHCEDGs5FzKiwxbLZqfKYciwxAM",
  "key12": "7nrfgGUPAXgd4axh8vYeuTD1eTq8S5ZKS3e2rmo5QYeEDMWs87rnK78ffkDsWZpCipA2SYkDUkQFigEfL21Nta1",
  "key13": "5gj4sLisFKqbSZrJ9Ucxp5Scg7c3ArAFKAZ1WQqNhvTxQEmT4NqYJwcAaRHDZ3uBDx32RTEGLPhasi5ohpqNH77u",
  "key14": "2149zNyqx4SHerygorhZ6pubCP7qyEoWT2CYetKT1vksm72XehPhptMqfd4VQ4DpAijqTbP7Zfug6vQVkVdu7b9v",
  "key15": "2jZRcncwZZZrtBFzZX2iRzJXJV5SnTSBw9g9d7N59qQqFsdYTRZgJ5bhsQXboAcVbwmbCkZLBwXm9ZN7T7gaBnF1",
  "key16": "5BrwimvS5Wo2YdLQAjT8vRYua6SyrqVjhHm7g6MGMWH2NFoDsshmiTYuVkDrofT1dy4FahAtqF1QhCeuKRXiCcGt",
  "key17": "2NxySN4goht3ZHB9jL2U6m3Vm7LLo7e9vqNCFgzSchqQzaWAXM4sFto1DeSsMdEqr7vaUssgZFAF9WNxTayBaGB2",
  "key18": "34wpptQYv8nXDV3ugYrGPzaLYnZKbT2y78z6nYLgHRd8UpoeQKYNWNmMVM4bggS9xHoZ4ExcuPmEWntCBwJ2mzmh",
  "key19": "5HTnn4SGnKhQTZ5rtPtVx9jvMJZ6tsAhKw7xk6NvvdZmhbcvnGJ1zAaoHhWVV1xNNxxj8UYqY7Pb9AHh5D5MnPSo",
  "key20": "24dVebZyZk1kwxDxjkHdo7yseCkHG8v5wftkxy5n5jDkU4sVYL3rMLP1iS6g24K3xaMtWyFPZdrxs5RE9srW5svr",
  "key21": "hhWBTc7oTdLtrJqDJfu7wUPdvgmPp1fPW6uHmkVjKSXCz4sMMqrcnid5ZfqTqVahX2yHnSTUVQT11bDc3c7z8Vx",
  "key22": "42hYiK2UWJNjsnMmKXytJ7uqcgxKjikWDQYQXUkyUHu4eD8U5NN44uQ38ra1gVXCNC7TeeSVBkZZzm2afwrxh2km",
  "key23": "3UJuYj8em2d835rMis5asEhwBRVLbQKrzuFJEjTqi69BPvt2KnmKDwbak92UVi7mrDqvezySPBQi5pRSRbYbpvU8",
  "key24": "y1QyayiQwdnJCMqaLCVZDkx1gJGVpnHpCjwqwDEdWKEo16euYMjSx598aPjWa5JxndME4BUCdquv5JY4qgLSAhE",
  "key25": "4b31ZFWQKZDRuvCGwGNfCtQgVm7beV5PhT6afWkJh3JGBWp3yzpeEod7MBeuRuq7af3EkhWpbgg5CkgBNnzHtr3e"
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
