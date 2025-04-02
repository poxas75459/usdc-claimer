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
    "2DCApTLTjSvx9HdrC7Wy3fDuoNJR9JJ1tn4KFJZ4Jc7UhbmDZ2FW6tUC5mEeQcX2JXSqNXgtg7a1uB2drPzuTzuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UP17U9VvFCJkGg47Hb7Hfhsu9E9kGdqxniHPvurkvV263nh2mxcbFFoejqTGwu8SK2VcAzySGWTSuULMpUEcv5r",
  "key1": "38SKyMH14uJM5xHN8JLQyzvj2gYDeYfk7jS85ZfrFjdvCvN5e71Bn1zQWV8zp6ZNK8uqyyumfMw6YbTkJQGqGKX9",
  "key2": "2kZkTj6s75JCcxRsZFtyHX4pnsQ8t72HzttypGe7XLgDbk47NHzryTBse6rnX4vrT6C4oKY5MtuUZfMMN8i6UyFK",
  "key3": "4sUnboq3PpGoxqjjAtbpDpDJNTrYDtG2g6onLZ7Qg5N6UcLyLuCviF9yoqQ1Kfms6jVbJinBQeEcv6LjL6cZK5Fe",
  "key4": "3JZsGunzQcfgoC7nty9ieFf5tEpVfQZkcyynnJ4SB15p4TKBv1acAY1BAwdLtauRN98gE9QHzywvi3aYfAKxj2NL",
  "key5": "38q8FpvTQBJgPL3Yp73QxrawTiJXssKYTLLdPPnKhsi3T9kyYMB8tv2tYnMip6qcx7hWoKXSgX8UWnhJYqMwauot",
  "key6": "5fnD3YxQwdnRdsmxRMTZwVhJaMcGwhqD5MkE6AxVyGRxLqk8yV6EURc3tw4GpdbKBSX2hgTZSQQbPJp7PcStxYFe",
  "key7": "4hsRaumEFr2h9u1A7fRkNdoH4LUr1U9SozZKtE9xQJjNw27Pa6w3KLapURJp9yc1skMWGG61dXwjcu8w7W3rcwon",
  "key8": "2LwkiNCFSYQZaomsUagAZsB2DqeKyGwhSke6NrurYvVKyCM11BqVoToTksxUWWnLwyPhvFtjey1z8KAvd23f2ZCn",
  "key9": "441tKDPdRidMjFbdTbwpYbPRCenXjY5LxCu5EmzMR5neXqtJmsa32754h2TMPvVFZcwHEKaFGHj8qzU6AWN5nq13",
  "key10": "4KudgfHb4t7GxuhG5BHgwrgrA593NYxgT5AFBu4seQjXgfrndxVmZxRf7JDP3dHiFNueiZhzRFD1dA5eWCVyqQqb",
  "key11": "5PcXfbWGqwbvk7YwULjFK321xaFyQhC24MerDCcGwXbKc2a7T7VNqGo4DxaDftAE526wjAB11No7hGMG7dGMs1qg",
  "key12": "U6b1sh5tQq9b45L4N3JMBFirVZ3JYrqWoVPvDqox2VUZaBXw6bhbBM6ySnKHe6YzmxbDwSVDiDaQEWjvSGZMvLg",
  "key13": "3RPhSHdWFf1ASBxaoKDFYkQmGxwsjjAEduk1NZJ1mzxoHeij7jCZKz36G4dtQre5SHdWMgCETjnqY4gV8VDuN5Jv",
  "key14": "5oVa5FsMMQisZB38QGMpCV1K7TGoAJME1qjsjXtAC3CPcWrUTw6LEo4sNRboYtn9Ca1qVhx6WmjJpjoXkYmVV7wu",
  "key15": "2w4WJi5c3jJDD4fKPrKRaiwP5qo1HwyBvRCiMfK6yPj7KgQMHqFJquH5Q2vXositVwmQYp1NQN3UzmcguPspDW6k",
  "key16": "5B1dcgzSmkcEqoG4E8ko52NcbU1mPLFuwx7vgCJC44zgtB8pBMGhYn71p1QYhLCtdxEjV7cbneJcDFFHZYduvU1z",
  "key17": "3Y1VfeMhebSi6DzeJtrjRT1CcCp7TUp3vMw2TvEwGZqMCcoCRMpuyZ4MAHTgrEYRHb2vsyeHTpeXu4hcuR1y5Uif",
  "key18": "32Nm9YvwKHz6Jbs2scrN9r7GyxvQTUcThPMBPdEPwqtHtiaJBDaiXPGxmjRpd3GDpxY8oc3XGGfPQhGDsXGzpQkR",
  "key19": "2waEpG5GfyXMkEGRApCb5Vg3fMixT1htCNaKWvmT6dfT8UzdYfJ8qYhnx2FGoMoJPLV6r7QwyPJkgziWR8rPRT7Z",
  "key20": "2hBbn1NYvdepfFouQMQUS9FmmgLoMrijXbfnvRMgJPzUzzAPDQKPTtf7EeSKosbK2CyCkFoZ2c6gxrgd1NwNCJYs",
  "key21": "51V6G2MvhSXp2cQ8CaiBPud7wpmTvUCH6CaBUj1DMvpnxvB8VhGXkidwqZGVJ58wDhAtyWfu9mFYkYGB4j2FRsT1",
  "key22": "hz5zoZWG2yQ1TeXPMRfjiTcy4kyWfo9PUtsygmrSDwXs3SZVShXFQeMqi3ZTDhhC9YbTwMobPdiJ1kRRBha3LQH",
  "key23": "jnLwVej94Xs83c7h6gtgsjt1AKHLX5smNPHMj1FVFDx2hDPiKKuDs6R2yC6kDo9EieD4zmfpTZqwqFFLJqFPg1a",
  "key24": "54yWGBeUpAkxqmp1jm2YjCE5CWcwa8mg2iJrk9c8dxQRyB1fJwKY3ifWfQapvCA8YVBtUJxnHpkK8Gy1Xt9sff8N",
  "key25": "QP5Mw1PEVEA57uerDwhu2vtKec8Hr6dZ3gkC8FZboCvHh2P1MA4HDPeekeMnEo1Ar1Max8dKQei53HdEoKTHbub",
  "key26": "3adV3ioLCLynpnAdiKNYnEUJNr3DMfsygmq79wT5uXeNzGNRfb9DXYtYqLuEpXRHhbm4ZR5fc5UGfUVC9LuxTPfz",
  "key27": "HbDJwg9qX53Jfzc5EWBETgnFYFQHNNUEhaghsKhRvo24Y1x7vk9Xx8pTYNoDksHS8gFq7LapsCwNWaWpPNC3hgQ",
  "key28": "4CcWyzXdXjG7nseLbbF3d3Q8LTYg4R2W6KdfUgJRSDzofGmKxJTq9dc13khLuByikCKV4LuWohSo72BVTD4TSETS",
  "key29": "4aBHYn3aVFbrKmx8jFwnwGvo7SAk6wZiNrxK7HGugDjdLSVCw38UoGknKqd7kJauKfaHuZUeQn4wdVQs9W7RHHB1",
  "key30": "3VAzdrbPAgw67GnwEtxP4uK9NE8syaTKaCLcZ5Eo2SfAQUcC5FWJHuwYZMJJHVUGxvUmbqPvrWtFmnyQkuE35jy5",
  "key31": "34ErGUoAadKZXBobEHEfmdJfFHEo6C6Bie9cPTmsxUFC8HEPC4bBgVQPqPH6QsmCD94GmvEBJz8Sye87TCvM2deE",
  "key32": "2F4pnfuLT2wguJF3EBU1WXJQKtAWJTYd6GT4LyqyxcBD3ZWx5orsf77RGAhAGt8sZzMxkspdGTRkr6pdG4yp3JKo",
  "key33": "Ac61P38MRW2qcAUFfYtDh4emzKTbafApwNvfCPgqH4kceSQfAhRmefiofcoHDTPFXYBGsZzq1saafQXJNQqrcS6",
  "key34": "2nPiMusApawy5ynxhAKCE4qUPB1dnrJx26rYMn582Cw7CkMGyh8gn6n5U1yM1BoeJQC6CptJpYopdpppdKkEVmgs"
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
