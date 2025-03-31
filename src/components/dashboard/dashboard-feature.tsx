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
    "22BxUC5bNoSKkxRf6E48y4h9QtXGuFh6fBevF92Wwzeyeh8L3Pehgka8fUqepy1DdnHfAU1UFj1esyCk6Xa5sX1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54xaRyzwnqCE7xHAcFExcfeNUHZYr2Gpf1jPVrLvk4pPZPTzTSE1jJY8BtuyAMKsPjWBJPDSCrhetHyivhsesd5y",
  "key1": "nhBNvpuz7J1Xy1r8sDNeWXGJYJYcoEM4LixRVC5VRHC1m5iRD9yaJP4KFYusKmpuskhkMNSBVPTTTaJYTvcNd6N",
  "key2": "4Qq2fLNiJdt3Zt5gWuoBZja75Jvem4kF7mBaoxdnXxZgAWP1oy6Fn5Nv5EzqXwEbF5mKmW2qs4rTaW1vW3jc4SEu",
  "key3": "3E43kUZiVMbtXaN2dFyKpReaMDXKwTDrit21rCZRAc6M8veppoJttGY5J8MAbvbW64FDDiCPpvZv6PgZd3pUHRSn",
  "key4": "L9AB3vjSGE13EFDPckN5ET1JDHEL7J67gaScTSx7ugNdvS5Eojd5K5j5vh2TjinNCSFiPjxHKLKUXbvyBVkSR3Q",
  "key5": "2SfXzJD6yjQdop1NwWKg2KuNnxT95zEo172XoKryULkBEDCptu1YJUZvr4WeFtJJG81BdprrRQYkhNLbjcxFgzyY",
  "key6": "5gBmxTSH3DV89VY1KiGAfVyEwUwq66x3PhhLmQzyYNXg75E2UQw4WKUDTdmoJAasuFYq4r2xyeWcqzStfAp8JKhU",
  "key7": "3GUPth6D1yHiG69WhJktyjaoHaWcZF9dyPbkV8rG4abyfMHDva9kx7fFryHvW7yHgMAi3cKffjkrmntMHKujyK7d",
  "key8": "4U9Pw8XpciYfYqtLtiPbkepez7h7RM9WYNR9Ghz4sEfjbPWcrtLE8u1TfY7HMkYFZMAqo777E3gKAAgGs7exdcFb",
  "key9": "421qeXoBLq6cAQt3vd3oeSGuPV4sYdxpZY15YsfwRsgc8p5T3wR1zrrS7wEQPi1kq4KokxPc5wKBBS2bKohUn658",
  "key10": "2Nva93vKSrVriroD8BMfvEt4FGVZALSjAKXYJsQ3353pRiHadvZ4t6vrayqnQzyNSGrSjz6Pb7YLvoosZTWTJoNq",
  "key11": "2B8YhYJWQdNYAf5TrwGfZPM2Zm8EJS89zHCSTFjm2e19YNxbM7kV8cijM99nAJ6MtepTHBztPaomaiJGZUpHzDsD",
  "key12": "3grGZH21D4XryZu3HUvQmheoadXeU3CGqDY74kotknDiTtFmmi6hMAbUwHPDY1GzjsfaedwgzwamK3J8g78piggH",
  "key13": "26KjBewRYKNHt7xB5Q7KhFyqohCEPVxsCTvaJcMxMWXPbFGv19DPt1aSeJGqgSDMahAU9x6PW2XEC8Rj2WXm5HHf",
  "key14": "2YsCaDT9EkgvhidpBbpcMgBXPa3ho1TbAnZ4qMm6PmSLN8zNtyJgGoCC52uoKW4nxWvauho1hoLY68vaJupNXfCU",
  "key15": "3x67CxWJG4TPaQr245UoBpVQVUghnCqCEWG5EKamST7zFBPKF6PFibdF757Kwa7bipHkTqatXqExU5KXU8Pr7gNw",
  "key16": "4u36Zzy6d2cVh5SrWC6LMAnZTdXuu9bJW7Wfef38jG8MeM716qkZixoHJMJtD6kV7PLGc29j8fMpxMXWSxM8Cf1P",
  "key17": "4XpfjaKyNFbV3REx1MDk2XQGZZYSVYAUZkTsrF1E3yjSuirdw1c9afbqwMFvHDykb4uVWaj2AewwjDrA2TyrwCJD",
  "key18": "5oV6RfNFqzSiMsgdJFcKZGFAtyCf1d4dKkb58jQ7sdcLszceTq9zwmcrvbk6ngTZm4bRqJq3qL2exbFqmVrZcXcQ",
  "key19": "4ZkdiPLcLjRAVn2LPdsdEgkXUUPa8QyHungqZdsTHgzpY49mfPTjXr72rrNnLFtzjEAKxMM3N5nPqb8bKhkQr2yv",
  "key20": "2H5r1cE65Lc3L5WjidrcZUx2yKiSS1Y9CyotBWmtTsrVubPsNwu7GTyDqkegTmLTHe9JEPHzD6dL5KBmgJyXkwA",
  "key21": "2RxcmLoViGG8uY9vVKswY5oUPepFgtsHdR4FtYZhFAH3HduxA2fjGDb29Hqkfrty4RuTnD9jtL2W3b7z7Gk7kgQd",
  "key22": "DychmGQ94STyDnYaZnujhDmqFjdVMzB8aHh2ftDvkhH69xn4PJ655H7RHnnaJYZvmzVLL5DnUSQVYGqMSCpV1Bn",
  "key23": "395g5mVRSsLc2tSYkdtpSvyBh8hAcLf7j57mhvp5QrU1rmx4V2T7Zem66PjZg7LccK1A59G8dVEC1GMYfhNeAUHQ",
  "key24": "3J5gDaKY92LoMvnwmsayB3Rei5udphMCM23BNVG84Jkdpau3MRA26oBzMtZxwBiFgaotCCpg7ijD2YueMwUi39b5",
  "key25": "49XXDJEfDK9S7tGuxB66onnZAW8WtjhQjbGynCv6qgs47pW5iTSbPSs78jEpHyUCWrZWpVZKE2HMCHfHAbk6Pf4L",
  "key26": "4qHjYRu8HJVRMiFKTSGg2ntpa5oErghGpsR5S2sZ45bpC2tSedNWjUx5Nexh87DfnAbWtHK6uVxYQnDjeYVvaEGn",
  "key27": "52dDiXcV3XjRNMo4R4Vq9V2UfE24SrfzSdhQNVoKhLJeRWrRrZwGgS2Z2Ek5YFNhLiciiBZ8nmLsEb1bumWJQ3Mo",
  "key28": "3pfgANjSvy5zD6Q7EWAvJd2PDqyA4Dza9bqniFwPkrxBB9J4XtmjdTLnXd2uPrzmky6HqAwSh8AmbC4CeCcdViSy",
  "key29": "4cKDZF3EQJ3h1gcE5Vo4Dw8XLskuVNVjgFjELoCRkZ1AhG42XfgWknS26sFozcoeCLypvh5PBTEGd3wGUXmos44F",
  "key30": "sEueJjNj8VS1kYZEiU1EeBqKvd1L9MqjSQrLdZZmz5Cy5h9j1XwSVL8pvX6rESZkURTGwovxPXKcozreNikiKY2",
  "key31": "63v8semGBuYakhgJdLky41vD5mEzcmQYJqtCjeqTn9EtMNa2f2HUmWLUKgW4CXZ13HsfK7CF3nGR7uirX1k5Cvf",
  "key32": "4TLgLHoku1GVYWtnuCX8NQsGUKgNC5fj9twuwtaAg1CBGBZTzi3BcbJuPNBTi31wcWBrgDHkEUMoYGCYTyCMxN2h"
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
