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
    "2NCEa2nPRT71op1KM4QQ56VZK9gUgBkx3Tg4hrcTqqZMwF5Hi3bb916jCejXtX7P43W2MaxtCRNZPHzR1bNe24CM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UXQriSTyF8snZmnx2T1y6GLn1zyyWCGjfiZRus7yjn2VEJeu5F8q7w7rAq3gymKrmXG9QK6Kxk9yFbNAZdk7uGD",
  "key1": "2PgCKZGZdhVMF9NhRcoztq1RxHNHA1QbMKLJEbG6Ff6sWXyoG5pwFGGJshHnLhKq7pP1CYDGeo1jPQrh2XJHU44B",
  "key2": "MrimxKDLzqM6hx7P2Y2opFRQnEjDJocWJyMUY55d3iGHQv5jm5hKCN7Cx5jCPfFsxzX56cqF97BzqQqECU4gkzW",
  "key3": "26htaNzdg61zeDing2A1dvmY9gbEKmLyXX2JadfeY65FsMJPHNmvewdk9y5FmuJCeBjBkGLwL8Lh3DVQWCpPsbaV",
  "key4": "2iA2w7MWJMNyA2g2NRr6hqQzkTEdnj9R5QznphuHwbWQcorFT6vwnGFYtwVDVhHxDEJKBbthtMLY7NjA3X9mRjNg",
  "key5": "4Z4gKvxW4njAtmasiY1J9y1ujjMb9S1BUEdR6oJDP4vmSReKvXY8F2Jm6jU6ebq7cg83QqbqEdWpkKDX7GUNdufz",
  "key6": "5w8DQKnDodS4VgtrNoAhu4GHv6WA8D1TY7GCAAnnUAGcL8zYvEYkCrb4LmRoeRUTFCAdXwPrpJGXTPFjoMtgvFrE",
  "key7": "Rw1cE1sqhTRzeP9QcrJM7txEkuY7QZht8eHAkpfjEvqhMpVrAL9ywc2jmtJbSuxWXzrUfz6S4C69vAHdRRk5FBG",
  "key8": "4k5ZhutsYEPN8Ph6TCjCR5wbUxpGZg3rHEQZfSEntsaZSWNFS24scNnqhzULFqhzaiehPEw7c93k7QvVMuhSR3fj",
  "key9": "8ProS1WzTvMd5Pe2FDjkBYXX6NggxcYbn8Ntns7oNh4WHaCYhTF6xAdWrK4ScU8hC7qKpA74BtHKUfNbKqBEa1a",
  "key10": "5jqRGKnaEaXe6wCW5VkGm2cr9R85iBK2nN9KHfnncsyGrhrg4E6fsiw6ms6rmkGPrCSkVmax6UxBcitMQp6WKGGB",
  "key11": "3nuxaQxpm5zXc75uYbekZDroAUxN2z2LHjhmMXgpStmd7HkagkccHavFXxnuXenSdr17Ke37U6BQ2LSunbx3x1eu",
  "key12": "5hMGihckSfDSpdVvXMRQ4i5qbLTutzmzwYfV4e9Sk9EXWVbvYkKpcc3fsPqTSDkHD8Bn1YZ7fcJL4Mz42xzF6V6i",
  "key13": "3M7fa57Pwbd7NpPzF9fMtMbokJAydnN9m5H5qPuMQffgy3PHhAFqoaQoX3o2Q179GKNsjBHwtoSQwVacQX2yEz6r",
  "key14": "3YnBaDmdBqECkLw5LUtC8ANMkV7MvYxy6DrA56Fx4ixeD5id6qLLBLJiMDFAz3kZyVh4Ra8iiEcH62LhST6w2CSx",
  "key15": "2wMSEKyengJZRruhutHro3peJGYLbKh2byJuABtxPX8g8x5BrtTbyhL1xX5CxmbN157SunrCdJWhKfcGJF6TfQj5",
  "key16": "3moQV1e2toqzxA1TpVYfdwFobGiWWRD7s2uvwuEyJkNLzjyHHELtqqwZA6tzV61qsn142CpNAX6eR6XGc3sSX9yU",
  "key17": "5sWDx84sZMW2PXkZhyz8LHLu5HQRo7tvM97DgoiiDBrh252qvXaEibZgaRjChxan5NdYkw63diegTFNzh9gA85L3",
  "key18": "2RoMde4nU6PK6Wgi364aMh8KvmbRecd3eTQ52FKA1NezABGoTMLSQwcnDoUi9oyTASesAzUmhyz1u7swevFgb4Rx",
  "key19": "5M8vaJMip7jC2p3EUrDj9CuTd7K5sVd8jbAn9uNUywUB3d1GPTudA1T3RWNkT7v5gi6dhks8zc9qxgsoLRiZm7ka",
  "key20": "4GPE6YmjehEr1JrWUbyTHG5GATy1VJdtZUt6HpRvdHUP48t9GYiT8R6rHBEhmv9rZPP4tfY3He6Stpe2mM7cadXS",
  "key21": "aXBKcB5nmWyrmxkuFjdNEQMvoM33qZmb37VCewCwSjMacdYQvFKsxunccdfsJonrVpHavSg6domsY51YFCVyb41",
  "key22": "5habdW7J2gh8jEkfV2mZpS9hwSE7Gps3aR5uLzcJ9Fo1FwD5LjnNRqZbCH4kMV8aRw1JBZFejSiq5EQwFmLuzzWB",
  "key23": "2LXJg7nXi2cyPMXNbvXaf34ifgfWUfzti1i5BsekGiSaPryRZtFZExFEDt1JjUzJZg8Zmb89iXLUpRTdFWJ6sX4N",
  "key24": "5AuiRrVLy1VJBiWr3t7fBhu41Y6zuGsMVk3paYqBywgPp3LeiLo94mAuPhau1JYtUhctVAEVTkxoRH3Tbj9dgH1Z",
  "key25": "reSGjvc3q1f3snaJ23q9Y6eBXhkSEjkbY3ftWJF328CsGvGwnEVyxNHqU4auboDeYkJ72CRGJUHvdj1LuxaX6vd",
  "key26": "29cbeXKyrKrox4MEmts2WneHJkE6sobzqFc6wn1cw4DmAqsAvCpkogxd1j7r3C6CSbHdQmGEhriQfxmiMe2GzSfQ",
  "key27": "3v8scTyy7N8HfqGYKE6ycDfKBgtp17mGZWaEtKwPAyjB9YioaKzucuRX8hZPcWQUuQ66C9oY3ZN7guddVVyPn3S3",
  "key28": "2KdPi3MKTszL8fzTBkXMRhBHcvyL6tvqLSuB87Pw5kicxzYYcyqx3dgDhDvcu7tQKCJsQEuJGcJt6iDWeGog6vgV",
  "key29": "2KthAxh1ETR3Rvu94zXH7UcAJyjw3UEtccSjGDETRhE9sfqqcPCeYqtqUGThQJE3htoqcEGtqr6jbSoAeEe7cgrK",
  "key30": "2fejwFcvqu3vfdUKt5vNgbHXwG8RZq59A5zG7PnhdB1VrsW2jPSHPzbV1eu6Ru1HgUoZY7VV6G2jZEDwmHSSzjNU",
  "key31": "CxtLZusQuro3RbPoEDy7o2C3vqoUJCftG83yHjo2gy3v7HJJX5mCzxkwCfWnVhTfvKpU7D7ozVTVLg4dSWNSZc9",
  "key32": "4PMw33ZktSdEcuvWnYdqLXvjbHX3MqjEp6bBgj6NgZUHTtLxbFyhGtmTJQhfq8871UUTi49zwt7S1ETEzJD6SZWY",
  "key33": "2ZGfS8wNAzajnZKMXfM4pJyeY9ZQsnUXURLR6jNDEvAnhuWDGULxcaCH4ah7joenCxNdyDhFJZTAVpvkbAPDUy2B",
  "key34": "3UNr7zNSq4u5W9Po84r15mrzTF7gjmRRf4RPPUwap9f1GzV2g8o7pp3HtnDMJuvugdfvUEaHiv4NDzuBybJmrVfD",
  "key35": "5JwMryYNvkQhL2QeDnS1Zjav9M2UQreuozJPoSyrDcQs92nuaPCzAphPT1yi4WZaE7267SCRPFyWTTrtWGM7vS4",
  "key36": "2hfQi3BffgtaBF85DvTR72xrbFqgN8Nz9E4ujzWsJmdFShs8WfTtQMZyoLmgCRs5oY1vmcePvoYqV1gX2NbNEgcP",
  "key37": "2FJ65sfnMJbrvdYSM9KxZcdZPL2ZrLpjCyUpXJYSBp4KCB4NAsvsHjR1go7PwQiAQivgyHPk1QLfVYSEAYpF4Vuu",
  "key38": "66XL2dvRVJ9B7JAy2Qfn4q1wCevw9uqZJairX1afXmuYRKoszhuQGQguJQCMGfKFrWt3fZ1i8pHgNNZHv3xQT5pJ",
  "key39": "5YZvawCVmG27im8PwZ1Z4yAeg2xxc441MbzysYm1H28Jrr4qRgw45qqbL1tmQzjJTHQTMegoZYT4iAfns2rE42MY",
  "key40": "5ptCmgFjDzUUsfL11Psy7T1kRhfo2m3zke9htxYFxjwT5XMrLYoT28v5TTHgcfPjSF9WovkE3rhgsW5CLMdib9Wy",
  "key41": "22K2AMPhbVamHwGfTN4Wub3vGfbN8qBRScsbH3nYd9Qno9nH9aGU4vLeAtnqN2RVXTm658pU3xwZ9eyY1KmFssU1",
  "key42": "4p1umJSDCpbgjiN8cUazLMeGu8U5oqthsTDb4AKNDnwuvQcWLpoeywwZq6QJAybTQUe1bmvtBn62bYcVaxakwhyH",
  "key43": "n7Z75zJC76fSkddjSFMmfnvTG6czDYtvJvxupvTdT4JYGW5JyeCTxb7nSPxgrxg5qwCejBgjWRdTugsTLJkx6Et",
  "key44": "4X6FHT7cGrW8rFW8RSxHrWpZzaNxrAnEPsanuE4r8YWFDT6bMPw9S79xeAMc269tb1mgZRfp6Pnk2GGhbcgtNbcK",
  "key45": "5kgkkk7WLxVqAwKKTXsKM5CCcsiVNfr59ZPLgLAyVMP7sz9RSt41VN6TVhjzqQwiqqhUFqb1hSnQY5BbQwvzGsTq"
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
