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
    "2PZyJ5EQ9Y1mcrhMsK8fgmAoYi3TWGC2MQ8CTrbqw9sLcWYxJHse7agiofbVaKB25TmKXqb9Y7nYmPoydBTZGRX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TzMT6MFQhZpP1HEbn16pVcmFjkac8jjuZHWBdjpB3PbZ3nvdXcXNtPdC2c2AD3DePVqBZi2r7hKc4Ujeak4Cac6",
  "key1": "472rgMCq2zhVrgh7JE1JJqEpxK1mUVjQDu92N9wr4r4C7uuPCCrqoUiCvC5EW1V9ryieTn9mkTWSDcSfy1Qi7e3n",
  "key2": "NYrn3CBLHfW8BbDazWmqbfWRgbA4paWffJ1DHs2YfJb2Ed1K7CytPCTd8SSeRDYBQaPPqzr5imB4DS1pfsvxFLy",
  "key3": "Kf1t3M2cNHyXLjAXxP3PMj8mzxuz6H46DpxhkKtHHSpYxcHWhyE7EZ5LDk1xB2kYJBkFT6xDqwijCLZBCeNNMeP",
  "key4": "ens9NARPSrkBjxcU9Ncp7dgMWWuAx6yctQpo5zoHZSErby9t5ips2ca3W552hDHQuSd4jCgzChmWYC8Gf7K9cQJ",
  "key5": "3y794FKyD3WUsuzzmR1z9EBJdPNPEv76S8VkaZwBXrryfrZ34WWhegHdyiEd6baV1QgivUbrwy1D3b1zoZJ5FVeA",
  "key6": "2KESeKCjBr8xy4Y3C1kSrzZ1iWD9aMQgd5SKAYJ3vSp4k9jDnXaT3kgqxTC961dCzXNiZhrwTSkCCaQNVKYRQ5zy",
  "key7": "4pPiFZ75xkci6rvDd9vgTW4GA6pcw12ULhbBX9h3X2a3SW5M6SQaf63V3uf2qBXPmHRd4kcyCyt7gktbcpruLwJP",
  "key8": "3kFtDWb1SMDK2HYLFuyobSsnRg6Rz1EsGKiXvp9k5hJ7XyRcsSWrxqrgiTcgoBunA8E9ToiasyZz4gPzCaSszLzC",
  "key9": "5UUrAjo63WU8EUnGvdem3zztM8vQsh3Six61sighR2Q2QZNAf1jH2DNxv1Cj1YapRLVod1jV2eowLQLFs5ZKd7fD",
  "key10": "gw7kiDkULED6GyJDJ7v8Zo4WZ4hpNUFGzbxY2T8dNmrK6QB8gs1UnmBVZsZjsTZcp9HYhr3XqV2tbvNT7dzYpJF",
  "key11": "5LK6uDmQuKZatK4P5TgrQxHUiAbWazbPbjkdjGjyhf6WsZXpTtARTRgJPhcHbT4dzxMC7YLtmBU1YjsYR3TDsgET",
  "key12": "2cWdrL3SdZ4HgbFyuKxR2wQUGP6eTvRTFkW1GKfxjyKqFzTfpRWcAriPYjKitDBXJhXfqtfdaNa9edtDjWXy9MCd",
  "key13": "2QXxYvy4AjuWX1uR7xu4kjQveg13yHaupLqrwZp2wqpkYw3Q3JDXjnK7qdNj5azdXhPuJK9xrvKqBFt3wCFhRcrV",
  "key14": "3KB8ipuQZ8cAAo7Rha72FJGL4y5mUegvSNkYkXCUYqf6EmX5r98WdqmTcZy5tJ6F3PQg8Jz5UH3EZEpts2Y9ZL8x",
  "key15": "2cjLQBHwYUHGWkZKECzGkzB3Gp762eaLkry9kgNXqbyC9i1hHmVMY4vkGa567GHtzkeeGoPar58ttNme2R38AHnc",
  "key16": "4FKqncsig9Mqu7QZdHtRAKyGjFK5ExfdfLUm4jPRtmTUVC3PmZzdnujwF5VBYNNxR1Dpba1Jf7vr3bvdJkgdL9Gr",
  "key17": "66JqmYrpbB33HjhpbXYGcMYGnF5yyfeaFauenUDNyL8nti1evT2PHrwJCs2X7K3NVjTcTdRhd4eMC1oAu2MEPFjz",
  "key18": "4JBGsJUNE433kuKu4o3t5trJoGeFvM83GruN8fVE1HuS2A88GmmYpgFL2bF2aNGcD7RRFmn4CtiSVsaBic7mwCNA",
  "key19": "2J24CcUmLXoJgyUZdknTj5i2uQg5YiMAmYhCLXZ3gLin8frpZFiHXGc5aM3p3tsutkXEKEsDNaN48tpEE1qgtb5V",
  "key20": "3dpfgiS3FqiQJvY4wSdysoVEY33gCna61Nv91fWXLowbxUNT4SahqSdzCNniAnMTbj2m97XLFkh2AMB7hgUmnH1R",
  "key21": "QEqdLQpFU18T6iXkY9NfF9ycjRqQeYFU8QjPGVkSgHfKjQUK9HrKYbaFNh2C1tZiMxg9JTP2MdiTZq4Rus5ks2x",
  "key22": "8mGEsnGx4WVdvv6fw7LogzCSJ77yzNwjLfUcfVQ9ovGXCbGzVqwr4ixnEwf5YQJ72Jr2oZeo2LNW27dVEmHXpm2",
  "key23": "39fFnEWLz79q1VX4qMfvC7ksVk1hGjUAMQhRuQp8MEX9HeQngvKUuuG28WtUxwLF2aWvaRXsEtDiDyfdjEoVHaQN",
  "key24": "5oiGDD8FFHaMjZ5o1V19MDgtSXpTGu5U2R6UVzHZomim2ue4UufLuoRS4cjdCP2NdE6CL5tPV3ZMrwmzQezqHmMN",
  "key25": "2zR9ihXLizadPydB48mCHiRaPpXN9BTm3uZfvzRW5WP3uVQUaKoTEfZecbC14MhkyvXcg2RAD15iHpACCET5mmku",
  "key26": "4nprefL3Ev8mXeHYqLyq97YUSR3nkP6QfNsBjFABMYzQX5GvWTLJt6YjGF6ecH5h7TmxtXyADsjyveTAL3UHDr36",
  "key27": "4HM8twzWV85jQxBLwhdUy69T4RRwq58ZELVfcZj6qBX2e7FEMDwNMnc5mfLnJ5JTGqxmh5KGYwAjsSGHnYrCKNoX",
  "key28": "3NZGT1RsF9YruEUT83Yhn8e4BG2yLQh2mfrYgFGNaEotYfBCEd6EKSQoGsSzYjxPTRAigkjBXXcMNZYg8jeQKEw6",
  "key29": "2Htkxhzt5wSgXW4eJq7pkbdev8jBG5m9kWiJowjjiW7pDNZ3oqmyFgfZVEDdXvUrAn8mk18EpyA9Edmq1hcMPoXc",
  "key30": "2ZLXimwwQvrVaCo4BciyYhs16henzbcUgMx2WQ1XRGAc7FvM4AyZN8uQnjhuPie2hhJugTSqTemtnV6rex956HHQ",
  "key31": "5zntA3EHPmfRNCR1QezYXLE8SaYNeapTTNiGW5u7dCAGST5W75RnZjwKX41GytEfpDvsuH3wanoADRSWMq7ZpA2n",
  "key32": "2mowbWGVbWjYkngCEBwU2M7zTtTb54gbf4ugxaidh66Qq1HCdGijwSEis6tRC5g9ucabBa7kxH9F6RbWhTvT4Tps",
  "key33": "51pL83JUiH69ZBYYx1tfFbK53pbpbZZfTWqjYLS6f6GdF6TYyVNdCuXsS3651LaXJB7MtfnJpMoJyrWw55a6JZPc",
  "key34": "5TGKQ6v8Vfpxo7g45TvDKsSMurr67YzE923QWk4fqGjj8tDrtW4AHfcd5vdTaUYTvoHFfkaCyVaBqhUHAVs3MRLF",
  "key35": "52uTEQYboXjfJTJ5uXWzimJUA4UKXioAHtLPYb8hZhyF4JqxPrwSMP5tgEquUYf5w6irsteA6jVvRNDyS6nEPKce",
  "key36": "4SzTWNvUHwG6ZbSD3HkcijgBmnVVPjrvqtwfMR8sfh5Z6HKsMBGCYpECK3injDem4QNDJzA124XjJsY9D4crnP16",
  "key37": "HrUJmfinAtSjQ4rjL2LtNmwh84QofAo7ofARTU5ocDhiWPPKEh3DGp2vRxh5LnBZSYoA7bVDFkKCukW6rokGvUk",
  "key38": "3eb4NJmmT4PTSgSnM2oqWwFX4cGEUBVJLRuvkE1MM2wQtoMB3QbnnZ9YBVfrLwbDDfZW2GunG62Xmnu8qdZjN3KP",
  "key39": "5zGnkuKK9FtAmiLaNKiB1DLqFqxkMrzaUuU8ANEpmcfXqt5YfLoT2MHXQ95xZnVRDvJZ4HN3cyTUooPSKEmaG6A3",
  "key40": "5ki5ZXMtBdXdkBZnCtQ6xr5Q45dtR5wo9piaQEgQhKkCovhQVcqe4NzbT3VjSK4z4WSZB9SpvBq21PKMNAC7NfXk",
  "key41": "5WN3cXSCh2dUSbkJUsyYqigbu8udgQdttW3BobryKaxu5dacDDEisoPmpD12YekR7rkXRBqSmbUZDRMaCoprkbus",
  "key42": "4k6BuTXk9UfoA8hrQyRuvTPNwC7tiMP1W8H12t46hq7hJ4rFt2kpfB4uR1rcEuMKmWVjsQegWqQQndc7PJj8zWHy"
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
