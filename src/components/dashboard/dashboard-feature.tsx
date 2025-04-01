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
    "3fAW9QjF3Vx12d2cg4QgZpubUZxfrRbndwXYatKhR5TuDMaNv9EdCKjhjVEep97HNUPwre8czRMNqGgoLwY38bLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jrydEZ3fkVRM2eQa7Wup2kZuGKsgtV6b7mtXfZCYQARCXjni2samNEi9we6ag7DX36MMnAam4MfuWN1DjWym5Bm",
  "key1": "T537NtjTdvDFxd1tGqk2JXWgaNPkdyUc5zHHpYhN6funLz8rkKxWa4A8fuEh5b2tJNdEdaUWBBQNkaqgywBawg4",
  "key2": "3MQxDJFBaYVpYbJQfhJg9vAe6DbvMkTjzosHfv3uja2GowDSnmafyN9cnEHgbXU2kZhhuYeYgBhDH9owxfPjPqAS",
  "key3": "2ozsTKuqT1W7TqUU68XhWG5QxYUW6a8b6sXFfjwtRUQSEXNRcJYE1iR9eRZdyrQ9PKp7MKfZcWn98EZLcKtjtHMs",
  "key4": "4VH2YeN1ZBM1gS2REQ99SLf7eVAUA7A4jVJdgcgoneF3KL72MrmZG2Kr4WHVob11utUxMBQ4EhYtnWJ9LaHWwQi3",
  "key5": "xeUa2KztD74Tcv6mfCQ2LZ5t7Ju77PDmakWMLUr7yWAP3Tm7ecLEsra7CF5f7KAodMznDQaCYvv8feg9oY6yWRs",
  "key6": "ao9D2htiXoUhaF8wYibDEntQtJtwpYMTBUueEgoV9MjVYHYatnZgzbUiNqFUndtiSLUUFQySUoJxspri9RmgBJG",
  "key7": "H64rcne1mYVBKjComA3iwft9gd1CqvU4KoeBsYykQRNwzUBPyd7UxhCWRhwRcGpgfpxbaVctEVbD1pcDSBoDKRj",
  "key8": "2FVxjaMpcNyiYCXgKPdtiKtKY9WksQWJjtRtq8HqQ7MGMT2cXXsuYe6DtwFQk6sbvf6LSBgGM6poajYoeabFiwCe",
  "key9": "5WweAvG3mcb222TqNJzPYubTvjcCkz1NLnxEsSr81hn62pAGCXgpeujyVoRnKKGgA51nLXo9wfPfpBhscoLg4P7G",
  "key10": "3RJbzjZtj9TvVcTmm36NwFyZXr89SbaPexJ4omjH45Vk1YtiDmk8YnTt3gpUU3RA3hPJ7qqPmevE9CgBAGTd3e2H",
  "key11": "4jvRKcUaUbo79E8DDcWXLrNzR8tz3ktsR5JVTNY2gF2ALWry7y6rcHsAFXKfL1o45hLyAigaKdZYPUm1qn8Y8oFX",
  "key12": "31MEM4EAahCXp5eziK9LbBA5t52Qtc3B7MqxFc7qTaoayVWFmgBxdXJJh8qGaZBRokfjN24CLwnaGQ11UXGVf3Rt",
  "key13": "5sX8vV2h2dk8pSSQk8P3gJ9BzD6TbKKCyohYnHe2MoGMr8SRBs447sBXKjA6UK5vaZqfEjK7hkppYocVXMcFxYdm",
  "key14": "4ayzRJCHnH6BGv4y36HfLovRUu4tqoy2wdygjMAL4ZSGkUMuzJqYvRnAffzKuN2b5FYKj1hA6Vx8ScdzJX69VM53",
  "key15": "3S5M9XV9cqmxRyPmJWeHhdECbt45otYLeh9m62hKBsVSEdJqkAyVAeoSKrGooMryhqUPSAym5Kbymjabvjzd5atf",
  "key16": "41NgzifFAkamQUSJ64cik644JAybN9Fm89i2dzgN6iG9D8585YWV6qHKtpzhBa2ZX4LJCbzx2S9g1VpYUdc7DnvM",
  "key17": "5reR4sCjwhpfLn3HqsNZ2siZ9SL2ZPiXzDR16TthhsAVyRQD8SDiE1mPTysU2KFNxojg4kuNkYYJz7ZoPt9L7Gbq",
  "key18": "PB9RDw9KEN9PcNaKC4emTBF9KPcP8ZZ3Kicf3NeBwFAW73WeA72LB7kcmzaEsp4aE4DxUPUxy4RGSFDbrTAFftc",
  "key19": "648uTzc4zB72PTfzmFjGcRRXVTEudJcDdZNAjD592oQLxpdZo4FNsyWWGWkhwEEzfYAXaMD6YL7jhKWVbB2RnT1W",
  "key20": "AWtoowRLojUsyBi8Adj4qV1dHgFG1p8vvoHiSZmXVYjTwSEbYfko2BHTekvSuPvTPsMA3ecFMqz8hUG7dZpJR9Y",
  "key21": "3KPx7GdEGtnRbPm6aDoLx4CaMohNGCURZJeRVM9DU9LHGaiT2FqRc3p92By5Uj1xvqnTMUvKpyVSvPA8Xr9N32yj",
  "key22": "3D4cXCWCtrMRJ71PGRr2zsg3YacTuAgDNs8Rei5KagVsfcjCiKX5wqV5VXJaYFSqDyRsMCcZbNZaJCzSttJbStGo",
  "key23": "4uLWZB7cruK5yEjmM3W77YG8huRH8teoLGAzaSHeCLSWoUYSZfqCoc4B9RuRyUHTgRDb2yRjfEZbnFSuFtGwf3nA",
  "key24": "YWPGR6cs2hNAH2wDXYakJqiFwN6f2WWB4cLpgsh6gaqezhnb4cPmu3D2A6oU5oquYuDZ9kpPbVncnxWtCamVC6N",
  "key25": "2w7a6tYvHnJDrZ3PPmQjn6WgU6iSegnnfh2X3FWWhEdCXAU8y3dwKt2ayr1VjRyjgaFmJBpjZaDz8shs9jDNdsFm",
  "key26": "2PKvyVwjqf4JrpvvFE9tnM9HAkFWH3GqUAbbV6AFZ7a7BRTpWPHNu5BpGiGSpCF2F5ADLD9Tvs7JDmp1QziXVZbd",
  "key27": "3PJgJUarqh8pyoNoVsncnWKe3i8WEvdNxv8sYTxLEtnU9SxRfbkYZdxY3BWzRbw4atHpmxY1qijBr3Q1XeamjxQW",
  "key28": "3SUHJHS9ds5DFkA6oNce2Verm93148VggNU4qEH2Wke24mg4tx8nFpy29wKXZmyA9CYm41vW75wSf11aVLhVubfv",
  "key29": "3pBZJQSJEb5PXjXBj5J17rRPoYCeP9rBwMRQpjeiHgH6rQVUERDxkDVJUDz8Xpg4FTakhtdhBrbYqbdMC8cGA8LL"
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
