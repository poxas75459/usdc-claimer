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
    "26F4ZkTFvDirnCEy5DRjkaca7fxeaiV5h4hnPoFYYVmN8ckH42yMjnHMTmuoQP4rVfzjfzQtYwx3rQiYjGCcSUHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dn8SSrCK9h54rFcZHjqSwD8cEpRHogbnZ5Xi8oj1ibHUn1ipgDxsp6C9dR9U78C9mRzHUQyFY81PR6xagVwv46b",
  "key1": "2Q3xpsFH2GeMX9zg1YKKrTamv8xzUHr356Dj9vy7TUqW6D8Z5xn9EWLDqAvNWmYw8cgWGhQJJrrYS41DNQphy5wH",
  "key2": "2dzRtTRQ3wineceee8YrEZJmEicQoqkMQYSWcED7sDHb6vvm5WZKLbYyyaLEdiHvZRTJjMJy58fDJPnvYa6BC4VK",
  "key3": "3KTT72o8qY3r9VCN8DHFxBRdX1XGWzuy1aoBiv3ZCbqewfr1PzDrVqkcit3FebvLJy6hFGxszuRXKUva5V8uaQtw",
  "key4": "3zEmbCSFVyHUzj8M7LFz6va8kckuAeFLG8jLYnPjkidGH8kvxDoPwjByABHDJz3knh8jrnzNEqyhRi8XYabdDFrg",
  "key5": "339AxVp8cgje6vyetMCzWqqBDxUuyTtEeEJh4DLdzaRi55cc2TWPkcV2ekV1r6M7eG6QPPXAW3WC5cQY6t833yR2",
  "key6": "5Sb5Sb73HbF4y2c7JQr2ArnVGGyVwYTYhbUZPZMQdntNUJFD6XVzGwWS6EisdHVaNxrU4sEo5gqJ7faj3Pfbwgv7",
  "key7": "2WGRjfjVEpajwW3iUiwmwWdXi3uTKzjusjDuL6YrDQ1JrvNUgxo1M2oHNXnvDwjsfbbUV4VVGFePn2uLxMAQ6hrM",
  "key8": "2BGW5Erz9M7QFAmrfczB8w3cw9R4aNrfzXYKwTmku8e3V2ng2TqBTfwqPu9KE7JBk98B9YHVYn3EtpfTKhcoGuBU",
  "key9": "2ZjV4nUb2r6JHE6w1JnxDWbcBKg4HyFr4PZCEQMs93qvL7cFnWAKqBqnmrXQQ9wZUMcnquBwnmVkKiPbsCu9XFrq",
  "key10": "4HBkYMGN86KH1fkQJWQDBM3AV1xFtjSrt8FgV3j8ajXVWv8kxH1RepYyWytByJmskkRThkSUo5fmgvw6nEKXyMqR",
  "key11": "DjPquHNpRYWX9rWYGVqTYPaqeaEM7xzDFpE2qP2Pae6zMyvusSosLaoxi79DRkNwDQXYyXNw3xJx5KMCWg6mS5t",
  "key12": "4n4u12tzdi9cEUZyLHTic2LZgXvwHT2ymxQDpUYD5ZhkBM9STiefT5s5xtfVkyKxf6Pf2RdxdbZ71Fa3nuRUEWJ5",
  "key13": "32RZgckD7dyS1vN7Zfx79bsnhxsmQWLwjLG61shjUErQTnVdbF2ySe5wXcZaFCmEN4u2Gv9kdBZJZHXPoVUynk24",
  "key14": "3rVbAnonkEjj4wotK32RBhii8ftRN628KMmn5wQ9YerDytbJh3g9M5bMsE413bkgjpJZo3CBUJDTRndGPWB46vVw",
  "key15": "2uePGeBmpT83DLNKjC1ACxa4X5ThA7zxqeKiWUReW1xk9LAWSdP3XAVZV1zZ42koNAbEmGvssQraVGEYHGzMfyC2",
  "key16": "5ntiYMskUe4Puv1zwna2uvJM8HBBuZXcFVrf9zv4Khu5uLonCU5swkBPjjQD53c1mWLMnN4764hwJRxWrkK4xL49",
  "key17": "2t1FVfidkEACKk78rWVC758WMiRGNNEqMP5cjWAKrQiF3NrUdDYn9jy1UscaLfTx97whXp8bb2grKnVVpzKfpJsN",
  "key18": "sY1qaPFZoMTVHEMbUeVrC5JUqoejfErBZEbcxggxXotoK3pHXsBw2fjxHpCEuK8QQ4Uxya2UnSvY5HwPD74iGbY",
  "key19": "3oxskV4W3v16Kt4UJXodnzVjcu7DjvcXRw7twBNmzNtQ8vtVjoNkzSTsqcPdTUH8xVdUTBaXE5jKVPeuDoqCSS3t",
  "key20": "5NNw3LwvAdoz8sC5E3Tfg9MTqkwgPKBF2xEw7oPDYrsc2wC1e3iXLdz3UA4cLkCQrMunVrEge1kR3XEghGNzyrnD",
  "key21": "4DiEAMaAu65nSy8s8MBGAqn6pNksMR7bM3SU6XnbAM2rNTPqBdCgLkaDqiuG3mPBN2x173ngQdPgWBCeR1WrtDTE",
  "key22": "5frAnaKu6F22FCBsRH827hgsPRtBPj9jCd1zRFPtdqTMFGyRqKt3Xp6w5VRDimpZxStzr9TUQSSTxXqF52ZU4Q1Z",
  "key23": "4HG9cs5jTt6b4SKUx1yrziE2J1zMj3cXGq9v32LAX4AUAw6Jc8NGLfeNJbrU8y4LQmFGbWC5uxF3FawTJxJf8tfE",
  "key24": "3gqZEArG3LLEzkNN4SVeXbupf28tft9PTQNF2s87bvsV4RJpHgAN5QEe1rc4T5cdnbXop6VeLbv31JcCRwe4X7Ew",
  "key25": "5gG3UxnvgTXEmjHFCg8PJdGnahBJzrp33SfeRbWG97JV48XT9beS8W1fdjrnXAMQyVNtJxLEyj7Xac7MPPYzVEn8",
  "key26": "5Gj8e4NYjsVxKLgwJ7dJMxgBR5DAXD5GjoNtxXdRRBAaQGsQU9ibWi5MRzHxBtRyL1ZM8SeutXnvZYD29BKPkFyM",
  "key27": "3Yeq6DUBBXwFjBZiMKBZxMGDvPqBx32AAqGwjBkA8AbGbxMh6fUCYzrZDRyttK9uFdKSZ5QnbCKgeeRid6i8uNYz",
  "key28": "2ezifAaELdSPhM3qdY4rtpssdo33FPiQHKZwANyTW1fqhd1VbJvas7fGnGircAJUSn6my5ge6j1MX85rEhc88b9A",
  "key29": "tiUvLxtFAmhVg5Mm6dK9Hy6Dy4rycn5U5a5wJiGsTCSTEsTagjaNmgm7MMSbpSCZFAMtPzJiPNDkvHvC73XX156",
  "key30": "5cao596briuXJB4KyzKX9rVxzScJxzkm1pPhgvgCav1yW655d57sGtZDsuTE1FwroyLotK1SE7UN5QFLtP6FG8Wb",
  "key31": "27EyRJeb5yQ29T369XT6rnakujdHHFvF7jTkjVKfphqo4WXUxVbyy5rgBqz1FPaiTJJH4DXCkMSLvLzz4DKQCFbu",
  "key32": "5QdtpQ7FQ3DvDeWcaoy9gi89rBSvqCpzkVDqcbhng26xnj41W4Vnqhuj2cqD3tjWLSHs1LefPrTiyRnnVebqWqjb"
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
