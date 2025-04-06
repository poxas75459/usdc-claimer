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
    "2TorUMRm8q3aYRyM7fbKc87AyFKLHWdGBtCiZqmQT1cfc7T6Gy5fkHR3yNJofTcPibY5o5K4sopHewG4ocJPvD6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pTmfHUtoLfkXagrGMdVTRUj9BbTWoAsrw6sPAChnnvENYyoc8oxXmEf8agUGviucyW132z1aWbPhqdRRZGipCdd",
  "key1": "4Ko7c3sJPxZcddw7377pMfWAnLVf1xxFXkxy87NtxzQ83m1BwfcHmadyJ5LEHGiHpz1BQPChZ2cqxfkmLaRZ1fjd",
  "key2": "5QV4okk9H69ktgsn7tje7dg12NgvC9oukAUgSTFVs3d7Jq3XYfTCGFB8UoXGBkFkGsH65BUzt6XsJuaarNLFoMFt",
  "key3": "4vt43VWaFRvdCw6hZu2nnacfUacAA72vtVRNdDknYNmMRyPX4Rd3SZz49zQ7CHb4Tmr5c1vW77L9RcRntaun71gh",
  "key4": "4ZrzbvPL42fQiy26oQMGmavBv8N89h3tXqEATPHbobbALhxCAeJdVhNMFyPjqqYYoMX1gwsLMEW5Nm28GmfAEWwE",
  "key5": "Dyhu6z9pt63uUrMAxUmLEFVMRbu74qi6rMaPgQN4VkPYZWX5uXkpeQg52saQiLn3rGtsd5SAryj2zC3iN3cKcEF",
  "key6": "66Y7WR42KiQjgYMMhJfJXPX3DBsMvEprhDucj4zMXNxSmhftFSdjw9R6FRWesSYyzBbEAJWmkbJFtMTcqiRgeEte",
  "key7": "2hiQJH62hmjDvRrZEAKv189p22KhJLYkL2ggRt49m3gyLnsBmb3AqXTCuCfUg5dVH3VQp4t1pXrUEb61aAjTjDSm",
  "key8": "5TXbqHdAgF3crBR791uFT6jhQJS1g3KpCSs9jZyoPhtRNX5B4sHmDscCzYQ3FU79DpbJ5n5CHHYKCuQk4D5R24Kq",
  "key9": "4cBy6RxHKKvnYtAzVzGoUqKsCAfPaf5F55Y7Qegv6JPbhWQwu7qqqnxCxRBvNJHTH48ht17bg6NSnki2GAeJnpSa",
  "key10": "3BR9q1Jb8BqaBGdwvqSrxwAV6zfrVouTJBbReWh29Cp8xVwzRnLffDiSshVw8XEVux4kkvfdFzrHkmeZJ9t8jNHP",
  "key11": "5egnQFzWsup259X2E3jy8Wvhr8xVrrPFwWPXtyifXwBJRTJKFunJHk2eHTGG4UiKvHrU3FGpF431xjGxvUZvjUjc",
  "key12": "2gFyo2cWsHM3cTnGvnqBfxeM3vpAhnSjFgd5rvjUCRH4zZunftsh2nekeXhgoFKhvgPCuFuCPUy6VJ1mfZvz2HVY",
  "key13": "3u9ixpMttTNabyNmPCBAZwuCVTC1VJXrjHjYb5tMP3ZNQDTyj5gK9MTeBq8BpZYH812kRQE21rZ2bD4eMCKwCw2o",
  "key14": "76AS4HiZAkHUs5VFRSMsGp2bP3k7vhop3c1knmLA9VrBsaUFgXx7ZzJsGiNHP8nRwNsPk7wrNh8M1w9nAudES8i",
  "key15": "5yEiHNcv2BNmtLG8sJ5snbtvqnPfEc2wvMz8B4FwV5Ci5VvTjpegiJ2ETfV26y4qNP3QRmqn5DTiHLviSqVDP8Ss",
  "key16": "4W2fv735id7LGZhY6wVHCjsNNnFLWTcCXyRvduWULZzy1g3PvMriFw7ZPDi5c7etJSHgzd1CL8rEQKMTJCkNZLao",
  "key17": "3SDaZDqQinnvphggnyHk4Hfx256ATMT5PgPXGnsdfQoVbePyvY9aY8edwMxGwqEwq8UamhPjTCWiPrZPWh4Mdu8t",
  "key18": "jYpwbRe37HXvMCJGUTvyggFvYM7ihEMfQXcEUvvbdKDHR3KwAWfztaU7TJ5DeqAnogqFZfqmz1JkBUWdgxLGfQe",
  "key19": "3kPAGakgSyMnWA7vAQ91rF81CKMS4N4uBdjexQzGQ8F4W9c2BJ4qbNipqeGKdSR3vt2EyuzrrHfZxVFgpuj6ujr6",
  "key20": "oioVUodW4u57kqFHRM7ayd2C9MewdX4tLduHeZU3Kf6US9tw9TyiQQeqMdEMaByNeTG6ZYxMBwLe1ebrwqYhhKk",
  "key21": "4wdC2gy777V3crjJMUwQGVuaUSeHrkKRzegsxTKJ4j4j5XvbzTqKicSkiPsL5f9SKSCQamMzXbzjhduCsoZMy9Ah",
  "key22": "5aezoM2UURcgNvAJHWoMErUnRG2R4coknvTTzZA3FcrSyX5u69m6vxr4beHBuavm17FMcet4VuUdjehwcxUpgNxt",
  "key23": "5bXLhkUSmYwTNPHPgV48mrHZN6H34NANcUu9HwngsynnW1N6nS4a52d2ELkuecQUQgpnwt24oaJRU2drq1f788Ps",
  "key24": "5tM4PjnPvVvkj59yBDAypKUEomwvgF8AHWu6wcZCAcaRbA8U8n3J6ZvntDDbphVdSFpwQW4hdbUAeTU8SgkAWVHw",
  "key25": "4DHPykv9GAgZ111FUWn5dF8BtEN1wsnrSk4GJk49vkxL5aHcHrJw8qM4UGfy7SmzKqamEnkK4fMi1ffJJdWHG6rg",
  "key26": "c5RjvrW1XSUnatTRtxLfJMLdbqdtPe8zdLtgyW17vgpeNBiVxp9V2MgBE7hRZURPKFeKRMdK5hnDjyy53iDGymo",
  "key27": "5bUGZCkrgLzxGCPmJys8APDgewS2m7ag83AdA4jza3nW4iW5D4zS4ba1USbJW77BcY4KNxMzPqTEis36bz61MKGH",
  "key28": "42rts6DCvDkTWsYjEfk9r64t8je1YK9pX3HdPK53eP1AvFkY7N9k9DDPgzVExhR3n9okAEr71o2pjydvyaJn6SMR",
  "key29": "3t31mkJgvES84K39vJe2MSVrgUkUEWDX5xHthSqkYCbBMVYjds932jSjWytejokxNiRcwkYymFb3u3rQbggiQL6u",
  "key30": "kybJP1f5fP8TSkvH2MXtfrbc5gPeFn5ARfe7cxadVGTGFwM7wtVF4xJfZqk2bZ26s9XJUZvPTw8raJKNapPyUA5",
  "key31": "5mrFWna2y9ngMDxdwac2SmrpEnffrg8tqb6CPv4VEknV5bkXjwKkTBsKiJm1QyLTDYbU23wrAHcRDWotLghyMZEh"
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
