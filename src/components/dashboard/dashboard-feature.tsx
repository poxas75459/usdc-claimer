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
    "66QKMo2xZBjejEH2Vgb4FysnkhFyMitNfkUfXvqFHc8cGBy9Wx6hovbqus2Eyofip6hbnXV6b8qW3jLrsMDMND6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26As8HbN4kac96bv536Lh92PvH5wtSxMeM1Kit2tCHfva6124Z4jduyNqudbz2U6t86QvkiUrsUHh3gwP7JVNJw6",
  "key1": "2e31AmPGnYa7sXZrKpgYY6i7FjU3CPcUeTeoJLAFvUxmZRQyGVm4a3axjEAJJd33N53A5atUbAu4YahWRUjNqwU9",
  "key2": "2TF8nHxax9UtbviKeEuEyqtXWtTZZMqCfuyHjbn5aGwZKiWFWg7ogjEbrGgRaRopzJutwPL1BoqhWDcP2VqXudB9",
  "key3": "3N87LZkjU6iKNQErEw4FGqMrFRjrSHnzw4RBs1HSdwdqHzfZ5woc2h4RtdfSVVd8wj41R6qcqi32LQdeZcjB2stW",
  "key4": "2QCsk6totZtAaeSL7X8MUKuHtekm5JaD7ZMRe8FgzjgnBBVRYdsk8Py5kWSWRCtQt4tKw9bPop4gGMMftCae6DMj",
  "key5": "aY7MBVJmRKa1Wgy84bYqu7p499reQY9U2Tsi6ztAwJPfDDXgqdHMLBUpBub4qWkcZCQAYhR1wXi1WdcZDz8rsNU",
  "key6": "3Ct1StfzhXzGEUUBwXpAFo77n7k4TwWyMfbzNniRN6Haacs8LeLu8D5whyzvMLma9U38uyPn1JMXK13VfLCe3XKM",
  "key7": "QHjdG6mA8Rz8vh5AP69qW3AodndUWfM343QaW1uWeUXMMYYZ2kr9vx1KSBYA5vPWHisP3Ec1Cq92nMb2MKS1EGx",
  "key8": "5mmiENd36JqgVtUfKWu4aBkdtUTnpZc7i2maLqksEHuqp5AYj451YTt3eXVFiKETZBPKsRArZt1unBE1SNXCWFnC",
  "key9": "4TXH2JLDifPsAWFtdtLrfB9EWsVZpypUnNhxZ22PdTHo5njYPrqQkwREE514naknaiCa1DDTNrBuxrAZD4xba6ap",
  "key10": "nHBF88Cyav9s1UtGUTuiocjGXoeWN72DwpTx2PXP9HMxe7sAnbteo5DoRCEx6J6XZjPn3vFQwEwe6jPBe9bEWUX",
  "key11": "2V43PtvStmUtNz263n681dqqoJzch92JyAzCtd3ngud2vKmCiBWYJ1Vh4BigozQo9v2Ek2bejzb4wZoHDHU3E8Nz",
  "key12": "5ZRczhnZjxkbrRi74HZb496MCMicsvz34kRj9Ucngk9is2qkNZJwf3JnMpGjmTXZyaej19BhVbaJQVu25dmtTHMr",
  "key13": "5fCc54qGAKYKemKSpXfHczj33WD6LYsPzptHs1bx6VydYdrXTT5zFjGowPSdE1mgqehbPkUTdeC2KDKseQWTS15x",
  "key14": "4CnGHBPGNctCYr6VUXjBWqqUz1fsqarTx5v2stUWQxPEnWSePXEiXZX8UsXBN5MrvAbR6mfFmtZgRtYFsEwANZZk",
  "key15": "rAZBNZtJJMb55c3mA7RVtjUrWJJXAogEQmNJ256zeV2fCnT9TuebfxfjYmvSUeNsdoAbhdQsFKJcCESZ3ZSNs7v",
  "key16": "2uQasAsqxAjGkXbrGNs2ZoWXg6PFw68tGziWvPTKiCvzX5XpBRPHgyunNB27DyYqF871kRWVPWnkwLme3WemNiCd",
  "key17": "67Ff8hRH5gZbYHpJWNWMmns4MdP9cgBMWupQxZ2XD55SSvay2bYEAq5nxK4TszLifvxdeheB1bXVBWQwEqSuMktC",
  "key18": "4kM2nUL2WkgQ5reYE74kpoZQ5uACBUiNC3az5537zKAcLYTvki5LPstEWT74RvpX3mSMbdTr4kXst68XMnKNZF7T",
  "key19": "2mfBeLu8tozmE6QMnZouzakYw2XhGpXg5eLm1BzogQHANfEDEF3S5fmppSCMtng5anGHxGqz4q2JWmUXXgVL6gSY",
  "key20": "JTE6ngRJpURgD9B8uvCcB3j7RnJYxii58oYLqSDfW5bEFAdrS5EQWQbKkagHStZQQzWvZZZHXJmVqGegGt77qid",
  "key21": "4jm1YhuiZddADfyiJoUm563X3pU4XeZ3a4woX2nEKPBDHERxYaD8wFnF5XwEsTKbmMqUrP84ZndNy3ar6uLsnhHX",
  "key22": "2oeGj63qJ8M1eSsnKfWhqT9iqbZ3HMpp2Z8vzJNvCgxr6ow7kiM9thpfsxRL9QmgzpFX1GsVDnchDJWQBPuZxKXr",
  "key23": "3A5eB4ytL6Ti5baesrzSvjr4nX1E1TmQLgdAP3gjUD2rJKXNSBhfECLCUwXc7UpEQcrHa4yua2PoG6R26ix5YmaZ",
  "key24": "3sgUyXB9KbMCcu271LSc22RsQqoKna5gQEQia4ZCo62okfgc2DhcY83GSp5iUn5xbGWKy5Z3yZYYA4rk19U9ip3A",
  "key25": "u8EZdhYACvMsL8eD33GzEJorJ7hX2vRnjCZvcNQH8P3JfTzq8t9NSHReezao2F6HK2sd1mFYT9P1SH7CMERJtys",
  "key26": "5M4iupjFUjaGgARRwec72ZbZrUVRdTh1ZUjhaBNz9KV6XPGY2ds1NgqA8hP8REkd3hiVurDSp8dGHrrsXgS7RoJ1",
  "key27": "5PbkAPu4aqhYRMgua5LXTt3XiMFAfWbG5KV5qgPaCT2ZXM8SfEDhVwdotWAQ83AnMhzT72Lr15vbTvEsMmSKLQcK",
  "key28": "4EVFUh7u5SjUPiJY7ee5yg9WYv5cxXsEzNC6r3eFhX3KQNAkTurY55RZSjtWXLweCvn7t1Rg9VYY7SnGcBr77kjx",
  "key29": "3ZwLL87JLwBE3QnUu6oFKxUA35kuRJVQECQKMLCngpnzbJzS6MLV1qd7JjoAQ5ys5LHqpB8nrkSevrB6zrcPxZN1",
  "key30": "kRDpGj38NdyPFaSoZezpF5GzfWFkDCVz5LsBX94NSKYQXvpMfPoKETTCvvby2RFbX2bZMXJ5p87EQgkb2oQqoii",
  "key31": "5gtjJNoxBvdu4WMkW6JtkkUKTSmmaeeqVPPVdkYk7dwmzSEA1XBK4GNbtwarDLPS6T6LnjcWgZBn7cmYxJxeoncK",
  "key32": "4Ry63XRs8Fycnrs4TjDpAvQpWijT2JVsELdG3Pakzg4fJcVwtr9ABwDVn4x8Dz7yFawiN1HRfdz8NdbiAGvhxUW6",
  "key33": "3ELUtED3HPWtUVRJxBeYygfYCU8MHT3z92pxmnhhiSg5xjWEmtnNXHWBH28zUZVHzjeNbz3c3TG4ww5rsgP93B49",
  "key34": "5brrZxP7prWEJwf2nt1J4uAvSHRAfSsuChtTH3uETwLqbFmKWZnYa63oNZ9GMf68BgDLp4XnwCruCxhJJJVDV99M",
  "key35": "3NcsoYoTNFg8a9aScE19vg9ruRqAPqF2snAkfVQJSASm4sWkz2xgEbeAe1jTjVxPh3bYh9Nfn7zue6tZj8xGKsxy",
  "key36": "4rtcQvCAWLBP3WcZ8NkrgJa7Uug3Wa4Yt9kVMYDhNf2AnJcU2Q72L7fFR7v3WkovvJKHHybqrfK6GQyqSXNQEgXk"
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
