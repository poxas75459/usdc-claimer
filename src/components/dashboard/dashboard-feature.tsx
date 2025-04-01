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
    "5V6eU5p9tpZH8u3vKGwH1gZMrqYkXDhsih6AfncrS3SC1WqUzVP5DVYW2nWUwDu4t9psUsgUDdEYPrXYQAvbvn7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FyKBwnybK3w8HyDweaJEQMyxP7q7imR5TwUc1Bgdc9EgmvukAgbv52pfDsA6Gsd95aZNNg5B5fyBHp4epDMFUq7",
  "key1": "52dKq1iFQ8ebscTyhSouGQi57dcnJYEnEDNrscgeAGooy3JBFxHuP6paH56fC47kt6WiqMARVRiw2FC1HTBgFH4W",
  "key2": "35CWr4tVkqmSWwbEK5zV6cxLnPNJgT3zT1NpUbb5wbWwTChsvKo3WjY5Q8rMfgYixpouaaURYos5mqU9BbW8Yt2B",
  "key3": "5DgDcEz5iZ4fJWpbyizX9WeekSW5EY6Co8e1XBw8mXMPpxCVqYBBeW1JyGsitwQ36aojbr1N4Y9cLGAHWCopEiLe",
  "key4": "53UCnYLYNVoFgr4kciQyE5zEDAHZztph7m6htGYfnVrfXSW7QZK1UzWVVZEcdMNB4cZfg1PbHpKhTk866ZALvyPj",
  "key5": "5f6KoRog8ZQxH1pK78Pfg9WLSjahMhfnrmWJG3CPNCAJ8uoUoPSbGWRe8odkXKTy2sDKZTE1YL98MWfR6UBJH6MQ",
  "key6": "3wxZzdGXUXohEvaf7WYLJVm8GQjVncz66Ch2ckkJZ4f1sfRnS5BTejvNUpHjpo3SPwbtiggREL4CdUDa3atiduZg",
  "key7": "4iH8nWS8dV7KGnPRC4nrJSnqP9VvHTnP37fiTLDmu2nzbP5ofh6D4M51A454jbNFmsnPrY2njXmPq8NkjgWSgHG3",
  "key8": "4vYRnkHHuFSaiFXY4rhsWQUs1zWxyQmyVu1RyAUQhnimA27F1kY6jqh3QzfJrQsg4vX3shCgzyj8QhijvYwfDUW3",
  "key9": "4MNAnM2rwHE9tv8iBqGVGM5vDby49W3uPEBJvyzvkcQ5SGPqexfjYmyUrApxtZURWzW6GmPWqkqaD1LBVKPxq2he",
  "key10": "mfFcmnogn5DzF5VSLjS8UvnKEoJxP1NWK8QCtu3Lvpf6YCxjLVmPXcBqXBt6DLk7hovyUBVayQ7HAZ84oMXvc3c",
  "key11": "2nwxxKBf2EDimraBimkrCdJ498SsC7LRVZh3NqDBqkrSSBTSh4ME5pFmuCZZq7wKZvgCZUfFRvWcf1Hoqxda4Epn",
  "key12": "4ZSgTAtL1rXEN8skqkRj3W3LLMewdoHsEV5MzcxiZ7Ki4VTMHPefxx2iLmfPqg8REXhGwBZaNt7Xf49MkQwcBUvX",
  "key13": "2JCnQxqJcNL25yGHhfrkG8hRwtkesHVJvRLf8Uq3GpkS5rkuoX1wumE2Uxud5fXxst1eRKEZMZmGXx1SN6kWVKRq",
  "key14": "31kbTa9QdkDbjuDk5WqqhmvGWET3J8d8QEvtyv8GCevfx8ERgbvFqVDiUthRnKmzWdLqxxt5XekTw5dFiNZ7yvd4",
  "key15": "o2Gi6WhNCP18sHEB1i56SaACUdRjgiZb63hkN7VEG6ZQLWKVrVtZRhnVFqLvgnQ12RqHKwEK7ik2KUC63XvgSeg",
  "key16": "4dcs7J3sx8FDZmD7pgktd3metHmUeWppikjH9yivo6rrbsqYKQ4328zMt4j2hutEBtSYxUvgnE54Mb3VGsL9Wngy",
  "key17": "2tCEK8jzxB3KLViReC4JpujwDT7TgZypbG9EMW7n9FyQYAV5G5e2sufY44vusBpdLWzQzDvX91TYY8uVX4ZXDfL5",
  "key18": "2E9wynsAKeudnG3GKNFacXRem66336qz9hScnD6SEoWMibqQsBagKcCxzaeoJ4WDDiWhFjmewckyY975eLAd4b9k",
  "key19": "5Z1c5BKhHFqMdhvyQqk84yDHYsxTqBZ9n6hDJ4kkp1qbG82GyRKEAXKCifV2v9eDbfWRaP51JLJ7vsr6EiySYK8a",
  "key20": "joZa5SaumfFGXRxS3yiMbLa1VSoYE5pJudm9KFx8uD3ysX6FBdeqnFv5RrrcQrPFroEEiECWEUeDXqzybpF6ia2",
  "key21": "5KwebE1USLo72ks5121UJvJogBaexZVfArFCXSqoSzcB5QvoLW9BtfsvnxkuiSgHkfRciSD4XpGZA4jaJbg1vdby",
  "key22": "4rMj7R8sni43VnP5TA575VXq4YSLBKQZmKQBP8Yo3DU6bYTJqQP9Z8nPVsxzUHjJ1r6tQ3ewjRoH9v7JjBzVBVK2",
  "key23": "64JJ8gtafuLHcF6qZt56nXdtA5mpuTxhevb3Qx4wyH26jH41pfvRTnAXGzLUVycdKgtA6BJraSuFF1z5gckj9YjR",
  "key24": "4NmZFCFb2c7CDMysxy5EQG1nBVC514Gua6zqaUhHHhme3w6TWYLCXTrVhMUPuMowPg9QUZeUfnK6K8u3ZjhrX4iz",
  "key25": "5iWdM127rSWBNLHF14nov55qQMyr2mNDVN93uiZZgLfbewqWcdWSEQRjvNTZ14QNT6xWekSfCG9B9NsaaWX56LdT",
  "key26": "3pSgUfg4AWhkhPyANAfxZkG69WgMzVQW3xdZycNTTSv9h13tFxejHEkKgqemTJgPjCqeKbeidLh6FG6vSfZQyMcG",
  "key27": "4QKQhrp6eD5kvzvfQmcYawQwTGcFz6jCZm8akLzi9X2Kwm7nxJvKY9HZSzSRNuhEBdpMijjy8KSA7GaTLWAdXkc3",
  "key28": "4rQUE1DqvDHoYs3LNerCt1t27XKY3B3Fzh7KhaGEsrLqAzbBf8sLtW3oc4cxiXYCh8cnP5bhMNZcv8wuS4PsxkvU",
  "key29": "2VkGd1hjPDhLYTq1rG3yv1SVvpk2DLfcTjr1hxUaxEiTrz7DBvypWnNrMigvo51ibzAodCGJQ5LEnBiQv4SZyYTh",
  "key30": "32J58RM6FFYZ9uCrrLPDrH9ffQbtV2yK4ZCyVvZNyaXdfTQEEX29A2GWKk2bAhjrsQjNYFUrEun1bp8c7ifJMpsg",
  "key31": "F8vxQpjXGCqaWwwZQ3xnN2eHf8eHpGHN14AJmnGuyR7YGBc9b3QtHsn2NHrmWBniE1byXzyuHddoyM2cJvxk8HY",
  "key32": "2eLgXn5M7ye3vqyVygTjc8CvBUZyh6t2zf4GTjT6vjbFz8kXrVMbs1p2ZjazSf8EAbdyNSqb6Na43HsF6dN5cj1k",
  "key33": "4rMUrSCGLUJLNb7cpDpLga8Z8WVgSHzJEtnN5T5jfCBdSeaK7jLwN3YE8PgSJAvjbi9iYX9WvQKECJzGr9uuLkai",
  "key34": "4S3SrKkT9iunUc2zYvp6y1vPWvuviefC6hrkyxk4TqdP47owiQ7aWcQs6PTKN63rXjVtTEUUs3btnXLxrXNNCKSD",
  "key35": "3Z68gFkVBBXMeYhNhJJBjwC8XVX8geS4xbwj4VaYyc88UfvYSdGPBfb5nYndhNQVmpCZtRXuHQjSf3NApHwcjXPs",
  "key36": "4VckKXZhdSTtxfC1VYgCq7YXT2HxqVWn6UMyJQBquJaUHcUz5SRLox8xqM77yQQBZ9hTtHtxCFAZNHL3odsv6i6V",
  "key37": "2tjCVTnJe5Nmj5PgL4BJL5jJSmWYhSLp2cAuqnmNfr7ZjaJXHUg1G1NBmWT3WipCPMwdzQ8UBQg1funDvt1WokM7",
  "key38": "486maCzH1ybUakfJUex1T52NDAK6UoocWBY1vGUFNYfEzHMijL6ecfWFzvPPk4CCK6kiyS134KQygQrVQznVcwKZ",
  "key39": "2Vg8236KPhVLk95RpGNeCTqPv5pgGArt5ecNNs6fRj4YKHZNAt6RqZqtYn3vpfqPtbo5Q3sTtB7DjKZek6AZzT6c",
  "key40": "JU369uBESi95ZYNzQ4gUrmMgUAGko6tiZ5ev3gHhyoHcWtfvd3jkFYmqUKLZdeLcae17xuKim3u1jxq5SonyZW2",
  "key41": "4xifmtjVgUMkkmEiM93n75BiYwpBL3i1yGiXP6P9JrM3MsJTMhXNfVRQSNjPoPGyooVG8e1oKxuUr7MoZCMUrNKP",
  "key42": "24grQtmFLrAe6XTVsMV29VcXEmi1qFkijQiFyvoB1gpCmPauijd3virzkiMoNrspiKFraAc9NCU7UXqkDU1qq9Ed",
  "key43": "4q4w88nQNB7C5P6F2MnHTE2GZu6neEuPzx9ec61yP4ymPBKfw68ec5P9CH1aXAC5bH2A6eFVaR8LhFsMNEue9QQs",
  "key44": "2kF1VZDTFEXQCKsPQjzdrD853KtQC3iVHcQgHuyfxHEqRu9uxuLoZbeS3sJstuYjqfm8qo76voAGCq2XjRy3TNGs",
  "key45": "2CXRV4Scpdgjn5gJZaDVMMcsqYrDXBqFhSS77BQGfBxPrRJnXvr52t1Fe3uZoN22BkGzZLvPgAjqgnTeb9xNiK2P",
  "key46": "cqw3sPNL76tcNpzAQBgA6sBjWsy98iYH8fY49gyW4FxoH1cBXZ63qg8K84P2FcKAQKeocmdBtp94i5mPnMMZiqy",
  "key47": "2iFZxypMedonPzqNuAqAYEhu2nmkFZ4nbb89BkR6cuXzFtVvEVA6Do21Nf4pFEz1vZGEHzeuyZ1iFh1miEyS67B8"
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
