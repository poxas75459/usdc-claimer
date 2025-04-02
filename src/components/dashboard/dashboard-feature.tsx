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
    "2KVKEpntbTzHyWQwrdDwKNoMof236SPiLWeQ77zkMtrtL4TDAsek6jZu3HiNwHVK2TxcqDFLuuLStAchvKdqppv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63BZXmQxDco8F7qoXWZVKEdf1fkvRyNqyXAPVSLtdVyVpbsQB2tDdR9P8YUdDEZoSYMFGzTyjvZw8kjvZ2iinyDC",
  "key1": "2JDn891Jc8AZCisJCG6ZrZL2LjorB7G4aydN2jiSbYmEzmNAGg4J8EvtFNygZcAovXshXY7JuB4YPEBtsJLYCs6c",
  "key2": "2fsFbxgBbApAMuU7u89Kt3U8NjcJkXbGSvdKds3BuVUhMfMUGtjfFjnVMxBzyVDgLEW7DqsJVf7BR2hnCw9KAnvC",
  "key3": "3ga969B8JNmj7tkQEWHjL5xzpsVv9wSBPanNosKztv44m99hGbCQw7ycK7PjVMJ8i5QWWQL7WVeHqAbB3uscT4TN",
  "key4": "4DWyozKhkPruUuQtSaCrs9oiDaccso1V5JyyYMRrHxChVWj1DoWnpPd9ZSSwn3dpHHTU1KBwA7tib3pU3r4bm4ue",
  "key5": "3YASDWBP1mtKQxVhJV1yocZwsBFbJeZ1BLjYBkaPsxYn6WSa2wkJcTiAVbbgwcQF7H8jwQUge8GZN8PfWFmjJ16S",
  "key6": "4LcDuwSeFHoKqXxvMDGopzTj75ycj9zP4DdZ6tbgcda7UUYfdzzdJZon5YypZFXRw9VFWkY41ShKkK51LjuwfiZr",
  "key7": "61U2Yv2e35yyo36PdpzHnGmqifWCHrVSxBAPNytv4qadRoV9nd5QK523GMSckXk4oRkSsweyDiYBtrkuUMfAN1Gn",
  "key8": "5eZ3QGw2Z32nKWCJz9mZQsnwuQvVdU2CLSZpd6VSi6h4WXvjsqiCDQVkkms6zPDyNHEYiEUXWoSjy4uwxA5gV1ba",
  "key9": "2BfpKaLWyZ7HJAkrTT3sZEPAsbReGTaaosGwT48WmSReXxCxKokMaJmaqpKa9i7PQyHvSk4wupUcCaAAyLCf4Vfp",
  "key10": "4VpABoFCaqwEmBhFBAqtE3xUBTWe2arJe4oyD8nk42XR933pyLq9kxxE2xz8NtRWjxmyrTLnyMCGHy6bi21BCzaE",
  "key11": "2fRdwnmyZqDMWdep7Fm6Wd82a2XtXpSnESbNiTNesdCTfv4DogFfHXCSJsVbQDtXdwzdKZ1Xw85Q3kdQLRu8oELL",
  "key12": "2m8bvZP5ANZtDARriQzP7iAaP3KyE8eTFEig7hBWpT21ipxfKmgNJg1NbnKvW7t3o9uvZCDpRydPfLNg3dQWTpCx",
  "key13": "2hfm81HvRdjGDxu3EABV9RRVTsZAFc3EjxBJuZEgP6fKimNEwQK316LhJLV4XDkoDYV5fgpLCQD5ZC9phEKJLKkb",
  "key14": "3VqYQsxrirWWtfpT4FyumN9bSoRYBkZJ5N1hKCJaX9SsWY4Y6r8vqL2hiDbHbTZb2Jzh8zVQW2Kknwpfm6KxHxga",
  "key15": "4dTU9VfT5Dce1VtPTwcnFfJ8wa9wbb4aVyqREMYhTLS39557YYQTQiYh8AmhEHGfRkSGzmngk6Qxf8yRCA4SU9zB",
  "key16": "61no8YCyGWaw8Qi6woUprpLzhF6Veu83Gi8WzRBdq3XDMQdo2XeyFZC7j9Hf13AHA5j9PAG8yu5jNYnec4wAW8WV",
  "key17": "2ESL1P4UW3Q8NK5ZowzZ8PdTxPYYdjhAb7pyq6LHonkzdC4pNa9eS1UyMPxSkKeM2567uuc3SvyxG6S3bH6S2gZw",
  "key18": "5GVs9yPKXnuLZs9NAKnsRrPVE96KVnnGMaYovwHzaFkWzvheS7meVduxvSZUfdeAWxhTFncYFVjg4e14w9qVQ5Sr",
  "key19": "zhH4m2BKrkH1LyvLxH8MiJ5tZH3UDJZAnTPNbEq9C1knaYvasVdpiVbeZBqZW244ixZfecvtszWYBXCHb8VBQUB",
  "key20": "4SKqDNW6v87wnRtcbyZfvRswGjyULWDvaMmviR6EjMSqYZg1Rf3VncsfZwKUCNEWcfj7PEbPXt5JoHN3FnUhC3vc",
  "key21": "2pSaTihT6vJ88yExRtRPxS6Q5vptmXdnLp87THDbCdPwQp3Wvb2f2WzAhUdPhxeJk7cCDTEBKhVSo1Tr6hDYvAsj",
  "key22": "4QXQDDUX4Y9X1XewXZqHzHGqVDYKkoBk52RRahLCQXHLtWQACGpNP7LwZMadm8pN51aHkT2C5rEjpEJMo91jt3h9",
  "key23": "3qtawYLziALRkBUVFoH7Lfsu33cCot4wYSP5UgBVztvUopsptQ9DbhtvjC2GWCFNokxBjxNmBYnJXMGzs4uc4RDE",
  "key24": "KDEz2Pot2YmWKMXh7nwsDxtNZJ5uRCMiHsurpi9E11PDiueJpR9riFY3RMDCr3eji5Nw1tdraFYABTjp1M4SA9y",
  "key25": "4yeLDEK6vrFoJzg1zqGuhiZTsxcSUbSyjudqrreN6iVdVHGYoPi7va3S4NnTqWdcLGHQ1zzfABuJQE5umsijzKYQ",
  "key26": "36gbnsmLhLbWtZNwDo4ABZ1C7VRzMdcf6YD75TjHwy5if73wnJs7XLVEzBTygdjUQL4jMJnphovXsb1uNLRjxbKQ",
  "key27": "2zzzSRDEXNBxZJ2TzXtkz5MqhChkTbQWKi8DZpHnDC7zJcL82FZJ3N77QUofzpEiuEqiftdoxtTtek99YyKhW8WR",
  "key28": "31hDwbtBqmrteJfGTCWbFwqWaSkcthr8dKbbUA5MjjiWmZXyb1tEiLGJgtUM3ReP1T1i65tjJtgrnUtP7tzUhPN5",
  "key29": "3A9qHnba6wv76y2NnEkuwhT6ZFdDBjYysXs2hA2i3J5bvFPdRXREUmai7GdEgc45FGpyjC4BZUmmv5ZwbVxw8zd5",
  "key30": "2SMtgiafw1Z1EHj8LJf3zWtUNTWtfczN4VMP8iXxamcwMMGAAMwdkaScnznDK3bpN9jrPDrz7pdeMimnSjS8Bbmz",
  "key31": "5FHLtLix5HAbg8byheGMsxYZXVXs81L19ySJBcP2YBia6nCy7eb6LJbgYBhf9ZdJEMWu4wrPeha9cMrzbgGRSXZ4"
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
