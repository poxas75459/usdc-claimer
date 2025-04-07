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
    "2gEN6uvPyPEBcvFGhoVY3WXAjhL9odN5kvfi7TBxGEEXMYajMEF5986A3KLzFwo8xq6H6LAhLtvJKofsjxzaToJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b1rniqaj5PfYGKAN7ZD3huqWpuc7euGK4g3xBx8kwVdRSCT94nhGf4KhtYQ1rYWxS1HY7EpJu2LJFcyT1XiTkQ6",
  "key1": "3pBUrc9ZFsEr7KFXVP4oArnXyrXXmpBYy7bJ8VUagCWsFAvJW35tbbj8unZ64yhF4sULfKe1uDVEZJkiFM1oYcFD",
  "key2": "3rGrpaeB38L6T4PyPyGJcFGZ2zUdYPo61Z7SxbHZnyhVicGcDS6QDfGvrHWfbEuKGYgfcss8MoKX38x8zTDMM5Xp",
  "key3": "2k3sL5GKoLKjaupu5GM5GJqW9Ng2nttYmzrFdYVZjKrwjMwKkMkfkxo8pzVyAj2R36AoqdLY1yuoRcpNzRrCWNeg",
  "key4": "5c1CjTowGL5Mre1G1Bi3LNQGNgptJinpoETiHg2x24EsbwFGtC8VK6it6zHn2TbuDw1rMaezmn4gBnU1ciZCEBmY",
  "key5": "37o2FfguXvbRomjD9rJBCdSMF8JgyiUbZkZiv3CELH4rDZJLTCDJtfsWNcbqidcb2EMftuchVg1mBaWKnyR6gMWx",
  "key6": "3BrPaG9grte98oBMVMmi2Ronh513EKHcmB2ZxNHorB2ADeFMVcAH8oRyZXQ3afLAVsoVqsMmQzsvSr8hm44D2A1C",
  "key7": "FbkG2vnJHiqJP4E77dUHtQoAKNufNDugECHZ2Xg7DHEmKK4SEvrgW9oQSgme5KojuquJvPA8KUfuTFcyLTu9Hpm",
  "key8": "PVeoJ7vRdMENGTinTbiY5r6TeThUW6YVdrxmoaUCd9UafK5bBDEsBVrkLn4AAtyLuot9EqH9J31BgNgqH2RSdWd",
  "key9": "ci5rA8ws9d2PXXzVGuNq3ayrLE7aC4tQDwsdbi6AtvLQfPCMU1dq2hDdCwRrs8FeaCNEo8BioECGuFzMH13AKgP",
  "key10": "2y3GhxygwXrroBzCiAevSBMB6NX72zZ1HwuXQqzT7LFnhDmbCxFo5J4622SCNptwRZo7pJRsys2zLCkZtnvvmTq3",
  "key11": "oP8WTA1QKDi218xaRudz8r3Cp4k6wYCXjUTx4hEfXfK4eVzPZdCENBPDcpVbinWLssaUBqmtYMRb3H3m81e9Yg7",
  "key12": "3PGT858FTjj76vugKTdwv7fBJYvetJyq66ULz6ZDbqSie8aPfTxpaKBJG38bc6eMbRte3Qf2sZ1rQQLyvw8NQJHw",
  "key13": "3VUQLGdsrn4NvXdGYTLpqYdwsHoKBt7VL1FgXHzThnjM16LDtJWgDy4V6SE2zxYAPCtDaVxYRZs3B66iBAW6mcnH",
  "key14": "3emx9mrYoMvkCi4FbLQDXJv68j2cmRtvpUvmLtqPPpQXFfnpng54sMCZiYiViBpFmSMPWnupPivNmrLhVc6ufMRf",
  "key15": "2mBEpcYh8YppBGxvfTHzcJDjioSwBnvdV7zLxVeCXet8qaqDD1p2dfm6b1jvqfi2w6v9dCm72xb9so1KBuVXRRzJ",
  "key16": "j9CPtcpKMU52RP1oExGQ1TZDfwfU9PvRqYwYCiiUp6X3aWuEFpfHGYmNHC5Az7cvDjLWY4TbwT1Hppt6kHG5KdZ",
  "key17": "3kQhDxW1uii6Dxv7XszcnghMQj3zi2NeCDWozYm31cdewDVz2Ah5LZPu4zcXTgG5akFNdq1oQWfRRkcmkn3uSFUw",
  "key18": "4kZ1ZQ2AJxP5g9nZWXacqayPAuwhBRrLBGAyPBBavDcaEPvTjrgUGHFjp4nsDPMb7D7niAyuwXMVbsykn65Tu9aW",
  "key19": "wjEwaWrND3Y4QGtQyCKmvuAvUXGKix1eeYX7aNVrM77cryvdT5b2fbAU8bHbhmbapF6fnf48NhA1FEniUgFEDTS",
  "key20": "38Ux6En43vhPcuZRsqcPneeSUa8zXwJxQv1ECtxgw6CUg7MRLHxXb8nkj8oPKk55hBhBAm61XoabG1xQSPe1hpXA",
  "key21": "4DRtiCZiJ5fh7AE79RjozMYFPWVkEi86NFWz99Y9cAuBN5hiiSwgmiPf8pq1pcZnjtgdTLYSD6nHNRorWbR7YrM2",
  "key22": "31APXtZ5qzF78QAyJ8Jw8FYWpd7ephdmDQCShF9AZFBEdmXCx192ia5oRYGYXKnGXzNqoroze2j2uPyEWYXaGQ1y",
  "key23": "59dN4wXdy8sj9mQm2vvtCKJi6W2LrMRkZbTpaUsk5FKBUwoZ44LBtCFXewx7q4NxHTzJ6zZgxaeSQ5iTy11CY6Ls",
  "key24": "zzVBSJv97CgMVDropFCNTGgu4NS2s4u7FuFtTaZK947CXQpst1tmxwY44CQ5JPfnGdcAWM2zYL1VpNoT74Gtq9G",
  "key25": "2veh9sJC4ZD1ZCNHq4XBPVSTYaLjD4aJfePaPSmC3dxnE8mmVwgFtbKdYmgjKwxigPcAGpwnqcy3VzTC6vm3pnuA",
  "key26": "5JyzTX84PLGmPmwrham54zMSfhAbwi6xaDFWfdkAY2QSAwL3HPqKxx9Rh8eSdTUbjP97rmti5Lydvwd9ssZPips1",
  "key27": "3GJvZnyKUkPoS6pf5Z35TTLNBLBHZAc3EqmtgrzsJ6z84j3JL57kLxJ3ME6ifUoGcJdgy8bXKPu3v2CzetaiyuWU",
  "key28": "2zELysRHMjffiKa12PHw6psMYs3ibwFEtRvz5Gm9aumsY7ozV1a5CQfVEivB8CT8TFzgQQYY9yrKyQMApfr4dGdM",
  "key29": "39FNNVfYSPCLUL1BDUDbuFRHSNgtdw4tRdPW32vWqeAnbYYYNDxqKoDYAkpE85quCydEPpiCY27vapVRy8WFotoj",
  "key30": "4n4xkGub3vz2pupTFEZo8R2UViZ8TqdgWnZAZnz8YFSVwUgToyGrrsymucu1ySajZRsSMMisnCvgS5tpPMHRwXSN",
  "key31": "2pnFuY3oopJEtz8QpGKoeQXpaV2DQpw45kGQ5tcDdB3gSkzFPYoVU7D5nhuFMmmE61myG9U5cX8nQS1puEdz13Jf",
  "key32": "3aS9oNa4RzEUqtkojwH8Fn9WQMqEaJ82AT8etNgwat4uQoJhLEZeKxTeqBEJYSiG2qYdykZRKAbzoM85huyHcJDj",
  "key33": "5SWtuaPZtD5MQU7zdH8fLjC59YzkKCcP8gXZcnNDVzsR1KQX9WXaZqRXwjNsHecjyuPGkkvDFTGkrRwHYGXjmNHm",
  "key34": "5yy1rX2SkSEL1UsJyqDHt4rUdqckyhkhQVEi56THoPpzythf64ZB1b9Pz6Mt25AzDxjMGARr5NShfMSYySUFsuMG",
  "key35": "7WSDmhrAzLiJkanHLGrsJyNAM7RuTzYm7p2JHPLy3CPtkxRdzRVH3wepQAcZoECJ967XVdSA5rkGUX8qGUT9Zdv",
  "key36": "4gRrn4Gxptj4NgafsNk6DWWuHekvdn4vBPG3Y1UhgpknJQGptS4wjFbAs7pekQQcHEaqT1N3Femp9YMALjhD3TTQ",
  "key37": "3BQ9pNaxyrMpFqrHb92K2ViLZS7WDQiocSkLmtjX3zi1SqruorELxH9yohyfMEZoTH9HniJ9TyW6M33ggTFK5xop",
  "key38": "2ZnAhS6YU5tbZnKVMWf16bugsZKLixtVndd67qAfquW62Jj5jPsX8SYeLLBXE4YeRxGATJ7cFo6Qf6F5AWeTLaR3",
  "key39": "32MJyFz9F4NdVmyCQTqfkbg2G79ymuzk92fEjLMBSG8fCVv6MQ5TtpbAk39kgrrARmqKjDEtPmR2HvByJnLXsNMh",
  "key40": "3YiQqcnrewircmRd5MgRkyecYHVDMhWj4fdA5tfH9LrqPnxivFBcRT1Fx6izzdRSK6tU6VKSQM821JCvCmpcK8cY",
  "key41": "Rb7Kz53DeedGt2izKm9SL2qCB1hDmCNdgwAro7ica9yKXqZP1dL5VGYzdwR9u8UHF7WckbfcUYpQRCB4vpeVHUp",
  "key42": "wGW3CSeHzZGFuruif7V7uEV8Qs17VzSKXvWrzEmAcxX5ZDhJoDucpDUK2UrARuEufDFMtB1yVW8kQvv6MCdeEDN"
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
