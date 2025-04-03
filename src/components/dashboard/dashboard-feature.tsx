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
    "5VkmjoqzK4nNfX2Xg9mFjAFLQRmJFCzBqzRjV4ceyNAaG6A6ZMToSYzv2yZF9TXziubmy7W5sGaSQ13E7Ej5sUso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dTjhfp35uKQsgXVqLMQ4zFPEsj7P74MWa8nw76Pivs8hTuQ5VWHGXML6tjnhQaH5JtYjy8gdJxhR4AVviSBrp9K",
  "key1": "4KZeKq9haAfvLuiAgBqM4374CTz8goAN4ZbRQWNRS2Yh6KmxsgL1SGUMX9hH2rhrY9kC2BwmmAcdMR16xfqQzVmC",
  "key2": "QM5bbkZEzvdfykbd3jCuacMGB1m1QGnhiW2F5AnvE7v7VMbavhAEHEaPRGLF3ptWnP2Aitt4FDMzh1gqew8ynj5",
  "key3": "8aFT8kwwCF6YoAxyUfWykpLetE1vRMkDKxLVtaydvLb9c51hrZNoWKjE146ozh6o5mneq7cSq7DmP4pFbzGHJ6W",
  "key4": "33DVNfAqBEY3FH61HkUHQxiFtSimFkahoqQmPjEgQaujiFiCjxBVJsa7848DWchcy2ytmHb5gwHyVjaXMrxAMWCc",
  "key5": "vAjrknsWpiHtSZEaYMHYgLkH5Ej4ca7NsbiN6n9Uvd3siwmE2348g7zirXBz1iZHxCFF8PuH9UWJxx3eNj83r4B",
  "key6": "5rKEEbKc2VRV9ySeA4gTbgtMBAhUcKQ2F3pJDCyHGKGFHfepDoyY2tMyWZtnLgbnr8WHg9vRgHkqHLnn9CdwChCh",
  "key7": "2fWnemSMxqWae2fWpGeduqF3gxpTQsFnT6wTxNP11pVFTWyrUWA5QugyNBWC2A4zwDmX9Hqu6Seu1NeXAzt6ycfP",
  "key8": "2XnU9n1hjNPBpPfx6NZYEz3kvo5UECcBe74zQWsR9R1Whhjm9wgm5mpVbFMXEYNcvH4KBDH2CkrxCd3ork9GSaQ5",
  "key9": "KYRfv2DumfPks16YvP136i5S8sG6fnFkxHUhT8gR9cs2WogTSLXSeM7ArGvL68qR1XqpcFLdkD6DJNDGvMmxcZT",
  "key10": "4cnAbLB6ZgbwwnpAvKS9PgRd1pYB8HwYckux5UeRjpZ9E3hM9Zq8joJTtWMWuW4fKPq12Tr5iQXKkHYUEhUh4Jqp",
  "key11": "KWW7QeYYSn1FJpRSouK7bpKvL6PxF4upG6EL2Wke5QFakiZFiQ1Z5dVnKPbaoQHKMiah8J6hiYFkKXUWRxVxXtD",
  "key12": "2nmWtADzGbSFuxoio4u4h88ehYdWQWLfx2863vaeVpYp2yjkiwH31vHabWf3dukYhSoagBhAo27UwfNU2Lat97E6",
  "key13": "4yWR1YaUNbLoSHGxvF1PgtxEG2Dp4QGJsA5AWkp5m5ewua4sQtWJyRpCDeJoqikucSojZCCHdpRUCWFCLcKzsVmU",
  "key14": "2mJqu4V2aiyAPpN954bniHpFJANpV7FPMjqwqokvm2DreEYSZL69TRpZhSTQjHQ917j4kMBdHTGSUK7xWTYm6fqA",
  "key15": "2sw3FATUcGDGokm4oW7tkDz3eVktkkF2fh8V6pmfz5GyrHyZFamy3koa6zhw2nZy7TA7RTQmcywSjpiqU3Hv5Yfu",
  "key16": "3RYLQJbSnxgn66p7P82PkgSYJ9572z5svpR8SVW3mFXbaZXRQPhkFb1XXP83dPJAhrrqbTWtETEJMGs8hhwJ6z9w",
  "key17": "5J8yVp1T7REfY8uQRDhPdfzy8jjp6Ac8BDQuSqvSvcSqeY5FhGyAkye5eJiKBt5NjniCNrdp5Z7tXpUmBEXiqYui",
  "key18": "2VRRbbXsUy9BYTCjd2K2HfbsC8Px7xMYU9a6yXfLvWD2PhD9Zd5JKBFGExV9pVFvZ1HEYNnwAJxHGUNfqdAE8j9U",
  "key19": "5MPjPDg9jS32FQrPhVmSQ92sVuowGcY6hPs1uv1HWqU4QVHyjofEY8D4UKsodUMBYS5w8cicMAToBKb4DyGUnL2S",
  "key20": "5GTSqqA6Ny66BheTbEquwWAd98Gp5LkdWDxcYqHEdJLhyEseJFZ82SXKn6KoZRbK4FBZXibsEZMCbmV71aqJXisr",
  "key21": "2dasJfHYM13AbvNhXEbnLPjh3SN2fwA6YaXHxV1zGXFc35BYAZShVNPuREycYmPdap9CahjjGpa3arHjYpf4k4qd",
  "key22": "3mUjDpRmM3Kc8YaiSdyyH3fkpPhdT6Lp78ZrS38UCVPrNdXHbn9NJr4GNF22tJvHhKApzy6RFsyWXAang5bEvKGH",
  "key23": "5MqHyNkDfrTaLpK2cdLESrhoM8fRuCzDJx5kENF8whqNhnf5vT5owRp177q1kGnMPEUkzHeNfTM4EN8bfHUZuoRh",
  "key24": "5AnQK2BZi4NuEtmTv6vruUdWBbKpX6XKNgteptPBiUh5a6vdktW6taFGtFAEyJ4EDQrV5Xne437ge53bonYjkb5A",
  "key25": "u3uQHxszMNFJaXda4mgbXLRfPX92fLS9assLjtZoiqzgwDRqBULQgV2FbFhPpT9FciipGDZuPVPQNwWCbigzDQj",
  "key26": "3oVM23ADMwHC1MtrkNu1PqA42WkTa8Z1dTXVnZAGX7mUnDQLVqrocEkYrGCdBSsdkcH6wVAsy9oNNb5ByN6bcuVr",
  "key27": "41a3p4o582sPGgF5LenvAD8Xq5o6kqeWT46aA1sbLmW93wCqEhVnFpqLRJbkNiVxMNPVhXkTSRgTwxKkGgXumStu",
  "key28": "bXkYcy8vLcJrXZxpVTyGWNF1xT8NmocxXes6fAMR2MN9NBt5oUskzU4P3WAccqythDSRmSUBcSPt8jLMhQgRJdD"
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
