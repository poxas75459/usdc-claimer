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
    "3GTHmv9m3p4jJVvCfQm1HgvUBKukJoitAGRouSAkzSVvPSPFALv9xBHfqNg2gVfz5yFJ59QWbTNtevqDaf1N1Jn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qmPWPC1YPpZLKodd5HsWCDGLYCTfVegqQSYmjQE5uJWtm1gvJxCUSU6mdw6SECCjQe1GKTMAgAErk2Y8usgXzNS",
  "key1": "5EiHKmH4LDYsdBWmBQHNY3ZTkWVv4pSKvH7dNmfuCAsRLjPZtbxhmbfjHzjzZEpfwNeqM3ygJ7VUZttA4xp4UQLm",
  "key2": "5SS5sppzKPXP7spPPAUkrhRMCfKeJSvqMS7cRE2EiHNXCC4Xb7AHA67NTgV7mESDDnGnBzqokqzrDmyi8sjjc3Uz",
  "key3": "2eD46wqmd3U7NhLYH2yHpB1GsyTyXUiVPG5GSNf5zSdEHdckAYXUZx6SG3PvNfth9a9yvRJzdwiwEGnQdK7ZFfKX",
  "key4": "2KgruoAHLLmSWsxo1AKoe8nfTqheBWDKmUu2v52x3e9VNLvtJAZcSMsKnfdFXE6u7ETMQZA9z2F3XbpCKuRt4piG",
  "key5": "Q1CkXK3MBKVYL6zhFWeyt4y1tU4g9xFychGHyKbozwz3VSqkvib1U4y634nQJfpgHzPFt5fUVDXqLJkDB8AMsLa",
  "key6": "5PDf7txEnYDjwftG7Kg58XpUD39f9uY7kaj9UswvLkout6SCepnA4ATGS8rAygQrYWKS1qxpXKKNYLEht6RV2zNW",
  "key7": "3mvpCtGqnrq5CAQoCXcM7Yvb32HXpbzkqmi2i3SVYmn7aEpPeHG4kg2e9PQDE5ENAi8DBt8735vEV2xKeSqEUoEX",
  "key8": "dL7Ehsi7K1SHFRkb55ayBJgkbqtfRDi6VDADtdFiaodX4AJWSAa3RABzdk4K6Nv9YZVt4NJuZc5dnWKN2nTNh9R",
  "key9": "42suwPT1kRswtt5vykeANHysdzJor1vmUwKsLrfGjHYcGug6AUJcxErnDH18ixYbWi3tkg7fURmMpVUaYFGYVmGV",
  "key10": "4dZm78TsafeJx2fdyBKQAouyntx1Dxg3CFHbEyWFsQppKXX4Ex6rXgcFsZ8nyANCowqSEG2w53fPB8nL7N6uFoFa",
  "key11": "5bpYA9vCJvmmvR48RGZeKzNh4UqVuNRRJ2HWe4RfRv7prNb5Whizuh1um5GeBA2b65xGsNrbshkGWfVbbDF8fAkj",
  "key12": "4eaqwFys5Yuq18KpXVJQG5yXaKmtzWJVBwDUvej4So11N6onEXZxNu7wCQkRpPmRvpCEoz9MTjC8E4AtgMC9nzwB",
  "key13": "122vaaCrYeNRRNZqGTpk8CPYSDRwK2LiRGinqMbfSphFxh5uM1e7TUM97sEEintFk2fEzq78ybxHRbEfyNZ8jnm2",
  "key14": "3inS7QthgDqpN5nJSKZ6EQMcmcVBRTH8DMNijysJEHZkn5ihQuKD7PzKqB7Ls1vqtts7X5HYKSXsmzKrFytYD8Hp",
  "key15": "4STyMo82TxRizt6L7qUKx9WGcbieVwYhXhJneDL2h85L7vhE799x1rrtxexnVRzoCZ8p3LZNL21ZyB4c7tNfw8ed",
  "key16": "2ahUmBgidcJ9RrNdhfgar4tGYBXniLhibGgY37SrFobg7tvyFL453MAFW6qkhofT5HrkY4Kzd1vovp28ubHYVxTr",
  "key17": "4gRehUeqF3W5MHD5rHtNyiJsSB7sM1qFH19oL145Qg2L5NBPid644NoKgKyhEjtQMotqhaNDiqGFch2EqsBo6VvK",
  "key18": "5fBQV4VsC4gHkP1HMxK8zYpyHT9T8AUp43wfFakmEYzV5pEKueLhw6eYyT9TVUocFzcZUaVMRjePzTkvMqyKX9CG",
  "key19": "5vSKDrJgMqNQ1FRxdfQHfsHho3XfYTa8YeujXnkyGg1CNAo3VSEMxeWxB4VB1rbfgP9sf8gbcZ1H4exD4rBMfzPT",
  "key20": "2zUC2zqtrZHSiAog2s2uk775jCbn9GX7PTRQ54WZYokcm2jXUVADPhXubgiaf5edU2Pz84D8ePjJaYm7NJ64SoPf",
  "key21": "38kEm17NPP9XHSDyge5oznJ5tLDQGYe8znovxJxhdXBRFnkDHZGiSaJx9Q4v1RPrvXKtsqJbYyZtmxsezJmApS1q",
  "key22": "3uMLvEVA6u5AVccyPTQLj9g3qqx9uLo8bvy7RQ7XYnjt9wr2kZaJ6z3Gc4K8NS998aXNkAEr2Uvmc2GHavukC294",
  "key23": "owBwdebvR3JQ5TBjixC7iHLv34yac3FV5aUa7sT1ZxnrzU2y1cLDv1hYkxXe6SQ2FfiCnRCB955XDsrRbPpEFAv",
  "key24": "24GiWsGinVbscULtNecyjc6VHYBwZFK5K43J888Geddi2mvuTC2pdPGzy857pdH5aUjxMXunDHRwcmbjoUebdZdb",
  "key25": "4vWQVE45MUCcpbAe5EKA5ca198i4JSDj2Qv57cdURA5BmgBfiw7JpEEcWtXA19kupgVEg1b9f9MAB2VpS7hDRzep",
  "key26": "4SfyMYJNxy1k1in6k77dhG38kFyCvHMPBY2Jh5ULMTeBr2H2Uq7nyveGwtUmvxFxo6SNzt4ch4gCoMUtYyoRAh2H",
  "key27": "2KRik6m4gTd7WvBpQkYsqCqKtFvGWhtztMapGdjeX6k3KgjJrXQw6WNoCuo5SaJR2akYZ59PVRvy4BapW981hcBN",
  "key28": "2gkeY3PwKmx1gTDEChn3eCsFJFW5FwjnPSrRZr4LWddvgw3JZz79znSzykE58kaBKxqyXnarMk8gmAUYHTXo7Vxj",
  "key29": "5xiMoXpTkKa3e9x3dPUb5CJgR1R6FhcFf65Bht71qPRZ4pRDk9LG2xkQ3KiXQhYDFVYVbUpfh4ZMrm1KtJVPPqwZ",
  "key30": "2wEimRejL56zxpanDzGfFBQuZXrPgT8qcwgX8RHEpEZsyyWCB8ZCLsxvvoxbKWqrHey4R5jbDDKejudd37oqLzNe",
  "key31": "uQXQo5jnijS31Ktt7vKnVLKLm2MicnJSypa7QcTiNsyjZNALQY6pZx18k3Qyaos4wiyv27mnyDgY2hbyMy6jYDw",
  "key32": "4bExBg1x3VzPcm4HvggGZw7riVTrTEjoNJck9LwAXmuU6Gz2hUx26f7rwDjfqd8fnZj4qKoTjPfagu78faPxK4po",
  "key33": "5gKFeD2vEuxiAY1pnVZ3bG7gST5daskvjVSJCe8J5VZ1CKC98R5c7JAN8BSxcqYnULfrw9KomLLXyybV3TQCusrm",
  "key34": "46pMKy9uhTRobRKYvyRoirw8KYUAbvPVFk7VAkMPajRHcLgqNsNwudDqB5uucKXoua5mEYbTaC9i4nEmoFwaFntP",
  "key35": "2AZ6B8nEk47X4rtxVMg77geHkipN5dTCk3cpyUEy6ueZpVUbwnDtM9Pds9hhd9JgvW5apVZsQzSVgvTzvDH8HdBd",
  "key36": "4G4mtqY6rMdpH8yYB6CDBhRw5XWM1g3wti5iwgbE8vgS1hAnWx7SfvXVabA6iHT9e6NaYSQSmkiQnnsJNWNbSiBE",
  "key37": "4WsAFzWs3HMJVo2AGKQtVb56AaeZZL3jrgRPsvRtVjFDEy4BKyEstmVuvwcJjQhiJQVv4zvNmhttx1R3GptPh85D",
  "key38": "3LdePWpGkbgwYwrjm9EcDFRHmhpRG8wr7PWQWFpuSFxS7oCLH4tXpCJXRkC1MpSEbWdMqq2wh8ViMr5zojevz9tD",
  "key39": "5e4QZPpiRPMfQHChtY7T1cCvjhLDyUBsSDUyAuEK6TSuYZp9KqUJ3Q6poTw5FA8yTdoEmYs2LM9GHuhRTLJSAEKs"
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
