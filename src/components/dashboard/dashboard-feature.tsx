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
    "2cYLMvQKAJdJqHzDJWpTLyH7i2VwHX5S2DtxZxUJi2YD7Jfpc4KwpYdXosRLCKiJ8prbw6nn41L3gNmPjSkL8C7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oxEujE531rrub4LM8a8k3YjHSEzWxncziZuQsEXQTTCe3rQw8mvSembc5JNaqZmthGYmG4jFuAJfGdYC88ZBuyf",
  "key1": "2pGerx7UfQtyzVpLYPKWs6YdC5kLmvphqBiRtGmkXg4AtVuWybEXmHZLXZCcfJ2PBMkNWS2Cvjd4PMX4hcjQdjcE",
  "key2": "HLxLuo11EcNRXTsUx9VmnFoDwra4V17Z482BfKddBqFSpe3BHULE7psvWHUKkicHEiwWs1BJc6UZ1kWiZCUW9jC",
  "key3": "5tQw4aaLZJCcYsNMTUXZ79HK9AKQaWMUga2AFMkChmk47pAzM7g4XoBuVkVWSWDDAtgMHdYwevYCcBQmQQaiLsE8",
  "key4": "48mqWUT5DiXrsR9E4a8LZu6sLDKjh9EsTdMjAWrfhi5Amfp1c4ju7KDFZBXLD24p5EyWHawtVFpfaKKdui5JoAfm",
  "key5": "2SxC8ZkRBGztiFGHF4WhZrp2Y8wbtaCYoeyaH8fg9E5GYcJ4GQWDMg8KvPzgymafAbbrmQTJzox5647683ndRAFR",
  "key6": "sG6jPDgQ8HkZUpvsqLQutkuRZQFdt5tVhdDCaRYDAawmaqpgYbQPYvKoq1qGasSFgS7ts564Cttk51yhMELbZr4",
  "key7": "4UARfbxD3dyJ8hMVdmVmreN6o985oTHjVFvbNxt3CV15EuKtmUXquq2hjZRLXVgTXBa4Z8Uy6cgqFu2KzM12atxY",
  "key8": "55ydVmPhfRWX9qb43XnGomSozyxRmiQfq2JRMi9JL3AQfhbT76sZDqCuP1qz5nNSRrHMEX7dZqHSXkGbUWz3ughK",
  "key9": "3zGpaK2BvvAZ4RH7kEMBQLbuH3A1o1BYisjSvfHEf77cH3UkYsuiypK38EzH1SDEg7rLyznP8rJN3saXY4Wt6UqV",
  "key10": "5kgnts4UNDqCLRFwaZdMx6iYTELbC1a1PZXxVCVtFX2TEsCfLF2H6EKpkMwEy6XbhxXSHHFzFa5qWRenQohogwRQ",
  "key11": "24kVdJBiAbNNLYnufn7ZR4cxkBxmp1LRXqLtQw3YbbCQe5REAxVY9uB2p3vvLA5hZhqrFTviXRwt1RArz97fd6go",
  "key12": "4ysDVtybc6s42JPeQ1AH4i42WiRHhVFk6ntDPMAwFPb8GPkSfupEw6PHSDtf8qYGngak3BJGYFESteuGTXw8gVCY",
  "key13": "5XVt6DhedmbpLtBa48m2JotZzqN85tN7UhYHFQmJ4dGKTVC5TDV3zUP6FVE4r4bCAahuRdTNAFuEEzVGZs3ZqC1M",
  "key14": "4TKSUuhY4qoQ5kbSkECnCGmyvxX75u61CctGpxNqiiJ2dgiMHhqxYqWQ5frayPGHnYRHUvGyY5o7bfgcghiqQfZ6",
  "key15": "2Dex2CNgFrTDkhdqYJfQEZCUdcXg9V9UEiUponFTJiQrd8ZuwQ7vRUvwM88TnFESFmwymYsNrLtdyfJt9UvehwTV",
  "key16": "3cTJR4BNakDr4sgogPEuoKN4848A2uT5TxisuHNFFRumGF44mMV85BkziAV3haABVQXBP2CBXtB9yW9o8PqerSfx",
  "key17": "51cFnob3HFRip7SbwGJkkM8cecmd8zF1gSfA8WTwxH6STopPHb3GH11nnH5YKxsyp5kBxPswJiJsTA94qUky8v7A",
  "key18": "4b8MUp1CmxzsBcwWsT8zhPLoYDwW52avMsZJFYXdWVLtcvp5qKbYZKeAD8mC1ZckA4PVqADxpS331rZeoaRopyEg",
  "key19": "2p6TQCQ6faDQHCXXRxMZHmqBs9ydx13hgEE3gZFSQyg4pMkeSMNFFN26WVkR6XJyZqEpyMy65Mua5xfk9AEYLqEQ",
  "key20": "2xmpe5BMttezwf2w1L31jDoBvm4TYxGKwq1L7w5rDRiecFBL7af8y7UiUKNxNSCTfewcoPnCfwtY4LmsuCj3EAZA",
  "key21": "4RN9SrPeoLvFCoZvUN9DnDugCwBbyrroVAVuGYDXufYssiTViKRHFw67yvXeBkoQGF1hPPvH8P1Ni7Z6EekM26XB",
  "key22": "4HAjjASCU8ZfNEA2dTcPFYrwzXAfiYwXqoQhxj69AVrV7v1unHYoq12wi5rBy4zxNCoMknir6vxCbPdt1gj6FUbf",
  "key23": "4E2oq3MnoUvPhYLLrGdt5jkvNAUpZnxmUZvQq2xSwv58Zz3WgfZX1LH2SXqg6QtzxHpc76JZbfvR7nKQ5mLus3u8",
  "key24": "56DwF1d81UKh6Hriw567gf2egMn31vDRPCoAGKp13YHTxyrngEPt6WVowKxTtvbdQbbdoiAREYLdKootJu6oRsDk",
  "key25": "3gsJa9GLVeEkwb8rvHyG3Rrno6hi4oU98FVEnWJ4SBWyWB4SnKaVb2PEyv8PFQ3pEUrdghYZgCdW1RdjRHnLPum7",
  "key26": "4QXWoem5HWX5qhXkUDk9iwMv3UQKDFxJi8whCmKzt4AaajQnykAjTcqKfKQBQsyfyXBWerPu1F1nEQ6jK8DMA9ct",
  "key27": "4jodUCbKh8ceJk8n27eUXFvvNw4UD5PDQ1xf83b1uM6gFBa7F5kENjmyEbXoJAPbQjaSMguwv4dntf1EYS2SePYB",
  "key28": "5W4QzdME4Ji9xGqvpLjH5kL1eKT8kQZHMDeTafJUpgS752v9fSiXDcctmwifmJa82etW5C7txw79rFqaQiam41tb",
  "key29": "56fKx3xAtKycomw8CnwneYwYVgJteRoo7xrKnL1y3Ms3WFD28mLJxqKyaFWXgZfsWUePpisAJnZh8mj8qiVR1efY",
  "key30": "N8iUGVnLQXJV83MctbRwGdrYc87KGDWo3ULVzeWy6HKorRy4KgtJFyfKXgniE7XY46AbXKcJhXn5n7A5F7JVMV8",
  "key31": "4kwA2x275V3SDS8FQaABQWWGFfoP3EDQo92tQHbSW7dwzc4WJ7PuXXAc333t8MgatxEW2Ej1aJHu7SH8XoRjZWjV",
  "key32": "56FT8Hdfd1ckUxLFmNSYUZgdNaJcpomgkT3EqEGbLaL1fZUXAAyNGinCrDf1Kmrar97icazZ2pgi8DuQdjWE3VMQ",
  "key33": "4p5KZM2Dmsd8epDL5ukQpaN2inARGU5LEdZjVg1jbS6dBNk9H2rkgdY351EPwBUqkY2Nm65DT41PA4rN6zgun6xg",
  "key34": "4KgkuuMpgD4FaSmEyCYXWfizNWJfV11Dc8FJS3xiyRiPTXs5w6UaDDw4MieNCoaYXmu72MVXmfb597mJKgGakNfh",
  "key35": "61sQ8kKUPwttK3xUnaK1UXLPCs4b12Mzq4uCEfdafrydpkGn7fi7Yt5D5cRh88j3BhySAKdm2Tyk2PjkDV9abNM7"
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
