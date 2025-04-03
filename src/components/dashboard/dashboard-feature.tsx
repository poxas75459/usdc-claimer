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
    "5NEiFyWkjcqoT24UBkoSukXbFvM5LYVo8cpp7yr2BjMq1V8UVbDXrso18inTV6qt3NAazNLi3PwrkPBQcn3ucwUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXRQ4s25uXn7MvBGQUB4sVYtfmP9nV5QwpLocrA5EPGaz6JynVkBxxPMvRqx1y5KPLNxwCj9GwpEuCvqz6uaYem",
  "key1": "PEmMscvahfGGjHHsY8JHSLQqaXaCZFSvpKMcQRe8iAznKMjtreHEh3ZXa5Nq5V8YAtDw4sT4s2z7SxYoFq6gFTh",
  "key2": "5KH2HonvpstaGk1rvJjqWS1TEFY1kvDc5LhxtJc6Y2vZpkss9XsnSzh4njVBG2599BincfaCYB8KXRMWdFGgktGF",
  "key3": "Pkjo9gzvzUafQDp1XSWhjJAL8p3e9WyvVujMd73nyr1QL9pU2jLeSbnpmRyjqErcGMhL3ELa288cn676JSJzgAj",
  "key4": "2MghArSknPpLspbFUgi4xjf3oDBfiRYUmiwJAQhzWq2XvKMSYCksubKs7xYCajVdTLtT5u9iJoBZQQoKCze1vqDn",
  "key5": "31SiFDSapn3bcx82g3pRMAkxPqa6KbwykxwtyQgsJsfeZNyiQR6kgMxKzT8quYxyj9zPGUEUs4MAFurssW5TKxPy",
  "key6": "4Np7pU1Sa1RUVGjHVkGYqfaq9hadj7aNgtW8Y5j34kXsvLgyDkx7xkxszYTTmZuBrfthGgvrwWnZHFkXmAqtX6NF",
  "key7": "4NT2NEXzyjTmJdTZA1UJGkqcMeeisN9P13SYehweWj81tCodFLa7xpafaGG18UmzEesdQHpwAumv98TuhMjyiCTK",
  "key8": "5xyA9itvCP3LZ5WjNJmWv5aD8HaBz9WND96KZA2nGDeSS19eyL5yu1mRm9U9dF2NX3NY6NR1JH2oZzvUszktCvV3",
  "key9": "3wr2anRbodstv7PrphMrguFWFcx3ozHbUJo6W1JtK1syPomwxLHnbv5GKjDF5WbhX5Fvx8SjyRRJ48DaL6hTv7Hb",
  "key10": "2XDzJ7kEPJEC4awtZBJ8QfK2cQZ2gRm2rS9j4w8ApxquvsnxQpExp1BNvsx8f5uguwxxms7Y6WngMEEwb6it6r7G",
  "key11": "4PhPe8KWWtsKXnSzrhF43JDzLxUM64JFxgUccZX3Tjtci6DyU8vYwC7gXhHXfb3xmoi25wxQbsPkRfTbTwH3ncbk",
  "key12": "2viifE38YVaANAstfALynu42kY6QDYSiB8n2EvwKdoiBsMjhALPwRRQJFYMQbDD7fvk3GW84rDMmAKDkNG4EQN3e",
  "key13": "3d7jGU8H76XgiQAgZ8zpwRJMxtvnA1kEFjUzJ29RcJ6BDBArWdkqKu7WcbAQjxsrmsLW2cVvki32xRVHBBuQJjBV",
  "key14": "5Etro9jyMYuwQYJQmC33KZkZp6ZYTqaRK7oUhx71xt5BNzw56Lb995ZR4XmsnSDH9GFdefAXE58q5rzSgNBnE6be",
  "key15": "63ETSFzPpxbLXXEsFZZoqYE3BJPsSDaWswXE43XCPj1M3MkaMhNa5M7JeVdwpCkGkgrQ3bJFLdDeUk5fHCBQeLa8",
  "key16": "3Pu9cuXY5Pya84ayVuEfEgCiidT3ZX8scebWZ572rK51xrhWhvXrRVtTBhxHQP9ALcqE8qjrLkgMoc7ajAZQXWYk",
  "key17": "5zbisjab2cUCe5tbF1gLgsikcCwFCi74mQrfuaoCotJautzwvoAxN3hzXo8fHxBpPUaK9NWt3gCQXgHHSpZTQY6C",
  "key18": "3a8p1rf3FxgVsYfgu2WtCbmADSTJeaqFbwpMcps1vjc9KWUj3KdMYQRX1jeuzPBTERWmqE7mJedJL6XKkJMz4Tju",
  "key19": "iJtPS6nkDxiPinoSCcgahrUK4mmssU9WsDir1REf2adFdruj8F7p6wK1CxhG5cr3gjC7V26hUucLNHkMiVtixTP",
  "key20": "63HhNoP1F5iYHP6t51jQMXs6Lj6scUS16R8tAzHmhH5jHf2m3FwgZFTmDWXwLCGMWZPby4tvZf83Nsn1KrdQtyYv",
  "key21": "35bMygZhsPBogX3uE1hhj2pDz6PTfN3Tt6KdLSsYNrH2tggXMidRz7u4XoN8WUNDczWHxDNkxm8Yd2pUZdwnFAMX",
  "key22": "MjG68GttB84SWKsxoBHN6GuGfuxigW4LuGoQs4sHtTusicn6oZSihSwQ7t1WzPp8DTzNH78UjvaWUDpG3G9KWDz",
  "key23": "4KjciW2GaRdKXySZE8RahFyp1RdgU1DCZ4QZ7ffzVizQZUxk2Xupmr25D8zjeDwhFgwCAiFDM4cUBekQxhr4boqf",
  "key24": "4xuiEZU79rDg8bwqYCsJxkhyhW4q1sa6Re3NWafZbXTzzwfGpXSNmR2fGaFTEBZTpii8Az5H3XsTqswc8r9q6Lm3",
  "key25": "fy6rpQcTwuoX8WRZzd31YVmzh1fdA4dqgzCmA12HZ51tB9qipsiHQKTbT9bMw6oPv5mJMnEThNor9HAZTyt7EWh",
  "key26": "4w3mMQdCTeGn89ac4FXXhUbShVhvUCRM5Pmqod42FwzcrUgRdCpHV8BuSDbcnDdYoUjgNdfxJzGv9w3VUbMo4Sad",
  "key27": "4ciTKM2sHeRneeHsq9Xdfyh9bZU2mCNjwS2L4nkeBUfKLPyyb3JBoL3jK2BG5SBVMMshajbmYMafxTpUyA17gRb2",
  "key28": "4W3HqcBLCvpYAuK3hGjKMn3bKc9p7GNffpMrBzrWXQwPxi29ZqYEfdXjk8BoqnaMzeqftSQy5pSRpYGtkMXbQoVG",
  "key29": "4C2iJXcnfGq6ZKCfa5FYF6qXZnu1hAsaVdZZYwaCFtC1QoWa7uU5QUgyTdhbcneYKoapeT61vZ1XCivQEtaKxjbN",
  "key30": "2JMtWB7AUm8DrwnygE9QS52MA6Gr8sKdtAYGdtNazWE9bUFjQzRgEvkTVueV1zxRtpFTNP114YHaf8VPYBTuycSW",
  "key31": "3YGuKchYfazsbsH2hZ36kzPiQoHGBc9QDuvcZ6E4cpHXbBDtscdSpSyJSG6CC2q97tmtAgbmK2fVjPdXJGsHagYP",
  "key32": "3dbqfNJM3uYCEHCtTH6KCYsVcn8swj53cuxPiB3P1JHxE5cGtGzX5Psr12t5Dm8CFjQTRV19BLjmGK1AeAR2pSBA",
  "key33": "5V162boEbBXfsgF86b7H4bZerCsTWXgav1FYKiZ2zJ6N9JXn4umw4ikg5FoktbqJTXr7AGMEoNfbt5kF3Vcojhrm",
  "key34": "3R3XLpozb797XRQ1k3z1JXV6eWwXwJwAskrz3byzppF1gF3Vy3SH3Je1HDJcvKUKitvdvvtwFWPXKU4uL7KDBpjc"
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
