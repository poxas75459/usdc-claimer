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
    "Rv7MTMpZPamk8kTbFi9kMLHYebuqWigyeYxVa6XwRGCtJiiVvGMZhrMHAcSCddcy3miD3ge1ecJ7Rsjz3YxW7vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FnpuEdxp8riUv6uDPy84nzxKPUg7XjSgJDozCjLgMFJC7jyHDyrmiYxv9sFY1pcTwepQYLFMvDcK9V8LWU723FB",
  "key1": "2egZkPpUNJM2HY7w1WFjqNixKFXsbpfsBCjysBcJ6PEpdbcUHcKFtEBv4jNvausD4pjGoDaLoVKhSgU27k7bVQWg",
  "key2": "4oCJsDoGwuMR16fSzGU9oSTMUK5DfNVD9at7K1ej9FirFXv72bDe5UdYLDDoEumNUbuJMNvv29Wqktj4iLyr2v63",
  "key3": "q8pcVfRmA94GBiJBYbkCs8Qswi4EDNY62eTYQ7q6FoFr5wq9LNee3Vi26KormD5cX7Y8PAQfcMfGsmKa7joZsK7",
  "key4": "4V3DxfGspYd4Gnz51aFXTrdUq2PbkKJ1rTdvpxVwWd3Vg6F344qbMH8WAs2moDCniGcscy7BaouUHj4kivZBheWh",
  "key5": "2YRZhPvgTbsEynX2wT2HnaA6L7agx5tVRSBwQAWqU8u4SJeQikt4mtyk3pjAFWvQ9YQbHm96voxLdhqQSK3jWHrC",
  "key6": "EacutHkUKwT2d5h3AUBgAvdqmimLeypk66pqFyMuHaPsPsNFJMFxsT1doggAipRct6tzb2XWSZCd4y8H6KPyiUT",
  "key7": "3F8TGHVj9yXF9ng6LnB7QiKXMg1ExzwFdh5ZJEL1YLBK3XfabpnTkYncUzxPPA8oj2XWDzoh1sNYxrQX2y4C5x6r",
  "key8": "4iXBwBPVEGWYkDvyeS4AhMvniMwaQ3Ef6USCWXf9ZxNz6J4z7G7sJboLN3BL8XbcQJJATS1H4irbqBk9YGS2zNQY",
  "key9": "4xxyRRMotPvggQPSh7ZRSf6uUgHDxMMKSc2LNUd6zEiwx2n5oeyugaoMCf7WBXgpB8rZqW14WnLWetkHtmB2VZxf",
  "key10": "5gTVTCveQVKmrftTaxw8PcDHAUd6anjuNX7G2C2SUxPtuseeyRkCR15tDVtWWwJhJsW9XpeMiirg1NmYM2fvR9Q3",
  "key11": "5pKcYoBUCsCnxP6Anjh7QAc3S1AcYAWiYfAoMVstYrnE9UyeAcP9wgLhgDXBmi1JfHS9MS1FbsenqXywWgYiG9L2",
  "key12": "2qtmj64D1MRo6Nmi6ztr2tm21EGQZwUGa9bvGw9cAoLMEfxccbPUZhMx615tqtmpyGWcrWj4rfotXmEm3DXNdwHM",
  "key13": "55ZGjAvLoxCmjmiYYR7c4FGeSRrxhG5Md29XgAJtmiHXGUeC8rAocHxQsayhRQkW1gZ2DQ8DXyM53QKjwuNKa93n",
  "key14": "41pK9AimVz5zuGZNwB3VvgBtJ6DSfxPtTdvzpj5wQG7Km5UsDhZRJJG9LGawu1Cb84XWiMt6rGZvBDVDyjf2DNiz",
  "key15": "2NZSWjiJKXCvkYsWqozvCwacsEo4aVXTFuaBTtHZRfPMPLgfJXXhWKc9esLxYsASxjWSgK8AazLYH7qT2EahscGX",
  "key16": "VVAbhrq9ACb1MoMHjwhBRtRji9GzrqcT19QGvqU82r6hF61G3JJ5uWS73dWsw7t8NdAZzt9GEoKbEPS97GYBij7",
  "key17": "5rtPrm868X9K5E5FiY1R3n48q4ibQuFTDTSf39MmdPnXnPnaHi6dUQyTLNjy5492zYqab7VsKLznmUnezEi8KCkx",
  "key18": "2Fi7qj6CMSpiKtjMSWU7avnkbJC2CsdHbGHfUc9ExeH1oymCCg1RRzF52yazXPo96a5bqPzFe3pL4j2aA9huoH7N",
  "key19": "5YcSKvBP9yVAtiZ6SiPF7oXQfWSUKP3ee7eE4Y65eVsutMC3suGY3FnNeAE1AE2da5Bmdy7ZhgY6C2nTFsA4TjEw",
  "key20": "5cR6tQCNiRnV4itkMY2dAzJt8D1BeDnsXCtPiFpF7rHn4BW4Eb9ukbPtcnKKxTxV9hEzp5Qm1fDJRD9AoYbrSS7z",
  "key21": "JwzHTVEL3fqA65BCG4QRWLroXUquXmtjejhcJnBU6LaD6FzdKbNb6R9RPw26r52GKbFXNicQfQocpkHfHLAqc5X",
  "key22": "4FNdbqyMWQAqpNxTNn4aYCby2SgiFSPZ6JEtUWRGU3Yb7Y4yxCrvRNd4M77ZymJnTYXjxwVVcQ6iT2q4r84iyRww",
  "key23": "3unHnG9MDi1CFEKpkm8PtsX4SvTjrucNr2AkuAbUY9C4qFVbkQeJS9YvaWsCxXy8SqnyP5nxxV92p1AvghJ8qo6c",
  "key24": "3g3TtmNjUgAFcnM8aqa7uzN7eE4vt3DePymMtQ3qns6ReFzihHKdG4t4GSG9dKGHwkj8JYPLMxe9LFsnUVUXqkm5",
  "key25": "66HtJjWvojsoMw2ChSoaedUXTYPMHz9Xd3cPB9KjmhZu32ZvpzKwoGMEfzyHEaY2vip64FcokYvAbV6taXKbFNg4",
  "key26": "4y3eiEfrcUrQj4qvq4ZohsHhxcRgkeGtL42xe3xzeKAa6MRw3xyopSiCiwWAzBgaqGRFMUNmNthZp9YgkXJuv2w4",
  "key27": "2vG2Qoi2R2Q7Mq6DkvxMbiQQYUBZcTdFUg8bhK3gg5maNoXQZVkBxCh835CpFqVdmruxSVrthXkSL26e2gz6cygy",
  "key28": "4k8X9V7aBQxWHn5YmFic8Ydvq9rgDRNCsupRhgTb6rDZocH31hmcaWGD65eBwykhEP25WnZ1rNoM4Gsuae5L3v36",
  "key29": "2Y3TnNEfBSebXSZ9YULoa66nbWaKYhUR4KFsmKTXDZHMVzjwRtgMR83ZdiGDYzHDThFvzcsUtRgYvo45X5yamRcC",
  "key30": "2P2QBVkFe6LPpZnFU9xwRHmiknJ7vc77qABTsJe7Mm9ZbkoV1K1yKhY73nViPHbravtrT8e6RtqN8XwKegW6L6ke"
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
