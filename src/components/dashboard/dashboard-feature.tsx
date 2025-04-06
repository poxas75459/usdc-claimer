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
    "374Wa5pccnMF9W4DzCuMTpeEQRzA2T2pqT2jPWsgm8RzUGHBPZwgiBVmrufXpSrJKfN5HUFHTMYZ2YSH3temWR8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4efaqNx2NvHJhDzX5pvVcmsZG5H7HpjimXmvtwaboUfNV7NegmSf2ffZPw45Dvx6tiKKxGGGwThc8ZSjD41H3RHh",
  "key1": "5SRE1zAyoyfgc8gDpBWMR47xokPLvoUfBTDuHAiu2sCnhopSqvHENApXriCAKVYhMQ76CEFC9z4rxccdNmmrQZnu",
  "key2": "WSTk1r6pLfpZErPeBHku45vMpeyCLRzBTDoyknFjpsfoVWejyj3ib29tCgBR1Nhu8KBU5N4VxyuS281TRxi8j4E",
  "key3": "2T14hDjF5mXD3iABQVPapk9HiW7UjyAkdwtw6BWARby21Q8QQ1bQ8w2iBFXX9skkPvjynbvMvUPKwBwZmnKHDzst",
  "key4": "621YwZvh2WdfPJeqymdXrsbjoeX928xzkqBfqNm9MskpW6YURAgBWTZLfbjXHpTNGwwJqZUyETXK9UfKuJipyyQo",
  "key5": "4DQe7RNRhmcR7ET3B33wZrvb6xTE47XfAQuN4PiMLdcnfucejn3Hgs3Rjr16TZQ3tdGnP3HzzgALvrtDKtjVkzhh",
  "key6": "JEfWKQhv3LF2MxvbxnuzCcjjrfLWNtcuVv1xhJfduyPwH18xs6iQg5KpeLgQM9T4kuxn2fWHYw24GtqisUCjTry",
  "key7": "AiyKEJ9Y6aNrd2nEQeGsgwMmeUJpztjgwcpzVosKuwe8V6NiZZaBo3zwenETzVRMMrPwmSwYijumJCzqjZnAEDj",
  "key8": "5axzBo1LGzex9Zrtmr6BY9PACqEgfGwdwrMGvcmdvvde9vMt8nYy6yQT9iGE9W6wAZgPxkVsVqNvJQuQrHo8wPzU",
  "key9": "3bcHntBLZEe1DTfvvBE45QpgT7n5cEeCN5upivbVPYYWNFbpGny4DLBwBSYDaGHnYVgqcqB5cvRXRj9sLdkWrhc2",
  "key10": "3ckmn5sQ7hYUQHZHwz25dEc29du35WH1doDsu3BXKzfm8sRRm3K3zJzefMEJnd3ogeR2TRP6Qkiz6uhsEiD1qW17",
  "key11": "3iUxByVEyDpdcqxGC3F1x9PZcitsyBmsdVKcju3SzsGj9LiZi93nXLKSekLm2u2SA324jPVUsRWBaxLFmYDkGoec",
  "key12": "nPCTdwasffu8sr2TzuFywCzEK2TpfGNmLwK8KnKzP3CDhH83UMJesFzYZ3Rcaf9aagujY9SbNRxzXHqrAxuqAZZ",
  "key13": "2ShKU4YpDuDYbk21TMg7cgjsQL81iyGZEkAK69hSeWygLQN3EYCJr8QrczvWQwwtnWo8n92EbiLG7dTekkkEopJy",
  "key14": "4UkeTECk88ViVmaNsKG12sEj2MjkP5zo8KU27aUjqafme5yKXFVBW688TSQfW9sPSymQxamprZk7auVoMU8BYbPp",
  "key15": "3h5AQAM4B9QYWyuREhkNUmwZP8rDjLn2dtNcZuoUZSQqYEs1ZD3iyuoCs8GE8AS7yWmYxZvPGMuFbf2EjgYTjLCw",
  "key16": "3uLtrAoT1c9Dfmzh8NvwPXAk4nWZKHer1BfrxcpzhTmHDgeZ7DCaYLmi4H1iXYZqw2LRubdTpHfZzJpYks8c3gZh",
  "key17": "5zmdSs9wJC1TwRq8pqSfcEkHMPXHXaYzinbUTyVE2a1kFzvLUQ4AKgSxfLftqkFjGhSEn6im9xTKdL4pJK3ZQ4Cd",
  "key18": "ryCNNFCR4QLGyR1HsnZGzmPuTFuUE1T6RgG3tjNbh7iZoy2pXRKELj55VykQV5hTtK3uJpA4YNWbGG9omhvfQgX",
  "key19": "4Mg2PzBiPtGKGrfbpU9Z4rVRMvcq5YqNjhY7gvCpnzE3WcnxphFbPJVLJXujjdTFt6eWFyHRLUkJWBvLN47TJMJ9",
  "key20": "5aCekLAcyCpEfeWBmPqBs677PefszS4ar2khbf53uwEknqW8M4CiMTxSEF8epL5N1v98Rw6xxoSE1yus3ZXGAc8j",
  "key21": "TTLGTMqKe5moKR72ZnxbWoHVEw7o3BxvEHzMFRBHZ699q4k9GWpQeXmn9ck7xwUrYqhgL34EpXggjCXzLkCmdFS",
  "key22": "18iqxYDU7sXisuMzvgTkCQz9qXbC5YGDtXrawc4UuptQGfnADxwiMYyEBFybFzQWJgnE4PCnDpASQ9Gw2sAvXz2",
  "key23": "5CwDvvq2DoVMe5MUA92P2Q1zzMBobNUhCKRpS2LfridDQjLGP4Q9jvCAwWCy5fWA9gWJ32bRivqgy7RVTzsbRetH",
  "key24": "4FNVagNmx1AZpnmyhSdHdJykYLKBcqqb71N62qiJ1jq86P1Qyh7QkWqGY69DVYpXAJoQg661icM2GSdG2j8Hdj6X",
  "key25": "28LP6xcfmAeoNJ1exRAhx41hYkJuh9nd8KFfskqtn8nhCQHVMDyFyrzumACyG3RMjp26t9unfwC9rNTZ5EcXMPwg",
  "key26": "215AEGZ2fLGSe71JWjYyDSS2WxFfzFRKmcgkEUhVYjjvaTEFWWYuna1eekKABzeS6B4Ebv8XYN13Qbns5HD5vjG8",
  "key27": "5irVDVX7nmLWro36Uzj85ExXqF7PNuz5oerfctfcbMvKQfpyFbPrQC57S616Z3mrxER1f6kafC55TgBtNoUgSUrT",
  "key28": "4A5dKrUqayq7FT3eMG4u8Re2HCjK9Cbq3MXs3nCtHbfpGythmQxUndrY6dh4SrDYuL5Zi1Lw3rAXiu8unrEy2zHb",
  "key29": "2dQfsejgBXCqU6bDoUVX83ZXTJ3xu62kqHkn153KZb3rxzYdeGXTiqfyTjSPazn15pFtzhpZ1GfKF9ArAePFUhd2",
  "key30": "4KUR3iZw8Te6aUq8Dm1ywB49Nq89grznQGBgDzxX2fvpCLTF3y6DSApwAPLchsn6VA135qEvnWupSCoWdRaUK45Y",
  "key31": "2hahWwpxc6uN8og9RmGY8Ci2Z4rPXV1gGWPyF4rBFWDqNeWg7RpA3LkB3jFZZqekiDDKisC8t49tCg86m9bwNc8p",
  "key32": "xG2qhBjyKJFN1FGqj6ffgdg7TTd3Qw1PYDwc7CkVryctKbAFGWKMQEE97oWcNFXjqPt2A3Z8QNqGYY5Jvf59TpQ",
  "key33": "2rEaJ26yLgJmfm3ue2zA5B1xNM6AdByc2ehN55zwtFJdvBLfCsDNHjdye9ZkszF9tesuPShDXoFtRNCx7WpGTeN6",
  "key34": "5A6ALi6MLxAaqCihFgR2dXcKQk4KQTRCmZ3EJd79tH3zga6669CFYcBkC5fma3x4bGHW8fiN32emwCSeFUuQ2rGR",
  "key35": "5R1H781UW4k3Q4nGMwpoJF4qq8i7KPx5qfWq8MkMxvKhp4UJC36JXhV1qmvyj1M9rCXxuZU3KiGHKo534yWtaif6",
  "key36": "5KWbDuhzauMe9GVjNzEZyRCWpuCHdzNHLF551pDfZdPSwZWse8f27ZBFkELpVYfYGwNxRNojZS3hg8K369kzPuEm",
  "key37": "2VAFE28LwjcTgf5FvkEC3VxTwksnDgY5uxdDRkHDeA7CHhTxMqtoZgtcMRymirNwrFcCU8suadisJKAnCQdNwb2q",
  "key38": "2TFjWZp5YJnpN9R5d1uw172MhAYseMreM17T9watYRQ7ThXWKZtHQ6dtwsfY3bLqm3TCeej21Qx4axS7qHQQJ6xx",
  "key39": "4prFfNbeVdoFjsLBqyiE5gwE1VXE2zHJwcFcds3G7isfwnUEagn9ULkbY7QqmEjStmzPrFka5MSGMurn8snvbJeY",
  "key40": "4G2cJwy7jbTZ3zrQMxxLqcnJTgmBRDYXYAiqoh7dcA2wkCbThziHzvncuHCCWyR1Hb13S2D7GyKdLifGTdYyADmM",
  "key41": "wDYshRPGymzY1AjS5meGRjR3RyjVHuzn4aeAFHCMQuBbnQxAh9uABM2JU5Z9BWG8SgYwt3RvmMarHimNMTN5Kv6",
  "key42": "53CtzqX4n5HoZxZBMFZDERUn4uGUMbeZyRevdnh6fAPXwaDDPy9u8H4znuGrrFZ4uB6QkQKxyrGAsDXiaP7iKjZk",
  "key43": "4oeWg6KJDfoADaLdtvNisjHYkZZeXLiAMqD4TUGGXjdYsiHVXLn8rm5HYiWf26nH54dTj4uWxh8jpyy7BygLDC19"
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
