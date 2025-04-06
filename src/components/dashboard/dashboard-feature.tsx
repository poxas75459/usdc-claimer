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
    "5PSXiLMpNmbAtG3zpeGgdEdhqHn5ZXstGXcaivpHzSNMwYXjaDDGL5yndpXphmfnmLpxA6n5heakQ2HxRDBsUtmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67BmTpT6NmF6gMzVgXYi89dRahq33gs4REvo4ZJSGZJZYookNA3yLzsWqbRSFVm2vsGhJhERS1DNKPowVv5briP8",
  "key1": "46wMU3KTfP6fJmMpxqLRxJ59Qe56rPWP9wyPikJ9TwU4WjpA8rVigcbcCsqo8CQ4Xe9AUQtjH52zLjDR9jHjUKCf",
  "key2": "3XQN7Jo1XMiuozLcxRWFhAekhBWS2FyDf8qDMoxAjbzifuTqdec2icaVnf4Yng4UvjMVQtM12gg3DurdbtLg125E",
  "key3": "gHcwfuDypTgTkUY4XswnNUYfCuX9qYVmPvk2FM6gmkVbSq4VPvPwqe8RyMxBkjm46axo4BH6pMsPEp9cMmDwpTp",
  "key4": "5GRhabPrYm5A8fgq8a4SbKvYDVj1Da3puNrGfhH3fWvgxd6ftH7Rxn2AWE5xyQFHnpbw5PsMv7zZsqrSwEwXv6uV",
  "key5": "UUdhZu2vvqzKxfJQG7h4pb2BiJrWX99TSqs5gDSBP53imHSFGRwfFVApBzjuZKUhreM7fKzjpk6DcsBtoGZjXhZ",
  "key6": "2SCutR7Ar4NPa3Q3UPaQT49gmQUkjCpF6BnvzThh26dC3fwgyJxeFNLNEJY31W2hraG1HoC7JW2ziDoEHj5fHSk6",
  "key7": "QRXerKbTuNJP9f1i9YCEQfcCdmrv5oau8xu5pVSUVQFW6JchVESSxp625nSVrGRbZGP37sPT7aVbuEtZvWTPm3k",
  "key8": "44psFNiZwmtCHTrin7z8h9E9eNBKsg8TTviv1VLrRGX1PHPpwYuey3xuNbuzkv9fMLFNb7tKN2vLDS8CYpeGG89X",
  "key9": "4QNdryZ58zuaaggzp153DsB9qfF2rTvhzDmv13iDJAQcJtydiSyMJy19Td8D4hvB8YyDgB8EojyWNZJ2zgjaGdwu",
  "key10": "Z2mBDNSZEs7C7N79JEmUtfhkqujZUsHE4kMBY9jugAAHznMHXbxtMw3QEBssjiJmPuRG9rVg2p2HgaYhhxnTM5Y",
  "key11": "67Z4mgJWdib91z7E8dLrkrbaQQrKFkxpFgq2TjWhmdfjeQtC4Jv3yKqCakzPgiTiYemRrn6yeMaq2AqqzcvVLrBF",
  "key12": "2ZF9difLkzP95YZJZS7Rug5S4dRGGhFKkoH5imDs5xNFm1YqigWRAFQtDYWUBx23NFTumc68PBDFaxKUsmsHvqqW",
  "key13": "4m6LyzwRTJqokGXRHwFHudvNLw9qnaepLXsvnFRS1QZNLzqf4Roo3jCfETjpRdCm1Auu82j1ESdi935QgdUKpZUg",
  "key14": "5NarTtRKmAZyuJAciEiNNEW8M2x4ZYcn9DMzmfouoH4uhWuBf1aAAxBdW9ENmAgNHm114fnhmovXsdaSaGFDgmUG",
  "key15": "3E1fJ54TogRXBNnLRhP5kG5Gf4LNrVQCvtjUDDmXr4Yhw9Dhp4ABjnTQZFrPbBtRqLtydMypsWyxFgw3XnxC9vpc",
  "key16": "2ytr8V26oNfLvt3bU2jVKXWnTPBWxkhmEKDXNza733WPKWEmbfKTFTEMr57SCdeR4FWzwkxumpd7sxxzbxQ2oRfu",
  "key17": "ditxDmEeveS3dXh4rQBA4zXht2p1wBm3CCvoMp1k759QD6w1zRTQ3tTPp25j6iqBQTBYZsU9wPVcKDqNbQkBCrE",
  "key18": "SczRsGBcpQqHn5ARHdtQSLfnYM7Y4Zhqre3sKPRQ3qrbKteVKCgfwXdk56bUN4eaKPWvvo4KhBCA2aZ99mNL5Jx",
  "key19": "QXaeYo2CXmXM9FrjN88J1i6J41xTVa1Q9PwSpuda9YAxvSNmKA5BFomhrxfgMk7DjTJzDaQ4dPT9Nso1wKL9bB3",
  "key20": "5uESo1sJzYDiWxgQKQmwzyu2eFtG6yi2sz5Rait6BdpDRn79R4hM28T5hPsbcfZ1P8T9U9YKcSHaJiuyS1M1LcPH",
  "key21": "2YVbh833BCNxKU1rTnH7oVGHfYudmswakJNrxoWGRviiK4RGRQvnm6ahhroYegSDfDhXTqCZjmN6E8wScbLbgyEy",
  "key22": "53tb7PzEDxQsiVg6XD7fn2WQF8kz31A8Ft7LogmA42M586hLaQa8Cq3Gs6iGGYctpxq3xhXou7kBHitjVdsoThV3",
  "key23": "5RV97t8NCeXkn3wYTbKY6RPXNw42MKMX4yQKWmpuGwNmNP7hodphy8B1G6EvtFpDzupFixs18XMUBi5VRgfstHCK",
  "key24": "5HdasGCgQKYUhePjyYYY33dUGh1o9nqU8kd17DJpG3hnGwcbYicZ1AogKhnpt2y3CJsydXWdQZBuetm8wKbzTYiQ",
  "key25": "5mk18jza99p97HV2g8fUZrPiKygvSU3yCjGuAujFQgJhMQvqwQCsKhnwvAryD1Aick6gK3mEqrG3RJZTKip3maEV",
  "key26": "5E8tQr4DPLM5VwzMWsvgKoo3LFT1ANoE6CVv5k1iBoyweQpKh13BCsPWqj8zZPkAmaKwwFmqHjoE5zRArmn9nDMW",
  "key27": "4HWCUoHU5pJAF4t5YV5QD4zXCkeTcBEUZhsma6zN4AkXv8mFYkfgLLwGapK4NGMn25mmjr8ESzBQS9viTTGwFRwP",
  "key28": "5EN3fkcZUe2erQWRgeX1kY9YeA2bXpGFqEQwKH9ZJMqnwX5axQaG4xQ8KbbAXLrRN1W83KJYa6khFWmrbasvfG3E",
  "key29": "4DP9kWmrQSUt8Svrg45p4B5ry8KnFCmNRJ1NxbuToZGph1mkq66cwjxHJFfZnqdM2JuppTHFhcKumDCsA7V8X6x9",
  "key30": "5FuwSRFf47qfd5r6LKV5PsoX9TYhM95FhbdF6qj52CziMcSgMkgfy2THx31kVD1EHfXAY3aU7AjURd86J2W2apHJ",
  "key31": "qprLcJppKRqEjc3Rayf5JgEgkRcEVjbQx6B6ATeFY4QSou6fggzKpHatbBmTUbHjJBFCSsE3wSYU3m7cCdmtyUy",
  "key32": "3nLJkBFjnuFUsNTtrLZ1hPNd6ASHvGHsPvcpLgdrJcSnFBg7zbMSxj2hVUJ6kvGgANQpVYVqYBhpHvba3EEwpb2X",
  "key33": "4yAsMTVKPSqQYuTzihe66tEgHQarrqebg8jLwHcEd5mUThYhaaC4212bruKXAj34jU3dMjQRDEcccUs3Xz3ShDqN",
  "key34": "2sFNzG5mpZa3HDUrPx5fzuefcVsE3arN39YGz6jK8ptMnZcg6dEquH4i6RhkycRcRf4VwX1KPXM58NbhSYvpzoWk",
  "key35": "2AGZyUEZ93nohG3kYDeFF2eKtWxs9fqM4HrAQMsnpCX92SEQbun4NYyjJnbuYwmJvXMnmGZLcWdwcs8DRGebDpUv",
  "key36": "EFMgiuLnLJ5mP7bu9qErphuoR5ddGKp2oKGDQ4EqECLuyLU2YCSBVP3ArhADBih8enxt5J7Z6sPHtiAXHQPfUPC",
  "key37": "56rP8thtaR1r3TaiT88tatpWL22fE89pcmcwUHuujomoqFmZBETechc73h5hp2PpQmPYe5J8dq7NFBYijMpngjBb",
  "key38": "3J9LmVL9Yjo9AcNL3vv9sYijeL5EqrbQ1veGtj4du5Pem2zV8V6goEUaaqxA7NMfPKmc27CorUVnwkoPxybMN7Vy",
  "key39": "4F3aemDWra7TQ9XV4HpSrKVgg2n5Q6QkAcG2ieYdoUcPxjktj3ERUoWMhTR1stE2iJFusddFZ1uWkJEEDc58jrDy",
  "key40": "49Wf81DPYfUTG39Uq1JCDshkwaNpntGmMTaiEYhM5bgiyJ6F42bXWcRx5k6o5K8hZpUktg6uizox9oKc33y64XdV",
  "key41": "5yUzFrGcKysYDZczamdo2nVvoPd1pwd9s54Y8oNXjVnNeyt76foU9ULm8cdqLKqM9ZPsWRDa2QVb6GkYv3C5HpKQ",
  "key42": "iEKRvPnirPA2HAZnAVuquuztG8rvxtW2X4xjkFyFEpMxyGVsTvCAzFNFFL3uLqCgrNtXY3sU2GhydegSe4qvzMy"
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
