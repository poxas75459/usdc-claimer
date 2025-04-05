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
    "522WhNtmw63LwXHrsW4ttHdt2dg4xrnLqRSbDfF8DPMPYfbnFwaZ5df7tVGnvEXuCsaD53M7cToTMQd7xWN51PAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BRUH4ZPErUMuqsiecU7MMVubShGtpid4ANSQ3Jjo7JoNTbes1ZAo3MF1HX92njXMHPGK45BABfnmSbMX7PATpEg",
  "key1": "2HZ9a2U3mhyNHd16EGCgK4YqbdPEztZhh7CJS8rUvEaxwH9D1DJ1ou9pyAbNmCuZf8M1UbschPKAn4uyZdsR7PjB",
  "key2": "2sTwU8BMyp29K4afWw73mKJDf8ewkF42dF7eX35BDqx1G7auATLowwHABxdmrrEbpm9KpAVkpQk6fx4mCpFnqcDS",
  "key3": "2XJ7oa74nrFRpgcyF2SoYAvQj4PgBTi8fvP5FZWVyKMUMFmSgM2yGpdaAnYr4gXzhvMeoxGKuzJjz73L23T2QuCf",
  "key4": "e4i72WKuMb4A3CMBKKCcC9eKTSR1j6GrJg1R92zWjsG9aVP4hjM6rDCxb5sLYL6pmNzpKxC3aTzbxuw4CHu5zEr",
  "key5": "BTX2GWaoqyVvYc7HG8vYGwu6UF9wgYUXZ77wpRFoNv1DzfEiZn3bpKxD6i4YxX2Ci4pen7wrPgfbnbEMBghaMq5",
  "key6": "3ohASeUP9uPEskcYDNujPyezBLuAGbRUqZEC6qNCwY4d5NU9JJ9wkAZ3V3c6LpX88LgeyX4PMGpcEfGXLapwt75W",
  "key7": "QqFzzQoLburessBqkmoB2Csav5oT6X46VQCPr7NFwWQwi817hBrpnetMDPxMJGBWAkPjhnHpKhJaYBPwRYMyPi4",
  "key8": "5K5J3GRzCTc3iFyUpCUsxTHgdrntuzStpR3LFDVBB9ZVk5SMrTNNskHhqjvHFnYX1fkBYKSDZHk4dosh25FtJHDb",
  "key9": "4GYSUsV9GKf9BD4bKDk5JTjbXMDrdogCk3enrHzoFMGpduhGYxtYyHnWkhBAZqe5ujSMwakw4j5B66mJUeWbqHKQ",
  "key10": "3kKMQA6X1SgoHg1kJhFWqYojqhYkWbQjPwEBerpiRcuK9hH3n3wUXhhQLFHY9RhJURrWnWXCo3RsmRLcZBzt33Jx",
  "key11": "3BFGGRuoQjzK86TErZQu3opka7E23bQFSeFH2mdCpKKKoFRGBz5Ym7HGXdRGcuFTQdcowwz3Y2ZYeJtHdAS1UMs1",
  "key12": "nnC3be9Mba5U6r9nn5WQqfiA64pCJuUcYikDSFsVp1viQ4gaAVTWZvhwFkb4cmvxcqBQgRZ794VqGGEjHf7yKmH",
  "key13": "41j59U68qcG2i9FFK6K59MXpRYBxuc578fvvFw8gJ8wqhV71qbrfhkoEQiwssDu4ezX7nTcgp5TJrszZbZgkDXut",
  "key14": "o8ER5cPbX4FksCX3QWjSypnKAHmWMJNrP3EPuHdfbbMiy4Hztr9VbnfD8q6rnXh8npHikiuy1ELeJbCsjmtQk72",
  "key15": "4kYYAr2kcnfsmWLhWpVSDWvgBUYJADq4Z8j7xE5BrT5Jcr63oXpcYKFeAs4992uhwTaVYZi9TkLLj7Lbr6j8xCir",
  "key16": "TUxxyJs7tWQZkyF9f5wdC3ZRrJa5MNhw1z9fGxbUWQgsTHhPisrjZiwP7u4q4fU6L2ejFhbAF7A8nJDG8hThcrN",
  "key17": "5fjPwKSEqVVWb6jXtevN8WhS5yhXaiWQACuW9BH3rK1VLGAiEZiEKtjZKetvZG8SoWwVzqNbFUFj9MmEqs4gQSX9",
  "key18": "2x8AKQ3fT3VGH1dRaNP6q2zGYW8hCfNGuyw3jqqcrB2qZu1xLHzsD93znCvg572zMeQ5adGqh18m8hioAHzjCbMt",
  "key19": "4nvLBnUV4dfZET2FTNWHN9Ck1hmCjJftqGaWKK281AeFJ3Ht7q3izNDLb95hcRh4PqZ3PRSBLFgaX4UPX5h1ErP6",
  "key20": "48jZ8Cwg9BioWzgQ2eTYBRKQW4z429kS6AiRZVAt4JEteESnNBHUdPNsFZK3sgeno51nZNQajTVs3fHnoiMRs9bg",
  "key21": "2cSVgqJXy5z8csJnwqKCZBSK2bGjsyfN4Kn5wM6jHKTqiBzSZCWzpBQCHJKgcLvdq7o5Lj69cgUPDFNmBF5iQsSw",
  "key22": "ThuNvbD5wDp5CBYJepgXovjKHsHRPZQxZGYsucD1s4wdJTFHegTq2jGNBf1X7i9Y7HHKCVTaTcZLU9SUF8My5CW",
  "key23": "5L9ZkKiDFSS2f6QSFaYBhBoss9ESrTPrGANDhdznEZntqTf38TrhMSvzB8zLWyrTRxDHuutPf34qGwvTHNyRgRFd",
  "key24": "2iqgfMLQBGakg3yr4sb6s91XBduThv8CNk4FFDi6BKSSxkkt68p3ZW9nNAeihatuFsEVNR6hztApGwp9z1kAn6Rk",
  "key25": "3R15YcwHsNDBw9g57BMUvmQAHecJXPH5gfY4cjLZgfaCR4Ng5YTghtikahQApGFhcMmjQYn9sp9QApHnwoAPHDQt",
  "key26": "SpQThEiLQZcbtQBZXgTrrMt3gGnvMztMVqEwXB2SyHmZdVPFFnLMcZU2fP8ZHhtBg6UKMh2EcwUUeEd1hQvtF92",
  "key27": "L7hohQVej5qAJEmbQJuov92BFf27MqsC9FKVzKDv7EMAd4pooW32P3aR1s62Ta75TLmgZfRpsFScGKbPz7JrYwB",
  "key28": "BQj4U57rjbg8fte8YKv7EdzBJFg54U8ZpuTB5hjMU1ataRsokUtQh1m6cMnw6wLFF9XGNLQk9SBCrxLH8jiV158"
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
