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
    "vMCkgnGUZJSk5H488z6zSyFDCdeU5akjD8ATuVhAhyfNKELw5R2ukiTaGk2BMBGuHn6oeBbCJyhbaFneHdjzB1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b7BNiZkyhb1npQXpXo9q7qqhvRtN7UUGRGRdCHqCX5oSHyT2XUCpoqrL1oQCoa8Yf9NmCnxaGJnwMUrLGkkFMeW",
  "key1": "4gNMdC1JGpFUTd5UZJ4K2QLapPMNzNN68HXZKtjFLBqcGs4fbpqJfXoWgrWCK4zYJR5HvAsGc2f2UuqALVZ2kS1s",
  "key2": "61h9qaBNgFUkyrAUPinSQtdDd4qi1KJnzb9VXri4FdDLFJ9n5Yhws29gEoytE2WZpw3CwmtbNugLWQKyPTSN1sYk",
  "key3": "WQqvFJpCth9HgAE4dwqnSRmi2XZd4tv9mXVs5tdUsLmZjDwDG4G8ue3JLbV4SMpb8agVrVxanBFZwyoQUCfJtpD",
  "key4": "2P6bWYSyK9xhN9GssUSkQ7gTEBQBPEwJqj7Rb6kmeon6nEjRsTdHpGq58BpPFX6UMBAsFTai3C7WPh3tGEnsNDWk",
  "key5": "5K9bVqyy7SWNu3148XK1mrwZ47UkaErRjZXepRmreePvJ6UgipWU5E3ENeBi1BksDHLBWnDSK5VcJtD88oDMFFCZ",
  "key6": "5NhgTS7awqU9qJo6iTTpk4RKnm4xKgNJNeh7cG2GXFGvWB4BvekTK7hiQn6PC8kXev5YM1iumJq7agHVJrzypbaG",
  "key7": "q862NjmuyCYaEDFyguYhGsUo9n6gLLbB3m6MQz1mrEEN1EBXgDBYyg9DbU7SWXJjGUkT8TbjFVbzcniDd7i74S7",
  "key8": "3Kcr7Cy5bnyJ6j1v7eDCwJgFP6vLAM9KSDvGrMvFkosxRGQGfQgvtk562yGgnQagAsc47LoTxxdB5TY2i8RrybuH",
  "key9": "3K2UqL7fRvi22DKFzBVP4DaN8ibKzT72EQCZa5MFKMt6g5HvjKmtWoMbnLUt3QKPhpTDAiSiax8eFVtyxGk1f8Su",
  "key10": "2aDC6nm49Bh2wgN21JxjCnysJhfM1znCReURWb74K78kL6AzRrcVYFijM5qL9foMvd3yShoi4Xmwyc2GhJ1q5dUN",
  "key11": "VZ9ePumWotRpAwH35C8ERMrJNrmhc6BbC6qHk97qeQjbGWvdPC9DsqKvYaxP3n3cibbeNVw54oqrYJPvHeaGk6H",
  "key12": "5rshA5nsAee3MPcjq7AZzf1bp8yW3UZQt7nvRZnq4uEAdR2aR1DxrhfqKjdzeuKCGuN7abK4DdCxRAiAmJ7mUNBt",
  "key13": "3jZiDUKe2DmK5vFMFKxGLNR9SNJjWGxYh4NziCiBqskv4yjsvym8KJriv2pmQGDb46Cyi8N5tpb5mukpigBuBzPq",
  "key14": "JM9794vYTR9d3QaNPXpPC5tU2faEDuHv3TYTnPA5hAu5dJv8Xo7UfU6VBmhsDh9qbyfzmrEuxooWBgzvqZBdPUd",
  "key15": "4NWWjVLCeZZ5p6o7ULaWgQdYvaLsYLyxhAPU31Er1cdimqPMbu2nfK3wuCBMSeB9GPqsPiLpnRyJ1keYV7c7MW8i",
  "key16": "1kVgjvsDswkSn7M24NPxMQVkzitg3fvmR1dMPLDgbubJtrgtbD7r32grGUybLMCNA1eezzkUZRUv26AoDYxAUew",
  "key17": "5Y1FMkQXehUQ35yfPrNb2ApWYa9htbV6jB38b2RnrmF8ZwDFbAXbRynCei8mTG3jaG6cgCZbiwnqBE2cPK9sBnZ7",
  "key18": "3a7RHuZEttgLh8St34jK7354Kb44AkYboQe2FiXgH2zhGQcKCprsYG3FLAEYQWvWHXNTvPuQWaKtvAbCTpvCCQnB",
  "key19": "3YBveDGfM3kbg1ZfLjjfE4PkqGfmg8MusQWuUKD4qo1mytEndTPavMYvfAwWKeTVfnqUfaUoTJAFeMexKYB1npVj",
  "key20": "2JWTa3Qb41EVXjh2qjhvSUT5FvZC9vdiyShNYp8q6djivcKbWcmpd99yUN2DbsAuz84umrCMCEJQJcev9B87iDHm",
  "key21": "2HMwHqN9uwWa5tDFwxWgGCHD4ZfhYePuZTUPVSjiughF9JNTRvcVHSkiaup3zFyRfFDdf3Ee13nbt92j1PpGKUr8",
  "key22": "FLPDEQBei6chXqvLXEvhGUb1RoD5TBS44hzRPPfCBvReUFPbZADZ5L2uaZHxBiixuk9zczQBS5NXKfErFdnGffK",
  "key23": "2rFuaHsbkcBKpXqFoqGcrypcxxqpR5ULZ18wDar59wSLxz8WsDVabqFZNNzozUmUGCQTZESwD1mY5AHw2nwuuVa5",
  "key24": "4ctsP3k3vb2o2CqZKrxjik8njK5nQGRGqpAAw3uEocFxtHm8ebGBNeoVFKUwB5XSpktefC64ms4fEa5tWfGTESqa",
  "key25": "4RVGNMGjsQmJF4sFPKtxn1HW1jUemVhbzmea8HLTJEgDFWT4kfeB8M48ZJa1WPhfHD5HZ1K6b9dSAQvenThJYGA",
  "key26": "4bguqX7AwLsBuhxbBNPSnpeoq4enzPC1cFqSHGG3GFzthrkiNznaAK9unfVQMxLqT8MYUdKqnSX4ZZ3q2bLg6dDd",
  "key27": "YsQXJaU2wwobnjd7b6QtBuE6HfExamVVhsezmQG4nVGFz67iZD3j3GiW3LzfeiwK9PqWeDymrmNkaVwRaQcuepp",
  "key28": "g6wCMUmP17ZC1HsQWYjEtKdKJpEUSeUSLWsWQ5JmEqPKk7VxRHSw89EXofDo1GPfsusLPN1tsvYgkGJLEx9Hoai",
  "key29": "3DV3ZBiZnoQSpYSUiEgaX5tZRvBLuFi38Bn3S7NcsNh73rd385tM1q5EuCehLVh6gewcikyFu3yGKcQPWEbCohre",
  "key30": "2DkYEEi1F2Dio565QpstNnCbWrsS9zx87s7N9zjekRDCz5keCnGqqyME7hURWwPzwWV67h668jpkU8KUCHyvgpgP",
  "key31": "4U55e8zp4hfqGyNDke8KCF9j3ZytD3j6bbKVTQxxfW7z6pCbeVfdzrntVfoF6Ziaz4t1wsxLPHXVs9YCGzuXRbqg",
  "key32": "57ERKfzg7R3hx8iQXxhd2b8Vx651PAJgzubWkbVbHqbbixiyL5fSPmksWVSXKLWATbTjD9LvKPRNJGRhY22yJDkt",
  "key33": "4o8QdtbinQn9jDn7HN7p15rkdbs6hw8AYgQRNjBJkodwV56Yv99XKb7pxt9bufdsJT4kRSQtWsXprexBsp7ckqaL",
  "key34": "3RuPgKPFY4GT6XLKfh6h5FLybyXZk91XcbwnkAhwgdDdosAooGgzSevZK1aH4sqEah8SVKYMdesjnH2rt8BxcGuc",
  "key35": "UHNgNgmk5JV8ZGXYqatw9vPgWxHNXrQ9fGbbvmXaurgJowposxYsSt62HH1mFpUQphkgHau9SmghSSTxYbMkiXC",
  "key36": "2WWk3Nk8C7m64rcVUAPRFNu8qGRaG3XtGPywKpq3fPeGRTiTThjB9wW3SpxM7wRRRifDNr4NqLL57ehNh5Lin5jg",
  "key37": "5PWKPZw2Dd8btLFnSWg8be1SdbtoWuoWDKFUf7ywMZn96SEbn8ALTMKWgiNGrbWKmnUTkYDN1CUpYiApvS9oo4eU"
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
