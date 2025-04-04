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
    "5kwHSehrdEFWCGThoyS9BC89xSUTu46PdFsWJA8tcsNHSEqE2ZWiJH2E1pex9TDJGP97NkdbCP8Cr9D2YLRRBui5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z1pyDtoQ3EYAjLANMkY9omToeWg2ja98AEGwhbvSVFhC9JQXBHfPFCyJv6R7XSGVDyLbtqWrxYY5tvKgy2wKuKy",
  "key1": "5fXr6V8k2B7Qq8gdcWhkYxovnbdZxHEQ86bcf34cVCrSQaiWzuLsnGLBSD4Zp41jWUVLFWZwPjHv4iP3p4s4dk49",
  "key2": "5t47yerD2wWuvuLdbULXS53bVy1K9ZM1YgmsY7pXNz1qSMGoZFesBXoUzH3fFqSwssef7RdYqniQGDG263yirEi2",
  "key3": "3W2k8usFZkbYtveCimoyDfCbpAj8Y4hVFspMDAWCMQtnNsbP7JA6sAPkjgf3cDA8x9z1U7P6xgvR5UrCWFW2skvb",
  "key4": "6WcPp94XuJp1hfPyWA1hVxHn5aVURVAE5Pb7foUXFFYTvkhVkUrPAPh7nYyU2vd4fjZo8JQx7okmgU18CcQMZ5e",
  "key5": "yg9aKD9xCJSAnt6AiGp8S6xQvdRTc9PkNqRyaRFQmRMwAfw92bJQ6h2Bpiv7t17DggboNVNBFdr1wfVJY5tA1aS",
  "key6": "jBTvtnajuEK4QvXYPBQbXmjvyLhdkVzoVgVHDq13FNY3Y9fghn9qHt1u3aPdAtiNjvoKWdetPgMEanGrPY3gy58",
  "key7": "62DXbCZBLMAt5PvfKpaRshw5m5merUsqDG2ec1cje6oP983n45N3Wk7zwwnQYDz1kvnPa5g3vTtsFBKjbdAnHrxq",
  "key8": "2b22CrL4S25oDkHF1Bk6y41B2ZEdeRajySAYPBYQbMFWK28CjgCTF743XfgM4q7p4chGQiBaVjNcrNdKgF34wUGK",
  "key9": "54oT5snP5tZdKiXGmZMhEcYTWnEVTi7gvVbRaEcuGJ7jRsNQA2r5bzWJYwWfNxDNaMgLAQNoE9FUEiNdqAW1anU2",
  "key10": "2R4FPJdX2RDyzPkZZ2UAKUGiaFydFUMwGhCHZooAAmZjGKugLRgugEj9EsAQTWL1aWFGBYVuqXUNdZEREaUXQpvD",
  "key11": "3P2noQWj6h2T68avnDaphqfznm4ycmhWGwvtALqHPUAys8S426ywZQPZVeypZVptA7UUSHwqvGYHF3x9yXepCM5C",
  "key12": "5vjNyTFyHFFELFWqxSwaFsU77aanjVyTQrgtUkB7qEL1kUuoj6wm2r8AEBws9zjvZq6BM5mAYpGgc9MgKjZEKySE",
  "key13": "5bNPkJmgFLvcGjDyJJUS6EvDHBdvrXkeLhtMER4DWd9drPVktmNnEfjDW2e73zZdckkU3mujUHTUTV5tRGsMjYBj",
  "key14": "324xt3YbFZZYDm8YN9zkWVTBsTnZw12S1EymAbzGLumfPhQeusMCwRy3cAea1CFLZQ9dwbeCNTtiuNk1WBmRAqxU",
  "key15": "3gXjkK7mpdNF649uAXe5rGYcHr5NLT2fAqVtxA7mBL6ot8RKzL4tEHy6EAeHxpPT5zMUMWE4nmipKM6EdcpAvj4j",
  "key16": "zZvUn9rbTZ2X6DNPnE7mQWAmhSCrDYM4XiKZ21nFpwMDsHoN6s6fw6iZkiq6MWybZ7BHmsBJFsEebFzYdZhHRPk",
  "key17": "2xFwCaGqNF4KtdqAXGzHJf1nxjAp2eh7b5unQHnVebDf4kRzCcsJn7Gae7a1d7ZPUXYkrMqWHkZjXKkWriPssruL",
  "key18": "3vNxWVb2XCPcVJW9sfXUfQpGAw39JAohKKzKjPAczmm1GGfA2f21x6qH5afy7rSchxdzJ5RN5jFCRhoRuDwmWypy",
  "key19": "39LuWaEFb5TDHj1pN6dgoET9prAJq97ZqfYV2PdiRWCT5i5AbbrupyRKWnX1LsPjLmHjmhTz6F4uLT2VFSPftbGf",
  "key20": "4WeqyYrgZNMnqpgsBFot2dhdgwdvgVXrjcLrtvm3Tvcjaw9WEzfRckQgKBBeq1qw5mc9bCfNVgaxqFfeHYH3ckCi",
  "key21": "4sTiGSM6YkFqZBg4oEuPLspcB8X65CUe4V77X3Pg5N7E28BkyME3B8BoG21isX74NRMViCKB3tZy8LbsmfCtdUzy",
  "key22": "5Lhy93ykqEQBN1yGdooNytfgEZefEd13SCz3RFx9fwcFFgbLxYZEh4LzSMV24jXSjzdS1gRpff2Dccmhow3xmrWA",
  "key23": "3gnBfg5Zo3atinnav9Rn24k8QTFo47xb7GzrMwqYayvXJhZb8UjMmX9nuQwqiyJcJ9ugV2WEW9dSQ2GCeiwmQcqf",
  "key24": "4QBSbGcCoXv8mTqM9xBv8e6zvareAtjuvA2n2f9zpMmCuEUgJHoeS6M6Paoo69PQeYN27opyDjmh8rnGkhwYdDw6",
  "key25": "4p2255HEPD2Tc2o4sLkj5zSo41EeQm3h7yJ2vX81UkTa4ZJmxVUjdZHK3mX5zo982mWgRv6dDoeoF2uccyDjwRvq",
  "key26": "36yBAweK5ZWtBwyxbb13NeMmJoXJrW5mpiUJSvqSTkoF1wsgcZCzrMHwG63mW4Jpyi9LaDkGCg8qsxHDMBCtTx3W",
  "key27": "2bwA9iuZn5yqWGbtwk54BSkixSB3X5ZjYUv7wr1vYjpa7drkAkstG6jkrWWFXxY4ByQEzLXWLX1ejydPKH1xTkHB"
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
