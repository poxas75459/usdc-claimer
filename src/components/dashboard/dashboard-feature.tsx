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
    "euvwdTUacKo6tXAR5ziVSa3SqKug28WbFyUvYh8FmGXNbA15pq9trG7KMBDmEzSaQvLpBqs2jbJmvMz2D1vVPuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cx8CA79449g9jJHBTjgt1Tce3b9txb7QVSwBtBBDEi1xCHWPxeZAATvQuG1XyzWeTjGGhYbdKqiHykKLTgAB262",
  "key1": "2HUVg7mJxSCSoVVyfJsNUZmR7gFBTwe6KVxMoZTQ9pWT75x7XNsvRydHhKbm2gKS2Y1XTFfW6JFhPfFNDfM956ZP",
  "key2": "2nmz4yPJmtnVt6zKid8W2tBvztRETMQS6RZxnSjyf4MVJuh2kHnuv7HoXj6beQEvjbMnkxw66kxNuGG4HjyFsiua",
  "key3": "5qDtWDaRhg2wMyWw4TXFKap9yLRXe2uakjd4GBaoTfQJMeuVGfpMtoyzoVXQbknNHpZbeF3nCqA6V55MeGbPejvX",
  "key4": "5YcLhfSbuYazwELFbzz8E9cgcz3P92QohRdQzFi2JHXJzgCxAQdAmo494sLbkskYLQ6UBDSDNmaKPtwZtqKwUy7S",
  "key5": "59JT3p8KRXakoJ2Rv1WgexoqNi739nVUZ6Hkz2AiXxbBGKSf8ZJTwR6nBpsqtgu7o4656xLVKBGPcFNZaTo4L7Tj",
  "key6": "2WYwyt3jrLKnsJTeUYJhJqsXwZY2ENpcpp9oFBD4oTgoX222UQ3gYhPKReJhbnDCR8gHykUiabUATemxpjsEgZ6k",
  "key7": "3HRUNdUtWQWWwspTXBoM4AtXa4k9MkJZssCbjww2qR3bsd2QQmtEKJy6Q12tX2nAh4b1PJa12QvhuJnZZDJHny8H",
  "key8": "iBBdjuS1SMLEkg9RUVn6axt7H9Qkj8cVTgbamxV4bH1doAEW8uZzXiQCJoVWLiE81mXZp3fuDuwtgPDQPqEfwJU",
  "key9": "3z2QrVNYy8EGB4SHEtQyXB2YYUzBt58s77PrXggVyHR33LW6J2fAB3YGasJREu7T2fBZwjYojwZZ6zpuZuVs8hNC",
  "key10": "4jUGaHu49XfK1rtce2wLwyPqig3t1G6GmhfM539hQ2nUDF4sVeky2JCr36ofTxEqtBv1cbrkkgYnb8XeAqK87DAC",
  "key11": "R5qukxQLfxpZKpfBfx7gsxbqAwNyrjCnwkV8TEDDvgRHZcv5H4JARJm1DP9XyXGvB56b3aD2ppbjeYvJ99bFvS7",
  "key12": "jQ9vYq7BtsnZNVBuMUYBk15CT7qxXQehVNGTvvtj1omh2tM1Jxv2RoYwUSgCxdTr8KPDz671FvkNrRPhPw4hMdr",
  "key13": "VU47ukznsHe1kCgZYJMKnVBAEWUiXXUB8yxwfmsFwoAYYSASh2Z2F8XRVmUvHfe2BKjngDsG45B4RTRmzYdSpXw",
  "key14": "61JCHjo1Tv1rryjBbE24vQdjHq7SjDTzidW47nmsBcrEgQqv4Y7S93GnisL8uaVdv4MEttbG4igp7N7cEtH3eDdQ",
  "key15": "3JkzYT8Ybf5hmSExNYN18qCoQZgJN1gusQxJLTQTXKjJaHDhJtnL1ED8LTAhoMb5Mozy85rjeLaZBjAZAj2hW5W7",
  "key16": "58Bwg4aqHUW57PFbGpg2xPBankdwgg4edZcRjvjfTbBH71ohHajoNyqL47tMCEcpaWyZUf6whCnom6j8BcgyhULP",
  "key17": "2pAtE6UdY3ayBuxnC5X4orgvtmRAtb1YeqoFK7pM9Hs35pi2jM5jwn5hAK1bn7BBurboDct849ZkLa4RsU4zMiAR",
  "key18": "64VkcAodndRYj1d2y4kYhcchz79kwSEsww5wXxc7aR9q9bdPmMSpxTpYP6ymPm54pMUjUVwGnR6UYaKLbPjCPwoo",
  "key19": "bv2Mb1HSsDVKvJr9aGfhMbpK7Xbs8Efec3kR4L5D1SFdqjAbscT5urXCCnyWyRrLgfyjFaHo24S6oDDHS9RQz6Z",
  "key20": "47fgTKGNDmN9LUnnxY3wSxusQcwY5HfDkmdxFU3FgkmpKTEYPar9Z6WbtzBQhjcqqGBHvWC7mWg1VVhNT1qLFupB",
  "key21": "s2pdNab5ZdWRs85Y2xDdV84nAxQ3inaugyFzh5tRvfF73crmL7Jj2MbfvXaVRm6SGMrVgDAJbFfjDDHCrr6S6Zp",
  "key22": "4yLzQozBwCGLaRV3ZhSZF635LpBHSA82ngNVYj7xho6RrCMiv7NK3bav6o3dVspGxVaf7XgykhPoyka5uuQUmVP6",
  "key23": "2gsGCUMBQtFiggB94nKKQhEfjRYhRUfbk8VpvvsqNZrURwUnoxuvtvQReZeAm3BDfFWLgrBy2jP6NRsDTj63iNyK",
  "key24": "5ejRqJrkNUyXn5J4xDhAW7RhxduvEub3tikYiVeVG4KscYkCruPfK3DR9jEfHSbU2aJ9ntS8AKkqnyiC9G5XFkpH",
  "key25": "4tUmx6nHLNqfuE8pF8iNRhqf2zryjbbdeL9kyUHY3uBeAeDLrMdqmMDkQj6sf6Y9uMvRxVWGJqZBrDkqM9hy2pEh",
  "key26": "x6bn8Nayc96bqXYLs44TocsnLw57arocPVfDAbcYvHKwgzeT6HJ1EVi8KeVejeQ2eJXVM3ZBtnVuDxN6JbHEWHn",
  "key27": "Zsa18DHsUYy8Mg1dkw4rfjXsLw8pkDx7cxefQpBJrMPAFio8bXHsLZLoNCEoDzoS57iHiqsXbYoHgeKF3NBXu3y",
  "key28": "3xWCcZJgTkp82hbwdzTmw6RVqunqpLgurHFzRcFUAsZqD5eXjrpcwCSBgD2XPxPCsxiJZTYGwM84vd5esTBpEDHi",
  "key29": "CpxkH18WUCq5G7V4xsvQsjob7jf5X26XMyGNiS8A763mCZ4Zuw4kURUcNmTPk9HBz6XsJjFKNULuxAUZZ8vj7rv",
  "key30": "5pJqUKg4tsCJsj5Xcpxq7UDeFSLhsPkP1yrXG6b1YJvdwCyWNjGdfaHcTg69ahofUiCUTpeDpcFwsqWxhvpz3WnR",
  "key31": "XqXspDAAdagVZE6mFqG3J8G47qdqNSrXG9b4pVuhSfh7aqHnJaff5FAh7LX1CVJH6PjEgYFtmkCNBpeLaxrBoPW",
  "key32": "3HecL1jns2NhUxuaWVmnmyvq76H9bMgZftFpyH5kfSMBGXCRyEXUdc9gBf7NGHHyns1NB1r87VzgEfmhJvDbZma9",
  "key33": "QZ36eDCtFD6wTMVxZq1XqXFpQpXBPZ6TaL6Z36qhsrNw3VzjP6RCHSV8LayH5NMVUnczq1FeMnAfE3bgt2NJ3CP",
  "key34": "Uh5rddop51M2KbgHniZwghGkU8ueKjFa47F4veNCnrbmaSdKJxLw8u1tkarSg7NtZkzmLATvXgA55dVuAkEdgBF"
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
