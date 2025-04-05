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
    "Z2QSFHcf96RPXcfJwA8sgsxr9jrvEZD3q9n9zKVjGjTTwP6BeJS5YxA4ciibNeSZxV3UbeDRe18Q7R1vizFWYwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Cjgjsap5Ut2ArbJTgMp51HeMwV2KWZ8Q7cs7NJ4XMNB862XbNZ3WuMP87YVpwPkA72DtBrWK61xcYJrvd6jbLw",
  "key1": "4eNTj5ForQwecvhZni3PyM8hMPzhgN2op3T78G2epMbqRN8CDKCyiWhuzdg7nRjsJfr3BycJsBWGPUQSnk3mxtY6",
  "key2": "5jGdi8BXeXZT5QJNV7F2o8K2Z8ihX8KaVukyVAaPa7hMaVFTCAfGJtyge6v6EX9JL7Pu2Jh6ec2fhbVJiXigy31t",
  "key3": "3tCHv7Z3MAmSfWGM66HwLq7MJk5CAFtXR7GM2JvNecivN9er4VP4in9JJQ5nn86ju2eS3Y8Rc6Cn75TKfKBxEeb8",
  "key4": "52xYuizHFd4gFLMG5hMtqEstnza9MYJkGnZX9nt16C588iWxTKD1ZMcDj4dqSu7MgdGeLNmSeocqZKrbvrymG1sV",
  "key5": "kMZm992co7KFDjFnaCf43KdLJDLCpuFeGGvKsrLyhveEaSUon9M6buB8hHvxD3cERrcgaQxjdckMYJ7cqwvKLcn",
  "key6": "5reuYrk4HZZPtSnpsReNdZ8K5sc4gGkMhagsRirdGZzRik3kcQVz4NydQPD7vBg9kdoSpHSEefJt7BkSL9LVnzvt",
  "key7": "43mU2CEnT5C3VPwirT4T64jn9cuCf43FVDAKZzKFxEPbtsj9gQYz7bdUiPWfqLwaFBhH8o4z24M3ym2FBkt4cijk",
  "key8": "KbcpoGUQ7KNtJWDXiZNS6RdUPP3p4XtgPH2CQkWkthDoVJP9qmRthApGWVQZk11EoD6zaMD5NvkyRiHqbBUdYat",
  "key9": "4AbJkqVuN14oEmVy1nrbBd9zccR6t7nkbckMEDF5fFcTP5qRBoZpuUix1K7g7qwbuBYgSdBkvWkYx2JEFHu4uwbQ",
  "key10": "5yZFcNzJynF5FA2ddeSaS5QJZabGM6hb3R5kzMyhMj5yyikyBZK2AYQErUi3nj6wos9N2XemALL91GtyUZ542FHN",
  "key11": "2jftX5pN3WURpmgANkCbd2E4t9mDTNEukE3X1hh1jfeLrnmC7XB2572sswFXjXS4fHhqXFQYT7MQMvcbkEkReYvC",
  "key12": "3xDs85zvzdud1eYW37NC9eDDE6KMfNhGwbphdm3PBPRi97h3KEFi6WFaB8PXoJiQf7Pz3jGD3jxR8vUP5daoQMS7",
  "key13": "2W3QV5VdxYDAnfHEz2oBi4C8ac9nUisJScCs1HGyHYJY6M3Nh3HoYKtKFK5bdY5v7u9yqeAjNBx1wWmcy4WcJVzR",
  "key14": "481YceizWVqajU16mUdauckPtQdPRjwaiHigMDKWxXrgmxHULDFzSzM2nHS4iqpitXoJWFyo2hmXn7xhBjgqL22E",
  "key15": "5cse6HhznQGYYnbhXGFNePbryutUZAVW26Ui3sXds3eqr3jbbpzhZJvMQrV9yuryZnvdAp4dmWJdGmXz3BQu2ZnX",
  "key16": "KVvdZPsyRgf1AEkRZwycYPcBbaFWjrLgaGLnThFDWGtxFceoEkAhg2pukFgejgeB69Rr8XfuzccUESYr3ULAQRq",
  "key17": "FTo7jnfc6u7LHbRtGmLJT5nEDiJacDAMd35vo8LBb54Xv7xDmtqh9AqpvWpp4Kcaid4scaLncTkaQo1Yf4JzLmB",
  "key18": "51RoTbTMWSXoLVGdtTBAzgNnoh4wHL7a7sCZXi3NnFUGkq5HYLtzM9eQqHAY3K8TETAzaZj7mBtJutydsj9EfSoL",
  "key19": "49kr86jxw91mESpq2yvfdMZEXcEJZgoHNR3TL3fp4hrEitvpdMHt4DDUpmefgPBxCZ8iguBoz91eM72FRgbTneAk",
  "key20": "5gU8hTUwH9LaLVFQ7UYYYcMpckbzQj3MTyr8xb2Cn9tS8YAFFar3fGurWutEoJciEmdnqZmwbuie5hswpEh51cDM",
  "key21": "4hKpwX3h5B3FHqL2Ns8QAc8WPdzjoZabLJsvDd5zzXp6PazhdGA56sMdR5MxkEaU2w8rw1Y7gyuYUxATw5Gm1v9s",
  "key22": "5LmS6VbCb8pz1jAFv1Z7SZoHgLZMkmZwzzQAJPWNt1KwibRLtRNw4Mu93hzj4H9bfjpQJdKqvR23zwmAF5hmwZtB",
  "key23": "3sgCecz7QMYKStP8zZ17BN1b8PDc2Z2kgjBSU7zBspwETpc4C5a22vDS7G58LKdnYngJMcvbNkZFjgp3DXDWEg7M",
  "key24": "6FpHg9mpn893T5LSjf5Zgy6BWB8boRM7ujVknRJL8z9BzcENisiJXGR3iKvBKEdm1Rn4APx5k5gdwhprcV1QNnC",
  "key25": "2xiLWWDVnjgL71yeXVn4MfzuBBEja9bs1TLTfsrfEykaJiLEm4sJqekCtwFbEJe2Pia2rANE4ZKR21V7Pd3ptFCk",
  "key26": "2RWeWy9sc4rdRLHZZsEGUEwHy3tBL6X4UnxkvesvfqjWwZqjujnNz7gCduTei9oqnPFvkVgug71if5MkWEtr9wJx",
  "key27": "2fmmu6saDFtWxXAYCMDhJjun4SJVFuFNwzpyuAJQpmCBR4eXs5pfEBy24QyNkAg9yFF45SFoCx7Q9GfCpx7PZxQi",
  "key28": "2iKVqP56j2MBox71QcDf5QdjytsKqAvFZzDWob9LpQZsKwWRGsJaQmPZueeA3cPYm683Pzpym5eBbsyUF4PqdLDM"
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
