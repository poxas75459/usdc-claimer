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
    "5D8G5UfpHF9P3jxsQQQToh4FhY7RLTtD1YXfNf5Hs5EJyhCuazp38NU6vEwS5U4pwgeTnNA8xJd1pbh2bLdBHYK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49zTKX2YFFQeJ2GziDJdz1RsMiWtPrn3cnhEqUeSmkmGVzLAYmJBvUAb3V3nXU49yfMATghxDvfhbSLVxFjGwSX6",
  "key1": "3Ym1trLadCnLMaYs41TiLmMnieYhn3nRnRFeqP2V9iyppgbF513UMt7fVM1NuvKjdSrM7xaJaxyS5qALNFJeUch9",
  "key2": "3TrsLvWF2LAqqoMsEizA4rmpeCcSfHcgany4f9DGN9jDpQmgGgrRiiQxmxiQUAZzfqqhVCM8jSaVq7aGAdpvy5Q4",
  "key3": "4HZsMcJbzds1YqrwkSwfC1PbgXYtAaAQmzkNzasR6X86UyVj4jNePsmV9oTnXjUBP1uSKHTNFKeb1kZGDDFxLqLo",
  "key4": "5fmVN2aT2WDmz4GaL8CLdqS9Z3KfjDyiCrhKcwNtBirz2q5HQBB5457zbvUsQJ3SkBpy12mXoxxKrxHZ9vD9Yr2f",
  "key5": "5iBN37Pj3WmaY5Bq1G8MkTC6gJcRbqqXPXdk368cnkUuUAqKXntbEVU3yFL4eQFX41GjcMjE6rffNfVdGrTx7mjf",
  "key6": "2o9gZSWFqJtHnXfZBGQE7BDkPtzyCFRey4nX9CYkpwsKhVucvXETUuR5FYvjmtRfRzSuwmXgtbFWZSycFNUXeQh9",
  "key7": "4PcYMi66K9vcER5VpGHN1woMVyRtUqoJe8BMFXnyG5Q4ZDij9orQEWjxP8e49Kvb3hEy3txYzxNMUWnsc9ftWfne",
  "key8": "4X4aXhVrGShXvCQhjdUyqQ33FBAYuPhnWEDd1yQYk3rudH9xbwymZAUjNWxWdiv8YTazRZ6cDoeWAunzvGHXNFHr",
  "key9": "4LjAjTG89rGrGemRyYJFjL4jnUGqG5uHetvbpfS9CnXvDjf2Vk2mJcXRBnkrCPtgdNrQbtQ5bygSWbu1gZs2LXDv",
  "key10": "3UKmerQ1nJK64sfMK4wHaKfwKGvAhXQsza73Dzb75aYxWKXQrun1LWknEMaGTSejhjhbNxw5CMRADbGm6EYfRASf",
  "key11": "21VpQUUC2TBXVLZzPMMjbENPmhebhLA8b2ovEmtmGV3rFFFtaFWWgyEYtyu6f9B7zJWHX7syZrnfgEWXME1HNovy",
  "key12": "5AiCRGnEBeon4tBDSC55f2mNGFYV8vZW7mWYcuESZn2JDcsgdVLXCK5HNL1gJ7oDhbDiD3kKPDay3VxFzqmXQpsg",
  "key13": "5PXpKPBBWrg4hFkHQocPKu7Bx9kLP4f5itJjrVVKuJENXX1tTVTCXZKJky8hu7WurGAjMoRgHBdNnvppNn9hLbJe",
  "key14": "59xCriqxgyqd7xDrs37LwLtsk92ozKQcHFwZzGcVfvAs6JvRFjWNZDzp2D5AzGcwprpzqv53TorCCFKBLnc2AgdZ",
  "key15": "2t6DcVosyhnuVrV6zUy5pQyHBidYgnV7Gh7vFjLLaA9yGM49ajVq1gQtT9xBVzLY9xkKq1yWBYa8vMKU5YzYYmK6",
  "key16": "5T4DKmrbJQzwY9B7K95KRUUxnQSAXAoykJ1k5fHqVFitSEwA7kupjQbAeJR2vXWG7AcHtMcgD7us7HfLWShGdrCm",
  "key17": "3RXdzV5k4Ssa63vFDT8xaXzpxjuKwySb7z5ysgbC8rA5L6NfrJebUNoAREBVjUZ75ipRMRutpd2a1R1C5uVBg8j1",
  "key18": "4nzVgvc6AiRqGJjTMGobHuuSavwtPodRYmeNc6qLfAtM8DhA3enaYxmkxzcH7T8fn1XHusxZnzqGjxZ99QpU5hW4",
  "key19": "4PDY4UAeE9GgV1F223cBX3P8e6WcbH9PL3sWv2fS9DFHExdrJygLiQaxGtKQNbiicV52ASJEEkL6kgx3gtNYH7T8",
  "key20": "2UUuyY1GHyLyQqiF3CqnzSdG2JjNQ1n9VTFN2q2zFGdef3jLUFx1V5pY6KGeTYiPL7kT85e9y1qBoQD13jFUxFj6",
  "key21": "3bSFzDpWzYwWD9WVeyPRprR7UPLWDrowQQompTp865VHWQbDSJtt71FLg6vbQCE68NdodPBWJASXoFZ1rbiX8U79",
  "key22": "3E9CBWkr967PnGLQ1zXGzm2AyZ7xPLpiXqfvfrXH2v6GCkeHPAaiA6guFgHVAxgH9jP1im2rtzNUjVWYUvTG71hq",
  "key23": "2hjLnv2Q5cHHv9FyRqxpFHCdaEw4zUZ8gb8U2AbRmfYzyFyBMJHHVwWNwSqcqi3row9autxW2hShW5ZYYjHuarKs",
  "key24": "4TLMepXdR72kGh27RojTjWKzX63snPfGTPu4Pj4ZUJuwAzjjobxTewEq7tFnEMRooyaC8scxiX1DbMa5YvjjwRm8",
  "key25": "3fvGUn1yRUpptLaGLpXLKMWQCgxiWfSozcvhsUtY12TzBygvFQT8Q9p7jmn8KaPSTf8enGHvezDNpnn6XxWZT4oB",
  "key26": "2YLUUdoUsefq8dS5HZD5TYMkTocuPmYeTMZvgBiGh9v5isxFiLtAuZ9qDsCvp2RVJWwotY3XDGqGneH2tHuLAXTs",
  "key27": "2bVagY1rohhvnrX5HfsKEJBpJSMQTEWr8LEvjBPNLicVmvkSmWaaeqTmVLML6k6wofu81P6Eoz3ikqiEtQEJWC3b",
  "key28": "5376dN8rN1fcEZY5sFJWo1qm87YcTiAFgtEzjeXSZKHKLe8C4UacbJGS1nA5KaLNiiUvjqs5av9gYTEjSRCk3TwB",
  "key29": "4NNnY3fYpxTtLLDfZfkBMqd43XhfFRooFWiDc2Fxfz4e8JVAySyYmYur3Y3uqEu31vYtLQ51qu3JCNn7yMY2R1mW",
  "key30": "61XP2Edz2R9i5BZHdJfKPGBGcWA8uxCRoys2NqtioiqrhK7WokiG2fpSWc17Ex9EncgxscKQmFQGU8q4vvmFRLcf",
  "key31": "2JWLxSACGacMCAirHVhNRN5NWYTCrTBdzYTsHFQHgNv85mDSFwko4rGKh9USztY8tnUd6pibqy63oFccMdbiJfd",
  "key32": "2Yjgh8iZRgkFptMHA4g1fWdCBpuAN9tPGsLLqPHAJDgLiW75WugBRarrAVPFKPLiYWyoMTedMF9jKFs6LXLDHeHu",
  "key33": "4pfStQRadfZvWwQpiazTCwqVBkvdMzvkWpTqY8w1Bd1vpiM82bRrBo5T1Z5DS8sWgSwNb8uvBNK8Af7hp8ASM6P8",
  "key34": "3mwcK5adpdJVSdqsapt8UHTzN1N4JBow1z9EkvwU7mCDm2SfCjiVSRd4iSrTD5ShGE6AUkmrM2SqkxESkR4SzGgH",
  "key35": "2NwMeS2vCww3t13nP1FVDdAbKnvbUdAmiMJfZiARCQDGZjbAA1Wdh8sxp4x7anrzpkh2fUvEvtkRHicUPkk1mXF9",
  "key36": "4y3v6SXnhhVUAYK2drfN1JJTZzvBAeGQAsSfwyCnF6G7dCT5bZ5HL698vYCQwfci3RQebU8H5ahQGa2vk2MnH5Lb",
  "key37": "muA7G8HRKs4hvtqC19Y6tkRm6tSvJ7dJFqki8SrrgJGg4aWZMX6t71qqVztipt84jdmqTkNoUXLLH1hfBUTLQgq",
  "key38": "2fDCiZkCDYhHGFXJqMDqcpoEStc9SqbfzghsYKHWCKYqnKZEy6BP7ZqZEtHEqXyLRsSoGWYFNexwD6jH99KVBwvY",
  "key39": "4C3nkd48Ev67ip4E9fRw46UAe1JANEe6YBrqqNWGhAZQbqzAzrcW6dCxAmJrSCRmp1iVa9wobp83viTqM3nLQVU6",
  "key40": "Pn1qQeAZYULZGZL4sV5SNxL8Txhi4X2zMV3pnreh4vACRvWcX9p9V6us9LKsDJdm8Bmdr3kcm2cRhAAEiMhXaFv",
  "key41": "4pEJw7yEWSqML4SEKesE9euwLePohwkDkoj1ieukpy3NDHzk6mtrHcNPoNoQXUEbBJAEg8yFG65Wu34wGPWepxy4",
  "key42": "35baXjUVBRgLa4i2PeTWaYfz3Kp3BkthYwvQdnMrW31iaA7BZoHd9PfiSxf8yU3wNrHo1L7nJRnwE9mVCRHY3WhR",
  "key43": "4AffAiY2zJUndy6gwLaPsUQLifHDKQDNoEJNt5pn3aNXEeB8ocHNBbfbn6b7dR6B49dudyRZPCxWBpyowv6GpyAR",
  "key44": "3w5znvyryL9HVBarFgMXK9xBfFLu7uT1maimKSyThSdAH5vt28pPBziM69mhokTU7Ft5rDameSFhGz79Pr5Nkh5h",
  "key45": "66yiXH3aM95iWQWagpWs8izwYRo84DtFCQfSLnG2kk6H5cPJsKsW76hgyJ8hsA3U65CxCwUCJxLdrLM8wPXLTDq8",
  "key46": "4osGsRUCpUas7LDUjM7XEzsKSWjJdBdZhuymaStgcaiacPHMQqWwzFTLJXBAJTnkwWrgXQcVaCXZXrnjiHTnXDB6",
  "key47": "b6VyhsyYn5yppgYeedcNkSiT4x8WiQuozf2FJvd5z5TdLirj2WCg2dq9T5Yz5jDad4yLTxzDQHSphSFo9GZbyWP",
  "key48": "5HJzqykjPstuLvA4qr1ppWJXMzbSx8zGwKmraQjHoXvTNyUgcicBBpfs87wiqqUodr6E1QgVKUQ7dU7wkCnVTVVL"
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
