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
    "2sFMYyHuTy3tbCAUCNLBrxEj85cZKwh6jzpUmAQiuohvQJwHBMe2MqU8odDAeqkgdWwqxLp2kLmivnEhts1xgGV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ASRFpiDfyqNnU8toWPkSketQsZhu8X1TomLk2f9yghgsb1ZgsjDztcwivG4wPLgJ5hs7QXdB26TVxHm19KQ81MD",
  "key1": "5u1jnzV9aThZPb4eTbne9DUXboy9u6wprgKv9kzEvqAG5Gd7M3cPUzSnLPtUTf1uTLL696PuWSGN16qfcAutKrBi",
  "key2": "5X4YFXXbVRGQU2ndpbGt8L74JBs5t9RVS4hVEXA2uZ9ky8c8NCyJjNn1kNPdg2wEEQYquXSrnj4AaUcbdtXiA8Pd",
  "key3": "T4s62gkJAohx4Hy36MjPvgS9XdrkseKRpZ2U1UQAaNJAm3QUHzYjqnCPTEADq9WT6Cw3TetnuLDVkcsAbHW2iHw",
  "key4": "4wEwMYeftfnmaAzz2s6c7G7Kt3cTi2Bomqj96ufu1dg4UqcsnVdRoY7f2ALt4qNfdsd2RV6aWzxKSD9LYmnx374s",
  "key5": "34qzLMmAo5UbsKNCtNcYgyC21FLBH2YuCufZGUmTx7ZdahvpoWLgLLJDssmwSsCafYbs6Ca5g4AfYHn9n6RgdxA",
  "key6": "2h96kFMZPDUcidPKVD5nZnFzDeZfBVdGMy4v1G3fZfyDyYG3TNu3BTPYX678dGFRuy2UiVdbdnTDC2qdZjKiL5P7",
  "key7": "3qbzbTySDGCwo9v6txSqYXeQ8Rbbo42q2sqkUFH24U3JA2ttLQWVbSHf5KtdTyVvsUtJ8ZVK2Zyj68MeMxASPxeF",
  "key8": "KYMWYcznTquB2SjC2s3mh8ytVpz5iKPHHyWTtFuVCJ3S8wq4BFUFAwX4rhYu7NF9BTTzE9RnZWcZdxJxWtBt97P",
  "key9": "4xQZtrU2eAHhCsSiqEWYNisMWSb85p6LVsE1D6Mn3PMcJoVucEKWtn7eB435wwGrC4A3yp236KSC2AVVKjZcKwSE",
  "key10": "p2T9wmBGUvak7j63LEeGvNC8r3qRJNNNxysCmuQ3otaU2ePjGxBw1Y1fKQ6L2fWk8MLz2yHYe8CXaWLHPCmJAFx",
  "key11": "5K3fbjt25CY5U8UAotZ3nWgiZJj2wHsyzNRv8BjLS5uuTXHvY6johCLiejtzFuY2x2YVjEpwY38SbDeEFXPt1eSk",
  "key12": "65aUzAcrYDbT5bh79hovsXtnE1vLkqwH5JQ616rsoQ4woneurLJesuaVPht619hh2GE8oF4pMWWnBsoUTbyCDpzf",
  "key13": "zj6qALR5StiC2nuNE2qGoZZuUZtVWmhupxLuTjhNk1NDMyzarRLAkvFjGTppLmtdo7XJi3jrLJMXHt8RmmDXrsR",
  "key14": "2Z1JfQdzC7Qjm3hhuioLWhCqbvLMZZwTT5SB8Bp84UcTysBZTxGrZLpCiPGHKQ3z58RjkxXWPumKtRAUwUBHaL18",
  "key15": "DX8njdoMUDXhR9rYeG7NNThxsFstmJ2TywR9CgpjfRdSAVwhZMoMTGqCAmuPGeDpTexNdG155iJNwE6SoRsydA1",
  "key16": "43HppnfB59VZHsyZZFgTiTWV23Hp9m4iEQxzG7Hphv7xoz5wVnw1gkxpeMDAMkohyvZPUS1LtHpGds2N7DWpSiwV",
  "key17": "8ypnWsaJFuLaWTjrGUL5zwSJd4ABfJJsCoaBdFCkaHxSctUUrcij4wyHCZrPogio2iwHorD6H8SPUSNgHykdsYG",
  "key18": "5nwNPknLbEk9xVCfcd6Wnv9xuZ6VonN2rdGZ5AXnf4omxe92VH8inW66jMZshDufK9HNS3J8Nbf4z2w8rQuRnvYk",
  "key19": "yxFV8v8pMXLFMWdXCWMUfHTkK8NMevWvB2pWchj6aE8D3yoEkrxKmYxFFJF9r1CWxzfhsmnt8KP4WkrQKixSc2w",
  "key20": "2kkoDoGDScsCPU9jxhsFDSh5LiohDmRZ1Mke4f2YPWbC4nY2TzwFwGe2pfLizm9JAwPQzkzwyvwV4P6fsrYrBH59",
  "key21": "4SDQEqk2CwBuG7Yte2ZTauHAS1VuV3WDUgVx8okqTfGykPp8nhAtRz6sgotGX6gZZjfaDrufifKBNuaS2hzrbpEY",
  "key22": "3TXVzQWpqeAqaz1mgTUeUrqSnxFPDq3EstPW6TZpG7jXFoyitubQLTrjPfxXcAJGyZ8KEgAk1hsrnU3jWE1g35Hw",
  "key23": "5JNkP1qEtrVSna46LJps5Vun3e5EovzyiugtdA4cTseut6GsmWDn8eCLEJhXGprxXKTcQqbj1syfaBCK5qM8QiD7",
  "key24": "35bJ9GfzTdbLpES8BHttv3qbXf2nC5xGVDy4c8zjQmdMq4zqkfYXbrN6tpwc4b5XftuqVDVj2wvKtugRpZmjWzxz",
  "key25": "6sBr6WhTQyms2Snvrtbi1rHAAHPPPtWuVvgwXcS9V5XJ7UxoYpJGWuKAHCEiD4s69cQ4AKHcHoiPQykbE6Nmsh2",
  "key26": "4ckP5BmpsgRiP5cZ3Y8PTsv8LRbfhZLdrEkvYDhZSMwh1XdDJN4QtobU6uQfHtCiAxr2YgdUSd1FMo94DXbovg4t",
  "key27": "4jqLfueAerbvMk3SV7d5ZXEmpXU5bC9Aba66iR3spV95UwXuPGfS45Zn1pnzdzmTrF5QvW4wqRywB3Kfg63AYUUk",
  "key28": "5mdYkdUepXGYEDP4V2PhNpDDWxazKgSiyehgWefiEihDavooeRsFGvFj4hRCtNc9NfUxMzWt5RX9rgSKeshoLgsS",
  "key29": "CiYXKszetykasvNoDbxijaM3Fshnapz2dDY7aXGTKtUEYNcFu3YKbxKUugFmhte7PffC7gUgwaVLQg2WvXEWMDc",
  "key30": "qPhqANAhwGjGAtiysHRTkpYYC5zTNvUUVF5vzkNuaUQERMKGT6R7XR8rdj7TazGHE6efuHkjXhVyAxtUCjJM9gj",
  "key31": "5TqtXZqE8MoQarF8UnYk8FqPuG9ppV2LCm8AThqEkkg11hWHKYBui3z6hEDFffDHMJT2vxtBX3yQwqW5biubombE"
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
