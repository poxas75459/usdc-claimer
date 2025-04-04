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
    "64ap5knMdkQkhwaydYZvbnd1Hvx3LD5LtoJ5n6X5iHtAN5dAvUjFvzMbdxtFULs6ANVzvxoM9nQuETRPZv1EQww1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M6xdMXKhdUNxK2FFB8LyH8UuWH84Lj83ootj6ZiPP8se3CuiZzXPjU5f9zjoghSx4Qh2Dh154vBSULYPiWos6W",
  "key1": "3CxxwYfbJ8eeC8drwT4V71Kc9Uxro1pmP3gMcgsDbDbvVY21JKahjb3KuLD3sV87gVCn9WS5JKhBYXNkWfR7uUuJ",
  "key2": "4UCJfW6j1VLehp6fhaTTojKHw6v2AicR6t5BBxusq9cjJ3apjRyjcCPPXu1gJyprFYcvroyvGxQFhYK8eA6XpsRE",
  "key3": "3B3xZ3JdzGp2CdWDaw4eLEXcSuJcqXenRZAphtS672cSVTbztEEJF8BYA13W66Z8S2om6AAuKLtDtXKKqnHGpCri",
  "key4": "2A33QQNtWCeN7oXbCrS45Ly6EPmT4BT1zPMYy4fJtkgM7B1xpDN6U76H5YyarQZ6vppLzSb7kJGGnCLtT7gLxDrX",
  "key5": "5hkorW4UpRoZmNS9KiS5ZqmD5Mwr3sDRTEFuCaTE3KLMV1BLdituueAHqNXgStZ1uDNDrozaRt7pPEjsCYtHccsd",
  "key6": "4KBUSMYgsdoGwzvGGgKpTLD2RfQKZ1aA2QuPVCXLrF2ohsZs9bSug6ubJQemDeZb5EeRVtAAJToA4ZEPTuWTTkYv",
  "key7": "5ytkdXdzeWHYe1evhxfG4brD3X8tKMfhT9GLhUTfRwwwcV1kWh9me7aSj3JjNfiSvxXJdNvud2JuyC8VqWHmiS1K",
  "key8": "4Fgc6sSaWZo5Hr9NzjFozehsYS84k29sQPTQsk1rJGVdMgBamtvpfF1fvm8gQQuPAeCTvGiSLXbddfJVZhD7bcdn",
  "key9": "JphJ1ZQWqXuaGtbQGKhW64xRh4hvt7hAaVHtC3RJt4oJc8e2uGzUHAJ9PnnXNRFpiXF1uPCp4nb8LKiLXUXTDbF",
  "key10": "4Hq4UwHSwyaNJQJ2HbvBdCFnoHzBZgjkGhMKttNS9Hx7skRbUsMCrmcsvDDevU9nSzv4L738sKb1EJ4KWEt2PLNz",
  "key11": "4KZqqoWFNYFopb7WULVKSkMrMiMfMqjzEAP2QutarfZtH7oEBApM7Hx85RAhCjYwzHAwi6wBZ3qvGdEoDU6FGksn",
  "key12": "4K6ZMM4d4bWSjUUPiCgoN8cqNryteghJPDNodH6SXvKn2MWGyYuESctNNmy73p7tKonZ9wxREPKQHf8nXzfwPMae",
  "key13": "36wk97ktoUgd5eG15JijZ6L2tqxRHakYMpPV4v5pRtXGMyCXbRsZqSf8cSd3ZRBTPmA3SvpKSPj229xKjKZuarQL",
  "key14": "2PK3pep7KG5v1KmvG4VuaNS59iqCipVDBGsX2U7LbJjkC4ZJfCfCe5RBj8vRGtQpz3nyQ8JEudzPRZ98oU6Mb2uz",
  "key15": "42DEti7yh6xB25ND6ufStJ7sjaHUvvH68RQQT9Xd4BwPaerFms78q32QyATg3Dxz1EvouhKkX5v2k4W3De739zc",
  "key16": "4VjcP3g3GAvZPavcqD8YQTJVF82vhUSuMfz2spDkkq6fRdqTC6nmkHUC2wbV7DDYTBFgSpeWQvrpM373bP986vvM",
  "key17": "3dQtvVhyzUm4HZuGxy5HZPzDBXaEUZbmUuEv5w2SFjGjKA6JXUSJKLrmENLsB832BT77dLxaPYNyhoPQ85ffXGdE",
  "key18": "5QCM4XzwVnWqcdrxtSffWFV8uiHurkNJiPGiiMaY3q1D4sPzzJCiEKEREwUnMCUUhKgkWbZsK2WgadUp2e8VLGuA",
  "key19": "5UNmaDHbhUPPFjUtMaPUegDDhgWwUpZGbtfp9VgA2HEKa4Qs6XFZSQaJbYL7vKxj5Ym2n5wLkkEipLxvtdrmx9Ca",
  "key20": "5F61tHexAoX2MjCrfwBrWqBRuoL6P9jfdpB8fjNB7K6VuBhPPMXQs2fcz16oHTXP1DKaaATZT3dWFhVbyQd82fAG",
  "key21": "32U5ijtebvTh69HiWPNB7cRtq5sgKHtPk1vsH5y8Gwd9vsZynukvY77xcfu9CjAw5bucHh5mCHBosFFKX18apoSB",
  "key22": "4qX85X1sc7VkXaqat12p5FsuporFogdN9GN1fsL5feDtHDvMYBnkqV8rX7FRjfD7D7FeGKiHJrMhWnmGwoYu7WDJ",
  "key23": "4NLBMvai53fWuXahrgH8wsR3tonCTBKTADnrfi1SCVY46iAZamuf9eyazGsrKfRcUDnhE9GuuaUjNHHEs7JDoEYw",
  "key24": "5N9tiUJxYyyAFbGjLvc6YzThi3ysMoRUuAvzF2gWqxXNGF8Z19ptU6DSi2oJ9Fx6PYdTBszV7LrcLj48nLdLAz65",
  "key25": "5TJLYUw2YN629xp5fPNSNucGKeCk1zCCjLRjCBZbhiYZTnRvmx3Wv6EXSXqKGn2eJh6uFMVEJ8A3nFxo4cwpUfMH",
  "key26": "2UUfPJFSjonSp2DEYeVYo4eaEvpgC65uETxacYvaX3PopZxUzKKcjvpF2dhcewNVW9ehN6c8BdoUSoFSyX3FGTWN",
  "key27": "2GeDEtR3wmLyhdFrLpU3KyuVJpXdLqHby42ACzyUAaLxCspacC5x1HGHq1u5FVwgKz9dBKaZ5mbs7gGaj42y13sA",
  "key28": "1Z58NyhaEMAxn6xDNKmAE2A5d7YYecE99K7KZAJLzCgS3pBLmty4K2DN34JB2mDLqE5dDnu1jZDo71ZW1ThKkd1",
  "key29": "4JsDpRJtKTa1azybCWqEvJ9UehQrXX7XcBetByxJcDYjiCP1dQCmot1M3GqmJooY51dnJbASjiosd3By2648VxRW",
  "key30": "rt7NurRhKLJjjwgriCh58pAB9kJZ6zxgMMCFUnkPjYW5ncPhYp4knGBo2crkSgwaD3aceCd7x3psQCPmCLZmSNv",
  "key31": "2zXgySNzjKuLm4usye9MiKAmT7g1zs8Q6hNbhrJ5N1TmXVYdY2yqZdUgJdgY56hyzhpU5RMNMazsCcowjs82NKM7",
  "key32": "2ujfERBqC7rZhv1nTjxrggCg35AyYhreRQX1L27wspeKn9dYfFgszp9i5cLfoZs2Fh517KuZakHmgWVVJbcqYB9r",
  "key33": "5dgkST6nKjeXcWyQ3ejgsJM91c3dvkawSxLpym5HcKrzDVsL67wfhWNWRfMyQtEA3yqAugAJsW2SoeWFjbw43KdF",
  "key34": "29B9eyMCLkYJSfRqscdbvoksNRQ1XJiMe4prns35YbPDMADPKxf58Nsdo55yyZSQGfFz38V38LpAfyvami49ug3J"
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
