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
    "3rfoaR6DG13J8XvGQZXHY3PTkse9Mz6WLu6EpLH3xwNAq8AEJKKdteznTe3AqhiCNpcJKNbEFgRaWnfZcAjXsVwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28uRiW3wNrSqsG2UPs2DUWLLUEjfhyBE1t4Chi2dhk3xr3t7Je8J9D3JbosLgYhk41rnVNhokqKtS2CkSoxi9uNd",
  "key1": "AW6xgbGZxyzTEvTiZsN3NUYaTvKd3BjBfziZ9EL93ZDfvjNXomxBefJ4SLTPnnxBxcNVnCGWStDA1U1hun58neT",
  "key2": "2LZyDn1WA6wLxUpV2P8piMmfis81CP6RajQEnHex3tv711EDzB6sz8QgosXmiffd54JAoQjqriWddaKHFRaZzqPh",
  "key3": "2ghUQ5Q6Yphd1DB2aqA3mrSMgo9nxjdgzDq7cQoyLeFJChcpQ9KZXcmHgNAbk8R73WW6qfEfYLZe2SMYMmVdYGTR",
  "key4": "5WojtZcuMsJ1R5zKbdGFjYYh2yUUgGY1SzviihwLSDpTCgm8PiXwaSUoKRQ9Ztf33XQ9d7dxNjQ1KU6qzzETSJJ7",
  "key5": "zUbg7TrxSMirbLMSABBVravVESZKwpf5CfxKmvYYyxjt4BtkYMJF4uS9eV83f8PzvLiTeo8Wkg5BAHNKcLZrFsL",
  "key6": "66uqTKtSVnyYzEvnDSssJijiJmBR7uoMwStBUGX63ApRwAwKopKiMDigxojzSaKGwrKpEAKcfZES9CcpwRAUPqAU",
  "key7": "5zaGaBaAABmg73Z5dgegtYgvLKfnJwbgpmyjp98yiMSL1F5MMSNJfB5H5CBrS5EbW4C8YgXhxqaZCzNnoZpmyQrQ",
  "key8": "ifoJEKnLLrhM5C3PBvbc3dW6szLUz4T1KivDqqGEo1WZ4CgEr9tGi5v1d4HUQTxBqBVC2do3GkAHZJJGPEpZbL8",
  "key9": "3xcx3QUfptNLGS5ahgU198es7rVBNjQocBGmjSUhi6XJA7M8MfxDRZKzau9Q9uqe3pwxKU2XKSEUDJnJuZTsmPMP",
  "key10": "nCd6KxQaMBVmmURcV4oxUfiDEVCqQBpmsbRHsa8GzCCwQWn1EMuW7b3ajg9azHDMEB5LCJc45vNxAQeNV93TJRi",
  "key11": "5Sqr1Mj7LDaiuJAkuYCPGnUXwyysvXWXRZ22EvvavxoLgV1GKN9xTY1hyeHfBJ1XCiC1J86szWpReQ9J5E91UCZp",
  "key12": "4g1fp9MecD63a72wCEJ78WgKPDqgxEZR67DA2DYRnm6UMLrSQRthuaV8TERTUxrzSri96Me3Ep1RzFBxdYGscCUz",
  "key13": "BFDG8Rq6E4TJc9NdVsCNfzRZJqUUgEdzjKa1vGhfokDBkBiJscFiGvb6nrpnog6hwu7tP2KGfa3AsLqWnsDUQQo",
  "key14": "NkohoCJTqHhagRbR8Qv65t1TWh1DPzEJmk5eCSoeYmTfe6vgW24qrKxuoW2tRLizKDCADCUmWwVevTAoPZ9Mt81",
  "key15": "64Qj5xFdgn7eSpCP7koQAYAx4isCB2DYd7sZVGdrGwTwBSpJoUd1gcWLhAnC5b8TzkWN35W1BSHnvXcmXoaS9nck",
  "key16": "38u3wXNwJKdmiGiAjsZpXxZPATP3GjdujwxgNZFPxLJURDAgDTK4b48uAGhbCgq3wPHUuGtMUEMEKsVKiV2SQWxg",
  "key17": "5SqMbTrpCS6SiRE8uArqb9TLg2GGcHYTdxffXcxr8MdR361zidQo7N3H3KapYa8xLPGnAV92xjHFLeEZLRXftL9n",
  "key18": "3efSpKRN8Qq9NWkMW5QwGuz6xsfZ4RRNdaDbSMZPphNsdkbtqJjWsJqXqCtkPkeBcCeGaPnoFomrP6wyxWSB9iJh",
  "key19": "4jCNnd5LRMPiwp4VoMDbTAybT5kJ9pgb8Fi1aiTuBPiZ3yiveJ1BYBcAzsZjXA1h3swqLu7Jaqg84JTiuMxRUQZt",
  "key20": "483gZ8PtnnpSvnBnZgbSsbpsXCgfnjg6UyLhyasFvUkVqmosKe7r9m7p3t2MbaYSRXaQTVhyU2CtKVpZ5xAoUrx5",
  "key21": "2aS3bvoGjjCjasqfTYQZz7PhDmodM2HxRtx2y6XeFRH387QDZnPq5fKWf9YBoXNRNi1PPL1ZK4HxhY8Yg5T7NRs4",
  "key22": "5PzgZH4SMkZbWw1xkZg1c4GrGyZVMJgPzYsepFL3iWEJ6zMfARtdrcdqnhrr38ewbFNFDP8XShuawbKqToDLta6V",
  "key23": "5FieBoC17cgv6D9EVa777xLdSKZTnpMCt21Njw72AdWz8yg6kWn35tqGsJxX74PziV9QaGUJVfYGLsFyxA5vzefa",
  "key24": "55ubNtELrq1zgiAgCjchyEtiYyTAW4zsyim1RyN5jPXz8QYeVXBk4v6VYtP79FCDY2g8ATUc9KB7KwpxuLbpLJPv",
  "key25": "5nor8yCqkFRyTCxWUfjGGdxkSoGpjjZLuZJiwynzNmocSwD7EHLjhZDFzy4uoZBLy1CkpLPCpdmaxyvKKS8z2438"
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
