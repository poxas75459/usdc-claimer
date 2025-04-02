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
    "4wbTX7QFWHsiPrhTGE1oqc8PaGDWGPKusQ9wdfNhQiqQt95oBM7SCH7e1qdjtyZbitSAxBLphhUxHLyoETQJY3aH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24cskkHUqQZhmQk5wGgzNcGDRCwQpFD4kfy59jDFDXQ8Bmu6ispzhFQHCVqkga34EsygTph7A8WDyYr6SMHd5Xfo",
  "key1": "5U3sVHXNi6JLWt1Qk1Hs7QLuSYEF7C6p89TT4admHeGwKhtBWKJAQojBU4NNSsr9sVHcFFRAGHadHamEP5UhdifZ",
  "key2": "fKbqcE11irNdzLeoiy823CfvsTDrnLHBmDrTR3ZzyCwcSFePSi47RESnQLB39gvAx6tSx8QfQV7ELFidVtHu8Cs",
  "key3": "24DkomRLTps311WZptGX6kGiuCHBTmfmCzn6sd1x54UnRmRFfnURgCSQhamhiV2vJ2NvT7w44CV3cUPRpGGhkfmH",
  "key4": "2XGVfxzELTxobQHR68dLwbemLQHLzh3v3p8KAsAmdpLyLGCPtfDJgLUu1GB2vLqCQhunANVfDnK6aYK5ckTrVES9",
  "key5": "4bBPmh7JCaz9ejaeLs3maMc1aoPoRm11QLrATpHoNFh57fD9mhfL54TfSuqpaAmyQsmnPCHZYLZ9wEQFtrez7Wrm",
  "key6": "3QEd8FpsM8c6krm7pCE5XAC8kEyeGNxd5jfV3NNNyhaGq5Jip9Zqe3BkLWviB1v92zBh7EmJ18wRuEkEV8fcLf1w",
  "key7": "UoDpVw9hGw7AyrhQcuJVQSLiQax472HFPmfmRjHt32adQ8ewkMoFriZLhsDwm5sZHGRcALk9hJuPcnEYp5EMCh1",
  "key8": "285HqR2RzDwbVCVfwhGRqh9aoZjGXeayYxyzPCsqNQ7TpCS9GsHGMydF58CinC5VFrRYtHDyEsVhFQeFAdrXmQmk",
  "key9": "4JQ6WaviUCRdgfLGdeuWaR2BJF4UyZ4SEnQUVa3TerKcShMoVq2Lv2KuoRrrvUEfw78qqWi1dFqAzLVTn41rA2bN",
  "key10": "969Xah9NpUuWrH7J2LcH9v1V1iTRTgYzJfU8bVuX5xS5oq3s8qZsjqS4yLUTUFdmcDZuKwyENRScMtKxb8FtHdt",
  "key11": "2r6saHwSDMJTfwG2MWgTmkFkqiS7UVS1aJVs6LrPxfvNW4p1sMJmrsWhu6y3KVm6WEhEYdmksCq25y6S9hUpk7Zi",
  "key12": "26izNtGzmnkFEZDjcmjHaPGeLHDwyvw6zUiPyPiULhUJSrpGrAEqTGxCsrhEVj9HUb59tDp4LC5yK1oB2CfkD31L",
  "key13": "5P65vV8mgRLDd11aobQ8mdnkxiuEMh1MsYFD7K7VAVNqhZ75ZsyddjWhj66hB46bqSeuTpPxDM5wqtD77HTHnpKi",
  "key14": "4zqD8HQFxCEXHEwLWAATZ6D1h9hU2Hzr7HQTyxP511eLhxmvtag1L33FUiPftgqqEEf6CRzB8ywXZY1eHbzS6UCW",
  "key15": "2sMoJQPmTRVqUuaUMpS1t6g3F8HteEwWa3RyfCjaF1YxVzBWVcJHXfnKQhMLxEG3JAwGYmQnQfqr1fPYj44NsUpc",
  "key16": "7aEm3duNyF6aMuBG11pbL4aFUWTT2yyQ9QctaK9JaS15bCovqsgTdgup958B6MUBJ7Sxtzsknr6DRLLLUCuVRk3",
  "key17": "2c2paoUUryVz7c8wPpDEKNxsjXw98Z1X5bebFB3wyBrYugy3vfvkdVdhKKmL7xp5E3pztrYSwNFbXG2wu9jzrasQ",
  "key18": "5ED3DykhxxEbkBmUSXVfHiESdA9k7TTEgJwU2hNb2Coi5tiVhhRB65myiKneH7FsarQXyWU94Z8jepf25d2Gkgnc",
  "key19": "2DD5QFGoSZFZFY1pPs7iAVb3RYt5hFJmHapxXGKxSfpMG1ib2T5vtQ5UDEu1cJEKt4eGTQo39A7MWfS5TpT6hDj9",
  "key20": "4NxJWrwFFpEqqsi2VhRGHMa7pPj3d2Z6Kgx5nCtUZdWGYyEt5UHPiYmcHDYfyLNvgJzzf11poh475duUzBnudrFM",
  "key21": "5FKn8jaGQ6AXZ36d2hDDd2bGawrfRbJkgSGscRhPugXqWJqVpWPjeq1pXxbLYiv1wh7keHUeDhPveg8cSKA7eAJ1",
  "key22": "2kHUDmSXZczN6Jfu7opMbQSg8T8FEjrgxAnzkoUjY1B79djxwXSQaR9kn7SNYXNSuHUVghbYtLRh48J7Nb4sPgVk",
  "key23": "3cyoX9fBWKq8rfwoNusEQHVSZoWmUv8AgRhy44cKwYY1isLnbw5S311PriPLBMst7Z1FCtHZkz4K5wSr3nPvqoe5",
  "key24": "WupDGSdWj2Z6pWsm8zWgDbcnCFCJcArFrX4Fs9qEQ9DAfJZfA54BWhWMMZnp8AMxx98XiyF8JkjtqLy7Nm9EFXn",
  "key25": "3DXSyqCpfdD2YrunoM4hpCSGv8CjWznGNU3SAKjpjqwXdGWfGqTs4QuMa8FffiRWpWvvqyhcdSvpZKQVjkNp78Ki",
  "key26": "2cmAJduBnkx3omYKUuvE9qXL4ShbFdH2UiYBvLErKvi5aAGGLjrWSEjfNsiUtsw6ubRZjW9hZwmo93T7mGe27nDF",
  "key27": "5jNLRtZnteY4LMr9JuWViTJ6wSjpDyFtSd7ZGF7WhCRuzz5eph7fJ9BnjkPwqKnpLFTbmpSEL1aENxCq5tkiyVAb",
  "key28": "44VyjLqJLAdS7wNGbKkwkqwumfaVrcu9wCgtkLLQ2NJRXgAdV6m6qGWAdkjEkTn4PpEFdn4LcdZYk2gR41iocX9h",
  "key29": "5Uri5ALpYVLunSEnF8nERyPPpoS6vrhBakW4CYMmVC6SVmHpSdDhe7f5Pp9bmFYVRuM9nRJsCF41D81UVvG4XaMK",
  "key30": "282G77CkqpqPmzsHJkd1E9GkHFtFjUuo4gYzvNvqSGFHXgfFoFakk5fM99sAT7CUGQrU6Jw7SarD3N5HKYB6Cidw",
  "key31": "59R5W3MvJ2vUYfGFD9QbhmjLD47KpU3cwXdEJFeFkTME7uHAtRMQibXfACrxqu5CLGaL2mM2ias46t3x5FnAkkxp",
  "key32": "62RKV47L3AmDUVoa8tP37cHN9fubMvajeHQgNZ7FpHb9yxMJkqU33frh28PoSXJhyFHyG4xTgjwdpXrtpfyzTit",
  "key33": "4mRF3Bu2a9D8181mP1vwrPvibazsB4JDh3cCUt4d3VtVPKf4Tzrf8AXY7Jcxhtn6kckbaiwqPPTEHZ4gYA3k1QQd",
  "key34": "5KjggmtjjPLYG9gwKXHXer8z4BZ1ZEXPKj1KZjSkorBGU2i3BUey4D6CVcP7nfmHdRn5x9eHXUYE9Uq1UVUssNnU",
  "key35": "5BE9mJ2mS38RTPENzgviyj2Mp4L3x6B8mFuSBnBSR1znPekCeGC5f5nAhX5TGCfE74N4Etxs8rFJt1X9fL3a2zeV",
  "key36": "46vG6Q7KSQCoCB7PSSZjNrjxZyBPycUuVpzXsko9VJt2CAmFu6k3uagPzGjpvp5mwr4Bq3zPfWr8VWsQtumAMkAK",
  "key37": "3oArA2P7kWksX3ZspRmprdJZUch4FMX8y3JSziFWABpYgRNbFEoYgkbxCJ8EYEacKp5f674LaMApWZtUYaahBgQt",
  "key38": "2aj4xAYcQoXK7WCZYdhHV2Wwrd9H1KZcf1vq8teEzfvWGXgWrXDiFZbS5XLrGCXc7XNwjZuyMHYa8Yg38aibmjRL",
  "key39": "yn7dHKEA66L7GEaSJBY5oNYDZ9WcjpdueXHmGMBfA6tppeEv6kxvxwyGAMk7LnFaExvkgSvpDNmV6ZYLP3Trf1d",
  "key40": "SyijB9QRtwDqdXuLB17F357G9ZbUqgybzSobWrbpKwbgaMNBXNCEWMM3TXhbabPPAZ5PZvCfy9UbMdxnA6br5A8",
  "key41": "d2BZakB6edPPsf8MoHnynZTweXzkc6mf5m8Pr4Q6VafVWsonjMJiNFkV9KAcEaABAPTRk4MMynGEpCwqVJXLDPy"
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
