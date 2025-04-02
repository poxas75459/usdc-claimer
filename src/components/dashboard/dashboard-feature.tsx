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
    "2PhKrqWjPd3qtusyDsbvRLJvZ98k846kmXUvSwrGLpLnuyNegKVnHWSAiariMu9q1DBqj4apiGAeN72DcRzZncVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43FceCmUeHZET4nGFxkdhS7LNph4Qe1AULu4drobXoMftRsKdmX1L9CJtHCWZzc6S69wPYTpicNxpcyEwDPzf2wq",
  "key1": "25jvCnch4HBwYW7GcMxynmVUBNvRA6LW7bcvDLguDh4kbn9XvvYAs1uZKF2cmadFKPujwghhgKxEZRfwFMSR7hBH",
  "key2": "rbRnAyiaELhdpc4C4kSvK6ueUKv9Mm7wtiuqa16gzYE2momBXUHdzqCJd56uwyHcodMN3JWSZxY3wMMrVNjSLDy",
  "key3": "5jbaFXuXFnbfJqKkfPM7jr4UspZ1gDitfcCggXvWxmwsHjXSHqTc6RpMAdKnhdnVuB9agZGKz6BHhBekv19zeEzQ",
  "key4": "494pVfSxBqLVtxWYfJvjDrpoQ3BgCMQE8JT5frvRXNM7szjEfwEkavwL9HsMeAnxobgwSUB7kjhci7fuQTaHzUu",
  "key5": "dkqeM6Rv7zuzxumXnTYMDsrzJ5uJ9GpaDSnms2XbzxXY7SvBBX8LtbpdUkqnUkUCqCiMs4BXKNp3mitW696K9Ey",
  "key6": "3ZCxFhZd7Ym159CyQBUdjaGuqoTh4pQ2mQa2dCCaBjLSYoSbYhnYMVYsDjmgkkef8d7R9VZjuA9WurK4EKiyWXfr",
  "key7": "2Au4Fb63NFVRBFYbMxYtjePHPX9GLCr3bhELwVBBBdzRQtRdTnPGAem2PTCtqburFeQeBoK82EUd2ovU8tZSSV7t",
  "key8": "3js4icHgoFGfkgkw8ZLeUxUR64r5ijMT2gKexymFsFQ6ByyxJW7yLEQFnKLgh4goKzGMt5NHyNjdYg9JZfuZ9d8T",
  "key9": "5Xxg7LrcqYQ441qqNicufNb2puWSJ5KEr38kxYhJeawfpHaUf1QhMPky4K2VH8Zem9rYX94VRLiBhT8sPygUdmpA",
  "key10": "5pk9dbCyvvMj9sVMsWY8PAaDJjpFcsh2o6snJNGS2VBsFAMeeJ6h2TbMwZZKyqAmy6kpmKMAZ2T2PUbWENWwQ9SW",
  "key11": "Ho7maaEpRzdkoJDoGNBqEj21TCaWuwTNRXGGT7jFNdn7HA1MZoCiodKQSdwqryFaKC34RhWoRZbLSWxYcnVjAwZ",
  "key12": "nzMkdzpaSoCPCcTrTHg5cm9sxJRst53Au6c4kFNFwwmDj34bVeB2aZidHHHcE1KBY8yYtYyTs2v7P1hYfhDF8JS",
  "key13": "2sQ7FHTsm69XUypqJpz5ancnDwbgdtTqPTKMfePvAwy2o49vEPmufLmvckS3t77fZyeH8nADZj2tRmQ28J9tgwTy",
  "key14": "5erYkDjkYPAuKqYAR7DKw4aNsT7JtGCmWPckCLcDYptBQZAU4tg3PEbyG8hH876rh7RyQnyTi1QQD3Z7pBVB8CJA",
  "key15": "4BweRi2bamPYNTe9Akg36LGxY34V1qKJUHue7vrBVMBxEPhsiifLDu9f6NTmajjYhoWjrcoD1ZEXvRFtC1HbBEXH",
  "key16": "5i5RJSED1ZkdPVqkeuc2zRWs3Sa2rzhkX1wuLgSX2FAv5W7bapu3WC8DD26CnZPNygorHZmTERxUYL72UPHze2zx",
  "key17": "2RiLNmoMfM2yN7qBM2DMkVesn8q1DR86x5NscNwuMU6GXUfyUtdazevggcfJcVUHvb7BksP5hEWsCMmXXtsUW81E",
  "key18": "Ks8LK8M8KKJAzssf4MZ1mZLzHhg2nxSdEjcTZRpBgvnWtyBgS3TCKmfYgmCYbsA2fCcFXeyH1gij9o6tCBczM96",
  "key19": "4vBsY4pVDjjFbzN2t1e32BfUr9NNwsaYkwBowou4EyixzqqdUbZb5p7zHLd3h1Lbx3dMSsasJkbr5Mem5cAMU7bB",
  "key20": "Skda9cF7Rry7XipGa5xV5PEeazhCM2YrszTr2US19gdckcJcgcH4Q6qvS6mhE7UhMvtZdjn5N62adBB9rPDpLZd",
  "key21": "3TmJHt3NRyWa82fWoohyVCNStXUFDhSHcBAEQBgiWwfDYrCT7w3NQUfNKUFzheiWipUKjhx38x118X8Ci6VGvAit",
  "key22": "5UTGLgcgLq4aVAEF28UDj8FNBCi3G3pk1E3HtGhSsQrkNLzm7C4avJRP41p779yZuJSQw1fhw5btUxKSdgNrnhh3",
  "key23": "B9qUdZdWG8XdAj9FGL59cvENEuJmPd4YHYVCBgnV3Q5harTPNCZ3Zj5qHV4eUXcKGH4Eyvy8pXSTgXrZgd31pj6",
  "key24": "4GYgfHWB9QUBsooKQFs79VLRRZwYvjrCwTSrxzf2Zo8Y6UGZYyC4VNfA4nhRSTQbA9XS13xuJzhHXKKM9EdrCuiA",
  "key25": "3DynUCL1BWSs98c9T8qEAfy2MnQUac4iQumD3d2B3pKysmrBZ8y2inHu8iN6iwT8C9YL4Bndog54FfTrqcfK5kuV",
  "key26": "1tbdkJykH696SEyvYmfGzGzYFAVUEGUYFgvR5VDKW17gigPh58sftMS9K399WefmswfJ8XETmudefKLPSoyzX2v",
  "key27": "5bstrujDLiyYgzvcE4Dt4ARpaRd6j6VufLmKpCgtZpy6835rchTajUJhm7JYxte6jywuk6z6KimnQL1E1LTDyTQF"
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
