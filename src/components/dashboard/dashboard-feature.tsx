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
    "22LVUtnU2tKbRJ8Zy1zvg73o3x7z4y7nh5xKzvGuxaGRreSTfgCsASABMYHtwAFCej4bhRev58pksuUgr8MkBYU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GHZTtmh3M6ra5mzhCQkKLPxos3AjdqhLfHyBpGTiHmGCLeEPcaJvdMU6EvAy7jJGXFbUNX5zDXZFWnQBGFHwmge",
  "key1": "4jHFvwRDTbfpSfaEjvGvnNHftFshXyS5iAT23XxiWxZUaFniFRjCFrhmsYm88TPsQWfNe6guEsisTnhdLMMFdPkf",
  "key2": "2rvzsvst4YBn2Ubwzwv5D8pxTS518M8gFfFkm5EYarXSNxet6Mk9WoKomaLg4esckdxevv9XVMk2QNzAwW8hxRpK",
  "key3": "5BjTCEiSEdfW5qhSLPPEvnQ1Aa7GaT6XZgw3wgVtshgaCZesJKwnGWN2XD2LhFtrDuMJw558ykFHyuySmiUmfTmi",
  "key4": "4DsLe3GVdutuTfQ2baKCbTiC56zY72P5w1fdtiQcoTCjM6fvBFYCXW92h882u1GDQ2gTFNDaykrjXYEqmQYLewtL",
  "key5": "5Cw1hEiZMESswxRbCQV2YxdGwPe8z6c2HgiCuHMzdqtYiQB6YXLAT6wYDCNY32E6LYuwPdEkAmCvKYx7FyRzgYQY",
  "key6": "GpCnH9MYdnfGBkLVvNfo5M7rfifF5XLvNDrAdbiYSLn7GnX5ypHNVnSs2kjF2egNRqAsw2QBr3zWi3Uk8e41UhC",
  "key7": "2nd9SVeM4g6zmsSR39ChvVhCaXhDjdGV3c1ZPJDAKqEAVTNVkXhHZEZtBx7chdEpL6jTP1mPXsotYM5RJtoZrZJ9",
  "key8": "5W82EZ8nkYMbGWfdhSrD6DeTwgBdP2CEKt6vDzbQ6u2hxRZZ1UqaiF7TwB8xCnhe2NHTgTWhAnKbrwXkyKeo1Lhi",
  "key9": "jMsynfoJz1xm6zLU3SwdKcSErc5rKdfdhVcTES9VxzZzWLqj2A5R1SZMsktN6JA1rViEBNasrU17zfMBZar66if",
  "key10": "5uxbFKe1S9Zfa2cb2XLdGeY7RYnQGLn4BMnaWkZJNwyvdTK2MyrLHQXWe23JEp9xR4b1P4xf8ry39WhQx7oc8kXh",
  "key11": "tWz53UZjdacvNEFZ9NeioCiHBsLtFDny9KiYtt9BvoiyuvT7MTHxyDzb6HUH9vM7WKykagYALW5hv3odkuJf6FX",
  "key12": "5cCHEGBrUCbDCUuimrLdR5N5E5ECNT2nWVssSGebtMzPe5PBGnT2mUR5DzUHrpZLGqN5V2TdoGPt3bKdMsYcC6U8",
  "key13": "PV7AEq4bfjvxvS3SdutzzioDwXAj2sfb49cpiCi9G58SnCC46QiW6HRS1mbzdUFRSqVqCCY8oqarAcCwkm7WaX5",
  "key14": "96Dt9J2GGWPCgcNifEvNgnDcrqWvGoKvwZVCSiefzR5zTCqNuthAVZEvSt8yjTvyHKEyQ4Kp2G9dfChyC2g3pVe",
  "key15": "5z52bxqUgPMxbZvuQZxiM95RgiQ2ecnDFm5PHD1fETuAkQvM5cUWwhVCQnYsxnm9MDwda4UB9HVjh9EkXcoiiNvw",
  "key16": "4k84bFt1ZWizw77KtNxdk6kf7pcAFXLfT2LPgf4RWfbEnZYHf8K5PQXzfpShZdCVtnQimfWffYtrzNmAeEDzH294",
  "key17": "2RxUfRC4iqy8J8F4ub5FESxc8BHe4KdjWucgKn8T5aZ4FgA9kis9vPmKWhhmbKr93LokwV3RHQuRy3P27fJ8jMmm",
  "key18": "2F5MCoMDkBdXte9y9aHEx9kicEkkQx9q1vaiA5Jy8TyzzUz1o4wpc9bQPfMyWuPP4xQvJQ2dAUifbEeq1YBFknV1",
  "key19": "oAJYrkkMUC5qXAh1fsE4gdiSYtoe2MndH3eRQD7wSzDhkrNNFREHiRc1vLCBcY2jDePo6T2UV2kSnhvNfGNB1v7",
  "key20": "9pRkstSfTqqqzvrSyEWMCMmgurc3gJLrsF6XKMtz5DEBMYvgeRWtoJRZntTjP8au2ionUJvCc7N7HiBqEjebREA",
  "key21": "51DvDkcC8tLo3YYxupYzGn6nXNYsYARL5Mbbq81pbfnoA2PB55b1P6aW3ZPk1FqnfcnuwnDvkUdYUMSKTJSmz9BC",
  "key22": "3eqLSJqoRzankWy99U7XWekGTfwjm7L6nMuJ3kwmhFGud7LiwLzmHMzVwmsm6AZW2MG9Pqd9FP4fALU43wpTt7vB",
  "key23": "4uiyGXEfzfoxjjzxvFyoRgWbtbouyUttCJSH9duicAkoWMrRCfi49QStEt6gRC16Sy2F4JXj4aJXwXv2cJweESsV",
  "key24": "3XmHmjQxDhsDkBiASrx4d7r2nrmhYdPuB6Vwf8j7VSSrL4vzPPBL94Qn1MxaQdxi5dMXfQNySUz9oAecLa1shD7f",
  "key25": "2KDXcfuX2LNpyBhKUvmPneQb8CPeYULm33EahgTgJ187SGqpqcjcGXzwGtmQ7Ne7cDL2SeAvtzs8fdJhoYfuBPTF",
  "key26": "314aVMTauTmWEg4CYeM5FZnoToH9CVvg4BNXitXmMS2JZC8mgTiAkvwW2qpqnYG9VoQzaC8gd8D7KgcrqMzm5csd",
  "key27": "cHBajzpWYomPLm6AS7H61PSnosxnpgrbJ2ex4PRAKK9hyLBZZQCogmk4a4wnVcEwe68ZsBBvWoR1c28gWEPUYGc",
  "key28": "4tHJWjQHtnKhPXDAFWHKkRuGvttdUr7N5HrCfW6jcCRwmDfLHAsZSQ8ByV7y25ejwaAhhbDu279e9XBSNA89yzLS",
  "key29": "CxgASsg5bm1qnV7YnVUdcU43KXiWMMd2mrupLNhR4cb3nfHzcn89Wep9JUpESBj2CFFzHM7CPiUoxYsfoFr8jxF",
  "key30": "4oMq9jnj6gbpA6KcnJ3o1TrtdoYygTcfc2e6YAYon8ZHS99TRzzbmnQRyks5wHkQWobMf491yqRMmZynZ3onPy2Z"
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
