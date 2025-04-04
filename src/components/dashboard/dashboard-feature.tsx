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
    "21kZnsyTakEgvxHgc2n5393C8Dfdu6iRJutNcULnsoR15MBoYLTJ3BZwSzfKrF8yRKS5FvwpC2bpCBfejxrvxnq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58s8YRxeWDEQrZzzXxfpbXAecr3bLB6yubLcSUdXP2dHVB8NDpa76fEqvmmvq3kJVpUutdeL81NqnmxMyujRrv94",
  "key1": "5CMgtgLbqWVjsFxY5m12Gk6T32mnnyAbyWhdTArBEx7J7rezQ4LKdhBpb7GfDnuCzzGDaGW2UJLtBa3zUcwqvpcn",
  "key2": "4cpNG4hqbBZ1yEFdVqwBWTfw11mavpZQZszFZK2gtX8jG6hEou9ywSnFYKCeYzXfTVcEuz4eXcwZf1aeyb7EBPdC",
  "key3": "2WGpuYjkHdSmL1sZMeRYpzzr6J7Yk9Ds216Bp1ysdm69pakj1YegmbNwzJbNqx5gpbGAU84pETHz9q58KreFez4y",
  "key4": "v31SmLv1W5NfZULXCGm8WYZ6ku8aHFeZ7dLGBrsqESB4X8rJ9zYfBKUybYJsuQe9Z23v3BxYiLEq9Wwg2bu4VL7",
  "key5": "2kgCvvRDHs7DvYEt5fE9bT7tYeiGTbNvU186aq69LoSggunqt79G6Y57GpBeUJD4PNsHeEZDp61SZJYmKUJkc9Lb",
  "key6": "2U7KYgpjc44GYmcVVCv4oDFZ9NzX9TGDABuPCsSejVZhgZ5vbGC5P1b7tXNGNoKCjHATgbrsqyJv9Vqxdi3Kc9Ex",
  "key7": "5q5Q7c5qWQhfwFXMZ1q5yJKmBft6enVhobsmBfQuq9tj6Xg9HsFBfZvtY5BuByjT9sgrsXKkd3cmJJirxAfqN1F9",
  "key8": "26FB76Qkr9xkqwv9ceAuKgxFAkSndjW8D7hRCzbNhAibDGUXhe345RCc54sioAPXQp54UZ7jXUaz3D5rqARmkaEG",
  "key9": "231BFWoASwsyGVAwTGLc7GZu5yzmRZnyzJvrF5fga5EqExes1KZXqt64X8WfLEMVF2ukSMh1UiqDG3tF3mcRr75x",
  "key10": "3uh6uUSe2HAFN49ww51rSBhZcjp9mmHzo9CPqmWPspWT8MpgAbqFpxaBUyHqGd72gRWPtYG2BmK1k3uc4AypTjn8",
  "key11": "5nyGeS2vXLb46bfdaXis9UTPm4eApvGPCHpsQkaDxjSSQb2cdKb9ski3iFXnurSVeLrtQPmUbdijCVpzpftQevd2",
  "key12": "5KH9mb8Y5CUYFMHDSpbVxzoXJbp8k48BeeAetYkywGxatLAmmLyt3dWJMzptaGAbS7YcFPdxSxyXbNDzPkfAztqV",
  "key13": "5windyVs7dxgx9AcxUz1Pr685EWkLkjf3VQNnTcoFKcgnyo1qDv58WWxUBzR23EWHSVJMfAJMP5dJDekwmShRJMV",
  "key14": "5wpvEWJoXA2SyFMTuGMoiScBQNbx5f6ig7SJ5YKt7YcEbhhmJa4stFJWo1GTsyXV9LFk3geKQZwuWZTgn9FWQg9g",
  "key15": "45JduiRaN3Ea6dVh6Hn5yNd519m88L7H4AqFfSjUQY39AxptreP3y6KE9XAdxKyCskjLxXAvUQcRhsyaX9PFrH6t",
  "key16": "5jSvYUspGFWu6arwfH4eWEnMRowiVzmQuxn6qTEt5RdF8Ynosy9gunreXKXcnJCWqBx3xPcffQBg5tjReTtMBzfK",
  "key17": "Eq7Lch1rNg59id5BqbGmwCRdmSrR7GbzVKgDnZWzuATrQKG7osC377LmU1UsWtjbskiCDHgphywgH9gb5FwQsh5",
  "key18": "5LkViE9nfzLmPTfEWJYAC6dMz4epUhoiaY986sPQH1UXwmBDzaJMLXnPwbygdwo6RzmRE4spTVde8LdzPQTyGcGJ",
  "key19": "21XiJnooYhnF8RbYU6CYLQKZ458ACnwfmCW4EtzbvUAvqWJZSDqaL6tnnA3xL3aPUMtZoc92PwdJYZr5YeWB5A4J",
  "key20": "4GP9sVqa1H7ZCZP9UMqBBwor9DgUMikbCum1qYyQ4QAj4mYBg4Cg8a7ZqJLSuygFC9dj86bWUjzqNZvZnS1xYoZH",
  "key21": "5z4MHaf7f6oa63tehac7tzULnPkuYqPEFx2r1damfXULikfx6c1LgqSbPAwQMGqm2vCLNX3YffKaBHTowK3Z6Jwx",
  "key22": "38KcdKEY5HPQMyoZtAqPFxipo1qbDi2PA43N2Ted37ETi7JmDycT5ecMgzNXdV4v14Mqn2fPPXhqnuFSPTSmHRBi",
  "key23": "4Zcx8T3zGe73h8iY2RtEcfCg3NSsfoMbTBNXBgNy8uPr3zWG3VcykdEqopMZxfnXEbXFvgT7MajziuyrGrKrsYES",
  "key24": "2ALG4Vzq8tfpwKh3SKck7fRhS7oXG8XeS2cXURU24TDdLsPdeQcEMfysAFP48rgTPpiwZiMoau6Zzr6hok4aFHVt"
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
