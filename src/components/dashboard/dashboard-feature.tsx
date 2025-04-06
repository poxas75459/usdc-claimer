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
    "3muF8kup2ertipdqjr1jWhkKGfag9KRYWy2PBLcTJBLVw7yKfmy21JdT8h111dRF8YUQGDCVYdDFpsNABD6GsP2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V9d6GijGPWu7cWvz4XpMruBECpawgFVKhbSeByAgEKxVj1Bs5fjNQ7gieV5eL8eHCeHcKU9uLD9ue8zDvcXqN53",
  "key1": "5HbuFYhKmNmfqtVg6CysPJEshCa1FcqfU6rs3fZhGkt3N2fooZTG1o8JhdWLjGY2w1xq49R2KLXe76EozJ9qFd1t",
  "key2": "1kvmYHJsqJ1pPTUkGand1BSEupDt8k4etZQ7Trjj28jkS847vXXgaAj6t8k1RKM4Mw7CdUw7HBRi7KMJUvkU9X4",
  "key3": "4ZMi86HjXG4Nr1NsWp55Un24AuY7LoAECmUpkkahNGreRVD9Yvhof5QuXjYU8HgdnAnboedJxHNC7rfLMNZxDKzn",
  "key4": "3mHYJb8WLasjeY59R7xy4mo28V4nT5GZgwBNA45x3ujYpP2rFLFkAbLU7apUr9doo3mocxGHaX3ds35FCeGU7ehj",
  "key5": "uyLhWg8GuF498Q5QmnoXGSzuuY3Qfg51YuSgh8nw7DzJ1gq9qYzbPfoghABjonzhm7Zi2YWmXA4t4WyxoK2Bbzd",
  "key6": "3FUCQCSNpu7mcdXWfa4RHj7qj9MTEk31NmmaZkbWASxwZHJcyGKQxcqA3BoyHBcmEVCfqbEHAPtdnxC6JBcA6fSG",
  "key7": "5jTR7EXaeb5ABzhbR1G2T5GTY62zXTneS5Gu6ZxMCTJPmRE7rkpAoPxo2GE2RuCrL8YtCeM51PXZ1rTdM3SggQrx",
  "key8": "47m6efiaYpzmGgvqL75zLvSGrqjfeaDBE7cyR7Tfwp4AN19bzespZ31NoJdyYQ2Q8qvExGY7rpXJtwtSFKcddazu",
  "key9": "LjAMVKWKt5o2Uqv7AJu58d3eZ6SeVu9NctnVt4EfgrBspVXLBsdjDKLM4TRweaz7G5UBR95yK1DwsN4p9FBRRkW",
  "key10": "1XX5VFPewvu8ovdUrUdCHiekc2kUVxeM7J7bGy5r4hxmcNv3YG5hkm2rG6VQ9jPetwRgPLbFsim2VEo7vifJnK4",
  "key11": "5DA1BfmvsJEZLvyo5rN8kMFzqgNUvtg6ShXeLbhqCRKRD29YbLGxykWM7XUjz3fxNtNmtHmQyrFbZkgg3EtxorK",
  "key12": "3ni9bkWZEHPRGYCmSePchPCjo6jQ9Y4kxv7JSS7WH3TDkRhMjm92ma2RiWG7wrqfEt1cN1nN5qHd5ZuYbBGehutx",
  "key13": "2bkiK8aNjrxQB2zafZuKQy3tsJZbXN7JRpJxZQqaQDmwUk4uMqCXXHd1rJ6RUAKeED2Vm1onjDUbhVsTBqVXvZxd",
  "key14": "4rWRzAyTU9D86yUGuGbNNUa9NTq5jRxRA2CYnxH9rxi3CukB58txxc2aJtqvj5FZitxbg4QuFWihjK7vQcgJRiYj",
  "key15": "3i9ECvEQskZceH7bsndoWD2kxNiJJNU8VYsd4dZjAkzFVM9aFtZuNw9nu45QfnhCA7AiFCGpXg6szD89ogCcqEK7",
  "key16": "3bhNMMpER5xH2JjzQm5Yj4JP4MVLBmn4mhnQn75dw2GXkhp1KQXEY5Vg6N4hZpZH6J9ny3N9adJggambvwgX8ep4",
  "key17": "5Fz5Brw9aFbRQiqWaU7zYku1bce3TsxSBAdkKaas8NV24aag6gTLwZDcMwCgc7D7aHxuVJZCtB4GqQWRiU5B2wBS",
  "key18": "PWaBTpzrCz6zQUJTyAmFYHS5vExrHi8Bie3nBiSwrFv1aJxBn22K6MGH52R1r7i7oD8S1nsuWRFzBjnfs4fbbET",
  "key19": "dsrsqQnARTAcUWUtobmkn1DNdH7QQaiJQL4EZes47vhvb26X95U6cPvQreJjKthU494QLRPXj3c6xDw5vQqii5w",
  "key20": "34D5xG67C91GvKywafkZkTEFdzev34SMw4ukpgXqMi99HtPWyeJXkno8HHumjNsSFS4VDwER6CNSVP5amgRs86X",
  "key21": "H6mTfb7UK9yNJ4SGUZSTeXkpz1PrgUqSFm4DW9cxZCMkEPkEysUX2kqDczAckrQfxwcsgNjSHw5Ku5Km3irK1JJ",
  "key22": "26drYCfHKt3URPB8Xiu9T1J3wAkUz9mWtP3eyPfc6pnqhwwqJ94YKuMEoopk785XU4VRdo6LM83whzFFEUdtRq4Q",
  "key23": "5A5j58F676wVn7NkQHWgqkrzc1U1yQ2K6iAi3MQKj4RL4Fyy1JAevQ4WmdeCg5oFJvZoZLYWoEkg538ztq5Lg3CK",
  "key24": "3F2G2ynLNufoTdPauMrDwZgmDBj6Mx5TGPSa4eBLTbXZvqY4vtuxpRAVCT4drJfRSPfB8Pxb4vBKD3gT7TzsBACJ",
  "key25": "5kyFfNAuVp5NBeN18JkdtJ4u954N7aGxjfUwfes1MWj1RWUKxZT9dNTuwneUszi1TLbPXsWX4umcTtWgKm5DzD6N",
  "key26": "4yc6NP7frNvG9P4gvpojqZQ2VEUbR6rGUe5Mo77dihKjeEAJo19t4rmyeUSe71p5YYYsmfZBtvjzxLPa198UwXsb",
  "key27": "3wEr3eDodcWyfiGVgRBMbZP4ohq1qqixA3qh3wwp2Fr3m2tvA6hAUMfjiBuyCqkaTa88iQqZq1t1dpZVEVY1jRdS",
  "key28": "tjGYHgt9dW1zN8VNCwYiuQwNxDRwMqf7h6cNaEFWvUXavvqqCxGsp3dmpPiFDcKBXSS6SS5MkRow1CCv4J95Fih",
  "key29": "DguE1FSqcCAjYyoFUtgQ27BuefN2djZjTMngRTvhJg33ntm4LfNYzSMuTzukZi8Phzxuy1dUCjYfRYCDf3RuLSP"
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
