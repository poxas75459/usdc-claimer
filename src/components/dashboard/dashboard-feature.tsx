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
    "5kwqpVqzMHDFnoao1TSs3Cut84AoqhL8XUdjfq9MsN8fPyREAbuvnJDUXEZpDngtQh19LWeYjL9pNhKq4j6MQcgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "551pev959DKwcKEw4yDBqPF5HMHHi2vq7Jmm4kqmmca2qTDNwc7m2gbtDhQPNbZsaVem2WKcuoCy9gXwGj9AT9jj",
  "key1": "4ZWEBRRLLRfUodn2ST18o6TNniMysmiyGVKVqaos99kuoAUGMgJvy9XSLdVShmgr8JDkCBunM4EkvrufRyTBEEk6",
  "key2": "bhd2EfQbQE1brwn7wEh1jaGBPxXWr7nc4WoEgCF2kcX95LkvBtKDFomPEmpP1PYe6nvXmhbzcc4oYpRkfLeMLBS",
  "key3": "5v7YcVj3YQiQ631tPLygEr77UuALrzHrp6DCNEVS3s1WH7zV1N8VhGBTJa7gFRCtkEmuQq3DWuKXMUmYfavT8eEE",
  "key4": "RSMkGbjpVdpZyBPps2hux5ZadZsWdZEMVgdr3Da4K5FaKK4vZwTduBXKbTqGeHJvvFYpXe3cMi5NQCRdDUagntd",
  "key5": "2bkVfK3yBAUpB2vDKj9Dt1QhqZeApY2FJUwPVCYfFpzsjYYbtcerfecXDPBZB9yFbespHDzQaWqfZEi5W8WNnS7m",
  "key6": "3xwkhqRd77E7QiLpEh28tFVVq6m9pdJxkJb4RsesmwTPTvuvDtH8aVcKtFht4Kqk3mxwhCbUWcNV5tz5unAio3kW",
  "key7": "39SKUkai9YrRSXkEgHW5fecSRzo7ZvvPpjxRuGg92fegUHLA6ikytiFgtb7isJR7cwfJyTavRf2tLV6N5Kavgv7L",
  "key8": "2ufVtyMXzxjor86199y5zF2VW6TmB6cGaY3C2NgDXpTVn7muUk1HNKqtqzSNSiGC2pBd6jz7R3fcFsdpeHygCqZf",
  "key9": "3RHtWm6gAtMHsjMstkLQEi5PkN3vxLf54DneGAmGAz7BmJ4Eu1ZiJCxESM6XYw8xHEqKZEW7Xpmyx27EJdX9rcgS",
  "key10": "4FgmW8yNM8mD6yjnjDbBBXcxAkksFsD8aTZgpLUQLFURVCkWEyMkzWcfgdRTvcfujH3MoBJPMWS3QwmfbvECMg3H",
  "key11": "3yD49QgBTh8tRgxQ5nPSAg4d5xfLZS7kJNPkzZhosy5MHzwVqeJZLBhkUESHgBHHYb6PRbfGkQaFveWQBv5pPpXQ",
  "key12": "5dJLZSJLtkQ84SV9Zm3x6FcruuMRvxF4WaStj7BQCzXbFmffHuqf1D6Ed8FyB4Mi3XkLLJtpaarR1tycKnwy9pvt",
  "key13": "5npDzSDPNNpsy1SPh9zXtxC4edtt6GHUSbPCKpiMyXSCnYGzDs31PZBKd1yyiT2xzr7CYKipk7N8FAsHAY8qVvqY",
  "key14": "8oAYfZCLQi3fnhbK62DSxFiH8U7Y1PEQ38ZANga5CMx4qwDSCEWVi9qES5Ji1jQQndhxddGrMUyumjgMb9zyyLW",
  "key15": "5b7eUHy8qTwLgCbyx8JqFgnuR4HEcQPrSgBf3uDrmjysYCeKiSEhs3ENsVrbHqc2QAR1Thnr27h7iekc9JZr6N4Q",
  "key16": "qtm9b5J4xU6Re5zVzMJTgjTpsLjatfg4f3uvF5TNG1ipcggWoq2KX1xJbWSjnH5JxXt15tjYL1zrAJgZabVra6c",
  "key17": "26ZnRWpkRVXZdk429cBY7v6FYwesfxxzj48biBTNjx2YBT6AxuidqWUGyjozQDw1zFertNNFGYjCazJbvVh8wef8",
  "key18": "4yjYRW2Nnjwsd38NXRfAWBfXBDZKDve2B1H4BCuRw1uMAAJTZmJ6DcZ7MdjHrfSfkodfiCFPq4R1jFQLiBCd31o4",
  "key19": "26Yz96p7vzxC5NmuBrPWnekFhDdAt7YE9kE86GuvRjeFSsiyVd8epDAvGnwW2X39MtGjxDtkLxaVjsp1KbaPM7Mv",
  "key20": "5nm2cR64pg6BTGYVGfeJCcdLKysckRrTrTpdsnJ6aMcPVQB23d3JnJisE9CCVRK9v52pRfPME8kZftfCGEoiSagC",
  "key21": "3rTcWiZers9mH5D2rfVzZFrdBvWb9zuV1NwdJv3WYVw99Lf6ZPiBx4DYAzkXMRDxQkfxvEnB5g1nbhpYdZEwUm57",
  "key22": "3V4aoufCP4gLjVnwWyrqAL2p9vRxgccmy8LU63RazHqgnakrQiNTa5uHXD5YzC9DEAAVyzhXMbY6XGYznCCsyG6k",
  "key23": "ask2Xiu8rE4ZvXFPGd6PH6EGaaazMzFcUgsiEFQ1HpLxQDJHu4X2wJqFiVBsbRWSAXFMp8wEV3U66xsrWTWiVzy",
  "key24": "48pBc4Nifov6fdPfdHsr5yMvcgy8C16DD7zw8cLy3W489ujjn5dk6YzUD65QYHgTUuMVn5Ge34VGciPp3zNaBQfF",
  "key25": "75ENxzivjCotr8j1m5ERpYeYjdb1MpEWajULh4Wvs3EDiFNjHSQgQS2pxnxWNNDhcWmySVb1oytm4kpsSx1fhCP",
  "key26": "2bfU6x2SLLu33hn29Rzi2gb3ms5AGjEQJ5bQBcPaHdNgYqMRRpBowruJfhJWXaFW8JYCTqE7Ub6UMZwokRZKaGHW",
  "key27": "62zExmAWT1Ry7PT9aENNvMeMKucNEbLXAuUS2NuPV6GG5jtYvnSbReq3m186JZvUT3AZz316Xtk4XYYXFZ81cskC",
  "key28": "3jTa14hmASiP4Pyk2F42aAKpT2phGnbNRfzvFUyLkQc1L3b3e1MxBR6Y3W2L9bdc3ydsLtEAG8gorpex4a6Wq2wg",
  "key29": "byJ73HHcokZaDoz4y2UT5XrgYd92j8usG7Hgwant7AyARMmArFj4m1Tfa4jmueZUw3Bvzbn8TeP7VECk9BjZcbQ",
  "key30": "55AnT5V2vPHVSEa1L6zboVBEV9zpvAp3Th1sG3b68yV6A9wRFA2jrViHa9gFmbTVXsWaYRPG2m6g3GDzRwXiRXbb",
  "key31": "GLgQz8dqkxCJDtBUCMdAwbbGnVZwjzrY75Pky26aLnebCekBDAx94bxky41evZtA1aSiyiT96H2h6nZVYKPtSUk",
  "key32": "3shJ82d4N3U1XzBuLjUL7bGvwFHEL9eZ768rf1tdpoSPvEoYmKURjyPxELefWf8mUJZcPUmGUtKqNN1qEDUYygDi",
  "key33": "5ARvrYwoUD9etujKpHwbhLuzB245v6K6xMy8QuvJwYZiHPCt96A8wELGz9SBoWA8Nmuu3cahkoD7YjXZfb2BC2Nw",
  "key34": "5GpB86bXNHTG1RWAxw27xuwhHoX3RNPCetVKShmKqc2fE9zxpS3EPfuCKS4pxLqEVHVYUUKbHJbgY58X2NhWKW11",
  "key35": "4KJrYhd3q4cWB18TLbjMMvgZYn5F2d3r52gjUygn2fhN4oxFdCGWn4Wu4qNszM8mPQTWvvXJk7Hp8vCm5tHXWUKu",
  "key36": "27VJ2pfR3Y9s52t1x5H4rVAAbRAjyVXxLxVFBhN1NtgMfckgAmw9gXUq8PVpYBX4g6ZcVDLJex8nUgp3q2AZ4kuK",
  "key37": "4yz65UTL3wViLB3KMn6QNwDFKY3LyecKneNtRRRutGHyGLaeLk78C9KKtsVGeSKkzCigjevAP3gUWV222PzHFRqh"
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
