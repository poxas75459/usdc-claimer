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
    "4n7mfPJZiCJ7dTkna4qM1kTiAgSKom6yk1tFD9faNSBg3YH2dwjKyhcZa99eWAdt4kvqNfE8eLgRCz8uzmmzc1jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "121MZgsGieQTMffjU4hECWqccNXHFxrBjhd7fsAbxg87xcLgzShe6NMgvzehWPHY5kS5xaXiACoPni1Cq48duo2Q",
  "key1": "5GG1PYCnX2vZUd6gbYnmGmhMnmFAn7VXUJ4LBw37LnzdfBmsdnAsiaKnHzG4pmnzoNPKnhYMZcEZo8sDiSi2tk5Y",
  "key2": "2MNZror6tWfMdAsxj6CmwpZ2a3BWbsUHzfxNSKP6zgxCJwxiByQEE7SfNBG26CYdXeRqm8bqNCAeqT1bd42UDgN6",
  "key3": "38yWBYAo1FoSzYLVNdWgQkLA8VK6AY1mFS7G3kQuCGTg5ktuFDsUdZadNWtCfiyPNUhANsqofA95LSgZJPqbxeGn",
  "key4": "49NGKvNfDDTCVED9BDY2w6ynGyMYxtifHAEeCdtFYUJo69JQ9DiMMkdsbnZpFj6XSu4nZqPvtZ3WABAUQZYZHxsW",
  "key5": "5mJ9jyL9vFU6iFGjAMJmzKokT1MsPsJ3J8ndQuLnst3q2rPLaCjnB8yc7JHbuTRGZNkgYdrbjgt8Un1Sx8pfqjce",
  "key6": "42aaNFBuANFZMEgr3CTtJjTGxqGoATgpVa5xCAXkdfh78owat5Nmt7Ews8JE7FhfFQ5LZXbXYcgCMnbNhGSwXMpt",
  "key7": "ky5ihkaK1Hkd55LTnVof6NyQ99JsTa9xpDmucG2G3EiQwNegMUNc3dRe3sMb5GqPr4mVt9WtPbufcgFtqAUiRj8",
  "key8": "oiHYDcLb3Bb9RoiXQfqcGxfVei5mTjtgA1fWn3GYdNMKWBo8dbDDRaayywbBgeoP9kc4g7EzNJEqh7G1vZ74EAL",
  "key9": "mcBwKpdp6HegnGLLrc5vM5yqgThCXLHrv21vZmxaMjZZp2c7REpkYpReWkLkc4fWPv842edLWYkXm6TCXUjMhRw",
  "key10": "4U6mnWtXxxNQvcwN6tNKNfJveugufjaXpyhWdmDFJxHn7kX4bf1ZStepD2dwRozxBzTjbHE9tNsNkxMd9hSbWo9f",
  "key11": "3qLk7TNPX2aLngxj1X8PnKNPMaPEZCEEHk1dXetLWRdGxBEDNgJVo1CiqLb11q8vDArotkihtffPnN1L9pjjxEtf",
  "key12": "5U3yP1UFNdzSgdtjojkWSN4RMW6Q62hnnGJQEzYivf48pDL4FMwHDTGf1BZyp4Gp1MGcph98NeEx8jSf6VmPxFTV",
  "key13": "3BKNG9RshWjHcpNS77aN244SvU4rRAziSuxKkB23rYPf9YTxP3VLaHRieuX2x7gm1cQQxQ4UqF5VHErpLN8Ym8Nc",
  "key14": "4jn5UtosYsERxnG9wH9MM1Fwyc63YH8NLrdv86eVN4FaSXwPubGmHPxkSjSX6j2gQLFVEPEnVFpwQ7k3fvjtYZCS",
  "key15": "3pAypHBM8QJkPk1guzFESMoMfVogiUMa4WJYRRQPusA4fHnqKRqgVY7vng8qRmNsDB4XDdEpiWsMamyCjYJhdUgp",
  "key16": "yLPvYufzqFEvHMKjkbAWX2X9LFsMemh3294FwU1QjP1rPWMeAiGoMgomfeApUMom938wDGz59XPHLJcR8wasBdw",
  "key17": "4FTzaxAKbb3DEN4zrwdyuzzP4FWafrKqucaPx4xTFvWcvak9m8fHF8y7ziLnaCLfPHR9sLRCTCWLqrbiXLn3eUgp",
  "key18": "2wTrhdrH29eBzXM292PsBhifv7mzqptRoo3ApcV7KZCU4iMhaCUn5NSvu7WKkEVCtru77NG3zqkYLswrfrwo3Eee",
  "key19": "WUKkKjLZyyFvLAG5F4mgngiJvhsSdWz1kR2dzbWv1ECuAzDDSLHkGjaiXgB4x8HmsvGbYLa5YfuTb8R5msMXTEK",
  "key20": "473mzmaiUmtMFSfq7kzLw13h3owvUNyiAHD3xkqs4sE5GZLx45qsPscjNDf5bXjpGD123zUe6UrXGXGdHxCoZWcb",
  "key21": "4gQPjz4MVWeEacXL3bdywsHFbaxnu5vGwjMkFepqye9zrZkqKixw23xrzry8AWWUK9oTXre5a32YmEsp5huxP3u2",
  "key22": "31PfSvgujkSKi3Pf6p76PB27ZLCT5cxvPrdP76MbV2iM7kmecgw3c2uoqdpyfRFCAxcDoxwY7Q51DFTSyVuSoweL",
  "key23": "CFpxSoag2BmfTGQVNgb46WokaBZFitLytDhSEJa8fsGfXGMjWxVDTLvK2Zc2LY7CoFY8aDn7W6RFKFaKDPXjCyw",
  "key24": "2RCRQUhP9qdNhS7n56kjsLQ4ibo8QD2D5PyDNqAch6XujoJ6uJeke9mCRTak4wNVGbH7V6hLHnS6xfuL6s12DbTf",
  "key25": "CXzG8VyzFA8f5f6kjrWtz3mqBhBYwr2pXvB4gXD7HtFK5ZdyJzaA4EQXwaePpUYWLgLkH31WqV1gXtyoxoseycL",
  "key26": "2qaDi1WtjK5vYCE4kb9ZeMcrxCADtneoAcpGU6WfiEWdzxDebvitorLeZsfKe8cVJBL7W2jgKdqw3rUkRTpgxLFR",
  "key27": "2JaQHMmSLub7qcARHuzTdHhNLF62Uz1LeV49jPUYLsTP4RQuiZLMCkgPFQnRMutaKvcHxHcX5vsoZ8zVRPgpDGah",
  "key28": "bLymSPbawVE1nHFPFWJT7xLhicsHj62z7M3ps5Lvz3eRLkzGDLFQcKHzUuTvBE6zbEvBMx3Wdp9w3XFmjJZqrwX",
  "key29": "2pJPR7TykrokebxL34iXR1YYmS9jJoBpwzGjBE5B84mvLmvg4YNb1yAijq6tqX57HvbqBd9KNfx3BP81mtE3xcmK",
  "key30": "2E78NosxK89S3e8dJABGAzjhgpxmX6CyjhJyaL1VqZpEP8CqmHtxJgS2DGABBameZicyZTWMtZGfYPWWr7fNoSH9",
  "key31": "5fSpeM7AXR3zaKwjACBXF9Xr8bsX2UV5YwQXcVHRTLRWCBcPmfy7nBdQvY2E8pt5yZT4tW2wsUfHsVmkC8Rq9WfN",
  "key32": "3ibqt1sjqDx2LaL6s6soYntw7GxaEmfY2b2bmEiaX59F1JEFUwT2o6fuQC1UDQbbY2rgrUSTVDCJQoFPVCD6uKUu",
  "key33": "3SmYVyDVhZcuPAwKZWYzcMYbq59RQDLUdiURcXUc4sZuifEkiiim269oEJ6U4NDZmKDo5PEQMc3m8aznUh5L924j",
  "key34": "5rdMVy5cAZ7MwN3gCt6CYHGZRkYdF69Z2zytrdSSmXHzWLp9s6Uy7AXcL6cwCwbEPES7bhV2HtyDYHeuhG8WqMa3",
  "key35": "5rXkXzFYHUbsJeU9X18ngdU479eRvLnhV3c8aY1wbGyqbs1Ewp3r3bNGUqUkKF7UYVxsqfrSEuATqHCT8c5Ktz2i",
  "key36": "5ypvW6vySVrRjG4tRcqPq8FYaXREAApXB8wTMpkKT8FdYWbDF1MjK9yEVFq6cqstZQM2XH7Hy4WvZqmvhnQUJArv",
  "key37": "4f81r2YdFJSre7sgAcqE9sLt52SYLPE6r38Xo8V6kHnSZWDuWvUB7hbB7CNFMjbxA2sAuuGzcxjUqrMmmignn8gJ",
  "key38": "5xKsEArziVa2NGqnBjmDXZ4HwfoJYJ8NFhEd7kutsnU3dwysbWkYidU4BZr3cQcEkhG4vy62Y1BDdmEWiTq7ZRqr",
  "key39": "aottQJEPoc21gX34EgFvgD7k9aM45bcBwCPjoJB2HtcdMvTV1rih5TFAmJHwueQdDAtj6ku8ENg3V6j14QL2jQt",
  "key40": "5GYzrtJeJnJLKQ39ZuuzwX4zQrwXxiUhqMN6zjabNDYQs5L1XhPxuT1GpoA441zQhYYows9GLzzEj37DoHJZitt3",
  "key41": "KfUh2cSBSbnt8T77tUnDvffqubjZpGwaczAa7dDNpfNqqvJTAyz9sbFRc9SbLWTvVCJNKkyVdhqhfdRbPqrJAPS",
  "key42": "5aGFHqQg7k4LumZJdUMUGqQ2pcX8piiumnmNKmLTMUGQvyQTLJ5G9DG1PtWAK2ucuvkAT49jbu8GY9LM8YZmHvvQ",
  "key43": "3U7mdB9SPB3L7k8ShGw8Apr17TBE77gobN9Y5A7SrjVSgSZmZ7WbTufDYBKXHg7Dv1qSDCsp2Xh3ibuVeEWBsxS5",
  "key44": "5fSj7wBhD1RQfoSfKjvPLAQzWxVdKDVd3JMMbKUnMJeQrHNLu99VbhFM37yc9QFgeG8u86ZdCdzts6gQJLXy8Z2q",
  "key45": "jGs81BMXpDiBc5t4DRQADR88fUEuDasgBe5gsBDJ3GVRfrtCUPcdCgBBrd5ViTy5vDFgCNtRHWnpYWes2BaQsTR",
  "key46": "3BR42nfwhrjF7F1maqGyCEsk7YUDauUez8t4hxuce91mvHNzKW3mVsG7sJNMRL4DXvUUbMxXkEqcHyNG5mUywdp3"
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
