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
    "pSq3Crj2gXmN5sFjy2iTWeen1b5tPdbvVPj2MDCJ6LT7HundfQWfyaXpfgfF5yoxmsFPdjDb3Rhb1iGAQtataay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BoAFdhKfNHivYS7xUAPzjrWQSNxA77Cr3ag3usaiLAu3EcvR3q4LWuwt1bj4tLc6LEPgBuF9mGo64MR3JDtGRoq",
  "key1": "5wBR5WD3XQF2dR1kWxG5Di9NkhVL3txSrbaEZa1ctPyQofkAoQr97MzSZak817Nd1rffhe5CLydmN4rUyLEbJK3B",
  "key2": "wcjnqVLrP1HHEKc6NvwidSztWMsDBycY2sGSUjPXAHAJWmSSjXiiYYaziV8tD9MbffzMEBDhy2Wkph6JgVv7dLd",
  "key3": "5PapjUaCgmZfiqWEragzwqbDUfCTKYzvQ1oVs5A7Dd8yTGkjnGj5AZ2k8s2UHCsQzUJoRxKEynLdwd9AZYM3fcMr",
  "key4": "2JxZb3At5ZUPKSSZjgWvpFhkr4Lh95NumBsHzd3wVhpgH1bz3qaj1T4eg7YnyEqoqJtSgRYzGmtVfFbcjNUdr5Pa",
  "key5": "2vLkaBsi1nNXya8KyN2nda2GNcK4i2JCQ2srtJWyLBCMmPmhDwFRtupYNyFWaLyaX22BvpXfT1tWeF5vQbn1zweW",
  "key6": "4TicQMGDMD9mWkyRUvLF11kc5J5TPESyWt8Lrd1JC5L994bRqqWgKk8QouVf73g9H7kHHVEdwsxxGr9RvmmFazCE",
  "key7": "586zUnnGBEueGErGU2aJbK1dnbz9Cyn3xRYs8oGowNQy38Sp7fDAFyzKz7XP3RecmoTH8pd7N97Me57UxzCZcHQ9",
  "key8": "YtM6cQL84hDUVJkU5vwnarsZdx2sBe9HNL1CeqG4vRZFUzmKWQo4sCx81qqCMhBVUWqpH9rKXFrPvqubDQZrLQG",
  "key9": "2TStse8bjvtNeAhv4aVm5QznafYDkXR8E1726mWuJRt6WGJdNgrpmLXDLvggyPRSARnazrsx7DsKPNqVBo6eLiZ9",
  "key10": "3yRhdRm1ZJT8JN1EzW6rSQmEfoigKhV89YiqqMdVT7CrxaAmdkGo7Snds4JL9WaMm6yEfECaxCLJ4UShhmSKerp2",
  "key11": "3zCQaADEDRrmba2ui6MJBazBCujpExmX78kXKCutceQEDuKs4ZiMNPLREMBdXk8X7YYuDL9CX9BGa8mCBRQvhb59",
  "key12": "3EiDicVxrMf8qD25wF9agNoDzVP2Co1c3hKYXPYCSRCoPLyZ19AqLmDVWsM1RYxeV77mzWPqi3GLSxRPVDP5Zrbk",
  "key13": "59G8RS23M2VkiZ49pGMCj3XQ1hYHgNepLVMywjyaiwxy4ZVSYWzJQrdZBSyv4SJ2YcKA94WyKkeYBMrySrNMPQsE",
  "key14": "46BvEnEqe6owqvs769JwZtgCuXDPBrtFTYEb3tvKWjN73SoBem9zrL79BnGpoK5jMru6WENNXTcHkouJmbM1s91h",
  "key15": "2LT25zt43oURzN2qYmC6HSbTQvSWij11VpoWh67wkybUYABxegsqt12j5KtJG8RXvVM8KC6PptQBTM4yPGGVUvQG",
  "key16": "3S2iQwrsyDSrKUPkHsV5EPJjfDsAcRST89X5e7qWbBXjztNDxA7BLn8MEforyezMU67yuqfKjEWW5Vh9ch1NSKHj",
  "key17": "4XgHyCt6nppaJQvnjYh6yFPcDtdLLLcNBMoJf7cZL5tBdCkxPMiYkkvanRk19ptE93NDG4RDKkTZuWyYcyWEeqiD",
  "key18": "2eDyFMB5ahdaZHxBXTWGfg6meR2E1rp1y75g3TfwwNCJubQxVVcEjuS5FgWQoFDLcfUipLMXfzjt82zatSLUkfLS",
  "key19": "N9m54mTzENwVGdymdMZTQbN4MbEhFSUCqjyLAqzV6kmzFt9tejHR6ESenXfmbsCoYdRtwX18UcfQxaPPkHWmGn5",
  "key20": "3ViLCXeQHA3Ft2e91wY3Kg5nuHxn3SjvMpw1FaDk7UZCQoWsTzdThQsxJgjrSWpiBHujnFehd2mfxBnD4TaUbbYf",
  "key21": "3mRuAQ8prFYhqVnnYfj7xE81Xea9W7Gq6FREvTne3sWrgbZDpnsHwMDt14jLcf7poryxUYw8BqbUTniH9FgtWDJz",
  "key22": "feNP8TJs1jbVGWubnkM8mTz4wJLwxGdkPyyjkvAdk6qnxUoDGictdUzLQ9YbuoetriCf3h9DwwyaqX7xrsMsYbA",
  "key23": "2oMwtfSf1mJELDUhqBU57Ym3MUZtAajcwFU9NzVHAbsQXuUGM4L7EFqyAYwMUTNFfPcZNeVMtwbDW9FEcnv26AdM",
  "key24": "3bYwujiPDZJ7R9UhbPYum95M1HMy6rv3tvipB4PbcPXgH5MimCH5FCMb31WJBmMPXw2gdDh5WXP3cp36QyF4JhTt",
  "key25": "5qoB181msmnJL5stsxUYuWKQQ9ehvWnfyzFCFgiEnbZvxF7PwH6EwNQsNnwwQsQL7GwRS1Xn8Uoxc9Uz6kG5yAUn",
  "key26": "2muTaqjXuaR4DrX4i1eBFrpE8JJZgZtj7ACMwgom3d3euGQh4MZaozWB8QBrCWbwXtwgtCW8QLuNNq1Qkx9ZRAWD",
  "key27": "5SE9S8NbXVajSsqqVttxChxX2w1hYWz1WDJXfn9VWmkyizWmYiXi9CTKvriuoVLdQ3APSgCrKHxgG4L47WoMuzbX",
  "key28": "4HPy1oXCseAwqhFY1VzzLFNKehm6pBGkQJnRLvwgp86tV6YK2vgynuHUWuDGqzUHkqftinJzGTSYNrKCrU9UZ4yP",
  "key29": "5j8TCQfkPTkTS9G4Jmr2gn6uWAxeVFpWHAfRcY6mvjKxtzR31HmQ1rsBhw9Vb3b9TVqG34k78UCNqiASoV82bkMY",
  "key30": "4ZmGPMXidXDKXo6MuNG51EubVH6wkEk6siMieH15qx3TZ4eCaC1r6Qj4QLAA8nZqZPh8xFjJYJHjFN1KVD5mQWtf",
  "key31": "3tUMonQLDpZybGS3VbDwWzDThHQE7VjkTeaUAdXhnLNHK7XbvKUoJeVcz2tMKHYnBK3rm1wDDpYtYpRgWY7UWXBm",
  "key32": "35eh37ZD7fdxNL2zUkkmJmnnHUyypC5VnMQT67xtdwyCQnqpokBwypE1GrcuN3yrySWNAcTKkzjvq9zcanFqJbH9",
  "key33": "5z9n1P4KrWcWBCC98fGP75aRFTkkmXGaYzBtECUN5uaipDiQN5hNfLC5m48cE223zFFjuSxYm7VnxUPxSwRXQfze",
  "key34": "38spyxYsLCgpL8MmM4JhDXpSRwdM94Sx4eEJnx4nvDZFCgvJfGfxT4imKrPigC48V3pxaqkb9y4bDzxNHQmgcgD4",
  "key35": "4kFfNXLMyp5V3NGYYRdaVrfWKXSzsLcijFkgGx1MTh19LSkqDx55KCTzDAKZ3QLY21uxYxTTt2LBKGH1NfKko4wv"
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
