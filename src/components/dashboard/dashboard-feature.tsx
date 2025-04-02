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
    "4TK6ePkgSAJGcEFxqWLFRA96xjBGh11Rk9pVpjSzkNQtUce2udD3VUFTSfnRckELvb61ni97VDJitjn9H7eDjnN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MsmqxBoBmWABKypqvrg9KYZ4HrgCYsPwDKaqTNwoqPdydbK6DkABzyaRUDjY1gF1PMDo26f2jowJ4yvo8DNYudD",
  "key1": "4xN7sWYyUpGgxYJzMXEvPdHg94z6WX6Fn9W85xMm33dsRysF36GLb69T8GnC5tbxfyt7MTWCeFt8TAHsVkpuKsQ1",
  "key2": "zApmnhdEe1jfhMg8n4hzxiy26UC4eP5xL7Hz79WcnuTKbfW75vro2E1MXkxzrJwrziGn3wc3NLFiGmv6kuhY8LW",
  "key3": "42uhpfARRc7b5Bkwbp6h2bedFg1hhYgTYf9jvKwe257migSQo75F6dk3tQHiwXRuDso2iEwAqiUBSkfkYaE5LJJo",
  "key4": "2XYWaxKVeFQQLWjHV1QXf8LvJuWwGkSSELvwZ9Xef3jYN5PGfNbX344hfzRg4Bg2EgS3kCqsy5Lq5FrZeB78Edk1",
  "key5": "579gtS97fnaAoRatLZgu3zRpqamWSyhfee715D8arGSg8ghCAkDryYqasYEBfxqvy14JQ96LcB1xuNCocafptc4F",
  "key6": "LKBmnzZVGG31pHWL32jXXTC27BZGKx6S1VMm8i71uikEs6ao797NXFYgguWYdqYir3G5uzazGfhvYKWzZvMYC97",
  "key7": "292duoTphrr9BBuyFXcQUtJkh6mDPt96FxSQqCu81eSMJ5YNCvrbxZthiAsBQiDQZi9kgZdRrkc7nMz9Uama99qe",
  "key8": "2hZeD6cJNgDikuLNzYXBFDHAS1SwzodWayyEZesSYeb7t3iPRoq6MMLYQh3bU684ZqFikh18V514dZQF35BbBsh1",
  "key9": "5HpjGeLbUpzqpjTJ7QfWdMfW6cso8VhvTTMKkkxa9nunU8GJKgQ1QQbCWQCDTqLMK3C5rz8DrqMHDc6weFXSzRzi",
  "key10": "3CiYaTQjoy1S1EXX2vqhfJqxmuFxRw2ZFTbmPek4PwPVrA1mMQsLW6oFK7zjCwnAkccnc6vP6Pcr9yZ5oQzcS5qR",
  "key11": "2UD5hJSvrv8mduP2M3UjJnF1WVecXTYwVsREWajyNP7oVDg55U4Tnt15QKm465haiXqAEdx336Bx9VdPSRgA9Nhd",
  "key12": "4BPUUvon2HrPj4TDfabqxH2CpeiXukuS4rYJShPo3tRocdeXDBffzvoYhGpYQKLVTHUKAK25oBR2VpeZ4sx7qJjq",
  "key13": "3a3ygxYqSfjaGF1hix2QGGzTJknYpdVgEN2tujKRro7f6utHSsW1Tt5117WkTbbrHvdi9JHtB45u2SEiuMsm2M5y",
  "key14": "3bVCRJR9tbpnkSsWZUDPmYR4aNzC1sWkpT4gCpr9wzMZtgt9kmR2LJhSkq2bchA2Yu1kUp7qzL7MZW3CTprDRXam",
  "key15": "3SBgQgG4nqfrHxej7q3zZzDYg3jDummj2U88CMLbXeaCETJAtW3cQ16oYjYjrtjA1jBivTaJ8MjrXAfutdEVtZcM",
  "key16": "3kZREPEf6hZTyobUYNDY8yoWnbv8BJm4JQjMtEj8ThjPYwXnWxux5aRAms3o1B4JmbmMvuSPrrHEkcgRgQ5ynW4U",
  "key17": "SZuCBq4mGDnGCKt8u2MkfCTNyeMd2MRuXXLUDBm6Z6bopMX6ZBh1JGPTCnu1oLFw88YGu5TrRA4AibWyBz797cA",
  "key18": "3M2YDcSNwHVwHrnaarGhTMohngUj5CQZqbAaqbgFvR5iyCtyo5HYuHChQNZyHCPztahaTKusTuE597oGPQEg4SZh",
  "key19": "3ZS4QtnsT8LFscxrbQMy4pNxUrfCNTjU7zRRpzPzkQY1nzt1LTETj3KrKqv8BR3EYHayLsQamGhiGgDeP5dT1Qw4",
  "key20": "NR46FtjkdBX3vxyVmvFh2FokR2DuoUC6NBxy4Vjmun3sRPNYhtYyVvcgBxZHRtTP7WtFvQ93r73ajyHg2HffU3d",
  "key21": "4wVC2t3Pz4EHQsyHSj6YXvLA4ZpgKEy8ZdbxunPg5VmDQtNUJDrSGZB8kqD1xxGK3ogdLGGng9Xs955Q55xFoXQB",
  "key22": "5HXqC1CW7MSowhLhhsZx9g3kQ3TPL6Vd6p3ERhng6i4nBRoByvxLgcNx1AkfdAxJvYfSv3udYS8YJkY3p7nsVdpF",
  "key23": "5V5ufN8136wS83mYsUUoAMWWVdLvU12UpAgCBGwuLETNvQDorTwGExjjXHQrwtPFD9S5MCyxSNt1eUwvMNCnAMrF",
  "key24": "5o6JEnKaYhonmaf25DVEKA7E6FdCSR1dg66gTcnbcisL8DyZz4Z8XjdXK82oRixhNhBNKL2bKLWi2UQJLQpfjZRG",
  "key25": "44VY6qGtP9pwY3hRegqxNY3j4dYW97dKdRZ7r1YJtQJV4wfi2Y7kMNuYPYdHTyX4ta1gJ85JT8dgCcyKQwULEDy8",
  "key26": "2CfhAjWGiFe5qAm3hUtB43K9AmEv7WethucvE8D8uiWUFJkAmoahxkS6JxKr8CFkHFtx7Uymd7Q85WmZqFu6tG6f",
  "key27": "37xNK3w2r3AyadcFh4mGreQ378GDHDyiL9sP1hDMrLwdHsJxFHkieJPRKvJFyCsGi1Pu1hDFwXENDTBqzN8WEy2M",
  "key28": "3inaU7W4vyJRSg7QuPh4z6F5gb2ZAgdKXepb52W4kmtTQXsiGGAa2mLtUyhhBWMeFiArn5wxry3A59DytY2LMhgk",
  "key29": "5bbkHY7CrDSicY9RNjMdg3Jk8jHCkJ4fhc1m6VmzZWBsv8R2J6s8T6v164AiFCzNsJDjPcxswig9zVa7ReKeF2PV",
  "key30": "4C3UC2ZuHsWh3tQZ2UJxgr2cYHiC53Hj6waEkUpGeLjmzshaT2YVDWY6Nhwu3L4sacne6nR8rM73LjFQ6oGbJcKP",
  "key31": "4xFuDCEmWdghaWZ1iHZYbP2N8xjgkrwZeZr1QZ5Bznk5XSHz5KTXLKMfxPGzdNS7CbS4Lo4RFTA9Pw4wquZYyQ3S",
  "key32": "5osvLdvwWycf7RNZ9syjfNkV56wjqagHDmLzriKyLVbmx9ynQacR2tD47ZVUZtdMviQ3Uop8Ps8EM4vJFQvmZMoc",
  "key33": "483C1mTG1Zs7kXa6ZpTRQiocdyyxj32wNjtdWSzzLcPu6zPkb3CKosfnypoHFp4W59qBCgXGbEnGgyJ5KYKTQQ54",
  "key34": "CZP6nKM6cDqcKbnpwzVwsF8kX9VLQks5ZuRmyfaEM2YRnqxDod7qjAZ8MTHZCWpiRH2H74W5FgFWgNgpKGgXWLr",
  "key35": "3S2sKYQFGfDTX8prUvPaMr3mddS6SgwxwGz5sJFbBfp9hp4xsN2WpqVp6sJZHJAL7RneBbFz34JBzGtunc9SgXXq",
  "key36": "3SyqzzikDKeCrtzF6APPQExUY8GkxLA8Y259grhmFP8DwfLek6Nrgi8X7umwQab1dAfYDpZDEf6gf64aCkbRDfGD",
  "key37": "4zVug8h5n2Q3GEivjFgNfBDypY1ohwcJxESHDiEASG3YfwkQKefuHXVZQoFHhnTDFbeVGbno9EcUFHnUdvtKNo5k",
  "key38": "2yGXFfwd1t5fChc3oLw9k6adkJotzvLF7UwSJqf7ZWYKhvATNb3DmAKwiaPME8yW3V5ZWsimQ3VoqoG8ayf3F3Wa"
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
