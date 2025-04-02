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
    "63JwJP2XdqMu7F5Nm6aNMHNcx8ZjyjB34ZsZemfDW9LExYr1eAF1jZG2oE9cAFzzWV2wH2uqe83X4ukVTDbzc5iE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z4mq5guYPiNoJUQbD6hYyENUSbo7dojXcLJ4CKXgnhuxA3XPNUprv7wU3NJahAGvrchrMS94ET3DCHAMVz6AHCo",
  "key1": "4JoRYoc8vcTMqNmzgtwBRrRbEZzWRQyAeDpaJ824WdoncsaVDuzZ5DCpAMJKcQTudPiChWpGtmpwrNGMVEyG9d8z",
  "key2": "2dV7UaEg9JhFqvcWEWbjhFAH74itjuDnjkucb8A5mkM96kYu4Wai6hKRS6oc1SCGYKd24Er8kFFm5EizwS6JxhLH",
  "key3": "oFabKS7qoqgyx3CpRTT2wMr7AWfiyajEaXRKTjFLbBoFF2J2KGPWndV8Crpf87avetuiD6iQaoKqWS7y7CTqc6p",
  "key4": "63VvHwyhAJ5XW9wWoBDNsffhUcfsh9Vu2xtgQ89bjW9GM41ujNz6sof8stbvL37bUtHiuWnpYEk46zF6xiz8imQo",
  "key5": "2FnsX5RSa1x3YfeX94kVvfWs8pUXuG3e5JzvEYRKYKBa8hmV1PodCHAhQ15S57ynWfnyqyUU6HWenBcTDtSmPE7o",
  "key6": "3GtiQc51eN3MaWTkxwHH9raYTvLYH71n1gisW62sqGKuAq84Rd9d3wKjnArp7oa15CXL3z3LRvNS22Y9Hcuv8Cct",
  "key7": "GeU3xCmz8nb3SjeZMt92UGwn6YYQqsVsTe9DDhvaPiXK3i87sRhYk9MzpfDhshwU8ahhPfDjKJ68YvPfRVYHZ1Q",
  "key8": "5z7tRQWpz8Ym6pVhCUXrMXobNzxHTu2xQSrcdUm54hAhWC4NPdHaN2SdoJqpHfhGboGb66zozW579p9abcEokMBJ",
  "key9": "Xbczu6M3ftM9Tos478TfWFBqFsE4VC3btYgQZ6BCkSemP8A4ia4XZKFdoDUAAF61d5yWtnKQUZEt5UUSi2E51LR",
  "key10": "3ttLSQ16XiS6euHB48aGymiE1kZMegM5VBQpVi69qBvnc5fwy3bTK6rKcTXJEWNk5CG6mgbsop2tCYfVEszM6fg3",
  "key11": "3F6YKPXvqxaSZRBMa65EkeJHVtZfyDKgKHn37MvL7VXYsAtzBPAN9wCyKGL6stdE7BaG9iy6ZFkd4K5S4fC6zeoj",
  "key12": "5qDsybEtm8JNsTsFhXpaAE1hruFjQ7PYfNjTBzvQ2Rjs8iXCe4PwDLEvjXF4pGHfZcnkKDDh6tGV8mpF6RfQ43fk",
  "key13": "4fR2QWpD13QzJzMEwCEAG82ihtGXNQ713NmQ9eTG8WQS8EMWeLoy17F2YKsiMyUyVkZGMzpxkwwwtadQAaKUCnpK",
  "key14": "2C4yDj2pHCF1ZWwV1ajCnPe5sEKRM7NoM6RMfTuk36UjVBR8Sp41Mx19xhUKpCRjEueC3o18TBoRaonCwcwX6chR",
  "key15": "67X2nsamnFbfmVdYnyqoM4p2KARcXSo2JuV22hoUXGGuvojw4RVptyr1Mtyaaz4knwue6eTVb6Sf5ftzdqMjGd1A",
  "key16": "4MTPzVfthCoS3fwrh4uxERwqvNyxtTp83rsfGLy4bfJwo8sigGzzy3Eh2dgLbS8CMUjYRaWnuKUr9ieBjKGq519L",
  "key17": "2hpRRbukLmR9g2ZhKzHZqf26cJGyc6fC64kKZT8vums92fXxrXPYuNSXJJSFBxWBAAQe8uUzjpsawjRjKoMCgn2i",
  "key18": "54uFr3ErsCJqyJGKx2xHAptwKNDr6NhryYWafpdLBy9FWzDqL7HaUe6RZFeXNtgBiL6HQ4hxxegEG4yru9Toi3oZ",
  "key19": "3FMEQ9nUjD76zx5AKvt49axMHRuUAivFZ6BdJhuToJwzHswHhiS2E8sCLj2fBChQoeGGqCrovLGvuMgHVsJTkLTj",
  "key20": "NBAyDotzJDCcz4F6ZLFgAwMTrD97YR9uDLsrPcz5tNUbZzXwEaCHDvhzmVfA8wi1ynhxtehFPYsRCNgjaMgq5dM",
  "key21": "58jgMXED1Z7PPyH6Q2Vx4c5Eqdg2WzG2BY33cFU1S657xSy7YJZpj13LzDBj2htquYhW2otg6HBsffJbmAM9ZgzA",
  "key22": "qT3k2inkuYbHpK6NTJiDmWhuZeR2eNiA7ET1egCZ361j2p7uwrrxRtHGCreA3aGApGgcRXXjeSEJTjd3MDFVk4X",
  "key23": "FDPtknPySM1jJV7hagrEcj46Zef3VQZn8h9b9QSbVrqh3ZrNRQjb4Kh8bRtqWpgYGZ1dsY7f6UmUgbxcTEBkTq5",
  "key24": "5uZgiGKZAy35v4Nv7esMDTvg591aFgTEWJPde7fREpurMXATtKVxUMpZUuVCBnxoo58FucEQndgfJDKGdjkx4idv",
  "key25": "fdjqthajz1qoZzmoH59ESX32u296BouDJAUNoSEzacTKo3vdzTsG2UfaR1qHRfc5gahWDF9cX4cRLLWksU3Gfk9",
  "key26": "c6J1eJRKFXp9TyiVfAdN3iV2YDHgmFLm1X8e5iDrjf4h41qHsAT2tGrGitWjZaXfaCDHfBN5NeJ2bGBvSbCviWS",
  "key27": "mYWegyKw39731x2rVkvsJSJMKH9CzpsvHm7q2VnbUinQ7FZJehPk57akP7NP3keySvAjFD46Cc9A2M5Bc6TtpkQ",
  "key28": "4sMh9MHwcGhy2M61fKxNne6xdmGywmFygMcNpdRJwrFppES5VYqTbf8RzR1Nr31GbUYtZVjzTNXnr1j2Eti3yLQh",
  "key29": "2nENAqxptdzJxYyxvKx8VTWcHUHZmcHaqsYSX8FkDdYiPGcyVo6eSA68oAnVTNLSP3nX9wkv1EzRHr68tCQj738q",
  "key30": "2qT7v2RywpsafUdmXctA4dCRVcs3PZhYqw7bLzPSt4B1kc5au41ZEvqwxuUzJLBSc5tBvTzREZm4yuAEUMvdTFnh",
  "key31": "4nVkc3VFpxgZKmN1dPWCQCvSejeBXaBzFjcjg8asS2MSpGCXzj2LcdFyyYBKCgKcAnC3MkusWojtwUfrEeskJod9",
  "key32": "5PT1rDhtyLZdt5S1zVprgYEFC2jYTsboT5x61pYtosNkqAtrw7DRtTL9UpaziY6pgtqTdNGx2QvSdMYbWcZWtB7M",
  "key33": "4scC98KqyGeWk37QXmKQZvhAEHu3gUAJqJLrbwJHT59cVS1ikAA1u1FtbBFu5p9SuePxAFhzNVtbJS3bkbruQXCF",
  "key34": "RbprQ47WkaLLQTYwofsLn5ePJBQDqno8482v8j7mgPFtMoWTTWm8Nupd7yipauURcCqSqSpWMVySrH5A4Kte8Ei",
  "key35": "3o8dPAPPe67PuD6aruUMNYfqTJ5obUuKwj4aLarNjLEa2YWgMtXp16uofupbyV7RYDy4iTzmvpYni8MJUe8tmxjQ",
  "key36": "3R3nn8UvfKu4P1UcvvSktj1yKBDKYHXKGC3QKi5PtZhNwFftbHW47vCvuppRwWm5qJTXQ97z2qhes6nMjEmuvYX7",
  "key37": "56gCXrgjmWvvKyvBM2AMdwRGLVuP9AbY61sEdxGVg3ZsiQ2Ybm2VzhHukCukVMt9j4yNKvz3Legu6dZTnUxPfBcC",
  "key38": "HjpfGQGR26okX2Sk9eUsmdkQkL1rJpaBF9bdNXa73p19itveCuin7VwpsfbNZungojKUg3ATueDUDM2NpjiJTT1",
  "key39": "2P4xMHmXbDxRuvcGAeUFtAoXrnUeNf45mhyJdmXsYnNi5Vhk9Ajjb47jyJJDrnACYY5vVM3zjL4fc52QsmVkKFVo",
  "key40": "39PEcKPXyQwshUEYV4F5hYw1cQyBzdXigY1GtErngrEdqvqT3Cs2oyTvBNAQJoxW3i8APAkHp4ffBC2TuT1Y8zfK",
  "key41": "4gGFhHghMfPngK4iwqBwumQjK7i9QFYjrshWWwh3ZfVdCaBgB2fWVAxNvUGBGsXAn6qK849gYS35UqVDMpqcijEU",
  "key42": "2CK6WsWRfvf5Xwsn9CQBmBqJ5zsjcWG4wgZGBNH4o59UDyShcbdqQvxhg9qnwCA7W6dsELqH7tZQP6nfSot6rMZA",
  "key43": "xQDQAGQurj4hyCzYLS2DB47F6ZXwEapQnxYxJTKPoMyyzGwv5UyCAxK8uqnSSRZgF2JGbZwtpQs46VASqNS3T1G",
  "key44": "oFDCDLE4rXKu7PUsXVVDgTpGZCakGfEfK8E4egFsxGTPutUEinxL8coskb1KNpQhtoDcxPHFLb3JkAX3KznSsFR",
  "key45": "ff1Z2cmWLMTHmp7AwsUqxUSiYWvajggYP24tj9sNPAxqDhzyEbyxPraEgxUhqAzkJkdHQ5An113RCNM5rGJWLNu"
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
