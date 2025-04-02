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
    "5wH6XG3rz4oyVcv9VNqfj8QaT1xwjVgw14C8AYhsJJqKXnqxUogcUvzrXXmgovp8aEGJ1cUQuBkykmpLqK8kqyXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRSvHtXp6ECRi29hR5ckGaUCnUE1711JkC2VqqReWincnkQjLdPyJKET2825GhY1UpBs6RwbDiEqemYBvjqQeoX",
  "key1": "4mKqqHfxoxHS1V6dMViHZyG4faWXVS6d5HE6iTbsyrG4a1cW9Q5PauBYveUK7fD29feUys32HskNMnmmUt4X2BVe",
  "key2": "3zHLCVvpAhhFcDsXT5TtsAdXevM25beDWZT8ySCmMntZdy1hNo3FhFYZKA8rST4FVyRi1gf4DG8d1fVyD4TavYyo",
  "key3": "4NRJQGD4Pe2eEWAbYe7a2wGg2cGvpL5LbtErXMnHksA2dpYrsSYoCknWLesHtbgnKGGt1Yo62MDsbxoTEEWaG2xw",
  "key4": "5Vt479vmKeZWj6nnjXpHWcrFZxeoU2LzaR1thM1pJXMCWZv1hLfKJZAfpSoxTDregHaQftCmJQvpS1XinLjJrzoL",
  "key5": "5ip586cGSAZk4iM3E7GpefXQnB1xrX5cuDW1BWSjnN2Ngb8Cp8LDEtZM1STnSDGap3FMiJVshboSo936mLH2ACvo",
  "key6": "3YsBX5osqg5MBxL8Np82SvUZZawjq2NHd8LCXL9Sf2onPJX9Rs35RnyXWCvDiVbaaXgjtBjhvHLHKS2L57F4XkjK",
  "key7": "3dGZmy3eaAN9ETcXM6ioB2HZxy8NXUPkTMvjz4zKPDHq1CNRp47Z4W8dCrP5VVsUSUZdFkQc25ArBBo4JRHAYemr",
  "key8": "4RajjTFRknnmygePxsejFNG9y1ViWGNyecp4WZUrgFF2WFjn1duA1WYV5RyD1ig6qdomywkpttUDQuoQqvkJWd4W",
  "key9": "4Jisw1sETVrvadjvzhuhDScFs3oVV7TVkFbSsSLUDu9ZvwwUouD9tWZtL6nBc6uazv2RXfcN3SvADeb3RHwRDCqS",
  "key10": "3GkW6w7FAvrgv6bZwr7xXqosPybvccLFLPR4B5AB99a8HBBfmABkLfxhiAupyPCkqFKF17KJDHhYZUUfQJooLSW",
  "key11": "2D9zjKQnHEykELifKUJA1ABmFkKyxMqnviQvT26gKK5yExgu3TLYUkMK1LouhbpB6NYCZUsQZCrN3Wawho8Af2NL",
  "key12": "2ijKsvfrxKTp2bP4yWqUxaqrsWA7EiYe5758AmbjUo2yWKHuVUYrVzK6LQf57jxzDW7vhk2iBhHzpkbPitRsPXRf",
  "key13": "3SGPQyEz89SVgVuoK95rJzdLCmzw2GwrxVZ4VpGSzxms78vwRokpjh7dhW9aLhdkU11ic21RN27Bi3typ6isvAtB",
  "key14": "4rsTmLzVzmXs4sPHUmwrpawPFR7GN5wiq9Thg8QNSP6TtX8Y5qASYUUWLy2WKhuXFWW3DDzi7fWCGCYTJeYqxeKZ",
  "key15": "36kqWgJQUt7JjMsE4ALX3szBnmSqzd7s9R1gieuCG1HAAbyqKQ3HBQeozqrtCyquNPWMc5Z3Myaav1vocKAL2Yx7",
  "key16": "3Zt7XbUSjGo7NE16pgCVkJjeLxtL1jVEJrrVnRQ67vX6L8jNoDWpDRLR2QGd2cdGVN3dUZSKTGhPmpSU8ewYt9Uo",
  "key17": "35eE9DeKK9ppb9PE9RGzoGc3hioagGh5iooPrkDt3V9q8veCXrccesiroZAyuRj3AfedUUcc1qGZ5XHpWFK19xaw",
  "key18": "SpLm26yfAE1qCR4sH6fCbtSt9J73Pv8ipVVJxGDpx3ooULswivHtLX6mg9ULKnJr2XTHgqdb4msUT5NpUF4g3Ee",
  "key19": "4mekZ41ANcjS5deCpJ5od1qKjytYMQPZpGk2QLJ47CVQzu9fZUHADGjsef1h5VKa3pcrxjCyhcq5d11YCGaTKA3z",
  "key20": "55yKBuPTyMGnUphThEEdDHPPYKzU6o1hnVt2xW2DM7cQesFDxu7YuyD4pUuWCD85JGDBDmRV9rBP3JRUq15P5bjV",
  "key21": "39oQXL77SfTg1gf4JrGSKnRhikUjCpphJ1SZMyfXzKKV9MHHKmaBPjc8vZFr6yUaykksCa2AEg64vZNPWmWPw7R4",
  "key22": "3A9Ufg7VKu16Qk7hmV7QJB72Tq7CGki2mCVHy3MJwMPernfZ3q2Kw8suB2cPdf7paMLyJbsHTBmiMTMiGYZa5b3L",
  "key23": "3hqtM6uNhYmUe21mNsH1LaLAjuiMra7tQEe2Gie6R7WhMCtknSrk7SV3bTPHcebzwdUeGXZ6VvsDaFCjSz2T35ez",
  "key24": "563e5jHBArokMwdvKmXHUNte7tkjdiHmKcKmKy1oDdphpYoTXUnGHtx1hMFaKckBW2RzerXQyeFWZ69LP2Su7TBv",
  "key25": "2NSfpu96Esu37VkYHmiskTtwfFeCKtMzrgVHpiiCbCYzAwPnNpqoHjsG4rPSDPVa5NDftqt3ojxzXVMnCb4beEYH",
  "key26": "5iyRPT9243uJeYmNnb4HuMPgsd8jonsaWGAsyRUMP3FdbAaBzcqne3UXG8Hf7GKJCCp5aPu3e2FZe6snGw61hqLA",
  "key27": "eDG8BXU3stPknmTYNwvyzd34G8PHQKuTCGEQggrRbfJLGQmbcgpJh1vitsyx3AxERiQwt7emrWMhqAU4WXv3nFV",
  "key28": "423wLYeiDiY8wLdo1YmmUv98ggc35RutmVrvtzDw1TD18NEdbiQFC93FHQxgbyyx9E6T9wDubh6jRa9wHWqJbscN",
  "key29": "2Jt9k15kzTshzMqWyFFrSnmkQ3ebN83FWuJWPmVh3aFAUgRR281tCvyPSp3rz18WGzh2MTyrnGsqeBTXMSu9WRox",
  "key30": "jndB69B7q4hRt9nqxC8Kadx3hZ811Kbyn6oA2gkdg6nkBAsbsuF6foxcFpHgchXBeeBuj2gfv6zsbWhCJeqS8NH",
  "key31": "2Xboh871Qnbmf7YouEHre91LbMDp2jLnUumRDcvhk4tSEBsooDKDsiUYBSzWQ5RMwknupR9vePbsLQrNNxGQnA2g",
  "key32": "5LaRSPhTJqxjk1NQ96rm5YibbkYyfuHenCwdjsi2iVzdy8w3UFryfpFmEBjuo7o9Phu9AbwJqWVzDiEmpAxxn7Ds",
  "key33": "F7rDGhPGDyVoZdv7TmdJG2i6hw8dez6EiC2kVK4fsxZ4WPLXN1WToG5gRkQijSf8EE7wRp1mRbUrLZw4yK5Mrup",
  "key34": "2XD5xaD1dixD3tjDpC1K5UEp5eRbBNZcqaqdEZkFrsrsAStSpEPW4fwctpvp27WnC6YacjQJHzrJRj8bscyKPkfo",
  "key35": "vVaj86viHBcAUbNtuXznhHDoTbDVyDt3D98xnrGwsbjV4UsuxX5LGVmeHxeYBwLs1xbe7ATVLCrNHU4VkEkLdHv",
  "key36": "3ft5Rn1Nb6ZRwx1yJk3y6oX4uyHG3f23RadX57MLqUiBQ9Dkmeb2eZA3w5qBTnG4UBkYMmiVZGoHCp9vsSbodGuZ",
  "key37": "4wy3MuqWQoALDcpWWDBaB5JXZ6LrSCsweKz4FnMMmrK3oLrLHcfRk1rJDWBhRDuDHucKt5RiQGweAFzSB3Tmotzf",
  "key38": "gfHRToHeSLAM6ipK5Ytb9vg7jhPAUa1ZBWQez89v3zk85hSDvhaXHkzGzRuqkPBJktzUw2rtGEztwnDrVLAw5Xm",
  "key39": "4Fq5VJNY1ofDWHVWGHYUpQzEZjy6RPu7JvYzDUHiELxxzdk8WrsEkcbrTkYngRxohok5dHovzZ87s3MPxiammY2f"
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
