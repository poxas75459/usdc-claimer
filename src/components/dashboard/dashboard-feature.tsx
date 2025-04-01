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
    "3ZD7FuuDbrRfFNaBpW3XumZ3pDj4qaJgsEvmrSYyHnEtsN9FhvXps6hHkhbBZRFnMyfpofKCrygzR7KFVGMpCRGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qqYrM1hSEMZ3ShqunHdsMfn2MjbkcVsfL9DaHeXm7VKKTbUhjfCLxJap4WXXnnYSZoUDxxqxzsMBpyMVUX9rrwe",
  "key1": "53GRnDy7yfKAZkZGiW1aHMab3Z29WM1qeyTEMjx68pDbekUQ53fseKQrG9N1GUP1H8tkbVdPeZDugR2w4JjqtD92",
  "key2": "hoRhWUygaEbz3gUBUpYQJdYcgVhXmo2oP7nHHZAoanEA8DbfcgCov2mFmQuWngJDFdcD2dw4A86oJoMP5tWtx3N",
  "key3": "2Ybc12Zq1hZPzBayU9SncmXA8w4zhcumvSZ6Z7suKxY4JVMvTkVFduxug9K7T1ZGyuQ6t5D3FxKBEfcqXRJo7xuU",
  "key4": "3a55MF5haMX2nS7H5G8YmpYaxK51kqPFgG7zt3x45qCnKaU1H8BM5rjmvskdyVQz2RWogdRCspzFdQWLbwGeLmzE",
  "key5": "5BdWEBBdRff5WA52Rx4hJNr6U8DJgH62JG4TKo4wWG1narSTY3Rvk8H6AV1BbNECpG5qceoFgwKePJdFT1sVdi8T",
  "key6": "5fV9YEyP3mNinnqqsJKvjN5tzutgqFa71u52toHGrMc6cP38deJ4Jg1vujC1o4QnA16anJFUraj8PHvrrvNzrwyj",
  "key7": "3L3Szaw1eyZw83xLhtgyDCgr17LCQ2Q7mNotGjZvHuHBrA8jPPScofstZ1bCKuVqU87cvVtweLNT1nnUM3n8NW5g",
  "key8": "3WEq9NFNExxjRPBPabmo9vM3H8i5PV16nwPiJ54vfpRtrr94ymfPCoX6RKHzksSxQnz6HKjqzrAhfE2fV19t8iWf",
  "key9": "3bAXX6yqzw1cuHgqQZS31MqSXcCQZEWqEyHqg8zPyvbYYUNgLMGLaSbe4yQsyhwRJBVE9kARPXRZoQ5gp3ZdKCHb",
  "key10": "5Yu9p6FcURrffafV5bdErZKFSKUzHyAhQ3zfpezoiTpXPWZKbPTSf18KRo65NdQc7W5DvU4NnpxB7ojePzcY9FEU",
  "key11": "5zScembAHM7LUMsc95QtRrs8DqNbcK64aZbB3Y8P9jMsxV1vv7vh5VWfe1Zdn5jx4pVKiPuyrq3nJ9oPMT4HfKEk",
  "key12": "EboQbMWdRJmY79rtbxJLPA5MsbKZxZq45xkQ3RSsGx4958dNxKmYig79ee26oq4y63b8hVtMsia8osGHYatQ8dg",
  "key13": "6oMrsiDDCy6nNisVfcrocMHntqW57752mS41ZK3EuELTs521d2ZinXrr28jUFaqK3yMUcT1L4rTpfJDAQqyuKDB",
  "key14": "4WjR618BLs2hhKKoTNTcamQ9XeDLM4pbyZkpAY12ydk4ZrEyhzLXmRVtVhuuM3581A8m164yRdZVMcdmNLgHb6VT",
  "key15": "4aVm97Fw5UeQz4yDiN54dBZvzixNzyMmxFNiPxTtUZ322ZuwjyjTLwR3RHUGmRtBEr7yd7LS1wcJAi7NmoB47KBW",
  "key16": "43Tfm2ZCaNhPeWXjwfduxqSuSzDZ3h7bbGhKQMsrFEg2CRWZXsJWgCHwQ7GuyCox7gJ6ubE7GnecBZyMguwZXm6K",
  "key17": "4UcM6rjTKnw73bSSpaytqCEB8eiddJoNr5Eiuk2CXLNA3WXjoit8hmjLgjK5uQvpyLZHspR4xb1np1frX1ztKLyo",
  "key18": "2NxmSVXWcrSEH3rbqhQLuRaNw5yG4RnfG7dcrnZtay8WmZ6quuArbGn5mTNueYLiqeZ4yp9H7LnBu7ZJBpR9G7Vc",
  "key19": "3x2uJiGZqZgrXzGv4by1wBtXZmnFGjzHwrQFNprFJ9BPbYJjnCUNGyRG8Gads5mS9KXf3X1Jm4ek5gf7ziLXxZXh",
  "key20": "2Jc8pnKGdtsqvboGLbbrScJBjxAg2ZAPnpND91CycY2Xd1gBZcb29NhysNhoF8yQQYoDjij8EM2AUmyjqk5MkC25",
  "key21": "2fa6ACT5reZEJifmNQC55ukVk83953J8AbYr8oRboGCyB56Qnv4kP9p5gr2PKwSr1LJF3dghFMdayKnKS7853Qu",
  "key22": "3jpwhfqMxWTKM4nTcMyP419vmHVB2fWMAatdGW1crdhYrdBi3iG271vRrTmuJ8nxqoyZdnhpmva8b77SDYX5bEDY",
  "key23": "4wDQPeYY3Jii2Mg6uxFknr6emeaRwVdNmFZu5Sz7vnPzAzsTZNyWymjUt4aw6yASNyNdEPUfgK6ybqjKi1Ky9Xks",
  "key24": "21JNrtiJjjU4kdGxDFEeZTYR4CYNi5ABQxxL6QsU3rns3R5ED3m2powfPn2qoUwJtUxS5VpqYzbvxUFqgZ94NK56",
  "key25": "5iFHsGEg7etHDurGPfULkgympDPJq5DjQCtr6Bmuf5ArCehN4QE71hCmaXoPZnPhGVWHU93kwQdro8EYw3UpDBAc",
  "key26": "5EPppT8VUCk2pc1BjDAWNQS3ZwukRVqLrBqkCBJucpJeeyw7ADP5fBDrTjmEZH6ZjVBTuhkyjiQ9HaqMFBWUKfUa",
  "key27": "AMS1YUvGzStk1SJjyxnwZDkJRwY1iEGXf8GvadZ5kjT8iTV8mGEm5GQnj7u2nusWYMExyPDnnAfoJgTEyaeuZGb",
  "key28": "WviP8KFnqaszM63Ev588A2kbJTPmcpA8uNfVpBgpu8TLrKhKrSzNaUELWpxKns5n9zABZXKGppUC4c5peYrh2Bj",
  "key29": "5zBjstvDxFDNfxNgsx6D2UmM9xuqWuLCNXzSoc1BimRp49hiv8aaLnd1ZkWJuYpdrR3CQg1ut5nnYMwn9f1U1ZL3",
  "key30": "ZGWYj1AUVGty9R19dw6MT9qHh6crWh3BPurh2WE3f4mU5py9FAA7FCDeLGRLXABEaZo2wm4HpushU2W7GLkuz3t",
  "key31": "Z6nHC2bvqiM6LMZiRFNuCW5yzt8PEJJF6agj64JV7vt8c77w8fdDVSRzwyxUR75zCavGBm6MkBjREgkhNArhLNo",
  "key32": "4qQbLD8TPbjG9zsVzSn3VfwP8Nh3JKvYgJrmFZxrkPfxGpLfkF2xkQtkyzDs4U3uLifLrAK6jXB3vXpt8QCUkJt6",
  "key33": "9hM2PsghP9HkFwzVYb5xBQParL69mGKy1p69ZQj4xd6tPsxdicHQsLrjitFBe9Luz549oaMvc736fRiqFLre159"
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
