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
    "5bEHNgF689KWriGkp7eZvBmGDeXyGeD4NecfqdoLb1VfncxoAat6QdxNpAyrSyK2gNSS5M8ikdTHTofbDQ5z6W9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a48pRKQpMPkCbMeXWoeQvEoiLZSSbqoNVqibf6ZbuU2vLri5czHoGrsSjt8SG4rg4KAd4NDnzyqqgcggniZbAHB",
  "key1": "3wYrVk13En5bhQXjrg7kVBYe3FgEnoiv2CdfEUPmWMVyddKEPncpfzFkfx7yH1fMtT4Ex1Sx3QHSKQ4h9wZ81R6R",
  "key2": "4iWAQnuZ6VxHZtmBHyq394XidzDDRWGDmRmrTEQnnpug4uMo89K7eLWjzrKupyk93sAuaKbfKcFA5wRue31FU7My",
  "key3": "47wbB6U8K7hruYWM2HfTstATwj81nVqXtNcV7Y7vV39okC3SLHVq7ffxjfkCyi7KBME7kH6ustfxjKFvHnMUwY4i",
  "key4": "3Wm9MbB63kqYpiSGrmdJCzcd4qh8vkdH8vFJT91mMGAmwNQ9vvLFqDdvSYS9UT6pa8x6bzspcJ48piaxUgYRBD73",
  "key5": "BEHwM2BsdeUUCUUBHq453kY5fGi4um1GKXkKnChDAQwmEDK3u97Qhbjst2Xj1nzpLtmfyJwmmcWxukux3TsHyBv",
  "key6": "3hTjrbgaox4eP812jnVTmDfQrQcdyAkBCpyk81Y9SRQ1P6HmDGvFVe1eYrAFzhDr8m1erMf3upNPEoenGXnEJNG8",
  "key7": "4xwvho8FHhdxDFVPCzPEASkVyYn24eSsFMw3H3CdZRdvVS7B3kwvcaemPH6hNY1JG2qm6YpW1c7z4ydYwZCxzyAD",
  "key8": "3VugCnnyvQc2KuU7FtKV9JfDrKiBLearCDgpENUfahvQStmZ1swGdnDXAhw53SUQ3mv6A5pYLnC2CsY8PD5Wxs3d",
  "key9": "3LbZnyHd7KT4ieZX8zrbvg8KY9TiXm25dqHXhZrLvgaQ6biXhD6NtX5MiTbagbkehnNLpqymg6mr89zQmKoJ1rrQ",
  "key10": "2ksCeeSGFJ5198XkQD9vV7gQkhvrDnsvyxHinyVT1ayjtiXiTPJA6QTxyvxkpJg5xfjmUQpTvqHbu3CjyoQe3LC9",
  "key11": "3sDWguricQ4LvJfYKNCsAnew4RysJKmztpG2d4ARD3UzrUQjE8C1gukMyHd4fLbKCJV8yMLizLLT1tsSYFzTTJfJ",
  "key12": "xGLXgNFUjzvL7yMkxyrD61BgDDshFWLrRMYdN1v9VmiDE31bu47n4aPB2EXzxphoi1v56jubkZkjtEVKGK7HSvB",
  "key13": "51QBPcNdwHfH8zzafin6AeuNEKc27Xw9AK3BXwLCuzPi9Xa1djS5cuXYLt6Ab3MMnqPJhEX8SciE5Y4siyMp3GED",
  "key14": "2LZjU2rMnGA7oBQ9WHNWX8bPiEMLRJyTNjAPRhHAoW7TXCyW8R971pWgJfLQvJJsYXtcFAQTeyWKVhxjVaPLRN1y",
  "key15": "3h6yTL45H7uAU59kqhRqtxETzcN6mj7DzbKLzj1zePW1xSvDZ5L6cUXdhcXVMuK284gwgAUCVBMn5DgQapZcXTYF",
  "key16": "FnfXvDKi8x7ZXpAirSBe8QZJ2BwwtwjUXH6u8Asj6nqrXMXHgqHb2z5o1QDrCggP94HrYGAJySZkgftGgBLfnfb",
  "key17": "4YuAoq8c2haEQ3s3fJ9nxgCU1seTQjDa1QaNChkiCydF3yz2WQp94mhneCKaxkzVdxjU6owJbWmotRH66EQZ5V1J",
  "key18": "dwCZ2FkZXEZC4XJ11HfmWDJmrcTk5sZcaqMwJ7YKmKxf6CqE8hEzeGYX53bPS4ZiecUUXCUdRhpJQKMYiMkJhsU",
  "key19": "4NyryEWTuQuVG4buRYCma1wtXF1CmmWYv8KVEMt4cpiBgc3d7r9oWPTXdHrFEJyZCCcAfvoiiW2E27XhWhxV6TDy",
  "key20": "3ufNzH7T1Rba4UVhp3c5j3QNsi1i5tq4HZbDt4rFt5Bty15DmACxJMwTusdBUr9meVJ5EzwZZm7RWtcsTQBA6t98",
  "key21": "2Z4mqUn4dF2zuYM5Xb92paXksAk6E2QKAYLXJtjp6e3j9LokQWbVdBvzfLaiTGYKGvQHAPRSw8ZXotBfJ22aE3dk",
  "key22": "5iHirrhvJXEfnwNFZ1J9C3KKznJJFJjPX9UmWVeZjuKEPvswy6aNnyw2HDRYWP3BmCBDCZP61hjpB88G7ibsKcGa",
  "key23": "4HT8Yk48ineScHedspDFNFjGWsqH3JbThr43tQS39h4NTyZkuh4GnSST1LZ4WXaVxQsdYr37r8tKNwbve2HdeaG3",
  "key24": "eT7ym2dU98dNBVE8hSqGi5D1ygpsfxdbEofQ46rXx6TPdqaALp4thkkAutGJkvJ9CcsqGhe2LMeESEe8TmpdD2K",
  "key25": "Ndjey7PJxfLVChYFr3Wy15wFmhmwgEheRjPBvssqn8Q1FTwfu4M69xrcNYAqFxDRGG1oHWWeWbsQZKQEE2k9AWd",
  "key26": "4vBDWoamRMUoti9qzDVsoUGzvqPKihuDrQXb28EHA2t7VMFUA9kiCsfjwDDr26H2mXetkoeKRoriaD3axPk5wkmn",
  "key27": "4YUkLQSjq1caYeCXdnC74xtHzkNzUx83Nu2CMNE7ix5dHfGoG9ooSaCZciuiKVC4C88S8mAbSvLZAMwDt2LfkADd",
  "key28": "4LrnfgLNMfsmboSt83KdaKppecT88nNcjRdcsvBm7wxPX3dWxoi8RW4TPQAwiXtFqAs6xCTk2XxnFnjMWBWhnLng",
  "key29": "5kcn3goa4YK4ENbbyoMQQ2wxUwf7nFM2UeRtDgnMRzRG1ikFb5d3zEK1PZTcL5cXMdPZskt7Lhf6UoJz59tqbR6U"
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
