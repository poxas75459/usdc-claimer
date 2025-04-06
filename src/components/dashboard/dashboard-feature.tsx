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
    "2hHAt7uRXwPd6kfNHePk2G8RY1y285Ab2rBMvQ2kEJGXtLfPaDedXkccPpHeZCssQayAkrwDHGe7jzG5f6CdAWo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57fs84GS3T2sZ72toQ35R83qDhVfPTFp52dj9QXVCnAbLYQywbRGgxNX95FhbW6J6CCXiJQkeLodf4GnEeNUsUqs",
  "key1": "4XJ7iqNKhWTtLrq4CNepejwVMMrgUQzu612TPPMp3PQRPGrxEbugqk5rXvChHeRHpr38xdZrTXAR4ddUb28DvxYW",
  "key2": "XtvRQpaGJCEAhsom3JLW2GK5m6gddruDrTHqB7oGAqguWUcyqRFKb95ZcEhvQkrsH3oc4rsY5DKoJ9ww7yGe2bX",
  "key3": "2CpKsEb65sC3wPyuYUtygYkKSKn55vTah2BJopZMxjrEYxCLV2ta5JWHXZDE9TRm1tSA857vCQgt4a96zCkeusi1",
  "key4": "KdyoRFVLD2UwK9TMiKCJbXsSgQ3EaHw4g6VXsEz6WzmxEjuxmFjjWeRj2WxDLXMbdNLm9t8qJ735UU8wvQaPLnX",
  "key5": "61AhNpddB9LNDiG24Pow3fYYae5fMchRTR9Q1wsh5bXEUSm1FUVXZHBymwJXA6vdBrrcXS3enLmRpFYhFr6nZNpJ",
  "key6": "5gZfkHyS8QiXo8EWnU3m8RrKVGVsTDqLa8C3Bo5mj1gnpEsx2wHJodvyrV83v8eQCcCmPo4e2hWV2hmu4qi3tUua",
  "key7": "5SrztmwxrpueStYV61JRC9kDP3PpeR6bQRUhaL14Jka8WkCxtEwYysHkP6m1LJ1R5uT8FJEPp7Kvnuq3L4LY5kR3",
  "key8": "2A2wQifTeZX6H2wCdwtz9XdmjAcVhp9VdrJSMS44QW7wowrNskAwjn3fDvCeHii2xhNrhqTRn9TiegEWwJahHAmR",
  "key9": "5h7muSKv9zUzPm2w4geZVbxx5rf5fBdpmaYYz349Ld4UADgNrJyiGchVqaLVYTzbc9MUvzJ34XgdHSe35dYpMkKo",
  "key10": "4wC9C2rrNErZcKVCvQ2toKPDd9dZJraFYM5NpkWv8Rr4PbsJhtuPB9nRgJia26fpDbTo98CoSbwY1DbCBYyTzmNF",
  "key11": "4RPieFNWNjTjHZ17nvaVPjANcMePCpNVmnTfKb5MtQNZs8emvUVVuf8k8S8PDGZRbaXRL2cSASmjGFbLsHnES5oR",
  "key12": "szjByjbJqCc8ZamkzQUiqLPAP1aCfgq3Fgq2TYTERMs24zELCTtpHfsuqAkF3M3o9GUnuFEvXLfZywbv8nwAxD9",
  "key13": "2WbgzSZL38TFk4i2Ci26CvyhSQe6LhzmXuXPaZfZ8qfkoKbPee8DzfEbRaQzwGR4qP1tyWDda4ocGRhQG56rGPMC",
  "key14": "3ALxFHnHbPNo3CMPdPD652E7YpJTSTZs1wkTHDVvP3cjDniyq2z8c2V9uxi9cwLqBNJ1cR67JQjFYixD7H96vcdC",
  "key15": "5vAjP4j8QFabSbYfAhiZfr7TmKHxkZRGYkTLKTKFWMYqKJov2MdKmSVuUnC3sYdFtvartaH35en7gzTdtbSsiQYj",
  "key16": "3Wf7GZ3cssPZwNv7qXUHNZFF8fd1K5R1j9bbNgM8xaM7hULwHxveXmsx4P2ydg5xUwFUGoMoU6Rg2LN7iTs2VVuh",
  "key17": "5zzqAdNmaq6KCYp3nZMjWdarkmAbVcwqzpdkRhpf1j51igDujsWQyizWxRWgLwPVQKR15Zh6yfYQuGTMtZzNHjz6",
  "key18": "2FGqy4ZLp5qxnYoiytJ2HG5nZbCmkqXuKhHGhwau4fVW9nTRn27JGRmKapuwApq3UepGZDFC1gDo21SkEM1ru68h",
  "key19": "4TcqfNLmxM35bnfFxYg9tdNpdCoyyusTycNbSW7o1fDVQkHZQWo7H43AH7LbdDpLHwgMfHbtfN5LezBfHWTgdVu4",
  "key20": "zibBzh9Wnz7upZHwbLydNx6kU8EZ8gtG5WGCP28jDVaiMDi9DYp6r9swwanJq5kEdcsKyHyKTR1u3CvFR7YziTM",
  "key21": "4kxqD18QWiYRr5XLXaRAACZP3tHXcxuRjnAti9Q66cVc91LfLm2muc3CjThp8BVZEoW79aDjVUWGcvocW9hmZzTS",
  "key22": "3FyK6j4rvE5Y14z86aGZCjPAThPWKdKnRusemDs96zRxkwPy49rt5uzBSrkHFoErxLax73jZfYFTkHYH8wa2Nrty",
  "key23": "3kDqY7w6tZsUk6DRw7AT7PJapxXZqmVBCDG1vtrwLNuPkgr3Dd6Nhych2Z6EhhR1pWz1MgbL2gbxa5MeRN2Ks3QG",
  "key24": "2vAkhTqGx2FP7sSCcsXk2pRyDE6YSmYVvEPQ8iMdum1z9MmvsKUvZkVoJy8W9aVwHUmZcGHeN9Yvz9eSN73kXgoT",
  "key25": "2TAx8471GtqZW2m6jzDNQcjKy3s6XnbUN6iEPHvZW8kXnVdKPcZwqsbC33fBCesgeVG1fHwrjmeK7Pu9gLdCCz4R",
  "key26": "27pvcvErYuFsVq6kNF4vXDf4vTuZ1McFKoWnfccUiksN6rFkonZz3PM61Zm4JjfphKLARdWedRzetqNqbPRikm1v",
  "key27": "N6k9Mz6xhYZMqo9YyfhghitwgDeFLYuWGJHpMvGXuKByz4dXqNNA33k8jcAfRoiBukLisQagnmdrMUD4ZrPp4Bc",
  "key28": "4mBUdHHBGf7qPSHjMVhRgQwHND8fiixxfbr2vDKD9drNfbmibcEALXY7iKwmTcBTQgX5JpdnfenPrTKALs2MQUbf",
  "key29": "dj1FzkmvjKyGKiRQLznYPp2JstUmW3FL1Bbn4Ldqie4JxAA1rppcsCn1qiupuhpMxCds21aw73CmU1jxa1hc1Ua",
  "key30": "5orguVLQCn9oAQPHXifFMy5kzRV1Px8WKRs8tP6xBzGCXyUBRvgcKHqHcu3rdWsosW9cTCZ89k291G9eE36bm8Q8",
  "key31": "28zZJ5AdM2exmAF9peVifgivY8RmEHmmPBtZYQwuTEi9xjUv2bvNhgrtFeKNFvxiJsYj9cdon67z5sCCzN7q1Pny",
  "key32": "5xNTHjRo7Gr1KpsLaDueNp8oVxSNDWMh4ZbdNdfHTVUznZjqovAesPccgS9paj8bnjHSyekcne2M7JBYs4KtBUSP",
  "key33": "qsuy7MQ85A1sojJ8YhYmi92ksNe3Bej2tizbpmVygiisu5JWFDhXLxgEX5t8yZfqCYpk872VRwrYP5ZrMrb9Vit",
  "key34": "5h1WGiuLpmjGbzT5sauXgnLq1cLk95ZERw1zhKaP1eDfW6cGq8nk4B4Rvaiegb1BNKFasK2R1mpqwnxmNmvCrnAx",
  "key35": "56ZNw4iTGHhTKw7UaJB67NZL3re8tnjbmqGC3bvttmeUdSFoFGLDj9azgv5DDq12cganpSVxEoWKWCgs2WmXRpQe",
  "key36": "2z6JkvJ4N4TZ9oNsZPNppPx1Fp45STvAegi2WrUTCX3XJhh7DBk1VqTDin7xy9K2CPVLaHmNyWxUmx7TV5qY3853",
  "key37": "4BNtXqP7pKrQGemH7CyY6huyyMmtVpbioPxTCpBFRdZ5s5PjEzxHULYL36WWNTsT9iZEr4HNTJvtdMnZpoQbtTUX",
  "key38": "23zDQcpHZwfdXtrfoQyzpTyCTeHJrotahragYGNTsyiWFAGANAzqSvhc5rumCpfLhRHVGMHhRh7yGH3Z6fEo72Ki",
  "key39": "2ooNWJgxyXcJt7L6as4fbctDXd39cYL8UHrMDUUk33hpBd1r3GLBi8zUAZAdJ1Z429KCotHgWqfg8TYdagPFMuF6"
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
