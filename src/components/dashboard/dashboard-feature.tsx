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
    "3M66Qeww1KALuEQnpG8Fm5SpdPGtN6hjnv3GMpTu8E1hsrkXdAaYcJNg4EDMLmhNEevkiVW43UmUZCfUPYe5Wvz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sceW3qMRPCCEhVCwtuv4w9rNYL6bkhcQ3zcxjB7AHK3LqLaqe2TBQnTYgzVKsuJiTRapydc6LtnWSnAGYKaKeQR",
  "key1": "Yo4fGUWmHWWYAyLR7eqkLx9kC3eZyHcKmeWhckH5m78VCQ2YgpPBUGhH8yfsRnt4MqTWudsbm6csHVE1HrSNR76",
  "key2": "uLzWG8J1x8pH7wqQuws5MdqCqjXUfCeM9DAjWCHUUR3LHCfjjwU5jGzKj8CytbYkDD6kAVVuHniB27mupRzPQn7",
  "key3": "2WJ8PnSeAbmRAqTzgYvpc6ruTanbDDo19x7b3MgnZ6dq6hXkn6esDGSNu3DFSdBnDhTx2csuEC8aN7sULyDa42kx",
  "key4": "ZLhKE9o8TMpdNPQb3gdFTpQxEzVABKZJdzoXJg4yNqT96pScLpmVpsJRgypL4L8Mo7P49e8cAay8QT4EZUUFDHi",
  "key5": "3aW1d7aFXs5JL2JXhN3AbntRzScVQ48H9VSJD3MP8SNuwfgWEPbATfkkYeCedXSYMNVva4ci27Hv7fUFb3ypysCa",
  "key6": "356feVbvAKKto8bKfKspxVtNgi8C9fXWsaxaGzqrCfJg9dY5Jf5rwUGkkvHyJTTVxKyiQXzweWPBBsNWnyVruoZJ",
  "key7": "2CL1hBw8fcqmBH4wprsBzajZQYnh2phTdvpnwKw7H39zKhRpF1g9ipNkjbFZFzXUMi2EsVzW2d6qjXjhP8esdrU2",
  "key8": "4uzVJV5yApcN945CidphbyUvsAAhCGYN9f9DqpMKfNT9Qs3ymxJiDeRe728JHX5FGBcMQs2WABHeXtsbpkjkxe93",
  "key9": "4kAyvheY8C7Hvd3MLg4VAWM4AG7oqAZUqfEDp1vaKQRPiWZqeH3n2onpYFL77fx1AKYgDqFxQBcHTJx6RRCGkqU1",
  "key10": "4XeXDiSPvovTUZpiwrBmSuHkTEALtnvwHq64XrAGdo4CDwadsW71SgQ2itXNE59kSbsKXHHPbwMYNueRzpYtQck7",
  "key11": "3XRe6UYE5rfQGVku5X1FXrqoxymX4ZHC4J8kBfykqoxG3z9rpwrm15NzjLLJUoudbiRqbkbyCVEgLuBK8z8tQwVs",
  "key12": "3YzeqWoHQpjrSnrFNBKAzmiMZf59XwAs1XYQuGWzisRiNq2aopLT59Wv5ZM1aci6191MWHMDbH6ApJjpQrtSmYoQ",
  "key13": "3eAewmUYTgkqvq1LXGV7fgjeSkSssB9CJcWtDoYZAiXAwoSKYZ6FsP1D39NFvod1QkS8SxHDXRK6pHaCWvCJkE9F",
  "key14": "3TNppRLyVobLVh4zspqP1YYwkg9vhxMjZvsv6QfCitgkAg1A6ZR32Pz1JMi7NW1BChfuz6S9nHR9WpxbfR1dwQZf",
  "key15": "47hnfgnwt2ZnJdgf43nTzp6ztByJnaxxNJKLJRyLu4DnhKkUL1uZTNDMWtvDJZWW8p9Hz6fpEzm6XM6nCnTX6o6h",
  "key16": "4ebK6AqWpj9ZUX3CaWArUbK6DnPa4SxaQMCvqnfoaKLBMoAhGLqCnC7CaXAtFWJ36sU38BRMTM6f6WUigmJzbgS9",
  "key17": "2zdPUi4psF1srK9B95GwEnuyhDC9MEQy6KDuWXJsGQb7uZvCpcUhamGwTovgUC12P4Bdy2BRf7JrFKr1aBo3KYuu",
  "key18": "zZHSMa2EJmG5L2vJY7wWCe3XVEA9xP1vb1T8wTEr2TveJNisTwW1afdpagqnUwyXPVigRnRjbbAyWJk7j4BKNhS",
  "key19": "5mnFUFivG5gnJq9dJwBLFUBXJTx25GDrK4K5YYAtFnGHRyxcNXmUZThpkgE7QyY1RhWS78CcNV7QuuVReu4AB4iA",
  "key20": "22ho89eRQ68FHfjRNvQ2i6SWCTiwP3PKZ3muesoq2ke7yBZcHStH3qkJ9rTiST8V8Gu8EHjPnpTmMNfdf4p4FZYz",
  "key21": "62SwwEDMQaPweYP1yWkjz4jEGVLHckVEuGZ1JW4T3w34rB2kaHY7cVLTFs8G5ZRXY2P4RhYgb43otErpq9hB3opP",
  "key22": "4zyh9wA2KrNiwwF8NfitLLDhZMKEYgwrELMLGLv8gkPmAkh5qGVETK7qUEBMQAZsc1EyYSvTwiQQgRgWzRNZtnZV",
  "key23": "bpVeizR7THjGhjEgqhKnWS6viF2XF63e9CmVHW9TbiALFrXsixwfEwKRBSnpGdJM3nABuGyRAHx4dfUVcqVwPai",
  "key24": "3wmLNTPz4oRLdXSeHNBea3Ktmmnh4wtMAM9et7V2jBkvDx9jPZbdaELtJ6mBNrwCnBma17Fppaf1z8LEuULo8jsL",
  "key25": "t4a5BH4eujNPmCPJnzJkvPC4uoKhphQx3JsV7ghpedrc6auQZQMkcdEDvtQB8LmoYwcpxBEXN4PtYVn92mUWuY9",
  "key26": "Me73CeMnGtXC2Fg5bdWj7gChmiLQCKZkb1m9r5rXT7patkHfwKBGy8ygzDosGvjGGwdPSikryJo23C7e2J28Soj",
  "key27": "2VKvNztFYunoDMtEymknciFffU9uCQwkst8Pj4KnbfpPhzp8QqoiTsWEFjotSQrE6oMo9ngKNkpKXh6nLjWB8ZhU",
  "key28": "4pxoRfaWaXkpgtvrFAtXPWEPmx9j6R1atnG8k7Rg9pWBbNeraWDnhFqt2cZ9oppDEMWo6EwJRQBchn7SmURK7cHa",
  "key29": "4kWukYkAo6yhg3XV9MKgk3EKhb4Sqz9sQbFpAHHhbhGkH8ri6xT54kMuuFKj45zbdKQJfGNkxFV94jS7Dq81awk1"
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
