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
    "3EgCotkpeDBr2TJ1G2ncDw491a9AEDtKhGEzXC9Pi5JjB1ZKe7ENaHCNkLytgzF3iLURrPQWd1s67BrE2PD3Kxe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tQraTXixMMTgDvLh5YgzAGf2UAmgbPYLEpqdHXu7tmSopNmZozN75qMfk3rsWeb2Efuadnpq4Ntp9vX9Q1E7jRS",
  "key1": "5RJUvLqCBivMZsozty3unkCMybKoE1kdZ8W1xNbLrhjgba2j6SAXJQzhCnwqkPwhFXRDU6qui9zYCYVC8pU4m6bn",
  "key2": "3nG9Vig9wZGwUHbtPWQANhJ8BBoLE3mdvns7ZaK6FpN5QMJCyu2HMZ799CKuBGGwNEJsia593BWQ3DMoxz3NLWv6",
  "key3": "TZzt8nmzQU49gh3e4KA5S6tTwKZXLJL4VyyULfrA8LRp3RRQfAsTZc1nVJEge57Sw3GKcC6riHBP3J3RD1XjvgE",
  "key4": "4DsAWjfmnJK25vPZxxkop9kgyUAtmSG8f54Bpyz8G2yHUSuGMaxTwfmy2iVHSod5HbJbJqoR3u5J4MJf9WTZg78B",
  "key5": "5nhZ3fFBcKPP2BXn19veiHYo2XTz2R7Hv21s2uPmJeVDb7DKcxKc4ZxBHuPmTBSdGJBG5S4cRb8NHB51xNGKix9X",
  "key6": "2PWEenKDpfa4Migdjcb83ZWUdRQx5SGHgdmDaqmL1PZt585xRAGMYgyP5CkHeTAUafeG7Ks921KnGHpQ37b2mZ4X",
  "key7": "2QeE97JUsAvjLgBWtGa4m27yjuLUjWAPqawCT5ZWDupkVuqt4bBsZRKqoBZSYANFuZnQU3GVpqcRj4aLoR4FL9QJ",
  "key8": "2DKn1Q6gFwKQAASDc3F2SK6oPJJRzzHEoJsmZkGpSxssdC6ks1HPMhmMLKQbM8f2Bi5V2ho9PVp67sQveS7VAPrG",
  "key9": "4Ls164Qafen5VM4bGTwK8pXnHNS8Eh8iCduWnnHzhD5aaxRjPM9Gf4vTVoqU5e7WdytAHFivivnwF9hFy9h2Tg42",
  "key10": "2UXP9feZMEuHZWiGV3tiHN75pfKH4grn3x49E6MvVYRgB61cUbmpQFrhYc9e6GrB7gFkHdrDQM54HpFafTSrgki6",
  "key11": "3CSTgusX6T6MLRxfed16q9pdNwCgCrPGVQVanBztLxroTeEPmUkDSb5f7cZfesCSAeB8XFHyZtAqbm8E4urNoTfR",
  "key12": "5fwoAhnCsDgZn6E5irYof1RRdobJZSLeNnZqfG68WbYjXFqnhCewiHkTKCnjdXCWMCXJEsoBBm9fZGecWQBAw5N1",
  "key13": "uqdeTi34rGcyYqN1jHkoJBbM291tSa3P5VWKf8BnBijnMYCJfJnBwPoiKHUxw4rF7fM8nwvK252XHmihnTLufoM",
  "key14": "bbLnHok7DvYAk1VEPdzsdip3dQWMTkqx5xXP4R3s8PdzAMc6H9uTnsmtEKJa7ckfTZaf49qfb3HybUcYbdiL46i",
  "key15": "23nbnqcaDaoWVGeX2Dg4nJxqebWPErtA8j4fqeFUhkxdU7brmYfiLaUmmEsT2QUv5KPqgb3hGdqZ3m5r4YVCqSjR",
  "key16": "5AXsMnkKy5uue12qFMndh7vWabufHRZRpTf3mv1UBMw5rwGU71Do4whNWZqBQ9nqLSWJ1BFdqN7nnarmYycEHvme",
  "key17": "M4BGGGiHFo96apHhpBJhG4u5ayV63KsajcwDGRvcDRhHmc8q1sNS31y9LyrZwX3DwhkNCfcm3xEdzmiqkp11iJX",
  "key18": "WZR1zZ4b1xCKs1Vs54v9rkvdgMDiaeoZ5NuQyw8vzDoBnx3omt8iyrGegSSJ8yH2GEqr8Afh9Srjiw2d9t7P2P5",
  "key19": "4AaK9vDP232hDjLXgead6KDj9xa8K1L5n31HiJTVWcfn56mmivE5gv1YL7u9pcFvrpSLZtbveCQ9zPUqEGshsBTF",
  "key20": "p8rYd3VhFuP6x5agEfbzqcV8nSDvcSrsP5kytA9LkZeGFkFpMdsw1BWzgvueESwEfbyJcHJ1ktjFsZd38RuVtWc",
  "key21": "4bshq6TMfZoGGwr5q2tnDU2j2Cfp4WsMpaqtVWY7NDkgH2R6QAFxT3b7FMaUWjeRZ4AACSEUY7LikzzAqtWM1ZZ1",
  "key22": "551wd79bDHQiiKzrhafRx3CJzgt7txkwopDLJsmBAfEubZdgYb9M1XMjSM91xATgDgJFw75ASH7dA7ajxommgRRz",
  "key23": "4bhCubSCw1JnBXDGkwDVGUfET8HAtKksPUMDA9CUdsCmXcbSGowax2RwVucgidhJN8fNV46Koaswz8bmZwVD738j",
  "key24": "22wQDYFTLheho1jjJTXwbp7VMEwbTh3S6fCeaUpYiyaUfFmWLHnCqbTpiuJDStmkTSkiWJYjFz6b2bJUNzfVeNBd",
  "key25": "3WNACbXnHTxG65ZaAXbqs2ZTqohAKLRkqyLK7u2cmuyrbiXHp6ojSGd2QWJHu5yLLPriAngcbg2319FSU1EuowHn",
  "key26": "2wZ9iHnEdJyhV9ufokmiTJ8pJ8uFe9zBMr1v7zwTGDpe3LQFeNAfQh6K87Auwa7Joihc1oTJANXK2G55ywdWwYGH",
  "key27": "4WhdtLWgofbzCZ8oV6Duagy5NvFWRB5RmucDdH77YbK2J49qTE5VreVmfB4ZDJueXTRSng9Vh4cPLG9baqoruKaD",
  "key28": "NnJX6SYktw2N7TAmELhzJ7vbTFBrduJUt9T5LqCYC9jxfgcS5MwDtEfbUkAfSmC7sg8tqoTJLmwXjKPagjWFdte",
  "key29": "yGsuqwk8RRXZvy5yHb8zeQPRrn7XGMd9SkuWYb8k163pm5KdwU79RuPAjd7KeyWoBLjxnMpuYHkyZs7VtYkrmo8",
  "key30": "3Pw7UBaATRxUkBWEq4dXtdG6tBLzLuJBh1cZWMjZjjJxqgKJXAEXm58Zk5Edjo5uzCT3BMCrhRJMBRKWDhLrJ4Tv",
  "key31": "3g6LHQBWZ2VFre4wQRYY93DnEJj7fxeX2E1TPQsjdkrdRMHkcrmT7G4tGykkk9TYrSYVgx6tKBKejbc8P9h3999Q",
  "key32": "2cJ46Mc6BEog1aTTes3KqYmuVoQXMwdQ5UXnP7accxx65btrQBzCgqka2cxUzarHpEABvnprhCnZ29eQfXw2r5PX",
  "key33": "qTfq3RLPeQnmVxadVMGyX2g84xJmzREV275ipsePgtpQ98KXWnQ4eBzYJZgBq3doenKWnpx81FceXTSo1wVtVSV",
  "key34": "5sbgv4KL2MAUL2JGjQxDUPgUouECALtNZyfTGbpqcw3E9KUV5raCKf7BnKVF9pCvuAgxWK8kCEaAtwGfrkvkfK98",
  "key35": "4Yaa9qb3P8gPBBo8eCMouUD2omkXdcGtkUs9BdXmyyjmFB7LUiB5C1gz1LXpp7GyBcPC4GXuNCuPqkQFkYQ16D4Q"
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
