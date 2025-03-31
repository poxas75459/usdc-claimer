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
    "64gJezPkLJ5QP4o4NAmmqKD7G932JErEZ8kd8h5KBdv5WdBefoKamKm4dmPgwyNNGQhsRtGbHZ6RnxNAgak1NYru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BerYAcYpCQ3Ucsdq5ZUK4DQ7fd6FQ36xKZf8SEpMoxzS8dYCXLPMvwmCm1X44Kz3Ef7F5zMrxC2pNDQfYcdoQii",
  "key1": "2FQUu9Qn9VwJFNxzxeKbCVu4AV7LUvUdcPksDYBgEhL7TdkaXthzFvXzR4inKkhHrZZ91S18wYbjbRarfhwu3NEk",
  "key2": "2JNqWqLr7MzgRbixQiCftAuXMLs7pvAt8xcy3SA9KgDQwKUB6VoUxYHEfsBdQC5fcxRGSMMdX3LVkj1svhyewUhn",
  "key3": "2w6B7Nrr3te5tCRjCr9aXheAVb1rHwEb7bhSjgS7V5AzfekiKu9sxwGfrixMnEMHpp2yYEU6MwyfCDYXD3DebYmw",
  "key4": "7bQq1JTDFsq8K2Dq4GSY2eGQCWx7ytgqwPBTrz9R67mpZtxuA3Qb1JVfs8gZZYMMwvyyAGHrq8VEzjUgjTcT1Yf",
  "key5": "2nGEF3ecTHRTSHrnXu45xSkbMMmZPCWEf3bP9DuBLnZJV9cf4CFFHvz2wD38yN6NBPtMD5F8VLPTnUpxprzkEigX",
  "key6": "2uCRWxeqN8cTPf8eYMJSfzT7ibn1pMbHeZMEMr3bxwBc8QA4Gj3zGToMwYe4L26aPvGYouMzKVL2hGoJMF8876Wx",
  "key7": "3cw9d6WjLB7DYSwt957x7XK7CEvA6LmVZrABWRcLjMKedWXzqvDZZ48vuQY8gtbmRZgkseE88YuvwJFCEVMMRDs8",
  "key8": "2uMtkTQHFg9q8UJj7x4SCPV1nt5aQfuYQAZaxxEV1EyBi5LmoLLarK9H2gxHxg8tt3DP1bGjSQjQgMTMM7eEKC75",
  "key9": "2UutMpy7Q4689LTnC65cPJCccvqALStWrbitffXKTAXqtoWc8C72VnweYVU8YSSTh1cDXKAetddnXAHpV4KecNk3",
  "key10": "MJBZr62AFYw8BgZaRYzAiFyr28zQAQbMFqAnxhj6quAEuQSEu5UVz63rTaqsFxhwWYH1ag6ddoNwKJ6CxT1d2fi",
  "key11": "5536xcwCnNgnGJr9NhkHsSrBteFQZwtfUqd9PqdkTJj5jddQfm7maNxGMDvPiDkCK7PNg5gjY5AUpuE6Jt59rQHo",
  "key12": "43inXMdYKobc29nd6CwHRhZnUivxZvk2jnFsjGd82zWntBGu8wFUDpPFpKMPsm8vxQ5nkLC3cZ7SYdAsQQEtvAjj",
  "key13": "4jNFBC5sjhdcifx9k6YDeydeK1fsPBrfTCSfNUFv978guigppKCZbLkRn6hn8VD38nTC2QnwEgaERJc6Vzma6QPZ",
  "key14": "5g2JXf2QDXSnw4NqYzBxi1piQXwmeZ69HPHVNnTqgiC4A3qSksWdBu1rx6UrRQK3kpHv1kqqWkjLBiKffd1X6M7o",
  "key15": "Pw5xrCZJrczjJBuA7bzb4C59zAKXtcok9uRsEVdCmU9E8dnowpBBimATk1XwWQTe8M5HzPWMiBM5oMogKtVo6iT",
  "key16": "3MfAEbjoGB1Kbx2f9kYyZC28WJ2RC8B5EbBBeF1LvR1SXiKymj6i4yHf41sgjTbMKfMdEpYrVoBr95QcZ4m6cFBx",
  "key17": "4XwHoJ2jXAmUcRK1ZMPCuxC8v7Ju142eJMXptj3qZguWxagrt7GCENSjh9BRxCzRAt8So2AXmPtrE5NbBtpqkcM9",
  "key18": "iXRG9NNGCGyJ8KsY2aJXpRbtdtr2ykPCJAYrtWrBGDXH9RMRhwabzHRh5r49gMvMTFYkTbm1dwaxRySFonSubHV",
  "key19": "66ZxoPzpwiNTuipgv42EwATdpLgQeuLdf1uhXkp8CPfpz5LqCex68HPcuirFJChwKuENQ5yF8JZDE5cATj2XW53L",
  "key20": "4AybP9N7ejawh26iTjoFbyJp7db1C1rDGvcZ6kSDy9sumHwXsYHbMRTL1Pjas6FctG1owymc8AvC7P6C4RQQp2TW",
  "key21": "2yZvG5wLZJ71yhfMtzjLc73Tf4L36XVu9iQ7meMRWxWqQnBpikUUEGHSnpXXkKRnxNZ5i9LFw2S71QUCjdgRKBc6",
  "key22": "4bcPmdBSxGsoPTgkFBXWrFFB65oVtiDyequYdbqHuU5AQzXCRMqbJK6dUqvUh2qo1jTmT8VMtRZfA3sdq2pts62M",
  "key23": "5CkkRz31zt1qXVWSoJxpfEGAZRoCZ454FDQgfCNMNZvGoZg5d8xMXQVeEsqce8vANHPcY5Nm5XsvfVVmLUNTRie4",
  "key24": "217XjLML7HoVhQbRPMQ6WcUnsoFtXJCf2ALkc96ySfBej1ktqG3PqUy1VkbTPmunmxbtKn2y9T3jVpFEL53SWnJk",
  "key25": "2ZwY1iSPVGSsWX4DFUvfQa2wxVQu9ANcP3utwBPtk68LNifXyY7orsi4xws12quDMrgKGkm36KF3zPqSnWDUZsqX",
  "key26": "26dNPomnLHaw14pamVVxkBjc4t1sFndGKnHmt6Tb3fauJgcDz9uAHzsvezgLWHvwDgmDjkRQpNRo8dVpiLac845j",
  "key27": "56sDa8joSxLWftaZgvhQ9P6xnZe7TRyMXFMkKttC3zHnbrFmPhCwGCNWsBi8H4VPUG4nQJVNqdQWuCeuDvR67ae4",
  "key28": "taEJSLysUj9xLsGzoEuk3jkfrhCe99NWvCmQqgz4gkoyuTonZU87UCeenNTm7TzDVRe1uVPYM97hcjrEXS4wap3",
  "key29": "5rxYjcYBZqWzsACDiQGqAfAJHwqBHaobjFuYC8tziUGWqDkkXkLFKbHdCMgxRsBd4VZso5sF4EoW1rkoX72ymTBm",
  "key30": "3nRQUcHnZzNvxBmeAVQg9T4R2GKRxQGdzPJAJdSax9p87n8PvNkZhx7778xCzVQ7TjjmsgrRETVwFPdPGwVCnoMM",
  "key31": "5rN7MW1kaLRuAGRYQmgoicSjW3YzGx4H35QaKKaYG2upAHa9ES3px9Us4T3KWEFH8F3umAhEADeXhh8ymuPxC3wZ",
  "key32": "3XDv2VALacVzi68vrfbQg4AcXpGoynZ64phswAMTPKikKdz1a2uprvsoJMMvUMfVrSEx4PcGeQpTL9szDr9drGwv",
  "key33": "63KzeJ7KZHppvPXVoWyvGeNjoJ6utJdwWiCwCg3GiGtTFvFEkmj8tRzeFoYHVE83HWGQZ6GMsdbjMpLnGvLRDkiC",
  "key34": "3QiC9ENyqKPPGvFZnbaDQ69sbUdLkgPJctWK3QtX5JnRVbNhbUgVkDekaQECKzeaYCeFwq3GhVfPacWs89iMxFrK",
  "key35": "5M9d273nNVZpxJui9PjmsbmTiqyCZtCon81P6NQMagYN2pk5wdfda9Zh3vjmsu9gbe5QKdsQBx47WRQ6u2boFzMb"
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
