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
    "5TU8J42LhPegPsDYN69HwLXoaUm9AaJmvwTnNDg2mCzPjiXRE1F9cG7wkSHD8sHnLuykP4Y6JSEsQb4DkSvgUsjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XsD9k4vbWhoA4x81wkN9sEnEAphwsoekfhQk4K89Dmbb2Ac6gqCrzMkkStKD2gWdi7K3Hw24gvFosso4bfYhT8w",
  "key1": "2eBgkDzwg11c9mzcP2eBMBn55Phdu4hm76Cg3wj95kjXzxDEBugiHeFzVFEMHfUVmPBLrocdTbg96p7YheAJAxoe",
  "key2": "au8aWQVE2SQhMDDa1auQc8VxH68rHFs9oW8EduotxGcezh3nJiKtcP6iBW1z2mmMCNuyt3yh3zWnN7GSpj8of3o",
  "key3": "4P6wFs8PqW2Hb4HUEYPAe1BLu9xLirsDLpey1axKPhqBQaxYvhxfH3Ys4u5irtUALDBcvN1KWCPgtBwcGYr1E7dV",
  "key4": "hmMLGE9fqpUKHChYm2k92yE7PF9rcQokqz5tWVqWxjze7P4nsuQYFWqbeCeVSv58D1zSremPeqVugttrJpz7Fur",
  "key5": "4QwfVxnKP6YyqNYfPiyyA9SM8xZZ4BM5pktACM9n4Zki1TCBnheuoUFdhPFQL7Kp98HeUzPiMBnXDf7UQX5djnwq",
  "key6": "2ccdf3KDNvjQjjBVfp8fBNsLoLDoMryAHh4FP44XywdC8B8ur8JcRMZUUaT2bJCqF1fWVu3tKh7q48qK4qzghQsb",
  "key7": "5c9PWSJYr2CZE6S6G2biGUiWA4G2LP1KxkwuZdDqUyGfxLU3mVbnKeTweJ5PJTvjxek4duxGy5teYXcjiqSssy7F",
  "key8": "BNPVwehQhdMym1QxuSgDXqBnsRdKDAJrtZtpNBLiWoU3u7p6USyU9cRyNist7o6KfuZbdwTz8fvgdRBBz8FY6qs",
  "key9": "2Xi1sRe77Eh57xRNzPsihXQ8AdtmMnuQmHuKXy5KedK9Q8ks8QuYodpZ2duEsgsqhaHTKDLdZsohCRDkxgD8e2dv",
  "key10": "3wnjmabM6VKsTqfku4VwFTB1XykGtRgyQv9crJ5uSNLfkTQcMQf1JrnnJedK26WsjAsHiMgspLBGFPnEtS7kb7kn",
  "key11": "5oiViChnrfjYeN3KoFwHxxL4KN9cC8kW9Q5wRBgBwrqBJbD3sM8x99EKiVj5tM1gV4yo8Xg5EhuMEi8uVAhQzwaG",
  "key12": "3tzy8yKzT1dmKjXb5Zb1aUWNtjcJWajTJBv6FXYk9jA883XJMdpVscCdkTU7gF5aEaxhuTb6pHtJX2DpdeBdC8jH",
  "key13": "5RD6bDPmFMM5pSLNkBd8Z3uh7LX3VRD1dtyF4gcA8vqMcbf83MGdG6wvQLrHpfzY9Jk7yorcjsZGtTLaouUkQ1QB",
  "key14": "4axp5UwQ3s8EZGvXZPQYZ7UJtrndxpka7rnpgBNuW2ZonNPxxSDjLXKgEYPtqRdUvPSyjDpdikxqS38M4ovLZQX1",
  "key15": "uD29cfUd3dtUwPNZntAXHjYmEZ8r9WqHLyu8YMgG99a8b5Bomj7s7xqH1aNcakGGZLz6hjQxzNurNNkeh1NhsXr",
  "key16": "7WktgxbXE7tzSXMEPoHTfaVuvUpFUYaQZr9ohLWNPrKtofRMSahVpmFxxKhDzQbQbmspjhUxS3abWrVL6sioNJ2",
  "key17": "63eB7F4k2eVpFBjSS2thefuUA4hzyshkZ5VHtRfH68WihKFHrEUzHWzjKwToY5n6fvHNbwSYao1HkuURYUTctkBj",
  "key18": "5CKACUhJgL4kHP2nfvGZb4oWFiKRDeWmBmitsSVFwKyCukR52iSALKeReR2VZeynyU3WLjRSGJJgaAZ4vazDqBVG",
  "key19": "2KGixHk5oq99SveL3yEVPvZzsjxDwgLiHQ2PzyjUPV6gqBRkkHHWcucvHgoSpMtawEGpP3qQC36Z3FwJgMBjw3ca",
  "key20": "ZE7A9TRXSTC5s8c1ufwQnyhGKB8vcfXuKbQShcKSRfiMyipCi37etzePAwHShwqKW9PwvuABgVDWeJQVNZVa6zj",
  "key21": "5iRgFpto2miUoeekwXVZFTSMC1qr1C41Rcouc348NMeF5NxaLX5wHWSC9AizFKucZPeiNRfw9hv5ojKJCdf1xAHK",
  "key22": "PFiQ36TDVJQLJme5TMniGGh2NT4oQM6ZmgvGCoUEMyYktZ1Gu9LkTtnqsonLoKCRvgQtLBLbQk1ZgkqfhUxBMZ5",
  "key23": "5NsMboy1hfixLEo6Goc7mXfsJmSTVYVLEPVfnR2MDyuVSmzhsSo13bMy12x4orzk3wC9Us4onnTSuMzBX8oYm27s",
  "key24": "5niHzkBFRJQrnvNpJzSV1nAu9GhrTJ5Bzhe4UVBihMtD41UfL2o2TkVwZoa2TRnkYdxVKtCFaK7vzNt4C6DYUW6x",
  "key25": "QmbhJZ9SaL8L9dpoAScETi2SGUtGZiAroSJKEBxYXFFKS8FiCxbvBRTNtRvZsXBjCBj81fUhcrZnkpDSebLAs2c",
  "key26": "4kJFqZte9FfrCjGAuorWKpJEum8LZzdU8JAEjvawb2afSNzKtWoejRKo6uae5nHH1dceVPfVJBRq8r3KwUVmjgRw",
  "key27": "4NW7d4bSxQyvTxaZ2UDa6nkcdW8ywzLnDAGRS9am8nnXCzx2hPWXWoqn1yaPKFZYjupjrBq1CqhbtBnCDGQjnLGJ",
  "key28": "66crGqeHF6KS7FKwhd62FDBQ8YdVRBNtDDShqtewx93JQixJfkoSwnrp5SZZUyH7TWA2631U6MuJe2uAdZozdVZV",
  "key29": "5P71oPHc76EjYqz7Hyfm2JippKebetzGRKhJnMkevtNiofZGx9ToVhsYn5ThA33wdMpyjxJrHmcCm8AzfWhn8anm",
  "key30": "4sDLnsDFghDA1rTjn9gqJJ3kueQLykfuoQp5xtmqrAj6Yeuhv6TAiDQtT5MZXcceonhWatsoQpNAXJm2x8LiKsky",
  "key31": "522FLDaPi6CLcoi2aGrhUwuCk9eKGf8QdTbieeyRVnUda2NVa22seyXtPEMuPPswRju1AWLhHGDbu3sgDsQTV5Vn",
  "key32": "5MLgs4pB6DpqZ951unfE3SHaiboc6ZCSUSBUAJW9Egm6sKvyx7FcDtTYX1JdAHxzzQpNSJbWXvSDaEdumpg3vc63",
  "key33": "TfiCE5g2tBr9FJGd7GRFJTC6pzDkWqZbDtu1R8PvcfpqFAX1pc7XEzfDyi9m7yHfBfxro79w5gEvwYMHQmbKLYp",
  "key34": "5TRrG9UtwjVEQbEkpBeMiyCsXZiTf7BfJEPSYioYXyxmn35yuyrBLZ1TF4bxMYWYeqk9gX2VHXsSxDB73PbtV51d",
  "key35": "25hASMdFnr74iJKpbWoVdBnva9Bh7iCxy1MMCoyEfmtjNtqL3ZkNLAUxMD5Ydk39DeA969m1d43eAEZX9BP5s6xM",
  "key36": "4NDBHTwDHHSKmDJKK4irCsd7zBgAGt6ARUfbYXYD9uyCAiAoB5e9evEsg68dH6VLj2eAAs7fW5kuUeAAv1ku2rGh",
  "key37": "2eUGYxtVjccSjy4scdBc8ES1ZvJnTkqXLZmZLQS1GZ4e25viJoX6Xh2ZMyhqp5DcWc8dD7P2dJ98Vx7b8j2Wyr56",
  "key38": "3WLeFqL74mffMfCTgdwEzCEr9dmTpsYa1ZApbWTapRnmZhvEAqsVWLWHXPRwPsXs1LGdu3xuXsizkHTbEQoJ86Z",
  "key39": "3yozqGZqsDT78LGd1SFTpFuPSqFdcSsdcCKX2wWnFToNw2UpEwznruYfdxY8WG4XygyxdbXxDga3ZWpLRPkV1qqk",
  "key40": "5Rj3GPCsoXoKXgkdKgCk6pFAY5LZkhTj48HjxBydwZ14ezTduMbf7LeBEQTVucs5x39TFB6b83s6ufteSdd6v5sh",
  "key41": "3Z2mScoL2akVgQXXpjUJTcMmpfd7FDVwkVvPjN1azdWehumJhwH5mGPwjMqAah2TjWic8ATmzWpzhJvAdLnnYQv6",
  "key42": "4GC5a9u8tEKs9TdvgfectCF3LGMJ2WYUKyCtX88F6VCMq8kkFCGRMXAPRt5wB1DYAExd2GtvEJCn9k8nSnfQFV2x",
  "key43": "pUw9fhuozVPBFetD9qpd9enoB2GAGdGtcbbWLuGKwiK2aX4RiL4LZSakKkGXkjcdfkaAckiSDRnBn2zU6dv2sJG",
  "key44": "4frLwpeLfsx98wxhi53CRgtwN8ST2hcoALdYngardtaXwPK4LsCp1aUQPCpSD95ZPVaA8fUgSSa3kZB4hGTShyKs",
  "key45": "36DRodCbxn9cBsGYGrTUP2Gv3RpuyZhqVb1gN4iTiFyCaJkdr3SziEN75dh7fQm6uyeigEDXXumQGuNKDaDeuMvJ"
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
