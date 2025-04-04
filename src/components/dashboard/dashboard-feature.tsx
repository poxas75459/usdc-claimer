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
    "2wnKGhvkFTmHNFT8Ma9QBCcADyuGuNF6Xeb2YamfFWAjGnjwgBuzB7UU4Rontcr9gQJakWkeSwAdKfbgWTL4imXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p8Q1WPZbJ2Z6D77yNL2gQqWjaG9GyoyJcmqfpgKWcMU5YiWLRKBx63g2Zk5Mm849avMXmMS7rfwaD6WCJiR4N7d",
  "key1": "3MWnk4QYYdRzFxstoTrzDwXo9frXRaRp1HwyzKCffbwbzU9q6nmm7pAo9jKdkTUSzRAMxGPQcEZnyBxz2Aizve3u",
  "key2": "4df6pRxpQMSzMhW89eNcAUxgU3tx52WKha7rf9pY4SWsZ9wjAkXs962qCygZ7jaCuYXgXtXq4vPELLwJUcdpJZsD",
  "key3": "3jkD9Xpn8qdxkuYzMH8C3MHgULYsXjeVCDDhBxhWrHcRh4yrtdKADjXgFnvZdw8GBxiUSdb1MyYA5CLeJKaxyQD6",
  "key4": "5Q3eyamoMGhUuy6cc2fyXfPX8HfgBFcA3Fhn4XwNX2GAtGd6WV1pYj67rvEepcc1XGwdei6Zt8nCj7ZFqtRKVPLu",
  "key5": "3t9moq7UJqby1pyzETXV1NH95EsSJ2PK56sCdJXGDWnJHDWTjhRNZ7UkH9zHCXQovbL5WGwzhCGYauygUshyG7DG",
  "key6": "66zyyLFxfzHnCxsL4EbQB9KXCecKDPVAKvxvS7WgWGQMnpWwfHBAeoWbFsqfNJBVnMbgXTn2k8KZneJWQ9sky9r4",
  "key7": "2LzorybDkxo5bP8bocZJ3qoCBD7n3PAQEXkPTQnHjX4wJcnCakFRQCCgFNetH1SzqfXP9CJxm44jmq315DYK2yGZ",
  "key8": "4GPcNx8x6ydg2HRTewBz337Jj59Mq68Wxc7fGYctWbYkTDM1VKbkHoAFnwFrqvN3zNfJBd7i4USCzA6RR2kH96b8",
  "key9": "3z2JszSRZ7umx587vLkaAXGq7RLSFR7PF6HCKZ7DR2ZF4dLvpPkaahiwr64Ebi7a4JL1DfRZtE8UVqr3VFnAv9zS",
  "key10": "DqZF4UgtwudHpvF9S1n5fNhBfPAqfoSu6YSU1fdnUANo2mQN2CWzdZqEiyyQtewY3wpoYLMvn7UZ6crwoiyiy2N",
  "key11": "3QDv7W4bJDdhVgvswwwfRwvn7LWgQUhyNaH8XTbiht4kSvrFD2ZqZt7j3C2nhiKHUk3KsGzdkMDBvfcTpwccheUM",
  "key12": "4zHagmG4VT8cdEtszN2ixgbawW5v1hpHjHTPQurfBW9Tt4mjmu37e8Sb6aDxYRvypFASB1JcqiiEkxb2EwGATFPc",
  "key13": "3bqr8rYe9jYrgGrP9G3BGVcT6g5R14Kte277sU5A2RfZonBb8cQx7V4o7Ax9HESFUmZkKN1Jnd8JU4qSXuYzgTYq",
  "key14": "4QiRvnQRWwezimyLsh5xN6jgrsYeGwJEijTQf6HVxRm7QiETsvXyWtZzyjq368xSwbUU7s8KFTkzu6zKsV98zKah",
  "key15": "3nz4hDneNDvyrgfi1mxxiix2UqjowVYRBgXdUugM17ELjRtQFmGesvMsCTpXJWu5rX83Ycu9TqU9pJU8gNxHqUer",
  "key16": "4LjGoAwD8tUB2fhi8UpJfWksztHSWHoWgr369vPhYK8oRmLvMuKjnPbpjUN1ckmLaCUCeVBk2pgh82xAVHFhfqLs",
  "key17": "4JswREzPjCGtQPqkRxg6RkksWTWR71Pn8TP3ejYTncQYihjFarWfMnxsSAgwEqTM4iTWaEVPvda56S9TtQueXUWY",
  "key18": "3Wt9teqZnJfGkicVWSgj3EGqFX39GUMmhPwW9G5MDHkM48y3PeNk3oTYSAFmooufTUokz5n8qkcnNttf28x9tv7j",
  "key19": "55vswxqKsiBdsGPR4uxoCjUzZweVqm9UdMX6NbejiMXwk15WYuZQR19CRLTyVJ2AFMX42sxNjJGpVj8tzCsXFpkM",
  "key20": "2T67KVWvCyHzHyHmP4uPA3mVCc1esmCFKSJgnL5LQpUfELtYjoKsDFZQmkSYTXYFv76woEktkGyUUK6PiZk4qeJx",
  "key21": "4hK2f6QbcGT2gK1VmTfPZQe8vgihpdcpMkqMg6gVVCkNnv7C9Uv2NEWpYAWMjUxreiMWmPVnrYdRzyYkRbM4o25Z",
  "key22": "2WMPWXjUb8CSBZYQQRiaajYK1pihwh2bgDTfE9y4bnijk8mnvn7c99aZ5wHZZZGPXFjhXr92tGdPDz5J2FB3VU5t",
  "key23": "54aLnK7QX8HKBPTmwr6yXE97uRiLqdRqBpnw3uC8t7LmgzbA78PXEr2Zo7nfXAtmTFedrmjHkZV8mxqRBZsVpFgG",
  "key24": "5w3U6LpkqBzJuD5LUoNXJU7tBBiNeVdzcSZizepv9YhKxcq93LcSWyNYv8ZSGaA3G5hFCLrB39QwhsRq41iqBugg",
  "key25": "4v8rux2HVqmZXxxQaMnxJuZLWkYeLPx7botdLmFCPZdEDhCzh9KxeTwsFMr5gKmjMhnsitcxi3hxVtPjhewVn64t",
  "key26": "3d7kSyWuU5x59m6ZRvWfzbK4A4ppjHqLcRreqzu7kbzoTFgCWDyjKZ9UfgWzVxVkXWgoop9cSTqU6cfpSYRwLmiE",
  "key27": "3NK12uzYAS9dm2TEmsGyf58nGswUMbTorxteeJZYDGpG5mNvK5na559EsKX7zgttw7XyJPvHBfHzh92FcUT2seKQ",
  "key28": "4A887KzRnmXNFEpZFaGWqNDbQdjfbJzLE1gsfKaJXwzCPCVs8jBe3TyZyrHsc4QS1HfzHKHtLA6iSbch5ZsU3CEf",
  "key29": "4oeTmJ4s3EB7HEiKr7H7PDWUWmvE4Cmd292HfpKQ8SxbtGgWuJSx4eWxWwrketL6HuK3NK8zSH7sQoPdYZdKvudL",
  "key30": "n3DGg6ZseTMXsPNJepMEsoGKabfvjSq3BSiHrhRvmXaTMQfd5mTTC1jjFT3KQ4hvWcHRscKedh8x24rn6fk9Mkb",
  "key31": "3Kq3Dpojc3NMorujU88SGYgu6LbJP4rocJQnoZRyJUir2E8F6RCEqPtQxfuMSXdnq3THZnbsorxEFiNaByLQgyfw",
  "key32": "5o8LR72aGKEft2DzkCM9LSrHhZegkhJVDdKxc7iGxiJAnF19b4KJACBrREsBYZUJ8ebLwMqZjbWUmoJMvvfyfF41",
  "key33": "4RYvtDaJ21GomY2yVcyPHiMiLCmBs99a4caTUWPPAyHV5cpiQ9XYg4zNNesx7TYSejvzuT3LvnWvANEXwQsUswjz",
  "key34": "K6LCubzrit1PEbBNFxHb7GfeS7wDD2BkKnPexFjaNuHw5JLVAqFrRwz9sNa32G42tHQg5jA72gN7VPPwYs2iJqP",
  "key35": "67FNyoUkxvC7jM5k6CQX41fgrP39S1DptBW9ptgkZuSN34Z4K58hVkMLBoQtfjaE2x2CQMvzBDmwKUb4vBjt8xw2",
  "key36": "5UJ754aqJ6Lhf2NsuLJCz7a5Vb5G67737mn958EpX6kUzEMDCaSXU7w8WRQdHLUJ1hmD23GhRavg14Rdba1EY6BA",
  "key37": "2uaEENoDqL4bcCAJMbHxGNp5Vp9P6txGf9SBBAropuVvkHJyVcwLoqp1S4HNNTBa9PQvnSppep5dAZnM92xgX3GT",
  "key38": "38PqgZktpUrxu9yp7gLjBDaArtJp8ZHg2BK1vpFqMxdAkwcNrhvcHkprDdpQErKeo1Zz25KPBwJ4uX7bBCXZNr28",
  "key39": "2CytGuoLW6hYiG7jDeiScJTTqKNwsDFBeBuQCMur72vtchk7sCX4fKQdgzNJpiE7JjRYfpRz4K5pGN4mTCVPdVoo",
  "key40": "4fDMeixVpG1VKEyPcTquo9xQHVKd6aPJBDotmgwsCJyBvjzbnbN2zZATz6P7K7mKcnXKqW8z9TFVh3QKCtyQNeq9",
  "key41": "2icZo6zcJyjTCfTLgjv3YiXHUUe3sG9LpTw5dKAPHjQbxbhg6RrfXXLhCG1QuuL5E5cMae2DZvuwxT4r4LaQfsc2",
  "key42": "51mudH8jKh96L2Q6pDy5VEks4wpEeKLxhuxKLPLCtUhordaQ8BkdR2X5YZ9YMW4hJFyPx2FSVHpC4zf5HZkh57Yu",
  "key43": "2QsmaKAYhLgcsPU8CEVYsorqweAy2RK9W6roja7jeePypA4RSDknD8PV34VYuL8ENz9sr2SrvRXJ9UqQxhPvnAbD",
  "key44": "42Be8sSozC87URzvbiL77XoJgyJBQf9CUHyeePnkBEeGZYDFspT5mfsCoQw7HPKZrQfU6RM58pXkUYa5VeATqkiJ",
  "key45": "SjPtMnhQ6Uw6mvY2q3dh1EkCSWmUzkytfxwXpLAz4ngUAtHJ7EW5BuRseGhh9GjL2LSMrGGfVu1rVMAQFwBBufY"
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
