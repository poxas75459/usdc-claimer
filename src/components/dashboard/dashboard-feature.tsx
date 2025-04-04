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
    "677TE2LZ1feXpeM4oSjvEbcTcUXHisG3v9uztufAdJAKBvmXVAcyDvk1KBVk1Qaez84HU2gR7ZRRZzR6ngeeEyFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iTrBYyTEeWNzkVWNKK645VNjhBWx4Djtm6jUTqE4UGZW6kEEey7WYpTyuQAH5yetPDP8arFUotdJBTvGR3tgK3h",
  "key1": "3F3eKnj7RfKHRPgtn9j1p8jzsFqi4fmT4TDtsctWTFmsJJ5GyPEonvZffCeLpP2Fk5Ksok2GMwPUbgzdi8Hhjcsi",
  "key2": "2vtYhrCTHtw99RCRdS4enT3z2VZfNBrs2o1GmknU15yLBRUCqreJdTGsYEvp2RqJEiEZuHSTx5KH2AfZCvFemUEc",
  "key3": "2ep6VD4JSGWtyKoecr6wGxQVugeV7YXqF8TucjG7veEHfZt3SGskUjhpiVPTdsabWbg8VGsr2oD5YoV6hNd9TjT4",
  "key4": "yVhvwJ28gbTeJhAAHQRJ3bsZF7FFNsH4RSNKDGpM2Fd8o6UAh3fYPL8eorGC4JxpXwVNmt2WF7vtZxTBgQ4A3sK",
  "key5": "22NVfEQbsGRukNDycbEo2ATJBu3o7s67vSA8HQvJ9j6pSUJmDpMrzH2vkdqZAb3Kom2cSgTiZYcNCbnK5WMrJHDz",
  "key6": "2mtNnqW3kwMrLxn5ARhTeatTLbseRYQpvViHCHZ5cVrptPfjanpMabPWfJbnh3wEgLpGooiSGZeu9QERCLpXMMLb",
  "key7": "4MDoSGVBeDbAnTSnsikNRL2DH1Y5AwhLSZDGiGFjAyaiJZqJS8WGSAgRZ5Xxut9XNHxFqkG87EnSwMwa7FKrXG8C",
  "key8": "3khLVF1RD1bjFFeHWMaq8nswPCqrgzhvPoRUNKJGwo1WkeS6cq8jnWvEZMS66PiyUcqYEaWBHCmAmkD7RrDcbS7P",
  "key9": "5pxdEuQCuaKmT5erBc7a5gwBEL8LBgaX5h6xi2X79pRUUBjeqvs7uv2m9hQYC7T5k6pA74ovFgaiFMLwBaL28YF1",
  "key10": "5etTEuUBQ5Qfw2rDrQrBg51EkSYr7Fqa79Zt6H6AP5Ei3E2dPek1MSGaQREEE2r86JePwKWWhUF2AWmikspAa2iD",
  "key11": "5bGcEjfSGDqUFjw5UXcUZ2Z6zbVWajmkyeDUsBUjtHECdz2aD6dPjo9vR7PAT2RfHCp2a3z3TekpKzKXJGSTd9Nt",
  "key12": "4PSosuss9HPXur448vgRiQ3t4aZ5votYGFpump6UxPPrFiNaAY2jr5VK9jLjS7U7hfPYWdHnkWruimU4rdRUXrWU",
  "key13": "5rCJWhhRtCW7gxsV4tmh7uafBvx76ZrHvMUgtN3u8y6oTXa5kWbtxKv9gZjsqBKXJrV38boqo5Bpz1e2tziJDNQ2",
  "key14": "5bNGh7QcN3zFQgqBgLGPpLFFhu7bFH9YWCab2Rb2N3CGYefLVUpv1Lm5nCJMttTsvLBmNFDuckXh9zYk47Ux8aVT",
  "key15": "kb9Q4nqgUQCKTm4B9LhLGAyczsch3v4goihbU4WhgS2Pod5SRvP5wFfTkZuxnTEk7ENp4q1pmPUJbocGmffcx8V",
  "key16": "2SkrQw5Z5SCbDtRDZMZfNEsgfDX4tUXdiXi3gkNviG58Eac4rJDCSzyMTuALtXotimzfNgxpkEUvowSVBz3DzLge",
  "key17": "3JQe3XvFhLFaNa6WjNu2yrAt5fRgh8Pedtve8mqd7Na8qmWNKaojpVJtgxRteRXo2ZkWjzKFhUVRAQGi4Q428Scs",
  "key18": "3t7wLWg5s2Gy5uuM8BWKZYKUmDWtpmjFaUrXz6Y6J959vWfmcgvTS7isM2PJthEgz5vcDtnD1tb5khEMXMfywvc7",
  "key19": "Tu9o7Etto79rU6NayPvD8j5swMcJ3QEz9avoEy69QiQsRzpaEd1MGbeyM6H8bwM2Mom5KBpagRDUnFBn7yJHDQ1",
  "key20": "2bUP64KB4undHqYtfwQetfeu9Tmc5UL7feMjN1PNMmLiKN2eUFzygfDX3fRtW7Q3a2nCraVQGQPzfnm9XqVBLg15",
  "key21": "zBoCTkQ5jxWNu1ceDonHvmqTAdTciuM7U1LSd8nqwPejP8waQGxAmJox191jmt9LaTDLWgnqBy5L6SVqXxBkbL4",
  "key22": "rgHpMetjyzSQ9xpq5VAXjH23CaE5ySQvVPBSgbhmxnJtNsty2e45yV7F4SZx2V3Es4gZpQJw2fVs3S1o1uhe3NK",
  "key23": "3RNnQziZJHSp8xuNRG6Z8TF1pvPZQYyfsztDBf3pdAVWn99NBqZQ3ja2vmzaraj3r5x887pnTMQEbBfvDydcGyzU",
  "key24": "5D1aqzfaSFxeqWNWGnuB31hFbWCSeorZwKGsL9NSFut1RkEe2FDcmvj2HSEDoWqPsto8n9JE7ugrQKcKWxezE39V",
  "key25": "66i5rstz3RDG3yhmuhDRPkVijWgQo4DJKE76dh8WzmRKwCn8CGP9jqaFNYKSUHLPFfiVvheCdYq4FSjRW38ys2a8",
  "key26": "5mCokwjzBvW3DKp5cG9XKEi9g4V58Ndv9vjsTfobEQmJch4WoRTwS2p7EKvVhLYkzB6zrp6JwSXBrpJmp5xGbnMB",
  "key27": "3RXxZV8vnZr5EiMBXkNdr9guXo5vy4tuSRHtA3TLTfkgk4mJ6katFdaTWBkFEdTvmg8PT1RojBuHM99AEbJWFBiW",
  "key28": "JhoV96PX4HRmcaX7FRdMBaWqqLRPHPWKTypraVBxbuRns4BpkJkboorrAnKFZgtUYqEYA7h9At9vPkpJkVhWtoP",
  "key29": "4UmpPNX1e15PEY4heqURPn72vokTsGF6EK6TQCk1b2GmM2mWt9SNedJSKSSyTrVcU8QCZGYbZBD3JB9nKg1JPom4",
  "key30": "Jvt4YrinMj4NKSBUdrkpdtem3YYquwyeyJThBVBygNPQS41zJW2tosAiA4y1cxpZZC1UK3nsRo4C2b45UiZrLWZ",
  "key31": "3tELHcGUdBw3taATQSzxHdc5XwEU2hPCdVVSPvNcXEmuJ5s2AdUbqcqpjUF72XvEVGUEQoK6fXd1RfjXhRHusv4m",
  "key32": "5yzkYZxPYRfj8uUFQ6VKDjFoHJdgueCQ5qMdJnG8rKL3NVg8P79VnHaca8fPV2twjEV47gcJV8GHgmfR9Pfe7kS7",
  "key33": "3kkXtE5AocT4hCrYP8mHNS6aazk3VC6nt3n8Yxk3e36h7MA35isbJeaSb9792KPrWzuqFbWHdULwMpRRSiJRSvPS",
  "key34": "55uuKthhM9bGwnxuRncoQBBc39Vpgzuj1CwAAGMHWy5HjGUzojnskKsarGXn8WdsEoUbkCDCUfDQBMGh93ZdreZg",
  "key35": "2UnBJScRsGL57VpMdC9R6FDjN4v8a8LsfUqxJaQhnYwQMa5RqJxupsmEvj5VqsMHpA9nsTvHjJyMGF2dtCZKj6Tk",
  "key36": "3qkxe44wThetTf1Lo6B8xdVCntQnawBEK6h1aUP5n9KJrb6pf1k4C9hwVu2YYovPMyboeswNHaJCWsJm73As5JnP",
  "key37": "2eXpFXGeukpVzHvV4aQWiAU5bk6qKsCiXkxjMZqcxxTHvjg2fDKH8U4RFyGNreqhGWv4wb1YTk1kRhXdpdUVsqB",
  "key38": "4Cmsz9WxwN41xqozobv2v22qyU3ttschsX6UYzJKJSSV2AsX2mX8Uz4HUUnHbuxxL4Qb3JnCRKY7oFWACuq6jxoa",
  "key39": "A51cLoQ2tCsWeWPpwHo3coL3K9ruk3KCViFTHpKES95ux688HQbB3UCiJi1ULX1rTcyAUxSygJ3Fd7n5jjsxRhy",
  "key40": "5kSZjm9YZgLJRnvivQQh6fzYfWRH58wiyyPVDFbyekoGSTfyB3MfmjJmfViiusByERX9uaRdwuz3dTzdcBouGWdx",
  "key41": "3sgYoUJsT2vgZyNDBwtvJP4bAyy3nJwC82KZ9vPSsd97AfsfiMmdowsBVCrHYLy5WesjZLMLD5DNXztiYsNmio77",
  "key42": "UnwK7Jg76tY5bjaLMqgoKzs9bqpyjAzqiXgR7HBsYquqNVdv3BhEnTjpD4i5vstnGfJXW5jG7JoRpBvdqNvJggE",
  "key43": "4ovqMns1WoPLVTH1r71otQSoYvfkKCxnqHpGhiSRMVEJFVpMYojZWD94ofECBg4VuvXFduYkFpZWnCu3LWJfCVQ3",
  "key44": "KRcfnUpeh2hPnnrUPhdVpYoiGpK5p1TFJ8DmF46N1Xfo7cjLcUpHW2WXpdt6xDLcZPAVExH2cz4wKi3Z3VXNgrH"
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
