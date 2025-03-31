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
    "2gvoKrKKdvC4UNcTG6znpK5a6GaSPhEtra2tWTafsC6vMRdrYJsE66qcoECUr2tMemmFQqE749h6x5LSdEGkyVqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a1MVc8zQs59curaYYPtvmzmUisL85v3YiTMsMWq2LojA6r7gwGr9pvAnfvXUpVbTaPFSpbV4vxmUzz5mgWuAzet",
  "key1": "c6KPkpkdoiga86dJ6M91R7Sy5RjhD5VdzXKCEJim3ZtQ9tsDz78Vedcp5aEv5RXJ7vMGXyNLfqRXRnqwTv19gfA",
  "key2": "RvGf9jrdHB7iMbD7spYY5QUsq4HNNjf16yyJ33tCtrD8t9PmnHJCq1VVTcxVW4HXkeZ6GtxAB7zm9RwWdKztzKi",
  "key3": "iJzmruutYL525o6qWDHMFLXy9CRjsfECaWcVKZjDzjtygf64pznLsyVY5TD5G7sBmjWcvACDa74Rdd8QAJJ3zYx",
  "key4": "5tkCmi5bsx6HGEXs9sy8XpWweTEUfJ7f3UiCFTwbPnD626NVMpWv6GG1Z9onozPu2xYL4ci9991UBNm34xtfAt7o",
  "key5": "5stjXTp4todmKTZhTqy1xtctuQqgUxezG1THL4XzuBpZ9mDJWvyAjV28rtz1uvWzxVfpC9K7iYkSJPQewCKJvdBG",
  "key6": "7mXEoyuk7zVgbffso1hANoatcFrqADMCXasK1KFP7duKuzerQ7enzkyBAkbPfc6QDRdWssQrXQpFhuiPeP1E8YY",
  "key7": "bU77TtAgXK83Hzw1cPg4yQhpzziFgupKo2i1vZoWWBEDk6CoasTG6E38eyRCpT81yDNVByjUodcV36aeekBeyxU",
  "key8": "4UFVSLCtLjZuRkUx4Ng89cGJrYQMB71B549X11Nk4gZpMWZAtR41csGM9zBfPcvHZJwHhARt6G6kWURq8Ftbq1q9",
  "key9": "4JTyXiZpHfvGmBtNYVwcNDk3j3sBsa6hfoCemWqxDsK8ZvcPWdhxzyVT8WGeA7ZYb6frgx8GqgaDN4WWroLECUUx",
  "key10": "5LQZdVDgACn8PBm4BbrCCK2aTc1t2NggVwXeUZhJL385hb7NN4st7eybDoGx11igxXfwrB3RTtvxyRnvMspL4J8o",
  "key11": "5frkzi6LFx9npjBskVyYudpA4LN9LNmNxNtt3AVEZKCBWpJEp3HosSnELPcR9aYAdnhfEYHvSHuSeJeSTD3kPuou",
  "key12": "2P1saqeGB7hS6Ue1eoSA4L4YsjTKHEDfhtAi2FSV9rtyQLHuF94Di35gAh6fDwPbB7BA8E8Q1dR4A5qVhBEL8j9Q",
  "key13": "e8sXCeiffejiVGWXKBH9LDzt7YL6dh8RoyAmDwd2ffhHTDFPpdiVUwZtLzficfyJBtzGQ4bEZE6NM61MvAgt2Uw",
  "key14": "2EsYpatKi5CzS2sDiKjUHcA24KrRRkFKrhfYm7U5zt6KL6wciw41eY8boPN8ywen546Qfuo6RCR6sFe2ZJb2jKJq",
  "key15": "5dgDN4v153xX6whDe4qR7Vj1qAwXYBJXmf4jc1Q8stASt7FGyLPYfj71J1nYuPX2iuFNpGf8JhSPTXLLJBeEHWEb",
  "key16": "5VncrBeKNdQ5Cj8zD4bwk6y6CKkJMXHyKSq8AVSRFr6gxKvunfBVgZZ9cNsk6wDyfYrKwcGkiBJ3CeRc8TgVtJ1M",
  "key17": "2s4P953BrR96EptSVheVSw18QKSXvyjisyKcrYqTwrHMYUnm3qnPdp5n3u4RG2uQKgCrr764R7TLW9qiD1o49EAw",
  "key18": "kDYuu6rLcvXsrSpeLcGZqxwfmECjCKSQZsreCVMTaYkNu48anjBqRQMzb7xsXKoux1Wkot7UrZi787XVyyB4Hqo",
  "key19": "5GrwmUB2W83EEZqH7iBw6hgoLWs1sjN7JtdvGnnpPbeFeQvyjPA6er16ikNFXEcgTdeZA97zJVbs4eEKjVrjbzTb",
  "key20": "25KiATt1sh1jGx4RaLLsY7HRMNuz4yVAcNvWSkeL9h7w3Ac3HxzYiKGCDXv5qPJdGXjxwytQkifiSb57w2rGHARG",
  "key21": "5w7Qick3mLRwzuH26W2ioXwkoH1R5mffbgbrSCWb47wmU57Q66E3r6UnfdJqPJsCZ6SybvU5jdZAPzWf3vjRtJV4",
  "key22": "5RFbmTKL99LqKqYyAKsnXQWPrApL2iZ26JFPBCzzomy6RHSuicCAMtSZyurgi3F56w4y64RrzYrxzQobKXUvt35P",
  "key23": "DaGmBQnf7TyC6oQ4XCtCbDyv8mDhuzan4raqC5F56oRWhh3Hp6uy8yYMuzizqpwGzyC8jNx8LcD7ZdbC4PjPJYR",
  "key24": "43bJmSS1tA8UhwmDopwduW2eyJKGUFD1K6s8dBpp2hBeAjsCSSoELFYuBw5KM2o3KAztzx48MiSdq7CEMVtRwv3V",
  "key25": "662v44XPpvMJMF9R4eQBWmMjtfNpqLeVdZWYko8mKGaNTejPS2wvAqDb9hGwWX2fzEPGZ4z8UVmvy3mAMLaAsdXC",
  "key26": "3rjTYfNgYn48hdJHiFHyY6WTNJG3nMjU7Tc881CJakhN2KA7FtzzmkjxKSLAk5CpVgJ8uHf2HGsHcYg1DNb18dEE",
  "key27": "oryJxMjCafvvoKiCkp1jcmTLf7cuk1974jXXoivtgMYewsCjK4wdCNXWbKkzNqWwFxJz9FoVaUfBCdbevpJertF",
  "key28": "589AfCMt1KTqc4asojUpt4DzxNj5utKipee1c5nvoWnLbc8XTDUh35AdXG7Efe5XMQZw45E3eVFdfi7Uvjracj68",
  "key29": "2g54mEF5NJTBvo2Hrbef29ABvTAiyQLoAiB1d52a4DEXQMRFZso66NCdoopRKxTov4CBHorQKoh7KnyMvWni8msV",
  "key30": "3mdB5vbeFZenxk9ytBqmRSkfVaQWGp7yqPPEuTMAy6ddRBpv8H4LtZRfmGEsdNHkpXV2DVht19PjAi3rT2GNTRwj",
  "key31": "55ik8SPaeMaHKijMNzrPKYjCx4MwV9AimHFzoUPytiNVSXVMRFX5xHPWdV7HaEaVsDVZHWoiLGSMLRYEEwyvJJYz"
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
