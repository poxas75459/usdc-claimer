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
    "1RGYZ3vHHZ4EjdZCM9nmc1w5722LDSB8ya4yLCQjWcBjiWDJDbQMVw3QuvNhPnbiWJFTV3CFepQZS6GNivpAXCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eoJPkXmBTYToA36qWCmHxZQ13NJcVSzXP1266YmUKMLDtMwkmog13ALMGS2x2EqM52xnhkfmrX7f2yiYQ3PC7e2",
  "key1": "4Qj1TQixibdwdHxd4MvexY5T7G9Dn3umRiYjceau2riCaGuYMogH3DZ6rk3jVQS9Zx8a2G1eAqCzwQfqAzvvjqX6",
  "key2": "58pDWjeVQUg9qpu9BtthUS2YmFF4acmndRJpGoEcV1bSNLkaVQjLikoivRn6MR4SkWs7YxUb7Q2zTiekQjgT7sqC",
  "key3": "5AkDuFbJpjawgMTJZwAzbuopzW5hmey3tdmwimCXr6qWK9QQm5Aw6Vvi28WZ8SnXqQJGhg9vmytYC6W9ff5sKVqc",
  "key4": "3CR9CYBgbkA3f9PwhZNgUdcpXVbipfLHzpjub1LgBXb9HNWLHNz1Vfpi5arHNaFRd6rBpjU4VVsz8Str9GmVpw4E",
  "key5": "5wdhUDNpRLx4oAzMRJzSs7eJCmGp2vjz5nz4mfgmMkn339yAzk1uimLgYALEURTgNFL6NVhZkhkNKNWhfXHgYaBw",
  "key6": "3dZfm2aW18e4QVEKi3A9z2FDe9T1mLyqCDGs6noLjqNJdkUVH5LPxKYQgtSwCcaM44LKhTBEGPZtHcz4CVD39jpQ",
  "key7": "2TyzYT25vTve2bvhmjNt8Muy34JABoFdFuLKLRGcP5Yu59b7WSUGGhaRQxJHnj5zvYQGWgbdGvTefEgGdP8JC3Su",
  "key8": "585gEtSSafJbKzzrZ9r7n19RToMmSQZukoah5Gf3V3m551aqX48A8RGyEbBqBZXFL4VFhHG5AHvXXCGJDQrfsdnp",
  "key9": "o93QuQq7UjbyKGA1vs8wn9KHDxLdMvtokKF8vqKiENKCck2cAyvyba1GdCMsGa1Y3spkafNMToX71HTjwWrARdy",
  "key10": "54TMJXNAwK1TJdiFCX1CzBXwbrwJrQpwq8PPrH6xTDkjRTi4R8BrJyMCXMA2YASsMwcj55BZeudfvB68NkpMAbhi",
  "key11": "5CR44N4AMewJwe4QGUo3fVsyW7SHLKHNhvEGAMCNX5KZdpDfHGMX64JZMdUQ1698hANz2jdxBA9sYrmYoMj8wkKp",
  "key12": "3Mv5WZMBRR9H6pqqGbVQhV2oCLjURYXXfwZxhL8nCfoWf7dPHVVip8LWA5nd27iAEoweMmE3wTJEXDsNwGo9y4qM",
  "key13": "3fnvEuYFgMVTfmNemamxVohx6HTpYp7BzTXf6TRFUHDG21DkXHZBJJr2tCtYXDnkD78tGifWS9dJkoJjbE7dmSBd",
  "key14": "66uAxZGADq6wdNYU2dtyGHutUUHPaGBVtcPZVpR1PEVwxHqanpQAZgj4uqkF1qufbpmix966s1xXavAAJjcr5841",
  "key15": "549Zogsoimg8PcREyZam9p2AxQQYJqgMBvdDvbPFMS4FzCiLfSfsGfxUT1qivLz6hbUUeLzzk642CFHPSm4BueSS",
  "key16": "3PyyVHN8sPHMsP5PHQKHcSMZA8b1eP28sqKiPT2MbHeTPyTk2pVhpZeiQaPRchm852CQT1jqLet1t4rFBnaR833Q",
  "key17": "5KfkXSd98YS62YECLeVzrwahk33L2xnCMDfDE3YkJCxMRbSMcyzLZWsQsoWVfzC1nzvxhuU5bDVKku53jDYTsaJu",
  "key18": "5kKgCHRLH3wpLMcp1tPszUsmDEyDoYa5uB8EXThQEcNCu34ZMVYfmaCBRBKWYodDwyAJuwcFyMJqses9nPB4t2cx",
  "key19": "3cJNXk4f6F3SmeD2eBWp21fAgz7QgrtD4svVVhiQfcV5t642hKZ1J5FiHZs9maVV4cDQdDkgFSSV9ZkM9LHcr1Rz",
  "key20": "7gjyEsGfcpERx1qnDhTLvPp2un985pVbdnLaFk1VzfksbaYCuipcoVoGZaAEDUSsd1qX19uirW7UyxLkUQMtpmQ",
  "key21": "445Rg4eHpR33hCqkjQ6bzCJDnAdQ1dwZ4iqMxGWLPcm7CfeBDLTbdka4B8VFgsgypP3KK1FdRK3p2avFtBDeefRs",
  "key22": "2p1xQC2K3eeNqnGVcNKj6e5J1AJwuQQoMApcZjcHvGf2mTtxK6ZVA5yfyu7ghpsUfW1WVdT9HBPgxCTeWQmhH9yo",
  "key23": "3u8xLLFv8HpvWEZzXGc4w6AnsQyuEJzNzZuuQ69SpjyxjrRv7SRbyJgmcng6gwzVHcXfHaa8VEXuFhAZBdkscNzj",
  "key24": "3U4yPg9dNee1gaxiju1AUHqUv4GkEeaTx1WH4DmFtnXqXinVfzY57tytrSxAAfKtXmp66DRh4KjeFqsZ8EH7LGLN",
  "key25": "58SBS8a3mYucD5zQRkR156v4ZCAJW1MiZKKYs3cym2SXtkcsXGWcYecFCs211VoSs9qCYb1tXRp3AcG7jMhfKyqW",
  "key26": "3umqYS2WEaxuiQ6gPKbxu5gXmPdw1Mo8SF4op61BBJuc2gC81itA854bbnW9pCXYiMYrokPyiY5uwNYDGoJSTz9S",
  "key27": "47KhvwNA6F5sd312PUXm8MzKxFicxBm5PXS9vAyiq9tDinhFwV1wGRySKKb1WuQubkqzXugA8ExN9iGX9uT3GsAn",
  "key28": "3ruuAXtoTnQ5VS251vodnUEziLWbVXtTN8EWzxUjMTXWf95YLyQx2wnwHSUPdhC4vkFgwAdExJDpM5AjbEFVwYgX",
  "key29": "VANQ2FuVzpMHhdV3aHYkB32CwwfLF3y4uw1XKkrwbTEuHSuL1zzGrRZPPHriGQ8qp5njGxtf4RoWEf8AztwQioR",
  "key30": "5MLyGVndPxudTHJo73bbDdvX565p1LYDfaPcaRi26mzPF1EoNMvPmbDRa4EFEaCECuLSYexR3wiCTh4cdqrWxdRi",
  "key31": "5d6WKzVVwEeRt5mEc1qyQQKigwfstpYk5TMgiFs9HoF54V4PcdQXVb4Ar4DmbxSibXod31gvVfNc6iUGNcfkV5KH",
  "key32": "2XhCEjha6kZSUS5nJ3RjWdQniZ2dKx9Kk3xJn3iJEnW6mYbHH51TgeCZbH7xsChoPV8mJmpAaAuLg8hozUwixzVU",
  "key33": "2pbsJxjVpWJHFhtKxkDedZLwq77MqgDA2atLbUdXicD3C9Sz6Nhpuh72boNk6hPG8J9nywyTZmiRDTD1QyHEDf8x",
  "key34": "Ehh5EZ5TjDXHScScLXH8poFcHtMTm23NpkGJB4hZDggFDDxmywgHHNqzrdaQXUy67d4RAKaZHANTTHx5oUQ8pKu",
  "key35": "8eR1NTapDbvZZ3oyL3HY1cfn1UYd4PAPW4BPXLz5TkVav2zAtqotby8QqyPyX8As8wRbUKZSCh5Ck7vX6wdRR7C",
  "key36": "5aMkxs68uT699eVKPF81Wz6BEUi6LgXjwQtMEtztnWyw9sj2wTKxPz89RqpDhqQJThgr2k3oLThWx5aaXvaJbXMC",
  "key37": "2MKVPftmUazmsymNm2jpGEATqpYXrF3EqAjvKudpjR198tTEg2RnD8sT4SeRW8NC8ncYKbqZSeRsHXNYKJrZUVKv",
  "key38": "tgtNGzTQXf3MMVNx2PRH7TDA7MDasfsK6xQZKGgfqRkeP8AjvtAM9hBhSmcPLSu6uG46nDR4S5bDHj62FfzWkJJ",
  "key39": "4geUQHAunbFiUV2knRdVqyHMr3vDMzFHErC1rZ2ovjPDzAtnPR1jaibrD2MooYTwRfJm1Z88AKVVhvQ3wKVeaN4f",
  "key40": "5zKfyDVtHQtxrDZhd3um9R2AbtSqNZ8wNSqX8i7nfWHWgs6NCTsJVZnTf6LejQo16eGSbMsvWPuwQHXnkyZ2M5Jk",
  "key41": "3Z9oTvq1g3MBeUP6R2i9rkWV8xLjzgT4zkgeWj8Cvj2DxbBhFXFkQQ1KeprX2tJBLYsURTY5wHWsmLv5C7aKGa4k",
  "key42": "yoHEZZCRG8xcqsWMxWxXX4hdr721vTzrDT9YZE84jcpcMqc7ZNzfo4H4Fcvp9voYXtSy7CADfaXZqrEt15pfXXD",
  "key43": "4o1n4qm8y9XADJ7UKKTbJ59wXZ46qPXzCuLMcSD6pEZFAkgednTHrjw1dC1VcmqRXDTXpMuNPNQKMedHdGv2V8ar",
  "key44": "5z55guuYHQa5hySsrCGR7GHLuDDQUguKQj6FBtmEx7hiFqDsBR26ETs4bgiHCRTHK2JHAhkwTdtD8rBwjX3JgV8P"
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
