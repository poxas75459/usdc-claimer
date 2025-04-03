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
    "d9h2VjhuUZaHd1XrosevdF2odSydAkXZFkJnjZJe9zviauhZZUMmnemmj3oYBknekpJZCFZC2NHF2ZS1q84Z1hi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cqgkgKeBda2jpd3tpymmqFcFSHTfT5veH9z4uk3C6FtGnAQ7GhWUXV1AGtxAqTPuYXxkWXBsUWr1xbkYyQDXvP3",
  "key1": "5ts1ADvherewRKVHQgftDgZVWCjD5csBkRkj27NGTDQRJAw3kqe6fYQ1Au2t6NVHFcvQ79Es8TdMW2cMx3ypsoD3",
  "key2": "2upy1Wjx9cKaidSA9Z7rc8dAmT5qDNibj5MNttrwphRfPPwRyPLKnc5qiQNLJJYX8PvABc9Bgr7A1M4z3JQYmCCY",
  "key3": "4E2x2czzVZXmeFEKUf2QRSWCfnYpCShGKA3xDDcu2UixbcfsMJQn5C7ZXadBSGtMuei3eggrjCxdmo35EQqTUEJn",
  "key4": "3Q2C86rgvpBJbrwgjV2JvLv6oL4o51PazDXnfDCaqa7vWL25WsmDqZrJMU5BW6bWQhtivnenfyphRREYaKCZ3pH1",
  "key5": "3iYzC6zNCdRZF43iY85gPoPPd73mKakXhLmyp2VM63Hde64mMTemvcQEs2HSWt6MY2APvat2vk2RNx8iuUBhwN9M",
  "key6": "33fYAxwJAGkbGqM97hj37cD748cnEVHs5aiGjzvUPBVzHYoJaU5AXYWpRgMHBArTUAzfqy7CpBLYX3ZyunYc9RGJ",
  "key7": "5fbgmxyrG6k9XLCT87XLDJ9zksZgLAfdgZLRdz9HnV7TfZh2jPctGPBgHdNsS8wytoav4x4r9WCZhEU6UXVwwGFm",
  "key8": "2VPvNLC8h11vBYPKbFkfAhasg5qURhRX9gt3Mm8Fk6b3amwzuxJkpsjXoCSCgpFmpyGdsoQ2HWUCog2zxSQU4Qnv",
  "key9": "5zBxCcjWDcsZ2mFhPTHYzBvxLpoRDvycx1vf99bAnmyY37n4mk4iFMagp9kg1ZoKJ996ZuR2VsXXnpm6ekQxfVMY",
  "key10": "4dajvsWho2fSUFDN7TZmPoBo3XsUg6opEmrtyCs54oDkn17Pq76x7f1RDTuRspJbcq9KBgfgiQpCtBKY9MdWRFJf",
  "key11": "58Luoy1Ubu5TaquuEJuUZDiLZkkSmuid4opYD65a3CarXWGUN4e7wq86ZAneFFtwWCvdZPi6hUhUcR63mQ362XHV",
  "key12": "ya6sZjrex5ADv4vrKoogZsUuxXe77HYk21Px3DSneRyDFPZgUzFetY3ShtaEvLb933jCecdh1ianqtAzjdh8bHv",
  "key13": "3LDRVCLUyjmgNVbgqHY3r9CMx9arPWAzXjdKmK7i6g57fBfvte3xdfNTwNQeL5xXLpXPeAezCkjePsSvShmModya",
  "key14": "3yBZ3cMb9Eu3rfyAkgtn1TGBQ66w5mQowffrD32MZRtidDM49C1VGHrAG7qZt9NNaucrXwhk4Wac1xUS9pHGfJYa",
  "key15": "55xByV2NrcUdEbxePfn22tAaS7GYaHNKXiFkvGmbCny1SVqfvUc36GqTgYqimzm5xktjcAoZM6j4dqHziWvdpmKH",
  "key16": "3CET14PHyhEgLPehichKwZHKGXfogH8RrWHC6oXcthQq4o2KxNVMmRU1tSZDGjKGXPxC6Pk3Cg788m28yycpfbcp",
  "key17": "2ypHv8MvQ4bNFmgy3akvG3wZCpJxvrrdhcn8EeBs8d5s4YfNE9LmMvMm7CPS8jdfnwcHXFgAwXk34s7LxYMSY6mh",
  "key18": "4rDuFQyCYFBQxvqf9fE5LSs6a4Ar5KhKUKPyWKisgWK1NiYcwDePCNpvbFfrtKQzjhYGGm4iaW7FTBFcDYA65QjW",
  "key19": "5PuJUTPDAegd5rKE3pP6HRSLTCqKfUMoN9XhLT5ZWBvayKTzUYW7AtmixvmDQHcCeGuWnxFLh2ocyrcTAqLWJQNC",
  "key20": "3QFGtQpfn4hDsiBfwiPCTu67wycSS89ToEWyGEwxZA1pd4iyvuFcvgM9uoT55d5FnGLuHmFLuxKeU6DxBeEjxV6i",
  "key21": "4h4mcWkcUadrNvg3av7cy98fnE4UHWcivi5wEgJAtvj6gqHzU9nnaYBBymPzvusXdsQeTUcA42sCag37UTDSvPuv",
  "key22": "RdXgzzDArsgZyrFWuMEA3kLnjXCN2tCVy3Fv8eLBs5Zm7hEYVYdP7ZVm2MzfbpGLqJLj9GeEqr57bioMDv2F5fV",
  "key23": "5ZVZTaEQNHn3NqPGZY5zjcWk1RnrAibZNAi2DSnuptmT1YhA9a7dEiYzPz14qsrJc7K5dJjbCPiRphdedJ1vvce2",
  "key24": "4Hvpdq7ZZHW7nVabtyRZ5cCUVhanwp7G9BLpTghsV61UqmSp1RoMBjh6n15ucesVxMvvYjhM9AT3WdTeLuqX6M97",
  "key25": "2W6oTUjPgha5mbWGy9WveNa6X5RQV1BrzHaCDpFaYdoNHWAmcExP7BLqfUZk8SnDZweew7YwyWDN256Jyfwa5PoF",
  "key26": "2MwiDvLfjz5UfgcKnbv4Vjt68rn3Qg6qocyZsscFs4doGGHXGng7kdPtU5uVQwzMsfPdgvyGEHwkg9kN5XPqwWbS",
  "key27": "1WJtNbzwCnj1yirPocp6pVAheF9WbDvRgPVg19dL1GM3KriwzT29R4xtz7LoxMTVAh8zJ84U1XZE91UNEQZseT9",
  "key28": "5cENaV35u3MEQLaSHpDaWvjTGYKd1SgJgPzEg6ajgyKS8eyKWX3yhnvAyTVs5qLKwGxdDjNeDwjPx9LjWjCG9tcb",
  "key29": "418YEThnqrQxLA4K22iytDse3feyMjAvjrUdJ93gx63GYB699sHz3k8wNZg2uRGib1gJcrASqcWJ6pCuGEyVPvHV",
  "key30": "3qG6uyD6pWyUTxAyQ8tTq1KHenZAfGoHLCDxKJcXjgX3BeySZfR1CH7LR9kZSn44aYbuDGx6gHmb2d5SzSdZCAYo",
  "key31": "5cKmKQNog8HLSVVWQZc2BVHJLDTVPK8kkZKrc93UohY6eCubEvP2G1psYEhSyeaya6zryD54wfBX6kiEjRMZewSN",
  "key32": "2r1PWdiMQG7Ac9DXAqoKamyTaCbSxHWPWFgUJcogziahVaitWKKgDsPP9cQPpdBneQ3uis8rFBNExGCsGvi482Y",
  "key33": "3cy4itXNc7XxpYuxWP2QRUvW258MS1e3tnabJa3PaLBgmzqE7QdJFg68jCf3SDT5139nSvmiQzmnmmz8KLWMKNve",
  "key34": "4cqyRUd2FrgjMCVUfE7AcZ3DUja1TXm3PxpjGtjewfoDvEzKD2fjKN4Q29mTMERY63D3d8oDG6Aj8T9Wg4fkFbFU",
  "key35": "Z2aibrnpvZTX45uXQZHiFD8xPRoTcb8H3ctrbp3sVmiSwkLWuTNj9UV5EkVyGvzAiEaWve28bdw6FSAEXcH3icb",
  "key36": "4pDahkqGVg8emA59p3HQP2XmGyxqj8jLMB4j1DDDVfUQhyZaFBydgw2sXx5ebcQEXTz3wnE9ov1Zbm4BUa3JrKfk",
  "key37": "4Hv4ELSiw66FdfmKDbSxZTP5b8coARGbh6r9XKjVCfSaX3479w4Yc42E5Ac6Dj5bVEfir8QmjUcjFQcp2DvRAu8A",
  "key38": "5MU5PqsxhFX5cZZXCaKvJ4CzYoE6QpzsmucSHHa5gAhMEoZWkpDpm69X3B1coGjXvLVKWph9AkXSMewKgxMUyJ9e",
  "key39": "fkF5SYWktMHjvcZyJ2QD5K6wgE25W1ALvWMJLovsYkBvyPBuUiHZa5TbSpRjZjsxdBXgR7V24phStEjogeD2jag",
  "key40": "4M64rVCWrcYwKk6g9barDttLrv8QUw9gzyV5U6JqHowxSAyeufgoPwaBYhv7BDKDLNe3bV8drSpiVYahwy6Y9pfZ",
  "key41": "58R8t6TErRxATKDqzsQT5ZRaSv1ncDvMCjjPnENCuRWmqiHbj7GTX6jtEXw29h7ssphLMLYy6vMsVcgZPVEZEGAg",
  "key42": "3yBizwYhUzb6WmVV8chzqpZig8KP34wkMfigogjr5EsLjH9FrSFvYTi9sTH2atSfUMFpvkvYnf4n1n3oPT1Sq6Yt",
  "key43": "KxjJVTf5HcsA5kTe7ZSoJwdEJ7xEWCnP6JCTuKzaYWJsM2nrjXsQmHAKVTTTqixdzfWgVNsDnVfkUfaRi96C2x9"
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
