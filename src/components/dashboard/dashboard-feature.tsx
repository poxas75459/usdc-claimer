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
    "s2r4oAKJhdNC8G9pFtQkhC6bNsYQSEgfMWAMP8456PvNWyUjEBjSFbhuTxgb2xP1rTmj76pJ9oeiZP4VTNxuuU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gH8dqKqjgDncbyuK4Gcc5rSR3QDC63yQDAUopdv52RicaBf1TwQmHLMmKAV4e7T2npynikBAxXgZouh4EdKaKsq",
  "key1": "4RkRfWcLSQPWZ9SoA5YW8GLGJHz4V2VpfUYJ7K9K6S7PdwFYjtWdRYXbMqcUkzx2eCERdTEz9XAUBRM9JCmfQZHG",
  "key2": "2TRotgg32RrjcxH8UeRFEU1F3BaMYURtkGZZP5vVhzHNLnapjQ9CSgPsTNpuVn8qeiNYXyrb3iJNYLw6ACv5zALN",
  "key3": "2cBXjdtCSs82E5Uvary4dp913ZJC7AJPmg4yLs8T9m5s9WgFUa5Dji8diqiwMof8tXh7bYNk5HmnVDEv2qbuXH2r",
  "key4": "52oh4gDV4W22HJfm3GRh1f6YiuQdDfvLmzfao8eqHN8X53kT9xopC44n9ScvhxY7pLvWd55WuKVTQSXyi8zeuVH1",
  "key5": "5ERxsvzFr1cNjVEpdQbwoYoDyLEiST781HWMpx2r8eC5YKNYeW1MKNmQmZj2ExpHmmGedeud4znEeXTNBKfTXiG5",
  "key6": "4uR77WUu9fXcaEbzUQsRMZGgG8zVGm7p35iBg6xQZaZESExHwkHWtHbW8WnB85PtxbD3JqaehN22GhUA8A46nHjS",
  "key7": "5xEbAhh6QWYCcpVkqUWBYF27aZg71u1P7g8Xxyfn8xe3eiSMzRBubjFHxLmoAJDwmauVY2n6evk9JiTNQUVwGJk",
  "key8": "565VfLdyF3HSKteWHkW2nfqLRokYAhZr1Yy5KKENkaHNyooQPvPsZYabEpudT4vfsQt3N52YhgWNmqRJHFB2oUqD",
  "key9": "4vUeqi8qPvZbYFAKTdvNmBFjzTTs3cCGQt6UY2RRa3WrHptTnwstJMUrkkGpxPzSXD3onxBtgNkkFCVt5Bsdge9B",
  "key10": "2F2Ufvb893Z3LTRCSfL16EBSMpockcivv3Ye8AqvF52UncfMhf32LyvuhWoDTiyXem6NGwC3YCpQM8cT31di97zu",
  "key11": "uPJEpSkKtugVgfHQhAMRHoYC2aMR8ngNarEJz8ZZs9K1tX3zUcN1CLRUBbm1UQMY5JjnVxG2hq7k95nv9vT45ey",
  "key12": "brYuiRRt95EmDtYCHkDQEfBrE9Bx5kJq1UPuYXyL9BrQ7GWknsH3okxK5ZWE1FG5AAyggAunmnZou78bsbtpSU4",
  "key13": "5bGJJXkEcmzbW6zwDMLy8Fhxhfi5Rwm7X9W72FQkgpqB8vb3nk1KtHUWA15SXR8suuuW4PjrCPwjQAwFGnKwfFnY",
  "key14": "4VvVL9SB5fEqRXR32xgZM7C6GNKtT6VfjnxTa6wFhcws1RwyQifeam8zGosgPEanJmwZ7tqbQ7JjfALtxx5Vxy8j",
  "key15": "hvkLMz6yhAHwHKGp7j8qL9V2BLX3yvnpUQxMBZEjyt6eBW1JsKVjFr1fA15LbEpHVidFdVeL8WuJGsgJveaDYYX",
  "key16": "3DJ4zdtXyUm7RQQKrwtCaDsoSszfwFLADye4eYiMTLwQiAHAxkt4Vf5MTxyuaoJpNa7BXxMW5B5fXhC6d4R1Z9w4",
  "key17": "5wca1YWtspberJnD2QNCQsobxaJ2RBxB49mg4nTPmSNYXLPUYC6vbUcwHJ6yhCN8neVMfEXzUMkRqkVQ3A29J6UM",
  "key18": "3jkBdqMn5TyVPnyqv7KKuAJro8kPGdLgE4odKMf4d2R1XYh6rJMgSquJGt8SjkqPzeqxJ2hXFLTzCPEVpbg28Tm6",
  "key19": "5VNjDukwu3CsbvrenKRByEEV6iQHPL9xGJ429jcxZ3BXBqBhJXFfMagnXHsgddZFxNXtV4PnuAwzPQ87mV8YmdhN",
  "key20": "RPD77JUeEb85R6X25KGVtUGFdW8aYu3AiXSSXvuM5JijzU52wKSURerPTRmLYbdsmBzK7XeL7LWchF8PtZL3yhr",
  "key21": "JWice9Xy2yqi6JnUR94V27XcyCe8UMQ2bj3VC6N7DBPqZB8CJFKHKUThYtDo4RpXLeNEJZTi2m8SXXzCWmQWW3g",
  "key22": "2ov1oY9HGFUmqeTz8dY3KY22HbZYwm12aT5TqnZ5kdfy3oN6gXjciptXm3xA77BkjY6CejMNm2BZ59gUx8McePvZ",
  "key23": "BEnTqHp71c7jYN4GiKD9d6CNYguaafu5QdVy78cBFhSWn4NTvAG76Gj39MQv3Hp9GPhyXh7F1UfuN9DpYSTZ1df",
  "key24": "3NNNY43JxcEz9BcsoGeeSQrfG1BGP8anZiEahegFmR8TS9AxQ8DhfNYzfd8QkorUQ91tUg6yVnqTebtnrTdujFpY",
  "key25": "55f1b1W8WHRdDfUZDcn5tm95JU2vkESoQCtmJd8wa6dYb8MWs7LxMR2NYcpEubxXZmNe3Y3xF6S3D15en2emHXkf",
  "key26": "h26rFq9R7KhQjsQvQQMEBja5aBjrHLYUdHEvRzisWBqYgKZhJw4K1Bb3tDjtWbvmmzZwSKWyEuQbpFonvXGh6vf",
  "key27": "5b79nNWXqH79Ba2zYCFEL5quj2kMvghGEwdsuWsS69xbgnmegvkrD7nXyLzPpTeCN7AMG78Eh5gBiQd16FPA2Am8",
  "key28": "39uTyop5KwMAFWFMvVJPA22S2MZbgnyvwZjjN3SgyQ1VAr2Cnxa9WbNRx1NGomZHY99e7X3mVCmr7q3T5JEHurqT",
  "key29": "3KrZfwfxsgc1NiUfbkaHXYW2yN68xW1pXnvQcAx76pMWGi9McPJbsxoGdU5dKe4CYXEq2XgrtW3gqLoLBiZ27vz4",
  "key30": "5MAhFFsfjeKaRX3kRwHmnmUMvkQ9iJWXpgZxvABgj9P6C8RWDs4cAkboejr7Pyhc5mh8TE4Y7NsQHQyGqe1z22gJ",
  "key31": "4RSYKNsRNAipZNgeNPm1FhPbMEE8yUSkLr7iFbsmeux8tyToj61Yu7UegiQAUQrYYTSQEgxPLCnnsD54rAr4YYsU",
  "key32": "3pH8E3smwGNxtiwdsVkfUwpdasJjTy5sfRi2T17vxVa3AXSjyUU3cPf6UgKDJWAwqt4W1V8rCDqVVf3do4sK7PoE",
  "key33": "3L7XiS4CX3iosGZhMEDJdcm3Tdq3hpXDZK8rNQt5KauuYpBy92PpNK7cn2bTvSakCRwUEzDLAhJaQaDVLKVb4EDv",
  "key34": "5NPc5cDPz8Jymy9HZ5Vwms5nmhrD3qkGTv5F4o69Lsp5yYgfdPSfAUUZfLWfGhr1mt1F661JRzUxCQQNT7eZNX5K",
  "key35": "2NePLHe4vh2HfYhj9k4We5exFo8MSqZU62jyLDhsybjXG75UmSnHDTuhmhc4E9Pz9J9sF87SZBEU842H4f2i5pgf",
  "key36": "pHEzwZ56eJUNLVaSJE7J1LtWw12ogPzYCZM7jEcFE3agoPS8pN9WUf7Bccz3eaAcnDYW2s9vXxVRLj51629P24M",
  "key37": "2B4ovKoYJ36myXHYQ1NzrRPmaazS2Ve6fxaHb4vaky73Pg2bR8YrHShPhWv9sthFuy55svk7fTa6DBqtg2zZKbwT",
  "key38": "ShT8eq2dyPDh4AJXmsFsi6XZBwGq1oE35c6npP6vRYSV3UXm8Jexsqrzpu2G3r2XZvdHYq7AxRxHx7mxpa2opYX",
  "key39": "3r9fWB4ybwgPvRJNZwD8e3FR7G3Yw275wst1vdwcR4HxktQwwfDvk6MHL6axLQ1EZvXkHfXmkPBChpPfZb51cwvs",
  "key40": "34vcSd4N7iEZcsXj4tRvDPf9K4zo5VnentRv3PczGrp5JnD9eqfaJ2dwpfsKtcmYSMWzyuVoeTU8NqS1eVcmtS1H",
  "key41": "LRu9Z7W3TGvSpz8Z9bZLpCnKHXVw2vQeeqTrBLQv2XiFLxTnaU38fAoxJaoRKED1FrAghb2oPXgLUr9a5w1VXvN",
  "key42": "4cdqbu8JGnpMMSXanfoHrdEHbcwGgLFdYaVpYbXsXutiPnBzkb1EY3ACsS45yWAXZXps2GTvVAN1Yeb14tqF9dbX",
  "key43": "kjDjrwTFoGLi96uCDJX14XmtPp2ZDDFiWQUsrGunVqHupin3Sp4fNLGGEu8C2Z3M82Dg2Z27fTmNQ3swTSQmTDz"
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
