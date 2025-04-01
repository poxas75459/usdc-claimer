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
    "2EfVc25SjgNqGMoTkoNFT7BQF5ftUFtJNqKX3a85gE3jH139CkzJTpp7gCa8MRG5jKvB89qW9ZhV8U2wnFZE1h6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w2YtZtwnHVH5BrsPX6sSB34U9EB2b7U6wBy7dfWLo6zL8NTcyTXb1TLKLGhLUvmSC2U2HN74XSzSbjBZ8FaQSvF",
  "key1": "3HdAZdu49eqoTzR5RhBmSxx8vQTXP2qefPBLUGrG2Qmd4GVZ3TkEroPRUhSHaSGgM5d83rKMpvtio3UevzHFo3b",
  "key2": "5U7Q11RXgsATE5j59y89wbe6joc8QXeLNBe2nSUv4AzLEKa1hbPinXyDXLAVfqPQWzDHLqN1jersgfudCFuA9REA",
  "key3": "3kw27mwq8LqaMcPqz9cAMAPxqoZ3J1ZyW6T62q8WLPkoDa91e8Pi5BHv6zXmbibTHteM7jKX2k5FnPWsZtSpSAKC",
  "key4": "4jgLoSTZ79P2kG2bWNvSK82n8gqyNBE5qXzSNCj9RDUoDmt7zWv4iHTY29SEJUMYpZA2LBJetnpKKLPLW2GVRJ1B",
  "key5": "dGR39i3Fdib8LVM9S7q7qsiNzvkzQU5jhhZoDEDmJrAjtHQWCg9pE75o4z5w8Es48jeHAq9Zfh8rH34L9w8ESsq",
  "key6": "2iE15jv7qh46PueKGMsg3apMwSpPctCkqzwtGR11zWPrRVWEetQ4gaMj9buH5AUuzkT4nvxe5LKgagiUZd23zFh4",
  "key7": "3wdLXpNcoRh9hkB9T4EB2eKubGXwKPk3RCMvmcsncRzmLXdbygjf5joqK5j6LSQsFDd7f1V397mo7Q93aMdrvXmK",
  "key8": "4G9Z9bGPojusKkE7PubqwUiiTDoSi7XRuo4ut8nWq7oBF5hh2sBo8ZjQ7BFQgmWFCNt8DrNPRwAUencf62wSFEUx",
  "key9": "67k32hqREQaeBedWvP6Nu4wiYmBiZNV5ynht9ziPbNDf9CyMahL26mXKzR9fid6dKAkpuL67YvyAS1LQnryP1Anr",
  "key10": "4oX1d5BmfNKKDi3nuopfsiZMSVh1tcvT4DAPkc3Bo6gbuqgnVXeuH3tNQqHYPXoMm2jnSZtK1TLbnjNwFst11Gev",
  "key11": "5s1b8XYHiKd3zqwRU8nT57oStHyyykZTRo9SVzYMgJPa4Bw9grnvYaJik173EgRGSGtNXc2w14EKaZKutjTk2FC5",
  "key12": "2K3hKPoHNHcEFwVo39msS6pa6etAR9ayPyMTzpkdLoK8oPLBK1tnjpk3fvyAMHAXA9SHiWtziAY4tfWK7vAC6RPe",
  "key13": "2Q9BHDv5RN9RAxhu8ebLZ1A2EGdZaC2wJvb4wMf4Ta1epyi5yvMF7adTS4iN611VdYAVWh3XRfXgsLoDgeGH68oT",
  "key14": "FGcMysXVUfCJ6AbY2ewSQ5DTSpantQhCn7Lx4uJCGFgJq74psUb1mSPbqJT8uMytGRjVXuebx52JuHNFQibiQML",
  "key15": "3ST3JLaajEx7qW3pVTaVW6TGFX2rHvd4HBwwXMEeQN5XsgV5wLH43AW4qU2Eh7MoWv2NUBKu8cdAaxh37MdskpC6",
  "key16": "Eq3W5ogSEPin3yz4pTbqmiRESLHGqjpTy4ZpX3YDkeJZfRUY1Rwd8nZxm8N5A5nVQfR7MCWVGW8GDh7h4JLTyLu",
  "key17": "5uSrey1XKANL7JVzbNqzu4y86CLPHWb4wvHLVTWN3ro8ttopU5rneoJQPjhjJn6JtuJr3PRCXUW5azc2o6fXvm6Q",
  "key18": "482xz6kSM28Qza4oHaKSXoZRpx21keRVwHF2UaeM1cixGG8JL7MQmfABCm3W9kCAf8p87NyT7aYRUX5GbF9yDWbc",
  "key19": "BneutuArBLXwi3TCtTCcSS4tiABkyTPui7vhWvvPVq7LCRwAys3YkK1QGzJsCC64ru25AumAcw2ZNYRzkwgB6zH",
  "key20": "2abtXW1rMexAydhmzjJ7YrWtny78pUNTXhZCcmhCHiUYQfWBVm7U5m98r2rxn84NfPTZLbtWVHRhbAkfU3nmLfJF",
  "key21": "2rnNvmqSLJpfFi8vi7qoZrUiL66x7poVvxt79yAtpKX2QV7J3v8jd69YVUyge84rHojLTSvNvwKyUbfc7JJs95ce",
  "key22": "4vCgVtccJSKQqSg9Bkoh2DrkpVmm4sAJ2KHyz2JcbRyP87Wwyug56HPkhG8f5N4ciRzRvz62VTXZZ9crJT6ucDMG",
  "key23": "3hQb3D61for4TxFwsSb6LJDQAdG9qjF3GRq4kmGwXJ7Cp4g1MVXvhPpumunR5dtuvf4C91MNeUTrCSERnZxEWAit",
  "key24": "7VWUfqiiQDKhsQqtYybwoY3XuUJa9En4wyefP35TBdrekEby2j36yRZYvBrtmSKoxY3kcJ2nzscdwc7X3kMREKV",
  "key25": "2TaybPAq1EgyvFWxm39TjpSt8zLmaeZwZnZF2XPbAbNhNBj2hrPVbbKLk4HTqAUjkpqmvasCcKAjfWEtEoGQHCnF",
  "key26": "2qrL43oT181UGRE1bW2pFUbzbA1MfUzHKhMfvaKe1gxJe7UWr8MarDqTdNR6uWHwQXAAdFKDtxr9hWpzt6SRHCET",
  "key27": "57LdJARXcWN7vMBz13EyNcJns9xPk6xBXR4XD9MKVVWrnepsiAuQww5wagzZfTpAoQPzhSrbohAktDPmpLThKgAF",
  "key28": "3ze17vzfNU5HuFGzBfreabdgYhzkoujTJCFbX2CJNbMRkHYJ46emf674iPia9DxksjPCYBfvC6KPbMoBSvVJy5SG",
  "key29": "5fi4qFtSRwJxWBXN2qvnd2bCUszmaUqAmnkQWMfEieaK1XDMbp6aMSg9ABoThisovRpQi3aYpcXwJ9oqPAKTXi3H",
  "key30": "A7xLzNzP3s3mVBpzfLRJzjc2nHtpvSSwiLpbbNJGu9jKMPSY3qLbgYkKs9qR52ywCFfKqsPvQ29YJURXdXYEvAe",
  "key31": "2YJs7DspD6yrrL1dqMqhspdLakK2jUzyng1fQp6ygyweztBs7dDQmbVPLUXBws19g5HFhAbKi8rkzSDDhAzmzUVS",
  "key32": "173rKAzxEPXWsbsPa7HZSnL8UbFHTGx4xxZxuui89yKN2zWtDXbtCDrkHzzxBidq3SWcckzNVtb3r6rT3tgj3kA",
  "key33": "3ENCnsbEgHMr76MS3vAnPoYjjnCGumTTA3LG5JWyacvkyPxQFnUPkxccmw4w3DehCbjYfrm9P3iNAqxJPhrCpbJt",
  "key34": "4Ch1kffq9iY8RT644cd24h9h5cfwmWTQz9jTtXocWJbn43dS6u3HANvCbSuPdToJq1Zn3kLwPkRtZCkNmQ4796Mv",
  "key35": "31AWXECrijNoMjHe3pu4omQ5b4HimAwLzE2FeMsUDuTExbARNuWzHHtTab4Zc3dTgFbPj6bZVDsp1HAztUJ9KERx",
  "key36": "4VXs7BQauotkB9cgyHZtHtY7thUA2kshv8LC3T6DnvnGYgVjg5e5pe4R3vt2TMibzK5EJGmtTDZAwLBWd82iJenu"
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
