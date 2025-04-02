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
    "5zm1iNiCkoL2XDKvFR1MgH7f5uTdhve5LnRZnq1VXwRn9GnhJaNVz4Xdjnsp86PopxTgwyrwAx4yJu6HxLdhPnWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EFaBEkwhgtGtxZEC3AyCaroG5D5TiWqGAWprbeSSs2DkSgFLCTr7gwwXnBTPjFMk5JZWrwaPKGyMLXcutEVN3qS",
  "key1": "72wsda7kaZkTbTz4iq1WMC7B1y68FkS49PKHqZLAbSTzmpgqeifxVLCe8P6sHKYupfXoUrSzF6JNNTKvViPQWYh",
  "key2": "4mQUaTCLnF2vM6qikpM66sTEMhByugcX3f2hqQmoTXrkjATsFz7a5bEna48z1dFsgE28sN4eP8sNEfWMgv7M4Vgz",
  "key3": "3dJHXKrukcnQBPVJ5yJuWhMVQiUhGVT9qVwqmbPiKfVmS1sc4wQLoZepVp54A2MK1DYdovzuWAfvNMbPqdCnr7Ts",
  "key4": "4crYPPYifFGiRCBydAacj49QxgvSB5swCXeHYY8GyJA9s4aYHBiZeZZR5PQJQ4hpxDyGdWRQy1pvJza2U7c8i7p9",
  "key5": "cd8MgWXTABtuDzcF6iwko6kZUeoz5K1NXZ6uE3yTE15sTFFaC3v5HDCsa4mLE4PhFhivusmDSDuybJDPEkjSMvB",
  "key6": "5PEvXvZFBWVytbmpnh7AfRAWbm36y9URPsPVXAADg79XqXeTD7fzVVS7D2GvyJ49D2XpYrv2x6ethmMSVEFVA4Up",
  "key7": "5fKoeVDqPzLZXdcjFqdEfBD6sbmrdefvTDnKknASMsonYs7jGKKUJueBVR1nYwDog3EyQQT8Tet8Eha9CRDAxX9r",
  "key8": "46oxVwCkd3CNsiaHpJ3PwN9hQ96QH3Wv5Bi8DkFRBwRbWUUUjXRrm6FfnZtysPgsVZcP16ktJk6t4xjpGVV49n2A",
  "key9": "2fx1pVurat2cst1U1wvrxUdeRCPc8prEET5vRAttBi71WsxHNruskMcKt4Mkp3NizAgRu2qED2HoJyDLGiR9FTGn",
  "key10": "5fGcTyXznYa4bhwKY3UMX4ZuhyasqpFxQ3Z7ZR98aVv6PtGmLoC2KNJN2i2fASCGaj2dGR165w6KbNXLdavhERpD",
  "key11": "qKU6Xt1ftvAxfw2k15J1FJ81JnuSrYZyTLpcERQCF5PQsdExt1kNV5uxAu51CpiWRKkynsH9dpmZ98iy41jvx6a",
  "key12": "3upjEsbdh9c7h7xhRFn1xaQ5SDmVTekKDNUTMMpYZxXyDr2s82Q8Zpt2TMSc6A6qCPrqxKJYuktvnGmRRWB2e4s7",
  "key13": "5uEpeNzdmZqkGCgRn5LTUH7c1CZ21FXsmB5wNLGHKL8c53FykkdHAwTuf159VzRSTzgtbdQBPJpPESdLd5NdCAF7",
  "key14": "29Do6raVkDkEcNM2Xq5XeGt9W5Vgtuq85oVt6Yc3tywNgkX5uhXvgmy7iRgh8RTCNBEM8AFyKupLAJmyMq8N3ySV",
  "key15": "5jc3vaRbpR8C75gSnygQho115WDrV9YbrSYzntZTN9pRnMPahWCNSM5vkeUuA8q8ss445Ap1jc2LfGrJfBqQKPT",
  "key16": "514s1fuAAqaYmxJHcuyrmKVJvTBuaFXFwgXndUxeLnYZzWdqGeYpb1jB3NftzNsGEkZj1jQd9mpRRbY6nDEAr1xy",
  "key17": "47JWjt6S2emkmYgmhM5jDaKvf2MCTaRZRUEpqx7Pv3S1YZrPuaysZpcsM3eqKs8d5NPjhjV3qfU6dGJBAMK7n9iX",
  "key18": "3ZpN1AZkxGBNstAccPqXB8edYg2poV3qppnj48u2WPNfeVUXxyUc4CzxAvCvfJfiMT3ZxzJbmmyy72qBcCVeVnLN",
  "key19": "kS9yDXNnwNnhLkCLJ8V28uY8rP7WNp1CEZcQuffGcFpQNMX7be2dVw4rJVYYMrEuju8f2jMyFWLrzieonKC8c7p",
  "key20": "5hsG8yuGaAeBrTzCkUxRqyqJo6pB9gCXAH9gcxnmsNA8jUEgcs3nKq7HZHYcbe7Cp4obxcZBSbxMuViqdmjnu6nV",
  "key21": "5jytfgK8mStapZrCT8x2NGZQDQ9ESHSsggg6JhrYFfgsaDzeMz1kusUE1cD9YNkN7j2jUw8EDyz5UFbY9KT6aPbx",
  "key22": "WXJCtUgwotUL2YLawhBPVTVmgRcSEVpfu52gwQeFViDP9gc8THVSTsvQDTBw2Fj73Zt1K7c8MyTTXip6DFCwSPf",
  "key23": "4TRfprmcYts8bKbC3sX3zyBFzMMjoBHhMxYbTDSkB4fBewmin8bbBxPPagQ5y33Fpsz1hNEruKUpSyWZmCdjDeam",
  "key24": "e3kpPMAqvsqyZBnKQQeSKFk3cyNMN99XMgcCWfdnwfWp1itrHdPtfFk4EufH8GprVVYhdej6wBnj9VmCfhzjmb3",
  "key25": "43RdL8eamypz7GJnvL1AKFCrvJTEW8Ly27zvVXmvhsiJsqfA9UW8WMuAfpKphNbXokrPC8e1jQLqohemfpXU1tai",
  "key26": "2wZm88yK8xqZHu82F6rgBK92pNvD4NgQiiWbZ1k3Hkberxm7CxYbHhe3ZbLpyVwqoy8fNoF7zHiv6qPaofEY5REB",
  "key27": "4zArDcZRVvBpouz9N8vdwW1RHWiNEEb3ReM9ynxWzAaJeWbgCWombMUntyYL1pE7Kjc6uMNCaehKEaYYhyjzZbRt",
  "key28": "2RpjwoPd5GkYkpMCPidpPS28TaPivLvMY28YgK9MRrFGhq2bT4nTSHoFFVdw9SsDagGwFAEcynB9dt85sKrDPEjg",
  "key29": "3UqG6EnLA8X6qNLzwa21Y3Uz5yjbRWTrdTHqtp7QMhygnVrVEN44NG5jAmkjPLkvZhUmdPskCWjy6jYeZ9YeQunS",
  "key30": "32xmNgCT27JJHmB12KSyfumk1etpTWBXJ6PtVrp5A4UyN2zrJHLv61xch7Z8bp65Lh2xodhP8RcQTQ9FzVsy2mMQ",
  "key31": "2qwnZhcGHqVkRTqm12og7mhnJLBR5aLg4hXxiDG7bjUjtzM1nKdE3i4Fi2DVc4wUtknGfJNeFNHB2CtunqVA43VC"
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
