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
    "5K5H4CgmtSEpU7obHbdgqNSTn1YeaDJdv6CX52sFLKPgRdmr4y2XKxWtjRNfw5umBiZ6J8yewpGVzyV6ZMiBa97s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J8AkBrDwKbueJhRcex5kRxaUu75rKodH9Byd2Z6y66G17QA3zRSBGs1Mi9VmhKiyCiWeD6aDXLSsTK7iHMuinUn",
  "key1": "5vfDhJK9mPrczfYyHGeHJfqYsQJj53LfjBjJpvT2ExMyngvmH63s8Ju7ckBoxj6LFQRHsW1kuZyvNYCjKLztCd8n",
  "key2": "j3MkfTYi9ijB6fkytB919b8o38CC4dsdhpNPrqCcWv4veka1RJUxcUPDP7HhmVVJ67mQ3nzn3pTtuUxdbi99s4y",
  "key3": "3CqKzQEZ9dVx4gEXPkentm1vxXELz8PPS9LizDD3aV9otTNAsXQsrfXc2e7Hsw7deGtQN31eUCymF2kPX6ocxES8",
  "key4": "estDbXNhje9FoDEtt8o3xyZYuWxjk3LatHM7Pmi5do1W7eFBHiRCTTJFtv8iwwo2uLrKkGFtLQDt5xfMFA88iUi",
  "key5": "4TbNaXPwJfhgDA5THwPNKJvU3Cj1qMRcbg8Ag82fKeURaEkiprFHFKkuJqC8Ve3TXFPMTV5YTarzPnuWmB1nQA7u",
  "key6": "vWAuvyxZXE7szJ8gb581qk9nL1Md5WCHmE2g9MjryF37KHhDwTvex1mBzLSHWtWbzkVELMXYtZ8J6kQcCh2kDXS",
  "key7": "Sr6VPSGq2DKSqZPRmd4n7dFfoVHWSWMyaq5p12t8too3z9gqcPJb1RM8bdYxhTfovHJTWcfH1GUBm6nC5vJDsiJ",
  "key8": "5vETm7RBhz8Et5NEeXhZ91auUCdAg1mqbrpA5yLrqqZzzRL7X9TSy23EFVrK38iMSdy9G7xY1PovwAaReZ7eLWWL",
  "key9": "nxPvUbRC6WrHtDNwTARV31fWUymA4MibMUuBvKRwDhRLNx4aGGmniaVJfCFvCneBcrK4wtcmtmP9qvf7FwEisBV",
  "key10": "qNLGzV68AbzJTh1N1P6TKUbaGTf1C67bBRYd6PhS9oSt6h3RURpLrhgATabtCtueQ2gvjPWD4pFft4A6Kn9Jg48",
  "key11": "4L4y1nY2yjgz3vMmwWqBjUTvwn1YE7hWh2mbjrme2ZPqMtS9HpYzNR6L7fQnZcZtTarc5gVk5fuWxmgZ7kUkyB4x",
  "key12": "57veb752VpcFYKVkPUxHZ9GtGLSfrULKj5Ku3nFdZFAaC8po4pmXFioXqitSNMBBsrjqYbvK5Kmfc68gmjwmqdXf",
  "key13": "4ZU4okGyBiUMYuQueNwMtm8veXmRWFMKj3Kq3fipqfHzu4EjgEGNFS3pichJfszcTjv7jn3ifbR6L8qrkMSCmarW",
  "key14": "2uimqrYMmzwG2oszy3za6K5Z4XprcrGMbV9A9YcRw4FNNhKP8jdNV6JqwwMjWnbW94sgcfmVga39yy9VkVT2Vv9a",
  "key15": "2wxLtXcbrGX16jg57JeDNxdW5xQa9kWiJGmK731AqZxEnZiGPfWZezJYkmmnaVVG3yBFuhCoUai64r8XbgVKMbz4",
  "key16": "5Ma4e9JQuugdhNp1fnbEQzJprP52uNs9YcvzM5GauhyiL9KmXCLhAuyL74f2Lx7U9B5um8tzaBh6g8Ccvb6t7ufJ",
  "key17": "pgPenvawGyWJznHCHeCZ9AWnU9Fd7AFggCgSGK2MVDs2rWGtGuZkKbTCLZP2KzEZ6Ts33rE4qu4Zr6JgZmmWSsV",
  "key18": "4otbuNvhukeqFcY2rkcBQqV3HPfEGjfZwku7yu2q79AyXzH86ac8P6KHDRgHUN5Fh5WcarixkPm8umnbEWW2PnQf",
  "key19": "3i3bC71jLE1vMnUFYbT92vWCfDyMUx2NqWr99nn2oxoXFSpVTy5uZqLck8a5BL5ZuZtuQExCHp8gbBWgPkp7jsG4",
  "key20": "2Cv6zugrL8bzL6QaaPzrXvA4MYW4eWW2x7A5sPyYVQ5F736UTy6iNwo71cX9iTv9tqX3QcaUjN7DNXrog4Wwa3Ra",
  "key21": "5FP61K5KrdVuBbFi9mwHPSWbLLRMBHcGRRTvn5F1Ng5dc37cNhiE6LqS1xcRqFEqg1w6TDCPXYvDFYrrTny3pbCB",
  "key22": "2ScQRambMoMEad8atRaGwUdFBxBFQzrRPYzr9McM8mB3s3mjTqdcKLTUXdGpgj8N76H4pKn46jXDM1Fhz56o7K7D",
  "key23": "47TZUbmVm2PLcpEfM5DX3hTaXEWnZycqt8P1eQmBC2jjSWacgur7uiD8Bzk4DFYB2JbjGPHdpzUbUQxkkPq1ZUi2",
  "key24": "3oaLtAsB6oGgTZksfnRT3Vwensi721RMkHC4NxorA1rrPHYEbKxoPdpGyePQXJjLGcaTpfQpe4djK6FKsaWAeWGf",
  "key25": "4wyqWBCm7RPcY7yvHED27uJuNXv3XEBxZzthz63bKkz2c7cGfWo1q7bWJ2AK6oyUR9xiJuxoTAJFfB2mLG1AQavi",
  "key26": "5WEyMkFLdG9TxVUPStQq4w1ZhGcWbK4iafCL3wEafeVKtGfdr1hYXeBVKuD1vizHS47m7FAAhQ6Csxa9MhYECX2P",
  "key27": "3DbZH9QH4kBPxrDqWXqsMpCPp9hM3wgBhDx23daR8FFpxLkVY1nhiXFDMLmp54yiC2bLBWpSvwA5QQ2ytxZz46K9",
  "key28": "61rwLEWm62feLyPFa9XZFCzzr4N6mxENQAZgmSb5uezWQvzW4etfcKgDWtGgCbjYRP1r8aeKHHV3seErpfaJkaEu",
  "key29": "2iHyryx5KrBWGEnVHKsiXmconW4t8sE94mb3MFpvnsqkVwQMmQdyhsruiDoAAH96BJtRmGpNvqnHDDx5z7hMa3Ck",
  "key30": "4ry2GmMjNWkX2zbFTJg31Tuxjenruh5rFLEMETrRivD3cZqdUGXvLybmyiCmruCeAK7dpb88pKTmqNhpY3XUgMx6",
  "key31": "LwJ23PRLVTL9UDhBm2gm5beaSxB8rwUg6DLeyrAZmVEXAiZYDNzCB5Sxq3p2z4g8r645RRjLroWfbiMGqKhhD7j",
  "key32": "Hc7pvsZv69J73mbJpzxkRthTymCJ1FqUgFxF15HL1KFqErRwU4hQhzZzjECbyu1zzn2hcKzjGZNC1MQevJrdvAo",
  "key33": "5Sd2BhpTvxdRb1ndiRt7eyagzeoXhm6KeNeGeWUHxiKir7P5kQACEbZ9NDHy7Wjmz3d56J7ueCNyfsgetWNUnQFu"
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
