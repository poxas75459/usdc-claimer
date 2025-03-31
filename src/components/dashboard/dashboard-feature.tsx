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
    "4ZZ6HqUTFMP97zPVpWXfT7HyaB16GZGsLf1mVjRQzpe9AH45t4G91G9cJZmdEmH2adRQWkNYo5o5V9AEfEyA8ct9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qkzBMqQh39KhBc5YWpyMfVjh7CvnXd2nhyELEhEi2YywY6iDFdZhxexrkmyQE6cria8L619BycFzBuAA36zcFWe",
  "key1": "aVFbE3cfBs6nCZvKuFCdBEaeNS1D2QDtfxJ42RQXTN9apaAixtbHvgS7CSJRd8vnRsM7Wao62KP4XqHttt4jT1C",
  "key2": "5UMz5oTN5j8YU3ZpBW2WAzW7BhJhhkzffboB37LwLW56dKPyJ9mKnYnjFFAWYQMnLicf8SJhDBSSauuBeWhmPmWW",
  "key3": "3TXzSG9DvizFTYJtBq5xAmHSrRD5iA45npvEpq9gkVn3uTuVvSMdhx3T5eZhyi3qEdEu5oAaoSpQj4ESjmULHcsn",
  "key4": "3M2P7QVvBxjmHnEEw3JT8uvg8VAJN2BsK4aiStgygvwZKCrYLXZ4CQKYxkgBg6QrfchYCpj5LnyDTSS14as7eWfb",
  "key5": "5NLRXCBDL752bVgE1LhC6gzqjB2o2pdxn27mjoDfrnnpKh8ojeAb62itWsErkUSppsirk5ADQeWsKZz38T4u1343",
  "key6": "4b9FU7F2vTqpC8fxixgtVeBZ6uzSxVzq3ZTNY7U8dgnSVs9pubMNxngSuksAW7A3UQqxEL12tBPLNdAGcexa3Mpf",
  "key7": "4RyHo2e4QRMvuYgJwVnDTg7k7XtZrVg5Nsk7N8t4rnsjj8DegJEts416A3LpC429eRz1r3vwTxScNiG6YHu1Xd9E",
  "key8": "42jQFbNQrrw3MXw3seALKMJDFa4PsBJotNZoVgYDrgcJuBiADGjKFVUVW6cSdrV6HyMLkaMvzXcRiMMyfWqZ7jwH",
  "key9": "44yzkrY5Tkww3AmK5DuTJtkjmEg8FJRT8BDeLWQmS7vtDFehx6riC66kxtxBQPzGwq5dUxHndXczGNxSHKai39zN",
  "key10": "4GovUFufJd8AP11egNseMNhzpCcVeTQSreemLuv1axtgg7gM1rfSkNn2Xb9wKtZzyrU5Vwqd1hk5fQCiUwXumGnz",
  "key11": "37dcjqTAXU6w4UvLy8hyfbfuYcbs5XTHerdpSQYBfdbnUaZBCPp84EG46U3sCyjwmZomhBoi7j9aYknMcsexKGbq",
  "key12": "4HLMuBjCrUh8T3bgkLA6kBjNQ4LiBMvfLR798FfxBT9PPPYfwdCT5ZbaBaYQLgwihxd6eGBoqDgPBATUUatAcjxT",
  "key13": "4HJEyJiRfhAyYeYsCyUnBMK5bBF2bme55t7EgQhzLovWoRtFf3BmERErJU8nYwr8qD79hUFforjkfAnDYDAy6nzY",
  "key14": "5uJTYWSnf4dTMK4mP9BFtdHZG9xPt7j6ebuWwAcdEYdwKacGF1835upUuPdyyn7hcCc9W9gwxjQvPdPsGEHxKM2c",
  "key15": "3tqGw5nk1WTpB323hMV64iadDpmEjC6353wteDSEdFDDGyumv6bR9b6xW2HhNtTyh2fV6bW9owoZAzDVbzzFCHzc",
  "key16": "fKX3kEDnJAsvWugRabU3jPDStSj1Uj7TvUGe3YCwecfoCTwZfgFJJNW3wvNCtmhimv9BJrJUqvHY2QzG7TXfSJH",
  "key17": "3PdBSNmYyoHmt37U11PJV2XhJBxiiigLh6cuECxs8d6bQ59DauzEvEey85uNZmraRgNQ9N3qb6QTi1KVuk422kqU",
  "key18": "VVXkhyFqu8jNqZ1vGz7479h19tpc67i7keMn7tDoXfteVcJmFEG7zifxnoS7cHXq652hoPcAtE4vBqn9Z955aHN",
  "key19": "pEzHv1QxzBx8XSfujNCKAL4CNvvN4WSDYD8nddnwWHhEXLBYCWxVQmhUHdfRXULB3fWsPTDCy4StaokLSeVYxJp",
  "key20": "36drGH13w3gJEkoLetC5CoVjkrne6ohKuKLEu93p57rD7vXP9f8FWjjHUCNXU1jdt7Z25yGWByfsxTNCDTcGLtVW",
  "key21": "PjwxW42Q8Xp2RuaXVv1sGyz3oftzoQr7p5YAcQHQAuKhBjy2jxnsys8ypWAxcPEHNC14m4YqiBNaXY5NH65mFX4",
  "key22": "5cFBgHSB2RJ1P1gtes2AWf9mytbeRxb3jZHW1zucDyHrFX2L5xzBzC86npHJyw1QP5Wop7kUVYMxHWbjBpFDkvgn",
  "key23": "411xfJUW6szgxpXH92mP4Aj6HmCYNMh24doN2UhXHQQfrDmeMoCxhWAXHtyLDHvbKTcxDwH4ZXJzwFBsdszcoreX",
  "key24": "435U15dJcaLM4nFd8HBVpn1ZA9U88htb6Vyaqf1iTztRzyodxS3bni3ycgNY2LC9ogS92dTzn1Dht6coBMzEpSi4",
  "key25": "4HAAZ7s71tiSNN1aqDpEBEcxb7Ab3t6UTrbNbZh6wgxV3d2o6CEioK9as3PEDAnWUFKrRC1iAPG3Vn4fvME1yojj",
  "key26": "655JHyJccEnGV7ddtkYJ6RvMVPCciCS7KwXXGW5FZWxbe6wixmJsK9dTkPo4qyV43F1qGMBjfN462HqWhfXr3aXN",
  "key27": "5tjphv8mGMtZSPy59PW9xc9cesKQrAMCCquMuGbocDh36moqqbWtHnMgtEjGY9JBELzqxSrWDdCLbXLeAyGXXWky"
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
