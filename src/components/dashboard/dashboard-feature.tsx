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
    "4Mbt7owcnqqhN6YxCxp3TSDAWYSRsFtawUiUrQXYF8oAGwNHGT44bTVa1caSzNieKomojBinExuRptS27MYQs3mH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "566ierg5HSm3Sog5DGoQhM8NjqCtBwkYJmLvmUoNaMcERjy5zgEnbxRjg2M5TiVUSgQv1Hust5cFUnJ3Gpv2bmcQ",
  "key1": "3c2cMYeck645jSnnoCGKufBC9kvsRGcNtv1TG7qmSZP7PGUJmg1JMDBskRWhLNE8AoRwEAF2D5hTypdg2WZY2AnX",
  "key2": "BGwM73Z9tb6CeEAe3K6Xf4hoxuPk9rAo78EkD6NTV3tDQG1drHEK1tPq3eyNi6rptwA9aPauz6ug6EpYPBD1qmZ",
  "key3": "j8b3L6EAy2EBEgcJgCD3xhkqr5qRsJAq1BpubxbGVsG6bPg24mhGLuFpnZVnpnS3DzArdbFayJikXgZJpqBHWxH",
  "key4": "5uJo9wTn3eWkHj8yb9WnunQ4bGQdSLfJ8kPswA6sr96KVLbXM7ohFVuNSYQdi7D3Xfwxjg9wLy66xoVpQud91Rej",
  "key5": "4U9guWHPcjiEKJE8Lw8YmkhC8VhJm5BdwLDjCmwezGUuryKKG1TKQEFqkCMnsQLAnuGY9iHixHir21icm6gAzJXT",
  "key6": "4coMFvFUuT2kUiWhRCTmtzax1kWevHUoRfS4Nq1Y1jRfTXXQhpB2BF1BdGr27PadE26EKQSxWLcfrEyb5zWyVPWt",
  "key7": "3x1HDKSF152HT17o3eQMqBtuVEwnvRyiHdLbgkn2nrS1rt4NchBGzRQYTyANzGjQXnL1YsWVW8cdzxLpkbFGzk9W",
  "key8": "65Ta21rVeNy8ht1o2yy9cN4qwXr6iK1DxBZVF53Ls7h3XcvpLVajrWpVt2e9DorM69mD8FDXnAy6LGGk1srX6BMJ",
  "key9": "4uHMaHnW5nAjfY21UC2WrhpyMJhN6teEwpcJu7wAKaAweto4ADYZ4jnKhs6KNXCCZ3FUt5SjmBxADFC87k86U5RU",
  "key10": "28uFVmi89qmHAiJLf6feE9UmNDPQfMoLUHnzms6r5UmV5vttBoeKRtAwzW1ebhTvXDCV5s9gDZLP3H4vyDnUieCY",
  "key11": "3T4QFnKt6As9i7srtYuXdpaKAVgiMovpnbxnZ1XRv9cfRx6ySQoD8JxBotRWJprAHKLU1WcoASz9SQNNfzU89sL6",
  "key12": "2cD5v9chAwiBYtvPdi9UwCpVPkGkK1X2hRJWtxFiSFnZXnQi3J23D4fy5qvv5gyCwzTeQBzLeT55iVnuBJP3Xs99",
  "key13": "5KRuKnDKZhJxyb7uVcUSKRxA9torQiFyqHaMWPqU5aRBXWctHhhuACkR11LK24Xv282vjU5FCN5kPQWhLkH7x6xy",
  "key14": "2NTA6PTBvV2tKuZvEj7cMNoGbwwQky9ygZGu2EcWxoswkmTTNbsRAFs8GZiNn9wdTPpPz8jUZ1Z4Lt9kZee4sPd6",
  "key15": "4wcCdaF2X4gtouSUKa2hVyqBWmMp6uwN5YWoWkAEYKFoVqRJWm2SkU3DRSA7EfATkRZoYqNmmymCycc7MRe7f96M",
  "key16": "zRCewx6sHq6GEjHo9qt5sD4yqq51oJm2iwTpY5HQzQfBTfeTe6xjkK31eQRK9BcD9DqfkSjKVxSe4cAg1rrkf6p",
  "key17": "4d8t6ZrJLkWtvQ4RnMVtGoAbThF4c1ZQ49mmpCte1PZipdZfMPDWyW1FuVKTZTFYeWU9n5VJhV2HT9Ei9WJWSrdT",
  "key18": "3tGizm22WRo9zo4WvEfq48mnxBYRZZKnCsEBY12zAQ2ZqknLhXQeDCJTiqR9WbuDJfAmHVwsmc51GYbc8Bqr6R1G",
  "key19": "3qrkPErVHD1NChjgbhHJLYeuYZxDqnqyZLcacoT5mz6wnCXJCv4ck7njAKobHkfUwsYY8vGAVEPTCkaQRF8GjmuL",
  "key20": "5fAzjxWaTF8xRLosgQBDzMV9SM3nWctw5T7fgDegV3KHuLv5XC8WZ8wWBfjtzTMFWwLjbShntvcYuVKGqDJ83k8i",
  "key21": "4VmWVqjSbBDWz3gtbf7jamCofEDRqh4BtpEn1cR5Qakd5wdLa6SkCQN5zA4yipvestpwYq1RTUBXqpyW4CyJ74B2",
  "key22": "BEg7r2QHNSsuYjcaKEL2oFRc2DzH1xzkMKQC2suVtCzsY8RwEokBhfSrsYoZDuunp64ZcbCiWpBc5sJXFFkEcXT",
  "key23": "82f5PRKqYDVSdEKYsjqaPX9NoAYG98kKtgJjdEeWHa528ScZG8aHWJcczwn9nnZcfjhYqNUexxkN1MALif1BEXg",
  "key24": "2h76mEtQzuFdh312msXGRvi3mWCWNmhSqdqRmZykU2t5ga8Pq98b6DY71BL9GHBHUhnw9xhUcoTPb5oQHigg8buY",
  "key25": "3j4SBJX3nAp2uQqrqVdfr1nK183AESjYbtNDgSCc2SaRcfRoyWVEWgyz5GdUtm1h6d878JAqfrKBNyqk5WrdBbEG",
  "key26": "2iiBZsKyB8vStHqrC28ny41HHyoTFgqfGL98W4k3bzNeM4sYz5HrRXpQ8QoBC7DpzhCJV4um9NxXDhaC9Vj2dA9w",
  "key27": "4G4tSUpLBbtp5bcGyxqaCTzqKdrpwRSQ9jzjrPHNchkSNW3Zez82GRS8eWcsscbrCi3Aje3tuW9GWvmd5TKdALKY",
  "key28": "3qZh2hMLR2MgkN8upHd1vNpALYgnU5wTRjbra7zjb12MwwrYUiyMLArh3pPAYNoz8w9TqHAVscmcBiSFFNwTMRY7",
  "key29": "2AheibFjZ5LxhPpaQqDPjXR4AoaLLE4j6QP99Ds1Ene8YqXGRVW2eudwHNFfJ6wpjYYnUV8E1UwJMKLDzDvTy7ir",
  "key30": "2qQuyJyNqbnVdvmEpjpwifNVwu2TJEcsN68pWAVngVeuRPcqK7WfsJDjmRV2eaBzKWU6yzwyAXmXMarefkL8uaN8",
  "key31": "omsjtDS6foLKtTscGUpcz9iir4XCVvrQ32GNdPniqXMD7mWAkD4KbP8uJFr9unddYqMMGasfGB9wwxrS1PktLAx",
  "key32": "4NpnXoAffAfbSqLSq8eeWAwXEpdq9Vh4cVFBtRFYPZ4UvHsVKLohMi85s8uiDGyc4jD7fK3mpQUfYSyEi2rQPRbr",
  "key33": "2YaPnmidYBDeSSXjg6oeMrQZLFnupvddxNRZYGHsHL1hEpn58MmCm8csjjyCpKGbzgZ9EakvRrhsiwDkMKqf5ECP",
  "key34": "48ysDQA5XQf3wg85hQPozYqXFcMBYWEfzm5GR2AdQTMsHxtM5cgC5Q1S6toThsJNAeemsCHUsHJC1fqguEPWSYwo",
  "key35": "2J2XCCdENMPUtYBKHWqM8DgVjW5zUi1NBvqnb4ap9ektVxeAwhAsxQGqvmDjUw9wuRwRtpCKQ2EXNAJtDnXSLs8R",
  "key36": "4HEF5JshHxvn6Dr2osAySjbwkHuw6kajaVnvxmxCK6mKduFYysfukXrbvS7pLRUB8rW8rQsMzVzQA4mhTT48cWpa",
  "key37": "27o9wQxU3V5svtENdusREzDLHN6Tto5yjU9HtL5gskgrs3hcCHLnECSU82Mpttugaf5GCGMerXTewqzNtCyhYMrj",
  "key38": "Chxkbv7w2aAV45iSTkivddAXyUCTgmiJymiQ8ipVxG5V6hCBM9EnoQQFy9pFN37qdarCejygsBRpHSzWyyn8zra",
  "key39": "2W6uL32pUdSvvYrcuAo5vY211BdGXmxB1sPusR8oN437dRf5jobWuLVgCqpjXeKxWSqxod9ZagQfTDydEXGvtz58"
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
