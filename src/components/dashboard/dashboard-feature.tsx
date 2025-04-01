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
    "4r4LbPSE1VuCgwLGZ92wYhxo1RXQWv8bA1rQFs63ugDQJbnsqtQJB5Pg1QFFNf5dQZdwnvpCBh3JKSfXGW13e5M7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dyG2tTRp6nygZDt4iT2EE6Cp3or5TD6bERBZkN1ShKnEVgRNS1ZobhS8t3m73cezAc3tV4wkPnk13wgCXVjc6YU",
  "key1": "kbHmLfaFZhTeAEsTRMnbN8CQ2TvM6acfJPZ1VvsHyThQgpWQKsML6bhneLuY2STZCcgen3i7cvSWCWEUBiiPBto",
  "key2": "3qfwC5MnaSjtjN8BjtUGSv4iQShJLdu3ghV5DEGwCWvLhoqmDzvc61FEDPkQVeLL76ZFdfeCnsfgGMwswBUmUWZu",
  "key3": "5HH6Hfkd89F1vqY6viU9pqPQKZ1FJF4s7Nc5qotZGadCppcukoSYX94g37c8EnsfeibU2jdQ3VNUFrZJLKQyUnuj",
  "key4": "2YXrRFaijiUn5Ds63G77hJY6tG2673WSuxhspCBrTY9m2d91tYTjaqfZqYE8fpqAPWTAvuzpChYfG4Vv6jTTJYPc",
  "key5": "2cP8DiZzFkWC3xyEvhLeazH1aLP9q5Q6fagdyo9J2czyCSsiPjnBNqZmZNH5ZFuncd97Zi2f8t6zyJtmUzBhrdnA",
  "key6": "4n9ePAqYq6XtiBJyJU4WZ63q6W4njVQA8pM8V3cYocjhVcM25iGGCBhHR8reGJUgq35kznUNP7GondskoYgujGAx",
  "key7": "2Tre2TgZG4Pcfw5bDFWbfkYipcVvJHfx1gBqkcdJv8KiLocsf1ttjwMqshF76Z9HErbs6hdATEsosq2yyXDF2JiS",
  "key8": "2qWvkkGSkbMKFo11oD3s2kdKrMbH8R8yhkaL3Q3dQXA6QiioYTPxqSDPbqSbvjYhkpzZYi68nZ3dy6Tpu5wsDUKG",
  "key9": "Qr77oAAujh78v1F8c4LXxUvpgZxfbq8qikb5k47bhDfoUKWDCBrMsJN2yCPx2QfZge5oa6sUfHzxqQaEmpQTNa3",
  "key10": "4XoCFFLM96eZGGGmJMmyLhDFBTsEXyJKPhUYokidR2iDTdXGPdjV7zUNRzFmT4yicLxDTcndaRG7WwmeiNDbzGAH",
  "key11": "2wq5V2V8Vtd3f59nG18XrxMTFR6Q5EnsNcfWCkjCqontiKBCY1zmCrQ2A5bzbp93YgT7QLJRisgrFmXY5afeJuyY",
  "key12": "3eabNn8wApPwWvvSsy8GDp8utUg4fNZp1zoPTetNAVKMZNDPaXDsF2X1NUVgrdRa8r4Co3rftvcNKDpo84mUBZhE",
  "key13": "3CpFgdUp6z523yB2yVbrCHKN3ChTZUrxDM9BtWY6Jdj2LuGUYmqtvMh1cnrQPkWoJ9zEmRREawamiFQTAobtrjyv",
  "key14": "24hYQrewPDtwZK546R4PKDuok4kbmcjELZKbWD5cpCUa64hJGKhoSG3YYh1qmhXDfs1b8g3ZFMTxDMr9EfLPK9SQ",
  "key15": "5eZJbtmpDt17pgiUPorifysmXW3BsUwvE4CJVgK5MzS9UJpQ1Pki4GuuecaHKR5DLsG2iJ86P6yHy8tfvC5JyrgY",
  "key16": "21f1iBHAgRxtQk1mAmVH5k4fhk4bJSLuSd283VW1g8pF4h3LZmFK9xeiSAnWM4eVFimH6apS81e3zmWg6NdSfXW1",
  "key17": "2z5ygZpUhohHdh8EodUrNeRvzy6kdgMx7dKCaJAhb4LSMKrCftnzXZ84L8zxrsVqrEW7RHBjnp7nYrargLykNhM2",
  "key18": "5MWr4zboCcmn7YNU5krne97RKQpnr1NRvuCtP1dyoMFW7fygCAU1z5FN2RGtedEaa6nTeNZzgHFffi74VJ2NuTba",
  "key19": "2fHJdanGtBLMze4oSY8jjidiBYt6Cn5Kuq9LhRGzJFJhwKxCKLWVfbN5vophTAcRmYE1NZ8LcAx5mZjELrJcWCCR",
  "key20": "tNaTQ754dr1i3nC4wqnvuKPjVQxuFx2WKj9ZdUC5F5PA6B8hQa3KpvmYSrCebUP9V6gRcMQLDT2C8Hrfipip5Po",
  "key21": "5iKxP3TjNd5Kj5chqMmNXzQFsLzq5eFHNspShdaiYMNDssCCP7siLRhziDC8AfaB42G9oN5Pn4weVQnVkTATLnAk",
  "key22": "aDeDeLBcWEGecDk8jEwZWiPJQV1wGvK9Zd67ome2gBqkG1rrgwz3tnSpU3vQmd6mcdJynnXbb2KrrhG9cngYo5z",
  "key23": "doEDzyg9XoWc3V8eL64VdmjyqeuHoNp1FcQSMNT9bMY2aQGqXZeH6TQfD6noWLUdv7Amf3ujWQP8L3Mcdy8mbzT",
  "key24": "39vXscPPnjvpG1TQrZyRamUsrGYfjDLQsSJ3ER9CJVs8VePG786Tswogeencu2thPWWcpLgS6igfo8cNo6KX1Ep",
  "key25": "cLfz3ekhnHSqrNUqKHyg9FiEhqzHyHYSKJ53dieSPgsUxq3ZvbMUp7u4QmnG1pzuikga3nmZaJ7boNbyt1sGvDV",
  "key26": "MQxVLuePLWa488mmCdZi9viEMrXdWHaTTCTSUgbVqEPFb4NawyLbobDsbpv4nwDtJEZCvjJXZMfqx2b8ugtLGiq",
  "key27": "22THGdEomrqvnErt81HHKzCcvG3566DdmWLPnEu9LtN4DV9cLAfujrMYUheiEz3Li5hWUFc1bXSdKM7RKsgZAxfx",
  "key28": "35ubBf622cDXvPHSQur6RS5wbGzoPXmH7hLDfST8TR1Ed4fvjQFTMjTKZpFXTZMXYQxfcV1G4TBZVt1hui4az4vx"
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
