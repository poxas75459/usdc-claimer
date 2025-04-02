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
    "5nKfQS6fofzGJbrRE8eDgJ42N6xY3yN5H1qE6DDyVZsXBR6Ubcr3fwdS8P6U4kUhA8Z9PKeaLA56MmvhvzW9efdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BmxG8oEccFYNURzYcu8z6J8iHhyWCE6XyVJRNU3qyAEScrGa5fcJWFfqZ16cmiDNpMvt1S66JNSBFT5paeSgfxA",
  "key1": "4WTZxx7yZhUWFi51Hx1r4PymJcDr2pBY2tAEFox2f2EjcmSLG9AM2H53MqTuhgiTE6WaePkidP1uQvcAkXzxzybp",
  "key2": "4ThwqQ23Ub7BDHsfxqZq6XBv1B5CC6Z4vzSACKGdCmXxKhtnF6EmtdG2oULFAjhRMCzbiD6TLXSvTEsonTJXpr57",
  "key3": "2XVY1YQYVEUMNN3A146VKBkjMB9xHjysGwAjnVSmnAzndTU7UZy7mYXBMpPCxGLdd814snvwwXXos683F1PVwe38",
  "key4": "zYYvbpQbuMQPPpLhwnVDLnXv2Nrfz2LUfv7AbmwkK9M8Hwja5Zzm7VFDbzJaCciBVm5cXtp8G8ufk44o9zRrM2w",
  "key5": "wuAqECbDgbDXnyXEVEbKTybYFt6Szq3EfEkBDMCMwTxK9ZoGV5KRyzK8JGLBcmapfRMFjRZne4b6awokqYFovX6",
  "key6": "2Y7iVQ2x7yjizYsdvSR6yTqh6183mHsJT2hFBGvToVWmCkqyCnV5G7ccuA866CwvnefujqKuSWQidnLW7DHUKNFC",
  "key7": "2pbvMsD2N7As9a9HbPhqvtV9phswRjZp7uGqDiDkBAv19ZDTrUKEVqZgTp9cuSVLkVYqGgyJNfUPhYZctbhDa16r",
  "key8": "3RCuEU579PNsCLU36uwmC8qk4XzC9zYHLe5JDo8cQKGovt9o2ogDuowQLuccL8u8PuUEJtyyvuZPKie6zKdUyFG2",
  "key9": "2w4H2yxQuvegkQyphdtptZwXMmWJFUrp2pzAapRkpYFsoYFksTYKBwTdSMxCBayd95JUiZN2x7fDfGoC2WwK5RBW",
  "key10": "4CU2yu91RuDcLoLPyyAgaAPmNYw6BPufsZwARkxoejS7p6MHNSTfFLh5phGQAmSLXmPg5Ky5zaBCofcTK3qCuL1T",
  "key11": "3baFu1zh2qSHdG3tfZLZTmWDYk86BejUwdwQk8tdvJJ5Ht8rw5mRhV6MDp62yi6Gtfuh9e4w2BMY9LXxChaNNWej",
  "key12": "35gPGekopFGKMFbE3qphcecBFAssxRNeSuydrcryG2MdhsEtxkSKok1DykLyyr6iPnywNBbC7fvQNdvURpVYqDXk",
  "key13": "FQLqpikhJaCbHTPosmr3aAbEmRmYAT13QB4Ln8dtrKpP8LbNEXCjvyfLDkS7Gmry7n1bCbNFvHqoe2EVKuV2kQP",
  "key14": "5NK8ZyAJT7thJsmoFV9EXNroe32vC2bNc3x4m7VKtYDRXMSNjjZqdKfznrAsjfMjzr4PoBnXU5NNvtRk87FxDy1F",
  "key15": "523dcZWMzkLUpgjfn6jHTWp4bAPfui5ydErNeXHQMRwJS96gywmHct4wgrAKnJkpfnomqgq1mASphjQ1kfGoDvFN",
  "key16": "oM7HwUx8KMRoiPEv7eGjo231A7qUCRRLLdzZL5t6CYJ9cYWqqd51eeH9T16of8v2KrknCebxJ9N382BvgBxwbPq",
  "key17": "58QsU3ox1QMqufG1SPSTXcQZtuwg7mCshFwtx5MHGUuCR47wsPUaULdyvpMX1duoBSAjVmgmF5wPyctPEfxjwL76",
  "key18": "4o9pk8bQKy8hk2Kuctoc76yaBpuZeA356ggKoHdbJsTRPCJA6CJqbW6NeAiaXAuC2EzZ2KS8AJiPPfyJ4tP7dsdQ",
  "key19": "4RbXzosABnCbJZLUBLWSdgryPHkiBz8mzAhGMqdvLfgiDBvPmG5MamAtjcAZWJ5sB2UtQuFD1p9B6froorWfLJJf",
  "key20": "3XM3X9GqD2LBcghxYZHogEZSrVf15uB3Wdvijyd6dXbRb82USQ7Vk79r9Z5E8ALWS3CN2FCCHKku2Wx32Ffn7A6P",
  "key21": "2EpGeeZdhEXkdMppQ5EkvpTTQHdU2VENAb2xkqmZhifPEuwLFQNbpTdU1z8WQ56Ea59brbx9Mu42YCe71tJEDL1i",
  "key22": "3xAAXcosSGXBfnxhVXiAu7JswN4LgtyzTnwDCYh2VXBPa6PXxaQLXZj9hWyq6BoUSHjVTbtwkypRghXyHLhcD6jY",
  "key23": "VvFiC15iS1ehrfpuHTZyjn5JxnPyFvRNnDDyctKmnmT62Lr67RKouBSiHmc7MX9tQT8LMs7QPLFdHbVomPsLQyr",
  "key24": "5yJF4GCcUnoyRyzs77sywoVe57LK7VuKHjANri4FZ35X3hePuYDqw8YqhXeDSeBs6B2rMDWh5h19VHVfL7fqxhPG"
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
