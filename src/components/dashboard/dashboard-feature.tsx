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
    "218G6SbbugyY7tQrAdUgYfMwgUBZguT3uZkX5fuFi2DVpzGn84kgXEoGFPkianEpRUqZ677qzUmgvwVYuJzQuzjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zoiNrusCihpPn9ZeCqHrHwV89q3Y4Mh6raqQX68Hmp19aB2KCXbZkt1GbF8kWZGEcfgSYerGzSjT5BgH1c9iFy3",
  "key1": "4spvDeYc6UhBJiAuXKcktkfoLvHgJ3hGDX1iqBBTT1gdtcCtuuv2xTKkefCYCxeGC6ZD98zTgqLLWNWLXXdKmbG6",
  "key2": "33PZXDKd1MSnnLpTAbrt6fy8YBrpEXp4ieKLgqZwYKLkXfKB98zznMsKdHY5DgUtHnLjNBXxRVogEZmHMEBDgeXC",
  "key3": "268UKmRgh3gqSymcDnfLnLquuKfHnMJ6fbe53oSGbqVPdXZhznHQ2UYKpu1S5sX5vUigSsEvTy24cWAXZgujyNFU",
  "key4": "3s9NFNJkMc1RGwzKP9qWJCoDwLHpLY5kEUrHgsqA7oaxinnHLzpL8vzkJPsudoP4tPBRLM64VhU6jqtz15Hj3Kf9",
  "key5": "5ddHiXJgS43zwtKAVwHsKhiJhQsME3hdEa3kN5CZGLiaVsooua7D9y6oXYjC8ct5ef2qzb27sVgcVkvz2GpPiT3N",
  "key6": "djwR6787R9PatJFRPgQD1eLdWm4PUftfdfrD34ui9NgwedMoYmrzTY3eT7h5wamswVhcN8r4jBR9sM8YF5X2DuA",
  "key7": "2rBHC6JEPzkdSLx5ADabwYpdH66V8SfNBGS7suggis7EMJX7AVQvKCBfokBcv3nLrm1yAGGUCzE92M9VKBUcXsM2",
  "key8": "57edarig5mdmPmUGd1oNgSMGpPtJ9BeFvGdE1wYzvivrwGsvw2aSjqDVk68y2CRcWGkhc8jP7RmXtrXEq3s5sF7M",
  "key9": "4f3mmmccMopzbpAi8CyrZfeUgy7XoDKX5DEfw9vRorypwXhjvxP7ZWzDiWDFDKhikGpVUsUARjjMsQmkp6mXmaz7",
  "key10": "29wvkvyun5cXEQ4xxf3NB81sLndx75p3EM7cjrCMke49rLx2MyXfVKbAo7g5XNB7zPTz3dhnbQQfKikFYkKPF26n",
  "key11": "GTi5SfoSeVNcnBpicSXs2Rn74AQ1Xo55r1xjbJCP3yNgVEnDtU6xnLPSbHv5su2a1gF22ykpV5LFhU4ngrZEDpr",
  "key12": "5eeLHCqoGTwPAyhp2yepnkDmV5PM2HftFqSXGERBL8ceQYFeaihKgm4KWERrkWimXPA4c1au5ZxcSkrzFjuexzHY",
  "key13": "4YUrzY1GK8kX5o8hSBhYrjKam6tPq1EKVQizWKfHWWkoisbZ2C87h1c9th7UDDYmAenwnhXEnzFYueeYWYUqPTR5",
  "key14": "5QR146vHuf5mU811AXbG1bsWD6uZM4D3McirDjzAJYJiMrVNZZ2F2LjAwqtR2paN9QPgkQas1kJdLvWv6UGhoSim",
  "key15": "YWYiQZvx95KcA9Tfv1BfA3YmB9LBnCeWvVCnnuNN7bUN8C1Z6cJM5mvyy9PECtDSdg6LKgAH65ZTrifHGY2Jfze",
  "key16": "61UUpntpaptCJqts2iLK7JuMibZZBwTxUWBfno6GLz7XttBavsrjmwsm6fBJcBgA2RegzHxvfE2jV3zMhtXYcpbn",
  "key17": "29KJLiPdSdUEuPCEbJGoT841afcLKDf4d94PxcNi1P1aTH8tiNSc5dmAasDKCNCFaTVHVRqASi2Z254DxbKZ19Cb",
  "key18": "27PoqpU2xVKJzLVKacNX4hz3oiwxq3mVnpSA25yw1mJb6joaeiJshxPd2vsWbmCnqUVKuc3Jvw15yjvXCYfRJ4my",
  "key19": "TxGu6xKfTWa5AaVTXFtT8cuaA835dNUwNijLqKB1jWsUcMqqboVBwWujN4x8VjBMcUKEksoHQ7oBSEdgk4tU35b",
  "key20": "3gwnGBwu5nmtSFsygsN5EeC3BxEftnnAS8EyF52tcfPuKTvyYE6n8AtoMsMNbD7yJ59ngWG8dEUhW1nfPRDRepr5",
  "key21": "23PgPRt3Drx9Zg3K8atWA8DwbtiZQ9Dgy3T7Ehc1S6tuoR4J2mCfLtBWr13nKFuM4MPCTTZea5Y3efxV4enLvkXe",
  "key22": "5BHUrr9AvQUZPKR32LRxcZyngX5CywcTRAfMU28qxC1Z6oo4urWYuMqPqZ4xzR9mxDHpSsu87nbZukk76Q8qM4o7",
  "key23": "3kJAeNCkZ4QaTfNyCwNhd29yxdAXXvNFe536JFCnAoGkm1WxQH32Z4BNe25hAt7PPE1Ss4SXU3wdoUZP5HxwVxMk",
  "key24": "2oy6yLPpep2UUz7RbZBWB2i8HvyGJZ4nwLSQbQHaaBytNDVdo6aLtKJpWD2rs8uSpLEpb8qd2MgRyPjAUcVFPUc",
  "key25": "ZJ9WJMVhgFFWsLbrqHnDsvgiHPBSbKnwTqo9ptzLrTQR8qzwnkorM6gLTVsEXaRRs9m4xK8dMoa2WwQKZ7DSAn3",
  "key26": "5m1GvBxAqkMeHwEwZPMtLj5RaSN8CixGfR4RTxWeYKykyvNpbPKyeBnKzoaHR6NN4dZyCsXwhMHSqdUwB6GLMhSU",
  "key27": "3AoDgURVipSXBbi2zAQiXE5747bUjw8gGzdoTQkvcg9pZ35X5JsTwaBbtUoxdEciwqyMhnqFRmRWZpkQ4FctXLTL",
  "key28": "YFnAp2ADq3AmwthtFsNaHyh1ji9vuKrLSTdpCgieK9ydGiAWDR5CdxyDYYgimmS5hEfBwqVd1rb7EspmTMpSS3d",
  "key29": "3J5w6cAX82bpMerBTAYCuGvWVo8DsCiYKFL4jPHEr738DroE6rCa51XUm6FvsVCqoPQEyM57ykb2exFu8eYbKNhw",
  "key30": "3ZQ9aUCZCtSRcXdBoXAJHHB4iqJ8zV8wK8fqgoEapUNfoJNUcofGjSCVt6QMBm8JmuQRoGbEbKjM5yHYauKDtmuX",
  "key31": "58btjmrWu6jQAFKELPau6cpK3HM45HasYHsA28GU6cG2movUfAMhmrZTgdAxiLUBgLemPS49WCVpQfW4uNaJmSkj",
  "key32": "2HbSX88CcrC6gDC7F342McruykeqQV9Q7AUcKJXziUc9tYPTyfjuzKZGf28XS5vNQXox978fjCCMe4HxpLxj8vab",
  "key33": "ESP4iuwPQdnXi8mbcpbxhtqUtJHcZJbDzRbyvMuMgTMX4ixR3yKwSfbJ3fxuV6yqmeBB6R5iE9DnvvAEk9KUKYT",
  "key34": "P14rYnt4bp9Z4WTo8u9T3o7HyX1XEcQcp63VVtmWGqMRexxdUWGYmR8WaM5QyDBQNhXnnembEMBJBZ9ctCAAmoe",
  "key35": "7NftDEH45eaMX86xNqEX816bXV13ASe7a2oqy7Bdvf7HrM5RAoKAJ4U8XZ66kXjkiCh8F7xhfPQ8U7t9e1BQK3g",
  "key36": "5mEwpcym2qFMwAcA8TmjsMzzxgpdakUT8xWCCPHaz6dmZ34MA1yLBwi56F9kQqF4FhiU8rSjuJLvkMbw3UhWcXwe",
  "key37": "5CjtrT9hmqhNwZFRMFUfGjfcoPophwXiA8HqfRFH3vEvGaDy6EvnKGJ1DsaCdixPftcijKehAAskGqu3kDtBzYku",
  "key38": "u11nuDEwTkPwhsH6nebccUuQbkq59bxoEAvk5Xxvr42AJxNvi6YJrK1bPxkZ8pwQ5KEyrLPwSF7KJnL3Az9E9R6"
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
