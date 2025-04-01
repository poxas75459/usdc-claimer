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
    "4HMJPtkaw4iXKJEWdKW8a5SKiFhfmuVJbeHURV9gwiP4pDb3VTdCeyBQWaEU9DESPVZANCSD5d648tiQ4bpMydPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZhhnUF8wj9s9jTmeaUr92GP12DaXebY4352AaoCuQjFmEZLqfqecwc9aU2hRSEx1BPkF8bmNac1fAzzmsnBuLaD",
  "key1": "3f5FY6Dhs7oHp22fwH5qN2EqRxCb4fgJuWBD4pwYNDvfhN7uew2R9TpR85jnoDfS4p4UFG4iuCasbgAxksR46Xcq",
  "key2": "51RKkCvebPxhoYABXW5GjMqe8DM7ZNnaqwvEUHMzATAzmMc5qHe2QtSMWWrHuSwutXRte9wyPrRwuE2CoxewYC4h",
  "key3": "417DAE3DzgLkSwvkeBFbmAa4Hydq1Rio1DvanqbsLT2mCHbVzTMeaRbDzRbCaEqZnebbUmtMggPVFZKXdLSdjt2D",
  "key4": "MmTAf3VHh7kijM5xF3yucZVKJ15ne9dgAdrBYjCzNbJnJTfYZ5T341dC442rH2QceUd2yENkrUFKWwMdEw6KEn5",
  "key5": "4dTHcuvUPKZWVSNZv1FrMJsNEHnheb6cyK44DpjVo97YboLg7VAQBDVwYF29UTHEbUqznDnM9arh7Sd56E13YNB9",
  "key6": "329hxNejnCbJXmQBv7HUb6rfG9iTit7hPKwtfZZfSGsJY4Pbm8qEFvwXTK8UmsuTReVysvbudvH6d5twxhPKPeZ9",
  "key7": "5JH2DLPBLNmrTrzuiUepVUjCWj4MhTXnfdjFqQgn7FNgrypHyHpR8qHaXkEKqufTA2VQPHQ54X27qpJqgovo5LrM",
  "key8": "CCxzBu2TDvAkW9C548feBU3RfB6UXPaS96rdyLizCi3AiuJ6N72m8gntcEUzLknCXAXKofVSADj7m7jFLSwubyf",
  "key9": "2Z81KnrVqDNepgm5AxF9AUcp2exEYiJFiRsHDZGdDujgwUCKeRxkvdWpwwwZA52mehmxWcFTbrcqdGw9PTxukNCh",
  "key10": "5PiNcH5mqpwsD3MMJZpy7JJJz4Lc4PJdxkp4Y9xq7igLQ7YMqULPozxe2gm55Sfjeki7imA1f4vVhhhecFDCXwva",
  "key11": "2K5vh2XueE8AJ6QzF4G38btdeXBY2vCD4hFFLBvknKLEr7ybBxDrGmru6cyxCWT8dYnDMg4MXPN3puR5SFDRkXWw",
  "key12": "2p7DC6CC7x3f3YZJmA1chERc1f6bSLxvLy3Bo2PfPqeoARrJ7BGq7NcAKkSCa8YP31TRNa4N3VJVR86wGMynZ3ML",
  "key13": "5gENZ533fwSLDHsL4Wr5FS87j4Lx3pXRC5bcq8USauUzaBpZMw2YC6sq31Eg7gAtbpZuFdgnBzZPvD7vGnBxkcbK",
  "key14": "2Uk2KnxCdVTqjrFp27VUGuey2E1E69QU95Rm4qMDpThPpcscGsrC3ViRoMyNh4v11vKQ7PqXasGbrYDYFnmP498T",
  "key15": "2bRMwBA6TB9EZZMnYKmnMA5cgzRirT2XBngpcb17Q4VmtQiups3syabebELJchyhw3anaQ2Usc6Q7tQyMxKXcAN2",
  "key16": "2qacfYhNeWpJvhrAbD7s4QhHCaL9ZKaEBEQsWQtyx2dSzEaEUFfoWc4WpL5s8yKXDobi7Xk9yk7519om4k9aRhHh",
  "key17": "2kmDwwNwcaUy5MPHNsPh9ZQAZR2PNMx8Q33HrCEazXZ9cFr7Stij7RzC2k7Q7Y98wenHKmtPwcyi8RPiCobBN4X3",
  "key18": "54TjDMe5vS6AVquDCCyLwfdSukkdpnDzX2Kij942GUgf2vKGyS7XZRnrSor2gNYUfJjJJo2PZFMBmDitrGf6Rhc9",
  "key19": "gyDJVhZjQkk3aM37a2Gt4z6MPdR1o9q54hzYFwhtiKptPAXJsRPRBsedThxT8kUBS7nmgP7zRDAVFd8kSD1h965",
  "key20": "4sTFJnjqQxBgmySBUtmrJuJzddE8LfbgGeyXc6cG6kYiWWeHaD5oP9pmoM6UKWM3u8jxgjziAotbEssCHtXJJNdG",
  "key21": "41MGcXGU8wHR7yV3JnXmivxo2hNd3KvcG8scn48EAHqH3uJQBD7j6yRMoRsmy1wH3WPCqiBnL1dfRomwnXYXkrJq",
  "key22": "2KWiokgm7RxRuXfwwaurraj3WLd29UjBNU92G6V8GBjSiLqGaK1qmvYBpWqzy6XKDjNwnz9sC9rt66mNk1G4ZxaP",
  "key23": "4VtF5cJ7gqYTePYv6vvcQvQAm9aKVL5ppieoKZZbRxsvY8NXoc67dMv8BTp6NRzbPHk2hZmz3dLguD9fLik3Tvwy",
  "key24": "52Mz12AuQCRWYUtD2eqdqeap2CSDV2oBLv6w7LH4G1PWVnSKjQjttrgDiZdR4nLUrHoA9CYEiTcEso53omCXxVSY",
  "key25": "2bFqeKzuuRy2wmLRLiU9KwSE8DnUPddnhuqYc1AKhdM6PCfAK9k1sbUckWD1HCGvaB7eRNmopaHwYmw176eC7XWi",
  "key26": "621Azt9yBqMpiJmzycgNWguJerMxvEkUL9SXcpDbbAuyrv4RPAxQYJYr1iFjqYH9B7eH1REp6EC3kc8z29g2z3oE",
  "key27": "4sWLd6J9SVXiuNEKaVAjnWNKqnsHWBtn8AffR5PhSnA3MeFHdFtPyzt6qm6KuFvDLiPuqAsvy78VVEMEb14ws8kX",
  "key28": "64aNvGMSyMnjLjdEQHnCDTfEThCBaCsMPL9jaBNJf7hqAoYUVyHzqfTxMqra4NYLUSc6JzHhZxFXWYmnk7cwg4gJ",
  "key29": "5eTLoHoSDR1kWLngQgcSauNYEQisPuLVvbDF5BVwUsC7mBxFDaG8u3aiuER3238isyt6vxbKtCu2BGrht5PqR8oy",
  "key30": "2BDyizpbPo4LJCaYQJ7TmgYKk3ESfXDspvXxi4AdkHgyY53qb57PoBarXeeh5dNw5NPq8xvBy4dSf5YFNH9q13Pp",
  "key31": "78H8CCMQtRiT7KfTV3nY1PYRywsLThvTJkPHUfchrE8N2Cejd7GAprYXqXUUq2iVgBzbgUy2AX4oa8xESBcKALy"
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
