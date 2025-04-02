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
    "4fz5gaLFgjcf5zxHhA2LbLDAwhxqtTchpWLg3GjFvL9MXjXrviC3dSvF4Rknt7pKZ2ECMWJuRboQxsEDAvmD7F5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PzFJ1Hniz9ekLcvo38jh6Wefm8CeTfHYHEGWCQBb8rAugXtUffNWpb2k5UTSex3LLWu28RWcc61u73UdQpg2fhp",
  "key1": "3Gc1xkUd6tWz4AeZ8CG46gB77naMQpxehT7rCxsJ9wtqB2FB5B662M3KzMnsqidYSZvUJC1R9QSbSKUGxTn1j3WY",
  "key2": "pCjX1CCcJZmckaXpDeTnBuJYkP4Yn1V6TpcZ53vP3VdRm6WxukXAYwxnth6eLRBDZeV6MfraDWz6aB8JBr2SgLs",
  "key3": "5MadxU2jYTdjHdKj2FYtmJoChe3AVcHaizfVKSeYKHorGizdKg3KrL3avfsrFeFBifL81ATxtVzVSHKBbNDXRdLX",
  "key4": "2cRJXfg5HosjWF41zyugBW7qi29zJYDz1SE6X7XMB8CFNMWMjsjX2qLGqFXibnHhgzpQV7hJA1XkgV22QP6pxai2",
  "key5": "3yYcEorZXqxiSioRxqRaLbMbnNRKzMuVdmTFvZPdwkTzUr5a6EaSSkNxEJFDU55masQ2aAPqUxfSxfd4BSKUeVyC",
  "key6": "61bQEzFACbySE9qmfnxKd3BoSgt8dW8NWq1dZhJiSBUNSVvR2zXvc4msfQzxEgqdzc7DNAX7BHPyJCRSDJthLMVJ",
  "key7": "5kVMQCcpvUWTxZeJfZMrZtaiAWTm7rMyV6YQmEb61Eo9EhcZhL8aJy2Li69yHGKBPxnjf3yYEEhBRGT1516Fggx7",
  "key8": "4efx1ACQPibuQ5FHon7qfQW2dWKcpR9czvQCGjwEJdvEdmMK57s7juJmDg3i4hrv4E3DTzr6uX1SMWvtNpqokZWh",
  "key9": "3od1fj48KkUHKhFGzsU77cg2bPL1joHHjm21cAdwUEcVjZjrj4AVG281kW175C3hZBowwmrdaQtKQFBEm4kWW748",
  "key10": "4o1EABEjha71ekCdqxdub4MbuEMRoQbG4Ff6HKgmeseYRXzjTP3VbEntvgHwryU1eyoTeoPDoG1phqVjoqJa1Cya",
  "key11": "Youw5xCvnyHiN133gmeLHMYWUwSfovUEowCcgYinwTrzW7RLRiKo24PQto5fJS9tPGcjWGJXFAGSSu3pStRrutR",
  "key12": "22MKgFc2E7RhtyWiJnnQSHSnDvHs2TX4eY1wD7K5tSDQZWbjFUCGjzAegsA5Xg3VPaiXRF9AVSj4zCgKJ8zke1Zb",
  "key13": "5QTuc6CbzRjPPeF6NHkhtxTfeC3PK1N3MtKvfYWRRRaa5pnZLTVy7h5kgdpru9fgRss5dzYYiknMHTS4b7d928BQ",
  "key14": "2iAckukXTX7w7vVJMc6dKsSpsa87zeZrseCrqfqdLXHvNFsgvdQWWRJ4ZHDzpMLg1k47akjfPCryZWwV2Zn5vDM1",
  "key15": "4i6QnUmeWRHCRrQiuyVZ7gXXfxeLWtNRYz4hYgYWMqBcvB7VBFqtqebrt4ZGA4h3yycMbNHr7BWa3PZqs1LFWsrw",
  "key16": "58aQDi86bakCNiCV4NY7F5qm6XgExGNUtrxYWQ7bz3xsQAL4wFNXJtUkhYBghS4pbbvQ4L8dhBZz62121stSFiZL",
  "key17": "3agjX84W8zbdjkRubbQ3FmTaJqYNFmY4fokG2xA9Jj6UxxjY7kFteRJ57FJFCydh72UhxDsoAjsufkhjUZS2BL3L",
  "key18": "4DEAy5p8MWbqyHafvsjVzxqoP55TbSitvyqDnzexBnwtV1BFHEYUVM6khzYpzSgvzEGhcE6Q8KxnAwQohfFgKC11",
  "key19": "4YCfPKagYtiYr4eZK6NxZuC6ZsM7AN8uwnkEYHczN66fHjCC9w5dKE16YTykZZcizPCqbvuUnbfFM1r6AFkV4oaP",
  "key20": "59MpEKAuYM4FT1nWKgsX8XctsQFyqtg42jWtwkumkQqrdCiDMA9DgR43UbtBpvH2jVtEf7mevqAiEFueiawZBTjb",
  "key21": "9aZyuKGSscSiQgXXp7DRMnhDnguUGGM4MUrKZGHu9pZS5pFN57MghWPDUjTRbNQaQMzyfqqywrBs4MD8n9VM1zn",
  "key22": "2RfrLY2NmrrzWSewDpo7DNxa9yTMxj5y52bP3KmNqGJStuen9vd1N2bTXJ8Ea6g4nMW9MGJVuP3cj4A3Pzt82Nbw",
  "key23": "2XzYAVMJ3Zg5j7fNckQDP8u2i7hK7kht8amZoshGLmyw7HRz4XxX5rFnuJejMBY52tj5TEHHB5XqT1vQZPeCsKgQ",
  "key24": "44eoXGzLk8S7HnDGtpGMHB6HvKQDbFZK1ustx8vtNCtJgtUcpJWRmHqGcnz9UpDUqsyd8Uoc575TvrfXWR6gm9SL",
  "key25": "5vrsVSNZfAmoGEUzv2Tt8H1wuovn1UN8gFht2Ww4RoUDtqSfg1roA4d3H1vGtAkD32HWzeMupFXzm3RbZVJ3kbWU",
  "key26": "5BizeznL6F4SaMZFamUub2WfKp6coEQCmWrf6yGd65PemdbpA4UKgfKPoQ2DHhjK9F7gwqC762GSHsLQKexUR7r9",
  "key27": "4MgGxsikJcVudZrTcuxNFo8yMPaH65FJQ4P5J6vrn2gaeViZFh8int3oSK7FpLwV49w36pFiDfEo9y3vP5WmkjQR",
  "key28": "39s1XfgnvFyUqus8vAAzMEoThkDcNjzC69MqFYan69ayLz4zwWye9uvNF3SiPLvZg68toH6d33S5ty5ESNg1kTbi",
  "key29": "5ksgqU9BhYNSpuFuci8UDzwFKAyr6SesjeZFg6nbVQpdgu3nGykdEGLgpA6GVgXfNbTnaqK9dKQSWpcF3w9hMequ",
  "key30": "2uS6ubKUWBH7BxcHpcpaFMPD4UReKcmy2wimKxP5zoyr4EnCsSw3oNoxFe5GMSSN49MrhFEyswaUSc5f1TXrBYL2",
  "key31": "5fu8B7CpP6PRquqQjzLhzbV2Cf3CF9ENcN5rWVL2GgHWAqTF9knfZUGPS3nBB4VJaSBUw9J4PestXd4SBk1wJUaZ",
  "key32": "7NKc8dgJTed7hRvUbBzQopoXeuPCmzVp769tyhgkKxJcWk7DuZjSjq7DUaT8GnFJcXF5hEeM2VoFYtGmvqRDfTm",
  "key33": "4hz2xCvfdR4Axn6W6dy3wrDsoR8MFn4jNEhjCFAaiFcE3dUNio1h3HpSdWcbHsdzxy4v5A3jmYrhan4gmBUUv8C6",
  "key34": "5zt7Q1HDK9sH2momZoHYd2oKLSo4PdBGKvbYwsFiLQeE4oWi1t9nGyZMzqb9cMToMGFm4G5MDXX3xNw3KXfagCYH",
  "key35": "4dN59SZpWU1m5G2eDAUjHWcwsu2J98GjXCxhwwQmwsnmn2QVNsbm45TtpLSnY2nmrkSQmJZ4SLsQwjaxf1kQTbCt",
  "key36": "39VLZAjivUsYikapTqjaVvGX33Fe1LiDeZjE3SefpYisJrzVNyu7SXjmQ6hKiNKe5dWjQCbmD84DYCJ1F8v3VdsR",
  "key37": "26AuqYHo3c5pgfhiJVFV5h7cmGts6Xuq7hZ62upkSqhUV5krd5xDLDEozt991wsWzFEXv8eJUVPk8ZHcqsxpGjJa",
  "key38": "5xTNZ42FaQZLs4GsNjMwbLUV3apuXxqpwVspyziqcrU7zKRv5G1XnirJJmt14cao5gwq48s7G5mmMsFu78iTvjNs",
  "key39": "pwx46rW7qWWZaSJCyX1Konj9AVv6hiMW7PXA9xhhpwNA56ymz61UjKXoQhNsyvLsaC2NRaq8u8CgBqnFmnd7VNV",
  "key40": "2kQ7mho3GtGWUvp9Qad48MRmKaHBmpjMyYA66XaiFPf5YpTzNXWvx75e73QpQVx4cgTWKT3DEKwpcMrjTczWnLx9",
  "key41": "EzUSrtmr5cVScvsB49Wjnq72WhRXVyGYhqRH3xD8Am7p9UbcWE8kXY684CgnR7yuibjysYchWPBwRhvRQjEcNmH",
  "key42": "3dsUke5owjxhvCjxWSvouRNbtWNpouoWEfqy2EvV45NUXfeTbnnRo6UcUvknxQxKVRkdbRw1RTbfJbEwwigsrXu2",
  "key43": "4cJz6VdS4KeYCHJmR3gt9wpzJgiG3LWTNsE4WLCkcovUhb2MdwZQQdGDZtgX5b5FDcXwZ9eMB5KrL9QSUCjiDA3h"
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
