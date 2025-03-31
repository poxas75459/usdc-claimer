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
    "646mAmK4cS82EunbEBdUtqB1tCevoo9UcpC2HyKJbj3Fxe2sMtj2vfPhaNaqewucUYWEYin2VR2ZQw8oJ8ME31kZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p4RipLegWNsriGXEHwefakQCoiTDEBsko9MkY4XNwD3QdqWKckdaAuUkGV35G7QexBxMHMf3PBGdJYRRPS9Fezw",
  "key1": "Vm4nmS3GZpjmH2BAwjviV6acvFu16FNdjmL8kX7A1ikjnvntbH4uVbsR4EQCgQ2wkpvnWU7DnGHUUGbH6ukNDgE",
  "key2": "3B6pJKZhcbY77C7xSx4krUcfqfSQFqV9XtuTFy7R5BN696qcbxBGStCjyoUnBBFWq6Vwbr7SSA2TRzzZYdpnsaeF",
  "key3": "9bJ2mjdVWocvimBDQFZXMqxYqXcUVw6FzaY7Uxv5inhgNj8jydmYvoc8bPieKAtzqBgwupBbpN5fVnG5E38VDar",
  "key4": "er8M7EzaStS5uJm5NEFNHe6VumEtKkSe1nQ2LaqkVLcJvJ87J6oqKRogtmPsh4ukotSpqLHwqChFPSYQYNGUE5A",
  "key5": "5TW79z8qfAULeJPiBakrrmNT5bzSQVC44qa5gFiFxBEAHt6pDQ1WD8tGQUTBTZuQEayudUq6PYkKxFU4y5hzVniH",
  "key6": "2JYwrTG9wTubxAXoUA6pcFrLW1QzTGvarfPFJyEWKDHj6ZuEe4ZkkWRYXPJhTKNf1yLswyiCWMy8uUhT9dZoqgFa",
  "key7": "2VpAKnTmXhtjKoUamroortQf7rs4owVQ787PNCxJS4ZKH7B9QLt8hXtajX5aqkkMZLtyNRpWEAA8FA7tgZaws22o",
  "key8": "4yqb5XkLG3EvDipiNDcSqMWPRYwmprfiFKnxGMHKCKcK3yDK1mqeDq7SgaDzpQusjRf5Mx3Hr8rc5xRLWpa34Ah9",
  "key9": "4tNNAH3Zd4HwJ2nq87gPG3eRMgg7trgRyDPa6QiM7tnAk2UZspfRoavd7ftcSJWLfYSoVEfwh8aQNDj1nFvaQzHo",
  "key10": "2GzvrbCvkwNMnQtJ2scwu5M6BCwVpiSc9g5Ji2H7ncp1NmiB8ZfzpWoBWwABCeYnDh8nBM32XVwn1DLW2Esjjp1M",
  "key11": "35Ytz12BxxhPPL2gnKguDDo4uNadrz1nhxV9imzLy4gi46vnnAkQCWewXfm4oXbkA8DkAiy6FJ7mwzdKEFpzZgFL",
  "key12": "UX2qMiuE9YSjBVdqAhin9JWDEuRaMT3whhbiYgZwb3BhsYthnjpsDSD82FsDFRufKRZmrX1wnzuznnMjMqwb2j6",
  "key13": "SdoCTHCcy51GiwsX3oRiBtSqAZ2dQsyzZcYxqrU7nKzSbQaYmP3s7zWEhT16sV6Qn16QCRnvxAvxpLXPFFD4vVW",
  "key14": "HN2FrrsYymYXSTLvEiHuvDHn63KCbftxWLLUpofRcEmc1HMnTGpoWeokPTzny69e8T4tuHotuvseksR74QqFU6G",
  "key15": "54byRdxcySwrL4DvNYqk9VXbnDzqmqgfQy5dX2qoJEKDKWF5AKzVAPst22Cs8MTfF5CbTHzSpvd96J1gTmNGsKk2",
  "key16": "4mgiPhXDciVPW9BozdXwUgj54edCdSxUZR6SL68wMWSBsw7dMaLkUMfUEkRYKigqSjbkjRL7RJgvVGR7gu7ZbYfD",
  "key17": "56SfwSPwuKBcrDyg7fxD1PJX8EznK7JskNeu5cuUZSTRYWrtLyhbASMzMdCWMibA68Sb34zhxG2P4YZZcd26kgzS",
  "key18": "jZiUioZdmnJqvchNNNrBVP4wwNLc3nA2zEgcA9cViwivQ6KuvAmhpxPD1zeVnvhKRN7zT5nyoLN5TZnxV8W7YY7",
  "key19": "24F3jcaDM7usGGQkRPJmbYFDAS8uMXnjBZFgR4tFfP2QtgSEzj5AdahQ3xapcEgtCWHiKpCQvrdbKpVp82AtgthS",
  "key20": "5UM9krnYraxxa9pFw4m4qFdCimgBbQeJR1zVPjGGnaW1TkSUiXMFmhsj55CFKzFuuHpkxcC44ZzfFzPrbU6zUB6L",
  "key21": "5WaL1udmXcKnrGcWQ1JyhXf39g71S8ENSRaSTJSiPCapM8MJpMVHXu6rxe5axjz5o15qaNWUmQEWnYcYznKU3TXS",
  "key22": "5x95bxKyiKNMEVg4ygTiTCpH4JeC2LVYJXv9cX31xWcyjY8FqffpFrdbg4DmnnETEGR4HGTMAFPfdVdZsBbLX9yv",
  "key23": "3LTAHpzk5WF8HAPU47Ze94W3t71jBB7fnpWzLtLFwmoqVvTtMacxtYnmouXXYyT1kqibLQNRukqRBwLdZ2rKXyXV",
  "key24": "1RBVYJwfMg54xB6iEEXd67vHZDjpAXo8TCR7SvwUgFPs8LHeh9xB3xYRKLZQqxBnDoNffcXvP5CiVRXKDuTTGRv",
  "key25": "4FWakuuRvMHFQEaoazLAaTuqE4EZksesnAFYoQijNniiYUY2ZDryXtkG71mEkX5fgFjDHduFD7AByw9Sar2jcp9j",
  "key26": "3UiJ8jyNFfwB7de5B2EEn9nPnNzbCc5j6Y9DWRu91TNYahn6cRt2TWoT6XVT6AnguBs4MBSpmoj2uBhJfYfevSiJ",
  "key27": "2y9V6o5DEih5jDNLg8sfALGQ8XRLoAsSh59RckBeTiYtYbHZTfVtuBgEwMQfMm8EmoVgVemKETvZat7KianVWfCU",
  "key28": "4AAYTU6p6NB2Srv3ackm1A8gtiigrb5ieb9dRAtZ9P3x6qb2YYpN8NMrZPQ5TxSj5eaAuY6tXpVyPbz1fMnhmNCz",
  "key29": "vB56ETuNW1Up2SASEHVo5Lcg1LFWoNQT8WjSxRAZEnwR29x8f71GPWM67AFo4ctsQFfEx4iBjpgewmeNNjeCsDt",
  "key30": "4KeCEFhN1R7AnkGEDPGcAkDQGTiUTtmo7EmEriQVfLmyGSANDwJTUeXCXE5v7MvVn81kbzUV3zhxGR3TEaypBvKv",
  "key31": "4MAZtUWgMbTtF7QcKTaF8rQ7GjyaH8qrtBFZcaBuv2UhiPiStNjvSBWobseaT6Fp1JxpKxk6ADspJ8pN1zHjo3Jh",
  "key32": "QCxgceoLXjQgPMZeWhgrYNRcpgmoQTF4LAm1EnATYfxL1JTD5BHMRwFR6m5T5PG4B9o6sfkaM3Jkh2ADnPiWepS",
  "key33": "58ZPTQBWJUgzc8gvv4EbtBrCu7UuTeNJ3N7Zcnc7iQzFZEJLrr7UPDn5MrTanQW8bCAyceYyAetj6cen2pk6U2aX",
  "key34": "er2y2A75jcAj5aG7gS9cTJczkGukPWM81pKYaQjxc4u8xpsyaHCkcnPDdTsWdsJJsdJU4PVECx5ZHpfGGh2exMj",
  "key35": "5fRvBDmaxz2rNismEp7qLFiamUpVv6iuS1SCCwkLHpHadVuwKXQTEfLqf2r9kzNJNyJPJb1KytodAjFwXSVfkE51",
  "key36": "JBTc1oKn7zFwJVGbb2JLQGJXvANYMf9Gfps8NyAcyJN7EW5sQCWiVNFns4csyV86S2D5xHWHEDfvJVGUK79Yhku",
  "key37": "42ATGxWbPCab7he789pjfS1eWiT9bcVuWAYKsAStY5ceqKHmh8iuY4RCh4KiQHzgESDvok6kPiDvVFqkrCLZL6mL",
  "key38": "5uVUv7kX9gsFWUUGvyqxyMx3WshQHAxdt2b7s61zSe1KjmjB5Z4mRmsXvPTSyFQAvtusLAMjRPr48bzbTBTf4mr6",
  "key39": "aAi4xET6Qah7cso8dRzHd9NkaGvBMZ5tCU2RaDdhrgYm7WZzrdqjWt87x266duHfHsCeXeDTsyiKBBHyG9QizMP",
  "key40": "5jq6Ghutjrxr6C5UNdYoQV8s9yYPP861DiKjPxieFpG1BUopKQcdfNaBPHUmrhV5w6qf7w8vAvS7e8HhbQsyxtdP",
  "key41": "5gQDNVrrKJHv7myfsVEeegwCQ3dJmHPE1V5VnE8d46LUrR2SMejoKshebf5yXZP1Wj85G3LG41MXx8NnL3t6W565",
  "key42": "5y1emxv1ngoN1yFdDTHASEqm3P19AhQYBdqvC9NfC5dXHsV6THYoUPAw5SZgsNbGX1sCV4WoRspx5MFXYTsDbtq5",
  "key43": "2xY5XNEm78SYZneyxpGvvCCDkE9iPn15DQPjxagFB7STS5Lq5hgxzAXmW5M3AXPfX4KwJqcFPWyZLt9JDEu4toBr",
  "key44": "4yDDxtS35jejSrTMNWKDXJ1TApiv8Ah1WtTJQm8MEKGxsycWfTGJNRtLMLiEruf6WJfxu4p1iz2uGMd1bCQ99ZDK",
  "key45": "5iKWr6QHCbjTbQ8Eq37BZU5pkjeuwTW72ikcRiZth6njXQnxx7Q3SDhBkVbZLKZ1CJUF6U1z85xWBa77tjeFovKx",
  "key46": "3b6uBqQF98tvBAq2a9TT5e72n2DpY3EzUDbH3pszMhEC1NQ6FjGae1BanKmL1j9ZcAVQay9AnM8JJBpc6a83NSNw",
  "key47": "2BcBfDy3hLvitBRnB2CnFFU4be3c4VqTc8xJcN8QXLsDESwaPZ8rSY1NjwjXf5gMDYJy3GR93xSTYjqZS1E9qBKq",
  "key48": "2shQqCzzTQALnpMfZJmWSMh2ieqPAHP3s81gBL6eQzgyKHpYteo2rjqXm6R8VXJ7LqYZ8NN3A8nGoDX29ohtfeuS"
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
