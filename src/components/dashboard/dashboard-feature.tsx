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
    "3CQEHHxJPkGQGb7b6iNFkKZnpp553GErn1pwqK7P4SH12jvdfU8iqyqzDdZp22FtrTXesCmr6oCgpeT93FMghJMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YLuVXvDekoytCqjrXhmyMvtJ7oXDp2YmKV57NoBFzpQ4sjKpqB9EJXRtE9QBVdGQTbMErhNUCzr3pADHJtt6Lmv",
  "key1": "5QmSUEqwEk9MBfxEmW5My7tXTQQN9zorN7beuJsQgd6ubZbkfawy56dxBtuQo4fjDQdQk1FipBhsicgkDUniN6W5",
  "key2": "469wGuKrqrf7VmJF6raCMoyoNJEiUDYic9xeZpMzMWS2omcfN4iBgv6YppJaBMnGpRhj4xa9YRmqabitRxxH5Qun",
  "key3": "2D3dmTa8pmmUrsJ4E2B3q5kvQKZXbmFV9oQLDfvgoNBpEHhbAm2Rvn29GQwNTL3ajfLxBiCJPcbbPYybzVv6CCgk",
  "key4": "3eWqNPqGXt59bHkPFNDtDH6w34n6tFwLQrNS8b34E3JPbcmbbWxaQMf14To1oKbKBC5271kmzzSdpaAyhFuhxRNH",
  "key5": "5dmxRXdu7W9QPUHtkuPUt2CgECRz13NVD7y15wjPFREbXPeFqVcbBXskeKvpQhfsHxUWFZb2ePmGu3zdwJKx1DVn",
  "key6": "kk36SMjzYA8qh1utmLkNvmjcx64dbbCcmNKseffsocfERgiDTzJfkHx2Vnc3buGh3sn2W7uUa8eKMKdgy68GzBT",
  "key7": "4GcekNsrGog1JHXWKK371gjtzyW7AhSBrwDuPsvkQmaBLVjusEb73Qt9xQSWXFtLLukSEDR1hQNk1jRK6GjcqQ2o",
  "key8": "2i1jsR3PgpgHSzBRFcHcEiYp1hdLWQvHUxRFmSBc1Crrui4Lgi3c9xSjebpv7BvmiLktDpXoRn3guZEfmyzsvx8U",
  "key9": "2NTk9ETrR3CpL4BN7rioofV9TFcneXBKxyqhU5TkP9AcB11S5goUHjpkWU7CMthxsCXSRFdPvnxHLV58HtZZUfVp",
  "key10": "4B1ATpWTFdiX4LefekZd1QomaK3kLwh6UBooqZbkQZFXmdBEeyr2Tc4WkCEHAXjzuroAs5nc2pyzus71oH6U5EJb",
  "key11": "2PyS9SBTvQrGHRthP5aDvLTMH4F8sZqyBakCBPgb83En8Sgenebojkb953sT9uV7wSdT52DhN1iMweAVMVdCtPoy",
  "key12": "3PiG2rpKP96CsuHRAyRRVQjCFgxiJ77qKjuTGhiWri71eg3nwjqxb44aVndyNWeXL1z6Z84fKzs6peDc9QFRLaQn",
  "key13": "2kNfpWc6XkZEEB88xL795yK5RvUSfyRUPJL56goSdHHNqq5XRbcNfit41xhpw4q16o9V3EmVGtK6DQtjd6VGeVen",
  "key14": "2NMLh11eiGugZCAFnCXscjvSaqrEBPFmZYP6GmSzseZL22fU4TijfFMe8n9e5YePNpMwMv1puN9MmGnsw3nQugM1",
  "key15": "3FG2TsXWuYxqs3Z4CqfZMS1EJMzMsYgicXyYVBXaUbFby1r2Rm1Ewra3rohxTfctWZ68YVroyuyL8Lcgw5y5g26N",
  "key16": "5ooKeKoUiLL53egUBFRpcTsvZbARxfCwaNf2isHkjqbABQdf5wsQDdqjddvyoCRhh92Wb2aJYAFq8VY5V6q87Zug",
  "key17": "5wg7uDsyd5njQZUAkTnYsR4Lku6VFoL4wD5mW3MhK79Nco4JXqLLWn7piW25stJE8Qg3ksPn7ZKi8LD4zsfue5KU",
  "key18": "2YXnS8bz2DzCskQi9RVjKR9Lb5MtkYw46sLhdwt7pBzSSvED16LAAcat98CNL2muGm373JsJZ5cU2qRxcdtToiKX",
  "key19": "5tff2scbS6MHfpnzkCGHmtNuAVvpAhBQmieqK6twgY7Kxjjw8nViCi2RBbqMqZnXbTtqyUwNNdHXPjzp4hgQaYgE",
  "key20": "xCHv4VGukDUUKaLuodBaXzgCmodCmsG2mcg498PMHPLYWA6YXHkaZTLvjKJqswiqtnj5yMLHkshhvjTqP4wGrbz",
  "key21": "2A4KrhgUMmTdyTqeuqbJoDK5PNs6t5tDUEk8AzbaCdxkR48TuB8GjVf27qZmmU5vkB5pkv1GgDYv8tKtxRfGVfKb",
  "key22": "2iR1nMU9QEpp8ourzfYQG22FMGoPGQMDJJrYP8cfo8hUnF1xTnSN6wMfW95tMGHMn7PNo9hGeh278sbJYLpF6zCq",
  "key23": "2f5psYs4mV6zDpHeyuMfjARJmaqCqYPSkpbtjNJwLmNWFx2A9Mvr2AriUvEWc5wsopG92aWMy7ZCYPHA3XBakuoK",
  "key24": "apWnCsQ6KjpLHR6SFD87FJAW2MwZxzzsC1AkjNvCW2PwR4YNCCes2FcbLxQ9AyXrZhQg8G1QJf2wvCXJfn822nY",
  "key25": "2W1X91y9whNxCK2tt7TjyySM4iGeYjrFpnmoJvj6j8V2LAjWrLq6K5xqWXkNivtyEjhyhaQ49itBGfnR2Ktuzi6Z",
  "key26": "wh4W7iKibXbSaJr8SydGEtdunTZxuN2CSZRo3mBBPNAz3Wz9LBNirX5uKj2zCL6Q3YbQbNduANwb29JX9sfJYHT",
  "key27": "3foFVsnge9ZeZMwscp7E2bA5fX1yfS9mPwa2g9LDFBiHHLWJETeS2UVMagFJKqPf2py5DQ9MhQKDhZ5JUtWJPgN3",
  "key28": "5y3th6jihwdWQvcrcLvvYoCnaSc8o3wrnfMa7pa3qSK5qDwsGLtgsbP6T873Aq2SWg2FtbH5vS2wYBGe4baLkxk9",
  "key29": "4nhxSMdma5BWUoiPDaMxFdW9gnme1GFzfYRhdkd7VGHaDKgXnhcUZQUpYJjKoeZk172DiKQjuAjGUvKZdCtfGh5a"
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
