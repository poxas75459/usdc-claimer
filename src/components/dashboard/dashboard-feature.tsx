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
    "3hQ7JocHapjothKvUG2fEkg4uxbjrrfpCpVtgbFpUKx81PzChL8VGdSVSCCSuCt8VZPDD2kSvPzEZTEpm6fhrJDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dZa8dKctEBFRfVQkskx4eBQMWU3gAo5oeoNgMpj6bpHrHagbkHzEdoAAnZncJ9xykcGmBNZay1Lt6FsLEjpSxau",
  "key1": "5vBiLuA1VXWJVshgrazHXPAzGWyzAukzU5y1wLJDdHACV61aQDzWnu5A9MqoqsSRbxfF4AU83adWvcqgsGr7BDMV",
  "key2": "49bUdK4ZHGsE2wP2RiMWFPT8b7ZaX89fbaDyfBkNGVAvbFp7crDGn54YRVNMAfaPZs6E38DZsocsoL1zSTE7Qfng",
  "key3": "36a8o5YoWTwExJV9nxMmBh8P2WcEUMSWaHnfqwgmES3uW6keBjdD3UkMaP1ymnmhUZGFku4yELStSyhfAkWMY42h",
  "key4": "2vLTTsDdW5E6TYCHbkaJA8nkwhcCRYcxDqVB6WqVPxUK1N36ikby4xYQoBuEi5x7XNnuZegbBoxKqm9XV5FpzwYr",
  "key5": "3pCkQsG1gyVLdNCKSYUGiQpENk4YYHTaU7j49KphxSH5t5x4bSmFgjZdG8jfHDHkSbMH12gnN3emv3dx5amUfPce",
  "key6": "4TjcN1ntYfxx83ZSnKd9prpkvd5Wy1NQPq9aNSE7VDeagywrQQBf79wPSmEAsZMKoKqpqPMZzE9uHPP7N9x8rt1L",
  "key7": "w4Sfo92WR8voZRzbPveM6KDAGXBXA2j1NAnTJiXVvpEAd5DcYcsvob4ZPiNKfyhQadj7pkAVHsfLEMWrbkQ7TqN",
  "key8": "4sxynNL4V6yWJTKmCzjk8RnWhZuwnX775tx17Z7GDXxhwg7SEeexHH8QaRP7jRXPYbwVQmAEQiX9g4VuqNXdq8DW",
  "key9": "2ZYkCVcKvZb3gRWoUwLrtJARvm84BDTKS9yFQjU6U3JvvL9WCcv8UcQJ5pXX2tLBjoZCH46QyWXdVwXyPkjR5uxm",
  "key10": "5fnypSgrFuEcLCs3SuPapqeUj36SqunTPaTtzS1LCLE2Us1Ds8xCzhzmxwxrPy2Tf2yDpKD9inf4AFepSRLbX4nW",
  "key11": "2DCdJ9xTsuXosbBdgMN1XXCzNPB7DWuQ9PJunMbM4bfuYw2MYvEA85ENQMLgX5HASRjanb8Bj1AVmBwf6ZvBy2cN",
  "key12": "3uR2tCuX59T2EKBtk1vju9g43kmKYXbUjthZpFcJkT8LQxWoU5W3W2bDdchPjdarfsdjFksbMWUxREvUcFL5qSGV",
  "key13": "5kksmxQxF53izGyszjWa5KdjTdHNvzWuhM1FBWeNGJkKbADQKjrFXxamH1CQm9HRmFT4Krz11cAU4iHmzRXPHg6T",
  "key14": "3soSwSuK4aMMY2P4zSjvCU5sJy4EuehE23y7US8EFtGMRZgQpSZceqwdA8AVChGbSj5r4Hs3Kpc4kzMkEN75P6cT",
  "key15": "4gYw7LYPxk3JuVtuY5zPf2Pbpx2sSN6FpScaB7upR2om8PqX8YcbkFWZXE2tu9JC3WPSffpFa8RH8nCnLLEKeWEh",
  "key16": "3xopffUoWqnQV9BVV7nJMj7tvHkhaLcGTh29Us91WRf7hz5kpRBQkW2t7iNp7k6piaxajYRfBpJQCHwQSHgP1FzF",
  "key17": "2dLQXLhPdgXRhhHm1CQNcA3sK7FmoFmQS1vciwTMNFQCGBQm94tSSFLcwSfSh2ctVhR9QnR866CX24JkBZLh6Poj",
  "key18": "3vRsPMbsBa5dHv5qcd3piBU4KQUcfxypKCi9uyEddxFohWCxAAAKqVHKSzgz7rLh6eh5kbz6Tu7YF5RK2c1b4Qzj",
  "key19": "xZeRa1daaZ3KmAe1rmKwtw1RPckMUP7XRAceJgTUFUfP8BvvXxWLqE3aWUrW9UrQLjkCMKXQAfhK8jWDMduhaej",
  "key20": "5xbCgFxtbgj85KpZwKapAnifVcjz8G5M7ckiBvfwhXNm73YNooEPJRqowNvU7DUg4SCGRWK57dEMbWyp9rm6HKb6",
  "key21": "3ZsCskU6R3dBsDD4fCfnaXFJFEqmrtWyjSLuzZv7RSQxfd5SRZ5TbqvY5B5k4KAg4YeXeTyPru6h9RkQHmNBmdwX",
  "key22": "YPYKQFwjR4g3htZ2qi8HfNGeCtSV4kXmP2JWVCjxfUNCTfKEw6iYGjUyMUZcAPezFaKQyL347Zc1GQQdM9XjvAj",
  "key23": "26Rr2Buc9UJwb1HY3Tm2WpC1n4Nry6vR7azfw8U17jD3kyafAbGhKDadspj5kvmMUDqD8DBUvweNvhVZKaq9ovRN",
  "key24": "4tdriNbT1BRocBg178nwiNhMn2BnJRfpTBDC99LQjkyzSA2eeCLHSxr8MRG5TpHUJYzCKqFqnEYJV2w9ohPhMifD",
  "key25": "2QouZHqmx4zyBZY2EKmjZB8Jqk8mQrj8Wrxn9nnK9wa8oCmjpBWPKdzSnxQ7zHy9FgXTqup8tRPmabMBhCykcjrS",
  "key26": "4JvVQFu1xXGM6fJhfnH8CBDyPzGfDpNJvaPLeRUUECD6VrporKuvPQ4pXJkfnRqaF8Z5sdcprYHqBnHmMQWF6hpn",
  "key27": "kPBGS6pGiJeKqGHWTAmHueBpKMLdXVXJGWH7tNAnbH82uTG8YmGNpTPgqgvnVMpr4NmrxMjtwdEbXiZqC2RuayS",
  "key28": "2MwuDjm6WNUtKA5XW7gbvV1XFu8uNXvLwq7jB6o1pumphzi4xBMcLEKtbacDAJk9GiEPfQnjoCNHNysqSd5rSpX6",
  "key29": "HiSkv8TccYFTJmFmjXLqWdBKDfHgjFhu6Tz2qZM7LsmayNnJzSS9hZxQ4vSTENd5VLyboMdQbptBPdC4PrdjdCi",
  "key30": "ZBsPhdo9xRUA6T81Nqk6HJgNrW9GGN4p4PRauteHxHm9McKyntFjCmHFQVxi2BEDzY4CAtvbsFmNYpsz4jb58uX",
  "key31": "3ENJraXCH1fLKXiFSvCsTAi84PbP5iSspBEEaRXTJxfni1UCpY28Gfunu121Dr8oLSfFdvmNNYdNYM1RmTXN6mS1",
  "key32": "WHS5CRG9bsfXEJcDiKFT6TFyR5586nv7Rvu6edq8M8JSR6LSKGpEW9gbhUaueN18LcU4QfA9y95rX2BhMAEBPT2",
  "key33": "3Lhj71rGFmb5vPVGFGtAsfWRnNyQvuD3TdRBn2agueQ4xyE2xVZMLoctpD1Kza58FVfZaauQt6pAw4knyCiKjFXN",
  "key34": "64yCTE4PsgqUzMdDDTzkMVXzZvi67whfGqY6vgBucbfjcPsaWyYsgAGVvNS7SxZmvjiSGfUMoyWHLwKHkYdeo59a",
  "key35": "5VrAHys3Z5dv8cDg2Fdd6ZhLZdBBRkM9sD8EfHbZMQiQeDFC71fyBoLme9wUS2Tri8YNqnGHKXb33dsb6QiouNn4",
  "key36": "5qNqYA1fQ5ZVLdTuWid9niXsKoP9EnATMPMqcWjbKL9wmMQd2ik72BXw1uoDk1mEE23US9BCPE836neeW2nkihtX",
  "key37": "gtxBUbVVevugzxk7ukHVBbHEP4TGCktkk9jG2MuYaJFmRFcWNjD4dtdyNmHZdomJyDM3CpGzdZC53YzDhomxaXN",
  "key38": "3ApMATv6YjaeVbvyc9yQJK2BZ5fio55iayHdXLTidaYBh9iWYSvXJBJ3AtAEA7LuXLvJmm9sApUudRQw9q1dY8Zt",
  "key39": "3eXEV2XNduH3uaojpUdHmtxxaDaTEFrRBdG3zoSWvbENTXj8rohq7y25fyFoXYCErySxgXHwny9RDZUNTBAfx7z5",
  "key40": "3rGrBDMpTyRHbW4ZsAL81NXqySoDome6hvmmVCNB22UZuLGodxteV5aYZB2UT9dJVihxddGcc4dqZziujoTc5oQe",
  "key41": "rhDUaVokm1Vk9fKi2izwww5a66WP4Wc9nizY7fop4avA8Z1dMhdfWhDok6AMnczJaEMgmPLx2cEG9DApicRV1Br",
  "key42": "4M4buPLjBKxPDJc3tvg3mWJa25wjT55HTw8njnLa6Pfb9UzjXmRg4JCm6rhdwpK1ke1YrVHRyNXUDfiNPyvmBkBK",
  "key43": "5oUBxUD2vqdLGXPyGB8h3VmEnr7bhpdgdE3HM2sNEZB3jWxgYzgZsksZ5VTMPs2ZCvYRQTErE6WfcDSNgDPU38rz",
  "key44": "3ZGKmqMcEKsRGSN6q1NifZsRdN4V7h5yF8Wysxv3smuAGNLAzVUESx6DZvD2Vk6JxrKSb4Zo1FzcQ8TSnkMnhG9q",
  "key45": "G1RKwidZeSfa5v9aZta9C12ioxSBcTZkDBrHG7cJsosUCrRnimbaTzX5yNbuX35H8YSbnoFaz73LDbNTmPuRyBK",
  "key46": "5AQR2vvhw4btzWUeRB9mqqgTYCNKw8YNXWmsrizNGHAUJPkL4whCyUFtDYbTJ4AAwr5gtZMTGUsmmHfphsygAnD"
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
