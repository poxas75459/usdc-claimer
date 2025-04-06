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
    "6L8qRH4QirgajfxL6mg5tsy8ue8d5FgML1WgvNrBVhyL8y4Wh1qUmSa2EXLdBLEyaWdGgZkcYTWELDQpFxW9Kks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ALAU6VeYUqKXaNF9fifj38HQfvaB6XYLFrUkoQzhjMgQgqWVMFccQLGAFG7d5nJfkEZDb4vCPnpVbs9JccTuTst",
  "key1": "4Q1KJHSiARq1YgPUCTV1mrdttDV4h4yZfsqc6e24ypuMpE2PUhbp1DHiEWQxJTJgLXFN92X9wnbbopX8krRhNZva",
  "key2": "3Xg3xvYnCxHfKjQRnEi8PECUtBziADmvTE6KMpu1aqrqtvBXVw5ExekqEpbd5AqD5z5gznhnzJHQ7GAH5tFZ5kgp",
  "key3": "5goEHMBt97WuggGjZAB75gqshUcCaF6pVFC31kK5WCTbMdizBbp4osPMceSXNwygRxaLoaiHPFaygxPNxXbt9gv2",
  "key4": "F1cGiTaD3GUReE5496w22fgt7ogZKFogHLSq6CHANC6TVC3TY4t5Rt49rMHpKHsf1WV3RgGvyiXEVPyyPXJDWVp",
  "key5": "2R9o76X8PE5JAfefvw6JoynrSQnZpxxGXyHhckeWDtip3VtaKrJduWwQW8pALg1ztViuJ7KTLjr7QAdnmLYTpwRt",
  "key6": "51B4rkxcWs3kEA7YHtDfjT5bGtiCga2CfvHDebP3j9WtHpnsRF6UE8izGCiCm8A2xnooC9GC6iYMTtQ4N89ZvfuF",
  "key7": "2iDzck6A5fsosctax1zDmfS4TZc5pH8WDDdNLzGJ1uPrg6o9QitgVisj4XAWwesdrPdSxLYLUXJ3REykPQp6TLQR",
  "key8": "3FF3smVyBRzKCWSuWYbKJFrJf5jb3w1bPQqTgbJdTZfiBLyDZ7Yp5HJtiamLxxWxezi4QTNmgQ4rL1jU6C5SWtKg",
  "key9": "41MLQwwwDJfrxKWKWxqHWb8LbxfS1p4FR5x6qe9KPb5eu5bjA2gNvV8BJ955MuyH9gGwUL619ViGgYKi2AoscQZv",
  "key10": "3nk9Pjruba6TU2M686vCdUCfWfCpZ3uYGEGap2xc5kHsfmbpsMXN9wc1DA2kEeaLWeyYmoKjNkzrS4jyzAHoQWP2",
  "key11": "XxiFMLQYt3VYsoXrhMeAQTVuXx6y2tbc6d54tSEKdUE1CbpjZEcmpZSXVxFw2npw2mDFZaiTtgsGRK89FboGTyz",
  "key12": "3u3cSQYLFLqMSc2vZMWK9uK2aqHw5xisxJc3ksRcsEMkoX8m4zGCT48aBLaCMhscaquVKcU89WSLNuFeEtPaK8Kn",
  "key13": "4NHEK2ZzM1G8PJfuC46HtMGUAzM6EidVz2CSHrNWgH1NVEJRZmRUd75b54igJYceGGUB7eYzf9dKQEc42mA7HoB3",
  "key14": "3YFyXAna16fFrMgJSS2TP9kBKNAmin8kH4hmY4J8mbvPAodzaYQ2aBBXNuVA1FbguEeDjsjoGFHG18bKvNhKtYEZ",
  "key15": "AXZAkic64d9eVYN9DKCpoATo7Zoiq1QUXYyvVovxA19JBnFNng871QrNoiZPSMdwjLNTCg9VX3p9TtoPHSr9p7M",
  "key16": "5d8zegH6NtGNbBjwyHo1LJ28RU1BoHZJqtpCq38PPp47Rf25JGMJe2FexPN1xEuFsEoiyNYxqw3zoWCBEkpW1df2",
  "key17": "2w7QWEeEBmoKkrKs24guMCMtWELEMEbg5HiWv6ypPYkokBkFjxeXNoMHhzQexEHUJEhZec12SnXPMyhERdbFQbJx",
  "key18": "3rbW2QUPg59YweTES6UTNWLXGTBWaCeiLK6NzmB44jHhGLahDfndUosBhmAnJfceVPXbor6TRcxEjw8FRTM8dL2e",
  "key19": "5jHr2rqBdwWcfhRZ3DRkvP5CLdZ73CgHdSkZ2nzzeASLcyv8LrWPWQiGSWqWyvTvJpHPmSLmJDrB8HQNfLiNHa4w",
  "key20": "4iQA9i2kQYdQh3FmuZgbNv1SRbp3zGpMdSCQY5TaEAAQ6bWx4duh6oKHj1rYBMKV6FmySkcm2LcdmsoC8jZoMwo8",
  "key21": "2M9mjd2HChH3rSQ9nQX5qV4PXBdsP3LLycPNYf3exXXqVRyrEZFVjZzWogbwGUsQbwdyzCUTHdscsox3o1ZSntTQ",
  "key22": "264zzQ38gR3AMNytL1PHHohyxJayynkHLe5SgW2gHc9dLNtXKhBipq3gdLTDWV7tbf2r5ERPYb9S2Xii5CSq46ki",
  "key23": "4hvdycojCJkamBTdQpUTq2MF3r2r59smPoRPWGRZMSS7YZPpnac1Q7NWHuLCEQMMxcffSuX1ptH5wBun9CSnVYFt",
  "key24": "3ze9WgZmHeNpebGr6rsVWNWczV18ekBBwfDvU6PM2Dd1AB7CgEoyGvh6NgarPB4jaDG4A64UUiFDvR1s5GTjNEA2",
  "key25": "N3DCTiTDojw26giZs7Je9wDvCNTfUqrJq2Cfci8jqk5Vv9Yd8oyoBChWmjNbYMhXGCgwqtYRRGWeJPFKHiv29ys",
  "key26": "4Gh1ekF6DHzmk5y4EVkAPfseskeTLTfWmEpzPJvkH9T3DcZsunpPYR975hxkPFgroTi45x55RuQhe5pCj7Wf8vZr",
  "key27": "4812JxjtjGqXTSSV9U6kiRyb5xQg2zghnmipdYQAY4uTL7YUgo1S3jFxuhvoMeu2AWPwthUdk2MgvcuKjYcYqkap",
  "key28": "oHEYS1MVgCVWF5a98sneAZ4hSVwhHUyVefx6vwmSXpXsVwFWLradCowr74HwU2JqumWrXEfsyx2c7TjCN5fpFob",
  "key29": "5yc37UiTsdaW3ootS8TNseKzXqTz2Qb6nhfFrrTpBK2TvEmFYBypDsmMSd7vvYJmVoWUaFeDyHWE1FnLi9Qd4Tg7",
  "key30": "3rkYRwC4NYN97qBw1ujDEBz3gh4AWByY94hMR9prhruyvs78UjFqiQibJpRnwzjmutu2Dh2bPUQPW5YnzraYy9aT"
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
