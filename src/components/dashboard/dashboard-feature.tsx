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
    "21TeUBTbNdU5cC4Tp4ELY1jomXkTYDN6XrRkxTs3BF6ykNPJtFHCBFEQ7sKs7RVifxiXyqRBZGgvENGiMMLp93St"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eakP8JJf1R351jMLpzSniWX3Sj7XTX89SEqA7pPGXPcq2B61foJSydnDWfHpEeHh23yydmQewSXY4g1CTHHP2jC",
  "key1": "5WPNJziSnC8SQAXTxfvLczY2vP9kDHAix8Bw3Qj1qYCrSTCLfmSmRTJPVyz63K7RMRF4WfUHZpG96KQEuZw9qYta",
  "key2": "2GdgS8o5FVH9fNQtxrQnSXSg3QKeD9hekdfHyZ9XKtBHdM8SMLLchkM9aGKFcRShWwifbafbwbKqnVJMPn7FmaiN",
  "key3": "2wKP62MWS5kHx9QJ4PkowB4o5VakXVa2TY9qT9v7wn4ugp6A9zqPWfCRJjUioxhytgNrcrkruU7H6DNzR5cmLUSn",
  "key4": "5N65WqPNdmR1wTjw7yVdGGkXnR5HCZwJnKWDKoRzDRmbYA1XWTbHiT77xUz6haYPoMFYhYKYMEMz3FpWGW3t6Wo3",
  "key5": "3zu1o6xQdc4ajqUGHJgAJPPVgZz5fWVFvWH1YsFC2P5CPPDiurctUr6NPQgP9rkud2aXjXSCwWfu9zknH1cH29qD",
  "key6": "5nhZAYWwk2zWPKFL13MhY4vNE6NzSRcqizSjiMaxxFzbimUUfataFc92mQo8BzhGQtLHSPVEMJUmSUWebw6PJUS8",
  "key7": "3oRFoasExx9Q1N812RiYqpyysbjF2QxH5uHSCCQg1iZK9ddh72d4jRzAxkLsCuK2DNf8cXX8VrcZPsaHP9NdV4Qd",
  "key8": "4Kr7DUJQFMhkoWa3FmrikW2wnKnjsoyrYNJcx7qSkQ3z1bR3Y3WYdDsw6skqC6jgtGUKH2zgR1LvUHKKaUmiEBY9",
  "key9": "3SjCrN5fwxqR3KZfKgbferLcXuvzWWw8DfCiiscjfNzDpzsJer12tKqRDdN9igZ39xKoEGBvHonXocGaZkGyYwJw",
  "key10": "3Af33DdzwatBkekMkQSg53R2e7pUjJtyBP26vmUuaVCgWy9yCwV2TXNrJENcEgNQxQiKbv3mUHv6T2kGkLqwHp6x",
  "key11": "2kWwQDz7wRu6WYArXLeNag1ebgYYQL3JgsHnJphiEh7zRBqCn9V1tUq67uw7fSFQ8sp3vS2ww5ThLH4r2ubQJXU8",
  "key12": "7n2uNa12JPu6kW1jsRpZuTgevEMmsfwWonzsPBwSVnnWtmN4j1H3hL1f5qgKrpPzrQWg1HHhcFnwHsr9wmPAReY",
  "key13": "5WDEGbV5ebMqEB3CSDr9Tt8SqKTT38nYR8Go8hPAdHKNExwZ9oL11Mtsoyx1GL7fg8MMZJka6agXESTTDKs5Kcuq",
  "key14": "49qaFQSUa8xBDRvLXgcgAU12NoWUk81vSb1Jtuvm9r3aNDkUhVKRvPRG1z4MQAxN28KEsPYjwRyWH9DrHkXZKYQu",
  "key15": "4sxMJQsSecEJS41TFXdvX4e2HDPPB5W7vdV3mBzNJLC1sdrjnQb8Ys6AuMHg4Rq7V4KfBQAXuUgvDHeeW6uLb96R",
  "key16": "5tm7uXPu6mk9TSZKwycqwgnzgga8EkbyJkcBRDVkfvShdrpnpk36o5DjqzXtdGeuzFrv2Tc4RgEMMg5XLcWNS6AL",
  "key17": "32ahb45EC5Xb3r83KhKgYkmqr5VdpBdEPrNYnphj9jFyvuHMnJgrwnCwJt6jHRufkLtpXAaweFfWo41gNWcepozh",
  "key18": "37GS9qC45BAeXXPvz4B477tJzBVdZftsoQs3SyA5JKBcy1RL8xumhBqTdiJ8AECxX6Fuat2j8AB652KHPepfBVBL",
  "key19": "UkXKnn9DBHLcu3nEMzzruofBmwc39Bua4ZTcQtUjNz4WDyQS3rLBkJTPYiK3Nw9beUQDtug3wKe5qZhESSZqn4m",
  "key20": "27Hr3dDGCqeSMBeP7YUt8w4EXSa5S4GwxC4UwKBVA5KV63fgSDMX8PgBwe6ECnaAGHHLrXJDDM1NojS4G47HEPCQ",
  "key21": "w3fRryCEhLdRQ2freQs7GExC3SsB5WE6Eug3TVoD9J4ec1pYuXwdkAB7wqun6vDbfTsNe3ATwXT7GFNB9nb11QF",
  "key22": "3U3cwp6sBoecaschHdan4SELJDri5aGkkkGBAT3a2CujzQZbdSCQ1L8EUrJefpg9UE6y8PZuvbEjHi8SDxxx76uk",
  "key23": "4R9R77xJ5a6222VsSfCcajnMjU2buY2fRtL7bQHcaUU9kkBkvYmMSGuDHgBDifnS3KBnxMbMLfsrFyRT9xkeR1r9",
  "key24": "2UbHyPfgLvmHNgM4sBvZbFGF9K8xajuTdUXvuWKF7HUtEjnpJSmzFLe2yiYydDX5hh26P9iuAk4o44WYx1DrPVUb",
  "key25": "3n3zL4C4k98VHxrzW39i5s9SwHFJ68MUD6BwEc5BQLzLbfDruaGHS3rbrsAFoksRD5wxiraqm16n5TxDi75vnXgq",
  "key26": "5ZtWM3SDjS6TezaAsRrKf3FQj83u1pwkfxd5tnWbeQ1cXKH4ERqMSkSyucs3WxkcJF68NbaTao4MkdusL3p8opxF"
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
