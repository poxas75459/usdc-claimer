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
    "2y6MVxdJaGWxo1yodw5mM7unB5udNHE1uApKDaejREtJBgGpVRvyAcXukkHBBwUfWCaU841c3v4MuFS3vN8rLs77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vqvaLC1B1JxjDCa6TVbGiMtou9xSDJsQE7Cb9BrmRgWBTuGVkrdAMJHqvp5bbZ4ubj13enXcKDoqNtziJ36peXn",
  "key1": "DJ9dFaQY5R8ByeVgNFNK9qHcSuDk7Za2J2jGU4ayMuNo8TwVaJBMVDUkxAR7oYCPY6WNsErjj5ETvGE6i81uWim",
  "key2": "44vYiZ1duK5BUW9rLDVr1CJdp6J8VTJktqSdqv1YnhEoZ4bJqducEfjtg6Rymkyj5hp5udSnVH4Wr5kwkBBEJx39",
  "key3": "3EmvSDmC6ZhE436Bv4S1FQW7Feq4tvGfqyBMyNEyzH721zPhPniBMXEMzUMJTkUHx1sz5iudFS4XvokSvo5n65X1",
  "key4": "41CbzzV89ugdPq3TeFRNL4QrguUSncZQFenBE5wvT2o4G4SuEV18UNdFoXxNXNenNQHfr6LDbuuXiKAPxwgV49Vk",
  "key5": "3QqgGkXcv3zrAFvUPyZ48Zc8VRWAfyN79eRrfJVeiEodT3SsfncuL5DzNkrCohxxE2WENjHY4fVjvBBBdEY9yek4",
  "key6": "4rt6LrUBQjhaaXBPN6VCQE1aHtNCaXmTfcS6rzFuuPX3KnYu8jyBaUW2AbRJWbN9ZWoFMHFiScWMFFfnvgbBXyB3",
  "key7": "4HwkbchDbGf8WxZL7WsZhcmmf7J4vw4u3BVk36M9PMuDwXX6yP3hfsrJHjD5F4En2RP5UtSHdhBzctDSRciwT8Tt",
  "key8": "5D7EQa3LuD1GQCrKjMvTTaUkRNaw2cgmjuUZxpDdeVNP91xdhgGF4zrC4nYgev1LMJdQgjWVqaS6oek6Z42HL8b8",
  "key9": "4mpTLcdNb9kfAgoszSwM7AMth1tuHFyFU5ryoZZKKWJ148z5HQTVhfTsXVHL8hp6jV2xtECNgioaac5Y5Rwoh9zK",
  "key10": "25WmFizzBtmsaTMbri8915xbGi5nmgQLCRC3zv1NLfuDwYz9YiSbEzkojvSw8N8PxmmsMt8xGPzbBVWAKRud3kN8",
  "key11": "4cPwFYqE55NQWe1MFKo5r3mnPUw6pM5xK61JwX2UKGUFiCfg4NoAPXd7g2ythntuA75sFQEXuAezVv8fbiL888W2",
  "key12": "nHiap7ep2ttuEHjSwpmnPFLwFY1MdBr396A9pthYyLx9cJksxdYizcGhRGSTVwKand2msyMcbjehFpYKcE8Pqgt",
  "key13": "4qoZB9KiuqVExdXouopaFZz5bzAZwcQZG8eSbRgBuTLxMbjNfv47LW8HkE5RrdDiqdgfYg9AvZNfeZik5cfpNvJY",
  "key14": "2KoSnBAQMd2AiJ1H9FB3N7bmbi5k9aQ6SyV1tnaHp5DFr7bgUSjtWjE9MkGrRv1rc1YyJmCcnrH7FpTneEwR4yTx",
  "key15": "28D8t47F1Vv6rrD2w8f9FqSAxgprMgD4PAMbCmba2YEXEiL17UdfXaYACcuxo6wTxi21qnR2L3xvcQrhKrjNHiK5",
  "key16": "4ipFhd7Q4KKs1WPvmPXrJQUrP3ZotWLgHFgVYXFCnsnpD7d7W6VkPzYeoWAH6Drw5sRxJRYR7LF7kQ2r25dvFR3Q",
  "key17": "yYfosf5X6ZnMwVeARuCR7sRwtiBUw3hsJ12VtjkgLcKeiELQCBsJU4dJRXLUs4rRd2qqgrPgz27qa5aps8rVB9v",
  "key18": "24e5t2t6NiUKgfMWNhiC2CM7vq6moBR65qyPErfmQxuHB4gP3cRWRYHS1cHeEr9vE9NLXW2K59DuyAVcYmLL59Cj",
  "key19": "3Bg1652MXx9NgrhUBV8W1wQd5VASx33Z1mrEGuEZ62RfyAWDGtWms3dhYm6a4UWhNhxd8NfEbFAh7Lr63goBeDPn",
  "key20": "2XKPDdWYCmVrfeoeJFmYZcpstKmfpHR4WyYw6cwYAQRXAsR7Jp5PUZFjrWzXC7inebeBgRyWFo3EiwrjDUupdDDT",
  "key21": "2XLc5Ht4jHV7SgNWuHzVppkPNbsjHuzndmEA6g3nk5wb6U9Ec7xJzoUPvpHRpftuvrhQk3dyQBNVgsWmCam8HYo",
  "key22": "4ffPg2QJ1G1MDbWVBiFZJ5uDWB29vY3H6C1s8MxZAZH2Gy2cfAQYgcguuGiseSzFPjeqBG31fxbApVdKZurgaW2z",
  "key23": "2kjsTUVXchrXPBGZ1KCxx9C7AMzVA5m5vtVLLcerju6J3aqcfvcLJtRB2AnDtv2sogKsKdneWrtcZ8hwLTGMw9tJ",
  "key24": "4v8XRZaXcVWvQkYVA5MdDXd1aveazhqjSufVP186FUx2okAaipgxRWKwoWaxNW96hSVy5mMSPcPToz4XyuDAL88Z",
  "key25": "3ahmHHQQEkEYDhDZUsaH7v49T1AkLDuvVCvsqqCDSwDSQpYoDvfmyoYBEMtJeiY1b7NsYZugeW4sgqeoNwZTJho4",
  "key26": "2wB1HFho9w6xEgpUiCn2HpZfEvqfnU8qdB8TrVyxEGQmw4xxFhTjsJAmUJBYe2WSqT52SQP7VuG2vwDmMFgCsoNc",
  "key27": "4UodtQF4onCLz2UtTZbYigJHutTEsSRvBN9C3XtnLfcfU8W5F8GiWAMu2PoTrdSh7hdhn3UZFtdqJMukvZBrX4Mg",
  "key28": "4pt39KXj6JS6T1LiJH77C93eRhuLtSvP6xvsQ6gXFQy65F1UAJstywc9DCoTvuyXyw4sebpf4Du9tdFQBMBeBNVr",
  "key29": "2SZdnqjKAWtbSuCzhSfadDL3QrCfxPmEmk29rQEUEgUy9gFtXakMoAZs9cCaAu71jd63kjKsRBX2yksVxgoLkCvQ",
  "key30": "x5j1M37ARiGNkK8ACuBtFwXpxUXayTf7dfto7T9mgeiqhjHcKfUF4gQtLzmnRTtnBdC2JPXB3DaPHEBH6YWf1TH",
  "key31": "2Zf9qmiDjA13VRDU6SC8QP1bhMwW1JszMpytZX7mncuUH1v2cHQfsDRnzHNcfTSE8V2Wrz4Em1c53GwWGTro4Nxp",
  "key32": "2sSQiMMSWWqFRBT63R4xBCTmVU2ojHchPoM87au2m5xv8SGPdkChBzgsqr2c4eVfyKSuTYpU3uGWSXpheEEVEhEg"
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
