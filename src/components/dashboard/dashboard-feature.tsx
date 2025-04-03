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
    "4YbeZHbL7UGrLWFT1TbbmZtiaTfbVSEnSUFfqa3EDYQuUEYp3B8PpYY12vkTtearXfuxSLh6d1SpkjQym4EzmYVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gGs5C3LMMKspdxjv1UnkAuRhn6octqaRg1B9cNT1TLhfjW9JqXyo7Mji3V5uN1RW4DvQtFr5uFsCxYsjDnFYGyc",
  "key1": "4qTKW8qXS9vFQ7v1NrVWK2idvrkokAzKRk9pYn5pUqxXqXWX6GRTrzaVtdBoFVcycahUFow7NywE8xtyo3cfEsJL",
  "key2": "2WbFwzUuLafMwGUBCy2whVvZxDURdASGuhUKwbrdWJ9j1xBuFTxhdhov1yumaThfvCiQkqLkPwEKLFLW3hq9AuSf",
  "key3": "5zBfjQZhLPhtMHhPbL6akyfX8uZFsDRz8amfPsockCbmR6EAXq2x1fUj9TJbYmEy5tejjnkGxRwzQ993XN86ozZg",
  "key4": "5X2mwonMS3f5xMizVaVkGGacroG6S2zsCz7sAUZ7wtKfcabZZqbVUAnD6fr3X1puFx6LdYfzi4GtqSwGNEALqj5b",
  "key5": "4tmXqn3Grd6eazSNqQqpzsUYxNL1xgovGtQBFBynVcW4xrEPpQxRXNVGHiQibg6gfQ7W1ZZetmjp1EczJn1PssQx",
  "key6": "61Rz5z8ehLzp3F9Sy3inBNbU7CCNWE79RLHjHhwNEkYVPGWFWqNHKq4YMW6fpVmhki3URUDtQcWkQMme4Pd932H",
  "key7": "3xyW2nxpCnRbCNhoa17YfBx5qVWSSBjycxViWRrRP4f7ckt1WGJPWPSZPfp4erf26EDMk3eBMLtDyFLY5rLa6DQn",
  "key8": "29DTXmdgCBMFqgmppinNfnJBJDoPU6d7UshD8Z7adQ4uQSgy4AGSdomgC9gxktuRU9c1kT55hWS5wkMjkYXJS6By",
  "key9": "51vXZADJrcbomJt6qizbhNpTaVTxhZXqwHxrCq4jbhf6NWC2jKEqbyq4JvLtXv8f5yuVnytBpFj9ZUVUmvgAEi9M",
  "key10": "oVDYhPeteREF2qc1ymz5TgMDLgx8gzjgU4B9aEJqRJHd6ckKKR6uBBsUk8yqKh4zTcPATJTqeKmiqmKZ7SzDBh9",
  "key11": "GndAE6wbfkixvaTABo6uBVkraHgJ7tTBxVMMsh5PdidYAVAiERWkbA5eM2fcGPzbggccT5W1RrBhwfxZG8czM4H",
  "key12": "5TeztVEkEaNrHXXWee4Xnuz56iny7TF5ahnQ5H4SbzVnGxjw4fqcpTuDfsCiDQXCnxnTUR6fCAQJVrPzNzco167D",
  "key13": "471o2MAA83U3oA7QAFMRttUuDUdyiWcwHyYXS8Y9ie6JKWAf8kqHkBNY1VLTznM3so8A5uKcGhrzcRnMNL3BZbCT",
  "key14": "3cWS7eUUwaDAxnwqLFTsDR99gsSvpkGQDY3WEhipdWLh9tDqSR9fVT8SWT5tmZmxCebzY8yLWug1rcdFmoHwmxFA",
  "key15": "3TWuDTKrPcHfm63XKvE83jwqQMUo25cdwW2croUCkiG51RLLoJGvQJQXvmjNmMxDm4scHnCvGJj6k12RWy9ornuq",
  "key16": "5Mbo1H3aASsvi4HvTAKtnSvNsuwQ7XXdA1aUfRkqvRBcBSqghrp7ExKWffHJGMQV3iomzznUEu9cBJsPcFV53GHS",
  "key17": "3wt6772QYab9NUd2wyCXwgASpEUgHzt8UjXUiPrNomdJ6A6H8gP2EBtJY8QAsVYkH6CcVi6AwemJ15BrNBYqRm4r",
  "key18": "5MuXoKgHNMPMCkPZfk2GPMbVUm6smaPnqrMspkQptKawbER56sh6g6RciJbkcRPq3X1YuLS1LG5pjv6Uq2uKT4EE",
  "key19": "2oSZiJcmn3MyGHM8BqNsdkWoCgp62TwZRZEz5LTdcgkStHLjiXbpgeXa3mn2Pk4jpS2YMUASbZqcJqxianQEXocA",
  "key20": "3kjySVqR3WrrLDmKkwYRgBBJGQSvS3Z9qpDyQvf6T3Avx3xYHs8b5LcPudVZTEeu9vQTxtJqq6RVK6VtMVLLcytM",
  "key21": "BQ8AQumkc531xJvCPEccV2JJWbS3BTnuYgkeTkwxHDHpos9WtgVkMYSxdTUrkxu1UdZBV8qm8BqmEbPsWZK2vpj",
  "key22": "4noWvC1ELXrgqVXRsUfuxVc9UKXhxSTdAtgbsE4tLsiFRPzjTQDU8A4x8bWwC52hyqJ9q1YyfarDwf95CzX5Vf4g",
  "key23": "PV1cqux729w8fxRM91Mdw3zxQsSne8XqKDuAggNmgidgXxEwcFAkNkWHMYvPL5s99Krc9GShRZ2XavwStATGnQN",
  "key24": "318rWHXQyEv9CGVQLh7tQeiNv7GtzUGdSSgrWbGokK2WckPTrfShA9pJ5FCubZZUBCGi3p9JoCsE5SZSzg8NBh17",
  "key25": "4fBUMo3ej9hS3y7TYDK3C8hbxYGc32yeMM8ViLsvJQFTTakr2YbdZsggVa74GmAuHC77xm3SGsynvpGcwuU1eyq5",
  "key26": "2nCq7icRviKXjnmBBohR3DGTx7DfAjguNsTddJ6UpdiLA2jV8atPsB1mCe2PfPcsQMTPEbLt5zcao7YLNaJsFhnf",
  "key27": "APGuLDfTbwcHUn8kmF4PQC9vR9NNU3Kasi9eVXSb4WmmMrckMcvf9Q745WYfM6YQ8R2K9DLXpGPktX4REWU8pLv",
  "key28": "3yaTgsmEDxinjoe5RcZkzUoz4XEcy7C4SJGPtwR7U4qFY59rnQBc1Wdnfmaw87JG7hWUYSmznKBHfDozuTMxWuvK",
  "key29": "37V6aWLgYSEVv2u45BQS1GXANMEPbaQnGBGsHTKByLLJ9ZyeKE74gw9hXnYxrDqet3JWJ7rEKFDU3TTiM876PQao",
  "key30": "2fjhJgKxkENzA8UV41KuUxThsKBroMpHH4nuAtqs6hqZP6gmZEPBywy7UtUAP6MRyeTC5Bbz3dGRS5Gs6V94CoV3",
  "key31": "45jJddDavj9kQrbSehCdKTziAv8VRmy85cFMenwZPFrannhxsBFHfR9nALYxWQwLuyQeeskLcJnJRAKJLEMagPjS",
  "key32": "5D8syhtoGysFraLeLU8Cw82cRcKLPNCKYrdngQmRxn3M4saaKcKS4Nb8buTwAGq1yVH1kfLf5kaM4GDYjz3Lisrj",
  "key33": "5fbsqLAxRNturzLtS8zW9nokuNxVG9y2HrJQkYXPVLpNhKQoyHtEpr4CBinSdb8FJ5J1sWwKGTiKP42a8vQggSJT",
  "key34": "5YwfnpEZQsf3vRz75a7HNXdATtHW6jHTCRyh9Zm2E53gY9NNWEWR6gWnbrJ9AjAvYAgtYA9BaU8C7cN6mR7bZnH5",
  "key35": "4Lgaximn8R1gHYJc9tiT5TLHdQn5AM7HLbeFCFuGAYs6FbtepmFCcXzRXw5Et22w4MBNYgK5JS2xnSS6oHeG5sBV",
  "key36": "4cvzdohbHxR1qontN1VZvCEXmSLggvQ2TRVsFUZhhBha5nM3xXHXQJQHS7LufcfHkyhgeyLiRbPWmpHCbcei5kkh",
  "key37": "4i7z9VYVSPwRnrWPJkw9AXitW3s5SA5hfCYKAroxhVYbzjq5YyWj8QVQiweiTyuoT8c44H6xidVqJ2LYwBnGXctT",
  "key38": "vH3Z95D6J9BC8qJdA8UrfuVBneyhi9h1iEnzUGUwcTjjw9QS5DL3J7yFodBjGL6roipBCS8rKQ9m3yznAwuSAAK"
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
