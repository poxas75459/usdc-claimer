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
    "4gh2ZEQbmSLT5T5EoWH9df6338juoFacJSFx76JLM8kJ1JZcuToLjEEiNN15czR24qgEdim2KkB8SMFaMByU6zc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qEBmyWMKEGMZar9SexkurGQTpNxyMp9PhrQPCESEAC2XMk6uxdznaL9LdPZKyzSHXZJhYgpKtXWWGxfpg9spQuM",
  "key1": "5TQThFXGgSkc6Xi5rxZvRtuhf2zxppNX2DHgsKyq3obGstotxTGArjH1Azqg5ztNwEeH1XK4Nyf7E86AE18izRYr",
  "key2": "5dUHSuH279cGfJcWif98Eczhhtxbj2wHFpyjmZvkFcuPHHdeUkP8zMtRSKrPfP93v3UGgeswTLFfH9bPCfibb38w",
  "key3": "5HACNztPM6Uz6mkEyafmVgKmBXCayeeb9FszNRgB1E23MwkkYLWX572MZoXC9oNtWefMucvEkBKCsGVuYZj365Vg",
  "key4": "FoDEFRTFrayMq59arpGxd67JSHs1SXctxgJGjBGKdoCC1yz2Ws8jJgKN2GpbsRhdxSgCcREEovuqmAFS6ZpyeJ5",
  "key5": "4Bf6a5ibbAffiwkZ4MqjLtGwM2FyGm9ekndCbDW8sdWghfffxwBM3gzpPEXvZpy8kfnwLrQejqLVP57zMAE2Ai6v",
  "key6": "2KvEFoYe2wngPZypL2yyZihmNMqPoDFsnzpyyzwkuVEYdRctnuK8H6WHWzojGA42EG3Q4uniPBNfRaxGHzdQyciZ",
  "key7": "5aHG8fQwwspAVgzesqAjwYDzyjhBE9S42nKMhLsN1zUZmoDUmhoCYbj2kDiZ9DKiivpWweSeDECvodDCG3RKq7dV",
  "key8": "5MoRhK1zCEvL3rTZ3Xh5EoF6h76ewJQHQQqgCpVYGHye9hCW2ns8zHBYKi3S5jTiSBTxE2KCH8UGk4oR7GZELunp",
  "key9": "5Be3Zh1NPX73pRqdckrCJdqzwdQdYuPPs1e1aS2Fx9shyAfUQjUtt2Nx5NUUsBE7VTpBsffTjZy9KDFbJkdue1Pd",
  "key10": "ZfmJUrRMP7xBKKQtP92WYShex3VqJNicQoQXzHdRjSk3ne2kmvfzJ1uM2PzdD1eurqwqUUohJCKD6zPLv6uK4ze",
  "key11": "3F6gt72qbdgc2CPRdfdYdCQAvXPcTaE1njTWogiopXVa3iGMKqw6uMnT7bAcWoL4RttCHjZbkCGMDwNtjNgADSwY",
  "key12": "iKah6HtzzsCKNqJhrpvgNEcQu9WeNedro7SCFxLdfMSkpdWrcJZQvkC1zPHn1VzSqn2HYSWyjGY5Pv4C5Sq3mMu",
  "key13": "2ehBzPAwX4A6JLMpu5yq3rsoXQWXqxp1Zcsgq3ZmzMoYSrZ1Q9PhoVpbtau82Q5K167KLNn4KvJsyeTsW5nKrhc",
  "key14": "5ByK7C2yR3FoCB9ogjSsS1Y6P3GYmUQuJTiGzv9P6HWziwkUALqqTuKgRS5yXm2rE4AVh96GTD3KERR7zKkYevXQ",
  "key15": "2nqY97Na7pLab1ni3Lzgwg1By6pBrU8Y6YuHAVpZB9Hd5uBhfdJwH9Ev66PGCGuYL3n2MegU6oUgYcAkN2pDTDGQ",
  "key16": "2CmtciG7iFhPXFjtszRGssWXagnwkkFuo8bv8bbRvogtdhwRgPUAMDpQ9QwFnbavUixu6DZ4Y16RH4NQmFvGRPaW",
  "key17": "4SLZzbcCQw4NXyArbkYoqPnLnqgErrzrWkJQ8nYamzndWo2WQEGUjPATPab8VXh4Mkepv7SoSUTnDX2FqwpSGNTW",
  "key18": "3tMwkN9tNNmBSiJ8JYWEEuynw1urrNx6xaaqggHtGnWPAZ9ykJiBKctyRmBXR5VwpQJpWHjyDxKr3kGj2yMc3dMf",
  "key19": "3MXDLDGgGR883UGT7VBiNp1HinHLEGbAuwxempRagFnCGJJQh5YgwQWfufYMkEPbiC2BpToCu3hb5SvvC8NcfwQt",
  "key20": "4YzWmgVKEj7CSz6bwo6aMhgoe1T23VZkh5rnBJSS5YgSkSCAeHSiNYqrp8eMPgw9GV6n4nbkpTF6qYeMB47mApFs",
  "key21": "4jNwuG9YZWCfnRNXNz3M4oRCGBwmTUm3ozkD5MuGp992rGzF8MsH5X6XVJ93HrSwbQWrszBJwHxGpZq1PViWS44H",
  "key22": "48DpZJVytZgkhcKgfqCd7fhLdoBF9CYchC7km6ezZQxtzrwm7gnjJdEaq7MoF6FYzZh8AoX5pcfhWRnuxZJkzJhT",
  "key23": "2kj8XK1xyMrCE1WCK6JmFTAHxZKjnkFxutGgTRqMhV28nFSMwBn7X3WiiDrikQ93jU2RrKpcs3m5j2btmGZdz7og",
  "key24": "455osayyp8HKDMaevnnvChfKdesPEXacyHsqynVuu231p23XBytDGPUSeBnt7LB1RvkoLvNiUpwM6vF4hn1bMpPy",
  "key25": "4rSprZkTGqxwJLtCBbu5fzmDf444p55ps3SWF3vNNKcMQvpsfSqRvsXXhL6TLUZudt9mDPS4tQXGGM6NDkJ5g3XV",
  "key26": "42SEuoEJTxW6PbeRJc9wDPikNYHfSu9eyKv8DX7z3NEEDP2HoEHfGqG8gCU3PpKz7QM7LKd9ZKixAWkvbuGRRvAT",
  "key27": "2fhxpNhMDKqFa5ND2AteQDpagmefuLeyaowEe6LoCatryjpEJ2tZ3NZ8CY4yrLKisth96uJGKGYCBrB35RHKLs5g"
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
