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
    "3RXLENec42BbV3K6WjawU4wEYmhy2KmYgGXDxSxxoqkXnguF34XtvR8HgTCh4xM42bEVXsMZHdVMz4JyNWcE5VUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cuUdYidgqet3Zi1jwDP4BfeDWEX9DSmscQ9UtYRhRGZmKpuCHfzg7UZVVzHXGdTDeNEkTy2aqZJGi66u8EsCoQf",
  "key1": "5H1YG1Ynv3q2J1u6XsBhanzgaWGTW6fngJCMLm5m3CZChkDGqwdeLcGjB7iKM63sBVVJhueGBoG17xWsAuabLzEQ",
  "key2": "h5BPA2gNTfdFpYv3of9c1N6VuoAfTtsCbL89MqkPytuWaefcqTdVSbfCtfumxvLMbe8tjdMWLK2fQFzKK6JNBJP",
  "key3": "3AynS2AtoUkMzqjkAzNF53ERMiGjJyxEvV8f5Cr447mfB2kS9ds6Je2yrXjmTm3sCNHFDUFR362YbAJq5rUKYmx7",
  "key4": "2rUC3FK2svmmNJ97yo9ieAXw6CDB8YQ2GbphpY671c8G58FUm2r5trr6ciA53EK6oUiCYzozW3EbJRoEXsxFvVH8",
  "key5": "6GWRPVboNcNaPPRqeCuarxE3jhLLeCFXHzHodbi3VXy4XQv6aZkLf6FgTs3Q7kroMzjTjnwCGp7pmmkpcKEs9MH",
  "key6": "2VR42BfD7FkNfQREqgb9w2dgKZfMiV8DJnbpM7Bu4YEHMPNrSfbTVPLYet9pLxHcEan6u5MS7MBY6UJnkZCt5be4",
  "key7": "5dwKYW9ZPwp6p46RaCQXxJ3h2kjzimN9kiaYfsBeCQdtkT1VG1u1DXjE8Mn9YyWkQ9ogZMdi7gMMCMsxbEVQBuWA",
  "key8": "4FLmopi9bvSjqDRVhzU7jd3KrcBB84CGiEmFAYbLzQxGLgRaR8aniQohku31PfPkDZuxS86MtjXusqSkzNv55wvZ",
  "key9": "44QddpserZe9L7mh6Cn6iBeWfWw96GENDG2kD5XouoGyeZ5Mrr2cPZN412R83VH7yYKugcKHapj3JuhKQRb8EQUy",
  "key10": "5MEBtFyNmWFAEcedesejgbwnoZBGiqw5awMmQXtCprAjxiMsqVQC8oh8v2sJBwD7oWaHost5TVNu8HU26QANLk3K",
  "key11": "4s4bestH13RjHiMF6Svh1SBXRcMPsrNJPMin5GuUNyas4KWygnY6dyJ33WPCRAJrWWZ1ooQC2gWvh2daUsXoidaV",
  "key12": "24sVSoXYvT7HrgSfRALUJHPwfVZxoVgpbPZWRsnxEX1UBahhSk1QKGioy9wbyU2cztXv9pKVcmtcnhWQ25ejaTx2",
  "key13": "3Pv2iWtkLB5TtC2jPrubgYzWYqH2BKzYrDcVzZckrpqoa8xEoNQovZYYoPNwXz76bCetYcCC7Um6opaZgr7U2WZk",
  "key14": "39HmTYyYsnV9v1tCuHTATN9R3Ga4tJKJJ48ifcRf6eVumpcQa1whbQp81Gc2uxrv2do47U3U2ApoEyL4EDgS3o5E",
  "key15": "3n1ejWvB4SiecZkAMEqxnGxzPqYngxyrEH8Uyu9bj4y7VFYJpzH3C9pDQT94b4tmKzkzCLX85sjkwj3o14VqWaM5",
  "key16": "vWr1tRozxHR2578QJCuCgA294mULUmjPrvW1xMhHBdN6MgMsqdveJJxDaLYiqCBTtpkmo8NQ6y1c21DKxw3VNMU",
  "key17": "46ga85UAK6PvrfzEyRW5n7MHyoD9eHqzNNCsVeSY3aXA4NvAujD1R5vzq4gizhm85SXv4ief3K7i4RwKtAaFYcxD",
  "key18": "3xorchEsbcpvaYgVMixvxa4r4zzFVSbRKMap14iFbD7Na8sBREJ6MqrN8WBA6rqKJ9UQqK8DkSXBxgJPPS3zwSLK",
  "key19": "X4N9YwiN4dMTqhFvRSz8rc7TQtKkU2PMnDrhp7u9nejXQgptH7uXpAouko4172kN63AN4KuzHp6L1V4HAAZ5hFT",
  "key20": "21GM6zF4k1cxwFdTLjjy6d2nPjCXL42KmvkUPGuMiVUHoHjnVo3tadD82MLawscULznArwt75MYhfTTV4RDJ8yHh",
  "key21": "5zQLZJFj1vL75BzZaN15pYJcnPp3cD9qAMCNM3rPaqkT5ciAsuVY22y5RYtTNSmYG2xyT8CiHYnt3pKjXkrQ4NbS",
  "key22": "BeQBnA4d5naY3A4EwpFqtcfZMFJP9kzqkgY2CKAkxRfBZnwe6zKX4W8hYiN8BBL3eEWS3P3vtsUMSUiRpZKAfb3",
  "key23": "5K7WfeFwwzUXkuGrgnei3gGVw41w1uMaVMCr8dPdcv5D2SznLngkciXUZJW2AHP7GeoNMtJdkvx2Mdzxai1rd1nU",
  "key24": "3gQpnkwXPMXWiL3TX5Lf696VTUaeJWPYJ66oZSdziiuGwCr2SBjXnF4hjhDx3hFciquLTbCQw8eVadHubD7DJih1",
  "key25": "28r4pESPCdphr7YZP217CLUWdLLhQymR8fw64xBmj4MZNeTNPiYWfXnPMZsY2mgdmjMNwQkayHtfhVjH7fXtCDtr",
  "key26": "59VkU8wkvHxWPFdD4BkyqJbY1dMzEbFzPesvXLHUtrY1RRVtQWjwTNgZoPv7Tsu8Jz7A2ZfZKwK6TSecr3NDqtYn",
  "key27": "43Txffi5qMzFjFDgqdccqKzMMrJLJ1pWP96nWgFNDz7S8GRbYXfMisAXDU9a4vAQdbHLYkYHXa6wkC4jMm5nVBKp",
  "key28": "41DKqTeGTsLf5AY1nPSkXGevx3ht4JZjHLZZYt35tnDz2Vx33RVpSVKLXRfZVLkMRp5Bd6mABcgZBmg7AMCAiwZk",
  "key29": "52pw6Fxw7kjtT2T2rZdKzDUPtBtNvPou17eAoyjBB9bJyaNpj1kq2RBru1aaSVBmAvoUUnTNmXfP9qoymXqgUsJQ",
  "key30": "22tSAsGiZbJsH4Sko3dsqWLvpADXMsDKYw7JVRfZpcktkpwmZAsJfypJD5Getm2GuYjza3M6tB1YNmADpcJX2XW6",
  "key31": "PRTy4d4WgtmSqYiqhK5Ku5RoGDgX5qHwVP3Q9E98xjExYs4ykZVbpXE4myS3JVHMYVT66kba8L7yBhjpaNuftez",
  "key32": "29kCRn1ZZ5xP8S6Gwmz8t8e27fFNqf3cknLLV9gyreKP9XFwV962cm2YAMULkDGL2xyz5bBQXF4oFa7oyDdMw1Zc",
  "key33": "3ghskY16ksQ8vgZhMd1b4QbarQTtLCZKuFZ5Ltw9gS7o57ianTQRvwj3QzhnBc65ZHdbgXAhjkWcUr6z97FwjCHy",
  "key34": "4goYqSEh27pDVn7WgxYSNZT5Vc2uosyn94PM1T9L25pYHU34RnNL5333o1CaaDe4SR91ughkAfGzqnd7hUvi653k",
  "key35": "gbw7QTyCNY423qqRyv7dJ6beP1h9WLWtSJUFhXG7M9K5DeNmvyiuQGte6AxpK1pz8SvKyH1eAKnmdiW2SUs3MRV",
  "key36": "3mJSTLz2S2eM81ne6VsNyrbG26UDys19pPYyAjH3rZdYkDrR6TBA5wb8XRiw5bxd8YWhGP3LbpJMALAiDrr7tPPR",
  "key37": "3b5no1CZ9RkRcpn9FMXb8HAugEJJbzrmRAKfbj9FDNA7y6Y8wWdGFErU5PPwfqn9iLiiFZj76cx4UxsgpNcBzW9a",
  "key38": "4wHZ2189JwDg6qECScE16dhXVQtj25PFm6tRQZtoD6yvi6h1C6e2qE7c6BMNqiisn6y9RHtDdGeGMY4KzmgBzG8F",
  "key39": "FEWKbscFzsZef8HL9y7SNqmXdjW461KA2uE7oZAyKxCcnr2fjKjP8gPffTE4Dz5MAXu9dxvcdBBiL9ABFvC4uUY",
  "key40": "57Fmw5x2hUoHH2zvGdV2GD2zyPM9JhiUot2DWUogBfxwXdoJtLTffRCHPcEysvygbRLdbUfERCF1cgZ2jys8GPXT",
  "key41": "67Gon7NuCE9z1u8DMCcxazVtXsRKEFZgKq9wKfHx9G2uLEMPJtbLLh9e9F89uxArQLFyY9P7yd2mxD2LEHwX2S3n",
  "key42": "47RzghQNkfcj1EDggYZkMjreztU7Ym5ArNgxYQ248EkQMcDfDNxGwYMLmUpDXivAmonC1pPWTo6AvMMPFP5dJBtq",
  "key43": "54aWdz88y2may3neks3GbZj2g4gTv4YyFgZWeYQgo3DY24dztWsbvq9KkSktuwjtf9WrUKfgSyTrxL44XBWYvkq",
  "key44": "4Qc6cWw8EVf4CvH242p55DhLyH6PkzQG3v7b5gdE71CD7iUE3hF8bB63mQnALTAmXEhCWf6D1mnHfJj59WEqvfaX",
  "key45": "3W3EPp8WkkCoTGZpEvUAVc8wQdpEoR8TWb6r1sJovuH8W6hG9fePWxNx1Kb56DT7SiBjfwX9RGA2iUBjuVri63yY",
  "key46": "39RgYgTnRPxkc6taJhbMrpgNtjx95k3xv5vJ8GGtinfBLfbgZLBkBSGu979SncaxjzNPv8UXH9KagGZDJJokN5dw",
  "key47": "5hbVgbWLz2t76DWGoyBG6V34HTKuPmvqsHHgKVxVbQdqkMNPT5GFgrSwUw7966oaiLThyPYbx9xaYFL9a7fDPpuy",
  "key48": "65D7qbiYy2KT94oY41AB4LXjM5XEAj5VxSgYJGDzMChezRUzqDw3h5CtLEhntA2yUPfaFVbRTa8XzvEe8PByy1Bs",
  "key49": "2AwTXwCwm2xnPSNMEF7mTPKs92CNM9kHUigLwVMxMyLtRexymssZ36x9a2EdgAG21Pu1og5tZnQz9i5NBYox8rz2"
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
