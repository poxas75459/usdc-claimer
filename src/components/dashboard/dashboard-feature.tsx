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
    "3VPRh21gmXLmh78xenhQNEyFmkbHA8F7pWJrEszmR729DDidxMVHPyktLVyTw9pxLM31NCaZ9i4fmSb4CkH5Rq6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5io4NbAMEFzvdj654z4CBgNppeEUHsChDX3KxCzk4nwnc44pzEzEq4RkoCt7L6Zbgn6CsV7N3HhpxRJ9ACMZTMER",
  "key1": "2XELJwAYrRRmTnTF1PHN53oqGkLxEeNnf7dx9hWbKhYYVEDHgbyCzDCryxuPoyhBzzeD7QtP1jSXaEA9exdecjMk",
  "key2": "3BZgXJpAYAaeqYw9dHj3i3ZJXjBnTEBV7NwE7ES8tGZKnrxg5vEyJfaEmYWE5ve99TCS9RZrn9qXwJkpreQbzPwJ",
  "key3": "3w14zrZUv68poxFFzC4bP1k1EVtAANqoqSzECbcrTtTP1uZpJ3coThbegJeyb2ZG3a7umg2rZcRBMMAiKDjBgadn",
  "key4": "5PgtL8U5maBh6qiaDFd9nUgCL75724igSX2pQckzKQ9cNkS4JKxRW3B17Uynqrzrb2vKy8v8SJaA4WD1yodKZhs3",
  "key5": "TScJj1hZ26wTLvN7TUpm6UPsQyMzCSNDLnvceAYK6wodHjDrnDDvv1DsFEwnVpeMKZMCs7546eiYPQeWBAUZnYB",
  "key6": "UUAZRmw3r77ryrKGfQ57LZNe46n28iwBFbNHxe1Us6ZZuCv9Tm6koDL4nvfxGaGtpEAWMPxrGBJTtP2i3TgBTq7",
  "key7": "5npGaEPxSh6PnGxi9zMQrBX5gk6fwdwYCEKSd7KHfFjNUt8m1E6WzCYDJoYMoAybrnLQSySQw56Q6EN6DFT8Nn6d",
  "key8": "4x8e8J697KKJrzqb4XoqF4M7LtGfS31VVZ6yAd87xFv3wsV2yst5tJ44PaheTkD1WghdskbqakL42D9AzLU5hp2W",
  "key9": "4usXuhDvEt7BgoU2ftKKPXPnhNPXJP2AA3vpJK59fNt7unyErYpLntPsMs1VF7fJCoJo9XhzjEieo6RCo9yA3kDR",
  "key10": "pYAHcic9Hyew4xxZXEPFZV8GqT1NSCBLMbfgq2vcngrSFZf6Wq9KGH6tuvdtyPLFZrcuMFRopyuh8a1pi6HKPAD",
  "key11": "45FZbKL3oHRfKWSwGMBsrp1BLQFaxWWfT9j7M4xCmZ2snNyuwcTmwvmLWvZNcvwufjpPY28utTy2ixNb3GZFYvKW",
  "key12": "2jFJF8PVSv3eeNgpYF4DyZFcXFnHrra17DXvkDjmG7sjGPD85CzFRyZ6PEdM5bwzJebGfgNC9u6K2MaRQ42UMPv8",
  "key13": "5NjKWc2bkUWTdpYxrXvUBWz7d1873M2LwzVL1kbn9ayNrjWhBaAjPdfra5Emi4yoXXuVkRJoZxqLKB3DgmghLPDa",
  "key14": "5hHLcdsKoRY6n2n1eRB13YG5SQcBW4AR2wdSMJvTTMwLVdsQvYZ7ze7EoWPZ3kBrSoUSdvziyAqWTuXXYXRrS4iv",
  "key15": "4Xmrnw47Ky9VbZqGMyx3DHagU4tDiHdWTNSBHmnJb3V4sUJexdPdxRBe22xivu1yxiMb7z15HVexWUDPBvJr8gRj",
  "key16": "3yBhSV6qa7WmYdiffchjCWLGbFWk4cNgNCNFpBFRdXSectqshVJVFtMraaVEwgRa7DAwBUCS67L6VzZihR2uZneX",
  "key17": "5ihVQyAsxVPPAepKhNU6rZaV12Timj6W4U7F7Aa6Hh4kZvbS9KyAXmmouX9Zz7mGyxtcuZi5GguQ2W7vUaS3w5NW",
  "key18": "3z6T7sqr9unjxp7Tye6oqtG7DrpHb9iqx8tWmCq92CJ1FiDkhZJR87dQk8TP8S3HkP4aUDRsZWHVrYYCVQj3PoPT",
  "key19": "2D9BAwg1p3Vo84JN36sLrb3m2PnvRrjEqE9LwtPfLthmXXnxG9KptiEAgsd4VQYgwtVxm7phy23EGH62VeNDAvP8",
  "key20": "22ZkMYH1qi4zXAFA6VSAVjzaLgmsvwZNHmLQzoVZV6JEoZ82sxTx2uXb3UqgdV6R7a4MDZV6EGPkAeTeXPmqZJ6r",
  "key21": "CXEuKwBeKvLtgpVgV7y4DrfpuB8RfskF21FKr5B4atoqN7S7TnurEoLBqM32E5HnRGMt4HfKZp1HbF7CW2QGLms",
  "key22": "4RLc79HeDW6NP6aVx1NSbNu4HkEyFQ5AdnYKkaoonFoZCUmk1SqCWtjoLF5ZTmD4yzJ7T8Coa75n3zRncYxcCu1z",
  "key23": "2dMB5onXHpW8XB39a3TWSLvNChRG4APLDrWBiyvSCVw9fEjNJdK17A9tL8yThCkjFsJHk1Tyb4YeFBLWtPvULAU7",
  "key24": "5gnrQEjAJZiP4AX1snwVo7JvbriUhww7pQYvB4qSGEZ3vpiWcNHV3Ak5P8vkQS7UCkZTyRZ2KMVdF76wzUorUw5o",
  "key25": "AA3yGV6cnCcXVh2qiERhQ8dy6mzGFLj3ypZvKFWCJefbwT7RaFzipnNSJJdMKxtA7fp1GYYxZcZE1UDGzhpkbiH",
  "key26": "4k14UrgHD7BvzMcmBMe6f7GzfZoj374NTVbcaUxHmcm5kuQEZhXfi4PJZFavbvYo8JUEYoihdSp8nG4aNWrQBCEa",
  "key27": "5tWVZCEbEC6zRZPVNjUQpVvhncpdMgHXDNvyty16LUogzQZPdCYEuUPcfMuCG2UMsCJCwjQLHXwNVEF8bMX93keK",
  "key28": "51Z5f24cMSWVeExJgdrnURyNqBDZzv1FD29vHBR1WsEruNrUCSMqVDQe5okQaLJUX7LtYetY3oRSmnh5SNB6uaPf",
  "key29": "MaibV6jBLvA3A7By2vKHravvAL4cuHsUurMuV64KoRSocfjvBmECMz9EzP4TAbXSpY8SAXD1xo2AedbFUHeAMU6",
  "key30": "3YFNcchGhrVTScUttUybDrDvnTsEHh7v22xiW8vq5virHcSUtoEdDZsdqCFrovau9SS53Eey5RsUuN6rW2kXB6T7",
  "key31": "M9sop2qEq3Bieo7yPE7uWqFZC89KpeEgEq5xkQFVjfNv3SMfjUh5PsH2LCxTSgqig5wtFc2A8chFrqHo6yJyQSa"
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
