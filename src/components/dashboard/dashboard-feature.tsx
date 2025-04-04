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
    "56TFC1kQnd171NzGDusB1tb7fFd2MDuUckt83yXZg4NV4nRzdsHCYNrDgfyChPQSVchjhFQaHzbcrWBaYqKQCKPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JkfdmUJqoK7d487o4vjaXrcXEX4tdiVomzyjh3YK8iLT5kB1QKaRcWH6gw9EBGEVj7FT3su3YxqWK37dhSGCrjB",
  "key1": "3sGgpouLaZ3buT4zj3soM1UktQ2d98e1FVyMcoNuJhGcoCm8JjRyk11qGPGZk2HKeDULfKoEDqsMtoTVFp1j4omm",
  "key2": "9jBzDMhMCSRkssi6fbeDGQgXSNn7A879njH76NrAQ7mtAQziPK8CRA5cNoUS1GEdcbhgh8VyhFQ9PQygrrhDpHS",
  "key3": "4VEKYCFvjT6q4MeQjDMBbWzFWLpqKPfuoKuEwZgfz5FXN4tdhuJfA2AppP1kPe63m91xi6xSjQMUS6dvW1bV2tg1",
  "key4": "NAkkszvCWUaqxfFdy2ztZPwhTQXuuKjFf6PPueKKD1NcNeGjtC1TQpZ3sqfsrDuj6rMAXkB39NcjP83fhE3CnW2",
  "key5": "5NBURSseiTrTgehhhxrE2k88jvRLAmkVQwXq8XXVKhTtv5cuyg1UTkptkQkgR2Jzu1nptStj2faydFNomt6zAnsc",
  "key6": "5t5rUAa9rEwmtePJF6NefTdjsQ4zRnzKVgPdBdtfrZp9KDhpiYYtgrhYeW5DyDFZ32LAVnfiAqTxqbnQfMdWtgLq",
  "key7": "3dtbwrCxJ4kGnuHwaHdScMz4nTV9YT4FzgsxawQHZGEDUNLckGXo6VEivbBGcCWUjWLvuimvdb7PSy32YXVG6xrB",
  "key8": "37FyBkzYNw1MdKxof7AsrXSJEqPtcYdxvSanG6pRHxfyFbNBWHrLaRbHY71DstbSWG1Hxma5NVy9CW2pQcyfW6j9",
  "key9": "4R6g116p8M9jhoWmdq6kwre8MdFmqmctufAbmVKhNKj1sfpSavtMXHHF46zWGLPz3FhKDMjV4S9nMyrfoXEH13yx",
  "key10": "4tNDq22qs5S5CC9FevQfGvSLC8raYB81BnfhM9DFetgSD9VzZsCfEh3ACJAE5vU7EGExmwYr4ac8q34AtTXHh22w",
  "key11": "64UkphuFqniLsCdn662dfZdJdgXAq68nyi6bhWkiA7Y7yEXUZog81VnT6UFuSy25TTFfYY6UWb37jKqR3vp4DTCz",
  "key12": "2KH2cZ2wZLGqH5oWEsQfSQpdHPCG4RVXD6yVcgfrWzT716BD4zEXiu9zGFQjmUP55XnLv6sZ3jcWDJmj8Ea4mdpD",
  "key13": "vFFQbn891wgSdVpVJRrrKKuwnZ9pMFrPg69CTHVEjk24W3i4SYz1LeCYyYzDkeV2ozQEeTzNsK2iEXxeRL6oBBm",
  "key14": "42WGxLZe634BJTv3iwrZCKdKxzx86MiUXQPpG8UYgmA48yP61YJenWCCt5NyD8oy4Ar3PcyupeqzDPNEWsNKDnVK",
  "key15": "58gjXCGLuVP6bKYyxRmzpbPfGJeWiqsJoXHKcxN8YZbRvCUjDWdD6vxLTBk2oBeGYQcK6pn3MPLZdx61XvfVxcdu",
  "key16": "3FdRc4F1Lec6EYfxTWPDkn3tDTY2NnAfUcDXaeq6qhKWpWgx9SLNFHMHBz3iMFCzTSTSq1HkbT6Zf8hhmKeLMvQT",
  "key17": "4W2siGGPSR57bRNyWPJ4T32CJqKVFqbGbWTESjDTgFM9qMhazpEJTBGAoa9XXftRXrAyydAfYj8vA3tAwfZ9DoKT",
  "key18": "4rvXRrdN2BDtgcGwvPmezNnvKgkAvcdDbWS67T9ap5anuLFbCfDfumdG8o29YYAQ41qcM6uU8cewthe6vq5pPWN7",
  "key19": "4hb4PfJRDzyaYbqdEEJe5kqVpEUG5zbJCw7maidkrmPNHVs8Q6PAXSwxAHFhzvUuxJxcPB3AMoXRR22ZCGa4ngcz",
  "key20": "21EVxywFmjzKiTeUHkjXVF3fvEB8qBVMxXdm18zXdei4uvXQJTujLjAvbbUku5uqNYo7y2sFNZWnjfXsZ5481cHX",
  "key21": "3KWYaZqgHpRmzzdFxpyPhiqkGqBnQeDWevJy7pHp7SQdXWRVz1EEEP4n1TWSYtXLgq7iUbPbSYNq4zuJHoYyrHPu",
  "key22": "fLvcct6HoKJHFj5WsDHymuJN5BTvhUMzqYXBp17bsUyCDgNdJimqYgQ7hjnGiD3Z53CFP5Fipwq4FowPTDCfT7z",
  "key23": "2UeTV2PBSyaa6GW9TnNxydEKqaW4sxDH5rV7REmA9wKx5yMPszqQbxy5Ep8JTmoihXFskuPP7N4tNkTgG8rmfr1T",
  "key24": "QzJHKkYSRmt4jcq9DnM2aH2jTwmJvxJFMzcw9DcyUKvT7de2XVx9HchnKDQe9QBEPuzUgvLAL3c8JGzqpKbVxR8",
  "key25": "3rFHcctMGN4qsxaDZFsbjCiqoU6t7158jDRaquGgxbrbLx2q9Akthc5SmxHe9Tk43WtqaAde1AvHPftnbh5WdCt2",
  "key26": "5RKca7hTMYy5qZ4hjm88ixWB29fhiRkh2u13qTRU8KRNva5VNLGjRkihQzTi488LF8xgXB4SsRQhQEqvYVVQeEeZ",
  "key27": "5T5voMZgjNJNrrCJSp5ipUsVRuttEV1T5itDQTPPVLkE9af5sjXsR685uYTnGgnXmZw14QAVFMCPiuWeCe7vM7Km",
  "key28": "343HfqEvP3jr9Aon9QvMSvg5A1CS3YkwTEJkCtFm6y2q4AEPXob1UXpLeGPffJjeZeA8ZFjawvW83tqfRise35tA",
  "key29": "4rALqkdR4Yt4BbxgA98KTFSWXE6jprdFo9v7eDMhbb9idTM9JGXN7X4VCsnGixrkM2xy6ehts5NZDoaEXDfZnYtR",
  "key30": "228UBogRTjzAaXf4TgsxmZCFuo5bTfAudJGpmM85fyxm8hucDduyBMxhuRFdHwprt61vfPQHUEFPcSjDsUbLbiqP",
  "key31": "6b6Py16LpBsNe5xQUnKLZhJsT3DpSLFCCS7NgcA3Zui4EsUHFPrX7ajehG11YHe1VSpMZmRyzEGrXh3CNJNgKG7",
  "key32": "4LDNJMBXTsJX1aKvJSCDkf4ruWZfKSbkZi12539dVbLnvvc2F2ZmMpRi5NZtjUGQWXL3EhEfLneEta8vTbHW7Hm4",
  "key33": "2pgY3GwjRUFz6RQyBctj7qWigKzATeC5UvCdtBrZjY924Q7WAiER4cgCZrHvCzwKZAvJV6Lcvu413ihjuZhvcGkj",
  "key34": "5RTKJUZLJueHGWhEtvw6L9H2J7jnDJA1ER6aAvQcBad1hngwxhMhfmFpKGDgZeSKU1R8uz3VEef3qtTC3fa6y4AU",
  "key35": "52pnh23RPHnJUwUs2mnE9zdGz6g5z9r1MsepYwZ62on5q2wwSf5Vd4ES4SJVZZhepCoLGAsLWnK9A4eYMP9fLdd9",
  "key36": "33A6okfgA95GdtFyEXh2UuuKmnQsHw1CsyDuqrdjkGARAQeCLzsJv9XTtUnS9Drwg84S8Cq2cKj61q79dNkeRXvs"
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
