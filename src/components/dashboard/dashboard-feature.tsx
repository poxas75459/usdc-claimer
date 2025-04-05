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
    "3VHeMLbkvVJGedFuQcLBwHm51BEuEgDr8EcbCbun7eqQGwi8RKwTz46FtgwfbDy8JCwHgrfWFVNvCodESBhSgBwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MV5y88XEq7pyEzQDmUXACbrJwKGrv7UC3HXJ6EsQ3RA4nHCMj1K6DL1kpbNB3A9FuCBNSJYpDPSKR75pJwwNABM",
  "key1": "5ixxg8FmkBGSrf2Tm7HNxwsfNKWpPdaStBJi2dzAdeDxXyc21yjYQG3rVWeUgeWkg5x14Fv95ADq7JimaH5fzYdS",
  "key2": "5cVgTsmtMB2Ji9eB9NFCsGpsqNFQ53McnxP6rwZTrmFLZEqHo9fFTBzXa4qmYGM4c9W7uBRS6uGLpF3ZesyLw8SG",
  "key3": "rcebs2pCUQsBLw3iyQXJkuY4viy8hCrVxhJ19BmHZtj6GHWcnySvof5HhPe8efamw3gHW97oRmWWBqoQMLGT114",
  "key4": "22Wf4xvgTBBd4jtsarPvHZsASNZ9BktNdnFVi1ZKhcq8hDfthbvCZYYdd8wDTJnPs5FU3QNZXgEYEv9CHfEYDZXj",
  "key5": "3fzqVz3TipKrfHRfeDCESAEpPW3Mj2Rz5SDKmukWTS24rY27Y91CorQFfXhUndvip4DH18RTiDwkWjruZtbpmvsr",
  "key6": "5Km4qiTHzfx2erfETJQwFz71kLTZ28VqZVpABbjWzQhsKNHgnHeLrxXHkqaDQeqD5iD6ERfhjxsLTATdJa1sVSpR",
  "key7": "5oH1mqehcCBYhmgZLUCQLbafhhCY6DF8YauLpQopBe2oA91w3bwECNAoFh3PYS3RFmQ3d67kV5W6KMTUZUhzhpxP",
  "key8": "2cfiUoCyy2yKKyYy6GBufhWspW79Lo3pEEE7pBmorR13W3h8G7BTyBkptJ4SULjeb3ZDK9siwkWXXJrZxHsNKS5a",
  "key9": "oVZxVWi4bbMjHdJZWAc6phyzxDAwZRVhQQ4tkQYzfXCDBdR7cDNPSDvM4BBPwAFtx98VpUcuL3u9BJxLE5vQi71",
  "key10": "4GkGszRNMPXh2UdrWnVqRHzCcw3dN1gxW1jgukhqDwGvcPXChEJ2ySPodELJQjiWZKWgNvN2QWBxHWkzy1s6Jw8y",
  "key11": "4ufMoERCcHhqdREahi1DN7ALEny8AwkJ7pBHk19q4Pzw8uVVcwTfy2PQSmMC1eSLjLwpuPxobXiKBptfiZrD1uyU",
  "key12": "5Q9hjLSXYVrEQp2tFEPqhgeiaVjv4Q3zdzsKKUZDpR2Qqam8mfgvbvmFFKq5FdoPJPjHZMKEbncmNbLhDgso2S6M",
  "key13": "4vRPukFKxpHHy7nk692y451KXx3LCU2mQbdqWWDmMLPDfaKLZkcaEPhyTKsyHLCRYA5NU2bfdUByaJc4oo1wuVr4",
  "key14": "wd1C16ZjE3n3eU4nPecRg7uiWGkGDXLdvWrc2Ejg2LcLraZnt7hDDi9zuaku8rkybo1yFDYJh1xLsyQbaZKYL2d",
  "key15": "4n43TAwdYDAtmGVx582L5ao8jCDaMCuCKSyUewSVFZqDVzMT4M7wmjQjSMfm9XLJEsMqk8GWcoD4ozWicqfCB5pR",
  "key16": "3CwVTcdspYswKdzP2t3op9xpuuhCvDVWmHCqRsKcpGgGoJKvHQHjiHNXLE7SFsTL28RUq5DD5Zonw49QQVxou2SF",
  "key17": "mEm2e39a6xJQSVmmyDS55Y2cNB75ij2sqNZzxo1YPGASwKSpVunSpb66gBjvwymF6gtDLDbWSrzfPAwVBoctVN8",
  "key18": "2eUQPat72NujPWrXebAu5q79Ffu1in3xWn5DFag5gZYoB2Y5nfJestZGKH2Tac9g4k4v1kMNT9RuVuRpngGFfQG8",
  "key19": "36px99RSevJJvA49GhbN3EQqGFuE4GpVi92GoFDduZcR5pB9fV74mQ282pdVb35az1hgVP2CC3T4MwAN2ZLBpTgA",
  "key20": "2VRhaBr3yXKunvqkQyeBqYT5DQU4GnPWK2DLPWZooazaAFTcHvopLFqvbvKpDJNmMSfeJpiCdHb8ksaRGaYauRX5",
  "key21": "Sfa2H3waBFcVqbuR6xZSeyeo7e1eGdyvEkVqUFL3EbbifxYzLy5vKGNKnGQk67KhDbcekhkadrSQoEBpQ5HmVW5",
  "key22": "2iMSvv1HCePCPkgUnxrnkW5DkhJp9E2awmLqXX3tYUgPcNigkfV9iN1KWBHpWWxZCkamhaW4aqZJGGNTDLzy6eqi",
  "key23": "814JtAFJziaaekEPAth4jX9C5AmRKGvyKgADsVVUK49kGSVZ9o7JKBBCGFcmTGHyK3n8hzr1cB3Bb7UyJJkjuch",
  "key24": "CcpCHpiogZhSFpdkyvrVzUdHKYExMKxjnm4YCnSkB13tuMoDGxDETUHcgkowVa2F1SsnroQakZhEmAP8eoyra4W",
  "key25": "4bUhEChse4DJwZgr9FsGf6euNStXAW4nUBPweStCbGsfP8LmZcfWzd7SnNsdp6nwcKaeKtraMDvKvvydBuQ8D6QZ",
  "key26": "5NnekMAqFZNvcbuvvXMJRDnKZtpMoXnanav8kH1WKhrQzYt6EamqFHg7CwUZUGXqeyoJj5NnsrfUwgz3jBz2k29J",
  "key27": "TAN8zVUMjkJmvMcpzBxssJWefHSkaUK74MzpiqswWgpAhHh6TCb6F5bpd2bjmF9kMPXNdtBArLqqVNPRq7Yqqn5",
  "key28": "5NzyhiYJMMk1Sy1BAqXxaL6qMqGAAZUSq9kXQfZq3NLrJevHmbskCV6D9VeaZvPsAoFjPsysVHxoPYwyNj72fRA1",
  "key29": "5XENuE5axwuxYNSn39JQf5tBqHFKhdbhDLc4fTitbJXNAymeyhzMRovbh6XEawht5mFa2LrYhjCMgmf5dtVAWx6i",
  "key30": "3DyBpQGD6YAQMv5DEdwJLaqnqVGEKDer31jytayz3Uqw87u84TSHkzujxjf7APou4miBb5nT39ciknirTndJJdaz",
  "key31": "5cUG3TGbKbBNCYk2KeLRHfLTvs3KcEcJ7WUQ9bHY2c4DjaSJ11dbp4TZQqCj8fypGNrqdpSqY35Ltkyqpi5opiG3",
  "key32": "X5ttH2qgdpdvAL9NHiTGPc8G4r2hJweqbbNqnzucss9TxWYEWQKGrDYYmsn8eJNaumuC1Dcqj5QYq9fFto3YXmm",
  "key33": "62T8CCsBRvm7c76spbibgw2gCX7XScN3hBbzsYpsrP7XJmvGDUxGNL35xoTwWcEcqxyq6xE9pzvVvnnwYdsBksw2",
  "key34": "5g3qsn3vFLjAqRfjWDLnaftDE2NgsgM4uAWsWuvW99gj5rLwJ8XVjjYs4RacdWj8secL5Lt9PHoDDEB7L3zD9f1v",
  "key35": "AvZDMsgGqKdS4Fe1snzKyN5k3R796zXVLcxzovZVoCiZ6Ve84kgsBKyRto1nwq6GhgQ8xDcfqq7KPXASZwDYJh8",
  "key36": "4ssLApHQ7psmk36qvjrcFtjcADM1nxe6c4krMTDk87bqFqsWAm6zDipEAhm36o7tx4XyBNZXgtJX67ye9W7nnT8E",
  "key37": "4F5QSNzNfQJ2PoHDBr3tpLhY9mZEDTRqe3aSwXtVAo678dRCbmRVcySEMvTV4nvyrp9v9gRruuMTBDdJUwQYnE4k",
  "key38": "23MuLuiQDq9XEeazEzFk1DtTsYNz4Dzqu274kXGkrtWcn85a5NJZpDh3iDUsBCxPhQvVkUL212QGNsrBNYu6UJ8X",
  "key39": "33hTSJwNHCJ9nrrzH9nqGKJrTW16oDMFAcRkY1LxBxqK2McdKCpGk8MycNXU7RqzdGBFXXgKrFFXrLXpyKaBGRku",
  "key40": "5o7AixXnuZwfTVeBpgT4XNcBAUWVnLz6yEuMFLFZLaaBKQE7CzYPCMnEoXr5f3tawJWoth98Fb53KzAQmRSh8mXu",
  "key41": "5cLK54Qd6DmNmVXpxDW69KzaB19BhdYZikho38SRQyghGjwYpayW72yyFNABxWnSjnn46mCXjL5pe5Rwn5Ky4Sto",
  "key42": "38UmkcC3XzqTda94cgygnDd9ubM421DfAL1avLbzd7prXRjwm3WRyroGJfrabjwPjCofsrRtUUWfPDx54QM859tb",
  "key43": "64xhoxNUMard7K7sAcbP1k335U1H2kdjbbBG2eXic8J1wKD7YQR4sUTU8rcEddM2SRvkAgiPahhjxSberD8DEFd7",
  "key44": "cM9GqSBesju7bowhfiFZ3DbGz8HuzTjDpk31S7BbLQucZ2Sd1KAy3y3fXPxMRfwaRr6SPoJwHJ5bXjuGSLTVQAk"
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
