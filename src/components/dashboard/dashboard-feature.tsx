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
    "2erJf8A6wbPemcwQJXEDYNNSykp6ti8BCjXZyA8B6FrsWQYRzcXUt4wwMQ5iEm8w9Y3S7Zs5VFyX3bVbkUX2aQHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oRqhudswGPNXtGMVa81xmt31eTB59c7fVPniHMXF8SJRCWTH36799KTahf2NqVtfiEojMV2yZETVkpPdpXP7MNd",
  "key1": "4wTsbBvJb7768tmpa5TkmE2A9Um9snuDLtvB1uN4JQ9MWWxnVWV6fdGJSF4mFxXkyimBdoungFVcAwMav6kS9T6A",
  "key2": "5XiuC49Xe9TDuS68zf4iwi135dbLTJ7T724h5UniqMDDBEvcXhHYHiK3aFNEBDCcBebNRttmysiV1BBwgg7Stvbe",
  "key3": "doTK3eKZfXa1JKG3ausneZoepKi1dptwsZgJ65yLmRVYBceZ6dePfPNt6S2nWkVhkjwYeU4vVVSM1zQzWs7FKsU",
  "key4": "2oS7LpFckG1hWP8cq4dYhGYunEboobBMKzNC1p7jokWZFzuumL2S9osx8wm3LNGZBqY1xP2tC5zxwFZ5ovhS1YVe",
  "key5": "4L29HkC4ge7He8ZtSJKqRfXCnHc9X6DE7GeBX333meEUBnNuozjjDUs4FWeUvJgPf8UNN6LcBfQsJ37FnJdBJAq6",
  "key6": "ppLL1TQP4EC2NXamDmJPoY2SS5Lw7rUNoxzUCzHiDejYYKeoRJNF8z7f9FRcUgGKxrfwPxoLxbpLCV3Nw5p5bGK",
  "key7": "56JdLKcrLGjqXmNjxiMbQTXHBJSLy1pQ1z5uxruU5AYrqhts9wvD3mptLhdJhgoS3YHqmPKsWns5cYeeNBzkN4LE",
  "key8": "5Kx1WT67D4FCcuwqZZAfQ2FV7xrU4XxTdCgKSvC8dJ9UtBCGuHYnkfQuSb6xjzAP1x13JcFzbr4nAkn1Uagh4uCK",
  "key9": "4Ks22QUSr3Kg1gY3rLiBtHTxpwGzNpCFNyfwDtNyn5zSUiuG4q5gSmeSe9ko5pBsgnHsbykHSj8xBPJHHTiwRSbf",
  "key10": "3LSMXE3gpGvwn3KTcCRmQN5vPxCedf32MFW161jZd8JRQdLTMsgHwHitp2rggZLxA63XAots5nh6mVXCySf6AzXC",
  "key11": "LAKKKtEeoGqn4sa8sbCgCKJnajz3GyGeYv78Cnj3BvbcbpLcPsY2ZMbxzrTW5rKtea93Rq9N8oR1ZGm9gnMGcaC",
  "key12": "2qTNBWWqcuDTWiGzK1dwt6LwmevChMJezLzKPPpTpbG6Lt8CfdEB2szmGiiJY75ddBbcGd89moxyeQGq7Qnn3rVc",
  "key13": "51nMJ8NQwSZghMe6pHt1YgheaVjaTsPQBzhyct5uqnXRjLCxKM8JDjQrcGM6yFAAPJP85DN9j8govws8ayuTSrN2",
  "key14": "3W3FNoDbXH8E2KXni51c8TUHpiormYc1PZ4qobFWZ1bdwYV5tTJWQds3a4Xc2UHymGJCnCnSuu25NktQNiZ44r7f",
  "key15": "4nKztbWH1KNpV1G8sPEPok234KPnw1svo9wj416zWzXAddV48Te3mVF23mX8WDaDgUGJGie5LMkgRkKhwHbWhevJ",
  "key16": "28dxkVkMrJZbPRzg2Zef7UNsALQffvVMveuxiGv578a2SQ2BA4fxdJw5vbHFoVMa5Uc5BijgrTbBH2nG5hGe3JGZ",
  "key17": "4uysiAm6sX257agJUr8PMNABrd6cyxkthwcdsX2gX3aASQW8Xr3mhgqR2GBqWhnuSDM9wQMyf1JxmqrYkvpmnpYT",
  "key18": "TMWJvaT2RgHDbHYvwMGuRwvEVYB6AP3F15jAjUuge59LzLm7uetwMFRPBQBu2jxoB9Gy1T76hoYokwsdsWq7uSU",
  "key19": "SUeZz6r5SehD2FKsm8K4mJt4rXSdr5zW9fxuxdf9Gvvz1dJDDsgA1NFgs9vt1Km32DXqMYZivEQVCAXK7suHuxR",
  "key20": "4ZSuyHrM7WxLCVBPatD4Qum3jUp4FhfBvxSQfaRUAS156AthmPkGo1dEpWob8h6KdZpNK4jSpjK72zcmXcmcxvdD",
  "key21": "3gkVo7zNCenD5tPZYN8XrrvJbrMPrvVprgP92cQs8qngXcjUE57Th8Gy1WLex4ktnV1nkopZcPqWtQbZJUHNXZJq",
  "key22": "3qK4EgGjRMBLq8ic99Ss7yueX8TcuH64my36xSBWqHnZUVGt5AYyHTWUfRadE3yWfEsePbGc3s8DKx2fm3DGTGbS",
  "key23": "YwnVG2hwRDauc86YJKinFboesEvpvWikjTqdJkPjQ95TKyufxt2SkhENfnCFDzkS5zEoVWX9qveTchifu13db8H",
  "key24": "664F3Sd7CetQaTmwseRg5DFyKFXHPKKnR3oEeDqadzG6iGLkjsuyG8EXWm3wunDZ47TLDLd7EJsBhYNVTxmFreh4",
  "key25": "dkwZgHu2MiYPL8V3ook2yVBCJToh2bo9YJL8TcxPz7sXzgfoSvTAe29MTZciabKaoYs4QV72w2dqUirgRJvuSeA",
  "key26": "3RU9LBdfw9J6HMZykB6w4eAfRSpqG97674a8XEBACGAVP7GMHRZjJVeEtZMLi3fPhd2iKw2JyUa5E7LURjCo7NJi",
  "key27": "5WQVXVNta9KjgjUMzi7RM3eL9fSBCawxz6TtyKLrwn6AjxLDznMEjfx9EtiXiUqmJgH652aeUxaXd6ZauGKVRRfZ",
  "key28": "5o6VzvoUHgXQD2toGvXvP7hSeX2VG5jZeQeim19r1ePLbB7mSrfuU9HsVa3hMJ9qMUbM4D7jAqbJ4YV55vq2WY42",
  "key29": "5cHFoi81xsUaoavYKmmapMbE9Aekp35rFEEepp7W42qTSoHHP3ZF6pChfJPDKt2WPhk17j9NiLTFnrnNRuujXGrS"
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
