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
    "5GYZaZ6qCK1HoC198ySe2yVAZnUxUxKiuU3TzJTCmhEYFi86M7N4y55ivYwPazGGiUqqPyeTprd9tP6zaMm7rM1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eD2SHMXf5GC13QVUP1oUR8J92BwUe18p17ahYYgsv4yBYi6rTZPuZtCww4WmGTF1YWWtbMU6aV1TtYauXmhN29Q",
  "key1": "2BeB8CMuxpM1KDZHskp9f7HxrGJAoRT78DcYZ3cXCfSmAPbEKQ2UziBjn75Lk76ZQvgGnV1bq6sEeE7Gyvw3MMNZ",
  "key2": "2hp4ohX6CzGKYc3fT2JVRszBJB2psMBKWb3zTpH8fW1NHShDhbWQ9BigxKnNhuTCDX7iEfMyKyMf1F8WVMosNzyq",
  "key3": "5wYR2Jm7z9v5dX2HcWDFAmZpo1d51RnmzjosRFcQRqfjip9mQwXWt9Fx6tNChQ7od6rwed6oZhgRC1kwqcFWksHL",
  "key4": "3MHcvzipaAMqGTzwip5EbBpCW6ehjJWV1kxc2kPZywC4WTLvfAD57tZKcy1BjimDW9qwnwQtz5eQLhav5XuVuNsG",
  "key5": "4QSJ5jDE2RxMkC33ThovPuQVAc5AjEsaNPGFaCVJaFbCZW4F736RRzqMoSLKHRC5DXaibrPTszjmH5pmfLpZCAu",
  "key6": "21iuPMrq5KABJbL9p3ivBW6oVa8cAKM2jtwXrafUrcMuFALww91w34UtEmB6fq3PbGAv8apmBi56nMaeN6VA8NCe",
  "key7": "637RuK9yBp4o9eYE2W2zQxGVJJi7Yf59AwEF3SuEauaZXiXxCHVEvtHBSrh8jGZewBMskxakVVHpKjwswZAUpR4Q",
  "key8": "5Jt62szXmYySBoH1MTwUg4iL2pQrkLLKLFmX1j2stXSmoZDF6YVyiNvAj5UW3Wt2zWXRSbRbanhBFxyo9sN8J9yT",
  "key9": "4JPyAfRGKFX2xKFUB8DeqVgr3PCksk1x7jKjHcKxB994jpqYnuxbs8N3graGR9aWQJyFQWvcmSJntdtv4SuFV9U4",
  "key10": "5tqHbE45ZVGWhARXiM4hpbJuzqyG16BBuzNCokiWZ6uHAuyhLKecc1BRa4b417L8n6RsXm4sDBpLSSA1z4u9SvGd",
  "key11": "tttcamZLegXsDce4AeyRTspqhvt3X7UPAzbGEb9eqETgyCa5QpvwJddRBgaACttUdzBWM3ZwomEZvry9fsMPmDk",
  "key12": "2yDExjkfCb5oitTZMKKLntoHGUnjbVbHRgXvxa2MAbjrUjuLsfzm8GoFHueN8PXZo9XVYN7PedRFcAu69ExRvbwe",
  "key13": "4zA2CxeUtP4jF3egp5pX8ZLcMfD7hoddz8UVHbcGHFcY5eH6kLG55h9gkhcFTH4RtVu3AtGkuvXAhjJTGTgKik6r",
  "key14": "2btNR3dfHkcogmKG1AsXNHm4M5zaGduGxSn7gqnyXPYLW1VQkV4CjyXSk5LaSHHwoDTYpbdooaaRThzb41JJ1oxF",
  "key15": "3meboqzLLiYCDsDuFSP6Td9e4bzxnf567pvrnRWUSVeWuXKjKuwdCzs26ctMVe92NH8vVvMbrVMAVZa4KRGSJRYh",
  "key16": "5p7e89UGdgrbtcYzyDGRTFfPx7NbGzd3FsrYVrtyhESnuWUzoghqfq48Hxzx2pTGWhzGEX5b45ToKFCd6LV3sriR",
  "key17": "35JZwytyN4F7EPYhVgfaUysfacngcaCF6U2rT9dpwVjaGiCDcre78VroQjWeupBKfFfqLfsM5R686i7xPcsRN9ow",
  "key18": "4TkVwVoP7aZyUc9NMKjYrigoVBN3Ke69fdDU3dBtGPvQrAxhcp5oXFQ9z6Wi5Gyx7bWdGwJVpDEtnAXgmKLQcP9",
  "key19": "4QuDWLVZa2RywgWXSmGjCJfxjUkavpV7ds6oFxkmZUQpezwgYNvXLWPseD8eXbiNUvCkJCxvFvawD55X5Q7DazMc",
  "key20": "33NzKuNB5ZS662G9icxx3KthPUPc8tBpnvCjkQN6fN8uS3EAEzop2AfhgzfCLji6EtJGQK1un8Ks5ktRheMU8U4c",
  "key21": "3VBe6UzJz1pdAUbhj8MhPn6HwvjWd45etrTBB8zRZYFQbQQXkPvGKsrtm18Cb4Yzyemi1rVTJgzYRJsLmgzc4GZh",
  "key22": "3YKwDxUx7v5CzNAzLhHMBbz8yissE6oNf3LhgBWHTbTfLymsQXuejUgcw5AXzAMAT6LNo4hms44BqhecWxWS3nTo",
  "key23": "3CKCDvwsLdNPa83DLK4s8uHaoQEvxtp4Y7DDfboZMcBWnNg4eLSGvRGorLSzXaL1uFKscMTm3TiGbmeXAzKBQSXD",
  "key24": "r6nqBne1iLRKWdEsTmURfQK4p3ABkDyuvNe13f2uLb7EUTz7wWS3ChpK9zKen7EARaXFKxrWb8n2qVDLeypvQKr",
  "key25": "5WTBmHtFX3dBYuJQfXT9RtRHNnjuEDPdhfnUdq1LyZhjwRNrjKGQd1Rq4uF8wUjo71eKMAqKuxiPvxjQZtwr7kb2",
  "key26": "2xXwZaAKbD84iCRfcu6ZtFSw7eHtSLPmsD93iM4SVixovG9PB9L2ALXK8QpJn2gkoHjLGoWHPwBctvJg73PW1Ksy",
  "key27": "7Hc1VFgWtM9NF9t2BzMdKXhYi2KyZWnn6fb1e1ZidZnJTWbUoF762dq341cTksgMzVhYQnCpETh7NAcPRvHFa3k",
  "key28": "FXvh9eWk4zFHTzrngzpSb9Fp31feyYvNZNPZBNoptEPDQVkp4Evsag5uRCE4xhKjiSZ4qRod9tYUq953pyKwqfv",
  "key29": "4D2etAZqRyuyih3WSLk2ea5qgjsXjf6LeK6Py3Dbzujks2AZyMgExx88QrXGh11KmRoPkSiXiG6Mtzf8ELNmEEkW",
  "key30": "38JjfhZXYf16TvEuqp1PSYDqN22aXvhrpzsTDhMnJqKYcaQnRdZdqTxrcAhyYCSJNE8TihsjMpCJJBjC5CETvhjr",
  "key31": "5dd7dkMiHHw4YUPc6YyqRMDPabQqtrBUJ1yR7JdSL6YdeChGbeUF7pZ2415WgTYvirJiUgRRTfp9byFpRvdneGu7",
  "key32": "JLo4ETpDKV9uj4N4sBEHdGzDvmSqabj6tPG45ZiifyRdoQdSiWxggn9WpRvBdT19PYe1DbYc7ko4bsY5D1ti8WY",
  "key33": "5kEjVo7Sbx1uWfeeut7cC9KFKRZvV7zknSakLWcsoSjcfUg2EsdcEVorrvYGcchQRpZ2pHdwHBkBU766c1dKNxcb",
  "key34": "4uFyGJ57DNvaYcoSXxyJiQHwWDkBDXDGqWeSv27qUSFWgfKYr673AvoowPdN8M2Bv9ygs7eQHQpbxPkJ4YiyhMDF",
  "key35": "2oX6Wn6pCmMnmoPrUoBQE1ddpb1tQMr1QiqGuYat2EQrALFQrQmRsb8frC4MS6Zpjmbq7Uyi6ajKjSfAT1jiWbs3",
  "key36": "5EFdc8sPQpGtBQMHRfavaDiMQrdSWBnR9iV13rWhARQKW4hwYaAD4c9AP8NCD63zz4mc7T8UmoBuCx81HrBCsXs8",
  "key37": "GyYCeC4EFCxUn3FAuHGRZQcVKVGwtdJ2nE3fFpVdESgEgTQ1C8rDvE4BVcpZy9nmnonNnK3fCCQmCRCBS66rqmD",
  "key38": "44Spv7DtbB4xSM4MuJtqR2nDL2h5Qde3gukPTtNkSCf7T1Mahu5qL5CWeT3Vf9MKVDiWHEmUHKffEGAGZVDbEGfw",
  "key39": "3ZWYg61zFbZcRcH3aJfTfoS5usW1hhdAUcDspE1rArkzb8rB7oZQjUSWLYR7Fr3Nh89tipKt98Y3hBxmjmvyP5ro",
  "key40": "8LwUNkicxzrxi8udQyVBuUEXb1ucJLKd3e2gx1kKtytqKpJtXLFRAPPrk8t75QsAGcuoJiPY49f9ekkerKXj86z",
  "key41": "29Axqz2GF54BY8yGUQqbnaPP7ygfLSE8Z1Lp9nwiFNjHek1vqr8PRGGfFbbKzVpRvB8quj6aWTCVXozWaJhztoq3",
  "key42": "4mS1suuBzYVUzQBR3M1hua2QvTCboh9Bxf38LJtDTWpvAz9a26qYieT7Wy5r9YReCnhXVCw1iR3Bxh3gSDFpECgd",
  "key43": "5mBJRSKvwdSn4r4yvPFtJ4R5n566SdN8tvHMnYusxWzGBqpSsjuH7xFowDSQx5HMnP3dwk7v7CDyjCtboWnhoGkX",
  "key44": "N4JgSdBMMNH2QYLMZmUwjtN2b9zpMKbY6kftXGkdCBhEwkHMhZRZ3DK5hePSP81J1cEZZbgoLvWVCnJkx2xeW1H",
  "key45": "4D2QmSrBA3kPHgeVSA3Drqy3DFLMHc9vqhbBa74JQmBpuyqiwTjVajkHmLRR4bWKgizRU5VdbauEbPxXioGZEZrU",
  "key46": "2xiJhgzRRHqCgHpJBK4FbFfMwD6H5Ce3hY985uFq4NYwcRdztTMg2VUwYLTz1cy3tMobiGJ1kKBBT6RVQPA8PXie",
  "key47": "3NatX8HAvwpd5G2RKb1AsX9nttGrGExyL7gob8gYAijFDSthapMR5G8TpSAnCP6GXD4wBy9YTHZfWthz9aFaoKCu",
  "key48": "24ui3814vTgChkyvtJLhxPv1eamZecxSGkvP2f8egQ4VZaYa1xMWeQizyHgDwiHQZRcmsEKbmXKHGBnQGF2LnPBt",
  "key49": "ymzkYGfKexHzWjE1CZBn5VV6nHEeEvN6hMyM86m7o8z4NFMsYuPwwg6ozYAUdcx1m3RCarNR7JxeaK3omwHSbbr"
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
