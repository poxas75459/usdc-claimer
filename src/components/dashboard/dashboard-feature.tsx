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
    "5nH3MAwW9eirJo5uaProG7EZ3ipCyXLYEdfsrK2eEvX8HVmvagfykPBrktCFaa9EwCf23p2prHiyu23rsxW6Q2Ye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFbgmD6kSEbmMGcNK3b24GjTSaCLmqReNSViAB5XU1x74MaSKFJYU5yKbxLYWguq6MvhiZ1J5GWfRChupoDeVdf",
  "key1": "3sYaxUNQ696brocVsWuUBtLi8d6UndR8QhYCgLMR9nzWFRzsuMihjgVVyGByXMzxSf5BmLFKw179HGccAdeAV7Ly",
  "key2": "cjBZoQvbK8ktaDqVZyk6mapphMQ69KVoafcJwmr7WtvCp5XamaJGmcxY1eVCmHrpYVRkEFm31D2aaXxAuwhaBbF",
  "key3": "5eiXb7GBF837Hrwx8CwbxJfTgsdnLcUUeZR263HCMUYaLpw5db5zJXk2EQEVZngRT2t5VbwXwzupKrX6ytNyePST",
  "key4": "Wh96ssNmXjbp3VMgZzhqcoLowruBRqwhDPUv5greQRmhTS3jnwLMiT4SPxK9eHqdkg886WJEdwAmi8X6Cr2Ngz6",
  "key5": "49oUTsCrGbKuv3mg2oizegTycwTKmKexYjWbw9LBvctoBPrsroz5kSf77iWWfMkWrkgaCuJqvag6SiqNRFJcQEv4",
  "key6": "3Aup1TGJwE7bfYRdBNzdcDaXoDhRT1aWfeJpLoHjz6WceC5Siz9txorWxsqv5cmQdRcZVPCNFzZXb4QHqERDw4Sb",
  "key7": "5VRnA2du6kGQULNaGfoQNL55hb2PoWrfYNWXSAjvQwP5kkP5RBWDaYRC5XoejPw8uGV8KbiPQ2F4JBKCc6FoJWFh",
  "key8": "54DQpVBi7jHCQr3Dhf4JrXcJ29E6a7SgUBU6NuqfKMTeUh7TcbJHTi739raCwMFk6nYTxz5q4a94NRqxDDPS2CDk",
  "key9": "57zq372nHbPimihy2WhECZ9AUqczEdhCvqxafwjX1jKTRW1c3zAj1D6A564Yr9zy9mVeuvbWmFaqmSsFESrT34SP",
  "key10": "3vzoAimXbuHbenfiWPrxtstQGcb8BeqeCZecS21BRR3XN967YG47ZycHs6ZWCDU6SAw7WXQJFYDLeeZHTXMY5dvs",
  "key11": "3sJrjbHJ2CDse9V51DYC3jKCddS5wj5xjdmNMNNHS17TgbN161hHRiyQgieapxJ7jJdGEnRHrRN2FBhTdW4tabLt",
  "key12": "5jAcRy4DxjThpuhTjswieD3hrsFMk7CQfD75ZPeczaPF7MEFPLEZr65t7mKrgjZpraw83u4Rovsx6E6qUDszUAfC",
  "key13": "jYBTbLt5wFEdPGZGePM9KsB5s4ryZRnyMUMuFAjDMhd7Uqgv149f6qHrZmU9vCqaWxetAnx6pG2AyQLc5wbRxTs",
  "key14": "242BgF3gbK12eU9uKdXMQU2qtmPgQuLAVUVKDNpsSvKSdddFanFvgKeoYiM8JyYSkRzdAhWAgdZidRCwgB5Vk61t",
  "key15": "3DHuj9r6t4h53PybeWDK4VB8dNZR47A2ody6tZ79tooMkpGWyFsL1Vi9NUwFtmvLy48GpVK9F6T8YfpK4zxjoCzP",
  "key16": "5pi4G2dgdk2xn58x9KUKi5WSPy7x9WPdCfHViTwLiC8BDbCnNudEXR3j3ibjscVBG6Nxsygnan2ALUKBK25bWSe3",
  "key17": "4AUamtBBfLQLu2FPJKMLLZtQC24ikPDRYgLWANzBSbXXegyMDCkmUsm43tcgDREbX79vztVhM2DtCK9QnCczSiZh",
  "key18": "2FsofYcGbbe1hd8KnPZRymAxgrcqaXzSJ6gbt2zpG5v8H1divnpmo5aXdFgFp1nR7HU4ey9XkWx5SuSuJRi9Dsq",
  "key19": "5Xo4Zp2ehNqjhh9FKbwQyrQKQNHTHRTB4uNu7dmJeWDcPRkdFFZSjey2TZ4SyMTwstQrj5aAUAfNnuXvEtezvTfD",
  "key20": "sbVaKh7vkUZiDzpaftbRmrYGu4AcYgujvf6WFb3hcoNYWBnr8DvMy1b17sniP3yy9rvnNgGB74CJn7FcbtqeCmk",
  "key21": "3mMQLPGytVhor3G2fKD6gQP9NoJWZT6gLhnDRLo9NydUgrCDh25o7FwdaeBzLj5UAP4ASgJikJfVUCzRDDZHV6AR",
  "key22": "3i1g76RXSFRX4uw4mur1z9fG2v7vHeDWuWbqhGzfrMRh7EQcfY7GT7TLpCZip4iEHw4y42JHiof5JjhJyUVysrx8",
  "key23": "5B4zaqJ5gd6EMDEbMqbyPSDZQRxiGpvKbnSQxMYf5yDQFUpxkCGeDtGHd2HitmzhbNVWDcemudNGXLXsLMcdRhRc",
  "key24": "3F22ux3an5mGmLfUUA3BbP2aJZrYejNfTSmqZZ98HuHAnMfACEhC4nLvcCe9Ec26DH5NFnxeJ3L6D87Xe1eFkzUL",
  "key25": "DeyAum1ZdN7HHAhvmWYgzPJarg6uNHJqSb4SaHfswmztUvVJjPoukLNDFSKqSzrRMsMATCyyuzpDu2TPiDXAX3V",
  "key26": "56CR8ZBLVJHNpcW8vPzALHDuzGFazLcH3wn3xfmYTz9Z38WAAptQnv9ShZKwmsSArGELdkv2cfDy8tc2D2Z9CJGo",
  "key27": "2fPPhveYkSwAgUaLy9zensnJ2wNdBQwqQPaDVxm33kr6GaWBcGQ4CALDcCXiEJzTekShPYWTNLtm1uVVQycQbGu3",
  "key28": "2Nbzvyn5fDpZc3n3rYQZodzvsmwsGFAZeLxcKPD3qJa9Z9sohCfZjGzJfTs3coCxQK2k5J7eoozQeKbqSUBtUXBh",
  "key29": "23wXXyxTVBnaKgxyoQyEeUgjG2NgXi3rRN9Cnh2Zoi1qZKugUg4dsMQdApk9op4u9AiGcad5bGV2W8acmzxBK29T",
  "key30": "2JmaM6aYxrdohnnko28XZoiyGCDyyCUt3yVWNBaaxgpmAybyRDeaJDdkxmbr9H3Xq54aJuLNu82v9uNCJCrWVJ3k",
  "key31": "4iRasWLa8eM8CeyqM3HHvog8ETDc2rwKzcT6iUXKh2Y8Rhashsvi3JkKcWLZW6hx7rLQV5aQyCYJTyfCorMAbwHY",
  "key32": "2UPm9BgNt1RgzeaeBGt9yDowgcjw81sAoa2wPQcxPfiHjyh5rqStxAJcVCipSiWDgM3dG31AoGzZmMArZEcR9PeQ",
  "key33": "231iShoSCGhu9BggD9VLD4BCPLaqBawZeocw1tU9KaFvy2pvPALMTnwGszATjy3e8VFH2L71EfYsdDGbx2n526mx",
  "key34": "5tyNows6Z5NmfNVfJ4n9KPEC6BuxZGCXm3SMLBak9xvHVgSgW3LMyqAx72vP63gndSqAPxu2fGpsusW6z3agE77P",
  "key35": "5BLdQRVpRsCSS7XoMkLbYsA8g9RJvh9mqL1YtnEdRxs2suHbdFNNktgkQwqvLVRVtapuA7dgoTcp6y7GKSV6fEv2",
  "key36": "3qY6BsC44TdMD6xytiBhQLknbSzE1QehSCWVVtyioCGv3daDjULjBz35ycRdkYV3XwEYrZiB4az5rsHPUE6muxmu",
  "key37": "4Yu9Z3nfHxy15M8vM6tNBcF3x7JD75zY7kdoABdpAYoSNuGktTphLcEdXfuU2yQJMh8ZJTD9tqXdaZYwZgDYm1be",
  "key38": "33Axtf6Uvg6Aug3g2aCNZUNsDjnD2upNDdHNRo439gtpEi93bprQwjtToEdbk94neiD69w1JzZW3KGYmWeCikiJR",
  "key39": "2snvpGqFMmBcrf9Q45xsNZyndeyY4ot1SAnmtsSbpsQYwT7t36GZ2aEtrc54TPtZMtzsNTzLNKwVCDFryRcqe81",
  "key40": "4kNXjM4SDatwvGe8Vn3gNznuHZf1HrRvHJPZ8BdPtc4qFweCF9NdYUCnX67VF5ZonddpXG912SwAZ7Q42nuDDHio",
  "key41": "4L4RJ1shbHyRk2UMoNekf69DjPgYs5MavcNGbLtk3dckqL7no951YyLQhG9t4noEScZH1NJNj3FBgZeMg6oMdiGg",
  "key42": "3H2MMZ7Xbw6oCfiLYSTGvTs8RmJTTL1TVnM8rYXVxKEz2ay8viLaHDiF96dJS6fQfNb8FA8KYEpVt8v1UB4xmBRf",
  "key43": "2tjEWKsTKPVBjPiuYXxbsvyZ3HbNjMjo71omNca5m68E38VZWCVUW1x86whrRfcNYT5okCdT3sDKycWG4gXWLFc5",
  "key44": "XUZnJe7kBqBXr53A67jYmgXwyD4GNpEUQZ7M2nTNxKZpemqGEsbZ4mBn1UFA14f9q3nWSyGHESkpEWYUu511Bfo",
  "key45": "248BgG3GMMdYz151iFaBuTkSqZ4RpPdHDwu9rMNGrCgk5G6a3TrtAfkazUUbxwCzC1TPaCFepHAPgXMQowYLcD1v",
  "key46": "fC4AsVBp7jBQFcLtmJQ8JTM6zUXZQrnnzoD1neKiczRwScG5uXoEbYYvQH4jgvQfZUH8U3fmH4qARAMVfmTcfCR",
  "key47": "mBFyWUWwar5ivVUQsAwUYfa8iGfZPCwwzJRhki832dnyEbgcApk8yHaV2UnSuhNWRk4FRKyNtJ2oMYW3AMZQjdd"
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
