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
    "5nt8iKdS4b6dKFGUXtQcU6g16fpbvguhd1CxXC1xx7U5EvsE5GHisTCb6DbNL7f88qBHbfgiLjxU8LbvACXAiM3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yq2UccppXoHpuMHWCgNDs9cGUNy27cimLaEdWDsyesrKwkg4ebrK2h9x445tGTx9hmsD9R8iUbhVTtdAtDMpZd6",
  "key1": "U34q6sekUyW5d44gFG3ANocXRGkQz1QnMS82tuKGJoUks6nWGG8ruDrvDcQKwUVwTfz8jtDKXF51NM6eApADwSw",
  "key2": "5R6wj9BoxGBhReH7Qvy1zE3GdQZYXMdH8yQp5yuAaJrnuDRFYcd9knVBc7h9wfwTjXcnoo6xruAUfJDtS3gmANQ9",
  "key3": "61egzDHMC2yCM8H5eEaiPXqJnLgiGPMjNUK47ZQGrTXDKwUnyaEpPzaPRnGbz9m9ZyW8TLtYz1qVNvScKGiWQ6CV",
  "key4": "37fTuqtjqMMvmhaxTSMWDDZ16zfzMaBCrn3BAX4uc3urwjid1nDmXUjX1sRf5idY6LopY18CmHzmUGZvXzQU3GrH",
  "key5": "2uRN2gLgrrHJfEqpPLkjzcArivESrBSGaf3hNn5PfTckBf2oDUGarNqXKqQHLSxsyXdN16KkGHyjSanAtvdBVGvD",
  "key6": "2QUQXGaBR4sScafKjvRvgUzS95mkZ9bRyo9TsGvBeZfNvkUMtz1SuhEkghyiEEaJ3LwNFxNnvemmjHRPBtmfkV3W",
  "key7": "2on9YngRyTBNXqXGPJ9ugBmxtqEow3AYjzhgxKCZgbRrf4Vo2u5ehqkHBdK2yRGbezy988kiCoYmmqBKmAq1gc2W",
  "key8": "2JAgEWARzZDgAtkij2Luwe6M5jubsEaMqQGfSxEcKiTd3Ja6yE6ZLm8jfQxZHgrnaPihHW49EDqfNrCARMRDCVS4",
  "key9": "ZUAFwnDUgKreLNUQCW7iud1qvDh2ftejHs382DqLFAo73N4LEmXpcNAY7oyDeo2uuNDUhtW1agncgE3tRAarRTe",
  "key10": "82BB1XjEehKVM3U3uQDg3HN66HzYWRJo9Vrzy2Bc7zjFLfKpySnMSrWHN9BwemcW7oENbt7eYJeHk3hHGCe5j5V",
  "key11": "4mff74ijHHrbKBEjfaExL4B875HogJqH6gJAMX4JFNj8MMWbiUqqESiBrGXkkbczy7BbsQPWRDzG3FXpEstZm4rs",
  "key12": "3SMjPLDXzK81JV9q6Mvw6UcCikBhvsH51XC7pL8sLbf57RXeNwrVQquZ5HvzjHDHi7iLitfV1mGLPHSC6rHysmwv",
  "key13": "22GqeWZS592fs2H3PEiS78GFQK9d7MdxrMnpWC3tZE54zRCbSFRRtdRyr4Wo59XoCEvxUBvS7en8y7Pd2QbcUXwi",
  "key14": "q1qvgogyEjNJidbCL1F7e5rrPoozAKkGoNYC6U8UXkdqaRfefWoTqHwzTSBRyvQr5vQYiRNQUdLrgZZVeunDxga",
  "key15": "4x2m8wjCE4ZHiiVs1gDWe98gScNtYZxzmUc1cxfVA9eNyLGG6m2wUPetgcp5SDBvVqeP2LaSBgp4BiJ3a3cC5GXM",
  "key16": "5rGnAdP51DKZpniJbBKVgP5BZ8MfcTyE8BJ1BY22WYkVqjrtvTpmbrcxoR23FzE6oM9MThicH3z8huDWRGb3YWeX",
  "key17": "5jQjmqomz3s7FCa6hkEfCwtnUup39fidy3jwCKskD9mPYpeWEacHZyANW8R31Zzy2ac18QUrgCcZVBb2NjonVENy",
  "key18": "2s8jfKjBxWmi2rXMaaAaay3JvdH76YwUsHDwFcFcJqPsMe6EEPHHYDKaYXWnEv6ePr2rBjrZgLy1xkD2nRjHhGAa",
  "key19": "5CcKcrrZs9NWFMGFnzxdT16Lq59zH738TESXxvYwpykPWVpkCEVpt3EMpzcirS1Y1Mb54hpsqcdSYUbEZAmzLKmJ",
  "key20": "2zcLvEYJsze9czdS8LAaQXDB8np7igLPqDdJPxyGGz2TK9feNDkDPAECvondJUwuMQUSKJxrtYR33ZHbtVLM1HQ3",
  "key21": "5ZCM4q3TUQ1yYpm6TLo3JuGrCY2MtkjfFpfjcdExq3QBiXXVNr2GAHcpH8MrF22LaMrimCCnDt82dSp4DeetgqHG",
  "key22": "2BTc8geksUHHibtxfBrWJfaMBb5X4v4tw4j5jQXwAtRnPP9a9tL3nfyAUDTTLPux1gqEHg65qgpcnxksnSEabsXB",
  "key23": "2D5NwZyYsyGDPL1cvoy3impPpTnDoAFzXdqEPbnvYyfHYLpACrbE2wjxnZ1wm5zYq9DfE74ubsQAgkgkkyN8jpuT",
  "key24": "2r41fEveks1HHTbvX9EaJaeJGdqc5vPt3Du9qPNHBKwvG5A4NcGWAjf8gDiHbFaCjmfRgSVTKzd7k1WpHzbFFRox",
  "key25": "PvmBGTh9XNdH1GGTzvmWYVSdnyaPcUBkuRmoH7oMwNVNF4y1VgmxXZbjJpvALiYrarntDTzREboxZ8X6aiJQJHL",
  "key26": "2c5xuMSYZtZc2v1FZo6hdCoXJ9q9kY3NHKnmkfXrFa9UBm3sh96HLEbQ7M3sy7b2T4bYdY2TuXfaRRr7iGFyn1nt",
  "key27": "XAASMBFto4oSnavuQNvpa5Dy9XqUasUqUGdwHBFVnSBrfsTJjrSWW9qzVknRcQvxLG95dErSG5LdLZ8WWwvKG1Q",
  "key28": "2t1fteyJFq51P4GXXL9UGbzYKKMdHioLBEPBAgsQjNpoGNp9zzSG16StRDx54f25uDvd8R4DHfffCvmCvCxaeWYS",
  "key29": "xZfP8fqPjDEBeSy4E6kjm3rrsGnRMcoeUGQ13kAVZoRYTrM4MjHnASuEiMrK2tmat6iturriab3KXbW9WNmB7vS",
  "key30": "2q5odqQkTfvMN5RPHNtFkcRfuZso7NVhf8Ppgg453R2V4eSAEyfqFZRgBgX3rJJNrYcxznWRjZh86iv4ieynmBLd",
  "key31": "3apmePihh1XwSxHMiLzd2eq9EJ3LPYgdK1AJ1H4nWh5yPZNqQN8h5RNBNMqw3EZq1jbfTAk5DwBi49ZqtZkZ4z85",
  "key32": "2FrDUQXQCRBCBoVF6kH5ZgGnwgFRbVdypFipWnvjF1W2251mGuQNbaYmwoC8FFteaDGEgDTdBsDUWGBswA7hNpNa"
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
