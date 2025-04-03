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
    "4ENFCzUtQARzAvZi8PXeXBg5Z59jZm8J95W225bcDnweDgSW6iTs8kuBwSGMg1wpfxuwGC8Hrha1Eq2ptg5xMCTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QVZt81AU1nUAijCuVWtS6tu839GyTZx8d6uQutufdpQduaMB6iDLAzDXALBTrCPoYjhuNjkJ2kgHS5DxvaGUfoy",
  "key1": "2STjBZLTni5pam87LXm3UwdD7Ue7dhmUM7DEEY3xjHZ8daCdyCiaY2Kc46UAHN7vkKTuTSWUqZxBNBz1a9UwYKmE",
  "key2": "2WZhUkXed5Wza227QfUgtPFPuGABk4Na9VVCMwBpNXGMuF5zmTYRd5XLEsWRaZGQjXk2VXAEnGbPVuC7QLSbNWkZ",
  "key3": "PErHwXbouX3NvUhWcFpmdzWvLdBWkS8m7UQWeJezjhdUHxFYQoHSr8AGq3BZzn2bL8heG9bJ6o5Ks93v2fNATjM",
  "key4": "3s4MeavaLToVkLGQVvihAFp2TeKJWMnjm7CGX5f11Ls9VMCL2eJ4fXEUfr3Dc9ymiVwHV8hHVABjrqGMdEsKU8Hr",
  "key5": "5gp6kdXZmAcMdHzwzoQwx7chjck11HC85ea8dsJyUBJpNXhQGSCqp6XnSZzRxw3VotkJNhhBEA63NgUofragp1BS",
  "key6": "39SJQd8nkCibMfCiPdAEx5xaFv2S1gSFLr6PzD3N96bneLF7F33FUuYqhppkVzDELZYR1MiZXepbZfRJzqmWPPAw",
  "key7": "37dDUBR2Sfha19iK8hmPCBHiomLwNQeeD6R6EWXTQyZeL6HNpjwVWuJt5wAXqya8iwBa6odr18EygCdwTCbsst6m",
  "key8": "3df5ARqn6nw44YBP7W2HBnzx847Vp6eiHYFBXjmFR66b3AnjN1HY7fx7EyGXBFEBsCgngCCUXHqaD9yYo51mo8Aq",
  "key9": "5SXCa1PLFcnx1bSSeboa34HQAtf3BUzLuSzUfqjimNMdSduSPcrYqtcp8XFRPnvLdCehicVb4hykZ8bZsb5MCD2R",
  "key10": "2JgiSeohUxuSzZiMVpVCS6e14ioYJf959AEmXtKTwcTR9YvfjGrTn88g226ec6rGHP18s2wcXBphUXhVstVS4Skv",
  "key11": "4sMLTrMhBKxvvd1gn1n1sg4faaAVRVsWNWh6aYCN6GGGDFjmfBPohtXXLxPa4HZZ3C34JHdSM5jvVoA8QpDG393U",
  "key12": "65U4fteuJADPCmN81kKW4Acjgr4CzhcdAQ79u4Ga9t2FnnFMozeUkCTGod49Bn4gLfqLB5zzcLgbpD8ucZmVL8QL",
  "key13": "3P2xcRgQBsLb8LedmNHw1RUY2LkS7CjynC9idwEaSWXAyhuiQ2nTgUDmwuP2YpVpHEyg3ymGjv7j1WQTpuaZ5wKR",
  "key14": "5hYv7d3cTJi8JkqcfstVf86FzfQJ1do156bTgmv78gvRHj2dkjXridh8ueywfniAwNPqaD1CkiDqrNua8Kf1Njyy",
  "key15": "65PPZUfcK4LnmstBwjRoochjd3mo6vQEfsAvhpTD3JpBBtBw8z76rqFpdyZXXthyv3Vbb6wbAjzPZ78SEpfsBGM3",
  "key16": "3nYWo37f3zsMahJw1VcxH3Wc2VhN1h47uWz7LbvUanceTUqCixzo2BjJ4r7L9L8b8mjFqFfXJBDUcvVb3tSCxKYS",
  "key17": "eHs1eAuVfojrY6G29d4xQH5Vki8o8zY8o8pBVnXNFKZ5yS7ddpeZzicb1hdNPn5zHT8bqVe5nQ4K3H2mbsSoPum",
  "key18": "5qL71KiYNze8ktCa7LDHqkyYYSKeX8YkW73ZPDW7HRe2BLPCg77NrGQZT9VyEhAy2nqc5fMYpysdnH1T7rA7HQCW",
  "key19": "24mS5MrV7WLzJjm8GuoVybeD5vFFYxoDiwZZqamS4qFVa488v5XuztvFo76uuFBDcoticutAx3ShzU7o69ZeUkH3",
  "key20": "2fJR3wWizfuDVixAELX6VPM1Gai9pVqQKeYXkNfg1PRGpdmNGXU1moNKcJrhDKWvPBtPvQ3yRMifhAnnicuC8x81",
  "key21": "3fU3pcP8qJTihRpLBAeLFVn6vieRh5P13Ncw8mnsSa5WWGX8ZFMnvL9AjtPjUuR8BTxteE8dU9NBp3HSGs8Ab7vU",
  "key22": "23Usu6ZU8XBqrMeePqTA3cVFdxVSbs3pK24xTVYTUj1TMCp7QDrbzAvJBuKoZyuFbpogCXQVMwg2t3Rs5DbbsXBX",
  "key23": "5X8cEe5gE1iTcfR1mMHVscYpgpexpqezpyNTYAY8BVU7hpusesktrMmEmfLQ2zVm3eYHN5BjERfvu4u2VPoDGybR",
  "key24": "4e6Us9xUneoubHmzA8qmbDxbkokrEKM9P4XVx7hb8XN3hr3rTAVrWsog2jXCiZPJLzaCxrQXTPQQdjjA4eZuuuh6",
  "key25": "29PeQ2jK4tBrMmxydrbxYUrtMn6wnUd6JQUnKwqGYRuWCjZ3yJgvdWzJzJ45h4N2dA1taubszja39tbL8wUwxmSc",
  "key26": "44KBKGWDh7NySpvedd2KD7A9NRfx3XouXZfMSX4BZG6HZcyAqDCoVxeK4XaxDu196nLD6YjRno656Xhx21EFQ8ij",
  "key27": "66oHKQNqa9FQxBDKPU2t5REMe3fTYtxq4wwKXUZjeF5PrMZjyKtvqxVxpSRP623MVSVzoTGvpz9JLfVo5GwTUVqv",
  "key28": "3WjbsPLBzBMyd6JtCfDQUF4ZtGN9fMppLbRn5n5v4ygEvqJUhpdFBjcCBWr7oWkh7nnRKeqvgMk3GiUogdZSoA6c",
  "key29": "29kYNeUcp6dzR8rWnpw9AcyK215ppKWmhxgKc95HyjnYA5Vftj6UaQTy9381wTyrffECHxBYaB1BJXFtwa7SVmQW",
  "key30": "2t5Ym64ExnZws4m2QwHrJ4EQj2dRu41pQdM6z215ktcqqD1heq9cb5zj4cu8pv2Qc3rh8q5JVHHDGvjzH1uKC4Ed",
  "key31": "4Xk2nos6sLPvhSd1rZR9PTgUrhJe24R774YamDSwDfKNDwD1wLL1irNrKPdNRRTiZhf5rg8mknTRffNtyfJofigr",
  "key32": "sUxMovrcCw3FG6FTKxGrhrRL9rESMsXfhv396e7JE2wpzKtZKBYwQF2GhyptybRM7GupiRxdGN1Y1A3N4mDqnya",
  "key33": "496Hu9t2UGYnM3ok7YmpE5WtaSwtucCRZKsWnBwTeyEbxkD5y7fABwTYF52WK41QQZith7zjCw4VrjAmBYcrPCyx",
  "key34": "3rjpHER3KHD4tixpzBDkrCieX3SJBFB5tp51RXKWiKjFnWQmPnf5JJLfPtyPViiHLXpecQ8FzDQvNeK5qMqcVWtE",
  "key35": "4ErjZrQ3r5bUv88iBz7eDYmiEjr2zoe3bza6yiFDvR9s7DgMXL96mLfdwwSaJt9ZayjTkYZmJUbZXuzJRAVy1gKu",
  "key36": "eWavBu7qXTrxeu4fvVYTPC1r4hvPV7eT4qEF1h5NYkMNmqNdvCryaarZpsgYzxh4E5TgAQGrCcTVw7PtFnw4R6W",
  "key37": "6wUYsnD7yUWBAQahn42mo2DFYMu5tX8s593FM8hA9wVnZCQpY8dRpSz5aP8krx57Bpd43tGbzSfSCFzZyfPwU1P",
  "key38": "2XPEZomRK6Ed2ktqBCfNU3LUSPvMVUwwEaPHMogwvJUb4rw7jY17XX865bpt4hMt4ztr9yjLvueXDCaQRqff7KWi"
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
