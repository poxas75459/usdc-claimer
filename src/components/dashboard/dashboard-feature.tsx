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
    "5gWwNG4xRx4nzpoSCTawjudDXAdA2pPciwidXQTW3VmVeoGFqtuSjPnZePzJzRXC1YJxXW62f8yVgQ3G6x3vt999"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25hoChENAuRXFS7KFomR1o97huteAsqzaq2wu17VPA8wja5pFrdwp4gzfWGXyNKCV3id9QTRdBVWzBu71AweebYz",
  "key1": "2BoD22b23EjF2PKRBWszqTKMX33GGoRxa8LdwDbVW7BFkYJsWH88uDhc2nfbQxiEf7bguYyr9jHam6wfHLVissK4",
  "key2": "2fkK9xdrST7VDDgESBCHbWMMnXn5NvvB1xv58ikY6rJStgRGHcn5fAaR21SZeXF65oBX5h5CsPVyPYBN2CBHCWgR",
  "key3": "35e98hrzUPKvtc86mMuWsmA8pcqx6KFo9TiTSsz2f7AjeekJQUFb5jxg3bVSYScJmVj9MQLEnP8t7xdvYQ4sGQAG",
  "key4": "2S1NGvvPbxYDm6osZU9ZPSSLBj1xKtxhTnBUiBcMqYDfBBGdEDjKGcdGnoype74ykup5FoaUR72FMBU3BLXySrnH",
  "key5": "4spMR6MRoos9hysNWVw1CU4nj8isqLUxTGPzhgfTW9fGi9fatkp2kShFtzL1u3ykRAxDXig5hwbehAXAXWGb73V8",
  "key6": "5ss35gmFkwbsscDSnfPaVef8TnxNdPKHRDeFrCzbycZwTEpQ9SK3e3zXyMRbf7Mr5MR6P4uC9uG5F55dPamQuDjA",
  "key7": "3zAKdwvxYH6XEkRgk5KGsuyx56BbQf1x2jKhowYgJecK8734HJG84aNDnsEZofdtUZNrbFTvS86SEL1oSPgUSSx4",
  "key8": "36aUDN7Tosk3nFdEJR5XECYQ1cqgAEcoHjZqYr3wRF1NQQ5GNm6RNBQPZYDeptUuNSVcdKr73ntJdSoNSS2rVtbC",
  "key9": "3pjxNviQhzFRYDtoCREv3MsMbU6sfbmC4Z6uL6e7krWMfw8b625c5CvbgjoB1oFTFJfXEVJtJsAwiZcfEcAYqmNS",
  "key10": "2wCK2ySJTAeid1LqtBucV2kmuqSPXVjnweo8Ptf6L4GjnUG7onVu8NuYMpBfeiLDLpe8Rhn7vVQASUKfeH53Wxvq",
  "key11": "mhLRTgHWRCc7c4izX1VLGNaxDKjrmAj8PJHcYP2XJyt8ya3Ab4YgA7Lis2YAd1PKEjHdTpFDdyhh14QgYE1EXE5",
  "key12": "4ZxkneJ1Suc5Qpwic76i2xh6c8q2QBPpFf3BAtc58TY6HnvPtmh3xoDEKn8ecu4TdjVVo3j9RFTaFgR98XqDvWd8",
  "key13": "ezj6peFVR68YAv6B3kddsViLes4TGHbrzvz1uLjcZfUCQ4sidqwrLcxS8jzzkUxWdcFCRF9tSRbS6Qyg2t7rz8Q",
  "key14": "2wKjMDtQXC825s2AA15N9GRj3JPon94oq4tYGLWGNYZJz2UVHD5yuLXtp6We12yVWKFyWnaNGRSuRu5fPaw8joRu",
  "key15": "4ZsK5bp2PDGfiAdHiTzuKsxssd3rskBmTWv2bvMWajYuXWHac5K4KwtPTuz8biFHdYVdijdGJCEW3F1ZGznMqGjn",
  "key16": "2zer5yYb1cmEKhmUqaHXMUW9Q4stzJH1x8QTc6eJoiaMLNbey8PUKRKywwpLfL7n7VKsrpXoWoc17diePJJU8rpL",
  "key17": "2KFtzLDdj7Cf8ZfHpskZJoyxHoCtBnNAP8PwnnXVHc6Hw6HJ7KknHBrY33CCQnJTfWnwp7kxmsQaSXquLP3VnPfD",
  "key18": "5eQ1taUJpGpzD2XQJ4zcm43SVNgjG2ngtmQKkxUuL4YapSYoGYEZZ8rqBTvadmFiQpEncczZH7qbkdg4qrpgWYEs",
  "key19": "5WJakg1G4jrmEwGQ55yseGDXUHH6FwcCuTUNy9P1G16agjLcPHNMrUEtXypJy2aw8NVrne55KdruUKMCPZZeruGJ",
  "key20": "5X4qBybwd8VW3391d38dif43mGSnkqDFF9XmFnuiTmEhQ1k73aQac2RB9ZvJc2KfqY6p4QaGU4Cj6wZTWPD3Wf6x",
  "key21": "4XaKt5CuY1Dh3aELxtWW4Epy3XTBCSoWid51GcvFZZLQ9SFc1ESN8g2Wh6WGwgRxuFJpXTHUqsFNmQRGmFKX4SXx",
  "key22": "C3H1tT931Sk7NS6MerNsexkNDx1tLgqL3JWteJ9gDkFEMshya7i3tkpsmv8EfoJ5gnhueyPhkr9Uzftpouw81jp",
  "key23": "4WxARzfkvY853vF8CXqvKAt3JXpZm5Hb47ATjUhWKk5hKtys3fodLa8EUajAdmYjsG1RwNxjN9sqXyiwR6qWDe9d",
  "key24": "mB7Z5pLPCyTt9UL7psonFrLaDBkrjqDGTpoa7885K5KAoU3nASYWdquiEb4rqGovJnSCnZju2523a1sbpqzwZgn",
  "key25": "4pSW2L6dEMCD6qwmntRHHyGv8SLs3P7QC2wEHnb6Z997Tv6gC9pduphZKNQSxYosPgEZfA44LWuFxRKL6k7mw7Yd",
  "key26": "5KcqsW9wB6B2oT6UXW1gY8cQCWaScxUgt6N3b2NmwLT9VixX1CxyvuTZ28BLztVryLLgBj5NxfT5EBnqbXq2jn2y",
  "key27": "S3io4K2NUAN1sM678BdGfAkJ7cBnUNDMkAJo5m8CLE78w1coBUQ7kQYj1uBbwTmaeRYHb6dhL56ZjebAcgXaUwU",
  "key28": "2MPC8aBbB83ZVCkeqQczBKrWTe6p83YV6k8768ivyz1kcPswwWVxGDhEv59y9kABQGphTsHNsXXjh7jJVekcyd6J",
  "key29": "5ZRqh9bcW2XoGawpAByom1XpF8tEmBDUjMV2tF8ftE5tiP4s8WiC3eGvvwCNkV4WismU3tH11WLnaownJxBmSuJ9",
  "key30": "5j55M3oXwVWyuaZLQVeNCaqQ7haJeePQZAmAw4SLkA51NeuPHNeRGyonqh2Fc24GC15mdcuip1Nbxy66ZjNLtSka",
  "key31": "39DSeV8v6VwKEWkJpyF2bUsNUnNt2San6F1sxFPGN86zxMHmC5y6fjbFdfFeXVoYAuAddv4b88zwpzHSSUGBAwso",
  "key32": "2vCuK9qUw5EhFMHii3ju7TDZnfvYs6i2p6jGQrmEGGkiPjF3qStc5wMFQvowo2egZ2FwAbf7VjRkqxWBV6UQBPWQ",
  "key33": "5i7utqk9BqFBEwKNoKaZCjdY3WeFEu4G9gLoodUi7ejrAR9EaNJcUnVsjSgMnJgHYzCGNRznT1Vb5k1v1HpWkyRh",
  "key34": "4S36fzufHv3vLDTnASRgyMwMiKxDu2mBvFDicTAZyKgcfxscQWvJ1Yzkx6QdJMGqa2231F4QBPmtvaEYXnYRg6FN",
  "key35": "3HzoMd1AwMSvLFsj59YWzbQVfoGKesFpY5JDANMPc778b5GYF6G9gc8qgQca1S8GUUK9Y2KgZYZCZ6k94Wp2wgcF",
  "key36": "4mWRk9hbkhwFqx9qAQvGxhZo6ZGrXruaCR4wUejrmV4pfMtPvDqnVgjvj1Nikp1jE4bXn62XYpJH2ri2V2G8hTmM",
  "key37": "WjcztqpZbyNXHJ1qfW3FXUWagDVGAdpgVNLKgsgcewAVsnGZsMe1mmVqRwqxoegR6dfzm3QDsaqpjZMQuJeC2kM",
  "key38": "6nkbXSic41MqunQLhRoBQSDXLS7APuWgXvs9DR5dyndt42eAYS74sHVEBmyEBpuqTwkXkbQCSj9qwhmS1NJ1u3y",
  "key39": "4wtV9W2q4ysT7Yd3arJfBJUr9wewkSWNTsXZNf3VDvEJzo33NijgWkhLYsKr7oTCSqmi58q8zNy2rJjgvqwG8SAS",
  "key40": "5CmEEcDYKatXexfvDYYNMYKFpcKESV9JvY2ksG7o9qNuiv8H1T6yoiJzMz9HzG1m5W5g2WAbskpoai4wdEQ2Xk73",
  "key41": "4M7uDpYMSYQNRtoWEMLPpQcXGaoaYSuwqcRDw1e2kQo4QWTcCia3MrES6C8MNc5Px99PWbC4tcnArxGNdu3UQwqb",
  "key42": "3M523SESgxJA2e3EYwYCbF5MG2uBKxWtycm2Y8pvbQjYzCkcN8aFTyz593PNfJCqMK1hWbEHcCGouLeqkwusUfJK",
  "key43": "7k7AejLRCVzW5MAEWXTJ29QPfPDDmYBBMvJ43XMNtPJWVfB5ZhKQZHdF1LPgVuBcLxXVVBBcH2VvMuHDHYAfiYF",
  "key44": "44Gy3gr7tiokSDthN3TdjR5HpR85rbDRKcnQURMJtDGrUosYTnpcuNFGgzcrgphC7RxXWfvsF5FbTvbZnUGCLAoR",
  "key45": "5CsBwQrB8xsB1JDK6oE4r8P2w7UgoyTwutNZWBmN7h8LH7xjwxN3jjt9VY6gYFvwXx9eoc4uvbP5fYoX1snswN56",
  "key46": "Y3rgZVjYydoqa6kNuLp6TLnwt3a2WGGJQEQxyYaTaB9ydRQ8M1GEUPHQuJUBCALWrtkv89jtdQYNFgf2H4GKqdC"
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
