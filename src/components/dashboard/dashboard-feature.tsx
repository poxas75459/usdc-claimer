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
    "4wztN6iD5EnUCkNDXxjhBYN6oDicb2GBxos8KjTpWm31RXh1vb3Ey9js6QUoW2XoSk5AxfL26W723Wvx9sQkFZdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Li4bWDzrVhsiqfBqJXm4MK78RGVfwUcUnBJ4EVHqB2ugNcjahVrgp4vzggFe2zxW3kRewJCSZtPXaEC6MuEtCpm",
  "key1": "VUwkT1u26xDKTRGXxEohjP2PthFvG78uRbVaaq3E71gLe83DWCzRXK9TSuKqUThHAij4vprCq7siquPQJhzc4Df",
  "key2": "3NAVh8CHFDz7RrbY51krdLX53SwtdS4u5G4kJ7NkgAFJau3VpwrRMfqbFG1grrvpAWj3ZFK3Q6ZfCMUKck2nqs7w",
  "key3": "3PNCH6kMviVdSSUg9ytFCuyPvNdU2yYuZFGZT2gGmTEFMkaENiH3H5pj6MFcS1hv1yCTPvyYEjt1gw1ppTJe6j6E",
  "key4": "5REJDbibe9v3smSo4tgee2vfcCSXyQ8bmxh1kNtRjUhHd99G6Ax6nTmq6cV1GkJ48Us6KQUZ7WjERFsqxTskQGvY",
  "key5": "ZyiT92tELFjgmbmRhhGvPJq1MhxrZUFTNq7tHWRtWHHNn7snrTVqqKcY8GspE9Ho7dNXicmRcG467GmUXVeKFoB",
  "key6": "2jGdTicFEXsVUHcRT3EaHTULc7zFX771VxKM8RJXb9HNN9EC2iFTPKAbr7W6UoJadwycvh5MvwJvKMK3DHTfbAwr",
  "key7": "3pVaBH7B9rud4c7kbRBy8MqxdypGDCBN7AWdPEmDDzcK5kAMWEBKKwEKUgqHdd2mXYXYHFLjSGxNre1uf3WesX8H",
  "key8": "2VxMyMTXymtWfeKoui1anPSsuY9YhH2tyBBK3jrTj8LJ4xuvKsXcxQv4Vogxw66vJsmwo7UJBZxKhhvHwL3ZqWo3",
  "key9": "5JE5DArs4Ksc4tgsUPovoNo9nqqYxPHrBSqQ5xPquw7hjy7QYBbqPX2PbcGYqKwfZUJmyxSqitBaf387r4fdAFZk",
  "key10": "jojSTLGnDzwzWSw4HHyKqB972bRaD7tWQ8BTxsLsMdAJyiubbXJHGkT7nB33jDhQY66vQtyXo6nwTu6GR1iidpM",
  "key11": "4UDr1JLB78f7kMRAdR64f8iCJMBTskswJv25XMrpuJNs1xSo25VXtA3SebPR7pY2FbdnVkMAGVJsr34N3PY5Vfx6",
  "key12": "gwFPC68QYFUomRv7Q1PF5SupVmDY7qavJ6Yo2hhBqXumiAqZiMcKKVnkbftS9uFH2cvbigpXpxKua22133fS4Gd",
  "key13": "4ryfke2326puV3X4w7ARfaKRyAJi83rghvkDB3UydnC4YN8CNL4qrQTTHM37Q3BwAePYPQjg2ejCRfdeyyCZQHU9",
  "key14": "cBmCNWEoCWhoUwTxoS1EM7uNNjxEtRk5F2dLWJCKQw11wLD3x3MqLC47dpaVWNkKTxtbF7Tr7XVF21EgMSrBsgF",
  "key15": "3CL6V3ay8kToQidg4eCsqSgN81iEFm6pYgeC8ShqLYvLtYL7GtufnDekBXJbSsmMxKsWuS1KCg5P6XfvcGKZMpX5",
  "key16": "4145d8eYq269okn2S9jVyV4zE1XyEVjd1R8KZoWiSiiZc1gmDEWtcwKkLeRyQaqb8MBsZNdFsKqsDy8xUHRiKgEG",
  "key17": "5aaiSH9dFUrk6C3ypnsq1pbF831sdTuBdi16gCdJU68XK6UFUTs925HuxHPz1e5Fs9T4sni45xUCaGP5rM33q5eu",
  "key18": "2B4NStAsuxEcn4cxsKraTD4wAEmpYkXFv3MXcUegYnDuxV1MYUnYJZJcXjkmfAYZWJCpme9Ts1KbhQFrbiRsiAB2",
  "key19": "6bTps9Q2Bs61si6TusA1XzSywQ3UpnwKDGqfpALEBhcJBgmjtZXe65vLNRpcVyAz48VBCG5qnPNnve9EdScNyRK",
  "key20": "xQBzJWZ86WcrzVjuxFBPkiqEjVDVqKMijjE2yQYC9qFBuUtrxtx6cXBmTAYbSuiWDCfMF9ra3CJrCsnEu3MK3Wx",
  "key21": "5aV6wjJqLK5Pjp5qn54WED2uS5D9BnNi2iZJqjtBpmSU7Mm8A5a4FhDt2doPL58g3qxnrmxzuYdg98WHRnJD22Bz",
  "key22": "3BeWzXcvuek2einQCG2J8QJuDcvRc2pbHsuDgKMPKDP9zZxUcjRr2DiqcE8Tdy4ZfPk1B8Pgoc2m9Af4hAdKr9fz",
  "key23": "23Vy5yRErTxuemrNEYY4UWzr6tJZVFqAzFcHSgPYbT1dNRLhShNedLEp4Z3otCyzLtXvCtNhnq3dGA84ZKPux5wV",
  "key24": "2E1AfSR9xbexpUot5Xk1EjHpj1Loi8BBa1jFxMNe5J5evSLRJ53UQeJL9YiHAfxg6rEcxSoQrGVJpg9LXVNd2Az3",
  "key25": "3rRb35TGi54VqigcvWYrQNevG7D7pGHnRbFgFsbeMu7D33Z9RDzcg5i9gt7uRA98LwjhDvkyGuJNyTM9zvVKrP1R",
  "key26": "oogbgPKGVwD5ukKPf71TT72DPmoPr142Vnjsz6mPMAUja8K7e9HykigLWizApK9422PQ3FvViwLUtMSEg1uU9Qb",
  "key27": "EA2H1ghJP1b3V5HYzKRLLiyiNynBy9VpSgDAD5sj48gmwubn8JcAzs7EmiccEpWZBxKxAHJ5QvsGuG3xo5cakZu",
  "key28": "KqDG8trcnYPGPHjeu2V78nWdg4cnQ8yQXyUXs1eXsmz3pB8VgbF5YFgiJ2dmEZDAWrzceCoFdXdqsTioPAyDjSc",
  "key29": "pMFyMoQpQWcXkxtuGae5DQLKNLTmZTtuqpDKRyHmjGAecBeSbujzs9rp1A7sFqAbHzmXMtE5qEx1pBHCRRvPsxM",
  "key30": "3Be2W82pTWEZxn84SjEueNPVTHMTVxz8krphhDo3iCKD1NXvvLg5o7BFK7QypzGYaCaQwScDGDpGjkpHFaZHZLDd",
  "key31": "2e2vZCTnDLJPu7GA9wBsawkLR72ehGkkQmiXoZkaSFgveeBm2YNNwwYyQvfdmMRRPaedWVTLTdPnvrxLy7RVjDpC",
  "key32": "2RymyoZn6ToBGRX5BCmMHbFQKYeMJxgq1rEe6o3faiohePwdS5FoMAw4m3CZKFKdkZQgunKAcgw7Kx9eoY2qrSNV",
  "key33": "bv2dnbVUGkqeuTDaa16bkVBJb4FbbQbhmXkC95mjT4CxQBpXgPo5k45bZrAXTT1xbNqXqpdmTKJvzteiSZzaAc5"
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
