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
    "55mUHSQCijsz4vEStCxzdoqUP6qqyAiF7YDs7dGokbEzQ4YP4rz9ux3Dxss9xhsC7JF2xFjVgaJCPvzbh8PS2Mo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34njT9D2eRmg34X6TgCtjpa9YBA4aNToKF3U78jzqnqFSGCnxNd7zMNSBZY3ShseBJyMyToGqsEkZY18afw8MRQj",
  "key1": "v2wutPt9aLRtbdgqLYjudsYMrn1BvWqLoQckhuEzi6w4cw5rLnk4ahJREmcdrH3MqCdzSkTinbz2BpskTVHjm5X",
  "key2": "26vAJedtqvhhbyN96yD2BmiUAE6EevuJTBsKUDGoU9XU1rcBPa55Q98iQzDjYw4fxRo83NeVPdsTX6SwVGYYPErL",
  "key3": "4DiyXJGWqHoxS6dkLk31ohYwtksWAHMZzfD99eYU2Twrc17X6mrbWUtZMfg2nxA3nbD6udRnXnyGHAdyTZVsLDte",
  "key4": "2nHan3hLFciVPDCqMPrc9YZvtDXRBqhvbZVkmeGY5bvrn1oGufNXHWM6Zo1AQFqvZCAwv9rVb6NByB1u59wbE6fe",
  "key5": "LR3hChtvm3ppGC75jenRhcDtmy72eci65rA1i2DPeReEbf4kKsB7YtuyW4RGAjG8Xeod5udAceoVZK9YEe3jZtx",
  "key6": "32f6ZaDQvG8w6yFX271ZT7HnKK5sSyL62ncneAktKseUZEukDrpXHhnsRp3vChMGiNg1y3VKLqtiHBjoPeYoRBX1",
  "key7": "2zfepKeNtqh3xRbNGXuvUeYk6dkMtGmCYRCGSKw45kjaDec7YM6N4jobgajYGXxfzBipngrHRaaKy8jUrshx2WKD",
  "key8": "24tyPtRwkyY2ZcwPBiq5dUHur72ytxsPeM5mzjnoAxrFFVTPAm1qJd4CxKd6nbaZSCrB5LeCN18Bb7VS84Ufe2w2",
  "key9": "gPC3vuWQfKSSpoDQjAeB9SgfvzT69N7wGoDiAYjCDftrQwGb73pGSrNfGmH3EjLPoZFNG2wzPcvfbtwDqFBHCD5",
  "key10": "4XVxMBAW29ksyjifiJjicjApngiuLuWYhe48NHxE1SgpmBKjZy13PunJBQcczmcvKRexbuWHPhUvNdXd5tYe6guJ",
  "key11": "3fbvG4WSouv9XESjAT9jPiKtuwA3crS3gsWrQpjdN5V7Yvk9vQ2qdnE7GPk4sHf2eY1wyRtz7RD865htMnqiu6HP",
  "key12": "dEs229GLFDMYbuqAd5cozJhj1nEhadi9P56pTKBeoJzvD27F9bKe7PvfxbzaL6pdMbapuEhQbBnNsSB7ijTmV7o",
  "key13": "4fBf5GwAjaKw98b23LBhHAoe4VRX4FPmwmoBBAoEttskCFjBCWeeYcv6nqEHXVd9Ym6wMop3qK91AbQvrjRM4jjh",
  "key14": "n95SUMjr92P4x3MoRQSkGeNxR5LTUN5yrVGBKn33a3EMZBTXqygP4zQ8dAn3XiiPTCe4PnhwYB9AquiBoN9myh6",
  "key15": "3WfavN2jpzvnYKhf3h5JwrcMbbcKPWpZ6Kq2dvbqsrK6oTTKGhVkSNSmMTVcQjU6XwzyTDgh42rHGxpYvZh9PEtE",
  "key16": "5YgXitSAsS7gTTaYHnz5AHLMtmN9J7xBevVSAhuR7EC1ukUE689t8acwNSFpPwpDDH4U6zuqs7XhNkykYnnKepyj",
  "key17": "4oXbP2YvC8WPBWGgzHDvR2QBtLy61mNwAjgGYX47iButjxrwzPPW9pg3nGsbdgJzhStAQGmN4tZu4rrxwEr47CWX",
  "key18": "4haTUg4BQPcugSEW2qGcDDi2ukk4AMzbxftiWxpLiFieqbqgN4CaR1JyXP8eYj1uVk3SoTUqkNZMLeSDjYAcDh7w",
  "key19": "4vHLi8pZ2B8goAxgcpbWa5DBFctRm8CfKjp4mcvnU5qWopk64xvYEWV3kfzVc9M8FnacBreKrwSsawWRSpG2LbRU",
  "key20": "5Tp8wGgfMw9gjjWwhaTtfcsAnszRU6Lg3rcREMQRgxJjnKFjBS7E1rZoDvep81vFthyxGAvpSTZaSXznwBZGMccG",
  "key21": "2RvFnWHkPfmECJaLq6UEH6aHfFSsepUUsY9TATwLeCHDCb7TfjQQ4dFJCNhEEgV6iSKP3Pq6wL13wzz69ZwKBR1Z",
  "key22": "57GLY2PMQCZG82ip6Cv7pzq9UBT6XRYauFGN9posXKm4HEA6E9ag2wHJYyKT3vj9vtukzYGvbV6FpUeu7zXBQkiT",
  "key23": "2GdtLcTjBSFXZM1jZ4oYEGvMfQyBqYWpRrGWXAxjombBicqtQccQADNzA8uNugThLNAoTW5NCg4DEa2V87JSRLx7",
  "key24": "5pZnyd7fdhYf5CUJjNtqvKg1aAomYYwTztJTmQvewtM2Wk5PSYV1eZkX1RC1tqf7ddboX8SF19XMqpMfaFrsohjo",
  "key25": "3hRQDVaSN2VjCufMbSyPVBYnuABnqteLzHdvVMZDaHSTvEnJ4pUqTrKRkknY2tzzmNwqRSqWfLWuhybVMGfMqvig",
  "key26": "3BaxkCFbWWW2miFsJw3yNYDHTyDCkMoGEkA82cUbvt9ZRdgrNFxjaADk7TvVTggUNjJPKFLnWQ3EzPEGuz48BY52",
  "key27": "5uc6j6UgwzuHKWytBJd2PK3aWgG4AorNiLNS11NmpHL7Knrn7kwYJcAWgfzhdf7GMPXCtEZ9MkBcWrmc4P2DhALH",
  "key28": "41DDNhmwMpprGBHStgeLnuaotkJF8uKf3zjK7eMNWkkVUbVwA5HAz3UztFkPaCFUduez3Bvzho7rK6d7fptqEMTZ",
  "key29": "52vUnA6RTJsE2QiUSRRzUxvrGhTvJFvbqAZh5e6GsTjtVcFb1rFTCJysuE2q7Krfh12RGGnSTEdT74bVoMa15FE3",
  "key30": "5RSjFxe9jstw5PSzxQ45tdNJUByZe5rM2tu4pNY9vTc33m4pG6BzNj9FXiQgUBF3LLoYb5n8oyfTRXaZsvd9bAKL",
  "key31": "2xiCgvecJkycDkokiH9jPUZ5AZytihBziKbMba5STuBEMX5tqbYCUjTAd8itTwy1223SkiJzbsBQ6pjJnn8gLDwH",
  "key32": "5cmGPXdtxDhAmb2rCeUDU6UwGdogwhz6d5qNh3VAK1ZjVYgCLPkw1k1xzer7mDPYWVTPvcRxkyWtiBAnanKRs7qm",
  "key33": "499jnwgbuuu3NgcmaQNUNr9Lqt9aNz4qmVTrvprJtGbRL6bhh7qBDPxqSn6pdLh8LPU741xKhj6fCHpq6Tqq2CHJ",
  "key34": "31RF5Yhh6AAB87e3CbYM2VHLdKLAZ7UcWHYiuAiAqpbBR7zM7rk5Db8eFhrtCDWtWMu4e683SRdm56LKX91efPhU",
  "key35": "5aCe8n6TU8XGKp5AphaDYb6F1mGNX9mnK67x5WvCZsfMS57skGddL5Zk7WL4qoTNVfYuaVfDRCX1q2jnC6uYnQW4",
  "key36": "475W33YNbP2G5oymq4VY5MaDVgPqifWtg4nJkxcDUHraxEVQZEosaY5rErgGxHdJQdddrzyxYv4bgqGjUy55a6RG",
  "key37": "KLzRawFFm4tiYuCm62rBFo9YAK2zbMaYJ22SUHegsnCMUGwoP5YogS3ma4hn9pA19dUaHHq5b8mhyvNCTYPrGLh",
  "key38": "2Vehwb5RJw2Ro2EQkTMx5aBd11sNgNoQjaW9e5otB5r4kbrukt1sNkxs5YwqKYuyXzfGMoRLnGsjhuuuQ3pnBdhc",
  "key39": "5CAdw6TGCwibeVkndzPpRmEzUxn4hwpYCLsA4azu6ukNtcv6qb7bddz1MpHmcuHAc95kro2JtTwSJiHkSMQJyhvd",
  "key40": "2vBxoHV54Js2WWijjA27bfTUr5vBpCNF3VrYMxkNwrLmnbRdhzoQqZeVztEJrYh3MMZHwak5Ccoa2BtZKmetbg5z",
  "key41": "3CVgmbmamChG81aSico14XXtXCXDHFUQn7Vxh32wtmhfWdh3FAAodhAssR4zKncZzsNU7pHx4ceRExXTUEQDKMCG",
  "key42": "2yDDgT7JAyUxQJ6xoi4KRrroY2AV9KAbLkhLLbyLYFkakEoxGmWZMEPFsR323mejhedXL7r1hvX7LjmgwuvCSdCb",
  "key43": "2gfdjstptyd1gUY4YB6BapDZoze68xnpnSqVfFtGEHkQW2cYGVPc9XjvWhZwLjRH7befCEayunM9ZWH8wZe7DUZw",
  "key44": "3cnWiM5Cmioux9sXLq39townCaR1jWqCfm63Sf8w7Eg5aios46nJfguA8bRbqbaCsihpZ1gWpuKWB6gS73nq5kum"
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
