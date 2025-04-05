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
    "RRHMvEmGwJBkDSt6NBTpEm23abBupNWN5H5tn13txrheCNKtn2GkfSuAkm25wp6H4ejmSKmstd8TtNFMp8KfLTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DJFuwV1EdwDBXJPqTKzzsxwozLxatJSZ8upwMXwAPLQXE8p1hUSYPtr4pAdef7fJsacetvFRMYGteMPT3tMTxA5",
  "key1": "SrwTsTWt9DrdsykuiYadne4EyzraABooEH5WXf28aFQqkuoqpXt1kRLuiS28V2WK6ALu9eo8rPx1qUTYqXmAqYY",
  "key2": "a1cZ9XxueRGej38ZQyfUNpQqZqnhNik98sknER1ACjwn4TwmtbDUkvqMQcrxFxTYLVvFsfuPDtAbRDUXt4umFXN",
  "key3": "51npoazAyTDKuFu6ocsEMb2j7NEzXrB1eafAi2uwGTWPdsmfQz19sgXXtbNRix7Z3QsrrhYhe4wGjujhhkzuoNzp",
  "key4": "Z37sjFaHco1va2ZwQZPNNoV2T78FvKaWd1F6JqBvHkwgUufMyVeBX2B969nZNctqQJhUF74F1BMoGaoP3rd3faV",
  "key5": "59vFECHaLWubzoDhiQyHDcwFLZ1JVHknN5YNVerfZsHEYgTH3wuUGfggbZqiyzq1hVSMD9pLkUfoVMgUqMTCzabj",
  "key6": "2MraTZWfc3t1CqiGk738rQ3Aisk3afiTXTS9fmQ38gWdNNX9kZZRq7xgMX68E1skq6sKCuWdQ77G1WrYMaRyuQ87",
  "key7": "5FbkUvC8EdrrqwCuxeKSJfxa1jyV2EVjvCYuFputf4svVdhddqiZsxdx6xY78cWLqM5aT6mUEH8vpndTyZpPbNfB",
  "key8": "5j5uqXk8KrnNrh7GePTez2v1FfScX9JthYkfvpZ6qLY7uzxrrkrznfZE9GYzZPgFPk5KXwb1VS9oB14jTAKL6eSg",
  "key9": "3qCWoDbfMuNL8vvpfg2sVdD1yFXbh8iuMphAzMyuyqZrMjGqbrhWSie1UUASBqn5soKNEajLCT8X6rZR6QmooGRN",
  "key10": "2oeh8wALhD9HqKBVeK2eMttm2zaA2jxeFYRy3FkvUkhooeg8aGJo7s2tZVi7mgZpQUthAyQHQHL62xh7EbYRtCgo",
  "key11": "kHioFhQWcdvRfecMeyMiLoAQSMg2oLHgUYBDGtxx88s5yUznvRXkHBBbAYVVwEh3QpLySRwZCNVZVw1x2bUqvSy",
  "key12": "3LHaT7NghERZMFUKHjGqfXrBsVW1hdKjz8o92u6ubKBoWuK8hLZwaMFsgSmNfP66BYZYLiVwQ8waqiMyReGqdcWH",
  "key13": "5HedAtac8wBVZaucJJNoNbAGdtwjTKrkKRBuuQD9hGo1vJ4GDdg3tenwoVHBMYQy5Q3HQiuXZUVhP2e9NEMDQ5ZY",
  "key14": "4Bc8szztVGiBYFSNRKR4NPTGTETydwh8UxrxeAWTQt2Wi1hXQDwiDoTA5XWQT12XWmbyxgzTynpLvwZqjG1XpUJj",
  "key15": "3mqgPnHURUbzSWsKfnVS6PeUpPRo6HWG52BpdrZSoSTwzsBEsqhaK4ouwHiwboX7iNDxTNUEj3ANmoP961YCdKBG",
  "key16": "d2f1XneUJWzX4Zi7YxT942nNyQLTRWE5n9RqqUFqJY8h9LSbCnAAnRsvGAzy42oJxBkLFYgYtmrKuVKdnjiTxnh",
  "key17": "5ytGh5tV8nvNTshRq42NKHeyG3HdfPCLuumxaLd77i2iTEgYBGjX1JgffXFswbKJnGNdRdjUFwzkTFSbAKPJY1rP",
  "key18": "3TTte3htA4a8M3bcTaSirnnGZtQxbGRAkvE8znZwtGuW3NS3RgxYQFCMujWCRyDGy8ZxyJcWHEuNLD5iRbpoGK81",
  "key19": "2XZNp5zNsRoTHGmKciKupw8Qz8tirg84nX4VBkcrPUhoXRkJfbM2xqVa4B4jzCXjUziKJcusmTvyemSdc24CUpZ8",
  "key20": "3zFGuvsGgERwimR5FXHCisyNg1CXeEjbpjRKTjXrPcZcZ1sRvCXwnYDHa7umrpsXuX5goqAHbaViDUByQd6JY4yz",
  "key21": "3dmJPTTHdVxM3kfwNw8syAZzc2tyPW4kNNFFECa1B5iBzXk2Uee8ymtei8zdA8dyE8cFBzuGEEeczaLf8fPHUU1q",
  "key22": "5nN1gn9jpY89F7iufFkdseobjZHfK3BdzXAqvD34uFpXEFH3uQ7xyZXNTAocpe9UgKyckRCnmCkyuJgHYEejxcNr",
  "key23": "3wCfkeCbzQuWVbVCNAXLSbS6VxjT5qsL6nR951NqC7bh7BzpXfyo8LWxL17HMME7XFtLKu8FJfqw2fGvzU1cD85Y",
  "key24": "379xLkncYe7mDrojLPWmAbd7BpdHDzamPLPQKGqMzQ6QfLt28iQYmDA9XGvus2ctuNB7oQLunDALaoDdvhT4XtnB",
  "key25": "4bx3z945CM3JixmFxjX1wHzeDmLMHck4wmZhACuzyxJvDPwzSuMJdqmeaTenfogdYxALHPxboxUqk3faW4sj7Epa",
  "key26": "5ee8GKFyYqEBP2GJJnFWFCZaeGoGEuhXQ7V17z5JKAZpqHpLDBiYBdNav67opVXGcGrqakDrdS9LXbFFMn7tiQp",
  "key27": "53bQg9NWgX3AkrmXgAMhXra8FBmJA63D8Pi4o9XsS8tF8z9zZ5MumGchfY56PesHXLtpNqLBjX59S8mbWdSE825Z",
  "key28": "5ocbDuF2T7jKsnAAHkVH83ibAjhAaSgpoGTfkbyecwiEU7z1JuEJsUMeL57emj4wrvEDmg9MccWJajYWWLshz5bu",
  "key29": "4aoPMjvXjwofHXgt1VRY7KFeptJovyvCN9ydxGnggMWwaYEjk75s7XGbRM1DA71UwwDT6vDvmMJ1wfE9V7nGhe37",
  "key30": "2MAD14SeEJvKVPQBZXGJ5AVF6w99pwr9wGCg2utxHeG6PHgDrVWrDndm1aBE5Vg4CPsn2d5iLrSrHMEpzVH2JtuC",
  "key31": "3gz4nofoSAizrKbifSCsP9uYzWTSXVwZGaheSgipQyKFfJP2oTb85FBeibyZR7NqUWZPBx6opDdDaoY4sHvahkWz",
  "key32": "3cQ8tbTXQsKdRvUGAcmuSxnu3tYDXmvmAuF69pLfctHaGue2HH3yipvaYgvjWJfBfiFQdMGzyU5vbeivQjqFb3pu",
  "key33": "45LDkwyXvZijh4Kw9CR1dPaiEKrv7swqLi34zxjBrkXzSEvKtC1ejhGfqk7fGcKLs8Xk7LSshiBQCnyHCnXZSKnA",
  "key34": "4oAt1SS9YAuYnKLfkvE9zscEy9GkLJTAkryjxuPdnKo3fkUhnJi6kMnrHZY28UPr6qNf56W5k52jfGbSqyGzm6va",
  "key35": "2j1yGsD92XJWZZ5VsoDreiipuCfoF7jSJZfh9EDQvByXsoBcMAyqavqm12fFu4PuN8VtsUmziwzVxKjmKinxrBJg",
  "key36": "2hpsLh7gdws3eLiFbNmZM6yh86GiCn6XvDNtbEHZ59XRfviLGS8KUDcWGuT8JVx2DLmccSkeG3YPBzSdobW2n3Zs",
  "key37": "QSmUCZNZ4QvJgxXviRsaXsgRiZbfX1suEq4N3T8CuL2HYsYNQamwB3YnMdmVzLuD9ByNMtoTqR72gjHEgjtpdgd",
  "key38": "5w6NURCDEiLNVbYQFrTFDptBnQe44bceuEiqPQny7QTb1pE8CSJ7Pnq4SwJ9tufN3hJAAzq8nhmHUqqPQw3Zgcw4",
  "key39": "49bEUEGJeSL4qQfCDG7uvsKRwVEJmNDEtw5U1fH3NDa3TvdTLDDYLiCBeu7HwmZBzRkcC3ftMmUZ4EwZ6pgnykxZ",
  "key40": "5teinx48QUfnhVbADDittLBitHeTkKUJQzSFTfMs9XqE6vd4hLkRWAbGvemp8vnePf2SDmxahczxUTFE6EPp6wQX",
  "key41": "63JBUqz2VM8yxyyae6ndgHbGWA2wKLkQiUSJ4zL9gLeYxYhiqtxnmfoUdrrQgCH3yxvb484WMGHFdAEgmghHRNvb",
  "key42": "5Kd9rtFxunocGxBzJCuTVqo7AHkqdSegSh1zmrRVr3JNnqMUikSbgJCi88Ew9uHqq4cWHd5K1WBnBRj9JrxixBVy",
  "key43": "2Zf1nU7HzpSZupDENDdYakrGxyMiLUvfL3HS2gmNVV6DXQmWEM41w6v29wobSX5djy6TR44xWRGyUWgX7PzRMmr2",
  "key44": "3DPPLvS9xwR4pRaa93V2iRrdgoWFN2S7UT4UhQLjN5fubmcwnC7UjMcL8axZs9ySckohcvBkcGBVygLqQ5TP6DiE",
  "key45": "3AmeM8j2sqLVJnAVyLL5XTuba14knNYB67G7Ymqnhb8Rjiz7HiWFN4fsh67WdeAydHRRfE7e4pGBSi4TZQFbD74G"
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
