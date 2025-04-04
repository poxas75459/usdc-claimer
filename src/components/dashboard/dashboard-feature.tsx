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
    "4WDikE8S4jtfXPTmLhm6Y1vkvQdcGnDCG45K4QpGmU61t15GveFqFEx7bbXzS1cqJtb8Dz5mT3jqQ4thCE1QZ1jC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sqTd8jNECPxVmqdST9eLDHwnQm3Huqes55nn5gsqP9c19ZSFzPHBXXwzdGZzyvs7gsQJdoyrsWHBKdcuN8Ch6mw",
  "key1": "Agm38UJuknWPULDkYmzEwEovX4c86q6x9pSASfAjBA1SU9zGjZGwHrDswHfDowfD9asH9Y6ACQZsfQypSPWR4d6",
  "key2": "2S3en2SdT7xywzr1nYh3MVBbR9FZR7jnT6LfuqqxYGxg9FBn9mhecGsHgM4qusAX3LmHpo14NcGu2RXCL7c8HiSt",
  "key3": "3e1yuPmEnDQLxPDb7V1pA4CAmHmXmgQfJeZtcTRmFxCi5NobcoQVpXpiR6yU8zVo6MZkSL4e17CA9Gp5HQybRVNj",
  "key4": "4KjQHU5xZwUD2v66ort42ybb1DREbnRyWXZ7jodFzdAkAtNBEyAJEfMdj6BabHhWaHPSHfvRdE1XsJouHauEHhP9",
  "key5": "4uye1ef1rhyiD8XJESoe1kyRxdFcHzBvpjXA23hEH18cfzq2n99fnwmeEBZy3eEc1Zmwqp7HRH3WWbtpdmgsCHd8",
  "key6": "GdNgxjpaNW2ZssskpfsYY4pWSfTeVoPwbjjv4xmhZwd4vqyHRN4ZAe8fo9PABKRY4eatM36ozf8gucfRPncPWuf",
  "key7": "494FLeNtkPgWtVipdRSwATBwNkAbiCiyFSHQzMPMrh7h2z4s7Sx9xu2nZSNRt94NbnT33Ty5ME7J5Lq3PMKhzu5L",
  "key8": "fKyzo2bvCdJzSgwJ4qNrgXeqyGyQeorAJLGt6jaQ9EypssG1eR6mqxQdJJybYk2STca5qUQwN3tqs72WjjGp5BH",
  "key9": "33wx9YER6aiUBHkDfNwtMtPbNFjgUSRvwyi3TynhkTUPFGqzP63nDoxzEt9JBPndnH4DauDbxbnosYKYAQTfZewu",
  "key10": "2mdaDKj32fkbLwv34HkZ9or5pMAF82XPvuYD5V8dzAuFnG6U4U74rNXxzCS9SovhwMa25aMaCGhZQtrJ9GzPD6Qn",
  "key11": "3ECnJNZigY4P1GomXuEPyaPZjXt8573cGGQiHRueAPmt5DZKGnCkZfe8x8LSYrcU1SD6WuM4EDyx9mvDHx5V8U72",
  "key12": "a13oC8cKoouxi6sca44T9PV8yfm4HAydyCLyiEHDRJCuVR6VPiw5GB6TPLApqhJfTJ9qT8fRcERTTpN7E2DM1pW",
  "key13": "3nt6LjV7Gtsmi1ZC3hiqXkfydMqGJPzQ7HPN7vzJ3qW2fTyQojrH9aX1zLUppvZ1Zoo4NBpf5sQhUSgZ6zo6kmje",
  "key14": "65TS1RdqrqjusubrjjELz9nU3AgzNmXpzpDwGvLPA4eAo9HuHFYS79FG3cGyq2JyWMnLWjFL1GSPpUirfmEhbqiN",
  "key15": "5YZBTDrt9eKW4HxBbfBSQLUpvVrbi9wa4Z4M5fn1dSNN94hMm4vukDdBsd5LoUBy7kdpWE8PaTJV9kgLVvchHGn9",
  "key16": "4Q8yxUdLKZF11iqWxhhMx8rcvttdXsZsGgDBHteow3BPEpMYMsu1WLQ4U1A9JaQcdkgb8KVdtP9qq3nq9TSEaVzi",
  "key17": "4gMKUMQfxkNJR8zLFUKAQZ6sq7SAho2wRbLfxpbeSARJuhxShPzm4FgeSAGB6Rywtj8xQgC9AGzsTUTFm9B3UWC6",
  "key18": "tw3bmdfBfcsuRjFJSzMfQ4aWaENsXqTXffGeZtfQd5bsLUTJA54HLLbt4bEuNr8PAeNPVxS6NaoVfXB88gA9EwT",
  "key19": "5Gc9txrEnenrRcQH26qFndVjUtBgA3Xeni9sEWNhVroWuJ3Ziwcn6EeAG18ra2cx5nGgVwi2SwJt7kDQYzLwJNTK",
  "key20": "6tG24rhDPRrR6xkwg3Eh6fQj2U41wbfUS1iAd5UYdz2uM7EowR4cpy1bJk3PbGssgTDuRx3RXkCajLpEa7Gremt",
  "key21": "1r4CG5WFdVN1p8NJGXjMk7cf8ZXsaxpqcukwLRCtmpiWbufSxfnBM6iE5udyvH4yB46FPHTuH4xUWkkNSgt3LsQ",
  "key22": "5ff41YCGWiksExGHFXkkFigXvoKSgB5ENh4m988G8qqXFP3J85TUFzPbVbRGqyTbVreYyJbdDcbXtSRhKuHs2W3L",
  "key23": "2HJtme6DcdxK2fU5R4TQdnaEKNEXSw8QpLHhd3WYobWPC85CA18UDkMW8zc6ajEmEHXnE5wDgS6d61LH5MMFXA2w",
  "key24": "F1h3HL2LLoT9FhE6KZX1Jmd7fx3QqstGF4ABoMCxVfRPBhy2juJr62HnN4oKQeNw5vh3niDDCSvZcxAX6XZkvvB",
  "key25": "tZCUzbRTK1cYKnwdtxmkdZQCyDQ9ncHkbCvzpwtzotbMZ8hXcQjYz3PdbEMd8N14MrsYSWa3gvr2rTbGbv7Dmf7",
  "key26": "2LvdUzZiaTv5S3hm8ZcBC8pdhANVH5LkfrwKqWfuY6627MTr2cPabTB6tVbgPtKjzeMogqNHPBHvpL2pRcSG8zvP",
  "key27": "4FtPKJbPPiBUyQP9RA5139bjVKEiBwz7pUC1bn6rv3UPRKGXFuftd8BJ5Qid5s6YcFbQ6c2VxAH9gvx5NLnTwjju",
  "key28": "46inWyNJ6zbi4cGiB1UqZ8TbBZMiXnATNgb8vhu7sb7zHHXyRVP1VkLuFncdynaU2GdY5mgvnMvVczZU2YBqc6qq"
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
