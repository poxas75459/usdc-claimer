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
    "2GAJ6U3X9FXQyVpE8BZoAbDAoRGedknaeoTKAhttKC75ZiU45rTvSu21Cea8cgjzk9AZzDCVoL32NrbQpMBZaUNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rUxagCxBSTurhYXxDR3Dy1MxcgTXYchrozT9HjN1BjG1PR8Mpi51qz4htHY5mYTUZcLwh4vLXME71tonPKJQY3j",
  "key1": "29J5kkYMtzgSA4FwPG2S8hjBw2zveDT9H2QU1Uwd8MXkCWb9k9txkb8h4DUe32hxX7Eu4Dmi59KZh6FAMJoZJpDU",
  "key2": "8YRR6z9AKVdZatpTy6SpmEwU4zax7xHnYzFBvXjb98LYqmWrJUpi7DbA62JjePrgio78KwqtS9yodCJKKgy7DAV",
  "key3": "5TRyTzyV6Pp2JwRh37ZfycgV4eAsowWettdbxQwyF43GuVPJxjTGiiXLKUQ4fu3SbotNM6p8TerAL3Zrg4REdXXK",
  "key4": "3XprGGbQ9fuBKKMRYGMJofUst6YFfiHNJHjd24JoEQabWNVKQePa5Nh9wn9YH33M1ukBzFkRfnHeMUxrpcMz6ZYD",
  "key5": "2uFoqQBNhZ6CPaUCuBKdggwrNhHwtoHETC6YWpHbcM8AN6oDKrhz23Y3DdCG2TLT7MzJ8rYh5AE8Sw8KRAbQjzPs",
  "key6": "3sTAiiRt2sCVC3tXWatiBULJ84PDKhunmxe2dxzPE6LSzuFUoEJhzwefyxQX5e5Ph1HMNpiGZNBNUk4ry4XfmLYM",
  "key7": "2yGWmTiri2HHa3HqGf6DvbrSzHXwL3CQBuQEhoLHY1rJfaPEAeqqFCWSegkyvXtKF3fKrR2qoGqXHJrdqXsd9foY",
  "key8": "ppJ6bSFuMd7kJsd4qovpMFzp2gWFxDffyDnXt2aUsmXqu4JpUkHtFVYu1sQmrEPFX6yv49CC1zzAEfLaiuxE88Q",
  "key9": "4AWC6q46k9gvaLtK6iPMbX5hXYZfsQwQFPMbegWzaS98AxeLVEfr85LvNst8UyBpqkKLdQP6ZeFerqqqcghM24Ky",
  "key10": "2ds3wPYN4VG5t6rAQbE9tzPJrVQG4HB1FwWQmbgPRBCBwzAemN3jrQYhngXGASmPGgkMUmDT5291qQnzNaiFV3sm",
  "key11": "2kj5D4784UiQ7CXAuDfsZJbnaUd3SP6fUFFHFzeVVh71PS54DaKFpn6KcwRk8MBjxYVUDzAgB9Ldy3in9tsSpL8s",
  "key12": "23TuQi4EHw65CvYsCosQGNcphRsuPxrztpcsipEa5rktjPbyMAYgRTLt4FFYRXCLr3RsRk5Qz5Ac6d49RZN1MEKt",
  "key13": "3iwhBEjtUwsNsdjbcTc9iQ4Xuo5vrbSqa43YuixcTKCS2MHBogqb7f9bPMXnjrsstd5HaqprByTxjFSLxkGgKwss",
  "key14": "2v8VchejGWrP9Jf3qCT2ZXxFHLajhKg4i9uDQgRhM3wqT4p6qNkJTi3oKEKcseYNjLpxe3F8WFkBGmvPrdghT4SQ",
  "key15": "44mfyDxDHhf1tDVC5KUpuXRFsSzqXAWAg7Hf45p2nG3xQHdmSEu8aHLcgHSYDBcHhmD8MvVNRFwDRWhWNPRUnetB",
  "key16": "2czAReiMy7MNv72uj5Hzx2tofFrofT6xJUv48cjUJPskNLmTFZRveLL4Pn8JGq7BJD9HCxuXFQaF9JcnDYzsEyyt",
  "key17": "4E867yH3saTDmeYQzwsQ4987shfpzob2NwrgAxmtym7PY7qovfS1wzNimU13kCE4masLLUqLfHkoECYDTc2gGc5e",
  "key18": "zcbtzJVEFv8FgJKaDE5TKiZ6qYG3QyqT1WeCPs7YHCCG39Rt4meEgYFuGScaKKpaojuPmP8MUUJiwgjh7cVtUTj",
  "key19": "5fg8MJXPa1JGzVvx18Pxrx6eywJ9j896GnmqCXVX6oKynCFRG8eSfNkYydrshAhV2sZX5jDRynx85i9Tp8hwtwSt",
  "key20": "42mMNcPThTatdPnLtqH68mw3ERCWS5q9CJt27ecywtht2yzaDGVNmGjQ34nE7UmuovkqmjWTaYVvBoWAYJ6Jy8no",
  "key21": "2djcSciFyeMKAQaKQN1AEBaGJFBEpENbUnuXRScWHmmU4PAeW2vJA7qp8AobX3U6PeCFYenQzW4FQFa7GCiTFSNe",
  "key22": "5ucJ8QqZHHhrK61qegwCRRYyj2U9TryShGtwSafYE98DrFMLuByam9fHDDvS4iWnNyfpkH4NbD5btAM64qCv84if",
  "key23": "eeNYgS36KMmTmQz2gchZQB82DmB1UkNeHMLt2QrZ7hSHCwPnKh3M5c7psgx3TxSuEHRycBKq2jJne3ZM8ZtMWuQ",
  "key24": "629iKdXFfaFJp4zDEZuGeG3LnFc2yU5fmRyJ2nkf6DNXrfxZgqvg6KBCLagXfF5oVwbt1ovw4r6BVELXiofrVXKQ",
  "key25": "4EpvWNrXJqWpU58pB4ZMFHW4rwqA5771tgR9CBe7W9YyvfRfP4aquxwmpsuwb4GK2sZ94ktRmFxpN7iBofh8mVYc",
  "key26": "4oup8Z2KQ4n3qAmon1tTvVW1MV332rakZQQ91KUz6zEt8ujrpb2j6cR19gsFNHHHSSB5NxNHqy7hxKrukexF69WL",
  "key27": "5tDVz3yFTCM42M1Kuq8nMh8gUFX1yBLXPEHRNs3s6WjEpf1n7kwFNwf7NecZHrqPinL5PvSwPA3LtfCJzdRTCpY9",
  "key28": "3QFaxaBcHEYZsyDnKUCJ3Yx5xGXaL9oPA32n6mWUdSTFFxf2nxr5miCzzHEV2TKRqAuwr7E6KnARMoiN9oSU2zfD",
  "key29": "56bnDgdJ9oC48LNciXCEYbdiKZvT8vfkn2R1TNnEB7UadKY1yRquEAnqxLSm4kMrsodJL4TgkwLBaENpxMn5QHNo",
  "key30": "54M3b97CxnhpSUCmQuvXetcDKokgHEyJtecCUmGqcmNzqPZA7pQKGiB2MVtV4RnK9T36B9ZDVuz5FzxLP3PKKWrD",
  "key31": "aeS8iay1MzujcEerRCDPKraPHJRgAwek4UxqZmf7Xzb7h4WLPMXtzTBeBLk6pMiMQkohDmX5dozG2kFqUf4SBq4",
  "key32": "2mv3J5KwSRFQWXkmcj7d22UVZFSQLwBUXF2m4RaZQPbTDR4j4KpTNbtjepisG6EparcnTAZTz5KwpFD8nRtUWUYE"
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
