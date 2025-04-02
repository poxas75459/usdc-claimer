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
    "5BbabMaKJivsMrPEkdetzVqiCipSL4itjCTaEC8WrKZNj2x7RLrsMe42ZHR9j2yfzVyMswRHfvU1246mJahzrZ1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JRtBC6PWCuKmbkKr98Czy3FHZA5EGDyCiZfKdgiCkjY9yDysAz4WVm1HCvnnm7XzKn8kguvberMxsyXVLU16XhA",
  "key1": "65QSC9WYVrf9WCPKc1vShLfLRoTAz6z63Vw1Hju8fMRyPVmjRDj7v59VS5pyWc5FA1sGp16uaoxZbDJhaXoHtLEc",
  "key2": "5adFeYKmNHZ3vqYfSy6Yme8wWPN51VupkukunCCTZDrrAMBxnqPbBSdMu3mbJ181DDSfrtsroeAwjR7zEzFXyQNP",
  "key3": "4ph9thv3pEX61RaEDZ43ncPSyxzRShtnm6A1vMvZYs5wWawqy6XDznSSBaZS9L9aNb7eH49LEuaCu1D2QuVNhKMm",
  "key4": "63TYkfwW7phe8ycaQVXdLHeiFLxgFBTP67dGr7TAEkaxwC6so2ybCWEM7nqzrscMvP139ZWorVRpUN5KxY35zPHK",
  "key5": "63uqRfpjVfhjisJPnx5LQ1euGzao16orFHSKGiAEhyfgurSNz7zdbNNsJVHc7LnK2k6LaiSshMtrMob3m2GRYtWz",
  "key6": "4NvdzWpNUP2Z4wsxKHoWf3BjxWA4n1GYAGvYujQmzoTBKvRt8wXmTjwUmFbF6xAYKLtWjp9UqGJ1vYfYw7qwTk8N",
  "key7": "29yv2wVp4azoKeEnACKFuhwk21JWZ7BUgGEmBqQ9k2mVR4WLTauqrX3bC3oDhVX1yhDVMsaLZXWY5steESMXqLik",
  "key8": "2qxM4V2iDxYedKqDmpTfZ6RqgxN2fUweMEurRbtNtfTRZV6wsZYgCkR9nXHzsRQEAgceU8NDhkwQeZv5by5YQ19r",
  "key9": "8PEmuRTsMVUypukwFTuFU3ZNMYFgTw3poPeQXKgjDrhs12jtFCKCEnegpkFiCBmTwFMu7mC3e8GU6G6kpUorum8",
  "key10": "2LFP741gK9sVa4pmSEq5yJikcZe5Ydwmv1xLKBDNVGu9wouSV33ukYhPRybFGdnf7umLC7pmMUQ8BTM3zYPD2Sfh",
  "key11": "62TQHs2CYZLiSP27NwdhobDBHS3XQdofjDy3HyiiYzFotgwVJvdsGHBtmGtAziPeAfKVwMKVcZEpsKeSBkyDZdJq",
  "key12": "3XKHq5z1ubxuvJwXKGn7XKtALByQUbUuMa7vuXMkTPnB6tN8xNQd7WT1x3ZX99aa6F4bhhwts8GrQoSAjR34pi4H",
  "key13": "VsXsDJkRN1dwUQvtAjz91bT1HpPxqmdrxVTkAw8g9b2PUE1XHSBQSs1QLA6fKjt1LnoP37KTiiX6yRB85TUYFYS",
  "key14": "4XY7RxGqdjPMku6FSMrVYUMvZUVRgQWyM7MEd9YseeDWBmhsDQveU3XxjEAfbMMY1NU2Rx7PXGRq2JHiTPraR4Jf",
  "key15": "5oK9owst7aDmwZUSsVHApzFqsJ941vxCip5hByJBqGm1FrdSKwQH1PjL232TXsgjmVfsR2quUgKvX29RmBMTRHKg",
  "key16": "3Zr4ajVFYBk2r9F84xmnuqUkp5VgDh5fofe1DwxmTfag2wY1yjLB9heyYH5jhLgmdDcoUqdSCeDFn96g7Nr18BA3",
  "key17": "5VzQ7n4QUvbVVE5xMoYeQtENojHH3mS1BsqUgGnyXY4eHvh3qxHpNwPxS4oc6EYnUouQDjWdwm8xd8vgz3GYtB4p",
  "key18": "2oDan5pLwGEyksTVPe41p62f6TDiMJLdKUrbmCMuy7iUE1mQq1G7HJMRhqi3rV6c4YVE8tgQtY92dkkgQTPG5r9k",
  "key19": "2ud8YHdCsaadoxMdjn1gXNMgUvvmSRQXyknADnbTVcSscqvLLLstskGGB7vnNbg69mMervzA9Aa8y34pSTEno5es",
  "key20": "28SGHbeByufqyHp3A85gj2Bco8SCJGY6F8rYmNbMVhNMreCFHqeYjwfkLTTSew98cWECE4fvgAQnwAZup8f3F5nQ",
  "key21": "UF4vnvRSoJ3g3hbaxXGuYaddZqqSBZ1b9tYDQ2gsbHjqpg5vUeNLXNjRTATRt5ocbPfvDFDq4qPCiAgEbzHBMAA",
  "key22": "53Qmrzsu7ABAKJsTiCFTL9uYC65UgqAayd2Z4Q5s9WNPN3Kma5gcbiNAeJnCJPq2jfU2QrPAh85qKaPDoSgczB16",
  "key23": "4hMurFA3AtqoR9Zd9L8xccr9xiKpoXCCF3QASsqefSVRCaNEPkmTpTfe4ChtxWdcSXRN1nFHgbskUbkK2fvjap9n",
  "key24": "4KG3TkRiiUMCChQWcjkgbGtf7kJDKFgefZ1mq6aZctE3SrofhckuhgDvtv3Q7vnGeUR6SAJKLjomUXikJv4z6Q2U",
  "key25": "5gkQXSjbucMDHNjw2HSVyGPdD6ttrwLF7y4atWno4LLfuES8QHsHL1HqfvpjV6SCwx3Bi6B8Krbnt4tNkaLDU2y7",
  "key26": "2b5ZV5g9fkVo5dtUMz57vJA7eSZTb4tn2EaEuji31EhEQ6MESVdNcgK8q977itBozMVu73sF7ze3CdYwSjQZVN7g",
  "key27": "3a6XQ84SrdHRDQiADZnQjzWzKBKQzdMGmmgfCHqwspvUcTyS9nXNoa2bRJ1t2dydLDT75rTF66prLyRSPVbjKrNM",
  "key28": "5Yitmd78oVvWuNvYx2fgmxq1ugpNGwH8SVh97SRcjkuNyaDtwJsHAQsxEqrNiSyUBsxYHKBmiBLa45xinPGPcoLw",
  "key29": "31EXxyvHEH9kpD13xHPpJvqvpps3fWSsWwX4FEqH42dnvFCD6Hw7CK9yc7S8mGD4RxJgCem6Xvh8UVN4uifr6N1U",
  "key30": "2bZVv4BdYpcSy9azDRy5X65nH7gyCKxMAhohoCJcqznRiaHWkRC9LByWqDVeo81tA3kmyYVb5uNnarTSwVtP6ShZ",
  "key31": "2Hx5sE2BhC2Faj4245CP7AQaSi6tzn4PKDXi5kVejkM5qYFssGsUjNPbgvzuE3DFp41uDbNwBmAttqwzadDhdrV6",
  "key32": "65XLkMoq8cgQ2YvC8Lwz5fJcrGVu9udsQuBtK1LMvnuWHY3z4qKc79hmnMPQNGhCKaXDDWRLtCns59LTo2tABWEE",
  "key33": "3hcNR8REX46zmfGAHfPfY7PwVFGCjTvi3Ep1jNDw8aAhVb2QUGKPdA6PuZ4R6qnzaM3ZyARG52rKiaibUrxWiZqT",
  "key34": "TLiWxdCuQqj5W4N46ZH9gbMCKCVj2eXdMKPdN7PjN8D2wToT9LB64zfu3CJcFMYKmctS4oR4RxkYYoREU86Xwb8",
  "key35": "L5FUAsSuQYf1TrCuJvTo5GkxSVePNTLVaocxn9sAmdRh621v7ww5wiyGwirUGMXK81G1CP5HnfTXSTRc7UsZAs3",
  "key36": "4915y1aCcTN1WNJYfYDEPfiv2iGgdsgdpdqCcUeg6Sq4DVZCDC8fXy6qFDZc7oZdbVrhsmTM1KFTqgRYph9g2Ffu",
  "key37": "2z7SXpssNMrKQkAcoaDNe6hXGSg2zwcXFhykotweMhZjct5k4WX6rXWQmj8bri9NacVfCbZHiZbaLTjs9pJReLtV"
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
