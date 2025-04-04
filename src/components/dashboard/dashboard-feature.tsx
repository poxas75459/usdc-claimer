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
    "9udxxD9osaJafPYdoVi4XdortQjaWN29yjxBYQetDqHBPfCRmotVYJrTGKPhPDcThFNnYCy6yKGv8hRP2eZoWaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ifrEC5iEqViqTdwe55PxH9YGaG9D7oYQgNgAtGJW1YqXja4DTFu2R3bKh7YZfJpb5rJc46FjQz1f189FzNFNJBh",
  "key1": "28FafJ5pbNqq7Tf48B3nxxX7u62gKerS7JAkpLERY2m3mEvftG9aBvtSMMDTES7AZSAX6NDmAoYdmWVddKYQbttf",
  "key2": "3yCN9k9xC2nJbxx52tB1KGD1wZtroi9CcWBWZ9LBrYSkvtwHw6Nv61GiPM8CJJCpskXPMBaq1f1iocGnkvWytiH2",
  "key3": "5HtTFffXLmAm5hxFrDdZqX4uzuZ72U39vfM2XsXgcep1LWbqbc5Qs8eixkunF42oEkJWPCs1zBQ4kLCu1bY2eamw",
  "key4": "64722iVgLmm7dFEdARYJb6D79LNTrKNLuwFXckCSQEGsmXJ2bd6MhNhSGZC3THoyDm8cY7WRcJSNQ2aTvhNWndBN",
  "key5": "42FUzGUmbfAVRXQKHrgKBVBkLeE4wxGMcH9cs32RNsFcF1ogibSHCR2UVAh4WQTsPHksYvsTBXa6d1MkGUNdMrQN",
  "key6": "43ncoy4DRyNDCoGkdRaQBex8tPERCJxqc6RKErUw9sWcZWa5vyPEMmwjMy1byK9KRDwfTGCVVgKpk5LT59PQjJ2X",
  "key7": "5PxKuY2upPtfdkCxSR1dPzD5YZQ7YUGCD2b895uJFWLJNn5TAJH3eMbPR7usjL6RyZMnvBvu1QAp9fd1d1X38dyR",
  "key8": "5DgfYpVuQfSzX6mTT5qHTHtYdKzuZnxXFrbbaDGvE6jYRzUymeUnFaPepykJF7Kc4wXPEZ2LJpFgTEDtV8E2EMzY",
  "key9": "543k87V83YocuMGDkd3tGP59MwNQm5r1jKvbeoYG6n5ZLCLaNKsD28NR5SbTaGjGZQfVj2Esb4dLus9sSxg2VVim",
  "key10": "yaKLS5n5YF8RypzU9ZSvwZuaxDy6j2vxjjw7ZthXrfjhhiVvJTmLfctNNazD2VsaciRdwYCiR86tT8jtvfb9MqM",
  "key11": "2ap5BBRocyYgNKTZ8FYMyLLehQXYiJqqv986vtFjB8SPSJZamCH64m3XiBaPUbbs4ufAmrSzZKLgmVzGSmBdSEYq",
  "key12": "hFb3YTr67rByUMnwXY8UtbFRvijCJLY1AXdSXedM28Fcoz3LMbJyAoEUrwVHMf1jicUVmrf4qLUwBebZtPi76cz",
  "key13": "x7ZYGAtPtCT4xhhAtrPCCeZiCW3wnKRtMPU48PxwbuvkCRmteBJrRubi3FxbECP8yXoByhG3AtzFkCVH1S5P6rZ",
  "key14": "66y4sAuGJ1CqzL9VAF7aLimN6fq5nHqKopHSXqtWNvrZYq9khR4a2pbm1Cj9HeGuyt9qBUWjmD3q5o97NbxHd6em",
  "key15": "ooFr2KV52n5bvBZHuzg8qqms7hQaMPMNFCgyfYCsXyUPHvoT3Cnov8PorUHfTwKzfknsCUJDUfpAa1tUSStNbo1",
  "key16": "4guAJwhfZTtaGnY4EQ4DHSVM8AQbER9d1DhV77ADMQufGBM1VkM6HgHA9qAkKCGekQirdZ8RnT84SFgfYMbPN4AL",
  "key17": "4yBgwon2DHxj9V74TaiLvczEqjW2aBFdwNksxnfqPmG9QMyCv8a4om9z8bueBUE2oTh5MijD1ZvMdMeus9MjQWde",
  "key18": "uDJozv6XRzsWszD2W2aAPPrPCQq5NGFt9Q2qDYTgAgWjowbxpEDJareLZDHxehcr3DFw2cZWVQULWBUVKyCBkah",
  "key19": "v3gzfMHwu9UZFMrgruZZJJNQKjmogzw6Ds2ENSMAan3nYbkPnceL5pGj4Y1dA5t9pcMX2cbHm4iv9rgEM2co6XB",
  "key20": "3ouqQQRJA4Cnx3G8xNSXkYJquSe23YpekYFyGAsS7yTtWDasW49Jx6tehcT9ss7Wpvb5f8d5G3qQBuN7hJDcqvvy",
  "key21": "2Rqq1cNNBMBwmZk7zLiJbzvX9USVznuxnUtYtn8nUuiRXCAEevsmYBGkEyrkbitKLtm3yuNhAHJGKxcyxot2MjWA",
  "key22": "P9Jcmw9XJqPEykUJgkQXsmWDRCuWfYaJLhZuEZ4gqHwzZLRoBJgrUdKYUCSU4NXZADJxvSB4GvshftwBFCVw96q",
  "key23": "5s1msM6wkwpqZtzQ1N82mK9ADCjPQfZvdTzWT1khVMVDbmz1htNzzdakd6kUYSQkQJGikAgkuFZVce8PR7kRHXfU",
  "key24": "H8gP6t9zsqpdxvjKZQARswrmspdLRwkFDSHErQXBiWvhGcnvUbArVoJtjdv2xsHecsizwgYHYffxiZPv847hGHQ",
  "key25": "5qktbkwdY4ivE6iTViLbBZ96NFZd5sqhbdLYLjuheaw3CM1heT32QCXAXA1KFhb1kzmzU3r6yXxQKhNuvWXB7RBw",
  "key26": "2rSW2yQYVUjruUEwT4FuUUqoJ7c4Qk2aSzrt5CvQmRM8ZeYnq2qr14tgfsYfPday6tZQ7Xmo13iNETLjG3c56R9T",
  "key27": "X5pqWhRKtSt24NsEG1XW38gpoLhLf48ATcw9UkD6T5jSF8gFoST1ftqvnaEKQCYXT5LWAmydvCJMMHatQumLBKk",
  "key28": "66VYLwEDWFYPMTpjGtyxrCviHrtWzoqknhizeKj8XTCRBGCTAhbjAcRs3HfdFPR2Akt4CXMAkFb1BfVhxkbPVsNK",
  "key29": "2WTWNyCWoda8egTSgdG9q1UrMpTq7DzeLrKcUuGfwnAtX6jdJtp46QDHXYuAgcac5sKu4f2L5owUwCMSHWgJVqR7",
  "key30": "4GKEmxmcT8LTwwiGnUbxxh3U9W7cE7MUed3iYAtbAqw1Z3ems1fybTz5ZWypeCm2gCEhmtCzoSA1GxkY4nM7A5no",
  "key31": "3MspFn7yn148EGkgYr657HscBbgZ51Q591ZgnaeSN7EM3fAbvxSqEQsPYTEJJeMikqZa9VBxGd2bqwzUgyEBkjUs",
  "key32": "4mCUMuikDkVh2mJqALFeHNyspwv1zG5F348a1ty1EVN8eHaq6wbZUMpAuy8fXmQzbGckSeuzGEvRh3aiKNPtQV33",
  "key33": "5gUvgP94afUQ9euLmVMftWWJ82Yw1FTiP2PZ2D3jyWYdbDvkoeDZh5n6ijW6S2PKqi7Ud8Z3GHFT6WznddCvj6aA",
  "key34": "4pcXn5xBYXgnzuCydhcbK55rDLUhPdpTohGGXNgcSTDJ3vN7ZMhUbL1VTiVnE9fFBK2diJhFAE6gpZWPw7VDGKis",
  "key35": "2yw5RBShq4xUi8PrRPVMsNVeUXYpeegy6bLmbvzageAHDeqj6SLaGTUXxveVZkSsqiwFHvnS1xakPKED2CQMzpRp",
  "key36": "3YCANtcD2esEKbfrvxtAT7peQ8H6fw8pu9d4L2aCB5QmWjmBxoaZ45U7J6N4oMunmZH2A1xT1jbrLN3P1RZxGpbc",
  "key37": "WxsadWpU2Mv3UvEA5v9ZbiExf6jGoqEXHKdsLcRgVLXNoyH2y9dTKJyGa1ncZxnVBdC1sPvCNUyjTuUjga2FcAt",
  "key38": "M5yV6zF8zDndVztuWgfjkqk4aJo4EKxVaFtr4W8gogPcqey3nycE73n56UALbG7oHP9iFa681fDDzbZ1jWw2azV",
  "key39": "3xYHJWxmyjdYCGDsQexPvBrsc5w17nmpqHNVD4nTMWVX99wHmZEumGWqySt7b1BER8kH7LFC9eWDxnN737SeLTVD",
  "key40": "oESvmsuRnULB5bPyDPHLPdT8davEv3RmREK88SevMquAcFiVDpgzXZU3oXhAw29LRTbeo4bjLCzJSpcgaq9WFYY",
  "key41": "55kvsQ67KxVZKHdVTD8LULcvHbGuT3PoyEFWbUVk7pFGAWbNGtoGWN9TRR5fzk5Uej6hvCLcZeVgfqaJp6erXyrx",
  "key42": "5sWzZeVLLtoPwZFGvrq8V8iYJrRzZ8G3rYWtbYpBDZvGiyCdbLPWeL7y2fTKRs4Cjd2S5ozEXb6KU7cDKUovSpgv",
  "key43": "KMw2xKUny2dsnYPgetSbf2ieBrkwPhsRpgnvGDmLCm3nPzcWAwtrTndUHymZupB6NWi5Sy9PX8GcioBLjhhgQtt",
  "key44": "59ZcVEVSWqJ8EEdVHzCS9tZQLb9pXKBJewsjkyXiRdTn8XrqUSNiS7V5v5SsozQ2h5RC4mCP72hLsNKmJcMUfYET",
  "key45": "42rfdPvMDvPEHg6Rei1JXBWwuXjTvoAbxqD8ynMpwckE1vXZwmdJdrpt5K3xurbACuNW9VYU9HSWArGJHR3JeJyu",
  "key46": "5iMXg5N26Sw2awMDTQWj8pCWJq5HgvMVTdJPsDmT3QV5BaULYxomoKhNaRSzUpE87mmQeEv8rgoB8UYa6CKYxmYE",
  "key47": "5tHzgevhcx3tcxgx2UDiDgftnDjUhZTnvW2EQnTKLP8xHe7iaifjE7NhGdHGQVPXNBi16b6Nxh5QYgfZC2JJBhBq",
  "key48": "532mbd7v1A3cuUChCrVfzaGmT2wSAhHnBtZc1zom2fJGiQBaMSTL8Act2noyzcnvNeALSkEVzrbtidrQcXfnVpYS"
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
