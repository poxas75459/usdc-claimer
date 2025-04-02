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
    "5LsZbyMVo65zLmm8cBSpToJ5kY98R6AUuPxxdo4VKbDGEfLCTxyF8LEzC6PNErNAKoSi6M3t42fc4QZTNRDS6XM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pLJhPSVmmg2vE4DjdAndPh99SKGtD5KfENYfc69Lff7hznvsps2X2cEFujf1KZ4mkZEweSMp6ETY13b1F1yh4Gx",
  "key1": "2uXCi9H1Eq1siiCtVA41Fwg58gNLE6Qu1x1kMe96gBgiBz6Qoqt21ZCBiUkF5VTCxNNnequz9JaDdPb79v9L8NFo",
  "key2": "3WEXQYsJSaNKbTsLPBEKwCJFzA1vhRifnhdLnGhSMXME7hjZxju9qtWq2WDGaZAmFdTgXBzzuHH1hh36vHg61Bun",
  "key3": "vPqPcUsivu2eWCfzxLiQXgD8mFkZ5W78nUZZfgPtAqxoZgxRLvHcjWthiq5ECEEp8rtjcrNAVemDjg2HtxskUGz",
  "key4": "5LcpvBC7Deice84PtdxjvBgkYj4hydkkcwrY11Ncs1Lq2LPomdiuoXieHc1RSFpQHEFGWDMtdbGYZFvNgPdMiW6Z",
  "key5": "2neQTbZMAn4XpmAU8tVCTNNavKaehnrkVarF1v35GWYSZE3SNXwFTj4Brs3TXcvQmzfbxDXbmjvDouZQ8KtmbLHC",
  "key6": "2YTQNnA6o4TV9pxEHtGPPFDo9FzSD2pFSs9wV9zrEBpnfiXrsv213kntUyRZMoHJeedtXMZP45Y3Dwqpye4s7UQf",
  "key7": "eYs5V2PJ1wQZ7i1JMrnaZYRK4kmSa5pFMHNumf5JiZWKD9yP5TBkoZGyS8gcpVJLYRkhzXCoQH7n2wN1wvPjqmw",
  "key8": "3oUjpbuH2JRTFsrZnbdimAQAp9o5C33VYbKr1UxyJQvgPZq8A2srD11g61WkmnrrAhXG2oG9rNw8xS4rh83EyND3",
  "key9": "65SwSi9brpXPcv4TTPd8Qeoycyog1KZomq9LcYXDRWvHr49N7AYeu3ExsLDggd7TsjPS4GSytbwavmrTAZju6Nu9",
  "key10": "3D6ycUq8aQceXpA6E6LdZgGSwHxreJGSZxknRMFtpEw7UyJXNeURi8z1aQZA6LLYv7tLeMEbA3dSGKH243iapAVT",
  "key11": "5eKu1YbQSkGi8f7oL2ziHWmJnf2xuP4bGqNdbQAJVqKze8XUrvU7Spwn9zKCfcoPmtnP2M43821jFETV7g3LHfm",
  "key12": "2U2sK6KukBNgF8EPjroDaAykYxx4QcTN7BMLhEobYiQFQiSTKSjbYt8NhghkqAfAHCzpnQR7KhvdP2qHciE8BRY5",
  "key13": "yCKze1Rsvo12mBYeYzhgPWKaLiJkqKDfqpx21xgxBD6PnzCzKDf4K6TBAEi9GR1MLWVDrBTyumZ1xRDo4wRrQW1",
  "key14": "4j6LZYLiH1K2L7Ww55BzBFaHE4q2SZV7uzFTweVSSLB4DdR2B3ebtbi5ozJTiG9y4tS4WLPJSqQMxTWYBLTbL6jr",
  "key15": "4KNLszweTVafKKbXgSUMRQVn94Zc4gNMWPiTwwnHqfixwe3shLD4BqdGncYLWpDfsn9waZdeDmBrtMoDWUvX7yiX",
  "key16": "5H5mHrXYnVkRJyWZ1ZkwaALPpAByebKoeEdjMW9denMHYjexFE8DkYcsA7TCYupknD2CTLwXNVEHenjm3DLsvdmr",
  "key17": "gmhe2DK6kbPgzuV9ZiLE6QKj12FHgB3bbSBW3jbhmvePLCM9WacCd5PKWPqdjdkc2MwJ1cCdWqcL7rn6uBgzXMv",
  "key18": "6oZ6uaD9DSz9ssE9oMxCTQp6FUApzFjxPn1FQ5BMsfW7CMahNuB2bSdEPa4StyG4dj3CpjZqSFyYvkJG6iP3Lxo",
  "key19": "56BqyqTJ2NeFSkMZHCo2V8t8zVs9Hft1aywF45PuU16XxcS5o4nfa6shRREQUy1XwUUj3M8s61XDtPgdjucoMxYY",
  "key20": "64v4oAahKKurSfMSYfd1UcUp7yz7JhNYPt3D7hbK4TBXPQsCcwbUGNP9fevzGsaFgQcHb5fMW3DMzUKvabhxtxXw",
  "key21": "5ttMPGhGN7HLYNqmNfD9Ceg23CstzFzMaJhg9nmmxFRNAhEDuWJ748N3o5rU68e26gRfrobiFKi25guQKZ3vrGvB",
  "key22": "nLVXhmC1jjShUDRu1qSi5nt9L6Nagghim1HxY7m226MzyrxKtDzuszAqUu6RoSU36sf1xqCB62hbSteEE7uYwN4",
  "key23": "2PPyd4DM6XeTS31GhvBZTYkLCMNBQ49z1AKe1RDKXkFSeHRaLZyBgESHpSpJR6nwTebX52SoAG5su6Z69mBufCUb",
  "key24": "5aNRYV2bCVbrHrS5uDqLKHoj5g1cPEuHZy5rdsboe7uBED8BLDMg6HvCYBxLLMu4GoNTYgGjHiELRy6v4k1CynEv",
  "key25": "2Z7Z7YkjSDspBbu9BMd9LnK7mwnvRnq4awXuehksAey8mhEuzvpBPJ7ijPrNSsCQS2ms9HN2iPVytJGQkcJpXuR",
  "key26": "3h9CGvVeznVAQRZoAv4KWTXHKDNsRDAc6QuqWYBZXEWacGCA59iP9Cvs27EYkjgfSuuNYiTGybm74qwrCPKPsJA6",
  "key27": "2aHwha66LN8TSY7ttmJ9fghChUwgV9eYr8bTQmWcQgnWWNFMPqMETMBoGRFzu73fqMkHVxxs4ZrfPT8pXymPYYFF",
  "key28": "xMsZKd1m2zJLAR1aXPA6hL4LPFKdwTQqf3sCQ7wPUy4dwJixEEoQwtR4yLK8CgkU6KP57xna6SkQuT4Eu7kQSxL",
  "key29": "4XWBtUzBrzyJqXeha8aYUF2oUvtqn4XULFxpQDdRuoYNhh22kLjodzfp5UKZaVvepxxV1VAxRe93K43R9eShLLLj",
  "key30": "2ZmnUZV4oTnMQhgL3B4MZv4dhtJninRo1BVnpERyVE9bUPKodeidtPSUfkmF6ZAhkrCxaCza5ZdrGjFnEapKZzR9",
  "key31": "5b3KprYsVbJ8Ewwdx2noR2ykVJHtvhEciSff5zYeD84wAziRjw4nEYrWEejW44o2nQDuAufCD3njUtfQEeap5FpQ",
  "key32": "3TJxiwiYj8CcCfy2m7gsYXHDzXdwmX6UQk6CZ42tYbprSeZD4zKpTVLfEQvSg2gagNaRErHt8dUhPAZQv3CKM4wG",
  "key33": "5FjAqV6nF4YDjR13MGQ1kSPb4fbcortoyXP1RkXdL7KuveiMWmcG7j3cB33x2TrQtJffsVanvCH2Q7DqAJwuDEkv",
  "key34": "iu9cfnbAU1ihehEB1fiTCDe3vcxu75rh675BgES91DgNCVoZDovzLJcvZcPurZ9fYPyFJbfa7WZiWhXeLDKgq7d",
  "key35": "2EdU9E7wH6nCe7dsYiezDSAC7uU4p7fojZ4mv4cDvCUpkuoaFx98LRpub2uQU8BwwmJSq1mHziLtFGCsn3Zw78kh",
  "key36": "2xWstpe4euvp15eXtAFS9gMmUTVJTdSbDV4BkWg7tWSWHj9wUHijxDmUsZovEBRpGqpSMVGyddvmcMSCB6cSU5YK",
  "key37": "2abN3Sn1bf5ogtosfjD4EHAMi5GjxMMWLb9aPFUPrKD2PLPw69fNduSU2ciMr67WDoseRhfHC2tHyuqPBbMVhpge",
  "key38": "RNm8RvvuhiwCenJ6yBcRXtELwMoEya7Qf3xrawxGWz2th2ANBWsYU4o9nTZQu44yhxTQE6Qs6yyfBTjPwy2sXHc",
  "key39": "5iyEWmH8fSqz7c6UMR1GczypHZPcUHeaK7Wd8PEwMEBkgVCru7z8WCxuxEn4kjv9jLavkv7WVt8qAEZ1rrT7Wcbn",
  "key40": "4MdLozDeDW2C2Ew4AeyRje5ENFVPbK9fEehC6cmavobHmKLWue5vEfB1NTJCUFjPur1PH1nUxG32WX8XB4C2737q",
  "key41": "4ZCmLKfzSxpWZhqVmjNcD3EwWwHJSWmeY6GYF5vsyuxwC3KL2263zarZRMEmSd6iMNzqu3rpPTiLNwDUGQUP238w",
  "key42": "4Lr4MU29iiwE4RGcTdLqwV774Mwqg1uVfLFQn5bwhbeF73pFWnwqmocJRE6b5UspUFHEn6LhRkYiBdk8f2eXyi9X",
  "key43": "5vXDndjc1MS88zURSkQ2MBzmQVsh2HBCPyZjxtkMXnLtiuGJqxAmXSCR1w51okQ1Dy49cxK9VeHT5aV2Tsn8cz9s",
  "key44": "mHJPqYZ6KcRvDg7xGwcDE5VNjsVLs3jSS6c45EXNTmXqZXAzgutcdfKWPApW7ni6pzdiJpVvT9ftWrJetNLs4Fy",
  "key45": "cVKTVXjeiE1htfRXsqopLtizSjyBywKaNhYdPaXNJGpnRg9qmSuVzYm3Mjd3c4FZXgPvUvQ2kVPDdNhrkvFX7fi",
  "key46": "25mrxKYWdkkKBkxETVf2xJcTjBwMFBH7orpK4UHU4zZYecejz2RBZo3oAqXRS1a9DVJCBqnuYgmDCz1jHPUTQn3M",
  "key47": "2LCKuWfQk8QNJ7oC2HdsHMuWPaXvLQetwjuRSSAjhz18ptu8bhBoCKFqgaS37NBVESnhUUhzpqRom4FjwmUkcNs7",
  "key48": "AJiYcpJgd36uYd4AERLoTB2ZogLRSXSVWPcjtXBdJdgMWVh6oJMhGFNG9DG4SEHqQr5yq84j4b9tVqJ7DqBnhof"
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
