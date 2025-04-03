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
    "5SFcoETTmFKTcWvJQ58N2466PKYUJGFHdCCtQeLgAEN3kjYv3X5T2eL2nWmY8UXtfKywGSrNxRce1Svy3kAKdAQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XpfmP1iT29gRsbwgupYpyvXfRsQ8VWAm1toigSjc2BkbUdDvxxZ8hkePdCvXUV9pW8unvFbMHfAidjZ8LR4jbci",
  "key1": "5jjHiRiZYgbtBEnK7KXqxaoYRpVz32TCEFkRJ3ApJcciGJQdcnKR6bA9hZXSVDRbw2jw38zQTHRFjbBWJdzdzoMe",
  "key2": "3KE8ewAhCFnWRvy7WXF2yE9MKz3koL1ytbcjvuoWJaHzkdxZSDjaaSKq6PdndQNVQSx5nMEqmd5umoEgs1GhdXUF",
  "key3": "2YmiPuDtCM5eHMx5V2ULwjLUw31H9VgZJkVvHhBvmTgFNdYLoV949yJT6PaRFBFBTjCBKzAfLtDWNmTUHcq54RpB",
  "key4": "614wkfzePgwPaim9rufHoEwB6g2nB4kJX8wLjiJM3QSvSxcK8n9wLC7dUKzjNzBstn9KAWSUr3cvbXncgzvevbvs",
  "key5": "47o9SYaCgpZvmvYHQzxtwSib26udvCbMGAEe4LSNzEi4D4ynoaBcnmhjp2kEpRdFzPCGWhoDkdMTcNS57cAQM6sK",
  "key6": "67U8P7UCFDwzrMqvy2JJqYNWrue5Jp1CeJkRZMJYUo9E6sEazbLnaoiUz2ujdxfTSYYKCpnBNFmsrtBHoBBwKzez",
  "key7": "3Ro8MsEaxrnvjxAeg8NpvNMX4GeT3vxGNGucYoHFkyrxWoU2a2S5e3f4cqmY9mczv7cTaSzLX94rcA93CYRDjEDQ",
  "key8": "xn7bGcroCxX8RfsrFd5CBLXZSKfzpYxfzQA2LzV7s613h2zxQCLeFYfmt3yHxgYY5Wcgx7rn7M1y6jDa3wyjfMg",
  "key9": "3X84yMk6NfEkmd2SUbXhS8Mj6PpUxKr9Mn9U7K7g8iehPTuTjDuk4LPx9LXT2nWDUopLFg63YrWbYHJ21Jaf68Sv",
  "key10": "5o2uDwdedYSEEgy5RYHLhwgNdD1H2niQXXuEUz3GHCU1XQbfV6Ph7747sj4iT6msthTy9KioQCXiuEFdfBXTWdyf",
  "key11": "32tsLYBEfJFGta1DCXUFREPabQW5z3LLUvdo9NP9hvLtgfb96RPHJN57XWastqno9Ka8a6gDUF9FFmsMm8J1f6L5",
  "key12": "31FbxxkdB4ku7UrTkPZ3FWb47Vscr37jk2uGkbxSuCctBFUMJbjwrVY6FPQ9aqcbvXdHouBhdS2RSHNeEisxedED",
  "key13": "5pNWMScPaFthJDap6CKUp9prdCA3522eQ1c43VhoxpvPS92xoXFoxinkYEZUndnpJ4noqmrt1fytiD9uRR9F56yK",
  "key14": "2Ut4fv9yRh1noGwPzg2UtdjJFNJL13znQ5EKpDPjSJYBE7kfjY8q4isGL65ymH1VJMb7otmsYRUSCp9PF7276Uxb",
  "key15": "3B9Z1kRLeH3dU1dCsjs9GV6qTovvqdJD6SGW46MPDU5WfRJgzLgXQPddU3GynKTRmAaytaLrM6jr4qZPhrNpCftN",
  "key16": "5wBZ6fQr83KSHpa4uf5WMYEgnzeqS8Vsc1sYNrXYHWRrTVef7QefRs7wYTtyDzV9YC4f98qbAAGva1LC66VJ1geG",
  "key17": "4b8thzyTYHrMPVGQVn6ityCY2S8CuXftFa8e4GRC4xRtmUHmssExYgkJZRisFaw6giawdMpTUeRc7HykRJj1Ccqp",
  "key18": "XHfe6VPuvQ1ziC9kxko2e1dM9k17y23Ancs2kEnGe5ebKJkuDu7sZRuho7pJZwMmewSFnviccDxKTgvuEschMrs",
  "key19": "YuhvfHd79rY3YHvw76U3ymKSWvdUECi3Hmtd8ejpRNTxVSzTsgtu4hn2XEuDWatdvLUSrCHYYYie2fFwJFDgRmD",
  "key20": "27hUWXeZX5wLWDGy3Qw7M78AG1VzCHN2DocjRJsbU8cuePKP19nqPepFbQmgQJ7DXApe6mSYKSRCPnhk5aX4vYqL",
  "key21": "gRp2TUKDgiZoiCs41n1Fg3pFU8gjme2eB51UhAFqUnCNvWu3GY5bjbVC6Rc3YgjXgpTF3rLuKg5QaHQcDaFeCZY",
  "key22": "25H3QHmUkwaMtCVByRuF1aYfipE1aFoSes2aLC53gtvqPzpdRwnUAUNHJ1TtJwmBsTY5GmV5JqTxYvAQXy7XhXgi",
  "key23": "GcjrkiSU5cGKNqBJLEVUeqVna3Bgk9EZiMdpJLo9Qz4X9KioVEzHXbHXa3qeBdBi1idJ9VDBkbsES5YwCh66Bzx",
  "key24": "TNtAib3ot6Ns931DxjyrrT7SBjT5UDjkPcX8hBccom5cE4P2iRcnSccgRiZjKRQDoMNT8hHBacbx32o7QiE67na",
  "key25": "5VakTRuPEx1RXMLxYtZm2CVQnaShbdq1qv13aUcGH9fDf9M6mrvHQA2gTp8Xzhism2gkPz6vnNxavkGKVmWXSjzY",
  "key26": "2fGdK7VDCyYD1bTZQpUP15U4acbFdQFE5DXn1td1hoD223RprzuRX4aBKZjdzZtUdR6XhfJ27vBr5D4Gabf7Jaq6",
  "key27": "2Hic1RxDmg9vwWdmBW61zYfSNXzn8wgpQs4hFF6hhcrZnShTqfo5ZzwJ8BwHL2bMMpeqM1LJgvuvzQ3wdM4aftg4",
  "key28": "3J62wVN65K8E7ncnsXeYQd7fXRZNcwQzobpDBjcK8RJx6TY3tKYt49C1NRMfLJzk4PLNv2fcQWVn3EiCCjyqs2oJ",
  "key29": "b8bDBFg6rsqz1gLZ6X45aDuNhxZy1MuRWT3ciG5SDLVW2qBMdgiXckZ5sbAYZsfEW4iyeEPrZwAnspfs3QYBDwt",
  "key30": "3vNdhHtvT5WxqypAhpyrujikCs8wHmsy4noPZBcfaoHtH3bfciijdYYhx9NJ3y6XnPp6vdXeQNnP7UdTs7uFVFZh",
  "key31": "5oRCuH2bZT73HEHTYGQbMiBEsKefbDP6j9wPu7fRrTHHMjTNPhGWbfTrZaQzBZSqYYJ2C2mN7wdJLMyDk11gvm7M",
  "key32": "W6AnyKjmRwUHFkLcmgCTt1WzvsqHTAWKYCcybqdoU1VRUavR8bDYTXcaD5rtMdSn6ywJAi81tAo17gQtHpSoyoe",
  "key33": "eeXWaCRkXVLT5ztvuZxvZhBg1KrcmyNLjg1MJwTQ5UdQSPJzeSF5H7evqf7cxnMBw99PA4vvD93W7dqepNumB6i",
  "key34": "38VVr1r5P9XMSXccFuWxsWqw3fA74Z5czumfYJqkG2nb1XS1FsYPP3LvoMJkzJXnhwVwGCLjsWeYtfYmixcGAyHF",
  "key35": "3gptB7ne1nqeUKnUCuqLNdbcNx4ubqQixVD5eKP6PYWQyE2V5Jff6dMyLDq8L2ApgbHGvjzVmP31w6HYzx2DJ6xL",
  "key36": "pikGoYMvhXVNcpVbx6NBbBTprdGw1LC3qhkwGcziFZdAHGocwaejeHa3pG7KihmJojSFhPgyNAqDcDpDZEpyTYG",
  "key37": "JNngFfhtbeKvFyc8DYyjJ3YDZLHVj3piDJManEqtGGqkRDnryiRBPAEuyVXCDCfiv84cotCQNWLmNk75mFSF7fi",
  "key38": "61NrkxSwxFwCZHC8PpihHoPf5djETU7SHyhH1sRK3RjiQqSSdZHEHwHmGSSfMKZHPX6J6wEJCWPEQmmz9guN5AqG",
  "key39": "4tYzkpPAXXmQfPmm6d4GfSfuEvzyX5TjacASeSWB7adFQdPYfPkJan1rRyauiwt2b3KCb3MnqbQPwn9SMhpp5Gj4",
  "key40": "3kJJrdkmbqbkxPXAbKYSu5qRLBiapuHyUiHhg4nLLzQHqTaCMNVq82CqjgKX1ruascgdMkBK4CVggDomRkRbS66k",
  "key41": "5WETxR13sz24PTYZtHD5qP9zZgC4W6HxvPUEkWJioaBFMRtm8MXJdmtZQr3jfeMy9BK5z2gk9siq4oM6xYeNMrC1",
  "key42": "3gx81PZPuWXvMva6vCjJT7vCkUk1642MWNp7HL4JPLEZnhZ2dBJUq4H2AChUGPRznne1FyD2PAK8ueqVeuTadxH5",
  "key43": "P6cvUZgqtvBB1TKzfW1AXBELe5LAZmSyYrEbhG8dedgNHHskwGrqbui5HiNHHACfvS1dY7nRYMe74qNWKSbWrCz",
  "key44": "2c8yUfoTMe4zQejASM7TPA9jFLq8BN8gnQDZcraKiVJreRJY9cXt7LupJbzXfUShA8CSjDDwAGzYVYgcM9HErQt"
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
