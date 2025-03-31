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
    "65mnuwwb2uDYKXAdkTmQSdziydGGJFM2JxGUyKeXc95TRn1fu8WgDDgGE4Cq5gCYsddeUG1ZLF1LbQWHiQsb7ea4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SXWjj1FUyDmuY1mNsP2VMEKzpNdV6ukuVLuLkp1bG9VyLfH8McfPh6tFL9GmSpdSX9FfxjgRUYrgzfZgLpexgFe",
  "key1": "42khP5FTAYmkhPqNKYpnDSFkTZR9bFtWGsMoaY3hR6nEf5eifGBGS9NFDaMRiZEX6m1A1uN1JWywvJEucYhE8SoQ",
  "key2": "5PemLeNjHdbPB2sGRM4SFnkXxim329es3okCBbL45JDjA25Crsm1wFjeFWSAGUuWVfBvGmXoH8P8noBWYA3dPaCp",
  "key3": "2o1voa3tpgaLNoaBwN2U84qnfpkwGUvABtc4CJjc28LY6NwFNTjJpJ7MQa5A3sWWtMmNG67qhE2oeGbzAasL1Xwu",
  "key4": "28S9fmnN9djxxRfZWsLPgv9eLk2ERP31qp6WWQqgvxKievAHTUnSP6TFvu6KndHn17wbYrtrXAcf2z3mivcrb7Zy",
  "key5": "4MSZiYtnwpSLupuhiGa2hwsPzTiU5ee8krpJx5C6LJQfzw96LuYsRqcHCSQnbhoeFGeyuXw8QNcJgSBpuchvtV1M",
  "key6": "5LUfQCWxBKNwsqeaRUFEvZxfr9xE7xqKvhBNZoMgWmSTFkmAfubPZUzzUwgnB5D77LjzXgZSC1drqtHcgm8uX1Wx",
  "key7": "244oopv9a8be5peqZxHXTF3JZkadwjwhsQ97a1WiGEipnZa7jcHn93vm37DQgPVVwYJoZYBfac1W5fPHHYtw9DUL",
  "key8": "KjxwbmTrWuKT7wzjoeKt6yZKgCWW9Agn6CuJq49p69mDmGLfe34yj55juttdfCXwvPc28nNQpxWHJBG3HAdbb2X",
  "key9": "4XAK1epmkcyZHEi4BJtzVUs1PoYeMpe4Ed229UdUJB9zEHE3Crhf5Xg2CoDy4PRSyTGYKAnbAGy2rpLsykJ2BKUi",
  "key10": "27j3VozMaKNvAtJg9szGq6mn1X1sYeUjwufUAhxQ6ZUWErUDKqD5Q2DEF1ozhrUQQbuKniG3cNtQ7ffrM4mk9BkA",
  "key11": "3jBj3HjKevkgcNdQD1iAchiP6vhvNftw4CFPRaLnHAgS5imvjJHUUvoKT573HJFFtKHv2TgRptyMHvGFY6XeXozr",
  "key12": "4qAUnUe91qBmBZLJnnmhdK4sW3gmgqY92jNJmfyXkVY6z6KTgDbtt9v9u2VUhSCEtf8wQjEo1C8t3AebSpYSkfZ5",
  "key13": "3reedqz6zRCBuN2RJeYwxZ631RstzEC1j4pZbcucaGof1zHPZX6QdNNSAGLPK91oNRQbqeoXRfQ52h56MTRv7yng",
  "key14": "3myZuomqPYGTmTsqJE8jU49Z8mZfXp7EEX33hvt4cZDjh7vBPn4DXxWGyMANAfRMxGY83UtXSTwPaddV9kSTbCgq",
  "key15": "3KF1KENwQKfhQPmo4a7ATjYTpq5fkyTytcBCgTwfjLvpdqsifQjbAHjHjCtwcnaCoSctgdP9kS7sQpnaUHhN5yVJ",
  "key16": "3PtVzLiyT8RS98kMFNbuW1W7PAP14RYGGcrAoBr7av2JGQ6MrcTAVHoq2Ns4pdZjCQ4zyYNgfDfdcjuFmanwYGJB",
  "key17": "PYdgZQZjjLLMNf9K4AHS3eQTkoDwXzREccRnpi6zMNjVE7HptSsZFhSmGTEayryYGERWbh6BZzsxUrdZ8udWmaA",
  "key18": "5DNV4Ge9rkHEb1mBMo8iVGL76zkYdF6D7rKUYBsJkzP1Rv2X8ktRyr59jvAUAiMbxm4GoprsVU2UvXfiGyR8Zr7N",
  "key19": "4Fcer21PyernMwETtLrjbmNZs7Xm9nmZp7d9mR1DMy2qQygvtQNHsPfUddBRvegwyt2EqM5doRtPwB5o3SHPWDVJ",
  "key20": "4KdzLhESdqjE2wmNqFPAfy2uXj8HoDBxBW5QBMFSTaVBj2PAkeouqpqr79tDpGeKWJsugWc2D7zMb2GE6MXU531n",
  "key21": "5FDpdPyWs6Ad1UxtHj1vNQdPu4v5SmB3eJyG1dRiCJBj9pmRGFs4huz4A1JQAYMt7ZXSLeNBEuvAcBFDWy1Kctkw",
  "key22": "5UvLCNUJsn3CEBy8Q6USC9QwBztEpyvKfz6CspqnXTQvP4i185AkUPJKBmnnMs2wuyCo5GHu1uiupeMuxEoTReqn",
  "key23": "TVUGZ9mBmgQpUBa5ddahdeJJxSSHkxf5t2PcvMJu83gMofzW92sCsYWaX8SAZoTc8ww5b2aVR7eKfXWP3CtzSVt",
  "key24": "4gjRxNEEVLzGCUjWqjzfgEVumZdLwoeuc8h8jSz6xyi8nVou7KP1zkFiGU8jRPdEXLcehdEWokmZNTVPnMrCNQ3L",
  "key25": "5mzAnKFusTqLsCnF1ctc4JVDGrXQyS1qhwoUmxjZVMr281cLbJ23pzndAuRA1uXVS6BLue27foKBbWnGnHw2iUuj",
  "key26": "4LMVQX99uY99TZb7As6QTJ3yhzZUy1chieugc3J7sUH6Ph1YFk5NTTAyUJog1XHCgmfzKkquKGAfW3XsdDNcYPNM",
  "key27": "4Xx3Z5qWctSaA9HFrJkVuForxrYHkEkift7NFUNB9HvktPdTzkbqqnCSBEsQ5bE9tL82pNPymidWUo4NhvCBS7zh",
  "key28": "fGV8k1TXV9B7JAHZwXtu1wTyEsNSosQa49TbjTzxdvHyfkbxQzHHHWJHYprbUp3fDTVuionSBeNZ4z7bKi9biYX",
  "key29": "2y3vpUqrWrat2ENs5vuyhT3DQNLiMcedryvKjviDAy3TxfmjSs2McUWMFMu1FLhUvLviUvVpSpSab6MUU8MB4VYX",
  "key30": "2hvJwg87nHtfs8ywLugThXTxv9JJdkqGn5jJ1NHSbuNVgi2xPdXGkFx9Wex4v32QvCEan4724rpXJ8VYnRrN2S9C",
  "key31": "cJVoNYmCgUe7MXhTySLg8TU6FcjDsWc8A8tzh553qDR7WchPVYdLAWUeJbfjvKH9aWmz8etcdLB2ZDKJWrmHiKp",
  "key32": "65MB6qjBL6fBy4X9brAbHFK9qmFmuQvejypSafXKPQrKehL3Enp8ZfzejyJHvNkLo7uXzwWYF9p9powcFHG6EiVk",
  "key33": "2EC2JKQte7jN8zbrZSBUL9MgNx7Fm6gv3Z359C9GusDoeCCm6dyC3PcB2Azxp7pCSBbXbqku5onN8nZMC3VMn8GY",
  "key34": "24kAMV5a2oaD2pLPg4oRNTQEWzwhkvozTviswWXq89t14mXPTErjTL1sucNA9dsB8ySQX8icPTdPVuL1KAMaFAUH",
  "key35": "5SvbRePApMgUZ1K2KzeKT71FnhLyjNy5RqoBGAUZhKvW6kD2N88trGBu8boovC3pXQtpcngnghv9CNpZY7ZxHHaL",
  "key36": "5uB7havCQp5WHAzy54aVesu3Gubm4M2S5sZYkTvPRuCizjmMPGVWqg32uuzQkD1qZUxutgEpqjmjN25S1CRkkMQS",
  "key37": "t9PwUHerh82t8gLMtkPy1KNy4i5zyBUMuQkA8oUvyFtpJdeCqoQ5n4oPMETiCAE3p2h6xNNgbqvgNhXFT1rmFzn",
  "key38": "2CVH3BAzYdUEiX1jXwsthmsHdAeg98KGa3RLFtcpiTyWbcRMkqRu3HvPCwKxtXQDQadWKcwcXoPxzNFn84beiipq"
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
