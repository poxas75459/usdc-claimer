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
    "2z7ZRFhhYChfKRJLy5KcSJYwWbpr22ZeGV5ytALK9oYNoX635r5D3jQAckhCqYsjwDKiMijmzFXqAZrea6RseYzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VeBcrSUUDN7CbTppJkwTNdsUpnFNA3gFBNHTGDCzRnuv49FPWgA1Y8Laa7Cf4TDHe2Z5ygRL7PtgjcvokD99Vmp",
  "key1": "2bSpZx4gPEvCMiPUakjThDHx2p9KAg3TapbRES7R1zfDTdhVpUf2T6U24vV3J1veHNjndtUX4LddR1NBYW39eZFX",
  "key2": "2RfXv1sdwueUzxvKEWWp9tENZ3pagEVqccQ3uRPoHyzdrJs7YVWHyVZteBNVUWK6MSwKDC59b1eyAuY6kCHA97GV",
  "key3": "4Um2QyjhEU38fBFADqAVTLvSgDzsmWb6D74hwCAip52mvb5FT2vWu5dN5RG2g7oTWVf4qrLq9JtjdBE9LDzEiwCE",
  "key4": "5dHMLgNbToq9Qk6Sg5zK8uUugtsKtaYTy6dXVC5HzydoaEmkPLLMnVZM3unsZ3r8RfAMKTrBdfD5dhioJekhtjQw",
  "key5": "a6oVn3Mw9XGdWoW1Ej2gQNZMEaEFMTPw7LFdSSxUAUaP238u1CnkogHGBdurWwvZpx6homaF47iaSVUDDitgHz8",
  "key6": "2MxCCHuh7Cp2BgwVRFBAPBzcVLmN99x63antx2sbjg37VYvsnqfu3M458b9jTt1ptnQSgddbBetZHwbgZtUzcwHk",
  "key7": "2nBLL7htot3XLMcGE7XYSCU36qT3tnhPXFbNC6RSWZB66fA8SCpWHxwYTaoA1ZCBQkV8yfZskry6EEQ59zHNZRUW",
  "key8": "2WRqbBQKgKCLPRDp7fRyDKaoKLbkPTind14xeP1Mhd3cbdetBNxZqBAwMeZEA1P3zzABzw9scayz6JzZJLjh1sQB",
  "key9": "jQ4ZzYCfBNAA4ckjRLaL9nGDmyecYHwDsaDmiwWLP8dKVCw41YpF2zQ4HgX7NVT3eDVP73uUDXHe3dTbHfatEy8",
  "key10": "4mHmD5VxiKic8QBeviizGYhVL8Y3x6sECvVjFfKxdj7nMei7N9fpZeCzp3GnS4WZdHrv3aPRpqd2yAHVs6jQfWaC",
  "key11": "5QBmnv2GfXwH7QgupAZhDYpygsqGpEQK3zFJNWkbY92zzedJgjmU1GJksqNtbj2B7RqWSGrjsgeVG7MQ6vGDLVyC",
  "key12": "4rDu1w4LZTyroaao74F8aEeTuQdq4QEybsV1xZjSqJEF5E4iLbhnot63U1Qp59ngSkx2pFfDEKNvLVdprm9aGof7",
  "key13": "4uVZbWJmZWx3jjZ2f5nzQMGLug1s3CrnBrW8QkdsA5rgjHLwQEu87ND3RkfMjDbZP7e2MSHuLbqbsg5rtnFeEw3M",
  "key14": "5v2qsDn8mxmCSLrkuNSBDMWEWbzanHEkf2CUyCPfye1AUpd8sh7N59yb8HH865xuCkWprWEWHPHKQoxvLrsa8PBZ",
  "key15": "vf8NbTtuZWcw11vWUXd18jugjvdJdvCWJaN8UYJ1dGq6zapAqyS4rRJCru8G4mkBs6i81NYcaWp1nVSyCHtNeEx",
  "key16": "xeGQWSF8TjtMHfXWwnktMTDWNwvfM2s6USjLhibrygrAhfLRFvuY4hW6tXPWyRT89SykuA67c7uGpzB3UnnT1rV",
  "key17": "2yxy4XfDAuVwADuXHHSFRANVSwi29Ykc57vwnNicaQmpvG5F3KT6dX7mKoDEFXEt2kxx55dh7Ahbk3cbPyjECQiT",
  "key18": "SRzBpWyvXmaghTuRuehhASmmMW22ymqKprh46ME2w5d6xu2RSDRfe7QiYa53MpeYiFJ2WNdHF4cRZhgQj5kgacw",
  "key19": "3uKQH9KMwKV4SH83CxuNZp7pSEEKABYZJVkhAGBDp1y4Wakp7oQCkJcJZN2XaMkdKaBrp2NamtvytyKKDofzHzLz",
  "key20": "a7KQ5yd2EsWc3Ha5EvK9U8sCaByWBfpSxjSfjaw6BZ5WL3q28NMBZ3JBRZxZT4d6vh3um188Jx8sBRarPjDG38n",
  "key21": "p8zCzbPqVzoZAfvecoxCsL8Z1n3H4GSmYFzW7vMzABCW5aW8oeVzbfA86LdKZLZbL4nwwgVAgKyR452YbfLNPf2",
  "key22": "43Sr1RitHZMnH3TKSTUeNgv922vyYdxjgZSWMeWeoX5HkFush5zeF6ZGgoibfSam8nDF4V5LiGNqyhQWAHGf4PDY",
  "key23": "D2u68fybshQKoucFhkQLbnac6nND36wLt9CaC5zXYmcRETNJ5sFPHiAUCWgvSWcXqhF9yoN8vhfUFg3cPfw5oNj",
  "key24": "2XDwz8huv8rCMHBT989pmzVFjASuKdZAGFqwMMWEDPyEC1QH8NMSLW1CmQtaDSQrHCC1yxjnzgqWP6DZu2yDn8h9",
  "key25": "4R2q8bTQmWr2uR8qtBT5pHcTReyHsmg9HfBnjLzijXnoyGo1wwPx1yor8DxhJp9rJVRW82dZx9WnhVYi18Q1kThQ",
  "key26": "ysaZQhV8wvNnjkSmty5KPLVT9RJtz1NHGe42ng8Wqmb8pnCaPsawrRjX4jT2X16xBBt1idFutxB23DV5zgdTjm4",
  "key27": "5tJ3aBbemrA85E52XUsFsPZ6djFiYoGbEHixSHJzspRXSZ9uEwEiRpGbmz9CWvkoTbZFjgnXrC6Hk2QRyFzakf7T"
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
