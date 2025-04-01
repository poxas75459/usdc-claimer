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
    "4vvYqaZzkovAvSCQgTKtszJNv8ZmcEYHTNBkVzDP6sGGjESMgry5dgdA1d63DgrWGu1aA4LwQDpaGC5hkAR5DfW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GkvNAh3noxX4oDN1MZcnBKBZbwyxx944QufYmhDs4XWDDuuW6cFwq4QnR9d4Ch7V21STPL3NpeksCVZ89wQsciv",
  "key1": "3itBcb1vqhF5PCAeTJUyWG7xaZV529DyhoJzRjgLDGSS6rge6s2bevWAPkNqN68Rc2ejAwrXHY3uGqrC2UcoPPFv",
  "key2": "3s6CUidw1dv5tdFpzb5HuXDQBN9689ej9gcxf7LiCkJDnpKR7cZtH8hPSt1AuZXncuRSCq6BQBYHnW5SiL5CzH7G",
  "key3": "3qqQKcQMjgo6ZaC74Mv1ZrDWGBhfpiLLfsDvuZW2Us92y623Sy91XoGSibp998sUwewbif9xG7XAPt8TrCJRKxjg",
  "key4": "5EUoYFXtLeyf4GjeGiD8mUuvgXpf5sW9GnFBnPdch7HjGwXCgb8iD3JaFkZyidmsjqzPLB5Jc8nPr6UJXggp7Xy3",
  "key5": "QCJpjvudTGYpPoA2CkvBEoPL6ighj8Xth3mVtYKsTjW68hURH3M5ed3HPtAncZ5spBc2ADMYjmUJNJhJqWttLoQ",
  "key6": "2acD5FkDtTk6RhAheHQcgdWcKZRoTAp3UMTobJibm13WYo1MGLopGR2Q6kHqxMoG73mo7SVu4Tq4Md9CaC2abTQM",
  "key7": "9pRmANSfJLAKtKEgrSqZ4guYP4Lm4GFn268hpYgPRCpELbd58AM6QzFEDdKBNXs94QFetWo6HnpoJ91CE9V7iYm",
  "key8": "5eakYErAk1opuEmGYVxYeS5gNTBLYcWQiMB4kyEAWeqYnnknW6T4jiKeSk4xRGERq7GuuVfSoPtX5uvSuizh5cp2",
  "key9": "4VxEAw9bNHkQtqZCruMmKnURM9bkq6uxaTkM5J8izzpV3XzJszzG6tvCwPJ5bPbQeGJrDvTM7TjykxATJuCmfURY",
  "key10": "2miHHEWR1ZoFxt8yVoc4XeYTGLAP3cLgT4fS161gNhTdrYhLbmgPJE7svyjvPQfmoVvaDCrJa3TzA5bFZR1zYZ82",
  "key11": "23quS8WXHPpmi9kJ87Mui8gjuHPKmfw5UrPAwDPw4kLcC6jg62d1pNVRp3qc9jNG8agF3GuVgxShvvr1DLQz2dJ7",
  "key12": "4WYjyiX3qkyB4EAXApYHH6nRXYBfiNoPGgCkaQRDQpreGmrHPe7kjkfSFKk6hH4t1kxMMctzCU8pSRQm6Xpaz5kb",
  "key13": "3gLm6HxBu1CzHEB6hmNjbZRjYoHUgQHiH26Krg7vnCF39JAQ735n8jQfDEXwTJ5nvo5km127NeUgi5FgTncSXRne",
  "key14": "4SkbaN1gWhiasvQsVXBKDg1AABUhxFxPcsgLG9ftF1YXbKhDS4fhKCQjqPE9PLA7JtcuepWxXuHKHiDYR6eQCrwN",
  "key15": "o2WpEQio4TxJgkapHAWfby79N68S7ZPVpm3YRbkmELhHM6EcdTZHFin2u8eLKSXS2tmCgstwhjeyEb2NVNx9iJP",
  "key16": "49dYwRJjVDBqN5Szxaa5NMMxru1tgUiVJiBmoUgVqYxnRnxpDqtDKPxYQknHsoDMH9RU78nFvZRtBJRPwbRUn4B3",
  "key17": "4n1kzUaY6rtTtzzZm5XYUnR6nSLnMA1echgTkBtKpkYGdujRWySQzm3hF9wg2vHrP8ike7MAcyVpAw4sfoGiwiFF",
  "key18": "4cAgfSuHofQ88hRexs9VJKfYFbMcKnBph9WmFNoK2boXwsWqrZPw2yxYw2Cjy9KWepQPPeHreSczQrsUy7Ke56Ko",
  "key19": "4qoASpUHrDxhfiLXFfoGzPaHo3sx3Pa9SRt7T5M74c5ScT8qDTdUzp5GFqJADqAHVDiA19mpmsKev9FfPx9zhQKh",
  "key20": "3EJgSpaZdPNqxtS1MM46uaeCxoyCKv62jmTjTr45zeiSUHa3Vt9Jf5zdeRrfgLsdaAuttr5zn7DQCwHAPVZ8vUhV",
  "key21": "2gk7SETtJ2vHQKkfyooda9jFyQ3adQZLMVYyRauGMiE6dKJaQxdWg8qECiJpph8UoGvzt686BCSH4i5WekjstVLe",
  "key22": "25392H35kzsQKx7fz7Khoygp62XkCsN4XL5MQCpDdZXGb9AT534dsnLG5A3RMoMTL1bVKmAvp81LwuSEW3vzSQPk",
  "key23": "jbapQQ9b5NuRx7canEwVjRNZPfh2SdJv8t5Ubi6CcwK7QRXjsAxG5fVQ7qk38qqRuZeCTbixnBcBBK88WkQFXXV",
  "key24": "4bdb5JYthHvQexxuFrDqUncuCc31tfWFyVb6ZvGaEEG8wTRn56Ss7j5W7n5xnc1cqVvfmTkRmzb13Ad89RiYjRDZ",
  "key25": "3Zn2q56jak9ScNMLJZnhgkzCxiWvWFUCXvN5PQS632dULp51nkeCpj1Aa1JAoKQ7nWbFPMWhB3hkug4dgJfcy2Xo",
  "key26": "kuZFCxqqmx4D8yc1TBHyzTRTnXakmUWK142KXi8vWh3zH247sWb8WZo2KYrVK7C5YYoU5tFGK7HiCXMpUjKyKFu",
  "key27": "4Ywj6T74GCnX87PqnZ3ufDVUzUvrRSiqfjSXf6xoEbmzLkEEkYicuKNFQiZ1nQnXtTwweesnRs5zoWbxFQLeyS2S",
  "key28": "4e7PcQgAyH23o1uj3qHWwyCKwMBqKce2mxRsJp3hQoYB8kHJpWNmeKsCchFSUYcVLgqkSoXK71aK8eEXWUqw2zTF",
  "key29": "2MzB4JoWXhC2uoTLibNZzBi4Qro4VoTqGeLUhF9Br5QP6QsBdqgFgD9mzUV4WxV2yTWvSp8nLBvZ2tbkLMtP9z26",
  "key30": "3gyivByjnfwcqi6VfBDKTpyo8r5BNALyZoitBspzp3K6hw6ci54bRAdPhEA9CS3u64zzF7xC3dvfBZ1SpTh5E4Fh",
  "key31": "34QQtXPJp3LgmNkAwX2D6AQ38VKDoQ6HkwbN86FYJjpwRv5dUofabHzye6FXVALzBSVFCao6fQEN9M1Y4g5bAGnR",
  "key32": "5Hv3zrQyXkGkrh2QV1yaa8oKUJMJv3jELx23ctEhPaauSGbmBoiLVP8ktbKKJrihsiYyLiBQ7S6ASXNcznJyZAWP",
  "key33": "241WaX3eVgQ2UJPqURqGRJZ8guD8arvdJf2T91NCe7jNbFRCP7MJaoZm2ghQxam4dXaX2U5rPodJMCQeBENdCDyb",
  "key34": "Tfg6H5mT63HFdudSNN4apEPejqwsfA2Pvy1GCUAKtHzSg3hYtsFmMhG4MpizFxNQfVv8KBpNEc5EoT2wKnAnTjt",
  "key35": "4yakt8qftBGGsTHoRwJKEfR3z8cwb1J6h5qrgtjavWna73bVKdq9838t31ZkXRWzh2v5wFkPSUaKVxWBfiZbdNmm",
  "key36": "4GWFhpoEdHcpYvSoK2o4Jj3Luvaif1Kgir1nporCexJSgtdVrCSsNRkUSafodyUPkmv98GfPK846zfG3r1YcxRev",
  "key37": "4J4B1Re5MGHsddJMkhscH37r4pJK6EuqZS7USLbFoW4wvPwzBqxvvN6yiBkeFctjBxtAeqNgnwKUYXECGnigWPuu",
  "key38": "3vSvEq2PD9hQtkTQVwH1Xu1B9bCEuBQVg6nu1Tr78AifQYtgEnSzDVjkSnjAYV6CkQLWg6FxLQLsCA7C8auZSfP1",
  "key39": "9e6Vu944uh93LBupiuUtPvXFBuT7HFG4tSLDSTRnk2TN464wr1NJuAQPuWYepqy9jFuNqHbvyfWCvJmL72NwAzh",
  "key40": "ybsdCVPqh6fjLoWfDFKpC3Q2TqaHiS1vH6gFfKhW4NEgkac5AYjwxBseEmD3uUeHCe4jCdEajocVHwL8L1DYHsz",
  "key41": "63nhmU2vTczSAHo8uTKr1uzKkAtYiHR2gNXcKjWqsK8nMXv4YDQ4mfsXwwtu4bUyfH79hNmcZL7UMQAiohAgTt6A"
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
