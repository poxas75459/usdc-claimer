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
    "3YLaCDcSDgpV5ruuRqgSPsmpLhdad9ymdaFj56NxerTqGR4DE1wETKiLgsWiYTzQCtwKt7gw2iLjY8i8Bu29xkJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LG3faZVy7ognU2bBoD7JQnfYd5vxzaaPBkNM1UdVzqMLVp6zke1ZpMk8DKN91pgn2Uu6xKJP1vCGdBtbGuyMLBq",
  "key1": "4g9aWNBkCcpY5V2gzhRaTGmrmqQVsmShLUewD9FM9haTyLKHYu5t2VrKgBd83pd8qZTkRmk39BzKbvYq6oahHAgt",
  "key2": "5HQNkdqhwCi9RtAniErAu5U7XybumXWT2daHy9TVLCbZ6jKPj9EfzyviKGamHUwv6pRUnxz7DwU4ao2VMpsXGD8Z",
  "key3": "276JTGYBMoX6YSnvBRkEobUNoy3D4g2eMCV8cpeQf1j5HRD8m3wSq7kU4ftaCEbZDLHjfBsK67VTH6vC2MaKahDJ",
  "key4": "61GA9ithQwEWPqkswNb6mXuDV1U7VT9WGzc9LNXPWA2kT1MufZULrrA7RaigmKGhTsmgHVzy7S8tjwVwYDeYhvXd",
  "key5": "5a9cYZN3zD3ie5mn4D2YwVqgiDSK2wqib41fMBjKTcj5MbXcXfPZkxKXKZC4aJSh2BGx9iViihJyERDYRzAtGiSG",
  "key6": "4L5DWS4b9CT4rnrtYgQAF1GxMkNFPAWz27D7pdM8wG6M3BQR9UmEM9iJKe1sSNQikByZqJqi4YuQvAXiucwGRPWz",
  "key7": "2JN9WaqPS2oKNwCT32jaAzA5XYGNLKuFXYEniYTggaPsrFXHuM6r1d64mKtPuewSexAJxD6SHFsqoS9aigAGasHM",
  "key8": "4kt6A3SrH3B68GxUPUAU4v25U9bVyFZkRiYGEwsJ5LfLawfyvkwiDAB1UvN75rRVxqS1uz9HasbvAb3Taaz4kT49",
  "key9": "pr25ZkKSZHXr1FWw66neaAMUbKDvVMTcLsAf6654tKDRpXg6smdsdQ7zyxPZbrWNLv4whhPHLLowsrvFvY1CLwN",
  "key10": "4wTePUcscqRdPuNHxe3krTSdMDvw2dacSwFF6WL85vQLc6ZppTjAjGirRTGt8uvmX8axKSZsyJuDAn7YQ3Aot1y1",
  "key11": "32Mv22QSwUEiPcfGJqxdw6n751bTiBTryryLzNFiCm8wtw5q4RieymsS3b61iDboSrVvW63qMggXLgGPedXKY1ue",
  "key12": "5rozPwVVWdZDdoLmSJuMZXjEYGo6UKFxafAjAtbeKKjJoERcYiX9Uro4QF2vyhENTco5prYqVt2xCWDqPN6tD1gb",
  "key13": "2TNFQgGWYxeVJR5WHiSBD2NfmtbszVDxvwNqyioifHD12LZj8mqjt21mfBsdtL2fdrVPDyDjabNQx7TiP3q9MxFo",
  "key14": "3igJXgf4Gfyo6oB4pit7hYX3HcCgN4x78NZv1fdjrNKycZAtyaeiAcpUGzvyTez4CAZwkrApCqyV5965raPnjus5",
  "key15": "HoF74S4qNXJrmfPyr6HZyGnENqoZvaUAyNFCPWcygzm2AqXfw9jMvRaD7CJL5vDy5JF6V3x3azXDVVXkN8kWKSM",
  "key16": "3yXukMmjgX2YVLmPfPC8WYBM6SNaiuCq7ujoBAT5cxfua4Y2je4uNGnDAaBL9eWHaczC74j3vP8XgLzouQ6RtuX4",
  "key17": "5obhZdYH9MRvheVvbC3oiW43C7qWqUpm7MgBw3qmT6ACxrUCz3LETHSKucQNy64U8iuvfgUWUULLaMeKcR3JtfiE",
  "key18": "xVPXai5ef5WQxmyMNLWyTG55cfs1Yxe8MXugrpTiYT4HdVD4jUGgz7Ppih3vYE9LRKEvdTPe17EtsArCjjyrauM",
  "key19": "424d2LognPVpmwZQ7uaooy8HfdgWM2bqSA6wCnxQiAXu2qdW5TyvXA98gzgs6kwy2xEb4Qvkim6cqNh8aa1NwWRx",
  "key20": "3bj7MpBG7Br4GMNybaJTNqiK2vFAdNdYVG5w81KyH81UmgieDoL6dJbXcyHWvvvrfbmVd6AtdYuP7LRFDiRs4WqG",
  "key21": "5eS1LXHWzGcK98ByJC3JNSaCxZsAdcrv6SHEhF4VhqAejx9Udi55LnmsqKJ6zqQL9hFCSxYYvV5xgMEFZKZoAx8X",
  "key22": "3vLU3fHB3Zw8keEwyBbT2Eog1YrF6kWWLn1Tn318QmsZWgHF5tsrwgnA71movswJvx6PdaWPBH5755NysCQfpuHf",
  "key23": "hAJXhiXSB1UG3dXFDni6CVsQ6G7169xmZgrzjbs3J3M5aqVE4sNR5PdKkNLBuSGhhXgLkddFLBGEqpGuaziWwnb",
  "key24": "4FZhvJtrkvhVufqaU7WjG3yRzQ1VKcmSWXhXRoHy4NcWzC4dUT2eCsQEfWm2Hnb7aoFFj1VK93HHt6aTmhfkat1W",
  "key25": "3tgZXceBXB6DdXv9tmsfNSBg13KYHEqNRxHP8sgvrQ8ejiRaVFS4syWWSsbBGCs33k6h5VXKwBrMFqUpCEM4nJsB",
  "key26": "5FwbPDG8g1VLefKCtbrUX5iKpWBaP2m6dWov3ZY6ghjAALeFHoZeewdGY4ftUYairoSrUCGo3k4bP6X5kAyjAaWQ"
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
