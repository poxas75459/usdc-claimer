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
    "5ihWvtXfX3uW59DChccNh1SjUF2Pohy1YkqcmmaUsug7RkdoQjSLS5to5GvzFRbDFLuWrNxKKy3L64D3XwtZ7UvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RP3CsHBA2M1bs8n6uKqRsh44RDeVFrYu6dVFsvFidCPRFtn7SJrFqysf3NnWLmbuxGfbVLVfCVhSCtwiaAnU6uC",
  "key1": "5d9Miho2mDg4q1h5ms6RHXpCiJrfpzSFGwT4E9mExxVp5XL8WojLUFEo1ERtNwG3pzBLp5xHrSLfe1n6LbaZKap1",
  "key2": "WwaWyBmTpprJRm3ueWbrzFERWogmiZ3NWWynDeXRuAAisHuLxLWrHLqeZBPqae9mc8qC2bUoqoN4pxziTiQ4LFB",
  "key3": "4zNhfNpWghNHyeqUmSCDiPu4iK4saUqpT89MzMQznmgKPBhYSTqhjoegz7YvwFgsfVi9f6nWEsAoP37YEqR2p8mx",
  "key4": "2fDBCJzDuQoYgTrZBuUQ5BsXMtZEgm68rgPxgvuRhmBx37U17RdeU55MQtXysihGTZsB4erboLCFq8UYWeDv7o2u",
  "key5": "3jpWxMGXnvqiUtqwqrtk1c7ECCdoP2wnu9mS3bsMyVhuJuV9NwRbnui6MVeDa6VbXeSq4mmtxiJZtdCANNA8pF6k",
  "key6": "3i9my5zigZiYVLPUvH3FiSFfQWdjegS54YW8wQZxjwHcUwKeL5n4iQ9yTQt7i43E54JkTMt6vdT21CTUDxFvZp2n",
  "key7": "5hQ4vYFapMUHtHZNKigSTiWVByLxAfuhr4b8aUjf2cYAMoDik9fA26PWAA7YjtPh6huDjQgdGdk49FmwKywNyRJC",
  "key8": "5gUHHKKetgWHeAUUymepmdVMCZECEaMgGooHVH2iDZQNeaBkqJPQTZV3zGSkU7a1vfENtrgXEit92Eyft1D53xq",
  "key9": "3xa9q2kz1vE7cTdXiGXBcbVzZmc5U1wXwL18LXuCAn6bWcLKvdPEoESqLZJSZcBn3jKwUNckWniHvM31Bnk2NULu",
  "key10": "348ZDLQ9iRSBVear5oNVWeFTcvbL5yUwmZmJ8rfVnNvkkXfYWMJzgyJAiatKS9TBzHY2cV1N71oCLrp9Yra26ibL",
  "key11": "59n5AcvJobVE2RZqWSkLNyg87pB4eCjm5StFWjKUuB8qxS7ctscU79M7hqTq1SvSK3hNhZ8swk7ZygRRAtskjcLZ",
  "key12": "4P1kaySLGGKM1eawdYNU9JetEzMCYW2Zbcqq7AmB1JKHEMmJW6stjem22P6EgXz4xmDfXrSMS13m5VceChXZhwJD",
  "key13": "3kmjJEiEwKAaNN64iGnzjxNaBqhua46wE6PGXbzWTqMQK7QgYTkQL4sGgFbNcwfEuKKGxcsbJvFmvYRfbXN1rYP9",
  "key14": "2swUGrPjj5JVU9qjed4JEWZERxWTwZcD6Rod8soA7eSuzNkeoPvE4WcH7sanQs3L8DKMoKo7XRZp2MrSCzAe51sR",
  "key15": "2gFrQ4rqRkUnSWMr8zXULtJpYc6twsbcDNmdHVrq4Lpb4rYftfYioXxxTeNwC5PmPNs3FE65aRYHG9MwXokLpX11",
  "key16": "ZsbbyJc5vUFno3ZNTHHjj7Akz8zd8zTaRoePegsdaGX2rEEZvvDEsCn438ws5ZNn24iP2cwcFLYpo3stzGCU2Rw",
  "key17": "2EDuSAqcVF2ZTdTkKSmpoR4fcog3ZdjGPPnNKTLFERd3YiceT538Cm1N4M6AGLvK9dtpQdvPHdzp451kWKwzPZq3",
  "key18": "4f3PjGfNNEmc1LCnPuxmdPaENFMyCHNekYgFDETyTvFjJ5VVhtzzni3qQddib1vwvoEVKoaEhXorVtf6KkY3aXwv",
  "key19": "xpY4S6fezpEk5buUnMM3WLzRhj5jQr6k9Ysy24xksoxDVsqZDLGwcWqZXty3ahYQ1KkjXdnpinDTBYZfdTUnwL6",
  "key20": "3tCQsWrYpaRGtvh818cNfGvx3GqH1tYFnggWi9fTh1TP54qvYdApgpZD8C4nyRtyKYLxGLZGmUH7abKg1AnPcQqx",
  "key21": "3rvmoqxYfn97fK5FwrvArnLPuXLEX7RivDiMEzkw6CCncAzGpRXEZ4N4v7nBLYkChtgScCtuJ1C6vjfEqmHW4Wzu",
  "key22": "632UABYUE2Fdwab2jqe63UeNUZmP3xVjXpQs5GgCYLzsB8fsrL5SJUsoY1eY3X7xdXWRFNJgPZaYPbnedqfVfaMb",
  "key23": "5UshksDfig7cZqZkeuGzbgHiz4QeVDLSiJri8HY1GpeXT5FcNyxZtWa7hwUicA97LZ6Wuzwx6cs1PW2PKaNGtWfP",
  "key24": "4LdzdVgDgkdqgTzKfGtdTErZr5jo9G2aSs1KmRqeciyVu5g3yfcufW6DwfoefGf7r9Nf7cug4YHe3yfjQfR5mfzA",
  "key25": "fHxeET6Gyqah3Mi7a2dFX5C7ZicKqk2TCSYuF9wxorR3YWNLBBSMq3ofZ7w8umWEKe52TZ1wQ6UgdcFjUJXGvWY",
  "key26": "ugF3QyrSNoxv1oeTnuwbmANQpe4yaXRX9oawSpbv2hg2WoRHdE1nnpYkd278EbPGz42karB3D4ZxMF8oMj154Yy",
  "key27": "3r1Z7LQgPCZHPeUC8C6WYBFcQGKYs7CqE29fiXKAh84EUntzyMAsiYq9K9JrbyCQx9ygZzGyTyDh7kE2u9KC5GBi",
  "key28": "2pLaSh9ZXNLsPfC1KcHXVpeiiewzfLZi1V9kVMvAgJ5WD8hQU3c1MhHxPateo9pgBgpSBxi8tooVcJEoMiF6aiRR",
  "key29": "3Nfuzb5Q26xPHaThUqcbNbbKVdkfDwYw6PFaacFb2af1ddrrMq27P2MyHBYkZGeaykhJ5prMrRYqu9eMUuxEQpUH",
  "key30": "2qF9KW1hqiuPawTMXrmX969sXmdYEwGRKeEAddNsNfd6eYdugwQmPypotyW1ZgYwrJo5HedUaVZUaug5sN1jLsjf",
  "key31": "39qZqAY6ZN7rvvJRFPRUDPKpcPKsMiXqTz2EjXjYbtCbbNbNuGLLPLCR6GVr1MYX9EzUzJjGAioLNCiVcHxSrHvL",
  "key32": "2cR8aGpQuafRfxghJ6vzG3r9oEdYaPbisqsS4zFcdRAkqsFR5RmVM1yZfG1cuTGqHzaU51udhaMnJHyV4kboHnst",
  "key33": "uU41SXCtNzj8vr4pi2VK6vW7DGh7uuwFyQEqbZKvuqUWZAPUHxNX9pHiupAgTfR4DbPiFoxVqBkmMZTEs6Yx1qe",
  "key34": "4PvomQKZ7XjaLfGGp2MfS6EJwu5shfKJNKT6mXj1mdAekY3NCj58uo1HHxvnLqGt33SghsECcdskLREKccaAG2XF",
  "key35": "4MxP5VMAmLLkUThYm5HZ49ZatAUrGasoR3PkaQBDd4Eje413rUSzt8tCrNV1XgqfUPTEHjfMu3JUQdexEktrkSKn",
  "key36": "2vMq2fQrn4Wqjxgt9mfkKG9RwaHEa9Hbdgi8N13LtNQE3WJ1dQagW1rgsRJjwrW6aUEa81PVo1MUE8vBk88fq1NT",
  "key37": "4kXxrXMRTBVSQZNUq1L6xizRArWFf94NmVwsp1dxcAev9BrouQk13sZJ2C4Fv78fwVHhGTK2Soq4KTEsL8KGru4R",
  "key38": "j3VGBAeq8UqEd9EodQxSEQmoGihWHw1R2AsNZCEdCL94Nmikx9qDoxPUkihXNemsApBRLuvKwjtAJBqnw2oKZMT",
  "key39": "T3zqUBtu8Ea4xZa8ysst6KbGnRcLA6NLoCk7D8y9K8cRHjotny1Ur1W9mv8mZxduBYDA5MqsSXCQvo4pKBWzjAy",
  "key40": "2miGSsgNfEe3NwDNquNEMKNjrsgpStKb3rKZ4ygPZN8TkKuC52jaurCpn7dGeidSSLzWXMZmJeAA2T5XLFWW7KXS",
  "key41": "9mMWR9tbFc49q6n6MohFdcJ7nsHEpDVhbBgd44pk8XabNwr8smEPa5H49EhBYRvjt38rbvQGbohYK5Q3PEYx12q",
  "key42": "zT6bSyajQsJ5vsZCLsc4fqRtE87rLX59EgUeC24wiJQoGVYu3RbdjUizeaZqZ7untmxm9kSKLiY3yWZhVJcLjxw",
  "key43": "4Wj1WV23rfN4W6TiNBk99RfuFeXB6uYcCNsaYCaTuUdbG99KmCwjizo1Yhf6tM9gfnNPzGVwmzpnQCYASnUtzuzX",
  "key44": "7mMUTMdSmJ2n121siZijTKDsRK73zEhEM6DBUfJu3AwyQzme7Vtj3mzKhhvHYyPfXdKXoqLC6cvejdzayJeb6LA"
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
