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
    "w9JJnKFSiA9qtKzfrBSiQ6dj1oyp6TygwoVUvvHSiENnAx4X7HKZMV7tbMtBCbNLE7dMjaJ7BTgsD7tdXKyz4Bo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SUKuP76DnKLAfTAHaUW7G7aRArGDAj9WytXkUVupnXHxAhzDd9CworcSvDtjf9GWamCzZj5PbhwzpcArR3x7Geo",
  "key1": "381vCuTtWXUS9HpoEyxTNpU7cfdKGyXMV5hp9be66NAUMYoY8VLwrn33eGQK5YQy4u4oqKF5NjTq7kWw2rCKcaMS",
  "key2": "3m4RzrS8FpdwvBkmLjTEmXmvjcQHfKDWYxjehDnDkZm4WYmbV59DtywpZvBYPF1kJ4DAEB5tsXzvPfkKcpWKrsA4",
  "key3": "46jFgPpX5mPHwqTNJEXpYJrsjGruQ2rJrTkzcmZGymf3bHkuNTAjdijwN9X2is9h6Gk1w8MfMqcJqQTQW45AwYo1",
  "key4": "2hCbizfPXAkRqWgLmfD6R4dwGXWY3ANVcuLGkUUgYBBNMmqq1DdGH5UqsR4vVLa9kxX1MPp9Nq8pdGq3LWvpFN8E",
  "key5": "4ufwFxmnvDdTMjdQY1w6ggUMEQJyUeHGFWSpchgZWieArNFiKE5uoKJSoQTuiEnT11rPsWwxeLTSMjmjDKcYxDP6",
  "key6": "5MMURRsQmsXD77MvNcKU8Kk3rXQyUKRkt6t1hjWJNH6VV9SgjeLmMBk73gx22nTDzCH7qajnoRGku5TBp4eKdaSB",
  "key7": "2Lbm8UH8exErwYuG5AdAyHzadPgWXsENrRR1Z46BTNk7XjCQ5d6AowVhh2WrHb8qbETvtMWKpMUwb6TYWggXffM5",
  "key8": "4aK14cCEwLSNAytWpX64PSZhGqsvdpFfexot3zytgUKYYcyxE1vuhUZyEuNHRf2nWhgEvMtw76CitgeKnRxULWY5",
  "key9": "3wxWy5nXeLhHcXSLcKUpEEEvxo5TB3TKAq1XFgVL2fd9dBATvDFNhSK1dZEYhJgmxAn94SX3hSjyhAnMcfYzhyMt",
  "key10": "3eTxyXU2gcNH7BaDXitRKD6nJPZffYGB2TQVxi8EF2ryK7YiVhmAZtFBqj1NgxiqginteLXhEJBjSk6AcAqeyQvh",
  "key11": "3JmEPDiWgEGemgrV9LTM2gpABk7KpNF3X53AuJPqF55xUN7AmDewiiNjgkjLneKi9YfMcwC2zpGhtVNMEqQbRtyz",
  "key12": "3BAuEsgVCoFvknVb4XQMPCR7mANhc6v9iTBjwfrefU2HDK5pqFcyXkFgQwaPMXVxnVKqHangu7Dxd2P4r1zzQw18",
  "key13": "5b1cBE8Cn2VAtzYe2ES1b9XFwX8Viw68BbAg4mU1fHFbyxNdNq93LNBq9Ma8Khq89ctFqEAHVGrt6MBZVDoNtvEF",
  "key14": "2d4xifkbFHJ3ujHevnPGEJGuk8FuUiUwPNJjc8KVGgSN4V7UtAR2v5NTvxhrhNokSSmVLqwCifqkLXLYPxC41Epe",
  "key15": "kyTtW3oTp15nq3Sv6TtaVxug91rnyPVgu76e34cYTdAj46z6vicbb11gCqE9QXGKL1ArtdmajtWcYhRwDChowqr",
  "key16": "7prXLCUkCNgqdABNAkSo2TBbDNdMurWMMQLkwnVYL3FbjzMHSucyWTy2WPNRmaacn1LYWWjtEGtZbFqwqG91XKK",
  "key17": "3HATyVa5ZAbFZdjYjDsBrEMpfSqEAq1HMjy6GX4wiGC1fjvX4xMMbDYpcbSnfvD7H1Ux2Kv7aenUsDiyzDVXXPL9",
  "key18": "5h7XzGDotDdnFFdMH4oXBgssxr3t3rLJLhZsYF26EggykH7BgN95i5YEBofx8SKTKRSw2Rn7bJbnYcAa5Mx8X4HZ",
  "key19": "39Vg57viVWY8eaEJn9d4fRKFwWbrbsvvWh1j3tWC7cE2kkhPzrz2rZQcjBcyVMyL28fZcDohttSMbN9B9YQXvdAP",
  "key20": "t4gwCo5eneio4oV4vLhSTCwBEJSRPkydc6ffr79f8bZEbtpmZ9e8YXxaFSoMYhCNKehvAoBvENkwk7VLwav4oXG",
  "key21": "2J3aM7qY9Dj2koY3oSAM4NWU1WgPScE1tF2LzseKmGM3X8Rfd11YmpwbTGiExQcH9jC6K5avzXN8xxs3yb5Q4Git",
  "key22": "2tEXX4mpqsURrz3Y9bJLdvoyBscGduVhWBCbpZpK5dNfjuNCEgJBnXYHPYqEjmokBzFALixsdwCy6JAMTaLqnzDE",
  "key23": "caiQ2UGZ3WzKjB7UN3KSwsT83Hkcrg8s1x8e37ufZnbCi12j8SAKcffHs8oWydK5XFPUX4tM84znePz1p1vVCDf",
  "key24": "5eMqqdWPBcmdpVmGUYZDMYpeYmqwcTZMKoWuAj2BN1SFoJjRo3izTw7G3XAq22Btpu481oaxJRnL7YA5RXemU2B8",
  "key25": "5Cs2oS89TkAJTEEffYB3vWsVyCZcwnudD8A6LzRUD5RnDCvoRAvTX5e8eKBCqDTanFCHVvT1HpWoy3r8LS8gma7H",
  "key26": "62Y4pVQuZvHiafd9mMzVnxbsfxMZsaqUvcMq4wkJY1svrv5MjPwncP7N2jVctsUxW8XBwMzLcYkEJ1dkCps3LLgn",
  "key27": "5gaE226QvcHsfJ62YRXMYtaSs8r8T3F66WygUecHSBCDTgL3tgmqCSo7vM3TNCsZtkPvbLgVH35MVsRsNWcLibzM",
  "key28": "5YU8d5ekSiZLEcFfXFNwrbwgL2XmAMXkr9snaVJN5S6T7Qo2he7jCsvmzRH1YuzBrjfNvzcmFjsJNM7ro1TBLkoA",
  "key29": "49JfsY9xBjcpXi8MVAUSXDR1t3LcxWLoNFdm324uKTUixngKQyHzxg81RsMsmzax393cU2kgCs1eZbA25SXM5jN6",
  "key30": "4Dp4BhLiSF4V8KFML5EvKEUC32rhBZss67SghmdCquwSQugyEdJxk6wrtn7fckogWbseTicTiBf8zaX3Sg1JqPLJ",
  "key31": "2TpEjzKvD5DyD2pJe9GXfbUHoqptKkXLferq2GA4k5hbF9iUMqXTiAFTVP1k9UXLUdjz8U3Es95Ab1E7jJbNTjc4",
  "key32": "3DPQ3td2mzw5fVbsQW6NFBLx1L45ysXTnmqgA5Ph4wr9T21bLyUHRf5Eq2CRvqD4my9jAV4Zib7ipAyTtqEgHED5",
  "key33": "2XpxsMqX1KEEJjyqRC24NairEG63RM8hZNahRYoCfq8WM9zPyMrYj6cfkJ9nxSvSb3fD3Qjv3hLGQNmXc5Y4tb4g",
  "key34": "34QbHRXTMCmgGmb8SGNyC43yG7beBMmV8gz5gjLArpQUjVYp38q4wQChCn1d9MMLSYYLooU3K7dBd4E6D8YqGnUt",
  "key35": "9sYnRi3QyuNgqqvJ7pGRsiu6j4J8ci7bWZrBBUb79FPD7PTw9qGvXtrsJWUNckK9watV3Z3yQ5tkMZ1cDaYhLLs",
  "key36": "3iwmpSak3CLcNgWKYRiWXeRVXLg2SirUVpEQL35qEgbg3cJcHHTzLRMNcGrHbmiYrcwwENPFGfeonuGN7YGCaCdJ",
  "key37": "2KnxSd2CeRzo9QGwqt8KfFiztwGGLKJKc7TSzSP1ZGP5qdMtt2z9xhGknVqwYaJhHy3q78rPtCPrfGbqnpCXv4gG",
  "key38": "2axt6ajH3KapLRVLHSDpikum3XZgXiMz9F4wf5gzyGRS9NCCJAtTN21b6gGkgbYyrBznWt17ZjkibdoRFGCCC1SY",
  "key39": "xrG4VwbUhZpRcMfPvPUZS5K3awm95CmWgTg5kLXTNqdrqWak2NnP9jmgRXNrQtHdYoZ1eyBjdrGqnSYNz2B4pzF",
  "key40": "3t5KaVH1D1vSck6dPEsvu3uX1PYtUD1JeCUDdv9LViaXvxm1JS3Qh4JRvS3SJdrd52PgvHd5aU6YScnGBCHCy8MR",
  "key41": "mLqN83Ct6tfKCYStMRt7jgE3RNQTjCzu1KxiLyG8N2Ddvk3MaKzv3aiBD7RtxUoWyHJHxCXAsYunuo6tvgKJM46",
  "key42": "3Y2dBMsiomz8CfDoFJ8JKSXBjemwn3ajm9xJdVtsRWfQvWDdUZfbLYyn2gYfgYKQKYrCLS2PRVfGdEpgwJsWKJji",
  "key43": "4k9niH4XGPR2EHozyq3wV3sg5HqjKJm9wWFsmTjCrxwkc3izL6kv2pPPNZoWKhy1ur9uTHz7C1wAWgcqKraHmfTa",
  "key44": "56M1G2qrY4i1i3ooZtZRbCF9pawCpSTCEzbgVeZuUn9aVqGQvsVMvPmpcAfXBZvid4VMdwmzWuE6wdcJ7xZvrqKW",
  "key45": "2ShY7GagGyGQ3xvsFvDV2RZnQu164avkjxfU1tQxcJUiFBu2LoPBCi5yzo8RgQvfVLgtFFWo7X3cdHa8xGJ7bc2r",
  "key46": "KSYsCWaaMhVjiiZdTAV77xre4parC4uXqxr7aBJzTzrA2vbxVn6FQY6R8yhYm5uXcsfdUMHQJEvV11AfsCChVYC",
  "key47": "5yocGKgyXC3sMYTWcPqCzRS8Aam6oKb1FNFx3EnDsmSE9t6ynfKZqxy1Dxsktk819343hfm85LaFKEjHeri2gSof",
  "key48": "5m5eaW97bfWS1VgCjmi3npwKGDqpa4SDU1KF7WwqNKC1oexsNKXdLRgRVnU5S2Th8qUUXtTtTFpnGNyGDE4tbPUW"
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
