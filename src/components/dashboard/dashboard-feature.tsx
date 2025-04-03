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
    "NdB78E8QXp4AB5jRfD7N4uiw219GQ6uxWF1wnX3SAw2PTtBR94DX7rBYwomqQ6pQ7hvfCok6T26hGnnB2A7Mfzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x7WQbnhGncyXEbrjYhPUmkDscCZoLgwVEKnBjqyhPjDsGwGcrZ88P8CNwnYyQHCjmGKaBVLpiDSuNgeBzHfxNuF",
  "key1": "2arj2grMAFHwDeD7KM389V17fGAgY3qHXCfkwTC7jLy6tT9nTGcjg4TWTtDJ4i3TZzyXidcFtbxVQqPEqAuHzcpa",
  "key2": "53KnsPQgGHRBnefyTtMagaZwhVMBziFa3btxkya35uGBTsivPp2gSNVCFtErnCqGSurSKQcgJELZhd8SFY2fHrFq",
  "key3": "MvKQzVsuHa19oVSQCMvag9BgCiBAN8wPredBJWww8VAsL1qNfLviEP6LGCdrrKgh2sPYLjVqrpnXDQJym5dBuBc",
  "key4": "5We1xWMRmpC1SvVYDo9MPqfuywQMXMrv68KtphikkwhWtyS9AB7zY3erBhpFEn46Td9vzCqNmWX2eUoruwFtQDaw",
  "key5": "3vwjFrgQvmw2Vqg2FQp4LV98PB89Xg1SLpois5Knuri6MyxJBoqAZxE4qL388PScYb9L8o7UmbpFMaUvANLMtFHp",
  "key6": "2FqF3QKmdXNrcebUKEBkZm1PXK8h19YCURwd8qoYvDQNygUByCNQzxQLZ2iPcSThjhYzFtf5NHqLmdSEYJcZ5hpU",
  "key7": "oFxwbGBq2hdLKTBJvreCavGKZi5GV22AaxRG1zbeMp81yDv15ofoBQVqihmaCAVjGChLm5Qpj4xJhX6xmmSWXpJ",
  "key8": "5ePkY4eB77WkKfxzTiLgsGDVdjHESVRmbDwo6anb85316r6MMidGCCr8VmAz6v4rnUYGETiHSFkZ7dSWpdAamLe",
  "key9": "3P3SLkTqpmMLHxiheVQnmSujtQe5cv1CxNHzYuXGPwCGaNqRKGwDrxZtvw7pEwvanS8mE6hB56RGe9Th4CPwDXui",
  "key10": "2BV23Co9aSmTH3yk9Ni3ZfSth7o79V24KCyusrBrPJpkn3Sr1jumeVgiZ5J1R3XgZCjCuKU32iWSxVhGXa7bm9ea",
  "key11": "3BUmZbcZy2EcvqvvnBGCX1d4hBPYP4bf7LTGR96cKLtjAdjZYSsoPqf8G7GKRvsyVMKpYcVKhNtLvNbUPEfQ8Uy",
  "key12": "reBYUYCoEFufT5ZQDT4rZKjY9DuWvTgs5GdJbDQzEFMN7hpLHPxDykFSJjBiEDLp2BAtteENVA82fG3J9oXydsF",
  "key13": "vEL1n5oxbmDQRGEBNu6T487LNFgjLnyRT2MtW9nL2mb7FpwMCiexAjST73zjfDfksVpUAPFzhxS5VG6hvP8DTCZ",
  "key14": "2q6qGeRKTPkRrBA9nKJ2LmAkbsN4aszuZHbTE5PTXwFBALiz7Ggf4XNj9waMprUQAiBjm2G4v5T4s5JoNeeMABfU",
  "key15": "2wsfs1AF37xa9eV6fzpPWNUARvj6WKLfVBogCSC4QPqKpi1tPgKWP9JfiEoKsjcLwUhJNWurhuu91SF1fSADoRg1",
  "key16": "3nHNjrRR83aVXKBFW29EbjNT1mAbnZSYVJLaNWUt1pXz7SikEiNEfDKuWpRp3KnFxBJc5fFLnspbJWr2J643YuEM",
  "key17": "2fJuHdaPfgAYaFnEQVQzEPSzEhAyULkSVgLSrUWYk26YgkudJRti5zt8pLKajFSviAigaaNuq5nKGBqEujYFkR7V",
  "key18": "2wNhkeN3tNaK8FqJyW9JFPJefRa7y8SpxvNHNKBbb8WiY3ut3Mbr1ZYH1bTbk9BV6WNVHvMsC75CwRJLumixNQ75",
  "key19": "5uJ1Vy4HrZyqkRhtJsM6qwJrptrzTeKT6knYvJf2wSHnVPBzvN6uULzCWuTrt4SM28kKHXTVvJ7hU1oZJ1JFp1Pk",
  "key20": "5tLLhmGsFwrThh9qBgXA7XjDNmutJ6AwiuWwaQ6Zwy2WqLGDAHitrEAUTbWHGtGu4Tsj56ebWENS2PFanH3gZn65",
  "key21": "wAhTwZqz7tJQMyadcY4TKTBMyMWnuRM3HDhfWAwAxp7f4Cf9LR8bb1SP1GmFzSVyEms1453TAJWqcYRYn1HR9R7",
  "key22": "37RRYGmtcYZHrtXtGy6AbBxDG26BNS1G5fggnjHdGNTTppFGCDC68LE7GAjb3xdqApCNLyHfam5s6dQhqoMzqkty",
  "key23": "65EQYXEcQ3r3wfYXmRjNgHD558NGvrFF8Q4vYBYhH9Fehnv3vFHsZ6cSf3nKrpn6FPuJE2aYbRNHbPw13VxDbTUC",
  "key24": "52CGp6YE7YovdToJiUkuK2t3byC9ni55VG6ry7SiUUt1SyxGLQUtkmttEPYKshqKdQ9P7g6W3UEeUUSXZL7T1GJE",
  "key25": "2EPxDL6UXPDsx3KWpU12UVU15ptKwSsLGGdEuuQUb4f2yJb7JQBuUCL6BgGCfNtUEPAZXu5aJ3iGx6i9ZfJmBM6w",
  "key26": "3P7GLyDPCtSmTremrKAvqowjc4HTJk3fYt1MqCtGvp1rGR4wsCMjHWWZBvQfHtJaHBMigXzTACZmnXSTbkvDjoCV",
  "key27": "3Tm8bpqnozkbnKAQM1qBNaC7XeD1xtmyuQr1pPmGQJinmat6gmA2SKidHhdKhm5wHrvskpzLzfX1xAmSJtk7qiQ8",
  "key28": "4KqHxx6CiNBgg7YBbzvcMFgkXRkV4rSLbZsFrXdyH5t3J8MnRE9H5ARLdWHypQK6hZ6J5PaRsThda4K2MW6nfbkn",
  "key29": "2FE5cE7k8dvKUh7KuY9rRgj5mtsh2HJEedLNGrKVxmC3sJiYE83uuSrRAm18QBrYmNqNVKzVezXZfWyUa5Z4zHW8",
  "key30": "5kF1doJmCbov2kG4fC5EegmWKb1ySjkYjiQCPGEJ1pXMbK6cU7cez3jpw9QgCr3ughJGvchpE1i5jPkfthFALZaC",
  "key31": "4tCUUpq3SJGfHCnWsCsbCMKW6Y4pYHut3MNS3euvzEZAknt81scW8E9uAjULYmWoMTxGQ9M8hfHc86tWQX8aJxpW",
  "key32": "5Gw6upyekvtnPcgYsYTfm6wZpUNWNEADQQN44Nbikx4QodBy78KKa7fUQFLotgtkGCrxYjFD4UBqupbuEzTsawW5",
  "key33": "3ewbACEoQRHKmi1UNeU8C9rhEFUAwHmA764v8QnGTejyxja5ACBeNN9AtgmnJkF1YncMmddULBQQSssLMJJUM37v",
  "key34": "Py1EDrYVDyAkFENWdfjDhuaWTsFNm2U6dmJrFbix89eMCkVh9sHuR5LsK2TBTiTEgQuphGtmCNKCr3SWAGJTPfp",
  "key35": "3G5YeR2QULPpRXiGJeR79X4LCifbhsQcyQh7PNXiKSnx84eYw583kTVvQ6aEirww3xU8ZhhHkpMrG6MeMQr2icqd",
  "key36": "3GWfqurFr8M2L65gKmEuKn4eNPisNSbsobeJDmBoGgoYpiTAT2zH6F4ssaLzX3bTN8UEM8S93oFkgPxuDDGBzwLF",
  "key37": "3tUa8ZzMh76CYkRMxvZaBYQ7kXKB16rABdvTnzwy5b4G3Q8UZZfqvJ3j4u3DGYn9KeQyt2xuG4mshF5Wuv9gbiMe",
  "key38": "5xFakRp6Bg22ese87y9tBVT5uyaDsnjPy5iXeuyULHoVCFXQTbe8Q92dXBhgyfpyVU39Lwwe2cbCnXjV3TiRh33L"
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
