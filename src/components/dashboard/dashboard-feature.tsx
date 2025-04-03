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
    "4Fbs31zd6oc997xGJ9EtJYpyY1N86zcgKJBJWGY1Ezv9YX54Mu2CZMFqaeBiv89xwazLJap74zxF42BsTJ8YdKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37oSqEcP6WbEaXKw9y21WsPWZZ5nBLNgwbYBgtW8xPkmLhJxQqXnfrSuoAQNSML4awRcSd3Anwvt2goa5qbdotBk",
  "key1": "2ZpPXx6iGZA1wiiCLjaazoqah7kcdbRyC6zc4LK3HJvHSCAsEXMyCRgpki2kvKcvrnRZEGQocKiHCGCPwSLDaJ7L",
  "key2": "GqiduqG3PauS4VC8dUNZUa3SeYzucSUiB5NZUfiK42htgEARqHPTGrYNazmr4UuXKvzW9VKWBQVLDTzwzjbAZrQ",
  "key3": "2oZbCAysBijgnx2CRPqzV6w3xqonSXUToRPX9dRYFMF8zktqV4mpYN8Bk4miBY544VuKJj9YvNxwZdNhGDQ9LCCP",
  "key4": "5bAydtjbjJqgnfh6BcFgBJWA54iAurUAMZH7ob9eqtbuiLiCWkuHVQtrr7seKmaiGHPmM42tebqaPEjDta7cxqx4",
  "key5": "2tvanWe85xCSdUx1D46z2T57SA9qo54rRZExZFEN4vbZBD9F24gRH8yhV9QyhPgqMsgaPgjwsx7cUhK7jfvwBmeU",
  "key6": "38dtCq5mSr6r8paohnVNk3ZUuW134aod7Bn5ZHqZfqqrdjV9Ak5GUtEFoDwzVejvNGjHBZzPTF9bp7pB7XuQZRXR",
  "key7": "5mzbgh2t8Taa3UebMWS8RTyNrxvXLxPpkJ6h274FPrHPmWSoM6i8WM7qpfUBQupno9ozndWnH3arTuRUvDKsaK92",
  "key8": "4bKMAfHdkTALwA5FTEhTSKunUZq8jyhpNcqSM4eqjEoEwAXap3P9DeLCRMbjPwddKc2wWjYh78Yk9gXUrSvw4knT",
  "key9": "2yPVQgkA7HE5wfhQYszoouWPwvFb3dhM3Q95VRGkTL2cz4Vo4YwWzAKAguc8nkG3E5pkCuw8Sg9wYmESJwSdB4nv",
  "key10": "5aZ37Sh9S4gdg5J7FqziVJdFyyVL3ckqWi5Q5rwU4TJKECHSnexCkonifkGJFfo6UCAKbw2tJEJtVwQGPQ4k3bPi",
  "key11": "62wZaA2tK3uGyoMhh27ETT39GV2DzfHpgudpH33bgbMM6krV7Sz8bKjqnigMbXcz5tPhKTLg9LZhfDSG9ngqZ2ei",
  "key12": "1zXrYVPGQdrzzMd798zZmK4sVnnYXyGBcpUwDAmAmPMQVnTky5Fu7yxWiaoLtx6dWcB4gJqmea3uYH4f5Xxv5wq",
  "key13": "39LpH7DMh3kLS7C8Za3pdaMmKup8YWV6F3bqnVMCEPTp3rc4VNUjz4GqqKK18D3SrmzN99DEgz1TFCbXeC8EABK1",
  "key14": "3bQsZ7rbDWPgtLACcmfiX7ukFtJ6sRmWSDTHPM6qFC7cxzJ3RAHFDdcUp3wQq5WEUKk1vJ9wcUuDLaxHCBzoiVCL",
  "key15": "5EKsN8AMHTKxPeujwPxrVrAQs5HU3Aomrzg9aso9ZLv9mjrLpbYsH6miUwpGThXhLJtJeQoZovYJbMQiRtsU2WbL",
  "key16": "67P4g1NPRoxAkTc78omwgbYAQAbohhYNAP7LE1iF8C9H8SAfqujywN3RkjYdfkeVi3aVqLVxTrGqmJJ8wvvtYp28",
  "key17": "5cKMLpQ9aRvXA7vRstiV1J99gvkrL5ZZy9ZbC62D3m6hp6sQpUEsyk79B5W7uVdn3RVom92bPcuxbCcEFzMTHjwC",
  "key18": "4NcPaHyu6gbC9MbtwyjGdKCqGLtzpdgAJGTQGtLAERtaWFZR99uM6h7CmStFukp7heMFBjjWodVZQ4SWMBZfKUjg",
  "key19": "3SKdqwxu19eKYN8HPjMoi1F4mCmqFbhrUKQcFxkhJR79W89oMYK7DKRLxxaDFdvUXyhWXXziGVEdhTcu1xsPYuVw",
  "key20": "22bjzby2KAtnHqzv7KB4GBu4SWco1eVeLUpsZYCzKzbDweYDZEKzcAMQkYXYaFwmZKBFheUANAi3fj1aJdKMuKi4",
  "key21": "5tdGye7hC8APKdQfDc84KrHqkBu3MsY2k6ndFZKBsE8FSwie4FvodtBkq7Hd2M5EqDoghpU6TVa1cuLcQc289mAb",
  "key22": "3jdLhj3HES5jaZrbLn8ZtJFoK7pCkzPGDSS2S3on829HWt2Rj3GcfgThbog9Z7w8Juf9zaMFJJpZFtr4FKSG5HGT",
  "key23": "4NVpjgd2ARuU7acD712LToGfUtd6qhfXkEcEqHx4RuUmrm6RV63GSZ1JUZA3zUQHZenXDn1V8uYjLmz2TW2sm8Tc",
  "key24": "29w1iaph7j6wTNjmVR6ZVQ2RmcRhFpcUkfGvuFnSMK47rN9TAurmKEcaExAv2YW4F7ihS2EZkPA97mSoJAG6p8K9",
  "key25": "tqjih9B2tSaA2YR8y5vM5GKDJqJR5wxamRfwt4LKD58DevCPJBPxftYQtvSFMY7yVyAu5AWU6Q6uax2JSzAmfcT",
  "key26": "4CceNMVyFfL9md472EMNxSx2haprPy9hv9W3eKqWJT5LQxBnZjKcCHjvMaiUNWG2mCLVoR9a1jhtnKBRLaHFsmk1",
  "key27": "3hHVYjxMSYT296e3AAstm1FEvp5dfikmwteqY1nwSEcYmTqE7RRNMQdAC3FK7w9qm1w6gaeZVPYsfsyWjtE3EUuT",
  "key28": "VSjyjJt5pPax5s6c6xQ9RDYhF2my7kKd4h4pY6thoewgiDU3ipxpuGCktHq9QWcc8JBLK74QdgwEtygRoUaDgpy",
  "key29": "KFxte7EcTjuALUyJHk1t5qTsbXLSMBncdzBgUQTJr7hGNCNHridHiWGmepzwkpSQ4kstQkmHqjDyt9HMJZ4tkbr",
  "key30": "36se8AeH2tHTCdVVpLHDcGjuDUvDN94KaYsWw2QMQfz3UtKo3WMYHmmYQeyTFhjH6bmWPah8SpHk7aW4jHDUpLEH",
  "key31": "5qTHaER8v5LjuuFiKGQQRLYmvsormjAP1LY3Xmg5ZSceYJ4Pyz6hYdkc7SLZ7eTa8ezLUus5d3cphwVFp6A4vk1A",
  "key32": "2q2ZLf5yveTNfszF5PKo9hycqRbbHagnnc4hM1wYBKRbzhLANDiFVHwBZw8bnYao4UoYZHm2DhQmXHJsNMEnGLQC",
  "key33": "5WoacC3rBsZ7SwBfmrYCV9wSnFziVc88nVrUcuixy3xM3B8EsdcUZvCF6EUojqFCFZrqRuBaWSTM61MChufRtkkb",
  "key34": "cBVcYf6wTPxS7ZqWtq12YyXVj58H35aYBKN8MMHYwsWJmi4PLD3dwpWMDd7t8ub6EsDXrFyK4idhms9MPnsxj1A",
  "key35": "YPdTysX1c4bC7pGJ3p2cSbtBgoLav5RsbDqweucrBut1oQAUbWnrrmLRdqcctayAJWnD4hSm72174oaiJ8gPfoT",
  "key36": "3L5Z5n64AP4NrUfqoehok619ZoaMMBwAxkdEfDBptr9SdeC73QFv4qGzXVikWFFvuR5wZXJ61yMYKzRZM2ZBY5wV",
  "key37": "4jyxnGiQ9jVg3YvsfGKpX6uRqaKpMhBJxKxy6zeYnXDZ5jTmvkLBXTRmdgeoLGNBSVGTvimquRRpvZ5D6HsXK5Rb",
  "key38": "61rGCoU6o2FNp7eo4FZmfpqMgqAkgGDFDzfjt4UhaQrxbmW5YhpTkVC8z1Dy4fxpAj3qewRfSXS8r85jFbXQR9vs",
  "key39": "vEqd1zcPLRsSoFAFDQxZVNrL8PXMCtT9JbBgNTNvQYDrMEY1G6eio4jLdY7YsaTtCaUDVt9c4o7gJvic34hVNVt"
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
