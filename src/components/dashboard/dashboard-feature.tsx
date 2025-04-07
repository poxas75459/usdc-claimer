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
    "4CUy7pHSPoJC1gz1eVyNF486Tnet18HomneeyTJnVxMcV6XKcJbnKnitEEzVPDCrrCLQ5GWb6pHkjcZG6LQ5aD5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PjpVvGrVPCkshuB4X8PGyDkzreGw9USsKv2xodzHnCabQgsvWXCrAKJT3EEy6LWZ4UucccS4fPikyphmHcH56pA",
  "key1": "4tGx6nfBxveSSJNpt9izGmWaehrW6nvyWuByke2wU46cx1S3doeiXyydpvQ2sR3AmCCaZfdXDhE9YDvMhYjGRuEo",
  "key2": "4kqkqy9JS1pU3dpoqbi3zbbXoJJNJGe8CHtzTeBiKdFbziUVcwrTpYCZCx3eFxJLwE3BPzUJ6oWu2giNVCzXZwse",
  "key3": "56HmPDpvbLX33tEjjw39UJkJ9JAKrZnz4zZoaQmvgbCVVM69XfWkz4aTX97xmZzqkAV4XxNzmQaQpaE22yuQPzvR",
  "key4": "2aw19mYxdRtpuCF8GvwXJasf28Z7vj5MhEZdd3JprXn2VSUd2GVQFxupk2ufoFY1FroLT6WbcSijjZL1b7VYMA6p",
  "key5": "4bA8adtmEHUkoZYyVMCT8dJv6J3xXnhVqdxL1QbkpV2fD2QmDqJ9Zvy51nu1m8KbsGYfXmLoyF1dtmMTLN8qEk5U",
  "key6": "CVP9hCo6MgrkJCWkmKRRro21ERhTZRsvJEzJ29DsmCAEmrzMu4pfuSQX65N89mb9QoGqWHFiNPecmchrGv42qZA",
  "key7": "372VFYYkCBdaGxjS4xikbun5SBbCnEBoC7ipyrDszh6juTRjNjnumi1pcqddQaAWyKg5XnaoywFcbrhGH2HZtJc4",
  "key8": "mUbsDmJtMGkpEsYKBbPu8gJWDopBLoSkHNgZhMEFTojakBGuJCbEsZgPwKNe9WcvnS1MEMURox9YyCTHVwcvop2",
  "key9": "TY8bWL35Ya2WSGPAKThXV7Zv3Hgk6iVRHvzXpVxuwF72spbuLUE4Fir5drtHqU3Z57gpL4MF1UgjiGEQBiZc6XN",
  "key10": "2hak3Sdszje12RTDz47sPN2sFSZqZ7Jg1NFtSfviCbtpyzkTsRmFjGCJYmk6TBkFoXbppuEebYrWmreyzLHzdH5N",
  "key11": "2kfswUsABDQetmrsYyj2yqxxNJpCwAT3JvjBT8WGh6XsgKNN8p3NkxXACXJkS9xCakP599puQwMgHgCmranpNHoC",
  "key12": "4WLCe96FnoLVcAppNsfVzQXsDz3fpwAGNPNtiyeSGmooEbNs9ZHtWnmPXihzXtcGQTUEgEtyr8GnrBS6TY1xAcd8",
  "key13": "4ak44jLa7JPnBDee1q9cdSUUdmDfGW4gPRWxMSrFqkuku2NYdRhrTYN6HKTfBg1BtVrcvd5id51CVc1u78nULQk1",
  "key14": "5gvRoeQ1sYAz6AFmhB4a6f6LfSbBofkjUyhbhhDpKyR1KaJRyy9CeizKfAzukQHGxTk4jyJBaNb5tHDJ1P9Gj3cQ",
  "key15": "53nrqgYwxMWveGKLVA39omEb575mAbzoLtZEMFeLp97pbCzCKDGMy1Kj6Zgd4SqZqTc5w2bXDpAKdNFzskMJi7hX",
  "key16": "3NoWAMFAq7wBpnxTPKPCZFpdaXzNn8efpGTkAJDCZ2D5uncTAmSfuN9mkM8gcRo2aV9yRAQTR2xb8YkX9QLpKgaf",
  "key17": "3jmLeBLjQwTQCoEyKtmhRSKS3pdCiHjhAF81TDevkWXU1cdSykUyJJSPqPqYx8fkovDkXuxUf16QXDaCbLCX5A4",
  "key18": "GoW6FXoT2UcX1nnvhC1TUEwFuYd3t4yjuMoiUki9zwM9BvxcXMmPb1hfUiRoMiWjfVvmXZjBN68bvL2Xgzaat2i",
  "key19": "37YToCg3nShjN1MSm572A34b7iEBXabekeLWmWrzNWgySNEx4TPGNR5jEt86FnN1UL9YDMnKPf4povm6uBjPpZb2",
  "key20": "37ta47RyCWU1HzDBZZ1u4yW6oaNrLDjg9Uc4Rk4Cbv297QaF5oTssdkQcU7kaed8FLsZ2oin9Ng1W2G257FUsNR5",
  "key21": "5dGmnpaeC7HH54mXA5iSTyqEGhZqZUwgiC6vovGNScZ4yjjBpML7nad1UBmoPizvm2X1EpzHZFa7CfnZM3ndEXwH",
  "key22": "2AguaX1ge3EBt1NdePGgv3LVpM6AqM1KFzMPYYFMjjSx3bUgzr1fzp9kBT1Vm1z6yU4DVwzTxDxyPC2E37fx4Lmr",
  "key23": "3PDwNwqTkuQCWhL6EZzfDHZnqttf2VEzxcoGE6StfZirnWtwHAeoRfC8ayaCJJcumDLJ9GcT2wVRF7zX1D26RQxz",
  "key24": "5qhGFZZiYCynu6SwkVBy4kFqQsXZJq2CiNyBC6y1QPmFc9JQMLBMAmvWAxSQ9fonpF9htFGoVzKpxQg9f768SUvr",
  "key25": "62UYkA9wfC36oE8Zyvrzjk6pmM798GvSxD9CmLHjVpbVfMyzMPey4No1x3Xp5oVK83841j3Piu6TtdwKKcPxxRSb",
  "key26": "4b6eAti5RmRb92svE1ZEiUNeUMczuck7FXJu6VDibCz3kEGhXHTEmXNkEFi9DWrx4pikyVuuL8NEzw2mjXscF44j",
  "key27": "3qG1ftcSHE5E65ntZrkDaTJFSLUBpWWW2YquFdo5L34XjxZAYKqYLJaCMwvow8j84NLGSUPU5ELL3pXbnC6n6Xv2",
  "key28": "Vupe4btsW5UyPg43KdKSZzHLpng6RELeKUFckviVZieyX6CMYuzSrthAX8EEMHEoDCk29HzULTkdBBKcR9cmBnf",
  "key29": "29bV2kCRiXpWQnsdf6yN3aBRcKESPgTwB2e4GujAKCbNy8U2Jg2zxsidAvKsw8nCZ1Rd2Vg7vxJAb6Ri8hLWY6Vq",
  "key30": "3AXiEybgyYW8UnDE3R1znjFWt8nxzU4h2eriKnTRXYDKFtSySKyrDvXKqeTbd1eonpFAouP385q9yaTk8sTKqXXA",
  "key31": "57QaN8UFFCHZFJZYeDBt8nBDf88a7ww7WMAeCP9zipA196u9rPF2tiGpTCwKNeWJL5m1Svioe8RbEMVG6Pn44jGo",
  "key32": "2D4mNBr7z5HTmaLDKDQd7iS2rGgTPzx4o7PbQ2BfSpAQQmfrHTL7vApfAzJSGzxSFiFK37p8u7sz4md8fSF9Frey",
  "key33": "3Ahw54FA9FuLxCJYWtyYsszxnigipM9CemGHxueyLphzqNVLpFBxBeT5ep4BmdRaZ7z16FjVJMZXwLcPWegtNZAw",
  "key34": "3mxufx8AJr1YshHja4Mm6z8MaxZDgagH22PDNQV171nGDvaCYiuEFCCZFCoUnNXC3KKY9F6bG6gcYJsPU6uGw3Z5"
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
