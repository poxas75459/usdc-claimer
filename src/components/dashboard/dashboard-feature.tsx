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
    "435fZa4i1xpgVaFa5CggXNQhmYz4JBzfi3xuorTR39R7tK6SKh1mUcNdjBQ1GHjd1vke1HGkyoXYSkC6z2dm273"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ntoWN66ZPSEcZXFSwaUzBW3qR66rJ3xoQJsfR9d2iTR2yQCHsXgNUTKKoAmW1TTfttKK3cyaj3qYrjFEbmXB7h",
  "key1": "5UPjLGASHTR42aK5qjqb3e38xWoLGDEaBLsDGfWRiXMCd47EVu5cqPkVrv6XR78VDbVYTycjQCWkgDbHFcYqVuCQ",
  "key2": "4a9iDy49jo2Z3FDRhi7hNGbyzurT6RJJAbA6bPBa8wEV8pRyRNqaxbH5y13tk6NXYnH6qjv5kt1JzTqeRwm9i63M",
  "key3": "3VYHRnavBjZ5Rj2QVsZTB1vYGgojPy8U35QGbwaK1oyFzLQJV6A3Tw71wqzjZ92Qkhv4gmKRtxjse9StfDxdJo9Q",
  "key4": "4EHLdpFJVpLhjcy3VEYtpT7hgGZUe9Dxpv8jcu8LKYzxgoZSkzmh9PDmBd3zcr7vmE8ip6PyGdSDkWoMRBVn6gSC",
  "key5": "2YTmRsCKxbDmF1p4K5abLj6rvBKJjYVRBMUr63Bgw9RdxR56UPGEJ1DeFRBcMAP9So512c2LGz4KZofQZUmUW27y",
  "key6": "4j6UfDnw9zbAHPjMkaLi7bm6RNKxungWGfbQK1sdFBcNw98vUiJ6nqD4UC8kKBa3EUqjsDQfM1pCNP6GQ12aCmS3",
  "key7": "2AaVTAohVWxuadxZ2yto7uEfsyqhXyBazbkZh21o3omQ6Vq893jRvJiRyP1zX3Eo1Ro5sG5LssVRYLzauQAvhPU2",
  "key8": "3SsURmVMwMC8wRXjjVFYe66G9J4mKgvo5zQuogeeRodYFkQdhMUsCE7eH9GpTtoAg94vZphsEPZQ9f5KWj4cEyd5",
  "key9": "Q1YDC9PNanrV9Lys73QyXh9d2waYEENYd3En19hwrfP4FNTTihcQYKRS3DsEFBcRcNxkYT9M25y6Ksd6f1VWwKu",
  "key10": "2pKYRVLRyjw7vaWkVc583MnmN7hdwhfupn44EsG3GXhcTgA11goRpwnK9h1z9p9fZfR7LfV6byY17m3LgSVEzgWC",
  "key11": "2k2p75Cf2rhJznJCGYmoJgUbD2yyLdFkkKP3QaLxAiC8hngxm6yjV99puVRRLWWSCWmjGxZvYYqMC6mfSMK8jKBA",
  "key12": "4BoyTof2P1RkbFM9xptDZog6HPtzWiAkxA4Ge56RXd8oT2qd2UFir2457StpF7MWK2Jkg74Him73RqDgBh3xm3Ky",
  "key13": "57EZKGSmArXjJy7sGkCZMVSwNzDeSeTvfpTZxCu1GfnfCmGQJcyApkAXT1eSXiXKAw2YmY912eGSwtqTyZmvcFoF",
  "key14": "4NWB6T8kSkoQuKpK3q8LQxmir6re8RdAkXSGwr1dPpcNzu9eDGUTQYhZkcA6xg2EkCQycxRVhkLEvUrbR97DF2n4",
  "key15": "5pABKxMfK6mJTCRxNsDipq9xJ8QKgpSAi9LrfzvmDndustV9rB1bcyqJuj9VsLoBTFbTB8LcCxcrcCU9WXHQvswa",
  "key16": "AXyatVMfFepBa6LARCK7ghE3U3Pd978A9WVWg3cuGGTJaiwpy2E6rqwFsYD4o7j4ECpsFV1RvTDsKZGSG3SAQAJ",
  "key17": "eFCF5jsr8XDiQskawuLVhYJxnbi3zG8y9aviEJ8Act1Hg6MTGaeEAa8LZSyuAoqaZb4GHYjLZPrVL6ViEGXEePB",
  "key18": "3KsxnaGR6U6fyNV7NSjPtMud64cFY272JP4KAHQYKWP53KBCxAgipigV26VgSZo4Hfc9eXMZAkwFZAqBaRanqGEw",
  "key19": "38r6u1GYtruKTvrRGqN6ztp3zf1WJFmaXgrQW6j1ax87Rsw5E5GcBpNwFfyqUcGyqfNjGdBXDmwQePVrCtrjxTpa",
  "key20": "e7hRPQweQu6yzq9SADAh9Q1oc2TbEoj3pdcwJcADxDzGxRxT656aG5o4fDrmEu2RiDRTnZ9uLSp7n8vjUuQtzwc",
  "key21": "3aGt3jy1rVcLMAe88oazCeuhveKrEXhdXNnH4wusrhSTprwUZgpEYDu1yF2zHCVYLctotX3mYV5odJLzSo1Me4Cd",
  "key22": "4Kbm91XZfYfHcao57hbUHutTxVKv9MLe8svVHX7GhaHs2WY3XUiFAYMTydTRKCQEMJ8QxmGMYjZDErp4M4eRHvUY",
  "key23": "5F9817CjfXntp5TKirHzdm7rVZtKxcdYjfK1HXaPwzED4XeHc7vNX71EAT1oXozrr2gd6rGg4AYmWhumtWJkF47n",
  "key24": "622NKjXw3GRaZcfwGudZk1DZKvDcx5VNhPuwbsLtNvXVAPjk7eJgDBZp6GAebBBSYahQQCHWVdR3urjVvdBBW2oZ",
  "key25": "3tiXJTtbuk8gajoJcK8HCgDdW3rrzc2KkoAyjzJF3GLtc7Bot3xZ9z84ej3si4hYgDNCaXDVwJE4etv9miMYszw3",
  "key26": "3uouMoKmdCWqSJ6x6cG6XNasYxG8yR6tLKwpU8BbLacTeXvfdcPAL3WhyxSAHEoqJ5M4JwTCJ7KSgvpQXZcKDMXK",
  "key27": "5KZzmK5Ta5Ujx9MZQjTY2pN98LyyZoEHFN6w4nWXDwo2hPn9kPEKwTo93L8Qg8htDuT7Nuyu6eoHwPXDEqP1uNH7",
  "key28": "3segsx8an4L22JcCYv7Uv7f2Di75HnT2hQtE3YEr9HJtFhw5NRjcyiHTyW3Qx6T2gD78qc9oa3DkrBS1kNoMrrVi",
  "key29": "3Jk9iseYSZpjKBEahqEdRvqqW5nqxj93fuG78CgHKZsruw722netoHUgx3WyddeTLiew4Nhh1NftBWAzjt1iMeon",
  "key30": "4beWNACMRUC58S7CcSiqHoFhnRFbET3mZP3FJdfQH53e2Kvw63pLxuXBsnhdcUHoFQwPEcLTTtWL2beiivwAfUkc",
  "key31": "4gYdz9Kk4zz5ynLWNvtMKJ6B4qsG3BPtR7sBkRbKxRkuwdFBatgu5QhijsH3iRcxpaCBV3JGcmt3H9Qi8ZWskkGv",
  "key32": "eZdhnHWwrFyaWLD4DixrexGjxUsTapzrzSN1urmxFQpPLt2T8aRZ7zYdmMYdD8eoNruEY4jX39ZozMvXVHqk4Xz",
  "key33": "ji9pFDSAdtPZVgh5rCyUpnqeEnoHwvN87BEY7nhZT6aiwUr5A7pZh5EkUqqHhMaTKLsqPNwmNJDuxSU57nzXEHc",
  "key34": "UbWoskp3K4PWcnxMAtEKqNXbX6cKFXgcjhVox2PR9yq8UH9mmv4njq46HpwviZrxScN8TNhZRABkx6UxsdGojYM",
  "key35": "2aWdJCq6VRwaNiPwThKdNGFBW2LmXWWbRhuqjax4gwSNtpu2fq5eqZgLQqvyCysTveR9XSVGA2Jpug4hbsLY3KSN",
  "key36": "2WVbLLDG2rYHqZ8qUPNokPfzrJJMkFuB5VL3mpurjvAWBrzG1P3rg8VaXTs85He4DLjt9K1aNwabWWGn7VguiDAY",
  "key37": "2XbywP6smvdEnCzwY5bh4amCPr8QUDGJn4Smpmw9rsqg1Z6xdaGYDdeFeidRkdyB6DcWMwhn2dF9G7BZvAyDwcQL"
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
