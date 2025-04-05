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
    "4Gxc7y1VhSeomK5oAfstGddK7H6xdeXDoKZDxETWS7XHncQkHEhTsrgpC5nx9LoQiw5GprHtbMs4XYUftfNHWwM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mt3G7opshbtwe28WfE2Pdp2aLT4hXbF7ei7pThfjhxywb8YGKpynESvqL7V9iMUoovFVyVpLhqTDsN8Us9uScJs",
  "key1": "2KEsdqYkuH6nMHt6jeWH5mLVCcaxCUgYSR2GSxuAUFLEWPLZd5St6D12bidDnAQe8WxkvyeAfoJ46pHqWkFobDjG",
  "key2": "3wtPigJPwyNh8yi3XNPmtZCt62TDs4FG81VbMWhNn9wGavTq4AHPTg7wod3FrwwvvmjLDBPKLGsDBPfHS8PLXCpr",
  "key3": "46iegdxjGrep7RXYZk9Ekmq4eMBZ16i9Ke92NB3f8uY3y6B2feNPv2KgjM75CTRXyHoN2xwCFJxGBSrLG8QanhX1",
  "key4": "2RvfCB7LkB9QXduzQ6WsrMyyjXWBr852Zxxe8rL6s5kKdEPUK69cHMXophwwYbLiwf6G17u82vpoFH4pGmK1NbTt",
  "key5": "3PuL25S4x7wzJhSpBqK4D3g61xVWYFHdHHtQ2jFEyB9m9GULZc31EjY2og4h1Mgz1WzWA9RZEeSJfPAtsSMxRYcm",
  "key6": "3GbsAg1UA7wviktroajvT1SNWS169Pb3jxapG9YGsCHuFC57W5FgcqaUbE2j9X8QfqYCEEQmrwsACx839JMpNJDy",
  "key7": "24V3aaiKZdBdRUgW8Ri9ZP2cTkCa9crRSWRbQCKAkGJoYPrvrt8hJSnZjGTbbByzkpSNZhJV31aauFnwSrSZXNMw",
  "key8": "4ZuMq94ZaZb8s37ry7bo5pqoR4272npXrireHmHdVo2PWu8n3skA2jpbM11ytR76SHN6mn8GkSH9qgBD4Fi7n54v",
  "key9": "27ifbQYcRUAGnvzUEvCLnLtZqDK5BhdrN4giyLrUA79tVXBa6KmAM95YViiyCgmqv2YyEqsty8k47urKdt3b3mjd",
  "key10": "anLpSJbp6Ey83BMxaV3yxNuEiLkxW1dRviDVqZenxTGev3EVc8nC8bHacN4S5YSQmx17Y2mbCVT9RSxPoWRp1PV",
  "key11": "3PdQMs5r2b2DgywwaSXyhNRyyC97KGktXAi5kaVm5BmD8dt8vEiBE27FHkUtwgtu5xqQzVNt8n2e9vvPFcvSmenm",
  "key12": "3gybmQNh95w74Ew7b11XM1mc9548Ew7Bu47zESrbAkpo6qga9uTkBDwBf8XoBXCRgf5kxvvdwHEJtyfECsskrgvR",
  "key13": "2JDqhPv3XDo3tb7xeT6nnec7rQ4exjQiQUNttP3kQBCwfT84WudUQo1WQVWK5nVx3VvdiYdAnsVwUZWexby9GsuZ",
  "key14": "2haQ9tSTsX6nvFaERSSRBwSbqnEFcce3d52zDUVDUvxypweJ5eDn1VcqGtbxqiph5NNNVv8TRqPxokoMWGbrT3q",
  "key15": "2ZFQE7awhgHvyyQgrLEMppsUSrcraGzufhZLQDZe7PCPXsjJ98sZ1KoC1qSS98n9YgpgG2EpSHJLgBUDU14rvwiC",
  "key16": "5s8oWRsgBa1AAib3jtt5wWtjc3biLmdYzPEuz8V5qAbETbwtEwYAMM8cEFjWFtzKG852UeaYxZ86gFWGkBT797WW",
  "key17": "5tMPkkUtMWSg6q2iSxjBTbRbsVWyL9vXDRbyu3syK1QoXaYQV6meNNyM7M6v6w9KH9pnfMq4qyc8F5Zmyos2xSYf",
  "key18": "3wjXy6jGCVSyZmpZ3uT3SZ6J1Z8WUwjGUPqz5Bgkc1TvwZGBunX87JcFKEabpPVLyuX9aKAohz37oyXVxPWtPagE",
  "key19": "nurdUzfLGQhH9LrkQNjvkUoiMD4uCZP28eLNbVXwhU2r8StYpDzFNJJEi3saGYYBy2Ag213cMeeasr4ZbUi5RbN",
  "key20": "3p8K9ikcngWxwWJy5ZBXCkNjgTgdhT7L3A2T2ntUA9gHFDi1in3X55F5rUJ8Ph4GPn9JMTHRg61C7g1YvcDFn7Er",
  "key21": "3Vv2ZFZPxd9FthchPpRQbKvWdpaquWqyhq6t7vKjDtuWbyDh6a9TYVrbCttmUdh9gPCFsWCFRLhaKM48JTLbuRch",
  "key22": "5LsrdLV4S84ucXTyD7CJSeHpTYq9TvcUaT5z8stwCgkGjNr9RaADA3WcyxUR4MSUgB4DQTSFvx8Ey9LAVeE6igJq",
  "key23": "7cKDHvpSiYpY4qiMqtkSAU3TUraVoJHshfbkaBMoBjB3dWazu4zgCpeMLP3izp5HFxSbvZ8FSxUTrJ4HcsDzb7T",
  "key24": "3UN3CYMZRdbvFGvdtBzmDJJKpsv3zTX77QRccNyMKmTK8JCom4MwW5GmNM92aGMXKhybg7vdBmCQML4pV97p9emN",
  "key25": "3fW2fxj353FDjFqTCfVgjsuPS5YGdJkfHYgzYh1vuhjBVUYUdUEmSjCZfkEUhASA8eEjEYw8kT3Lhq2ZaFKTcEER",
  "key26": "5GL43vD8D3BmFanh14i29Hv6sXs3iJE1Xgh1Kt1Ew2njCPkQ8Koh2KZRrwBngEWJQM6cVGWPt17QfU3kWhpzNmGU",
  "key27": "4qeiULSoxFbASKg8z3mt7eMrEoiW6TgNGvoLrneqUyHqtfUdX7Q3w5TtDCcgKaDSwiwB2KRmtRByVkwe8hzmsPhQ",
  "key28": "3zwheUfaFuZqQzzKsWWXT1SUvYBCe1JA1zeJvSnBgHRcHLYVJrNCVyswSJMTccWox1U8fhcpuU5jYzAHBenD3Z2g",
  "key29": "51RGCD5fhX6RK7h1nVyjEkBNZ5318ryHyvEY7np68RxRXLB83W5TwMo6R1JJFrmSBbL9Jc7WCWG3QStMW1bBf2iV",
  "key30": "4LDBNtWwprjpoyLMznRG7EXrWtskY7X7UoTBDX7EtTtF94eErBjXddqsm9zT9z8eLbeZxzY8zE4FNvoW6dBBE1pU",
  "key31": "4wPBpiXPc2ReiXMKtzVK5QfSWEyJDUS31gLkUp7bkxA5MCPNkV28wfPK3t5VrxZXJFxXpgqhAD18jUXiA2jkd7NW",
  "key32": "4FcGQH9cGv66x2eaQKHZSCAARt9oGXHEqqPXPNJvv5ET2eBBpd7usccJKjgNE6sWCVsefyzt1nDtrRUjGxrFP1Yj"
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
