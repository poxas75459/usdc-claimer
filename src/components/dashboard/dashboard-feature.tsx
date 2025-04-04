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
    "46i6KXPG4yDraTfbY4wzxm23HdN9iQ5fSmzJEryUqnCwt6Hq8mqfzjVUoivdhRzU9QDz8LjhiJsrtMJG3hDNJz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "su5EnP8HBEiGkmmG9Zr9msEX47AQMWpEPXFnYZncoAUgYnPa13VGTN4kK8VNWKtyVdShEQA3xayRZHBvCh5dAkZ",
  "key1": "5tV1FvwDKbssRJxcYPqMBL28J1Rg1Vc6FZVAj2FqfXDG1FeQkvaDgF1D5RTgPt3aCrttfzsjW23T2o43iU5wArNy",
  "key2": "3xb67LHdVxHxwgXxSkSjPtULLuyhtaiej2XsssMYeDhUvxVZZEVuGPh6NN7Et1LAVMkTVQNKG2Y51aXJz6E9rrLw",
  "key3": "NbXTgmfG6AFiooUgnavBNnbgg6qrDqXqZJDBFikucMsu98gkPLv6JrURdhs1NpQkwjhAvSVctXi42gxQaGLWsd5",
  "key4": "3tXn5ZMGq7HSj7BNZj3QPu7mo6E7YKB4fpLcShHA64YY9BAMrn5Vd3CRtBgD9sKSt5HpNEkbuFSbswL7nh5jqqtQ",
  "key5": "3pc1TucABBzUKVS2d5tPtimRLSwN2BXo5AWnYhwJWx3r8X5NdTdmHyCZTB2sHdnCP8tnYjyanvS6UCTjLgEeyq3k",
  "key6": "4JnxctX6dt38uSFwX9oMrbVNmoBe27iGo8XmWgYUHgeQyK1EKczu1XYMmyGbz4RtfRYpgUMU6swkeDaJiPxdtEXp",
  "key7": "ruLFqKHHiyhCJ19Yjdv4FaepzKoBsiUaFJ9vx523fMvYqj7uqoxt8WYChd3qwe7qWkzFNuk5yZuwvwrk7TkcnQN",
  "key8": "3Nrn3zqkE3kz63KuDEMe2HZw4KiV6RTc4Vz8S4krU5HsBdEBz6BCrceiSg41oiZjeqboagL71Mw5o9EK9spXsTH5",
  "key9": "5wgUoNazX9fS32zDxbmA2BQNaZt8j49vQ6Uhpcc5CDopj6zw4YcKSkmDfT2SWXz75fNYawKHYXueYWbvu9TtBLwF",
  "key10": "mYNKjHqkFbfx7fA16z9zArjDXT58gXG1guykG9pWiLosRHNL9XiEPqnTqJnT9GcJJcvFgM3KHXnhoBmWjLMkq6e",
  "key11": "3kwhYK6raVrthnxuJHGqZQG26nDGGRsbj9F22EQXmbdTkhvRnbMN4HSsSt86UPnMMu6xYwn34EM8xQ73Pn2LfJwa",
  "key12": "3vWK29vcL63Uqe5Rmo42G61NtCMxZdpzJMZ2Z7NGDdQRfiGzDSWW1E4eNjH6Uj6UjsWdRBay2ABGxowA5x2sYANx",
  "key13": "2XBnWBZS4K4rLaAdVrRnPF7x3rhTH2wLhkDcCKbZZ3fQaQwdCdjVfEYkV3sUprzVy9WVsg19GMqyUVa2JEqo3WgC",
  "key14": "2H2amYTUcokEZS2ctDMvx4sCPuyV3LHudGJQy2gijeEbcFc4kvUzbZXXevPwVGXSKyGHAGzWj6burzMamNEXfh8Q",
  "key15": "3cieo3CKNVnNYhmRE8bASeW5isuBwjNuz4g7phFiD1ufKy2257hVzifAyEepShKwdEy4PtYogJLsYHUf4LYqeCDX",
  "key16": "67TMYogYXjDNNwioTq6zud9iXqTLj5MpCV5hZwYWGZndc5gnvbsdTkfizmnsLz1vC5eqHkE7neSpUZtAP1uMkrfw",
  "key17": "2vsiYJT6SN3KVA1DuQfnpR1RM8Qifxoua5ndCzkf5Z6R1T2t7Fm5AyPDoASnn1ZcUnU6SgVNnXCEKjmnGEou1gLQ",
  "key18": "4gmiaWABiDhqbbsZrEuHpMcRDbShqsR4scKNpwmM1chmqJMQfWSuDikccUFP3zwMLkUK8HP9sN4daF1N4quQN5bc",
  "key19": "R3BHsrqPv2Q19VogCd1RejYJcdtpi2iZbZgHnpBmPZ87XWQ19aWeW7DJjgY51PyxWqAhWqcerTHNKtpvf4TkhzZ",
  "key20": "BPt9hA8S2qyMEHoXiKHt4RxP7YZnfK4zgjHwfXmDNacpQqGh9CSqeBLR7ceGTKFryKt7T62HUsr8BE7jLHdGnd3",
  "key21": "21rtjPNPgefiqMb6ZKNbnHSYUj1aSXLCgxsgpmNgvNxzT4kurTCTeZZJApECAYTKmw1Cpue1V9i9bjTnzPSVhupo",
  "key22": "3BjxqDvresBUENvF4zr23AoA9BvzjfZsGFVfCFT7cfcpDMpVru3ha7Xt8UG8tdPBWVez67MDxYpjjSuRAoKjVNiP",
  "key23": "2nSyHsa1MfCtfgoSnzx9XekhXXEoZACvi6y6KrUWSCX3BquBKyq5dDGDac58R7Bknu49QZEHYbWtxY8c6mScbzq",
  "key24": "FDzWbBB4vw5mZkZSm3ZWDvjce4G3YJjCvexa5FviUr3YdfVUjKPzLgJfLCfVoynsJS1oGGP3YppyTbpXREqS9yG",
  "key25": "4uvBSxQAue8ttqBDXq9maiwGCUujqxurQgE2KGLKCoA5RwvSnegULoJKutNSF4VvcEP9qCwia6fB12VviMnuRyro",
  "key26": "9pMhYT3BtW7Dh2Jivgc61AfWiEnm1WVKKL3CjaAJad4DHAJbtno7Em4RbfcJ7HT7ahtcgWLYsZ6qD7XZxiJSLDn",
  "key27": "4NR79L7QFH8mQujHzx46jWn5tCDBfDZxcV3389WawQhLLkehjvc3p5k9J2LmJNMAqe9NNSSWYUcTyVeJdPqj3o4V",
  "key28": "4gsfPax7uzfuVdsriVCxKZLoghxbwm7tkLxE8dpkf5arozYm3PWhyabwVxKTXirq6Y8FSFagK1Qhbf9zb7dVuzVw",
  "key29": "3Af9BKAUkz77QJKqCTBDb6jSmc8Hp68R85UwD1iXmSRquZTFnbeP7ta49X88FeUSkt1hkZKhnwUz9qkd6DyAzcuX"
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
