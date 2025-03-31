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
    "3WWK8YMHGbBunmcNGixXoCH3mgd3BPi6cwkPNsQNyfbwaYwammgTKrMUHtLkhZdhG9P8BnhLbJZ6S15TBaCACKdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46s2qgodGdyY4bzjDFoPPg3n8qzfCohSeBwBXsE5HfrbWWG3797aJ2DtyLkRySQks3gTACSd7zhw5A8hzcLUKQhx",
  "key1": "BJ6RYmEcAeNAqkV4wfWwAMW87FMfGZpLJmcJPCBJRsRrgW8NRfaLjBcMvUZoqMPgqvLsTKYS3CmXCMzwHhHhLv7",
  "key2": "4N4t4Dq1ZHcqFPSoGnwmA5CaZojaZYEwhLmP3UwgnHPvRTdsF6kjYqXx76ZRUsKqQteYqghLBtbwEuQZoPiwpzbi",
  "key3": "3jnHKVY69eMC8bNapgJCC3rJoK4zN2N9M3VADna1cWiQdAHkWZvns9wytNZboGKkauhEnoAgPft6JLdnLErLaimT",
  "key4": "4aSLUzyHr9ckWANyBSerqpiuzmHucUZSmKevKSQE94cfLFvFU6doqkJhdzruxgXMzQyfZeN4Xa1QbaqSLj1phdt6",
  "key5": "4L2ABaAqVsn46KHqFZE3R5G5d9813C9mV8KpsnJcA7bP7BnkGzbk5rCs7AzoLpZZtk1tecaPKA6MGRBtN3eM8buf",
  "key6": "5Y1WFtSyEAmixaqWLWaTmVNJKw3ogmattHipLh46NsiEmBcpPf36diGekhjfPMV6FLoeFdJqBjW14DkfchCHU8NA",
  "key7": "LeHpkct8YmsqvfXf5NRNpxdVmDzeswN3QT3dCHJKreuqAMVFg9LVNZcPaR51ttRWzzewmntswnmmYP1y3KYdgig",
  "key8": "3Qkd7GjmAKVrHuGESdkbpuhwPDX1oANxwapmfvaARpiLff2r82qqnS2gyKiVDMuyqKoWVmo9gA6YrXLLDu94AMgQ",
  "key9": "1o1xvUeZBYDiKQUVMKHpeH6cFnwnTBTguqGzNPab83eLHvzGMLfetAVcfzJfEtND8bvq2E9vHsx5gqJNCUoY1qP",
  "key10": "4vSTnNta8TViFgrRb7mkvBguWkAsKtUiTXqw9ywqGSMqWpoc27LdHt8zH7v1aGGH4mcfhejqjfN321WD51pjTtcm",
  "key11": "43nzSowRn525DpS61oMGnhQX4PyxB9sF8MPVDMuA1XXuaUynuhkJJXtKvNLdfNvW54SqTHsddKZMDmMpGzbzMwgr",
  "key12": "2hNXUeN2v8RpZnugPnPQppihKpYLAKKSwx4XDSP5YqZUmywe42PCZA2SeardM12gpwALrmSadFeEcuDs1hMQjdny",
  "key13": "5CtJgoVM4iMuc5V2Sacovkjn8DkaA96EM3uhcV2nAyrE486VA9yvWjvcJC1KMsjJDDxbChmkq9MAv4hECXdhzYTm",
  "key14": "546KDMNHD9rUN1Fb3zTKv7FLwcKj3m9FWYHGv3JTYJi4z1vdpuxNahQQ78LBkx7WhNCbwtexh9VtVR5RbEXGLUhQ",
  "key15": "2heUkfniaXb7285VS8q1szP99iPV8eUJHj2Vz2wc2X1N1eeyq6LFTrSrChcR7G7UTfDoG9Ss7JEFnCTEkRdRmnij",
  "key16": "2LZVVSM53Soj8DUuXQhKWEcbgBJwDkz5DfsbU1S6Y6usNnGTmzQTmPpusdh5NsxekTV1uopUnCwRuuHKUu46e2VJ",
  "key17": "4TCFTjQXTDyum1mwD2CBfucN8Z5gopHmSc98iboYqw4SU5FPJcP8Rw42TyXojRAZSgRCbPbkFjPJ9LTFN66dPvfz",
  "key18": "3BHih36Z6HTNToayH1UV4pAumyRgHaoFDqdpiP6Sqwzvz2CCGiv2epbKxFeBLnNaYs4UvBNccsY5cYnj2VYm9cLr",
  "key19": "5df8RyMp9aLKHLfgiGN2YyJ4R2Ziy6owBsrFmroGS2oWaGNyYzZdZXQjkNppbGK4YhtQFBkeM6XYKvBmw7ZsATGe",
  "key20": "2er3MEYEpo5k7WRco5g7uVxh8wjDuaNsdJcgUbhjGvhBrxgz6nAfH2jWaRtzsVvqPYYEdssuGi1UXTDBeBALR71e",
  "key21": "z1eCf49bHvSuY2HXm6TCCPhkK2eN1FEDvvG17D95nr36fWLBwgNYtosD1d4dyj1vp5rHkxrkdNZZHtvCvYioC3D",
  "key22": "5diVKkkoLCztaNwR2vidHJnpY2e5hwP6uMB8gKTQpC3w9mUzwY5WtKf3wsXECcqTAQ3H5Pdm4oKTgcGGNgu8dcSd",
  "key23": "5yhoXzPNchoiwsr3M86GVU4kCBL7DDkAkkHeNSZ3DWFrRJ9vfV3WUBx15DSUZGq95nfTkFDSVF6Y6KURd9rBEn71",
  "key24": "3qWfxjrhk8omCf7QBMtcXZeUPxYQ7doiQq6r2gjbf5kb3FB9Z8fVnSWNsmSuHovBXEEVhJuoEc7a48euAhZBNcie",
  "key25": "4VScF2xjk71yXiWCfSFcECuENxtiGPukkfvB16KGQ1osZbxNJ1hyTRRTkka2A6S3XvXHZktHMpW3tKUSbpMnCgDi",
  "key26": "5Uof1Gy7QrTU6ukuVpat1YjURdFDK4QLWsy954eWTv29KgyLRYGpr5Wac4i2ZBMadhXR84vgt4eEUYf27c7CnEeq",
  "key27": "226dZ546JkQ2aaxH6kmayWJ2Bzomq8EHpG9KEF6jeG95Kch9Fe9e83338wFXBfmHdekWuenzzo3eZTDpcef24v7y",
  "key28": "2zZYKo4PXofet2n9QraY5WawNEX3EJUJqRzMHCHWtAsGiJh1MMZdS4V6VAsvwnDWhAcKAkEmPxdSwXEueWiVjEwo",
  "key29": "5fuTjsx4RKmHzfNit6Vki5QnYUhiQse34Px2RW7rjKZUcjpANE41S4xPToGqM7ECivo5Y9hcBVjdxswzQGxPL73Z",
  "key30": "26gysQEdZmCCNui9vhyLdd2Yaa7H6aBATQcFrUTwTX6xBJ95aXVehpFvvJaSeLDUbNDYRh4GAf44a3kYpWGWhuka",
  "key31": "4Wq4aqgTJr5tk4QpUq6mcB2ehitMsC1rQvJjrvmb2BHfCThJeYMbBmhZYpfH6gFDyoDuNU3GcxBjNKZ24CFmPXoM",
  "key32": "2mABTfzPoPXtge2sZ3g55uMmjVAxwkftfZ4ncD37iNm9bWtAm5giqC1N4hLtYLP7HJjcQuYKGV53bhFLeDXp5Rkw",
  "key33": "4AeanZyzWvsY7apS5zwiqffE8dRTRBeh47CjjjmpC2omh76SafVeim7zqutwAd6uMSuuDgARXxTEBenTikpB4yyq",
  "key34": "2vXDd95XYZbb6Wsb6Sn8XZqJqTLzhTEhGHBfmLgp5fFLRSw4g1rif6bkWegMbUQ5WJ3NXW21JfwQn4GnGovb7NnC",
  "key35": "PUVU3eVB9wBSB32qKTALib8NvV4YnUCDWdtGbJo8WgUckD551kp3GsmgALnFdEcgGqDziLcYbsjb2GnuhgriJUS",
  "key36": "4h9Tze7fxc2os5pgGbewccsihxP42BuXK3z3r8SE3sH4hJbg2Qw8tvYrJjwevyE4pvC8svW3fy2cRzBuaxELoPJM",
  "key37": "hj7sPYAdgnArsXRMbJTypnrHRJG77XeEFWs25tau4pvgsn8g9MNbbMoaGsiHh2pcZMMfEq9ms7LscAYASdoMrrT",
  "key38": "3w88sCSwFi3TSQHGpTL37Dk8t3AnzyvgPnNgKJzyznTcyQxg4LjzXaAQ7fCc36Ju5KAcwX4rUDZ8epPattknsDSc",
  "key39": "48Lx6bNg9sxadJP2HJeQcKYnSVrQMkXroxXj9ECkiDzvS2rGN57BE3kb21w2uB1zxHZQLn3BcPJVmCqiH4pGUV1t",
  "key40": "3KA8ykkPHVwY6L91YH72Zg2dNPBWXxMqYckTYezHg6iveuhpYvyUAwiGjB75ocayjwr77TEJK9PYLa17X2gQGDk6",
  "key41": "2JorjBWD6KpoQbT1UoFbmyJDn6ybyrP6vhJAjZB7W4cWWdQMg9tGguMnhDFRmMx2VJfwUvuuEr3P7a9esbZE99us"
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
