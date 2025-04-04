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
    "3VHFaAwUzJ1wk6faSQAJsVt4d4n8dCxMHGjTVbkBf5LzPudLG6TKPq9LqL8RrZnAoNxCoHEsJbRpEs2drxh1ZXVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RD3c5CyMFMWbZHkqc7Sk5MG7qvuqrzaQpPXvbRfgXW19mU2iZfTtDX4TbuDR8n5zZDn6NWR6M7gGAQL4m9txJ2C",
  "key1": "5TfgrtU4VJLEUoYNDhpVHtVjQgLXt63SUd2ho48UjNTvCCGJLZgBzDDSBCYzwuHB4VVYA48dP3W8EMEGh1Cqdd1v",
  "key2": "2ejqkhWRfKnuz3rtsraxPGoFnhmoWXifR877ECDB5UDMshsAKkGZasyXK5KSxv9meQcwNdvnn4tB5hxq6oqo3Rw1",
  "key3": "Q8iXh1PmxjF5xrRicdr8dgKi55PSuncsqAg6M9uPWp8ZE4n5nh5e6TETxd3UosFsz9ACSDEBwczKemSTdcYK4L4",
  "key4": "4AP8anUmVW8i6nXQWVMgychVATbomVpDLFgoaFArBpx3za9Z5WxZKkTfw6WUDu2ETAy2vNdCCNeKuj7j62kQosQ4",
  "key5": "51GV1AyNqPacUSkhBVBHBQym2UuiWE3ETUPJV9Wp94qTXY1hAvpkFvdtHTZkPgbcJN3RBN8vWarb87vSSgAtT8Tz",
  "key6": "3UceEqiRsQX1DywDez7GYQcKVGPg2jbXTMVQgE9HmvFXaSqnqgVz4qDSfsZwPBqHfEyAQ22gU1nsK1V62jwByszs",
  "key7": "7bmtFAoDBro1U96A6T5bhJxMyogAXF6w4E8VdN4JtMUQvtUGw8hJ8skyjcYZcn47wF7pyDLvmjLUZiLUe1dY64H",
  "key8": "2xaJZLafNUV1KNgmShvXrMus8LwE9JeRWmo9xb3QaFpR5MXsuiJsYjCreKgzyw86DUzrcgTtWXnjmEdyukYwpDtK",
  "key9": "4WFumFsXeHF5gjxSc6SZQMHHQ9LwDW5XPDAA5mFB4boZzMaFBMBh8G7fLmUy8cnGwCZ8WZ4aHT1P6ZujrZF4FCrm",
  "key10": "3yMsWC1BVdguLGE33XQvnxGUfUGvkbF2LeWff6GZKdDNwZRiu3Hosv2gXScnLCozUku4k7VoYhFEaCxbcUG9BvhJ",
  "key11": "3eiFaAiFUnMeM8CWFnD9s9USnBa2RPPQPQfm8cSdvZbwKKmD5U8PFxpDJVT36NQtRmxkLyrLiA3F3TucmYo9cq4m",
  "key12": "3ipe7rVopaZ6cG3NAE6mrkCwczoWEoAuwzFHmkWZkeCjhTv2jjro9zG1Esdto7Z346XYmtPrBCQ5uPpJsPoYt3x5",
  "key13": "4bVm4VBtWTC4D8TiAQkpsd73eCPc6bwUY3znYDbZikkSkk8uq33wzpvFtazjEsBnmt8CqfumyQs2xUvqtF9w3Wy2",
  "key14": "WjoJ6DXRQD4uKpyL4QQjy4hw6tXe1SqBh9vJ1akHsd4GkLkPq39AWASubBZdEyDRFKtzAWsPwvVRqAfRorHz2YM",
  "key15": "4Mwk5jZpCsqmUXrqUoSp7gxB48ARrdyBhd5qihqTx69D96sYiBSGCFzfBuCRKxXGbQVBGAAmqxd8GhJDzEXfPcHF",
  "key16": "Pbatfx5Rep4TxZBD6ybokmURH4NkiHV626P8DdsUfodn5zp5BpCLajZtGFUBcB1mvGCgu1DtdbwvTdC3WYwjNRP",
  "key17": "3zLuE7QVRQ9QfxRzgaQwe6ggFQiG92jEtVWvYsG76a2nYwavSZmbCRm2P6FSEwFV9jTRUmTVWXBUW3aayn5UrALA",
  "key18": "CUxzGvuJdzsWDpF5jREC4switJvmh35iBMpPvvMrrJ3XkTpJamWm9VGnxLh3iXsfkvxbY2Gkn7uMbdy7yKgVRVv",
  "key19": "2pxpMS9a1UrxTHttDkJwS5HFD3BxXtYGbFYWs2mgnSyTXSJh3s3oeKNNfP72gaXUh29QYxK4Fsjr2xzcsySb3gyq",
  "key20": "HaR2Uzj6m2guZ2w1UQrS3Zs1VFFLQK5Vs5faxx2zs1ohoyHXg4u6u6Gigab8tcSeMkM9xysv5YopZFnveT9UdjM",
  "key21": "3GahEt74TWDHgsVSHCkBuEudRXVWN8wUTCmPehqYERxnaJAyResz12kX97KHsnkXkXSsqQu8QYYmgmSMxZDKMy9J",
  "key22": "5xBuFRQAhJBJxvm57wkQyX39m1kBZrovwnTDaN875Pe8p2ZTH5cypoAm9nhMb3HW9RWGdg1XqUCvNLARMJ83fNLB",
  "key23": "471ruMJZi7P6wYSuSmyAFNBDAi9qc5gwgpRoPRg3hSt2b1jfuo8bFKmPXFLCtGMtaE4ndzCYJau69motwZNMCfBF",
  "key24": "pA6gz7oi6djrM7XEy7kW3VKBqE5R6A38wPYGsWZ8ZbRKcdz553BkAjddrkrz9bVdJGj8vqbqxmJTfebFw9Ein6i",
  "key25": "48V6zcSBuiY2cqXEc7pGH7g4dmCnjudUyduEv9Q9KgXwoKkbxHmHYF7txKLxZG4v9o5Dmzhs9B7w8LpLYLabgYuR",
  "key26": "yB6PFMjWdn7W5Md6P4jWCyVMhNagU3RLcA3szad1VFErQwBLDvb4gWJyCDFtY2scPPgf5PHvdsV3SzLTdEnbdw1",
  "key27": "2DoDYoTSmuvi7xEUn6TJpUNQbgU6adLi3zU8dDiBWmaXuS2iJ6goTYEzdvxdWPURCqsWPbxjgWg96okXarD6WXup",
  "key28": "4GhCDduhjippD8W7vyCLPma275scMVeeZ52CFcVBpLLvQnoVSkTwURkzLT7bxiQnd9FEBsEPbCtfaSwqwd7AJpHF",
  "key29": "4yuEbf16Q6XFMM7kt1s4NzY1Hme1nvwWKb7sL9L27fNSvnqs34xvrJwF4yTcqpaPqn1TA6MftAuya4fzPrfumPYZ",
  "key30": "eBMJFS1xjDDKEkvXgeG5s9NbzAhXCPbUMZVAd6iHWdtkscZwgBF3T4AQ7g9Yi3XKs9ZQoTk92hACNbdFAM3PvKk",
  "key31": "3MDJx4Qy4vM5weXbAFFBK5FNohu9Go4C5cCmpM62KpW3ghCShCNREwzsQzyE4P44yG58zMoQDMDx5vdmcFuT8YkF",
  "key32": "4sKkgjGD8e9ccUM9ew5QCRqPmFaXCvXakHA67HKTEb3Dn54xrEjYEnk1jDhRNY9zyeTAp8hpfntoRnnQUdAGJEce",
  "key33": "5f29FYEwPABxiUZucVAGHCZ7nxaCqhVjrivjFwkvYfoaq2rnEJRo1R6PuuUuwrGjWJfVy7EUtSL7tFWQUCti1mfQ",
  "key34": "5p9Pm6n9SbZv8Q3qvemcQMQSxrLfRqy7bxedcBeJNUAzHBVvBWp4vf5Sr66yoCCSXNKdFWTB6B2dLU9Vg4t4c7fE",
  "key35": "3bDhDYBfgknnsciLYgZkL9UGVnLwMN2ic3DKJE2TQA8Sn3woSQk6Dcfy3FBmcZtPX663etEAuLLoSyzSdznCGkDH",
  "key36": "sjMtytTy3KaGRw1gsNfdZ474cjhspEo2Yv2zHKjXVZ3roE2A9gpkEyBsFFP56HwW7m6o8CPqakBE8Nbyyn828RC",
  "key37": "41QYUfrVoDjbbb2WCYwvipgT8drSj6NUK6hnnHboGKFyho3QuWGeRQsb6bDhB4swtmBL3h4sM2tBnCwRDPLFYwoG",
  "key38": "3UmXVGnSpHccp5sXFftcjHBofGc3h56MojT5GEib8kq2q3HuYWgpSwYgn3X8WnemkoM8E2neiDf8SFATAxxN7Hnh",
  "key39": "cUy67UKvz8MSkQzqYeAvKSxz9hpurN3Zw9jMGPfKjo1tr7yYNhXepS3xeWNqhTUmtae6y8bZBXuARyfcisdxp9H",
  "key40": "56irPxePVa6LXFPPVD1BWVkE1YNfP4vezhXBniwC8bQZxHAKFt7HtDZPJ1iLXgcA2JnYeL2nRuTHAgenmqAZ6Uta",
  "key41": "gTm8mkNjWqEHLMFJDerua2FFYRZfRBndFYCu1mmkZHzXqjQt9pm8N7BoYvjS6VShsmQLupTKytxm8sxaxfar97C",
  "key42": "4hzxKznh87GDCKPVRfCZKcSjCCybHS2jj2qrqy635QBAsz8BQ8h4UVkFNhTVrKvy8hY5Q3xmeTc8sEu715befLHp",
  "key43": "2nfLecnSVnrnbGCFMAab9tgTYykLSf9xBVoQCkMZ1VDmjT2TmQKrfQfgxCuZXF56DNbAuyrneimKG3CyDgEbscCT",
  "key44": "5zMBXUUFNnfmTY5WusUzfqxxbkuVbwc7uPLhovKdTWABq1Ywf6rwhS1Vb3e2MTzrsAE2F4f4o7SKtHLnwdvn4iyC",
  "key45": "5JtwShn7J3L1TocvbvagGeuWfg1qkzxGfFLhNNwZQ7k7MkvPWASsyrFNnT5CscXPCoVk4bxnJUcsK6FEEJomvszR",
  "key46": "4HgABpopJVWCML1D9VMVBTkNG5teN6ehYtBDLLeNB8j5mqnTtkXXFkcAr2YHV7zWqaESjvKwsN7NuXybmh96Z76A",
  "key47": "3tdT2NKf6QrQ32HX3kJb7vGFZUhS14QRee1129MTuHib4tW5tJDHnE8weekSxFC16aNSVMemkgXoLYXSZqZhQ8tv",
  "key48": "5nYJvB9hMARbeqUpRcG2Q5D6HBoZ5HQwrUTb3APBRrqpeuTAe3fsphZFXNy1QXcC9gadnd12oFhW1SJm5L97zxAV"
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
