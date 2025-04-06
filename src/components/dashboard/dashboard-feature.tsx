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
    "37ULZ3R3zz389j6z3ghYmgqASosC62ZqRFJfE9mqXngmiHx8ueVDVdY6Zq3jAWmALss7ChFSBxfcYy83pbU8hAC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58pzXjKvBdwBFiN5hKTH5LZe6j8RkvQFd5kfntvgyE8TmVZgDisK1TZqdSQ5VTFsvY9czYP1dRxWPNZaq4t4ziuV",
  "key1": "43HXMLpjEk7uCajLGZvmvVyKXU93KLKLyp2rF2XS1NxRpXfvby6KWot1v1ocN67DoQWViyQbgruQun5A5rJBsGtb",
  "key2": "4ntb8njYrgoEgwtfM3RN69wTU1R363gLrAfFmnYNRp6WE33TLa9N5U5NxqLZUEn9YL6qzgEJy1XuusCBh2vaqqTY",
  "key3": "4K84ihoFjgmwMGFNfR4CoBPUiWsCssLsGMArdYz58mEj3bXLctc2eSxhLwZBiRqEZcffTNeF4eburc4XCtHZXAnj",
  "key4": "2swibqroaXomBsWcSFoqdWTrMPvGdsom7oTix315m2aThEwCG7tnkXmR3YZ141hBbZcjkcjM7zSH4ahnEUnHH6m9",
  "key5": "56nhEUWa3BWZvYFRGRUSBfv5d2RAHuPixnPCT7WjujeNgsN9xNAV2J7r8BS5iE2afTytiZ7LeKSkXvSBKfr2G79D",
  "key6": "2saFJyBmkx4ZGn8ruDkEW8brA1beWhSn2NiZTz5aPm5D9DGCzC9XjwGDtFybsFzfKUdDL2RHC9CmxHjYWjMuqyJw",
  "key7": "3aGUBHWudRLoE7t7wtxdnFfmBVN1SdeAb72wKzhYoJLWodwEfyFdzcLukPjDUmWrUhaNLxAs7B9Aioh6a3jV7bht",
  "key8": "5ZWNz2Gbhqp4qaQLjdvybVvVNNbkBEkuo1TKZSDx4m8EUgHw5bkprux2nafsHTD3FH79YtLSBFegcXgAGcLWtPx9",
  "key9": "2c2AUb9kgtek8wkeFLQiKdPpEyHDpCGEt2JHQuLW2EYsNqRXJdwKVM7Axha9xUPf2ZsstJGst5mfXVxsXt4dLtgo",
  "key10": "zXbuiuaUetBZWWu8w8TR7W5Ma7fwWwUkcB6KX8FVE1Th9N3Q62PRWBZZpBSUY9Sgg7PZejEkY5qSpTbmygSoZD9",
  "key11": "5E6HCKhta24MmbAhRJJb8f58wF1txpWrQj3G6JMVpN6UG8RNQJcxw4XygmecP6sXiQzmewvA58ebwM5bhTWjFz8c",
  "key12": "4o8AqYqVJ7XUerLRbPgsWWLTeZ7Ujm9x1VBttua3NfFCxXv4tbPvtsE1G49ZAuehxTVr6pgCPZb9tAXuXKXrs32S",
  "key13": "3bfgxS8LmKqVBCH9VwvbWFebRQPvEU9zyM3BP3wsjQexTjT6T4gueoNg6j86ZkVuaDd4bVvoyst54LNbckkYiJX8",
  "key14": "2ht7g9EoaC6Mg5WFAsQNwwrKnr1LSJc27GtJSWRdpi29jRKtfFQZvYrsxqz3AKoc4s5YsvjF8EvTMz6SKUtTZ4k6",
  "key15": "4wSXGVLcufZzsHeLb4Sw5mJGAYLvS9UBEdG4qy1EzySfFLuiLhTPuYsfP4TzMxFcPuuhLwqDcu3Y6usbRqfDCiNG",
  "key16": "JTukAw7C2D6PTpAB1tzicgDTzAMDKWtiqihBbssLTuGcAE4bvaQXHEy8SfeN6dHg2cenmhdvgAe2KUrqbchdsda",
  "key17": "5JWaqt1LL6y9QMZAejrbJ3K6K5RZZvZqY4WPzCoc63rmCyDUmGjbC2u9adqeGrthokMrF3LeYq2QnQeB3TQAmqnq",
  "key18": "4mmVAuyWGMXEX52Ft4t66zLRgu8ZKkxXfHwqEAiFVpo6SF7jHVQ7Whzkx8N3YZZBwL8qPAb69jDGiYn9ra9Te256",
  "key19": "5vRL43yPtJhTdW8Tdb9KsFG2p931mTgsaQAbo61RVQLMH7rnfB14WdhmoLvzssJcKyogv9gxtonidz9W1dyvhMUs",
  "key20": "upRyv8R5KQirmaaAUFLu57M92j9L4q3cRbqg2CfSbNpngePUWreyqkE6tcm6K7zSeQ4Qg5gsq6y8vVbKN1jqmpo",
  "key21": "2WqJKBgX3hHdiTqSHHK9QLTDRdXYBJqoPp2Ev6m5541LPA9vWzri8rJapqdWpCLxHsCfPiV2SanhTWaAHSA6eURy",
  "key22": "5rSCF6gZ19TZfHYRVfxCyeDiemXPASdkERsVM437yoTVCYhepaocteZLix64F1jifpfb3SsJXWYV7sxfGyuCyhDg",
  "key23": "4u5coopC5F7r7RoVnttPv5fYsvKWS6Snm7PCpQVdV7DYgSLP7VDMFPWjWajGPCWgnrtgNay6oa3qPLbsYJCui73T",
  "key24": "33kVN5W6JU1mpC29A6KPY3nRiWnZ5bxdNxwkLLDBQE643AHNMus44c6LYBuBznbqXnFVfzua9hUepKNZHaEohVbY",
  "key25": "3qWNUaKrSXmhe3jFuAA1x2sGY5EcKWinBXquX2CBuUej71dti1EoFVWgzcHtpGQn8b7nrGoMM1Wk5thiy1tVEFLt",
  "key26": "46Xe6X5FkKt7M7MtaupaFWfAVx6ZWiBFcrTeh9DP5SU6gdEsPL6bkbPCJXxS93tMg4Qvsy5inwTMApu2RWse4aUn",
  "key27": "56bB7JGQVFJQLhqLXaD6oGmgpujK1eg6gn1SVcmkE8gAjxgPBctWcY3Bp8izxjKkd6qS9ByJi6qZDMBhGadfENEL",
  "key28": "n25QPtWqeMXnAFqLFJk6dYfvfAcveZiVZTkSsUMZ23xxcMTQNDsEwF3ok3qhjrNA5UHp4D7WdLwrPPFsQ2CJ48v",
  "key29": "3LuaHGVbGud6pvKbVGhYBgdT98dnNxjzx7JXnX5akeikPjRhAu3M3M46JcXLTnj7S1pFnwA36u8jsPHdcdPC9wpg",
  "key30": "4FeMzZtLU6gTfJkh6z1UPpDHofXnw3bBZx6cMeRuPpw4psGWoG3nfmG8jg5aSGnf8UeLZZu28mZsqtopjQwo1y8V",
  "key31": "2drfqUNggWw6ZH4QarxLgGJjzEP9M3nBNoxjfQ2joT8VHJMDNi6eFhXp2TxBpppKLcz4xAjdn21t2W3sUaAVWxh3",
  "key32": "4DhJXSd4o5PTZZBtNh9VemwDwnA11Z51xenXBuWj1ushtnsum7Vwzj1LpTCM5yQuW2o7nmTMb6X6MAPd6YuM7S45",
  "key33": "35nL6dJncbBaZbDKt3y6iKKRezu8FjoRm3ZzuZtcs66nkYSGJhfdtchroZw1eLPeZRwPEWewGJhrBgVsUTciPR15",
  "key34": "5QanduP5auCkpQrsHsbHL8f9YDcXp66YzvJg1rAqxKr2RavaeEedChHXXV2w5WUbznrW5d1xTmGSPH1mbMQEqkZ4",
  "key35": "3cuLZVkqkUAu7noLyYVR2jtMbEEiVq9HATs5iiS76LYQjoE7VkEG7qANzruHGCvDMM6LaJQk8d5taSueu3hUq7uH",
  "key36": "hoR3y1LPbDw5YSqaJvahoCbBZMztgsViZLfPJJLfDWTZSCXZvfHiX6b5HNiMs4SRc4mKSp2zxV1esTvBeazmB1q",
  "key37": "42Da2Jcw9S5xD57EuayTZcTMfBuTYrJtSc6qkmUFPfk7Vbmk7T7hQCN4rpgTPJVQmjejK5SWBqKRVw2yZM9bnVHo",
  "key38": "EuVxNQ1G9Hh9F66DLbQq4LVwEeK6ZSFvfyvTgzPVB3M6Jve2PxsvE28K59Ap9H7QWDjvVkbcQcWUnV6c7S8eZ5E",
  "key39": "23mx6rAXUpS1TzkguRHtwWCanUQBEueibZTqVgFwycHD6GrfUsV9s6uE4WT9at1BcXUaiu9cUYQHTmDsnggyXh41",
  "key40": "2xUdmY3UtY4FsS35fzVYS9BAmmgPuUmZNBPJb457amxp7YFnnH1UgfXAWNmG5afQVTWrTuKyjqqyduWcFAg1iDok",
  "key41": "45PQMoQfJjZQBoYsD4XNKSz4LNi3kYb1VWKsAekKkSGxem2JhtSVd5p2u2ipbu7AL4wvgbjkZAGnatAo9c9BZaFu",
  "key42": "2V2aFK1UF9w9jQDKRxqtJ8MJ8N4X3T4oKMVpKFW72H3kroaL5rx18S9rwYXmrrm8Um8gwaWYK7YyTNSgjJW5ij2y",
  "key43": "339HxUofwRiHbkU217SphTAEAAh52CtD4mhuyehHUQ8vQC1NEovMfcBj5UYaKp5BtpcMYRNBUrku4Vpjjs9wpyWU",
  "key44": "4cbJDhCufdxeVt3mD3ESKpAHbhcCYxeBeKyHpBmaDroJu3wdbmv3Y1Jm6ZbFJeSobtH31Pzjfca1Ssg8r5mLohjW"
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
