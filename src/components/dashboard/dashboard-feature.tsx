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
    "2YKQQqn6jD8zC9uNcAykXGdEV3uVy8pG2P8MBVr3eLZJaeg8KpPFsqZeVtm8uFHrJYcDrG9Dv8pXVipSPnCH9obQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VfeSGfMfEZXRmdBY8hqxqoC1ZKKTjzuuM1fbJUoUbwogUUYVUxfMqHQ78kzpjjAsq12pn6KUzqZnZc3h3btV4f4",
  "key1": "4mHFGNrwKJ2Qu3dGaNxLidiqbZcSqyFrUQjkqxytaEWswiqGSJMPFq8jgg9E1hGJLihtkCJAD7MCFRHcD3nwbcgH",
  "key2": "3hy8VxvwPDwMik9Qm7NBmheDdtZPuSjxvWaEYZZbGUvuyzKaAm8D7BJBF1va99DFNPVpF27DenXzLre1DZbvnQvZ",
  "key3": "5k153H7Gi8H7e7ZqqwkSn3SSqgiPDQHx6f6zxDYNkurK1hVfbHfurNoZs9jG9bpShaFPYCVDvJEDTwBWNsMjRCdL",
  "key4": "4uvhP2B5yrKkYpnnVw2WH7o7brAwiF7XTAZHWDukmLtzVnDbz5CJfxBv81uDYDPm3EsVN8yQnzBophK5tp7CGLDu",
  "key5": "5sabxfu3EyLEafvL9eGEuTRkhkUcpf9bneCiYhWzUAj7298aWcn7FEu7wi1DYekVJdY7wD9HjAWz8c2JFFsRJNsF",
  "key6": "4wFdGsJ1gXpT5Jhb6EYj3kx5BLjWWycP6vVAg6ywAX4Bf8nzQyJtsD1oMG4JkbEu5SGsY2ijmDwJ7J5JPzbe4c4c",
  "key7": "2NH9DvPTUQJkfwh8JaceHTKBSABaBxe3mraU6KTeygyd3XYhq4dntLfrAvhxT7Dstk7EAotY1wu4iNSF8ekjkcke",
  "key8": "bPDFPHVnemFk23stkNcnsThnHDA2YyDUxDFYbyzBzMVR5Qj9Sq3uEAYh2PAyz5AEgbh1Q8Mw9Bn1SqyUbEtsJAU",
  "key9": "2M1eKAE3eAFAMXpAdeWEk5JhGb5arhd91hXBeZ1JsQgCcYuqBMBz5qsopnrWxXU75prRHu6YMvLuHP2xdpL9YSL",
  "key10": "3vF8epWMWkixaeGSjMi3cdAqzFcDZFKDuMA4wd8T8WDr7h5CtmM5BNFpAmtkyhhrpTTBegzuqtBXwVMvsEZ6WbLh",
  "key11": "4Yribe54U98LMpExdAkXJoF6SBReaQ9Qrw4PZ5kY8T7Czji28k8WJvZJo5pfJb1MsSbbxpwHuQQrN4LC46XY8ULv",
  "key12": "25hgfUXy351BYei6B59getFsLE9NdhzdfmCPbDAxLAN8ytg7sFNbmZj6nSj3psQDSpa81WpDRhZB8tJE9LirWAYN",
  "key13": "3yVzwxRmBk89KXT2m1ETbPdtn6MqsNY8srHkestXZsBfAFdhog1juW2Yd6EZV7YUoTAJzBja1SxxenXCNV9H1qRm",
  "key14": "7q8p8ZReGMAgGfq3E7eGrGvsTNgot6JeP4QBUBw6WGwT1zzTvERw49JUVosK3pLsWXvD1mww1YxPp5xTeWe1qi4",
  "key15": "4pn597KsWbSctjMmE2F1oyfmjtY5RX7NVpkdgqV3y2TzpNN7AKxzqmBVPmVgxXaaLX9WJPiM6f5vtmzzmfXAjQZG",
  "key16": "5MuicjExNkKDwLpyFQdey4VRVdCvS5ow5qjf7hvUt2XQunMz5q1SgmYXvDuwgAzQrQz4qWG3UfEDPMnnrNs48Ppt",
  "key17": "SRCFUvPx5SQbYcD66WTRSdFjHgo1w4xMtiYJ6DKe6GpJvPQpYDhmqs9bQjz4xh5qH4NnLwSH4SGPMKpjgNn9Z7v",
  "key18": "2BzDEHtfhWVFdEN35NBitskYKXwWPLRDKvUvFLfjAsKTH2f8fRgijXg91HwRB7k5UTzd92ND54joUzfpuBy52oZo",
  "key19": "5TNKKqBP8p8vxwDuVMCx51Ynxzt4tguTXaNXsMir6EvMP6zinWQWHg4svcR1RduEXVJSg8W5uE2iYVD8WUAdz2UB",
  "key20": "5qyfi67DD6tsNhTNd637fUcrMLZuxBJYDGVML2pnsFFJkeGcqqZkeUbw2R8HsEWMWrHhjJLkMrC8uSc69h9bMSey",
  "key21": "422xadukK8xByhU3MpL2BNZrSC6b6CZnQvabzWcc5pq5m54siaYSC8gAt64oYLNdUabg4PQVNV2CGE1fCPX9CXUa",
  "key22": "2jmQLSdkn1eLHWaXveHEegM84FYbR55vjFRf4G3AW4RVZoopNag9v3kwbDLFzAQ9QK2FHkdkAMACGWb9xyPWhknT",
  "key23": "5z7gC4R7DY2TuCZgJ6mV4EYKVSjamkJfVZ9hmeVbEunb6gzUHLMZBT83mXVtnifjnAW2NdznHm3tkKmaa5np7ifo",
  "key24": "2yQKcd8qKxC3PNG6dpmirG7f7yRuJ2A8mFuFwB2vEeM5z3uYoPzwbuVGpTbtnwCD7EGt2cb1tdrXdPQ3tvLisPmg",
  "key25": "5ccq7WtCimquqjK1w9BTWNwgPBco5i4wpJGV9yrUNvrYYeimPbXDdCtWXTPxGiQtdJGZeUPzqDJGGodCKDiAax1x",
  "key26": "4e2Xi4mPZYtqnNJUmpfmFXPA5M12G9Z7UqNDsjr7CPigJzm6U7im7LuPB9R9Qvx768aZnCABUZHgnYb16UxBFZCZ"
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
