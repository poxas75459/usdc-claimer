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
    "4DXF3ReBEmd1WToZSA3YXvZj8gMq695SqCaspSmEc4dG2BR7aLr6sYr4FtQhqzz4xXsK4DBtyo4U2vNN6rwUsrVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ex4Dhworm8u612Cp4fH45rBJufMZLcWYvjhHqh9pAL6f2aGcE1uxD2ByFcQeJXezqwUvX6Lhngk6e3PL2wtZ8xS",
  "key1": "J8hVxSf8hjHbtZhVcBKnGcYKzNPdkewhE7hfPdbyjv5rzgfkhqLmBvR9H2FgkfvfrgYkhvjULLknuZB2xNnVLDt",
  "key2": "636p9BSDKJ1tCdzQZqjMdGrrMkpFwocwW83AoMiYpXoVos322qVqchrBqZo7GhMLTgkpVRnBdydGTFBHWYMG5Xpr",
  "key3": "4A2GFjHBo9HvLrTN9ruxD5wYzzroJH6n2qZ2nhBjga3rumeHPsQnmBSRSjPfUyeuYhdDsZmtnta9VrBj7EjK3vov",
  "key4": "WvKtbzZEopcEz1zNaLHp5JKb1fU1jbeuCpXXcmH1CdSckYUXnq2rKXz9K58kHv3dnyGAYxcY8bikMoER24Gg1JS",
  "key5": "12jUq8PEArLmzHvFXaJQbGdj5vQEhoDP9na2zgYgUc167FCTXqcMEbMZfiFvzeoXN5hyHuKY15BAF7xCzMnyBQi",
  "key6": "3YvYiuUrFYY16x1LQXNXmJpF5wsng8LzfhekY7FjfhgLz2kdymnyHWR2jbzrnaYeitpJ5Z2bKtCmNKKLfnb1mQNC",
  "key7": "5XtC77NpxgDWv2hR2oe2VNz2ufvXygeYZQRiUA3fMBvs2pQmveUSts2GNCGgaqmoSVnR316FbS8dSgXWmp3KCCEg",
  "key8": "5R1zsdCB6oHJjxFK1SCG3o6fnxHDRpssdYpzVM3uhPYfof9mUen5cugPxVWzh7PZZA3A3g2Gej3NhW6CYsCZ3mSr",
  "key9": "26DfUDdw51XbEDT7BUVypWrW9ayW81hiMm99FSqW43HM4TPhwLCgGYM37WddJ9oPtwTgTW99hDvjeZaBSRKQL6gs",
  "key10": "428ZbemViCLE8DinNQJCQZNYbM5E9w9AcU3yN4m7ZojV5oMRxwGXaYc4wHLw9dEq5gbCQZbB7vL8YCnAEr6XhCuQ",
  "key11": "3Wt3JwE5cLZkBU9ExpTjYztQjDDXRN1VSpY8kstRawtbQgSugDnbSN3DmQzgJbX4j3eeGDccMpTAg3D9kPjomgio",
  "key12": "2vGfFWGJwbr6Xn5JKKP45RuzQeMj8h6VZ1g2ypbkg8giVvzhDvHvU4uaFu1ZcG5kg2yeZw4EKfpXBW8Cp12weC3o",
  "key13": "5jT1gduRU7Eptn5rUgCAG2azhTrnnfAWP9rK1TPoeeEJo5g2zeYF9zFq72nTji5Y5yt7TngZbRuEiU557TpX1FW",
  "key14": "32vkkixj75Vwvk2AxkPm4Gbft294MsgV3oskM4wC4bW4Sjgk6oMU7LJkGK3bT3QnE4Bj7BE26NBeQbC1BCSF5Sfx",
  "key15": "4yYTMP91yaNiCkjXGTyevctrRyCRpVzdQ6roKDRUDfeQVyFKULaxKV3ZJu1xSHZ23kmQMb2kYSFaXymskgXnFFy3",
  "key16": "2nRBueioFVD5oS9U66SxPT2QFy77f4ri9wFEBFKqj5djnGmpKrJy4jmfvTfMz1jpjem59s23Rbaz2fiaDb8csQBT",
  "key17": "5MvEvoEHDEqJRfxir7V18LHprHngoB6MVgoKf5s12VPaLf6jYjC5SrZT727RPWmhQzv51ig5Xy3NwVx9EsYE3Co1",
  "key18": "2Z3gGmMvgM4VSCcJ8qJGw28NCy5F5XSbW1gLLcMvUMTkGqShdVs5L3JjRvVxomN192Pzc6XCdFUZv1RWriHWo1Ly",
  "key19": "21bg4iYdhtKM8dq15m3bDiX566RwCJNkreKcLV3tbz41S2abYeL3NhMXfnXuRbort6DdABqvQnbY3PB56hFp9fQL",
  "key20": "5J8WQQcGr2d8YFX52kQ5G6D2Rkc7XAnf6GNx5XUTKBri8zVcydNuqBQ7xQa5WmBX8qk1tJxx83jnTDNY4tk2nS92",
  "key21": "3yvU2Cn3KnXRdxGdEyYQf3NfF9BgUkpb6gWC1A8TmGctyBxdqnE1G8cB2LELYYGJXiyVJWSCphtinX2cky1XBvgu",
  "key22": "49NdDfSDpqRBjbkxZMASuFJEvc2QU2FAd7kLY1ADQFL7rPyXG7Q3GY6ioxFsue5pFmaSGcPYdX1yXPfXKF6o4Z4K",
  "key23": "5iq6N7WL4gqQhx2VCm9uDASUTefk3NesAji6Xd1ZZhVQoB28U9QMAM8bpL6vWWozsccZ5fwczqFtnVyqqkEZ79iQ",
  "key24": "5fjpQ9SX1FGazrs1QGAHsXRVqLwMGNu81qaaDN7gCPjbgLtfk5Jf5yTkazedwCv5Sc4QCTMyoBXV3R7pF2RFPPka",
  "key25": "5seaAPV3PasYEnGyT5DrGuxq1S5h27RZtPA86eGp8unKUyGAmm9Vt3YKxR6ML2CuiKPpnQ7aM1dR1eaXrxPQa3WD",
  "key26": "TcqXdQFEdT3vA97PGAxAqXJGaw6yEkHqQZpf8qtqjrKc9fbwaiLCicugEUxH8ZADHvroTVo6nJCeybE9fM8afiY",
  "key27": "5UZpfL9ntYK9RhLyU22SkpsZU2eDS7C7RVSqu5oBtRxcyAjEnY7H1cCMfuhi1Sr6iRZHEz25W3CM5hzzzDzzKfod",
  "key28": "3RNEMmDZDpKBqzpTKqLcnPFhisnyYWziv8t7UTJKNnTco833KNJDzu6NbTdrPygfETvizj8v83CxaGGF5DU5anvq",
  "key29": "5fa56eeJmUuWo6tGqx8YFNopDZBmhe99ZftLveBK2MLG264ZCX6Y5HipLGTjScQvZvvTeHzL2A7JAh98jMo7s6kp",
  "key30": "3qZt8ZEcdonhgzQUZPTnWNdLsZXiQAS6UtVjx24nP46FxxWRvVih5ignn9JVNr6hyC3u5zxDuSKyrUerYFKKhs61",
  "key31": "4BFnvJWvPsYKufCTcfcbKeHNAKkJ1BCjUejG4KYTzUrLS77WzWQq9oe4FLXkwZAeQRLnkdGJ2CDW3eqMvbPEjUBb",
  "key32": "3n1Nthe8TWWFi9J2jnWm9gtcECUbyxccEKKLuUatDn8yYCJXcXhGLg6rKrQC9YtZ8tefHUsmxe89cyb4Zn9QrZcH",
  "key33": "kzhqBDPGXFJHBqgnAZLE8m9hAkChmBhxdyJ3ri8Gfdbqf4n6t18NN2C6Y4j9g9ym3Bs4RCaUL99W2kKz3MR4iWG",
  "key34": "2ZfXEhd61CNwWSHsSkXgYxrjhAfxW6ckXYj12toNBL1oZxnhb5TbRRKMEjG7SaVmwK42KBcPMmvGHRns7yHvxmG4",
  "key35": "2QJjaV98Mr1K5pgdcEXpYjXsMsmpyP5QHjsh5iaY2EHj3j1hUBzE1CZkiDcDtAy13b4nyU9ALCvrb9a1seMmZp1n",
  "key36": "2gXJuzmA9gESu7NoNaA5gtH3UpwFisjHreCEzPbtbXxi7NfpW2UnPkHHu4zdgvrprzeTJwjSJPKDfJdaDSYt3yUU",
  "key37": "4dFvHb4hFV6tf8MT14cM2sUUhnCsctyFQ6vXqpPr6uKJ2BihzLSUtRF7h5HH6D9HKT7weqLBEUWQ1ip6eaPNqrzY",
  "key38": "e756pb6kHjquTqs4pjaYGZ77J4JPVGAcwJha3s6ogqFr9sXg2DPaAM2z1fxmctzwiVhyqygTYPYmMvZ4jmLhWrp",
  "key39": "2kSZkXU8fhg6YaFcrc7znj27cmKVAYpagbNi398iF2Jzmf2ArkiiANBXkqeqJgmL7Y1nRfyhwkQtSwTKcXzjsgCA",
  "key40": "2N8YVcmreVHkgH8MLz7tjnzLnR5F2wBswCRVmvkDSyCEjKZCsP77FAnb2EjrEYpbYsjhZYSmG8Z7B9fJEwTKoNEa",
  "key41": "5w9fYhCGT6KmvvNhBpFCpnqcT6YRQQ2WiK9rYcr6RufxyE3upucUpekmx53Y9xFNghLnXQcokbBUKXi9hMeAtC7c"
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
