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
    "4LpvDFRoJLnpNmvqJuEpVDtv4SUX2hqyeEH8MuiWs2qaRFExx9GE68GzzLrM7njdP7uLw8AJC4uB5LxUD6gwMwUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j8g5dekmPfFwg2ym8mR3YbcEoix18nT7LNfaqL1qcJaHBXBPjLAiBn7gp3K8eD9qvp6ry6mb5VnxmFvXnEBZxQs",
  "key1": "2AFZqstVZEk6xeEaiSHyZ2n11twNREDCgeMD2pKXF41Ku8w3JCYZyhxA7Pgx7sqbFGmLsLfvJohvGf5AFQ4hQiqw",
  "key2": "4xzbRatUVra7pume1MoZ86cE5PCbCiYx1S5q8daAYz7uTbsQ6yKq4wXJBonYrfhfLyGEJ6QGUy8VBTkwrNqzyoZE",
  "key3": "2sNzu4vkuDJ84d4HymnWghLhPQD31LwWo91GZDoSndvwNAiJmjr7Hk3syLNyDqZKAAL9bmCBAr3XUvGzuRrwSrt4",
  "key4": "4FHiMMK1r1kTGKeSXAPyRpp6F2VDgvY32BVwimVms2uKdnHQHmJv1fKsDBwZA4CtDcLQfeEYvkDnkJzrnSjURSDU",
  "key5": "4WVCY437wnFXboHn7bmsCkbw7d8NLcVuMtNtVmGFHnrCMunE6GW5B9txwDQLfnaxNt8dVpH3Bo8Wf9Rty8HaDbUD",
  "key6": "5fr2BQozWQv4PXZvNHxFkVFU4JWMo7HxiBQ1EiEsFPZtqno1njrvdoxHpizFa2KwVqSciXp3RPGwcsvSx3cGn1mc",
  "key7": "4BTAdCoYPFpAViyZWfvsRa2ZVWVEYcSykhxaL66Zg65Y5Z7N9Kb1Xedf135UsKLBaUtpDuPe8M3iy9omQmDPEsB5",
  "key8": "3ZuAZX6GFFDE8aF12uRDVyosgdPTEiEQfP28ncnwBcqdJhj82u24khipVXebX8yKkCRKwt5U9W2u1NaUF33Ksp9j",
  "key9": "4gqnJuaBsQTu9qkCJ3WXWQUm3hBCh5r1q2wFwiYDs9josogfheMUf9EL94rhpyzVz8ujWWK5gddfnEbi4wqi8eBA",
  "key10": "49Ci154E5CuSjPCdQYfyaJjt4mNVKX4S8y4cwKuktCUKSdHVFUejBuWoWf4cvxjCGRN37EjyvAB1Zd2EZpTxqBeU",
  "key11": "S5jz86J4NeRxYpLfi1bNfe7yM1MY1Gi2vpeNqMmHCNngY9iHQMSfgkd2DkWqtvWCbuea5aJ75R2C1Gm2oxjsqGH",
  "key12": "42hE4zoCvjfUDtWiiW8m5nzhN2zJMLfUvBro8oTqR5U4dGP3mU9zQwDPbfxwgwQwenfepJReihuKfK3bcddvCU3H",
  "key13": "2LKirhGqrG1Q5uJPtUX4y97FmarsvLmPv9inaYDhjpe3Bze9kR4ciUC613fTM4gK9EBkiLDCvDXHjZFHdwa9wV4r",
  "key14": "61ZF1vawNHST9T7rFSpE8zqwJYJBSpLhSbYRPNRQhS8FGm9B8xggAwAyjy7JF6PDffsgsHpf8hTX2aToeJcKpSMD",
  "key15": "5XPvDcgWGbJDmp9rCsskXGEQrBPTruu6UcXUF6AyLmjr8XVPqW8rL2HsRSEVcbM9VHYpbuZ9wCPW6ykgU5V3JcXL",
  "key16": "5ohDcrEN2r5A55FnBgdveCf5L3FJYUZqCKhKGSDswFgJcv3TK87YHLdGj5CAC7NAU2cqtr5t5vsud5mADKscvSZY",
  "key17": "2xLvJoybmph1kwHXNoG2qLtyUSAFBxLaUSSf6JyKFczJ8EepYHhEp8gWJq5x9WmUBEbV2QFMFB5VRtCK9Y67UDAV",
  "key18": "5wT1t8uTU51QK2edLYUFRSWe8SU8b8A3ce4Q45pYswhHdoqZ6cxwWF6M5sdzbG85uSLEpx2fdb6sFzNNwEY5g25W",
  "key19": "3ZmJbSxBDheQipsJfeQSv5HYecDtTj8nKzKVuzBss1XMQCCSiTiYZSNerFjSiidPu76BEAQPEZ1w6mNdXvsBdHMq",
  "key20": "fTiwKucSFCu6T1D3romGAVVQoPov6VD5PYzJvSxXAe5djiJqmTs8cGZULw36wbXwPQt29tkLKJZckgcWhvGrUCB",
  "key21": "5KLtAc9LZWD3UXUsfs6u6Ed2TkaFcgZnbYbWcnBVt55dwj5QUnphUMY22sraNd6JAemFn6XqMwZ4mSPDMWU7QoBf",
  "key22": "5QN9BceMH1JXtDTMq5vS9uJ7YvATonmbWNwyykhfjNbycmyopCWdMNXNPgaH9JuHBSiSUKQhwYZkkGgmwyTGrD4P",
  "key23": "2fcs3AJoJWBUaY4u16zuhM7j4hw8pm2dBZ3uarmccKfELmgC1Qk7uG26Ae3anWBRv3WfZ8zjKT4N7EFPasu8gLUs",
  "key24": "58EqmzYqL9kCbwrfhuv1ouHkpL6RmdLsZ6hrKXxdwq2tpTtKjJ8QaRfSGjB1mrmq8jcEBtSrffevfexdanqhg7hj",
  "key25": "61FSWcU8WRCVnuYjcgUsfjx3tnvR9dDyrj9yLgWKZJPKqQ4VNEioe85FMfiCkGgVTLC1d3JqS6mPr7Vah7waLyvQ",
  "key26": "57NSj6bEEkuiSTbxF4pWrvVgh81JUHWTzvo8yTaLVKftYPQgkXBDm3qwmb8S8Zv2PK5wj7bUo1TUax5fVvyp2V7F",
  "key27": "58YaFyDDtB7RXw3BAHXdAoA2NgGKdmUD1KaVYEFxfigK1WUpS2ZbXuvvmjewEnxM3TE6CUssrxbQ1DzqtVGrS4Fo",
  "key28": "5ohqZc5gpzfiUwB99AP5CE9QK2m4hAQLjfMf86m1dLoa5HGxgKmU38GdaSB93rmeZwWnnBdgfwyF5e4ySoNMTncP",
  "key29": "42oT8bPqkY8LTcS1xua4pjcPtTLTzkdus5uuHjZXqQX9jhKwpVeAP9Fv3q73s28UsQNndYNTmYWm2RjMHEA95iwq",
  "key30": "5MR1nBin52mLdTAP3A9EVtQJ6Q88hh5pPxGsJ8BTgcqwjeVKHCU5Vvs4mHcXSxZ6TjHE2YuBX214xTqsaV3tmGeD",
  "key31": "RN2DCrr4UcyQnWkK9EisKc4WJNeeNy197YtaxybHfMNvvJbwDo8FroqEgBZRTyDMi5hLDYirJ2uXXQoPdmHoj1p",
  "key32": "2w4utXKuk98PRMvwpWLcMvJTPGivwzTJaAW1P7uc1CSUJTrmJrq1JXpTwmP4D3dw6K4C2uMqzGmATFXEtaP59NBm",
  "key33": "3hbZHCSdJMGTP4DUkYmVFLKejoRFVvJbGATGpPrQ8Mvp3yu8Uvap19A1xkQkVVznGqtB7muH4hZE7hvjg9LuQ2wg",
  "key34": "3rUS3BzpcX3s7bTVucyBafSWWqBqFGDf87HXG98KyFV4jxswwKRdhaTYjMZP5iZxYaL22JrWhNtyrSea4vvpU7Am",
  "key35": "3rWkWSgwBrBjbe1xBSQrguuJD1hqHqQtAcnxnLGkqNB8Z8ywGjEC5Jw62gqeiKBBsHPU74cccCRxCnep4xboURwi",
  "key36": "5cPMves9ED4WgUmPtUi2FEWRB6UwiEUrfG4NX618K5xh9BsKmYUbbs5d1Z5hCTLAkuj8LVJycZp2dzeS9bs3j7sk",
  "key37": "KD9FevbNFJTM2CAHbcK23Q6rbLT1dgVbguh9ir7ZNsLpZB74TdvMEzxYKyGTokESNuAGDRPr9uADTyT2ddN3GEV",
  "key38": "65ADUnvpgS4BUKSCiuj4y1tTzccRHjqzZ27DQkydsEfhhqH12qZD3XtXfJS5U53cXgNCdQooznjyYFNhUcH7XkXU",
  "key39": "5zos2FXHQX4CMGSPdb3m4zi9eQfCwzBjgC3nf9siHVtr1EYUzpk4WrY9mLaKjnjoqaSWeqZ2oFEZVpXvhWGa37DF",
  "key40": "5vwS5eCPNAh1BkbhgERJNNMEzHoSz34XVQZFvijjx4zSbuNWTQonvXimQCejmB21LCwXJRdu6dPGAdHNQUAfmSog",
  "key41": "4D4GgNShkveYhwj2hKsRKW3dcLsvKfW2e6Ra515geb2gk6x4EWZVyDwBicKURa8dwn5byNkojEngzUdQaV5KdFGC",
  "key42": "3GEWZp4SR6SdbtHsS8aedfzVpvQYbKExEbbNyZ5DVUSkVqNuc27EKcj3JURSuFX7h5fyg2BbkuKWc8MNTiU5Uj6g",
  "key43": "21Pq2eBMq19FqLBy8a7m8jXMxwigDqEWCLRRTywrwwfsS64Qc5DQBMsvg9DJKP7cfU9TJxiHD17E1XThqYQ6ZD8m",
  "key44": "36MEmjvvr3Drpvg3ZY6FkFzMKm4XBZyWKPJrmbrGB7hYvKhbLzyDWYf5cTR9Seqm7FmXvrYPph9RSdhxcp3Xcexa",
  "key45": "649Yaad51GMtDbFc6CiH19V2jn1hHunyrNG4JPkwYPmK59P2oZhkb1vcTTS5N1x9Drnz6c9aT8uaqZnWvsZHJhMJ"
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
