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
    "3Lvg2gDN2tTY2Nr7sZyAan6p7GZBhMgF8RcebtwHvTiyNdzRoPSqtDZ7g54517JWr7BgJfB8o2y1xQqd11LQ7yk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39C6d33EE8XFBzzKyHeXL42r2dKVtY46v4DnAWUL3pFk75swMV8tqxaidh9MZY3R7DfCjmdsUEv3XqQvi4z6wYPq",
  "key1": "cXL3aXTyAvQr3efSSUBckUPMLnZEJJHMd64Y42QZJ8XQfXQgh7nZatJFRVoUx2nUZpnEDh1cdfU3p22K8LpBDnF",
  "key2": "2ZzDhgw7D7UdbkUu9BhCyJjhmbJbyNXDNL9WZcAiwsJ3QV91zGsSFtYJgFHrLRSKH66cSusoiMwcaXn3Hwqe3eyU",
  "key3": "4uDcd7Te9c6m9dx9fCFTJPJeA5eSJsvLUg6Q8HNNHpJJvQauL4Ft2tSzFPz23rdKRWyZ9VfqxSgfvzMRN2Qu15pD",
  "key4": "4LXa3qCaFpUzaZMgvJo9KfoXgkydTM7yfjTSTvX2cCEiQWNiJbcd1okvRPrjEbUWoaXoxxMVq1fSjHwPUGsKCzDU",
  "key5": "5io389LPxzb19iVS3hMkT3EoCvFrsfQYwpiSiZQ4mxmb36GeziNXucyuvwZmTJwgqTfxBVEvhcwj9cDEW4SmdmC8",
  "key6": "2oREJDUqdiVYSPNujUYz9tDfJScB697rFNAnfK52KBr7pVBh1zYFQc6Z4urPNToMnT5v6YVZtXTXMW15N7LdvDvH",
  "key7": "3o9XoMiDNPStxcvkXxehLfgjHr9DUA2DTTM4xSdpxUr4aufpNfe3r2bP9y48MTUUoKQLA7G8eoFV9LqK79wPvCQu",
  "key8": "57srSwkwco7dXcDcceMaqDgR3h6FcLWBU8DqETapNiqV4gEZxTnrdKALjT2h24R5k4t786orxMXxxHaGM12UCWqh",
  "key9": "2UQxnAzjkcuP2YzrvSgUsxdDmvChyBLnTy7vfnxSpZ8fAQNEvwgm6KF6S4JYECLGjBq4HAG1JwxAqhzGB6xun7Hn",
  "key10": "3RcuTd9Z8voWKWuA6hUeEuopr3fKXWzMZpRSBsLNjuFvyoWERocSuRX8kCJBYh6y3b851uTAbbGgBAGQ3miQFc4q",
  "key11": "32khsJrusqEoANZRs1n92DeYn36DefffbCrqo6DSj5woReEy9MAecxJq8vP6hANjYN7fwJ7mVwLqanPT4UpYSEP3",
  "key12": "2DRJ4o4yy9DxT5YtYuwFCu3FkSh9xgZXxvjSv8Fz75kzo7Fy6bEW3TpaYCM3ktrHgmhEQySn9LUQstZpuiPEE6xo",
  "key13": "3Spc3GHfjbrXsTzhodhtnLHEERck6H44ZJjEcSNXfM4aRHSYVPn879wrdTkit48hrZ2sivHudui7UApE5pX8JJFU",
  "key14": "4oLLSTtE6sExVqJBiFqo1Q1ojpzwArNVyfNp8iaJwEMeAFvZX6Y2dp9AAnN2G7iCamcQoCzhF4RXegMFJbviwcYf",
  "key15": "4Rp6AsqS1NNy5VGaGCPYDPbjUQfiCZWj5QTM86mTG1WiBseeD7UvYgwRxgM4iab7zdPfsVe4gw54Y4uViJEqKPDE",
  "key16": "2MeJRV3mvEdTiYEruaWNPFqKgieQSBZ8D9vUFxhdbgiH4wyA3CVNLFWLX4dzoTeB9uFXZam58M2FsyEf2Mt3ysSn",
  "key17": "5CaXRa1ZdQWMBkN3BECrHdYuVV3mfCcbejn8xYVTHKsinnqgtd89fGS86abm1UGeV1KynxrfdscjZ67cqUJufZTj",
  "key18": "2dobEbk3toJhkJysaKL2CUSsZmLNs1gSmGZ2u3xVL4n5hxFnZSUudtk3zzRhYCCXL5Rnfh5RHTxx14x1iatkCUZv",
  "key19": "8RHBg1e3SPu8B7m8TSUR2PgWVAoqk4aAGoqgtRe2VQvdEYbx9yq9qtSG3XtaqsBaaVSfyJCKu9wLCM9VDaeHK7F",
  "key20": "47ZCNpizDp8nmVtShkdJuWSFU7YyoKGfkNMbeKrSGCtAVLfa24K3M6nRchxNYovXYKLL6YwRoFzWeJZTori4dLvT",
  "key21": "2oFMoVPh3WkACeSvC5gEjvoiyLC85cXBifbdkUccPcPjgjHF5VBHU4XJf1v4VNaJQtbURLoLfKTo8GzKZgVocK3p",
  "key22": "2Cfx2atB3EoFswAqwvTKJqyaDWz2Say1DySc8VSaCkmkexkg1eB7kmdsQAzMnQTpkAJNb9BfFUzWXHP6LuegBE3Q",
  "key23": "41Rah3yhtTpyugdDW8xLCiXTBW6x9Lu8tmbhJc6th5ewyUbQLJtfFr2tZ64S3W9Rw1RPmbVicyN9CCn3ChYGdM6a",
  "key24": "2Zsgym3R14dMJQTwbQehZHmNDJb56wASomBueF9sjpSE5dCiFBPBhLhCQJiygLqdDaf9A8re4gjte2sDkYVwRAgq",
  "key25": "3tuwQPyibVsC5g4tUKbw2qdMhfrM4ATwJySpL24NiRgEpTApeg76xAfdJc6WNyE4K2oESB94tDfcR2YnmKKYym5H",
  "key26": "5sEmZPCfh8QeXi1FRuxWC51RUTnRTqvibMYsNnxfNezAgzhsb6y8W8nEcMs3SoErqs8XzVNgBMPEjFH6Cm7vmzat",
  "key27": "5kGkm4PbhSMrQmSYea7EHKSRN4dizN9CUn2gmhir9fJf8BwD6Jcga7PeXjqqjJLZLaz4X8MhMd3DJy8M8TPGEd4a",
  "key28": "48WEgZc3ejPhFBhwih3n4j5r3H3DQQykx3zBBM7xKGYfLV4dsHJWRrSwy9CJy58vb3ggzUcQHJHPiWtDjWqUntLN",
  "key29": "4w9yAkgodo7C7eWhcxh1AbJV2Bvh85wv4eeascuUELm1p2JYboXtJv7G675AoqpHxDHDY4cNDqU7GLXibDbhKycC",
  "key30": "hVKi6nYkh1CsfTEEy6wzUTFGd3vrPfXoLCDR46ZwjyAMBBg2eyx7gzkTVfuadc4c7gapRJEW8hQeswQxk982A3y",
  "key31": "2iHUPiJqCxVZZtay1quW7YoK7vXrY2eLKQabSeP69wnnUxm3s5fYinZezXbbRKYxZNFKKucaJMF8PeR6h1SZKcBX",
  "key32": "YxBzGixrfsaRzmEEe2aUASdN7o4wg3hG2pto6obDqotvFmwZVHT86wSYVaJKaUXnuCqwKPZSsPU6sVbDciQCEQu",
  "key33": "2ZNphc5S3Jm268VYfwzSrgrezyTnV58nZQG2NG3dNc8JjctLGkNt8yxMHWzgj55eXqaLRFNm5ZCr7pT4g2GgaJ59"
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
