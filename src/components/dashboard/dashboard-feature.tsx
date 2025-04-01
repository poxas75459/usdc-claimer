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
    "53yjj31vw9kuz1sh5tU3zLSmdeF6z6wMe1kJakhk3aKktQaNNdNv5S4tiCtFZZcGiVV7KWJjsTHwCDZUd4SHWCd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51PdeWz1oN3FadFcshwqgD6qRyPna27KY7RRTFZdkt6A9Y3bHrvGuyssdbqJZwK9fMCW4Ju14wziohCtfvsD3Rtr",
  "key1": "228JJJD3rbkufE6NCapTsiQphx3jGUoyS9VYxzgierNzXgSjestxMngq2yAgGagzXzdJALeusSRXcw9nu1vMk5oH",
  "key2": "PYf9nMK6KGXpkMzNdSBsJGiZV5zTKe5aeF6KjySo8z977CL7Ltx989eZvTvQ4p927pRiydb4Sie6rqoqd73royG",
  "key3": "5jX9CdSHDeS71i3eFTcFaKEtnEPgPd8rZQSWD1UzV8ryjYVoR9XxX1c8WKPFsNDdz1ELgugqcnSDpDz8UmtcQpvh",
  "key4": "2BVLBgcYfWWvjkMRpcsYrnu984gtSpcXnpYBgpsh6kLPq2rBK41VpiJYP348pRSbzgBPXSLmb1ibUqEStWCFdetW",
  "key5": "BpiNvYGPW4jzCq9MZc25SE5XBzsfpBauczZaztaehaTmtxmF2USq8H2PT3Tffm19PLsPrPab5wZJ37eYJkKVhfi",
  "key6": "5qAowfjyLSmqq7SB3svF3d6Sjot5s2C8WgCjKtA4urzoG8BvvedKvTNU3S3oU5kGNySSs7VbmWkyMTxxkVBBYFbZ",
  "key7": "4Q91byHbhdQ3Lc4o2k3g2fKfCxejKGEican1yHPFvNseEmmQwdtVfVbNSixktb8YYgXXsyhz68dNL51UmFAhH3E",
  "key8": "ikeywkNFrZbxPt7d712Vg53u4VeRrFYsbJTcP69xYtMWbysYRGXrpkFSy1af4Cty3G7tSyqQdKw4p3JGC9Jyetp",
  "key9": "3uth3LB3P4xR5LggTJsj87P9FaS5QjfuMWGi88kziCrLrb1fkyQ3iVB46Bv5PfJ4EafbB6t2Q6MJW7zgX21nyXGj",
  "key10": "4bLZboD7mJNr4icwSnx2JhYLgY1rYfZoBstkUbu2SmRPgwfAhjzKwdDgEzA7awDm5cN7FtDMsKHr97kVCu6WJtn7",
  "key11": "4RpmkNyxyX1aeth4viucagZLBrQnobMW5QgpUqFiQGTkoHD2fEkKNpUKpvUzWsBrZpbChSxkw7b5cwFXLt1YLRK7",
  "key12": "5aDGHex8PC4ztEzEB7noPMVJTyJvZbjjgPLVUw7oqfGTtcLtC8UDjUsgsF3Ddbz628uahDUwZayzddenxsYN33m9",
  "key13": "4Tig3HjLUZLSo2kDzzuZFvT4Zy5iJ8bsJCAU9DW8KiTaRGoggoPQjN3fUSBJRrRUtA1KUHrRKyNo8ZrWsbBy86yZ",
  "key14": "ZJmyJc9xfpLSFb9uzJSuDE47H5FbAbxfPVgtxrQZZVu8jjS18EvdTrkZhBNq6ZMpa4PCHU2nz3i6n1FLoaBrSLv",
  "key15": "332yvfCdNRvbWgHqXa6VYbtg2JFRsJh152JU4pXFFoY7PfpsMKZEiv1VUi6G4bBVWkcAbS4LnbK7xMae9HNJM1fM",
  "key16": "4Th2ThV4abv6szqTZWHD7zgDsfpzgDwkkhQ1ZRCqFUi33A8sqES81kUuzAndWe5Q8iPQQA93NsVSNp74bqVMDdsg",
  "key17": "253pSeUAEy5txFPqQ7aboUjXngeWvt67BuHMPfz6pvD6w8x9bJp3Ssjb9kL72hwGXMWPVSAKfYPtBQ9vbwXasUg8",
  "key18": "5sUvvHQqgd65LDixTaFZwtt78RxaUF9kgdpwVagMZQMmyP3QsJXN9U4cgQzjvagBBePgT8NYM3KnLaqD2LmPavq7",
  "key19": "CeTUV7hgdf9XpZZT4ivB4CUL39GqN17so8Ez58RxBjNgRVQHB4GfWpq8VyorFhXZs1LMtpX5Df6kXXhabaUz3ro",
  "key20": "5Npm25rftPbki5C61toLsVbWrnnuburv3SeU1bZbn9Hhb3gMZ22UAts24cYbSCKuo2HXDUpXgG5SE8RBpAAmfyKy",
  "key21": "9Q6n19hTxfRMGop2Kos3XLLvGVQgG8zMyGfko3QCZgQyme4GMzuxaMgNDprDGzQFyM4FxWVdiYe5y2WretL2gdi",
  "key22": "3TNW2mpfFvGAceS9MyU5An9CGtjvMUCQcfWrY2WkdVFaaMBwzqrd1XsegBcS64Cv3PnBqRE3REbgnJfZWvR8sZ2Z",
  "key23": "5jrgyYt8cXtuQEeu3pmEu1pCKNeYXJJSav3VKcd6YKUHus4zNJNijDi3XxAXF9URHpoRVMUr6VXFxwMtPF6cs4Nc",
  "key24": "4rPeaMiSTFXkeVREW78fxT1dJF3ef7m1NZxN4xiQKhr4WzxK3rcCJguL6Vmo82WXg3K11xhvpB55mWqTxZZ1GQcx",
  "key25": "3u74LRBogvgr3uoJCK5A813ZR7s4UVGqEpBzyw2L3sYFKKJ19BpkztNh9Y9dNys5NJ5qesKu95vJD6C6JDhu86b8",
  "key26": "5S43PJ1q8UdecZkCYf6GpgVicpQB4d1VxX59tSQAjTWhxyjVi1bC4ptqsu6VVDVgHJAYmkNRaoXDmv7zbh8AX4WU",
  "key27": "3cTKHz4njiweCTV5XYmxf3o2EcT1b5ZZCrmkVdENgZTwodcBC9Yxaxe2EanfQcKxenYUrr1NfGcrfda45Fu4rd9Q",
  "key28": "2ACqhzsrb2Gg23WBRYuTYMmzZhkmrV9ojAK1JM3WuSzvYLytTsg3MfDqngdh8dRkFssMPgLrvZqM1zU1RtwM9daR",
  "key29": "3k1nS92KMGk3ndwTkQWzHFNPAjSWDQdzLAapC5P7egBsvCZUPHKvv4UBeZ9w8kTY5pxont3399mBHbQvWtE9H3DP",
  "key30": "3r56PqBbKumjVuzJ4DUAkK6oZdke1UZMfyxf6azierwyndY73JEj3bi5rVY6Bx9qbUT6xm1JibpQrEj3kwPLjmmQ",
  "key31": "22eUKAgEEHCSz7rWJXj3C5PYkd1Y7nMCtHEhwBf2QbHUCH9QNRKWTfRbAqKgLmemeJhRLnNKiRYbtNqPT9dz57b9"
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
