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
    "3j9Hu4FsL3zWMo8GQEvrcUeMwY4oFgzL8KwwHWLHJn7JLGoXw19eJ6Gc3hwr8kbqhD2UyUSxRfvVwtrMyRgCF4Sz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AbmAbB2V3cV7R3mu22Ryin1tnaCEJqEGZVozJnF3i2nRxrCdC4yxkdg9avm2mD3b3McUhN9DPX5kgBXqymvX1yp",
  "key1": "2CsUsM1pJ4yPTya4q4BjBdhmne7XFuaT9aQVSwCzrMEigRdZEgVaNAnGPuJdtNTyA229EqtuMoX2ode62EAeWG2V",
  "key2": "62jTL8RkD149BbjhFmYHEEYhSrrYfNkseXR9x7RYdg8dqnStx44B7aRk3PhJbYz1jRqBC9SeNjrYUfmALm4V8uVS",
  "key3": "65njkGGZS7ZR3W6id33C2cevgCb9rByWSNo2scoh9yPJCKoU5bTAEG3Qcnc9kZKjetmoXMW5EzGWKJ6CS1VnkznP",
  "key4": "61cccaFLV1vS3sMdS1y7kM2xEYxtjZxmxGKfBNgiNbWLa7YRqwivoF9kdFNCnhzjXZbA5dect4KwCoxJduBrndHp",
  "key5": "2o9LPQpAHrRHRKABRZbrEnwh9rH6PDTMSGK4g9NFhtDzWUjaqKL3cNMf44iL3dLhdoTNTqAhpNPUspXrWBBknBLo",
  "key6": "4ubLLyuvkWMZYMxxFMbGWt74D2r2PJGW5kx6C3qh9LZVrF59YEQt82RmbvVY6wNQuHjVh6vPL5B5YQe2C1L8j5qS",
  "key7": "3yxAauZgDjw1aN8owYWe2DwFBQBbVc5wNqBmw5cGweD7birmKxDuA2UuXpp3HKDrqJoeaL1UQFmmZUQJFpZVpPCF",
  "key8": "bYuuhRctor8bReDQ3fifnTh1VL1D3ozzB3TeXuPthSQc8qKWh22viZ7LMVU6vduehGZ22MST1UasyUPfnWTmvC8",
  "key9": "3eH4M86JPFZEFuQKGisyYyS3PeyZ7HS4krSEwkLtVBhfxfJowjnqjgCW5StBwkc6zG6PzoBi1d5Q7K8L3HieJxbb",
  "key10": "566KAU6HyakUugDLZjcs55YCHRsueZ7tDdRNdi9yzAXX5U6xjLUxbw1o91FFHTS29d5ns7j6FXriYEA7x1rZ6Rdf",
  "key11": "b4JXugboyxc8tTq6KaCdQt92fXLon1ctwHEwEWHG3norBCmQFs6LVMtT4v1T8e2MbcWP3Cy7F4f8K9vjm2EWPwx",
  "key12": "2R1FFbjWdvmprc4T966mfCZaoqhji5gH3PN8FyfQavqSGYf16NjZzoFxJADh4vPed4Gzeq7h3tTwj2Ybetq1anUA",
  "key13": "4gL9eVPeAHjY9qNwMkT1ywEcBRuXjXM3xu4tmhwmxjhwFfD3ZQv3gsiSj3ddNFK46DukZzr1taKKQuCh7YBNbqvr",
  "key14": "4zpTxEZzFfZvi1twTNU4dDWKf4eBSX8qUFZtwifsTXTAa81hBbdsSD4MEPegQimHFoZBYjtj1ACzt6GvQZ1rkeUL",
  "key15": "4wTP8knsmHSx7K54PaTRM6jjwDx7R8t4Rob3Bub1TwK6Kf2KH77cTm13c5kWnUX6Q8DPE2NCW3GkAB6JWnWkdUwu",
  "key16": "4cFHYXc1EpKDA9a8voadWgk6YWuYK1JfSjtcvRoyLW6jxYT2pKYSE7Z2JZYyLypZruZXMgjEgB1KDfJRCu6FPMPz",
  "key17": "4xAxVp1mN2kctW2NzL7f5vbkNuXXWSNgBp3r5BgcD6F7fnmM8ksrbUNv3jRDcUvUfKGSTev2MhTXAooqx7mbHrNt",
  "key18": "2qXGxySr83oUH4m73esEWSrzJhX2M4vo3MbXBbY6CKuC6eEkFB6M4dvJxRr32WVLg17dGHAcmffJf7sSXhGmp3mF",
  "key19": "58iLBDoqoLbomtUhfEMStTjfp4MyR17xKpUmm8fd63vX9ni9pnJ3sG5XnnVR8BwhcTCwjH8rTjVDydAk6C6eMPbG",
  "key20": "A4UCBtvHbRxKjKo2wgBgiys9TETAzn5LNe2gcrgJnkCCamf7aTcrNTCExwAskc7DZkKCETbs4oHisLwcHumHbTP",
  "key21": "4WuRHt4Fd7bos545c6x18JZeEZhobW3Dpb65tu1GP7dmzY16B7Hv46f8Ws5ZQXDTHCSAteNXwn2K4PUDPGgYdCQk",
  "key22": "3KAa5johuJwPb3BXNbRxRer9nuT8ipvgEGYwQkW4ZjUiLaDuKxoAVFwwJFmaty18fcEbx3sgSozH585Cz1m9BsSU",
  "key23": "5M3ozZ8R4zzWJvsSJBFhFxdb29qzUe6ZJRHdjBVfZquYpTK3pMdHJAt4f9mV1B3DrjFXA7i2dLKWTTSxmh58UiVh",
  "key24": "3StPxK8oVdy8bydWpK6N7rYuDCxtq86yyPsDaSEztUBMSMsZAzxsVKKaa9pANVcV3C8iiDfbduYJiRZn1RyVaXsn",
  "key25": "22yRm7yaSB5JbLXrX7N4RCY7xAS8MykHmV5hBAy6SDPQtZb8dtA6sFLnfRAmUxEd5doNBj5qNwGk2yirTAzemw7V",
  "key26": "56HSpZ9u86CZNaa75HkdSrt3HVD2dD9PuQEQk1JUcYZDf5fPzACL2FnDQZNd7mpMWRkuTCx3NfpKxKBV7TyEhg8X",
  "key27": "2XNvWWWZRDt5xrzqGQfifdtj8kSDdPmmCy1WyH1u3wAM3GuzmGWTT75wUfXCUGsJ29oQZiF7cfPfhtfr2JaCLbx8",
  "key28": "2RLVHK85tUSirub2sVUWMgV4PYWsPsCXC3tzQiRpUnDfFhfFAFM1QsFpWJBpR2utWgwNardoJTsFQPqQosEBU1NW",
  "key29": "637gansu4S5u8pqa9xW3qbDg5R8qgKrwgLaFPHCjT6pbtEDQfjU2uj3429hfGtnfT7eVR2z2h5BgE5RV2sbbwkgC",
  "key30": "5SjtmopVzQ1zskKPGoKkeDtEwNGg2JY1xWgwyk85Jd9U6eVgSreJpiDbP73aXwtaCoFhdyuF8goL8w6eFB2R8TWx",
  "key31": "2VJtFGQNMDwqGzDc6mBAbEtgYhSmTXEUX2LjmyKZLZLAXvKaiN7oz6gjzVYnPh6UNwo7wxrvvop5AyahpkiTFaGy",
  "key32": "2jepp3Zwnho6oPGk7Ua3RKtY2r98whAWJR97okxAdbmZCekkbk4tyFcWFR1x5Hg4tAF1QzJ27Vvwhqh6r3zhWdV",
  "key33": "4jtwLfHCkTiFJRrkoQbwL7z2ZooCMUPAwtgMWH97Rgihm2NcX8zDPCNwAYEehRm8CtbBXVWeQorQt3ovHUbuWDKR",
  "key34": "3b3t1TPiQdhXV5SrxwCM7E2qohaJ9dcqG4CN93Xa8kvzp7AGmi5rbU7sn9FFeeRZVJW4PoLyihn6xmG68QoW45ti"
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
