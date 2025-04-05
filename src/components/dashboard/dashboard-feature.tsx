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
    "kTXU729LyxPHnvAwc2dkxJ5uZneaQSfuZRGXEJ4rgZUju95tWSBcsSbK1gXyQG9MEB5wp3V1oDncEB48gLMfrCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CC8tySdiKUn859y5Ed7AsL4b3HJ4RqHkEC4K8akieMjaPXAn87EpTY4GhdchfiPjafXeMv3PqD8tEPp8kcEk5Q",
  "key1": "2g5Cfj3MaDLa5r5bc3NZSyMkBfVHefxKv953R3TKqBXckG1rBUTyss6yFCsryCjDjjRTr9vsNNZF168dPFcqnLCX",
  "key2": "4DNKJZXPP32WUKYiBkpnNj1S8eo6MGLk2tR4mDSrW1FQkeXdDWrWWATsWjzvgAaVsvXcf6BNV9aWKY3CMQoFhWoZ",
  "key3": "Bg9vBGEzvYRtE2Xbq28MJbgJgyNT5z9MwcKZwr2d8vRqrjLidNAfoD56jntKYMLK6AbMPgSbBfVWyBoDJV17uDQ",
  "key4": "4XQZrzqSS7fcd2hLJeu8FCJ18CHhSxksUMmdPWWjkLwSGsaywBtwXhSyio7ns1fL4ipwMQkHMkeJXLuiJNdx6TBL",
  "key5": "3mujwcwFJmrguWErmFQUheeEi7NWvjaLTEq3QdJg6tCDNdHuJwpqxMa5QioJfiV5jRaEJf3q3HiPEHDmH1EpWfAG",
  "key6": "29PA89sDvW4ZFYSLJr71uxbqgNXSajnS1j8GWvuYwW5fCY9GeDTFb58RRZQaAJEB3d9o4box9aakdC1233Ri5TYK",
  "key7": "37b3bvGWE38kqymRAvAYdbaasZGKMZ3ttzu3yAKmGmXyMTVEjB2piUZzXnGeaWh1y9LJ9XBzxrmfPb3eGDgEdTp4",
  "key8": "H2vApd3A9oUR7Rb25B4NTdHBoUTPkTem4VMqJwa3iXviHo3Cg128zvmwwN1eMmUBQ2GcKEsARWMgepcBpXSieJJ",
  "key9": "2KyvAeABzFs3DdjBH9UwQicH9RSChQwvaAm4nPgy2aSLa3VyBSG7oaaYVhTLco3a5UVsVsnqN4qySTe1CkVLvHtr",
  "key10": "3y1826k4zjdQcT5qierhkuxcLvbG8wxjzJANinDboVHx1ah52UE5WfuCuJ5QXSjV4UYiZN3wdgFTSiycensxJzZA",
  "key11": "577pD8ay4bm9dhuxh41dasXPEMnV8o4x9BdMNrRt9sybHsTMvEJfKfzQGQMhNW5HXmJWQaC8M2NmF49XmQiRBiws",
  "key12": "4CzihR2KmN4PhUyo7dZrxQYgAZfzojQqjxynwgX4rqW783nBuS8RAzHwzxpuvc5Q1QLBZufR4AUEV7e9jNVYabvh",
  "key13": "2Lxxq8GQQXSuqBWZSzuqASzCmj17g5FSFSAyZZB1gf8vs4NV7ivhKGM6r7UqB17dvhEKAuU2nmHMSKHK2CTseCTr",
  "key14": "2K6ktZjMevXMzA39iB6LBkgDN5w2x227rz8CrtuX6H5i9BMVYAHzwAgqSx4rpyqpE1qnA9x3pUmcTuZfJ6zP91Z3",
  "key15": "4h1veGxa6ofM7JkQTMJhbU1Q7Nb7mTDVh11hWb6eZJ8VxBXgPGTSqNceqiJrZmoSvYDXjBGLvWnAuzS8mBBVFiyj",
  "key16": "4ZVkBqG1VhPWeHP6BLHkER9dtxTcytApZoGbGSNThdJGAKoPXkKxekMEK4pmMkqo2GW7gXt4Ruxm5UpkBuRyt7Z5",
  "key17": "4RUc1fCFqXNsd39hAwA1WBZiXozcC2tcUpscLT47BZ4WDuj7umYcf4gHsqrFsditNgsF1TYFeZRpv6Lx4UEXdoZt",
  "key18": "4eVqLSUagHVu4dtaAsYPhHBiM8RnEVCXN6wWBmiGy9BPh51WUF9z3Y6XYVT7MDPSwAYg6VsxoEp6hVHErvjdKBMh",
  "key19": "zaCNsdZzQtqRATgRN4hUGKGYYq7Kco7RqBuQ6sN8GZRpdEhWR1u9WsQgW6sQr23mLaFXnShdKmzR26BXQNjL6dr",
  "key20": "4FRC5tZL8hLj9rUqGPFX5o2hXoMQjnpv3YJnGeUNxsXc9MFoFzL11TtJpxBAco9BXiC3rXVy35jd22QXRANe3nWe",
  "key21": "58YGGfvgTitkJFVw2HPWKTV7jKK5RoaEXp5m7TiNaV5aubNLiG5LRMEQq8JhjCvTYTd3Sbwh4z7MrqUvcmAFrEgU",
  "key22": "27PBF7Kp1FStVxKESesfe4d2voxm6YuF7MFrQPivgT2z7PF2voRTCKMdamyBHoBygT61yErvwLmQageSmdDqhVas",
  "key23": "3ZkTbCrbfGzkLBUCqwYtmcMdcFaVw845MsGpHXUJfL4vmtqvvxyZJ6rrbKRKWb8drUxCUtYt7RGQqP6q4P5Yp11L",
  "key24": "3vohDbjJJzPxCj4ffHeUKf82hkZgXC1Khjc4WGGM6SeqkofShRSimYgurj2sZELZ3YrjYhzZXdYhwDb3c2bcnA7q",
  "key25": "354dNMugDSAHHF3WG2eiHRpFzLCDKFcRhuZfn2pX5Akycar1F9s927pdKQ3rk6xkTTAk2ygtQ5z52d59pwv1uVgK",
  "key26": "3npHsavDaeGkruY6YSQRXaPrDU5jddmMHkcY7xx3N99eeyRh9g4YZ4QekQQvyECNXpQMFqjaahKEsFRFpfGZWVyt",
  "key27": "b4QDAR6LJGvfvw2sGErEDGbnf37vRREapbCb5S5TSpUgbdMEq6kwysWUxBoutP1QMrV9Kqpnfyr4Yq38uEAVhm8",
  "key28": "3EEo1sE3nttg9d2g2NhsF1gM1yR9knERhqA34rhy8LyfMhVwUvZfCZDiN4DwYpF2GQRpMCgrvEmXTXsLyHWWSSmy",
  "key29": "YHgWDHNkgAkhRkPTrVFEdTaQNMexP5kr1rPnZ6wjnYVwVJzFzYczdAh3hX9Yapx87tYuVqVqpL9C5ctf6baq3Tq",
  "key30": "328Be5pbjizFm2fsxe9M3NTAJcpE2AKGyRupxNzfYaiWxGKTDSMfgfEcDRfq4dadFgv67uHq3bukVjLhmmTDiqmQ",
  "key31": "2Xue8221K45FPmiH7RiA5gAaMtCZoDspRVwB8CCJ86ccjrHmAEG3zgFQ3P3MvxH4KfZpL44ZmfDxgFJ26Phcha5i",
  "key32": "3P2Q3gT5kDvvEi7gUTrBKe5Dy831yhUG3Cw2KSP5iCWy6pe18UjPDg7znundk99gpEtGneyuSqzVUZwfS7Vy7Mst",
  "key33": "Hbrqas1sxjASbUMWoEenDihSWLZZpGPKgQo5ovG7NhX7fFPh5U6QTbRLR6XC8xYZgYBze6D4jDKbjyu2hzCa9e2",
  "key34": "25HbX1wNDjbc7THcMAtZdNwbh98USm218oyWPQoFREJYruhe9ikBSwvqntXXFUHDkLZ6AMfVbYeJcRknEdcE5tKL",
  "key35": "4TaiMGVpSrPNGK6s6khYVuid1znxS9TKC75gaUe2qYPSPbkxhmr9Vy8HBHtdYTr6fALVTQ7BQy6M64Vszy3NGRAH"
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
