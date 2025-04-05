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
    "3yMVLEn8hs5ktN3WxvDAeHUWpovbN63BkTj6MNSJCkF9GJKAMopNSBv1fPiALgSSv2m1w73YF5F5xPDELTTX6pEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61bhFhQjSWmq69VsUJ2cQcu7g8gNBRr79MKsK24tarav9fJcfcCsYPctkv8rj8PYRsaMe1X23XL5FbVSbzPiZySF",
  "key1": "2wpAY5XsShxxC11hQ4wuQfA6936X5XCApEh8FdUz79Vje3xMG1kvZcAj9oENaWjbYDNcdnnfrp5FwBh2sSFQW5pp",
  "key2": "5UAUEardtrcnX8ijBbvekDQmBgAXJVmJm2DvkDK3eDYq8yVNjPQkUKwb1ANVFDfy3E7cKRvWPTzSFau4ujg8aXnn",
  "key3": "5DGUmjtR28y2NcXxLgQUWGnGJDiA2Rd6uptE29Gj5XZchzatauVLqrt8baBRVi1MSTmm8EFaHMtTQVNiAmUBLS98",
  "key4": "RwHoh3nmVYDozekALpZh8gEeuoxL1cQqvdf1GGNz8khD8j88RU43VCsYDQpgWsjo3kpmZ6q1eus8evyoq13jxz9",
  "key5": "3nEJ86pbvjRxkD7B5wEA467qMKiokKx1W9RUajj9w1icyv3AWCNtze9u4aZWTBoFwsRQ92uRmYJiQrdTfmn9yxHV",
  "key6": "23oHdwrwBWTn27Uupx63m6jJqU88p2ngXmk7ieZF2QvsgC3d5qZJaxKFpFRJwkybKKyVSAAv7rkWbSp9SQr93QYq",
  "key7": "4fPMjST9P5aXmkVgRGfo4H7WJCkWEMCJt9CZEyb8xumb8unoApcWqFHa6FwMB4viZAwNzotbzfZYkbVcesDjgmz",
  "key8": "4tuncPUz1EmqPo6nFuad1Dgf3U63Chf3h8e6ceHoP8k16NRk3FRZ4ZxteXFogBEk3QQmYC2jFgrQAQvM2YZmBLXN",
  "key9": "3QJbCRphMzYZceku27R7xLSqiJf3Sfn5Vmauih5CWqxMJN3KXPo4cyZRvmEhSprXVVb8ujH5wU1Mwzjqdf4F9maF",
  "key10": "4EfmnimowqUA6NqLMeoLTXU1sA5CheHZH4k9fzBXebnTVifcR17tdBs1SRL6Sf91YvYKLMFGwbHgwbqUz5vkX7km",
  "key11": "2MW3Avvi47qnYb5QywovMcqBLvHBBCFpkp4wUAP3TGy7uYfxcsByudMa2WtHTJ6wphfprmWiBPSD6ig3tmZew8a8",
  "key12": "3K7HM92NNWoZScfkUfnuqbT5b3oeUqLgoJjSiFPy5kgbmWAChR7VJq9kThV7zGio77ivnVVgPAbJuqu3Yip5UZLz",
  "key13": "2H4vDeLCSSy4gfigFYPxKcaTMyqpUaUQgGBnBqk3Twa2zkGiLwdQqkPwMDnCwB9jFvsuk1n7jFCbapg4Fb7kjiPM",
  "key14": "5rSyAtvec5hd56PfWA8D3K2KJTmz2X5mS31FU6DpvyVxeLqY4gJPgnmTyfi4NcnX2XhTVaRX8RpyuaNT6YT3epxM",
  "key15": "4pckXRA6M4bnXqvwT6TEddZr142F6EuXdZkYSupXuJ1wni2x723fxrkeqz4YCavWgT9MFpLwChqEqk2n3Yn7AVWz",
  "key16": "5wQUQoMbQGanA7Ng91S1JXWe5N4HbJyxGu6tcsU99dXcw7BsAxDXH5qe6756gFYaxmurEWE12XSE9h8TjGrSYKUo",
  "key17": "5a22tszXizmeZsREaH5YBHUniBuG1uSfUGFCwHTFdfuuFszmeD1bsRhCE2rjvjd3PUBevbzWsdxX1yegqkzbPysT",
  "key18": "4ZS14vdJjE4n5EpWrtZtTEHRmLGzXqyyVmaFMgzQfohfXRykmYQLALqKLNq6r1Awe3KTPxMxpBfjhbnt2bjnZUu2",
  "key19": "65jwpAchzt6jcysEVtMY31x5w4F2G12berdTtasnsbcofa162oiAgHW1C81zoStknALgybb7ocXkTDwd8YKJqEEN",
  "key20": "2vULaSoTEKN23NqAmkTBMEJeuKCP3XMsidSzS6a81D1gv66QwtsKkmJ3hmhcojKCX2SmcP1xLtkSQo91JvS7tWcb",
  "key21": "3hPozAi4rVj5Si27eshX3AsgBYjmnaF9VXDshgBR9vPhUvNNMautxJuWDxBsM5VtFm4rAaJ13XN8M533KaDjFtY1",
  "key22": "5w8965JFUD2bphq9Sp7vMFXAXXKB5eT8CZv3puBH4qJuZe5vG4qyoDQMbfzZNRmhQcqL6m65uaRAFX4gH95CUMV3",
  "key23": "RueGtBHw9pRtLnPpgJXN81oRgft2AC35v8Kbwi63qgVjiVHdSMcEwRim1SrqujcSDBuZ6ynzdRyVQjmeoE4aFSc",
  "key24": "2A7xTLzPaTd9U6erAmCuMRW1DJDMHQkw5SQZM392sCffjBE3ufecJZfnfzUzrW3XotHtt6bjoVo8e3VDRzF5srfF",
  "key25": "2GVbQRePoQxg7s2gffN8xB4akwRs1TipA5CDn4MwNFd3ctwaaEdAwAuKgaPkyhmzpjoZGAKKDZhwzrQHMMjrVk13",
  "key26": "5xXxDxdZKKLwXkou2JabWruDM4xRaeFznqC2wViFJRawEopWgst1a3udMRpn9tjvMRKMNg7DhnD5FLzASYGFbk3D",
  "key27": "bzwFRDnHpz4k1BTTfYKJ5WLhDKb13pnoq2yQQDvmSCtDybRqgWau5gcgmTbrht3FKtpHKSWugBxF6hpxhaXsABg",
  "key28": "4GTjR4ybX7ZKbZzMz7tT17RpQjL657SXxdK3UD5624LKZLYdsk5pi7Q76nFy5LzzsJqV1iRAjwnYTantgHMeXvi4",
  "key29": "TrdZqbesVgxigtLg3vpV6eTjKfzfghe7gzXBUrNxDi2oafpHCmFwMnxqD8RXZgZ7xN2NDacrW2wet35Y1khcXgq",
  "key30": "51yaDKtjxfxn9s5wCyMxQmB2n7Caa63kV6qtGskqzM9Nki3SstuWmosVg9pjAcp92U9oMEXTjhTYCxabz7JMDLZp",
  "key31": "2owvBeGCdamjfxD2o1uh7ti2knG335yzSBHF7shheR7UoH2L9yAfKCaumkonA8oV1ERp6gAFXiMH3Ti3oMJLo4ds",
  "key32": "3pEnBH8p7o1KFzyM8m3SDzRX94P7Fc1MrziGgvDYwqMLhRqVWNdxP4sUsPCT5ab196QuvXwNnArCHwusjSucTJFX",
  "key33": "5JwyFReUDw5n55zTTyk2NHwPPu3F1SNnhdytnU32di5iEM7BFDePmqq8KxMYAgTS547eefFqzu538HD8uRxh4xDc",
  "key34": "2NR3XQvxKQqKHvubSgcfTSmrVTTpDDbTpn9yhvAwM3nGBtF8CYe8Kd4g4omXZ6zxfSd8uQTDtLSLg2GVm5HvgpJc",
  "key35": "2wnjoZMHEVudS6VPxnwt9BPV1FLdCMBZnrH49TDBiuBvnK18jnQDNk4vUbe1eFPWUutSUX8UubKGHZAQHtpLeegi"
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
