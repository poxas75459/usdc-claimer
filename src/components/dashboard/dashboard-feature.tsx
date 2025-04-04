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
    "2zQbkAnTtCbA7w3wipzjubfqAeH3MbuSWhmxEcNMGrtf7TT2S9wQURVC4a2ffE6uLJ3hYYWSRLbiGCXBVpWXxBWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "398RrSBaoaJFXThX4oQo2iFZnTM89Si8LXcBnyo43doWsCQYaK8EwDZozrPMXKUFVndqx9x5t6C7Ujj71oEycHKd",
  "key1": "4s39ex8GML1La7kxK3YnVHNAoyWPR17dNgyPcawFKsiim61Jcskn9sCNujfWgj7ywKxEXuSGFedaZnVeKFqAYAWy",
  "key2": "3V5xqPsuUYLaxa8phcmTVmeQUYac72H4ZMp5RM8zUGQrrEsT9gvPTYMm6cK9PQ2AKj297nAHnDpcqp4bSj8S486a",
  "key3": "jKeBsDe5cS6znTzCTmc1bVELkyKK2anbzimiPCtsiorQ41nZpbXA2AsKz21s7GDN3V3kvkvf1NtYJhjtcs5vovi",
  "key4": "5zAjrahmrRkDcDsCqbKfRDsGC5GjcN88yKVuJCyQYd87RKDcb3r38E4u6JGoMnRePAUEyocoyW2RnvpUqpmrEc58",
  "key5": "29EA6GmNCkdkvfY8XgCveFZd4TC5yb6uJx1gyPBa6FtS4ccD963gthU92nF54e7UjjMrD1pL23YQrWFFBqqwSxVc",
  "key6": "3FgNfKVFPAmZj3gPXMd3RJ6aDy9TxsrgbBmKKZwpAnP24sSTMj4jiBzVvsyzX3ZZyf6wZHutoLqecNiVGUR7pz8",
  "key7": "2JKfGTx45e5rH1yKuHoT21Pj9WBAG4WkgGzhF4cRoj5VtfxHw2kQc4925WLapH5dy9GX7u4cUg1MTo1D5kU2vKfT",
  "key8": "4LyKKEiZoi9P7Kmg1QaEV9EHErMoeAUF1U3g2zrbV2gkiEAsBD9mTvGqA1eRAtetPPere7kB99TF5EoDVv72Ux1A",
  "key9": "3RhE8j91pxA6Z8bZsjzwePMZeMT2dmvznmGtLzUNHu7uKXCFABg7u22aCsx9FbXevyR8anYZXfcdzbDo4YEg8hjM",
  "key10": "2Z1XcrTf2MVZKmWrbBKwMLAbsBDBpaMqCpmKwwvcp6NDAuieqHjYxfrEZX7SAoeYVkazw8qqiY8M3s4VDm7ke5q9",
  "key11": "mEMrmeF5C4iW86FGyUkR9VVMm2P7Vm7AS2NcCTjx2w7x5GQaAYK5ErTnbixNNtmDPxYDagxow2x4YjhtkXxsgqE",
  "key12": "2qVVYiyhUdX8i7efVc5HwyTbkZZ5o1nYzN5YngZUEN1VGsiuWuZsQerp4Bm9pts3G1QJggwisR1ezH35E5wehF8n",
  "key13": "2FZaSbqSC5HVDK3Bftc4MG5YVP6wjXZcbSp7TT3hNbzTZw6zyfCmDxahiTEMQuNTCqPdLeFV2eZ81HU2y9fEagyF",
  "key14": "4jaqMMhCU997Z2ZNSDm3MBstuhox4A6sh8q1JCr779GimfNQPpMiXB4yBaKSoX1E3GLzusmwCS6iJokthm87fSi1",
  "key15": "vjw9ufr2tt7khJbTkz7EhUCVbmaYnSYwFJLdZDsDdW7SYmCSZJA5aQ5EbTRg138cPEKYQCTzq8wCg9ez72ZVXxr",
  "key16": "4aLap568urVp5ivqisn58Nfu7fWEbzRucGFwuKVANkyD6eDa5SCPi7jABFGtNXfar5Vt2PobJsoeoUE5yTPfdnmT",
  "key17": "5RtJfvWeqV3zg5LJNktaeohq3hQ1b31TzCJfnHwuGzKR14gnsgYekXTG5c4xnWAFU6NoqCULqCBSKW125kfhhZwG",
  "key18": "5jbQThcDhyy4p5msdEeW1wsGctCf7BnjqoAs8ahVtSaEvcHxS1CtUqGyNzUSAAtgWfi4LLMyTwQjwGJiueL5QBHC",
  "key19": "PikMVFTfMDAurumHQCzYPTLW7BtcVjw7BjYdQXV6AxCU6BrYTdFdQeSohSn4zJdQD4RDQ6tFE9jXi3KxVXDj2TD",
  "key20": "4LJv9fGdp3atk7YG42y31KcEE7yFhxQAM653MoxtBpfXYoT6QvnJwbhcUQfjsnmaYmfDni7H5JvnEwmSabtcCeag",
  "key21": "qGPBXB6hm3igZj75czRwtNWujwRPRN7YVSf5nfQFETiFBptKixFdvi2nWodqYFJNHL4vcXZtbzpgq6qmXChDLAr",
  "key22": "yWwiq4WJJ6Kcemcg2pZ8fsvkUeWYFraT1EpqrzMMk7Nn6ewi4E7hVGjqNh7FSADR5ovPkaS4meAuny25tURAQe1",
  "key23": "3B5h485xF46M6QwZTSiH4UMWu854LMfyURvGnF9dgBKA2FH862GcUjiCKXfYuWL1xYjjx5s1gxrh2Jm34PEgJmsx",
  "key24": "3VNicxzGHLYPEn789VaZMmpLNSaPFqo5yxM5rDuopkw94ipfcxVx5h53CJ2ft843YUGWuXRWNhwayhdFKsfEJ4aJ",
  "key25": "5K1Rp3duGPsaQfi71t3VpWztzHdKgxC6WD27RhDzKVaUyS2pdC7ZL52MkeCTpY5gpWKuLEadHPYCPSC1AentNgTp"
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
