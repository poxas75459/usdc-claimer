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
    "4UTHwJeY9EMzdqU8LHVYgSfPL1GgTs3Kr7sP1qrWjQDtoUrDNaPe3qcGwj2azXoWk4tyW8h13v5U4vKRnn7evtwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "izq6iwUuT46Jm5jDZZzPY8K622uBnCQj6dgt9MSJ7GQj62B22skLZjkYh8wjBsiFbr5JbtKKSNFffFYJdQEcGMq",
  "key1": "usNzGoRmjRHAXLP8kwb2ms5rJheFkR1o8VfqLzQf9Rv9Jrm8pWAM6RiKDGYXP8gtKX9U9AQjy6NBVMZNsNs2NhD",
  "key2": "355BZmzRFkEeCPMVHCTGVfp7fV2yERP7k12bb3bMaT88FBWVheUX5FHgBbS2VRK37pGA22jNh8XhS6iqQQoknmFw",
  "key3": "4642oggUPG1K4Vc9muDffRBGZYLAVk8F7v88TPRZUhPmrtGKh21TCbZHudp6P2ETc7wBRKBqAJN7R5jqVdPrJhNT",
  "key4": "2UbhLf2dzxAhbDBQQJrp8RAed6gMFFvFCgiFfUviitCnHzpqdtjcGxZipUygGs3jhUwwSHThHhCkg8nmrshipko2",
  "key5": "2LYpGjRK8oudH6WYpU3qA4vSdja5uLaXCvT5g4ufV41PCmjUDFEVbk1QpE3VY1PTkdN9kRTdiWA8Qhqxogjs3ZTN",
  "key6": "2UG9hHDpQa2Ke42JRgucVHUpUr1S3bzcSqNLrY48QpUeRV56ctBwUVpkGxXSB2fHLVmCgScNKTwc7dPMadoBgYVe",
  "key7": "RtJvH5eH3RC5stqav991DA7j8qGThmx1K9BLjiGtu7Ks7fJanjCiFWfb4qUCkUTQhMSL6Vcwz55mLpWuYvStbbi",
  "key8": "3nXrt6qBkv91f5jskQ5CiJjBTH8pDYDaSftT9DTTnnv84rh2D4NtZACUzQyryuREtN8C7kBCGNUm8aqAuB19W2yJ",
  "key9": "NXZgJ6VZugLXRaD6svGkFuMZg6Qei4YmADkojAfAEi19LKvJ98vt6VpdRAm7qxSEik1yTVKzTFtaBFtHmZE6f9x",
  "key10": "1fAwBuqEGipxtV9Eg1t6inQWMLgw6481aAwWESZ3Lnw8nARjPHuBcEBgdDUF9T54ih7JChJnzELB46vUU25eRmx",
  "key11": "2gxdt6nkxTAUnY6YBKp7zXQCnCKFeg5ta3qUDcjJtUqT6ykYaDD6vUrjiwvku187nFppsxvLqxrPPQcJJ6jPgGJD",
  "key12": "27sjGFHdCyZs2DX8w1dxuppeYDsQrvTsLZrUHgJ7mau9RriDetBZUe4TNjs4tK9RFLCRpSiHcXPKjfvhAwYhy161",
  "key13": "4td41HMQ2z1xjLwLBJLsRwFAGUKy57c762Hx7Ysoo19omadLTyBgdpjjQKC4vwxmL9NpDeJTJUHW7vByLhDJsZbT",
  "key14": "2jD5NQZtGZTjzMTxuzeR28rQS6eVcGTvKFU6z1kM8ndCnRH2bve1RLczTkFpkfb39uEuXDbzi6QGefY9CeUTk8uq",
  "key15": "m1EcuB74XQe9WTqZ767n18qwHCqB6MZ6uG66BwT3RsuNKYWb7yWSiqQ877KPgFk5Kv78Wx8ZWEoxfM2mbdL7rz3",
  "key16": "2G2YySTJ2E3p4e7eYUBKf94wcEw1nozCBqZjVDXQVdVtEaioUqagV4jveKUNGM6DJPVKGNtqYFWYDq1gTLFTo82K",
  "key17": "3wvLEjqigup95vjZSe8x6reEYWdcLFf69duCvsvvhbXBXxnyhw6s8Wm1Sf7zyozCqKFaU4Nc72bNBXChvLM7ZqZK",
  "key18": "5uR4GtW538pUCbmmkgxsPkW1zt6L7iRE5he8CXXRUHLzm2e5PU9DGvcXbczc7XXvJnuKLYMXxYhWa8CdUzJJZh3i",
  "key19": "3yfmkxEk3v2d6ANgt1iVnihdN6YV3xUHRmyvFRvZzVkxYfHRCYDnDkfSb3gwf1tVUm94cPFrHZ5hy6xB2tvFNh14",
  "key20": "xjuHEVgWHeNFLzy587G2cBLjEMy7ZcuDhESAqGDWVMeVpU8yFNUoKNVq2j3kJoTeMK7JnESuTjuVGCg41W4aDQj",
  "key21": "4tHAmP2uJq79xooaUT3fQvMtLAhkaaQHP9awS45cmvzGjntbct1saH1pSJyPG6K2yGm1zgP7nY7eWLbvjnAnup6D",
  "key22": "4frYrFryKhymMV2JUwa3KAaZL4kymeG3UU9BSuxH9iyTDY7C4UEQTkMbPpzvnKAH3eo7ce8hvfqs3eXK2ecMDDe2",
  "key23": "2KGxo7uFUtVzFRW9Y7N8ryeFTAsVvpdVw92qYjCtDLYpSJW836QR2eQYk6DymfatZRTYXkBMg6MGmm96pQCYp7wh",
  "key24": "5SNnhaJLVSW6aCwfmn6mV2JFfk4Wt3arpehz3Wyw7jDdknXK4hx5JTLDZHRAAhxjswcujLQurViqnG8dCNXX7PRe",
  "key25": "9otLSDSkNUe8aKRbTcShh9rwpYUfL1fQrEZnCzyBeQ8pbbgW8VeuLjZJmGMqk5p3WkK9SSbYjbEEn3SyihdiRoR",
  "key26": "5eoGJbMLxTC7U118uwEAU9BthJ2mTQnpSKMKERZQDHbeqdpdaucnre64Fy8kPrVfZywzmtspMiqZurmCHxCUUZeL",
  "key27": "3RZufc4tyZJqKsyuUq3F2V7XbVcvdL1TijNDoPeHqdpcHw9kHbN8tN7KXvsGBgwxK9TnAxthRt6hiMyJ66fLawD4",
  "key28": "2mk1mDgL85KNga8LzbJ5K42EoKFCB4RhHVMZvXynRs8HkGnxSR5qKNHs4E3XiTbS6vzDqbMfXaw81B9VK4dG9Vib",
  "key29": "4D8SyDd4WjBhEzN2LTSB6LSKrR87dTSH8oGYdSXNoNZ18dWNPhG9BaPEPPM6zFxvcuQYLUrWoxU5smEUHHbC54DA",
  "key30": "2LDw4neTFpLirM2DbosygkUoBTX9qyATW53zb5SWPausWTUHpeaqzjthFiVP3yBBEkTzJyGaPTFsZ14yiFpUnqYs",
  "key31": "4xDt9BtdWVrHhhg1tnZHayQ8ekJzZS5paAxC1vgSbBA2GTUTwDH94ecXLJGX6Agr3cjmYEcDP9Cbv6d29fErwqhW",
  "key32": "2rbTafSXTkxrzrh5BnE3hrisqyLtVSvZHWym6S8uiWXEphZygaX7qiHoVkCVNf3bkJd88gtU4r3qAuEgrSDLTQud",
  "key33": "3HrhmtwdJQwoT9hx7U6kLN4t3VgSed96xGuJ1YYR7Xshgw6gQWvrBJKAQhxbqjXRa4VJYEC4FmVQxggJV6g55E3g",
  "key34": "5Mpk1FvTrzMpB6S3vRa5Uw8oLWZmXpahenkWDSvNVzPovcBQk6pDESTcFobbyxf2BZpNi3Biib1EayQbRJ7kGbxj",
  "key35": "4q3uXbgwKUu3wd6D8TT82av7Nkw55Asm1ouTHzkyiv52c7zNrxW98svkdCKgQv5k2GcjxEQaNrGPPBHN5QudZCTN",
  "key36": "2sdZn5sqrgXWcpW7s7P3Tf6mTHpeAxMYUfXY1vEG2zpzH3hjUwFRH56Du7AnUBU4KTNq5yPUXc1o6wGfEEiaxAKq",
  "key37": "2U4DAnSfyH3qQ6fcUgKPLrneoaMiorE4ezMsqpuKEE2FEocJSXx7NHkPcwTepUUPC1q7CfNs1Z4PeYuZC56Aw4Qv"
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
