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
    "5PyLthXpNhEMdpZSgsb1LexP34cYLGLVt16arUHDwzepc3jpJCKeVFZS2ukqxFZJhnm7DxHzhkvoQVg8BBPM1ZHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qawmgza7JMt6hoTuZ7xsFaVzo1ppD9d26Mq2EoW22hFGP54VYg5Y7xJ2bDjixYQsPjmosiDHBKRjeoWu5HxjFgN",
  "key1": "62ppLUobvXhThohQ6mhbR8X8YY5FehzvPvE3MyD2dwDKZvt6RNXXfSnZfVahnqwZ14cbfPTe1qXKi8LM4J1BVLGa",
  "key2": "23kaqVGefATrx3UZHtsNt5HFeKHD4NndqaSL2EiW4QfbYNLSWkPndvRpSuMu6ZfrCrV9RDjdVqbRD9HDkmfcE6Sx",
  "key3": "3MqEBAZwScM2HWsb6ZetC2tLcLYQQwiuQUj5cZD5DSRv2SYCTYi4S7eqyRdK7VnRW9kosjjiBvmtHeDoXTRosQit",
  "key4": "pCt3PJ75P3qb8MDDwmWjndzZBLr7FiZcYBRcf4GqfdbxGjvQU6DkC1gdr7oAHJzrYM4VoTiUgdEAAXQKQUrrj3m",
  "key5": "5WTtH4w9Pb5eg5y43tpgjGZqeK2w76TDRWz4CV6k6hbLfN5vERggFCKeheHJCaLCSpWjD6G86H3AgUMByzFkbBhZ",
  "key6": "46PpGKYvzrwTdKb7TAA2L5YYuT9qmcER3Rk9Q8FS2UuJ9QK5EKsHoXSCh3zsDoYYkD94GSBqcVP4CXEmAkEiiEdP",
  "key7": "eJJcaXxEb2CH4iBr1Rbyhx3rFLaRhYaFfuZg9GU3ZR99tEusg6npVVj9Pa3kyek5AcPxnQbSWnAyWM56bfFs7a7",
  "key8": "5jmncwTgn1Z7GTxMbU4oL2WjfchzDRwj7FpU8YUbozvWoM6zPEbb5x4ERQ7prby4TEwJBrqhWEvwEdMdsUVBFVeA",
  "key9": "5eHQfTaiPea4c22jFeKSixgpoS9XnYXPD2VUY62vTNZE78YrjWm5gji2h6ACh5zhbvW76DGawyyACHCrE2pGLVsi",
  "key10": "ir7pZwbJJ8HSymm1eoXeacJSH1Qk9ZweDNvHWtDPPVnnTTMjCViERpZ1jaNGj1eHybtn17gFQgdRbrszv2tyzwB",
  "key11": "4hLBXUebpf5pW5qyQCGAcLfAxnVpXJmbG9mVwNwLUxyoiknLioU9c3vodTvbbJc723evKNojbBhjiXQEYxNzAogq",
  "key12": "3bLZzto1xLq6TDeCrocn2JkQEgjySJxApEbStz8Z5xeUNWr9isAWUaztHCaSNwniGgHd6d6futZFmjgJKtznF8oY",
  "key13": "5nETydn9swxoeVeub8ctFQqBNo6cuZrJocg7dv6nWg8wsRQ4mgJ4c67xArwhm49ijJwvimtjcs6mFrDhpYbgmetk",
  "key14": "3GNsmzp9r2bBQC2aTerQ1niM9tBVYeKYiEGUz3H1MdXMrR2jCYzJFckXsWUGsjfz3bCodKMAb1taQcaoYu6b8rZQ",
  "key15": "vQpqa2tXg3sLaLKw3fxbNfik5i2Pjh3PhbLpYxeyGEFieuweC5nSPmCCPWLhRqKSQK5pniAjYo9GRSHm9CkKA1y",
  "key16": "5S7AnZmUZAjzYdhhBQXs9wbR1EodZGZzP2n1WfTKEd97Zbcw5E5wAQ4xE1gkhWNiKWt1FuNJhZ5ChLk7rgJpZArD",
  "key17": "4FTWD9sj2i5u9sucg5QXMuirLcckNkJ9Xtm6g9eWHXmH5M5fDqhW7BogmeU57aRjmNDWpPD23MZHBayNL47yhPDz",
  "key18": "7jAg6xUJr9R42gjYtC5a5w6qdazdbrBQVvrcpRBXmSNEkq6ivKdYbv9SBFpWtpRaRQBZFas4Kd6Zop6BghehVry",
  "key19": "4Wgkdfiop3mTs55PrXnpA8aSmKodyVbvXpwbsMy3VmQyreVqXR5ZqVzfWQMp8dXuCdreqD57xZNBC3JTBDykPCbH",
  "key20": "34tw7f6UuSEeEoiFmeEd6gyJqHZQYRJy29SxXApTmDyDMRnPzzYmki8MCHZzDoodkDsZjvM5VvQpvDEZnWSe6tbf",
  "key21": "5U9Y3ubCdbTmP9c77ZoBs1rkoHdbTxEHLyYk6vQAfxQceR2sSPJt865jCcmdY3kAcoKwwBwBApd8SMDVXJMaRDmB",
  "key22": "3Y2G2fAy7fnuRXWBew2qDpazYmkWrLyyzH6iHuRM2tj33wjQ3ufX9soJEc8qVDMgV1FoSC77KSVFva8fjgKbQToz",
  "key23": "4iyVViQbKVK5t6keEkmdrGxhEbzad8Hrs9CyHguZa6jmVLWXRe3iEXH6UjWGnAUQdkBXXfQdRhdS7mzohVdKDKD9",
  "key24": "3vTShYhkfeFvF68AWmMoMfXyDCpfwJzvR1H2qWsBJTBtnkBagqGYaoKehyPVYAudpCaGHTTvng7eSRkCHpJQKA3p",
  "key25": "21Bn8bn3Me9nbSXCBLNRfChY9BDXWLMjrrpge6nfUFWxfGVcvUDD8SJLXvftLSfYC833MdcumzZNzePofKbHx4pQ",
  "key26": "4Sa35ekLnbE3FSBJVCHQFdfdMMciXUEfqhBb6Pw7dWttLtToj2xCUwZoqpJAxxfhjnzg8kqQMTFC7BU9JHAnv1WV",
  "key27": "4jrTmJxJw9whkZCK4aRwQoaB5Hx2d8xNDSRrSJ3CKPoDFEXWXfJpybv62c2kKtavQtmnXGpLCgJq4JMpHYKXqMuZ",
  "key28": "3wCZYzsaU2LTeZ75Q5tyCFshDZuAUd5RB15WVx9KBsqtqovwJ681JUVyeHByNihj2FDsGSg127PYVn3TmSeRRXTy"
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
