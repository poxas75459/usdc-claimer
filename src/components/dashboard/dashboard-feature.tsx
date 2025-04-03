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
    "3qWhT83tcAkhnKzVrYiNTKRAqabXU1w1EqNSso4BVfR7TU9LjqkLouhVqDdchi4CSDvkGrchZKcQyakzux88qjq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u6kWEYmNHF11NhFJnzQvQcrNgeFf2pqbrJnAKdDoq8s12ESeEmnzAK5MVY4TEtwnE4C6JM7oXeWKpyiiHJJPWmK",
  "key1": "3YWRbprTBET1NH7gH5VNbSpYX6sHmzQcd4HGRF28hhBSXtXjijftmTHivz89LxaMcJbmXSirN5MPrJyTUUugYGYP",
  "key2": "5vc4EDMp1Ywo2iKFRxfpPWerbfh5hNP8AreFRKBrLLH2Am7LujcrRKip3siKjVk4ndKYR7a3vcHyWyoF7f7JmHft",
  "key3": "5bpdrafF8coiqKs4bjwZJj93wqcpgtUeKJb9DioVm7xFo9uZFqtXXnVQyayzShvB825yAdkKtJUbLFziqaeR7a16",
  "key4": "umrVfAdFPHQKBucXpqkWm4XyLV1RmgifURetUEYF543ZpaG51YgEWFREycxp1DKjgNriaZqaAz5iUkoKUMxmsJr",
  "key5": "5hnEYDYpHqpd8jjzKdJgyojxK2TEnwJfqgABMt2szNGdvSdEqivXudY5MSNC6rJVBqm9Bc8tnJbUE5XzQGzhgyGT",
  "key6": "5zDnnxYmtaFyrA8B6cs62auyzeGMFA1vKLfjaGAwvLFNzttPLpVr679bDZUuz1ydk8y4fkCoFHyi7FeLPTk9zkgJ",
  "key7": "5CBz6YU4nP59tRxH2wyk2bomm61jX29dFHRGRYY4XMnDL1dnanQiXgWp1jp3nGTtEQVLz4BEQJjLxK4a6t2NKP2d",
  "key8": "22KvBEArQ4LBRMwefjguhGfFUHoorGPzJgfFhduDa3GHdMezxaDPLewmuqd3WrqCwFN2p19gwWJ7mMiAsLqaoYwz",
  "key9": "2bFUzMsgbashcvwG9XccAeHPxXQYEmpTGrhr2cE6ttrvnD4Rb69sQemEJ13opDjwPUyyQtepQ6evUEvArtmdEPNh",
  "key10": "613qwHZ9ALufzn3F1ACPh2aC8pUQy6YHSeyWKayM5Y9eMYVJ6yYeuDfdQcbX7zVvioi4en8V7zFHRRRkLN6SWs2A",
  "key11": "Fx4TrrsPdECuGksVhcRr6RJN3hUtA5GmM9pQv5qwngdZFrMdHmRdzPJKtoUdN96krVzBfV2EpkqGce9omcQxpNu",
  "key12": "25FUxNNsvpjQsTTdxs1vf4mGRF2SLYDHKM9K8bYwJXm17zQtoduQuYbfBEgnEBh6NeGA6v9njcGuRWspFHeUpSmj",
  "key13": "5srqGfE9WahBZfxjWNPm6kjfdwEwmSosZXVDGA3FErdwN7Gf9kEsykV1AA9uhPzvzLGEdCai6WKJwwCRPM3VjXQ8",
  "key14": "4A61QUZSFoeaQvqXckWgsFDPUp6iAWjj3jYTn9usJBEs8DczEdke8zSEzCJNS3wbS82cwUNj2ThT7Yk9ZYqVrJ7e",
  "key15": "2yQEojovbwfGdQVtoDTcbNG2CxoGFUv5P4iLzJz9m2QE4GRRLRjLddnetEk9m6S5UpxFb2tNcALcWygHWhvmhq25",
  "key16": "57ZR1AwWfh72Bnt2TYV39QT78GaAt6AxM4ibF5XWvxjYDs925Pc8S6SePFJPNJPQuFG7eSKz88Y8nXSNaWzjUYV6",
  "key17": "RjDhmYChmUbSKk1GQCLFzXox8bW68rvSJj1yN7PBpiutiYyTYEag3z7WtrRn8defmzWAcbUsrdtZaCDDCSzLVor",
  "key18": "K2ysnRRnbYAJRx1jRA5FR14haoJKST6JjQwBeoUFCVHzGGbmaY2YxuQ9gTK1cGtHcLaXmjx5hj49XAYd6QwXwCP",
  "key19": "4XoUuXddn9sgN3UR81KM9od3MKCzqkgLPM6BKBb2X9BtyzCRwEkrDYsUqNaDtLQhAzMFcWA759YngiGWFrdxTKou",
  "key20": "UdKe9chBP5KdGd4FW1yWEz21QP2nJsRAGQvNsiYYoB7t62DDZLjxHf5otpkkscHQWM518XnBrXacvSHKXVw9xGr",
  "key21": "54KoGWwLwSFwCQNCFKzj2rnMuWmxkp54CbM51jacEYuygxjebCWzH8BsCHXqpn4vwVw64NTXMxwnDGkszwuX3XAE",
  "key22": "5nZQfP4TnMEPvHvmwnH3xtaobmys5obL1fQGciTPsVewb13aSQPwHfiX4xiZKHv7WbFifMTLDjtg2bhHam5sBwif",
  "key23": "2xfFay5CF4reHanUXuM8e9iKFTzyLrQe9R64YxbRs8XvbnJKde2BTeEfBmQaVK7CoQSrF38Me3Aq3qZKgGQ6cfef",
  "key24": "r5ZianY2JnH17S53uBvs8Hjm3awB5V1EoGTQw8p2mb2ViwnV3H1mCThC1zTtDfstt8Eu6XChrfvfzdwKQT3FLrP",
  "key25": "3mo1eWA69bPXAQmyVrd5zxVjAR4PzMQfwrkUoShaE8GmCs9yA9zprZA7w2MUX4FiLrST1rtYiY7jRjsYmrSTxpsU",
  "key26": "3aWA4KfXbtTen5cJ9YKdiwCvNLxwpdU6CFiCb14e76EwVCBpYg4FmNjR9ixmysUQwTqSXcRDSeZWg3tJpg3MN58t",
  "key27": "24PsHWnt9RqrQW6RRcEKTkqq3ySxRysgd2o3YoFMpUmk13d4o1ushw5MdaWbcBrLFNbgEyfpY5QyGF7eQFiTa4KR",
  "key28": "4PMcyqHKPh9epPktMKGgyP2kbJTcVfHkPe5GdiseBPXzAUFSXGyCvbdVDpAjJjRpAq76YXbqLy5A98NhyHFtXzYL",
  "key29": "4Czg3wNn5E4VGqZni3ULXsCGqoscGFvQnmXzZSVrgKfPgyhPVs8vhGpNgKR8BAs51JWv2Kmb9FgVh1g4G1xrjpyL",
  "key30": "4cNwQHrRBjJX7bMkbeBWMvkwo56yErEqzjSBCk68tuPHMXmjwzgwqQD3EhKUKqa1ZY3DCCToJG1iHfQK1kphBZ4h",
  "key31": "4eB4kCJh9CZ2YWw74rkN2NkP3SjiHJXjEi5vvSDc4v4tpD6JsvgzQvw4LZek9WRQ1pNdPttwRsJRzULzhsEgr3St",
  "key32": "N4qcazQeEcV65owF4ZjbY4fYUuiVF3A5sZjKEd3vNtMAR2GWKL41VRdWN6rD5FawL8ad6p67BiHXf6deRu56m13",
  "key33": "2ND8LgZfzpDKqyaRzgjVNT1m32cT5nFzE6b354iTmdGzJowvus5YaWzLAQHmgMUCirGp3sMjYMVUjmVpe56wbZ77",
  "key34": "3Nanm4MJq3rf3PVaJnGsYZ1Y9N9cGpwT4AjupVnHT5vsnJ5X3dHVCm7Vhvnm32q761NPUDs8niCp7rxPEaGFWzqJ"
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
