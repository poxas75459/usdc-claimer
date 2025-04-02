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
    "5VSNd7tdP2qUE78HMwQk8wQGyVyungGwxssubDZsYBC4E2Ee5xf735LbnovQGUWZCf8rfZiSKhvJi3cthRzcnjzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D831NYMtwCcEUdgqPvqxwrpcRzC4Cr23NYBkmEBW2vgvT5CH7tz8u1jfJQtHmHZtLQtLTWmaG4dRAxmbLKhDgNT",
  "key1": "64KMxM6Abobe16GHwwzuM9859dehMDH9rxWn6uTRxr3Y8mgHJjQgKtW4tK9u5Wf7NEBCmS2px7RCgBQN8rR6Sze1",
  "key2": "3apCiy8jD4nWRY3GwAG9pfku5tFa1UReZwgcBAtHiFkLHDpFNLKwzCxXKjEFx44kTioqUo2pVdMyiqQJKSakVESP",
  "key3": "3cwwWwzxHCUAqLnffFP2i2EthC2dC3VqEkE8aAuGx3bNsKrDc5QRWCWnqEGbW2ftT7k3Mw3CUcQyerkUhcn5aMDZ",
  "key4": "2MkyUQZUCV4rKEE3vhGBYfvYBHe3d4iUVeUfrHY5gMVW8p8zvRqfgy3CRLNjZb4tcrQ6cxmFucP4mfArDdmR8DSN",
  "key5": "61G6r1y35afZxzHH9F93nxL9Bq97AK7drJa4cdx6Rz331yUthk2KKAiR8RJDhKMvAtU1p6uxq2PfjxtBnRRkwUPJ",
  "key6": "3yMq6eixXgeqQqwqoPLJ3VDTP2iGMAokH97cyZsWLH9c3dL8A8SdEocNXn2UKJxd2LWx6W8hNNUfepJcgy8qik14",
  "key7": "3BLet4Hymv8254jKY1SVCHNXAAzSLVjPn1SXN3yeWK7hqQgvgDmboNnHmCHDD81y6bKhAaKCYd91EDr1ZmXC6S33",
  "key8": "5Wxvvp49a4AycLxhjKSsSGJSPP9Rq4TU3YqP8hhaioQPV1DZSqvd55AfZu4uda6mVXfpwEEu46nG6JTCCdp1chEM",
  "key9": "4ruxumm54h1TssDjzgs9PFfxMyKzYXKVHiFzRpne84nu8BjJRNrHXa1JWm3yV2oCjL2iyRq9b7NuAkWyq45qTgzx",
  "key10": "4ukmJobaZVtsW5gRnR42rwoDrDzV3vxTPHfQ6MmWpRi2X4rUKrrXCzZG3CSR9i1ysXg5pY7FyMVUrvg6H9oViUhN",
  "key11": "NqSFtWZKeXwv5WoZa5N1gy1voixni15DdBkKyBsEebfx779fsKRdDPw8bQPntNvNR1sdGMVap6A7qjpMBYCwLae",
  "key12": "2TcHvHkDMV2Jne2u9xnM7Vpu7XftpV9qi6oradxpPpHqTZQqKxbSowBp21gkshjgiWaHQ61PU3wzXHkYA9SJAwPk",
  "key13": "35ataVWsGc9UCEpXbRtqs5inw61XYGnLStnaKBHJ4uNMF7kG3cJT1gmYsZ71tY6Xi9Tra8xSoQUrYfY9xNGPjcHh",
  "key14": "5LLobnzNSWcKnMqVteqZxs4pUTZfb148p8ZMQ3tN44CLuEpRkDUDXv9dbGWGfTKxvwwBXoTaS8yzbuvCkLk2Q8fy",
  "key15": "CUGWMv8jWmYsdVFRXWjwG67pBQV8LQXvzDkZXGGpHqRvG5SY8DzT3nB2Mx5GFLwWh3SeJLJ34GeZMZswPRmMtQm",
  "key16": "4MZbZVNNRhYZoETbzxENBVEopW5jRmCSEXQN4JhVha5jDSe9CwVsrRDGf62Z9TuJu4rPhqRbPKSestkpyuSVMjcv",
  "key17": "5EPGcpvoJSXawcS3dDw6iiBBXuFk4KuExdnminfe6hxCY5Em83WuiqzPjaREz8XDnjm5RybC4QWNFVFEGFwgek9R",
  "key18": "5SDfT9GeZwgx5rTiFaSDLscWzAtW8Tycs5uKmVetSrxurSkvNhvi7xb3hqRNV11KhNuTJ1XV6PNkjpSHWXgLLZyY",
  "key19": "5KxZesbqAS6ZHc16QkN4Mwh64vDAexeghdBCynKgmia2qvY2gxGoEW1w8328BPoYL32xMAyhhjmAESpxcipTHGek",
  "key20": "H1n9AkjtEDEjtajedbuKjLi6KbUJL3HGHcGBnm9gswVqyMVQG1ZjoFpA4CUnmBZmYRaWXHZm8vhprZW4sCMJUuB",
  "key21": "36kXCyi8mzT49uXyQpSPkPKarrKWjkGTDbq5uR7aaoUTC2ducC5vmiHC1mFeiaDUKfJBM5pUX2MKeC4f2xpu2CTQ",
  "key22": "29sZCiGCE7BbwuuaX1Ver56tYDArPrPGdYkcjCVdqpGGCiLs82KFHKfRL3GQw8KdaV9gn5qGjEjjqYXwtmf48qPR",
  "key23": "28Zw8s7WPBRdGFq4MyHSMTTfXLiDScvSF5zgo4mg5cjUvuCQMC2BLWa8ZAs94pFVdMt5xA5RfJbtkKtW2sKdGzyV",
  "key24": "2Y2t2iEyS8UaeLTCBjaMNxZNVHi1enHXap2F53zVzGaNgaKDBAMc2z1nx5gcqGbi8q2fHxuWmufCiXibFJFbYuzi",
  "key25": "5rTxe3YviG91kS5bgSvf8LESi3sd28sezJYcFyEHezCXHs2vYJLEwbFf3EyJCFJTYtoHLhHD9rRZTYNQcgvi7zKj",
  "key26": "4DVhUicsPu9kM7HaLSYrmuqFAXySHJToe76hjz81vWZbxBBqL5r1AVZqLB1p2T6zJTGx69eoSjPwjRTsx69AnzKo",
  "key27": "2XFCgr5apBUXvk2KfX9wQZh2PDZyXS5rce4J42cbYMxvy2h1JKmC1TTPoMF3G4toQz66sePNnqrmQx6MTzVfwKXE",
  "key28": "42V3dDxrkppUwuCErVXEZyXunq6QoB9HUrUdMdvA2m3VxFhwKayGDBL7hUupmvBpi2ag1JESpHAh9iNJZFHUqFkK",
  "key29": "5EfrGBdHurso8nQWuBz6HqTMizCU7mg7bn38SVN7ydxCXUwoKL4gWYTjwQAjo9P5oMrC5KDRuEdBQFHUMJyhe3Az",
  "key30": "52RdYaiQvr3KtwmcVZonUAH4eJPap21qykjn67y7dZu8PQLE7adF2Df99T1jWa5x1UCbrhSRH4L1qbm6GnWFjLUJ",
  "key31": "9U1ZXqLW1SN3MeLWAPkfBHxwuZ9E7x9G8KndqzW4vTWgYvTcy9xQDQ972yE3U6JDBNhRoDqEHw5jQQZHfujyTYr"
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
