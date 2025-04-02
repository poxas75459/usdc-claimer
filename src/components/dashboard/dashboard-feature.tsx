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
    "9JWmhBTRDGEYYHjcbMBDis1PUgcUFipwYiNHHMpjMgmpm7Tco9Vyyv8ifiQkieVRg5BjM9bhSRaUUXwfDYu8QHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TQfhSPVzsaHKyLrHgmYNPUQhKVuPbfRrrBApCXniDBgdJSuCNBw9P74J3s2iPYdwM4i7J2FkusNjBQkGm3knm7X",
  "key1": "24SFT2bDx8sTjnzbRatW6dHocPS2KUWaZYc5iPS8pYkbzjGqjDHfhPNvMyUsqMwFdzGuyfovEutuoFjLCtuqx6Q6",
  "key2": "7AAB9UfQVEbgp1CsL9G5ssN6SMm9ZpUr7HWzefsMMiGzqXtSAPimzNq2PsyLxUoZHpZsbPdmKfWt2HixUh8aWDE",
  "key3": "4DtgZWjQ9DWXAQgmkuRjoUvCBvc8yzVge66L9hMHSRvVEFfEdzNb9WtLrSmw9k7ZfXjqWAgtGtsjaZkaDF55Jf7n",
  "key4": "UQmnzUWZHtKEVhypBuQ8LXEUX1MMKH2W3R6kbthEViwkTeawT1bDenQh7BXEmknKK5e2juoR1bKB4HMUCxiLiMQ",
  "key5": "4sKU6CkcJG3guon1m666iUEEjDb2gQ1bcXGnDRdM7Nk3zGaCx2Zk2Vw6fcko2U1Dz1gk46zfR84RbMAt6i6zMGss",
  "key6": "2TJYfkzGs1mjHxGFD6hrSfeyYrcR6BLbk41cJJbt6BkKg19AZLNUTuKU3r2atFQdgGTjFuzafYpa3k6TmemSk1V",
  "key7": "nJsfebfVWWQvd12dutR3RqNFVeubmteZiH2LM8rnha3fMfSN4ptn3nuTmp3oLcJNEL45Merbf6keLi1EYWzj4ed",
  "key8": "3sX3HnSW6ShUNTqHYukuCn1sHVWahDRTQ51nniuVJjGH7gwcMTpFtbH1qFTzfUkNbqzxxTMV4yoTzaF29ByFQP39",
  "key9": "5aYu9Z4nBVD1RNd2TMQ27fhSweyeJFH3pjLXTFc95URLH5mGDDnk9MYuQE84cnooXGkZMe2N5JiyreRtmmQafRHo",
  "key10": "3RQHeW7bnY12pM9Cajx6nADMVQesSTuLFJAoPcJZc2gmcfn2wBc5VrheWw3FHxL5zrkrmoeG5BJxg7ZNC2X4se7B",
  "key11": "24eWv4WpBugiKyp1hDgXiZmR5H9HDvZiLTko3fSj68YZ5devBFeD1VEbm1DMr1dbxoRi2956TWkYVhtDv3pyxsk7",
  "key12": "vkudLjYecuB8MpoZjYX6Lui88GKDQAwuErRruN9151mGtjzSgwKVSbcfxGaVcbLmwT5UBgndqhboTcAMNniJ32w",
  "key13": "2QzE6YWTLwXUaH8QdbCASauewhw8A2LnU3FRwpL9DxESHtiU3fY1gkKKZswYv5p3ypTxgA4bbRZbdF9eRTTVe82m",
  "key14": "2SyH3W27DWLQSoPBPSqxohoRSeW3EQ6ku5aoHtfSTo3zEX9BAFGiRPq7xxcMumhdbpQhPtSZAK7TVUDHUNCn8wzW",
  "key15": "5DeWBGcKyxFBc7Qvo5iMhNheqpApnTXdWBqLZgWs2pxEuqrXkLd1UudSZkiWmUWPyc4EJmPZWNSwawsDogaupPso",
  "key16": "42E4uScBznjunRZeevaiSRQB6F13vds894hBcXxmRbtAEbvTTNea4fP6q4vpv5AVtpNxvvdTTYB6S4WAgQGHBiTs",
  "key17": "3f6JZuNpQcy8ch4nUe6G31d3SDgkfQgaNJv6vUZR2me46QiTr5CK3WpB4xLn4zcnqV6dpBgeJm1wZ6phXwxD2Kut",
  "key18": "5LRA5DkGMktzY6Bjxp468ydzeBzfcqj8s2cedqUfek5Jh3PNK7oYMLhrFk6NBphoNon5NVLiPiTeAJzdG6uQG9m3",
  "key19": "3LWWue5mctY32S9hT9LvmdUYwzxQbkCLfGxtfNGxVdmEriuipT6UZsvCrsyZ556tdoG2ee28omgujMQuS8TBPC6a",
  "key20": "2bTkgSq5T79DBGY47LR8CFeiWyBdWdSMqro4M8BE8nZf131UsxpFFiACDWbmddFzn6rpUEqTVxaExnsMgVCUjDdQ",
  "key21": "2copJonZK5ZtRzcGaQxQBEtqC3WxVAqAe7sHiGxq39GUGgwkkZqQqM6SrrjgtB4Ly2hXmEFp8pQ6khUcN6kJ3UxZ",
  "key22": "5pvaaYNsutRWEDsjCkRQQa23nf7GK4AeWm5FTiVjkpDQSWR9DJFGxMExhUTa966NMMEvgtr9Vn2YQrFwbMxTMKo1",
  "key23": "5VrNGXHUtkU9YgCnjdQqdF5L95iHqGRSdVnZWqtsWqeFAhpNjryu9pw6Bzp6FfgeWZbEDXzYpVQpZP2JaqoLmNhL",
  "key24": "5oQrvpnx7qhSKKAgQVswUdY8wLejHt6vZHdNz44SKUXb3sg69VUEp93bx8faJrkTB93WBDGg8QjPYuoJNtjiiM7J",
  "key25": "35ahuR7ewEaVodkknND4AFWbhV6Z1HPEyaqMnFB4qxZtWpVyLXoSkBdvKvZa2muFJrkiWYCB6LwMhst3uZM2p6hL",
  "key26": "5ArFhFVh6oqF3FEpQAyjjtfntzqhncTaJ5HR6V61gJGYEMh1n1Wr2eQCZJ9kTpEMuBX2bsXNdqy83UXzi4ZNKN7H",
  "key27": "5vFnce5uqWCbSw6hk2TvW7nodVDAEkJREnwyFu1Lyw6uVbS8iuBbkjxSyiXAb8mxidSFyVU33gM8u52DtMNgzW9i",
  "key28": "4L3jwz2o4dtYguSEtbgkXF5vP5G2jxZ6dNVSbV6ajgRWcEireU1vpyzNBcYL8Q6Jmd3XcZD8zGB3SD9c2aZwCFQB",
  "key29": "4MTebmfb4xU3nDDGfz2boqzejSP56B1ye9HkaSUjbMPeVhjU9KpnoywohsaxLw6Tc2BuZjdf2oB3iZqvaFjyH3WV",
  "key30": "4pvtVVB8J79pt3ZdJ4tvkwi9JmVLEockvgCUmdvrs8LPRNGpnUZ2ibxPnmoiHRJJkG7PMtz8KiekeRfmVrCKRrdq",
  "key31": "48VUSCnyjbzy2jCuAFawaNTjBHvoTkzxfAWt6ggdj8jaezGGph4HYALmJur4tugL4GaQrmwmgLH6RrwHx8EiVDKe",
  "key32": "5YgTzqy4L4SsyAxHFj2fz4Vhhz7mPxnbrnFzsosgRYCNGsSXMQtBcnfaXEM2pEZAPrscpkcynMSSYsjbPBPzAH76",
  "key33": "37qprthU4jwNWC145TRX1EKFaT1CtxVfvEMz3hn5L8C3qUUtGyH3gJdBQPDk71S5jbBaJnkc6Hefzfc7utZszZwk",
  "key34": "34BmxfZhjdZBLzmfSKRchfzeDWbcDXuAMLdZo1nanavKmkCsfu3gHAbLVSBAK6iQu7Zi6U5wsYLyVkVXGWTfj8JX",
  "key35": "3KwD1ujCjJYKmHiCY4pTbMPj6CTzFbdm3Eq6UCezAR7GUTN8YJX8TwTt6qFyDLAnXQXQRb7CTNvKh7wNS9LTUXNJ",
  "key36": "5R4UfNLJfQa2xkzuzgeWtRHuZfbJUy3zPr8tjvDJmYwSu9HDeNcr7psZJrfXskHsESomVSoByRutAt2kgKmuJXUm",
  "key37": "3Za7nchYMdF5SK65J7HypBmMoYa5m2LGXKhHzJXVXQw12JivQXD9N8rQ4azAkEgBe55Ap7dkHU6FWzGaHyoTRCuL",
  "key38": "32ccFqohyJzGiaRoPTvMs11rdwq25PKq8VUdhzawqyoNSLr4r62tza4QH4jFPSysuaJk4Xvwu5inkr3g3LgwQW9k",
  "key39": "29sBfn7LwC9nfAwAX1pw17dHxe86agyUeFXw4jA9AWxGhvDsM6AMB5n1goxpTdxKp1WLJ7fPpaBAFiMUm7ozUMdE",
  "key40": "4V3JtyHZfP6cgemqBZVJKor2dYjLCQNovt4QjnH5SEFLLnb3j1Bfm4Nq8h6NbY8L6APCfkyV2bgs6msXCAWsDp2h",
  "key41": "2AdPcpTjJ2mSW3v3W1JZ1QEVs19Ckyoo9jnwyfMnh7jQchfXFBeVBmSyqPhmrM3vjSn9LjH2CknVt6JV5UB6amtN",
  "key42": "5AkCmZGCFzKuEjRuyDQ2iJLn2pc5y9m9Y3bEmAuwdXaqtmaH9P1KPzP8ZC5J7zPXYymZHwXxmZQN5DRJ5S1EGAjD",
  "key43": "3Agnw62mLmAuEYETQghrMoGZgCU6bfCWDhfXY4cieNvvWWrA1vRuN4PpNHbpcmtpt19GANvo2ciC6SUWURENf71S",
  "key44": "426NXz2W9rgfo47EPvCaeubkkpBQg5G1sb6BP1SGQszrJxSWbiitCjhix6QZBR2R3ki63uEc7QDuRJJHVMFrM2UF",
  "key45": "H9yTBP69vruk1Upf4uS9KNAhsEEeUHeiEhXmF8UzAQbTCSaHEnEQxjwAeD3tMZEUrxGnrmjGxgDtz2tLK8J3CLH",
  "key46": "xywjNCwAJJ1Lv6r3A2HtTYmk9pe6t3JEddcQR5BTiVfsXEUEzmknWPY8fJT8mY87sLLtz1Q8KFSTLqX7QqdehL3",
  "key47": "oEfkB6jr9yVGR2dk8n8eQTb27qEZpAakRpMGFwxeSJ8TgXjSqJXza24oVQoLfoA2AhpGJpP14KaxftFs342PQU3",
  "key48": "3CZV94adhME1fHuV4jZGt2qgHLh4usCUHqwGvUCerAu2pzMnW2ydDFGTZc4sucyzfKY17BH29SMidt5QwaYwVs3L",
  "key49": "4EGMQzWQ2HrugZVHAnGEvyyeeBRkBruxNnVhJPs5CE6BTBKJLeJPUEgU5uxnznf7Tim9ZkmoxQwBy32SiSwQCxzE"
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
