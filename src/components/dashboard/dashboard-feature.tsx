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
    "4UXq3wEbkvdaeFvjDmcDMkrZmnhFHiUDzvJEbbVr1cM1GsRwDdVAVGpx5Lc74LAuffXp7MdDo3TNzyyZThKvaqDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kbJxuuHZxv4VrNDX4G6qhmrUxQJ8NmqdjRkKnS3zWDvsnuFCLRm6a2pJi6fNSnSPbqwAotjRWCkcraK2wMUDwBP",
  "key1": "ohb8nMQTqS1kUr1S99WG2D5ktbPTSx4Sv8c3wFT6K9hTKTCJA7HP76vQMGyS8yqt6gQUcPLcYRvZX3Ug3TPqD2G",
  "key2": "3UGoAyLQSP7u1oa5yDVdvzC6uKuf6T7BprdCTCoG6dFchgMiGumnqQ6gSksWDmo43GctmYUi71YE8KqW7W5rUqUs",
  "key3": "hm9xAhHwCjd8BCEAeXKzYhLhmBpBMe6pugjofGCjc2xbDx3MEfjn4PJZXcpJsUAWE3pJxGMLNXjCov5NQCheY9Z",
  "key4": "3wBtXfDfaacQPjaH9fEHM1e8nLBNh5QZhZ7AWp65e2MUF4VonwuGF11WF1F64k8bYdD3LMVJS45wbZKNhQztycqg",
  "key5": "56XizevyCbS9jzC7zTP7JyqApUXcjC9rCgLwkm1toN5Fktid3BHLsnTyQYZztLxxCEsFgwfog17RdYd161bSopR5",
  "key6": "4eKosL19NF9ibwSFWYpekdx75hw4SZHK5v1chFqJyCueQYJoyTnVWKPXih16oYpUqdy3RLnoQ7wDniTTCQS7H3JM",
  "key7": "2RTXz74CK9y4dX9aFwW6Vbu2xatjAsfVa5m8xka8PNABhnPGR4BJ1612NViC3RcJS2JUi1u5ojChnw1yNFgoRJRk",
  "key8": "4J7iNNBDpNCaAa969hnPr4SYR4zUx7d3dmjKhaZPuBgEtpjKZvEKerfUXEP6mzrd2PhtviiGARAMGkyHzKt3wbDf",
  "key9": "SCiurpRui6tmcRvfN2V1kPHPBwe1YALdjSbvURG6wwACg2z4MjdC4Ywf1xaBuqPcxqrBCu417gknL44Yv6iH2gp",
  "key10": "2AkP2WSARaT7TzQ3JDZWHHBaP5v49s9WV3Rb8oktXZvjucqzjkHLHVRNLSrJJrir6yt2nVfwP9zGsfvGRvLRQymd",
  "key11": "4ehgPzwCvMxPj6mo4yXy4PiJBNmPWh2GwSvsytb4NLHzk1BTZN6PdvzXNUnxyxfcDq9qv6oqDmhuXWvJkDXWpsg1",
  "key12": "2poh6x1PQ9xV5Lzm4iQSHGdSRaNWsHdJffmCB1dTE5UzP6gF63y7GFpQCzCPf4sabibVvGzZK1XnoY3gwacRDwpe",
  "key13": "5hgKiGS5sufLyXoeXaBXaAdYoNoPs1uoBAsyV39qLQmKF8G8L6WBHah6HT2Vneo8SBMmC1rPTWpWs2K55o8uX6iq",
  "key14": "3WSRaBzko7tvUunNPFetQR1bc16K64Xi18XFCA63i48aFBWPV5eT6PhLbUq1G1NragZ56tsCTzkT4F3VQV24QnjM",
  "key15": "ewZTuHjA6a1XUFf4zXStGX2edx7ZGrCbGc4jJLQDaF2V6RDHdKy8TahhTvTCZsmfQppJrkw4e3wPu4saGP1Cs4d",
  "key16": "4AivBAtHuHKa63KwWecW5owozA33Gi63JcX4EDHKjzbgHHtDnJjVput9TX9drceqCeqRtY47wub9N45NxnNFZRzo",
  "key17": "3iLi6HFGtTspC5bEk6frEfYPddJPhMybDPTkiMriUZPtS2w4wyqhMVS5zAppbyT3EC79vNVxMbuDAX4hTAAHZVea",
  "key18": "4nsCJU9me4CftWcp5WyipaETpmdidaM8dGF4HPsWwd2F3pZQwAxYgQ8qEHhp4ooHsLJVQzMcJVi7b1ddU1suZYs2",
  "key19": "61VuG6gHm3tSXVt2oDqsFb25fwNM7LAcKgkFp62dhKktb5WVHGq9jjLBuUVRvcigjy7w6FUjcpoJGg3xBxWJko5u",
  "key20": "BXD2gFySY7kqz69KB7E9LteAcEc5snazMe1gahGthypYxQoDE8qsworCHecFcKKgSy2Se42LegTEkrEwpiod4KR",
  "key21": "4BdyZZFhtLaud96GC4mbAgc3kxhtr3Z5m8FysM4pic98dE5E3JvMmB4XEqGeHdLnrpv44nAQS73aBUJFQT7YeSYE",
  "key22": "5pWChXa3EtBZQBP1PRHZcy3vpZ9PciNjaV2K2pb78oeZr81QBZVNJKEvA1Yb5qPZn44qTUoaeDXNXm9dPbEN85nm",
  "key23": "2FVt47azpmQzr7G7qme98D2xR2ng7Q4GkuYoRDsJ8ME5kSj9C39dnMv2mNDwjw73Q8z3B7qnCAh2xuJjZkwWWh99",
  "key24": "5hhr2RUMFgs4H3Z7RbbimiTBCKw7SdyunTXe2gF5UUpSpmhvtN7cxkueuDc4iVo6zDuGf1k9pANaHS11zcZh5T5w",
  "key25": "4NNHbJAoN2DgNbhUzsusFcnX54YBzFbJqRgy6mCXZ21v1AozMz1pRhXx2bJSUi1ZNBxiANdQjkjxf7kfZvUfYqmD"
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
