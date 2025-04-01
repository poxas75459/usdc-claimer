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
    "3tnCmpc4yM3FTaNG8exDESovFEiZWMPsxfb6qGa9ozUp22xSB6Ay9NGPzxtWRfqqrPNwBQ1NGFnPHCJjXCH63MVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uCWKVB61EKYKC5YwwzcBn5NR9sVuh7iEDe9H1shyT5AatBRW2Xu4wqPPzccD2ng3oywL7p1Wcx18JuaJshQfu96",
  "key1": "sYaHmGSLWsYBvSHAS7uBjc7teQuboDVdr6Uh6g9bBHWmy8b5y2WHPvRD1bQosamKmspEVJ9S1u7W1bqCKaCZKnb",
  "key2": "2pJkh2oBqaWwjoKdUmoUYrRcq1KZJJjfpC9ockCeaH7j2WB7vseZgTinQvsLyjhLjZtamN93i43A6KEZAL5kbJh5",
  "key3": "5TbFfbrGarDEJ3Kf8qwqqsxfsQjEtMo5yXwFiKQZyYZcrPgR8KdyhwQwahrDwkCeCsjmFXtHFpPj72UnqR2NiWcg",
  "key4": "5KoZR6LhKJMAX4Lw6T7kKPe7DK54RV9GqSvTw3JS6xfGy6E4egdgNGvUmdU6iwp5YS3UE2bJ9UYK9SWwcqhDyyuG",
  "key5": "2xuTfrfyNV3Fkho6MmEKZmvi9jgS8R9Dvu5Grg8swLirZbo3rFY7wAcikGzTReom9iDJbvpzgi6xXs5pB94G212P",
  "key6": "3epptNM8ryxtPs25t2XSZJytRF83XVC4TG8Jo1CHVQYXWdrnH6EzwjQZs3Q6yX4nqeC8GEcDG9PjymbzdHJFBZiZ",
  "key7": "Z1BkGtjAiMZBLS3jaNn2KRDbwH2kPrB3tBZhdUhLQ9ayq4dmoZgTMD9iGmcAmMwdstwnZ8ZM5yEDV9rTAhtbc1L",
  "key8": "3VouM2oV7yL5pti1pLLWeYZLtoVcmsnvXzyJwShwrJTRfUqsKNX3f4ATxeUcXt5EMRRjSuZdLe2pS2ajGgx1p96B",
  "key9": "53K1roKcwaYqjgf3rSwDbhuVBT87GAhmUNwwEinKXDtdQQEYP8vGmqxowkj2GGfYP9o4FXy3DPfbanq7p673QwMZ",
  "key10": "5BwaGDfVYbcpGrwyUBYDEeu48cgJmgSrDQp7B19TD9iVuvKY3iZBfjQfzhXas7UdAyJv6esyPw7GbEHW34Ai3XNX",
  "key11": "jdEms2NVJoQup4WvdZvPg5frqVohQ5Dd9QW6HCRPLXnYFargsxCd8X4nzr5GgRauhrZ2cGJDvnQ32P1b28xgNwh",
  "key12": "28uj1F7YE9BGdkCSBvRieNmydg5pssoTxg758iek2WaNqNj4Ugrr4ixyDVFb6yF6WVnzQspxEute6Ts7D5ufXo6G",
  "key13": "248inx717JVujF8rL6WTfQJMpcXitk8x4eXyCEwkn2jbTUWDAC4v97FP23AqATNTWy9GsQXSnA5XUqatbZR7ufoZ",
  "key14": "3UqhREmmExawx1o3ST5fpXueGCKn9QwP2JuDeJBgUFpHj4d4vTHWHPe39JZ5UvMKrvTrov49jvM7uU94K6q8doid",
  "key15": "aF8AbykDDT6XBgtJssvunhAiNsscUtrfeDBh5pKTeWqeaXWYaDL5hNA8Vnhv7QkUrthpkB9BccyRuY7VEq5NRL6",
  "key16": "4Twmaku1SSCZdVmMMRksf6oGBajK8qwrUvoQN5sy837AUBT6xSyXPpajEGk7HE9x6bTPHTo7qpLzbHzBLwSxDE3T",
  "key17": "3CRYDbBijnNsHbVfBEUyS1m5hUaqsv9Tqywmx34x8yMqNt14KFUBQAWPRxN33Jnufjs33oo478qt4sN7pymwcJmm",
  "key18": "L6AaAnYWJeREWXMnvRoFjhxAVMcEYPi5sz2m7tfSawKrKUyPD6uj88pUChgUc35z9kFQqVyp2S23yBBzfu31VRN",
  "key19": "581haWRJNzj5J4GZGdHvgkAGeiuWWVrKXVMSL4jheJorh9wr4YoGr1ZNuydYNhKKnQGHBkfW5dnnRRS6JVQ65PAU",
  "key20": "vbScVYGfCEVeZTMP8ooXxVAcqTd8LqVEJdny8rZKrg94nUDSTB6QCUmbDKQZUZ7K9aP5aKWBw83QZqnL8kKvcE2",
  "key21": "V4E9UVEURv8wGKbC51AGdPwfPr34zWwXpz3voVztFGu4ZxNXDbheBA8p5TmxfE3cPnTrpiZFswza8YUwy2m7Uar",
  "key22": "3jchfFLeT3PRqPsskQppup7msMS42ZiEDwKHGyU98MB14iDsxmQv6kyvgVGWB1eGjqTGkiwHqXAdFZBmqRb8ZfhH",
  "key23": "2LVFebLtyDJ44HgkFw5Y3r32hdavuiTmFCrAQmbMHFGZtqP32gMpsSLcnRTEahcFKmEqqEPUDym6NBt38PHDHpoM",
  "key24": "5UzxiYoBT1xu1Ek98im9UJZEAt6qnrzj7QJAYTuhmc2ELGYLaCiVwwfVWswrXeByKTh9acPU1cU3tAZF4w6oxTFx",
  "key25": "e4PxBes5NffwV1jgmchcovMMugdxErENauJqLssoCrkXWKdDTNWL6qQzy8YoVQby45Dd9VhMoaBh8hczHmR1EHq",
  "key26": "5BPNjeCe8rEZw6dPwKjE8g5GUxmQNGpyajJ1xMTjHLa7D94KsUGiKyX82njvLo2gJWCKmJto5HMePCp2PdHVShX4",
  "key27": "4ZaAtEU6jYs9FSAcrYTf5t7kzJ42R3yCq8iechep5cp3BsRb6HVUrXD5eV9BHeZQR3i4Ngr2qNqUAwEGHzQSJsY8",
  "key28": "3M5AfJ9ivxm3NJzkZ1YTYHHc26C5K8EUMSEEkSsrWnfUGm4BagAjNXyig6dB4riTt6t2VaqncLtRvVvXMATLX8pb",
  "key29": "5ia7fwbrd6h45uU61rZ6eJFLXtpxf1SgmJ3MacrkPC8HgGKs43K5xycKYgkLHP4KDDEg6cJTPQGLdLem4SX4yeeD",
  "key30": "49NjernRMdtKb1ieZv87DAaB1JbSmioWv91tRR9pQYvjvwLKKqXgZU5XfLuj58AjziradJZr19FodxMa4tWEEpxB",
  "key31": "3kLGGybUKz7TKmg6Eic86hGdeM4iNjxdJvjvxqpkoaJkJzQ3LKq6nAAzeUQ7CQuR8nUfNVqQf3r6gU2pdkTZUuDz",
  "key32": "5HxzyZBUYMTf2FFPagxwPVu8MHG7DGPCgPMUYtrVHn1WFvWiBqdy4pHq3kakQX5djYmU9A8qkQJ8gpiS9tWahfve",
  "key33": "ETRLCtEZsg9kzN2QmKQrZP37wfbGcKmi6rwxr8r4Po1DNcKRfKckRhMF5yABzkFHb2QiVdB57JAva8dXqT2DBwL",
  "key34": "2AsjFZhTFJNdyA8eUXCYcfzdGnmTRHyGdnC3jNoXr1AhDVuQ35ZNQrzekLjHqNgkbsjGdhLJJUk9uzZetHYVzM6a",
  "key35": "33MD4PATJqMaR79MqTUNVvfxSwsjjA6ZEqfS1trzDwJEd1duipdid42XXFdaDCpNLMsSbfuu1no4igP8iuVQA8Rj",
  "key36": "3cuicKk7daikzba62gGMMHbeWWFt6SFsSgdsKBBT8ALNgQEATb7Pj2uDcZyXZJHwzDUPp3VVdU1U51hQTYKvEYLV",
  "key37": "2JwpBPgHmTaN568nt6hBVjU2DM6VWgpof441yuA8HS5yB49492C9Zpxk2MszdNG2SKAe7EBEsGawPW9D5Z3Abtqd",
  "key38": "3fJUpRCcBvF24T1kf732QnnP44USqVMUtNgAF4MfkvkCuWSZLQkRAZp56Nss57785zSqPVuHdr1S6sM7fuckrCN9"
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
