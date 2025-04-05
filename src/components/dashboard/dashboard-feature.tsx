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
    "5K7cvtkfjqyVrAf7ShqVDzxJg1hyzpgF1uZCjMiWBYBDpDdDerHe48BMnb6FR5UTzvGWWseUbjPV4PQTEuAzXD7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ydJhoJ2VynokpLB7wWQEXqHEM4k9kWLnKeprTw3894RCtRLfyo4tHi1xQQDpmLjxwa4vajyuYmxEf2Pthawx58u",
  "key1": "2odBCg5hX8YGKkDWJPfHEKb1nDhnYJ6eHNMWQD9BFcr49gLUrua82v8tHj7x9MFCXZj8i9pFL3TxvXPLe1hYRVis",
  "key2": "5esPUjQYnDFo5GZqVuaMGSEFM6PjQpheYuLWSevB9bhbUyT2CuX7DzZ69ziP1FLbMf4g7Tyf755ct6C9F64sZkFN",
  "key3": "R7u4Y82uKZVCdz3vxkPwgktikuberqDmB5pmPmjV4PfybrDFqEYgNVFgUvwkStU5aZkgY1RbPonAxQNyLFzRZ9y",
  "key4": "Kx9KhyVp6u4qYkQ54hPTEW3y6nY4L3MDJ9xYUaxjV2bLuxHkXsCUGQxFgWzS82dsUqfqwwgDvVvkWzVBDTD8aEi",
  "key5": "34X1EAfg5tsRgXbWMic9uouP6z5Lc4NRK8jD8ar1n5BHYLB41mribuzYTHMsv3ZBLpXdhUKcVngqPhbymwg97imZ",
  "key6": "2wusBRtEYzei4sMRrRyk4GHpDT4Fo1KUBH8ZBxKSNhTVgLcAv4N1ETvksyoWYJnKb73EjE88DNaMmzPGKXNuGenN",
  "key7": "4aMXKqMPRHSq2QzK8BSqBJdAJx3ynAjUfQsUk6s9YgCN3F38Y4XmuyJXqUo6rCQ2xULXTLw2rRzbDf3GsbtRVE9Z",
  "key8": "5DfZmoYgkyTPWa3jbXYBbdiEh9bzp1257tmpgGa6F8hM5uJgBVcKkKuAXLhntM1FV6x1rCyYYPuwr6KHXX2LyyAP",
  "key9": "2SsNZ8u6tijyb2P8JCbwxcDPBBnqJghsQnbQBrNFyyeJ8y7nZZwy47EgU8rrUrY4pegoDtWP2RVm5ZMispmMxDy3",
  "key10": "46bTEoM3ztaPvcXnE45AMADXjEzVHJL82A9ksEHHyGrsWmjkzRLm6V4c7Cs9aRJeZiziBreEdiP1VAivHSauhYjE",
  "key11": "4Dj8iJMSeWouS5SSxRMs447Z5AUun1Kt9gUfKCsJFVSoYTS53UwmxH3AgqVP6cLymYVTTkwaN4MgrNNFzXSUKrBd",
  "key12": "AvbhixWHka2fAbJha5GWXC6qv2cEjxFEhpCaZxuUh7oZ6wJ2VU7qjFwQ3WBQb9cAn9beLZvHX3TVWFR51RwtiQU",
  "key13": "4TsSfY4Y2HsK8ZKokWaW1bajEKDSLifVMpSbHEtCBUeSVnp19BH4fggHwiMSjYskGG2wuv19dxVUp7a8iL1fDcbS",
  "key14": "2nyBDmqjq4gzmCCDMVPZLVtMZc24GcMDzsUfgoa9FF9Gc9FeXFZaNxhRzJPw9GT3867YCoVydoReLAkg5Uk2HBkp",
  "key15": "5LJ5t9m1pdCai78rC4fDEwZpPgrrHz2nMJEWJxNjVgEh3o2kEpSh5nnm1CM8EdKy7t1tJKvq7a8HjrzPyJEZxoTL",
  "key16": "2QM9Ymb67bDhLi5mebpGedyM9nJwLEu5x16NJbouANZSiv2xcNjYmUKcsPEtw2hgZ9btdETvbxYLSmWni8RfPaFn",
  "key17": "2tE6U3Rm4m4sHLS5MvHmvjN72CTQSk8Tfi8ATedZPpt9RbvNQDuWFtP6ozVLsrtmH1MqvPNzHhCMVLyg738YdaPn",
  "key18": "47W1cCk6SYnfvw5kwLHaymiMzqDpz5KMzyr5zdhf4aW8NjpyjWH2ksnhAPybD3xHvydCCFYkXFJ6cgnsRubqgEhy",
  "key19": "4J6TTbq5Mg4EYhXzQTGNvdytZHSc2KUeMri2gRbzGBGsZVFriB61JwHjezpepEaKHXJYWqCZNqgmLMc9TVcwPnGL",
  "key20": "5psbd1s9daVWNEHJDYmWSFG3SCSMfJW4RvbrAqycQQaeYDxjHEDmnTfnJoUKXqvFjACvuBMXrNftstszNZmt5rXD",
  "key21": "5J2NjT6AQkbAdLTT8TdYTUjR9dxcEQAjWhEpq7EV66ZQayAJpcmfjNVQehpggS8tx9eFtEXFq2Pr67iHvA7yPd4d",
  "key22": "mPToEtZAe3sYRtkJtv3T8zPy1vSC5de6MxNVJidtXLsbMuLu6B18f2ECqbdHbTu1npDcxvYushJmtKZq72sCrZK",
  "key23": "662KE8P266Fk3Cath1gjsrWxhgwPUfzQgrKCDsz4tLRuxmiMq5oojp93rt1FK1wSBwUd6zTDNyYbj3CBdSHU36S1",
  "key24": "3WzBbFPHutdY5iGVcLexRa6EjoW93r3wYoBudAj8UJryEPdKL5FLDXf1MGgXCE7pX6as7esdhvvANeQPg6FDus4s",
  "key25": "KT6FmZjSnPxzhRMUNWLJtoFxoSFpJN4fvSaHinJ7AHjRZNpGue91oworg9xv3dtUAbr2YCRMJZAkVAtW1ECf6iF",
  "key26": "41yxkjjhWMqq4gPsHh9AVDbqj8fBgzkEpSTXCNq7oAUVboEyrccTkh2QTcHZFUUKetiZQDoNbgBdid4WBMoATJs",
  "key27": "gKK8ELKAg5Ui1dgeXgmJVQC3XXntrQg4g97tBTy8DNxeSngREx11V4bUychefETfSRVmTJAxqJnPikn9tyswQr4",
  "key28": "5KaYc5nuRCpDcYMXuwnzWey8nhvvw2Ht2C7ufuHnz5AXp3J8YPGrF1FwPvfozNR74xh18hBDBMk9T3LWFWsKB2h7",
  "key29": "2mLfnyX95M2BYgbvSLYqcPsJJdEkAup4JFrzLyV3ruAp65mhq1DMz8jvt71G7A4EbeEC1jMeWFcyZ3JxUkBooQvW",
  "key30": "3YdDk7jEXv14iSiwXRtVosJECWBkjaGtGYLp5Whv4Zj1oJKS28KqzAn7STBCgFuvyLBiqBENZHPuH4ydBfYXquZw",
  "key31": "471h5GFS9PWkyQUfoLst3oHh11pPNa7HNpkzDS3z8tBPPhZUjQwgkWHsa1juPwbPMZoGnryQPENb2FMwk5NZDed7"
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
