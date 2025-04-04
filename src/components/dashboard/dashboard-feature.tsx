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
    "3xyVTrEQwPPv9jXS5LsCF2dNA7eLATs7GcRtMdYJhLAwTDn1rfi1MwPSoUbD2TowdpgFYKooE9iPbnRtDFkMr5tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r89V8QKpfFFZTw3AYfgk5uazWcGqwK7E2u2gbaQnfcMYU8PsQhAecF5jcUJo4wTKDBcVvGWJC39EN1UP2yA9NR9",
  "key1": "25DhB6sZgR9pN9wUpkFDbCuUtwy7Fbj9PFezJkMDyn1KWuYdnhJtUBe3kjfwGUk6GwfNHpHtiarxm4cjzP27zkMH",
  "key2": "dJ7bZgAzLTsgUaDmTQtunSPeqb1dkNRFt2cU52xQYMAsMxRgN9BKu2mWH3SEp2tuB2JbgyPeP9n1ZBeRwXFonCK",
  "key3": "51WPYrmWUjYndnRBn4ZdV4jixZx5WRxkFAsyNS9p6U3cy7QzoyhiJ8mMS7VoDWXnh6zb6Du2UCwctt26dNfrsSsk",
  "key4": "2bzhM7n5SSZS5ttBkpKMjHxT4HYHyhdEKJLn8YBaEo8HXDWkct7BQvSLRtYURL2Aq1M9dCUB1m3QbvHGLQqWCpbV",
  "key5": "4d3pNbhLFYCsV2mtcCkweW6PY1CChgKfDYsk4ZwC87oEMcpkphN5VXaLn5Bb9uhNjVkKNZknWxHr9nmrmSrDqKKA",
  "key6": "2bmNxE3y4qCerAFXauFkq1g9W8ARCGn7UzwGNZJXjKeU7yfM6sRQi17sUACnujwYHs6DRjsqGgLBCFu9sXCWUdSq",
  "key7": "4WzZy2FasNkwkRFgdP4jH2mPpqDZrCakigKs6ijGWQ5Ptt4CfZfkjQ5hyXM8JPZNfoez2yJj3bSsknkhtFEf6wzZ",
  "key8": "2vz8Up2pccQbXc648SXaYxdLiTf8mZ4MfaPBBJePtJdMwjnsM1C8ejKGs9KFy8CaXgrUbV8QuboTXLpYG5HU8CvY",
  "key9": "3wFXcMHjLjZxjMgmG7QL54ckyTDoaAV1VMxeWW9wLWPtkEqaVJjxjoCfpAVLgRaocZS6LLb18vXK9cb2khiRo3BT",
  "key10": "4R3mJAm9PmPyWx96P9K3VsKFRtqM9SaRPEyW4MfazBSQKK1CTTiG62DsNpx8j2DRjNzg5uKtJpePUKSLA2Z8fdah",
  "key11": "225WE6D7bhXFqRFDYubTvRMmRunrH2qFQfyf2YpFqx8rWaYCFnhmGjR7w1hWu8LcepUCde6mHPpkg8xNfexgNW1V",
  "key12": "4HCb3b37uN6z6fPvoLarSinoXhYsvhtWM5QKzMtrErVyXSNNLAhN6dpChbL7tMvjxTAZ4tiX7WbvpVVik6ps1cnB",
  "key13": "2LS8b4zVSqEa39MYa9T6kKnxVCAchzMsHMKB22pDafQToYYTCa8gDJmun9yBUrtSkFbqGGiy9kgzxbigaCut4Wth",
  "key14": "5kQbutdMt7U6dkJzrdATJfhPfTkGYLZYzUjMQDuZazVN1dgbaD2UhDS5J8Yjh4QgYoEuNc5puj4VMgRBgk9DSo15",
  "key15": "8jECHbMXVTYbVbj2fW5T1NGBt4f4gaAkTXHdm3jxm69xnk3c4H9VgksGBPKNYVXvgFLpArrSStfxGsD9vtNf2qK",
  "key16": "3oYkMB3SSoE7z1KXGKktwfZHgVo83gCq92eppDiUbMQ7EDArAbW3E5Ef4EJYXfCfy9h75CtH7v9L832SPSFNvJS6",
  "key17": "6oQgxBaBaEKKNgEGZzJ4SRKBinqFW1kj93zLejz6KDLpmouGVF29UQJJyMQU6Td9aqze1w35z2oTyQdpk1JLUb5",
  "key18": "31WFzfJvxTjHhAC7CRVMiP6NDfwHqcPTebKQvW2LvT3WomJK2b5y5AM14G2mZd1JBEQnT7kiy13b7KNNCVHENZ93",
  "key19": "4UnZaC9sf84ZypBX6p7jcingxH94Mr8XtQb513gttBooGQ6vWvWW9Wk5TT8HL7kpqreikjVa6nrehrCGd9q2MuwT",
  "key20": "Yor9hryMvV5WexbeZ9oeXKqvmuXhkYTPQQfeVXehZTFU2pcqeB7EXCKnHSWgy2WsmSJNn1Nqpv4tvErCn4ChmUZ",
  "key21": "3aNEtrQzLTnpVZuRvh6QFYssZ3MqoKZ83eWMCwQiQbfpeATYKUhMEHvyJnnRcwJkb38gkyFzH8TN232xpnopqhY4",
  "key22": "5pACTRTsaqGvktDSMrVfKwCgLtFXHJ6tLB2DhJ4LXdd4whdBEJDg1AN8CosPmNHZybFw5MbcpruQzoLL5HLmC5k3",
  "key23": "5dbAbqMF29kitjpmQFWRnx8dxunPBvks4dbJgRYZQ2YGc71A4KuBEnvNGUQtsRhLQX67rsbPJFmZ6HHw29p4rTZt",
  "key24": "3R7V1m9YXtHMTMpVRRYy6xBWCq11VNZcndHHDmhLMFUTScgt2E5goHLthF86cWxnKKCpS5BAHFU5VtCczGVHKU9V",
  "key25": "5mmF5T5X2GhXrW76B1zXesHcL4AKYGfrEUfqEZRRXxuJ4KziDexJa7PimKVF5oVuHiVQFNWQPtdZMFomuGmYWUQT",
  "key26": "D3KGZPGQGtqiPBNMeYBiSBfPuMK1t5fHehhGHGYLFDmXojWN1CZy9vq6qx99L9cXtgdcmqUiDEQ9GXpCGz23LMw",
  "key27": "3be4FYp7wU2PrtKbajkWM9rQAVfCPjZUYwzEY9jAWJytDR4589c4oYwQB5zbWXdxytPSnjvFTWD3KTZD1ZsDS3LK",
  "key28": "4qwdWmweYVVhAHHpyHbW9LHUxKt9QnsRUc7dLAktzK1LX2pr33LQCuKVKY5W6oowhB3kyPkHVz8jfiJ5PYwHyt8B",
  "key29": "5z75dooXqx9pPhB9VQNKGe2yk5uv3srM1AUQ62L2F7AwRRqTLXTpc7XzCSSHovnJNispvH4kVHxHbYhoAmDpTbNZ"
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
