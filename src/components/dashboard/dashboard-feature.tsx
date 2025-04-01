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
    "675VkHYkb2b96vgt5fjszVvj51FcUqykeSh6y3GhGmsmVxbswSZwSE2sT3EhfJzvExPsW91ghdzTMbMFtxu2Y8MP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rEYLuaPRcsZvzQTRW8sUCAbCd9PSmT1SB27rcdsJkJjqLmDymCSaTERTcy1Z3dDdXAMK3k6UvVUMXgLuybHfnxu",
  "key1": "5rziqnwua9wSZsCbSNPRJoZAUHTji7uPFoRcsagDGeEW2nvDDFkavXdb6tDZ5Vr8zdxPT4sTRQebeuDALqDCEsgu",
  "key2": "5eFFtTuhtarXEKWDMexvBkd3TmgY5ZNmXZgUXqU3tnSyLWmqWEAKBr2YzC9n5GXGSbgCh18RNVa5Bvn7CeW5tUmi",
  "key3": "2wn2bno1XsarurT1HgAspi1mez4JanxBujgQt8F6N4y6zJbnVfRvX7tEJkKTk2f9askWAVbQrF1anVgwYoBbPft6",
  "key4": "5oeXD1LZfJ1PeoD95r1tUfpSeep8UZRkSy3NHwaSKKibGeF2hLjQxxmRH7T43uvBu8C6EFDsydwtrGc9saS1UWmD",
  "key5": "4mC4ysKTSzgkaFQF4WKZpiLoTAE3S9UtVpauK6rdQooWLF36qGGYTd61UA2MJemMcz8QuxzEWrtFwJfZr4eesxd5",
  "key6": "4TzfSiZmZWYzEdYPCGQNiYgPe1PdHExPbVZEjEr7SGNtuLUdCod8wgeyqis3Pk1q6Ywoxj1dFmndwqGPZSZ5k9jN",
  "key7": "56zSjP5QKUeuuaENgLZtzLRw8nH1jux6GDEGNkmH2p82MyLrekkDXV9FusXvwaFvDfLxQkHxvuGRDmxwC3bGdipG",
  "key8": "4YFpoe7CmmqyivVyatgfRMrWJjpfXeff6Axd2DWsArpfNbn16sapCxThPvsWY3NckzgEySNQ7UYQ9kn1CD8Cz53G",
  "key9": "1cfVGUtHN8HuBpiS7Y518wW9cRyDbv2wzoMiv6ZPUchqfR6vMhJAnXE6mYZDvxXapiW12hParCQBnL6W3B57hKe",
  "key10": "4x5Ztqbxbqb9YaNe7hV2vWSLgyxa5V6Ch6ZJxTpNNQFdfBhhDN6PBeyc3PZR3MJpQDLZ8szkog8W2Jkn6v8VATBz",
  "key11": "3TrXEBpBbAQix3qNLdekGqwKbj7j6Bbjx5ZsjEyyBwLF9TQXrME3SfvgDr8bYQ3L1WBSetFfrEiZM2or5ufBvKxD",
  "key12": "38vCSRiuLqR71yShEVTkxnxPZm7gozK5xqoSyT5WQg7httegRm1DNA9ZVYVsR5e9MabMEbQ7zZhXAj7gyQumSBwL",
  "key13": "WXcXM6QeXB69MoPZxduU4js8qGfrqm2ytPB42UJgg3E4q6aunVcmMVFWWbU7yQUqBx7T5WtdWg45U59cu6bVjty",
  "key14": "4b7DSCXgibpF5MmTB9aLJmVR6etjSMXy9z4E3eZL5nme1kpVbe4zcWnoL3icfyoLBcUGn7M3MzcPKCvfKLFK1oCe",
  "key15": "4rQTDnnULPLFmKnBS13jamFVGtQ7dTBhqGi78Cnjauf1bxkiT9Qfb31j4hU4iD7PXTWQs6MQvqtnN3GUnTGyFBR3",
  "key16": "3hRRJcUPGPp8CzA4BN6c2YphintaGX4UTiStN2461ARLhhLqRc9qHcmv7gBTNt4hUqvLPgkTDiBx7UF3WbLHWjCw",
  "key17": "4jnhFQetb7VcUQyLW9rL3L2HifFhtv3gmQSGjTNYqZppxeULyqRueu5WQLPLeXvcLNR1DtENThCFg1Ay9tZYanFg",
  "key18": "4fN8rs5Pe2u1ehM4Wny4CtJhVVfhovMifJaUwQLz74AEFzUban3ePJun3XJs8Fqqk5MAt7UT8QTwdNLaRjQgHKyW",
  "key19": "3L1hnd4qNjYtd1LeR7uqexee9iiYZMqCjikjFoempwmECBHbMiyW1ZMjT7gdPnmsT3dnhexsm8jBEhCycLoNDvHS",
  "key20": "5HbF26F64eEwX4gaBFBRF7BXHeNhnynTSw8bmasPjqB4ZNkntUVHU8ofpnZXCzxqjJegjQUv2jNcSkyude8cG49C",
  "key21": "4NucV5MX1THGFPz8LSzoaJBusBjVUF9mN4CkasY8TaZcjyJvwJT2Nh5PAikUX7pnAT9YALtEaHteWaonrZfCV5W9",
  "key22": "YxmVZxag2SN43mzvFKgbJmaPPHpz4xPzRPsRsWtFYrFfatMQW5aycoCk71RriCpGBmP6tV2vLg1aj81Z7CPxXG5",
  "key23": "294QhZaaM2eUdsxQBBLzaB4oYnxoGv6qnMsrXFD8hRy88Db2sd2qvAzBh7aLGuCGBUzF5nAckhW7gHnVtcfQVobB",
  "key24": "33q4XhWYwseeWfgvbN7QfFyLieAD3hyq768N2pSyufoL1gxyTSjasuSYySEKmr2Ya6D3LMM7RpAfBSLuzdgWBS37",
  "key25": "35xpwWbVvfpYgxHKJkcAF3pUuH5D1WL3QhxUsG77iNCtjPtwakT8Vqp1jk3xeqF8waN6qFcm11hqZjEhsit5jhd6",
  "key26": "wfXWPjnrvEEdYmXyF3szNaq6t8DyuL3k8o9hM29rR136ci2MJqAMKNp5dzUH469U3crtAhSqJJZgj5FU9ug2WcX",
  "key27": "22f5roiogpi6s4Nb7VRFJYqkCo1Uec7vL91YNLctwuoGhNCSoPiEBxMCUQHCko1pTqP13sW212sBiqCBQcqAVHXR",
  "key28": "3XJpHg3r1iTAVXiZBuAMMPLEEBEtn6fx9YqBiTjLqEPw3KquXMkJELqBLBvX8UrZKwa7Rqr1vzoxT88wpD7b8Rfy",
  "key29": "Vphjm5fCCvCGsovxqXNY92H25VbY8ZKwF8Sncq5HdrUD1HPSWF9nU93oBEWgy4Ad9jVSJfPtMgmHrbSNyKnSbYq",
  "key30": "37w7mTvyxrGqYnQ2PDSFcEn2hqXZyanfw84BsUwWVKfe4GgxreVATXBTDw74yW7jyp8pFSqFNPUv267Fo9imc9J7",
  "key31": "4rFFPFWMUs4mPLdS9VbVq26tSKVhf6J9FRron5eTUK4PxKx6Xoh1PvJNtdDYTNryZp3ofVZgDCXDyN5vHCRJNyqw",
  "key32": "4742tYsTJ14yg5pwsoxXwYMZzKWxZLwwkvJ6cMTQhZTKSPRzRpnrrL8xab8ucDB6C16qG5XC1oeQn4cRg1WkMcSB",
  "key33": "2npHk4rCyDwdUCFFpBCmM1PHZVrpHtrCrhPXxxofwBFiZh5oF5T9nPfzSjCEetfJG1Mr2q2eLJK7xTVzWVm69fWk",
  "key34": "51FSZSh6koMwQd1isRwbsZKyZWLFTYmeXE6Mavubr46YZZZvHxQPW8py1HP8MsMuGoRfC9phcmMNeyj53bWj4rnE",
  "key35": "RiEaikLfNY17jdeTfpk6HDroHBaQb6yBS9NL2QQHQE3oPT9PNF92V5Z2uYqoHkZpwb2ccF5Z6bUx8bFFrYDhDZD",
  "key36": "G4eVoLBLZnucFvEPx1nCaNc1RsHDSEeZnVjNnuXD82RF6yqhFZ2rMdhDFTG4mUmKtvHXCz4XLCyAkcg9ZcPcFRD",
  "key37": "3oioVGrxXGoEsctLqJWbLMH5RTLT8ZpuMwm7NXP9db5vfeJuff7xkhaCjJC8kwEfEFgnz5d8XJ59g6hsbxwGFiPM",
  "key38": "2YDSBbMX9N7LWQJdMEg1QnwmDQceQR2d7b4Hum6LEYtA6jUQLG3fraxydcEP2VyqcbYF8Xvj9aCmALDu3Z1oCuZk",
  "key39": "2HRKjPaWJSbsCh1kSSpJUJLU3oDMtqmtVm23a1R7uHTNnsWkTMKb64v1uotLFE82X3NmzcyXtyvYdwcZy9sYTQJx"
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
