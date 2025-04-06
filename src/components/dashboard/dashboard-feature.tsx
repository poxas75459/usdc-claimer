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
    "2wzhXHQNG6HNczPEaDNizuGRzPFXmq8dt8N84h7dNPCcsKJXPcZkAowPevsmXrXRwG83y7tGEyk6oCKbzNx3yr2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47E6MuyugVmzn83NjRVb4pT3TwSMdzpKQBNkCYcaTv8XbMjc3fDxCJX5vvaKNZXrb6eDUGxiUDDufSVsBPTRABRS",
  "key1": "4694EDsu5gJEzX3P3QXTbsrDDPQgmVTs9AY3MtqtnQYF12UX9mzHSpaRHK688gWh8AR3SLu1DZgpv8BbbWUv4CC4",
  "key2": "9Casoy7xiTX96PhkfhcvzQ3av3njTuKFdxXJzSdymZCUrzURfxXVLa36aqKn2vNjfNX4DSCYKMRmHJ86D3kCNC3",
  "key3": "t37KJMR2fLhrwPu1hzpdvCiQkp4QopRZvoQMhfFQuomupS5kgud7oG3N9kKq5LmwmeuBmFcy7vLLSedyRULDbqh",
  "key4": "CJRggbyDJin5Gcm5CL2YyWHgWM7HV6WbavdaHBn6msNY2gJhBRa5p44yTJXtnemyuQSLK1dhVjAdsVGLdNv9TNL",
  "key5": "bAkLBhU5S5unSgQgJWjKEqE4gfKLC3xCtF5ThrB61Bhqu5ZB6ajdiMFDB6W86jV3cCsGPAXwjzzVj4Xb7czMVrT",
  "key6": "59WJbzs9WyFmVXHrEo3GsYBeubNWwffJSHyCQDGUB4gesNq7AP9nq7dcb2vxodo5Cvd8AHRT2wpcVddRovWZhJH4",
  "key7": "4bP3B99TXtiUWhSxCcacBKLN5jP9ybo3e7FtDEg5FJbxMiHxsfEdNztrVsbsVCqb58HuytSGsLF6tVf6V7X47xES",
  "key8": "5rJhbEQBVCa5JqAt9FkxkxKptK6nYf1VrXH92vAsdeSy8FKPJZP6HRNdXyVwcoKNrgQ517UypGGEs7A2p4iMjodp",
  "key9": "2QFcsW1KPcNx5YQ3X6kbEhktQJwMjh9vENk1utekT1iFbRS5FChN4Au5wh3iQZ262nLDHX81F8SjsD8rPE4X81QB",
  "key10": "5qW9Nesep6G4Q2txtmdjdnGKQN8voL92EmTpuBjNjEbAg8S2ys81aXUoiKqq2zri6qQmrvfdaKBe2m9MqPkA3x38",
  "key11": "5mjU6Hzo3RqS9epsiQSzbeC7i6KRp3pqr4fdo1nvDt7NXCGpk24aJD1XiAAd2xPMGNHuy85KU2wpb9dRhWqTAxWb",
  "key12": "2QULfZWncYSUpvJZfcvnhHQ4AkA9rKgePcW3evjXRTktf2JbfLKhiHFsBFqB5uMtKJADroppjESdkLSJLSm6Xaw5",
  "key13": "383Q9DBHjKWpJRAeuAWdNEYmZMBrsaZDapyfkdZBuzJXv6uNbiF288s5Mc1z27YpM1Xik1eustLeETD8jkMDxnkG",
  "key14": "3JwQq9RQPPKPsLHDbKwBpcZ9TvcNt6dknQFZC3Lfkw3JKfQS6FRgKyi3RS9sGZewrJWfgejjKWhz2qeNpfUNLCLN",
  "key15": "3HJLRPMzMFDEkVShccf9nNSv7zB1kVWAxN2cyRvfAg9CpZqoV9VjFizXHpJD2gAom4Nh5PuwaLi2XTMnZs3iUN9u",
  "key16": "5NjpMGYWjnHtnBdTiz7f8qzjp8DbHPNdSgTKHvfsXYF3Faa96ro95kQqyefi6PUgLPPHSjDmgP8wTwrZfqnarcYr",
  "key17": "3maTBZo2vGVe32CoqaoUbB3yUjwsCCXxPzRob6gEd8tAKdYehudiViQCSMMYQ5BKex33mZsFznkRVPVeoxhdVpUb",
  "key18": "2MRUtji8uHwfi46X2HLwRk97RZ4h29g3WwrPb8PcQCYCrXMv8Qiocxnz6i3s137PbZDZ8XUq8CBVi39ZZMMyYr7w",
  "key19": "3YYq5dUDGxZLYAVH9wgSThx52arfeucLpyLYYEBQjdCYhEprj35GE1eC7rNWr8e84acf3dwsTXzL6FgtPGyvC6pk",
  "key20": "4gguwiGCA5sixVptvrQGhoNGByNVrnyDW2VJaE2BkqMCWsekx6BWmeta7hbjBQ5A8NnjuCDAWBJhsnThZAaJNEwQ",
  "key21": "3oDkK9fGyq1SnZg4DBQrS3CZukn92cGr6avYCq2tL3LPSYZaMcnsToCb7TzUxGpTiLUpavntAkQhrBicwse2LPEQ",
  "key22": "3ZccH59fWLRmNW4prMTPTJE6ywBiYcpeULpxF3CTcW9egcy97T8Q7kQp79DgZ3KiffsxhvBkhRQLpK9r48A8h8BS",
  "key23": "5meHoucEhEgeZwAXvZKhgNaiTXdf16MY1KWkUJFMMfF1oHswRCYnpuHJh59JXxqMChVfoXifVnZENrWncDE5pMYn",
  "key24": "DvDWf75WagtnVnpQJ5zzEb4MJF2GqJgj1ZxYuQidePYzBjr2wKdmm7LicBNdMG6mXAufXkeUcFLJ49KtH94qnUh",
  "key25": "2JfUa7Snd6WUbfc3TBmp36QnjkdoyZq6DiDwfcg7vhQXBRzLMxCDR6PuKhMSH1k8S2kx5W76gcdfxxJd7mLUyJe8",
  "key26": "5Gpf9Cwy1g52vzscaQkYA9C7gcRrLqw4LJwLa9jGc4L7VRBWaWkiGhTc9SUuNBR8yTqof6Qvz8ZbRa4MofZZwyRC",
  "key27": "45ruF1kt9ULwB1QydV5JcHetuvpeg69MPahSCwqkrdBLmHhx8fTPRFDqMEeAvYGNmgNnYjKwUEnLySAXj4jfVcT4"
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
