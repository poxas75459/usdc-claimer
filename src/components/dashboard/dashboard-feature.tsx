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
    "5FA6rDuKCGvQkTbfPy8YofdpVf5PmrNVidQpJSHPqae6T6jqXhPdBmeVrhG7TtVJV4f1DqNWc2AgpkRwxb6wwgFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TCSURQERFAwbGQ1wqvVHdkJVbPvn17Y4e8f95KfTsW6KKZWnseKmvgJ1CWyYQZefAf9owLfdMekpKrHSZgK2EeS",
  "key1": "2nK7J31g9xAgZbvHc2bY9nD51Dc7soBcbivX9TT1sqkJs9w7B9RqFGCZxAqUxLNSakjCt6LyhfDfjKuhgFc3YLX7",
  "key2": "5SwVgZ46GJQ3gKzBqgPZ41xE1nwCkC6AdwFnBPKHCoa9LfC6qPFiBTepfEqXFTBNrnT9U5WHNxm4uyqYofzPjySM",
  "key3": "4a1FQBq8AH5PLnjtVT4Cu4855QMxoBJmZp4mMrDHYAHbRKJ9EXyzccwKrMhs9xii6upcaraNQM1PnpU9DeckuTE4",
  "key4": "Uz5adDNCeaq3uXypCXJa2cD8VSUccSDxCZNTNYy4URqkV85CYL8f7Fjvz1SdKEC5gWDxghqZjxe7MDjDLms6qTs",
  "key5": "2jeWQ3nvjheVGJWMbiKyeWQJGxGf6AfYxV4djadsGSaUGTBrUcaP1EeGQDkHBe4Hi11y4R5aVfJVqFUs3W1ud9GJ",
  "key6": "5uTSUkNUb7QuCuzJninmGx3FeggbgCN2EiiP3RMuaNapdPmiWgJQVbyz3pYGLxPpJLzFuobRRGj97jHtegjuVSzH",
  "key7": "S2DWB7K5Bf4FjVbMQNVmepS558JTQgC9kdVGUkieVoRw6kmgSW4BqAwm4etufdeVAUxRhEks6VjTdZWP9eeMgVw",
  "key8": "KEtjkLQ5T1UGZFHmwt8YXG6nUcHisaPDarXz7Gwe3e19ZLejGnCy4oMWpMbowLDfmmX8BUrypfAoMRXNCbfXzjG",
  "key9": "DMPXzj9nCzM8VxKn5ko2YtLPvumeZMGgYKt9S3oxni6xKG866LrTio3dnEypATX353rYLY5776YE4Wnhn1WwWjU",
  "key10": "3ZHSR1YxVssuBttagDM4hJ5S3dJpYc5QBr7a2xLtPmnjMkwwVB92azSad7RxRhpZzox88qdkpDcfwj8iKNzzBWxt",
  "key11": "3g6QeBVMYs8pWsJvcuWdoBaDMexcbTGb6goGHVJddPohifADNX4JmTemk7sMcnL9E7ndvV3jEPWTbo2PpXKfJtkT",
  "key12": "33qwpiCQ8bLtQ7eTFKJXydwBY7FZSaNW52H7rDLVPN8c2sUG92Z2VNpTdvuUsvY1YQqveWGdu2WkwF532mVYDeoK",
  "key13": "3e3zgF84DYnLvWuPnToxpi2igaAGBCLVuEFVoUn2VmcJhdPaD6jzjRDJwT2jfqmhfanH56XA31N5wUSBUD7uPvVK",
  "key14": "5zXXERXGXvKAm83DKu5BhKsP1DoTMMv7VMGrzFQugdyn61VQyrdmP9spzJP8RyzosYLawEytkSRGaVagycgm31hi",
  "key15": "4LgDkkqhS1wiRTs3mukgDniCPLNbUXFQVHscFm2cKwshYFtGrQNaXJh5sWjzJaQCnJ7dc7J3CCzckCdY4kBS8YFb",
  "key16": "2WctnRKZ1fBNReH5LdLAcCRnXFs2MqfJFyWMta45jrFbY9yrGnqfZ12agzdymWyMPTGA4WQidYLg4XCdioTKEvA4",
  "key17": "QtHVEFZe5M33LxckjneW2LQpgzKo4dixZq7R4z7XPAhd9sonvirzz3ofey9FLc3NDakn7GdFnisxpgeyxh7LzMY",
  "key18": "64GY6g6qpWrBoUnhYdJqGDYJohcnoXCjDQPNvGqvG7Up5yi8YwB4QejjGA5As26pQYXjVHyho9Bq7RnFjoztTXnS",
  "key19": "2WjN8Ykipn1WW3JF1CUBzi4Jkv1oQaeUAUZXeTkZx9hiBF84FAnq8kDTRysybdLURvhvjTFFLygGoiXkd49r7FSw",
  "key20": "2kFsS7u9Vp7WeLzMqJ9tMbTUjzZZGKCkPnNkbDzabMxMJSLSXaUN7YeDqoDsVHmKdXaUiD1vWw45vzFjyfwc8z7J",
  "key21": "CtkpaCtqsAfwS9zfbyZsqEqpBTcJtLezrC7rtC7ykc5tnsFMXvqSzHqmSFRuFihpUPzbvQDMHrpdeTn6NfX7WJw",
  "key22": "2C1S9Jmc2wCWy8ZNS4CZ9aj8EzoS91RptPhNWN6xSmqaLzWsQH95uiRRsLK2qK3xAAYti5vVZHjp8bB4PgWmCaFo",
  "key23": "4LXyZysCwHct78ewy3c9RTjVgYkGSnSSNzAQGNqWhJYouh5XeCcSPZfBawQ26Ca3gp2MgoX1QRJYNXkpzStfz7uC",
  "key24": "2KsUHGQcdkQSzMEQ5FbpzjzX1vMdXNRcU2GQViuoXRnenEpXWnZKW6BoffRbcEkurerUbPERmHn1j5M1iQnyo5X9"
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
