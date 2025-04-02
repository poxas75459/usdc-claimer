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
    "U7BYZqhoK3DhuWxRRFmC3XJbgEupXzkZvMox3AnSZRZFFa757KBFvXZYbGHC3GTm8ysW1sxgUqeHFc8K2WesMG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tob3FJcuX4SQwniyYHkRUWD565RbcoZifNU141UuMyJuns8EZYcwtkQRTz3wJG2iC2ESLPKeWADx7BnVPhMZSZQ",
  "key1": "3uByuinRFk2AcyFUVA723usyqGMEonxMnmte2rMeXFEMhv3KjEtZuRCHqnRPGjJv2kfDnSjtxY3WB648nMYpEbdr",
  "key2": "ZgcGoAcLhEmPk3ShqArKNbYYrd5mYfcwoRHUWC55yqGoUEvni8hSEBfKcqm44RZ3ERfS29NAE7WCPiXRJWc2v8w",
  "key3": "5DiLkEaA1gZTus2AGVbdB8Zq4MA62Dy4JYCd9qsDuBVJ9f5BbQSVspitZE6PYmSauEuiTfMwjrhM1ks79UnzSPKq",
  "key4": "2vcPrf3yTicW3DhLAbtrXMKpHx43ZjUjVtwP6FcJ9D6LhzqimDJp7qjjxAAtUGEmTvza32E6B6h9X8hi7wh8gTsP",
  "key5": "4JrqvXNR96As5uSKYaXtrzUgXebjkDCHtyj4CQLrDn1BLMz9acYmpAFdcgA6cKk2H28hSUcsZSdqnTqsFEoSGgep",
  "key6": "YxCtZDKzVyeeHRNpp5UgXNketa6NNwAiGmfmBSPKkM9NeKcbqsRwrRhaRJPwB5qwiQ7Uu1buacGViFJLFx4M7YV",
  "key7": "2CeSr2WUa6ikEYtd5HXM7copKvTkDynQtp5eUkDUEfJgDDejwxMN2vRb5WxEX7Qh2b5t6JV7oNmt24oKV7svgKmy",
  "key8": "25HLzLbVH78J6ViAFFSzz7Q6NtLrPzfSCj3v9FkvbUBFjEBYYkfyy6fD9v6oxi5GstsXrjsCToEjiKZNwsR3kKRY",
  "key9": "5LTokRfdVtvQTgAKwoJuFS6MX3gj7mYaSHA3DcHn8eZsiEvBMxEJwRC37fYFbcnXgEGPPaLfSb31ifM3Jxzniz3Z",
  "key10": "3AngLjpJ43uuxx6KEkG4jfaoWdCYFoAJcMCabpWtZXeNDMHaLwZfgRePuC85bEed5WzbhkeeYJfpuo91efJ5vbtE",
  "key11": "2jYMZR4FxfGm6GZUDNXEU1qTvnkTRH9WaHu4HMo7vmD7nx4qFja4eALVm5ycjhJzZC33c18KgAF8xZydtr4Hucu5",
  "key12": "zDMG7hBhxg76FNvL2aNiBKzNVrEyYj7EfDgk5bapktcqEv1rxd7Dqh4ozPCQUsWiJ2xRvW7sD414z8yfCtpyPex",
  "key13": "65jtBCAZtksnBN9iFBEDCovDDyXkbSTbVr3gyMwR6UjQzG5Qjv7FA1pjJTfKHGvDpxpMzyveZph5V2hjds75Nf3",
  "key14": "nCbYi5EkNEFEkBMuf5R8NXHrxuLrJMfu1sa1FXEyR3FNxQ3PBWSWu6LpvZYSMEseMA2SSfev6LvXHdyvxyCNm7N",
  "key15": "3D9ng1KRtiudnL3JafZgDmzk5u7XyTKV63kZ7VjnZLos9USzUHTb6XAgXWfNct9o5UCnkUfYj73XtiLYxsqVY6pU",
  "key16": "49T1yHFt6zSgvuXHtjKSCbuSJYa4vEaKY59F9M5evh1SEyKK1ioKduLqxvpUcnMwXAUdjsMbZNznEVRz3kDqEfoq",
  "key17": "2QSgwVFjGuuqYEr2gaPkbcuRuBcCBH7A921AZhQzLf3xBYiezLdXQQgvpUnig4scm8uHa2eVEA4M52dKmtu856tF",
  "key18": "32UWKCtVeiRYzyxgon9WEgbD5a9oXZ7J3aj4Seka7dgECBKeQ1PrCLzuv3J8izhnZ8rSjreiYGKaLepP2HFp1Ksa",
  "key19": "35fzSEFMMDixEoYicevhfeDr8Uxahg3dYRH3Thv8bsAginvSr3wmAWUfwg1Dr6Z3XDz49e6xpRwFePFShttyAEMg",
  "key20": "2W3hnZWs3YWJME98fSyfuNmE3ftiPTrdgwhb8b57sRu6o94tJcW5iQ7Ljmpo21ogwhdvn1RiFgQ6rKTa417YezJS",
  "key21": "Px9nyPovcbbbeWzLpCXiFLK7HPdg1tLJBMNpJo5a6W1yKyVerf5atdEbsTuF3W4okgoLK55tUkWKrzkEWQZdbrT",
  "key22": "5T2RnrHNLbEuGwG9rHAKxQZWpr7L7vfdBrp2YtVVkSVXsU2xC6xXd4zeWFfVrtibJPjTUdadKrY7RFNYGV2wDknH",
  "key23": "4USuX3LWKGWgnkdjtZnrKdMP1vCgA3QkpwT958v7Ze4NBTto3qnxdPK6uCGye9X2r9rMoEBgyQHfwxZ6RBtH11re",
  "key24": "4LFvGZChFRwx7t6uuxsGDBt3mbGKW7ovu9UqVB4XvU7ejZ4wYKfxxa1jeabC5FCVspJgMWr76iKy133pKTxy5w64",
  "key25": "2nHPGigFXE7W2fCeHRW2yp1aEBAf9oRv3TZigu4zWezUHd9C8e7eSFKDthf6QfBKRVB5wFhWPQwWL2cbEdDbDNC8",
  "key26": "4YAcJhT4U9ieLhdede75UijzhjkwfWrbAEPF9x24WyYVz1TDUe17QikeB5iCFrY5KNMfmbmqLFWm2NZuemyvkq7T",
  "key27": "3tKiN94bBnCqfewL2Y1woUtNnJHW3xKsqSYJ4EzbdetvUCP5iXdjBQUnQHpAsdNp1phkkJXNThCDMWegvbKuxWNy",
  "key28": "3ptMEY3Qic95Cao69GZvZF9xSG6Ma5iCWZCnrAbBSwsWaXjQ16KPFURXHNZa99NtRjy9zj3XWBSR9msqUeDBK31o",
  "key29": "2LYGKatjaHwoYe2eD7vRZyCkNWLhVdHk4xeKMvhpPqF4wUvJYpF7NxeUC8fZYuXXXriqWTp6Lf3QCuUZaFe4k38a",
  "key30": "3oQ1DxTzm76QjKdxqhVUe8q7aUuJZB9VhBJbPL8GbiQVmmFzvyT3nLHDrgrtjzm44rdG34z9NCN5xtv7V1tR5LxT",
  "key31": "CQFKinWS2dLAzXmtycMRdGYSe2BrHwMBkoH3xHvTPp9BsMSAaUfxbF3MkE64qo6qxiLAQSq6TCht3tTmXdpqutQ",
  "key32": "48tajai45tnnX2XVKN5BazP8M2gbT7wWGruDASKxTAHNRNPfeWwLBxcLe4376P6XsP35xc1Rc2149fcJ9vXExBve",
  "key33": "29R7mpVwWEpgBU7Rjc9aiD55WNeuiWz4gsdkuqqXJ1i6gdrUjqEkoLeEez8nuq6aYfUL8EqnZjXvQGkE3Y2JduA8",
  "key34": "4n5qtkz4K3NZqDNA9HhFPuLrWxaY7oAsWgZ69ZRHR4X5XHwet4e4xpWo4KgB5c7XLSoZR5ZmCe6dM6DapQjVLRSM"
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
