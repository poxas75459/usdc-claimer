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
    "2k6DChwqpTkt48zXfhwMn5MvRRkgQ1UmffF5py6HAB7we5UgnDUR8cVcZk7KJCagkbUQY64q832kPG8hT8Gou8cx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D8HhMVHU8fvjSPdFA1k7C8KLYrwFdRDZb4WtC78encF1Phf5qjYX4gbBizWtfN8PXFif7L3uQJNCSKFzchsFmMC",
  "key1": "2cCcWqdbdr2JiXrkyoaRKy2Ysx86Hhke1Rb3kyHEyZsE5ARoXDXSW6KBW7wVGmoHzHSkfAUFmsjwygtpneNP85mp",
  "key2": "3ctqnJbMBLbq4fR4cn1Li4hkpD7VcgDoKzYXWFaxXXd3wPQJtbXzw8ePHmhTNJcmWymZjthANQKgn6ZLhEamJrJK",
  "key3": "5kdV78BhDAGhGvcgQq2u5MjJkYYJ69gnvESJLZgs2sVRZBBKtqq2MbDkf7gQPo4qLvzwuvJVr7cJCNEj5oWKpgSg",
  "key4": "65zo6vNB1khVhTHs3JqymhEeUTGwkpQVLQ29PjKKP8Ptqff3VrA3kTsKoDFkyDx6MLDDCfqECzrXeejpso7aA7TJ",
  "key5": "3vHTgE1Ba3Yz9ZApexoLEnBs8xKbhZsLjV3wSULK2ifZeSfB3LLR3wTSRw87JCLs7ttd2sZxK83USgTKWuwrkb6k",
  "key6": "3f53nT6ZPmPsZJKmRWD7f225wNR8zzuFVG5n2j2nmyx7Fd4svMXqoJmCygxX5mQqLRGJpGkFUrC56ffTruWgtpg6",
  "key7": "4vxoCGDcD7xz3ZNVTjdWWyUpXFBhQPwUPKjiFsgBQ83uZisk9GLNB4iDgmZwx6R6wc4VckE2uLZJUFNm6EgzVMH7",
  "key8": "3oarJccY8WyXTRFwRSQG4W7Z7QGBMscrD6VS1qMMNRvLeZUBm66pS5hKvHdjuB9n5paUbUWibxHHkr9acygTLgww",
  "key9": "2ruu8EQ5BygZS1CxrK4hrwqeYewkHxURMaDKjzHgJVb8HLubkJgX7dkuztxZe8LsEw5stYLShzkurCyk1tEnra4w",
  "key10": "86rusQXs6XLC4AU4QKkKdBwGiSchDDzqwHnNQh2kmdrbmjDNMCqSTBpNFiYpG2EfVxuQs8AbhGXxHzhTGphb7ix",
  "key11": "4u55Y487UVkSNz1qAb1fNqgQ6uAbJQGvXPq8kPYS96ReHAPDX6BZNQmHoWh1VLJBJqv5xvaxbHTqZESNYJbNVHLc",
  "key12": "2U63tLMUqvBEQPhBSzDFZoygVp1ARViAvP53sMw6661zjocwfZtyzykXRfEvSXdRh4LqfkABAHpEyh1q8rHi74WP",
  "key13": "5j4MNjsdY4uKA5G5iSEr6JoDN7o3mQr3qymR4g7ZF3Fcsmrepewkxg8L4bQoXNzvDdkkaNsit4YDKvjyBCzbRQ4W",
  "key14": "4uRDj9u4tUVWWSAuAwj1DYaRMoBjnb867UtvG4uPQDeaxDFsc1ZDQXGu1Qx1XMBQn43JNJYUJwFC8LfCFp4KnamL",
  "key15": "5Eg1mpd7rgk5jfGA2i57DPzAi56PcuqUrGT9vDf834VthnRqPprjbBAaanVk97qcAeETXtjig4yhHAr2i2eyXkoF",
  "key16": "zRSrq4uzMMwdGh5UJWDRXL5mW9jsvxpFHmXZnDZJgYALrqoXenLScEwzGsikszsBiShavFmMMeFQQnH7f4PkAs6",
  "key17": "4G9txF4hhRGBHCf88fap9BX4ow3xTygB2waBNZJuvSicRQakEkXJ7HVfciCqcJ42nY89127NQ66eZEyEbKynDWT7",
  "key18": "5id967yQyEfFNT7ojCuawC8ocEyyVuvxFbwt6jbKZWgHv15hryu4K19PU71Kx1dGyioF5V4HxwQfXeVvkAv9CNW6",
  "key19": "Ea4FFmCxxBafikKKBbA3nCWfdmxb7njHbv1Fuz1hiyFdpZXSXCW4fznoGFskvmTrwczYN83GmgSCMkPQLT9etzx",
  "key20": "2gwekqfoxCkkw7VtHy1fg3NHE5SiJQGysHQd7KvigAxe8pBFw1Ei3o9Kbkd1uGMCAaGLZwpr229TGZXkY3qKpBhp",
  "key21": "2o8WQEtxnhVEnhKzjiLznhGLGzyjQKhpTfrbYXHMxApG18Lg1XrzLwhdcgcB59X3zzk2uE5ddrhdv8BYxnewYguK",
  "key22": "2Kh6aGQQPPh73WYMqQDJBvZXpatr1ArNLG3eJ4LLFz2xVRk8hrAnUduue2xftCWVcNPcpNQ77vTPNj2cA91d9dqe",
  "key23": "65UXoftPQua6uK7RFp1tPaEPmn1vDK7ibyEJw4aZFWbiruXZXPSBTNLqaN3M3zHvRJaqvNJFCgWvrRx8eCX6WWH7",
  "key24": "4JhJuB1CXPX2F5iFHtewofUMDq5MHJ3jXLHPwFx8ERR2JBHJwwC72XjTZFLhLirvLGWbvwQeTPuWvQ87Yz7Wjpgp",
  "key25": "3GZVYaJo9v8hNCisqog3XxHjHe8cG5CHbs1cnU71jYxfGw7xxAJiWERTFbRcGFHLvQgkqYke3sRsCqR4v9caWCQJ",
  "key26": "4k6uuVSfPtxVV47SXov2wCp3W7aLMwWccAuVxv4EtGTDQwyXnSP7qoX8kshzbTDc4zUGaS91A8Suuf76QxriHNeN",
  "key27": "2f7iwW3BXJJxUAMbdHkNiUwAMbFkCNTGSqA4fELe1xvCCe5BZMynK6oLeRGNLm3YvM9LzYQDddn3QoUez1FUKshD",
  "key28": "4o7GcTYJPWgUQqYEkrzeqDQidaMraw4pcwm81fuBFtFqHhJVgp2JxSJk4dxbsRWLVqwHw4VPvTUsCi8h1tJ7JVbY",
  "key29": "5SgEavmBDMo7m7uiHRQV9yGUsBSezZrPP77Ktp9cnDPfxY9VVqyYhtmR42t1TGN8G2ihnGi6bzjRCfobGbnypoRv",
  "key30": "3pyWS7JFKiC2w6Fn29sWuu8Tin5rNfCH5fBPgBeh4TzTA82TgvgqXdrdo5vsajFqw4dvTCSjkY23TWVD8cy7vCaG",
  "key31": "2oAdg6oQDvPe4bLxt9PonJRVBcXhMiQnaJsb1Z4QKakeUVJVkSpTt6H9fG1BRVKSTR3eywBt2gkqNzzr3jfLbppe",
  "key32": "3QMV1etvQu9QwAm2SsfkPgMQXxeUqKxzPzbJZMJbBqtw3RK6qCnW9XUiHYpeo7uNKGqQymrfqMq81pqXdeGJgBnc",
  "key33": "5NjGkQAUGvnfdTMa1xFQsYuuYxJtgogmZc15TWwjioLZfJkzEN1V5mmj6HFx3gorMvWHeV5bPVbnbDKvTYVkrzXC",
  "key34": "eURcM1S6edc8sCvT3AjApN6mUjUisPov4kZXeRb8eNFVwEfh2CLCcJW7889AfyEqXnHrQGWv9ginpx9uDjjSrvr",
  "key35": "2jGTgykD5jZGdLvkM8SeSAvFipvs3BmqDYswrSyLKe46vbFMuLLtzzSjY59jSVrAyxVUEPgXY9hVSpDoPBvx1LxL",
  "key36": "47buJNeTvxwpk6GAddwFeoXhGN6nF3fUwRPePbMa2yUD13CZYzHcR4ney4r96E3SY82FTTXExL9xan3QhxNsT2rM",
  "key37": "2f8ebiwiACF5mhVLYmR9P4EiyxKdY6iGqKAdSVtHrgLwmjiwBiMUtaSqjde25fX3BhBTiXgmaBEDLnzFigTV4Yy8",
  "key38": "3QF6mjuA4H8jp6CZvcqaaEKkMFCSU98w8dJRkCGkWzVyvy4hUaGaqgXLShGJuzCxH3GnX3y98LBBggSDWLCiWgPo",
  "key39": "3ZqpUbgem85k6mZuotf1ZF73AzKjRVikGJfkuTmYdRKemksKkckBqnecNJq5vC7oNiEr6i2w6aux8WyGXjXBEhYw",
  "key40": "JBr17PSLSkBNcbQNSj1HYvcnNmKGsARcTMCrtzQPPHLeA2kNDprG1LQQnQEHwoiipekmUAMBXCm3ziwiYwASvNm",
  "key41": "4GyYggSK8nUwfKZd9RkPm8BYVoBytsuceybyfU3S6SYYyshUEYC63NgZYhntQ6SC71nBxLnAudBY4i4GJDPAfpTm",
  "key42": "3SC4A6n2hZhVXm5SM9KhEYPcFV1mF1953EJRM3mMEQSs6Riv238MdCns1e25FZCtfm3SqUsK5EXZmJpG7dhR6XWD",
  "key43": "2Zc6Nyd3vjGufeTmm45JbViXMXznWj31B6XC1dqkgkx9hfAKWVy36YQTGABB4oBbBb59NQyBggkPLcW2cnGqu4Cz",
  "key44": "5pf51NhiTmHuRCCehQaNnvY6wx6KDfauFE1wKJZeompR1K1WkhThyYoY2avtienaoaXMbSZGFZ2JkTqoFTJ3Ta4g",
  "key45": "3ak1wZkGPrYCjrWM8mzcYfcGoNUVAjP5oGYPkKKfN4QYzbSBMn12Jy8esCMFqJVo2St8JVYUrSDCRvvK8H5DpNP7",
  "key46": "2Tc6EnkYX2XuKM4YarittZqA3Lh1sRsGGYTkADLQwKuwV8TKmgux7jXexkqKkxmoQyNfWdE6gLSyZ1XkVTLPswVV",
  "key47": "Yr5dyGXwz6meEkNbQiJApex4S8P2ZL9mUnk2Y56jyTcCAaA4pqiJvayVLV9sSNsRed5DWAHpvYtYKA8REKzbAof",
  "key48": "2Tf3SToJjmoi85EeTRGp5BKkLJJs5Mqb9njE8R2EBP5Vih45NdBXp5uAtKz2W2bCjBwwyKzjF5VpYXnymHxf6qx1",
  "key49": "2UxRpDB9MGjEmQvWvUY3WwQJYKC1JjhXkosFGaJu3n1EX4mWxHUb8CmG4z22YrnLhkFHopmHMZCLWG4R9YMVvEVb"
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
