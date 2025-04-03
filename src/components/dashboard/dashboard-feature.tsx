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
    "3K5DTnEF8CC33sYoUFvPMSSGRmVfsRuWhMoBrTWJsbg2oYBPj21BW3gm5QZ33rUiMYdT7fpWT3rYK6tpvWNUeDF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37PJzroSdhLBiV6NoDpjn431z2AnsBKEKUKgU1Me1C5o55KdGSYmXfsdKwturN6AVqcRLHUH5CPsSYeFyb3HgyzQ",
  "key1": "4JHqF6XSUBHxhYoo2p3cu3WZsh5zbFFQERRHZFfyEE4sUhK71ZBS4xmjXBXq8e386kjHoUdcH8Q3PacVX2BPi2w1",
  "key2": "36XeGCuuEqccP4asuXWNq7JJndhAcg2SmfrnMV8mdi9Ksu3PRX5sz798FvWBoypExZjYQsdbLjNVvFhJMZ2DaA5N",
  "key3": "48zUbheffia52dcHKXnTZWEdWc2tvyzmf2LVJAuoecMzRB79sbyK3RLraMXcKa1ycmkDyJ29khFs7iRsGqwfsQr",
  "key4": "5WQtex9CzJwNbNgU721ycWsYLWujE2UahGpqpHsanAf2458MzoUieuekww8ttjAvVPkXQmocnGotcFEkhPBDEGJW",
  "key5": "4451ccChEhgc7w7huAaoJ8Ea5bZSqLNa7pNSuo2AsCm771dgPzdFMeosPgoKaUuAwWU4zadfADVEkFiwMLYN9aQy",
  "key6": "4FP4DCiLo1vqxaBoBzRzFCz6c71xnr9S8Jw1b3cbuvCaTjneSssuZw4ra9tuzTr8Qetp19kKfHJzkNxD4Smjx2u1",
  "key7": "2kqxsVyrsBFr1Qn7jDocpL6KZXdMgkd3rNRVqb5EhjpRy9KiQ7vs33kwGiXkyyTZk1h4GSdHu9pKSynbGmgFsF6e",
  "key8": "65hbQinT2CBJnqscu5jgQu1UPQDVhyP2XAdjQkTsvrxZZS8Zz9wbYmUeGFRuVoQFvuTxbvT5k1VDqnhfx4EMc1g",
  "key9": "5sPFhnWa7im8wFnj1usffdT5ehRgpeTUtCwDDRjvLFEpgC9SYEFLdQGDr2JSs37V7fPjWKBmxQF9jZytCu7VdWyy",
  "key10": "64WykGPAgSJxKEF2Fvk8ipR9mF5GSTYgLM8K1CzyDJBc2wrtHjhrrT9dHJ5t2qcYFzZLvYvrRXDJoAMTkijgySRS",
  "key11": "fwuxinBKHjtN4nf9RCVvppdwAZSHPyUdchEe4csGsgiybW4NcthQJwhuSsgHS5CtdSvbb8ydRWxyCkiwtasbBJa",
  "key12": "3SPbbzp5xdGPQUn2F9pV1oGBK3v84tXRDSbhhrDy7H5yUAKqTJuDhduv4Xp6JenM7TrMahJ9fiRtw8VPbFTRVcuW",
  "key13": "5EMGfBpB1vCG7NjbKesz8KYzGQewdeYSdaYwKgSHEaDXbh4YpPsZHFVufRspX5VWNwsV1E7zxEhL3h1Pz5WaAVAs",
  "key14": "5s1kAd3GXYvfRxPJZXy67ix39kgR89sd9Fi6hck5AJeLLhcaa6epsVDzEdhZZXo3VTp3pruEcCyFQN1qczj9bCTq",
  "key15": "2GxuquzSybrB61Tksi19XxJcpKjXTZF5FkZUxPUxf2ACtEeWct8tdt8UhMUmhp6zkYfPwL9bDbgowppUNL4yVDw3",
  "key16": "4jbwyakQq8CAJbnHv2F9sJN1EVDgE6BfQ1brsZVyi3YNpAwWvRxBDc7mzuZ9YRuDzerCZ9unLRdAq3rpKA7Me2Bv",
  "key17": "4GvEDJXQ43mXDoUk62ARj7LwNq9zn7sxy9bCUAgvVk9PsXiVJJ8fyYSYPU2Q44CrSpeLanSsb43jHZyTk6PRcemk",
  "key18": "2nxBTv3fkN3g2LQoVh3FbyXMnXRQ17WapE8JrQq49F2mKEL8X83pFguS3zKNkjUaiX6fW3xUnuqpPZ6AU7sTEHpN",
  "key19": "4Ciawr8ZCYgvHjukueZziWMpH3tbanNZB1gkKCcBzKMYjUigc56TmQTWPvZN8wD33qUQnDgDy8oV5i8WEkhuB6jW",
  "key20": "5iJ3m1ckSfujpBBoP2FrFvHS6RAhnzcJtTrUecUcrZ7h695qixR78fjnMyHKZDymPoggKyphMtKfBN1mnYGY94Dh",
  "key21": "2odyoMjbwQrQbukNyhFRPqqriAstjRu6cTgym3CWnEcBx5mYCL1aNNzBKrGMKJooVruDAkgc5WW3vU4tZAciSs2S",
  "key22": "7PKS4XGKgvAo444KCBC8SQXmSLjgAhFwQNgWEFcGxSH1vE3v6UJ6uV1eqNtvoRnaB9zXBR552yLkmo96EQcLdEF",
  "key23": "3VryopFqpeToFjtB43FRaDoDgDMLBGpfn1E7VQpG1BnUrHd8xwijxFvsigmoB25D3GPLSvaZzUip8u58aCuusqgM",
  "key24": "3qrQKW92VHJBZqC7nuFb1yXuuka1QhYPuvkLFQWjSJWosuntieag5FvBxfb8aJYu2yzvgef9pVMHYJsqYjssj4uy",
  "key25": "eFJjM9dLFB6hxex8duXwacYf9pXagPGrGyRqzCXZiJvLPyJpcC4f6j7FLWWrqBWqJCTU4GrvAguhivRjBzddifm",
  "key26": "ZihH2JnQXn8hN962qdUJnMkskckDnZis9KQ1KuGwvJoksEPKry9PACLZHhnG6PCdKX4aPpMNnddmpY9ymAT4gYs",
  "key27": "2eihdoevziLHptHwZP7yc3TfW4X9qgbMuVmA9x36FCpjuJCMQERdhTKSvUdTYVxNCtdYy6gQTgQxLDhFmzHkMzmY",
  "key28": "JWtFxxRsMhDCZCgJoftwn99cVeHNXxpM2QqgXR7kPqXm5BpEvTXjtqav8Jmc3Ac8cE72NUhdossjthPQGcFtLRt",
  "key29": "3KskoSKzhAwPKozxvsWqUmWuXqypqwiR4T2ibtp2RL2A2ks76T6fDz6sHuGxcuRqJeocH5nW16AXW6U4i7qjMJAd",
  "key30": "4874D4f6nUeeZVt5tnmMYmK3zGMk1SNWET6zFGGmukfWB7hVEdborvRAy673nMVTEQzzt2bj9NTc2DVfVg1AReb1",
  "key31": "4rntHLuDBmCoMMHDNRgBDkL2ycef9PKyLRNA9zA2FeMpq7D8NuDK4b42h3Z8wZN9zcowfZF5t633azgjAysvU4XX",
  "key32": "5yCoe1PJqB7yy7Bfd5ZfkZ9mXHuh5FK5wVpHeXckehfHiTN444PvtA5KBUnQGyDnZdKndESXTs8wNPKPQ8otYBAk",
  "key33": "4PAC2Q5u7svGinZqEkdZjM5FCDG6KLpwQgBYNp9GMdUZd38VQHx62oPkSpv9DX352NGPEcFY7Mmiz6464aQjh1dT",
  "key34": "2GwCEwe9Xy66rPXniSQ7cbJU4ChPai9kjh3sUHDggVctGdcedSqueDYTEurCFuPu7dUkaj9DiP7isFgbSqc4ghAc",
  "key35": "2ed3bxcX4VQ3Cebn7Zrjp5ReJB5xoXABdyrBWVKYyeFdreYpL8g4a2SDRbB311UZAomhETURaWbpdaAjZyatfoVH",
  "key36": "5kHuvgu4LKjh77Dg6RhKjm8mCWoCyvsweUipRtT1mBwqv6t4T2qM6tB4HszjbGHHrWeToeFNCJdeJWEcsMdG4e7L",
  "key37": "3eZXNNLv82rkJWLGQgRW2eckjY8zqPZ47m3MSiSZwUCs8aJ2CedEc7F5JwTdVprnDShhfgZHXcaGHpXSmbMw6Lxi",
  "key38": "61uFRiRK26BhXmgkVz2AzNWw3jU4J6D4Cc7S5zgqs7aDqfjPuPmB1K1AmtgUfxY7x8pBUMKCtACXZhdgYZiJUxV5",
  "key39": "4vZDdcxUz4bes1kMpAm4ePmDQDXjWEXVjFTooXtsBnJU8PFxnKEUFmWGezV4AXuc578XtjkfuDHTxY3wi2JbqUBR",
  "key40": "tJaHfk4rdmXgUNVHeqVpJqSYbcKi4JRuKoa64BPqTzkcri8VtLZLBLvNGq6dVGxCsUyxMfrhyFRh1Jch5Gf98gz",
  "key41": "2JoSZ1opAJRfrdbDDcsK6ckTJFF7foYa7ohVqsvpKQiW5N1zC9iFGfHfRGBTnTVtYEXzc5rwrFT6MTSYyx7USVCG",
  "key42": "21dJF1XEfrYFsWKVyiiNGufJuzbp4Fq3WrwwBkua6ZgfW9CNq1frteaGUqDAWoYpRFYfLNNyU9STkTePjk5LLTbH",
  "key43": "2g462Bc7KRkugdNdUuippfcWXXCq8sdAgdqA15yvwdPQMW7dsGrdfEYTK4kGBLDURmxtGcoP9Txa8cgTJSSsLELh",
  "key44": "b8xTGsccibHBaHZVcJKjj1U2mHHqKhAocYN6uAPeogWybu7Scsm27fnCDtitDPuqhUBRQYj2e8uUCteccVx3BQv",
  "key45": "4AQtrbVhXJWH9By5soq2kasuqrq1nLc47q3NAyXUShymgh5mfhUhphDwEoRj6JLr3vpC4bRZskN8somoHqrtJvxJ",
  "key46": "2wRiJLdjDPSFcqW6vCWx4ww8Em6uZPMzfVWEk87yTbWm7HGJ8HFY465B4tKnWLZY1SWB88E6sjbz5rVAXMoj5Nvp"
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
