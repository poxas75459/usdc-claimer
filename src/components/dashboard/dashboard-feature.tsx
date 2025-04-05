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
    "2N21sSqtvAEM1KAm7kv4YyQyMPbEt3XwzWhWV5AKC9my2cRuKwJKiHUWFnLNoVC6cNY3aWr9rZiiJAd41hpKyP25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CSuobA2W4B47pSBGVcKrrXbts9x8cg7mt4YEdokzbW2heZw8Tmx84S6uenvXUiydSLx9Pjov7fpS93i8kLQdNC8",
  "key1": "4ayRnr4GQnkFYQGyk5CW6ABB89HGm49dnonb9kUioy8F7qStHRtxXg8JjWv4Y2o4G6ZgwT2CY6Sh3aQh9SZoNfM6",
  "key2": "2CVJAR2yg4fZ3beNd6rVTMjbZU2mmntdN7cy8rvDeK1wuQ6ygwZUhHspLezVdR3z4quyiCTGEYy2AYKjnxSvt5GP",
  "key3": "GEGGk7AnjwTVx3fNqnv3quEHPMvyzVSxJYbqqXzGttkjZP3FU8Amtb7tzXXGaHJKXbDX4t5TseLJQBhopt9CW5A",
  "key4": "4Rbd17jAreVoZF6atMvX4axtVRTTiFG8wp5aWCLtEirP6JydVutnEZxGMoeAkWeHx9BUJrYT9rmTxo283bQ5cY5M",
  "key5": "5akfdoCJKhKR1Zq8AaRqu2eKsVNsXa9wGksK4kAoWPRsfjoqagMgh7LFPT7VLDBUjZYvwu8fVuGaCR5fVdjFS9fD",
  "key6": "aHhmXHZF91t5N5kB8Y9myng5kG5xhTCsKoA3uZ8m2W4SfmV9jVTJrW226EbbEWwKdw3GzWhyfX1jwQ4RdbCFSUm",
  "key7": "7b7B6qYQcZJ3YZPEk5h6EmNfyQe5vM3TivpwMEbaANvp8QCnT4ZiYNuD4h8cAJ6Zdk9kNjbaoRHfHAg49t2F2ys",
  "key8": "4APsbcKYxPprhQH5gN4fPJ7muaL3PvoDr3Pi9UiNqsTJtbXKePd2AsDGZ3KVmD8Bes4JkueE7MGMHA2SwURhFVCk",
  "key9": "3wdQy5Cs9XW6KVenQi1FWyNvYAJC8aWhR17tLZAmCM1b2aX2LpGMF8p1ASZuJ3dPu1WVv9NfVSMxJAuRrFvEpXc8",
  "key10": "552B7xDHYrYbkxhYzhz8T7zi3rCaMJutUEswuoK62dfwTQPHaSgZr6KZUa7v3apRRe9yquq1dPoyH6QVx5crAX2w",
  "key11": "VGnrpMcHJenyb8qARdLpnSKGBUVtxEe5eLDo9PgJtnv4z9bnNKXngYKM6HEGMLcM548i8TWeqAzPbM9CQkdJYNN",
  "key12": "54hzPrgTmsZsWEZY6WvbKtp9vsGnKHqabQ2fXfpHJbfWg8oknCiatSZZUn1fCSGqkvA47VpUuxE6cNF711pvxWBc",
  "key13": "5w69pbCjME5brxPWS2HCiYym4ZKp2eotzE6e2E9UvVJAjrq8QdpiTU2n79BbH7RbBbU4HYmMxpV1m87Cw9ysLALW",
  "key14": "2z4EXFjrdjhQtmzcAdbqBkE4A5bCJMfoQ1pU8ffvxk6Lkye7BuxepJ2gDoYLF1eR76eF7vakTBHVdEiAToUhXR88",
  "key15": "5o9SxUeTrz46ggRju5R1JqtUuodYPARvhP8XGa5mpEBoas8NF2GAV9eJV523i2oXxs1xYV2dxu4FkQMauCCq56oS",
  "key16": "HfNht3fnjwH2fxE1EefgRUtbp7Sdz4mTF6BdnM14pT8cyrskMvnvXGzKR6WTmtv71M8jzjfNNgfN3q36p9xzYwW",
  "key17": "TR3ExD4DxUsQcG4cE4QSozFmjCHSsWuqJUgkGu4FDHz93AC2oCyoisKdN53puwhL9qKSY3W5AerL6PxBTksebcE",
  "key18": "m3TCAGyyfHwEGEHhzLzXDhWWgVECZVBBNkGM6298jswwkmP1AxrjqjjyhSGtF8JmjjJNeaMu2rP6DaFCqyXqB7C",
  "key19": "3xkhjv5knyNzAHCVhsctiJ4jHDmhXxpsBMCCRQ1HBjtBUWbdVmw8f9EWXJAVJdQ6wHD6ubSR194iiMuFjEPBJ72c",
  "key20": "425tEaJCGNYtuzyf7SYvy7wdfZptHrZpSESytvMcPT4ufFSQ5wQwakaWp5Qt8R5w3XCABHeymJsfvARSN65paDV6",
  "key21": "uy8Kqa3jjmQsdExcd3PfYYPUtG4Yqr1fJoQxwDxwFYchTyNrVKFxj4i43cFGBpkdogZqaC2SVkPUYwaZtc5KHjQ",
  "key22": "23Ux8XcziveGHvm1Su3qTsYraGLNr8NHNG9BCRuREH1dCwp134bW2V7DNHA71yws6NAL2d7Ea1A93ribU8Nv7veA",
  "key23": "41sDXis1auRMfp1BJcZtLgnxH3EykJQVHEdj4AD83cn64hTtQDkcod1BNvQKzX37iiqDrfm7XPgaDsXbCpi4pEbq",
  "key24": "KfrcAY1YVRg2SXBXCtKL7U3bVuJVqojMeR83qdMpTKncK39SSQtb7KpKngid8mx93BeJzUp6tCBVR5UdpQb2PLe",
  "key25": "4k4rFJbRLpCi6Qhgxrf4tbzmhgbzu6JpysYDDW7KvhNvfTb5uS5EraFvcYjdat823rrJ6GVoz1Ggnv4KP2kK3Y3Y",
  "key26": "PXs9f8DshstjvjHPAFrop1PFFHt1o5Zr8n6GCX8aM27Zii8mQ3ykX2cG4WDdmYQEYb3E8Wj49iuFBcfDNeHkjWw",
  "key27": "5AD6hSBtUpTLEUVMG1ifko6JuTsj27XwuKAiJ1VwgkiV2nrY1vHZupXyxKw792wVmPPemUnPrFiNc4nazaa2g4yQ",
  "key28": "4FtQ2SJd6g4jHx8PcEABZpnVNGrZzd8we4p5Sq79GCWUJhAgqBf3LCRubfLELspejEFKW9jtRC2LJryRRg1FZaAt",
  "key29": "25wJcRgMfoTgT7nH22ymNqqzJbKuzGRvwcNdeiqrqqCaqttPaDnnjCjxJYvMnEMzHNcJhhueAyF78NmGhVFBuN6w",
  "key30": "5Zxpog9YFmm5UXaTiqc2yRwaGGT3SmSyQv7Q7qSB8tUhTmivozZZLzagBxemjtYGY1jmF3ECPR4yh9ddPC6fzCqA",
  "key31": "2CUZkczKnjC268B5hA8qL4Who8b5ASNLpMxDmpj5oZqWzh1gqLK9vFnkzX9fEAvyYuXY9dCQoe3P9bBiRocNs1iq",
  "key32": "4QYJpJZBk66tLZEvfRQghirPNhdP5xEXas9ZCS7e3sV49qmXTETgHMwjky8JHezJBCVYQLiHtvSVYzyQQXNPwrm9"
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
