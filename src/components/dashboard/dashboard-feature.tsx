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
    "4vZqKW7DXMgZBxd8NSMKKyctEeM55xodTFm1B5NyWpjHDxaxbrVfEmrx473jRuXmSD2c4ejSUWf32iKY7FEmeenS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xRxLNsiWUqeQbXi841GK7crSsLBe8Vocai8KnU3GPBveR8BseELD4UfuDkbEb3uGF1ysD8jiXqwoEsibckYHGsn",
  "key1": "5cpRtXkhZtXZDKbKexhGzpf92fxLkvjdmBLhyctpYHGPi7yG7at5MiCE3PS3n3gSY3rkwudX1YuXzbTC2Q8YcT9X",
  "key2": "4VzPn5qbnWV6GoieyaTYGitoCfjYRkstV2Kkz9a9SrATGQUMcNTY9V8uH38BahVXU1UtmN5hph9Gx8DGXdo2EvGZ",
  "key3": "3LesJ6emfHUGoZHFMM1qf6SEQXrXoooKWoSWSU3XKGbAqfneDrYwLUNVdZpPD2quVzkJ6MKWSy7xKiA9bKGFfP9C",
  "key4": "4V85ELXVsXPfUgJbmLVgHrfv3EGjqCMHGmsBuuqsNSUxZ2DTaeJhzXGqy8UvPcQaFoEgY9DQzpYEbpgu5YkQd43H",
  "key5": "5Cm6F9Cocoqv6LDKM7jAN66FMEqkDNZ3BJKsXirEaoBsKmhq4mmV527ajp4oWpvCyqqwbPLMq1pdr8vvDMrCJfdp",
  "key6": "4zk9UGSGNhitHMakmgEPhT81izHX4L1q7KXHnUhgHtiPSpcjTwJCv1HjGyLBPnz9ThYnvdt6ZXrX2ZhxsSbnGWHu",
  "key7": "2U19Wk2tbbbyRqoZH9q5ihGbLPsQf4xRrrQDUSfMCEGeJ8x5iawdRaFAVWQ64i3a7joyMPpnY94YLLMKsFpTsi5F",
  "key8": "2szv9ZWd9yP3frnttwSgnHWFYBja2UKDjecE344a5ZYzZZSgcxczGLFB1Qiwh5d31oiTvnSrjF8mneatWkWE9ztU",
  "key9": "5cqNyVnR94cHcmiyh7hYPmZictxjrR8TiHnt5VZFes4paYb6bUvyD8JmFrmChAbxeaGoiWNW8L2K98GtBdu9GmA6",
  "key10": "jwe2vpkUtfBxMCrkMSAZ8zNJUqMkYxt7PdvywqQQ5rUwCCSJc5QfgTf2XGoeXRSwxe5yYoDG47VYzr71Mjvra36",
  "key11": "4sPiVWRVWyizjD1dyk8vzpVi6MTbCj61yLF3tsHjS4E8ac9k723dsgsDYy6hooWg7Xuor3gsgKnmkjh4C6puwxLi",
  "key12": "3oWv4swDAK2bGDguHH6DeXhMpXyZoS2ps9oPBjZyzQSG2CoYXLNgMWu6GcZ8RphXXaYAD38k4bxzPEMH7emGrAzz",
  "key13": "RHWPmRSz7oN9coVQJLZKFLe5XaNbEJBLXKha9rGFJWshVeicdca1XkWvvKFkHb1gAWMb9Ds69Rpi96QDQPgS1Eq",
  "key14": "35na7KLZCrZjRwV8Z7YkSRBd41dXawLB9Mtk6faAeP1KtRQrEPfTnxgQcLKFZec7duvyq4TMQegTNcuLcTQQLpj7",
  "key15": "4eMJaRcGUTgbAX96XsMR4m97XhijcH553vrwdCSo881AfyquwCCv3asW1rCJS6hvrcEAo6iKAK8Uj6ktCgzu2dFC",
  "key16": "GLppXff45BHYS97ff9x5QA7NA745Snvf6eSeE7T5MRD6sJDJnThYXqdmTsB8vaUe4kMcisCXTnr4yzYb4HddPi1",
  "key17": "5vV5PtxjuJBTHwQ6QgZjmxcwuHAyakuUmN8oqNkcrcbxbDkMqTNCWbjS7qBbiLYFPShnKJio91igr6rZ6SEUJgb3",
  "key18": "4WjreLtG4ysdT8W3uD3xaw1xsaxRWZQQQ9iiST5S9bfANpmrjS5hC91qHA8sFUCKW5VSthLLa7KAUR4y3JwFgLys",
  "key19": "4ouqQXMasFJjYd5swiBzMGys27eMqYHMpBmGTuZGiDCEGt7kB3GHNxUMJXqfqywrZtJzz2L3Ywz4jZV3QZGZwGh7",
  "key20": "3q6gpdbAxhuM2B12rshHQCKCRF9fv7EM6yR24ujjVEXYHHTunKKyS6K2aNSThmdRRyZKTs8wkpCiqMc7dQr2y21J",
  "key21": "3sh1s9S1sgGJwrf34Q3TTTYSyroVwtNuuNzPKW5bzB6oWUspx9DWzUYcAZEwCmPHiB3e6Y61eATdUJ2zcXkVUKYc",
  "key22": "2ucFsPVWxquuKgYfCssPuRcBpEEoaqLSCCshkHXb6RfhLvYohoaDk7y3D3DWTvQ15JXgyLFqL2cDJizjr1BCtR4A",
  "key23": "4jMSoSXS2NvXXQp1ffvNRmuipPw8PincvBSHys1aoCLJ5ST15n1JgWHc31wwPtapMMJSPRBBLRsTyHJvYddu7UNM",
  "key24": "3e1ctp4JMtTNhLeP7S32vn6Xc2SKnhZ7U2hSF24UY6mWyXq5HrKib5vh5vNnHLuSXxxdqexi7mG4LfCQrFsp47CN",
  "key25": "5cwj85hrKoK9XHf8ULnuZssQBziaHzPHHXuHnPWarq3gF8Kcfe1LmAuvBSm1z5UabWnrgB3F4JyXz2PM2XmQBc2K",
  "key26": "3xr5sioWECRSNdxeS5xUddeMtLBZmF3fz9dZyC4PzcJbp9d2p5WnyLpLsKpVoVtNJPzyh8tH9PxomgQQ99ySDJMB",
  "key27": "5bF2M3FLXWFKPLzWTQFRTEzJhkraGTNV3Xp49PS7APGJ97MD22Kax9Mj3szrPYo2pLcik8ecKzdvzPt1QWsyqjzr",
  "key28": "2DeE5s97Szs4dVu8T1C4P5PUrpsk3q7jaGDdL9V5Upgvu82j7xP3jRQyZLJQt6U9MuvsqqTzTCSiAcBkjEEA2RX1",
  "key29": "3QamUa2FEFLcg6Ydyo3eL9H9y1qxKdSytSMQ6oWR2NQUvP1yeNMdeYHcWpBjjfpgwAYLMU75Lts8G6Mqb5Tsof1",
  "key30": "4Vb9wBJhmJjUZF44Dy2cuFmxkrMep8MtHqrm8EEQHbjrx9NQ3fgA9PCKmhfAer431xTrPMLhswNFcz1mW3U3AgxD",
  "key31": "5s245m43SAcvvctd3Y1T9CFREE1UsZUx1hF1ExzPGKenR98xxBoyd4iv3rirmTeTUa8n3FNXufpeuXugSVZfFiiu",
  "key32": "3ptSP12PM2o7kg3A2A2Q4heTBLosD2QsKeCtjYGJhY9UhQR9M9ksBvnez5bneHMqDGRzdm7wLM4R2rjzjKGBaKst",
  "key33": "4sVPVuaHzYzJje1624Lbskw8PuxqX4hKhTRxsCZ5GVPMeaqUVGiCkV85C8GCsyrr14zEDhiZvSamDtBd4Z1eQv8u"
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
