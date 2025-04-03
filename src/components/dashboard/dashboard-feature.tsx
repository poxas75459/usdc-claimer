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
    "3WsCGxWkANnzGNqxdUEUu3DtDUHH3TvJvxtdURDqXPvfQd8h9wp4U8LLsZ2dGLaBDxi7bz6GULW9dHyBEv8dmzeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f7MKWAgRC64Jt7vdTkvovrkMKirYf4Ldx5hmrUXfiP9eFQ8CGkBGm9ivU77WTu7tAEDq3XxebztBh4baRcLqHqa",
  "key1": "2i1NuF4aFqVLaFhF3MMDFMRU9K63QE6Ls4tHGVuTsgbG3g2UZkgvUkqRTxopF8pWFfLWKeHwpFwZZxFh8HgAJgqL",
  "key2": "3T3ssM4mSVRUE9SZMe9KEg64aPYigUACKwdGsyXEswngnwuKMpQLpedzeXCbyrM5jX6Y37dMc31vQd19KSejcfzR",
  "key3": "2mAjM8Szkqhp5XevXYKQ4dF5AhhCiuse7Hj1HeZPjHRuvqw6du7ubRoF8WzZafF4G8H5rqvaBw6RUTyTSndRnMcj",
  "key4": "23rEw6F1HtchYNvNyUpkwkxG5UBF7NgTSNA3fAK4mVfY9wtCKZpJTHQY8riMH1tarZkULQnaPNeiUbnZFhXLzepY",
  "key5": "4RLubnxWiAgjneMhL3zsy7W8h9xAGyeGXsA4WP7wcsx9BPbu3aps1T2VUsszdAnBgQTggCVhHQuCf7tmshAUGSzD",
  "key6": "2SYGcCRoEMwNVwfdDEGkzR1Tq2bhMSnGpb77r6VmGjUHkdHGN7QeDJqC5VDYC1eACbTX6jP5ND58dtrajU7dzcCb",
  "key7": "2MAi85ChC1RJqXTL278zWMDGwRdht3CVgAEfQvP8DSmGFKmXH6A7spgBdY6zmrp5esp27ygSrAE1t6P1Gr8RKDid",
  "key8": "axVdoDoWzLuk7nVJPZyZYTzZrccsEYaf1SfVFsrcPkWw66JD9Yt8iXCTjRATm6MUfGGeLabtu54RQ6kC1jNKBxM",
  "key9": "5uiPUuwmGtY4gthhVwV1jDVfbPo45SRhegoR6Lzj4nwsWsvoWuSJ7CFmVTdy8TBYY89CrFjFNSe5Qb793sQ7HXmN",
  "key10": "2sk4im7qEiMh7LMggHtW7vKtGWjHnHZdaRfZCF6qiBkUr69LzTCmsB8GWizTMfUDJnsBEwoHpVm25CuU5FCDeZx4",
  "key11": "5h4W9mR9hnh9rftd7qAGUrQzX2zfNVmMqVEzBC4pvkiZY6j7UcfCsoehboWQPF698cz4HD3okCJyHAnXeMdidcfB",
  "key12": "53HwFYFoHyQggBrZNyj6g5vPf8C247ScwnvuVCRm9MfakeURVytbNtJE9dctp493ca8L78hM55CminLfH6V265i7",
  "key13": "2vSRdruoq5PAtJ7iGnJtjVAHaNoG1dMHVACKTSSfTq7N6ea8xEA4chHGE5L97JYoxDNV6oty1F92JxMXXx1QXeGk",
  "key14": "ZY9JGvWPMNqRGSLeSYYpkxk4sh4WFaewoBaZjUsSuTvBEMWt7MyxD4MTLnGKqkSugrar2LmB9q58YWaqtZDg8Lh",
  "key15": "4znN3iVVrX8y5MorYe6K81onXvgaCisYhbdANKqToNJHESEQ23eqgaypPp4cmsfHqPRhevSTHe7k4fTxvmFStxhw",
  "key16": "2pgsbzFU6zhsc3NMGCgpiqhA1uZcTFN2tz7oawYPGHXQdScGM12FHakeuoWvLWxGvmbFPWZFuBSbL4ovotD5WrZ9",
  "key17": "gpmbFXnCtXyhNNDaT3FttsjnLbb8tLxDcfcBcRs47CME1DyBf679Ze2LB7LYB1w6DuJsPDBJcMq939YzWr62odb",
  "key18": "3DqhWpnYrtMtusNb4z8yDzzqDZF8J5gEzG886JycLBquigrnTdGGdwPBD45dzrCctQH8mpjHUzi1Ao4CwnM9eatJ",
  "key19": "FMzckmmxrZPMefkfUgFHE9qyoo49wQmhZipBV42bJpzh7ePvEYPybUr21rHLQ4PQpjh7FKH7t24aDf1dzu2UAkx",
  "key20": "5LwdXKCK14P8ZBZwXB6up1DHEDP9QqDi9hwKaftNLipUQpYHnRMsDGwmGiwiem1aEKvdHoWjacsPyiYSPJGUwYQ2",
  "key21": "2ChJPnzE7HFGteVQsvbsU6i8K6NhV3zjG6BgEVhwmYZPqRVsctroxNZL7LWq6ipE2d7D7ZGgYNvbtkaxAJeR1xzA",
  "key22": "5AZs3qHr5fMoivF7rUa95EdsvuiB91XadtkBEbhQ1MFRGJv7icYimipuBAgZfSb2gpp9pk6LmxiyCngtT7Srtz3V",
  "key23": "4JtjkhQQkmuxZyZHadp66kpvwDKCBwi1Lb2sZZ2MdPNTc9RM2qcmvTNYPdtMRXV3Q3vStFVN5ovjuN1oaHggKZya",
  "key24": "4DK6RJiGeGUmMAY46GvbXpKoTzkj4noc3WYtmG6dBCfFaAK9hR9dWCeAyfNjYoeQyndMshUKdo9UYxAdddT6v3Te",
  "key25": "59gM2JdYRAMZ33wBZZJLWZS6R67iScR7rX3Mqf7MxeEFpvyJvWV5E9tpwTYR4rK1KQhQPC1Ejh3a8p7G8KuNKGCy",
  "key26": "2wTGCUVZjo37Witgqx523DDgM9LcthNt9UgpZQWgW2CgZvZFojpFEEswSyfPqrFzX2gwrKwTb5uk615Y4yGoDGSS",
  "key27": "Rm71nyHfrnAKcUcQqa1pVc81v4Gsa6urLyoZ1VtP8hQ5bQZteZDQHxZRwTPtXsqKAyLkkywtKhpDeDbpwUfiHXN"
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
