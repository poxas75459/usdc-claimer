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
    "3cAJyQJ9eYxAMKXuzMHPJWZJfMBxboeeNuScCS7MsbLQbkizoX3mEZJiT9BXFR1MWsQa2793vJQziA3fTb5G2fDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SoHfa8WwFDQmLJ6PGZcFYYpyWXZnZBzXnP2kkPY7TbWt2s9CXbqjAxA322mk6SoZTEdYkQTQkfRLUVue7rtLNXQ",
  "key1": "2rYerp8dYb5N5rVYrfjR8HkRjMRGfKXC8ti9of7CguCiiEWUqYbhUAx9DcCRPXx6DVfbBFk5Km6KpigRMWJvcpYJ",
  "key2": "42d7fq3Beo49UTNk2GY63aFwkX9PjA9zZqiaTAmRpkZ6Dgez32G5ydHFxHJu7W3Z5ubExVtWd1TLtqzGyPwdvWnb",
  "key3": "sN82yAosv6ZTDzbLwcnu2Vu2Y1rsxosPTmuLEn7n1LfEm3iJfdgkEA1G7PatdKWPHa3T7rLfsi3rJRavUe4dTHt",
  "key4": "8r5uSLQgiGQv4TUm9wpMmrhP84EKHhuLavUewNgbN5gSPpjnzm1aZ1zrtYDD4BvBHvjfF5RgwPNwuraThXrRaT4",
  "key5": "2fs8QNvy7A5kWXHTcvDh4rAqzofRm4Doy1EoP6LcBaniDHdRgUF5UoTGGYLzMhgkNFGyQdP16yBRot5M8UoNWc41",
  "key6": "4yqSf1cU8NP8KLmc1Uy4nvRJ15CVbNRPiUnrxFWnwNmtYqWtwYgd6or2K4uKfAAr9Q9vCCPhrXxkQxhGwUZHNHT1",
  "key7": "3sADfBud3f9DYgPUiLBPo4kGgP1cENNFFDNFgGBy3smnLTFh64z2Wa4Nfhm9NAGS7rMCnE6TnTXUExWLAdQtfsVx",
  "key8": "5sFoXmSRXKjvLmeY6qYwBX8yzF17QTby6tPYUJFf9ftVgwW9EuUtRh64MWAvY9JisTiYBWv8XuBKQpFSRGAVYTkZ",
  "key9": "3LBqtDQntaVkL3AKiChCYNJBGuLfk7qg5b2AMVDojP3NTgoLLFv1Ypwy2F293R72LQdAg6XRtLuFMCgYrxnYSnZb",
  "key10": "LkrrBdVbut2oWWtYTRahxaNeDDmtxrgL8NkTRDps7LPzM52Nxo8Tw3S63AebgxjUtaPV1ioTdVqUgsdoCBvMPrf",
  "key11": "zD5Sat4JWhvKCPKjcc2EUuEEs4UC8q3AJdpN3hLzTQF9p8eojw5jXpQFxUyDKWwPDX6AdgFwGwJj1J9nBnZVxF4",
  "key12": "4sBNwFgUhZEBtDgzzH1k7Zfkdg2qSTD1i7MVx6ssymzkjWi8C36EzR333wV8iSNfmWP4QpKz1pFXJaJW8YysZw3J",
  "key13": "4zu3ZAzAmMXkGmLLZneRNGuwqFtF8gvYagLie39dCNWjGfXRdrDa3xK3XvVf3ajQHWVaYRqrQhYFbLxYsF39quAf",
  "key14": "5JErfnrNDQBSuFY6bMKivRv7tvTjG8q3GaQEppgW5KWnWnTnjVxtUzs6xRaiEbzkgziemWxAwdy4iUQ8hoFEXJRT",
  "key15": "3Sc4wisRa22cVJBa7T3JNxHUxD6KXLFS53jnXxZKrbukxWApG2jHw2e6UFiCC8K2P34GYW4NmJ3yqG8tVudiJ29t",
  "key16": "5APapRAWw5PFLNvvXc1t6bfQqdhCdn9SQTUYX8wEsWQs5DAsHUxtjXXejXz5h6RLTQWbh3k1a9BkXoMEFzxjqa3J",
  "key17": "2aeBv9DqAqdVqC45HsNxY8TCvLmKda4Q5pkbMpXsKaNNC86PqJgpiMVojNHnJuc56uDPrWhbcByVnA87kUEScTBg",
  "key18": "BpVMPxmahsTh31V1FcvjjZ5PM4Re3ZimjoCRQ9gy1yzWVbz85WGpXUZvZd3usa4Li8679RPNqSAxL52HWxxH7jL",
  "key19": "p1m2Jb1dmPFi97GG5BMpN57kFu4eqfGaZpL5kRX9XQiyHg12FJwnKDJXNEPURXBdJwprFQFkqFJ5uPcdFuiXPmc",
  "key20": "zwkU3aYWTdQHFsVxGctsrDhUDeEQxi9PR36Exc4dXgV1cusrwqUJN9ExQN9tvJPs5pgXoekv5Z2QuFdYffUDBS1",
  "key21": "56DR2ted2yT3K5jVWRZLjDnumuXccbsrDUZmK3DC8QEVGtmJLt8G8gttZTgPyK6W3zhE5xa1VjfXaUeXpHUhvMMJ",
  "key22": "5RjaKHxZQHdBz4CkS24pLGxMnS92e24FEEjE6D9a3dzspkxxcghe8XEN5MvMwUgfDdUaKFJWeW3vU9RyVE7bGzKa",
  "key23": "4uYDodvYawwmtNP2AsJnhbeamASGBNNd7kfyt1RBY3gzQzLLg4HpFbDiaeGpqrX1b6PcrPNjhRGd1b17fkTv8ivK",
  "key24": "5DNEcnCAMB37nMeXWPH7Hf9QWmwzj4rsejkmQRaNKEFmDkQ5d2GjepBmTbsL1WEDTmHynkL1tqzLiWm391oss6Zo",
  "key25": "5UfH2LDcFwEdg25XP1GDg9rCt2RTguJJ1M8TsvaYC2nQC37p9AqYm9a7mfjHuS5dzCqyf3ZeDFH1ej9FqxMi2Qv1",
  "key26": "5w8i368mxgoqdt79p7LfhRwwZDSuLWraVMjSgfKHcsDj1VeigukLF7KYcda8n3t97vMTZosZVjcgJYxLWjL1vtCr",
  "key27": "3wJjjjdGmkvSDGvptuX93kvQCWcD4jpbyAygTSMZUUwuxDnBn6zNDieRChRd6s76sVWQYV3uCrDirX5VXK42ip6A",
  "key28": "3DmZH5V5vtZvpCSS3ZPaEVc4GGP5529H57CVpnymw48eJ54qoPpbAYWvJeucST3tELfLFHVa1ARdyKcpoCVt5Yn5"
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
