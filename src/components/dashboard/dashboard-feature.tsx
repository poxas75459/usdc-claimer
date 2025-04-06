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
    "3yYKahzGRYY1N8mQr2DpQBpDB7zp1Xs1TLrA2v7WATryHB2hu4ewG8Ff4S2QgF9kixaTef2ZJ2Ya4TczD6U9yVL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oZVV92yKPYig6cWXhX5EbrMx4qez4bg7Mg8Vhy4Y3uQUnAxczPYVquwB4ubtbr7KX8nSnHzjfpyFEHVfXdP4MAa",
  "key1": "2VL6FU9E8qaHpoiLTaLE3ckHP8WUPPQJyYovFJdNj2frj84BUkS6obdFPpwJ2pVtsSDnVvNhWtEt8xmrLRu3rUCj",
  "key2": "2HoWg1VNL6VbywyAzp3Bqpd3pbNiL93TYkAH842agVx2jmikLL8pYHVdcRSNZGsUMJUJSqzzipGJH5HgVJwowHdo",
  "key3": "5QS49ocpis45q3UoNE76Bt1NquYTEQKqCu8dFKZj9AzHimLFrfQwFnUQPtFT4zx37quBvmxcH19hUihj4TuE9PG4",
  "key4": "3PupPeoD3LdR7upqNDBrMRRS43YFGoAKQ4oipasn8qHopvgXukczYjCA4HZeQPmvxVkjGxNCdPEv9UiZgYJiS3zv",
  "key5": "3rdq2GPVc5S4WafaghUPX2uFpJ4E27nvde5WNv5ue5mS6sxAoacnrhcpLzzGu6Zk8LPZAQHay1nMHGAkuQMGTn7n",
  "key6": "3V1fa9Gkj8VidMHWUVXooh96YDZh9SduV53f51M7AgJgfxhYd9VnaBSsFhuBzAXBgD1AJ4iaeJ1G3JKYcDBEQhZE",
  "key7": "4dcmq3pQRCkLgKbXwPa1bXb3tsT1qtwQ7aZxcbdL6Yezy7e865DTpNMseStX62cbxnU4kdEzPBgbhwfcec1EewBd",
  "key8": "knPTD64Ucw8N23PMmD7jiyqd86E6PSc8w35j6NWHbFmeTrVozjUjf6eqcDgAZxpPYgGcZqbrj69mb6RAcaksV6f",
  "key9": "4fqyosV8sLqoLSdRBj1S5AV8S3aLV6jx1CpvjUcyVrhBb8BwgUqjaavEU9ct4NDE8bruZugSohr4DVjqYEkQPMRY",
  "key10": "29XN3oCz1GdqA9iLrWQperL6H5ejGGvkBW8J3Rvk7fzxmiyRRZRrfMa5zpzq85rxT1XMMmVixbuakW7uYvjYuFvv",
  "key11": "2dWJS8nGFzPWMMoDX1Y7wu6RRrPpAL6K79iqAPFHcGhmt7nkNdt2E7kDipVDC2fLT4yrWm3tMnWhjQBTvDxyyjUy",
  "key12": "J4Fbpo514rY5GAtNBgX6s6hRVnBMPUnWByZmqLRg1HT56432zjbEBysFhviuTVKebbkmxQy3VKtDQT725DnRpDC",
  "key13": "3gddhe41qA2JRaKCt1vrABNaxaB63sXTpt7CsaTuj2H5YRS8SZuRvz6JibrKSrJTutuHXw22BWUvxT4qDkUcSgT",
  "key14": "oejXn2p5nPZdMGJaYD2fkJH3roiErRZWeTq5e4rXmJQLwN9vAP4my7XBCABfgS8bdpufysxGpgZM1jSsmnm2ENR",
  "key15": "5NZXaiQy7ErbDrNiDBucwthLm6AAnnLBZCybYHrv2z9N86xjvczczTFDSE14JMrhcBHiFbYctePDM5YtUV7hZuQ6",
  "key16": "4bmEnyTXjuuY9LmwUxpfMLpN2E2ipBYjHsC2L1aZ6GPmj9F2rk1EEyqfsDJ2ayTCiRacFSbrvRrRTLh2p3hdwXQz",
  "key17": "3woqt5QPmufDtBW81XgWZYPWjb9QN6tNSA94rCDjxAWWUpqbKTdQhpb5kBht5zBk38PH5qnJ7XZTJNKqgRHQDnZz",
  "key18": "4UYXjxdHPr26ca5hQitJ7HUwqJMK6QS7E2vFTi4bDaGQg3CCGmPa4oNjvBiqWKjTxU3rAiMqRBfhrPNp4ZQTsTQ4",
  "key19": "3nrLuzjPvdignpKMoLWSeVxhyHdhat6eE8JW4tGJzgk2cwBEPfMVFFftBjBFViBtVeMfYFcy4EDwJuGgBUYAGgj8",
  "key20": "4TrurGX6kByF5nLTThrHwe1BM75jgR1iRuJffvKcVRVhbjpadaZJ4rD6LfNxUhmftasQbiMHSgDdGGez5aVDmLez",
  "key21": "3BBgof6PWWdgPTTgaAgedDndH8dRjHpoV9rGYVjxdwigMn2wadhbPp5rf2i9cZptuXrw1ingGP2Q6dg5V6ouahhy",
  "key22": "5RjCzWypA1Z5eCKZspMSPHbHr3tJxw4nnQ8B71DcAvPYLD6db7Xbr8YuUk6U1qHwnfJaSu9GudrcWFu8B9BwaXws",
  "key23": "NPmRkALXDfq6w21vQpQr7oy86Y4iRHW4TLy4wVvP8HbRimu62qzWx4RTkNuRZuSZJ8KesaVZDqsMeehmAQzXRhZ",
  "key24": "5Ci6dAN3mm9URQkYGmEzR92z1Jq4bAShnpPLVSUv5qUrTHKT4yMLntZ1YAxk3YUE563RXMcqaWzVKgG98L1MFjrP"
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
