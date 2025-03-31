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
    "mMHib9M9MGr2mEmXUpe3XqWYQWTSAMCCXjSnB3V3QX3LRxF6HYFF5HbwZxWacXaMLeDnrZUZ4cbJmsryvNpFKyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56xJRcsv3KUzeESg8EVKi4AyzdfWKeriL7JVibtpGsBqdyfUcyEgvCPqPvb7cHKprjySgS6YYSWzBQPx2sdKtx2v",
  "key1": "3FxRXW5egkSeNWxqMLBVqNvXBHy7A5D9GUAR3pj9hSSKgLTz456L591fg5RTsZGY1bTgVBWnoYHRfmXo6fw5jcLK",
  "key2": "2XW84p4Gf6286HvnFeERXq16Y4wfJbtaoQ1TKMkftGHaXLQTTuCQ4eMweKDyQeNe4xT3CusLXGBdQhn3ynyEFJ1K",
  "key3": "Lb8X5TwhFchSD7JQqd1SJswjipSFgZSYYJA5TRKkRc4SgTLyq3cCv9C6JC7Q5EkZmKVMSMz5hGhd6G22E7wQLtJ",
  "key4": "4ZdN12L9XaPjynrPJYHX2S27sU3Eou771xHyeC7E6hCAutkFr5LwEov6PGsisg4e5q3LuSoCHhC8rgjji64ZPqpN",
  "key5": "21qJqieD8LAP3L5BpdtxuiqqWH5WaE8PTA9mHw1GNtZ474X7mY8zUV7qCLH8aSkDX8tb5pU3adHJmHLNow7FbZvv",
  "key6": "3cQQXCQrZagDMbnP5aPV1UDq8k19UAjJiBdJBQFkMHD9dDKM2zN4mS9QrUgFaMpzVYhL1XVXPFekqcTifMwXtJia",
  "key7": "43u6k8udEYBC81gEwyYjFb4tNFbQSBVsRDCpaivf1UXg8XyKxxHQkRodc3dDaJVSjAgTSzqUPteG6hTLsbdGS5by",
  "key8": "5Ug3X4r972ELXhEjSjEGxwcaLdscvy4MUMsLX3tm1VqA4is7Hcf9GQkPKQfvZHmsc2zsgrMXYfvn58yHnCEFkpXB",
  "key9": "43cxqeN5WBJbVZceL9Ctn8sheWfAtTZ9DsjJtHzrF6nD5EGkXjJx1dotQkP2kVa2kqYEMBLMSBJVGvq651yMjEcm",
  "key10": "3AvKVQGnj5ErxZq2u4cUQF4RuiY3LP6NMTC1DHzef6pTMKCVcLjSd8TPLNWjBn7SvRQyGcMyCx9LEsDTsd3RLiya",
  "key11": "5Yq7dTAirF5s2FnRhnVKHzY5ay4xfnDof5yZqRgVbGJvmraNovCFQzZvETz8JuiagvwYe1gMi5uY1ic8xujtv7cb",
  "key12": "2aPgoAFgtSDaDu97sTotjTDhqjeJaj3iqtczhf9tn44Wt6o4YnWQu8p34kzsBjUtJKmbb2Q7uu79TkUM1QDdrrLF",
  "key13": "pao8ogLUhN6V31TXu1Yfgs7Mu7Wo3B8fn5g3doiFzJbHPGoo7cLcPTPKHVYneNgU7zYzCTZgfozdqcrqKjxaZBW",
  "key14": "3vKiDoNMFcyscPDZpz2Ds6bCr7bvrdRxM2MsFi12m5V6zFKyE8cgpaURyhYVR4oumtww3zbVVJForwiJkLwUemUu",
  "key15": "3So87ibNzAKvj6xZ2arTUJD8LLmXR9DYpiSncKSZzue99cHf6yDtTUGRKTFnHNh5zYdRqkYghNiS8GDoXbfzVJtJ",
  "key16": "29DNjgDLa9VfZeLMRrU4C7AiJZRv8iXqndYUECicWAEutTQZXfp9dtTTGUPCobH7oL7k7H5y8YpzFY227Jgw3MXK",
  "key17": "BdJVn81H6kmFQY5bKyvcfDkT6x9onjWd91EwY9EHpPQq3Kaj8aSRjjsBrG3p42Lg6EFgFBv23JGNtosefxTUM4Z",
  "key18": "jsp2PCTnQuWZT6NewP14M3L2yLjPdgQcYZS3effrE9g8mY5hBUGeYQz7vH3QchhazNiwvDnvpcZVmi89Mhqd3c6",
  "key19": "5uUzs5yHeirhRi2kG1csAEDzgjXyhLex4RpgEuY1ujA3Jztimb9Yn2tKVH2GiffXi4wn2QNVfeCtPHFArsq76rYC",
  "key20": "T12BXW9Hrv2wQMzYfQnDY8JvHLGTNPTeHswNWyBwyTkXqRpUhcpfxxn5Gx5XQDtEnGV9fG5JGiM9korgkNeMtTL",
  "key21": "TwGZDb4nppDRjxrTqJ3UkhTmtqFkxMCh5xdTTEkYQC3rtcvArkrFRoFy9woB4j1kjDsm3yKiq4s9Nakvq4b4tGx",
  "key22": "UdycBoaZGxxcwaao8rY5HdzVS9wWbJ3Zf2QcDiw59bKZNA5GdXFZ57igN3NN4Yhq5DJhDNenJha2Ufx1E8NwSB1",
  "key23": "yzMKm4TBHWAnFpZ5BTyztBiW9cm9ENxKHZHEkAynCqLXk5kVuZWHVRoAVaxJh1f6Wj8BFB5LMxuLEmRgtZYPRNN",
  "key24": "3bmiAeAWzDxeQPqLYNN9WqFumK29812t9A4i45rHoNgDHMFa3xM4pzzrDWB8S7SYi613uhN5pmYd2pQCwmzfmWvs",
  "key25": "2cXpYjthpaa2p1PgEKRLktfPWqnr58PGYrsM6mTBiQW6ArDnJHnyAxgpNqAUFGUxc5ExHopUPzsDWxaZ5briTiV8",
  "key26": "2uGy9Scr7X3Xatndzq7B26n4A4J6AYeLRvt7Kw97pG6jYQkHjbQY41mziq2TSetptajBs9X32a46uSHfnJdQvEDy",
  "key27": "3UxBFW3cqMTrqWM4m2y4Mq8peLuGPu8GxBjMXp9VxunTrLnpnyKLKVW5ee9HMwXdgn2vyoph2sNYj4QzjKqhL9oG",
  "key28": "nnb4gscGUbDtFTDkZxgboP6UjoXwVR7XQeXF7jg9oWca6iNQhfJptwNeQEKSRmswFLqkVRWx3z3oaBz4hWrr2Bx",
  "key29": "5vhbWG1gRV9iDui28VUg44QTLebMvtjWsL9XmRRGbSWzDSyAEideKKwCSE9Jhyvn22TXbtnbKoXUJEqWnB8eskqr",
  "key30": "5A5u3jjfwukT8AQkuiPLendP7ov7STZA9Z9P5J5LUn26f9ahgBRcu4Yos7kW7yXADCc6Mwye9rfHeqrb14ATAy7S",
  "key31": "4i8idTL7bqT7xGiLKnyNE2eggZVgk4kH8ZTrkM26yFkXsJfSJ81PEbRYjXLj8GUxGucftjoPBCpau6vLuHW54P1e",
  "key32": "2mVywueq1CWgCfzDx7qW7qMEMz4y4A7KBB8kvgojViC4LKujXz1Urr7YcNxLzuXGus6c97FuNPApiwaGmrftbqxQ",
  "key33": "57nFTguPnkujrfdtaLQ1TV1gqQFauwafXCMvKCnezTkMqVfTrN7CNTwrP4MeRMMHPEXRUFXJoRQQU1AAUFXCykH2",
  "key34": "2sUL2XUP2nBMjbZwPt4EbEYkuf71tLmtEQRzzhoGcWSKyMuiU9ESdvGrKdX2Mk7swceu4eT8MjPims1DcHLsYz7q",
  "key35": "2bWqgNrmDAWviVmjfg1PSCVJUMtM6hy8C4vQ4TMFrBTeuhU2Ask2DLiWZS4KCtp947TyNoq5CeL7k42AFJCN4sdx",
  "key36": "29uLNcwnxSfbMW11WPwVvPoqQd3Pe4J4T5nW68Ta4wSj5NyZBHN2uYAbiZTr8EaG3eQ7hkqofXx8PW7Min8z4WDL",
  "key37": "6XJBH4CjmsGtCozjBBxCXM4pJfwpyvfGQiwZXjwhx99AXmN89XnLeCRigDA3J6AxJriYay4rDio1fpX7h3L9cet",
  "key38": "5JZsZAVE7GsSc1AakPLkK8Q2niUycArhNKxCxzk3kcxKxnvrgDzeCJgTo5vfG5exRiP8e5cA2PBBepD5KzxfQw7C",
  "key39": "EhqeWsE3xNTuFJSYabVrCh5Bgw5J1gK6aiy2ztsXVFYHmzDKS5PpATeeAxmjSJxtBUep1y8B6qf2oav4sTe4yaJ",
  "key40": "4wnwYjbRG7S2CwN42Dfi3164VtmVMVgc4sfhTExWjaiJeQ844Ya6LfyRszSvphq2RRvKujYCmKpa31QvXXhTCfpt",
  "key41": "nobeRxdgB4CxF4gCWDubTtw7NDsacn5sRfNXACjjGEr552CEeedoizSpyrxiRyKgoSBqHLLLedFU93i2dNhPfN9",
  "key42": "2sVJwhrHRgAdMTXQSApJqZCVHDXoLAs6gJXvhz4k4vWe4ouLHNQsD9o7PpvSkDgFLgFa8LTgCL5LVKuY7LYUUHnA",
  "key43": "3HHLZrH1R1SExtGWCiTpr6BM2TdP57cUToDuk12pT6bxuRgRD9wNRtAVnoU85fN2tmhCJosvbF4AzTpu7LyMkP2M",
  "key44": "wiGPgrkUJggkrrBvYNz9K7K28Vzu8VSEsi3A4mM7p8v2sMDgDLjAgjX57SsrzyCAmkoJoAabhSctt9QbAm8o2cY"
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
