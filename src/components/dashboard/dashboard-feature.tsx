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
    "Tyf9DnWWAkCXD7P8QkcJ988Bq7AGu61J1Gedcz5YKDPAsCLab9roSB1nHUPx5wkiNzrPifkwBWkh2Jf5jxszz79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vAjwkVjP4BQA9AEEGo7jKWYt75WGNpvsPUGxYthXXoHG37wfBdEdZMEmRwqWtpn9F39GBXahrK7fYqUdBHP1mKW",
  "key1": "5YFcwrSsFn4n2dCkSh4LJGVK6TjRRkQm4VBWVMTS45ikFssN2GB6tFQs5MxZFkzUado6bwEH5jRfZFjF9KhLMr6W",
  "key2": "2aserCnRaLccrLz5oBc2bwDs97eqtJVfHFwv89qmZu7xt27BD54VJL5WCwvjA7n2fa85abTCaP1pLUvMGpqpE8Fu",
  "key3": "2siVHNJst1aqXMPVapm8rLVm4rogsLggDQLvv7gQT4677YnmUmFBqPHvJ3msWhNxLDBEkRyn3Qgdci6QCgzMj882",
  "key4": "nuG7UKGhRHDTyWun8chXgBdJRwqfp7v6mT1KsQF3Dp4ZwFixchaDBe8MGSyKdHzEEMrQqvR6MHo3sCDfmjS8KrD",
  "key5": "xp6nNwEJYGg7ZLMtRkPWdLL7tyMvVmWL7CKach3MmbsJFeXUaU4vhDRgJ5imnUnVGMrR3viqeSVo3AKSgVtLRTY",
  "key6": "4dtbo5xVh3q1LNpezeBUZv9Ux8kqCascjm3bNozsXCVjNgPJTReCm5RnZ2CDw6JYxpP6cVvdKezNmeXn1yZsnmwE",
  "key7": "3uFEn1esauscK1A1tR1y9qv2A9u1Wsu4p1PrgbnmJopcT1kdVrhTaXsCsuaCLQjUHxMbdjojAFhaTKyK25eyfhRj",
  "key8": "3KU1DLjfLfNdyV94XJGohYw1PxDCftdanL83w6vJh2hE1KDber9Z33zwm1d9PNvKBbpzKsLHh1Q4JXnF6rc5LgH3",
  "key9": "642PX92L1U7iHaPLAKUBcmUCLctvzDiUn5TkPeeTkBrNsnn2LBFgGRUru7NmRpBkEPgzTEFNQU2aA4TcRNf4HJVy",
  "key10": "4twZxy4g9XPVzawAm3xcGdLorxj12K7HcRjAnjgBtn6tmM6R3MkCFjeGy7nBCxvVmDP1piWdui1xRC5tdSDfaRKe",
  "key11": "nmDa4HKKh2jVnjMjLeXSXqbuASULUdPk6R5gRgBv6GzgDtobhuaj5shsskr94RxX1qtE6pj8rNKbAkUsyZC38vK",
  "key12": "36B2ffcqnDPgwQ46RuUzXpjHhC5SaWfZqMa3WZEZca5ZeStBnCbr8cvYL6tU9JwAhamDMiuQifAeBWK7S9D4gy2P",
  "key13": "4nzrHuTtvcdEgvr8hGVeFb6qmrK8QnQEikXVLt2H7rcbe1fdZwXsYuxgHQsvmxqLzrqYLtWuFsG4R24DzQsWwBmM",
  "key14": "3MufCQWMSVYecEWSAC3MPhcqA6WJEaHWevmL9qrmPRiETdgBDqCs58exai3hTVmfrUgGSCri4xLMUQSFo5ydUVvd",
  "key15": "4t5dpddfTueGdrB9Dnp3uemMBicbXp1twokTQyW4ineKz83f6HFhvwhyFJHJLnoz9CKCHsiGGZSuTpgcU28dxZXX",
  "key16": "4aopFB4sCutHWGiRbJVCqfTS3R1E1xkc12HwBXANqojnmdbzMeyi7z64VxJ6mzEoXXnCCs2U4C6TgpZAkVnHXznG",
  "key17": "47rkbVxbQBoNimcLdV1YY1v2EgW5EjeX6ovEGkoQXZNWy7ysVMkqPKNdE31YzVYiPXd3ddBrM5KDr2tcFXEHRPJA",
  "key18": "5Ux1TC1Yeh1CXtqY8kua2JoTC2mxJo1RMkerMrXc1G2EjnCLSRLB1yKfn7qxYka1YcPXUg3SkXNPdmNwC5whJC5V",
  "key19": "4Wy5PnnQBTU1aqizDZ47SNiucXJDKynBDmTQ5P2XpwbZvZUcfxqUF7wJDiMRYyG3UumoY7domnfeZtzLNGoxL52a",
  "key20": "2JEEhd2KxuJrMmhu1rpmAYtZ1iSM2DfjYGtv8xa4igdP62cXwA9vUfLLCXTMH1Abgg2f2Q3vYiifCnQkN8jHFWjs",
  "key21": "2zdc7qK9cLrKY3e8ApTxV5J5ZHESFh1BgR51CNadB2z5iyFPpjhcoUYtaiZvnBBtJDedzYYmwGFiAY4NWdB5MFaU",
  "key22": "2w6XDdd5EXHA6uev78c9KqEGqSUT6MQASQc8qS7Jh2AaYdtPgafCqYdHsDtGRgC2jimGFuQnq9umiYxk4aYBFfbr",
  "key23": "2vnLyJwxJLDxds73KX6FxpqF2mBfi4ZHtnNgTdG1icKCsYkr7XfkPhGCSsCTHcbhQ8aLdivbpKZxJAH6vsKybzEd",
  "key24": "4B6WA5RMPcX3UT2KdZ1w8iVQtXHRxH5321gRepK3WLU8XZ2Qt2WUV5NZkVwN93QBdSDhnVgmfsiSqq25gQuQyb89",
  "key25": "2qEFm1sgn5a5aiAdRAxMax2WWKgdq2k2xbwQ73uuWcV7fYqaHZ2jrbm8TTgEpf4ZoKtNiUi3h9cmvDRw4gKZRKw2",
  "key26": "3DMW8HmACXVNRc4Jv896va3eomMhhEke2rGBSU98Fw4aaeaoE9ye6McWdKxeL7Ta1R58r915Xm1nFUct8PvjX6Qm",
  "key27": "31NWjYsj8AiVtyehm54Y35DFowAV7QYWqadmq38ocbSxorQiN5uk5EkwNmVMmxy7o4zTXM64XgazPQkyMdhDB3gE",
  "key28": "3nrRmnoBsBQYH7WrkKmFcJYXpg7aLDLR5gq3fPCuwmgrs4Zk5F3gmYj8VJzzVVgofGRG6aFYhmUkWMUSyuDpk3WP",
  "key29": "ZCUWqLWvZDUmfsnkryobYxadfkNSwauh12iqY4zG1xteXECAmmXU3SCsLgfBa5isP68hLWwDgxoTYp6LCpfQvtD",
  "key30": "55Gevwg7xBs8gUEPEyY36VaRCKHbhdcFAzGYMy5pvuQWYo4YT4dd5wQRDyKtp3evu7yz4EGKqTFZBh8WSgxpSJNs",
  "key31": "34a9iCrMwbcXkTVWbah71MvSCZ3u3o2PGMTxKSSfKzWEa65AK48ceb7J7G7jZtWqegh5Qs9D6TZ6gbUgo92VV2tr",
  "key32": "5d9vmFxsNDpVoJ6YdcCQ6FaAzVvhDGmeV6jzSD93TqbZ4LnjVjNtQfpPFGYoFRb35ztq4jMXzWn7R85TcBqkw3vg",
  "key33": "2f4zMJvkBTZwht3zz8aQpv8UczSzyKYTz44kii3RXYrpV9Lf8X7SzLmxjt4esSXiyUNHctVqPvDzN6Vii79Z1ij6",
  "key34": "2Ro6bKPVbFd9GBmUWbAauqiuh56uXXqJKZg1pXDjvHxWGVr9wnxnqLin6eTeieLgnUUKTQhnzvKhDpMzez5PnUa7",
  "key35": "2MQSQxezZKiVHJAxXzmpBTaKxDzMfs9sZud5Eczzru6EmoZHVfDpn2GYVHj5ACPq4nj3u1nhEcjQLNxtCuFDDiPa",
  "key36": "3cxgpNEps1DtB6FAbTcuua1vsdDFN2Lv25LH8X3q4nrjsZoqJbgJb2fpX4nzU9EMWYs3MrqVN3RKJWPFXrrh535n",
  "key37": "snUWNXKZ79a5dq5ag8x8UuYM6BnrrtuDUgguiZkSGj36qwsVE582ZcjnzwQD9ETLDyR6iGRLeZoqJJ2QVW3vhC9",
  "key38": "4X5APdTf8B2fVnrEG5q1ZfVKtf8gWFGY6ZbXCNEsRmfFtn2xtTA8ViCoEu4cGA8jFMMnuHjk14fZdoMgqnVmBPdW",
  "key39": "3haPa95PJFCrySSDMcouQsWD86Y5UgZ6Ro893iHCjJbwAV9LziUfPw7DB1CdBCjUwi7D1mYVUhy8tkF4NjuyTsGF",
  "key40": "u4ebbBLDjENhTY4YXzWkiap9ti9NMyswiCW3Qo9gHyraHZAGssogPK8DSr7AsirpwTr6oJ4NiULjGc2cgJZz51Z",
  "key41": "m9sNyu9zBZ4KTJW9TPE6bZPrB2MUBTrzTmgk7a8BmJ1b1QwJ68EXVR3QEpru9fhh6waZvqiDqQAsfPgdwyXuhrd",
  "key42": "53VQGTquCqnPwCZE8FCzn1daPGGg4DJFrbK63EuTdLEWPPguySLmjGmygvE7xfAkbqMWSkTwV52PSkkg2RkU64Bv"
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
