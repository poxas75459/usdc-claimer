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
    "2gPxmyas2PzMfiQzZ4LjstwXfF9PA5sXyfwzXP4jhxPgZTFEJPEPoHUYDfUTEzAJzBEFzwH6RCcZJ7ziyMWdDJMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zjnerrc6r2BaK1kcNuDMCm8hLnc8LumojTgzgiRCfnUiwGkCDcyycLAMkAHAGriU4rjjZSBSD7keTRT651LMk91",
  "key1": "3cJjrSHgmjYpHrgzb4Kzt7p2r1wW8xGKTh9Zyy8wuHjArVP3t8pjMr2ZDkeoB6kCpTXHZwPUhmHQn8nBCKRqSuPE",
  "key2": "2GyVmUc2wPTR9aoKvg9aairHBvsCESLTzFLE1iUZAMJSTN4dpyxrr9Dsi1TLyQdSz8MztXiLT4psBM5BHGjZzA8w",
  "key3": "XcGTdeMP8cxSakpSA1s53xhBSfF1mAU6NVS8AHS9vqxbjt1gRfRmBa7eTdw8qVTBHCWRMaz6ramUDfnUQKbSvn1",
  "key4": "2DoQ93a7hM7W1e1nSddPir4XBJXA5GLbZnWfUMJnjyYcRZnq3S7deYCWBVdt6WMENWANWUoAzrmFeJUkQgBK4Ndh",
  "key5": "53v1M8YjrtHtxMM1BobbauDtsEYBu81fwD5XRyKSAfs1XEP8g6R52K56YyGuBq1Ecc7oHadWDUUZWK6t1HVTfaNH",
  "key6": "39pC6gn3P9qV6z9rc18uVV4azm5GE653c7YWequV7q6dqivM9RJwuEyEyydHUVPEvgkbGrCz9vt813C5qha4jnXW",
  "key7": "2mjepKRkCRGSDUd1ihc9mZUzr68eydTPQqpEtWaPWDi2CNhnJSLNwAdoR3V1TkmjY33tkK9czGWba3osFwNjtRUa",
  "key8": "4KKE89AZAgbbXyKv21cgKUSxXgaCUJx5ZxhNk4h4T3MhLJPmPu13pv3T3PBrD5dwYHykTJBhF84HMdsqw2fiUP4S",
  "key9": "4LmfSRB3DB9wKQxpj58SUprmdq7PK9cYaMipuU8xpvKaqrQ8hsQS6xNq1Up31Z4CQy2DBPQ7DcSxeuBhaTKCvd8L",
  "key10": "4N7qpXvYd7pug67iED5Ahz2niXqqrfYqbDJJ1HQk3YXH561iR42pfVVVd3a71Gn3Ek3FJ2yHuw13SkuunQFU43zt",
  "key11": "5sYrYuPy4ZjkivvbQZYNp8azrRNw4NRKZxF3rAt6C8rRSsDUkpjH9oYotEdj7jCbQwAbKdNCS3XCwgTGT4q8PGu5",
  "key12": "2QmApvv7QTdaWUbUGreHmX2nzDftrbFhrrXJNHFy5Dus9BMbZcCJCTaNw3dhcCqTcN266Z3F94aWha4m7CRyjHdX",
  "key13": "twJfa36qCchZSRFTzw96yz3ugPqa5jbk3MRjvMrDAqJZCPazeZS415XXdb6dn4qQKcE9Xwyrqv8SEc9p8wo9Toh",
  "key14": "4cyJ8UKgCJzRPZip3HExhZhS7HjfpJDMS62CbL75vpDSncThD5BgmsjubkwQt4pTQ24qz14z7WRB7T3BsvdZHm7R",
  "key15": "3Ftg38aBeRbMBRGLRED1C8cbEB67hAj78nwceGXvGidEvGozouYk2S7JFiSKumTizKZ2Bdnbjz9yCUCxHLeYSF6r",
  "key16": "Gbpvd8LYKT2W1LA3je3pD8grhUnuVTQW4hgSpUzrZxaNVeBFvv1LSjb1zWMwkmLuLLWvER3DbwLsR6aE9ZiP3Cs",
  "key17": "5rnR2UntgYS5CsqSYm53u5eZ9AdUdmfwwz7FMiXxH8qgKbU7Rcz9Wp8ZYw48xez2W2RZ6jvsKXR1CZinPb9R5RYW",
  "key18": "3B7Ru9He2GWUmY3TYDPxtCCkX8LNfM8gENAU35oG6SsPf75ZMWy9NyJUA6mpLUeyjbx6n6wzE3LPjM6mbK96Sn37",
  "key19": "cgm6Ac1LMcbmTKQV3PGt1Qw4ESFzdfnwpB5WVRz2BpQv2SS27NfgJuiuX5gr6JEpWP8U61dixKyfVQQj4C3AgFu",
  "key20": "23T5wQxivBZ15zaRUyowq1i1mw82TdKUTg1UKute4FPijAczZjetNBF1qBRhw1HyvhjKG17d6gs9xSRqZkBVLpJJ",
  "key21": "42ANeeDBkA4cNQsm2Y6CQUVpQa45ZsZNQskBbMYX4g8QWhFi5y7uWHZ6qzffs9kCHnTSVntJeX67o2fKWsGMdtpH",
  "key22": "2EF4TahdHArjZSobPv9Pidu2rdJEn5t4XNQ9vdNKBUxAtwEfkg1Nn2C85471XrzgNcLNqU56mFGwbk4Q1PzQbnC7",
  "key23": "JCRkaBTrXmcwsywuTwYfTsK3bQe91pe467FM5CioUJgxKnNk9atHcEKE482pPEj3RWKpmQg3587U8r3rr6NNqoV",
  "key24": "3NEK1idjp1jFFFqQ7iuGrsAzFRExFRU4cSVSeg362Xh8qTwb3PVwrBwJ3kr8h5UKU6nwJJFaf8XETw9Npyr5hkkz",
  "key25": "3TaubmbsWZFb3MQqWeygdPm9X1Pzq6tZHjQqmgLGGVMWBXMXz8mrKSDe2oA3ZPX6tkhacf2HRQRNfjbxn5Ryt2Fs",
  "key26": "4EpthrNs7ZiWXC2hFSYjMe1Dr5qS9a6bVanP1Ne5qLD5UJ6g7Wh86yo4P5nwzVu5D6eAkU5x4CVVS8gFHnnyfAAE",
  "key27": "3ipENQY4uCZ4Ae2YxRZpp8ePgK67XPKXzkZ9EfPfmaNXFGvf7dSkcnbUfZ3PEfxGMps4V74RxRm378njpLtHxAF3",
  "key28": "3MQ3DLVX9U87jyR3myFwWm5SGnuRs3CV1sitZKJkFxYpLsybjLftQTA6TzH2B8X6ShHFBQ7SLkP5cyQApCAnczm",
  "key29": "4MievZWEzeN287KNB32RGgsvCC2afN8PdLD4m9adrie9ABRyM7QfstqnPQ4bpC36V3nKgYEqV55RYDdpq6DnwggG",
  "key30": "UScnmkHJh5r7qcFoAJDkRqEjtXXT79kajRpp3Ev1baaacXKEvLqznGUBQ6FsrvGB6jco1hg5m5JvodGrLugZxaT"
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
