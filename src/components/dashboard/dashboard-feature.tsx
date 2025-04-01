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
    "GndtvipNZEHC2V6AkKD8Q9dZqsoFaWSFcJC5WwwpFijXMLfBwVHxCx911XSgnygdhrkSkDZTYQK36Fqnv6mdBDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29PjBqPCrHQAyavYsikJH6G5xqAFpqBqY3jvXKA3UZjH8dFijayTXUitjaeuytem58qSqCYYrPRzTgFQ6En8DvcL",
  "key1": "1pcrmwuhxNEZNgbrrSpNS644SB2jmCcyViavVqedKKPH4tmDZWYDZyKKc8KCsqW93U5wNiWN23RAhW3ZnVUs6v5",
  "key2": "U8dBYesiaapmTrmpZPpQ7Au2pYujwVDpUbQ435RmoMt8ejszfZbTKZD5kmX2QAFHuhoL1yRZyeaNuPKihDfaJug",
  "key3": "4ng4D7LkonxFWfsaJc6Ftk7WPh5X5bZWfDduxbCNTnPt2bfkgC9JDcCqfr69zzVhuFya7zJ5gr1Hio8nX6WgqmJ7",
  "key4": "2aRtftNzwfn7qXMRqV4ojs97oWebSRTBfWodVeLqiqhFzrdcA1ti5RwpReqwZ3pw9h6JodyRY5w9HSXUL9ZCVkAN",
  "key5": "2h7kL7KTYuTHp8esGX8X2F6DRQtKvmPEaXES4fDyAsogpqNdP9QPQAGx5EmFfvEivN7eA92zacbcAXBpoH5jxeWf",
  "key6": "44Yp5J11gePGVDVDe3n4whX9tFRdWekf14jNL7b3kZFWUnwfvrQooSjnZ3WH1ep1E4Aq5pTidy2C761osVm2DdXw",
  "key7": "3sSCK5GTaHb4MyTWJKVgEq1caATJ5deattjNkYY2ZQLc4VtCaCN2NcZXzf6edrZu2Hrvivh5AKfuE3WeLLzLTqjC",
  "key8": "4oXMreKVg5LXmE9BtARKEZwmPsn2pHMAS27gfNykN815LQ7ZCncqXiJCCLQKWoDufd8cJN6CDyNdNz28sRhivJsw",
  "key9": "5CQn4FG1ofrKL8FnbYcSbSGCfAyTiKUG9QnakWaikdXjcsCKLDbnPEk34Goq1wQC28eMgpHtDtJj5NTMrxHPbptv",
  "key10": "5H9zKx89H4aSzXWnJFPTGe3YmP3tAo22BafwUi7FZ3MyRtsTRp1BRmpy5TkQAGbGWWZ2yK8NVEKHqsbnkaAotp8f",
  "key11": "2t2X4wXajVrb78eW6ZoSbApG3iUPSG1sdsCQ9Ks5RKxCM3YvkQqbM6sf6RvG9SxixwucNZdrt4HDfKbDeLVzHBc1",
  "key12": "5DEGDhRUWH9GKXC5ucNgS4ZZLf98g2BhqAt4x8Pd8yk2WgPQoQavaLjBmdXWV4c6aPb8kPQaPpuQiEhumS439dDj",
  "key13": "4ugW9XNYMhgBD6FqauNLjxj2mjtmhjg4K6aBPFLKnkx4Szs6vMz1eq56VFisd3JSR3LkShUWMMJr66pRn8a7f8D9",
  "key14": "QC9iEeHnTrR6r6iTCkzZdKpnfiYEJEhxmpUrhcrBNzdg1Ris6NMs3kB1WqYMyFFjPtuHFcgWx8SVw1je5QawKn2",
  "key15": "3Ntp2PAzNdYw6gz5Wno1z4rWEGRUT4ZuUeSu21hYSRH3tpmv2RFde6s8TKH2F9L6eYrXdfu1boayeHtfbMctniH9",
  "key16": "2WbP35dG8vMP9mWpDXdh858HTaFGNqrWWZexQmR3LP9PbcaKB75paRTRgwZKTYiP8SJYiLgWex85bS6atEHwg6rL",
  "key17": "4buZJU2u3ZMpCnwo9sMesduBpDkU8Savi2jVbQGNSP4UejmZxvzCVJPun65xFUDkcbRjCkDNdeMrd2w8tnC59wLn",
  "key18": "3GNE2pKdCTofnrc47SgvKjGEBTtycVTXMGMqrNbAwHsw55BgmQ8yPtcKs9uNA3G9k1yVqk4MaVJHKLS31aD1boxy",
  "key19": "28jR4UGEuQ2GjJaSUkmP3zotmvWxBs1BZ3KUZx5aPgjr6cnK9ShFidqFUofB6ZBqny7ntbq2yjREjwCSJKT64sQJ",
  "key20": "64kCc1aBamDw5eLwBpZNRyj23uaEvkgzdYcTQvhNbBEb12hps61iTmcoCUoD3Lxo87sT5NpX31nv6iGgHH9UKGvc",
  "key21": "22hF4Wj4jP5Kq7MdEJPU62WtdjMWmaTQTg6MuLvGJY3ZxHEySSUERB7nU3VxmzsUBxzBdxGhKWzNRoYmSybhFvmZ",
  "key22": "3RX9rp6SJ96ysRPodm8gyN7eYWSzE1o4DLu3FR8NPzvUEqGVr8VHfscfvps77hDdbxaQHkqWgrPB5i4AxSBYDPZy",
  "key23": "4qWazQdTb8KFYPumf4zFMMh1gECp4gGXayKAWRp9c6a7SNQNVvyEgUuhBEiPqVcfxs5XVW6EqHGtQxL3ohEXQG4U",
  "key24": "3WaNiMQ2qTpfznywXLRYQ8aBYv8aG5s6xPQMyz4GEjAsW4RJsk8KrWXdTZJdKq1HMNvnR2opeg9D6aED7ZSdFUZm",
  "key25": "Nx7LQBhoCLMLRDQRWcBmHcuTex9KAfEGWoxNPc7bqyA8iF6kTkQctvFY3qyWrEJDUGeXD5TqJmBZ457TAix74Fr",
  "key26": "25cquFytu8CAdtszpP715XAdjRRf2sFtwhgsLaZX4ApfVxRrHNvpeXZYVHeH2cNd5MJV4DMfvhZeyLztEganJZkW",
  "key27": "54KbLiiVydmiY1aw66afs7wvzmJGJUw5YV5wum3ZFXyXuQ1UtrSPGia4SoNQ6TAwVU8GSXyVXC3i3hAjExw69uHt",
  "key28": "iUfcH8ykhiYKmxUuvTJizDWUj9AKeWqDoSJB1FbZAEzgTLKoLDSsewW4dLgW3XgtSmE6kWnRJ8r5ioF78cNFBMT",
  "key29": "DfrduquTVjWY9BJpHCfCKH3kB6N1qaPXA1H9BkLL2Z8gNP4YWiRLxfcdJ1qixKwhMrNqiMwFb4E4p2NmsgubjuR",
  "key30": "2uDTgeBT2oDfBMqpKu9LVRzwnoPSbXJBoSoxYun1c1N7meUpWghG3HH6j4C2mhUjJjg54piEyg4gvygrjL2mZcba",
  "key31": "4odvTqm2YNtC7qQ5LJkwhxLAQy2B1nDMLJASCGLU1mvF1hukpWvKn5QUW1yQLTCEfRfqdQurT7q1pSH5UjXzDkqw",
  "key32": "4nziX8xrwYVrtBSHJsKiHrtfHX5i24BiQXF16URsbzgmXRPnmCe2b45hka7W7Jho1uJin6MCx7PUDrxcnNmEtWEh",
  "key33": "21SbtArdhtBoTEgaSuUd9dKmyBFiMoRcZ3dU42y9VBrnxNRvp7HUjL8zLeCwWDuJvHEZejuXsc6P84mFYhNWdmbv",
  "key34": "hqw3K3y9kVejfYNKFJGyRmu7Pqas58jKuhsArt35QgbEcSePHuiL3xQrNm6Q6xEhVNFybebdnNDbM3JjnW9Ew1m",
  "key35": "4Qufd4CBvsFPpH7csEJAosXx37cWCSVjXuLFx8Aqr3FuamgSfsKpQHMw1ZG5AqszjCAEKqtAuXguiLA4mchQ2BeK",
  "key36": "4tTAAhckzKGG1apAaPjmMZVNerGACeVcXWMFV3EVX5DSe7yPJt1DoUuFEukZGXFfK3HPESTWqNe5r3grEB6buF8g",
  "key37": "3bDZBGAx9wyLCuEV6f9Kj1a1nTfJ2sMCWHaeQfyezR7HRvV4FmyuHihm8XjNJupTym3t3kp5xQPWZZaXZ8fdDbzR"
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
