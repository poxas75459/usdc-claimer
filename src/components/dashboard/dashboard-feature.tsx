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
    "4L8DHAiYNHabVzGgEvs5mG2UsJBsGsU4oPpL4WhNUDm68HC2jZ9rFZHzFD9S6jRTBgtkpxy7hUotcFJjMNEmYvnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AUxTwSGL3ew7wh9yEAhJRkMwmn8ghUPctJxPx4foeQ6FkoYFTg6nusniWsYNPBHC4gUFK3Haxm2ovii2pbQUN4P",
  "key1": "4mvLa51JdMwpkLb2tZhfYhqVxVZmBuQxvH5DFymZWBKzHSHLZ2U6E16ZYyy8CvGkLHFV4TpmBNzJ2uZ6DAdUTR8h",
  "key2": "4iK8ixepAaSAFLx4XE9AWSXPY8SEEfVnviLK2i92SSuc3zBV5NWp4uGEiyytmXdpJZD8FrJ2rKVRqmWMMB2LQ4fy",
  "key3": "49fY8T4vnedGnt4xD3NrtPXjTnzYTm3B5tvaN3k1yCvMht6k1NzCQxrpYbtg3dLE4X88iV2CFE2kNNPV99u4YTWT",
  "key4": "21QCoZrYbV8kg3EAXUZ59MYUwNLtkAbPvnm8j5smB6C4JZF5bsA52kPQVgEAoRmMHTedzca2c3J5A1yFo1LfXifZ",
  "key5": "3za3W6GeLkPruCq5MRiAZ95J1B3jx1q9wNhuwQoFDCmmoZbkxtoxPHHSVpAoPDyS4pSkTYcfo7hP3nFsYVyVAmtC",
  "key6": "48ggSzqA9CXNFwCed6oBEZxNW2RDWUTSnZNH76gBhV4bQxbQjWFLXBn3nXtWKHukcceD1w2bRHg5WBv4fp55neRV",
  "key7": "51tLdkiiACXisbWKD89wAagqrRvg7wYZPX7nPsKckn43d33gV4SJcUp9r4ucEzchaEkBcKbybwyST5CspC81skMw",
  "key8": "4m3kwCFq7PRWPRPvHbAPcwmfYsQ6KcPDE1AaRzuVdvpPZaA9CJkTQtiWV8FWDmDbW1u2k9ZhCqX6YRPtzmXKsLeC",
  "key9": "42oFfuQN3w52vnsCPbTc4p9tF4vWTqarRnBYbYophmS8KDhGCNFmJmBFSc5uDSXfy3Y194gu2LxfYmhGFcW4xVPa",
  "key10": "jiATXPuBehHM5CoEpAhA13o4kqxNRTN5yhQ1TiMmTiB2ooCNSynGXJyTsHU4NPV1yYPTwyfLL3xFui9mx6EoJpW",
  "key11": "4aNEq6yC6poB1bJ8eJ1WGx9eKP1o4vc7pQBwX29DvagzFBG11UHtiZ4dP4H7gzFwuXMyiYVHuqoosRqxUbffyYPp",
  "key12": "5PT4LpvDf9sVAjtAD4SGuh7WWZwBDWo1dF8och9yrRuEkPvPrEsNQmPtpVEUgK3szrJuEGWho5SHxR2jLSBGPH8a",
  "key13": "5yRXg5ZSkfKCoyXsXK4tgtMdQGQRrYmAnRC3W5zeaFSvt22gThszTrXjok2dKr5oDfmpu8XUDSWa5WeAEypZUNNY",
  "key14": "n69fggCKCBi1PyuimGecjjfu7dgHsbXLifD64EA8PB3mnif1Jpt7Gq9g2XfE4Mmse8ourHihC6e1irRdRFdHN7H",
  "key15": "281fKaujHurdwBh2LZzezFDeZaNxwp2xVMtgfkUTHAnuEX2ejKr5VyaKoZsauQWUPJgFfjLaXH7cBQ6W9AAQFEwN",
  "key16": "y15oz6qcxejGRzdrPVENEKr5Tysz84yQEZSbi6sJcXEwxjGHAdhZkbFGjLA8oZTiXLMtQkFh2Q3kMaZfx1pPChn",
  "key17": "5q4sqxd2FhJAqe1fSmBVhBVWzACoAjMAjc5BB8t4VfY9fUuJdAWfjX2MnXiZYcnwNThQLgc5T8VUKxGjrt6jP8W9",
  "key18": "4jokgebMA24wAtt5c2qM3LePdMmNwvSVes5LJaHPqfZYhX7ThiZX1bxH7AGyFmgXMWZysX1D9S9B8XNNWL9Jq5Bx",
  "key19": "3mJJHvAfqNg2SQv5GqnXm45VV59oUBbt9RFbAQiFqeT53YUJrCfcLMPd5i8V7LYkaxoxn7EtgaGKx6kSc41MQf7M",
  "key20": "2GyZD4iaCMdEP9LUx7Hqo1Tuh1Dm3YnCHdopE6oekWGdC8qGCRnRd1KKA2m5S9UKsC6jASD36xoKUyyTaK2nyFnM",
  "key21": "41ANbahjoz5rFeHbE7xpxrkDATMNoMudFsH6rUJD8w62m8idxzdAMbvWeXs459DwTXH75Gch7qAYyR4Z22ituAf7",
  "key22": "4Yj8MVRKafoi56XnPJhZodWTrpYnutDAYGuzeyLFFNgu9tncWt8cLNHWZtHg6bAMiic9cBWWSrTzvyKq8gEv9KCx",
  "key23": "3uvJgnxG3r7i5KxRSGjCvT6cfBHDsqwrCru831QYfQfCiA25nvDNYPR9CBxrSCDV5ZW2JYKgP9sP6BDSN1eCwmhF",
  "key24": "2QeM5imzVR5Kqwdydmpebw2x57mupw9UCgds3oz3G9HGQqeycLqfbgpSLB5kDSqYP7oJJWfPdfMGo8L5tdpSoQGv",
  "key25": "4knV1EnjGcFFGNYcmqY1WMBLpZacsX36JYmnywtwTsPNGXTiB624tWVFuPw9tqUNrLM57Zd7dHrhuFVF1tJkxMCX",
  "key26": "5fpZcnpmpYeMwSaL4LDP6yrJzDQammMDddqkcgs77Un5k2bzpRZPoC21NkgbBTvYJSt9oAMmgXTkts6wPnTV7fYu",
  "key27": "2rcco51J85LQEM1ANVpgYY3pLDKjQxJspJCKUwvEyL1Hf5JY9fGn7R4e8UV1z2mguLXv7spb7kFi6hdw4K9cifP8",
  "key28": "2QRTBeU3aHSvqgHPuxsw47gTCSH7uAj72SsxpM4MEXBDALVshkwEzvDtWFs4AHfmzuRpfBa3XoVYcEqinzbG4o2Z",
  "key29": "5JhzUF4cXi2KiMXRET6SNtRkNPEgdbGc7gj5Zxw9YnPuPPiKdsqWAJ1TMJo4X1d7rq315F5ahAUYXQEtZqKEASP3",
  "key30": "4bdVRJJHP18Mpz7R1jYJbmnxAcnN9Q6VqaZoqbMhmYn1WUvpvxBPbQeYhmx3F9ZnhxaDjhaWg7hD9gS4wmfrm3zp",
  "key31": "Dshgjtfyokwiqg5uCgeR2KvLkqjWmrVjP2zzp1kiriSXrKUyyVdQL8dFQ8rA6wBkrgAKvEY7sXzG1h7dhdEtFQe",
  "key32": "ZQaCZJ1dJ2J2ZgtZsnCizqr6Qv4wraCrqqAdTgunHFrwAZ4emR1w1FKtBB7x1fdFXALHJsybei8SUt4ENTHcZwL",
  "key33": "3dNZ5bxAxncBKoA8XpuWjs7eNd27yWEoXsYvG5yvKFkLZSNCSJSZbFktEvwrdjCGDG1nxYYMVJ8wLUhpDweDG7A5",
  "key34": "43vWtQar5ZxPeGe6HhjkHuJhSQRKKTofDFKNwPUSirBqsaHC2TnenTEPc6va1XnzxN98KCepxgAagjPixKDisa4P",
  "key35": "5QabdJ6VESiqK3WMLEtR98jgbDCVG1JLdYTWaXoNEG6KduHuo2nGzWc7cE8L9QcxGdDgK1H5gwtyssjkjzhx5qCN",
  "key36": "5NB2hshDBEp1g2uQzdydZpBm1CB4bcuWk9UF8nBs9jsizWJ1sJv3qnzHV6oRWMP5ph4EQC8gW1sHhpx6am6EbQA1",
  "key37": "4fVL6R3m57WpwyD5L6sVUsVsWQbfj66mYp1Pcwtuyt4jc2kFKHofJhT49RmuvAw9or6x6bYqP3km4KgNpbLfnamH"
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
