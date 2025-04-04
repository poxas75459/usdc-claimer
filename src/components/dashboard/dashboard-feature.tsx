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
    "5HG1AKKQcz7rG64QqgeRS5hM2bE7wg2pQZ3NP5KtSbSyno7s7soc4dTo3nECdra5XwnkptxRxT4Ri5GxCSdvanpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ipDiXnBjh4a79WQjHniSzSBnPHP7htVNnz49ucfGes767NLMpc2rU2S11CpGRaP4AgZa8fzn56KDrgAMk7DhXV",
  "key1": "xcBp4LSaYUTo3CQ94zCjKYHeZDoNizLK4KNm6d9JA4eDiNtYkrbN2DCKvxuGRbjMyvSZ4899zJfn5fEa9nUPTCX",
  "key2": "1MpG1YQjmKCAqdvLJxqYSSBeyWZw7BAVYYR96WSbmzfXYWRqjh8XYUgPFhcUCCCBYjFPdJWPHtzwmGnHfBoQ2L5",
  "key3": "39FWepzkcqkyhg7AQFRc2JXRyDU8UaxjVwdxTTzckUpGTAnb2PRBauowXNpPyyU1QUSn9qHoWAPXuJ7SXAzFTZkN",
  "key4": "YnCQEFKV9bSfwxeVoNoytindT2G423P13LKEjsaNLdekmrPsxzqMRyV9rvikbX6Q6nL7FvjEp9ABAAKcKBYx4yD",
  "key5": "m2YzBwq785VsajmmR4bkGNPA5w4jKRMZdosLx9dyruYt954zdfVk2jjowdNca1hFVjDYerQ2NNud7xWizibWbHX",
  "key6": "Qmo5UtWJWSiuBad7kx1AvhMW5Ds8QEbNfLWKF4vh9KQUxbP4cqxnwPm3eUDBd9HfqEbSiyBh4dYEHT89qVsQvpp",
  "key7": "2XrsfZwWGQiBWAjfuxt5WWrDP6f7f2TRjLNujYiZqtmwij4FbBV65V7jfxqJFY4mUKBVYpy5QhsjNogtur3zpdk",
  "key8": "5Ron88KAmi1BV3cNM8TFJVt7fmbRry2qoeqUrAqfd5UJtztMNqPJQU4m97PjQWZvTwTNaATobqdyBVB69wm6nssg",
  "key9": "51JASKV7sf5bFGHr5EbitkwEntXc8TBY42XC4kWUFyUNLhMZ6BnaxBMPLsVwrvLsuTaDPbrxKipziPeKRbp94ES",
  "key10": "5y5vxVTgB8EDL2Sic8HVkeVwf9YYEpFpVisYvWwttY4pszhhbMZSVStTTu1Y2fSsU5PBQeSkQn1iCKg9eH91PXVT",
  "key11": "4DkyxwRGt91pK1HmM7FpAa2iCALFYsQUp2RmfcCNBwda5AmxrPo5hPfL9k4zT7FaRGycVxF3y36S1VQn4ean4myi",
  "key12": "2d6f96EQ4fHyR8ZohZxvYrk9PN9EPzqCNn3JTe6RCWtdPD1QQECArMGE9ZDYTekVx4skJi1CniZQ29mJhdTkfsp6",
  "key13": "4idZUc8vdXcWo64TRYxE7pdPAGTDK3wtRLPWC9yKdJv3tNj6WK9VAqPJVzp3aARTg95DDz59hg33PzGDmnoXucPm",
  "key14": "2KvsM2ghQzF2biTQnzgf5ASsjT3DcEv6wsT9zgyF3sBFCnYynXNbaoqtsgJHG7zxDzHuULsGghPSTRzURnaySEpQ",
  "key15": "3mR8qAxFCTdrytYxyrXjLHYufdEmChqhS2zxRdoZk3o7zoMx9aCTxiXMzJmuVffG4xj2L1bFnyfTryhfK1xoH3vu",
  "key16": "1XFNZvmjbhE1WRfxc3E1zVjafLtvq7Lx2xTqePAtYbXDo8CBg5q41iLD8HQr2bRNm2rgsk3AfuHpLdeNtd6tkDe",
  "key17": "EXskzNCRe1Adhs2vycT372vY7TDrezmDrMZaEPCXt6BsGUZrt36y6NxeMubiv21dJD6WGiGQbgGCcJtmzzBtobN",
  "key18": "2vTeTQFGkHU2QLQNdtEkhdyKLWukqbUPGquSLbp2eLoYUky5eJLgFfC9bndUbkqRyCqRYwGMn1zGYySw6wDTwVXX",
  "key19": "3WNucZdJDSs5PQwETHJSAJNWRMvNHTnxVJuhFvT2KJd5oCdd9UPchZYHBU5AYZ3CJJ1QVaYEgGB4386H2PktuVnE",
  "key20": "hLizZhQPLnMUR5RHxtVQJMNTpij3N4hFrTPbmXZATMTGFeRQSTGxAxng6x2zfNLpwJEZdCEVUTQA9VSajTN1uBD",
  "key21": "2w74LzypoWYX7pJ6qeLEipzBdm5TcmyZF9BncveCjf4GFAqZLQF3vKGtubFuYMakLiSrkdcWvgv4fobsqeYqHHV9",
  "key22": "2THW98futWoWGBK6tmSqucy8uqhSMHHWQ6tLK3ue9zCBjV9utx6grDsKmkVRJ69Xnkb5QFTJviggLNQKyby73bX",
  "key23": "29HQkAfJEr3d21JquUfLoiPZ4UqLLBTJdmoECVVeG6xtkAJ9bToSmsnRgREzV5oQyygHCAvnDHbnZknTNYPgTwV9",
  "key24": "YdhkcdJC3n4DqoyJqfGd5aKUy8bEV1HmYpq1u8J8p4nfahXBZzF68E2gSQeEk1r1ZAZUJjXeeUQg7LWEYZoeSLp",
  "key25": "3kBmz8qptqsm6ENuZCjan8inRpcVdzADcBW9Ut7gx12c9hreGZbv6SoPNZMYxSAUEsmPTLmEdEHuUsgfVrHtD2ze",
  "key26": "5dcpEDtphaYq4gT3Tha8Q7KFa2ei5AcfqDaw8KtqTnhQxnsjiDbDgj71eYBwCVnY9N5Sf9FUwt32wLjbxyEa3mhT",
  "key27": "64gTCqx28ajvAuJWALnQhaFbMd13UNcBcEry1oJAf4nMgXNQ43ZYHRZGdbS9baMtFngxbzpqBpr1DgW1owRXT4hh",
  "key28": "3xRHHaS8oumSuVwu2WtepFi9MUd7j3HKmDMepcvkL8HANy3fvCk2TLM59VM8v2K3KGt3hF5i38QLDJV6PUrRfVvr",
  "key29": "552ioFbEDZxtmVY8ccgK5PM7PQwVK5bjQhXxSWn5oND1v4BJaULM2HexMzqjTwFDwf77vCHvSxYqS7nFhXhpnR3n",
  "key30": "2jEaNNWWRvjPegVTUthR3X4W5pPorfijuPKcZVswJ8r6dtJVnXmveSu7M7taewwY5WAwGq9JgokDaKKzqW87f97B",
  "key31": "3BwUfiQ5VJ5fFLUMG8sVdwfyseggAhJm1CUJ82pyAK3MwJnSkE1Xn1zP2tfBiTfGTJLW9zBiK8eWybWHPJpytw3J",
  "key32": "fJaAPqx1EDAhBEX9sEXG3H4QwCzJRoi7H7mbYnZJ6YPXXpqkFAW6Ud5C3FKaFtKoHLQta4upuQKCo6kEsd9dRPq"
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
