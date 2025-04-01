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
    "5jTFo6QxomXLedPxBKU5SVtBsPGC71bGDwaFtxkoRkuYJ2y1ah5EipUbZuT6iUredxVvqeX9ZBm9mT2VCm6oL4vU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2saT1hrRP4qFWoJhnE6fDesJC9dWewXBmafLtpYfryxpSW6bfdaCzef5QSxMCSoY7mDCpghgSCLw2SVC3xHCTfJW",
  "key1": "F6NmtgA2EgPFUPJfmNxK499JuGbdXkzwzqRhRPJ7no1wpZzBWcdc8Cp2JYCEEKc6pPPQboZzf7bnWkqbYtb7pgn",
  "key2": "rgsacLUyNMrPNafeUSxPGcMYdTy8KAGdmkVmh3S9UjiQqbkSuevxkhDnV1ytJMC1ja9yTRFqGvzru2FB3T5bXsX",
  "key3": "ATYhWJYmxasiG5d2XRqBmx9vzjFbUa2ErSE3VTC4oqFpCApkJYaXe27KS9bUzTNGQcUD7MhmyeqQpn2HSWcNZxS",
  "key4": "5xCx8rQjMRLL7MKPTbmYE3u13BjMx5sjGWQ6UfaAm5yFRUtEzeD6mg637fUMQGnyNWpJUyiCcFShnKpCadAmLjvH",
  "key5": "W662Txcajshcb33t1dRhfUX6CUHQXfeY8gtaGn9cYDuZv1TGeNQDZg5q287XS1c8uNd3MyZ57nSsJbnmCwPEYb3",
  "key6": "3temb3ewcEiMar2cosNj1gAXExEZwz3VDNDmbocobVqcqn87HVWx7o5AKg3QYkVc62yxEyVBkVsyHms2PfwU2d6f",
  "key7": "YUQjWbrkMRX91EhVyARPnRCb24UN2JyP6cBoTaKZsZVa8WVFUowAXXnz1xgdGsxQp6haDUJ4ymSw1TNWAZER4Jk",
  "key8": "37kj1JsUNf6m3UpG5vC6vtJqwwqZY8AdwuUM9B6VzHjhVkwn3t2WbhE25aMm92gzH3pKyPHh37Uq7fkKMrV8XtCn",
  "key9": "4WKsk4vnF7QhN5ZZ2ae9vF9FY9gjuF4WjjS3fujn8RFrnwcQDjbpbsC9PSTEcqsr1aiud2Ruumnjwf9KyPQkv4o7",
  "key10": "5eNDHA5PrNk4w26qS66B8hjhHNQfVD9AKmeEVsNLEzP7NoEiQAYqBTVC6GZV7vgEH5eSY3NRsKgAMU1Sca1AAiRz",
  "key11": "63J8owSL98Wz3AbYfd6QnxN4FiZoN5StAnQ7LdLwuzzcSc6pNuHGsk5AXjywzCZmkwYdRBnBs2rb9L6nAys5vPHR",
  "key12": "33woZ6TsZGP96iaH5aTp2pjKPvHRd12YR3kn4B8NCayFqLyKMeZb8UbEXBQW5Dj77Qxnr9zJiwDWDFGhbmyZ9YYs",
  "key13": "4xBEPZyD5gGyrpHdV4BR7cqFXdKwtKwgRUwTKsUR4KAECvia78i6fYGKPP4WQ6GcAchyPioA2Gbvma84DV8bUdoC",
  "key14": "33vZVzUzj83579DW4FsrJRy8PoGLFN8AYxNzW75TcJsNZQTkG7DqWSxREdWhaHaS2Gg6t2uZK4qkkAmndyKvftku",
  "key15": "bEVnz6PHLBnzHhWRuVEgBUHbox3bD4v8KEHT9qFPDtVEUk1oF1R9mEhMzJCo7JPDdPmpWFmAyGuUPjYGKysWNft",
  "key16": "58hPD7hr2R9QjWckvgwR7LufATiHYye4U1iH3Wpsf9EPrgpozwSun3o596e2a33Mmq6eB5o5NnJePXk8tcPueAhd",
  "key17": "3YMAFnKaCXWnaRDtErnt2XM2e6punYWXFEC9Mf5zY1ZqJuGH74uD6M3UaH6UXjUKK7wztqbeV9JyXtdsN3VLs4K7",
  "key18": "3qtcjLwXVsK2XnUiGKQ4tPA1LUhn1rzbV1ND2kKtsSnSQQsjrLschy6N66L7D74ib3gkgtXJ3G7j7QyBMEHsDAkJ",
  "key19": "2baCw9nGaD3mtFEsJbzD3rt8ByaWjnbqGiHECvCfHcLyYhQSB3H2ed5symGCm6JcG3tPsvWMh3CdGmhJ914GUwSY",
  "key20": "DKn4P4WMEk3r7oxUfNvNR9WWepcv8ccFy1Uubgpd1thear6attJMxi6VkpB3r8RMD57NLLv6y9B5FN16EvZNRHX",
  "key21": "5J4h846jzgNhpEW1nVRTFvMvBCdy63t1Usajf91g6jG1H6NfL9sBuFibF6rerJXcQNNBT44M7vATxD81xNvX8sWo",
  "key22": "2ij7dRNh5qsVVnMtFfxCPhSShxgZjhcB6MSbXURF5M19TxJXLABXY5AuQgXcErvYRrK1ntNCB2fnKmetTmzVm8Es",
  "key23": "2yNGpjutxzPkMobBfSuVwvRVYhUt2ExTrz31ywbuQ5Y2Jt1q4DtsJyrY9pW7B4AwzEf2e6TLSrBCpGowD9wszopj",
  "key24": "58rBhpeAbeHyqHbWR5nLmnywtCfXsMWc9vgcGY9w5a1BiU86QpWfvLP5bdW5VDxJRPJY4YfLTXPhQ3pg5ePQTauB",
  "key25": "5SqgTQ3rhPeFsxPAgMo5fanzVHXJQABoZU8kbuu8g7pdPi3JeFuA26QqCW1vUhF7UmSycuX1GbhJ1P2jyjYTVvEs",
  "key26": "2dpJYe5TAqNPtP4vjzczHAyB71a7WxuAdvSkPvQKaVP7rBjabDkExHdHha7Et8PeiUf1AbAdZY18NEFafbQBJBhk",
  "key27": "5FyuTAT59xG9VQyBsDHxcfn5iBbFZTfbidkf1wVF5CU3WSsq4VRZZjfSn57LS36qC4rJsg7jikNqKS3KxjBST8Sf",
  "key28": "53exjECBhKCV4ohYfY4aT4SZfNig1TSc47GxLvwb3d5rrzWvYSPPRzvVSSz3SwR9sJakkGgQRnGKirCYsesTEjWY",
  "key29": "5cAatQKBv5WWN7fcNmPsj4pazZ4gLzrQqEfJMRx4ge4rhQEPU3yfJKFPQX4WXpzteREHwfMfmb93u4wDydhuZXsW",
  "key30": "5EiNeHnkv2hfrtraf9c2pLWhucQFr5ewFP5EuVv9BHkuXVT3gEjncYLefp98bC61uVtSLRw4TmCpggu1XrBeb1o",
  "key31": "4LWEUFYEmkmdxixX2VqASYm2Grpv7FW495tEW9iQYAYbEGMe1mtAjHfzrK8DfFQbtKFe1odQ2c3XUC8CsLbpRaA4",
  "key32": "5gygtkgseHDBnuYBgpWpR7dyiEJWfmuhs7XHKgPPudtLrtdzYtBS4i7NkQhNswqeNqJJqRynFr7Nu8R2GfG7fL4B"
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
