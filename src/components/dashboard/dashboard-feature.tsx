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
    "5RcHvsXP7BiYAZ5eZh32J49U5ymZvofUFC1We2ppr38Nn5rYdC3QEA8k9GyiazuNahH2wodQt8P7hi3AJCrS6A69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iZVJXkzWwirDqmEv3TqXvVK6kFAwkZZHWegSCgQRhzBPUf8dS9LS7h6Grv45vUQxzg5nYF8M5JrJphT8t8xSkon",
  "key1": "3EcnzVocwiRfTpt6WSEmTGw8995pvp6AtpU2BSMQUVkeRGUjYkhVhpkP7d1s9jSP6zLvYz1LjXX3hUzfrAhLhUXz",
  "key2": "5GG79KjTzcQTsKGdoNR1spkEqsyuXJ2mwSMXnMemNT6a3aJKQkyX9UGFvJ94y35GJVjrVYo816dF8r9C59K3mXb1",
  "key3": "d96tPCEJ7wJVqZq686rJQNDHN2bsTm4seVvjzk9rjR8RNxw6fCQ7jTPB3cZbCCJStTUnxuF838cd4vY2q7FZ6x7",
  "key4": "3Cpc6FN2r7odBKrt9cZA6EhEJbUwHK4vgcmvLQcAe3Uqrri4RwV3mQNgeCmVxks7EZmPoU8HSjMP1tNxWUPES75h",
  "key5": "4d4UHmc91iR37MHdz1GnZgwNo5mUBkvHbAWJd3CfUA2JJBdTbXFvtFFbRYJv1jMUqnEzRugre5MsGUqV9GZsBhGK",
  "key6": "4yRYxZUSaoRwe2N8V66SnQWfpqYbPySeswonXib7drV1cdKgBrQzvHMZFgXjXfvb4ZEnpC71UeR36wCQCbEvm84j",
  "key7": "5UyvYW2v3WfK4qnRrfy2eUgSW2Bk1W2iPEqGFdphWJH83u5UAj1ZWnf2rQW5ZB977PEW1s6ipHdo71oes7aEA7XV",
  "key8": "3wiJCRmZRpmGXHrFvQCNNRf2KvceCB1KAyjD4hwMRgQyeAcAg4wddtga3ArMrmSMm1mepAXqBWXUDc1vHcAhMTqF",
  "key9": "rAxRbiifVGLwDLvXRBFertWeqmeXSzhpmzcZFZAPBFzBSmQfCqkcbXabL5Sj2Zd6n6UognTNXAHCentFnyeUQVf",
  "key10": "PDXuKNi3DstdM9JnnbfhTDwW9em2DXfWxmYkaSq6r7SLkJF3FVTvFne5bX9M1C1X2MZhrBZpdx51Nx1g9dnKTux",
  "key11": "3N579fyRyhUeJqRNP4NieWTwgxhu7ww3dxr1HpJ6UZ1pn8mquBYFCprGZbZB9N7eCmDXX1su7bEHEk2Uwznh8pmk",
  "key12": "2kpFDAExYzWMJPj4SvWjsHPHz341Wm9ULjN5GzLNZwWSj54PWgDRGVYgeqCXZqm6pYNZhdNDq6tJsmesJ1xUjB9o",
  "key13": "5hKbFGFyzd5bvxXFytA7T4GacbQUY9Qeed1v1BWfstRajV2PdUrCQgjm4MQcMXCBfAoLb92tLuAErXRYngVXgqQt",
  "key14": "2uvFca6cDY8tJ2XYPxHSwFSVUZwmcxuxewVoyRAKdpnGfzq9f8R6JAJyRzoxmaewBe2mn6U9NwtmWNoiAkKNVaNo",
  "key15": "3SyxVPUBCcrLYjgx2z5ZJMSEpg6ALekC79z3F8QGH5tgcNYnbJMzWUa8knBz9BjG24UJvLRLAyaCu74iMfUj97dh",
  "key16": "5vzJvmCxbcS7mRfziVieWm7qQu5xkMKaALPFR7jdMXaeatnaXaHUbHRHqbWAEdwgLxvd2soGBHwy3Ss4bqj5sUVb",
  "key17": "7XCpXEgwqSa6mzasx99xWyH9bDsRGTGpnPxUBx4DpRKJszuHZLy1Ufoa6HQyAhdfY7eWzcWfRhjqDoNQFg65g3K",
  "key18": "3yQv76fqEtWHbkzKV4Qmh8xKfpFaLsqFsznszyyhTdpVrazdNAzagTpCrojysa2gYWfCBEAAiGicGFkqmojG6rzD",
  "key19": "pbksUBUwx8vwgLy53in44pFXyTW5mB4vo9rpyMrt9BKJ1igb9kq6bek1JrqRwWL9t4tGUXqdNrkqeEiH3FVTFHb",
  "key20": "5GUmH6kbfgkwSy425FkhEeFQc2yCg965vdB62FfyM89iVB9F3EMTHLnH5M9cjhY1DEKvp17NUnfgukj9RtTawYe2",
  "key21": "3grwm1jr1yS9GMJHupdNi8uFV4XCMjRiiY4iNhayC7MVKjqLj9CEwRkWestmCeyKpPfmqXdJ6xehWmUoJsgYDP5T",
  "key22": "2isBTMZ6atDPyQxFHSDMdhHyzfgDSsL8uH3yHFk4R544LNUJPAcaQSqdLz5LePw4yuKELj3zwWXKfbwbBMgzX27P",
  "key23": "2DrHThCXPnKA1JZVuecSwsVGGQzGsj81wNoTwVPTDGZkSXcFRXm5KWGQNae5xPhH1v5hKh4SWDLNv358RBQdWs5G",
  "key24": "48WrK48Tzyekmr8ejhAD2xuK9PGn1tTxdaAUXoY1EthwAStCrP6gSBA4ZCToBoFT8dYs3y9yNU7vHpcratf7eJtS",
  "key25": "64D6wbZtfJxCAkUTKT5hccqjEGik7ewR6TnFEQE46JEWcq7BLQNmjmfDkPuuFNdjukBEkYgN7gUi8vRBfKgoTAgJ",
  "key26": "2JWSm5CGQKjd5FowA2FphKTFxjUMVReSCu22iTX5MJqjqCDUY9GgcCLL8YJffGaGPvQKw3ddaFpKL6rHdpQ43QPy"
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
