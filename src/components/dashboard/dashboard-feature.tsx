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
    "39391MvaQh6ZW2CVxuMuK2GMLyE4aq9UKwTdDa9YpgCbakYtEhFSxsjL8Xpt1cmHg2EvQzKNZooays1eWANqZcJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N1ZTmrhV8yg7nionxqF9bvtKqdVW4RLhnMSsR2bBfc1c63bfRdJn3SNyyvxmQTRqJuEonxd1pr7YETuxizeV5LQ",
  "key1": "4cfqgaae7TP1hjhWBRYF61m4C3HLWrLV11u3ucpBer9FxAA1dsTaW68VFdg3aFj4iPTqM1ZLZsKSz2Py12jSKuhi",
  "key2": "4mc3TEMTjRb6mkupdaDcKdMgS8o8GAkdcoJst3iTrNQDgL9uYwj18jpy91mFa5TstnTgrb9HLNJsm3D2PRnLRsWk",
  "key3": "3vdt7sP49ChtH4VJ2KT1LmzKyv1SJR45zU7roguAGm7rdcyCb2rk2MKWcHq6FwTh9Qi5bnN5cLKJEKSvPVunbvAX",
  "key4": "Su4xKxNSbrXTGz1TDSyQdC27U18TsifwebRunAykPzJbFS6cUTTjDhxFZZir3ELWGAa6aYcZwFuXWh128ZekvLB",
  "key5": "V2Cv8yHXhimyoifWMG7YM7kPG2FDzW6bGKDX4KwdadUnDY7HSamuGweoU7Wb8ZBaLqN1TBJVK9r8YsRuS28pcc1",
  "key6": "2YkQPTR5pVVQ9KR95CVdrzTnFyBrKeKHQKYBRVfSjUwEM1BkW68VhbarsmGJvXHc8XAA2V2dYnicRBjFKcJ6yXpN",
  "key7": "3F3WFC8Rcr6AJPR7YA1dbSZBPCek9MMC7rGWw3PQpFzmAQ5F78T7gcoQrXChMZ334DSgjHRz4XekSe6YJ1kaq1Pv",
  "key8": "64dLBWzbey3TokKiKnr9xCrgvSGnZ52dJqSkrPNHxxS3F6kzRoopGav7WuRLbEEdAEy1krYfXP4DT1GYP4EZHjUn",
  "key9": "3CoK7ZoDXczhRmXrBmjioVPJQpvdXeUikPmJbgXbLDUTVaKAGqEnDduGw2mW6q8R6BcJnsQ16MTN6bGFUs9sXAdA",
  "key10": "31DP8BVoJcfjqyWaqYH7oWWoWBNQ1vPwixPFp7sW7W3CMmGwX7Y8zsDD6hvCNerHis4LmxbsAkrXHD8ZiQR8jzY6",
  "key11": "3bQkQnwZBQ4D2zUTmEt4yVQzF1U89oT8wz72EnwoK378GWRyup9tCjQRCzxZ5npXY2XWNcAWDiWNVWLy497PmDaz",
  "key12": "5uj1S2ZwS5k81uF6eLtKxpb6T8MtK1wLFxMhA1dNMALUUiPnejKbL8xYCSHYoAMphML1MnuhttpnQC71NFpPbj6J",
  "key13": "pNKKsGXo67YTxoejfcE11NgVdAXCP3tXTM7YRThSPkT1eKbkoL1wGZ62hNuMnPxzspNeW6nX9pBePHePWmNo8gi",
  "key14": "mWub5hipTTb9v9GDttPKqiG8ds67EFcRyS1sci4F1SFKCLoahGZYVsGxyY26fEcYEqctKXFF3v67EA9WBUqyfRr",
  "key15": "2ZdPSUuyAfXkniy9YgroJkjo8e87NViwpeTYKYZsdHLGkrkKTKpTgajbV6D9LQ6z7tGC3QMmaUQca2RMWUCPhmPu",
  "key16": "3dsATV3KZVkjd9aUcDHu5fTjB4VnDZpy2BVpChkRmkQWnkS5K3jjmm6Ffmrszvv9DpsXScUftbWo1wkfy8Gd27jv",
  "key17": "4ybsFUHgTbFTQfUKoKCd6356jwAzbMLvqCoasWRcSMEFNgvwJvbQ9q8wJPkfHY3Qxx2Fmq1q5ahHmz5wSFthmuK",
  "key18": "5PZ88seAtiYFL6LjryT9GjsSj44YWeM6qG48Ds8Y1xmjxbBSVrHko6FCN3aXXceX8GeEyscmWPkDu7GVHr5yURn5",
  "key19": "4jHEaZyUQgGdBRqvdVnj7kbCLS4M6qzu8uGacNGQtt4pRdnYHW1wHZuWcNyYiSMo4adTrvPq1dmjQDmFG4ejgMC8",
  "key20": "386vZfEp5V7CWQqXtKRM6SCVu6fF9LSY9P9t5NF31mvV1K4sHsbj5y788RyscoutuhTA9kSaJJHYWZLQ9wA1Jb71",
  "key21": "B9yUG3yy3KgjXRoFrWGq2YtrAHiKT8YbrPdK5S5pp48Sprja2yRraLNLwCU2VQ3BSAujfV56EVFptrbr9YMcuNt",
  "key22": "54z6Map6aAgU8efSS7WzrbmEY6w2zQHgYPHJ2J3JSnmv8NQ9UKtwoqycCgTCPdBgJEUw8yyAMruBtjEccwcQEAyj",
  "key23": "2uW5FHStnbMoPhHU3yw57GhyuTD8vjbMQBepkbSN1DJ4GCCcKoPpbmqRidqFPsh1FCnRqaKm7p2WLBheuc8zj1DV",
  "key24": "4S67sUhk5o7DavmzDT4KDPseKWn5CsRkuoKTNciEMWAQrBMY25j9EEbBCRfvLaRErL79nfkdTN7gGq3daimkncQB",
  "key25": "2V4BwUqaCmBjokeMbwgo3D7YpZZTTCHmmad1Pwo4Nks4JphWpkvaUCMnpXuSeL6kSHi4RpvQh2T2bKJ8kTMqcTfr",
  "key26": "32oTcwfdiPR2A5pLks5CuoeVV9Rxap6WHTx5vRizNyXaafcTwmkTi2xGqRcx79zBmcbaWjGCTS6oQMFCq49A6pDi",
  "key27": "3LDWjeSDE1o1JMeRkQkGwX85hVcU3azFw6gTgWymcUAuayG6aeb53MLFpyz1qhwQBfDokxPNoTb7N7PCLvR27AzH"
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
