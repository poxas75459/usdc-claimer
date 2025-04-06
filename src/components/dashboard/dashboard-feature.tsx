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
    "2YxRmf8nVgfhTSaQCMWf3VJpgrUsZ6zcaobYEvvMWJ4AkF2RxxMgafRnUNW2t4KjWMNchidy94AF9EDMXC8v3dzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SHN7Nsiv71zvQ5HrtsXwPyUK5pdJbfEPpCZ5jVFann4LxL8NXxC5fALdhQ2tzhPQLWfdy5zQr2nWEKeTcaZcHts",
  "key1": "4pdcb5HgwNstCxDnhkHkYHJ1eJSBbwvySHj9QhrS8r1QSJhBBXH6Fg57xVNizGdysef3Mj9ppiHqpZMb3Wpat5io",
  "key2": "2pvVprbDLUwJTy91DmQe755txPbPKn47fjtpqmMzojQRQv79sjjspnwZL9quGrLfAX7s81vRBMCMQkHnu7AfYGwp",
  "key3": "23bucF8FsKRxhHWPMazRv3n8HLciDWoT9c31hdcUF21RbnFELwxvUW6hhVUAM8xnNoh48PH3AYD9EmiznvSyutKh",
  "key4": "2vyrjCD1gUs9kSDXSzaf36AGMaTYz8XQZWnkH3DZx1oZAm5Ky6xYdSvmJkqxkVppeNKs9Q9qiTn96y3piEQLWbwY",
  "key5": "4cUMYzATANL3cKx1catrEvGfQGCP2DCme7Eq3XBSWwTHPqo9FtyFXERa96urzFgm2HgkZgpYQuWnMa9uEkqy5Vfo",
  "key6": "2tgqyuZSKQsU3irQMQLCmcbdmodSVc5yvyBGqgCVxnMvbMEuPjviQRko5LEHTtxi4P1YAk874XJWuZrgmdAmUvvU",
  "key7": "NLXQGrsSaoS63k7MoHQLKeyBcX5pJ8PpNcCqN8yWiwsVxtNQrVD73eNW1KEomGdWxmGj2ECYtCGBK5yHC5RpS9Q",
  "key8": "Nfn5SWHCykvd5jwnn7opobnn8DH5WMUYqmPPfCVNSct7TJU2cFpHKNEp2wayL3HAsQX6cATygoN73RPRCaLaWcs",
  "key9": "5gbuGSdNUa7cnktEEqXK2ZqQhTfDr3j989uCrdH4Am8TVse4bu6QXJAcqE9vkyspmrys5oqFXaKK7jmWBvrrgvN8",
  "key10": "28aAawGfoV2e5kM2hdLu3Yenx4BGSJbj6EPbKkMPMdm5FoxSaCmAd948PN7h6LnBHKhZKAYk1N6DAjUbUu7jW1R2",
  "key11": "3rLUyXz2BWYg5Bg227iRwnsbMAZ3MPnPETXc5QwZL9AHeaFCGAvK3wf2QjDftfFu8ZRTbnnuXZprvWZhRP9CYwp8",
  "key12": "22NPoWiEAvh5BJcEZjKUdbghDZRhesS76LK4GXDodeZuYgW9sHAtujj6EqgjYbGBGe5VZFKZmSgu4Bw8JrvvUcgk",
  "key13": "3hVeoiNo6mgDpaDPorZGbf5vDLoZADDHkMJMzbtC7VgURJZfvdcyMvvnquauZcUkjoKMvxQT7ovuUpRsUd2fyWrY",
  "key14": "48GsvPna43Wxjt2nzLMikoNxevhfAyokdhbry9RFF5sYvHAZKEKTgSRdFfuv53UV1fy7i2p9h7BApfUn61sd6sEG",
  "key15": "3f1shfXDyqrXW8G2bWLJv9VZpd4RGGeWBcJDYa1aBcnqRtfv7DR8TSvWNC2m7ZbkbfZcNEYiT65A5TVR5Mdtfz1A",
  "key16": "4yTx3JQkVhX2Y4nr9wV1frsvHQbkyyAwEenRGkPJeVXj451E5MJpfsULexriXB8sf8vRSQUxyJ96riDNek63YMpu",
  "key17": "3wDgFEYS7w3vJTxhp2PGrcTVQ5KdEAPG77wzgaxoXaezarfaTt9vH4h9VT1Xrb3bQhekmPyr2JMHUcPfGxgwAtUB",
  "key18": "6s33mz79n34Jum8tMUGEXSK7egq6pZU4F9cWFiQyT9f2St3tH4vUjAth63bahi483zrGi9fnX7m8qwdwsDJ3M6N",
  "key19": "4iiKE9qgBXitoNW7zYsrrorgRgSDy9Kk3awNkXP9ri6svMMZa8BmT2Ts9VX9nfnNBSj3NiVEvG45f4QaLsSZZuZA",
  "key20": "4T1EBUPGgVgDpLEtxZMAAifsx3iGzZw61nj8WqQbewc8vRd7PuFHsb4UZNe7NkvM9agfNRi1HPdzAK1aYWJDzdJM",
  "key21": "2Nx7C4pMLQHUAZy8CBQppN9kCCbuWf49QanZiWZq2wb8BD5n2R68U9pV7FMo9gpQXNA5CY3s9vdVW7Bu373k4rTS",
  "key22": "5gJt1Lz9LHjEfbJW4kEh8GH5X3KGQEZNf6bbbqdCm8M4Ezhwpjk9nDNyasuyMcA8ZCai5CAGAY6oy4VmeMifZ4bF",
  "key23": "GzTjWjfyvxC8P7Q9oVdv5U15iS2GnAqQs543UX6jt67m7WWvhHbKCWnFzaCusHzLi8RgPeYonYuqfzBhwQ9Qnc4",
  "key24": "61duSgyDbVm4QnVqc8pUQekMdpit1xoqZ9uVxaKdDTk212Tez6DsMuY96LpxMsqSF7jFmQga9gXefhUBhCo2phyQ",
  "key25": "5GK6qRwMKpp96sWFkceQ8pYoCaaUsAcimFGH8a3aNAiAM9woXbGrvCP8ouRCFmSURRmVCscop4Wo8HUe2gNZCvW1",
  "key26": "2URFGu2i9fgoH9ErGWsUv5j2bxkm74zohfRW5nQiqzW5MXNLeBddEUNEQbt1jCdRogiDEHrQ94RVwhUQ8HHg3xU9",
  "key27": "4wbU6s85ZYeBU6Mre7igmRKEDDvjaGJYRwY58MG8KYhLAZmFE3ekQrgrYN7nXStstXZeg9yTyudQUypRqnQxwRbp",
  "key28": "5q47tCjYCzHcmWdvtGXmTCQvw7bKnivYGM5MJaSB6EaJYXBHaP2fshQtMmnwBXD6PPGPE8WyY2dUV8VjNFesXyh5",
  "key29": "2RFyKJibs89WNfSnEKsWKcEsgB18cEe13CqnF6denpWsPJVhCoBPK5DjU3rikVG2snRKQTnByCRbqNjEywDzoWw5",
  "key30": "3xdR1vSPjttyEN5MmHy7fi69JUkt66RRsK9mz5qDbCDzjY7tqejDcnaGhf5X95uEgaCVqpmbY4rd9a4XW9pWunHX",
  "key31": "5vXTAtJ64v5Rzyx3VvjxAqjNMRRrtSCWxdqDK41PjgJt7bqTxDe2tC4H1yquHtyR7iinwr39WkmhU2ykk2trnJYG",
  "key32": "5Q687MRvj3Y62qMCxYg1BfntT5uLL2ruumS1WiRhNfECbSwHvF3KjGWZe8BbEwTFoecxQUWK3irRiq3aA7f8dSiE",
  "key33": "2D3h1Yd6A66sSMbGDQzAQYbfGiNscff7WYTd6phxmX62S8PFepRLmQMVR6xUAtZKoxZAhkrpQSvWuVcMWrdUs2QJ",
  "key34": "3LXCUgT5Dyjef5y9w6F7vM28BWcW7a54aFGurKj3mGcoXtvzXDT8q4NceKVRVMTbngDVi4pf3dSrrisM26CN1Ewr",
  "key35": "661xmriN9youZ3HsSPvpkHVHadkmUxMCT8cHQL9SiGsXMdmCdUdH6bJMe7pM7xVcmqaWsupdAx5csGDYSMao3hXX"
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
