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
    "4xFoD7b29BryvhBXGJTRBv5JDhqcysZfgi72ADjfD8deK88N3PptcLB1SZpudALVKFEASB67phN5Ax3WHZaepqkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yP2Bw27TygSefYn1CSpvYYNABVoqb3aGFLXSRZFrscurFgXo4cChoyR7A7CLw4VBKdKjsBLvwtKpfYN2v3kTywf",
  "key1": "3jtRqzSeXGzqFDqn4Hzp3SMSekX53xnXj7tKhoSRHUzWMULYHkaD6nQ8PcbdSBqRgsyqCTjqo6SN4t23XffgqSvU",
  "key2": "3VdeAESPkh7WYvaFGaTiRuuGfMw7e2rh4y87syn5PCJoLHcpdLnCzGaEjCcTFigqghf6VnuRFRRq1YFdefExRMp9",
  "key3": "uJPYqW3JdEVXzHMHgxSeoBb4HALoY8HD9fbWA7xszmjwfMdDS4fcwHyV17c8Gb9WXLwrjSg1F1TvrXgff2Ea36m",
  "key4": "K18j4L8YD5oNj5zTmUwC3VRWKMndMAVK6Vd64KwZAKvo1nS6S38ULaFL8xQegPtL9ZyQRvyCykZJ9DZwduU8ro6",
  "key5": "31bL9teNQu4qx7KHrSFWsoTYejQ5oNmSsLc5KRdu8EbmehDNx8cwfRecHhDHoN5Hice3XQ4pNUHLox9jQiwvapL",
  "key6": "R64n2pEWfED9vnpB2JwdWaCgPjuenxDCkxkG6LDTMb4JjMzXDqMwCypPcE8UDSiEAAmVSERzy2eA9Ak3mgEp7vm",
  "key7": "5teXhngTRRsX8pwe1uFkAPEDXZG4HmrEJ6g1YgePmqpjkG4y2a6wxNhaKSa1xbo1qiFQAL2LxG9wQVvtPtq8SjTw",
  "key8": "4vXsBt6HbCqVvZ5GUpXVqWcFeAb3qhZdtygU994ZHbbVZJqiPcxkiwPQSFejc79BFsUxgd3aJNLriNVR8mgjqkdy",
  "key9": "3oDAq8a12pZX4w8kRMnxd8cSHiS8atLErqyJ3UkeuZ7Yxu1GmqoYNPH2YN7NKAb73j8Fp5AtJobGxRRuJG9hEgAw",
  "key10": "4m5Rs8efi8uyAVWiSJh75pcVAzHdsuSSX71W2GZeJKTZ4beuBMVpTQFnQPXYrMihxXLW7SrYbiCnhN9BQAhzktXe",
  "key11": "46PbffZ4317B28bij3zsNAjeB3mfbtmdmrrJSFLk8wX9rEty7yCRbN2AuBQk5kWgFMnx7jbnophXnFQUgGBLcWo4",
  "key12": "4znWbXysq1g77nKbFb31D1q4KapyNSHjVc9X27t3L5A89fihQGbvzQjP2fbvA5wgDp8KUVREpYYy8xjNdzub4Sr6",
  "key13": "4d2mgMUU8FKi3nzjSzW4dtyJ8fsw1DeoodJ4ynpvUSireYjgs5GQf9FgFFWuLSXm4eYFJ6cVaq3maw2aX5TLDJKJ",
  "key14": "3FFjpSJzKj99PKHGBkFE35E1koS8dkP4DcfaP14HWKKRzSs6cmHgvNkP3bfSEaRAoSY4CjiNgBHDXiQYeVSTXvhK",
  "key15": "67Vkeibc7HmFcwnxzHY4EPvqJdMMpVKzdseksBVLJNWGeXQf6PYvYmvQY1n5UxebcaKjPY77xTx7mm8rSFqzXNRw",
  "key16": "mSKpAGqCsJ9ZP189zUYPmG9SafCHpux9SBZaqejNrAwYY1UEVUpHn3n4gF19D413fR6Lgyb1tL5sc7rgc3GttQ5",
  "key17": "2hE41nBpv8XNAuSLEQFbixqDKypN9P46mj9EvbJPvc33jXTf4uJYWCrM33kFjDwgFzE5Epa6ZperXu5y7Mi9jRBr",
  "key18": "4vC1XEqen2gXAS8EnswSXhXxWDVGkDTsLUJThs7sJVLCjtzvAAaCdhLEf3hSgjFoDDGXYCH8CerQ5A1yUoSYuuo4",
  "key19": "4Zf67vsMBwKU4a7z64cMpcY6SjpvjTK2M6S1GuN6VkD8KD4bB7yGsUjkzbnFETnhfHVYUbGUkpVuNVVHYF76CYw7",
  "key20": "54XkksCbrZaXdUbf4NbpxwhwitHsN9wtQCLUzjdmw6brqmVLb92c3DATwADMZnWWt8M3t8HKMYkcvBTRfPaUKHM9",
  "key21": "28tysXteRz5aXhykN7nwbReCJsjW7HLsYVWXnThobQYyGcgzxNfg85rsAU11sGT1J74yNT2FRAjfHu4pnvVeodYX",
  "key22": "29KGaGWR3xc765NPVSnVmE3jJvMXRsPaWpnQQHY1RQVoC8nsMRZ8Yg8JHb9hGf7XoERWV1q4HAHU92m47iHvCXMd",
  "key23": "4vM6TEp9Rb7YacF34iKNQuNUHVwe4uy6TsYhfvnDC8xeJCpkAygJXSvAproL2EgfYpd3PK2pqYhZnuwMfaseK6GJ",
  "key24": "cHrmyqg8gNA1MYuSF56A85RuoK6y7B5e6KCmSP6Qx5Vj6koqbPwaqzJui2NB7aAn4wVV8YVSvCEwyHs7njP2Gce",
  "key25": "5kocYGgY6xAAVU8NHr8pWenB1XacGf4jmCBFJT4gKKdGPDsx2ZKanQ4tTXqbBNvvLSijnXFiKcWzAwGGQe79xhh3",
  "key26": "3qU9ZMp6dxoDxZVwomaPBpMEtydhNPr7qZVAdaZY1jmApFfH9sCvt7u15TgC54yKvp1zCTvCWdyeqMZUftgFRECo",
  "key27": "4J5XGHUpPHEGKxH99SxEZ2NaDgkCXUx9Us7xpzza89xrf97Qi1A1dFStbKYdrqNXfcc43FEArLBtbxBp4pLhKi2S",
  "key28": "3EQbZ9K7f2Md7qxQuJjQz8MNcuorFFEBDDoC9JaM7qd2XLyZ8Xq9Tm5U9Dj97YPJeHJkWJ2hZ8oZFUCtwvxup8gM",
  "key29": "5iPmzBKYKYWN3TdCwTcLdbRHYx9Cvh9m9tuShgxkVNMhx6hA6jNb12ePcWB1Warg1FJ4h1GKKna6raXJipwT3Nes",
  "key30": "YFuS1LrVPMYyYhQ14gzSz7Uk3F4EiKh7KGLpWrvLFySZhDvXoRekFftYeWVeXyudg8W4FGVr7xFEiAfTSKxa6k1",
  "key31": "64REfom9B3bXUiFRtNieHY1jyW8aJnKcYqzeRx4d4YzX87BSEELpFA7gTjjUzPUZCJzVsgt6ppbPRveVTiRJHnve",
  "key32": "3mgVACaWfaD3sbJNSkeLeZN74h5KMKaYz7PdAoGtnudun9nYedWtXP9eXiNVLb5N8Kz5g7bUBq2Cfxd1hGGXgByv",
  "key33": "3BXAF7uVZLgRTCLccmJ9BqAmTo8KG8y4Uok3hCkCbwbTvTnsVc7nD2E4ZiP8keFTtZomLX29wnWGyoqPYmue8q67",
  "key34": "28L2vWX9Bd9ZmPwE4qSx4uYeDq4tQD4YqhQprP8GmumBpfBbFCrZAEhRDTL8mc4Qr7aNvBWCDeMVtk4HT8yTGBng",
  "key35": "4KWuXDbUwSqqP9WmK1a4ThT8Trj5kQXvJ8JCJAGbb5GEbjcmcCwimSfWFLwYda9zX6pnSYi8RGwshn5n3HdEhYkA",
  "key36": "3iTXLifMiFkqfMLQSgedPRTuE3Q4Y8e22hfopFu6c4DKA6UbsJyA4GBSykEyXAsAySQFr8Ey1FbwNzuiEKVfKAkS",
  "key37": "2qUi5DDHL8iFXg7BfGQxKWWB3cdYmUVGAn2kaCsXUqAtQqpFQmpdSpc2MHus3HicKKxA4syX1W6sN9zCFQ2Bq8hh",
  "key38": "jq8VmnRnyrjyoeWxRQr4L2eaTTHp89DpgTLsN1QbJ6ahWLm8HVyjDutw1c5jFQKNCzYcgUhp6gtVnFxCKRRWDuT"
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
