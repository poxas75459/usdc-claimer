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
    "5MVG96fWhzW6acp9A6HyVygz6dSARVsugAv4yzdZeEhJ67qNnQ6o1D1DUdwzcgiB419CVrJDenB8Cd2p13TYMBHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2maAXJfGts2bRJEevpx1RTKnzJdb1i9bcPtHpVeiCHsVrmz12fTEG1deg89Z25i3mytoAJGffjromE4EuERBPHCk",
  "key1": "2AEWhFhWATpfwbfD836aznNMoZ7jZLq6LxmKuSvy3rVAwePpvBfnxPY7ubMGcmxBu9kYpkTzrsNXe9EBssZXkGV5",
  "key2": "2gYoc5Py8Xv6moWVvyVf9cjgDnFZ56dQUSQrbRAvYS3znSqU6pXmfdDWzUbNWYECGyn1Gmrnq5ZBgjEcaHmBdz5J",
  "key3": "3pBf4hGjbPLperFwKRsJd6Eji21bVAC9HNMXvPnbMTKXpVzuNvEQ3tDmxHSDWyo9tggzS19f9EuGXsDKjKJWoymC",
  "key4": "zPjR28y59udSpLikGYiZ9eT5Bm61pWxQGKYgq7pQJ9cRPW8gGKz2XtQyKDcPfxiACbBHjQ4f3265oAdrRyiemUX",
  "key5": "5abKKCgibLvMJxaqJdwuR6TJ7kauHKXkyyYN97i7DAMVDYGq1T8WZCvZM6Esp8bQ773Yb21qA6nfzSYCpMpGRFeZ",
  "key6": "MkRgviZ3VZ1PNA9ifD7iW5n5R62a79cu6JuV2BEXKQe9mcNVwGcoiZfss5Un6DRj7sGw9PLTt45SazZiLECGZvg",
  "key7": "4zoJnEZ8wNtxynRRtc3HPvs1QrCMZ4b28nJiUBgMQJeN8HyQhueHfQPYFFCoJZjff2CVc74x3uVsZFSwGpUrMurX",
  "key8": "Hmqx6kpVimejc3yvCT1AtfLGs3kQDFbDePmwNQwqasWmMyGnxzacV91mAXitZn73LZmDf41b4hBbrh74wjED6Xw",
  "key9": "4WxMqbsMuKYAMU5J68neKRVkhQ8LebsBTGX3LWBvReN5PRdVRKvvHWhhjaD9BHneK5gbxCcMry2aDe5F2R7Jpay4",
  "key10": "5PGmNgcpg8TYK1K8TPMZ5tMrBrb31zQ2xJCsAaZqkdheE1kNq4sriybEg2F8qfcRP7h88yriLcJgLbWTDsc8SFDD",
  "key11": "2L8fcofSzwM4ui67HHdNNX77kPbHHWhL6VE6Xp1WcWgFhwAp1LBE9Nd8WXaKwmKFxXj17LpRLGk1RmctBouYbEiL",
  "key12": "5zNfwpWwWYkkXoQ5kn2JofcH6CwekpiCWpVXh3JnBDqWFkkgAUfFGa3pYbn2UBG19UskGVEMz2jtrfeSTNFtNMuu",
  "key13": "3tEfxwabmzbRYdfPdmuBVfZF2kNsXZGnwKpPKhBUahF93x5XpChHwYCV11YcsGfNVWzGSSaqswcSFow1VFdPqpWn",
  "key14": "2JNLJwFwfR6ncTTtzfF2qcXAyYuT8hZq1CforNbfL6sQR1SanehBsTGAbvNXis5Pe9HPtyuxeFkaTcmocbt3MEKX",
  "key15": "3CefdatXFN6dSHeMB8Yrz2UzLgR9exWpqcaUWw4mMuK9GDwnispu3dvsapcRyiBSHoxGtApc8gMkKCjb3NGsrWJ5",
  "key16": "5CWywh3pBna81gkoAmfUS3Z9SgZYtzKw7n6VU7GmgnWta16AWW7oLgJTGVJEMc8vCdHCYg766HKGZU9dFtiaW4aU",
  "key17": "5T2MQZYvQ47d2Jdqvu4cfsm3Ky962UCXy8DujJXkdFq334zxNNbLzEPRReKYYqEk6WzAXr1gpMxP9g1q7RRwo1X3",
  "key18": "4WHSPGJvjTaoBvzcQM62tApxiE2yL6KxRJEpnAuBi6DLEmnp8EV6BQQWv9fHHZx19xC3KSuPugo9KHLJpGk1siNn",
  "key19": "2R49wxkjL9wCLJmSLXHAuvwRXJWYFYcMkqZvpkR1bvxHgVy8fVFsyqa4JJ6gmt9kSxkhtKAjcSKH1TpcjoEUJm7t",
  "key20": "aUiTQ36P5BEKxpYhUcgRo98aZbB8bdFbv1ECfWgdd8nHHJnD7gCwrtD4nxvJTmftKJwH4AxLcTPJu4ki6vgPVEE",
  "key21": "DkBqX5mV3AHsP2w9dYD8BakC6u5iJupxqPcCFco7CJa4R8irWcyGGQTfBnAFWdAoMZonkFzSU9kThKSC3D89nzz",
  "key22": "5XjnSCTDeV2rBri6V3S9nW7z8H3YRhfmegsz2Q1XCdGDmp1kBGqHhwLo5xzHYPnsFh2RE5CwUELaUJgZEY1GJhXj",
  "key23": "4JDMUkiS6YoYCMA8g9JWwVCBLc7DBYZ2gj8k98CiopyRKPFdjhuLDawJGQHKiP3182yVB34qoAcX1XVnSXdXQWp1",
  "key24": "5vv2iCjwW1HteH18Ad2qZeCnZhizFkpox4jGL4EJw4jUG19yGxvGkFfxF5yrHcqP8xYjLXxHpkQpH9pnL1iiZQRg",
  "key25": "3u8dFDEwEvx3bAX2Mqujuu5cgPC3kS3ZkEWoD7nD9SH7TLkyUFHUeKcgFa49tFm5frMU6NgABiCAoCZajj2w7gGT",
  "key26": "4Yc2BZzbvLK3LLUhecwdwsZH9AfjFjbijh4T8L4h9Wx3k4SNCS2HWNXAPAcXC7KvnjVWDLBgFMZ2XnQMviQu9m5R",
  "key27": "2ieXwsJpsEuNJo4N4J7knf3dvNNvuddcCrxppLUnzCavsSGMTURJcrz5GarmyFj46Cs6n21vUNSMBUMXBPWgW8EZ",
  "key28": "3jnchtGXwniFmwxSmVTr7TPuAZMLCVkyrmVdVHBn8ETfuLABmfkGg9DVk3UDiq5PqinhPigRDex6bn2hzJ2pj1Sx",
  "key29": "4QeNfZy1BHnH8oWung8fMAUni6Yn6htRCEeDrZZrAaGC6c1QR9gsVG7DSkFQa65oXJNju1Tg69y7U2WsjgRhai96",
  "key30": "5SUFmQSDYSoAK9LiKGGE8K67s7xCA4yDj15J1o7ReYPiHuTVVv6xKWa3HzcQdssY3YzKirJgsciK9H9qku13VSAW",
  "key31": "53wthaFPaw554UyuEryWiFPTU3F2KELnhmR4Fwb4Astx8gyjvHXUvjY5TMQk141i8cRo8N4vPw77ZMoWUu2ct7cJ",
  "key32": "5GDF15FQqZofTE8SSTvQpdxyAk99NVvEY8khA1pCdfznCXqH1EE4s5ABDBx3BQ53NnY4W4q3YsQmgKgRjnJhrboN",
  "key33": "BTDgLgKjdjGmPS7EsPP315kFU9btByZAKYkfVi1bWGZAnBDdT2UPzyKXZUkVvqXCdRdkKUGvm947Y2XUNd7Lf8b",
  "key34": "XBswhHp728EUPdXKKrR3LMSU944Rc9aeU4im7xiLuLm67JcyRdZNSmjmjKBeg4U7nKupx4J1q4zKttXGvyYsTKF",
  "key35": "3x9Kp12mHboRkVfpt9LkRbu4ivfLVBEyehwRYZu7LGs8GchYgUWRkTAhvidsX8HZ6kzRA1sWSYFcREtvr8yj5Wib",
  "key36": "3k2MRc9sYbJn21WqAw8BGnDQHb3omjNJfewpP37BzhaMrUskU9VWQaSw99yxc4GA852oumraTMutRFa8eL6zWdGW",
  "key37": "4NX9yHuCbe7bspbR99U1Aj9B2BogzhywbaEMtpxhig4J327r5bZ9d2c32wD5ZETXyR2dq4Xihj8N4pz6WLPsZRYw",
  "key38": "5JJR14b8TyfLGeiZMyXssSND6JHtviWXgH9syvPhyLX7rRYFGi8xwLeLuCC2LA8qYWwJgRvy23xtS8AE8Eoz6VM1",
  "key39": "3uarTM1jZxJSPsQzjGjwG7e6a9wzDwjn8qLBu8KYWd7c7NjAEgJR1AcHqvUteaLfMuuajH7FfCydymMkKm4jNnuw",
  "key40": "2jztX7nUVVNpMMqp4NpLisfYbZb1bNr22Qg74FB6YXgrxs2X59fnpv9ct8v33NBdE8kUKFHRgDHDNM91SwpVSRnz",
  "key41": "66umsQmmgM2hxU1xThmDYDwT6yz4paZAdeb7mEvuXJCwgq8vBq8owYJbiPemJkmQVJTykWedkeypgGGhHvpTeHkR"
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
