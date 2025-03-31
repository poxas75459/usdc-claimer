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
    "5XwsyorttFbAkWJrCYHM6c2dxq3RjAZW4ixcrRDwKYSLd7UZMhNeddfAocWUwQoTVDPJhMzQcUCkC2ZcW3Y7fUGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a9DEiVePQL77erCYgytdZyWEKcg5cfcCY8oZ5XujsUWNREQvGoTEs5EPzSAb7VCVphNT3xqd8zPZhzC8esTFKM6",
  "key1": "6zVWyHqZqVtFGP5XNYp7cTgyXvoeMFtishF1neW3GSUW2PekoPoQPR2YpBNrGv7QpM3yS2czs7SVwdryaGZrQfL",
  "key2": "4hTLn9sf34wUbmFbiypDvzVcoeF3yHryB5PUfC7fhPCGchJcVkgBu6cPA2PAsdLWoVviJTUf175c9df3tEUhZf8f",
  "key3": "3bBUpXropySbWALBapQfAqHk9UDX4wc1xpm84CrcrrzZScZ7MPq5zJJhBgxigBLskZvcXcUb2VeKcefA8y9tFfT8",
  "key4": "3hNYb5qzXZHiRy33xC6VfN8mmNqxKHUjdZRHPsafnfxW2712bEES6gEqPQQsRDo5CFhUj37bBRbX5tLNnQZBMbKe",
  "key5": "qcGHw5hrku7SZWTwKHof9zssWxumgoLcQcz9Vcbc963Z39qs71CSFMWArNwGixyAe2tcUq18vqwBLMAzouGX7Sc",
  "key6": "bUkAh9qCHx8Tok5EXdPKhCobu3k3szrzsES23PXjzT11q5m36xNMUxiXYimRvAdUzdgci5Av2yYumZGZ5MdiJ88",
  "key7": "3cneCFHn5jGGBxtvrw2xqysCxMSFShoh3rEniuXKd8JhgzmwKV4yCieUzS7NahZSkAg6YosCTvkXLNuYZbBMCTPH",
  "key8": "5UHQh4DujoJui5dFVnnuvAQB7gZeAxoi7S7bYX8poA1bwwPEdNPJcWHFuHLQ7FzgFbmrSyypAySqxCE4xLatFPED",
  "key9": "28yrcNDawz8yqR3ryKGtcBhJEbtKqK2X5EZxUDLuerhQTuvm3fVuwY1GS7Vh428QGT5xrMf78EYqBu1cMv9R3zL3",
  "key10": "4qPNnGVAoYRhuwfViNQmKCcQRRjttJM2et3RF63mypEarwPWiK5U2Qvkyvc8v5KFfCLxpozDELbNa8iqhjXqU8pj",
  "key11": "3GWNDWGN7MF2fMT8B8G7UBS3EaC6jmU4WtjyevZwA73PRzEdoDMSpbSKF9TZENDbu7ZjKhDMuBK7QfqEDANh3zzR",
  "key12": "4bn3T5Ve5CLPVjpsQDPqoNxtzmwK94hXMjLGhkJ7xfFBbPCDxFpLvzBbvYfqdeWvDw1nSk5rVTa9PQVHxnUJj6W",
  "key13": "4JwY2EEvHWrA6hP38LmE3d65EGcwiNmAiBjHz3DEuPr325PDYdVpn4G2PgdBZ4RqefmqqTJ6i6XA5XawDpWV742g",
  "key14": "NDiqD6eQgL25omSE4AacYV92mgM2mVod3HKZQG15NH2Md71spiVTcWpMouGsfnoeCjZcLdGzEgYUAGBZRxy3XJy",
  "key15": "2juf3vFfgks1yRjbvAgfEoHaMyPMszjDv2X4hZnQLET5rej7cwFF5w7gFTKf9gRqBEio5jTXbqqkJLqYEdjREeW6",
  "key16": "2LS6iNDv3Zeks789kWNM8SKMxfajwGHAwUomYnDmmTCUCCXKpLXyBQHpKy7R2A97uFkJ6mJVeyHfQ2o8oX8B2hnQ",
  "key17": "3Kv4QiSWQEQYpcdAfwDf3oULnY5WDmrNfE9L5KWYVG7EpUpU23r4uj9MLe34sTf8quEoGkGQvcwrv28Eqt2STr5C",
  "key18": "5RjGEcgYfFTa1yzmRLUuvaYd8EnCmqpxJ5pFHWG27GHEh5kvQpU1WB2J9GuyFdt3U9MR69Q4UorvNjkB6X4hC1b4",
  "key19": "3zVq8jDuXmiJPEzwaw4tc8ZJ9H4278KoMz9oradp5zAs4QdESA3hRi58Qer4hR3vqnSjEx1CpqTC1nmc8KWNe2nJ",
  "key20": "2smygJfe6zBNHnTB4kqW2qYzbQQnbrqZBi9oNH7cbcSFzcKk2Qght9LqoyzmREMFKREfhKiA5eVWuTH6rokNxs4f",
  "key21": "kYe7oswvuuScRKu45UbMxthRCs9KuHSaMrv7SWAebDTWWd5LtgSx95kY2KhQY8bFLo3vdJmPtNgLoPGVPV4vYCa",
  "key22": "56dskB6F3MhUdLpiKt4T6na6n69FE26ad96nQ6FpaUCfJPzcFTkFVdEdG6a9VCrW28nGar136r6b9TaJmidnxCk1",
  "key23": "3wrj6cv3CmCE6cPWGsR9Us9HEvBsp7EqCC6YhvJGSkucsJiec8zLgxLfMxRC5b4pn2snbirWU2gXS3Hb8szfLpEX",
  "key24": "55Fvzfr3FBfMFY1r6fUpFTRMNhP1SFj3LaYbTaPRy7FwZhMpr7mmGk5MY28bTv7wamb6Vrb9WwVQkBkYKT2g4DEQ",
  "key25": "4zGqBdKPwtiuQVPrAX9TiPRWCduQ7SoCNBUXiHwcMBBHqd6GgSAagje8kkr6UCfehQwT4vpfA4H7Xyk2LycqiGND",
  "key26": "61bXhyfqSodtQPa5J3KS1dRQRHi9H4FZ5wCKrFtsnAjveXg4sPueWbb5GgjroJskFE34eThFrgXD1ucMhg67UyE9",
  "key27": "4vtXRerkdmCyDLo1ojHcembTrwsWtpkCafzm5cGEYrXGDw1P3gwbEm3nXEDYGYku7mBrDzafE42YguKUMtAeqxHS",
  "key28": "xna7sikqreaKcjhiA7pNobF6g8so9HQnKDyunASebHcSCRVxKvG6nk6BjvEcb8rnX7LZG4brknMt63FbfXjZvwg",
  "key29": "3bPxHuxxp7UMWGTPbd57tKavS6cL35LN7pzgE7Evq656VDMAcerJn6j2kDpxZrBGrBN66yCiEeFzM4MynAYNKqbX",
  "key30": "2wKkMtpJAdjqBWSPd9Qx4RCLVH5XMf75e76MT5Vq6UqKarMvahfzQyEbvVfD1XAtgvw4QGwHZPZZxhCP4Rt9ehN8",
  "key31": "2WUMnaG7uKPwiQf5cJ1bWMCxK6BX2bS8fjLMdjyQG7m6qupZ4Nsuo8cFBJPtfyqs4mxBGqorPvKmd2fJic4f3K4L",
  "key32": "37rYNqKDpEUqwpLS8iiHW4Bcrn36HGt4YUG2CzqXKPieUnVBLaG4tFCvzkHLG3DPgKmqj4Wv7croq3FLgSX2UDhz",
  "key33": "338aJ6gTHYfAVQpMsHE54SsMS8rDtuWWNzF8zvEFCMJqM8JwxS8fpEgpkWDSYgTCZ2iMBtTUxyYbqbHgeK5ruL43",
  "key34": "4ViZ5c3UYZyYYm5JPMEqdD74URrPKLX3QZgvypmiCbuUUtXDRiZWoqw1DybRsYX1reZhzegPscFAi2uULPvWEh9D",
  "key35": "3T166VHNAR4kVm73v3YsquF2vdyRcbpWbhjjAJfyCQuKd1fcHSdJCMmt9z34d8swMm8KQx2SFjqWyWAFsffrVMd",
  "key36": "e5iEV7Trscw7G3jUAcQXjpYGP1R49t724MsZ3pwp8RuK1moZt3ucFSkNsGdKT94VYmqcekT4iszDx4vEVLyBnvh",
  "key37": "4qQc8zLPa1grRdmaSSzCrtZuRgt5nWUUyUdwXH5RFF7sGvev7WiofPztKSyLYv3CJYb2RFJ9MzGBUb7Jp7LYX734",
  "key38": "3Gb69QkH2VtzuRf4pHwWGAmKQMgMde1HxQuMEXjPSXvhJazQ5XsKckayJyHnAnr4skAdXbCJdNnuq52w4vMSu4d5",
  "key39": "2TZARqJHQvS7aeVaeN3TkAuxV2zVSYNF64ae2rWHZFAJBA51KBTVBZ9UDL9Ud2ambaTwhNhsMXkN8E3A5AiYuzVd",
  "key40": "DHv8pJbKfHMi7zVWLg2HKt8vZULm4ApmoWrn92zceqYuFq8CHhixvDizri5j9ZmBoeWX4TRq6Se4a5QS53hyFUN"
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
