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
    "357CeB2oFYnY9MvL73ATVqGj2nmBLZLtYxEG6zciR9sYMPocSV7epWGevS24yZp1jsnn9zGyf2XtrpxUC3pnL55C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lc7F9o5y4nno1EQXfgseFGFFVvbb4zL1w6y13S7JxLL9E3Mo3XZPzvzBDVkcgzYh5XD2u4Q1wzJCVmsAD7G9t8e",
  "key1": "36TSxTrUWKpfD4kYTcWQCMTWQEtsd5UUVX6QfP8uipZhm6VHqTWvMj3AzDfTeT8dUp2wGkT5yyWT97DMSzAvU6hz",
  "key2": "5i2eVWTzF87scpRpWd1RLQQiD9xmCMf1QNa7KcUP1wFCZAoowuZghmS7W3vaCCMXTCDDPQbNEmJJ41sP3Mv4eUhW",
  "key3": "24jRtXzvH4Hxpjs3qonEdJeLtPEX4xiYYfnzNuM1xSnyFowd5Zd7hXBhFejK94iCsoPNLA95Qx4fmK8A4z4Lh6TF",
  "key4": "3NsaKWNnxP5TXXt7kTKen42sRqUyK1y4cDYSheqbhDekgnFU1nJiaSiNuEaKVkhdp6GW1eDftXQkhse6SfausUHK",
  "key5": "H9iPbLxG7KqJKvRPfSTuy8Un8rspMnSZxTCMiSNBwP9xv75xaHwMhucB49x5xQ7s8s9eM1w4r2mC3KH9HBscHqV",
  "key6": "Xxo1h9WCHDHT924HGi1XQ2DbJCtawLtJinjJPaTRcWt7gSuDmZtiVK9HL1RdJnC9m6xV2FmcLQMEJkjcYAUFBLC",
  "key7": "37PnVhiEZP5armGAiWhFpajPYDBcWVvHEraRUCLMSpFJtLwbDueXxZapyoFuBZK5nvNJCaHyWKxMQKfM6jvSDCHU",
  "key8": "H6vmmynsgSq6cXvmuY2zFKdeKQNNreZHQ8AXGExs3AyVTDS6jTb138wVZvcg12Yz1CbiA9HxjFf2SyaP9T8DNCu",
  "key9": "2KFsVxGr7Nhgznwb1Ctkb6E6Sizd3vvDwadFUdYjgwdrwJptBLbjg2BrMUtg3D7Wgfu1iTPgEymg4EFLFS77idsV",
  "key10": "2xy5Uz7SbQJqNvbT2vg848YuZNUhrVMehQ1rymJz8HqaQ88UsY2qqRv43o87QsUcMeQ1oNiHxuxLVcAsmmzaxmSC",
  "key11": "4Xaxy4eWUvv5JkV5HypSonFUameyHmCFLTpYLVAnhtghh2QjeLsf4XJwqckcuv4eP7oZZAPc48cWgTsRU6oFSwoq",
  "key12": "3PWTqRTzsZPjTRAofVSnesBVm2GiwPL6u7M4xqgiNYsJjPg1qNCsJsmXwqbBodtCg3w9ksxB1pjafFarbsK4Py5w",
  "key13": "2S212JiVh27uhxdC74N9wXQ6ShNPwwgMyiuyfvJkXesbfwwX55smWumVLCJH3Y3tdXgdubUUcus6TKH6Qo4Rf8Pj",
  "key14": "5hsuqJ7PuiuL1H9cZemxUeZaApDRPAoXAYMHwmdzmiUN9Vor51nvHFazQgmKRH3YFRYYFrNq55gGBwr6gYwdrxK5",
  "key15": "3gtU4FBGDXL74Q9aY9RkJ2zkeX82FbA4DcUE6cUhSped42tYunkhTUzPjoZmAWWJof2R5tKBhCdn3Qro4HqE4WcY",
  "key16": "n9Y7D9EWWAMHsbcK7KT6SPeo3nhUY8oXeEye2fD76Bz8nx864xsnZ9cMjYvw34t4d2mXcWpTvk6KX5F9pL3W9K5",
  "key17": "5NQzYJCG14TTx76NDzMkRA7yWehUCUsXdsG6QEdq1vy8u8cS9SxDN5Yp343r7fwauvMLVtmu3yfePa4mccPfT3r8",
  "key18": "2ysrFx9tHWUFQKRJmPUqoPcwMEZy44Jhm2kH11avxJtXcWpeqnySLAjmRu2crKLPsfbrgLo3dmc2r5HAqgsd1sNc",
  "key19": "5BNy3qyneJgXoKzdsYxsHe1pZ7irbBKjagUmvzYewrLsnRkvHCPFvazHenCvHyYwHjvjEWaVopnqtvVpD2S5TwgB",
  "key20": "58aYg2vyZxkWJeWuKTQhmRhhricwHNyNNmCHVttxhxG9BJdy1xXcUK2eNxkevtmE2W1faeQwxLj7PWNiEXkMF8gM",
  "key21": "35YvDtUSZg2kKkN9f6TPgvMFrf6D72qm8uj8mgDFNPkMGh9rbeSUVFj1TTZHZc9fGJHqtTtqF9Kauh2N6KgBDorQ",
  "key22": "5mctkjMeEkCtWP6DFDhBgGuD79jgihdUgQyfrxP8s4EyhC1Re8Um3ESobradY14QzZLynmDAB33UkuVCoVxZrkv2",
  "key23": "3N4ypMDcAvmpZRvowqwf55Ctnv8SGGEKXuPq52bTqWiSpwPEY7jzVrSnsQijPqjdZCLFBreMxX9tqutBE3EJa3KD",
  "key24": "5wJR822iVsznt81MTxk4HQJ86ey46t4ThsSMuGyS2HERLX8CADogzgMYbC58YNgPRSzSBgb9ER96GghSNA3TUAz",
  "key25": "5npGcZk8C8CSLbLyXYhgXesgi5T4ME8xNtuec9DxF6cbsWA2oYwbVJm8cKQ2TfgM7bqvQEB6eZVN466A9foU7nDq",
  "key26": "32wXBG1BP8g6a54iiK88ZtCzC1DrfzQLrHnePAKUQC9E5FTGhS5oD7yVxu8Qv4qziTQZr5XGbeW6KR9WohujETMy",
  "key27": "46UPCpDRgruiuqngb6wuU1naXLJfXJh8Ynx8dXTdQCooETPcTonQWSBr1PZ4zVc98avE3WxyFcBBBfcNe7w68N1F",
  "key28": "5ViErd4hh1c5LkHvKPALcZxSK2tRr1eZJhangggPDMgVTp6wXN7gjMdR33YZirGWAg6ihAWXc8wxJRG87R994YCL",
  "key29": "LwDiC46M9fgEjZ2VvsZFxtfRLRWy8n8sLyrpQ4gC6f8enpvddYqGhv2akz2qKUc1NBmp82ZfDX8heR8ZP8WYKCA",
  "key30": "2YiiQKPi2uNMfxst8a4kuuGE3hSj4YnJzJTy3Xs6mMvqEwv7gUjPKkfVYBZt8TSUDWqgmzPEbFJWpHnNFM5uKfb5",
  "key31": "5QEPcHDwqRfuwkwozsSqx32zdG85DZdBu6d6GtgmwE1VYEn6abP1cDiJp8kfpDRu2YDT9TDRNEVjAmtrX4AMdXTp",
  "key32": "38iPsMWNycY9CuCwn5sA3Si6jVpwXe1Z7yojghFGMt9CdgDgUiy611NbSQxFaRWAaW7bVHXHrQNF4MFEpUbUcfqi",
  "key33": "2JpJioPfawi3SuaqPe4stfMubQxkFCDeEwdCwWvt4KuEr9qeHKT8Shb2VqpgqKtwrzUWm2FPUwfmFc4GnTEjx7kG",
  "key34": "2KgYixvuktz9XMFoJrdbHWf53bx6zwfyxGYFGWwHvNXYmaN5DSCL3YGJdsm88FD5aSBjrNyYCWnxn1kP4KJKToZr",
  "key35": "27i1hTnsqfQfkNUxcNow4d15HSrCJjkUnY51rb4gcYZJRHc29Kf2kWvpkY7thTMuMcLBeNG7TFcAuC8gzf1LUxso",
  "key36": "25fEfscQrJk9Z8z9LEYbBQdeMwbgVPNxYsDRVsnthChMcJGxeUGqaaqM7KbBFiZr7g4UUY2W7uDxuj8KkXDeS89s",
  "key37": "4tyP7uf1qjhTD9e97enguM2fHNxV5Q3GN1HbSarkZcFXq7Vxzp2JfzsKbtxWcGfXJfXiT8S4DCwbtKqjE175ShN8",
  "key38": "oMxhH8K84EXDmcDKJufhn3H5TLYqGTwqGTNFyY6XcqSrhRbrjYEhnHwjibzAEUjNKitpQ6eUuMQz7YFuKBxH4gj",
  "key39": "AJ1zxiNhhbnnKMYGhiLN4rNgZwzhTQgQMeiVQMRvW3n1wuxtB2uYyUQuhdJSdzB5TqzVGkX39dhK9Vf1FR4CSSt",
  "key40": "4x5o7vy7vssvWoadYqCwhabbZe4XRSGJZFpaLtDqq8pKcz9fVB7DPdLYnuS4ifGmuiaje23FgA8TzA4YvCNkjGeV",
  "key41": "n78ENACdVoith7Fr34V4G9h11hBKrZSWuKuxWy41eKMVBSRvUKCrezZbxmhji74UjcvHRE9T9xhYkEb9avkipMG",
  "key42": "5jhJ3MicFzUe8GW3VLpiUQYZCti9f9NgdQvuLmU5n1T79waeXGFmDdgQqD859agSatwzxafuuGBXmwUGqw3RB4Ji",
  "key43": "3tpF6Zvjbo3cATfCPRdFskUy3975vLk2RYVjBRvZv3J7XGBeu2NQEXSzHUd31JeTkuTXByALRpUr6fK32yMwWx2D",
  "key44": "7cw7gPQASHKxKdbUpESCR1DbU7ur9C65eBophzntgqgFsAvatGnU2hLiKXWue87MRcsBANGByXn6pwVhN2K3Cnp",
  "key45": "2V5FZVyQn3Z8tiHupjoHsYA24AvWMG5wid6N15XRU8sV3ox9gaJWYSqE5mnoKEL3FbpJfVyMEQ3QZuVJdnDT676X"
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
