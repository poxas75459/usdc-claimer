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
    "2Xux6oTe5GrBTLniYBT9kWjss5MN6SyMSDyPBfj7CfWSUwEvjJg14jmJGx69bQbdQTiDYfeWERbA4L8qzGgiUp8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XQ1jkMVQ4Fg11r1NQTt54XsHg44SKxfKf29VSZS7EJcQtznU7bTETynqbU6UoToSDuodx5QapmgofHydV4Pjay",
  "key1": "zTCSdYEU2N1Xwdx2xFMALXRvk77ywxxRQu2dEKYvdCoHwzypD7gCsjXJCnLGZqZPbFZFJ28GpyaZoqjfJqECjh1",
  "key2": "2rwBkAQiWdhAQQWHuJ1coPKkcCWubTwpJcpGDahnzDJSgkD4AuF34WmnTEjYGPwksxPutSWCt3sDmSb3iJVEFqVc",
  "key3": "5gNgp3eMQEZGEcVbXf8ZUAbHddSexPcUE1xJ4rt8rHxX3AdP25TbDaPkpBtvTANWgiE7NnCNkEQE2B9ncViFMwCP",
  "key4": "2MKDoVs33gPGufzk1gcmxJth2uXZDLpUkpeRK7cRELiRT76p5h3tvjdHE2G2611wWur7dTYKojb6WNf71zAoKJuJ",
  "key5": "3JyxqCSP4t7VQgXVpJ6VcLVKC93ZYxcUJWG2wsgpcf73CRDzp1SZAYd9JwB63LqiKYKNRmgsM845dAJWqs83bxqX",
  "key6": "3dFtXqvGpTBdjszzajA4dUVJZ3vrHAF1v7PhUBArKaki15Z8dqhxrLjNkZtCVBEs8QSMKJvuPD38Y39DRCE32qmG",
  "key7": "3hp1fVK5NEC9xy6FmnLmiSibJtcsA65NbqjphFAeUya8DZGHJbTbjgKv9Gs9N3KzhLHMNNj4sXbL7oE9o2B2YaND",
  "key8": "3YWPyRKRzrfh9F44TkDa2LmaPvkfYuMwrBYiDQuEUPsHhS1JcakNk8UqJ31cdeJX9k3PC8iZtWZ2bLnh8Fm4jX27",
  "key9": "2jw37HPm2aqQ6bLdSE2aMwBBWU6GPCQ75nz2mfxzrJyUnyCpea9KMF6TYbp2hMNNX8DfPFBy9wJHLiHD6kAFGBDz",
  "key10": "2kW3dmSGc73b4Lg4kFrKRJ2ihQBBdyG1d3Qjg2HT7CfPAoJazJjxsZ75dSygXhXumGoCBrG7pLX2M9QAgegT83Ua",
  "key11": "3Duf8kyjgkm2izX5BxGDrYtuxHhB99s37brHiVyjMDkBx4pG1a25ARLLUVwGnkebyrsrRyDn3XVo2j9CBdCapD1v",
  "key12": "4rEN9yeAqFTMEnZRc1ovEsfe4vu782sjjMkfiQvmAigg1YBBAyABjg3T1tY8gw1tyo6iibgxuCxSp9WfjoF9v5cX",
  "key13": "5f2SoxPQEvs1Eb6qDJuK2pyiyP5TEcbsQMZzgPV6XkjrtE5xkFuQCurHAguzsVZrJmBb3ifU2jQUmGSSxV2QQiU8",
  "key14": "2HsbqSDCpdwJ52muW4y195GePqtyQkE7MUTVNjYRJ7GdJtewqmnQTNoRM2DrYTAJgFkcJAH5KNvXa5y9KaLgKf2h",
  "key15": "HS1Kdp6F2rg9DbBqGbpCHHQ28PCwUQ6nDn2dR4qdjh9HmHv2JKzNeYFhfTCTorpP83eF47NDvbEnen6H16i6vye",
  "key16": "wSetysxV3RZz8hYRteuNZuepkereRnB6cRC3LBd5qEVzSDugBNbNeuWnFx6anBmwTDsEHNXMthm833YVJczngjz",
  "key17": "tb3KvvtSuK5y75QnxW4NHXgdZyk4Dc6hW83p8bS1Y2Zg3efPBRn2EDML48Lxz2xGuZUGJ75dFVcU1EdEHHhUmM1",
  "key18": "93te1kbXf1LUG3AxZttx7Fuz9tmpB2fGuVN4tDN6z9SGdU16WTqrTVNHMag9VhPzGeh5m2BwYtSkuXhASoH2ymc",
  "key19": "j4pPug78AebYEy661oxcYWaxEH6q7xedPwEgXsu6NF1iXz5BVBrN1Bv2WVmi7pDp1w4bVKvJnKRg7zeEmjZJwF6",
  "key20": "65pfcXyngRifvLEJTQKvV61S9DxvmaUNXKi8r2jbQB6bVfV4F4QzJGSu75watD8LFvAD9qLbn2MQSYbLjDeSpHp6",
  "key21": "56QFuiMpobtsbUpYFqhXjGDCAm8PwDoaL3ttJfi8uFZDibmhNcwCfyGgN4DVqcCn81MioxkUyD3L15VCMYJhMuea",
  "key22": "3TNrSWeS1pNpTfWbjvzccku8Z2ofT9AXgUdjdRrt5VhCZFLd7kRF1kDmsJce36UHWDYsJSVxVf8AGnbFAV1gea2A",
  "key23": "5SBJ4yeLzB8PpKba7fMqAipv2zdnmeAtyL5e88tLRpMcKTpDNkMkkmmGXxwWdXQVfLtq2TxcDGJb1TCerXVqF9Gv",
  "key24": "3u84gto8bYnXRibtpzVpBevoPRTbsDxkvbha1f1hj6bL1yA4wvmzKZttRXwpeuZDv4nbKdCxupeLy2YCzsXpL7xs",
  "key25": "xPDhUVajaguvKDL3zJPL2cSBBCxmCUw3BXmE7qMQLYfyaV2ahEY9ybTNcS5a8onF8RfzZWzKK8vnGviKNZEVA7Q",
  "key26": "36z5qvLZLti73TVTDSVvLMYsNp3Jcr9x3S38DcRRJofvUSaUPuWashF2ULTx5t7ntywCPZMF5EycAx1DwiXnwzrj",
  "key27": "5DeiW3meczy63tSXDpPqYKaa5gGEvWzxxKq7vj45oCCXogdjQonhMQHcNdZ8P6xeR6TUuE4PQW14RVRcoqAor8g9",
  "key28": "4dQg4h2k6YdBjiK4uKDPtqGSjzhK4ei3shcVd9F3eKm4zp7GBHQaCFC6k4y9TbSnZkS6gCDbvLNTAvhV5vx998iH",
  "key29": "4xw4At9JBCTemqZ5rb9rHvFpfhrXrcrEB27FGMRrzV7LVcK8DBg9zewJ9fQKZxD7JreApz2TkvGhcrPEfCfQ1oFz",
  "key30": "5CBkcnkR4ceXW8BBeHywchbWVrFejepgz49UckSnpQNXRrke9vMt6f7uCaFAy6tRPNnFA1rSjyrgJsaPUM7tLRKA",
  "key31": "5xaU8QVzHEcA13FKJ8oE9JMukk9sjFt2K7KtzV1e4gpoWgPYd8S4Y4eXdaUQZ7KkexYPk1SEsbeq5XGA1fnb6ACc",
  "key32": "5RwNLotQKYqQRvXtoWAYLWedcrCEjWKQ6sLNVbXzLXrPHQPaoXYc9wUFSjRBppNmA2AbJaxf7AmHwfeD6uH8Yuqt",
  "key33": "5G3dUr9b46BiNbD7ow7c7bqFa3y2oYbkwDy4t4tPVKyB2qqnohyEBNM6Q3irTVS1xmM99SSHvXnwDMowZ4fFvSj2"
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
