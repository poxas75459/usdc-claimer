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
    "aSWDk1PR5Hk4vJ3gFJgdqREF3DWnXtfxYhURcAm2E8SkbsrhPpDVM8ToquGSpcY6vFHei3KgzLw87kBUyGcUFXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31kzFu87nfMuzf8KFgAXeMW4dZ1frZdWEbiLUranCwyE5USb2FrXeWDvh9P9qcFgcCQVaEBhzZLmXJxZBhtYpLRp",
  "key1": "3DVzo55HNjqrnGASMcK6YazysmQw2BGnucdJm96D6YiA82gZyWv6QFezSv6ABBTkLJUZhqpWFYG8yPtcHcBqN9BT",
  "key2": "CRZuLDtXmZ1xuQHcH68araFsMgSMTMHcyEj5rR4GCqmbVCMv5KXDDGgSBcBnuHcVMkkwN8mjG1LejRzUvxHjG6E",
  "key3": "123SrG61sYHGf1Pg3d9LRtqi7YHEmkNdxWczzQtxoncTJEo6QtnT4EKWDyUD3ZtqBsJjbrk9BmeVKgnkXNK8eBWH",
  "key4": "5Lru4Fkw6y6ZVVSDUSdT1WHCPrBaZDJiBuWnCBh9h2dLsHyAVGJheY5rVAVrDYbwhPwRP3M97F6CksUJkNhj1Ub6",
  "key5": "5amVn7ssQGr261pkZJQN5qTzTBUShAHhzUc8pUWzbca26W8hJbgQhB3BCb9wCAxo8BXrct4zbA88vQJMWQ5n7bbB",
  "key6": "5vBP5AVKxy8NhoPTN5ZTgdLTNVE3ZUdcfBCzVZeaoFzsxhuagF6WbBcWvMt8aDC5Gvmoek8EkVk1ocb1bXMhhF2Z",
  "key7": "3ccH4kQ1WHzqABJMWeHSWakC3uH71ngdRz97Nd4oaoAoi91QYxCGmmdmePPAcB2dyfQ3ERucLoXx2x6i1BywTp4T",
  "key8": "4GYqeum1LojrLZz98aNTV6qXHkaDQSSH82YmSZYyT466qC4x1Ah9SKsgFHFaWE1XbGgPixNeBbeA4wvVRop3Abgi",
  "key9": "5SeTZwVTyR1RhEdXNsc5maZz64uf4CZmyVLsUmsLcDNsUQ1BeqxicE77d1Qk3Vxo7cw9yxJixPfdXetpNC8djfaT",
  "key10": "5E8t89srcnsc5p8T3Sy9M4BNP5YfbSmcFMdV3DHJwJ7Rj1mSdUkuzaQnvFWuBTLiF1yYefRzJcNmUjydB9fMPHzB",
  "key11": "3VdR66XPTHFmHKmSGchxyrU7rpNBh4kHYVsN7GWhjaVrGJzfJ4cJxjTwbhEj3XhHmNop4qYBsqXBfuG7dwu9NUHy",
  "key12": "U2Mfo5X7Tmd1T6Th1KS5sNgnhzNxhiukgA6qBvH5puukhtTWqNVCnjJZCKZUxXFwW5TriZEP9MeatNSYPGUqVDe",
  "key13": "xpyjJt6voWqweybqP3PDTChc3r6rzKq8X8XP9PqY9Twsdcn2ZUfzMCT3T5h4Tds7pFchFkt1zBNokUFj7Wx8dNs",
  "key14": "5sLHuZ29F23M2P7FyJ8R1ZiHjQQ6SmvPjVL4VL7seK6RX651xNWq6aHn6BAkcBSZ74yxviMwnJ1V1TjBkMfgWjtm",
  "key15": "sUEvAEiqWmLmW1uv6NhZ2L72WmF1t7Tjz56m2Z2L97F61JFzR7VrZsrFem6jLxC3wy8KhVFYaUYi64NGeM1NzUj",
  "key16": "49tm98rK5v4T9xWSeWiHG2HN4HAHLPcSbtxHd3rCwNpJbZT13kDyb5RdGfVqsanHg89yu4ZkdtBK7bkXXbTNRwdr",
  "key17": "ocDSNKWu87rrdtSVDAMpKaaR3c5HicXxWmMEYW84uYmxHy1XViXZut9X8goyKH2VWgXHuTiJRWNg9wBqkALtrJ3",
  "key18": "4nG9TrMDBc1CoJLebZ5x6Q77GQZaJd7bZ7Bdyt3dXFLhbBwSx6m27qrtdCn5oBpzk9oz37bYYHABxqMTskEREQCk",
  "key19": "28UpKuoR9gm2NhKnzyZfTP5YV6Fj2twaUHigJSB49BNHyCJA46L8C611TPgGg8X7YGEPduyUtQJHnd5AjWfjABvk",
  "key20": "5cgo3TkdKNFm5NbGzyjVeRaz17erhRacYweM8piMzS89sVemaiWX7bFxG4zZaAQxRLfQCx8HKBcNdh9xVz9WGiQa",
  "key21": "2xjN995rMJMTop41jD19aKZMkUda9U3VsY13eq9mRSs5gLxAE3eEvdWvfzpjeesf9tHTT5gBwJuaMXckM9t5UwMj",
  "key22": "33RhTHN2KPczdZ4YAwGGoYedgPzTK1iWfhUbNLQjDKjvTAxQmQc3sRfKW1hpXfjmq9zaGKrAf5vwRBsab7hJSSWV",
  "key23": "mrYmwKodG16GDJUjafveMomymdQYDXJ5TpAFvj4pkTiH31A8rKVdcCZrPqhDMStVfeSnFhCLQCi6RgY9RfuzdAA",
  "key24": "5VMHjG77t5xuhut8YbpeqH5ZTKWSvcdNbTkZ1sDbaR93m31R8WTVuctLMLYf7oK7E3vjmoyMbWahyobK4pr7VspV",
  "key25": "3qfSxnePeeXz6yYGdaBfv3GeaK55667bsPZtoQuQENuNEVPAC7NW32yqqHyqK1jfYY9spwoq2Sa2wKDarBDy8Ave",
  "key26": "3QBRoUtKgQchsfxeVgKsSpwJSwU1B7xwRFkAFbXSdxmSY5w4qvs8Cz2tz4946ztsu4rn4bz4YDMYAcJn92ecmcrg",
  "key27": "hz1XgspFjv6431t5G9sdk1igzRBAurTt2YbswZwGBPB66Tp1GCQ7DrXRs9WcsBx5GyNLo9Y9F36B6LE3feyjmwE",
  "key28": "4g575YGAkzZKz9qRw6z8KWUzvvc1ahy8JjxeM4pC1NU2Kyv7eXe4Y3GXozTnZXGPh8E4p7xDVB7fVSjX3gqqhrBW",
  "key29": "2fBppXdYtXcSKcqXPf2Kzgi1fUjhAEeHtU5zKEaMJA97MDdE2upb87EV1aMjhwojmKhdu5Pkbc5DxtxKtiJcM8fr",
  "key30": "3LCLmygU4CbJKGEN71REp14YD4cAuTvPpmLkibB2gNxBbzwiK2GVa3YeekniEqJFxyZWcx134kqtyTjeDvBgddzd",
  "key31": "5C1gteimUYfzR6rcHojGh6MtXzczaUKLFGcMhGJZRV5AtZZMYqHbiDkgjovMxPuoPh889QiB1J4CuxY1G7DiSWs9",
  "key32": "ruFGv7po2S3Hkb5YmyDN1ZjEdHJqnHJ8fmNyTuFqTHzdXzbSdbr8iCML97Gbigt8QQrNiFJMECuBpxzEJWZV3d9",
  "key33": "4LLZzQhADuidj8wZQtoH2JLvXXwT64GJsokpq9GA3hM3RALQM6M4g9jTnCx7teHQhZjb8Q4XCX7vxdNrdaLnci4Y",
  "key34": "2pX4BhAHAXb7ALJsxDqbnVLMtYMbyvVKKXZvDhfH7vokMEq96UwSRhgiCAFjnKDaWpL2vmuqcdjEVaJoWaK46ahj",
  "key35": "Mray72w5bwc5YBwVdB83wRk3CkgQEmLNT831hwF4bQauCZwETazoprdbjLgfYBLYhL9N3RSEa8SmHLpaa4UoqvW",
  "key36": "kxCp2qMVjuBJ1dbUf14wMS76vfn14GqwXRYoh9mfPm1yasuQmSp1X5r11u9tZRnPA7Cq52gTmG4uhDraeNzhtHg",
  "key37": "31C5jUeN5umiib1bQ31BaDFbhhA9cafAxRpszMVGJA4CwoK9LnAKFbbV3yK1ETrsu1XtXf2Jk8a7sWmyt3dKxmaE",
  "key38": "21SgaDG7YLHK5DtUqDySZqPQKzt1BsvKBmQJGFdpRiZP4vJrWfDT5PYU47g7KjpwpmtXt3BpQGRvJnMB9y7ib31y",
  "key39": "3V8skrkG35esf4Q4NZMQVBx1v8Z85tbmk8XwcZhCabqGQ4HdP2FJe4TkLWv7Y1AUvsiPQZ6BYN27Df52gsBwkhE6",
  "key40": "2u3FW3hBxKqMdH3n5vkZUhMP3RgksdxjusDdgTMt4qJmpCgTD4X9kszsjVJZfEEPDuysyDRisdvZuhoYBXVuLrhW",
  "key41": "5phckUSCRnfqgGT6tR6fMSGfjpRPytiQsT6WfDUrT3sS8n6hWdwPKNQRpn4e5a8kfuik5HDbDsLPSqieQJ69nxP3",
  "key42": "22Ui72tQYdQMACfWcoCqi78rdjVkcZrvsYPaojgaFmrSwL54uPXP5sWrPrBfmwhtZ6SFisLhk3eYcUGUecB3U1gZ",
  "key43": "3BaCgoaEkakWskoPaotw4K3d9YGQJQ9vEsELXQmfWtMbZZ52BXDmDUWp5auQw9eXMUJFYx931ztFFmoKE2NU2uga",
  "key44": "3djn4j2j7btiYsagQ3PeKV1U7CR6r68gWBGAHfqCk2L6FQbBiQix7qEypCQchqVqprZmksRu3bWgG8DyEqYg1snL"
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
