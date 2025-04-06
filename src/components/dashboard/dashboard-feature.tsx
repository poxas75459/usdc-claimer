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
    "4KbxBhKYgKbmPJpiEQtY6x5d8f6Sf9GjzknP8yhWMfHaiPPfukg9VYC3Fo5vscWk5qrLFUBZVi3e2L885Pt7U1hG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BBgsgnVsseMCqZm9cd4nXrJRLvUcXcCzoMvXsQCznTM24kLcT9WBcN2EVrEQaXr39XNFGVQfvdjbvdvXpPXMZFi",
  "key1": "4JKg1q4SGmbpQego7NK6gZNM45zzxEywWaHhkWYcXYcDizeGMZ72ecy4T4i9kF29dDhd1FvZtNgPT4bq2eRmkbC9",
  "key2": "2L6pUGmo74k9MJfrp6G8y7yECJxEkx5EG2fyzNUQXCWnMsrxa46a6DnPjaTq6cTgvszg11QDTzkZhBocJjnDGSpe",
  "key3": "5MTWzcCH5QfvWWWDhun5SvqyPc6PYgbfuUgxNNfBeBZ3bsQWbgyyUVU6oLox4QwuRhYpsn6y2pgmxww4P6RpnmHh",
  "key4": "2JjkBAsGF2cikyQshX6F4YAc1asYrTygf4prx77Y4RtXjsdmekiV3LEXL11D5NSzH3ncbHAwHWeAXqMepETUxicF",
  "key5": "47GogiY2C35PdHk4Bnftar4m3toXtS4iA8FBQoRj21ZB7mNWUmvRyxp6u8H8h5tshwwZmAVS7ibyY9ovBVgYfVgs",
  "key6": "47RRQWxoEzNiAMQCBGUUvnbC2fssc85ZCBKKAtWvNDLoc37Fm91vAuAzVHnuiuyXtMUEizNd39fLvmxJwLkpxE5a",
  "key7": "3gLfLJw28KfbzYkaY4DuLKp1VwjvvtvpTPDKeJMmxjUs6BPcvaFzLCUo6byiEcDXvDMxjoMm6R4w537KjEJJNu7J",
  "key8": "3YmtKJUSDqQbd599mNAXjzwM3qwExHR7SFo9X5c7EvdDcyuNnqSP86bLCLxVTDkiiKCCSusWTs5Hv9jiVaSmuHvx",
  "key9": "3yumRU9wXQW5hPGUgnyCv95YxvUDmqa4PUMay6nDR9DSqrzTvo5RXnjAwtRSDgiY33ReUUTXyahnhxcLyvSdJvjU",
  "key10": "4aNauZQ6MFhbPzDex3R4HKtJvZViYm9Zam6RKeN7xKfa8z1z4u9s8AX9S3auFB3iiGinXw5ibNfiE41yoE1HVqAG",
  "key11": "2nbFKj1Gk3xTVp2xVbYUMBk282HbQ5VSuciT2q5oLi6udPdavvNmk5sxBtdcnBvLB3Ai8cBtEdq27Z99TB7C2ter",
  "key12": "3jEkPXGraz4aTs8T79u1T7prjh8EDD8yFkUPt2opeShrKKibGb9v6PAwbYFoYaGn4eDGqhxmVPVxRt2ZAzDm5kpR",
  "key13": "5xvzdYuYHYgX4HwygDAWoutF8HxVnB2GXibu3DgqMTcLiF1sQsv5kW1B6yJhDrCVJJxEgUmnUsPiCLSrDTZe7w4J",
  "key14": "3yMZaCJAwdJJB16WTsG1kNBE42U2UoQ3zpEvKApGpQXLxfGBCFLVHAQi9Vzh5APUza2R9UfuH6gtPAKAz2t56zoC",
  "key15": "54cuDoc52KF9XFtEHbZC2wB3yDgKo7fKWVpRafgkP6WTPCrGfuq1z6K29Wf7LAPyRqfy2unPRbLSx14oE3thtovw",
  "key16": "2S4hb7JxC7N9nJsx6zCT8ayPPLQapVkNsr3fQ82LzXGfANN3fztCyAvdC67iZC5ZetFrYnZ3GZ6g1hkECG5PvDfE",
  "key17": "42nErCWrSV8MGF47bGavoTdVSbX4K9AaHSEqxrhA4uNKQeNrLsgMrpCcxqCYuCcMNUStRDzFXEGax5TkvGwS8hk",
  "key18": "2vGohBkX6C5u3gDbpvbShszdKpNEHYA9538tVA8LbaMC6yPKih66ySsSeVipk37jQr6pwQDNUkeKtoU9i3jEBH8C",
  "key19": "QGb7sVR6ppr4VWWNRHs9JLZCQM9SjdyHSEGmnNaDHJf1PmCeEFD7VxqvviKovDbJXruhAgrGJKNPzZHD59Asd52",
  "key20": "5Y3471yhCmndJ4L1oMQxJpPre2bUUa6YwnGEHbQdjjaVoAUKa8SdNLtfewB9BcGmj8bLMNtkzwusDFzBGbJMKnWr",
  "key21": "3otwgYRzKrG8EyKMXpn2wMcdNhxmvsq5ScyHkrWq58qLVzvLtchPtdzeN2svtxuLixgJb7v18L15M2H29LC5fvTS",
  "key22": "6525DRK8tR771Dxfhn8SbUC4fx6YkPtNeuVSpenZCDe1CjwcGGyWez8cgj8EeGC8bcUvcysQ69gxpW9Ndemibj1",
  "key23": "7Gt3WXWpmDgF2xbpX7hDKV6vN1DtcyBQwDAfD5JLdRkDTK5pWsvXo3obNvdLveBUq9mLUef79X1gWHUvKVrcbP8",
  "key24": "L1HfjjgYQN2Xg1V7E7CVWK6oyfWSwCoHor3u13NzuoGwaJTzGVbtMjBN47B9b47uF5K7xdwUB4KxohpfyiGeqyN",
  "key25": "5rALr4KbgT2iLC9vKWhG3fVBuHx5m1nHu6rG8CX9hZ48PhQbxVvuAdaXja8Qe1T8Rv7GCs9LoEEW18btsajYXkgR",
  "key26": "2YNTZQeoQa1KhZPbgrpBWVfDtmLdDRaj4HQGg6HR5mVg5BJRVakCcUgdMmDnUxrgB7tEzJw5uaUJXT6aQ2Ly9njK",
  "key27": "4VwLqtcPzRWkejexwtjm2MLUUhpJgQ3juZR5QU6RhTRuPpNkCWrhBFKMaynUeMBuAsF16id8NDeqbs3sjhKeZSA9",
  "key28": "Q8jJuofMkzwJC2hhNsx6v95xe6a7A1tsTao3bq8KEhsJDHhPjzEWG3M4zFn8LSA7oVeiJ574q2L4NuZ7i9jt9s9"
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
