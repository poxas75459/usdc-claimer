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
    "54qUNA3iLjtqkzHcZk7h4ZxvzrydSMpiycu4jSbDn1B4y5oRdzyCXdr1NH4A7X3Su7giy4MfeFyVFL8HWAoFEDx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BmD6huPqsDMu1xywMrTpYhy1ox3Ew66NVVFgCMSrMGT1AUXRVYjRdJKXufeC38xR8SvTTBB6fo28cx2jmSC2sbG",
  "key1": "2uk1gfrg2AwoezWFJUcs7a7fQkvBQN4QuBayzxkLUzKxEG9GjLrkR6vrGRAJcCeRXMK7LRQjvLocuaDCN44272gn",
  "key2": "qCkYFbEVeaWUKGpCQu2WJk57hU6WJKab5EDoXk99W9AzCgBt2ndX9x5q62EAmmTXjT73HRw4dhPEKd4KZZKXXJk",
  "key3": "3FcZekkNAY4CyMuQvW4dHq1Y4npPaAV27BV4SzNt8VJoaTUoiMgkgVgyrZTdpqBcTvkHh3QxtHMUNsAFBYuoF6jL",
  "key4": "3iRFUBJDFk4buV19my3FfLTbSkVJULkGMYYvhcSC2TauNTWGzzRKWbDn9Anw2hEdEZtgoYFgKamJD4D2CZ9eZgPH",
  "key5": "2MXy2VGVfmSB3gx8mDJ7jP519wRwxHqDTbUzw8f5wXshEtQRoMTmZUui4WzFtwtjsLTooWUxdLCJRdbHX4ziTMKx",
  "key6": "3sj5U1iayTnQcv6mKDAT8mDP8BD1MBfwoEDGBbjzd6HuYHqBWzPAkbGoScNawHQRHBfTUkkGL3Raswnburs599tT",
  "key7": "2zCNKgASwsxp7yj2DEJwwmKJcQsJwGDBYwUs5CBrVubekdnM8Nvb7aH1nNQnj4fBh7dtfTuXNwKtEKkgpwjUNkJa",
  "key8": "3NVoRsgrRg82tjRJgqAmXCviFVDvgW9xmgYVS32Ejrgk3pDjTDaXzLRQh2M13tK1F1xPtxacVmSgCDaSpMR7YvZj",
  "key9": "21SVJGTpCHsLyvaRu8dzeF3ePL1ohUjgUZiRdMrfka3YUHvBzJ5XkHhNGieSmkoox16R6UwRogvrfyLNUUUjedq9",
  "key10": "riL8hWCM7Sm8GgvVAjraYSiiqdFKSmnFDNyBNCq6euY98NswXASAGAH9xKTgwaWtm6dz6wKavFMe6TJsD57NPV8",
  "key11": "2N9KVNiDXWfQTa6nVJLuykyXaLPYYsEgXd43ya1Hf9muZpVb3hxjn6tj2KAtbCmPq66aZ7EbHgM8K3SbCp8PMTVK",
  "key12": "5YeVEUyuH57XzhqU9wQK5wEaADhXxxkVPNkamSwWErAEyfsDpUC2umGgXj9nd4gYrtWsDURSJCY9pBQ5Aqmz4BYQ",
  "key13": "5tq78PHtCeY5zVh9nnywRu32rurX89PQxcSo457UAaFERBz6vKDoqpqBhBFWkTFHhoUFQ8RPg1bb46jYSi4ksj3M",
  "key14": "5B7WMSJw7UqeuurvGG9c7WW2mrZivAbDfADbchCQvXwDfJRinHvyMxnH3B7B2xLRrMdQE2gpN3gx47GmqSkviu5X",
  "key15": "gXFciDw9KrhTpUvnhfjrcUKkTeEtpW2ceWWCWFFAUr7ZkaKjCtKaUKZNGnXpq3imentVdVT2kYnymv8LeDhhFLm",
  "key16": "2RCS47SKtrYzfEsFo5rfJQwLphjTmJ5YqCDqA5k9ttC72ZFvsJa3fy3E2q3PhdShnG9sZPZ7DEdjAjTWHDMVeN7E",
  "key17": "3Ckp6W3esfxBv2LDe7yGMS8Tj2zGegb8CD6Ev1ckVvozd8mupg1fQfPBKN9kZ7tAyhziZiZKSvJcjYBw4xvFADx1",
  "key18": "63bveX8rvM7aifezeqsFyF5Vm4hNFFUtZRxbA6JkbbDeuM9H38Jb7kGDmwrWKfzqHRAvqRSKLBEGyKvq5fqFpPqA",
  "key19": "JUwWZjR6zzscZKgYeR9hvpjW2TC4njnBTAXzqKprP1uzEGMZG6HYkXqcVJ7wTqK2nDxj9xqpyoNEmEmhyobubxz",
  "key20": "4P8BcavrqnH7u5eR7xxBL5XxKMAowzYhDDfKaq8qxmpky49zJGekZh4SZby5DoHEwr7ciKQFT7XUtB4PPBCq4Lpw",
  "key21": "5hJaMBi7VbZEG2eFpQJCvgJr9Cy7gtrAaLqCq9JnCZEpjFTmCfzpkc4nZampbkt2PoQ85ptE2pD3BgKZbAyZVBKP",
  "key22": "4niKXuiVJpPFknNoqXEFgV2SWzTi5uZEKTTtNRRnCevoqGxRTvzDsTWD6iUZZuY34RXobocS5E2N4caxucY6TRtU",
  "key23": "2MMRgi9FXjTaxbdzc1vtUtaj2XarH16yvwN25QZZaRgbD2BwKzLR4deMTLL6tjCuC6qiBDcUeoF3RJo1e8VRF5We",
  "key24": "5VY71oaxpc45zRBX4wEkP6tTKv4B1t3XxShzeyiwNrPF7cG2ayn6M1mshVcNgV28LBRbdaUxdFTGjxcdPXGWrFdg",
  "key25": "4JpHyvaJ9sKjQJAPSHBD6K779QXtZ3kp2n48w3XG1rXSxsksaWBxQKRfiTP21Rp7h8oKwBidaxmuw1vMGc7aJn5U",
  "key26": "TGyqkfQviwFoAbunubr2kLaQqw6gm4gmzY9npn15zhysUSYe9qTUvcKNXonmj73oUPWLqrqkvuJFwhnb9ju4zoh",
  "key27": "5tveibhfzCAddss5rdZWh91gLnZSkbmMk4LfdrX6cn1D3MAveN4vZchwfaa32c3XNoMPgRdLGfe5eebvqibCG2S1",
  "key28": "ykiham6xCocXUpL8HP4vwQwZrnCCQouJ9jWKgD7bhLZ7UNkKsVzdU4VD2tN7kWFSdTVV4Z3Y34KQpAsJo4bqz3j",
  "key29": "9mxCtcVfEjhaYfj63dgwjCTXK5sXCJrUQhuBG4w4W5T9XWJUByu99YPPQ3qTqeECnndRouqsQSQivGDZCgFFrWF",
  "key30": "35zDgjFweBd3NEf1T8FMyXEB6YF5dsEaG4cY2Kc1nTQ92NXTpYPHarwUe9VyAZQgw1MJoswpowo4SMfA8W1cEESz",
  "key31": "2ymA97NPyfLYTdgFbDQJWpAKiwyKLXSRbzMW1sPRd7sefvpRsJMgv5R2HpSKLEe8KNxgyKfAsTFsQoU1zasUtugi"
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
