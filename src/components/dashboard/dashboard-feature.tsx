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
    "43xacGhcR2AqH7HhbUV3xZ9SX5FZQ3WmUELYpKZxG8TCjbUJAkjRzAsQ8QbDJnRA9VUvP92cnxZQ5Swsr6LBmgVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E65oXGeUWd797VCdrxjycDLjzrsqiG7aXNvmtJHQSrZ9SLFRR8MXKDiZiWvjKVKhxaZWkvy9Pv8CvQci7QSh2iq",
  "key1": "y13UZuwvu1xXHhBnKEKVRHmg8nVDvnX2eWuLi8Jx4WE67N5TuN9exLHcFDKo15C1rHXC6dgifFcrUczYpMm8CCV",
  "key2": "XFrbEpQ3X8yUzedXebkn7HvWdp7YWi3rqwwEys9Wp2GH4TpfxUgvgHX4AgWYkyCj7roBkphkecCDjRFnSa6C4c4",
  "key3": "28aEzFNSh2jZrQYWMKGpVL2wXkoFuY4MAhBWdf4guvgZDNb9aA7qieo4vewh5nAZqnQuGAC1tNLe7RbQb6gJuakr",
  "key4": "gq7qG1FcNxyzzynMro2YPj7VoeGTCYDELHGBLWJqTykhLS4HgtFsAz5JUzfcDmaRiXeLmCpw1ASkSXn5g1ZymGQ",
  "key5": "5hGeN2zuhiPmvV5HCbxugzLZjPyz7HZwHw26TPNMGy61UzwHhtjdZ9ida6cs2DzLEm5xeAErYEoRZzFnX42qpryw",
  "key6": "3bibrPLRoDFEAcaYi3R8WHBh1jhfJz8UHc1zpxC6CbqU9ZsgXChZMEw4HZqjVXuUZFLWHjuzb1X9NP1snwYPdh83",
  "key7": "NT2Pg3meWnjTnH53JoXwHUcUBXiRFPouSSWEr42iDLyDeEWyJ6zs7YA8y9iAAZyTDX5sujL8dGRxD6zARxEUczp",
  "key8": "3ZqTGDPm8zNJF7ftvCVev3ziGXbjB1zaUsz64bA37QMHgTN4WpET4UWrVMaFuehYKv7JPsHyAkrKNd4aZ9hCE2Ww",
  "key9": "38sWVefmm2gqgXAKc89B14xYSm1vfYSUzsrcNKTkAsFG2LmdfHvnV67vGjdHCL5HqeD7a6LhyKauX5icn98R1xsK",
  "key10": "524bcDuJTf8DauLZGao1TptddrhC1LinAAiBBZvXsZYxSiaGPYKPQVqFVr3tkqhV534JVeK7LCVVWDDqjc9zUeU6",
  "key11": "3S71uMjwcQyDDHgPZ6GR5UvZiDAoKq2cTY8HTbBKifCsZHod2cijqd1aMWFmGofR76umaYWNB5UsFzWuirbMfi7H",
  "key12": "63P58rxbvy8HBTiu7HbqeNDTGCucfvGGQcWQHSSgyJRxFDfV6f1Rjar2qsrpyGFDcAqriY3tv53pEFWDsuDiya86",
  "key13": "3VHC7n178gEhGB6H5oKYBtyB3j7xsn1Mp2a648WdNuCNVgTGDJ5oHaoNQnK4UEVXc5VgJWzSrkM3BzYjw3zELhHA",
  "key14": "27ToEve1d48PBUGfhacBwRh3GdPDZ2EVkKBxqYYBFic5LkuMo4WJiVi9RuUSGkYnMVGDhNN9HMJUfQrfSHUB81BR",
  "key15": "5Yh3UL7r62U8X5hCbdPNiK2gDn2d4dGcFnD6epDDxu657GFKSQiLcxwV8wizLfCA1aYPMWvTLnRpQkDGSMN6spfL",
  "key16": "34v1Jv5p3hYWPXwFY3i8s5dnGZ52vrv3AxvBCBTNBaFjh394cbWsVZjy4YT5L5GPBSwwdGrxUymakcXs2VpAs4XQ",
  "key17": "5EuWanbee6cs2DShtLgx1eYGnRGeoq3UpUaBnxsZzt4fJfDB6pECq3MVttofDRnJJuPcubweFghVGi8gburDxb9W",
  "key18": "8jgthJV2mufJE49mzdHzHPkKqhKMfiD9j23cDNB5MPUDdkvdg6GshxDSgbZQHjSDzbvMxgePc77LhYUSXBpExpk",
  "key19": "3nh5Pv9ELyxUDBmAnwbm8w1fh4ZMagir8dFm3afNzRcY64FKrbFZaq7uL5btPDNTJQvWuuJPigPiDC49E85wcXGH",
  "key20": "5ccbNcxhdWexcTWMwppSUcMDeFC2psisyBAg5zCrNtHiRbkMcUFKWRqPDjqHsjYtabccBMQTR6QkeEqry8Q4QdtH",
  "key21": "3Nk3oi76t2EJbnkbrDJZoYfdVKZkuf3sxUfEbPgqjLqpqfb45TLY7ArXjjeczYbiKcsrvw7KmsaoV8f16rUMb1zp",
  "key22": "4CzoHHJbz7FTSnqaArogaYUyg8RQi2fpk4QisiPuHFwc5Kppj2XFBdETyHePzNZt15EWSePiVmm3m4vTrNf4ikNm",
  "key23": "2ryb2uui8HdfF3uYig2mFBbz3fG516QPfwdU8SDbufi8axSUPNPkPgYCLK9kHK4yhehUWNmfR84LTyHNbC5QnLR1",
  "key24": "MQ71Yj4GAKqNWFu7Difw2qGeTZodas83Yunbgu8BkTEEjJ9vvbAgStUKwcM5fYvC1URvTbZq4JdumSgaC43mf5N",
  "key25": "oLrG9kQDU3By7AyWUoTwyjhpcEBJkNsB6mD676EqM9vNayHDRJgCjWKVsbeRt2BSXkwRtz6CxKwjCxgxH4HL3LG",
  "key26": "t3PdeS9s41xQPsMHTuBbQWiYfBB75nhET4UiD1ACGY5xNKUD34dtmycqCd6bMgyTWpYAkHFs2pxC7Hbgx1D3W68",
  "key27": "VigQcnYKh3uSh7LRXRgZ89rVHvPnCUTXRXrKXPrNW5XuMR9i4LJXtzcueVTJ4zDitMBXMxnVPKvdhvDBw8WYHoE",
  "key28": "2tdSbzy3DRC9ii4iot7ZeUpQUbyiiGBKyGJnuwnTJacWGzqTx21FQq6iEHuC8ULwPAqQFyWb6Rny712ka9uudSgL",
  "key29": "3x1MMcusGsbdatjyNGHg87DXy8ahbcVtQBREGFVy4GSAgt3CUbxuVd1nYJ94aZpSGpHnVVJ929pEMptTs39PSidk",
  "key30": "3PF24ePy5Cf9g2qrNjLdmvj58rMzGjVVMH9LUaT7JzANqoeov1cRYevCVkpeFtcu8HUgTTpJmgcV5EBGhZE9RWTm",
  "key31": "4sdaDgW2PGoTeRtpmuRj7LVYsbDo9ewfEdtni2NykcuQE7hWDQqXKBnjrMjKZ6EFWyZEw69WoWMDgqLxxM9Qdd6i",
  "key32": "miuoFR6H5BFzVqQUhfaTg95zGcSLJygAB2y6we9U1F8aVuitLm4QsthBcWCNdyBCVkPXgBtDGUqdLQVDiLU2UmQ",
  "key33": "4wsdmwVFMXhsB9PfXy64SdP5E8EBm4mRvC7DKF5JaFSAdNcxy6Fjoj1VZWaKQPeU3M15cnAMvQL3R4BYqXAkxKiB",
  "key34": "2jg1LgYphCwcmdGfnWSygpGNeBeUoRV2FTfJTKx5gH3apYdUCCrBHmp9h3FY4BNxgnH21jQeTM2eGnDsj3NCuNsp",
  "key35": "3PzQaarhWzvbFLqFnKpDy1H1qF5S1icTZg5NAYTSGmSDNhqBvBHNiWr1vPSZtKAD4Via9mLahD9VT3AQaSmZ4jSh",
  "key36": "3sGQFLeusz5177rpSuWUmFhx1GmMzvh7moENJyYWm8qF2zwMod4PrD2nFFXHoMJfKrr29R1ozq2tCBx1nHcGqe31",
  "key37": "2rWXUtMeCYG4zDwF8UnfgJQCTAB5EzhHVMV8Ssmxy3K2JxNhLtWBUq2mkrEjtN9CE3pTwRUzix3zHb35vB9HBLZ6",
  "key38": "3dtDtL9ennTc9STHUeeduYDPtBENDNpNjBV5ngPh6VdU3xEzrpoyPpbV8r9aP6t9eoPDpout1ohnoykjhyH7xaGf",
  "key39": "24cNUayK8JRBD1Eb4uEjnogKpUJtYaeYVFMu8sDbGLiCs1SC3HiNbLj3W91PfLrkFVsfkzU9W52UgfGKxLYT9198",
  "key40": "b3EDz1hByWvbrYZGQ1oWHEN1kSTp5qNu1KeQYSvyaSRnE5WBdEVfUixsaxrtwAkDnVTYAmNhSvHy31aLSw6JsED",
  "key41": "Ftg2ZQ2rijcC4Ejj164QpTa3xq8YxuE5Yut38FuVyGGvmfeiZNH5F3AsdSUK9WLtNqpE5YVr6W3DCJUbPMRtjFe",
  "key42": "5o8nvqavsLQmF3MiN7pVSwaeQkouPGMfdb9c18ariRDgY1QEjYqrBiAgi4rcJcx4Y51uVBC5qp6EueSokxf1KngX",
  "key43": "391zEzkMxiSvcEgnRtZ3LYDS97vxr6n5crQ3SivzyaToX21Ca1fDF3ni681ZFPr1Fo5imoMSUqo5ZmK1WVX5jS7L",
  "key44": "wzDjkiePYSH6sWC9v8aVgia25R317BAJ1nujJRkaAN5Hb2oLJ5Yjw4F16gzBbEW6dmtGJbAHZqG4yfCEb4f7YwE",
  "key45": "LxUBhhhadzqwivGKMEPqgHfqNJhbJwcD7AeCE8sgPDhXDXSeLFFdRzbpbujjzzr6y3unrcTw6bcGCPsWGvSqm57",
  "key46": "21zS1A6RgXvvFan4kLM9bT14PmFnHCL3YDw7dPtjBjXioAkqZpLXHJJszro7ApKNLUa4JZ5S7XWNjEHavrawtFTR",
  "key47": "C9jPN6mxvpS88WWDZrPjz3Spd5tGZohZUqXMgJC8teGtYbR1azgRgkmLrmiewHb7HG4g64C2gmRK6uYpBvdv8c1",
  "key48": "5VCr6nNPjRtbzsavLuQ27CkdWt56E3hEw8tU9TCboynn3isUcToGGV8k5g5t1GvhMAH668dHuy9rsQsbVoZG949s",
  "key49": "48a1vmmQcv7RbdK9KyuQPHF4F9dkacK6Rohwj4wYXTYFt9U5rsa4sgjDFAawfyV1x9KaiX2Uj32fCsivF87QvPeG"
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
