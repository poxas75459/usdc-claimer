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
    "5TARcmxLRR3993VcP5d4aorT5MoP9pa5m9AGJdaYuEPP3FvaitBbfgnZULHU9k7A5em8SqnHMV24GBpfBYLbv7No"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XJJzsPrr1JBhiS4yW6hDt983UjpJrCM5bkiYf9xFToL6UV7H6XKg6VbVowvEAHnbVXSgxK1R8dDwwHDPmdu7z17",
  "key1": "BRSEtesZJCgjpnSso55BFousVU5hHbaKeNw6pYnFR21KUXkv8PJi5Z1Ej6G7bYUvTbzHKqCHLrvKHvDJEfmRRtX",
  "key2": "4wuw8eeTWqMSNC7pC6X5d8rnFipsDpbfNXqSbc5GJaTpj7igCfa3UE4SJrEJmmMz8QBXH7qHykRhexStkwQtJ8qy",
  "key3": "2MtYyJU7xftRBnBFTA8pvxoZ3cL5MtZB7ZihFc3Zx4QhxZY9VGesFoFFoQJnZcgjHqRZZ4dfLaVt1gV86voE9a1Z",
  "key4": "2JyxenyMmcmobi4h9cQhsyfvg8t3AWzfset7GfW1dCNGQEmANGdmo8DyJQJBPefLUsfcZUUSSjHxgJd3RnH15yEn",
  "key5": "4uY8vuvMf8Wh6V7x7tgXt5hfmzX6YfTiVSd3dtdUmeBKJcNtpAjns1VsQzFNXU4qgPwBYajdxrBhemmW1BiYDMir",
  "key6": "2LhXk8xU6nRB1SS6xkMrnSaDXPNXgkSnwc3oBvBXV6MNh94oH79MnsCa7LHxMXEPwxAQjb35HuKomrhn3PTM7LHs",
  "key7": "5jZukDbYEj2Sae2Pz2wzevBTJKib84KRUTmhrKoz3qwnGAN97ihS5RTVWNNZAoSzB2oyCKmyQQATwXJEW9jAfCSn",
  "key8": "41k14C5NNq9UrS9dziqGD6zKNWnHfhwGHNMjkx6Jntk8bzwsYm3KHhxfowHHxcnAwnLuetBtYJdk8ZaRJgmwXivB",
  "key9": "3ExSQtMrqjntMw5EWKovuH5dJ2ogBR7bTXe5XajVT5pvi2ekxecRyck3mFwHfEgohJLpbz1SN4tuEoBaiZYw5h5Z",
  "key10": "613TydNz7AU2WtKm5LgVPquojf9yWC7r78937WUiC73rdQcnm2poSG4TPnko5pZMGYSTwzKBPwH1VjvdwsRbq2pL",
  "key11": "4YDPLNsGBcWyTx96Ry1KtdRJ5UCZ8v43stSQ5GoMNDDCmmgbt4JWBiUjb5baLk13YusVzt1WH4pEgrWJEtt85ivE",
  "key12": "3NAx2z7rpLqydosYbPYQvUDiXv7YzEYNVBAWByUznssaoy3x9MafN1NZSPKa6ooSLLDKMGz8LiVdJGCwnotf4TAF",
  "key13": "5AKxfrgm69B3mza3e3Tm1KU5oxidacCVX5hJGxvaC3wT51CTKcUUGLXXVpPKRpR4P7EWmJKVWXCZ1jztvjQRXUbp",
  "key14": "aA1ujibpbxcRwy9oY1pcHaDfcwvBRtrmm6sAcXCp46dHnwA4524hCRXY16yjhpHMhE9VFc4uwz4oEXYtNwg7sWP",
  "key15": "4JEXFNqM9XkXzahF9fB8D1sx89q88a5m3gnSGStMNELP4acCoCwbxCqqGPUy4dDviBX4YgiXactbPJk93D9mxRNX",
  "key16": "5fuPZPMZDXm1F8XdocyYy9KvYRwaGqqUJdQxczo4dK5oTiUDAgNKKWgrj6QEfSVuzeNGaVJ1GFUSZUUhBjCQcCDw",
  "key17": "3PvJ74mwZLtHWaVeXPNpXvUKgL6mwdKtddBrvog4sdyKqnph5McABHfRPnNevcWu4A3BP6KUCSrLqvpF1LbCcK5p",
  "key18": "21pM2htDH4RnuBibcqzyUv3kdeFsfTAwMxoRrqSmafaRDYgeid3mPrsNQZhCrUESnEt4XBoBrS4hgGzGPz97pSRj",
  "key19": "3LcwxNo8ZuQcN2oqJkEnRfc6JyQC9BRRbLZoP7YwuSBRPXK14R2FkJ6qJLCSmJbpPFeQiuvgPa8z3ejyemt9mAhc",
  "key20": "46Mi3fZdZNDSxBaXdM2dqgQ9eaFsLpgib9LCQTQQsXRxab6gDwg7ASAbcCBtLBaQjdVbWM5N1HDve9Q92KjpqUXc",
  "key21": "4Fq3VyQ1qbRm3hTrzMNXX1p7VpohRM51a835Qe5SAtWXSZbSSkRHWgx4BGkq92oRs4SoF49jdXbcNZrxuaGnhuuH",
  "key22": "okP2F6SoT8SHGsmu4ncWTCrHUgUVnTwatDgVr25BuSDbeAMPgVzeDok2gBomfEv2XFGkEphj7ZjHmnzSrVPk1ys",
  "key23": "eij86vE4GVspUWmbR5QknyGrbtAVntP4YLpvFwUdBu27MAU8pxkquLGCyHpGLGYb2fnnW6n7HJnX4mjPF7Ec7Gr",
  "key24": "c4KWMgNDWFpJZQ5XvZg8yvndiN2qqN6QVadMb4ggqNxYGVeDxjQ8T1GrAikHWvkbNJyt6pA3fg1FFdqn4E9KiF5",
  "key25": "3QCyMvC38qFqgBbpRMhjXmexdU2sHLLD1fzFXD79za1Rv8xpr5anMWcYeatUrKYH1PTCzVHQAAd9xvv3cBJg6TPC",
  "key26": "3snWSwvYYEBa2j85AcVECc6di1o4ZXvUuMJSbr1yzNyGM16dFk7TTZEssygZznjKT4L53gCu7owW3k1uAS8jGgDk",
  "key27": "4skyXw3hctLbtfAokxjtLbhTewEmxQ3zZtn72Dp5YCrR8dxsfJmpbkZHAx1zR9M7hvwQSMB2vvNrX4u7a4yF1dtM",
  "key28": "39ieg5CnPDxY9nQ3Ta1ZZXRA9Bvut9SP8c8JNjiZovk5QJsXZhBmYkUhepvbE9hkJ7p8n3RGHcaduyKMgXsB55dN"
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
