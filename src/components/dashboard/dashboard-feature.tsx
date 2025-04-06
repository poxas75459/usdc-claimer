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
    "22nFK4KgkF9yaYkmFUEda7XWKZ2n2otdg2mK6VV4oxyKWNrH3d3FcxhiipPcWEZS8Y2nhN64KCWbksksgNrpVtq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xdP7pV58Pfxe7JyPzvnjnvpGTbLA9YT35pcG97YeqNU1WZ9wwnAbGA9SwkAonYTYe8whNxoJ63F9awT382iCyrp",
  "key1": "3Ek5XCM6CX6B1Fn8uPia9Qud6qM2Y4VySb9YqgEmb9LTpdVuzBZuypnCn1NMbtX46QBMmj72YCdiwThZm1bNEsSy",
  "key2": "39UZ8LS8GMpJbpMASXZssZwAaBcY1khsuT4CH2wcXHuNhjZ2jqqyNVgkvsMJHf1ucHakKSiUZT27yLSEFvtgzs1U",
  "key3": "33YuywELCDtoaq3izu6r8w9PL44eqZw11M5bkKCixHtM3B2SEED7DBaKYfggnKdBsRXewTyaybjZTa5iWStb15gk",
  "key4": "2um447GXejjWSdgoUQ4wW9DfCrAPJ8eWH6eGzfpJ5Erdz9t9HSLTAdtcakxRxWKgSgEQqpvcUQFtoB8fj4p6wvvv",
  "key5": "2LEfE2VfMDUNRMCbsJUBWJ2zUtTvMZx39QxFGYWNDSebtii2cb9eobqLVFFkj2L8HKEpm9VLdnGepesXeGd1himV",
  "key6": "5XzkZ2WPftq38P3v6b2x7wNn8yJ6b3WnWoRizSXkQWzpAFTaoNJQugi7zBUCA9SaDpN1puwe9qXKPc6Syk49kMgr",
  "key7": "4U3yS6WDFk4EVRHTYHP82KtDZaYxM5H9oajEuDaHws7nevEk8Wzxr5qwkUV4Mm56RwjrFCRa8X7a8GqY6bCUQuJw",
  "key8": "66f4nNTcyAFhEHyeXERduAQH82oDUDsr7TACe1Yqe82MaYyjZfR7PwoaFVBCoMEjnGYqSwX7AxJ5ANKVedoq4Fto",
  "key9": "5ExNBuATReW2aDvASfXxK7GcrmQoHJ1XQy53cybxSFBidBhogn6BGDgfzbV2ejsBjGtSTtCKGxju9PiHovF5vBti",
  "key10": "4LA1KXdWrD16j3DPkRfUxuzXEP1JSxdvW3R98nTqi4p3yyU4KRbiSXFVKVgqMmqpEPdpimit9N93n49YLtU4ExAi",
  "key11": "5a73mGHLq6BsnC9qqL1Fd7nuAgPwFadVNXGqhPVUdMkyogXHBG5sT7VrRu1ofCXX5rkNr4TRgEJfPFL3eimgjtQV",
  "key12": "jvpCihWCBAwNpFTj7ZPXFLsKWM28J8aT6axHQeVf25WHr568oJLcraWyPdv8znPJbEU6nABXKEYDS5YX9s4k5VF",
  "key13": "48sDiGEybX3Mr1b79HiLRoPJ5wcDmBXvPzHGU6go16X8dVrurB83dBTJMDo59oUMtcjPDBv6vpX8Y95Vrupt2tQx",
  "key14": "Zq5YFoTiHQcCUo3fSJXucWNfe2apG9HWRJ3NWhDWiP9NUx1B4ceXWoJgVG4nVAdmVC899HY97uwvkuvmY9Shy7c",
  "key15": "5d9GgvNSZhxDnncjqXNyKGa23D3ezN4qoWKVk6GdNpgb4G6PH5b7bU8PEjWxy9rrW1oBrReampDNoW4EcFGCBkmC",
  "key16": "2KLvEz2w38vh3S5pxHVNXrCQB7aRXRbmE74MrxXzgymXWkqgoLRsk7TwGVKtdmesARgRkFRynr9vKHdkJp2qEkyh",
  "key17": "2ZsDFmcxEEU7SzaVJsYzHfiG6uh2i8zNjbDPFNuSnioXjFcPjrdmDe4r6qEJnUMzwKTv9ue8nUW6G3q2j6tT9ogZ",
  "key18": "54PnUDpySLpZTfgPSgbMDmERRgEErXdyzKAxPKnkswSNqyLFtr1C8wXwtvqqKqDSxWNtRx2agJzt61reJ2SkJbDm",
  "key19": "2ajL9AYhdDnGon6pM83nNy5WNQ2K3SwjyKBy5kZMRXzQpgDMqwwcXBmo3SwTrhhGzq1EiKY5E5J57Q6g4mdfPc2e",
  "key20": "5JE13Aq3guQnY1MjC1gFv2JnBbNNp2HDRAJGcPjynQF3DbBheGmM7BLqH23v4zZMAqEEC61HLmrBQmpnw8Mrqms4",
  "key21": "3QNBxKJjUbV3mbFStSZvUrxWjyRjsv5TW2xjEnKLk4B7gbjcsthhaAF3FKJtkJy8MsjmT6qLph5yfqabBsa6sSvc",
  "key22": "bLwqBJrqHzx38ZmDpT5eFqN7jDwTxXVPiia87Ew1gPoc3S87ZE14oTYYNynowhRbV1pusReFctJqvzT71zuQrmq",
  "key23": "5bow7dk42GW8iF2TUcBrGEMkQLVV5g3NzUDgWdFtetigvH6MCsFFKqXk7fUQMGgdVEihcveNZqupbh6uW6q7Fxro",
  "key24": "5GJakt7ASQV9mcUqjndVb9nGfcP8BxmvUms35zyCP7Q8KC6xHHvqvdhWgurYvrTEe3FVJVzDocwMrFgo1DuD5sF7",
  "key25": "3xe5gtYMjJokSwkVy55fq1jx9bw3KHFrAHNE86Kfk8MAQiejK4q1tPMxXKuEdZS2Pvb3pYMoFv9wratRVaAmKjHm",
  "key26": "2g4z4giZoC16cjyrBWkSgk2gt9QNPku5kWL5Q6J29hdSC3SJjvcTFFtTWzHw29A2bScVJEspm2zuTVVNbZ6N7tAj",
  "key27": "2gdASWTeTK7oWdRKKw9x8eyWj6Jvyh64rhyydg73aGVyj4t56gKADewLHfDeSXbJQB15n9z6kV87dKoZMxyqWBit",
  "key28": "2c6ySafvixkAzXNEFicnWbR2eEG35hW31cp1QLGmHdEAMStNGAjxKezk14HVQtCWBADBvXHzBm2pPU7b7cDnLwC2",
  "key29": "5cxHLsnZ97vgHqzPr2F5L6s9CQjXhejYYXS8mZ3hsZWWy5rz88cXLedrgPKnMzuqG3LhSE7vgXiF2ePvnSQAA6oK",
  "key30": "2Euip6G8WZ6BNffxcktY9gANNEXKeqaaYLTK3YQgj8erGoG19C1U26c832NCsKHucRcL8FPV7HakQniTrVQVonUd",
  "key31": "4VPon7W5CNWBkPiaXvPsccwYtide1UDcPSFvFR59jMZpi45KH9k3neCvmCubp4rdutGA5NtCWpgg4TEifduXW9Ci",
  "key32": "2PmhJgfaL5FJAdyMpyrA5SR4c4U4sSSYCWVTUNSwGn4b1P6FGTz8msUWjbBTmtqXie3CutnPFqutxp2g5uhawLBH",
  "key33": "2gmeqXt5Bn4adVuqzE7Joxgqm1EiFywdaw5qjhLU15WZbZVPEdyKCDR22zLhotwCioBqDGx1CLKjecVmNpSTswht",
  "key34": "4hNQ6zDr6rk7pkbtiBhDkQxvZ8LGkdrJ4GKpw28oyGoZUuZoSTkP8rDwmGiFwEFopbgKfQE6q4acH3TufUzRC7ub"
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
