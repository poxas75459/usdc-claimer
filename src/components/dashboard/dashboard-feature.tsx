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
    "2B92bdMyYDxVAMenRvSveQHQjJRNeWcDtGaJFYM8R2szT9ZoHug8i7BLKijEBAkFjEgESjFVfhTTQtnRveU7MVCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ld1ywzmpbLmR8DzPp4PQnWq4TGQ5Em1kAaguc1M7rDkc3BajEqMZeaQW5X2Yrnrz5RDBkaud7ejhMgX8tumNEDV",
  "key1": "5Zad8tTd3ZhgNELzRi31ZJwjLzUe1Pr5iJRQL8xUC5hFAvpiCjZKx2meEzK5kuyH2hSwLXE29YLuL3VWXZUkzUEU",
  "key2": "5KKvFrieJS4enhw3v1GrreWSMuGgvUvCmLpPbaVmm9gGKXqufoxx1sJ1Set2i31Zv6EjhkmbQkPQz9UtwnnsfYmw",
  "key3": "5xMUgA5PkZUBKMSFUb48NDEobbq8qz6MfKwghek4Vssvd8SWXjcFqcS3M48ptXfaD9FvycCGd48zg6ZHHm9P1WwV",
  "key4": "63BF22pJncwHSuARP248cLPogF9GU42t5nQ85wrR9TN8NB42P1V1Q8JaGt7ubYrdoCt5FFECvefo9Zzw6yKmAHJz",
  "key5": "25okzgbjKEN5mpL3exJwWQt1GsMYeqpRyUzoRs3UHqBCVj6TSa4JcpNyzswC9H7xCwq2xM52MdqVT94figJQLVAF",
  "key6": "64kTx8hEJGmLCPFpEFHpD2GB2UnJpGkUYr9EdhNLMooaZBV4AzfDQmSvShkvXGpjz9FHFFLjiiJbAA5y314hHe2t",
  "key7": "2usqcubun5Zj8vWWhbFC3Aw8wYbwuoeAbXK61AkotAkA15LzYKMH8PL2moxiRNN2xBaobFdHQsoAT6HcjRcTkSx3",
  "key8": "5bVe7wPLYR2JgFYGnczcUCA7PCaukFh465xQMcGw1QBBWVXBFHWcjJ3DKWv6h9SqQUkifbS9LLWvrFuzE7XGqxxx",
  "key9": "3rM691YwsSQ6V9StVywTKsJ9Aj2PnLkvF4EpJW6XaVctjpH1TyooWzhEc2foxqTP92Cii8yTkoFCzXik5bze7SUw",
  "key10": "2fhE2wpa2guwmMoZJrYFR5pRKnhCPGhiTDK1Gg8RnVY2SDYKmACH3fDKhYEiQ8ZbcHM4HZpTnAsJYbd9ZRdK4pis",
  "key11": "3FyCYxdEpmDGc6cEMi9x3WmqhCWMBAtJaByPMyN1hHQE73GhcWEeb9ebxkbVAGwnNthkyEk6BtqNLSXCTbXTA7Pf",
  "key12": "WucJS3wQAmu7N9EjHCfjcGxXn4tb5CUPrpJY5sUiSCeQkoSBqtHs2R52a1gvH3Mij9q5gUH66J4wETBYUK1fWAg",
  "key13": "5uqHWcdd2MFAKWK8b36piZhGJrPesY3rbygcmXZFroMn5kCLXbTUt7NifRpSrepgUZqQznMbGtooAr1TVCsWsScC",
  "key14": "4Yc9LzSGLfumuJeFaxyJbQC2rtYX2ZTSfyJ55W9XQBGjk5MwHy7RURtSi7RobPpMpAiTCQCzMX2QEp2bcniq81Ce",
  "key15": "4cqJnU5NYd6XM8Tc7wSLj7p8nSuJntQH7QHWEmwbgSj2Hc5ajGZbv9dnKAaiiTNYXyPZWoiLJJ49BHku37pZZ2b",
  "key16": "3CUC3EMyNF7smmMTK91NspcEog6S4E9XwWQFURzm6qPo8EkKRP5aq9cARzWWWpKkW3bHXCHnxEnfx1gFML2K1aDK",
  "key17": "NdNeKGZuf5LRGN1ycDrrKynRQXFbtUQCRqPz7AWW8AWzk7suHBrNxyfTHhiZL44gGE5HsFN8L73S2XUhZEG7C7x",
  "key18": "kcYGPfpeCWQBdQ3SWbJtALSJqccGrYoTc2Eq5Xpj9EpRpS6xjSuci43Nw5yuMErvN65KjoZESS5BWAeKUumgPk2",
  "key19": "4X3c3zffBoTxrPVtRLJwL1DGJTbPR39osXjTZYeUT4wBeZyXEmcYDpZ5PYF38qMyLwB1Cz3j11xq1zD166FrTiEd",
  "key20": "seMRiJJP7P4LoiX1PC9rtn8BxV4nqYe9jVvu7xfNJGSafMAUSDus8sia18Rskidnk245rsgJ1S735dJSbdx6wYt",
  "key21": "35xF8bm8QfT7iZN2msXuBSDbFQniyEgdYoSCgRBpeZy2Atu8SP5UBwEK5exPE6dHfg5S8KgqbKhXoG65R3TyCpHG",
  "key22": "4w5KNCTqwa6FbAQJ8Z68pdwLMU8vcbkuKmtdhdvsCSH4xQup9codYtCknHBJdmMq8XyK2WX5hcJaFsHNvQtEtuZt",
  "key23": "3iUwEfp6g9cF8K6aV7horUQHVrSTynoavzwV7uBsHSTsYerhmb8Hzhg2Bd9iYWbEWDrhc1qWAjJrQyF2LGjpbfrm",
  "key24": "5m7Vep9pbQfAZfhqg5Q3WgRjs6yqyVeMemHv4bm63pgJTDb43SXnSQWuodKv3ainqyFX2pt73xZMzo6adBrVuNPZ",
  "key25": "4muqg1Aqp99Kq82rjW7ep7EbFKum4ghCeZ6J5qnHqkAgbNraYY8aYNqfW4dfkPB9Hvp9bT9csARqKKM6JDPPoqpL",
  "key26": "4zfTD2vx1HA2vcMZ39tedBbES4eQ71DziEn6UVfZYchk9Sivm4wW6gcBgydLh3ia1d7T63y74edjfqhp5DZZizbF",
  "key27": "2Au6EbeEyJdnqogMecXUDLK8S7EwSC1tdsAYeWPyFJGNT87mSPkm4vcaWsn3Kqf7d9nney14zmF7UfMyAFTXtXB8",
  "key28": "UdkPEcFJfXtH9cdZqxvyxmAmTNtV9sSH79zEQ4hUK65ZFEBEjnkJ2q14574ncW4J14QKZS3wfadsRLPoGzrsSpe"
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
