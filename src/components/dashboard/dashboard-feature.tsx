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
    "3M1MEWV84914p6JatgeknWcEz26Uvm9uVSka5pK4wszCJMaspgC5hwx2npUUw8LBujAkKb8AvSvt7MNaRtgAhb5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ddqSRyeiSKd9JDE3DM1nU6CbJANyjjJEyHfe87cFRPSDnoGX6nCRNJtiSggxRHMYmi2ifFnXHfTt4Pwg7svRPgh",
  "key1": "2Tdt3Kzih2X7dpK53pfcDezhurBywRkHJbJTbUWfxcAypBQ2kmBBv9PgCrS9Shqn8A7Cu9FpT68SAwfSoYGjcwPV",
  "key2": "j5HQBjH7BBWb5JASPt98bAKv1gEzR2VdmU8MkjcPRbMJVLco2Juc3YJvXmqtYGq5ZRcnzASJKw66ynJF1DCR5US",
  "key3": "5HX5RpRoVopasHLrXnxUc74h9H3kimnrqtd4HoPw1ds82omMqVvTiMR3sQVt4xxD2vUxFLjhBxCmpNCcdj62Tb7Z",
  "key4": "4NDSeYc3fPZAj9auq1hTYWGWcCggUWNG3EDDjqidNST83CqtVT8Kp7yhpLHckMzfcu5AfNtrdFFa73s2H6XNu3vE",
  "key5": "RK8eumLh1tttmtar1XpSKvAU9uiQG8ev31df4N8SEESwf33EbacQqu5hpr1enHWzoSNdenNezLjpbZUw3rGgVkC",
  "key6": "34JNY5LPC99rVEJ682vRMPgYme6xJwwY3zbjjsq3V83fCeEUQ9SSrmKaE6jtsRZuXZGSEUrn6FdS2QJ8xwdNcUXf",
  "key7": "5tcvXPw3B5RQZJJ7oBYuZo5jvCwT5ixogJooV5XuL7KuH9m5EJ9d1HBxnDnEGUwHgtnNxz9qMrXhjmeN2yKBHJXF",
  "key8": "jiSbzB6PJ8Hb26WUk8fydi9aaRXxKzoGUhvutwA3DYb8WfAysvL8rF18MypJcxHuTeK6LF7YyBnH2pd145ia8eA",
  "key9": "5eNynU6E94vPiyxGSwnFm2ZkAeiEduBjS5GDZugNraMJErb9HZ9BBd3AFXE6Wj7mTKwxUZNLoQf3TVffpE6t8RQZ",
  "key10": "EG4H6zyiwG7FoC7aH5eC3Xn32RBTY1hxFDdzuYq3QvRFqnAkqkDbRrTfdP9zUHfUTFsddQqLU5dYu1N72mTpN72",
  "key11": "3uT3wX88cdCFfxZ12Fr1WzMPtHz3Wddvn9QugHWdGdZeAF6pPWCDQy9BrmEB2a8sbmefCXfLW8KN5YGKL6MksVVm",
  "key12": "63koCcaEAQbSAwqgwZ2mVSL94kg95MzSZSf7V9dhDhiXdhdDxpCwzdo4ju7Ee3xnAWqKeAE19dD6BY2iemRdrHYe",
  "key13": "2Pj84UBnMY6vmMaNtFEyAjJHRU2GUNxEZoUyCZDTg5uDK1nAzoV3K3xZC3NscKbg1z1Xovr6HkQvsBfhurCKu63n",
  "key14": "M5Dr13ArjjxTYLRBYL3KPyKigE8xgafMbDLmGu4ZmBWuFNuQhPAFg4waKqQ8sSmUbKeUfoteTC7Ks8wa1y816Rs",
  "key15": "2dWudxCXdzXJWdLjiQm7untRa8BczEneURjaHEkU7mdzQqRMg3tK4YGhKBwy5BwqB3JgCH9jPRKy2smyYjCMoCiX",
  "key16": "AQGVVJqn3TY9weJdfXdpQVtFaqkpCL3mYj3x9kjyxkKfCsTYF6FTzwyiLTTJPirTA96hdsxWoVwRSThKPL7j8gb",
  "key17": "2uApaWdML7QcftNAU76ymhwFYAEhGod2eVfNXPFceXGLdeW3Yq5oDs7zZcB9T4x5HBzv7D7Ko4r247Wb87r1YcK6",
  "key18": "4ayBYbbHhZmocuTMukGmEr7B5CGMyLeLMz2SqtVv4grEhtnSiw4vk7RkRR618icC5j7SsvR9ZyTBJihtffJWhwAa",
  "key19": "9ccgvDuQMcfqq5CEsuz6YPFkmUqw8iGesggt2zi8NbUQW1hXhTuQag57ECDfBGZrXJwfVbyfGhr2MuodydGpz8h",
  "key20": "3QfVgqvbg4x1pje1fPX5b5K8Mwr8UGZqNRvjK8UhdMWJ5CrTbRk3ALRqMjRdkWywEhoGG9giHoFm3s9vU8FYwz6s",
  "key21": "3uauGDrZL8dcjW5edTtzj1AXHCHHN9GE1BPzAHgkEjm9QH11uLfs67UYFtnBKiYQ6QV5GY6Dazr3wWgJRUbhENm2",
  "key22": "uEPYqtnwSF9ki8qdqooBntmLyoyDXZ8jf6rqGzaVTtsYRAbK9c1qn2rAk1ibDuRueLQ4nxWq9cPjDMtdh6zs7VR",
  "key23": "66ZcsyoFaQohDCpLqs2mpuvZFAFytKhh5uTEdh7JWJmqG2sno3RD2fNrU3LpBqYBEPMevkzRrmPtdPfg5hqm7KiY",
  "key24": "4YkVfZocoyoZtGEiDrLunR8FWz2S5cixUfSjh7nwXDFK1AKwAAYckp1GfUMGo7jJxCMuNiRsPH366TGLmvK9yh7C",
  "key25": "4qoamiFnf8dC4v4JnwoTbrHpCQ4TsUGmP6sNLMAWcq74qm91jjmjimgHnRzpSTeR8SpcxW5heY9d9HMif4XTvJNY",
  "key26": "28KeeYwzbndyhnrht7UanRieNKazirxU1z3fzEPk44mKiaAGvqzgnSub8YGn2E94XRF7LLMXogU7KV3XcZNFxnFZ",
  "key27": "5yThFVrrP8eHrt7z8nqC4GXKVwf86s8SMhEw82FrYe8kiAWYfbBHrEjWMLwGwfABjW5YA2fs5qJqxxQVCUovfvAZ",
  "key28": "4mAmYAitJWw9PVbCGKsXS6myV8TxoeUxauoKxe73p59XCQ3F74LU4BsYQ9oeEsXFirjdn1GwMjyQrxA4z9LMiiqf",
  "key29": "5pUe6C1uVCjdHhBGU2qSru5QRn1XJkDzGtn2cKrmEzc1ySeNa4cFXvjmLoHsG5cce4CohzsC8tKhGYHE1qVAVajN",
  "key30": "23h4SfXWRAqzHDjqrmav89MEYn6pqHdJbFgDBxyL4FuRztLpeBjMRUvehHzRBxrkN9VWtyszPKPa3xnzft9h3RZ3",
  "key31": "Xck3w6vYMfLvWg1DEtesjjmCz5pnKDFuRacB7AwgMkD6k4AVPZgXMpcCoe639bzgn9Eg57So7EXRHM82WHPqRFH"
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
