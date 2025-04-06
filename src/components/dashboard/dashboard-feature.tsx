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
    "4eJW2SdRxxurJeBz2uPYF3DsxUSAoMGd2vt4rfAC7p76THPjiDJwfUyhes8Jq5me9nhjcM3Vj7rnyryBAaJhRa1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E4dzgD68yYu38oc24HrEdr6cgKXntQ81gdvt2691SD14cyiGNaDU5F2TU2yK7LNm9yK9RLckkK9WRfZVsvzcmBK",
  "key1": "2KYrEHBHGvAWvjBrFH6q3jW1Tjw9kiQxJyJtQPK2s8mhcvj9dMR5rCdUMgLKDRvzLEqUGfFZG2ARsvgLuH6ktuDG",
  "key2": "XZcyJiC3UW1AvA8zFCVYC9u3FmgNuhMbWDj5rCAt2vBbkp4XvGx2Yz28hP916bkRjJoT48LGZRx1HhVijN1f62Z",
  "key3": "5U2ih1w1FSRHH39KHMcFftMZA35pZQBgQNY8nFnSrz7S4bXem7jg868ETZu4VLGChnfPYx3WzsbAwySjqYK7C7U4",
  "key4": "4o3a41AkRSv9Agj6FPm8wziXT8VgXqQmBdVkB3XJhHwZLFRD6A6CPiHRGuSDy5MdGQvL1MafR6SMksHM6z4YQzXV",
  "key5": "2GXTeW4VBYx4QuXhEcj7X4cRYSRctyjgf6bYW58Wk9AEirAhvtucVh4YMBgveVWjABcrJz1H2kExx13d5zcFyLLY",
  "key6": "4PZRuNxnmky1TEeZEE6Z2LZ7Z26YnnWM2HJwBX6FoR3ZbjSn5cR52cimqfJYPHKFxrsndHP1V2VDup4wcAvfCfP",
  "key7": "4jf8PDvak5BdcvUJ1ytFoawCyaB9Cq3Vq6QDjyw1D1R5tY39EKhYTcZY3w3rYvVcEuFtVZ2A7bhyNQ3qJ2WBpJkB",
  "key8": "2Wx3W3LDYyPRtrPUM5hKG8j6UKS2mCvjL7XU5v4a5Hxp7ENUUJMD9sbPJwU68sYHzuGvBzQGo6FWLK5YkgeZXnmG",
  "key9": "2B9Qd1U6xxAMRJdW9CdR98f8NAjwcSEVEDhRBmWMDziVe3qfB5Cd8yPuupiRc6T5S4LVr8segPr3xagJgaqZNTsW",
  "key10": "4wcWmUQu7Vd1DpUfVwvhgSCCuLqUNqDmaNjJBXVapjF5yhQohswr7rhiZUp5cfNzWEXhnBMQZ6FHu23PiZaTRpbH",
  "key11": "VXjeP4uGa3tT2xaHywgcuwScn24AXcin2AfWokCZxeMN2Af5FQgFk7XfThydET4zKeRjdmTm56r2ErbBRPbtE8w",
  "key12": "4jSQrbboYUEmXiFppiyVdemJu67zPsBEwh6oxMnEEm4syHHUnrcmDp3Ruet7aVR5CJXd57M7i5gAfkNFXciw6P3H",
  "key13": "5EsG2kV7UwSBDRSGFpdnSGs3MChGgqPfYPMG4USLE7Snej2UM72pupjCZGnQ85NRiVPRhsJkWjqYyvEQiTLooFpu",
  "key14": "28tpcfSn5nCh5epHxi9q9su768HhCXVq2UJLvNBoGX6tjhtBiip3m45rLdyxuskkhXu4jYTBqea9j2ztUuM9Trg7",
  "key15": "5xJCmZzoL8DhgWJKW8JGXnYmDeD7B2RiWj8cJFLzpXr1DfdpiEd8User7nN8hXiUx8ht1Lvztn7ozdVHxbxfDRTt",
  "key16": "5BcCukCiCTy19SS3PPQwDZvtGnUwnbsVyKErM6b8zxFmD4LMJJezzzuxNBAvR1HqN5Cuf9V51kkFDNixNFdsd2r7",
  "key17": "G6sM6K6B7sWAfxB8R6trVX2o2dE3bcgfLoyr7B76Zz1oUsXkJd81Sc5yFHVL5LunSRR6R3jvaQjEZMKyr1Mhx66",
  "key18": "52fKjXa92hkZ45ws9krD7PEq5xHYQMeJm3ocU5pvgiDk1zf7dzLG3jxDNPa4LXbAVaj8guf8MdXcU5mYp77iUrFs",
  "key19": "5LXatR7C5wXNCtwD62E53aaddePthAeHdYHPogqs4kTFMkGGu2jGAGUDqG4b56NTxcwPCqWSR3HrwMiBsWWbTwTp",
  "key20": "4TsBnPnFAtX8MG3QenqwuMwkbpB8WmkESH2PJLCiHypepo5kA2bfCZKTyPzPNTXn3cCt2bKQzZUU1nWf6NrpgY5a",
  "key21": "2aSfdthLdTYXMaiTmxwNUgTrS9bALh2zqkiqB4TkU2GrGuR59u41eUyzhRLurE5ABqAioce6moktuE2mgzxme1TU",
  "key22": "4Z4FDosfRrmztTLhy4sXW7iDp6h6cn3hMn3Yir5nuXafWY2fouK9eJjfVMuNShfEiDzuD9SkAoayy28GLLm8SdDU",
  "key23": "2SnkXedENvXmACJ2meFjH5Nab8R3XTSRyfcuBKsh9GxjRLEeJbG5JX3BdfrQ9pT2hws68CPm6JsVEJG7YKsYmNSj",
  "key24": "4jKnohdGDVpdNCu26FArYV3kyAAoCFYoMteJtyvQKk3MaX1xQwY2FMsSuziskdcL9dMJ7jZbqgVqgxzwktpiufBe",
  "key25": "4kVwKyHX21r3L9xjhRjWdsEhYSvAtJNmntjSprTHLBsK2ZtyGURz4qMiNm9do9B8t7ouMrwN79reXrSQme8TtehM",
  "key26": "5R4p68rGS6Gd7PDywbdGvFpsnYDctiKjkX1BkBZUMMZVxgPaVVKJTGUq8mY36YZcFDdJAi1pAfWLctdxK7zkCgAP",
  "key27": "5UiGCYAEuXqQjdJ629HwhrVeHTzbqGGWnMqCR8Y56hgBaK7DwWoAEZ8PvdEjgS2G6eGJ7thcaR3cmmCEqs6noDMx",
  "key28": "5TF9TAZorYeHTqDxrEHf5Q346LwwggWhRgme4KDQ3YXms5bYZ6qUomqBq5hbUWX5aaMWwH7PYVLZr1gxY1WMVxNn",
  "key29": "2CspuLMC3XKcxm5b5RQRxX4urrQgrMtCL7PT8ozc8RemFvMmRvgRvxfcfLhG5fvchRbAZZkTyQZD2tKmLiPDaEGt"
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
