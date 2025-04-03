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
    "3yzsheMcZyCsAsx4ka7p3Dys78FdG2vzC2LDZws8hye5JDuedg1jf8okepTAwuJKkSgbCX4xfHvASXw1VqBmxdyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PMuxbd2rt2zfwv5tGpo9tvfPVq26xozyTQwwYAGpNKXCmoQqE62wBFo4eMJ8rhZK6Fpd5i1MNfHdT725iYypQL4",
  "key1": "GxEP55sWXKTMZMTEZDWVWk7XFsDGGS9nUWNh9LYBgypGGRNrANvRBcgnF2acWHnvp1DUscbLkeuGPJSzvwoUo3b",
  "key2": "2C3Aie5833bgdYr95k39HeiM5FZYUeqewwsUyzGtqPRPLiBqbTk7adeRJYZiJwAmirLvwcnpAiZ8H5aBX1TbmSaS",
  "key3": "4ZTk2vJH4yXCPz2te4DP1rCqKRwvkxrMysQD7GY3bJeZwJHiV1nRqF1tsWcf1siUpoa8J9GgyXZ2fCLjTv3dLiRe",
  "key4": "3fbPc2dGqSCgyCryjgTkzenaWLNjkjrQzcZxa5xjbewbZ6njpDFUwPTanbkvqBqUUXHpkXFj1tVERKWDzQfC9aqG",
  "key5": "4qkk6kxAJVDNunGzyC1hHFqbu7EMMs4XicJZhCHupM3GhQntGyZ4cqngaTMTRK4NDmSZsqziN658hWBrEv6qL2fU",
  "key6": "2ZLVvM8kAQcyYuTD63CLq3c4BVLrWyQNRKUyDaoAKBLHT6WYZ1k5pL3fau7rhoyR21jDdY9TCsgJRkyFqzSaBNXu",
  "key7": "TgBS6cCCYd4etJhUrpx3bLPdf91EQW3j7xLpH9NRqptj7UqrPFaneQzh5zJkKY82kuvfbEK4y2QRzHuxhEKNUQe",
  "key8": "3dkufxCvHEZXyN7xUn1XKpHA3Rchm2naDVysB7HE4RD8P2CLZ3vfiTSWZ2TffpxCgVutY7HssVAgELvepYTD8dun",
  "key9": "2YvherqAszmpHVvej6os2C1HFJ4oEwkHb3SDjnSz1PuFEavCdZMk7xjukiwBreTTmXQJkZuTfcuydfvh2Cc3NfPg",
  "key10": "4NaM6QwX32H3j99RKJtmYXYLpf8nQ2me2UUfVgakJFxqmJB3Q1U7K7Vsip1uy3biHmxHVWWsj6Ttz9YrGSfFpyTs",
  "key11": "3Lu8Gar1geEU9b8SZnhSAFbM4heFBAsBTkkYHLKC7Gjx4KFfhVGLuaKo3iEonQVMEPMKg3c2pbv4BhNj96VEN29S",
  "key12": "wkerzjvNeGsZqJk8RpqTUyxCayVnEE1S7Jq896SxbcD99qDQt4zHqqS9jLt5pfnCkxzaMpY82w9RpecbFoLkt5m",
  "key13": "64KRJg2UdLxTLMseB2GHe7mFdCcX9fykH1xsdvUozvAbE6Buxn6SMLMFs7jtWeuptZgfh2wKK192GMq6inVys7Eq",
  "key14": "23iZxs1p8itLdTjAn9wNxDEMVATTo4BbiKrUack688XwFdm9cdDWuWptSaXuTs9WaYtHcoRMLX9fgvXqTcxwRXTA",
  "key15": "4NxCk52L282hNDZsL7G6uuaPhtQKL3FiMmNFPhvS68esrGnA3Nn7XouWwVXKE8h1DPGeemsfLsPxNjibj8pQYktc",
  "key16": "59EYHgmwhPURgrrgR4s8TszBCUGo222cU4gioLnNaGeXTeeQNr9Xa5neufqPVsKfCUhacvEo2qREGdazY8KeLQBv",
  "key17": "4XZNUzUPAuttDgwpidJtSc8BXc3UqCqhnCN9HYmsinsdtpbHjemjakQHiDb6rieCJMt3U2HaQQ4VzD6dwpXvR2xt",
  "key18": "3i1nyJGoMRSGVKqnypy4YsdqfqeskEdSa6P8GWNsUtJsGQnpSBUFKLg6Gsn7UwjKwvx3AT4VYMMXVvYV86F29Dxc",
  "key19": "5qWFwyVHhQSpv2wep6QBaaypzGQgmEpXKfdjAB1qfgcgrJqMbUC2k9pouCAkqJa16A9u9mbiL44Lpc4rKWv8kZZ8",
  "key20": "6L7sEAtGGK8entZWWv7REdWn5DpLr2RD9QMRQ4t6mqYMsdDrKLLMGQ7eUdzSktSNfPqYauLhfJMXBvPqEU4shug",
  "key21": "4zsL618HR58ZdWQG19WLoS7YWYK4UUSaDpXjQMQmq2qD4Hy9d2ipbZsTs3JrPJuosCmp6Tbz3NZspZdxn6GoPxMr",
  "key22": "2DzqJaGBkd5Zzombi6A4sthgjzAE7RGGM2SRkycrzDgNrsBGJG1ZcM2qozfVdovncuNfJAbScjfhVrrFAs8sHg8R",
  "key23": "SStUvztn5SKB2hc7mdtsohPTce93e4ifyNYT6SR4hG3zgNSkF23UKoJHkpB2RdNhEEUH6Km5ZMm4KxMKEFUQ6pw",
  "key24": "3F6Er7ztiR5eGA2NZcHz9oYLUv3WvoSfsb8LQuGT62oLDMHVM63qChRyJ7RU2CcqTjPRHam14Y3qgJGYpuN2J2A3",
  "key25": "2n37Gqw5NRhP5fhwoHviP1ThYBrqUC6VPMAj4fJPD3WEJxSueCec1ANqMomzKYboPpXiCtrK1UrcGVggiZnmM9f",
  "key26": "5iNmLM1zrvtAznQRKbYhwxsHM2dTjoxHXZQoZszKdKwHcdTeXYAkLbUgxkaDQfE5aK3QvxYqQvBfnFBfTNFREbGQ",
  "key27": "4GCivpUiW2zfezxgrQJptCWTVC9L5fTjVs6SdhC9u78HHv6WHUyTsUrY2War1UVZHhr4yPR2QDXBdHp8jGDDfBtU",
  "key28": "4QhfEZqSYX4apoXGJGaFeNtn9bcG1isU92QcR7xXidM1ZTb7ySQqehnkQ4MM4SZdnQu6iBfBFBgBo7vMfJ91kRPR",
  "key29": "3b4FA4fFqEDLg82CxpMMtBuy4KG76WuVerh9sEgD86gYwaAhmNtXxJJ82bV6QDevG3bWzsTtkmif1W4hgdc7LRJm",
  "key30": "5WT7J5sn5wyQE2fT9hr9dLVgxeV3w75YyVCHRopLDMv12ZwrqZSJu5YFwtXhR9UkZpxZ8C4dQtcDbazJ8A6y1BfD",
  "key31": "5xHw57nnJe7iiU3BLS1HT5FsaWK5GipkPK6cqmTBe7WEwD9UpgQKBgrBrFkLrXNPS3LqLVvUjGMZSf3oW4u5dGNi",
  "key32": "4sjC6Yv4p14udwYEZvH4bs2dyquH3uEAUAHpmqPU6G5Br1YigutXGuLWKTG2AyNmyhMWE9P3JR9TB5MhUyMFJUbU",
  "key33": "2YZFRtMsNWzrT3wSRSYggzw1NNGvEov6ZAboDKbf67cCW4BT7reX6dkt7RyxVFTua9H9b9vcqvwyq4i1ySqHHb3L",
  "key34": "4XC7rYXxTeCMaovUDj1TeNdq4AKJoLwzYqTvzx5cFS9pb7pjq2Gzc5DxBjNNpkf5MjwnRWXqHJAHKY4LE6zcrJ64",
  "key35": "CMjHTiGAFNj8FkBWH1QvQRzqzsqRnf4y3ePoRwSsucfAeRZwHaPAUWZZ6CQEfDEtCQowBEHiSz7S7guRgBKbsek",
  "key36": "5xyd4bxCoaPrAXBYLp8afDrzoeaptYHACivKCe52BNz4TUkhxmy92UdF88x2pnfW3LZ1D9WJs1GiD9ixESLqRhRu",
  "key37": "5XtXV5XWeYdiFMC4HpKaYHSbAXduAYjL8y8K3e2BgQMNrsYy9XW8Z3tUnvJ5RFmMbh6qtdT6YggWf1u7SQNL9vwk",
  "key38": "4i1CFFBephToDgXsRVEqGQJ121vX5keezYvoUnZHghzmNSTujiJUhbJqrCMgqcKpXiTXaE7SbVfrCKP8g63TQFeQ",
  "key39": "2jY3Keeou9HT13nZhd1eimTzN3n3oxZuaiXmqjXgpd3peKBqy1i5TcYA9RFA2jQYQcNhY9Bhis4LBo5ky3mWX5WM",
  "key40": "54Y8UUo3FcBRENcNFzcHjvCgTXsFgYpihdd9ErV3D2B9qxZGNbGuEzjm4gueN5c8dAkanbCR5wTZamEeiVfBJ3JY"
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
