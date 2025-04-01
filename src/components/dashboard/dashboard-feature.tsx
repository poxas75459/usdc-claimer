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
    "BY1QrhUagmFP6pM8Af5d1YBkv5XZ3Rvac43ykwBR7dhBoEZVEagS5YBMBf1CDjgXHFS3k3LHmny1yDtaR7FWgDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6uzXhLtZZdd8ygpNezhH5DCUc4SUgEDNjgXrdzUhFgs5EwsgP6B3G4hMGm1ppQEVYRjwkC4PFAaYWzC25EggHz4",
  "key1": "2A9KYLfP87iw941iB6RsRFobkxbzcgP91ZNKBJxhUqgadL5XNe82g4T8hzMH2EYDKiUd1WunGA2SKhqiDBNNqPAB",
  "key2": "5bFpbnedHyqLywmXAJHdhMZJKb4oSiNX9VuXpGhDoX61uyLZxGy2RdYWG9FTCrxZAbn6BFefxmVb6gg3PXFc2jsH",
  "key3": "cn1DkbHzM6CVvc67KDMFbhUPbHhaUvDdYiitk9tgwmzWWcgnURtcaC34urvhhvGFyYupCEgQdmD5f1huQy3MYLk",
  "key4": "3uaoagmCZkTDe79D928BTkGE5hReCmkzqLjkgEfAhp35bZKGrf4TzMTKEMGnjn1vdWktNZNpzGgvvTSEJNuNc6qi",
  "key5": "3WVThTmMna5HTzQ9UcLa1uBdx64RBSbtxhKWcPa1UbvdmEx4ds1wd7Z58sbZPMQ1RZkcN7txeYeDMDaX49ynZUrh",
  "key6": "Zs3MXK2W6uBGMY6rEvwpfzwe1AvjavDeCPopMAYuAmPnAxW8aKx9SV2sV1khL1z4zEAMHeipV3ZB192tyb8pELJ",
  "key7": "4w66P4j8T5cSnG74cMDF6ba139kWquJbdcy6FZyonz5Fjqi78KGTLkpbiMU1AA3nkKcptVQ4iv5eDkEA4Rxe74wC",
  "key8": "5UDNj6kued6erRznTth6qLZVxjUsrLfLgt1jSMHKBYQGZc7wmWMJF9jtyJazjJPBGHCqy3vUgMzkqwRCbA7iLJp9",
  "key9": "4KpGpugpt6W5Vrn22eZEtXmTBs2nZm5XzfjQexiJbF1jaihGtGXpfbXGMirFxrfGiqFXm3U5AhVjcxmpmtbCbfsq",
  "key10": "5JQxjbyHyZmVBzRNBCmodxyRRku8sDV8sNAsWtojJ6s2yzcQnyKdj9Jb4obRJDVuB8MuKk8fXpvdYzjV5hLg6o4U",
  "key11": "2uMA1LneK5QFmc2LTMDkFeR3aakxy1ftevXMegGjx4ZsADt9mXYbFNLik2vVKuj7XygkdGef8v16mNEEy19vNoNg",
  "key12": "4UbcZZFsSFAgnhNxvyhwSNwz2KrZuupyUcAGp1qmf6RixiChkxeag8ozXZ2zhPmnrvufJPiB4ZSUAgxEmyVkY4H8",
  "key13": "3voAywJu9JNMs9SrnD71kmVbzrSf5bTGt9pMdpacj66gBDU8wnvkDDj5cr1mXc6v8wGNyHStLxeoi7REAWN4tGy7",
  "key14": "q64v8XLuxzH47NA5cNkzBKeMhXxBZ7U4W9jE6BXUtHYerfhskav2ShiGnYmdPwmofLisaxxTMYu9GuJmfjwa4Ph",
  "key15": "Yu7uiSdxFKQ24Q73NC74rgSPAAyYiwrhu1eboR2ionczpRBXVZKJYzmv2TqhJ6XUGxXNsHns7ASajmKMqNtzwks",
  "key16": "yE3WtFG7ggjpQDG4t54ckzX3Xa4trd4tHrohXkM2FiwLGq4WuSDt9MpK8ZPo4MLk1kGPb2Mcac1v7rShmZbu1qT",
  "key17": "4u8myko3HEzqdmZ8iHsFkq4CwtvkVqTYRovZHhcidu9KZhaVaui3X9tafUiw4EFyMNoynsEqd1G1QgtDZ4WVJtym",
  "key18": "5pjX9GxdQ8pWaVfZotmcXrhHwH9fWkLppCVudjoVQG3KtrM62S1qTJLLuHfGub6ChW5LcmTBQ1gMnmvMYYH84J4W",
  "key19": "5WsdrPQm3PTXfEYbbz445SWbPMDYdjk98YMLgmjm8nPgqMMCpjEzJFDuPLwxFwbZJWB87B5UFcdoqze33ueVBH4U",
  "key20": "2XQYQqTFLHH6aybryZDFMM9qWZLc7YUiKnD1LEeCjFY3ni2f5DjWHQ7gn1jCJKZPZPmb8DbWQ5grg8DC2SsPvdxX",
  "key21": "2CWo54Dp3NYkw6nfNFM2Ncws7fUMyk4A67u6WMUisXKmgR8x9RXHVPV5wduyygG4KvapShyJcRfMbJ5h9ue5PVVW",
  "key22": "31k7ytowv9c6CDM5sv5YoCa7gvuXEgsRyfGBPhJLJbSzw7tv1tqFujNZwQWrx6UHhBnG4XocrvaB3tN8VhVHk9jf",
  "key23": "4r14ftpYWM4avxxt685D65Jas7aqV7f8yjTsbiz7wB2rPyhBqoYky5GJGeXxTaKd2hbmCT4E9sobLkikJTsRq7xw",
  "key24": "3YjhB7fCSp9DfDY16q5cjDSQZXs96Xnakoa4KmDaZ7j1Z6UqgoSKVDLDvJ3yWACRqB2VRmTv7u78GS41WdQT87nL",
  "key25": "5V5E4kWpo9JpRPA1CvCwrB14iuZo6JFW3YYfVDV5gyNP5zKFDR6xXuHb737Edcqv38PxTocPcs1HW3wsCwMRevtZ",
  "key26": "35SXQy87pfRZAKFgkvvtSat9dY9LnfMEJJKNpMxozGq1v2MLCimTvrhzbikcucRkWqnCrUEeQcwnzoanSDjMK9FP",
  "key27": "3U2A9UfRguSc8A9ZaoVtusqnpaCyLKNF4fUsv9dt3fdFUCGYXKFk7J7rCdGkhhmuZBossjGoYJmuBXZnNANHbt3W",
  "key28": "2DmfPM39TWuGHzRXGoJMpGKeSgDTrEf8K5XaqBT8KmMv8Vt9Rzudfp3smz2bF5omih21Wi2rquizDfqbbuVtunSc",
  "key29": "3wBnGrM2TcH5BnHPKN5jABwFhT9KodUxVykTLZ7WPTt27rEEUYrEGtH1RM9Hx2VVL1vZn83qD96EL2j6G9ZDMbwh",
  "key30": "4QnGJTChHJtFfvpqmt1riJq4pufsoHnBdmGaHEPX5p5H9QwQgGshaBjDiZ2voQDiTUmRZ35V82vd9wnMTatxXWrR"
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
