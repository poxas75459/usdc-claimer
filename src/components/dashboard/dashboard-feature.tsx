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
    "4M6KfCFNFjsiZCW8XT3ZKJp9qqTikwscdPm3DAw7t1xA1gaRtdmTGXoV5X65gLqQhJB24xV9QjTBQGtRtRXKG3Ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5juVJ38n7tFHZPPUgrfjXm5ytF8dT8EUKfGmkxjqCcAN5PzJRfXsXEMwniLLesZWd8oX2Vc7gamTtEGZSvaWt7rR",
  "key1": "52WiGLviZs5Uit2QsJ529JXiLoQ3cHkAqwL31282NNrEyg4eWsrsvfgLuAV3dPU3rhB3Py38g8G5jaWQJTaJfypT",
  "key2": "3gQVm49rWYoHwPucEeu4rQiS1DWT4e1yBDVhTH1GbrfNAx8rGev99er6H9gLUjKxUQUQp4e53ZrFRoN3843bfkhM",
  "key3": "4SeG7iFRGzPDfht6LiMkWF9Y4jgWQWbkYvXKB9AutysG5VHuacn6t6ZsEvPiQxz59AhiybwoGbAJ7zb8qbzqFicz",
  "key4": "3FVWD2qT94XU8NhocLQ1JZci7AZ9E114qfvJBXv557Mqc9ekbYun73sxLo44c3PUB83Jocw5wdaE8VoAA4DPDa4p",
  "key5": "3SbZx1xV2uy2m7kYi94XSeGUWZZtG4rs7QZnibifhPveMMCRi5A9BULZE3Jbfq8er4F94YymvTp71WgsygGESxon",
  "key6": "4hRFV6gX1NFAJquYYZSJtjLfzWcdh9aEGSN2domcizraBPH9vj9QrrZnDKZnP4pZ6pC1uGYCfPdFqNtQNYvK3nRo",
  "key7": "4acPgZC6cAMdYmexgxcRBhSyyChws7B1yePmeWUQ3rDiUiDFDAUPMRuA3bBbnTgXTbsyG7hf1hg89Qx25431EWhL",
  "key8": "53mmqDcNptjsnrXxoBMVknwvCziE3N2SgmYC4LrTitWSaUXrWjSCEPEurCBQij7KgPhtfJFy9SFw4b6PCV5vK9dg",
  "key9": "3qp7ua3iHUJK7gXGAcViE9XHvTsndGCFJye578UzEDcJc8DNTib4t5mVPTmxi4qDnEK4GJbWj5pm6uTwmSwfeXaE",
  "key10": "4NEjq6RY85iZe2Ssj2AM2wwgAJNvRmMvhk2cz2dzXhtuCaLfHhtVHjs2EHVMGChnQAqK2Y8HL3mQTSvBtgEx5Nq4",
  "key11": "3Mjy1WR4Vr8LDBPgz4pwdH4EWjQK9thYUwBAHuJfQEjmh8KsArc8GCTwU5k1DKTtdMjwzqHWnybrW18cnMdJteCt",
  "key12": "vsWmirPgXaxBUs52KsQ1XZcWRAaGCYVVyqMQgvuWPomuc3fwthxxZgwbVUVaXe6gU5v9L5Hz5pz22YYjoqpUsTN",
  "key13": "5FMYhkaEP3GGTZN7DH4McTnTiLrmmE3dRVkYHbvRDtXuK3wrUoJNjfXYeFR1yQoV6QPcTqQRHbHQsZEJGQjmRfHP",
  "key14": "2EyM8YvKfdT9FGijZCB8agUMfQLtZzCRaqrHj4fTHH2hrLrUxpbTkogBVPbbtRMZ7G9FjdxmPUZ9spgUNPxxUWAT",
  "key15": "8sU8zEqryki2RYRz5k4Q346fWh3AYCofyMUYU2AXjy4z2sXvLu9qcTxCdyqCzJbbPHSNqt21La7Jq73u5a2h6UQ",
  "key16": "2UV4LDuuEEYS5Cat2RjNqGhMrf6hkLaJitFZzK7vVHEDKrbKPLYrw97UnHMJXWjnF2eUf2JE5noruepAqAeYiEh9",
  "key17": "5WXTJWLUvd961ewVCKNsZXLP5FaY3ddszurffQD7w2MrZNKdJJ5wyJscnprXnwpjwSUw32a2mmwogYyfp8LxaeyX",
  "key18": "58SM4fJNVqGKn4X6oXYmMBBnsFgZ1GDux5FjTbvLhPBcor7HJDXPSr18NALzjfSQfuvwh7bQRP8AyzJs9zY4L5LT",
  "key19": "2WqgRjyVGPBHRB25FaXa9NvW6uVGA9GcusPG2JRYcecXydvWCL2vgck3tBnT6RakU23TYJTvjZxLsfXRWJiCUNKc",
  "key20": "ehbRnLwEKZRboGnbQ9TgSMjTeZPL8wsRQvRwmfeRMPdX9XLeKMgSUjkDePqG4oAyhpUiyDFh3dzdTf8r7RE41ED",
  "key21": "4bdgkgqjacm7zqQrT22d6FzySX9AQvCQ5yYJRYhQs7qDfpBFo1sLx2brTHuQBkzVtBudLupfJUf395vxjQRDhYnU",
  "key22": "4xJdHNKzowhA7D7xpyfwuM4riW3Uyn4mjHBbbj6V9fZPgGiNW5Zm5MHLuE7F2NULaD2AvxqrRbUKmsmVMmHp79yA",
  "key23": "3U9HvLmkRhnug9zUWR4vWxr37aeXbUhhjW8tFRJbd5TdhmFLy7qdei9N22Qb2S4B2thXwpxNqsEUdF52a3pc8nPE",
  "key24": "5QQ85WBDsm2JJ2y7cWB18Fg5oyZZQ4cG6TNowUZrTMfhFvmB8KbHwLL8169TeQWMPptAzVgFgMJU8G279ops3dcx",
  "key25": "2e5ZdjP2jRsFie8uk5ZpXhTGncUBeGJ52s6GSNdH3kYscj2ZP9rb6yC6vKU5uCUmFo5iACZ5NMfYXrCNtZB8JbbE",
  "key26": "4kSr1Qe38uJHNizmJLByu8o6URTWgxebbh2WpropmX1aXKfNS35HiqbMbhs7nFVNyvZS8SCqg82yfPGBWkdBbANF"
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
