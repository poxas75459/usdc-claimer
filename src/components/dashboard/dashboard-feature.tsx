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
    "3cLTSthHequLGAQfwH2zuSPDCPtU8Grh13iCx7jZ76wx4C3Ymj7yNYjYAcc4vebovjJFrfu8119RM8nLircofXCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qwg64A2GiJU71y9ftygB3kuV83oYgXVVnoKU8DoXZe8uUPwMMXA4C5bdKSUqjSWwGm2VoXi9WZ9uZn5yB4XZwcD",
  "key1": "3bECQhtBbxuJcytWMdfD78kUbLWFuu9sjcUp4xtRLNAwsVCzzPhZAYxXn4GXg33bHUP3q7k1HrEhxqyYW6wpQaPr",
  "key2": "4Eq2wzzEZPAfBs9Y1FywT5ZrR8wQHL8xCwBbPDAh37yDiRvPC2URefXQiMte1AGnubKpFXyNjHUMrNKNgMZGVGV",
  "key3": "3J79j7NCh4qhw2e6gtTdxXhf4ojA8F95HFzHrWndZpyrAQ2weaYzZ14juVMpFDcEUkDcseJCGigtvtTYiAuTNrct",
  "key4": "231ndTt4yGNejte6S8UpQ9uCQqcw5crqXMwtsFnDp9GrWNbwudibqWqcMrups4BBFfRCY6wM3E7CiscB18NrymTb",
  "key5": "4fv76zoqG394Lkdr8N8uj5zo3Q1NbX2bSdbKTkRTXodNDtAkjq3gPZfbEVHRwqQMGMpmYjnXsNW7wABboZuPX6DC",
  "key6": "46QXwcg7e1byW6kJS6hBtYe4eVPXdqEK12v7AdVRbHYyKeuEPA5rXvry1nKUhZHytfvCH6PsX3qUsHA3gEk4FLuW",
  "key7": "469uXiFy2WentANiXawwVnfmjm7apLxMK8u4gM1c75R5tVNZ4QtjpFGLsB5egfcmqfd2BUJ5snHzGtwDgiZKiKdd",
  "key8": "2acbtJd38qukMRTx3TcKpPmAfqCtttiBuqzr1aHVtopafgMrNvu32Yo9NwdYMZmfqjka9ddwKgriqZhoncBWYK33",
  "key9": "57VDwycmGSr5qhwN4WEaUX7JXuznRvuduYgZ5MDx3U6qC1kKZmSn54hByredw87uVGjGmXpWBEkZ4WLAeDgX9Hdr",
  "key10": "RaPzyw4azKL3sz8f7LJmGqSix1vxAh3cSUjvjamhy2iAS7xjWVzXznV4525yDGHgtKVmhQfmERcBZ7HtHh7wHpL",
  "key11": "42xtuBmc9s7jDFZiKEuCm9A2RFAbZx9tqy8xxxC8nBDpYL9VEyAwNKv9Scya6EAjiEKXVMsPFiAzBfW4ZwvL4ZYA",
  "key12": "67TPCJgVSZSo8qNNNjeiaSnEpS7urYkYoeuLYMTUfP6HAeHViNgphMs4pedxF9ZRyQnS8LQ6wx7GwjS6SFi9caPL",
  "key13": "9UQN5WUKJshbqaLreFvfdmezKvgkfKWxeBZwLQJXLEXxhL3yoDHWXnpwwr9EuZaehLNvJGPPWWSaQEjcwenP9iU",
  "key14": "9qjKeybZvc6XY4ioKPAdYDVFVbfhC73nDRv7r2bwvc1tAXVn5bmkjywHHuxw75x9jHLD6azZy5hSz89DcK4oKXc",
  "key15": "22U613eYGFwjn7bEK6E2mBg9ZCL2TmCxUZmmoziH3vfkYX1mJBJZgVjP629UUHSy3Fb93SpiY9eMJyteiLzNN44x",
  "key16": "3BNSfZMx1mA7TKcp33H3gFiM5LbpkNGyHNrchCJTYujAPXwiDCF6ZMqtovs114dnttrLr9b4bftkZND11w8kx76G",
  "key17": "31SizwAC3gq6nX5puXoTMyq3qhCokmzQ5yHfZnJqRNpB7qG6ojdyi1H9PSooBRmBprHo3A8bucwDZF7i2dhw92JQ",
  "key18": "2x1fcYCDLb8Nrga49njJNtrXjrJGQGgW1ukaRcKfHfgzJtuZXJo4hD87XaQ9t3v87e5JhDvG8pcZCekTaXU1xBpp",
  "key19": "5KKHQTo4Em3XyKUb2Qe9WonP27UAz9Y2CXVRkaFsqvXAuBw8K7A178oma8LgrsNm3xRg5AvQymti2PkMQZDvNx2c",
  "key20": "5DPXKFcHaJfcPhhfEt8c3Nqdw4XnTVZ7eujbzS5N5h8nAPeCYcnEvabEd9C9HqJ1PA6BUtmXqydsWDDfwviveFbb",
  "key21": "3qb9TkipRL6vRbFiZRMHboMPCegezKU5kKw7hs8rdVVZ9TKW7k6GJujfekAHotpqWURmsmz9FE7H4m1tdrqw26FQ",
  "key22": "366BPfTNjvWXFc9woUfcnwz5GM8BGxoMxb37hDrUiQzU6KpFwgM4vGAW5zG7htd3fj2e75GMYDW92sYvqBdtwF82",
  "key23": "419t49mEk2RUdUbJVr1Z5WzjnQJYGNcJBXtTicPKkRK2vjfLnm8cZxi2KAWvULzRsssvoEGCAa34HHD2MfqDbmN3",
  "key24": "4AnRw8KqG2kFqY4PgWEdXmQHJKfDgh83XdX8ya3pa42a18e9EbwPozPxnjQb23tiLn1GeBvLbSFMrbntaA4dzVW5",
  "key25": "71cWuLHa4La94gi9A4MVx6tXXajegEThYdYvjSfRSSvHimDAoPem5UieHASmrarBMb98znaJEvc78Pdd8icxDY5",
  "key26": "4XeSuG4cX9v3WhADgdih5kTuDt4UNvyfoNQY7Y8p1MqZCP3qMmN9KEzWqwhRMVTeyyvZDLpFGRfxPdfuvBmth4iE",
  "key27": "5njbxDqJba918J4Mxkww1W19xUfGFpsKvT31ZitUxU3FB7mXs3cFRiMDpS4ABQv29cp8W1rXcaiAbHGi6fXVzPFa",
  "key28": "28QyjN7ptTGzNVA1SDiPmDChNshqWiPiAKLxydHe7w85Yrqs4n9sKsAEwaS97nFq2P3rjURudcNRuDr6uQRwg2Zg",
  "key29": "5R6FcJxBikZ3iD6ybqGbRMmvmNhz7fjhtC312A1xFkygDUJ6mfw3VPW1E7Qo1oyVmMDnnA8S3qx1pGrP597Te9Fk",
  "key30": "3wzXCEH3Qaf45CCMHA8wZqsqPt3XLzPPnsCDyLtmjoFibNPgHdDBXKzYhEDKFDhTWjTZiX8aHVXC7e2c8vXsMeD5",
  "key31": "SZWmrD1Nt9juKoAYGEp3ucVcghdPMDkZGY2V2GaRUpP9rRBvQ1Kf4SkRDgkwaDD6rJM43CoxGCY9oxeDGzwrzns",
  "key32": "2MbRhyeGpesATpBeCT9f9rqZCwuL9yLr6c8uxqRwwZ4EjKszfByAbgUnYZ1jaPpmTL8RPfuaHTUtSe335eWo3hVy",
  "key33": "4UMZUVwVXDNtmaTkYHYCcysQNJ2uSjjUHgCd9AGRcad2rkndzuiAYoyMoiHwWpMFubhBuEYFRj6pDE4Wmq28z3p3",
  "key34": "5SepBFbRki53DzRPocbXCfFJ696ZaVq4GSAVkvFjXmQYeZ6iJ8w7HZuz5zJRKm9QwZf8ReUYeLwF5cM7k2sMYqcJ",
  "key35": "4iKrm7QB1PTxhb78Ci6duGyb4n6q5KsoRnATLjYXstaw2H2qzWNHAfKcyTZMc1YT8BqJJdQDxaXBc2YFkM9QDcJv",
  "key36": "35h98JkGZkwwoat7iCKHBKfpCDBgcLS5Dq7fuh9mUf9L1t1CPmZ6FcVz2sEeDNM6Jip7nxya4J8LkHWeQxRFz6xN",
  "key37": "4F8QhXyW88tBquqYMKjoTirqKevvMuwq1ZVQXU6Mdna3BqEY79rq3XuHH96JtnhDShMkBGZPVakqYCWBHHc4J7K6",
  "key38": "2V9SemzQ26zYk7uCecZq4QZcUWVAHDfZias15oQVc68DUsr77yTPCTXYRe5wvtLcr99BsyaYFQQzjnYe2tmUgUvB",
  "key39": "XAzsdGQSTTGBJvnm7LftGXje4ssy5qttWsXYDZMtJdnkd9DCqSrdsQMkjqS9PAczeQU7NwqbYArhbAB2QMUtuXt",
  "key40": "22BSYMzyngWnyW4t5NrjtEs84hSiuqKkswTLX8rUS2Q4JfGzAdHrXTcbjsznBuhAGdjnVnjLKJEdc8boGJExyLnE",
  "key41": "5qYwLZpVuEhTRHNdjnPa5ibEELkvcijChTsQqwAg124H9FAAU2xxVjAZTYgdqeLPDmgGJ2hwDTfy4zba1if4HqmK",
  "key42": "2zziwJrtAs4drrvYZQvD3LneNg1xf1gT6ZLgPvf4pUriz239J5kq7xY7NVipNswtFHEQYvfp63NEvzjo8MYVWrak",
  "key43": "EBy4MUn4hjQEqVwE6UQP9MLqJeKQrBdh56DdXbKAqhtiTGmBbU7LQprN2nwi17bWtoS9uWgzsb4h11GeYMkvAVE",
  "key44": "4rvD3YDWATiAkMyKUfVQZhAvC1p31i1umRWuPjzCQpQWDTwWZMARK1q7KxN2fwszbnSLPgombWARRkhGzaV7Ff6Y",
  "key45": "3iH2Wxejad4nxJETyxhEonCr3mg7MhBiULxVXGDGCbNiCpqdhmxhjiEP5Dpz3kLraXvQCdVPmCvSbbTYyEXGzHG9",
  "key46": "4gVyT4JDNvsTe55EFBqoVi1RqMS3TVRHzvDxC63pJQdJdqnV36dHdNmVT2TAHVPCK3gtYXmw6cSUpTyg2TtMX61F",
  "key47": "4B6upfDsWk83N6LeSTMmRX8DCZCEbn5QB449EZDZASNsCokyxTmjoJbt2AdVPxu27HVxUEbcsfNbrK3LWtjPq8ga",
  "key48": "2hYzmAQLkTaHwPEXhNFGsZNBptxJmhT44WjCjoADw6BB9AwhxGhrEhNS5BBXtvZttNeTpsqYjviWuFD1epFKXsoy",
  "key49": "cieGfHttDE1ejGAZf3iTsW8B8i8QDk1tSWpzsPD9rwADxZ1VkwCkeDieUbZ2FixbbTN6pimQWSWSCZsjPc5DFsx"
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
