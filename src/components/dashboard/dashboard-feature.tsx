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
    "5KvSZo9GAADRtKH739iDnqg6dVhNsxrqA785FHYvewspYeqit8gQxnfNWx1HeaJByKEuuzCj4CcVQWy6CDkSQ49S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fWqMJDQNLHUYu2VAQbfHp9kRsHYFsXTw76yMAET2uFq19UEhuHfRWeN6ZhmNBBaeb22kDLeFoaqEfVSXDnG1Lfw",
  "key1": "5pWmAMGqThxgHZk5F3k9widdECSBXNvPgxMzL47WoKGxhitKy3Ed2Kygz4fwc2eyq7eNWG7L29YpM3MsoDzeH9fJ",
  "key2": "kB8rqQyruNrZ29vF7hPAiVbptbdKWB2Z1XVsF4TLNY4LFByTwJPKXn4RtSfEM18Waidt5Afkg8m2iVY1ZV6fyxq",
  "key3": "GMeTker9A5S71sjDsmoXhgxUReWCkRdmaMrgPVqHbZCRfRqf6yhAYMVqXLB189wbU11fn6YaTkwa67nez5pxnyt",
  "key4": "4moSVs2by5N5pxcZYEAdyTzfnCY4RdFeC8ymTEUR6VLzadKyncssfGNByB28NyyePYJJMc8LoeZeivvo6WRGar1n",
  "key5": "3tp2CnhbxfrCEb8QyWhwRNc1Kfhdp45QHk83rJ5GQfjopSHR1xcbkHf5xbQXyrqQ7A2RJkMZUF5tqjMU5GSEQETG",
  "key6": "3qRntETGb7fKHBnzVxs5WiyRLJxVzH4MxjbdagHL9kADyAMirH8yn8WNEMviKKq78Cki9FK3BCMRxqRAZowxPYit",
  "key7": "4V97kswqnwE25bufKvSit5iwpbPi6fBiHXu5oGnfVGW4UbtTNP7DJGquMLS2q7KkVKx2HJ8MYQkBuVVWG2A51EwF",
  "key8": "23BbEzJ8tq2emNEzKGeUY8H7ZGxarmt5CFpAbYxjsyD58QCRfqpmmX6fVxaWFq9ndt8fmZy2eyfPw39qKDfzyEKq",
  "key9": "4u3Z2yxQAPau3VCXcdik8CfZbS7oUWCB3JVx4dn3LkmQRkN53wb2DSEVcbRHFgKLtECL5G8Yj39KV1ReB2fhm8df",
  "key10": "3diGRSE38829PksM5TqoXsABKfTZzr92aSzJV3iTp7xFazt2nFGp4UNWTsVbPFxwcTLfT7iRs37zWzm6z2UFgQ6i",
  "key11": "2xM19AU8G51f2T4PqFB7FGcdGwFnmQSmR5DhYJsBkNs69cUyVqxWjZSQGY3Z73PiSEQg5Hw7qqPXa7tqLMDYY7L",
  "key12": "1qEX95cKe6PxihQxoKDjCvWh4KF26jXmqdxY58rFnjsQCpALY76fgdfk56SDoguu1q7pRKGo628BKDCZY5qXKQB",
  "key13": "57VHUmLWAbLGQcjgU1Y245QQjhsejDZG7J2ayXwsaaPu6DS8CaUD4WqLapufMtcMXuD5TfvncZUNyoE8nUnvT7jD",
  "key14": "21RUR6ErmEfDxDMC6255e5vnKSupUNyMfxZyapPiBFHJaUptrAV815caNLVqtEcVPdUVX1PEFhDvwHD1HAJ1BVyo",
  "key15": "22GbGaPZ84Pp61jwNzqWuNmqPRmDZBj3MuAN6ZYreiHwi2YCed3T1JDpJZexR5AEd2N7vMQWRAuhzoZ3Va6bgte6",
  "key16": "ED9GJWVgfcJXHnVd3dt1NYMiYmns4vUx6WUDWeDeZjcZm7Br9f63wv1dgrh6ncNM6HkdPpkVx3VpqrtGMWKZf5W",
  "key17": "5SZ1i9BNyNZtfJKee14ZozZBdU2h5xAb9cA4HEtdiogWmhovAUbwAkbXo36StJ8P1WfFMe2HvcmEkW8KpGyz3epw",
  "key18": "4VNDbeBMsWMxAntMc4ESKcgyAuBWAF8zR9ZCReTUs3SUgoTyZqyqymoUGUhWgCue3UK5mZDq1S5bTq3PpGVh6vBk",
  "key19": "5WwYowm4QEJiGb7Fi8c17o44ZoCw1guQCK78sh16fukr3NmXfMXSTMCbukuXbxWsYDBJ7UNruTvUpFUXXwHDTrcV",
  "key20": "2U2MCWfX2v5yZS6Y5Uptm3vfHFpourGiVSfVyT4teFxXXAypfc9tqTnZrpJ4EzndZahYNLrD66mqkdpomKNukFmx",
  "key21": "66LpKBDw2zMATR7WZLzjYBo3dTPDRrbdXMvXPYNFgENfa3m3DXagnDg5wNitAbPyeRc7syiyy5ndqNjZjeYWB6S",
  "key22": "WnhmBecYsLgcJGtuBCami99MmQvLKZQEZwe2faz7ahoVq6PRZ78MaLbyLwyXgXaAmLyamVzg6TNQJKKRbcFhdae",
  "key23": "5AaXSieYRioMvEMxKwAXbnUKrb49xDXihNvG6RV6uyfkPETPYo8t4okyChdsxgfqgeAfEwr1Qzgku5PdCYqMTEcZ",
  "key24": "648Z3bcSQrHserCUww6a5MhUFRgJk2sT31y21i7EyQgftnqmd7K5qUV1bSTGYBgVw24gs3inExNwCkgARiia59We",
  "key25": "HMpKocc5oiQ1qQxvBzbgUsNQrveA2sej7RFvoE122En6Hf6uvjqAMweM9Gc5PhGjoWf4VMgMvsZVstMzCoLaC9k",
  "key26": "Sbfc3Lf8dzHfbm89DP1ASUUMudXmVvETK11ZCbwKidg9wBcZM7d7LFmSLKbSpjCBqMbAPYrsinMj262nVKA8NJ6",
  "key27": "5EvGTjZGBDarCQ3Y4qaSErS8P9bLdiECbqynemJ7WsoYFzn4EsmxX7nqfNuTgwtprPYYzcXyaw8VwDktfKTnK1Jv"
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
