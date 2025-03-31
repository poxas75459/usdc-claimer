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
    "3jbwXVjGEYVyp1Wd1GWztifPePz5obU3xmLTzTQ7SuyTReU1h7bgmjfuDUc66jUZn8L6qgNTkn7242c4TckHXVyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aRVjqN3EhrUM39Jax4gLjncBUydCu2m2swg9SDJ2xYtdw41aYau4pzYWqbG7NkcR2bQQ1HS9HFu57YSoEeWCLgN",
  "key1": "3bG33S2cfr5ny7fEnitARHoVi5xyYWaFkxuhreWNYcheKrJ2Qg1ZvW9FCFYuFnN6m8NPupAwfT5vTLQK6UWZwxaV",
  "key2": "3bJuZskrwptWqYi729VZ4LXMeH1obNPT5Z2g3Njat5zfjznq6RchpwcKfTpgjER4vyH4rN25xn4MCfRtnQ4y2koY",
  "key3": "5JbWzMCQm3XiEcV5fG5j63zpydvqVy28p4YsBcJG52eeaZZ9z4QUsddk6QhFznmtu3d7aX88JbPw6ZXpJK28xQkU",
  "key4": "3474MoFKrReAzy8tpA2zxfkjq6vAb6Mu714oheSnyxAs7VRuj7pADjy2Rj7F5jJ4rdkyCGQmFMF5tmF19mtfNwCq",
  "key5": "2ShMABLKcRzS1WVGuW9jpwUXHPWFDBwr2oZhuDmJMk9dbFttrvGSBaPW1M63vNcpVKBZtob6RrWJJNeuZi2ALBLz",
  "key6": "5zexiAwJ6FoxYeYVf3hHQaKVqbfzMMWra2Ftp7wGvrmg4PeuLhrGMMu9GdFj2jUBLCtidJtzHnvVpFPooesRMErf",
  "key7": "5921zeu3fU4GUTFm3SacPr3U8XPAhSeKmGBMcRVxejRtP2DxmxNgSxdZA4hBRsAkHJ3Nq7szT8x9gkcDMbkK88Kt",
  "key8": "5dqJXmFh23kmoDnYny6L6rY7FMXmm3NZEB88SX161Cbu7iCqa6STidHFE9GFTTAJwn6EJ6i1o8mVmNTqDjoErFop",
  "key9": "5Ui9SVP6Sb72P7DVXSgwZCVKnkVxYVadqCkZKAyKD4mcUQbDVGCC1TuS7XehQa6fPScvjtdYabSkyRVa9zdzWEqU",
  "key10": "4a6zRHHnsiATxX5dVDfcCdpNn4SjcnCBqmrUckaGEfQnCS8znCD47HDyEbq1m4M7GaGoUQ6AUifHGGVDii2SUx46",
  "key11": "3P8V8pUWHdYPdTd5uvcBrCDK1PaToLAzBr4dYkoPGtVvtN5CRFJaRLY51mjj4epCPMPW3CqDRA4qrbMN3pcabvPy",
  "key12": "bM2tGUrwtWgVRu9UuZW2PQkKaxsd5DhWurZ1b8m3KCeiBee2Bd6jw8zCGARxsnKuyhBGMHkPyZ8sYMMP2wsGJr8",
  "key13": "2Lpop4pWjJSrsx6yefSWPW6ucB1gjBasJ4csTg9TdWiVoj6waXT7AENN1F7utWfGegB7EDVNTD4XWPmiQAXJobYL",
  "key14": "ogLBU4cqPedEaQCgvYUi4i4iZyk9HjRKSSkdYUGAakCUbnKJYb6x63jDknycbdTxPZXHykGwLtuGRbbv3BaTGEz",
  "key15": "dHertZbVPCt9H7W4LhAa5yhxfe9PoFM6ccfAJHyZDxP7jzhVNoWqgnxFJBkMak7jHH1B2o3gTXWDkXmEwQTA96Q",
  "key16": "4Q9pRUFLKpz3oLs5vs1Z2inYtu7mMrHMcArNTn2thP3neqk9LDUr3ERDyJUMqcqzPH7PMtDAywHssw79wAYe6GEz",
  "key17": "5B1J6q85ZfMz6okWsx9zd5UQfi4sf7dEERcvg2pmDMpWJ689cx9m2SwYsEqpbsMX24R7gAghFho6iVPRdVCoJTAo",
  "key18": "486cDZGsA67dUX5kuXijgwTu372Ym3tsoGJTV9NPuHSgaqSnFEmdQbKKDKQZM6UzHWhgi2idAT5AVmEh4QHmpeXr",
  "key19": "5XqCWxLD1Ajyht541ZYUnDt2PXMaWwjRaTxDDsfdVpGfQMCEY9a4Cv1Bko3S41toVQf839vKUoT25dKJ8TYa9Hah",
  "key20": "252jXFruAkjcEyULmUcY6mQAuP8XzD9EEeShuGxk6rdhmmvRBTiSqTJ6JoWBkYzKYf1WZqBhdVzFMZ3Pux1rKJU2",
  "key21": "2V561g3Av4AWj751HbiRuD9DJGHvTKCBV3DDx7pMTSanPRihPn3Zt1kVAbe332uuEKNtqKAvwwEfmTjwNwRBHiMh",
  "key22": "2DQq29fPdABebG9rs9gaqELNiGuSPTum3ebbJ729d7WfzoBgGrk1ggxkZ49d9mRi7qZEkLffykCTadZ28BET8Qn1",
  "key23": "3BCaJ6mZJmnMa1sVJMWfciuWsZ7j1Z9YNJ149d5p4D2dhhzHoq6p4Z5Fp7WZMTAnFFz2VoENtuK8PPPqqi5qUNeH",
  "key24": "3UregaDf2UhojKyDs5Xr6X8ogu7QyMYb3QvMWLrjYoeQTCyrbrmMXzx7eTpgtNfjF6CCn39csqhTnrfG372w1nHG",
  "key25": "65fxjVyZXCSds9bca7aTtHMkn8BYqqpuFVwbGXShqKKzGBTkWkS4Bk9SxyVFfNPXNwrEtkb2MTMu2PaXAe7MJAky",
  "key26": "4JSxyd3e42F2iCtkqe4vL2JrAVVwJ7X1jHgbQSsgLXdGJ4wDyZLZaejW5t4nSvwRae8QU89KvtTZyW793nxMiZPc",
  "key27": "2DxohRH3Wg1kzwKDuJgP7AjSWCJHbuAMZFvy5EKVrx95zjniCdTe6yj3DMNxM7LB4YqgeQj6TwWRupCdq4VvPEkf",
  "key28": "3G87Edy7Som16AwQ1XxHeDSjVxnmvgqnGEr2Rg66u6eqv9Ytj7xVoTkhLXjnCSBcR7SmUFspyRU6CYoYS7DJoV3G"
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
