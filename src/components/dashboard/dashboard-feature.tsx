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
    "5obNwfhHTkyYHgupYoi7f8KNdjsxGEyg4pwWoc1SrTcQakpLS1TFcsfkeUsMj1FUQtiyFSMmFqyYLjbZdUR3juP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C7ZnrZ9spxm1eQpbV4HTJ9e6uGiGmc8ZFjjE7nzGSLAU2DVRJoE9wUeMcbgzcyw5qw7SEJdgfFspMfQGnuAwNZJ",
  "key1": "3Pz1kD4hDypEu9DEgARJaVmMEonyHgF2a1jNegcdZM7h12wf5q5H3hxvzzpdBYbXdL69g6b6EPWpmfencLh7yDPs",
  "key2": "HGjiJW9JHne4Vik1KrrDcMfQMwdeoukNxwT3KPC2MpgQUA1L4QeABDwUE32uXtKciPJrD5u7Hsct4VCR2tJ9vmv",
  "key3": "5GmYrTGKmJtpyHgmBaKQWGFnd46jgYj2gXwzZYtaKssYzdKUtDC2Tn6ukoMPK9t7w8SnNDgMGeJ1mVdsXcTFV9Wm",
  "key4": "3fQVnd9gogjKmEXp34JXJcq4zSZVwQZiWtHW1XVBks4EGJn1zS9Y6MeUmgqzrSyDS4hRa9m9VypLMBLi8yoZjm2f",
  "key5": "5wp2VZ4cNJJYYRDY4K1BjW9pDp71ogmA8z3m1mcQHdEL96w5T5cF54FrMCtwghwSVrHsboG7WHJ1cMZkUF5HisM8",
  "key6": "618h8baJDfWEvVmpfw2uAXZ91xoE2ff78vDsn2e3rrsipNkuym2VJsvxepEbvfVq5PpKEN94nTTyEAVbFsUMijWL",
  "key7": "22i4Y3bkmncSkNowcoRVzrPfbtPtXEoPZ4wwD6382tpHj6TVEbW8cmSDsa3QfNP5e14TkJ2bmGM8Qws42uRyMxjB",
  "key8": "3YAEL5W1AW2bh3mH3AMjhqhJaP64qVYPm2rYoytjm2xAceUn4MteuHhS35EV3aeVQzBbGfH5C4WztqW6DY1JHMJA",
  "key9": "37GCrFJHBh9Grn3DikUtq7KYJ8qgiskd7jzQxvqp2vsP1bDM3dM51Ax2neBGoYAeAyANQsszGrNzkrhk28i69EtC",
  "key10": "2ZGZAQVeiWk7F8q1QJvpbUtWZmeoKMm53jAePMT6K9m186BAjNpxKHpDabu2SMpp1hDrxhgXfyj7PzjF31T2mkDt",
  "key11": "TR96BHgxga6z7uJha56BQ1Ftfkxp885b8FvSHryL5u1eu7nBFU8J5GQnhNEZZbouswb1tLJQv658dEenHLHwZmR",
  "key12": "58W4JbxdUUdhHXJ31Vhdwj3hu9QeRu3uc7b672pmYQdjA93a1hBJJivYi8v37B34AsfYRiVGTYURgKS8fTG1avYG",
  "key13": "bVPCFovwLCPXVCUat8gn9qsBCZmsfa795xGmBkMD3EgpUhtqvcvHfisN1H9jqgHUuPfRQZpEqueXaSgCgvvwYyy",
  "key14": "UnuAEhjcmJJBKLTAan6NP1o1p46uPJYqG1yudWLrUwC9r5M9dEbKt4yNwznv8v5HpXvHBynjFk4VVoDFjMTq5MQ",
  "key15": "5mj9tgKzF9qCtx6PSNNz6PFaZ6jPM268wCwWCEfj4Cu4A8M9vmAcpR7ADrSND69FcGq2CtQBMpaoXPz6hUZnGdW",
  "key16": "Bfyp9Pa4JZ1qYvmKVGcfE6nE8AQd8vctZN9RThPaycPycTKc6V6oSZ76Q2GW7FRZxvZWfQdhKpuWZrSnMF5R7jU",
  "key17": "cWpiYNZfGEZAcU4uDrN1vEr4qZabywh6cAMxwit4A81ZPEvgC8Un1mxu4dnhStH5FRj1NonAX4pvpne5azvNUDB",
  "key18": "37keXL9Cp1qJX1qoUaiQCyo9ajk6cmB2q3hYGgPbeotgoq2R4ofHdcq4ZxmebzaJmqQsteAnPGKsnZZJy2gSRUVt",
  "key19": "53zPjxMof7nU5bfL5Aoy6V7KY6UiJWuYGYGnGavQk9V4cCUzXawE5X7EJs1SimS3AZD1jLWuX6gPifA9TKhYE4QT",
  "key20": "2QcrMyxx9Z4saCERbu7L9xhu8WQc5d9rMZudxiUrQmtL6228heZriWaSA5aUBdUTYdLrfJAVZxqxcESemzsg2JRE",
  "key21": "2MSA2AF4eUKmYVpsocE7GvrwXcdhvArSCRa1jmkqdrA421ws9fTWJrL6rjbbC2FeJeX4VgvF5wHQPSPowrqpDVsm",
  "key22": "rFQsxYBJkK5vEiBryAWxkacbyQii5b75fYmLoASkHeJdmsvmGGEfURTxZJJxxzE9DDUqwt4zpZEW1Ht4KvYMZVX",
  "key23": "3oGVV5EjHE57BQNzc2yH762dv9QJ1bbBjwnoWoPjSso7mmpDgmi5ED72Se3xpJeNSk9UyG1ZvPzKhb5KdpD2FWBS",
  "key24": "3mEsEnBwBXmhzsTfSQmjcvUxN1VctyoAXNkckJ8J5TSaPrQ5N5BYPi39DPm2bnFLAaFt9gGidYFkQkPL9jZnu4QW",
  "key25": "2dQncLvSqG4Kd92eKPJtXJ8pZZUVmQLxEFn2FL6UfqYoQK5qdtFBDqen5SRskqrom1EChynAMyzT9csERz7ynxFe",
  "key26": "2L6cxPeGvb6yzQwHtaeVMJu4JokpCYN574JD9WabCJXBkXfBmksYfpvujgm4AUmGRULnXgdGSGttWBiBNto6Bidk",
  "key27": "qD4Fgt5k6nnYq38caQx8QL5oMZYnocJqQZuXLzyNggsEf5DhJgMopJavndqYDj4cdAniTK5Z9Q5dMvxpo778vSj",
  "key28": "3Ukm6ncXss9Qz9fzt8v8bT3fcPoKt8oV8L9sBKZBWwYJ8jp46VSQVArnA93xph2SfhEDLCgvgbHTrL83pFsJ1kJj",
  "key29": "2wxmRGXhmqasGz8iVaSo7YTzdzP6KMxP7YNRqFR4kosPjBoZZK6a65UfbncF8XeP19ZLQLQsTaNoPRkskC7Uhmci",
  "key30": "NFBpyH55d2QxQYSHmL58382G33hoY4fpNUUTFYHEnCfjGapSJiZwYPLV4x3qGcWz3WLEB5wzM6YbWbR6Ujca1XD",
  "key31": "zGjoSuBgo1TsxJcZQEHAbGe7HhPToVjgx8CWukFCycy5kDFsEtUrwuMKCzg6C3x2FuetSLHAqAHS6SZs67WXKUc"
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
