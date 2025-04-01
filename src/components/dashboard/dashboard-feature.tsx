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
    "4m8BCLcmHXDUE9JWPQgihoEp6ZkumD5onhvJF79BFRWCPzhja7vwiK4CyVSCMSbyBzKwvmfs5wuBEYCbJ1RE23v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQwJQceqsZW5F4meWR3zkdVxRTCiF7ouwM9jaetQFnJta53HeA9nnTAWWhhD2nbC6YP7gZ2L6XomtHYfewPSVZo",
  "key1": "2e4JETcBVvaysvbjaohwyyzzVNKLyphZ6BgTHupVyXHwhuzi8Xhgs5ucUXVpSVz6SS4kKUoJ7LBqenQ6YKUEsKJZ",
  "key2": "3svPev6rELtSoaqrBV4zQBAtCXbaZb4LSexcsCNA4NUWouZZArH5A7F7tEHFw2Rbq4sHPXhf8xoc6KweYHH8RrSo",
  "key3": "3rPrVcfv6R7dEoJgF8zVoQ998CNUvfrZFv9AYJB7U9pdGjAoMzGyihUFT3KfyZ6QavbNDyPtPTQu2RiWwjn7JzCP",
  "key4": "4HaS4mkFhMR1p4yRSZv1CiFK3e3PdozQo12MHWEPN9MPLzFj6WT8eMayPTj7fAasKA1FEgMgnvuurdT1YBL1GpUo",
  "key5": "5No9yYtSh1ZZJnKMtKrJVdRbU1xWfc9AyUPCWXdCjZt52y3xdmhCVZJjWm2wmwN7Zj9BLGeXkLEK1GTnmFXztmNd",
  "key6": "FufDySrJ8CMwuqc6MURJiH6MRqbPQjLdtwEJCcbFhxoL17xE3vzUdAjxJSqZdAwTWD6E4sJXGkTPrEpT5RWKkq2",
  "key7": "2YtgFiabiktvyPADHBZDyS3D7HXBobR9LVzeLw9MpXomw9TGPEwseZgwk8JMYE5vPDoGkP3NtdwsWagE74d4iKCi",
  "key8": "5RB4LADoN1gjAx1LrHTo7X7AHqL3HNuPTjzSFuWVRWJRjoVPQ8T3AeSCqbJMyTCgEGsjSJ9P8R4GgxrZzU4G94Zg",
  "key9": "5qjHRjwkq4bqJiHy8Vwdd91x4Z6eeV11VtzkUs73e8yg7H15oWf4bDCmUevYk2NgamFthxRGGqkgetUsNRvJWhww",
  "key10": "2SA6sQwfPeTeCNcgEcyFU3FrU778jZHkVZZiDhtfv6LAXacE7uCbS1PrRFw4ZFCPDAuXXYZZCGQCVtad2wK4fLwG",
  "key11": "2W1puxxNLr8EReBezdA4kjsDTXWm7qufkPq65jnwmnmenwYQQuFQWRcGjrZqFmvb8rBMpPHbakGC48SJPPJXWbCD",
  "key12": "Yy5C3NfDqVyf9gxYnUr7y1HRjK5LD512BbaU6Yjapt6KjkV8TSQf8crX1ymrNo8PPB7bUQmQACZd1BvQmrdjUdp",
  "key13": "3pe4Bgi9HpwBP9fXgTrcYcbnnu86LMUCNL1y1CCk2pa4tpDNPRFY86JGzCuc5okYD4dNdDkiazgCDh4qrxYdeErT",
  "key14": "5rCXXVJASAKG5Q6mv9E8rPgzavts1uPRcTUXQt6YyGRA9GjsB3kScNDPopeELHi81UdpBGevMgGRxmhcmUaSJewN",
  "key15": "ZupQ9tY74kxoj1dURCGnauytH7gLJRJoEnzByWqDLeUAkh7wMx8C1QaEbwq4r8ec6gsuBfz7ujVhyQ1vzZDrs2C",
  "key16": "4xkmDw43kxAcDf15eTUUAPhS7reyhQrXxxn7JZMeuUU2RBPDn8KuAh93m4qvxvKDACWVSoS1z4YDtMsZyaKDZNM2",
  "key17": "5DjN159578oxftRXzXPdtKntMVJ3P9zahFMzmD2LSCv49Dj8TdJtN21FunLBAFM3kT5LiuNwkwanMSXg8bDQXWer",
  "key18": "3qZG7gBbim9L4aypcH9fPyibNysicLFZPt234QRwYbKc4HN5V4hLXkZcfetmULA4oouewYoFF5Bw1eqvNMzjwnZr",
  "key19": "3sogXdpghAtdGg9Lpp3TyyuoMzPmNnCebYXk3o3i85grSFtYZ6nm4rQQidBJgg5daW7LqHoMvs8xVcnWrg3Pck2J",
  "key20": "4JyGGNKuNKsPWng2m2ag269H6gr819p8aFdNvMWVDqeTaUPpabc6J9U8t7o86TGChaQg7mGyN2n8WrJtcin6HY2T",
  "key21": "5C5btWV8LH757tj86WCwpnrWNvZSJxpLJrt529JXswD5Z9pXMJydAxsd6jALFirNvHCNycYAN9tQZNMmpB8LZxaq",
  "key22": "FCQ2cPtV6TXmvRS4tqUhmcHNnujQhDCDdtjBWeLWr3kUJnxjzGHHsuvuQgx5k46QeA8Toz6sVdaNwZTXZLBbD7b",
  "key23": "6upppdi9SMWGHYRKT726bvavxgTJdEoEA9xNKoMvx4ei4VTZvfKLFhg5i2gSDGw2ohQt1j1s6KZnJKhJoZcM8qR",
  "key24": "2Prx9mhGREGjXD4fv3U2sHeM8wpD1wtzTtx1ChxSozwtHeTPZ3tBUqWvEseJ8cStTKxYXSd9ML1Ze9FgTSvkoKSB",
  "key25": "3tqaKJ6pvo7qK7YTxDLxYEvL6oCU4zqMQ2TYRZaEPzjoq4TkquVXzDp5SMhbq85dWY8F59uFY93g4kLWkpjqZfcz",
  "key26": "5B1fYfySM8n2HLFgLrsh8zQTddsi5YHZkxvjv4G9chA44F4VmijKnNrLgEBiDKCPgnXp7dELJ56sxMSknZJH2yFK",
  "key27": "2DrUutQgKCroFv4UzU1Zj9ywZXfXmnMui1zmEiHg2m9SrZsykLq2zWvKMmLRLr1uZrxSiPqCS2wf2fha95FYZqwT",
  "key28": "26FvoeMf4LzwZ4UPL288Z2bPJND5L3TCrHLTxDmqNYiFxnwn2dp8hMb5WmDDJh4SMzWaZiBbGUncpP3WBAPGDYmL"
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
