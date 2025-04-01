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
    "388Fg8C3WFUo6o2smfCZwLnUS5GDDn9FTTaujAtixscr4STy6qpndV9V4CrdiewD1pwzCaN5dsrvTAkK15PybsLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gxexNSmY2QouyXm6CNh7FM44GhBHxj26pAe9KRr7KWjzBVw85jxNeXBjrsgXh7vUuj5jZfvRhK6w67Y2KwpNp3w",
  "key1": "vWjg69b7cLoQef2QJxoxGcMFr7HuqohCaeHpjHRiQW2oBoB9RskTZLaV7B8L2chiBgZ7tYaW81QNcHp44S3ZEiX",
  "key2": "4vQrs4ZGcPrxfyb3M61KTWK23U3HgoboBy1SeTFqpkHEjmUuZRXPagfRHmoVpsKShhStJ5rsE28APGSNu9K8fcXo",
  "key3": "4Z9n6RynP7vDdjSusxAYqcSYUboPqH5ycRUekWgCof26kjDAUzVNiDFZVzpbMhkuGRaybkkLT7e2xHbRKVm2yw4X",
  "key4": "2fHm4RVigJvEVEp1TwaVPgQicRKyPkR3zLHX2b9XgBThZN8uXxbVyek9nMMYxKAw524Koy5HE4MhyX6X3uNqM5La",
  "key5": "5wU6dHWpbozNDR3xRjHBTjhVuuHjYoghkQWRuUCSYPCvwQdxsZqmxKcZeMMZm1kvrgPWxRqCnMHwLy8ehrdaJSZ9",
  "key6": "3UKzfs9prbZQpf7vayGjRyuTvqwkQCGzwtTZ7JR41rPkKPEP2UShcshQHV4K4vFtJmGq8kPbjAJas4adGFcUsHJc",
  "key7": "f49p5WDcnenQ2K1Zb6nXmhakGTniLeodRb1eyr6SUUFe53GJUR7fuTNr23Hqv5tPmZoL9PV8TkqXWGmNDxB4AoB",
  "key8": "57t8osQYpCHj1g1ycKt3A25CFu5QVzmXR7119e2pPLDShUZ3xUNguwiiT92hkGLJjg4no3eobwdZ2LFq9FmAMsWh",
  "key9": "4ucJD2moe29siRzyW286zMfaHtFbgUFGJ2RGkxoFLJn5cvkvGmPGAARU9Vk5a9mMS5qhnjmUZANi9sAaz7ptuGnC",
  "key10": "25Hui5CE1tkmvNpf7GYrTiK8sGZsUF8AUTKDFZu8GmqEVtVPiNqMVtmPxmAaj555V2ki6Woof1aUU6rXZGMxHSx2",
  "key11": "3HJLdJhkW9Zx5WSakvfxWT95Bo6s8EAyMdw8PazmRgduf8L7NVgZcj7QC6kPrwNtprEsQhipjwniBF9CXGT4ktkk",
  "key12": "3r3oxEk6ttq1JoTw73kngMb6KbftTQDh9yemZbo53tjorBh6HXQ8LzA6tUdqhUUrQcrqR5m8MAc46drKMgjuUdZM",
  "key13": "2SCrVFEKjBRLcfWPbSNfZVwDoYJtevXVmdnoPZDmJHLqkkh3md2KESFYvn1NHG5VaTFPKCZr6AkvRwu6kYcpQvH4",
  "key14": "38MZWXwnfUnxqgAt4qa8jS3ik1brQhmtVQSz7RzYZDW52R6wiAmF7Kjp3y3VHTP6eBFUErWX2vjfcyjW9Wq75uXV",
  "key15": "2fgAoawwQ7Ber3VNAgPm6Tq33Hw65zoVr7WAMPFiG82aDzBUrMYMMvPvPuVhgHjqSH6fxoC3WgwxvPHzHMm3muCH",
  "key16": "ZVHHudjJJ2xugHqeAgWfRRB4cSc2g74JihPEsc68GxQ5bACk9fm7gtN43fmLVN7cVSd173ertGQtpEGto9fZ8c7",
  "key17": "5QEspRBTBYVYLSYLgPxgNFZa4AmjiZPYZejVRhjHbdLRfdhS6TbQkC32TEVVkcBn6MwF35ax1A84WHcX3ZAVJ9W3",
  "key18": "3p6auAjVsKY1VQwm9b4oScfycCqmTn8m3Dw7h8X6nxxrxFXxMLdCW3nfBLgJaoki2azfCCqDwrheLSczqi5MJx4B",
  "key19": "pkYacmh84JDmyQnLZ1psAbyRnpGjGKRZmfxroTDoJEQFZcsXqjTNmdf9tqQrA9F15MnPBGNwhBzMPPsZjZNBuJ4",
  "key20": "2BEEeehSrNyb1qjYkZ6Kh5h73CQ6baEwLMPMWANbCEyvMq5fCaMc1jHe9Xjc1ZmjQ1QTY8CftMCQwe2ujoMhyLJe",
  "key21": "4fKZQ4jR1F5TD6ugU49RTLEMWoEjudUj9S2twwHw4tWxmATXT396Ae5Xx3LpyJwhgkyqJGj2sdqqDyPbFP3reD8E",
  "key22": "2Kv7q4DwwbJtprNAyoF5kgzS6vGagNQZxjdPNnuQoK1i2eMcXkgmm5U1rZfUm6oDAqtHtdhsckdvosZ3RLB7Aife",
  "key23": "4H15FFMh7mMZqrfMs36w9dTsCTvXL7VNTxj28bhgHbiKvfhMMi5Ey7KELkVkbvrhRJ9VuqwLhaVqBZmZt35mvV1x",
  "key24": "47MoCeGgf5rghNmxW2mxvt4zByBPXKrb9M81tUX5vMyoTnb3L54XKS58f6Jbkq6cHuKufVUb6vHrUxeRVM4qjnby",
  "key25": "3Vw7vVLKN41QMb7XELXx7ksjd6B6Vxi3fZdYR86JVrevmYPYKCG5GsunLKaQrzTsuiXevbC7izAnuy2qNFciuhm3",
  "key26": "5RA3VJagBPYvSGzLNsH3c9vxPXFh4gFvW5NzHGz1K5tANXEtwwcuZBUEKkEv8d1yUa1s9GbxAMtkrsUabHkp2YUr",
  "key27": "9KSQSjKQ8SJi2eeXXmMNYmfQTbqA5Gxoyp7LEDQKQX5STZNH2okvLkoppVUMBfVZTBjcRMzmqonrjRAJEAsTqh5",
  "key28": "5PLhUrbaACiuoFM8okDqnxFBByMXst8nEunKLdH1dZLAGMzo8KC9mHUT2GLEZvx6XgSbBpRtz2d3c2m1SJpwKm2B",
  "key29": "4tNcyDgAsZuRuPfYjTvJ26wUtmiebGU6UUn4sWppWq5dHr5Noky8eVG6ksqLGxoY67Svqtvdk186Gg4cf4gEZdva",
  "key30": "3tYX4Ed1VwwJod6foHxVK6Xz5NBK6ZLzR3n8qYPGHRNVAVz9xWHDxMiqB7uimYEgazgiXLERUJxvoNSeq4RqxGah",
  "key31": "2RZbjuhtFSSKvkrtideCLCuPMBvVizVtEyggZ9NV1riDysR7rBrrp6jwcacm7DaM5hxTFd6E4Daqzhf6rdnFSqdh",
  "key32": "5b3XF9fk4WNmFwEkPfLNHgJaKmLMUh4cQnANDk9CBWBwHfALYx1hFypDDCwp6UizLWVMDXJwqDrk9dxTt3gfa6bk",
  "key33": "3eN7NaFjcfdbpu27ikx8c6wAgw9JCwWXP5pJPYSXAH1nsAt6GYY31U4HpQzeSgwSjF5HfeMXtjppbCbW3WB3gg86",
  "key34": "4KiJSYGSSrxrN8wfgx2YSs4gFYuxBg3FiKFozzSNQiugmWUGJ6bx8eDvtKc4R3t9KaHS6zWHkUicFZiHp4spwkL8",
  "key35": "4VuMPDTGp8UuuAT5whWnUBmJHgewhbzyzRwQpHb7gxKJ7hrvtYm3jGuLmnutN2mvqqswwExGKeynwLehW711senM",
  "key36": "2AauRCEQL1AN4hxcAGqsfNdmntvbzGxGMTjrkN6dDcUUYeggorphP3br6BtRWByGY2EBiiea97Ve3yLyamthiEt4"
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
