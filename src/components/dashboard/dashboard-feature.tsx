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
    "5txqpztxJ9zTHuiytVLWRDkBaLD6CuDz8y32syMeynZzCfYjm8tyRyVmpc4JKnnJXG7VVXkyRzwrCJXmPKCZGqRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mnTi7oDZwjeoXFTcuZos3LGVPmAJyfR4xi65kneCzW2JEoc6ZaPLACSZpEnt34Pk4VBkcV3euRtLh5cquaWAWUG",
  "key1": "3HtWfeUwiqR41U8kEt6Cv1E8dSRiiHyXycemauXaUg4hhxCERkpDt9x6V6fz82Abz2VwpuCdrcFGPe2X72XNbWCQ",
  "key2": "4qjYgvUxSfg7SZrbWogxi3xRFA9q5wQG2yabtGn9VAkBrQWsonr9BCugbCdq6cZ3gzM3o7EZfVytmbuXK1cUCWg6",
  "key3": "yi6hU4ST8UWfD5DVG6CWwAtbZSdqebdHsAQpSCBjpwcKjzaMjQQTWscEh8AcX1eAm1iroz72uFDC63FFnZ8CwW4",
  "key4": "5UWam3DwcNp1FNQSheChVdz756rSWGb1x734GFPp3MkiHg22sQnLq9D4WzPjbxs3M3HEhSoxXn5NgYbtTfc3f2Kk",
  "key5": "5fsYoV7icrYv9osR4qpgtoFQFGtcjc1b1SCg143RT7QpHMoUmxm9hxC7wD9MNSgpUqCujCbbeEXXmC41srhwSMw3",
  "key6": "3HcopRaxtKfU1kT7iM5Gg52y1188YXczBnBSZBow7FPvwsRdKBJYGCYU7Jrq4uNofiVmh1Vgto9mLN6pD8qSbiQM",
  "key7": "3nr9kCP8PPcC8XPJzhFooLWMTFXW8Scz7HFH3GDKZ6YqRDr2ooLqRE9zmBgaif47VShX2Kt8yVE8i3LBFHX9emYQ",
  "key8": "64YFxeZeNcV77poeZQahoPSenjt8GYhWJg67SqYA3vuYFn4Wrz6qNT8JGTZCeRF8s3LALXs5bANeTKdDYCz3CUju",
  "key9": "3vYB1dXiejndiJastuCMsutKQxT6AAXVTTgztoR1WidkVvUWUaBUmabnhoZm4VEtaavTDZyAfBssbQmrqE9Nn24H",
  "key10": "2kp3G1nExAxjV5aEnKCD7vt6iUoRFEzNAySr8VWd4n4bKVJ6MCm6p4iLXXUq5zNFYzfDivGXfTDdUmrAQWpefw1H",
  "key11": "S5AFwS1d5MwrUhDbNt9EfAhkvogg4wXDmEW2J9CyhLm1uzEHeKd4EDQTu66RHyDZBjat5JmWQpU4pe69kKnpG6S",
  "key12": "5oNfNMu1poFVQXhh5qq8v7HTJC9vWec3NJUc1itUTncVv9fEj8dJt2bAnEBLVS3CvzZvPxxENtCimWr4HezpEJZj",
  "key13": "2FsiUYqbJSe9dijrLWvU9JsgDvAcZpfYpfhcbrbo1NFJB967fNaCmLX14yaFszaMARkPPCfmrbbZYy1Z7PNPTc7T",
  "key14": "4rJpB2fTvARmCHMRW9FtGAgZHHq8QvFgt7yuheChd76qKJFyVRsZDGCVbxkFLhgEMMm2D5Q5zHtXTQmnPAGLbuw8",
  "key15": "511U24M35L86HPLwbGbX4tjQ2BH9TjmFX772mrboShR8Y3TiFYYfMRfWe8aDPewZetMzJuECWRve3B8nkQ61wL3X",
  "key16": "4XQKQ2ugoXMoaaHHgWc9TUPCD7mEFoNJ2kHQgXRSR6cnn8dbZpmNKRngp5KVotUwYpB45LBTdkN85XQUtr661kWc",
  "key17": "5YFd31FtQDnYuduDt4M3E5ejFt1Mj65t9kjZuHu5vz5oQ5CUpsKKechQb9nX37VxTrrv7UQxVM7j94AzcCjxzNo5",
  "key18": "4BvkWp41DCrbpuG2dPYg2EXdCYnGpDKxp1RJr9n3KeCkVd4nsvRdPeTX7M3WjRjENVtQrVqMFzps4BeMxBvfbVWU",
  "key19": "Zghmn78KVTdpRHAtJgBYY4bB75h4QPHTYSJ5dAGEcVxGyHrrmQLrUz36SDXRDJQ6z9RVcyR5dVPD1P1X7ojZArm",
  "key20": "3jMWLiWWxEeeCBNQ5dRRPRbTHWsAeeyHgdBCKGA1HobmmURe7YDuJP13bfhWhktEtkpW5RoezW48vGdSkHdyCunQ",
  "key21": "4SYEfcTtdFGaTJKEfh7WnetwLvN4KsLjEeFSDMydXGzAw7KvQDWNUWukocubsMc1LcmZ1PNFZg6tYz1vY8pgcJBZ",
  "key22": "5AusxZMxQysXbjs8JjZPc4WKBw5JMEJfaZdtUQwLc3NVh3ScZ3Gaky3XwHDAH4yBM8V2taAKKpUFyG9FuNxcQAco",
  "key23": "2GzyhPsz17ytPPNVEzftB9wpXVYvMSEXbedT1Uaa24FnVyVD3QbfkkyHwg2Uyqm9AEcLPcXVodTctT4bQgqMUimZ",
  "key24": "2GbJNGKP1v6MUEyAkYnPaSafGeeHeHPTaAL7ZrmdRGScn9B6DgQf7Lr2XwCKjHzRYDExoGzhhVo66sLqeMJuwYTh",
  "key25": "2gqujjoTuvg5GWpKCMqTR7taz14uSNBTnyv7nKaqttYcZ9Woq7vecEy2Vput4a7csAx7ePfmzBCXqoxttNE8Ye3",
  "key26": "2Ewn9oCziHBreVZoCh6CJe1eG5rixoBZWGDx4tnK3zVeHxibkoJ7LYmWAR6mpevKfRi6QeTZtBghDEmVKBJUNEph",
  "key27": "LztirkbaFSn25uAQJf97FscZq8JKVbfbGvdijA6FP8FJELrLpia5NaqThezJZXjSTJ5CdLQPQRXBQ848Zvs7my3",
  "key28": "64CVXA6rGknAGR8AizQvgu51fRDdQNMk2RUR6oUXgMJA8YdTCfeVXEic4VjDJpsvcrupNPmum6ejuKzjdUqbMFiv",
  "key29": "LDfRrsntFcBxrnL6HKmzHhajCdS7sMp5PF7ecD8HueLDgAbsovNLBQj7NT9z5v2XYf7AxLjxDFgqigDnW8oXPjT",
  "key30": "2bBRa9XTtAvNhdg54i9GuVLHWNAn4e2s1DavNkXL7ao4EGkgNeRF3RgypvyBm24UdixpMdWsf6KFFKmUb32ctafn",
  "key31": "5ARCvdw8xp9EMXH1LagDSExVwytK6eeic4bY2jbuBXhp8UeQKUgEhkxtD36oCQaEMnR9Pf22HJxtLv6uYvQKGFnK",
  "key32": "3XWCAYRW9UktsdUCSzHUzV7hNDrAQ4gwcbJS8W6Tm1HFkrQE2G9SQHBjLMKGhGnYTgiTZ6eJs1MitC5LGGucim4g",
  "key33": "2hBBhc29JdBKEExEDCnauzdkj8P2MFbiRCX4rDx6dgtAghkY89it3JNRz96QHVw56r1uPHGB8VN5K6wyNmbHdTbV",
  "key34": "31LSZi8mzkrhiZ8uSyLGaVER2wU1Ubp1RS4Wwe3mBGfQZvXy7dqTuqXpTrjma96j83M1TzqbjAd1RcNtuFCMufGu",
  "key35": "5ZjcW46WigmecMuKHrVg18qLZUgZvSLhTt2CSdKcP7jD1vUmub1QGoEE29NdZW2ats3swjZdt8bATNaZRY1SJC2C",
  "key36": "5XdS3asqVGvrpRuDiHyHWHo82WrwUgZHqZqwDYHMcPZzJEBso8Z6rx9jt5sbofXXguHUkpUhDNp9JtAKEb4nJGCR",
  "key37": "3NusKbtRKH4jwseU4RSDcmHUPMGUr9WnoPomu5FWVhmkhgYoFvh3zeDNv489kQ89o5UwRG9X35Rampeb1RkgvcKk",
  "key38": "41Y37vv2R1fbaz1qb8H5MTMZEnZ7Fa3QYrwnBJUR9LmBgRaYj4tvGH99qeETYkd7ayNv5vpuK4UwC7yygQGRpuF6",
  "key39": "4gcArsV7xskicNAAoaDqfFt9BhRMUaADKdRSmeyeCNmAhy2SUhaiz39PoohJtNxa545oJkKThteo49VNyHnuPf2E",
  "key40": "4GYVLhDUaAnZiCgKzZx6tdESLwAV4ft2NYGBP7sD2MNJN5ruV1YjMtNFM2uVKv22H4ohzGew93o7vv31B5FkVztH",
  "key41": "3kWZKQZfWCnzAKyLTE2RXKAwZn3Xb7QGE4zdbnT4bjFZcAi1KSKdX4v7DYN7W3C218D6DvxWZfpD4G7HCepaWgjd",
  "key42": "5UpvCbC7J2DXZnRibGvHoH6qx25JTz4gTRgXVwcuibJwyj5HrEebuX8M4HQSvC4V9ZWBdkZD1QGKXPMVCKdivhUs",
  "key43": "5FYH2HGinmv7WbNbNnv2M8jcnTHvdNf5dxpSDUhJCbFDjie88NK8WVU2Piw9YxpMr1H4no9hurv4JyGRFt3hvgKr",
  "key44": "5R1PPD5iPbRy2hLYsh4KiaCAbxY1k4Mh8twY8itEiGRfdz8ravRyd32j8X4st3YB9NtyzUeLhFiosYp8GmWQjygn",
  "key45": "3LzS2tJEHMzUvfeicg1AYz3wphL12xMDt1Cyw8HKancqSLRxbbR83XBcCggUbE6Uk5tKhgiKudy9vx16GsDp25Eo",
  "key46": "4CaceKRwGuyYCDCcz8LCmSsVSTXBa5i5ptocCQCd6fo3uzEdNFotuAKM3Bi1ZwRGXWJcC9Xw7tsX3zy1vcp2BUK5",
  "key47": "2igWHDpHuZtuX8xQV2xUbueBYS9pbHASMtjLMyBtVjgAhEEhsdvmxhMf7JAPHWnjWo4S3XPSURC5e9XuNvpjsLkb"
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
