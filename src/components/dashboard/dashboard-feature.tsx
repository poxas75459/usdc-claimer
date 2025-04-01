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
    "2jheJhaq77prbgoQVDCUCXAEyaqSbVehyP687VBKdfmthqWv5cDJK8Pdcv856wzwANMBqj6oB4v4gtnB6KKaDyzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qevfo5BYDB3q4PvgBegjCtBj5jHQnbYtWsmwjAT6MqqAMWZkPhELTHjkUTWnFR6JmtDS2sWrSXKLG61L4PCYXku",
  "key1": "5qv35v5ZXAUFo4yuNNZHpv6TGWQH9BQo4BGgn8Yw3ishnidxbChEKmHjEH1Mjd9smqgDMGCJuKGptBPrGnpPeWtn",
  "key2": "4fLfv6xnN2ban9Z1HTDApuhXQgSMEqmDNNi7M1neMSX99a6nE5ed5eN56EKD12DyqY4gXbRiqr3nCkghxz68Etou",
  "key3": "5EaGT3qqwYcns4NH2HjM8gRzY6dd6z1R9VUStHoNZQVcCLWAdD1cYE6oGby5iS5LT33TbQ5ptQxyTb2S4wyqWFTD",
  "key4": "3Vt9p82P9CHrW3XzeesybHyWi9xhRZgDNoLyyPWbs7D1c63YsJo5e2rnfuDyxxBMiyDd8diFt2dybW7SBgZgAkPy",
  "key5": "4mYcuy2zXmYZ16qjBJiqhTagLdwR2vRePQTcFZboRNVCiRDehLtxebjBKvRvMrqPG6jSYzfW2YoegqdXwDf61siS",
  "key6": "4D5BydMos2JHud5faDLWTi1JmiZwm6TnfT2z6Ju1upLcmdVXc63qSGR2uEYZzMvEDEsuLiPxf447hLP51RWM4U68",
  "key7": "3tJtPVVcf66F43S2XpmeV3sZKsmyekdKYvQCY82pYNMqvaP4qzGwwyijdNuUYMnfHkTDc8zwop12zwWDB7tVJ6PD",
  "key8": "4AzQS1phQk8PjtMqWVQ8ReM71N777NTEb3qzDsDcjvFxY2wB3BTaRKSJk2GpJ9bj6zMPkKYib45mw69uBQnJTZYG",
  "key9": "3BxJjW5GyJsz87eNNSN18VLndgrWwm9yB92Jox7Xk9wELCizN3q5ZcJLiUiCne6uBLuLQeg6efYu6At3jpiwBNUV",
  "key10": "4xn5zox5eVSsByTUjbiXfnK5YjB2uSsB9wr2erc8tSWAnsrGGBgZQALtvWbP8VZpuFWs6rMUs46JnXQPbBYGd6At",
  "key11": "YxP57ekxtzjYHMq3gxFhWJ8GAkswjHqpY8w314L1SVNib2Fikbq2PpvhrxL5aeBPfCQYKqu8JaAtNuKMdY7hdsG",
  "key12": "2N4ZagS84pRZTyuaw7tyicjCamDyLEGYVLsYztGzUcJH9M7v7TeGqFNhgpNJBZ4zHtZXFzCoxscr6hz4sL8hTXgZ",
  "key13": "4byzrBeJbQfCRxEqp4psjfGwX4jscsQHpYWidxmf2ZyXLaDifC6ipvHYeAuoBTWrJi1s5k1q7tVyekWbTz9R8ukF",
  "key14": "C7NCddKJoVqosM4ji7ovHoEUk3MB9v1ehU2SsEDRpbjWgUaq4sDfXYmn5teEN7kMkVvhgGkLyXpfxDxNdPT9dUP",
  "key15": "2evfjuP9wwPZMeUXbiFrQt7jkAkHXgdLsZEUJ6gxLQaZmKpGW3z6SQTGTFCKqoyCKZYh16k5CHimWeMnec2eLxtS",
  "key16": "5z9APT7W8BfoqW2Vn3NweJvpvxJmu6FVh1YcSy3GAMDSRP2DrrsnWVWK4kHiSeEdtrK41ak96FCcNCHfJwRUBEE7",
  "key17": "YvdeK8vm6ndiSTgrJiHG1if7HCyKVhNYtbbjFgD29haZ1aZC2jNHJsSyF1T6n4E8vbkBqqduChR25d7CtVTgbe4",
  "key18": "5HQbwrWbG7rWNzGDospaCPLprjyacbDAsR6nXWEGcLCbmLWGyuJM7dh4EWoS46BVh3Vucqs8FNN4UtZccBxG9NpU",
  "key19": "464BGP7qJDyDBdSNpQMgU2X6EGLjkafvHeVmgfvCkQuubfjrhrNT4rZGjjxXx2XjV3kuG4SQuP5ytz1miqUjGhQf",
  "key20": "555w223zYvcg9KTapz4Rf57uWQqHkGusdZMssthPstC3zzxqm8Vgd7Qv9PjJwaXpf96E8CLGegrFb6FhXo4s8YRM",
  "key21": "3N37h1scD8oUqw6wFdnNS2ikVeMfwftNsMP5oWvWSqVvZcUV4zUWdA2KP2mVeMvor7e4zvr9hCmeDRavNMd1P3QP",
  "key22": "2J4rBsqsEhErwbGmqJB4aAydG1SSgugHvS8PMHuoLqQyvCUjVSKSnwCuTAsoYEkpQ16Jm8Fj6omX7NViyRpn3z9n",
  "key23": "2RoJuqWga7oTWeC86teawgH98jjPT6nswjV774BBGf6pqwwyN1nh76gHUkebaJX3JEhe8P6bRVLwKDAmvnc6FSch",
  "key24": "4x6fA1zvBDA8YY5WhA8CaGekZV1KJWdN6jokaBzAAGpSd7B48ngvsqBJcCQZqAAocMy5zSgtYdwKhD2hnpB3xhk7",
  "key25": "5JvMvtCQ5buktsV6MQbkUKnmxuhbk3feAfFx87atVVr4grS1NftDHozZ36HLKmLB4T71deryG6k2VhCeUYZnLau5",
  "key26": "2RZW5vBTTf9VHE8AvLRQgUnbEmrVtzmhSfSTcUZ58wFmxVVAKarJmDQNNaY3UmZBRPgMxvshwPMyoru1wo1ircPg",
  "key27": "NVPYGm1r9MnVh32qvKXfoMqupQWEUsS6SMvTyCGpAbKV6G4M2FivgxRxUuW2ocYDZ3wuX33J8SBQmrttrUKXmzC",
  "key28": "ArKW5jkVMj66GU9w6uQKQx9YqFyeH56Eumyfe7ZZVCFhbxV8JwSpMmhN1ayBqAqtkPzAwJy7TJqtWFR3AoQYLSB",
  "key29": "2GXMThrKYkPfMNYNMLEJ2UktspVWEMBSNoq7oUs2rgCaMSi9wVFJnToSf5Ctku5xdbnibMgcbsXxLynhxcmwAZ9y",
  "key30": "4KHpDBv6wm1hbhBuycJ3UwqE8FW6gNUUt4ckwUdcNK2R36ByaS71nvXspBFi57oJkAUC5J4JGeNfvdTsuZG4h4z6",
  "key31": "2GbaDnMEmWNQovQpmCzc4zA1dkaHi6oWqcVs6yQkyXyWnGWtq6Wm1aFDyvxgT4wx22GjxrQoZi96M2WsipGU9KPr",
  "key32": "21KHkeT1K85YWoKFxyBBP5UFaV59S8puhvdpHxffVaE5ZCBjVZAuWWeUs23FkBAdJuUnarkrwb8UYk2Uc3jLdbJe"
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
