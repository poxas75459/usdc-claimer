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
    "4yKzBnzF73G1B8SBaZGUx353icEahr6efLThYmzcqvETD3ojDzdE3gUZE4mGXhAUeoRxF9fgLimcSzL5qq3pmTq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P72yof5tycNorGZS7teBj2VcrURaFgTY28xLDBV1gj1FLT89tABZ1TN9txzGDNP159yyTQj6CuRXvmKqh1TDvC1",
  "key1": "2BvoHberRVmBJQnT97HYQxJBtAuryo97mhUZHprPHdw2MBzxgAvFLAYn8QoWLbEHePK5bbACfW5GXkYuKumKirxW",
  "key2": "4VQ7AgEzJeDoCEY6Xgo4R2Fy2F4ED8L1yA7nqVHZiA7nJwpesLEzVvAdBzUCcet4UU1hx9P3gRRMFZZyVgYazScg",
  "key3": "4r7forougTLpQvuZir2siaLyrXZU4gu9CnRouo44dgR7jkwRRdW28c19tNHrGDhiMFJX4nf8Do6FYqrxm7Z3EJP6",
  "key4": "T5YPNHQNfBTF21k8vV6RBT4Svb2dAKNes2ADB4JEkN4Jcxxb1KtMHen2ENygfiXH4K1XW8vFw3sDhU5JeuKKKKb",
  "key5": "29tv2X47twbGxMCiNp7FBtkouHpGVeXJR7jE7NdtnB6udo3WjcSR5QS1XwfVZcRoHAaXYXTzs2emwHi4ttLKh9aT",
  "key6": "2BfLsFUA3TnH9mP2FB2LvwuxbDzzDzh7CDyvLZXQg7aMysMjqrLXtMkzj4iNvnTJYqZJuuW6cQvcZTV37qbY6eN",
  "key7": "4CdNT2JSdyagGbEts2PYxEKe57t85C7yPD7saA6wvzsPndfAFgpHvaUFtkcGLuszh5ra6F8w6SszLXkj9V8wAiqj",
  "key8": "5hANSCjGdxkprqG6CW5vQmr8M9ifqZfU72HNWuZa1jDVBznPrStGXKxpKTGdz2pZAtt9EDJ9Lg4thg6dirDNsVW4",
  "key9": "4M7LR7c9k2kXGiJChYJuE3kA3NevCrsxSNaNnscyCdh4nYY1iPf7YRaJWUR1c7JhvnGBbtXbrcfZGgLy3b55uU1j",
  "key10": "2WwkySwotJkh2Y9ZKSXxjAdrSCEqKC2QhxR3ykaq6nrUHpfvhhhqjdk9KCyRJHDX5GKRyt1rGdf5F4WnagcM1r2A",
  "key11": "5XpfaK4y6YFZQaYbFDhTFNyfpXJMs3d6viFsNfyhiDd4eZy7cKADYQxGpzNWpdSeDSs1gG7DXJZb2qy8LXqZnVAz",
  "key12": "3zBQqm7JnNNsd3J15hHZjXMeaC3nCm5bPbyauHn4Q4UVoULz7jM4sWPSMinJeZjqab3SRXzeXC5dqrD9Zz8Stm6P",
  "key13": "3aGimDhrzP6uJawcCBQMpRf3j53KcCwbuxJ5MMcfmCoZ88fV2UWBMXQuPmhGwBcgswe64zgR7SJrHPcKU6tyZd8J",
  "key14": "3uZzH5iQZWhMgd81YrRBsFWfjU8NziSW4FSani1WjJ89XyLYbWo7G7wJDkW837tNyPnhQfRahxFKD5xkc8co9UuC",
  "key15": "39ChZqeycbEEeFphCxnRqSacWUSY1QV9JPud1fVK1MeMt8HL7ZnX7eW8nnKtzCMfRBavQmYmgqP2KDCb6AK7tZFA",
  "key16": "2TTck8i5tJS2NS4S9Cwy5ZgErLiKbuhTZ8dEhh2d1dNzEZssZcHqu9PnZz3GXXmk8ojRki7rSnspu5o6rDNrC81X",
  "key17": "ZxL91iFTfGWYXkKK2yexiL8tBH7fgLY5FeMT2iM63H9ed5WoD8evULeW3NqDQfRYuNiD9rn6KTHDMGvAJfduhyE",
  "key18": "2GFBJwRj7a8tiYnuGPd5uRdTup3jgaxg81Z5uTsrHoJ6jqLSh7dkcxJe25g8xv114PLvRPpAS89yF4HMRneXdS73",
  "key19": "59cNjWEDHsvXjFQL79248nnA8nPUt72FT4ramZmKB39eeqzaTvNApDP2ikpXjmp8YvnfAd1MBZXCAF6YqjoSDUSF",
  "key20": "2wT8931JnKzUVhcwa2qS7tms3nqoWeDPKqXJiDY7vtD1nDvcwzq4d76RkMWr2bfYQ72hYD6rSoV2FoCP6rw7pfiB",
  "key21": "35Jf3yPjfbgxyNyiyYsE3GXJEgSSTQNX6B3igwjuAXrWHhtsaKTrngAAPD9Kx8Ntdjtw1uRQym4PKifDJkNpyW9k",
  "key22": "4wH3TqVkjBonADKSjAN5A2D7fuGEQ98HD4N6od3wa3j5K6CgrjcsvJhARc84YvbBWJScL1arDoyAPcnCWN8hMr2c",
  "key23": "5EUnEWbb6caGVnyJi6DiNdhA1P7SszHLdDaPd28h8FE2RKsm7CY1qcUmCVwmUJewUG2mcPGK3HBY42RKcrDzX3YP",
  "key24": "4DoiT31JmDyvp8LRKwG1VeBdaK7dQHUodYrT3zdXFyLRQuouaPYCYXCaizwhiEn4hnTgDRUvd6GZCiqoav7uQKk3",
  "key25": "4Ep1P3YY3jGWKgPTpeD3ucAi343LrB6MuDB1KgsegjXyQeRAhusoMtGPHX4cWXqoFxy1bVAMxvAP3u7HEzR2yCoB",
  "key26": "22Ao4pSznxH57NaS554xDWp8oQSuCBvxeE5HxW8sP999WvjwJtsojQonNrszt1ctdL91fFGP9oRocANkbJQKiQ9i",
  "key27": "5CHCMH2KA3HY1Dixp6p6BfgrcVNs22RfpySg6HF6mq4iXHQiJLQk39FuZaEKmpovi2zTBTy9b3cqY7YXzhiAxBRS",
  "key28": "5ekCa4wbKu9b8FeBSFMRr1D2BT5cZ2ThbUaGM3ZYqYDX1bBMbv9SQKRJuWG8WoKzivfndvei8ptmPv9rUjeUm9bi",
  "key29": "2cPpjpjSMYBFdoR61s9TyUDwnkWSikVtNCCG8FUYfQ8AAAbkba4tDddKD1LwHcrZ4egsyFEnkpWQwMxutiaPrDRm",
  "key30": "557Q6uNd9GNciTCNBWHNHn2XuLG3aRRdCqg5rLQu4fr5X85XDWPh7Bghif8mMb7wdwkygbyd9SR6nDqHVmrXcBW",
  "key31": "4A3m7teKVD3UTHNpGEuVcyEZxwpy1JWoyv2LKzGmbCE2A4KBgQhPz8z1SdMSyRfQm6JywaV8vtcCD8o4odnWSokD",
  "key32": "4nKj2LZfyvPVRbqfH2NmSf4pXJGZPXNbWdvByVbEDC33m7HZrAQq7yzupuudTUsSpqrET5GhcSXc6MM2nnjNHENw"
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
