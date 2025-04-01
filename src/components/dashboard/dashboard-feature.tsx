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
    "5j6dLo1hcFCYwLzh3egMnEBqiWSDM5UnXPbEi9tF5MDzajHMhgN7SjRJcbGW9ATL8PaByEQGoT5TsULY3q4zbCR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56NzHPodzvn2hTkvKySx8AxEZUbCSCeBf9ChGFvU6ET3UNcCckw7F54f36TFqJhqJf3zGF7hWHWFLfS7gpWtYq9K",
  "key1": "398yHaSLWrjs3GYDaikgik831qvyLV9ndXWWBKTQeST15nZb6jL9SXLBuHPPJKXayXZfT2crRnSDnmkBcc6ZgimT",
  "key2": "4H9sieq9RWDHjw69mna2iXGpUGAquB5Y2n65mhc8LTxU3ekpgQWnX5LdqHMjmqtnqT2VKB24S1bEsXmhnQNmzqVq",
  "key3": "3ToekQQJohLnmR5T8VMr1yqHqTHWkUA2zkoWtusZvRNQZghgA6bhKbFWQyL1yXzFth8BFEtAvQtZNtGtgtZi9wZs",
  "key4": "MiXr7KZWbFG4YmibcBKx46pEiRwzwuwq1dcRkKFuTM1MJjamZRKPdP4xrXuCjXTiHGEPtXJYpdWU1bMTdkiz1oS",
  "key5": "5mCnrfSdEpspX7RaivkWkjcoeWJnM8w89w4uv7qCGyaaSTPmrLwePTdPo2cWnBxrUq1kTw7Ry6URbSQQYiZcupkc",
  "key6": "3sL2byyFHrB7WeXCrcozb1BwgB5Zos3VZcPGBZy6o4cJT7pviq3hciR7obgQ6GAE26X6J8JX8RTTpkuP9MLq7XdE",
  "key7": "4sv3vFYhDSRcTTQyBA7TA3Gq5H61YJ1gpHGgULp57uuuv7GaAcNhRQZBuxFGUvv7KM7PRB1n658WEWaL5R3WPKct",
  "key8": "21vDtP7ut7aRBd7TtuzJpqrk26XaFbqsMcuzumfD5ZFdKjycY8iEV1FbwcamjUAGpSwukewiaMA45F4bgxCF4uZ7",
  "key9": "5Bukqzc7UESCc6ePEhaQ37cLjBXLPpuj4d1SuLQ9YHosr4LM7wJeMkTEw6ZH9tTBjCgeL2VqMjoufHPYoCPaUKYV",
  "key10": "314yr47EwjLHB5Rk7gr7TGerBaEC5KafqnLxuvs3UJXvPKtR7wezAe1iQymXXz2ZeNtUiFgob2YDjqkjgrRkq1WD",
  "key11": "4NCsKktZZfEZQ8dsFs1jsmKuKXWEVdVATBEktFCeAucSzRaJPPWrej1dngAZVcy2zo2VPqpHLch89Baif9UPihR",
  "key12": "S5evfwrd7fQwMrHF3pxQ64gdw1UeVDJ1z53FXZofHEzfbfeZca87egHuymmJmAsMFB7tqyqUSRjDag4Fo7femcB",
  "key13": "4x71kYUeXgioAhoJWEobmbUTMv7jgrtaQQQW8U39pf2FbfJ3LEaMQBfuNENK5vWDLjzkehbde4e78Pbou9hiu3pN",
  "key14": "3TdztjhM7NvH3ujSaSnPLxK7nSG2DiU5UyNdkmjszPmFkWgzTuCNu6qPoHGQD9JgrENVr7PVrMbXx2A5eJSJsBdh",
  "key15": "vd6KxNLQ2WoTr7ijFigo7ZSSXLC6HPMWFC4e4FVJoCzgwgEAy1giVAKzgZ6zXT5twMRawieXgnJxKmaCaZkqx4e",
  "key16": "4vnW4Dr95STqV4atqxTutnDuJ9dveHf5hqp7xrhvYBYi2Y5EbaiDEugFMBQpfPrsbqHwx3jT9q7QEDkdvY9rb4hC",
  "key17": "4eFbK1PHdSrgUfnEyeUfL8uw2qaD4nkiBAwrTTScaVxKQHnLk39cDBhNcV7zdMLx47he8WW1fnazLZPsB2B44cdN",
  "key18": "Z1CvVTxU62juMCwccUMc6JDp8UEjC1jEQxkptZvSPtukLLY71fnYvNH91Hi3G9cNBh8RqAX6vtC3pYhgLfKrxmZ",
  "key19": "2ubtU6yL4yKP5ho2GM2G6sHP5ijcpupNKyqMaGEXNePCXiEFVZ4Yfs6xtSvpJ7E6VL4rFgwsosUPXhzjhbkN987v",
  "key20": "5M58UxyfqE1P2MkxFqNbyZFbKVsV2msVbLVba6EvGuKcSCXNzQeY67oHwfCsAy97FKqRrBzaDq6K6GGrytrV4TTA",
  "key21": "2fDuLsozFEbiM1B3SFmskpcfRg2UBj2W16DKYxezsooTvb2K2Ncb3q8B6Ty4WFHkGjZ1M4GHpyrK6FnvdtmDzQHj",
  "key22": "497AR5tYPHkKtgUsTNC5GZVRgXfpVk4pzzqfdNqNgHAFEyL6TKstVjaQ2qCyZZTCwepaBfcarsWUpZzVX32GemRW",
  "key23": "5XpNCX38Qp8hMU8WKbF1DyTqFLJUUjDF4LhcGrdDJqBAQDF9k4fWcTgAgFkPx2nNCLhVVf9PNbmbBBykd1PssgAH",
  "key24": "5fes4dXyMe2gu45asvZ9jMwavGxBWJxWTfyS7WYDsNt21SYxsH1FpXqutNyNrAhrAURyf2C21jgkjjLtnChJhxBE",
  "key25": "2KzTrxpJbZwrJhxzKeJXbrwCkALpxE6fMsdw7xR5eJiN45H6iSbExmb3VLqdYEzjjHHxHxmUxmGriAo1osChHYsm",
  "key26": "k8Ahja9TF1LHcTA7stboZEDA7e9t13ymr2sLmZm3zYMcYjSmkQz9q7kYGs5QxDvPUMgdaEvhgvBc4FMW9taVdGg",
  "key27": "4hEVEZzTa7fidrWv3JcNujrvkUKWfv2Fz1WBqFG1iz2zwprnqsXXFm3kg64zKvHTGSjLMjkFZhsrchBJcfRKZ1qG"
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
