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
    "RpTC9wTA7yAuSLeje535X9X5KgdPNJE1Bcq99jV7E1JbLAyWpJ7B5qM294QQxqZKoTTNep3TGAQdMtSozG9Dnj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z3a1sDw6Adh5ZPQJ8pgpbMEMZZEV3hfscpPYHdKaqccJE4sY2WH6q9QbZ9vHA2LkuckKftFwKKdex3igiU27GP6",
  "key1": "3TxTrpqyvsUZDvTTkfG4Mjtiia9rDgJkYbaWbtNniHCEvDQ97DGf1nPfDZoLSZYjQY623vndF1KSWjQ1KWRsk2kT",
  "key2": "4n4MvMapoEEJV47LfDT38fCkhVERDCGQneQfafPhj9hYerrUGjSXeC9pYmBkZiLc5xkvSuLNo4EwDa4LJ6gWMHFp",
  "key3": "4PXdLXrQQWyUeRhrnesS34fFUK5r8XVMcvPe2LrAuGqWDHix14WUZVnGFpQnceuRBvojG5WoEfWaPgxGKvj6CrEQ",
  "key4": "5eLAmg1uHN4iBHt7uAaGLa4ycuT3XucYvLGZWTtnB7aH6wdTbCn6rDt1n7BqdTJh5tLoHhiUTiNiEKeJqdqKtKXk",
  "key5": "36wTQkN2yNYgyE45jG4KiE4terRNbBAGhYkkwVb19stBv8HKqVWotmoDbwMbsFDDwMxgUUNfGGnTLgDLN1TbbEjK",
  "key6": "5wJeFbnXAMQMB2GivMnvPXD7KfGEjgtWvEJZ7CXme4Tv76rLiQwRmNamVduqXv36pY8oYKnurcnz1mjYq7rAKtq9",
  "key7": "2ptmapJsu6xkdU5QeGrbrqAfs43RvGgPNEsh5X2nKMZLjcirUT783muyseV8F5qLJkcqAB3nXrer7Bhq2ovrcJys",
  "key8": "27qqZrq2Zm5aW7p78AEWGYjKabvdQNXFK6JvQzrGydsdaJWwKqPt2CEL1KpNChyjAU3T8LG6afgD4FfP58hjHvP4",
  "key9": "4CpBGAnYzHSUDkgxXfX12SxGj74StjTe91corSLpSKNvDdvYwrjZRtWZ9B3tQQjk9aqDzYTyapwW74TEfPBewqDv",
  "key10": "4UFrUU5eq8zkiJSrY2eHHPtBvPzMV6wiAXzXKMyyQW8qLhxxt58C2JYRkptd9aAaP9wSrj8Q7UYgRq7Wi71hPAsa",
  "key11": "5e9NeEoEoC9MkjxBij1UnBnUVpjsXkGbBvxQKJnwZYWoLs5946FwmeTiKA9iykiLK3yaLUaJAy1W6E4kCwzdCYbB",
  "key12": "4wJpMW9PkPNL8BcLC9ekh9fJvktMpUEopA7zk9DeMyycBPHPgVuvctHNxbvMtnWqi8TWaYmQScR5MwAQX5UY6Gn7",
  "key13": "5jLbRrKb8aRw9VrmDzuEFwtn8UZnJwGhrGsqZaCuiejVfSx2iHwRoYdc5YhatZkm2NaR7Pmi8AqEEbr3wertzFUV",
  "key14": "2fmDxECtcv2KqWUk2C2EJ3ZsXED8s6aEt3cTAxv2bzzNKkcd9Zzf78AEqKvvG99RUD1oPgD4yxRCS1uaZ48b5DrR",
  "key15": "5UZHEnm55i49jFwzYhCc36AFdokquL8CT29EdjyVxVPmR16L5YTSsreD2cvByhM7anYH6v8rbBAgt1f5iooQfU13",
  "key16": "3xfVsdRwTo6ASEYj3tzF273dP2qHTsGaxK52GeWAk3qhMY2zwq5zE8NKHKeofW3UZpctEbEPMX1AMhAeWDSQ9ZaE",
  "key17": "3J9Ux4YfdZfukjW6QifXTvUgXQ4L6M7jcYF2eutjXcsEqUrNogcWVHuoTVPUuTipDESfDAsDB7E7vETouxtuiUrr",
  "key18": "5gXMzNVsYYjaELBXRn8Wi6St4TStBxTjiKeW4hzGqaddHA3YCaybT7RrbukfPbwDdwGmGQsfmpgxktX2MPop47Tq",
  "key19": "5n5xh5MCrS1PMiMEuBQ6C2EHDcnBH7zUWK7JZrW8tAKuZbK2y1R9S3dbvWqHhYaJaB6Q4fpP4W9bVwcRwTWSdQaN",
  "key20": "4xAFwFbf1byjSmczkFpD99YPksBXEMUNsRfrAuSFeV1WKVMfuS2Drozd1eAJKiiWiMK2DyyHNyUzZpt6e69SmTnT",
  "key21": "449CaZBZ7Q7p7VyoJziQufz8aRZiT6S5M81JRX6AJbzzkk7jLfBucutPW8qCmHUhJ3rt3NtDxncKd7cYsSr4XE1C",
  "key22": "pYJpFhfhT7HPy8FUxhtuFdcEWdhsmo56MPbXhJQW56qkwzzG5DN5UQjar1mLoSVYbKJ2wQZGANzvWb3y9fE2KaW",
  "key23": "5UXTgo2Y61Dv48P4goS4h1hGgWXtytb6P9Fuz5URnWCXNca2xWu9r7s6Yd5h48AsgBG63pXbstTdJqAUcrvhGz6V",
  "key24": "4uWqfMT9es6ABXCzvcKP4Nvse8GbGLiqwFfAuiWN63kyabeqCdLsQWAusMnrhQeNTAHk7fS2DM7B7SvmoPNBrmPw",
  "key25": "4TL3uGEA5rk4uKB3dAtbWca2qgoXGYrPisHcNmjqtLAtNLtgkRg2bAViF6xZ8EVwudATAtHiynmuZYaSQ9Jj2FPa",
  "key26": "4VmFkGatE7KrJm2rYUWjTXKSJs2MnT3XRZyH2GK66A2St5VTEKo3uHU2mVbyAhAGDT7CCWfAGcuasNGhEt3AUaF",
  "key27": "4LVij1BFuJFk3iwzvGisJvH9RjZFYWkvnG5DuprXLenv4HW8APPWH74K6Rc2DB6w9RiPyaoy8tYhBTY5raxxn5zy",
  "key28": "3PRqGPhUWkuuSuHeXhGGHrxxVYVsqurpzmzf7d7124NHsuZNtTgMGwfNrL6zhDxSTEpXC8jf3jgc3PDtcRje8nix",
  "key29": "Z4dZC7tmuEfVoPSWKjttwmJ28mEjuEMV7KaZBqgfPiXXcssXK4ZBqe4MHbUqHkeawkeUkxmYtYMgPSEnk5cG4p1",
  "key30": "4WihWtFjukPtbFai11cobejeasniZCbHMHnsPtj11kTb5W64npaKXCBwDTTutpQKCrH9YW9idPz4fFDgPh4bbXaz",
  "key31": "4UZzK1GfsQHx2YNcCkBc9mSNh11jDJ5EtJ3ULdK9UZzqES6irUhhmAoK6XMFrBz9jweiD8EMoAKAT6D2eKqHQwwA",
  "key32": "2LuLzzdvKpWUeCHa7mYi3QuRCp8bK36wdzdqvVfmvC1a7GVrAz3ZoXJJ4vGr9Usu95DBFy9CqAzhZX5s5iLKuXnH",
  "key33": "2jt5AEHNkd5WLhPMznWF2H8iYVMJynsZishpMHWYceAydG7xXrE5p4GPSBrdG4Dq1rfGenBwWrM1ftqhqwSYPS8n",
  "key34": "3Js6PbUGKnT5oLTkM9axBqKua62JDci18wjiLRTWMwtQqBgceqpyBiuqbacjhzL32sFNeUHRGLMx3YGD6QTZEV39",
  "key35": "37Bmxy5v7d9TYBrYXonZjy3XDdb2vAZsccgqiVchDar9nwpyxER4kjxsqpSmMMKZxBX37nZcM3NWQ5G3SiipwXTj",
  "key36": "3KsMQaZ5y8AXQSHizG6w6LgtZ9fjRBbsk8f4DjrveZ58aLkCymQarrUWcyn1nTUZjQjb2Q64B8HWXE6j6o35YkSW",
  "key37": "4F8xkw56yz7ArKKm92BPKAAySkeNCrxubkRTMGSjkaPcT4LSZZqSgogeErjBHNRiPxB9bAa4hemYhBh5JdfnKoKD",
  "key38": "5mob4JkhNQDJELA3dN6DgH51GUncQKjFMZWov9vK3yR67Hc28jtLKDWFxyD1n59xMvCsqMLC9GDtcmacLzKbRiLU",
  "key39": "eSA5hf8zS3yQRVDvFi9GShJG2NR6ZpQ28meaqoVo5g17DSmNrCFMhA9HvcqhUdsL59xknm8fLCeQ3A4rEx2LdoU",
  "key40": "3QSMhBYaSzKFecdD9VucRK82LQbnzRXFLqKFR4QpDD9j9Uj2ardJvrk1ayDY9ej6AqJUfKPPs9zcNnEZeDN3dmUx"
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
