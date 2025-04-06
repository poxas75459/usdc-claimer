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
    "h7NG22or2aSEsyx1YUvs9fxJcnQMCmhhpioLHAnz8V7wrFrWL5PhAufKPdmKdMsY4gJFpVaE1ZBbFm2iuhZDo1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MqRy3aCFu2S3Zfty2AccNDLThp3eyhKtkfUw1QAcZrXWDh2ZhgXvw1k61hgsP4AneKHYbjzznYzDFyEjkkiD9rs",
  "key1": "5YsrzVEGd8nrUJmNunnpNuMnbEhHhXPDe6bTtgPXRG5Jb7doXhFGPrgYdFaszdZuopcc94U3SVbvLHHEvFU1dRh3",
  "key2": "4vz7dyvARxdM9TGzmZu2ryzPBbadX6965YqCWZ3aQuTo9G7SXwygEC8uxGR8uGduzbrsRpoHwF8QZBMvrKydeqvt",
  "key3": "5Gn1Ze56u24fwNK12aGSuvnj68xBX6QgQCWg6gLxNQb3jR8TSWwvRpXC9CY25ePTyLBgyioFZjfV1y8YdFMRuNax",
  "key4": "hTcgymC2seqiN1TpVb4iYJmTvNe2V2SgZA4UvYyg1VE7H9RNrLdWRWvErBTeCPYNGGHDt71hwcXousXiwmcLFyc",
  "key5": "5aAeAR75gpUJ7LPwE9743gNyGSVTBXcBkNX8qWKmaeVP63utjVtMoPFVZjUNRSu6LyPqx5QX6s5RYA1YGT5F5R1i",
  "key6": "ZBeTLYtubxYAuG81n9Ta9ymdCKmcNtq4pYdKkYhFFXNWXPYR2DhQY9SLVnabHTDJdSCivndHHqR43xsiaA6CSux",
  "key7": "jLHD5mnqNXnoWS6h9N2RJfgh7rhMLPc57LK7h7sN3kagEixf6B4YrBSVoxBDFM9WdFznhRG9catXvHbtUTczE26",
  "key8": "45FtvnfMciP58nzjs8VvvtwK2KMyDqxPSi3QtYNfDZAUEFQ61PBheP9oUbreswZffEiifAycfSVaS1euC8Bf5oje",
  "key9": "2uT9APvVp3BabjnbALampDoSbPUkiAxFSPMzD7A6316P3vYx41gWNRtXxF1r83tfmDw5gSVkRDGeEcWdvdgTFjLH",
  "key10": "4TpsWjcxoMqnFspmNS3rr1Bv2eatETTRMW5UNcAA8Dkk98TwfANf6eNbTdmCw9o4odaa8gzFAX72pekzqSCHnXnr",
  "key11": "3kL4cn7kCXEFcFwdUrEG8AzfHKgKtYuv9hLjBTia3ZYdzcaYxBptgWnsqXYtpigjsdoUTeWEtufMx75aXyziz2nQ",
  "key12": "4WDiSrnntGjE642uumwLkWq9viKJwqAfqAm6ygYC3BcRiQo7FpHNq558QHdd3LqWS1vvmbarW6uSmU45sZVqNmYf",
  "key13": "fNSHzEwbUc22ZuHaTwmsZcHPznjchEZLaUUUzmBcGowNEDj6rkgzRCL9QjhTvpHCHLuE2FFvWmrbc7yChdKJUfD",
  "key14": "3FjzMxiovCcaRMJYFZmxJbYjiBkkMcXRouP6PKJc4x1a9NiYgeoaRotLaAhVLw6hVC1fJjByWsHnvwFy6mdrWoxR",
  "key15": "4JSfE1KcwThvFrkjiNMnJVJqSJvnTVtPYz1LXbUCaAkV7utbkx7G4Fv79uMMz2gQXDDVSwNq3YRpW2HdMa1RcxNS",
  "key16": "3AcryTTZVKR5PGACz28CF9HvxMiMV5hyNAEg1AdFWB42vZkyAYekk9xePc4cCwYfRH6qbcq4UzgEKT9Rx6KnFPSB",
  "key17": "D9JiNk1iyBSGPWJnK6gBG2QJUbxyXBAUDGTXx7tG2rzA4MBhjK9T2FXWWXf4jYWjNbcjPSA8EMW1XpjFcEaQUfV",
  "key18": "18P13UfEHSVTccjYrHHuRVWNBPLEGzN3K8WQF5ZbwJNRe6m93gG549KfZxJiwAecuH7eQVheJTrRyExppXiCJ2c",
  "key19": "42iCvsxoirStNmL4QW4UtsqAvp1vByKhqMV1zaxEtnCnKaGPwSnUZeGeu9WzKg3ERX7d7yhYbDy7byra4E5RnUWu",
  "key20": "2bJCWLru2LGLWDhY36knwPX1UDjiMdWUwegwvKLC1xQ8E42mdsvG7EH7awoHuKYquQT3KEbsQcdxkcc6k3WF5Zu",
  "key21": "8WqnrskSBpWhFbcnEucmDeHjGRxQ14QrWEm34aP5u9yTi1ZpQjj71bxbCXANgFJdsxe1qKHFuqeberjKQQpTQ28",
  "key22": "52nncNrMCiBoBXikB3bnFojLT1Sk1m7Cbg32FhCK1pMapXtmMzDs4fzgbC4qxbAwCyZ2x7de6MPKkgvv9A63kehc",
  "key23": "377hK2xxKuiAMiEZGSkC9aiieoaURoy135yzMwazJq9vpZER2M2bm4p6uKT247zhzSuxEJhn6uYN5ZSKN6B3sGZf",
  "key24": "5iZvmVikCY2uWb8pTfGrfwRKqE2bTDC4vivJ8DCEonRy2VQk1sxZXe7e4PE2VS2VeminU6zJAJXRLB4EGdh3TAao"
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
