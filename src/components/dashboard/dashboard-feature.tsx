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
    "t6GJzUTsiC7D6SYLwStMpkRaRKhgmQ9UjZq2aa2FUTfLeKGCWsMf3PyYidALvc2dRg5nNyJMQmvNz8MFeKbH8hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34fDKVs9uYVe7584FYJj3GyTwrVEqo6tFKijws3jVMrco6BHpPiEQ5CETasmhmEm9MywHnPZeXMfe5PsVKpkhU34",
  "key1": "2CVeQc1gGQVd9GEqmjHFYcVegXXCnzNJKwT8Z8S4iS5ihwirjVu7Am1oDpycApv7VaPWJZoW39f65ncWyai67wVJ",
  "key2": "3nkq9wfpJNBo4jeoe44icCN2EFGmNWyzFaBontxpWy947wtdUwihtp5JdoE3YJdkQs8kayxykqitpSivgfx8pRNs",
  "key3": "2mhPCQLSruU1z4fbGM2GVrjf3CEX66bkhGrCPqTB9yAU8aNR68d6ndoJnA1vowXhdfvghMm6wjRQBmiKDU8MLxyh",
  "key4": "5CE2RGAKKsEKn55ooZmygT5j2id9QVbPBXDD7cvofLVUjSKciTv79hQ828G8vonQeMyV6uDmNBXmjmoXUtByLTYZ",
  "key5": "3QWg5LhgJu7y5tVqL3RhtwzUSovG6rZzMkFAvVVsPFZest7PGu277xQVVAbh4mNitGk57s6XiLTrdQaZ4BXiSiNi",
  "key6": "2VuBivYa74FYhtCJkruYDf9t6MsegN9P5MzbbgQ7EXXvoMmg2YhUiN1pZ3SWXegWARLB6JTgyafkdpivQU119Mg3",
  "key7": "24oDzV33d7Bck5AT4C7CUNdE8bWhY1s6wY6v8yZZwV4H9M7sxWgBp6V5oBKrpkVvCG2PQrgJ5W65Z4iMgjmukZed",
  "key8": "45x7rM49Wo6Htib3GsFr7L9EXMguoWq9Xw73NPHu3WvVnFK4GzRUVgANgWTbdPr27pvaYHsRwJrFaPxpFirF2vnV",
  "key9": "ZDFwDQvrQvPz3UMfpCGZrmeadoTWXpLyC6BwNvMNGpqxn2fC46FnYfLo63r1XndXBVEFZrJ1Hiz1cfxRJ1mDFeD",
  "key10": "63GTmVQD6JSaex3YVC9Ncd8stVfsvv7V6V3aDMu76yqi5T9F6rMmoKj3SNQsXCzWB93yvaAhtmmXg4LbPxupBHR2",
  "key11": "kjrBd8WSjDjWnxSKq2qmHPRqpX59iCyhbwcuSDzUWF7ZZ1YK2YmxMgd3QqSc1gBmZxuJSDmqfyzUKBKs3jeYjS9",
  "key12": "2VLmDWdSxAqmU2p9HsEFTGDmnGEu6WUiF2VFBiVb5124MkuVmEZfQKiydZyshWFAbXrhZCB4GWX8TNVwhikLHe8S",
  "key13": "zWFt3TfppB9CYb74huqJhHpuz86UmUGKJ5ygJ5PShnzyP8bXMoF6Q2Ac6jNM4unX6hCqUqBLQhBKTgjLu7t7JC2",
  "key14": "5JxQ1hcefuY4bfrat6ezHbvhs8pFWjYrQ1w5nLLqqCdUqvMzcUcN8ktt5CMPfRXiWMCF6XzxbCvakM1jLhCfuLVG",
  "key15": "65QbZr3SYzvCmHGRsrddEg4PuSPCYPWdTH7EUBDQdBg5p46ZUrqTVrQy8KtEcwbGKqwsB9iARXxQwcqAimutBgJE",
  "key16": "4gMn2c5yXAiQ9h8bc8DzQUcjRvcPZS5LNF7ATDwzLZ76W1F4jbYowd4itUYgpguraHuHfB8zMW8TG2V13xEEojjP",
  "key17": "2zaWWs2hU2GURCjn7JQtvvQ7YrnraAwS9EpsCvBtzQPcmGkuP9eH5Uf6fo1mU3GYoKDn7Vhhns7X69r5RwXHhxZ2",
  "key18": "2ahW6vEZnvMKgtP4QV65zjdGWyEVp5zYYD9SMvpiVAyrD6Lg3VDPnQczepzofsd5AHVD7VLHq1tnSCLhmH2CU18c",
  "key19": "3sqisBsqbpJJfSpFvyz3KcBhUUmcWj2kUaknixCy3bob2hk5z26mvTHTeGaUJ8Dsco1hWLwDfzSnrcfs7HCBratH",
  "key20": "3wt6HrF2LMmrAjkQaLzbe9xrakvEX8NbEaG3w9z2Leb7fjHqFXhwQHRuKSBb4ckpNAiJRJZAZyWPF2M6iuV8e2dt",
  "key21": "4zqsBQ5cH9BoDP4vzv1VwcvRXKAZNYLoWpiNWwTeUm4Ut1xpUBkBUwkRRsqoaUgwynPyMZHZZ9etY9u8wHwsj1BE",
  "key22": "4RDBiiFzKdUHGrcWD3o1DZLaVq6XknH8ZgXtjcy8S2SyoqXDtPPebJKiaumCfbdc7D8LvKqsNaDmTocgWnHFi6nM",
  "key23": "3pVVydWCZ4zJwZj3E6UYfz2evLcpPBxskjkBJPpnrxR8N1vddTmvTQFw2KKCBvXT37jhzFWNTbbaFobFFosJuZ7W",
  "key24": "3JqaWokrkr7eP6ZALS5SQZEqe9faBiaDmvxGXdUxDNYvgBYjr9miNxAqtVdMPv5AFh388ncLQ3wNyYDy2uwVCrLB",
  "key25": "5vxDsrKkVz9eN1JNHAki9RedXZaZyNJoPn8a73HMjbRpkyH76UtRqB6RSxGXGQnyPNpigiTZRk1x4vyS2yP6uurC",
  "key26": "49PNGLaDXQuevCHCToRpDpR4DYDY16fkXgaTsqPgdPQrTSc362Bmv2QqeucwNjVqmY3xPiwzPXE85m1eto1cz2CU",
  "key27": "62CLPhPKP7vPXCJLqBRmMAkdmtHiDWjE8xybuucc4wojtHgZtNnpod4CG7Z87g9s4B6f2MoWshCsry9h1gmCX7yV"
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
