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
    "4CkLNUvwLs9eae3B7GF3vgQp8R4wbmALrw2dFjoJBy7ud1xbMz4zj8v54XArJiE3j81WRzwU9W1HqsP2ytqP6fNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ESHt5Gpu8MDR9ooCarJaQxAHyr2voZKPyEBr8KAK14KrjX2pwcnLVPcXcZzS7DhrJwYPJw4gcSGDLEdS7khbPjx",
  "key1": "4uRLcjsdErtvaJuc7yRf1xs5KieotG4WfqPFxnc97BeGnaqLwwEQ15LF5LLDf3aMLvyskVryPbnLi2JN7wJgE5em",
  "key2": "3MUujbTmt9K1wa1iArdSsHmcAqJrvT7SVovFFDLUukiunbQLEvC1uFMZAM881TEdQwhdjD1djkBu93YAXqnu3ykf",
  "key3": "38qdhtTFTFYy2jKyHHYhfU4c8ENKHn83ctZpLSVZbhe2TVanTucDJSgUP1NKBVYEhou2iksMRTiu4dVYaYc2pmpa",
  "key4": "66dBtMQcDPhbL4rFgzBnQqKdNHEQHboiSDm6WAQXQVZt2ajSMNyJxhEKrjxGRhG4Ww5Sbuk6MMvh6ZEBcBLuHRhr",
  "key5": "4fZviRwE5Hsp76FnhrWkP5FDFcfthwJJgjVofPpbC9MLMjxTUrbpocdfRRmGbz5TxFE2Rxzmiq2GvPFpv5C4moBX",
  "key6": "5PRp2QsjsiuKnMvJVHr45sN361SWM1ug9oGNQq99kmKtUGTYUFgCkiz1hV61GnFbwqjggT8PVPNJGFcUvC5Egm1G",
  "key7": "2DM7C3mDPvYPhR7nEm7hpkb1pQ35jAyj9a1M7QE5NPdfxa6NeTASpZi4YczzDfA35vQeHBNcWFrT8aKu4wfnrV1D",
  "key8": "5irJEeqHPaacEBqEHNr56W5vSX2fJpPRrX4cgotdopA1sdiYh1SdjdwdwEvb9K6Mgx3QNQTJpomFSzWLk77SnjUv",
  "key9": "4qnC7t4T35HCg337ijrouuqmdSPrwLGMcgJ4acmvwxRzfsNmprZZaqxFUkWwiNTkYYvJkbfFnHkMKYhe2QSBbBnP",
  "key10": "5VZb6otbZGPD3bC75uKuFdCw664ptBmjABzZ6jRWXZDxDzKEPdffqMokDWrEsVNfji6SuDToihsQqCDGAei1cvz1",
  "key11": "3FoyA54zdsCn2MiMBEVm3CEk5SSNxia8nZr36LF4WH1xG2kbeZt3C9xcK9t8pNBS1WmhCsN1tJBZbUuZwBBon64r",
  "key12": "2w6BjfQPWYcPh3xcbzXrqVNxK2tPGefGAd51GvFDMyqG4W91SiDhhHwgm9mCtxENYWQ5MVEpkqAQDztcdWJ6Sbtv",
  "key13": "4UAL5wWRv5TNCpEmYAkrmJ2RrCKCAsPuF1FwvzqNfjrCYXzA9HsM1nMrW5eH6fzvYv6qSLFrfyt2Du5RfYNY46JL",
  "key14": "5Y9HoeCLjQgcauyspDvPE1MNoRGjmLgCJsEi5CgyFekhQWuBJQyRRwhEcJ3q8kcyyvpAqMxyYgZ2dYpGtFyhU88F",
  "key15": "3cMAtJiL5eVV2JXBEJzwosNmPZFjvcYzqDVVpw7BorVTrpqM14fnKBKfT1XnSBDVpduEyR2gVHGQWzzPitWcRDMU",
  "key16": "5pn2sfda49r7UMaAMTejm1rRyod3TQvoU6oeKgXRfP7jsAvg3zBYRdX3eUao4yEDfKSG5nH4JA9ReKd6Ts7heAvk",
  "key17": "3z1UAeihHihv3j1XyURiM1vkcfD9R7mHnhUModqCoG77g1aqWWpVxH7KaLUKWoyE5qk6JoCcugtazSWepCo7jHna",
  "key18": "5Cs8ySdbAVegpy9pVnq1yyBUFLdwzySvADi73tr3ARNgPDFXQ5VcNfVpU9uJekBByLKU48HdMZe1yvZF2MFF8hhT",
  "key19": "4Jy47Lx1HHSRVTzFTzRsjGNPh4UBxnQwPr4KaXpa2P7jeM5UfV7e4KBWk5xhqd2Tt6shYdq1q736mTS3Qj27o5U9",
  "key20": "4DSyRrPc8EmC4xHAidn1d8BEFZaDKY4sJYRcjq9V4EdwebKwqHgZm1ezSeCnAsY2kq88tBs1YnqQuc7qBkHT3YS8",
  "key21": "45Q3o4T5mxeeP6MWYBe72yV6BX3GxjT3ttqbmwNtQwmdPLZrWrtuYuiSYG1F655tyDhMhBQ5DqyjZLUM6YGbDTzY",
  "key22": "5iR9GTVT4CYEaYvFtrLnqY5DsBn36HS8uXV6yMU4eaCnQ1W8ZBbKi8UkQ25r8Ek2cP8qxeJkFw3P4MViPtSML7xD",
  "key23": "2HLbKNvsvkNm3YMQAF2dknCr9YVaBF5E4rq4LqQYUbAY1fz483dNPgWxA9V3pgk6WoA7jigWWiKFUZtD7Dv6v7rs",
  "key24": "Y9bey7nvEui3mJYaGo8QNBZ9MtSwhJCj6a6tpfabyBouiSVkeW33i18ofGZi2u9vJHJrpX99Z9GFdPgX68D4J1H",
  "key25": "611Y3hCR4C8mcnY4KQYGuP1M1vZe6F5LDKp8XuFoSpkznhchb1Y1D4FFAryiUxCD25jPD7ENmUVGrq5Ec6TaDJXW",
  "key26": "5H6wiiqgdWFuAyxKP6F9aQ79NkS3KuZVhAhJWRK31ZFHnCuQDS1MiMW1ytUTejAnaVQyZBfj7VLxEsKVLAaGZ6xJ",
  "key27": "3gmVXuY7GYzEqEefhS4WbkqB2kvBwfat4MrgwuqJyfCf55rBTZPxDR3Y3MU1ku367T3LuWTCsrLYs9fUSjWok8HK"
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
