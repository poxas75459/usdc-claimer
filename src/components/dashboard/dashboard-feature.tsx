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
    "2xs9EavYp17QTWxPNWMKjVFaL78W5yHo5DjC8yuKAQY5wWvPiFZamQLn1iqwko5dfAL8RJoEQ4z4swFf7otqne5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qyWsbBsjndyDs4SNcWhgz2pxwqZcp3jiHKoByWFP6j8aJQ8hAhqHYRgRX8aW4cTdMYQbUPq5ivBYfWecCpaS9Yd",
  "key1": "5VjrtKY9MtuZhyPMeCFJFYsyvQ1qBdgspMh8B3xHW9tqK7yRg5KpdRFogUfi99rd6dfAAucyCTwRsPJGSb2vn3SP",
  "key2": "5VrHU3L3ji6Hi17YvEbJJ27fRvf7DFkv1K52f5dh1kDzXdXEnT5ED3VowfguUjnhRy2xcg4XhLysAVx2atNfSb93",
  "key3": "32Tyg9Xcm2GDMPL9e2caXU6aRDmCpHbe5XS94d4S5yr3fSa9KUpZECxTYV71F8br8qDB9q8CewwRmCuFd86hPHHp",
  "key4": "34HBkc7xssbwnJNT7GWeuZSHENQZNJp8Ta37iL2pt8yZ3PZPf4GnJ7DE4nLAqFUhmQy2LiuqrDL2VNdKhDwMqgeE",
  "key5": "4WwJFd2gJCUkQ53j8Ro9Ec6DxB9wCFA6PzvHoKRjKHmzq5hRMm3KGj4joyZrgoD4Z2TjaJEhpdoehYtPFXaCuXM",
  "key6": "2Un55rJnTiEWLUzi5zJ1aG9E88KqEy1w9Da3PrqbKgEqT5S3dcmphtyp9XeghcnsBFWNhnuMKASgMfQfxiyM8eK9",
  "key7": "2T7c9HdMgjUPBXU8yYWyp8KWqSaP3Gje3bnioGXNtxAEsqt5GdCQf9puvtRdtYpnzfgFBXigHrt9FX9L3rE1wwXB",
  "key8": "2YQaqcg2BegfpEvX2HShYG5ppci89MSgpQwuCofXEVhoWzdKqiUpiWswzzxVmNEkVUDKYG3xqxV8nshc4pSXaexs",
  "key9": "4Yu85aZkrUmnLP7bNF8fVKTc9zNHrFe9ZDkJ7xiMjMksGtk4jcsyRoGBeuQrpzLrY3npsrzRCmN5JCsrqK1yceUS",
  "key10": "6Wor5ceBS3mXXUW7dPxAT1WvcyB6Xm3pd6vkkQPUttBE17nYoVZ5X9D4NZ1KwGQpBY9k9E37BcLqZm54Y7S8PZa",
  "key11": "4YLgrkYmmnVVy4LTSKpuRjTzGb1vN66TKrx6FqDm5qJGGBZ9n2D2wFaA4aRhvg1itCZAkvTHug5TLgJ1a6pXZjBU",
  "key12": "2paeXyMvFwkpQ9zcHnhQJHYCtA224iznrA3K4UFSC75D2sA6YHwFBxVPe42uacFXc3dKTFCHAWCgkMtdkeG5caXt",
  "key13": "4ZEUxKjve8gvgiJjDpfBUhiuvjMrU4pfKcShGUCXBwbpPB4sgx4KKULFVg2bK6frsrZKyGgRb6yuP53M9ihoUwgz",
  "key14": "ApfFaE1edsaWwgip8SxqdTmcNpAxZkra8qev5rZNJwwspMyhgft6QvZzYaf95LFXgzoKMW3kuo9u2uzpexre2Nw",
  "key15": "4xJTaSJV52fQhswwZ1XyC3vot4V8GuRz7DHBGTdVqePbmawqZxcvtgS8UagRaKyGb56VeDoCp2dXYKfei2D9oyaq",
  "key16": "4bx8PW56ZYYFAaHCzPMhyxWiEDcre7UnXfnM64YYA6YuVYTXza849Ehm9yXRKTJDwjPNToEJLXFufrGifv6BEpSn",
  "key17": "1Y1Es5Xt9X71oQYSjjynUQDVkaQTFLhcxfsvuEHhHVYphwqoFwmAhcqdNDKkw1eZukR8a1nhszvoGqN4zGM5FtS",
  "key18": "5FT9aSmuE845NDL81F9q2dcQAMceixFUqET8ZnrXynQDs4ptXVHpRhY1QmvYSRBvH56u9YWTiktuRf4NyZtu3rkm",
  "key19": "397mh23VWw1wsdYaPLUACUptkjZG9zWYEyo1AeCHQqzZs2GZ5jfQQq8MPaGxTAVp4zbKyAPD22eaizhHxETrPnMv",
  "key20": "3VTRGvmZs9YVQ8H47jK2AEVTEhs7G3fy8zRBaUxsi3QfSDecHdn5soprAK6oyrjjif3c6gTwPvu2SJucmzG5nU8L",
  "key21": "5JLFZSwyx4WBjC7FiwSjeW1aSdHNkVpB4UJm66Le4D4vkDoZ79SbxmdKV33MrUMY6WTLLNDbgnfxtJr5AMVvym24",
  "key22": "4HxFWmYdraoUcTGTuDbfSmMx5wcVdzT5XDP79hDSRRCtcDfWssRsZ7KBdi41i6Hr6wSbsaxGgAHcovEue9aAnwkD",
  "key23": "39LjgHC9tjGqyumKFMSqbNLwNE9oEVSe4gZYq5JCKTYTNjA4Qjf9Zk6Wd8Kgpb2psPTzdqEtDcxT46oQrvjyzdor",
  "key24": "3b2HWBxxb5iAjTersqxxyFa5vSbGTWzUBNjAZQBMett9g1vuU8cdFdkhsxQgMRPJaoCJfhb54QQZXM93v2KtyDRx",
  "key25": "3rkxMbiE1urWaBHN4djV4r5s6WbWimAQFuguHvdHfEUihhJbCQDYAjefPfup57PY99u7jqFC1n1kPHcjYkucfopm",
  "key26": "g1P6zrqdQ4DJyeJgaUn8DCL7aciBHzt29NzWWDUKAqhwAvhcGBjYc2eLinZ2wWzCrR5Zhca16hdp4FZqw3noiY9",
  "key27": "63Lw3ko6e1XEJAt5trt5CnMkAQ6CrT9aH5o9Bjr8tMTcTHWuMwYjqYY7cnSTeUQLc8Jj8ppa5RfQht4LLDEt1Ugd",
  "key28": "4ZyW2nT2yN1TSCmvbRPUEiJnud4BfCymeZmCXzeHMH22wzjnT83PCfQAEvsneteMXpdor9DjyC9ktD7dtyY15ZZU",
  "key29": "4JF1ieoYbfXHDRJ63LnzPvfB4XyWinajMATvssNWh1eyF8bVjjVa6p8wJyH7wy5QZW4dScf1HEUXvg8PKNq7HKKd",
  "key30": "2mampjZHo2qijVmbmyFXaLpf6nGRj3DSp4reDKai6L1aXUn6v28kGh5CRnfQD3LuDeLszuW9ex1ZYtgHSJEZyYHz",
  "key31": "22pjTtTqFaCUtRQsrp1DZrZQjot4R5nBn44dHJeHrtEKEcTZr2BoGargq328M6VpVGu7EX73CT2WWHaxKVjhKQRj",
  "key32": "2MyMyj2Sy7iub74o9evbqS1hcNuHBLDmefHVNub67WMXysFpNqEkYJDvA55rKSQ4UXkYcF7oc8N2Bm3xZyrWyJTs",
  "key33": "2Jsvg4fmgmRi63WceJuk2U8P2LpP8DKJj8HP11npFDmfvj35jhym47RqqteL9zUhrzP3o79NyFcvKZbNGwH4kmCn",
  "key34": "3ZRak4ygVUq3RVi3WjcV5S6U5HXzRt7soU4wuewpGjXrp6qxFXwzHSfJeSvK7CUZtDdYtjPmBUGWZzbmRuMmnu7j",
  "key35": "3mp9pP4SvRGptKYLfsTcC97iCafZn6atvNvrktaYdq7Xc56JafAEuyoRRZvdMXuWtnzg4U1umGWnzTrEgHLv9yai",
  "key36": "3zbhbnfrbRDPkk88Ua3mqFFtXPaTsoXbwF4szRkFYUyEDUVeZy6NSjUhYndLxoMzgS9EgkrFhDD93qZA51saM4h3",
  "key37": "2zDedAkPWUMQ7zuYAYQJQEr95C9UayvASiqeFJ8ruquwFphXytjSSQyYpXmftDw7V9FS2e8rhse87aVSf82L6Rp1"
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
