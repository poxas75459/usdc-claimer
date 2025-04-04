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
    "5KZ1Ww6mBZJZK9zi57y4wzGJSxymTELTmkG4tCjSWyXaWKCg6E7UTCqgZZLRkkrC74er9218sxUzfczLvBr8YUpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TbNk2nXpXpUfFdEMehFLPMmWuREXoMiB8yUNLpVWojbw7BUnvmVfS1g6qswNH4jRyAwtHNyUnxfgexF3mbfUtrA",
  "key1": "5P4UgHPDojWHeFE3f53Az1gWJ3Nz2ZkdBz2qhd6DPPcY6EzSwW1Y6S81Ws2nEus3rLnQSKLVGpydGBEEU8i1B7Gr",
  "key2": "2ZLDvEBEWYMaV2ei63vQHQbLa9ZjniuCwkKG3icMnmPc9Ek6MEmjiPV1QFLo7EwWC6HN1oW19ZuBMSPFkG2t2EbY",
  "key3": "2PE9z2uCWzh2bDhZ7fN39ZiXPfU347LToVmUhtAYW39svnut8prPuvEZLUh3gFNqpSSF99JwggsBopE8j68iAJen",
  "key4": "61EmadJA1KW3uHcAHSwHZiXGuFv77Dt33jjFFyrGCakGY5YfmE4Vffrz7499m1t6n9U7GZ6fSy9dLkBYHu9jbfZZ",
  "key5": "2UQHJY4xRwDrSvT3fSrFcdQWvBLqGLHoW5ejrRYBfFGPJyJ9tKyqzQ2mBkRHr9yLFYdDhnQBEvuABPTJvPDbCCx5",
  "key6": "3VUqiWgBi1oDG5uEJxZbPnbZYuupsW5UxmNr7dS8qVcaLv3AoTkmBtmCpc2jaYhjNgENKSmmsVx4WABC95c9bhBf",
  "key7": "LrLLytgMmJwFXmSW6sN6tzT5hDX1U9L63oAYyLoTpUvdRpsUXuQe5AJvrvomnEotR8Y3iNLfBsVdLNx9pmRPhhb",
  "key8": "6361cLDWxV9tZNuRGfguTfMx2r9dPnpEUM6kmaoWAm2TSYRKsqm45coMBD3h2TqPs7PDxZBhQyqo3SayyQjYdsBn",
  "key9": "D7L8xMEngRnPTGwob386wu7FkFDgLAjQbXAtFBBGE6L4bNSft6g5p2wCsNhoXtvQvtFC1nzsKnXqYxHiAjFupXN",
  "key10": "Phnu3ccLLa2UK6AsnEmKSW2dq8J8DXDwojNoN4t9gQGEDWVUyH7esaEXEDyzibadeyyp7wCJF46hcSmxHQ6AfFV",
  "key11": "5ZDvmEgEpS5ZNmo3HQdqA1yqk8iwV3a46zed8k21w3C4wzft3tYqt8Km7n486wJVKSCUk2x9g885q2Dk3eJX11Dz",
  "key12": "4XjuEPNxNZ5LPGRbnG58qwZjrfdqiStWciXnv1XTwynr1dL35zGqsWmbs2zHcoAK2ZZWFYfQc6XSJF9B1x9SNkFd",
  "key13": "44P4MJiyFfxm1R9PYsToPhayEmkQDZZUtgN6KGVPkWeQRx96GWYE5cPtJyJwiHjtXcQDqnaYdKeX34YWSErFGNbh",
  "key14": "vpS2pWhSq7KsLTc9HJfKBCRUxawpDvgKxkL8CcbJvr2MD94xgcudBixjjv3ufHhqdBpBv3Urf75NHViq8yvYXs6",
  "key15": "muHfnHpYu3TAvknLqXQktM5dQvLwE4PtdP5j91dYadedw9hAnYMakom4yeVtoUW3Mx38dBXcxN1S5bcrJL89jRM",
  "key16": "5H39SMLHGBaoftcMkxtvb3VWyozdiWX43rJM9AYiJkNEDNeCX6Dd6mCwMynJY3AyeS2Ks8KPjKCU4QtVEc5Fsmhr",
  "key17": "54ivn3NZJqovSdK8QSHoiBknTNhWdeq5RT6oAJw6eVjmsKx4nSL74SWTYY16iWtXLZa4QvzeyGxDrnDfAbkAky3g",
  "key18": "61KsexVFBocVWtGJmSvzdj1CnoMZaKngtDZSBUQtrrL9o5a7d9a9PvwvZAM7B24z2nDRjwrTvp7nm8uxNPdHCYMp",
  "key19": "2obux635xWCcmrpQAdPNAJd4PLB7e4YHUXfVh52d5aJyNRyJxEmVzFyRtB7PjZWES7RF9As9BR7mukkwFrzDRaRH",
  "key20": "4EqfEben5oxNBeLamaG3MzsUXaUPxUmCK457Vn9JnjU1op3hJFHBFNRh4TjyD5ryB6VdNt17ebwVxx741hpngNfr",
  "key21": "4XMk3UoYUNTssA7JTZgcX8UGXHSYyMXfpTFteUvGocd2JTW1TqCKLstPWow9TVaGR7ftKYaJ7iUtDdEPnnjhR7Qs",
  "key22": "4HW94PUnH453kJtwJabxiWonpr2gjQmcNiuMbHciBBDzixPPYDkBTuPCHAV9Krov3H4NTR356Mez3mXY6dMuSZqW",
  "key23": "7igWUSfhAQW3jiU496ByQn1fSd4571dvVdJy9DHkDBmgqFzEMMW7BtUvdMbhRcaU9mr74oQyyVwvfJuM3LuRz55",
  "key24": "2iafJiPzdHpPHAEPkjnbW6zzGH2VVHCJ5hYoMcW5uaY2PmwDD3pqLK4JLAE9QRMdc3i8tW7GbLqFmz8yQkHP2YuL",
  "key25": "3c2uz3WaUZsppgREtdDLDtzxmAfL5jzVWEYe7fDNXL7RbiVVWEqmxsJpuEXBWHH4qpHbiwXB1dGVfLAQHUtnVNHc",
  "key26": "2cnfvp9J2cQg3JCgQRnPseWyvfm2n4xQDECUwvJQtnw329EDrmaEuHc3t178naFLm9753mUG5Bxg4NyM5AM48NSm",
  "key27": "4YUFje5w9YdeEZKRgHYdZmPNQ1u9iF2TNNDRZwst6LjboDNihs1dQNT2wu2tgVsUDJGQnXbD2uiLHD7UK9LBZvYD",
  "key28": "3GCZSKTG7dU7YvWKEYhFiZG8huGdXbVFGBiNdGvfe4ePofZqdeEJPvf8VPKqe38CaRy3uq1qQadVtpk58kgcrxSG",
  "key29": "9GVjENy4AtpEL6f1RLKXAxmnsAQpJrT8XLs5Pc1jznWLk9htoakd87FoLYVfJgVuDzDx6hueMLz59hKiYuRSHLW",
  "key30": "XetCTKSghq6EvqHuFEwMzqpHWDLXG9Vfs1HWeShYSXdH2QfiRfAjmfRLAKXqwFPeBSW9GbbYVj6YtQgkrX2Uda8"
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
