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
    "2AubEnY1oNng5jA9nkXPjNq6GmtW66niPnEGyVVwbXmHPRuTqGDLPpPysAQxeZ7nYXVXQaiJLC8HRjzxg7qWU2UR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DgaHV11NznEnCNYBpXQQgsYsxfrBE1Ka62y9mRVL1mzLfdza7BpW49LVCSrqTsbxMuRmLGJ68MHV7SiwBV1LFR7",
  "key1": "2hBHgpyEJBwWUyUsVCrjpWY8zhtNcVUEBkg3TMjSSYNRQA2TipWgMpnyryHzy1Bdb1xUzpvdGWr5WDGqqwpfFaqK",
  "key2": "2gDRbuKKvPR1UFXe1K93uvDDxyjAynDGuhZP8CSkZz3SPREnbYH3fnobATSkZTmESmeiBXCwc9fVAH3NFydHLXYS",
  "key3": "jNHRd3P1S57iKVxg7SdUJMPPMpv3LvACh77k4BP8mGWx3osH1M18CDv1rd6nQiY1XCv3iNRoysZW54cWZteuGTH",
  "key4": "2vKwkvKF8ggyEHJWpBdyRoK3YYrmF6tauiTd2xM69PkmFBwq16xvTXCyvx1K6EEnyC52paABs5Mtv9xXsuuVRHN6",
  "key5": "59GqUkKhUyq8Xp66HPuYpyWJZDgcHSubPXUjvnudjq3FFUFHZFJHKZGbAunyoc74vpaLuCQMrPm4ep5ZGCxzPWfP",
  "key6": "FCCmwSwSWtp95pzYztceQ3aoZtRo4VGHsk2CZRXXCnoDN54wWb76mLKCkFFRQkNcqR6ZwhX2kpBoxaTenGf9QgB",
  "key7": "4iYxoLqc9kbD8pbx1Dn7ABcGWBdBPuiPEYQ6B1R7jgz2nihdMKKNFEjP9E1TUcgbX4mH7BJhgDZZViVu5NYTSnbT",
  "key8": "5Cx1yw1rQXFzS4rH15YMXiborBcQGbkZkY3q8VkXx3TAXzK5zb29yUNaszPmLmU8KexXWGE7VfXC9UYPx1TpF4Zj",
  "key9": "4cHjNocMBAEsZ7N3SWTVNWv92H5whSYPbg9CmUAiGpKssVB8i6fbupBTTz17UcaTekceCfgvrUBP4kWa8kgiThzq",
  "key10": "33aPofRQ5YHExdhSJ7kKQBiWpyf75pDodmhBgFrDiLh3D6Qdgbmin6uKPdF56Rz2mVQf4oQcMdrtvQs98ZNJS2m4",
  "key11": "3UfAZ8W2Q5xae74HQN9g3RCNUgZhDgFRxEHypPLQFJb48hsYz5voNiYUjXYnVXEzwB3Ka2hFjBMrpS6CNq2i14C5",
  "key12": "aGAR23QvdmdBrMK5HrQsuoVQvk6kwNtJmGx78nuRGbQ2tmpupNg75hpSp5vAm4NmgTEW6ShQBAAEXE4gHMQdAQu",
  "key13": "HF9TbHmh5zY5J1fne3Y1kVRXxFTX65UPqDqY851QQF2sWZWnr5BiP14uA7NSQQARV5BE2cNrkt93eS1RSnrQGfr",
  "key14": "4KBvoSDG5iR6cxpkwcECeQGJUYnnTtNmgh369TkLf7adGU2Sn1XYRiFXqJ3fukJi33LjApBoNA5J3kNnhQMe17iY",
  "key15": "3u8wougtjzvf4YcUTL8qGTni1nGwu9WbVcW7QAGbhf4bozVmyUb8KKh87kwnHoQy2dg7mjJHacevLQbiPF2d83wf",
  "key16": "62VMEQzrMyGtQA6iR5vTBtLsa6mQnb5z7EXjx62bDE5gwxiCjfRz6PNBhycxH1KNh2VZK9m2LsDZTfF4etUAqEDS",
  "key17": "P56UMnsGt3AH8UaE1h8kWqgaHUD2Zd1WU66eh3YktCLydpR64bwcGejgBr2iAkCao9BfkyfxtDaFAnxYbQigTJg",
  "key18": "5GP5YDthn5uMCwwGkFiKEHUA9j652xas3MtWEMoyCxbhzRMZSThKmacpp12hpEb4HyGKEdzwDcjT2cLa8BgFWpin",
  "key19": "45EQFYjDewfqbHNyeY7QEWnu6Ba3zE531A1My5q7BTh6Wgz5u9n3BqZZmBY2HLY45P9QbCmFT8yrJocijbV6ptas",
  "key20": "UjZSjmrjzUL2jR3ydt32qNQ196Cy1RB9qosN2Bzct5PvSCN5cpQh3hArByyfwVTrYzzATFRYzA9sP4aqesgQxmU",
  "key21": "3bvCzgB7nC7SPDSGVbNGtjKCLpjcVgyiTjpbcwp1AXrTruArWt9D6qwibhEbgjEwXmzkk3HhuT4ueSLs69GkLJZ9",
  "key22": "4ewGFv1TgTyUHYS9rgr12rEGAhFMUEiNEEm3gLCxD6yfa74696GZWXDKAdNck5bzRasHkbgZKcMWAx2k1ziu7PrV",
  "key23": "2eXvemGDprR6riho8ZXBzwqRc7bkqgg1cT3xxhvTf4GAJHR4C74Fm8b7bM2UbySF1PQHAgt15JxP4v5X7bwWKGtc",
  "key24": "3bASL4gBQ6HTisngHPNiMaaYhQ8d8oMLfmncHqP8MWg1EbjhF5iWx4Jov4PjyBJuNqBgWeAXZeoeM3kJMhY2efNd",
  "key25": "3SmiDn6AFxeE2VjPnUkYCKh2aJGfPCt8TkgUa1YnPMEwz6G3DfGwaSUuE3F1QzFj1xnrAqqdh4Gc9GZsbFd6JLyd",
  "key26": "7BR5nLGuvxqDcLRXzDftHrXbpzLCxKcb3JDKjyTdf2csdmnS9eNaB6dVMykbsP8rVXt8L4RXUPP5B1qScQGiEMF",
  "key27": "2XmdxZGMDXne6aZ1KLvBdPNTjDoSaDURJzM3rWSQC8rH1CTuCSXgAtmFWDZd7JroU5CbgHvsppVs9gP1SLfgNVe3",
  "key28": "3qXuARh8DmX87Y6TVHLdL5nkPN2jPUTYKZpdUy5W3pj1cKbo8wUEwtQPoccdYzKxt3v3KcuQCsQLRJtMXw5T4Fjk"
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
