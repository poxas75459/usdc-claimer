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
    "5NAixCHzrspBrtfHiGVmxdxHYdGCaFU3YcXvaUr8ZxLDGcZVp5GEEmxAjXaEFkmwqzivdL8rx13veMg2Jye1ibGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RPfsK4g9x3PevcrfpkhnhGJUyF7LntDhsmDeDHZpg8KsmuukoDTWzpwe2u9k7tSG1qDxQNvQnjrYgHgUvWkuPvx",
  "key1": "2qUD66M7dK92g5n7hWkBHSLX2AaKbpUseoZn3syGCWyCtFYZRfTAkSRKpz9PAnPo79tWSaz9cp6pboCzNxhUjGzg",
  "key2": "4ynRHVNDB8SdpEFFN5rfzX5f9zNoyyrA62caiGNRsc3ddjhbJ2C7B2G5RANiWoAu9nPKTh3zMHH2mzU85Uxkztzs",
  "key3": "3PxWyfYFXYRud3ppvuSkJ3evhNZzJVgLMzmpHQZmrCPgcdcUgk3jDkv3z9xzdwM5f9UJEPHQvrZoNCmkGYHYep8J",
  "key4": "5oBtcTeMREo3i2id5p7mgXVABUn7dMSLZJJfYawPL1xkgvDLxVaP6e65Fo7tfiu1zuYwToCzyeeUHTXB97DoXLh6",
  "key5": "4qGUqxUp7axhQapJ6trsh2SoiL7exghmRyV8JiBjX4VddH79SDHckL6Easr8grjFKj5HwES1pbRMm6gXxFQWpzxM",
  "key6": "2iMaygd27iYKUsBVGk2JqtP1Ri5KH8jzd9bVGLjoccmnBqApmhASuvmE7utEDRj98LwN2C6sUXAtDwLv8hfkWvKe",
  "key7": "5oaBrbWEDnqWHC33MkaH592sA1wiQxrua5XwWdEk8VYUJtJG3bAdpM2eHEU5PHJYUHdU1EBye3frHVQ6eCRBnMDR",
  "key8": "cgvAAv8k4E7xmLPeJtYRDsUH6H4wvPjV8iWAe79gHdaMiFXyjZuV8qNjQ76K5vdyKjbFa2WC6Z3JZLkUZYWTfzt",
  "key9": "4w9aEBStUkG2Ltm7eRQLkA2np2vKbBMTLKrCavZZt7f2Kv1H4q3oy8TjSqaxq33ZiZTdd6pY4YSTL4iupBqWVLi8",
  "key10": "4yMemhRpaMEGTNFkd4A985Fure9vFYUnDmwUxaEwL7t6Pya2hYeBqBJKqDsYWUwcKetdxFfXdd1zmMXMBKV2xNds",
  "key11": "2jeSE1hwL7Yqyq3vbE7c6wnfjQJT9EgZNLAQ13jjcPnFgMmJRagYvVzDxebz9Pw65RhDxahAEepbFbn1UKw3vwUk",
  "key12": "3ed88JY5enwiAqbKWu5m3yrG1Z7MBTsdBXPBfK5CKZcDfundnoobaVsUTW7nKCtsnEExTnkY9Mdaau4n9JNnyJqB",
  "key13": "3FXY7rEwoDNvGfKzePrNXd6JADD6o5qQRo5KuWzcHPfYGYLo3DrmiUp8nMDU1b1sLnEht7ARzuMXD3ggCk2uHwkx",
  "key14": "2dnyBqc41SpaupXzX2KR3huz7neVdKBurSzgsDYaGnQ6FFc53TdBxpWR76H6vhJfyRy51LevtmGZ1Q7nSMiJybNZ",
  "key15": "5X4Mrw6FxQob1e2KKbCiWfXFR4ckTr4z3KLT2pVUcT6ood3obwCJuCzXqAq29bEFfbhBDuJ8HrTsN1kjNFC7aynT",
  "key16": "4HutiwZgoCn2THMEf6UpLZxB4VLN4CzZ32YFmdmD55sJBW7LVT1W5L34QTCnnemgAqjpbruvJMyvT5wtTjhp95EG",
  "key17": "2yzdaMSFBsNJpgKv2KtYh7sF71UD2aV44Xp4AQkYCT3rFPAcT5j3tekKvDwxwcgifDM8FtGi445zE4wp6T67229U",
  "key18": "5PsCbHtb9ZwsEVmG5CaLHzBtZo3o82u2ivCmEMwkuT2q3hDZega4giVngvJj91iWNNkNVs5a9AZTzjhmsxUUXMX1",
  "key19": "paaWDyD4ZfqHKnmD7q6CTHY8JusatZRgG829nJEhbykbVus9JratYkQbpr7fbTkFFkjh47RL4nw1tk8fs6g9GDu",
  "key20": "2zUs5fQqTii7RwoGBXG2aW3LN2QPbMx98uSwr7dAF54A3dCkkrsJRqWRy43Ra1z9sFexve3vU3wPZ7c8AQvqGHEh",
  "key21": "5d96fxdxXYppUX4PEu1DHQPuBzDzws2GmTNxtwSD4rhXquydKpj3AQT89SmPXEeGP6crkFWmQgc8h6ZTsau24n4T",
  "key22": "5HK2wyFyJc1hAKY7gjRTQ9DnKPN3mMLVXW1YqnHkWxtFevdoFRF5jUDGHuwGKwzgTvhjZ29TPUiKP2PwC9UGqaAm",
  "key23": "2RZpRJ2dEdEATLfKqkud1iRt3nmSxJLrMry4vpEeHC6muach4r1mXhfTLxzJeyH6oa9tGXvTB3Nbo2qpkV7Bau6r",
  "key24": "5WpkoXKMVif9bY4PxbXzULCUFGaatz6FS3PryxJnLGKvw3ktfbXcJ1W9t73V1zZPh2s4V4no8XvJqr6scAtD5mNt",
  "key25": "5JS215ZFzSjZVPtwrSK1UNzybqYButcyhB1WXUYwBmFYwTZySY74gYspgh3naYtdKC5WrjH7xgdWYVxK4tPLoeRF",
  "key26": "ezKRiLMPGWYWDfW5z2eDBsDxvY5C7K6HBWJQQKEnpcMPrd3GZseWNdb1D2bj6yF9DxJQBN74Z2VBz6cudFVVUXm",
  "key27": "evBs3xhUknQaeBgPGSnH4hobui36toztJ1dwdemr74b7RRu1wnb1Hx1TqqYuefjTz1pGWFn4rE9VEjDUCExQYUX"
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
