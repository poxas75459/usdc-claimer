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
    "46uPZC6zCJbctGCQoGjpT6dEFNak4vbaX4bQAoGu5PCnYHndbzMPmRet7ZrUikvmp5La2TFS9Gzf6TV8iFaSUyUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nR349DUt6HXQdFbHDs7erMJC77tTqK817NptDr7WZWxpVZkZ97iEz87gsaKoJXEcSgiGav2D6386wovK2JbB9hB",
  "key1": "4XgQXwzHbvTvphEqxGnvF82eRyuMTEpSYESBpedkVSotiufTRdbM4xGMZJBCFiwrz1iw8D8LB8TZTi2VxLeYjc5g",
  "key2": "5GQTT3o4SbcKJLoK8iyLCemHMydLbTAeJxeNZ9ZhiCpfRctdktHNY6TuNWAx87Uja4CVTX3ySzBhHM8ZMaxfvZqK",
  "key3": "2rcdU5t7NQfKbcNX1PCqJ5hyKDW7nx2wBa91wQP9uhQ5eQFqjMfjq2zffB5jjCiPBG9wSaepjH51anyBrwRP5M9z",
  "key4": "2FNeWm6C3e18qjc8JtaavP6EYKCVZAPumP4NtGvWSkAUxFCQmLZw3HXaDmnZiUzfgihkTYKysyfSebNqUwsnxtQh",
  "key5": "64iCYpKz4CS66oZqpxJGkV9gy6p21AkqVkY9BcJpZhgqJ8pX594FYwkxvDVZcEQ5X9jidjVbZ7sKMbo7C4bCgdib",
  "key6": "3KvmjhPptR4mmQKbTJ9LYCp3Zbh8reGGJfB6UH41qByaNbZ33TrvxBvj92Qj1xbGrgTAn5UheBKbdAuSRd6KPdbT",
  "key7": "2n1N7rw2ARoyPmdrUdWEg4KyxxEvZh3cnGDePwmq4S7kA2nbTDZY13X7Q8y5vwTLJrrjgj1hd35osNbQESYSzZyW",
  "key8": "4iZK5NFQiGUcP6jcYSHZs44mxvysir8tD5Zja8Rz7unGoDXxxnVppVLz9GeLDvD3RRPoAXsrnVa1YGZ5And9zwde",
  "key9": "5fhGAqmrkPCFqE6HB1YHR4HcET4iKqfqEU4jci4RjQZoT7crSwcBunB9HQG9gTfzT1QD2q4DnwsLkAr8GZm5EQWT",
  "key10": "3Ao51K3FiGJXzUNqeGqXZjLo1aDE3Ec7y4yNkyehCHbmJh5m5NuJn5E37vDhnzRK4rHMPkddWMxZoADhr5MadPen",
  "key11": "3JXdaXMTGVzjsCVAK9PRoPmmX9jnqXWpD1dB5JYeYnGUZnUynwu2WMi9v4kcdThRav85TCuZF62QutekCFkLAzza",
  "key12": "23PeDo9Rd1rmCT5Vq89vCarNaj2oEskeKwiYeqge4o92xDQizNjRyEsCrrfvwsQ1C2g7CWyeR9o3c3mbR3Thd8Y3",
  "key13": "4UU2GwVQECkCdyqj8VMDetj39H9EhRWv2u2u4R688JmwSfRkvzfDyL9mbxDQa75JBFqsA832fJ9aU4n7DuUprDiB",
  "key14": "QjhPEXJj2yB9VSpBXVZ6cCfWqkYgW5xVqzCaXhJDX9su8DBRa4gnsrrEU63M9f7i8eJ52jf8bgiNS5bUodAipSE",
  "key15": "64Ym5PngjNutf4rV1GcRh9dHv63QZbkFPVQFaWvvgjChcE9GaoGBnCE8SQcJ1BRDRCf6ztXCbNyPsoGDdUc8FLbm",
  "key16": "5qFjp74aiRkXfv8hZZGECfBGYokJNDBKms2ns5iwtmqSpjKgQ5L4kmLqg3iJJHM8dFzMchE6UZpc25zxmVXE4eVX",
  "key17": "36fQYZEWHRruFthErb27N5L3RqP4mW9L57CDJUZxfpVgfudRfuYtjgeFbFBYEewhrJ3K6JLmW6tYSZYmDNo5XbxL",
  "key18": "3E8fkFEtbhSX6cD7zyhxNNZTx9fbBP7LLg831U7UvACihqWzV1R4WxwKRcytgZEXCW9cQ55rxkMf9V5hyaRSfuVC",
  "key19": "39NQfdBueB2ZMgBVidoKvN2mT3HRptY4KsTf1AKkJSSEr5DKUVxL2q8DY7CWPtDFiApTLXWLyKgJmSKqcXy7jha3",
  "key20": "hckLs5CnaM7JVBHATnKYsJWfnQAVQPjXkr9dhpxXT4ZKtSqSJuAHhkuXaK7FhX6o7kmAnBSdT6FKj9VAVmvTyQq",
  "key21": "2vSRk3zgMJPkPRaKvD7T2qc19Ldr6HsEHvi4r8sEtMBpEjzfAST9vq6L4Rxz938X1ps9tV5MDJB8ikGxZqkFCb1n",
  "key22": "269ruJhY6mS1bQsZmqv5VczSVMvPgZ79efAnUqBHiHCwFRU4vCS5ekgACernuvnsLuhubGQjwPhYtrbXzfxY7Roa",
  "key23": "2oUc8Jp8rcMMprYGN17hLo4kHYb2X5EnqF7vWc8PDViRN1XVsHQVjh6ztbEA8Y38t23XGv5pGzeMAGZgHRMjPvUr",
  "key24": "2T3NzYi9tkFHBJrTHgpG51neQ5Sz5pRd87suaMzXfu3HoxSZk3WfwK7Dgh46f75w1tmxAQVHRCD7o9HvnXCHoLA6",
  "key25": "2MFt39zryYHXfQLck5B44pqyBg5zHndQ7Vj1W3rUkPesjGWFZrD6KDxk75BLVckAwpHuim4Ub1szqy8idPeiK8G4",
  "key26": "AQBkmLQMvnksBv4ZjYDWhTdUYeaSz4aSFMCX14WqoBfeTQJXL8F9bAdZBaWqzQCsWm9cRRz7zanHYUwzoYfJtB4",
  "key27": "5cHpDFSHdjAxE8gtn5SSTSmKmMEzSa2S4m9sRtqQypDMQUtAe5VCDQR4bUP17HEtbQWpWzi8FWY5LAQndGAem46H",
  "key28": "5M6Nku1Mgfg9B4AuTsAGcQ2P6kdR8y5ossdFcJnNsosJCCtqmNKRuLUnGgRLDZsP8BKHrUpJsCSHFFnwhmZMHL27",
  "key29": "41devsJj7FMkkr6AnUbQooZKhQbcqZxLky3mA2mJS5rXxzz1e2ZGK51gmSreke9RTa83EnSRDzXxB34b83psPFHL",
  "key30": "XemfjCyjT4bDtqdmmgetXuB1eBTSN9f5duRBEdKDRvsGS45c88htdVydFXsLUP4vkZvCBLuddhVSarMBc2L8sLz",
  "key31": "3z5tJERDXjJWpUxeCFu7hstZHjKdaF8dE2YGXgbXPxiqvftWhgpu2HHy8k98sVeyqtZLXrpNjTBDs3jGdsrB62m6",
  "key32": "5phHJ8oZaovCW1uaDmrMAyvxr94etaFZbabXfPUG4voH4BqbVg2Z64VoEPSFRTC8buV92JW3BCUoz5z1prSTZXUj",
  "key33": "22TXkzNXcmLnkAvFi47TZHmpCiJMH5hMqV1TKBVwFdaCt5gHt4k3bKDEEQP8q7zMyNEpw7T3HteAPofL4nRNuWY6",
  "key34": "2zMJcoi6EnEbyKAFtFxS7fy694QeH315CPsmM6Mpx1UsfFZUnfZJxRfaL5bppR7DCQ7e2ubtZGq6t7cF1asjnWMh",
  "key35": "3YaycezmXJGNHZ8W2AHaC3KKXDayxPLX1Lzzw4vFZjvbCCK8U6DwSb65SWekPPG3UrbpeHEXCe2eb9Zz6wME8bUD",
  "key36": "4zRUumGRPaXSrL34nEwABaqTNWztQkJjVJoHH71TzZgerEWim1JXN8DQGSYL23nkFFc2V8a6wMXExijtWYcsYd7D"
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
