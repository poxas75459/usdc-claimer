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
    "3NFumgB8wCQWUu4N47vuL9cRyXtPCD7zAaiCuAP8sMjcVqZJ32hfc8iHxURnxyVsaG5UHiXvRzgNkHkoPJS8nKuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bZwBjVH1q7VGpCMmZpN1qzZmv5uZ58J2jQL9ikYqLC6146sQRrdSxwaZjJzJj9ZBVeq8z9xzfE5zwWydXvdfRhA",
  "key1": "Dq24qZHb877CGFM8ky9VYwMKboMreerubQiMC35ZejLHnV6rfuhCsMYXs8KozY3vrX2WGxLbvCMc7mRHTohCP4R",
  "key2": "3sHWWV3GxNTZ6jVfonhVuTTAxhHCMrJ3tRVC7SP7PdRSbLw5CXcAX4fgQK9FhEgeyCwfkdnatMg47RbXjxVKp6Nt",
  "key3": "5WxnBzLF5rZkKA9gQKHVgd9nRFYaL6PNRvwHjuHW7BgErPNaMqKge5XfCTSsxdHhCXeG6GZyqLh462YaadCzZXLa",
  "key4": "2hruXD6vvyMMYrfxp9ehUUyrwFxGbPgdhEDWk2zMJsBeVc1kfBdkuY6Wg1WQ7hdNLeYBXDvTLR1iyuazfZ8BBovo",
  "key5": "bGModEdb9m4ESH7jSjiA4H5dySuYZ4CwmH9XXu49u1kRxPromH4aJZu8rqf93pr9K36ADFiJ6pKm7m8mR2LLiVz",
  "key6": "4t9aeNr1TmdSNq6Hg9fzM99StLx3rwBsnKLRwC3kfZzzzithJmTzSSZVsYH5ruXKGhFvHETyQkfBF31KyjrLVbVs",
  "key7": "3bNszEdWzY1W4VcuwGdYSnPU9gvNKDdAND8Xm9TKFSRBZk2FAtghhSLifymxFzsj7QSfseqRm3MUwisCEArdDDPB",
  "key8": "2ysKqWZsHcrffU3nsWiJTEAvdmaY8VTk8yH3m8SkCBanQhhD86WwFLNUTAPj2rWJ3yiQv82yRGsDtJkmCWjNH51K",
  "key9": "3WHejydEWjBWiNtM7dysbTm3rZKiGqcKnYw477kNEv2epCiCNrNBjyGUwjQB6NCvYmp1nKiE3hp4u8MAufzurJCv",
  "key10": "5VbgLus9VS2TkaicxqFmkhDhkJVMcyr54AecZFZTrhNic1V71SUiQpeKMEdeQegNjrrhvpabAVNJyLwKmCpPiy6q",
  "key11": "5zuj7DsxuwwbSg3CPqgipLSuMawb5cPsj1hPbTMSpPuFbZY4xH5NtiPonuBV5c7taG2Wp4JEtYtEmFKnnuK1AGr6",
  "key12": "2ehHdUHhaFXisuEUAfUggm2YSAMr1vnst8yFFsmxbL9ELBcMsbFUjwRXiSV7hR2pXDembYVRipXJDQpbFP5zHisq",
  "key13": "5298PNK953ZEZfvfPLPdSeQ6YJFFfZ5YNciCBvUC7kBikawtXbNgg3pqXvtmJkitB3zfsr6Ch9Wt5q7pDoWS5He6",
  "key14": "4Dbex5Jad1nkeK3VvSyXJ8nqVnv2DT37DxdLTUGQL1ETitfMcnQH6N9hAxknDCn9WDeK8Hq3FUTEmLM8GAjcoqCi",
  "key15": "4ryG1pHaQG33vUYihuEtwWaydmyeSXZZurgi2HjtEDGncGn9aiQ46ZrWPaD7pwfE3EHjr2wvyueKQpWWBtLHhZRS",
  "key16": "615UMKWJYqjmj4Tm2fCm1W2XfFY8X3frK3Vt44gTzWW4pgrSPrKH2nbf1BBcW8Q7MZEkQ9ijM8U27S3jyZJHhuJ",
  "key17": "3VFVCCjGZnzQFaqyCXKtAh8UFh3Mbyef4m9yPV6UnprNQ9Xvp1gCYsr67Tpnde4SMyZHoobdvEY7JGgvc5E59gyS",
  "key18": "3xRbfogWnazh2XyDsHf9VYA4szvXtnJ9iSAxBHdWnkDtq6x25yid7BmnDXu7H1oiDjNCXT1JTewze1vCjwFWg53r",
  "key19": "3ETEksGAj8vpLDXtmVzDF5mGQDkw3BLh3iBjzg8rjC2KAtD6Gntuaxfb5CxUmtk38BEnBu7P45sNSksZWmBaEaPt",
  "key20": "43Qk5n9eeBQ7rfUHYgZeAJ2wLFSb2pBYniuZ1FqcwVLKajCrgrN5Jfd2f2GWn5ZhPhEiPDMu8uPLCiTy2mjwounK",
  "key21": "jFdQRXpQM3fPwiTaXJtnHwxrN3d3mnige9PUSUUxi6NVZhA8Q6AqNtPpktWS7x4cZX9R93vo4uKdTtDvWqotLb1",
  "key22": "oaeK34d99EcwLQa8Wwv5Tw3CBRNVPJpsvoNR4vdwARnVh7SMvhLGUVSpeniTUoYZDXwGDuZw9uqZoiBQ81RMLSa",
  "key23": "4FxDZvvV3ovNFvpc1B1GKozTSXUocyEsfWRB5kLVmMdoz3HYGYEQVf792wxDkKsnWVA3mNgdTmDeY6e6oZADeths",
  "key24": "37UFVNndENutvFhkmJdw5A8Pm6PshPkzJLCMMmkdBpF2aUEHXrLRGnbvu3vZSfdjmN5ZFu8YnRrKg1of96RmjDW7",
  "key25": "5FXprVjpE5ZPh7W64GfcCM93GPW1jZGdRhV1xTSiKUreyoMuEgVw1vyKEsfWhYkTc4ztAW7hiCQrAiU9igT8nuum",
  "key26": "2sGTdoDvpCzvNDGyCSddNdUsCKTfqwEUa5uY1wXWcpk4bMMA9i6jZSmAFzQjbxGYFUVaNUmkB39CAhspsHm3Ewk5",
  "key27": "58iBLiAbWrhDBbv6qpmVQVsgrWU3tyMbJcrU61BD767hRShQT2XQEZhNXSVUApmvFfzY8Ktbv41o68WmbNFGgYsG",
  "key28": "P29VFMtC1wUhJjMvaRLC6F333ns4RydEDZdLPJRtofnWTuKxUztdLmRgFKVP3kLkFVkVCVWPfpXy5n2isEeNtAw",
  "key29": "3kJdnH8QkqUen52wWk4Rmw57q8h8S2E5LXiezXgLNi7zCZvDCRqXc7qheMjnAvwTNaqhuSErP15yNWBHCCJUFBQh",
  "key30": "3fQB2pFxnKeWMu3E1iXMxk39cxKjEowBHTdVit9WrQnjJtg9TvGvFJrSn8NRbVhGhBmeMDG8BSQvsXdzg13CaE86",
  "key31": "44cnDebqfWwrogut52eCjxuHBXy5QjXhrSUASRA4MbcmBeziGNWTFw86qV2LRQLPnt8jkA3Eem9vNvpHRPsFYUzR",
  "key32": "4Rn9TmujqoEqXWdVD5tpXdc7xwTtA7r4wZDMMzsRASqUJCppAwK7MDsx1Msg8f27jFJm8NyDpJozxYmok9gNshwU",
  "key33": "4ZTr5qFrjzFb6ZemwtjFvde5eTfrucfG1inNwkxfUzf6AtTMuCkno1LS2R8asECg2PR6B6qvKE9YHprE1spzkruX",
  "key34": "44MQZgTmq4d8oCHVeRbUs9RFgAdBjgj5UvPKJyV9bF8dk3GiV4Q3vfmLefqtv3uyZtMn1QK4dJq6kHYKac61okS4"
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
