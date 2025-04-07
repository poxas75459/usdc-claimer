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
    "5v8QTec6LVSWm845KxtumoPezpwpXQhCJoMwsDxYvAvYyUhT89SRKcA5SM4tVAJ5xUxZqZ2uFLXRWufahsb3zwCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MtUF81BxroW1hKk3Bbdi6Egu1bFwsFrh6n72K9imozdVS2phkqnY5yT2BDXVV5sQ34TANPSFYh9UKtsyMzqDtuX",
  "key1": "2qJT3F5gMYQdDNjnzGy7L1NUHr4BDWox7arFXhLVDh1tATiZLBVcjeWaxdh79MprY9TLq64we86DLcjhywhm8LA2",
  "key2": "2X1uu7dzDSAbdCgy6ZhRTuCsQafiGLs1sYqaP1vPrn8TqQEwG4BfC9bVEtzyd82btMMKxD2KKeW9zD9KtfqhZ3iM",
  "key3": "srJzn1txjMZmzL4RzshTM39Gc45CV8jgvsz9SGkQnPek7N2GYCPQC3Qi4Ee9BioLLLCMK1QJ6F1jXvy4kQGKBaj",
  "key4": "Zjdamjq5Zm3WCA9VcKh6VDwYHLaz9TfhWgPx2Fi4Z6T6o5Att3P3rKNBdLrNyBGKR3r3BVnBxN6mjcFHwVH4yzP",
  "key5": "5dhMd16fKiPanuVorF7XMuNjuYNdupcbSBm1ur2Ybcaxu1NewcqcQqLVtYaEpmhTi5RAM3Fzvg83MSRysyKqxVP3",
  "key6": "4LpXrexvHCusmqWkVygyJx65xBnC8vnGeKxEujCYULKYPTX8ETJCqs2o9NYcHLfS972zsBXMqtov9WJTynKP34oT",
  "key7": "4B1H4Rat47zufGpY1pz6NfEApPQrWYbww1iGrmunVQ3tey3pEiPqkBvEm7JydmmbHkS3gLJhi7HRzLfpqHDrjkEp",
  "key8": "5JhKpRNabmRPSSw5eV7fJvHGYdJSH2m7vjNMpVNSiEU9gF6VhqZSHu3cV3Numv5SpHMhdK3ETtpiH4c9UjTvVE8p",
  "key9": "3sTZMxJgKJh7tXgMH559Yy8C4AE9TMXpQwozkmEQTRAzQTDmpjBz41XDZKvmkbtZA9fCxG4yKrhPq1L4hcypkpqd",
  "key10": "3LyNuPRu8BJ8PTXEQAsRQ5AUYcyp7oTbkuQyHZ323uNK49rmw2YGWdgnCtTVVfiwahWNmtY1UzhHY2WDoZBsyxp6",
  "key11": "2hxXy7FaEcmBiG45PHGfFoZSAzJZzjN9g98UZPAxn9gqqNtQUkft2U6dCov9shMk6iYxveiRxrfCbFaVZDiJdtA1",
  "key12": "4BucDKGckJzKkgJqszfRnPinwfEkfeWvnBMaxTNptHsok7BBhURqRSqEfWZSDCb2WPRyaHB1U7nLAFF9LGV5D6rs",
  "key13": "3u6ewxV9ikSWvzhAa9Sgotndp1xVjdjEgaAyR9shxVs7xg3Q1uosnTpWUm7EjGHFi7vqkxkSWhAg6wQ94Xy3FdYV",
  "key14": "4W22tehqjSEZF5jXbKnqYKNmFnDeh4qwxpPYUxCDxuRD1Epc5sdMiGatmDpCpCdcjrkXRYnH4gGaENty8EVjPhin",
  "key15": "pr8Xdj3cKivVYqnBige1BkBVfBbBET5xUbJEjtFYKwdW8eE7xUwJaCQQ1Vi7QHUwPzbmHXk6JdtU1QMBk7cACkz",
  "key16": "VhSN1NRrMgFJFHzWmsydd1kamcpUQ8a8UtMQH9F9Ru945jVvVkLyNrMLsTZNG8NVANVRCQFAauoa3Uq4NoAxK7X",
  "key17": "3KiSrSuWU6eYdWLVFcTZEvifstEwoFUXa8YRheXrgHX1F2cmzyhWaxoVziy3RioB9DpSZrnukNMs2qZ7sfF3qEbh",
  "key18": "wwmk6i1eaDRds49JGVFxHg9HKrULvXH3pkHpcjwF779NgHD5syLJHXcS34WKjuRQ1NnAc8EWg51TSVWepR4krN6",
  "key19": "5Pbc7DwnmgWTWL722g3gLzLPiCiLycT1yAaMxuB7RoMvsEP8D5coZTRQgBus4MhFWmwQ72qD3DGvCfovC2PNM4e8",
  "key20": "3DJUWh5W9PzvwymwtVaMzzzJpnsvVKTpxGgNCAbxbMPahNRPWRfRpBvBx9JW584HyikeogtK2Xf2UggpvMCLJx3e",
  "key21": "5oEm8mMYQGKQLisLP52d14otkemkYBFzzt44kAKd91fHdRRTDDfzcymfMsdVqdFT9YsUkPV2Y5RdkkhQBYg1aiK1",
  "key22": "423Hta7U1wM39JiCRYunMzYAouQjgPhTfq8pHMrJqGAjwEoqYrmozu5JxgkVhkCsVE8tyYfhNd1VpWZjz4dwqy4Z",
  "key23": "5nrekpk8geo7HXSrAhcvv3H5oXythuc4VGLXkW7Sk32qmgERcW1LmNkoZQeJ7jQtB7XveBdm2qAYqZ5dRFg91cvk",
  "key24": "2GijBRAJKYAx3J9epvr5vN2EtEx2cfhqkx52hhtRVRdAH5Si8wdaARA6MYoJqSCtQXf5SC16BrMzaBSHEp31XWDj",
  "key25": "4nhMp3YSCsgCoGtLGaYLsPfTuHeXNYp2ow2uCJi26z6F7AtRxmTkuNHFLzCZvURyuZdD84F5ycvPmS4bLtZN8jqS",
  "key26": "4bnWYjU2a9SgzKU77BUGcnLdWCwvbtch7TngMF8BbEguw1CRyRbRJUmpaFZCSfSiRzFmoi9c7LBHmdot2UVXNqjQ",
  "key27": "5XJQ8vELYi8XjWGpiwaTNKhvuMh7hqjPmez1XbefYV2BS1vicdt1TsJVYdpuuJnz1xEBzRDb8kDFEbLgQ8wxF8jD",
  "key28": "4ppTc896ChZGyy81JGS1WPDw6CRfynJugveCU3mKe7GrFfNhdhDfSsEurpbyzKF5GfUt9tDjmxAZgXdQkQLprMBb",
  "key29": "JQWEDtZMVPvJF43UKYzAdaYqwW1NkKwox5LuMoSTkSQuQCk8fLhxK9ihzXfM4RcMTAoR71nv1pL954nekXYkC5c",
  "key30": "UHeth9Y9gX9E7jCEh7WRFsrRwC5UHi2kCsrBGnkps2AVVrSjuFsM5DPbrqNycTiqNKCwQMduY3eMude27aBYbwT",
  "key31": "iHq4AXVySV7qygVNFTynEA9GHzuTXu8Rjo7JSbP1pR48xfD9gvfEWoUAxPN7tncrPZfaP5HhjJEqhDBUZLbMdiW",
  "key32": "Ghn9k9FEkw8m87ituZi8UCfCNNLTF1Nr9VHiSkhfa395TcUMpmPdaLXjbqcdfqo7bqwxN5qzNeGZ25Z9uHJxmQz",
  "key33": "3RJ4joSLCKH2XmnECMqgRRYgqfKPA38c4eAeinq6WU81aeqDG5Cfg6iQyDgcy17yPKpVuhpJ1mLXqwSgg6TqAADD",
  "key34": "3xtBhV2tpzLGoNH49ZMSyPrSWJVPZ9LEYG5Aq2Jpo1xPMa9DftrzQHcu4e6QEVWzfURWXfHBQv6xpun3mLYe6aae",
  "key35": "5tS7mfW86J67wWkB1g1P4Xbkpgrdbyrj3SXkMCQGJ7hvzgDx3GYYJpvrrBi1RHjuZoqq5TctWQyyZwm1x4eqaNT6",
  "key36": "4wSnFLUjJSYXJrF62PoDwNS4R8rgMLNMGfQpoevxZohdR2xvURGJpJjMvVtKCB9i9bMVKJR5Vk7ie7FQz4ARxtGu",
  "key37": "kTCm2rGc54BCH5DnYdgxr4qt4EyxU1fMFPRM5xko7Su8iCXGsJNkwuJLfJsn6BEjJ5XpWCAgsNWJ7wmACZFfoVk",
  "key38": "4gRR7kHcG858UXpAp5YZxSdUQxLAeaFrvqZywcSkhspH6SuXFjTNRdLshyjxLVjPx8rdfeAyqmKpDqTC3Ah24ZVC",
  "key39": "24VFxLiMGotgBLaAtfyK1obWNp5xV4sBJuj8SWUZPzKDo5XkbKLkRac7trM1h6DxWkyB9RAj8GZh65qmNUtopqyf",
  "key40": "3Ab6UHePcbwek6rKJpMtf6Fst1HkTNFC5WqpHrMpfnH1AvETHhLnwAyC4ETck9dn5guXtV8hyVLHf2hhup2W3U4s",
  "key41": "61Yce4k1tYryvHcjZ5xQvKkwQiNkaRbkUKYpLRbyqcomshaApuycgA9P4iU7X21CmhB174C1GzEGhGbT9ae4q5Gd",
  "key42": "5YzedprWXXRBCFs2Myy8kgXKqPWx4w1ze5RU9HDJDSXdP6YNfFTzjKqoPaoWsFhuvHq7FYLosVUnFSHVYfJUnEg8",
  "key43": "61osQXA8S61BYRtzqejDfgLz4HUiHyKxmdT2hSJPNaTuZqVBpQm64TihdDhpvzxpy3TQKhAFxEP1q7sRr41VQBP",
  "key44": "23fFMsR91ZQ3e1MrNoRAYVPXdQtS5muuLparZw1p9n3BWARnvV77jsfj2seRhMJqDZ4qFs3PJcyrBHSCYB4zosan",
  "key45": "4Wj1DndSZigJjA16XRtesWw6XVmbnYtJEh17SP12ArhdrnY8LLoTpiqJco7JjjEBVJiHHGkNA8oW8AyAeS1dBWDF",
  "key46": "4WhCSPu9HxXmQ5pYL6wux32uCTKXs1rJ2SQcwfnfE2MLFGiKnABkiVsBbgtJ3Ypmzuf4fY246Y4VxJEfn4UMaYAp",
  "key47": "3XKKesjKBvmSHBkaCL9Lre5U8fbDxgeAW8YXpVdNbkjK69QatE3q59u9Mgisjts5xS7Ahd5XUyY5SNqrovo2J7DU",
  "key48": "5aah8RjWp4CAioSvpCtquHnKhzv2wXFvnqMs5qzJUjgU5M9qmKWNH3WMUFyRtgtDqcwgtTtKHGmZqN5v1gn66eBC"
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
