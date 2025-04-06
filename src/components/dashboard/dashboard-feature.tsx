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
    "5Xqbbh3bf1H9zV65n97E1GuiKzWjA64WSwuVv99X8EFov14dWtAbEUSi4hsNJC51oDHx4ijYMWRYeBPigcwovArM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XNKDMujg8uosRC2naRvQCzqQvmRX99BnPWRPzZepoQkJbaKLNMnVaZvqgRQGuTPWgzp8yFfD66snxUdjwH1JM8P",
  "key1": "3HZ544D63cUvJffVWKcmwZGWWpn52VwaaDkk8R7oxH1DpS7W4WNEp17YQX3Ag51GpNXwpza2pQponkFXi19118T2",
  "key2": "AFJsZQqZfCsigSX9FXZuVQjkjRHMxH2No6nbhdbHX9e1fMLBzpB6Pj8NicVnEfERHUj3YmWY8sV3rAqNEGCt7jy",
  "key3": "4zpj46W93wUetWj1ckYLnAvKGyXwAfMMyeoRswyxQmJ4nNDJXyn8NngrFshbfQ6GdsgqN8YShzzBewszpCrTPzhP",
  "key4": "5cEcioJGYxZSXkB1vhcmXHiyFSN7k7eYgEf7AoTiJeoicJEuuasDCAPSn2yYk2Mzqc3q4hKTgXWJWaZ9Z5zzqg5o",
  "key5": "4x129fXrF7nbqzPNsZuUyrxSWSowt2b6dxkVB8SuPmC3NCHDSCB7KHpcrL7141K8YWYryWGJKRbzW4hvaF1i1X4i",
  "key6": "5hrC9rUU2JsajhqzSuxxbfeGHQx75GNg9Rk9fwtpxEmkK7UdUR3QXM1KPhWCH1jHtnpFpSvSYiZCnd9kLxJpBj6F",
  "key7": "1tX2xAmD4Hd1DXKAo3PSTNpGHvLL7mUErafrrieg8t9AJCDtYsJ9wVDgwt3Y7M418uFnoBXYg7VZ35Luhxtc5Pv",
  "key8": "2z1AT9XBmrkJa1m7kLFjpQ6n37j1avwkEfvPRKtgKkURfLf8S9pN1WdWAyC9HcdYiEGPFAAC2UUf5CbUmZCvbRws",
  "key9": "2vkwh8jJ6rA4obBij9hNczpJvobUpKgwCuNYu1Qxco6hV1bu4QCZSSRU1vXrCDzKokmaKimNxMG9ozC2AAskFdQH",
  "key10": "5cDNhHHiHwtBCioaf3CVqMNBR7JawDZV4k2tEmQbTFsbz87fXyowaitoqsXnGCpHscKpbtPeMqVCjUGFveg36wYH",
  "key11": "3e84oz7v5ZDKFrj6y79f4QWy4a4U4gT1yGAWu2c9Rhg88QtxA73bRUgAoKizPVqyFh8YmnfRcjsK8ELJg4ntLgSZ",
  "key12": "PZiPrKMUuNEdJXVUNG6VpZcWH6rCxXbSY1vPhPxGUrDjrLTt5PjrwByeEZMAR91KULpqPN63eFckssVRzEU3Qfc",
  "key13": "4LGjPvi9nh7F8E8C8morQftsNHXb57io3L1iG9jPaeh428Cvc9zEt1sWnJkEYBqLcXCGw3rua96TAwgMDoxyTyy5",
  "key14": "2DBDntVcY6pAethgGBkGAjS51pWotR7BSFDwUFMgZLrrMS43JX1y6ukQS71shjoCCbnqfyroThtYEChQToySxfMo",
  "key15": "3qWq93PuQoiJ1r5ij7R6ESQJcwDQFRa2VFZmQXWRvbSQiKyU6PHxibS2ihqmfHL838BnzNga63LFXQhcybDJf9J1",
  "key16": "43fE64jQrhrZSuVfN2YWwEpqFCYYUXvWpiu3zZDEKYD2abeT7tABEfX7SnB12iUCosPEkTyYrNUPhjAFfqmWgKyC",
  "key17": "4tV1FueQXfpZoSeM4dJXuLMp7dxJwCafJWbmZ22BA1biRA1rGZGLLsJT2wWfQRqPYrPFVDVDwy5GC8PSdU8o8b1f",
  "key18": "4GQDDhm1Vh2ZHxt2DUkF9k9hH2TWoH5tT96y4prsZRy3BBAT1wUbyeSpEw9ZrtPuGkhGyiWXHiLrNmb163DkBEHN",
  "key19": "3Wmw1C8A8wnX35JhkV7VajvMn56JHkZwkQsGyYyDEQawZgmSSZP9ghNCYUVYjp1UbPZ1BXUuuUUTBu9hPvWiwZ9w",
  "key20": "39Gy7L4ZBGPqDxCun5HJK3owxJZuztiKaLEwmUaH787deRbPhjc7wkuU1JMa2emhpRXZrRJc2bWKKofm5DX4gjtu",
  "key21": "62bdTS5RJKBu5ZcymV6hiV8Lrozhb1ictJd46DfvPnTFNToi7qNmZs6DUJLNEKs9596ts7G88FnX9DtVAKsjvCP6",
  "key22": "4yJwXYcfuMJvf65F4Y75gkxykSJvkzsjdRoDDtdE2GofcYbmyxzNJFYkq6d9euuKRAZunE4snBeob1Ea6M2r715G",
  "key23": "3VvNXMDVSSL7DoMDhphiJG6gKopcpwF38TH3PYx6QiwVQGJkbWA1mvzVC9LXjxvMwdyMGhWqFEmy2WGE629VzAwW",
  "key24": "23VbFXg4MpUSM2ReRU7UQxrKVDvYqwq8vj1SEeP5W7NvTcFjNidMffd69dE6XVywwRV2tSdpu2R7f3vgTBRmsydc",
  "key25": "3udJSLuFpG5E1CH6Ax1chM1aJar1MF81C6aQYpvU2iAepsn3goissTZQBcs3wKhXs6aZ21Wb2ACcxvbpTz6kRALS",
  "key26": "62hnVfMrsqXZMEjPxydMgesCuzu2Ko4bJccu35D9RRwXSYX1dHWfu32HZXespLmUQXubJnDqTm2gSV72nJDCqAxC",
  "key27": "3JQ8nRPaTtv9CKQ9RhfxToZbQNNavpzZaqZukpc2w4TpAF6ieFAbXMZnkNUoKGhZKbj32KAfzx1gdV1r6trS8Qhj",
  "key28": "3dTfY7qKkWkZvvpxNfR7qmLikaSD3WGQEch3zoPjmYgHCaF68Q2wnp652LUDPCQT9LkHs7NDCUkihB7QiQh3onUX",
  "key29": "pJYMWEBiTo3FimLD2RXfsEbk2V2MReupmsb7PDZQSzfruM6va3j9ssFS6QpHSYdVPBnFnmgtjRvGRSj4YvHjJ9p",
  "key30": "4UXbBEeB9fWj9j2p6Ajrv3hhXUGyy5fjH9Y78GsEVL9jH2bJgKCSohdUxvi1acvajN3EjPwLiDxSjG1DxcLPGzDy",
  "key31": "65peTJ5KXo9qgnHFZv8DRhYiVuKV5hpd2bhhDHuTDZo7PrPx1uixfvJpczAQjravDTv4H8XBZVjpQZ7b15DBGst5",
  "key32": "UqY8wQxmuCRRYNjnc2hC7jS3bLd7znbc93cvZHPWf5SH95KYxkKg3d8Y7JqmQsPMZwwyTAxfHMV7y69HneXazEY",
  "key33": "3L1sMrkuo7BFMZeMjkLXLmdnoATesJezye163AQZoU4PMTpbbDUcb8fhXdnUuY7PCio4y8QypkkXxhHYVCsSTWcL",
  "key34": "233qqQL55kiMBMjMvHcSSEHRccMvzR3m78mg4GrgyTH8qbzbBMTKYWHtjPDenuJUeHadMXyV6NQ8bP5mtCSgToi2",
  "key35": "4QZ46YrTsKada6Rc3cD45uo9MVhQapqw8ukgEYLx7p2hwN4ujhJg9v6o8rhQZwoKEEaKcTFKvRTJjSz6ueUjsCup",
  "key36": "aWQKEEreUZhA8zSiJL8daVUL5GLo6zdzaooLpGtTY7FSk5dKUesEnHKcKNuLWmLx1WHxsa6jZ7Z5f8FQUM5KzXq"
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
