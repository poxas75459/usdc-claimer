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
    "NrBjdakKXbuu3HB3nMfQu2bAVKVmVg2bpKqG18iYvZ77mYGxq8PnXx1HYPyJg7FYAQDTtXqnw5BPEmN8UgBrE56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H64oyJjXbatWKcA7T7CWyh5ArhY4XwWMcF5MugwypXawpWGxfmHkSKg92m3mzDvQdNsEhtuJLfaHtx8S6xkwSp2",
  "key1": "3p8mS8SHXLvk9PGoHtiyVUR9WsK6is6zm9G9VpjDcukCPn4FwmzYqQc6w1ZQouoY1qvKy7TfurCgP9SbNd5u3kEL",
  "key2": "2nJRa8FRX5w41WYWgansbLjs6M8uPNSJ4d2bhAeU6mDptJL6JWKLqRWbc6uCGFJJde873PdnDXpvXCuy62wTiGjH",
  "key3": "3NE8zkkq5SdNnNuLbioa6L9HRJ21hV3Thcwgtk5yjHarmkqJcufK29bEuGi1KpoqRQB2t4bY4EsX4gRT1AGfTcHb",
  "key4": "517y9R7yN5Ycmk7f8PvZnQUBDsyo5uzzkwz2dkfKrcLp7cnevVCHme9Y5XcFvTcE2aM8W9ietpDGnqGtmWMdgJ65",
  "key5": "5a451kzHjjcvN8wyyRR8MFpeiPuz2YbLnCPyNCjTWzGFpLZmNKeqezLs5nSgnMqi262cpc82MuxMAwx3gYsdB52G",
  "key6": "3eXqXQqqrb5UYpHMhq6ojTDdssosis2qf4a6aextGwkvDPrf8ywRP9tkb8KKcyb29fGdkqdEv1Rh2LaaAbJK4xv7",
  "key7": "54PsNdKiy8NrJSebeNanq2ZpBKQcTE4aJz84zuwBE7EFbi1dD7gUiYzGMYACVDy4d6QjTH21SNXphNgxr6ucroVR",
  "key8": "34xg89HHdwjGnqcVHWfYosfn7LHnMcriyZvMRMx5obwdzN1vhpMhkJxteBbcTRde5uFSscsJs5vmxEsZSHAKNepS",
  "key9": "57ZV95g9yoZ2TKjTeHorHZxRPYZzGiT7cFuEp5evpY1yYQtKv4ExjJwEJYETrKJC1XgTUczNNUguCwv8QqGzuoHv",
  "key10": "3i1pJQe7xd4s73buFFhurtTrKUvCKmqLT8ttyzpkzppQbaskzaUnTR79WRozZxzytKiLd4Q3EVwBQfDoaJaXFjM3",
  "key11": "5C2cAdJ5pUmFLFyPzzXzco5wRVwEeAsCcw6mdhCCshg37KhZy4hj4KXmCPbSL363pVVwrhx9rZmSgGr5QsQHzPKL",
  "key12": "gJYMqN5D4wLPxpn1u89jM63gn7pc9BKA589VKp3JctkNUpYq86JNjGFVHdr7Heo6YUTj8khPLDWFswKfxoXWBZf",
  "key13": "hmZuDYggTTQnmyjaDs3cV6BpsouiVD9XeiSyJJo16iFA4mayaLH8kZgCFgovc1jNJrmdnrH8Yt92rA6MdJtT5Fi",
  "key14": "4V26kP1XzV4XQ8J7ASEwPpebLNTESbNqg4bUwhUW7iuURwqz4uu12ZmtNHhL3HMMcvZ4D1rsKiiBPrCUix1Ua8LS",
  "key15": "4RcTHzJcckedhcTThvVFifxYPuEoJHxbz2TRGVsbKsZRVJJrHXJ4Bm3V63GShAMVk8RCxLLavjX9tbfadZXAu9WS",
  "key16": "58U43gFQw9jGPGJSDEmy2mX6fX1r2TAe7nnWqizsdBmYpQuJpg5mp9jVDLAwVKXTXyaXFSt7kkbWSutLTDdD47FR",
  "key17": "4m9ch8okZCzS1WU2qh7Uw5EKUs5TpAwz5WAPZEJ9yzmuoXC39o9TvnqRGsoWEPmHMGCYpKTV8trkF961i5ePS15S",
  "key18": "5SDTbLs53i1t74ZRmoJuDarqjJdFRRPjMfEcJBqMKnZNAYGzzdW4kad2vD58Y7br8EBypbx2NGbVW3EWuL533YJz",
  "key19": "dERRLFKkb2HQEW2h51AiNDgSDeyLchnNocGChLJpGp5kzR7761gd3VBjYFtjcKi5gB6aRv4tWnb5w1JNgbxMHJa",
  "key20": "dVtneXN6vuWhQhtFNX62x3Zc8ecbjovk3uTJwFCRr2jLYcBiF9ewkPpmcizFbP3bJfVWH7kEgGVic7914sDpF4L",
  "key21": "4gYBxtkvXF8wf9Ntjj4uCwmpkFo4z1WjDwkrDaG7DoQ9F9hBrpapJhLo8FyU5VqfH9nZ16Hi4HVvENapTzJhnjsA",
  "key22": "5mGa4eMxT1nuozvor8vDLgXaxYMRR8qn9QKr9HXUntfo2Wdp1s4Bi9on2Rs8XCzcqZer7154coz3DKEm3FcC7Srq",
  "key23": "DMKF5X5K7tRFTTVJWkCfTwKmNrtintKFzfVaHLwFAwJXW8K3mQctYjGU1hsN37D2wDQpV37uNNfA1eR9cSs3QZL",
  "key24": "a4hGi2Z2ELeaZAkA5mtzGxjqUjwhrM6jAt7dfyQxh7YN5269Y2zGMTj1fkC7QV2fQqSPoyCBbnbDVhupq3mJgci",
  "key25": "2acNg1HJRjgNk4WRLdVHcSUCaQgWZ7weE3FKwKVRqLCQFwd8WHx6djhj8ZrXScumYTcWu6maVJD7p8UuTREi91VR",
  "key26": "4ETUmUwLgp1x3XETHjCxNs7ZBbanrxTPGdbJiDNRgfppwUkHeGSGBAGDLV5y9fjvxp5CxDYoyyXJg7YANroqrMSf",
  "key27": "4kWAVh4af3hhSDpo4sYbKztgBb66uD6jRwvUk3pMvZEZKNcAqKiss4FVDraYntNXhKCax7wkXBxXVYqd49uiwewc"
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
