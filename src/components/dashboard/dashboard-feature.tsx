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
    "4FYj9FnoiacsCpzS83Vg3uAop9sW38b6a14CYiw3M9gQjaV5GhndJJJMpjRUa31EBjcwUouYhZC334S6v7EVg8i5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LSe8PtqWbcU8FEwFNWu1eXMA591BD4SVMB3nqP6iNBhPM76KY8qzHMA4MjBw2huNwKWMHT15wCy33g1MpaFS2xv",
  "key1": "4JuBVERWQigACe5rNNNnzjrJ99sUjFXZYPgwjjcSFG5aouymQHJZ2FJF3yYpKnchEAubFqG3uA9ha3fefLZfiWNg",
  "key2": "2E6EoUQ8KbRt8TpEBWPicWZJwTiPLsKqe6yrRAXYuQL6E8FAjfd9hUTimXKwGXF2iTnWDU2Gcigt4ef2mLZuYuJz",
  "key3": "4zie6XDuYAAqnkACwFGEQpjeKudCYg365sYxt38zw5ANF1UXJhDmCrkPLdNd2GEMs5WQF2yPGcRMPKHutcom9Muz",
  "key4": "3kqeTi54M4KtswShj4VCjeMAFFKQ4cfNeFX2BWwMA5mVQZRMLaGUYEc17DJLXkVCr49WaqQ9b5a36vwVHLLJWSz3",
  "key5": "2XBUBpvgyu7jqzX3TxoaUSxips5sFzNbaRacgMshxyX2a39HX3okthBEs4scCLQMhDJ2tbMtvzQ9ajwg8BPrwzTE",
  "key6": "2zQ5S5TzdiWqWPLEoPd3ovHC2Y5R2YHLnjmtpnuMYHktC3yEEJRqowesfMUpLjNUd14YkD8ZtMZdZisHH5Z136m4",
  "key7": "5PriQhpUvVkPEvVarApBsSzWYdKuurHR1vBBpFcRo6Th2rZPuXFTnmjyDBdXoHquozzRWXNKPGLmmwyg8F6ghZfy",
  "key8": "5TM5aQWZDg6hr5WWr5NSEbhPRJt1bJmbdGFiNmgaJ4tQgdaLDgsp1ueFRDi5TfdjxWX2XtDueGADaDKNXucZg99y",
  "key9": "4rv6c61KeZPpTLY2yDtRgWChF3sisBU1gf4j7Zsf4jR8bvRCjTizweWCb1ZbYFbjheTK6saeVtXBS4FrfP9kpaEf",
  "key10": "vuSaXRKBc2vno5qBk7iYzkJuXqt1tsNYpohAuz8BrwQ4PWALx4aEnpmuUC2ffciFJ8QFHPsjzWmv8gUbejA5ZqE",
  "key11": "94uvSC8iPt3vDWG7LfrCw3ucuDcqqdfMN4o8iG622jeUEzirZTPnmAfzgcEmhki185ZzrhRKgJUVpQYFR3eiW26",
  "key12": "cz4z6aGsRQ9vCFonXyRpZtGCDd366YDaWNaTb2N8qBzi6eKsRsbLmULxEVDHmsri4uuVue9vWjnnchdCAtjoHJH",
  "key13": "4uXWQKYtG1pxLxA2EoZVxaUJnQ1fUrUWMwgiSZh1ZUgpempb7XkGxMKjuVP35WSfqFxS6R4VbxshvPJke3uNBtfX",
  "key14": "Vei6azz1LSV6tykwLx3BCfWwXeKUcHKu3iR7QJjnLy3gPzUmGMDcedrdjC2dnoMCYfQrwAxAvpHwmq9qGfEtohN",
  "key15": "67VLjB7J81HdmSccDFJaKBz7kcsxXYxRkMHZGE92vKSakDd8Q28eMDABWGng95yXZDbZ5WNftRDYCRB5eHXFLgdv",
  "key16": "4qeMdfopRQbVtBGSKcVHek1UQT1s24sW8Mt43yXUgM6v6HsssZdK6EK9QGqgQsbk9V3PMmJg7e2HT9eRJimWUHH8",
  "key17": "mR4ZXQwJ2zwbTM61T7iTKLFC3iobCPKosCB3EP8gTPnkTXGVwTeRSac4rEVqRedDwdjEQ7fSGM3pY8b1y3xUbQs",
  "key18": "5PHcVzwVbHebZYH5wHpiXaVnvtZRYQPHDmz5zNahB6dbQfg3XUXioff6pvYJzXgYy9ZFsRJGRdZuFS5U7qVuhtNM",
  "key19": "3DF9yDzHKKY7VtEbkVmzFSFeCV375H1RBHUSvejYcLzR1YPYjSsMAQbJUsDDPoCMF7xCUvWciDRA4VWe5rQTCaJ8",
  "key20": "4NdEvVKyqQABYE6pA1TYvofB1gRrjG8ZjZCVivqDhxtnoUTL84dbWUXL4KJ6NWoQ9a8FzTKZHtrvq2zbiFLs6A9B",
  "key21": "4TTMrADgso6ZvodT41yN6873GDAPrP5JZMYN4gds7t7wtZZamwxoMYLh3padjaoLUFwziFevoNactENS8UPrNHA5",
  "key22": "2UP9AVFjE2XRvBe2kakbGF2soZjv51YjUsWQb1Kk5QDknTTHTfMYxFRCEfG7cmbeNB22onZWiw8hrEvVYBj1xSGv",
  "key23": "8c9kBMqo5TAA4sW1wvSDwNiCrZSDfrX4frVGNeRQNGskvBDjqTqn8wcASFu5pAxo2aHMY4jt2y2vHDn6PbQ1Xgf",
  "key24": "rtqW44sZVvDR8ndEyhgwTH6RCfWRp6sLijoYy6vs16WeqBXfJXCeZ5pu8JrriMCxqm5xf1eGL3kR3kPjoSNCxac",
  "key25": "GmADiEcLfVs9epXJ3AXwbwgMrGgJ2iv4RwXYFbPovhUnbQdibAUH8Rqj28kv43ea5WSK3fUG6SeeWLX3zZSLCdd",
  "key26": "3NvvqJp3w2ChED6h75k6ewWmEDBfTRh2gPeaUMENWSAHGteoLqqVQfXhP6FHYfN4Qvk47dxTwLokGSXpXPE2ZUTa",
  "key27": "4WM6Dr1nPDSDUU2EEj57atdXxZm9WXiBHUSi6xY5o8GoKNMx481aUuv7e9YdAEEBsUftv9YCo25emhkLYwh7Brp8",
  "key28": "5ndv2x7dJCKXDWCYVeEzXXCyuWw9cFaX2ZmxsjfQtYCGxRuQaDpc8oiFd9h9HSTpKyK6236GeskBm3L7gdDtMPoE",
  "key29": "3rJYiHHedpbLaNDg6PgUW7akUrUZA3jxejyrYMsEwUCZj3A9VNEuwaiVw2HV9wHbtDhVCCxtSJu9BfP3z77PsCbx",
  "key30": "4vFcqV1vu5s9XLGar9uwTxva1JyHdVGTJhcu7PRY8zGfXBMu5FVCbNGquvsouBywvJkgLZWfVpz4P2f6c2P2rTrJ",
  "key31": "3FBUjzKtxL6DNqRfeFARo7Ezt9cuxod1Vp62uEYvwkpfjiYUUH55Bg2Xor7mWkxAwVtY2WDPxg1b4m1mdSmUsB5e",
  "key32": "5PNziWFCYqfiEfn9gXcSiNwh1z3oiF6vKeBzfXvEt9XdcwELLTQJE4rrx3H67JhAJTNMdocj2r5XqPXxdnmaAtJ8",
  "key33": "5bXz5cJUBHKehaGanJFFjNBoqMnwhTGQR9f5GFaKU6BR1nAhVNPVS9VQefiQqwsDq4b3igupXbDWtr9qTJEv8cXj",
  "key34": "jV8u1ZQyWp6sveBp4ppeTjoHWdnC4ioJesKLdMN2Bi1PC1TcjXzZ2EHnPQKEcxTD1k4CRMUXjy5gXB1jAyoDheX",
  "key35": "bPtYkNjNq7Ha2iAA8QFi6gawTLKTk4AB9aKahZJKpoXRErMwu4NcMDHHBGd52ikxEXLZHsKnS2rB6urbryW2ESB",
  "key36": "4iiK6WGM3J45Adn38icSMrNnxPw9SVQyP2TpxWYpzhPABn1jBJSHyR13Ec7tUitzCZz6MYJy4X2TjnDAHKGCenPn",
  "key37": "4TnWbJ1o3C7MGCE3i2jzKac7NAQ5595X34PEVTfabPDnoaY5B5x1uPYLxse25wE5a3wKHH6HQPC5zUKTMAzWBRHi",
  "key38": "4RMBrwjZ2aKkTezavwnhxTY6sfdJ3qYUtHQvT3oc1ePnh9YVdKyfxcAazSYmst1oXJkK9CGBiZAYAE5L1h4YhFjJ",
  "key39": "4F5qTn6ZvGfGibB8Whk5NtNjmeENZNuyfH8hHVWyB8fdZ4trXm2JwCH3jquBVvbZEXXHGxc2vx7A1emBULeiogxZ",
  "key40": "355aYcxmUjQouz7y6wrWU58GUfS3qLEaHPEpEJsYJqJAsY4Bk7t1DHFRrUPG8zTANiAoNUQgWvWZsBmWzpYmCorZ",
  "key41": "3Utvgxfa7QVN8sELYs1hqYZiVan2WGgkRs1hVVwgrjzXLTwNB8Usr9i8PxzRGXpYrTYtfZNYDHmQMF72VcYEWDsS",
  "key42": "2kq7yUfn3k3o7Q7bjT66gNRtjPEaenMwEKH4uL4nwSFwHnxvV8itvjnxnxF2nZGQUtuGaB9ZxrxcJFxVNviwcRmW",
  "key43": "j1HNR4xbcN4Lo6wt31ANZcG1oyRmsPbSR2iccMrwDcHbGmdA5E1NDcSeCktUc6y98NXWfs5FnvT4UEbbqTiskdF",
  "key44": "7sAYhSK2ZNDyCPNpvx1R56nv5MXfyt6VakizATLGyqnYCHWTLqwV7gU1KAEA4M8aioxyKLkKbGiie4xYcqfP4Zu",
  "key45": "dUvHAaiP3mkRwbJYGNk95wizRY5eECbtiF8DojcTStrvHDKqxgRzkzC622aNgZUt8a7H1Djocks88srmymd99WB"
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
