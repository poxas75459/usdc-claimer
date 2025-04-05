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
    "2HSwdburcNJsTkg3B3kuDdnbNkqfV2c4L6EpZfoj6Pp2aNeTS8S3LoxFMtsf8FsdzHqaF81SQgyd7YVWDjgeo27z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4duhnhvYfc6J3MSdUY4Rxep2SVR4fy32AWYneYC6Sgj6Az8nKPmo2UjS4M217FJ5N1eAaBbJTnyx6GDsYynx9K39",
  "key1": "5c89ppWdWa2tYbacdrkYtqVTBkwtTFqb1ERdtgWdcNefgzdQ5mCx8C7V8d38CEBFnRqGv3Ebdch5oe3rGxgJxLMx",
  "key2": "87mDXBurbktsQogC6UXXgEiKtye1Psn7sTEBa824mTv2VFvMseR5exTQToQLMbyZPaUoVm5ahsa7FQfgSxjog97",
  "key3": "5aB16VGqoWShew46tUa2yrMtZTniEtkq8aGeWTy5tWnVQRmecs1f9AWJfFfuoafUkJatLRUgPQmiq1VkwMnWTwMt",
  "key4": "tYwzvwFKPajt1YVrfqvapG2eCqfadujANqTgrkottkfZrYTx92NCzJ56FfgHuMLJJRJ3wZbhwyVPRzqYisGRcLf",
  "key5": "S4v24XioPsCzp4YyYTpErB8vhK2U3BeC4VqJaXhs4D2nqtWL6RQ7GqWTZywLHDwfyEUD5KXcoPpwWeU5NqHUzKM",
  "key6": "2W92WQ1fhuYnWNJGZMMySh689v5BgN2PuwdTWZKi42UfZETEd96oGGSYudaT47y9odHfvP7zHvKnyqfKDo2bRUWb",
  "key7": "34pMQGY7Yj4dvnuJb9asPj9fYBQrreANa1x3Axss8isch2hTwT2MoZGP3xkCS5rmBZkVWavGcmsH5EfDxnw5sXfL",
  "key8": "2CFMHpv8viudLSxTrRWeaKixRmNoSMzC1xD3XYgWuugykrMfshwu6DmtqgM37yb96PrwqiMuCDAtMjLa8btTF9cz",
  "key9": "14WW8oVDT9D9zcgiwCnFmyZ1ss29TgBJVSh2trcVPEv8DnhRPyNNFbbavjV1Mtu4bwNhiNUxiWK2WSthR1aUKfc",
  "key10": "2dLKSx59yu5XAVti2ccs3moa5j9aSSAqQ5RARnxjLcbTuZWXNLxPD6ohQWrq95H28s14ZToiVzM7WFwQaHze38pW",
  "key11": "5YQKiZP6qUvme9S23vXHETqasB8enZ1H5VohShQr5XwAT6KMW5cqYFgyqxv9fvgsZUbopJAAjNmcKSmQz2rouTCY",
  "key12": "2pc4XfMEghG3hhgSSEqJGLs75kaCFUw1ge6bzLSA8bjHYejhoYvHpcYSvJ8QafBVtq9bVz33Uz7JEUqPXSBmqQxZ",
  "key13": "5NTZNSK5AzZyjNhBGGCetJjaJutctp4Dvqmoccz89R9qECMHN7GYGXP66anRAPkF39KvdSJnZwtjb1nYVN7Nwbj3",
  "key14": "4o8eNNFcY7ux8d1gtzsxaP14KwpsTT9ebK5ZJoueWiGZE71Hx1uKRYUkDH3gcRNw2XV5Bp6PWLGS6cGg37CaV7wM",
  "key15": "53pm8w8phhYidTwJeh4t8dKiP3bQMGfNghvtPiWjPxtAutmAwacnE4254h2EWVSBDHV97CTZykh3qVzRs95ATsJt",
  "key16": "2CLX4ghewSGsLMzqmZzXviEHo48HJjLnPMVdSby7EG5NGA7TQpyYfj1PEsVPb1GX4qUTcX7i21YNcH3fMvnLZ4Ac",
  "key17": "picjBFe9kVcMoicpdbWX8GN8KsiXcLhPEVvhqEywK3Sd32BH2MZJt8JXzqyT8CNcBHXELBpiYmVwckrmTkzmzxp",
  "key18": "3CJH7nHUavQvPLomqRtsSwPztSjEi8y3pjALufu4sP8XLHRjKPiBRxTRY7EzEj5rqKGE9yK5RKDzB9gtHd6DLJU7",
  "key19": "KZ4X8o6YmwQ4TZPeHDEYFa3mSLgdV72EiTR23mYmLoQByq4oAMvx3uQ7RCputScNPJPgVfKsvbCwMA9iQFsRCvg",
  "key20": "5uuaRS7fTgD7J7TUfrLCgXDQmsEUgdLjt5StAizp48wY54pCDdvwC8y9DPKq1GYfVsYjyRBN9dmyjXRDDEM23j9M",
  "key21": "53VwYUv13TC2ZvvddCcWUErKpFon49RY4pDdAqnCRbodbuU1KspRVUuFgV3ftM5HH2u6PREMCsJTt71HWCQdj3dX",
  "key22": "6mU9u17vG6cQUjwFJSiNXgrjhYRKwCChWG9w7CvXiv7kHDZGY8gPWwQhJxBTKw371nyfpb8xZQh3cjYDwQstDgo",
  "key23": "5G2sYKy9pnXzGB1eZhmgNY8TddfeC7BB5p8YRj7k7gzcexamSyUDd7y4thQf5nWXCinXDANxQV1qaWWseuTNcFnR",
  "key24": "45o5Fw2wFX2DhqNCaasAEVrFTv5VqoB1bPmqt8VByVyxy6heyNKmrMo9UEsUXuGxoTubQuEberLANd8FtD1Nmpvd",
  "key25": "3rak1HcQJuRNwikKrBKsbi7MdiJvnA9vJL8XvreWuXyXaFnD3oVuPVncCLk5CqmFYtMi9CnKGEweMpTzpyvMuiTK",
  "key26": "4Auh9NMTcU2YAnjrnBbxASnaTmvJfVGt6UZF2gyYwtDEbFLaYwfgHU76Ne9pk6RrytZfUo242Svu4NgiP1BbXEjZ",
  "key27": "PRiHQjjKUB3T3CF2qGanbVEG5GnoyrNjcAMqqz76f1SKdvQKHsAeL6d7tsaiYNVuub7on5vQJsQymj4hETvutgH",
  "key28": "4wdmbPZxJrEgwkB8K6XP8iGQz7crHjTJer5RAWChvqV8NdTAoPA7sA6W1FfyNPnhsVZaohtVCe6NXt3z9iLbxRsg",
  "key29": "5wzAX774qWZVnkeuFnCyH5F8qh1U4C4ztuuuahVr8XkCA56BQUo1iQjVM2sVtfDBowDq7VtzK3pAB2pCYtCDwVGg",
  "key30": "5Gir8jeRb1JHicWXkczmULRFmi97DVKvV3CRAM5sn6tdBsB1XR9eWsG1BRG7NcMkMmDjKDbi2JUiuaubPmMdeb9F",
  "key31": "fk5MskF6ckmK71d3j7qs4FzNrZr7Hk4R2q7XZ1fDYxBVFqqmPztrc3SYDQw7UYP1jjZmXamcUPme7Ur7Cy6RVeZ",
  "key32": "5Tx3RRXrhZKGKxi5Gw67CHKKVpzf4X8FH6N8YbQ1ZPzZ2PZVNKcZUNqKc8Wz4FaSToAdCsMZpRc88NdfAhwPu21q",
  "key33": "3ex2xJ2JS5PxNY8dC6Rk6qBGBxHrdSy4bzuVwJexWgw9vn4XQ8iWEeXpX663pb3kDAfU5DHVd7sbBGakmqECYrkW",
  "key34": "5ur9kSmRzsx6LYDs5CzazkoT8zV5rzoasZ8goyJgqfcznTXqkrV6YM7XPRj8MqSE7sgJWi9vJjHF7yHuJPF73xG"
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
