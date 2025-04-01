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
    "45KwrwUrR7HvGXrc2aPrN7iRfHMDNEhMdjHGNNFxS9MLrSNquWSLJSUxo2z95gXG6EQ1xeP5ZnUF3DCevhvwLaGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Axj5LcJj2gv6Pca99RM5x6ZoMsbuMMvbrBTpY9HM8bvvtrVsEFPrDZj3Fd6zWe9gd2rPeYkyJeigKFJRdcS4Ety",
  "key1": "5KAsszzUexKjoxA1Ysn9QaNmsxjeWpomcnhrjgvF8t1JQKXjEoxskmfQUd9BNG3WFwt1djzcKsu1oTy83SLMVjC8",
  "key2": "4xFbFpyRCJ7P7kLYDBoJQBYGmmeGCharH4uceBA6aamvkks6oD3WaRqWr26NRK4nsvL25mfxFAsdbybhS6Qj4WKa",
  "key3": "5Mj1EYP4uWjiH8CPEx3G5DJFW5bvDnM38wimAAsLfdkRJvU3Hw6R2neZmgjrmfDkXSfqyvGgsktgQ8qW1j1Hpgqf",
  "key4": "3Qwt2RHq71NojBygphXrTvirgt1MRntRChFhraSnpczAappaatg7arFMitN3VtFf69C5FWPkKUXSXp8HEVwCmnkS",
  "key5": "Nc9x5W46zzefkFH6LiQNYJ7PwYBTWimhw5rHZMoNrmKQ5EpPihPQgwdnZhWx63yMa4JB6Q4XcyMHUGj4i81tRXR",
  "key6": "5KmioWaAkoRZuS1hUpyTRDdFPwbXn5J268WNfkek4LVL1att4C98Peu2irKW9nATcb8Y36hWiLoQdu1GS5cobrDn",
  "key7": "BzXxBWyCX7xP6tHtVpuDJJqn3W7uuj7nYSQhGn2kgKpzWnTSH1JHQxSR8FD96URTHq5eLEbvvi7KwTFyVFoKtHi",
  "key8": "2SmneTRZN4rJNk3KJL3TXMVdjYM6gvwye4a3WZPdiafwHSL7ZzKiS1UxVf14MPGgujekaEz3G9L4qoZFfUGAHFQZ",
  "key9": "pKhzodMHjFFAtUyATRyRWm9Gub83q95Qekk9P6PLrb48uY2Hk6vyogyEcv6u4dgCyrku7oAZBaVUKBYJmiBBstb",
  "key10": "25jmiH6UfAAbC5jSbi5Q8v8m7MoSu4APo99xakbDqwd2yq6A3UZYj8rYZHohiTnPYfWJA3vDF7JWcCvK6qbwuyHr",
  "key11": "4hHWX886QRf3EQkfFEfWXS9kTDHf1kMieBT5ouZT1oNaTq2CnbnSdS7mHHTPAuspH7GzcYeWkQ6KZZGJhjZ4Kk5E",
  "key12": "4fzd7dKU8ZnPwqnwodF8cd8obFjme7HzWE4NKiR1Q4EsTS3GDCnKPQGCQddMemJ5q1SZ5caaTH8vVcmUCi8zoPHn",
  "key13": "2sXJQrMTTSKRyJcpTEkbtMNESsjwCWFNQ4Ra8H8PbiBkLTgFREPHrGqhJsvk6Bf1V17b8tcmUsTuBHubxUffWKpe",
  "key14": "31TQ1Uj56DLLTesdi9AaYjCoeMZz3FS6PwvVJ9KVzVY5bEaAL8dERPGq1zUJDHzMMbMPS7FhjmoyRKbh1QCNDTEw",
  "key15": "3SnZHuM5ugumzDLP95LCo9pak6Jx4L9qmLpppHbq8AB38yNgGQNcUXZmXuFpad3DKeEK7bR3S65HrxqYbtHQYuG9",
  "key16": "yKVPtZmW9pCtnxpi2fwEnzbSmU9CnfBSpP1JTyXAHQGfouVZhRS7ocxasYvCAC2AcDPhHmgTgAuCsSFs2hnPFag",
  "key17": "51xQW6eVSdF4DvPYdb3K2QrDXCHT6CTWnixJitMpKui8DUTeuW1t3RhFLPPmpitRqeHSo2QCefjuVACs9yAyucJn",
  "key18": "52jFq97evDtcCvPvwf4TzLpF9tt8xacRTKXCNGmGZoGs51fpNfdu2go9oPpMPzyaesm5pZzX7W8hV5CRYmF7RetS",
  "key19": "5igXz3zUzTGT6MQ46DCnotQ3kKLBLTZgsWsar4zAUCzeM11ChMubmLM8mgA79iR9SWTcpnCbJR5eThKveha1jgnq",
  "key20": "33CdMDrS39Q15qeB5NfHG8bfybJm1jLf9SeLY3k1rMjmZ3FhbMWssotkun8tUoGMofFJnDDNug96uoRnwQ1HDPHT",
  "key21": "ZDq66Ztori6cJCBVJLQAnpiSxiSdhnYfPnKe7oUZkjSQuC6QhpsGsHeSGseDvfRCC2a6QmwGihu93wjRYtRm9L4",
  "key22": "4sfBQyKJuQVH1fc34PzRDoNn7HgUozUB4gvXq2Soe457Y7u1v2H1Z71h12EZ4YkUYA7g3oWTC2pUo6BGr6Q5u2Pz",
  "key23": "2XUCzeiHDb9qAVDFL23QPqcPhg4JhJ4uB7RgxYASC373VWH2Kt7kz9j9u1DixK4FzjBPuBh5RFGkA1u6G8Fx6gJM",
  "key24": "DPg7uVUzzyS3EhrpUAb3zcu8zPAS6gJwQNybUPkGjx1XAjfMch9AuuFqfwieCtEaU7bkFXiA42iviGBLFnvzaQC",
  "key25": "2U2ctLn4ZHph9WCdyxNR9ZESGQKBWX583W1cABqBnhVkpmjqzibFZgB7mnGa3Zdt6ExVoQd9qFueWEaqmDFSySpG",
  "key26": "3ZSrsMkUeDBm7Rn1z6mKPuttuFnSr4GUaDaFpAX6RNAfjpNtwZqey1p9v83NM5pec5kbrHvGAN3gKHPo1yVQo88e",
  "key27": "2q94KZrNpjrmAhz5YbffBJCsLtLxHL3FnkiNNdSmkoChbJ8Qb2ZVmXv1VLQ6P3hQA6fN1FcGsN2LSM3jgMoxbVfw"
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
