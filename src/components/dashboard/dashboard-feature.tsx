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
    "5tzsta2Beuv7bDhbC9VxvBqbKXJQDrrUD3cUTGboWiK8gbNKpthnCshk5PgbDugtnM4BDQBesVT3waEU2RTyMK5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "559HFucjJ38RsUjJRn7G6qVzNYAL7iEYTh9MbATmJCWiLbE63KqMzeLLymTYmVR7ndrn4Sv5kDHBfd8AmSRQBqko",
  "key1": "5UMZbQmwcR577Q2WQoJWR47uvzFP9fGUrfsUA6MZDgZ29VfpR3MC2ESBU9iCY7fogG51SP2P3m8vprxgRRthA5k1",
  "key2": "5AD8v62X8xxjXUVZyeNmtQFuAvZ8jdXc1aTJg2rsaNjwmM5X1na9SQdLGSgnpc31sPAWZ3UA76zmretxMGonvZK8",
  "key3": "3akLf95ntTbzYBhmKEsnoh6axHgptck4XiebizUUCxAKwe8iPiZDscrEczezHLjkiniZKg2s79pWMtntTwPVgmke",
  "key4": "5qwAthxDSQtcbAzkM5tWtvPAcmtpzzPczwnWJghKZQV3Vw87QGCWLG9omi9NSiTvej3ieDEkuG6K9RsZnRQiC7Fe",
  "key5": "azJWkmntCR6VhPtSHceeZw5rbHUPMAcFrtqAJxqTdoeJLZWv6hH84oHUCsT6gfdNw2ytEnXPFLcU8vVCyShUcJd",
  "key6": "5hLdXXPbfn5YKrLPs6AHU4McjaSeoiDQFKFHSCRGyTyzqYLpv1Po976JiBkexc4W1EniUqfmv8z7Z5EJPkXmd3q6",
  "key7": "8cNTx8WVAK1i7rqQouwD4wfa69336QurT7GbgL5wGGNGkyyNq1NA3w2d2iyNcURtV4eJh6h93vtjFWXBEB2VbqU",
  "key8": "61dJBgED8u7jRFZe54LH7RecVN4NchdxoUgZRC33YErZ4Kq41KP7GzT885hRzzjsPVxrtHwCzw2bVpE1nhn33U2Y",
  "key9": "3CMsqv99Qrs8a3MxBu1xU14zXzbVyNPumsjMQwN8BwPs7nTPC6sbrpAe5CrgbBbjNhfK8SRdxYVzETLMcYffSKn4",
  "key10": "3tQ3MmJaXpMPHmNHKdeAMc7HP4qn2DRjfh14RqT8MFyumNzQVGuyCMSZUnVWwvZmMiTuCgH17k4B2HhXBQ2jDSZ7",
  "key11": "2kt8eu5tcpwBh2LAxfie98Q9bJd3tr2WNhfz1yB4M93eK6icHCKeqVRpZxAxf4QGuBzqTMYiuSsEV3uWSyqzR1rs",
  "key12": "3K4ziy24aYxMamAyVQ6KikDrome9N2G15fkEVDfV7zJTAJa7qsNZU9CAVcYEWJSSjH7h7vWwhHdmnqoK5Z6B77tt",
  "key13": "G87etKMs8KJsiPjqUNDDERyy31PYXw46mBkQLGRrrEGaay5mPg1WUb6echcKxt9HSE7sH5YzykpkF9CekkQJFoD",
  "key14": "5tjBw9WwmEdRneStu9Y2aekY5wF5MoeaWLPLmFkZcCq1tw4CwJB9wHuv4YhHp7UZ8P8f98ufxKT1VRRpPtjhdFgM",
  "key15": "4V5he1CD2nm7GmUnhmVJUhYFF8rccc5ChmzMeAupu7PiMHF8SqGNCurf9indovjxXWGffkbjUuKpsct7bb3FbC2W",
  "key16": "25oNa4dixXjb42tptzjWwrTFR4mLzAgKtDqZ71GM4mQ8kWo4SBJoxrfBKqVNoXnB4Tuxe2xHWtC3tsFWWxvXzMVC",
  "key17": "5Whv96sHTXqYmXGkv2XJvhmJQtzesjkCLxx8DmZF5AuxLhtV7ZyxNffNzHD3q2hh5nYP96stote51oJmDaKH1eNh",
  "key18": "54Gntue5mMk9oeHMNTyYneiesp353WXbamxYjKWiLa66x8LHTJBRzenL8Cw1r28i4kNzPvdk7zAjh1o9GquPJ86W",
  "key19": "48S1AwqoqJCYW3WmnveZnXLweCnxYsAmBHqtR4nj2zdmXAWX9vphhrLziiL9bKziMzERpL9EhXepSiAHPBa29AuB",
  "key20": "5nAQEk9aGem5uHUbC8Qq8D7vKWRQq1S3UrWhrFZjgoq78WN6KKQLwQ87EJR1LhXe6izyQxrBb5qfHUgkZJqUxT3d",
  "key21": "64yuWWUMEKi3ifPJpWAox7UAR61rgXjZfRczma8LazurwaE8P7MmP2JxznMuH6kapUeywpfH7Xz5QXDUc6ZV7hhi",
  "key22": "5VpXL22ppmmAwrWR18YDHysEUdxX75m44M3xwggLiT7tMdRsdDo42tBucnRscBoJYxP7fkiQGQfk6dJCAbBxk1i6",
  "key23": "4izF4NX6P46LTa2XmR1t71VACfCnyhQXPKuZ683e6QeTpLKNGPpK1XnBCL7QpkURkZNzATcHmG2MjJkz4TBd83fG",
  "key24": "2mkVFPQiLSJxzbNBvbT6YXfScw3pJ9bKmFXQ8zs8pMQ1LWHKsHiuaRf9jFvdvnLyUG2radeoLsmJa9ubWztf2sq",
  "key25": "xMhxZVp87FCQWH7KDWJvdqNPbWNS8dPkbvAx5qpcK1N56CScatFP4sR7Pu6rJWWSjUNDrVAN93JJgJMgGqWMaZM",
  "key26": "4csxLuuNzaKy7VVPPgmSJFVZaysPP5hRjAY2F3Hrda8xLH2UA8D1Ep5nMTFDasHQ4h1FSSuSrqMvbfbJqmPJFdH5",
  "key27": "4YsffBheG8UmF5gNo4iHeoT4BYT7PXT47T9D5p98NnwWfb849AkeGACa8vnTQAJSGmHcP2BZfdaxwZuZMqrSKzTe",
  "key28": "2rnMPnpZ3zm2sHoXRFtyQFMSPu5koruTj7WLF4tqa322SmGN6F2Wes2up11CC8Rh4kXF58jaWcjSR9iC8bhoL1mb",
  "key29": "4tXj1eDEwC7xYm7cNbEk6v4haaaEnsQnV2DjvRSdDUxkroyZ4w25vAWmG7dBpcQ9dAW4aBVYym7b4urmLLPp13U8",
  "key30": "S6F43YGR16QeP6cq4tDi9hoyKaWYZk7otM6qDpRr8ZraYTHHG9DFXKakRAYb1baZXtSPKGmG4EFqhX9hZpcs7fn",
  "key31": "4xvfL8BzkJLmqbKjiZkB8zawQND8847R9jG5zBSbs4XCmhpBaSqWzeK3hUsehiSHnKFDs9cfe3edDpv7HHDbvmSv",
  "key32": "2QMJwcpNGV6nofbxAu5STjobHdPPWLPHyougrKExQfGmn8m3HpefnhsvAxLSnkAQ9Mg6xtntQSNwnNVeYDgMSKTw",
  "key33": "3gz6iDcfESjCbDYvKEymfdFvEaat9UE84UTgDqA63RXSG1KLjfkk9wuagiJnTUFQYbuJANwH9VxtaNtjTD3JLYmg",
  "key34": "4R8Af8PR4aKjNuWkawKrtNxahu6MK9DfcEDz5fGfaMA75RF6iPR3pR7Bug4YqbQ7WJ8f6HSA4rQfwaCd3YQqJgMK",
  "key35": "4EfqQ6CDVj1xZrwTTJiN16sTPNgn9CuqY5kR7bJuzPywuYP16PxkWHCdvJtJ9whZqTECtr2GiVQf2ReMxLQbC3GS",
  "key36": "3irQCgjJCZTWVAu7wXcCuxTBTSo4ZHnEuMM4fDYQC3PJ24A5vrutP1sgsddY185CaG9dQJqUFfUgBVMyLMBrNs15",
  "key37": "2vCPmtzqcJcV49z63smVRaCc8XdSacSywe88ysmQGJTvsAwats3s7W9XnkfyGkUnEnthkNozxADVMUGVG4RCQkhZ"
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
