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
    "2cD2msMPPA1wJq8jj4ZHf8AmzZM361QfKNvdp4yEL8ztwdc1Q3AUUCrDeUHBinpmdJAoiBDsXHgkpDh92JEFuRgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ygdtiANcP6gPjfwiXDnd8Cgx9maTefJ32LLoKgfbf8xPeFwQVK129gLXzB6JMgN1iXkHHcdQ6p2MayoJLKkVnxF",
  "key1": "3LWxe7B5tkzTjoviAMYgTha5MCnpuCrQjxG35xKZ3XsBtzv3rZrhzUr2KiyuaRFzkXaA9h2XzKWwSSTAgeW6dmmq",
  "key2": "4YE3S39UUQruKa1WR3KhFjwE7dKdCGuqp3QYBHUcQBfk9BxrtSP8sTGisbHPZnSGRMw5DxiSaXQ4w9nfishMCZ2K",
  "key3": "3xEM1a4iZS3ueSBVcyqvjV6BnFH8DrL16fWZ4dV7cxSz433QT45eBe8yu41fw7eMsBKs7K1rXEi6ddxGP3JukmqF",
  "key4": "2DhSHN7zmqeZA1Rkof7p6hu1DMZ6DPxLCS6qYbhRdfppshD2NHgSaRZ8EpyfKguXq5N3xrTPiawNkcFM7Y6Sr7Rh",
  "key5": "AgabPR3jQwDa7wK4LB2sHm1nAPURVK1zfDvynz8f92Pd62Qbq9TYRzt47Ng1ViyY1oX4DPc8NYiUnU9HspDbSu3",
  "key6": "2h13n5hFwBjRyUHrHYNpjdFc5Ticrs1SH4jWErNaGHJ3HBPhcJKb5B9ApsBMcu7UNwCQMGUogAW2qw9opJQ4jr9T",
  "key7": "3pB4JcrToLNkHKmPCD8VTPqtDEvaxy5d9Si5uJCtmPxsWa6zki1ZjVxeZGdfLgViHZvbN5AoTz6MTeLF6YoipWZz",
  "key8": "CxXnXaqS1vMF1w5iDJebgzwYDDFtmscfRayCw2L2qucQ4ZGbSWfAThAT8rTRkkQWWvgbaiEeju5yeJuxkpi7Mya",
  "key9": "5b7ounYKraLx7bpNhvFuzrGdqrE4nB8mKtCUKwAy1EtNrBtWrGQtEfBkFLvZgu91BNggECugxarUbYaL18ZA6V6q",
  "key10": "5NuULpUQzvfhiGd8E4fcbAbD9iEKUifDA4ZvZXVov8YB118LJqP8JQnsttC7XMTdJoEDcwGHDauVS7oEnHtDbk2A",
  "key11": "2ShXKoRUCnMEMgNwPQv8gVfFQuPJVsLsF5woQcfkLF9npeuEc71gVx2yVJqaHi19dEX7381De8bV39YcY2mi9Ydf",
  "key12": "2LhAHQSDYsmCZL87mhHYKmjQFX4nV7sTeU4eaz2DFjgrzWBdUAAaPyJKFxpJiVWhGwaf66nhKe4kzEEHNmqRneUc",
  "key13": "5owrkZPNrnuufjvpvxiDTJ6owk72NN3LcFCSbRFdUNUCtJL3EWMhRMfQjK4kdkAnjWkLJ3sdDqtCgUzZqnnfT7KM",
  "key14": "3DSPTmVPmJ61t8hotxicPjQvyk8Y1hpAHTgR3wUf7pWAqw6FWPBZEHX8iHiSPsxorEXYbArDUiCQNWP7DSzUQLXx",
  "key15": "1MEAfqNHV61GCJJaeka3693pufhkbYNaRBz4HP4TrDEWX8HLM5DsAsLmq8b9PvakuDj4yyvkfV7tz8xH9bM7KQd",
  "key16": "2NMUcHxG7vfpVmL3gyiLaLR7Z4oQitn2SryHD3ZuYTxU87EFceJcVwexJ6Zj8sZLXFifgzhSswssygKTnaAXHYgE",
  "key17": "4Uvuf7QsYXM1uj5RsHKTRdGZZrCGFtAanU4MjR1YcJcCg9gmsd8hYKQikPGSJ5X3faBdVUj5q1QB13dZkNq92oeU",
  "key18": "36kcu6GanHU3XHzpsaG3ExKdr2gzBB2avaFe66LTaLN3pzc7EsULM7jLam7Qiv4GJ8LdZ1RgeWTycTZJYniHgVUh",
  "key19": "2K3KJZNUq8T8GiAeYpYWdKT6Fsfbd8jYNF7MxrpX6qZoKff3mYxNxwphP3vYFMudMDrR2TH2ZTTbz4DCjAoecUzR",
  "key20": "4z9BFgGpeMR1ZXAehhJ3WPnoLFN1vXkoPBtiqJRU2rqiM4GMc87udVgcnoU3rc5x91vPxtCpeYXWXixtea2rK4uM",
  "key21": "5gxxdmHCUFesurcsWmDfGvWsuyViSmffg3ZM7LnZvmZcUVtBYGZtphkzc1Pj6nYwHZLvtwuySvjP9Z6Ki6M7VFuW",
  "key22": "4P9nxgtoFDEoSd2x9nSCLajYDeGSpVq4Cvz2oT2V6DigL62f8rfkiyMWfwfhninjstjSn9VRAb2ELeJyN2kM2t9Y",
  "key23": "EKNt6udszNhLSorqQNXxSkAwivmhYL9bSQvJuK73FCXuNhvNDeKJWkVoST3YF9aHTjyWtSGfw1eJb6xTHNE8KrW",
  "key24": "dfTFjptaeQB3c6LDHE6necCqmEbm9yC4WcW4YYGG2pfQThmCsfJKMD9sP4SMAQexn8ENCoFqEHB9nDuQktQbAHq",
  "key25": "4esBTEuZQZKTvKKXtLzkor5GJetmUitiVjKLqaof1VRgYbGwduScdXydLwomoG6PEx1vDRya9Q2RwRtfekVUkng4",
  "key26": "5TtyFPheUNQdvE6HaGzguiS5ZSmm1XLUc9y4Mzde4kvx1sJKFRuqZLFraYFyY3ozmRHxzNgp2f7iKmkR8XQUydz7",
  "key27": "4M3NWPAyZostHWVarqMPumAngpoYJKCgxB3qoeqjgkp7whRKWhzwdusCHiH1Gs8R3sFRNNhhYctZ6rsuQMwtBWH1"
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
