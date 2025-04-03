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
    "44puquG47fuHVkoMqtuLHX4n23C7NikTbcyzdpUSAhsGioEz6HHdChwCqiUYgwoENBiRZmLKFr3tFux8gp2mBYE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ky9rcgb5Rop1MzipxFFuUMHLFMcRJJh1bGutzyQdRW5UxCPJQ2iS32aq6bt2Kc5Q3iggt7jTn6YPskNgYKMoTP",
  "key1": "3oyuCbdxVKbaJHpDK9Vd6vw5uqkTuK4sqKbFqe6VzS9NddMM4MAVaz6uJzPExbTG7uwrKBMzV1zYoRkqbRWQGNAn",
  "key2": "2UPn3FvHefcZKJa1ZqzNzNQ9s6jBB6yPxvqRdHJNfCQvzULh4cM1SekydEiTLmeFfy9DRodVTKNYoukwJZqirEAA",
  "key3": "2F4s8ngLATDEkMAWYVrqVR2zBapZXdqbw2sADiQ39cCaFMZ981xN6Y783d8TgYbRr1yp7kYHvYCqpoqua1V1oU5P",
  "key4": "4uX13iUPbAB5eaLztdwDrYhemWs5Dg31rC1nyugXevVzkwMWGN3ftDDKGe62WhRAGh9hZ57BvLuCuJrZMLW19eLy",
  "key5": "3FoToxEXQ9TfjdFBsLTeN5Yv9anFsqrHcrwdJ99xCESFt4PPX9pDkdzDjifeVuw6jqWbu6D3vtX6p6fcatZwvVfG",
  "key6": "5SpgdVe55Dx8N6HqVrMKKeX9RGrwjEKmsC8w4AUGbCoKSMiGC57M1ZA5z9zJKoTa1munjt75F4k2SExp71XyK6Wn",
  "key7": "2gPSz4WnYDyRqoPuXEQbtBeM1mVyseLGLs6nDUZkgk9aiBz65YM9NZL4ivUZ7d5Xf7qqNTaB3Uc3Z5uUEP4R4ctF",
  "key8": "3ajcmCtRCFwANwEnqgwy1VzxDcipGcfWNgmouqY89Dxq6MZbR9bJNzc8TQ33zPsf4GMzW6xRdwrn8MM3pxGuM1yL",
  "key9": "4fkorazHmjP78m4nHNEiXuonJ6DXPeov3yecfGkQLTopj73AZAWefbtENoGLSHforAzsFbmLzfA1MePqbM8c4Ezt",
  "key10": "KZVffSwiUu12uKTcDFaJWHpu48ev7sEVr9cTkBc5CUaPbojU46jUVnvEvYBxzKfDLEam5k8Bw7vFumaewYPzsMe",
  "key11": "2L1DeQemRW4wNwCoUiNZoY8moSEPvqh25iZ3PF2tc7dGsF89Zj1mcHFT1anFmwJmd7tL1LWNdcjhyGJsWZPtfwD5",
  "key12": "4DT6cVFAjGs7ZZ1d5H2TsJZRapNMb5fyGj3xZf6VWF4Levvg4wRu9Xc384GLYbcjXU9UYpUWYmb7niduHjbZ6zKA",
  "key13": "4owoSLfFJqrF87sgc6avBMyBy1K3NvxRo6tR3cgBRQ7yUjyoMWX7QwN5hBR2gYJtzpJMHWeXz2vVeDS1c2xCzVz5",
  "key14": "EK71shaZyCv3KUt8N2JyDon6xVfzruJZ6NZcH5fztgDquSbdsc74axiCTBVYLSijyMHyxqEQvMwt3RVLsjZxypK",
  "key15": "5okj1A3hCQeGSHMvYe6gZGVm3MbTb3PhjzwF6JEh7WWvyaywJu2winrkN6SDsppsj8R8dbWCMLQ1ytM3AMXrhdnD",
  "key16": "3Gv5iHusZvdEYdqankgoJVy1uSDkKdspKGShVBcAdGWyWKRYtKeLZpNK3ZhLyKroaPy1zQQkSBe2Sdq25G3yzr4A",
  "key17": "53uB3fgeRctx5JfUHfPiyXvAkGn64M9VdBvc1ftqmo6SqCJnKyWZwL1eW3mWjUHryD6MwVMnTYb7s8YYLRJP3Fr7",
  "key18": "Anb9UApF1EnKbfrGZF9aGtgCN1UtyV2Ux9ZCN8WP4wDAG9tqCHdooBcfhJNgoA2entcerm3P6sievckPE6Mamvf",
  "key19": "311ENEhVMP9dg5GPQFWNi2uF4Rgt3xWh3sQVE6stPuZ4hCCCERYbHVKQtZ7L1zndweM3kdBRWAKmmfmnq4Pvva63",
  "key20": "2ndRiZonLB23Eaxf99MiubQjipCtk1e4PRToe9YB6DcHFGqLn1th1gP7R2JsvGGuu1xWzHdXg81s6PXPo1MJHTw4",
  "key21": "3w8XuNxRgZncjoEomxu6DTrsR95FGH4VtxuzbFKvxqyt5rtNAPJwbSCX9ztGY81ymdUewG4b5rRn1Qb9QYGiwfo",
  "key22": "4UPV1Wa8pwk8UivJLPRQrZY6uFjcxo7dgu7CBoDd8fC4JWD89EWpmptLKtuZjPS8vHgvJKYovDW2fAX4L5viVnV8",
  "key23": "5wjNfnhZ11eDqHvPAM5cUbjLU5UUBxn6vpVipJNDiz4HQeFxA1h2eRF8L65GWJCBTwHB1zFA26WSEFP6inF3Cqrv",
  "key24": "4Hz5N2cUVgcdtn4WT2kgvdRm7aHBs7mRb6V1q7idTHjnWqc8rz1b93GGtS3dV63773fv55yRW9EVDsDuV452mth7",
  "key25": "2UREd8of3woreGBATXwqSuaEsrP13vuJeWFPN64vvZZ5xe6LQN2R1trmFxRvteCXArXz48ZZGdTqMdvMEFuaZ6py",
  "key26": "2sUsz3m6wfJAZGjjcy4XYgkzBEAxApXSDhyToz5zuMuUiJKzvbeD384UrkSVJ8Dg9rrkn1pZMTs8qixriEpYNGat",
  "key27": "45wPs5WPhRB7ASmEUDBCuJfziws2b9bqKfY9tGnbQGLzLKhraVKHLsKD43qzVaiYAXHU7kdoYNHzY3woKSAiGwA1",
  "key28": "Dc9dbHsjHqBwiDegoLMMNFDSeUjE511JP1X2DCYiuPsBXLtuzSWX7aMSJ8dWtqY4WQQVCb6bSmduFgBw6NsNPFt",
  "key29": "3maceCNQwztJ7kkqnJgyRnstoFBKdh2ymiQhU4buBD5qAAP264z1nDr2NhkL7H9hmGjEXW4oAK7mX3wfXxeBxPiN",
  "key30": "442odsy3ntAXJPJxqjzudZyj8UkjGtTPiHDMC3BZPpJ5cQnvvkGj8rNor6DXy7C3rQSP46vYfTvUL5VGyYPFXHZu",
  "key31": "5QdnvGojK3ZNFp5EE8mSHmuSKGi6A8xR86ZHEzYabbPRvaf74wXbsYjgJcypt2vAky7Euu3QQf4JbLVJS74hiBDd",
  "key32": "pasvEm2RWgdCi7mzhR6qsiFfpC6Df9DDnjywHeuUUWX3h45fLHh4Veg9ubbVmZvMLFguUp1vAdzmkmGz3Eb9yXi",
  "key33": "84KuVPJftdRyqhSQVmbmLwFTUGijV1KSeb9rgeJohV8c9zUX3h9CobpuJA6RGtJJkkaFiuU7eJ9z6cjNknM9Vzo",
  "key34": "5BNDCJ8zJgD3QHjYxNsGTyWEWDaqH9thZPKNDLumisnVsLQrF2C5C2hxZeUi4WPqC3M79kABMqxUd62SPbvVFp6U",
  "key35": "UeoRTPmxWusexRCa5jDoxopHuUnXxakK4ooWkQP19UK9Fp4mXNGRaSaqbdvrA9QjMvyHEaAHyTR79NPn3hs3fo4",
  "key36": "3E8syMPHb74m4Gnb1f5qraNeeFqJLTH714Xa429q2SZVyZCKmfAZJhHsrmrWrLSSx6tEWNAdJw4v4koGx3rgzJwA",
  "key37": "5Z2AwvXwYWFHNqgZFCfsgYCXr6E1FSMXV5ZFzxohtBgd9gXU37AmW1LGkunYFCkZMxx5xaUFM511ndg2Hhq1HpQp",
  "key38": "5cf8KqAXofnoQ2KBxgXSkEzCLwCdZkbxXcJBxVsGAdmfLtdPKgSzNjXY1PmoTkVCE6aRczK6kCJAUAuzUWetQeyd",
  "key39": "qxqzDRW6RrSQbmxcuazKbkbMdYAwfwMCW43KvL95o159BrV2Ej6PZpGPgQ4BzTTrkwCyWZPyR3usu5ycViTrcX9"
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
