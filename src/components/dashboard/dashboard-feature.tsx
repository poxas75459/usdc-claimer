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
    "4vug3nkTLnBemK1XhusMVj9zuEnUM7ZYx77ZtB7fsYx3SLSPnYMdG1Kkw1D1GTSMcyG2bmv4xMuYPoJm6mAi8ZbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4555pESMcjFMLVq8GkKcYesdKXD7ru3cPwvJ4SDPQsQNyeCjsfuk66dEEjikQAWf6DTU3tbjwHfnYTVqKgpGwPeq",
  "key1": "2rrnLVqH2K1McH7BgEcPnh2J4MQePeE4J2f8TpGxy85XWGrPdc9DAi3NGdNEGbVj36zNAc8b7txnX79am5kj5cfP",
  "key2": "3VGDGhSBRtwHuDcCjqiLov35wv6oagJCLr7NP7KNVfhv4ouC7zmHkuYavRyCv8SsYnae2bqE65GbixLepaAVKEb",
  "key3": "3e464iH1VYqDx8okeyAXwm1GcRRA6LC63TuA3UVGsNKr9B537s1M4xXYMA4KBFQco4WAhmbAvdDtZYLestvvKzC",
  "key4": "4bpN8kUQxqvNPrsDKQ6fRtMDnXippHyCaun7kMzYE3LwMakJgYRPnB2C7w1PQVVe28zJgTpqhWYyUeP5jQp5LNLY",
  "key5": "3RiCdZYTgWZ1Y6agYswjFKaetuYGXkbQVc6SzQSKtqwcnbJA8iRxAWBMYGykMnGSxUq31wZtpFP36iKVaqpwHNx3",
  "key6": "3ga5KAZCnfBHqDCF2Awo3qKsGMym8vHshU78JkTeWsg5PBhyc8uQ7GMdptYMZ8xF5aGTYm3HA1XGHs5rVxkocPz6",
  "key7": "4dh3zFmdtagstjeMNFMGeRD7wDSVX6MgAtfwBVBYfJbGPm4eMWncVHuobZ7Yo59LWHarWzk2MxadwMozGcdXrenN",
  "key8": "zLYNcDphpX62kxiguLhCv1R65WAERez9iuzYhwcCq3jjmwXRcK6zGpiTnmyQrQtc6qmSZviY1gSx4vZwx8aCJ4m",
  "key9": "JkqZgNCKe36ZkNw2KWrrXKG4Fm3TEN519BJJaAFc8JWFeJnJoE3RtU8QT4um4jSJyL2ySJdBgLpKYnhSbXBf6md",
  "key10": "5iFUpLXAs2LPbo71mFYM4zNwLosazCLo4Pfk7LDuzUB3FAD6apCgXgjmmJ9yAMFT794PPMjRejMKDXoJwtwi8STu",
  "key11": "3p8nwfe7mQVWeLg8cp5453fCJmficajW5oaUJX7idK2RsdhEYAgdvbesYzCn8SzLXD4v9VoF7geFJUAyYhejH1Lm",
  "key12": "2h8YR7UqLXgSCaTb3q4gi5GrJBsfdXrrVsGEKHYM7SD8zHjzpUw2a1Jf7qtCKCiT2Tog2AySqpaZpu2Pw1Qd81u",
  "key13": "4kvLU6Z6rfuvw8GPhbidigcEBYKTgTpkQp3cpzSwq7dJb54mmq71EfPmfdZE91E4pRThqtHEaZ4ztz6xRKn615xH",
  "key14": "vkKBQKvTN9b1MBEv9nzh2GB4GGKMzTqDoaDx8VfuRo14KDMU3dsmoK61gqdzYUTPZ2ukUafqTX9Pyxha67vhUY2",
  "key15": "4kjWW85xqEndD7imUyWciDN9ZGpa2CotVeskb8h1kqSSYXyhpUv4v7ZZTPorzbxqkMdvYYcmgYtppWP5ta6AECic",
  "key16": "41bNYy1f7hPPLYWqGBSp9sufLM3PGU682LgyamPVuZrncDf7U4V3qTHUqG6WnmrrUvb4fQcd2Bo9jWVATizgdTMS",
  "key17": "3LxBVnQvg7MhKNT2co2VoQKu6sWPV66YRfWL1aPttm6aQh7HfzKU7ftaqePfdgum31djXd8DuHwqSf3FdRQz1jq1",
  "key18": "3kDg6485cByG9RcHHP472gpMxGWwPEPPKSrQwaMYx8CfWp6pNFJEvH7GVd2YCUF94kFSq2YeQXHYoLhtKf6EWG5X",
  "key19": "nUfqwVuC5cnsCHyzzNmbnkeN1ncSBkJmRwsniZNWuVzQbYqeMdTbkzU3UeZRT4BQXi9PPCjDzzD2YkxbZUE6j1f",
  "key20": "4GAaAtc3aRxqdt7YgVdGTHtRDvYFdRB2JcyN1ihvgLCPhZjQSBZGCf5se4pNQ5ZotwFNCSMtUbURzVFHbUDaBBZW",
  "key21": "5JvdRRMbe7qcww6JHpVkcUeJ99MZfMpEF17mhTRAwpQwhAWZ7JhQq7mCvyfoG6WQRTcionbpmyaKRyzUYqa77NBZ",
  "key22": "4b4sxu7RmULBTxSiZKVzevMGxTJL5o2hWFsXN1zhVApQLRWNX2AcUtvCvcsGQkDwPnkvkZtNEVaE5yxPU5oKAyzy",
  "key23": "4prJeAvTLqK4HA4TQNAMkcAqjMoFPH5a2ShsBW7aUh6Bf3j9sJAUoiaagdHuxh5hDuo2My1VkQQuX4B1GfyfxZTy",
  "key24": "5eX5UVKLbCUqNQES2anfryaq5RCcbbQMCNZzLYn39sf3zLa7ZeZX5pViTss5MWzJ8S1NyNhFi4X4qV2JRARYq2Yh",
  "key25": "5nQ77gsDQYiBcsGEiD2CqPckGXCEQbiNiSa8T1bjNBvjs9upgxcVh6hBBBnLjFaJRxQxx4YhgsegcRuAToRt6vTV",
  "key26": "4zjzUFtrTkcC4m97yqGgnJWufo7Ph89VHNfNeN9a2preV4MnRHFjULnF4E4YoYgU5AxLAxrtLwCMcNMfVTvvrRp1",
  "key27": "31jrh1uAybJ9mQb5jZ2gazTtosR687soLJ3cck3vUdbMrgUtRtcd8JsVQ3une5783vXzrcKxWvb6UfCPTsZosYT9"
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
