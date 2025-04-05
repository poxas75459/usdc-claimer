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
    "52swL23tXKGykkim7kQeXDKyXQikm6rnUa3Hrd197mGGeCLQ2QehS6HE4nSLCUignPhNLUzukN5TLYpugA4N7FWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TcZ6h2QZoCdDwtcxtqcmYwuXFWtXTfRLUwqgBJeNYkcxunHhQDQtM5mnxKsahD1bP9AJ9sWHb3v5EP2kc7TBckL",
  "key1": "5qTxvEVcmm9nLAefAfsxbsnBTjhv3jRWkpxihmyZTYaNny9CRsKX5rHa7t9tC1w4DQ91hb9xyHVtofhXqpruJBvk",
  "key2": "2xWVKMfi3wdc97LbmzAFJtt8HR9JhSHEEzM8yFDyWTaB6uwu4u43xweANXVKteLg82shFY4atVF2aatcYzTjTpPr",
  "key3": "3S8M4FshnxAa7y1TMg5yoiSXWGBgH9SNQgXYEzbUF3zMFgv2CVBh77nry7foSERidKJwRU9MssuWrxP2nw6QfYsw",
  "key4": "2ErnpGj7a8rjT4XuABV7cMNHWo69iy74NsV1pGQ2xTYVo3A7j5M8jeH5SWtvvmMChnLrJrk33yWXijjAnSekKeLM",
  "key5": "4hgBgSXaqiPsDo9QXqgCcvtHmojGYRT1QQpyvLSVikYF2wnFVoMGTtuTPKi3T9qSXu1Le5EsW8hE8Jv2w8PL6krJ",
  "key6": "4tWsDZSeNjfQ41Bpxvrsddh6Yt8fAaPg26zdrZ7vSgSSTjGvwzBVhjtjsWiFBoACF2phi1xV2KsFZRuRfhzvstnC",
  "key7": "zZ3T2AmU7AASR3dhr6aLRrPg5t6KuTSJaB2omXbAxq3N9fASsLZVmf9aonXzKgqtKBKg1FSWhkMnjRbS5xECEFg",
  "key8": "6y6SMBEfvNhJA9E5RSUySzzUPxdkqUMLGSLT1btaLGo8bwbwtNUZPcDtoknCritigqtgHmuxLqS8k2WoKUWMcVP",
  "key9": "nx3sT1kAzHzEMteMiQ9A9VnLf8STfdQN9NZno7AmHkZNDTiwEERwqHcdB5bLEU8WUu6BdhGYhC6fgMVGgrLopY8",
  "key10": "rNGZyoLSucuUDQSiHueAjgK27iotGnDkcgGBMjHMGme82x6NPbTTHUQVXpscxn26bL9rEquGPmDdK4saCr4M9A4",
  "key11": "5mejvChRXo95Q3ofJHrX6bp4pmFXMzEZkAF5f25ayDCsBjjfqJePRiaon15FZyHFLNy9QEBDFk2fpurB82kcn93U",
  "key12": "5W2exYc9tYqAk79accmK8mKpoUFhiZoe6uWNdP5ghLMJDRZ59uAPJHT5zAKisA3Lq5FCoJV8bCLvZyPuz9mk3UFB",
  "key13": "2aKymmS8UtFtRSfkgRAxA35awVPqzE2Fx2unMkgsHM51jJarnVZ84mN3GvM9gGbwssDJi45B4Khi7L1JQFcVqiio",
  "key14": "4yvK2QQYi2WhBnGQBaywecK1xmcDAfPTLfuWgMux6DV1Xpo4JV5PMgTV7T2AiVnbRDCK2Ljrw4MiL6yi43qfY4Ar",
  "key15": "4TXMBRHMy4nVQoZBcSC4aSXsU27vv5oweTg6MNRyECqoWK61aYxr8fE1SCa1BpT5fk2nWQGPv5gVjKRCcqXQGSxb",
  "key16": "65JWQ48Pi7UMYjbphMN46SagVAvxFym6pcjnYMeE8xXGanUN8GweYnhrUnbdH186x9pQkwbnxY8sNxrXDbUmbaVo",
  "key17": "4zf13D6uJKTcnp9Jk4vxKTiBUGVtvebGWg5vp2bTs3pFHqDeCv9FXF8b4EFwC4DSxXNuABR6phyMQeVMmHbTtY7H",
  "key18": "2FfGk5Fu5cPutMmp77fq8cBs3otcv4FehtJueAiiEd1vhsUuewVsuUePqt5J1dT38Tz1pTAZmHSvysfv6VQXSz8S",
  "key19": "3zHvCS13YAfNYpa2DnqKMNy2AaYXiFeJS94SPBxUn6UbeR2L6PwoVgqHmwE4HoVGFcfB86k4D6QcJEkpHk1xAnBq",
  "key20": "vA5D9Jvuvjcn7waVJynEsjVdCGHVfo6LZkViSvYksJXJzrrN3wsVLjEoRYnkCHmWLPRxBYjxspKGA6gfDbADHrd",
  "key21": "3g7xkZvNMv4p7jzFd7RvCEBiQzkjtsNMyt2VrjkHGStW4RfxWvccbC3usXLTdqD3CcSDGCNbMDrqzxupiETTCRyx",
  "key22": "5jRJiQHNh8SAjTLz8ZJvdWCr1ssoLzk5oqUJBJdprgt4D1tpL1M2fNPagtybERy4Y46DBAsFPGBSKBEy59cDfM24",
  "key23": "26Zacy9QCS4r7uHX6LpPk6BEr32pVdXsP4DL2poWA85AFveDuusrYmttsTJnvxejnBQE1hvHPzdP3WtAmyx8kYrZ",
  "key24": "55dh5QBm8kvZKkZi1w1xzsmGVSezYmghueo945Qpa5LRNyzc5hpyN5o3VeXnXYbc4Bz4tgmbAEbsQYPwBJsQwVEy",
  "key25": "21JpdHBFcYyZqXsH52AeMsnwCRXUbf1yLuj98ASRMNKPuYwyf1sXZDtMkmwy5Sq9aonbWejyD2ZmEpCVzjXSUfRG",
  "key26": "5d2d3ie9aYfeszcq3BBx4zsMbGG58C1xnKWbg6ZGAEKsw7t16PABBDJ7L8aSby7aDSY9jWm74Wqxr2NLrwBPPfQ4",
  "key27": "52PT1vaiKZLsyH9a9SkS2QGJi586eYxYjbjyYT7Xq8sV3RtWkgjr91HTLGmocY7LNXG95AZT6Q4xL1969ySA3KWJ",
  "key28": "ULDQDbJZVsQdieKoQKRYjuRv7zuZDpBS9ezBMsi7T13AxncHwTpGTH9LoRRahrT5ioaazEbH2XRWa3pBFsTg9p2",
  "key29": "4fji7BsPvwpKjSEvyt9HPwENDQBc7n6QQU36CEkjK2FU2Jx3K8LwAkYvPXJnNUaZen8UYFJJpeR1MLNAvMccUPnM",
  "key30": "2o8gz4KXFnrdwmWY41d2PqWL36qPzfGXLk4PTihYLHv9mF8uskMdTXw7XWJpe9Chx6hZ3vCWpchXV12Sgs7S8Ck8",
  "key31": "3X8sHrhGvuxiiJUosuVwAsmTQfvJjxNoHFGP3gdxN1YFqGePQkLzMZMN7QLRSPiLizFyRwevVrYJT3C2pKyZZ776",
  "key32": "64XEW8m1iLgJEExpXKkjxbuV3xbXD3TzptDNDhdtbfjSjo542LuzfAzKoq8uspbhWMNJPoS8Z2Hh1tEtnt6HRjAm"
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
