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
    "64GifCsSksmKVGMVkbdpRR1TsL64pHXmAAkofWUw1h3YCSsUFCBtGqMdYu2R56p6UoRQZkrQbCch6JhokrkQwQVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W5JTNWrNs7anDBj6eh8NoD73B62pWuoCZRNYL4u1X54ErbJ5yuVSN1Ykr5ShhgSBvmMeL2NF1PvcpdWZKsfTqrA",
  "key1": "3Sf5XK2F9WRZSPNAJVtgYmeNXSmKazAjRcjayYNVVzrxFJANxYQBhQ5os6psmjhy5KukUJUkJt61qCeqbvb5gx4H",
  "key2": "5mvHz1bpJnM41hfQmEq7BfCMP3PNz3EbqCGmoSaMunRtvysHLWiQ1Hs72EZSdXiUpZbpvKdFR1JBWzYs3Wo3E1xM",
  "key3": "66gXNBtNv3YQDPhNfo8f9tqDx1yi5mUnEiWkKaKAn4Dfxf9rqH5NACy5k7dRih956vugewWY1U3LK7JKZApYzi7Z",
  "key4": "3UmcNJy1SBm6T5NiLHt6tghJJktyK9yA83AuoZ8zT6DGKtnFA7mh3w1whyw3hxc8cHHpdgAwhJQVWh8MAZZUxoYm",
  "key5": "guSmETbk82wZ6udCwDXPN2qMnAAjXGJY16ozqp26V94ynjhpLWarAMLkKnhTLFV2bM2nNVpciFe3Si5oDAb4tnf",
  "key6": "ho6JQ7FJE8uofEUQ8MYt8EU2JGoViursRRDTDTbCa8EWuPua5HMDBe8dooUaXQ2Swzaa6RwjZAcMmcGciaGQERg",
  "key7": "5yWCPP9uKY473by4GLTY5cJcXE4qPo5gdRNdViVtcK4jEo9kLzdV8G4khUG2i4BwTXwHBFczppNft1EU6H8d2NRh",
  "key8": "2wAvaN5aDPHChcyhHz8r52Lkozv3YTbwprQkATnWesXzps3mrsLnanCBHuFWDqJuAn6jCBV71JDvKyWTcheG8672",
  "key9": "4bPoad5HxV1KwgMKjsyuVf9YK9GLuc5fpeJ6uwC3cfYzxmEymsDUxxhFDvsYXWY9kWEjTUCpcVH7xW2tsq557gAt",
  "key10": "3PYRHK5xNVVc2RAKDPFJYJakRhSVEoVP7XnYC2SNL48cx36uyWBeTAD4PNtFjsgb8shqhiJby6g5zfkbxFpVqKSu",
  "key11": "5Nt8eUiX6NXqjoS8uoMPJNQ9F8JfzL6Ta6dCxwYXCDFUJ4b3ih396oisbKu4nSRqHUP35rz9kJvfPGKYRLz3Xqii",
  "key12": "UQ7XML4c82ViHEPg5szSgqcA9f7ZRkGMXrAiTZ7oe14goiJVJymZSwzkj2qQKXDBnvmYfrrTd3983CNudc5Dg2j",
  "key13": "4jp6yBzASiBrr1D2JDm8pESsjRtKqwRgjACGLFSjS1FfrVQw8koQngqrxxSLRsfoJ5cDaD593sycpca9YRc5nCUs",
  "key14": "4mTeUUc1sEAmfkwvwVcYedH1fPPhCHKyBPJuBwCWz6LVQfsVf54ZoN4HHiDKqMJNxed6htCpvyphpYe4y9RZAZxS",
  "key15": "saz5fjU6Q7W9bURVcBJbdwZ1PVsLbFAvVU7TuiVu6eKSiLRLnzVnhrz7xLgfzruk8urvmJBwViAAxv8hV3FMchq",
  "key16": "5KByD4pQsEURqjECoiY7qBwRfScovRyGeBQuTrBiB8xCXYGduaJgSBdde5HAci1QdEsB2NMup1vm2oi37ZoYY7BW",
  "key17": "3uu1QVGdB2jJ4KuX5Cf5iw2ktrqhx9gZr8zsXQSSJkmketbYakb3RAgbNBZhrwqZXgRqeLae2eepBm794bBfZsac",
  "key18": "jrbcMXeqpCmfvcLPP3JVJ1ZeZwMtchbfjHtPUAndX1n8GPw31G2UtjjBVJ62PoaGa5Z6SJkzdL2EkWZpCYExyvv",
  "key19": "5uWUXmBVaJ1mXCmposrd3jrNTvyuFbEp7N3g6vJXTkdkur3P21873ZhFrXzLLS1PYNA1RULqV2RZyPAAnfWCk3av",
  "key20": "4ReVFqdD7EFhRqLbTtcEGkZenbJUKCJEV2a48Lyh82nnsCg7gJWJfPx6rFKPs2F942d2Un3Toc7eJwQ6MeFB7th9",
  "key21": "3DpMXF8jp7jdYkC2Tvnd1i6HfzgfSgUgGgVVuPt5jdtoKZUeA5CTDoq2944q3RfKKXwZcyGWZFkg8G5zctK42VLC",
  "key22": "3RHkfYgD6uYFGdXwpK7omgTubcZwX5bwqv7A4tGvNstHyD1XK8XKFx8HF9pqPLMe8Fxd6ZL9UZPQBhB8xvqEzsoy",
  "key23": "5p9JNfWXb9RBVqkVkUMws6MLB5BR7wQXT9PMJq67ue1t5q5tZfJeiQYH9VexhsXovqUoU7kASATkMhQuun873gN2",
  "key24": "5gFfiSPZef1ZQJLZ9ynoVHCcvfTf2Bdbb9LhwbPTMuK3EkUenRX1cwiVzH6PZGhgHPvTn6AxGDEhKrUkypN1kFHu",
  "key25": "239vfNRvr3hQcGrZTHTweohV7G5JbbU8XMCJsZUCsqTDwdFDrBaoT4Wa63cciF6DogyyWsoLar9WWXCzsfd4TW7K"
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
