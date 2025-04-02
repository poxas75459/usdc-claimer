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
    "4BDewxRWanTfRyik34rbfDx3qWZgjgEwfvwSGT29RH4deCarJEc6cvhv5uctg6L2LchJASJ1SR2XnFuRYqEMMqc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYECKJ2ogCgBCWLCMB8ggWgsYhgYBMBLQ6mfnRMRCazbdVVf1icRMgaiaxRFiiobAroNNYEv8cXqY9F3vsg9r1q",
  "key1": "3oA6C9Hgi9KczxghMX4LussZnRjKCZAT6wr5JdG23A3fR87zgLUY4HM2aUgQrjFPxk471w5t97jeJW1pgWDuBoSi",
  "key2": "2ncdSqPGZVMxNpNwneSHapyn2hZiGwh4X79j7h5nuMmPGkPdbmDFefEoZiaTbv7sT8Lu3XKJCdBPes8k1oXKHMXr",
  "key3": "2BWP9cUPmUbEAskRHSYmaLConDy8gV5AeZg3jxUT3ny1fwQbwtdCPk4spKVZ44iqVuT76RgDPMHALY81fnScTDLd",
  "key4": "jCHN2fBZPpJ7vEYrQAQUWAq1RWAiaHjidpdutFUM1jsnatVVj89cnJRN5jJVtKjTfu2eRDurkPEajpogtL21xoA",
  "key5": "3YqkSRBxkXwUKkFHmmnk2K72zS9oWSgn2or348EmXQpqqyuAMgcPVKTAPHF7JpcJ2XFE3eKhg8KeWHSmC7Q1nTy8",
  "key6": "5aX268Msp2F1spUKfKt3wZ7deEk28aaZyvu8G7LLy2wWq3WYB7mrDhosB4sKFTDaMkZ3wzttb1jMEHsN6QmuwdPN",
  "key7": "aozDbe2iGTjdzf69y1kiYWdNnnCAr3BUc6sznazumCKkFNUkTaNopqAfi8jhkQhno5aUEZ595wpftw4HWs9BAZk",
  "key8": "4xHM1rQ9JuCUi8ntspdnHuoQW8oaqzh4nJEqhN9g2SJbegjG53hxr2owFsrMezAhXnz8NShcVbR4QzwyQGZuihbD",
  "key9": "edQ38DYS7pHVSEZkSzYwzBuov536KwKkqrGjs7KB7dTAcoWvKWfb7i5vVtkMJu61bNN3paBHKGHPM32Tzw35ThS",
  "key10": "3SNBaYAjihGFUTdaYjs9XJWiAR97UwE8Tr2Vk1nQzytvT8twyd1JXupKSShD7cPZDy5djZxU9rk1VPq2uHT5DGEh",
  "key11": "31vjHW9X9acBtxdkaeUVWpn8K27apmD9bJaC7bDnC8Wku3f6jnjWz1q4TkCuvG3poT8AR51y8VJugfBsZt44sWFF",
  "key12": "5tXVAYQj67V5Wf6AZiV7GtNe8je1yB5d8q86fk7SGGD2SsFwc7LBYvSYk8th3LaKaFX7htft2ZubxwPNQ3TMUggS",
  "key13": "2hebQrNRYyHvP6RcGgvZEKBNw6QHTbtsrvH2jFZbQjWaW64bNDu99WWEJugYE3qmok8ub3XZCsuULhW6MuqcLcpx",
  "key14": "4JmTwFnEycYadz5kzfETbyLsnJEPRv7HXa6uzco9GVQoh7uhLBtknFxxhEEHCxWQKV5bpzNWpokiLKagGgingD1x",
  "key15": "2tTW2mu1dceUWDMXzzLCW8HNQ1BcMgTvyiAxDen15FmghutcBLHkYLwtXTQwsiyN1ceZLZ6Xt3YQvCZsYgo4kvJv",
  "key16": "2qAx61FFvJSbqdTvWRgwsSwLHWnpM2SXHABHXwWsM1pFkYn3N8qwDSwPwY3NcXPSjHm23tpeH6jjTwPFQ3u2WTg7",
  "key17": "2U6A1DM6oWVEMuiDp4wXo5t5sGY5y2EKbMDppxppi4bVxgFWMFFcrsgUxGuBmBa6iXCpXtXrX2smzq9npAsDDPcp",
  "key18": "43v4St63wf2UXd25qsNtNduqGyXXKFeU2Pnb4zA1JM3cB6WnWe7RmehA9Qh69m7QVTVNGkw6XwfV3aaHsHAYXnmu",
  "key19": "4SFHTtC1fSob9E9hvMsBzcz2EavtJpBJDCVXWdRUywnNqJHQ74y58GTceZP6nG8smoTNU9bp8qKL5Ao3XoRTYY9Y",
  "key20": "2vmaH6npCGoyk3T3Fb1e54HfYnBSS8mDTkc17P2pBACH7NH3ShgiWZyiFyMpJsFrk5MPD4mokrq5r8LDNkAmAtqF",
  "key21": "3LiyEm6Ww9q7yb8pCc5wF9ZAACj4R7yXDyE8qBMPtEsTAFgdpVzkcrFXZ4NkKfCmZu6cuQQhvv6jhgPmdXH3kvkz",
  "key22": "4M4ZTEQScDf58rnN7rdgBukTubeafHnf1nDguvDQSAqDW4GPMXAuHjT37qMKiWCkC25dLNMw7NZAzw7x2tiDj4ZZ",
  "key23": "2eeHg5cnPBg7Wo1jUKJci4CBvXbUQWnwbfFmEMr1RTDnBpPqa9NpZKBE9Nwq1dhGZ2yJDt9bi5xcNfQ5683VcVFK",
  "key24": "567xwK5r2UJgYNrAy5MSjxkjZGE1UZLAZmc52TezmFzzYVjhayFyZs74FJPJGLkmMjXEni7kbfw57wsACcWbVFU",
  "key25": "4UM8SuxHWcHmy6GNdwpsdx529QmK1wShsU9MWJw8xmkiCKe21ipCvrMgdPNxBerJJnRavm29MnbhtXPHR5TMYK4d",
  "key26": "3QLgjDxyUuDDJFkTZYTEb9a29hfsvfrL1PrweskjSQsVFAtEBqWmqQ7hHKy1hjuHMQW1LpJYHgcgPkC6dPKVz4yr",
  "key27": "4rkFpTQvq5ueihS46yAT1jPfm2RwgqybivoJBvjB3iSkCURckobBSKDHveK6sth1s6jJ3wRnogH91kwUJb6HcDNs",
  "key28": "qbwB5R9HYf65MUGknQzkpytoNx317DvSeHojhBiFwXYGeVUQ4Kg4YZJoBbKXRr9MaNY2V4agPh5Yv5tFBM6AsSV",
  "key29": "4sv3qR4uY7tzgqicLuANHP4GJ4ovrNhipk84RDhpAG2eiAatwVgtbSmN1W5C77c6htWUQiGZ25g2xrzohR1uBrSb",
  "key30": "2TrGRtmbA2up7ec86QKD7fRr8do4mxundL34U7WNzYwrkvtwfDJzDodCSJ9GWEuPxytFUrjZLXm4eoU76PUNbyn1",
  "key31": "4GX329pndJuWTUYE8BmMUa2QF6sfs7q9pdUuyohe3KqfNEAg5KuCWAZJNfLHyVhMxuZRSMSAeEAtqenfX8Bxfcgt",
  "key32": "kGF8uqjxaocmagZ5cYwHLdSTtUgKYD9etmwDgGTARkQmoBjpfkEBK64TZsDjgtB5fFFoN2r4HmaYpNyT2Nxykkt",
  "key33": "2gpue8r5XvFmNsaGiphaKvpngiRHTEWX9Hx1hdqWn1yqhGpECFxYXAJ6TaXntohhaadmFQSwUon19awWLfVybRj7",
  "key34": "5Vf4SRSGKaGBWfdvhh36oHsGWhFwfgUY2FRn4qnJHbJWS8nFn3QSavxEg6rFWJEWLXZVFaMT48R5xXHLR4PKorsX",
  "key35": "2iLoA4uejsmUs2cLg64uZcxB8mkH2h1w7cNU62K8afAmwSVa51SfquevaAfRr7Nzshk9wiM9hEFPYbV1q5Lf2WoV",
  "key36": "2CheK3kRW2LLyzNa7XnMU4HrEAiNeJdLXeCdLyjA7hK4b77CRcfCHQRRqsMjtbqeRUo3T4yRSD4RdHCZgEKBAznc",
  "key37": "5FYFbUjRgQJH3fsr8ND9owD9bGuESM9V1MP64FXEWPL9xLrpNxQrzgX83LDkzUdSpoD71NjjjSBcuzQ4jGyWRtaH",
  "key38": "VUfUoWKZDvjAy5wcmq1HCUonicmmPr8oVY1o7KYcANj6cFnSwufrbuGMcS6HRMepecQMpuYgEJKKuJDteMUyebN",
  "key39": "3dmpuGCpJYeyRwjGyzkW6d88Dx2LfQNQbC6YCi7dcE6a9X3kmwhhv18jdmufvgmcuMnzKVqDjmgbTFysSHwrWs9U",
  "key40": "4K5Qc4EVi8xkQqmz7T63aninQTvzeuqpAhVYnaDeMBLXQXU5uHdNbx7zAdBGktZ1Vvk5nJDpFXLxkVa8Mk3K1rFz"
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
