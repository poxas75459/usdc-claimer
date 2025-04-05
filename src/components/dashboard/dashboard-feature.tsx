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
    "3BpEZ9F49CmML2nTLbAYadpzP9i6hF7Jhr4vW3BqYrNTvFmWAEwVpuqtEbpYcJvcESvA9EKGeg3MMjAiQFx9vMna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kAu49P52ALTdcxkNM7ePKeYh9wwKmsmk6sw4aKb6CN3xxLqimn3zdAME9PgiZhKTBTXj9j8eSyrN1Vcazv8thxZ",
  "key1": "Wj56xENBpceUbpdTP3NoVpGpz9dMKcXT6e5fshCAuyKfeSGHHUcwLKgkWUnZaveHhEfnmx3882v1m9sWi3sUzUW",
  "key2": "4GCnHRE4p2rUznzZd9gebPtGxJcn4VzknLXv5MkafHYwTtWyjDS5fRQUa3kt9EFUafSNXNVHmtub1F9kA91WzQKq",
  "key3": "58kWHyY6YFwDZu4vuhqLktcdcGnLYhXDudR1UpUBiWBscH31mBx5gXCS4AArmAzqzE8P75hNQAK9im3zc13WurZg",
  "key4": "43szu8DnZetTwywEEdHKUQvreLHS7Di4uXQkSuky3x892Yy6ymVawJgRLdPMwDUSgLofVnVTUMpJK9UYZSKtVpjd",
  "key5": "5FHqxcJrLsu4BmSpfzu9DRZE7ymFSfYT1ibCpDwr4aY42S6nAL3TuJpaMNNgaLnWhDPSJk6qSETWJYwErAxpTRtm",
  "key6": "5aW4FzA67NEKJxo5QnPGRrUBa3wmoEEHbGxDxtuJw23iyNMNTJvy7CcKp8ATBNMy9jP5quKjvQBQCdYtLRcZMtV",
  "key7": "56Dd3ffHGidhP4RkAN5LGeKUrmjRCkfMXKLJCNvdDRe1dD1oDa1dSpgyUKweGMp63UozaFUzMGccTyaGtNQtjp9S",
  "key8": "44WkNz4yFYAPVoBJaHuZrJ4BxDPpjkMNsuAbLDQrJuy48czySstviM9h8uZkvP5tBdexcNdgdgzj45sK3G2Qm1BY",
  "key9": "4n4sEQSvPmqiipUgd2oB35W78MukxVtiFMWwVa31u4332JV1cqVPZa5io6MDDKz2hDKB4LFQseVU51y3ycSFew83",
  "key10": "5Lvf6AQ77gJJshETpaezsJYX7yEhHJEo7JyLun7na3fS16HAhyMR72tvkXLMzW7ZNnHLL3wKZw5HvEp7CBrN86tV",
  "key11": "36GowxAg2CWJfRvfjBqMcEap9cuH87BAhjkKaEkHCcAzMK58hhDuameQs3P5bD16bBDrX5NBpuWDkKbHGS1EZg7K",
  "key12": "4VXs53x32MxAnhyf1E3xKBykJYqV9W3V5sTKYDijyhqciKr5cF9fDHVLp65p7ofSADHuUMjUmmdLaSyWMsgJ6bX9",
  "key13": "3NHxMcDrq7HZMRoQrMxF16DSsnAaPZbqKDkYgMh2QW2SfMce19vg1ZDgJqVPiyCQdUTDhVxyQ8ZEK97fhMMeX26g",
  "key14": "YKH5Js5T8tRRht1JZVPqCCcp8dzyiRptsoV6V6b8igiCAyeEFxf4iCKcbT2Yon6qqWrravWtyaLVujnWJAvfpYH",
  "key15": "4d7kNhmBj6LmF85BLWvU5TzhtzCtvhj4zD3TgmTMM1DGnshReiyMT7moq4g1jg6jwzq6VLT7DJvq2TWgKYvmp74N",
  "key16": "2HqCrtW6LthH4X3KqsjD3TS7Xc86qvEySQGCLSjevirrznrXPqtqJt9wayE65UnfGWg6QJ2vHJVyY2meAi97DY5n",
  "key17": "4emzUw94g8MqxWtU1bTusQ5D3oGhdtjuJhZAKNoyiJV42crSjCtCiJUJd4P3HDMcMhjTpXy2FRAuaJZGo2B83p8P",
  "key18": "zJydrQRahKKGZidu4ZKFJwYRhGshv8DojVHMsvcTkWyYQLVYdJj9XVXA5nAL25189YwW9Gp4mbNobKBS4EJh3f4",
  "key19": "3r4ctddeFgaieWW4NdtvyosUbjV4MvRmzhrugmAbiwfAyUbiTPSgCL4vbCxrHcZP9213Ld8uXA1yjNfEL3tMJd1c",
  "key20": "4p6y5CYjEXBuq2xzXo7buvrFR7J5YuzuJ9sfdZy5JxBD7yW7vamjQ1FCUtQ49ccz9qXh6S4AaZeUHHvF6uzqG7q",
  "key21": "52QHrqZPrvUCPrcAmr4GEwa43cueuoSQXnfTEQqfaYLDawe4V1N95uv3ixjo61RUsG13gnf715AbvmM3x3TSTjEF",
  "key22": "4Gj9ALAgYv9CR1W39DMvtuAj6oZ7x1RkEv3PT1WCZ6eBuNf1YzusvfXMbPJkXABuba9B2kXHreHwGydT9qTzBiME",
  "key23": "4W8rG4aotLLYUfLthsGmGWUqQfS54EFqAhAPYZNZWKdQNzGTfZURnDsdEnZ99ZQ8ADJ969ZDMLEkJjsZ4nPRW2dC",
  "key24": "4WZLLXwbETUfN2ZtCaQdCQj6RqucWknab7txd1t6cy3UvzrL3FgnQ2CgEXoA37CPc3NQZjNtB7iPPZYpF4jsGSqS",
  "key25": "Vep7T5cpQCmpqs2wW8PQUZvgPJSueY4NWJuczhv4UeXcM7LupXrDMcjP5j6L1C4d1hvvG6rcSNNoZLKP9hZxz5W",
  "key26": "4929xh5dfz3ZppXLQ8s7XHJ7Wr7rPGPPPUMmTMjHwKQRGUMRpZkUBdBjuKeTDqn9YdcmqCbBnTVg8NT44XRbhaAN",
  "key27": "4F8qFcoLvKjY4X7JUfc48xeB44V5fwfqVoxGCRSccUY8Bdn54KujhBJqDUiDwr5ZqMqcpxcD1iH59UDuovXroweF",
  "key28": "5mfCC3QnrRR6tjGaeiqdkB89XMH3iZCEcyDRzYfB3aGzcUTpr32zCGRZpaVP8BZ8y1LUfhYXWwTLbo7cC23aXsyD",
  "key29": "23YzNsGzwcnrz42j9UXUbisZXzZMVqoA35chaPhHQhA7sr5QjexaJ6JCc4wEaZAjqC5i5TpjS5ZJUHypAEMAxYr7"
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
