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
    "2hmSYpCoAyn7MGWFcahxerBdNMbL3NeBhWFNMZgjKdtxC4ev76AuBZcxbvMzJjs9Q9od7o3eBMxCNEqmqa1Qe9JK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FezWWu3fi5hXYcadV6xmdsAoQBzQnPkHyDxgzsjZHWgJ9SM4dxR67qoz5P4YkczL3rwTMMNV13sLYC2K8FQqhb8",
  "key1": "9ffpo9U2Y5tSfEkp2kWUXH6qtZPqr48aJUVKhhfrok2L7pqXcaXgCHubinsDXMu6pYs5hxzpw9rR2g3uHCEHxja",
  "key2": "2awquJceix2Mh9KXJWEHtdHRucNMqrPYTg2vfzry64a2rHhRVGFsgGJhfSWWVUnYbEYgbtrrkxKAo5kZDsQo7cgZ",
  "key3": "4YB6ntiz3oxeK5TWbg7uyLz6BQZAayT7DjNUHiCLeiuobzMGXwu7QBZYcoGSZDoABTH2HsDds2S2RAFGTLSbGyaX",
  "key4": "4mGYFY1CQgkTvmTTYTdML9Kiztwbyu1i278GyuA4z45pnMFTuYtY2To2nQpdqhXsHEypAox67tFqXrKKfEYCGjAQ",
  "key5": "3KKBo47yjJdajPVsyKX72KLxVMKuo3pPjAhXDMYLDqa4AT9cgRHdBWrTfwZtXxJepLXvmxhXc7bSgUtE5MUew3q8",
  "key6": "2c85KEaPgc8iymCHhTyEfCepQZd1ohKizFQTdxxMox2kBUuUFghCwRnHhnUS9vkBAnFKVAbJohBhQdoQJ3nvUmaa",
  "key7": "3gztQuG3CcFVFdGyuSs9fLD9ZRyMB5mUrfYT5dcvFH6r3usacQfCKb3KAaVhnymGB8zw7NnEEHE84zz5V14Uqdru",
  "key8": "4Sru9dgYrzvscwo2vNA6WmyAhjNnWraDPtLEt1u7WeK5Kc71yfRmbxoyAebGqwpMLCS4nYsFk7QXtzYcdRnM9vG",
  "key9": "3QNCpidNqZSxAb1wMYRdpg6Z22fohn6JwqbZ4NtgpxzJoi3EfukKaxVRoRp2acLyjFXFCKSPdJgZzEE833FdpdcM",
  "key10": "mV6gAfLNaw1By694jYvhu1tcGw6dccVwTPERWtWWP6vzNcSchyFZsBW5kTeDN5M6rU3n9eqSGqE8r1Fdm2SdB4H",
  "key11": "5KZH7pJEZpNbnS7dt85TgzKXGYXHNj94fspWmj3ZPp3PUJ12X51CnwCWtohZPKrSksdmPN5FSLe4MavinxN263yh",
  "key12": "5u5BJ6tQHDmS4wP1uXoGAiXpDsHYHkEhV1AHvjPo8XNcroKPDXghZ4L5xryHUQKyUWDEKnKvUstUs6E1Cj56Yn8C",
  "key13": "4mjq1PhQN7jCyxZkikgHWN732gxLEcHfwRfRSRCZP12gyXivHBai1B6YSKHeYPVKc3k8Swc7b9kdodEAfXDK9LyZ",
  "key14": "4TYn36t99qGA7vBKizjP1V3pFvBG2Sg1XLDQhg9yP9xtZvgoxeESMnjyrL8gt8swhaF26KBCRLDrg8ZFxFs93tLW",
  "key15": "49qczopSLiZaAQSdBYr8S3z3LuWaEix3SNQ3SZVV1zpigxPjeWBb3erXc7Wa6riGUzKeAeZBNsr2PbNmgJtqLHKE",
  "key16": "JgkqVe3qYxoMsr2iedQ8j8f5itnpdQ4pctFi2YyjWVC7Zs8LJ5eBTZxeT418UoGVNadTGsXnMPMNSZFQpXhsLZr",
  "key17": "2gsXp6pvQhzMAuRrfH4sTivP3piaG7vcZbwNEvNKpbgVBhLi5PUC8ncfSRj6dr8SZDaLsTqBPpqmkLxUy8Gp9R6h",
  "key18": "4Xhkz1XGc94QyceN8eBY3QHfHnmFbMseNSfXzYoRaGDo9CqFhsw4eLNPfwsxVhFHQdeUVR9cefKvrtP9U7h6sfzU",
  "key19": "5fnfrAzkWW1LBG6JVERtBmaLDTsXkJzj3MszquiLd95ADDFVVJA5q2MEKr73zVWLxPzXLQ3pHvbYpXQTVPqS4FWw",
  "key20": "4KvxrTYyTXeoA8workpGSYoGna3ghnYbAsechpzrU6GtCmwbiN6YpRacqgADDajby7SAVut8okeYGuUrnFgamts4",
  "key21": "5hr6Vu5JmjQgQPmJUM8hBr6ZXVn9F2TzCHfNhi8ik6Ma2KyizWQpAFiAeLbeEQopmkZWBTRti9sGdmVsWkNLzCuV",
  "key22": "32ofoxuimUcYmdfoDLsAS1VMmHtkCGbU7S1TLp5muUsCvf4DSxS5UZ3Uvbt1uSVT32fkwPPk75XbAsEoA13QvyfY",
  "key23": "3nWuDjWACSUnrb1MzftvUSrJWmEn31peCZuDi7StaT4JixMPhSuWFQr5rtxnQb5c1Z6yJpJfuuNySnxen8P3ToGQ",
  "key24": "4mjFSYky8A4rzMHbDi8DCqyosWcdtjkWZ5zLWLMHrHRoqWNNSk4YCUwd4Jp9ZKUjg7W7e6eUuvbMX2Qhm9EgTfrG",
  "key25": "kwag5cPKVfe6Q7JnUXk7obReVhqKEqdhfVy5kF9K3ZXJriJq7AYd14TPke2ipLXZ8BL4cv6bVxXXE2UCbjz3tT2",
  "key26": "ZucnBq7ZK4eLR9tvVLJcgk4TQWypfectdzFMFx8NUMxPNX2zMsSAc8VdjbkhVWEGz4q2fJEQe75y6XsKMsSQc85",
  "key27": "ZGwizHJCk5g6YdqQ49RFPT3YMqCbJrAmRzvk6AL2STWKGLLBDG8FP3nU6W1tRbaX28hGH41eZuhwQaj3aN5a8fA",
  "key28": "4j4BiejAzgbjvVCjs5NgRwxCaEXbYoeLf3NHsPzmoE2idgQBsgtu7wx4BHQMjyYmB1A7MYnjqB2C4ebvgQyWkotA",
  "key29": "3Tj2BPqYpWtEebMPmK3byCi5E7ykrokkVFJ73dUZdtqThBaTAD6qaKMzc4P6McHsQZUG6idx58M28c3n8y6UPThh",
  "key30": "5gZqpPDznHZJEp13sovSRpzXFtSmMsg92FoVTW3UfmsnfxvvGVAZ54Sct8pZPJ3XnAFMZHdarbyMYCpgA3YNAySk"
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
