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
    "3oKVmPK7QERp32kaxLwwySkHYRtXbzAMy1gerXsjVmLtyjQb3Kogq6cRBqeWLXDhRvMx6c4cwpJXY1UmYsau9n6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35n2sFHAhrWDg9yQAYiZZdUpcANnNdgo2jwXkiAGLmD446i4ibJr5a629oWLPMWHQpSt2JKM6L9kqPHZCvDKePMk",
  "key1": "3GtaK41ScvU3pLWeedm8NzLccbW5MdfRZBTjZpunrjcjBm643x4PQgxUrMNKUQUYQQjKadi4zX9w14QTLBijz4ap",
  "key2": "3hcxhb2Wtq6vnmDu1mR672BGXBAwmViT8GqGXaDMddaUTuAVCUHgM3zmzPivoRK2XZBaV8LEesa8LLs4YMSHSMU9",
  "key3": "5SkQGXFUg9FnBumjz2ZXDqKrERHyLNRNyuEXMx2c2FTYt2S3X2WG5Gb28jtb1bNvCCdfZQygHaizhPQzVrU49aWu",
  "key4": "JYKqbMVMLfJN3tS8kixDkbUh19ytzCacQ8B24Vha9TdfGZHgmkDG3ErtDHWpGVhRSkxFnSvqrUsiLrQsiHsiJYP",
  "key5": "3iCWHXgF6nmjBSzLyyn7NWa4KtAAJRRS84gdSCaN2SWpWpAaEJCVn1DfsDDAAVB2t2JNhNdasMYYPE4fynBEVS4Z",
  "key6": "svs2cgxo8FvQNG3MomCR5wopKFfCd61eom2cGaf9RG7KxT5qUPhFU4ydWtr1LHDEyWPjJbvUuLjj3VJUmQ2UtMQ",
  "key7": "395fxRtwKkoTweRmgcJcRLvz4FfGQGGZnuqXuzQenyMJBtgsYCeC4p9ASGkcXhuVHA87kjwYZ1fQfQr1mHXcrZTy",
  "key8": "4V8AiQ7W9X4W4LbvgHa8np3PS1Jpme4LEfQrQbXRnbsJCUmpeJvDRHYd5R6FGzPwvZa2ms1UCo5pqD17Cdh3dfzH",
  "key9": "2VeSNsyqhZYxWuDSjGhikVxF7tt77R5a74xYa5JefzGzPTWQhi28LRxzhV42ek7uTn57hTTwghPu2ACntuAquwt3",
  "key10": "jjzGsYiXibzRzdDXpCRxDXdfFiZMPV7nDHrjPmij9f3ZaunUb7qKYta7qgCbEsjpKYPEpD2ZbE2nhVeUi1AtCKN",
  "key11": "4m8zqtsgbSD7dEguAU7NZbys15mnY2miKSakNeVZStUDHkHYoSi25YcsoruhECTgoXi1yBWuxM1A6mNkjqG9CT3Q",
  "key12": "3EbgahKy1u4hbREKPywU24Kvf4SJQCgSKjN4jzEUdmExetU5tPqTkPuUgAQKShfkoso4S2pTSustGdKPMRY4n7G3",
  "key13": "23vvtqZyhph1FhR25nSvA8J4Fce8RiMJ5H3j1ModbpT9Yc5acZKA9BVmxiHdLvftpDiziL5NWjFgDwgUNLVMWcJK",
  "key14": "47BnByMEYAUZ5NPoFH1T6ZQjrxdYW2sbKLCf9vWHejQYhMdegQBAJwvkgMCxnH8Zu8Cm4vwgM5d7pbGt24BgdgGf",
  "key15": "45GFbj4Ucekc2jeM5BdPnrXSshZwwx8r6xU1wSdRgoCgVtNRAeZUFWcidA7vJFeyBBFfkjgTKicLHNUd8ZeyHCkL",
  "key16": "2WBsRsg1oK4VhfoLzM32TGyxuJfrQ7fTHVZEvTzNcmkhcr3d2nRp8DPdqDDE9ToTx4DQ5NmL25XAqpwcNkWnBkCW",
  "key17": "5dUdqx8wq1h4xFUGwb8rTj4aiFUUbJAajv8mxvS9iQMP91aFSfWXinN1wKVgn1bAYdTyRxQshn6bFfXmscF5TmjS",
  "key18": "YWhv8ido3vsRF2Xt3xqKr1MgpD4N9aJW9YaRrK4GeqepmoULBLRsfm3S8MxrXSX8shyQDf94wvTaSFjy3X57eKX",
  "key19": "2GcZy4WmMmazQzzH9CAAjh2kZeJon7vUs3Da1PjYzCTkZMgxCGq6pHmDwj1ceymqYWGUdS4kSD71doBRustFCyuN",
  "key20": "5GNRYPoyRYga4b2amGWkvNHXh21bEAY37gEjkeiuLjzAVddUxVbvogFNvMxYb97Pyp3Ag1yR7UYKmDYowtCo9rkS",
  "key21": "3MTqTA91hnWNKN5f1QAZJb3cSVb5C2QW5e91tjKHwKd8yagotPULs28XPB6zcuGw1sZPZ9hJ98YNNyDs9jz9REro",
  "key22": "4XVyKPjNTskT7vBiDihjiqAfME7sP2Px5vx5Asqwo5kwWv89tQv3rJkejunXKzGrkEyzi23rik37sCm3QmpWDCQb",
  "key23": "4ZudfRJw5WM8uGZL3ovTugL72QxAZi1cttvfCCmfnPgT4fQB6ZAwAXdCxtnX5svXbr7myUNS2LLQA6aipCnSntfE",
  "key24": "34iHYiHSqY7EkTwmm9kEMMfvfLm8QbeZHmpFHUN11PtiiGeujNkp6u1tNLuaKgM4oAAqtAdVSCuoKt8nguj9FhCt",
  "key25": "mtdKKsvJoFCSVK1Qdt6s6kWq6bArf8bAZwtRV8iBG2AxZPfJs937HiEzrFzSrgzQfnYKw5XX2Uw2Sw34YZxePZj",
  "key26": "4UQYYNGBDw5QWnr8WShBBWVXKY56E3AZMuM62dpZGejApKs91PnqBsMPZnHpvnQpkKKLBGXfymmGFDybET9uFHgz"
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
