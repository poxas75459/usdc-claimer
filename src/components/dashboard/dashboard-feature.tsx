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
    "3x1wpUhHuNYhNGGbXTCWs1yAkxb2e3oeC873hqbiLyBUUq4ZP1XU73cmV5yjgN9dWjD45YAEwfwxVfzqj5sVYAwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LKyrZ8vcDHcuG2FBStC5Hspwsp4FA5Tr5BWDTwAiP3NXySDWpnLbTMVfZkeVGm28SmkLvJcvh1B7eMwdTexY1C4",
  "key1": "3o2WrDZxLiHjDBxwR5VhGGa8hyc3vi9473deHAwsN2mwS1V3VXXjKGHkLiqXdVEqfW5HqFcwcY93Gh4e5aQGR219",
  "key2": "9oThD2ELGMttN1tiVSuBskgaieCBDN8h1R41jFoUcW1wSN9TkemXeRD6pV7jNW4XTLaRcmTLZBrVTZKuSPeKj74",
  "key3": "64Sr61uMuFCohiPmoRT8kNnWQVyEvm9YLyQb5cDhWGhHTZNTt8PmDWPoUmWi6zJXjFXYzpFeps6VtccfeNVZ6Vp1",
  "key4": "2Wuo6xHeuwNVk7xk77YswjWL4zQqDBsNkr6xEGk9t28pUCjijtdr3zjjuFD6keLERc7BERE5uwcBRx6pyFCX3wyG",
  "key5": "2do28RK7x6MhG4XRnGkpHyPEE9a67cgnnDxJnFqBW7pa5rS1mTct952hz9tULHhiwU7nPLUWhs3KsHbbgM3ARL9n",
  "key6": "5Cg3RAKgZSUTBaa5X9aUdMmTNqzqNWhpmHk2cfJEfbVThWbaSabYt1kadMSXHLY75NrWnhQKsNBKEKnLiURitC8w",
  "key7": "5PSdBtb6U36pND1AVTQJkn1gbQjjmzLs4RqaAr1rRMwWeQ69VQaKBuEvg18oSh3DLDnYJyWsGuvaQR6D2adp3w37",
  "key8": "26NdBcHDo2qiEkkziXpX9daCWudmeUAv2Ws3K3JvZsZVyDpxDtmZfidzyq3vVyS549kefPGgjJoWyxo5CWfUMzJx",
  "key9": "5rcLsnD18mNTRY5TiT4mRqvJ2a3HcBkbprWunKZDsCJrsvGh5j9AmL8u2krRmRFPfAAFdVixe9pu2U7UKf4RjKaJ",
  "key10": "5nBpXRjg6NVBMTcWjRumYMoKeBafAYyZnXuc1xnL7kd1UV6cy8eMJ8r6jdoVtSwvsXXNW3sYsTixeAGGq6Fc5g7a",
  "key11": "4fWbJYbTUKRY9nCecxq7FwAsev5UXxW2udz6ojx8JDgvFpB4jJiqUUURFvWwTtG4VxxWhFEsuBh7X9DqxBWfSBzj",
  "key12": "5wrmNQXg4TNo2qqTFddAJvnzLg8MGEoaLoj3wiimNv87Jah6WR2ePraWLxUJq5PoDe2Hnt7ZmGcRZckiZcMbDnFQ",
  "key13": "2FegGRNnR2iW4jsZdJtqNqmqRLa27Drycq2joUeskGaGS7cZ63vxBBZ8fqbRxpMCmZ6KLB2AJqqjdGnFTda7M4nn",
  "key14": "2eTSzzHn4Fue4DEEUmCSqV51o4xk8NgQJPSv6AzLAh8qiWS6rRkVMTh647tDov2MU8cudJyHm4DuCe6KX2dMUYEv",
  "key15": "2PyVEg1LAodrVhcMcMqU2i1QE92LgiDQeuve9hma9D89LYLU6zYVRjppohi5mTkmuBYK475gqpLftq9Yoro7FhNC",
  "key16": "5juQFXa4WvTJWbcYV2JsMeJXK2ircsacGnB37ALiBfV6S1nhz4DDsBcQzbgr5j9NU7YUUNPPCVDffnJN4CLg4d5J",
  "key17": "Vgtc33zHfawtpXaxZNZ7WCyCTvkftnZPvHf9GPuFhszuSMvXnxZ8XZYUHM7ALoHeU7kx2ixCzJP8vHFjEeBeGkA",
  "key18": "KCxKa38rDwHkq24FuDoLgqxi7w4C75nRu6hfxAEyXYEk6h5oJM1xojMiTKgoZNLKtBweg7ZyLhxA1c6tT4sgAJL",
  "key19": "4Yk9ummpCsavjwijEcFQdAgidF2SWPYLEsm9LaCAdnJGggFjAXL2XX2Jdu9j9dE2xyaC5SLBsD2Dp1KLhTwcCkMW",
  "key20": "4ehXDJYFwMeN3JVc6iPADy1hDE8JG53KSL5g7oDsX7H2rfKprQN3JG5sw5hNvZHBMEsFSdarkFwAoPQJB2kPDGqU",
  "key21": "2J5N9ANi9PFaZkCvamJsg2bsNSppLg9E4tQgEHFhrPGVhg5JqD5oPknNuumY5PhzBV76es88oYLXjsKCAhfg2Q55",
  "key22": "3fTpzsBDi4KQCVRcGnCviV4JTqfgSwSLS3gNnrZzFVMMtqFbVDCJAPHxSXPbTM75VGNggn7CsEJqtGBL33YKxgAV",
  "key23": "k1JnjkeKjHKKwnm1YidUUsXwbPhvnZGxmeDvLwz7UccQrew2AGy28GGqBHLx7g6vPdesqA9HC1aJ1YrVQ2XwxAD",
  "key24": "2QYnXiy3amfmxFsqu3KUkVahxqzp5RKBNcPAUzU9Tn5hyPQLTqA98akqJGQ3AnPzXRniThTmH6j3LVTrqpLXXh4q",
  "key25": "3fo5YJjvTJaH24mFVXah5Dra2nZq45pVJbEeDyQz9776f3T1Qqi6rSmjTW4PY8RNJxYyasHMj3GkYjBRBfwhJKFH",
  "key26": "51nqBabW6gmEP9hzzETfAKqMyTHVc82PTn9iKDzTB48Wy3hG8nBTDokfq5R4aTtFR8rihmNjzexhh2X8PGDAH1gJ",
  "key27": "2YX9SNDMekoXeS7Dkbzbqad3USbY2b341B3e5fdpymaYuZ7zWbMYr7ZFZcZEndaM9XaqDVP9HAvhZvBBmctq3WEq"
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
