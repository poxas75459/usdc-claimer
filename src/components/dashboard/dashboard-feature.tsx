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
    "3YeH3SUSQMwB29TYCL4NkKMDQw9K5eMQ8mEtxxESVQboLX3fSqV4a6ABTcRu82wYsQ128CtGieVcC6hMPXgMZHYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c2yJqbKWu1gz2U8vfgsMGQqMLCTFptFcTVvt8fqABAv4QxGw7GRVENeBn3VVDgfFrFFdp5W5r2AwF62q8GxZkE1",
  "key1": "34QDrff88zkbRbV5Tirj7cXfTK8zZ15WUcy8X7E6k9PUACn2sMeGQr1571gcop6J53fmWNF3qctr3uDDy9PnMnpS",
  "key2": "3YzXHhAEUTPPLk6ZNRVJWsR4yzsLnD5Z3qGkmVX1Lwv88rKGV2q4rPFtzGV4c8nfoiBAz6FoyqeSMBmBmQJoVydK",
  "key3": "JFsRSWW7nJVWPVLBj47DQPiC4THK5qf2T7wb4bUVYzijTH2apc49YLcMmTueCbD1kzh3ddjNSGpEMbxq49NmxH4",
  "key4": "3ogkfUfNXkyvtrqW8nM9wuRoaCHnnJR9pWNHfjze81nDPtMsENAPXuKGK2Z1GvYgmLRjZwSxQmGmDjtf8cDfeXZp",
  "key5": "4Q73g2ZAwo22a1xDFwQXxDHxmYuDiTF3yxym8kabUT2CLfk3rLMVo25RRetbCm5Sb1WSsrMb5GZmfKsUgkeutWnn",
  "key6": "P2sepscw3XWnDszSkHZccJjDqnK4yjiiQ93FksRqQpHkDfVQEshzTEwxBPskHdYx9pGs83v1RewmtxVJiwfbbSy",
  "key7": "4Unkte35FJixLkLUV8H2Rm9XbwotkdiMXP39iUy1nsDD6LRE1mpeC2xWDRdqNWH4Y6DkWknJC3rPHKVrp6aJh4mz",
  "key8": "saWVSvgx9WQrbbFHZThpwwYpq1JbXvFgdMhpmrBgUroLgW7m24jZEUzWFJnsswvbE8ke9my5mPP7VoPPaeAPt7R",
  "key9": "5QhGfQQVDzHBV8VnhHmat2fCPKKKVzLMyrGjY6e6jvyofDvVT1H2pLC4pGKvxFzdhivTUQcDDyh6A7SZHPjuErvK",
  "key10": "eJKZBKtELcWwteneN1aMKTnKDugGsXwiP4AxAvxG7AgDZk81pLNrMFi4SqueD9rnFh4jNpT3ijG3GW8s1w3ZFzC",
  "key11": "9rW3CECXj9aPtECfonNJ36nxGyb471TCH2Y6qqs3zoWUXTSBwfdgkCguukzBR5EorcU4XmaxSnvZEhfb8sDH8n5",
  "key12": "3pnuTf5geKVZ2267svNjVvff6shikzva3E1D8Dxs52AiGTN2nZtPdBNxUKFShCycBTwUg9KmZJMUkA1oU4yEHWEu",
  "key13": "5JJvJXV7XZaAefnwvexrigmpCv717zsoiwuxgZMjwvDgvRapwjHwrpFWv2fsMopha8yiKPbhCeGxm8eP7SAykEus",
  "key14": "Z67ve85oST1WdHAzsKeR5uHC2UtBU69S755pt1B2zTdLyPkLRbq8mvSG1QPGskHzTSJ8Hs38X9znm8BohZ2SLns",
  "key15": "3k47DLy4JJdUAgrysL9cQwxLAzrcyBMzV7xvECTq5uzCy6Gm5ErhK6aksct5Kf7NGeZ4RFamp3BcrdfMRKU7fALS",
  "key16": "2Ztjy4txEjtaLk6WozzwoYN1ybu7GtdAy1Q4iPMEXwo3erabhRMYf9wAQtYUf28B5Xqr9gCX8a3btoiZ6hXDa7Fz",
  "key17": "XgDtYUUCq5bRy2PrZiXwN8h5DnXvwY8JYMSPotuqDTWirwfJFpB9tCp5U6gV3jdVBopsSQyVpkQvVdvFG5aAstF",
  "key18": "4eudu5cxvN22kaHKXMn2bBbQJKFzZjV5wYoRcVtZvSnWMvDQV4d6SQqpP7Ms9to8vDdebrErqsFrt8HM28jbeUre",
  "key19": "37xKSu1QLTxnnrTtAPZdYhTNDfGjC55osaanxc7ABrGPb2fiGzwLxrnrHe99kevCMSoL8wiBpvkL863cpYV1pLSp",
  "key20": "23vcTxWorLi1A1SbofJppLW86n6EKeyEMgBz7HN2VdFT9UgMWqB2muYGtAThhMnUFcbX289X98hAS3jvNxavKuJt",
  "key21": "289nNEp2EwWaeEZNPXjvTHFnDb66kvBCHCkqHZ1wXqHnvMj3Y7vaQFKE4MJuL7rGotkThk9CGjiask8i78CUMNfy",
  "key22": "2wsBqVdbdgTnQve8oF2TXHdhBtsB1xy4hjMh4FV3MpkZMjyazPjjTizAFjh6xpwwYag1dyE9CmvUigk46PgTjCmA",
  "key23": "5GRC1NsEVNQBcMzsi1uF25zVdRoDPFF5h7Yh8P6fxbhHBswZBRWayYDiZSX7nFywxSTk1xQ2mN1wDCp5UThzk4Gw",
  "key24": "5m9Zw6LuF9dYke7fTGqUrv71YAamDePu1xxqQDLwVerkNU63fwMAD1JGUsqnADibPivM9Yfs7tU7w9XRJHeDcFgL",
  "key25": "4GBhG65fjZUQkCfH1jB3TucToMKzjCfi8qDi9bFpAekKKewtm4gSMKMXxvkk6Cuo1fj9rYMtbusc4E9PqEu2Y8Kn",
  "key26": "34r9cqbd1APN1i3vpq93KBqhFD9MwMHJTZbgfNfUoZm14vnBeDKyDAvr6gyj4eSQTPgmt2KBa58adhbJ5LDDg9aE",
  "key27": "2bPAuGk2NUdefHePpqoGwKJnNdDUwVoBYgFmoD4t61UKEuQeC1odZJ6vWUUMRcRVDmTLV7ph5Bq7Q1iRGyAaPniZ",
  "key28": "5TWoNPawF7xot8eV2DP5jdK81qNH2eU7hxtYXGg3bJ6qzVne8behrBQB7VY9tehi1rTaYtotCnbd6ZoPhqfajFQB",
  "key29": "4tybjfLYjvv3ESq6VznTFQes6q3gZfgFX95rt1SFJ4c8A9PRT32qNuNxGWUvvRoMYTdwpXDTeyM7dZyWHiJ4VoqM",
  "key30": "3TarxSdtKnffrCuNMK7nHU5hMM56YZcAg4MMw4Z8Tt2uiJXDcQ7cWuGsT6ScyBLbcYCrsmnoJ5EdVKKEgcWif2ZF",
  "key31": "3frRgJ8LMuRkE646ryVU4JfESmkoDSUtyQ2Yrczg3KRpHe3GxtgPxXTXjVj7fnV5QurUHRmBkL2buuJodjAL2wk5",
  "key32": "4HZegtDnmnZVR72P9BcfQ5Qh4FZZY9EaZaRZJTWbRTQszNxdoAAHs3xMDy3ECoLbvwPtn7PDen3evuYr322ZUNzT",
  "key33": "NNW3yYWnkwwtMzY9pVMmQoUhE7FAHi4EinyHU2TM4kYwWShHSM19vNiHMcAHRpAvAFp1LR5iRR8omEAokFA86P7",
  "key34": "2q3faBrN1j6wzRKmuJMU6nsPHT8C1dfizAEtoE4MxYE5pV1KibSDrtgqeEvhuLLMKJKmT1bEAYNRfXGm2RrQmzYC",
  "key35": "5LxniGXhZfHqNQd3tB8gBHfrjoYsKjCrtjW8pgGedNYuscPWaNHbeghj9SrSxBLp4FSLF7vv8VjgiEQXZ6YGdRNF",
  "key36": "2uuY9igzPCWGeiFKmvTZV9m3Dipgutbw5iaqKdvcbNZ1mrDkSjMtUBCVtmngzUhTtLURBbVwunAorVtEA1dQUVt5",
  "key37": "4avgGAs9wMGUgXxjkAEvJDN5Wzq8wdMRwTaWyb6GhbgPYjmFs4RbgH8iG5ZVKhufFdW8XEX4GQouNhEHp5xfZJRK"
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
