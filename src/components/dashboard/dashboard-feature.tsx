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
    "Td39SDzQqwgcgjufUDhS39en1zVk1dMpg4CRsdwiKhTJrL3KDFW31bot7oaLNWqKmJRPfGszhBCt5Y7Y8idyDKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JwErMps8j9sttvKJLLXZ7kQDA2CBS7q6pmwwahgJ36P14biDjH1HcWaGsPR4FwtgYsfYwUiEmU8yWpApkDJZhcY",
  "key1": "2PNoz57QMX6PtWGwynp4kW89JRTkrGD49wnewRhoQLWnDB9oYSBwU9caFHdRpdZ4Sayc7oKXcCYpuvtXDMJ2rwoj",
  "key2": "5U5ncon5sJDZkw6JrYkoEkAEfgygKA6Kqh2Y8sfy6cpoRaBiHXByBmKBzmLJqL5ZgFmF8YxCNfZrnD5df2GUtkX6",
  "key3": "2TN3oyUrjsS4VbHzVwPEHiWibupRYZPY3PFi9CiUWSdS8kMcPdDvRA4e2YtEXRyrXi2rpFfPPB2qThaHYiQD6aFL",
  "key4": "5SznCrvM16EzdFW7qxjeEJ8i1cqjsQyZjExUVztuhYybk5Pg1vgSoLEQ6jQovju4ADVVcMoqABCja2jkek3iD6HN",
  "key5": "5MKWgrDACyubCwQQVD3cBBWZPBNWPY8Zps2BF9RH64vHh5wQdamTPunb3JGmqbREJhRHpqXJuDtpCYJCNTdEN5xG",
  "key6": "5swyRA5872Lbdj5qvK6wYxJipfAu7Ciyb5yEPUuzumbkApZwC2wYkfd6TT8MphuGJDxV1ATXsYmUJdtLVt4g61UB",
  "key7": "TxEHWfwiUMGdZVtibSRoQFHHwZxE54cFqa4XZxUo1uubCCpXRDHojGt6qa4eNYEF4qCVG31aBWbCMVDPZZ7e5BW",
  "key8": "4esgzUA64BHizswcwgyvAUFdosW46smiYnJxbgE5t8p3U4MuiP6wPEkp6YEheiBxvL2YhJXfQp3dtF518Vdp9Bh",
  "key9": "MDPMc8GRc5TqasDDeJyj1EU7yNwZXhghaQ8hip9swMU4Drz8AxDGCH9KFA1iL7H8tiuZk14pQsdLqUiRr5AD2fL",
  "key10": "QdPbdmFnGSwhUfXzABxmx58N8rGLYWt3QFqUd5tk8EvgA9bFQhKgUVnPitWFkA53fXNFpLU95NvUdgGeZ7shU7D",
  "key11": "5gLfhy5fP4pTeeZ2wVwFZ87yDmrVewpaZG3R5ZLYoUpMAcGPj65jqTyhivixhGucjmimstML6JcnSri3cgV7ETM7",
  "key12": "tiMt3yRLgNMUD1Vg9nM1SMoND3L4znYWgHJjqqk39GqXh1yBS1rxgbirV9gyA3RWaxEu3YgWK7JHy9a23mq8bjJ",
  "key13": "2kHjP561JYkigXrm3h2RBBGsSH9geBfEMoymqvggG2CQbv55pU4N44zTrD9DaGSTNvxQG8YE3RKUP1PV1ELfJSit",
  "key14": "5adzAjgWau85AZJCHaTqLPSnNE98LZP47SWz89WGM5pxpmKSYyDcxc54B99yz2pPButQ7kXzuSpLPwA3wBgSynfM",
  "key15": "4ttDk41fDwRDnoqGJJQ67KaT3UhpCtxD8ssrimume6tsh6QkWBKLd24efsC5syDr4mvAzihcYBEsVyELYTzQoLKS",
  "key16": "3H4PeTWcEUjdxXecDFvZKAZvk5JpGBbnUaVcLJcP3RnAeMdaAZArQAHjxLW7tCsAQ98TyoxGUMeVU2HJRRvtZSt8",
  "key17": "4LFacDD4xio6dcZ7qrusnwJqG18LV4NFtbHPPGhw6jYZqnjbCV7JPF8SNtwAbtdfvoM9jzNTzh1d4pTAeRGwFQ5j",
  "key18": "5BzSARvnmGLiQygjNyrrrPighAZHJYJFj1XAg5Hx7gcyTGgqBs28G9WsHiLeMEUg7ezdaTUkKyKhLmBBnozdJ9MU",
  "key19": "5WdD3tD6S2wyswZVTYtE6dT97vF6WrMswvY5howcjyaRMMz849S6AkAjHtxFx2hN5uabzhYiiMpDX12NiGBYxemf",
  "key20": "2M8eVN1HYSv9XvatWPBqxFUMDEFbJcNnA1nAmGLqFR7XeJFuFzYDh19P7hAdi6VtTFWiTsoYQXnMzKyV6Ex88wQQ",
  "key21": "2xy66gtJuyVW4zCN6Burr7aBxzQw91q57QVrRTNanUn9R4jLEJB2qW2PzMagSWcoGY48CZpuYiDT49ReoR1mx97t",
  "key22": "34CEzDcmR2wqxB9xczzxfTASNmceLjYicyJn2zoQJwjCUqtQYVtddEZ8iC7Cp47oJLBvM9DHqoF3mowetFJ36JQj",
  "key23": "PEa4WkyFAoMYr5M4RUDnR7KT5qa1FAusUUNTQ3ZqGQGW4Q3vzUXi4PQJC2iQJMztvXjK9MJBQWSngWhitsNxPnK",
  "key24": "S3d1mJNKRJUsVi54T9gFEX7ySzgBbS4wnFZipwmnjBhxMYLtsypdNyCcsdQtotYuApo7gQMHZwuhW4pS5ANRWWJ",
  "key25": "5F2GibQNbdJM2DahYpQnitkGmZ1bVxpV1tRishZD1e8TSk3HwyxUoqPn4mjrAQXbFo3AsjMAGWxDsgWhHn6kipB2"
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
