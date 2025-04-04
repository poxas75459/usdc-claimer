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
    "4nW3TdFCKzq2pMxJVtRnpPTbCzUbrL415138YumUuBwW6jYvSbcobTGX1hnayDddG6iKG2mgr8w38P5DLYbgXgcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BWYShkbCsqLZDRMaqpEvDtnEw1dGy8bQmAoRDvcwgu56Bx8HB5XRwZND7w1dsdWupqD51SfAzxWZwFQDHKVX4e8",
  "key1": "5ZugAEXERFk1DsYpnhuoJ1497hoBnG7kLfAo7k37kkDprHiQrAyPm6cAEQN8zkZ6KDj15GubNA3n79616tBhiabw",
  "key2": "51cTgJJymiegPWD7H7rZBMrBBhng9iGciwyZgp2KTDN54wU6sJjKjVectRzGrBQ44hQWKFpHVwa6ogKugf7FzZ2G",
  "key3": "5gB928Pvz6uYBUxtQpzAuvnzqM4tCX8bQXRv4ZFyqi46fwuNFYjecByC54iWq64yMqo3g6iAg3Gdy6gwBFdR6aGR",
  "key4": "3vn4tYAwrYMNGCNk2WfmjPfWWGM8UCt22SEmnXBYW5T4x3wveoLLLF76xWCdX7NBRvcAKbyWEz4scCBPoQgWs53z",
  "key5": "3ZFrwKxn3R9baTY3DrGYFuJdsSps3vfgaJyTepFqTDV9q7utSkmTKTC6R5j29ASu4GujtwKmsdnVikYXdrxxC3ov",
  "key6": "2KeANZazWfCq51oej4n3kHdSVnXuFWh5MXeK9fbvBG5HLqnThu4fSWiofjpmyaauXNYzxCgX59qUisTSeiWbzAQS",
  "key7": "63PUkiEEv9tN4fouSan4bgJrDHJAUtptzveao2kEca9RLqaeh8aEQuv6HotR9Nxwrjv9jNpTZUihyxXX5hqmGpQ4",
  "key8": "2EUdfQp3PDqqPenJq5qYEw9rusK8RQhMPpohHcPp7siwb1qb3UmGnRyq5c8z24jy4xjQdfEETEfGmDzVeLUzPNWd",
  "key9": "5ZPHnCsNpNewBQa9ZoiBU4zAMvmfevbQ4fciok2xZBh1yndy1aG7LQCLcLa13WEujHrg6z2Akw1H39WeptAycpSC",
  "key10": "aumyuH3DBdTPLevWrzNg9RESv4Xa2r7CnHw96Q2KB9f2iysN3smbowqkc5kCCsX9LKYBdikGFYTBrzLkio7Jpvq",
  "key11": "3vyPRSaDyPjDLTJX3ymzjB8MwuVAfys3ejEu534PbkQVxVmWTz3NfPw1whnYNZvedq2iUra8b61b9LxvxQPZuetA",
  "key12": "zy5N9BagLuDsBZtUkydfj71JsBSENrz3vi8WPrMyg3K8RWQZfThoQNTEcPFnHE5H93ydQGVHenCz6NA3B6HZwDf",
  "key13": "2AQ9zfKxfWPUrHhXPaWC9puGhE7mU8S1nrHHC4ja2dpYnVmvuFwrmTJUbWo4n2WaZgKcomnUJvdPdm9sK8tRMAHz",
  "key14": "4RHE4ZmPtU5VJzybZHKtEFgNfYweYbUbYpGg3iXHxZ62X74LHN136cGfYEgdReesaFTyfnzqUvYogUUDNyovqA8F",
  "key15": "56LreX3rBx4qYV81BDMMyf6bTcRc6Hyz9fSo4Cudh3gdPegGzWu6KquXJjeUdXEj5sgToYTr13eHz75uCdYWDJRZ",
  "key16": "4vKup86tKzoK7twuUrUDc7QdSTNSqT7RMGtvw7KgxjMYnK1m7Vj5oQY5UBjw8AffctWsQJW9aHTXyTcPCf4vFyaq",
  "key17": "5TpFb1NR3ViTEwM9puAXtXCQpE1Vbx1kw4YFrsUshHUpwMbxddcRHRLsfPzuipNyuttm5hZT34QyL5bgNeN34puo",
  "key18": "cHKVQXC6RPGZLV9faB6wQvUE7AriaDB3n87HJMbcDskhZK8kukvMJeU6hvUQSSuY2gWY7dcwDqYK3mJvArVQzhF",
  "key19": "63nLcK2s7AFh1pUifYhq2ihKqFPjPY6bewGeP5YhrwtGP73jPRgvDoL5ZigqhS6NfzgKku2GZf4GEUZMztMsghZX",
  "key20": "61q9F9Nq32fU5YWG6YJ3rVWZwvp2BAwGLGzPmJ7HE7mEx3nujVdEDSrjtXNURfUN8RkW1FTdQ3vPJGZQCCENCbWP",
  "key21": "DhEMNE9Ke1jDtx82gNDKJAu2ynyttnry9AAEK1SZfJuMrYwnz4BBSFMqo3eA2uedUgzMc62R2XHNt6Kk8My7jLF",
  "key22": "4jDwA948xEiay9ESG6Qan52b2d75BnmpVHP3o8AcCVNt9yz63GD4xQyZ9V1kXLh1BKQ6h6LypNqWd5Z83yeMUo6c",
  "key23": "5L2mgCwg8xzAVQXHsPA1PWrsTky2VnEceUbAhVocrAnZ2gYeFvUmE4kWEzBqtvPh4wzvGiDV6pi61kx7e8Lc9cLQ",
  "key24": "5Jfs8KEAjcQE894a9f8ivVGUpm5ny6i2qCxEP9biQ93PnPXmEvD29tmJ1raRFdNwfaFCC33VFiUSaaSnAcfcvzHR",
  "key25": "26mthrjn6w1PwnYqmLmweepDetvYzc8cnGyTYqu5kyRtVdVf6G9dqRumHBbdPArvHibUbFedHvYcqaE7PtxvPTYn",
  "key26": "65Uyr8si7P1h4xfUfTn3DHmBRuto8Jy9fzKEBjSGdGNDdwHxNwGicaoWsbQDzALowLwji49g1cUYveYdvyf5rvnr",
  "key27": "4Fp3T8CKzza2nFbqnNoahqkHm1HkT5JpTaJw2s1QtyW6TwUw3FZMxTh3xoyDGtqvxpd5zpHpcqxLm5hUkR4gTzhb",
  "key28": "4j9rQvkDTARoFqPB6diqMp27Fs3NWDqRf3M7RGL1y7mauxD2LZDD6xTQtYzZFsnTSsfo4cuXii1WG8wwAJNK1v4u",
  "key29": "5gv3PLiFzVoasfTpU4pzYW8UMwPWXNN4crWmAEkmxpbSkUo9kz7siGg74Eo4577pYRhPq8dpi4ikswDtWqjcJAXd",
  "key30": "5XsUKSwF1WiGLjQ3z3fXyXoJWkUQ1poRNPQYtBXn1LJ2364cu6Bw2A7tiTuKwuRovQfb2o37RsojhCP5x267QEqs",
  "key31": "4U4BeaV3WCrPJA6hBVrE3xiMoWbM2RDmiXFzNMGY24zVgbBTvVvXy6XGNcMXVxCLLztWY7qW6GzDL8j496NyQRha",
  "key32": "4JSZQcXRCBCigzzjTqAbQ6jbpi3XYNMDPJ474QhwRPoG9QJDNsxmNVkCxbaafHX5CpXSXonTAmNJGadHRrEKdzNi",
  "key33": "wXURXXLo82ASgh5yxYUzzwKdv99nN646kVHkRPXyHvbfeXLcazyq3ntnmqp46aiYQN37iSB5WW5u7aShZiGqzKX",
  "key34": "2uADjMuN5nFuSL4zY8kzYGtde7JN5isNApGvhs2o4g9Ekxg6iEACZEvficKs3VVm6jfJsvujpBNkrrTmKyNsKL7y",
  "key35": "D5fPAp3L5wHhxryski8KStyQ4HMtNBNQWv3d7ri1QiTfLsb3qfCykDU3Ni3A5wW3ttCwKuqM5NK7W2Vj4u4m4V9",
  "key36": "35EH89FABFfb2Vx1jEfbBUR1ozdJZsBCvFnuLcCax4VFuapfzfYXAooJDNT4yddwsqkvovq22spPcbz5pVCRbY7t",
  "key37": "37JV388a7oBfiGwL1H8SzcLiuApLHf9HypdPSphEJind12GbkySx6h9JZBpFZHEJeXBb94P22uXHWWLVKxfU1tjd",
  "key38": "5vULRSc6HE4VJ1cEkKqQDauLM7szuRryFWgvvrvfzCgc8nGT3VVut4TNKfEMPwwFwdfB7wCduGWekqVfszs2ohzp",
  "key39": "34viigWToQSHxRcS3KyMB837Yf3fqQMMsWFkR9j7GzLBUao35GfH5B65iHMeEaATCJ4upCiqRtFuBYysp1QzZs1k"
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
