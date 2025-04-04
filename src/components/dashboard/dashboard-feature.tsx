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
    "67e15juB3TM94gGD1EyNEnyqMysgfUv8xVez6JtY5GS5P4m9j6aAo9WUmA7oaTNaa31Ri3n8quBcRUeAh58tjqbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YQDaAhUaguBFqQ2NSHrj8U3vEhmQxN8dRi1fF7VsfNT1zfEdVv4Aos6TRWaExPWpZhuAP6sN7hij98QU7vYVCUa",
  "key1": "4Rd9F9FAfivXnFZgReqeHvADrwLcLjzqA1MyxUtRH81ZDHBMaS9xviSiJ9NF5bNLC5rDpAZXQAbPBfHjmpY8QZcx",
  "key2": "3665frFZ61PJRRGXzPgiwXi77GqvBdPMhogtc5zt1Q8NWuv93pRUQ2p8S8Kygsf1Jij1MWUwGLipLNwXqoDwJDqG",
  "key3": "XaVL6bRGqMBsjHwFESeaL5XyXLpKKzucsEbeYsy8ht5Spe5p7mfcHD7FUKAndrsAPQieqmN964q4SfinQCt2g2k",
  "key4": "3P9wiZeEzHLJQaL8AJLkxppHrtLtpzESDCiQ17tZ43dh1EbpJgwrA37Ytezssb1AwsMy3v8cnDv1k3fbbVxQoeqN",
  "key5": "2vMh5RNxLk1XE2URhNg9FKTxPyoFc3bBvF8GSGmdUjbQMCgBZG5aF7fZ511jUk6QLsK2ppqDaxG8P82azpvHCcvu",
  "key6": "5ZHh2tmPACNZpeqGTEub79N69VdvbbyTnMm88K2J3MUZqzGViyUhgPHRtMZgbCSYe3BBh76D9V1uG9zd1vJnibUa",
  "key7": "2fsV2ZdAMLVJjJ1emjVP94HtT6bQdjMb3EssCfGnCkVJgHom14CpntGankVn6Yg177bhK9SKfvkq3iyGYXHjrAPk",
  "key8": "n1MPZSJFRbVGctYBmdbNKVgVomt91PHznEaT2kGYLNfamzjtm94DwaQxMiKPL6Rx2KG4CSUv2YaM2cXR1x2om4X",
  "key9": "S8W2SZGDuquRjroSuXKngZMYeKj1RSXL67yxUSF28oFYM9MG8X5pWupCskFGepAAv3EhWnXiueEKnRpXGQzunAt",
  "key10": "2T5L3fgTtt3iYyzBqmsNhjTH5cK1b3qdoDLqRePkKJa1BwcZ8sUKgrptcnSMvuGA61TgtJaJjCUADMcsHASPgajt",
  "key11": "5Gh6uwu8XSkKN217PB73SQVjT7am2mQ8iePwHkwygTsGz1vGftNQxJmAJ3frNxxwEHyFJttnAie6kvYaQSWZrmmt",
  "key12": "LC6GxXajvn4bAoY4Vq2x5CLLAb8z4bRkeErE3kn9mY5vY8EXukTv732s9kCb8UQ1ePwWu4gUAE1Z7Ken24LM2QH",
  "key13": "3fcwVwqzyBWGSDPKz1msLu9GDFiteEbV4ycDKBSMJwMPCsG9QUrzYAAwm3QXz5pQWCwxMhf7tRP7LiaFfcEcBvvg",
  "key14": "Z9vstjDPx44bP8Lt1FKACEbD5vTuVcMRK7pkpFnRSTpy1SdTPVH8BppA91FrackA8QVP4E8htzUM74fzrdPDuaN",
  "key15": "24rgJdEmzJRTMjWG1iy1vpnsKKRApRS6ZJs3vivcxmzaDrmc6t4W83jFL3nAksutwxvN13KJAMPcc8yDU67wtFyW",
  "key16": "3QYsKXruPAzPSJ1pn85JPkTzdHM5LTcGaivTkyYCRX9z2n2Vp9pxozcwSSRb9oACzjbVFhiJ6f8MLc77kM7nNGcL",
  "key17": "3QJEGTeyP3XPQHR13GB8W5Z7FuHPkQCjSQnDquHCMzwtYAjZWbnjgHiUsQ4nV8gLrUMp9YNNUSvcH694iDUX3z9i",
  "key18": "2uvp7FCv3mLe7YvYg9F64nAc2Wg9n1nFRhZ3AqPGNUZeNFuE4fuNwx3bwwAQffsBjhRdH8EtXPzVuPfD46N6Q5TK",
  "key19": "3RLVjLPoDMceoCCWd9qc7JGQtCPL7rgUhBcJM6p369CbzBfvsxDb7UbnCedCw4NMPdRUxw7R6v9o6JHu2n9k9C4c",
  "key20": "bFXaEfJfhqGQYf7afC4NpJG8Vndqcwi614bQMLQfdGeu2AqMK174eErU6NP3MJj6YuFmExqE9JAdNCFCoY13a1t",
  "key21": "5gWXCr5qEeja6ZUL7KnVbrvDbcBJVe8i9WpgWfobqEH77K74ciFezk8utXpxPdF4ye9tPMNyDddjEpEHWax4ioLt",
  "key22": "4f5t39mznpE251jnuoJjUGvifxh244Viyd1M5YfBPxXJzHU9Z1askyJ1ddhDouAygjmV1XwPutgVkqXNzqEJJq2J",
  "key23": "5uSBnpQV6a4vCBytVVMkPW6qDe9FcayX4XDw77qoZmBasCXSnTe14MgeR7p8v3YyCrkhwERMkuj85BM6ueE5gue8",
  "key24": "VWTvdcmTefUQVfg9paTn1HU1oRbisNPdptXAmhTDEZ6mofHYqg5RMinHeDUkqGtBjFWaJUjwjyBWks7Epa6jTRC",
  "key25": "5QdedpcbEY5j5s9KRRoBPpqoTZHkmnqDumXm28hhCByDSBpSho3q2DgE7ShCn4C7PHcxHU729HxhBmjidjBvQoa7",
  "key26": "555wUiNGipi7A24hgeM7dQnxD1yY6tzSfayNt5e4EcKwWNdQEtwzpuKVrZ1DaqgZWGWE8t9VUh3BEUyG9HNbx5t6",
  "key27": "5UnomH4KWyXS13iBonihfTFDNLGcdmbVzjA3sy5b1Lxx6YtJirf7YrGoZpSgpxDB9bFgBo2V8W15DhAKsGXfR838",
  "key28": "3smNfBvnENtvcyUYV71uGEXXFSVZz97D9HgB7tukMH329nBwVeHRM2m1iaytyMFPD2L2t4hcizj8YiHJFcDUHPou",
  "key29": "5JV8axZoHhJhmrP47a2DEqhQcvRUpAwZzzaFMWA6ZqgS7ioU6zq2pRXR9GcApW78z2rC1qXC421UHpCwt9Eb23ii",
  "key30": "T8cAHrH6dYE2fns6iDdEcxJABfs3x8hDxEMkDG8AHffpV6Rxiu64Aab8TXyDh6Lk3vncLpEeAV1nuaehmQpGfC5",
  "key31": "3AZFp1DhxU9C89zz8BQBwjM2i3H51N35xJCYNJPEoMKgzoHfbFfkmCcXv22Xn9rTnLDab59BwZpEcvCckRjgU323",
  "key32": "5tEdvHZfdUfzp9AuSA7Yh3UmPAmKn1eqptybLsydeW8EhV8DF4V1ecn1gk1Fo4ZEmRjfk8PQ8epN2izTuN4jQMDc",
  "key33": "2W5FfJFpZHruvShXbDWs9xeGCUwH2nxSzZY49Bs1SV5cahntHZj5mBDH5T1bPU6cx3eGC45kKuLjkmqsVmiZBgvC",
  "key34": "9AeGZaLqQ3DwG7M8hdarTWKkhSJ78enFiJySrAX6yraqfnPTwiKwD1JU1BrfMCwsUMZoSiXRWyt3y9imT3wqKU3",
  "key35": "4DpsjsMDoa1onak8EMFcbhPJEEoE3rRbvStDzsfFPqKoQxY3PnLzPDdfboMRozjA62PQh2Yv2CZeyg5crWLRxoym",
  "key36": "5EMfD8ApN3zyjhmK7JtWxbpLUTn9dnE79A5VWcA5NoDWtwKyoQUZpfgPgSEcCbm3PwGXytbzfixxrgeuGiQpP2VG",
  "key37": "4ppACJosezTshihEK92xkyyqxrPH8P9VjZ7CSZgz6aPRNzy4y3qQWpmiCYQYfYevcTgeCtZeRtYf8rN2sjpwqjbn",
  "key38": "3RW1QUsnibtSsHzDNyi3kRZoc3r7f7qswcE62gBurEHjpxbSdTLtsZZH7yzhdZJntptfjSpF1GEKu3nsZ6zdoxes",
  "key39": "3x5DhcmEkyKtj9nFWtTf8e8gxkNzEgM3hFkZxHyjRPLLyYu4kkibY4tSfMg3CmSpVCScfS1u1HZmDTHdbC8DZJUH",
  "key40": "5kxPYv24H3AGNnCAYAborMBrFfi7NDAZmfa98RxfafXJ2Nykfb21oXXzbwKuDTQpC4H1nPStwKoHkemnBuRxKD9y",
  "key41": "2xkP1zKikjkJQstXTEZAim5EAquiuz8bpbyWi8h6nsmLAqziY3LYYDZwGEafvW8zdearMD78LwhAurCbpb1iY2vF"
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
