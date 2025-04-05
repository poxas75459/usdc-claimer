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
    "ZCT6SA9joMKr44tJA8jM6cktFJXzM2a79rDe2PUnS98geVZkzsVg1QsNYMQrFtwwZDj6rgJ7mQfabK4rM2C6SkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6mGdFpoEa6i1HRXRjpRBi9zvC3sXZEtLKrkKG8XV6hd7pQ4SUCfwwjiWzxDbpR1wGyJjfG13UoNvMabUJidfSwA",
  "key1": "4vh3esaiLZFDUA9wikWpRkgKzHUuT91XD8Xa2a27cyHhkA95QS3dy5R26XPuYiFKGXRbZuybFqr11deZ3PCsj2rM",
  "key2": "5fx9NXJ4pNDs4UhPBvNeTzD2RPd2MwJea7bPtbsc7vMYnckG4s91qBDSw9WkyHcTWqUE8yB4JKdcdrW8PZLfMcnq",
  "key3": "64XfoospxzuKBHzujFK5nECiNnCpFCjDBDowJrZrKhRbTyXdUTztYdpzb9pYykH9nNJWwvi8RAYXmG1bjkvSgHLf",
  "key4": "2KrFkybenki891JbhSPm69nYTbR1AftD7W9rKciN3H36xkTp27mhufPwvw5DBETEwtA9Axo1TSpbi79W9EHHCrA7",
  "key5": "4rXAybUatTDmN1QiiFmnkKu9wrNQAMm8g2qLdfxjhQmFB2yN84LL8aU43ewMJDS9rn1oSPersFFpvgPxYTc1cXqu",
  "key6": "qvHsnES7aRfGQUgd5FdMikAvaamQJMxTkx4GzvXy6z7YcVPh43P4iFD5RKHP5YvPnBdLawuBwugdoJmh2TyrBXZ",
  "key7": "2EZYqsaGDDuGLNndKNTCWw1LCDML6y8iN1nMJBzTipCckwLk64aFSfPjci1m3Y3jdsTVasZNHf32C8hNtrUaM81m",
  "key8": "71BDzQr7tTBC7GQVEWcSW8dzqFE4bMgHFLe4XPD2QgiFSzWBk4jbWDg8wSXBQtAFJbu1TtRy4cQmWFzxrYaQjDz",
  "key9": "322AHEHJMNUhKt4Gn5xNCjjK7D6KWNzvPoee3YFAyRMCpnWJnUD8RH5xbXXdAgs4eCKkYTYoousAEEJVPraoQAY1",
  "key10": "5ju3kD9deoYHr8jkykW6GQoBzjGV667i6PvCUaw5CxMXQYai3EyBm9AjkshGTkpqtZVNBkbB5snfhBQjXDMKNPfA",
  "key11": "4mqmSZs2tAoboaqL7HbEAHxUxiKzQq4pSgaXqMsQsFvQLGEb52hxrKzHQAvbbTYvzx6BJJoyurEV3QRDbmAwTnN6",
  "key12": "4FdeHGCELdyCqjZjJ5HFhHaDRZPjcrDQgjmeT8bAZREm9cA4ibWYJ9T7EJduZ8CajN4LSVHC31D12vpS4cUMJpdd",
  "key13": "57F3iHcGxsYRE7admq3mB9Rnbby75Vp477hMAzPDShgsirnwiUd481o4jtStCHNY1Uo129AcfTv8K1fKBzppK3Gq",
  "key14": "5TJ4XveH5jXK85Gh6suSmdTveoxTETTNFtmEBVpcYPEypMoA4BjREL456bzyaW77W2Qn2vbRrGPkkBsYr8vhQyYX",
  "key15": "5zYwPBExih8pYa4MQbXKunCH1XSjF6vtnAMNHpDUXBMsRM6Rf2zUaqhrcWyMoood71bae5npKhUgEBSxyAVezHju",
  "key16": "8mxzS1xiyN6a75tgUexU4SX1S7sLRHS35ZbS9EZpZ1P6sbB6LS9BW4dPuTuVajutaVGNYE4otpVrvcmSd6t7zgC",
  "key17": "61FgssC6ZzjXvAGusJyj24V2XwMKXNvwutrQQLvSkf7uxNBpX55RUVjwzt2D51LUCdSkUqEFHXyQMzehATXL2PBr",
  "key18": "4okpjsgbB3qF1pqds8Nvhtam4VggW4LeWXW7ZANDwXP1PbgEdzjh3nB9kCbzfZKRouBjMikgS2Mk9pzYohAczxHo",
  "key19": "5vkLoaEcBY3ZUbURDToysXb8t8ah8xR7zwUiiWFtPkTATpcddKaPzAQU5ZhamAStAbm7z51DiuQcbMhjZfDEjCH6",
  "key20": "4LJFJ6PD2HGFZroaKhAzZvT9vPiCkebEtwfCCapLaHtQe5w1ZrjfohYm8TP7MZdr8CLgPwTSQbhMbdsmV9kgc7RF",
  "key21": "4gH34TfeyCPg4j6scxhwu9bEJHGaHaZWXSx5tyEhYpi1TEEjs8pspQSMQiSNXf1x8isd2sU8VxKZvwBaRHD6wHSx",
  "key22": "8FQEQh22jR2mMLeAzUEdJ68P8commNPUvT9L5LVd93h622HHQQgdvF1thFx1Yiai8XigKdQ1MxNAcBJH72EK1ge",
  "key23": "5ArdM8uu1RMhKyKfLCUEgNaNvitqLNx6JuZDcoHjdd67zn77hhBwvxTgB1t7isdbZJibVkq1PZsEtNQfMRQPaBBi",
  "key24": "sgJL9LwHKz7TWGWinem64qJPcDYGg9gKE68hAuxKV2nMipgZLqjnViUJXMJs4zDmhEecydt368eQHJBRJgW65gM",
  "key25": "2hSsrX7M1nnxc2P3hZxCpmU19Vmskq9ZTSg6HkjShQevPmyKcPpngR3E6C22r7tU8fwVg5a653b3qPHDvUeNTBmj",
  "key26": "YcsH3wHhvgvDhS44cWqkMLFqPNfUNmFqhsp3BoiutWBjc9Fdvg2WzdCkrjYbbMHpojPkuXdQCgD1UAxMS82VMzY",
  "key27": "4JKTmNTdCbKjCuB2ANETiqFYVWDt7hrTR2qf2NckZpXjuJNdSGKpenhavQuwQao7AXpiMRgfEewDtPR2t4zjeXbQ",
  "key28": "34U9irF9eeLskTcdqQFAuXpbLBBWb1iPE9EXwLSxUWqeE7y2Ema1Et93M9rTubTUMUtxStUufub7dCfUWHjFErfd",
  "key29": "zZNMzw1KJUhBToEnnpWhoAWM9CGkpzKMmqtWXsVUQpuCAK6ND7UKrP2TyZfDupgajtGKoKcA5pYAFF2egPnNRPt",
  "key30": "5MBh9dj2QLZ1qpqtsEsnym3c4dPbmfneF34rUvXshQReaFPFtvjDdAWPavr1BqsonYZiaXfy1oLdeoBYvXA3Gtii"
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
