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
    "5tvXy59VGV4fixq7MhPEs4H1u96VGLthh6vtRx9YbHnAhywr7g2zCermiRvketbLFVJsMfQcJsrxuwuZWf8zZn7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31UChhwZDTQoKtFLUuZUqx9hkLwfdvRCMdV7voroMiFufcYENF2uWxJq5LzDuHt5FcM8NRDk92P1AeXeC4MZWkwN",
  "key1": "5MUyCCwH8wLzo2fdCvWTXQTd6aNcrkAUHrvDvDg4wswWEkgGmMB5txU5TjTtvmZnvqZwbbD1zjWS2zofh395Gpen",
  "key2": "1FEPao6hmt3td5gYhWZQm2TSHuqvQs9VkMAQFrVacyDJymHGdn6M1CYepRX8nJFoFXGYf8LioWyGgne44tnErtr",
  "key3": "2KVEgLwaXAtEbJz4aSWzM9X1qbv4GNpBQmTfq78PeY5cDvoTJDboEy561tnZDvV6nSewjADAun4UsaJkRmDBUieL",
  "key4": "5QXteF1rRXJbPjMjesHdqd2W8C9hKc69dNaAmPauR2EnVgnX2FT7PYtDDzB5MgNzVTDUXZVbF7Jngcgb3mJ6xniS",
  "key5": "4t4cLFs33PUGx5tJd8iVDT6rGWCJuy6MtT1FBRc67ddqEGmzGmbLgzVm9Uze4odmAWRLjzwX5C849W46oao8oUq",
  "key6": "3zGTaiS4u4CzJYkXAtP7yHfeEsK54J7yyMYJsQhZHwPv58LkGhqUzkra6HxXoUUXggjvRVQkuvMqVztygAXiQhNN",
  "key7": "3EzwC32m9VAc2pWL2j1w26cbxwELC1aTEtKfYnSgkcSQkKVZL4PSYB1RWQuRoPfKhyY6sAaKPMGbKTbyDqKRcUng",
  "key8": "59EexWFyPEMVaGs4S7x9UFciUz9QeAz8iZhCBMCugneW3ovgEQT9AzvzoELFcrKHWkVmiW6TJpYu5QPxoE7RZ1f9",
  "key9": "2x5P4XXtfzshGtmjhogSJ3kDD9xZK1gypnc4Ek4vaY6RhNzuhNxp1mqe4ZXXLmHrew1abFGaWbdT5LdiTFU9W8Wr",
  "key10": "5boboqXJk7UKhDFBeJhHxDHDh5nCAVJ3Qe5NAZdLPhjreiamTPZAoiJkGWxkBcVz5LLGXfszJXWa3vEA4V25ea7J",
  "key11": "3T1BvPstRrvbKpt7xXghhLRfK86PboRX58fVDo8qGbCTVGb4vsXmA2Qe9iyRzTPj9CdCXM913HHaEBmk1RXkLRS",
  "key12": "G4EcnxGRXZCAwSmW7wj5fHbAgHP4WPtYGJMjXN2sMdRcxnQQW5PzHNiBrgVLyWNS3NNJsog7MUSbjmXhpfWXxWi",
  "key13": "49rt21ESwk6wrKhBK2jXZPk55UxzrrWJBFuNLfB7PCy7sjogKyuTrtGxyQ9SCA4KgCrtmLMmgfehQmVbbpiXAEiM",
  "key14": "5ZPVfDDM1aeXRRLXoZsQq7XD5DagiCe9BneDzyHnH3thjjCA2rE61BS9cJfPW3urEEctQ8o4m5jA2VmKDgfjpRh3",
  "key15": "dLDYk7PGbB1J2mapx5N9bvErGuMLepDoUY66mLsMgmmtRbx6xDA45hKRD2M6Wwvv9Prbd4Vg6qsdNkXBXnQxQfi",
  "key16": "3L7JuSA4x3BB65B9QgqnNsMpbx1bJRvGASpLXftp4T145yAGgyRFw1mKN4g7neyndDvSS59VDGS9Tf2zmFNjrqcC",
  "key17": "eSWh2Nk2uK1VYNP7cDHzSYEwMFXnKuj8Fezhmb1RzxBqSjkejeLMa1ETcEJyjC1oYEzxEhrqarU4mDLAzTmTPsv",
  "key18": "3WEszJgj27WZ5iJUW8664Rh7ZscYKRxPvmhBYEMMKS6fyuyMQkTPdDvYB8utJpTUfyVHdikFUnTQaN3vqF9e6MFY",
  "key19": "62PmfFjjfoER4WXV1Z94eUK7q15c5K463TyUbVLdZmCqfr5FwiyM7uLEUvSozjdVH1yonzLKt9rFWuNKZz4xNsPT",
  "key20": "2YPrjhLNZDPMeJqMEYcMwJT5SwJRoFmxvwVDqte3n8xRmJLhD1naLrKy4VMnN4iqhhFChfGQHeXWsvYE8DL6ZzVP",
  "key21": "4PBeVfCcHm4XNW8tb1j82rsXQLw3iSpWfa4BnDZBBwoQhRru5W1SXkfxsNHXUEbask3TVfH8iC8hoMdyR57CAgpS",
  "key22": "5uBYzo2R4GRgCEeoTnFGAHAtwYCC7sVYLHxc9maF4RMWSpVZCwEvCEHw2i2K4pBXsWQHav7ynhfrMRsXoqktLhT9",
  "key23": "3uvpoPfPinJAPYEijimmdd4k39XMZRrr6LU4bnKeodL5z7v7MtdTJxXMa8bV42FGzepkoLAvDmbSaxyeYk5g2QUC",
  "key24": "642mHMNMWTAhepVpKHqe6bNAxWbk6q3HcR16a7Wy71JYczszGVvLatQmMAHWBtkCYHqz39rDhAv8b5ZRYAaXL4je",
  "key25": "3Ca9cGFFbGxjb7yNAQhvbF5qaUKG7QS4HoFz33v8M3JUN8fPbS6Q96ibFRathPNgANqTj2RGMpi8D1ZD3tAYELvs",
  "key26": "R1Y8iQEj8V42mbWgg9sWD3PhUHQrEHozcLifBruWFKscTF23dDh6NjPLwiBTfuEhxgjn9HwaD9vTA9cnpJsykRX",
  "key27": "8e8tET7ZkgmvzufoQuSUAaRLqoiQGrKxmZTJBH8yMHQUnvgEk4D4rZwyXBrrRRyR9dDgBCsc39DdQhLYKvfGM5K",
  "key28": "5G2hzmy1msctBhJTNBT7sqXNxtrpdCyxjmatQ8nSz9aJxqjGLi5Ufx3oEVtAEMaKQBN9Cm7RsZJr5iov3uJ6e7dm"
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
