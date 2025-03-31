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
    "4sT1ePnhgiGN5TxGxMP8JeqbwJPZCUwwRUwGpBdp5JUkdaKRvaJqsyC65RmyKjNAhEfYe8rcTszYiiQRyj2nGjhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xaj7PFQK9yvHnb4KTFhkiqXiVB7TbCmqu5bkmJaSAf8MC3PkV9zub1Tdm1MqHWYBVurs2v7yYFKpnUJnquTmVxJ",
  "key1": "4evWB9RDXjSR6KbwxzQy5hDewd599igo7urXbTcfU68cnku6Gt7DAHe2twCxWbDt2LTA4tVqnd6F3hZbMmXzsAoy",
  "key2": "36Hcgf8wkLweMs5adVmZWSSGcgrBPaXHtT1yTHom3wRHLQqj1ZbCkukHYatUxvEXNCTvy5XwvXos3Aoe4RPHXzWR",
  "key3": "266U3qy75YtymgmA5WxpogbUKrzCnfDYtgMASAX71Yxv55HJdsfv5nhGNu5w92mQppD32vRZeCeb5ACpNw1BmJdC",
  "key4": "61NQsDfhEbcfaJT3nVXvmFh1ra6i2tdabvGNNZNpTuu88SyADt1m3gPTYwFscDonWge3bPWKfaztjvG1eGhjPe89",
  "key5": "32XokC9Qhz5P466Ueerryhw1rrzsSXpXXWPoaw847DCTB1TGgD5yKMmmJHngU4GhsMvycmF5nUcjjxcbYV6hrWbi",
  "key6": "3rFXrE7Nge9UCh1jjHELJgZP8q1XBk344tFH5mkigzgoRXw41Ah8cDefaxTJnL518Y2CA65qD2gYsamH5R3PRpKM",
  "key7": "cocf42z7gFxaWepVgSSMnKqnasdW4FbVZzzGukNQat3khgoH191Wu6cbkXzUtVg8KpZ5E7oV4UkJkor2vZD6Ebu",
  "key8": "2ZWJJELv3C7oXAcsEQEyXQbStSRbcHBp1hVznjUWGiv2N3DEr8K3EScBi5UY81BAwhECopoZb9PSjp5zyGacwy3q",
  "key9": "2Eb3ssx7GvQDo9cpF4La8pXfGX4HEbSfGGY8ZCnkEWmpMGTmNg2GE39f29hbZQNDMHRVYhad2Thioq99S4AF2qqh",
  "key10": "5Vhw6HZLAn9qCj5uPfGtDFfQgAAYvuYmPERrZXiUF4PvToNY3fw6qi9xuwR8rzFbf64vjQpxTLfrMbmtFyCwhMQz",
  "key11": "2qewFHECTkH6kEfyHFK2SZZp3jQMAHJjt7CfVw1QkmjMMKoeod6g1WD6bL76gDFAw42cU4ynAD8fLC4KsWPvhSR3",
  "key12": "kgCF8uvvr6u42FFcgoBJqtKSatQKe9H9u2Wd2acnQPASzYzGQfo8eL2kfqJwkhPbHadZJ6jxq4CK4Kgk2qFB7Yn",
  "key13": "5SUZss9gHmVgwsDms4SuYNTYPbva4R6TuVnPovYSQ4Ftcrdg2n2McMmQMSG3c4dUCvyauQdvRapTDACnUAEcYCQC",
  "key14": "3VPJCVwecai6mtXzC8mEBj41XwnwpMuK4uNnSWee9zbyBiMV7Cesci2vBkbwYb2e98SQPKC2erQeUkZUA5yCQqvs",
  "key15": "5SXLc3Nf2bGKNgG6fokGmrA2mDxqG2jMtx9o9YQWTCpcQWrdwkxn4kLdY23fKpR4EkLeB3o3qqzgrQMxxM8EAqvq",
  "key16": "48Y8jXzXDSWZCzTKNjMpkqHqXfW2tFkRLvsaLRHES5tSnH8UxCAEkevQU8aQbepWSy6exnasMhh8trKr8rqVFPrP",
  "key17": "4W6pkMhooby5qvf19DXz7WbsReRuR7ibHvABoBSgtDYKCgMYFVQMLicDv24aix7AFfp4ezCuwe3LeFKixzuwfDaC",
  "key18": "4o6siZXYmWq2sXwowo6nKc7Vciq2qLRVYywbWwj3vnGmbnoHSzMSrpDs4fTvmi13ebnvkYtoLvVPPwMH7regDPNq",
  "key19": "5rfSDAxh6bUhiixw3uUgFjVmKHc9zpeBfthkNN9ycX1shHtowy7ct1kTZauTzht8Zp2H18h57BXCWzbJa7rwPxLD",
  "key20": "2P3NQ5Lp6aGoLpNW9WmtZRMk3bXNXAnUfUnV9uBpXA4TWhjaGPA7UZj41tHoydNjj15Hm3tDzN3Nz1k8o8Njn8Co",
  "key21": "3ANZzNpsu2YLG7Z2LngKRgkYCHctaEeNHCSRYtyjVZVkrGe51t9M4Uw6D2t84DXKxmRn2iig72qGjqV5wL7KMSBh",
  "key22": "3Aze5Pa6K1Ax1ugTdzG9uERLQdBNbdFiEcTRkodxLUyAVTpvRWSQ76fLCyVy62MQCZXpyPddPDZ7bE3bwo5xNFyw",
  "key23": "5bHEvgaYJpjiKQXjBdMVi5HpBCuvWcJamVfQCm5Mb5qnwL5MxRjo3Cwfb1T2ysTw6JayjLBR992xSh8up4cg1zK",
  "key24": "3sfGUbUwXhgEVktAZRGPBF3gCFuDPWWheRkdXxkt7kZRSztbdStwmVfh8mfTcqv8Z4wB2BPHS1fJuV15b8To1uqX",
  "key25": "4ixxy9fy44zZPPM8PXPiBn8ToonjEuKkvjxzWxjcSfmKDMBbJPJz3pRBSEPKUd1K14H5fCR6dU6aMi5sX6nKtAkN",
  "key26": "3i3q29Baix3PKjwCgonH3sUwaSnQGxecZXcn9bqbsGt8ujv7MGKs4jvpFeCBvWcxaXR6oCqpsQKijFsMCd3mf76e",
  "key27": "61nXGND1UdLXhyeS9srJZWgC2GSUaXi5Udo2mrx945CdcbCQCFQHpEdAGvabn4UVvHuRoYNYCmMBjYUKvR3URCa3",
  "key28": "3EDpRnVr2LCLPAiU9tfCysHwV5o8m8qtpkDas9mPA4aL2zP93w1Jw1rxam4g79Ezi4rEdQxtc1AqbFPSV29NJYiB",
  "key29": "5uW9aTwtZKDiSWW6fVKjYGWzfs4uNgF5JAuNHSipfkPr1J7MQHTwACC1SfkYSVhMpe8yjc95AmK3v1b6mtQgvyz5",
  "key30": "4aozg9LTq6nGbW9vzAH3ansoRnsX4n69Sr8vXPbFcJKtvsbVit66hkG9jS9tVaHjNMWzVdu1DEnhME9wtU7ay7tA",
  "key31": "mX333eo2JaxHgMVQBmrajixAzMiYzQAj2qAegiEqhnht3K2ncByZDhZ6dYAgPEyPSXfiTszDZ9SQ7ELkt3iK5Wm",
  "key32": "54tuc1CijUY6Fba74BEPNfMpea8ULrmbhYnp4Gg1hmybqDe2kNY2t1PdmsR4wPmiJb8ws8KhD5n8uZqgpa38RjDa",
  "key33": "28ww179vzi3JpYL4sr8cBjsapd96p1KFx2VvXbZVsGBNgrtrGPsgS1sTRiDy1gxpjoBZzkLgVbenATwGCz974zYi",
  "key34": "5tYnfteZs4qcB5iMGsSVnG2Qu3g1YwpTpSbniPAQHcoJ7ohoQR99oxxYc1oLobxdy9z5tbuak4pXyv43uPjH8tMo",
  "key35": "3uRLQ5NTrAK6o7jKC2rZGhANYEmMnfWErL67zwHfsqo76uVRCy6Nyc2E66Yifew21MGeQaU8xnFABp8iuvkzi7WM",
  "key36": "2CyQKretEC9yJbmJXTpGxiBG8sGfajjGzjpMnVU9HjrX2NuJ9SJDbonQGR4AD5vy4D9q1HkKb1XKLQVnaoeYPKk3",
  "key37": "3AppZN7qPo64KfP4TPDwHCSeXSnczpBvGvuCKha6SeaUFT2P3LspqY8PLDzzewehU6JuEfAeLjkJvSnKTaohU3Nj",
  "key38": "4YMEvukmFAsWHob4r88zAPTAoTEJmNUFmLedwZfqMQPLWNmgrjwRKC7C6w3eYTwrTYE3FoDBWQQtcsfFSXNyA9fw",
  "key39": "273c37FdKDjxs4kU13auNQ14b9UDQcUHYUFybuEg5CQoC3qb4okkuGexZfpk9BWmeHUK2BayQ7ZrV9DaaZFEffvk",
  "key40": "2RkciswHjATxUS9RtDnrzC7xHBBziZ5V3mv13SbW3rPDwzTriX73rwzbVeuVWAsppMAqwSjMUvEjaTyjtdceVwux",
  "key41": "3E8Mpp2nmqgaU86Heem81yXDkKsDDjmBz561fTPR1KF9kBmrht1VH3diMKVPGhSn6MVvtpAwzKf9xQ7S5oPi3k1w"
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
