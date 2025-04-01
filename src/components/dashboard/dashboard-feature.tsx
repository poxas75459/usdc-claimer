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
    "36QmafYAWm6h5Swg6nZ1WoVRJwMo8FhPfQJbAxVgtCqZeTJGNZ6NdpejUuWrVn3EjJCNYRVd1VBjUSWu5x31wDJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QXtx4Ts5vZARbjNiURuPzendW2FnAjQYH4V3U1VBiWBYj7aMVxNJiFheao8PQUgYB4ZiDSx59RuRF1v1ZuTKJE4",
  "key1": "3YrGjGpPdJQn1NUoRDPUCfmg4pybLzbYbYSvhbu1aGpZotFrezdDDzqNFDBBd9ontr2v8MGxBKZLjyknw6bgBA9j",
  "key2": "3B686tLuCxVAxSRoaMKW1btdeyGGVp5VeDPiVDLbn2GNp59wvxeL7WDo3A6neYd4fQxa8BunCq3mpfDh3YPZZ7N4",
  "key3": "4dqkema5Jp7EzG7MBhriMkis6QJWaKU6jtQw5rMMtaeGUJ9uTBCkMXdvbC91WAuwXAQqtRRCKe43svuLStMdXUtY",
  "key4": "4Goxf9rFrfcfBhKA2KR3gDbn7KmjTxSe9Sxp71iSXA1peM8HCyh4RMEVqbceLAZRKWj9aM64cAcQh4g8ZJKhsFZ9",
  "key5": "5vDcq7rd3WMBngr8u1zXRrjr14PJz8HtPJ8VW3aDNVZNrvRt1Nvx4qBapmqwLMsm9LssdLv4saBGWa4mZZhHwmj4",
  "key6": "hTBZsvK3Hi1oasQyNhLa9kDWZV6dTvxn9iRsn1nsmQJmmii55SRh6K9eFiULRB96AFEmd38GnGo6n51zjAMTBG8",
  "key7": "5Ld2wa1feBv4KwPnUianANhzPTUM9YKQswgYge2f1avFoSz81xq7BcGVvb8ETRFPSr56Ua2Ddi6BToj3YSs2fKHV",
  "key8": "5R2FU15wVqhFmXRGGicy9aXm1aLydSTr5TA3S24H3mJpUFDUhut3nGPnHbLjhgF3D9z1DUm4foUU8ZEpD1WQknAz",
  "key9": "4bUsyBbho3JKnp9wBPKoib4mPJnzasnm3RB3ygWVLXvDMoj2B2jncUANYpnP1DXbUEvMKSVtTvMfvPdjPZa1Vqpg",
  "key10": "55dQyZ6jamkY4GccvaQpmD5JKhZkBDwSgjKMc3CEDTQMn69zD8MKnFxhm7CtTdzs1LqNdZwAh2b8fadXD5KgZvqY",
  "key11": "5HkVR5hyKTZTZkvemncKSSpbEcsucFjmxusyig2fr8GxGFAkn7yEKEvRyNmLsdCo1jS4CbrPiMC1nDSDVkLVdwds",
  "key12": "4tWaUdJ8qqna9aTWPvDRdAPqDv472WmEEGnLxtcndYjboVKX6Vo15dBkpTm1bhYg3CHmcWG1VtXpRAhnekXusbo4",
  "key13": "gfpmEZstnV5J4ejmsEwhE2sdbspe1Sj5QLwWwtncYyU1eRVfBAaiMr6Y9PAty381YYYN6ihHQzxtwRyG9U6AVTC",
  "key14": "4yY6sM7LCg5GTz8qr6moB9fXRPcp6ysTE9hYT5PzgeB9miEDUdKVsuUXom586XTH9mbp8tmj71Zxj9NYCBWVnwL4",
  "key15": "2pjAS8D85iLm6XHVf9fLLnaXnydqg2hmNgGhbEUZLoTGrN4UeLH4XRC8f8jrThJny6ZpuqGkNPH7soZTo8u1j1Be",
  "key16": "4CSy1xFYdKNVDcUMJ5SW99wcTub2pjXYzpdLzGFFzGwXvaxX1WFN7Q3sa2FAgVBkHuywWiFzS91u9BDKKRKAKACd",
  "key17": "4CWhxzUTm7xojKBXLXpT9wGxGJozE5Y4KoukLsS4LcD3DHU8achZPEukryjSa8461A5SEuoqzPHpVRrgEnu5w162",
  "key18": "56kXu1HAVrYdK7UWnqipKVLNxy63NZXJZ2FCq99CTFYxoPGnUBWVVPwCBnc2qDebYK9WuRoptfjKhKh1EcNGPVYh",
  "key19": "3vQjymZhaDdXssFdqW16UB5eazW62StigsiEQLAkPruHrZzsr9fgUKR6DXufu4hASUTecwQubbiTVE4GHQf6erud",
  "key20": "5czTvhi641BPkoYceH12ewPAJ2JCjLP4AYGsnsVGoE9UiUqLGKL5HGSfShZX69oUyUrfE5P6vQbZPCbSwC1ETGs",
  "key21": "4TJKyA9zaaVeGhBPjwr2YpS7tyPJW4idaJC1CPwoBZqrKL67uemLRNhSiyNMjuTe45ZTa1QQrcnYE7dnbUg9FALR",
  "key22": "2Fn6LDfMPWjWbmeggD9d6iY8NHB4biSrLS8yzXtBypN33C8UfWK6sA3kUd5UMHbNfrR5Yt2c7e99mUvwYrNXhuwj",
  "key23": "486vHSB3rQ58BPjgKpQX5UWGkbVTNNC2CdzrD3LtotpkTUmZ3Hqxz1cwoCnn72aVhgZxg46rackeKRV2iKpEv1v",
  "key24": "5fPWbrQZdHzUhiyioxMXj6RkrQZjjJHbPKfx8wCvBbBkzVmVxs7tZyPLc2cBpoKqyCpLMb7dWVb6ycetU1GatJCR",
  "key25": "3XDDvRRpa9AUe6rEjR2rD4u6BrJ3BBsyosExp7UrKASu133deZMU4HtESzK7eMAWmHBSWFVJ5irQTpvRFWNwA5RR",
  "key26": "2mSsYn3DrxK4R9fjZnafC229LChodG3mWkZPTdBZH5TyVsFr8sj4U6LGcEmHQLEPUJNgSrf6SGK9epFKbsqzmM3S",
  "key27": "44pc6TCKrJvbEydvJLkJ3b72U1p8Tiru4KYDsz1MHgxjufTgCGbHzpeJU2YYv27ucr1yyr7qXZeHjkGLaxjHLNMC",
  "key28": "49ZPH7Xk2a9knBa7WtGZ8N5LxdLBUvfHXR5rCGPEjBpcnYQYMBY4aRWuRfTEQJLwRQkAswUuo9MyTeyx4enTtneZ"
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
