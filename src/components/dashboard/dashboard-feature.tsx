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
    "exUpNvsBcbpnKiLsAQUQmkR2Mbfos9foe9NLrfrtQakS4VGc48CCH4hBrjtitsLtsRtyFkoEbmvjawZorNVf28T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vcnU5XHBhh2iJiSfUgzi8rA8eMXX8LQn2igXUYMUdRsPjhDGMsZy6WjnSY7EhQT5knFBuCYXqftHiHzBga5YnXw",
  "key1": "5zCgLuNYkpiQ6c14JxJWAYfMreVY379fGGfCqp9nsEv4FKLuNahD3kyHFCyfP4aiqW37ELn774X69C37wmEtXQu9",
  "key2": "iNrvhLP8p8G7rJhQFEVSGrbheVG9CsbVbKc5pUL9Dv7xJfvwosgt5Fu97dqw1Q6YLMXuanGrqZ8YWr5Jp6JzKxk",
  "key3": "2Ud53cPH2jrUe7DkKokaYCvFZbtGCCSK7TSAxqxF9f98MG8M2cDniAeSKdVdbsWGzJZrAn3cYYiTZZC9twAbNzR7",
  "key4": "2NJUk6MYx8VN2SgQB1crS4xUDXYUWKxkKBzXW7grA5x2q7Z7hbgK2KweRBMt8JFt4BhouDnZ5BKQb9q94YUm9H8j",
  "key5": "3F4pKjBFoWWrZR4cvc6NCnPbg5AiaMiwJk1jUpxgxiF8h4utkuinRqkxiWYdr7bG1ARsuS2wXqFfBEAkfC2SewMe",
  "key6": "4VJa6VoNWwF8KPaSVvbfGnTnSvfZWASoxGLTtGcZ1qP88qCka2qhbisVPKHqidf4QaESZRubFYamtEqkm4x7fpdn",
  "key7": "2riXmjvR6Dyj5XS7FeeFeo7Lw47sjjrAVMyYRuCf5Q5UCXYkxHD32Rws5Ab8pvZ3ue7BrGj2Hu75fPr6E67iMM6M",
  "key8": "3bs9RSrtkLUpLUdDrwkqYLmktFtTJESu3kND2qv4py1CAx27789m8F9oUmB5GvciekspNy1G16wfYfuc5WPqCuGw",
  "key9": "4v6F4cjFvRMqqQ5uFcNuGBseRvHMcnUBjTcm6u1RkVDpgCrTkgHeRtut1rGvUAAsBSUtPWNWEn9GvUf4zqiNDHwH",
  "key10": "o9GhzYtbn2ZjeHkskgP6qsHJY44XQxz85czCNxQpfeMfHF2EX3GP2B6jVWKyWcLC51TqBfuLmeaj237fkyDAreS",
  "key11": "BXFHE432HKGd5wLL7omUCRYkuRSwGxuDqVR8bDJWfW3Ci6CGGWRWTssd29Vs4jbcNTYuoGMX2F6MV9AhaM6q7tP",
  "key12": "4hF8A9Wh1b85ch8fZFWanEL8rUDzvZc9u4cDr9KrM7vU315Rfkmdidwby1a1wvbtve51Ln42PDhogvow1QmcVD28",
  "key13": "5p4gD3WcWg5c1eEYqNtKDmspb6Bcz3qVZfFrTHQT6R4McyMKJve1QQnvWHkN6vtyVeSiGmz4rUiE6Kvc1gYWHjns",
  "key14": "39ef32Rz5z2NbWbmamy7n35xRLGAeGuc4hARMvTaakSPRx4dv8KYx7bRcM5xuB8YdyGR9gtHMJij34ciJTJ23V4",
  "key15": "4aGDnN26ZGsJFMen3x9Mxwh9G1zTfvpw9aAWNpbZut6sLFMd3ga3daotb4nR6wdBYmyr5rTThG5vjzMMTbVrEWRN",
  "key16": "2gDJ7xQU7sBBMW3CcjkE9NZeP5u55kXwgmXBVAhM4gDv36x6uifqKrTSRyCjBZDp1rm3J8tXciARt42qxv6ik4BQ",
  "key17": "4M2Xi7Fbx4A7uH7d5TZuJCGRW3KYiQe5VNZheDRrbMAfmUdRTBf5B1Bb3ZMqfgQ2wtXyMqmkAjzXZnCReRvshRH3",
  "key18": "2BtXrV2iB4NpGgYYuNHQQfjER6bRFH9GaRTioJTVpAuDNroFMDeHC5RLZAYo3Naq9wdyZSWJzK4F7vQmKoL4eqXp",
  "key19": "3mJpnU9E1UBzCcokHxMfuECFeuXota8VhxFdaw6gjaLpyA6vDUz8jAg4kCrxNYjSWrjQk2eUGStBkPo3P2ntZTvR",
  "key20": "2nsDupLeKSw19F8oSqH8CDVQizkzd7oeMiLskvY2NEe4MdQdspsCWodv42WXBnLxUGPcztWv7QPeVu5LbMCnpVa9",
  "key21": "3e3LitpjyfoFnbbfnnH3DBXvBoscxi5QrKC4685JVVEohCj6x8z9Rwa5wA5syMmtJeDrmxn4AU6UbUd9dNUuiZyB",
  "key22": "3HNhUkUFeo1awa3RMk1gisr2pRhW3zEypbW4dBFXH4upNHvwQ6iggNG3zBUBwnFsXkBjCMxtYtqDE6NAUw3AeVYd",
  "key23": "3PFjhscMJg7sh2qmUs682vE3HzvHgaJooNSoiZMkTYJkjrxY9cV9mFhd2CvYWHFnkSQrWYhSaCsi5CaMt8uwmCxU",
  "key24": "4aBePYXXMtzxKJcyWjJbNkqMKWLTtsZNWTMeVoEk6rGRe6Grj6b8ocicvvuCw7NoXdynrZNZZGuBgYrMYu51o8vD",
  "key25": "2YRpig1ULCNpLWDmRTgfamqMG1Na8NSTk6gqbMpExWPUGyE21ToATd3AiEZQNADyZGhu5ngotB3iEGKao3k2HVhG",
  "key26": "5VNEtpdhQfqyPbKRrt1Nxj5ypJ3onUb6r5XS815tjWDrNy8c93PUm1BSKRuF6ERjm5pa943CHLcPznza67joaa9d",
  "key27": "4vyW42B26YsFrucGCZKFxdr9v3raMyzEdBB82eFAwpwd2fanvW4s8s5XhF8d1wVZugaCxjqhXo1zYn2hmrD2kdue",
  "key28": "3nbWQgHcFXQim9whKo6A4eLuLWDACFDCTqR3pXe998YUvRc9vGVVQZjCjraQuDovDjLYzYzuTFtY47aHFW32puxh"
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
