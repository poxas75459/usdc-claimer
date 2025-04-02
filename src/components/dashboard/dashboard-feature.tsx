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
    "53pc7vpU9BVzbRyxWHwakzXYqFeWDsEQdLYMpoSatN4BreVdyByUgSXnZR9vDCa8kFxEuMiEiKKGUd5K5e5aWax4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KiixP79qdcDwVfnWjDivLmGFriutM4dQPprC2Wb5EuuSSMAugVtaBdHe8AYRRhFUvfmjnQ5j7RzE41PyVTt4SVx",
  "key1": "4XpyeVamnyd83TovinKVDTxV2HusC2c2dmDJBYJFMnx7gPik7wB6dLcbjED1Hge6UUnWqFXcWyvB6b6DvU5fR68H",
  "key2": "49mWtFZK7aB97NbfiZmBTxq8aD3nPpSUZu8mUpR4qRBji2F34mGwvSZbkxBNMM9idrLwannECbt26sHQpg3sRoyj",
  "key3": "22QfR86TUQkZLSM3LzTq1UaCA7DF4k3zpTre3Jg4BqcaAT3Z97NASUCbuxy7KEYQ1MoEmoTBVv2FdxPDeSVb6chb",
  "key4": "oU1wsxzWFTrH8gfcsGehhcB6cc3sCphhqiZkz82grKpPLydiGH2jHvstiSiddw317GDXcHoqkJo3di1ohNR2zZa",
  "key5": "2KwMGEREwGmgUC6RfboCdQvFXwW6ZtLPkVtZVarz1M4nJWcWEWLH7RKoxPMyzXTeFUCPaov56TpSTKNHRT97P5gH",
  "key6": "4V8qQbDr1FamTpos765J6FBjaBr9zLKNFJ7MK9HPT4GZonC5DsCKAnFM2o82hHAFV9gTX41LRiuaEPrFjbFhTme",
  "key7": "4X4hix1kbP37Q3uairdi1x7iHieYoKj1w35xRxXpD1RrmFEqEhALwi2Uvua1scX9n1he3W635Sm7LquCPRsADGQJ",
  "key8": "2d3vmExufyoQEbWVxyMyq9bCpBZwLBWyorB4s3icLStPL3gX2pEw2hTYw4kiiYLZxVMUJvz5cYjzevam9SmuC5rF",
  "key9": "3fKQ9VsuFi3LEqfCswFR7Tgr1VXkHSGYHtMFMrmiqRoDjFsDByHPENEfRM3Zx5A6V4LFoPxgkFakMuoRf9rJAnn6",
  "key10": "5XNNKGYnchhS4AYPiNFKoEHW5mHrE5vwzuzgsj3o1HsetLAV79iGGqb8oPusX3FtqLtkJLNnjhGwriQAVJeGpGvN",
  "key11": "jxYMAo7TNhY2zaAJ5Wb86Bj743BNbYfxbAH9waPLKZrwRDcNhEnhBzYxNunwmLdrt7sNrKvEuo4dHSzaWNkUHdD",
  "key12": "7z6UnRMTEc9EzwmaPfXayCuaSQ1itweabCYSuMm3SHAbqoBC938Gvv93ESTBq3CyCaBsz1eBruvSPKE4RMNXu5M",
  "key13": "KzRZFqGfQD8J8S9JF22nwy93Nmsz7m8qUY3p234R4bp3mfceL5Rn9hy3s4koNDJDub5wJETjZULGp2ZFoEcdgj6",
  "key14": "5m5q9gKWTS7sPYMXxVd4q9BMigogsif2rjtkBLz7h9B5wLXUqzK3HeYiAL6bxaonzwFRzG8PduaKJ76gB99ekq4s",
  "key15": "4BcRKZ845cA4ZjTf9xDeZCB3JfcwQJKnEHpSMMywhqv7zX1rME2RCJ4xuCesmRe8agvp7PUZtcVUoNPYQPsuBnLe",
  "key16": "3ZtXKBiV5YMhVEDFf4eVBveXb7Cuwrqpk4J34RhDkXC5w8sgtUaLCRz2c1m6ds1WnvP5d46s3N1C4rTBNpoboLnp",
  "key17": "5iJWGBr535fs1Lkr8uaNx12TVbfbrt85QaMJoi9Mf3FZQsgbQo3ZAA8Dk2A8Ke9RdApheqeX2fUvtQAbDTo6AAbb",
  "key18": "35FJjPP9byR6NG79pk4ahZqZrbauJgYj68AjQ2vqBRusfXWcnk7QGLrFTj66kV9n9tRVuNch4xKaLwEY7UdC2XXu",
  "key19": "62vzFXh737rhzWX93SWjcC4wUWwz6aiv43rUpLf8uaj3m1QPtwySrswMWmmhBBvH7ZeZ16ChtJ14o2MyV1rhhSnD",
  "key20": "3K7YtikEsHsxnc3eG4PB4PGocHz11FPzwN61PxUUbZssGwA9NFySB4SJUCueSTU7BQMKQktphhbvpo45whFcbyX6",
  "key21": "29Ep4N2ns3bbUjeZaNnKdSyZcZGdmgYBHEWWhrzmehY9QFVYGNvVgqHamLzkQKYqMjiBHKCRp4NjeUD34NbdUjq9",
  "key22": "4jyVsZKTJ5Kk1RD6kf8fi7mBUya7pJXDZfPN14kpKsjnp7yywJnwumkm2o7JxMnj5JKp18kuiDnWNN2Z3qXihQt9",
  "key23": "4yyTFp8TwoijVSEXiXB6WYmw5phS8w3fkTMq225u4JZqsKzxYgFDT4Hcce76xYGZg5ix9VdYU4nxXokJ9tPaBDKX",
  "key24": "4eB7LbaPMpqfbvcEVdy7EreoNFEFr8m3uEUaYR3CrRRUWRii4Ya5YpscLFCt3JbMif7fTurVHZT2wXxwLGE34kPK",
  "key25": "2XvQW6D5Lz6dq6iiJ5f7voM2XXwgFkkAGJ8peiTDwoDjGyp7Rbd9Tq1J8S7fuQ4tLV6YmXYdmgMJDZQNY8DDsBwA",
  "key26": "3ZN2Xe98BTrx4p8zqZ298HdrUAdWEg2q9ZL97MvAramdKSaBDUd3MtcWCnaSETncJ5y1HP2i6YwHxNTVZinUyFTc",
  "key27": "35ecp4eCCHLtda58RRsCcpMxZMe2B9YcDxHbVNDn8ofHk9oxRqnhWgUkhzb15kmP8kbgNsLpmMFiY5aNi59AGB9h",
  "key28": "5g9VNSkAPvdWYn4Qi8K1Vu5x81cqKruJHezpQDi7B4orzqroqrqjU31iKRSz6VH6bSfQ49y4poJFJuP9dtLPbkso",
  "key29": "5qod8KuGxoi1EydeVXcPa11XGGX8XCGbjVpBiVV9Wb5nL6gR7t9UQ4qxFLUk99w8qNWoKTkPTqv38LrjB2WtKNhC",
  "key30": "5vJM6Sc52XzazTSAjpckQ1okqgYYLH2dhSxtvPfxqU1gYAxT8mvtpVovsk3VZMFeFGD39bGiTAssqGDsarzsJ4hZ",
  "key31": "3hJ4yJPtjR3dvykoobeJFGUDpxYDijvFgLHGvpFdsAnJJHAteX56wuunvvzWTtDHVYqEzPWVzjtUQsEtYMozXkze",
  "key32": "3rWS1dUyh6fdVvqPvaP9QyGghH1J2tDQGf8gsCsxJcrNR16v9FgV3KkwkXGWoQTAFMdAMVohM4ZMsZJXSR8PHrZu",
  "key33": "4kqCefppq2p64wVYpWGhJni61p5csw1N9coKDG29Kqkxib4oHqcY8NF1BuQ6AN84DHKbVDKj2H6Krnh8XBD1zLbj",
  "key34": "cYtDvFYVNkDEEaATB2uhbpkxpBji694cNjccEgfMddPTbojr1EGV9A3o12wTcoHom5g3W9Y8GaLTPt6wx5qDBJA",
  "key35": "4pzEEyj5YAhc54nQuhEuUWJsEpba8NqNu47ByVPgHRwztbk5evoHfDYo4dNYNNs6YbM5KYtVu3L8A5HGFsv6Rfxq",
  "key36": "5KotpjpdvUagQCyoEgz6yFCazBzBBSiF8P7m39fFqpa2jhX1STKktztegeyQuPvWwHCQhaifffYnVBzurZLxmvpd",
  "key37": "2MSFhjUktagHc3vwtpPuKCgxNNAG7qv71qZscBBwpezqbPcSfdx5L1k9JGga8Qwz7vULP8hkYCXNJnREMWrCRi65",
  "key38": "5S9gK5uSfy2AWq9EVkp6LcSZa1eRH3C2cfKB4jfmqUhzkMW5jtbDrTX2giTXsqBstq7fayXobfd1i4kcyUCXFvjC",
  "key39": "464MzLtArGES8KSPNuRZM4QxBjwmHbbUs9Sg5wMUZyayRYCmmR3GRn2UkJg4nruyRzUH8a8urXhrMp2GmLHPjBoH",
  "key40": "29hYQHBGfpu2WjLGT7zFfo5Stk6wEj3mba6f7XCY8Psr9zLCpX4jtXfBirUsF5ozR2hJrs4yN54uT6qSkeMtBn9o",
  "key41": "3izjoaPTb6YSYTxPaAUqgATq3EZqhkza8URFFJ4SSjPhapanyhfsB32axCRv4zKxtfs2UjnQbY16pysam4Gz3NFP",
  "key42": "M4nBzy9Y51jTaaedKgMpjn7rWHBxXf84KDWLsNdxxHZAjodJ2cQVTTf25J1vyPxzLNFnhzpuRtk6dCY59qDssrc"
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
