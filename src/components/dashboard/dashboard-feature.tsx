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
    "2v1Z7PLwBxpVfoCJvQh9MTSEzmxygMbgH7WpVuvrb4zYYqWM1NVkBoEpBpMjFq6G5ZDHqo7FZS1Uk8vx8dgjCThy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4amEPaQHobwnFz18sxSvzXSS4FhxkLqkpdtCTgbuEkszHTH5G2TjxFG5iss1h4uz4QMAgQnwmhdA7hcfDn48JaCh",
  "key1": "5actLHx4gs1K9V8vwBtTKhkAuMhsmS7W5jC7sECpjzPcmad85XLkyhqn3vXVjSCDoWLZhaTgdm7mJibVENJRoVAW",
  "key2": "4uYdLD7iovyd5ofZVTcH7a9UeHptAZ23NqgbZc3E97z2MsRWEXsqqak4s3SbnoyByBLpQoNnRvnaCk2mE2fNZg25",
  "key3": "3V29K9N35axWq3WKvfD2Q2g3mkHGLP6aiaz9QqXhi6EB2K8sgf6EGVdeAQaqNkngpSDZww1fj7nQGEQsxKoCAe6F",
  "key4": "3SPeAExUKm9MEanbt37arPe1P5gkurCti2FM5sckHzdLVwTsP5ZgwnBBEQTGkT31x9LQrX8F2ectX23p4MZmHiod",
  "key5": "59cXAHabY1HW8Zp3UK35Zgbuckb6ei4qXfMDr4PTSqLEuf8JNrQvZKPUrCEmz3K8iBW7XHtG9sY1Nq6RdJ3HyvNz",
  "key6": "3eN1WnjV4t4yQezjicyao47nLrufm8QZb63Yqy3Wd3p9DTPKR255FV11obDYUS6HXzzCvhETRP1txmrwfsFj1Dxh",
  "key7": "2YRGEqha7ij8riJQeKBrn35j8sj8N6qL32aX68UWDfsxwmjucA5Lw59gyFGjHivzMDfKNZgmi4H7Fwf26kJEAezB",
  "key8": "56S3bG1jsdwqiMY4jtpPL8kdWBxH8GBpH9fir26hS7CaY2pFcM8qKsLdEzAGfRYzbXshzpUSHXXitgWi6n4nfDse",
  "key9": "Z6R5PMSq25XqDTEEVGgwPSxLVL7KENRYHYKRtHTTHYxbR9KuRuFmb6pE95G43WqF1X61CgPjUGCoJcrhzeFBb73",
  "key10": "5TwudJZCc3bAaHtuQeQZkAhGYxvzSxAo1opYZU152roD4WyxNPFbkiy1aQEBnwNmyzEepsCN2xjDXTbsxWpDnfhk",
  "key11": "66CTXZYzSRCF2rCrLwLYZDqf3CEEDoacKZtxaBoy5KN999rCXUPcsJQ8gmyywxGU8twF5fMtijnHHidS3BuS2FpK",
  "key12": "4eCAgFL4nMKgVhdMDg22KbjD5YQS4wcQ766GgRHU35ZT5LVPuKmaf7DPteyrn216HFdnyg57DDiwfWisp7AGUJcT",
  "key13": "3EjRmfLo8iB9Ldx3ZVwo3kPz6B4akTsaVHPSSSgQghodE8w9sxMBPTnSPczfa7L2vE1jJ54Xotfmku2WgMT8uPCD",
  "key14": "2vFJbC3CnkDQ3sRiWKoxxHfZ1hbg6GoEmeGnRuiTN5jeA9M6UEmHc216Um26sXUVfrmQkosBSwX45oRwhTDCGebq",
  "key15": "2jJi2tApdbjKAczEfdqUshezRa6nzHCRLUHnnPYfVyUh1RqK3Ec78A78bBfERZkTmVssqbV1Swxso9cqyoya3fRm",
  "key16": "4CqapBwvZXxZawEnrVns8nG3WLB6kdTea6zW2y2BBqR3pwEoUxrsdH3xKqHyVbinvrjiE7yc4cuQKZaoj2ZfoVcV",
  "key17": "472vJFfMQuAUsocG6myrp34qhp9SN53aQt7sF1x9bjVpmsEUgzauVx3PHdQpszpoEN1JbfvJ7qh6VobX2qwJgjpa",
  "key18": "2HT92pBJmFLD6DwcTc49aNyfgiDj1jVkR8bcickCw6wkN34pK3iaZ45k4KFEZFfFDviELbvWr4vQiy2guSPTGQq2",
  "key19": "3BxTvsVJT1SWGU23KDxVz6w9H8azQwu8qAwRpCiYxfE1CgZzaeGkaSRF1bJiP7JFfAb4VMBMcYWzPfDopPpNTF5k",
  "key20": "61Ag4VzxRv5HYHBdQmT4B7bYvTywZerxmtijpjnBvFhx6ZLzipJ74GVG4edJSe6yq9i2odPY7CW1mVj1Abk7hC5s",
  "key21": "34UmAz5DfUd2a8Dj1Y3NuYHVDiZN7z4nM5VwvmSWQik123NHsokfBYWVcCNoNvib3LwSNQdksombQ5Y4vcU5F7BZ",
  "key22": "4BW3sRwC1Ua36et9q3RCgpbAe5vWzsG8PuDb6d93ySQBVdwhSzEzCx3nXTQZsyZUZE7Y3Am1yX2CgjYXMoWuhBu3",
  "key23": "25emddtWdVnC97sdhaJy9iRkPamEu8Cytr33eTtEN9ciM9DMK56SdxwEVqKVD7H7e7jKdMVK8aa7GmhAhBmG4RyJ",
  "key24": "4H21e8L7kfC52Y6fYAQdyEamXTxDrvZN4XpZqU4BFp9uqgq6aBNN5t5sQMxFHgchM88RYVk7LTH1EJ3mtUjayVTZ"
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
