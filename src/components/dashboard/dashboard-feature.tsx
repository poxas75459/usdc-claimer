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
    "5kWMr6cKSLRfXCK8CzbUQEJBPW6yABHCxezehvsB2nH9xFYsxt96KtSTDdHvZWfETKY6fv39mMYjDAkEKs9AVjs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oCDxtyGcz2hcm1AKhd8Fc6HjqTAJpSzyLXjfqtJEgu9TNzLBZyQASVhvNKJGRobGLMupZG6cXwBVq1y73PKU6Mj",
  "key1": "5yAnheK7ANpu8KK7QJbThZMKZEEV5X9pysWqBhW82vAz4arFGgYdNzBHL6opps5G9C19pBVr3jaQ732Bmkr8k71k",
  "key2": "2oAY3onNdpY4KtEZH3RYdqZ8BhgxbvXaFmRtLMaM3JchTAT7NDbNhDDMK4g8kNYUCbbKkaj8SWemFfBCjAtWcyEY",
  "key3": "3QGLkKduGWZRqqHrF7KbhvWdk6xRt1yKDshouqTRhe21RifBp1BC1CTkazaJLRZyw7eeRJ2k4PmrPE6fZKdRkNF2",
  "key4": "mrA8FimCVVguqSaZW38bSTdVR4Xf3w5a2VsMP8gvS3f99AhAYBHpK65MJaXH7w7ufM1bgmg4cSVzdEgrY1yuCG1",
  "key5": "3t6WbpCVYyUzXjt5KoRmt2Z41KLt4nVkvSYvrxaZbqg2B36fm8vrBbLLLhHPjJNZZbFstYyZTyfJar2KrMqTZYbv",
  "key6": "3Ne5nVHEM72t9Y6QpsLkY9g3jYZNxZbch5VU9m9uTdf4K6oHFVE4NtRVEkp1bn18ZeYLyUDEGETqKBVDYG3TMxMp",
  "key7": "3JnCQQqUfsxa11a4d2616GSxpXPmuJ4SzzpnnTtQgs5kuuP6N7r6KhJEJucJazjw2bajyEnr2mW1zFx5vwtpoVz5",
  "key8": "59xyE5xYPKLowsKvfEYAHtWRcpH7vutpEwZJkdnUnoCTp9KVquWRFWiAFBbXk8NV45d6tybj1cZ8kc3zpuPZjs9P",
  "key9": "458YwJespYKst3sCSjuxAPTxTuwK5HB6htY88oCcn8xzEZQiV4E1WPtKuQB6CukbxsJMZDSnjvzydXrDKnkQZuCS",
  "key10": "3icso8KYKCBChQ9P5RhHBrj8ayFDtpSqQRnLKBxojz2jrtGoAmHKFcVBQzLCVjtrGs5kpi6aSXGarMKmDeRLX76z",
  "key11": "43oZst7MXALicW34XQX1d6TSXHLnaoGzf3i2DKfHNDHuVxeZ5uuos5Z4H6kRtJ4b15sEZL7Bt5urV9tdXeZQepKh",
  "key12": "a8inEPGgxuk5wXaYWJ2KUgoSibRbXywoFZVk8axwLtLKQicXVVF1rM9NyFqT112gfXqbk6ScDuQ9zCPKrNJMXCU",
  "key13": "3QBFufUfAsLQeM6UtDEhzjcENUVatfcrs8eLZggwTjE2Rk69cVbnp5w1NF896hYNvhwiRBjgNFexRN12LKgy8WH6",
  "key14": "5MYpTFRFfbnBy7XqzMCHgZtcYAJeWdos5U8yp7dXdRLKgxrYtnT4UQonaiNyh5hnLtaykBUnvSH8TAdhFc52V2rr",
  "key15": "4RWTvhuuGSPFdsjV4u1MUHKAAcDw18u94rSEL2F2bdvDZJ2Jqv4mqvbysG32jH4PC1PngesXeQTpw5xQ5pEaoRNA",
  "key16": "2j1NeTbn69U7X1iV8dMy3nQKc95YM59KZAZjnpB2qDMkVatVMck6e6AwskeyVHGXDeruq5oBuxSWq7kfDSEKJ3Nz",
  "key17": "2tzFCKRzHyQfK2wvxcBFT8G4Pek8SUuFPqWQoZTt9VvuC5zR9q3uBiFpxwXGWyUh9RTPBsRRx29dKT7krfpsy3QS",
  "key18": "4hpDeGVg3YCv5WegnbSiw3yLkSfDJXVkE9R4WABYQsHaCAz1vsi54XnmAAbKaDowXaxyFZtms9oFrjuzXTeFLvQU",
  "key19": "3A5f2phBMsQiqsp94qrrgmQUPQppJv7fSXHfdQyNX8gXQ5fhfmQjJbaQkhMVkAetpPZMUuzBgHgKUrBppfSAg1V2",
  "key20": "4mhR4wzK7pE69WUG11BGsVa17CSQCuT1MCmM7TwkQLjU1iYg7YzE2KvGiUKXRNTB64YLgpdgrh9RBJ63ALcniA7",
  "key21": "34WQTW4pimSnATx1BD24hahzYZsMYSrMAUnS7Scxuwp36HnQENx6y9FLNeDuTFmmcXuH3YtZZk7iA5tGpjq9weAF",
  "key22": "kHDkKXhACq2CYqc3rgkVrxKdXSPEfkMaAXUrMtp8Z9LpBR4hDmg6txZTMEPNzv1AbY7Ft2tgst1umXDuxVFk7bw",
  "key23": "3kLDyUUXxc9VRj31NsqbU8efy6H3NS9KYXr2REjxpnwkBDFxFUWmYFvQLyRte4EbgLod4x4y92GrVmLnJtSXYRdk",
  "key24": "3guYDkysEky3v39G5kMqLaxFHPYeLs7YizpFbK3JTQzjjqq27TXvrjoGFx76UZJoqbLLquqt39nK6aoTBTmmEVYq",
  "key25": "2st1LyMjZKHAAzu1rCoKjmW1kmWCdckZnrMbk6VfembdHN7iVex3vvXAz4kvfe8LXn6ACxTTigz6BFqE7yzYgbiR",
  "key26": "RhrQrVJx9GkXjBYBi1fdanwDYBVsMkZiZB9gKALumwRbwvrd8skWTcddG9ghbdcFswGPYTMw9sfS6JK14qMUGLf",
  "key27": "4PP1ERAGGZ6kZCDzhxSabimG9pmCngaohD9gdwhgUqnYzudPaS7sYnXfZkeCAT1MjrssnhcR2bBAzJb7YtRojMJN",
  "key28": "2uBs4GnHhfuFLae6bpgPscFuy4zM6h4pNxDW28evuzGHpGWeoGKUcjHipShU1BvX99PFDxs41SunHBypsHYfMEwJ",
  "key29": "Qog9j2pvZAWkxo5UUdWLaQaiXy4zMcmvJUxhnDB2AbKg34opEt3dQvn5L9n3esNJwLsCapR2sTZSi5BK4ojBbmD",
  "key30": "3TB8YYySPwWwWWMyWUYsUBFsMsRXQz9g4E4RorLikA2XQciwyq23XkHvz5pyqFaRxWJGX86eZNyLJ9WpfLbAR5Dz",
  "key31": "2cxuGhCgdTwQCgUXpi8mMeoqw2VFdpoNLhXsc1rYabg6VjLNbq5KWrkauzn6BPytxwmECAP8zZpKoueFZ9Xf6uhE"
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
