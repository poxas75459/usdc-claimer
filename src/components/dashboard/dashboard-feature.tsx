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
    "4tKRBaHEuiEsTeyzGUzEbaYeXgJ4eZxLpNy844iDwYE2CEwjg3NLBkUGxeXNZueL8qRGYcEDGdXiBf6KbP66aotr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pZVVFoEfQQPdLSkB9Amr5QRWnisiR91ibvSbry1A4jWtBC2NsdjNbmNg1adeaHJ7LDhGcdAxFwtaqEc2zp7cw9i",
  "key1": "3LoR47RzGuXZUUAmvr731Ux6EzuNZfAFNAz6i4bqF47skNfepTRJ9XcQ7LxsX1LfjK6VkgGwCuaro5M8HDuo544u",
  "key2": "2WpP9vTG2TbDvKRqyeBv2w5KLwKYA3VQ1zyGyEtdmjYsSGCCKyyMpvwUESU3HgnWv14Fv2t1rYBYkxn3FNktCZBP",
  "key3": "2388gRrFKdGJCzyiutuAPBa4guvgPGpSKo21G7P39HCqqhVtHd9s3BPvRAGzXFgFUErkYe5wbPPEqJPE9CLghT9M",
  "key4": "3HUzb2dikWqVKM5Zoydn2jot2kg2h6yZ7yEi5JGo6AHTf56Lf4GbKqv58iZ7RpSu7qBxb9Uq8MHysqfEh5F4ckMY",
  "key5": "Dv8n3Fj3Yq7CvKBj4wMserGesuyoahyGD8opMn9txE3uxaFKPcQQ1vhrUCTnNKovVRUphKiHBkKw3sm2K4FnMYJ",
  "key6": "5qm3YeiBAom6Qb9AXyiMb3JKCd27ZHfEsWFPS88AncmQm5aPGJ66MQLpHJTE5s3DqrB7pHmxD2ys2ik6MoqJkY52",
  "key7": "k5Dp9jdjDVGCp2GMZwHMANXBpdtxJ9J45JeMSzfPVxMUybTWNvacuiouAf9Qk46jHP7a8h7vRVrB5TBa9vJQ71H",
  "key8": "3f6Bcfke5g5tv8Y1YZDA3866Rb1jkXs4dXG8XpgghNhLRHuWnLWV8dHJVdSjQ7zfqpwLRZQQWrmDFdWzRxaFN7S2",
  "key9": "56BVBuu4Ah8gc5vAXBK2gdfahbawFBFqmNZV8VTm3kQPPS9ttmoiygoxAGy2aTyLH3mdZ2Yuc7Fiu5YQApdrebcn",
  "key10": "3Mr2DVuRZ3ra7ue2RZkiDwJy3zUmc3GpGC7HsAqUQ4yH6Jw7PAkfWzffhrQRZrhabx3DLBycxAADXhooggEz6HMd",
  "key11": "62XMZNi6bSb7713Cvhs5Us4D6tvQABr7QAJaYwuSTAFCavCknWs8goYfAEGBhtr1vGGqzDQDdimjfBBQpUCgVznA",
  "key12": "3zmP2NycxXTVyey9M9bQmQWYEAi4wbUtZFciJMSoUQLsn6ibVC8vmMQxMRUQRmj2P4NF5TynhiFj5oqL6qvhUzQM",
  "key13": "3VKPcoPFq9Wme3FaTmeoGKmBzZoYf9Sky8e2o3DP5s89DVvqSfHgVjftd8fsDBPkS42Zybb4rbdaFJXpxdQfHkWD",
  "key14": "3cpwpQuTfh6C91pFGsVHJLjYHHju2JnV8AMhLWogwCSyxr8JUy1iZDMy1rpdB8xAVsgAtaxZv5sCLHrwdxiG2miR",
  "key15": "4T2hJAknRokoftQjkjaXEj6MRXHExqSKyuTHo7GkxgoXpwE6b112rG531MDCLq7dPeUzJFozsSdzqPeY1RCrWDAW",
  "key16": "3cefdrAFW4s2UaumtkujMgBkqx5hXKK8W8tt3VqXVCNB7DdoWk9Q1wYcXT7o1icD8BE8HednVEeW46duD1jYYVY9",
  "key17": "3CSAP3oDPLEkhEJquGzAd8Wkpj54ucNAZpHEe6oy4Vv5JARyiMqDrxfmt8ZEQHhVvoshWrSFbmeQpXRkZSeGudt2",
  "key18": "2gQbyA2EYqaqZ5A9nkEoRFzpuButtdNa46wK3LYUcuj7f3QbaP5ALra3eHp2zff2oc4VM1W6nnqr5xuWHTXCwrHm",
  "key19": "5uQhZm59E55y9nkGDThnGrAbLSQfvuRRu84vJEmfwVbMYfaraS9sqSRWgPWh3zgMQ77K5UhzsPEVbtXwBfouaW1r",
  "key20": "5G4FdHn8ybsUWSRaYsQM9P7HW6BYgbNAZYUki4pvuweFuyD7tQJoJ8UGwzQWw7dqMWjfFjPkUoLWb8VX9jB7MEuQ",
  "key21": "56QA8LRPyUDhDi2KfNHQCm7bmLtz77fPfXFVCRcT8hhMA3Gjncr9wV446NZjjb9YV897vzne3cR38sj67aZwic2m",
  "key22": "4sdZ9KJ99HuHYi4rp7zycxLfxrLGSrK8wdcidzuBNonc9JN24K6EEDdEh4gqBnPuf9WQz1NY2BamMB7dR93wxBHo",
  "key23": "5cR6KFDDxnYLFYhVkRfQE6cfKJYARVZ5LwHMnDpGbKZWiFoRYET9ek3DEDREhF9etf8g99p1rFC6RpwgD4WbU9tB",
  "key24": "5VuSpLTyS9c9B5EVPab4RFEXQRSTza7ixqU1bCFZWHXWQXE8GumP6GqbMEydX3cHjDiY5SgR6TVxcv5WbrsV7Doz",
  "key25": "2SqxzhPPXXmnpe4FS2dpTJsPGX13okipkn1U6K9gUMMXuPu85mvpVzxKTQWVgBt6MPi2UrxFRcwqpiT8CD6r7nqG",
  "key26": "84911Bx6BzqgvobEW31nsUNq9V7is7QXT2p5P1b9zyFFMLu1RSpDHChv3hu5ALdHRKvrFmKo5TvcH1YXcDYperq",
  "key27": "2EcdhZfCBC9yHYSk6fh38i89eXdJqbT2LkYWCU2ysQ3iBKzQLnVeyroyB5Eh8Kane1pgEP8M4o7eBGRCxqZx8FZv",
  "key28": "6HWgB51LZPi6xrUsNAstapTA1Aa8QfymLVjA4gF8a1R9K5SxQFtX3FW1nKRrrPsURSfgZAH2qBEwgEqBYooUTBv"
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
