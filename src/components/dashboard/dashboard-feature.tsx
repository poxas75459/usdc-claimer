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
    "uKX1eEHsHWAmgEWDQYspgNEdX3xUugXdRNV8wcF71b4VmuXd3xCmZquF7Ls6ruQ4su4WM4kx2iF2u8VrTHpu5q7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HcGyVmZHjRZcdYkgnUSLts5Yqb6qYAKykhFr3DzZ73r22GNtThqhzjsmPMQnYajSq63w92Td5GQqfeUoxdUCQAS",
  "key1": "3jRBcbQ1KvwatpcGMw5YVaSnStFJDMNArtYmhNnQYvzZFm7vhvucxcu5LbdsBJ5uwDqAYvdwQBNJ3UGDycUPLCiV",
  "key2": "54oBEJomLeCiXYYbUi2Z581uXf82HyUvL6w1R7Y3SJ75K2nqgrFFszpxNEV6L6d6t8rePvmnFJF7MuCU9zVeVxhb",
  "key3": "4CHVvBm8pf8PXQ8dADTjFFzfuGjd6vRyaHezmh2yc5eQbUZbVmmrEJoMRQonqCjw8YX6Yxn8PK8Rtu7uF1aNqJic",
  "key4": "2miYdLuyfaRmxPBcMMNoJcN1SFFZp16LM2DGgqqR87YK9PRJx6KH5daHfWrBDcTwVk37ppcq6UkygX52ekrGpyKj",
  "key5": "4JoTDtpDiDSsqBxmwSNNHf6ktNiLFFXPjysZ51cWYwKbwFrKRG5B3gVyqUkCn9QoegR2DHFWymFX32wGPaCMZeAL",
  "key6": "5XQ87dHsjNUgKgYjkzBdveU9rRzma63GqwMkPuiLKYtyA4WFjULRYFh1MUppVW6uu7D83n1coNWgfgxCtV2P7ab1",
  "key7": "abvh6nvVpUULQpzscqZzDak8AL3tuVTmGfki6mSiLna9p9an7ppKUrgknhMGbuTF8Ag8ejRB5QJx3paDAicikPB",
  "key8": "3yzQj7X44usGNNPPNUMPQqq7Wb86CxH1fbnTT1rpPybtV21QALk37gMjACXgtz7bNuSzQRPH8yhib7iFsymaC3TY",
  "key9": "3hVpwfLAQBV19aHSQ2Kx4Zb3Fx22zJHqChFGwfmvurv3vEEkeAckdetEZ679XLtgfBfVagcBvVQcmdNPjAMYg5Kf",
  "key10": "4Zrb9XP7TrG7zSDeSbqFnYYaVY87ZxHQb2rRXDWD8WsbsQVbzh9tKngwPoBM1owaYEqKGQ66jDHHQpQBhcpeN4ku",
  "key11": "5H7x2A8sYtLaonXVpHAezoNsXLHePZoiGz5xunrWKrPFLrSHKyfXuSeKrJE3Rqc2Pv7GUGxj29BoqsoyDbzBVSX5",
  "key12": "42ndhfVTxKMAf9W5PbD72ngt2j6Ehutz9mwhWreMYYWNa7qsKUBsS2BJgfYcGUeMBbtzDpKAmgcbFCgEqGEyheTs",
  "key13": "4YwQb9XaSrqja9vWrWLB7tLc4UdQCqxDJx3LqP9z8VdQ6vUfQY6qZc3ukC3DjwmPinQSAfBihnCMHcovnLYzo5VJ",
  "key14": "5x8TUpkts7VZkDbquCrXkcv1GXQUVah8evpyFykMN3eLAn9ZAPyTJBFpmz2pZ6AbCvhnNS6ZWcCbaPt2Qez5e3E7",
  "key15": "3rLZqcgi5GE6NnyhHSxUS5PSpRC25RUsqWsaE2d8E5s6jDis7BiBaczNfNDBGFfRSL4edNrvEQ4jpEGWcBAvH3qj",
  "key16": "9Xg8eEgubxGHcquFBKbRbsFJSRbsATLc2q9wCWX4R2dXX2MokXxNYvPMJHJsxZhgxJ8J6srzEKgJKNBd38vU2H7",
  "key17": "RfCHQyyTesKB9tdZurgfFD6MLMKrvDnBitCuBjGVawQGi27HtJBrSPrKqnHLqJkYsHe9wUKSaNNAzCJzkgibRgp",
  "key18": "324VJcTDCmVUqwqZyCSsAT898WHZLgmAAcRPNjqqR7HW1UwUkQhJS5MmAN16mCNwiAgCThF4CyaYXTpck5amqNNw",
  "key19": "2GTQBY2yhVJtqo7WSVEDeu73YpUDqy2o4M1Za3SyAzM8Yzw7rCUEgM9XGNg4RytCdU7TQ8PxCqiffzPWwoPg2RLP",
  "key20": "56Dqx6nFTkJdGX8Jh3AqPEEaqc1k9YJgBnov6AUndvLXv3TKeDidMuEijK9i1U5uE8tUVp4sg8PePZVqjCspucbQ",
  "key21": "55wx3mviRpuV5Vs49nRBGBvRJVPx537zwoHGXF55cKV2pCnsXdUJQH14def7PiW4NzumYPzViZt9DMq9uDUuAisJ",
  "key22": "2D4CTxF1D7ct1d9NyE1QWs4tepRVCZvxd53SJQb8YL8PCjGc6D5Sk4wDciR4vcMq7zLueiiNT1rRYeUoV8EiHiJk",
  "key23": "5g6SArQZYpEPxKnx7wegXdnkPbscF6N77eK1BMGfGVtgR7ozZZRjSq5uC37Wwu9k5SbmHrv6akPSv7Q1DwTJ2j6J",
  "key24": "4h6E2825BiSQTVyh98bs1ndBvCyZ1YzsDCBeU2kVNf2xyfUKtDfEK8gwe8Woq5ywVzzkU7io8FAfFjzmF539qrfY",
  "key25": "2Qu3phFdS1SwuGin2HhKzFPYphgTEvhfv3pe7GThLGy2x1SB4nvty8tEQmbhTqaNz5sZpMukGoUdE6mfGVj25ke4",
  "key26": "4gDX29bZNpWmA83KBPGWANPcUVJWKgdeSDEkprjHV3jLN41AduE7ihwFFsMYaKxvbZ466dMYSmURRgmwWjcMqWbC",
  "key27": "3frkCKrroPL8thGMkotqMvB1Aa3arJWpFxc35RDxiPymsftN5JQ6uwthAVjpzNExGYxYky7sqzusMNJoyscwYuS5",
  "key28": "3s7mder4SwBqSSR7mwfuaJSq9Yuwc35wGguQjmp4iwUf4Eb8oeyMvafHPCiTgXtQQbmjEZhT4XikD91g29oo87Ug",
  "key29": "48eQhQJN136bH17SyWFp1H5M8ZLNEmru3gZbtGPTYuathZfpebELxM7QRkRiA7rsfwW6Ln5TYaCr65t2czzjCvFN",
  "key30": "2a5qXVFjfz2pGV3g19yn2STmtsPbZwUxBCjwKp9JmWowMQnJCbDBfUBi13WbBWw3P34LEhTePzFchtWhUraGUxi5",
  "key31": "2fPZSb6msGbXNgxS9KPzSX3QHgvdFAo9WkMZ9iDzjGx7ZcUjMZJMo8QKkSNFMbRdodZWCwx28tNn8PeetyVXQUmk",
  "key32": "2NY7zopMmXQ41naM6o8v4qxwwvRTtEqNfvBT5n1hDDrpMggcMb4esSoMvch1ohTbaa47JFvedANXWKJiZioY2ycc",
  "key33": "4T4KCQjS68uJmaW95aU8ykNkAA8eNDCgFrddaqyGQmYC66JLevZc8tXyhTJbnsiDhGedP4ELXKWs5TtveNqip9ab",
  "key34": "q6gGC7yyAccpcyf6wHNh97HVoxHpNQzuGQG7fp9mdVHqhNUK5QwfL94QqiLbeNpPyNWCUFnjwtyT19Eg1mtqziG",
  "key35": "5qRMn8xLxqSb4i2nie2RFQiQzxRt6o3EJSntWv58DyBeFDEprr7HydevJGRvndxZWXujGiA7n8LLL1fpRGjjQQuK",
  "key36": "32rPt9KQQME4aSD9DdUU3LjZpunbJ8eEbhgEjwZZqchKUnFzdnZo4NdFaze8eFAsCyX8KWzC6NZZnMChwfbPSwMP",
  "key37": "5tsKcw25KsktGb6h8mpo46NRcUkBctFrTkSY2Mavrr9SZgG5en9Mtrz7kUFhtzXEiBgVsj4tN6U5mZHUKFLzfEuJ",
  "key38": "2VTcjfe56RQyCmFCY7cgJnJvCstJmE77FTcZyaSnhsWQfEdVEasoi6zfaGnAVjPtJ1Wc2uksVx4Pz2h2kWMNFzwV",
  "key39": "2HTuXZpYang23UuTt3au1J8coPWNAMsoZSsKF5Rv28SN1CXd8XLocvPKpQLyJipoa7cTbRydBJyxdVTH9KUvXpHZ",
  "key40": "bRxWfPRdm8geEqMmbZNNFhjbjY3AEfoZcTAEF5cBEbRSE34XeF8UuJtHtVmSAaf9t2orsFbhqMp5ciHu2QiEKsd",
  "key41": "5KF5k3nhALu73UApweEepZ8uRTVtVetVQNTPvaNx65cUr2ykg4GV8fYMJp55bfgUn9eShkebQswQ5XZ89gmu11RV",
  "key42": "4mYrZrEDDrKMntjx9KNZ4nFjsW3cbbW8WZWVGnZvWCbbwPoxJV5r11pTUmRD34MBdru5BaFBzzofUjhCjWm8Dr4e",
  "key43": "4kZc8MbMCG4JMiPKQ41fUg2jdCpYzxDLuBiMXsXKhu62XBzTsyuXoqd7p6STZ4zzFan5tNRdyzhh1Z2Ksas4UqhW"
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
