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
    "BQFqngPsDZEXYeFThqq5kbTGrv9ELf6dYbN5ZyDjKHUwov7rVNo9hGSzBkD7jq153ShS2UezkbQZcD1Y4iFDDLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kmYG3FnV42ZqZsvFL9PSKrHJoid4mpBFvcPhdx3fBZjhtFu9Su8DkqB12tRB4Pg3zogtsFM75uoEUgyK6mbh9C5",
  "key1": "3RfLw3iLFWDryf74dLAkZkZQvufP1AszcKDAN2wCLYc8NnxyfU7iuAkANB3i3ketwyfVJ5NiuHmYkEUX3sk5qpZN",
  "key2": "4BX4vuLnUqsEwppACj1tkgU2beYx8Yzy35RTPRLBabotQpsbSBEQNYvNYRHQfNsARTaMEqkGVU4JNjktgGKWWKNh",
  "key3": "2qHTZbn8gyBi7WC5fLhkZoPgE8krb4faajCYi8uHkEsryHbk1BvDdZULCtEPmKq5yRBDLvVTUUzC7ToWjNozcpFN",
  "key4": "2ucN4RAdJPgpn3CLxywCKjLNGbNLxoRMb1t4DwbkAZeneMdb5f9oQeB9fZj8b41AhPCddRZnzDPvNG65i7NQsyd5",
  "key5": "4mjqAdy9Jwdr67Zc47nV6cB7Sf3wAVwJy6hrh2DnLRhiSjo5VXp175SbZDd9q22yLmrY2YCztqwbi7oDJZYWz124",
  "key6": "3mKPGy7dnkomgdy2DQM72FMMJ8rCg5rCdVA5C574gAVCYgAFzxHqY1kkCBCwszdEHddtda6VTMPe1mhvmMtF88wQ",
  "key7": "3sw5w4oiQivkJV79BpBxDzKHCWaQgbvUzFhoLi4Tikg2SKCByXiUyeCTPQXTi8cXfhJSHc2sWNmg4qZpuR2Y6oWv",
  "key8": "3cr1cHbRMzGX1cDsXhFtUyaZ8n7Hawu4tzpgthzqQkdUUdBVx5oxNqUs31sMuVU2za6ULUE3D9FJi86eWcg6TigB",
  "key9": "3AbEWa7uD6fx9XpfDJvse6BwYiZi9ptqwdemUA4Rn92jWvqt183FHvz3XVn7tamDmMRNXfZ4YHsh88hqqGZtSvPn",
  "key10": "5H7Re2hapL1znvEcKJXXVa3NPmVtEbiCMUD6tUMQwKjHoXYzmssBoqbL3aoHgEsbazkMJGb8skvfBATM7M7QjEBS",
  "key11": "2gFefYaSWgz1RkKFDJVcprbgXJvtu4Ctd4cDFZMXDFJMFc5GSqkTSJdL46XpbGbJyjST45nRTZhkD5bGzxzm2fiY",
  "key12": "25NdbpXB2JL1cWbKndGRZGEzud1NFXukmTMmhBQ6rmMgHbYipRwUwXHRKGCzFaBrxakGFPhzGZVgFJYa3Z1jy78s",
  "key13": "614VuswCXYXmJh9V76QwDUgaAFFWrWEgiBquh1kwZc7PUSWWGGfSMR8FBBrrAQr3dQ9ZnHskr5ZzmdDTgCQKTLXx",
  "key14": "4WHVmPAZEEsNF8MpdFy6TBvfNyB5Jw13rhn9kmZVQL5esJfvSgdwmJGtr8G9wY4B9WtARtTpjYMpNsxac6JFBxt3",
  "key15": "aCFBzAYRuD8shaEAf6oFwr3PWrdcwFgMHCwATJbD1GASfAZSNHtQEqcHyEm6nfc2bx7kAAGTgRf1jeEdqZsnnAY",
  "key16": "2gBDUM1aFGnjUVrRaXsj2oqzD4CQ8XetprG6ZYaw7nDV6qD5fTzmmQk3p2HD6ucFmCGGPTV96ET52YT2BvDSQW3E",
  "key17": "3hQP8bbuoRHVw8wZ4eaQNiF6AbtwQTFxfKCFN392udujz9tRCnccmkcDUsXC9SYhRq2d7oVuUWudzz6RFnESWYA5",
  "key18": "4Ghu7qhPYUc5u1uKsSgdAzbegRebQL6fdKxFYwHY7zrCLx2CuMFrS8ksQ2NWas8ahgC6WKHrqqYSYduXWb71M5GC",
  "key19": "36QT5x61rQNvqxrxwaM4H8Mi5yZUEb1dbJ13zKkQeqMRnLiqudMLEDizMnUJwcPkeKnZSScgvSu4Jz6jaEqSjuFs",
  "key20": "4iwZyZCS4C73tkaU2148ibLTrrY5MHGpewJh6zGPAVSF5zkjuoG8xBRKcdWFxCP3rU22K2eQM7DzbRJDVwAen1V4",
  "key21": "5d9J9eXTwgWwUwGRPRLGVgmDMDUUTeguQU5WcE3SCNoBtiRn8aKU9PT4WxTUs1UMYtomnsiM116jvKD5p7KYrBJR",
  "key22": "4fhwmKUSpbTjhknZ1X5ms71RghWQTaPM4XTNqHV7BCdRyi36Et2soYib1o8kP2Jc1q24hC71PEfej7GWHESMN8wP",
  "key23": "Rc2mdSHqz7bM7MrvmTxB5iU9VK5npFCneLGAG6GS57UU7r7ZTE6z8QxAu2sLRnLR13m6Vj52rx3gv16bKcqosCD",
  "key24": "4zEJy46ELQFpD7RjLXS3Y2Ssz6iYxwefGjuLfdnmFniURWZ4ZLByWTdMNXodn2Ca18sS8yhjTwAWkh9zdzbfGYFQ",
  "key25": "2FLPtH8ut6PJacM1Ry7yr1WGxiCoEGna6MZyGmtuHZWEmGzr7bdFh7XWX3Hq87Zscf7vZ8hqo3oM9gAaaFDM4bi7",
  "key26": "2PjikDMcat4wNuN3wwvwpUEeyPQurWWL1SbqMCG4WDiGwPPYM9NdX8NhREctQqVcaBwWVQMUFnhq4475FsDJ1VTG",
  "key27": "XgLkatwKfe9Hr1jMs2L1CjVD4BaJEhQBspNH66pHLgFnDnxZdNB3wEib1pVRZjP1WR3TaBVVkE3omSG4ESwYEVK",
  "key28": "587SYbUXrcq2kyibAtSR2DFA2MxvewJNs4q5td899jxCEuuzaHj8HSpVmHL2xJLqtpJSEwfvM1vRtxFHSaUC56RV",
  "key29": "3KsWEUyhVuNNL7vQxRwTg2amfHuiES7d3JJnNiVMG3iGHn1m6kpZwnLwEE7mN69dLcmKCmrBJj3zAwafDjAu3FCd",
  "key30": "596uhEuFfmLMtu5v1kMfKu7guuX9DWi3wQrZZRQeGywiTKmUCrLoZNTCGvEg9yEa4HwhzHTTqL2TXTwAa6EapExc",
  "key31": "4chdrPYXy81aFqieUkknhu7niKPAX2P9NY4NV7jjwkKViC6JBAxzAc8PdmEPBJJmEDYtVWUHtHxm8WMGoz9Wp2QX",
  "key32": "2AX51vfDDS5CHTJwoDbvnV2dGiLBmbBa7UjXpGis7CffCxghTNtbAbDM1dL7XaccDAi812kd5cZ9awudDyNkhpZT",
  "key33": "43KgNsFe4CniqNJFEpkHNUEpLkvcrn3URKVeoT5b7GSqx1TSXzkpUwZgCJovRPpEoD21saNZFRX8Rs8465eNaQks",
  "key34": "YHmjNdLt4ZMQzsogQzZtarj3AyLVaR2Qy4nZCWjF8G8i3gje4tzPRzpEVdtVN69z1PxQqhEEHYDAMoJUYkQfjCU",
  "key35": "43WGzxfr1VPK9WpQwtFcAsVprTZGdKwByAr87vLvCdTDAm1nRLtiudDdKMsF5uPnCEQ8dhjtHvNGn3i6qiZqhbxG",
  "key36": "4KWEGZUq6atmfe9XzHFHQ2qq3U7z6obBmYgQtZXBwGSRMHkGSkAgcvNcXGRrpyk9RpYZDMQoUZy7dEL2qMmuJ7QC",
  "key37": "2C4yrBvASQVs6q7wpwtHBvnEk3i66gx2NWA4iP2GRSWRqxPTjC7F6TGD6qDbhgtM246rFXbXQMwZPSBurWMEi4Ze",
  "key38": "KQyWBsX9YZF5GBd8kFnRKQxK84wnQnvzLLRMEoanb37cpw8At6V1dTUhizFkxUFF7NEkHqQS5EfiShJNA2C93ZS",
  "key39": "2x2mNXUmwDFCxojuQqvaqhAH4ye7zFhk6cAtEmn92sK5F2NZhoEdFedKwJb3sPwVCsSjLfAVw9jgunjuDD8FbBbF",
  "key40": "3P6uT1XBMJ9ZeQBtf769m31kT8bhni7sch2xDSTGtCRmNum15x9MNU4Koh2KWGRYJ7XNCQ2Grc9xTLgASiqt15cX",
  "key41": "3X7S5fqDtpkxsxjWsd7ViBCEC7oLSFxzYNQmm9WfhfXEqz7yLhebgXxsbLHhC5vtDKTLYjuWVEjhzKUTgJrKTXYG",
  "key42": "42eTT3YdzkdffyYP6V1PMQUPPPRS2ajQaNmCjMZJjE64BVy1feMQ5gstWzwm3bb1xzHW5fAtE7qeaUPg1XnCEWfZ",
  "key43": "2pCDnCdwZsiAaMTxeS71aHf297atbCFq2pRgfXcisomYeDcJmEpfAcyy4TdpWDQNLLDD3QFd3FkDTdT8dbUyaLN6",
  "key44": "4bcH1J65Zaj1xjSGS3nukB6eco4NKtgVnEmsYN8ZbJmUoFQrCxEFZJ6SB6fKsrAAuuRJ9ePJE6i7t5fgKBbHnNSm",
  "key45": "4HevQRzfEcADji5QSwhWaAu5AfV9LFVSCUKjQjFwxkiJC44UxLpAYC9HCnVa4uYW3Aot653uUfxGW15MMEz9Aaya",
  "key46": "4bXaoak16YZMNexQcCzEvHLfx3Hdsf8Wn948MqSsWjLxzPgY8Y9Vfp6WfKCSpT8G1qinbatAdujEqyzYxgCqMWPB",
  "key47": "3U6Z1wMuyR7H71q2g3HG9pHWuAdyiugfyN1dE79mREVmS8MuakEY9QUwknWwQgw8MVwjWTnTXVPFnKbD8Uzozorh",
  "key48": "2aWnTssaJiubWBMh3BGTG7PQP7RZXRv5EPge5qqx7q9YMVYhcbvapkaHNQv3mWs3FQtzEcEMoEPbNPF3PHNc14Su"
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
