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
    "2HrSNpQsFZkGoLk4PGcFQ4YE84F5iU3yfijabDSh211UoqxMY15fF9BsuRcfnMnPBWqsvAa6mCUQRWXfDuJKD1wu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gq2dsRdWhiQ4D7sqkR3sXZCnRuaxgUkxcPgZJFpa4a9KHtLc4RQmzaTZoctosaiju7f9RMYq9onNk9x92jHB4SW",
  "key1": "2uhreCxRMUEs8ysQJx2sczijSoViDbJeM827eaAtKV2KCFfQSEaQmLQCQAQ2YQ7nQob8HEDMJSity77gsE9PYYdm",
  "key2": "3e6WvjCe33cqEwsL53g13JYA3dZXbKoPvmXZGFPzZJGGSepzLjPNupgHuX9wYec9EtsuGi61XtvSeRSw9mr645vJ",
  "key3": "4wb8pV3B3Cspb7x41ZzVrerky8WJgWnaiYbbjUNMMTnGxqwfsR5ZmHSqKdkqHeUeBSqgYJPMxY1UjnBSbs8fEX2k",
  "key4": "4AK7mWtEoRCjh2jZfZ3iU42N11fgjvyxQi5KhXwPKsSGdNNTrkUFKn8qcUR2Q5T3n3oRFvQPsyQbireuG75SAXfX",
  "key5": "QpX29DbPGFG1CEcXFMow4Y3UxrUZ4NtcsPcfmb2Txrd4WRZpcL8tWJY5AW1GJRWES6GwNjN9xb2TZSDrxAhXVdg",
  "key6": "571bNZWEsKRetXng6E1t17kP8tjHmUbYhhwwyNwZNnGVYE5ffjdGuKC2t8QwbUukUf7XvvDjT9vmQDowHthxqgnh",
  "key7": "MTbWrEci5ovcE3kjjxkLL8q7eePEBSamajssuEScXFGvbhFXsXgHLVSfsups2imeeAtnhTCEvuReCgGWTmfmB59",
  "key8": "4CL2XA3Q9LiKxn9WGRy8Eo24zHyyity9yTbc9LmXiFi3bzMGGX2sZjdXTknhVxyctmqBxgraR4m6rVXtBgATHWf",
  "key9": "3hZz3xaTu67EtnHsVjKq4ZfkDKhto8NUsTggAFVdoAawauQvSPik24EbSHWV6cUtKfMczQfU73BaG1gjDYjXkJHq",
  "key10": "2QbQMvBu2NiDZJMmbo7Tzc4ZvZ9jDDhtTHByZmBMB7duffGVz7fUHMRdY3UHtn1yUVHsVMSkG1Cd75Th88gpHLW",
  "key11": "FLMqFqwALe3Aznzr7d1uczReDcb7mPTrUDB7jiNNs5DJBh9scZPBik7J26jjkZzkfVVULHd4kDWXRibnn5x5uvu",
  "key12": "2DrhF4aX6LHvDSjmDyj2cykkxW27UPG8iDwAeXfTQEXgemgJArf6hcXhGJXoudntagF7zng4K2yz8AY8QwSHMHfc",
  "key13": "5sZYaswRaCE3NkuymPB3RjVvjaJvGwa4Qy54YRakBMTazvqe4kb1ZQSKgvkmTXL2Nch1t1Aghi5DxKb2RfhLkELV",
  "key14": "4UW3X2cQawrAMef6nV6QbHUgAseWvkVhMvcXTbqBsWT61HzP6J8xUT3AoxriodtgdVfHm1ehUeCKXAact2JAzUmq",
  "key15": "5VGyz12hbrPRf5eKcGc2iw7M4jmpEkVa3qTs2tKvFdXSQ8CGViN541gqbB4xuQeRJk9XcjqL2GD7Gkd4mXAJuSND",
  "key16": "2keXJ39oJgZdE9iWedxWVtHne5F4PaKjNATbVisrKHcp9aapeYxSeNGFxZkf66qLMvNgjueQfHPJUSjgFKbWLhSK",
  "key17": "yupWxMZYnggiirZx68DyqqYkWaxZHyH6mLAAj42nbTPZVkUUUPiBMradzsyYXRsW32zK1dfHA8hyYLWfaiu7zED",
  "key18": "dwin66LDSBtTLLGCtLRPcM6PwfWW9bfCXtY3CKZxLkaTndAUt284ngB1VwTCNiyw9fBbajfkuNC6KoAZAmfen3E",
  "key19": "3Xd4j2fdG4p2oVFPyCJfxwmCMz8LeUQCx8eipLyonRXnpKoi8Nx5rvVX36gy8p63im5L5eXFpAREKCRcApPHSFgc",
  "key20": "28Fc526RBo2gTwzARRip1dDap62XncgU5vBnHg1pneJybN2V2BMmd9qNZt9MZoxRrRG5C5aJbNVB3xY8uy4enwxp",
  "key21": "5RSw4hmK9DG3HMavc1Ls2qSiTfSASRF9fke8Am6eccDBM2T4hFQHXcKbdkVPHRjxsy8HDJGGnrmvKngrKBVGePFD",
  "key22": "nfUJQjDnywRrSs9zoqkAxt2LiGjvx22fUjHFdGpvJmTKokeKwh7ZNLWtgp4dXBCrzdida2gtUpAp7wK6ojaao1z",
  "key23": "3htfpsa6cPEY6dmd8tANRJryVFt6J4GSS1NT8A7vNEgGcPAxtQKuztuyDgkrtCWHstikaz5Xy1q5PaFzV7ceSBP",
  "key24": "3VvapZ6odYbCCgD6SBy1GWo8FVfs7s2ecknoYinDNctbd1qvWUYNtNUY7SrWULSUCKt8i95M6xZd38H8PPYSmK6A",
  "key25": "245zVUGR9JXS1pL6msZmM6cUFaP1ktkXg5AZtJGG9pCq7HYQxQo2hQFoEXRrkWFTZf68a2g4bsY3KBU4ttDTSu96",
  "key26": "4KxDv1bmhL7Zsv38RJ6hvEEjstQXzNAqPjj9bp21fiv2HX4PNjkyZXcjHKaBaUb9B4sCm9BgxhEwzc78yuESZYrm",
  "key27": "2UnupafPKJ4MLdnka4J1R3Jk9bsffv29nbPxqMvMnnzah7BiECwuZ1ynJD8XzY5vMo31wWLftNdjH5WYJFfsUNnQ",
  "key28": "4azrGcchrCmTJsgGs8QNap29DGvR3Dm44xHKTjA9xBzyRR3Caic7Nm6aV8fvwsSc7rFpeJ9SLQ369rP9qmebeU3z",
  "key29": "2LkHzd2Nyyz7KW8WAae2v34xGUR6XWzzDK9JB1ZQpZXpSkUjVQdrvoEiEj2bswmkMmoNjnkyyBq7H5BVkN2iMhnJ",
  "key30": "5ZTJ6c7GBtxzx7QEGcFgARUZbEKM5C2mKUBDx4cmeaF7SHHAAtzT3eYFZihuvH6u66ZNigM7Xk5gAatKZnVp44Bx"
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
