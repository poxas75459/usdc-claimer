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
    "58aixLFGihxCEy7GP24DdrqMe55x5oA7CnJzvP9KFNfkQ7FX74WZpzW5yGkwW2drBmAzr5WDuKWsaiZLXZAV9ETX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B4hpZC5hSXLsjaAjWHMuKnxGtrhGSRLJt66Dy719WnL7dUvN9ZSZa4dMVgEw7kzPmb5rCEzH42a4ooEVWcLb2Xo",
  "key1": "59zzoW4Z4Qm4qfwiiaaF9ixWw5cjpuLjQx7zZe9vHjsdpWVxvSF3c1AJBv584Lcqw6UJMYTxG9fvpSX3izznsB7",
  "key2": "488pXeUvuM26Dskdzttdeit37pb7LLHmiF9pwV9NBPprgKiFUMZpvjEPRnUk1hBmP1F31rF9cTrqTJzeUT5kaf7F",
  "key3": "3SWXip1wjcHiFNtmDeEJRUgWgk9FU3i9bED4dQoZ3CxwxvxFnrWRyvRM3g1SAj9SuavDK7Rcf7wCxzLC6zbwEk6c",
  "key4": "4z9jtDPxWcp6UD5DNypZ64niaASa4XLHoLQGSPAo7evJnkM8hxBqZpDQWUBCGuAWhVd4DkeT4sv3Jw5NFQnJxEv9",
  "key5": "612Jh7sUAnAwCQPe687ZTW45chJKtWrafx6WBS44SmBEjVxrVW3wcFfNtom83mZ9UnD4HRNjwLWVYfqdLJpSUFU6",
  "key6": "4dgCQ6ApWcKhgcJEXMWokkZPgw12K2PYgeiudXHVqmFiRGdAwSYR5JJ8znZuRHSw5sr1Hu1gKC7j2xCk89sWCo63",
  "key7": "ADWmmtrGHYFDGw15FQ947QqVTTgQvviFv9gzBKimAkjjuXqAvBKy4iS42hTftiMYuMyshnWtuNJQ6kKZBmYxYTM",
  "key8": "4amGCNdhjCY1uXQonRAWFqLLpJePTxdCVBBEzphC7ty7K1DmLB8HBNMDUnQc8VL9WFvfCDAcDqkeAsYenvJRJhAT",
  "key9": "uJWdi9K8RaeQHsRZNSTJijmU2WBAMcupWfiPxhLsKobc3MHiiCFNeMk9Ljf6RhZqSsaTQ1mm5phZvsG6HUcsZfP",
  "key10": "5JDxjq8cM7RRCm8ZogXmq4iEUDsCawkSmmrakd1j1ANUJN5zeT4C4kuUuU4xapvEtVvJ4xD1JBXZ3akbubudGwWV",
  "key11": "3sPsHhSKmJnUcCRHaRiVd4S5tQ8saLaoExpZAeykmxZwZuKqFMd7fezWyAQuBMEM9Uz7okYj8CNwcuMmg5Ugn6KQ",
  "key12": "5ofKz5EtbUdaiE599fBUjvugCCmzDDjYqBYL13czzx28VyToaSSmm1NzwzdqtYovPxkLAhXGn6L2qaWbdPLjhwjg",
  "key13": "4GpJenKGA5RSmywQQnMp4CPCJSV9pT7qdbbh5FwcQSQjgwRvHDL9C8GYEoURCwbeRde74oa7REuYqsU4jBFGrb9n",
  "key14": "4SKbooLen519vdhqFYariMXRtosozGQn4QEiFMV8fLAAUnWrjNe4muWcJFBBMihukZsb9Agir55DAQpnr9tZsvjp",
  "key15": "G8D8scv3AYho3GAyCZaUVuaApevBQzE692Tsmsw7dJ6oqs6ZGY1RXKKdc3evjMmLY1fmwU8rbmEcPeMtune9BLd",
  "key16": "57rRZTpHTZ5j8RWuJdcXLEuVVQefCLW6P2yhrUWZJQ9d8W1f3Wbjaq7NMcKmQAEc6JnkRX7MW7xomXcir75hf9Dn",
  "key17": "5eRv5eRUZ6azBkVvPXJ2shfGHHPT32FQ9BzFSzzDdzUw8VMJjfhJgzY5MvftaD5pLB8KGnqQQUF7unncain53Mqq",
  "key18": "5MKMRuKnNdpFbkyebq4BCn62W9CWo74mmtd3Dec2h2iiDoBpXKYETczPTfLqDeWnjrkBJdafPueZZoBJB4Gt5AKX",
  "key19": "qCW94oAJtTbv87en9J5bxHvMwjdrXGEQKpmyRx63SX1Mw515JgiErEGgKNKRbLdcjpumdMwDfTpJg3uSFxFXq8o",
  "key20": "4JytWcAeF2q3ARdwATZEQavEtv9HdSGxADW3DeQuEqbsH1xxA88kvbh5cBeLU3v23b28wp1hR1kVvAAchheZSzB7",
  "key21": "3CLWEKU7X3QLqYFH1jU7RpRmv2E52iMr3PBnpzUKwtS7EXp6CS79QauY51oAWFDf2HJPuqQdrT9645aRJBmi2tdp",
  "key22": "5nAiyBf9vZg1EpBVRtafDUoQrdboEeS4yRG1CKLrZDDtdTAwoaAMcwqyJPAQM7BEE6NMwrrXijjtdaM6Q8ash8Sf",
  "key23": "5Rv7xjq2HH2Uvg3v5hMbPPFm8CoVDMWWXx4bac9CisniC7GtnfBLAJiwVH91RdG6Sq6MeLKM54CswmLUKyojVZvr",
  "key24": "26ms9YwKih3cwktDNRi5WG2p9RLHFYANgxBoso92MJBEfvUmgmNQXZE4FSgwqMBkjQfwP4fmJDUaZznUD48yiuoj",
  "key25": "4xQjhv7UySMRbQMnuEqZzLbB6hK7E5tL9kDkRhKsQsqsS8enCCEVgT8W6EcdqpjeMdioehDNQTDbQUM6qz7pJAyE"
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
