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
    "41pEcTDZVqahsJKwWb3HaqV1nmbxKfqa3hXD84vAPgYZAGwBZBbjPaLiG4KLqAAvoNX1SWcU4hm8GoPifm99PrUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ViHFpWfnHoXFykHh8oK4LGUX7QsQ76V6ssKYzzbgVd2kA5tSVhUmhUvVCCzhdBmYoi9551piH8P9qdDurTUK9f4",
  "key1": "4tJRGsSxf9qma3f9xnEsipuZfKREZhnSaqERsAex7ETbDufrUE59oMpxgmWApVG7AVCD2u8d61JCQQNbWCvLpBv1",
  "key2": "26fxh6uwyfJJTWSJn5mj5Cuy19fbdYS65ucE9nStdUtSwnZbwen8uxiFUkJd5sbtPrqWuvgGRVFgWW9bxLYqh3tZ",
  "key3": "wttCsWuTVHsVyWCqbgEHfnHAuTgwipkArbcpdYhwkjKnP1m4DBwUR981SCN3wbQ2FwEkutURG5KyQeXB9GxFxLg",
  "key4": "66W4NiSfK6pivRCr5q5mAj2rQ1znuXjV5CbrPBjSsrMUFwpP1nmYXnDff9RA8bMDcQB13xZpsKnPGBhKKnCuugbn",
  "key5": "34JpMphYCbWx1rYy4EEzG6f4ikgDoTosZwhN49ezKrXtChh9HCxqSPTaaaWT1dxPsG5rK1MXvRFEuphheDgfzV2L",
  "key6": "4EQvJmiqs86VP38P421mbwNxM9ENSA9qzY1T4nyFfpsTNUBKPxMFvHz1izvLPxy6R2jSFfjJjgtzNUgCF1HyzymY",
  "key7": "4SkrAgySZBQzTTUAEBVdQbueq7o7Scv4wL4XtW358jinuFpEH5VFX9WgKxWUjfHt8ACMYgA9YzQ5DQfX2W6vyeVH",
  "key8": "P6spVRCVih1KcGrV89P16GDiybeon1wwvKTP7V1qku8RZ59YDDzmMFdQiEmj3JdSempyqB7KV4d7MwhjitQTJHZ",
  "key9": "4MSZRRRHeqN7n1E8qkSACyoaig76B1KWtkcFuYhPfcwjFdkwFDqUVGzVwaSucR7CDEj8JgFAf96ER9LqKoUpU6nh",
  "key10": "3Dj2veDMT9qt5c9sa2s9hW7MtLFzMwysWpDJRHqnBZhf7rEjjRWcHLJZvr8ZYcZNRgJasFQc5ZZnWrdcAx3i9xBm",
  "key11": "4Aak7ioThoNPAtM21Yr1hh526fHUkiyhCBoWGpaktrAubpENd26E3SLnEYxoT3ejC2saNUYgN6Qq4aK38CZSsymE",
  "key12": "4ph6rUvMA4w38tbCGQ2njC3z5KuRcNNXX7mr71GUkSHjbZA63ysqMXvAq2ieRt85NQd9yj5anAVyFVcJixRw3883",
  "key13": "CRfwu7zddzJxo9BsvDn4XeBMXK8yK7uwJNyHwv9wwYcz7YsvWPvqycW3i7JdsZjxxLsJhAxQmJkmaz4LuMVW69R",
  "key14": "5d1qWUXUyJVksyNK9WbWLZWwBid2qHWNAKqK5ys6hVjBrh8pPku7873RzMUuYzpTTCACkqC8kCv5BMDigfoCAzyH",
  "key15": "56EPGuPEQjqSKqDhDxig6g8xvrtvFcTR39VRgqwqkfNoE1vhCH6RaWyPGKA1JzEyzMwjW9dqDH5RuJBohnedNQxx",
  "key16": "4V9WpzVor7FGC3fo7uhJ7EkYsQLH1XKNpmrDuLis3qPsKhUq1otFfzW4bzrRMXbTwnBQMbLXk8XGYnLgqGPVJ7EP",
  "key17": "2rviBeuGsPLqPCRqbUyD7y5HwgSzWR8i1hQhuQyHxL47RtBqoLN1Fcjeqs2JY77aSM1QbVEnhgN4fCL9xLTdd4xq",
  "key18": "5YLbuGXz9LXuAZwsoKHYSQKMTNPnCCmjnPqKujBrAhHwiX4LAiSUejfRFYau9yJjMugBpkmaUBGyZieFD3EotsY7",
  "key19": "4CVgS5UJAm1GhkUL99tKAEct4XkakwCpa8bddknmJ51KURvue6Lth4wEm2k1RTfmxtHTe59WHpBtzYPh65myqSNE",
  "key20": "3nEsLwwqg5GHgHRb9H76Wgj3SbVckAjzyngU8ehA5CyruZHwCbMA1iv9QzVsUz9hhWzUi4TNeLpXwXCFD8g3exSM",
  "key21": "5Hh9cs1DeB7HfCD5omvginKAToGc5wVQ2WJUKXkd7sV4PthRP6iZprFPuAuYS6W6PBhB8Y5AdZdK3EjNmBkT5TY3",
  "key22": "37WWFZrdPZbcxytngbrQKo8SX55hkyoR3kexE4ifoyPqcg3LU2nG8tLzTBvJCGQJpyJKaY2YPs5UJjT7FZ4v6BLh",
  "key23": "3xHJhSUv8dAVzidNLn99SXc7dUE4KtpeuSpfJzaaRcJAKzV4Tr4wKUjQSaR7iAU379ZojFDzpEtfBYoEp2BFvNL6",
  "key24": "36yHf1EckJm2jzKPZy3vz2gC7wzSF7PE9MhJ2XgADdFwHjjHTziGcB3D83hGMPwGWT4eMM2MU9mX29LsMQdSk5dW",
  "key25": "65ZFogGty8MK5r8awML3rcy1NiXgABqyDkGzwJgBK7DB4VKBZAnFoWw4MsceJz6Aw1FwSsDzAm4vWCtjfCjAvEcc",
  "key26": "2QvNw6y3Rzo4JxMWjVP3Qbu4nu3BmycbhtHYX1684ir5sSgFFortgkgP8dNYGA2cAS6AKpMv1rykE9ErJqUGtDv4",
  "key27": "M8JTGKEnz9GSXnSCjzjaArDjYSyvc8sU1w9XqDJ57ovVUYddq3f5gwC1JJhvEyCGCeNvS9u2GQQvCez7Atb1miw",
  "key28": "3staso9VG5UcZU2ry6yMmDsZ5muhbqGebbBeGoE9ZqNJyYDrFBCSeaHmRSxucoiisz8Td28bt9dW9SyKXtBfAqcr",
  "key29": "5NQ6KPMy2bq22JKpXqtSVmqayX5gjh1YL61EEnky4Evvz8nfEaqcoiEzidsc2RXFcyz3SrvNGCkD9vg7jM5SLM1p",
  "key30": "4uvrtNijHxUxZPApCs3BhoYtu4JfhyEjKm5heAdDFbN1U3LaZ7iVmqnqq46kaGPRR8Zw3hZCWfQBayWbz7U4qBwD",
  "key31": "3CbVW85Df8CMm4rbFo2MqfJAeXfKf611K48cTGWSEe8u5e74UFzB9cYCu7D7AvJVEHNsHeuuMeb5aFM81DyetXSe",
  "key32": "4wgKoTjP9YqjVjkzXhMqquSFJZuUdr7tqesjJcoMqpvz7pUkDRMoytbGNuEmFwcc5qdHAnuggfhfpMniS4Fwhnso",
  "key33": "2HBr8DXctpVZEsuNQUAsr5j74D9VodNLtV4b8eN1rjziEHGv8EndJC1Fgx85YXPPbjnoDjMKygJmXU8gddXvpwks",
  "key34": "5mp4dvTXoaiNACLpZjxC6wstD5DMh3bDhGjzBmbBxGSK9P3Skde6u6Surz9xbYeArQ3d8USBXx6Jpo1tEa4GndUf",
  "key35": "xDzSNQfkBE6czLeb6dx5uZmiaeVYhPH6sW42ZC416pK93pi2VmnodkgGfRiHk5PusjTeuVsTGhoicKPu5o87QnT",
  "key36": "VmNJcKZDxqDPfUQGnVyaTthjyTPKFwN1A4qzPKP5HR3wgkMxQPhsuPZhgkZJVR8kDUdzPsxvFV8Mx1TTnfRGxkW",
  "key37": "xbqwq18csK6PS1svXgdUqywyHJGpHGiuju5sxuDtUzybaRQLTcnFneEsCrjKGDGo1dfEYmGHMyDNn4t3aV4jzMX",
  "key38": "5hZ84DWA7ZhoK2ZMkRbYqyHooj2pCFLLbjLSQxMXauAJsu6SxdM9CJG76CEEcE2Vkdi4MbrqXUDULyBPRmChKKJ2",
  "key39": "3nw73RxvnSgdcjZQD1mCuVj1bqTQKoYcCQ4QPZC2S5jDWprsnkyUEdXDZxHHB79X8dY9cwagrkVqN2vEqLgJVYbL",
  "key40": "2s4JDaheGCGNNz5eFJ2DSnKz4SdBtAaA5iWveZPhMo6yRJ3mFPh1BAjXgsGvcwiYDqJ8UANYZdVGhytL5i9eaXvg",
  "key41": "54UAzjNCTKQe2Z6pNNEiw1NKSQKZYF5VYLZTEsEMSKfRW6CdCEU6SZ3GajiiQCS4cUYprFi5Mdf27v5mSC3HXLGf",
  "key42": "4t1ciWPLB93NHvPM4e2xAZdJqo3yAf69ccvAn2KXV327YbPWsSkZ934AMiTYNbbc5NHts19EkkmNZsqbBWXLvmAK"
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
