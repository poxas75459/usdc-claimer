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
    "2v1PYP19jNfiymQbsmCPbkMQ5jK3V2MAQbLHvYKS7fKw4rfp33bbVkhCbEbADYRdpkREtvj2HtbgsNAyvQPLvzuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kahREjziQmibV6ZrPWGxcB2hKhhwhJtLEMbpANNLiFwo7Fw9JdVFTivcU9X5h5HnWGxxpk3LFbPTFTavxzwKm1h",
  "key1": "UinUm7jWMdeTq26y6ePaVFfWV26J5PJiermHrb5W8ihpn5SLeQiDuKUS7DJgdYEM8gZa1YgbvsTiT96VeeuQY3G",
  "key2": "2BEbRvEACGUpYjTttuwqHUz4G4sMbJLMEjH9kxAF7WFk7T7thBNhsa847pbfd3jofZrjaJtN2JtyanEjxz6Qn3ox",
  "key3": "46CcGvk7MmjkbxVctmzu6GZExiRfdkyqzJUVuMe23YweNLyNbrKHn13PpghtxvewNVseDbNMFEUnxpSMqbYTTBGG",
  "key4": "3YNkWbRdjsut4XshRVJLVXmAskkKtcvrC2V3bqxsxdAuqVxVMSFCE8fLomnC5LJCnvpZkUXoF6a5HWGw4dJUEpsx",
  "key5": "2gXJd4SzHzkpsvUQm6JDzVqLVVNhUpwHKnFqnAG4Gx9E717Jfqq8CbipM1n3c2j252edDkKCej6qGy4ViCi5z5mb",
  "key6": "5XN6aaoSEVYrZjyTrJ4nydSdxFG5i28sVrpZSMr8j8j7ix66h2hfFfewG5eT4jckgxSaEBHSf2Ceaj8ne96zhD4W",
  "key7": "SuiWYdDcguyzmFSF4ceQu39hyAd4j4caSUW5jfdc7Wjv2MvsiPrRe1muxniHY9BJef9hFDXwNEvQ73DZru4k9vB",
  "key8": "3W6TCc1HBih5W43U9e81KnCGCyagS5jB4EokfP863K6xnVVpSbioN8TpCs7TeMMAoS9AHjt3fnpHNRDAhAgy57KJ",
  "key9": "3r6MzozdQh9Kgfhb9BTbTT62csughqzmihgFhjyUQQcCpjbEjpC5uRxoAqGCNsX6imsWh4oc6fYzBTX32yVZh8V",
  "key10": "3qdQDFgYPAp68GgvC1yn5Y83NSNQC3TWT1Jz8V8RCcCNrBayc8Hpp7t7hpwurW5XCUNnJNjDBfsZBv6FjPVKERr6",
  "key11": "5FU8g7id7SVmCW8GymLqEnwKbxHHxxyu7n1c9o7wKC6h223Vxaow2NpY8pEozeTbv3Z77rLtrxAj9ifqABr2MCzn",
  "key12": "3DvTmEm56xbrcZtDEk47cPqPvN2W9gcyErpKR3wXjAqY14qzjyACfDzCrX2nBUXMDb4wCKMkSfnHxESKYYn19T95",
  "key13": "44bkrDE77JpSZJo5Z5jWpPvYsCEE92NM12Ph6KsfsGmHcthutoUcHxn3AHbchKihX2D2oojzCkuw1AVKsg1aJVH1",
  "key14": "3svzDKLZSxsS9KvxUMvG1Aj3qSrtZf25K62VT9FmUvRAGgHPmp2oshNVygSrS87B1TRtFE1vGkPVPUJzbaE4EpPZ",
  "key15": "2RDpRix5jKXDNjiTD5R7MUWF9oXjYSwS75ktTy9pWcWb1uhenDRRVPYbiko5A2weaoSt8v4SxvERCngzwrmW3M3r",
  "key16": "3TMnDwY1uWqXYskX5MgiVYi7cLFMMmZEMRCFCWj43V4h9NkNvo2rnk3wnKzFA68eSGstcWHxjr5oC8udmaBHHFi6",
  "key17": "4vp9rEtvTC5r63QoPm1HsX8uNmEkr4zSTJweXgk3SrWwXzqgXmkVFBE4jT1SmoW7QDnquFH8sAWjzhsmqb6BrpGd",
  "key18": "4cUzFTyisnAxtP34dptap8yAuXY55dKHjUGDPS9V629ANPpNhRv1kidppn8DKVzsgSao893unxVhYLq4YftRDTcX",
  "key19": "aTDniwgfCvbg6QDAmDM5srWeqFYWgGzXeM4SH7oJD7esEfXNxpPTFt3yZXvftmd6zVjF5cmEomHNfJ6X6cBRfd7",
  "key20": "4k5s8UEkqFkJydNR5ymw1XSwMqGwbUMcJrq3x1sLQNRnwWDPmzFMcq71PdV4Tbhm9GoBdqF4dFTUabiwEirvHYMm",
  "key21": "4EhfPvbxrSR6uvirBsAg3c8GwvEviniDQ6fkyFix2XAkwHYMAVCZ5kj8nYqaW6no6rJ9QTXJ1rpaHkjGR7e8yLG7",
  "key22": "5DSj8uXR8iuL5F84o483ZUyg45xyKJGbpjhdE6atNobgAJnjrwP6GSpQpHJNej3tiy2rnFCNxpPThs9DaWJJCWnF",
  "key23": "2GywsuNv3Tc9PSeZC9SqWSqKpXNEud7dewkmDsHeNaLp9ok8HmGkRDkHrjDUK2xQu8enCjhXfSmGUm89VfEp1mJV",
  "key24": "3ALtv6YLk21RmtZJetmwqvhb9b1gkRdTYAeDRkmhHsCfoXhgoy7mQkC7TXveqFkxV3HRcgLqzZyStZZHBWQ615qX",
  "key25": "5CPQLTLbWWUYpZHny8yBTzLAQuvNHrkLwqk5oaVvvwhu8BmtaUypM5b4J36UDmfFtEbMrSDJ3WrHVv2XA3F4hF4G",
  "key26": "3CT7zR5fSBo9ogKY4eTsYremkBc1RSNXKdbu1mmgb23V4JoXYPQQQEBcQxxZKcSCSY3ppn7p7xd9arXXfL3uymMj",
  "key27": "8ch4LDLaJoc4mXNafeXFEu1djwCREpPi5G6rtEV2SYMX2PteujagRYhcJM9CS67yqeXoQqTxxw3bnN6irzEw14F",
  "key28": "2Q5S2DSxZyqRWamqYko8fkTfxDuwHnbAbzLbYjzPLFFgiLvBWGPoLgur1cRNvXi6gonVXzfYv1PB7p8BgctdBwbs",
  "key29": "42m9WhSoYHcxZi11fA2sUQdjp6jpwBJjpELk3fCzxy4HPdBcb7FcJdS6Hoeh1B5HgxbWojSiDG5Kid1sGVtQJHij",
  "key30": "3BNc1zP5stQrSRuBYkWiom34Ps6y3LKEGQvQWyYhjZASLTqrdLA6jTyPjpVtUE4k2Lv4Cm5sEGTnuhh6MDk1PxT4",
  "key31": "gtrhb9KRLHejbFKfKXeZktvS8pr5sLTUTMer1G2g7iYGKAHoRgoRKo3CRQFoW6csHWsZVfVTu17sDfw8znowx59",
  "key32": "5ztp49vYAWwG5Pv3nNuEyQDMXYcMkrN1fkRR2rhrRn1eWLQQ3agGh7dMvjRyTvDa6wsoM1S7zMLG3c6YaG7R34rV",
  "key33": "5UHGjMrE8ffRcnQahomBj9hjq6vXw1daNPzRdyphuTQMnonDE29SW4pEhLuG67YP2epVBHiSUgwqHxR8im7R6LKM"
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
