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
    "4FKdHZeUwqzxAyhgJqWiJTDX53Fq5FccpnbPxsnBDAscUX5anzgypMVoGzyBsTQeCFUGdr2ijBXkBzA3qWzaJN6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xU5pNph5TVZpz83fFQvk7tNjxGVcwM3cTzMVrhXer6D3jgwLXc8JXU32T8JCMyB9orQwGrmZMMSGnk6CvVun4jC",
  "key1": "4Mxw9n558afNY5qSbD3sPgjcKnPmp7nVjeGJs4ADD2D72aM3ppMu1H71qiKrBzUFg9HVApKtzBAAV4rKYrRYQiTX",
  "key2": "5W6GsqiJHQcUoFvWnzxNsTDtx3T2oV17wg8SArESNVas34JAXKimfbirun4P8gw4xz4rVSCjXMXHasGaGdoebQmD",
  "key3": "3i5pSyP4WiJumNvaM45kG9EDyBg9HAvFQRhspx6yN3sStxpuM9Ey1kCHDcG34fqzyW2bPCAyPgLydaqm4SXWTXgY",
  "key4": "5XYvy4dyHXoTde93HeKvaDeYs2DBmaET7D2p8PcuFuSDxHDxuoubogrhTtfjiBF5nNGZH6M4BJKPsZUgxRq4p9Zk",
  "key5": "5Y55QZyLtxUsgQYoCZQki6Ynn5WVrhF5swmxYFJwLsT8DgMygmG11QEWjThafa2GBJG8ihiYyvrsajtsqC7ouTvD",
  "key6": "2fppy69DRve8YNp2uWuc2jqMnUiZfGFFomopKDhntQQ3xGKq9DdtCUb8heyb4qbw3DfWoYMSx2oAR36ps492gTTc",
  "key7": "65BQnDMDuDrvrUkx5bRC4uVDxA3fWVMw5qGuwCb3WYiNL9tXmQmPuX6ZwWm47k6igADnAWzwcFk7duVy8VVx1fq4",
  "key8": "9io49ZGGrumq3hmC8HE9G5Z6oNXr4yL487Bp9vuuVvdcPgwX5nT3vPawhtFhKTVQZYHcfq2WtLDkscfZ5kbuxHb",
  "key9": "2i4EGhWUuLvWHqejnAvK8Fa6JVWNeiDhXrmfaJ9iguFmzD6NKvCZpaQ2t1KHVzWaoJJwNXEAiPh9JHFjLc1M2G8Q",
  "key10": "73KHnA4tEPn17hffZhejia7ppKa7FKPrJXUEUqbepqyZsWXuYEwW2Qkbkr3tSPowsajGgF92sXQ2NrMRpY7njte",
  "key11": "4qqSvh85Cnf3KmqoEKRfLtNrDnzEN1SLyPfeHBFSapu4cQoGniJjBEAUgsnFUgYKGgyx2XmQzw288u63BEepb23b",
  "key12": "2iAdASQ5mw8FUtBhvZEU1u961PrrTHF37mtAfGnDLjKdvn3QEqzuDzq7EBGg3ifTpLeyWEZfwH2cugLLhgBw9kjZ",
  "key13": "2i1Aj8DVEDQruiLAS86GJiLMPYx1M1C3uyushhyrze8cDizK7MQ2KnEogomBdw1VfxzaGoJ4kBMoqw3jFUBtpotj",
  "key14": "5hAcm3a85TwXxj8T9zrNGPgq3j4x9CsNuZp9pAQ2hQGGLLowprAgyeEsUqmsREiDZwvGPUvdHjKpvn2DCH4LnkNp",
  "key15": "4WdLFuZmbwSD4DRgVaBpNhzVHQU9ehJDNEyXopiZd5sXWUdYBg3AT2iAfmmUMaXy5FbYs1akUKJXGPi3qUPu9o1U",
  "key16": "52gJ7hKVWGCfE1JjRczV8eYPMDpBNPA1QCsUdHBtqizKR7PBA5CivHL6Gkto2PzEqZtVoCWJG1EiyRHhk9rXerzJ",
  "key17": "3kxMnPkj53aAFHp9gkaTEBMUem11ConVvDmama9Zj4T8YbcUwSBGCQ7PZsuWPg9cNqCPsEKTUavZraSCrhfqELVt",
  "key18": "YJvVdJgNtG9wLuVC5x27KFbk2tYPQrdU3suPi21mkCHuQ5tZZhDfSJzcaj4m6XaV9Tvc3gcL7cz8WqHSUFccbio",
  "key19": "4jFe5NF6etr8GxApjBYKTe5WnG3wJdm4W1GUQ1gctGrn1cPk2KaR5UcjGao8b21WbgX7gySnNmU6seqPpzDDQhtJ",
  "key20": "3TYxkZbWwKQN3JEVquprdjqyzu6kAygGjK5jyHxgCCCDMH4BDjiZrVfCnnU9wo6Pi9MoW7F1sZ8fo9NL2gmSjeqU",
  "key21": "3iqNqt7wuyGGnHUNiGWB6vrG75CQMYu1N5orGbwq13UnMs8UGRMp3tikAzYPHcQKZqS74qvjg4FKuq6CgFGf9En9",
  "key22": "YdcB3UP8QMkvJN9uaweL7vZwwADmbJgcVRAfqmgEc6AZ3VvH3JdwxEhzJNsWvu5PgEQRbkz6M1fdZMFP3k64cbm",
  "key23": "22RfZej26mz2hRkDP9hTdJvgtGG48THJGT1H6sWonYupLH26S5yfeix7s7SMbhGdJpsdqSGpdsQW9bVsLsyJ2Zu5",
  "key24": "2TH4uaiyHgomoBd62qbozqFxHyAabjhiZwv4X5pv72BJ9RPhoBAbXA2bHWqiEXUXp8ymFg9jwdo6b2N1LmZhayEu",
  "key25": "GcYaMwLvrjERuvPnjzGZXjozhYUMFfQr9s2PZ3VvEbasRwNJr63LQtsb5wdervygrFKXtXeeURdxkHwZKN4rPku",
  "key26": "58gEGip6s3TLpgrvgwMLuasx8PKaWpCVFvB9twgjpvviSEx6ARQkkwxcZJ7J6a79aTrBMoxVp6zeT9Q4o9VqHLri",
  "key27": "K2uJba2iDHYpbzwuUCbRzDFLjDfjWC2iV3UEtH2pKNpJGKiCXKWdmJ5prvDo2Xk3Yb9czD5BLHhYmwCDoD5Rktc",
  "key28": "22aAcXcLrxGU89FUHvLfGK9KLAnP6LJQ7SQSbQ3cPSzkFdFFm29F96WtnuihXxf2PKZwrQ2tJsVwyVzzV6bYPjYR",
  "key29": "5jHnMfKCeEDA369c9g736tTKVPBT2ejAdiUCrG2WTFmNHv38unWd8T1bb5n1Ecwk1ojPG53RD5929L2xPdW47tGU",
  "key30": "eM9eznv6zPjTP2JzFFEGZ4xs1xnSXYSCetjBfE43MXS5futnusxT66rw1SYu4Lm8SAPpPbTu4DoyqYso73JvF2J",
  "key31": "5uuyKV2E1et2v1pK2g7MUnzq4vfz6JYjjSSbeEp6GuLYGDXEU6VFrQcCNrh3nNrsUq1bYR27dQnrPRB5oh6Txiz6",
  "key32": "4PQGKfDLjgdN3JDgK6ZG5K4owVTQcq6gsq1zftLVaoy8m7YU9cvXyEsaRXrxUp5ZZQe1sZdU9jiZAxYydv5DPKfs",
  "key33": "3htQF6WcyXNVTMBpoLk8phqqYgwRsLuzc1rhqrgVRNpugcaaUf1rzQ54qgHAt8pixGYjzWMPSBG2Sm9aerrb8a8n",
  "key34": "5eqq9hkpJG924gDWPpcpqcNCCwaLyP5RNE64wsDyqK3zbTZ6PGabjjZSmV2RkE9TnPFsU8vskuG25Hi2mXvBcUjn",
  "key35": "3Gdxjept4givDVzKhKU6wUTvUqLsXuNcYs4iyvqqDDghiMy9CbfGTjX5xmoWbhGhgDY6kL5mgvFH6zWwue7Fb7Nv",
  "key36": "sPs8ARu75YLiTNGPuJ8gaaTor2z1K6ETZN7SY7kNr57Lnq3jwCcxUP6nMm5vvy744bVqBejzccGuw3YpqP2hq6e",
  "key37": "mn6x8diqf3gdm2BMRvdrsRPqMhG8BdGGUbfpjuPgF1se8HaPNd3R1Ut45Mw7kcue8cbNpnpkHBjJWuPCk1R9KM2",
  "key38": "2qQ6drKZ9VQ7stp5s23aic61Xt5CGkNBafmryKZAzLKMtRY3WenA2YQBPEiYnF8MfBiok13UuZUpzMVod1m5JeiM"
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
