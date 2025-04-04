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
    "26xFMgcSsTT1aS7ek9REEbE67hjf6b2tycCF2NpXvT5x4y4rCkw1KKrEJvgtaQbxuBJbV22EAJQ6DhkKFL7CpVHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gNqyUfLX3DMFxPcYhB9yuk4wmeLBrAVuQrs6xBpN7kaQXAdEQVSEbVPebhGvdHh5Dc8H4qbkpy1XLMXo4uETaoS",
  "key1": "52ywWr3iA4xYxYYgELTQGsvmNsAA34Voo9QUP8pGgpTiMcQ6YKUS3S1ZSYeENY8YpghrYgcE917DGPcZKPMh4cpU",
  "key2": "4kWhXCAihRGtVfUasj2ahv6nadxoVuGmRy2UkRZzTmFNonHXK93UzxWqgp26hx5AvhfYLbDtXZ9LFBneQdLEMtKJ",
  "key3": "4ESaW7BuX5NWzpyCAqAZeWMQMkwLDqM68RV2YujmQp341s54WpSE63NVaHdjEKtKDH8F9JnvfaknCSWwNQk9b6f7",
  "key4": "61shGsMWcU7HNeoYv3aon21a6sCwb3hrLHQoh7NhEgw7MoXXZMrCqbcJkPnbbhojAk46X789ET9HqkE9r3qaVAho",
  "key5": "3mmJEzcdccHrgUkMSti9q9WGqSAh6Hv4CtASuS3C64j6vyuEJf9taJmvBXfPEmJMTi2YLCN15qYiBt6LJd1HSCGc",
  "key6": "5rP1ZCYn4HZVBLwyhq57WvxDMRfkz5bET5Wgaxj3DxiNtiDHV2TqmeChgtTmTzCDqLMeG4E8Dq6TgZ1YEa8J36cr",
  "key7": "Vjp1BgrLtVE5xPJ1SqLyqd7xyaUgD2aRzvaatozKrRNfoNk5NR84H1rwm6oXrM4qMposYh9purwdzAjiuMbR2yF",
  "key8": "2wzcGkGazb8WV4ygHs788jrv1kj6rNUyCrq2nZvx4brS987G5faiCxvpnMdbmSDiWYiW88LzeuSm2HLjj7RuSHAs",
  "key9": "Wh6zVxdJhzre9BxHk4HnSprfwrhCWXJCDSMWUfXQet2MvYwBsd7QRX5byPbXBgPHHfo35ZViAHopYkKrVgXLmBT",
  "key10": "53LZfRcv5uqxM7j6AWZgQqRTsTCg6MrQ8Ea8zn5zbZxc1EwBJspk5ArjBFeUj4jX7Cv2DrN1i1J1ye7xSSAJ81Ao",
  "key11": "533H354uFcwGj1EuVBHj8TitsNjQeSoYo4UGKpqjuNBK8bg5ffvvcGx6eABUbDBLYXDXjpknZoXcbpLRKUm9h5SP",
  "key12": "X9gj3vRnkYUGhm84ntMzcT5WhUCtMHHa3iGwemtRNtMaKRKYr8H8YpN4yLkA9HyRHEH7DCATKpFXvmqia1K1w58",
  "key13": "R4RNx5ZKsL5WNCDrGF9dTLoSyi8okaS892H33nRbddmDLqz3yuvVHD4iCDnRyHcG7NPTkiwah7KgJzXucB8StHn",
  "key14": "3fdm6x3M8PNH4MwMwY6b2kmGNTTSKLJ56hec1XrmoKDzHyDVm14oCtLsNVd89xPAdLP49mYj9ycv6mTNcaWtL9Df",
  "key15": "3brHcMfmPBj4zmbPnypPC9csp1a6Da4m7EQf2v9f9cH9Z2judSqPnn1Ws7arG6XPJyKnZjop5P5gpyP8TBLkiiz3",
  "key16": "2RdYUjxDHbLx2HX7UjbFpBAjqxQWayRd7G8fmA4yahMoXkid6sgH7VoUosgedY2BaCL1zGkiiVKXu2U5ZzYsNmhv",
  "key17": "3AmNWXUBno3tsecpQBiL3oLgGQvuUvhrx468gGJPfq8kSbNeUpwWe1La8vjzUsNHEo6QiTr1g8Rg7vUP4q8qcizP",
  "key18": "2Yf2f3r9Fv2PpeeS1wecG5TnvDpSwFdcGQT17ZMti7LDoW9pnrMZHHupmC93KwnaykzjN1WFCX3w6x5o1XXWd3wz",
  "key19": "3vAan54GVo26SgyQ3DrGJU29m7J6mLvz8wkV9EhCnvZQfRLY44yXnsUZJCwdGPPNgm5UEcsC3Zt89VSX8QZwo5Fq",
  "key20": "5QCKrzUD7Mk4qzv993SpfYtxsbaRz6AnrhxLyauzgSCwwrVYWNjdCpZVxi7P5HsToQ7mUd73Ci1GaE2Qzj4Qjcv7",
  "key21": "5BX12cyohRTrU9nHvVJG9N8fa2UcvkZc78CrkixCjTWsqusJqakNnXiuLAsnyPh5s8gCHNURDUjuVLb8gV8HNiur",
  "key22": "2WWgL94LnkKEUdbfFRfG5skJFLeN1YcotVDnqFwzcdHV4jbU1idRiwPYVq7PqQ9d62j2zX46yWLY6dCqmDMaRxxp",
  "key23": "2aXGQ1u38F4hVVgm3Gqaz2U13FkPxtG6PgT1jFLRyFxkVWYSMvFsedWrLYppnqu6mPQyygB7gaMjK6XVPohSmgo8",
  "key24": "4xTZbiaazMsTrXNtgJnQHF5ps47cC1XkuMidsYEAS7utZCcBkF8PzAbsmcRsDj42RtPWNd9ZAN3e7mXTxt7dKCEF",
  "key25": "213TMeggz7Mh81p7wByRDg6SJahqbkHpM3YkmbRykkJCZ2nSreu4e6r7sHqYowURg9uMpb7iN8xYZKFYHzzuugWJ",
  "key26": "HZyJiJ9WbQSoqux8DwJ5AK4KBZWPN8qCpzrj34F9BdFgVAip6gUY2vQvjutorNo2HFoNiGzn891sEGhXKsH4AyP",
  "key27": "BMfa4CZuoa7MS2N6i6edxbJwcYbhqeLeLes9smV3hoXXbdjYhyCUpzVhoRxxq114Le1jeKuzhJjFEee6AezJLdh",
  "key28": "2biJVSAuFGKw2HdqJ5yRWdGEJpipJGRyDyU9dYqXLfy1zPLXTrDmsXbkguEc1E42MvMY8fBG5oWAMqWvYSnArM2j",
  "key29": "4mtm5mXYVacpn9zSjSURRdMN8N7EUrW7Ys1S39qyYdEpgrp1uviroHg4xjkfkW8Ja2SzLZVatABe1kCjj53ptRUS",
  "key30": "2L14Kc6GbZXNZy2hy2B4VZrzhCmW2HrL8Sisbj8MKvAutHhCA3jmtRogGXCwypi2eDEBMTQp3ttbPLRpbd3X7UHn",
  "key31": "3e8qZiuLQqWn4cBUCgybUxZGorACf8QsndgmmiTtGmwc3gY1k21ZS3UfVcoLgKW96BvasdXhEEa36pmdtzbGiVHP",
  "key32": "3CZWCF2L73wJaotcEwTSLZHUyA6ehWJUtuw4PRYvg6G36YwLSd7NrbDAsrfjhUHzJ1pUEjXAsQmeHmoD7CP4SBpx",
  "key33": "2ykmJX4jtPYjQoTuyADdT6cBUKPTZTGwMkVkjMtJ3Y4Ys6ADSxje2P9ze3YeyL91Yg3dr2sjwywb6x5eza6Ec48W",
  "key34": "4dS5H85cDiqtuYPapj1pkkbZ5ChfQ3YQUY6mQnxze9Ez4T6vcWGiXB8BunZLb9je1TQJabm4b45qsAH9F9nyPMrz",
  "key35": "4bYnw19T6b8Xq2ru7DWGRRRAtsoZkPWSxe9GfzwB2Feif6cLPJFnMs8aG6Mf6Mqt3kUHGAkJpnUnoxgqpxqNguDu",
  "key36": "42an1b1ijpqDaV18TR6nJXJc9i4gwSYcZJc4HBa2r7WLKQeDPmyGHHp4XxxMoe4LEuHDKdXTFFrHpDJA59dyj4se",
  "key37": "5V8TdjvGQ2MYMDL9ZqRF3uQt3rT9o47ZVCS9QH8mF9sbYNt9pYnxTVGDDmA3EHPPNfxtCR9pEo17nWM5fNsCsumr",
  "key38": "3WpNB5ER2ncmdLwrigkJ98rikAa2Xb7tFjXvKVN1KRupSLcXbS52Y5FHHysWWYiC94Yx5v9sGQnrD1NgJjz9j1LR",
  "key39": "2TjGn2nvKfj99HRbp2hwpoVMJdm64uw8a7yyVBM38Cq6LRECXhYHkUyXsgS3H6GbhTD4fLYt72NVkS7Bsa4QDGE8",
  "key40": "iuWS18zweepurFHuz17ipmgJr2mJu3Jtyby3sAh7Av6Fd1AyDouPkTxaQ141DS14xfd64LXcFPGEDP73DJDhedA",
  "key41": "3U6K4TzRM5kKm4SytUQb3zv6nnGpqoGE24HNSxykBNasHH1ACPVgrDE2f2J5NPQVaZkbj7Fwj7ChhkqzFz2mzifU"
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
