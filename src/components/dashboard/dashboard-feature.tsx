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
    "476XPD7qshT8XYta1V7phXShwQFBWVKhmfXC5Nx7mqcf1XB4hL99iaSwEjnqsP6LJnkSvsyW5o8bPydg3K3fjNH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54EzmwtYqvamxwssRp693wegNVXqb2bpVt8RHp6DNZx8ZdTXB2obJCpeUjU1X7L11cJHSkfXAVS6HTY9fQx36Led",
  "key1": "5jSMboM1yNCSXhSUEmHbvfv4QpXUGcr2sHr874ZokowicckvsoMpnPyU14qjz1PuGp1ntgkaFJcKWnp2HTs8EcAf",
  "key2": "41cubbrucGNuFN2c4Tj5MK1VmSbHP4ShkuFAD6rhq1Xif3VNR1oHQZcfSGQgsxe8H9DU2dFoQ2Rb9yyDfZ8gPqPK",
  "key3": "2ugw6CU1NxXU8QN2MSTErCPYmLcnQrRGynJWQq3Pqm3ybBgvD5R5mQdY3ckjiLr9oFvTvHuXajJAxEShhczusFo9",
  "key4": "5Fo51k9qgDwc7g8EmvkTKtkj7AjC8SLLH31cQKGsMUY8AFYS6GNgnsq42edHvQVFASu7bY1DgDtGuQr7Ji93v3T6",
  "key5": "2qUm7szKiFFjvyQf9R8LjSY281X8UM8CbmXhQHfokcjLcq8BAoA8bnseDdNaRKTC6Uxorj8PopPpVAAWTS2ZLCbR",
  "key6": "5ngsSSRvcueawwrCd69qxVmxDDKZMrKSahmafQRtgxMxjkF6UqEbSBb3VmWbyAMf4tqHTsoiNhLsjpSBGdvYEisi",
  "key7": "4Ao6vfj7YJhsZ9RaR4hQ827iYepiubWGnsQjrvVajHh8N16EdKs4FBLWMinUtD9sfYb89TSSq6SBjsqRe43ojtTK",
  "key8": "6WAkGVcFGmhRScwTugFH3xtVU9bSBoDABSH99PFVqnJmEAzngYoLYkeMMHyNfdcVLS1HXJqS1gyyg2Ragnove29",
  "key9": "3D84jojjfrsursSqNRhgXg1X728nqmCyUz4Ad2PPfVU5PBexqr9KFSV3f3PispMZPhBuxXkfsqKKcqWU6fSmyS9F",
  "key10": "u4QEBAseCkcAk7xEG7V6wbdyLFew97dWysUTDM8j3dE8kba6Vq5xK68bfAoq6aqg8LQ129dRTthRhq5TRnDCgDr",
  "key11": "2WBUocizKwGDywLjSTCtUW1itQPssEVEqoTrv2VuPar4HERdPQenXxQ7KEU2Rm8UJXPBwEWdgdUCJjo2Maa9k9UL",
  "key12": "5pp5MrCkZZ8d3PZpD2uktvPUKSSSaiNo6M2eEt6o85PpUsUKgeZ1y2z7fHQimKsFHArzhiCRkH7fgUY92z3Lzijh",
  "key13": "3AiwPnusUtdG4nsS3DjvZgWa77xBx78a4sey7hizX4gDmFJ466SMtFXQTTbTVD6zThJnLLY33kyvG1pX34WZEA8z",
  "key14": "55y9TLPVEoDBM47GpgjrBARF5SMLC8wVFqKm3AFcWCESVzYNLJuWUEVqDWa5azXUqXToennnHDVeJtP1PzQESFQW",
  "key15": "5iJ391QhmVjrZcsj7SCjZFHE6RMAcvNYdLTmv2i5RqLKz2CE1knmri3ZDxYfGwqKKoZifbR1kpgXW9ECpscAcByw",
  "key16": "kFrKnZ3Kx3Ea7ee817Vn4PPBMPeAuEfkCmFfNameGk1JZEriJLbzQ1uxx3GH86TTNwioHXGhq1PWbTcpszcSofV",
  "key17": "41oQaPVqCzioVC5KrMryssXMZSjGNvNLewNdpECAaMpQ78mjAiKJdS1vuVgENA1ZWmYLnAaL8s9wHEAuTY8Mct2y",
  "key18": "4vW3PrrNdMdF2fKxaKP5P9QMU5t3mBKDVqYDfcUMhJhE9j6JyxAk2hFUaC2kA676dSdHKMuBhwvSttbZgE7Hk3Jn",
  "key19": "33gJd7xrrj3V2ifPJwaPFx81q1vUR9L9QD8rMEbx8oEEVvyNo6C7yxpq9iGxrzY24BwxGNEpCmin3AZH7m6wpPTe",
  "key20": "5M7qTLTfTFpw6T2abpfQ4tXAoBwFDU4cjNwyc675kXgkbcNd4Eb14ZcR46KHv1finConnKS114ukkLSX1jgSwhca",
  "key21": "4UjBYo3JbwD3YroY33B7gbiAoVGYJk9VBAq8PYgL2fDQ4jKmgxyagG8JHrwBrNE2jTC4vRc5eFuRvRHepfrWhfrr",
  "key22": "2ZGwweX7zybP9dWrdedXBqx5zWqZt7hYj3fYaKEbQHFj42qCGnsJVNphuWHucHX6Fj6rHitGt3ANYY51KhcXq2nU",
  "key23": "5WWp9ag8dRzZxwNRCw6nXtMZUQ3h2fojoHf7XuZaqVbyh1sNrTgdisAfrr6NhKqMoKJ3TSvJEqxJ98A1kVU9RVT7",
  "key24": "3DU96usparrkjjQudfB81QXeKetCCX4ptcd1Lzak79AgiqYFerpUryNnuvNXxeiGk1D75HymL12jmB5DNy1bU5VA",
  "key25": "3AfYHWC6Zrrnn7hn4oZH79xoiLTZdEzwQDefVyEDxnpinSmtTCznbyHodGWKq6YGCDMagvennaRieSpgDKtbb5jA",
  "key26": "2Sh1N8gQPSTWkiw4gTMQAPtwjYcUUmhViRUv9eCBMnZn9UWBJE2kvd8mJUsSCirPqDszQ1E5XUdBgw6wuU3HngfF",
  "key27": "4ERvkhDbdJFdWrUX6QazUyp2AmhJFM9eHzBtbFZMou2RyMVAyoinXgCW294rBnWWRMQHTF43Tb6EQa4vW28NyTUj",
  "key28": "4NXGC7GPcLbV4jxfFCJ3g684gSsnP3dCFLKP4j9XjZE2UNE8gVZUutK5YR9246WJnxxVwjZgjWdoySx8xWycHEJ7",
  "key29": "4P4uQ3Hc2NCFoMjKx3rumfmfZKjfEMSASZamQGKAJ1C4FFzKxopcNE2WKTotXW6iXgfpzhMXm4ToR2rVQUWfLUpE",
  "key30": "5w3icAYKGP9eXSyYayxrtfFjpz5XLbx12PSYwYk2NPEtXe5P28RmqJ3zczCSXfW6QYAumTNcmvYc6ysGXXJ8JakA",
  "key31": "2de3UYBeU5hASussfbp9AxSWdBoWCLcNL59aUDso1XieDGcTSNPKd9BhMPF9MsbPTtbJKKpagYDLjYEvwQoyVd7c",
  "key32": "5pjkvqDWwFZfz8X3n7HNH9zxUtzQcz4XWj1ivKTz9VVa1bFzXhWJRBG6rqeHZWow1PCztfjtmbHry3j1QLgTvWXM",
  "key33": "5thdJBE7ockPyzcb13zYMVuBPh8PQ39tm6Hs7dhTSHVsszwRFSxnEJ6kPd1u8BYYRf3F725NXcTvugD3z682nSBM",
  "key34": "wCi3J1TRrKV4TFqfp22f1UxZz1cobCt3NBazxggjaKTLBquWnVVPdsqZCwunndgiQHEWEwVjmbigkRY9PTpbYTe",
  "key35": "uexntasR5ZGe9CH7oT7EMwmi14FNMejbYzmi8fiZVsH8XgxG42wYkcn5sACpYe22Fnnyo3C4hrZwa53a6iVWaKZ"
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
