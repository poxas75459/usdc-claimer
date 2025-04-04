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
    "5WtPAf9m6jW7CJs3RLXdpf5VchmqbvWNcemdKt14EfJW7eHkz2k6ttCES2HgBKsdJi9JUgM5DLBAd76ptkkvo2eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Y2Ri5ARxRQyqmjYgRXjxCvXDoWfHPZXxuAmjGEtVAeMngc4nwDE4p8Rybu4gWsaDwazqJRRJpomutn85onWPZw",
  "key1": "4KwCdactAyfa3CqZJt5PsdzZDtkiu1tyDkBJb6bs8uUAmArDCSDWKjcm9a3sCnxFhamh4H4PpRL8Uun5UceapdnG",
  "key2": "3SPU8eoLEpMdHCdAt5taR9rd8F9nAzce71PbzBUV4sSNzNPojEu4gTiGXoTiANZa4k2SfJUZq3QueQmCqNWgxs93",
  "key3": "34AquAHfkXixxwph54QfdGQHWnVHoZWWWwZFBX5AYwkLimdPGdmjswR3sdw77tYZaXJ2RsXyEFtJxXKpanZZMX7z",
  "key4": "YbPJFC6F5zgSKYXY9XiKkq5wuRE2x7P9pQ5zkKSv58KKBLopzFdVHXF6cPYdhfsKMfQSjpMbH23hqu5HCG8JLAF",
  "key5": "4nwr21yY8YtA6MDtpBCvcw93q212FGGVoxutx4nJQGsaVJN8xb94ka5MVhoXxbH3taDSfAAj5Wo1qoB2t3WTLJuY",
  "key6": "5sJ8uJzopBY2kaQ14UdBWM9n3GMyBRRRtAHPUub9rg2VMehS4k6tzztoR9ed45zYDSCraspkJTuHYYVjm9rkrWaF",
  "key7": "5MAoBRWoYQEgFhu1o4nBKVoe7HnxNpFbPVvimbU2uMvjce9q7mTU3vM11kKp5QYYS5j1qPGtn31i9skKNfGUwj2Z",
  "key8": "Lud7EHSERPmzazispuao1SDQ84TCP2KFSa6fSQ4BBZhN3LBhJ34vcjg1cj4qjtsziziR8uGmZ9DPTwo5aaQ5ZPm",
  "key9": "3dp5RXot8ejRYzVV7BiVT7g7moB4bNizH1q5VxnRs4MgUgvMWNGpBW3cfxh7bDt2mmW4bm31eJPAH371mcAxnxjj",
  "key10": "65rNtHpKpMZYEnkwDAvWwNNWWuWgmHf9FWH8Ye5tjh3DYK7RLzLdfjUW781RFAQHEiZEy3D3LHy8qyJsP6jFfbtJ",
  "key11": "4p14Ctck5MNG3jdHfpfA6Eyb9MJ9Gd2gMh9HAHfKM3nM3T7oNrL6Au25AwpHFhyL998QhnDw6Ry1ystPWCAo3rZK",
  "key12": "5KoT7sMTokJBfoW4o7Hp9h1S73vwuTbjqZW4VqCxN51pwf95wFaPJgnBRyABNCTJj4UujiZiZF9s2YsKzrRAm9HF",
  "key13": "3H7oY632YLHh5us32J1NprQY95LgD7nugevCMrrQEBESUCgpbKuFVWBAry3XqcUafRnw2CL12xeAEpiKjhYpgZhU",
  "key14": "9KFU2LYiJfKc8jFxQW3jcFAnX5vKw3FHx56zxb9NZ6yLWPtzct6Ug8S9qRpfyLx8yuE7owJrkNTFFGUN7fYtv5G",
  "key15": "38VUd5ecwXyp2qkZt8dtNLHJhydAgeh61emidrzhTo3qTN9fqJyV9c9gfbCgVkPugPWgihq7SmrW2SfbKCiGQCgo",
  "key16": "3smH4s7JewwmZGWxgMwWimsvunG6iKaqWnEXtjtm2akMWZ7Zobj3i9wMMBBdFDJt9TvxEuRNvZnwN3hTvj1pj1Zj",
  "key17": "49MnizZZMrXsbfWo8djkGsrUna5WNC6RmjQmZbdfN4dQkQzXkamSfoSZ261mibUuwoMLJAz6Atw5kw83yEpBvSMs",
  "key18": "43DTtKRXcNbxWb17BYRSfr375z7kRGFX1ThbdzGDvpMXEREKbwRmWthYz1oVHwzvhQbuU13fxofN39TREM441fWS",
  "key19": "21nCyjSkTuMhiBsYUWK1oaLUHNH3YxYs4Lbq8V6tb1Frw9DSQ9uG1misGYAR7AxaF2j14AgRCnVtrPkx52NnaGAT",
  "key20": "666ykHuxBZXLYDN9x2Qq825qSiLXjXXFLDM5YYYXjjzBeppXyBGNRPYyeLPP1rY5zEeYXw7XoYQKztYs12jhg8cz",
  "key21": "5MzXcik65kwpYpQnoaEqVfHSk2q9ZjE6UiibfJw8F1wFC8iZSjsn6GSje4yivXVC6kzqwKsN2GqjXVQ2oDQjeSjC",
  "key22": "5QKGPzE4guMKkWghyhLBCLvqLq8eyaH9dzXp5G3RfYxmKB8VUBzYbU5RLhZhkie4A21uycDufQUwfCEcaWSSk3QT",
  "key23": "3RNuwLWWbg8QddsxWmSd2XfJZbmSwtQYVEpxRtSLTvMGzSnkkU6W2fRdAbcVxxPgtNchvmAGZjXNxQapqgwaskre",
  "key24": "4qeFFCZPJt6HJAfhKU4f3oqeYhV5aZvKf87x4AGFTSUVTQP16JDPwcQrqznHuyuE1bWzaVkJRX59Ke6YLfDzZPXJ",
  "key25": "4ujvVDyuJi2PaGRtopTjvCveiiPhaaCcka5o9WBdwAPpZAyFb6CYvFYF1EZQaqzXLeu2BiuzkuocWfgFyPeaT5Lf",
  "key26": "33QzfriQJ3LC5571PLSFftpgN88DYpEJHWFwdhM2ct6LQNNjJsbg5jZG714zzR3ZjQoUNoi1WtZvjQPUvUrx62RL",
  "key27": "2q4QVa4h5HmdN438NatTobESGFSGGpFFhiXbetmU8dwFUNGtiR4KPZNbJGEjce3Tb5KHmSykBeqaSYPkN2XdcedA",
  "key28": "NgtwdhbBkEk9M9Fc3iXX7qVSjAnrDhM66ttLV3JKkiN1xzRzX3kPehSndH4cCXQdt7ZiG61CK1b4xj8NHxKoSvm",
  "key29": "JjFBAy1MoEVW9wLmUSo5ZRTE7LhCt2kmgNoMtLyskGNpC6BbzAmeCvhZNFEYDqRpKXa83hZTsQKAdgcjsXmafuD",
  "key30": "2qfjg3PARoXvYvTH9U8hfYWqR4VcDhTthrJkRZ1LopC9H2Af8twma7idur4eXGgJ5GgYXgbnUnapLxum6JkNjLgp",
  "key31": "52Jf8Dnp7jVyi4nFqqraEuq8AXXPLE8qE55zeVMLR6LqbpmGHPBy8FsXgMB5Hh54udwZbSrpgZA9HbwZEeA7G1mt",
  "key32": "2dMc1XSkL7M5fnFRV5jZ1ijhGXKaPNaapc8xFWw5TwksvCA5roTNSUEbtLaUzfeCm1NQTgFJ7aamk7BcGF8SPsHD",
  "key33": "5hpPMbsaCTMqTs5hxFuyUj3m7i4yctYqPxNKZx2WMZcz1F2tickk5gDyTvh1YALrgr9nzRTH5WL4GQKfi4WkuEgy",
  "key34": "3rHdpMUKmgfPatys1yUw1fibw6Y3J5ax284xrs3Bf69PUd4ydii1DQYKU5rTi9TYNLtD1VJocMa2TZuJ5ABRH6D2",
  "key35": "xbk2xY8GJzgepGJBTmtP7N3Q5SdEuYKgbEwa11Q1dhS5whKB21FiiufbbQmQmzhbGnvVABCsWE3DWhsG22fEU9H",
  "key36": "5xmHWexe31YbKxJyr1Vyy1gYuG4fBkZx81vRtqyrHbYscGBtqBAwm2kHqUY1wMKBWzaXUmFuUH192TvBGq3RCGbB",
  "key37": "AwKxYRx5eZE9i8aWww7g8cro9K6HuhEbjZhxwAnevGAJK2WoTQHHNwZN6bFwmABzmfDtaFB6WLQe7qcju4pKNse"
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
