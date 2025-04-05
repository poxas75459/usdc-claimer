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
    "21ej6zgr6f2Q2p3goPNfEjj66yqXhJzTR95K8qAUo1tAa8UtchziRzsJUFkZrxkH2iPz5MdcGGUvdBZvAQezQr3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CgtavFcGiqtkegHJ98rvF9Na88PXNQBrZccZnMEdA2hdvxx83dzoNUDXTMR8BFRdv4fMQ2yKu5XbxLN6A81mzoS",
  "key1": "51QN99vgVYD3AddyE8L5CvjeEgMmssdP5bRBZ3tPo5eJk8VCjDdBGcDBKrKTE8NFDEEoivt1RpCtYa1uVAYhp5sA",
  "key2": "22zM4YoUGxS77NuZj1GhMwCGJPCSdBLTb9bvCCFvzB9iMXJKKQAAimWykEEN52wbxhEEbELGgDd8MfBeJNHpUL3M",
  "key3": "4hGvgyhf4Su4DmevGteaxP8YFnibyzCqxLBHk5JkQj8z75QVA7AGsnsW5Zpb24ngYpbzBTJX6GsG81zxUYRbzKiB",
  "key4": "2SL9JRgiU82JWxrfoEBX9JNaivbGWw3qyqgwZNYPdLeDBUzMAPpYcu1APDsSN88CFuR4LCGZgSSajD56s6qGV6Ur",
  "key5": "XhYcdGt1qdWG4h6iPG4XtoDGg9ovDSdDTCdPtXyrwZrnAvP23vJrJho7jtV22t95shQRNPc8soKHJT8ocFc9ZVB",
  "key6": "42haWrSbVtwxhEgeQ57JAMHZ8EeA166LJV5bTMvYe5QjVkWiwqsJbuWWRazDi4AMdbW5veDniXb3S3QsjuXBJ3mT",
  "key7": "442MTFoTe1ZXmDgKaJac1g6zkfm4WyKBeK6MxtyDPCVcB9HBjuXKihPVH8AgtovEQePa6miahYF6mbk7PyNuGyc4",
  "key8": "45e2qzDm7y23GnM97SrN6j5xFsy9gZ395ZahVrmFdE7MNJSZvhkcPUfr76ZnbRcq5zkVdo1b6VAwxTutZKWu5Xan",
  "key9": "2SCJpNFyDGpKU9G5ejMdjBRg8c3dzbvbAAAaRA7xH7bxGzpsK61E3gGZjmQRHQGFSTDhpRvLJv8C2XVPpUPq9Kcz",
  "key10": "5h1E2saowA5VKaGN6r1M1EUU1VSexpmf6Psf6gLbjHrPwV5Hq43rD3NQtiztWuAYtvBwo6XNNGKh8SFgGPMm7i6X",
  "key11": "48CaGMQtoTaMHGqG7MC2Zmdf7fEWoYnS4DaEKVmegwG2KU2rtwWmCEUn3m7pgjM3q8pzVqtdsGbBoAM3rYj7XFgi",
  "key12": "419T91G857XG6FWexRBBufH1TQaJGbH5nuzB9WT9z4E3KoczX98SBSr91o97jm2WXBqmFFqySd6k9TDcBF7h1SDi",
  "key13": "2gJH5u9r9UyjUd7MMep4axDnNPvJJcsm8aT1ZKouF4MfwDp2KjzHDuwsLMAT5Gz2mw15iCz9gofaKoidTymoEr2P",
  "key14": "3MwWXmNQbrSiCJK3q2sF6aKfR91VaDaj79h6TySgLP4trEUrRsndBvpbSqSDUmZNGZC4MEf2mKerB4pDkZY1n18z",
  "key15": "qf6EDJa4mkqrJ4wP9nRYJce1ES53LmHedpCY6wjzNFJw9AKdpDYdEXXw72KakoqGnopvVJMZqDavdP6HFNy15g7",
  "key16": "39RcY1KU27ctc2dmgcN28oS3CG7tDxYWoegWc63jdRp3839d81SajtFjCy1gHwoXgz4zN8gg1aBcPRN4K5KpF3Ty",
  "key17": "3K4ArbASGFSPZDsU9qYdyUeg2fL52xzePeeH8U9WvqaqGvr9Z2XX4bebSHmf4SCvt8tRSv2iyT6Qu1aZD8D479w7",
  "key18": "3fLSX4vLFBRv88NzYsQG3ZjxLoZ4L3F56vQPExi79LCtETcfcSFZGy8gc3dEBb2KtSu1X47spPdyEqV9WGRX1w3v",
  "key19": "2UWrFAARpSmsC9M8mdD6biS7awpmUbaRXVtSBpykBXeJWqm5zpiuSPchvxqJXy5Y8ZvYNdin8raWJfUfWej8ruBQ",
  "key20": "34mh7P5ffw7y3Zg3y9Po3ULqqSUrKBH2Z6VdeghiuJ5ogA4NN7KejPooC2cAHRLm2dy8jWcL6L3k9QsE75ob5x6H",
  "key21": "4KXxQG2tx437LS8UUVos2WU5wvYDz39V9PqnD15nF37BTmV5v51XEoyyTBN558LBMmhxp9AvrRY96EfvNbDHwdyp",
  "key22": "5fJR69ZTJTR55oNKC5t2uTJyVtrNwPGB5E7exdgbXVx6LF9oK9Zp3K5QDgSZHmSCqUr3MdFQpFspZeh7gdQrzCWD",
  "key23": "2ad6knpmfAfws4mdEaciRfPtZyXSAPXWRj7ZAodkC5pkPj3Mcia9be4E7QVSxxgfn8HEQMRJemppYduKm81dvBc9",
  "key24": "SSHRvxpf4VsSDGEm55nLWRwJFrqQ6hnqWeSUFeVNzynzVUb39phwRvhogh5U41qCSmUZgwq2xR2NWDfvu47RjwL",
  "key25": "5kCbDJCByp8mhPhu7Wy76gtyfu7yL2u8fWcyfjWxFyLCVy23Mcqkh3D7PvA4czVGvPpNoDXo3rpN94nLL5wsqUCe",
  "key26": "2DAXprV1tjzcuiaXcs6QkmyYKAcnhAGxGdzHbsZ9mEA5Ds24uqtgPQJ1LPTPTdTCKdiQV93rZoqGVK4Tv6EbAsKZ",
  "key27": "2PMmtkAiNPvYHqhc36SzTUNXcmyizHq3KHir4hCoFRP97fvTNKc5zN5aycmT4BYHWhh3fPhh5GzotHXjA6DvETUM",
  "key28": "4BJFKu2PASDWZNCPb5MCAwPT4yP5pWzaedrRBgUUfdVfH86XuMXbFyAqJU1ESF4p7N5KK8Q4n1DfuFL99KVwgGst",
  "key29": "2XMWLz2JZ26pzegfx3QcLpF1AVn2DZF9AUQthcH8pN7ZSy4FZxeoiuPyWjsqJBaZc2jfJdQbTMqUx5XYu7jUvgDJ",
  "key30": "2HWeAuHvVCSrPdTtq5eJCecXz7kjxJGenrLeGHLmzEREZ7BTRNP2naXx8up6XBKwegi51NVSTV76Y8miXPWP25zi",
  "key31": "hcW4Jyo4AZJ1L3ZhCmyvArHpkVwJmAmo27912KBuULzT8PeonGyBWBssGAXVcxoUTsEYrMdH8qgVLreNM7iV91t",
  "key32": "3QBsru34NrPMMuAaKywhdvJWXkU42UYnVF1ghGu3Wn1j9QXCgWEdQhoBZfsVbZBapWv28CoLtFzZ5FzQ2QLpJrhn"
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
