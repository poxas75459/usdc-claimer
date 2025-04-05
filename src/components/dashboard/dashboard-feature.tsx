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
    "hfzN1BLX59VsPSDmG7B7VMW7QN6ifq9XsfVeT2T1XGxHHESiZoqpmyLbqWwDGQqhU5phHSPskuKJp4xWgRJnnZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FW6VfViL8g12QCiiy5J6VaqTfVVtYkKCCVhBqSoC12R2RsPCWcX1YosSRN7ZW2VMmEax2pUXFKuAN4XSpiW5jTL",
  "key1": "TKVjpRngoJF76g3nCL4yXvWBGESmZb1ucM1dpYfT4QUK7m4MtMfrwLePGENvp95mCm422S1bVyoep1GR1wp5gB8",
  "key2": "4ppM4wTK4A4jfu3yJDCnCy12SdrwtuLB2aCY1rQcSjur1XbTocJakyCRYooMUAFfMP3SgMG37riKeoZNjS3JehAK",
  "key3": "4876s6raDiaDQTFEtBL4RAdQfBe3diXZVfW9xmkNH3TVJzx6QGSF5VgCpPXafYmDnmfgeDsv5ZtuPxdYDdDrPdbF",
  "key4": "54Nvu12vaniUqqHyrkboVsbmPN6SxbEnkNWM2zqxoEuuSZgPBw35mKykPNewfTwa11a4ccihrtrFxdbHDVJsoftV",
  "key5": "4FdbzvQqBKAhvtVSFCwESd97rLBf2hEZNuNH9m2TjEMUJjmjsoPQXg3FPqNDHkcGQ1tG8pnZ6HjeUt9hiV3uwyxL",
  "key6": "5Mg8VLSu2xdyaZyRQJngmtzMLWNmW22YzkpS12Xcb2HGepmmPSzzvZR9CY6XQq2zRZSKkDT9VvwRKvn1vMxBNDa",
  "key7": "3eRP3ohxHXChLGW2ys1yArHU8tgMbpUQFXnP5CM4h4VFnN6bjSgnxLpJ9RW6RNAwSMkPunGtbSHE5ne3xXHDssCZ",
  "key8": "3p7B2nGgBR1d7dwEB38HumRET8z1nyHtaYw7AYk88bn2FAFmUYWbueZNw6KYA6yaKJmCtwGcgk2Brpm579Q5xHxx",
  "key9": "G65yWPMUpkUZJXnwqGU3VD78gzaexMJ54xpG5gbripbAhr9TeoZf7ZR4DNAwobkLELmLYEf4ajWWup1Du44rsA2",
  "key10": "4bVaPeUcc5LVUB3BTC2veCbWXGYtiokZppqynC6Kk9U6dpg6Ch5Bbvb42RueVX1Ec3PnJG2Q1QoARGSJ7D2ENgTV",
  "key11": "2QqfRgLxZUzCTDzaFtW6NHxBSCtrv5N5JqTe6G4kLvqP379Xi1cHx3QCCVH4H8tPguHiinsmGGZB7YQnae7guZ8i",
  "key12": "YYvKPDmXQNyFXk9uSCPt6H8aE4SV5YQtRnm3b8bugePz3wNW7BgrqeTKizdtuyUq9C8J1WXzPVsHRfZHzgQYgJd",
  "key13": "3FJarSMwQNM1weCMrgGuJQBo3srs85RecXs6mataPDDhPQ65sf3LhKpDDqEvihjn553BQuKLgRvLn6WjgNoHkUuP",
  "key14": "2RLcKaBu9K1bR6as19XFuunCDJ3ypdmXjwTBE3Q6be4hsnxbJqMSrnzcUgueShPmUpWn8RTKWeazBsx3eiwUxxDm",
  "key15": "526F4RvEQESWuTq7nRuxSNqcZNrc1BeiWpQra3FdjCNN3MrjMU5J9MfgUaRu9ctnZdLG9qXcjLjtUSLANRMs5BBs",
  "key16": "215edyYLQPrjU58iqSnnUW6e8Vz3tCMFJz7X1DDZp9kp88YnZkRu9SuC74DXg5nT5VdyG82efusjRG15erp2E9Q8",
  "key17": "4CRTz9CqmCQeZbSmsMGuZDSkPSH2qZXALx9vXqEk7s6yzQyK7EhRdump2ewja5cBTNyFzF34SMxonftm4vfDe97m",
  "key18": "4CRrb6S64zFze6cHqewL7uU2Wyz8eeAM5Z5HpDP7aQb55YauLuTZjvSRtF3jhpFFSvJ3shdPyWoYkjZ92jK3JZNr",
  "key19": "3pBhCKjyqnGJM8RPU9GXsMkETD6dqmxQvMGEgMBxvXzduzeL4T3pv991PV4BrRBPZUVaa7z1SZgCQcXSfciTWB6n",
  "key20": "9aRn676mG4GgX1FLL4UBhqiZtSuQR1KAxT1Q3FJq2n7GzYGKA5fLC2eR85uGxH9uaSPZFDYZywrGqGjx36MnuBd",
  "key21": "4N7PNjN4yAqsDQ7CUY5YYnN7nHZk6vnSyrWPtXTszurJFKLEz5byCLGF5WtWvEdgsHBMdGDSFYGRSdYzEPhpJegh",
  "key22": "21ZG7VRwxFG2SnuxQRWdB3aTPZ3NAGSySg3MV7vje2fLtc3NrTwpna3AWXtN4zszsfRtMNssgjBGcBPHU8N7Qp6B",
  "key23": "3mgcxF4F6wvoDyCVt3wMivswgfs3V4fgp8QuN5582z9Hqrzcz16oxjn7CgrWhLrW27ijias5iZAcd6u6twKN6eNK",
  "key24": "RXFGAP3LrW4J18t5QWjVUgnJ4PXE72ZiLiuWNv5c24Ekfx4AYyPCxQccdCMdponG5fUu6weTDEyGzUaf5poF3Sf",
  "key25": "2W4mWSW7gHKmcd1n1kngDHqkikvWGMeqMCfxDC8avGexnhjKkpHfi6CWda44JYdXxmimsYrXmqSm7gErm4Jmvo9j",
  "key26": "2hqEPWUm8edbzjvdLgguZoYDDv1jeqBQVKykG4fTrpyLAbUtLGZhQVWcEinn4czkJdHVNkinu44WsS5wkfiK1k1R",
  "key27": "36Qirid8KhFFQwGSZRpvqGbaRL9N2MjtRK2XAwV17GrMeV2rkscpMLcQxad4KE3TXpjCjxnu1SqFmarurdGoUWui",
  "key28": "2KjBfGmHsBPmkh3FCeqSwWakVvp99Pguqp2pRo7cLYgZ6ijBrWekvw4hpaXnYVpTM7szkvFhFeGqjsbuszwDctth",
  "key29": "45w1SLEGKqLmsJjqHmtauzDCQPFHwyBsohMm1tZxxViXhocZTxaXei1VsQtVbbL9L7qpaAnX3ZSG2c6VNx8TGeay",
  "key30": "2smGZPWc7Rb14R8tetg1b9v9cZ3BZRNbzr1BStrtxRSGhbQ3S1Fo1dzKk1AbbWhqZbwRBcS4w5j91oW8bYJxSXxk",
  "key31": "384Yt8oJwneFVD7rXNyakvQo7Jg3Cbm7ZhvvrQT3d67akXrfkm6o5MGZhBFrcRVGz1vL5WsvXzUf6eCeBGQhKE5J",
  "key32": "obwbUH77AKwRx1cEgnYGVB3brkuSwtmUb2At2ovyp9A5rpXd17Pdy9aKiYVAJexsFhpfN1SqQMe84KWJ8d7YA7v",
  "key33": "81uKrCGAtqMMQRWM1LYLXPBHXgqTNHRJhe8AvbZvfSxZhbfUMMVbPDusJ3zF6geWE6JmVKx8A13V9BKopkD9Bxu",
  "key34": "5syxoTbxvAX7D8qpsNX6yBMzgsyY8nAqCaie3ou5HkWBJJAboBDFfFkM3K9hX87rb46UeyiHgGKeyh5momccj1cu",
  "key35": "4Ht2Vt6F3Pmow3rwZ83Er3mCBsNqD9br8Uix53GV5sbQtf3UK33HRr9hRNgNuFvrUs9j3NYkH5WANR6bhdjKrLN4",
  "key36": "5mZUXZq8jvEUpWEyyUX7CntiuydRKxJHJRP8CdB4JRJwasHsrgFkrEQtkcru8bJRg1Z7WdTzZDuw9bZ9VJnjH16C",
  "key37": "52TmgDTQtkzYySFLUDMqpmBTa7q4VnMWe8ypuzuHAH3btLiNPj8TSRN2UDVknKUJsTE7aRWosi1AELKNjC2LQdC9",
  "key38": "3hM5ruqJ9gjnMfkb39PaUYgBNDqmVwhvHnLidr5rbyPx4FiXULD5QK9HVCepjCi4rY6Z7iMRiGWcTtenPkRUUz1W",
  "key39": "5FY95DctFZiyrfNWKAdnRUrC8w4oS2Zdn5G19SgZVbaickDKJDL7EeTYsbkLfjTQfY6cSJNNDVHFNUtKgQwKgVYW",
  "key40": "5VYZ2pP9EisAZr1D3PzVuft1oJHVY3xwN5Kumvd6unmUv2MRJ4dQ8LPQzTQpAAPgRfDxMdxJMoWNqqj8vJua2y11",
  "key41": "2w2tdneHXJ964etJ5SUENAFgkgogyiNhenVY9XRxEm3tZHUg5L948of9JWSvoY85gz3613Fm98hWog6qtXxUtNp",
  "key42": "5E1aYKQ6EnxXbs4cJsdm3euoRxDv7Ezo8csoU7ULRcwfrXEUmXHCiJv1NmDoKCXxWY8pJ797rokK6Qy3AmqTq8js",
  "key43": "3TF261CfgnKr2tMB5K392FuqohLTTgAXTXVbX79LMRxSVTbAyzqkf6nnExEppCsLmLXCTaJmTGTkK9v5szwe6dbs",
  "key44": "hXu3RGTEXNwKuk68EVDN149fEajjjnyDJfSX4yZhBbCjCwNLLnbChgB8BVMsRiVUQudbd2x7iZEfwPdxKxKnLb5",
  "key45": "61nPdDzk5dcfUzrxb1iTMTxBqNjniQcZiJ6aPeQRNgwNhbF2gXc5UHBBmLY9XXGQsM3ukbkBRCYatqvwoMwadd3U",
  "key46": "4NH9RWS5LALRajp39WVZcbequeoLD61x6YLiakR3Ad6NSo1CENmixZJNfBsJPe6fjqthAd5SyLm6MyjveeZWZUqM"
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
