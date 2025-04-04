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
    "4wnvK9dnfngF6k4jkB7TNZn9aoLoSz8nL11ev5tt5gQGfQy8zhMAHuEmY8uhSFHVtpfsDRTpU15Sk74hzxSFxqZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FPV3jrSzJMTr335hNyPaKBK77qq9Ji1G9Qz2FGLjNGr7CFvqmPZtP32Bfjq7fTWyTwE5AEMRhqeDf6oBR41RDb7",
  "key1": "28MFFE6ks3iPuf6n9kUjpScn9X9dghaiymZ4V8hcsgvtmGUNfQDdE2M7cUFissMPJjtmFSVzR38YzMzADXRrEqic",
  "key2": "28BHkaq9sroz1AHqfbGgYhESqjEpKAxRcoiLELHz2dXN8m7Y6Z1U8dmQmcrAV38X5hCEb2q8jXtSqxy22iPrBKtN",
  "key3": "3TrowbTReTA3EFb5RNXbXzZh3GSbP2u2uZvPbMdYbhkb3YbUqqiie2ggkZ7RFqxQ6xDu7NnZF5Ub3hP8jVtgDgCB",
  "key4": "H8tQZeoCJQhNGy5bqNjBtfZZSrERYdyt8uGBRLpY19qnXgXSVmwPKHW5rNQ3KUwShQPNcQHngbSy1pLv2YWozwk",
  "key5": "2vHEtXSg2WfULdgw8cojvvgrvUkuKdrK4XH25eYhA6xm3cad82cuczqQzzFeCQRq2cuH2d3odWzv42hmMtuVF1bk",
  "key6": "4T9MkoPoBmKqZvMBSPmeQiteLVMA5xvbzysUxcyiGdq4BaQorxncDAqEFmw3GKpccZPK4YS5ktvd1psUwHuQXSvt",
  "key7": "kSeXahCbzxniZcKnafpMFBXkFD7JdYYKni5gadmtpXvA6jYPYT14TzgZJVJ4VHU8LWz5A9oTzJiKpFRt7WCAVCk",
  "key8": "2oDXBaxdXYTRRcFaeburwFah3ka4NAjNymDq7RpX5vzivo1EYrrsuQQPw7qcdP59x3muaJpUGXPRMS85UgAopXoG",
  "key9": "kiWf6RDyRk6goTWsbLL2ZbvfFRK37WmpexxkK5aaqy9EtoWUK1qaR5bCZaoLKc2MbA79SCbioZWwEpCnc8eFg5n",
  "key10": "5cjw7Pw2Zp3XfFoCX2HY6t7zGcDMcD5ktCioBsBGEspLomE1BSqh8eBm1p6cN4AobN3Eyo9TC6uhkNFrCFSFVvJo",
  "key11": "F8MS4CeYs6utgBsTKSHAZbZZrtbxfqUo9wvXboFDs7eRNtv8VMorsmoL8K1cinKRxbjaVeqY8DyDL9mHY2pxw8G",
  "key12": "3ahEZ7KpkSgRVT2tynYsH9hSeaaUGwQnYkfjWJ9uK8R91gmukA7nxovvgtvPxXKgR7zmULiFqndJPmk6ELFHoim4",
  "key13": "62h1pA2fnh5tBEggE6UM4sjpF5RhboGxQKYWgfYeGbibjRuX2nhhKEyL1wCJ8DkpE478h2CZjtARw9rN6SjKmTLp",
  "key14": "3Pum8x9FVMFi9getr2S8sXXma23oARH3qSjtAu5i4bWiu8xcKX8cjytY8i9XMSMPeeamYUQchgryx6drrYgqNpqa",
  "key15": "2WZDQTyc5xsoC9EJRrram8iMjMHTyXJY1kn3dcazX15nQepzHGu3T44Hnsn3EoxQZV4hmuNA7AHE1Lky4NcQJXaF",
  "key16": "2jdej73pR7H8FdcSs3fiZ7ELagUUFi93UhYYQffGefqKpAViASTPKM2Y29uq4Hy848NaWZs54Ce35b1yDWbuRny8",
  "key17": "5TMSSqnKVAwL1sFUQzDroSHH16t187M24NPAUE4umFMiGYGfxhNXT75Gwt4GMztVzcjfDSYa2nSLDsHZhd8y6SzR",
  "key18": "3jxJeNHWrqiGtehHALG7TWUt7pJjTGw13gnTHLLExM4813vAKP4EviNd9KuvqVCr1FBEYmXbmR8CDUkpz4jpfapV",
  "key19": "36ieJLXVRiWx5mXverEWAWESj1HKV7Ash2VRt3GgsouQAUSeedPP9MmWp8EDU79QBAqeQkvBdAZGuUMHNP5r8N8X",
  "key20": "4F9N1rWoRTgGAG7pwa3eb4tiLUz5rviML7jSm9zBU37Ue2qLhYitkfMqRgntEcVwMiDdi5dqspWoYmJM7UcvpaPf",
  "key21": "2CpT1kPJT9RhE4n4djNf63JVSjdAUYa3PnuEChuWvDbPQH1n91z5aL4FxCW2piEis9nTLtsqoyMHGgUCKuef1q6u",
  "key22": "4r1SVZXr3xstK4nP3zqHp2Av1R2LyfgqZDbZ29EoVeUhYkUaFn23z82PSk1RzrmNc14t9oMUj36dvnaLgqR3U73F",
  "key23": "4EDQt2ajVMA2be6WqQh5s3XzqhzCGjciR6R2dEwWbdQ5kTfeW3sB7x9u9dGSoM6WasV8mQMWwXH6skoAFYpALbHg",
  "key24": "4fvzCdFVRsAc6cAtmoqZunneBGTdaiF94aWffpxu93XuwFvtcBheZQisYApkd5gh8NGYhpX4vhnspLcWnNKZJUWC",
  "key25": "uCXW1CWfpaxmw2BJ4r4YRw9tMrjmYq51QDp4wdrCipMXpBZrrkbeU4gU2B5TYBSGuNA3yDR5DNxLsoikEgRGBsg",
  "key26": "4w6CmdjfpiZVkJ6u7j42EvD7zyXtEXzXPJp5zezJMAHJmECbVBh4X6oEHtWCKS1MacW95DnVeGA3o6m8LhUktuVE",
  "key27": "2BbeoYTbuf6jBAyeyEvejwQ6o3RFVJHJxhWAxC94Ya2STzJw4J8cDzs3ud3oAwDBBkGfNasyJoEGk3E7TdTczNFC",
  "key28": "oQ6ZvAtqfWtFEVNu1LNKegAjmHbXAi5oHMVfx78qfMoFJCc67SwWwzEMXPMxcyPCMrEAgopW9aWMTEetjebHP1T",
  "key29": "3LWecLB5rPteQ2Wb3D1vmn48HV2i5ydwU1vMXcTUXmEmKYo1DCpXjD57vhANrJ7CoQL1nhVKqJLexEACmbbLehLC",
  "key30": "3vt5NoYGTJBFTnat84NTViMDz2mLzbNFAqBP7jjrWmzp5R72pzcfVCHGqBqE6xMA5VJLpv5G65CovbUuqQogxFJr"
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
