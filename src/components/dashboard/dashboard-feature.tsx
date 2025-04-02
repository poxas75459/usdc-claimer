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
    "mnz28CFQF1YuZuiv3XDXvxgUWT6Dr68LaA4AbeneaWD2rGgGnTHSLppAKwQfz1FfQ4hwWMBxNXBBF7qMF4sQk9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z83sMWgMWMKN7xz3EMwmemy8NJpcbaWyDfnfccrhaQPR925bpLf17uAf5pxXP65daToUmFHAkzr4XGtDV8iqkMn",
  "key1": "4SdsQZeawapSBNPozbBgEehdpQ6R23TNffVY7QtxFajC9Ku8qTN2gokvyfxKknyw6sBJLdUA4JZfVLmXPDdEmYGv",
  "key2": "5UCTskpA4VeCjnkavfn8vNfTUrCwEUsfnQYH7QKinzDdjML18B7CRHBs8upfHZSS2cxXh2DraVcRZz1kAtEfs7uv",
  "key3": "zZziSK8F4MhRPcbpb9Zzfif1H9wN46HXRUHFMsibTf3KPj66au45CCN9YFRSJ66djhhViQJxGDmYBSSaMB4dnju",
  "key4": "3HZEEWvjZncohRWTJcnKk1FH9Yzyza6sSNDekxvrGXL4bWyRZpdaANdgyYyBgof3Z4XSskvMrMNavt2mt1zH1ZaJ",
  "key5": "5hpzVZ2mhcHD4UHxbrkeF7QSzvoexc1MXewN4kb9kzQdbjLbPZ28iNBwvu7kEkV1S6dVUKdaxCkcVKu4XAvZguDz",
  "key6": "37Kdrv3whKwtYdLGMvebX7MrLTTMV2fYWquScpUp7nu2y3MR23myT5Fjau4i1UDmAK47HUAvB9NqD6wDdTwS7LZt",
  "key7": "4GYsN15mKfjLLX8NMpMz9Qh9kBeAnnxBD6hgPD3Ks5d2vacq9F5eqsa5WTwyvWWEyZeYoeQt1skFrvQQT1AELACX",
  "key8": "4z3Npn6eqrcY1SM6WCBtn6GHLUhdomqaadRK7AY3qUbs9gKakPeFVmMTyYj4KbingyXG5DDm6vop129Ly1iNj9Qg",
  "key9": "2bHhoeGP7fNc4ZedvDsw2po3WdKnk9dNEDjDKixx6hkpNJAEdJkKGGqoTtAo6pLTp4ZXCHEXUcZPL5iH1oBhcefg",
  "key10": "3xmqkTddwPUbYbdTv87eWr9EW9D29HpbRBcZstPpwa1XCTj6FgKohteLupgvzszZt9gRcEqfhxaisVdjoJWN49PU",
  "key11": "r1JXUwv29kghpq3KaGXyLNTqAwhQN3S531Pt4dXVys9FVdNwjR89xPr4oZiw5m6jF1zgrutxuBn8Yiua23P5mm8",
  "key12": "2oqoZFgxKGU4MjSfvhh58wQhFwZfXYSpZSZt6dZw1p4Kd3qqTir6fE3GFiG96zfDpw2LKUZbxhxbVDt7MpfKoavN",
  "key13": "4VrtYMvaCvX84thv2AnbcagdDc4PSw1uWcuiKTXRa9xRTcmfobcYZtzhsXhtTkTuzF1wVZs2RweSPrTuZauRpd4N",
  "key14": "3LtWkut21zFVpfSHz6U61QJHt4z4th3NVHtazjcRzRbQQKw5sxVaVmJzQ9Q17ofaogiBSeYiDB82cQXtoRa3rK8u",
  "key15": "5mshY7d9qXPE9Djxk19j29MWR9W9WdVY4NNin2yD9p5zVjMmhQXp9wiWXLVJeKzrqG4g5d3BWXBr92EWsMw1evHE",
  "key16": "5gTgup2oNmJc4XyNrBSNZWSiR2egoZ3nGBjgVMXFemCdnjMAQit12DBqXCbWa3JNcTuC9Mb8Ls9mZf1CBPXibqHC",
  "key17": "8PkLRKVWkhTNEv17wsMR7t89w2fBTMxtpwxL3SBgUdHSJJ6HxhggjWuYVLSohyL9rE5uBLkeJTC4VnqmFAc9f4Q",
  "key18": "3q3BoqxeiStPCx61821wEFi3VFthkKVwG7jeZLWiuHeboT47o2EtAshhkogoapDJ59TFjqvSP8bty4Fe7MBv6wEB",
  "key19": "2owq8Ascd5ACTkJnA9QM45h16NdtKkEPTQkv5gwdp7XUd81z2bp9CxkjCMAHVVXmnC9WvwHAHn4cGbC3o6z5EuM8",
  "key20": "5WJ36YQZ8aXLnd2X5MJrmsMHfq7DTapZhJDiM73KT7YtuaWKGAeKrRxBXt18Q635Ls2uW67dMRmLjykpBYkPUH4t",
  "key21": "4REz3kuGJdqLRCFFhuuDXpi9GFrFom4EB7Rr614YGQSroDsNUAuu7oFe6vZe6GLLZdaCDgJuEcL3q5LYgJraghhn",
  "key22": "vHk8M85b9rvsibUhkfj4PSoyMv51EshaykBH3rB1TkPH6wbETFWrLhfMyFEeMw3YwDxo6k6PifRouGVXdVWk8gy",
  "key23": "4sY4koQyyZqYgp123Z68kAGQuvB9dV8uDRTafuTMphVU8cRjBnvD6nDqMVwvm7G8xcKf8MZmi6Qhmudso87MS33p",
  "key24": "2MpGtfHPG34mc2hqXYhYhSo8Q23bRAdQqrx2iK4wU9Q4JkKMgtrjiRYr4ttuBfB6RDVqurHsKjNRVX7JJrMSQC61",
  "key25": "kE8wt6szPUXcQNyhNHos3LJwzzR79v6mSLAVQtD9pLqY6A4F6aJ8d8D9bPx8CNALzgyFpAwbTFMEwjQoSYtEXmV",
  "key26": "3prFxCyW8ZoamGKTHoN1xxkTZEtxdcvZ9KVgG7z1zjLownRy9MXrn3jMabQHvrS7AisUBtaBwmPp8V57rCmCgEKV",
  "key27": "uvWZC7LYx3jmGjFgAjh2MWLHhgTiNQSSsVA8YCTggbnnkQcGTnyfxRgxFqjAT9yJxuWnQLWCb3P4DkDsg4Dz6xu",
  "key28": "3QMcu1kUKQoAyo18ATQUTbe1TvQdmHt9fMLjVq4V9t8cMDfBc5tTvsQCugmsCoaRzw7JNhBnBLdGjZuK3zR74iwR",
  "key29": "3deZP2xgkpv7FbJ69MrfcU8n4WDdyuPQKRFUhHPwTQzA2uPf1fcsfkiznSMu2wqrAMZ5Ww6VfnidUhaUfbmWz4dJ"
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
