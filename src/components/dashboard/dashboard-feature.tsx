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
    "4j6QwE3F8YYSZiNw4XKx31BQvzNW9EwUXXJuwTcUwJHajejWdaJ82DWjZvQGKH31uqDqVHDswhM8S2TUMe4YMcjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JZs4Pc781UNCBmeDZjErridUV7RjyVS9ZXoe3YLx5WpCKZBV9Lh8PNWQYNNnZdzJir2swXW7ZNfRUQrWzKLgHWx",
  "key1": "4HXLLAbWrqmRNX4eBbn4QGDvPnVzWtc2JTM7UbgduqfwHzSqL9BxJjCT9LQ5qKSxgmFrfkzoENjZ5RGT7WTHpeL3",
  "key2": "4YSDah7YE1W2FBCYoYgiR4fM4Hd734t9tzoH8NWnX5iWgM1QCRFkxhQTzkG8ep2EroNWxT7NyFy6PyrmQgSBYitG",
  "key3": "jmZoL6grYw46n26mY5iPS5eBjDvdW3q6EqCFQ59GoX29r7MbUuryZQ4VoY96GxfT6HoYj9aJTshjuaP2BXshuUp",
  "key4": "38gfiD6u9hD7eKG4GdTjVFrLx8VCrtBbnQrrrpqZGDKnXKxkbyqjiBRUmR3m7B4aHWXina1744KPLBHQedxJppPe",
  "key5": "AxEbbrTenYSyu3pWDBsZf9TXR5naHD6u15gqtpVBAPXdQiAsR3tvMXzGLvKWEgUeDiHzRKmSYutPfunseTSre5d",
  "key6": "4LayrPKqPw7dHXLUVEi4rr2GpEwtSYeSpaDduGXBjDeRqDx3LrfoaheTwZPWZyi8Uf1BT3jv7uTWKghhQscdRkm8",
  "key7": "4H48hkHvTfSjqhJ69pmkjoi6wMLtrTRaCCCzYFka352VSkUQtT9H3DvPoKPY68BqEJepaR1t5YcvVEx1kCxDykt9",
  "key8": "21reTomSjA1TB2teNcey9fhiU1b23TR2vG1vX2optHQhs8EioopB9xFXwVe8fJQjmwGtFgzXkrVL5KqYHp1MkwAR",
  "key9": "3Qsi4PreCgMbLfd5b3Vj6LTMA3GbR6qt5e2vvwJMNV5knz5Cio9kkMSzuzga83Dtd7VPD1fV5NAky35sFFackBqy",
  "key10": "6wGyWPtY2iH7fbekWZQwkFiuSTZagVxfrP9xQXaPQcpHPfk3t3B1aqRMa89pRM8yx9q5bBni57meVY4zdU3eRuF",
  "key11": "3uLP3N3NaAhZuS8vhJv6foAyCKZw6XqFuN3UZuM1xxw2S1SqaRco4v6fugrANYTuXRDS8NJQeNxJY1EJD68HFikH",
  "key12": "63nuyPGaw1Au95sE4DQ7gd6ZcuGEQX8awtgnZ5FkXUi9XatxbsSTbTifj8uoyrg2LJZhCVWXn7s7N3dhowDGwfxq",
  "key13": "5KJL1fJtJHsXGm95gMAbzDpfyK1n4sqxENEXT6NhGDaP5G4jtXMf5n2L2avN98qArhXKbcE3hU33VWhgkJx7mhge",
  "key14": "3McCnH1jdeDz45rB9PgPzxmC1emimRC1mzEsx3b2Utowcrx2DXvF3QpmDebGR2nFSpFmhapznZmZFmfsAQKq1zkX",
  "key15": "3DMzvWjGWKUN1JcpLVkK1krJEmkx9MyoN7bdGhhvLh5dxBuSyRWA1R6CuwBVjTL6qSqTELZSYoT3JLxhwLvuHwYc",
  "key16": "55jtTNs8y5ycdQGz7FQnmofuYEpzBgqFacFFtyXihgKjCHbvXzZSCgidSfPWMskvWCpnCPrb5TZZvWVU71oKTqvF",
  "key17": "2ui6eMNxaUpPTVFs6n3CmWBCXv6TcJ9sWYWpdjWpkz9wQ9tXE3W3bNDQUkPZxQSZ7rJ1TWpBrbSne5kJN3JYrVXm",
  "key18": "4bNHEAuuTA68cCmCyqr3BLYwrwbquGZi6PxcL7zXp1GocCu8xxopF9LGMbjQLztKv4XGZvJoGZFdy2BomBmqyKdo",
  "key19": "2MkCzHMGdjTLXhZY4pHtaw8mxfM91ytZ814Q75T9GLJTNdWFD2ACh1D9Y7o3XJk4PGWhDoT583AXDcwR6hgk1got",
  "key20": "rab5K72DrZbqWmiC1bExELF8FK2aVaJti7bDuaHAshCwdJCDvNfUzLXckQHGGmWvKLgtAPM3UjWf1X1Dure6HYz",
  "key21": "5hafdBTRgYPh6KFQ7JmNfYmZdY4TuX3SSpqKjZAVU3zyGMpCXR5peFzZtQGs155xrvh6msWwSWxMxKVk1CArQ3RE",
  "key22": "4MMnBP9jNRwV4hB4L5az7nciUCwbGWKoMJ4fginx8cX5nu1j5qupkDhcJ7H2DJ3nGXWZwacdawqonRq3eu5VRc1D",
  "key23": "4Sn7bF8mGTX6pfNWQrjqMUX9cSCnvtHZS6hJ137LhrhN5mn8sMHErFZLPqYJgR2aFBVY3fGeg4nJd3LrpVP1LpPQ",
  "key24": "5RndZwjd9KEpebGuejUkR9G5zVhtyBsJqjqNC5JpSq9EvtfJF9yEcgqqZmAAsjm6K5CvvVupNRaG99xGj6dgtntt",
  "key25": "3NDoCmAnrS9mGWucDCVWmee59Z6VKmHHeF3VzbjCHmFXpWAKxGUTuek4Xs1HFYwE4npJAxc4T1FL6kh2FbiVYcBb",
  "key26": "5VUMpLbxEuAsMqSSnVhWukbytpKDLfMHh5fjQ6JcvVEgeoSL757x1Bx2jCxig66jbMG9oajarUeUZMkLjPDBmtwP",
  "key27": "2SoW1NNrLN8tNapRZaR9EqeTH1VEXXQjTmhYNyAo7mnVqvW36ZjAuM3zrrVrkQMJPoztS2fjS6sfAyZCbZCt514Z",
  "key28": "66ci8NKEYo25YPqYXuabZNgxUd42aS3c2fNVe5L979ExfReEwkeTmNfaYdfh8QA7Hds1MK2dyG4XkbK93CcFmfC4",
  "key29": "xZzpmJLiQc8Krqv59BkDcqpKBhSobqsvue8mgbiXLc8WfXX7oPRTExq5HmZvT6qc3ZvZWWhu72LdJiphgz6LmpZ",
  "key30": "3EJ22YWEGYpSAfMFHcmhEaAasZB1KkkTomWhY21gWYweb7mFCTAapE4asRws8tWrHWzcwKQ7BP6xQAKJteBtBeXi",
  "key31": "54DtSdbEKp8g14BUYXaMzNnWjbrPwkEHKxL2PYeuHzusTwn1FUbf8HbmDh8Z7tafsJUcbi7qtSGPXfV1nSV3LMvM"
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
