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
    "FZCdVBLXb77VN1Y4G4yqeWeEzvsch8zFjPef3N7ZuFzyDZ3aYz5FJxggcry4FSeqgjaYLKuPGW9zLaKyoHUnt8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4ZsPnrikHTbUtKVDwvGEW9RJ8Fqsyxh8rJquaoJ6YoDkMkjrNdfEpsH2GKaaoKZXgGAdnAtpj5XvJmHWZitdp1",
  "key1": "3mJK9yLDsJK8mugYZe93XZx7YWp6Bsrym5U2dXyoekoH2iuRiov1rn6K9fuGrtpSy715s1xFtLmpD5tPhbiudBuH",
  "key2": "3LyrxPqS6dLMyhWzBRLL6WbLPRWhphiieWGNLV4cMCpuqsv95h25XdCFarkXUhRodYNkGrtKtUG84pu8eZZBhMcr",
  "key3": "4GsxeosucLSBytF5yJrq6ShBpszxX1vjotE4ViCvYwigWapUnbx274rLdU6M6QjbWdRqFf5Ao6YizFpqEd4GBSeH",
  "key4": "3HLfGphsemkMfHLyFGcWi1cs9eTMuWzwCENf6DkU8Eje7UxMVGuN2as3xis3h4X3BX7Rh3TM9tcn3xvR6pbtqCUi",
  "key5": "gFLbPVL9eG3epvXX25NPH7nWKPQmTVStS2dDvUBAsqzNc3g1bMeG18KKS8h39WpCKu5GWE4MuYR5C1ZUCBBhVjX",
  "key6": "RdnB23cLk9myx6K5jfUz3Kejvz3W2vyHCBSKJHkqgBsXsF8fVRwLoFMtAwqGK4rdzvpaubukzYrYjNRowDP9rb6",
  "key7": "3GgmNiSLSsQF3LCjmS43wcfsMTg9vNaG3pnomcaYsWe2pdwyhKJ3yxVVJzqWcYc4A2wKFnFSuhCJVTsB6nWA3w8j",
  "key8": "4akmaj9RZ1a3GFYat3AgXobxGt7sBsd4zxVPCCbsBuPEyNay28maKzGbe1iNKX6he7hu7TC9hpNTe3og3tdLigNx",
  "key9": "4po39ibVpSP6ZafEkMQhnNCxz5mkFitZT6w93Hu3ZhZQUqfLrgDaW5prDkc3ZQYmUywa3PFRCvkoHxB4jPDH4s3Q",
  "key10": "2kzgt1WRiVHB9nzLEeMLHWyLs7sMLm9tDuyrrUpcaxcPJmDbwM2att7jZuJXWbg3Zz1baox6KJpdAvKpKG2wDgwS",
  "key11": "27rKtxdLWAiRKr2u2fccmVSHXcY88ZwtE6UzsyUYsB61YmqpkTgCFnWageuPvN923L4EybXQPQ2pv3L3wBJqhw1B",
  "key12": "3bKLe5th1fC8471VYPMhh1nuyTu3rnXqA8J8U8MwRBAZ99Pe4AJCsndBFG1aAMUMwmRrM76QXVSDzwAZfUQpqp8P",
  "key13": "2LT9DNNRAVC4b8EoxWUYpvfTeSqtKizCk2HxKQYcWGRzGnKf4ZKiXu5GGctKMhYqEA6MKmhTMg7r1TFw16fqjeqc",
  "key14": "4pe4dBddHqohxVfbbgFASNi9NZX4YsJ9E9wsas8DxLqmBXVm54UvK8t7MgY9GyfQnVrPsGs6BJR51k4L7CutUMir",
  "key15": "2KqBrxmQDM7JbL5vj8uFft387M8gH8FKq2SjunR7ywFgMbgYS1eZLkUdodaFaGjTPTXxfnS8dEa7nqw4HgD49QGG",
  "key16": "41EY8o4BeXjkNZm57tpWx4HjSbbENggXZZxEwhkogS3CXrEUh9sT66rAo5syWYSnuJUTcRhnFwwXQB2nU3PsBwZP",
  "key17": "3E9GLmhp1cytAxk6dhYCyFNQ7hh5p4fdMSNEQa51mDa5kGt9AwSay8noCz6fpregSYtdYN7jvpsSEwrkNK5akRcV",
  "key18": "xcdMh27nSnqaUB9ojgsX8o3B4XEsoZABjL13E8hEmv2s7xgtLwsWU7qVU6EUTuAGD75SfTFXRPJ1UPUP8GozKaa",
  "key19": "5CWSZdjP5tBC44in6h6X4LP9YhaoQghg8XrDzXHJUeX1DnABDnh3a7mb9jT5fz4WTfQyWu9F1G8GnLJSHFEYg8rs",
  "key20": "4a2Y7QUapxDzFkExUVtLPhQx5GCNqCY8EVy2Z4ZwoBFwsfXQbZDDAirXJ4yeqSkSzKjXExkNhnGLSQuY1y2i7tRK",
  "key21": "2qP4Xz1yhf5cXPLVbAwQ2jN6iiHRnA4rJDKVVtuesz8G53rNYQcq9wvZbQqD1WQTJFNJSDySnDi8u42VD5uxSLyf",
  "key22": "3XNWHkLGKerMCty2Us9ouNdEtFmihbioFs1AP9vdBJwN1yS7BVmDnDzfAASPiDBfhpqavgnDyyYv5MVdEcGXLpYA",
  "key23": "3Rn2HbAE3wmbZAcFu2NTrJ2SnjD4se1hnd8UWuCvYTxsLcopKf3H4PzzoA2j4Cvf9PuAkgsc8Bm9WNPRP3SYjPpB",
  "key24": "5BC7AuBdAzgV7oNAr6VJ1gNQr7tPFUkycroNhxgUaX1n8UKFsR88c1mezq9SBQcZbu5YPKprJPxp2FiGJBgkJwME",
  "key25": "4VbMZNhs7ujczg3nK5EmCSeBEnBcA5zJvTM5GrdC754483up889w1arkSk6YS82iJZ2AKk8t4gQh8a4QLzXhXppT",
  "key26": "2KMXt34LcNGMk4VNTgmhm6SAWmWNhJUsHZzFWVUXtgxH2vT6cLFLWWT3T7LCfEkcpuGVzR5rj5FksmUmLbbL7Sj5",
  "key27": "64e1CxEvUW6rwXPpPqB8UX7DrZrMtbsfuxP3GZ6Qf91sbtsCqnmK6geAaA1enUEad8F3xefXMmYsZ8vupCDjhxB",
  "key28": "3v8CGgCNX3Qa6o6F9fnE6yh2jtex9n5PMasNrPRpdBhVj4cvktpenpmbTL2pjdExAUWK51YhiuuxZZpJVuxMbw3n",
  "key29": "3przRwLj8hCePsLt7M5Dsicw8aT1chDKTPyppuFTVRoBJFVR1xnyD81TSxWX96pnXtFRuwyEWDLqZ7L5WVUNGBec",
  "key30": "5UQoLoMpVUWxPBa66K5dgaggnevkWTfsK82WoCwkxffMXnkJLG7dzGPbaGz8o8A4z2DR7JUtVspy5vxGAWXkAoyD",
  "key31": "4NCcvke7WyG8Rrwsi1MQyTvok7bSAhnrWvMUcfDUTqVRk8nfX4JM5dUEhz5xNnc1VY5ujLUkCwgpKASHpqjSF1Gm",
  "key32": "3ksDNcQ8kJqvq8bwDxPxFABVPtc2meUwkZXWaRRG8HEQ5AEA2q8fdjtcbRbVMjRt6VcqL9waxpZugC1KLQu8LEUU",
  "key33": "3APc9hi4vQuEe7JvoNSB56NsVH67R58n2op2oR8GVhiDRXr7V7PayMAutgVGZDby6fzu2EfD8aHnDstKUD4hXaQr",
  "key34": "vZ1apad5Xe7khZxjaf8XuPETppWbB2E9Ggt1nsgn5PY3uzdwGGqbJzsKikCKTvGALMjo7bCyfWXWvMenXDA47GK",
  "key35": "3CvjRYtFM8MpTf5899UwMRtwCxFEGwKiyQkc9V6Ua5s2bamh7EUvcbvG7P2dkFekqB1bgXuAe4mStGdPnaKSn9bR",
  "key36": "5HYchZ5pGgpzzL9zgMUBDcZGskhAFgiQGb3F5y6cWjPVD2DXNjRvPUmjmTTJ4aCRenyYuw8u2QoKhqVjTBERZ1w",
  "key37": "3jwitWeTP7UfmNJHQk8T4Gfj6mqTANCU9Q28vkawi8P6FNbE5vQQChwgmq9ggbRH37Hk3jT6WTxPv3iwvYUnxpnh",
  "key38": "4wDvvStZ6WEUQ3E9vfK8opeGPrHG9tKWHCk8b79oCD622yHMgvMakRCVv7HqXxctYetkCNCRNFXZRdf2ENL3rTsK",
  "key39": "2gAXnmhSSes6DprmWWyhVB5yonRRJmNMZRMmmAFchj9KDNMvMXK29TaKc7K8tDjAtCRGJsUAZAFTKPxhY135K45g",
  "key40": "5Rt8vNDLvHTF8cn8c7XMr5UDbZVwzHYepXH3LBaEDRDgmNgnhcKTvxFKDSVZEvW5eUa7CmyBCnPLhkkg4EU8oAfB",
  "key41": "5fzbMTYYVdWdbzY4QAekJissD5pCLEKpoTyJPZpDcbzmvbEtmt8tSAtnLsx2oubPcqTpEqev8n9En2R7kBYT75vA",
  "key42": "3SZ35KbcmBKHjEThsWwzQvtragtdL67MusuuXUq1VS33MCjjQcyDqfDGov6ieeLaqRK4ccvStP2QnHttZSZ82p87",
  "key43": "5c39Y499sdF1WZVJDbYjqcPwwRvRF2UJ9LTFG5noVREgZdNmRN6vdGr5Mm8dy6hbqc9eumCmPyzRMAQdLCJ2CLzZ",
  "key44": "TLS9W1SuvecM7RGkHHbi77fvLz7r1JmU4YXA7TWPHYURy7ZV5yx9JpJuXHBruzoWx3dorksYqh6Kr4y4fP2BHhg",
  "key45": "29J9LYnh274igXqnTn5RvQn57b5R9LmW6oKtRjep6pJ5dXD9VqSMazmiThNsiyDW2VA9WdGdYqoyMx1G3CKuzMtd",
  "key46": "4VEvMVVj6RuGaBBqcPAgXRJvuoY8awyj3vumAYKTnKCPFBHSnCBzaQRWoL1XGaJmiPKDKxSqZQiiKHkzPCoUzEdk",
  "key47": "5h1GxxdFPBSzGpDLSvf8aKjdR53v9u3MoxEizi9RwKjYSUQvvHHYXbqvwTArfAK3AmSTqdMEkRDVconPivBYKFrB"
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
