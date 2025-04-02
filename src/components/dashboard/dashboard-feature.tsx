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
    "4RM4p5vdgqzHmxzq98W7erd1A4HdFW6QMhSZ3wdTchE6EiCKky51xc8VswJs4if2kDQvsCXQonqtytQz7UDU5kqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KcfpYVa72kYxQRC5hRkMky4kP2vXUxzzWSucfGVtb9cehB3PL93zcSicc5ZUPoDnhuhqSfLE6hgEDwihPY53URF",
  "key1": "5BWaCqVjPNQ7SUaU6n9ManZmfs987csBN7TrMAyXmEbdsyhFnx5aPJiGANHn1CfNzUP46e4fkA1s2Z9brDx1peTD",
  "key2": "3NTM2DZffYGmGs8KFPdoPcdk7eLJi7VdveWbpWmap6TXECnxnhK9DSgXuEtJDcgaCCJMznfDW18oFqKiqFjUnAdQ",
  "key3": "XWoNVqzbSPSCQyVbS6QfgZWmC6VVkq32tchKEM5SdhQANeP3sXbwCndEAjevLpQGeRQZ5n4ByFyhuGF6NK8c3tU",
  "key4": "GxdefdkMqyYSSWnpQSH27x65qtkwwmWCebhxCmbEf11Q32DB3zGGrEen85VxCZgBpztiJH5Km4xyYG6mUPo9GAU",
  "key5": "5kacmyMgmLCnW5YxKKfUsMxoKt9biF7CLovudzC8zot9CJwqSXMesoDvxmAGHUthQqgXYnfEte1kbJV9qZDAr3WR",
  "key6": "52b3WNdh3ntJ1BaxSMtJQ9YA4GQNxPGzx3NSqU91WQ1kctUJN8wEtoQSEzLdr4m4fUhoodE9ZHEhDT6KTo35RGy6",
  "key7": "3WryDSQQEqRSi6XvMbCgU7wBjWiCktuW4VD7ceNiR3EN4WezDqanZeW2QXNaUyKN5N24fjfaTdJRab6i94FHt6kb",
  "key8": "3vibgUmbBYeU4hQiSZoymamsSmF7R3Qbq5F9HkSM1NKY11yDFHoVv6CWFW2cxjP4NmVWFk4coSD8TtoGFcW5Znkg",
  "key9": "3T6ryCnsgHX8sjgF9voDfiz9mAsH5cVW27BWvrG7MU5Q1uqCD1xb5oGfXiwCywt4gydKiGWhRNjZ36S9SSEwpiPC",
  "key10": "3EH5kdskpEpWHCvouMFBtfAwsX4cKENTA3Mev8bjN8xM5ZEMNqgtombVoGnCgGhD8pK1FyDPN4j5gB8xZe5UYN4a",
  "key11": "5X6aP58shgW3mVeS9KFdWnjoz4JeaHE4w2JawbmgnFqmsZyC5dpyyhbWegstDncAfCwgFP43rFBemLxVe9pyRf2B",
  "key12": "5Cv6btGUwV2SB7QVMxETd7iTac5ak4sUmArQsS1NbeU95Wqnd1etKfifq43VMkWyHWoL5j7AnosCxBHTUgMELYCk",
  "key13": "eKTW2VFUYJ5ymEoSZt2AmHZmaJou467NRWHSZzVTfPKYrJWFxs7ipcRsXtBEyFRpGcj7WYdByRjiR35oXFWwzyy",
  "key14": "wabEEupVYuuFw3iTzZMcPZXZVnJ5RtGsk39u3YpAsSN1roRmN8aoNaD6sfAHkFckGoxMoCcfYW3KW1HyfcoMD57",
  "key15": "r3PHG9VvGHAWP9A7UTjJ1rgvP8b3LfHvs41A7YeNpVUd5cUKjga93bjguaueYUf8PJoR5fz5yTnBSKB27Yy4tJP",
  "key16": "4tW2fXT6bsPhqiprkkZmBG18Ue39RDVptGB9xkVzuAWdn8bLCYaAi1odg9MHrviN1XNnyU6af2Z7wLmBqHijSZ8D",
  "key17": "5ShdvSvuecvnnhSa3aWjttxC6ztzDzR2XcN1kACSxeKPYg7HthUC2QJsRsTSiuKci6fMDhsfZ815mJ6BSxfVXDCp",
  "key18": "3sDGJgyWQGFijAVBrWz1uyt14xbu5kgSLmGsK8KkmwoW3MEr4ACZEzAZrXhcxiBg7u7zWjax44YctvniiZRZFgRy",
  "key19": "5pgu26yRngKUXDb8CtNQKFZ7jJX2gqf6EkyxbD4Foav36YPDxVjKNkekYPw1crGJnvUpY5Xdxr7xThTu7jhTYP9i",
  "key20": "3cDhmLqjHrTF71fbQ1GHVX3J63ioMMnsTe8u6HVC7NNbrQNxtEd8eHRAjo2msU5ZX7ZTtBrHZthhiTSTb3JFAhuJ",
  "key21": "3ykDWra9viC6MxcPPzQc34J56KiV4e3i94iP1HNYWDe39sErhTVPdDd8NkpUSjiA4JdLMfGBKBybJdEjPWpJnRBp",
  "key22": "3dXtdycYhqkM1eWJMKRFmZJtHz5ma7vznySk3KdMwsDJyUCDuaRn5qir38U8rGgUvYUCmuUwMqU6ziS28fycZgcg",
  "key23": "2hkoP16aBS1v8VuRUQPTp9qSmr5PDWSvdtUeMMRu2JaB68WpTMFek8W3pZa3ovCa5FA8SUfFtL1UKo3Pe2yg9aam",
  "key24": "qSWL1o63M4vJMWoLPzRBcUaRjpuacVYHAgYRub8QxoNSATiDUJ27Gf1xMo13aVJxGgUKQp1xV62aSWa5qjK74b5",
  "key25": "3HHASvw6FEhyS3Jzuv3iWENVd3goq9sdVeL4UqwXixWBgdXzuHRC3x2LFmAUieTHgb8B9P4assyZV5GshVATxMxk",
  "key26": "5TzFnR43xcZneTwLKK3mccRaCDUMDCQqi18xqKZCdrj5R4rc8TgABHqjW4Vf6EjqkiVKkCbKWcUPqhQ4VhQCpKo9",
  "key27": "3utXPHdzzarrs6Ry9duj8gNpcgA8WqySJ6URCkFw6pVcQqHDLD7qawtD9ewgP6dBKWvbBShqgvvqFs5qjybGQpWz",
  "key28": "ytBH8i7VrMjhUHKM3wuoQpEWhLKW7QTRsY9Cnt2CfAEwvyzUt3PWeiPur2T45bs9SBXwAGFBdVGV59HLCCiatT7",
  "key29": "AmHxGUNpTe3HrKFz7XQE5zdZ3q5gXjHiw3oPPkm98wJYahbfEUWciVotEhmAQzCkpmJ9eoc4cvCrdjpPHMHAVUx",
  "key30": "4R1p7vSPuVd1QExgCsagss9jmKe4mA3bVodHKHgxfGMaAbrQchYajhKhg6D1EDEq4yvCPZpWW5bGHhskRenv4423",
  "key31": "2yDAvZ2wUhWZ8h9HABL3id6cUvr9Y94t9xaYZNNRFnYypp9oRETnVtGGwUfcatU3nh9VTuuJKQfrJEQ9oZp3ZeKK",
  "key32": "wfuiqbREsdukDVc9Tr6vKn89GFFLzZauhvVG4v9sN1EdDqWWcxqHKQXZh2DU7RLgG2hYMCmbjwtqYJeeHh3EQ3x",
  "key33": "5Q6SQ1zQqoLjQsSYwp8ak5ratLMCzjoorJAsJdn8akuasDcertNMDPT6D3kNpXzEWtSzcNiMuZbkFz6Sb4g16uwg",
  "key34": "5YqfabNcuSfvABXJWVDvjUz1kCkD39tctBqciaDFnBocJMCTR975aALdomFdLbSPv8qpnzXZCVwxUWcmu5GEQNUf",
  "key35": "3N9H939eFQ736bKYfXLPDjrX6UKySeEu8nb2tN3diPkXdHnAz9WYnxFS25tzeJYsoBaCCcxir1PhMyo8G6Ycg52t",
  "key36": "hvzaPfqWbftRH7nyABTLsocUm8zvjKLY7uG9fyrj8m5N9gTuGrgheQ34wNrf6zwLzrtFUNbGoiEr2j3g9D7zpRC",
  "key37": "5CMamWXxEHmLFVpUCB8VXLgiZKifJF3GGPipBqVijTRpghN13aSjouYq568V3d2R1YV9dVApriMTqjJw8gjwfcgn",
  "key38": "4WTAwB65eMnF55us7FR1LLMXVS7HSFx4NTgFDqUpGTBN4i4hLr4aEMqXqVGRECxMhAZG5K2Xxg8jkSJqUxeXteUd",
  "key39": "3hfGcnQRxbEFQBu47StLax1rmjTBek7Xh2mQgr554irjafFGUs42dmy7N5foRjjWDBnk2KFFHVwTZ2eypnDVEdo7",
  "key40": "5D9kuxrTadTpemBkrk4zu2Rcg2eE9q5pjT327oTkn9KYXmUaAUsD9YvZMKA7V5ikP9crGDNMM5V5rb3HZmCa6dGx"
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
