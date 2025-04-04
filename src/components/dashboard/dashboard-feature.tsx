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
    "46c8vg4Y3tbixHSx3UwsThz9kNTtEbdnM5pwFxuxsTUfKBZgZxy99RHnjSFzv3RPEpUizXuaGEH6KrhUTKsjsUCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n5eYY5psHV6MxvgetXULzhmWRZdErvyoK4qAiVuUfPDCDAnRk7hLgM5ta7YKKPDkbrKEnmMPRp4hTfU68ZUG49X",
  "key1": "5ZBHEvqisj23eL7JgVwsuMwgBCqm6a2A1hLLQ6Z8X1oyZGTpHJrJZQbQVT8367j4DfGDs2Wn2iBNw5uQLQWuJjHr",
  "key2": "vCntCr7u1W6vjYYY13i8VwmfTxiZDyM94t1TYgcqvy5e3JdnkDBbjMJeYKxEUiBb4vJDfMJRN6XKsrk68FTYqEs",
  "key3": "2VrxqMzXj8rPtMy1Ms6G2uK2dnJ6uz5jEv18jzkS4FZ7esEQWeshBmJsYDKSgZgbiGmRWa7keHJDLJb7My4PoGvT",
  "key4": "5CUG6GXpRKoxLuzY3bvU9Z8GEKEvpzdpZ42bmUoWj6cQE1Ns376hShZxvW3MbY5EraE7fvW2JgsWrAnDfbuNunJo",
  "key5": "GMgHna67DFtPxXUFYRpgk13xmpY6s86Qp6KwVfGtvJiC88bKnMByMmFTaBLYg8E2CWCcQs6jFP7KU88c1VSVm6t",
  "key6": "5YWiQWm1cfFJKmqBz4tezoNzPEGJjCr1kVhxCrcEu11eSfRac2377fbamqF6788RZ8GzUsMEotGLURjwnDEWjYN5",
  "key7": "5sa5WcchfoSqGzPDxd2CkErfJUUjzpHuAmQHAB7oeiC3D42GVbaM69RaZUMYPzQvWBAGZcv1ycLEKHEWU83q8Pju",
  "key8": "38VD42mC1gFLdpAn1mPscGbfkJpYyPf5D4cPyv7LZ1GE8H6gfvfdJf4t3z8CoyP35gcsJwqYw7S7LZz8dwTiQCu5",
  "key9": "3b9HB7Tc1EsPMrUmgrFpgH3hSbDArecepXp6mKuR6aDwbBw9BPP22kStorXxibFyusycE4iAgW4f1JL1H77wnezb",
  "key10": "5iavf7zJZDaVabXjZAUfPgkiLGgQrq5f1KU7MrLG4ct7j2hcr3zPLYNDBcA7zFdXP9VauGX5ATLYLWDGtJEHKnRh",
  "key11": "4n44dHCujSAUrW8KFprZnwAJijCvSxhssNsnZhLfa7A7WziMGvJ4z2MpsevdvpgnC4WRRPyfKUCXti9AiTHxxyxX",
  "key12": "27QFgQZ7q33J9f2xJ6194jovcZPzvcpMsaD3bw7duPY3FSYznv92WtVxJu7U2XtznEf7fvixBi3RwmgoACv9J63n",
  "key13": "jwtEoBB78Ay7xsk8v7Kfk1rn4LUotjgAHCeecjqPu38yhJYeoT2TA1e1SJjwcL7FMbeDyy3c21WUrDhvTNHC38J",
  "key14": "4QAyqraaG1fxBW8JqRu8LroXEY7Y2c3k42k57eaFBffyWfmXyoNyiucYBhcZNaMjN1XWZfee1UjGJg8WJ1TEs27f",
  "key15": "5w5qHWUjRcz2PTbudabYR5da9phrJ1c1Nvusqs2uDmfvHpcTijr1a78Xixc8szVLvCGuiBZf1romQAxBPzwz8SBL",
  "key16": "4eTyT6zGYPhiM7H9QMzbvanB2rG2dQJo6wmn7LNnNmCqNdePXqcvPLgMjrkAXD4pAd8UzpeB5VBWg8w7CPesAHYH",
  "key17": "33UpN7izeLsZGy5fZRysLqhedaawY59tdQki1y1ScVF91HFn9HvKZ8Q1Mb8jKAziP6N1kYy1rhKQPcCfSR4Q9Zsa",
  "key18": "G7ATfjZfTUYr2wkx6KFf5EEhwAAcEgWeNzkQe1knGQmXae1FEyv1wdpn9CpwjNT2iHRxs6fTXNx9za7Dd6icfwA",
  "key19": "2nVYZaPAiKLbdrEoSjtYgmHN8MUegpruTV4GDK61BxxZMxgBKaNWoBUrbzSGTijwsoGz6ypf22WHqFmTcHT2ChNX",
  "key20": "5ZBzprvpmTJMtUUi9L46FpPURcyzZRUu5vPLqD3apdwFKPVpyeg8782VCiF9B2nDDnhqg3eXdQYQ1hyJixWvVgL3",
  "key21": "2mevBDaAje8pfQ4aVeEttUq7tAwSVu8J8T16BMEZ2CRZ1XUXKMAKZ5pboAY8RWNPND8XxJXYoSRBLhEi4k3doCXT",
  "key22": "3hrPS1L6fghcusGTefBs31QYdQ2Zk3fbUxhuedV5qukogdkTH4rdTd4hCSgvkBrxWP7AZJgFRs8Y8Gp19aTRZxyk",
  "key23": "3GKRmodi6z9g1dzL9Nj838xVjHTrbt8ETEPxKjCwLm38N6FRP1dCqyMjrzr2QwvJJycGL6q6mgvXLACPCenz86FQ",
  "key24": "4X8vcKoDqu7ASQa6wGkqjVy4PDzSBKD3dDDWE1pxpynGEyTbgRHjZN2PWVGqzsymcnPQzoN48KswvAZkEc8mHfD",
  "key25": "j8gYEcZz8qk2LRHfhcuxBPSuno4EBZatbV2g1PSEDvKkyYHA68u23nTqrMhHYUzGVPFemiGE3nv4cEco6Knbx7j",
  "key26": "TZFeDtJLWCSKxnT7wDjm8xFoyJiAQehBftSw4NkjZdBL53ut5rvWUXt2VHJFCwWgvY8zb5LDFik61qddjxGpANk",
  "key27": "55Lnuu6pQK6zkoExoaMXmCnYkPgiAWM7yawJz947Me8RaFUNHJ8NTxF8ikeurQU6rccAk74o6GLsfz5tnrwQk1bK",
  "key28": "Sn5y2vuALm7oR2YgfaWaHUrc9EtRLqeNvwcffZKLuGMZt2QsJScz3knXW1WEzFS4eZ5b34JxdeNBh44TnuwdrLk",
  "key29": "2K1BzxHwPAcf1wL55J3krLkVsUazdV1DCgu3y4UYNHPUFD15fq2cA9KXEThgBwiNPfrYHTBqZcDDE34ANuzwD1vy",
  "key30": "3uW6H9K4qKCqdHsyvtjGghQ6Q6PGaMDp7phK5KtM7RMy4JJsbaniEPXmymvjKdfzzdzASEpL6ktBgDcYa85vV3WF",
  "key31": "4pDPY7QN31Fw2pSXFKWK3DjDmFq5pSjEWGo9bbtYG2cpH31xRnodEeQX7L4HSJANi4oxeLifgsmpg4PXGLsbddLx",
  "key32": "2AJ478GbbGqyRD7ouJwNkn86J2Vawi8j3pAzod5tpAjAPeoGpm5zz98J8MPdKCBBgpzkFRyeBQv2ep788UCRW6o9",
  "key33": "4aHhNYgZzAe5u1mTBZuNXxxQVuzttSeADCcc3L5ZVcZJUKyZx9yUE4LWmJevKxtv6AnbtPcrUdi7fJ2BeVFCzM6N",
  "key34": "3L7S5b8ewntn3NisdqZN7jw6W52HsvM1r4yUe1cUeypN7V7XNHJHWT8vZUvXbhwUWGCXxkf2BspYvgVTXwaUgEpL",
  "key35": "5DU866GcBmSb49rFEu9HwR3TFR5pS6hQ2TmeJPzWgd6qkDwWNXYf25Q55a5MBLTSkSVAYwDmD3QK82RRHqXApKtU",
  "key36": "Qpwitc4zg8h4fWh64kVRGt3985i3gKUSj299XgaR3YuEVyADRLLFnkMWg5fFEkyEwDy8USPyCBh2Th1nRMcaqXE",
  "key37": "mU6fxQWKjApkbeeudtpdHUVkF55Wdorfi2bXDi2GTHtYn3rTuppaQVj2NRgW4hJTu8VHZhA3HR8hU5maT29Q38h",
  "key38": "3pcKWAEGopUiaqRwTYYxE6fGcADba3GxqzPgMoXP71jPG5K28Sjif2mH7UYaBw45VQYCC7W61KcoetU2Ydsks82b",
  "key39": "4msBA9upWEwZVWuv78L3XHKDAsk4NTf7ZEtVcZVFRcCAoY6zkAzgTr4sH6vpWZThxk8AKb7Nx5uDs7tE57YXUXAA",
  "key40": "62odia1sCXcMWpnUdQBq3hUbW9SddLAuR8FsE113puFXpTQz1CAY74vPTQCHV1w3b7jKp5J9suv4nWJKhvwWpDMZ",
  "key41": "36PRwApzmPK7C4GNLXQC9r7c28ebqooSbgN4grcyykM3RBrg4Bg3nSMQz4PVgQQscdQhz6SByW5gUbwsC2KYdDJY",
  "key42": "5k6oSztJsnfKgDgs3pdRgLzs6pudVd6UwwJLmPUy4PZMj7Yitr7R8arAda1udk72FuxMFoMgybJKf3RSi8TQKrWS",
  "key43": "CUbGBjLue41doeh9VzKmSYKXX4yDm6DnfE3omUDwZqL2bD3eTSoXifsCRZSZEV75RATkdpi5ZoP4DmcFPEGVBiS",
  "key44": "4iNPrxbsyxooKsudwpAJrLDtv2gD63qTbRo6YAxSSqpBjATbaNo5C9Dw1kpiZs6zSSemjiSwoENg2UqJZCJUessE",
  "key45": "5CybyWNc6S2reETWWa8p8Jxu7ZwneR8LavmJVVsYQf85QV4DWkBD3VCH2HNXqVnmkw9vxVbAG6NCD4zwA8VrreUa",
  "key46": "5kGqAQjJsnPovEk2mbSE1wYMtG4spuUCcEJMjR88zv6SmMhHMDorFMvQR5gVTdNk9Jkno8C3ZLxeGEPfXMATUPig"
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
