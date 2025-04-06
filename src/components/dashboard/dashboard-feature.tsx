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
    "4KJcqe9cCwGd4RD35ndk9nXNs1NQkgtnppy6WHBDzwytGKG33vKT7EfE5i71ufhVmGxQUvHj1fi5ejbSmg2dAyUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SV25VwfwyhJASzsXByzjcMwM9UKMGJ7NnC3RtKkcYWEG1uCnDKQYoKbXUVTB8tb8sq9xoSbFkpVNnt8dNyZHciC",
  "key1": "mwBq59gEdeJiTvXveUK1Swk1dVzSCURuBqTskLZsezGH5aDTHnaLMBuHkzzasRMFdTa2iL7amLz9eJQvHLtGjD7",
  "key2": "4kfftC7AECTHxsTqM8H64uDugpD7cKm9roW1MCX9cKbfUf5KN8aexSPUTYsUBtY42Rn4mfS1bXKxRCoadqzKPz5G",
  "key3": "EfduZSHgsoHXdZuxEtuezwKcvxS2zyzpv4mQTE7hDjVN6ZVXZV6i5j11XA4HxmQzEnmxZt32zNfEmxF6ydVpfWi",
  "key4": "2tj3X2XwkF36wEQoWN1NYTZJmsPKAo3DkD9APjY4ezjvVPzBf6XyCku54TtJzjxsSw2sroLmmBekov4gRJPiNeMM",
  "key5": "4JQhXdvpQcML2JB23xSa67gnwdjzFrJ4vZMhMYVKiFekjtKxY7CQQvxh2wgfLRMKHaaXBTTD5SxHfWuupjyhyWMA",
  "key6": "4tX3k4fYTeqbCYG9jiCM2zuM6op2MLEZNawwq31qKEPVCinMMYLjV68dxVFHXYVoTx7UUmwpJH3KuPUNSf8Rb3ZG",
  "key7": "4YreBjwiAsKRanF96cwTumSWdtL2XrrZkJkUf4KcjtgiZhxp8Dy2uSyQ7AkiCvZW25p6mJnwCzMMYMC41uHYue7L",
  "key8": "4ytbTnUtMBxfwbTKAKRMhtFfn2CAN2bQsVpip9VYBUfbpUyfqWj8R8CegsmaLHfodTT6QpSTP5jsTGMKvTCH49sb",
  "key9": "3Ysb4kcsV9BpwQkQyyMxR2x9f7542qhFkZp7R4yvhivXhhVfQJccPZ5orNZiBbRU75yBUHvMzWQ7brfYHF9zt93W",
  "key10": "4P18PiPq1puhqWQyuHcMYQMqPWrR14YdJyMBKxJd7JQwVJRLp7abQ244Qzt2SyVGT77jKRPHC9NaiiBv5JREuMor",
  "key11": "2kLMf61G8JP7aQj9Jm99UBGdDshk9JezsaGKs36pJ8xc7dacLsXRNYLrTcV7SfmFcVKsw2TdcuQSKXY9QwoYm4nr",
  "key12": "GjEuejuSQNktEQwnAyEFTjTRgcaX5rnyWNgEXtnCJGgSsjYxt93grix4CXeuh7gaSChvzC3TESkg8TM6vxtvcVs",
  "key13": "4VRFxddi25e51cL9ZDdQeAXNuu13wbLcHy3Kq5Sejrwh2dnTzWPzfCDiLA96EvBJQzqCeme8wPgSQ2Fna8zsywd",
  "key14": "3zriLWkvx5ETHge33LMqBiRPufsyiYB6ZeDS2nAP9E6sQi5gG8XN2o2MRptcNBvRnu8HK6YaA4QEF612DHAGGzZA",
  "key15": "3vqpe3qnURiTKp5ZWXXkVy6CbV1DCtG61b71DHzZh63redZKxgrzPcCcxRV5u8kEEWWEPUVhDoki7PwoU5eUgYhV",
  "key16": "3D5VJndESFGieUzYWPnvwxt82BzDfYSXirLqjkpQKoWp8KoJUFan16S6egSMiKEDdhXrWWVGtk2UTR5PZAetPFGn",
  "key17": "5xMhEVXTYK54NDkuAK7wduj9HoqUuApUZ6zkFFrmHKpT3o5yDvnxaM1h7MVV3fzMHcxGbkNjYVAet6anW12ia3n4",
  "key18": "5BxVGj2sbByVfgeM5NJSuaqcWwbmedtNvjtBXRandSmSGnXemTiaCdBYyUHurQ19jiuR5Tahb2nDWnFafxMDukHn",
  "key19": "4HyVbiB35uvJPqihsoFhKcf9otm3jwMgpzCgHxbyTZzTXCp9SEdy8zvdyEhBWNDXnXnzoaAgAYsJFdePAfU4vPUs",
  "key20": "4FX6MQzD8haNqSxxXePnGf3vFajPbV2hKbi5S7Zp88uQfYkT889NRNy97C4AUC1wg2pTLSM3ZmLiGUjhFPPgAA6q",
  "key21": "4Nwpb3nS5XGNRMirQZmBVQAojFvTHNfoJYVeaWUHHvE4YPzKx4VtzuD3UWnMzSVfJB6uNRJgfgUzYKBrEEARPsuN",
  "key22": "46mGKmWaed7DLyjvyQdGkP9hfqnujVMxWucCXgEhMBAvW6HU6aPQeoMCMotuzC4Z3kMfQpKR5hqUU6dUkZrmj6F",
  "key23": "5iMeQwJXGxQe2XY99zrt4k6fhLV3BGuAFjcuFmC8jGF9YH3zHpgFoh28XZdwpTRPae9mSS3bjbyo4AUrumLBZNAj",
  "key24": "4bXa2dzvwHCrpgE789SLw73Zo6tZyFCE4tcHcFtrWtLrvwpD1nxbCxnCEabe7pvesUZZZfgnoxagjCxo4qW81pWE",
  "key25": "5VGMpGMWp3kTU5FKJNTig4R4rD1TV6gaH89KbiWQKD1xTCzMp1UP6McTz1QuL7iZHZMFBe5SdkQriri75yeR7JJx",
  "key26": "31KqAkPSS6ToWCusRUCCA9H4EjMk9vtfeNahxAiT8rBDi7KXusq12Yh5DLBrVFWGkdERVyZsnNMt4JmB9gjaJ1S1",
  "key27": "3jajVMGPzMQVXNqdvouoEZK8fiUTanC1cUx3GEBTFrtd8Zcc6uNzKfTH8rXQFU618wuGSwzHJhpLEo3c8ecscSqr",
  "key28": "5AZfR7nVSsX7awGqAnnXEneXqVEabTvCogYisaXk5eyZoXGVDNsHoUjwWFeZcTLQjEWVnLNupp7KkczLUiMbtMc4",
  "key29": "2SRuA4Dr5i3m811R1yZyqyAxASrJQmjdkWgqkqrN7tTqsb1oQ5CPiHTGiWU2EyX6MZPJ2XXuvTcXbSaTEPKL7rba",
  "key30": "3fWoZt6854erAsaidbN9BMAbLAsG9AJBderg9iJFPf7aYPPuMZpW2uhFqTB4shEFoUaiG8ELPsPwFbSQYyA2KrCe",
  "key31": "2w3qbBGjjW4F5aooskV1Yak1tssfk4g6VjesQqJgWxewHnVuPABbP8qYoVwosN9yEpEdMgdrDEfKRdRcv34hsPtu"
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
