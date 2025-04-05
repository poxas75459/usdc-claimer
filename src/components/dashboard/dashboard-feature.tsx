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
    "4EBufiYsdxLXTaiCwMAMw8kCC6bgWY345zmkX77nCJv8jVYGT3yVfJrYJ3ewnWQYXjywKvjB2HJ3AGu24SodPVR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39RpoVYdwPmJ5AuVYu7P3iZih3Cr2CXksVJgedTbehFC8icFjYqz6B48S8E4ZViyu1WeCqQTpJJMizRes8zMMK8m",
  "key1": "124aJr2tCK634MQVCEeZi63cpHvjyZaPpy57jtkc267JgJMen7ebYNzAkp93pNj8sFbyYwGhrP32NWbiQKvQDFur",
  "key2": "2tAWxA2AMFpxbWVHSGwKG7ukMUVbtFA9tUmj5eExTjfedhYe3HrgR4X3mdx3ta3DebhzvU3zgw6TVkzUpwRniyf9",
  "key3": "XkjcgrBgj5gxFMpe4NjN61rxM7cwpKT5R7zxYDwTTr1o9WDqHguiscWsuj6FpyYmrLhVFzck9MZeyXnz3cCd5cy",
  "key4": "1vN48LhzyeAZmEa9d3wb4NR3t65YqmnxZkxy3TgdCfgm5U3ddDpjhrHZBZ2xNBuhJ97xq5fF6B8HWLvtiQfvisg",
  "key5": "3vqmwLCu1tbmDkoZVnWQnAx4qwJa8XSMuXNsdobH9M4wQ7orF7MktJ4ttt76mYJ6mUwE3FHWF1oETs2e7cQiRqqY",
  "key6": "44dtdJ21B2S7GjGRwwr7mWuhNNB7uRFTkhjLGivJz68CQxRWXAKme6VXDhPfQfYSBm6cAGcK9GTpHtoYbUdJJ7FZ",
  "key7": "2Dc2NGxo3Zuz3PmnxYBqNQvvD9fSPZTzHmZdpUJbVw3ck6hN59kr1hKLsyCf4WftcmysJGoTRD56gPNmBxJsyzpX",
  "key8": "5qaHDaURBswcKnNJduhD9AJYqPx1EhiEbTMopk1SsReRJSMtbyvUCmE9fu4S1JP83p6EuunahEHCTVJnPoMe3pPH",
  "key9": "uLak74kE4MUUEJ36uFxae7k7s9cRkWamsiDWxbS6MMrpH7VNSaxx2WiP8pMHL4sRXx3NF6Kn5ypt5wdWM5Q38Ma",
  "key10": "6256s7ihSd1BJbZaMJ6Tsqw7w6QYFDUhvX4DTYQZrvVyQ4cuTntaeDkuQ9XJLKDVAUDAEjxSPFhKC4QFnbgwVwNb",
  "key11": "4DNjiQfRCQVGenXnibPS5pUELytCuBK56pakyWLXVXK2R4sud4RpkF8qBk2g5of4suT4CR5ZxpM2RqRKtg5A8t7X",
  "key12": "tTqdqcba4fGJt24pD55SMG8Fd5jETSKPfHMi1dxMjXz2YGeL12iVnA3d5JvWPWZrxSgyGLL5L85euL4v3QkAgjm",
  "key13": "BBJ4HCgV2Ykdg94VyQoNPkjiLUQfFHkQhwGhMRL5ud97QELimMjtrbSuZuDCHCrqgDUm8ArDWrEmqyehHSaxstW",
  "key14": "3Tuqn2v2DcbnvR2ADbG2CD3Woxmf328KgPYFBm9zH3iS6i1t5fG6btvDUsTp9VF2Sou3MS4acvdDHDxvsGR5L76M",
  "key15": "2BV9G8GAQfmdiBZZ8Qh42wVRubK7ngNuikK96SoKbF4Gv1zzipj5o3qycJS4KEiBT1QCixS8j9UZTYvBJBSqKikJ",
  "key16": "3veF1E13LnFqEpnt12Ajfz1HCaCwAUbwV9DF2StX1QvEQ8ANWcFYKFbbnQxusqmDHVegRZyCxAf5Rgt7LD6Y7aT6",
  "key17": "2WyVjqoiMRfRCDG3EEWhvbt8ZB9887gdHE3urCw4VCDxRZuUAFLm9jfxwoXedk1tqrzPz9a7NSkm2SUXwT8AUE5i",
  "key18": "322r3n782p2C9bk3J6YL4BgLvxxH5tgQptm4nPaBkuXNRV3Z5TrSTx3qkdyxUU15bgBoqoTfUYA1em9LBHAqzyf",
  "key19": "5eiyrhjUqQzmXh1rzbyHpX5NH8xiiNRgM9btEPo8QQVCjgWvM4gHPgicKJBunqiycgKCB7VYzzQCMSBZXCxyUvg",
  "key20": "y5VH4yRueCaFwsQx81vT9vVg3z4WHvBn39r5awy9a8d4nhFobspmgFnPvVimqF88MxD7LWpgXdHoWb42xoN9e4N",
  "key21": "2NYBtF77WwSUaZiFPwmmN1ihy218H7qbz2MKCs9CjMgtq6YibC1ymf7qXL1jygQx3zGRkFiiExXrVqYweAYXuLPH",
  "key22": "3GVagPM4uzcnM3oE68zcr1uD3fA3M6bf6pTpgEyami6PY3ty5tGFE4HJsUvephdrURpoTfZeeGoQy6qzQ9y9oPP9",
  "key23": "32QGG4SPYLmu6LSDeDpxq9nACUWbZrv65tjd2t4qf7dLGjcvouRCJxWFKEKiAUqQqWAyt9fGpEJP4SkzGVhk4ZJ3",
  "key24": "46L8qZ9CQRUXPHbcBF53zjzge83qVPw3RQJCissCu2xtfNLBAxBMMbR26z4frSdkEWRcRobZriVjXtrMphaME1j1",
  "key25": "5QQZjHi4BxtmQ4ycySCb9GxYEKoFYzT5iauADwSXDkYT24Ya15GZBkg3MPS9yp9Jcpmyvoxnhvh2Ko82J3AxQZMx",
  "key26": "3UHRJUYzYjGRbEJeN8M7zRe5k54Meg7PA3DidtN6tzCS71oNFLYvKozKHNWG1EBLBupWVnfwL979TgpupA3RMV1d"
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
