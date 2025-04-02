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
    "4p277fhgfB15DqQUzdYgmfuhCU3nWMN2LjPGmuvWJYVs5M7zPaDpMDRGK19AFmgWFj9rRFzAhwJVUyLAcKH3zmNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e4pzReesgdEKiW1BLZUTjq2W9YW91JFgZyeqATtWPjsJwtKAEuYuSLSGXEzy4oS5NhGZoZhd911w3ejk4FQ1gfH",
  "key1": "T6GQVetHS12bCmKFR9GyN4VF8gaoeyaNUyJznGqe2iadRmATLhWFYezY5NwtjUR4RFn42fqjRxkZZUPma2JrpHh",
  "key2": "4Dj4GwYGmVwTZ2XMRs4bZigWjtKdcc5aWtajpHMbmfBRL2fCkTsLquZPNL11N1pANMmutw3ZiU15Tock8Xaq4T1w",
  "key3": "3NfAQeg6V5trxPtsx1pW3bePU99nJ64TD7JUq4ARC4vGcc27hzTBk2BwfFr6jFij8W8bhjgBCWUYMuuyx74b2QUg",
  "key4": "4vRWTpU6g8EpNxjWKDJKdxisage2pwUPCqKY1QdcTNAv1G1PW4BBdsgzLiT7pARSdcVsJvLSjgWZm1H7hrhudUNk",
  "key5": "5bzwEGEHwrv13rLkhJ4qCKbmiaZvb5jEBtabMA4g83yprPPEN3gCcwy5agzCQqvh1x7kVvdQhsGJe18qBDrKg2cd",
  "key6": "5WbGEEPGv6ae3yWtR7a8zvc8fwxeFh6GZHFW6UdT94dPSb22kEAqCMvFYtgZXHYSc5fXNuCZv19qYPxyL8ibSKUY",
  "key7": "5dVrMySxA87jfPHCxEuoxm2UMziUauiT7Jw3iZeLNKiK56HQjyRLPDnJypRbyc3f9n7hGBCsYAcEVR5FdoEu38yw",
  "key8": "QmcK7ZFuP5AtDyarNrzyWqNShdzY7iL8Ly5WF28J9boXUS3hHGKt4TLitifYZNG4o2P35oRhGZ4vSyvLC4trtN5",
  "key9": "fjc8UN6UwJEDPUC4Vcs83hXTXEiByzpoq48zAL5chWzgJPBQahv8X4s7bpkeea9V2XePMNjXk4W7PohJ2jQdxTz",
  "key10": "4TmphkSTFrDohkj4ermRzLtF3bCfsA36WdoMy94LUNqxtc76ojAqAqvVKqHGK9jH6nRcTPkMxHvJeuYvkK3JL6yj",
  "key11": "FGNmzHSmUowuPtoqVVoyFN98nFsevyCxPW7mGv7FfiLZLdYqCMeoixzw6CCZyKmUaKzttLdzk9hk8qTiFDQCrow",
  "key12": "22Lfk3Cx21ryQ5JddhSR6tBaCia34XeLzdU8SQ3sun4gTvYbjr5CiXara5w9yTokpRutX3tNSR9W3vPx5mMzWAQ4",
  "key13": "62wURU6EztRibSKXkMvJyM354NPXXFuq54uNoUiQRETDvQdaUByzL8g5AzRrkibv2ct9yJSrUsFuZd8zDbpHVfVk",
  "key14": "3iDC4iZQvWgMt1PLWDiw7SMA9eoVL48ZRq3ZMHFH4Dx8VpG4j75HnPtd1erTbkj6DDYJoyXUzSXyVDaHxfa9AmRD",
  "key15": "2GMG8K4XLqvSvxBKhdm7hwkhdGDTNT31JrKVYKaaS5rwmv6td7KoEGvaoMVsXWdEXCoC8hdP7FBHYg36g5R3Zsbz",
  "key16": "44aGXkqpWmQrN2fkmFxqzkwBrUUpv2TB9sCFTcxqAK5VpUYfdt1EXk6w3z7C8u3NUDZKk7hRhiJyTv3ARtPZKck3",
  "key17": "4Qb2Jm1idehWLey69ZfyvdGpWUyJTDUNrSmEseKNe2CEM39oJFfTApy3i1Eu8qkC54rugVuNSy3Li773zaPXpXP9",
  "key18": "3Rsn8J3AZzkNE8YDeeTqzVT5orm94L6YxNHAjyrWg68GecPrf2agiSfVMcbArD2hcEWX1JNxQ4QhugwX4GaYQicu",
  "key19": "66thFPszRXP5goSXSCULqWktHQQ5ReSCSKCiwrnHQsawsAGNTWpE2ZYpq7NXUKJj3igegyaPm5ijY7eFQczYcwPT",
  "key20": "123MNPZSxR1gamLs3C7hQKSuQZfn2HmKtqQh1fyD1kdh6utCX6nawnV8fNnzjWsBGHveKi6nt8fS6xvjek4ASaQT",
  "key21": "BPLt5U3StLmavw9qcwXCge3ZK1EfHAXjsPZVQfwe1TB4RTNFJAfVynETPSb4ecWKkFPvmiish2E1ESgKDYn5WFy",
  "key22": "3VERnxjqPutapX3h45MX3VpMWh4t6w2N9o6WFPxnpeoQaiS4bBj38dZhqs4PCbTWvURnuT4n5jf1ME8RjMPzw9Jd",
  "key23": "5MXfYYzJFrYo2Kw55HGVfncjTm7RjDn5SwkGVRQYHyNfkN5V3mUJpYm7j3U4NCoyQnRwtXg7dPRqAxoHhYd4raQ9",
  "key24": "5QBXvp47hMgydjg3k3DZeoqDx2uZdCTe2bR2ZZggAxiFLNWqURZBajBEmjMHAh1R2CFQ4MQPZzXXfoK2JYBACnMQ",
  "key25": "2FfMwA7pJMTqF44enssBgaBTR5EmUHJecFg5RevoGZcvBvDJNW1E6gML5jnypYgMb7NidjBo1gsH2y9t9qXQ2P7",
  "key26": "mjGuezPi5qYanC1AUhAr2Yi5439DVbYQr7fwKNiQQprykC3UtSypcxDUkkvS2VBvjLJA5c8HBDmuQjXHzzARrKS",
  "key27": "5bhvjVzVCCyBavdm3e8NVjRGUt8D4GCYyHXkGxuwC7BTcZEqC4V8upNd1Xz9h6CTnpShCsXUUjLfEKKWPFKwPMSK",
  "key28": "3KX1ABvMDTREB8qyTDKcZB12x6VH3TH47x2M5xhA2e2n28f2jHscs5SnZWj8iNHwfhSQiYDAdzfvFmt7HEUFDan2",
  "key29": "2JwtoiCVd6m2dattL9tokJQogmme4ijg2MSNq3CJh67dAhbjzHtngi4tKNqQ69DpUTgro75rhJuTqD8KMzS36Mac",
  "key30": "2qjyf1qf3Ew8t9rUE6qRouCfTeBN2MyU2TcGtEXqxU9peVPcLZrM8xa366mP6hg8sm7Bsn2Kd2npXFr1g3aMAyxZ",
  "key31": "4nS71ioUhgDwC1w6jgy2hRjxf64uvQcXnua3b2asRYpcb4jpKFqxUw8SEY7cH5YKBw5z2W6My3HrGi2mJN5rqHy6"
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
