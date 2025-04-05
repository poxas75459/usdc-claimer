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
    "65ojiCcjWRGYaeofJb5A67oJDLr56zZhYHpkWTuoJzRrD1hjv3ZMjR167L7ehdMmtPxTejQEWiKUCHb4N2PRQAF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tyno6z7Ytab4G6h5K7kVpMAVNRak2BPXpuTeuGFHUFZyCe17HxA3icVVnbAdinDA4VcQZEbU1rBT8KydxuyrPbu",
  "key1": "5VW7idqztqdLs8iEi6t5ST7fGi26uzUqkCU89DJZN781XokDLGuLNSKrfrKiCQjNHdozftLM5FvxwgkEVHRDRRH2",
  "key2": "5ZeoGdraAvTUhpTXquV2yd4grKa84KDf9aJt5obKyRSASNd9EWmEdrhfDR87izgjPA1ZkSpFMJWCTPhBebX1vewE",
  "key3": "2xeCQxobvfP76MywYkzjEN3TfD9i7KqkMjeZUB3YQjjyNv5TcKz2oQyYGyGY7shUMdNYFmxKREPCmRc6oG8cWoWn",
  "key4": "2zCsRNhL9XPZ8MzsPoEN6WFvfmJoiZhcbEAq5VRXyuCYcDBpgU5cL4u1SPrAyjM68DiNjMUdhgZbgfhDuJ8zoqX2",
  "key5": "3awxKLbdfmgm9dEVT7WYWazp64MzukS6z1BULbb5WZymNRQcCyYL4V2XcaBe2ZdkFUN1TXb5uk2tKK9F7GNcSNvp",
  "key6": "4jsNPNb1KX9pz1V5CkMhhKpdAQ8QbEys46rL5dCsVhEcYdMpRhP49nJG1dWGomNq3g1nf2E3NGjn5zRwcpnoaUrV",
  "key7": "5XMhAjBx4p5m8xGqNtYZcUF9GoorQHKhafpqnhddK6YXqfDZtkxnMiyxB6jyx7KjzrYejEszxqpwQTjaHoqyhcSs",
  "key8": "4oXNxXY2b1ZrWCF3Es244nvErstGtwDwE9P85r62E9qV4AWdMUowTJ4U9ToiyJjAag4kFSLnW7WaDosQoHy6re8f",
  "key9": "phDiYkBFWRL5WBYNb5J25wLeX6dU45Duf91TvpuJUnHBrwRzearv7L3P29i36NCpQ4RJ8NkhM1VF6GqbjKD7xBP",
  "key10": "3hdquQw1z7EnYRh6uXt2WAcindt32DhRpjQ26bvNgP3GNHUH1TV8y74dfsWuksUgSvCec1gU97vHFWPcHy7wXMfW",
  "key11": "dgRg3BN6b6rsG7zfjap6esfKDEn4B1PDJk4v96AQfC5YNDf16b1qJQAUwBmqwALr9E6uUakEG96DuvtR3paxnnW",
  "key12": "2asHB92tw12xg2ZCF6Q1HjmDu1ogkMMr5yU2VNUsGU4Ev7ZF8jCqdm53ZdCyb24iFSRCURZneVJr5bZKhM3LMcAY",
  "key13": "3HtbNF7dqiwTHDwQRdhrjLcM9mfFW5tQtudCpcBkdBMxHSWMo3CcKPHcKiijqwv7rDa3heJU69XdSFRfPwHyoJ2C",
  "key14": "5jYj9qgTRx16Pf1HDuzFFvkiFn1sQzTLGphWMxxaHFEbrJ2wCQJ2juqvmaBPWWrwdVUZpU6XQsCYEDzXs9eep9Xo",
  "key15": "4puwWjSFh6PZuhFX8pdaxYPhdHtgQtrZqVxRqFPrySrgv4CPgjwD24Lirw4hPysWjPyRdLR8uRbeoEtbHDdeEvcA",
  "key16": "3d8u97yVpztrQF9xgQ2QrVq2kyiXEcKWw3Bww3Zj61uNMjRQsXUTY5dUKWLkpRKn2AUp6MrQaT8HxuAvGgvDEFUp",
  "key17": "2MJDdtCaVcz5w5REypkoQVQXNdQtXKcZUWS8nkXHZka1TV4y3DN3BSEbEfyCU1qApchjdV8hToe7kJxyqiEM3VUn",
  "key18": "oDpyR81sbkRYnQs1noo1NhyDSX4ozc4gUi92DR4NMVMrp5igAEriq2ayjiNoJmrEfCTwUW1bTkiFJan4zz4TUXZ",
  "key19": "4zpti8jDiHs9aUMaPa2URjV32bfJn2GrzpyAqEeV6ZowYkigDKmXRyXKtvCUqciq6p4va5kFR2ELsMTMKhjtC8Eq",
  "key20": "2egYSec3rKYzZXckrSiM9UskzAXRDCLU1SNTzkZZs9xZw1cNa7cTXn5Ph8z3dRNdLfquuf1RKwQHCKDB3FNM26U7",
  "key21": "5U1x9HcAdDNFUKGGMVt3fw4GQfYXhes9DJuRjRp2MhqrrTRR5vfAgf9zS8xbh5gXR51aUGYkW2wNAJf2nThXXKC6",
  "key22": "2LXUpZ91jJqPXsFN6sjUzUoQ9PFNCvXUkpGkp1LEmsVYBqmWtJXHX7RFG5K2MMt1RPvyFeJTih8r78Uy2YB9J3XE",
  "key23": "2S65skWcXdx19J4yjkRxyWjt87xVtcj6hamdcbQeA1h7cr4Rca5geDXfmeXRVU7xqg5aRWVD9mADyghsjKGKgvgJ",
  "key24": "4d99nThEuM2TPZqUxDHcWLapf3Vuba3PLk4wMfCbXDc75SrmaHb7GdePwnckE3Vf1KbW8AyUsWjC9pEFUgx7VzpX",
  "key25": "67VcXnrUfqevkefj1EAscnTMeRfoEcHFYPZXvYFGfkhh8BihCc7RYEiTpoo5f9UtGj2SakoDgd5dRNKkuGaT51P4",
  "key26": "FGbTfHC1Mfh7w1JtnnHErPYhpch6gQwowuiAM2J6UE2HVbuKbtWLZ1NsrQkRyrzpifsoE3nCpTpE4K2EteMFzcS",
  "key27": "64cLph3xg3FHFMtFm6z81MsdSmzAuLBoQPaMSBZF4rJwuDkeeesCbAKU3kxFZJpCEdej9b7etJgEuEghJtSsGUEz",
  "key28": "Cg9eT8EyqohibMr4qsULwt1L8G8qPrkoCDFcDWSgbdcxwwqVFCZgQboGxE7df3gYVDmuqRhfLwvpX3zYtJSfwaA",
  "key29": "2CrpEBmiToDZYDcpPy9S35CJa1BQz8bvL2e6LiABhewfdA6khpQnvH8CycZYt2QFZa7udRZhaCqji2xhuTtUSMcb",
  "key30": "4bHmq38395xM7Vx59LYtJRFX5Sff8quECZZ16hZAzX1HubDiSFjGKh5UJRJ5Lyck4s6y1WgRU7zuShZ5s7qvcjuF",
  "key31": "36AnAbStxcDmomZTb6uCVmYjrepaNsd65n2wHgpkYmdTdx6n8VK2TUCa43PxDUPnqNv7wtfL4U1sz2soqajgWJhq",
  "key32": "5E84GPdNBYbpaqdRr26ZN63tydZqwE736dtV1M5qZhNybxSvo5UAxU2qEapxuVmwFaagzgFJqabhT5xfhUscVJRr"
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
