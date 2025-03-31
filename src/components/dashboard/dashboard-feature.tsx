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
    "4PpZxidfyTNAfDDN5AVguGsx44VozqDE5gosG5r7X4VCk8N7zckVJeoxMU5pM5bJukTpwC7r5TXGrnCnKvVgtKMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tGozhGJhvBvMVMsgo3gzw1Jyapd36CBUy3wmB6hDEpCxeidtmyHjYuw9v9qVHstSWr96Ww6MhondjECUuNwPtbt",
  "key1": "2GEZJXqDU6R9LkHqULqttoSXJSe1GVjqynGFVTh3yMNY111DiFsGR7k1AwhNNb9mmu45awZ17NEhiEKJAQCsmxc5",
  "key2": "57eKWpZskbMPXk9mzMer9oKPwJQBEN8VPGvnhCSKtQBDf8G6ozQzv8Tcu2uyaTmeB8bvcrvPNx6Kz6Ydvwfm5Ji1",
  "key3": "5GGoRsBcD4AnVXRrW1AofZrGdwnorbnH7Zmb8DwYnoGmUhu7N7WfA9yYnaPGq9J2BcDs5ixtgZvQHw9uY5gZCp8a",
  "key4": "2cjVGbTtzD22Cf3cdt8oQPG61tz1WgpqmaKH84CuWxgCpeY86PHkdWkEwSabKcyfNejx4oices9ye7uwCe2TZpfk",
  "key5": "2kecg3K7QWjr2cEw9fcremGk7Z2jVbyTws6oSCEComuynUydeTpqrFzJvLUbcXHuvLeih1KJibd86VDxPhwdRJLW",
  "key6": "Bw2HEmv8ixa9GudKGwMbEHy9iiyH8TLWpcDez8H7FKfYtXb3jap5fUmcbEYQKSNZfxiuMAgjpcyKygmprPomuQ1",
  "key7": "45zFKozRjLZ36LkLsh7dNUcyuT6yqKgRdfkf9WcEERS6k22MG3CNUw3oXWG8uothpkG7UEzQBYtpdpJV8vmGLTTv",
  "key8": "3EVHPApnCXVmnNXb73NFG8KsuBrBu8PH1BQJZuyi74Uc82yz9rhpTpMUTLPuXanvJqRrAqEUfEmcCHrXFLvpPsvr",
  "key9": "3bkbbjP9qBH1yALZMcNX2PRBW7VTZEngBSSpRtU7a14HTL2MFq2m76x7AmnhmXV1ZLVcX52uLte6xX55inXxPGfX",
  "key10": "sccH1tU7SqHxVYVXwQ6htfTFFX9S9PPKAPyhzMEFyd1xEDnbXxct3EVhTUDRx5BtwhihwueVuoVrw9ENt4qxDNv",
  "key11": "3UzqY2wrUoigb4cS6sKXt8pdcpfrqYMhxvr9BVhk1ALh6A6Fa2aTVcx88Nx9ki2s9ySxgtHx7dk2r8dUuMsMYmzP",
  "key12": "5xbgbMiBXau1zNkujw5UA4ZAP1XJJr6LsG2QJhmFPMQhLmxRWnYPgZi1hAdRtnJiFg1bWWcpRoqTgLQEBjvn32JL",
  "key13": "w9ttobr8rBWFemcgJzWKi6NCk7gtyuf7AxCnnvZPgrcDWTwvTadczJeX5Gmrdj6HfHJDrqXAomhepGwLBfvCGbU",
  "key14": "51UebWxain6YWMwtNxXLivwrwD5bkggSZr9hB9PaHJDLcJQ91KGcHAUyvDuD3rJQ9MtvVHAaT97PAPy5JP2bxtqy",
  "key15": "tTxLJ4ZZ4if1sJfLD3TWsFoB6VhE2CWNjtvLFhL1FTfQZq3xatEdQrBqKxJNVHA98Pq1rikvdaQgPENKZDcpQAh",
  "key16": "5RpkgNRpEsdBKHcmvKYqKTgbsoFo1Gwj5pAPaEQU6KENoprvz8fvwLBpCqxPgYRnJw41Y4b5M84A5dpPrfCmeukT",
  "key17": "5frzZDpsAQ2ywnj3MLo3ReKH8ExR28NnQYGWNx6uyH6igVzy9cPD5gzitqfemR5HkZxb9dsKr2BC1oyT54DvwnnX",
  "key18": "4a2bV9s41xZofunxd53vksdTccUjypXhb6CsZqbKQaLguu2MgHjFgmemhHJo1pc5uGWpRipPUjC419CRFUizqj23",
  "key19": "2RbYQJ94mq7Px17h9CLLBBshuAjuAbM3Dxc7pMi6U8zzgEi1wapkj9w5Acd2LY8gKuQNnSWs47e47K6n4TGFwxz9",
  "key20": "aaFfrg1sRhUdcvBhMWzbFgrPJdPaS5yjxsamNPASwEhmRBiyMLRCaDheQaymUx8qRvH4cNLhxgPLucCGXPGLuMc",
  "key21": "5kWe8fy4Re2nDks8p8dP2hJ1bxbNpGNGpmF51nL9rTbTEfx9a3shYVMJm7sQwMwd7dwRRLhnnWU83utJhe8tgA3P",
  "key22": "pN2o1fhPyoqgXMyM7mcYUeXZWr4M9KfnT4j1sDHNGtMdJn2AKLEsKghUp5cjiSpZaPCup5fWnZgsSMeHWpE4RuN",
  "key23": "59v5sqRT6g2nbRER2aqjTNKYn4DRSe3PvYCCQSu35nS58fMzjGyZtjWign1iGhiigP7i9vqGQzXyUWTtDJpEJA6c",
  "key24": "iag5vQ6iEpJzpatpCRUtRd5A5HcZcYroADPJ4HKfdFavyr4VR7Q8yXUcFg2Uu2Cj4LRJuxVBXofoPWsVp42qsSZ",
  "key25": "3CsAsPjRmGoPGFATwBHEfywhrA38LZHt1hZixVPqzdUJKUxV3ZXHJygxqhK1zQVZzsGwKUKMeNr8Y3ticimyLe66",
  "key26": "2rm1jYJnXds8rJemdShh9k9dT3CZxC8nf623C5bvNhuuWA1ioCtVfgrYSjgzRNjh4GNEzMpVkqjAD1ZCe4T5HmYE",
  "key27": "4vygRmRNNcwzSoFQdNSr9149zmNtxnFsmRa5TVQEgUWJVkZoEJMc8wuSNJ7aciRXHw38MRmqJh1ccEHcP6re2onj",
  "key28": "2n9SD3n3iThscHtHMBmYSo2apYwKBE6jDJZettD4WXFPKqCySzCFLUSSr4ptrTuJj2ViThd8FXHi4kqwA9Hh2KCp",
  "key29": "3hnbt5VyZ1b8RLhEqDVedLibtKxYqR9Jk2hes39CKzaQr8vKDoph6ZfVC2qKRFpZJ1YHsctmVs2tb3v5T8dCzC7j",
  "key30": "5A8hyYYViDJPVeCwwkxJeTZPuDekxsMy3oGM6CsVwCKo93spNJ8tx4vbiPk921ywDRsYBGiLPcS8y6T9h873JdaX",
  "key31": "2kMw1zopRhDTg9FPX496pebkWRkU69EhLPk9Zxq6JAf8cGjwgT6yNWu1b7zXZMA8nwTP49BzxEAioeyFr7WoSm8y",
  "key32": "5P2UVpeHq2BRRYkPk2LA3ZLZEWPazN3geyZyTAQo8KAob6dR5WRwaQ9FSoP1zSzyidGCDw5gMvuvRtHyQsrSdwN2",
  "key33": "2w1PZoGLZ3Lbz4Jhvp5D6F6VUpRAcwW3ibSJmCkPiiUFEcRCUYtDNvA36rvcsx33ZUiyTce3DjPCH2EvdsjAwjpb",
  "key34": "5zHUd9zmbFypHabpciYEhMESZpJ1vSGYH7bUhw77DGUo3tifjSz1TUbf6TyjDuzo9if2P98EtwcXbz6Dg6WVR27X",
  "key35": "3FpEcgqdNE4Vbwrkphu7xwm5mRtKvfdeppuGsH3jK3hsPnSYfxJvEbdySJquCQw9AzW6vN3hfrc8zWcR68dbmCFH",
  "key36": "2at5ccRM2YsTTfPGkg4YJNrZAovRQBa7KJSEB2Gnq3qVifPbgNFgjbAPZUizmBXxH8T1rLjbTjggT68zvyPnmzWV",
  "key37": "NGvsDYe26tfSd8LiXABCKsG89sq33s6gaUQu4hHCuo4fjiBSMpX97sDvyqdE97G6RbMcZgeqhrUxTB45Yb77Khu",
  "key38": "5ySy4MJWk3nBuJrj7NtsZFEFqVpfU8pMJpT6ePHEsUQChx9pQCBLqyqW8pn6beXTvXFysuJBv8323woBpUhmFLDq",
  "key39": "3ZWTA9tuFaVcsGRTUSqnGCpUrCCFbnya596Wmu9HjeweMV5r3sgrXLeg75HHm9VFoQXBA4NQeJvRcKiokePZgeD5",
  "key40": "7h48FbQSoxxG5ocZJaaEmGJdqH2XfcrDzLdWQf35xwmeerJJALjiX4KUcbj1C79bNDhZCb5m2ipwrdcVt9Fw1uz"
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
