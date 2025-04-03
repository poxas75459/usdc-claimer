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
    "622q7nMtvqMvHfyHQbWzvYMQc15aAWrF1JuViJLWUNCrehRzBaYitFWAAzBnr6pBA13UBrgcL5yfaeFYBSAsaDbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nzdzzf97PPV5P83GYGApBpd6HgPyvxid9tLCFR7ysoD4NQitrMWZF16DN8SrhKWadJBtHZdqjZbPXNf36yHcXj7",
  "key1": "3KSu7m4EWhkRnyh3EhrAjVQNw7L5x4kLyFoHdDeSuK4G5uqywuakh5XkosNRdhHU8EK9zs6r1WPHNeCYnYTKFDff",
  "key2": "2ShFD76QYn9s6RGRc2JDdUzS4pXbSV3uvfr1cg4U6cyLojgcab6k1nxEMiXuAQG3W8BrNtQYAS2Gp8QwYyjLQZMp",
  "key3": "29MFjzpieYoiJBNpZVGUZ6ExwbEXAaUcRFjdnJdJUwx12LH9avr3Szp8Vf8i3wZyRQtuoAGqKgxtqqQSpXrsAYMC",
  "key4": "3gUHaeYeutWzpokqNLeKvyDkUK7qUEqufCYGGZNm3vfNP799tviUjnSgFWN5uiRya21vCCCMPh5gUQWe9z2adqmE",
  "key5": "3ELTSPBNuiJoidGFYmY1PDf1RVJFNDKRCVENSWPzBvQ7UWjTWyshExkhVbuG3WRezwLnhccFYta7XL3xHUwbqb8s",
  "key6": "3UoUiFzUggNwq4FN3P22uUe1v3Va3yUckadLSVvhbAQFFthoWe6qAFeAedocGdmNfX2CvJC1BHvDrJUZN5LzFS1E",
  "key7": "3EHP4B9h6WPWfn9eEw4WUs4TZ3AgLsTbTUaAr1kastNwNLpLEKJXz9vYAPumKyvisQV4v6iejjFyx6vJjTPiHoc5",
  "key8": "4NGC8NhN6MJPf1gPRYxMsa5bHSwnsF6y5fMtJsHFX373Rv2xHQ4dc4hgUAiVuf8wRD3a12jUn6M7Bvf3qn69iZmG",
  "key9": "2RG9umwQYDfZchdLQwqabTi18r2LBJCpCSsFV8kcrjVYVZj4CKGNScBP3FeaMJHGsJ8rVNZBgSQpxmbCRbS75Jjn",
  "key10": "5uUCAnFk1S5Hc9wGfoX84zinXraHNVSvDMu6pYXSuBUZQyvvfHyPZV3miGe8PTc9oTgHZGuoUdcBegBBMExfCZri",
  "key11": "53AWXDYPVNUwCEXFyTaDuwAbh9siNT6akhs9AHMAGzd4GhnBnmDajvyTGi6xdr7jLCVtBzjCspBeACboBKKq8siq",
  "key12": "4udUyPjHZL6phdt5Gs8Jk5KeF98TqCTcbCuuJbLyZAssQhC11wc8W1YsFE5jGhvhgVGCu8pHKxV8emqUTYnJKUtC",
  "key13": "4JVX7kLpdnaBGcV9Vtff5AtbW2xAN7Rkr9J8dnaCJ2pbFtyADX29x7TUWUtBC9bUWm8pYf6J8o5TzNcqB536Fo4d",
  "key14": "yZquKkJPp5fBP3h2WEH3Zf9H2wkx6TWoTbJsPawDMbmHJ9ByyBJrE8DRUhmKhonZPSRBdYeojymtP9JTfYot8Xv",
  "key15": "2uZWdqWuoxzCea7UakfAguhXn23dQz3ds9wQQEKNuKq1sr1ZNfeUpTVwtMqBXFpTWBnfZVpPj2EPt7bKkPcVfAGn",
  "key16": "2RteWMKrigCAh9iNFshqyU17eNjkREqSajHQts6UzcPbDNPPVyGqZLrRgFWkcdWcHXjGgdHiP34YUjm7uaMXPuSh",
  "key17": "391B62fxeKJiZtSBCecTRZ3DXRPgFqKQUp8ygQ21ffe6C7NiTyo6kewBhSRgifF67HuQSDnSw3Zjgjnm6RE3oX9Y",
  "key18": "5nbdWmNfywoVq9eR8GfbYD2U2QeCGNTHqudm8aAvF1qXYtdbZXaBGjNugaDic3LmiMvMKxBeHfZVYY2B1ekXg8X1",
  "key19": "2to3iqKorexC1H7emjUMjY5tegekreg1dsp4wPRzTaYAR7j9ZyYL3SCsRqFTXExyF7nG33NA5Q5dXSK5t5USKhL2",
  "key20": "3hciSVVFVu8RejZM4cPLz4SJ5tE4bpsttYTKuvUjseV8XGj82dskTYj4EErjWCRiNpSYiBdALDPXJ7iRpGK3w4bF",
  "key21": "5nXJNHSvzGK3P1WXSUXcNTrQpVvc66hSkrbP4ZsDNg7LH4V3Z4Zaeqfti5L6TWSn6xQtbEriUt7JssosNgF1evfc",
  "key22": "5dPgXjKFM8eHGf5z17puAzuvLDEeaXtKSzoDQBTTTXJKVKHohC7qhtntfBaEbcFbtcfH9L4NMWUmbuTKeLbTiSAd",
  "key23": "2397e6mn48gfiTMuz8ZoefN8GdASbSuHYKLHXzM9XgsZGf5Dmnz7P5wr6sGLrQ7UA7N2eBBpnzcosbhbrUfkY2r9",
  "key24": "3nLhyiK3iT76UzjTBarXi1kuHR7sj59z2gp7qFFtMUVRkurE3AX1TxmVa73avRgKRjAM8YnAJDp7jXJQrjXT8aed",
  "key25": "tjgJPUFKnApfT9JLjQtHa23qpwQiY3v8gimbsKkG8vPwWYjTfm63JoyB4H19fJ3zmRD7rHhus6gyisnJ9vNFG6Q",
  "key26": "2xs9UBWVtETRBpBNaDgJ4BVBB1NMMPgPNsFDWHaXqYDGTGE2GLrkeNnjwwYsoswMir7dU9LPiShcDkAFSxQsTDBv",
  "key27": "veBmN1qp6MZj75HfiZwpgmHt1Xoh5Z7YaZgHSjEkJyMZjFPd7yobkDnUx73T9TNaNo65uY1pmt2z6UFspC2dMPe",
  "key28": "2Ekq1LDMbcU1SznsQ6dKg8GHt9xWyZjNxL8UqTqvh6aVAp5dn6rsDQcwkjhqZsHUDrj7VRYGgcrd2Hr8Xu6hTwJi",
  "key29": "5F3fEkMjJ2CdjYNoGFcFgXRAasRdCi25jkzRdYjAWk1C5No1E8LTUBTCh6761s3PCLzLJBTWiDR2EHB8TfiNYD12",
  "key30": "2vzxGY7GYRcuEZ9RioX3eKo9TF8ZifB7QnfMQTDqm7QVeupyjr8z6Y3p2DNdu1gECrecSmGpEE9HZtDEcjiESoua",
  "key31": "2HjfU4pyFfdKpxs8yMxcgyMUi4ihNrU8wLHvBKfW5N1qRqNwFptzMFDGMpFgUuB4DN5CtF1HAePje1WmYcow5FnD",
  "key32": "5Huj3z8Mok3xzZ3jKv9kXLSSUteaUfs3SiNCcYJh2LR4x6vg7N447DW5MLJQrQLGaNfJajLZpq672D7RRct7Gmgv",
  "key33": "3iFab4mFqG5NAG4AD7Rh7ANsn5g9eTcrxEWeDsLWTJrSQcuab8MU45nh9JvdJ69ohYDNqohaSfWpGkEFehSzq4AD",
  "key34": "2ePmSRjtm5Bnrpjx3W9wDH9SQTJwXrLexMcTyVfRrw18UfEsRjcBbzLF2QASyMLuH3gd3PmdnzjS4NH6XTaJ4Hcy",
  "key35": "2nT2wamyNyHpMRhnQdVDcb89kUY74uKCi36uo2e93GMNNoCcihPX6S77e6B4kZm9h1pfek2i2BXzSbchPEuj7hj8",
  "key36": "5WWismHWhBWLTM9ZDVKac2u8DBgzTipTgUAWmg9QfvGQWBCURmn9LScwL2PULRQQCH3pwZ5KTABT6yBXETkS9WN9",
  "key37": "44qriDdodBQ86ZbknVTLNnKqQQUbuQNgJYhnD6yFWCp9mzr68EeYoDji7VjD4fHzZnqLasNdAiCSiMfkMLkApXxE"
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
