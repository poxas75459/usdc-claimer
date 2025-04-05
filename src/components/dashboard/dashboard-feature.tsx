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
    "4QMqJxsyaE98iZM2hjSsggzXAYZboocUi7oizDAL2K8hqZ57FZEiyMSzroH2dtcgNiiJjn2ZZtKt3uw8KX1iNaBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sqgjNu6qFesEbtp1oM6TEd769kaxCSS7mWDGqbqVywBS89zfRPrD1a1bXoQfW7hMbu9zpszRS2FUzzrWWV7AAqd",
  "key1": "F6wnJdC1FGMcHZ5pihD1wub1wfgWUq2UwnC2ybCbw9xDCvHWcteGbEAWJdPcNnacqf1f7otHiNyfFZx9uMEQXBv",
  "key2": "43XcZsLMcNV9VPjZrS6ysT1PyE4eP8YiZ6TkhqspbMj7L29bA1t14nuAXcUVLKHK4oT67ASKa5MVTxWU73vZSVEY",
  "key3": "39PdSn4qY7e4NL5AuTvxdkkQ8fZYUstQjApnop8M68doyQbpiGr1fo2q8TJ6c5jpdt5fhBC9sKJn59UWkx3J9MpX",
  "key4": "3mCs2XixUQykjUdKYporJnjCumuS5nz32JBKDXoruyivmqWhdH4E1kZLEsGvfkdGy8X4yK21mNA2tyiM6mHjkJ2q",
  "key5": "2pAea7SVvuw8w5aqw9FW1RGd1uUDTUWiic7U4G7ynpj91NFqGZRUR378ZEXwSuMMeecEYUkokpf8MTUa2TBhLv45",
  "key6": "4gTYoeoYqqELqBkWgU1inLjoZ1iApQ7AKoCnD4gf3dJoHbP9svSVTEzd6qATREF5o5VYYCQqqXyQL6om5WfM1AkQ",
  "key7": "5xkxZc4Q1QFrYD63ZybhEymHq7GnzSm4cwTKPJVA96MBgPzCUGdrQoSJD72VKxTNxrWT4V3NvrGB76YE41nn42zL",
  "key8": "3coe84CV2s4PcnZpD2CmR2fDaDXGjSD1V3YkU4th2ztLWxZZTPLnoeqaMzPuMuooxTg3qMnCjBbtFc7CgoT75AWF",
  "key9": "4QYCBgncTriqDLzvXyxaDUwPERBXuNH1dxFEnHda49azQVNPcbQn9ogs7zfWR4ZiYdudQ8LJEfmHP1hsmcpGfYkb",
  "key10": "3zUN6P9u9NABjzBYo26rsigpeBiqMSMtYcue2Dyhmr7Y5C2M8spsfJVRxuMBCjKDs7kkU6NuYUubqshnq1GdQDE4",
  "key11": "4FZJEzHPunNemb1JvLJapfLrggCp43MUU9HzzbmvL4T3S7g8V386gFe6YetcdHjNM6B6GMToM9XBZ4QFJ8ZxTgMr",
  "key12": "5sx8qKVK8ZbMAxMmiAG3CMbbfQ6faSnPqvJrm64NvL6yE7ScqKrS1eLs1zsQ1Ym47eACqVtKcEwD8gghVpfu92Y2",
  "key13": "29Hc9hg7XKWtwLQMyRfEo2vDMKgpcemvVJdZiCKmJMXFR3YiDsEWc7MEyBpGNvUcRq5zvViU5XgbL1QbpoamEZUR",
  "key14": "2CHuSR7QriHqYq56TpPPeQhZXnS1oQotbXUDTA2uN7Ad6NwqFjNGE5zTvVeC9ynGKDExULkDCvmXNxQxYiW3MMnF",
  "key15": "4aWcMLr6y4YXhwxo1zBWnnNgzikPKDU3Gwrjn4s7f3fm2LRVyXx8NxWmNzBi2Qc24JvzF3M6jdgnQnQm7wLSssey",
  "key16": "5LdFHn4pfFCSav7Wba3JPLsoHZqTB5LJWuS4CSZKWWL5WYM8YpKdJMQ1jTksL3jMQnpf48DjCjK3F14i7oTk9GqY",
  "key17": "3KpAhzgL4E3ZJs2JEp6r5WqgfuPsn5wSPCAwQ4dZszeJE7tcZMwxzBDUDsc86T7aXhCiWNjp2gFm8FrRKbXpzyTe",
  "key18": "XviRGqJMCAYvYdiqv9YVN5tvDkjgyH6pzRdwhjW8juvoYYBkFRhzGoZRLhebmn3Kru6wxMsnTXNkvuMRnvcG43V",
  "key19": "29bALgYNnmQyg7wV2ZUHs8Yi5Gsn6FfyFkMxnH7NaiWwGxbRChHmrVWc9c4V4AvQYYEpQsDWYCb5gdtHrQGmBQg7",
  "key20": "3q2MioJH99z1oDEFmCHvkDW1fseManvWwjHapsjQdTwxDGeWJs7RXabad2N4yNehJaKh5gb3rBDumLj77T5qYVgd",
  "key21": "4K6iVK2QsutasEKUSAK5sBLVTnqV8M8LgQ2HKZufPXNwrnRLxfgynfWUje1Ju1EG54rMFabB13iQi1GAjZrtUiVN",
  "key22": "4AwS19oJN7ksfkgpRJj6d7s8qA93JjVNjnsDutaGsnfhJQgmWWXn5M5xmF9zV5R8g3mYAhJCg6Ta5zDKDS58YymC",
  "key23": "5tKd3QJXUZcgYSExA6sbHR2dEJRa3X6jwGZjVjoXQeugjz9LA9oLTMoDD3REWZbpgmgrnPiyy9EpEtpFpUcLuwDt",
  "key24": "3p7vDiGTMetVffdFvdZZKtJM2kE5Xs6PCW8DVViMLdQMa1HtWFsv5Xgri5gHqZfkA9H4AKhyzcFtJacpYaC5iDYw",
  "key25": "Nfvfm93UvMbJk1zaeYZAUJomWW7BoorJH7bJPGHKFfxeeZ4kNiUvfByEaVvsCJ84fMwe5fccTdp4JWPMVyEHuvH",
  "key26": "5unMnfzuEtYGUtz29bMUa9Nb3dfrCArLbftvL235cnjxq6uV7qxRDm5w6vdm1eEHWfMafRQARmVQmH74BsfWTfpU",
  "key27": "2cpLvAUJgtc2R6o4YaX4vj2kuVoZ45uApFKWCeSejLPqxsCx7uKVGvXTf4bE4VxH8Ci8DpZxyPQohPDWKqjEtAsi",
  "key28": "5xirQphzsjpEY8g67kVahjH1dRWRSVNmFfErpnTuFjcRtJRsPQjRbQWAQuokGmxhyyBBwDcEc8QZ1C9zoAMQJNiL",
  "key29": "31615M9ZRYyzCFntD8SF7rnRZw2BG51frMVsk2MMRTD6w4WiV2frfw2p1YvPiTt9uDNJmktThatEJPcWKwJuTE8z",
  "key30": "2dmmAcKRZiabu7aMFj2m34FUMcm4Lo6rhFkxNNQp7XGZkLFjwHQCNDtgd2SuAU4Wb86wnWwKGM4SFjkwGSWGtsuG",
  "key31": "J6s8xZ89XrWeMHqGsZ3eLhynyFC1xmg3HmLehJwVsn2wd7DXx5itcvBirC3LVQvnMyg1aLDFds78Xpw6rp5gaUq",
  "key32": "48YJcE6BDPYcfYUqiWjbn7ukwjo2LXZNmCBZFcA6TFhUqCJ5H6hazhNeefNEZSdcoKoGSc9XBybTDXohid2t6MWA",
  "key33": "5dNxYkAV6K4NEiWMVeDuYunqLHkfxSbqypo6Qr8bHZ96mbkLVrTfRALm8nSn9TFD3TfiaL8kiGD2BrbsfFJUbLQq",
  "key34": "n4QhshGu5rvGg4ksDYRxbXFPdiH7V2GCEM7bR9cz7QpxiqzCNS1xovEDjMdtnPqfBPbgJ73DdXSejwMbpiHugLp",
  "key35": "3jWTpde4JMWuVZJbx3nVH9P3WwLPsU1u2vXHVTuBQ26enxytJztsTZGc8ocP7A1Z51siry7edpKL2g6fpFWMGLRn",
  "key36": "Rq7Zi7oTVuK8Vub8u9JwV4hx9xp7SkBjmYj8zVn8jY6JixHaw5r9zvLDCVptnpogHonQYDcUQ2WUo2yCXYbPDri",
  "key37": "3tkynNFbZfwcnCgTsHXtP7WpVNKfxWcx4n8fH2dVUP1RkygBnDErVHRYMV1dYiQjRVNnNy5wnZm6knsZ2UYieYgg",
  "key38": "2apYrcrWuYDfK4Ah25F6mgyn9wcBvZ93Vbkgg7QwzG8n7JLVGB3K6Kd2vnmZ4UYotbumyfnYATBxm6pmvBirdduo"
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
