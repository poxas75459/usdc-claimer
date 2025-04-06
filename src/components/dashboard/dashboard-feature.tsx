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
    "4kDD5tjXKnZsErSoemEvEa78zcgRnSGuLVq5xu6c5DLze5bmeAj427Uuu9MVmfuihfKNXfuFpFm6WqzLmbGe4anq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RgnyBoTV1zJjapjCa86qWfr6PhcsdBwkwsr25J6Ztb4q1EuVqN2pg6a3ujSJw6BH7aAsmNMMysg9D77DmSPxptV",
  "key1": "56Ua15XYFTqe4n7v8YohHrN3nmTc55L3X6qQK5VJakhwuf3rn4g1QxGbw14QAjxCNBQ2uqEmCh5Q63waPCsaG1D6",
  "key2": "MnGkzStcrEjigvxVJkT1QoKyzgtzHEY1mnrS5SG8vPQYtm4LWq2MwQcU7c6wXWv86Ci31jRuDtewgMwbZe2WxRY",
  "key3": "2ak42W9mCb9bgx2hQHyat8dVtUcaudMHabksEBKQqn3NWpNuT3qDhyzMxiEXZXksXWVKTzQBTLBUDoPZLLD4JmMA",
  "key4": "62T99x2sTSDhqHLu1fRFzv5twi9Q2keeoCMkC64EAo9n3At9FSKLDchoReD3dcz1uZy5z2y2eNd3UyFzKjCJgRwE",
  "key5": "3oGEbiQ1hCeyQTRomzQBJP3Sj7A6JKbiJe97gcypBUM84XVfoQ3m3SuhZWUNekzzqA1ZGznYzjmHfPBG53Ah4hLH",
  "key6": "3ZCYRU9uPaVh2HDYZjf8xX9E41qBs7owLVd7VHeY46aEEND4BccVAtmJsqNUfEN7TBwkAxtuHN33TKxWdAa25NR4",
  "key7": "7oKaSmD7zD4WFRpQSeMxaMCW75KHGJ6jCk5eWAzDtnUigrUJmsCaz8AKouNye3WHg1EF2rVButmaRcKMbdASegZ",
  "key8": "4Uc3EQPSS73pCjeWiaEy9KJavwrz9BBHfnfDodXituewNmSjqjA7DAp4GxjvML9A9uL7TTniXA6eZ3HpeRZe8ukt",
  "key9": "5syFGxMaCjoijExBaAD3jt58qTA8zVzjC9MqdsHqE8Hr1H35PedUvfv7tWZb1kHa1jaZx1umsw3e68S5BVUXPqNF",
  "key10": "5rLBK8VFBaVCUEViPk6zSh7qARgPBqhdUmHX8hWdEzoXjCQVFxBR9LLXhZ95dSW6X1Qi1QcrHEG9vjbr1Fj7pfTB",
  "key11": "2kWbN7BF8JjzQcVgab3DnSTz8inkKjDmj2zzoawVoabobpweAFM5uW2eufrtHankkpBvPn5CKmdQhu3FWnMmzwtw",
  "key12": "2RavZmLyvgkNmnLPP91CcXtZRrLd6QiaTCreFsG33jGqpe3N5fPqyhWousK921m5Tp3vaUJibHXBPpzYTf16wggt",
  "key13": "3uwNqnq2wkHWTi8d3bpCEPw4221EQArxNmpEDoseVx77vx6FpoHd7m1Mx9D21FcivXrzVhP4hksuajqyZuCw2Tah",
  "key14": "2XYtTC3N9VZhpjzVKkehCj6wQPnQanbYzRcpfhsVJSKigEZz8QJZsNrPku1eMVMgLFJwKUfg8K9qWsP2rtsWqu1u",
  "key15": "23Am1S16gSQv5KLw3K8KMWYaa32SQcxJWfpQXVo11kgeFqVZZ2ejVJHnvuavhDC8bH8kdefWRscvQYQbcVQ8AD82",
  "key16": "TxAdQfnxqqo31DKAw5LgQyhsEFcgerLQw83kTpMcQYA3hjmuvBxyUuMBYK7DWsNk9i8Rkzz866wG1Z71PWxMujN",
  "key17": "3m3LHyK2BkNy15WZbgwH8CLBexK7pPkuofRirQoE1WwoFGDnGiKBXvb3gcENTpfA8fDp5k8f59ELMiNf7TqptjJP",
  "key18": "3ZcEP49VymJyCMaaogs8LSxYAzMyM4atrTNQpHmYhRabAajmhzehFDi9kcfNkNGR3ycYjLGVTTH27J6LiyQinFzB",
  "key19": "2YwnxMzHsWskc7vWfzvxp4NFDmLVpANDwnwufoTRJD7xnHqcciAJ7U9xwZgPxfo3yCRg6435hiYCdx8QVhP21UFw",
  "key20": "rpGnMPtGmLUfJrS8UcVM5qgEJ5xRZ8zSfnHDuFYwTyKZpz6KKB7UbkpE1usLnzWf7DaQr6FTu9WSHA3KFF8J7DC",
  "key21": "5WAn8TFmav37KZBCnZGq74mnFyf1ZcwGdG4rnGEQVoJbE5mxz9e8N7wYVsB4fAVN8kBFM7XkFxZrLrfe45s1NFrF",
  "key22": "kTJYyzRwFk6wWgsAsG47ENeurRPB6NpMhChAUw9k4ZbVoqARsCj4C3q1JM1v1YbBYdWgF5ijLkEjvp2pn567q6E",
  "key23": "5JEwTeuFxkW3qKAtaRoZhyvaJmDZBUry1TduUTDhmpd3GwGHMsjiZJXiiN5hqwE5s9CCzeDHDoFdnf8mAm2T7hJn",
  "key24": "6gnXpwivsJvYd1mseoJo1r4ebbWL4qhEHHHpXVQimRRyi8naK4DoqpibiEhDzBxHJ1yqevGQjP5vs5Hz2xyg2c4",
  "key25": "5DxkF5v7CS9UhUe8Tqf2EaTeT2GX1PWViNKVfApd2jDAJ1rfGwwheoCLfi7hLmqiKonA1cnZ4LGWitB43hS8cUZM",
  "key26": "3AYNxcysmmBjVxcrjviTSWU3X94JT792gYgMFyb5id54UFnLFpfAvb1KChMyfDcc29W8nKaJQzv25cDVyB7K47bF"
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
