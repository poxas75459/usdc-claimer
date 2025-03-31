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
    "5A2pkWEFdsZWQFBEbkmWQHqMRr6ikzStXnwfXbeD4F3fzTnyPxgodJ77xMQBjodUnGKbETakS81y3uvEK9oePoSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JnyPpTa2TtcKtmANguVLTPuRuE8bton6e9pYb4gHDBSZidWXxEUgGvTQXrgN24JzMTLtKqykpdCymr3FdjEboJ3",
  "key1": "4casd2NNQa9KgSktHKcMAJmPjfUNUdmu6cxvGjsoMCpBkbXrVyySK5ShQhnBoRJgNk3moBeTMWhnNzsYKRwn3tM9",
  "key2": "5r6LhAGJS9KUGPB63wBy745xmvXp5NiEfPAUqWL8g8bmu4WYQiDH9Akofc7o1euJLWENvVWaNA7tqYaxDCamwqcb",
  "key3": "9MKVPzhzf7SdtXiY4GzDf8MspFeKvgo9op4WGBr1Lv96JvKUmcr4UxdWixMJme91ztR1xYUdXCyeNNPQbn5rQ4Y",
  "key4": "eD3uzPrsiCAsJbs5yaZqN2wUo24S2heJvQZWcbu4XfxxP8YcFiEwE3ZnbjPZ6ygAN97hJRBA9NEGVu1FemybTxE",
  "key5": "388mD2sHwfQGR4m22RPubw3EKVCmDUcqLuAnVQmcqwHZ1zUppNxsvtgKwwBVCSZMC9vMXJmYAftGG9jh6p6sguPZ",
  "key6": "4g1u6xYtXmcYp7wyZ2ZXH6rPkuRArat7FivChorcahSpKPCJgPFrzHzuvaVBsNaNzM3R4gyvFx2ouu8FPh9Uub5F",
  "key7": "3PgPG5VbBCx2Kn5PVTk8cu8EWEWfX2BdZpUdr6a4zJKAPYyNMxmJaMqoyKU7u9pNXG68U21ZYQuJW234uCVbeUMN",
  "key8": "2fXadJh8mXdEFn16aqbsNQiXfXurgpVah5sbPweRj9nadipKpyBuLaCZFMtviDkMdX8kq3eRAdP9t3g5xdTCLtpD",
  "key9": "n5yPPqvab6fFuhgkBrvyg3Eg1MMFYZJB8DKszp4JrTzvpT2fHtA1XG9LnJcxs6ymeksZw1R9Q7MYGKo66zZ1vrd",
  "key10": "4Q167MdxZ3igg4u3Me2uUWpgBcPEbuy4Ui9UjiZMgvTomonDCgUiGv8pRvyx6XbEutY3DX8eHCZQYu7crbgoEzd1",
  "key11": "h3fe5FAAxfG6AF9noL5V22ch71q56J8aw2DxWYB9vtq4Qtf1ByAxvm65Rs76URn66c9Q1H1PeE3kgkgEAxsyteW",
  "key12": "4a4qjsz7uRD6MDWqegsbLwRcLVrC77oNKfuNzdtmT9sEuKiipGgWHuVFEpctgWFxvX2mRhxsg7PyTTvVtpMqfiSN",
  "key13": "388c9U6W1Tpairfp1Sx62KA4Tg6LioJC1h8nmkvozV5pyAtX2nVH9Sazup79z7Bkt8MrJBjjMZu8sFVuNLwc99zy",
  "key14": "37o4w7korPMUgqCxwuVbiLwaBKJxqb2aCPxBS5RBFLtFYBmb2JMq1sntMwJ78Dz6bi8PPLv6eFDhefRWDzPNQspC",
  "key15": "tp9vCmuAtbi3vcG39b9T578ucbBGrqUBcbseLY6TxiZ3k1ZdJ5jSpmJMPDZAuSfFvSgq6H4ogKUh2WauypCJJey",
  "key16": "2VeBj3gaKNfTpnnE8uH7YWbzrrp8Myht8JtmijRbEgcu2mGHvQsMvgXaj3E7SmejfsUBXNGrmn6VV4N1UAhZLXpM",
  "key17": "prNeaMcunC58b72Jb1pm9VNLsjyXufz7YxZxXjqv8hKfTfgYnWfhS5oEyPVDf1r5KjmTA7f3qag5DsBRQEiyMi5",
  "key18": "35oEf1W78MAVa6XSifiyZ5xwdf4bfc6fKXAYK8yJZ75xiazJgLNh8rb1JMBnY7H9CdEd6vc4wLgETy4N6McxxjsL",
  "key19": "5TzGQCYMMbvUPdm1bqTCtKqFSuXyKkup95guQPe4LxDvHAAThp7VHVmVcgZcJv2Wtt4QyYWoh6cMm9SqS69zSpaJ",
  "key20": "2tT7uNMHv8qfBd3dPbk9YmHReR7B4PhV7omcpVVybYMRJEXPoN1gNYowYmfM3fzMxHpnXeZ2QC8EP4ERbTtApDk1",
  "key21": "4kinbBpqiam3DoozgSwQnPbmyk2dDXQYeuvdAGrrFvszVexSC4KrKSncHr7MaeNojSbHwTu885PrVkyd556zjEEo",
  "key22": "2aF354c62chjKxfWTwsyBMSMHZ1ujVQG69GeDfsu6VZbr4CzRaQER9mu6TYxpXDi3Bcnmd6148roozBSz97XNESm",
  "key23": "4u3EkHDrP76ZSaiM9PnzLjr8KZAsA8qmwgFyQGHRijG6Ysxb1EM4TAmFezUP4r2d84SmhaYcN2LdNFwhgCuJv175",
  "key24": "4xxS7TkMvC4eLrHQUUtDbTN8yNUzPbxETx7QcyXQqJQ8FasNe6Wq8QnXbVzpaM5FYVZkwe6MKu29SoajSR7zYpg7",
  "key25": "3TPuE6ymRNSJ1WD42vxv3V4y3akzThxTJHYEQm4xsEQhmn1KVZPhiAtSBvpykr3Ba7Z9W3Uu9R27RvDBeZDFKzMi",
  "key26": "4gX9Hpi1QvoTK6r8PqD48E76Sbw1MssiQa52AcPcCzMey6gn7ycoyS3BPnz9BDk4boBoPEjEFA3WpoYh5PN2Fiky",
  "key27": "2vccLyo1f672so2J4vRpnDyiDwmwriBMFhwEUmeaZp26j4DrAnmtAhMnLMc3TXPgaw3MdkYucVZPaUFC1v3KxaZi",
  "key28": "4jZ2EVkHDT5NVUaTBEGDDhk8JD1hpvPNbA5LLQgpmvZZqjddUWPJpoM8njTWRFsLobBGFGauSc7vUwiN4J4x9fkK",
  "key29": "61ZrxuEDPwFUR1uYZFXc48hPBi7J9Ycp4oNA6hqUr3b6TDgq2bGwitjW1PexVnTRR9osbowBpGCKuRWeTce59yxd",
  "key30": "3oqDs61yyMZjzcgddxNmrvoAoGx37CMZwm2A9yeoJXZ98k9QLbWKc6JTB7dovH2wPLngnedRkiJXGT4adRrZvars",
  "key31": "66SX8bRPzFyHSWmuzkV4rC9bymWCSVHCiJ3Ewnmf3wqNZw1iwaYMMsRadGx8zXACNuzFtF41U64FZgJVeT8XGXJJ",
  "key32": "5igKT9rmxURU8pRRxknooXRNwsK7HLW3oNnAh1WvjnHPWp81UwKFLp8ZStKwNbXsZRXhgo2og1NQ28hL6KnyjF4R",
  "key33": "29qQtuNnpp3nqqumz18Pp5qA1Bz1qKDWPNKpPBJPvy2Ux9WZsSS6pBjcgKLnBrrPWuiwyU6zuHrdJCJbyjjbmefw",
  "key34": "jUW25EWX5FGB6Yq9JMrYeTj1TthTz2QeauuXXPPJCGPvChnBUsrqXqHSWe9F4jCuBoUhcsNKcARN1SQxZcj49MS",
  "key35": "qE1XAk8bZZ9YkoKPg5e3UDEy7HXuhfn5p8vhFf4krxJ6JoUJz9J22xuqaTji7xcAmJbj8NStT62jj1kN1GP8tnE",
  "key36": "5fvz8KBzv8Y3un33yhCKyV3JazvFC3XFqd7FiVuNuJb7HFT95txxju7vodqJmsEpPUbSXoS3kQxz3XhDqb8FApMu",
  "key37": "5G5qL45YHJTSpCYbwb9XbdAqzyPinSNCHoWhpfDDeNUvjMk3WmBuSaNDpG7PtdgVcQo1R2udQYksCz2bPvKTaWGi",
  "key38": "3urJxJZUeN5wh5qptSAxRrJv4ygxdFkueQX5NFNbFyhsXQWXb1LCc1m4y9NQxvs6izpoBM9YzARJND8ZZdA2ypUi",
  "key39": "62xD6o4auKbmqCwskGF5X3bM4jcg2UgcwzmyEYiz5H58uZeLDJADWjgK4CrqkvunH2trY4asoCkRUJbLdnp66pW3",
  "key40": "4H1uRioN2xFMXeGiYMXUZ9sjyfkQdD6G88EBnYiUL9YxDCdPcAhMQkcvMGP5QwQEfu4zSPGbESbqHbPw1Bith9th",
  "key41": "2kbEh1fgT7SpibgtKb4E2T1RMMv6mk5bpRuTCz3HPPEd1bWMtBHX9LNDtTaAaBqp4u64GpdhtLDA9Ra78A8AmE2y",
  "key42": "UhirCb8oLLcttLLQouEMXTYo6C1Wyj87ymVkUnxw5P2wbEzVATZ7XeVJYmrQrFMz4xMctCgMW8YGrFXceAB5Dz7",
  "key43": "HNo2XXfAbi2Ke1JniJUee5bgH9Yn5MauPWHZgeTba38QQSqsKBM9qrpttLRtVRbf5FNBPVkjKiavkfDCSQVGoPS",
  "key44": "47R8tuMp538JusMKqQ1Vw6DseUCwyADCgLFsmexAfNzKADuDPghiDDE5C6SRt8S5WJ2T4SsyX1aDr5dAgPY8jSG",
  "key45": "2TRh8YJxUQsKNzXLhBmHGNVLMgQ3kiN6oX1yUTnbCwVahqEZBk8h5cfEcguyiTFFRQdaYF4qkxkQtu3gMrxPkZ4C",
  "key46": "3aumv12nbg8dSKvu9wwHfSX6W4yj5yCsnEPSVbKWEEumkkEHxL2kefwAhaYmXJN84BUjcKQqCpdskaGr7j4JyoC4"
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
