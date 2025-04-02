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
    "2DcyP8v3VCyf8dsWCnDg8zPQ9iJhLaTMWVt5XoqzESpJVUk3ashsub3oPjqAYTBqTVU7wT5asBmxo1jGotfTFK6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgm3WFH1PSm1PNRnxgH6pevRYLLKWjpfobsUSTcL9es79TTocK4b9PGYQ3FE1vEfhwRkCQeTjyra3gBWXPvpnk3",
  "key1": "4PH4C5wKWC2brEJWMXSWbcpioS16T3Gkin6EnV2jTXp7GkFcV2ohmJsgWcgNTvFowHGezG3ae2JSVzaxsWwERVL4",
  "key2": "2dTMx83JYuDAJaUwe9HCHS1eHYFwzxD1hawrCrKr8e8KbZmohvFUibJHB7kzYxPjzn7QD6HBqfafei91uhbpkU4U",
  "key3": "5cm1v4ogog3M1xZJLyE7hNQBiWGHSHdmqSznMX6eA2ci1UzM4BU2kAhZMs5Z5T9gmZD8gfqJyaWDE7MsySiGFtEJ",
  "key4": "5Gi1q4uB6u5L3ZY9oLF2NVMMLEC5yxwxFTCLeHjKeDnJUaBE1hRMza6aXWtKxS5s2vxoih3U3cbmK8HQo6a1E1A5",
  "key5": "4Cvm7Hwss87DDkKqv5jo36ZhfoNV586R7447TMnmEoFELHci2YQxnYaNSH21iCJrhTyDk5YkMxfyNo43s6Lq9e93",
  "key6": "oMir1uCrb7XNjEFzhZPW6h9eee49xAXZumD4ivMfpc65R4hZdYkY9g2pauNvjkLL3z2afk7vB2kTdb4MnTGCujx",
  "key7": "5PXMbJxJosMknkMk3uWD7gwDfrLauY2Ex91njsaJQxRY6QhxBMTeN77SgnWBUx8y6F4wfm7g78sZcWQYiDCKVUGE",
  "key8": "5BanB6kZQ7jGAc3bQLXRnJT3q1T7VXCwuujFp5ge3cCpaL11FAivnUoUVedhK1ojdwebi4pmhYHAPbLRhuQvhEWS",
  "key9": "4md5mBGx7SPr8GLq8ydkMegCVzYfUv5roM92tWVWWxLQHYhdfWKr5Wq7L7nV4Xnz8onkRH2BxrsxZqd6gX18oqEs",
  "key10": "3cbwKuKM798veK3mbxS1mhR945oFBStoJ96vZEuBEq7TEtw5cdVqs1fS3VCWRRZsW7cz2mKoFuQKFe5kiUhsbWUW",
  "key11": "25U69xZrT7MBBV4iKFWcJpp9Tkfj3jEZMrHYt9fiqtf8ec9yBqqXLAvSuWx76gfzgGsnRTiY1uEoK8qFezatEtp4",
  "key12": "45HXKr7jqBKJRNSgeJ2BVAjB3Dr4FmMit3CqmBXL9tyuyJ7zkuV8AGMo8PS2z11RdG65BAX5GkMRVC5GRscgHjua",
  "key13": "22XXcJ7ATBhmsApLB3GazQ9syKABeiYCNMW1rTLozx6YaezWSjk2r3h83jEYPo1LN4gDaudVxkWSNJwygQbyEwKS",
  "key14": "5JPAca5sL4Fd1qsCxEVBFMstAJiF5oQWg9JK3Tk8A4K5oM68tk4ftkcjiqv2V6uWPFyhkTTbq129STzFwmzYVCPb",
  "key15": "3S4HPUXQTzAXSeewnV7HvLmzF15jegqhYawCnTDKVVAcD8uUYfFBwZUR43HDSG7TqHojgetX6noupjEqaNaVk1tk",
  "key16": "4MHfZgjqzSL5DXGtEdpgsYbwH4fPgUNSgUDtSA6YXTV9Zt7RSvCe9ZqjJe1zjVUhxK22Yf42UPHKrFyzqqSnnxkD",
  "key17": "dnNXMK9GafsmUsqwxQQ7ZvqQxRkDJnf3dRiG8txHAjfJt9zsYkRvynnaMBQ3DLwLGMW2xHXqfqxA38tcSvDwMax",
  "key18": "33eFQF3gvha164nPKi8druvresnx2ZB5uGQ8A9pn82VE8jTcTjKRVHrthCnXKyjZzQR2fak835ucEA4eD5bXycm2",
  "key19": "5kucgEb5j8WToQ8ckdfcDkcUgMdWTds4GuT9Db6LyYANSUq6SRN2BZXbUjffviryUMpPNSMyuA4C5HCBP3fQeUkH",
  "key20": "4nWRRVgmtzeKLqbDoQyT4rrx9yp2UaTXrV99NPCpiMtkmhU7g5Xw6njp66NAvww6T6vL3abX8dNeetjYtSQqtu1a",
  "key21": "4TZMkCUzXuGMSMXtFqPfPhPef8ATn5kDjYuwEgvKFWJ2eSWnn2GmJaPjwD7ckN6YBVd84f9QEXpEMRapPBFQ1GP3",
  "key22": "5B2bfSPt5WGv5BmRA96z5e6dLJg7q2JBLpJwde6BKeU18ZFceiQ7edj2WBZ2FwtyfZLQK6Yo2otPjNi11Joxs7uz",
  "key23": "4xczWHssBYskzoBEZHGuXm296oGEnnSxEHuqeh4RnynPF35NUtpxCCFurLNxsbGmoAyx79gvz9pew3m2EBkwHX9e",
  "key24": "4KV3EDpCDHYN7oNBv1LfarFAdZH2GAqigz6VpMvxVeVd7SbyQd1YLZe12UzFKQqWSC7oaSwuPNCZiekGBxGhHQpa",
  "key25": "2YiaGg5VRpnbSSMPthLK2hoh8HxNgcQ6BxtsPD6979HkX2xHAqdswRjEzoazqhBtHdwxSM1rfMNo2zTFHFmzZHZX",
  "key26": "65T6pfMNp8GQWXYQRZU5wCR6CFf5CwoCknJaFPTjBqB5c6aus5KZhRABpdwFu5sCxqXmdjN5vP4bsXhqsZ9ozGcz",
  "key27": "2c96379quJJUC1TeMoibgzJrfniTb5g7rJCvF8vgiHJgKBjEDGi7JpGYCBYRGe2n4tnaDT39tU1hGq26x9Xqstai",
  "key28": "5sHKY6Ft5dFzAtLbfXGrQoJVZNrad6UPjCEJoKTmenSeuCpViTw5VM2wDxXcpKsiU8pqmFmFqXJbRcbbBJhnSVtF"
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
