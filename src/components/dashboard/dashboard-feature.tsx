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
    "3xS7tzasbf5TEF3oub5R2CqRNja4yAGxX3dzE5es9autbSqeveZKM2GVt44x6c1GT8D3Kq2rX7osu6mBs6ccQyHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XFaDYKBPDQTYWN4RTswxbXJpVWy761v4qA68g6nsThuRFbjZaCSeRaZrLi9P3xTATEPRi5DjciGHmcDri5MBdEk",
  "key1": "4Qp3xaU2U43wnKe5UPL8D6xES2H1NB8s8aLK4viMMmHEDCfbvywR4buYK9yby831r4vdoh7r9FrVceW6kGz12KSV",
  "key2": "4wFjCJNYGQ8xsY29YkaZGQ4H4tgLfayAVAZyCWTNwiTdi274fzCQcsDTkbHNSKT35yJGJfFCLM2arEHwoRPYBntN",
  "key3": "2fZQeEDZamyjJivkDXbdaKgdadNESBGRk3upXAXyTkEwN9KvatHWqVPrrcbcCZjwqo2ae6qYQ2EgxnEQXBgDhBeA",
  "key4": "5TENWsvCHBscoN1tN85VbQZ29SbWWqYETKDHZisW3zKMwMJ3MZHa3uqSRhT4yKGvoTqvJD3nPNAQHjXVaKmiFQ96",
  "key5": "3n63qY58P6aztQdFhVgzhx23JcHeL41G6xCsLkKbz77UMAG4u7cdFGcnDrWjXJC7pr4GnjuSsDnPK4aFQnsyHRiy",
  "key6": "3uxucJZ6sZZ3zNnWWfviudP7JXmjga7kz7c2TDo28EwP8Yjcz6oFBJC2vdVwRE7AQdW9aVE56mZHriCw6g8PPoZi",
  "key7": "3rNv2WnhYe4aibcUeqEzkkMqnGRyqGoC1jZ9qrTXMZbP1XbJSJZvUV2fp9iRAKzuKm5emgYhrnZjqz2DpYFf48AJ",
  "key8": "4sH5ihWguBWHfDZp2GRNTbciaFqZJ7LVVfZfbKktAqPnq7vZKAZHgwdLziVpVv89H1GpdzYsVGSg5S5Ka9LUD6Pv",
  "key9": "2zCfnwNUZjof2nNzE84idyghjM6tm1QuU8rBApF42cQEhcJ3fnk5PbaXPHXWrPEy9JTMHN19hdQWowQWGC9VQSxX",
  "key10": "WnBea1LnXJ6Vjcca3JVbjir5v18TZcUpJaLynW5z1ppsv458CJgunwhnJBJrnAcjZqNBz5gjgSQGj8rbKx2nBz4",
  "key11": "qVwUsS7CRE4MzMgKkJhe7M78ExJVi6P98WBEuTpV1MUytd42ds7USLdjpmP1ZVpdSP3E6tHuRwTemC74hdwu2xL",
  "key12": "4Pyx3Aip5YNufNBfz8mJbin6Xq27N6t5XcJHpLkFognq6tEnyufVm32JGqjwQ23PKVySKvoHee4ZFXQS7qM8p42N",
  "key13": "5QdcAKip9pR5mvy6rqQc5KBgniFAjLTT5TWHTwXF4kHfbiW1cGd56jGww7ZBX1tBQBBhbXRsisVBX2ZHxkMfDUj3",
  "key14": "rutditFCtnFvGWqVCSBXtAHKRJknHVpgjtfnBfdAfZs8r6Fa8pP3Sp5dFmKRx4sFdtGRqVy8UtLPoTaSjnWmYDW",
  "key15": "bvFbRX7kK7ekg5KfPc4PbDsZAjHUiLDqzeBGYPj98sKTVrDSarM2R6eeVXX2uJvEdfNaxb3DaPYcQs2cZTEovUy",
  "key16": "56R3qmeHYqj1qWmd7EKF47T6PJm5PQW5u5ywuRoGfySE9N4PpBmdK1soRrrNu6ZWRxwDZeY2aMkJoMatE3S1SZss",
  "key17": "MYXHCR3jyvZRRDYiChe2H5fbGS9TKDA6toJHSLmKiACc1Tg9iBBp281kFtXcPg7rnwxfNTgjVf69xS7zBxxrPMW",
  "key18": "3ALZEUMtDJgu6cVvVRkVoVUhCYFanyvBFWVoK6r1N3aiG53hC47xLrWbGsn48mMuWxPM7r5Sq5V5m7SNY9YjwkyN",
  "key19": "3EHwrXFdbuduukAJdgg2rQT4RMer9gQShC13qTgGKUvDtcYfGsEF4TWKtq5GgdrfWxbtk829D8aV4GSUFjQTgTsG",
  "key20": "47AT7ktFRG4F2v5ViUS23uUJNutJzQpnxvYWs2XJdDasHSdc4NnqbeZuNpenP9oL5UBbETNFCWDWWGmvYvDDQ4Vu",
  "key21": "iPsEGc7X8q3ZZ6zh5UR4v7oTzTjAwrXMVo7TiJbgnfWNFUJFTAusXF8ovVru9Lmi3CvNYUGnAvPxjSYuhLXcKhR",
  "key22": "2zEgTj8AB7nYWGUQ7CrpyFbdayo1Bw22RhNofUuwrBjAgzpCkcgdJhWHVT2ZYznPQLVXLnquUbsyLr9VctUBS4nr",
  "key23": "WcqvmkKsjSLTbJkWUpDvpwkNuhUHSCARZWmHQEpDXDXiaabiAFkdChL7bzNzTTcXDGaqNmFAdmt8P37k3CtbWx5",
  "key24": "5YvPuva9iMgTThAxjqA1ckj4WZ2RAqn26CEW9pE32xGEuQf7tqQxZFfsj1anBeHah2tZZf14qBGp8CLCxYvBLoBZ",
  "key25": "3fzwhFJzKPjiyr4AgTyoDzaavignJqEzqhXQotQE86w6DVRqmMJtgPpTqjY3LsSwSMVirmWYGYShuPQPxfjWkfM3",
  "key26": "5CqjgBh9x9zGggp4qXfmt6sZsLW2P5ce2K9PHaVDQUC51wHBikCHJg9wpHY1be9mMbdHzErVadbzoDNK3YPABoWU",
  "key27": "4g7XL97zt84BZEmLpJY7oN1aHhHfVBt3p2kiTLqjkaKXQWJLHwDvRUhZ4YPhFcutNEjms2BYPnfQKegkMDzn11Lj"
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
