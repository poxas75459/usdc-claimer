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
    "HuF64ZuNGjzxBS3FgtGgaTLppG6opJYKvaaWAup6U3BnXfoxzkEditvCGKnbTHZMSfBVUFvf7EDPcMdZZRsfjGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YvdfAKxc2B1Bq2mxhWJBUTqDsyWtXPNN43gzf8RAhT2Tbu1hUHXSR9fpmg22RR64UxFrGfGs1pKcvKVZEXJYvXE",
  "key1": "32mzBykFzF1AvQmbNupwWkEeoRXdCLXteRjURpmReGEc1NZX97xqXWgXLVfmBAGZKenGkTVsFQqddc2m3yu7vENC",
  "key2": "3g6xi74h454SykjhrX6Wf1sMgu7qqs3x7oWshWPYSxQupiBqFBvpf69EHCGuhAHMFYieWNf9UCvGYsZakDnEjU5F",
  "key3": "c6TE6j9HUyajHLnKUWGVs5LZNKUEBw3s1VfAukczTp67zCVQiAgM4hDQ6fnv2EGRJDzSGfSJ3HuzArNRastuQna",
  "key4": "3ZSvjQckSuhpg7E9qVe4z2rN1MLE7zByir4ynt3CjmhoUfNgCrEhFqhd1FTU1T8BQ89C4kCe9dagQsoatFrKtDZc",
  "key5": "5z8At4Vagpy2npBNn1omgas8qZ7F3RU3nBynBe3xSms3EqRmRef8FwgyED3n4F23JPHYytnvCuSQhoLJp6yH5WPP",
  "key6": "4ceaFvca9U4kEM9r5yvqDkSdwfq4hAx8CivE8Eiz1jw7Q1TKeHAU3dk3LyMMTTLBr8yEP6Qg54HxyfzJB3Cm3QXC",
  "key7": "HsNEuNFfVP9t2HKWoGC8StUkjinAtuyMyqQEHaJkDiQbbqDm3uDAAESygivdYzKryd3VR27tsCjukxSSLgCvdcU",
  "key8": "2pGZLxR1vQfbUnMGJoqWEBzZLU39Uyi2o59MTG4GhFEWwVi2NeQCKZMJMQcb1Zdf8askiXNpnMo2nvpRgjnkdXu7",
  "key9": "5Q1AeRknsz5kptfWG7C6aaFubhqAi21yk7cYBQGETGo3mn4K8kExsca9Z4h8RhQKvqBgzmvdbsZiZHpGx6dzjEp4",
  "key10": "5uamKHyYSduKzG4aDcUgzWhVfQKg82zcnk3nVTJsXMu3cG7Gh8q76znB7PF5i7211EEwyKu9mh69zuhK2CsZ7LuG",
  "key11": "5PmgEY1e2vmsAsKimbZmLmATQPVzBsCmtJRPrJrM1JbF33ZtWTaLX86VzkZGkGJd69WvDiLtvjkRYCYeE8VtgwPn",
  "key12": "2tH8ZBSfpR2kcDet1hfJPFY1VYAsYgekJ7vWLX7bztF9manrUTtPtrvn45nd2LZguchd2v7Pv9QJXBi4mRYXXWJQ",
  "key13": "4Fxh9uKUMjMsC4VsvVZes5Kg8TiBKNfXpVL8RBD84UsE8r6qoyAfQw57WYUtU5svG7bUPVD1g6RRe5ATciJaiTZN",
  "key14": "4m8SDmtWvHAB7c3jY3T7F4nVM5rgmDSDK6267zSpLmodrsESgH6rewjtMRtJiQorTA7k2jW3JdgQCoG9LxSNB9pM",
  "key15": "5hNGD9mgEqG62nRYLbuZpahFr61jPCU4e13EZnsLeFs1Px3sMPSn9ybqSmVW3ntMR8JhLu1keriUCTijzGdTt1JX",
  "key16": "2UerTygc4ndX3Y7DhKBNuReEuHVK1VQwYdfqRNjoPAR8iFy12AqMcAUGf5yCabiyqq94XvicYfBtzSDy68TRcy6f",
  "key17": "3hhs5XXACiyhCCNKktmyRgDdu4SxhXm5tcBYTLuNCZ6BeX722rNh21YsPCXZ7HRsexaH3A97Lhtra1iKQ8tnjPiY",
  "key18": "TeLf5LfNeddX3aHFh4vnkerrJ4qzNz7HDU5iYbn1W3PXkEKq1mqWKKUz2MyKdYAwx3hQf7V1nySmPDRHYTVTPUs",
  "key19": "j5FpqHQtT39ZMfR5kgwnKP7LVxqUMmjVcCLis5G1MAwKqKUPLgycTcboxjApbJP1qsSadnddg6pTPcWqM7c2JqF",
  "key20": "2E3PrN4qVq1cGRztdo1oB6yCUZ4xiTkaeTBkRqTLVAeUGVnr8QQJcEnGdnFzkVySPgWzJTDgY4icVQ2hRRiwRfio",
  "key21": "5LiQa8Vv95eUnJP38Yqd8hzrYSoS1d3z3NWMVrQtLBT9UisQMCHjS8RDexmTtZhUiVqWkdQ2byLeHdSZG9QKQACX",
  "key22": "5nsMtZ6VN7AYeHcsNVGyZAVdJV3pZi7j9y3eUKcPbdLdgd1aNYFRhftZjpohpjyA4SdyuAPUuPG9DsoRzyV4hqbF",
  "key23": "jKeJb7rUiRpcTdyiQxd7pn1WQCkqa7P3pi7BzvtefqskfEdbFA4hz2fDCqTsyC9tbpgWvTEjxAoyXqTRMKvRHSY",
  "key24": "V2d9zWZJ5akgsrGV8K4yk4NJQoJ2t3HXrSKr4HFc12EjgKDnokFL3y3cEc3WhKmNqgjT7FsYKdRZkHn2ckZhHjG",
  "key25": "4aPZUxGaVUF7H2CksYnje25YRAYPne2uLUcWazxfEphYEdNMez1nMW2LGqxFF5s3XbTJFqSjdhpWJ7d7oVrF1JP6",
  "key26": "3iNDRWPuSdA6R9G2MfrAhUsj4B5SP98zLdfsa2AC9CtDQJpi9hVF4hAbruLbTMDFo7UiTb9gHGk9hvirtPE6FVxg",
  "key27": "2yvogn2DGjArP8gwjuSPp4Bjmx959XeAzAUEYZQpwo1C8HgJidXUHSP3ayCKPxsryfm9jwu8aeA6pAoBJVLrAbpy",
  "key28": "G9j4GYxcZuM9dvRRjdeHX2VAFJF2Kw6ouJtVCv3nbJeMjBJ4tZuzHr22LmvuG4q4saobXsRmBzieQBRZRX8F9ak",
  "key29": "5DAswWAK5bjeuVrwH5VBqazNNvo19J6EzUbGMrvRZSakEQZLfRBwKCjRhDWX4wVW1Cyv7nk6cSP6VUxS2h6BDnde",
  "key30": "5RyyXWpWsKuviZqr4waQZUwBx2opvbnUNczRmuHbnhi1WBofaa2d5r61zyeHZTnCBVjqLtcPN5M9z7K4bMKYoi8f",
  "key31": "3Q8WKeXXiRSdxqezXtuTGdWP5SKtNqFbvQJTf4yjaDbo6cNSfa3mSejPX38tMc2F7SxUHDcWMBQYDii3DKdm51U3",
  "key32": "5aJkkb691pe6vdB5LsuaA9o7smhFABtUQ8bdFwsQsLzyfJecXrugVCERVacciEaaFHRFoYiqvh4mwxVJXKNwaU2Z",
  "key33": "39RitwG9jWufNyy5FecoUtnCreWsXQUZSy34QLqoHXvsXXUPVcrsJD5Gx1TBradHfHsVccGAod29sgngVR2CCajw",
  "key34": "qWac9WdpKB6p6BiN8dhXMYJpfNq4ZLMQoZLmnhAth2syjDEPGcLgT54WtqChaqt3poReNNaCRWRwov1oBApRSiq",
  "key35": "4G5cc4srvK4CEWxA4yZGCRpPWsusvEjtydGZGLrEhPnJVYKQpQW86BQBHJ3ATWMzu1ukYU9oNe532ofFevbfNxFW",
  "key36": "2Zpxwj4rHGAVUW8qNayZcg8FhrwFgBY78UVXxBQfi28ct6WEpYRQ8fk7BJfDtqJ3mUdkrwkK5MoaLwRWbWRwF1jo",
  "key37": "5vTSKDXp6HmNsfcJDgAxxRNp7yz3qF45TzMiG2spNomK6eeAnb1ENeZgrzq2xuVPfjrumYj8T99cjPqMXLREocnz",
  "key38": "56eCt7TsDFGq1WH4UCcZ3rySVRZRtuP8hcrtxaUsr1cX7qRLFKeCFj2DPZi3gJZTLTdsBbNVqaC35uiigEyuhVzJ",
  "key39": "5PDpUb2P5H55qerXvH45u9riFLeiGRDBxB2gPjDYYbKvkDSXfFHHsUkdQS1QW3CZ8wdxkvmheVsQRff4PR1dSvJb",
  "key40": "23rbAQzp6GvJdsq5dwxtjPntYq2NQad3k6fpfgQz8JKyDXjsd5LTbcKBYRekuEXRmBx6pHvfgy4qMwRBL3PN1ToF"
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
