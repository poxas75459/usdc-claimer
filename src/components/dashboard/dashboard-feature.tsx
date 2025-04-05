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
    "SyLJsh3BwgEc5rNQe6H7X3T7Z6ddJfBiHaeRNA3PqhqHfWwKThFqR3fxKPBWJTMusyXxwsHkhsmoWbgPKN2KK6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R7T4uaC5rMxz1YUMuqHVEenj3Vf3tCuRvXeVV3zKesNgMwfpG5T7ktmxS52ofFkAnt87HNkfnDALzHwD1zz4pph",
  "key1": "3cntzwh2ou7RgxXrPqvQNfgdMM2XjXRBD23dXJYm58ABdGJMixBaGkEA9qF67dLv7ZzJWMeeKf1yU5iqo16ycWfw",
  "key2": "3FSsxZ3WiZL7RxCzKvPFwLCeManjTz55kWmo3EMHH7daVC4WBHGf2VXG8jsPXHimG8ZhySVNmQ5MFbp88V8nYZ1Y",
  "key3": "2FgCeMD7Dx2wb1Fy3h6eYPTiL9Nrc4AhF6UE51EXa8evjjP5uRbEv9RfmRL5cNf3gkHCbnSV7BtVLktpaTLnfW5B",
  "key4": "5z3wwJmrKbkkse4TxrpYwjoscczFEVR3QfMGbMBtezbSgjkCm99tBHFsQPaYDjrgnkmpTSZUYgA5LQSx711LCQhH",
  "key5": "JkeAj7WXzvVmGmW4csMQddYSgQfyLAG22iDBkQ8CvZXPa21Zs37AzEDX9xNaHzobwq1pjTvYQ78iq34G8zZj4Yq",
  "key6": "3Q3zaqzg77rgnzHZg4exxAUtwjYeMLLu8UwfagPWJBaDEd6gNBXjUpr8KMLLZWGcjMsA6zmvW2UpdXUehKzea1Xv",
  "key7": "4ggyhKuMJ7TDFQ9CV9D3jmCTcDhyUoGzUNWkLz21UZHArE5VBE8MdFe4DWriPaZZj36skDFF2YNNYC4UsMozuyqN",
  "key8": "5K7CF7tjPZa1bXwHq2mopym2vs8jG1ppJANrPRavGGVkSNe2izTByHKTEEe6SZGyjNWoahoCXqofpwqp4WTTq5YR",
  "key9": "5aDteMsZe7g6QBD2TpSzqw5NkUUn1jG2gZ3nkt7L38o51uYR5zaqnuCtbfTUZ55aXEni924tJDpgUHz55oszg7h8",
  "key10": "58MaoG4o2b1rZJC7ftmUN7LSgzYqiibcrUPqhdhjsADU1jB9WXcbeAVPBzF4Pkr8HG1KQU7Xw2pTbbij4icRwEnH",
  "key11": "3dqNi3XvShzyJLQRaCggZHSdDRXZVaDicMn63RinkmuXPgPUCwtJrvnfPHXpSh988P1aNULFTs5dwNYQ1inpygJm",
  "key12": "4ZTL4Z9YWCURQhCnoW4TijXuTbgCRcKqwQjK5Q9MKgD42Rh2z1FEiFnruizWvik3nBx7Ln1qei33zgrbvD8Q4g2x",
  "key13": "4mJuRjfGKBp9qM9ycDQeRJtAyCUwCvhnc1NoNrgNYaA3ittCYSZJNZL6ETVuHNDKr27kdWV62oKqDxAZW9GBnq1G",
  "key14": "2qStonoTB4EFG1txbC2c8QhyBg8V3HZucUVXxc7TmfFhCtzSMzoMbwGjPKM9L2R99umPfgMXPncSezSm5j2UpwXZ",
  "key15": "gYeiC18MWRwykEmHxVhJAoS9XWz6UQo1uBbdW113HSJQnpQQiJ1K3VwHr6KrxqSGN4vn4kbJMkaqhcFTvwcSTpt",
  "key16": "5P184bKsxKSByjvBsh16KCqRxAMHCAS3DfJ9Ua3gwMA7CN4uM9Jo5AGpZDBeFCsaJwt4GiU7DtCVayS4B8XLcz5S",
  "key17": "5m4vzmFAEQ3vDGZzK9eGE9Mw6dbeMk8H8YeR3z9tsukiJkCubCjq6HycZTYWTpiDf5WTLuBfovCsYLedL6Y11z6j",
  "key18": "5o2cw7zbwSgBpZLCUhpuzFX17G2Q6MXijWsX49bC1wupd4Tukijn9BV7nFpJntheHoorhA8JXGKV6sNTL379oT4E",
  "key19": "XyPVRh5VjLv1NQrFHnnFLMhygK3J6H7NrRexgM1e3EWBEx9t21G6qv7rc1JiQrjoTV2sTNW3QNoayQ3xwMkxbF8",
  "key20": "LfE34ArabtXDmbca7nHZLnPrbcqmqpJ8nQCJZzKWqapGVemxUtXaPnpGk6Z3eLM4hXeBVj2RZWrg4VhZ9brnCGp",
  "key21": "4CBvUygHfDYvzoyQb19H6YcgXMK4sPiCz52wKkSw5wqRmauGVxJBG8wjhELHyEpa5DKLSTHVszURSfT5tDNJApB6",
  "key22": "sgfb66nNz3gt8VLHqPVmsyb7GqRrfh93AMNf6NxgHSn2NnZ7kKJyaugVNbvru9RzfVhkkX7a8t65EksmPPrz3iM",
  "key23": "3AXWAfhYNUNouEyZkuv8vDiHWiVoW7vFw1QFrJiyzRmBDV6HYSd44kSAZuGwssPuxYwD2VnATRjSsTVPB9vkaPCq",
  "key24": "4xgcMndCZFvLx9TUx7crdpuketPNQz8wVTDyPm9Azu5hf6Jb22o6F5k6WsHMjJ45GokAfbEF76R9UzZ1Q4yxSULP",
  "key25": "4Wu8iTvvtjhJ27b568GQEFRAYEyTmT47ufmBe9PB6TMqy5CafsPt6Z6szUEHG1ru2tvguLJz8VnatgccUPDN4Pgf",
  "key26": "3QDrJrrXKJ6F2bg4RoZNUA6g2YUq6PcZ6xdeLZ18PmZWEJDgiLcKsmJerREx11dCHCt6pf5xEzrqcuvtjxNZYE6r",
  "key27": "3btMv23refmyy9G9N6zNToSq9AuH6exSy1ZDxFbTT6RkTQiYNU74rCYKyaPjpMXaiuiJdv96hSsBENjEEu5ZkeYL",
  "key28": "2J9Zc1Yjk2xWNwrTp1GEXq13ZtDesnW4hDqnRmwTsPWu4qd42eArF6YsPBb2rqUm7fYnJgQMWjUAbhixpc6CpivY",
  "key29": "3YKATwMpYEK6g23KwNRdC746QUbj9yLWNNCUTBkv8qBkPDd4GxBrQP2TFVAUy2k2i7AW9UvUPsFsqmsK62aMyYsA",
  "key30": "35vzUjWRoP8BkicR21EnBpu6Q7YP1wwgj81NdCAyAfWmxfKmfgq7VfmroMqy1iTFSBFqNeYiUW8DRy4JA3JTjrgD",
  "key31": "5MJWWvrY6sHXacdA2DrSP5iwLPCSRzanfvnttD1dXLGx93KQf2wFVbKYJiNxcPZpK6ksj57w1rsVLzL6mDEBbDJx",
  "key32": "5cbX92i6FEhsGFHaaTogBiieVoPWhvPjuJjnbB7qR7hFtaV2SaqfAQtPypkBsjYDoGeJtuLdGqAmBxRu6LZMyKVy",
  "key33": "5MjPBzSCy3w9HxjF51M4XxyrjFK5PaAkkkfj2yHeS5meiPivLwSv5dvWqDCAQzyGG5bvnRViGcGrthKZax5LnghQ",
  "key34": "RSCRL4JrQU27WvzfSe7JAQfPHrZqwMq4RVnxrPS4rwNXciXn27orouqgfyHZZBeiR4ph9aqU2ZjBsucyspk6L5H",
  "key35": "3RvuYwmbsMBZ4rv3qHmGCGemkm84z6xBbRBYGgBjNQrF38zpLfPnf3GURaU36rJ22XQ2nVrQxAcFBrbogJSSpXWc",
  "key36": "5YUrChVrZSx86fvnh4QTvs7WPrf7D2z8qnj7Ko4ZG9EP97AGkuLMbZxB11jTZQ3PPFMc3YAKZbLqVfdMGvXkenFT",
  "key37": "39zuAMZuLh5ZxA4wRjS7NMZph9brFWiwAVmxfi6iUw32Zun6oAkFGd3VLb1vpKv69C8f7xyjKXmfQD1QDkQMj2bc",
  "key38": "4fYygmRGhsqacvvj4Nc7vC95TVY3JBnkaju7Q1ZZX3x6XmuiQ5CaTfyPP1vPkYj3TTz6ngfQAXcstPoHQc4JH3dS",
  "key39": "4zCAw7HDoEvVmPRu276R8LGtspWeZDkwti9GByjaRPFc46527xhmQximCWB3zWJZSKYfrjyzE1g6FjNd2g5NPQbs",
  "key40": "4DMwWDDHfeQmRMZmBhbB42RDZvWRpfEizSYYssPDFPgJjFHTxavbx7Znh1kW2znnrewMT9J7Uu5zDMiTUy8WKWQU",
  "key41": "4TV83BgubetSJqAWxeXAHHTpfJWDeQVCrq5DobHKow2kky9i9mffrmV5Eu5K5Eo3RHRHimsVDxEFwFRbsdW4tEYR",
  "key42": "61c8ALQmiRZd4JryoJ1PqdMbXpqDkPEJuDyWkw9BvLpCyRXWTrXukRQE2nQU4zkrvKW3EvBgKBJW5ids8iowAkMn"
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
