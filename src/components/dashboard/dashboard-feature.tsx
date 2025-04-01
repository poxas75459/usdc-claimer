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
    "5Kp6YGMjA6Txma9az56UnJhKVwcPpkzR74tk2sD9YyFpT8cp6e4LJTbTDsE8W4fH5Mkcu3uzT721zBcbPLr7C1zd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XjvNAwTVny5CUc3RoVZxfVVYjoAyaUSxTyqzeRp1cqMwKCnn1sdmfbA5eY9DVUd1jmYCZSq2rtpCCJu322fXVty",
  "key1": "4tFkQga13CuKAsXwnrt2R15zThL8MLq2xBQdfkUrt77UKq7JUiFXfnERtVzyX7VdJ3qFftcF7mAHxuoiiyNMcrH4",
  "key2": "4snuuDorR9wPSW3jo1i85jKrXWxBMdesmVh4Gw8nGm3b2EP45mhccp6iSLyHABCKDPEAFAjw8DkdZK7oCF1TVexD",
  "key3": "5NTKQrXPwUNUBS14g2dgzWhf8VBam86iFtddKVg6oD479KzuhVi7CwXAc4FQubSVi4zDP6ih2sLoMcY22j2Rk9Su",
  "key4": "rHXE7Wsmb7HQBgqdsn7u16fEbkuK2gJcD1CyzxPjXfWujLmkZohScSVTk2jULMvYgiHiLhtoR6JqN9u8UF8C7G6",
  "key5": "5h6bZw1hXKRdVqT2m2ZWMqQz8yPtSQLvFpkHj2ykogMtjXeEdgV9sQwjjQjNb14tDSaXY2damHC4dFjpxQrZcy16",
  "key6": "4mMMzovkmwUywxwNxugPCR2UBoJAFfVrPVCwBDnmMkpYNKBVm5xmhvvrFBus6kjL7jjUc9y3Wi2qhzdLc3HDbmmx",
  "key7": "4KMFhpJ8m4RooKHtRvfuHS34tMj7y7qr7xUf6q7SLNLqeS7jujZ5qpXUuDdZRh5zWct2iPhm6CeXdobDdPwc53CU",
  "key8": "5TE1QZUnWtEXAypykWEdmvpz5neKi2Xztk7UjVbhf2E3N5T8uvm3KuHC4vGG68oN91KM4EB6jhKfctxyxdiSxH1",
  "key9": "3bxMJdJNdEW1KzsrMnpBf3ZMrd67DgDTVpz1vqMd5HGp4LGGJSyUH2ZkNWSvKwFPgTNwMouxTthXfQDSUD7FV587",
  "key10": "2aZct7cWXzZDhWZBSNbW2aioK9ZiqXjcW6PToxEFHrr7EnRAQJY9JdRNexqjoscd8Gu8bHzyJHrXTAjcNaXXdd7X",
  "key11": "3rwsfW1so24uZAetx57dJsdAuRqddeRd4ody4bV5NzMzQPrf6putNEpB8cPcvFVg8k2N92etNGb2bnSiPkwjDBNj",
  "key12": "31FCgdP7imDVksF1m3xryxLFsggevwJs59gCC38ZqxmfT1xE4x23FJcj2zaSAtvjNzGV9TwQ1bQSnTG517rXYj1o",
  "key13": "3GuRprCPjh2t51FgvsCChnJ6jLDpUfMmuW6wE1Rf27EYeMnrmKYunn86GmkvDJpt7Epyg1d4KFDMCDATXEBxy5a2",
  "key14": "4MomxCsdwzuytNT2q2yTzHYxMUt4qcD3puTdJRNVipc8E1gdTAJYPtiaMWiEdVWRYnsPXMKQJkjk8bvNcDg5CYbn",
  "key15": "39mpVpUVmwsEFXUwegA2SLK5Ww15LRBNkdJZVfoFVDWkqAJYQwL4BDYi6kQv8aGx3twT6yLdbW1zJKm9gFyPhgz",
  "key16": "55qCsZsVA5yqJareeJnwdRFREdcouAYdVmEtHgCF6gezVmZZ3cFtWoAxD93cJAX4dHCTE63hbAZhGLdyyvMMwwdU",
  "key17": "2eRrS92hDCobUiZQvrbpDHHR8AjWRci8m3Ty31proYDXoUHNVUx7JA8rwZvHtJrWKjF2DCtiuqzbJVCxqGGqxAnM",
  "key18": "243Apb1RnUYPi8K1dWrz59AqJ46vPr8vPxUv6GUssVbJZmwwWHCb7BR5SPmHr9erjXLnmpHgqqCuprRTCmyipXXh",
  "key19": "2i2z3iXzgpxVkqUVHr1xFFYiatiW8cyK5F83WN4Vi2stCiw9WR311wwifHqANpE49pk3SNXQMUTetHiB4Hu8M2TH",
  "key20": "Y3rJkn39ACQgqc7i482AcQbw8C8Yq1opz5edcYw7Lbp7CwqtfwZyF3T6wX1dLEvxfomXbRNwVd8byxqFTwgd4CY",
  "key21": "2bXWNUG18Sa3vhF1wrmqFbrZWUxhFg5ZziDCVHMcFWdQNDVyfz5394tm5LY5oYXQi1ooC68kvoPVURPqHi5MTCf6",
  "key22": "4Gs6n5LCg23X3Z4FiMrQ24FkupkSNt4Vbhkg1EhLyY8e5VCGKCUgCbXwaxpW5w77aVkVfnnnKN2hhJXyWR6Ejbsd",
  "key23": "4tT9cprMNTe3EfDGn92pqrpZ4PyzfwjFJpx9aTBUtaF7F49wDdYsrNFmMHUkid1t8BCAqfry68cb9gFgCPPuvDtz",
  "key24": "5zWVDihZD5Yo1d5149JjqnMTQNiFQ2PJoXzxhG81fBd1fuBjRR75vXa1fJGQWH4rK3etoiiRBdk1acXbrCZpNfSp",
  "key25": "JJufswyF5D6wHG6cFe6FrMUJsBmBGS2zA8WDv6dCsGybcHGcxLewsYf8vHWYW1wJUMbvsft4MSXUvvgg2unXpve",
  "key26": "5Pp84FqaKnUkcvajcipTRiSPcoUAeZaCNgrehdbMJfXVuZZRWT6zqPVfqJJYBejqZy7nckbgqmawH8Y95znjucDR",
  "key27": "4WksJrPawMChkHLXqvWP8DYhviY4CJkV53rqTgKSfw6tTii1AbvPM1Wunz2HXVsXHMWkmvr9n5fegXi4Gz52Xc6o",
  "key28": "64TtYEs6zyCuMQEP5v1gkG3jwQXbyi3xMg9tkrrxTBC7VZgC2gM4aRjNVbj5MCVbrb587JJEt3hg7MEs7Pt6uihN",
  "key29": "4Gs4wfgUM9dCDRVD9cxkEmbaWoTsy21zwg35hnmW4y2JdzMBRHwNVSy3dopQJGnSkULWkdxzpVBCGEV47EdVSXo2",
  "key30": "KruBtRBsuwkJ9JZxqRghVdbpScvcxDec6ENE24nsq9boWh9Jw3Cwu6fTJTPJiBxYsJDZTPsxfHo8M2V3gX3kYD3",
  "key31": "27QVLEEGBve8yknJpJ48g4nvgKX3pJp7BwBBoRTiXV8c4gk2D69X9dd55nAU3bKRTCuahijk2wH97JTcZgbbissw"
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
