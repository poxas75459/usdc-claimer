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
    "4w89stLx47KJeQXPwmF5Ryzc5KfhEDib7i2DFVwKybB3qE2J7VjdQ4MBxnhFtTVoyz8brWmXW5rsi8BJM4pKg8Md"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GEtED3RgxxmWEGXjrtUf2DVtrLtvDYQeDppYFdycAkqCXC8TQgAqP7NbsMe5onSUubhcSFwjJ3iuV9uuTPpbouB",
  "key1": "2JowLtNahpVMmcbqunzNJhGCGShSiMXbgL1pZUe15A7vPiN9RzPumH2mupTFXfKBQSm7BP1AtuJGdNKzJWuay2rj",
  "key2": "HUrCeNxwM55VkdpjXh31Zs42Qp91164Qnpaece6Mhy61YJFeUJW7qz4RBQCSDqQiia47QfVtLREYFRYkSpfU934",
  "key3": "3hwW9UDtk781s2BnHQX2J1kpZoiSBQSWFRKfpGgaJ8DCcouCe1pt5F5g7HkYc7orHLArxGpDCUVPE6myrNjN413R",
  "key4": "2wxneY39M2CGqBhzhHvkRAhDvDeBcSqQmRakZhdp2MDobRnn7tfuXtu6PAtQnh2DLvrRv7gL4PKYXJ5xsqvjAHcG",
  "key5": "3zH1EyJzEykwSYKuN1axrCREfD2p2vk3rDP7BWgYCFxajxy3hnwwGaUcSrVmCSFH2UaAXt8wLo4vHNpgAwGC6UiJ",
  "key6": "vyTZSixwFvYa13M4T969hr2jrwdW63UxV7chK7VyNXLkpqKDpHvLjRLbv2qAUGkZJNhKs4GQ5X5EE6BrPjKtQgH",
  "key7": "5PLzPQeWzMnrMejzaKWevwSRHaP93W4ebRP9WLX7kQ5kp5g4pe6RoiDhvRMPfRTQ6NKAbmk1AcNm23kXtJ9HDqEx",
  "key8": "2mg669sYvP3vHSawwfMGH8nYm9tMqaJNTehPBqTRNJAFv1szWtB3frFxBBc8ESXcHPpsVu6NskSbQjzMBXDCDDZH",
  "key9": "3A7cnUWmD2YLPZbCChhwfCrwQx57am3EYaZurFLrZCKt2isRW36tUxQHfbZYCANPecabWR4KC3YtZF4iMHSoGDiJ",
  "key10": "5RgCtjeMMWA5R41eAp5LbpWo4uPPCbop1Ed1M7AnDFyneQrgzGsv15ihw9nWEhJU1LboH2V8hQdsjtEdzjQikoVR",
  "key11": "4Skb5yyfUHnkxq8bkLznNVQzEZxnefZjrRNY5JXPg6zitaxuCWcyVkjH3uR98LXzFbXAEcfkBw1esx6NKLXZ9v3P",
  "key12": "9yEhe91Np7jvMeGbgeZqCmkGYMFXeUUckS778yVwZxs3uqY89SSQJ8g8PhuhCeZfV9q2GiicEfLDkk5hKSQ82J3",
  "key13": "cZNbfdQt6Mg6aiJfyiAffdD224SDsooe8i44s6Ds1UhevAnuiwCqr2RHoaoef3YwdUJzZAwxdpFfNVZxheaDNVk",
  "key14": "2FZTxfnLMhDigVqgdh1CntGvBemnwqvNS72wuqxTD6UaU44fpfJvZ9tCSN51R7UMRh3J5r5DjuEZ68qvrz1A5si9",
  "key15": "42VmBTV9B3vpDXf4NcuRAMHu3k6aALos4EEL3zqB8Dd34cq2zQGqgU5xedWBLBgKrJVogQXrSECMXBVRyafJ4Ukr",
  "key16": "4uhdMkjmL94to4qWBZJjQsSKzR1WN4qaEB9Hc5puX6qU86Ch1HzbcemyNzh65EqenYnrrs6yVWuGrNMZfEKjh6ng",
  "key17": "45XhVkfMdUugwQHbyfPecNQeRuDFm6Fz2sqWaweHG1wXgvhAjb2uwHGLfwVDCiA95dkw14kVkpa6uGQnMXZpEX1M",
  "key18": "2FpeZQPvKfn2kQb9fyXgBD7PyY1vr7svXjFBFZga5uyAUHQTwgNeBTAqGNTTjRPA8CeF4KUbJjRuGJ4bbkTsszkr",
  "key19": "4Rd8BmYqjRPzbjYveGbeMDSnqhEwCbx8uLaby9YPVRwUtwfCcb3qusQeTbMYjmoE4wJyXzeJMuRStMxgYMFcwQG6",
  "key20": "3Egk8rizg2yjZmamiZJPbCpjAAhHZkDQ3N1FX38VVhvrGgDfgVyzuZmtVYY7jVYTRPwjJ9kX1FAhj9SJgKh7GhQC",
  "key21": "4Kg3rx6P4s9r578vwpNNTpbUn2G4qRz5TYgSWTLkSK639Wzw6qHgFWvdCF4EVSjbz2tJAMsHk6coJNL63FPiinVV",
  "key22": "5rVVCFsiDRNAqGB9qBinydX6zyV4Um3WNHyujsKLzbVZtTgwQWAHHkUyCgn5ovW1XzxrgajncNr773sao5QEZHS7",
  "key23": "M9duyWgjU5odnNg1hbUR5wDy45c3Pom1WF6TFjxFdJhJQmD7KvrpPc51y221QLpJwn4bVtAfyT1mMRPKECR1YhM",
  "key24": "4Gwm3XPs5mSK8W4mZE9B2riFTMRLKQ12Qc1gTzEfPn7vybgmfZSNdpaC9T5LJnMj2WJgMRmLdKccex467E1iJNLw",
  "key25": "4tRMqNXgRpjNg5kkovZTi9dme6hQLGXG76nmVKvD72KvisxwiV3MrGDFSpCFuVgWALkvwRVnbs2jNa1UncgqwS3s",
  "key26": "67mgbM5HE17guWNJc8PotUVzjcJovee7VXgMdhsyETzoPFb6igf8DRZBpRtz1hsniXv3vP8PqbWSHGQ9ZRnetnP",
  "key27": "3uAWzGTKq4kbwkQEvD9THwzxhwdL5m6d6Q2Yre7HuDcujgoxhzgqJMMFWiGgUtNuThXzJi77iCrreALrkZPRMXsK",
  "key28": "23BKDrDwSgxEVWEgoR4N161npPbEzGiHpBgmCcygzM2DphSwXBfAGVJeMrctM4efAeyLa2Q6gCuLcSGmnNq7PwH3",
  "key29": "2tSMRWh6r6brFRNTNR4kXJjJBNmSbiMQAddKdiSPDVHWmwfATPnb8Zt2sLCpsWrVan18o6pM58VXi67aXt2FSyyE",
  "key30": "22dTyJM11JmSbgDni8UXLgu5MwdBAcwaWusyLugi6dPJDUMaJH2pg2EVorGXiCyiRejF8NPrr8dMXAb3yv26joRG",
  "key31": "5mCZ4aBeMkZ8vDkxxjJrCYyx2Z56meATTmcvrRmgRHvTnFtNZ3wvHTvGoJ9sg16PBfPeRrHfcKAEA4Q6iqiACDxF",
  "key32": "4PxKmUWbPyoRRU3MbfZQosk18KyxSAihMt8KtkR6mNNC3Tf81c81LwqNnmKtkKvdYkkScbqZrf9GTLNKksGa6nQd"
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
