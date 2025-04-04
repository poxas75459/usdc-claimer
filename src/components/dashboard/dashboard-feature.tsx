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
    "4aVigG3ykH2PHeGAmX4NUEoWXFR7H2m9aLypS3Cd2d2sRfLFBwfg9dNFxKVid91AQ5iBuS1pWBMEuRDbrVpV4GoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67p7NuVQvsderDdkMojuRPEnXmddrkVxGkZdLSHyXUWxaEEYceHp7WZ9Tuj3p99pkKWSG4okj6Y6BydiJj5871DJ",
  "key1": "3jZ61bD1P2BK5xCiMgJZzanZc9knQtJTW85TJE7eJmwSLJ1LmtZBNksaMeQ9bzwYQUwdpszPEMUUhJtkMmbiuiVT",
  "key2": "4wj6PtoZVDwvbU48WJueW5vCciFCvVPmizgdsLxcftSN2C8mrqg3ECvq7DcWzAg3GsJT49Xr19Xj5FgbL5Ky977e",
  "key3": "5BxrgyktoEk5Lx4kW8bbzxMxSLBpNvhrBY4gHpqAa5M3crKvCgu5BeZUAfQsa9DF8sBWsyLcJHFSV4eRTPVNc5qL",
  "key4": "3Bj6JudFkDgm58j3je7tyqtxRq6qSSM8NPsoKWVv4WjuAcuY599yjcgqqTPkPHZCca2zBDuUffMQ1Tz7pdBFH5Ck",
  "key5": "53KKBokRXbFgy6hV7oKcQxoAsJgWxzUx6b3tfnMuVfkQ5WMj4tw5SNBW6P4zom69V8WVvfc6xjLUm7tWnnEUhtJW",
  "key6": "5gs5gEyJXDhacx69gWpuqcNtkU9d1qPime4wuv3dJJcNKNvcbDoD6TfNmogZ3nn5KfcE29RsEs3YekPubezDbPR7",
  "key7": "2qShD9rqBCLNSzzoUmGaKMGddBLDGu1spWzGf4k4GANrk6zBzVxNNTjQf7kGKcYS13YWDUsNAsBzRieryUFJsQYN",
  "key8": "RLtc5ZyB8wdFhpaeUzqrDoaRVKy7KtVWBDr8oMk3yWFp4DtzQpN2YLRvtHi3usRBUPY4kxT3ey9vTRcjsYt8H6h",
  "key9": "kGMi2NGARvbzJk4mgkcGTibxUE8PXgatZUtzYsZuTCJWERabXiZTmc6AaeaoHaw2Rhv57nZCXiMisxVqZMtSfSD",
  "key10": "35yadGQmJiHxcfDEDDWCe7LSth1HasSkG9nozqHpjeBSLFA1NQqudXBFidEbwM6B4aCjwSFX4d9aZnivqfSB15cD",
  "key11": "2YZUCPKe2Y9YzPMRgXUTzqhmQfRz3HPe6GUc7ANmy9BtWgzgMLruJUtZTpke9ebX5qvAwYgkzkqJjSM8yaembBHf",
  "key12": "38QkX6rm5cLNXADABMn2W8nMVb78Vb3bcwyh3n6CZGieAqpH3c1U3cGYfP9uch6xDoF2NkuLnQqd74UzWvWAAbnU",
  "key13": "4dS1z3zcT7PvtQKDe6aLjkeAWB3QtWzvKycvByJRAeku11bs338osJAxuWQYr2xjNxZFSLjpFyr5mU3gBA8YdzYD",
  "key14": "2km4jmHx4d67znpuxoANCigNUuWDwxhMrnUca7yu6dYUou2fCZtJvue6nHVaYSc52W6H8sN4FkB2edB8Ge4eW116",
  "key15": "3Nh6t5XgDxRKEEQphVyosjWh4D1sWrpcMxDieKf33okauPQxAJ1oXV45aQHDhLkJ2a5nkDJUZbiQQEJDsEqVpdPX",
  "key16": "4sLYFzmtAQ7j8gmQwNLm4heMq9nDFPVbVMXLFCQxt8D2PzfktZyprUdyM8CvNBFgCzaxf4xGrwfbEC4VHzziu7Bs",
  "key17": "2D68HHVVmARhaNegB3DeeAcBMcKGyurLawhgkpf7A2Qcozi2VwBxft6W664onLF9eZSoCZSsCUyvBMsKUQCXG18T",
  "key18": "72HLkKU6QFuRNho3DHBBC1DDT1QAW85GhW3JJ2UKx5rhTFRgTSNni5rEyr1cmbwMRiXPRnzJMMbazRY3uCftZee",
  "key19": "5jBzzVZ5fRrs6MMSSfHnpwS25uT5uQHjG1vyW24v7u2R5UqpBuCJ1W1NKqH7q6eHVr8zJxQ6S7cfpKur588KF8wV",
  "key20": "3o2p7w46MNu4pqDzPQvH4s3XKWoywRwLfE94P16p8nkBbDjzpGeQyextosQLuYLuygtkqMJMhijhGxkLyTpGChsx",
  "key21": "5nL6gxFQh72Wfj2tgy7TG7D8YPs4dQs9csd3bPBm1gbL62vbmfBRY63EUGKcm5YgUMcptoFMEcYyHYLGVzrHMKDt",
  "key22": "3qLSDuUoNQdmpDkjDLxk3TRhG3Y8rQbKWwVfxCbxJ6NsMdYyh2mEqH72PnNXhcbjk6r48R3AzcxNNBNHSf8SsfBz",
  "key23": "4SX1yGVLG6R3hETRLZJbuUZtaLmTXgPiaDDHoTu2Vda78Y6LNixgor1N6nqd14Ew96EbNmcHqMBNPQoRoJ6D1BwJ",
  "key24": "3M4MEHKXtqTpsJd5bDPvxRH9cC535xhGCJLxKDfyyQ4Z6wCdMYsciJkoCnJjWznTFCyGtbS9xpFpe6pqdBsYEzb5",
  "key25": "4pg2qeUjFvVMCWwv4u5MAq5m4AKYvdntkMGYtYVkZUrrARsRrTUFfwKFN2D5u2c6h1PCgntxKfV6evn4Va7HEVFG",
  "key26": "ngRX6fSa99z8Ys4vDM6WP1GJJxhUYXAJ7A5iSU4U4StSmHojCZs5rdboTSPKWZVPiN8mFZZDRrV5KxwyrfjrPht",
  "key27": "TvNsMxiPfFyREzreJ81XNAZYBCDTHL5ksUBYSvD3NjQjLWeVQ8JxNsyEnrcCG1j6wjhRu6G4jHN9ukF3PiXz4jy",
  "key28": "56gCYq3t7DzmoLUsA1kX6kq6Dfwr9kLZyXjYSmHigKwevQWVsmrwwnWpq1HUd1RRwvA73XugmVFu5zTvreeeLr2m",
  "key29": "4TKBdvsZXUGkEjXtFowqrpgdALyyd8CjeZ1uk6nMVLP76r3PsCp4rMLyabb5nqZPQteF9o3ecUyTkvSr28yDbpWS",
  "key30": "bRDqtYcekNr8TV6fWboDpkunHRSwAiW3f87NBXtffBf9XLDgtE7GSSAaPk1HzBwYd5BEMbawSFKWL82ADoznnLs",
  "key31": "enndheNVXrXo6hTw8czzPgDxgurproNVfTJnxoLpkNh8ekE8AY3KgR1JDMKAXNYpcbnBh8ZvE8RP47uWB3oshEF",
  "key32": "5Vm4qnV4ykvyJk2USCihE2qdxnafDur5ezJ3tr7MnW6r3rsUftUYaUysRRGYU5H9U5hgTpC5ii4tTa55QJJcfn1R"
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
