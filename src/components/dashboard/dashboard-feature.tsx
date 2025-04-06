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
    "4aD59wVhntuuvxDpeHaUYg11ZWR2aq5MuMCpnynMcUW1xVP4sWczzdQRUiBcSqtAXWqf1PEk2WPznuoSyR5Gae26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EJumpuprFqDBxwV1QCYbwJM6XctvjYCZNLQ9i9jbrw5mgTwXU9c5Zodnwr4u8pk4Jw13PNRMbjSHSR21oP61YNz",
  "key1": "1qMpFWzKRCdtPsH9Tmde4Vv5U6GE1CYm1YVP2dJfpvyNdiGkTQvpAZD8YgdDKuoKyzECHLvW5idG6stZ5U312D3",
  "key2": "3BtHoGbbPzCye2LKH7Seo31w2jNTWhqopbYHWsNK634QMUXHHBg72fd19BiXy2BYbvJ7YCwfXCTsnBU5ESoKN4sq",
  "key3": "fRKUaxPbMR2gX5wv8iQXAsA6DqhhTZuz527v3p1kg5iBEWteNSRnFcLgK7jpEDT4s685HEUGw2ZuXTsS7dcYkHU",
  "key4": "2AEzisEbUsL1SjQHJoQ1pzNHbWf4yrNap65uHmPqWymDfVnqyPLhM642f6bWVF189ym3B6gjgRLzFKPXHehh7Rr4",
  "key5": "BJJ91wRRConGv2TRsZAeoc8FfLmeEWbvwL5jktNSd67JKKeLp5GJwdsDPP83xKo7GfJihcAg8hqTjMMKkRbLP7x",
  "key6": "kDVPWRAHtzHw2kcpw5unbuF1haKfYGjVJiDG6sP7SfbWTbxUQn4Mi6kKeeiwWnNutmzqZdVxitQoGQCbe7WtqBG",
  "key7": "YtN37Z97rfKt5Dpxop9Y8EvGPEBiXAALqusXZaREBXeD7LcEEKsb6PZ77B2R5XMagExHe1zEiF12UBmqh3aG6ap",
  "key8": "5qnzaUzTiQN9rMYdpG9Nng1J5oyKKJsvii74qEshq4Yqox2JYJSBAcdKJrgh7yMw5NZustSYioaZHD7kjLsTaKJz",
  "key9": "67BbMTL6jwSYctJC9wWyidAzSaEyRkP7kdEtTikPABERCZT39aP65tXruthmkD7KU8Ntqi9ZzTD3WWdE477JYZDa",
  "key10": "MFUkQ7A4YTSWmxYX5y94AJizF54TFCEBqvpn8t84LvEmoMPriNnB4U6KWeg3CQHPDtV4bVb1YALNPAsXH4JMewj",
  "key11": "5gq6RwB8gg9te6Rn5v9fNVzixikdw7KE3sLFJV7ULNAGKXSUbgPsEHWkNzT2ziU2CGU8A9ePTCaaBRKUb15SKRrE",
  "key12": "3CwzbLAAQFSmq83v5oQqW8QT89ymeeXU8jb1eRFExGkQNHWFFg8uEGP6aJLNPUeffhki3drWRgpodBWuGXJKxNJt",
  "key13": "hgLukv5vfP8uRduhEw2TdDgQyvaX6UkK39W6DVcxvt8ZmRz5zamvYs5crA4Xgsg2A9a5VwhbuYJSv9iM2A8sKtb",
  "key14": "e4y9FDDRsiTBwhr26Ktrvw8brUqvtLHqLrCeJnEoDnSDBPwjd9izuYV336ukoKqrYdfkaqdH3YdULHLc6WLKzob",
  "key15": "3ykvE6t7N95qdPvhi8vTwEedp2nkq8QGRLbtTjgogzpyXeRtFtuLNrZudfvhkGFDHaGXu958dYM2k7at2Yt2gZt1",
  "key16": "4nF887oxf28wLHPrK8aD9R6FmrsNYePzt5uqJH5rKWJpeN3nf9ehXz1fCU3N5xBMKnsGE3T37yEf2JHdEKNqb91H",
  "key17": "TytcWWFwkuNiFcorYyedq1SQVABNFz6ZYykvJ3j9eS3q8UHoJE3sPPFKXLyh1vnUA66heMXR9w7PsjS4d4pzKtd",
  "key18": "2YEXQLEWvyJE6Cb6JHN7gFAc2FRXdYWDg8ojfG3secBioBTiChRA3zhFQTvviWcHVz8cZqPFYqjEqv5tJietSvCc",
  "key19": "4yGHgfNQa5QdcyxFetK4NRRqzuSc7tC1Qc9sqv8w4fmJ5PP67SMFwEp2yFpiqnsggHD2p8JUDyAWfKuD7HjUzs5g",
  "key20": "RYb3CiQcUW7Uy3eDKzKvtKBzrewZ4oZAyAempNxSrPo6uo9dSoWtkc8syajRYP23c6NyBTJ4XuXeUv3Bbydj7LY",
  "key21": "3eDNPd6qcKdZEbyQZdvr7Nzv5efdmdnpk3VNYhJueSh4B8Tx3CgUEUGAPTZgeRPWxA1yQSjy21iBhiFzTzHz2Ecj",
  "key22": "3jjQiTJmUgLbHDDzLpaCkD3CKu9jKezwS96yo74vvSAUr3MPBtHBpGY8Cj26zkZGUxjQ9kQzwA9LiTDdcg88whYL",
  "key23": "3VpQ1kFtfAATAns9nmJ9pECmJkuTfy4E3uCCg1q7R6ygGaE458va2F6frJsccpMjuQ6YiNi3Un37tycfYXRBcXsD",
  "key24": "2qaM7AD8LrhusxRYdWv5MYX6RwTdHCQtfaZ89bMx3YGEged3LNDmHSsw21i1eVHHHy6TWQyaXWiZpaFDjSF2de7L",
  "key25": "2gwCckuakajLkizh2LLDbxDZDXayZkCxwdroQuEDKqehpzHzj5gug6XzvjmT3PNZ9tWAuFZNmA3QzmMSZK9j59v9",
  "key26": "43BKVSB7KRy6bwiqnmMvYqqNvjAPybeHHHMr3bbQSZNXNM15dPcLtVeAyNraEN3sVbRzQJVpdpTAbChNBqx4FdJw",
  "key27": "2g6P136z3NCu5gGKeEnmfKo3FpcxKKTjeNU64D8Z9Ub2BuG1dZBvcWAS1gm1iqbyZZatzAsD2SymNTVm6AUd7XxT",
  "key28": "3QrwWmAHzspyve9GbeUDHQzuQUuLQp74sAjE2LisMCyqq2yJYEY9A8qGQvT2ikw9h9gcWMMjz1TkGYD2gSdjxad1",
  "key29": "5yLKMgxr5XMyGvTxmXdmNAbXqDn4wpiURqtbh1GiQz2RZTNK9JMdahBCUeSf6So2o7fUGswAmDov24CgKsJ5miq",
  "key30": "2BqZXfJbYrciZN92uCnj6VnMCkyX3mNWPxottgJp9frYN2SxK6TgD6HqepDfD5Nm9L5kMemazYSydAdbGGej18c7",
  "key31": "F6shtGwH57aD1AxPP9drdB8PwX4NefU4hmtXAZX6WPzo1idaicxyoUjSPbFkuHxUuddVCa7qC65nycvKGm9wjoM",
  "key32": "3RCEyP2Kh6WVeUrRFgGFazS1nw1rxDgxmwrMq7bG826LYxJd6MuugM2P6GyKmunuuCTWjc62DVBT9ZmPwD3nKAyh",
  "key33": "4nFuQBYrRTuV2fGSraPRrcpkGGVrPJBKVAkHc6s2nuYrJnwbb8AwFHLzC6QgKXnZbSBSp3HKMMzVQbusfikb45h7",
  "key34": "3ejqr1DYjsRfcZ8yXBZP6eedCwfuWT6VUMpgwS3V6isjYaKZK8skGvSrRdTTHRHPKCMKA6hMMYcv9P6r7dHTUNcK",
  "key35": "5QSSzagTdWiJRMVbzdsFeh3nWgesmaM5LraoyQKYe4SEGmaEgC5W91XcXqATb8JqG8j72F5SWBA5fsDXCdmjc6g4",
  "key36": "5D27au8RRx5EyLQDKHggpNiiZfutZ2tzGxCF3M97wYSiaHzUB8KRfGQRNU86mBNNwkeEwkosBjjsrsNTBZua1PS5",
  "key37": "5qao8ihqUswpbof4yeBoqQZVoxyum9f4hJ9KuXasqSuquZvGLLaBXBU4pZL9ajZhtYGSLwpTd7z2GiitLebuppmZ",
  "key38": "5YYozL5uisDBqGBJGT9pHWCtSUi4bQVSN4zqeJtA4TLZxB5G4FodGLhra22R1hApJV8PVtZXKTt6QrwpKkAkUPzH",
  "key39": "S68dXYjHBgocN1sdnSnSyBNQuHXoN3xJw8k9ob3xYCGSMsTmsNZUtipWaKwvWjTEKUDxEXtU1xPB1K3HBk3fw9T",
  "key40": "2cAbNYaZz1S3MVU7b4UXEJmMmMzQo6xBYUWXvxGvMuL3bYbFM1NHEa5her3mgsmGVWJQXTnEEJhbpySuMEiwXUqv",
  "key41": "5hw1nyTvfSh9qbAk3M8ViLh2fmpTq1nnYWENm77cikVuvdjJd6JuhajyNCe7E54jPPAWoxq3amVKCUAxg7MVFaiy",
  "key42": "4viV1V3akBehDEGMDy6M1tCoTmCQd9hgpTegPLerSpCPAKz8boREGcvnL5nfcR4JaWMAJJ1ZBpGQ3VGrKxaVQ1Pm",
  "key43": "5BA251aK3fcvC291hu6LzvqTgonssyXkSSDXzABVG1zTKKv6UYPg6kyijZEdhgFDs221Uoo8jEPN4NXiwNfuzdgJ",
  "key44": "28YhTUtUhqVvy7n32b7PW2q5B761yTsz3GkcGqmeA9npDnRzbGq24kJNZp6Dw4iEaDpSWH82tjtCkvRnnuT8DP5S",
  "key45": "2uWBVM9hsRzzjkD54kaHoMYsXVLqRsaEuDPfo1Z7aHUdB4kRLAX1yxZgg9R5i5Vgm1KTpoqzJ8aCU6XXar7xcSgt",
  "key46": "e97sV3BibSd8x41fQnJgS8U79aFr3pbYh2nzfhptzAq352rjjQim6gfP6cMMcv2c4QEA5X5xLn98KmJYmdJ2X4W",
  "key47": "4FMo6ebZwq3CtFsVGfYjciJEapsANXdbhJKoGKt51sXvrHCzMpCYRkaMoeEKCMqz9qtxN3WAvu7nLEYgK5aP9oW8",
  "key48": "4HRzgmS2DXhSsFSEwzhmgNeGF6kAeUhjVaULxewWUCfwk7GgEvtoCNKHR87LxCgPQmJ5i4NNqUL4iAV3vCS2cCvy"
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
