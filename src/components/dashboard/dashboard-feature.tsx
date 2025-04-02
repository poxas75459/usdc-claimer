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
    "3PZdqTCwxqXGqxcaG7yEo7WuWC47PbiEe6YQUtjoSp5akNavz7SW579eQPPZ8EfnLeut38ZLhN6m4xobzXYf2vx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41wgVqYmCS6vMeqyWmFnqAohT1DGuH996p1vC1wJyjYzeR1kunuk7LjJYiuaHEjQH9zn2fXG8s2qTGsCzDNxDN2G",
  "key1": "5hshXY4wkkUC4VQyXCYYTpnz1yGUEEpaYqyPe5EASbVH52Q2sp2TjdqhScCziiLDmxu8BcCoRWJXYUjwG1DjGLpJ",
  "key2": "2wuZN3Ydd51iaD4rNgWGzPJwFHThwE6Ns9KcnF2eHTEq2hP48E7R9pDHC1g4MA8rBo5bzB2wPq3ucKh1zgSkBNVB",
  "key3": "5paEFMcRvu5dHQo5ohW2AyTv1VwnuTm48pGxnEfwFLWoRfkghL6upHePqa2oV4jbSjonoyZDkmowJfW78xHjvcZF",
  "key4": "4zjcmS9fw36EminCMsvAjmCw6TcCAuK5bD51ZjqZcdQjaTZqdodercYnMWmqgFtC9xVjoijYfLGYmTdwhRvCc5bw",
  "key5": "4TgPWYLHXcXoA4ukDjLoicotRqopXjzXtDsyDLkUSdetVrqhJDnNk1XCtZcuT6kHXDXVUw1xmWTxE7ALqv3W64HJ",
  "key6": "J5NNjfuZzfNECPRGBEZnRdLm4PeX4HcBT5nqYzvA5uFA4KwN6DX52GjH9WCt8BWComtPMWgaM4NNvBJGu6z9atS",
  "key7": "45BEcRw5FrNTbuBvaoq7aN3BkY6Wzn9jTetyiNBcZNrRriVEbGm4xjKZACisPzF6qXoeQzo5Tq21US2gH5cyRh66",
  "key8": "2EF7aJDyFmUag7UtNrA3SeP6oFPWfh4TxGkSuCu4AC9Ad1XCdhJSCRW475UyJ3dsPcPCmRSHdSBtcLz3CursSfx5",
  "key9": "5nBvkTicuFCwsZzvazzx66HSGyTzCjgagCy5J9UNVoMmyq95irAbcw8dJzUPTXahHp9BwWsYwJQXKxex9zFgc1X6",
  "key10": "4EjWX6RS4pViq61ZDSL5mrEjQZb9aJK34zw9QTGLuPZ9HP6YATBMSVwQsefU9QBaMSqKJta8XFToKGMENugu7XPu",
  "key11": "2eFH1ez9bS2Z2czmcBrqjJgNoZR5N6WxE7C9y1JoRcVut2KjUr55XKdWVxJQ5M6dCnQ8TV1uHXQmWvM7e7QAqH2E",
  "key12": "5jnzmMU4p97cTKdTk3HeQQXjHTCVbUYYCvN18MusYAtWoYiTCfU3XfcHta3RTxATSFdVP3ZYGD5rkgWRaRBsdnzF",
  "key13": "3BeCSLFRadQqsSKBBEkMSqVCsUqohcdjxRLe2AbCAfAatosbDNSw3eK5SdWYn5DW8XX1Bz1QDLTzAasQt81Z9Ph4",
  "key14": "B7m7oEcjFfJwCDXPbiNiTrsLPGYUcCqjFaaAKR5K5WYD6FHJi6sudvfEEigzCfa5bqyzcw5E22td8LHe3URTuH2",
  "key15": "2395WmdXakPKhLTzWYrNoUJkmvNzfXN5QBHsny6vgJJXsBZ441RcSbYaDqnQFJsxsmmbcRgTDXEgJNyfkEi6gzn6",
  "key16": "2ctMQaSHr1F9GLzRtDouNCV7DAEVWPE5TMWaN9pYa9fyNttQjCDTDGejctTZnej81J8uzHmixFRUiFRVn2PBNjoG",
  "key17": "295xzgFt38CK9L364qtzGoW9jLeTuckDerxS3XH8GSnWgni6xga1oukvsk388xWijJKSgMvf3nVQwEVqqN1jXRwJ",
  "key18": "4uqSZJSVJKcszFxZK83QR5VuQASE6ZFY4bwhQZ45YrYuDXJxHJ4BZa19GzZbCQj1FUd1KsVXH4imAQJRcRvaJnW8",
  "key19": "5vTxSyBWn3Ax9AKAnd5PVyu7k1jP5zDkTPdgfRsDXTp74B6vcy9oasCttSATaneHvwYpzPtzp8fXRNT1RxvmBfQ2",
  "key20": "4SRZRV2xvZ8jEcJq36rwyn1qpJoJZ33nFVDVcgZSYT4UriqqtkayZdb3LoBDfJj75riuBNKd1FesXKLbWGKnhv9y",
  "key21": "5CKe5GTkvPszihwT8omuo1kWkhSnwgsdeyoDMhVeCGCtWxsL2kwZLMWRZwceBtsMm8Fg8jGGMuGT1zVcmLnSPdBE",
  "key22": "5njvg1Vtg4hpT3MQPHQ3j8m7LnmNWo8xD5E5wiPRjoZGTKRRXhuwhJwJQBjMKSHp3VQuw65zwzMJNJ3hX4vw66oa",
  "key23": "62pPzfgBP3knHBVBMrFeQib3PR4XKci6rTmDcB84A8JwRpZJja6fCvXJXwhyr2Y7rrGvRStaJAMfqoVoaWFfqw3B",
  "key24": "4XbGxtVi6HbiyB32JsnfxcC2iqLzzJqVaYzxW9Fe93b5y42vZv4kDGc2u4xFLbVn4h815JkPd89unj31GMr8kDxe",
  "key25": "2bJTXLm2eKrVn96FQWVUfTVYb58nozfJ83BtGSwS4nxLH8JmutoqvUCc7HoWRAYDwP3ukxiqRnUF4f1s7mJFnNAZ",
  "key26": "nA5kit4mALGn7BhMpXAukpn9LBggFKxLuc6w3ADt3kRUwGiE1qcpKDodgPJJWiXedLvBGAZ72vFYrt8Eu7P8yah",
  "key27": "2KAbw4Zsp2ExW6ApUQx9wVzbop2mKTEMEYBRoCWx4ZfFTheGBFNR2TnDitg4hzFnEGPEM7ugBwrk3hEHdvLGmZaf",
  "key28": "JCJG6H373djuxuzGEJj8k2uExEEpLLz2KraSSs4aMvwsMeWKNkZYDurTbuw6UfrLBsytdQ9t1haBvCeHfPnfMDP",
  "key29": "YiXV2hPQMfnZbXdhgT2ctqjy1QmnFaZiMrdKNMRnm18ywxijehXMLCAMeoyaR4atumGh4H4q6zRKcxdYvecmJiC",
  "key30": "4N8oY7i35TgSTgmrJzvmMbUbt2pSRgArktBCCV6aM4Jfzy3vATYoNUnvFgRrTfa8HwkHi1zbFCm5VvjAsWfgAFBB",
  "key31": "3YCVvrMehuBtgCzV2HMabRg51cYwkiZ52oaKo3rkQrevS8Fqy5zqYGkWVjqcAUAJZjqwHXoShd8fSVhJtSC6CaZF",
  "key32": "3xky5ePZPJA8KhmJ1o1YrkAZSFPP3buLy5VCgzZcDGGrToaY6qFbB8HoCoo1dEAQ81fnaqBfm6dU76vGaKop8zfd",
  "key33": "4GZKh1hmM4Ep7qLCsJYQ2jJ741A2N8MhEVdaDm8U2zsZBk8V89Pnh77ai55H9FAKkdwHqyWqgg2rQgniXFzb6vsF",
  "key34": "5LrCdKz6jC1DSz9Rt9dS9HyGNKUCr4g4VD7XxQQg6bvoovSbE9i38fvaUKYeyEfEH33nNWyZYhj6UXhQQXUZDDuc"
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
