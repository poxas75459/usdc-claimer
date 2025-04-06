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
    "49wP2qBDTtH9EnXgw1vLr7SRETCqLNa7sUN8Lq23Sedhb1QntgxLvKi7wNzkTXfDoPTW2E6xbTVsb2eZAFVCwfk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sFVZEXyMASGmXNFx7W2pKFVVCfex1aXwC6UrGsqavq2aoaZcF8xQ6aAACtUMCe19Ftk2AVdNBsa59b1XmBkJFgs",
  "key1": "4MN1M3QhwSjVVebFDgbc8Wk1rU9UDVFjmRiboNTzVL3xJosZm51r6AQEdH5rKVEKSJukSTXFvcPVghve9LUyHvDY",
  "key2": "ujLDnZ3PttMGzC9aWQrshyVrhTEMQH7JiBemonXrswP9L7ayXWmYS7rhsBHkM71gAMEKhDtF8se3npwGSzEmHXW",
  "key3": "45RFmC6eXfifjBR1QQWFNu9NuCZt9h7zupJk5vHchPBqPxJYp1J2xaqJVGgmbr3FrvTvXchmXZ1PMHCDExyxFDXD",
  "key4": "4edtrg8PfAhbJatddTvCuX26YredZHRKLkgUo8qKSQZfeVNmPZwXQz9FMsRrirkjcCtUHVhpHDFbTvWNfTsowCve",
  "key5": "ABNhHSRFZesgCXpKE8X38abjsKUhDZiLBwRg36917SH6SLXjWQx1BQcpttxbmfauPSDaBr3CfJmw9pSpLBh1RJg",
  "key6": "66boeqU4g5JJEVGr6hegMWxkfoKVX9GVSD5PrkBtVVuoJvYcQYDRSPZotdedcMK3AQSKqUxXed6VvEq8cCfcxib3",
  "key7": "3Gz9FDMejkTxiJ5zxGHmiQnQL2veuiu3QhjnwrZeHiCCDT3jRWvwUJZa5bE6X9TC5byLCfu5QmNe6RWzrbWARTCY",
  "key8": "3Lu3ycmhnhRzYeCv9VspohEK1YT1f17XKWWwJrogmHVT5EwZ4sipko8YSC6i3uLQFWqddcnqZeb6yJewC89hYamm",
  "key9": "2QJ8ewoLzCNfbUP3Jq8saxxMN4S8YLkqRiXYfEzqrYUPpwgFL761pDkEnza324fYYQYGWUHPqtVpPF47SF46qgEY",
  "key10": "29Gv2CvbbKZGAzWWGFQVPAZjx38xYxF8uVRWa3ikNnM2Xm8hnT5vvAeznFjH8rb8XGF3rPAstx7YpbvHXyzbdGnz",
  "key11": "vm7Ezv9mviSAx98iUWumruh9zjaLZ1EfnqE9ok5dStop393PHf8z3YmFVfWm1A1osk16EDKMa92zcWwWiPv99te",
  "key12": "4JYu8ujsudyFLLcnKicLKjjfinYyZxgzptiEveBaCQXW9LBGXzozUrcfhaC1VFfjetEi8Ry9BQgKPauCJvhbFVoM",
  "key13": "5ri33yA7kRXZgeHrEPezARTQ7BgJ7a9118V7agJt7d83hiCeenqV8pLUgriYoVszT5ya6PWgaiQF9AM1oPUfm3cj",
  "key14": "H35UDHDtQUR2hNkwcy5NcUdKyExfqDJaRBP3BuZZD6gdktRzkf1Sq4fvoRu9vV9Em1qioqy1C2LnPgAm9BZuQXC",
  "key15": "4zfn5U4nW7FvvXtTXvvi1JaooF84Q56emv5upgG9s84tBbgm2fDYf4VuPi4jVjWQofK5UM4tyovA47EiKAMCy9gp",
  "key16": "2ey8Dkten98aykEKhyLrWVFiqQFf5LveoAbUzd2zfeNMH8RKr99uucinacrFthy6hbx5nDLohMe6JL33WHvJ8s8x",
  "key17": "5DjKNzQYL39VfvFiroFfZhRXL635ugpPcgxKAX3TNuvyQiKKrGgma9v5KsYfLtcNNSFqwvBd355bvfDi55fKcjxc",
  "key18": "3snGxXiFdqP8wXbjD3vR7Y4ardyDkAPX4h55eF2TfMpCHicb4f9cZwUxJ7swLA3jZokxYkCDkYM3QguNc38vDxm4",
  "key19": "2enAubxUbYZav3tMm4mfbxwzAX5ZKg7Exb1Uean92Uzty9eeewN8tkfYNnURpbHH49RkFwjKvYYsJ6265rsVhMmK",
  "key20": "2LvfBBhGVUXNCws9GSEY2zvUBVGr9ehEm8Z8TcWVYjscWJ2sqNeA7nPWPrcKkVm6cF1o596xqR9Z1cQaxVR8emm4",
  "key21": "3day3XVDP6oK4GNin4A4N5wLWrShuQev5H57av7gmL86ifYHRws86uykgHmreSdg8qBG2WS7tsS4wrYWpPis5mFC",
  "key22": "eutNBXvKtGwewvYremrPfM3Q9gWDwJQnyEPc52ZDYqsY3wPPKkKMUSNDVazy56nhHVC3ubCCM2LH8PL2pX1Cxvd",
  "key23": "5Bc4J3dvyAJ5yaCk9sWoPTBEwB2yp3KAe8GDeNHCj2mBTdyZZiVay22rGenpqqQ3Dj2wvTwAM4PMq2GXmBN8UDVG",
  "key24": "17wsZ8QN3Hbmq7xD8VjDsSRDp3uGVCZWcg6uoQd1G7qyaYAbXKjoCdXfwkmBwq2SrswZWwxWRX2RXKAfrVXfZdw",
  "key25": "3YBxfpxjazhYMoNQqcyXJiBeVfgU44384nVgzH8hs6SbJABXQrq8cDUeeNCB6v7DSSiRUNGKaTfvngfeGz3iiE8d",
  "key26": "2J423hWaBpZvtg9S4rn8qah8BDME7C3PNhRVgisEJny9QUMZF4B3fVCm1rsAByUFHABGzuwXHPZkqvDXH4m2zNE6",
  "key27": "4yZPcJ4AeHgb8rUfQvZDstfVS36bYZgu2krnLYyJuQXyKV4tLfw5RhympfATnascF5xhpiGqj2RfBMd7AmEA4SWZ",
  "key28": "2WrMQ9jskE6nmKCYQWkhFhLeYUDVM9Wgjoxmfmw98ZdVHSLBvBvBksDkcLMPM6agz6GNuj9dLvmrwjbLGMPnCSKk",
  "key29": "57uzKfV4QaHucW3eS5Z1Su6JsdQ9XYb3rSQy6gxGe6HYneFS4mJ37xSpEb6fNVzKtGoDCSjFJYfnRxP76keSYb9",
  "key30": "2rPY7PZT8tnDrurv75jPYv689dgv5TKp7DboY6V4gGywAMfkhzzxgLSACSa9B26H7FK7tra5RcNo1hfT5kuuwF77",
  "key31": "2QvSeGMEpKBod8Lf63E26PSX5R6vVTxV6eYqieoZFVG46MPmugqi9zD7dfKioA6CLAhdMEmtPJWnS24hFt2LnP8t"
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
