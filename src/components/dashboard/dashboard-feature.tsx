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
    "431NFYEscGXj5e1o1aT2WWrQ3XN6AEbfnppZUKqHLcDYcD7YBr8M5BwH5KBGDXu87ncbo8wUbSwRVucTEdcsh6ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QMqH9WCXtbewd8oDGWUqyHKNgZw4bHUQf8hL8L7wgzkW5UdhyLw3dTkaEdux2cJeCn8oWExfgBks87UC9KrQiB3",
  "key1": "42gucSQQxhyu6UVUZMg63UER1g5bgWNQyxrxYxAUyEXV2UDoDGszN9EKcT9ogyGARvvMFe8GwcvbyMjMHAs7cJXB",
  "key2": "ojqAi6aAXpvbovGsdSnURB776hcnbzWCkMwscKXQitTETFGmmPy92tH1M7kMiqy1WffqEszNEiS56Kuy9iXbk78",
  "key3": "3ua2ShLHdx979DZ3aKDmBrgQXUdToWjwKbo2E3prpzwTscMNWrbpGh76CAqRpTHgpWpWnnuuFmUbWGuT2wcFLTGL",
  "key4": "2cJVaqHbRvHrLo62STqvuem2XzE7Z9exyfPEtQ9yP5RFTi6A8taduTWEYZLpdf8XbMMrcVSpazGageo3Y6NoPwTV",
  "key5": "AyAE3rL2XtfYdPPJwkVKbTd6popvKG5yBJdVSsa2sLu22n28Bps8fDzKkWba1wANr2BmLkUWsfJLhvt6LA2Fvna",
  "key6": "5VWFs9cwMEi5quJp5RMnorq1RJ1mKp2pGDrow5mp8Gq9ABXycQ2u7wg1ZTmj5L97djGJoEjAh5zc2g33ax7BV5E1",
  "key7": "3VdU3unWY8BXi8N7fRGxb1zZjQxxeWdZwF76E4aVWMdM6BGDLYd1HkyDdcECtV25cv5nqXrGtsV5kdVbmnuTHEu1",
  "key8": "5JXVf1LBb2TpZXLKoLNS1SS8QcpAa3kpQbtE7qN4Pu5FoTh6RXenQRF5WgABBUijzy1m1t1Sicg1PdPY99bwMDAa",
  "key9": "42KtfmqAbPPGfitKRBQaotDjU2rrXDvnSCFQVPyWu3JoLBdKVUgQ7DjdvSm3X8YPUxkRA1ZKwmnKZQSzTZ3LXy7m",
  "key10": "36Rjjb1s7VBqZYF58atZhYgBF79gGbvpGGR634ZJN8LP5AUJHirsRGNAXYG3DTXj23rcUttHox6scfPYmXqMprs2",
  "key11": "256mtbkxGb17HghZuC5d8xQfGwzWWFCEyp1K3htHgufhL85tirdMT4rrmWkbe1RKX77usx7MJjvhuGjvbiAdPe46",
  "key12": "2roQiMTEhu2VMPJLVofC9myRW9RWiLK12FwpjdeZnUhYVpnizneo3WpSTiWqAdF54rDZuuhbaZyJYffEEbFo8gVC",
  "key13": "4Zb3yKP1eNc7FVuiRy77cVhbZp36So5NTtihw88XZrPCW61CLhyNMMvA6tuVqSqbVLa4QH1YynWhyDNJGSZB8UT2",
  "key14": "BXE8yJCPj11EXQHRLJkWMZUfwoxdyVEesCCdqt4DJiKskkZtiqtNY2gmiQ8UhgdueoPMAvkjW4pTdjqLNYgbz1U",
  "key15": "2tXup6xR3bKSUzJyd7SANQUgJKEypPkzNMw9A5CFiMhWYKZZoBj4dbpu3KcG6qDVjrNaD6ULoFoaGkEkSYndcA1H",
  "key16": "5XCVhBYvCtQ4wE3mPi3Rn8XmKS11gCkYB28wYR1h7sgwyexyHwPU28kZ2RZCpJDtwG1o1FbGTS5vpZCzUGRCMAGk",
  "key17": "4C8eUV7bUCuRvGsLtjxzHuHvMfHQw8571yyGAhc7kTgXFVYW8bdSbzQdUG3QSC2eXwk9xjERG9MMdihpV3Qj1oSK",
  "key18": "48VALMQ4pDAvJgySnkWxFuSnjkrSXxSYdZbQRriaVr1kooHcjy1RhtxLWkTb9YHVnF9mvbzW8nRdmHZf8BbWf9rq",
  "key19": "3EfTHbzJpL6MXEmDm1jzMPGyRC7HPghsBZ6wwVgKfegvsNQwzDQeSnB5SYgbbikezB3XnCo2kNDoNR7M5UZuS6cc",
  "key20": "tqvFUnykweRXjPQAPNidyiw9Xkeh9cGRRtdsjWFt9pnbY9xq37XVJc5jW6DceScGv9nVsuCYKJsZ34iVNkydSW5",
  "key21": "53S8akxPyNtLVxSUwWdxrpjYf3sfnpwfuCxXPn85Zj6CEHo3LreEYPt5sjAz1L37B3UvSujbJ8onimk16oqw9x7q",
  "key22": "4MVFynJdketTnjK7Qd6thMP4HSP7yjMUQiDN5gWQZ3u9XUQLcqWtDRPXMeTob5oJEo4639vjK4FbbJprZTY4G1pM",
  "key23": "4ikesqf2grnCvLkxb4AeM7BMUVt3CLTs5mewrd6HjHCryMhfqWdkaVThpudEnZZXmRxcLK8xfydMb2B4vbRet6qY",
  "key24": "4nJLqkgNSENwUaMPM6EJnjGFwCFPPyKn6EDTLePSnSJw4qEzu5eKXvP6CcvNUnDu6UR4yapguijDQKrvuza2kfV3",
  "key25": "5d14mLdv2jffMWx8yMaLHWkGjrQB9utcTyUvaT4U4j74YpQDdsPu3ampTWHVED3DPMmQfeyXHKB9ioANQwP9RVpm",
  "key26": "gaurwacTL9F1GmtX8uPDJPUnXtrHL2UE7KaKi4iRD28CoCBochyjZkzynCqYNYw4Rv21vA1U3VdhxNFhA6u9XaW",
  "key27": "57hEm6KqE7s3BfYwSmfb7PS7aykJcBLRLmYdewdkzikQduMJFYZtqp2xPNcAUHxvXNcf17DC7azjZgJbcbEKC37r",
  "key28": "4eixQt8C3XKf4dKcei7BwzZxmWH7akT31R7pc6LbnAUR3Vuid5Y76hCAhyLSmU5RmGQnYuns8Sw6YnaXgwU6EjHu",
  "key29": "5is3XVgTASpzzmdrD9JvizrZNr3p13zVJyUPDgRoMSautrh54Cb2LKn9yw8pSsxmG4tA9Q7jCFNxVurWrvu2EbrJ",
  "key30": "2NrWhUsisRxx4fjujSnL4X3HSwJnRmb5Rp6cidsJkpEw3E5fVvDeSkESXHjSPr8fJg5GtAZe3b7474HdEip68NUE",
  "key31": "36dThyLjPX8hYVZGHfXWJwxAdjjyw93aGpVYHASLU5xkmjfCY8eggkfc6QZ13Ei3Kom6NRU4YMyQFnLtAU3Uj8h2",
  "key32": "337NFf8LTZVpJecp2X9fRSBaTX7faSSnzgu2bF3yejxprpd2hsoFPnQdHqWqMqhQACxfDD79g1yYgWprdL5sST28",
  "key33": "2wSQALjzbZYDEHE7Va6ALuneWpQmHzyxB6M8fYtUjZavndSYV8XUuFdSX3v2YaALpf7AxCh3fQ1TLBJRNRTbZ1cp",
  "key34": "584ZJodhWGC6vDxNKp8r5nWzGjrHQqWuyRmWZgAToj3cXvMiweWpp8v3cLs2EZKcd4zXQuEoQHKS3W2L41EoHqn9",
  "key35": "5ksgkfCfW2uB5TwhszcWr1vA3yBXen3EyzgqYi7jCKtbt2yFEv2aQsJY1jckjYPBXD1mcKtAVS6h5VA9uCYbg2jL",
  "key36": "2v1e1wpUqc2Wkafu9fBgK8m1a3b728GwhVcMoWa9KjToFU5J4G3wmGmQCMejgfrKDXGVB5JfXPAUVBVkD7xKpYpd",
  "key37": "2xbFJ7dk6MHaUqUDoe9Jkticpw9QmCW6fUQsRTAggAQsQJnVc5T8yMCx7bDBppgnDj12MvCJsnSh6JqNdATZcdyT",
  "key38": "5QWdzAMs1ZG3qNARNG95ycotuj1uFLEdeKESd4FV34PcqfZTomrQAzjNgBQfCwDfjkSH8gTdtn7wyd8VQUWr1qcB",
  "key39": "3VyKGCgj1voHE8sNJY2yC4kEyNwF4CKHcMKgrVzenmNqavrZWd8uY4p9ycMPa26n4KWv8RbJ2uHmr3vsQ8A9AGPE",
  "key40": "dEHfBf5BTsnnRACobqNVD4FWz2QVQbgpV6hHBbeuRYxMrYMa1MriEj9EZXKMGdHfKk7p7XkDErrbfNU9sNbv5kx",
  "key41": "5xAt9KQZ4or8TDiipSRj92VpXuQ1Dhe6v9yE2YJjiYC4U9dUPuQy42Jsc1SNYbtuCbiS24T8tRjE3GNAn9tXqQwv"
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
