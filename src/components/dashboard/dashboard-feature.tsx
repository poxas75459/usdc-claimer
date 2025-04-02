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
    "2kXpG1F2LysE3qEoWn9twhhPQB6duQS79sVQFbSv58jzK9XL16xfQa5pRWBYC1q4LPE2KZuDCYsQwAEXAW5Yop1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B8woa2uuSGQpTL14hmyVGkeKn3Pwd6UN8ocZRzEqnMGziCAKAUgKFx3ZRce9fH7FjSHS2C8vu2sKCZfJFrKpjKo",
  "key1": "4rmKJTBNgfNneQm4cFktjAC6F3NE5ZTpQ7rQW2VShAxPcki53GR1UdeZEwptA3XtS8i45pZaeJGPhdLeWg4XSDym",
  "key2": "5thYe8VtUNB3PAiRNAkEaFpiJxqNR9XpXUzw6X6wPcihRiQyNC9KCi33Cvi3TRrCiUeFySwE3nCfqsEs3NddRZeR",
  "key3": "EDxEA8C8J4hgrhLgDA9FWrRr7N9eCBWGnJnKtjEfxjiXVMwsek6QGjftnrMFiHPQ6hT5qT3uYM1CaYBpJa6aQMf",
  "key4": "4gwr9nosac6Q85mfM82z2hzMagdZpP3dH9mnyeo6hFhyvusCk3k7D7WGs4Wb8SqLo4szC1X7enfWg5q36GSG3rQT",
  "key5": "PPyGL3CFaD9MfTQrgwyPmsxQHd5bHqxRyecQxGR7D3L2x8qfDvwvku28uSQnM4K4pcVqgjojUmGA4GbqAryFxE3",
  "key6": "4RHVonsSEnevRJLjoNgEqah55HKuyMhtd6DZLtsgQ1WEmiJ6uHb434cS6UiDRwun4s1A5FRPrGRUmiEnLGUkpoYj",
  "key7": "szXRgbpPF5rcbAhq2RMibd8TuE4uwh41ZSMEQyW48i1ksitCZTvz83tVW4e2jub7o8hvFtnAdq2qzzwcXGVqNc3",
  "key8": "gcTQKMK96cNXctENvfx8buqsRtCLNFy2Dj6h6ZemiThSACR1Hbjs58y5FVsPZ4un1PndqpPtphnSSbXoCT7RyjX",
  "key9": "3NGujLWooyVTCCJkWeGJ7DdaiHBGDUoXQfZiGaBtGnNdNbEo5BzoeNJcvM9N7sJcxn7s7aC6RqAqz2PJN9hgqCsz",
  "key10": "3HcWE1snRFdEc8eQc4WLA81Cms93f4TjVvnHDjrCVK43coPzhZRHwx4cW4MDXizbWpta9XHsmNGBdQpZgRu8c6fo",
  "key11": "4nhL4pKknUZ8J2ZocbDgVq3kmFdR2sTGFhuhY4SCZnpi6rxYGRYPhpHtrXovJsoH7BsxJGFNfkR4YuSuGKoAHVV",
  "key12": "63wwN4B1j3jzrnc65bBDbhACBner94uij9RpgR91gm6gff92tyHKyc5cg9ujRpZpQPVyV7qusvnmvjug1R7A5usf",
  "key13": "TieFSbi6WqJgjNHJHqQEEiNJNqASnRhTGuiWxHNNBPzRdxDVcniK95wcsyUjitvMZ1Zp3zvX1sZyCLPnF634Uuu",
  "key14": "YSsRSuZ495cJjNz8pCpeMoUv3A36dgCHQ5DLaaZF86Ypi8hzvq7EefTKWKgBNCbFUi4iSXwN3ifzU2SRMmij6rE",
  "key15": "3E79kabEbZVLiQkF5rzLDGqAhPSEb8whnmNFEtrHiTgYubHw5nwYL4jPB2NBDd6vrEWCQbBuBJEKU7zaiECoCFW1",
  "key16": "32cg8pwsNzUCyn9Dka2PrsHtMc7VDdvQybh1TCticdx9QeR3ThY57GarM1AGgwbXu9rfhJxnKUNJ9BPWYG2w3NP9",
  "key17": "3xJ9eb8qoUMu5wU1KH1P4BVVFEorGyt9w5p3tKtwmGUV5UMmp32c454KNvNsVzxAXSrVXxtx1faonCtetwu4mq8q",
  "key18": "3YjXwmzFysCDzx1MfGSuYEaEXMRkPoom8cBBQzhkQ5GMjJY1HdiZSdCdRnG4uEx7956SbzJ988BNPshZJUBa3yJT",
  "key19": "2UW4Z88zdcmNnHDkNWmsUz6fZ2MLWVPoWVEHYBUi3VtjTrxAQz4pbLgaFWRVnFQ7w9X91WaP3VQAMQu6Lkp3jk4V",
  "key20": "33ofpsfQm9YKFiaVgE17pj8kF8F64uzNgRLPRSBXBdQKznp15Ax8hpLob8Pp9TZVcw6XwrACRMFspuKkfk53YfAD",
  "key21": "B9kVDt3yEgjrcoaZhUzUxwQLM6B5T1CwixRnCTqKwAPKZcmAaCFkMWHhymgirMvuFtmDTv1vUVFBwUb4buGXzuu",
  "key22": "4sVDpc7gSTBUgF5FhqatuLoveFzG4HwX2y9cDhoudWFVdbZ1GUVg6276PUweJRAQFwj7VozF9XwqzQQkVApfFMnn",
  "key23": "3QkfuSAJgrcBm9PK4RAwBZoqv4UMYRN7ptG2CExdTbjvQNn1PYriXMohPazWgdpbL1VMQtFzsfmo8DT4U4rAYeBd",
  "key24": "KyzJM9NTuRVpQVDZe6ugkidFegcrTd2LUshsTSjVP3LxvbzurrV4MKZqRoFCVyhDaPMBzPjoHU8GdbFsx8MFnHH",
  "key25": "3R9zas3KNDygSCmhF4vBdgK6LkNTdFD856zPKV3QenaksPsHZV6NA2A825UmpgzvBdwchTpv4faWL2PB7U3ZPQZx",
  "key26": "pMbnR153dEExGyBwDkxtPkJ5WAWHjhe4GWRuzkaDJBDUcG5NdhifwA8JDV2JD8gMcRY633oTgwtpiAQ6GujrCYh",
  "key27": "5a9aiwRNSCE7nsAor15xuiLriVErq5owpg4QQ5jVqoUV1smCEsVj1qFYymLFiaU9b2t7j6SerSkXqh2G3jBRGCRy",
  "key28": "5mQxNen9fmF73M4kxDU2ihud9LukW3DRqne6kyBFqjVqV1t3sDaah8S68dBLXxm6BKQEYbG4dLvMQNeDnDasJZCH",
  "key29": "36yB1xCLa96f1NpWG1N1PHhbSy5VHTbPjrWdYvXwDKodovgg2jBttUTW5bjGJCFsZ95WmL1CwXnwStdYQEZo1Lp3",
  "key30": "4pJ8k8q4MXYANmJgVG9n8sDwRLVVAmSAkWHKKJydsC8bKtag7skjdnjLteGvbcMh1RgEZqa4s6ccRH1E2z3V8LdV",
  "key31": "2K8zC6Lm4xmdsTdzU5U2fU59t3dYGgKSgvdCwV5XWnFjAH9oaDQjhBvpyy4MZMZxEXmQjAJfLjU7TVBs6GTGq5mh",
  "key32": "5iHdgfpUmh9HQjDtjR49vvCZKR6rYCkNcYnii1akdyNv5mn6Y91nVi7haxjFfyvgVMuEMtELpAadf8edDhXSCx9Y",
  "key33": "4RzhQsJ3fk3kfAspENtWz1cbby3R8cFiq9PRruPs1pmeRZoiad36JBkp5kxzAXdUZvFY566gqvbwnXEaZCV6Mi79",
  "key34": "2kSMbE8w86JR5v66249qwDB5WbsuQQtqR7nESUSoz5EfJx2YBPhnasBYvNqZLRMKUsA15bJwVYKVwVf7bvXdrK3",
  "key35": "63Jj82RJgWpeGEqQZCCy2QUHoLCDgey4VN7gkvWtwmQjLjVWGQe4L53jAyBisAGYjBzJ7zSz3pnZXPYvbyH84BYk",
  "key36": "jZjgEnpevrAiLGDwawenwEsGnj2ywER9MvUVs9F96chCW5HGVqnpCKu5877rhj319h3aMUoZBN2gqLq35ScqGcs",
  "key37": "2qVJgmpJMNzZhRmJ4qmBtDemL4KdbRxVtCYtkwSkL44CxBhevGU6YXuL8uDLESXBegZwQZadtSqZEWQwfvgeW5hv",
  "key38": "2Qx7wALWraN1UccRGjFWVQXP58jNFKAvv9gMh8vZcUfeEkwDshgYyP7ag2nHBP6HQAV6oQ6DSvMinJjL3NWUyPgf",
  "key39": "33TJa45qnND8voQ2HbbCxc1ikYhTgNkPVLQBKpKaR4v64C1pbJf82sYXfypTnG7d4sXp9Gytq44tfDKE6W5ZnoeC",
  "key40": "2MtwYJmt79GSingiBji2tsFcejpPUV4Qe1emhQ8PS2FYaMuMtUZQuVJeoziavmNTVPRSBrZDTmvsb8m7Hc6i9qqf",
  "key41": "4TU2SApPDWWMwrxo6S1aXLqNd1aG5kABcasd9fQxwerMS3ZLjt4zS2jtEqfSBoa6yA71DyWmh8yaSd6SyV4Mq9bB",
  "key42": "39wtSS7yxFznDQikm8wnSEDrZu7hzZ7TrahxhqhKGYSnUC727H8jJ3WiGzqiec3Dhcds8NFZZDytqN9NCAYGrNhn",
  "key43": "3auWCAmgn1ZTQmFW62v5GrzTpMQ238j3ZwkzoL82i2zyUnuGawEe8MYvdh5TXYYidmso1Uu59zkx3yWKWNqGK8Es",
  "key44": "4MwLDanZzVzoayFyRfLck9CnMPDoSxY3ETD2KgroVNuRKk8QhB3Gzq4yXvdW4VFEeffV2mW5GRRLFnAKgtAXkANG"
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
