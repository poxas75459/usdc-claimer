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
    "56uZUhVE2RgwquxHzETW99mtA5opyBXTTg2Qdr5iGb9stypVEBMWB11Dri3EULsjZM3rVSS7SbjVkuTAGcGrYTcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NSLUtCZvR6C5G1ts5ANcBZn2hsLwMtjmGP6B4zpzBGSbv95ijTye7jrSCK4ZTqrRxdCGsXXbckdfpManCQApxKL",
  "key1": "3F89rvAgtzCyVovdqax3r9i8dhKGvicC73STQs5KYzK9nkoVMiLfGoruCmQP5PMQLKTFdSNdPNb7ECoTZqRYoKoE",
  "key2": "Nj5sn3g8g1yK8ZrKRwvoLhnEj6uvApwA5euzq9wqC5DYz1Bmni1VqwN6bxHLXNrVxX8d75dxdbZnQza6wuBAkyR",
  "key3": "3TVEWmgfmhZ2WQXQ1Q5WfzoqcGGGL67QsziFxqYTFiNSNVrk7PBBzmppCuLk1r4c7g7LWiM7v9FiXnHWRJ1w9srm",
  "key4": "2bGfhHF2D2gaqRpcMgh8sb83vPVdd9LCECuVnxpMRTCgytoJ1JK3CmUR9fD4z5XZrYQZ4jkKBWkM921VHahw4CoT",
  "key5": "5q1Hr9Rdb8nDkFRj6eHXR3f3xKwQmh71UKP4cqKxb7ji6VrfjheDqS2CrikeiE8u3orNtwKDYnx5gtpjb9PiRGiR",
  "key6": "2bwd54H2FZvaMZMhCiREnUsngwNGv7P49jTd4g9bCyFQkEu26aLZk8c23JKfMyijABvPNQPx6qubwLbhTfj9MeK1",
  "key7": "3EUyYMkJ9Y7x4DG5HN79HQHKpKZjWKcwtGtd8ka864s8Q3bFfiyscDXRr27cAedKdpZvnndDXLdvcnYsMPaK1zgm",
  "key8": "5eqU2sgX14zmiyKJc2inxjFySND3hT6mXosNFhPu9nZWNaWTKPEPVF74CR39ic4MQTPBnFfA5WZh9RUWMJ1DTpGQ",
  "key9": "5T9iHQ82SqTNtWJb9qyHdL4tLmS47uN4qEcDPjUuCfYAqqE4jpgjms7NvXA2PQRf9Qvm6yzTbZcaPQopL8T3XxEu",
  "key10": "MXDWG5vJcc7UH4iKwSdH1aHH68kspaVQGpquC2graRByyBzAu6aacgwxWK9eEWczuYxCX4juiwgpiQ43qi4dAvJ",
  "key11": "49G7hTkBUjb4eqNSNueaAfeTzeibriGmRpeBQs5MU1eXeyoDRkv7ZrRGgzV1g8n6dyVjRjzSJNKX2J5zUu1oPhzE",
  "key12": "4odsdx27Sjr1VEL13tqyTWpm8bdW1DbTzLtiDJKTVquHd8KSqDXRd6bWvWvmmEfSY8XCjQKLMNtuoCELVTxcx6YS",
  "key13": "275mYdi8zTcJSZmWhmVQ4pr2bowRdeUKRLwj1XJbwgN6gcm3uuj5uJGtFJVkxVPwyqiAzCqWgEbGuo24PeTBcxEr",
  "key14": "zStQe25QtNKiStMp4BVV8pMyjLn9yUpKWTvgQ4UxmjUjd1SKHm3HYsuWb647vpGtqKjjzzyARe5mYKENCip76Fm",
  "key15": "4sToHsQ7ovcfzF6DgFQALKrPcqQebTNKp6TeppwoWY4tM2okW6eSLm3rSW2JiE3NSJ9gqrkNZHirJTYt47teshEA",
  "key16": "3Qjh2M7mTV5qbqy5oC2EJD3rWV2SLD58fw5vnyAsfye456wr7EJky7xWc7aArQmeiGBKXK2yCUQdiCf7ruR1UV8t",
  "key17": "h1qb6W6mmsv5vo63trcKze5qn3aWHrz4fVEZ1FZkqQqE7Fq1TmVj9bwaFgy73AEdgGLD2rCbq7Q6vTAjSEnM3de",
  "key18": "3kPWCTmJBqvKKb72H4F1KT6838phoZ89Dc3LmtKZVXGQj8nAC8zjcUCZud9BHLPaycKqvfJdaeYu8xorUSnwViVA",
  "key19": "5kaMEec88GxnqQxUC8obz5QJrv4ZVcASkH8J4Cr4rzpGttimuW1wBWhUF24SLN5ftw9U4W4Qa3jHvA3BjrkH2H6C",
  "key20": "5ZMNNFHuLM5X45xQAush6u874VYEFGKQapnSHHFuXxfG1R9vJYsF6opAc6EFeBAqpLCAmdBqyZCDYLZGjsL4mxQi",
  "key21": "2bxuTMmEHtT7vEqaxseKZturAT721SNTCMYGJmhdHjxdkUA2MJ5xrD6o61iT8w9VVq3oJTMFM68yGvxhkWhFY3eT",
  "key22": "NDMcA3CMh7z1n1SbDNJMTR3wXc8xvESSgS2KToaAFnLJESk6iEaFpsnjighG44jG12zvuDGDaABSwGZPtVKcfXj",
  "key23": "5rq9zzStUpCQmxYoV8eMzf8DUkDAzLnUzRBmEeHk52XFVXXXzbZuZsZMH27K6KEirG6dEojZBqGrdDqfWV241Tr9",
  "key24": "2Fuk8V2Ps6RnYcj1zs2C5JnNTVBiGRxcRKEVANuGn6EGZNdbWoMw7h1ni5uHATE1YzMERoi614BqsaCpH8EnHPtb",
  "key25": "NyKaR7uxG5pFBPkkFtm4tvMFUQp3fxEDWdEciFdJyVLqA1hiTqh8rU4eFVrR612vHsw2eWzogQUmKEqDkQgy9hB",
  "key26": "4MmG6hhuhmZmuUd5Yus9smPdSPnUpnmxueMoHN86HGRDMufeQvUSBsQUioQg73Lxo5xg585hUZhC9sqhGkbNh2nm",
  "key27": "5hkEhZFs92dvfgVgaxfRGJeZyrhRnMFdrVR82tF4KLd1cSRKFkUXzCVRpU6w6NXeFsXLFad3nqbTw4ChCcrcx4wm",
  "key28": "5vNC2Y2wYVrPVp9F88jU9jX3fH3tPZu3SRtgFiR3CRnQuBr3R35bKeJecUFsprCJmzHMpq4Kt6gdKpZp19fsoBCE",
  "key29": "PESfCKNsFVfUdKwxgQ9A5nwRjcLpNS6QrZbdyxxS9D4DwmdV9BjxzEhvL85fXG5pLnEBKW25RnHdEUyVjUzKiQ2",
  "key30": "2LWnfkDVQ2TzmafZkt4cx6KaRqFubH77J7EmUmS8BM5cTS1GJye5i4vodfkutCuu5LwmaKDjeU8jLCfNGTMu4t8Q",
  "key31": "4ThLCy37YDcCSjVaMRuaLH9Enug2QP8jgvkbxrmVuPrH5R5aFuQnbvS37o3jBFrS1PKUC2kYtgKLxpmWPRtCVheg",
  "key32": "33PAnQKnTGUX8KF6sMgTAysvuazXRnqEb4cdmhPY7RdVQxXSe9YWxTABCDyfTRC6MFggKb3zrkoY5acjBjTjBFNf"
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
