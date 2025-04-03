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
    "39KFWe7zRWSSz4ST81iUiMHaVDN4EW8dcTzA9U9AD983xqEUMTp75MSyjqL6BbQie1bMU7G7GS8Dt58Ca8RRKS8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wBfGFhkHPAUxJBbrDWej52wNZ57N5AjCwCpJjHcmxXg2LshphqYgmy2J2RtMfxngPSK8gMDtETPtCqbzQhTN1na",
  "key1": "3gwF2RsXu2sRFmbFhxgQVyMY63mua2xwvFEekoJm7UujyiMMofbkPUS2XPzBqT8TtHPVMMMzpQCmoJovY3ALhqbC",
  "key2": "5eppidvKauxEkEVSX5cwMTXGMijRuVBUErPuDobYiQghGvMx45ddKj1Jv7EPrrMgzxa3MSqQdZhmQKPXQyqxvxL4",
  "key3": "3wJa8NiUDy99AUZHNk7LFhVYQoY3hyn4Sc3VCNxLo7n1M9iD8yTxueU5HYdKu2DoAEuLgkXUiQWjTjVmtgu1GHPG",
  "key4": "5yQypNvP779A9p54BPtuBR9qnHJ7der5MX9bgx15xUEX5NVPcudocQnSPAe6reH78mJ1h6NdCDdvBHKv3btE7aJu",
  "key5": "3kKcUTFWU7vk3Jyxd6n5vJvthZZq7XLMbFT1dZMfdCShf5f9VFdcf2CpBhb5osQHDpCi4vexDoN6AD7NRSxLcQTQ",
  "key6": "42N6SDT5GfFfXScRbkSBfFoUTjTDmabLquaqnS8TWy9WajngxUCj3DEFiWQ7aJ4tx47ZzGwVb4XocHQvVWxVQCKb",
  "key7": "5ChPDufFxLfLCWEbmFp4AiGocMfo5dF7yn3ezyVSU66EXys7tHJKTamZd1bd4cEWhV5PKQDLJ6Fp6H1UGHrVv6Tg",
  "key8": "667rmXBCULDRVmjT46bjJtzXac8uop3non4v37p9BUeDq37LZEhoW26HgvMwpTGvsD3cazaxQigQAUgRarDzv3RA",
  "key9": "4fB2QNKqjM9MixJmPbeR6fk3UHoxfkFmKSqLvBNatjUJ1mobXBXRATJrD9R1yspdeMr6nCR8ptU312Vx4biNcH4n",
  "key10": "5pPxT3WNhT3GMfdcnxboPCc45oyFYtjNT4S2KqExYKmxqMBzC6AaZyecCdCP1xdhPs9NtFEXMfGbRfUES1nWrQGz",
  "key11": "cXrme2JvsnegG3q64xi6VDyYobB7XZNTYE2a2DJ3UDD4tCqxCJkJGTJqwxtBtWkrxTJDvpVyeeFHatGxC5Rnaq8",
  "key12": "2qEfYc1JK5PEqScpQcEKrLVz2wassoEfa69qZ9W84JyfbKT2wsP57Z6gqV7LwZr6u2ksFxpYiDGvafQxgqyNiPF8",
  "key13": "3ckg2k9EGq7AtGeTteCfauEzmC8F1YULV3b5voKStE1dr5GqJimWxBN7wZ9eG2GvDz85EJjr3xsSZLpQh6UPLaxg",
  "key14": "8T3B3Ke83y6LG9mRdiyXcyjXNR8eyxmSXD8hXW295bxZcV9u7Ups9R4JFVvYRudXepniQAxPMeYFbkBfB2LyFRh",
  "key15": "4z5rr8XvZpEDjUXB1Z13y8Bw8MHr19JbB1hmG4G5hvcawwRfEwW2vtC2F2GwBUo3hMvbHma9mgd8sehaYJbwkwNd",
  "key16": "2BbGqBzGR7sMPG5XjY56WzAJTnwyP6jUVJwKxuaZkG3vggo9iTbSQbxdSKYodJz5v2yry8HHPPbsuhDGhrHPcTko",
  "key17": "2GDbLM2n68bd2XDNVgvA9H1Znyer8my79ym3TdSmFKDGQARpyw88nPV6CRqGC7HJYXCHSyoHmx7vtNzYZNoLpy9q",
  "key18": "5imcBu2AzCAfVJgpPsssshsVrvSurBWNefHjhPmQCVXP9LzLrAXfHdY3KuzjfFGnYq7vBxCTaFqJetaTwFYn3Dcc",
  "key19": "2PB17M4k6dexeWguhn5rinzbjyS1pe5hqUK38DjQD7bCb9YkwHtfCwrpdUMFB1p7k1itMRUpzaKYUraRrGcz6NAQ",
  "key20": "3Te8vDwf8UMjcxqFsx82Pr1H6mUXMKHnsuTcZ4fzdAvvPnLppGHQNSShMZKNAjxQUY83VXNymkLJ92f2y7snaKZT",
  "key21": "47kztdJ8QFUzChZtX7oNYAQkSxYTLaC4dkDtDm5WUAUooGQ8tUXiL2No2e5BtQxupjXPdpnXr87beLND88A342k2",
  "key22": "5xrMtP3GkxP6p4MhyUcm7BbXZVDgqHpZc5uNmccYLG5HDnHBFAeeQZaXMyzyDRSmmVY32Paf3QhhCai6NNM43ovF",
  "key23": "3NErS3Qb66iC3LonVx9sN6Z7u4Ha5Jy1BWQqAssGRCfZz76Brp5a2vAZg1MMfS5dYCVvE84ye6o9CcAUHRNXHuZk",
  "key24": "u7BxXEnjSoky1pb54738qKEPg6Wmi9guLokhY2j2iiX1LNrDUG5rLi5EXXXRpHpHpmPoMqFgmhguw5bHNdwgGtb",
  "key25": "4AKSNq8YgDD4GgWREPyzMAq2MM5MPbjtF7sNb2zuGKkHdTxjpvxjBL2a5aCMN4YtTtq364coqBbfQzrrR5vedewt",
  "key26": "3VqKyocyuB1vTtUMvRgf45ZZp6D1NeX1EscWHgQ5cRKErnLwZtEmkcdy7euvy21Vz5mmqPniZVRgZUumyihVoKsp",
  "key27": "3ZShzPJSStKhinQEawxz59yzKgvQyJvzqchmcuZnNdS1jBiVBG1cHTFMunxahzvjoRG7SNtpBEh1NnZ6xxyYrG2z",
  "key28": "XLJ84ogPtdqsR9Wkpj6gg6rcVRQffDDbF1jPaHk5y1854TjCqWC2QGrQ6rF5sMczGCbMGK28MtowQFP32S8UMPR",
  "key29": "HenpwS1hetFSenWBfptG97F6UJgRKW7r2ocidngFSemEuX7FwvSNTiwc2J9KcJpfvJpoAqTAHmnwsy1osayRguB",
  "key30": "5QR7qebYMSjbS7fKYkWENobSKFVUjfyoa1aSKekNuc7pH9Ptn7XRuiErRaHx2kRYNf2w9XNJsbodGXkwm38QM3Ty",
  "key31": "5n7s76bcZ9w4Px6axSsLt3LyL86YpgbVyGfvwh5hyxh3fy7RtKmUPMqa1SwwEkwaNtsQj5iKFGyLRrnTTCmbBvaV",
  "key32": "2TNY8jcRXYBGs5Mmv4mUKpp158Vnon6Pzjm3WtppNoJoVdtBbNPP5kCpQfx8bcmErerkoUjAwiUEUjQDqys5DdYy",
  "key33": "4uCLFTpuhFotAwj2SiJ9cRk7ReoCX1MbaBJ793FHzcYCfLaPQTHSUYKa3ZJSXanWuvunRY14HZJzxNKJkbTAuQQQ",
  "key34": "3rL79g8zBSq7cjbWswy1AuWKa6hVuM5KAqKxXMpgdiunLnsZQJcXSVeDMUv88KMd4oKJFzKfmZBWHurjwEEEYDQF",
  "key35": "3i8pVDyaNPCJU86spi5H4B7z8KUo6ochmqGYhrjgbD55a3N13C7nbJVsBToRHGZbAyxew2eKU91KnqU3cKQVLLq5",
  "key36": "4VUbBHwcQZSUJZ8TXL9JhstxHptoNaxhdabpL5CYrvJiMQ3DBpbAwZvbyjWeehbfgj1S1AMtGrsiJiy1r9qnE3JU",
  "key37": "4TNUQwGRMf9tgz4rBJ19HgVbNXzgNmxrNKhToSTPBA5hWWwsQNaoBcaifZvAranZ5aXAYQQhGb7YqgLqJr75JZRk",
  "key38": "5hAqu8zKKDnswPAnoCos9muLDAYE54gfAz2YaiXEvCVJr4AoRrzYerGEd5LiMrtkGKppH5toFJKP2etpDVUbZ8zA",
  "key39": "67ChAkRKZPNqTv3M41Woz3UNxqayERZ42rVKaQRfdgXjkcd7QWNzfvAmEjpphWgu8i6JKQWDJvrUJsT7my7rb2VU",
  "key40": "5LdA367LLXcysBj9iHbZi4Luo7s8PAEb4HvTscPMsoJAf29VFYGm4PvNZZUkACQWn44UPbZKiPpFELAh31NkGutt",
  "key41": "5pfAdg6bcj8szo3kpfLnA1w2GLncp2YB5EEqJCPYcCLm4JTHYRjp5rz2VjJ9g1JHQxXsSk3STJDMpnVSbBvDk3gL",
  "key42": "3XScLx8EFv5f7uYRmAAPnUyonx78kvxwQV9d99DrCT7keZyAVrdBWfvKvUePAVq8DLX5i8HHCtppwhiMRgfUqq2H",
  "key43": "4ooTGY6dPVnD5Z2NPyvKHTCFWqsz2XgyRTDHzKpz1A7zdbFwm32hzvKWD7ou74ikZboNM4PBqRiGve4kVBVyxKS",
  "key44": "QXErqey2WXCQSBc5sceEPcyRZQFHgp3bmNdMXg38yhvrLcKuG5FNUsvqqMUnCJb1RZhc1GyJLLZKnmGKfLkwX5Q"
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
