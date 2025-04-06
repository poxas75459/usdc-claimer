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
    "5xuLjxE1xEmSzAUdfvTzr42dwS1kQGofZRWtURF8YXSViNJYuBcJohdXucSb5DtbuCL7ppBNHuyMuyaCja5w6MmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hLHHQr3bMYKAeUUGzE7qSsVmwSGaKYJEzbJFCFz5oaWQUehbsp8VX8CK9CFYBLXzRVn8nY7kPh3x7CVX157SUM7",
  "key1": "48NY9QWUxw5iUZLpfEyW7whTPvn27V3odK88aT9vb9SsZTesAzWF6gUe7LfQtPzUCfZQUc2yUU891t5awNXzbTJU",
  "key2": "5BWdeSBzzB66NF4K9dQCDV5abJGVfojy8cnY8hbWmLLYuMVXyHSVuPApn6NVkGLfxCHSBm39iKLWQPqPuB7DJMFf",
  "key3": "2YLjTc4fGA7e2NzrGZNzgnTpQBGRfRj2Waw9P9B7NbRx7W47EQDhgGmr9BN4N9zhcfmfQ9igqLHfPRvs9dQUQM6B",
  "key4": "5Cv8MpqwWJwMTwEazxJYYXcZoqvC88uYYSn1BAcy6gwLRG4FAS58SqGMSQYekjEHNsySMux6QH8hdYPjz9rskLzN",
  "key5": "nwHeG73p3hXi1vXjzpHtWbduLnHEF6kw4ocDxr2YGa7fh8CvtTiTU1FasKvSbUzaLAqZECutzX4o5BCZqA8Lyda",
  "key6": "46JmtZPiyThBdeTmajd6AXqRkD5xZPwWfqfegXLnGCP1vSFyzSiC3UXnHunyUeBJx9zfB1SkX57UqLQP2PAqsan5",
  "key7": "36e5myftx5ppCg22fxyUsyhQLFDGuY5u2FMM3LviyxQsRybhekxmGBxyT3csdjjd347C9Kb8opHk8p8d6T7GXmtP",
  "key8": "5mJc1MQncgbUgH6sNT1ifPDafxiepzxEa1A2KPMqdVKAcn9JJUQer3V3ehNN3hkWofi1ED5VbncnRTwFPN8XSaTs",
  "key9": "YCNKKNNiNKRqnzuSvUhP2h44Rs1bCuEqF6PND3wms91SrqGqTTuWCUzuQ7yMGjXRLGJX8JE17ecbVMiotfiWCLX",
  "key10": "5oSAfizmjjzMtcxU9ZQwYM2oLtUfHueR91kyPHb7iGPebouqAgdxQDGojFieuzPjfVCYcuRRP4DRn4rviFZn3xoQ",
  "key11": "3hLcT5vYM32anpiDjb3i7FqzgbU2yQATubtMikvAQ67vGgQywu5dS6HXdjoPFgay29bU4xRKka7BjR7t1uGE1uLV",
  "key12": "xkENPn5NYgiuM7RADGEvvivNnEoFoJyhvm6TCS8XrpyrayL4ki9rzmvEMZpsqt6SYXCzQ4rrpzKvZxGnUwTzSiE",
  "key13": "hXsit8kfTC7mcx4JVJkQSpazvK9ryvguYhgn8hwgm19dQTGTfcQvXnf9TuMAFkZZYVWM1woGhv8HjChAP59YQ28",
  "key14": "4o9fZd6XgrBKsRnzxdnY16ZUYHxP67iKjxhyfijXJKosJj2WED1FfNaW1yc16ExFeX3nv6N9B7ka1MnupwtKV3LN",
  "key15": "ApBuYnteVdYD8ddjt4tBbh67f6W3SmD9D3UJaoNk6ZvnVtkymo9cuKueraPwtc9hN5kggruyjCr3VbJ4wdmix73",
  "key16": "22PZ1b7fTnoeiANyJ912J8HvZomob5J6PvbeFPqfyZYTHgB9zVwXNEdnwJpJZrDaCaarDf5ayURZZP6szq7sGKCj",
  "key17": "3GvoJAgXzHbAdgnBBKUzaUSkf4zA9c1teV4UageB7L1LSSP7VHbYSXyBY6ysmc92m7T2KgDaEGWE3yUMdjEeJrtv",
  "key18": "wiDyg1RibqUTm52grrMBuGEnZaWFFrCZs3XcGCtEq1MneUBhnvL6WGuZYogp1yVSPJ5qCs1LwLRDLWwzgru9Fbh",
  "key19": "zBcGN5HVw2waVmCwwqRh39nwQ4GgXa1f9HcyLQhxWNbTrd1mE2B3Ez2fmUgKVhicGv54EF29WW8Kg3WwELuPkNp",
  "key20": "2AnNpcdB2cUFxbKn1u1P8RWjNr4EtapVvyafNXKMe72CoEM5Xh3EraRB6jvxtetvCZ7YzqxVg2VW1CNomjQZzyfZ",
  "key21": "5MAYZWGf5SzGKk79GLpjuC7tHua5fDYLXWpuXBCodvQmkSvTLxMNf2NHAShkdJmDutWHi82atr7Hv1y6LQR5JMfR",
  "key22": "3jsWiuQqbCeeeL4iwVSt4tSL1TJfTg2kNyBTGHjAMA5LfSUYLQv5gqYYnck2Q5zwsfMv1UMSsWe6No1imHT6E8jf",
  "key23": "34Y4Wjkf7XhxNeVGj9XYGoc6stQh4X6wq49Uig6RTRMyAhWEpsHWbCpHQZYk6jozk1M5BLHhLEpF2gkFHarMsMjU",
  "key24": "FbuJmdnjo6RDedLbH7ir4B4D4fj1GdCqKQu4EFig7iTLjwdXQujwEDPUJrxxpTaAFe6vvSq5zeCvSejnmR8sbAw",
  "key25": "2ihJMz3K7fEcqjzJ7ViEfcPXwC94XbraNozoKGqhZ77C3dojnQe83szm2Rpgx42R9X8beDUbaoJFFzd4PFZ1toCw",
  "key26": "2ZMmCnNDhu7SKC7d3zzQXXw7fyPWsiCbqVSq1u2o53f44zehn9SDcKEULf6MdbZcPkxw4fJM4svQNaozk4K1yKfT",
  "key27": "3XEBFg6QVGe82pYSVq6o7PDqrEC2o8cEzWTdvbHUz2VA3yeRSpsUdkGhS9gnY45eFVFwt1wQxLZcR7VeEqV6H1PE",
  "key28": "2t7u9HRXKE83HerKMEz3zFhvtutqSU2bTHDh8Z9f5ggqrfyZdpte2k3MQLnidpuVoKtYANAWTaePVV7Vu771h9h9",
  "key29": "2VN5Us5revRpVoWtR3XnNe8wQAjUkN4AMmMoSLLSE2KgEareQNvuGyDdXTRmawUMyWyaQMDapmchZY4cyUBhtTAd",
  "key30": "4F6aHcEMeFYmjPKQJCJ5UWE9FAXrr641P8SqpP76KSRndnLN7eJrLcmFuWSgDTf7Vg7XzbNj8jSmsxLyWNqEJGfF",
  "key31": "4wzTCMmd1cS8mh7ekss7AcD84efZU6eSwmLFuFFt2tKQycoSbGvNWmTsdGp3PmL5gnJ1NPX3BAcNqusK3co2sm4W",
  "key32": "5jaX1tKa7jnJ4XnupSVwdXPyfawwCDkmHVDMxAFkNgTGJ9UmBXLaE3LrNeYHJfBBqXh9UtGBwtUkiVPL5uJcapd3",
  "key33": "5hs2MHPg5JRc5Yt1aUf3oeWDEfChwJfX5UzZZUahiYF4hEbN8rUXgXRnNUv3X2Jx3LVTK65Lsu55k4DeEfGY8Kk2"
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
