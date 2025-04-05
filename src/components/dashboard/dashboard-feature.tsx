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
    "4ApAmrq4u9uWA9FgU7BfcrN1Ju8UaWZsMTJYFjdaMbnV1UMABLvWdfEga39WKd3VC9M75matxMj8dZq16LP4DMS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jLpD1ZbJnrQWyGwCMn78qNqkoAqdUxUfWZaTfcVYthMCJ7cuYtxf3ouZsbeinwiZ6PF3ZmRjXh3Y2wDn7ZFoS91",
  "key1": "3SAi4xty5ytjbyUVXNm8RkRpRbYuVeegqo2sXguesV7nA44TNWJgE2BJepZd5nV5xPThF24nEg9PCfGbdJC62weW",
  "key2": "5JZdSquMm1EMexkmAvDWvrPasmMPpQMBxroemAMJD9ZGcfWu6mMToeTJz8QWXev1EGuPYWM6Dcb98euwcEaHgGwp",
  "key3": "5oW4KJaoCyTN7m4XMd9gM2sQLk8of6uss6ndt8ELnRgyMYZFXN5NVtMrotosRsRMpsZbSCdo4nV6ErHt7trxoovB",
  "key4": "56E5DGLd8cVwyoQuqCR1f3oDMj7QLyBT1Gzc8EUHVjnT1EH2T9kzpvd1puDQaAmsTi5TYKDKcdhAPXnUtVh6u5VM",
  "key5": "5RsLALXe6G71c5B6aR8yp3irftLS5TBXmxLDbqCYVd7iNTzqLVGpBV1PKTwNxi1EzQqFGCX2jgzdQ8ahFisoVcqi",
  "key6": "nN3LMVzxAjuvfjKbWKAjzoNhzHkhXzbZACG59zULoT3ZGjvSgnc22x3rc9WFf7aLXWtYQfbmJwhAK7LpLKAB1X6",
  "key7": "2D3WZmcyCho1Afsn2c53YzLtxmskhmNpHb88N5zZHjVYgPM4PdL2vbfdxiknAQ73bncPdVPZGYgT4H1GtYk2AkqN",
  "key8": "25pPCyAPPN77RC6i7bD7sE4SLHgBaUGfeezsvDSxTpGgqzQVgJU3qpvKrGzBk3GWUjkRDWVvf39EAaRqv8BdVcUJ",
  "key9": "9zTdCeuPyeLzErYgoXqLzgkgzWoEzrbkdSAySJnqWVxiC5LsKQxY8wzr3rYLXjWMxFPtUHnw7QxQT6ikKqgRXSm",
  "key10": "2M322S1JJpr4tJw5QxmuZuKfLhbsbkQi5nFFNcQdV9P7hDUQz6r5kmk1bersAmMiZScnQwfdUruDoW2YcCaLHf7F",
  "key11": "3tTx1Dw6azGtEKXrySGyg9LG8Kd5FdVoeX1SD82rhx5Kg8wLtGmo5wv9TK2RVMDmLA2GWk6qM5aov6HLBuchRKe",
  "key12": "4rHdKdE5DV1aNVgsLdndAyXNnQxbYnWdt9kugNi9aA9b6j2CrkFP8bo25DBAzawUKukcBPGvqujvxCywhRhjtCJF",
  "key13": "5kF3ckeqoFkSDjo1SL8dsE4a9GXjxPv7RNYuonX1D7HoHWVPaearrpii1Y5GHeNms15GkL7twDNftJ6PPerVLC8k",
  "key14": "3asox8Ro54grJi4tmyumnaw3vzE3QxJ7qjY1sAFB9s9p5SvUeSkymovaLX5XHSg5M4w23FwTBuyZDM9DMfPcEA7c",
  "key15": "2L8GBesMact4DTViF1GMjUhoCPCkkPhPiNEj7BANj8RvHpgnbrT7Xd1M6r9HJHfpnmo8btbCKNMhbsoDJ75G11hC",
  "key16": "3YVHEdJjVb7dg4XBirsfiZwHKaJXNTqFKpEKBdyvSzA4ey94TYwxAZEmYmDHiTTxzQHZAtthLe8Nnq7Kus3obZzW",
  "key17": "iKewtGaaXqWDYNAk1bMPAoGoHKY3BoPAiHD5Cj8eaUwa6ATYTagBp3zZ96semdmjNb4U4YhLsLGyqfqBbZSTZsC",
  "key18": "dHz4DaoqjCidYJhM9hEhSEK8KN6r4uUPccqkgHZKXQtDH1BXpcyvVitMbLnxRrQZooUo8tufQakJ4KTPqT4mpZC",
  "key19": "2mfbKiQhNsuvDCnbzEBnp3LpWibk24v7vJFNq5ty8TrsqYkKP2zd3fPoujxhE3EmQBXoPrFn8JGJG9yghWrSxxN1",
  "key20": "9KwcouMhXZXBQTJKgM4QCMFgckhBu313usxQYn2BQLFDK11PJPokQqVkQavxbF8QmATtLFzSwXbyEK5f1mrDXWX",
  "key21": "2hQ3Y8ZTfe9JdM74FmG4gJ8SYvckP1aSVHNvFg6Voy6tqij78rzkvZiNErqB1rAWJLy3jsVQDWtiJnaojT95dZgP",
  "key22": "4ict7LvG74dZqbK7eur6gFbZG1mGyCqvv35FiWynacUtEsY4kkrMP37zasBtRG7fSuCDui4tBQfRT2hxGgLKQTih",
  "key23": "YVoQ3cfFGACGuy6rZBwv1tnFqqGmozxEXq7btLqRFctUvMLSfUvSyXFdaHnCSDk5vDzpQ4hnLAgvSahSfzzvS6C",
  "key24": "3DFj3h28Sp7G6owofVjztPJt1pXJFV3DDV1TNjTTiFxFiJqiDyfmM8taNMx2afBJjKrLE9QpQSS9VVtEYjRgaX4Q",
  "key25": "2aWWcGRdctYZTzQ7XReM25E3U5iBhzXjB5AiDM8oR8K78bRgATihhJqNobEbmDEEKYL4WTAv921sddj4iohMPG5D",
  "key26": "31jQgjTy98jGFNVbfrtt6wMJNfz4KBmuaQVPzEEEBe4efS2sEnzfDmsJfaxzYft3tuiFunyJLKQh8Xka6pMzBwbG",
  "key27": "5K6K9vnEdzrp3RogLhHR9X8DkM49wSbV4EKfRZqA3eyfGFdUso8tadv33gUGgxmwcAM5VLDDcw2NKmNHbdjffDoN",
  "key28": "2p7RuW3S3espB9138NBANjjUAK8N2bkupZXTriCgfAoeeuC1f2SBYSGskcJvaHvk2ycxYWTvmeF1o6FxfqgbULKm",
  "key29": "aGdhKTbBNjEamKdfp5Ui8LH632G6DrLmkV1xRDGamVwkXynDdqdy18CwqUpR8rsbjSbtKjWFi9UYPTYwkGBf3La",
  "key30": "CSFT9bLr49uQ4JvfaKgTK8a38JikYxu9PNYrwc2Dye3uYKNxieN2FM4JCmvRtPuSSwGLK9Y7g3MVhkL2r8f24YC",
  "key31": "wAfkwPvrhe4cCHwadBqhyfCUYkbgcvy5QNQU6zYUQmfPMuVbMdWZ8Y5xwXeegD3D1R77md9qJ8Syh4w9TMCceUX",
  "key32": "4vJkBQho18Kr3mxxGS7BniN9e9roiXCtCpuHXDDam3T7ukQyJ95EYgfYUFa2NktZMV9mGek3KySkguFu7Xe4eizd",
  "key33": "2PRiQdxDeoZDtAnfyWZaWUQq7mTLjuGAK6GNjeRd5bZCipjG1VKfL4TRH66tyCpdrRHb37E94c3nRyshEJbU8hjw",
  "key34": "k2hTh2BHRWKm13wic2ESWTeoGWVBvqRJQMDTchyg8tJHnnTPTz2bJuqHfnCNk1GS7ib5fEZ12qZq6s6WfDiEhG5",
  "key35": "3Wu6bFJ2EhZRcuMFpYsA2oVeaNitLPX9GyNbYMKRAzxSZxASA4AmeqKiExdiAsyddE3Qd9cqJjWKggHbK6EVScP3",
  "key36": "2ZhvjCu6txZzKQCVHgEGYokq7GBugDkczqtxBR47Fc8hwFWfYfxFqFTyfsujeJTFRsZFEVZHDsSuVMPxyX5PEUoC",
  "key37": "Sh5g8FFRp8fzZ4LtmEvzqELgHkLDnuUpp3GfEpmgXKWFhdUtJCp6q2gcKvFwinTAXZKVP3L1Sksx7TM5HWYwcLi",
  "key38": "4ZgGRRv6G5452v8G7oJ7ALoixvscMjcz1k3VyPn2LydfDbnRkFhFmb3ba7YM8juDszdmEKk7vVJy2sQkYpgMuAMe",
  "key39": "WbnMz9NUTi1NHREfnrSEKGhMBSx1eAkk6HSkP9bX6JXMmxnTXLpQy83jV4o73jBUcPhK96TkTYNNTswua8KC27K",
  "key40": "271dD36MD7RkX7ez2J2wZdNWbmbXNn1vztCEDftXqvWApfpcGuqMEDcsti8fX4iehoLnykgTDQr4rkMNDkCrPLwC",
  "key41": "45Z69fjqs4uZ32ibYz6hzLXU7Ajy7C3EoDKiJKnYzsgM3gFQMxwiZWaKv7R7hwNF8NKQUxxnjU3hvH2GQpnefKBq",
  "key42": "5LTFCpigbn8Q947xLMM2VEPQdVjm9BihJ7QE4fWdA1A3EQKXhV86poWRQ9JxFeANVTbTxncKY89r5JpW16Bczafg",
  "key43": "54yWr4EQk1VYJksgLxApZj4ucrmnUWMJFBfuTV8JYA6AMSKQRa9Up6wi4aYY3Hb47ssmBPdAyKXPjXy6XBXosfem",
  "key44": "467An36cwZat3yESsCeSkdrQFfkutes5WJ91wnRigrjeRRUUx2qXPLS1HbSqeb3NmQpQ65RCsFuzZYTRdYuB5A84",
  "key45": "2HPHFptmcgCpCiH24yh1b8ewnfk11bUPbeCCkbiYyJiDKygL9bEjgCruyHo2qMqxmCh7Ed5Sb9YsFYtHeBi3ktw3",
  "key46": "MZLXjNDGYzRNFyx6eArthsvmuqo6fHvapHLQQZuhiz298M82KNJYqTQm6M4ZL1mWdXD9aARNdYBgGWMecxTJ21Z",
  "key47": "4cJpP4fvsUupa3gyPFVs7LmAYvswzr4MxTdonYPCVSFtFrebJQnzhP5LRW1ak4tyLKxPZCdzz4kbTChEwoGswknP"
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
