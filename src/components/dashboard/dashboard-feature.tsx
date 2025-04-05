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
    "43sFY2vbkEgSK6FokQo7o8ep5G8PhrNoGfwbFm9UYQERELXvraD773HARyUV3Rff8w3vQHk2RXCSdkrrzXGoKUgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cRggJKQKMB14ujKuBuFin3jD2DjN1GEVL5VJKrjnQb73u1Vvd6vPqRmNnCYA1RsrzHNQiPvcxkHBomo7aj7wyFf",
  "key1": "c5hTfh18kEhHwc2uFafR9Fs1pekszySrqTvZwJ7zbFFQszyGSNACnppRWBpgFWfaSYGSjvkxbVQWXAy9QYZGaZm",
  "key2": "3YDM1WAMWpHJe2EScwmEEiGGRCAXM7jiu94Lmo49TBxjuDV4y5JAgDMAz6eyrgJM3o8Rwn4G6RspRedxWzqVcpKm",
  "key3": "65Qauw9oA3QVQwHqdCGTeHpGAABV6nHgzvFvr5tpsN3yAbT6u1ETuZo5Kc3pvgPomka65D83hj5CRgaPe7TGXj2L",
  "key4": "4GQV6ocFDN7Lvc9aViEGdrHruisJv5mKTPVushmSEzJVSEf1twvW9Mp7HEAYA4w1sMjSBx5EHiKbS2tJWmzosZei",
  "key5": "46HXPynDBjNNcUDTRFw7wJXC8FTUKCnnPkzyhcaip1d9XapmSpSHoqJkUHJAhdS2aBpcuhdPNsQPJr93MyeqShwB",
  "key6": "4VtJpJskM4RVzTohDz7JnntF61UDF5CTvxs4Ktubdt6yQ7QeCiY8MTu4GHAixoVBtx2oLYbaTYo9iVo6rL6BjDA7",
  "key7": "5nzTcrCv1Si2ws3kmR2gXdWrgs7Vzwisfe6sVoWtk63Qm2MuUD3pEaDgn3kVWxeUoi2wbyJkw51J4vtCZ7PXXQzX",
  "key8": "4p6dGaRcCYeYVhyfSBWJAsiC22oJm5iZFr79k2dD1yzHpgF2bTRHUx4QHAwXsSTXfphaqVKdDqFeEwE9WAPk2MrD",
  "key9": "36hL8tu6S4dcb4HetQeM5WBNu4nsCHnSqMvMzMH5kDD2ykABXF8MPneNJs465DVSyFMWDuHzGBqEkLv3i8PsvrH",
  "key10": "43CbvYDrs1FNnNof2uxF6EfxdeGSe7Cm6iouvARRP5X2oQxyoE2rG8w32R6o9E2Q8PYYjYqAiWgFVNMuYYg1nK4R",
  "key11": "3RQ4BXp6wLBhGkXZdW4VyzKDqaGxi3KNgK1SgUBC93N8EKKyCRaL9MaHpxC7pKt7ntWzSa81mzRTTvGKfutP7eJJ",
  "key12": "3D3UG6GwACErdGESBPEgnmtN3Co2WtxUw9cbdxFMTztz716z17kmknFxuyZwxViCKdBKzVCv2YvbzPyayQQiYA5g",
  "key13": "5DTPBXeJR6zKzQqL1j67LpyzXZUMymzQT6Q8H6Axfv1fXtFsREDRTdvwdmGQHd5jp6fFgVowP93y5DfdrGXU5TYc",
  "key14": "24f1bxSM7z761rZQwtULuJkNbUVwx3V61jo9b2oyCdnvdjAnLepKRxU5cMzmMXa4NT7jNnQjKjzBzntdTyCX9soN",
  "key15": "Fhg1KW7Yw6DKCF4hvhgXejKaqmrS2uygu8UBsyMB8GDu1B3YvRxqC8xSc1ESZNLmMj3nFSkLRsLW57xsLihKLH9",
  "key16": "63t5ahq4kjNpLjz5xJoaGch4SHDz6qbxSypLsM6N8EDQVJPDk1zCwrckUU8XSvmemXAuFPPbyrPDYpfsvUjrRQSz",
  "key17": "3Fm1X67wphbegAkJe1UwnuiQcAjj7RthNX1vc92DuC4UackZ9KvNYQGd9gRe96tHoeXCgwfhnAfKcqdGoVuZ5QJ9",
  "key18": "2JbJzRbfe8yBJcA5Shk9BkvgokA1z66Hr27gZgXunz4Aeze2JyTMf1z1zazSbSm6QfhWHRM5HtvFq99DXvjn6TBW",
  "key19": "4m2amQop3gNsH4iS8wi6yasjWgJMmWjY5fXwVVmaqZkc8bEonqpz83jQVHUnDx3BevcGbPsTY2GsBw7tzWDWVwfD",
  "key20": "2EGVtkBpr5S3k8WMnRiz4EEgWTabw8tdsyLNLmdoJKJiqxGa16bh3fy5RpNV4rPE7n9KhabMGwf43PZsFoiFF4oj",
  "key21": "2F5XAcLGmaYqs49zjMKXk69ZvPh7uvE85Y3C7v5uZNxgeFQ4g9g8rgjCqeu7HmoUQrHUeM1W6JAkRH75Uz1ySd83",
  "key22": "2frdubdjr4c2yWZW59LzojkhbFaHqSn9WD5kSs3c9nB1eNNJjcSGeD96Rb8vFBHmtxvif1KCL1vpZwZWUso5geaW",
  "key23": "4PMuYq97XoyV3bZX58xFYi3t4SH8rL6DBA3k6DHJWKVs5wdaznMobL875o3JGPTZWHQinqKL6hhZjWk2tNVMZKJC",
  "key24": "FUGoPtf5NmveFyXRqpSBbDTD8U9bfYmvzHsCTBdLnXCPX1UizebXbsVP8jgj7bDLHroft9izask9zdgtNhDM6aU",
  "key25": "5h2oyzEpG8buC2m2FviakUehnevcqnswUiakJRHWbTNdTZPGTVUCNEbUG9DFmBUVfSPx6mcQ5MwhTu4c3WUyGxV",
  "key26": "5dektKu2o4VeVYGCccnzoRHQDfjMjaxQA9CDbyqVRrrhArYGP88WTV4eVxFoqkVi4DDvrZvZK7UD5zkMqrKRybUj",
  "key27": "73W6YY9njUfQzUtGzBuepiEar4VEbbBxPiZCoSGFwUHksA1Suqrex7C5ChNfx4ZEipNomNDkLzFmqyaZK9zZw2U",
  "key28": "2nubTYY26meR2Nzc2tanGGDmyZMfhLVmdCsVt7iYSyfmPjyXz7GsUp4QuACZUemNp6UExs1QFbFtUahQkab3Vska",
  "key29": "4iyrTdbA7Xhk5QbM81yQCf4sLgbtYaK7o11E6YBaKU8AT9DrMQcQyvVgHvTauPKdtj5ESTKRFvJZt63N6P1HKmoD",
  "key30": "5p7QfCZhcqFYcRpHCLRAvMzYBYwoT9sY32KyX98AxiSoxKZKmjay182VMPGQoR3Snq7786monZuricr9LxxyZXEr",
  "key31": "4kAFisQdV9tHdbgJ3zRc4yQPUr1ASuzUdRZYRQfvyuuewBEHrBePNi1x1iQF5xbheost3fnAqQssis5iH6FxAixW",
  "key32": "5VLHf7g6MTaekBqygjhdfBE7f6yYo3yfzbxgpYKo3QXKYVqs4ZvLa7D7fDRvCSVekgTKt2m63U8VV19BhPeBN9H8"
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
