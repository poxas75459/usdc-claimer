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
    "3i6Z2pR3VTodRKXn8EM2ss4NgiVaAGAPzzaKkXTZYWz542N4ADqYyavhQShYcRnzWcoTzasNqwSrdgk1VuL72kB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PUFSTsuLhkp5grUostSoaNms6aeFHyFqh56cFZc3UM47Ft7wNe1yQt8qNj2xMpCpsFErGqQbAZatCZ5apykBq7P",
  "key1": "3SosqQVkqjsJXVXsUKZgxWA542hQ6w5BY6NsgoB1aNyfUdyqPMuFBW78SCqD1aLozEXy3hsEHj4XSDRpjM7pJTMK",
  "key2": "3uFnTLJ5vtkkGDwZZeFy8MFuiQmgPyfHBQipDUJXnFVe765WKVbaQhsJqAPoZ5eeFkfUbBxxqWEPwEtMZVdskgMi",
  "key3": "Lwcj7uKZAF28KmptgjGe1uh3SP73bfFFUYPvQHpMMU2asZEDWVbtBxpj7iNpbNN25C9dTGVJzpoJRnpsTF39K1a",
  "key4": "2zt9BJAhSV4Yb2N4ZYwfjxyHvgG1i4C6Qa3HcBKp38vkURP9c7RQZABbq3BqdVMkj2rM9SrdQ1GCMJQqzLiZZzjR",
  "key5": "3wXxM8v4iZS5gG7YLR1sFP7qmSQQPpYApkHh7roQdWKYMcZSYHhidj6Dy1urFZqd2mMt1pXwKEELkiQFMXHoCicP",
  "key6": "5U6VEcUs2y6WuH3HRvqQLms7VjbjzUFLQhY5gbHkHz2dyH2nPwJ5QB1dW9m2Zz2ZdTUYKiPvJj8MmwhGwXyjM9PF",
  "key7": "5g7M4gVXCVVrjRrVA4hRJSDPHopKxMojMKoCyPaisT2YiZvWwvXoFS9Vzsq73YoBivTQ15BqpYqsaQsq3hCG21kv",
  "key8": "3a6ZfnqaS9Tb6jwfp2wiiMek5RviWN2SG8yBGKtHWNty61fCE8s9d7CpLZyHxv6QMsKQhbfPKVWAB2njHY77447t",
  "key9": "3pDZNSTRdiu5GCjunLt4GDYyDCg9TdF2v6m2v5bvqcmoaBMTTTWsxqw3QD11r4t8J1ahMMutNd7YrQ8ayKfd2Y5P",
  "key10": "3LZp3R2aqhotLvv8BDKX2XsgitKQHpBgP1PetNU4WecocAV6JUf5sQ5qG8MiZXfhK8F5Sp2gfmamHPLGH9NiUfCu",
  "key11": "5AcxV3Syn1q8BrmSmRV7Fyn4zyhBzEcx4GkDBKA3iuevR2Ty6pq61UTbqJAkL7Q1VWdmFHgxYQHK3ogkW4gamiCB",
  "key12": "29wpBtBuB7mDXigd7CiRv2DyiS5JLqpNFhEdE9TiTEzCuW6h2u135Kwx29vuWNsF3pWReR8jg6Xb9oxCpfncJYVs",
  "key13": "NgaB7m68WBPapsiYhRcgrk16rCamtvnVsiV4cYywHWjFSrF3cMfKZA5LduRgh9Yb4EuYHNskxSBvZcEn8QGuamH",
  "key14": "5BcLb37kneYoeutLVAKfwXShJrWGS8gHiNmV8iTW9QsNqUyGkwka7YJijALNGbqft46139zF6fbUtCRAx8dL5zFC",
  "key15": "5RRBuHppgaj37t3pcDjp4YoP1aiGH89uUCR2f8E91u1vBJqWWQvaexUvVvLYwVgzJ4fxdoVfAHZMq9Z8XqqSsvoA",
  "key16": "4VvAkjGDnw19nPoAkMf3ZprPcdBM9YWeJL1UhrRbaYpJaNtwBiR9Fqrk6HyfVBgfDTo6wdXtPFcbrPySxT93ixCe",
  "key17": "3Skf155ZA7rjG8HY5bCCea1oe3CKYLU2PWWmzZDNaZvgVVNFFM65845MJUtjmu4nHuyN9dtTUhw8DZ4geZsMnEXn",
  "key18": "2nx448jj8rFPrVodiQAmH9HRbtp6Uez4fcJjRZhzfn8qMheAxCfVnbrNpxqZPppSwAzbWMCocBUySftCjqQQ7tV4",
  "key19": "2MVwsssPgamJjbTCj4WTtWZePLTfKybWHXDJ1dAkvQ1x4UcNR8pAcCq97E47RFy85gjPpCXAECycRbkSN8HoMPpR",
  "key20": "2CYKgShbVRbGG8dxvG3FJyDJJUDywmA2Mo93XQqWZNbjAzcqkrddjNPnz82s9FguTWdb3HHSe1HpQU7C1ahdEMGX",
  "key21": "3xRMXo9eQ1mreo5vs2N3bVTgHSUn3QCtbYRTEUSpsKEHb4D5MZw2sysxhKGh7V98B1gmspdRMJRtMfmGGHjhYno7",
  "key22": "5AR81d4tGmPa11HJGy9bW7Eqr4prfp868Hmk88asikRadDgHyWkzW7ubJU3gvenbdfaQSRBHUVqMbJCh37d8t6KD",
  "key23": "2Fsyuwm5zih7zcF9M6eKuZV6vWHv61piZLsKAf6BfUydtye8FAwnQaHDtUdW2g4CWb7p4EU6deeWfMo2CFtH8u9r",
  "key24": "35iBJqD4pCsKuMc519k8SKowKG3RzCj5bHTHVSJ3AWV3wK9HD5tWbkH2xRs6mEzNpX84VqxSYLt3kyV5k42vDio",
  "key25": "pHjHWgcFvnPVSA3j8gfBen2sFR4i6xgDCssjgVDwkBLtqhm723GLXWX1cKrWd7uka8XCh86rk249s8XatcdsJPd",
  "key26": "EeuFpef7iMGpu2CYt11ngCuETT8sWg8Sd4ciEgce2Sr7RBjx77YWvP63pZjmeSZCNbNyNXERji6uYWUcGNBZw8a",
  "key27": "2gjQ9N9YASb6wbED481KzwS34ywaYsrL6fce5uRCgJ9HQyxCGfqGv7xUJrfe9TDbbtjv5BBw3xW1s37MNu5F8dDG",
  "key28": "BCorGeW2iHwsQmjHwCNFnLTYnhM9zYDYZuRTv9bhvC2RWPPWo6KkXjzt83suMk7bARjPLrtU2B535ktbwE4VWx6",
  "key29": "2Bt3WZ2BvYQwGZyt4LAK3XEBKyFjos7b1hjJwKRWKDkgepDa1jp1qQPyd4rrgNnRtyfyapPBL914fXuSANAbJsLk",
  "key30": "5yhbTeYEfu5HMucBqVZLBNQ7NKYRxFYPfHfGod79RfGQmjmEiTVKxCX1w9RSBokDVnDTYJuSvCdqqRQax7FbhP4h",
  "key31": "4PKbMaPNN6rzHBjMfqVP7fDNBBiUsMyTP3H2M9MyQZF9Jxm9TmtX4zhfgJYKdbv6omKEmSMb3HUR7xX6gvdQ6VBC"
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
