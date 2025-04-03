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
    "3wLXwSgAZZGWgMAHN6mbm2RGiRBstqmU9hC38M1fjTtnDYBgVX6s834TTRYHAed64ShuxCbm4J11ite3u5Ded7w2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66MxGpYrcZcv1cbL2yWNLCkME1DkbQ2xECPwz6HZNEJwGhPumemcdfiRrf8rXcEsz61S7EuVB3rhBXRvtVwmoP5W",
  "key1": "xPuuPPAP4YweEhf8V1Sg1gdFxYQ5YomigfwqcYz31rfSzeomsVj8Y18dc1aGhh5qebcDSt9WbLiTE14Ze5w5cBv",
  "key2": "5ktMmMzjeoCmrZGTDQCtVPfeyKCWEMwTg6k3ehMYEEREHX4iiLZGU5ubL7M9vgozGU5VWXwJ1uiJFigeA2PLMKHE",
  "key3": "4FGzUsKvbWfbbj59oQhZtaZkQ5Kny9wP6p631N1JuSLz5Ytc5JT5WzV9RVLHhzBAMs9sx3PzvUTqycdienrGjsnG",
  "key4": "3i2bDgbF9buh8mjEAvDirsoPeLMmXrfhmUUSntY9r3MCsfHsKwcan9WFzs33UScFE5nUFA5Syg7eUwM36y2EVZ7y",
  "key5": "gJCMK9L3ZXDZaL7V6npKERjtWEAD8shooQCECLVuHAtVkY3T6ZgUCGUorckkxuGCtJninMd9iE187xoqbPi2zzk",
  "key6": "3MAjN4XGEWEqWwLURGEquLPNctDJYKLEafXoUKTZR5VaEJUVRaWQRF1toWTZziRtJTfND25tZTi3Ch5cQfmeuEoD",
  "key7": "9ikDb8tW9NYLqGNZQLDzegFdFjADQZn9oQheDVKQ6soNVTbd9AAvGSQUvzuknn9EHkGDtC22SZpZzU6EtHV5ZKC",
  "key8": "ovVocY1TDBptkgPUeWjZT9a2zxJyMCEL5VVHjgCA7bAToQv5BwPv8cP1qsokfiKoVE8FfJVN2jxategtCqqNkW7",
  "key9": "3HCDHXeXMNTzaTeDLjhGwHyi2DxRqf2pngVBvhTmYRpq9JGoiFKxrzvRjV2ivp6rhk3C3EZKqtAKYcsYsyQ5AwaC",
  "key10": "3fhd69spdC98bHLDhDm5sLFNTcnXe1aSNaWRdmsn6hgUAMaCFwpUgkzju6X5QFmBPUdtMgy8k3XYw8aKG911dyvz",
  "key11": "5dskcGJ5J3enPThcaY9GKbFnnKGPywkVSPcqLmiP2acn5xvQVEqbBVL241KAGHsCykmJz6UAfPXjjp4LCLG83nsQ",
  "key12": "3X6xEpccXZxQ41i8jEk4gJChMxAPCMKyKmYW8XbKjB1o7QRe7Ugqb9jU6B71RPwwkJtMafNBP2HadSxdYS2qhwEY",
  "key13": "5FbaAiXnEgiUKbeGbKX9TQiBnSJhzvbzn1obi1uPPwdqdetY7SiVhEpf1Atp36VuKnxnwbcyfuowh1VQbCewjvsD",
  "key14": "3svCRnBGiRvEbkiq7vczNJYz1Zu7PsRriRPbWYj6ksRkumyMJvJqNrBTkQi5tvikgZfdRYeEGPLqD2TTsfRPbWCJ",
  "key15": "4nVhFaf6d7us7tn2hsnLS289ue6mvtzqBpHeBe893mKBRHzJWsVGR1Wtdz2PFkeuBSKJkN6a3NKgAsCdAfk9skmW",
  "key16": "tr71g7qVuyu6fhB6MEZgd1WzjAMQKAg2xiYKtwCzGoinxKGporK837BkV2cAZGuKoKZsYE42DPRMX6dpf6PAVKP",
  "key17": "1LR4Z6Tis3RptBoSTxuRCpknFNUSjMD5kPk44koaUX8YXTYYyvFBkdnGZaEbMapwVV33xZbyodDaBLAEWcPgeA4",
  "key18": "2h9S3JeWbGooTE7tpDpDFRnfa6vFsBqF3ype8pu9AzaMMsZDCV9mpBYpjM36dsr6kNBgn97nzFEvi4RGFEicmRsA",
  "key19": "5MsWhkEseapZVcgKPFY7YvT2xG8cqYwtzJnrYJhMFQoYSJRLbT1dNY5V2BMV8Kjw6zoLPBzZmzrGi8e546VGkjWE",
  "key20": "3pCXFC4q3tmb7oaihxpgwNjBgcQiEcb2XveDFvmWJjXDzzpGXJ3uHdbtfYtmwxu9cddoEjKJo8A5pashUvJ43QWh",
  "key21": "24n5uKNEEX1cwusPVjhaxp8b4chYNoXbxfzBXgpEGZfSU6Jy1jXc65MRmjmuzGJfqKcgHbqiTK23GnBULHYUivmH",
  "key22": "5kjQkvaSEqcF4qGDiy6uPQiBjXBSpYrwk75JxrFHSBReAkbzWnhWHn5i7Kp5JaVMYSyVRuU5MEkvnvQGqTFFV2cv",
  "key23": "5NCnrc26UQnudnTmeM2cXo3Vc6Q84ddurxE1EaxS37VySfL4d27yzLJ8W7f318t3Ee1kREfL2Y6WiMTRGPBFJP58",
  "key24": "5e2bNdBcGerDkwAJZqhLJceShZ5gTFMBZSAEZ5cPVWDQREnNFDmQ2ijSSYFhVyv3WF5LhYJawW3FdPw7v58TnAHV",
  "key25": "42g7NeQLA4d84XAXg6LcAnUuMatHVUsvDa6SFNcjnJ5iJ7U1PuiBMtpme4qWNGP42fcsQDJaC2ivDG19YYtsAvHT",
  "key26": "3VcQyHKA46jQpmwof9QeCdR5cZtkPW5ici5knoj6VagUaBcBfY9H3t5if66P6V6TR57pJSxLxTvjT72WK9MUWQFd",
  "key27": "5gwWRaqPS8Qx4yaGFeSDA4aARAcvXd1rUJ6KvnedNmiKoerPDr7KMyx8nQcWWugsuWai8dDBYySwfaXNNTXbE4Yq",
  "key28": "2CUFHx6X9S2QXVADAhPiEzL2RuNmgPo9xnBttUDJdecbveVUZgYYmsvGNvcCBxqJZCvbtrFZURP4v6xmhWufh2HN"
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
