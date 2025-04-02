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
    "3N6kxgRxpwsBgoCbVtAxzTUg4gBz2tK8AXEDjcsf9VDgsM4xBrPYtYn26t5pyYTxvKTu9qmb9QapYcT5k32YG9fQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bU28J7a7tqhxhWqbk43mUv3KsfpDxB2ZhYB5pBUkR6HYu6asmooRz6RvyTETvqbxhhyHL3xahdq6AGZiea6Jtkn",
  "key1": "s5QSjzpwQ5qwP5PDcXQs4idDzgtSQrx2PtDV2t6KmHW3F67FBmXuBqwCRrPQKZCAWLBw5he1apQsagH29xS5dwC",
  "key2": "4uNF5mo6owUTozmVyNdHiqJKV1gAca5wgguhjXeHa33AxB2p4Ry7L1uBc43jveP14xwYgdTNCimuHPWfvAbAK7EG",
  "key3": "PAhERD43fwmQReBGEBBLzn8B67zfebcBSAnVWviDDU6eC3Sg2gJz7suMXRecSCBqNYgJLmwS3Mye3m1CT89RNtL",
  "key4": "2joFqzata2v2jsn2rgG2VsQXGtowBGRazrjsLjPeS1thH87dkw4JqEZJyQEMHavjvJ2oL5JMUcJr2sRo5C3iCcCr",
  "key5": "D17Tv4CzBzctvW19qvxMe9oU9EBmPjZUeYshfzyNZaQowPaCFwqFXgYDd7pqanakoaqEZ4ZCL9cBAn5uU4xLvyx",
  "key6": "2vwwdFEzZTjKx8jopJx4sQwY5ZApdWDBuyJ1sHEM9A1jnkhqSMd1j2GF9uhz8yG5SxfxjUFVCeZwF6E29wR8vwUX",
  "key7": "2Nv6FQtZKheYWwsW5FyK1sPDDxnbL3Up7HTPQRiVzwwwLRtxwdUpSTJRxZJaPVpZ4M2fxBoNL5aHxRg6cedky2dz",
  "key8": "4Vhy7kho547qAVNyLTaDKTDPyEVt2JQgguyEQiRfjAtvv658SdjFC6fiXcCTwzgeWLS2G3VkrBLwnSVVWFdHgeP6",
  "key9": "2N3GnoWkcxuVVHJaApowwqagiwoczoxJCfqbMtN8fX7ew2uzy4oQLZkmraUi41fjSWKwa5ANE29fs1gG8Wnu3EK1",
  "key10": "4iRhMfwURDfyxwSi4voDzqpkdtqNj9GXmvjG9HN2dCagE66f42YjAqd9Fa6A88MZbXiV4VEUzpVKmCuucXzHYuVY",
  "key11": "59dyiFd989BsXNgejhResSoqNg43B6ryemk1E1Gr3B6e3yZAeLURh47XnhA8GjCcJqPRnG5HeVFRZNDu154AWSLg",
  "key12": "5DpR4XfEGSX4tjbduuutnxT7AwJ1tBKDc4wspffkMxYfmKnADQVfrggYKq12etRTyEAmNoSpdkfcMTjL9iFD7chZ",
  "key13": "4PXpQBeNjMDv3P5782R54TuU83F7seX5d9A5jUnUAq2cRaQjKKMHogoJncdw5F2rfyrsC7wBqupt2wrf8cZojq7w",
  "key14": "5X1zdz8mtFuVk6idT1yCJn52CRAdp1QSZhphhE2FvTgMNr1T8Qz2VAZ6zZxCByzG46qugu6EhTbupycXbNCffTpe",
  "key15": "1ranBqTvvet6FoZQV8qcyAmF6EFWgxQ5Y2xoCE9o6SPAVdCnYCsg2MtWVmJoAx2RtM8rVKUovEZrJRtxiLwB25h",
  "key16": "3UfMGzZ2f3g5dXd8WVe2q5Cn6dRodXEbghK4jY93M8jkbM4Dzsvq3Ww9c3szNH4rbvZ5gu97uZgLZ2HSwLcTPPzF",
  "key17": "2sjTJmu6imViJQX839j12avJPzkHJdjnjah5bTqsyNag4uDQKZeASZciCfVdCrtuiuYQTwiQKi9bC3wGLYcXYhjb",
  "key18": "35eqDCrj9pbgfJ7bQxens8JMRaC78QpTnN7ifo2LE9UaJ94YTafszokaFw48UCjmhZztNad2ysAubeMMjPNTmtS3",
  "key19": "5F5vMv8nvaqAg1qE6eNvFoK7NmcvePGUMSjZkTWbJJn8BCrM9s8VLC4Km5bDE4JDQ662rw2TrXJQ3P3xFRnEwekz",
  "key20": "4NwkX68EdW7JgCB5Xz4zQmHSDWfRZ9zdigEGti7Mn7AE78zzi9w5vijtczNtYaYcg7p7Bw19QkReeknZG7KoQ7QB",
  "key21": "gLHMnpcP6zs37vsLRcwnpwetb6YW3dkh5K5NRL8eBeTGMfpBr2NSCFksCEv3YwxyQ7QQVuWYguHMXtiZyLtPAcC",
  "key22": "TL6ae8CJuM3XvjWthJ7ixVLn9ippmRBe4MrDiRWSHbBDKhyezVrb6G6edvt7v3c6bTMemXfSL72TVeaTSBDUHfs",
  "key23": "4e1jbf8BiSjWLvD263vnfDDZgSGwkB9ww4CyyPchG5dbfiK2r9U85iTfcJKCnBzCy5U5gYJirBiu76JtEa8Tasv2",
  "key24": "62yCGFTm2LRWgkb5gVS4FRG4t2N6ZdQyFgjzr2Fxc5pTE366FrjjM4bA6emNvMwdhLqhmTfhkK5dUsAQJCBTFArN",
  "key25": "5j423wZLqLkPrU2vDQTRrhyJPcUAyfgVJtmUCvNUayask21j1dwEP6G1RUsZiiyE8r2EiLQGQJJjwzxxWF8SQXg2"
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
