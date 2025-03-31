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
    "2AVoaZEmmejwaX8vgVFaDubpYpkoMXHzm7e5Sg4WxNNthbHdTgPLoAw7A1k8W8osqkW2T74TLkwBPS3ghq2A5icY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31G7tZUyycVRUHLGF6Uy9wx9xKf5kQQFJ2u5MWuNR2C45Tzbpp9k4quR1KPvTxQsuvDnbGgVeCrnyyoLdkxpcLVN",
  "key1": "5CLMro9vmEjqgUngq754SJPWntYXoAnn7unRbNxdrTsQnBR3d6DwjxTtvr5dH6FwuuarQnQhX3QBjfy6L3EKcXVL",
  "key2": "4JdSBJpNZgaBVEUSzmDWhvE9qFKehzZUowfR8ixBYdaJSrMF9ZwywPo2hFwhaTcLsLV8syFYNgQ6wna2jDaCeRR8",
  "key3": "JvD7BPsxzXjLRNxkmRneC9jy6yewu7doNKQWMHc4zuo2xnA6pVmfwp8U52G3PNZn8GhP1ZXAMLGky8BpBG4YPkZ",
  "key4": "toWxdvJjBpPy4Xj4d9pfqkyVUQgaNubDZvifBbirX858ge6fEwhSBZeJweQV6MrWzLzZJW1nosTeRb2ELxX921T",
  "key5": "2fZ5VoFquXAPXGuMFqn5rwjgbstDmzFo393eFEBEN39rRZW4dumiFGSM7WThE3pNgjEAwtnrk264PW5HRWX9wGV2",
  "key6": "3btQgNTppbe4HnicM2AX3YhKmdcnrdjvuz3rmVXMf5RAyFGUoTxcCphAzjmr37fG2DdBYbKSc7iaq2tJDsxcQXz2",
  "key7": "28MYodzz8YRaDC9w5Xd7Q7XuiJmzUSQkcQT6UiLywga5BQfR8cUZZGqePQLPcRvBrctvhcgrBvvooeFLzmeVjeAS",
  "key8": "3C8HChpzqYW3TwjCWWVCTeNrBBpBoAg7NmbXX3QRC67qestvKBgNPbPfERiVKgwZ9PEnfxQUiasLgNbdLJMFHZgf",
  "key9": "u2TxWdovcnDH1ZunCA5EToFFZadC6Sc2zTUZijvs7HmSrinCW8jkJAnKWEffPs1VUesCgtjGdPvHQ7s7QnjWm1n",
  "key10": "2Wdb56zPKV57qWA2JsbGotemyDMJZEhbdoUHKkNmBHAFnixJstXAX13B4E4M4Ejh8MoyWViAzmSQMh2YTaLi61wD",
  "key11": "r3G9Nonfy1RcdAugWh8ayfvc9mZLPqtW23CMR1BwJHTs9HiJuBBDVPmmZo2CQtyU3BCnum9bPsDdbzNBiH2K9DU",
  "key12": "2SmbaAKWwBRuCAGipPdHkgejtxDPrUKHKexy56VxAD4rTbVJQR1T2Er38Q913HQM7vvmmgMCkGqramsrsKNG5fPF",
  "key13": "5emVnV6Mm5MTf31YYhf7nShcf4dNnFHvbtbG32Rt53HEgCcB7KiFEq6mienSkqJQY8CjtyHt9tDVqZjMkxE2ht5h",
  "key14": "33Q19ZZdLCKNHEExxAnQiTWwNqh2gyQ5rmcewD7rQZVsVmhhuGN5kBsbiKJQRtsE4e3oCB4SMpxtfGb3ZVsUPSUi",
  "key15": "vyzZpsr3zg7AoUkv1Z5aFZwSaapWXu5rZFbXfFwUepyFFJL5ujGk19YPmP6kg26jyHEMrPSoNC5cYhDSaPiWbNG",
  "key16": "55ykTJv1BbjGo2SrwWSYmTAtdmAUBRMBsHLFG7rfBo4F6rhQpNdaBo4ZX7XaYtFboc9TNypkXmkyjS7GtwgnR2tv",
  "key17": "5HZr8FjLYrxswXqEWaKtthXewCt9XK7jRAc5ZvtNRT2cGmzof1qs5DzQTzyfbXw3ftVVGdMaUC5KSDqZufz2Wjzi",
  "key18": "LP9T6tVe3Z7eTtkAxEyfQFvw4Gff2h6dqfxkNK7TLAENuyJ6xvGqMxwJuyqGf4uQpyND3pyxtXWk8nUKgX9kDNa",
  "key19": "41EFir3SsheKG8qyzEtLJ1Hme4CxWDL4mBaKvwKyQN23b2BAoPeMbQ5egUEyZVZ4QTdWJKSBjniiRaF3KRmpVT25",
  "key20": "FbwDV9jsoKZSFoB9TfZTMW4gHtLsFZowBfA2qUjG9xteSMdDg7GLp7jwpmbRicoPhbFjxYziWaQsXj9hvLrDmY4",
  "key21": "5MyhWVtbrEwcbyvNkMgF88xgZ55nr2ZHzdkmJoMax3bVooEszeCzretxzEeYLkwQzvLxPHYiHUZfxAscj4nqSZ14",
  "key22": "5tuwd7ezUMqeLT8sHXQefm9J47P8ztoz48tGVsbtKq2MFBv4jFD42hoPtWyatUwDLjxNrLRZLt9opkwP1FquzkpV",
  "key23": "4AsMPQ5qjSvnXuN7GAhzsLHgRXeYaegBRCHDfvYUL9BcSpDUqzc72oiCU2xgANoybgkH2UQZcPYShpruDfaQnzPX",
  "key24": "4U5o7trxN2yd9B9B78T66mW7Hk5MTe7TVJTXHNaQg5zRCsBkzJLMfNuHsrMzPRLQRamLYo1LzkFXZAFGKEh7cLTG",
  "key25": "64GP1pLiinhZCHBeJDacCfTaJTs2dc4YxbC7G9iHWyw1y13k6UDN5d51dWSaFPuMKYj9pZhyfzcQ7tkCaa17oUdJ",
  "key26": "DDYaz5AyZHjZbipV7ZDYLsnAEJbDenFG9fLpvzrSUW48yN3BHbys6ndThGSNYB9YVzhj7FukJM1DsYXX4JUq8Xn",
  "key27": "4DYetKgdRfjcgpfFt5AwmRJpJkkZbRsLCCTMSzcW7nWpk4DxGj3d24Fn2EJqqLPVbJG8SqFAPbQug5MgxaFUZf77",
  "key28": "5rvXjJKE6otu92ALVHNdfhZtEYSbqevUtYVRU2uVTENosGUH8KmqHYLPM2NcMRALSgVfXkLcKj3skCMBqLdrp8i7",
  "key29": "5Z6j54oD61u65SnqHgaDt9DchmamPZFxj8SCtGAvPMNSkBq8fBf4YptZqnkuEGdd49xotJu9tqZDBG3NCerAzDVo"
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
