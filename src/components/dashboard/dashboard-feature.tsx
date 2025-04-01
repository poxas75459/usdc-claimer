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
    "5B1BudYYv5oGnsA1XhLM58PQNe8rGgSnrEA76GYpbPjcEvaD4XJB28W3kxCbuHKsWj4FWPaXcF5X6TooyhQHYEG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VYtC6Zz23qN3uY4te43ixwvh2bJij87i7G3b32m29DWAByfE579z8wsLAqygoKHiYrbzhBVWaL7Qrw8PzwLytQ6",
  "key1": "4JwNv1wxvwLHcCorFHi4sPuJbcu13HyJmK62LDBRVsfUefiv4u9GXm4oqKPnm52hT9HbEKtUTDhMKPtjTbYvt279",
  "key2": "e1QEHZ2r9nLNZ4rwsMh4XdPmDUTm6ZrJFcpaKVAJ25sTnhohzxfC6Zxb97wPFveBDUyGUC4VSnYwGMsNc5JbN6f",
  "key3": "3EyJqusBR1vZuS4buDNjd1KWe38yFRL7j9LzCcymFMfZxcDkospHfpZ7WnCq9WUSKYRkcNQSFQJm6U8czBNgyKXG",
  "key4": "2o8CPKba9Fws15dFv4LcjxzX7buzCHa47AToJ6sR8iKHmSuwTZMmYj36463Rpy5k3csKv5kLRM83EzBwqfx2yEKM",
  "key5": "2wVRuWqn7KH2j7T3T7qpAb9Fu2HXjknDWzgZ7vtjc6D2hsswunATCor89DVXiKDw11QseCdmU3GdeWfPt5nzGwbj",
  "key6": "4Jg6DNxC71b6XC8LAXT9d45cnKd6fRbSQFSbQHb22Jsm6K9aQ6HV1TbgCfuWahioifGJkAfdF2SRouyrv2rgTNwj",
  "key7": "4Jk4C3bXuBntTQDK9ULiXC2xb3c3D4J5wJBujJEJMxiPVqGhorddfMFBqbJm62aSjiMS8TQTox1GKM2n3i7LCYWv",
  "key8": "638sRirWRetRBgpEFsdCNbSvdANoyUxGkyo9H1wH3te5qAKbYYvKNTqd8aRgLbvw8tY2AvoBxsFy2BBQrGmQKBW2",
  "key9": "4SwGiyx2HjaRRyq7Gd21KSexZVqK2DTySQXWTWkbPiXtGHjQ3WhS3CB9FTxJpk47TcohV73zE7kamgqgBTKBTcTx",
  "key10": "4LtTN12rBWzc4SfZgiL6a1JmdkR9sc7gLRXWe7QNntwbcv2ibWH9S66RgCq5xAg4CnNJb3b8Nn5xxztGLNSvLdHs",
  "key11": "559W6PkZKCX2t5fHSHXt4ayqK5QuRpBrY29nmBSzdMXLPiuEHSxJjSXhPcYyqfiPgtZdiczpSK9rTzQiYzvudB27",
  "key12": "5EiPhD1vzjWa6fDXUgXWdZR6dHzNMCoPVrxcs3GkskW1DshaiPAKALg59UJXnFNhR4KRUJLqeRgGnUhbL7jkPzJH",
  "key13": "5BvuQp1bJfC2D2ZKwohB2GFSR1ndEjaFHbMwKraDnF6Jf3GtBx9uKuPSYo1jwvjTB6diwW3hUeLt6d6TyVczP8Mm",
  "key14": "472ZukemYh7RbWSMSLWPnLNQudFYKwgenT9XD6Dvskw6Bs4UH6hCch5YDBSc8db8fwhLUZG1jdgZT8GWeX8CJoKm",
  "key15": "51DwrucakpJHtHRvzwhyEK4ZsFZCrSzHDJYx2woC9BtMriLdA2k31BteTHqsb6WhQNxR2Wsogft9u14yswAJCkie",
  "key16": "4qA4pC1yJHFHaNDNjdKrDgWjZTyfxpFLYY1B9feoR3k3ijA4HPN2oGnvMXDmTm2zXgCyL17tnhUBHUg6yo2rcnvh",
  "key17": "3YQKYN5AnRjC7SD11kLJ1447pyqXPBKsyMio6EABkdpMg1ifRdnW5CvnRuSKCi3RYkned8NUiXZu53D4MKXvtFdg",
  "key18": "4mHtLHqgBwtbkF365NfjLbMeNHyqR2TWQb64AW4USbPeEGSUkqa7Hp26kHwu6s7dUEiGe7Bew7RpGXww4QrARJJe",
  "key19": "4K44is1qT4zh8rSFNmdvG9wZaooJzzZVPBXvYMnNvtsoo6xc4hc9T4m5jVgUmMvS9dHw188iPgu6fMMUyvUFW14r",
  "key20": "5eH27j4uq9T282hsdR9EcbaQ5VeGfotPkszgg3aowCSyJr6nyRkSR3KBTti6UpCYjfjifZxHkYgyxWbX7JRXc8t7",
  "key21": "2c3G6gs75D7E3K9Fd2j72PDwmp98LCFXVGmABZFaMBENw4rNnsFFAaD52FcbSNAt5UAwTcn9pqWMn16BzXSECD5g",
  "key22": "UmS2T3CkSjf8c9fwUj4xqXXZFqvB1tfuCHjHyfvuE86ZCNxDhFcPJTV4GuThegvKLd21fw5VhyqvFiXdfdtTxPA",
  "key23": "5mqKqJohYPSSavviTocHvwNGWuxrTfdzvuaVcbGKPaPHzcmqZEGm74zyN45YgMGCCLkGRb3AQKv6gBJpNAZMzGuC",
  "key24": "3ukEqxscbZoE7r9ur47famhR8haVioma7fRmrFW99YSnAGMuQGRn3MjuhvHKkksLk8JUyeSEvqUZjuRkk6m2W8Ma",
  "key25": "FoAtL2cjDvHJcM1LCGWQTsSLosFZ98MQmsXTFowiqtuePuhfiwnd9dRJaeLTvnH7yqbyKfz8PtwiTK2t4CAR9ha",
  "key26": "5iWP5f4JBrD9LyhELrPCU5QoPfrkPxx6YTDcr5KJSLZGUeasyqYLRiEq5pZyod3NhdDqLEtoyj8FPW3djRYRj2f3",
  "key27": "4mdZZuVjPvh728tbfx5FncPfjuVXdxgPVr1XQSRUKnbFVztQDe6L4CA8m5sSHo6WcNgS7an4CKAxFirLqRQLQp4T",
  "key28": "3dFyEtsXZxZesKNe6uNgVHXzdF7d2tfkhxYJCs6cYF8YzyWGrSGUtwesbppeihzQpfj6XYbhH5jSU7EkEPgbvD2B",
  "key29": "4DmF6hDE1RjHje82oUfW5755gjY7zK2u8e6DaziMA72tWrJog7gC4NaJ5rvnyi6XMvff9zpskE4HBgjZn3BTrprk",
  "key30": "63cyAmv4jLsju4rDHkyLUYwMDwhgVP1aqMFG2tKGokT2whkM9yvkg7RDeZv9eK2tqz8u7RASVNFRtvZirHXWm9mV",
  "key31": "58zUzKccEt4sA5bTJaYFjCREZykEpDmJ87Av6eppDW7VfSk6CpCa1bre958qFTdoeu7SkbL4z4FYDhuxkKtLmhCV",
  "key32": "3sFNvr7dttpVZHKwpMt6k7SkmGfCsEr3a9vifJhpSuEuddP1TY6vEby7RZqdHq9gvAkyUYZjkqgpa3Ruf1c7LpvJ",
  "key33": "4cv8Z1JU45g5yChEBa3ZYdsoRhhax26gyPoHLQFMiDU3zgYRg9BxVy5fEuioCh2i3mATA4tDBpJwUSVNRmbKv1ft"
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
