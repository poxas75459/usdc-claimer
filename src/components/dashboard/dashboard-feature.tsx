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
    "2VWpVYJCo7ZamGHqiwXkxtu1ohM8Cy2GgFkQ89UGJpcYuFfTGU4JvF6mWrVnbSHbMffyZdheCLzwXunDTwvHCuRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kJKBwe1tocAVkmZRV5Ei5zTwdoaWBmEuaXRLR3MgMHp79kpDd2nw7gmXbeeMuaGwH5HEYd9k7bKhbQnnEL9Qvka",
  "key1": "5UnhtcUPSqAJtMs64RVJP6HUDs1MvnfYg5a44v9iwzzo92ZVYTNAMsfLpRXaC6ew6rWvhLPF7ZNemRUxmyvhAfMR",
  "key2": "4oS3uVntFv1da6bjC9CcF6c7g68o8qbNM6LNiGg9SpfDTEcpNd2ru5X7aYCyMJQiDmcNU8oDpLeg8Mav6xH8RVbq",
  "key3": "HPT5zqDq4YhGrzfi2yvx7CYNDFP1oR51G2LVkSPu7tbk1rxh9NTQAo29KyJ92tRuiW6fgnDCodpd2iYeL5PRAtC",
  "key4": "5P5ZbrNRgWx3mZtgoNHvY8GEKKDJBiptGHshYc6aBvb54dZHWXaKn4mJtsMRikd2S83mQL3sTTnxbYMNe3bNRg4C",
  "key5": "25PA5qcNr2iH1mf7jYV6PGGnYkVRwhmFuDfZdkUDxgDT1s8x1x212RGbHzxBCAzg5Es7cfziCLDrNBbpj24Xnpm1",
  "key6": "5gzHxMgKZdoGhHhDycG7Jyo6gQ1BLrteLTTtD38QwtehU6QkyoLjQsgdUe1GTg44C2fYrnxsmxEx6nm4kQnp9Z9j",
  "key7": "4ZDG21JLqYefRwYD9CAjiPrBPrJZajpcQ29GoPjFWWzf47jSprf74MWgWetBiyvoYhEynF7xt6Vr5zzo3uDXSLa7",
  "key8": "3vRVgSTvF1B81bEx12QDA5TNoTjfPSZjm2zVecn8GR3STRyEQxKuSDLac54RkaYMage7Qi6DZ1B8X8TFGbd7UKiQ",
  "key9": "5JJewhii5GGK1aFjUw216icL77BYDkE2yXav1peZbDgcpX7AmhDBaxytXJhSz3KqLHYYpySGctN5sFR4M9ZHabhm",
  "key10": "2vYM7VvGK9X4QhsT2ftVaypHaQCpNawtHUwh3irU3PabWvs8vjEc57ChHaTvkRVEM9yd2XB9XCmbJLT9YtP9ud9U",
  "key11": "3qrpgWczd7DrK5ro7jRB4oVmfsxCP79BBq5FCRnLY1YZernBsFT1NTNQpA8CNkccgyJcHM35cm4yrDZbukN77xzh",
  "key12": "3HFXvN3cuUeZJrjb7kQKZcBb1p3Ezvt6D6E5itBfkKjn7JVM9wctx45vQsXnQXbFEgrdU6ZmX8A3VoXwegB1mMQz",
  "key13": "26qLHKYsACprprhfCXt7F4koijNLfmHx1T7AMxsScKX176ZbSHgeVkhEpeQyQDgbMK9bGVDZSH7yefcLm2wPwRcH",
  "key14": "mwtekbT3Zaw7GjXcfn6DU4gMbzzrb1gbra5wWHgLpe7JTjJKYABz4E5wkgW8Dhe7Dbp1yf2PneFvLXVo3xoDka6",
  "key15": "tjyEqEE8SooQSkNSU7ADRdgSjQzpEFgZVjfvR269C8m9jo1Yvix89RAmLf6CXFGvBDuLurWkeKFBiKC6LCbK5mo",
  "key16": "5UrSoe3rTHzAwvhMhkyqUjCK7U1HgiYvoJ5w1VbrPF18HkjYMkVdwsLd2bhEf7A48JYdAJt79NCuw1fwsLAr3n4g",
  "key17": "Ndx9UBLf7cvi6sJ3qQHJ25buYufptcypLq4yCvHgzqPe33QmMAygPg164o1odAKYca1X8aJd8Dv9tKHgbPxQM8R",
  "key18": "2C7yjaMyGfe3Yf91JGN6FEnoDkeVm6GRgeCBfVyhQhW7MWkQuvKaxeH5MYLx8ScGBYJcdvs37npyqwGRfAKDx8eU",
  "key19": "4YheCPtBodmZVNptLBRSXJgEMrgWhpY9uK7KEXoftch26sFUUwbmJP2snqRJYJiwW2FXdSaG4gDZRMELNzU1Swyr",
  "key20": "4VwdWGrZzXWUCjdGXqRqBLu2V3rSSzV5qBd6aSJwbwzmKM489JneJiGfnRvatXiDovgmyWt5TCirqUG5mjsRsvJN",
  "key21": "676qxQMTJsQ6wr2Cb98BQNNi39x7rzZdjonE6WzdeH9SiniysDY1BePFerX1XC43WELWzYbyU1Jt5wV4wq81VgHx",
  "key22": "prBUBi3R5UH5YmmoFYJbGd7NsK6Q2pqCP8wH2riFvrybujjXVmkW858sA6b87iXkaEWZdvGy2FyVFLABzUs6Etw",
  "key23": "Kv2S6GMZE4WMyQXoXzBmRQQyTqs83iMi7C8rKxGam13VUZ49Wpi2MFYFuW44cWnJUgjX9TBUXAF58Q4VYearXp4",
  "key24": "zFcuCME8xcM9mbLzwXvKz7qQQ66ayUta39h91fc9rDjwRxQJieQ4Z3zzPtKNC7XyCJkDF4kAkmNMDdqJCfkeyfN",
  "key25": "39RW7UbxmPtRZ23BBBLvXHaQGQ2nAjy7uU7aiP9qi16m1Xg8HLd413XMaN5U54CLRdhoqDtmepYKZvyAm7x9TZqB",
  "key26": "YCHPHvhfqa7MiAwQgXdkBV66zKKHWcipCinp2A6aSUw738SSavWfmoa1ZSZRjdY91vq2ocxd9SriAZwQUx1Jnk8",
  "key27": "438L4JzqNYTmqdoR5P5cF1BtPHXLn3Tmj8aqXDVECfmAdfP4wLtJ6kNfaGetbonnnTuEdtG1b83SCAjmAJiSjMhC",
  "key28": "6Rt2jijY7nBYiQHd5EpziE6rfJUkGoAQmV93Dnjeb1zousHqjfPULGKCELnESbAmc8LbzXm4tShSjgBaoyc4KkH",
  "key29": "3x2iyKrTwvEzTQTKGbtqmSczFeySMNR9FcwBCSvfHn3AhL2gC9hk1dMe6EPm9vGpNWPVzagxRfPuL8YTMPhMaqdD",
  "key30": "4oMd6Rxp88MzUaWcGMn7WVW2LYX4K8FHkMkM7NnpovNYkLCYFuJGyhYietCfquY9Ru6V6U3repdLACp62ahBnKgL",
  "key31": "5JYWj4miUi8asuxWoSuU2J6V5T75zyzMCMGMtiz1CQpVZxw4yCb3aBnUuhtTgkR1qDK4dm8uU5nJ5KG7dnRDHCme",
  "key32": "4RuuTk5EqmqayDKdxLNTnYVSfqu6VzWauXjn1Wp6pM7hBNtz4JNJprQsdsuXkt7o1zts8ocwHXS8h7PGqUr9UXMx",
  "key33": "yuD9XHDX1c1xj7Ymnh3eUU1VoVypjUsyBG7QJKcs8gdP74Yt5GafEZ2A4M5okkWbzVMPsYw8G1dBKRwhdAiz4Jq",
  "key34": "39Rzp79H9oXJDT9PBiquPT37yaEL4QBkdKz3nH1nVtT3YKNw8zE2qZqfKmAHmmyPsBGW7T1wt7bPMb3rPYaNczHT",
  "key35": "3SeFXNiNqpafHwbAU5vtRJ32D6KMwBQ3Qt2mnSd2ma8Tpn4wKhC6RhFzUkqfSdYrH1vRcYvH4op6m3ikWZyTkHCG",
  "key36": "2y9jXjV6eoHzJUqUP94Sq35bsrytnxpQCHdvypXbwxY3MmD4uWDTsrtyEQKKVTrz6odThSDcsxbVcCPcGn6R7hD2",
  "key37": "ex83K26dJPTn5zeR6c1nX74BwB4xupUnaLg2FmsPYeHaR8BGo3P4EVQAevDhnW76TfkNtQn5UWeNXentuXVxocU",
  "key38": "44N1kGutC5NQoazFqc18mcjxuoGqXtyv3GRoZhP5HmVEoMFyaJu8oexdS2PTLGmcvJJ1hGEHiayX9TNimw4FM2GE",
  "key39": "hQo1P4k7ADrYhGMKMqMUSpJEwpQ6JF9XMCMfVfwqU8nWSXBX74KeUUVMQmFzvcMCWKByU47jWiB4hbAZZBzYRG7",
  "key40": "4LLqEaw2XgvxkCQwDrM6wjxmSE4829RHPgc66KE5b1EnSbUp6ya3u6etQVivJUksv2P9AmZp8c2pPkMkD2AuSv5C",
  "key41": "4ggrXera2A92pukN34fxQ4Pw27VihA5SJR8yD6eCNgK95uKJo5G1S74V6593V1s6wUpJ6EaJTQoGodNUoFj6JU4Y",
  "key42": "2T4ST6M2iSGW8fPUgbDCWbH7BeqRyYLLwxzoGvjnrK6gHKFrL43K8JkZrr89N6Wj87KeFbzRqfbZDJNHYpGBZXVB",
  "key43": "4Tsof3RbUk8YUgFRZBAZ6KkBxAitF42QSNWuYSRrzwqFhTRXicoeaSyu8P6u4JohokzixUcudz523X53rtBtHBKu",
  "key44": "5esA1HL82NMqpJei5rRtFk6ZWqBznz8v1rQkbXZcrPgqAq75otj582Wye58seJm3nsvSXAFJeorASPfpPQaFfH5w",
  "key45": "25R17p3UM5mbU7M82WixKfYdnAXmSubvkEjUJxGcPxZNhB3exE9nWkqigntm6zRrwAfDuF87uSCe9rYurV4EA9E4",
  "key46": "3wrzx8rdevPPuVX32dZYzZi1Ud4tqmW5nCPVcYLjoZ6xochJgi91YYkme3Uj3rBukauXY8p28UCBRD25WBMwthri",
  "key47": "25bonagdRkQ5RMkeTvxQ6S3eJFdQWnfeUa23RfexWijRaD8pHswB7egMdRkS1m1DKuFgqBpYKrzaJDStrjLHzNWS",
  "key48": "GEjxihXfy1EheVLSq3HxtwJm7ieAFGpwRhFVnCYHSVPfUoadnYWaZ7iSdRHHcndDjG12z47uaaXUX6667PrH8FK",
  "key49": "3bw4Uckb3CK3bzQguHD4U1EAuJuLmovMBJTCEQ6zRYu5y4PArzqctzJQAnUyoTDfwpL6QEj5hvLJLzDUHLFGqZ2e"
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
