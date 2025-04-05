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
    "2pctUjWqFTzDJiF7FMC4qYK6BVW2kVxYh6Fnty743v2QzqvwTM6AyvpK1QanhAi1Gc3FyLbT12jwtqdGA9nfVb9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bo7rA3aLHzv3KQbCxcdfvoZHPBrRiV8DRfqHsefpnhfDD6Y4naHvPTyfjfLAbUa1cfNr82tkeS3nBsqbe8B84Qk",
  "key1": "33pjZqv3FBQMK8gh26iZ1i8RKcGto1a1SrTxuMkJwS7MmuG9amLet4MEBXkYEzBXTpuphEg3ELK3HakdiMNymwF4",
  "key2": "4HScNNH8G4xD5ymxyH3yE1J3TZzLB52HEksJ1Ks1LLkd2BtZawLeYCcUbUs3aULAQFweTEA9EJNUSQkpg5uuWWE8",
  "key3": "2jccis9rfumn9PzxEqYY6nrhGDAS6FXPwJqbbEXkHAcyusvb341fyCxDM3nYhWzfye33sqvVMVB7Wj7phUXguARo",
  "key4": "4qgPjm4XPLg2fJGtaojS6am2rABkPKDj3eLAX47gvBxLBMx84GYoC35kbQJJyecKWaPNkFYmu2uQAsRc1gyKk19Q",
  "key5": "Us2znmcFd515rjiCvBQQSwPpRpfWoFJRsGNcYoxxfe8A1jnDPWxNcWUN6EgRRcUcV2345JPjRLVoq5Y1FZe9e9v",
  "key6": "3CuLuenwRBNgc8G5vjFHYYhxXFmyHy8obQdFJn9ia4p11YYv8ZRfwzvEvQHSZtvssTrFni8BsK4hdUgRHz35o1g9",
  "key7": "2M7F4qfQQ1jCbdjUaiCLvH35S3nmgSLjKeAnSg1HYjTea6ZHbs1YVuiiZ7txzKH8oqn7AETRD6yjsG1pANHeUgjh",
  "key8": "4P6gWV5WHRqA3dLC5DVJNyCiEkLLYpwZ2aofuqyiJ1doEQ3qVS1ZBzu3VK7WMLuptZyyzVF262i9SH28DbXqnL7m",
  "key9": "3kpuJ8biT1bvbqrDUrFe45Yya6J72YLpd3EzWwaqYHeHeZhrMNZUmc7pFKyUs2A7ykhvWs35xArydLnEYszjjpNx",
  "key10": "3sVovFoWCPsbcKjqwmcu47DVgSxcudwoWC3FJvsqxh3jYN6BiwT7iC3BNycLDd8DfKPEKXQFy83P58oMZqYW7uYF",
  "key11": "5tYvoRwa7sJTi9k5kGsDJ5VGSnAYhvfQJwZ6ForjNUuZ572dFxfT6Q33P183QWP489ewNpLjW3ksPTD5ZbS1JD2w",
  "key12": "5X19YyiKvtZGc9Gn4EFvhttT7zWjHJxpUhqwmSTVLZLgWoPVvJ5bmQ9hAhhC843xD7faLi5tZWRBWCwHrVe9kEAk",
  "key13": "BkFibPRCZ7omyvtwHYKnBow8afXDL8jkJttjr4gifEhueTcsHg62W39rHj8h9P7YhL6YFRkhhnoh9qj8aZ82agJ",
  "key14": "3zxYA1Ggu5wiVcxLHb98inaTzuJuQZKkdzDCTi26f9rvPiMqv5mxPiGajT1GJvqGQjE1mSmvhWN4QWDtED86spB9",
  "key15": "8wyhWNu6xCxzChWwqofyJyrHNVaRzugMwg7NeKgJ6oRqC7HNryEhnLFsH3ssbmt8mRVqVGrHjDWyvdzDckgK631",
  "key16": "3mexSYm8kwgFDxabk37RuPrN1FAgTkMZ27NatGwzBmn8y4jsUBBw5Hy1qtKXa8rDMY5BXY445czbHGML6RT1Sr84",
  "key17": "noZ18u1ZR5Nm93kFViYWw7S3UXdgLeehQx3AQiKLZvgJEb2z4ddypDbk5aZWomRVcgcertcD5VfWS1inePtG4ks",
  "key18": "45XURhbqqCJbFbg6g4F5rEy6L2bnYJgbmyNg3T6gtQpJpxN9aupRLeZZttmwUdPTuawZL6u3VoELcDx9fhex8U7m",
  "key19": "4vCeYkwGakEFXtzSTJoar8EHEAAC3z4TE1PwE9XX9b13acfr78TdQ9B8a1d2NZN237en2qPRvozfdMeFyxkdCjqq",
  "key20": "4grxqTAbsy5gg9DxSg5DpxmKe3A14ogawTpipJhBswpKji6FCarCKFGuDEUfzwkmLSuSSk1DBxWVS6AWL2FRjqcR",
  "key21": "56braaByCfzcaAfrDo3d3To4UwT2459G5HnugUfJ2GcAUJ1DM1jRZYtdNYsrYyG4ZvBEtehsHdUj2eAJLxPiQ9rJ",
  "key22": "4zYFhDbs21TUR3NY8tBupg9miLys4sNxZMKhQ5EB4zMKCYqF2NDWbS7866efCx93qfVqeVZmQvBrtWcdAWf2vZDY",
  "key23": "5DuuiYeG4JvjGG2BpLSi2Sj6L1er7wf4o421HTFFdhMuBaB4vtMyyKZVq7Z3UtxTMWhBWY8c1bWDjg2HZK51cZBt",
  "key24": "4NYW1zgagSdzmDrddanw5JL5D8RKgQ9QnUArAi4aABExuti91LnEDyEJms69P4kBP9QKKoMbpfHyAVXvh9EDu7by",
  "key25": "2sp5T8LHu2xU9VBYtkQxNsmMfCz3mcBS2GXaVZvZet2DwqNHkYRGh76xgrzCdTRTF4HJuqPFogAMsQawtwsHEABB",
  "key26": "2g9DP1LvatfMjJdeq6cLtES46tSFmnejK6dR1eUBGfC9P8Y2enyBnCjmo5breVDGWC7QvagYrBDnbRvW7qsPpxeP",
  "key27": "66tjGeKrPddQTmTzQ5oFq7Q4n7EtsfnwYTmtw1oxfLetKN2fzgag7GLqmVr1VGmogJCchAyynvvSimGWyvLxNhxo",
  "key28": "3i2LDnbJ7enj3xUDgaHDsvLFnUHGVS6nEZWjd1tXbEALdE4xrsHPWBET4NcP986MJRHx8daYKvQK5RTSVmJZ37gm",
  "key29": "58xg79AWpe1vFpyzocnDNkWC7UUdyX6dQ46VCrNRq49qFMbsNRJewvzHBvnV1kj2Dgb8nTHfLz1FzbUjkhCfPWJD",
  "key30": "41vxcSe3EjJMU28455cyBUsUXSa3dbYE89NGGcH98MMFMBzy9Pfi3Njo4AwgHbmehLWmMVUKdToHQwExbmpGCEks"
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
