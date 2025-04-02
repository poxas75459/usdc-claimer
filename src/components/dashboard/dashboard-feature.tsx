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
    "3A4xAjF19bYNf4enq5URsCTo3QDAqJfDWUxwqqSFNHckGtMnDh4s1U7dUJtmLd12TmRAQsBTU94ZwSq8YnKmKLti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47sA8uyEhF2gBhpSvHmjtjNjCiCmdbaKhqdZdWhtfeFfFKTy7jzJZvPcVXGcQgRD1cnCkSF1k5jxsrZdzBJrivzQ",
  "key1": "5evNvMfzKHkoB777MyuiEmGrPPPpsRM7mUYut4mdKuXC1W6vh6es4v2wxrby6tjqujkQLVK59hLc9DxdoUvcdQPg",
  "key2": "27dDZodAAreT3yrb5rHLMEa4PTEpzxcq7N4pPQqF6EH2oSpKiPrjjuJfXJGXRDNn5ExvhABAUkn8kRBUV82TqzmS",
  "key3": "5k2Vo1PHm9k8mVNKMgip6LmpyHdk8HQRmXB8CaknZasnkG4TBw2NdLDCAKrCzGywfZznzmi7skUMxcHGhiUrCJ3L",
  "key4": "2Cj2AvrYHkzghhT82Lu778ugov6Ypwd1whe82HwFAQh9gLiMaK3ghBnnnWEoaTjLL3TaVqfbmtduNsK42ary3CvA",
  "key5": "utzKc9PQPuXaN9wbSSX5F3SV8wi7y9Uwk48pYTXyJLMqU9Jx5Px5N4c5HKVPaJ4EdAzfm1kYv3trEHnpjNwDRio",
  "key6": "5MxsKWSFCVfGv3uaY3gTUmffH8Skqw4De9JhtXV9ZHbt15PntfmrrieaQEMTfshTMri1YLBGc3PaqFiXWAMXxKVp",
  "key7": "2nGfyaaEhckgv15Wc4N5tv6MzWP6V6DhAPAzvZRp7tuiTiL8Zfdon4bUmH2Juvnim2kMxtR3XFsvXjsLCYM9kA8Y",
  "key8": "8fCAT7HF2JkzMN1WYXJUvtKCsFJS3PuHAZJbffNShKMaCTBSK6Db5z1Xqw2NjqAUAYFDQhz6gfgo9VgxauyWJS6",
  "key9": "5ykjJFpvP2BUJWVQnAqHLaYSfoDVpWiNB1uwzYXK2VPkHWoH3eK7R1Me7JtgnkGy8SnmNBGMur3RLUaq5yWU3Yzi",
  "key10": "2XL8U4x2zL8UJtpKxRVi2HxuFjbFi85cUhTgtJBf2mpsBnCzN7Bo6T3xsKKvWwzE7SJrAGGFNXfdovZR2JA7vL7t",
  "key11": "3k8bozhSm5ztx42dnSxpogzW1usqmp3W7nuXH8cMQFacRqeqvrVoWiZiVVeo9vuqxvZarTDuNw3EbDMJiFjBMv5V",
  "key12": "PDF3byspi8s7iauS4L4f2iZkLn6LA1SZy7hbMpTQaZRaGkLVB5KNvegFmFHv6nU67HJRCBu791maUWXrQHACs3d",
  "key13": "5mPygkv24qgxKXV6eLWVmFg6SsLvKuTDXno3Zc8s49zVsChjyFQ2kW7CTTwMQswBhuAwWSmz2wgK78yweArPSc3",
  "key14": "51GQmP5HxbU9W1LpqHPYBwWpc2koNTRP294iG4PXByEMUqPqpAtor7jJBVyVuDrGGJ7L52wTqXFffPciKnTMrF1i",
  "key15": "3vLM2EBLnGqq8BYhDJ7jJBRWgWpdXpzL8MyVHoL5eJkLM45KiSRpmyxpucpW3vD5TKyrgKpRXoE9LVmyM5uBHDJ8",
  "key16": "62S91JkfjRXnvPjJhJ2witrhYj4GPGdBNNkSLpjWP7xTaiXSCs1cpEF9Ep4SK8Z1odaeyNHRxyyBNu23xBX3cWGF",
  "key17": "8FYgFT8rq9jEhCmkvXBJtjCNwpc1TZDW2LJ9Ebg4d6SzNGe8jsCyehdpNyhzHjrXRjMSNBJhDTMFTehmf5AjHqb",
  "key18": "2DsUx7pn76325c2CcndYDsuhQ7fdcoerkSWiwF2EWb9GETPJ1Cqmqkyq7LKNBxXVQkpya5eNU8mhcSwuLJPd1k92",
  "key19": "3y5S2JwoAHxVqjxh4zBcc8ZH3rSxrpjGhH4jHZAkR9LHE2MyZjyZ3Z67pWKZYgsc6FjRyFoihi3VmFfs6oPk6N5U",
  "key20": "3iDvMGehMTzSPcF7tQWCcm7cpZY8bbU41rtH3ncDmVQMfbgTffV6TWcY6mZcbhz28AGAbKieuJ2i9SUYXij9dipQ",
  "key21": "LLABUordbhjeiEqSjZXyH4C5sCyC3p68NJc1GpNfoUHtAZaKWDSGe7XfDSLLZVTtezypxwKvdTWBwB8HKSP5UrA",
  "key22": "3fgvvzwUo3jxsRXH9YD1eHoYDA6gpuWX1bsaJAs27v8MSgpbDGnjmiEEVJeCkiBRhodEhZw6oKke1vmbgGQpiANR",
  "key23": "KCcey7WymtKi8aGTDZzK7VDBmWVUDeV7yatbeAL9ruBLn8A3xEgtR7Z87f9pGzUo6Y8jxkLci5nx59MQGjnsjB9",
  "key24": "4EeuZSzBoGLVpcXJn7Noka4Bip9CchCBqDokFaJxzQ3Nh4PjBNR1wBiXjqUvtxmM9sQAREYUKj72LepaD59BAXUw",
  "key25": "2y8r9NLmSXAtQYkjTaA8XrekzZtXEfiw9MPt8i9gi1A48oR9XVtNvcZKBWL6zaiw1XC8ELTbdwUsvhD3K5gMwYLb",
  "key26": "bCFnvb5WtKAN9yDvtymoxWvxcvqsDcjwoFb2r9fiXejq2dnL1jTfqkUg76F82oQoHceWG1zNb6u6T6ziutAcbwV"
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
