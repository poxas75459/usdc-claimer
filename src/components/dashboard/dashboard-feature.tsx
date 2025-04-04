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
    "wdkg6T17x2E9t5LxVBDK4SD335L4viVvJpFb9fLj1GV6mez7HxphczpKSF9WXJb63j43fRr5mcd7yyAMt7NuV1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d9f8LCMUFtjFt5Sf5SaaVQfCXB7bj3rn9AWxCtDVxknAJFWbH1tWGn9kAuDCApuGUJ3pJsXBbqA4GCQdGwuFMey",
  "key1": "2kvna8YGNhR3FTdBVNpuqq6r1wFhs1jNpthaBMVeYABaXb4rMcYagsqZeJUsofDt7ScXE3XYKSPgZi55KerGNMnM",
  "key2": "AEBjp9FCzrjNr4NhTcmWaukgTbDv8rcib5MRpe7NNVvoT9zRYykRdDok9Qize9w3VWsjp5PK7ZJ5RhudMKXwct4",
  "key3": "5QdojuXnwiNLjL1zdfnhoVKWXxqnxf7vKqwXA4a2p8CmLdPYVmZZQp9UQiB1ziDZ4eS2nrRTbasWiQM5nnQTUrXM",
  "key4": "2HogExyL6BE9r31H7yx4tTEN8TbTjb6LwBCtEWMheSd69FaLuHaQXzkkKqh5XuKfVmnZkNmZuzg4wAS8vtooR3ef",
  "key5": "2HoDTBr8DrqrMCHTjqt4obczTsJy7FsoGXMSXug8LyC9JgNbSch91znk87DH8o1Me7vpU2wUbtLUPBjGJdbKPCDq",
  "key6": "4hu7ZuWoatjVNKNBQspaULanfanAbZAGohNJBk3vQfxziXugVjsD1CHoLBid4qrvnaHrBSkCkBua2YvQTJYiCtXY",
  "key7": "3JZ7nhzVzpU85pghQHo7UKDTkE4HVGKSKuzbASRC8jm5NGrfeaNCH3JSJQXZhXSC4wJzsgtBXxSCjLw2Ekb1EcF6",
  "key8": "8HqRLEqYVaHsVthQ7L4EVeQjwNeymRoUDFQBLt6b9psqQBZCDBrYVMrqvHBaqPKdsXThs64Ad1uv7rjFVwTPVzW",
  "key9": "2GmE1ArYqPx9wHikRvGgPG24d2jf2mkyGQDj23himsRGXE16g8uixv7CE21RHwnX4tmuAYGCnHK3VxcjBN6QVFDk",
  "key10": "3FY7zUwLdQTcy2zPjqQXsmcLQXTSfL8uVP7QiHCKFJxJtpL56PcSmgqHuYzwrjAfrKSUSrH1wE9mzQTubU4Ra3dT",
  "key11": "2ZBfDuhuSgJunJ2U9VNXNj8DneWL2W7H5KBuwvLE9NiVYL6Khdg4mxhGa8MKQ1hNPFaDeRVVbxaab1f8jno3Snof",
  "key12": "2NYBJ9eYhC2xcZagK6Ewp3QvgvWRSbM2hVkFRAchbTfbfXWGpbChqJEQvw972KWkZLazRooB5PPipZsMbyTXGa5c",
  "key13": "63sMYMNudA1LymzDCH5b5KMZQjhd48Tc9d3GNLL3FJHeWdaU9444EPh1PsCLEESpv7LEuXJmmydf2776FFccCWRE",
  "key14": "25sjPWH6UrpAgvuMUVSC2D5WHhJknZBUw6fb2JPHnGvjWHKdu7SfYQZrfLUvfBwjrfwrvxYsDSAiSExp4xpJhjaU",
  "key15": "4h37ijyipXjjYRk9xkRaZszQrLzmq36RAE9yRzpiUaTmguyBi5LjhL4vQ2hBBtXZFsLjTmh3fFizrRrQtPXqSxUF",
  "key16": "4bWgVwPz5rCRAuiNz6wgHFX51zfULggGAgDcYd3VYJ1f9sryy6AYv2iQ5o5QMC9MhHx23HQdBK9eiivRDY4a84pu",
  "key17": "51zBt94siMW7dPjYENLgt9Xbt5em18dXrw9769612KEuMjReXCnrKgKnv5gWLvKmy5bMACALXR3ymTatxCVcWTpx",
  "key18": "3FK3CZh7v2d1snv72hKttU4aN16BB4ZGxHSophRon2M5TUWo7ALrA8ta1BADPThTxExPMycBpooFCtcPzZY1FEJe",
  "key19": "65VTiy1scr4fBmM7h92TfcQVVzn82QWAJgyW4gFTigZ2UN9zgZSMjTdeoNxJ5qLy478nUfeao2C5FNZjDJzkHPuR",
  "key20": "SKAdSFCLaZ3VkqBzzNQXnsfLVAhyL8YCd4fcH3fsJ4CWvTS4NZM4z8HvCSdYNfHNGBvcnyTaZgnvqDuyW2fvJHt",
  "key21": "2Gb3z48iMxuwjf9zFhe1FSP2m2W4xL5TtwVL14fcfP198VcbJUTuEgUYx6VwqDAk2uNjxnwpiLwivqZwyPTfAw6b",
  "key22": "3ru9U4NjVaKxsNGCFvvRrUpiP7LjoLixzFxhXFX1Z4yxFbgx89epHEQnFjPfoU6C6QyGSE7VCxwVGL7iUANkj3jC",
  "key23": "61TA45U58fwN8BVjk3Q5zzH8TbaN7XVhZ2bTBQqcTECMY41DV2XJ2W9xxZoWFzPygeyKgimdr4FTCkhG7gYrUYtJ",
  "key24": "5rBEJBRp3sq8csoAnmkptUP8kwGts61cfcEaf7YEqEE5pAHTg1G3XqgG3UG97928kxcdLQLCZdazeZExkipTSLC3",
  "key25": "3acGuFT1tB5nEuZ7CvddzrAmdXupHWCiQrEWUXP4oDw4yC4hWSYzeUgGx7VawmzReSyUCVhJSYHhpQPqZxsZf2jJ",
  "key26": "2Yy2oP5Le5E2DHSvMg9kvnER5JK7PhRQTndZkUQ2bJNt8Nbddmiaw86vWMb2rGHPmik7tVLx4pdcoE27hwwkz4eb",
  "key27": "4SZmhKUV7YXrDnsyhtNXQVKApvchKrZhacetmA18EYGboPA1RMDmncdQNX9KTW4AWUaLYjCRkYRap1eV8DGbHGzd",
  "key28": "vvEnWmCPB4Y7svdhJ357CgiriEMZbfUa1mMJkgZXRF3116NHH7JNgPL2yKjLudohzzBk8TN8YwsL8bkVfLS7tyT",
  "key29": "43XVW3rLpQFoqUy4ijzBovC39rRS6dwoSYLdY1EpLLoiHF9YAqbBgo5tdHqB3K6LEgsseegexZmoaLPVBfDWMpWx",
  "key30": "2vLG19SLghVkn2xbtFpJyRFffKEuuLFDBQZhAwuy4fZAc8FZ2TK5w5rDcqkH1pPZJe12RpS4ZNmviPMjrqUaWuJh",
  "key31": "Vs4MGbzhTTH3nBXGwwoK8WUYYKK88ci3QiHjCENEi8Mr1wFYaCVbeo4g7EmuTZEKDNnsF42DAhDagFDd99a8s7V",
  "key32": "5ehA1KfTfKpNp53dyxN2qEXnKbFCGAcdAifxCYBCCB9RtdYZ1Xhn8wGTo27PUiPWERX1ChRpdSRgQnFvfFEub4h1",
  "key33": "4KNnW1CptN2YSQLQ1t7sFBUFQhShRZCCpDhKYeNWap7p3usQYBw75suVpeTgXisUc2qX39MDtpZeoRp58Bd4pUeY",
  "key34": "4S9JkCszpdApjvdJRiZ9qJwCUAk9rsi79GmcXSvXfX4yE4VQYeNabuXUe7MfV4LFT7UeZ4aZD1G9RpYCoDsgbWX2",
  "key35": "3ZLran238MEknL4rwqKBwUsrjprjikxWqGZEk9cnj9vgxCud9WgUfttkKJyii33Cwje1WvPtBbx1AZT6xNT9yqXR",
  "key36": "2xyoZ5zNSCxr4FkMgyq8UqZz9QSjuDL6H2BkT3DTh5M45jn8eiFdaPSnug9VvH5YLctC1XLYEnCWuTDBN4r4xwd6",
  "key37": "4RW2akwuBYFbe6jNgeAJ17BRaank5FahSbmQS5MAJdzSNDiAdiP85dwW3d3N3p4reaYGxBUGkpY7TE9c6qTfuQnS",
  "key38": "5BhgNPkH2XD5aLJqaN8B26AMaUaZvojiuvirync4uQTbu7JkHSiL8jMZejBb8YYU8ZshhrjkmrqzRRzswni1akrR"
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
