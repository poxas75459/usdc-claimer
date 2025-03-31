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
    "2NYwyzh4SdpQoGwfukdYNLE58hL7aGghBaGwte8CUZPfvhQtWRacNgg2ZABfs6ZTdrS7BMxr8pxK68gYe8MzxXtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LrRtm48QVJ2KdNLzdWf4NjGE9pkFTqKo3PjmXmTx5NGABrWHhqYNjHdRwsZu6fjkodR2oX184zfkw9i1a5VeXzT",
  "key1": "2LfUqf7ya7LBHYyG1AX2nZ5kksAMWVGcFxUvoLtWVeHfFERAP6okcc5sLwYjwyDiXAqhc2JBVsrbPZWU5TyHvTJc",
  "key2": "jGcNDkaPVTwdy7gPvVKibBi3bPwkJjG6n5ubQMBUA9epKHFe8fpRodATYGhQ9nwmPNZ2tp1QDQKcXfMk6XXKjLw",
  "key3": "26oJRf2sPStyhQV3Ag5BUJwktzGhcyL4v42NqoakHyN7wM6FQGRW7wzvVcWfk9uhF47MZ3CBQ2isiUi2SeH8ywDU",
  "key4": "3pc5GRdGMuGQuW5eBVo39s4oHpM6LmUCcybGpddqXMZrBZu7pFCyNdjWpkxVZ6X3u357fUNbe8fhgdLttrJkLtsc",
  "key5": "2LMTnPsteXFCT6dPMNgj8g2SLSmMJLS69hFzcYbwuMZCfW8c5UxA6hntjeXYWk965vhzNz4hkVYRAU39sN3tx6NQ",
  "key6": "5DyAYm6QCF5RHukXcyqbWK8U5CqvWABV2zT69ZXUs1VFt2y8PTc9CyuUXBc8rfDgTGzs9o44Wiovd12bzx3KawRb",
  "key7": "3nsokvLmb1t4WFghEsfebg4Z8KVpZR9Vjsx57bW15iStdmua5CsQDr5xSzVGQGP5opX7TdASjNK3bmwLDG6wjrGv",
  "key8": "4NvBC8DE1mcLaLK95HJoxTSRSaFWqV9w4LptnVneihixczUpNSeef3wkUcMXHcmCAb4ag6c1ddAx5jXsCL8MqU7L",
  "key9": "3cBYriH99DZ3toMmidwG2R6LAoxgeKPDynxN6NmEibFfDZ9ewctgFC9MFeK8SjREiA4zgi3fzoPaj8Ag924zgnGw",
  "key10": "FPWNrVTpFtTt7DDtT9M5s88t9t3HTEWbstRE7VCk668Zo3NnwdF8ZAiaioPktEvA8iXra87qjjbUScNMNbypG5i",
  "key11": "Q8kbjg5NnsTYLXm5VzhFHvrQn9TEps1B3RCz5ceWd1UWJjSDF9ujju3jELUwD6BHmJvYDP9ezAQCgLFCi14RvRc",
  "key12": "2cUMe7FXRo2K4o6srUv7T973r7c9jUBDQo76F3Y8yMoaswh5rbNcyoDNFs1Q9R5xDCus4XDrgaY1YqV4ZWFRDPTo",
  "key13": "3ZXvkBFaGsE3VcGLa9nH3VGhmPRzrZPbotNGk7EtrCwKwXR1yD4hLpoGsqChMs25mb5GwMFe16BpM9ofaSdzWayq",
  "key14": "3YxicpXyrCh5rFyd99dKZA1pWuxAYcMAw9KsjHSmLuFUDMLfYuTLpGinRFhjX7y4RoW1rSgERa5z98M1VYzCpFkt",
  "key15": "T7boZRtEDHMzaxeStH6fLiRxqdJvZ9bWJ31XTaqxQMcsEEpLdjtGK1uKSNn7gSkaMfoMz4QXWwz6PhhH93own23",
  "key16": "2RhfTGhFbWFrX9K6CFV7PJvhTm8L8oNjuRxPUY5SWWFcYTs9sT3hp7SnuyddB5HmmrP8nESUjENno7zRo4JYMzyd",
  "key17": "5CmGKEqVumHsJRP42otHhRv5VmeQDWy9ofS6PNUzcC9ZSdbnhj2t9t6XoTAhSARbKbt1ti1eCtgsMeQbBRDgFsrq",
  "key18": "5F23rrw6sVt7BTTkuQnWafsvb8he5vBXCvfGXPe6NDfc62CueBtjA9tmUTZPyw1hoRDJVA7cs9dcHABCp6bp9zir",
  "key19": "3gHAGQ4Be65Vun7AUizDYBmneDRBd9cdf1ctPNg2avSa7q4NwkqXRW9E5v782cai1vVFtGsCYMnZufB3wSC1b6VX",
  "key20": "22g4s4vbMcq3DT69aJaccxkixYBvob58Nz4nyxFPELFpKscakNB1RBA1kbQFB2bpqcnLW6HwCiUt8dNJd53CWPGy",
  "key21": "3WvhPy7iYzWkN6g8EKo7syMa4o3A9UddtzDEdcsxidgN2bwzfpfPKUS8qyhRMzSzPeYJomm7MwECTLizYx1AB2rZ",
  "key22": "QLyE8JvNEkPdXtjqVzsMdfXfhGi7AMnrEZ4K75J9LR5joBAUux1mdE8mSYrDbm1Wh6UW2jAsNKktWWd9XNpVHHD",
  "key23": "3t4Umg5V9j22yDB7Zeo7raeeHzoPpSbiWu2zf6Xjg7jeTJ2VmovvgkBrHGCrdEoxyKTTzdVCWP6pYUyq3Yd6dSHy",
  "key24": "3eJssN43fRLZsK1n5N13Bgm68y3VDnghh5VhAGuCgXLpbawje1N4dxUHmw43q4x9UarF5dXfXuQ2q7RA1YdAPMhg",
  "key25": "TgXT2jizU5TB7XyEErqsVmBKdxXFcStd1Fqb6tmSUhfTWsPx2kBXYkZL15T4AjEcgiuVHVFovXzsd98zbwQcHR6",
  "key26": "36jcppHjxzJXo12FUFpqCf6Ts8fLJgDp7JgwCqPWWpeS1F28zQtEDVuLe16ppVhYNHuFQx5iZGhmqAfaoE4jpEgj",
  "key27": "c37rhiUNytRzY7b6qJbWWCQ7bPzcaCuLd3MzSk6DJrCZMuR87EkNFoXW1nFwhWj3ThvUfFephrQwHMUFcPGdgAr",
  "key28": "4mnUhqbhnhr6ZCiKksCkPcTVX1E6i7C9m4CgfFEtctv2HjuNvjf1TAadUh5ZERz5esevy3ifQ8CabYXeTijdsYqf",
  "key29": "2t7jYcLMyksS3RCbMSpj97AY9Q3z1Y11fzSsjiPg6Drs3Ri78zuvdZ1cuENkhDLwKG6MXinqS8vG1FaPQqiJWYY8",
  "key30": "5nhYySmpGtYUWBF6fbcHxXeQ8gYRmgk6ZHEsaxVXKpHm7qHR8dUWhzvhRJCRT1u8pSdwUQ4rJAoaHnq7iPhoUNKb",
  "key31": "3wnANRuXpLSdbhwDiTsBirX1uCfE9bhP63JZvHqDkicZ2xfjAqRCUf8QznEhfHh3dTZu4jT3yADCHNgWtfgSJPwq",
  "key32": "3S5LRphfGipszWQ1S5go2skHV3HQFMWtka3GmMZ1wghBXiCuZrTv6CA6vZXhYViUb2ron3EchiMqMb1yyHMBfid8",
  "key33": "5CZ55s5guoPjLcwXbcaMwxWsMDTHdsvKUF7hpiYEazHGqnEdY3wz9TDmrpNEdNsLQePYE1CfoWQYPbiXwvC34c6g",
  "key34": "4inr4g2kLrMGfVVSdpjdJSZj2Gs2E3shtWCkQN2r9pTyNqeAurxyYidctpW67mt9vQwiXwB5Ffv7AxJsNu7pf7Xa",
  "key35": "3eJAAT6rZRdjcN2vcyzFbsWrrL4chvMCYJDgUrG2dBYt6V6fhtZUvFkrPuUBXHAVCWGVQVJbjJkwnEHi938EVPNQ",
  "key36": "4hQKYxbANmGQkRVVzDr6qTYMPgcVirXtKvCSMWAKM477Tz4XUCK1vWzoCcxN39MsbgyqzepRgA7ZW2RZuDcWbnAn",
  "key37": "5gRz54q3J89oAqhFBeoVHbN9XZwrw7VAMYi9ATvcHQeeTtQPpu7gdaZWWS7k9yTWNKMxSBmttcvQrQKxvHDXcjgg",
  "key38": "2EVdXryN3GdMUJ1yfuZko9HpR5mZv4vr7eZeSUsELrg7Z3eRDhXnWaks64oZkzgdL9GxEASTVdCmCUPXWtGijTij",
  "key39": "3AGEJYqDH9M72pkPdTmLN9mW43WBLbcnepktnkNKdzxAg5Hsirjd7V9i3Jf8GVeQhM1d1KfegSy15pdFr1Zvacgy",
  "key40": "2Ax9cTZxUVcLZkTNHqyAMGBHjcsGyBE9HUJYDCrZgYqfvRnJqpBg8uADT2PppEU5aMTm5GooWKQ5WqU1gWaA8vnZ",
  "key41": "5ppnVvYEoZwxvsG18WkK4bvPHNpdM6DC1MirjGHFBF6niCQRpbTa2RYHhE5iqDMdKke2mXav1V1Hv8aJTE3wR3aN"
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
