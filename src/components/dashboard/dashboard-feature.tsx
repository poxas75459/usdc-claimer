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
    "8EGHWGGeh75QykADKGiHSeTsjAR49VGsL1PkEQhSQPNM7GZgvov8zVAuCZVuA85Skv5pz8VRka1m4P9qoBievUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g9qEpfjDpMJqSVzkqLrFocTHvnQVKvPTCwvHJnR1FoMYr4FE4fzo5Mm1Vj6dmTfyjduaxePhsWEerX5AcWYMwjE",
  "key1": "13hDsPcLtM8NBFQb8bYqy9q1MzyhXPUcc8HNjagPguaM3knk3wNvwehZjjXno5tfHmVXDBkk45CbppMiFW3UxWq",
  "key2": "4QHG3Z2QA4hs835xapkZSFGjAxdqX1UbcSk3Pc4ozHQdLNsm3QEGdBpN3UH7tMwyFLVAcqoqbFjNHhjmvEYRzAiJ",
  "key3": "4NrPCUmEBHQZVViMhakku6Dv2V6zFBozdgjor4qiAJ5DyZfzXbijEhQkJrRYUvwfmjk2tMrBZJRWGdX2osGVs8NF",
  "key4": "9shggTj5SVSs3buY1et5A2Aq3WsAJKoyocCUrtkiHJLWnnfLfx9oDEqyGvAQ5ddWc1f8bXHuUuKEG2dQQVN9xoW",
  "key5": "54exFtmNi8KPkaP346CE1AgnH5Q4mX2zVzwk1JkdHfQwfcS7awa4be59ctrAzP2keje5SEV9maDAReAxH6LyAcaD",
  "key6": "2NNsqhkn6kixxDfzkTRGs6FThXGoLZwhnZocbBTFmZFeG4DvMEW3pevG6ZXyrbJrdphLGZJq9q6RqQg9SdKzxp97",
  "key7": "48EBKxy78tL5U4KrFJz9iGh3VocBPsgpwEqiz6YFA5oqWFRLEKfTJV8Jz8WQwdzu5xBDoe1njC36TNSbYvCHRwTA",
  "key8": "3qfnJv4Y3VfVdcgG7paeua9bszXpswSVndAe1jwvjr98H5mVzoXz3Z2ASVdVgQeJ35Znhch4xnoR1MC9Yhg3RFXS",
  "key9": "3haS78LynyEbimeGZxYXAVFCsN7QdsuTFJGZbGxjXNZSsa5ySjkTFMGAUwJsSsw7yqJCuAseYJndgxMdaxtDnKaA",
  "key10": "3H1Zsy9jQDNbUG3qJN51xJfqBBywJxQDpkVdgAopDpb4CefTrk7wfWqonUpRSN38byGS7SkJbgLJvVcEgs6XqTgT",
  "key11": "4VXHCfNLvFVRdZzcDL31Gawz29TxtWD9juKHMJx7dtJ6pxQ2SzyRQCfdfJ4t7fq6w8ys9FexU3jbNcVHXDm7NMiM",
  "key12": "2wGBWVHn6Hikn6eHXpK69hiJyxJ5b7RJ26jBL27QddepLxeuGemVvfK8bzNeEbTr1uJkP7vqCG9KPZDTqLWHJ3pb",
  "key13": "3szmoiRNVG3eV49ZUvigtZ4f4MufvLUG7R8kjxoGtzAV8ZHBuVUNedGM9vpS8b1RJCyV2cBhu9MbDwy2RUKUNBGF",
  "key14": "JNoguEhbkNV8PGycs9Mv8J6Kh9xh3yHTE3VWrJ1NoKYxVH4K7WebHS563PDLUEkZzvUjj7pRSEq1xLTj2uGet2n",
  "key15": "3GVrTj96esbVfg4FfSQUZKdNCkvocRf3P9qV1T2JiHGqV6ZFmQDVKzfV1o1X9S3bgeib9PZMTEnixyJ6gsE4kBJw",
  "key16": "3kYnGSTQHwr6gHRZSdDLKU262mhwfbN5JeuzNAPidcNoacgVxHdMRuWLsALADWEcspVM7W9kCWaVJMGX3kfj7gTX",
  "key17": "2jkXJzmeokbAda7ka2mjhBuseMNspnvuRoYsUeGkqXmmk2a6T25LYqoRMNqzpWnSY6TZLBCRGcR8EYtNRt8uyeeb",
  "key18": "4hxgCDq7bU7TYtKUGrQH14QRe2aKphu3B4CYc8GXdcZQf5ButPDumhyrb3Eu141yJR89nbhLwg2VXB9pdZ8eZGgF",
  "key19": "3PGGixTsd3cUcH1jSHhmJe5Jubo46JHTVghpCzD1rGUXddyGitKJarxZZak9e7pWBNjL5C2HHCsEvHdVww4hndyL",
  "key20": "3aeHys9YKEqkdfdr5U9QG3ASsDkyg8pVUoBrDQf4bykPbFoSrcmY78cFht3VU3jWeBTKtkbYKqVvjgX7kjy16g5P",
  "key21": "2vtMrk7euTX17rhWNJyJWdjrrxwgt23rbTuzJM6uptpxP1rgz7mciJfWH4g7xWMoFAMs8T5HiSKfXfH3Q2ohFLn3",
  "key22": "513jgMFVA8JuQedJSMfxZVjaixzhts8sdutABshqVfEssXJt9aZmLhCzq2VS83LH75xdvJsSG4xQx3DYv4v6Vivd",
  "key23": "4CdMYUurQaasQKfnL5qx7Y4LzsLHHsUESfFsbtJCsYdR5jcaX1w96xFLGEkSJuHmPG1CZUBGwrnvRCNNNogMXe1E",
  "key24": "2LCdfRWmLiRfdgntVAS3bAUuTgBtyHge7LNS9iQAUDH44VDdUFY28d1VPgRY9WaXe8p5GxnVzvYVLWmD6zWW5Sjp"
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
