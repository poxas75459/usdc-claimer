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
    "5Af4xQtiaSVgC7efSkQAmihB69JhRwuvb7m9ExvZtk1un4ymhET1Uxxc1FACvkMykxrVei5hscDw3NjSwzQRfTs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mW4h8GXWzsPQBMoaaJRy56DxJabCQEdfhsrjRq3HNwWZdgXjifHj3LuHDMf3Xah1uTayAp45BYRUZGUzFXFiqkJ",
  "key1": "TEzuNga7RAQEExQA2FWAs2JhhnhKVLnjah8qWTF4GQ2agAVkZ2FSPS8bpNeA5JG5DkXDZH3sCJYhPbc6bnBxk8M",
  "key2": "55i4puhwrt41EDKuh8gKu7JebFVgTN7eqXW7wXbG22PWJ4gu47YSPgGBM1e78nPtFQXywaxUGjibMvWxGgfBv1M7",
  "key3": "64rNsk38W48V4PqMgsqZ4WaEaGyM4NoHscAR2nFNxQ9dXJmFa1UFP1NSthmc6dJG9t6WNdGs75DmwoVS6vyWNrgU",
  "key4": "eB6N4CgaZpVALGUPiqTPY8xvNrHdK3bCnW5D87VhYfZer7GH9KVMh4GWvYXeqUJbHxgJjfyrBZCAx4kNxjA8Uh8",
  "key5": "63Asx1utaypZ4qr9Xu2ZWKwsmsZheCQEw7nTXjxnVettF449eJQZ8r2r6QiYP1bwPJgdZBiYxL1isAjXRPnMmeo5",
  "key6": "gL1Ma3okBPPEmLqp5zdjwMiYS6U2UpHUtAhuKtdvSyLaz3Ep9EHL3XCohGP1JhXZcBQgvoTtwtXdCtus5y8iboT",
  "key7": "2AFb93vbtxqfAGVKLAT8yDGfK4uuLbKXan92sENWCGd7ZL3MS2VJxRXMsfHpVkG8AzrFLuZZrw7VKQm18nZgvXEM",
  "key8": "5auiDVPS7BM15ioLu4QzXgUsr5s3Z4TJ73EfdgrUmHq68vumoRd6yvnfS73AoBWaTFmPusZ7LwdiwLEFc4C5ax1H",
  "key9": "VUVqyez4zh1GYmBh2yXM7BsoN1rtcy9R58aK4rdbHFtuLNrStrJT5FeH5Bi6hThZVvGLVYkJ1LW6X4rVN4KbxSy",
  "key10": "4MDpgqWPLG3haWoT4FZaevNpHjN8Rt8sYk39r3Zb78SzeWHk48u38HxcYht5CDnhtGX3Co9DG9ybtpt7dzLCEvit",
  "key11": "vHhGMJAiDuhQhMKABUfvPZpK9nBWoqFD6GwsohsCm8ffwEZGNvmD8eRcJfBmVfEParvrwnQ2ZPUncogyefcy7rC",
  "key12": "4qCqPNV5ZkHGKvAhkLqhSRpkFrop8S8gniEarVJEsib22dimdhfFuAdLRh9pHq8JYh7K9QvUtMKgALDZaMzs25Nr",
  "key13": "4eqggTpCtxEdKPVNN8RF5csbhVngk7ZWmiqpumiSUU51KXvXrkoC14T889r57kbsG5s5rRTzLAGYQJRsdjLMs6pj",
  "key14": "aGHaR5kcoi3JjM5JXk8Qm2RVSY5BFuQPAXs51vMbyu717PyQrDLVaUCiVeri43LKom9yUHkBBZgtmoGEu1o38iD",
  "key15": "2o8jiNgBaUteYFgWCLycuNQuMQvJE6HofzJ1ET969gbNv2R6xmSHL922DyQx6iuWjzVDzoBZ5nzER1V9UryVujB",
  "key16": "4nWp2e8cT98VU9CVuNRDk1H7sLb8hjPyDMNWxaSF5xPFyRbiwDaWSPQ2QWj5Vd9eP19DcJzPurggcHNqpzdadupQ",
  "key17": "3WZCnyodzxdFTMfA6vN3eWyhyf6GnXc6p3r4Wrf2FYYbvw928nqvV3YFdXtjHDj71zNdAHxMGVPXyu7hQL1cnEiK",
  "key18": "KBXLJe8tH7DWXyJLrquQSnUp5n5KiN3YWnZQv5MEsJx7RmXeiGbfKMw1BpJQsgSwXho84RcJBzy72uF9xhWDJbu",
  "key19": "2qamKfMt8LPvh8cbmfYwZrVgfYTGETGNM13FDqPrdRitArPba8Ja7353SdZgSeFC6iUuG2bfRPGYsxuMvLavnHnZ",
  "key20": "2hscxuvkget4aXjzABCLcX9sg2TmoYkD2ymuZDHFJnYQZR3GYX8UsTg8A3CA74zzNkQRZqhT7UNYter8obfU6xHc",
  "key21": "qZMttKhGtG4yqHFHCwom3E1hWg31wdWEyR8ovEUKZJsS2xz1Pm1NgJatwnNzMAoehd47A9P91TPzGRs49svkwiH",
  "key22": "2GyDLx8MTE7tWnRe2StsPzdbpD2DsVE1XPL1hKUcNm1VW7KjtZmv5FCP1vZmq3mkKsdiioGB5dVme6awqi2vD3u6",
  "key23": "3v8cb8rNdB4nfmo2otThHM7nbuuB6J39AkcUiLAzfJvevx8fbc8uka7sd2KG6aPChgmuGnsU2UVu27iutDq8fT6e",
  "key24": "mKgUQRN4CAKtZfZ3VTr8VHvqGAj91Yeq9uvg5zZrhtDodJ23HUohqNrpp32RUNCVZgkMPiwsBcDUu4yP4FNe3Fg",
  "key25": "4zuUbYWrqJvumhFJ7BLkiZfhMk8ytZF3hF4de2JBxPjvKfdynmcDkbGTmRNJ5CN6sQNhhw541gxmEZ3EiKU31DeX",
  "key26": "5iELBC1BA2oZgcD1EafBQ32dwVQSbsF8n9wUU37XsxGaP67kxfu8wERxT3XX2zsDkA7xdz5C5Qr5d1WNA3Vxakiv",
  "key27": "3sn55BazBXk49xLhWHsoQw1wKXevvwCZ59RtirmGr7ZPFn4HSPNBeXQW3MbyUbYcagEJkN81VA2tiV14mcnYYxMw",
  "key28": "3BdQS8GZZUETXQ1msMsP7DzdrvRXr1BAeQQMCsbVXun6rswPz6ShQwxp4sWxcJoKjksBQtuWXFpGHNrWYBPP9KyU",
  "key29": "4p4eHdn38gjdT615KqHfFiPJTk4FRLMNtkUbLd3k5h1k2tSsW2MD4AYrLxPHzUeycSwwUUoJ23A9JMRNxh2zxqch",
  "key30": "GkTDkPGjbFhiMmnHyHLd9ArhBoSbvS3tBP7kR2LKGE5UEwpXEh1EaXCudsdoET9ZAevpYzyz2rsZKTxF5fAjCey",
  "key31": "5zqoJsCdUGGZscjLk6fsUa8XDkfUsDu7v7JZSSzCACbJWtfJZG4VyS2SfxMnprgLUVS1UzGFbS8vQJ7t2AD1S4hQ",
  "key32": "257EHZRbEGs48hv1uCTyBsxAWF8H6venvZ99RrkCaGvaiQfuro5k7Wkt89gMoCCg1XWk2Q4mG52zGtrYAYAosFCV",
  "key33": "2oEckGncPAX8afyNrHz4RjY91hDq56FYM33jphc62qxVfkHMeUywBga3evFfdJzsRMr3VYBECRVev4ujZudXrgbC"
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
