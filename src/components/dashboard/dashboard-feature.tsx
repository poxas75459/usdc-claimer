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
    "5uWFBCXScbXbngA1Kt2G6oajDCmUhy5Bc7rUYMGD8c3fk3zAuF2DKd2yLrh76PPDmTZkGvmL8VW1Zkh4CDZ8nL1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Jt3QnnkXGyzhtDVar4AwbrMMh2qB7gHT8bbQeeRgYDzdaSVs5H341KuRJ8G8A1WcMGZQZmQHDXyhYxJoUn7ohm",
  "key1": "3zkHGWrdnWxPGwUwaWUDPQm1JV3Cyk3WopD8q1mjxoMzvSBC9eZBfr3JGvSx4fcuXWuaEiyMSS2ak5ajqbqaiCxz",
  "key2": "5PaPiDZLpEUway5ZcBNRG9nH8NmbcYc6qRmr1suJyGVLRnAsSFGY8PKt6UreKhkibVtzBucZEweW4R9iVHzzBJJe",
  "key3": "5sqmTkdjyvWfqcXLa3XZG618nuXNmLwUjGpYsLZeQ7pQDTfNSKBZxsXzvcJe9HxVt8DomD3rBF5CCPRsgCMRgq7G",
  "key4": "4nD2AjfwcMCYGwMXaVqYcbjX55j6aeZcHvivvufsY6rQYZgBx5JCZdV6piJvDka4BJEZ6gW2oG2D8mbqNgUYE2iC",
  "key5": "RB3jDvRoHz9WaptPXbUUp5iNcssV3GHRXLxcvEgvieJ64kx42PBD5gq9XfVC4535yT88WfdTUCHT4J1scKwTRTu",
  "key6": "5LdoPk1xLcERZoDZDQ5pxyMLbNrBTtQWQMyTxRMaMMCaeBREn3ND4Jng6DivYc763HV3o9pqnVdZbm7HWbXvSyPW",
  "key7": "4bboBKzLDEPN23252zE22N6S29hLwpGb1KiYymKSRE8jJyg6uXVoZKYCPQSaGJmG1QDGPvdXdNAxVBSUFP2S7eKq",
  "key8": "3W6RfycnQkq5ckhAiQHhj16PRrzzfrQzwCpHCryrUU57w7KooV7dc6g9Hz5EEukX3bbXB4LKsDnUQJtNDe55gDQf",
  "key9": "2xpGaUdtequSuwZEP41CRdt2MJkX9Ju9bna6nJhKVEgBRqb1ebohW3CUmExgWFEjQ2TpLBEBMo24SZcdCoHw3Y8M",
  "key10": "241w7ZwYfZS6DzbaX3WV5xTpjfnE53f3yduZ8gxkzAMPAEa2zEey2db7Sdr9k87aKn9ZiopUQo952XL1YipKKzwU",
  "key11": "3heoF6xenaYV36ev7AqEWYPCfW6NTP5FiTMZTZQz62goLREin5NKENidz8SBuKZzv776DWvuhB12f6sTHVCnQ2Up",
  "key12": "3mD3hSdDe58vzjBZtv2Tkc6JmaJx9tBV1ditdcFb5Vt37gdmfMEFgTQ54wqU9GySPsF4KfjvKLYL7jgUowqNUZQk",
  "key13": "4GhHozynv2z9g4EjTA62N43W7JUYSzsADWjQxmUxN5LPqDfzdxWPPyEfaeFWoMhzYXYoZ5E9uzr4eYKchpmHEsBq",
  "key14": "4LX2WmznyAmgzQxeripBg19AGvWTsuTWbiHGcdEmNbFurAefLsAme6sxCZDYUFPXoE2nk5droCUGMEjjTJGKDh66",
  "key15": "5Au24cq3Yx65Gcm21YmtYN2RjiwUgyDFG7hzqKQ3q18W36uPajX8JnVJgkoJyLCiScFhd28qns7Did4Sz7gCxnAP",
  "key16": "3DByPghuHuxppmiSHgzgSmtfV25xMXNPLs6j4NuLXg68HZpcmyrS7MSkhFXDSrLGT1MTrvw8dFUjG1438MjoUKYz",
  "key17": "4TraP5L1pdMfKMmNRNWxdt3dT1zdyapHmmg9K2ER9ZG9Dv1FvEJSqiZGeQK638jiY7178YQyz1jpcSypiah5PsyD",
  "key18": "5Um4VwnkDJMVaKe8ZeYs8W2MGoS5TAPHwa5bRuVBAyjsxi9pm4jbvZnToX34diEWQrcJnCRMYhu3TRy3Ta4i4cE1",
  "key19": "55uXvaLXzWXx8zrAp1AKzoraM9yx6HVopfbVr9bzMDPaF6kStsVSF3GwVHRARXzeaCYL2zPafKLaAFW48K1vt882",
  "key20": "42hRfsPMWAUAq7hNFgirw9wqrujk66pv9TxWf6feuq2hbnmBR7x4jRgagdhKvHLfkwxATo347fWRUErraU4vWvaT",
  "key21": "4WHW6o5BMYTFBLQpFPaYghRU61gxARMTg5DLW6tZitPFKT4DjMLiJoeGvpfrRuGVNDucZKrmEaKQGoDhTtbJPLaY",
  "key22": "5V8jgt5Y4ahPtUFodQUWg1iq1PpzK6ZPeLrtCKRBytg7b4Pykf82Qb2BNJZAscxq61Ch4k8yciCT3KsDBiEpwZch",
  "key23": "2ZbVuSkx7dcrZQSMSSSrmbX8yJxQasHjzV6f1yCXHcCVfwFxb91Dx4VyB6yqk9fYHVkma72V71sLYUYs83AjgMbA",
  "key24": "5vsgZCzeqLzGfM1ZwJFeDzP7sPzxzXf4VzfSMGHYPFqP24AoLxJuFuSuYDLZmzMoTwt9pS7g8C6yTEiUTf5E6xks",
  "key25": "2kAiKdcBGMULG7JmEjWrcTXpQwGuVhFoxgCShWLrUv65dqfvTALERwfp8y8gJd8MhU9n25UBxJeCGGxDBBcMWNho",
  "key26": "3TPkNtdm1FqHGtPaYchKBaQk23CMb2rTw9PTuJ4rtsdw2dt6PAgZ99QhnwG4zgTLtdXuSZrTiXveDCcT67HriYGQ",
  "key27": "3eHzaHewzs8s5kLE2xrrnqvspd8RxG3Ue1EasWKkZ2uafeB865M1NdbFH4Z9UEzxigJAuoT9YQXE1gj9UqreWk5m",
  "key28": "43Mhe3Mm3YsXFKZRYaGsAWvfEVyZDtnmmKtc7Xjxcfd3Lw83Pkg4uSQA52xwFbRyQuNN8VUJHEEYr8Bss2c6soCf",
  "key29": "43PEZzJBmRxhq7dt5LipDh5XtGQ27CwHkKgRd55PvEKdhXK3vvtPeUGpAtAKFy3qBBFCKtKRLkaP6uxHrVzs51AK",
  "key30": "skDM2TdvNkk6Xy8ZcC64KTFeJNDsVWvFj987ztnJh4VePyZPW3JfPDUUYAyU582HeTBzoteYjwVDEtEPogvvA74",
  "key31": "2rHj3uVy2zbhLFnrjYRh1rEpcMiUscRmxfkzm3orvnxHFBycffRp1oux9o8u3gMCVkh2c1UgGc6FxSPAFVUYFNrw",
  "key32": "3xCoL9nFLw8wUq4qPs9a4QRrpMFshX94gkBBgTn45Y2bdoiMvCWr2FuHuXe4ZaYuFXimTxVDoq9MKvraHYBeqtRp",
  "key33": "3YTUZwoeSTHxG5C1ZPBDY8gvsx4X4bMZLMgi4FFuKxbC4QDDbRrrAEJCx8jwBrwa51EcFGeWCyTGrRZE7ZBqhTMD",
  "key34": "62c9HPKLCUHNbSzeERFCibAGdeUncxzwh54g1MvWm6JvgVMQsnjd1gAmcJCWubE33PsBNep9X31gRMG2eqSfVEYC",
  "key35": "2zq4xbw3vNkiKjVrcPBK5k4caaWA4ToL518ELDMZoWEHwzekKdrorTw7yssnwFhgy6gx5UYFKjLuZFXyBjjSRpUf"
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
