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
    "GXNRzEYj6qHqpsDTVthcuYUfeDLMCDS5Fn4g48V3dnERY3uQ75BQCNAdu32UdEs3fbBtNCQbVhe826Jm9yrj36h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yQZXJZdezFsm7r4ZvKtAS85SaynnDH3d85xzaSp9UGpJs54QbycJsvmfSN5gukvwA9N4WBUaUNMwkKBGTeTc9Lt",
  "key1": "2g9o1G1xKRe5ZNtNRYSKwEHV1mByzydTk1HTsp882ipTdaKjjUuFsEuhW4sYpRH5j8SrN9PZ2FEpmiWpCWcnMRYp",
  "key2": "eQ9fYBPoZDxJk5k84A2NbPKBAjYtweAYw6TuPfDcxX1moWnmCoQcnN5PfPx1fgHr2vcsrUvswARWpVSHYBm8PbC",
  "key3": "3AnHvBKv6qzMSUaA1zASoFdQ4soweDDKoJ83QodRzfBd69qpuJvgR87g25UivssenZfdbbxqsn4taMcNFLiq2DoT",
  "key4": "eDUgCxi95VyjzDnFYyRcGxHc6N8UPyr5eaSCmFszjiTqpHUvqGh3aHYXX5rzPyo6qvyja4dP4urBZw2zoK1McBa",
  "key5": "2rmyyhhXhEfBC5hfGhzFyMsj1NHLYUciG4Z49EAD9pXThGLnfVC7vqhpYML5uakB3WufBTZojAh3xML4iYkyS71z",
  "key6": "CFy13tstU65MkF7BRQKcAnAK84VyWa8yWV9GeXfTzAwA9xjNiDKfJSr6hTgUXo6dpLrncd7pnF5qQCB9cVUxcvi",
  "key7": "5uyDT5dte7j7bArCJVGQxUzJ4NJeSMn1z2GdVAWqhWDejtpAuv4Yy6kwLcpBMKKHiMPncaWDU2GkCv757nk3JYRp",
  "key8": "4rWphWKaALSxXhak8pcY62cownkgiUXuiT8EPT4dHSgd8Rw7kpYk6Xe3snUha7PnsQUwK1X6ooMRN8h81ixSwjk3",
  "key9": "2xUc2aq7Mt4MghdYypM7W1jVQA2eb1M2icATc8q62YfqFSEW6oNXgkbBwgqczNk3M6kKeAZuSs8vcyxwoVTq5W5t",
  "key10": "5sbN8qpatwZZM7hW8Udk1zXAnTMUgSG8smtJgKYtWyYKcXmBgygFzTvm2kF5bCJHu6kWJ2YdnYGcAB1u9B9DGUvi",
  "key11": "4dDQeutnY14FfRpVqXBkfpbauoXAq4FNUc6EbqqHdeabdNAtr7H569YSEA7Rd5kV5iCGjD9AiGPEgs2arFmG42Zy",
  "key12": "644YvRmyNLJ2jdoxdGPjBsTdnxhxyc7XK3L9bHfk5tpgy7mqt1fcyZcymLEjHTeRMb7aNdQybRf4KfVz2uTphCCs",
  "key13": "45iHrNjbpgeazVwBefAWaLDekC2bSuYeoEcgGUXxxigzZwdS41XDjAXViLgpC8ujgL7gucmac9YFyDDwn9U3EaK3",
  "key14": "35bdTDHBLCj4iMzLqenh4UoXESuVty75Ujys35sRxpeSHyXBCvcxk3myysB74uup4jY9kvc3C1NcBzgHohFPXNmt",
  "key15": "3fMb455bdzuS9sDd9EgykabMgsTRWJjnZprufZXDhG5xCGz98EVLFRDZ2PFNcH9bve5oWCFbnkjvdKozab57wZsf",
  "key16": "bWkUThtLao3phKLsyztJGUPRc2QF8je697JJZHYsaoc2SakrhRNGa6Wr6u3Jhun5aTqsFKFYeNdrfAn2PTimDF1",
  "key17": "5bkwbfDEqd5MZui9kWuPSyvE3Ga8DLECFLBXf6q7YHaNBh5Gf48UuEK6bRXphD8yrPKWdGKB2d2tf4egL6JopYA5",
  "key18": "2KLUtbkjNMcQD5WMvPbSgJQuBLQqp6KThk3kyKPEgRrSY3GsJjfsYge8mfU8kCEeXsgdQjmFWXGcrAUVgSzJrbmP",
  "key19": "3NFhtHnkNSKMMDzQjASUu3vxDR22j6EHJmKF8rrzUserYozmN656NSTCHASH5D7ZCvsVPCkDW1dJHGFZe9t6YGwq",
  "key20": "3ujUk8JmKzQEGYZxsRZkrg2EuWQZ6r6hsXMJLhWRYdPKMAe8A9a8A41FFrcFyHWxdWk2fmg582dvRmHPYdS9m5Ry",
  "key21": "ZYjTAsV4aDRREmz2zD2vpeMtCFjxUVeXSDHGzoASWtQDweu4B1J5dCNP5cso7KkTFzGedamKJmiKF2aUojkPtx6",
  "key22": "kTzWZ7aPm5ZKtXikFLvmK7JyN84TqSjbPd72ne4Yb2k2wYLKaemHDwizo3fe7RYoF63DiQhFWD4rVV6TP4EA4nn",
  "key23": "4DJG9aoDuTnJw8vzhqsuKmd1B5wGtDFMG7UArQER6E3bJ5pEXetWm7ZKiJcbpd6suyY7zjfzLrjkUMSTFDJGNDSN",
  "key24": "YRpzZGC7JKkAvgJ2SggtW7E55WX7DSpCAKC2mox8taWsPXkJHv9yJmr2aEKM6Bha3H1PbEpzWrMRgZ4LCqfFwJy",
  "key25": "2mRVBK6UBLCVU7QeB13PbxN8CWpxPyyuTUKDNXJWYCbtceafuTcUmxq1jn3KJpJP1LvoNz9mXtyB4L9i7mi47X8x",
  "key26": "2TV5XYsaBTpRtGXXi9PjkooPoLuABZJWpJ7XDr7WDifG5WcSX8N1ie5haTBwps59VLrcQhnJGm3aQDnV9GvSmBsr"
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
