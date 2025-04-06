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
    "49PiXGyXrv4QQyxerXUZrhcEnye1W3PJncyKTHTcXk7UrgyEorGbmGs2nHLMJLUN8kB71rLeDdrr2ufNFstLbvSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59uVaoNazQrMztuG3wiY5gZi8TdWHBb3GaQ8Ui9LhYNheHGTELvPCZUimL1jL8QXcRw1scyLourUrCNyQNVD7qJQ",
  "key1": "2tYgwBxR7aQqFRB5WMHESLaF6WkkJi4dTE3hFoW49Gb9hoZc2HbkwPETyoCkN4ubvMdNCRTkyP8eo3Dk47bWfEEm",
  "key2": "2fomR1eVWWGiUgshuqcxfz1w9x6fELGPeHmPUbuEAQiXfSnkdYoUNe4HhAkf3kqdRmEJBjmJMoAFrWfhazJfjNQ9",
  "key3": "4kKfMRfBxTCjWgrHZeSgupfqn1AWrJ8dbNLcNLNTbxkhL68YtYUoNJMgzQxRVb59RojKg7ztE7N1AovANhmodWTf",
  "key4": "2qXThMhpRT6krmh2vfKg7aWqcohVxXoA9e7CU54Qey6Y8tmJDZvcoRzS896MBDLQG7e4ejX7AVSuKoPppaTeEquJ",
  "key5": "6aqWRL8tN5SXLJ23TH1GLVuF9ga1ELGBSmCNEbvaiNmiD5a6iaU4kyCeKG9C9oNDqDU8jBDSQ27MvLZrpeSoDNW",
  "key6": "2roECxL5PUv684MJaajHRzQJsfG6MXFvzUsYJFTJsUCCMPLx1szCuwvP1giuxp7xZ4ohxP1fW8SdryedqQUCqZJx",
  "key7": "3b94MV8m7eh6ZkQFLtXJ2gJCSX61Wv4JSkeWrWNrUUPWvy2zGhPpYYo5PHM5TXse7JaokPJAALyLGBPYizezeErk",
  "key8": "2h27kbAKYMjN8rNDP4Yuo4aAsjBPxV38XVobqaWc6WETf67fJYcFij8Yxc1qk2XpVZ1SBKGPo8ifnDVNxG9WGTf6",
  "key9": "63NZnKBmdhz74nrJueNhRcPsfLJ9h2o1s69bQfwxaxBFQkFaJotDFoSyY6j6kA5m8xg1mAbUor8xWu9pcbvDe9UW",
  "key10": "2ppZFpeuNSeTC2aMe6ajvCAL9KJY5eU9Vsc2pvDAAmDqYthxcWxZ6YEtkn6DJgnyGXMgLJv5NvyWDHuGaNbTsdDE",
  "key11": "5M8VLUj3hbFq8swPN6ypWigHQSHAcccB3sftVYGAPkPB1fTZmdrABpfjinKHtL3NVm2WigXiuYTCFZmAFd3LJQNX",
  "key12": "4mJ9Tmi8bm288C6aGdUvDCagtWj51UtaBuq65RLwwwAzEyrRgVANkVBCTLmVvPbWARYhQyLn7kYvDkSDCjUx1k2q",
  "key13": "4DX1rGgwzGMHot2UsW5M3bysPuZjXQ8HEwscobmNyiYafRUDKEo3L5vyrawY4ztEqie98GsaC9AzJNz5fTysyXwp",
  "key14": "5nGmE9XRsfjpw6CpqfYKi8PjVcH4fi3UirdA69jWPHZWm9b4wn5hZCWHq4JTQjk7JFtqJJbrfuXoJjZUxvrrZpzc",
  "key15": "2ArR6hGUvzrUE9NadtYAztudFHmbwgFpnd7sraAZXaafGGBKGdTWR895UXaSjDWNcuEtURJj7Qnx8JJDUzaAp4Vg",
  "key16": "56U4B5eCFAGYw8UNREXNGRnUZz4Fu9CL2oZcPP3iht7rTdvJVtv2HTcorAAZiznww3XQfzYbbTJDpphBRph4RwCa",
  "key17": "r1P6FJ8kfZyxSWQCe5HbQXtKRx8Dp8nzXrJHGxZi1uoEJ3qxND3KoP6tjZ1EF3SPWWu3yw3GzeSVuaRF71fyazs",
  "key18": "25U9oXETsKdafE52QMS1qv9zUWYyurExYcRsFQinTDCiwydYNJ2gB2Q3rmEKdz7HqH3vm48eEqUDs2Ma54J8PUVs",
  "key19": "24MSE8TnWUedUY2XBAWV5KQ8AjJYSpUWPK1pPZKYm2N3P84RKwea9JUVgEgzLYmtvkk9gv5aw8UVV2ZS4eoDHbFo",
  "key20": "3DovpnarAytPV7NphnMRdNDssiZCGrDczkp2669Xsvz4Scmy4qMFgWNVF3xLf3BXE3DeiVveW16D91jybD6kHgvf",
  "key21": "DnxwviQh7LdwPuVgpZjJMzeACVdsY9HELp9GzmZLrf4vHb7mXbBwVu5t9c5Ek2tsYm768xpGGtHrFgMuuc2sKJ3",
  "key22": "2ZP6f1HXMZLQNxTtmhpoA3amZx2QpVa5iBboU528dqXyAaxdhvMprtcRGteK6QsyztJ2aFPJJGdwizVrUZ563z7e",
  "key23": "2ND3h9tMY5sRgtTiEGvPXYCRbp7QU2bdEvmMc29PXZeynsdyPPDkNwEbVmNFEkQFy1mzJbYiRLtNeT3QWMevzvgJ",
  "key24": "2gH9Ns4hEycs7ezavs22Zt2ECBUHGwpSRTRBRkD5z1aTpbVa6PheUfsJd4wvmV9CXb8VXcVsA2mLEJj7qCYReaKu",
  "key25": "55v59yzSSbsAh2xofV2ZEZ4REWnXWhwLGVVGKZrvAMdAmWgXnE2XX9aYXUAecQQFiGfBhzMCF2V5uWE6iwTTow4C",
  "key26": "4YDxHhE2PgMyJY8n4paopTS9a1GsJdqJanHYqwTW7aEiHA8qyK9xgPCwBs1YGEcE5buUaHvYHRcsgEkxkri9Hutb",
  "key27": "253Q5v2wNYiZU3nunkxTYZoHouk9PWThFMJRQyDLc6QCw543E8gim5MVJz7AzrvFcoNn4nFae3zy91RPhdWoaQQU",
  "key28": "2WRjtot8MhwuVeRJ3epewUtevHhc7CjXW1armNenNaxnjiAMBjL9Wn8kwa344GwVqqDyh6RpvKzNUT1HBXFJ2w8L",
  "key29": "39MnYJ43QCumazbeYKwHckjew4w5MAp9gbzJvT4ZgeezayEQ6SjNg5rexMdzXZ7Ph4DNxS3bsvNTfNHqnJ4EgNqp",
  "key30": "5VCZyarP8fhMW3UK6j9ymifuLkTPvkXoo2RFKSp9CSm39ugEybtgLaKPwoRoqUEYMZoFyDAwd21zWHuP85UXrvN3",
  "key31": "21z57nBVojGGFHxUtrssmQxzMWmMVEyMMA3v8vXmBMB7UV11xakZnk2aaeKCBUjadv26PaypCbLSzTXA5UQkGGAN",
  "key32": "5JQpfaptJ59XBvxrRhsaqusjS5CU8TRysqvW6uCqHJNmiAJEHoad7Ybn7dMaFWE4fTG1ABDhPJHAaWJrDkfYVqRk",
  "key33": "4uaWFpWKP2iNTHWMpTsEC5o4HwA4jKoUMked3QFX4NLTfGm8Ldfb64XyeANibc5NCWmUx5P5oBHJs5RJY8ZRo9bq",
  "key34": "2dk8uj1k8wrEKXDWibZE5qYq9RhdvWvUU17pvrAXeug4Gf4uVGgXsJ1im3yKxFABAncBDs8ibibuouRh1dt6zQMd",
  "key35": "5HtR6x6WF66ftrCGMzb4A4wKtsYaqWQfX5bAoXoayQpXzhirBFKDbsmhGH5AZjLTtobxvtvfqYxFpStgweMiwcBg",
  "key36": "CqfAME3yJHvPwqUt3SWogfJzWyRwB3xY5S54V5SZBU93tYobjrdGniha9NxBSMkAiSvp5Q95yCwLCLd3g6tBwfm",
  "key37": "4dMnr9b8gGU52tAHx67xwRCfquXkFdkQJYf53pLoXyJzqaPF3Yw4pCmo5u1sAk68HajjZzKbjjakc97jEAiEABWQ",
  "key38": "2UdhcndJsVSDuHUx6tBktdBjURdPXgrEfYzGxbEE6xBdc7RoysBBBBLJvnuTtP5KBJc1UBnGdU7ybA3LUwFutK5V",
  "key39": "33cxVu8rfjZLwT4d41g84oyBZZCpowKNjMYu9BnatwfN4SBF3mSS19N7JcDHCJctTyCcE1ngdCLnyh2ju9iqk5BL",
  "key40": "3kz8gLiMrf86Lr6GwqihRkrcPiC2ZAJBzaWR7EmWfndRFZMCMPeeSrdF3YRbWnGQgVhtf2yF9N9aujps9EqiZo1s",
  "key41": "3whbXYi4gakQ6efzors8VD7QGLGH1TgPy47C3ynPXdauyqJScgdR5ikCpKtbfbX4AfWJtR5AFkDsziVyfaFTQT3z",
  "key42": "44BEHwRZuhJ7BpFhprFgB7QCt98uZtvxrajAKV7Th9sUBPE597pohUFzp7tjG3uU8Bgk5vzBVeKtN3dbMA3hqS7q",
  "key43": "dXVrjmnYzPJtqNRJ3dxsy2XmroJ2qYoR4qAgRfvta9Yor2VEx6zUKKovpnPYmTuWwjBTzdKr6x8ifhRUzaippNL"
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
