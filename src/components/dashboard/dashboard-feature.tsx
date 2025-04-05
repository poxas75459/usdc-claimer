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
    "5NXWC4Bq9bPTzrnZihECny5E5jtq3Ctd5ZMSBw51eCQrCJPY24UTKbXFE2hpUiT1NSNbySUkmCLjSSrVGSGhiEB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25vj7McSc8tWxvxTk1TDHjhMBeQEy2HjCe19TsJBTvvgeJYZSAnkKCQALXsnptiJjdRJwZvbqsL7ZnXjwjC4HMqL",
  "key1": "54TNcvjhiWSaxn3DZFCzCmci4XYBct3AJfKdG9SiUZ3bRM67fep1JgWoGwwBVmh8s1XFtLENxWZYpuZHGMEC5nHG",
  "key2": "5cRgg9f9GAybFJzDfn5Pd5E8n4WScdsS8oWUVDSsEY7PSBsvzmwiQSBzrnDwosCPN4FJB1ZSsxS965TpkgWUE3rS",
  "key3": "2os3itZaZMskQc7R29MKNyaowh1wa58kDM1sj4oGcw1P4DwxUMNAdK9ehN12DcAyWejcPfr9AZ6Xx5mvLYvsziy9",
  "key4": "3j824xX3xjmdPHCrBYQ2FWyX8dC8otFX7z7UMxquEfvqpEVavhKSQ1E4d58suiRwriF9hBLj53x9LLURqM9p32E1",
  "key5": "3V4R138t3sQy9qNg1M2itFdVKmrnvGFXbtwNELu5xjAspLN9yQ8tNCmUXDLWKyrAtLDrnqz7W79GhsqNYyVqQRYM",
  "key6": "21nJEVomohzUHUyRLGFZgKfrsZamcTGsVX8EEEmpW7BY895RGv86T4bzvzLnViBFP1g6NGeMwmyQ3YNBh81eN9kK",
  "key7": "2FZAgzCHHNRzNELwuoBV2Q9JYcCcc9Mo1YCh8rqMZa24oTuJXbUFLWv3ygGZbAvRqTZBqxHFzjy2LN7vD3YjWk2Y",
  "key8": "3g2e47eDQJCVGssuVvu9kBJ7ygoqgunHY6Hjs6GBeQdm8kt3zHU81zT6HdJYixogg1fwkYWAYzpk58vrRsjRCBN3",
  "key9": "24S52yf2HATDSnSXg6Fi46xGQ8FRhW1mykEmLF1RBeDTBQ1ecLHezKdHC7TMB11TEK7pku5atKN45mrWWPdCHTsu",
  "key10": "5EQTKgBHZSLNvDwm79a2VwAaAP6ACGDB4ViphcN3P4y7MQ4Sb7gKiuA4joCzkaf3MzPpkaLgCd5CokrvzTSW1Ev3",
  "key11": "tEnw97ypCvKy3jy7SLQ9ns6TzFhjDHqJDBQU3UjHqfopR9rtWFyuvAuXdoxV9ZqmsCzxUwPNzeTnrdYkTqR9koc",
  "key12": "uENXhDsGZuX6M2NP4WmN3phXYeN6g6Kt94pceoMECBrDwWpR2SjNd3Tb9aJMMkNyS3etu8SgRqM623ytfAXt5en",
  "key13": "4AC4phaLfuc8SoZ8aVdm5yG2yTFmEGBanjbanSYKmNceZpgAgtxsymTTksv5TKEPfW6gAiXyqepwAcEvj6w51Pi5",
  "key14": "Jg36efUZgFq27rbdvySCGGvWzAA7xeeva1k7htL1v9u6oC3D5t86aY24xkougsdDaCyeQRNBCb4t58CaDWYiukP",
  "key15": "TPfDYTQYvnjrqaRp9fPzAkfhb55PQFn1pH1REq77JDGDnhHzzZJkhApKzPFYtpaYu3i1DVwUmP9GXtvVpX1ynMG",
  "key16": "2KTgcnzkWeMVVxDs6GZF8pCZ1wmq5tj9STDc8STeRdmPHDnNk3cjfG54JSQUswHdrcqmBnoG8KiV8f3Z8AqrpPQo",
  "key17": "4GAxKMGYSk4Y9hcEkHVVC7jWoBeTUUCZ1VwgBcLAdbQhnH4bVgggyfSHAXcTn3SYhMfb4ePwyrvvj9rP8ouDgcC3",
  "key18": "2EAuqntVMioQAjx2RevK8s3mc7YdE57aifm8SSHDX5bVAXqnv4KoSobUFBuUYE11WSR8GSjTiqjt8Z25mKtd81WS",
  "key19": "5gxGwY6cu6W4PmjLTSCnR6KrM213knJ6npMmCRtFpvoa6ri82S97rE6ZbWb6oWSFC4zGXpU6w2KsAv8JN1aVBPna",
  "key20": "3gBX2cthQYg8BPnZJ3eyY5GHRWex1CxgnM9UpqK2X3MBiqKRviJccJEXaEq8i2hFp6AbWf72PyFvXsvKEHcfrr16",
  "key21": "2mDd6cdJMAe3JQUbw5pLjfkeZNmDXavDiDUmtu7VdQja4paN6yZZc7aiUmmq1aEMWRevhfsGHmM9BreWQQezV3jA",
  "key22": "5uTHWp3WHEbCUYMvWFg8gsa3ymJmxBxxXVVuDPMZnKEUxcoc8gbsd2CumRr3Hiob4kSRh6m22htGswLULJaNzXnV",
  "key23": "WKZnkfoRjzykDQQAq274obUrwkXy6HfoWR1rMNJXsC1QSgUSrrW2j2TEmfw5pppMfumPbSMnVgFFTAqSLU7c9TN",
  "key24": "5Fhgz4qEPxCeKEdPW3JMm8hQBxnTTAwkY3pyxWx6VRsFPow7SMupDmnJQYFp49fKSo2BsdRasT6wpntmSpctfWVq",
  "key25": "5apYRjV1NHGABGGFhjofEta1UtDs9i9sLyjmmZPH3KvxiABRjBk2pgKhpa7CFGd2xdB1VtgAYexT8vRFXQSZE5fQ",
  "key26": "CZSMUayUv9szE8wcJGWspVFHEUqxPL2ZgMJMRNzGTdu5oMr9Pk85ypznW9k5k5BorMAh8hnXgcfm8CJSU26V5W9",
  "key27": "4CpGatjkq5kKeAu9W5tiQvsLxAVsc9ammr3m3B54SpiM4JRaj1oaazoADPA3C13tzduzP79DB5bLFpJBCaE9xgFR",
  "key28": "38QP7qYWfbpQN8EYa18oau8F4xZeRFzRb4CBS2X33dX6oKynvWQ4pRgeAAfRffgJqgCK1hQ1mFcNL2dTRiuQhKh5",
  "key29": "4sj6BZGv1jzMhcEt2mfm12jhvGTfGqcExGDLjh6CC1DhJWewMcXUripg3RXG6cREeeY6opWKArWjFLZBQnJNJkZC",
  "key30": "5hExn48VE3pZxN4o5gbhxAHu2Rj5LSqFwztPdsD1cAyMDci8JjBbMkxWt5NDN7SH7JCz7xm6sde243JKw3k8Eyit",
  "key31": "2W5gptJF7swRjYEpY7Z1eX4RTeMCabErxuRW3JHuX9vWfKkTCozNzX2E9Gy2WhReJbpK1LrNy4Q1AwPnm5BpX4qX",
  "key32": "rJLMb4UbrbbQtojaSAWvXxA3KBhdSeccBMJYRABbk5ejAeABGN3EAELM3xZPbZeFV5tcH5ZYpTcQBeYdE7SKnUZ",
  "key33": "2xSXWnWL6Mi6mvGeBGagaPH1dUe9SHGBoR6Lpa5xBwhH89BYBgvWsg6EhAULxxvQzYWpwQwJkRvdN8MN2TA8ALrG",
  "key34": "3dtfeYMHHUNqsrfNKdaoKrGX7wGwwfmTk2z7n4cwJ4ScJWnc2HtxEcM8WtnnXggtg8YGSkQNNXbamV44BRCCbsdN",
  "key35": "3ytrA4Et3FGp7eLJhVfED16xdn2ZcKRNMmNpABrAwoEaM3AdzFZMCczHHGk6oq2tV3kraEsseCm84vwTmSwvCjSW",
  "key36": "3unnTbBxMqZ2iZ7qf9eWCpyDnncpSym5M1go6M3MaA5S5XjR5Caz73T7TVD32R54aogDTuHBKe33VDLJq53a3xPd",
  "key37": "4d8YCty6TqTi1pUdRHre1FEUVuRVvoF5fmbFim5QnGQV5MJYpHCU9zjASVsN1XapyZjnZdZs2sKkGGmkRJXnHjpP",
  "key38": "2TGkGWkMaLJJssmpfywt4GCTLBNCsS6TH93X5N9gLsrnMp2xAtH2gzmiKRTcDdGEg476ruW7ZHJ4V8ap6o6geRW",
  "key39": "3mbr9evF5UJAkigw1vgMWRbSx3pxiFRC7sAf6zzcMCEthBV6VqGxj6N8jpbnCFc3Bpww5LXWNLbeGxu7cEAyeueG",
  "key40": "2rxLK1u3VJdhk3ERo5dGpuyEPcgUyoGoD3LbqUJ3KmQxLoQ6ZzUMbqZ4Kfrx4RLyYd12hnbUbTaBQoDmqdvEpVKg",
  "key41": "5hyEnMgdXYmdwh8kJjb3eH8cnPZhE79ARDCfgDLGddNF6Q799tcKaKZntNvnPc6Fiuqw63ZrNRWsEtb31476Tgst",
  "key42": "5FoZDvHThz3y5fSAML8XVLhZ6vrLixhBreNYyV9bx6GwXrzZNnX6D6C4SoAkN6h4h7aQJu6qr1gWoNweS2Vv3qvw",
  "key43": "5kA4z9GFyjx5Yy89RYHd8e3up4T53srjovXud39iJheGtFcXacevG71wSgMwZbL4vytaF4DtqBiqHGhT6f1FjieA",
  "key44": "5YvF42W2mehipDjWmRTYAkXaK4KKwtwSoWudRSfRqr5DMpuP2xCVvRmR9u8CtwMGSvn83hMsFggL27xpZJjNDcpK"
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
