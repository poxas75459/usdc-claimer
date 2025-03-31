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
    "Dd3KGDeN26CAMAsRk83vaZ61YhCncfvKz8U4gdGUtppqdvW6MrNKFdrwWTLgveUi7PF7GSojScAvG4kRX1fxyQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53jCXyHCcKCyHbs2pfvHjwdJrQwMc4DwgAx4jRFx17AYj3nYuU2H9ecK9Rfn12shno22xJrjKZfB5PH9RyLfRQnq",
  "key1": "5ZsaVtCzejM9eAgSxN7EM3T99aqkJMeqA88SufHhgaVQRqUadXKzthEiZLvPRwRhb1LGMg18ANioHMMvfauc81Ge",
  "key2": "jbcUwyMQcW2tyo1Gvh28HP5HCJsGDKs2gW9CVy7dNKvYessZ5CkwstZX7t3GiD4VetoJnyN6BujCoGAAcNaQA6R",
  "key3": "2e7JRMZDw4VcYkSD1ghfm11H394LH9ZX3B2nbSHvaDF8hJds3G1D1SZDVCg4e55WfpLw7NXqEPn9KLoTkNJgvYPF",
  "key4": "2rZ4w5bo2NDedQjCYLQniJE6uxiAA5seTVGtFSVJPoDw43woVu1SznfQc81svWhWuWGA4BWD4PkZQHK9gPiccgG3",
  "key5": "5Ni62AEr9juBxGxEuFWJymmhqx8WQgzcMXigdcmd4fAyN5Fm5bMJpqqhoAqSQWU5JMjHvPJFyQpHZkCXUTonUYUF",
  "key6": "JjdXiByzbwZU1ZLZBgCQ4ptHXKHSveMxNrrz6zin8Y17XLJ7LGbvJsUB3Xyw84txLfg4JcAwbg9itxAVknhZFrV",
  "key7": "2Hs1xUy1eFvNw18v4xJ8UmjEveS4QtSShuKvGFQzbEseMvDUPhpKYyFduYjPvcnM4uNN4WT3ibCnjTytzwqZagBq",
  "key8": "3ZwLDpFVyzDNeoQpzGC2EAytGCmvnDEdiLUw8FckyctPeFy2kozDw3pyyBbxzwneJmcmSqMjQ45n2J6EWMFJ3Hvq",
  "key9": "5p8SSwaUtJoXe8PgyCeikx8kiYNGpFyoLEMWVjLAK29T99KXqWmvKmeigjqRV1ueh7fRopqa6yMyMgxxdM3xYxBM",
  "key10": "5ZyUeErVdcaWRYT3zgsNqt6BWwaERfEJ4XTVLCs8ZH1WfrHnUYqDn3v3ZqZHyjDfhehKYNPXcRVBu5Tv11Qt13ix",
  "key11": "2y1ZWAaPXrRgSqtERtKHRxyokehwpiVcNNFPQfZMEb51fQyNoBkduVQoUBwaq6U4FXwHbscaJH2wz7b1PV5Mw8MP",
  "key12": "5w8LBGVccicwiccTh8CTz7vkAwipGhUmNVhZKwmse8wwX3zxb25SUFfcjeTobnCsZBJNdrCVaCQm6Cb8MxdMsSav",
  "key13": "wjpXvQXLdzWSEkJUVPuLCs45ao1vPj4yvj631SVvj9hQ41xUnbfNiD1mVEhDNLuXsumq7wQRQ9cbgUJoEFZ9qoQ",
  "key14": "1PayKFd4MpR8KProCzMAPexguPTqWgHKqULwRQ4MRMki3EoTqrYZveuhK1t8rZKMFtGTJPFxLhriQMx8frk6YdW",
  "key15": "2xwCsMa1nzikqCKmgAETvanJLSYBgMSgN4gqA5XTyTk4iVXHx5GUkDRw8C873HqTivjFYSxQYbBqCTWpU45zhUrX",
  "key16": "Ej4E9JbCmvNN8x6kDGPYJakphgFjFD1aVw1HrQdjFgH6yG6FaNmMUzxS3be5BqTHihrVr9NQR9qr4Q9jhLbf6Va",
  "key17": "5PTDXbpDENsB47Wm7BEJozTGCfJX7FqY1FXy8i5ZsauHCoyMBRk652BoPp96f94xTSV2ySiVMAbQAdSA2fW8wbG2",
  "key18": "7dncD4L8KCpWTj2m8Q1aDXTMxZx66Uo5d4FmGv1zVvpYWYtFFhuBtmprVWcRCz2CoU6xvn5gBMrBtAYKUKhypeS",
  "key19": "5PQDVFiwooM87NKr3HFryFsqRumZnYbP77QXtiMD6S4vFz1XwvFyuNAJkQUR93kernduLp3ntzsmRyYwFHW5eHwX",
  "key20": "352XQvk36HKSJ8aThPmFD7YdyjixNgW9qFp8rALmzYGxJsLEkiysUk1ksDbfEbkzFH2AvRVRtbh17K5qb59jLrWU",
  "key21": "3Vr7G4kk3ARmS44Ct2BqCGpCsMpfQezViW1bcptDmGz7QTdqFmrBNBrmCsnt4EdMSjhy2ymV2nSuQbhtboZAB6im",
  "key22": "5Sbty4xf484gxwS9kGVJ8R8cC634fqyzSgLLLHaVFYB4MK4VQXzjDVZ9fp3e15z6HJ7LWjHA1y5FqUzeACznszLT",
  "key23": "5DREwHcFMez6A63RfBFDvXRyLXYBwCicwhimTaUoxJYArj19fvLmpboPbdz7w3RyAD3XFmbLY4wBCPGA3w13nBu7",
  "key24": "SUsRwaUHgUY8jsi5ErLdhfb2QpKRpR4Qw5HMRQDZ7pCZgU6Ufv2vgwzkL8PHeFZGsEm4UjWFxQ1RhDCToqSeEX6",
  "key25": "2iVnS1xCvtoQUmEGB6Xa9RLwqo1mUVFftq6Hih9G8U2SGVpj1eMRZNqPCprrxXURsh7TGC9gygjMeZWWCyR4SEoC",
  "key26": "4KNP38q1byDRXvTsfwczvuHwgsCbxoTmX2NUnJSGKQbBsadja9Gy7cwCi21bYehWFWFVyYTAd5ysvdfsCxTavfVX",
  "key27": "aJ3yWuj85Zj1bU86eDCu24iEuMpsVApGoT11ZXk3bQdx77HFGXFjB6RH6g36pkpBRXA1TsWb3kWZnzKqoRrHYTn",
  "key28": "5vAjDxNUmr3szW3NALt61v3zt8dppz8HrKbW3q5G1o7XJ7xARJytq7WEMHEGavPxSxSf3H6gUa5nDvoBnud1gymz",
  "key29": "5RAAqo3RDpvjkYxaKfLzpmwdZHCn7YbsJoXDDV94Qkv2mzQwrpMhiioJHVdUWHGTBAPhhuryCeJvXqtNnutLshGV",
  "key30": "5GVCEuyqrFigzVvKDwJepPvDfVsULQmW1kPvREuAWyMccwb7kGKwb5PjKT9mPyGSu3dDV5fHvRwGNK42PmNg2XXx",
  "key31": "4Q4hPYbnzz8use3ga9mqfXm7bCK237W1eNHSMPqpgnqNTAgn8hL14wxtSVnwWmN35FhvDyFwCGoNqfMLsdmYpDhB",
  "key32": "2S4irAQgyBk89jxB8CEBqswNsppF6zPHWTBBqTL1GvoQjqhQ6TXDF63n6Mn4jJ6nvMR9HqkH9wdkKt3HS3Avvusd",
  "key33": "4NovfvCMQVQoPmtWEb4sJtyjQp2MspdKZvo1J7QRbNHQ9KuATRRucxkhqUn1KMu7UAGnDqHBtXXpCHM6sJL1rbQc",
  "key34": "54Aq5EdNet9a5AxLrtazyHcSDG2CULTyvSqfMnNxUcfPHhs6TTC4CQv1N3LgZ5Z3c32Z4TeLcUE1AeakzcJT3WzM",
  "key35": "3N54EMC1JdumiFoEnTWsGtc2nS7dvS8YWBcSMcSa7dJM3avvpZzssVcQZmfyjCFv8GbJXn8NGCHp6qLVujeAX96S",
  "key36": "3zZnchMyxCeCqSN5uUSkddPUpmRLxYNUCTWhQrfD51rPDkjQE1bQp5nm4haQwxVm55VpPoo7cU9un1sUNkp3C8B9",
  "key37": "5Z9L9c1eCAuRHVYffgw59wWufHT6U9Fst67aqr9iMty9E5bkQ6TxpQVfV6zRz1sVSBBu3bBrRSVMRPVqSMiR95pz",
  "key38": "4Z2jhNWje6eLpR84LbZiDKysQHjvKaPoqbveCwzDjbpZjHbpE2s5YK1jCiFyrs7U3TbDqruXnN2CA1puEy2cVYsm",
  "key39": "56jj24cWyzvAWP8btysep7WAUoJqZVgZdJLdPvRDjeqtHDh59QkC5fAcynpRbSV4Xbeph3oR4xw2VYoxyEPjKg7q",
  "key40": "5eGn6Dc1c2zwZYVA1LZmwQYjCxyq1wH79WaM1AAAsWFpiHyeSG1BP15Lk4RHgGA2SPMBAiLRo6QumrqvRVJQeHhy",
  "key41": "3axymDFMnNzqhdt2gJvJRW6cJqFKjr8TQgQgEzpz6tg42EkaPLcL4z3FkL9YEFYzAuvEPNvVpE3WXy74agB6iyZc",
  "key42": "2hZUjRwhDvy5WAyognJHxLRGYA2HYkcBcsKufGzXB2qGJPKSp3psCbEUcLamxcY9JPTFvCYknVRgPBjcHQQ95u2g"
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
