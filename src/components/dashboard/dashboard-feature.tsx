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
    "5QXW7duPjWsfB4zu4fKZoru7BsUVLo7a9mEssbQNsFAwzLqKuNbPpUFGxcATaQb8ZZZCuXKUDNorromyTbCb3cTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dwS7QduLmYxUzJPeeATU5nYki6wepc2ZQjw8Q9pQvZ7oVvHcxLjW39rmfNo6p8RgsxtarMmRtQu6sfUcGztsxNd",
  "key1": "64MUjaWyZgz4zcpnAPNms7FUMHXQgrALCQ9npWDCenANk5jXuE1REbUuJzWa1rBhkLaxpf7TtcFnJNWc6CsAvBKn",
  "key2": "5Z2JHLzPqhrGLk3dYb9U6GLGWHqUZGiusg3o4WyWWdCJ5bS24LrocGRnSPpHaEdDJW24SLyWq1iKKATmKtXrKkuE",
  "key3": "25EF35MdxfNrKgj2cjoExr1FSJhJ1JzPbWREU9t5BLNdbJizjQXDTEshaLzXtiFciJ1XKfKkaLXUXM1aBEMdCgoC",
  "key4": "5E5DpSFgYXmpDR2JjqAET3CMTjdBzBSHxA9kzdySrna396jx9GHmqxETpSfPSbwNkgu3XzenwDp9QytGcPHVCtHm",
  "key5": "485Hso7SHfnQkFwdkpDCEEJvD1yckxicchTmm3odANakMkwngJ8dS9WU9KT4rL92Edecp28tuNsUfsFFgqpPb1AJ",
  "key6": "3v9ZiRrHcw4tcVDK2Xkx9Uxey2G9phQRAEQKWEsCV5WgfBBD5tZ9LX6fz7wqeyG3bYM5YEKTWYeXfoaDEc1BjeLJ",
  "key7": "46u4VekhoFNm8GMo2xokpVgbxiJhH2BPe7JecyA38VewZ2dmamKcaQ7XXNXhZN3XV46katijouZDLk72DruYju7w",
  "key8": "2vEFu38epEQHKVgeHd3q5cYpas5H4SLQNYopYazzSqPQi2CWVnjw1sjtjiYW3XEmADFsU7NcFHwN3ZQounRsfa7D",
  "key9": "4XvBZ1fWYUQmT7iwPyN2pw6M7uApipB6awGtvadinLpATjtMyvLdd6qbgEiX5SQTmVgH25Ws6EGj9q2VPYhatMZZ",
  "key10": "X6Lu29X3pnKhgDKH6kb74PkCPH8rN17Bv1w7vxHuNySyKVaYmzAYVck9f5iWLTfBDFkksHWPP6NCygYskfnLEFp",
  "key11": "4g1LHhAiS3YWHPmc9FAQZWHoCByjQ64UVetsNu3mXxtJaQo4LiQ6xpT4VUga36X9ci5nnUx4JKGvqaKoaWhqxqx",
  "key12": "2ye8wSaBrTDKZ5cmkuagfKtnAuNJbcmNecMpYA66ySogF84ULNd5M1aPvLTVG5yjoeNFqTYv5bLGNyGvrpLZn2HE",
  "key13": "3u5TsFtWgAeCjR7wooN72QHeejgcgPQarfq9k5pJH7MuLUpVTwsRXyFwUFPB6C4Z9hd6JEpPBccTbycqFNBGTyNp",
  "key14": "3SiYvxGFQejawdGX6Sm11QpKhAxxqR26m3JUGUz7T67nMeWAjyeFAehnaBictm7srqfTVLjVJDun3Y1SpVwgJXsV",
  "key15": "17T9bF6cQYfqqx54vRPHUxXN36RgQZx3mJ9Rod5F6wUzVZWHTL8HTxiWZJiinsmnWmD4gAqui9GnhTNxDy7tHcs",
  "key16": "5ek3WdY9vNQwhcgEd2V1dtNFyTwmk9Bkk8TxxZArx3WrYHSqsqpQsTnbkeZE7WFwvUP3pUZWAiro3y6dq9jBXX62",
  "key17": "55YmTsGYuBmDuTWBuaE7vPgtV54VrrZvFq8xWWW77DmC6ZUbymxYct88XQRD4C4ynqJUZZGSiVucXdEg5wkBkuBy",
  "key18": "5EMxWT7jD96TvCrcVi827Wa6WnB13pfyWWd8JAzyUZZj6t6f8sBuXbcEe19sgNmvLA9ccqidgvGBWDXZHKCHnxj2",
  "key19": "5rfYdjrkp2igrwhRr1TxyQrgvCsMNXQVixbXciZajUonVyTHrkKt19vVsDZNPtDVax1EeiNFt4c5aVte5Rnd6wU8",
  "key20": "5KBucFHasB4v2naYeZ6mfAP1Th1HsLESX1BGkPW3tVyoC584bYEHnMF2X358yt2i6jSR9kKimP1xp3UPBhgYYB9D",
  "key21": "4x5WVRb5tcxub2WP8xAf183wHZkE31AM26taXrf5R7xEn73hALgzsSDC4yRezDcGFhNU1VxvvA6bExhEuP8jyyWp",
  "key22": "3bCUB7NAy9yhuJpbgRUqEVTgNF6cXea2KNivziA7ZVtoR7BtiahYXxE1KYZwNLr1mkWX6H84SaeFMmDzM8pCfnoN",
  "key23": "3UcmYf8veuqiAPAXEsGieoSH8qCkG7RX4UA9HXEs9JHujyDo59LPCrVeWZeH5jSTnxtFwjdvf2LLqHAcm6k6zetT",
  "key24": "2txqACNDdMzM9yd3LCSq2gWAqDSc7GkaxchCwrQzvUU3PiDDRKQR6tjnVmjh8CcVfJhDvaZ6kTY9LJCRFUsodd3S",
  "key25": "3XJsooMfmAX3fexyAZrfBVqyJFTuUfGwHmpyxgHM8GBvoRu9Mt7MmuSxi18FnxfxRGfnaDKC99VViAL5CSJNRdjG",
  "key26": "L8LWe7wWMQquyAUKKLh1ruU8JhSZ1Tr45Vuvzmh44FJVpFoUMSx7fG5K5YXwFDszZvHjYek9EGpCodjHLi5qLAW",
  "key27": "2kd8gHGLHfNAQWEJSPZ6bagzPpSYHCK43n9BuCv2W6mBCASseeo1Geb81nHVbue6Dp5sCBZDc5tKkpbWQ8A6Uhha"
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
