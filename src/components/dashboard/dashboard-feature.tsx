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
    "eEMvhVh2JisGSPJVKH2FiJ1r76Bpgm55Wrpi7gw7NM8tyfo2wc7zApM5npTATD5KAxGW7v87EZpH5AW2QEQBeru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f5AVB8JvpYvLwiZpJiTRV6c7yJDEiE4jd5un8joiEYh841hQ7MJD8FivMth2eeqGKyVkgUXWY35XdPTgKKeaXt9",
  "key1": "3rERFCJhkt6u2pstN2hd7izVqZoiwzMkxuP5qBhdWE5GbSSVq7dK2jVavyjkW9gF96niEiN4Cb5YWXcsRdGmjN6M",
  "key2": "2gvyotD34ypKPGdrWY6BznrHGi7eomubYNfAYt5a9aha7WFRwRXrfDXfWNdZwairMzVEQi7fAKPvZJNUxRDyEe5V",
  "key3": "4wYRQsL4UW7gjZDu2KTsA8SKSr3QD5vFuq4FzBj8jwXDH7KM1i1xjKEXuZquJ168MpbqH6oidQAUjGMcP3KYHtkK",
  "key4": "126PMeUqmp3Px5v9WWC7cTHufUdbb1iAgRSapnTtVyQ3xdrPsVgRszYfhsCDRBVGYHwMdQFu9WJK6gQswCwzLZok",
  "key5": "7haG5RZbUKmgndtjdbMjDyUMNdKGgqR5FpW2ivkqqbAKdsRBUkQVSifPuF9oEKZJhLKsWBJAz7BiUpMuuJBCvzw",
  "key6": "3vS6Hbgman7saStfN5yQKQVeD9WzjGfDME7AME67AzRyp6BTdqD5S8L9i9mBFwcsD3uoVgU4kf1pjZHNDf46pWRN",
  "key7": "3rdM1QKdpww3WBQRAM7irKPhSPj8VY5a5rthNDN8wx9p8wwYxW21c3ueZX6VLVVhdnnFJudqBg7AUSCcMSpqERrk",
  "key8": "3QvtM3t2otibea75rUymQLaD2Zas7AfqVDfWMXAHD7Whor9tUHdffpeHR8nkGs1XA6SE3HT4QuFNYrpDd2h5ATUN",
  "key9": "5gBhpyAC3Hi9QHbzdziY8jwM7YRS9atYoajELoXRdRZHgTUNTnJ4aaifd7tsiQfwSLbDqXXVMRMMQNoxrdSdhv4H",
  "key10": "4YACp5L8qaqmqF6SiHGSwEzer8qpdx63xmhd8hyrANSXJTiEcUoVBFrp2Afho9DiW2MZYWySXb1CnpTT64Mn9RpY",
  "key11": "3RV97uD7fGdbs8NLwFPKGXuLuJRLj1KbASawVaXShyt1N16cDGJgt4i2ih4hFp5oeMdQTA1R9m7o9sPUjbEgWtAC",
  "key12": "UJ1gAQrtgCD889BaTXfYtYyYrEpjDfyypSbRR8XSpPmEgyYASvQdB6kEAx2ZL6zevf21ef2RmgdCW9kY4PKLrmJ",
  "key13": "3VeFLeFkFcrRF6St4Y29tG5VJemY1MqcLxkFu9wifiSjJvLjvyLV3HQ4vV2TrtD4dbiMbnJhgAUvZjBqwVp4CDDo",
  "key14": "hMHwsJyHoaFjuYiWwYN6jGSfvTwv5eNey2ujcGZJqMJESmgfropjexnfpm5huacunypojoNhH99sbi1Jjha9Dkg",
  "key15": "2ENuctNtt8oygxCTu5PQ12LRY6Spupmxv4BsRsebKRKn6MCSyRin5TxuRY1BqkAZsgKaoFQPKGvVTGSZ5vnYU4QV",
  "key16": "5mWXG4jJ4Ewb4WmVvzfKaKXELMa5gAY9ag6nZ4PEUxLtyMpv6zxotRWpP4anG23XcmEKLKF2GEVAUBZTbF6V2eqS",
  "key17": "4p9cFXDekYQ5qy3u7a4Pu8qQAFDrMjmHAeFdepTgeeP6ung5fELNXPoRwXFjUctTn7PgUAuwdAf751fY4zAR2kKk",
  "key18": "2whXAFx1we1RY8XYX61k4n4ftVMZEtE4eUmr9yVZSwGSwvHXUvUuoBgrFCBb6mAn7yfHMYFxL1c13wBEXUofcdMF",
  "key19": "67Ga5AviCZuvQ4V6ChFPiz9GmrSRF8KVuBFpfv7RJL6N1HEmX4FKTjXPkUesXfopWJCZUYq1GbpymKxGvkErZwvu",
  "key20": "3hnc7CosoSnY6DGiQYPC4QgK46knKG2UF56cyMtURsqSjvwrNx1TkCb61iRiRomefhmERhodVD6FvtcGNyzYQWJ7",
  "key21": "4bE8qKmo3tfodGka7cPLDSNS1q87G7NL6aDXapXtyoFXB71poB782gkhHJaJ6f3YHHsB8zzvdPbacMawvgspUBU2",
  "key22": "5fXDkSM9dKBrhpgWytkAtzLhYHWxbDYevhVvPMQ8XRtYwyjUK4t5EHvUYNiiPvdBNhydfkt9n5Y7xPVSKNqL8eAf",
  "key23": "epYVhEZQhx8M3EG3tW8Ynh5idxRMLWzEExhdCwF7LBGx4nmjRbWPaQ84NPdmsjBRwn8C4rwPn1nbfXVxjdHipps",
  "key24": "33MZ7EUxRoqiZ8PrBUFiJswFHqi9gbmHaBaUAUcTpvhPohpFkvnuGD7a8jTZpBDsDYD6F2DJJodokd7Mc65yrWBE",
  "key25": "MU8jm7E7TxXiVKWbpUz1DwzwKyoGp7SZRwZ8quiySBUvbtcCmpoaPx22pN4ukPBiYjVwBZfGf5u2pTNqMXgrDcZ",
  "key26": "4ze2Gmq95uf7qbDUS56nkrUBVwe45rNdh4uyQyUWzbyGLcnvd4USPEN3fwKfJyud5AECJp8bEX1TE9e1Dm9cvJau",
  "key27": "4sYFbhv666u1vzXb3x7T3mwcKfLPp3P9NCySw1pbuNmz2QWSfTzVayBTtiFE1VV8VS7ZpP7XaArnHVdHhP5Vgmw4",
  "key28": "2QfWn15BczvCi9ZzMrjjnvXH3N5d1fjB7685bok8kachYnMvGSHBeNYYPwWAzD9judJdyYDU6iPYUndbwYPf9brG",
  "key29": "ixy5v4EK96Scyju8V5SrwoZZTt6otXgvhKwcEB2qotK61MEukUsp3mGLe4BD9zRRdggat8pEtotazRhNJKbLFny",
  "key30": "2CAACGP8CJZZxBJ7MjH3Banom4h7cwaTUvTThPsiE1GAXtY8gQykgqVPBj2FQA4oy8i7ZhZYBeRR3kYCsuci5bnR",
  "key31": "3USHrLGqfvi7kk9zYXw5KEVmdY2VbeudtWF9GmuMFMZFZ1z3j3tDvpcQSj1XM3LnhoVzqddekoymWzgPZK85f2FQ",
  "key32": "2FK7L2wtfawW9Y1ZtPHEhSfJFvKwfLp1ZeBwM1kDuy3SFZcNXzhMdRrwYoMq96YCvXD89rv1q8RcZmPGx8kvZRsh",
  "key33": "4k8V8znPKybYEh2gai7g7EKgbHGTC38Jwd1oDCvgo6r5JgrETLtpUcxRK87LXwwp4gLBjoptCvx5fR9eDMmEPZCN",
  "key34": "2HJLZEPT8bnYfaeZGSHrEwmRBUJCa8xhkBuhuqRxmLyZwveKLQqdR5YDrb1Y48kEhfSexJrQFvTmQXSZF6pkHrbR",
  "key35": "5M75N8LRfKNkSACgNoLL2mDZyHfxj8RK1T5UKja8xfnBWgUhksbNiU5W19qxUoQDoJu99DZWy9D4Lh2wJPmWsFuB",
  "key36": "2e6qXVNbJouF1JEs3jaXwQbKJiFfeQEa72VwGKxcE6b3t283czr5jC7TXSBZTobG2bimfP6yQKpsdHWgCRmuvEBH",
  "key37": "5maTKVinZTduhTQQLfTDXARLdjMFMx5pcr8rLYq5vxrQfEkakDepqaoWrxQXzg6ivXmgKx38kuJnCP6JMiLgym6U",
  "key38": "6NNj4zDtoREo6YvraMCeabJzJJifSFmUwqbWRydAb6QUJnd7Y4g8M5LoLUeVJPTpy3oC51QizDQWpPo6eg9GJo6",
  "key39": "65cQXPgjeTpwQJ7KLkq8Tm6Au12KVXzqQqrjXX2GMVR5BZdgDYJjUuNheWC6ZwwZVQBW797MSKbWnRv2ZyrPAPjn",
  "key40": "5vASAoKdvcyw4xQecythkHcP9E1Z2hqTWH7Q6EXn3pNVSXBVUqza9gGUB5vhMGyzjgJQiQRdRMMjy5fwAzFVzC64",
  "key41": "2deGr74CkeRGjrxWDmvmkYNSLLvdmNvVY1AeP3WQhKLzh9iyDeSUSyngZ1AmKE87vZxUDQ694A4NUj58KXargcd",
  "key42": "3NyuK7rNV6kKkjTf3DPHNKLk6YfzYck6MRoAkuoMgUinTvSiipZ4WinC5TkPRubZWUK2zDbBL71t5Lhk4PSFTLny",
  "key43": "3iHV7NyzqD4ZAAgo1NCPcdmVYriLdajGQorne5pwwoMH98hujz1oEPGwzZAgt4YoniiuePWH9Ghiv3zmhx5Avn2q",
  "key44": "33NnzSnthEGVPgdekkueLaEbPNY3wSKhVEJQMRa7Fc9b11m7xC5wNZ9RH66kDfyiFc4SziNXaMcqA7fadS9H2RDR"
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
