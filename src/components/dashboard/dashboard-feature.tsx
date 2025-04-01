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
    "4EzR58VTBN21ysv3hcYt8yc4K8RJvxgyGiyCLAgfLmYdgDF9VQgabirySZQ7vJh2PNGxxBBFUeZmzr92PFSk2MG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33EUHRjSLLABeHXAnBW1b1oSXXPhreXH21W2cJP4xEfeVN9J8x1mA9mLoYEapfaR88iDBFwV2fdRag2ynL6tTRSA",
  "key1": "45dBFsPgXB1ucNMHdojcovCuCtpPDEMkXixfT7ig5tqZ6LUdyy5VQSyMg8QvHS95nccRxb5CT4CYVFGFdWYBFReH",
  "key2": "4QLd5Zg2LohbxwDd6REL18NUCDgdMhS7TJwouAQYh2TwB9v1hHtqKU7PFJuGKRXrV6HfWiHwFg8sbmQFZwLNWpUk",
  "key3": "2nzZv8miAeffPLokPk8weeQr3Ykwa3PWVfBZy3KhcTPiVCPAvmMvCgB6NGtoy4qDBrNBzmbeWmvWXDJrGQe1e4G7",
  "key4": "fqYGkEYHu4nm5Unc5LLCvrP1r2VEXGGwGXYhS9aVPbVjvxMxbyJcf1PXczTL5R6hHSAv7oKNgRxJAQHcw4xVyXf",
  "key5": "vtndWPqSGVSGGF9qgWeomAmvHAqXqc9R9cSwoR7ut6LZmKJJyPndFJn3Mbk2DeZwpzXgXGJYz27HJ4BmPXLBxVM",
  "key6": "2mXAzCao8aNRJQZnocbnXAdZe17EF38Hid1hPgG4HdNvWiVx4dxhngz2UNWff1sNDKaPm6gn6oU7dA4LT6WJRRVv",
  "key7": "3utVgH4zhXxArDetVsMmSCcG3oWRMN9yGzFAntKHsRLAhdwrn8wN1DQTAb2LfmoP415S4WgakyA3kyyoX77oFBQv",
  "key8": "5mVp2wisVrwGgdDcmSppLqhkhek5F3C73666y8a4Jhk2vi9kJ1so8dSuAJkKFtFhrPvzAHaiexNEyheb5De9CM2o",
  "key9": "2Vm5WTkNR34kdFjoj6AShgvxtFGpDydJdv6nbLHGBAA7BANqk2haeFgxM8Nznb6JpqSmsJdF37AR6XgA7Tzuuggq",
  "key10": "2ygZxncS659RnzhhKo2S1DCYzoLcAhSKiGG8TnHXLvqxgFC8oN6fUTJTv9EyTYG4H3Ts58M1A6N11ZLr8rwi9wXn",
  "key11": "5eRnyLLLY3YioDLHCrs29ziiHUp1ZeeKPL79oaxcJBMcFFTxbZRMvupz4QsXrhPVGHqVAtsoTPdvWQHXfCjKd7HV",
  "key12": "2xULx1h2J7VTZHuQXUphersDFMAN73jX6YBkVBF7DUuzdNPFuqRWp78ty1sj8moGQFGx2rfStNWddjYLxLWnhR5y",
  "key13": "3W47GZEETvX7cQSCGPbyMLCfppzoATnWoNmqNtmaePhsFwrq4FXgukaWefTGemGwRZHJD96iuqgEebgCQXmkyD2C",
  "key14": "fNGezCuBgVSt4jxTMma3WcYqqATwARehMps3r32v7e8iYSRQuVfxj8PikaVmsdx7fShw7oFFKGTDjRcejkTbEHS",
  "key15": "3zkCdUr6BZwzRCFgtmoN8XeKfYEDMNX5puk59ASpAhwXUYNa1vND6i56nLHBdccoN5bAmvSxSYoZ2tM3EFEzUQXs",
  "key16": "3dPRY7bYXyR976YPCKDRYiiQmGyj52mDUEMSQjM1L23J4kqGQYEnRZmVTPi8oXSNcLofAPHySTcD9NTkMYadjSRa",
  "key17": "5ZvgFVaUhJEbhKJHdbqTiTcrULvECgS2Qmy1oqbJGE98xJfQUBk3u3wEifhs9Lx1r4RGRzZndhYiVVj9uz8RKbUj",
  "key18": "64wfs9FagYKBAp86kLsSPMmEmJ1ca4yh61DgE7vBTVGenSY7ubzS2gMTiFDK1ufED9ENdWFY4skZErPVxGZHkDw6",
  "key19": "51k9UoyaqMuybJXi1zALmSGQcd8Rt9qBbXDiW8FjsBj6JbjYE9nN43uPGnHVWBfRpCNbtwwkn4d3Le1KoUNHUCHo",
  "key20": "5TqTr4dW3Mxe483QaYsEBxeYofnHq9z16Tzgnm41knN65NiPDsUMKntwpBpuRvBFBgW7dLQcZ6aAzorV1at6NTq7",
  "key21": "5a9wMEEaRSNz8ER24Zqn2YJCnGLNotReqKhrw3h5FFRvsogt9XdsdCzf8L5W4wAhTAGx6G4toBCGA2ikHy1CuaED",
  "key22": "5C7SXLQ8E3X3QgoT4obZmr8Tx8mpayCT6h1u4K3mpFdVoxeydy6skMpAvrCeazMy9mZCfCpT1JWbGBGvHHsN4NRw",
  "key23": "54jTF16SNPBqMMG4vbqGg6xggLASvgcrPmVy1D8Z25RXCkRDfiVupRTSL4aeXrhSrpRpeXD4dP2fDbJ7Nmd2o1Xe",
  "key24": "eR4BFZCkKrVYQG9BJvFArKVyiz9ZkxLaDTGSZaoEjL9BphJwsLCuUyqiSCuo8vvMKEw9ZZnw4RRkZLvGcyBc9Wm",
  "key25": "2AuW8WW7FY1AoxMczt3LrqiYc6ARwJd2beHDVupS5wFbQLvzx3w2meSUz7bcTfBB6ZFaGrzMVyZKMKM2WcTQSCfn",
  "key26": "5E1iZStA6FB3jVGUX9oxEviTAtYSKQyFiKBSYp4MkVL9xJhUVTt1YNicoq4upMuE1aHpAgz1piCDLMR2H1TAxN9q",
  "key27": "2DxHhpA9N3637MrRSDf2V6unkxXqPAF7SW9fj5qhn7euj5hbw5GE26kgshTCADfSPj2o7823hq2QQuNde6RRvdot",
  "key28": "5TYrWem8xirZTqmhKdyJeNozmfk4RYVWcx6B2iKVwUYMLYK7SYN3ExRSBcqxL9BWa3WJZdmYjmPPqD1QnMZn8cvx",
  "key29": "5zZTSqaprprPrBouAXE7G6Qge26uxUDnTKin5VMwtaafisFufHH2sd5X4yZBpyXC1rVtkTFESuTHe9HLyd5V7NN7",
  "key30": "34ECgJZXUF2zt6WaLrdZGCtMo9FXg8XUDvvUZdKxFnZv1SaTFxXyz5bsBpyWTZpPUjmHVcEXdryz5UTrpaRHUCc4",
  "key31": "5JEDVKyGLZjta1ihwD4CfAjDgS7NUesUYdA9Jm1UGxhL1pAn3q2BAtBKKAoQMG6kw8NQbw92LzvrBMi3WpjpNMf3",
  "key32": "2crkz9AjBES2TYp15U882RtUzEekiTJMtVnaZJjoHz4seA639crB53ZJHQRE7xeGuaQKKCT9qgYWgrS2GKDAHL1W",
  "key33": "2yH4s13FyGjF8BjhNqgwSrVCViYKG39RjfoCb79jSLKTL7FHLmijrvVPmPktFQYazxyyk3yiRPo8MEYv2DHAd5Gg",
  "key34": "KZP6De6tuq76RxPUaEhwRXE4uQMG2Exm7zR4M29TxyGceAjT1AJAGVqjvskswfbuNC7mn9JwmQGErtrSW1TSm6e",
  "key35": "2trxhZFJ4Civm4WH1ZcCidU6rfespUhXQE79NtyNqXNGjTZuXjNd5GRVh27tcYJMCdCyZ8rFGkQZPKCeJ8rKDjeo",
  "key36": "3NqGAL784TFJS9qcVauNmL7igMphrTPTBwNbnD9PSfPL8j6J57k3g75y6cLknqQNVXYBwceed8c4Pt5f7RN5DKdF",
  "key37": "3KPmyJ1RrM4pbYzQKgKQmrseHh9J8BLqioY34ocg4HzvGzLMaZ5v5dw3xfW5NCMzwcoiaWDQuwTsv3FDHvfaijM9",
  "key38": "5ph9V5XwEbw2LFAqyyURa8DFaDfgBEX5heGczxqyJutJhrraxb7dRRKqPiPjH5uy6FghizkjNU32t9o5RMDxNLVQ"
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
