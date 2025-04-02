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
    "5ogXVaeCuapkKvBZZdzyXso7X1EH6dfmgCPCu2xoPn692XByaDvBaMMiyyMEHJwcX2sEuEMyb4fya2FNMkKRyzE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MV9gjsge1eAiSyGxK6M2AoPKAP3U8DPYKb59fNpkzavs6jGcgxa2bxgVkHrAiWh1A1SHHKrmQC3K52tUYYrHc5H",
  "key1": "4Pszn8oYZ7tBvS3pLvgrVv9XPv9DBovvew1wHePMZARHn5GrzVWUQChZp3wtgV7nSYEWmhLigybbwaryyjaLuTCv",
  "key2": "5dEZkF3bQqGg5HssvjZV4nZpR5AZhC27uW92YHczfNnwBTEatVa8aBkGaLXY8YwmDCkkVTYvAb18C3dQb954F7qw",
  "key3": "3QMwG9ift65MRqguaNpiyKJw7asLznzWbC5oSVpD4kSZH1ZsozUYnCML4o5YBSPqhjuLzp1p8tQeFyPSXfyHPiA9",
  "key4": "44CoaKoLeCDZftkGB9ea4ppmy4Xc5DS2TeQYJixXhs2sm6KnLhFysQETtYtDggjiKgSVJKmm5mfdcL9brsqG9Bph",
  "key5": "89jnZm4ib6WQ6u7f3c7c36wKEAoe7u7iu9SdCvr4z9GwPzyHBaanrmoxr2gr6p5qVeg8v56h7ogsCWuaSAyxyKy",
  "key6": "YSV2Sf5ZRq98CxctMQWYoV9e9sD2d2MqJVdSdfsixnpYxVqFQ7Z22DWiG81DZ9JAttBcaWfPSU8QPt2uzcv7qSs",
  "key7": "44kU2s8ThDBQ6RVCgCoBh6VoA8p9RwA8JESt3rrSYcsbMUa1ejzeipXjy3ENkZMXbcCMszqtmVGrpxw5xGRHP2oB",
  "key8": "3iJJQqCjvRYm9QCGS2Q7SxApRZTjxtEPsdo14VAbMb8jptDQsM9NCsWrJNKMorSt8rtz61wzB748rFnksZFRAsGG",
  "key9": "aESqGrBqaByJapjRPM6uF4p81CsvWUdmewWMJDhL22rARE74pi8B6jLCHroB28gdVXCgcmAsz3wzawiYAZwSSAc",
  "key10": "55R1kU7QKDY9APfx86cjSZ6hqazZRAAx8Y8jwZHY6zg3jNNNycfTT2otKrf7d5o5ihgGZiS9zkbgFVtfj3km7nw9",
  "key11": "2MDFwKDt95DmD2cEMPqmFuTPqycn7Zz3k84bzsTELcPFShFYqmQ5xANFyehy2nYXqhMrm3XSBAUAk8cedf9gEGQX",
  "key12": "JqYASDX7tVw11bEztKUx6Qg2qtRMyg7d7KrBjYcLWBeh7GbqQZePV6Q2K8TtwhwoUSEr32dkZ4Xmgm5TPpMT9Ge",
  "key13": "5hzfLjjfUP3LGqewvqyDvtZm692YVyWkwxtFGwprvrKTziMZRcFnhafo2QeR6Me41TiGSLw4DgyU5wHdNUaG4BVr",
  "key14": "4UmZvpnCQt1fLmBihDrpouFqWa2VwTd3KKVfEkFMAanKGqg7Z1a3NxJQ63U7WYHtottemhX9nzJvk45gb4Fhm9SS",
  "key15": "22XBa4ZFNKY93W1jpVJ6BMp7eqtqZsbYiMFLA6WCTVNwmfvLTfAeG19JNBfZaTavpapcD67RxV1Zahm3Kxr18jPw",
  "key16": "2cHVzPAg5ZkV8zZEoQGLop25wYH9HqHTHnX8V8MzTBrA85n8HB6oNhNzzE3u2irh9BubdFa3jqegBaHrtodji5vK",
  "key17": "5Rs5kuvFzUmDhn2R3HM3LmFrLPdpRa1ho7Kxgz6zVNss1XDb8fJ6Taf4QmPE8qREfukkV77zb77RDJ64VRoW5Dz",
  "key18": "5GVyZgMyBLoGKXCMUnjbDzpkoEpi2PknRaymxqSRwTn7FKbsgzmrxQ3Gm7a3MUmDVaCCUsAx7ntCM89YEKzykfTA",
  "key19": "28FWVhtpjs1SvR8cQJbTgbktE72E5tRKthR7FadVQjMY3EHspZ8EJ8merPKu3aFnDDNcZnjY6RijSpcMSZNB5ieB",
  "key20": "4XYDbodDmSaeS4MgnmLDNmR9YMG1x8p2QtLwAVPJEuL226uqgPjnyWvAo1kktyY3LvsTjYjc8TJrnrry8mM96goH",
  "key21": "2Tr9B3orhThVxgYZAeqtJETF9xNiTbtqCHxhrS2Vgu7GFh8EAE8cZwtgiW4onuqDwjF4kSsWhAC8CLfXbhLmS7Q5",
  "key22": "4YLsqmg6ibo7AMT7h1821hsv76CibhE9KzzNHLSp6qGNTwLek7ckUjj1fKHYVkcaqN1X64tnNCQt4YmotG9Lwzby",
  "key23": "4moFpXjk8UgVhS3ry2SU3CK1mmmMbPp46KQU5Dm67udYAPK5H9tErks9N9bRrMdehxZb65cmU1vos6jBVmH7ExQv",
  "key24": "4TZEpGSf8dtMt64hqcsZPQB371yKhrHdUZgU7sXeUNSoGxyprERBk1rf5qUYyGtd2Ui2Aq9m8CSoTbNk72U9cKYF",
  "key25": "5chpsHLsWi7vLgCNr5Da4oXzUtcuJNdBkjfkZiqP3DH5WikAcBg9dfbRX51ArmbaijGo2c66JkEGmMMpXcf6uU1T",
  "key26": "2z15sEAqg8BHVn6JQkvReZ4JgC7eyzejDm5CBS5nXTzMwT6jbwTe3sK36VpKvxHerbCxupEqbRZ338V3A4PU6RLg",
  "key27": "q13tJ4WNjPdtKNm3ThvDA4rEC1iWuKDmk1x2cC6FB73iKqGDr7jkUqchy26Qg8MyrjCPoTU9YZ7LT7rcWbXjMT3",
  "key28": "45CtP4uoSXAu4WuWJg55ziWLrnYwapL68Mepfe95NPSZWd9P7sxrxT6YomLoYfV8b2Z2sTP95kBhAHhhbY6Qjx7C",
  "key29": "2C6NztjErY99oTyE9ntbeY8SwEVvFheGGjWPmKmdhMcayTjZA3Httny273YajvWH4ZWJGbuy2LFikqwZwmjzz4o4",
  "key30": "5ADdhYQiYcZ1GXzWc37oDk3SMvTuiQaa3syujtVtAfHJpDiEhPzVihFboQpFWmqKFSz1q6di6jX6tV2T67fLoeYM",
  "key31": "34XXtFNhbnFbRUkpyEmcMjMg58oEchCBTs6bRfk9CoyKbSCZmpcdxnvfbnEdzENmWmEnAK4ab7JmoJxqwxqnYd2v",
  "key32": "4seBbDxU8mMuU3yhEzdvQkH4UChKySoCb45Qt4qC7Hjnt82YtaDNYaHgKbFV4VoqMuDbULJpoiGwoB6eKdmbfavo",
  "key33": "31L1N4k1iNgL2do2XMjxrF6LDM3jYeeF19hAt2THNRuGfD5pjfcmPMJxyLmUvogTR3Nbcvz2zu9kaoEyn3WNTnoy",
  "key34": "38JJvkMbT4ZrcdHB824Lb8CkA9uzLNc9s1XmVCtc2rprhBbkjevRDp8Vo4PdaViqmAbN4GsVzn1BZtUgpQ58HJKw",
  "key35": "2JYMgikW9WNMANY9rUGP5596fjZUXMpHqjQn7ZN9gqyNjv5VmThSM6RwhKEQLJGHpzxe3GuJ3rEyG3i58GzBQRUS",
  "key36": "4A4gVFjipz78ChAe5o42ZPCoTFeVhHTddME4jsbX3i96Y1S5LM763jHacNMxEs6G7DsbSiNyfPYbrNASQ4GUcL2r",
  "key37": "WULLJUw1tKAJmJ9e2KdNqVAuLPa6nQQQctzGQH2SE68eqBhK82SvydNBXRAkceN7gZ5mGnEt8EuxQNQD7csXLPU",
  "key38": "2XdmgDKnAbyu1hYsAUB1jAZHZDQbvSJN3AzuuCywZcuYxhZ383kZkPSmBZePPozmuU4drageVNgN7GDyq1vRuVS1",
  "key39": "3AKtnnZ2PofWj4Gm39J84jDTvmfDT3urr6btFsBfQ4gS1fZznr6kMmKYXzLdgqKLJYrdzVLVM6ZqAhHZLCujgFc7"
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
