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
    "2bicj2ybQEU1ss7AWSWncyHHGpGkkFSVPCNPU6GqYKnwyKKSPigtwTWbaTVAuHUbhBz4nwWtvhffWJTBvdtybQ2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JqxeuFVaFfARfta1LM7G7qoNsZGe1e4M5ZjeGYH7NXdpmsSgxjFoweJSE4AyHaSy35tgCSmQGT9Q62bNecU6D4Y",
  "key1": "ZoBdN1EX3tu5WrwhPkPXk8xaSosE2BVtP9b2cCm8VgfjcnxJNibyGUaRfgMMnxQUyJcvSchW2eXZ9bjw2j4zQHm",
  "key2": "4WeRFeQ3cy5tgaGBKKD5apr7tRHy11bB7f92Ky8cXbmz4d5bzufyjZyhS48scZyPYePCssHMSwQ9f2fksbchDz7Q",
  "key3": "298yKj8eduh29rw2uM5hEq5wt182zeiUSc8pq8xczkTuuJpz6KyiyDTmzb9uqdrfGQhGuv3cKUBUJq8esVt3wNvx",
  "key4": "2dwbiiT7YzgStyq61NfHqVYkiNXWzNgEKFyeWagwomRq1uce7d6ysrsHPCXSxWZinPjdceA2Q6nHqn3Proz7e9dJ",
  "key5": "4deuF3z25GfKFpni5fcweBar85iS5RWEqaJaLrfJ1A6A9BQV7LKQFemH25FhN9NMP2JSdbJmjbckfr6P2MigSLi",
  "key6": "Q7bPSGSuqpkKhr5xXkqkD5fmbkqom5Bzktjqib6t4NJaCjfbcxRw72rJJaePtPiKjvJJ5QfELhvobstx4JudinZ",
  "key7": "3BKowrVs169PnTugw9K98DiuPgDt3S7LiJsTdAhjJu6bBsXCfCTA7jPjHNXLfSufmTGoJfjpmg9suTR8gqQtvfKA",
  "key8": "YJGykHHpoRZ79NGnCndv6z6iBYDUwhe4UvM8s28CHnYctUPtXWYEKB5qS2YWV66RDNhGmZaemUU4VVnAudJ5e2x",
  "key9": "4ZmrZsGyNniXuHCPqzgkiYkQDPWA5p6tgZmPts4V5tfgCvS9eX1aZDbz6hxu1iVmf1a7hDrUQhKq2gJQ2Vs4Fz2c",
  "key10": "52bxiFwj11wMr3DK11zJxymv3i9j79aN5ysxXfFND3nE2VMBL9jAF3fEfRAF6XAhNacVJiHDdQFR3kBzYLaonHwD",
  "key11": "4Qc69dLCm1ViBULTACJFu5Uzm6HC7gLLae9C7Y4Rx96UzUZtsb6YfRdMeW9SPWPbmdFBGwRaesarxWVz4cCBLF2i",
  "key12": "567Y3GzXygQj6un71Fwi9aYTiF8fwR8FbJ6j58V3PsTCveyxZJS2fZzjdquFuXDo6bMPJfBgpV4Gn3uTjT28oyZQ",
  "key13": "5coT1xzLuJfmXCYgJ6Ah4xYZ8dL9BMUsLo1d229XkUYsYjwNwDKNEJr6hrxt2SpL28FhRxAN9zqV3B9yzDZJjFnk",
  "key14": "5Km8x8cm6SqH9EDQfQVLB5aMW2NcFdCiQUEgM1TWr9ZA2yxFTRNiiMatMymaEq9mgiyHpYfLPPHSmTWeU51no412",
  "key15": "2fyzF6qDAxWcmcQtrh47yq5iyHnwFeGiiKHWnJcH5TJdyZ4peKycs4XZam6kPVr8TVsWkB37FpsQdAdJCuUyjqfB",
  "key16": "5K2aaKZAEnCoCZ6FKCvnP3aiLr3WzH7raaRpHuBxEvWVbheNMv5RT6fxdESb39g9LYGECdeP8wYKag8GcBPDc9MP",
  "key17": "36k6TMR68L5iwwe956cA6EsJCv9ikpyviff674QjuYTwxrFxB7hoy9sdQXTLTZEC8gjLMwxdPNQ58K7zkd4mWar1",
  "key18": "3PxaPLZq8RC8Vw5RuxFb8iBExz6LboNwHHhTNuaR8WS8TVtutek2y5r8BnE8z6cPLE8NgwBCSoPaztLW5of6y6YB",
  "key19": "62fT469gLwMz8gwiQpc6Xk7bXMniVqnNX2zqRyPPqNjjZseaUvMnMsBctzmjSDXjM7XhAuYeigV5fAJo58VN4BJ4",
  "key20": "438GHCCGAz1BzBEMZwFKJU6GFn1iADChW1Cx6rWBmSyno5ed8qbrUAp4z6rLdjEuzv6YzS2a122MuUxpk67YDdpG",
  "key21": "3bNcVw1jXj93oBCPYsSrTT7UiWZUKeWiBK6gXkMbq42TEmLQPZn4DstGRsQxNGt3BsJt6RSVNEHr59dodRwFPAoK",
  "key22": "3jNvvKtHsWdu1dpB8cFbduwDyrwMfAjGHZA9RvYJ7QF1TzuJUM45JABH1giBeNGAMjBsQqiVRBqPDMWneWLddrVz",
  "key23": "5uuBugnkeLVXfJnTKHjoq5NtSFky2yNb2Z1rogcmTZbQYUFW2EYEcMTKo5EQgCVHKT2CppnbaVKbDapG9X1FbCAh",
  "key24": "4wenJ1AuBRXimMKdUMaC7h7ZJGLBJ7veUKKpHniSdH8c1rKBDHisjicvSVM6iQgXkfexTjh7jDc8tfoRjGxCAT8T",
  "key25": "4pkX7YzUwTuxAGzxTwoeoYsTQyKgnfdu1pYwDvgsZ7ka16VFbkapkTNRAH5E1e3x7ccbHrWR9caF2o3zYgwbbHKs",
  "key26": "5XTq4cBrntUGStf58NYE1U26jwPovd6sYuFZuuc7Q5fmnFD41dmvXgHgSW8ge4MoggyBrJd6zFS6rSeCaDtxjLPX",
  "key27": "Zg9tjRUhS5gZdAHQU7LANjXu8ACKU6V3UayA2BXe7vxUETvuyZZM4Ltfqniod3t68trFF992FfajfCdM5r69fW1",
  "key28": "3ic3rupC3NiFy9FpzADzdxvVhXphQRYiPP7HneqoGNnXqpJrS6G7qBVN8egzmMt4Dcw2WSxxPBGniss2zR6mHeFd",
  "key29": "552CZpaN5qHYCJ7RD56CWMBrgBVrfwVqqtFnYWmKcwQbhkYdQn1vMto1tQESgW1uJbNn1Xy5tUooMWxUR6qW4UCR",
  "key30": "3TtYwLhmiGgMSV3aptpxtVMNjiftmEVCybNwCmM932Pxjd63P4tFGSP9o6hyGv3hwbrQzBQ1q7Maj9DXb2cu9r4e",
  "key31": "3rwgmaPTygKbBew8CWAEGEymVUouCTjvSmwHGs3a5W4om88ADoLw5pczNFS65APuXATz8S2Z2uNPCB9n5kAWMgbY",
  "key32": "5bJPdbrhphtuTS27qjASd32NoyprT5BWnFemAvdbnKCsACDXeBxyGY1nJhRYFQdJ3txHveJWqjpDbshtvg7hQe4K",
  "key33": "3U3QYXGYT9UAtv3FdfCVbVmmXQ85vrhf3RQudYw9TRt9UXXk6ZCjgnimrgaMoqvVf1bmDrny1rS1M13D6krLRnK9",
  "key34": "4V3CSwXN7qBBTx3PtqEL74ZFgcGJC8NESpen9AmSnYPnUqtNhk7cY8DSQHVy6tYYFCvq5zfug3RfgSvkC7961Q2j",
  "key35": "2QZxgs57r7fbevUruLaPqAeS2auuPeV7JTzNczBekWne8XqWmnboWwjcn2d4qpMKna9yTArRir8XnLQHxAZsntZq",
  "key36": "4iCX2bocjw9SfYCdUDFNPUGzWAqLmEp2wzXQ9rNkM7Xr16xdaFPCtKE8ESxWLodVnoKXHBHaHnYDFZ5MxPf6am1F",
  "key37": "e71ddhzsgpvrto74rfQ925kNDb31LBvRw5L6wf2FqbQ6Dh1jrhRQNM7mnymt7sa9sbGngcxAAXXx1ex7Cxt3s1C",
  "key38": "3A9QMKyz3qjQCeec1WQbhnv8UtG8Jgztg34vRdCYTS35yb1fj9fynWQ3NsskSxqCGcuhQpwhyMLHHcE62wmVQi2H",
  "key39": "54cruaXJ8eWkAS2bmXCxAftCPjEBTa72c62qdeun6ryanDzZpkq6j4fdjqwNXBGeQJKkffhSPBBBGvgUGQqEJjDh",
  "key40": "27gEEg52xDy9fyoJcwLenhcaNobLuqGS5EBLyrpoBfQazxYcDscVkYAVRhV8fcKk2S7RnCYXfAvTVupfYV2SY19p",
  "key41": "aFmwjjdbV6sZQ7GaRVhrJ7n4GX8gkdKawdBvQrXnoiVqXqtUufmuoaPjLhTawDcSgFVQ3JG4c7WuRxaFUp2iGB1",
  "key42": "mfjxe8D3JsfC6gT1xgYjTEsfHSyYD825SYoZn15NQMie8vFEsTecNFn1rT959HiGJzMqhmv9ngxxHfzjLAjepUM",
  "key43": "3zqxuwXhAgXKbH6uKZMktznu3KZVbmWFhpAgowKm2quVGp3NPKs1bYGhYiTnxnu4x61UJLthNL2FQ1uWjueN23Ea"
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
