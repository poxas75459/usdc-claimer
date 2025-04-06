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
    "44pBbARp8hA9uoM5oy3zsw9GehWvgNHYDeQVj2qfdQRy9eurGueD4WUTf9HCG61BFPP6UwF4i31659ZqKzSFj3eH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bB4yhCCkaTV6w1PhL5tkfJLnufrqJQuxJPeiHN823Hm1uix477AxNBRvYhUyM5YoXMKwhxUCEQS97ki6VtMabdB",
  "key1": "3wswM8fjuhd4cyWo8xtv4sAzj3Qa5mWNh3u7sx1wMjo2yJSMsXT8GFiYWtuFhMABgKW4zk5rbzfoU42VcL2Lneqo",
  "key2": "3HKM75aWSUQRt7F8zRgni15fxweZRcjPf1Y7Rv8rnvYbyLFhUaeBcbmASX3y2KAwui4adG1pbbkgyBn4QYQqK2sz",
  "key3": "3bpN73bqaQiqb6h9VAcS3Q8ExghsSsUNP2AV3eYiyAT2AAsKYSm4mfehNSos6fDZ3d3J67KbGtiM495mg7BSCiGJ",
  "key4": "2bWsMteZxUr1hFQrakZ4hv3nktVAxZnXjxQN2o9aqZmpxyVN4XNPfzcK3MExcpgurrpPLh2VS8cozbQ7pv85oEwv",
  "key5": "tDmWcix8icPiT4Wq3WjBU8xmLbFe5ZkiDvvr5Ldf55DiKjDMchKSfpDTe2Vd34tVssEEaiNq7g5xwDt68CKN59c",
  "key6": "5ikcxsnhkgfuSFcRnpETVzAPpiEVQ7t76FcWDEuqbAK9BHN2ChTWntRybnqK6HsFMFAYi6WoJV942hS8Bar1xXaX",
  "key7": "2ub21CmStgp9H4z5aNE2AWGQT91d6xcLhYWXcETQzPbZvbXM7Ckh2KcYFyTMLUKxGwaLtQgVHwTfqtgLsfREhTo3",
  "key8": "XsBqtzJn7VVSEaN1R2VGKvZy44hctEvr3fDgJHxTpBuM4rtTL6t1rfBzN6QWs2Nj2Ao8bzivctYX8uuNnV3LzTL",
  "key9": "2PE8kEQu3Wk9q58qoNEBWrvVvybvPJhTrSx3H6NKE4zKbjP611ASEZWkhoJL3Ev1x8MGJhHJzm1VoHMKeMUXfJig",
  "key10": "37xq4NVBmVzXmn5eB4x7V2NixfzHqrdiRw7MgTB5otVNibFAYsnNrZfrQGE4tai63kZJSwzrx2pKCmYhGbfhMhSC",
  "key11": "3zmVyd7FS7bBJMQGLASjs676AN9AzbfHEMTEuLiwFdB6k2J6UWNc3Sz2s5pA6WGWnV8owZ6QX3XmjbMqq6xvHaKE",
  "key12": "2Yr9R4Ej6D8ABoecnnrHttgkvhPPsX1VoaFGrVNvV89MHzDNRERaLhbpvZiN3AQuMTS4bYMB1bEeQtPwUXRBo6Gn",
  "key13": "4jFxMp8joY24U6hd38FN8xCKGaR1C4PFRB4tBphnHLtnsCoUfVxYZHGkNXotFMHSh9jR1FYp9syFqrmxWo98iGnr",
  "key14": "5pxR41pmf7ncNXredDHPEd5vK6nxtJShahGn9VCFiZ39g4Y8VnrG1EhHaxhQzaEJmz17kjszLAXQHsxUxnJ32mha",
  "key15": "BVvdC2P4PYGPPa1AViChaHvjiYZoNdG2ERDz9xpeFbVnhQg1ze1VBBbXxgeq8w1St5RMjbFkKH6kRGFkfsq4NXg",
  "key16": "5xMiCEHTwnxLGogYd7weKpP6PuQ8rxGZS5W4nBSN4Z7RCGvDHPpEuJ5LWmm6hDD6fo4irCCLyiL2wnyhJpm4df3n",
  "key17": "RQR2z6sRPRX6zXE2ih6918riFAen9NVeevDQtdvqttrkoQLwS8Z9WRtM9GYJPFuryETyvxVTcjYUFh1TeTVW9sA",
  "key18": "2mAJP92qhTSFiDDeshggtx3C6MAySkENUxBMcYpffYsGMhr9Vyn6BNT64iYpR4g8d8haB9cMwJPYvsmFhZXuJbfZ",
  "key19": "27Xrbv68QZBPpb1LGYjmSSxPAg2hAGpHHz1e1KfuEnNs7y2adpLxm27JovnWJ7xjXwHydRyp7RJZNauFPDSMcdYQ",
  "key20": "2Ef76UXdAk9JQAUqftVd7RFZhic7dugMgxoBcTBBbxrbDEsS5FY1Me2YhUe1tytdigSoATMJEjMAZBZ4E21ryEtP",
  "key21": "3EKm6m4NszHVm7TJzizoJrnAUXPtawn5chxG7oMJzaTL18kYkqWLjGrwMxArtadwJpuZvYN6EhfG6zJTrjgNMFQG",
  "key22": "M9FLMUJJU5tGdcLTxEm1eGgS8giLdupB4WeUQ5joKz9TJTMWeBAPhaV2QYCD52xTUuhasVcXyj4oyjFa5s4aVKF",
  "key23": "2VXpcZiQ5aH4PWAsLtyqLx4WKFeHVV7hKahFrnbGrNNK8i7drap8D3RmtvFxfduiRKYJosFyg18qecTWjidPZnNp",
  "key24": "5Yg7xHuMaAdnsQENw2ZoAP9STf8Q8qcBHX6Zvoq9M95uQ7fhkyWD8GVQVK6bZJeCZXK1W4WPqAZa5sqRpENjFwae",
  "key25": "2bSKebBZvyfACXjgjuQJwi45WY6GHBFHW4wmA5eaHcbvfgYU5zAnRSjCGD8oeSBpbRxqc2nD2kkBZaZaRd1ja8Vv",
  "key26": "3YYpNiYuA2wnA7jKfL5PeuCbAwkcT2MT6A2wDtVm2WBF4He92AGCwCknBNWPpps28c1euX4jSGff8i1ncpfRUjF4",
  "key27": "jBGp8EZZsB2vegXtRWfBAGRPTu5CkAMR2c3PbRoqQsxFGiTEpWSKBEbnVgMBX7ZzBn3frgxf6RmbhPtrLkTmprT",
  "key28": "owwD433Wrm21jV2wABZ5GiEgNoVxdeb7WTy9xpKyPWXuCxciSRyifLkfQtfWgtvsQsbdehETe7y41v9vhoqDHwn",
  "key29": "d47MoqWHhW5aUDLWZ7nF4kTdpgxYuL9mWkHLyjeT4iVjfVooHXs2sxiBoq9t2Qxd85FTE9x8tHAR5qM6K5V4cvF",
  "key30": "34Dk5BVWF1XRgap56qd8W9zeZS3H7GKjuu912pJxsmKamuNFsQVNJMyfJAe3TXpQ2Gxivxhwp7EL3xjaAvtuig7Q",
  "key31": "5M76H9VLQuPCCGfBu1Da5HT6CynW7LJSmkor2sLZhjJdikVGM7vLmE5XZW58zXX2hQSHBXfDuTJLStRJwDfZSt4o",
  "key32": "3qj11LLCXzCdRG3BTdu8iCuKZjaz78Ze7hdosJugyCxRhdtXUAz8dYZmodJmey5vcnxJfTm1xHiDFXq9QT16hKqc",
  "key33": "TvysQyBojqzuUEEhB7KpKQiH2kTZjUvyCN3JHeP1pmtq8pjpXf8FxRb3ighqFiJbb2hVDEGvcWR52RL1vWRXYXh",
  "key34": "2EHBZWm4X7gAitcoxFHxG6XXWNXH6bum1Ff2uXz6JvFrmf2vwXtjK7MqsUe11N2T786nQi4oiMAhFTCMTZDjH3Ls",
  "key35": "qYTeWFpobBDrax8EKqYZM7KYHpQgdUqhvyjpgn1wZ5i7UNXumPgwro7JV2mbbcbHNxEUAG7vppkorLbpVaJvpw5",
  "key36": "3VFaCgoU2G85igj3aKdB1YVEwngTx4fpt623HMcwtouQd312UxdWdHyoFELVxp9oE4Csce8LQkUabje5fyNxsDRd",
  "key37": "36PpfzKoAnghSi223ryxQQW7DYjHJfCoGU6Y1MMd9pCJHuoKXNALFfPtkCn1oLb4fixfuub993W9NRjymEu2LcdJ",
  "key38": "5tUqoZ74BoMx4HTmETZga8PCf2aNXiwvqA3yLVdxikNojB88iN2zCtuyYtwnhQk6C25CBGmEKhjh6mN9cyFcMND6",
  "key39": "3cLbFuNL2fgWabzQbvXVrzu8GN57Y1WS2AqYCvVYtSeAVFS5qUyiDfXSxSjWZdEZixKK4Qgurp2ueyGGBj4SgBYW"
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
