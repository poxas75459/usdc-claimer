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
    "5RVJPK2bdv7ziKkMqsGaKn7WcvWA44qsUw94oJ7z1jjeyYc87XUBAPpqexGzCVmYE87pu6sGMZ6PBSJdrKy7MQX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GiMQSiiZa8UoZEV7mTMuTnTEEoVtzHnHUx4VZxRukDPV7LRCVPBSJLzyN3sCZsMc4RSZXbDUSEQYHsubZznc9Yv",
  "key1": "5bfbXcR8Jjy7o98br3NnBUNYNH8d877PHZrrmGFL4bR1yQqoXWxQox2BTCwKykvdPVJfQJeZRf7VhGKuz634VeBV",
  "key2": "5578mjhnYM3FwZYw97c6c912CEv7YEVSksoZhtD2GjE5JtkR5c6ZMiE9UKUeddsMYkvyoEN1JPMKr6TAD6awcbfZ",
  "key3": "3aNVZGYD92Pe2AsXdoRyZsbFCJxhv3xpajrjVSxfSkN2vi2tz8EQ1CdRarwXNP84CxGYchC7HxDaJGTrAxnEJk4b",
  "key4": "61hrTkr4qLkGeHmwSJqCc8E76NBcQWHSZ1o3WW5dQeu9rUe5y13YnZLfh95ECNYSGVcc4tLBTajhFNNeHK7DLy51",
  "key5": "2ZN3a9TNbneWJpHZNNoxKauoLjPbfjW4upXQToW2LwhdqXetdcs94avQXJUcDyH1y2dPvjTma6TTahCLCMrFQCC5",
  "key6": "4VZ21C7LgC2yaFDAiZz2XcjjL85ofaUDjfsf9sX2c2vwASUYt3Nza6jiUrn6dZNkPiTuekiUdgbs44SQvnYzBcJy",
  "key7": "5kUwmN3i8md81fGizSLjqqyHM7Ah6NYvqCmzcDU3X23kjYXpWW3Yd58HV9VFe3gzfN3Cj6Tjiow7H6zky6GvX1K8",
  "key8": "5BK4Jti8xrDLkxzWWBkP81bXSmxbVrF8irdw8unAg7L5Ki744QaTs7eCobtbjKKZX4qra5bu6V7RkojTsnM4dzuy",
  "key9": "48vfZmDaHJSFK29LvWRyj5Kx6CnqeN2s2S2oNFNyS7CfWCFLfLiM248deFeeP2uPws7fFREnQhg2n6GuZiAgLgMx",
  "key10": "456tKBoynoCJoYLpc4oySXp99UC5U4Fvhe1b8cSZJsmjj7r88W93xHsXkMd9yoVkF3zf1i25fC1kojjVutBG8ujt",
  "key11": "4eWNUHnDHaCeP6Y7aQwTw86jTsQ2kJj8Gbx3Dih2Z93DXeBn9hkjbDWVF31ipmxGdfWdRQBRfe7QzzE4EzH7CCmA",
  "key12": "3wLLcTiBbZ89PNQQB4ASqJ4pCr4AeKcNgnxig4cLEoGkPBaU2kGeeWcAgSZWB1YoxScv5Sm8KKtyeeT874JHHsFd",
  "key13": "2jg5dGbLDQ4sYcsCamXoEXgv33A6AN5TJL1Yzz5VdEgULAcJMsHiWRkgqSydUGhcBDcEmdcCyG9xfV2yWE3xGuMt",
  "key14": "5C31kAbZp8KZ59Vz6JmHWqqDLjg3GmpV9t5Ray4G5ExFASi1U2TbqXAcakSvV51bJ93h7VTSnLSF5hhmzdMq537U",
  "key15": "3W9t9i52DqCKW2ZxcsUstf1nMyeoNjU32pKuwXU5WfrmFTWCwbzBrFMzLy2HA89K7Bv2AezxYVgeFPAyChS3ttsT",
  "key16": "5HTFc4AKLwjsBbDCpQPjtpnr6xwGUb56Tqfb549rSeDgZifuGQikNgw4imCCiiUwRirbVpyAzJVAUnG791MMHsvY",
  "key17": "2QJfLBnqqF2XY1ceCvzheLxpPgC78C9fv2Putf7HiHN9dGQ4YX55QvkDkfWzdHYC5hazHGwyN8xupr3rQRdJ8bc4",
  "key18": "AX8aapirjHBht8469dAPUXuyNsUfbNG1XEfyH5v3JT77W98Yy6o3dwtYeVNoA3EGkc82DB44hsfMSXHQQQqZS2w",
  "key19": "2CWWXNtXRpspXuTPsjNMB5vfVusVc6GryKBkZy2yM2Vip2eB4MQ6Yg74za7n8xp19ojtN28u3V8AuHAaosFFhfTk",
  "key20": "4YinBz2G7g3VkXifVLW99SBjbNRipxU1e41k2QbZbJERy1apz78Zxt2T29WcboE1Qr7PEek6BjARUSvAP5C3ppUU",
  "key21": "4TAgkToFkBrGYdNFdeBhCafmoxvcKnRZ1oU8Mao5C6XW8M4FZLMwpfbVGXtqw9GTbNFkoYyjp64aE5xS392bZHz5",
  "key22": "4JkscM8ihrzQxXkXMh7Yznk4ppUrX4wgsnRZ6coeL5PX22TZWFDJup7YxSifncsBjnRS57RXeYQww9HBcADMCPFt",
  "key23": "3up4npLMZhzsn1vX9RdBtGG4qNkfaSLaNzuz1PhWSoPTL3CpRMwnyJZzNb41z1D8itk5buqE19XqBpMBLsR2pXpZ",
  "key24": "26Pv345DaaHgb4ZYjHaNj5wXUWBnKZa3qg6zuc9gK8ZandYE9fRAuHtimfLrEhfWGiGMPen2fzmbCG78ZucS6TCG",
  "key25": "3eDHT1N6UCMBKZChH14GuxnxFZfquyv5NucpCANfcnxsAFq6hXT269C5wfPxhm3ABMUsDkpLJqBfqiYDLk4WUfu6",
  "key26": "2TkVvxVTbBHJsK3D2umiJmqm73gXFNGjVzfiww2cqjMzkCYo4BG8pWgF6hAQtrNGZh2EKbfA6Um6nt7hS8kdXzoq",
  "key27": "2z4XLK5KwS8Sx6kb8mruepfqG6iiDDanoZTWUGCNCV51YPNs1d3rD4S9x48bmZWGXhmMMFobmsHMN4HnkV5vRygo",
  "key28": "2w1YaBATnYBQ7k4sPBz4n5pYBBi31rh9YLvWaXC73AHSosgW11LHySBZuxZgqR9Tbi5gvmPWY2L7DJsPrejpwcYE",
  "key29": "NtwDnEhXn4YKc5PqFk2bP6gnWYatyxBhhcGVbcciPZMXD6gYbdgtNzZ8AygRm2jKmE9mnWsaivkfxCxYTZRqh4R",
  "key30": "37zs33YH2VZwPjNFbNtxsohmyJYrDAqQnmWaSUYvva3V1ZtS3De2JVPQNTXrH19yh96dJP22hKex4M8nRoj8FRMd",
  "key31": "4Bjv44Ci6njKPK1FTcM24TQ9cuXXcdgg99b56SYGZMCY6ZPUhv1oNGoECJPYmKyBypeioLDDVZFdTvyLYqpNt4RM"
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
