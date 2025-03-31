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
    "3AhFDaQEJq1dsxm9L283WuYpUYHPTxovTF7KiGbrFyKanwsH89w6uv4W4179LwoRQ4qq1VvFkq9VhDxGa3B9rne6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vHDsNSE7koWtJbGTtWkwqCPM8wZVCxCX2mFjRmmbJTe6WFJ9DniYrUCFA18fwFdGhnZTsWLTcwN1cVy49ymf7jb",
  "key1": "66oDNo8UREb3P3bPniFJztnYQeBYNhPiUVcefVju6Hk7ujzx5U3y9wZtgReAtS8WnoqxWrcd5REV1rq8Bpyi9qTs",
  "key2": "4AN5A1dUAs7a2t8qZzLsfsunBeefm2Hm5UYRdXLqJj2cu9cFYcfJzDyphGENuAzrKvmyELDMhksWru3sVmgfB2Ys",
  "key3": "2Z1pEYA3qzHR75zTqhDSKAKpcKfjwwJwBfLizuLwk8VMD5RwZcDXHZzFWbdWuEcUBEhrdmx8gfY5oZ1WKdd9f4uh",
  "key4": "5Xt2pdRik31uPHov1KWQVJ62ncu9UjcX1mqKsvM23YMnHtVF9snZHNqPRfUhfLW4SLvbBiMJsyF31w5jghSfU1mN",
  "key5": "125dVztoudDgYTbPofNxvrNwVDaELwctdEzttqbuqY4Q9nAkxbFsG5eJisN9Zzg5peS1UtdJ5Pcpk6nc9fLs88AC",
  "key6": "5JBA6aiJLRser3LgA7htp7oYyLEq3koBfEeLok4uYq6z8PQdZXVkkNHF23LaE8W76PsvG8TTHgWrJsGi6m82Ujzm",
  "key7": "4N5i6dWeB4Vu67qmAZqcncqowP9Nya8GWhwnQ1ivRCpTzxAnRpNwqm3dDKxwsKLh7JtkjPRfh6L1TwKdHtBGeXmX",
  "key8": "5Jkb7vEJkZg3ty1PVzeVWB6VvPGdVvHvrnQKXDBUWmZCPqBQf4zR6r4AkieYM74WaiuUgA5XyZ9XgoKaYuV6HnDt",
  "key9": "2Ym8Vpzz3Cji9fGu87cSPE9oy3dVgqoiEhoFR5TVRV6fXernKWFLsNkgzk6kbMekHGf5z8za2eX8a4ukXufJ782k",
  "key10": "2aqyUUvkrzMT4b8GXtHbB2XxDv9UnUsoUYHNf6MwHPzzGrPggHpUuhvUmM8six6EUhsjZ6bCTi1gau7b2wPTm73H",
  "key11": "41DPP1H1bgLonNEXJXzj1nz3KKWZPKV6eKEUMVsR54Qi5FJQvBbNfEkZTt6R5v2HgaVfSnLyGCXEVjWr3RCAKn79",
  "key12": "5RHQbG7S7Vi27cXzmADpXQL4c2Gkek1DYVGNqa6eF2dTXbrYWs69qp6bCZi2BYw4kA27zLtSm3k3Q1UrB9fwMo8p",
  "key13": "2bofrHHiVbkf3pENwoF1ppn6qdRPGuodQz6xBZszudc6utG4TfX49yzaizzgw7p92LKLinzCNVS7TiMjvgzBBts",
  "key14": "2esJufVE88wqhZ4PosvxZAnYCkqEDtg77CEYZeH4BMZRXHPpgqMNNq9bGFzh1nk7L5k5UxHDuZJ9mv5iFjbSWSc3",
  "key15": "27bHAg8m1rJ7acCS8DrAFWH641N4Gw5mdUbxPKY1L8KuEdmDCMHPkwacySLF4NFMadMeE5uWRQ6gCbqCDCkh66gv",
  "key16": "41BAtpEHzEdYMcfeUowkmG1Za7GHV8GWxbHmtJ8f9PXoJXV56usKyzN1JJxQyUCHnzMA2Q6SruYH4sZDJxYzTohm",
  "key17": "4qzdEsUmbzMBPtnjmduuEuAh3h5Q5C2Uj2WmgchgHisHutARV1MaVpFQjcXytiHhEK6oPeBb97yvBFzp8FbkyLSW",
  "key18": "ow6o9Fsu6bBGgKwV665J2Mu8fqZkVR4Ne32peeXmYYvvwww2w6kNoUjaBM5qs4cxRB3go9w5yoLxyEBhw6xfhXy",
  "key19": "66koL81qkQqecZETNL1yoKRYpwgRox2ys9t7PDuJdY8JA8zbsqzRCpBsVqGJUUs569UBgC6ot5XSzfh2tmXeALZm",
  "key20": "3ppTLnmWRaNAa6xmmjzRS9SrCKGWzGkcFJQKQEMonnoLDRfANJrjWA4CZnZu7gctL8YpwHMiVJbpAq7veKbzH5U3",
  "key21": "3iK82CPA9GGE9A4EchsvrzrLF5rbDw6MhNyH9sn5rDqX8rz5quPi5kXKr9yTRuTYkK3AAFJgHcM3BeS49PCZhVd9",
  "key22": "tADf2FGJmzTDfo6cfd5nzhTC9XJ5zYFws7Bkx5MMdnqjdpBLoNAhJxcxgZvuhiZ8u5Lv4YjZjJxtxiKVwJ342p8",
  "key23": "2R6xmJus8BZf2z7KCZ6L9geN7uEwkVB2zz24HTHNLPFJ9SzDGjnf8btV1Ch6VcvGf4vxeLmPJLtcnxw3FZCXH5wC",
  "key24": "2fKejS8Z76H6NxFRLsGNoV2yeemgDYLjT5982fqDXkwmcShnGy65z1CupniraiFSCXcy2o5aHdAGheP6kNVkKFJ2",
  "key25": "2roqTf2oQXkwA49acPPoho4kSdSq5jRKKQ1vfx6hR6f2BQ2ni2i7vp5xTQqSBaVFKcyqbb3jCPAkqGr5V2Vumzs7",
  "key26": "2ipjUcoE6xDC3gXRXmiQWnUdEjY3KCu8RvNvL2Sh8r3hUme92Zgbb5ZzE4SEZ1PKZribuv5tpxseTkUeQrvSGvd1"
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
