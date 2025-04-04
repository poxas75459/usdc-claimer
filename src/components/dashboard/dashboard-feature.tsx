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
    "23WBmvF1jBNCRc8XgWQ9vfSRdjNfBayvsB9MMnavvSksaP4ngEVVWrqBxUsJVAm49VWPR8nRejGEARC3gHytDf83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JCJWmx3io4sp19NMPfE6dRVAxLtDUYzaE58K6Ehm5sa2jvs6uZrL3UqwXJBJbkEdM91BWKgpUUat5xzYkXLMiRX",
  "key1": "2Q9MatLFLYdtakHkZN79zLrGeGnXWMz6LzhzH9Cu35F7SB11nntzGK7xSQkAE9W55RWSdig9arEYmd9Tt9pcRApZ",
  "key2": "2qEmMLBib7w7uMSN4SniysGjXefbuQQ5HTWCFugfSp5VTy4FCquJrDyA3okMkp9HNN4NPCqdcqegEKV8bBS2PT4h",
  "key3": "55WPn6ostZvWtSMY1zgmPZMhxyHufHibzmsroot3T1XxA2kNYJVQVXw6tbMMJWcgyAZ3CHK5dHRBgUszpS65RxBX",
  "key4": "D7Fu2YkLdkxJ6SArriUEVVqfvAoH7VF9TsPDFrh8j7x5c7F6V65o8Eae76w64BhLZwtAMd8AFm5dyxF9EKrkVi6",
  "key5": "2thmjnd3LnpzALaFA1eKStERYEUpTmMzxc99f86KRZYYU1ExLuNkBKGPRA583VMmAMBLemPrjdnyvUXrTZKBTeGQ",
  "key6": "3WU7YTA8DNRXWyZSRpHBtbQg1S7vNV4fdCRuutnBGn2Cf8ZKh32MGCiXmBErFiXzcUou7LahoTCzVKFpgcd4BN4d",
  "key7": "AwSBeDhGvRfXDXKYLX3enuSXcwHXDveUEkhCkbR9E64muPv8QDPyAbGgn8vXEr4RwxzY87QuES6PcUNVrC19SDH",
  "key8": "raqVr9HDnNaufzWFEYtQyFrNGA5KXZF6j8QjprjA2QuUqYts1Nu7oCmvqaynsq2pGHpvnnvukiP6K5K14ZZmPi8",
  "key9": "4b7JAFJvRiQ1vf3t5WQYVKdiWwX3jb39BXTiFKAjNX8rW6MxbYGHpnLr7K1eAdLTSvNqysQBCpKXyUJSW2R1yACv",
  "key10": "2s6PtfuxQuHKvkCp9XE2cBFWtJPYZ2d13qKDLerVVSv9z4hKL2SyULhwgPFgpKKiV6XPB4L8ufjFwoptXNK9s8ni",
  "key11": "GFvP59RBmWpFkwkQyWTqV8dgeXCEi2Giar1hpAVuLPTZRzyXEgVwqsiWMLTJecF5EQwu2S2zr6xyuPwo8rX1CVe",
  "key12": "zavowRfxpRDcNzQF3oYSgjXMCFVVaCNrua8JDs4Jiryj5Baqw3UF1WM5LYiGMMnZTXxLV92EJwLN8fCPRDCBhix",
  "key13": "2784Hai4aoJVEsUeqNqaAf5wM4b1QLBqainxoAWNQA5Git1vqeJohTi56Cn6BmEh3gvGedV4QY9a9noULtKb4ujH",
  "key14": "3DKCrRRzsRBdJrrf1SZpNGMKECCUvbBJaW3w3w6ibmtmWBzN7qA4RsQy5nPQoL9MzaqA1TM2ybi53xzBtNQQKQCP",
  "key15": "26iftk5Qw6Dmnr3ZpxBXJ9t3x2h798oShT9kkBa5z7yq3rouMJiPRHGcKLZ7RSLBZkpJevSaBt2wGSJShrrtydVk",
  "key16": "2AJtiejqbRw3HwUqyfUnMXMBGW9khRj4JE2LSZWbQenfHoya5myHMiVCjGE8eW9tFe9oE7tAfPWTNBpmuxYeTBJe",
  "key17": "38T9Zc9MWtjij5qbrmozbE4HmPYhEJGSigd2xdrYMEQ9YGpSjMAMc1Xw5s1FDbVFpQGMtHTcpBGRMWCjdgZaw8mN",
  "key18": "QuWib2PJjWSF3TvsRS4sLYSYQtm71KbxmwnJjmuXLzBRwwjDXe7NHXrYyiCrNxqQoRwj6Znf4xRmquzwyDuvExF",
  "key19": "Wc8snsshBgDSzo58SEQqo4rsGd87xhspS6kbEdsfc76cFfS5gKzMQaQoD5NiR6fs2yYmBaSn14yFobEX2TenTFZ",
  "key20": "4SLBwA6sLyBPwUJFBv5mECRvq2SM4CpqJV98AUL6HNcZjyr5xWgJ8rbwScFfqHNjH8cJLpbywuhupqqvhvSRZsio",
  "key21": "3eY8PAdKyW4HjtUQiQT3MyNnLUSe6GU58NrEmL165eTQZdb4vLBU7izmiZFs9h4wcbm41NwZ5LxTMXTzaVy9iDTj",
  "key22": "3dTEMGmnE9Za11pCZbb3CQcSixNoaWek6KkU7aH5Vxw6mLjPn7uVMCcQDPXP8bXNaoW7Bqjvd519J5cq3AJw3bNh",
  "key23": "2pEEDDju34QuR8ru7UMeB6juWXBFVQtWB2n43a7Dr4qnTNUk8ynw3L6TgUAcwK86eJE7ignFffGT38kSL9WvzbGx",
  "key24": "QBMjeLjXcZZ8Bt2w7sCqBfrA9tW1uTrUKsHMmTXUTE3h1MHbi7AdQDxg692q1ZvWjmTaPnqStHvzVFQtSwAhgif",
  "key25": "2KCbGRA48nw7VJLRZaSXDdmQi7czCGper1xyga3c9RyHaaqqo4ZUyfr1rK4jJ1q7g34GuQmxxtMbErd7UBDVLWqP",
  "key26": "4sLP7XeBDij1TyAfeLHNHMDbHEWe5zLxeWaHuY6qy9PGVNEpS1mBLcnjbYqD4uvwLJ5NoxypVq8JSjthtPC2bFfg",
  "key27": "64Ygu1cUYcLfiiwULsMMDUkrANoyWAyqnZ4NqqtqhaoUfcHM77iHzYjCPBTpW9HRiGrLkGV9xj8kcxcby5cb7JVd",
  "key28": "44NbbHkGK1Kf4FN7zn2BpNv2ya5MN7gUo4JnLSXv5J9uaub6fCbnHUSYn6NQHNqqi5VKqUBHN562tTLgY8izcfEM",
  "key29": "4byH7WRnkhwCMHjWxxeTNLnBDSFp8jp9EahLdUr2XYKzdU3ZrXV8EQum7EhmV4TcNxhgo7586ku7gmZD7sTdF9f2",
  "key30": "3NEYwA1jwK5xWVDt392dE2WeeXcA5t79TZjYUBpXKreyBxuDhLXQqpScwh6BRP48nEKu7G2yjfAZJJWsDSdSJPxd",
  "key31": "2HSvq4ccskAHL2Zn6CiNRoUKUeEEAVmqYJ9bRTNBNBr7dQa9Ea1pA5gHpD3rjXzJSVvJpJzSDpwerXGx78nA2SES",
  "key32": "UoaVmK4FoQqWMCcQcZyp5XtGLWQoHLytdiXpEWqxF3rS7m8AWygr3Geh548fy8daKh3aRohS8Bi6Am1Xq5FFxEg",
  "key33": "27uHuokJ6q6Up4mToBBfzoEE5hA9kEpD236wHNupijkwDFD7ua7saWsPhXkrDHmfzA68cSqJiGvbz3J3ukfmP7U3",
  "key34": "4eyMVoY4KQnmzfFt9DEpWe93oVV7tzbutS6w4eTjQSRRpwhE7WwkxuX5hXWUABxSirXBvNzpQqPBLpFCjDPFQThg",
  "key35": "25qpJcwqGTBe2LeazUsH8CBjgQABtcirAmiah6nRcHCEvBMNCZQgSKosfCmizVzaRT4M9q8CDGWhx8HgBmTPRZDM",
  "key36": "5xXtbJ5N8TVBDdGkACxbLByPvPdfBYJ9Jquvxu3H9ii17xxXdJ7Lc8WaC1cBbkZvGq9gf6pbaQr2smK2N4BHHFYH"
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
