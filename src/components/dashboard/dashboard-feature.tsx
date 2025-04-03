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
    "49LdnsVEAxEJmjS8kG3wX7mvS6Gu12mXoq7ozbTuoJD3xKvNTQm7NGGBZgq4judubSL8VH7vv4C8EPNKdDANS6vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26zsYY8tas5EeLrkijz682pnxtZPKcHFyMsLfBGzsKG69pL7XChbxwPTMNY1Ty2WbCYLWBqqqykmCaQSKV4no8NH",
  "key1": "48QACkrm3D2uTQaCuS1LRPkaGSTEC86TKS1HD5bne532zNARoFnCRLgxvZGgPB3jFSw7e7vEN4zRoEhbtBViEY4",
  "key2": "32kmwv4Q2C1wYm1D2MRyv78xg38V2tX3Nbw2cMdj5fSD5Bn4DZJwwJowcAkAuWTW4sHf5bCQoA2mFVVN4L7NY9hX",
  "key3": "3PQ9vSTCTumMoaWBE1LutnBpndmXDRWPBRH39ph6ZKjaPf2G3gLR4UaPPHbKvo95mRVij7MUUxGAEi5mmBb69HJ9",
  "key4": "5ZS6JSKZnm6cqEYMDrrJQnHzzqMwZatMgNtP7oAkFxmJ5SY3aQ89LWQZvLVaersTLVQ9HvHapXinpvGubBti1D4f",
  "key5": "3oNHJ9mBmapSHvwUsz6o9FhRUDhTyCY9EmgaRJk7yztRNkpEiwbH8MmV82yiKQWqh6qraegYnFyoUuRoWcRBu54s",
  "key6": "AbzUep49s6HbrFWfPRKqtkS3vVne5MXAsNR71rVdaJbsY6YW1V6ibPEccLM917TVnj59HtskZoMQWdoDuZA3kY4",
  "key7": "2wBRkee6Y9MeaR2H2UAfUnqsC7kaFJTyokCCPStQ7XaKMo3w79GsRYFyu8vHTZo15zLR7eohDTKhYz3w3RJJKg9J",
  "key8": "3HPJnTWshJMp6my1GCTCJ9en1BfPzCRJhfiBpZTDV1f7gKhEzHTM6PgNtDyVFQ3jmR5ftaaF5gBAQjy6pbqUsand",
  "key9": "5Vq95fqrkjyFZGwczzJt8LrxCMu5nDsJSd1N1jvZbH6aUBytmhhkP5Pqn3VcRjBSUHWeuqvUyoDeWtz6ZZX524GE",
  "key10": "5k6j4ohTRLEnSPAr9ofqNe8d9tBNohnt23wJBCF5wmrEs8ZRQurkGmbZh1wa14FSg7FMZ9D97Sbp5tGmmbEdHHtK",
  "key11": "4MyPTGLVBC3GD9F8gfdAZGixFfE8hfHAEERo62s5b6qmzxP4MPcbqBNv4SqgcbpxdWcfUyUPEJuqpu2mxTRpaswr",
  "key12": "4oLFLZf59iNcG6ZehndA5HGBCH9RJwwpz8dEsVKUcXztNh51okkbX3cvZEUPDhGxc9AkHDNG6Ya4itanr2hDSU2J",
  "key13": "2E94TQYir9au29QbfkLrfeNra8PJ8Aga1GQSLvN9Fa2XzeDt9fNwjhutBYAHzWPiQqdtHvVbnsjXBxu3mxwZtbhD",
  "key14": "58WukvGLSDTn1zjzm2JAq38HPZEG6D6KuCYkPkhrJptr5a7uscyJ3aiw2QFXRF1MnqL2SgtHi1KdUEmjX861Ncf6",
  "key15": "2Yq7enfdWC6pYBRQCjYuYT6FSbjUrgcqG7BvojUQyhAcRV81JRwvNksqkqcAAAYsJiPdbN73ch3oKdNLviHLwaYw",
  "key16": "5j8hqqP1DarLqEq7UNRiaXxHDkytcvK4iMMY1LKyvC8vztJJCZa9nU5iJWT4hJMLDFZ7PK3udvoMHb7TnvowJPiG",
  "key17": "54kQm24KYtymuf5mHcRBna8vCEmxKzoLeehEEfZA2PZosY6AG6U4LyAXW6tdhPD5dbvxi8k2YiuzGDD4eTn72p1h",
  "key18": "2gkwDMLP8TafGR8L14bRtDFHRuXkzBeFgrpaCkFp6aQgx2XmPk8HPpyCWdZn7HxuzCvTcKttNACVDa4xJufmCqEB",
  "key19": "453rpZGYGe8usutKbzX5BeWEjo8M1Y88SAAMJKFvLDpJCscaDnLqtA4zo1wgFXBU2zFesugwJU9bfGjKbDtFCjbd",
  "key20": "3XPjG9aCQD6rjnaz9fCebSzaXS7cn7VTQEBw4to75A6XffbM8x9QEXkyqgHzpcFBNyoLBfLka61zDQbCE51ffMK8",
  "key21": "3n388wRRFXCsnPtvxPKwNMG7JAqGJdAuRszGA7QSGfZnTfkn5bPTKeZ5dxEN4U68BrDhGYhbaQmmdGTMenLywVNo",
  "key22": "5QwVMgTxFAgSMfJrMHyzhbBZ7373sEAvT1PUtiFkYLjiue5eJagY5oaESW1LQSS7WgevJXyXWJyaexZVvNc5Fqnu",
  "key23": "2rf7mv32eHhVunAiyr2pF8Rtma54vyGskr1iSVHZFVU2xrv12xeFm3TLmb5BtWGxku4hLSueBpo8FEsx7j2BFxZJ",
  "key24": "4Mnb4rsVJWaWd3PZ683jGQnDrGBuyLjx5Xezda3dVMdFDgPCu7zbrau7Zf6fEZuuLTsHbnNoSsXKEjuktm5QSbRb",
  "key25": "NinHrX5cQYXggfgnsoXgd4uFfrboP6Sfksty2eJ2QEj3j33nN2Gfm3RzU2W59HtCvajBv9ydbwGg6ais8ZiWkjY",
  "key26": "Q5tkvHRCF1g3GwDJWZ4F1AEHJgcmsXKaWoEzEkjUZtFTJ1sGkt1DCtEQUArrTdjdF7mdLrnAniSbKBZYpgGoaKJ"
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
