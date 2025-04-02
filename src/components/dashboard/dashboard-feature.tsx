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
    "3FmzDz9zntsBnebjfAvbf8LvfZ5oEMnCoc5JtEcGRswSX5vPBhmSGy3N6FYFtRG1f8ZeEvscg2BuyqAe8nm7UEmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DdQDLyLPE3zrDZrfS7H9z2NQqMUAReddo9nkov7JDwNqZU142cSYB3y5C99CYKwqx415vuQ53zPMCYeyL9dLwGU",
  "key1": "3fHewBUmJsckxH4ZSGLRFzuYQw3TY5SSBTmgXRygjNDXM32cVkyC5q1zubaYanAGJxVtYyNcTS1zNi852m8g3GM7",
  "key2": "2Vb4J3fp5qpcbGcvLdzrNDNLw8CmzD5RMPnsFwx1CQ3WWPo3SiYA6YMh7soSqSKER22Be7t6ETKHkdX63EDhVjhP",
  "key3": "56KFA5DmA7fvgCpLqetaV5tZC14JLoHuS7xqUtXQBmvSqyd3hkDgxrE3ASeP17oB5k7f8usj6XMYSs74Ujm5QhwV",
  "key4": "5PpikiT3p5txUKw53BAmdsHYTQynaReCvSq4qqb1H7fnJSQfQvfHCCWLbYBXYvfgp4363VzUTCCCGSX5YuVk19yD",
  "key5": "5fZ8KzijcnTSVm19k1c8P7DrkugjddDPycLSeJFMW9rnYiDAcsJGR2V7PNByNLZhrYFy5YWqLyFACb3pvThuoz1U",
  "key6": "3sqUZ4j4k4sVZmDsebwiUGDdiDJHcgRsAMmKpDLvS8fFdR2t7vUxifVcPuHKKFMoFXthJ9oBAJheYwwACLq4VLv4",
  "key7": "5NXJ2S1uFJN3epppPw2fBgZ47dWnDH5uGprDeedftGMeHCpt1iWLpCWLaqJnLf2FuC76nR4AGkJzsS5h4audZd6L",
  "key8": "zqeqKCyCgbpFzdYnpyCjLAVW1NxseEBpjzxzxcUAagBQxeUPTb9RX4HQz5Jkhhe1pHyXJnU3kNkyPFSzThbCoSa",
  "key9": "2Q6DNZXm3cvfprJE7wRM35h6Fi5EkSk3ew18hLVEXhtQyCYR7o1Rdjrd8HwY2wYvxmzsm78UYg2giygDxKgYszan",
  "key10": "5z2uuE5QLagMr5GBZMaeohkuKUeykmadcrbspcNEVWqje9By54krSdCNN8ag1uRaLhoT8k9QtsianJn8XxtNAsYk",
  "key11": "2sLUiZANzaR75YjrrUJcBSFrqrjBNBKuMHmEoNEgLd5SSbzrifca5VkXRHjR3dFcscaU3vMJrUh32hvpQ2joDBUD",
  "key12": "5uqB1pUZib73624dk4qL9pd6pGb7DKut1fEGkNtMYjyVEELaJ2PXYurDXRWEAmKKQVroGKK9Q3K1J66c3tEYU9sf",
  "key13": "djBucRCwoWYHToxhEJ53onFYfbJSZPsdkTJWiDBXhivhCrjzjEV77h3m4BysLi3zUdjgU3Ud7msmiYXfKNb396S",
  "key14": "3E5fwE4MaKCqG2b9tJN6tvYaFYfBgD81XQbD3JeH4EcaU14yinuDZ2Cetb2XawNButQhStD2hMRkwE8VYzQ1Qbaw",
  "key15": "vGE2wVQG23Ymmeu9P85p8EX8Xa5Z1RSfkdBeP2BcwakGXWQLcsiGKx2TuCg6FgzHhxzwn2Nj2BpKgtcuLfPVZN3",
  "key16": "3VtEicF39FajrNi12CaL38wWpgzAQBdsw4jW9Ta6Ju1cQeb4qbR7ASgb5cdG7pL91TWLFs1pfB5V1mx3xYAevVMA",
  "key17": "2NFok7h2P43V1jKmyNGBAP7mnyUWvh213viEU7TzrZqnzXfHGQubR8j46nTfLx1eUEqAmUipr8ZJG7oFMBkmwjez",
  "key18": "2B5sPVJPxuCNBJT5mn4Ggsgt8XWwjXZo46Cdv8PA5XD4Bdf9DLjqasai4nL7fjotoPMYoy5A9jShMZxNDiQJNFet",
  "key19": "2EMYrbKEk3CnegNWMXqbTEpuYfEh1s5A3Bh1pqHUnigqD3H25djQHTRSKSFJWVW8kcrqNh14MCENRuYXtFJLXGPV",
  "key20": "5vjnHoffzte1sDYTiYtmUsMBnLefPW87ZDYwQYPmN5ppqr3aZSTsKwfnaGUEn2uTn4nvS6tHeo2SEit5SYnP7Ac8",
  "key21": "5TMQ14FvJzp3Uwh99jRKFo7hh9omBaXe3D7vqmnBY2M7wUHYmPKUyeMfSjJFfY4tLE4FB9u5X2oXoEagkE67YUt6",
  "key22": "wnKvomTsUVevixNN7C65iTQoRxYBAx4paMp74qiu3DWYAV9Az32xKgStwjhj5FoBuqh9vbq81DXXPovnu96Kicx",
  "key23": "22ph8BYXsXbbmM2AM4fEHEzJBT6iZhTj53HHEVpUCDQMnbSdL9oihKw9FAKZQLWsbfUGtbnLAZEczwpEWmYaEFZS",
  "key24": "qFnmih24GexbdZBv8Ji7ScZXTmMAqWMNVjBRZJZpjSqTP4mReceCjVrA9rQCwss5eWdv3khVuoacoYDUvdHTJfY",
  "key25": "3RAd1Lq9p6gNpqMcpkbTUD1EPUoMPJ4qnVXV9U6sK8RQARpe4mYxsSTtoPxsB8Vwg1srwWHyrjqrhxFT2D1uXEgb",
  "key26": "4et48dYCKfHKSnYTF9FwxujKDsWtdDiNJhR1cRiefJSdpk4KXngqTFgSiJ5VTg3UpYSNnkzvo2zASGb3PcB5s9i3",
  "key27": "3o7GBUqstmD1F3W5Skq9vb5fG5r3FpTbNWtpd2oCwWmMnpHmJePYbrfAQh2B9L7ftWb9vDzXRtHYDXavm6xZEoPQ",
  "key28": "3uTq26mUNKKKPJQR3EsWRYi7caUdCQXwdkDqWyJjKirFgrwmoYaV7d11h8YmBixfTTkeiLsFMkj1qhmjsXwkBWhC",
  "key29": "4XnmdHpbgbW6M97vsKXkJp4X344RBTXt8JvjvhzaBGXFaGCR3MARV2NXGV9DJEcq5PjvTopJsaxxq5iSojpMw9XK",
  "key30": "5LZ23nBU8UYzLMiqr2bL5gPg3YiYi76fmQK4euLc46V48Jmc3iVU3svQh26bTSvBgv78DpnxxVehd2Vkh7y91cMx",
  "key31": "3dGgqLBpydqMhKuCjJRWMkMy8VgUgqjLKuo5BVttbYn7DMgVyeCCB8GHDBX9bBizsXSKELJozFXJRdYVC9ZCTZHD",
  "key32": "7S718ctuy2i9SZbaRznV8bwsLsY95UsgUmcPaQY9svwpZAfLvpRE9Ha6dU6E7fW7J7uaJFoHeAbb2dddQCGngBN",
  "key33": "2EvEAPWTQHhxuujReKfeb6dVG1tzvA9uHKKgX4132c3YNjUARZyJ1F5nJq1EC3iQK3MB3WgR2MDXfX56BVmdYQhg",
  "key34": "5jW8FoSovoY5G5rTXqGbT7Vh6yQTtgkSqhahm2G4NCvF19tgPwyVrs6iwxKk8VYb4QieDCCfHUPZzYP43Axmrv8e",
  "key35": "seqw3ygASbEM5UDoH1eY1Tqod4zkrhuC2aLt8D6h7CsaaN6z6x36NvxPMtTnmX1jhjYSvPZWTEVyn6skYsNMzDA",
  "key36": "3iWL39k2HcK8vZu5qrV9SqjuMpTgd7UQ9rgBGcS9cyvHSAisPyepVoSoFVwgJqrC2FQ2RwHHtRvFBLhVHop61pWY",
  "key37": "3iFdkWLiFe5WoWZgd31tFsZNhP4QhbsrYmhMHkbhsP5wANysMxbztyEfu7CMgUwo8e9ykeNXjWJvD2FDMyeZksFM",
  "key38": "4KFEGsexdBCtiZeojS7Ey3KcQ5YsbM6Z9Fx8g4v1Bhj6hFcbPD8hhM2bbxrAuBovXuGzxmN4oDBoWLv92JEtwKtr",
  "key39": "yevE5vBtNQscTAhMQiJ4U47xW5XvjaD39NeJumzjqnMntq9siRjVsJs2uCpn1dR55BHSqcsbUh8nXwxZvnwfpgy",
  "key40": "54GsTWiB9H4sVeDLKyMoeRtYMwbBCQqbCnhQduWPTRPeUXUX8q6quv2UrZ3n6zQujqPwoNXpNS7TQ6YaNayLfD5L",
  "key41": "UV1VwQwQYzZdoAUQmFmT4geXScevn1GWtX9Yc47EYqAXxscJZ9S4F4z6r34ebUaRCNqm11WfPdZeqsqrCLjpqnK",
  "key42": "5Mpz8ayc4iYy8inPNsMZT28UDPgSMKpREL4JdmPVyiHh5cEXZGsq9tUKSdCUkxhPDuyhv9kmZj7rt7eQfqiBMKDd",
  "key43": "5J6q35SAsb3yEiENm5uPbNn1YM1hUeJc9mLbBynUStezRS2wQbUxDvd7aXezeZsq84XcSmPSjM1qg5MN5zPQrXiG",
  "key44": "2bd1UXaEbaTwYfxTXKJCMDcmkJ6Q8m6rumTqotfX68yPpAFzXQLHWPvfTGs6hDotHeqD5rDGjKStzPHAZBMonkmH",
  "key45": "44ijy81wQXkHdSHyWJSJtteTNaFDXpz1qPHJ3WAWmQVnGMDAxnX3BYiJsAa9iCiKQqVk84ys1RXWYPjhUJXXsyQU",
  "key46": "3rDuCxJAx8z3GRoB5UxbsQ3MCoD2syDvkfcSqKrFJCzCHk9DCxWe7o6DJezJKZoWC5wK5bwNWVCnzEp6gfyoMEZr",
  "key47": "3osgcNQNq5n2UZhcjZXfFsxvBxJA6BXSUyiZejXbi461dbHXJsVMuLU29QD7aQH6ZV9G5ZJfT4LYdg8nteiQwL9R",
  "key48": "37Dm1wiXvbVurieDB3trobgTVJAVR6QqFqkNRmi67Ga3VuQP9uFn3ohzRW16JbGvk5MmseXEMUm95y2uB2tD3iPP"
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
