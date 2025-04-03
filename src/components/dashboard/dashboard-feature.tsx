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
    "3pD7Dmq2LHrn95FMuK6qgGbSpF2KcoPU8SaFoMgB3BYZEdJczHp5wigcrXKyQ79SdChCXJ8YmFqf1ozZsayHMifc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VNSXpfnXewFNCVez3RSubmrrUJKKMURNYCJsbymswBU3eyw8WxfsvtvgWjzZksmA4YD1zbPTXuxJTzdDpMFujHj",
  "key1": "2RBMqWpDCNPnp34jiptVHXpUut74gXtV3ySWYwubFc82ufhW7qSDtfsM7PjD1Vy8uKQV9rB5p9UqqhuhoE3Vsbhw",
  "key2": "4sici2HzGTtZ7kBTuefTQ55hUAVYc7yPYyoEQ5psvhJXQHASLeCsLJ1t8Xe8dZRtGo8nrsuY6kvtVndZVs3oNCtQ",
  "key3": "MMfD9kYA3TjLhzSXvaRMYzge8UD2ayY125FCno2A7HwcyuwpWWeo2N72j65RPqq7P6sdws2255VmDNuL29iPUpC",
  "key4": "D4D89V24sxTRASk1gwKaiGGsunE53oMHeVp1bfTVxBopn8iYSsWofbLLKAj8VXPdqne2UwhwManZdSNfDj21ApG",
  "key5": "5KP3HkHASa8WhpHGFMJyCizMEhL5uxDNvjrjDja1WVeNoStMBnPLkVVfeNBVnjrzN2ktX5wQQ5s5ZMU3EHPgt21B",
  "key6": "3dkVCwVYdWjPMLMKHNjDgyE2831xY4wss9JS4PyK1tTXJfsHSGniayba9B7dmZc8wwJbSbmYd28ReBfqxwNUNnTc",
  "key7": "32BTqesBSfLbXfgvPVQwmCUY4dr2UbxBDdsLt3UxPG9M9rqrnZuAYZHxWMKdEdCZvPhwEVuE5vVC579TUAtUFSBu",
  "key8": "3UmGPVpp28qKc5ymXqByT7RHi8fwR18YipMaeZdxgkDQT1pCb9QQgqbfUXjpGCqweEZcc8VWnshqecQqZpBzB5ii",
  "key9": "44ykR9RXyVTTHk87jYV18LhvSjbX9r33bSRX25qPGPyTa7vu2kbmUhoNBZWTotksi2CWyhPvrqHcwPtqdTnRLCsP",
  "key10": "4ngjDaWANCw1eV7R3xk13hyTs31R9GcATpoFWmX1zXQ2ybr7RGpUTw5u3DKzY6xKWdo8wkMSK7ASSRERBGvhJFsp",
  "key11": "64aaRakBCRgrmcncW7YSAYopARNCZU1rAB6j3CFQLxv1oNhtBbvpixMa16QyyVjN9k2mhrJEXqYX5y9ABCVa9Nm9",
  "key12": "4WeMoCL4wLjkPoTpJdkKCMNPZ63o4Ay3Y9v7i8mmwxiPhghw9NRAq6QYsta88iCfQfu2JcDXQFcyoXPESYASm1Vi",
  "key13": "3FKEtFeXK11puiH1VVq5egKQPmtvT1M9pD2HoEN1pPQKgHxoHpqRJ76aCvLrsAvRWFTZhNgU6j4nFx7mHkTwjg14",
  "key14": "5U139ywzg3ENakX4xdoTBoQMbgSjWovnuUHrs6fQaYA9ya8YM1ZU6AGHBGChs54DmX137jbELBcpx8wYLCvpo9i4",
  "key15": "1aZ72swWrBaA9VSVxvF8Pryj9JmCetVn8pQkEyU1Hda5vXx8iqaSU9rsn7rVPw3Aujt4p26j26Yi3zYVVzrrRME",
  "key16": "23FPx575raVyHdMwirMVsedaRpyChrFmUe5SmCPnSk2taBMM2rEkTson8mS3Q9XKMYicUM42dNjuG8j1CoCBdoXo",
  "key17": "4WfMkTDFB2xbPpRVjdHszFxwuG2LeXQXz4crPCzMyV27U4ig5EQ38Lq1NqAqhjscmMjppzNToRNigBhZzvmjX6sm",
  "key18": "5DhmWHRhFpu4eP3eKpEvzTe59jbwHhnFvSn6Ex2P5Lg9tpM9xm2kLscMzcgRtR6Y1jDws74xrpKGraUqgnzL8hzu",
  "key19": "5CNxRMhq1HYYd9h4nJorQKsdH5mwWsN3JG622u91uRUfggLpF2YBDqX19ZRoSmbDRsptdLp574n9T3Fd2mRcJaGW",
  "key20": "5paWDScF65VvBcepb6b2rwExmhNFLFvhs8LfYJfbtceoSpwNwaR4qr8pTytMnfMB6s57ngvK96HwykaLprJEwfZa",
  "key21": "2DFDEUdweQEGwiCs4RP16jy7waLzqgAapZdthWMKs6FWjHbyY9YUceZfMRq8XKYex3DSDVGGmDceNSrsQ5CQJTPY",
  "key22": "5dyuNKrfM1iGjJafDu8xtKUCVWDfVZCk6hm28x2hcqUsm6yUBZYJDGiuzZjUrjeXNxJvDsPNT4jKXwHkvvsKStTa",
  "key23": "2h5QThS9Knd8mtS7bfLwTXzqqzPA6EwLtLwz8qkL7KvCnxbNuQRuuDpjiNtYGoiiPJmCr7mJcntBcYPXkwFCTXrF",
  "key24": "4b3uK87B3hQdLExMfeyNEDRS455UEyCHQptV3cW6BJ73zzkjpmgCWqYrDnnZ61fo7vzDdHZyfXGSothKJkszpNwh",
  "key25": "4DBKmEc4b1A5oEF7gDzsYveVte8i4gLE4w5VurHusoTY38Dw9C5HB1JHWJomUNVvWdLKdLhDYyGFrheNGPdeS88G",
  "key26": "29CpDPZfCE7YJTwgQkdvWRTkoFRxFUaaFz3t7BytBW2tmz7B2t6dZsdjMy7rak1JXZcBVT65UhGqJAQBP7anZ5p7",
  "key27": "HBLYRm4oTxXLJpnrbEK2YKuC3gUrmyWCXFtHvW2MQt2cGCUuRAkzggF9MxkYHHn3LusEbLPah4W69qNVWg9GnEt",
  "key28": "3JnL3HMsFhgDWeAeejWKvhyCBLKVcqyNrPUh7A4cw9ahXGeQb6mnta5gj7zGoyVbHe54QVgnu5DSfSnQAoSQWE8E",
  "key29": "5K6yxVamYatLUxz8hZcoQQ1BQ4jHN1ZGnULsKvr6C3YKhLczg485cPTs3j4VJHKLf4kQBMmTnRDbfJXSfYQK3iw6",
  "key30": "RsjZpq55EFhqJBP4sxEWQPXVWpka4myNSSRKXJ75nutqe7jJ9SReCv9opmwMrdPHTFx8XdwRVDjHexjN4eshC52",
  "key31": "4MzqgnadMC2ccfrqn1CFQpbLK2YhiKDmZrMbtN7GN9cwD6f6fUeRv6deckkHX5kN6pxfDy4DLoiXQUGktxWFCNgU",
  "key32": "2ZZewmTbAPR1MLfpsxZyvLazgCxpRBDVGXTavvfDCsr8VTPZWqDc6QUN5Vdizs8CYjkrvtN8jUGuzfPES1dZEX4Y",
  "key33": "LBNNjg7YvBeBxbbyq7nG83CXy7Xk5Pej8uz1zeh4Y6NH1zTYCt7omyYfiLVB7yTM3Ek7HYdNubXLxQMznckDWBP",
  "key34": "5BdgBCR6pyxobNXbJpcstovV64pHn2WDAcUtevfshTE4NXVn1V5H4pbN3EdSg9h6tcv9jCP4QzhNJ41uyWGFxank",
  "key35": "4ThxRNwxD2pguu1Twu2RRmaip3UPkkChuz8oJLYvsR5diohuJPHbEbptMeHwDfAfNtCs1CTzkgv8hRbeFD3QN7Ej",
  "key36": "3deKeaemdqWfPBLW4AcuJPMQtx4m8wAqSEU5v5QihJ9oF7QMX7NfsimHGVg2djjWoQ37GLKHQ3VwXgvUnMP2R9qi",
  "key37": "4kb21dZAJSAdmw87uZFnQdj3J4CgagfNzhUnPTSftnJAJX3XCZELLH56sCYeJg3FLiANc6e8pLS673esoS83baGw",
  "key38": "2dLAo2XzDvRrrWZfGiTM7CmKQq5Ets5Sz38ZqXgE74qG9QdRTYBDLVfyDvzJm5JxR1z7r9WQgFSq27y3RRNHayCc",
  "key39": "31arQp6VJ6u2yrNd17ZsXkVb1Rgp5BnXSSeryi8Mw5jNwuzpT29rB5uiiRDrsKLunqaKMnHwu7bkyN58LxyNuJKv",
  "key40": "2iJhcVheacbkGf7CtFmmuVASk7ezLB5fAaouwvpxSHXhccmvFH3ETegbTYLs8MM2XQ16T9zYvQXWb1JgcND6NYFU",
  "key41": "57ewEcmRHewaRu8GGbrCieDfgqLFnTyRFMb81JXc4u37kJHj9xU9PznygeRWMtvuvo9gCm5FD96gUrMJiT8wxPyh"
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
