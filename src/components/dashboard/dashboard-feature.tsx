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
    "58mvmbMCWQrHJT3USTzWEem5fiQpz9AiCoP2pLPntqQEhuSPtVSnb7EnT1UrwBCwrUszcW4VsohE6iAgXkAj7p5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g5aUjLCWrMZqsZtVNufsEPhsY1UwVwQ7bktoxwD3z1bC7VMufXV56NNNGrtRCA7ZtBXRDSxi42oC5pDc8dFHqqx",
  "key1": "46t5DVcq9QfqU6AVpLi1iwQcA9Go22mkvyF3cxCzWBPNfv2G7SPUhpzATc3tX5KUGY9snBUbUcfFoDy8E6xFTwnx",
  "key2": "3QjNU3CfpkiDPhDFXszGqyAc2YYvwYLt8hgVMXHRzRruiTYz4sVPDZXPwpDeTfHzmvnCunccgp2L49XqQf1YRqVY",
  "key3": "zh7D52x17Bq1Mx4RPjR5tYqBLjDefqFYSQ75bYSvsZsucFqjPdWrqFvi4PdvwLEDH3kQftzjHePoFBXGqQzgbCB",
  "key4": "2KJcuqUhpcKqHXVEd9Kedruzkp7HPQCJN4hfG5U4C2TXp69NZ7U5Tz8jVzTkSTestTZnEJFst62pRWhKkwyHqqtc",
  "key5": "3EiWZXjiVxP2TiCbjF7KDQm5tiUG7XLSNiRoQyXtDveEo5iRWtj5bmACrsD4RqY5MAehWfG3529xufqyJehU9RwK",
  "key6": "3if3xCx9CyPomtUcK8kXaiVYQ9hfAu8GnTTyDPEH6AyxFyzpA1i692ZsFP8tVHW8PoTb81oCSeptgUciWxsmW2so",
  "key7": "63cW6bqaTPHeitR7sMmUx22zmqmRHSE6AEHJRyLWjDNEsfYD12wTp5QxFk69YrAVwaM8XXm56dfFckqopVZEj6pK",
  "key8": "3f4KHY5nePEtKB4p8AUhxh8tEipXNav9kJ8kbNKBYgxTSHuLw2nTMcAdso8osLTrtKjTJm1SbNkGv5XxHWaLtxz4",
  "key9": "5RUu8aChqg3oQzA94dpZSzmcVAoNWNCrYms2u1fdZAXadZxnVnsrufaX7FkpbSEufq6qv3nMW97UaGRPa6wD9AE9",
  "key10": "Enh754Ry2Y9Rt7GoECyBibuXAE56noeauwsVcK4wUX7vgrhga86a3pdcPFE1mBuBe8dqwCboQwW4LSf5iM5UGnb",
  "key11": "5ADUvxC79fv8q5VnqWKuTL94Zp2im5an7TwuRkSCMPKqBHxarbXk4UJGuP7moA9WNDeqTnqVHZXUjsEzJhwCtMzD",
  "key12": "3ofH78LRhP3Yga92L4j6vFHbocxWcTFHHbViewU4kdGjELp9hg8KREwr3VPGRAdZmeST2UDypXft5Kz6CwmpcjZJ",
  "key13": "5L6AsKen3kvCgDkUTNMQbsubeSvPrn4F9Y5djPxZzf6HJiyyA7d6QUMBcbMnk6k7kUK1X6WHt2Rivxk8StxNpNYt",
  "key14": "CqnjkrMXoCmeUcbrcsXX9NFDfijP3iuMfTpHLmmqM2HkB2LgM38dMFA1xiPynDKR7JauJDWbpSvUKThQfkRvaDL",
  "key15": "53SbwwJ1B69HF4ZEy4N7d542XGXiKTAZnxHiA6jWUcwY2EgN364GySDYFHq6DxEgCjDJ3syDqjK4eXJWuBHbqLDM",
  "key16": "2LFtAwz8t8FqaTR84rPYVHiT1w2Ht7HTvePFdjphnn92vny82Um4ocPMHmGCjiyFgvS19eLbssWMRBD9PeChPNSG",
  "key17": "5ZATYac5F4LH7QpP6v13rwZU6iW4acXG4ajFud1xrvf3Cm9Y2rL6U8wdErhPS1ER6JUptN1P4FCUDw8ALXfe8BPF",
  "key18": "5qjQozbYgT9Cy3j4WJhP4PGiYU6dhMTqEd2CCAERDEDyUJgpDfaBjmxkuG6QV5izNREz2nCi5nevfiwiu1VsGTfp",
  "key19": "3SYoq46RZ6hsutFD3eTmViATs6uK4pEuqrB6zGJvLMdhgSYMpNbccdRKbXtmFNcWAopCsk2KKaVU6ZrfYdHh8fy3",
  "key20": "3aixkk6ApwgHWFGhh7aEBytGsLubtEPahY7v3x4Bmxf3qyNf5YUBxyB3EJWQhV8TYs9kTC9hjgThRfTWCoirBejP",
  "key21": "2GVrCSLv2ATddftHKmfAUP8J1RynZs9BvJGRmDfohSPke8DWTc5bBdMAnXwVa8wFE1WzUkaKsVo1sfrj1teZzXvY",
  "key22": "r4ctPyL2dwpwg2xQdFJpBReV2Dr7KEmuKCcrfG5xJr2t8naswxHsccL3qMhpfZAbp9iF7aXqXGG5FpZPKeV7jUv",
  "key23": "3JWg9aExhDLMXACxAUA5pU1ZGdQuqdbpnNgzEc53oynbvi9hqtYrwQzVDcGGPy321J8M9T6mnNsFHWeP3pqUxJii",
  "key24": "4FWpjVdYWQGJ9JTTgGCwPmC3rcLgGS51e9H3QZEYXjJaArBNGMQmFDbPnyD7zGCyX6NEHyYm1Luw4kvSp79oWxQF",
  "key25": "3Fc4KeFdBNDaEpts9w12Yz8hutLuuijdrzCpR9YqxZdHbhX1L5qNFn7jZc5jGJ4Hbh4hfPEPgzFJQU1Bsbpj594y",
  "key26": "4eNU63GrT6dhzvW8D9ZHrHeQyRv7vp6jRq1VimPPCZjy7wxdqpBqGrcskFoN7WfcqL2Yj22E3a2QUuYzcDkNqytx",
  "key27": "3JM9yUfVpe3etwyBt1L1vi6LCBPFK6Z2YYuApwsTjzfpMnzVE5KyCvGGzThEVJvRbAhkPbYKdAoZ69hMQrmhYyhv",
  "key28": "3DreLzrUGfv8awb7sipNzsWbY8nWkh79MweCfrHhFD2hsZDYaWAmCWotujGoqMRUNmJ3MhYdey5U51az58fWPMNa",
  "key29": "3n7ehVsEW27VrHWeXG3Zr4rwqbcSHMHCSf9FtUpnip2PuWKgZxz7H24xEWf7HBKbn8WupThhBMEJa9dNvVdjp1tr",
  "key30": "51F81r6xLPLuniKe9S2iJhU2176J92efFSXw7jC4ESBVVvAhsRSn5z9KeNz9eUP5UDwDgPyi1WMViWv1ZchvzWja"
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
