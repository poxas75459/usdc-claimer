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
    "4k9DWsSNdCoQ4ETEQs83zxhHxFN7cpPcy18NeAAeQDSMySUVnbhvtELCnyeEm3XnUbm7fettiR7XHyxuG1ooJvtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WFh6Gw6VNqSEvPaXai8fPtkZuBpJzrkBfqjS6jwPQbgxkB7uyffwK6vkUfwz4vpAAa4u3dG8brJ7s2haTkepAw1",
  "key1": "1J5JWQfHzuh6593QvMW15Sa4kY6qcr5wusdrx4ejo6cmpyyKuepcbY7s5bwt8mhNiu7TGKmQaBVzy32gHoPhG8a",
  "key2": "5jHbwdA1p89TBNA2E4n96pnAy6sXk7gjprzfGrawSf5czxCGc3r7aWhsu4QmPMS61HVdKB9zxXg1WvAR452RuYfR",
  "key3": "BFeA9ZcmwhzRdVr55rMtWRCvmXwA6biPtanUXZKSrdHQvPUCYRMkwVUNSwuxkXSvkBQvKiTFREj1soMR2Zrk1tN",
  "key4": "6uKiLMXfdnZoQfAv9ntkTQArqQu1eBtavcLF8C3La4T7FLHUUGRVZkZDDXNDWL7Hb8isb2VgrNEt7A7Hg24S35t",
  "key5": "EQASYhWbZRjon3zso37nonATzheDfPZaZTdvxjNgcNFZNoXNa4peVq2QGUekU1rioUvDwAVLH72sTWGtkBdR6zb",
  "key6": "2kPhTtWU7B6SHWZmE2Sjq4WzMUfDFByzgeSv8mruoxVGQz6t7uuFmtba1yEXbNTBD5cKgKoF5UZE3gXWcCCkh2Bf",
  "key7": "RP2HNuQC5F47L5dwNzSptCNQ38UoTJRZ5oyaFtUaxW9boSyc43oqkqpzqYAWqjssxMGGS1HjDaJnsg3jVVq7WYX",
  "key8": "3qigH7Sn5sCge3vumjyrGaLSYAUsskxF9Vnn12CzenP2vQWDMyoZUW4DMVsFXkzAhwhfnwhrutZUS5vabB15Cec3",
  "key9": "4BZNvcYzwrbfXpAK8eLxvkFqkA8s6BepyJcfvhWekSMHGtV1uCYohwS1c39PnAittabbbwqeXnKoc7jf5SACccJU",
  "key10": "2anJLGNi5satEyhir7uJQhPCg7qcpCQwvPPJQ6bTjLpDC1xNsd8duPp3UsLqXSB2XoABxDeqFGhbgvWAdN2KsHdV",
  "key11": "2JETSJ5fzVrixYiXUPeHzyNqp3DaQAzr2JFUyQe3fEGmXm1twyFf1eg6YbMUCGD6Mo4WJcy2Za5TU9dVnnthoLfS",
  "key12": "2tmJJNc6xQBPqBtAEp1yDWQRyeBGzZDyShzidQacsQ2A4KnY4d547gsFwP7MHvb24Y6irAK1rCoegAwbVZYcDdf3",
  "key13": "aZwYERw13V7QkTuxr9yn8vwrHvgpeQbj1RBvwxz22LH9CjXZdxZaTbEbDUaKKA9cSkNhokNctTojsbgaRbjT9Bs",
  "key14": "PkT5XD4jXvF7GvhGLNRUqXvqjEE1o4xF1tpYcgdbFp5PA3FVNiKjj2fzu7nrzHE1MGnyJuk9JD4i9oxnkaHwkHC",
  "key15": "5VHLXLwGtgYaHVLQVZosy3EqPgWbgUTiag4fiNs1ECKF4nX61yz2diNa4oWvpVGCSc6DNKcN8W174roHusfpLK9a",
  "key16": "3ebkpz85UdadjiXxGtzHx5dUHP51jgBrqGLQ5jTgxiYqh7upVgL3Ako7d9n7gARAHrGspoaNcPdBsHYf4acEJVae",
  "key17": "vYPF7HY6id4HuMuSmziaNJgumCQKgrTPKtndpZCSU4h7MxSkrKdyTCRXKEsiUPUNr7tBVXycEaN2FrP7CFA4zQa",
  "key18": "39H4Rx8unEhq7hpvAn8LXQDFBeui1GwhCDhLacNwYQqD9GHZxvGYPZYthchyGJ2zwRUfhfuJmCMFGB4VbQghW1L8",
  "key19": "hrtoWjXXxGGp2RP5Ethrua8G8WE2sTPPbiFkWjUtr57ruE9AKZGAnfUWAYRHCQt4ZkUUfKkCdCGXT1hq9dMecKK",
  "key20": "3s1sLRTK8ZEdiYXe2ETkUWLV1moW2E5e3vWWV5xjEiQcZhYJNtZsGA2MoES2KNi9ufby41Ljs3sgCdhbbrWGRS3c",
  "key21": "2wXfHK929Rwx45VfgGHf1sqYDaXTvDVj5mMH3ChhtSWHuZez7kgNHCebrF4PCKzy5g3AfpAnbyhFLsrrnYSmbAFd",
  "key22": "3Mg36EfmnmnpeuVw61RMBiNqQ6tHw6JJSE636MedXBX7m7yPyoisjTUXAApp8Nb4uUESzdmbNJx8JCDJYDCZASzf",
  "key23": "2RCzYwSWUEJckopCD9Ctn3PfnwEkwNABrStuXL6sg7UvcKnMkgHyDN89JehYywxS36QyTcQSB6R6jFEygr9Ua6G9",
  "key24": "4sU4kgPAKTT5inxW6QKrvWXTrQoAgSR4r3fj62dnBXJiSpRkdURyqwUxgwiiuYdUSAriVKUNgfPV7L8dwmreR6dG",
  "key25": "2Ug4Xy3Jde4YaP1ZdfKcYVnHwu6rdiNDwVE7DP46vttUu1io4fSz35P4969ZM9ZZaxvRqz1N8P15hGBWMuWgQ3Lo",
  "key26": "46i41xL3SGKHhUY9sUZ1tsXprtYuQNeWeiRsdxSJ81S8So581hWGr6ecNYA3XyZn5BAGJHF2BkkpRFGsqzMNynj5",
  "key27": "aWHgC5ZXHAJns9tfSiCGFLvYk7z1Lt3B3zBDpwVpnHzJo3nufc9VpPBNBKEy8Ts6tCV9GG2brxBFE6HiZaVvN8d"
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
