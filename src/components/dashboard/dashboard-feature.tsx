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
    "4JmqzCejQULrzs5m4tEvpuSnkcgwuPHN3i9nTxuBMhoFbTug377pS4esjhT9C2YXeyCX4guNBLNvriB874CVypKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HWZzXM9oBAboe4ndKhZukfhPF1iZqx7ExbECJXn3kPUsU9huJcVFMza1fwfzqJGzJb4KfUBTDod4asPLvQhisMK",
  "key1": "4mg8aWgUoCN48o16fq81xrXwDtqyLuuSLNxdE2A5uWBhRaz1cbcid2L4sBUDB4cV2N57dYj8eoCxRbrCuRTBQ3BY",
  "key2": "5jtpNwJ4EJiRNzKnr2x8MXtKjGhnV9NcFYzVrh3aD5Qh9a9Toz3EeJbM5AeXbgBNmX9aGoAix69Src82B4Wu3ULA",
  "key3": "3mToXykGgMixxZEJ6TdWYTgdV1GVFxjuUCzkDVw2Aqe2AWunumibcuf7ttjaXjeDB5gkv4aNaHe29aSPPhDwh5se",
  "key4": "49DdE2m7mwB8M93WGm7QUzvykp6vCTpnqyuhPchGC9Dr63iXpKvS1VipXbnJXkbGnyKP2JxZyyKLe31jNvD6iD6B",
  "key5": "5fYsAK7L7ka3jaAHtk5McA3EPsYae1SetQViDgUjuoPs1GH5cgdJZiAovbxEbnZFcQs89MBYAPDsCf9hsiSRjRuK",
  "key6": "wBKVYbrG8Lycboaz6tS3hJ2GqRYH25PmcboxRAgw5svoP1eX8uTrbYQqdGDW1yP4Tf3d77rhBY6tWTmLvwwCjp8",
  "key7": "3Y7iKBLeNQbwgriZzyRuB1Wo2TEJAwbTdMsCNDE26LyNADAR22TZt7WjeH7zdRpaSxnR3xchG9xEvLKoowL8WbYc",
  "key8": "2sWW54spVtfQCydfPEdgQL6VLY9SFf8ngnoHzkgseuu4hG1A9oGAqVBdCUPmjz38KBUE627GL96Co86uMwuQRFnt",
  "key9": "48C1EJdYzUp8RjKJasidBkyBkXk6q6D2ihhLjpEaY81NnWqpYdLhifJLCqqxHuR2SNCQYSX9j3tCDiHR6dG538W6",
  "key10": "2xqc9yw6eB9DKf43b1Df19zrpnBHQq2qVQoXccQCXGXWJHc1oLD88wELR12AQCSiU6Ba72hsZi4YfNag2sh399Yk",
  "key11": "5RvD7QRsh1BK3J7EWVPePTrELzubP9yNZu2Bg11ELZD88oxVasm6cKfX39rnkjE4GgWnS4Fzh8PWQhVF6zpR6LxN",
  "key12": "4LEJiAQGEdR5mRHR5TaAWAziBe8yYFedPbuvPjHE45V6zkffU6JwjgSVmoMs4UVPdfYs87Gaq5EngqGuLdfNhyaj",
  "key13": "3puo4GCb3QikceecWV5UYcLfS2eKq3w192Ybf2fWkNgmQtFbbgWab8G3MdPYGLQ9nt8VsWnioUSyF4Xr19SoZuea",
  "key14": "5ov9WiALxzN1rN3fTwXKrACY6MeJFd4ch1FjcmDkCSuQYrGMzmPH1Hyas7d3DDVyt5sh4REgsJRBDaioYzC2o8sx",
  "key15": "27zuDw4VV2uwBMbVKnaScTMSchJn95SPcrBKq1Sf4L6F4nYSaNgGjRubfkGKWgaGJXfMLtg5EerSPuEJuk3ES5Zp",
  "key16": "4Navro6bhTYDs3kwd4ECBDrPx9GKu5UAjrHvmFx1aVjNyUMM6JpyMTnCovbSxBST3vRCauY9pSyrwusoipM1Dfkc",
  "key17": "xHjFQKwKceuoh9kCmxTARMLNNo8svMeYYy7irowo1KW3qPBPfHRHU8RPeoLxWZwPZXJEo3DzUMeT5trD7x5xFUk",
  "key18": "5dvf2kYmMtz6wGkW33vfZTBgmHDCLnxLAS2ToJZcUMVNoAHomDnGRqgQv52Ei5bD95hdgfRz4ASu8pVdegGCP6h1",
  "key19": "5BmRXwEPpVEA1SeqRz7feRkzazLB7faXEQxpT5LDxXWfcrFdda1YC6Xt2B24u5ybgWdhCzCwXzsSVJj7EQ92KexT",
  "key20": "5Pei6GNLeqLQKMcLWqjCnXBLyrVyZwJTsHnLTMgR3PBMEp1CigxwNXZPHs4B1dt8JYeLFCA1cRHcFvYrCwmxDqQM",
  "key21": "59wWyw3kwux5C6MQYtvHKoxr6moPb4C1rS4gJS2e5W2KqYJimju8GkFdcHvjbUPgk4CYtmHtQQXgFUd3PWD98i6G",
  "key22": "4kvKAmPdfidQW6WdTAZz5GwMyLgaSaA5AbJCE9uGqmfy1FZ5eV4rCcffnCEpywXSsyLMRuno2DEJmq9kNahcRRN7",
  "key23": "3q9KGMrpQL7ce6eL7o2tMP1f7HpPuomPr4qdzW1VANf3EvUkTS19yd5LYaqy4WLgc4HUxFHLe6p145vH5ovc4ZPs",
  "key24": "4QG33BdyheWAKUgqtpih3e9F9cNVCKJE3Z16YJ4Hwa13dzMKM9v7YKbuZVDgtm4WpgvZSbHHHvrD6breL6FgKduK",
  "key25": "5omTTuEhVhSMLs5ZxCzRqapnVnqvGWMnJVUg9iGg1NWXGTw9wDRYcLikmReQ9s4MeEa1EJmN1NH6aNMLHeuMa16s",
  "key26": "Lytpr94cH3oqR34hcXSatb7XZwqysudhip9d1urdehAQr1ZdxhuHtJSumKDtt155fpvVEyZypnJApU1kNnmJmnK",
  "key27": "2SmXSE39eN9w4eTdri8A8BP8DBiB77k7b6hrJ2xeBj1zr5os1ra4ZBxL3qupNwW6YPQLzyuR76NVKAn3XSVXtunz",
  "key28": "3VakU6oJfWifs29oNRxPC4VFgDd1AqSNL4mhBDAgfhRtjjgsX7kzBuF7YDfTgCTryQ8ki4L2efxBR83oBgcZTPdV",
  "key29": "2NDBhrnTscFWm8qNqMHYDW4RXo1XgR8ddrvQzrhopxkigbLRsphzmwpYLeuVgTQQbBziNNfFfZLCtvMocu7dCa1i",
  "key30": "4e24JzCHK1affs27avsKkiWzvkM6QoBqY5SMPLqmoQQBKp3QdSfUYG8oz53zKNX3dwLSfCNvPrZQZ1qtLrZHUDi6",
  "key31": "3j2CkvGEdZRcnXJFedLA4t3TXasA6kTqd4sR5aAz8C7JinP1Mzq4roZARf98r6qrmeWcd6nHm75DG9G3zTPhYDGK",
  "key32": "4Yi8EiVWraeoLPD1A4RQaWGYgNmr15WQCBbU8SEAGmfr4mg5jCNnwmG36bfepsgKpzwq8GQtyybaqZdBMMLHTJEZ",
  "key33": "43HjUjoZq1ccdXuhAjQJCMisbp8figDSAQVfS7gZqwrcXB1vXZkxqY9xiJbkMZbKHHoruFXUWhY1sk1dkFGXDacW",
  "key34": "4avDcmwWN8CHqPayEy6HiEN6SgLKonBJ3Xmc1q8n5vQwwqTfcKP56X8dN2LrPCrAfGio3uvsMGjFVaiMxJjk92UP",
  "key35": "4KpQXdWixW7SxAdbeyeVQ61tkobUVTUPqwdQ1LSN6JmXezr6QjeVYmwJ3PsWxvFsajK9qDKeLAAsp18zbRaVUSW",
  "key36": "5nhgytfmA2Bbg8izrsz8jNRJiF3ZdTqJRpbAqiJrosQpxY6jPJnZhRbqCxVzFNkfkwewUst787uVGT8NMVXmM3ix",
  "key37": "4x85tC66h64VCupjC2FTgZbZ5a5wLGMtSHsE9ETE8YJjUFV2pwzGnqazwXexgiQYU2rFUpfbdaG8VJc5w9o5tPRS",
  "key38": "3Hgxb3iaKMYaWVVNncxyZu3cNF95VcHxXcDepp67VfhQVLjsYsUXLoAFD5E4hv8bmHWGbCpydEnxw5VkTgsnh8EE",
  "key39": "49DZHFRVL54zd4PptjBw6UhNcBpT8PCjWv1dcQt6MmDiK9pSEybcvzuBSDgi6V4CiziH89ztnTFoyYxTseLuHWLt",
  "key40": "4J2ePQnxaE8XDofE4zvma9x9J82FymYcdffkYHodDHXvKMBj32N9zceXdsoxcxBtMBQ9cE6GEhhofm7Ysg9zz44v",
  "key41": "5X3yeWVuhiAPxZXvqUN1ZKMSbqzdkTuFeRBYR38wnMJgtXqCE2iEfpfMEWEqZBfLvESTQmX57UNdjL8XzbqA9gnd",
  "key42": "4aYUGgNi63QknM7bFvN5iwsy66NfkKyAk6ZioWZ4fuMZZf9A13r3FUbJkfnzKVdpDLhipnXU3MYbh7e9XmMmpork",
  "key43": "3LzVL8fya8HWLJAwTSaKC1YzyHkhHZxzYQtubAkA4C7EaiG6u3b6tvFGvH7BACeX3sKFjjpPExTJwFjV1GBBeFFM"
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
