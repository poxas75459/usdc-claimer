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
    "2ip58m7GRdkayR6ZgjQSYeia1sqVxMzYYbp9mFMjC1XVHhaugFQ7TaGQxDMH4e3BY4cxko1xNxruJ3r28K8EXdfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EbgvJs6WCqpxgDRwmB6Dqm12mBLqpPpLzFhEk2nsf54o21aGMiokTMXp2qkiyznSrUqrJWnuvpUxyS8SPS51xnT",
  "key1": "xMMzhJGHC7BXpJV5e9RYdejG1uLYNnfgn1xfiPjf1F6fM6ztpKxMPY6oKz9WopfiApX7qQngtuN9cF4xES3Zzth",
  "key2": "4nNQRyPteiuc52Vbt98tudQkDPhXLhfGJMAn7WnT7r6LTyhukVWfSzqB27xpUZ6kweUjEMYL32i9GrwYX8nu9AUN",
  "key3": "4LbycGviWnpxAzduwW3tmvs4Rc1QT4fJWJcRqrT5AeTD9xyHFXPGhYGEiFoyZrGAbUCZzayoX3pnVqXeVrCGVJep",
  "key4": "5UBkdjWkZa3TymUnw3Zz4VgbW7oy2ZdcNgXRWmw3vvLMjXJ6UVwSGdWc8sALcjCYXAXpu768Wf8YrXmdaPGVtBrP",
  "key5": "3QKw44S988M6MWbWe5pKWVPZNFRw5vXGgniYoEr1DYRFXHunZAWAgoKnKuRktUttJ1cqC54YQsGEjgtUHPeCN86a",
  "key6": "w7AyEkHwax8X1DawfV8L9rHqQZRkb8ud4x8mFQKusqZyS6fPo4ArhoZFmjpwya6S1FyCKC2u9Q6cimtv63htsFR",
  "key7": "3aUy1ddMsws2i6CRhUu5ULDqHSguUdVvvKbrmDa6jtGHs6iUK3rB1VAB2Ud3CcHGGRGHrcMwHcUVhguZUvGwKMPo",
  "key8": "29jED314vKwKg5ZzVgXUB1QS7gJ2XKRVcT3jhqcZhSzmE3kvTgNQ4wWF1RBHEDQQrYDZMjMVz1R7zw97pyXX4EWB",
  "key9": "33woD6XZunGayCQtjuKQzZoBWGwoET6MnRdX7yezZDiLzwQ4R1Qdc6sgjm1ChuMMmvPMCNKVxsMbQ5RmzzcJbvZF",
  "key10": "2WXU64ZjzsyA3nm3Bd5t7df7ctNpENvK3bVCxh76buyGuT7KKpKSYSDuY5aMpdRZSF3HG833yccTTGw1tQAJ9fpm",
  "key11": "62up84ihGktExwqm8cYuTk18siAWD69WW2yLvqSLYGpmirY4UhVNokJTWc7GJg2S7TgsAUvGxUxw27haTNji3TAN",
  "key12": "u8Ks4VBy8hW5fdcQHkxUL3HizmFZzk7F9GBupR4Eu97EmdSvQ641NHHgRAE5KksG7wRxHqiP5ATJMLSGBF4Z97s",
  "key13": "2ePoULCJxmJZKzX5vemEu2j8fmwZBS3id5syJh7puM8DZMsM3s1KT23GbSsCrq92zkjrK9zGJUqratZxjuagJsva",
  "key14": "4fKQ9roWQjVqqazyNjh97MXAPV4YvNKvzVsiCVqkdTf17ZV9z68Z1K5tvAxQ4nxDz83veLKmCYV6Tn7hmTSvKKU7",
  "key15": "5duJxT6YXBkFEHuJUhfEkXsZN2xqocufT5kwZCc33Za7vDKYpqvgAQFTpFfuFXLgMAy6Q996oU8b3dxsJkCX54kY",
  "key16": "2dqDRQKjZvNyrDj5RRqWktSd1rq6vz8N65fvdmpyUEKTqTjEW5nCB39hmAAA8ozywBzeY7uJM59AEyLCb1WyhWJu",
  "key17": "32i5HJsqfjDFAKYQe6EXxeygL4Xvey6ZTvdtHdKuNcyvxZ519Guzgm5FYn3BNgyVmHgXSf63AC5atNXmf1QhUuCJ",
  "key18": "4iNQPDGhP7TJuhwxzpcWm3Z5X3H3zmc2BHrDhBF61DSLqRVG8odLnmtNzXdTFGfZnr2ivM8DxcLGQLTqQCXrqWhM",
  "key19": "4SgCPtiHfBjEZQRdsFjxDHxvWThRrycGA5Tdg9SDNJFs9PGj1emGQvCfJaxpBbsQbbFGETockTzbzQ6EU9SRo54g",
  "key20": "2PPpay6c8GWKWLtKhatXbHT3t515jra6hqStw2tSt5zs7mhmDTp19oS4mpceqto6D8d4eEY2N8dHNr6ZS23fw5YS",
  "key21": "4wi825TyjPSCWhvSs1ytJXuCEq12goEz44WjM2AgP1WfU1rsvAsyeYH4hKzktg2aBzVYzPbakq3vCH4kpkH2vMSA",
  "key22": "3FbxAyVamzswTcnwaSaS9AepabVAs8Rb2tShLXmjdyhkoMqi4j6q4rQh33wMccWawnQ2CikjkhgBpsVJAHQc5Kz9",
  "key23": "2DzaUfd5QGotsS4EAgaz2c4GQCn1mUhdgRwrEeNq5fcaYDGBc7j7PZWvkGBSDKXULgdD4EKCEcn8kW5HzaCzDDzq",
  "key24": "61a8wQX3snKhPyrRi5xjXLQVkDqeVLvgd3o6FQJYAB4SC5qFCt9rWhUXEzdzM2DstLnpZ2p94Ji4zpBHXBwhphoE",
  "key25": "2rAmwhU8j1SJL5iwbNNwAEj5goS1irQCknbGaGQfvuBMwB3JDyzhjSpcE1Mc9Mid91Kr6EC4DCNiTyfE9WHDpWVf",
  "key26": "akinv8bkR32kiwkG7tdgD2Ud7DYLFbpB3JJwuKTrV95dmYz277EEkGLcLrExZeK9fh1QbPwbzVCCMcfro4osaHV",
  "key27": "22m8mu4ymdb4RooTfNYLEnh1nQ3tk4BuGyv1LSdYTdRLLuyPGB6g68xJPsCGydcoJNYeq5RSQxhZtmCaUnDT3j23",
  "key28": "3gcLnD1y5DqvACVBVbiQdVv4cGry184t43hF8kBoT4q8a6nefojf2A4DHhxuCZCkuZsnyqxjC9i8Ti37VaeEW3rE",
  "key29": "Aj7Q1osZFTaFQdejqvPssrjb9HNgSwPQSagfkkQuj1jEWPoMiubp1CfZZqNw5bLKqmYpzi47cXJtyEGeCfzkH51",
  "key30": "41ssEF5DErp3GNxDSi4QkddagQSaKMX41kj8SyHr7yMzKBH4cHp73ZftdtWi4HixhDtJioZotpxiRtaYwMskHyDp",
  "key31": "tx1Up4Q5r8KtSTxxy114wXwxEag1N6E4cfG9urnw5GMkfcg9YekGtntwwUQALNjZjFxerJaN8CCY5kVi5eJL2A8",
  "key32": "5nVh7KeNJcxTg5fKVuVJy7dFDx79TjS8Lpxg5L64vPEYARANwdj7BFMgmsGTT5XrNyQedPvSnjMB4xopmUGmdQFg",
  "key33": "4w74FHrbicUq6L5kmnPfTxaJ2zkZu9d6sVZ834gHG7mWLiq2PM3iaELBhnE6vzC4HUbBp7rUpCBwFXMpiJqtRmAM",
  "key34": "5GmPu4K4BWSHFSKXBSST19dAPV9Z9rtJPSxcJqNYg8SY1JkGXGwaiSTuHX8dwXzhi8ma2sx46DWZwseXPG89LsuA"
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
