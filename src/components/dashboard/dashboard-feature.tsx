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
    "2Y1bTKBpeYCJg2eEZfXvMMvaQtagHpGzcUtWj5GiHSM7xpbkvZ6Szi3W6LNRYLfXd17XjtFHiSeJL84a43APMDSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Diry92fHUMUp5WSWdsVdUvGnoTwsPUpX7DgxCMPwCeXdwdg1bFfAPWgAPTKSjmSjtFeTCUax18uSWxQDrVCWcCM",
  "key1": "2MGNuUFjnpbz7kfS5vuypFS83xFdvWzpMBQbUvXDJ7va8gv2bRDQ739exuR6grK94mpVbYcEWVjKaLmoBANEXvuP",
  "key2": "2ghmvug2ASX5DiqJFbGg5CnefutLf6muN6aoDrhLXGrysDZxjsSstH4o9WYgRvjF3skxgfDGEoqXT9ZRfi9m4pbS",
  "key3": "4UE6nhYPRUmiigHyBXCGFJ3dVEWXWq9aTM9VmsZHoqE7mUdQSGY81qfYZvU1KVfd2ztLktj2WJFnC76LJDSCV8kQ",
  "key4": "43JCMJBW6kyzNRAPv1pWQ5qp2WipNFhJn2zk3RVa27cDmiuki4kTM3W1ZfWtJ8PovzodA5EYkntNbxLLj9koZemZ",
  "key5": "5qL3nvCHLeRCk2aeNxhyaEcYAuCMVYiVcK7x8gAjYeCHgdXMc4HWgzSfqv2jDskAVnFLbEE2EwvxcZ2MHkKYzK4j",
  "key6": "4ssJhDx2S689B8CN8K5beDVJHLLcqAmNzMgs4DixvfRF1d9eYtPqQZLcFgJAJQDuACTnFYjuN2eFi8j1WR6Dpfcn",
  "key7": "MFJ77U9xggyCEhoes8LJRz36X1GQwzEXCD2a9wPSSqMVEjDwdwAxUR67oVc2QJ5gYHZuZZgg38eUrJrcGZuiqwK",
  "key8": "5Gm5AFadN9yb3NMHE7wr8BvgGKM2LL41WjzpwWWiGLAhSikKcXmWDQfpYC3thh3HCz7wM12Tgza39iLwW664qNHW",
  "key9": "4njHhXow2FJcJKvv8Sm1xYJC19VX8wCrWJvMzNskZ9Kerccy44qZRQVoqoP6jmHwiqS9xw6iwypkWvshJ5qRWAQg",
  "key10": "4WyBNxdst1pwpVTCQf9cehwmRhF95DQVb1sh9ECGHGbgStM9CBkJUxFoZoSE3ahztSSqaQAYWPMvbY3LHVxMiXiR",
  "key11": "4nZUdxnPFeHqRsRreFdNTFDcpGVN24L1kb7L5CirgcBZerAv1pbPMaoiNJfxQa17zFfiRnhmNrDfuDsYRjrZh16T",
  "key12": "5bRNaJuovxR47HohfC33xez1uJ7tG9UWXNqSjJBMCSnYtwtfpW1kwPiknbvRgDDpKGfitRNic1sx5Do1oV3kc5Fv",
  "key13": "3qWdzt2MDYuwEFvSakicSM5aY6MnTxqyQFrUgnMr3phhdu3DhYbpKtEKFRUeTaC9V4Bokd6SxtiACr6eKZsT6qun",
  "key14": "2yi1E9kR2EZxwSKBXw6vPxEHsA3bZ9URSJ7jdct9zXcui2VvKSSGQx6MmZ75ydkf7YQ1g5z9fpYhPGk6FVPJqzTh",
  "key15": "27mRRAu4NPjanhYNFSirwNYZcERX1sp1X4cwQ5tSW2UnAvspwZQ1dCavwoYVgnVWL8owN68VJy1fcaCciHRr1fvE",
  "key16": "36mhnPT2N39Y1sPEfFVqrVWJ1M6nr9S6H3W2XBc6rX4BqZbTpxpRNTNT3KQterUaZb1xa7sL8NAf7GQT2A8ztY8L",
  "key17": "miynu9uat7qX3mhUae5hzVPYcEWDJ3bx1eoEtxc8fShFzdSdZgodDEkgzQNgqpmZum4mBYxEaN9i3Y1pPTSssT5",
  "key18": "2VhKCkznreaBftvmuT6Rif4Dd1vygCx7a8hPf93pb8b5SnvL6sVDdrAW4bLvCQYooKJGeyAhwc7K3zboLPbqug4J",
  "key19": "oCcWRfd7WiDGZJBACwgsrJVj5uyXFXr1bHAbV7Fzu1sLStttNvhmvwVVreW2g2r7nck5HSFcTkozFXeoXqkHyNg",
  "key20": "4yecC4Txt1GJE8HYh1Fh5iUZGZbcgH2r9W9eurVnEReUEuwCSy1JhvGFTwYxoqSPBo2qy1pcQ5mw8oNkcceJXwTt",
  "key21": "5yR4mPMYDrLDBMZnECwTWjJPT11va8bu57gPvh3vu4hLp43wHJw62JapTjaUTDtkKJbdAKcC5XPsJkMvUD7Mbhqs",
  "key22": "5Si27DTt8P7SQc6LLxr1eBKnoJz5SUMdQ1ddMkhCkAHT6LHd8EDkcxLu6FiN1PZyauAfJxuQbw81ToAeVxNFGvXZ",
  "key23": "4Bnz7b5NmVhrnniy61ivhCpj2NRY3vzkiwNVUty6fmZ155YLWKNeDGDe5ECaGrrUjSyD42yAGGsaNTwWrJeDkSA8",
  "key24": "2Pq3xfD9wkRw5uc5hkAaVARBeA149X5z5wW5i88XR7b6pupSLxw5aXmMcXCpo5Uj8QT6tG6qciTkLHELCNRQ8nRz",
  "key25": "iP19ZaQDiq5Ux4UFhpZiHJMXCFxSwDjnrawuKeKESyph1gXHpFYUZmv2FfjKcnyyofBiZUXuMaxVqR4yv8y7Ht1",
  "key26": "2zCMU3xYBxAFXnhLwcnLHAQgtFMVfDpUN9MezttW4HVMiDm6oodzKy4WSuMpMJVVAM4Q8awJsHtiR9R5vbXL75fy",
  "key27": "44fLJRZSY8moJBQ3MEAwvboHv6oNA8nvDKftFBn1WvZMbUbpmdPX4Gk3SgifaL21fS5GFr5fGx2ki5uqSqsQzZpj",
  "key28": "2MzX8Yg14oSmGJrUdDbRvzpR4Z6JeT5MgG9txhyY6arwHhuXD3vetxzrtmsgShuJjTaGnUs2YdzzRBvKU2WpcnKt"
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
