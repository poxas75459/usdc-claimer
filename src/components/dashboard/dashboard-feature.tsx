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
    "3J2tMGt3JnpHQbdDFVKXRk2aLvxYoetXe3akA2tLDu7aLD2AJwQtmbidjmK1kCW45Ay3DXa6ycYVzuT4uFQXrggr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eFLaYPLMevExuAB5MLpdVFkyX5ixiHNYJPtjTivQxqcfvxYJCuK2iCAdwWYi7uJTvq8qPqReN9DW3fhFWAx7gyT",
  "key1": "4Wzi6zBhDViRWoisDk71X9oTbpfjBExXFsniwapN6H7vVUABCh7vhkagC5ANC6SwdxgPCBvyueGifqgJqVoFbVMv",
  "key2": "aEwjxK1uRFLGUqHi8bmMrT2pVjKQJ4QrfeEPFWVEJLU2sj1ARA2UjMa7vmXR2rf9BoXdxEGvwVy6hJnGG7chtyB",
  "key3": "UTXNnmxGPMSysFkxf5qBHepcD8FrzTu1wyTcaZNyiukPLyacXWcGEqUuYcWi8BMqbFFoqxc1t9Uzv3qfxcHXSLY",
  "key4": "5cU2F8MyoGoAiVMbzENq5iRVtPasyR2TxymPP3hhDxVSMYfPszLedgBjzJnEjib3QcajxdMVyHkGc4xa66Mf1xNT",
  "key5": "bRqiresxA4RyWQsZdgTTrVfZqkZTGMDGN1pPZL9McjXSGG4XbuBZiqabDozJG9WSNbYVqYCSeV7VLjKN5yLZNJN",
  "key6": "5gcHH67Aas7EtWtEUdunQdNEXMXfV3XfJqwYuDUjCNcuDAdFHJG979uhVq4Hc7WRavTGVxErKRWikyciKeqj86fg",
  "key7": "66CPiHugEwTwifq6uXQipAtL4kzfdaprZGsYzdWTTLiY84agm3ky2C4A35ZCwk4vAbwEmLFJsMAhnCsjeyLzggUu",
  "key8": "3NDT1LtvtyXNVkNdxqjLH5HakfT3dyEq3hnqE1dH4F7rJNukNtebHuLnynj9eXpaebghwpEamNYzraC61CzscZBj",
  "key9": "5oB7BWaeGVmFwfjymmZMvETvhwumoLZsvUknhTfq3rUc4aCot5QACWNY4wvoXBDsmgtFSTVDcjSCLezV5dngbgDN",
  "key10": "7iCre5mtqcnUgvy2RuXiV6WwD91SQawKSJG6ba6QJ6cW2mZkyt7Hpo1yRdnLKfYPuAbA5Nh3btpaAg42vgFt5FX",
  "key11": "67d61dgHKFuQvDJX74afEoYqLD9BKb6EHWP9vsRGzBaMiqf8D8awHvFJfkHFbzXD5rmLaML3j1brEsZjxQJqhuDZ",
  "key12": "66q5tGdCzYDkvjELYsxHJsH4hzUjbqR3fEuvxPYPEEzaazgpA4VQ8MyTtZW81uFJ2W1z3C7QZPbonzrLdnm8fm1i",
  "key13": "42p5irSUpFRmmaYL28hoHB3VirV8hqYWLyc3eRST4EJdSxGGbW5WPU81b78evho9fpC3B8hnf4b6rwzWe7yShKHq",
  "key14": "txXD21hfRDLhEVMVwdxiqRyrm5bsCSdWnhRRreTD8nWJtqRivsAp31bRKThQtPxEASHvQMdStkiMMPBn8TBNTeq",
  "key15": "2HWHAuUqf3ZC1kZe7LFJdwwcEW1u2qAQ7jVboqhu1SaCYncsYkxg6PgFWG7DmMwDw9DpkNjtGRghkNXSofXMhF85",
  "key16": "at6BqE4iiNcCT23w4rQYLRNBnA3qaJT6BtoZyuuGfdRjvsHDaHWXpaPRXZdyG1Hyb5rGSnEp92DfB7AzcP8W8Pd",
  "key17": "4C963H5LZapoQJ8ZNGn7ZNHs83ffEqiCsUw2H7NaCiaA4vmKSL4JvFtkuTRSM926RhRCyGpoBWNqcT2QqNriyqdz",
  "key18": "ihqrBef7kp3A5r2G2BGq3kGtu3cMmtqjr4fVMoztdBNnHtWML83prCsSZS2w4oGzMijVSxQnPsuPX1trFd75xCD",
  "key19": "YXMnsPUKSauYgKX8zzAVwpDaCYeK4DLnbvGN6USzdQGG6b8heX8jpDdFqAwhfoi714NJYsAruSVUQSZP1q6pfd2",
  "key20": "sVeifY4d1rwywK9HVY1fCCChqNJWytU9YnahbZRRQcfhGfPwD8p5xiTqkNon1nL9r8FneujUHATFhboB6vzG96z",
  "key21": "4trszg1k9fjFSASVBCnd253pUzRE6C4vCGZYMSR2RUUySnHoaKnczCAQQuRHpsnBXGDxENr1AbTGGHBPTw9Tey97",
  "key22": "2Nn3r96KC8XoH9YkVycRaipjXsvXoP5vFbYNYZY2e837ZQys9eEqk5ED6ge2yWEmg5BizHuRTHBXWSQuxJUyRuqW",
  "key23": "EzaVmQPoJNRYKfSGk3UWF6RFUvvY5FDCTPSK1BYCtM1BqcvBFmyfrRnb61vJQ7uybGCMpC29VSs37WLmXaoeF48",
  "key24": "2ywTFpPduaAxipJmD5m6K8cPCAqxzkZ2fqB4vKYVmk54cQ2prFpWy6rzU381A7gMkUFFtwjuv7hypxS3XQN4F9yT",
  "key25": "3D5ntVNLoyqaEPEcxYA9CmZcJFYcJD8hvTsY1ByptTQQiufgCcVkP56d1UMhYiPFfK2GuHC6VtYMZPiXYnZSV948"
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
