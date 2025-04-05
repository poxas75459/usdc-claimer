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
    "aXaqpVZYtbSevz1oT4jZRiJbsUq21dxsorgAMrQyuDmx61TSmrV2PGHdxj66sXZYYSAHcbuSBe7ib2yb3tCgAQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qeLxy9LxZ7RBuyntU8Je6GfVKpyNWFFknwPa3EEdDFXV3aJicWpNqasdC7LKUSrqgXM6YXys7B6A83MVLnu86VV",
  "key1": "5dAGYTVhN8MJzx9CzB6KooqF8jKJzagFprqsxAW22fqkqkqbvf9URJzgzget9jUpJrSMh3Q2j17wDYHSFDUQQ5Uy",
  "key2": "3v9xR8SgeFy4U8tzeQa6zxCr6a2ZfSc3RRDKrVPv9BcAmWYcf4JuSnYAPjFtYfnaKSu1CoXoSnJk9pETqzG4NeGz",
  "key3": "2La6tvGP2XAAif5Z8wbrAhinjV2ttdAai6BDD5vJ8xALNeKK7iFZDPE3shwCdo54hNhzeXPNX7vzSiNdnVRDSxhD",
  "key4": "3VZELPEeMoEH9iF3VRBtJJy2pt7P2NfcZNNVS2Bu7QH3JJYHZtf3DCSFUHDiryrNbvU4AXe6LavhjkuDbLN5FLND",
  "key5": "5VuvBjJugVVnfpwn6xHkNcWaYdyDN3JmUsBrbCo9ULnzZ9cQxGG35WwFrqkJWY5VtkNZLgG8s1QYmzcmENF9dsZf",
  "key6": "2Q1pBVApcDSnN3uimVd72kuqf4BsbJJN77Yd3pr4VQsqrko8hPA7rH4pzv1C3D2GjBpjbknFjBAPKs5AgtJnUMYY",
  "key7": "3jGYCXgpzUt4ijTVMhZzFokL61QAG5NjpUWk6fRrGSrNbJuTjUpMgrVVPQjnRaabSP32L6vrHB6LboVbBQFkSgYE",
  "key8": "5KZbG6hwu3J2RUMjACCYkKB9zRKUr5im4P4WJHuNMW7EwT19t4RrfYevJdL78GTYm97e17KqNQncg7YhTmaVAsb6",
  "key9": "ZD7yZULkGf9NJtzyL2je27pBiP267xndA4yRv26pfBY5C3Tx8N7uagY5SkKfUuSqwRyFNtNAkKa4JWht4io7L2N",
  "key10": "26eBLoVaxCuWKni1yPT5LzqHQxseLwuTBx6cwqhsw1PyueUBZsxyY8hRG3Ff1ZmqGoNLQNK47aTRiZsJy4mETBuf",
  "key11": "2cbj9MQA3oMaadcvLfXP8ejambpFycFYNP49DyA7fJVGBX8scgmG4kZJnoHCgSiVDGc4htuEvVLfW2EY3EqtA7Dz",
  "key12": "3qLGR2LqwGMLXM517MZsmLAEJvtX27uu71B94CPPWUZ1A1k4UJTREdVBTHtijBvwT9ErzswZ9gPS2bhuyu6Cg97w",
  "key13": "3QoD8SM86B3sh9koDi5vwcVr1Na2HT1NQVQWKyQZsFWCAhM6xQp4tECTCD6Qq79bqXJNy9LtCdNXaGP4Px833kGo",
  "key14": "AZvSinKGeHzZQU7VtiyCWEhVPneFh4R3fCWUMozdP77xAEFyRBQ6qtpxVaSctt3u2dwUcs2eNBstxVsqmvG99pW",
  "key15": "2Vdbdf4ZzNd3Twwt2JN856ECxXJLN9EzB8XbgpRbnYwZjqk7C3jjDyJPocKXrgziBQxJF8m3npFvq4Jw8meAGEud",
  "key16": "2cejf1vaUfJdhdxF8QgcUFcNFRVYtfpLzEfQGGUsHRH2BDDdDuRx9zPYJk9i2nLpznWMVhs7azAJfZDKmpVVccrf",
  "key17": "ZPLoiNqRLtbhqVYQXUkzYkHUawaxteH2NEhPMa6gHMyQokNgTG2wJ6u4Hiv6BUeyG9cWnCExMtMs3FNHJPwm8pf",
  "key18": "5YT23mWbU5byRNVGCuj5Zcbh7Fv5wZS6XHiLZApyxRQPM4yQdvmUnx8rBPZTFGxvuZYuK1DkSA71koPD1JE7JsBp",
  "key19": "2yqpLpEwtdWkR5ALLEZ2nxrfDV6sKGgo1Zpnoe9kYdrwuG78nFhxQESyCoQN2NucrR5sQMTu7U1SuYssS7iP1F3V",
  "key20": "23jDzNk95a6ZEmAJ1cTFiapXBCzyUHGPJe36WCNDYPkshmErDHaxayR38CSNc9tXGAVacH77hm3ZXTSrRrw71jzb",
  "key21": "3ExXpofVDs2dEDw9irHV5taLe2iEMAxQgEaAcV7RovLuhS84y6DhbQX3ZHp5Yx4yLZxHu2SnHc1SALstfcZEUUP6",
  "key22": "5avDSA2WZDs9ciMQqPt7sWvHsr5HhUZmEYJ3damcXvdzYPZ6YXaZkb3fds5FkBjBadtufbjtNrWGM1mVMN1Tx72u",
  "key23": "4qfjC9R3i33f45AFqWLHBGW1U6Dgh46qwRroD4FYZ6dFWNfV2N8sYwFn6iYgMtetmrPRjdZC45i7vhNQAXLfXQ15",
  "key24": "5Sa8J8cWcNdjH2iRGq2hrTdx7dZ7Z7YVbzz4VBTx8nndLEDcHX436YsaFjverHonJ3Drnkyd5PmQgPNksTrFoL2y",
  "key25": "37VD2w9p45wzbkQkTFWcwwBcvapmxcwkVysEASgtnecQMchDiYLKjp9fgchnwQitfzSu25bEvt1Y29hCwk25Ymj",
  "key26": "31pyLuKb98Z53s1XaguT1C1vfHWEVA9sL84JpPP4a2U9qirhdnLyhr9EkEJ9W3TFjD1gvkhRmgNwaCvhjgzBDzXC",
  "key27": "mNKDGFUeFbSCbcDGTg8dPXTXmk5o2zjfztdQTt9t66pxNEo7mUbMG24qzDuNtMVqGmBg58bdQQwNtnXtqQZzKPg",
  "key28": "415RxBqXSKhZ3ifr8pBEeHQ3EYEeHZ5nDXNvwMsbaXLLQ9K3zfE1dYpivZ1w4Us8gpPaCuYQDrsLiktS7rPzEhRC",
  "key29": "5doyJgREYGcT3H4cjjYohP6ckzXCuak3cnDrHKQ1RKoiBBV3vVSyS1HYKVNa4fLeh1oi1yxgTGtUjUn5hddcbyh8",
  "key30": "4y2JepTBzZkDhAdJc9ZUsHNMqev7DTWj37ZK7Z8A48Esafw93ZixsHB3ZeEyUGKT7PY2QhmaH7DKGekLZaXLLRdg",
  "key31": "5TkoHyCDKVcuxfcX4Dcrs88aQFxPbyxkQ7ymh4brvK2RyhuzW8B8CjiybD7wjDuUeZvLv6VQLU7AjVwsGxJ8wrRr",
  "key32": "3gyP4dxEW416KpTPrCdjh32NLn9pijGi7BXgc1hhXKHz44e3sa8q2nfC8dnV6RYzNdBA2uirhhLZ2t7QQmSTW4if",
  "key33": "5LKt94rx7iq1SzRv7jHPMZe8yj8bv3BvfiV7nqppc5xYQpWzCF6rzf6XkcJF6EkFwrzBbBejKb2Zxm9B6zwCVW6n",
  "key34": "4tisdk3zGT6dBHkGmUdcVF2siyf6Q5J7dKj3iuNbs9iJeSLzswKnBkjzfMCq8hi6qwd9i2hrgzq8hKxf9pawv3xW",
  "key35": "65HEqfQmiUcZeskoAAfrQMAxQwgYEMJjRsYFG1bFYWE75iZysBdufBm37jM7UXRpMXRYWmEWVHQhYuJ6QfNUVGWr",
  "key36": "Y7ej2A7fse7y4y1VEBBQFrWsoXNA2AeamYviHe7vThXq22tiVdmpy2NqsG67EJuoQifZpCuGm9bH69DGbgxNYKu",
  "key37": "5x51yDktmSPLq1hPhkCzcdAkchHXZup9j5XxaJzoBcNYFx71bDWBqcFa5m8ZUHdFj1t6iwaG3wGHWKqWh3m5mGAA",
  "key38": "5i6bnezxMY4JkfnyoJs3ZarSHo73jPUdSehBKSrqX8RWwVxVj6E6JARx85EgFbnYN1iuLF5PpiR6HHQcPCBhSf1z",
  "key39": "2YSRNKA3DFP3MrihpAvYoovmpgPMKYHqc8Dki4fLFpcNn96nTvY4WmnKaqeuuY26e4iFna71NfNdHTC6WHk4AB6W"
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
