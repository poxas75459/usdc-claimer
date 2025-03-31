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
    "2LYgi84HufYcTyYww89ffNXLH3d9ybZZpL7YJcwKrzYYQLCdc4yq8rDmCU1oDom22nMA8Qbni96VYRsNiGhP1oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F16rAE7n9WC7xq2qX6NtXHexgrAYLE7Ypd7q6QKTaAnAogWAND3psfRt9cnGnqGSToiccoSybkmNWmdhPMchoh1",
  "key1": "3UXfpQUpwf5qfUSJ6smo4ts85SNpQ7VUvnbPKajU3UEhHh9MTQhgjyWR9wvSHLjijLBH7SAkA56vzuzWD6LsQnpA",
  "key2": "5Hu4edQERn6KbzD5Wr16HHhQJ41Fk9bavvP6qgDywEzdMqDiovnrC1fczDKYMuXNNZw2BYoMLiXjz1RDpFGKovMw",
  "key3": "3JgeGnV9kRJCVhjc5TCUTtsdQ9U9HxrgkFcdvWg35owGEUAEJmpbSMWyDdMEnivqCf66z2apPJR6EvBWmae9hG4C",
  "key4": "zbyUBRZxjzQ69xEC3fFg1JjVrHnt3VnqeroxVPEPmrNhskurTz22nVMZ3zfjKFiUFFthwXtLJGUm5EroMLwR6oJ",
  "key5": "5vn6ATgYh9QhUoHVFakRYWkGFDrWo3phGgDVxPAacLnW8TJJ8ZXzVx7bFVCSwM5RrmpgxfreE1LCWdaGuxQgvXqq",
  "key6": "2rhsjHrgFbxptfjFG77EvafKQK26PBF2ai5CaiGqmhKF4qq2zg5DH4RouMRqckdvmHEDBpPKT5iM8nvB23m2Vd8k",
  "key7": "yN1QJVBeNmaTckpGjjsAwN4xg7AExveK6FxX7xGdBFgQvhvVVapKbmPdv8mvPcrhK2mk91rsLnsDZXzbSE8coqf",
  "key8": "3P4qXyT34r9w9A4cU5msHCSve2UsmX91nKaJzPEQSd7SKiJpn99PA4f1quWP3esN3NeruLtnD3hoep7qQCz3WLGP",
  "key9": "2UyCACMm6gXTWcpwynTLisBN5sjQVhMtTqXJR4m9uK8cB626UR9YdjseT3SURvAvShxxctTef7FzYAWsmrF4Aufo",
  "key10": "4BuC8NTo9916nRyuUXUFDxra6UMwkQrDxc7zhXzR3P7UU5RgEo6BNrEHgy473pjPJ5KSE6WvboPvrygzzvuh7SQa",
  "key11": "4cVvj88frQUfeVJ6QnKE9vCfSi5VxT5nQB99GjL67fh2N1kBzaZWQv4qM1k7cX7AKHgFJZwR9TDf6zZdXbe1h1qY",
  "key12": "uXNWXsQm9DPLMobhSz7HhB1uCgFn3ogA1iQnBo3By6RhqPEQoggQhG2d6mef3MwxqHbENcJk5bRsC1MF3cUB1zJ",
  "key13": "2dyYbDtX1foaBNLxs8uSSKus6p7UwZsTtfNhoh7jzYRiNB2GySwqaoQ9h7UtSVAyWb94XFtVSWNRvPyCS5MdqDwo",
  "key14": "4zVgeNvp5hobDS7H7uKpE7y5xJtSkgDge1JnmHyAsvBqakiYpPkyA8uus8awDrCsGDoqgWhAGNb52BBNnNgQkRy8",
  "key15": "5Sp37TdEgDMaKJR4RpVZwAwRcb4y5iNjrArRHqseKPNNoS9G13LrLgtEJ29oZZXzMGXoJXCivzmvB1emUC3HVj5g",
  "key16": "46D9bwJEBnkpU5TQxbmrR4FstR7Z8tBSzZqnb5vSDGvFrWREMW6WCoZyazbXaHoZQyo4DxvKFVSea9qCJ84byA4o",
  "key17": "2yXyZ5eUDfevmrzfPq37W8Q1GHYV1z7wc9BQj76TaN1gV4CkAc42DQpQZbJjt2B3aa7aKXQfZUX9optpX2hSuWiT",
  "key18": "2Am3Q3wtDWqLNcMqrnwv7WVgwz7CSnCRGfzuwpncthPbXaMVLkU9HRjHZCajx7Dg1mbNCtkHiQMpMpbkvP5FGzW5",
  "key19": "5vhz1DQe6wWhrh8sudB4L1irnwo2a3fbxxcX3WRpGLE1Z6PHUZcbcngz4nMmHMRrqtffBk8CL3YZDBd412FXMQBx",
  "key20": "4t4UnaLmfxpBaDm34jX6nm9Ga5iKkWpBkBbKHNZXe6awm4cZFwFYxbjDbVKX4CKAZiXnp4uf4bn8X7LXXczj7xtT",
  "key21": "2o5qkqbJi9yiS69ethxkCv3HRV69X5n9F1R2baBEsEr2ojfArhFiScTfHjQS4LjufNJwhpb3A2eji6bD4YvZ1bWz",
  "key22": "64vY9vwFGmYMisWG1Nz7ED1njdNDdsXakd9dN5Cg6VkhFk6WEaa1kGHbchKZXZ9GPmFsvKT5zFZjQHNf8qFg5LbL",
  "key23": "2EVqRUNtcYj2XsyePJ7zphq1N79rsB1Eu9oynoVhq7YCB3LZ7DGWxJkgzvothsj1yiHWHC1iuXrq68DjvswtvFNx",
  "key24": "2afV4eFajibHYrx6ZXUebGgbdzb49pkncKkKhFJKegHUudqLt9QDUr3tazaSy1zvbdod6aMJ1EhWsF2dCUUSSo2M",
  "key25": "2s3xwWCcjYfgZeWUCLUGBwxwVcyKtaz7ajNasz6pbixb3aFwUuSbDSsp99yQH3nk9sn6CK9rwqRABnMDsvM3YMme",
  "key26": "3XGuS1iTANV9xSFfZ3Lfu4cFcY1H2gzghUnDzje1dERzNeeqctm7yCXLqzcHdftqt2ZT6T1RABitNkXYt4YBoPrf"
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
