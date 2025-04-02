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
    "z92nduxSQGjWvzTnD9UQBgSMk559KnPjHpnNTb9ugDD9Mv5UfP8AHbwxeAHGRE5zsdnsd4LCbUgCEWvuz54PpH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UmZekPytHBeuZbddCAUPi8acLQr54VXXSt5KUD5F57cfrVwjSvCCD9dHm73FYHbBxy9tevf4szQ2jh11V2BS7TV",
  "key1": "5o8VvE6pmM6mpnjNAZUYoobFETekUevjLc1kNYU38CbjFFofCKaHE1EPWnMhc4secEeiFve4zaEZxk1gq5vJ1yRv",
  "key2": "2yixTgNRuuHajaGFnPMBXtwEStvRJX8GE6JVxMPb1ZwWH6LV3waVSig4NSeSDKsf1HDiNfyQ3BtahNsc4YZYKJr9",
  "key3": "48fqspVgQQqz3UAjJhHWGAMGT7wvSdb9qf2EcCRXqxqmnZDW3of3qhGAPqvuSNmg8QMD92D8K4hafNG4MuSWsnvw",
  "key4": "29Q4NUjDCXqaykw5a1BRGJGqduxvBXLst9XAQ7YXJTg1rrvPNoAmh6uaZx6z2ZiaGQJtHUJhk2mQrn1Rm3Z2ACko",
  "key5": "3f7Tv89mNHBgYZkmoAqxSMYpMwmCdkoJvta9CkK582vjcRzyb7bQxbXHsR2BnruawuK4ZeHE2bRboeqryybqXvwe",
  "key6": "48FWjwLsnFpVR1gr8Rnvi8GkFdBM3twDuJzxahHhv2RVWNdmZoRHdhBbf16oDsf4WmQ2AfgpWq7QgZ3qer1Jghgj",
  "key7": "3evoYDecC8GRvgTvj2R4eqQNxE33w9KRSGPUN1PokvC7o6ToDaBGrDT75fgyFNq1TgEJ6pymge4SupzL28s1FCXS",
  "key8": "4UELLug7eKaUXgb8uxCRN2AtsSwAR67UNSZ1h6mQPTB9RWGDZaTTxDApk45ERiSa1pLA9Pd6XX3P5H71VmM2Mpz6",
  "key9": "3oecKhBZYUrv8kUcsFddZvhw2NYXeeGvX9NU7sLU8PTmJ9jmB7rXT9pLGNLPU5SuxPiVbR1qz5PkSWdY4kd7WEzN",
  "key10": "27sL1tqha8m8otcdquMBtvbJXrZQMZMpqad3dpeZ537ytHx2jWDpWXxvxktKTVcdJZ9e8uDmXew4hSbhFoZiwJ5G",
  "key11": "4tvMv4Y7LLLyxVYGNAdmFHK27dWTAA1teSR9JAxavUF82dU8yeQqTmYePSyWnFdHj7UQZNUMGfmcsRmRckLVjd9E",
  "key12": "4yi8XZqkux26VLrF5pt4aDcaNPa7QA6TUZFuCqucHVhTysKu9gUB7zsGnVtKjL4LGh7U4XvWwXBHoftRsiWrkXQQ",
  "key13": "24CUf1HDmHC4AGrMjC4suRyWLw8yP7cUknxmsyy1cP5S67ynS5rvjvBtNQib5U7P9LNZXrSM7V5ZYgM48Vq7L9Vq",
  "key14": "2hYcu44FF7q5LnU45XXFiexCzm1tVRuo6wtMr4QduwD8ncvE6u6EVPydVMkVRA625gEsCQjQSAix2X8JCZGDudHj",
  "key15": "3s1wznCujCE983TPsSqpTjmuDDNkUa6gbybR4PtjJWrf2DqWHQprttxXqTRNTKfJp2yKC76R5CE9iGfp7Fa2Gut1",
  "key16": "2WkoBekLurWkGft1rxSA1L3ritRVX3sK9pgiuBZLLgi589JWuK3vzfAny4EErjbUidkLkpc44K9mHXDcUMmJ628i",
  "key17": "3VoRWx5jiKtqSfXXnSfgK6qQZ16rN1ji92gFXX9hES9wY8ERtwbfqH3VX3vC6qDaz6KeJyfi89xDSmSijKo9Tb2k",
  "key18": "qYMWzJParvTubztVcdbuWKvQmaWMkT5dVpxUKJKCGZT38WzjoB9ha2Lkr8Y8B51riEu1Grda9NFRCsKdD8evag6",
  "key19": "4NWc8zepuYgqi4z7vuWLVBbcQvaF8GuZKHQj3FekB5VynokNFjyzEbYLqdQMRZ1pQZkm473dHEFv8GgWyvgVpVEE",
  "key20": "5MVnY7SwfNxqaV1V7sT3RvvNnSuFzfRoYPmSWkKKf4hK25aeEPTbVMRpUSizitgrwHhXUYLLRqrpKuKmhEJuRpQm",
  "key21": "4McxbserpRjACPUjQjuYAiTcYqSDPF6n5Ga93rGSUti6L4e1DZ2r3mxdJ1MbGjEfddbBVTbRoFEaLqikFFBDq4rW",
  "key22": "5GKs4ojBGsZ5Q71anX2dkrTp6wtUiGmC817MZw1VA77Xrf6BUvmns6SKWuX6x4pPiSdSc87C8jhQcpZZTacbJUaP",
  "key23": "wixbxg2QBqjaZL1iprA4fJwGAzCdhG8m1xACNpvvw16pwpLquJpg3MiqVjddAGnm1DeaAokk6jVkkZBe7GJTMHG",
  "key24": "3piwmv4hPXzkLPc7rXkGK6J66nyANJyU6ZkDDGnprLQe7E7EJpD3pnzsYmAN2XHnjSuXwH7Zjf6QtGvJmNBLXP8V",
  "key25": "31kVxccckhmWDHihqqUYNrBJs7kZEnNybjti8ZCXprc2fujMzRyxS9uf79ozeuiUf6tGP3xQocVZC5AA6F51ivYu",
  "key26": "3maNwveJzcjRvEi8bbeTKVzNJVyUSH6kQVJT186AfEbFYaGH4qkvATPnSBQiZkh64wNcMWtsrpFceVpsfHciqvbs",
  "key27": "4D8EJXyc1M7FxHs1ga1NL9UBWYsRwZnMpq5LL2TFoenfCu5FpMfPLQkU8uk3mb652Bx4hNa2M4tXdUg7Cq1rV91g",
  "key28": "5xy8Gxxg1jRTjB6qv5p2UAj5Vnmt6z24TTs73yqPDHQgBALfHH8PKdUbsSBb5DKRh8iQVBjcik44VdLbZckov4KP",
  "key29": "JveCQY63ZDG2eTEEfQkQLuRB9KwEF21FTtDucJmDThL5E64KEKLpYgSwg5gcFcA3pJqsBdWPC4987Udix1XshRA",
  "key30": "gpGT6pUab8gENijEh7tFdy9kWe3xw5278oeBkXgzuvDecPCVxBHKaaqhvr46dawsN48GFY5QpHS4r1XQ5FKALuE",
  "key31": "5HnGwcKogtzY36XT6seB7Cp5Qorx3XgmLEDcEQLzo33fdfQhUd3UsNLLcoEnoB2bwSdCzdtZjHKnxbkVbW3Zfz9i",
  "key32": "4q7xs5MURSag7uFHZV9s4gaWGXtyjdkrnh6QRfELGYhuWnsYNxgA9WUCiUDYzaHkNnAGybF9x1JWVhsFZcwQtJV3",
  "key33": "4UeDCN8nwGncz1bCjDLKyZ1TkpBdsYawTHkSgJ4t3MQ2me5TTjD3DkF7gMeDR3uYNLhg2wftgRzgeEi9Afcy984n",
  "key34": "3F7oxrZscCzrdiSssqnHeCcBobrRqsfrhnQ886zbwVEc4TtCGPnDV42QyrxQphqng2AXEaibF8K4Rka32dZaGWfs",
  "key35": "QbfVgXFUTJGcnG8LFyAp1TqckHTYnbNk7kSCyLbQi3vzQuFp1BY5vJhihK4jQNeMLZTLRSrxFkkzqjoi3EjmAYy",
  "key36": "4xGFiQBEG7moeW7m99fXVWDEDQcu7m1PFpnraX9FYiEnZwsh2UVrnUMfaLwJTkbDeD9UWpAUjk4bWiLVCBAu1J52",
  "key37": "4eXmRNNjcj6NiPo7YjBxegvb1Kd6neYAAeRR2JfbJFU3Vd1EbQP8Ps3MQYJRLqxCDKTCPyywNFbU7qF72MnyA18b",
  "key38": "55mRhP4Q7yneQBeSdYsmhvc2kzDyGTNm7mnJ2poxUADpG4KqbC6om3QvL7ykeUaBFQ7a2cqW57UKb9j2Rpho1UKj"
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
