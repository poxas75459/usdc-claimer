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
    "2JEtPKEViKSMTe6CwABJKisbZaFsgfmvfSMzxwV3Jhhqhj62VjThDKN9TBJxLjcnnzjzS6rASNaydfXRKB48AZS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nZLo5PP8DHSsMZZvFnYaskFbzY79kEfkSYZbDjpkjJgL9KjJLgJZu81Yc3snkq8vzqqSx4UfspQFGbaopuTFFYf",
  "key1": "2jRcMZ28rR25QEep3g4w8HTTCGJw4WBcf3TubXTVDgkyvswPhrsXtFQqP75bnki9GSG33ewcnU94LgXahvNAL8Gf",
  "key2": "49ivKzGRrDVfxuPpUbrcLaiVtTAEoNCyk2ferrdENbVwP1U12btUdTPCmWTdbtYY8X3KSRxKPAU5zKrXxYusinYV",
  "key3": "3vBtDxMD7aBpdYoycNvZh2m9AKFnddLTk6A6AgtCQaApzdSNuV2kgqBQA1LKTsV1jpLpqH28NDCB6oqZqAF7D2By",
  "key4": "3geMMwB7r199oRSXxbyAicPRQ4CAsjF3xAUBEr4du99uXXesAUhCSgcreKxdGPGU45d5noJceLqKssik3JoUZkpe",
  "key5": "3za8jPyeLHaiLrkXVbUoDU6qQroP8QSEwFKh64QdnNvBxMz7z2V2Pfo5HE5acoyLbkGQiXxoMbXNCfugtV44DJzb",
  "key6": "4nejM9GKnuSCZLMwLAXfQvCnh4AFd1aGKbS2dGkmZ12m3wkeqB1RFjTdBEyAdjTbFJqdMMpQ6AsMFeFkHebNLR1V",
  "key7": "CWdEY6skGQgFNfijYppSXkqb4E3CC6HhR2MYmfkk2snp8dZhKa96YEXvJvnaeJtGpMfXtSUn9ks1tq6GWCBUu9p",
  "key8": "4CdTGDUCoSScfqFb95HFs3eMKbHsdqF8UC4QTmBnio9dnP272xk2FbtMi3LhSc8BPLnRHX1eDYncrE9nNKtM9Chd",
  "key9": "2DjcATdYbjM4qZVgJHrw5TbWjYF69isv9bKkNEoVous7qAVjrG33xfjrrz9qDH3h9it3PHq7EtxN3qHL7w9rwLkB",
  "key10": "4rnSzni6kUJRF2RoPSKbp92ZPqPrAgtbWwnEeEoQDYracTsPxWbTFjD35Bh2RRQ7PzcMzyEKbKteaZyzBvKXrjNM",
  "key11": "3Ar8JogHdw8JKWoADPvQYEjVMuWCCKZSqzsiDJohxhh4cwD6eRhPFEa1cVBZ2mP8ctk1ujfoVeuXLSWZVZSWUeoH",
  "key12": "3tw3fSa6BnV3EnAsXHH8i4X2o8W8mhViD8o3AfmqYP5UG8gGLgVtgoKo7dnW4Pu78h8DhXzVZ57qmSw9ySWsQ9Da",
  "key13": "2xF9xZqTrBJZ3n4ndHdz6BoH3VVeAruupg7rfCtp4SPeUBAKZcEZC9LhDJnzom5u8tJFvKZbcBZjqQdEqc8XiAnE",
  "key14": "2XLouyHUxW5379zbPhR4jN4bi7oF3Aqi6C2dYn9MLfTsmoPvHFgmamc9Z6SRbz8ubWTLWYLtV6UBF6KzhRNawjCf",
  "key15": "vTR2PFnxcR9dmaNdECcXoDTL5CawaABGQqkNTyS7ZtpCCApAUtHWfwdYjU8iHD71GnZuBdxGzQWHfKQLU8YJ4pr",
  "key16": "PFjsKwuYZfpvJ3rRjx7Pjf5YLgsdfZpJXEq8NV2pcjR6LWFi4nVAp3AMLW7kU1s15vFburZS98wmuoA1ZyBDg5L",
  "key17": "2VHAWuuhzci3wAjHtKBrQ7emRaon7jJTceWLUZc1h6cAPxY8oQJ1uCQPTqxm2a1qDmmWfRWMh6kav25doffrkjZT",
  "key18": "62Wn1Ay7HyKQqEg7a1v6gEbbB6VMSM2qK7p2ys9ovAM4rDvy7ScsNC3wyvTXLJbqW197BwBvdFU7TWy5HRoRYXwp",
  "key19": "2Bf7bzSTS42H2fDdDP8TWxAiaCuywxAuZbAn5dqSxntherea6fT7a5Ck9EUrveDkUbmKmiFJqrx7Ybcn5YSzRYft",
  "key20": "2BBNE5aw4YMpzhDLqtoQX1ZtQju9WCnyqkLBbPyA2nxLsqdQ8UA6mhFgpeveMxAXJCb7tPzEAkLAX9chAGFdemux",
  "key21": "5VhpxD8itCc4VLwfSjisbw4fLDSitqamQEmaSogJmLEZd1h7Yt2sV3K34hfNrEZroiPbdFWc6Zq1fdXBBcEnyZTZ",
  "key22": "3NtrUHrmbDY3REDDuSZ9XrQgsPtL9EZuhtszBSJXfNFdem7uQ3dQvLHqqQ2xt6hyVkotVQMcBnZpvWKLJWbJfQxj",
  "key23": "4exmvVrznBL3r3Eb22Y4MPAd5MXRGKcoD662Qz6GVDz2N9g5eToCNHjxax8c6tqht9BNw1NxyPavTGs4hLcAGkD6",
  "key24": "2mMJeXimivcXBc7CWVW4XAx1pUHriVp4zTXMo64CUWiG5KwazcgXfELwJ9EtdVeBH7mFR9ekHa8q2PaSFpPrwYhh",
  "key25": "4C8QnohjTveh7UMPZoagE4GyZkvp3P81uBP4S12xxuQ59DCNxuNuWqk6bvmxiM71s4cNX4pJtKn1gwwFXUmua9bd"
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
