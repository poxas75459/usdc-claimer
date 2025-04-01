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
    "fsQLUNj7qiivx2BP9Pj1dSWtn4uxJ6vGYbAL2DLoBCx7i8CosiEZ7n2dgoifRTvtm4YbTAtdgC12AYncUJfCdcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56t7QzgGmBbYviof7CAPokEvXx8692RkFJx29YShDxUdvcKJoQhKVShCGJre4cPdkbRKTNqFZJx3hyFQNADpxVLP",
  "key1": "47SKbEru9RpyEP2TFtNs1qkNVsot2KT3Z6rU8LSE2KwyfCGsaQR7bmNPWSGBFvkTaAyrCsBwWKA6k5Gv8S1yS5sN",
  "key2": "4fE4Yo3Kn6zUPAnTABEcFEZ4TKAMnXKZXdgEWu1GFUFG6uv1tg2RZTRyg1dJnAWgC3YC9eQMa7ayv3iHTfVQMfuM",
  "key3": "3fanye8N1mdc9CDmCRZpi2f1VmmkEQ4wg3U5tfGWQAj19K4yqfDDK9f18MTLtq5fKxjYg1JFMaTFDRQKsq9ZE4Qo",
  "key4": "4KmjrJgXgwaLpydXxssSmWuUUg7SJLbXcKu9p9nyghCxc3QhoT8W276tACS2XKQsJQeTrE8S12xmeYMd2c9i74ig",
  "key5": "3cbqziTD8SfGvXLUiPKburbQzk66kUwp1eGrTzmyniUouifmYuY8Q1Tns9odL8kf1td1D2sVhBEamkYaQTFdU82R",
  "key6": "48tJ2mZjrNxZAzuoKDx7E869Ab8AXk6EvjXSdGbNSsv2bB3MYoFt39PcHkepC1TNLgaoFz9T2RFcLD4NAWkmK827",
  "key7": "2Lyh9hx66ebfQyc3LhYMjpymVtkpLGbofES3hHpSb1jn2pWtmoouov3iiXMxCUPJS5eUp7t7qA7uwYfXbrGEYfeq",
  "key8": "5SnsVHNHroWHuhpkTbWZUxwvdZFnyzTNnRauVr1MBay1cBgqHe2xGUpqLAWGBnj65v5imdjYxZAofBAgnrm352fC",
  "key9": "bxYDpsNKfnbgwEc3GodARgRmTkwodpPWUoz6BrCBbZFuoBLG4bVRMfugP6ktriJbc6vwvMhNecXxksjrdCyye4D",
  "key10": "3gUPwLRtGYBfpMSG4HFKwbpmsqMJiQy83p9hARwmKznr7Nzn8VcP9QkVhvgqBP6dZFCcWPbkyUvP44npiTK3WNnt",
  "key11": "4ceGw7iW8WkUQBsQKtJkeHX83L2KsG4Ee2gyeSmnaP1EWFULcVWeJuBYLNgfvaw9sVSnpU2RrvZeBHGJ56ecBTMw",
  "key12": "5ScnrnXxJQLFKYa4Ua5vqxqFeBehZhQaege7JmBq519HunRXPKYm2Rdkz1BRtPnm2DAqdTR2t47F3TirgYXNRBzj",
  "key13": "2HptFvxh4jGz2gWs34EBEheekY9AQWq2r8vQJEfCFcE8aVqE2Q6pad7Kyn12F1aSCJs4Uf4HZseg8CWPQ8z5vNnw",
  "key14": "3jvqXBAJykCQMyGh7WdD9jMYhFz8RPET3J2kJPBM563Fh7266TksyLPmEbKmMRjVpCPNxTxsxVRiHyj42vJMEHWN",
  "key15": "4rp3ZF3gkKBwu2XPYRqZVMEKXe6LTzegCb65LmDPYcFE5Cf6ipD61hJCsGd3bzbTfzSxY3MwVjHFQZMtK8zuBcuy",
  "key16": "Pdiffqv7PN6LTp2Zdchm1y679nBFEKdak8yRM3rG7v6eq8hcYvrzPzGz7Ypqoote3iVCgdREUK4E1qXFwPCyQjd",
  "key17": "T9UraBF1YuBRYu7UQQSsBkp8YxkZuJ3dU2PR1DDTYSuaBB8ey1GTds9gd2S43LoA4dXEytbbTf49yaPKXfuaMES",
  "key18": "4gPpKGBViW8DZbhSqMo6aTJxnUAemzgUa9e76PwqZqacDbtHeTdf3gjTBwFKkL87gqrZTcjSBa84wsuMCMLVvG1R",
  "key19": "4SegnVuew85bYSH66YRUgZtPnyFtgwoSpwCMPBaTWkvL7FTUAhJUJjnRXPASrUcv8HjvGa3BEN74nj7E88HjJ2Uo",
  "key20": "ocDfqFodp4WFfjdGumKkUmP79GcjWKGoFJaW5NVDbH4ZF7xXBHuLRHkTCm6HkKhgH52LytpXBfcuehCy8WGTY15",
  "key21": "gz4yBvRVM1rgacHyW65FXtUYpx1jQ15wyGe2EUYfF2TPiGajeGJz4atrFGKMVMbhFQiGiCPcwv6rJm74nHzYUyb",
  "key22": "4meuCFmjyav3q6WP3L4hFHbSQaGtxEcWPU4T63EeMN45rVXJyik5UX3uSJKtTY2JZN9BLBWH4zyBxnaLK7CMUz4E",
  "key23": "4jxZ6j6dsiZjrp3wuvz37n4C9FWDejrMs4KUMoRbWDGZqRAcBmLPoyLabPDBLGCY42a2oe2W8gSDb5MNGrEPPCbt",
  "key24": "bvzu4jYKQRuugSMABF4EF7jq4zu4o229aLEz5EvXwbmEy3TE61eRVVewhfsjTURx8E47ivYYPHx9WZXouuWdybU",
  "key25": "3TTFyxBAhUeHd9CxF2rmw1xsDDDuvPEWw3qds83Fi6SBu3K8tzfb7guoZ5vvJ7jYiW8jF446wefU7PHVc1SBPd9C",
  "key26": "3YF5VGK4h6icKkJq9wscGpxWVPbs3cyNG1XkrmyBD7yCvW5TVqGb6uSvA1EQcUFLji9EQiGd3oxequwg7XWxCt2K",
  "key27": "2L58JgGZvro3bLqwxxWFrYkYPzUVT6dtSGRdeTUWaXU5hYp1RWxU821fQG2V9m4yRvyuozrZFiaMpSM1eVjSLmjk",
  "key28": "2P1VTREVdqcJCiDFwzEarXzJoiBXULYXnSfyNAmCx3MvZfkKxfikkdsAh3vmPRhhrJfE2MEKQeAgvgCCAbyhuygt",
  "key29": "5dWDeve7pfem2Lkaxbq9iwYfz7bwYKoWcSatmzK15Ac9idpqo1VmeVXfKsujPmzPssTga2R6NCMabiEbhdDdU2yh",
  "key30": "2ozr9HFRd7182vubkSe88QZX4gG2C9p7cag1RE1Z7P5kmPKAw6T3doPbth1wWDQvkRprDSFnJFH5XSaDBi9xyXA5",
  "key31": "3SYBeYrixGXBXdoRtD8tCmmsqjcoFfHyiXg3EqQqtMgpaT69N8gEDn3z7Soc9L6UEJFN1NpcB2GXYKhg2F45aVLC",
  "key32": "VRaLhkgC7sFcQDNrN1mtmxAaySaKjARwVkr6RBh4xmVMdC2zinMDGyWbpdmc2cJq85WnXrFVb7Yn9mKcunnmGFU",
  "key33": "57vLvBs1nMen1Yeiu8RD3BVFmBMjsSxjrkX9czuyyxmgvL8GRwZiKDo4bupu57tVM6vxosMBogadbsoBn6Q453vM",
  "key34": "gad846KjWdLpXr9smj3CcZVWb6Eqp8C6zXpBbvRoVkhuYTc2hmM796mdme9oaH8sUgdRZtm8Cz8KZrAXhM4f6Qp",
  "key35": "5eVyamx63GRHZZVi9wA9U9McUjUYey4Y1iEF8gWnyutmJxPzdpwMUocpJLGhgL9R84pctpRPrkRkcrEeyhg3Qd18",
  "key36": "4wD3ymrUHMDu2fGHZZvDc1vqzW4zGjzBNsT9E9brrnrujcp6PsHpDy6RSqgX5Hp3diyCzixHG8ntg5gXU53YV5i3",
  "key37": "3GCrhxiWewURiaKfnQ6eAh4GMpmtXARmiDxiUSYgNLEQuVXN8ZUmhhM4qbaWNtYFVHifwabPKda7Z6YdjkizgJkN",
  "key38": "4GjaZR4UgXP5EktryL7SjWjxLpyj6Lf9N2rhzo1G56a1XcgydUhFgfcLqYNSBemsM82ZLAbz3X1FoStmF6ta3tK",
  "key39": "3hVN5V68qhC4EvQLRLuAiaVH4qKXDkaw4ZVsY2MdCk6FboHGSo75JeZvKycmviJ1kDRmdAQ9UkZZXsRD4rsmmBAR",
  "key40": "4cydXPbL3jRWpaXfP1iEvZEotF1ktwcUvSt8Kc5nn8YjK81VqKHUMfkZSYbU4yBnkDVVJEywSRcc1UyxYDCaskHc",
  "key41": "cruSDjZ2ddhwpeMWcfE61V7qv6TPwGPhURpTGUsNQY1eteSrBacYhrPiacKzQUFgwjzTjsZcfE65jAqnrT5TU8V",
  "key42": "3uHG9jdR2RzbuBQ2gkxirKgkS5tRSVjog7YwmQGkfwAERm3qK9fZ19uvqY1YWcHSuE5VwNZV5odvP2hpR4VDVRvL",
  "key43": "24HozajUf2TVxysH8UVReVkrPKSJ7FpBiWEmkU2EgB4bow79f26Rp1fKeb3DnWtJTJcRFkmbXSNag8QF2toEh7nx",
  "key44": "4neeithCPRBjU4BXp3CtDTDVb8z2y1U3CnR4n45ucDasSQXvLJMEmt8mE21QcLHEiRm2Y2KPhM125UqBJy1WUnLe",
  "key45": "4EttewWCHirL5qtY5Q1dEuirvqnbycKkgEk8dUsFXouxxMv2q6Sqg6y3Zmqr8TmJLhkZESHa1Lk41CqRjan3yHam",
  "key46": "3BW3iTYR7mYVcktsus3J4mA9emSMwebLuzSR3k36qTba3zeuWNUFBZJRmuEZmh9duwF9bP7JVvqRrQTU3g1o5YUe",
  "key47": "3tKWvkDswGZDt5qe2SdP1oS2ut28WAyENgX3jDksSx8XGrh9dzgqjQuofFbeedi9WZYm6QKoZfTeXx3jitr1jbp1"
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
