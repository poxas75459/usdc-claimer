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
    "2iHejMmDJHphXPTDSbKrokBbwHQNEqsWrGuZgGAFZGb5uj6rZKf6hyTmDrxXesWf1KsYGZ6QsQ6tMi2b7Bw21WdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39RJoPzfpKq3J3s2AaMSaRpWD2v77tvEkF6C1K71QdZDAndjgXMyeyBkuv62vMxZfw5QjdKL4K9QiyztCBMA45TV",
  "key1": "4qhAxRoKKYUoVMd9R6WasLJuF88ZMw9ubGqt58hTuB5WhoSQwS7kygxoxKnmsEQfMN3jSjdZ6T7dx2BP9seDGtXi",
  "key2": "4ppkBRsDRDyw1ysLDUoCoHWJC3a4AtSo5PxyS7DtBRAEUAgknPEVWjkVhkm1pEMPcXXGGuTDsqnySmebCDW5e5rr",
  "key3": "3s73wvVwWb1vVzZpqCVvEUBA7EKMAwDU7Pqoha6xrjXgzEVFeyJhMqiTTMKVH45grNBm4aH2cSyVKanKy4cVm4YS",
  "key4": "yYjznu4EdaJnnd3ZqXm4vwgs3WaKKkTNeE1PfiykzYi6fEhU3fN9L92yZK4ov4RR4HUJqMSdGuKroa9gRwr9j4D",
  "key5": "62TsATPCpo1D7D8LLnmiN1YVnuDqx2CKaCmZZPY6qp7mDU7BxufvrVizDpKvwJwdkrBxpnwYSbnzPUGhkV2CJVsb",
  "key6": "hCrGYpjTUxPQVUVoLtY4x9uQgiuDpfxmVWhvNoEAin33gxNVkah6vVC1V9uhKGtGFaD4ocAV4KMHhEUythuuebD",
  "key7": "4vUG2QGZYVErRadd5mDbvCvVGR5miN4XXxnU1h4XzUQs9dMwNYQ7P8WkY33ZW5CJ85L7YCyAW1MYTKF2cP5KeQNj",
  "key8": "62x4Ec4GFGLFJ3EEGQpiXLNk3VQsoq8tBWyyWGSbExWzruWqjszxijemQUERss4nN7XYYKqTUc8PuivME4fektmy",
  "key9": "24E5aKgw1pkBuUz21NrJu9SVsWHWhnV6qq28mwJgwQ4LuyeNUVaK3ncfZUHnm9p3GyoJtAE8VBFYBJtpYs72EFRh",
  "key10": "4aAUC2unJfP8ms6tG1oCPvvhNDPtd3MFuhXCZdqLGpnkiZJruvoVrTevJkdKerxKfZc2rmLeknramG1nEaFXQ8ar",
  "key11": "2DBMDTZwUStaUMAbJ2MooNZHA6nYvw2rBvgcmSwj8CnrbSj4ZR6i7FuAdtxFV7paxuCsd9ZfWtB6Fa63BM4whP7V",
  "key12": "5ucdMpT3ZeRQkzLhDWLS6LziZgdcq97KEYLkrBiVjwCihNGQjve3fXgYismHuEbcnWpd2uDNdGJPn8EFMgrD9a5s",
  "key13": "3Dtw9rbrsFxLh4X87sgwfEFc45xuzg6uhbdMTSSt464A3zcRupuNBBPU2H2nx5McvB6oXtzTCHMY1esXE9RUUkyk",
  "key14": "4atZzncG9YHzU4yjLuGrRQjDfghyNdcLhNQjcBiGKLntUgPCvxeAGCMrbRDW4rYeYtY27FqY5AuMsbJTRxZeWwZ9",
  "key15": "MMtBBvrT1L3HYtra9JC5ba2fRpNUn2wLteVYBzKinpNtbg8gv52kC5s1cVvjaVteQC7Gt7HYQpsSgEfhcNXXaMQ",
  "key16": "4Ee6sS3pSDBUj8ApF3WN8cdXwBtbzMki6Qi6PCS2Jo4asFuxUYciNDxT5HpsmUFPHcfHcVoasgNzBXjYhG3FCaAp",
  "key17": "5WL9EdT6M5RFTVj59WRdcL5bDNSzYSkU44ujS3zdiMAMKVkLDE15FrRP4R5ZXd232v3aX8KbGjvhVjr2A6g4HB2u",
  "key18": "5ghJHeKuMvuWBNnujWXq7cRBLSRrYGsY8ao45yHJLJUr9RaMvsmYWiZjhvESmduUNq9m6vj1ggcE5ky8jQtFv9dY",
  "key19": "2MinhzRjNn7TFQ7odMsSnfppaWoqwFdh2i9sBVtp8NvFoZJz56SzdMyqS3KHn4f147SQnyDtRpBLbLoJH7EbyhtQ",
  "key20": "3FNB2pKQKxL1CWwDSum9jxXfBeEwu8JPEbKHBJ3ygKXvnvvRpBv38e3bcMUAPXAMNf5iVCobYjWRTLDPtm7o5dcr",
  "key21": "47gbtAM8tMJtB5ZJifAmUhpKF1oHMxxwvU9LzioqM3HFpp1fpdRKfKQyGNthnYPNgRWmBx8jQCw3rqLx4xPooGMN",
  "key22": "5WUJ3wntcPaicsKre9ULBUFTXwEC3H3bQbGdusyE6SbidxjsaLMzxAoo7rNWwMCkYu96eR6Mfmmo4rz2utLDeyKH",
  "key23": "3uN542boXLwzetZAbGfsv6kb1BVo758WtHfeNfN65uXtDhcTua5jTEUtRPk2xQWnAi2xNyuZF9Kf1UanBZDN4psv",
  "key24": "2zsrvM47iESfZVeJcDZZnuUEeTrYCSQqZNxUym7hwhvuyHe3gmMbE5bcSwtMMaHEnwWHrGbctdwumiYhK5Qd7QQF",
  "key25": "45w9aCZfBSUQTjBeKaZJS9qcDJCiDGNNztUopMd82UASPNujMseBLkZveDbFevXrcN3mfwNzXp6Czxt178LvXNFD",
  "key26": "5yRVnaDfxEshbjx9fD3E2rCZtxpPUcbee6pqQWdQzsoao45zU4Xj6iWpp9JbAy3DVh5ZGuuMhofqDs94R8FgPSJe",
  "key27": "5CMUvvNdXjsSzhhnzdYKL31a8dxgporSXQ5oTi6k5hMxdjLjbjwHE7zqG5oSRDZCXatoKd8bcSAqsQwonJNMTmU4",
  "key28": "3ty9kQUunNMqCJZyH2ZJdrvDJgC4SsBwAsVrnnDQRvVwNjgddYbsp9Dbr5fU4zbJBh8P6cDtguN9AhjiRc2f8AEv",
  "key29": "5BABCnnqqYgaJxKj1ns9BXJfaoWNB6FTBrFcushZEY5GZ6HWRWTYFyKazmwy3SVFpm5gYqYpkvc6taowK4ecPPp3",
  "key30": "57ckgRPgBc8NeVmm52VGQsUAeujwMog9SSY7NaL8C2RzKdfoEJdTYwmMtqpHDDUhnjjKGpuwG5rBakCk9JrG3WAe",
  "key31": "XnD9aFM69QNiw2FKoErnLLmmEnoNyxG919ktH5nxwnfXVfPaEyeVEz63egENwQEspFXHZTD4mGGzSWaxLF9Bpzr",
  "key32": "2NzGCmoUcWpH8GRPAmUJvyCmDL2Qo9sd2AtGZimckRSQ9L2pLzcmxXrH2ZPwsCDxfbDE5N3xFzkrcdEZdzXY4Npf",
  "key33": "5LPxG9nvKH3EjGziQN1xihbdqR91E54rLH5LWW3k9UoHhh1acw7xLTvsMgD9FnkE8TkhF1Xmix97FVu9KgHiDD7w",
  "key34": "6EF5LBjD7xK7vUeGRcJDQCNeK8YxHpXyUh7mfh6Axkf5PcrgEspRkMwhT44ZLx3tFzzkLdND8vF65yXXussRU7K",
  "key35": "4vcZX93nzKWW2TQQtkya5PvYjeroiffpkvboJD6TJh52TSdLgHtccPrj2HVVy62TpE7oHpAEhjsTgNMpfDCPAk13",
  "key36": "PS5R5EKN2YHx5iZ2rVkefMDYPkxUJe1wSyL9pJ5G96fuhh5LgdyaLesLTLYWgQCcft3h4xD4D8aWrC7ugDLTd8p",
  "key37": "4GmKfZy8KVzzNpFc4RAkc3MhkhUqmjWYn1dfMQsZbKv1PdibVqnj99SjpV7qqfGg8ZYQWUFencRZaiQLf4gpRPUP",
  "key38": "3mcbCBFsE8FhcFNvWd9CPTy9Ub6GziT3JqCunvUYpHd1U4kkU2prfE6gmKS6eAnVmcUSU4iPTGZX8aMykcEZYsMg"
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
