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
    "qnSBv2oL2sxqnDEPLt8GFoNiarw1dEu7vGZpCxyrbNAU9x5APhz7ahrzn1upjqqhbxS28vDEL3oJTViKcUJX5Ut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yDCQNg6UhCaTq1r4mbPq664bN1h7UZK9GYKaFv17YkvAQBE5EDRrkYgNE2tdCJt1DUjvzeRWhaz2FpwR9vskR2t",
  "key1": "5sj4CZrc1hrowcF9wbC5AJvXWLs8CEmHhTyjnDbQX6jXwDkdd6wJothhX4zcL2piM89Wq17jpDqwmCrVwcZkFakB",
  "key2": "3emWsmA8R6bAaovxvxgPFTKueoZ699xNq9k7LKSkXFbvhBaeKvh2z2eWCHzwBEKtjEAxqC9eyesyD5dUHsEoZ4Wu",
  "key3": "Ma6uujx5TnfNMpD2ramo4VZnk48bHmkd9FWV2ykyWiMgzzrfY3EC6PRXXyW8Vzv7Qo4B1d1MzAVJWHCgqDCiAe7",
  "key4": "4dNzocgsWQyGtNsggYMD44iSUAS5CfCUdVLPwKUGqVseSYwPxH76g5CbkbhwPHoRZeRTZB1Pg3SwAwq7H825P4vE",
  "key5": "5Um6ubyN3oYdDXMNqR8hoPVQcTQ26MoeJjuZmdZL5HRs7sNM7wfQfacP4mJKJNwcv2q2qm7pHPuzTVYZ92CX2wjF",
  "key6": "4xSERq1y6QN9Fz9rkEE92t2jySZ9UH2jjJikH4ndYbFUZJUAFU5SRD5KDjkiTz4TTPBUuhjdXesLQzerQeMJ7LJf",
  "key7": "UH1DUeerAcv7kEpxLMmB4Q3r7ubr3bc9szsP4ab1n4uWgcqovbUg4LwFaxAv1tzYsZAxt6joyasCvfsyb4BUb7y",
  "key8": "67k5SXQrR6rLimfWYRQ6SNXNwGuJNMVWi8eNRuimBFFG22p5a7icTLbKVKvEfNBbs8aUthBri2XGemjhYovSgVtg",
  "key9": "5MVX823auyfPW4a4ev5dDfoidNJCk5KdboHJ79BJxbAbqspFLTjEbqNMUfGpmma96Ar3UqDfdibfjkyTV8LwL7Qw",
  "key10": "3WZuZhfjHdBE9jn2KGp6PGscivr7LLTgAt21FLyxjGGBgKiHdyYidnaYDuFwy64UwWf3qazGgcMeyRS3E6DVDJiQ",
  "key11": "3uuHKMRJetZjS3XZ4Hv4XrXS73sYo1wBNt6bYB4XKXUnP8i3zzy4tmZhdpZgSnhUZ6t8aN2dzo9Vpk762sFL2BE6",
  "key12": "2wPSStDzmHjdoemRxsSpGPUu1TTNAXUnR5o5EfqMtYtzv5wceJfuXvfVmfTXNfHsewmVPNQooRkgQG7twtegxcKE",
  "key13": "3dougFVypTBrECK2e4LnQduzoQMDHD3QzhxixXE2wRp1usHVjCQWzbdFL2Qo1a2gW7UpFMvwBF4VRsz3rjcoQSWo",
  "key14": "3r2fw1hfBzm4mRkEcUaedPgPBJvG8ckMsAP1bemCcJAcScGH4RWRhAzwsgfurDUqv9e8AudmHD8wsAQFCcgcaJ8D",
  "key15": "5fc3irFMjLh3eyEFT31y8WV1haEiHcNTHPiQsoE1Wv1aCSwVGNTxxaub4NVveQnjNs4BZBdrD4z6qxRKnyqipp9u",
  "key16": "yVodr2XVTwKdCtUKfaiLQy3DaXMAHZoHVy3Z3qMuFYQhNen69ebZjHAuDNqB9cdPKdFAC7YMLJXKm36JnpPDaKb",
  "key17": "32EEipj9hFYi2NUywxPfVgqYwDDdEot69SeBB9iwuBRyf73kjTQsoJKsQfuXxzkqZJCGfbrH69DxnbxZkiEaQYoV",
  "key18": "2Vi9kScMaw1xDWsGU4Y4Lb3XFVYM3vHMSCcCTHb6yP4NuWkgiy3NRbxq9biuisz4s6d95SVtoytXxeAW2VXXTEu9",
  "key19": "2o89mVcQv7PWJ9k8TF1VJMS4RwUaoniy6ZsPGw5AxWBF6nXLsPqrGtZsb9GyJoP9KXZDBduHL6GzmzkCADG5VdjE",
  "key20": "56AyXwR8F1Az8HYcS56SAV4UVJF4tK3yuEuWZ5RpNmHxXZQ5r2Jsqb4VeYNR87VhVu6znmFFyQQPJqFcKesCGcie",
  "key21": "3YpSbiorLb7xjnFfvixHZtt3S5HLeEn8n7EncXXbDYFMyB7Xf7Eru23dnnDsL4XEKKEFDWP17KVGJZGvsm1fnKve",
  "key22": "4AT7aDYN7do2RRh3hjKxWje6Bjq9qasAzqML9pfVMndkKMeZbty7igeByBXRPtNi1nqJLYkXzB4aMdwDQ5wfznLv",
  "key23": "25sgfJsCSj1y1xTMP6gifQtuE8bzF3rtP69P2s6bejiEqjjQjEP9VC4ZH5oXMxTaZxo3wsFxnYmSoTj63xRvo9RC",
  "key24": "2xGudg9tCEyQjYHUEC836KXS8DqHWZbd9872Qut2yWEe9nfP8vtwvRmA13sLwubw7LNPmNTf83NSzJKsn8yneJP4",
  "key25": "PXB9mkm4MpUkoGdz6hG65Ge2BT471mWHMyq9hH85Qbi47DgXm8mHT3SFfH3UoCPYLr3UiesAyrtgpm7chaXKK2G",
  "key26": "5RDNUap4zoAoaN2VXHkk1BX5JWYvtZKWcQyebEPrNF9T7vdqG6SZXey8Aegh5sWrXL17pAyHMg3xr2NLerxhw5c9",
  "key27": "TRCFrkgf8ctCZS4qxSHKszfCRychobXXqnXoDNkLk1QdjnVEtmJQXHP8ENk6fwJYUtGjSoUPWH6D5DJKLhp41rp",
  "key28": "5t9UipWP7gvgGa2PFrwvKw1LUCz3etPeHk74fELF5Dn1Eo4fFvAEK3AotT8WE54w5zdEGPTu4nPzz5h4STXGD9hf",
  "key29": "66bn4wTUwAoehySJfFJ8h1pJBP3dnTdTrSTjd1FyWvnfsxgygGopmoQfpYShb1HFzpVDUigZRYp7PhiJ7wKKkuJn",
  "key30": "5rbkszsdUUCPuKWzB2SgY4rRNWYWyhzafNyRHSkS6L9JfeGdJwdVn6zcaQ4cbgNLEr6nawqfxUFfpA64qEf4u3gT",
  "key31": "3ktFwPZ7r4uD8aGKF64RrVNX9aLAUVKE7vJCuAYkB4yKae48qwKJufiD2aVrySAqPfzcGFP4btjvR9SXV2NKcye3"
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
