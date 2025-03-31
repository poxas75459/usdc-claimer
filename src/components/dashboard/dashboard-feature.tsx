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
    "pc49sgceYNBacCuoWykGGLtFCRivFJLvDJH29qnyjunaR6cEFzAs1LirtA2Ydo2Ts4sCRMY1krQyyKsy6nWDPa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LfggKUy6wfnsVATS6vfxxJ1Wu2WsgdkbJMNeJC2TaGcKQ9V7121DrWMjmF4JEhwvfK9YkEEvx1DTrhGTMB6krtk",
  "key1": "XYL2evxP1554oktbCZDwPAKj1nHorJP5GP9EE2QKWva1J6qoAozDzkQydgLMMSm4A2kdWoYoaWht476fx1KUZdT",
  "key2": "2wJ59jpnrakSrgjVkR6V4qGrS2DUzkwpZhxjUmXB8mmZfQExdcqroSBSE1xVmtrMUsCCUK27vRmPdjx3JHQF8fyi",
  "key3": "2r2ezs5m9iEccPdu3GnyhWPZmQF5YinMQp5Gp2Wv7wFRxF7GdcuZTmSzth5QbtLmFnn1ooyktntsLryniLVjaf2G",
  "key4": "4GQqHnmgbgjTo7rPdShAJLYLpBnZk2Zz8XRx89WFAmBxHsokBKoTEUjddArk33Q4RE1kZrHMTZ3mhP17aFBhVC2P",
  "key5": "4VPrccWJ1q2RY7ANKcNQMjkn2EkwCQDZYKPBvsnThuGFUtZzd3aH9eALHyq5qcAksVBqaJ21E7328N9WGSykpiYX",
  "key6": "XbUbnSbrahJFVhEkeozaVR6cweqweT5X5ccrd4bPCuy6z17si8TWh7Mba6vafA2fdNeBNLBhhk4Xvn2ZzVAbG3r",
  "key7": "4h5ReQna5vJ4Sr1toKKAhJKysn7gNvd6XnvrehBkxizQCnpvAaeoVAmR4ENz2uFoArgNYfFfLwB1vzv6jV3NBU4b",
  "key8": "386Ye4K4jcBzzzaA74oq8MQ2CX4pfdj6SSeMt82jRJA2QUFdqp5kawgpS6QWeqt6F3BLLWCZ8iGudGZJL783f8Bn",
  "key9": "ZqiznwWuC7WVUGAm6nNXFbAjsqD3dtVvTdd2tX8Y6oKHQqD4qnbLiE8n6bmBbKTN4JbDfpxPyARJPpVxPd4Urhc",
  "key10": "5gKqBcRvNC6vwUzpHadAd7R4r1W86JFVVLgVeitdkq3AvpPsMpPi5D97pacL7bfgSMgTigJsKhfQ1rEgYweEK66k",
  "key11": "YMa2eFxtDo3cCqTLYChupUAMTreEmHTGvJAcVD7SJPM7C6cYxRt28b7kQG74u5R9PLWewiU8Avqobkn9m2d6ZZe",
  "key12": "39Vao29Uya2zoN6CpYMYmjVUJpueFztMbg2maKqqvedpq4fDQzahcTGZ5LcLHGVVWVM6ssCeyjBqh5DmYLow25tS",
  "key13": "4W9QnpkRgPMmVHEhGZZ68XTPfGFeANPftnp6etKpXCiCKhf1EnyJfArQejMpG3ZnkMpCVyfJETZotwu632Z9aJcc",
  "key14": "3Jo82L1uYLZNEdEdCaTYmrTdtLgkgGZNvuurNhjobiNzD15aNCw73WkYaNx2EWASMEvJkSy4Vx6Rx55KPxQiPMjX",
  "key15": "24xdKU7TU5DsdEdgHfyNkcYmf5D1vnnjjWoG2b4Bex1WZAjXv1nDqRvhEbNSNCYEALPDYtyipzkXozkJWd4X8dfY",
  "key16": "3AbpqW3gNvPSJjGUDchufT1Jv9dW7Q6qaD57mHPTnwqW9VYkA31DBsTEv8V6TC1LpKN1tMnqbTCawGvPpPn17eW5",
  "key17": "2Wg6uo7pQQicNcsvyeR2PRpV9Z1mPwjaewGp8fJ9sQpNGopR3K6W1MLwGFRqFjDGiMew9rD1idPneyQMmjwyWpzX",
  "key18": "39jDtrFdZBjYvK9UybXkVya44EbmNcHpeac2RySg4BP5xDvZPLV7ysPbxTapjbpMs5B55P4EpoVo8MvNZff21L84",
  "key19": "42C1QVutRxJC6Y3mvKgrTiu91RtMMzKjC68N6g5hKHw1CthorQvkng8LCEHwnFGTN7ppFbJbgSgQxQrBGtZRKLmG",
  "key20": "5imstvdyWp3VpTGzpZ1Mbf69pyCVbj3KztH9BG3K92k3aXMNSsEoQgqthHrSGkHdD9Qy1KxQeg8RYNGaQafSk39w",
  "key21": "55PhxgXq4t7uhYRjLPn1sTrEznvxifbA5JoVTaTCcvwbxpExyXMpdSPK1WH7dfGdtEwVKzp4CGwHxWANp2o88GdX",
  "key22": "3BFsr7H9TTFFweRpEADvfhhGnEHnTTJKpqexDewWTRFWrkW44Ymf8NgwMHJPTrmeJasxX2qgBksnorYmum4uhrVb",
  "key23": "65EtqeS6ZiTKNKCgVAzQR17732Fx7Zf6DMPwmPGpnhb8dbcvBYBo6VbyCUSq9oNzY1wPmDcQhckNDLmBhNuzwNcD",
  "key24": "9ntxnpb4Yh9EnxrKKvsWD997bjx59HA6qMaRZdjoWfpcUYotDZeFm4KgxLREQkTsyDbvqifLK36E9UfFsKJP1AY",
  "key25": "5qVXJpkrcNJn1pddgcoetJYWpceC2dGT7VczBcwaqFfMa9n9pngqQPHqk62K7AsaUvj1NifpeihUvMqW3HZ6qDn",
  "key26": "5UZo6umueACXQLv8N9wBGvPRG4Zwjg5GfgqfLt2dFn8p6TqzGQnmNkhz5JXFFaMS1R957BJjq2z66nUUDBQdMPSy",
  "key27": "4wWTW2WnvGhiEcFRW9bF9ZviZeaWpXVgVznXm5rtxCgJKW7sMTggpb2iABSAHB28wMDzqhNYqo5PBH3eJdsAkEK3",
  "key28": "2nTSgQ2gJvhptNxXhE76khmK2C68V47srzoWX2z8xgBV6kz98jW9Jp3CUrXALJGgidFuDSHStaVRj2vjVAGr8ZoN",
  "key29": "22xFbnJHaoAuJjmoY9uK5KskGTSeG8z8BYTz9A2abWHuFFLz44rwV4eSxnTk8QinQnXzA5ajey1vMerL6QHAZ4bP",
  "key30": "5FyC4EuP2oe3hKeaRveTVghVrGPMqQY5DLiAkiHddHTvEhgejMK1xwFyawekRrndd6kzo8dUtuWFGLZ3F2LcBkmq",
  "key31": "27Fd8WA8frs6dv9GroHGknrugnvEVdWo3yh1tnMriLVLzarbu3jk2MhxiSCekTtvgVVeXUMHYYGQc6Nti8EHNiNe",
  "key32": "omMXAstAr5WGq6Z77T6EVsrshd61ub7hnZHFEm9NB9My7xHLsFkKFiMbrnvhZWwJjXEE4rgsxBVBqTNhYAsMv5D",
  "key33": "4XSmJxmcGSoM3Eg9xUSVCXiqqwAoG35WvJVvK3NkRduH165ZSwkqBM7GCNraZd8pnMjiBCvoxfj3zLHpooU3bvwJ",
  "key34": "vFS2YSF4WRqQGAo9CYo7Ymzp2kpr9QXV4Xziat4pAsZSiVZ5DKibdvhmQwvP5pARRmjp6L5fsfMGwG5G7GLMCzd",
  "key35": "4tUJdhY2PfduLUPQeW7tbeUkiQMrYRtFqgjKhFjA1pvGURvUbTJ692Mis8Z1yT5gjRyrVSMZHJe4JbriDJkZjTjP",
  "key36": "4GS4qwneGQcjaYnk3rhdjH6JRvX1HQybJEU5yc2MeAq18THNydPKQwPBXS1kWKc9ZJD2AaCGwagGPHosaQe8i8WR",
  "key37": "2JA5vHV167xKZUvudt5yvz8KJ3PQYj9x1twwr1MriG6puRwx9vxzasw7v7y4RPJkSKBKG3YM6nDFEvmMFtRAFT3h",
  "key38": "5rhgh4rgX8dnW1vp6XvqHZvsjHLTiheeGKWncCXoo2VuDrbL59WLfTv8JrbaDe8h5h8nEYDjqz4knbjZT2qY1rSq",
  "key39": "3mvChsPX5ZyvhVkXTXJWwADBSZmjq8g5UpSBA1FEFWWx8LfbWH4kTHgy1Fdassft9eiTn4ZU6wZD6C262e9VPkDj",
  "key40": "21hMib7epJ27bszjpT8YBdHBrn9tB9wsPR5VH9eAPBi4jwWbYLhrv8HJ8mv45h6iHXFgkp7LssAL4bQLV1SET9SV",
  "key41": "63J6R6Ee6MMmbhXJWvTsQZ2Y5VySZytnY5MJezjbBYtvKLz8bVvDnqCfYcnwxEBrnAPEXsGyrVzc27bCU4F25mMQ",
  "key42": "2yMZovsXMBjXD99T7gZXeWwsrnuJ7svdstwQyyER657AxyehAL7TSKKEPU7jePyQT9QaixLCsjeSqBL15842EozU",
  "key43": "rB9LKsv2VrifJ1boBAU76jRpHTmUyUMfNFW77vrCAp1JUJpqJDfcQDDhPdRrwmZ8Y43HS4LuqBjgSnEYZxiT7jZ",
  "key44": "46QAZuEP7jCbLnrMq7z2Tzd4s7XE2HdUSHahcBt7H8SWtFWbsCeujCbnRqQnoHZVmi2avXFE7Nmfz19u6UgnVzSX",
  "key45": "5TLfnBq4mLxEDWzMLJ6UTdUqwwzUx5c2sSnVzzTrA9VszTqrwFvRRToxdzn4SuaxKy1beTBX3HwK1rkRdZ2JzXC",
  "key46": "C5Gc464qNWidLLZp1xVLD7iDNVvpCzvEeozQ5asV81Sv3fTaWe49A1uSCaR8hJ7JgQMDXQfgWQSQ79KgdYt4AXg",
  "key47": "5mZcWqVik9AzWXca3EUpARuR5iTD8oMNpBzW8y5MykL2RitYRqcHHxtkG5WxZ3ZiYvxiuDQcuUhcYKzkcQwZ1uFg"
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
