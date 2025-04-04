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
    "5M4auVXxjFAfhawJZv8U4w5irzoM7Ko5GDs9P9uL3FrzgNX3cZaUiQsN4cSkFkqQKxfSZSF7uxkpRkYYkFH8m1fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wr4h12nrfTPGdkHvz5Q1aTzBHMcQYbskE1EbeYQCJjK4ftTL6hqZj1UUHcfmsd8tPHpDXGmFbAwrzWjeNRmZRoG",
  "key1": "4idG3FpnPyihSmkrUEooJkBftpJtFFMbyycnvJCsnNBc1mPELoDUz57R4gxwNwQEmZpEpPpZvfiEpLnCejdt8Kcz",
  "key2": "5yZozRVQTfm1uf8imTBDmpimkY3ZLnMwXkFo8UqS8JbGgMfoSFGSVc3uxg1ZZg5K7n1ryAryfTpYfwsxXm4Gf93m",
  "key3": "21mvgFc1FxEYpLNGKJFg453n9EHxrznhgxgD7oVTRhbTXWdfCeDUfc5emMHbxRaRte1twa8fEGubZJ2e6RLqwVm7",
  "key4": "Kypa3RRJC1eQyetm7VgbQcR3422E2iiDjT2X6twiy4FeXsRX2wu4N6dopiYkKU5uKb65yA2GzBexi7qWW9omGcr",
  "key5": "qRZhHVv3PGi1cta5171yRrRaUQq9x4Jde6tHYq8AatBd3XGtAyfQuX3hTSPk6A2nQehC6EXT9WUZrB81thUiYY7",
  "key6": "4Za7BWNwg55MoY6Kz7sqA6tUt7emuBYNMGjwMDTtQGuF5b1ZCw5We36156umroDafkyMQWRxie4CQbbwePEurY2o",
  "key7": "32EdtDgJt2NAAYznErTwbvjzRWJg32baxFeRPLtA5w5VHTwx72vFFpJ3Lz8QU74bgFttpRNva1SobPev5sQ5KSxc",
  "key8": "57aFSkwiiZYeFi473y7e4VtRh76TQ2JR85TFAmy4rapLbpopDXz3oLu1wr8hpzyeJ9kpX18RAGNfmizhdNg8w8uZ",
  "key9": "2DtL5p6eEUzr66JZfEY84JkUQUX6qsBsGg3KCd9Zgnb36aj5UiCeL2MLUoqsJauhdsmBGnmJexUHHGxsuD6EWtYi",
  "key10": "3vyyFyrAEXRBR4mQLEcQDt5wd4EsHbpbmFDaWaXgBs75tpb4JKXECT8pV1sqC4BtV34NoCUt7jPycy8qkCGMs7EL",
  "key11": "3KkvjCmXRZTQ5FHKtLiGVLzvRLmQkywJufLZquAiY6HixaCUEG4Dyk36JznFfwy19RetByQeKqarcFywa24Mx7SU",
  "key12": "4ZRhXksDGwFEyWs6vEKbefkP2wm8Waw2quzzK7GtFxBCppC1aPKVtKT7wx7GRU5KpZCybtmLfeXaKX4YtrxJiUjH",
  "key13": "2MCQ659tqLee3eXKw6vyJfbaGh2jgL8V9QMccHALGm8jmSRZtA9KtXez1aZEhPkvaZjFBWngKtjHEgWFP3oYJVKp",
  "key14": "35gFyGjUd3qwoVaRUsgNNgPAuaAxusZ73QiZxthqXEGFYcJAcHwrU31KRwsUFyS3BzCJdrZV227Wf9SnMrAqSRGt",
  "key15": "3t9jr31Zq8ef5b4eqHjXKbYN8m4rN2KnfQ2UQAU4oUMo4A1NwzJd85neZLjQpUcTX752oPnqKXn5WVNXzGgRK18S",
  "key16": "4eSsQeCZW77KDT7obsPtLfbBTcrN5LxdsL8dfKX9Lkx4DmKMhtqSLCJcPdEPamySAreNYDGdCwAM8MYbf2krUzoH",
  "key17": "3AWrxPJrT42dXN6ic4giCH46gWUuC3Y6euwta1dtEfM1HtTSUtBDUkZrRkBTgTepGQMK4zzkiBD8KtdFqWSw6nyc",
  "key18": "5oiE667FBvgEjMaQgPio8wYjS7dz3DTBM7Eg5X9CGTVXNxP1fcghHaKJ2bhFES1QDWHugr9j6FFQkJ4NGVKKKexW",
  "key19": "ePFQc6KqJyYJV5TsFxrfa6vCNNncWFUtTYKRnqkYyWmZNQCQLqn6PpMNQEhgWVzRHFfSXeuYZh3MzXXNzJ3Xeo3",
  "key20": "qip2yfDARvJt99bLk7jqxknDw9vT8tW6ByGPKgLKAEDQSTrVTK1u13wBbdCNPK7nTmvxFp8Hetw58zSeQRZvUXV",
  "key21": "5HX3qTgEER5BpHwXxR1ZurTJzd7XageWcqZ8JnaDehMu24qPhukbVxKqQyLnRhjYgFa4AivF9FjtnFdqG6JX53za",
  "key22": "2AZbAfeUEZpvUSCdcGNvHPhWuE2bje3YuPybicoYTHiyDayWCpAtaiVZpVPXY1CQRaGgBRWE2nEjU558iNbB82an",
  "key23": "3HLCuGQTYMkdfAHHpjgMzqVF2GecGdgABNz4kgkPi5Gv8AoXRj1ug1C5Vp9YdX3ZvmugyQsaTcauMwKbZ3sZMuyv",
  "key24": "5eYxEMFsKDeJTtvDAP6hzhUDy2YqUFq8BYov2iLqKjdwQBvGhuEDgNTCqazt1K7yoMQzGGjCTEXzW84wpumggj2S"
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
