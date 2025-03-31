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
    "5YnAVSAguVZkifAqHJiGxtZkQQUU8TgAvjuGhZo9NkRMhSCkgGEk9x2JETvMsFWkVk6rc5ozrai5ePXDZdc4Gg9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z8DAVUD6CfjpNTtvey5YqmeByvUqD6KxEf4JEtXm5od5WQ8oEBxUp6qharpqCtoLyCQsPTxsnDqKHrJHX6PyffN",
  "key1": "3EszZMnjcLidkrEH4e1xt59zYNvtaaB9wRCtn33fy9rC9k4BTVPV8HSKU5ETrbZMoNVAzUB7NpauXvZVc7BT9yEo",
  "key2": "5Vteg8NS6pEch3pCHVt7uBMWZSGrwaBCU6ZpaaYsiZQs8h6avbZYv8MnFxAUE57uz5V78ziqmWE95fXqDD4Hi8pu",
  "key3": "pbrGG9tkwiPPFBug88T1x2o71Ss3x5tBMgQ4WJ6y7NmBuc6qVciiE5gHHytXofM6AjbEdCZRpNk7bijjyPr38cz",
  "key4": "3cW7ykSVWKgNr8AaPJhodJa8ZQ59NHEQqnZZAZmkuHJiroWqWR2R5rsifTfL7BdLh29yjiv6wF3L2njAiXdXcwvL",
  "key5": "48f2GaSJL1Rmv85Jtn7mTyJdCHZuz79hq8J5MVj6BrhtJMGcNT1didzd7HDygjhNxGqqpCXtpxQgDYLUZ1WDrCxF",
  "key6": "5eP4qMPDRoxtAgCkWT5uSjj15FYtPPGFR2b7GWQweQLTdCwferTa6xdn3PrYK9cp5fJHH8khKHXsuk6wKWkC9cJE",
  "key7": "46LRkGYEvTcjQ1ES4UrRFEEzCsDRiYRM3zTcXe9KeiRAu5c6tqF4qKMqkZsRbRFcP4TbmtNn4BcmKRPdfTgDJwGm",
  "key8": "xTSEKjSh4RC4FwUht9V28zwZBr2VnwnKLaBFJQEgDVhEKZig83th3fU9btmnpar65ArPi2b5KdcPjKmi9wEQuLM",
  "key9": "5aT9JDwTgNmYn4rKso2H9Mt3ZEhD5doEjeuw89pCy9kJDHv2ZQsqNWFmo4LsqKnYZfY3ZR3vYaap9TUMxRocfS5W",
  "key10": "4B4J8t7gJjFxju15AKK89UKjPbk57HRyaGw3toB9eeGHVjbvwgL6QcpnbxYtinT1eHTkyBj6d4VFTi7aD8CfSw5z",
  "key11": "2x4BZxsBeHUcy9wVyc7xnmTsUh7uuqZRHrgPq1S5FF8KZSDHqv6XrEUJiEQyxBoV5z9hkjU8D4onwLbqqrkASnLX",
  "key12": "Xd3yRzeoUJNtAXVn6mg5QbdLcDW3vEkiGjiaXGN8gf5YaKJgm4mvXrFZfdM1x88pJVy6bLHjW9yHXTKERDjkCmT",
  "key13": "2ZsejsBVkjpFaHLKt8mCYenEht5ibR1tvMmCkrRERrwJWq7a1bdJWh9ePNeCf47REKBFFmB47D8fDE5tysxtAT5D",
  "key14": "52vzo4AdmyLy7T3b6u3r36cYbWNLq58azTr5hT8dhJEFMDySdCE8W1KeEJGNk7qqsw1zHp2zxNcHRy1znzu4JfhG",
  "key15": "4MgFuhtTLBheDFWGbWTaJgrug5nzqNj346eHiaF3pBbRJZJU3zqxHF3tPczzrXMy4FPdH4uqizwnaGLeVBGBPFW5",
  "key16": "5SiHo4R4o37vqSChMw1o4TyVraB6L7WD7FtoH1KvLibTYm9QPZb8coBHmGa4pC5AW2Xs4uDr3rH7QeGkejchbJyD",
  "key17": "4hxx5hrzy4DCjTnEKbfdcfPCaZXFJ49Eh5EsKipBxtkmgg9s98AUqNFtYLsWiiKJjhDbCqWY5k9zmBaqtt4wmYTL",
  "key18": "ywmnmhwnwVTTU8TsfFC8v75xdsyb5sWLLcuX3y9cTzj7mXkLjWeGZBv9sQZ1qUaRsT53d5uDSMnBFuc5y9gXV34",
  "key19": "4m3LZkvLvuG2LH6EYsbyLYuTVtqojEoZGeFXata6HxD2QhmeyypEPUG9X99Fe9Q1gfPtiqcw4Ci5EcYo4EnueMck",
  "key20": "2C5uLDteEadJnyHrhPKDsuVbZzETNKwVvAqE3sbxYzWBmvGVTG65vPXhG4w67D8AjVMxMnKv6CJRP7ZYfzLna5N8",
  "key21": "57nXtyp9jMSB3AgFm838NavpYyWwWdLSGzpDxsybYKDvzf46zskYZfkLsnagy3y1S1m6gsXQ4gVk61X58jiD8yRx",
  "key22": "4GQgHDegHa5NUaREDHmQtNa2T3VPXCJB19S6pS4PAfre3aDee5nwVreTrcVm3b8ULcYHtDJRUVXBqvmgMbqt5yYB",
  "key23": "35rBpo4xTetcRnuoRxj6Hz7zryih233zhr1MT7iVdrvY5AYc3CyjDPe5N3M74GtxemVDj9mDyqsLUdQ9AqQ1KUyV",
  "key24": "rrGLr9uXkoN8e6aGxhVV3wMbUd3ihVLzZdACv1Udaftb7eteEoKg6fdwACf16Bdxh9x4sRN9v8XvoYAAE1bSmij",
  "key25": "53Ak2CJyndQ3YkxRWADG9KNE3vS3knKJ7oYdkihg4ZgPGHY1wYA2CR6umvU3xyKqPJ64rgA12xzhKADMhgyNExYn",
  "key26": "5vPC2pt5tyaS5LeWDzwmL5LMiHKZK4RCSBRP5nG9DQv5DdZubrGaw758mde6gMVGtk747NwcqTjA9ALyrKi1Hnnn"
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
