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
    "32E3VhbCKv7tSv71H47FZXg9HAmrpp7i8qrDXmgwa8szGf6t9Qe8Cx5bBRpXRGoHLNipLai5WaYHScQEfwkjgnEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F93tvGz4jPCgtbpQBw5EsrHV2QMFREi9nEhUn35aEHQHR2mADscyJjv8qe4LiJqA6rMw4cJeqNJvdGjUVwhTyi3",
  "key1": "4XgyAqBtNx3uJi32XF31r8i1sxQ9XkV6KhfFSn9djTuYVwboYTX6W1n5Wvg3MckkJhywpVeuue8hPtp5p425kbHy",
  "key2": "5TCxE885Ka71X7KZdcvTR9tMUWMv5RUDMLU8cyqG7fDBNDFs84LZif5xHKCnwhfS4ZFRhYWJzDFqcv8UHMksqCqN",
  "key3": "3Bg67VeiuVSdMNBjGqCNhmoHPqVC7b9aKRjoe8geWB9N8rLuRyh4jFKh5NbRfukzGDgtpAFFXq6vbCFvhYnSTm6w",
  "key4": "4tagzcnuiCRqb6BU7zS5KC1moWTvD8eE8CJPhjZdyfcDv2CExBBECqg9U2YgUQhn1ta87SSDVFdoC2ynjwmHjo49",
  "key5": "stahL9QWsGPQBmqNcGgvye1rzyK9vfZbZG3iQxUKtanCsRDNS7KonBPbsHtRxG56npGQUvRAzXN8mFPabqCJBTr",
  "key6": "bzGJSKWs7sSpJHMA2ArC8RxyngkpSVk7EXBGcaS1UuqMKa81csoZuvxCzTzdVNZy7LjEy1VamghXrEEXoqcaUar",
  "key7": "5GdZEhXAQ68XFBeGmAhr4YfrUC5C6fGvwLCWgDmzXpfnLBpvtGZymp1ZrJBuEeTpnjo9nkF8wPNjqiL7zcACcs14",
  "key8": "3JRRNxH3y5qvoVyVsbrqnEUu7HQzYH8bcR3npa2gZaUwseBsLcGRZfkLgx3sAdxupACjq1ZpXo3KNrZn7Ac9XGNC",
  "key9": "2jsC8cCaXMjmx9f1jPTf8YmMXBWDggjKaFyNCaPWi9j5nmUqprge2R8VKWRui3DWkx9cyjQPT9E4rWaJDKgx4REu",
  "key10": "3wKPfVTGdaxmNtx7TTd8TR9mnbNMW4dw8dSLmgyRNAFCYT34cWWKXNJNQXatYvhzAMbKSdXeKQvBqxLa8bNgrVFD",
  "key11": "3RhaZ8cxMPYcRAureMNh5RGPpDgZLxfXD1vNs5ChNHs2w6ng2CTjwfQv1SSU6bxq8QEWg7LBaj8MqjtEVeaEBT2Q",
  "key12": "3tD45aM5b6DWz652FEsYxddE6TNytzpcaEcTUMKskuesTA9MDEzC7p2AoRoJaTGHSMAKpTs4DoWJqJDKTFFE9oLR",
  "key13": "amn2azSstz8mHKkwQGZ1PUYNGNi2K7ZoyWg3aqaCLVNg4H3R95fEYRKFhTL76Zum6rn3ZPcWGbbpyLQ95vScoL8",
  "key14": "3BKTUzeXgFSwu9U1tFTrE1eVgK1tvMhMUGG2AX6dh4FiJxxEUKFi5N98zN4Rv6LeRwJMgnHwJu1hsujrhBPjkXy2",
  "key15": "5NwhManyarJz53eb7P9uh2Xiq2kYvAxBmXS8NuXkjjDg6dxhLUauzAJDus96afdhVUSL6wmCvDLk7CPpah5e6eMQ",
  "key16": "55wZA1PCPtnhGtEoMkNG4KweS55S8BaGL6e9PncheKBmgDQ24uzUjFX74HR5n9m3hv6iCVs73SNn25Ejs325gSYS",
  "key17": "4rk7ALMqAdaMo93yNpZxDRXpXPCkur6TYLqEeXzwGKVReK4zgeqcNqHftjTYMDmXFkV2a87ia3kfifhoQLjeNHFq",
  "key18": "5u1eaDLwK76nr5J2fvoeSzsauNmw9f8yXTUgCsLFqn5jRdXrdvu2TypPqY4SYJp38NxkiTXc2PAVKA81Lfof1pm9",
  "key19": "2UzWZLRKY18gnSskf1AUFpbiWuXv4rF2JZZRZpVu7C39GcHnGaWCs3Awhiv4Bzm5qhXVQqLB8MWEBy48rHAwXmWe",
  "key20": "bXomwSnFhzHyD13M6qCCGtsAbJN7UzGYUvbRHPeKWR9vDZ74h5fgKY3rYwkVrUxzCAqY6D5BChBWox4Kb2XEQPK",
  "key21": "2pXf5zfPgdqzUGctLRtoZ5nBW3nZ7MbcDxnydJQyi9TNwvSjVBHjs4nxNkvrKRWJ1zoLwG7BAHYbeMocBEjkdsz2",
  "key22": "5tzEoZqMaiBEsHtxqtjwaMjEojRGiCrFoQsdLpYagwrRWdM5vahwUvuiUx2Je63JiVEjLBnAipZsKuLGAoG12aVB",
  "key23": "izt4zEAxHDgST48fEtSListpdYYmroXkacGHEVLJssr5N7kp4KqFyxhRzu87yKKnrAi3G3soxJYymqszHCSstK9",
  "key24": "4j8EW9xqLGJ3x1GaSR2nbWnHwx3jwe5TvkYVzCBnqHSF4xF2aFwkkEL8h4anHfeVNCHeZ62vggmgbqs54ModFSmX",
  "key25": "5VhZVoiDeb8WtTGMf85ru1gSnM7hj4xr7EFWnumqsrUgXwS5mLWCDTMZEJ4NgXwZt6dTSQAjcP3rP4kt7Dn6ayE",
  "key26": "3rLMxUKqaP1LfH5sWLejW6icRyAXCcaxhwZqbmvghz1eqJRVNbBUkSfWQywojhYaGGoyLhjUGpLD6GXSba2BMfXq",
  "key27": "5LVduns4JpdiHnAdJHmsnJWG51eTVyrPN9pCRdJ5dngn6Xri19nCxYSsv8EGwyPmsb53ZB6Xv4NaAXUqNyrnpSf8",
  "key28": "2UNLFyXRM42EijZBueUeMCp81pfZifXySXQD3E1gBBokvX5C81McGM8oMG1rZBv3uNJCrWqqVxL1GfyVNauUBCpH",
  "key29": "hLbBqACaetco3W3Yad9KmXj7RJKxkCMsh5xvFdo2cMPc4eVk9yhuYqTXvWu31NXGfZKaoV5FrQyuDvS18eaZoqh",
  "key30": "121SvYwNJuW1GAtTRG8b15u4gy6V7mFrcTL5yQSXdXutsu5BfsjGt1GrVFuK98EZ3vCrJWTA4d5PpqkkZb4WMJC6",
  "key31": "4TVg1x77cKHxZSewHi1w2SgeBp5NJHAxL4UD3WKm6XSuAv6u4X31KnF7vtNzyqhXrmYmJLL5qH2FXCAZrzFPuQd8",
  "key32": "2gZYRyYNW1QWtqVb5JuJXcZ61xLskU4axQdXeG14NzmSNPURWQt1ehxhbfQhoXUe9VvoHdMpSda7m4HLjjQvP1BR",
  "key33": "4NwssHWXaY4hrkMXmpgctNSgTztPwUNH48oiLkUFU9GRgjvs43WD4a1HvAxomVDREVV9ytnWMy6KHEpd74KWuQXG",
  "key34": "2YUDJ3oYpbtvvx1nSe6mDeVUYs2Y1x1E3NfpbrNWkCwEWKoG2LvJjh1e8B7esWBLhcDpfvcCg1UrhhMKN8xUAhHQ"
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
