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
    "yxmcxVqmTYZppCkgD4ESog73MBwg28zqPVqLoV21XDcj8FttTszSuUzh3Ga3CZjKsQpB6pcecngbuwQb1E8tXq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cq5PuRDkk7vqajzGKeen8Ak3b23sz5TUDUYou5LW8VH4XbneEomFv1DUQCW7wCRxyPuumfYuzFH4JbsCMH8r52m",
  "key1": "JpA1nK3xf5tG6g1YtqskqBizWL4zyctWnuA332xGEqSqNMyHtNs6afE8RtNYLbizPFT6NfHbdD8tPiB3sBHJVfJ",
  "key2": "5xEtttd9XFg4yyPsMmoJP1DFt2mgunjHEoenZgW1pRXVq9ewNXE6zRuEFJ5n5GikUensZYcCQb8RJ2hHqHCe7gfc",
  "key3": "2th6iPHB3vUrCxkLxfrRFnk4h9NjMasCJMmaGKBswWVFcvL5LWKzHDumP1M6ufZBUwFvSYxvWUqarUjTpv88723U",
  "key4": "ty8qbto7jMs62WdQWerB9SEhEYpn7AFyu2fQx6hHTcpKY6GJBr4akUqcrZWcpyDY17An4ezq65BVEJ97DAVPGRH",
  "key5": "Fo6YyJkv4ug4yRgj3KrByn5Xi9rrUDs3YFk1tEz4GkvneZ98bX52MDVLhuSiMRxEXYGNixUpc61GKMpCwZTqYmJ",
  "key6": "5x4BkYAGbNvWQLxggPScLmiqcfC8o3vGYCd7eKP3xGbtQj3VxhzPHXZ7kx4EDxd4noR1Wej3XgXVWdsL6VBHT4X8",
  "key7": "4JzfbsWcQhoGWyQyNhC8PBLgMYprwejfYbbb3QC2TuZk8A1hk8HLpSE8thRA3utSNkqRxnRK7SQ257q2C8QGNdF1",
  "key8": "38UbFFjt9DfvVL8gC5uRJewsvye9y8wEuRf6Hyfi2UVQNYNTNzScNK2tW3jmbD4qaAGDDJwkqSmfZveVi1kVWovg",
  "key9": "y5NE88b643JEW1Dokbxo3d5Qw9ddxRYcPu2pJh1DRPXZjC826JcCn5R7f85SAnzGQppYuHhA2aeQLWKjwYvCGCQ",
  "key10": "5awjVRvyfNRWcCtUE6RLUSiEMXM4mPsLEXD5dUf1FdSJB7eB51hHsAtHxgLtUQP7wMNgE3SaP9S38Hxvr2gsKzoU",
  "key11": "54RUFvzMCtuRcAHQ97pybqXPHGsF2mMLfcrhGWvG5w5Es7w2uPbLLVCyxkaBR9SeMYpucnaohbEEkzesc8zPNYke",
  "key12": "3Mx1SJfAe6guKVXeb7NsrDUp8tmWYT57DK31DSQ2PUiq3NCecQB54afhGKftNbWvKNdo9QvG6tEZT7KKtrdehQN7",
  "key13": "UMq42ZJjYJd6a4iRXpkwq7WU6VRLhDWjUN6aDcnakQfGWvsx4Sg7vFxeb21XYyQXJqEkamnqnB2dXTCYusDCmA8",
  "key14": "2ruJYoyhVwoun1QwHC9CeUgeWcGnMgkYYmmhQEfzk99jefwvnbfRsuNx43rxjn9EpojY9uouQmHKgX4r8wUDjgN7",
  "key15": "61H9qjGzgQLQrNxAtj4zH73wLmTvwaMhPV3MVLisuiviUdGQHcKpto7g6eV1wuSQxAuyzqiyfft7e7YUzpj6kE4y",
  "key16": "3KEjykNmkSoxTCc7PiVygGH8QgoPkSNEZgdok5HXZvw3Rnw5mrg9kS8xD2z2YpxZAma2am7S9ZHtf3Z9aE3juNeh",
  "key17": "2KDPYV8oF1SbTv83TRyRwfafKMYmNeS1YRigxDP62ajvxHwSXrkxoQ5vfKkAKSKGuzHHjKc9hQrdQT1DYh8BoGEn",
  "key18": "29cXxem39DjUvXf8jAuyThLLENaPAB7SDhF8pAQhQo6BeVFhSFNmHPac1YLpDLv63sAhhdtqPdJUd72jzbTGGWUG",
  "key19": "59mtXXWsFLgWTbxxzZNMGeK4NsSpXHjfYHt31x13BqipwCBhoJvRdFyH2w7ZH9oB74mq3FQPyoLV8yRVvYaAEvjV",
  "key20": "hzZjyMy6xkhuo44c6JHpoBaBWhLMAkkJmScR9fovhgY318JNbL4yhs1aRuAWFnipQqCBHuKxF88n48M8EP5ZB2b",
  "key21": "3zUSsERNgYTofN2upRVd7eMLyVojPy1aHhcjePLgBRm254daiX87HsGUjVsE1VBhwwCvQNGk7TACMBQipG7oSMUP",
  "key22": "4Ev7akg27Zv76M3dGjsBHWMQyt7Rs5YzFNEkUBHVME5DjY49192v5QaVxjfBDSm4DixoQNNSmcRNiS3PM1GwYfmv",
  "key23": "4tU9T3cY9wUmFH8zDTKFSsCDhBR95vwnt5WcJrvup4wekfSacAiJLbG3RF9WqHwFqCLE6S9tFzmWTvk9piW36EVJ",
  "key24": "4tWpNnrKz7975bv6beFmtoJdH5dFyq5K6AYubxjSTqMSPXfMiSszZr7oK5Qf3XQNcMt8EfrZPJuJC1GmxAkiP5mg",
  "key25": "Xkt9sY4UPjpHvknZ9dWSPxGXEWxVih2S8mnZxCsfFWDyoitEmS6E5PNrV9BJnLk2ENVJVav1bDQnV8HyY3e2UmE",
  "key26": "3PXYiZzozjhxHfnfE3tbGJvp64w11nD4sjYebh1AtSiia441qgrU8sftD8M3AS7bh5E6XTtS2b8YU4Z2TgvGUKCA",
  "key27": "2vyYPUSsLkzbQGuVRHwdcrzrDdDx8s6neqCJdxPE79jZTLJRtPVXK355vHWyx2FSdbxF2TGUtm2sKWurzSMz24dt",
  "key28": "263DbiuWnKZz9MXAFCJ8qBLG5Yea2af48dPNf9X5HDSnDR4gRoRQDYG5MEpM1wZHPneFUcPkdhp8qFXGEwzPDCQA",
  "key29": "2C8rC4c1DTtvTNp5qwVdQxJLbbCDS2A3RV9usGaTA4KS9FXtQjd9w1kd9mbcBwCUWDNN6ifFo1TJSYhJBt3wXt2T",
  "key30": "U3gTve81n9nPVwe6N3pf6VvY15yiyJgAjVSEfwf27KXjqcnws8cADA816T5uYyiCqyMf4Nuf3SG9ChSSp14NHVo",
  "key31": "4SAjTLcMv4kfR11kteX6c5CKtY6szGHMpa8WtvSRYdwmVYse5E33iJRAtK8i6qaGL8Evq4dH1dgGhines8iByBuu",
  "key32": "491EpxzBc7omJxyvV2yGFSs8SfvP3p5g8nReFPsGa6EYFr7NgXsKaLEAdK9syvCgKVpv54FCD7j4LJKDLth9Kikq",
  "key33": "4xQPDZnE539vxSEoa3SV8ZTCnRSf2SzgPLXG9s8k7WzX2nFMpULtftDrr2KpqrTVD9ydg1t9RwbC2gtzJZ7EE3kx",
  "key34": "49eUNE2VL9zF4bVMQ4DzqZiTKu2dmJE4RM3LGvjXFHot9vpD2Qkpy6sqWGF8MZ2U6Tjzt7TJmQMxTxY5szE19YbZ",
  "key35": "5BCAzA6PEPqdkdgmsj6ZwvJCFLXyij4HX5ePTontsTkNiLSuDEe4AEkrBtCNvPTNGtiVddvnZ2ACirJkzSpyfjUN",
  "key36": "2uADbmiBU79peNqkgdvLFy8J3cKHtKRuHqup3Buhw5EtbWHgHqYyHndMCiBU3C4wzwV6S1tB24gJY4BdpDfsKed1",
  "key37": "4gMVTFHzFkP862jX4rUvPfknC6kpuHd9dMeAxtb8qdrW455VLUbxDgpz5Ca278hWA5xtASHicdFw91oiHbssue9H",
  "key38": "45nkrRfRfhHcyjz78QPTQA21kR52naFxffscCpbnpedHTHvo61AiXFKXP9TGHGRuENB35HHoRoXrmLatHezFgAFo",
  "key39": "5qPBHemkJYB6jZRdgndS4ivNbNCqGsSTcgYh64uwVpAzM9j2iYGPQbttaKbpncEH4ZSyXSwHKYUJEqrnyoY4ZMCU",
  "key40": "5PKPUUuXwwtkGvqNPerHxJbui695x71GHnRYB9un5JsDkXXJ4fhPTCAFKjCdfXa3K7qkxoPs2fhT1kfsv6LxPAWS",
  "key41": "3XzCdWaqeYhXzCgyqcEstQogjSBw8CAnenxLXkQxfSHChGkh8WqWDbsicNyUVQ6zJsx4KdwZzHr3vatw1gkLmE5j",
  "key42": "CTZDwZf4mRJHNdfSU91rdCyjF1BBnYH8jPeKTEWbVNkzQLE3zcA9VsjSibucALTJND7zetvRivJRXgRAyNooS6s",
  "key43": "5fjg3dyefaYsiSCZ8fkum18wxFfZ9Lo4BGM96YBDjvMihnPnvjCL2wn524gYrQnyAnpZrbixN4RWPPNjMpHcMdKJ",
  "key44": "3Nh5EboDzPsqj8hMJ4NExjNVhJPCLcRSGb16VmoMqKGcFxoU8twEkf5f7Vw5RaRW1LQx9AtnwWyxzNX4EqeuxHyA",
  "key45": "2v7imjsY6FiK23sr7a1mJExMuKdYnGxUbtD9azxUi9M4CsUrFK7pMcuxUg7PVpbxXVBJNQRQnguQRf4bf2Fv3igg"
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
