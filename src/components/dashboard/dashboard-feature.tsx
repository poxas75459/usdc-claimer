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
    "5wcr6WaQkBQ2GVyPZSV5r8NamSvvPnHvSut33sFDQmJ73dCKYCib6GiwbG2xh6Pc4733zaA5dbMLuxYkNrZ8VX2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2MJdurxe22nXtwnerfoCcZcGD2NdEp5rUGXa75UVuo1ijCeNTjjHKT2KMgpmHukvpbhHgny7zhC2XBZgZ3TLJp",
  "key1": "39xF1dfKVWnBczjPXs9MnwvqntZxyR6fmDNSf268AWnKrZZuzcubLmFGUo3cPbE82MMYTbZJJxEEtKV87T3wQTL7",
  "key2": "5Z5ncrtC18UU7PiHfk2LnS9zWCRod7eMbrhm4QSjYPto38qaQkyaiSsJF5rJU5z86CeVjNXzj96AtiNX32ZdsdN",
  "key3": "3Y99uXEoLt61PuSnGcqM6urFEjQNKcaPbCGzNrmt16WJajMajeBJT3EAp88jfAvqiLmEkqqzNTPC4vm3HV9vpqfr",
  "key4": "3gmNJ5UjJ8dfT1K3gpU4KWY7MZVvoV7yBXrbVJcoKSvtngChy7PQ88uSLGoALmGDspxdmpDDL7hmso4gobbwxK4J",
  "key5": "5WtzmveAm5wkX4GoBfcWxxX2h12GRo36kAVPP56kEdC8NV97kBCLN5CqsgMqnno4PqMvAeeXNdvfssp1QNsMTaxH",
  "key6": "65BZTmMta4ufd4oo4TzgRDuJfvzZmixvJsR6PooUtVhEtfcmXCtHq2KBHw1iV5aFg9kKb2EqYUb9azALjCdDR9Ln",
  "key7": "mamMUuoKjxtG2HnfJ8MsTFApFKacQgn5fBosn7p3yH15moDTB485erpje8gxxrejWUfDgwqLFehyBaGdnRcpHad",
  "key8": "pt7KM5q4CzfXaUHomKroZKGz5caKYQieYBkfbmWhuyxzxjMY12X8vDH4sbfRBFP8FmD4z5XcouYnKDsKgK6i1qo",
  "key9": "38Ny2Ypr35Q8nUfMgfLnCWjs2f7f7LeoteSPJ7qGf7azQsvWb1D3pBKCgBMxJBnxJtzKEUE1pvPdTVTx3Mq1Ztx3",
  "key10": "BafMDpJQjdqYfxmrLvqKJsxnaoCny8XPPvr2CFBDVjACZhspQaGL5Vt7R93GfH37uvABMDvYU5Pt2gG4vqh1z3m",
  "key11": "4Nw3emBhnJDQenGD59zS7jHm1f1xmjGBt6qEgFsot6WtAzway3PSYeA7YYC6ji27rpX73vLLVqZPE3stgwWSSzCE",
  "key12": "3tEAqcgUHdrP1Ad34rEQFTts2AWc4wUwxgnFPPcAMbVLRkSAkkiHCdZLRosSPmNJt8yfrrGJyvkeFSQmNqVjo24s",
  "key13": "qh4EiRsx8oHnpqvNNHosvh2CAQpY5nx6Bnh227LbABeoaFtstwJj2w1KdFntK9xR17FMdRMLxcP335KWhnBBBsC",
  "key14": "q7HX4VxL6YT5GSMasnGmWiyptxtvvCCwPnUWKDVpfh2Lp9Vjwb9d3kUqLbcc2XqYubwqh1n7r1jJZ1REmWmgGdU",
  "key15": "2p1VYFUjYovY2iqfTccQcgyNCubYHWwFsi8Rybcxy44KKoNq9gr75T7AfbuHPpNADqgEM5tsP5BqAWTeQDM3RN41",
  "key16": "4gwy7hoQCjkwi94dhNZND5Ck8W5RiA8pa31eD4mxEx5RKJgVcrzTFm4HbtnsWdCSekpThhjgw7oXV2z1CaoxMSV4",
  "key17": "5QKji67hrtGYBSH4XT6eyWUd6sgWnZoBd3hg5Wf3D52Yor61rJiz1KKjVxCU76NAfeA23ErXAcSDRGTASytSj8bZ",
  "key18": "2pRzmJTH68XpuvyGetLB7qoKCC6wJ7eyBi8Wo4xLxMVbkadXW1S5HR6fXRCvhshdYMYEe7BJPp9u2crL7cGF6BUu",
  "key19": "znU1Hh5pFzV7iae7nHD8q3MBXkMqUKF82tTNMKvgboVGMsNKLxp2DQpTXoeyiNSUSGBcQLNjoHxNwco6y3h3vw8",
  "key20": "2bt4PgoCxkUtAcVTumwyCUFJGwX14KWRevUx4cs2Zr6m8TxK1cGmVj7wJn9vn5frhacpXiKXqLWv3chmZi1t4YvW",
  "key21": "59Ey4i7nQoVrXf14nC9RKRauZtMWE6E6cUsx4sfmgp7sN6FdMAjdh3EgCqnvrHSp8JTJmiPhzg9dVnXTpmF22N2R",
  "key22": "5ke2neFekiVWmz3W7CByupt5UeadW9ESJHNHMNznc3efWtiYiYM3B7Ms5ctCK5hbcfbTBQ7qvvwjJVYZNwdVmSS8",
  "key23": "3aEYbFzq4XwusPDPG1zyAiFWJgV7ZgS2KfdQHfA13Vpo3MhLJjm6EjUWizQUgHyjQgoguqyarv3jpwW4AH9jPspx",
  "key24": "32pLj3E3Cy7iaMQqKUSxJbUE4DLBevcRxpGnsAbgFhh8zXAcyF86B9Hzrg3B1pQgSay2c1GwMHXX9cysJZsvRpYh",
  "key25": "5ZfKectRuD8TRZDacEftMv9n3uBRCFEELVn6C9peuKXEd3yQjCr5tEyRQjrctKd4CZAkWJF6j4pQoXk1NdR48B4N",
  "key26": "41PHtX15KsuxS77CnTsYMqC5i9wTEUEZiwGGEFP6kCj6icygSFiSSp2NiDLscu7jFU9LMM8WPbwogiXPJ26Ex9BQ",
  "key27": "5UByuEH5nnuTSBZMus9j8FtVhcmLLn5vZQ3geyd95VAhvJRoJRh6sG7AVHdz3sXnVVAzxi29Yxo7YMuDf4vPVh97",
  "key28": "ni93rEjEKkHubSTHxttrAUAjUo4L9N1s5rhEa8KKT2Ds5TNhZhdmeMHuC3JKLFw1izHvf9t5TVkgekM1SHN56uB"
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
