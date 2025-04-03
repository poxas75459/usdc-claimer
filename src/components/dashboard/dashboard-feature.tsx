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
    "3MrMVxLa35qs2k17BpTL18Rx156t8MVeTmSGtgkZ4FPiiuqWcqefcsNNki2WPPWbLAPgJGSWK1nTKLsTvi8WfG6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23vdVLpHHeza8Ma7CEHoZdrT4f8jsW71fQ6Hs3LtkvnPbmbvikCt1J4FvKjrEzshTMxsiy9TXqinCpRVsxX1ALA6",
  "key1": "7aPg8icsSyQv9T5yrBzQZxiYWwLoDnEUiAuYn84qW5euSE3WKBeVqiC4dWro9upFP98nsypGdSTzvTsTCJnkjkY",
  "key2": "71qkUUr7QQNTK3e7ePTtcwWRDxLuDkK4ZHou3VWzvo1KozNaGw7Voh9oAkNYuFiaczwXafWAuUEhtU5ERarqtjg",
  "key3": "3RsUAmP3Pz6JDnAAGzje1H4C9zBrGEoB4EpxVSsKnrdWSKRehWpkyTbppK1tAigxjUipwuV3pPREDjg3maogxopG",
  "key4": "eJjYvUFA7bDQAL17zmyVf2M8gTbCYCquPbCUWLQYU7qgeUPWdpRhh2MciLJxssPhgM1mtUQ4vHyHqATPeaq2CBe",
  "key5": "BYoRMEbnthnJQX3RctedNSst4z2hJfiJ4xDSiZgB2SP8fKz1JCLidZSRCtaKu5waddLMGDPzP5DShPBTVDNxMxR",
  "key6": "333v1FowuCa8raTtQxnP2CUkDRvPMGAYMSzssCzKZG6J25tvfk3hR5NCMEFbx3i7NCzWWBVvNMiAkdExJXyDSkMh",
  "key7": "56rukCBxUrPRu3QMJ1zTeZ5Xeky78F52hepy3Mrpezh7AmwFszJKMjPxy86pYjmnj8xzkd7CDFuuTh24RZr84V7g",
  "key8": "4PoqMdFZZBQHNypb3MFv9a5zNRqk7K53S7xHS3NqN9dYiMhDRhc2vgs7RK2pSprZJsQmp6xpbSRwN7fByzReQTQn",
  "key9": "4YHkXt9tELLy2Gg3CRpEMGwufGQGhYakLMatZy1ysZsi6rHHzefnCGYaUrgMZhVQp4LVKiTkZNN5edTabDG56jnW",
  "key10": "59iqVsT3ys3Yxm1EtmSnFnpyzj5fehfQZWj6zgZsngQ3f9UG19ovMhtfVKm14XJrWMTwBXNvhM6AhpWjSGVKDZoY",
  "key11": "324RV44unSAsN3gdHRKDfDrUnH6qKgmN1jZQakPZSR6CUn8tRTAc3Yt8kuoVDmLd4tHwSL6dW49ZQzh3kc6oh2EJ",
  "key12": "3DEwUtkpjasyt6C44qRyo3CtUVkEn52Yt1gAhZmyF2F67uV9QhV4zAQoVaNinMmWQjBR4wGH4esKKP8ZM4t35QQ7",
  "key13": "22ERiBLPPPrUxhXfrXRQpZ4qtsAX9VEU2NdXd86LrpLPYg1QmCjubiPCBiQ1HLZ1AXzFDYSiomiCJ3Mpw8UZb3Hh",
  "key14": "4bkkCbi6x5fNPGyS3AsHohksvFsUqiTmkSKHyd4HKNi9TmdKNrtSeBT9Lv3kPM1dsH2ngYVCSvautDkiziaB1MNe",
  "key15": "34z8jQ3A5TJDrgXEUQwEesiQrNZMehG3kMJd25M3MBLC4M37n9wD4rzgsYnFrhreEMefqmeP1X7LVA7RX5CXvssv",
  "key16": "2avBNqVpQRUHx4R45r3UYuLqC2GXFZGbky6mwTKEXFwq8HM1oemGpdFuuLMUnDMNMMYihiGQFjb79d2TiMLhpzCS",
  "key17": "3bc1YXroUT7hv4xXRqY2GSgmwfHw7G6KmEvYXVjgdytv9rUmdxUNVjWszmP8Gtsw8sKicrbhiYAc2AJvnCTBa8BC",
  "key18": "49LBipUit9geosBNLBWLwosMP4uzev1gDVXbe5t7m14wKPt6xhdUd5QjfjpiZwghsADXssXWuJdxTZzbTDZikTiv",
  "key19": "LXyC7GoPbjNjnQSwFSh6qux459NeG23JmATDcD7Z23BohmEE2PfKPAwPL6iXL9taawCBv6xotMyo5Z69F5yZ4Cj",
  "key20": "3JHGEetq42QM8UrCaLJNRcMXifgDiVzw5kRdB4ZfMvoebuzeZZHYQeh2USbUzP1mB64XMj7AtNjU4DBHjoanqnPX",
  "key21": "3uUkkGvXYzRWqvNrs3VoRG4bVJhNPiz2UtfyxbQAyAtngQ5huR5vJrxBsrcsKsvMoCLcg1PgB21jA68EyVTzqeiG",
  "key22": "4LNX7apEKFdYoFkEqAs3yc4vsXRZoNSPGKfAe3cfZydLvBu5AWG5XEyUfDcBHQBoZrDTNcv8hLkS9V7JXPVUunRN",
  "key23": "5SZ5x8MfXpAsQtjGdnEb5uDWJuF6rC1sdJ92yvSA5SKL6Rdj1LGAjbRkQTSXeZY3ttfVQGw2RD9yeo8RFVobUoEb",
  "key24": "3WN5rfdjUGsFAmTTsvYSA9TQ24wfBrYUYGHMvLd3tQU5uen6q7bQkiuceoCmtvTqPRnynSwBosumwtZq9tGRMPn1",
  "key25": "24RmsoPUEyqxhwt9Y9WkMmvmJWGimKENQr45fZAPtJ3n7CThucAUqu2tWYHWriwiAAowu2hdf9gu7TswRbQGuKXZ",
  "key26": "5VKK1cqXegAySt9SP15MeBasJE2g3TLZmEdxHSZVfLYRzMSWgUNAE3hhunYqtzpxQkeUU5Ny4RVfzC5TM86o9VNJ",
  "key27": "2E3NYRBQcZWvvr6BGHohexFEvuCLZuUrXG17FqaAFXdDwZzxiXbSoPW8dMdvdoz1jMPusDNTbqyc7mx4n16gfR6B",
  "key28": "2DK43mDe2xTWcRGZLdNmB5jRh7jXjwaixZmpfXfyQeK8vQvt2SfjqX6anmxywJNWHxySWBjW9e7PvHSMWgVuXGSG",
  "key29": "5hj9LK1hePGWJP6zqKmRF2qErJvqwahJkhKmkwpDjmFt93LqsxG5wNpyQ5rxweuvSM3Y2kTLc7dbpy7tFDfbrNpf",
  "key30": "31hqjFKL3wcctU6basnBaZELfj5jAe5uM29rQARdEftvYBJHeCJ1A91mju3rf4CQzMFew2j1m6diJUZzBsBRfxtk",
  "key31": "2UJFgkZq8JvzgLRpE7gSdUrJ2fjWKLwxpmBVnrLF3b3kU9nqYktNtN1xGJVAgyTXcg1YzpQeuq16FVvnwrDV4pTJ",
  "key32": "4wPuF1NQWSPzy3pp69yt6orjLCXkGoNPLzzw8GoXBgk3KNuzobgLNBRe1XHodwF3r5HvkZPkQxHDyZ1afAkDQtXF",
  "key33": "4qHrUrJLTBYKsd92USJkeLHyDRTNpH4fu6E1pJdx6gPixPykd8L1sy2q8TZcEJMTaKHnrdrozgLDiJvgwzPgJU7s",
  "key34": "4LTLngzowK6DpVv4zhGrg57E4QrHgmc78xHeNVWbSFEPmkaxErZhjHhgZ54fzmW399LFh9Jt3wNWrRZpudC55YhR",
  "key35": "4KhABB9a18bxTKJhxcFiJCRMKCcLGDkDsms2Kn46MHTj9cfUiobg4PFGKjtq3tLswkfcFYVW21qaZS5zimXC5ump"
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
