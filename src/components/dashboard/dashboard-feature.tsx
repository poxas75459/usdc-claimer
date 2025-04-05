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
    "3fqaJmypioY45S6A2Yt3oiKpPHExGFQBitRCoACVskSZFPsv8UWD5e7Qr5JxFR6nwEQqkGRTErFWjr6U7oW3BwK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3duBsgKqej3s8R8joNDTTUym4JeWKTdLzbxCBgf1QPzqygqKEeuZFXKQwTXZ7EpuF5Z5YH8Tf29wkNHpaQUyA5gb",
  "key1": "5DVNqKgs8JadS6UUmJsoRme387KpX2U6GURowiCEABX6aDMeTudeDzgDZovm51VEzPguNLm4xbtFTF8F5C9U4Npu",
  "key2": "4FFakSSobEqWXjPi6oVFexrru8qciCNnUjHvtD66FcGdF1nrLu8FffhwSkrZudTRWmRgdGY1j1dKTeXJPtngCBhf",
  "key3": "3NubQixCt7723SaNZRWmhTdfc1gEGKGXtQ4QizVcr7k1y5HfBL2GfNmmY8QxxomoVF44QrLCufGTviknrnGCyYKB",
  "key4": "5mizcjwsVe1TzqriAwwi65nWohhsqy1BvmjGp5iwBhkbg44uqXguU7Xb1J5heGwpN8iTM56EBBXf2AowraGC3m7T",
  "key5": "3G5FDbDQUxucE9JSKhAh1WzkRjTrt5NMcqGi2z9oGM4HvavHLWNME1QY4sNCq3K1bNxj6hEv7cep1UGVkmjTqV6",
  "key6": "29CRX6C3PDMmkj8BFkBfQwpknoxTMAzibx4PfJVDyTwoXZpynHfNAhdQpDvCTzUb9d3cQqXYbZnZ8dZGx63uVHpn",
  "key7": "44Sgv8zHBCA7UgGMnseY665FcD85i4aLK3m8FMyChCZ7i41yuZoLWLroFR9e2G4P8K5t48dVxXEZdDuJqG3p5rZ2",
  "key8": "3hJenhLW4NQSMDYxGSWpGAxqhaM8xDphWTr6idJbRHk81q2pWt1dM56eKmKhkex7Hgfncyo7mmgphXDp2ZZHR6Gt",
  "key9": "2QKDLPsnbmoXAtRCJXUWyC36bMyX6k2tiWkzhNZQtX5VP1tDLLeXpWmXiBizh5kG2ydiYXok4GVZz8GuoK1SLL7L",
  "key10": "tdz9LE5MCwj8pu4gPVGnm5TnNBS8wZJt856eADbSbnmQakTbX41XekWPSGcnwdfC6ct82MeVYymHwBe25ommd6x",
  "key11": "2P82ShMAJdCeoYboJpUbKiQaphUdcmXYazMKHkcN8yS9iP8fK8D7HjbLJYA6g2hadVxqEnkuLzNJm5f1xnNQQ4tJ",
  "key12": "GYpN9gVBguCcZFB364KzkBpoz3xuUCsNAnE4SZXwiktVPXngNwjytQiqLnj27JXa2Jf555EqSVEF4syKqdTeLJ3",
  "key13": "25tUYBQSfS4Jb9jTzqnpSeAZa48qN1WqGSw7ZgqXV44EgdyUhBS6g6BdkPxAiW7uEJ1mDP7Lxgwq3LxSFZ1rb5iK",
  "key14": "5wKmqnquMYD7EuELAnPepggQz5tduYDgTxdkcNfiWLF9fJExJRMG2TkHDiRb7ffZWYed7NEmUVc3BdPVLAgueX2b",
  "key15": "3755scbuWM57eqbNCMcPicv7F788GfXnWxgy7RVocU5q72AopY1z9ZnzzFRJAGNp5vH4Unny5KZp8pccssEuu1nT",
  "key16": "3cYnF9kkTrLVEDt3ey8jeqcCoLB2scbUdx7xoUBmsfviYDJwSz4ahgmdUwoUmeK21w1iopszZXQGwd6N1t6Ud4KR",
  "key17": "4wc79oMwNR5PvTHdjiAwKg28AgYfVQKfRjfoHHq1Z5htSNLSc46iNiva3aExnmKxHa5s1826NVwArfJTTVd4DzW1",
  "key18": "PsrxqQ1UybThFSFgrmwLX6ud6RRMkxv2EY1LdbHcH8nbngdhkSmrNCkECmcPE8w5jTqh4brRh3u46jp52sCgVoY",
  "key19": "4WBwvDUzSTUKaGkndEXRWWJxodQtqoCgKe8HvNEyHnjcnCd6BhwxuSd3A5uMYumUFqgkwt1Kqnq9KsQb5WQDJjtG",
  "key20": "4jJVtEY3xLj8VpLpSGdLBuMPDqZUEDr9QkLV1FHgJZQSNM8m2d1ukFbagfjfTpadn5MsR76mjm6GMzbjWq43Wzkc",
  "key21": "4ZC1bcGuNBN1Hj6SoXeAf4vyiMoqGRqN7udvKKUFRSMEjs4konSrqNQmHcFuQgs1xz4WsBiWE7kxHE4uFtoVhW8R",
  "key22": "2qeh4mMibNF8GrFZPGAEkH91YpzEpFNVz6yX42aHGw3Zg6HMbYcRyoFhzSd6swMfsBkP4JSo7ZqMn99jKziMkg6n",
  "key23": "2jwU8KV36atVkLEgjQesPtFft7cUFSffsJhG5tm3bBXPpLtYZR5keuWSigLygQbTcACaiHJyVMp7fghFNXe75JrC",
  "key24": "2DE6m89NcdM8XJqaxzoENjMhykkRAXjcy4Morj3YaLa876r3WkFePVYPz7NJAGwZ47zT3uNqm5hcE8nnX9pvbhHH",
  "key25": "67Rn4KDqpLQ71kmmsLDMWBofZ4hjwFR6wvKiAF3Rz3TCp9iJzHgK3QuM1Z4kso2TanKVvuz3HUE453aDg8Dvb6Ja",
  "key26": "587Rmzf6QYgtuy8t7tAwbD7efLRmYnNJtcrPFoYSnfBgHgWPHZ1iLcnQ1z9ck9uCe23y9MG51tZgnvyzqh3HndZE"
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
