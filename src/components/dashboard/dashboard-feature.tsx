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
    "5DTpQGBNQ5knrEBkPK9WXqf2DFgTvEgJhjnAokHCkdvDfSMvMCNd3r65pxxT9yuacttfjNR13RJQgAfaajPns3xf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M5ig1yHRrAcBnTS8EGv94jahJRkXt3DKhgkjtauZ5QRrhUHLKGxnjsZbZBGjvakEE8vdrSQkhixQiFZwkVvovpe",
  "key1": "3Q2Mz6JEQVjquqRqPkja3UWfU4a7pK2MFau2JmVS1Z2GfTuRRVFdbPp6F7uwpVRd1QqHbnnqHCWE3yhh2Q8TwhqU",
  "key2": "5TjxPNp96zGBVNLtW4P7jtDqwb8CjEM8cD4ajbowzNTcWiDeTX1tpnpLpLmrqhKt8BX5cKx66wyeTAQssbejbHJh",
  "key3": "4xa45Ts3RbABmsiyWQXbiYee2RFY6ywYtSuHhQWUFhuZPfKefvZFodq45Bsjr69cmKp6e9DnEwMqwtMvjjEhkJFg",
  "key4": "2NXhJ3dj89zKP2Z2AkVdRAbhXYDxLrXgGFRFcTbkXNF8gAJRk3tv4tVYgo524nDjGSvphMuXEBXeNKXkF51vt7NF",
  "key5": "zAYsJypohDorTXHP2dxviU3rdoeixpK6V7mQfePmBZdzpuPGUiDN27BWjSr58n3aAgFhTEN6dFFej26yuR4TiZF",
  "key6": "29UyUbfLxNvVqrCeYiwLugYTVUgymHL8TrtPppSzuNukLWcFmkmfww6HchbZm66Y4G1yP5J5Aiv2XYQ3dxEG62ST",
  "key7": "4WnNzZeUXZVecYemBSLyVifUpCGRAWtzCuNXfYj79CUodPWdGjCCCXsCX9v4QfK2n9c2fyseZKAtJsQx3TFneFTj",
  "key8": "3rgSkkB1rgL2Jq5KdhFFYxFp7uxfVJBguczNqLT15WGjfhaW5PDaAwcHvGwXso7yQHuDVB2bVohyz3M8NLCtvC7H",
  "key9": "43EJCdo4e98oE5FFRq9N8tmQEDPNMDrP9LWmLCkYUm21vSGrtwRkDUdTXVxQzkp8vLuD764vdPKK2PmJtAshhpzB",
  "key10": "3yQBysTYJSBdpTmHfqPzhVz14oQthQs8XZ1j5B1ds8TAPPz6tJjbvE64cxcijsPBK2iQmWEAvwXY4a3DWMPPeSAQ",
  "key11": "64JnRseGtFq7XXQFXCipdurFNRjiHegTg2F6N27RYm4hRoXPyyMepUnPUnVcJVVj8WsJmvmCxGdPBc5Lao2XHB4N",
  "key12": "2vxnLC5H4ijJnxvWk5Tk5VMKoEzgNte7biMDqrGhhUpCgdbjh5oCD5eVM2Xiz74Y3wsKR1akggcqAHmHovVBSZv6",
  "key13": "3FKw19bitTzjCfdXMzbgHs7Gjd7ksepgBKFLKoV9bJ8RXSWUCQeTyXEUR3eXvkw8tiTk1BHW8Eoe8RHUoAcYFF6n",
  "key14": "4iCFmjJAJpxESC66VydkJkMGGKLdJbES13KUEuRrY3LTxhPTuBBseXS1f7DG4JoKPEReQFQ4X4BeVUG8rBaGmbQ5",
  "key15": "5C4UN5TJugnxkUWdRJhmPGwAnZB9tRbuabVWCWbpuP23DZvqULzCYJxQkpRzN37exgsi5Druu4uacWPwWwR9B4wQ",
  "key16": "pAkLmGnm7tu95Kasa6yskjyJPcyKZe7oXavM5AMi5DPnirUmGKtj7sKfg2TbWBKmTtF4QyoZkjrguQWvNaSNbJf",
  "key17": "32SMxD662Hz7pjoWV2kodeGCrUhhobRkXH85VFZGKtsu6tFXNLYDGGXdtCxEVy4WYfJaEgRzRKutnSFKoXqeppzt",
  "key18": "44u1o1r5BZKXiaTxDoxy8aQHhXBbFW1HNFNXLk7yh8fLmGYBqKSWz9oxYT6m6Cqev4F9ktRcz2PTLp3MR6LwFibr",
  "key19": "Mu2xds5MRqjcxdU4AE6F1waHPnAkFTyFbwXGfHJ3Gy3cnFBhA6dJY2frPK4BeVeiXrn8Np3CokCPVvz23fMJ55j",
  "key20": "Pb7ULatfTKQhmWS5R7nzKxSSuyFe9uXcw4USDFnmN7fxtmYqXkN5Hge7mqCKJasdvnUCY6zeDY4bxmJfdt1U68z",
  "key21": "FkcdaeTVxLzTqhR548JrH3j1QZ2mBt7ELHhNUbFYFfdqFEGPtCSFtdN85Z8HdMm7HdmfezvXuDGDKBSyV5zVFJd",
  "key22": "4txm2sgLuqDZmNfhHaNB8WfxywT7AmSKQhihwW7cdgrydV3Rg5p1tp2C8f8RgR1YYiVQ2MG8o8ZBxXUK54LcGauE",
  "key23": "2q7z3mDAMZmsxjbVuqdxf47JHTQeyFFmV9wo5TEhst7gHp7yhDVTq8gzrrLyXytdnhZbst4xzdA2Ap7QdKfPo4VB",
  "key24": "3jLGeTzcQtvHwss7DaRUtVnetXCkx8QSbmnaBZEd4cBPryVqzQhzCFAyvoXRMLHHCVpc8BCe7TuD1LM3Da7efmdR",
  "key25": "3PnPYdCfgdamTxGCKEvhS4a1U5a5gHup4kVF44WNCteTxKDsh4t7q2tmg7i1TKhwY3jjoeCn23M7WyUoLQ2wDuuR",
  "key26": "2i6YB57nrgP168wWJLDWvjbezLNHf7sKDD7NqrBC5dhqeyZpWsj1cCgNSpYCyMrVZe62PZwnnmhRbqJ9dx5BagAV",
  "key27": "2FrLJezaFYHBsQ51RQWbgkYHanoxVgou18qFSkjQucgDD2tY2yoBh4Vs25kwaJUEZu8ikco7QwAGCVM3RbBkvHsy",
  "key28": "5LSoKP8TRSCtiEfZ3BkSpVSAo9dvyFxdZjgRvdQ7wcJ4UVRRtHtW4kDGDpXcC17CFX77H9sAuSqe2iNnNc6XhygL",
  "key29": "5JigV3HLyUTpe63f5TEbo1dMhkmRGfsnZsBYj8WMJ76psabrkf62rwr9geWAfwhWiGSgL5EfVc7Kibh53uAkPQvu",
  "key30": "5FfHVzc9F23z1B2d8eMRizpR4bGWtxAWiXMEQFo1wQB2KwrpgeAYU4fXp5XTYG2Po8WG2NMi4Gx8VmkPd53W8fXU",
  "key31": "52pVpQ7h5M81VPtGSZVVwqUpvngJRjbg1Tf4wGGfJdei6jyTXyfssqAuzTXSnvVN2YKEr8bL6XvGYze5ecVQVrgE",
  "key32": "2LDZEm1s6ALKCMNbkvemD1q1MkHisqvgaPPSW3dC4L39idPW25bLKPXwyPRr2XS3xTXgfqWg7C8hc8z1cpmH13y8",
  "key33": "2jgD5tA4x1RV3b3WnsHStytz22GP7z93Ao854VqLVgCiAaEn7jMWQxsAA3ky42S9iPBGmRkYUm7xr3whLzoULDqE",
  "key34": "2pQtJF7A5w19PU8nf2MqYPh2TMPRWcFjk2AkQMZ7QiSjvzyJt6G4BLA4EWMB8D7EgSJWnBJoec3ANSjRJfPS7rd1",
  "key35": "4Aog4V7PeZdm4nUjAPLZQUrtXJauZaWRFKDtDWcpS9WWg2HstgPMViFeupN9qKA1ZcxM3eoxDoN1UGUV5cc7f1C4",
  "key36": "2j3YX4jQ84wFFnLJHbrdgchsWFsBzVoWw6LbXKTPB5TqGDdUhFGDb3d2QmuWWnnnLHxmLvv6MSSHF3tnbQLpQsWQ",
  "key37": "4C34EMd45LWCEgWj22TQ9eBAmFBV18LEXKRbDHeVAh9rqKYTUVyeN2XNP18yCNp1pd9NRLVKu7qrp89DkUNYF7P8",
  "key38": "xayHQeFVTpiYjTSGyfREP7jzH861A4nZyK7zzRp22d2nQ2PhK7VMPbG5CvXCCALj5d7ncJJW8UvddQ1n6RtwKHF",
  "key39": "4SN3EfoXriP53YhpLQpLiT3ut5r9fgVH1kZwUFgzX6dXJG4zCTxojzBhaN5x6U9nJuQvBqSsxPvq1BepTuW8yEvA",
  "key40": "4DYsu9pz1WtLb4sSQci496bGgr2rQHRf6TpQevYDpF7wpoJZTBzGE1SAEtMcjjCbNgvTuyH7Mnn9sDbB87UQxWCQ",
  "key41": "3CQ7wsnQ2HfpPz1nQs4bbL886E9wGChbG4RvXTBvyop1ik51vu94iund8CzWtg7JBCr84iTcWNhFdcjkQMspqoMT",
  "key42": "3EDVAqR46CESKWVeTndm7NGUCSEvpij1s362U4zaexGMxf6E7faRUeBqNVRuJDsWmyCzjQXcuNGdMYa4s3KdgfeU",
  "key43": "3CydXW2VDr9aKRTZj6j6jFty54goPs4siccBNsi72GnMe65GenYPbtqcAkEy2ijqynNaficRfXpDFvGPseCTpYxr",
  "key44": "22nwx5D9eSduzBRhVGGdY41DrJpspYaVttHNpzrdgHJxMWqPwgW4H52BMHsPt5opzHAtF5UhP5uD1jqhNSiNB9YL",
  "key45": "44EZ5ecAE6z1CxbBWw3nZ8nnJyxbDA99SxARzzSjoMzYDhhymuFceGPRiiKGwWTsVE2iW2kbanHN3jqDevBfxDPC"
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
