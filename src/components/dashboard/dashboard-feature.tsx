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
    "5r5FGpmRiLyjmG9X4f3nWKqpcZk6nfytQJwJn4xEjAcxwFtm7KmQepWqQpgaoR3B6AN4WqskwBd7jftwiHNPwJTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jqQe7ZGBRTCUE6tEBc2z9mrVmgXK82kR4Xt1TVAgnTtT9zmz2HpevWCtWDWoQnwD3hqKyiGiFiZckJHRFpkGzSR",
  "key1": "453gjdUJ8Y8mocchG5JaHAwNGZs9Vi4ZBfcYBfCBzdpsHXFSYp3E2ej3NR9WTi5V7nArS44BzMx9qZP1k6J2bvAt",
  "key2": "2QgsZtoXY2K15r8rrzb9mYKtAjLDTfyvqSYr2Q64Ba26qr6ViXSVzm7m5DZmq1gmk5FyX1TFfehP1Fogce4SAE9u",
  "key3": "2DdZwEHcuAQ2kjExY7GxfUTaCTAvote5u64M2kFZmi4x1KUbM5AwCdWgSH6GibLxLXX7VNdrHBUEGYMXwCS3sZxu",
  "key4": "3houFAkKZtoQgw3bXvDU3RTeMTiUkjBqCZL6MAKv1E7RL7A7thuCnqy6z8pDntadrKAwtUwR5ZjAc94vCtGd5h2t",
  "key5": "3VNr4pctcgysH95A2GRNipnGaDd72EvZxhux1BuY2TYfbadJSJLp5Tx5vKgjQRCZEf78aGJPZmsYccnZh3m66Fs3",
  "key6": "4QJWy1BBqWa5f3Trp9CbJzjFuXAtJj6wcbfwoUkfrwwRv71pRX1T2QBuTTVWWZAuM8KZD9VUH1TMfffd394gMKye",
  "key7": "5TUod8oxEtadzcFkyhqf63mCJ8Pc9a8MGX12LcmvRAXPgo3dWz8E9n1Nd12nWWRALMTcaarNQUHFn3Re8smHT4ZW",
  "key8": "1kpBJzwgJ8Uw2RX7LKVyTmBZzo6tcm8tcRx77YURmHezBERvhJTD4bimu21Qu4RUDvWZ8zyet43fauX5HRYNr8H",
  "key9": "2HSR2P6uxH8qbGdUifTQYvG2EZcANT1rH88BaY9j6LfubqZDpDF7abT5JTLMZmNsoJcxRK2vKAYkXJCtAsFPEHZQ",
  "key10": "4wcHK1XG5qwLrn9oxovaCuWpJsKPC2fchemTg2LNS37B6usWJhG58v9xijuXN9PzPZ4iGfRRvgQRi1Xor8agyfgA",
  "key11": "3pZJSyoesdkoG9FyfnzuJE14oJropvtNLeTxiBJZVheWPiUeco6e4Vx5TX3ErExiSX2wfVzfdo6AsgMGXiKUMqyB",
  "key12": "4DKHLUibwHfif27B5UGDNncbPWuZU5hinHM7gy4LcPLtEUsmYE68RekXzwgKzhY2R3qQrFW2nA3MqhW9MMzRrLQp",
  "key13": "3QChD6riMWUSnwbQdAQxFDbcgBvH9RRcrC44rtXcjPZS95sht5pJw3pPbR4upKQ4AVahn3mCQFuyZn3eSxScpNfs",
  "key14": "53xKrgAdSRR44rcQ6L4i5aydu1XhenRfyko3GiujwWey8gQxqxgJogVMPo3ksZ9iE3VmWyzrNQA8XMjdLWSg4Pu9",
  "key15": "1sshG4GgmbMPo74tdT76u77jx7TJqmGzszA3HxCXW9xXXKyimmqPbphufu19KHRf195xKoZixuG5xXWzcBfoh5s",
  "key16": "4tT5X266vdbWd94gdpJTs6SW9MrunKVn8Z4636U1w2uEiCcirr7nbZKwCq2npW5WxeCFTzq1eQQ9jqobMqsnnvYG",
  "key17": "GkRo73B6CoEi49SS5Ec5pUsUJcSbCLP12gnqv2qrPaZJF3wCWm8BD3Xy4QkugNfZ7NRw6jjW6H3jCmK6UKijTtw",
  "key18": "KrXhWdxTW8dNDQsw59X1c4fGs6ABQY8aCgn52ZhtJL74dacfGyxfrf4tuixkkmdH8R1NxEw3qfizsiZj8UksrTX",
  "key19": "4othnGSJCFoamM6q5VwxkW6aTRQ3Q6jygKa6Uw8XcZhC3vppma8FGhnPR7KFtn1hU9zJb8gu7rpXYzdhzxXs1Aoq",
  "key20": "4TpEFNdWJFLGWLG5e6Yi6iWq74wRANtbZUAwnjSTHX2nDCJaFZfhc9quBoMeLG7NjmnQAZkc1s45JipFoxJYiHkB",
  "key21": "5as7QoihojX2eLe1bu1w7Fw5ajHnZ3dN8PPdfoY641FwMcDuEuaaAZUCm7tcPSRJdakMs6wRa3wbGb2BNM4NgEs1",
  "key22": "31Jd5HadJCu6YoYpX1P8buE2sQRt7MzLX6HyYm1DKGxCEDf2Yb2rmFsgUNYDX1vEg6fu2TH8hYyN8eUt2wsjkKSu",
  "key23": "5jAdzu6BkD4j18HkGUGq5QSL2cpTqZNDWqhvjJfMCAxoKydiPwPZTzZTf4L2AL9KSvcVFiReuYQqgmhiDmeq1t3i",
  "key24": "284NNKwoka9xztGrq1Ncq62zoV5XJEw9YBN6pwUtEDZBpaqX7B9hZgFWQkn5dTqJsqKqq3yWgkoCFuKMkUTijckp",
  "key25": "3Ja67RcvJ8tELrF3VfxsjWfk7ExQ6rD6djRYZCTxYpCK7QqqQ1aVBmDZ6yz37TJmaZs1dRKwVjdLr5pxC7W5JCPw",
  "key26": "GjkP6KfhuXiB64b8mmY58eE2X1GxbyfV9bGSz2rwYt3boUd7r9vWq6NQwgBmSLJ3hxDZex3wwsxUzo3bVJwHepF",
  "key27": "21uwEPy15jm8o2mqRgTtJuZjTics5r5YZvDPzHqLXWrQQ8ayLBLgWRpoURKtWUNKYBiH7dWhW2LmebVC5tkKpd2D",
  "key28": "2Z4Hy1Xj713fu1fKoNrx8zvdpvhq8KTMpSFW3fP2Gv1wavSLb1kSiBX1yuuTsa6rcGqLDcMnuWeUf43z45BbquCK",
  "key29": "5GeHTTSbnFGdgvs4bpnfFhqz1SnUEMKJ8hx3bhdzvfNomCCeDHUkVV3JXFuD9YunTeqxLsqp8YBNNigo6UfFq99o"
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
