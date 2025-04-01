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
    "2trukH9vxApDFxfn3LMk9UKf8hG7HRYAMTuXSNqhBKduvTD3c4xJDnJzvukZKUSNNid2LHur3s1G8GLKTBWsSbwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f9WKJNcfJR3RBm9fATZ1xiYejwiKMC3uohvpchEXbqNzD7uG9ASgGFRrrFqnVbEHEMD3ZfR7tmwypa51RhYFzcV",
  "key1": "3rckhKBQM6cqnaMhAZ8rukEpx2mcTkF2wgaz6iDY1PZes8eGwBMJhndGsMH46FBRvMCpMRZijSYKUWmvzcF3DCw4",
  "key2": "3vvgQT1nZophVQTX6U7zaNxQibVgVT2x9CNR9yGULsMKQimosbmkRdKhfn7GcA8zn4umNUUemGvtFWbw9qBx6U3R",
  "key3": "Qqw2GEnHZrbTJJQWtoyUhdDcGq4GSWqao6JWhrTnHSvVKMLK1tgicmdshqcMK8praNXFJnje185p2yVaktz5mKV",
  "key4": "bet3LXv8McUXoZ2DDAaPvph395TCzwRLgXy1FoM8EncYs2yLi8RSHyqsBpdwwRfjfyBX4QqjyV4VPDhCpkqDiby",
  "key5": "244gVvGFxbAdVaFaFwqZjE7QLga8Gwwdu11awKLeSFSkrbx1CMxPkrV8DCKR1EirCspPwHn8yadFa5yoJoXdQ4kg",
  "key6": "cpAJSREUNAY3x3t8eqUe6qiZRGrUVnxshgoRKZQDzwxQzHVubHqa3wLGoJUPpwvX3z6hrR4i5W5HHhAc2a5jhmD",
  "key7": "2a1rBHiCWjCX7jz9x14K4yYoVq3yrkxQv9yUu8HdN8o7AudPFPiGYXUL7RoweuhJ3ijyUhQ1t4tiZg2ALwPqgYxk",
  "key8": "RnohZHApLdZedkHenrr6JPpuudycy9zcPJ6prqf6x3nkK8csiWgCqzXpFUchu5cY18iCxuv9DbtSjR9h5Vu7ghV",
  "key9": "3yaoksSzU1vVhE1zSwhqXbV8gAXrwU3XULrbsPqvnny9MosmcrHTfmuqmS1GKyyNEvodBt8fHNieqqZEaTeVxBcD",
  "key10": "2xs7wxrfN5BSm5Qs4AKWtpsYcfmyf5LdLndhi9f6154hLwKhQLscVSjFsoiHdH7ZF7gUCVehZmxDdzQB3Jdo93hh",
  "key11": "mwj2HQEJccm66u5W1v1L4o88kMeKhB9EVsSjDGYdTBDb95gzUC95xXXdbHkEJFNNYkCuNDXbqzhG82wUcYprFNh",
  "key12": "5fGphjaoCQpgdLXkEox9bE8FQtpQTwHCPvxaXh3mtEUn7NW38wHZebmE3Sxi79wW4WKW5wAhCSKcELfomiDWFBts",
  "key13": "5D6hYappHR1kxCbiXrGNgqhfFKPFUoS7LXt3rTPUhreXEE1fTpd2dSa1md3xtg2BA6iXa4REHDg4CdUq8RRQJzRP",
  "key14": "2WgNZgevVMoL9bjRCtAV6BbFxU8eFB1aAhYpMrZEgT3zrtSAsDJKhTmpJAKmHXjQNdGYnrHmw1bb28zz7oZAWCna",
  "key15": "4FRbsd2GNXyPZx11uuSPeXhY2wwYwhyJtDF59BPrYkAnwY112tP53EQewsR1nXRUitbwkbZotz3ZwAwixgUjUS55",
  "key16": "5mcywVQ2wVF7VCLKEkuvuLhCfVLEcyWa2EjqhzUJffivP3vAkT5H9vfapEWjix6UFtqdop5k4uy8JfrxWw3iNsR8",
  "key17": "5cszCopr258eCuckiznuFxjWwug9Gkokc6GsFugmpX4bXeMDkWbqpA3dVyZVD5PGEH6F4avTNygecFHGbcgC4MPE",
  "key18": "vaxPAUkhLmzEBJJq3PhxgMsD5d6iG2XtDpz94NPVZhPFiSS3mSi2XFPc8QccRvm3LedZyUZcTX1HmgAq6YaSMyr",
  "key19": "5jeRFqYmuZVpYyzM15C2QKH15RB6Ktq5mzi9jdNQbYXjFLpy2Qj6higLbuM3kkSsBunzMAqPyvGpB5gmLKZJZpUe",
  "key20": "3ZLTykbi8dtSEH7gK62mRAoFH24SvyBkgmHFPNX4KKBrHcoRrnnVvZS9FTNCuWgEqNqRSGEvVHtCgKiJJu2EuCZQ",
  "key21": "2Sz81c9BepYEeowzyezYhxfb7FNXkyNqhfdJyb8xAacGn5jRK5VwonY5ADp7iGpRyemPUpwY7Nd2Gq5UDLSyiUB1",
  "key22": "TYYtH6K1eRPRotLnzv9NpytLunDB43jK986z7oin94Y1nyNVnzaYosM17b2nUYWLYwjrStrwrbjLTw3NcUCiojG",
  "key23": "5gPZko6TCSZtymooVGBSo68Aqw37J832YupcH4uzJWjCj8m6umH4kaWV9dq9geFK6khUdmQH7t1YH6X2YVat9Uxs",
  "key24": "2XYanB3mHdFa9iQRujyUpnmBLRye72175KKtBcYe9Penx15rp5vNXvgiQ32sBtmAFvKw9Px33TLsVDTV9fdK5U4g",
  "key25": "3ZfiUPfePwES6npoSg6LM9Vw9CzEGbh7ECeV57t5vVF9AiFgK9aFF6KEayBLcWqjEGxk3zWscmRjC6VR58WQXBGY",
  "key26": "5pUKa6Gaaqm2KaAjm1YaHD5sVa5YVKWB8g9trJ8kUvyigzwLtVAP6XV7AtoGY4hpYUsXLDNK7xmDjCLMzBvLEWvx",
  "key27": "51JpyT3y92tVPCAhNBLHMsC96Kr8ALr1sPQ1hfZsT5u6yTokLtnNNYsWwwRB2qTvKcvUBPDw4aEN1no2aQsBG3kT",
  "key28": "5ExYJ5WzKNv2k68CMuo2LBJQCBNgKUFFq5A5Cfq8RPYcmfS2dtuqxwsJiTn6NvHU5kaQn9aSsqeLr8Y3Xr9yYmsw",
  "key29": "5bGWB13ibifbu9vmdPbcia1xxMgJaatgHTLeiFFsVr4U3nAMjCNe8FuzjFCW3At7sxDUahS5Qe8ugytiGVjVQZqQ",
  "key30": "5Q1HT73z13TPxzrHDweV4gc2g7PUAYDTqvCimWQHWhp2VRz1U4qyUEdSDz2XUYUNYqxcgVDsDtg8sg15ruMkd3sE",
  "key31": "57DfTSDxSKDMUFCugKsh67F3ZFKS95K6u3G7BS2u92PnoVpfp3uBaTwTQJui1615NaWNRdkyFdAdeNf8GbZ8eEU",
  "key32": "4GqU57r145mn7AzeEFvndEZzQunMWX5ZWua3634nvdwESv8ycVDiaqvfjGXDufFBmyXNFTrSxkv7cNr2BLbhZfin",
  "key33": "5QZG2Jr1X5jUaGN5PxvxDcyhuhDTSNXbCbfHBSB2CpfQHUN48PBn4hdPrzYVYUPmwskzCAZLsE3nDS1qTBxKhof4",
  "key34": "QPaAK3YNWeLox4qtNFcEELJ6ZSeCmHwhaNJtHHprLhMP2rEk1XGQGQedksbt2xvSEt6eN9cBVRHCD76NQ4keuBv",
  "key35": "5TYsrEtwecThMTz7HJeGcntYnJZZrGCtNovQzWgKPoymTYRGCjTLasrgXiFWjDbkjHBaxNTFJQnu8t5ju8M32nLb",
  "key36": "3WaMq9fGm5ZB2ivZYDz56Y1KUUF7EbRQhpKaFmoYZVkpV81kKzUHxAvEjxiJihowVcTgQnrMdodChboT8LtpawkT",
  "key37": "2WQZzX5C1F4fBq7qpPJa8xcunz5mGAwKsSLHxEYkGopSrCJGKHJigh3aD8xpRGw2to1v4y1cE33oubjMDG2YFa8h",
  "key38": "4znXbMDrRKxKSNmjWXiFJ21MzUPejiJSdmJhhkhbFhaetN28PNfQ1KppGvrhvNsZw34LQDDgFVBxMRQEvqjcKmT3",
  "key39": "2TySr9BLi2ctrQ4hTJ72yguxVxXiUTjTEbaEsmzbqELMBGCpBm5Qx3k4xgGbN4Hu3hTCfjgKCWPmkei5fcrzjNWB",
  "key40": "3MTQLwdTsEPNMQF5qhXWCaVCLgSCDGdZyfAmniosLbDB9DfAXn18rzw9wvqGHqTjkc5DpsvnUhjJDAX8WbsPEegc",
  "key41": "K6XwHz6e42dGwNB6ix79NWSDKS5d3xtVztSSpDkfMjJoQUNZayrxyjihwEciM49bGg3PfnD3eS99D17DejEyYHm",
  "key42": "4MLmoTwq7izbZnecv77EeLdpr8hDMPidXxjXUwojcQiwjVRkTivLXZhrk1PoPUrJQxo1FmqEdnYAk87RekZJYREp",
  "key43": "2isfWVQ8VALsRKKn4NJjoWZ9B8ks8CYL9h4fmNDspvjmY6wQpZR1kvLeoxarB2uT1qzqZGjzZYc4n46pa6fjxiDz",
  "key44": "3paWSAvK5D6bymHYm44oL18o6irEMPWR6NUQH4Ywet7t4JShcFzf1VubPe7trFm7xKdRAAF1yoeVEvPX5HyLZPhS",
  "key45": "4wacgex3ByJK4brvq87TqGS2aW7pSvPA5eicQwLTWVnfK8ictxEzU8yRxViqziJYdnDPYzhgpGZqugj6e9JZFa7v"
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
