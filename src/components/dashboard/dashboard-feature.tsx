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
    "2BGs4kFmEUqihRxihHUmvbWxkRZwuk2sqbyPNBgYz6gLxqfEWsyaxi4A6RAh9VLFmJj8W4mbxS9t659TSrd2d14W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MKfDfNejSVR2EPFUSA8g7vd8xkS4UynUPRzqhahdLvF41aQg6Xec3KzMENS5LsFnj5ws788Q8PTxp1H3B7uFE8h",
  "key1": "254dphtRUyZ9semv6aSi77DKshMCKQgoo1Qz3LUcvJaCuUJv3ZvEdnsqo6FDPW2Zi1vfCELccQY5QvYqbLSstPkg",
  "key2": "41syMBJFkDyB9AGeeUDyrNXaaC7pdU4zJKQAvzN8TDxMf9BDm7Sh989m2oJg9Dwp4Baw9kNkxwwcRKkF7P367rfD",
  "key3": "WVWdRK98DJM9zgu4NPEe4y3AFLQ84N9vit4BXFgFnrAP6jLXBxyGLJTYaHR6hvhty76CWGiYRV69d3mbckQCpyG",
  "key4": "5pWCE8A9MzfPyam82ZHg26dLmTpgfdqZqxKAiFs2F6LyMwxVMfQVP95FzAxd3kTicd4HLhai8GFDVVew8az8FfHq",
  "key5": "34HTeG2zmTa4BcDiGySGASc93SMQKH6YnEXLKwL8XN81kEmcJy24tbhFxRmcMXVVu4fBWJH7tCDCJyM16LBrVRbp",
  "key6": "23qgbpvU2RumX4UQap5ny7SaikJwdaxz19xFTPFCyZgLArYZaRfuP28YuYBrzRt4uUTfZB7jbthksLsRwcm7bLpB",
  "key7": "5koGUbATB4obeqmtgr5RE8h9fv5d5wGDBJFydmJUdV1c9tMBYYyKQ4xy2wfNyjtnCRRzFvfc2qb7p85tLAobwfJU",
  "key8": "4e7MVJeqfM1YRPEmHkYapVzN64KVnqLNT58m4LZCXjndpVTzXbi9nN7xFMav1DY93rjsnjnQcYXD8XVcPqfxZihM",
  "key9": "2g99TupUKWfH7xusuuneUvMSEZEbUL4bqdqdymgergeBwgk27MJZfcticKwuGM24hx8RkNy2Lkn52QHn4yXrZJnU",
  "key10": "2FuQQhKJ93gAPgC1Lqi3FjXCVDpfTaCkzuLX1xu5bkYXJTw1WbEuqKfMdfygdo3vdCoWZVqZjVFmv5wK53ewWbYd",
  "key11": "4EzWgu4T1wTBurrmxM9dZZrq8yGhUUJcMZccMHSH6NHprEP7drBxcnpNM3ppQyDjH7fCbPDpp7aLDcZJzqbo72p6",
  "key12": "tphJktfEYbEsz2USuTHdRotEmc5dTXErSafCqYH8SkoVXjqaooo6L6mRNKK4x2RhuE8SULLxVFQgBMBapcFd3Vm",
  "key13": "t5NyZ2sqUREdW8AatWP1zcjhRaFgSM9miUmiatx69ykUpN6JyH9fjhQ6Ln4stvFdH52tPDnTwEWyYbBVMBiWND6",
  "key14": "paE5WcPe8qGSWJhMCexrRJnThRVAbaFnn4Xu4v11ySSKbwsWCNVnJLSzt4Zx63F5tToBMbHpVKkkfC1L8RPrDKc",
  "key15": "5tNhP2kTLDXwYTW2hkcYU3XWFoSHxZhqinD8Cx4DNgeWrdvvDt3tf87vhDeMBohhXvcUBaQ428KbNmw4w1c5AtY2",
  "key16": "ue9AcFJ7TYb8Hu4TzGoZx7LGs9sdgeM7SyJVcBRdgi6p5LfJMgowvPZxRtEBcLisY8cazVcU2J8LDNj5KBushdS",
  "key17": "5xQvWwGhZzKtaKPE3WZPd9ewyYbFiroRsyRgSyjcJz6uQSW4gzMEXGQrdgb9ySSi98bCTAh9quhY3ffREXiSJNtF",
  "key18": "coTBa81sphRfsCxRQT5pVeaUUdjVXoGArxTGF9cda4PyCv7sxY6oLWAsajvd7J3Gii2tYCWL5tAencpbYg3Focn",
  "key19": "2GKZRJgh4zxvjJffrDkdWvcEAShaujxRJPGp6VWhKXHBBrtbiwuYXKCctvtwiJd2spTmq1aEEHp5KF1uVoqZntQr",
  "key20": "42tpbVBRAu8m4jfdmqi3UDvP29WdxjBkmPQTo9RbeY9cxZYvy8CTZf24E4fx2zpkDeWU1kHYp3CwQG4xCwC9YHDC",
  "key21": "33hGn8w15XjRMGg8KDBiLTNpkcoNybRiSAy4UqwiwmexGuhnTsLB3vnpgK3uzLSdsS1hveeDPskLqgBrcFWQDBgM",
  "key22": "4VmmLuwGQxxpfGEeXy63aD3Xv2BxJetG8HGHcD2U2SZAeALvRD7ASYBMxBX1RCCrbQqnLqWkkSQCZy48PBfShnMY",
  "key23": "49BYq8uSmMCEoMhewQPJhsK32Un8tBR68QZxewc5dHFNz7WK8iZZXiSyxGg3jxUNBuBE6oSHpcpoKoUCtQcrBXeX",
  "key24": "3KSvCNua8ycLrZkTb1JzYQNykwfZgHZkwBVd9Li9o36mwQAHeqNPTJ5YN4v61NxgwKNZKAFFB1nivrV5vCT29njd",
  "key25": "22yuZJWaifRZ6KCxMNNW4in9tKxL1VA5YyiZ4ADwv9NHKKsYGow7RMTFkFc7gTmfFP3JD7xJCnTnHZzixQPVaGyg",
  "key26": "4x9C8i7MUYdPZyBgq4znyh1B3ndumZALuwgJtazA4gAVKF9idLgVacWLJgAq8bwpR4WwnJJc4BxQ31zrHrG6Cih6",
  "key27": "3XMVNz1TGyxS9omZB1NrzfE6Ajvizuu1QuXW9LzYneufX8chhs3et3TggNujTJ44KWAtFiGwZ2GxqFsWDEHDArmC",
  "key28": "3zatYH59F5XW74PiYEaEBGFzDMwLRK9q3FYQ5F4VPLXL2hBPhKdQix3AkhL9M1qtTn7xwNwsws85CixqNBppgjL2",
  "key29": "4bpTnkBqAXCyxxCFqozhr9LLPZbsGrYj7Q5jxvVriBuSZ5DiTZvWmwBXhUkQ2f6GzrJJnwYQx5kHMgc74C4eMTNp",
  "key30": "39pLUpJ5aA1N7eppDbSa8xsGx2zQvc1dDuezvHADDs1LFNxCcLbTkeWEgG6ZVom9uZRs3Q1NfTyWJKjVfBZCgWdn",
  "key31": "2hTZY9anGpUYHcMtvP5uy1qyM7ybquCQp9TWf9EBBvyBJTXQtsGZT494aUqB4oMrNrjANbTfr5168bKtpWmqLMAj",
  "key32": "4D9KPZ4rtUsoNaFGpz8yHiEbTbQidPJHFaj2stbqYksxZs5fP99n681f47qcqYhijSmgfaVE973garq8aptjeuod",
  "key33": "2n5Wc6hidQrjxcmaNpYr3WRb7THArjMgcSbRMoeqv5csfFDskyVZc1QFKkhFV6gmBTrrQgQQ7t1rr92pC4z84Sac",
  "key34": "ZaQauhSnhUfsZeyuHmWDEbsHzd5fYB5XJjL3gFkkBgJEaZn8oFG7HNEQksJyHGyyCA2zh6xufECiZU8xBdU2FbC",
  "key35": "2UTXcnyXsnrSj3jh3rXEpxDqvJjsPoQmxe5vdVhnSgV7B1xufFhEZ8J4neCbvCjW9wzzcszzPkxnZTHP3BeJm8Ek",
  "key36": "5JHMdzecCMGtMjAtHkV1kwd7Z936pk217Y1tN14xufwMW2uh96ExTmiEcTqtVt7ppt15aM9kufKVCXv4UBmrwd6j",
  "key37": "x9Pi5nWU5fHg9gVnSYF6L99VzMCyD1gy3uS4smDRv1EzqyniHHGQgsFxRDTfGtEQBbmw8J3RjLLWs3fFxVDDBMe",
  "key38": "5UZDzDWxEzSMVk2uKzmjFXRZUXxU63f8UwNdz1cCJx2Svo3HbFeHSCitAmp7x1WGAoqQAq9ZBwZwvPK683S7c38D",
  "key39": "d5Gy2PsBMCSMkkBKorGjv7PRZf1DQ9Mpc31wCauDnkuK3RvAjGNUPhCeBEqShQrLMkoXmP9FvBDfmM6YLDrjisn",
  "key40": "5f7GCCJi7K7cdwNiubRU9L67RBUsHJxLXWFydhb1ybDr9SZMN7LRzwQYj43hANATYEk3AM2aUy1Pm9CY8eWLkipU"
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
