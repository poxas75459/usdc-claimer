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
    "4LPmwJeBnjRMpv45zj3sp9djuAriFHmxdnkQd5aBJxBa4naJAhFox3RidgDQgWUXumF44sasmdggnGqbcGydeehv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RBvptNVsCvQBixZV9mtyqpYaPKccbUCjkFumAFoXwPhqza26ZChEwYLbU8pwfG6p2DMZANQ5eqikmtbPEhfaLuj",
  "key1": "4gNrngwR372FNWBc5xXDUKCXNSeKZ6awFJexCG4vVyhwYL79MNPHfeMcdaGjHqM8rMGK8bvWoBDJVRBY5xNckH3c",
  "key2": "4HrbEdvjNooHtbzdnPfHYZ1VsKPxXwWshR5xWhMtSjAdL2vpYwEenZr6ENbAASnHcySEb6pCAo5ePfN9ngh9hPLD",
  "key3": "uU4fkdJx3vsBbgFmCDYKhK2morXL4Mu6kBCiF7mSu1ENpKxEFAnn4D1iRktUTk6mmXRkVMCjUqHwdyUbpkkt1zc",
  "key4": "3fBBZweHsM4Ee73dEVzMtq1CKVSgxuzB5tQF71QxWyGRqWgL1BV13JbgZPz59CapYpoUSp782QkD4TTEeaeVssL7",
  "key5": "4XWG7pxiUegT2CqiMmFecutBiLH5ZErEroFf7EtGGHfDRXzdwC95PuFkvLW2mobEHoPk5NswXL6JCwdmUtSv42UF",
  "key6": "51HZDeYQnnL93PZLiHAvr2sy7q1LmRL2LLdGuVxYwiCd6QXZyR8iSx2mx4tDAqXsvq5fF163tj1VSo78Gr3C24Du",
  "key7": "5eeH8gWkoafeVHB7vjprwDzeB7CcHLAmjxhMqit6UbvNQf2J6MVn3p2vMLd6AJwHvfAVJez862KAvHEe5TTN3zj5",
  "key8": "49RQedTYVjhJa5pZAbJQJVrZfn1brgqHM8VoWMfMWpoK6XHiXWARhYcWA9G3Hfqw7C8cWmwenQDiofSk2pZ36wP6",
  "key9": "4aZM2aRYymLNHfqCbL83jw5K1deLaj81TF5a4kQEQSGmHBMgkhueCLnAD5hWmK2HX7mVz2Ko9irRZajp1P4aiswp",
  "key10": "WYFHdSSuvrUuQDFfr2fiThb6REeSW6UTzG5qVqXradGTWZ28d3uDSEpygLCSv1gxqQoFNyAvYXJHkXFV7QRwJrQ",
  "key11": "3RgtUYwpNrTNBnXAuT1Wjk4XZza5gaVwbH5Sc9Ct3TaspfJeHtMip9LGcmYYDFcFTDsk6WFPoCzFRKZZ8D892sR7",
  "key12": "3DaGe7QXWhbiLZBtb9F8p52ddwjS1Ud6ZVt8U464qH35vHBxw2dEmZQZ9a7WNf39VtByeWdk2RsXTEfL3RXkuzeE",
  "key13": "5NW7c9xgjPGVok2fW8yj2TcodSLYAWCYvUiAy1cUgCSV1ua5ErYHfhsXucwGGwUMvX9Wr1iXZ5thptHGMjJkMiYf",
  "key14": "4Z35BsLN1aW7ptfFGRbJkHAwcgTFWVKna8kQcE8n5gvcqpzBTrcFMi611MdTrGM3CrJfLVRAXcWERzuThxzGirMv",
  "key15": "aVVzvd7ehSjq6r12pgR8NPiQo2wjDH2MAbiEiZfzsaYrsRpTNEvZTqwxgvzhFxr6hzVLwhCWjfoENFxkZDzDQZV",
  "key16": "638YEfzH44W9VYY4bxcTtDqgMTb9XzxdsCS1C9ykxo3QDsHZhyP3QAmKLVfJnrY7jsNjjH1ABKkY6y768feRL9Ra",
  "key17": "E528i1QMN8poHGkRWSnbSke5ogWHHaGetr3n7sdTrSMm1xEsqDiCqo4iUhwHgWmkMJz6DDTs7d5vn6iW3gGuA5F",
  "key18": "2expBUQzMTTgGZZKw4Xawrps7uehmLVY398LxjzeQ1NS54b1UFguvCQnZjLLT6KZrbuE5vyLxG3dBw6taKKPhsEk",
  "key19": "neRTovadRtAPapS5DDRnJoiQo7xQX9YgdA6VePnbu8JvDt5w8xVicfgCgvJ4eZhyXC4DcsAGA95hZNV9Vgo9KXH",
  "key20": "65szR22CYTArgx2PT8MNTogni22tDT733BSsdu8kmNcYfCo131CUNMPonuVYq81H22EFbKNGGuP4b8NqNHtD3v3w",
  "key21": "2RszTErSLtzRPmfeLXdTg1qyuLtgRoMSaV43KYM1VrR9phkn5DTxdWHVPEi2jXJoGBFXTLSWEBwE2E2t5F7hukFN",
  "key22": "83Bh4kFaxGnrnWJFZZGGAaTmBUABZrhJhNXcNWcc85E7Jwf4V84Xit5aXyU3fYnjenhUNCs1iUUaMUvDwMFG9Yh",
  "key23": "Nu8jyuTtNQ3o33wgucuvkBfxspcUXtHzwivASAhG4Zqx5mdhBj7itjR5mC8BsVtw66YVNWSBspaUAWQ6AVpCjGT",
  "key24": "A9Jsj3USsCyZSabyAnsBGr8y1tUVTmv8nggEefX2Sne3th2UmVfMNuPaYetjH7DPuKK6VrNEZjE5jaVK6hxir6V",
  "key25": "5YYrqcAcPmSSZACkS85cg75xLgrsM9NSurNvnpmRJwjSf5obQsk1J1w7LnfZfrQqY3u7VANSpWtmiiS1pVadyb4X",
  "key26": "UomourS6oUXMeQvBFWSjqEDbhQVmzwscwuUNDN45S2v8uWUBAAtPAuLoyKnoK8cH3x62JmXZh8pW6Dx69NTioYq",
  "key27": "9DVipSUhzFzcAyKLVHcRcjW8fXEaFyhvhRQ31aVBEmroGpcF6drigDV96XcaMv9vLcfSFi7dtZDU1EjCn6HvV2d",
  "key28": "3KqqwMDqy7gAQ22ZCuMa7TzrvkJNDgAuyPBQXeefWFqEqeUFGUVXWsMsFZQw6LSwQqZu4PKJDGZjV3idoc3LuCgj",
  "key29": "3mdNEV7YmqiFJ3eShLU6F6GEgQkcD36N1yAvv6jLMdMYTEPo61eqbDHJjqojgPG88XRnALPbvQqeFvnKisapm3T8",
  "key30": "5Hwg4uveiuXwTsdQmHHg8ZZW5ENt4KWybwvVZ9sEhkYd1aNZ9tGAckAm4vsfhfj9ReJtodAX59ruegL9qJs3FRS2",
  "key31": "4GREf6cRrJjyU1SMWdzBBzMoXChQyfpnzs6AfiZF2M3DuwUiyx96X2KzK2EPyjnwSWHK8iCGLgqEjqhGh9LM7ZJH"
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
