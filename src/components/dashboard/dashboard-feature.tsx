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
    "xXDVQyNUEouwTBiqEZGCfiaiiuTUVngbyAY1tBcKZN4PjLDTM7nNHfoQ9EGtaRBpNHZUErQ3rHcqspGpUaxyZ3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zSsf1ZLvkQnSHY26uhw3DbW3rkvZMTqMnNegF9FZaNuA38hFuSy9xg6pdfs2ErmouvbajdqrStj62ynphHEuESB",
  "key1": "4KJKQRSsCVTDmg3DY5WahgWLv45YJ4foe67Zfc72ajzpdgpsseZ5rdvrCQaEwPwx6dntvLfhHKyue5m9QukuMMzg",
  "key2": "4zCyUDNt42UiWYx6UobfBmzfXbdazocCSfVopgQ435PyFvdxRY2vHc92HsUSwdcDkMMVYZdxiEYjZix7V7QYiBG5",
  "key3": "M6xQJ5iCHzB5bMgMjU3FqqLFi5MtACx5hTSsjoMU9RRNxTRzUgBtZH3NpK1qCtBsVqyJE5BFjYrCXJ8MjDQdrCr",
  "key4": "2wY5yJ95JzqyooZGj7wY9LNJF4BojnaQoTM1x344W74LxzdReDcHHZXFdrQrMjTKpyXm8tJY1PbbBLw7U5zcdgvc",
  "key5": "4wft82Xmk1eL6hDGLa2gZ19ZG2aMGdScnJXYNtPitYALNazNg3t8Td7RPcV6dRuy7BUJuKshS8vTg2GUZ8vctDZH",
  "key6": "4p1s2BhRm9YwG6C9agciWrvCBvwmb8rD4u3DeMfSWEctuTfKG14qw1JFkLuGyRePCEKd8BWHXFbizZ2NaSuNVNtu",
  "key7": "45xoaE1UDy7Wu9XKE7Q3xMLebuTZfNoekd79j8g1SsNcm6ompJHbFhFqThWXPQedRWjKPKsCYzaZ231wPL4XcnfJ",
  "key8": "5B5yj1ZHAq1VjJ2JYE8k3jKv4pLtnDbE6wBh65oPaMBBAoe5aQTGDpCE2MUtLqFDkir3U5MSVxSVNgckMHZrubXp",
  "key9": "2PnjwtWmVnuhup7fgptDSHCGWfAc9L5dPfoyCboPsNxGJkSvGtw168YaPgwoDTPkdD6oDZbm6AhWuHHvgKyX7zPu",
  "key10": "249eD89VJVMBvzkj97dSYaGjdJV5ZYTKAfbaRJ4NQeygViWAnzf8wQhbAtYQC2VpKpLqWPMK2DskTvG3dThTL2td",
  "key11": "4zNHvSRR9BEsnJp16eYoVTwhuTSYpQ7UmN59ZmifcaHpGUubzMzEjx3NKvnow4cUCC97hBxTVfCmDJQvnbAWW6S3",
  "key12": "3Kont86E3rZYWbM5wu8qN8cUGiLG4X7cRnDHie51fzVKG25JJDx5xoBuAEWU3aLagaVi8q8arSA4pCxs5RUdJiHj",
  "key13": "2mrWbShMrpZ13jqhLCvAxE2M1bV4iWXf8CgcZzBdurjzYysughBdzGy4TZ4itNKo4YAz3oTDekwRM6QTLkWjR7jJ",
  "key14": "4WvrRECLUycbLrdCZW4zDp6JFmAxRDw6RvkRAFnbSPyogpn63vy3iFgfXFhUujAHT7c7nLGSAna3oQLntMzDXt5y",
  "key15": "5mAEXQk9DUMYUAnQvgh7zYr7FkjzvDv2gjUvsu9DKL5RtZpqEubS4FWUcJcyw8YnyX3eNcezxuQ92MhiKixsSXft",
  "key16": "Hs2qpErvAZvjnSiGmSF6c4fYCNdfWLmXNJa4b66itSJvm8CMbX2XuRNWjFfcoDgyXuQsFvHFingaHYd2nkLvHyX",
  "key17": "65vGVbgryvY3ZBZq4iTWZH1s8M8nc6D5SqUaJDbXikuWcT8PRxhJehLPyoZM53w2BuovvZByc7c39CcxGphgeXmy",
  "key18": "52ohEXQFPbzaKZLAkq5gRYdt62fBrqVQfYcHTV9tuKDm1jBdVfKgMQ7gTieBEZ21Yo9N4h5hrcytxcKdtYsofFDn",
  "key19": "4c6tQopSRFdgyhJPPWt9pgZop2zt7mqugQNMK8JJDXx2hGNxQuRLdLfEYGEbaHPJpLhtw9bSNMkEPqSsBhFUWJsV",
  "key20": "w9v7q4rPVY8TwoeUYHpErMJJx6jMvmHa62ADyiMeorx4Lso7sQtBFEe9edjHAgNVk2FukZY1TKCJGJREnV7neGz",
  "key21": "3FSM4HFrpAseRZ4XBvNj5MLpcaaAtTwT5S1qRrCj3DmCCtG8HGLPgBRmPF4gkEKJtDecsXSThzhxXanDR8AoLymE",
  "key22": "3jhA4g5CPhgW3tgqtko2d8vNEvqSHEfbX83uJemMmXBVdCA13cz58daKTDoEbeGSD1JwGKGmU6tEFz29AreocDQP",
  "key23": "28BSx8UxkSCP2imJVs6KHGUNZCHmcL5NHLkpJD3U1F3xTQQhro3YC16QhhNVHSL9FvTHCeAveWQkTpLEfhkBPZgQ",
  "key24": "tiVzZuQwyYGVHe6KUsb9UFLGSorjphXfHDC5vh64Sj7tcejmCDe6FFyffWtN8Y2imK9RXPsZmZQJe93xNZppbM6",
  "key25": "2k3S4rR6qcoFZGABmCnNF6ArxpM2teU3rvYRSCyg2vQAnmDZehLMNgy8GjSE9m8re9Lz9WnKkAcFg3s3sCgNkPcM",
  "key26": "2cUCC4NBjnAZpjVUea5bopMtYL35JfkK5PsaJmdUu9mrAczeiwzynTLo9X1jtTDXKJWGLmppsdAX5LSwHpYQhpj2",
  "key27": "5XSr5jLrHE6pZ5uwugR6sdKXNJJ1phRgDjeKyyL3ncGhvb61q2mAxLGXpjqxsX6SaHoRZi6AB7Q4CT4dPxrJxyc1",
  "key28": "4S4RaqPr7ZHw9c42miEQvLPdXKTUw3L9MRsQy6ugzQZXBncZXLdgRHdRFKbYWpb5zfjgvkGBkf6jcSHdxnbbqKWi",
  "key29": "2eSZnZT5Lz4Lm1eJDH8CmUi32p4YuHKqrWnyEqsKTU3QjDxSyN3nLrxYpySdpRWw2uezZ7TAG2uqKyUzzntqbS5D",
  "key30": "391HtQjuS6wREcAzaJJfuouQheWrDhSoATJAd5rrrz5sUCvVc6AToEjTa2hvMG9A3b8E3cvRjWF5aY9dSWnzb13R",
  "key31": "5ve5mtXvqqBxq23f3YvpZSAKLFemVJacnHkQgADnstHAeyiJK5jptjjoTKPirBbJqsgVhJ4NwFb3VWSdcQc8VeyQ",
  "key32": "3DF3fCcFA4tBqmoCeCYL3cWRaSfnLkghf1eKRjuZRrdRC1rAtjkSCRKLS1SRcn937m1TABk7DSgq676yRHGcib3b",
  "key33": "2cE5zRFeTKM3ipKRx8PrLNzC14GYvdWrzHdWEY8tRmG3xm5cUotS3i4jhn8Rn6kqnL2CSQzsNrNXXEWDTg9GRLzF",
  "key34": "3unHVmBXba85UxdJqovuGVF6MZAPNjWN41Jr2SSKaizoocCZ4LyDS3YxE8vcUuuFFfefJCwbXbu3txYzyorQC5tH",
  "key35": "2jP1TBrH3DRz4mBkmsPEvEEGDEHyAbUgQ9kcWbjyhQEobqDZhF3vuDdy4vUcZsa6VcsYdqKP6VLddVrmnbj2akbd",
  "key36": "5qaBnp16yWKLrYXfYqqrji59yqrF8NczNvHCYL12Qqx1wYrWexzELuD44TL7wT9xv5H4W3C5FegLU3yskh8aHq93",
  "key37": "4hJYNtTVLQhTHELuJ5c4y7THyoHKQGYWp95ev1fxFryXjuvknNK7mFA6A5NwDpu7yTebhej1sLro1YTBroYMuTPd",
  "key38": "2oLQ6vJrpytsGjdShRUWovXw4o4nMy5D3z7Fr8Xo2oAa1PTm3GceR6BWLG9bAkEhgLDe5JQcshsaXMPM2jRcB2kL",
  "key39": "3TgwBNuBCcAjkh9j9L2ZZuhcEBQ9BAoLae9neepErYhy5DvRs1B8DV1rhcAQ63qkAnAjBo2jR8pq5JPrrHXapbT9",
  "key40": "h2eJfEUamgxFryH16AiLT8Ndszq2SqrHQDbfNaag6UvfQSY9tWA5UmnALSGi3NmhZi9QgQrv8EH44ncN8kfUE7L",
  "key41": "2yUXGJkcJ2Y7gju6CKxMNMr8n1vJ21DndnjBm7NRudXw8uy5GnU692WL4TtjuGb4m4cJnoSJuPe8PUXcQmCKNHKi",
  "key42": "22nXMAw9HyL8fhXUt6JcHTWNMjVp4Cjb7hpsHAeFAbeEMukxCUaQAdWyMmbWQGhzNhTgCMN8rLMtiLZgN1oHf1qD",
  "key43": "2b9HS6tMA87gG7XwPZp1dzkKJy9PJ4PRX92giESF5fByq4BQkNV6nkkH1JurAg4tqzRJcMd7zdjYXTCZVb3ogmuK",
  "key44": "sWyMH6Uy79kCEvKuZUMBGBz5LZHyyZdMNKdPPDipaTZcQUrapiej1NyUyfq8HqXKzjdq5BU5q7CMvqoXej8Cn4A",
  "key45": "55e2vns8eP8dGC7EcSaWitaLZCGLeaHQooTP4mjdgYTEDGRqmrgTE9XvbnVr2siApBdrLULp2my4hbykjQ843T9P"
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
