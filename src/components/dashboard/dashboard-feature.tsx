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
    "3FBxkQ8FSRwdsBSJUS9jFn6jCDs981vdX79httJE55QtdsWLuRrKhZYACtZucwHQxV4gj9oe3iDvSnN2NpKxaQwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gKbWTEvFevu2GJE9Sg3JzEgiwED6bvmDmXXY2cG8JQc8jkRDy9BEziCjtiYaUFtVvChTXWvr5E218YvjtRHRkVN",
  "key1": "5ouDFpuJ4jdz7AwyWzjNjitFFfzc1HFCLbh5NpMrMf5EmAdem2xUZgX6T1Km3MTqxs1pV8qk55AHjUAdAYnJN5Tk",
  "key2": "2dYNNWJgpNfRCHz6rViQ9ecizQTaprQebbFpzBnriV9pyMgAWqmU8jumbuV2ALzewCwemi1WM49UZARRbpuUwhNC",
  "key3": "59QdWruL3oAc16WhgfNkdC6eht7J7MHoRF4LV1iKn3yNL9RV5AQKRZsqsnMk4WjM2B6bzUTwvQq25Nj76TjrTm8B",
  "key4": "5kjj3FCfXzxh3jMB1qrzznKuXF4PpEHKyuJhuwrzZxg1G2Degw4ZBMFnfTr2EUhaRNcWV6PH2s2sRqMLF1E1kiuK",
  "key5": "53CUqu3tHqr2wTjY9u2burMkMAJgytLmCy6tBj938NBDzusQ5tMurKSkWPKJk4AKEmqHG1ZkafmMAQQZakTaiNAt",
  "key6": "4Z6vqXkR8Az8XsXjDSPYuvqCQG7mVvh5iUD7d4zYNCRvhnZomz2BGUuZWNGwKB5XsiLzkuhkZTVc31eE8vpdpwxj",
  "key7": "4NPbTmMKyxXSH1JSJNEXa9TsSNigBD3N9sL8CwHJhHQyZpGTXHcYkP3cAcpifH8sW7QjwVgmNPsfWNFXYRfPiAEQ",
  "key8": "4dHdp7ss4aRMgeFccHNkvm9XbQhXLZQCNm9RGXWgrSjjjm3ARWUQqGBfG4DjUUKK6JjYqCNcYUD6H4c64zaK3gMX",
  "key9": "61REC5pGLqvnLcgJDXbxfHhCvBd46YpFiDjEmFNtdUH3oRi8A2iYYxRigLg9Wp4CsMEfFNNP3K96jypGL9cRcq27",
  "key10": "4ZQMnjmwjEGUzLL7QREHvtLjoUjF9rWtXxMsLK5DTVrW13AYx32vb7vFcZeZyPj9o5TFXVk3imvNWcq5gydSTVYz",
  "key11": "4sNUaEjMxDHPwenQ2Q6LS6gBBop4PYKEv9vjcfz7NGnbRWUGmTYmEywV3UdZWjcnHqTQq9P3BuxasVCRhAbE9c8d",
  "key12": "vMcHmHmLVQcuS2bcMo8GNWzweZDhC6vRC6ECJEs9mis1LGQMsjiD9JP6JYpFy4ieJMWDbfMxwXfvbuAL5GeaTsD",
  "key13": "53vp5WcG8zPZKvog6c2gt7qZBmD2RSsvKnFkLrMZkT8hs11TQ3iKbganwRQKazcbqjJMACuFAbD1s2Cqu3WcYNic",
  "key14": "5N8vdZDUv9Y85fRWfSkKbg1vEsoCmQtpQUuxx9ddVSRxg9wkqRXu9pncXVJfgbiWbWm66HvmSs5j8dAA18PjKNuV",
  "key15": "2skEkkc2PRsxxY3QSTEMAgwDK8u39YQbEeCNq5y7h24V7hR8mb9cBrvLUdUuW28Kj17gJVYL6sQ18BKHGf44KZFC",
  "key16": "3r525FAzmVzLWW2YV5iQ7D1Myu7teas2LkK3CsGtLuD3newBV9TyAUHCdYKB9k8utZsVPv1pM7FgP8WDi2zsi6Lk",
  "key17": "CR6kYwPK8PguNWEQKRYy9KKaDTYefTYKKQPVPKPYudVfgHbezZeVHRh8PubRsQQ4wbLv2xcDvyePTgVmm4yXojN",
  "key18": "4WJsnAe5fpc7i26fNwcQbzE1nPXFCCtm7AukKLqNuSHky5QRf3XT4MjUebWeiUePyKBSCGyfVVcZWgcmryjMM9qv",
  "key19": "5Scjr9sPoUkuugveQegbceNPQYmwjEn4kXN3zoYN3UZcy6tsRNCrQkMXDH1BcQ3cfrFSiXA1AA2KZdxmb5RAPQ5X",
  "key20": "TzgwHfYX5zp4JoQJKXoQy1soGbmWH2kNhFmu4VqHb7UWRHBRX3hxB9xGGR31WdU8rNdfmTzAAWcZLaDzMdVqbRX",
  "key21": "5GmqKsdR2zNWYt6NJrWB6UqXPcbywGHMa1TYNMUDkf9rNmLMHCGNm2YB7kdq8FtfnRWS2zQ7TJ5pJSee1pqPXmuf",
  "key22": "3CDc2DVKu5LZ2TP6Q7GsGTkfsFbdLAwHLyuBmBaZfvafXNTe6cmkKd8xUnaaqQrSMA3jwo32Ky5hMvzD2EFy9QNk",
  "key23": "2n2aV16vJLwhfxeHRvb7zR819MrCPvaRHbW6oQx1HeYj5R4GyH4cp3prQw6L38NF6fFNinWW6zJxFxFr9i6G3R96",
  "key24": "42zRCKUob4SeMBegUJMV4vRSXi6dbUSDitiKeBEdtZ9omv7ZqGCCSCCe5E7Typ413v2Nmf2mJVgHWWyh54u7o9Ux",
  "key25": "2Zgs16tPXxKDZaXJZ4p6rNh7MN18cy9FJbxNmeZyBvPquakEi4CdpQmFrk7WptYQV7nS93JqH3jjNJJcDNsWq2s9",
  "key26": "5neqi6ciHoUkHtZiwvwc7xsoakj18Wy1yC1CJi2ktSJ2LGb8gP8qWz414ooAqeZXffLAWFunHRytqeh1MkEfRqjt",
  "key27": "2Qp2aH9S6CCaUXBFP7PzaG5Cb4LH6bBHn7bXiLpy2oCA1bUUxpxQdfuEWjiao6xsU4bGEgqVUYsMTjhiDaVWWHQe",
  "key28": "4YA3HPJ24hyGoqeRnu6CX1teWHKzieYXBL33obmaoUiBaUPxwpa9fe7Wb8XRyfn7ewAofyZexNxy2trahJMb1Pmu",
  "key29": "3e4cjeYKNYbxsxyEQGW3SnkJWVikqUaHGQUD65K8Hue9Lj2Vj4WRoNeCt1zjSKz3pzcNdghFZsYhjnctK3CZLt1u",
  "key30": "MTQENHfuAhsiVszw3Hbm9n3NjDtUNEMWUdyqikdtUMxyxJHFPvMsEXZHUGsRv3zpVdM8NKYVztphQdJQNCgAoCE",
  "key31": "2DgXQHqrzLpQoSnspmwEmcK1ffWWxdq6YHXHhnNriuoiAo34t8nHXyBTWAK86eggvqKFtXQ1cesVFiouKgANRomA",
  "key32": "24gSKWD6UAwmESMZcLhGZbjjt3N8J9CH4jVi6q636M2gQjVk47ipEFFUzGpT1ZemZxsQScV4cfXsbPzRDMBFbs4S",
  "key33": "3Ftwwd48SpHYU33MzW5UKVrbtKFPzEswUXL2LNBp6kuYgjkNXeGKzwqsgVPPLmQQH3npyTa4EKdhcntgsniHHp3k",
  "key34": "25Un862drmz5N3Y4eRRwq3DosK7u56zV152BiCiN4HXBUwCCwtppnWL5gFPYsXWp2XVCyYFrU4TQHg6Fgyxw4ahi",
  "key35": "4o4egPJtn9YoZmbgAC62P46rErjM1Le1heRTYvua3pRgGEVPZiYjfuGDZh4uYuUuJyrCZUuRLD87nGqZQJQDCBoY",
  "key36": "X4QTQwrrTQqshVMDykJooNPeypRJZ6P8kZj9uTVhZK7THXqvpAXdxsvhAGqtB9uvR2MkeYmFNERFSxJ4bgGGh2k",
  "key37": "Sw4Pr4Yvu2zNj9BuJaZXoe7CdudnEXCxDxCvtjiAqCojpLwEvNKyA1YBiHiTYwHzbzF3wCB3BbD2nEW9fnNKWtj",
  "key38": "BTrEgvvRgWcW6sEpz8jpy4bV5dRtZ85P4qjwrtZ4CmVWBs7uv9uU6FpKDvUiA7Ucvvk41eLYgWa5m3kfoVDNfma",
  "key39": "3wMuknAS9GTgnB358VC3TuXGmZzzsv2eiNx4MVLbnZpVjrToxrXy4iaP3eZPhitcupsRgWqThyJKGNEF2dytJC8U",
  "key40": "fBhT4EAbFQDNRv7Mh9oHb6uvsQSpTgKX9u7YApWdZ2pJm7UH7Ehuy6ZrTLemxU5YonD15faUtfVpcd2dCFtXz8p",
  "key41": "yGdw4Sd68SecbjwJ6BwVVb3LqKyesVQfG1Nzn2781Skx8oeRxiKYkaht5MD3zTs8N7uTfUiaNFn4JM3B6pThJPV",
  "key42": "gkbRrdDkjF2zUj1Q4RtdiSrT95y94DpGBh69gCbVnfwnoEfJW7TThGLzyrEjRa9tyRYE6EwW9riM3sysbNssneE",
  "key43": "4ZFr2scP4cAdbp9afDZTd9VBfmZ49aYyh32xwCri4cioGrGpwjdu9G5t7LMQsBbovbiyhPtzbdvXc8qMvCkcnqdj",
  "key44": "2aDb52hKN63u33Us3EzLYdNdUsYWKH5VuQjTgn854rL6iAKUpnhXWNMK5Xwj3xGkfqk81uhYg9u6ubG43ahcBGEE",
  "key45": "2DhRAL6H3FcgsuWMCFJQfqvUFZ8cTDzuDX2r6PEqmFNJuhJwVgSCp2sVe3Bxpb5WAJcwnbP8QcSJbS4ToeuKRK6x",
  "key46": "4G5A9SJCs8hEjsb7tY6GnYFM3YDBk3yyVUr2Umx7YWVLpJTqFViC3rwLxBRouXBc3rmyejF9SaiCipn9ooXRJ998"
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
