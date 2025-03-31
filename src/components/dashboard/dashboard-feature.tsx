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
    "SBRYp9oKzmEPKzLYEq1DBccQoMjJq3kNBnshkT5e2YDu3wkgctNNRwjREcdbGKcALNFtZZ8vVoTUDbtGy2ThNkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pr3zmYV5sMXGRYfhnw3f9RMXXxZoWdXtF8TinPnBT7zpS6bcsZZUhpjhM1Soq8tRpzmStAxzjaC5BVPE9S4NLBQ",
  "key1": "4vXHwKJ7Tg3MjF6dndBaP9DBJysyZBMQyYP2EdPoGdEhvDSJ1zQjw6Zgq8erhYThfUUmL3CreH6XKEAVMFtv3igb",
  "key2": "4gtk1rbNjUePYixrAsmqRewANpC7tN2fRYzk5JLKGPcXSRTw3YqrJrRJg618gqfQKvt1oruEzkyf1srMAik7skoo",
  "key3": "4FSwhcpM9271esBbs8kPU7BdcFX2pAz12MHKzVxn4Pmn1AZLbs7oc64apt3iFKdvatnKk3EQR3NE6pUgyyCwhJoQ",
  "key4": "2SbyCV5hxcMqM3cfTeYat7je7XqYBuZTr7A4xz77PFDkZ1i7Tx9XxEV9XShv9zz2xpndB4mEPkHkXt1t9bAVkVc",
  "key5": "3MosM4PUhQRJPHYh48SMHdPRzZtAwuqU6aFiG7LShN2rGAayAsvJtdxwaeZ5wYhQerWFXryCKEL3j1MesCNKyATW",
  "key6": "4pC5ZnBfdCnqZbiuaSXjDg4GSTUhUcF6mGpbSPxYsne35nUHozGaoXRwXMnPG6sFSEj2FrUJ68E2iDz5PypDryDY",
  "key7": "6sV4Fx4GQxsRfL5obtoRYBLwtZYEnRGFKbbixSrDcw4FZ17vVbYtNRfvhnJYaNXRtnYDyhhwa7b2PKrEq6Ame9Y",
  "key8": "52CT7VW7xqwL7qKoKcRd2MzNbvvg6s6mah16QBgURgU8qNJcrrzkJujgMP23V67DauZ9iMbBn8TcwTcEt98tSoDP",
  "key9": "5JLJdWyRiKwkzYNU1hMSkDku5d7ceThyNBfmxGoW13CJTZnC4q1hW9N9m3Mmo7vPAip999jQk5sDK1EQoCYHZKaA",
  "key10": "57LGpbqaAm1YarqQbuLhh4ZU15uyUKKXKP8rLH9VbFXxXiXFfxgEd3cuRGaMi6ZJfYJ2MeKYusXxAskFbEQ6c5kG",
  "key11": "4CheyMa6KU1gT534YHVWLsV2FptDazmLsZ4JUAgqSoAmgAeEGn7KsBhUh49Vmy3BoKMnJBWrRzY7UmxaeXus6hT8",
  "key12": "2DLBvvWEZXguu1Aau4mJnMpQCXnYLe7w2NjA4pNY9mqqJS92EoVmF2AQppXQu15AaZLN99Bd2kVsD4QZhwR3c1S1",
  "key13": "4DoFaUY5sfau4BA3PfsRduJ5P2fkCmEp8DP3BHiCrokPr86roT7Vw1DA3Qshs6xGs5sFvFobemZixjvhNumFGg2T",
  "key14": "gjJCXgUBHofe4HCG4TbVFj8a5sVt7Cg2JWYvUHdrnGfF3F2AjUzTyU3L5sFw7a5v8csm83qW4NcY8d9jXpiPhy2",
  "key15": "3m3L24WGqxqeizVLa7rBMLkYMvAaCULob2o4UV524B6qjQxtdS2EHukWaHXWBphPs5figNKa13iahnf5nyQAUgGH",
  "key16": "2KNeufEhoFdL1jzktjQWE4tJFhWxUFPckx7fB7uXPu6NiDdiAjgXqEng9GmXeUSTAqWLoiziezGwmFiLLY3u4uJR",
  "key17": "3aZnQin4RCPH2RVo2kZzymyPxmH3Lc5gHj8du6J92QmdvnBbk89nqayf2zLHdm4ofyz18YHSxSRXZ6ptQPKdtaSR",
  "key18": "5wWYuHGyNtEhkEirHJGPtGqAyoD5xeirPbSHCstVuVJTWT7V42T141c4hAUdRuAPy6no9pNWdRH834ZB8UuBYy18",
  "key19": "5BTRyYiFd3jaiZEyhowcT2G4iX8f97BXjEDUK9GqVvDbLEiFnYWNnybDDEzw2L2qJPtnFQbnoVyiMBmzadVsA5NN",
  "key20": "3oWa3c86W5VpEbkzDJrbTWFiSRiPD8G5eepBiSfCP493S7yVVobS3aMTimu4qevDhsQdG42SGV8ACihjPaBRnusx",
  "key21": "221pboRv6bpd4hQsayjAC21G6oupm6hTD57YmoJe5L7b4qxCGxnTsDgTpEbw9VSZ38trqv6GAV82SYs8CugkyKix",
  "key22": "5t7WiJrD1wJi35r2QBUaNDVTTirShJ2vVJcetPSScRcwcQ3ZZEzfBSKzcLnhiB3j4aYJwD3ot7pagh6Y838XBMqm",
  "key23": "GvmcNw55V7o4MbjpwhFHHCEBunN1vTY6uvqJXMZFbjwaALEdSwe1bE8HBdMMUTZ17BDhdAeshrRJydus9H4aQC7",
  "key24": "5gsmx4net26HBGBr2HxDJxndzWCYG5VgWkusBjbWzash8KQnWs5QfQ9SL7DVxghWTxFr1st3PctxwPVsrB3DmK49",
  "key25": "5PhR4xKdSzgWZcXj6sukZsmWcTGm5gGPR3DJibkaR9qU57AWs1c4JzQe6MeEt55uz8R6E8gbRgjBFTGfWEwkEPhH",
  "key26": "5g4Dhw7UpHfCGa8TEtkzwwUWZQ2NuVYAQShHnVgpkE1MqZqUozuEVzS22LdUcdF3vNsfbjenua72hB3N95iVCr4Y",
  "key27": "24dVW7WZqeaVn3aYe4XPRtZTCQ7EnnKWxgvi32psNBBk3MDcKMfDxUGubUDqjWUiSHYDPgN2bbeQcp99hVFw8o7k",
  "key28": "N52DrvR1pQ4bjoqsSTv8wkm8pLH4XNEZGj5Ctjt1rQi8UwAr8D6GWzP4Y4RNysMcA2DfQYTS5jj4tuvSSnLh1YG",
  "key29": "bYufBrmPd5E1yT1TzfCWckh7xnSGeX4x89uF8BGByj55Dt9WQHG5n93o52FKCFrAkPhdJLCPjiiZzd1jT9jr5ge",
  "key30": "ePAkxjHmCwAqRXVwnsrZeme2etZhciZo27UKafehCU9BUFAS49BV6StN7WdkCvGWBjbh4qgj8DVvzTXYjqEoFBG"
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
