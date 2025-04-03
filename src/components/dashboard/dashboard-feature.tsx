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
    "3NDQhjGt9xFVnHi5pQSVBycBPg2KfCfNG9gX2MFgCztf3NukmCiVoK4yw9HKAy5m6FZtaMRT1dBLmKfA6C6msj5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JLRaB2YeTsFfPqxHudF1uviuY1FyS4dAKbMRW4YKw7szXJWtjFvo8KrdHV64TNYHFco4NWQXnagfrdB8KeErHzx",
  "key1": "5uC9NacTLz9cshEyyN12agdZjGRgZuBF12yrqiSBoCJKnC9PPAqYkZDMKgtdcSPoFeaJhSTuFAEBW9UJt4hGmybY",
  "key2": "23n22M1eeKLHY7mkS2d37dEVbeQAL6CmMMPukmVzraZMyHdCnzDuQ67zMZbXZkSXYp3wG3DGGkWP73Ji8GW8B9sR",
  "key3": "2sQv76HabiVB4GP7hbWrc1PrYSg69jgWmap1S6g8j9KxGaSUjbaMzmsDXTUSDaLdfr4uzUWrVKo4Uqkzm1yZATNS",
  "key4": "oChskt4J5WLUCMxXbVunHgaY8G5Rkc111jyA7eTNWKy63FoMYBYegDWzDviWfLZkAu3f7KAp2HpkdNSPHKC73BA",
  "key5": "3rY4k7ouBMdK1qGp6ZsKvR1qndpQ1XpErVCGsDYyWtE3JYYa1pJdSKxrqh22qrAapiemFmY8PDotTNCPhVyR8E9D",
  "key6": "5ogtjXgXY1hP8xpRpCwgFAKuGLETuCjK6Prn33KUikCviJDouYMsPMCwvBewRqNspSMUyrScJDCqCuafry1xTr3N",
  "key7": "4HA8rFYeMcqpTt7sAa3tfWZpDbgM49NcGGK2EAKaBzBGmu2StiwaczwoXbzyJVvJ8y87ptwySjjAWX5rpbNFfdwc",
  "key8": "5FVFLjghGp8r2H44zwkjGhdnFNJpAGsSA7Hm269CyfXfKTaTk6VmjzDQQpSrzUURhPt5X8viiuDjrechzQPPFBap",
  "key9": "61yYUzcrJN3igZGWwZZZ26eG3zQg4P9b6mBLHfFx9ZJBNMhAjc69dbtx1jtHcXck7GvSMKauQa76JdyzruxXbS1p",
  "key10": "2sTg9P76MtHSPYcH461NgGvFy97uNsNVUMS9dFBbAfbHNA5dJrtBMwzx2DhPaj83Q8dv3eEA4xrZrCYFdTeqRKgp",
  "key11": "4xaU7prhqX3fePe4xgvvtpuw81B1NEJQZpE7agnThqBwcEBXwDVCK1cBg69pLVJqYxpDw17Wmb1eoXkXLqq2smy",
  "key12": "aZ6LtBGJFd3JhMthF53AJaNPo6Zd4wRhvehr35xWwCjWCKiSp6oasHMjbmip3tx7cfDfNrbcZAVXKuXWriGHGPE",
  "key13": "4az5jUSwBm1XSDtLcKDoh11F1pX85P6ffUNQ832B2XYzVmDsEHwvKYQJ8uCC5PomH9x3NMMDU1aCQVMVnmPtE4Pi",
  "key14": "2t4mnp8CEJi2F9MkbnZZYiVidemcBa5x99iPD6sb6XYXjH5ehoKTHzxfyN3sjrAyoQ8LJjqaxktLyzqqwWeHueVF",
  "key15": "2tGXuCvNDb6VrTax3h6tvcNT5FWfZGnrwthxTBoyrEzWcLXVhwCo5e2FqNF3se1ELLHCAMMLDkuW8Lud68QQdZFE",
  "key16": "3vv73hAEx6Ebbg8VCroiFps4qadsFoUCCKEGKX3oDFKLk8yRV9iitJfV47pggRPCNa18s353HrCYJcA8agLhgepW",
  "key17": "SiSUpsKm5p1ypxp6Q5KxkLK1pkyySGT5Hanu3KuKCvopgb5WbM1fyvV71DrTXHaCAFncpTLvygE2q85A2qtiViS",
  "key18": "2YoDTv7eHdniTiWst9n4PiGyFL3VMs2DMMg69CJW1pi8DkmGZuACTXEdU9GgBqHLW6n7yWhfjrxssHQNEQDwP8fs",
  "key19": "4y2wpNLooGkqqu6qXZL9gWpuRoRi6q81xETEeon3yVYtba6EWXzpHjrER39n71DYxG42A2aUAgP3eLNWmq3McVYi",
  "key20": "2vnkz1h8Nbom2ZPeb5FtVR8z4u4gKvJYcy3Lnc6ntVfKYKZzALtRApZDai1DiKqEneUwZEMB4EDVXpk14odZM562",
  "key21": "3Whe8thzqCD7kYQAGboFMchYnTBhjsJHeJtQ1hY9oJ2Rupy1PW7wUeeNfVtJtYEuwmHEgb35MLJn8dRCcJf4iFMW",
  "key22": "WNvMnaYHQzQE6oERNAGkkXRgMXCmbfBPnUyCW1NPv1urV1PFwQ4wXwJYr2XUCFsjSUemXtxyA6DY6f84p7MQq8u",
  "key23": "558nUP1m8hGz7PDZQqASYfhNNW9EpZEE7D6stpvkyW36wcBkTSk6aLPhSBYUCz7ADvWw4UfTTJzKE4DG2XkhjfPG",
  "key24": "5kr57R8khPaE6RNQfhARgXo6NJRFL5UtGQU8MRHH57z55ddkLxKd3M8NfQCq1XSPBRJuRHuchqgnM5DxpJywDQY1",
  "key25": "tRwFePWh9a595mvFDe2xwoBpEdaziZRVBp5Kru74H3vF2f1BXvV2FFpmFGqzygZBVELJsPnhJviEwcy7Fk4Sfrh",
  "key26": "22Aad7wMsimbivAANE2ZsJyCxYc4nP3DiNHu7Wrrn3ni4eAq5XeJzDpR2dasoKSqsizFKs8k88TYKRL9xvBfafmG",
  "key27": "5sBr61k9bxyYt2Xp1jqpENjT9JRxK6J1eYtvJfK6AAZB5f1rQBTVGTrU1ejUa1kd7etY3ZJzMWuExh5p1XKz8tLQ",
  "key28": "4TSq6WLceakpQ6YRgsmAXHmrmDbG3EKTFS5yJ3e3A82hLCkFJ4RfkhrnxjfHF37ibRttYD1bJxoFY8j7nYfLDup8",
  "key29": "4bJoJDGyx6TVgwibVQoEWnksdfdMj5XRSLowCfnEQXWzH3G5E4TqdovuTqcBS86xP1xmccTa9JFXu1NJr37oGYXx",
  "key30": "qCHNE2DskM2EsGVQdFejn4bEn8YCZzWjtqGcEZjySwFkjS9cWX2Bs57mpyZuYDZb8tJg8iPXxsXvvVMAVtdbD6a",
  "key31": "3pJ2NrzdvC1P1J9cPpWqusrik4PcSHZBC94EmEaJJGw83jBoocknsykdpYSswCtimG77PBvZyjSmsYLZs8sdisbg",
  "key32": "2fG3TsSMhs3QDZVWt7E2Ku3aVhhuwPAtHwQeigK3VeEAHdD7BhMruW5f4oG2Rn5MuBtH2rWwxcMQtQgKy9nfWVnP",
  "key33": "2uoqymdsgrQkfW7BwbeDbzTino7o1V5UKxQUg5e7GnnvFTWA7UPqQUT7wEURWomLP2qUXhEwr1Ku2CQCkmviJamD",
  "key34": "2Y8nizAMWLLogvAPR57WvRug7w1xzTbi7r21Wp48pyUsvFLhQFxT4jdwgRrXpiUW4W5PBGaZQ823NUXE9GEfU3vs",
  "key35": "B9X7p89YAS17gJE1qkYCqoXn1xvR8dkqBHJKiSGJcrWpFaVVTjWqu15T9YquT1yVLfgxfaEi4E9WiGZBBcnujd9",
  "key36": "5fLfLShCg5rQ349HnES2LjcARdAaPNa83xCs2QpkSQrFncK7kmC4smhAyiqKH3tAxR1VehsMnpCPZ3GLR5FXaMBX",
  "key37": "4crfFiqfCDrxtz29KN6i6Rz24oZYbVBmeuwvZM4VHacdw9euvuYUJhitDogstz7NZucpDfMSusmogi3Pyym1ZW65",
  "key38": "kJ9FMCXXu5FQ57aonwrRLXRpPTaqwsBW4r3ZncFk8nLw5boSC5GnT8VYXMAfmCXDmxZCqaZ2PT8J4cfBtkKgm3x",
  "key39": "4FBqmjAHhsNWLyDjm1vP2U7JHjLadSv33sZMsv7hoF4NM4jTmFKA6JtuV87JbspeWaEX1rAuDqgwUbATrNtHW8sF",
  "key40": "YE1DCe1zck5LNeYHncvU5n232NA1U4RkY2JFxE96didpX8Xx5GC59F6sPXB2Du2RUZbWAVGmpPbETUGMrA6PXAb",
  "key41": "3THN12zwYFWLKFRTt1zDE854LVQxnbkEj6ZqVXe4cDBW8XERwJR1NLXZggqUDSWccL3jKE3qfnXuySbk4qwNfVy6"
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
