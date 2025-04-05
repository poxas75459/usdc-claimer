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
    "tjmigbxHVHE5tTJoAwQDxK7qFXCurGRmktso6jRVqHPXi7mJL8tEsAs1CtWpmpKzATZ4MUEjugb8QicEmmkVknP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65FwVGG9b6BiMHqfvCjJUB1SaK2GuW1MvCLMZNSgt4eM8U4j451GwRUMb1X6dEweozatSCvLatXUhQQCe3e9qMSN",
  "key1": "GUQjPAqeNGZHtJdnPdMzw3XcL1iMFznVJt9MJG4isJPBrVXXtASGqEbNVCMbTFNCJRF9MU7iEBqzLcGH3tR6fSo",
  "key2": "4a8AVgCTAAepxNu4X5Co1pAFAwV7mT8g81eLq3jPKPwtNXKKu52xtg9swYMB9nR4o7vswCztRD9J5R2sNSjyCCtF",
  "key3": "2sADTnQSdXbDCxSwyzwHU6KQKNRLwfj3kTSQJdb12nKzBQ6Fo864CsaFrcCQyGhi6RJsoV2gdu6DFkhCpmu2EFzk",
  "key4": "5bs1PaGNrJdfgnpdqWJAqWWfAtz49kgd9UzUzAeufHn1acLQEQ4GfR4bBaBeC4bTBpLampy6snZ9EPbFg2eLYpPp",
  "key5": "5UVjxvtgzbMaRi3vYNVt21TZy7wqzNyWYzV5pnkrNuSfC53eWSMGFWzBS8v1LLv11LyCoQAYKshPx2pss48RXdKs",
  "key6": "2bJP7Ua32Zmc82Qzzgwj5mB6Wc2GfUPsQRsom4Y6Td66CNaCrveiaTvcbvj7hJrFSf7Pi44VkXqSXYCmpKP5JDZY",
  "key7": "2VCfrkf8kUWxtWNLVMenhGXK7wQtsKB2GhMiKxc6dbnNoWCYgxLmxbzwNYLPcaGtBBzsNefjrB84bCS9DYDSsXUj",
  "key8": "3SLF4gyuRAXYbjkxcQ9RDM9xHNhJq9kSLc8rpA6qEULhLnQqAHFyY9uBH7qcEC6ZE3evSWj2b7vvmdQ5AfgdgyQv",
  "key9": "5siUFux8YTBAEGZhMQd8RUWep7hGmovmPBw1f1376XW8x6D8cAfGUqvQSizh7WUy7SHgGnKM1HQPHi5kCKGjUjL1",
  "key10": "5b8kHVGJBnqsTJWbBiShB5eN32wyiFPg9U9Ex7ao67umTZ9t9rXDYUpZWf2qHFwvh6ggEn2JbMvjFXpE8viZ9tHu",
  "key11": "5UEsVwkEQYFyNYA57mNNpYZSptLPu3PqfUvKyHu2zeRM8ty4Dydp7oCLduEG3icCGaVzwjs47p3S5wJrCnZ8YQo9",
  "key12": "qQpYp6k3qPrcVGBP9hHEPkuKYEx5erwkQbqUKdCHt9MhkVMd2HdoBuRpGLsDruViMNEzC9mg8y8H17mx6H7qmHV",
  "key13": "5bhboYSpFCk6uGABof5dYbC3KiojDnu9EsMYfUgqBitD2kGbWiiZHZ4GBwyN1r7uvBfRs4XdaAy2DTcBSzipNMtZ",
  "key14": "29mkena2VUHZub3rej6kkuE9sLkj7q8xjNGYb1JiWqspdX8zNA7SyszRX5qWgFRubTNoBUXbbUetnUidGtSRh3c6",
  "key15": "4xcvXqHhMRtU1u99VzLYrrqQw5VutP6U7aF6ajJ87hJhpzuepYBHUqLRGz6wgqFJW7yBxd4FBsRjUkRAmVURtxMW",
  "key16": "3eJ8PnitCWX7ZZYpUek9JfQmLRp9ZvpvjYKJ2s5AFkWMF6Fkyv3dZMZNCKBfGzUoCKP3bj8u4vark2zVjXDAfDMY",
  "key17": "2nP4k5mazJhU7Asjx4rvukyZETPmmQg8rFxpRz6jiySAzsQoRXV65KutfuiMKMhXQVakuqXsqGVpghhBCLWXQnDh",
  "key18": "4iou2V5aPCm7j52rrHnbDs1Tzx43pD23JHCvzkbcFLCwDw95LWERiUrFSKzTUMs5VAPJTHQabK6xwhDYcAW8qJQp",
  "key19": "4qLB2fYCXYkUAomkLjTD3pX6E59Eo82VcfP5x8JkCjDRy3AfE8xEF978JZvnbqXeSKo5ocY42bGgcqy8SNNWNJFB",
  "key20": "2QtL7r9B9uic7vtKLejrXfvMNdkfP9yNzvTzqJ5cnQRZLHrBnVqPR1nunwbuh95W4rcJyow5cTW3qk1benXLX4nT",
  "key21": "4BeqyoomYpPQcSBVtKKuenCRVd7DJCo3aswR9XpQNZEKHYvi8tNojeXpfREuXxm9UCXPDx42ntcN6yU22swqVqSY",
  "key22": "2793r9SMZf7ySVzoNvh4LxRDJaZiLtLSWe7PpukqPZci2Eg86PoPmcqi99MfkEcNuuThjjaeNJ51vRq2THzwEVD6",
  "key23": "29kYATeTfCEGbqAsW6duManNGYvGaqUHieGFw7A8gzCMWNNHwY19spBbDrB5b8wuRGhGvPKwMEp7e9ZBbCY4CT3s",
  "key24": "uCCuZLJ8CWthRe8pm6jsJusgLe5uWFU73sMN6K5TmehzQD5nsaPSmZRWycMiWBoycXzVHbcheQropvo6pqUhoKo",
  "key25": "4S4NKRe2mesGj53Af9FrARnrk4MYNXkkiEAo2aZqNcBrzhuFab6nY19q4qdtpZKdAzb9zkbpXBXS4awmz5ff5RiN",
  "key26": "3zwH6FEz3GjNiQZFuxJdu1CEA9amBjN2KAgPseSLCDBz4tJjBCNmUygpUYVFmfC13WZu8ChrXMH7nguSfkwJxRR4",
  "key27": "5Ej9q646Ni2zEe58oqRCpSArhsRywYjrdg3CaGz9QQCjkrNV8bTRyqpkZjEaC6mvsV8SyPcfTBRWNzSujJzbTGVD",
  "key28": "3YTqzj12xYaA26oiHzSTUmokwMbJ5XiaJ73KtbTbAYBPMQpfKUr3GxmADgRRzJWZQFWpgEphTHMxw6PJimZok3Lc",
  "key29": "2CJXMgQnotSp59jwTNdBW5jqnGnDbvENkV8RV4LFefhaJ4yKhDbUJq8Xb2Kri6swf4Nzvw5LzHUiiWqLNqrx9NwD"
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
