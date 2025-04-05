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
    "3XGFbJdLeNPf7aMiuUYDXFYEecv1FK3SNspULatS8L4xQkvJKA5xCPhyYoh6h9jcVYcEMcVxVba7eL6ahLhMF1n5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67EPJQDzYV9NVbsVUw32Jh6CHCSCr1FisoCWAdzvMF8KJNhCYw3fYzx8D1bNCsZ9NLECUvgyAwVqRG8pvRUVoW1b",
  "key1": "2Phx7ofhXXKmP9PQP87QMuMiPZ2Sx3vQL7ee8qvxMhYj8SXtYhRzijSPaVGxUFKckPHvQb7mrcUCwb4eVnWdNKp3",
  "key2": "4Q3riXdKsfvu1Uf32ye6u1CAWM1XK4mK3yMebD78dnqh7i7WeQeUpNUm5SUxxQc7tDuCxMjm35u8GwSX4SjTCLpk",
  "key3": "61ZU6MS6gkTVQZWYiJ3ytTDxScZar7t4GsbHmgz13vzV8boSUVRmdS9f7idMUi7hMrMUawV6zUSTPMFeE9G3GhH7",
  "key4": "hs3xpKT8rXEoFmKye3eDVTfaWS9xrw5yUqiHgUegucK5tEiVXgLEkU61eMyyXWFx6iXBxKuktNkmjdYSCetT3nk",
  "key5": "5NrHWkAxrbsg1ZH3XZpHxycr2xM5n5V5m154EU4Gyiva9k1r1ZEay8q7b77YTE7tY8chR12vdebCEJVXZtagBcTK",
  "key6": "23GSpyHywBGVimFnM6ZSA2JpfU5cTdTdWq3Xri47Zzyon8DszPgkGijGpY4c6ovXRTLHxJLDbZMXgQPwC8uWqFWY",
  "key7": "2a1pqGfL82u6tQ9Rrz6LEqyqyTM2y3tq83bYnEzm1dspk24ceAiB5YwPpPCsydYBDVk4Cwv4mdJU9yjdDnyS8Euo",
  "key8": "2E23fT6VViz8xTy3RheiQfK36u6NHgct69aus9jpRDHvE8LKGUn8BMZGqZkVsUw3RUAzFpdNWy7RP84ibfBiFLFX",
  "key9": "3YkZFQnWHhKD7nr89gGuzaPfmbKmxUrLm46C7nbtZtrqhig1BQyLrAB3hJHCh6YUn1afrHwSM9MugbSE7Hd4WZVC",
  "key10": "nPkk5rKGbefemDjNWsfEM5F4eivEbJbD6fr4rEMjWerq7yHCLgCaQ6z9jBZSQAecqR72PNz4PKmUVjnV4Xqn8nX",
  "key11": "Fs8Rvyz8g1gCJhteFJomVqXXwG4n333GXMTb473Wj67dwRLUccrtDeCiUvq31JD1S5ftUAb6X2nyWb6t3Rzh3bM",
  "key12": "3bUNJhALeXGF1KwyUAf3gZveBazYhp5zXYz6yZx4FkTuYoZQFLnCz1ESikbGnLDZrLDbBogDnHP8LFDhN89ecN8M",
  "key13": "4mx8Xnv3S7PnJu3pSB8C19uMXQPgWSJFUY3as6TUyz1oi7kxr8FTskfVDm6gDfEMrXCFxTrYkkfgAVWhnYHMKx3P",
  "key14": "3ZKDukESzSdhHLgp8WFz4stfe17TuPwTk4S7Mq8J8nEmrM26gXR2T7oxidyfKfeGCwr9rsnJgMN5QppwLhVGdAZT",
  "key15": "5exDEeDecnHf7PYhJXBaCuKnkLdiBBYV7g5sD5BPyvYX2fjFRgJioBPfFpNqaufvTub8zZzydzJakPoAGHZKXMiY",
  "key16": "3ZdYD4NbfdhS75RefE7hRherFsndLwoXoQCMQ71eQ9waqXiCDnyarRGCYf6JtQgJ1CwqYRFELc9avXZHgHHXm15f",
  "key17": "4X3ruJEsqm6vb2aBjrHpvbsFFXFpSh6xY1rDwedRDUgWShtpBnJrQf4FYQ6Cv49Drjg1NRsH5ZCQFMq7avdrzSMD",
  "key18": "9PaeARRH48REwJULzSJk6C9YD6sfnYDXZxnE9oFZVBoWsRntUGYgTbaUgZs12kGF5p2iqrwC7jPZqkERQHqYkdb",
  "key19": "244UV1LQVPv2qJDMPRhbdkEZHUS87Bf1CgwDprRUpUEYJj7w1Wbs1RGQPwBnZLDuN1xamKvz161c8wnBAfN4PbXh",
  "key20": "dR5AGi9vZAa6hWtKQchxcVELHpiRRZ6BbPenN6UYtULCtd561MxrR6gVE3SYZw4BykApeGubMCfNQibosrXEtNz",
  "key21": "YygzDrdNDC7RuFc2hqMiQmoGP7dmGk8WpckFzy8Wb1W91tuUwpwNNu5Bp8FjpxX8zyzcmRoEeihXE8P6d1rZQWF",
  "key22": "3BN5nLqpJXqYQRgSSxiZxKYUGsMvdCHrbsZcuge1JFAakmMdvv6KM8ixqQdyP8mrpVh6YYywaTLkrqkYdR8Kno8W",
  "key23": "4VzXpF2mmwSzfEeSbRCqAnW97PgMg4Yu2X51YSGgRMKEgYP3ZmjP2YYUubLirCoWp6dg5fr5xxkV3Q2MQQdD88LH",
  "key24": "56RdRZvEcuLhmuUQDutDC1dUCmvtqizR8t7sqKjQMmxcrx9qzs1XHEWDRE7nGg4a8YjEaaWq5n69eq2wGi6vhd2B"
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
