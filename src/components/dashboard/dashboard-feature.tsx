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
    "3J4jcycuJD8o5D3EGKqJCfJpyEnoB2SWWAsX3K3kUUsyxtQawYfNZzEarZuQKfMcb3hJsLfL1cU2nSArUx4Y977M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fdHaajF9SSoKJHhaY78MDESeo4g8h4FktKpHj1vWoYNfVsP8q8kQPF32DnNWw5Fmsy8YnZ2BFPeR1EnqcPpsp4Z",
  "key1": "2j1eeUZhhmZKtSfBjCZmtnzhiWq1oQAkCz6kDxpCyab9JvnRgpSdvJwxoEnZGSZcjmT7V2BxP17LQRSkhNqLEMsA",
  "key2": "4XMh2aAQrnRAgNvGPMiNowBTKoxb9srAGm8PYrLMwvJbZv2y23cXsQyVZCen8ssov6eePCco5u5mRC1T559N9JQy",
  "key3": "f7ULaFzECPXm9sk84zbcnhRgtjbEqHn7MwCQqdushJLzvz7hMLnCQp8vaS3rW2SoHYuHXmMfCUy3uQKkjPYf6hG",
  "key4": "3azX29CZYgkAVq4Np6EBww6s311Sfqkd6krymZ6NfisLY2bAsW4NeWp4qmAMVXuu7MC8fwB9mMCVzz9QW4dCbGCM",
  "key5": "5dP5tgo8K2MqnBDWX1KNHdJAj3ABcSJn5yqEarREsS87BtEucX6Y9HGMS7CA1YzarbjXKLNbHJN9JBZ8fkw7T1s5",
  "key6": "usJqRCmyXyDKRvXRGgPmUBj8AJojdbYYfs3aee6snmPEBLaZ8ocyKYjoLzJA8jaTRucBqVawcJ5NjsxiKTGtKUV",
  "key7": "2zaox4SBym1RrMjAAQmu9Kbe8PzX52qW6hJaC7LB7m7UJLrHtkmby1CpYx41BqYCyfuheJ6U6kJAWZfsat71bhgc",
  "key8": "3Ej8rWrbeo3hQNLyuMJkCTtYAiiwgn7DuQb447bnfQMAqk9RwyGdSFqCSdd7GZ1HcjvNKrHrUySrWJtoEmEYnjft",
  "key9": "4p8XakMo41sYPmQF9U9nfyXTr5UAJLht3FeuvzgNvnF9adAPvhUegZ18qKWMQU98CgQtJ7uKw2CcwE9QT3Yp5asa",
  "key10": "3hNC21dE15sG3ezHAsjtHx2JcCmEcMHgkU7V1H1ztTEWfz8kBT7eBBHieyC2sCah2Mi1nLaFYX1vpstdYJChPX4D",
  "key11": "4RdUPfjrYoSDriTabkMbZsuPPX57D4MaaDhzPJyBthQQRyhMqHKkpw113rYdj3tJaeYr2YTmieEDQRf3pwMqZ3qP",
  "key12": "4scMqPtjFRW48eXiHVPD7D4BeCx5avHBh11X2Rn8z5gMxG1VNartc2NF7kDJ84zYkTk5QZzSX5qz2MBXKLumGtjg",
  "key13": "4Wsp89izJUnaJT1FKpg66kx5BoHvtnv1io4EZU2jERrn32upnQUxGG4csG7xss3kthm5QNVfyuek6h2m5Qyx1qfu",
  "key14": "3zvdt4c7WzxK7HJoh5pxwHT5JDQCrnU1SoKm8Wcx9k7Z38LPxjywY2rsvvCr5J25jXUugXuSHckFmnEomsa5DM9v",
  "key15": "2DaD2NjFDVWZZcjzCHGFRZywasBqACwyz7nxukYxzeD2zhg8VZadGHi6d9fXYq4JQjZaroKfPKJ7bnXxVWHw9vXG",
  "key16": "5stqkHtDWvUVuuUkd21aen5SVPVgMcgMCEa2QLTjb1JgbJdiVHmnL84wS12JyzdXPBDVsrz8NkBX2FQjGGnJd3Vi",
  "key17": "35pjEmNTGhUtwGHTrvdBhJDR6XWKJwE1E4rxBwBdZyLfKCk82wu8HVvJBWGfpMqKNZsGfzSgbGZ3cuc1PwhbAPQr",
  "key18": "4DxHPCtJcSHUPDkeYpsKy7kZC6gVn9xtVuphdhH9LsGGhhzg8zETDgy2Aw13FsaeDwxiAj14UgmkbZf8WkL5qMtQ",
  "key19": "37Fwjzw7XYvkqUjyK79irMcArX4znZrk36iCskpeJoZozhaHtY8MQmdL2D8LE6atvTpxbR7aBNqjxcM4vvfMZ6Pw",
  "key20": "5KRPuXCmP25YC4CavrtzdNRRZLZJxiFXAa7An7XrGBkMDmT8SjFmbK3PvZZw7TneLodMPnmumYxNWcE4fAQa9WtG",
  "key21": "23c18bggKc5Vf6xWmmAan5zHyqhXBVnWhGeJxKLVxPkeoRGfq6GntkDbTEGt1Zy1jBGuxqKtwM2163euYVFSEoec",
  "key22": "99TS3vMbbqrHYwzfQBVUXwSy1aUFMPBM1ov2CeyLF5VKDpDCqRm5tW7rbR7xbsLWnZLQt27SN2vDCXEw6CS2QWy",
  "key23": "2HkD41WZXJgHtCrdFQvgtB4SvVsxTS3HFQArTZWusxVeZChSB7jQDAmGSDcWc9inmB31H3Q264y8HmGYzk3kHwM4",
  "key24": "z1cR3f7TcxK3rX4a28js3pC1Bb2JixThPiwFEtYGmsbsGeBAoecr1mdPpe1bkSbFKvTVnBXpUJCYxH7HD1ftJye",
  "key25": "xJEcxcXKSvi7dK9sHUHojZNRDxDtaytnCbCYLkenzvdL7m9uWLBWSgP2yGUGQYUSiaYsGvUXNT4X92SoPRGGmzu",
  "key26": "2WZUCVKTeh69bTaKeds28kuErr4ARgzFQopgjNpMv1gsbHWm3GneMzJrUPLi74arAi7brQDv4Lk7QQa7ZZnmzSyu"
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
