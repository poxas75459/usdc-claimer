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
    "3559iryi1ZRu1o1Fc8BYZLEBqCkByqNERvu4NYrGZYJRMTJQrXn6kgeyYcL8i3DS4KrF1rdtEdGUnYz19uRRVeUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JsTyZiJYV4KBDMCMxRevWvHv6W9eznvchb1XXocnRVwh9dtjtfh7LTweQXuU5ErqKq4yNWCnzwkdAp9mP5iTMu1",
  "key1": "4rWNE6JdcCuo92EWSww13DTP6qaGNat7ccJRk1PiBofSZ85FfNjyNUJPdz7BK3rBe9GVpDqvNtUNkyis3PiW9gd7",
  "key2": "39D9hcBrimWRekb5S5M6RtmFEHPjyNQTZvvmZYeBMxpjoWA66EXFs8e2LyR7zz3YFRgUz9D9WCKQfhQgsFuNud9",
  "key3": "5ukzudXvzhvg1FF84HBbA3WLNQUB2uj8rjVL2zDA2DDaS4k8UJcyvfv4QhQzffTn55heDAzxGdiFL7DpZbaybPSY",
  "key4": "3e11gjUp7r9ueis2852tapHLsnvwRE6kvkjgBQv4xVWjAU2c8snj69c7D1xUD3bi3XEyfPgW5nAtyJd85f9sKZDq",
  "key5": "4fpb1Kkj2boaA2DnMFgyjMK39VQXzkXWTHxtDybrVazY56u3joY7qGsQKx1JFqgXqLy4Kij1FFjQMKD9E9ohhTqY",
  "key6": "3poSUraGqSvfRs2YXPJArpfV5Z9E8JiWAWd8voHFCEz5RSGeueAVJD7CQSa2Som95MybGF7ouxSDpaFbBiMz2xx1",
  "key7": "5N51m9VicE1c1htXE6UhMfr3foBPVQMfiikamBrY1NbSzzrNJtWGAgbTLgxWHpHign6rWUrvTSJTCAEw8ddMDhVM",
  "key8": "4vZnsTC1w6Gx3xPWEJgC9xHHAQzJcfmMtY4dZCMojm96WTGGHU6SPNa76ytHtRJGnkP5PvLoEKaELsudAEMtDSQb",
  "key9": "3djBLk1kFfrsG89rbrYX45oPYGsVLJZnfcZESkEKHA2xnJqQNatsZvPsWAorRhWLPnfhRSvAry4hYFY61Qikx6dX",
  "key10": "EYUDKmxCRHWMKiMoobMrdBGe74wgBGFuZasVuyQyYx9TxH2Jv4bjkWGAn7yAom9RJArWKVzM6d3cYMvDjWY4m73",
  "key11": "4KzDUvWYtRjBgpTsasZDJGGwzTcggxpdBnoYwn4wbiitzJrs5YUzVagJa7J8VQsdjuot5jbyhHF2wzQ5iE4N9yo1",
  "key12": "43QntaxpEHuGp7WgBkY1YXtYXVmo9mJwWR9pvJtRyVw8ftUsr2Am2FV385pbKxzDdtoTBZ9y4VL9keXrQXu9E6Hp",
  "key13": "2nAzyytMVWd71dkENDTtoTueSRoVpAiGPfNmau6uvgHPj4ComBvqALjvf1rmBdoMayNFdNJPaZsaA38ccNbxHENw",
  "key14": "5n8Etz5CAfEUURY9BZTGEe6pKmi6c6gHaDmhzaK7CE979n5s4DE45jqfQxNUwKwchbFJCU5ec9vJF3JFzLv9GpJU",
  "key15": "3wcZ4gRXSZNd2TYoW5g47hYrQLTprNUGX6iUoA6cXnAV9MDb1BeDtFdBxTVeofNBV66bipiWFwUR8g6fVW12wyhe",
  "key16": "4UmZk7ZHz4AqjcnReoDEQ5hcsaDP1M2dc2V37YcwE4vB3icRStHq3p75yFXqxbamzLNMZ3pz5KdLGK3ffbH8cRaR",
  "key17": "3gKqepfhEVa9UiCoG1CpSctZf9Bjg1kqauzCWp5vazjCnoUraS39qcCt67REkFVLYJ992Y16Xko23q68KN6GH1XZ",
  "key18": "2eGZ8jzPFdiBbNoV93m9BfuJY55s9JHMGEfAHmvFhk1fUqN1LwCNiL93E65bhQF2VQVjURRPv8qeNUJy3es9RWNz",
  "key19": "7RGGpELUAHCodU2D1ARohyhHH5yzQmNQYtUuQwnGg3R3ozNqFddpxYhSfSrwpXe5HY5mHUq1SXUUzy3jcUqwo57",
  "key20": "56MhqXNriFXCQajWBX3KuSCGwdvre3ybWSvmXrs51kUUthvuyzGPhk3AC9A4mswW9cp7C4oTW3eFz5Lw3p6NqUZH",
  "key21": "5o8Q34yBh9MkWxk4hwbeTM83u2bTBr8YJrpDZprr4fE9h3tVb8Mrtp6NboUt3LdVhvK7tiBGksg8Xxmu61wUFm6r",
  "key22": "pNCsNuuLcevzjk9KfAJw2X3qNAHkeiSConRwUPrqoHXTbym1ygBrJUnZzSGPA1ANQ6NhcCHEvG5ymoDgwUR15i2",
  "key23": "XBswnSYUMz3r1icRzRYXUn73CWYMW6r3rxCfPAY6duFNoYpcksFZxDLqXiu286TrrumVxipzG5ekXWKVpwzj7wm",
  "key24": "4RaG8ZxwLKLp7agLFxvz4W3mJY36p4dikJCrwRzApDxYz6GCFJh2LvSunLgV3vw3qCww9U5DoKydMDiKuoFK6fdJ",
  "key25": "5BtpE4GRS75dfpEzXFa9EsGxteuX1efUQgdnCg2hgqSMWcjUf4nwygqUarHM3oX5GpfnLGpY4bcMfqaSjoR833FX",
  "key26": "a6D7Xm3Z18Coj1cMY7AwmVrnsnqwjevjCH5PbJATyv4GnQwTH4Xh892eFeywb4gP3RmQYucqmzjdeNqFWzCuupp",
  "key27": "3iu8kHUdP3YF38SYp5ChEkscRG1ZvCP3nprmf1UPckSBwzqbbSVbNGAXmEV7uQJSoutA4tmjR69aKF7uL3bsksmP",
  "key28": "hxTwnzJg9zjYvVXYhqEdottkWvGNEm4PfsUgdPEKUomeWcgdxABqHAi4C7py6Z3Zc7PUmB3ujJx4G2CWwyDX4qm",
  "key29": "5wC6PDLSovigC2459oxQeNEd71bc9h6MLFXznvM7hJBb3Qu9iYXz7Kcsz8cLgRc8WukdSBH5hgKxXCTC4zjyQT7e",
  "key30": "3WrqWYJyugikVVvjPvjWQDqa2MFS2fCPghiUPCsSS3XAjMaKFXSkuJPBNeF1HE8BS4NKxCFF3CV2Cd9ik19Ps8Yo",
  "key31": "3xd9n1F97H1MCayeP12BthhAXWAK2e7JqAnVDkXhors3vgZs8unZaWFwSBZg3PxQnW5moRVtXmFNP1XTbfPPMnco",
  "key32": "2FxhrbsJycq5m7FzV79kSD6iY5k68QLRGkhqi5PMQmymRsLLBMf1cU6wq2h6YU95eJEaUWViPaXCwrf6wXqbFgeN",
  "key33": "23d7f8gpJoNLrmtKvxr5M1odomEKEzjqXv5VhvBgnqcHJumDmG12RxsuGM1Rz3gte3W4BPLw7ze4mwYQjBrpaLtn",
  "key34": "33X9yQgEmHcKM5GnCH9SM3j6YTKZgMHNBEdaduSh2WZyZt8tbGoALGim3iEyczmmm9FFLra9MbLrfdqb9nHKXU6E",
  "key35": "b1D1btGMyNUzveV6Ms3nKmDThuSamCTXQqMZgq5emKYfvKhyH1LnzB9wVniG8aX6pq5wuhqYsfRsxfqmbureV52",
  "key36": "4qmwPb9MNFPTzikTL95TyANbnpY8Zahsn4ioqab6X8VhYnNonfNo1orA6u2jZriB8UphJ8Siv65DiEdpDugWo3xq",
  "key37": "2GT1fsxY22aza6uqVJwz5mSwhrPdGLrmq8xme7Zo7EANTVPAbRhifodBc1DXe2ixqokBfR2Kc2nnPGAwVvJzeEqo"
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
