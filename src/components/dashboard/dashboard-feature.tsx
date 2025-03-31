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
    "3L4RbR2VdhZZhWSvpcEciztvQ7V3rkhLpeAE78BHWgAioQf8eBYSexPVeRM3msyb9LCw12DZ8G4ByMDumZzCoQC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LZPogwRnU75r2eY2rqGCE1vjq8SeG6p8A8mbV1ZsRVDFbwP4qqQw69GRFoXvdR57VmHzWJa1DGqyWwkQJkC4xME",
  "key1": "43MG3s8PTCAWejTpVWHtr5i1SeSH3THakDtFgLW9RgSvCWKrJXn5cUhuH8hQFMmqEnGiY3DXo9achMrHYXgQkiMw",
  "key2": "4FWbURg8bGZLqrxhgstqW4mp8iaqHu9oUE4XVXTNkEMVYzpXQraf3vD7b2ELekKvZRrbg77WN15WKvbbyGRACHc5",
  "key3": "XsNejMH2JSaM7cZmiCF9PnxSWKVgkcA97ikKXoZT7T1GXDQ6RZvLBKUUYRdFpnv1uAbaa75SgCrCA4wTSdzS3Xd",
  "key4": "2snHfYRPL4AHStP4Z5xY1oxAk7yeBiFtcWAWPiwhsdNKkGF3TxAjipuV2EfysVonUaQRUCY5fhjJv2RxLiQ5nnw9",
  "key5": "5A97httcBFm8D1NLo2pi91dKzewarXnvys3QmHsGXFi6p2z27piUvjec5MJcgao4bVyQZRBzyNWLznAigQvNGa7H",
  "key6": "5b8SP9UcFgeNZY5XVnsuYN5H1XqqNce7LVuhx1Cr5MmYPTRGwpxahjxVEWwgsQTWhAHUW6BF4YpnKspTXACw3b9p",
  "key7": "3UL5hUvdYYZ9JrDMmRqQ1Df7E8wp2cDxHRhd7uVLKrLcBt58NjRAfy6rP8jZfSfGnPysHQxugEDWGGcuF7NZGbZ9",
  "key8": "8VF1Q9L7SpYbLR27Pp3vGsEir3jKonoK16eypxj7fAiHvPEtUfP4SrUq1D34KrH4ZzamFSr8XjNWTwhhww5iJL6",
  "key9": "WpLqBECzLe8t6dokdjAQGTQupn2zuZVBKqP5yL8DNzPT1VS7RABk6Wpw8HDYzeGuTfEyRy4Y3kHBghrtHFaspGJ",
  "key10": "3pZvn4rQndum9SBdHvZUJdqBmaoDUwz4xUbFQdRY3tRQWU55M1upNDEXL5vFAU92yqXG7yjeceso4UmSEzjUE9QX",
  "key11": "5qDTznhftHmCeBNvAqpnnKVdchba1NKjMhjTHMbLaKqcdt9wDi42hrML5E5LihrRMndQ9A1EwLPQPuMvSxHTrwV2",
  "key12": "3Vx3GhfKCFJFvaU1pfrpysWexo8DGByvMi2FLtFk6goGUW6uDYEbfJD9DbaQV51XVABg6m2nE3oS2U4QPSdC2YKo",
  "key13": "2No8suTmBEv3tf9J6Jx7gRfcdBhbAfAfrc1yYiecJyGxLPw4sCuEhTT8YjUGKpFkDKzzFoZdzyej17dw4WMvRZ4V",
  "key14": "3SxKWoWpQG2CpkZpVsSNFwW4XgzzjG5ZCyVYBYCV8BoUqftEE3CwyiibGoPtQTTQnAYjCszaqwmL8yAPkkUtxEq4",
  "key15": "4B2TV1Cf8ioEWphX7AtbhzpfGA1toUrrGpwMa3y7KbAfcNzToMMx3p6mdQJq26wYEeu8U3G6X1kM1xriZkgaT6gr",
  "key16": "4uBftqvjcigJZAXmZ89rfSaa97T19csVXDiiGw8jR8wHe3DArigtpM38n2jcRMsXF67jQ6mhZBPGSfM2EgrtJomL",
  "key17": "5iTH8M6DjJhQ1h5h5NvfLBHjXjBzZ9b4dQQvk811tDmp5kiK8WYXudNwvuAZUAU9fjQGPmup7SqMzwHJX2KiG7Kd",
  "key18": "pWizZxZMC5mH1Em29fFn8q6bkWt6HDw5wtsWZ4h7D6KbNJLa1DVCNzXZt4cRezH5tuZubFMrCL5SGaNkUo7MgR5",
  "key19": "2t1jPEvoiKDSgVKDh8yGiYFn6fpH7UiitqNuDju6UNrVHJAdykAKwdYwNUd7Rwef2APgSQHVFWWQ45VkkykSrnDV",
  "key20": "22mhvohtGLGsPFxSyW9AMAHGZKmAhkNqu3oA36dixXsptrJFYGMmUi65XRqj2kmdcByGKZANNDYWSBgUD62gUGBf",
  "key21": "121TMov2e5WPQZ4dLU4hTFXw2T26dEGtTsRBfhfEAevfAU2fmXtEa3WpQGE36tM4Uf6fzyuYSqLwiuMiHN7G3V5C",
  "key22": "311yUmgHbZ5MhW6nwHrv3pLw51CNzzijKU6cUE4KD6YKVYALis8nP2ao1Eif6A8DkjiZJd41sy7X63MogK2mDMBi",
  "key23": "33227b6fNc7GozGZn9p5az5hZdT9LTCC4hM6go1WyCZSZqoAyjPREjTAzu7z6Z3RQ23cUzj1KULNbaf91pjHXF9z",
  "key24": "5uV9HMWYKyt2LzuDiKMLDrnWdcb25bULTUpwtfNqC3b6przrNyTWeQ7zC3tvdQGY18diBNd1w8TzSN1SHvdijumq",
  "key25": "2df88byUf4CgXvwPLTJqVTFJNw5Q3LaYNozVLG8wh7ts2mS9NaWZr8qfDaQpmcYJNKiuwK63fpLYioFeC5WLQeH8",
  "key26": "2LDhQ33bFgwoFwjQEuD53s5waXHA2ArXiodJX86KMJFXFWgk2GsbyEpwB3VicPrmFxnCF7dZeeuE8fFn6sXnmNkr",
  "key27": "616UMwhGfUVHySiAqAH8X9srCDEHjg8CHJhkC7QY6kXsAJX2wd6QTkdv9fWjyj2kfA54xLsmafKqBWKo73Ke3RSt",
  "key28": "49wgZjn5ELNWLfsB8hkaTyGgmQVPdkkUKBwqyKZkQ5nQku5GuQcFqUbADhQcGcnBHdQV5Uaou9sN4QpRBckDoRhh",
  "key29": "5QyHCD2tzP1YMpxHJeTzo1nsx9nAcRFr6UcEMk7FouzPDNUkcAYiNbFCQYs68TKFMMDDqNYkhwXYxexu3NTNyQTu",
  "key30": "5mg9vtXjZ57QTTh8KCPNiDPWMLJ87M2NJwNGK6c7zoBqZu3xcfKfvosJdnHGEqrtbmq98rR8cvZjQewv7dBjbwR3",
  "key31": "CKukUUgjBagFnTBncjeGKPqUu9ctBq38UaMdAQcqBL9fpMxzzaj8nT9NV6QqJre9FgG8FgXJuDxy3oTmgxWkdFE",
  "key32": "5Utr8UPes73t9F5MGwjHoq7wfGbvJNJZ1ypRNGdSLDUgv31dztEXYGfLFEXS8veGoDVBzh6LuEJHPC4qYeJ9oUAJ",
  "key33": "3uPSVoPBQofYHD7rv9DBTuiCS7Y8mA5eZKzGa76KZLjNRnFZun6aPkaxU1GxxzrQEpKMr6kyQjRkULzf2u1iYZZe",
  "key34": "32pYaLxcDkKvFqepxuJfCAdJC2jW1sKdrSYiYvFKwVFFucgQ5m8BsFYoCEBeEdC2JQ1D4ePxWmuUrHNoSZwRnyUf",
  "key35": "4X31xDvJmmUVjXM4Z9KWxdvaS22SWptrJiaKFkyTFiAehKGZ48RUnEpiWb8LAVDb5ShmPCTfy8MgTPSE6YhfsXbs",
  "key36": "5yqbGTVyZSLjQ6hoohPax73NkSYWvbWR3FY7tCtNrzcrAXQG4raytdfyT3aWug4CQgXXzsvA8DfAY55qQbRnYQCm",
  "key37": "5kYjzt7Ln7rPpUNWEat15dLcezBeBvkwjkcowcLTGeTKa9byuBT6hTeNPTgz5YKo9jihXhV8eU6rYLydoxdr5rdD",
  "key38": "UJLKJuCbNTVXYdHMtL9MpefXmUQZiw8ez2bM61dRienzzKxKXZxihPk6gakhAksKisJkVhz1cF6efLY5eaTLHz9"
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
