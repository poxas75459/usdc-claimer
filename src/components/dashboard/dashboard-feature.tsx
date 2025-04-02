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
    "5jWmMcvh8oMKRyvDZRy2UidTNXbV2NGE8eSMDYdT5RSJCeHHjvHyobrUX8RxHynjRwbVV5ixepwrBAWAaW76FmEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hvNfahtUyMN4i25Yh7A4BDGPpchhEX7d3LmfF7AiA6yBch98s96eGhvExrAMW6tTYfHwvdcYAVXuLm6VLDpFAhr",
  "key1": "5Ek91Vw3HAkfUS73TKpMNKpC4YPZLLomVSJbRph8aJtts2y7oiUkfW8QjCMfZMiYq6F8T2mP6pzbFhtT8uLX36yu",
  "key2": "2ciBoW3Ry1J8aHaXbp15q9ZZL2uTDK3SEKhJJRkwoc6hkeKMvFerpKRspiibN5X4nT4Tbk147hdQVrQNC4ApDHVr",
  "key3": "5dLJckhtv7FzYEn9gpHNNwBdEgjuwoTyqfoekVo5k8FQbdFWRdcnHW9CEqvPyRNX555KZocx3sSgEGy8jbt3213V",
  "key4": "3PnG6pzF61Vdnzss2BLZ22Hywho1nRYNBijEtKaV496ChG6ewSoKKTWyY9w2zfZYPpMqzSoqpKDvZ9Y7s2icLYiA",
  "key5": "5KgMYwK6NgdEPU58ks9STgkma7u5KcLsdMgd5V1QKfBdiz1nZHSyg4uowo6MfiQ4HJf5bt4cJ7px1oBWBheoiUJX",
  "key6": "UZdrJoGPjdcqwJGo5vpVWYKfUZrkLLqrEEdQABFxt3whUUsQoqQVEYWcn12a63SKGsNxqKjbVtpWbggCZNMpmV7",
  "key7": "5eALhWUFa99xUzQRhhN7nar95z2YWQduXBJ1TiSaAzQQpsyKZHYoBeVh3Anja59iY6bMg1rM4GYfurodKEKXpyj9",
  "key8": "vUm5K8nLbEJdpmF5dptNGT81ivcWQwyNhpZY8AC6LvFemPgJaiFwYtgijYkmBz3NDCKJ3ej2WBUjgsTQARAKQKu",
  "key9": "3bMU8r9NV8dbWeKPpTWg7YFwAWbV3YqDv5iTMi9kTwzKp9eT2cU6qvTYNc4rNHe8uqDqipdM3mK6URnDGt5FGbbs",
  "key10": "5rQ4a6jen3Q3nmbkZ2oth1zVTYSccitXfjZX6V3BhCdRacCBcvCrgscySV3pZdNgkSQKeA7JvpM1kBNtGSkV8AML",
  "key11": "3FvMJwh2Ub7qEo4wd7nLYUarZeRxM7h4NsKN4tmk6v9f4iKrNaFmEs2ucAuAbp599ocXWZ5DHidSoWxPx2DjY8YU",
  "key12": "2VY9c3M8AW9yhmfPHPZznHUmdVZshv6EGZBfuhWHkFMReVGbGsY81RSVsHNT871DVmZHeXNmtZ7f2fdNWkC458rd",
  "key13": "3pXWq4gpKL1Vd8wDMKaZiRkUrP9pirAzfYi9tRyrcCnkkG5igHSwTgpV9TUJ77GvyUTrR44mKWfmpSbQA7Cv1zmz",
  "key14": "4Fx2mS2uZY3qrgPxqTeesy7nc7u8YwB9X4k2V6ZWTJguE8P7gevxQQm173ZJ9C9gRxU7giC3A5UVt9KW8DrquHpT",
  "key15": "ZHoFPYZwCx85j2eWdEcx3oSNNJyakyGmdaBosu1bdcBKGxn9NQEa3Y6KcWTedqBscZBJzWZfMLTWerzRJaW938Q",
  "key16": "2zq1SoDbfpy75cYfEaboWGhRvUvKnzcN7xHrnD8LfGGqZZgatCinHBSSyvrunyrSpMTejyN1rEEKjU21i1p7J8cP",
  "key17": "5X1cV6LrXh12giujMfWnpzNRGN2MaFg5E6Z8ahTDaiC3AmaVXxk4MTbmf9sZAsyAyn6euz1zLhnzJMxLVzD2cUDq",
  "key18": "4sYmE9s5GJCUQMwbsoXMvPVX8C4yrkifWA9VS6v54tcenRGVvDEtTUqfAaHktHjyLpdPknipjphudaMStQ3zEGfX",
  "key19": "3EDajMoMKYnGZV8DoW71Bpa8NNhJMC1Rc3LtJxb7xkzQdPfCQuCHEFG1QqGjSLinYD8FnjBtResEaGjzHGRZehr",
  "key20": "2HCCJ31BRys5hvE8ieX2covNvpKjVsDS2orVxVkgWtJkLN8eYQ5vBy2844kM8tAASvEjiyyBzHbvemRcfnoYJ15g",
  "key21": "633NeUvcFdoHs2sZ1VGmgbXXWCWmwxqzZ6as6mLeXbg5WjeceVoLrUwnkPyxX5VoVknssGE7DJc8phpR1ngN5wBS",
  "key22": "2SUTchkW6DiqZtLNsrrA4SJeunK1UyeAGMb2Wn5LCSU1HVSuJBgMckNm3Jry9ZRv4mhTc4nzZR9MoUPpQTAnv8md",
  "key23": "5AFYVHS6zjcL1o7doMZKoisoM4GNbRmrY6e4KDyRBhRnrGdkkmYL3ixv4h3FoEULuC5t6adR3yneuDJpF1ie78eL",
  "key24": "2JpjaPH8nqr5p47LWz5Yw8tb8sqbNUzLniDVeYcAyk5HNp4b1sSUefAWshdRnDXnK633Ucz5oSHaFDPrMjTFNUwm",
  "key25": "5R2zwmejP2jaWS41TXSJyzJuLnoUQHT3oDKQtVT8e3v9hDgKgbShVkjrHD9PJXsRTGwwkiKUupt2EE4VQFaukw9D",
  "key26": "39z2cq6K12RuWHRZugdy3kqP28pM67g2RPBE3sVi7pEzx2zzFL5ikr7nk4cEGvU8xZSvTbf1Gg195f9hvrKmCFHg",
  "key27": "4pTnNLULYxxuTogLiayF1DRy4nakpQBWjTw2CCgfPyqXoPprCYNH4rMhwVCiLW8LKhwKeAW36k6BAd8kcDA9XRrA",
  "key28": "4bzwkrY3rR42m8ezdNexoVdTmRGRmLTvVCVZezB5WtynFdUeujdXmpAhXLrmi5WqKnSS8BQuLmQ7W8FZ2DAyNUBL",
  "key29": "61Vk88PoeTXUTDrjPC3AM38XnHBYoRC4923SggcWBvCFRr6YGNTWpHynJMixAaiMe6eXRR8vn15JhXP8WdaL3kF3",
  "key30": "2i9paXpRLUR3AsbHVFem7g6RSYq89PQrwoZiNWRoxq1mHHXvfq3Bye1QUnMnAGPysZgR3mRXABdZ6iME3MNzNLFT",
  "key31": "28ND7Ux2z7MWsmGX1XoVQfVxLCpt4rb8viorpzh6Jqhm4hgAEKSJLdibbVXDaQV2XKm9sEtkkxE8VC1ty6qZPa2d",
  "key32": "NCtP2dpGE1ASit2Mzjb1JU1RwBovFSer6EiYeY2G7q5NLmgSAD55RuytuPvbcDkyoFgipVtEr7PivUgDRfCJVGW",
  "key33": "3ecr95fMFJhAFScfn6me8uB1q4HcxC85hLDpFEn4QddcStW2KUZbPATJtSD165VBAuHafsTt6bZ6iwetBWEpQ83t",
  "key34": "33okUc75hz4U2jfAV1hiyKXD3CxWMvTBpY9H27vkJyrnKc31fiJagUqKNCWnBoRRUeAVsTUfzVvy6ssVb4WZDHUK",
  "key35": "4wvQx3ajNmws96eftkdiwYBzAEokVdM4Ci6BjKdg3Fk5i5Ve13LUPYehwSCHgERPjexwcHPwVKpcvJ8GV65Z2v7V",
  "key36": "3Y9RHcKTEiPC2SxySbGLktq5S6TxJiaHcqoj8YWLUsvEn2GPEMqKnVVaUhFGw1xJi83TM3PUnHPse3mYxKqwqYJJ",
  "key37": "4UMhwbNVc1q194ncgYrkmXEDaeDQL7Ahhii4zE6HAba6aEPc9DvzckJ9eybBznTq3qYuFgtzsjFxx281mMcZhrJs",
  "key38": "uMY3LMBPn2H1gjbnsnQRN9W1MGV5HwisGmBxbQiHEf369T1A2zbH8yRJEqCT3vYokD6yCW4cvxx4MoEat2AA1EA",
  "key39": "8YNU8CsirpXfXEFR7DpctjULx6FrSGEXbgN8e4GwukbEKkJvVf7cUtNz82iYSpvxBJFGwLRSYzLhUC5A3WqzJt9",
  "key40": "66ebJ355MXnxbF7WQojSezALgXxWCjsXSwtaVsGQ84Qm56PYRw5TxrStQaJvksdRfFbHmxhwRT9qe4onent5wug2",
  "key41": "3iSuMuWTyPkGPPscRMCL1EqTTSysuvMzPfy2borzq1LRnNi9WNucHSddd3NoNRCGvyXtuYRzKyb6NpceVkx2oc7R",
  "key42": "4ZXDXpCD5GbqHhoiseM72Rb8knC7iNrkCxxBGRtWd6nHbxaAxQTW7DXgbzvLLgCEnpjMKhy6MNofKcyodVLPzgpz",
  "key43": "3S9WsGUGhyLLqpYYeBnvRKQZfJPWawFW5pGubTziBxJrerkv3yjTWvr4J2pgXVuuzVXPPyWr6DL7VwbWeBA4b32F",
  "key44": "2cAtWBqYYkPdk1sW6jMNLPNV1FPVE7ze6S2r1oP5pUzPKL2ETPiTe7RwJHvsHCTWDeZ1wiRvtTzSsP2BzPsPLHd2",
  "key45": "4fM1H9jS3Qfa85R7487CnoDkvX7wqkVcx21MCyAoEBLCLtBpGrTZDJ5jsijv3fYhgwo9nNZzRKY2uhvfaYi61htU"
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
