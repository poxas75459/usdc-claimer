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
    "56MkJC3jHTXa88PnnAtS5R4a9gHLABrQ9qjCsu9iCPXQHNXzogaTvKF7skuu9nyU9M8mJErSjAY8Wt5GADpDaBoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C7Ppae58s4ZTu2hajfG8vh9LvhR1a53jXQMmHtxbWsEZSS9yCN9fRis5ViVEHE3wHqnEc1BkQQdzHLh6ut3VqaD",
  "key1": "2vfjkRooQ6zE2y7zAXevvMSxjNRCs8bLCZUiAbuJaBYoXhpVmF4XX43mt55SkNnYFYiDn1FchgWPTwj5GiRjhSYK",
  "key2": "39xpXMQNLgH33JEpYZ3EHKtnhnrUeJYz9DuiH7YCRFsJjQpXrJy9LCJFddgq4dLsePNUaBQx6boFUY8KP9iuEXuN",
  "key3": "4E33QhvJBproXuUnBdhzFNA95Hk9kSUF2Tws9rEumKG3b5FYqU5b4ina2CbRvWjJiZThBd5PEz4vuiuwzsZx7Q1w",
  "key4": "4JmvWSrFct6NUgBYz9GaqdJXCeGZjzsPmtNHWvVXJ6h4TaSfwLADKJg2zF2t8VH4ya27p4QREnzwDnmNi9r89oWM",
  "key5": "3j4Rg9pqXZwM2Ta3Uj6Gw3rn6c6dZDRW2u9uAa1EENubhDawnQSmLE1YLTv8j42wtW67TPTEUkn3mUjfmqw5pB8q",
  "key6": "yr1HGYubM7rLeyGx9jp51mdFJRVgZyV6Jai3nvnq2DcgSW8wHBP8tDkZmFpydMJw3dj9TMyG2SBYdgNasFecFHT",
  "key7": "4PkeczeTubZ3V364HWnsihzEVNhu7kZuwX7V76mBPyhfFAuh2dcvhoHSzHyQoY69jjsc5apEZHjXaKJFGDxPwtrt",
  "key8": "36kpCb2DRBHvWD94FetvHWMKnyfmYV6eriTCFkhKQfdzo5QiRTx4zsE9FAUDH1eGWBKZip8NYaCYnhkA5vQH39W5",
  "key9": "3jsJhdDxMGjHMm7t5FBpseUCqfPHiGbbUq2ENb8wCUdwEa6ycwXukP1SAbDBR86tCwc3PKj9HMNuHPSQWnvL5co7",
  "key10": "4VwHu91Vrbt6ZikStBDew5rA3MeGW4WSsz9ghUFyjh2AxRh2ajEbnQwyQH2iYDvH7wGWABy3BVgjwRJgT9suc5Yu",
  "key11": "58zBPLfdNfMwLpxup6hRAzvYk4k1rsRzykDgTVebyNubjEtRVbYUAtzB6VcxCP8pbKRG3fPHvj6msMMRy6rQBKxH",
  "key12": "4jUmNKCyY5sJD9t8xBj8Zh19y2Q7LZVx14u7YW3pi7fmnCgoVWPB6EkeGtAN6eXhn3sq8nTrcEXGyMkt9wsPZkBw",
  "key13": "S54j223M35V9xzzs8ZLLkaURkhyzcGkYmxs2jR4L6zsAVWTG8aynrJwoj9nivaQGsQHPSPPBNy5ZGVk1kjWGEuF",
  "key14": "57Ugk7T8EZUx2SYtCUCC8kKi969DRn6FYzHzajL1gs57dUcHmQVRt8JbLL9CdPuYpJkxKi6qCUQZ6w6WhcXX5B2y",
  "key15": "TaoUw4QLbWx8jSvD1rAQSPZsUWuixvrK7J56tKC6pDBYbtUjcD1ReNv3FPmn3sVzEk8XTwQBMpSVxaLGmQUqGWM",
  "key16": "44onrrJf1YxkcBD28YHMdrL75zogDSNeoM3v8eJ3xNJbsobDhC2vXW7J1kUmRUSdrZHCrAm1NxJcD6WkqS9Bbvg9",
  "key17": "4n5bN79ZwqAffFNcotT3rj2nmFs1cyTLyyCqLf6k1V3fnjL1KPN29y77P5d7UVt4cjHCAS3u1HRJgL6bfVeubP2F",
  "key18": "24DuKxkAhHEDav2wkuyAYXVWyaYDxvSuW1QpuG33NBYHbG8mAZGubDfF7dY1jcynGWE6UocCgZxJGmDM5RNxdbWT",
  "key19": "5ePCbkhZ6EFmk6Spym3z6stCQe8sURawA5WdCmUNrhpMhS5ST2shKiWTtVk3SZnFmCD7LshpYAdfHMf3LbGpzQoG",
  "key20": "3V14fEyD6ykKD2PDbmQo6iYQsJjj9WFvjfjPB2vTdCdcEufgf4TeF44UeTdWkaj2AHn9iMcwZYTThhmiRpHWJEb7",
  "key21": "isNdzAUnLsDZEigsDqvAyPWAR1Ne6mEpA9TCeoh4oQNG3qVFFjgBu8E2Z45b6xqsz9hxL4h1VqAYKEzzKwD46EC",
  "key22": "4Zxq13giKRdS97jJYbF6pbbzQ4o3qUHfrgjScMH1gyTCDMfEXfsbnnDUt5VcBg6cojeCJBLu4FcCdFi1F2PhECoo",
  "key23": "4bz3T86JUcgDtRPKSd2LJfbSTPZYcXKiUFDfb4x3zrcKN9ob1cqbLcFoLdAzgzCfgtJLdsMmyMLX67K1H4H5Tyb5",
  "key24": "2b5zNzF1U8TUF3dZhNAdf7pz1mg2kghbAX8BfGUVk9k5fSerE9dr3xYUjG9Tuk7PJ4JQz9csagj8zzubNpQrXHns",
  "key25": "2skQaSFSiFHn6fKdBwEzW6YmYNUwKrag4yYeys6hAy1emL7JzL7bYNTRTaTDtV13k8oHjvMA5LNpaCE9xey297jW",
  "key26": "37QQgNK4RpLo2oB5SSPhErybDyXFUms4kseif19ym46c85GUEw6nv3SyeCumgEghAtp2KihnzV3Ch1cAib1D6ksi",
  "key27": "5Rvc9vqjyP5keExvbMhb7na5hVxnSZGqeUWDNDr3yf6nv9pCK1vu4Z3ctK1U6VX4UFTdrpPtjrinbXhLKmWsC6jZ",
  "key28": "2jWocnTJsKXBP2jGGwv4HwrcmJw6Tjjjj2ibXub4LThVTnVwxJ9crFCzRxZH3pCZwppGrp7jjafA2maMc1eNvcc6",
  "key29": "2gEwkewBrG5idDi5zSXJpBtAXV4WdkMyzc7fyKq7tCtAFCiLRdWXCEc8eqfrwqCKZV2kzqSiQsyNHw7xdjSsL1Ee",
  "key30": "4ntJQDGoj3q4SsrzQx4UpoJ22E1D6qKydM5Yb1tgnPdSRc27GsvFw89KLPACk1QPpje9MxUfdM8zLLuhxRBVHGPu"
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
