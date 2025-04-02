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
    "61FD68UX9nSJg2EAqmhEhTmaweUL5gJcnFYYFWv49FSshsrtN9V15PPbSFt989EnYHqkPyQRrGn4homQZsRNDuCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U55ddPvGMMUD42Ji7BdM16i59G53wHqUC8aVytVmTSwRHqgSpnKudGwCo3eLdSZCr4Zj1bSZ9p8QSn841LmLLAB",
  "key1": "4XnsoR3PJrSgH3BE2B6XzWQysbWZFrWHj25AaGc2PBSRfYSgiFJiSvsPUsoTjSL3ZRPJLoq4WKSoCtiFBneV96zD",
  "key2": "4HRSpbdaQ3YrxpRxPnFSuyq21NbCfcPwASKJBTc6oihapeTVWaJD2VGC9Af1qcVhtfamzUhXCq82gbHjozpvTQbn",
  "key3": "5d41q2itc7Su3DQ1oAGKLHtTJz3xoJc6ugYjDDxypghaya2Zixr51GUPnuMLNH5KgKibGFcT7pjXNdRpxBW95xU1",
  "key4": "56Umdac9EnaRn2fpwHbWbC41iNtheuMnNPShJoWiUz2dVttTocDkKDgpgY18iMtbyKPXe27F8aPSeNKrREj7Zy3e",
  "key5": "2sLRvYmhRTYQLogTKmRYnFQvajLLSjVhnWhfVHe1vJg87nE6qxc6BJQoKpoUiDfmkQMcUgSFZ4SZY2bxJ514rxqt",
  "key6": "2BMzzt5MBeovmLhFCbqh72TDyAncAPqRUXAHFc31innBq6Jeacm6ZMaDkbGMjYvSQaDrEC1PPZQZdsRV5k3rqocr",
  "key7": "5CKYHjbjrorA2jcunNva75QfxUEVkuzDFSoneSczt1GHT2XPqLUoYrTanWtyuConSkSKepANRdJuwPDkYVKcsa5q",
  "key8": "4AEnhqQ5e9TQpFFhcVjBgJAfXBNWoByAEYZMfct9idKhNuUG5CT9rfJmqNAvPBaXjFJk5pn3Lq1LbyffsBQsu1hX",
  "key9": "XKjv8CmbtixvnuUwC1aX4RzYDjgzGt3J71V9AHUwDjJB2LFNfJm2nMR57iWeunvhnsxA6fdEMG7kf9oMWCqcGb5",
  "key10": "iQbeZ8LoEW3iPKyKtSw7wkfi5gceJWDxTei79VysqdGEdELWAzyBkWghMXBSrw27jPyh1yBrPWEgtmrNmwKmqLz",
  "key11": "3TkzzZWSADcM2hPshVGRKR8x43NyYkk7kdya7vNcTT6muNfDZywkXEGLCRuDomQvBkSyxarBAZPtevZdgmau7F5Q",
  "key12": "4CY7EHBHFu46whSy6eooRwckxwDTSGFnMG6wgkeow2v8n8J8mpTBSCz7XhBb4E1MsiFyxdn2XY3EVJgrqfZTtb21",
  "key13": "4zhpXycc33EA8GChcKSEFmay9aD9YCHDmRtK8Yi8Bt4JpqQEqc1uHTu5R1iHyTPShAKSvU9WoWDjqvigg5tkoHKW",
  "key14": "xsWAYM6wLSrHAvsWpx16h41NiyUCULLWBXzXGzywm5i2zs72BYAqHdyf5JfQPKLm4Hzq878XUdEvnFgq8j4G8Qu",
  "key15": "5rtm29XRA3PAnMzTJMEYxcgpGDPvzgLMEKXujDi2XgaS6iAbXvJnvckwAVrZHyiBvNBw7tp7p6YHiScVYDbJgbHx",
  "key16": "3kiTaR1qG8VC6RRCywA72KxoKbK1tF3bgzhBGmJ6VAdppVqkwQxXAzsHQFx92dCBkteZtevQD2Gd3rjhjVfTZbut",
  "key17": "4JqW7Er58m6kjdw4zVFDUhvQtY1pWLwwtkjDpuCjdkbmGf9gSXYmZNNWd6Z3QMrFpffKbg6wE7EgR1ExBowjStdD",
  "key18": "3nZRUniS7aV2gzy49BabwE7JWbi3HdQEvuncVwt4qxgpYhCm33hZ73GkVC69KhqjjY44FtgnmYbD3UkRXtuvEZPT",
  "key19": "QkY2CdxvbwjdmGdiogZ76eK6X23XnkxDR4ZApiZeJwucWyXztQVTdZ3EZNGSPbrrG6VTS1ydaxfVF98hFiRz8ND",
  "key20": "54B1Ew5FNhACXxfn4Yg2tco3D9qtcSc9CsRtwhpnzt9mUw6GB4zV98BeazrsXBjCzoFjhzyW36FS7KEdor7u9YLv",
  "key21": "HAHWwuoUNYefZDYBzSVHJrKPTkjWcp6LeiqHrS2YybC773LU8MrZM8ckkdeukYGuRoUfAYm1GrJC7FXBm4qpvn9",
  "key22": "3HcoJGPRSr3Srow5h16kVgSbZuNvJWARmg2twG28vL2eZ8YLNgZ9q3nHYUBS2tEx99UGv9E3Nsrw7UNiyLVpdJfA",
  "key23": "3xDsJHwJARFKpeD9jvDhebcDgwwSY78dkeWYniFHwicw6Jwqr4WyBFKdG5ru6TPo6kd9KM5pVpJv5scGgSKsikEg",
  "key24": "62rHRkXsBHM7V99y5o6MYZg8tx26zretF12tYuCFE1pC3yz7QUY2UWrikQ9GqEaPk1sqZ6iRjeVsDHmKGVgdHUtf",
  "key25": "2HBoYycbpAcs9ExM4tbmaLd94FbABfTFC5nQ38CMPLeWAx3pQpNGTKdnoGPx5n7ZP8J94TqBZAbQpgZjMq1zxKQq",
  "key26": "3ThUrZCcu7AXbpyUYJpygHSkaGaZmkqnTLbxKemPPPjFRANHKmQaqgFr53s4ddbp6dRU953Uzc9NTcYQC9PrqGww",
  "key27": "5L6BjXDmKacugTWPN3ah5JKLYRLRFb3UTb2SBu1arAKESR1shJSZzwU5TUCq3NsaEQvkxfA9PpCdtaGeNiCS3pUp",
  "key28": "31SC5LNxqjKwGNgG9m8AWFBjX9Bx7Ap7aeCEs7xFTJcBVzHyvU8TztNdrz5nxGr92CbKyLBpZo2zC8MGJBosgyK7",
  "key29": "2SpYW6xvxtbd9UmQuc2vNSJxtR2Fn9vJoodu47i77254ovWYUSt1U2wzMWobmYcNkqhF3rDQ2LFMZL18whWairDi",
  "key30": "5NgvbPJSuw6AqeCsC9BsftQtLAFhVAnJy4M5agTMijyRUSZkw1KdaKwRnJeu5t35MFrCX7UkNFtiN3hAXtLGH3bR",
  "key31": "3p6PDYS7cP8UvNK3qWtoRLYPggDwyaTUjv7Lw3793wvQqoXNte4UpQgy6rHSyrNgC27NPqeQmkiKoQRoxqe5Zd4V",
  "key32": "AgdaeVSApCg17bs41u5trJ2pptR6tQMaC8a77HVwtmWShAQTp6ciYxB7ijjQrq8dVWPdTLSrynktDcq62WXyETy",
  "key33": "2mhf4jrAQvjdMW4h957QSrnoJbNhM8qSeukZQxvd4oErJFVHGgVbZhj2fb9UDqH8wVqQdMJ2qFnz5tzTkGAU8rfo",
  "key34": "21UKKDCR9yNYNTsdb9KFfU6fGhnWT2tAZ1FjacH8ytcd871BbhNQmec8ToRrN7U1P61RdbCGdfA7cQ7sHH1vLq7z",
  "key35": "mF3eaP3yRNGQHeCXeou91t9tFB6ArPo77ShvTEF8oMC4a8C1nprpFezh5g74S8ECq8AreoHaGf9n393DKj9xhE9",
  "key36": "2PAvY6wXnRxAGMYvWCvoNM93Q3Bh1rmc3z6CxSUDzvM56qATqk8brvZipBDYMgepiVoYHdDYPtas37afRjstumnD",
  "key37": "GWixN1kvMPTs6UicrUdeYyQKuLGTiGpc9fKQcuVNDkedF3Fx6u8yzv8258HuJarK55cAnP13LdmYB4tRZPvr7sZ",
  "key38": "fYSz9Ee3pjD5h41ZoKu1D1JEiCBP2BKLLxuhE2k2kjTtSrA3qhk6oiWtbpWmCUgthQdC6yT5Gy3oXPDGiXYcQTt",
  "key39": "2sQuFmNTyf8hrmeFGJchu8FS9ALpfYttdJPwTV4vQRp2b71MSa26gBFHjAoapNPo1nYZm9t6hvQNbqKWVBNC3axK",
  "key40": "4jFKpJun9q8a66YpVj77DDbiTKXpoQbomaph1HA6TQBpf3K8V7hm6PweAqws4TJMXvNcFMkpkzfhzbAkyEjxdt18",
  "key41": "2sovCxUTpupXTfSR6Lpk9SmNahQreGzPrXRoK38gWTT9HDeTdLFrZ7zdHX4mwmgV2dm8JN8QJze8Mt1WvnAWmSXc",
  "key42": "5qX337i6BigXFtuds9NzjgjigkSs2n4wZyhwSY3F286SPHSmaYcJBHKNT7kvVGcAZCGNo9TsPU984bDDMeSFa3TU",
  "key43": "4sPUWxbXGV7Jac3QUQ5ow9yJCFub83fY89nU4fvbaGRKcdoMvnJ2joLVkmKhKhGL8K4Fsp53TvM5deZNmx35VUZd",
  "key44": "4hotXvxVa4MmLJa4yoFWZsdESRaK146nkBpex68wFuebcZxTv5KtcwxeapTM62vHV45R9fsee142zmeyzgbvdWq7"
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
