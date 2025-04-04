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
    "5mHv4dLXi6gBoR2KZYVvaHyZ6nUwxMghrsunYmck79h7FToudARxMABwFq3nofUM6UqQQzBLKVh2WayAPEizq2mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m1qRWbu46XTepNMPQu7LdpaHpUv8GyeuPKPNwEkMwWcg6X8sfSzf1C8humqACWNLpRpizaqqDGPtA91Vucr4wUL",
  "key1": "gWmvzniKC5GcVHNfjwXiMLdwjBwTzRKUvAYzNKKTFGKfjxbskiguYtqf5utubMhDyLV13ckCDKyNoZqjvfyb4n4",
  "key2": "2xEeSHuxK3gfHrJTgZtUCVobTYoBUNjFDAzsT6SXh5ZUbRq6Qfi1LWUP7CbtBxmhSHdLNAC5CGP1ZDGMfPhBozrb",
  "key3": "39N8XqhcwoPbqSB1hLCvtxRFmYTkeXf2LWqnhcubC9wXX5qdujSZixc6su51wYa9kt4NcfDHpM5MQRaw3pCbze8N",
  "key4": "51x83d6avDGiLXesgnoMnC6s6wQmhHw2dXEkq8aqnzvGy4tf8m6TXaXZTR3GkwB8MNJsHcCodQGtMMZdHfbj4BJM",
  "key5": "2p3Lt4ZdgejfhZdkoevXnopq7LBp3ngnyagsj8LPBzZM7WtdDVhN7SRhHtybiyTk5ctnpiVMcvXohH9K9vpSuA2v",
  "key6": "3e2GkautSxrKuDWow8S4o6BSdoY22tEZovcQGnnRNr7ia5ZVtdwZiVfLyREKrP7RtByBRMZFCfnJXmJk7kqZTLCy",
  "key7": "4nBXGpBqDn5pjVXDiFPFiBWyAsdTXJ7Cdb2JP7kqggrduBuf9SBAH8bT2eTaTioHoHTYsGUAPRYoA4YYK8RKZJmb",
  "key8": "4wVnPpUvBb1cXpGHqgZzy4Q8kyLM1Y1HVtxpakrC52GbMHsW2R8sj7NhamGRqBUuAw8ERWjvHUCdCXBg4AFNy44S",
  "key9": "2c57xLr4kMqmSCugoV2vZRkznV4FbPuqJeHsrEGspSgkBVpHAYhjD5EbfmP2JSXzS3eFcD2pEH9ffu9JWNRjwzWd",
  "key10": "31Hh2HvM49ijgZbDDD8GNHTFqdbPjzUdu7WNXsG6BbzvBKLaaHD57J9499TXn1fUxrhfrg9qCkrT168rn46HdkSU",
  "key11": "4N7AsHrRf4xNMMYBB7dsz61yYLbB5dfz6Vh97KNnQKF1gbBH3RHVf78G8z4QXWs7TBREhv8aHQbHhPMqjXa4JpyY",
  "key12": "39rcQLSVErj6sAXoh6WHqGqN7xJ6qa87vsgx3K3WkUKufrsxz5ZSt9mYcev7d6wQwLwQheu7BjhoikMRGhUktDV2",
  "key13": "3dFGr3fqJSFBjThsdpEpjKd5KJRMTBMkcxpR1Wd82jTb6Bz5KEzmEiDrB8ak1odUMSGfs5nRNy4qtGT4V23ug4gg",
  "key14": "4TxXsYBXCHsuWnPt7fTqiASXkj9YczymNpVGBqE6iCNTY9d43nm5cEJmwcMAV7sZm21Zs4j7uLADGdbhnRqgTLMd",
  "key15": "4CMP1hMGHe1UxrJjxRVY9ujQujeiWtqwxaxyPGYN7NA5tizXcKqhVCTm4wiwdt72dKzyAZjrStzkodw4BMq6XJzN",
  "key16": "4S2PsVXArW6y6ARYgn3f5vWS5d5HqK56PWKLioUdp8NDeNvm97r2z6oPqvoA5hfy8PmSmfJDWRBaZTCCZAKP9MXm",
  "key17": "4xkYYJPsrxs32QPmpwbMzBZTQi5LP9NF4KfZdf9XQD1dVZQSYTc4YHHGHMfNYy6Qm6VRLbofmnYZkG4twN19hGFG",
  "key18": "2fE38k9SDieWHNw8AYoL74qygiBNg6uEFmQwQY4XUsxsifTH1WSByLehFJPWhU1sM8tsK3JPJgip9vRVET9bGSsx",
  "key19": "4KphDVM9accMTxg2gGTSCVF3AyUPypLamRm9K7RVjS1ob8YQu8Vvk5CT7MZtvQD7ybTKJEy4gsHsiiefQ64D8SuW",
  "key20": "yfXYXSNTQq1KiSqZq2vtBAqSVgKGxcoa2kuzQYv57MJ36KVAMDmVobAhySaXrALgjxmzHB6Txf9rjVYbbBsP328",
  "key21": "2VJ9t972zQDNqCcKEjNsuqTVF6iQjZLJytUrFbbvmob2gTZFhCAFdn8Comd2ArR1Zjqc1YcxJNuwe8hV7L6LWZG5",
  "key22": "sUn5tWxdEAH7apCEsnx855kceBCzLcTVBucZ8tsJpVhXYVFq6hMVHKLA77dW6ux1Ujatpg7dnq4UkzRHswdhxkJ",
  "key23": "4BrZnsazB5VHxh2zvxUuu1ZAY5XCZKSEu4ZRQ4jLQnJZxG5zeMkMVqQXmNqpZhNNtWJasjHVRhQ1hPaGZAA2XFTG",
  "key24": "PJkrnZv62ReqkoVA4jTBGmAMWZLTSyFn9nS7S1CrrvwvbCAd7L8iiSGM96ThokRf1y1m5BGVF4TcDrH4NFr7oh1",
  "key25": "Ns6Z3CsjHVzvQigxLg2iMDaEePaDFovbQ8eQTP8PdkvQsz1rmphXsrND91sNmgnfZj8x2bSFDLUAzaFYFwPY4b7",
  "key26": "57TEuaK8c7HoR3Q5BRfQncU8pxqDtKwLx5RCW4odCwuNsEqyyFqNoBGQKDhgPD4BYSwNTYwYHFwmTRjJkhtRsKg7",
  "key27": "5FhHP5ECBgk4KR6MaxBRCtc9Naum2neAFP4AexB9WDXUzz4tuRsA9Brwuzcc6KiyCdwALcyz2Xagqkxqvt5Zdvxq",
  "key28": "3RBeqJZQWpx5M8bk43QqMCJtEpzua85mmCdwZXCdY3nyw5p9wV463Ry2So5G7xCYtCvczd53ie8BJbHCJmidLFn2",
  "key29": "4AkQk8otVTT6i5eaH8KVCz91SXMuqysK7V2GtcoPLyzQj7Zsi4E9W5XLyxFVSiY7VLpavW4J7iQTatNkhYyc9SmZ",
  "key30": "9oLg3mMew9nvGuqD64AWNKYjL2avtTEruwMEtX5JTB3fUXzx8g5dnHNB5XQGyBVf1zmdhAhD6rZ9CcSpj4ZZKu3",
  "key31": "2yLt6c5FJaJGEEvQdQ1RsNMBRdjHSvJrTAtxLo5WwrnhZw3H71sd3jU4kr2knabZNMvcA6m6MD6a8dHUe7K4kbK",
  "key32": "2WPxuW3BJFqczZZTDw1dNxbDDK1KgHMVwcfmxR7SBTCKZ3WEr91aGhKEdhZYnDiYvDzWgx2StFAete95LfL3nKoX",
  "key33": "NxSCZJ8gJYMg52Ggsafa7RUmHBYDwAkSU5JjtS4oyYprfJWUQDeHoJHyNJ33nQKDakzLuDBR7iAFTMy29wjjK23",
  "key34": "2KAowmSQiVA7rxKphZBQFtnYh8sgryEMcDD7DkULdJspyErk6Q5LU71ba2Q6qPvZFogFD25TtB4NFtKPUeppLR9f",
  "key35": "3FyinzN4Qs9c8fVEiaMsWq3ViJh6TzyLm6bhNeJsZTm1WofGpFxzLr31YXEr8ZDn77ck5SHHXWNXrCqaKz6iDM1N"
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
