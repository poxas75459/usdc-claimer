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
    "pMvgPdaPHhaSV43LstWby2KoPJVDWEg8QvzFcgvnbno9en1LzRMtN4wpT9PkWA2GbwYkB8Rch9itD42UUGoPyQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S2VNzVZAxp4Y3ZRjZs9aFmbtTVu9SEBf437RqmxvTnenWe2iUde7uxQVXfSiYFLzFGbLSYBUnj69gx3iyCJe3v3",
  "key1": "5RFB1Hk47xWU325yrViNmvf2Q5PFusmV9BWjDPfpbDGFHcHAkWEieCaXbxVp2SNGU89rDKubd4nYEwB6MX6d5wJC",
  "key2": "sRLaMig85tnLRgaKRVeJNgGzUxh3wnzzLjMdoDrjedyPSHQb5ap3axep9edUb5qPpaf3eTQAnTTp1ix4Y8HH3bK",
  "key3": "nbPrcyavj4V8tuktBYLh1uGu5NFwnso3dfKMKpiQK93MzYLQ5xKhofj994rmBwhPq8WN4ASt9yfy6WzvpQjtYks",
  "key4": "vAsFHTUx2WiJBG2okgJwWbGdiEjLJsam4XMfs8WJea9kmNdKsH7kskJd8qyGm1BBLVVCns8oLL5XRk2zYFeRy5r",
  "key5": "3Vzbu9DnKwNdNw5Aci7jKxZjw6MRR8UVQCBnURyd4pBwtmnGf9VXRcdNDHVzZGdmpA7jR1fchVUkXicTJbZUGgvL",
  "key6": "5CLLnsE44QRANgfBeRG6FzW8tF1pyMpw5Ss1Hjqj4J4uA5Yur3eBswJAvT3DRvMMSRxZybEHXH7naWg2qim1gJbr",
  "key7": "4jRcsgJNJLNHY5gyRyWmCu4kMPhSBMBJAgsvLfe45ocoqfgsMmyqjqfrBVSNYqkHybrBNEGTQgipFPnKNyAPuJq1",
  "key8": "2h66GebWuazbHW2ntcvVietu8szBcotY2qgrVmZ4jQT1ZXa42FWpRbqbxybpLecddKQHSXn6AW5XfAj8AZdA7M52",
  "key9": "4RidNrNYdHRESAAFDzC947aD6r6aiNPjpb1zwMNZhB5zvwGjRc8jMuNbjGvzBJyWku7KxmV1N4ucxkvtRtnnd7hk",
  "key10": "EizQsKiz51XRnjrgb2AQ1Z19AmCgJPdhyozexJeSsjXmfRX2LQPJ1eFBEPDxw9puiTJH7EMg76Fb8rcEnCcoczD",
  "key11": "ApZ9yF9ACXc6o98b63H6FbZB9oWfzH9babzVrMtkkURRB4oM5xp616Xy8vyihxc7hySp3DvrMSrAtKg4hhrU5Qx",
  "key12": "24Lc8rRhpd7kPrtUiDhP4XrppXZUwKtQshow1iRSdYwTi4ekfxi78ybLhEtxLHE9UcCJewh17K7vYjHt7h4n8RDr",
  "key13": "2mEcaxiXQZFfM5ffKBgJCHhPNEM3gTGghpkHkLggzLSAZbU2xjDJ1Dco5cVtBA2L8izckMo8opb2yBsF9xmbj5ea",
  "key14": "4a8BLKKUVHosCCUY5fwNAPCGjaY73G1SYwqYAqWcVfG6g2BXWt5XX8fXQJDQDAs3xvkU9Q2JDvXMNRjDcKgSzNZZ",
  "key15": "pKA1RgAiD5VTRc775ws2qnDxAsc8yEdw3QxDjgmSyxD4HmVgaZvDvEZLgSGhnnkkbYAcvBQhfmYiqzTnfzxTs95",
  "key16": "2VNk4DU69F8nuCFxeGP1dbuQpKkqJPjt7n8AVaZngBQnsPXHLUUVuwyzTnd5QJFvg88vANj4zW9KddsFfXafBAGv",
  "key17": "mrHNdsRQnrfw9CRzMYr7b1VLqgCJy9dX4pENrF7Wim2TRVzdKTGtZdGnhmk5s2dJphBzBMDCoR5mrU9kY1AZUP1",
  "key18": "3hKXk4QANVw4GujbJ6eqUZ2CqGseFfv7T2fGSQCApgDEGbRpnriyeELrBBKiju5TmwmfhHT9cBYjvyNt9vMHaF5Z",
  "key19": "4kcz7uVtER8Ww7JQExyDjqHBG72nd36bUWU7xWWr89m8B4xhxWyM8dwcsjVsq2iLk45AnSwRpaDCEyjk9r4u4myg",
  "key20": "66AJXzhn2N5dtjEa6yiUo3mPBFE9qRXzfQF8AL34fKg6AoZc5LFPkgjyyvKJt3fwTsaJ3PSY3ReWvY8Mxx93oByA",
  "key21": "zq2zMgpBxqQEcKbsCwjuwL7NRTGubXspedDPGq8ipVNehwbZvbySFPwVMUUEjGxKtzTn4NVDtwaZWbCNpuqx54a",
  "key22": "5fk6qdWDP8k5Hrj1g1nEHejrzRzGmWn8EmEgePi9jCKQrAr9RfqBwJkzx5B4hk1tYbcrjouCMDQ7ZQqMTQ6iTxDF",
  "key23": "51MahmNx1jLZnX2GKeooVsqtiRJggkYFuFo4L5NRcwpPZquHdemdX8QMCwUmKzDSZ7HRY5kYs9zpt52znuNauZip",
  "key24": "4AEY6H9e3s6MVxhq5w8672xh5Z8cWS4Tfm1DFeXjLMS79ipXFKCjFPc9MXK8KB1U1ZDVnRMmL2KRPL2yobcaJNtc",
  "key25": "2U93SjmChMF42Sv6P2aCrTGQWELhVBMB2gVuHy7gXwTz1uftvAnWtVeBRiXuMBQzBvNq9AzGnEpvWEPhSMkGzXaK",
  "key26": "2UuEMi791wDr3BDaw78DiuAuzy11eXs17gQjsFdgrHx2vnst2eZf4a1mxwQ8bkVLSm2RZk6qgGqxwH4ZpbNjuHwC",
  "key27": "3KVxYrozDZBvcozyopKbjeUTjFE59CFeTDSLcYZTumVcakbWeKU6pmc6c3nnLUBb4SaaFpmeUs68cRRSqm6aV2Na",
  "key28": "2Dw31qG1tqwE89bWK9uU6RvuRnT3ZeydgbyUQ51GNB4dpKaNtT46EtcJLMZ83YscpTXSkviZ2iez6odEf51N7zcw",
  "key29": "2LqETCgyqB84Eeugv37GYgGvjQT2X35vJSt1wKBo2RacKEJFC48UqtzPHTHhMFxkxAfeXH84v63bkSbER1EDUQmd",
  "key30": "2mCUgQt7feRXCxQJ1k5eLxZhyCcYCxiRWXxVxUcPtDJ1D1HWxkPWbSFMEtyNeEySUu3AoRyHoNNCA6UwNeQPjA8q",
  "key31": "2n57a1dEJFBcqMPo9o3odevj3bgrqyAswJ42cXbnzxMxzWmk4hGFAPzKr9GCuVqhuLowNygHZQEQ1Rb3P8tGvSNR",
  "key32": "4Afi4X2ePQk7PfPs1HfWnHHqnTL53NLxyqZfDMMCCWwGWfNHfP2gu7NPYnugTAw9UWz62jpsMmEUJpTsVt2Me3t5",
  "key33": "4MwNavSB3fCnUiyCnCgVFHj2ZEw3yB44zavwaajGuh9czkcBGyvgQcuqsdiUA1HYUYAhJzfC1U7jns1Vb7fMeg5C",
  "key34": "38DBXFTnaTvTgdE6sBdjk1NprJ7KxeVWrHVbDJbLiimK5WXvg6Us2u8iXZWhsEdRY8EzYvuYTPoJxjDgvonpvCMG"
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
