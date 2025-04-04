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
    "4XUhDXdQJ38gWUt9VVkFxdkS7H2qHd3YGPBYcrCszhumYJsBHG682fZjECxTdg8JAwSjScuK9vc2ZHgKHsJ56Vmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p4bAJhJtRYVkjGDnjhy8WLhmDXY1em4MvBazycu9cJBz7gza2NfyiFF2RgCoi9ayiPUfDdysefZUPrUwXRRY24G",
  "key1": "q1i98Fj6B8s78XTQkbo4D7aXHaKy3oAZtS8RoFex4zxthkJ2ubSWiQiokqC2s6VMfGk1ty4xEA5LWQhNSfNzwmH",
  "key2": "2ELRtGFRCD5UJbMLAzrMhPovmtA2YuTB3wLF31gbi3N9Da3XgZUCeFU4XfNfGFTDvwiE8ffie4wjSzgS47j9ovun",
  "key3": "5QFNysQ3JDVdTU8Bk2PKDJP4aRZyBbpsCNtF3FeD3nujREBuL5JkoBpVarCKsbpdcXz3SNPNeSmfLf2bwX4CDHu9",
  "key4": "4StXCwbpkfC3FkxQVdvp7nKoJiNCsewmjLnxhdtaB8E9FhsE73Myuh1jUnXMe1HwgyCJ977c1M14qaBwVoQa692y",
  "key5": "5FQrMeaTuu29q5n82N1UZkABEu73YJJ2bXdDqx2bD9NfgwiwV2rHZx2wSyXdgkXhG8Q57YWr8sZqJVcpKzyNGTpd",
  "key6": "5mGnxcfCUKYRPaw2uWTFQvTxp9k15nRbmnoVt8ULy4fgNzqGYETUERpU1E18JQRAkRyZjxomGJsFY1cSFD4NKxaw",
  "key7": "5MWqSJjtX7WWcMCZcffsc2gVYVAzD6YJ55Z4N7YMRYYuggpGFr1azB7HVYhiUAonCsytPw54RUZeCQyeQkZXftxh",
  "key8": "HT6sZFtvfzQWvV2mmcGQ8abwLoqt5ou71RivuuvUCz1kSTLNLzfXpdxcoR97u7t3qk5qC4pMxmbdgwYCorBtDwT",
  "key9": "2qyoLN6JVJJogLLULs52hfxEh7BZuuHSvN6z4sFHFTuc4XN1v4dxemMcVz9xYfTVfoxumh4ieLoFAgPXJtK142Kr",
  "key10": "4vfBiWeYdka887GGfxntZ1JBkexjPxFJW4upZFv981t5a57iz9KHBr2uQ7grSu4KGBXkwzERXAWnKdwzg1RiPNUi",
  "key11": "3JwUaXEDunFnsPjbTzdFy4UicWNhPuWiPvezcKNRnjLNpBHKWVpiHxdMQJvcsMUatte3S1CKcxuLLCohJCq9kTQo",
  "key12": "2VYeN46juVLWKkjXnZg8bG7Tve4ezAJ24cPYdXMjyQ2CyjueYUMAjcJCBPfdcUqUQXRNLV13eytgH3XJ2AbS316t",
  "key13": "32yoqf5s2ArQszYsjQpTNkbKDQjcCprbsggtJ6qapcHKhjBGqag2g2Ecm6Kvywre5c4263WCtuThS8tiLLAk35MF",
  "key14": "3AimC5whCHMqorWsZYhoUqoUzj3vJga2EWMohySXTA6nm4mjEh88heH6se2Zy9udHXmaapPnVNUAkQj1EZyy882R",
  "key15": "Uz1aFJ9vS6waNMc1ZJsYH36zHW3kmMz1SDY7CuWPf2WXD1jnUKc8hCd1gCyismstBYAPWva6wdRdUYvshr2mUkr",
  "key16": "63ctUb9T5TAMPnfjPPb1AUe485PaddKfZhi8P79mb1eqtwPQBjpgMpenHD9uTcNcDdWmX5G1m9gXTFPBWk7ZTCM4",
  "key17": "5uK7GdQCfW2q69Lwpo4ZnvLFu64eiHz8Dvg2VuxAfdK5PhVbDciJsEkGS89JGw6fR7DgFeBHzjbjuAnjTz3ExzUR",
  "key18": "3M9TK2FVusygevJRxBp3N4wf4kdH1YRqrbQLtM7gdUyAaubtwfEQprMtNTekLqQcmDraiGYQuHcreWTHtqJmch4e",
  "key19": "rsL13oZvq5nKBg5YDs1UAEh9yX4LB1TG6yTYQQbS1ysdDd3Ks76Cv8YxdSsvnbtfF2ihe8LnzHNrggAkYizKctw",
  "key20": "3rXPaRptxw9afi2jZRP3mv4f18XNHQyUwUvhVahvyDayWEYz7Y9kSpvy6WyG2cU1L7vLMnNtYY6FrfKE6tY4qheH",
  "key21": "3GrnxLhHABEse5fiJwAemW5Cb7iZBayn2mCq1QhAAeDKYD5kYgSbTm5vzDTT5ZUoWirNViZ4Y4Z9GPSy7BDn59wj",
  "key22": "5B8d1aAKdBKXHa7vN8YNGsYhncAY9btCHsQkbdESZi5LizipUTA8R6EEbrX6CmKBzspn2m4t1pqQZS4Y3tETdbGe",
  "key23": "2HzDt3A2cQ5VEc7m9iXvqqT7wUaraKbwmia3ndzPRbpHeyWfjiFiCi1HCub64X2Exqsa25qRTeLfMi1u94NjqM15",
  "key24": "4fnaTMufZYrAwF1sWUop6cnXoompCeJDEaK2X1ijaecAxs2EfB4djduQZJA8RTNXSLNjxn6ZEMyDp2oEeUAyqfda",
  "key25": "VhfCCjfnbiLacy5vwwaQEZTf8RqLpzTLBSY3V86QqC7ScPMv4Wf9AgxSg2aps5PKk3gzm875GCAMeSjRqJH9Wyg",
  "key26": "3WLvmhey2K53HfJZa2NXZLiTFPsQbrGSuWqKq5PbvcJg3Zeh4JNHeMbKsM4Kcq4nYy7LZmsqyQXCvuQUaHJFVpnB",
  "key27": "5MSJF7tmH4FLScL93zPfSSXGuBTyRgNfpV9yDnTuUfgnbxe9F7v4WJhmKvCCfCAxTfx7c2tQDTeSCzSYxPMGmKE",
  "key28": "3QNtoeFiQSZBJi6G8X9Wnq8KXjZBZKpa1PNZUevKErLNaqKv7QYit3WNLSZYdNaS7zqQWMmpZbR6s6tmC6tz7RQ4",
  "key29": "EzRe3Nd43fja7JQAcWFgnUbuMvWQfDdt8UXYrT5ACZt7Dtbg3iSFBWA71cqB3DpMBLDJR1k94JQ66rFAvWLZykf",
  "key30": "5mPPRmKTQRD7qhaV2zzeNdnXW8cVtojiw6FtjdMNw1Gxum19ssGQKUjDVbRnvLvWsPauPA81jsjeLPdxXcfoYN9T",
  "key31": "5VnQ2tLvVw8SNAabDZmcz3Rj4mWvk7bwVz9fHYC1dAgJ86o8nttZuH8cgGNELVpST5LsSkgRe6k73iybsoR6gZc4",
  "key32": "4JC1VS6tjB8k56X5TVrSyTRi4nWzTBHV8FCb8wc5to4eEN3maTvoviPDDPjZmU4HBp1k7fRSoi3b8H386Yh5nMDX",
  "key33": "f4kDhcVHrjji1tMnfdTWdhAfpFD6EPB4hKutPbiFCBDeG3xjbqXahuhnjEoAjZdB6dJsgQpg4fPKrBeY1ofNhny",
  "key34": "5UciBDVY39JPdq3P3tLyVqGrWVxWX9MzhKcwefzo666Pdb69AHHeaowqGBxSL8ChGf1ypByXGberkeoGzQw1PxNG",
  "key35": "sqYrt8XC4eUS7uCJX8i87PNWNoHR2ayDBFaeueXcez1cjrYo1TaJiM4xwBLxvHm4RV7AsGvJ2EQk68CAdXV7dgQ"
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
