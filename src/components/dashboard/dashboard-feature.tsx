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
    "4h1H7Eqyf9Sp3vHrEGTjZt6emUnYWRH7kZxLrymWBssiSKaMKkX8oY464kyYCVn6x8uDNFqNv4kAu6fHVosadbaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4faJFDircELMUhqJDt7crELgdaTCSoAWWtg9wzEJmD15mbxBiiFNCHg3dEuML4ENAxYpzRMRZ4AVVxwryubePdKx",
  "key1": "4mUC6sEAAUGXt6H4ckSs1D9fxFyx1rQhhJHaFpN9jagRXj88GKgAdcueRJiSQTFxFVDnQA7Dt6rKfhmpAvgyupmc",
  "key2": "3uEAH7N9yDCaQ59HdQJzn3Hr25zHCFYhYYLWYTf8B7Pg6m9qxjtjitEh7SUEJxTsT8QjhGSHfVgtZEqKiUbn6p7t",
  "key3": "wcmHbB5G96VC9FUFJB7byq9eioKPWRBRfuMZdSNfySVntzk39yQSkLN1WkKx9upm3JhE4sSeEQFRjwQDTRQxzdq",
  "key4": "fJjhjP3wP7VXdfpxRjHRAmBX1p6PBgUYeiSB7Vks4tubWiDUMxRYuzEnVrtJphJ6xny3uz8oktuLX3X6wAzxrqU",
  "key5": "2Z643FGjAXrebmPm6aQLdfMhFSiC7KnYEYPNJJdVwfnZbrVKmdr9GmiTH6HTobmvctFYYHBdmDpMwFd6ioTH9uiF",
  "key6": "J2KgGSxX8c13zDEHNWfBb5wevYupMJaG3tZYXpZUotA6EWuP83rbXcuTyf2PVsWpitjzAqpF7ERzcen1HvtakxU",
  "key7": "3kYrA3Gy7i2Wyx3KBCW5XerD3qDx2mTzfGAkrYbZbHgp8znvBZjXu1J5USANScGimPwFvN5EzHmywsBBof39Ymwe",
  "key8": "5dH5ci4XLXoP4nHvhNF3QM66LCexbAoqSWjUAGtDJsu4v8rd5utmkLwf2JWsCPMaYe51MT51TkKHExDtsvt77rSM",
  "key9": "4b4nzTLFGeVFi4F8EfyhCLSUGDd5U22mcbVNFqKpyKmemAiHQ3ZvuET9aXG6SWWcpPzzDunokQCtrSwgrBpL4p8m",
  "key10": "43fxg2x6Db6KPKN7hzg3KiXFEVpDGJL37T2CARHiSKmwSFazrEvXuQaaYmhfRxT896NmUsmRwhGf85r3AKQAKH7G",
  "key11": "4Pn4xW7uNysNevGrSZV6JAh6qT1QHtTVyPCM8Tgv6vFCBETUm9FnCSdhEj2oossTRTCZQACEnhFDxjFb6oHUJ2NM",
  "key12": "2Gfaz5wr3x7m8n1L6ftN249RG5aUFFzRf3M9XSkQE1VdXknrokB2oqc2Ftmowyd9RvS2p7NuM6VGF17uF3VNVkmU",
  "key13": "4LaXSzKeUKmWXbmZ1jKoFRD6nURDLhfHT2mqS3y2oKmTbegSB19UQ74N7qn5zf6AKcA2QDef9VReywwkAShKtQfW",
  "key14": "efYHisyKanxQMxPscNryLMCEtWjJrgNoyvkMtejRdRVqG6Py8CgNPLsfKjWPEVU6J3Ci1gAWN5NKcES4QTgT24d",
  "key15": "LSLPw8kTEeDhMJSwJSLYosUa8DqM8RZS4e9mCczYV1YSze2SPxHeUcwx4CJCf5i4YGoQHZC5eSuS23b2UPCnVvk",
  "key16": "5FKRNtZpTNimw1srsB78CRTAnEZy5PPGiPtLeL6ikTooHHKfVgqQBo1xsyseUtLWKamw3n25KvAU7dLxE1JVtv3f",
  "key17": "5D8QrvnQ9UFvweY9HAcKuEzQAX9cWos3b66HxfQAmWQAWSSsQcwJzEXQbm6Wcdsuc9Q5BZkTcDtZmxuBvY9uBiMz",
  "key18": "2qRc3bfL7Ay6N82Z2A1YFi6wavCUWxhfqumPQCP9DfK3ZNzpg1c2wcCmua1c3sfXNpCt1E8d8Y8yJGuhvfpmNdg9",
  "key19": "MDJxBAEoccSyevig8HiB1MN2omq8iocsEvuNvKSp9Qffeq1omkrKUKN4dYYD9NkEXNHMMy7LDShswzqS5wT2pBa",
  "key20": "3m37tgd4N7L2TnqYMWPNDKoGKPLAQpb5qt1enh43FeYAzwmbCnTBNm14B3wtEvmGBJXmC1mopvrkDVeSbHqwa9Xd",
  "key21": "2FJLApqiLKc49t72ZvNM7qpsp7RhQas65KwR9KdAnoeGM3CBnJNUbWZwDSbeuCrg7PkX9P3RJFif9as7dTr6UCib",
  "key22": "27mCH1yskbrQc35tqaBZ48z6wThY4HyE5wz8mZdBMy3PL1xBqbFkfnrEov6N8WbmfMPbrCsMtdiDTa1vwXtcNcEY",
  "key23": "2K532A2NputQgg5HhUByeNxhdjGELsCDATr4872XvFcxHJa9CP9VhuhKqCRu89Uv6K6SUnXwvW36WgWbBf3EQhP",
  "key24": "478cHZWJ9fqmoDRbQyezdAwSQgzT1KbZ6j7igpCEhsmDVVK3WaXRvPbvYTtoD2GkqU8vwx1qkNwxo1ie6wVMNeAo",
  "key25": "5vkQvW1YXkyUq7CFipUaZdFAyDWCRgis3u7NK1x4t67MrrCjfsS9SLZVmvChrFtTKrRPuAwy4a7hUtX9KQzBeQiX",
  "key26": "5J2PsgxkJb2pWmxeR3z6duSSrcDkSRLa7LY7YpSCgDfTKXf1YwuEnTo2VrQPSDNZedt628aHc1keQjEyMgP4LEQp",
  "key27": "4VQCY4D8Px2zJwbXxkq7QeKRotFgtQGd73D47QCFHpkyHg5uiuzr4ryeDrTwzRsd6HfnkCuSS8KxNC3dkqLjAMjp",
  "key28": "3DiVsUPNyb8aEcFjfVNATWU7rDVzuk1hczESaU5GBzb182dGY7Hw48k8jUB4XHN3oiifv5oX5phwUMqcttKuJYnL",
  "key29": "8pjBGDwA5qp1AX5zfLeHGGcKiEVtrQDoWQriu48eKkCPXVAgSvoaxHAjcpL22YvvmywSTiuxdJ3d3sBd3gQpnTq",
  "key30": "3ZzqiZ8dSrhubk95S2ggc3Qxx4Cfu3hGCt73VAZQAxMhfU1Zw8Nkm43d7W2VdrA7waEUc3Dnmou7zPUz8iVn9vvV",
  "key31": "5zikWmFMVH1yqi18kpWaaxmybwK2PxanQsBRvGk7CLCBbEPBGFjpJbE9A3izEqVJnZBM72VS1bydh7SrQDm2ngwA"
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
