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
    "2UFVHUxy6dR2HJ6Vi3PzH696RUUUen46X3G2i7CBRrAN537zSQqQtWQUSCQ2yjbYEbcYxaEjVK8E7iAcTNMASooR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SjqpDsXkcbJfPcwrXyDYuxcEdGbKsKERrh2WAZL5tk8DC4d3YX6ywaiX7DRdVY81kbKkFhJtX1jvdTkQiphS7Va",
  "key1": "4AZNDa14jdoYEo9mkdiYasFfVfpSQXmPu25yWsqmnHtXWTRZVrdenxkG4YA5ZdtjwxVuVsLMd57EzfYwMQqzeTNy",
  "key2": "2v3LrH6jJfptWAdo1ppTs3pYUXxD6LYKrfQJKwCfnwbB8EKyEL7wRc2X2qA1rJeQNtcScZwMkY7C98XybiehEJgA",
  "key3": "36NpcVZZtBgAkZo5pujdSaUVv565fSJwugTNYxNUM5ngVdCpSgTy3DpRr283DjdFAQCsviW8JmhybAHkiMpxRMjA",
  "key4": "5SXDjy6FViKtouWTmsaujGwwhHwufrULvbXunh1bXT9Vq8ZPfdTmnSoDoRNwfHZZtqo4MTSL7YUVCfZu2DN6jq4d",
  "key5": "5RamELY416FZiyBZs8pnJnHXty3tE5YnFbBL4CajfxadoPZkFdjwXtjiir6VZNuMUbdK2JKWKb1rx97ggW4xdmeH",
  "key6": "2vD7sV4Xdi5QMQ1VSbbcYwCTrZHwb6yJXsXcV5chWKVP2EH49v4x73kd1JjA1JBQJfcbpfior8bWeXJC8ruLbPEp",
  "key7": "4585Q6mek1PbFNB6mxZzoYW4zKNTeWw2WtrykDcZmZejoAwAmpKkWns6QkT3EAU6avjCy9TkeVNeVrJhQwhjGk3V",
  "key8": "5SMCYSjc5vnkfeg6215DbhedSxRSoNoSj3obsiyrAGZurrwzJ7w99RykNLsmLgLcfSxbUy3P1fZkMuL9K7GTTe7b",
  "key9": "3cS8bGdDtrui5So1SLqcojiBaV4PMKZ3xS4ZvwLkfeKy2ZULZvxGbbhXsQNNc5V54uguMibovS2NPbLJa3tjk7gR",
  "key10": "4hLnhp8ikwSDeDWVx2VVodFFevTJ4oKrn5hiTYcQn1oJyq24Lo6tP6KTDDvHrg1SbLHK3JfaSicqs6nvZ2njovjc",
  "key11": "2ibHjHrsCCPFwpGZcLYXZnBT4Hi3dt4eZEcBJZzPdC4XECTxt5SNn8rwq1UujEj9RucKZ2tUx6i3yrrsrrqkGeWG",
  "key12": "KRV4gKTLYBdBYg4HpR5GcMVvAuSancJcmC5QHwjWmUZWXG7Cj7sKUyjxhdNRx7GeQ7ditaNEdPLSewbmdJPAjB1",
  "key13": "5iFX4jPAhAsALUoWJ8pASaDX8oVC1VAFjwAPqizLhokAgYQVN3kxgZEAWnG1jtFkr9d8BZBMUMyKS5mbgkaAeYGD",
  "key14": "VdCzw9a76tpSHAfatNqrk5hzm6gJJvYG7dSGC3thLHnKgx2Q5gyHZkzjqzgCvi72iQSkkPb1vGWJ5ai3vCEk9X6",
  "key15": "AuDn2N6UbLMSCzPWBejuXHB6gs4yx6RynfZJTPFTMXozpHN3NE3wS6n6ry42RBewb1xea7FgNRaPh5MpjJhcJYK",
  "key16": "4m6BoJGnkCSVvCrzacroTEMQnV8HDaf6LuCQa3ryn4RRHTdR2dSkUMPM5L1pWYx7oi7BBBpRWi5nwey4fu3PJryw",
  "key17": "5UT7iuwyCs8AKtz5mJxoLheuiHE4hY4TC7hxKkWJibAZX2FJbLFMKJckst9yXHi1qbg2H3pQdT535v85o7a4ciND",
  "key18": "4U7GYMYomT1UAnceKXjxFNSKquMbgdvj3a6RXM5Agu4AMey58sZQGusvLpovZSATurcPUHsCzKEEPqshbAopmgm2",
  "key19": "aGAeDEikbeYv5w7ADhqkcrLgLsp5ecb23LhjNzAZT3r8UhFtGFgyVGdv2pxhaRi5iCUBbfU26yjrHbQgtA7jQ5X",
  "key20": "3vdhacX1mSS35tgQEtfqiThdA9dRndiNEBpM4BdXwpcHbZyuD865TesnpLZfVuGGdWoCLP4mn6ASJud92gdBBCYh",
  "key21": "31hSubLwF4rvqfRuNcA5y7q414w2R3ZePpLcr4Kwwh1QuDFk7w2pRzc8UrgfcbEjrSEYjhHbxFNKf2yFWMtYknHd",
  "key22": "NgSrbTdjwHYm6mLTGoQjWXvkVwzdYkRj8msPqkxVd3naLdvhi8ounqhrMQCwH5SYsWkJm3ZL5kvyYDCNZWSDLdE",
  "key23": "65TpZG3cuDkFDLmp8QP8C437fLzAiLxxxoagZjmWwN1jiZd1zwWFNndME4dQPsopGkja7C4GMDcgx8VdpiXcfoyq",
  "key24": "5Cvn4m1MKgrj1RSA42bwTct23q5D2fTqTeFLR4wKk1JRLJ5YUDG7Z8841zqPK7VT9hjdv3C3YbTERg2SHfvJTqkt",
  "key25": "3WUsx2VGXcvUJXoP298EnJjWmyk8So8KYZhfK7ZeyRixGCtpkaDBQdoekisFDMFx1YmAexUAPbVbnwdtfNwLagsK",
  "key26": "62jFhkMJBEiqHMSuKEqwqPFhqo5cr5S7YjjMnU2ujGchStVMGjbPTPKfsGnoeXya7FTPFegVwK3KwBrYcnjqV1yD",
  "key27": "49TFnUX39xDz4kLQbWvFyezawKdidGSarEMnorGFhLSxakqfonQuAf1vTiogNYY1DRuce579KULomuCzukjwYnjw",
  "key28": "4FkKRAC4mqaEBEKGo95eNB21bHRvBhXhGPUkVriF6ydQcpUJKhTiK47t2bb2LEdAc5KSCnAhhdBqGTD1QrJnCNTi",
  "key29": "47iXhoCsP8N8k5fcdG64Q7SrDSQYdqsViVR4PW2WprEETcSftzMux84hZTFSt1REW5uMcHCQXTQq8NQEnZuQsV5i",
  "key30": "41sbREKVgdoALnRcJEuSvrrZp3P1f2zWYp9rfaCML7PDS1MM4UtfyVWbFaHUCjCEyetFo7aWKTTxt5uSBdr9fmFN",
  "key31": "3UEAFXLZAR5G3UD7k84Rq8civAvRQGTvp1LmzdC6YBN2xbm4YKWy5nU1mcFeTqYapc8CZSPoB8ouUeEWAjgECSFY",
  "key32": "5hHFbfeZ2B9gu2XU7LmvPNm3oMoG4hKwA8e6xiptXopLCDtWr75HMLLozPoRazLW3rdYcEFfV2PGshQ9zC9tHuMX",
  "key33": "5okXBt8cApYuPsYgyM1yyAk8Yh8zsPVSrRaJQxSL3Qd3E16SA7FjHvDCJqD9qgQH7YxPhP2NsWTnNv2FuMabCpYB",
  "key34": "81fTu49rTrHNpoxgm6sYUfzqUaLJQ4NkNN4YvyeHL4qxw41aGvnRDeTqUDaNhCf8V4wSH5ubTLSJScHeesd7HaD",
  "key35": "4MdKaKSuaFSyNjoLVPxbvzPPSWjz44VM4NmdUvvcyK8vCZx9Nub4QnpzwQA2iow6U592H52R89Xb36Tw75hfY1cw",
  "key36": "3D7UhgjbPbRWL9m9sYpy1koNWSSX5TtMfB5eVpGaaFLF382csogy3fWi1bEBYsFz3AkptR6kj8ZGFdijsg7GEoWL",
  "key37": "4PmcRj9uCnvp7oRYe7LMTP8oc8nLyc3A3kxkJLT4MDx7sjgEtba8RcbE4SoFhrPDffVfNADfXaiaucQocTdVx7TS",
  "key38": "2kfdC9Ea7GARCh2KibDcnjULB1ygthZUwuBbKiyAWwnUDYYTztRTaoW8N9SFRp8GY7AmA5sz29ypDLgwrydkstsB",
  "key39": "267sMhR4PN8nN59TFtQBGPsJk4HzHYkwYjqHwPDzJ9yCSxcpKDbGg9LeEjjKEfqPXjENiQSfoswNP27PJQ8uLBf2",
  "key40": "3mBcfLegnzcTsm2NbZgMa3E7UKP4pvwRwr8FJobUTVruL4mGUHVSAz3txMWEixsibpDsR7DsykM4LJtu4RhBSYCB",
  "key41": "3RTb2xTXrPkvwmj6jNAkeo4oza5uVBq323q1yPKNtvSeAiy5Jwk7CsZyP1qw2o8M5ADN5BMKCDmpNagp61BqUMQu",
  "key42": "4LWri5W15BEKgdnH8dAQeUdLFaajZLJnTe5w9ngq1PPUcvXeDJMy1gUTSzCeuv4x85LaRpasP1PAet8JpznLr5Vm",
  "key43": "2XsbEktajzJG8VqX7pgj72im5otR1vRGFC9iZgksBSd8tfPhErWLb2yCVk61KfHjNM3d6hJTBsVfDECHXrbkMbts",
  "key44": "4eeHxEBbEkXPkURAVepUg1eTgFXQf7xyHLRYh5BUGUsbUkQQPzH96Y2mfZSbfuBMgVSck9YocQjcfLca9n1r68jT",
  "key45": "52aThFKeixsRLEC4rB7mBFpJ77pTZo6Bu1kvzWEJthqNDNmXwo7WVwFcLcXf24zmgdf6AYkr61d1gSM51M22E7Pa",
  "key46": "3M6by2NWSeS8q7JvHopfYJq4jc4p7jNcKw85iVRXuZUBhrSMQiDybLDPXMYvcLf2F2BWmtQpngrBdEcCDZKgGRUd",
  "key47": "3VQTLaxq4u9c9oVfjDXRD3RLiR9dWayE2MejfKmdmNaGx1qeJu5CV7GDEhhXvMrAdwVKaatxG2d9Ucgb5tR1ovZT",
  "key48": "4cEGyDPruVh8phz9s6AtwJuPZ8bMUCxReikE2TgQ3Aybq8Ef2c6WA6wx8oQiMPJXcm8vCSbd49pnwfwiEZeoFfgS",
  "key49": "4nfFakkFw4Heh29gndsZ6d3pocVvakUCseJmTjS7j2sJzKquLQpqyrtTxzucYkz9skpxpLXBRNQ5rT4feecCbMwv"
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
