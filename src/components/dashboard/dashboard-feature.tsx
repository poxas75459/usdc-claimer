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
    "4FqbjaFP1RX8HhUFRLgLDjfXkf2YJYaS1PMjs1gELTVZXMs4MGiSd6AsnFYy7Yv3oJropwvu79jJ8MzgybZQQ26W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wBEkRWShyCwW11ZdenszPpA9Nf6waScbAimpgVoZZD29rhmRA3uZhEEJuk5FEk3Mwm1j2NS8Ghe6abbmramrWVr",
  "key1": "61jK67g5PNYYKGx87yZ3kVKanNJ9q1bZhy1U9F3kSB5jVVtfPqpkm3k1oLQEmLhTUsXj7uDgiqn71rRNya9XWuL1",
  "key2": "38n4yQcBQkx4cT5ZGFK2YKA9yNG6ZmKThR3nqD4863GizN8UNptwaBcX855qdKsN33T5gMQAdrRiD1ihxyvQcCQv",
  "key3": "9u6ELxfD8NFg8H5sBsoQJcSp2jEfynD5AhBjCx3FF9YscZsJ6i8XdBybVYAsvi5jGNq5HCNAagXmNQYKRE6G2XC",
  "key4": "4uDhHqXU2yNHhmLEYej9RYvWaTeTRiyQDMow1g5ZpYo2SGZuNhv5EGbjr4htGYA3x7N4mcCgVnFXH9ECaNvZvhme",
  "key5": "4u96DbhR7Nw3NaADEZpoKP17iSxXc7J2ETvE5xLvWPgeviHHTs7BTaVUqvtHHbKUrZgDyrESnEr8qPZ8iMPkopW6",
  "key6": "3xox6uvb6vV9t4tPE92KBrrwkoSWmg2Q5VZ8dpcJDx67n3UYjFyUb7eCRmhpykgmjpW2Z7RCoLWJcPBK4QNUqLCC",
  "key7": "4xok1GtmPGgekyfKqQ1AFNUUpTa5rUgnwonaCTVzbWvWKaPbneHvfrWAKksuiosGAQfLFnJdwavLDi7fdfFyE4hv",
  "key8": "3zivtFQfdKYG3GM5idHBqvFuLcovRWx8Pvjxdkfz64vhDzZHFwv2BqGhXdjathWDesW9yp7k3EvhFe6c4dTft5hs",
  "key9": "25pYjbi6orxubMehryszAsnJYZBD5SPyRxrtQj9Shi4SjKm2Q8n6pkAQnT857zqsuwcbq8ZGYdHSoSfYNMapBZeL",
  "key10": "4ojBABk3dpNWSDR1rjXPqf9raEjAoMt2VJnsDy2XDSooTRTsgFj53MMsYDXEzP8fBsmKzdxJA7YccAef28Gt5wz6",
  "key11": "2PooFWMPhqWhMFgSFLawMpBFdKKqeriqKRgaxrXMb5GxfbzGwXJfj8TPJWUjfyi7travf4GoZKyyeRzsV9DkcQmF",
  "key12": "4XieYCdUUKozDa767ADseKHxKqQsN3rpgHZhKopzgGxDQeXcsq6T6kHmDgSC38NZ5k4d1WEpSLCm37nBLmTQHkzY",
  "key13": "4T2jLoBCqpwRzGimvAb4H6VeXHbD3FGPKcuNqwpAMa5H2tfHfUCqRhG1cCwMR9ZnwVUY7cHWbR8gAdYdY2L7T9yi",
  "key14": "kumhogWBSFLnxWwukDVm2M1e2feXXLDgeTVWJwo1xkQNFwTEv1Am44ZsJM8dJfPNcWidMJQaX5rcnZ2HZEEHJSd",
  "key15": "3GmA7XViXZBinmqkxvKyKnZ9QnEj72VP3Pki5rH62Pr1sLQ9HtcoZjWcWErvBSuZmS4Qzs4YnxjG89yVnwZGRZs8",
  "key16": "4ZbjwYKEzDzcaQPuvD7P9t2oFAeNMKG8PP5VUvXuhUtvitR2p4tDSmNFkZrC62T9VyCWoEHXCJZWiP8AFy1BqR7g",
  "key17": "64KDH5i5Bj9QRZcsdKTW7Rb2d6xk7dnMfPnjiHjgEKnHqeVrBv85CB4AaLXheR1ieJrMSsyVbGuf2be5x48i15e2",
  "key18": "zMtW4aVJJTGD8brNAu16CC3KqTUbczqq6wVakkjvuDCYVdS9hGADMFtu23CtRoGhsaeyAE2qmq9kJkBGLbjHGiM",
  "key19": "4mDv49fqraXZ4mV2zxqFADnfUkMGmmUJkW8yswUiJRd5k2eNugVbA4kSumQAgDWR1fqJRMqg6K6LCBpzTA5BQVdc",
  "key20": "2oQhTZZi8MuSvEccMQVnb2XtN1CrXtR3Sb6fQHiDvAL7CxzKVCdoiiL7zCEe8VfegEv8TFmtnSqzKdYQpUPGNjh5",
  "key21": "btmQt1YkW8VR2BZ22dpxT6RGJU1angeopcTuFEdN4BTEDpPbcZSfgpWY14CHD9D1fuuym7u393cpSUuM1tZb2sP",
  "key22": "ANGEFFbBuVStGgE2rHkYgkkFSSuZMP2Sw7k4F98X9nqVX9kkcnbye1qSVHZWs7hcbwnDV7H6The4VbQf3dZovcV",
  "key23": "49VesGfaoCRbTjEq2gvjb141pSg6XZZPakFPsjVMz99VGVJwTEABe4vSrNmSjZKESsW1HkKWG7EFzrLBFxbKkKX8",
  "key24": "5ZS1E1TKCZYaQU72eH5VNP5zGuyjFzDJWhro7y44ySY4LoziaQyBRNPTpn4mez7cxVHRJfUc6gLRbGnh1Ni5VYoc",
  "key25": "2WZCHpAEGBGZ4dn9wqNZMUd7c26CxAFh7MS5hn6P9jLwxefkgTBAguJortdXqFX3Mzi9PgofecZyjZ1chrRDvVGt",
  "key26": "heCqya1mQQGdBjJ4fRT87d2W8gtWYJt9rwacnP4ztEFGwx6uzathSqbax9Qdof4bx3mL84PgHzAgjdcfqLZWT1F",
  "key27": "3oARXC5tTy8bYt4MsTUd8wPN9BDiPzE7egkpHXFCXzmqJicH2q9yELCbTvpySVtTsyw11MQoSGnNrQmYCn36hVDX",
  "key28": "e4oKEEaUZiwxTd4SapRrDh5wuh1vkyiArVjzzUSAeFJkwk8g5ysWRpfpJC8Y53xf14KekzTuhtqAMxV8oiyTCdH",
  "key29": "3Mbihf7BGHRDdGTdPixAaRVU9Edvgt3LcUBVaegGm97YLJrEYStieM8up7CX9RzU2ohZQ64vy9CcBz1QN3Ht2A8s",
  "key30": "36jNr3EEdTRpRNHKsz4V7B6b2ryCvXWArDBHS44v87qjBSLtgieXTZfru1kDZHfScGPsbMmFMQjrLkmyt6q4Mrhu",
  "key31": "4ofX3tnkVzsyJfCL8JfreJLRvz8XTKqJP3qiqahZjdnvcqRoLeh4NkesrKeq1ZhYzYHrdpVFEe24fxLAVsqMRix9",
  "key32": "4VBVg9yXbVruZPTzyX9CJFQrKne9zcSfV5s8q1kGb6PgYMcBnAuXaiuiAprERnE2aCMyUBc95ontyMNcEB7iMMsR",
  "key33": "5YA8NgFFHLjWNoQyKfLw5nJmDASXwh8ehX2CK3LzTRzeBpd4SRkPyJ1TnktgmWLaWTepcddHrcrbts78VvXgtkQ"
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
