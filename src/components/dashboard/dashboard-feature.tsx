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
    "NpkwGCmWFTnMYXee2P77WTEVrpPFtNsEpJh96g8aA2mD27PXDffU63qcdYvhwwkre4wBcbzP5AvLc8S12WZMxYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R6CGcATDBNDxMaB1bb4WH6gNdJaf8AZ1SAFmSEFj2jqted9Yra1ngRuzkfakUFbh1jDpYSdTpJbp3dgRyNEqP8e",
  "key1": "7jCmvbXVSJi3GCabiVYAUxCsV4jvxifcTswyfp1wozGpqbogDFjc4rKCitM5QvqPyVMPpW16ECvsAHnKhQnFk9z",
  "key2": "4BJrbuAR9WELo4PNhQgJC456Wc5gpDs2ZwmeKUFmPyZggyMjFpj3vN4bRQ4H2TEpt1Dy2qLj911rzqM8WsF7fWUp",
  "key3": "5tC6aQJTDFtFxH9yN1qCqi9zuytwpNjrqdj2PyvKUtXPEcvP9uc9D5dFuaq2wFccNA2GEpqYGGuFWAQ2HiMnfTuy",
  "key4": "7q89kAjnqQ8tffaaogsM6JKArYHvVan6nCsLpu3Z7TxrQZxW4kCaAivbWnyWAdJ5ekx1i2gE4bqXqoWaTS4t7YA",
  "key5": "546NdHnfZ4aSpiCutRx85Pn859qbrebrT1cnbAAiccUvkuRgFQZT1PxM8tBppHefPAdtW4oxxKgPGv6bdMtaq3vU",
  "key6": "5kt9hY2snUbbGtSs85k47dFAr1o93bK4UTaxr4JdZBf9f9WLDDfk8CnojMQVyNMXP1jjHpkpD9qeVSnuj8N3zEQj",
  "key7": "5eZgS1WT5RidmsVrcUJNeFZYvb44tfHf2fFiycTxv6uwke1Lg32TKHz1GPR76UY6tF5kGnsdriTN4pfth8mmKs2J",
  "key8": "5SsrYVuG7hXahzQoc359fAaCRu7L2dZCwpLZP4ZkuQgs97bMUYG11vxBeTvzPMGPHenjXJMCTkZgANoDdXhRT9tu",
  "key9": "2RJ9XitWxK4XHZyBSEet2RSGzavme3H4SrprwhuvRNmP444E7FXbP1EComURFp5N2hBPAhCWPZcFT1EmUkgyEuFW",
  "key10": "4rYpVzL9Gc2wMzzGPgCRpSoMT1xsh5N18J6daFpZZD8ETmK2fCGxJuuaqBnE235U7cdd5wdBuAovRba5tLdmaKKb",
  "key11": "iumYptMgifTVg4Qs8MWn3XJhLhfeGHnCzNRRV2bEJXpB1HuYffH9FDFNkmwf9xteDErjMRGM1R3e62n23FVVeXZ",
  "key12": "5qoKojhCcvvMCqCBam7bshyydFPrPuxucQui76tdpJ3n5PQcXXaRTmMogGzcuC3UQVPUyt9dxFpMjWPfxAF1AS7X",
  "key13": "56v12FdopnJEnTkZ2LihHZQqE2XhQs9ynZD8bpv5FEkKGcBNsu29RHiyfReG7jtJ4XE8SCAbeX19gD3FzWaRfJLc",
  "key14": "39iPC9k54KetyaQ9mJ26AoaiCKBmL2bUc1aw9dAidsWa4TmnokH1x2CZ5xzWwg6H7bzD3645yVZniDYpNJ47WBd1",
  "key15": "3TdFkuRE65VJziK8ojDe2DuHNfX7YBx2NnbUk4A9ewWxZaxBV8CeBpoAaT2h36hrdsx9fT4oSJjFeKovU4m2Fyg8",
  "key16": "8nUhPmwN9FLVjwUL5nB5v6gCjGb3EuqaaouCEWwfCEpirZKQmi5Ys2TLaCcC9EzwK3PfdYWCSckMh6TL3CKVora",
  "key17": "2dddrFrwfjQRNH2V8shYq1B1z21ssum66A8mSeDfAVuJwd3gRqhEYJkdemdmGdfCi7uzNhtkKfMuemVfEF1kk1n",
  "key18": "4wpw5eEw6GqBA1rSD34ngKYpJXzrC32v9CF7p7E9gUy2sZJoqoUxWQ2ECxXUXYzmSFC1J1BSs3MHib3twTNyQTVg",
  "key19": "QZQDGfPNdd87TjEdikLkZU2djZBoDf1TAVPkNqb3rqmuZHUh4tvUxWoA8aXVS6JKJGN4UJHUALJTPDBD81rtmkr",
  "key20": "T8of6y5vmCqFsEE7ih6Eivg38LaFyRQ6X8SwBGAqfUfHanuY2ko8Enh7962hR63tTbwkBGUia2chfrmEZR3C3Vd",
  "key21": "3ufcPNCDa8iC8Gmet7gp3NR1YWTCjUc4k9WKPz2x52x8vdFG3iZrASUk1YuJXao82ja6SKyj15TjnJs4qwoMJLRH",
  "key22": "wKSs7YHfkekrqjHtEuFZjuHwFjr1ndznESL2qgo1gUmRaQncRe7vS1j5bHFRWtDYQpztiPcrpKJ1QD9joTQVEGt",
  "key23": "5grLfYgX4k1VgnRRB2CmZVB8DezMrQgsumWh2LXN7pKQqyeWCknAYVqS6PKHLHGSx7qUNJriBiiexTfezCaAxm17",
  "key24": "7DJTWVVuRGa1TpGCYc1u2NNMn4aws4AByMgorjWAxmK9vZbjdCMJt4ZS3rrwQ8Jwnk798X8A1nb2EHtKiqsNVNi",
  "key25": "2vTHMXUqfGFj2GEGeApTidwM8uaVMZpgRsAGi7qrJcdocnheeZiyE9mHLBoZUk6oMs4S1vhuSWZPzc2GoPR9bKEa",
  "key26": "42NzrRHDvivkcAzfZJnfbxecvJPUb3YBxeLLRQYVxf2E7BHD3Bk5FWJMiuBHWaKednvukuL2oyekRYQwpw9M8CjY",
  "key27": "4e7kxNFXtU28yz1ko2S8zbt3S3VmLK8sjVU8x6cDnBcnrSYGGGBaXaPPq4ch5o6LfPCoYX7gDwzeFNxtXCrYGNdf",
  "key28": "5p7RcMY5mq4zFa8GYdmcKCKKoHsR2fRfqFBKS2v9WmRNLMvDXVr8giRxe9buoFksmsJ7D5GqBo3BEJGtSv3FqBcX",
  "key29": "4QGfqgES9Vy7VcmYSBJnydWmBpMzh6LYt9eCyRqqU8R7FiWnEaqW3X8uPt4LS6St8aifsuvHdNtJgsfC6QeHVabX",
  "key30": "5RtkPbQkC8frtMEaGcCroCyYptDZNtmYHHdXdFJzHwUqAW7kt64yvJRuUtPGuVPcU7H94ij9jvJwgFUCGZ1BbUFB",
  "key31": "3UQcRxwXVXgBdrUMiSz8zxC5KV5LtP2BQhr4sQHLgh88kELQKzpQ1JBUtRmokcePd8gakKfeXBU4yeyDxjUo91jH",
  "key32": "4HKgQi5kiVgV8k89kJdRdUXqNxLuA8gk6HdG6fwQ33omr8r8tn6N42Np3UTsiky22wpTZv4S2PAHzaaqYchDhKMi",
  "key33": "twrrZNQtu1LAxyHRh31uAmRpDzWZmUPYidqPtatPS7cUJrGYHLtSLvPHWfhr4LsvLB3iKuExUAfJBQF2Ac1BNfF",
  "key34": "4HLJYUuacC4h8mVpvpeYYuTkgvLZDnc6P4HK5nirdKotJvMUz12tYWKmWg7rGQN89LKZ77dD1deB6FUKFuheZ6Jp",
  "key35": "4d1XffmbaquhKUBcR4nK7nZYcEchcsfY6bD9mb2o8adTYEV6r2h3FEvMKycrUpARwL2Sfe8g5FnKZVKH6DHnPsK5",
  "key36": "2sqHr2F7Mt9Ppe6eRKWZ9aaPHysy4yBaK7WLW7YUjqKJkpGC2dhXqjdQWmrDxWsiNwqxEoy78DJSR9d6bijMdTgY",
  "key37": "2n2NPfPaGLHk1L9fzxh9jyo9JKMdXF9Rm1aaVvcghoELubdiPSfVr3XPqeTFfibyZZgSeYK6yqtkvPgTPj4mYTpa",
  "key38": "5n4zvUbkiyDfU3BG11e6AwQwK5evRfFvkeWnjRMRXx6wr4Y3gzTx6GMTxbnmcUgiuBiA2dWf2JMQn1bzWpdXPchP",
  "key39": "3KuyuVRY9SxdsBjQbcndTMkYajvK7qqYG9XGjQQkk2K8sYkyZAwk6HTWkYM52515wiUx27UgTYyAMgPFdENmVryD",
  "key40": "5bQ9RyZAkYE2g8sDrNGLXDvPFnti9qKtHYFcCttAwEjA13mHyeUoJ1fFAXqKYWcm7e4ThWi8jdSmadY13ceceVSW",
  "key41": "3hbYzbQtQ6xUYygW3z73nPzQGxMzVtRGpBe6s5UoYNNXcDLPvkwQQVr3ZdAruJ53vgNcCDi1j9QSeYYCBfAWLWGz",
  "key42": "2UkUEUiVSrByh4TbvMJRgL9oz1xxh42ZVqK7pmuBJLHxP8im4jB1ZjhmYHjoLPC4q23jEfq4cZCpJLfB13yvnckS",
  "key43": "r1JyNojhZqMPsSYaW6JGJE8yAcYMmXPbWwnhetpkqGMpFYr2Jq5yV5kfSGoj5ry3iN94LEyiVvgVmJCmeUY6TiU",
  "key44": "5phuF3MsEu2AS4MKKgm6ToGWrCGqEyr9Ja9CXH4ELEVmxWMjynZM9ULfU5J6733uKJrh1qsraciVfj26Qbsnwsxd",
  "key45": "kbR8THQ2DpUWS5GKcZ9PR4uMZVVmPVJo7WtqTjdETsG8iU512FbiRTgc7LdRX7XyDxwGtgngtAfSZgQPCPeCqwC"
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
