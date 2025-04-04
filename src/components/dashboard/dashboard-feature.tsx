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
    "4chMpAKaZMh6FNjNYM1obKryB2ywm1VMkC41t6rGqG9wYEPTSeDsEdkokAtQxmLbNju6RnG75bEUs5PkkVXBEDaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "519avnRqArTELjCzwJQoWGVBrYoZVqjVoLZ4q22Hndws2TKgYLhHvPskgDZp8xPBEeBBmgqoG2ke3Bo6AyC7pzuy",
  "key1": "4UxRyCqhm6UuJZiC8Ue7SyMyc93stpbqBCJziB8BzHFTYC1EN7Mmqi4GFWM5H7sLZuUUHDabEYp7GPTsGgHKQznT",
  "key2": "2XJEtrwUzZNqTQHphkw9PiWdkcoFxdGWPXfJMssnCqtHy7mcLuPNQuHRrVzFRN6LXZu228mjTbS4TwkBeg3kmdpy",
  "key3": "3QHEXcvHAPkpK6oxov3wufjrNVZWEY3GtkUcw9KNEpmEQu29YWJ3fWbnBr9JHm9h97tZHtGnqN2823LD6oZQCzuH",
  "key4": "3xFP2wFjqXtKgJyCykiBGGtEcm7RKDw2nKKPwhEhU2JW1LvbYMWtzm6RoBLtNnZvvDtBEJnuNgxTmLpZM1J8MMgZ",
  "key5": "5G42W4tmHmqWoRSF9otFKNm5ncC1zJAHeD3tm9sNxoCF241MNbiq4bUzn2EtWvZf88n6taVkMPtyynUCKDmQNVuw",
  "key6": "53gZCGz7egZcvioV3nKVMNJTNNmgu7qa1TAGEcnMo8iGAiXhgVWBxx6h7LUiZ5MpqbBxeo1h8M7JK1xFoe7NfLAJ",
  "key7": "3SqaDbHsfJV4QNkX43qdBVTri24y9ifm7JrrYcbmXurobXFmxTvx9zq9Lyx4mYt6RmmAbvoC1jqb8keCZ4P9mCgU",
  "key8": "2hiyRJxGbaQVztVbNBUMdc2BGzqzfXbBapNqdTWYqsKqRJEdss7jQLmZCJVhR1pKU3eMB38Z3BcmXTqMTFLpqtQe",
  "key9": "4Mt5D7ZW3HvYNoe5M9zrXGhV1KnVnznJ8KVxAXY6Pc2MLtjGV7xqGbiBv6Fdzb2qcQsNXAjCrmVJhPo5nkRhHfmd",
  "key10": "KC4U54kAdp8dpJig8GHYJ3RQZbqxsEcnvJT2xGEYjcWFjXXDoDjjKtJWh3aL1BWqii53w3tE9abxQwMiYzhUxek",
  "key11": "2awxHN7kDXUuiV55PSCtEJUJZFZCK7sGXWeHTFfbY8mnG6pFNz7aC9hdHUmpTep6Aoe65rzSMAeLPW98mfTaewac",
  "key12": "2aApvCdKV4QTzVZKUoYTbkjy2wGxnTu8B3FWPUkpVTGBiNtSbZzypgDSynaLiPduEYf1jCSPCZd1CndUgt43LRXq",
  "key13": "2Fkp9VRbdDBxB8By262n918SxkzF2Afv43EyHWdmWxCnjayU1gnMaqLevh3ggWZG6xSyheT4cdM7dLj2RuKaY8So",
  "key14": "Rcd3gydURMYxxxdHCoGBG83trG5L1HhkJAfro5F7oMLxHbuqQDhEwQGo7FiQAwjCK5LcKfKWfGJwFQDx6bNBwaG",
  "key15": "3DtBUp3hVAXN81gA8qgSwHxynyuav5fv9tsqiUeN99FuWQbVNXVJexqj6xP9YZjJaef9kbNtkyojdXwtaa7oBQCu",
  "key16": "4DCZP39Uw9MFpLDNcBsBg4VGASuJ8A48K6y3hhz4fqTnLw7iwwkcJzozkTQr2fDYRinLj8djvFzD2jSm6LtLwBvc",
  "key17": "3yXt9nVk8fVmHuX12KErmWRbtweqLQ8CK6qS6Kh1WggewzH4bVU7bjJQiXLwvTtwgeErZJbCW5fxdW3dYBURAYAg",
  "key18": "QCD2VG6T4JkDPPYS6Ko3Hp6w1NRhhP5GRMrzC7fAJwCvikJtMo7m9daQmU7DAyWbVtyJy7eZ4TCx5kGenuP1MTJ",
  "key19": "5AM5rbQF6j6pWHaWKQRSyyhL5vFXWgTiN1C5q5QAXkcKjpE8nWQT7CqL2yvaca7o31UMt4rqD43ik1dku4zEykwo",
  "key20": "5CBJkSBBkdCkTF6fpP41fp8kW922tf3LpbPUaizYUtLGTF9sUaq9PpkMwu2j3hPYGB7WCiHEA24aMjjaU74kV431",
  "key21": "Ar9C58QghNaARmAb4MqEjfEtRNL6NXYQLfof9pVQFXZigidUCrvXxELBqQbKE7NtUT46ixj5dNgaDTd9uuAG6EF",
  "key22": "2LfedReJQHGB5YXMRB98yQK3ThryLmp8fBEHEQVbsSK36K5H1sUBzfyedpYUCxfzFK2ewjGY2957XXKYZUTe1wDp",
  "key23": "5rnuiUUxHdPmQkwGBLAgk3C3Y2fZAK3jPFgfNdv5h19wHXYN3QXSpkszGbauWZAFyEBD7qrATEHZ4RnYrZFGdkxP",
  "key24": "43QzZBaMjYYMn4LM8Jnwg4BjLnS6yVUNpi3fcnMnH2EGuWhUHXQxC62A36NKqUgLS5XjgjgBLZVk1oUHspLG5BN",
  "key25": "DdCvrXy4djzhX1UQdFQTUnzxUYDhZFm6B6PEAMjBLnmMaY7CdELHe8iohHsN7MkskUKH99qz7FuHviSYCrGvaeH",
  "key26": "5KgsCSePnKRtgpM8zoMTybDNJxWA75erTCrjRV49h6oCBcjawFfjeNHHJ4iu7xAQxKnh1UThVpKEawaoKJYzrZyf",
  "key27": "2K71yxK9qEGZUVHDsP7cV9PgfoAb7m2XsZ5gGnUaBLvSHgQahcyuqa6FSheXXC8BDgXNWWwY5dEyjrRySEMDdvMD",
  "key28": "5WF8pig2G3hwSU5TKo2Lbwwwt7YpXYQ5iCz4JCoGnoXabco6rHacNqEGWi4PaJ36dCmmWhj28k2Zvw9EJx63MKms",
  "key29": "336RYpHJLWXWECu4BF6LyqG8Bo8uWP51W5AzU9xBFYfaVfFHBJxyAYtrEAUNERge9yN8MbtDa2QgrUkEy1sZDqyf",
  "key30": "3gjboHjtCyfnu8sorhL1wwVqLLAhXa7yzpQsgQEp72VPq8xTccrtxtEkyxL52gnVzL8iw8Es192SNM9yodMQJdkH",
  "key31": "4MwynHTU1SLv2td52HUuu36fXVZYnb27nXW6XcaoK7Mk3DQMdANALL9rLzmd9tuSXk87cRMS7U33fibHnmVPjjbv",
  "key32": "3beVAV3ZjEKZ2922hW6ySWxJep22MWwQpSrSztvbitjHKppUey8WauNHaCuwprK32ZFCxE2eg7MhMGzAiBYSYxZ1",
  "key33": "2WYzrwrwNnh4xpANa6o8WcPNmLZDwYgvbrs1V4ezrRyKFunWmXD6h8wJxvq7zS5XMgDGf4bEjtJMcLULHh8YJaPY",
  "key34": "4D8u3SPWUTFy7ypvvC9tX5JKDffeP7wU6z1TWbq5k9xyQkKnCV7jp9g3jtdDTDf6DsxA2BnjnM2qZz8L8c4mJHJW"
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
