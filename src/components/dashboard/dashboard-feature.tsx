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
    "2ShdJUTn7VFsqXH2XUX8TSbY9dmJnJHZv9DoPFgagHhgTPj6mKascBs283RUWz2mQfTEJAyWg6cuw3s27LFXYZZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "imYrZpeobPmW75ikotVbeqFmaKZ6tqkSpMp6DfSt7DzQkRHkBcupBqhJYDGxsuzyC2zgJKTGffm8oxLCwpG7H4g",
  "key1": "3P7TF8qoc31STTo653EGKorosHuENgyuVu1SJXKMn5rPe6qu3o1JPkKb9vLvueuSKMNzoTzqagpx6ndhbcPnLr7Z",
  "key2": "3LQPVpVLMCkthoTGy9pEV1hL6phAknWGbYcoXzCJ3DRBnB55NFTf6qtwsddJBUjBXXUi81icyJKo4fuzFo4zdnFN",
  "key3": "3JoyzcFjWVCbf5vcg3zBxmvc4LYB1SokPNTXUsfKzPRwLSY6TBHky9M26RgRgNRou6wu5pA8A7oyH29FkQfuAShE",
  "key4": "2PyuhtnFifcYQiFKcm2jpKesWEFU6d1o6CRkB2BoeP2ACCyGQW6mnx8YEnLSoXh7VomPh49HvgzavgRpKvGu4j8e",
  "key5": "EhSqTHDVTWLN4ANWYxUTZKGWAx3VN9VE1jwLz78UxMKUKyEtadkTRdfw4LL3UHfwYmoD1Z3sJ1bgSoPRDG9REsE",
  "key6": "3PrvkbYhrV94yvRRt721XZN7YY4wVjpoQER6nSypDBFU6TH5MWFyVCRmzJN5yn9S1qeqyNmB2TnbngfCDVqJQRss",
  "key7": "5dkUCdfREUJXh7EaEpZCgBtxUqUAaRjkPzfGcie8jAW4ZrUkANQ1dxGuDfZqUcJPK8CLLgQ48mfJv12s8q1EfTND",
  "key8": "5a6RXi9M6CgGcdP8bitdw6ESJYj76iH574by6PSoEVmopVcVFfYmDzLzy6PDeyLBKany2eukr273cyUR6B4N5kpZ",
  "key9": "GKoTj6mC7ZC1Rmoe4fwQkQLgpMdbhVFWhzNnvHjAC8GP5vHjheaZ9RKSVm7ob4cu9ZKMT8K53VY9J16zugeo2Fx",
  "key10": "3YjhLMTb2Q1BmChNSmPGPkGcvywhnorJsMsiteymGurfmmVzbBcBXKbqNY5NnDnXZ3ryDMkzD8rxbvcT4ahiGiY2",
  "key11": "ugsgikB6hfKbaMLwsuG7RnnEUESJhCX996m2488xCE7vnasMHP7XEGBBKVs3JZZxHiYaTVUrw1a6MQftSs8m7oM",
  "key12": "5QfS2MkkYuijuVJ6StarykwnUKV7KobfaT2CZXFtcNH6d2DM8pAiuEqhyCNt55f3nXsP7WcNWLRuRFiHbuZ4sF8k",
  "key13": "FSkpoaj4m7hwgBDFefVqyfs5GeDRQv7VwYyHUVeDyxJzJi1dNfM1FVpptWkYHuNFMsuGgYN92cHq4iGtcCWe8wE",
  "key14": "3VKoHEp3zcYpAMyzReUMhdGffW5kjXvnum2sHQe73Wkoh98FMPoEK8WWjqrxU1MTLKkgPCtRGsG1c43CUM75J9mu",
  "key15": "ZqfmgrJXmz69NzmPAtpPqehWC1EKyM38j8u6ktjz6maRYePVY4H1TxReSEcmppG2GNnn5MMsGcdT66Xb9JxuULq",
  "key16": "5BvxfsYK6Z5T8w6BHfErMCPYShTH7oGwm4tkGMTR44LcSm7vFz2z3xg23esVkLDTATJVFVdxUayH5kMky6U13hDw",
  "key17": "4ifoFUotQAmeao39yMPrEVzWR2w6FiPNZYSaLVv8fVDS6AG9RUE6AoLdoVwG1eNXcHgpdwdB1AXFHt1UA91GFXW8",
  "key18": "3ERozPYFKxR6rdn6ySEK9Lh3miuwqU9iZVqazxuhdBdNdsUs3VEkUnoDWnJg4qm4GaPKA9aZWp86gmjW29LgRWDj",
  "key19": "2uRwuVpsDMKiFGWP2KPnAmX3LJr4F4AmiT56qoYC5o26JhNTeq88EChkRwEnhVdvZzCtvDx1sfWtj6Mc4uFCuUyd",
  "key20": "rFsuaYqTwsZ5WyZERdNi3GYGKgY54aU1qzcTfEYwJdd58CUhuqSJ6yQq46JXhN39X2CsXUHtmVgycBYtusB5Ttp",
  "key21": "2eSMLtTo9WGDbGenCRM5M2kh3fUwHVw7pCSXcRcASoNWUzWkGSiAqpb1kgR9yGVNNyz26c9h4cmZVBtwAd8W1Gxw",
  "key22": "3oAdxdKyuWXMUsgQJYa5WXX4k3CqqcGmbAtWVH2qkN1CucMoyDjYxjXweQfTGqgd2nuwJBU9G6KCDD3u5zJFHhrm",
  "key23": "4uTX2shoVBoJnMXR9Z9YReACcvXzDazwtjpLLvGEAQeAUbniQpgEvxVjM8n8QJ4nNayk72tHRHbLiy171CA1br8v",
  "key24": "4SzvH4uwvnZLLYM1fKbbmJXP7RLVi7qM8fZQi9FbzRjHkmmYgcvXFPyhhjKZDn4EwsVDHz8fot4wT6bPr1WMreVg",
  "key25": "2YMS4Q9Ex8FfPhG5eTGPNDxHzDgB3dDEraAJFJMrbatQXGgoqfbQAo6vCq5fVHQpvBVFGtcQ5NjnmczzeJAWGEBe",
  "key26": "4NPUuoT3aZNcTqxHV9Yi2cUkrZ8TUo7cP1KMr6s4QXcHQufpd2dLZVTmBeR84sBKEBED64h3cL715BEpmSkHpESt"
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
