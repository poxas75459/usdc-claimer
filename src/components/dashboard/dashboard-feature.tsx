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
    "GkXrJYQ9jmVxGCp65rQP5YUDHCaaHfaqtCtUSmzhyYC4GNg6TTTgQvAQSXQFjQgUZZcBxteY7FukdEh65yWgrzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d4mRSPiwTYxTEgqVy5kcbtpZU4uLwBZXu7RhCoyxusWeMvtXPExay5rPkmNN33BcUDcqSSSQxam33xJZg9xAYER",
  "key1": "5wFFVXDoCaYV8u7NKNL4bc9Nr8LsxM1kTnFzjdpPpzrx7tyUAN58ekimNLv6CX1tXsoUuKgrKZJV2pReJEKV786k",
  "key2": "EvsYYGy9Dv79AVkhVwgkDsdgMUGw3PREkGPN5kQZTDuJq69rC8ZGkTez8HerzEYGQ7LGau6wbG1G7bEJhQwJxL5",
  "key3": "3xyCT81baCvcBHvtpVMhNK1ATK4iXUmL1GCJeAWXAWUJeQDkgVmsi8xC7kzteAXDfwX5oCwYjui4f9NRrAiUx84",
  "key4": "dTMNQY5U6di99MUiPgrzvLuqggPJWaMQwz1oUkncFqfnejNophQ8oy9erQNXKhi5HE1uWQRkg7uDgTBV6MX8UpR",
  "key5": "2N4JQgBCHkiDw844hkciPcJwT3QXvZpH1uQ66SaX1oNfmANJsucjDRcpaorvdK65xArm7rP5wivezwu6wFHtscPF",
  "key6": "5n9otiqzBehskerqDPvKx1WRketQ6RwQ8c9ihoc3VuSRfUJHWrY2JKyp3J96enneADxC4TYs7PeMeh5BLfxq8Rqr",
  "key7": "3cgZQokNVYdPaTEddiv6aGiXKKizZHWGUtDZUGGGm3taDScDcvq7T4smy2N9K8tdJnBrMSQZipAQ2EEogHjV9ZXM",
  "key8": "4JSp3es1AyinQzZsGqFxCy5g1htT1XLumoVaEeeVVEM1mdcQxY5zTq8EWBdo8KFEQYKRUXvoLruhs474UaVJrzo9",
  "key9": "57oMrUex9Gev8cwVYZMZTmKY9uCtUYaHsuhSMeAW76Es32hJ7QauSd19MHPuu4Cb8odsD9Yhp79oopkXWUFKVZe8",
  "key10": "4PNP1xDDXo8A3bjD8kahsGjDE8dbBMjBomHCTrJEf3ypEJUrYeiAx6LABk41nDGyaaXCWEYhg2HwsExm69T3TKzR",
  "key11": "4gcR4NEkrBvzELQ6gUuDFr4syZYycC17ANCiPKFu4d8a5kqFzPmXNHWmiLZFag2qmRKRRS5YvULAUoKFUXq4MkPS",
  "key12": "5yxoMty2awLNMP2jUPiw3Sh7xesZv4GznW3n4Ros1YTm4MerMVzLMmX6kYXgCH2RWzM2xTQpeA2RyDWJQPseFnaz",
  "key13": "4F422CSzg59bA87SGCg3VSC74PJiLzqFbB1FHsvUfuSqXjv8XdrDxTpegQPp8fb2WSqAgaEZGQDAqNQSBCZZp94g",
  "key14": "3n2kLK1V9rRrGqYD38Adsde6SfEDkbpo8oSF8k3finm4JHv3b1bEVNxG8MZHMnDqiAGER8xQFFvxXkAEzJyUSyYN",
  "key15": "5hGhY4ZNQL3Q5U8Vhv68CBMYXW5x2rxMnGWDHDydq1YK7eecq6qMjT4kPHM2g1jV677CFEZYUKA4ZRbnXwCJNJ3x",
  "key16": "2H55SLsnSmcuQXbW9AfwZR6nMdtRnT4fN5c1675XJJTpz6gRERJWcJxiwXoj8yrm6j8WXpvh81yJohApzbiwcppu",
  "key17": "4UcvZY8zLqXSBd8ytTJDTNhwiRrgvVgAH13VhGmFvzKU4VFJ8CDtZF6evhzBpABMHpBBJa2Jic1tRaHc2mky3yvw",
  "key18": "3e22pZh37wGKYTjb1HZAv7rwhm5JgeREXaC5Nh9Pm8bPtp9F2QbLef9yxB56WYUQrTquFEFUZy8isWaDs8XL2xPo",
  "key19": "5uspQxXX7TcfXPdYSMG2Ykn5JToj5AbmwMnuoueFswqFb9DtFrrmBAAYb7ndvxxYHmBX3KYJ4BmR6fYCjKidTdyp",
  "key20": "5eJxeNsorJzxbzGS5nzSVoasz7VdSAYpQvWr2XbTGX8LqZgCsSBKWR2WmYuGHpyb8TGnr3sctjisosJwCYw5JUZT",
  "key21": "4z3scPbn6hGpFXGMeyV1bXdvNrLUX2R88S9oQ8fHH3whCqL9MJSBiYdYr5LYM4z3hQkhUM4aVF36JLiTTdJ53uoe",
  "key22": "2iiGitPxiWDKhZcBwJbeGTgt168UhzkerfvQ1vJ6cPmAgNo3uMtMu64KDV8US8m3Jp8izYZ3srRvhuqy8Euwx5xp",
  "key23": "2Z5tGMV17oaNfbq3GTkoALmLzzTh3n6CGBNwbtykFvdmpgmK8x21LWxHXRPjtnh29rU2QMYfHp6vjVJnZ5mzeoG6",
  "key24": "43U7TjZBb4E33pTyrHGUYsnnsy9c8t5VqVnhakwVzFsGWQNsNTVJ7U4bvt1ZaLMMZ7caPxeYVqXMAWhDM5FUsviT",
  "key25": "5Zuj1LQv7K3P31iLNMFfn6Gb4L2F2v49Po1yQeKZU6z8zt3nEjy23HAeMBHkmRLEFfDmNFKCGpmkvoD3hSeUvfm5",
  "key26": "2tDhHtKme3uwV2VX2cGwzs1MzZWA9kMNuHmxJfDcXMJJYFZxLkECPTcHAuwhgYi7xL2ScwzuCrodE6pex9ovaU7E",
  "key27": "nkV6SPtn7siCG1FDwwDvzkbdSi1kPVgewHNA54yyw2MZRKpekWRLckwkbuAXPJVTEt5EVTm1MmVfCx49NWhUJ37",
  "key28": "7oEaRhPztxX77bpZAVPJVYFsZqZ9hAc4tSQoEwpXouKRNxTKCcvTvwuurTtkNrxB4zJqwNohwLfzJBByeG4D3YN",
  "key29": "23gXER679vqSSubNCqdnZRYshcdzi9bx1KQgrKyH3S8quQLQk9pgT13zx1DgJeDGp9rdv44JXS6j7habmuhzTHdm",
  "key30": "2ubYERkAQcXpGeoBZywG5sbNyvACZcNkY8wag9RUrjiSqcRNS3fxJt21k9EhKHDZ5UmTQf7XpaeP7N7JU8KWinE7",
  "key31": "avGQJrYc6H3BWDnsDAUBabmvVabfZ2vXtafeoGGRAgma9f9VVeTpNoLuWrdiYZp3PiMvC3D7A4gRs9wZbrosv7H"
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
