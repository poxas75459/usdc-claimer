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
    "4QsF9JHXrkdiCd4pLxCnPLyJjwA5DtteLimxnRe3m9t8CyU46voGhF33zhakHMGzupqXYKJ2nLsWKTnhKR5xXC8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5An1whprqy47LKzeKWoGovTQwLewtcch5Dx97eXtaReqS3wALPLoeffh6pu4N6WjYZXBxBuVVRd2PfBeR7THyrQg",
  "key1": "3pntvWf5FPipugMBEjCSkC9G3H1dSZcbQMpH1zxVYAuyrhtFqFokoAv73UykyKbUgB1RxuERXVB6Y6QamSGqjSyq",
  "key2": "7UFDExqYgxLCmdeCkWuAfk9dvzkyEZnmFWVzpZUZMW22Az37tLJdBf1erHeCBbmu8D6XWWoDY6xbrUuLBHwTQLo",
  "key3": "4X5iaSiZqgLv2XcJ2459ZtqPxx4qWvDcVLiMpUoRT3SPDBe9457At4o9EMdRguc5zRNKoRCTRNUA9sJQtm6bD9SU",
  "key4": "4NoN7knnYwpRCLwvDL5aHyX5TEZ3FS3fpiZ8frt7XJMSHW55k3SrkY8wQuBfoc5SJbLJ7Mq3fjiiGq964aCk9z9b",
  "key5": "2BwnrFtzVhq3sCcSdXX8mN8W3SZNJP2wjtNMib3kbQ9tZt6M6cim6nP2rq72cfPoBqrMteEqBC8Sv8P3wVkbfVGU",
  "key6": "4dAySFRaoMiEpD77ksTBBUsHXst7F6k3TTZKfPC54BaUGATh6fZ2zGwocYHjGxJYuSucAadRBu7BT1HbL8aJRjNi",
  "key7": "2GWaaAjtKMKB5X2DaWjXk1BBwMKUCokDLwb56QscFip6wFECmmfUbMoDAM3oGJJY26NcJAf1Ww6iZ6fmkWuEQd3E",
  "key8": "3HwQEXJkDR2M1M1jFqBvTEs9nhtut1qkBzTM1QzmivhhysvS2ee9BLvu22Z5Aep99iQaNDsp8bRMrNAXuMgZ9LXG",
  "key9": "2me9JFRxy7W6Qwh9oaEhsCWkcpWLYcCW9KdoU8TDPPJKuSCiLkNfWrn9FQekiZsMwmNCiw4pHxsQtMBX867JUG1R",
  "key10": "2EtwNwnWArrhVXuHKNZ4HLehAjUfCy8eSjBLtKjyvPnpvpLwfdJvcxzMheyzZEYTSjx8bZjkJuDVDddK7e3yB8ag",
  "key11": "2nZo65LveW7ZKNSaWEckre2n1MGyeaHo7yvVESTmi8GHanoas7iqi8CL29Yt5opufm21QmCzx4AH9wQAUEAkNTaB",
  "key12": "4CGaAuowQqZtqoBBqh7GfzA7e5jHuVwCQZnw1cKuar83J1vdmqukvSVs753yyDu9JDoDEdwcYTWHt1LrmUAuLj1v",
  "key13": "28bqroHK1CybSD2MCXhnzxFJnyxvDFAUzC7dPAerEqC8ZwZpFSqpvTGxqCDY3GeawM1YVvH8P4dZmai19v9Sf8h5",
  "key14": "58kcd4ZPKbqtohP45eK3WF5VPwX3v7HAiVnNcVRFuN7boa461KqHxZQmVsGdsE2HkusE1yBKHFJGhcXvXtCZCbs4",
  "key15": "97AzcsPW5HbKbAoxK2DAP67fNRemJ563nDV4QexLDHpEo56BbGxBDpByPGphqwoHTZvavaWtq1LJ231tR5iDL6Y",
  "key16": "5dQ1HmW5Ax24bbUg1RvnpYSMJiG2fwPGRHsRN7dbobm5GmX98Uzb2ZMVfnfGKdxrrVC4CFq2K1deJxwzZAeJBu92",
  "key17": "4V6bamssicumZtFMkxhG4M215c7iabRjEZn6ox8rkjiH9dPK9PXYJriXMz2JTAVqEtaomEDhS1V9rdurzGeaL8o9",
  "key18": "nhB8iKHgR28K5Mjc2FmdPL5ZCiSjeNAgF3R4qTxyL3N9zvJ6FQNGFUFGc8f7KnTjVE6VtR2ewAzbeMAvCdj9fnq",
  "key19": "42uVsXizmdbFQdnXJ69zakbP7inaZZpXw22TZiKehJW3FjLci7UzgWHzSnYxMAF16Bg36WsWJDmjZCFpUQ3kHbfi",
  "key20": "2JYuzCS1tCmFYkw3rj5NdukvEne1DkoMCWPf1riqrTjQBWWj8V6e5iWJQPCLmp1bDWU3QaPrXzjFSU3Lf7ZGowxB",
  "key21": "5VqpEe1VDAGcGTQGyLdYqpMTinyGhdsozFNeL5rr4KFCTxLbCzoJXAP3rXBnwMtdhbc3NuRfews9xfg4MVSYpziP",
  "key22": "2TBrRqEuDcfZMXbF8AEkMxgSYdCou4KDENwgLukFTu6vARtjCCL48aUqTtWejgqgNVeh1hhFRoX8ddmdZrhjWtpU",
  "key23": "2HKKoy89w3FtQvYFSDWRKmSRwPH7Eyng7QvciyET7jMoZtn7UD5F3EbRWB5wWVyHnSrdXRDY6c5cW3gcFmuj1s3k",
  "key24": "UXNvAMmBdy86JrWWperK1e9MkMdkm9d19sbFuqXJ7BjytSrd9QtCYyvBJWtCy7ooJvW5vJcm4TvWzyUL2US9JVh",
  "key25": "3r1ZEoZsyj3fzKz3comSMYAGVk22UzSmcr8HpF9fV2ZuEaUxEGtui2eRdAQxESDMygeq647k6pQuymZubArTJxmH",
  "key26": "2kgwFYgThUBcT8PqVrfVHELCfStXCQfGkv4HoXDDumqhWvqrdcYGKEhzkq42yfBbKuU5rhKwPimZKCAELNDoJb66",
  "key27": "4BFmXXY8FgoErLZxPMuTXTNCCeJqUbpc4gbHy2HTezdieBQYdkaDora5XzamDhoxd7MN6QspzahhVVtUbaxTzesC",
  "key28": "5SZGhLYszizYcZBGaPDhZGA7AfEstGPbDex22dXcNmWh3AUrzJpStJLVLwp41cMZqrKjSRURxFoURbDJj41dM6iN",
  "key29": "ArVcwjtxhemdgVAXNi9cAurDzmLWJzuxejd8DdsauRyXhR7ZtfpXVpKyUoC42aRptdcsiUks3MnoCsGM9nuqSjo",
  "key30": "55ELWACWyXioH2Hij6Mg97Bf7TGMJCkBi5SbxgAJxahEdPocPtDrvtWPGepUPdyuGGNHNGfsSq7siYfwKnnGs75V",
  "key31": "55uDTbXDbE7jZRsutMWhV4C622yx793Eb5hkCENFPpK2gRUTg3AnFrWQ5ucYf2uR4Qsov3VK1XsR2eeMDscFpKhu",
  "key32": "4gZQrMZPgpywjGtneZMd9sYjJznjFAoMdTSYnc1jDgA6Xpd24SLCX9SmdxJMoLLSGUa9eKjHz6N7R8rzUtwoePtV",
  "key33": "imPuarBqFVckv3ixyhEZYzx8u874NryYb5moesWKHjWDLhBAc1mzXdwQmk9c5tqZQTMPW2c4Uv87jG7Rt1fLR3h",
  "key34": "PcnjGEs8Rx3AXbQZg4RWRXCKsuacQEguhYt6UJNvmVW1G2bEUVNVeWYMdkztZD8RmAbU12kP3N8QugjNsRiLqc9",
  "key35": "eHGJ6vgxjc6JdN3bdqqKmp9H6UTm3bPKLfUcQr8a5B4GT5GtXa8gaawSTujALRSRmMTX1Jya3pKNoyT9LRTcfxM",
  "key36": "4hRYMcD2pZGXLL8mSyci9m7raCtpGujAAcCjo7UFA2Ea6YYY736N6nWFFv1e53r9SgTheZrdiAQehaDKRPJTeEPL",
  "key37": "dvcwmw858PATZXSYisBExXG3nCjgDyiV4GSKvniiHmzk76pAiPvPe92NL6VBdXL9ST3NgsUGm6yemLBozaSCTdB",
  "key38": "5L9v4K1UFLaBhPFhbQh8cDH9U6rk1ZLsN9eosZ3dBwnL1D563Xfiptc9ZyRvgYhTRpSUgZQarcbSAZHCqnM6DLhG",
  "key39": "5rzBsJ86gZuvrgcSrAy1bnk5s5Tj5uMFh8iUQHwhDqugXRcRqSDrSxxZFdq4cwifZrP3zqDDh4ocdiog3kvxa3QZ",
  "key40": "3C8Gzx69gRnQkrF1Vsenofv8rmafRA3ad94r2v8vKzbBfrVE2nAqYjoy3SG9C5EmQQ13WY5GEvn9NFLAvB2j8Y7e",
  "key41": "4xFGjwPzoWFTwwb6vWNH1a3gE8CVbsgUZzn7FYXkUWFFkhpZMvcoNazrUZ1xFSJhV5GVrRaZmj6S84jH6WLmafs8",
  "key42": "5sNhXUcp3RMC2EyX7qcVFT1qUjUc5YNeXEEFMEreBVqcToBSDYUh84UrA257Mt3wb1rptY97CQRi6ykQVxs94nV9",
  "key43": "2vMUJFzRaa2WKmhPFbs1Fi6geHFn8mGQCoHNYGFpJzf2ND4ezhAuu1F6ZrkDxkLDj2qPDkoYpyFA5ocwYsQTfvam",
  "key44": "3bNvCuFhCNkxJE6fXGsXrCnyVifr8waBxXGYzsSGgw3oNJu9u9rMqVJJyoAKGGkLA1KBa7Jg1f3RJjj1RSmHXUeR",
  "key45": "4YBoGiMzhuEs8qEdGDxdPm7EHyPENYRHDH1yQWxAchZyhVW1NXsX7VPjyD9GWo6CXARGLbDdaiQifEGKAwuHNAFy",
  "key46": "2ektGgGpWseG7r59mrv3azqijnpBT9RZo1a7zC9eW7mWj1r4QvBKXKMiNSTsPvLB9uXPEB3GsAbr2w5iMapfhVpU",
  "key47": "42KbRdFPf2gk3svGaJ214Qn8PWo8D6dhSbp12EAg7W1WWeE5dURztXZR5UCjgoWcHVYvBsNG4fGv6kLkZWigDsjY",
  "key48": "5FWiLnPdJ1h8XJvoQNtLmcc32gG2kZaC7opGAcrQSv9jJK2xwywYPgNxfE93EHrcBNadPFwt8dsX4iQCk5GJAvUH"
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
