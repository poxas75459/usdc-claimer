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
    "4Vaj5wuuGEPFCdZf3ck5NBSwq3MEyLS1YEgJk9E6py7fMNqv6Az4WcbAEQK2jGAJBHatH8yn3bDqLznGGeQLSAmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uVFnPfWwXxAgwEm9CKof5fV2GPTmGAhfD35FcJ59hvJCeME1XqjUQZQYiBaM5CV7FvgTccExtwYJK85czwa4Jyu",
  "key1": "3Se92KKZaXBBR9AJEwJgfdYFJ6VmaiPKCKqin9bbkUvzm2SNt277eXfw37PrWCiwBsabewCAa9um8E44mGQup2iA",
  "key2": "4dUwQ6YNMhR12QnJxxj7xrrCDRUPT4WgZ3vz6bQ9axNT4E1UKUmr7T2KD3Ssvnyf3sGzEZxHgfs7tkqECeXZHG9n",
  "key3": "65F1V2ibACNawXkLXBHDLRmWUYyE4GzR1hpTJQLPsd24pzaTf1utEPq7hGVyGPnxy3kcWetho8NzXSCHZ4AVcWx8",
  "key4": "47UNfkGdop1cKpK4miX3qNuN7eaF4rDD5KPZYidVTofBVukMJz9pKpDaZ5Xd3XXH9QJ2wUQhSAwtfJvBsXjUtxE5",
  "key5": "22TNWzvsy67kZrgUwKeMjcG9eBA7oR8FYiMCtBvTPp4qSq5GjhmSdXX6LdrhycMr4eqdHza69qVYBj82iF9cEr3g",
  "key6": "4th8PcAP2gAb8GthhtaCZNPch6ApxGRJP21aLeSYy3bdFWF5VH2zeVVrX8EFRq8MmroEzzVa1V3xdK9ejKJHX1RY",
  "key7": "YNDQwMPUNM7fC7z9zaaPvyhwC44DtUXfL99d6ZLt7r1WzXLJqwKABxydb1rKJktYcJ6M8AZadUdtVfBbKUQ928o",
  "key8": "2my4n42K62cNXCY1zwy3259aGSvwwsPgEVe2fDfxkKfdQSS2Rj558riJu3Ec6xzxhiA4zmskFBH5goviC9wPQd26",
  "key9": "5p3gm1JdLY6NtL65SCsAANg7ZK2jTuAYANST7qS76MtEVgiGJnYKG32pFcxJjM9ngCVBug2Maunm2bmswzXrJitd",
  "key10": "69tvPS4juSmiYerv9ouaLBgdDsTeVAKvXkSbmJidT3jVtiw76MWsx9UAc5NX9iAX3LyTsxzP1Fb9knnGRo9CDnK",
  "key11": "2UwhcsM5m1o38dkTJfBpBCDrgwmxN74hUMRP5J1T2m1u2w28XyCqRYRcRVXi6SUrpvvEcSUyBKR1c1G5DSnMdyn6",
  "key12": "3o79SgVERBQ7UYaxACQwVqGcMLFGYkr4paWqHxKW3UsTcpjjk9a2ioBG14PZU9KBTtmtLtG9443cJaSMHF2QPQc2",
  "key13": "47MQBuVMuPLMfEPDhLFk54zqmvWg5X8ugwWeZNkRWnfkoWbSvG3gtUBddEJQvP1yxXx933EKN8zVwwxKicBypTaP",
  "key14": "4hBN8pveck8N2zb2BC5MFvQDaM5z8R243rScoHjDckEStoU6EuH62ao3t3ZuPGAAEDRPCyUF48eEKsco8y4srEvj",
  "key15": "5wYNRGHUVhw9M4vS5kiUxbc4U1E95M4tgWRDZ37KYx2DhfpmGCxVWmmggSuA9mR8dGGxcUNm3UPuSs3rdxzBPrBv",
  "key16": "2BmwUTcXSBK2BA1ipKd1tUiSwTGs6Bn8kFgY4VbDE3oBzvrndtcDKfXftJnx5V25CiJGeKYUyZtg4Skh7ZbcCkL7",
  "key17": "585pBMXZTzwY3HvzhSZCxzc4RvsyRhbRJou6p1KinNoQLzvhKi3XWpruiUnaoMQUEA7LXwTpZChN66FjPBnhmeD9",
  "key18": "Fcd1LLZLgtuRWMGXzefvgzLAi4JG4s7HxtjPcASbkD6VBfWnGfCHe5XM6Y5tdcE18n5K2CcX5fhSfoGy3yEfR48",
  "key19": "4QBD5oPF78vAaBf65hjyyi6YnswDQ7KXTGP5pbHCE5NjB1Wg4oVjJ6peNyaivyEzpLaeznifMw96XWgtgEZEsMSQ",
  "key20": "3sBywQgrfUytGa1wbU8weVNJt8s7D7TiBsbZc5swtETAchVTXVb5ZQppmRRzQmqNBojJiUNibJSX51LztuypkWYM",
  "key21": "2tXYCPosdPbAmUNvHHGs2X7BXAhVS2eXZQutjGi2NBhmvu51YrMZxPk8WiathjmsAx2qDcTnH2qMqdWdCLaqVKTR",
  "key22": "5ut8W8mj53RYDEqoFcAUrDXJpHF6MTaEDTLgHxGK9jm8kJkMQVGR1fctWKA55JmLn7tG9oJwR76pFqktonpXHVeb",
  "key23": "2q4Gej5zRMiQJtL2HuPY5u37WCNzMLekKCc8PnmDWkYJpax37sHCSgMLqsAjxbMXU16Xn3pBbbcpdcY3ShasjmRb",
  "key24": "2h7fax236Ww3hLxBRBH7bb7Muk2FqviPHJxf7cJe3L8u8AJFBG3yHvbiHgwg5HJ3tfQhiQqN2X27eviiGZmUoJKw",
  "key25": "QF2nTks9k621vAzTwjaDZZNAGZ7fgSXmr4sEPWA8U8DdTstUcFaLXpzWeVrdNsLKafCEHgX5DpfZwztJUmngMKL",
  "key26": "4XfBg9oeDdKtfn4dis1PMCWegfNm1AkSGoA1yaKtZ82PYbct8g9EYAnYg1oVfFzLjxbQDZ3Lf77D2bHvMeAfZW9r",
  "key27": "5DaUanZFs9RDXWSAtVaEUtYTg38Lg1ArXmSruCMmcWgKYDavWCTBytmBtZj4cFJrKy3yWfuvrD1pvU7dqzZCsuE6",
  "key28": "5xYUspwh8xEdgQ3WtYVQTe8MTEshqJAtk47XMR1oRAfUPECRYo83KBpKqe6MeFFmDpmGy1LCGoqTeqtHsU4ag4uD",
  "key29": "tYc4Ce3Lfscp5SToxD4FfDJ3WEfFwW9sLa5dbiLEcR9jWfd592SvNvCuQkseBzeVDfp255N2PJxS3hyrM21L8CH",
  "key30": "2tpc2NbMqW2tUVAb35SapPFJq7o2JQxk4du4UA4DEonsCwWJWhYdg2RrVgAaU45v6zFLXrutfwU1wYXoqX5noCu6",
  "key31": "5YVjA529jsJG5ZkwbC3oBe769srHvbbDpqxESaghkdKojiN6PWgQajEpLtQLC6WXFUDZtKsidQ7UueADihPwXrED",
  "key32": "5KbHV7xbxXKpfgmsnELo8VQJSj6C5hKYBE6icvsgS1EUSVMwTHqkfa5TsiL6qYsQkVphYhDbbRCpAyMMUrDAD9Rh",
  "key33": "2ZW7toUjvCEhadr9hZUWwUNehedSUu3fPxGZ8KJyrA5ph8PkGizoqmPQQJgNmS2pmf5B3MCV3b9pAbfEjMxfoert",
  "key34": "2oqJq1nh7oVodwh61QB2Gi83grZECtGwcL9mPvL27KK2df24hPpR12VFMNeXeA68yaTgvS5AAA6odsfHcEAXBe1J",
  "key35": "2tAbwipzEYxA9685J4DeinkaxkgzZA6dv3SgRj7py72EA2DQD5QCp3FLqUJfrQWhVkv98FMTrK1iYrwbYZYQTYhL",
  "key36": "5iEhLa3yufKqC4FCXTyh3csUyzS4v6iYZZUz1DkSvhXdPJYjGjrqBiWmDcqk5cxd3oHeVxdcTjj427946YvSD6iV",
  "key37": "4KcWAcKaFuf3NwSk4joMd3KLWuLgLb534N4EWg1XuiFpB4o5sm9oqF2HD1NY1R73aTasg4x9mt1mGbf8ZwdTsSFH",
  "key38": "2p1vocp4o2UG3Wb8RuEBYwCXiupn8WpKX8Ls8AvoN6BEaa7BnTQUnkSYzp3ZSe6x5dK3Qnad9Kr7v7BWoeVhJVVy",
  "key39": "39TqU4LJJBHYDaupivHbLuqVzmy9x2bizLfFQvX7jxYPNQKKHtCHtyA3jfNmV9wroiBE294UWfDJhFsANFfqA8kr"
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
