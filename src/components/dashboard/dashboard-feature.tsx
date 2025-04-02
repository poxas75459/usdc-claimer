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
    "3BjQJQ1PfNEwtZ6SY1joZYMTLSJmgF8C6NnjjEPfGbA2JMSEYLfuzkcRWMn2f6XDesYSdTvVG6BGWjRUi9p4KSSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L8tEiz5HjzpCViZKURvMkbLtkHUJ7d8g5FXrhXfezo2QJyLD3FNsYTFnet961zaPvmrg9HQNY8deEmqD9kyWq3c",
  "key1": "667NZjEKuH56pEKaFA7KMbKdWdk3UetHgLWn8WEgQwmrZcSFGr3QPZMra6np6dQjmwBNDvqLn5ceUub9oq5eevrb",
  "key2": "5vY643kzpAWDAmuURxyvaMkusR2wZdyWjPyWiVkXnTNypbDpnxjGpFDwkzNyK71rT3Vgi5sG7jGBnmCuxopkuDbf",
  "key3": "4N9VY5Ksgm32q2zz8C1daLuzPEVZK7YsU6jcNPzgSbZq95QVv3Nt8EXJisfoyooHnvU6Rc3B47q3iQcuq6GLCMGP",
  "key4": "5W1D2HCxqM41hfWYqfaspt9vqGfhNoQ4LU17Z7hG7hhDLxX7zTwJzDuMxMKw1Pa59ck92Y5L3gjwbBTtjWnfLHpx",
  "key5": "2yVFtPyBopUs4jDamoQDXDoV65woWQ3QirWw6zLrA92Z9wk3KwdqRj9nw8oiy75kDqNcubsH2wk2MRra5qe8ijoc",
  "key6": "2WzT7a8rAHSCEmoLpD9KPXvsGSGVgkeUgyx9gViQxJgeHdBuZZHYysjBLTeH2QrjdR3924gkzQTWeKCTXa5tz7BT",
  "key7": "xV4KPDtrbsZ26L6WUVy9wcAGySKjDvuURvChDMXWfWiZuzBcgU7e4vBMadFtfCm4sK5dMmYxnWN3v2KXQ4TfYkk",
  "key8": "5Qgesxuk1ngm4cZ7ddMzpaqvCppNmt4LrbesxnuBwaYtnv8dLQSH3js8JMsQBeaVkJAq6oK62GSQgXLvhjVuphcY",
  "key9": "3HAxAXmaTCCvYv1g9VMZDxRVbeTmZJyXooaDJXyMDVSymQcKV2nS9XLuGXqZbQZUSwbwBfuLy6bmD4jGWsobsNNp",
  "key10": "3pm2EUw28ZU5GiNRKEFP9K4p7QimEnLQR3a3VFcWSt8iE9ED3H52wHGA3nb2ecHTii2RUrvvgLf6xyu6uxbWHKb2",
  "key11": "36QYFNPL4aNk3ZKHaGNeioWjR1fZpsRijXa49ZkZVDaxGEA4JdmDyjD4NSntCHDKEDeo1XZ1upaL5GMjcUq8voAU",
  "key12": "579qEaorAyvkw8hits7RFphRBukYtmNQjmgyXduVHHtFv5c9BD98CH88uA2eAG846ffBsic8RBoK6VdA5Jy2xCpq",
  "key13": "MmEx48H2Uu36XsdRHFHbCBSrCVaf9gFTxA3J6mFo6T22h91gRV5n8jemzVDaZnKzXw3FuZPN6j16xNDE8GKNfnc",
  "key14": "48bq3WVDmnUFcwCKGMLGJNNjNkp3pd4c4reo2XHrcrHBnnN2T9L1kBDAq7r1VbD4AdycRFBoAF7LiiPVBVd5sV7c",
  "key15": "4GgTGZbX2M2LGaAHfS7HR6jAiVaZtdTpUNo1XW6gjf4ksrgL5gkDqH2m8k3zEgetVf92MPHsc7NFXmsiWuak4e6w",
  "key16": "5uEkXeECKqnR95XWqiurBTeYrc4pbKuxUjqzkPcW6ffDt9saXGiw9NSV5mr3zPuK9zDxqrbCK5d5R5mB4axniBP8",
  "key17": "3SLRfmM4dp49SVjwx3jBMNHdWzePpT8X4BRcfCDetMUVg4ENpYeZV9KFJUuDakA2wmEibXw9JkRXpJ67AsaGWKv1",
  "key18": "xqhsAfxjGFgopUYF25thF5tkBWHf3XeGhE1PGBtFvdcMtTxC158bQDvygcKv34qCDW5wo6KiUxRChnnH1qJtPBZ",
  "key19": "4oBtniKd8jsLCZRK2sEmBz9FDAPZdyumdbESkY4wHA84KVAQ3Hd47dZoqhSmPrqoPRRqsfAJca9H5UwWPkziSGmi",
  "key20": "4uVRgXzhYsjepUk23BBCntAoKsHGWKUuxddTnwgmKmYUdkH7oWFUcyphxfcVd7VGp8rJnPEjuqUPMedL3siaawA",
  "key21": "2Y93JmYNnhdRtd16Un3HN12Mc597cKcSSUnkHPqxPq44k1g4wh7ej5JoqYDyzGzFw4Quw1Tr8Qh8jM3ah9MZq7BC",
  "key22": "3J5npRTyAcR8DgFKx3Y3Vq1ZQK9os3UHxCVvxqNqALketDrpx5vg1KYwKyf4fhCVjeBgkiZw8UMQjZeiHqhRRHmA",
  "key23": "5mJ3UCJK2ZXpuE22eBZJSYopzaukXm7ozX5f9hkGBcEf6eEcQ279itnKxSFVdwE5BorvYHNZvJF2WjyXCAPFU7by",
  "key24": "jwG2TFkcj7aWg1enSbEzQ11JQcQpYnzZvN8Pxp1v2c7kdBPoRj39fRJ6LF8FwCSsTDR6FYDT3gURdWKMNNfadEM"
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
