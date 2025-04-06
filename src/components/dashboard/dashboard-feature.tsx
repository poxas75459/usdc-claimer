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
    "5XUtwTZjst4pVa2U5DsK7t9ifVDzaidpQiJodwfedpQ78sH5itY8K9M6vejKSPPoayGRC2tfYAUdZ5uecuG8APvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ycmakhf99wvYeFtKpc5KTSgtftNBCh3LvGqRww5riiBmC2Qr9cjet7CduT2mS1ahZpHnQxGZQJgUtqubAdp8qQ",
  "key1": "64ifx1kNyfMZZPQnGRsXHw2svxGVx7CQ2xGhjATv8VogdB7yZgmqBA14fRbn4yQCoD1BXs4uptr7gWj4MjH7rLnm",
  "key2": "3NqiTGNrSYNa3NVVruyh9GDsR8K1gMyhvYn2ParkKxJAUa6zvHTMnvyoqEhmn5Ez2nFZBpm3CQQgMRiXWcXXsmaH",
  "key3": "5Yo8cUog1Ys3oG6o82bbgkxqoxesQDTLTDzV48vxEPyRF6N8HTBjq9yXq2ALXuUMRqPjamnk5DvoorV4jkAdhRx5",
  "key4": "52SMWDLw1U5xsrHm7CT9d2ypPvGbEx148BthyoapSt73e2rG36BxY9C3Krt9cxa5Lzikc4neaGmvX3MEpi5TqWXi",
  "key5": "eVdEB8BM3oyyRnUe8mpk1qRbpFC4SwK7ubBCotaWECtLGZ94ByS9gha4B8wU9qSBdRM4yYjXU589TH6cxe1iuA7",
  "key6": "291hgpujJTp7usp4a2L9RdGVRu2FNACwXWphrRL7QH5bAaZFHihBX2LTNn7H99p8dksNsr6vWZGNVyQHcYqp9L1k",
  "key7": "SJq7Pi3UyAXnjdCEexCV1cGRprdc1Crm32p1JJQDZiFrN3mrLT1Tnb7s94WwGP1uwBAdd2tXrDhxgJQzromDpfE",
  "key8": "3YmdvEVh2afVxJT6mhgcE7TJEtir8NLij5PPwh97FrH4fPwqyXbeLQFagZLPM51gS7K1j6cvuR65Zdor2Bd2dC7n",
  "key9": "327g2BdvRi5gnzYpW5UxoRkeHCDAm5sybSUZMfyUSfykcNJUCc4N7DMywWmQbvH72eux1Y41Rc49S63uuasAhAM8",
  "key10": "418242gS1t3QADz5GpG8gpeqzS1dPkbCchvvPQkwChCNCJnm1Zph7n3GKRED39izBpGbfLGAt6EU8PSxAhhZmu6P",
  "key11": "3oTkStFDdvWP66n8BrerNC1h1J819MxNuXu5ktdBbo8ohD7r1FsZGSdTCnjAKjnXCGmkfRWiNuuGafLs6Ya4AR3G",
  "key12": "51cUKLT37ccZkS6RmSKttrq1YXWsdpuoLjpY7EhNV3Qu2xEb2iR9AL6mPC6gbxzQTkD6N4NaiwF2XjG2HFiJCAZG",
  "key13": "4Z4uMxSbywSAHLoDdBccBbboK2btPsA4FBhFPE5DAHj7qZyLgVtgdEHUvyffxfYs9qShuPYFSd2o7WV5zhwCvDhv",
  "key14": "3x9aAeaRfc1QP3kg9H2vLnRqyAFu6sda2rsW1qKgp35YfTkvjzECdSvsZLsirDJbae3Uthqtx3Jw16nmDTKaSNoW",
  "key15": "3QbrbvKJbspZo4LpEUEfhrev56ukDfxvejsmQVH2ixkpcXFWb17onz17zkP1Uuh1ZtaNeYAJhyiEFgKv47htJfBj",
  "key16": "3FqH7uNhuDf5rodNYyNxXGPg1ufyrP4J5VNTtbDc3vB3AxCvyJTUaTWnX7tVNCAQFCDYsbMacHNJUXANAKHzjrKC",
  "key17": "33VNnefpSzi6apRhDQcZHZqyrXATdAYfBh5H1eKapbtXJ59CjARGGCj7TJg9a5BqB37vuXdHToz6s9ngjFxCsQPV",
  "key18": "gh7XiR4NCLMzKbq7eX6s2cj7kh6ALyou8FUVfLRdojSAFzCjXqip7UqviNXBWryt7kfHnBa6cQz6kn858nxYqPM",
  "key19": "2Wd1Ffe7DckBo9AWj5UvSDjMXTCVYZDgW89xZV4wbBb3Z8KToRDZnJEjDuK9n9wmwP3bNQDhh3mypN7fKhWUD2e4",
  "key20": "FeXhFf4Zs6F87EeeEWW6Kanvoq8xsUTBHGdxjQ9Eap5an5tS7i4pk2o2WD5xRwexAAcEHZ1SVrY5jkSLiCcNZDU",
  "key21": "4xZRmgryMC8sZdQJUvCEmzvGVVwccME5NXudRwoRRxXXY268saZmsoT1zjcEoBaXbRuopQbtGYvPgkZPg4UVAaQk",
  "key22": "2Jw8DsJJFPdvpG871T4RQQrkVjpGjh1QycALyVSMR5fXyb8gJiPjqh31TDNALWjFoHKXz2G6zkuQWPSQezjD3pFC",
  "key23": "5eNgzoBPT8Yuvy76kcvHM43JrvWnj3B4bE5UiFSNhHPvVHao7Yix2YD4um6XEycBs6Vk8gsFvZKMRPEHp72yREu8",
  "key24": "4s7LTC3FhoTr2nAPxp3vxXg9uoQCybdiGAU6mG6DvycMuMnEFjpqeJshCBpkPMZ7Zm5NjMD4oeeTtGnFuQPBnqpH",
  "key25": "5aSMg3ZB65yjb23p7BasG8ZyGiNcfaYAG5dKnYdWZQPvAjqXk4NenFpJ1PKmZPLAM3cuFdgAqET3dYzfgs1nto4P",
  "key26": "4NHtQM5iSMNhETJ2eKjfDHDqDHgKBMJuM8UJckdjaUSwisAMjwxZrK8HdWY76LdZzgtFxnyKhLwCUEMRATAb4Eii",
  "key27": "3YizPMS14PoXVFByx3xB8YibMNLUEAuy2zqnexufnPv3wSqn4dVbPWAymVv9UVgWUxyN2ptoSFb5ZoSQWtC9pkmW",
  "key28": "3uvYR6ot6uapG6qMH2j5TDP3iQYbjT5raQ8LaR462VexSToBXGrMzKBBh3HLPXrvYFatENyStC6EBnjFTFpoeGfC",
  "key29": "76i2vCqV7p1PnnKsgCUs4TCE3FpcKP2FeNv9mw5iRNmyeTsC2empfXM57unER9fv8ZgiGqtzg4LCZ12cy1HCUjc"
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
