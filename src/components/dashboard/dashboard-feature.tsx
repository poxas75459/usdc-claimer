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
    "3kND2P7anrBUkCuZBwAk4mtjRanDW7uP3gXZonWqT1Zon7ZCFAW7imdwuqWgLqEzhw1j8AXaSPcBhwW4GTvhrVow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fxAesrN3LoePbEGjW5ogwdjgkZt35iYfE9cBcxNpGuCCaDVJuCkj6okXWwaFDYBhG5FcRrsJR2gkXgLogVbBkKB",
  "key1": "39gpMBefTeVUMskhuq8m9piEbArX1yo9zowfXMtr2GspBCjtKr5ZC2Y9mRkkFtsRh3STYyZorBjRpNKjd4gYgYT9",
  "key2": "3sKJ16VQ9BhJPkETC4ktnXP63MFzv8atXdG46QGXBp2CHJpcRt8F7mevWVptJ6XMaTVrPVTVAJ5FZNB6Gf7EWo2Q",
  "key3": "QwggroS5hQCEkBUssNg69bdXvNAs9zgux41h5WfPgG4XZyCUkPmPq6mbk48UpoLT7wPF45swNJbQz3byVcFJvHq",
  "key4": "2qEiynBPckVSnXWzbNEcCXQZwMtojC1BKwdVNofv39Covj6yrttjZ9pFDmUQ2yytkUumJ6LPv4qTABekQmd3Lkh5",
  "key5": "2Gu7VzaCK6bY7V9xp9ZVie6YKGcmbv3Mtz8UPppKkA7jeQpUrjZXYehJJW5zTyvmS33aPDc51x8fiRoWqNTBkxAA",
  "key6": "34P7fjGL9gvLv8NKRFm5ffsDVYaZUeUJqvpUpgV3jE73frDNDpWGieLNbDLEZgtqVWt96xdRYEsa12jvPDVNBqpY",
  "key7": "hM67yTFT86yQuoKzPQW3n28q58iGVowMJZYsReKF3H6gFi1bc9ZLwU2gcif49emLU1KMjsvYvPirKFpZY3coqqQ",
  "key8": "SYam1GavrV3yQ47DDyJeXX2WJ9yj7MwT9Q9fxg6vSbG5waeULxZfbRcCNCeGHqi9ZL57cwQWh2RiPbFSdzUSvp4",
  "key9": "3SusXkKXhJBC3KSjY5qKTg8Hk6Gb3XmqohB673YUytSRJG29xxGxYtMxxbeXGu5oq8iPMcfRN2n9ZQtZNhqn5gNZ",
  "key10": "28NVh5juWUngd8jGp3VMFhF4ohXkp8eVPmg2m25n6KV94SE8K2vFTv6E42zpES7DHx1KHPiSpWv2HpqAvEH7rLJm",
  "key11": "4CZHjVeKK1nY8xieWF5nQ2k9KSiFALd7pPYUS44ZDGehwQVansyDqj9jDcdPc12e156mUdAn2x7kBvomdHy6KWdK",
  "key12": "A742NSY6hA3pUTXaRdjnuNTkeB3WnuqCUMjJFspMxMoTtzbRNw4qshsYZ366tFotqBw6Fx94EVPgD7e9AghcWnx",
  "key13": "TuBMA4oRs1HgCZBd3zHRYK1q2LMeS1csDYM1HdXPbRnYWpU4CkZdPaBKwhJ9abbfRyibFj9FC13KfT3u8nCn5pR",
  "key14": "4Ja87ySSzU9hMPFxHVuNYrxE6K8YzCkj7CNJcFEHYQVHCnJrgg7L3Xc4jvFPd3MSTH6A6MDQDsyk7KdUkWqsfbSp",
  "key15": "43zWTUUpgtgX7W4LoJexxqneAuD25oBisGjk5A3x1wrSfAU2tgopGpFYXPwDomkoxaTEsMHSZqJfPDK67hsjAQ9Q",
  "key16": "5kj5Nd2h5YTcRhCqrYsAYM9jmwgQoqa4T7EAgKc4NK1kJJjCb47QJZHymRCJx9dsLPuPwqST18FVGWuZ2qw94pWe",
  "key17": "23WCf98APkoCAg2Ah9PV2qJnyaLrapbtE6zkcnpo9WJMUK85CBj6N2LbczuSrR4UmNoeoPuErwNWCVYRYE2dQgQ9",
  "key18": "38XJZG2gSEcFQWYU6M861HG1QMSVSDoQvdp6vv1v4indsEkXMpXbVZnJND1R75habYxsmrskEh1wVjfQWY5TNvqS",
  "key19": "56ZnLdFgbU5hPAPEXYAuQ9rVNiKk23hQwRGMr1aVasCQRcGDA8UAC1atEvi6XQPBnkGUuJKJGVB2MA7173MSL3r1",
  "key20": "L7pHrQumD2HkMsLL87tZKNcjXk1DVr7HkuBGzzr2KPJdebhZSBkpjxCRLRWStgUiuLWY1fJ6CeXVnjTtCwzpqAF",
  "key21": "nraCpvxHCNVk5BVZmMQHJrsErzR4qs4EtzU34QwnZJGHzV3WNGAbEknhG2t7Knwiejax1AchQuwNYy6TLShhKNF",
  "key22": "2tTWYYkseySoPfLpsWJzdVE5haPRHLp8HEuF7nhnjAGCGk9q8f7WTkcKiv1q26DcFwfz6KBj5e73EyvgebWuTka2",
  "key23": "2Cc4oRkZZuQQ4qdx2y6oP9wuMzwuXpQMSwyicbUhKBovp3tEB1MaG3QhffJXg4ULqCMG7PEaKAHB6gR8Dve93SfK",
  "key24": "2U9Ejwcc6RQHJMopom5eyuDVEDSnwNdY1FusiQuKX9VfGdFhQ1D4c61rEo9U445wsLs2qEthXgukD32amChoKYcC",
  "key25": "5umJangFYEJdab5JhPDuj1nwicQusuMdeEBCHtSD69bRJaznroL2tEbB3cA6x1oGisbynti3cEaKBPfmepKF5H4k",
  "key26": "3Ssz5UhJURZ9TVHpMz7MoGgfznJKktcNQdzBKhB2LwsjaZWSsc5s4VSnoCEwfjAYXuqwbH7xzSmXf8ctx2CsmkQR",
  "key27": "3Qj12NaJoAgjB5SfzmgL8bmDcrrZUN7UDEZTjt5T7ToW8SS8ECoAHXyoXzTprfPrJtQjn5tdZGmYDNwSUQ9cLNWD",
  "key28": "2RsoxcR6nA6BoEYmHoYnP9L6Sn3vXUfX9n5914FfkfAK4JrgAnfrMpPmZzp3CqqBVMu8SCjdGdxwWwEDhvU9udrZ",
  "key29": "5vddZ4zuNWbVdMUn8YLM5ueJdigiwjALWSaEAUJ6tWiHwmKfmejfH1HbfmwsxH31oCG14Y3sZ2vtf4NRgqAnaiUq",
  "key30": "4aihivcmSk8RXcir6x8rqKyHTaHoMHbzLtYekuUo2RupNHEKNF8ykKtePfVWE3DpFVyAi9ASfeqR9Ut5axpikwcz",
  "key31": "1J5odghx6CXtydMdmfujn8nEX8zMLP66jJXCe6Hz4NxGxcDvFkb37a4pWcK6ASciyiKoPhwBDttzivs54thVD82",
  "key32": "5uAGhNhjuJm7qMV8exkHnD9uPL6RbyhXbLy2cPFSarjvbfEedmvjAcBMY9pppaizhyydK3FZE4pXTY8WJWP4sX4k",
  "key33": "3jBgEHZvkiFxtX3DKGSXXVnKuYYFztfj4LeSHWC9zQPSE74gRZPHHAm1GJaNJAGuPbwyrs1QiTDr7BywqQmKA1eW",
  "key34": "3E69EvWL9BadJdWmBu5rXGj8yjumYeMPpTE5HRDSmZBy5z3DoWoySrgjFz949dMvr3CybVhtaMogKSLjmU3f8Q4d",
  "key35": "2KnZEgEkuPgMnBZ9A58btKKp8D4dUUGjPJw3xAWSm4STQviG2EchcQYMb3eA63KX4fGGCkNfgQcSu4ZzyDeV9aYn",
  "key36": "4v9Akw4zzARgHpqUg5TYrz92dYQTkcEJBY8xYDr2eqM1k1qWr79gZcCgye7ekJsQGB3s7WBbgK8eQ6HSa2dSaUzM",
  "key37": "45Cf3BbVhvq47YEyjrG5NeN8x6HtruMAu2GP21RhtfLqYAgxeSezpEo6HgyYF5jqA2zMPS5YUDWcXKjaByczQwoF",
  "key38": "2qjtt5YyZJQuCMKwwmUtAzkZMytJoe7obEciFKf3LXAPc4pZsSJWwMeqb9RAgQkJ7oRSj7hFS6xU9CzMPMaJwMnT",
  "key39": "2CCZfW6y4fLhFBM2RUDhdPFL73ozhW8ySnqkyBBLdEX2nxA4u2FQFm3Tr7uhT57KjmFwwNKvxfAVfgyUXrTrrNa9",
  "key40": "5DbMXyefMVot4cC5NjWmhHyrXp3BbfSo4conF2iD24qHUjHKtEjcgE3aY9RZDXfDEkTi5qckFv6daLUdD4CQrrED",
  "key41": "Yy14MzzvgGnxvQU48gBfAVa3QWqpVrNH1ejbYAbz7LtbVAKkPch5EMrWeV1VV6sFgfVReqiHuXr69j4LhpmcYsA",
  "key42": "3GQcUqtHb7iSXAXPvpU1yZEAtjREGFFH6RBTX3VdRfsmZJog4cZ7Nbu2A1A6TBFCz5RFWSp7dn5nPEYqpcQ7taQd",
  "key43": "2vS1NuLDjQyK5oxmkTzhEx7EFNd1vVUT7TML65U24nDYubpD2HiXNNH8RRdAR3CnJZTCWdh6yNmiTT81ypq1sY3d",
  "key44": "3cH497tQPyeSMaR69Qh8ieRQs4KitWSQQoniWnR52HuUwKBBWFQ73wHhoQQ2PavWGDxsyJYXerJDVJ3kDnGsLdv7",
  "key45": "3KSeGGzCh8YaAeayyTFgTKFXthwqRYnar51Q48mHJzqkKAE7JQWTKa2k2tGGNsBcymwPZVhhodLpQwv7jV5kWK3v",
  "key46": "2geiVMK1fBEXnA2VagJrmXRTBaBTa41D68LFsm1ZVrPV5KDxsWZFS7G1bexz7SmiUF26whn1qznPQ36LueroaPEP",
  "key47": "z6EVEcFriSGpeVnHsetmoJY5DVWvKZT8Mk8FczBexZhRUTa7SuuCod93wbPkrbdHhFzpr2B9oZ7LyHjV39KeCK6",
  "key48": "5vTDyJiWZmopqqzecHJLxBk72GTXEsgzy7TwhCcBQ7Krzs8uon8i29c9bjDqzFgDVUVUZQccspAfuL2VGDf7FrbJ"
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
