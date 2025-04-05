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
    "2Hnnsb63BGqBqzDjQTpxU5ANBANUr8qZX4DLFKqtpEyti3xTX1e881Q3Y966UBjVL3oSCUiUQPpXGzveDuetcvXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Xti5w6HF7WNNiQsRSB4SB363uWLMNB18CMaJ8xo9PGh5dVzJhaCGPH4BF4Gq3nxBKq2KcqDdDzP45tQFt7EYAi",
  "key1": "5F6iRmD44psYouru5anFnCkB2sYKrvkVZx8qhMkvaAoosipFpKyDwVuKWgbhHxXKY947czB7RF3JLiwX1Xi3Vft8",
  "key2": "3yBGorke6v1kk2vp5PhouAurWp8S4i9EACGo8uwUNFM6kBVHZ4NgsZT28Z2iAikn8HEMzLLReb9BhqGjTRYEVciv",
  "key3": "2SGWoivG8fsGHv3HSaP6XejcmwEP2TVmTicwePgHxe7gkQrJQEDVSBY3yB6xFjDVNTuJiuXZe94vG3TsdgiiVton",
  "key4": "3BzuHMvGycW2bJHNQ9FYnh1YVjAE2KKBiHGL7JdyL874BbtqdsJMMNohv78P4H2MogBVvyU4wMbi8uftGYZZgFbt",
  "key5": "3FhFbwwotXmhePtY3xXVucStdBw6EqxsUicmMByQUPtfDjeCZ82FPLrbTUz2hm39rGP4bUHWRiKJwroh9T8LAGa4",
  "key6": "54muPfhbAemkyvxdpw14tcoDP8JYkcxgCNvZwB3yimHWtBcgnmGxaHXrr1CwbRWo8v4KuyLMLMq5JKZbR3ToBzR4",
  "key7": "4GeBBDaPBuhj6vsNB1CWSxPcwuyQTLZXQAyzLn9dbUxFcocvN932HoAdcV2u85gZf2KZRc6ANQa31WQDUasPQYwq",
  "key8": "3LeUkAEZxn3SH7o84vEKLUn1oAbNgvjCCTa43n8MTL44ydHywkL1pjHtdsHFQfw9oNetTxzsdYAz9RHFfuWB7SFj",
  "key9": "2HKoNYYoxKheVhqWL6MZgofANUnz1kGB1HvsDkwqakg1QCSxBjBLCy2FbJ9PgxFRoFm7ekzfQ87ffedPGauiy8hm",
  "key10": "3AnDMfvgA1TzcGdC8QW2dmP56GGBthxGuxX73rPpLw7DcVFRBZHHFNMbDpx3B1fUQmrZ5UfgpVem2AVaiDzuPijh",
  "key11": "2GCkgnmVw1RdHxGpcuDqxEJuqFV9Lrmijzj6w7s3LVZrJaCm4f8v73KdvEaxyQ83ZEq7tAQnfYR9K8jq3DswPdk2",
  "key12": "45Txr8WzHUf1hqwZ9esZVFNRHVJ4JRdNLPipXLXSLVca2p71Z6Jp8EtkmFCVtdq5L8HftF8zAYzjWohrwDL43Nmw",
  "key13": "5Ab9Zj2FdgbdWMxuBUsap7d8MeXgCQjsqGGPAJGqcTMRd6Ce76HC9Fwic6F9jCXJNFLqT7RnNcm2dNEW2tkiD9He",
  "key14": "GQQ5ezjNskL6cMu19TYvV27utkXRkx3mjQgWpV4UhyTDo6yA65LueY6LvUC3Rzx6X11ihbsmHwSzPxyYFWxh4Fx",
  "key15": "2gFpJ88TKSoQhJG8YUPB4ahb6hgyAubWYWqYcTtEMYPnvVTPSUJoiACKuqA1TYrzPVigoKcDbNf1VaGbWCTMQx42",
  "key16": "4D1gJRKmChc9gaBnLLGx1guDkUH4n2HSFxmkaSctcBfk3VpA9rpQWG98Py1jvYd4nP1y5NJNKMXK8vMJSmx1zkvh",
  "key17": "5cfHvvi3iT73QDVviRSsbaHoNTCdM2Ho7wbip1s9GCGoQCNrcATE8RyXxmqcPJDRA6ubzW5g73eTcAYFWcFrQoxw",
  "key18": "2pwD5Brzpqo31TQez9hsp5LdcvietwgrnLURod2USa79vFMF9cQ9FbU3L1m2vRghGXiTMZHHs4zae6pMHeqtAYqn",
  "key19": "23LkTpihkYaKEkDBoeVExXT6Ybq2uywtpgJxtGnnemXNgiDoL9nqnmY84oJuscgv9RLbvAiRNNNVYaYzSXJRDW1F",
  "key20": "5N5KAyzhjmGNPe3Vf3vExNr1DRRTTyQnUPnGUHxAxf4Yk5C4K19Q4KCreh5fBP8e4QjswMsTJmyjJvoUTXcLek8F",
  "key21": "5eCrpy7v5DSBbLJo8TyvaWSg7nyhwBw9VNopZMn7Km7aJwG6GAZ4NvfZLtUjXnP1MkV3eDZSN4KnWt8Y2x7Bocur",
  "key22": "4qWhzCFhAYJxLFhNTnYKRyEJhnLPSbRnPyk9nxVtDna6meKBD1iqn6H3ZwaFVTzBQ4kfivF7f7K4nDQ8rxHAX63X",
  "key23": "tCzDqehDGxUCX2jhcJrbB4tvxTaa9tndV3SLyrcJfaGcsppWfoeTkVPWtCyZX1sn262EN9NCFojnAw3iijQjgeE",
  "key24": "fBGv7CGFNgufjkiEdSXozmXVdK8qjrG76bWPRSwqMYb4Dq1EjqBtePHaBkd6bLbGuWKnft4GyavNEK3cW6bq4Qa",
  "key25": "2fP7DnsX4GiRo7B4MjbXcx2Wa3SCNCDEo5QtKjM91bqyzCXy7dLsVt3qKK6ZUEqphjEUbQkRfKMWKRrER5n6cQRW",
  "key26": "zHyqYd5sw37HeW6huMjM1EsUTtee3PZxTwq7L2VycfrPbFp1n58mre9PKWRQgWAUHnVeXWShNv5gYtLMCfNoERK",
  "key27": "3G8jT4ceL9aQxvEYiWiSAwNiFMKydhy93MbeK5e7MFpskDDxM6kcupWSarhH5mTCHiXoz3UX8aFQfJqwDA1vegau",
  "key28": "4GN9DhVU81vPV3qEkcWuNg3L9veVGUvrvgxrQavz3yr2zRDQU8YAuMKt26A6786WScPKZ8975xAojFQmY7FbPJv8",
  "key29": "tj8jEiHBmQcTgfpBpvDGK65J5jsatHGtB8y9J4Ub6QUYjLzehpyE5pCe7tg4RVPLNYLH1JVQYCNW17VNf22MYba",
  "key30": "5qnRQcEqe3EYTaVkayGbb33DLZujQ5bp3iCFW6HSp26UBMi5mTyakepwRCoFjpLRZGTrseqTRUDZau638Nbnsyds",
  "key31": "659kkDTVjW6SJoP154Lqt21qnigyf1Tyc3g576GenhvWEeRqdFCSxbDyjq9LppfYMTGj6b5onQQb4FrhYkAECraE",
  "key32": "4ACPBYo2A5eozmF3d8ZBS9SpCPMk4bjHW75Nb9fn1scPAay8a2REpZxj7bMMwWU1iVW9gQCtoJ2LM2AFgF9cjqfi",
  "key33": "2eUTTFaNEMTVwinNUYA1sE2HTj74wKCyHRvGFg1BuX3QgDf4vPomZSfhgGpAF4VPseqQaBWftDaHA3pHDPCFGV6y",
  "key34": "3j6hRGmBgENNpcByDnhUhVJ36tTpBj4BdD6Kg2SrxdoGH2XopNuNtVHiXUuzTJK3vWLUkvv4164j5fu1cd1t4cCg"
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
