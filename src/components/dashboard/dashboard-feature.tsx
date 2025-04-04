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
    "2qKSeyMeVyqhyzEoSHYQhXieeHhiqyJinbfqzUatPxQGa1eHBC4d79QxPuiRWGocFGPu31m9u2tm3oHMYGFrxqQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k7N1ex91j29cTRK3o1Yh4C8bohAbAWLKQAfDAre6ngdQGBzYKjWEnYCBjjgZM3sAY2GZtb5kbWcn6j3EGTgJt4i",
  "key1": "5oRxqiWPgvvgnP247VqH9cA3xKV158WAra9iH7ujytTEtuD3Yqoy6pDC2byxhkGeZF3CvndBR9kpDYAzPCDxHEnW",
  "key2": "4QWzWgGukFynYsyjRUyrQgtS1Z7Rb7FSAoZRXpNWKui38YKHnKUMrTSg5DFaJLabp85UgiLEBkvqXE26jvseSKEV",
  "key3": "55D2Xcycp2Bo67dH4HwaGT7XtGRw6a3KFWqvEENRFmm2669Fak6hYBdSQ9CA2aK5G31j9RvSKxEu7Fjs2s3u8usx",
  "key4": "3PKBQ2hDmobjnnotAoeJnVeCnPoPMaZKmUQRL1Lcp9GKF7nQvPfA8SKSJ4dFSwFanShmbSn7BCD63iarPRyG7BXu",
  "key5": "5yJzfK4LNqu5VUwB79ic1vRGXz1S9onmxDiQAY3cBVqtH4LZaN9tZisZ2i6iErhiW1wpdWDcUEsBBRajxiVMCf51",
  "key6": "22wbNTF7ArMsd54auZ4cZKbXRNa4X1z22fUAub46SZCuCCjkeaVC8xX7mCL45ozZeL98K8fp7dHD3zL8FLyN3NHT",
  "key7": "2tZppePNhTwLgz6BBVvfm4aux1h4fCVyrhpbTzrKgYza7c4TMXUCo4QAsqwWnf6DV4e4FogPkMHrk7eqV32PfGqT",
  "key8": "5o8AVDMcfXDhejbNzdhw7m6sdvXfcJomHzuihrKQUzW3SuYdtoyELXzV3gkcUFTre7UszZTJspYHN3w4vxhoBFiu",
  "key9": "JHqAoMEu9jmvbEovRVbWpr7ux8rXQ5wcWHNyzr7jPChRfb3LFDg9QEgLRP62kpXXUvAJEE5JEofYJddmpUrLCiz",
  "key10": "4vEiT9ZPPkK6EcucQ9gu74zwCZeCzusehWywfUErfgsUqH5m5BBcFn3AmFcy5Vuotdnwd6xjN48ik9fc8fHJVTSA",
  "key11": "4o271JCsyq5hdynST5KnjsAMCf73mkmom6cpeCvSphegGMbvh8FnLEEaGMrHWAmRsRs7y8GHzRX8y9fJD1TNuPve",
  "key12": "3E2UicMfzHvEbYofpABGvbDzjbfWDtm1gbGsj1H6yr8PYkDg2Jm3aNUtXCFKmdgjVJtqLmZstGzgphzwAfLd1e1t",
  "key13": "4BcJr276yqNS9xap2Tpstwwba6bGkV8vRzKcCwT7NmLwA3zJx6tEdKpyQFv79gwNQHzUS8P5c6mgruCfxJreji5J",
  "key14": "3qnKwqthiGELPbxEKFsQvPUEcNkYoZpn7NZEWuaXUUi9yB9AHjtssvUEsLUgyHYkKEDnF6SnaxS1ARHdaq4c89Qc",
  "key15": "5uxPmjNQ1EmUfhyyBKSvCTdrC3veXCLC2JZPHk8Mjn78vM6VCXbSfwuCB4SVHQ86h76kspU6dBSFkmDYNP2Xt3ch",
  "key16": "3LRZmjGT1sGzautRs5DUz85caZFd2Z1PwMzbCHANLLMj9ysH2FxtQ9RKNzznuFZpRxG1JN6TFNMjDA3eRk7fhkti",
  "key17": "1BaxLtPDFUrZ4FqpJZ4BvgvWJs43zzzEYBYG7B17Abfa2dDv8Et2qBRLSiAv4grMUpKYBSZRtpx7LnE3XfSonwn",
  "key18": "3st2jyr2PFbAB3kDftt6w9VDodxCm3TPBtCmGuqH4fnQfVYSg2MAZME4cjTMTp2XJZiyUJu4AhzFQSxehKgVjVtt",
  "key19": "2fekUphgWa1HYqN5bqfC5ZAxD7J14rPXx1H6NiR89guebjx3ik4oAUmKqQXQvubmJyeFpdziyBh9pM5yiaQwEb99",
  "key20": "2fRkRg4x7uMPUKJ9KQQTbeJb2E9Gc8qBFUkLinZeEBSLqUuBRET1o57QxAvDTqmEPqMDPJLQdt2RQbfP1YyqKQj",
  "key21": "4t3xoJ4V6prQBPA4utUgmdEqpnyxBMgSYy7gippVJdQty16UZFvYfSSBkkdt6S67Z6oKdHsCZjsSM4YZfLHjYKJZ",
  "key22": "34pto8BnKcytX8EmUynf4suBb1hEPrBwcd8o1LKiQMhMWtCidB9wnp6Pzr28HCfiK7g47FcZg1BdcXkA3p9GQkN",
  "key23": "4FRSCLMsBzsrE6YjdZqm4B1efEjnt423hzYTLiBDPRyfWphbRngHrgZKPmvF66aiarFTg7Nn5Zu6esnPCBw8dSJ",
  "key24": "GP8ZNLY4bZNnrap8omtWsHSuhxFVWKHq1S1tDPDFrGLcCw8LV2vzhXpf2JfSutPRMcH8REfVaNcyU9CwYmVZ3za",
  "key25": "YjCh1doVNrgiLNGwsKnVAxoke6YwTigWD1UEsyMPTBQFVprfTfr31bnmobzijtF62NvP53vCbWqdbFRRVdy1c8F"
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
