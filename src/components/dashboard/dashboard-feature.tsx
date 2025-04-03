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
    "5oXbRFUQkMU4WSHRGCMLWaRERaaQ4RvrpuC96JfcQvkj22i6hw2A6THdaDihjS2XxnN3Gy6GR2TPbEruPsMPWFEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pTMiRcWzfXHZVh1wzUkqC3z24QvVntU4n6MDxWcBfAFYeGGq7TeKqFR9nfVKKbSaT3HUULwFVtUWrJqwubcM3sQ",
  "key1": "5wxjQVU2CsBEKV5LA4e7RDmB2Tk51TpLhaSSpWTnGg4YVpAjKMbW2fNK7isjcybHP1uGhfHpkB2hdcv8JFao95TT",
  "key2": "nr15YT8VQpNzeRUaeRGCTMnvDPgirWgcgvdpr6KywefFYFb9dMMsajqPN7Jxi92BGs1d4zoaXSuaGDYJvQAzktg",
  "key3": "4EKjPm8jFqRMomZ3GUyYyQ1BJFS8CNHAcvsKzUWAXpA2sXbkG7vFc1F8MJauz23umL4ALDnbSLydB5Udy3ofbfh8",
  "key4": "4Np2UxWsWHiTrRRMoxJGj8pcFzvdxYMAxeu8iKd5Baq8va1Wwz6g2vvFnno5YKW9Qh68rDzq2MoqG9N6JZh8CuHU",
  "key5": "4WsTTFkaJqeqw5wYMGsggx64dHfJ73zVY2JkvF8mF6T8VrqR9TutApT1RHWjUEo26hJkiPAWY91ss2KVEZiEe5r3",
  "key6": "64EQaijbuQ3UZ8Pwyep8cKsydAxLnH91BpXiQZ3QKBHoCM2czK4eUZ9x9586KtADCVwYcbGbPYTEcvBMCuDnviSP",
  "key7": "5zWYL9hFdMyXMtjhv4SJXzcV9b1KGAtq9BJsZz45u4a2aWhLZqRBz8Fn45sE85af2rtN1ajiVB8X74xeaLUFQiNq",
  "key8": "58p75nqBmQTvn1ZHMkrbm8VAbn3x5Mz9e4FeB8VPhAixC36mRC1i5Yma8Y6t1XYRATQMxP863nKRmro719Tpm7ez",
  "key9": "3d14q7epy5Jp7UyEn9Ck74tTVzbQNjDk2iueryiJ88dqkUwNmDKeDfwxVmRVz2UZGABydicEJH38tWgsGrPYkdNB",
  "key10": "2XZdFmz9BHpVU8yTdx8d7TEghM8M5oF46JjsB3hD7URNFw6WQVYF9JQFpkiL2HbjUWkxPSTPsJbxSj85ZAqK81rH",
  "key11": "2Lq9Pov2ig11ZM1tj7XHy9Y28D4VWeLHg9c6ojUV1YVimKPKEU3CWn5qLmHJQpy6YnV5rTL2UcnW6qYSce3MFMUt",
  "key12": "3MXLFsPSUdNmeZ6QJXfs4LvFAw95dXfci7F7vBj66w7kvEKP4yw9RSZdqRaPEBsAjJgFstkaPBrseuJN4DrqNT2p",
  "key13": "4sTSV5GRemjjdTQWbrGf9fkbAwPJqst2z6ULjeKxtRZBxh5rx5xD1kSnPSEyfSzFvXge1tAceRR95wHYUegsrjUR",
  "key14": "qmpAB4uTQRLPPT7aT5DJ5HUqEf2cYWu4P5bghG7MHFNER2DWs5K2cYLoTiWVFnfG5fje5A1Ekddupt3w1mjp4fp",
  "key15": "5NWcSG6mzUYhyGAMwqGH6k9vq7hj8Dt7mmqUrLP5gPA5u7VaMN9fv5jh1sqCDcFUK7kvjAidNPvgMafYCmFjW36f",
  "key16": "5wtxFkAqn97gqfkSXJwZUXHY2M1XnaLLdj3FAhNfsK2XwAtFp1Yd9QmqaDd1cSuDYABdpNpdJYfN5Gg4KqrARwF8",
  "key17": "49DN3EJKneNUWxY2E6Jm4eJATRWGZRzM9wprSpxNW9iiEWx24VEnu1TV7CAwLkVjaAC8cqb8asyuUmaT2jnAN9GE",
  "key18": "5L9VPe9SHWS3ddCZUjUpeaJnj9wJsT3g1GFpwVRnirR62sjmMo4gtRJiSioXS2b7wWoRpQpxPmM64hm4XkBAzgUy",
  "key19": "35iyoRnaYnya252wDfhNB7FLJpKXkSauuQiKb9pdmPEG7GDKrQsGcdX2ziYxZL44wxMtaXch8wACCEc8HiQo4BDx",
  "key20": "5VtHyRbboK5yuryTyPwudyu26iKxAEjCX95vZm5VWufwjaxmafBGUJynemcs8RUiAgJdNi7WmaprwGYGEvuiA76",
  "key21": "3qkgQJzdm55jRo6fRxLQ5JKB49QsajyL8fYvKDcGJzWApJHqWaBpKyxivSssoS99Xdbu7aQ9ShSkw3XrvbLf2sYy",
  "key22": "9EYzY9QCjnRhseYHMYXvdsyqbDVDpifeYaKDNMx7Gzwm4znLpq48bgDXMcnpqBfJrQj8Dc7f1Psve8JSaenYMkP",
  "key23": "39pHqcCLnFZxcW8Y9BesZVhyRjFC2Dhcogo8H3pu2eccr8rXjzgCsaU8fyGNtV4ejEQVL8EE3WbegwsM2EF2GjE9",
  "key24": "4V1GQMh2mAiRz8ydmj2TRvaeuMgEHvJUreSJfk6S98P7tJowppotS9TobhN16wCNQFjD89Z8zNH2UucqL5c7RmbL",
  "key25": "3JamYGsvsKXfn8KYdNqWTrmQiHAFBxTkqo9CdnJsfxgY1fjF1Kmx9opPYwv5Bch4pjanTiJABT7hx6582mzNesdM",
  "key26": "2Yt1R2fzcTe7L8qybiRAynuq5Mi7hwRJpz4ENv7JD99egcsxR8Fk361iD2yEc56JJRz1viW5mJtSHnCi28imYotS",
  "key27": "4aEETnfGkg19KYtSjRj3uwkSam47mPzism4V57QVQc8CgfHbnkmm2Foa9fiobVLDpk65sZySiKeHnb3QZnWwNs5R",
  "key28": "5CP4yLymm8SZcqTDLdTp3vqzLz3WKBPJYowcyWi25WcmtK8r5MH4b9pwBZzyKBSLPZq15ZzEH9o8vNdfDRHmFChr"
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
