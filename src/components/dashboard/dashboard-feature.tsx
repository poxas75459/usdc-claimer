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
    "5oVvxpkYYRh7dvys6MmqfmKahpePiNFvFjBa4SE31yXsuWvFhqyCxKVdpD6aoSiYRjB4mTC7oATVE5axrWwPSchN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aNJrDL8tbr9hoU4ReJghzYQK7hajB7REZKsBDJzXK5mhjCbMfK1DwvJET3auwexLYmxTWexrvoyUUDZDN7mZXus",
  "key1": "3qEtja1Hzuz87whQtNA6MmRzpujx5tgRwyLMBYFstkfZp28w76ac3n2XQpr2JoYpVnAjK1cBCUaxbAsZQrtQbFas",
  "key2": "3enbmnzJVkZULSFQ6P5oERNbn9eJJvF6er97VRkqBbg3W8tTtFQyuzf6CsQD3kW98xgocJng2UWHvf8xyox95ArG",
  "key3": "4LCmjSmW4ZutPeqqz9yXdyJaip8V9kkmmmMXm5rmyfHUGhzPbchLVEMtkLoN4kd8LScmSSUZKAVqnTsLYZS4EqSQ",
  "key4": "2G4sceYv5Xzyz6RtrGGxZeeHde9wUpPM85smtpUxWsffbJ5zsBtx2jc2sQiJ6NiumHiQkVwA785KtFdWKD4Wb4U",
  "key5": "5JJY8kksdGTezA13J7XuhZkQqajKKKXeAFUyD6oQvH8Bc4iqGYdQhKf7t4rkqdYcSHAvAxrcZ3D827J1W6JoMoKp",
  "key6": "589W73sK1bDFUEAmKJKFmjc9gV4mtiC5gVjSPFTf6jXNpfZEgR5QwLmkDBqu1y9ZmLXxuZKuwG1yDo7Mtt5c869K",
  "key7": "2SnX1U72xbpdXjGuD3UqKVprhL6nRqLCoajr58LCPBJP7Wsd75VNgGjJqKVEVXw3CnPjRjb3vcpz6QGHKEc9Wjkc",
  "key8": "3umZdSVmgwpHmue76jWvzd4E2EbmhHum2Uk6v47BKvk6bxqtYoyzzWZRpkqHbyJJkC8Gk8zRE1WpP1WdFNaex4Q8",
  "key9": "4nqGsd2vBUHvJNKvicws8q714BzyXgCHA8myr8NUJS9ZJzfCRa4R2L3d7dCz6RBSCwKCah65G9oP9heWshUUQsX7",
  "key10": "Tov1fx75Eqy3vB7GG1E7drj5dhR9v8Nm2w7cMWLi6ds23AY2xjRJfTTFzQoZssRCqvbBJxo1m1FSQ7Z9BjAa5iy",
  "key11": "5QiRKCKPevjNwcRPuVXFnyvjSeojhXAaSU5k9iymX3tEMz5yQ8Z1cWF8AigysqmykCsZDJsFDtRJ9dMFSA2NFcyD",
  "key12": "2opAoRRHTPk7AMi2S4xMprmazZMgaGBnZNvfBXkgBvGymRpqo89tybJLtXfRxvDP4jRupo16nw7sTh4qLsChezGr",
  "key13": "2DtcvecD3AkiyEhA5jL5wwE2VRHm7Jbjin47r6k4QjHGN7Y4kr3vkBuXGiVkz5vcuDPs5r6PmmwhxnCff3yNHZAU",
  "key14": "mbv3dJzETn4ZAw4W2mffsqfZrCCc4g46ctwcuCEoKrVrjhFfjTyua2AcsRaizCVSJ6s1SpgVL5875tUws4qrsXD",
  "key15": "3uZkkpAw1YcAeUutJ5jE3WYAHbryYX6ZAtuNPBEhvfmJRyERk8UAWmFQgGGjdpUkWV8ZAqZjCyPZei1EJQ8g4B7t",
  "key16": "VaTfCp1X6MSEtkiWFognERP1mjr7sG6PVVeudkiiQVsBEmgJbZHTJUtvjMKbihmschMPxbAz4Ek1LRdPjSmPJS3",
  "key17": "AN7w4J7JKpaAgSLT6uQ9RRK8jq1yLCHiJ5d2kLzGze4xaz3D1M9d1YCd25ZK5jN8JqpFti98UrCZPbjBzod5Bft",
  "key18": "3QJaRpSB2bWAyFK2CfjFTQLxG8Xj4Qr7CbYaBvsikRNs2Yi3N4ZSwc9h1uUKYUEMPYXQHxaSckASFkpfndq7JQBc",
  "key19": "4tALTVH7UGpQiPmDVhzygrLNQS83mVtPXcDZEcfNgDeqYH8fXXRJv2VdYAcnMd9sqE2c7UZTejzYC6LcyJzvHZvz",
  "key20": "2BkUVKhfZChsRkw6ttpjRTsbfbXEFvgedmxQgUbNFUtaebM3WhjTERG7sGBQGap9CvzNwZbCQ59bof2XTZ9k7X9P",
  "key21": "4yzW2kfTqfPppNWiDtkPNs6N2JCWKGV3frKah3KJ9hdxPxCTCfXiJALqxDTFS7iSkgknpSXAZMZfvynQueip4y28",
  "key22": "3kVHN9rGa9VNLCYSCKeMW8G19d6oNFNj5RvvYfhUdEQPnRawPARZP9GrnEPfr1TvyctNkQ9furit5bBGkh5rdJyq",
  "key23": "bZeggMvyYdqJzTmCbjUqHzxqxGSm8Bpwzd3Yby8JypeNtpDNWmUicEPgVMkNJ55V9DM2EjmgovX7oJZGHQiLH89",
  "key24": "4F9cZdNn8WHENBjGPpzWqB8ne6tE5h1ZfD8Zg5SaGUfsYMmAtumKF4oPv9BXSxJzcfjmeb9dJvxBcBwGoTE4jPS7",
  "key25": "2V7SNAs5qXcVNtApuRJksAnZSzBR61bJWEjLtcAkUpQKFaMzWKkBgV1tnVMier95SfcgKkKmjonVZdE5G2YGjuXD",
  "key26": "35YEFffbUQNom7o4Emc9iJ1ETdhrxB14ToxA2pBz48E1rxrQqEHBQebWgBHC5DxePKJny5CzNFSntYaBoG3jnKnq",
  "key27": "Lg7P3xFgCKK1NVYT9wZdpdHtPHSmoURtpscSu2yYeg9oceEHhE2AWy9Rb5QBPd2g6L7yGgaYx4XzN8988Z6toWs",
  "key28": "oEpK1eDk7FE8vx5RwFvXGSCCiHoCuBeAF6x5EufPpHEgMAFeCWwEe9fKSyfBBZvwphSCTW6hkWmjqgic64rKu2r",
  "key29": "215dguj8sa5A3KDpK32NCC3ds9Y8mKfhGBWFoBzXZXwtj1hLBxq2Turi5s86q1pEqip4w8goxL5EsSHjqqg7VYKh"
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
