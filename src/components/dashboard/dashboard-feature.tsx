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
    "oo53ojtcHkLqyzhNt1fssSrjv9foqutngcHPTRzkh3odyKkn2VuQGJYKMzax2iMUe2BCuquwsvJ8TSjiaK3XnQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zC4a7FEFDu1ez9YFMCiZ71zchv9QvHXM9WCZ9UXWefvErrAsunsoiTnPNvRA2w4MpvFrN5GrvHUqBUmFPm3RECY",
  "key1": "5mAQiD1fqyFi6bqpLiedn3j3F5VXwBmhNaZVGfRCiuQpWUnbSeKoNKdmnm4VgTtTLmaNUQDwQk73GR936A9Ss4b4",
  "key2": "fqjycED9CugMtTYhXgveTSDsgmG4WmosyW6caTCeQc1G1GZAQUAq8nggGBVZfqpBMKt2NpYc4BDQkHkPfk4egor",
  "key3": "4jRkwN56AzkrUpjK9d4CYTtGjLT477toZZDBEMyyt27tsqdSdfiQJ92e9m9JYhWoyP7W8nXMmWJeCbG8Hc2Rcn6H",
  "key4": "2jWSEFNqDxTNX68c4Vez4pWVceA2uu3TBta847jPCwDX1ri8mV9MehHJxefHVJ4sAqsqWqrzJ72opyTvhVGxozv8",
  "key5": "2QFuGXEPSZrALVxmKX7XKJopG9qRN6t7ZksE3tfjjMVDP6AHChVHch76R5RpZS3JVUz5d4pcpeUrZtZ25Hk8sg1u",
  "key6": "26K1GEDH4eGd5ygH4dedKCbt8BCpg9SHHxCq8JmPRBpoG1M8ZEMmX5DQSDD8v8S2F14t2tgxWT5vQ3ZeLhbAsATm",
  "key7": "2Jq46EjwtD2qcL8GVopbJGMDeKaZgtj8wYoavBAbWiQJqi6wT1JjL5mX2bUsqg1vVPBcwrxCQrvWeZnbfCGiZrdj",
  "key8": "mwF9c8DpmQug9NT4Qu6FocgkcbV1utBXPTnW7QLBi9ZrwMYoREvGPfrKXVqWdpUgyRRhKS6khCjmbTTG4dSijq5",
  "key9": "3q3iTqaxpVq9vUjbeAkHK2Qjg5TfofGeNusCZqEpfzTQzRkFLRMnNva536BnCwVtPkhdtDJtSSKE2Wx8GUQmKWGu",
  "key10": "3UK5TNkWtWScrqV5Uv2L2fK1gpqUJYGpcaJftT4Yjp8mUc8Dcb8uvbyvMEta6XeHm7Wa6p4mFzW8khm6prNeWCqB",
  "key11": "5Vo5vfZnMNu9BT4qk4RvSz8AegBvPcqwNg4jJZxM1mVv3YZXuubp7eDD7Fg8EDj3UwvbtnhDRRX3AtiebJW2dJAM",
  "key12": "5oNLRA74PaqbeY9JZ8wYxi4czA7WhdB4RMjBJEhRXrZyiU2GqXobR7jdVMfvKocGsxnwdsgai7qRxba7uhhEsirv",
  "key13": "4qhJpcZ4pw55oAbajgRcaEPqT1XG82T7CEZSnCXpuzWv1DZsnk9UtVVdSYccnM5q7Zi2D5eMkHNPHg1VXxgnpyc8",
  "key14": "35T3is3eHt7QWT7k8x99wxZsfwc5E5XBZaiFkfgkMZeCtdVsCjARiMDH99jBhymvo5mJTqnWBL5dHdSpBPtyBxrH",
  "key15": "2SL85WBwgBufhc6tHTTzRF4S4VYgzoi4gvi62m1itsoykC5bHvGFkBGpfMP6PdfpGnmFAJdPMUSSa9xuQxGKoG9P",
  "key16": "2eP4seyAnNwHJUTeCmdSVb5uC3Wdswsg4ezujHuASDxfq9321zC8c78ehhXqx6EF4XW196btfj9M3BzSVj1Rquo3",
  "key17": "5eKPEJSXMUGzY4pFsqS7LL9wUw32Bo3VHpEAWs12MLLnFSJwWRbdogeia3muS2VNy7atzYAXHZ1XR6LVUdVArX6e",
  "key18": "gyxA2QzHbQmuiZ8ZgdfJHyFqbbWx36FFCob1NRb7px98kFT3zo5psf8MuXgJwubY7N6ycnR1S1Hf6UrXPGKs44E",
  "key19": "2ozsXArH2UHChEjKAqKYacs6rGG58fFYcVpDLEzyLjzGYdUgK3eSSGNZWup9DTRtUrxJukQkB3eAFCM74xB9EyHS",
  "key20": "ntPNrY71Lxh6c8J1Mo9qHuRnJrQ23BCN3rj8YKr5VURD75ASHuafBtw6c9PdyT9QJgt5zoX3b7t49SysN2TpYS6",
  "key21": "37VEyRAJwvfkvrbstXKhsWLzThHSdQMaUdzeQzycsPws9V3Lq7YDcY4CsGHorZP3gGL8ktPSZsj22J3zXw4P5Dni",
  "key22": "2GdFY5LXkJQGAgHzsF9vuhJu6KGEwD9ijYnF59qX7A55yrhACpxC7nuVRzK7wAbtrjDe1G44bkRXusAuUCMf98Yd",
  "key23": "3FDLFYmCRsD76sXH3e9wZ8SjYrvZYYfjdELmmvjFJxJgvwFkQTNh3rANwErNoHtQnwoNUokFZcoJ99NKFtmCNUBk",
  "key24": "5SJ5JYaFvHgPRxQb3x5jyu9cUhuiLzLszBYhQj97Do3jzSkHyQv5E9cqtGcJudK2jJKba2wUkwpVFhUF9KPACdX8",
  "key25": "4Tvk8G8B7dE4EoTWBnMpfAY8qPySy17Wh9Ayh3MyKLsWaFxNdR7f7VyPc5oRZp9zo3vytU6daetf6BCBTSSc5tpJ",
  "key26": "2jg1NAZ3QHpvRCowwV3cbAgCPLgXHgNouGkU87YtmWU3TVdUd3gL9uRFgpLQmFrqe6TGwx8UjZogXAFv7JVSy51q",
  "key27": "3TuKz9NkBGyppFPXNzZj4zAXHvjpkz3bJypB3pRadmWhnwnoaih3WsH5aHWLxeEJtbTNQTGoE9eA7TD1wLXzsaHh",
  "key28": "i281vPNZ16tSrUt6F42b8ADFfR7NwWLc2Y74JyhnZfXr4v3m8g5iToxsvPr7yUKcC8U1cEgFPWRNCZ4YL361KpX",
  "key29": "24bTvGDufzRUkXUMyRVeUFuaqvsxo6M6aMBY1w3bzxSq5fc3XCFRYn5srvwbg6iYWZ6mkXALL3CK3LkEdFkTSJNQ",
  "key30": "4vyk2UUH9doyNiFXV8uasckMW9NEujY7LB1nkxZTy6xVYyxDaUkTsh7Q4yyzgr2CvNxUap1AakrB7mjNfoU8G2Up",
  "key31": "2UVhUbDHpNxU8ajMyouWnRxvwMWRZ1rxvXwv3SjWVPBiYgZiraHw6swy3n8HvkFgiu8eNpKujkh8KRrKZHZ6aWyo",
  "key32": "5TwGEF4ucmqpnbdksFvBFoVNxZGDrAKz3bfKyqCHxJB1tSUpoHrqHmi5MRUcJsQiDaH4To3bReZ4WCYjYTr74Gd5",
  "key33": "br5KUZmPG9P1RjcPt1rsXRpKhTDvi68SWjEEdMfbJfC3YqZ6rxgzJuTkdVFKLH27ZCLo71rJtMsDW7ftSXyJPBK",
  "key34": "55ax5SpSgULQMBkWXNoJotazQ5uLpSRFU2pd1tTXiPKAijiU5gjrkkMtWyyWKHcpGXZ7PsKzRZPZ1vFYYnrxRxsV",
  "key35": "3svLvnLi3eLtfFACiaaoLdW1qUQxo1QnjL31A5zajFCHsboytmUqig7mE4sr3SPkNqDktZ5EZM7JVc4vC8n2rDsx",
  "key36": "2PCYYThZL3VumEXj4kNgo31V2sSzDkLU76AHLZqohg7pCp98ekFyfoJwcXjSDfjhuyNySxNf6hVWzVxFA4CKbTTq",
  "key37": "4fdHdpRp2Jnth74WB1uH4wiQSYNfnFWbn4hceKsEXHjBxtpK5wz4bM79RiHYduBMwqNvSUEiXtp2U8PCaEQ2aVFS",
  "key38": "z6jiNtK31LZiAmhxWm6JwsgnfM5qfzzjmjtWnPpkrUwS8zwCnJWLf8snNhxGWZy7RNASz8qEABvWbmNFiVAxQs6",
  "key39": "5VGPdtCLCSyCxrXNrfLYjwxBHotz2STBFdjnqVA9MVRpp6Q8u6JsDVrNqXtqoneVEaDKuEu6hp6VWUxfZCsyqUPu"
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
