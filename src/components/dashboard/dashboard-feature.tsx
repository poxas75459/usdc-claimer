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
    "KSonHbcCPmCuZdEUezUzByojLanQguMWdcket4HEGgQXf1CtsFEb6MDmSqLpoFR1GSu2HzM1QFJQr5Hyipf1ugG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PNXHvw4WTfGWzcotZgcfbKHiAgcioiM9R6vA875WyAnW4CxUs1op2HF13cnWrvjJPm85VkPDxTB3tFrNzvVgnKU",
  "key1": "5asggQgxA5JPP5w1qro17rDWoQFCP3vbTodZu9kcEFN4n8eA13TMLdbuVHLbKPgErJ76GX7vjEs4DFuwGehynx2e",
  "key2": "4KAmzUGNfERFQNf2jvk4cV2tUTiTm7K1TcxCxawTraAx95gV3WGEYhmy8bAJWaXbcufJ7FHDU8gdwop6c2gVNnTp",
  "key3": "2mquMu6HuCX3wzEHvsVzebrw14yprrng3Kvq2hjdfqghS41jTjGyRGyk2qoWDFjARXReAs7uXtwVm5YBhkURDgXz",
  "key4": "3oUtT94uA15bXcV4rEfiFmdaJrxzAnU61haEAnHp8UBp21VJfQ5xUHiqi1z7mJEcqFxYXmZQjdGBEG6mmECHa7Bq",
  "key5": "wat54Mbz6k4TfnwA9CTjMm8dKfH6scKR7oCbeynBC1X667YJsHs8t9jigxdpTa1Cowp68sX1D73NKCPJfaVyhr5",
  "key6": "4byD2JD6pgqftbgmCJsbC5VjT9opEFu36RvCLDNJtBKwCXy57jCv8LEoNCJyVPh2CBfE1bTAtLyAViPyxnZ2dL6L",
  "key7": "2ba5PS1ixapKpqEHyApK5Fx8cCSqWqpiBbU4qyuMKqsK2Lc32H4Fi1DnkoAr9ZpyMEWWMNh4j1ZZLkT8kKy2hAX5",
  "key8": "63GHxBmxmSTNhiFfByJEfyfvaAA59XMDWxpnXdbTEpiH9JGgAQBSjQtb4PTvtxJWSAjCe7RrY6XMfCYBin87hzXm",
  "key9": "3jy5MhgtqENNLcg2aSB51UX56ERrvsAxYLdD5tm8zRZkxmWid3nmPqWS6AnTgBn4duFAUi7AJCPK1Hd7983Zxevd",
  "key10": "2zNvQCsHmz58ckHBuiPgbD5XMj2ear6sdoozdQ9HXU3RvhJnxVFvKKyPWB5QvohupYy5r8W5fgLLFoEuQppvs5Uj",
  "key11": "21k1BBBYpYwPDwceCXtsVEmEK3dwM479TMT55CsY2DoyYbkTRLyiWj4qi2XgE3y951mpUVuXVAzrv9rGdA6k1KtB",
  "key12": "2mREZ1xFifgpGBk143DUp1wKim1cDvjeYVFPAZCqWFwrwo4SsXecuif8ZMEiKmkKM5M3ApXAnB9hAmYPwuvpGGKv",
  "key13": "5jBN8GF5ZQNWw1suCgkuqxuThXViDKGB9S5q5bFa6hB8tb2kFGgM2uBcGS3wdCbBJ3AHiVQSHY6DnZzu5d1qTVyn",
  "key14": "HkcaufgA1uRsQFwRTAtAR189n52uXEDtLLLgoE4aRB4x8n8qNqgm6Jc7mSW1ZiNFojhtkSwp8mELCJ7zMkv7fgr",
  "key15": "3HQGoz9FhodBuBGESavEdfBPe8nD26by3xudmfmFAWwh1M6jKm8NWm9UuDEGPv4K8Chdvk2HQzAdswVvBjMfcdt2",
  "key16": "AV17QCCmGwUUMeHy7maZfaXzHcXqzQFGbh5uttnuy9bTCujNoJGDeHciMzH6R7ik656r8jJtrNKxfpaY1xrfBZN",
  "key17": "57as9kA5t5fUmhYSCctwpWM1uiEUZm1zDywiwTFgDeiwahbt76AAoZDYXczJDEbdMjQE3MLEUqsx32ELqKeUhPsC",
  "key18": "5A48ZZQdK1WHszbFRxLuwBDDgQSy4XUabXuVzatvRa6iJUMCxonUGEbUtv5fCEokpS1P1kmGFVCEAL7LNPKLUkzv",
  "key19": "2htk6qQMk9HYV3u2i4uEYXrTPrXu5WaHxE5o15Y8CNdg3TPesJh7amMUYNBcEccdVHP3NXkDE81tUvwA4rZUQCeF",
  "key20": "2HSx7PH9XPcqhS7VDMBcor5D2VLwfH6bhE22jFUpAE74EaPGJjCHT1tNmtFVx1RPtF5rBuHECoPxBxc6genqPfTT",
  "key21": "5z3B9Bh39XHa7rCy9o6Re19dSaWYb8BraCKYWmKsAaQx7eW4jmKe4CYPX62Rh2CfkQwBBUM1uTTCrWYW92We9qs9",
  "key22": "3oaiCFjTtckS3A4jPxy8V7itH4SpoanvLvChDwuWZLdxpAsPr72GRUrEVDVsPMT21uEWCR8PhNQNaqXrMQ14GRks",
  "key23": "3Um4iSWXAJjpZRRGu4pEK98b4AXT5xrvKZUZ7bGmB967rgbXe5NVqepvR6TBMbE61AmF3jJGWgxbi7DNscV9MS11",
  "key24": "2uno1UapdYv2LQi984mShtiSrunoYb3sXm8Ts2Rm8Kz6NyeHbHonY97zcXCKS7a69oUCXQmo2Lco9WeexYt1j5Ui",
  "key25": "3nUr4TZKwSMt9SRdYAF6xK2bbUvatPeSR7ua2oK4QLcpk8BprnYDKXttSR8Us84VZWkpgfWqtiPShPRrG35gbVxR",
  "key26": "5fuZ85QTVXtRiFFjwKi4GLFr82NUbFwGQGcv2u2ifGz4SQQp1yCkmufQa5ZKEmBJzJXsPeoM9J3UQbj7PRqbxXzC",
  "key27": "22poAMqdZcqExC8jjeGkZptsNGoBZ2kvpLnZo2psgfdceDSWcgrdQ5RtVZz4dcHEVnb8EeHHpadTmuKLLc7sCGre",
  "key28": "7fhgYe6xnR52U6u3wChW7QAr8sEap9AJwjLjKqjynmV1qqc5ydurghtpoCkHgDbkh9LgC3Gf649oM6aPam3ZU6c",
  "key29": "37nRibAAy7p9ZQPjJDX43UskYpH5a9P4t9Uey7MGTaY4yN1thvMrP5Fe6GM1SbidmkxsGDYNHy71J45LqQoe6229",
  "key30": "5Ta6w7myyArcrGAUMFgJmWU8sKJbfvKeRSGktkjUn5m135VgPB9fnqPHw46A5CDJTE3fQCCFEQcpP4qoCK1Qx7TU",
  "key31": "37DxtvZ6BEhjjw5mAfV59bmPsanLWcTuWnR78vguyrGHyzEBQB9kromsgD7vszYMQacjaSUhuLif86fo6Cttebra"
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
