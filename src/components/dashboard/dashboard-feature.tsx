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
    "5DBxiQAAw98QjHTaFQfiw2frm84ybkCB1xRtDYLMn59XXW6g7be2d1noJ3x12T2sycGB2pXJk3aQBBtg4w7JXE7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hdt92HnbAW8AfbztarynoUBnziZHgLivrNtFkRzzKBcVVoc8enbEtJYwrwLF65L2DzJPozBva8aYMskysSRJZMu",
  "key1": "66DHTTofbDT4nLEQRsBEw1KKej1v63xJbCxyCrdvZBWbBXFcBJP3ZHoC3v7xrSYc64nsGDjgJa5jZosGecBeATNG",
  "key2": "MjuZgbh3p9zM1xfNQCJEAvnAr48u6Ctuxh4BUKpWfGvUuFF5aE5nuGekbcMPkSfjzfhTqjQHDc8mvpXDBaoBLGB",
  "key3": "2RJAHRcmiZvHzsxDBssLeUC3Qmx8wGkrvZkxhaJU6ozMUJFiiqvLPjrfrdNCwe92Gf8cz2x9P9vY51hjBubwddzV",
  "key4": "4Pc4pMLDaJ3SSbJFibguSbVeqqzSKjSqmbJsbJb5Z1S33WF9KpgqdEm8G4TDicDGPmPFJaAGNSky2D3NSFgnv6ie",
  "key5": "kPAPzJqi4KdTxWM2sxixFDdmceQx4bUpgVuKJWetMV62he5fSL6y6MfWxPa48rK6xtWCQhTSPjKSxWNxfbmUFyQ",
  "key6": "4kuHzogivNkjiZugNmuCmr62NnbZkH2GznpC75Q2BQZ8xVy8ohFC79ZLbW5nX66c3uoVq3BD5vopx2sVhoA6X2LK",
  "key7": "2UhgMuaPywP2s2RGi4Z3iQhKsSz2N5w6PLbRszEB1vvxY4C1hoj2TArdFJTz49p15CA2oTrbEYMGjhe7zPoHsWm8",
  "key8": "4ThXpMWsDiPErPEv5wLttN4h8RGT4wvQE5fgmGaeqFRwxv7kpEBubazt3tzgqe46KFfg9QvUpV1KkTCKH7fhSF6L",
  "key9": "26tsZdpTm4HMvSbRjSb76CtvqXNUhrgzZyRfunoizxXmCy7PLWcTpqkBJTHqyBrNTzw4nHVo4XMTkTe6nzGBPu1V",
  "key10": "4bFJeqNucSNn1p543sX2V5Z2P96Ar2MjqrdGta3riM57a1iQz4tQdvrTvkFfzhRksXkbY7AAVbBWG7tzKKf3b3dY",
  "key11": "4wkGmFNC1G4FTy9DEJEQLRt55xgnpkCaC8FqvqQzxqYwsLJsF74ifrKaN21Z9G4WjynvGeiZdb1Fc9vXQstAqMHu",
  "key12": "2HnDTKhLik3bdj2NDNBhzAMk7vzmWmqZBD65gA3FD4aCJhCssBwLWCGPCLaPoea9x1hGQwCAcUpBMiupbbHRZ2ic",
  "key13": "391wNKw8JDAVUanVs51KR4JKKzy4JBJDJQw56ZcmY7wtMGw7ewjcFC5HULubFXM35xyGWecDzWgDttms5SyjGmr8",
  "key14": "3Sh4s6J3S6SBTtNMNastJoeajpFKVtX34BYuYuKuT43bGgSnvSKBBFeE3rjCAFvuSXUxtp8ZF7H94sD3sBDmTovB",
  "key15": "2eZt88QAo8gMrYpegavEn5ACU1CFawReRtvHqKaiQRCuU9mTeCxSsqxxDLH6vm8RWVzJ2jbtjcPy9bLfxK1Ey9ht",
  "key16": "6cR2sf2oq1jR6uABtiS8rpBE8bq994QmfATnQWPbfY88JnTFm7stk9ZSdEHGA4uUUWf9Ds9rWo4jNU1s4kpfefs",
  "key17": "BTpsAR3LfWEzm574NC93UkNc2r8epv3qF9QcUczBQ2GuWNuhudfhwb6vwkWP7p7NsTuQZ5viDb2gwqcktuYRvX5",
  "key18": "5EdmykN1QNZcjh4ffYCRMFM36QcB7Aix62mQaxTcu8bexeP3nWR7UXshrU4mHrZyPRgEMbhAbxXKQKpxzVXh5LhV",
  "key19": "3Fs7tVPkUqxspZ1bTviC89SVZdcYGFgz7jsrhtFRriHunJk417vzAAh1yhxbYVpDxe2Lf6vZN1EKy3cj33zV76Rk",
  "key20": "58bok9bkLeQ2y6pWh9PTRmigK722k4ydek3rNPKSFoAVLUNrtpe53FN2Kgms8guRfWjbdppU8MWYvyVaLbSku6un",
  "key21": "5yw9T8gin35MgLowCRnv8MrZianRFfGudEA6wqn6o6ALyoBhiKvbGoggyaP9TsvoahXMAgeUW6hvEcHDdPRqJ3VV",
  "key22": "3LjLU4CrvokdJqCTcxTdLUthkpWeaVpRV5iCx4FaaHquqdgHMsrsphdR4fxwobXd8tpSqRUD7FuytofyCNhx9W52",
  "key23": "yWLS4WzJ6PNNYbE4esCx251JaRAG2nhj7X3uEMsKE6SXBzErtcgRgnwMNFyvgNA3coT2eoJvbbp2isXDjVYnXad",
  "key24": "3FVgAYyhzafKyn8Yigmb6jWYTsEMbKPBGzyVXoEsAWPLPfTnVuGKZAVYa94Qh2BKzZViamZW2NX3YwW3Rtj4wopU",
  "key25": "2N8pJdXZZGUage6eeEgfSYDimbd6sM5NBoSZvSw2JUBuRMqtsb6ckiQ8ivsFE8BV6r1FyGFeDn7YWN8c9uv9kRkP",
  "key26": "2ZVGYXhMpKZNnJQ5WhZnbqLBZRJtHZV97LRzMumbdDKHRk9DVr9NTtuSbta4jZ1Tyn3ue2VHgqCaTTNY5R7DN5o2",
  "key27": "RwXvXf3SyUSjZ579Si2yaGFAiDcpwiPsWeZZyxphjq7emJd62EmtvNhDC85gVSnFUsfb9yE9RNDUj3a553VWVa8",
  "key28": "2WMZYZajTTSkvw3p6tfWQifs1esjfmUJJkt6JkxRpRH5ZPShq1sswcWUWcdrB4JqqjJoXxR8Fmuic1fmCyAumane",
  "key29": "4s9EKuZLmxjYjWywkXJfqjaFFd3vbbpMvwm4UkeR9y3sLPswZedsn3Yuff2dVHQwav7ivAFEiTFuHca4Qt4RjwuC",
  "key30": "pvKEJyTTJ7hkX88KsAxfBTHXUPPJtHHgPHmsk31zsbf8omatzNEw1Pyy9MZtVKBNoRvsy4HYdXJHgHQu3E69smt",
  "key31": "9a6uUdpyYy6kHp2KuDjPV8zVhZwrpgqf12fUQcQStTRxCvm2gvvjPkLEXd6tZhCohgTe2Pk1NDbRSMiUQnHuC4e",
  "key32": "Fx1SbD5ZCzJEZW1cBP11MTj2AdBgidi6XUE3bFTK2kZQtY8PUWjCmqxgaSGb46tx28H4Sd6r5yTCxfAtfUV9cqH",
  "key33": "3EiopoffrTYX4HjoSe3fbHQKgb7MCTgqenGrydgSeExWKvcavgnP8qbfBCMPGnbZfJhSGWKD9PgFDbvRdpauwgXf",
  "key34": "Fd6KFNfosKU2zMpAfariL7zaFM9einegFMa8TJBVUAKuJFaGPqmEQWDpkiTv7dY9HdUjVCy4KCiPEk7AoNpiDHz"
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
