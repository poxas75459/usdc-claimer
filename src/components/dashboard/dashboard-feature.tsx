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
    "56EbGFH5XcSjCcPhgLi2AXtodgWmqtHEtYnHjCckXA1BT58cWb6kt42amZuysWzwJM7cx5i8ndff91pLHpFGsS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LWedU4eJ9uKaH51c9TPBFtHPhi8ob2QuY7dpNP8NDcPUQ5YCX8des1KQW4t4Gj3YUL5ASVTS6ieaAeMsTpAUh88",
  "key1": "8vB7YG9m3NWtTJWnk2rvE35j6ZRNAebFMM8nbvnz6n68jtmFZGgqKrhhkfZjwZxxjWgE3EnqFejLqM8mjhsuXMA",
  "key2": "BsX4YZ7qnR45YzpYgfVPv91jt6uFFuKqeNP3xX6H8wzU2xMaaxFC28dUW7fFkB4Kw2XUEfnEtaR1UbSMdgDhS7G",
  "key3": "25eSfULtXjuuokEd2xTevgVLWXynwXvqEoPLRUEr92fCVXq4BsniqpVsxjjF5CgGygXubh33xgnAwMQ2HYJGbenu",
  "key4": "4jsB2QKDBB86A1Niah8ik1NXBawB48Vmehr1vPsD2LZDJ1uAXm96rVgvGbycibS3Wp2dsM4Gaq4sior27oouVUD7",
  "key5": "2EpqE53UNs5gAjkdMSqrHy33xKUcxW5iW2m8Y8zxMYGYRooTz7bwuTjvo7y89HL8Jm9ahucHQFG2m9tEYXF7Hsjb",
  "key6": "o8pvEKEx8LhczqZnoypaCuwoTPrQse7wvMiXZjPRAQY22Qn7XSY24pDhEHvM9ErJQuxXefzXpNBiKVtpfmqBm6Q",
  "key7": "42dqnah5EwWSQpfAxLRR7vsoF96RQcgcHy4wpUXSKW6cHTECXHVhHwP4jcuzMVq2NAGWWyg4aqXjwRa7yxUXH1G2",
  "key8": "539U7ViM4tDSuv9jzT15jZj8RGnz5uB43Qj1GFphGCi7ekvkqQVZxhGe4sc6g7dmvEL9LCy21Fx7YWJbb5VsBRNe",
  "key9": "5rNHTUjTpuU2MGEn2cWg2tDj7FGNuiVuoCV2fY8UUPiNee1fXYaGdcESQFbe9qJXAooEKTAYJftiTUSvEkfXGdH5",
  "key10": "64PT4WZWZ6ijjbicvGfButEKJGg5tgdssCsHP3aMNi3jJfb2tYyTZpHf61kD3RzARsdd4SjfjzDpxntqmcCkgaT3",
  "key11": "49zxqyt7vvNT9S3twSSTzEBiUubcpQoRM49ztFHamVyqRfL9HeUUyobz7ctaXapSyU7BHfbmdrqJXTmzDQUf8hkd",
  "key12": "5YAxkiMAgi1Aa8u693ieokNEbdeTTNpJZMYL91DdrnggyWxN9zGXRapuPm5nRZwK2i66ZarG9vfJMbBMU8Dzoibz",
  "key13": "5256HYsWU2nM6QPAPhWsqb5jSMLfnZsK5GuEjjC4meKofPWwrRbErN8huNkgk564hBrMi418RHyZHBmNrFEcdTs5",
  "key14": "3X7an1nSXQpkHVnnyP8MS4R9dnArAe3FbVz9EHvucxXuvPW5H2wcTLV2oq7e2jmLhuHF1jFg4GzLfiK6N9seoXan",
  "key15": "4Xduve883suiWTCqY4mc5Ghda5mZB1XSQgGD19QzxAfpbyF3dV9HfczhYVqvGmShvyWmHFyuh486F9styujf8JKm",
  "key16": "qMvmLDNbJRGpnbGuG8bV1rwy9E1jUAvsgwqMgmCDx4fNLe3wnKNxiWDqVLhkGjbi3jT8eUwXbRULhAjDwubTGD8",
  "key17": "2h7YLiRoufnyDMqJg7C1oxQjAh6DPT7xjWchU2pcYtEzVBXs3K7JRxgXBoMRK32nYyMJ7jCU96oYSU8p91ogb7YQ",
  "key18": "NNC72uqekKQQb2Zp7PJZLrgw5tPA7ShYMdj3xyg3cjfi2495xzRtHLnwQFr8r4nJCFNDfp8CaGEfEUsU7yRis78",
  "key19": "3MpcRyKxWDhEBEQ1uVi9tZGGkJeo8iB9YZeQQjB7TAe1mgobEjfWrrEDeEU5baoF3H4UsVjcprjuqzvnnofghzWp",
  "key20": "4mmEHLm1pj5ru2RTy6AcVF5WDtBPmSe7LbDAPR4JLi377YRX2jB2qp9WcHsuqreZdMKNiweD9f1cJrxnpPFDAcxD",
  "key21": "36KsLqDuEPmGR67oybeHLYwCXR68Dkax9mvtA4QVSkbACM1ZDe8ssoZiPzbF35NzWrs3Zc3HcaX8xu3vqxD5kAXY",
  "key22": "8aJfxyxjB7VKA2DBcyqCcmU6D4FzKFfNjsP39DkkXA11tfWUewRgtb81vXgNAJzf9PeHCgYbWbmkmN5ZYYedqR5",
  "key23": "Tbe7kLR9w4paPjFcqwZZMSsENbRG3BwbKTgW1QaycEfpNHpkaWxw5eNoEPQy221EqRBSm88sFhE14GBcUGfWaSi",
  "key24": "5SVgYsYrPH5t8uJDm7zJuSgMFAkJUxLBdc5SEViJy8LWxwsJbx848MTwXMxgZ7jrktp3yQ959jjjKbseiVaWNjwo",
  "key25": "2j7Je7y6cqyGjPECwKaxMtKmCnuQioLXzryuERsTp5S8fGWuvqYZTQXjrQYJjK1osrQu6DrTifFtERncyPA2PkEa",
  "key26": "5NmZ1rX44UJ5VacWtmP39jB7bH8FnAzE54zqYWVgDc4DNQJcQDqjgy3RihLcYJ3GbZGHeyTz83zDEDjC23gVn7fQ",
  "key27": "3z7tstLDBqJMdCB98VeNvnMfnK9HAivS5EFNmufP9Agrz8Kw1SwXwiviCxkmqkN8zDsa1JPTk34TnVCh81mUDHZZ",
  "key28": "3rmoaGUcoU88X9pa45DzUY6HnG5mZjG2yuUb6Pvma6pQVi6xUxuRStwy4z1JJ5RTGRi33eYjcfVuPhRCGskUevjd",
  "key29": "3mVZ8LVanZ3a4PJZpEqcUJV1sq6EZ9d6a1DrfzJUfngRaVFhKZt7BGz4i7uW5gduQFToqCqcKAneXuazu8pCCaj6",
  "key30": "vNUkF2QBamULqKUWumwZxKy7tYCqohFME95jhrvf6PXAEhwr1u5kE283YQfqvZtmXGytPecJrofk8Dc5H4qhGtc",
  "key31": "2Geg3gVw2LieDhErUxZ9AeufSA2sSbgPA1U1XQfqwzjjpAgJeGpccngitMywtRPz8NY3fqwVMvg8HwvYS2F13vLV",
  "key32": "3mqP6koX7BHr8ChiNLVjSsCT6trsybyKQy8eaCCaQRUyEhUpCNU6pUHbY5AzwPZDJRxpJSdc4A1E3PnXDuQBEpwV",
  "key33": "5MjcJgXM6qvS5kxE72xi1yKFhK2ssgF1YeEqYLJwNzcnQXgHdym859hC85LqqJhrNEGzzwAhU9PRmVi5NgBtkweY",
  "key34": "28veMJsRN7ycSydHGqgkGiYDEy2NHrRQtExvPxZ5gZsnrakTAKs35aTGcqA8i6bLr2xCNx2SeaFNpTGnG274hZFo",
  "key35": "VVMfnEYFyawa7dSjHouu3hPeiUT9fnDLoAympqXmjHV8BC2ynKivKFDAZyDWsorc3KPLChp77k6hpH5pKwzzTDZ",
  "key36": "4jvTA9QhPvLxb2zRv7kjf63B2si27oTyow8qwk5YGTztTXWr8xggA9y8YKo4vqKaR7jGVUkuQzWHL9ZqCntEXDZP",
  "key37": "32Rsz5DZRStiyUDPvdUkc6QP23iB2s9znnFAMQJafVzDW55BrUJpuuefe5nTwG5cP2LpNc6RMQWgSy9posSEzRCS",
  "key38": "4xcKS16TzUtgkT5LYEm11wHiJp6bzFSvduG1JtVqVvGUSqSuhEHH2Ds7B73kZ6wSkBSQdiJcFq9ZB27rXa85qk15",
  "key39": "Si8sXkLWi3Pmy9kroFgSa9MVzGqmcYGgkQjdBAEGiXMg4VQGHo1au3aZMh2cpE67242cGZjtzLfLUyAcvczwak2",
  "key40": "3YkdgbN6hcZQvtAK795Jb5e7PRwtFWzALYYfp1BJ1BUd4Q5eAXwyKEkYVqDMt6T8rmCzej4xPs9Mq3wxpyAv781v",
  "key41": "3HCmLWJrtvhV9jg2eh7d1B1ZzuavvkrobdZbf2efByKq2pwLUBSzDgX82CeCxeXmrozb1R9rMRvmFkvhrLVhWsPX",
  "key42": "5nBgKYoXMDixc6NGRQ55YFnYpnH6Z9EF5shtZV3sPXmggtp8VG1JJzY8zLWx3CDxxjFAF7vsfnsNvBBqdyzWdmUc",
  "key43": "4gWHfpY7vtiL8Mw4bKTmEWc9xwiWxUUt9UtDoXwpDxgaxMmRKC92s8Px6TGHrmABZK2Wa57Y5FBeDuitRFXb44ej",
  "key44": "5wG4NP9Xs6kKmTjVEGThhqgTut6fu9K3nc9dPAbfrqYEbzdoJ3YitjdtYUPtdegFiZi8ou33L9ad2ZkuHwjYVE3B",
  "key45": "4XU1vbzc5abarKw4HsG4GrL3ewuFUmd9AN1qNcLvp8LGabWNHXadLc2Hifo6q9e2BGxdsYtXSoJwA3PoGDmKrCJX",
  "key46": "5TYGTEd1rJ6AeX8Xvc2AVPSRtko7YAHvDohdJn8djjSmh99bjcNrwuyRVHakjg3Pn6UJChL3iWEpPYjyu3aPMVjG"
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
