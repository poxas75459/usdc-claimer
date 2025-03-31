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
    "5EsU6B2Ai3RhTQghzAtyp1aePZZ6HCPQnHf9grkLNDhdVHSmUsdZwNCowsKQiiRcLs41R5txqtkNUgy6dfTTfVJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5By8vPdXgGuAfCp82kPYU3CGuDiPRNsX4zmnox3NFvCVDoaLkXeuyj6Lnmk8fXmrYYZcb5FJwgeavCCt8otkJzsc",
  "key1": "Fex2FRJoi33pJPds1ANKN3Zznc2sqgaaHXBh9qsrXKLdt7RaYNcF1PqmynbBYqHVHLXXAQWeB6xdMxPtcxSiFBo",
  "key2": "CFMSoknQSaNEt6VzTGKNfeh2wavbQoiuYKYiQ6htnAiepCxTiUtzRGUxqwDgRg6igXqh6pZjigmikrF6ZYFSFBw",
  "key3": "363CXbzZGowjeskZMQ6oz5FJjXd9PYZkRayCq7WfFK3bLoTB4zaPzfws4BvPre1R2oG2S9m9zsTZmaSW9bfDE44n",
  "key4": "5yGmcZNCvF48XrDwKh8CpujDP6Wd7sgUQBahcncu579xK7B6kcffMpzqB2evja3xHpAZ2DDbGiCc2FRFhaXsGmtZ",
  "key5": "2AQ5VWPAzfsK83W98WQ4sXsKMLPyD16hKjARdEN4kauUd7mfMkxKKssNBEBjVLuamfk89uHH9ax7MSiZ3BAX8PYx",
  "key6": "33aG2RoKwFt7q3hf4gn4CQnep6zzXKdW39eRCpGq4NXfZiXJaEX6UjHmM4bWqJUWvH46cHxj7ZvwaASgDmskytRV",
  "key7": "3PDrrFAa19owb8HRsQ8tqFuFb91ozdAgY3H7qyvxZDMT17M34JzeL27WjmWu6XHYxUBYnJUiRmxWMQK3Z93TmuvG",
  "key8": "5vUkzZkLWiiJ6jH5K223uXDm3S5HqdSBPvKVDFWZzh5bAdFWW8g3Y61hzEGhJCoGHR7RSwpv8ZeKkS9U4FsMmzg9",
  "key9": "3WycfmuNA3rXGhkzZ8VjRw3fLFUVPeaAJeL2mvs7wqgtgiZ5hS3D4KVTDC47i9EYS8ZPdoEqN9GbZq8187MwPie5",
  "key10": "65NncUnFU3tnUYeRtYsEF1UXbYUvocipNT1T3JbfXxVC5Vec1LkUtgLCYrtAqcHq8RisoN8MUFJPrv2LXxb1bDrU",
  "key11": "4VmkVJmHZkfxogaG6hMUJcEJH8GYpH3QWy3f1XxbZasSKaAdJnForadtUzDMPEYyJcWV8g1yLPSZvTof6wuQDw3T",
  "key12": "2duT3gsTQMTL2NLNxLCoVxJQXZ5JimAi9CC48Be81gcm8w87mkTcuE66Zrgn5KUerPCd7R9JZorH3rYjw2Csfwwy",
  "key13": "39ChtehNBm4MZqnLEGCw4gZ6DNvWwn2WP3Nkqngt39WXfqw1yW51LzvCDPEeSMLnFAdVVsqiNHHy9Mmf4XNSzjp2",
  "key14": "4DDj1iXzykNyy78VRp3bjSggV3XjJkkRtttwK4ERvjEZaePSfvoZLjP48huj3ZhaZdK7cdufQHpJAWAPhtppKgPv",
  "key15": "616drg8eYcycfoPzzKdXranmhK72wZ14pfCDYXSqMJ3PPQy9tatJ5u32shCZUs4zFCtUBWAp1oafeGtgwDiZYzxy",
  "key16": "3KGHtiFkTCMhPGvKFW735rwEqMtZvVn7vZN6TGCgfkdVcEsnedxGrL6bLKvFYKpj34qkfUECtA5vdSq4WhVPLGG4",
  "key17": "fZUXRhFvLDaCWUeqhu8NiaS5kHgEeofcanXcDLtD7ptXiGpmHnXBXuKrZVF1ceyPzdDqVDrj3bTiUohc1cn9GUA",
  "key18": "3KkHvvDvc1wCp8FjAFG9rXqvEwKbWXL5eESo5g27jmU34yEq4c4k25frXMLv6KvBZpRMRvmd3fuScSg1bLyEzyPx",
  "key19": "6YFEMUeJ2BQ74arndVocSUS4toErX2ds8R3VD89nuTcwTS9XKvNsuwFrP52rnzbE2t9RkwLHJsgkfjmurDxx5rX",
  "key20": "4SWsuuwz5HWPd2x12Nf7KHwrBfd6Jiy2j6pohrcmgbuY7cCgZiePMFcWZULZFMrYKgZdCPxTyXe1suc94dUL8smC",
  "key21": "4hn6Fiq7M3xHBFuggxpwjG7iNNzqWg481H5F19eYT9k5z3QmxtSfVk9pYNMF8yPxpRjBfWJhxzc7rrDrqjpo5Wz1",
  "key22": "U7cYgMhmVHfZajt1fKdQB1fB8K9H2BkMtpCCfrA85f82p8hFJSB2e4BtjgVkoA2u23EdZqqh9L1T2QJKgFHsdiK",
  "key23": "3iV439RPTA76HCp3D8AbLAcyYzndta23jKJsfBF83TLokfzcFYgy47ycPGVdduq4CPt5LuEK9nGdz4Z3yRSo8Xj7",
  "key24": "4huWknxJ2meZuasaw2ueC4JQLB9F9Tkr3S7zyjsabZbLuU8vz8ffijr1iUZweyF72Sa9hs83dCiPjRtKVFLDA65J",
  "key25": "4CDQL3vZsYvJFjWvCp25NtmGfHrg2f4z3XXcNeEVai8WyzJQQiDBhjw5CRDzP1Pyn15RchUn82yXZmBBJfog5s8W",
  "key26": "51reKQrFeJ4KM4aj88QGT6zRfexUq8tBiG5J3noaKHS7wyrfYWiAEmKYKdFnhXjzaZH2z2gWBPr9igLqQQmcfcFi",
  "key27": "33ze6QN71GYYLekUQY3yNzxZkNvwRrHrpUZZxu7gJYDCeRodnQAtNtH1ozJmynYhA3KpD1aCStW9nfKs6vu9bdPA",
  "key28": "5fHBwYmYkKSPpY4BGyYck9jr83djuVm36GDptx8kYUtXLCgNr5DV9myJXRGAceKSXcbEHmyzw94oPWpyF5GYqbLu",
  "key29": "5SPPe4gVJcJH8CfuukKxtx1cpvfAFDVxmBWknWBBQLb6hRg5dNmgDbLeisHFjjFgFZPUb1punENrx3BAVVKvsavR",
  "key30": "am8Ar3HufDkReREamVemusYkiY8FZyUpJD6cQ8L3nLBYkRipoNtyGcgkYZkq4sT82SdmgTuq1w838qH3ud6rntR",
  "key31": "z2wekKZEYT7kGDA7bGHHuvFgNdmqdgSMLH2mcYkAHe3dG9QVfejLxusQASv8PF84tSZFy9hY3jL9vvrBZ1wn4tN"
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
