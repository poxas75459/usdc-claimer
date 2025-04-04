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
    "5FNY8qmuhBojZoTVFmoAHgnPrAE292pHypYxNKNLmVt5UpEZLfhDGHkJ9ZJZ4q5fzKBb1dZm66pnErJZTDZfgXLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6WMpb1HKcDFPs77NXFmDZ17T7zMwZGM3utWEmFvgzM1g2jHSiqonGpzAuCcKGgK35nCGAZ172uS32i3PAFNoJqM",
  "key1": "3LNwqSc9Ccb7WYJ1HJsbHtxm3g1NXfk8Txg9jsxmaYkshg2DEZq8JT186uEPe9SXpKHZYXZKCd2SBTLWygGfieG2",
  "key2": "3JmbnsoafNKwYVsnEFqZb6UznDePRLskBrsQFVRiueKqdDceFWThmEE12Smusm9w5hxymzwXoq2NWTdpkmMvXunG",
  "key3": "23iQeKEL3oVza3jmoEtz6UsUMszm3HKSMU8XraWPaKDxroRzFLYefjGEcbgR7DdGJ1uKtDQpTgKHEAe6jGdf2Lik",
  "key4": "5zeYzca1D1YLJQoodSTC8jiSEdRXDQ6BnsFwyyHuG6fUPiBqd7nE6FxKnDJc4fje1kbXPtpfAekDWeQMDz1xsNgQ",
  "key5": "2GL1zN24ey4NjKqTa3saGsZg6NS94eXEr3NZ96yGkgrWHCZQy1rYXrH4Dj5SxFMUhWHKrbUACEndqdcLHaMge2vJ",
  "key6": "LZNKzzSubxKpozpM1Hgj2jZMife3U5aPC6chbNrKFZywK9xmbT4SzMG8KUMpoRwJa8UgATP2JBGSvHLh3uH3Jhk",
  "key7": "d236GoAQTUThC67546b4ZkkahzdW9sjYgii9YFHFqJHB3vqLtACE3kSn9x1zrqqsi6EGfbe3b2qaaQWDaK2PK7T",
  "key8": "2M6PXNu3BxdRh16wM3HCmWah1eWtvVtJv7NGEu1WRp3mVTMtcXsHWpWPgG8ddP6pDXaEAeXrbyxZ2eeCXwwmVosp",
  "key9": "kh5GuiohdaAedgijaSC8gDyzv9GmHTgr75Ei4b2bT6CzexT12p3f41gghLgdroNvfU22KynwJLjdTuenYJ2LXph",
  "key10": "5tdFqWtQPFTd3JuzfJAsQ4nzfsZQf6kPUsimUtpEm7M9ziLs4PmtxBbbck4ZYmmwGN7YKZJvfUvrdzF4tXLi3ikh",
  "key11": "t7NFphc6iC798eeNa56WZq3bGZtGW8ekVL8wv21kavf63qVauwXxtkb24dJL3K8fp6tDyLmwrpXJCacp2Up1C4n",
  "key12": "5s9HSf2e9gKEKfRYHfSF4PUKwW5pyMJSDcbD82DTtMHZnaFqUw3pYzqn6Mzzjvmxpj5hD1C4u2FiRWQucVtrMr5p",
  "key13": "58ZxhLzRyWYmu38uwWtk7hhZQkcFoHkc7gptrFffSLkvm75ErEsrdhY4Z7zXfaXxEMXBLfbxeNce46t7ffwGUuCQ",
  "key14": "xk6BHE66SYwbDQfYCYrTJc185iXZ2VBzaomhbE3WYZ2T2kEB6e8ho4CPpfbMEYCc64AkyKMWdJXrUYXwJhLDtts",
  "key15": "4qL7hWrimjiWWX2HAfdsom1VzTiD3X7nqUjWm67ePbPKmEZCAxgfZZXexEyzbLhUxoDtnDKfoWSk3RCLounJ3d7G",
  "key16": "4XPCfSUxM9NwxFTp77fC9MyP6x9NtRikhxp55hcSXHhQTAT6w7MNwbkqpprPPgeSht2thNXLuN7uhSGNHSxMSrma",
  "key17": "4MdHdDBXfABG4Nhzj1iDnqUMbuL6B94nbaQQze9UKff8HJ6kJKU9vkxoitywPPts38AnK7DhTJxBttD7Y7dxDuJu",
  "key18": "4y5CeimgmxJH1tzYtNgGydBMuzWNSUnk9VJdbXhM5h8skKMSQCrtdvXfArNeJMuC1FztFqyvWvEv3Df425CPSjzK",
  "key19": "4CW2qNvGE5ZbCpFZ7y6tKb1yt3ocCL8yQtckC1QbJrLP7XARYR7wNzeaAu9tjo79X1Vg5ZGmjv9tPj7mwuyWNkLT",
  "key20": "5EEuSWVLXwpFJKDwpuc1w1JXTWfYeTLXKnsauCpHyxs3XCzDnF5TjtjGZuPJyye7uMnsaGNUF6yUfujoZE3s97Uy",
  "key21": "3dLxKESFgTTiooqAXdeWBQuL8vsS41EWJtq2UagnNwV1GMm9w6q77LsvuR3mVxBsQwsGFELEHuoLfFZR1YRw7fJx",
  "key22": "2tproAhj866U6hPJD5iJaAa8xfq9rT6HDN8WMMERkydhXYonydXx5WwAxbPiV22kt2zim8eHTQH1iUghiN6jnDkU",
  "key23": "kYLKcrbZLguzbaL9yf4wCHqjVNCgKVbne3kTgi8RnpW6tiLfT6aMy4UHBHecJkZ8r2dpCMFHxwq29Mr4g1oKAPt",
  "key24": "6ofLEcTdp11pU2C7M3BJ3SVwAUAnCKyu5VN9KBq9KTTaBRCu8r9Wfv1ZToK9geM6FqqeRyn9fmBLeVhdZSi5mXC",
  "key25": "4brtZ5WdMQFANJY9P6XNSz6njVkDsnNQnm4sg39inF5U45YyXDkbjW4i5XszGriUz12R1WNJ8JGKJnmFvBPS3nnC",
  "key26": "2HXGg4EVWtFLYTbvGxDHVCyuZ6QVWxQoT6Qgf3RrFFrMa78vzHak6PqM7Stjvm1M7QSeJirbHb81cUTCtEkV961C",
  "key27": "5tL4QtcJGVs8BcMefw22xrWZ2uXKoN4fLKdCad3GMggP2M513wQ7i6DYjmzj9EhXhNbPEnH5ZDFg4kXu549J1mqq",
  "key28": "4oydFamApGtPsckVp4DiZ6qFQjZqtQVptq7iJLYmdT5MUgXGeuaX8RJ1WhfT1HwgcpK1UKobWfsmkcqXT6ERmtUn",
  "key29": "21d1Kn9LmgbF6AhTeUY3S6z64pwZ5vRrAQferoEFs582jfMTMRAyJ8Dg73m1skqEs2rsWSjV1F3xtxYBfQQmPdyj",
  "key30": "43fDxDnSdpxkKUk7V75M6JmxZcibrPCqdsFq9h1sLyQhR4EoQKD53sX4MoUUkVqz7Jvfu6cny2eutuTAgEweFtPp",
  "key31": "rRZPRvyrAun5Rea4N6qRRu7hJjLMYnNhZmavJisGAT7hGBGcAp6QkLpKRFwzBtMW6yePejqRQ45Y2kymtFJKbuW",
  "key32": "q4YBMGW2Pqh2eoqV5BYS6BvoxwYdqiX8Fu9SrtsZB6LnkQH4xTtnPsabheFjRY9CVFaNuzJBHybxLtM1ao3WPcb",
  "key33": "24AshUJUFoZu1Jn9ovqrD78LHTzukVUJFPdosvUXYnenCuyyDWoaWNSc8aRHRb1d9dtz9AT6pzZ38AwFZA2wWHHo",
  "key34": "5fwD8BgizrWSNUHfqPy1SRoBC19zbPhM9BD9rjNez9ehqmgVaiE1f3L9nP8Kded6hN1eUVbuyUSFBN5K41qrkafn",
  "key35": "m7tDTPYJTPMNNsi9Q3SxKf5khvwfbdyqPXo8aqzuXTSsgeiVzNWrMJYTmrJ1udssimBcBqa9LxKLkLPBGgHUeuc",
  "key36": "4YXWHWvc85Nz8dPTwVGypvyV2bU2PX6X1tYzJ9tiaE7Hht47Csey9jwYcrsaHLk5HH6AesCTsZdCzmap4uG3p6rV",
  "key37": "4PrMcfv62nseAKfuKTQvk79AtRxaVLBAJ9gqP3FMkvuUYCArUQZSf64GCk4DgVPvPRCKxBot67R9qam2AZ4ozeub",
  "key38": "45soNnnfewMnaZwYyjSAe5m5zYqwH6gw73qNX2pURvWTkRLRCepqP6U96LKG8iaepF25gbrKSdgFtQKSKxUUXepZ",
  "key39": "5y322jYGifwA3W6vRdMfFR6n9wNDSoYvB1UPmCnGupdRRAYuUwqDVXSxoR6WrLGHYzwHbNeebsNEDG5LniuzRg62",
  "key40": "3NJaa3CQ1WWtPjHCLBDrnXfxZcGZMB8kZqTw9SG8q8jVt9rgHak4ASGagacAkErzWfVLpEHKhsq3Kg8DfpZrvgry",
  "key41": "4kWAPdieuMrN86wX9pc46QSN33cYLKx9WQMrcuGrvHdq3sxK7kU7u6vVLUN8fsZi4HQkL7hw8GSrPzu17fpU9rvB",
  "key42": "4q2C8RnyAXTEpSjhmaDv5rmcCfDttq4NRnYFJvbJk2k56YuUYCzJyh2SEQh45sbYVWAW79vX1vwgCcUySUqqXrUR",
  "key43": "4HExi1jsktbEVN4i7kiLA1JFyTjhKFqdPUwbHwdstZ4c4cquiN92Qbwo8SZG7Ubrg7q4KLSaEZWDNLd3C7ud3TWM",
  "key44": "2BY4sAKt147EF3ni5fAXdJ74d9QHN9pJz196aoM113rLGA4DxcUYvkmHBCxiztABw4wArVHSnBGgCHz3pjbQXxa5",
  "key45": "4kfxqMm3oLYjDQKyqbmspCyqnyBwQZizV83mhy7BBTUF8nub1A1nBTBBkWnN11hL5EokLZB4KDUn5zYMmynNprbK",
  "key46": "5VTiHZA541A1HrYv2LRRZibaW6ofce5N7Ao8cJaPek1gT18qutMBfkVkMiemDfgAG9vhomHq5Uo1cUgoCPXdvYfy"
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
