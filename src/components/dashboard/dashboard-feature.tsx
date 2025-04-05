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
    "3wnk14y6JQebiA3fKHKeXKX2c7UxN6QEvU4RfUVj81qneAgTU9FD2LAnRq8dbd3bVabwqmLAG8SzQ9BgBxLAW9Gi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F8aXJbymtWtQRHQU6v2hBxxxjcSMUUmHiFXtYcwyu9mRukZXhWAL3kY3QzoSZMDVuwuAV2M597YdPqpg8i8DaJC",
  "key1": "2TW4vngJbmhD1p6x6BjDGEybP6WhGrFTahfbrkzzZECjWBhvbexmks5hWXaxBVTKDGDs4dMwig86EYVvFhh8QCwu",
  "key2": "4vVGH8mG2n1Fksr8ephScqFc6xCJGUnyMm7xt481jsFsQAmo8Np3QksHYUmKrcFSGY9A5FGH9gmtF4SonqMzgDta",
  "key3": "4u4xFwaYBc4UFs2mqZ9Gsf7LKcPPoYh1Pa3ci86T1VSN3oTALo9DusToqnAvGETWFm63iNjZVkZpBzktAtMUbVRQ",
  "key4": "36MqYVVfBkYx4wvso8R9j3bxyv3ckLPEu62BJvZddN68ST39pFxzzJPYqxA4Am2T2pbz3i8anLAvV86DgYypP3NA",
  "key5": "4jfTrVXPHx6tQray8e359D3jZoQbfpvNne4NBDDtmWdUACqFhjZWSFc143GMagcvjjKmmBv7pbGuMSne55EjHXH9",
  "key6": "5YxCtMp7ua1cViLZx8KaC3mKPBsXWM1qEpePUsMF6Zs37e6bQCA6T8idF6pa23Z8LRE9YcjwhoQkRDvzY27MvSsu",
  "key7": "3qBB7Q9yw1MtKbGPqd92zr7Ui4Pdw1BH6EcEfuwXTapS6AMS2fwXc2WWUFYFKtyTJBJDs8Ep4esTpcJ36y25SrG5",
  "key8": "4ZivtA76ytLVpUUxR1JgKUSfggcxY262fUfEKmzyWotpqZGHqmRcZmvAoeUubn85Na9ZRpY28PKSHYSpZ4QtKRUa",
  "key9": "3LihtpPLPPDjmyYfBdMusst9bTgCgurxaymUUT2QBtrhXWJcxH4J2FSrVfufsYpEuqeatB7mHcWXzHuxgPTLb6iV",
  "key10": "3TykCN9BiNNRFoQ1EM32zR8ccXZvfxqBkSLLJFMnxg3nxQcrZL4SoQbW7ut7YVyWZLXRw41ivyJWA61DwMsG8tFP",
  "key11": "869iQpJz41cv49JTzMszNgGFhMW9HWP7dqNqXVwgoFMRzH7k92MwkbEbcBDHuEbq3eLKLh7AGgkRAXuM3UJ4C6H",
  "key12": "61sSCJmedcVxQdSmeQVQwVzcmKCmqPRywxKXHBHpdhCMqZ1Tpva5M1ehMSrLssCkws3g7BwaXFFZc15HnaTfrvrX",
  "key13": "5acjz5vL8ytxLnfzXtwpxmXdPAUoU8UddjTHDFTY9sLjVbZTZ7sdushLomrP8KGDhnnZC9ovn6uJERn8TNPdikMk",
  "key14": "2DvQy63DSJYjyzYK4wNstf5wNJSXm7xyB5RXwZyCcspJ3kK162jYib73RDyjeP5EodotNgkueQpc5aCFngcDM7Nm",
  "key15": "4RMBA5vzbGv6jqFffGmP74MZzjofspvdkog6uGoNmCJXP9Ry3A4zG91z6txRyvCvML7q3JxD111tQ5DjytK8Tb3N",
  "key16": "2T49pwnBFhhxdP2DkPEXNMAaXYEXUULBZkhxCegy6s5cgdnYJEeHRPocGaSHttgfEsXgvuwKehEk9paKgadXQuig",
  "key17": "ZYJsBodNPwxsVWcAjHxTLsnvzk1LDNh7rF1PuEwjPxJRC5S7gF5p73vuo55oGUCVyQDWGrXtW7WZchnzRAoeiym",
  "key18": "9BM8Cy7cH5Shb7ngRuJPoS617gfPtQbtTuyNFBCuKE93okMHpM7ybb723xVqdKShXfFqxqqrXPevpbgqkFSFLcV",
  "key19": "4qQCXAgqsqYCF281ufp6LNNHJamrwcAjjnnwskaasjib6fp4mN6EDYvf9XLN2TZ5wndCfxWpj1Vz4ttUc3PpMvLM",
  "key20": "dXtidCidco4NGk4dqvqpiZLNDJPTfrxdTEqZ4A3mFcbawnGUhVQw14Pzpr3anykbeeWL4D8Gnzmdskqamx55vQb",
  "key21": "58Rbz7kJPAsNByoUuKAbiNG2Zi8JZZF5CADzY6L836QzWMyXL6u815dYSvSuUTWWUS6NRMZumZGQdMtNMm6ENaxM",
  "key22": "4b46vYPJSSPCZC7eb4pLGXftyXxXnKvCpJpVqRSUui6ZbB39EsHNeD1vYjnzFZCNoV3wNwCxzqRyMGfc91DZfGJH",
  "key23": "3KuuWH282pnDdCkJi6qFdNKm4bJnabPB4q6GaZtdNqPvFbC6w2WugbEVrHt1oJkHzRKcjb7qQdjVAd8vTUWNufC9",
  "key24": "5uX7NCrP8yvvNEMgmCyTepSNQyTENGArKqEF8YkU1chh8JhzCDAy9ZHBybWs8TbuTWhMgMKXzd9AVAKJmkaSPWGX",
  "key25": "2N3dCUEjvbcorH2KgwQL4xzMp6pDuJhpCyRsX7WYbFo1QWydqr3ozVQrzLFpcV5pppsdg1giBfmKDzPC5sux9HB8",
  "key26": "3zr7TjRxAvyGUH7RXhxX5Gb7CchUxCtCsoJw14cRc18LT3vNFSTkxFpqmBm6m54koLhUKwHnHTht4ohBFDTfB2No",
  "key27": "5KbfXC6JGEdUpb7mkZgtUtS5xxzGwcD9MWrJmrotX6Ym5Wn7mM7wZzMvoaXzwmBfSpt5gpaSwETC7G2YrgraJLgc"
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
