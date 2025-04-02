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
    "59ajCL1N4HnntvA7rPxgitc5GMr1fmfE9VauBegFVwZqLgCcozqDrrpS8aDnSQuGdjNM2rNbmPo5VHjX6yp3NMZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65oPAVbc76Yam8B3DdbZPHXPSpku3HF672cM8NxKFnwmg4Si1ySxuKntAMcRGC2BxmHa1gh9DFKccxa144Fgcw5Z",
  "key1": "29UZr986HbHnoGV4JVKY9DjfPs5ekGdGa5v4zYbVqD18JWyzp1PpdDng86P5Mt4B6YcEwdQThFwpo8h7a8XNsQcp",
  "key2": "5qV2rXo1Uc8Cy3ruNC3MzaXVQktdfw85VqsKPpJuJsDsgWNjri4hQRZ9JEMLKKkRKcuSeJDMFTTZhfueBjAMhK6L",
  "key3": "62u3vihvyC989TSD5ck9RJoTVvxm2ZuLHPxNokF3Z7YpCSrz2z7TGvdxbAr9sFuoE2P4nWzvzr2oSngGLtj83ZtS",
  "key4": "XTe1JZGRkUvcMPA9fEif5egYBm8U6fs9V17snFDtZEVaWcHxXxbfL6xMDDaToXsbpALN56xfiRvgFF1EsT7nkqy",
  "key5": "2prNLKSkkrys6DwT6BdeeYSvajPgXFo63rQvZ5WkuoEjgFi579DLPu2uvjGo7qyKFxcaSQJWiL4Nhwn4W5WDvM4u",
  "key6": "2TN96AMvV21GB594jv6tAJDqUag28BxYCXxawcerf6S2X9T158yoNPivjL5qTVr4fBUVEZcPQhu3ngbhr4wsuVQ2",
  "key7": "vFV2t3LxQanXBcJpMuUSmtCeGfdjQ6SaWtuiwjsz7kh95psUnTdnYaSmH9MBkPsa6zj6SHQLRYpMZZ9K7dWfqhK",
  "key8": "4897Q1b56hV1uoMaDw5vjgQEQu4n7h3G4FBFNhSfV8vgTu2w7SM6H4XSEo5PuLk2sUrJhAKfYKHQnEC6YruRL35U",
  "key9": "3KPKEuZnJ7p4ydjZJWmkXAZfyEwJHYgfLKsjx8FWz29uW5WZGSvqLykaFnPxf7vzz2bC7Uo7kMTpc2HDVpntniKS",
  "key10": "hDqfBmrjK1dVe59xp4aobhfaSxy1kwVrrHfLmCR7jzEBVe8uYXapq32jgdEHLZywuxLWVXTxSn2ftqUxAAX8MPB",
  "key11": "3evwn4LbhkpHHeAk5cS2Y8UbYdNj7VVexuoBBRF5YL4xXAPLLjVvaotkqLMyatGhx9XdCJED2Gr8J41VQeZHJwcx",
  "key12": "2o9v9Ut8gSD1WoQRmVYturg5YiaozA1sH6ekgmFFYJJfrX2wB2san9apnsB3x3aL6cKPrMk5i39xxKEe8GHt8R3f",
  "key13": "2XWzqDWbmBAZvuXYDQzis1s9GqTZ1sFXjR87qHmQHFB79ZDWR4SkB7xq1FQ5RpZXnyuPDT3mzz8Q2RyjBuY7W5U2",
  "key14": "5SVuTGs9ccaQD8BfgERZFe35FxG7GsYWkJo8TVXfeR2hptHCzKS9komQvykrCuuGWsRybJ4GQSKRNTYNAhH1Zbsi",
  "key15": "3LL7Nn2VkD68kH3s8U4aqndqm2DLMcHe5Z3Ya5ZcAtqhXgaWzG6qw4W83P3K4an5afjDCecWyKHoCbUcPn8e9ge3",
  "key16": "3ABRXnnvWvZsWMdbRmyTYMNw6G5LMjEPeEjtNb8TboivKqMNrfk2zi4jVutevmYXj8CEZxi6mKRfwt6Fxtvjnc9R",
  "key17": "5LAm5ynhmKNhq4xbr7GCaPTzjwvuinfy1EczpG3y5L1yZtWo6RyErqXaHiPbMc26ZcGhyzdy1xSRmCX4VeY7DnRn",
  "key18": "2ttRZWnF6fq7Nfgz7F2hgJyGTtAnzNYEmoaej1qrN1SRRg3MBcR2yrtg9PDnbDuw8CYFpvuGi9sp7o6cfVWuUV8d",
  "key19": "qo7YyASXJtFVT5uKEyBzZKRb7NCWSM9vDnZyqsfB6AWoVwY373xqLg3sirsq7vxnpy7DRzuHug4xjeGYNPLjB3F",
  "key20": "gNsgaCdfjQaDkvHfbgZeCMYT9wmiACHhvr4dY3YPc9ocJYCcqYmhqg63EFC27sLpfBgySH98youhi9raauLkuGR",
  "key21": "26V5w7BAj6mYVrXG27Gi8NHBKZvYYjn4pT4MT66NcxnWkfYDHgsRMDSKVPmnoKJbWH1kPKdj1ReCSrb5VRk2zMrA",
  "key22": "3yxpXbVwvZL6i2B27qGpBqsHa4WFi2TZHQcrxtEi84bpgyeyiDgzFb2hHqhUdaVnkMSQ4crZGgkNNLnR62ywoox6",
  "key23": "2ByBt3BzqgwUfoHCZHn3MeAQ6modqiSHzCwV2petdqtQSCoEPtNmzfsMS283da9XVApiQzP4ZUCc4qEooFnjLj32",
  "key24": "3u7W3DoJ5sKN6N8LJFry2VPUhmtwVg1dYYoBDLxRT4cXk8ZHEaqGURnhMS2Ue8yN19Ecdp7fvEjixXJ3gJce4cd5",
  "key25": "4WNmb6krNfFJoqe2UjwK1AfuN8Z2CRk3dfdiDEimNmCPRm632tzDTLvFwvJVkzNSfVkKcAKfixLeppuCpHFUqosi",
  "key26": "RGZk35azkWUDfu6Dpz8PoswUncSCphp3j25xpgxeN2Jt3dipD5e8HX79Y2wdeWJqXVeV3MNq11NZez7Zpf9VChs",
  "key27": "45YpksHy6biNVys6LgrtoGELQgEDwMDadnHUCiZAmjhJ3TLQZSgsQekDeh4mQN2kMaJAfTtdUaVB7gLTWGaYfSBV",
  "key28": "44J4CVerSoErusv9FGzt85DsdSwMxqTJKL9Y3eUaB9Gv9zwmXFSuQrhXZ3csFDx4QUmXTPgDbAtdzLngULSjrFTs",
  "key29": "Pvq2DKXRe7Awv4HBHMG1i5BXJs4DF1e1hSLh4852cpYDcVPvjPMXxnZCx2DniobC1hxzjR2hHHo3TLJ3RbfBV8t",
  "key30": "29pLegbwCWL5vX1orGDis7Lj6uMAJnJxNKsbRXuv5iyDzqNcXiGJdjoCZSAH5FVMa2VHMMBsccCrAFs1wxA8epaA",
  "key31": "4i3AobtGCTJL5iZvyCQHGT5sCyKvGv7AFv22kaMDKeZkcX8eCbNQk78whWzXVRA45rK6UrWWUDhzjSaHgj9bSPiq",
  "key32": "1qRShXCwTfotkVQd9Tdet4fHHVFJfKkhGsVn3MqeedMu5fLqoMPn8fgy19kunNAL2Pt58U4xUqzSf7sfU3UVaTa"
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
