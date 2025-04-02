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
    "Q8aSM2wjBdBqbwJdo6brQhi6DdQNtqfUHuWiJEeyKMPVje4rdhgJLESdh1Rm1MpC53W72VGnhGPBtuuNaoJpung"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q8PpzGUxGvBspjTLJq59t5E2VSQHAWGX8QdHrpwbqsbDjVwwHgY2WsN17zFFY37mHsnfQLFssypLQZZfgANAxn3",
  "key1": "2qLd7nRPAzVbRxuqWCknLYogYLvjHdx9QiP2ZuYj6LhMVvXF49bU2Xx4c22Vw7m1GSTHzKo8NLvLPs9VN7dW8DrD",
  "key2": "4YR2qPDMvtjdKYF3RnPrFsK7tfwg5vtssbBUxYDKLqBkdBLhy1heiwy31zEzb3xKBZG2qm6twpvEagXVU221HLpG",
  "key3": "c6HYK7AwgubGBPdS3xSFK3zUNuWSEUMY5Qy9sv44MyPSnfXwfBmZA1jc88Rox2tfvYaZPFWWmegKwp8bTFvibGD",
  "key4": "49nqbGpYJiXZHkPdWMJdtrreFK8eM9XXh7UhjegYQWs9fEbaTpejBKCNMHzrYTKFRViurQhzYQNCKp7pyt69dPBn",
  "key5": "4RzBVpEkUZ7V3CbyuJuctSAbu1dY91MC6cunt8BdUfona3FjsFz8jWuDkvpgMDAupAQ332qgDCRXi2F9n8R3mTSB",
  "key6": "3Fgh1BtqFmKqffZzeLPfzGfZXF4gj5ekaGdHhRLunFt3sW7PKL2tym92J9mJffy5jLaQauUvxonVkC9xx7pMWcVK",
  "key7": "4uZ3WtzDTRyoxL5ANcMwhPJtkPesH7PrwDDumG2JGkWLXd2x3gfNZoujdoFWiu5wqakTs94Q4YEfY5NGcMm3uxvW",
  "key8": "5XyXbCgXtjceUTESFy3RKHeSVb3VDoLFuAzKXhF49SBByBExpXmzkBozXjGfSPmA3VazM152NUE656z74tRnZu9V",
  "key9": "4WjhNQgdmCXV6bk9nBpV1R5HNWNe8FE6nXRDSR5aMisUB54apvjnNBaYrqjhLDxKiJX4GCMQ5DuTMDbSGApSMq7u",
  "key10": "4SfsZNzZdmn5fLjaPrrQmsCvUWJi1pF26W6UFu6U5Fxm7LvvE3kaxUQptgSpfa8D492eejBmubuimW64C1t7V5fh",
  "key11": "3V7djJexBJBTKv4mXf9qs4NNu5Sd3HS4Lj64MkWAq9KvdJmJfuftCdaGUMzQ7LHXehtBDpWoGuUJALzEnm67xPPc",
  "key12": "5QBd3ujt5bvUbxqjzsp18e3Leby5vUQ8BjLzvm354qQWJavBrQiMESbmiYMwSQSW5hJ2Q9r9iUtdioGHb85GSNs5",
  "key13": "344bYaAaqbkVrtavQP6yUc9q4sEZP8s1sYaRpyKr1PDYYMbf6kFbnFQ2YwftBfTaXvNsBtEUBxsUFm4vvMWEAqw1",
  "key14": "67Bjz1QnUwfRBvXhHhZcyCprKNtgT6atodvrBFe9MVSLjc8Eg8knkhGH466qWgx1gGup9TnNuu8KrG1u1xMj1W38",
  "key15": "61SfU2AkuoATPNF7ytAet8GGKnyWrm7W2zpFyXatp4kq1yqjWFCt6ujCsxnyL3mi3wxb2wC8ekUSCKM8pPqURtCM",
  "key16": "4mhNt94AGW8R3hJq21phB8yLB9NAvVrnJjmDER6JCpuBSgAeMobYNVrPNpMVNMLZWtL69Cn9x9DMW99cYLEbvoqs",
  "key17": "3ZCdR4NqcrtWnB25GR92ezp1bjAV2X94mod2syXmB9VZdEfhaAAJb73BDxQQ2gaMAYBBbuMjystfPEMeVuh4J9LQ",
  "key18": "2kgc21mG4gTsn1kGXCdcXmqMGGPztKqxDxATuaXJFTcVTUUurrNPCjyBcApnBMqY2mW5qYKNg7zqoTCvBcSWd55v",
  "key19": "2WfkD4tfdZzM22Fabz9MmqhmZ3vJ7enWC5b9Dk86Wi6y4XRwvyo3J52jiwqFhPLifYBWr8w6y4zxvkS6LE2uXwN7",
  "key20": "2uswYkgLya197uBc9t8txYiFjed4cvNUZWNP8QyG2AXC7CFcBFYXCDLFQxtrTqHwPjTrtcBA4PqP6Hu41rUonfyR",
  "key21": "3rSVk9rD6urWiP47HY1rL2n4fpzUFoaStVhYiyAx6umpW75BosAVtKN7snYY38XtxJSGMEz8DxAJ6mDSguhLSyep",
  "key22": "29PLzGpw2iaqydi58nHytVWNRCGvhdkhUw9Lt4bvqunAfyrBSRd7E6H3vE8j3scFVU998oyLCd3eWD3zm3ZcSk6S",
  "key23": "aGNxZwmcD9MuVJCLKdxMzovVaBJeGcLa1CawnDNzNPj7sGcjSgj4hC3SayjRh92VCJX8jqfFKFWMHiAVi9JLpJE",
  "key24": "2s3ugyXgxEcnfrWcQeop1ceFiMucmWDPxGdxZFnSqSbPrRMwyZPEgBZehqy1FEAdNV6C2r6kp7PimPgVTDSw2Awq",
  "key25": "2upjMku43wT4ucKqqhPuGvkyRs7G1uc1Dnv76zCe1woc1GTv8ZquFRCKRfPpYPd8hubt58245qCLC8UNsfSsautU"
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
