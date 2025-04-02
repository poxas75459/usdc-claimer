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
    "45DSiSNe66ncXpGSKJahYXbnxZjhH1wTYt4ABYrJSEoFEEq1v1ESzFStzBFSB46mWUb16LtiDbc16cobfZoBvk8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cfEgMdZuwxqZMJUgdV5XmQ7x5H2sNRfXjMEWWFit7cmUWv6kA4CnCGKUpqfggjjP6JA9QzhXQN3xt7YCdS1AjMo",
  "key1": "5h8DRC4sJ1y31L7oEucxxs61ZCroeP98FLn4iwmtb96PWaZZKjdd9YeqaVarq8hUbgJbLm1YdF8fsKagAy624ANN",
  "key2": "5NnXV5FUd4LQNzJ8Md4q2nqwzPJoyTQ61kkJGY8q7RbtGJ4ojRxcbt4MCUmp1Jy3RjTt6u8vcDqxjXWnWUh9282",
  "key3": "2v4T5jmPRUYA989rkM8eSQuakn1Eq7xgDU74T2uhb4k5DnYfBDvsbouaMQbjPda88NDWTgUXL4rAnoRf6BKriqV3",
  "key4": "FNgDaCRPkKVTbxFdsXWfrVLRxjUTZbn8TNckrBfM5gcMuDsfYypA9PRAHmP66BbxNoURyoPYUzamr5CBvoUZEZ3",
  "key5": "3DfzJhQ8gy1bLnPcqWBhKdkK254vazW3n8v6PpHrMFww9dLyzEkyaWvyir5To6rh4v2D97kKMFgQ4zXb6bhk15fC",
  "key6": "3eoTsiuNDjzggWQn1rkPTuimZQtH2dVyJe9KPvo3UL6QxPUX11R4Hnrc7x4nmksvgUz5TNmmMoooGj4MHHyWZNnh",
  "key7": "3pFF5dYJBLVnpyoBqvgVfHVRy4RFpPfHURvoZPkdbQSHNTYDExHLdZpedrnMsduYwGT6ctfyrZ5ZBURu7qxmGTSJ",
  "key8": "3SVFvYKtTnyxKK2ms2H5imrTgwi1jLVQeeQ8LDgG3Sdj2gBoJnTpscixAqzxmDB9c5JaXopVdTMvdW1nbjk5MjTJ",
  "key9": "5VmJgiR8PoYd1g8XsgMhTfhMRH9mSPfFQWUitsNjaCydpzBmwXHDsCbwLNuxhtWtfJiHZNv1Hw6RH3z41hSSAxbq",
  "key10": "52KVjCvZhEWsFp6rWwNgxwQa3qtZ3W5K27D6RTJ5JrgfkYGm7mHQCKc9onYVpmCauvm8z3GmoRnWgNKiVj63CAVm",
  "key11": "3oH2T2R8fjxq7Mjac3X2hW15koqP1R2rWSy554mrtRDxQKYndDoNbVnmFMPJqa1sdRG8fBjJwHCN1aQuwtENU29S",
  "key12": "2kJkZoowyw19dneNJuMb6ASaUbz8szcEKxVaqYBPeYVDreP5haYdtW8KZaA2JiN5x4z8WCFYPeRqXZdco4a3fzsc",
  "key13": "26Rj2GjzrhvDJZrpYqnkDtAFct4vVHvfkXKKVPSzhWYAN8eUgNifXVR32jFvoeCA8b22x9kGnkJhexzAtdRTTmMb",
  "key14": "2cBMY3nXy1UCh5cyTKkU7ZURpUUZ2VEV1kMe9SYpujZvL8ADP46UJKM6fabfaA7arwxJndQ5wmJfbwGTaDtt65oW",
  "key15": "Ccv2CEXD9EQtPr2chG5uvUfGqBCRxpBGEpGrtLr5u7JeeL3xrj5CkQAGFNty7DXmHsQAvNSdd214Tjif6JQMb78",
  "key16": "5Mj14Bwx1ai6xMupfGze2u9BrhG6LRXVhuMp9tMbgACgaB4iWChzwjrjmiQ8YwALPgGMfBUcZCwG3AcgSy3jQk8k",
  "key17": "4ChXZWFVGYt3TQ5fQA3sadDwtJZn72TCvQJZU3mwcpvPtukjiuWtb3TeeFDHHj9aJuGmGFyVFpK1vBgQzQxK8DZS",
  "key18": "2Esxh1J8vbNzXFzkstSfwZwmDuzqT1BaYBGDHw8oj8J1Vf5HyAEzZxTWs9sPK6a4LSCDQrx73nX6VrPpPwnidaMe",
  "key19": "2erCWocTo4Qkg8GhdaysbF1KDyjYnXrRi8s62u5ZmJHCbHC5zm23GG9BQRkQLXMXKCGFy9fWZgiqZB1M169TmLtq",
  "key20": "48n2bqxxwTYW3ffd1sj26RfH3Zr1SzySzMJnAqZTDbuEsnJBggTL9EjfWR6rP7MKKioMazoAjPBDS9aNS9zhLj67",
  "key21": "36NnZKvr7nEzycWSPBEVAoz33fkWrEfQJ89g9z4SUQESUyqptjXN6gJUNqkgMwzL9XHtZqdZvdQrUd2BBSbKZp18",
  "key22": "5t17n1iNXTEbY8QWubeEe7k4TTPAG1jTf8xx9YsUW52mm7XR6RmLvkukm9nQMJY8PtR5AURimfCBwnuDtKw6p4mm",
  "key23": "4MptVLpiba9SJUwGV345aGdFknB6ngtz96ZekReeosP3vHsecc4fDZXAbEkdmvkywFaveGchnHV2dAQr7BHKjxzZ",
  "key24": "2PNaYDa7cuJ4fNwyJvv6mckijCfq5NaNUV5E7LXs9C3zay7YjiReboeRGc4ssJWNpYtW4a9LNAkgrHPPkSLuDkET",
  "key25": "31mAusV9oLWnAgrCMjWcrVdsmpLAyGbjG5bBfi429TNQK2c7uDk7t18LVKG2wDb78UanDdkYhg82PVFBGFrFAwAb",
  "key26": "56AAbVZvWjhQzbf1morvsUs6JqhRn7vkCWe6w3BiFB3VbgP5HdeC2mCPXLJ6oY4RVQE8DiFYeUvL1d6bSAq9Sp9h",
  "key27": "5kofz2kJxDoU7uHg9LMTYKgoHE9ugaBDc3DpDsDjFeob8KEHXsmM9rAa6EDyDGVdcF42ERe7zcEEc4RFiJxovLVk",
  "key28": "2jp7h3KfTcLcAypde4GdmrYMUoB5Sf5p5Yh6DZcjvRu76H1SBPVVHz8aBfFWSfTsq9YvaXU2dQqbwRaiaANNGt5g",
  "key29": "5Ud1wE8YDoKbGcGuurp6DQYXhir4XsmXzeHRRVtDswvuU5tDWkbp7XMnkJjefuKtrtwUKQtxJ8DpY5h8rti9MH8V",
  "key30": "2pVgcDKUaKrdmxySefzzRLNkrBL6JV6FKJ9XoGcm6ZSnsQi52zmF2XZABBBg1M3rUE6ERrXJdqG15xaggH893RjX",
  "key31": "teDQG25NoGJzoK5MNPDfrnq6VAP1Rex76iY7hG16WJgWuTPZiHvNUH9EDa3GjXak2U9rm1eypAKP2w9XEreEMCB",
  "key32": "2VmyKa1DhAVNWj5KUbcXAYM4EEr37e1Zo5y6oTZ1B5VM8rKZrqofxtA5z77B3JECc66Zekwxgahky2MxrbiaCgJA",
  "key33": "5BTBXMFPB8RFHTaTfPQjdnNSiKiQF54QNmYuJrsB74QaSbBk9f6E61CwUg4872j9EDxRawNq8zMFVBHu11vVuhng",
  "key34": "WTzUtemowGBb5RPhEnmjSWxb3WvwF9HQHhLzuKg1Mwnuav2SQFBUhWxBAYCbHSN2sZCYCibsY3JMEBVLzCoPDki",
  "key35": "5CGSnnobtNkmCLZCSrT1pyHXvoctLFg9ZC8SdcSpiL42Fgg15KZEd5sduFW3deBtmCAwm2YjKr3gz3c4HdZzR9i9",
  "key36": "24sWrWsRZeTtpjpgQNofcSQq3u6PgTLgBeJYJAhKp5TjDDdopkRL3TgEVvnBszUg5WVczLevKL6RcjD2wFvc5avT",
  "key37": "iiyb7HKH643po6cfDQ8j6SxZtvpv414yCWjRZoxLGVcxjDH15yqS3qj5KNtbiV1yEE9oK96hy2bDgRYbE9pgWbY",
  "key38": "2c5NNJ9gwNPHNvsKfBYXJd7hLsxZc4PiFjK96iqr7yUeGAB9QPakQTtm8AMfQoDh6QGYvzGhaUyjGhhgGKQMvWf4",
  "key39": "5uFzxv9JCLUWca7r6irjQr9KJTHRw1MXm5h65HDkWWC9FmTbveAXG8Fxv7kzJxHR9UFcJxe5d6YDietfKRkirN4y",
  "key40": "5j2uZ37hQRvUKZYUUsLCmuNmHGYxre136oEyLsfAYstmDHSHrupcz6AzUZ2oEtniaGSPSYLvyqRaxJxtyubngMpU"
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
