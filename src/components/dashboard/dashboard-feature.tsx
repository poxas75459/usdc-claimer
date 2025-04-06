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
    "2BkCPqfK9fBWMgLSqFVBBu1Cwq5P8av49AVCWgzon7izhWqfDEcaUxBdtJ8PsNtox2mxjSG6iGe2JL1jJ35mGDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DAA3zN51E2Qy8tf3NeJszuSh1JqMF6qh6M6MtGc53CUVjbGLtgXFQ5kSvwA6Biwx2w5zPrBZDiV51VjDvdRndVE",
  "key1": "5rBVF1QHqVXUixbSHFukBf3MUzqmbf2fXDbSFvfVZJucdEA2DVfFakKDkbqb2AotvKurrdVbYUhodkm53wxvPnu",
  "key2": "5FYNkZ3a4b1fmxM7SitxpE6bVC23wmTTgAkikWKPK9sEMgTNxyFgL4pNVKoKyUjj1Ab39Lvnx99pP4pRBbpRNgff",
  "key3": "3TYEZFfMYkFT4gRYK7RAFfhzNRU6GQ1nQ48JawA7Qnhkk6WAjGNKXRZSaWkFeVL2SqV7UXo1aj4792e54Zx9Ktx4",
  "key4": "4QafeRFUn4yuQ3wjkaZZZepJWNkSos2mzAmpbWZGkikuQcWFbchynSkAzjAsxVeMm3t2xhkASSUpMeNKfcpQegh2",
  "key5": "29hd7tKveueK2TiMmzALoFE827ooxudyF4YhqNdyzPf86FiZFK2mVxb4xts3mDtfGDcaF9bYDMEtcDkVsRBkSsJA",
  "key6": "63NTttm8Ltz7s3KWVSi5z1u2zpLVfqx5XU9KhP248dbmdx4R7Hj3sijaBpM5vpDjkvMe4J1HkUKVM8ijapfiNAkb",
  "key7": "5dgnc77u5fcZA5WaR5fKmAMqbDjT18mmD9GrMr2NwHkdu84C2xCeYCqjESBsxT3H9sSDWtecursYs6NvoSW7sgFB",
  "key8": "2MHsnzrShyEdTWbDXU7o1WzR8bzo8VAqvtGEUW9jUhWKUc1eTbRDvSGxL68K4pNrKHdPHmfC1t8TSKhnkFY5s21C",
  "key9": "sRZRppmTfa4dDdEaxTtAtPFbrkKThQAvbbof5CJGJ2zSYoRsW8ct153dWyZCfHTgtufZehxTCd3RikWfMgVs6s6",
  "key10": "EaWyVwu4mU89xqumSL1E6iNFvxCHFwk8bDVgxGSAV8UoKdZTskTUtc6CZfbXg7xUs2Q4hznApo8bLhLUH3bBWpp",
  "key11": "2ftXV5H4aWKXYkE69sogkjjiExxUuwseNxGS7v85PhznKv1fbrSN97jvFgh3e2AgyJHGmxYHqbgffAaoY54T4xsY",
  "key12": "3T7dcKZXmTipjzYWTzhwVxuocC8uKpE67mcswhycMzkK9wnNaNvUDt6nSwGpgV4Sd6H1UshPbukv6sXkFZB54Qeo",
  "key13": "4RnreoCHuTyLQmRcHfoNxtsrFUhFeDCegKk7SwmzEw7Ky9unrtVbxHJpTrGRKQ8SuziqqQEbGocvGEssnqbkXfQM",
  "key14": "SijU5RXzWS42B4R8B9agwRKm5BRZJf4TE3jJhEq9DZwiMU7nYN3DG3Tz9YP5uXSnfquVGip7c5dFUXP7KTmypZY",
  "key15": "4poaqFUkCUX1c1yYkZ6cLxS5h9MGPSJnayh6BSqkhMo8xhajWFB1zPUE4TY9HCRzS8rioeEDWfGxCsdcM5SVZZgX",
  "key16": "3mARzHSTgpQLicQA3qReXZ73VmkkSAroyybfh7p2Q3GpqemerTiMQJmFfimpEWZGSthWNBNogwsCeGjrffMYjtru",
  "key17": "5E1D16mTXrLqc22JoSWx7Qr5DDAQ9fnQJUmcSkydWQx9cZe56NfaEUUp6TqqqSpHUcDwKyC6RtGjoTw4AThJoFdK",
  "key18": "427ZRTJ1e8NtWCF7op19oL94rA18WNXQc7enNusVxkhBb4pMk19NQW9YvLngYEV3YpPbRtzPUfuqbfq7TEm2YPHE",
  "key19": "ec7hphfCc4vQjxQnh1JmZnw6YJLvWRtscMszVdRaxJddLjPYz3w44fJVTuMS8CASBQ6YgUQeZ21URuHw15Txhck",
  "key20": "3zpfivMiNKdeozf4PhrreU1qDv3tRSRtFSSpPKMmv2yrCYkAkM7N1dpQKaNFQR1wdZZ3fTdDS8c5D6dj7b5YZwtr",
  "key21": "2NThAcK9FFA6mT3MqH2vbV2UmJM86wgVtzvZcEDfWF1YQjpd1F6dRC6EYaZirUctg5nQK1AcZTb8ubimryYrTqG6",
  "key22": "5cFEwdbJZ9KmviGLMf9Lz4ighQrYANWALitWRwjG47BTuGYyXpv5fi37QLSETKuZYxec2cB7euVhWzEF4g4oo92F",
  "key23": "KRgVpLC3qAhhYzybGMXLDZUvoZtWFfpw66oVFh4biesf4Tg4gjeuExkD3CKxPqYpWRkt9xRt6ASrgMTByFqeCUM",
  "key24": "5vwirYTFAbT19z9Ysu8xpPqGTo7rJKVRxd6JTaKpLnb5Spt5WL8vfyzuLVDVaatLJNcyhTEyLPcTyJzCCiLkDxbt",
  "key25": "5NeYtKhp3oE1TEq1udPE5AXkAgNZDs6noE7tuGY6jGmiNm7RB2JCXfUFWyHUYW7yDnLYYVZTYeRemM5m6XMDFsuu",
  "key26": "49ozPZfjnRR9wBgRfRu7xLaUTtTTrK1PiejRrS4E5mxRitvCXVsgmUZmbL4G2Zi91KbzvvF9t7gGFRqsx44pBCT2",
  "key27": "57XBDM4QgvhLL2izvz1CKnR59N6bZhuQ7DV22srbtbLAxePXqXzZFwaFAmzFRMsFJw7kAorKffi34wrNHYGbSVv4",
  "key28": "21ZjRARHFdi9uX3uBoyxVxixCagm4WQWWMKwhTkwaLTG3BFnta26WwRChihN6PwcYGVS71BJqUkqajLciJb9uXp5",
  "key29": "tM8mdLCGih6zwMQ9EmdRCNvcEzUaQsSSq3uibAth932mMQD7Ls5z3w7SCH1LQ5mkzxwUmaH7PM6vM5ZYPeGcr8K",
  "key30": "62gkj1Xozzjk6aXt8xmK1sPpAXAeYMLqWySMAxRR7qzjbBbK9z9dbzq4SinT4t5ZmdfkEnUCzMuBgkuQKvVodNNG",
  "key31": "3RvWa7EPYiaBrRZggGtKSVFWUpRfABLgrmCPSPMWQdhKnayiHFju37yW7ZEXwtqZ4UHibe3XNTiDLhtiEiFfJTKu",
  "key32": "2ZtZokJE3mAutFGWH7ANpLZwh93gRbzzeyA33cc9iMsswM1cNkaKV5c737SrSnqxEqMcEazM7APUnmHbg9H6DNG2"
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
