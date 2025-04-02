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
    "66TUW8rTPPvVPQXDoyQh1UwNZpbVLdSMvxfog2j5ckfbvbPWVjWa81X6jJayh3DHTXMFfdyYCRR1iS7BRM379zMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DmPRwyNcMprmVWaBSrUGM4T3eJBgxTf3uFjXRLJMCqjnWr5jLwguqiZHBXXggwoY8drrTvkQ285CB48qjwqavTw",
  "key1": "3cKwvecMJPUPjPjnGiYAJAiEaoXzJSkxw65iiC1cMawLKEHtxsPAFxTVLEC5zo1LhHN1rfrvUDg723MpCfNA87vU",
  "key2": "3pjQ8vXX3hZXqDdXMNF9PUbr2xsJywCBGFBuUVf2LM1rhNpWASZbFLQVuGUrq3RtYwX5tcEebKLnAabyXsAguJgT",
  "key3": "5FemUfBYwsMdaYeyKeuVkJs8L6cvvv6Fuwb67Mzse9oVeZ9djaZP4Cu6mJbM3SWrnEitHDNyacs8LMmiqqKuwRxG",
  "key4": "rhKqfVT2sGVQEty85Q19MmabzNynhb7ck9mY8f4QzPJECxQMLD7CyEjdPkoXfF1geYoPH8eLfJDyUS4U2U8Xqha",
  "key5": "5hBnpbUCvo37wQChjuxBpZ8F2u1gj5s3e5zULHRP2p36cAqduHo8gFkkDuyLAhXzSr2a7acViuMKbwny3VhEkd9d",
  "key6": "4uEdxd4H7psnyJnZh16LBmx4AiXRxP5UvugVsUWKnsqEHxuaAnFDPvYAWsBf54jT3cLVuEtZNnre8JVpp8fdPom2",
  "key7": "5KJxabiobQ4pPjhEZ7bLdMDsZJfhNnnZ1yyW1WYxRoaT5zPqMk9JZknnvpj3Yc9o4X5xwTZReVRX2ukjim4PUAZQ",
  "key8": "5uvaM7VtmGuDHYbp1pCBRXaMGgV9ktkgU6yz5hXtzVpWWKJwP1Gg9S8GsMvfmES7FeTRgmvaMkEZDCv3CZA6ajm4",
  "key9": "4hEFuWvMuBHkKWxHqy6WWH4FPrMkH5JzhfGAfEQ76LztQr3HRTdywWuPCyg2NEV5avZiqxB2EJkaG8KMe4onNoUQ",
  "key10": "3ssehyFBEf5bBjAKHuKfMxQSMAy2qRiMcC5HfaAfZNStPSW65gWABc4FQ6CVyAbQiTYTfDGLF3fsVPfCKx1dMzHz",
  "key11": "3aN9rE4fEHANbxHPxfP3Mst6oAZWAkaTyAXyX35q2K3cyrLm4FSnTVVkXqBLhFEoQ6LzxWDuLGJeXNin9xRgCZqF",
  "key12": "5HdDURFnfu7b2RvbMo3bjQcBZyBT6d7heE4GS4pJoUeSHCh16GiWDAbjQBDAyvnTse4CRHQQDg5bAX4MDn9tNkU8",
  "key13": "3BtNPWGDapQgPrQTpKZpW8cRocUFu7H4saoNhLgGzZLErA4sx7AzkhideyNABDvPcqjAKdUsJNkvkxiBAWohaFvp",
  "key14": "5K37nruS4Jbm1aTX81X9FDhXrG2HbDxj9SyswQSWKQnZr5K4T5pRGSxiKUyK5CpQLeiwAPwNrt8MHidMKSjDRHyC",
  "key15": "2Mz1cUr9sHs461cMATsertaio5FgHvVBYh48jzbxqUvG75GaKRsLP1YjiVNgGL1CzvvGFfuiKNzUYHYNbr4D841G",
  "key16": "3SYHVmkcidSbiRaphZi9y441nZ5SyZiqGbanz2j1m85YJtPPUJPJsZ9YhhUsEwVonLnXaaYFJ8JKYAWc5Bx3eSp5",
  "key17": "2hWBwc2wVHP1P8D91VYiD8XG3vEFFV6BNw3SzTbCdXVStt1D5NfCGybgXjcbhYCo1NP2pXsNFRuGW8dwzADjL8Wb",
  "key18": "UNBGWTCqyttHoEbetNewBpPE9rCiyme3ftgUN7YmC3NcXdDj1vfoj4mf5jn8Rf4CAMBKRXaXFQFfVY6h7a2rJrj",
  "key19": "2qNphVFzRZhFDtcDD7qqM3ttGUGP2kDF3GAEVbtp9T3fP7XfjBJ5zJqKHt1rWczbxdKVciPxGgzwti5kmzvygZUr",
  "key20": "5MBXjAu1bmTWAmcSkMrUV97AT1aBKR9uHyD3Bi92VH9k6s21vghymZckKYB8DnHtT86LPz9bhS9WKWmxguVKoapt",
  "key21": "3tB3LXk8kbYWnoqSsPr8FGKzhm87qKCRMbSRqSMfmBSj4XS2mEXHMTSZvBe3NtU4LWpTr6MAxXtEADdXvmCC6fN",
  "key22": "4zciRsLmkFXWSRSCKVKv3UCCXyDkGTs4YmssykA2qcAt9d4zp6GGg92Af56d6buaneyeNRMBdWkRwGCD9qst3hpN",
  "key23": "f9HjuQ8gubyHZUrp4PcGyq1bBQ7wnTvEepRNgcuUPfJydiQHrWWxWXkssYwvGH66kfeZL6pLpP2pPQmjzB4fTLj",
  "key24": "5y3RnEmQJqDX12ZrXSGEZVurS4Pi4yjoitPFw8ZnZ7aXSAHr5F4NgsbwEFVwJkn61TpvhPUmozk6d92Vn8ffmPrs"
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
