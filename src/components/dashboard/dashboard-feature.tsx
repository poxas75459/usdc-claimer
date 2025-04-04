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
    "38m9f5K1HnBYrtNY6y8acU9h53w5GSFj3fpibe2E1kzW85HSP9Dkjvy71K1SXuKChCJxyPyiVrCPGT5tUFzgo4D1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vcr43W8FkvwL1pDryVdYcpAhvoWCgNERtZM3HvqzvL67LSYbVHYekUQF8f4pQP1u1S4QJLebfNWKcrxMA9YMxiF",
  "key1": "P1hBJH4YRZsc8eu6cocqFY1TKoRZo3rzik8XVj1suJ4ZkwrubG1qVawGzQ1eqKFm46ZwkZ7zaXJ6hL1S6EPymao",
  "key2": "5DcsbHFjY5a3MGBsBVmyJKdmDeGK1aeyV1x1vxtXcLwazLEq9b57nupqtyB3dehV5wVCtDF2JTNQ7g6BHYJbxPJ3",
  "key3": "5JL1sGUdmEuPEhhQWDB5SzuwkgNMHHFf2ZxTHTvGThPKcRyfzPVAv5AQRvjMXM1VkpoQ4R1gutu1gzupD5EPKjFr",
  "key4": "3ohWo9YwoAswyFamHVJXB22d8wHGDYeNN5GtkpsFF1RE45XkDfir8C8qPjQaq8rnc4AzjkD58HCuDkew8LLzYYLE",
  "key5": "3yDFdnwtnWtFMP7aEVr3yMpkgRaLSUVVkmfxSpjsCf7DQbRVNhBpA4N95RjtMuUkawmSZgFShQDmxQqErN9N71aN",
  "key6": "3iAMBe9DCAqYHtp1Pa99NC88hF6bsX29XrQ1X6GcBNE25BEnrvJEDRW8bsbMmECY5KAA8qiitNkGdwKKoNu8Hikh",
  "key7": "5kCq3dp2G31fcUGUoYuHFSLiXAee3ZsmRUtjBDDMGnCApqB6ef5fB5Yd8UJKWExwBZ9krfqd5pPyHGK7dkrpCRRF",
  "key8": "AuJ47xax26a9zDvDXbMb1ZrRARreJjtFyHagbbRbjasNxrg21J7JRcPcC9tHP2QK2gQ53az8Q9d5D8kVxGBtciM",
  "key9": "43X2XJfJrUiDBo6pnpAPHQ5AuZy1jW9nqjZNMp8Yy6a1rrKaL1fcgYYZKFdxdBHTXPqM5F1viMas9NhMKGg4snpy",
  "key10": "b1Pnu9MLSWuyG2LSmsWHqmAY2EkMYLnB8rqoh7C2brmmWzC2rjwTQtaeFHbvcKcRXJMVZ2uPZTq7HebhAn1KaDy",
  "key11": "3WmtDVfzauZECJJSJUrV6EnLJYFmRiWNQRPHbNrYqPKAy6JNhkihDZYvrUvQRmRv47RbSvVQzEJwM6tNV1XooVBU",
  "key12": "4L1fMxu67Qcfsfc8GJsnNTopi28QSCy8LGh1QSjDYH4Fx98n4ukQni12riDxZzgTunvXCvV1u8zhrjHJfQwg465S",
  "key13": "5NPj1LaSiiXwYep7M9MqAL9VRMnJkbDxVRP5VakU3Q9bFum8KSfpxV4K5u8zYzpKgGSumrbidT2igY5jpWz6UJuU",
  "key14": "LsDgQcK1pZmjf3LEWDYVD8XDXJrWsY6K8WQamXBbuv5FYxJSQ2goRvZXiqBqBxNaLCjervVAJgXkUhTrf4imadn",
  "key15": "2HSkyvAC9G11ei2yDfE6gz8aepc5j8SiKZhGag5w4vfhJjTmadUYUJGNUWD67dmy6PmNCUZhiNbHLJ9nkNihGkMG",
  "key16": "6LUkPSpsjwomAPHuHBJyXTbFaRxNhGxuQZSkKhHg7ELyaT8oDntg9d9mwzMPPsAW4ajv9pXF739VNeeuwtBnx5d",
  "key17": "4BNKcEDhiApRF5uSkCdNWijaM3muWbxJFpSgayKKiwnMW1N5eSNH5pWjC83SU616ucHZcA4vXm23XocTFYVBLJak",
  "key18": "5BoBshoBtxSy5X44oKvY5mTLPDvEGXN6AYSWQ2nVutLPxESCgJusu3XuJinFSphn6cLkK2tmmeDVYwqjv956CyAo",
  "key19": "hvMAmPFhpwgG9nsXjZwL2NG2J9ycveqf1tyNcXjVh1z18DFSHec1rpYM1kDDeu8gjT3vFJqfsSZgjnUxu4mYnSt",
  "key20": "5jQrY2HsKAtDSKwz6kjSrqN63A3yWPeA2NEj21TJKa54iF6xpm9LCEvPawFJcoDre37dJgoa2fDKzTSKBJ1eUAiS",
  "key21": "pu2yLN6zmW5bFttFexBAQ9VZ2cQZjFF6LrTr3Nspa22HgvpNMnyRkkDZ1gJZPzw96QVr2tiaLzvdf5paFFCKFcZ",
  "key22": "4FMS8eRcKdRCUg5Xr2PW9tmWvJyjaNe3paiNy3sf57XbPxybGa8fALhDzStau3XTcWypmd5gbwQh6kqkikY6my4T",
  "key23": "4GdNhCRWtTWMyvou8JhRZANsCu6NqncgzagujLjLydKmH8gUKUVjq4N6BLaN6pKnhzodvEFdn3nRjiKykLKmu3aB",
  "key24": "4wLCHCa6fb8ibVPJBFKt5dckKGfzD6MdTQJyVXWG62p8aAhR2SqueWUSaubvkLzc1xXxNSoG2zmzxctDDVPH27xS",
  "key25": "2kyahEUepeGUHhDooF5rJwTDiopSbBLCMhPKHH7qK7s9Anr3N8SCa7QsXcPtDYi75f7VPrqurze857oNYfEFV24D",
  "key26": "4TN7hkBoYeHLcKCjpKjxpxyd96Hegfp4Ziw6KgstE7RCgmMqDkAha7tPteXJuaAzQGiPYbM5LFBxRsfGWKPHJs5K",
  "key27": "5bX3hjVKicMfA6SBdPSniNnTreuLjYSjzNd5njtpKpo5HjHMQurVQcVwFeBM8tGrBJni9VPomipaU8JfTa49DNCx",
  "key28": "4Rc2qpMG1ivnnovhkppgSyrPwJshJWGBJqEi1wW1nHPwJ86XLew8FPAWL3aXmZLuto2o2cXA4aonWPEbXag8LJ5n",
  "key29": "3uaQgBq5ik6EVDqVgUGnEkvAQURkqNYbjDaJ2xiqTy8uG8SGnA2GjdCLJSCMboQQsyf7ZyDxvP8iDPAE4QEehExJ",
  "key30": "3u2s5uy7xzs21MKwt1cPTvYaxSwUnHtdZKxfqvynqoQYbEYyzmXAMHwWGUpV4S5gMto3Wo4xcR152dRjs4LiWG7K",
  "key31": "Wsji3xUnbka1BuyoPSb9UXjbHPrS2yTKWu9rHz2KYLGeqXWCnuCwk4VJmf1TkvLaPdsd21q2sP1d1G55ZPzwRdt",
  "key32": "4kM2DHTcac9kQHUoLLkq6Rtr877rr4wAM1X8vhV6b8fTyYke5fsRKsAEEc82VcAYxBDEAwPdiAFPJwwC9W8gtEgD",
  "key33": "4ygkRa7yR3xDgWce746UNsogXAGkAQ99a7gicC1QhQ45bSyrreTqk9ykCs7xFXVFro83CdPoEwBvdM9nZLAvGZdt",
  "key34": "5UzTekJ4RQcqorCMxjWmM1CRzHwNwEoc7Xw467AjyrcotETSoyHyMKsXjH5oWNzyaKpdJ2f44J1GGujvoSdEBU94",
  "key35": "2ecwXehmHzYeR1Ee1CKD4VDHsLjWepUQXrt9DmLxKQ1z8hbXDN3fdTjMpLxqrLJy2nofXsnFFwLALaQ6PHBQqd5c",
  "key36": "3eUcjcafmQWTYAqZVb8MBGeT9TgDSgWGWouW4jMKp6otYNdcs2Kf2JZvK1j9Ca91PANWFmurw4PTr6xk4PHoGZPb",
  "key37": "pBksv4UMbtrtqjHrYD3H7KgFAP5tXZEkDB9AjcRvoPTs5XEFn7HjzLuUySs7vG51uGY5xYMv15vSR2hH62vp8Nx",
  "key38": "47E1JMa5jYkDpnBgmyjp4DVXmFUFuLjBQHPfN6fuH1SajXmx8Tqm9sYWJ2YGmuwStRsRKKLBjDVNny5SUsB5SdE",
  "key39": "4qYR5W1fVL8ysiPNVaNVRD6nNeu8Nj5ay33WHQQRfZUJUfmgevSFjcn5ivVB7prJjxCuiY8RGrYhxb2XWfgv2r3o",
  "key40": "5qw8EBtjWvXAJ4UFktZ39AonthVmgJHPxX651cPVdKfqjCsWzpXoCYxfHDa6hp2gL1ubpvC8pRguccG6V4qqADCX",
  "key41": "2kvw1fdyeKM4NshHDrXRc28h8zcbQ9kn1pF383qJPw1s5RYkAxRAm3N29HTuDpetC1smoowgHws1noeaWLP5B9rC",
  "key42": "3M45nFoNRgEyDJekLd1mQ95kC2hYXhhgNxFe4mvCCoiKXzSKVGKjVeMsC66jB7PDDDvxC7uAe6hyEfQP2xK3ZT18",
  "key43": "2RrcsaMGRCSezWVfbRf4Y3R26tHYq2gCh2hTVuo37XAY9YTccgRuZH9V7WsFL6snBuQx3NZt6xpA91KYpvzcQ2fN",
  "key44": "FhmhSiVXUBXm7fsGpXRdEtpvyV2njUbWJFpPaR2HxQvkd3rcYKeQYLLPSAWA8GjeGfhLUpF2GAdd63mu7npaQt1",
  "key45": "4ae3UGiVEiSqg1FBWoDr1LWTZh4o8vsRuwBAH7vVDW8F1k6xAw4mtp8wyDDVGcVRTPQg7F6DQofHSci6LNGYpvA1",
  "key46": "3dh62ePSjqm53S6w7cqM8y5gb9uDsktk2EWPVZSm2EszDTqABma9HDmNqpT9zEyS5Qb3tjhYGefW6Mgq8zXsoCFb"
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
