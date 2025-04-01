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
    "58RyQ4eVye9BC28YDQ6Y3BhxkNAsW4s9CPRusbtQwVfjUdvBQCLvXvXk3Km6NA5FEk8VoxixLuLb1CuCm1fXKhnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41UvrGJe4bXyxkw2UjqRCM77r2qbnZ7eh6g7huWbeim9bvzxndyoT7WmQ8Yf4nvWTDv58JaWW9A4M4p3LbFWECLc",
  "key1": "5EsLYPvHd6ngg4LUhWb6EQ6jTNqKEdNUy99FH9jjeXthvoTAhGSjzytHXCuw7LZAoBCjcLTFSypz8cbbrp2JT3Xg",
  "key2": "5HRDDZbodgeGdoE4wNGdTi612LBCY6PkytAgM1VDfJQWKFvANKYgKEA1cKq75Pe5t1CjErTaMG7R7v4n8FbU93kR",
  "key3": "RoJujmEL929WeS2QoQZ37fXMx3x8idoN51zgHtdyDXV5gVwngTGa76myUqQxtVnDsMCkRSEm2suUx87cPZR9nwD",
  "key4": "2f6FtRSLz4PuwhiX856wS3vvR9gUcWT7xcEeETdiB5JWuTBew4DZiCy96k6EKfwZcYLhQQsWADP3hJVjvxzZePUk",
  "key5": "3L3Qmwi3fDAa5i9i5BsEGGSLeDDCKS6x2vmSuHuzZGLEoQEg1uJkAEwbAR2B2my23hSEuefNyGDxngRHUuLsQnva",
  "key6": "29jX8MAot3JyJptmcTNjKpW4rRPRdzVsXs5qkhu3CWeL5dSUxTaExA34iN3wfCqRyskueFtTi16WdXyiARoci712",
  "key7": "VTewo9ymoZbDNuqFoCpqTPySg966G9oU4wHk3zsjxvj5Zp95Q5TnjemEeyCtxxgjaJPrL34A91Uo62rdkfCKADH",
  "key8": "38Zn939XCCfwPhBjSs21XEZHQTnPWCpGU5ax9xicF1PHBH4PG54Dx3CPSNPKQWadRa3WKAgWcxeuYsGiY38iMXW8",
  "key9": "5aciHNzfUH1wTguG2WREQUU9KmriHxzieLFAqdo65gf7TCaShLG2JMS9r2nwhaq1bRdw1FiS7u4p7beRRQ9EY4h9",
  "key10": "2nnkVDmQQz9oD7xpKCuZ8SYzhgW9vvU4y3yGKCLgUjBKxb6wHbNgB3xUzF7DfL7te368bGcmr3J2pnGyCQUVq5aQ",
  "key11": "nrDqor5JtCc3Xon4yBJFA7saAgowx6D5DQVzCxgcYq9mKhmFZf4GVsD3T9VQ1BVwpzreJmvX9aA6TBw2zEwp2a3",
  "key12": "DKAFueWAz7UKsJ8Voep5qmVMhgnuhgHAnyDsh1SUc7M3ajKKEWV92ZwKVMyeFKJXRn8h29QZ2ST9ZfxFXKi3a7E",
  "key13": "5mLakPaPh9UbffDBTvKmiVVHrP8GDwcLS9mBZuy3YjuNGaMJeChjou3o83ppyouZYcXpYBZgrH1kfSThZ58n3gew",
  "key14": "28CFUxNdJM1Q5Sr5m8XUcsBaACYzMVhP8H2eS1aK2CaEUAPABGos3iWtThRjxACVB82BduCAJN6NpDQRadA3usk6",
  "key15": "22gKSkeoTzMZTHXAdRFwiHE4u4ycndcJzoNHFi2UhE2ctu7TH64SCwHLtLP2fTXnxiGf6xjZ7hKZ3BsKyovF8mFo",
  "key16": "34xLxP5b42i7V3DivXWCXeyV5uZj69qBcUpab8B25WKNKK9vuJzawCiqaj2D5coAP4jYA755W8PRUYb47qcFa9H5",
  "key17": "23F7XL6GSiYEtMAm1trF9ZvNHST9jJNuRZgWx9eC8osgoYwivfTDpD6j5wSYuyq1v7VgkivXFe3FY91gpTezQne8",
  "key18": "2uvGiYzaBNWbVMLqC2wG3AmGyB6FFxrzfEysTRs18RKx5KvqRzE17U8mPeNzz8YFKvhJyvZBpwBSDhbRefWwuwDm",
  "key19": "5eJMfBm1sdDoVNd3P9jSPdadgfdrBaFhTuy1jq3NeiLRo5msXDDatTb1y26zwESxUdixTpXpg5wf11TwAX6vgSof",
  "key20": "5CtHHhwdQcR4Sii6TACPK5SHjuHzjXW48FxKGeTGVC2WZTGU6YQYBGy7kQRS6Qact1YqeVStfc44VDaAYqcGTkWw",
  "key21": "3jpKtV9mt7MSnWoQMfYD4zKnfg4FqUaiGRgntV3U82HYZ8mHk8g5MCmoz827tLGiJ118TAzVVfq9XVQqBPS5xgJr",
  "key22": "2q4eosWrq1E68hnRQtSze2kLPtnDnYfuLy1ebE5RX8isByFrmpRJKxufpattbU3RcPU2xiMBKSnN8mJAsfK23T3p",
  "key23": "48MfrTWmSHkJonLWQo3UAZDrWyEqnUAVkRScZbZ9ZbZkRyEjPygvYCSBUTby3NgKvhd4Y62T8XZp2qgDN1B85mfL",
  "key24": "czUmTTAhzPnNDMVBm5GsR5VAM9A1bzQD5UdkZpVkNj9gLeTF75rFPqxqyYvKnV5a7zrqYTra23EWMbamXQ6irz5",
  "key25": "4av6d9ej7mCqR1w6Gx47CFMzg7JGfSPhvqUZ4dAJuAAA3Qpf58tSeMEWTnhZV7jDufRHazBmj8evqBgMxcWBntnu",
  "key26": "4SXqKvSa5pE2DvG6wkFgCoW12p9KB3u8PTA3UKB38i3fBv5MFrgm98EbyDtsKQCtxrzwjFDVpeodj5bafWCAFxrr",
  "key27": "2Kba7h3EdFoPdQLcydkR6AB81cQKB5eJiWnmcZ7g4rUweKWy9MMKm1TatbyPMorngi8xkYf5xxcsuzrzbig95f77",
  "key28": "5SLebTtyYtziowwRMszAYorhLDJAyk1qbHZ3C3oUAMHUnMzzwyYSmbTYU8KxmGr5J76nbL86rjz7rRjXdGzseCDS",
  "key29": "2oK5Mp2KsuncrH8Wr1xRTDZhvi2AS3QgGAC6UATo69HcGbP6hZKJsB5UNuYrSyzyyW5iG3Lc9Lh9XgXqMgJoEnf",
  "key30": "5dhHAvuren7uj2sVnRwkKvQ2nwojdjyqqHEjr1aMrpfPeJs4rTv1JhQb9egaW7SARrFtAiDigokNFFtKYgFtFvzo",
  "key31": "5jsUgUxMtUCaKezKQUWYVpoh2uHX1Bn88oZonfSe1aqSFYqWq3CgiXSokBo6PPY2KVRufbhVTqX78YgKzY1FrFkx",
  "key32": "5iy7qPefuouzt5jg52W5aQBvKjJY7GWuHNEYtCZFBMHdkeerQCzm9e6qaw4G69xFiGWffv8QjYX7E4TG7zPrJdWJ",
  "key33": "4BmcHXzgsJ6U2U7P39b9yTEr5abEPo3oF5L7PNL6kRM9X2YToRFsUyqPUSvVheYvqSP61h9rojxwQff6TfMmWKLE",
  "key34": "y7viEsp5AUNLfkU6AaTiMjrrsm99qc971kkAUYjQFY4Ambth8aZTbci1R8C9V9DnyLL72RwerCYrcGR5Eh9RUe7",
  "key35": "66bBMvvAN7i2LEmKEop3HNC1QnCY8t1omFcnxm5gHTxKWBNWUxmMgLP6C1SnpmVZ43GrE1ef43jTEKV2dUHtMJMT",
  "key36": "383yVVu2RSqu3UxL6Zwcv4T1PR4sX7Luy9sc4oFdESVWWjWzssT1VWsq6LV3Phvan1wM76jB9qF7BK1LFXFHAXCR",
  "key37": "2h8gunFgKVXSH7qfViX74x5HzS34CrxRpb5Yjkn9FQdksayxcXvEYKhM7LU2rn8LdERyoF1z4nfEipx6SuYZBfJS",
  "key38": "3HZFed4ohAKg5QE3VFdycUkSv3rf5qhNezJvFzztAnjCwLYKVZe2aNuzoZYpZGeseQDNxhEDzgjrdheDgSZebS4g",
  "key39": "4cvmWqRXQ37xSkXdZS9B7znJrjmP4xygMKWgcnvaGk5auv9KuPTwrYUq4WUutfpDJZWvwFA2c834G5SXVyhdQaGt",
  "key40": "3kAAPgHuF1H2xdBjwnhmqwdG51DN92MdN47dXKQ12oFUowir3eTysMnDreMAQz19wWVLgUMcKc8qBVhJZD2AVFBx",
  "key41": "2CYwRgnZy3b2k6K4PW75pGN5UqXJCGLqzTLeWToi2VNLBwnqghAPocEpmAAHJjj9CzaHLvw8FBsEUV8oWxzZishQ",
  "key42": "3VCJ3MU4B7yB2W7Qm4KETvkyTWZrnPTe42pKQkhtVYtg7sZ9USAmoNYZGAxSs3EGTWDbPSrAWTGXeJEpXTsfybha",
  "key43": "251Gcut18rFpTGcavmNhQpeQBLqHJ11RZg1HJJSYrNAVgseF2yWPLakUFPiMBCdN8bdLoAvTjPzuykjdV4FURQp9",
  "key44": "4N39tUSem3KXcnnXHKp5S3A5NCQ9dqi3gGm3tofaBmUpTjYqW6yVvKSRSNTqx5ArAmUPEaLF6X39xwV86mfyjo5Z",
  "key45": "4ciMptXcvsec623ah5buv1BKfbgivDMybAEmFUkAJA8uaMW6wTZu5cavw5snRQ7CWRef4woTaHpJ1u6pjQphEEQw",
  "key46": "4yoaKsKTawRHTnKEGwPjxpXcHTturCxxussbHHTKQs8RjAeYdcpKzKT5zSn6U1JPqKh9DJafDU9CXX5h4Fytf4BT",
  "key47": "2ss4cLczvkrNQ1feF97jM9DgJzN2twbUvgs4YV7oHd7gKeK5c9qZ7ZBug8T49t5utcFE8ktLLanEJYpUeju9gX15",
  "key48": "3EqshDpJDbBVyzRyZiCovnD3sS7dKwR8XVFwtKQ8Jot6zqXKsdY8W7d81KXmgBek6LvBUGAtUZ1y6w3GgwmtqXyp",
  "key49": "3AgujWZbts52JX4kTTAdG38947y3kXmhnG3bHEiBezbWKqMoWavkqw7CpavbBANkNWcgB9PyjW3rhBKpiaKkNpML"
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
