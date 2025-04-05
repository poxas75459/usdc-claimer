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
    "TqDdEiVwGjGACT4h8Z1fAy1uy71vd5YWoZJUpMcwCPzUA7gwX749pHTX3Hbz6ZNcGW8nUX3Wtomsn8jMBdXuRvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XL5n8ZVYVB2oZDZZigUZ53KR47ea5gVKaAjLPCUC2DxTkg2Gkky3JCSehy5fvZ8BQapoHuzLFY9ZZCPKd3nbqdr",
  "key1": "w7F6ykhE16fR1RTu4s4WKN5Nus6WLjmxito7b4YTJre3C5JigkxmqhbbPsL9VMejruH7D4Mopg2B6bDq7pk5ELB",
  "key2": "4FEJczYVuUkgNA7D1cTXg49wM8qipyZvEFusoPUerFrxD32aUyKiH5em7zNpV449y8FtQdV5izYmw55eJhERdExr",
  "key3": "5Xavz7vwxy4aMzB4oWeTqFaAGEQ12pDcXFmYB9XB9jJF2kr6j7xGPUVcQcuZyq8xdDAZyYmRRidwEjpNPiYx1BPy",
  "key4": "4p6bzbQheCx4bFT3wfB7X6Mpu5sBGARf74ekRbFn1nKoA8jFrapb58L5WQij5PM8Z8VJq8WT5W4xQnkPhKHY42hC",
  "key5": "48n4VX6iTARzcrGyeW2ksyumGQCyEHfjzD8hgTECggfkShbRj3TvY1K611BZUacsUNYcDuuGEvbV9gtjmrRfEd2j",
  "key6": "4KBy6GZgvLtEaP4N4DHDgyY4GdkFHCfgfqUzyuU73or8biVF341KgWmXynxDYpw8W2B53naDYJX3NdiucHrD2bRK",
  "key7": "oDqMTmVZZznibXMfsgC6LrXhEa9HSjdh1t8gCY67dpeFbbD8Hm5Bete8rPTqRYZYtTmTSSgPFND7J28KrMJYK97",
  "key8": "633yhTTGUYZyXmfYspTJECHKW3mYprTytu3ShWc4MJiAab8MaFJ1zsqcqQVXpNJJHQNXPs4xkh1oT6ubgrFkxj4i",
  "key9": "3r71tdzHRTHp4Lf8UfWoHW3fKaEEHwzyx9CKM3CCgGCvYstoVpRxVBeKZdMnDoYPfCYiyLvprj5TxFYAfY8iCj9R",
  "key10": "gDBDA9FT5hUs96qyW8jPk4h1Ee8Ji7c8aySuyk2bLbMN3jJwSok69gfJLABoV78crSf9E3Ww64B91Mo2GKbdLtL",
  "key11": "5jrJ8ygvTFY3GHwtSMNEK5zzVN7Wk94fDanQTLnvoePFypHAzY3UmJ3oF1M5bYd2Q9C5AcAeNDBgWjFDNoxY2u5V",
  "key12": "4m8wTB5iUTh5otkjT9Zp9SAM1N2ABxoxJNtwHZK7punhwaxWDV2dTLLC1zarEmh4CNyzBttshwhxToHAu6kZCuXs",
  "key13": "4ZGupmnC8rjpuo6gyWoRfb7NKCsdsPSYy79sgV2wQgpVMwwKLHSHjjbWckr8mH3T6esgnNuDhJRCKfkioRF8MpQQ",
  "key14": "5ka9ZTTi41RWJJ6pLSRxE6ZY5uQqqBRKQMbiUPxD2yKBwtnqAGkmSG54WdncGopzLFeScmtiRaiJe8cSvxJa7sqc",
  "key15": "R322z4KAhGtCXVL9VHaux2xc3tpsxasd29hTMPFgQPwXYJyoUDgdBnwWG5npZiFKynDMHNDQxc4ZvHA8JQvDpJM",
  "key16": "5Cj96V6h8XvLeQPitMr1YuvqrFMfaLiJjhFwwbYs3JC1aZrKdg1RsDsN4HY6kLL3fC6taPktLYTpMqhVY4a73kvm",
  "key17": "3gvKu6AzvivFTKFUe5nrgahfBY63bWUEnM7dmWscKAMc5DghCpy3Uvjaitunp5UsQ6GxQ2J7rACcKGn9GXEijtSY",
  "key18": "KchsiAfZMUFHNRAzX2EvnuG38wm8PMLzpcMuwLgKc2P6EUhnHddcKvqp9Tb2tdaYvY5hwtGWa23XZ8wQ4mBkomn",
  "key19": "6NzsngVzQiyug7rRTSvboNPTNvfowaHCLSBfjJqKPczZimbeEBFy6CQTkXKrypiDVQQZNxVt1UddkppsiWMYk45",
  "key20": "7Kwbm1EvC7ik2fTcHPxAps1JeKb8nqYuXDxkh7i2kDoKWJyWUxEacKXKUko2T4iMvvPLUNKyMn8ZemW9gWvoM3z",
  "key21": "3e48XAmZjsjq3zC7L28QZa3nL46jLcm63puKPxJW9h21bzDbKziv36yMxZtJQTSdpQtggpMaNWQ2Anb8G8vsQhZj",
  "key22": "5J2YRhEbWVsgSso7x7TQ6LjNZ5cUhiy7LhQWa1ZCKBSxS3BXo5C4kezw8uV1RR8psMCTESHBQVGyXRhykCy6h6uY",
  "key23": "33jgV9qdZV9qck1N8VvvwLPiDV8cEWS72kTtxun4YX95dgD7iLtxAtLHpzZttP5kUE28XvhWT72yuxLbus5HprMZ",
  "key24": "3dhLHGfSRANAsYRR7BLWPWQ6tGfbv3QVwxPT1YQqStG2DJucnFHe6oggKU5HwHRDa3M9B5fuN9BK5pHpyFn8QZZ",
  "key25": "ZgfuD7WC9KBbz8ryx5W74kwDfitvTzU5gyPtcgQvMpYTxV45X43KtGj6LnsFeNP2hdb95JkEvphFWjDoMEbMhJ6",
  "key26": "3mvrNtKJCYAJkpKFsKJriMnDVWLhze5fwruVYk81saFjXea8Qrrpaf5kfUSED8DRmEyAHe2nXsV8BpcCbE5C9RjM",
  "key27": "4hXooQ1CSA5tL1EMscpdf6ziMtVyDcpgpbsyMeb88dWmT4NZhK2uYS6ZbPfD5xcoVLJsktMGcfPFn5mmDv1UGLXn",
  "key28": "K1oGEFZhJeT3pfR1CQdd9WRy8pb3ZCvcFh3yP3jBdsQ9Vj76ThqjX4XMv4JKE6maCSFTbWgwU8LurPcXW2wFz6S",
  "key29": "Ds9Bnr5PDXuTPFCxv3bgQeoz2QRTzGfhmUzRVTRfc9Xj4WfMg761iNebfkVQRMkdP5TtGNTPW2Fhkb6dopvrPsa",
  "key30": "3aHBwQ8RfxkAC3pCxvkWb6uLP8wVEKigz4K1nKKwYKJD87fPrr4D8w2KMEb9ot3btGkttDioeLxXaNfPNeZLyaaR",
  "key31": "4Svrmn32CHaWpgCBXrdAXSHC83b9y8JNvYEUbbqW3NmLXgmgZAxSXqBa2D6K6AJjxu8wR14M1KMzrEUviXb1UpsD",
  "key32": "5T3cJABhViJp5RoBZSXK2BqTNDouRFVaMriD5mQSpZPDCDM3UVbGGnXtybSYZXiT7hN9rpqZhEtfUo7VyetD9qsN",
  "key33": "4SzsmAS2gSQ2uP5JYYaqThyFzpS89g3Nye8RLJNncqKH22ggTxyS8fR9XKWVX1oBXopDbjvQfrM9nRa9inyMmeDB",
  "key34": "3jd1qgwUtBq8qhysuVuJQP4bWFqmVQFWZA53NmPKs93tZ6gcqMUuqAzKoboJ6RHTEp9dwobpa7U5q6tGNJVDANrv",
  "key35": "4EJBKF5txnFVNxGaxy8pqtMw4HBqgCXDvHcMLYW3SqYtVNVfRzGgMJdvMWMERTfuWM4aHYm6h6vnhTe3XePezP8A",
  "key36": "nmbU7vqeryk1fwQaPwTkm6XBWjTbtqRG4BHgwCeTiRU819Xiry6R25TuJK3u586ficVUmk2QFsfRNEX4MhZ47Hh",
  "key37": "4SXLXTGop4VaM7WJj6FxzXSd72QPaHvqLpJ5h6bhLFRF2JiVEMqrjN6JtWuPRtPpKLDPq8NgdMV3TeZUABzSnsJj",
  "key38": "2qmcPYfNrWawV7xaS5vxMxP5f3zjjnkoeEq2VEsLVUZ3KfjKPYHHNPzneoLTWUTk6E892ruVMws5vRXxcMA3PJoG",
  "key39": "5f94qRsePzMVTrGChw3V9HwUdNqT72b7hXQwfJDGkqAjHXPsbv4381Udt1CwZ5v2mc93VjC9QvVgUYayEtLXuukB",
  "key40": "2uSvDhgX7vjoYbViwoq1XzEonMs2cYt1pV9dXzDc888edhBM8dB2TacsH1XqCyWS7tpP1ULT4niHUXhgop3XdPyo"
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
