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
    "37U6C8jrARzkRAyWSh8J73HuVCguCmak97wXwS5cPhpYLvUDmuBuaQa5eiF3bQcZnDiZdB5xoP2MqLs6VLp9QLFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KwoYoHUYgD6DFabDMi3bRR97HdNK31j9eqbgHmmxWcqRVCMKQC4718Z4DaYFBgFvj63VkwGUpdGivYhw6Uuxt6A",
  "key1": "3ek4kykwCdyrHTYtyXCXRzZ8JSbJTt78Rk3qo7zEt57daQK36Nymcg5Se688iwdfntxneQmykgh6wZKZ5kqyYLs8",
  "key2": "3uTXt1jyRtb1dVKfiRy64tsPGskBvmDikgdcSjgcfhMVHTNko6XRMqS6fdDKHaTd5mi3fEyt6zGmYhhgS6ZwY8Ed",
  "key3": "EYkeB9SN8ej4h8aC2Wc4MK5CmsqFLxvJQAoCSQirBJGEmUJ88v3kQQ7gj2DGmrZUZK91sMnYHsbLFecjCGZ24wP",
  "key4": "xyw36jLeqwcuChGDn9e97XSwadFTtYZmEiMCeG2WaL2iFk1tzrdR2zwZGrHFdYRs9FDsBX74H3pZAsYD4w6r5cd",
  "key5": "2N2g6vmybsZGPaJnpG63j84sG8nizsjsnZK6X9byaUyysvDZcVEWZt2TesqKx3uXaRmLKJFNk7M72xNKsPFToLVx",
  "key6": "pL2vHzh2yoSNeNNvy2aKMr9pj7sCnEAFLxPkew3ZuqhUAKBPoiPVFyD5xXV3MAmrpgQB2zKiJMByXuTHU1hQKzG",
  "key7": "3LoxtvqLCMHLvVw75AybvkmhWeXzLgU7f88tk5JUEKKDz6NFAL6c13h3VgtJowGHXSUak5bzDiyZBW141sXQFR5a",
  "key8": "3idXQo93VNFxRDpR74BtsaaXAJkjYWk1XvQS1YGSuvjwaEbCQEz3NWtkA1reHYppJEBFuAY8VTqzf3CjCzcRUm8R",
  "key9": "W9uRc4xgDNdzBxBAz38VkJP7VwRGWGqHF8iqXT8Z5BtRmZoK3ycezCMs37XnTcnk3FFkf4AvE7np83EZN1jCjNq",
  "key10": "4Ya2Ky3vAXdR5XVf5bKS3ooEXHrHRPZqpw5teQdtJfuqhgcBeC6Yqq3vHLdAa4ZL4LthBMubPj1XJqGdmci9nvo7",
  "key11": "4ukdQ874vNswu4yQbUj898gTUxXG3d5iL56DR5ZwpfbqG1vFoVBVRkWcwfPd4JHab3vLdJh1oHSsMTHJCcBS6qNU",
  "key12": "nVYwKmwikiqNgLiSFnTsxXJqGSE3dg1ABtpiN2mYGgtsBr8yV5poGFThRNW23n84nv6gymRk5aadj1peCFWD9ym",
  "key13": "j8DWBZYEsa7NLubRvccAyYv9xL87C9Rtoni7bgXLWn4rA1kiZ5U265ddpuNakHei9TPFJWEsMqNKKQRqJc7k66u",
  "key14": "64yCXcA3M3W6wKA4spaFPt5nw6vucZc4UPvZDxJLP2Sz9X5d7hMqR4i8XhTj1YFj1zcn1YtQP8CYE7TprzMUrDLz",
  "key15": "5GA1mhbt5hj7ioLcy5kpkieVWFhw9gMJ787e2qwH3yh6pp2c1aAZ3pBVjCiZ8Pd3WrDD4H3CTATs4AcwkFxqvfQB",
  "key16": "2KSwgSk89HJht9huquMQkkgkbu17gBMdAuQSdtM7JQLZiHd58Gqeb7umrHoFuNDn6H7kUwh2yqviwoPHNKhYFn7T",
  "key17": "4THHQLmNAd972LYcyurGNt3QE3kPbtGQ6711MtCfbJfmm7QBYkVdtTQyaNQmqowqjUFzGppvMJ1p8VrnhPswsJiL",
  "key18": "wJREY1b7CzEQ9er718XwmTxeDJWvj1r87J55H1hkTiyDDQ3WMrxz394KbfiUiAt72BshYRvjSPS4zozDT7d7n4R",
  "key19": "4y4MDjP4cHdQo3CVRwW35PikY7Np6WQ6Y29sceVX5RFUTQPj4pkBKzw9gbFTjbQsM93oiE1vgxsJjePnrvVdca3r",
  "key20": "9tT9Si3yQhb2cK5Ln1f2e8ASF6ZNKNSKvDNXCiWSbLmJwinCMbSVxxbhod8kG4TXB2996fTqab1FB77jXgHhE9i",
  "key21": "7d6ciNRaLghAe2AQGAGYcwzjukisPhBvodimsw4SgVjZjFU6uVqC6i3Z7mvhTdAvbjDW32TKQDQUEhBdMBa6GiQ",
  "key22": "5Uv3uVZXacdPW7Nv2D1mTqFo1PPwrN7ViP9uVQK3YgLytgg5fsp4L6doY6AqQUKT4sC9GmHWYsEvKTy25gyZBGrY",
  "key23": "3SMbdBMR1f342zNzhtY6PJnKVShkKgiWhMWv281itFL14CdV9FvZSEqY4b7bprxRj7GWVbFRrpvJGqcepJgAMUQu",
  "key24": "Mx53c3YDdyxptdMn4pxULUzqrB6HULYKUdxKdkjZHSkYSrXdVxE3T79MkWeybqp3mBJFJDetPpyThPGPZjkxJwT",
  "key25": "2bN8R1yy2iDEixbnUrf1pzWwMRN8bVG2dPVFSg11kL8DqHGHujKFCCrPQZkMsCEu6xixetNtKHocWgeGn5co96vA",
  "key26": "3z2dq6n2FJkny83ugx4cAAJaDVbjg3P2J4SBv1Z1si35sspWy3uVggo9YMtVjbJvH72zXqP7wYLQ1UvyupMYTPY9",
  "key27": "V33jDZ1pGAHKos2e9oVCHk2VwwBhmzsR59LJUXpTZrUyeHo1w18AdaRwhrEkaiZtwBSAEHEDcynSAUrnszduWUB",
  "key28": "2qxkim72qBmSAaqxLf2vuQPTaB8s2kyWkByQLhrtHiPkjSpLKEWBqZw1gpjKHjDV9isFbMwELfh56iqfwSoZ9h5v",
  "key29": "4xP8h49zF2pQJvk6BRLsBNSmJmByjYtoLiDTkdvXU1hzc2tuanpQnrvNSf3nmYRLNfsQTLWuiTSR8Q2rGJVV4CNN",
  "key30": "ndeseEgFb6eTMd6fKsbJZpZH2Bcdrn66UTEiArHi1QT9E8v56N8iUmwAFvykjapAkVitf4dXwG6oyc35nptFRbo",
  "key31": "4keaRER3cshJHGDGiJ9xdfGqERPECxZZLJvTS1mTGa2BQz5z45QuduamSVopUzJdFrcPeJg5pao4ZFYXbLKQe5Wp",
  "key32": "1bBanvakFAiAaJ3eQhKpdnS5oVpRmzRRHcdssbgj9U6AGxdGnnMgFMSaxHJqvp8HLWp7sepSH6gu6JV1HeFk7eX",
  "key33": "kKrJfqybccd1rYfem3NRAWYsqtZUUWnTaNRanNWUJ889bkAYnxmNK5SiyjpD8RND8aXAn6ste6GTVmZg4iKuCbe",
  "key34": "5JS7Y6FgErHmN5N4n1mMXU8adLAkVcEyDCrBVgib3XTDPJxykNAfgS5Fk5Y7L3p6Mhx5GWsrjhhtZr476A5FCSKo",
  "key35": "3XpF2inXw3xTGyrUcaSH2q5VyWhH1P8mdEjhUuwjEiM7ayeKAyDhsTKDE2yAST4D5zP99VZsdUmyqMb9Ym1YJoXw",
  "key36": "mfraVPzy79wFJTaRigU9JPdgAhdasddjsLAtJg1JNh5G1ywQa7STb2nCyUtD6zVYY9oLzrxa5VLTtMk5LKcVoa3",
  "key37": "2xXyBMeeLYEpZvnPCQxJfPY1PhiwFp4Prq4qcb2FBBJzcn4w2YCusPDYEm42zx8PhuQVeEBXdNPHh6QptM1w3NMj",
  "key38": "3HQptvDa3QR85s5hxykN9QXdhMUERJzHi4omL8uQ92Ltx4LMEQcpezCRpf8XuRgnasFuDNo7KnUnRvQGngWaQbhG",
  "key39": "5WT61w1HzBTcUHEXy94dCxm9mCw71vbcgWjPubJ6pjKjXHpTfi3XiYbrM1uKTFatWJ5C1DdoaAHEPvLKan2Yb9jP",
  "key40": "2fFKNGE5ZDBuj7VVpEWjP5XzXeYZrWA6UnbCtAt2BPH8ah4KveibZpqkksE2qH5rQfcNeCf6aoidHdoHWqW1v3ue",
  "key41": "4XBu6PLEYY6fo9Q8R5H1uhxYQQyoz3BJn9p9XzFK1Y3bHBqjSEaG8YRp4mR3msJdYkXi5vZeExKS9CbAYLMDv9zt",
  "key42": "5sATvWSxysJXSoVGmFHsT4rFjCPKctPRoGt1hFBZPmq42pgpR3qqcFr2agfxNFKjsg38KYuxmR1GHDXSniKzdDfx",
  "key43": "3VFCjdBqYPeLgjaNzte6UdvkvaCpZDQkedXzu2q91bpCUgJfgKj1fsNcT3A7cZ4tuH6LNCdQDijUS1TzvtKUHivq",
  "key44": "8Z28G5GsX5JL15XEkJQqJTY16cp9fLCRW17guoyyNWRBXDHUYGpLG1bdYCeX1RY4vD3oSahM45mR7rwCHHoVNQj"
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
