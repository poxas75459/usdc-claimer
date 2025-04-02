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
    "411jmp2GMcazZnTQpW6tgkkv9bWBEQ6oxD8o1XAsVH4kXGEsWbhYX1onbYNuWdVBLQmRjXi8knhWttU5sb8YFY6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DSNiMBWqrHabraLJ92mjH7SKVQUVn852iq9wviuRq5whAqFo6ubnwPJpL6THAw1MjyyuoeSxndH4Ksb7D5cj6o4",
  "key1": "3Lyfuc9ufFs7ch9Nn7bndU2UZakhh5LA5X3nmmURq1roVgMG5jJPZcyn3Qk2b1yWGj2CSwHcYFcv3xCjF5H2s9Kp",
  "key2": "2zponJzxjph5GvX1qoNvZ1Vsm8MkexNJnTvoDALxvix8RVZuCrgpcLThahSrrG6N8LUbroNxk9iQV2nRZ2N5pW6K",
  "key3": "SHwN9YtNSUA2o9dNu1gEjmkF1s7dNa6ca84T38JyjnpS267KyJ919EjefHfR6dwiojgWQ4oVyqUAjykf6jE8n4v",
  "key4": "4uMSzFUpjE7wukqx3AidMJgqWarWKbduHJeT7gzke3XCg1PWJCx3n19j3sxMi7epRikBVCiR8o3X7faGP1C3J8hF",
  "key5": "277BqXwQa5SS1vNU2wmbyggeKzUD6ZLNnoJ3yP2UzK1iVXR6pKJUMmMWBgw7dU8TdStrA5QKL2oj8cM7LQrwPWX1",
  "key6": "374L6Qm31eDdoKBtsktCTft3PWZnsVkQ9YdZaEw1wK2MUUC1BAPhFmkpZ4VrphLvkDURbCmcWTj4pPTmJdsph9ii",
  "key7": "3NBaEQtRoesyvhWxdV1xRZPj6v6gL99KGUwyWivuhAGAQ4B44PvnjdmuTVGA9XLEaDXKw3aTKrEHQ9Kkp1cbFHGs",
  "key8": "2S1k1JL6sDMcBnYa6EELBoqUJe2NWcDWVp38PGjoFgU5w35xyJJR8o23vh7esPVN2oaaii9AAnRWnXBbBw689YCA",
  "key9": "d9zb1NyjvXb7ZoYHkEn4hBCNafBcX8PiXqiJKMS5o8AYCRTQTdDZk1DrFi11vT7YPrrxCZDa9oQWoyCFSKwKPbH",
  "key10": "BPDeSdH89oUZYYhLsZfVttsbJp8TCYdwmWArau8p1T4pvfznXxkaRgKiwnZ9gFfoqWWFbse2gaHv4dV6SfHbLhq",
  "key11": "2VuVgAYBaixh9C3u1jsrAcCvQuJLc21dwjYXPrcNYk5ZsLBpZeAt1xAww4cqe3XDufgh3qcUu4CvJziS1DPuQKv",
  "key12": "2uJks6grUwEvkFnDy775HRTLT1jSvhJgaUoox5HVs6LGTT2cPpvJy29f3b8V28CSrMLzrrfh4LMn5HQUBEtdBjNv",
  "key13": "5Rh6U3ykreGNqGVG8dKP1VLFqsPi9xtLiCaYHwNcd1x6eTBWLwrzfCFhprJshwW4a4KGKsRaNaSTPaj57JNUQU3m",
  "key14": "3VQ9dnMpViWaDRRjBQ2X7oVuHgZ3pxxuz3jymtFqs3gWRN9QaMd69A5Pe4cQak42PcSCvTYKC4EbSi9UTW48sANB",
  "key15": "5yj3dZvXwgi1LsvMjWFdYUieAXnL5koKRN24PvPg45H8vQSEnvxL2r57GBdQU3LvvftzZS1oezwJZ2WQ4HBSUzDL",
  "key16": "38AJhwChx1Q6jz82PcfbXNyyT4mmGUq997ST7MKwJKUnASqCPJsPM4fH8eiC1ej3La2nhUooP3hesMCkmNqySx7U",
  "key17": "35Lqmb7qc8diYkDAHEjd23tQdN9LokSBzRViRsXHNFyDeSUFKJrW2nfGrDQEYDm1ExxZPocifRtA6Yk5uu628pun",
  "key18": "63fNFCebUNByaKAwXNZvxBZdEYikFe97rGPZLUajSv5w3UTaSHE8YxYFxWzdfPKE3HLGiY67eDGagQuDby4BKGGV",
  "key19": "ycVpX9zYJMmtYSJoDMDqHJVRcFMPTXPENQuLBeEUa5RXcsc1ivA3gom33c5MNGVqMg4yCdsqKUFmc6VFiikH49o",
  "key20": "2a7i3oS9PGtAnMkYaEuge8Mjd7YPGDokGda3XWENFJWhQ2YZstuF976SxqBW5Ny2rUifcxc6bqPjWH2thWuYr4K1",
  "key21": "4P6u3WwrRZZXD5cX7cU2ZDJhmtZN52NHXrAqnLG4TZLyWAb4LMBewz6aqgQsEVaspXwqFdWTbGp9GjhhmVS9E5Rz",
  "key22": "2uMWb6K4EHYws7Q4GqqyLS2bXTceMNBZchgSuZR9PRNxcwH9XpNSgYTfi9Cji9HUE2kB6mhmF35hqbSRsGdgMARZ",
  "key23": "NFp4gNMNCSdtXVRudZyqWqfb2qbLapD7nGYe4Y9X8Cdg9winXk9h4fNG664LFD5eYt1DuJqzb4vMN2E7GrKhUMU",
  "key24": "3Et8xSgCEKSpqQAALvPxB4gEDpE9XsX6gXjEwQaHactD6xHErg73awahrvcBmKFvzWJj9hqNyU58BMFQsG4PwkKd",
  "key25": "5AEQX1gfgnvmvDWPUEAs2feL3DDvZBnWaAmMvLYRzCGivS8SKHAEeCrkJQvwp9p4sgciKECAB7S6kkKGaEwt1orW",
  "key26": "2MoQ85LbSfq9xHDyWJ34Jm7RppAQuaNzMLowWnkWdUe4gpKNnBTWV5ee4tUGYjiDkVREXSiACePYzQkp52tHAYGe",
  "key27": "4NHuBGn8rurUvLAwXDAGzepjiogxvwFF7xzCX2t7SqycCbwr7iHQoKZWCsC1ZkDEvBXAcJ8gvGVxWtqrbU6GZh6A"
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
