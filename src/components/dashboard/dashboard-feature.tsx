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
    "5JBjRxo3fZNXcbD1gHyYDjTcntAJVCLmRR2Hnd1ZbYPfrgee6aTdGD7MVMFL96Ag6pqJEGdDrHKgzTAqSKF5rD9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n2K2yamCBasorSUPadAiaK378vrfzcAS34Yn9mc5fGAM5rZmFtaPAaiSAEX9q2MnXihKnDwXcDNfq8teWMDjKFC",
  "key1": "2YzLzkYYgQXzr7aHkVwFhURsmaLN8ynsRnJpn5MgXsmZGozhid4WQfWsti6EoJkjiBVqGAA4QZYP79wR9C3EZHRY",
  "key2": "4yhYTdJewGng2fExyhCpG6enbAESJ4F5QqVVh5mtV2aKc5bUXi2dD1fYBgLD1sNDfaC696qHSc7xJk9AmoML7bKT",
  "key3": "2uAi2uNEaTGNG12NxCBeyqekUGbgydXDZnwJ1roeioCHN9B22QpoDB3nTMCEpyo8FEtanREQKveQYwPEvBeQXPW4",
  "key4": "5SDAvCGPJBRaK5rbYKNGVQUgDPP6we3PdTGyxswizx1KtyxaiBBhaHiNKPa8Kb95E3E2fvA2w4rkFHUtvt99twuR",
  "key5": "51jTEft1xa2sNRXzqhuRMyoCrt9K2nnHJ2BCYi4Eef62Gmtu3Tu7uCcm3xmopwvK1iCzs5UesVwKrTLfmCnKx7Mr",
  "key6": "5vcBmm28m7JjMJT2WrwGsCZDzRqjnxniqFUuiHbD8qGf2pY27uUzjKcv8LSRVFUKJZFai7XuRK6FRtXZcpfgpmek",
  "key7": "RrhqtpK5QEfjt334fwKTHN36Dg8adVL3aqEKitTN94A68787CETZBb5Wm2tZHt6RLx8TAjiShj9CMQQPETQjNCx",
  "key8": "5gMU36eVZXQahZLpPR1S2iBJDRWhEbCfQ4Tc5456AUeK4CA9vfUUp48BmqEasDdiHGhN1vFy8cRVPbD6cQRfQWY2",
  "key9": "2Bm37K5G7gBtYuMyvwdRg74A6a4Zo3x3xH3sQP9EZq58smicSdKpYfwHg4FH92rHxevHTe3fGD6zQWTey7HTDLue",
  "key10": "2KVAvH6FLpMg8fD2x3qmdoEKntjmdZWGKCToHWsmDBJgA7QmwhzJFAtSHTdpyKhcpLwBU8gkRK8JYgraZiZNFEj7",
  "key11": "2Y3zLLY1EL87Cemerqe2Vaja9Tiz8aiVUz5hvbppWFy2thiByQfGKrtxbyAQ1PzJp23THz9CWmhCaKFeyNC5CFH4",
  "key12": "2i44t8zHPvMUy3nho8tPMghmckmeytUheHNAhWCnpAeWEc3ChrKchNW2N6Pxyf4ujcAiY9jG77rgVNZxmhDk8sC9",
  "key13": "5cuqLBZgqonXyjhmmVt9VpZfGEKjRdri5BC6vE5Q9Z9f255rc2D2JRnsfpKvJ66kQqt7K245vPJpX5bLjuZu2Dxi",
  "key14": "26H2Rca4GGf8Yx2bA11u7b7eKeCMC8Nv1sDYpJ8vVwBSfFtTE1CnrbytAvpKeQkiXBV2nVDSGaJW5AzAQpQqnBU3",
  "key15": "6467Rzh4gGmfq7sjcuEAAQRxTXKWJ31KnsKExM1TBV4r5hUvGApfcwTQ6NYs53WHDs4ANeABGiN2ezpSMWgxC8zm",
  "key16": "4uRNp7r2JZmg7omAZLBKkrDx2uWTcMdFvTtFR3UxSsuwBNocHvydxUB2jfH8GdCe6bPwQA1Ku4P5CTJpxKrmPYiE",
  "key17": "u6jkg8EEPLnoP76oMpxHEbyXLQirCAva5reG4k35HS34b5tG8DjUiB8a5537mZ93ns4kopqtTQkuxaZcDMYB8XL",
  "key18": "61AM8yh9KPSpsXsjzjxLRs76ab1TbSNo9sAgTKhTk9VHpqmJAngNJCL75ecwd13bWzKpyPQSYPV8qFhr4M2wWQQK",
  "key19": "4oJgDny2uJWgnCJJZuQDet1gZGdXQBgcr5Tm3WrQZYTddfCaHds7gxMvnLniY4dFPjYepu5hfVDUYrvaw4GNfsgG",
  "key20": "5GeLG7PFbM9mSWidUX7Y38eqcvhvjiwtvFcHc97mGGhrreF1pJVcwmxibrDLeEDTJKKVu5ZiEDGDnk7JwkQuzFo9",
  "key21": "5bgvMFbCBoBsbcy2SViYQmakiKLkyxqvJZ1JGE4zJNWWWTrXmyiQXvkejcZp8edP4xb44jxxFby33HUJv5VC5KmL",
  "key22": "3cRrChTLbHVdbobNRvw5HQBEag577qVqKN6gAagfCXxxjf2AJjGTseG1KgqEDLd94ZLn2qV4nQSTGV94C47fz6sX",
  "key23": "44Y66SJ5HvSnV6T3ruCDGxMYfnTZp9URYvVjMJvQkd2pPbXrAGF2JnwikoAUJt5trUAD8ZFKmSG4fJiBErs1YFsB",
  "key24": "2cmsCMmkgTq6EbgZyswBzkesp95iFEC5EmFWPCSwvgSDfRMAU7dsnaHUiDrRrR7pofggcfGAw2Q7DNEwoQrXLSDu",
  "key25": "4w6v4EzKajeAvW3k87L3uUsqrCJgQ6DUL98mH7JgRgs8dsSuotCrFnHvRXPKujtUrt8vWyocw2HDzJhYvVzuP6pF",
  "key26": "45HmCWmPxeJ5omDaMZMxVsD3ixyCPJWszgW8YiPU4aVDeQebiaCm39VvQ3YPci8W9CjVJNkkmxwVMaptLQTebyA6",
  "key27": "5k4s9FbFzegva2HxkoYATkmtQ7JKArJtpTPPYzkRnmfWL9KwF118TWpaGo2BkQ7Pdm9WKVHfArdE8ffEpsnZWTYE",
  "key28": "5VDXoV52wVnnnWvThb7RMsF3dEGYhZ1XJxpRMJzmDkH2EhhKyF2TaQ1cYYEJ8WpTL2pfSvYRKEuHJGuPkxBBfxTt",
  "key29": "51i1q34dEnHt3Ztj6Nfow9jkKYxPwxTMhFzqVirX4rebjCtxkPQnnnC8eq8KCneJHYAwsoDfMxthxjU5xvK4fp82",
  "key30": "33jHxUhbXmwc7hfKjzPeHy7KKbEEAsjv5hEkHGkwt66WFzks5bqMSnqSQuennsfAjK5c1DroMq8cYuQNWCwbizCk",
  "key31": "DkLzGBVL16T1bo5CwjxdCUTh62GAMWZ2QnbUN9b3fXkzWYjofDFdpzUyuvVGKFvoXCjUENMr7KnzHB7QBN4i29g",
  "key32": "5Kjq8zfiyUkX7tHHk4djhWTcV7yeSGPbgYZDDFxK6Hj98rpmY8gAWagCvE9jKYwV4Dzo16SKHJ9iPu5gaTkCvQL",
  "key33": "5nSP6BDH3rmbK1sYSmPn3vrqsE4E2t6gCncwtt8RA8g2gpaLPEcGEKkrwZMWT6tqHYpL1JKq9GM2yGL8G7LawV9Y"
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
