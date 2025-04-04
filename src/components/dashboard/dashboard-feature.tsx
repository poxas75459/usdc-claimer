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
    "42asUNKWkeJ8pCWupVyF3ERkxPsMouUjuMWAngVrJaAddFDinBwYZxKbJeXWj2Cz1NAqdTNQ38VgXrvupGKiYdPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tdj1JADm7pPQLk8fq5fmfYV17eHzktAE8sh1pnL1gdiTfu1ft5gnBJfCAG4givxFNGu8W3XDwrZhMAwtS7aL3rn",
  "key1": "4b6yer1BwHM4ZrQCtyChp1zrSG6et8Kk4DhMSg1hZoxDNLFuvXxw4uXR3m1wyy5AJaPLU9hhHCtTfQ6NjswHSMyo",
  "key2": "4qqLMicKBpe38KaHhfsezfVYzoZ5YuLaLc8B3pXHsKjQGgJrbVy7maxweFAJ6rRJ24QUeALyXUXkdsHmQ3MYkJ7a",
  "key3": "32Z4WYFKYMUUhSU3M5pvwoEK7iZfVudCEtPC7wq9t7tqsoLhUmgSGFzYq6Sf6oWq4VEvtqaZPEoJ3ufvKqij8Raq",
  "key4": "73xJFuQAQk3DPAuccCFted8Tzxy3aEEfbVBJpjo4b3tqUXMHtkmrK1Xvmznf1LSsBRTaxmT2EMMAG5Zwuvd8Aex",
  "key5": "3rg5Ln189wNuxWv7QNXuTLSqAMHJa9GbPZ2KvRgdfUUp2dH8bBf3euMXWqgT7948bpkNCJx3p3QNTNa9VzmpkGJY",
  "key6": "2Zom1YrjffJ8dG7Mj3YLA1TdrWJLscAoEha2kfczmGJedxmDWuWrrDrpovsoYK8VwEgLwPmgWJtNukRGmuX4E2eC",
  "key7": "4fpnaUrWEBvnrYG6FdbJkgEE4keUwcVba6g5MdNKseZ8zCrWgn7aJnJ7ExfMdJFAJKhMw4WT1EDaAER8pjEDfQC5",
  "key8": "5MZgCdSbRaKc6pjraSZ2gTnr7otnu11jaQ15h4oPGZ795JSfHFa9jCPfhEc4idxbZCc7oXwhBorKoLGcdtRCEo3f",
  "key9": "274GKTApLqVo1RMeY3iPuhG7Fc13u9PAqkjAswJneEJxFq62fBZ8dG7QmjaLRVCezcPi7jQVv8L9Xu1QrAVG26NL",
  "key10": "FQsNZA63Ci8ZULSRRBBgCJeoTWYsBYW7SXLWVbcF1ruYdB4P3BC1tqwDPi7ovN2vDiEH27QxNd3mGDiDdEe4uxr",
  "key11": "2Fhc9bgYQYWkoM6uTmmc8FD61YghXg24S3zrPFGgeEh2i41RNtNNQNPrTdnM6kcjJkqraShD8bmXbjHUDFcuj3QH",
  "key12": "4X5MKU2vRoZ4SfrHoXb67uQVHSoVoJZiTQi65A1QNtNsL1SeMQwfd38rYhMuREvRxXoMmmdvRrfpjZMjMytP7AbU",
  "key13": "3EsuRDTarvsxbQcmzmYtUp28C4or844Zmnxv2oAGHxvjAB9a9t7KMSjdmCYipNVacBDdgMGm2XouMNGtHswDhoUz",
  "key14": "5K4JrJBBPc5gqovFEYb9o9iGBfbRNffp5MizvDf3Zh8Xdqmyy7B19JCSTgszzVg4tEiFDsUBcaKxefgRyiMn2T6j",
  "key15": "3XuG6AiKwLQCzydAmmxeLu4QP3EBwVgTURqWh4XX2kzxZUea9APZQ6fgxeNSwC5cWgts3LMgtKv5TDiU5cXJs95g",
  "key16": "bZvjqH7gnFVKh4HfiN8qYeYHkB4WdJXHgT5PYZvKsKUfQ6SbCQsYxfNjDMFAm8yDKyQ9MyHzvD2of6H3qiR9DEY",
  "key17": "4GsLkjA3LshkvcE2SYbdSXnGtqxVAMZzWMfjU2mxthgUu866ECEhCsEbBeC7k8zeZEX6W95ExYGYjFgYsXb3pgx4",
  "key18": "5nJYRoSfmiGDFrMuRgoFmRssVpwQqkCLSJRso4zYnVkqo8si1J4BffqT226Zc8xf2pjvvoPys377hrqGjtRemKBw",
  "key19": "3HBpwQh37dy5YGkC8f29dGjW8WZudSHvNF9RXc67T87VpLm6cN1MCFn4jiWVJje8SAQAmxJsXnM33CnYXnJyaQCg",
  "key20": "3MtzRut9XFZp8SKzvx37vmBqKpQsoyVW6xy3mn6oQbh2WyB3Go7xd3XgPh15pt1JCKkUzvFmsLjhtyj3M7J24D8w",
  "key21": "1gS1cYGAu9vEov8r9fMGWzwJEGLhWLoAyX9dr4Ls2VitZ3Vpen3RJwcZ9cRNG8CZPLRQRiuHcP657r9fRufbbQK",
  "key22": "5GZXL2PUd551thfkkiNXdu5SHfMNYtNWgNyS6wM9rxSHg2KrrfzXxYVFFpD3iEX3q14cXnY2EEXowoqrrEMfqApF",
  "key23": "5dWWehfHeXCJGDJJT1vbz2GidCpkKLF98Fh2Q2ngWgCd5Ctc2KKCE15M2KzHyt8JymBV9ovy9tKfALyMNAJThybP",
  "key24": "5zFFEDmbpqttyp7MQ2na8QDuGgZ1TJvcWPvZufysjj9AAzEzYh7EpBjWPFNZS2mEaXuY333FieEq9DUDukNdUpS7",
  "key25": "4WyWGvztieVYUPrr5J9rUbRtEAq4KqdoAkniTiemTrBSVUCaiamFsfkwUstjqh1KfinCXMVhsYGc2e89YGPdZG1K",
  "key26": "44Y1snYxhNawBpSzpfpb3ySVc2bjKZTrqwrwx6hhtEDaH9fV2QXEVbehdCt7b12zpcaCfP2Z7yo6hktCmFjHCYKs",
  "key27": "4MSB8kTgBk5i5RMRmcDem5bTfHsVsZYE75k3PbC298ymMBEm2FnMhZSocEf1pUR2zNwrD1WraXqvnJ5VKqE8KZ8k",
  "key28": "2szx41K67sDdXSLiWe6DjuB1pQmakwg1Q4qETnpBL3T7cxjvD9TShmUjU4MLc7gFeK6AJUG1W5pPiyc79847dEff"
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
