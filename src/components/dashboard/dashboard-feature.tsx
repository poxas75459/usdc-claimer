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
    "nRkjQnwsBFc2vpWfuoB3JMx1xXoKy2sz1KB3XsTuBpMoFJfSwMtNabcGWsC86dTDktsUXSncvY9MU4LFqZH2qYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ioxZk4nJAP2xoa5hjGjcKvnkv3yXVQ8oXQ3QY3SoAy3xz8Ru51adJzvvYzHqpmELypCNvzfzFbTJEtWAGMRsx11",
  "key1": "3PRMiN5KETMNs1PmakeKH9yaykTiKh6ipVs3GPu4W3M4xo3p3V9EU5GTYPpL4eaTJjm94RNX1aLRKqqCpHQX8yWu",
  "key2": "5tZZANFyRvK5tPrvdhMt8couU3DhDShFNTZRczH61GoHQthtjkCEBGbyJ5MXMK5F2rD2n1URGn34JSEWg2XBgNDg",
  "key3": "4Jh3wszYtGRLYkAt7quxiLVLRRRBFWppi6Zn2ogvkMknRJjvoWdPhkhcMySFDmfgsaeEcRHttyfAEHuVYHR9zUDp",
  "key4": "4AsQfnasx4S9DP1Dpprvr6QE62nJNETVuY1BpzU3f4QmfxhVfbYU7Ev3pqkaPVpoyZcDdQgVXt4LKExxRHiVBfUU",
  "key5": "5h4HCWAJd2YCgvR1LGBQN6rfWn47vb3EFjLZnTJRQLpTsiTE1hCRku95bsFHjyjxracNYWqwJbEn2SmmTVbuUuAY",
  "key6": "63qavSfg9jccV61dchz4jZ1SjmkNvtrhJhfHfxd4gnBkPSDPD74nJsnYEwaRjCgMENMRRgKnbWnopfLwci1jDQyq",
  "key7": "2r4pkC5Tss6zfnfzv3NbAiXbWPnB3VamQJzX7L9qPHVscgNQUqvqKkPs8ChuWhV1TXfTfAaJ7eX6ubxLhyMmjDX4",
  "key8": "yxzzk4Bmi6w8TZYSE7UbrpapLzrD3Hn46TTQHiFtJoCKSkqWPgbxhfB2atpt6GrG33DnEeM5M59iodHzBeRpDao",
  "key9": "5nVYbXbwV6xHQzUTboVGBmhqFVhzQ6i7GbWfpLi9vQ5nPuRrb4736YzxctLbvXXkx7GLD5R4VFKu3gCeorQWaoXk",
  "key10": "3vDFH9wRCzT7X3MNQTYFsFxTekg2QJMzEXdyYigWDjC44tq9iViqWmWVHZ5a3MM2i3jN8SWshpBPT4rrrEHD1DB6",
  "key11": "3r8b2YdyRtmfzsjwdXgzYqxejsb8XCNqPzRPEr1f4aQ1NaqWzZdS3RAMrvFNV8BHJBTLew6xpWQbKKdr6nK4pXdQ",
  "key12": "2dxsXrRwmiYd4ube9ooehRRYr76mYUGLEtjjhUJAE73CdjeGYTUAeJuDn3h5oK7eMe3K4kqGEhYAEN9gBHCfJ1zT",
  "key13": "VbQcdkiaZPkfaSmQdKr2L6G6Ygi5WDstVAD2z9uWPxerfWDuy73yGKvWrqo9XZ66nbRS57pBpziMMooq8UNiMmW",
  "key14": "3DNMNj8zsi16yx77YJ7JFAmJGGJu2CrhndrPVHSdRmdctwEV5FoiaRokiBxcuuWB3xFvgSbQ67eovWVU9D4GqUM",
  "key15": "3wscFmS4yurDoWFwZYdKKqBg29YE6NqdfTxuipmrX54ZB9QYDHbN6333WXGXTGAWhRxQ1EhcNy7vWqNUr4qs8jsE",
  "key16": "659vCpZQsn6kJLixGw9qbHA9ZsoXD9DTJbQPdEnkCnJWkm7vEWSaxGotLsiF5fmrokFA7rYoUEP7TMbekJnAUrVc",
  "key17": "2hu6NvLRAaHSYvKgdbK5fi8MpQjZj1UDLvu2pzhZY5x4Ee6EHo43B8fALcmr5hpgng3Kc59jypnD6QfeT42ZusVS",
  "key18": "2tPoNSrcie1yAoTaKrYeuimnrLipfR9Wju8D9yyFwR4wzM718Etugzbe5Zr5vPwRCvbmkHZBLxQ5mv3BSPziNphf",
  "key19": "k3LELD1WfKnTicb4Zqi1DBdSCdvbYCKzP5wKWAXbed2wmhnfkG35YBymPWajYxBH6h3uGZFDZD2Gu1j22zdwCGJ",
  "key20": "4iKpon5R53p29xmMD4KaQ71vQVQFo2AGcrh4Xx8uv8q5847abDxNehLa5tzBuywBaNQiajvb2i2sn8XCwFK4pGTK",
  "key21": "5fFVVw8E2UrZMNoZiQT7xsgvECiHTQj2GZHy7XKQXug5E2usxY4LBYnbtuHm8TJYN5FTUk9HnxV5PfHHqmaovvi3",
  "key22": "4zEo41D4oVhVf8P5tMu1xapxXRajoi4nctmJRhq8DeVXJcJ2by4FkmpwJpkzN9FXELm7MLumhM9LK9CteVruxZG8",
  "key23": "5taH3SiBHaQYhNminJoLGaYYg4sb7eSezFxJi91wrgqceCJVeZHgyJiV4t8vUTfhMYf21Bn8sucMbtZj3sbUh1Qt",
  "key24": "LxE2vK6PhEvdds5BbAXc9zYpUeF2eUvDT7qRr1fFjt2258aBHSc3WyydfnaWL6AeyzLLYxRzHRFRSWnCYZ7XpN3",
  "key25": "oECac6MX9tdB47gapLK5ifGnevo2nUT4zSZVr7hNmP44vjK3Gv9PigMovoBe7FXh53rN1h65GLnAQZFVZsFwP7T",
  "key26": "4TnHkDBHYnbRvwFTg3Zu2jDsxVQn2JRG35gDVqYWc2CmdT648bTnwFKzviXcJJJ4GuJ2WaZtWXe9gEXU4zMrBkwE",
  "key27": "48kqxGfk9P7uJx8GK4Y53EcQ3xLHQWgB142GRAHEUxx6b5xSCnCEsuWJcitBPDkbivBYB6jPA7F6noJene7YaLcf",
  "key28": "3tssWFGZkUpBpynPHFkb75a9Y1awvSFvdC5hpK1pMZGnZgurnWvoXWy9iCTDsWHniidjaTPyJmiUBttQAsrkDnKN",
  "key29": "3BUi4eHyw94bZcuNdqYbi45qoyyHVf1ENffMbA5Fdpc8x8WV1hD5wDmkfsVa4Q5ZQywDJg5WWfB2o3LzgoPDx85o",
  "key30": "YpBhZdvStLHqsdNcvd3UQuZBL6n1zCHarmtYmf8gsdcRFNNVkd4hmUae669y7LieqqLgnbBob3hjmkhXAktFihr",
  "key31": "CJcjCxr59z5NKWJWVo6qSXYv3KJi3DkAjbJZHGafzyHgSnyaypDhtNgMpLpssGfdpJaFHq21dhbc1BV9tVMUs5n",
  "key32": "97tWPehvLXxsTZGFU26XzEAXtifsCPsVpMaMCnEgpKzDTpVR97t4JoN6SbUBgWQkSXdfU2a5xT2u8yvZpgZFvFb",
  "key33": "2CaAd1dDASC4xL2pPk1Nj4jeGvccWkf5deVwHGcwWsW8T3fn2QLoeEdwGgFQGHbcE3pkuQgaNWmhYrCBsoDq2pHW",
  "key34": "3xhK8EJMTWk8Dh8GHwLZkdXPXyQRhegMwSE3wsyGtaap7SMgmaQdfEdbCDvNQxDHZsoPM5bGQaHr5RxP5tBsG9WZ",
  "key35": "4wjfwiiYHyDdrVRQ3hecnAsRzb6ZBErM2UGmDspQkNVec8RtTYP5qoDvs6FY1mNvshn43gbxnykLAABGop1dQDQT",
  "key36": "2uCCZkPL7vguBTV1odTmexGadu83ZJa2abN9sevf4NTmokq5yDLuMeuTK4WBnk99WmaQdHUA3dCPd5xN9Ua1kfJU",
  "key37": "5cqrtGW2cqe26jEcBy3B6fidoxzDZmwdskgJCj2Zs2wAFbWCv6i6wU42N6nYYPqCpfVVtvoxhqNEJHoEjfBCZctT",
  "key38": "58Y514FDt4AVmX5VeXjJJ6jh5TVBQDuESbiag42b7FCJbNXVnBqdouy5kwvsK2WNxvzBXPjtLWCCxGe4BLJK9igW",
  "key39": "36ZYNQ2udeXr3R85SEenn2BbKDHs6qNiPPfJ8xiD4WTYPgdkGCnENakBXZrc7shXmiz7GAZbyyBXwadQ4vTKs6x5",
  "key40": "4CUv58soEACM2K7Hurz65LvZ7jA7fgHN4CmXr7q2Uf4j2DANh6Zg92QMpGV2yHJS1GxBHVFaV8rADKca8eWJqZoT",
  "key41": "2cjWPuj9Yu4QetWwB81eX5iGtVjJpJfzQkngWcwddmzk9nznLwJDnUoTonvWPvRzcBCCJ9Qdg1mnL5Fi9TiPoYRy"
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
