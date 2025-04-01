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
    "y493iP7PGYXUuhMoMzfCsDWp3gFeLdJuR5QX18utNgDwLLaswU9BCWRZpeTYrpVgxrvYBaoR7gw9DXr9A2bBnyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49WfqkwbM2UFQgcVsde8LDrYfxYQejcMoVY24pefMRHPbzSg3pA2tN6f3eHrDa58vsHT9hjzNChDA6Wfi5iryfUw",
  "key1": "2tVbStJs6LsgdvVho7u26KX23wpWLYgpLdaViKvBKWffbJzke1nvwa8GHgtGC8RKVJNmBfsYvmWv9o3EUT4eRJNb",
  "key2": "5au7ZzHK9x1uDfCYtYmAixCuhEsFF5X5hHAgdpFSw4UTqCzAxAho6n1ryQsQrtDWccjRoVv65mJ7t3mVxnLEyYD6",
  "key3": "5P825F1ff7Did2Zj6GYvNK5s7R2uK1Jk8YQfYj1EA3a5igd5oRfmxn6w6EVHG3qj31h5mvzFvNVoL5gc5G3iEXSJ",
  "key4": "96GSg9vMmeLvoNWrPbqDuHxaVkoUPcXoTBzYFvnTtU4pKLnufYFrHEj5SRLB7Z2o8ib947Zsc73RNbSMaWg2ho1",
  "key5": "2pGzrfmn7FouuBGRcMMBccEpEUAQtkhzPxqPRLR2eTsiy12RFsahBnHMoGdnpd1fQM1yDEyc8KoYHj3nGwANNstj",
  "key6": "4JrcekodoSt9dmeBiJGSbn7fLkxVw1yiMLdZZ81WQgEz85aBJfJNhXhTvWLKNovC7a3cmX6YacrH956qXYiCoc2o",
  "key7": "3pZy9SUKhgyRvym7Gcgaazywk2pCWU7fAdfXHBQDbvJHb6vTRY3sE1oJUDoXKwnaYZfdBP882tVWEQwLAc1wzQkd",
  "key8": "5SfG6gSJox3bDxh315c2Cntrag2Yb6sdAQRAPjhmRqvrr6aWWwjwWgDFiWJNRipcywUTAHc6uq9m39tYJo3ikzHV",
  "key9": "4VMwdX3WSckQ3ncTxxQnNrPZuARCM2JoGfTzqX9Jx7mN97dqBVJuc3gmUmH3UT8QUgwzhJSihBtJxj6t2Z2YWbE9",
  "key10": "5XcukpfBEKVc9vKM2Ur2p53GKti43XHHLEhKvr7vUuvDad7pCoMccX1sSqkGgkVXaHbxDTnYVtYvWdPfd4sPktAR",
  "key11": "kUGZyWJeQPADNmtkyco8Va5hrJhbztvZZ2QsBgxaR74vr5bjqtSmpucvXsJubjTGmdKXsR7uHmGDsVY4MUoQdMs",
  "key12": "XBmJED9jgaQ9Jp3dZQBjAkM3FErn5rW8jnr6gmb3g9qfBpXZCgMbL9ZexCsZgiYLGvhuR7hTX17nq2SsLVqvybW",
  "key13": "4nUck8TRFGuPsxJXRq8ZowFdtor9xnF3LkTReCXUZM78Bj4tB7D7hZNCM1HGaZxNLtnp7Tvh4uUrZbN2TbUYCuUJ",
  "key14": "5HVs6EnCGG6uopmjtWqxoqeNMSoheYPotCd9wFy8x7UTSwfYUpwrdbCvWxuhfa58Jj8QhXmppreJPfF6P6Snk3B7",
  "key15": "5k4FNABPXVRB4inymdZ22a9ZBDMfkdHCF7aVbzWPpAJgP8h45UCTUX9dYKEZt5Q7BWT856bx4FMQRFk5EpP3ZnG5",
  "key16": "5VWTP1mERNEieRrziwwstuF1pedK4pGMvVJSiAhnfFUa2Wu5Kn77eCGX2nMLGE1XovzphiR6d536r2hGERjeroDv",
  "key17": "4sAzpAtypAcShxtX8HHrdxiRCTSuQ69reHUSy91ctsUk68hxY1K5SLA6nEpznur5ieE4DRBCnA9Sd3p25962hcdx",
  "key18": "3XGSti1Mxhu4h2FmLwEJymANZTfoFrn9ysKSh8JVVJ96Z85Vm7gkRTahH7mCALwCcAHDwnUtFhoBW4wba5bTiyvn",
  "key19": "2paMFUqNsKknW5TmN3nKHuVzPU9x7Z8uAZNXcWJVdMepcDifewSUbd6aTgmHVSWbrULUrAabdsPWLeBTuSRRi4PW",
  "key20": "2RfLXHpL4ywRQx3eRdUo2UqLrFmSWAGe5MD2uCPTV2ikagDAJjA5smnJwe5crP49JqN8iNENmXHAsZnaLnXuYVvj",
  "key21": "FyQPCeNVBjCWV6ceNeuD1eG8yktrwpkftcaLV9EDvnSTxNkVg2kPxD6UuxN6w2khkdBiDMVX5sGuZwzXWT3r9x6",
  "key22": "UMVaPJrVdVavDofLbE1NN3uWp6MrD9aXTMCPvvhBvPG8R7ogNkATFwvETweVruKqxE1fdF5AyPZH6j9vZQznBBm",
  "key23": "remMbyX5fWeAR77rcrD5xk9AHLM1BguFAnw351ZasrXEB7rzhAHd8tb3K5QPVfeDw3AsjrQsDKVhbzQGJaC6txj",
  "key24": "4gmquhbx3L8BQoEmHLHuujxbw2pvWnZxsb4jCkx8cGL3vk1Bp3Vcayp7JbpwGpDagZkLDSVc4Upeu3eQCcTsYWWZ",
  "key25": "4b8ygmowcknUZ2J5oo1oXaBxwPs3YRp9w11QmiFwDBuuev9dR7G9k7s47th1A7JTRVfAAD6qFqynpdokzNxFSceC",
  "key26": "5m6Fm6LvNHVRyQ8HNZga6XFHSax7MPKWUS75Md1qKeiXX3FomzYsSwSH5z1FZWXZyot3sGRdV5gYcbCrFcSh4zsu",
  "key27": "4YW5fm7QPYNUNB4DANWzLqTENtAyRDqHhkPhgy1bivmjKpCSH9VdZFPz15fWtE8d8n4JLLokYdGasjwEx1GSz3pm"
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
