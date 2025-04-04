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
    "2ku3BrwjzBwTo4WDptT1seKrnx3T1vzFcscy5kH812EUVpRQSabFtUk4mQMfLirC2DerWWGwQcKjM1DCt3gtvKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJ9VVNvDLtCH19373zhi4Y2XMCZuHjkC6EiMHkqmbFgkizpKzvj1WVVtwFHJZACcuUyX6wR1bDWbtLNKoWWzdyJ",
  "key1": "2f2cETUjiein7zsHppTEkfjnRbgQevHmq1Cw3a13FbH9P2hMhwAddV5KggDK7UhLhjwbpYB5zMkyZ46W1f3MJ1Kp",
  "key2": "K9tbDCHPDbWK7xXxXH3LvTuncfDGVoTyq8gtp2nAiaz1W8EJ7UJSeHxQUZqEyvcof4SU4GZUVesZTbzwwHS8bgj",
  "key3": "47SdhrcQRL2NVro7HFvU7v1js7UFvMsbvMJdBGKckdAsBLs3js7F3iCJs7ciWYv17WDbCt9kuVa3VSUC4sfNQoGN",
  "key4": "5aU6SUi8CLBZzdxDkxCq1bphGt78fWt6yhukbndyKpEAv8Qs4kLxTHCvmBXRVx7ZyyiBnsv8rKUkMpxMetTqxYeT",
  "key5": "4vfeCmRXg2Ei5q3vEtA1L8qX1A12VGXkCZGm7raJ6rixHrTQtvuzkoEGEVY6PBTfufBXhkdj4j472H1VUxyJ5TDF",
  "key6": "5bkL4dxZSfdmHT1BPB3x3SL4UkmWGytf8q5ZGNzSYivmM7rRYEo4HqWddGtheAhUzXqLE1RBe3CX48bST16g3SAH",
  "key7": "49Bce3zJWRPg4SakBqm1BNDUL9NxKYjQEdQsKuyXCZUpbAqWCcdrfgSrS1vYWTnb4YE7jM9JqJXg45sp4Yn5mdsW",
  "key8": "5CJC1VEhRVhoBaVcpxk6RRiNwTUJra6JPLc3HLbELrduX3N4frq1BzWyz19nZBpqo2mpkCzU8EqHmt4rzMdP23bN",
  "key9": "K4evpWr1ty7BbFsSGBXLJwt4fsXp74X2ZYACQF1dHiwkUAGfknwrSmwWadW8HBkos6SSdVJN5wNjKKQm3HSawia",
  "key10": "5UGnrTxmvyjza4fZY6Hb2XNoNWDmhbyuenm1jKxrxTQHMfpeby6EnR9J6PDe2SMr1K7XeFQqocJkQH7QwY6gpKE2",
  "key11": "5CWqWqtkzCjVyBLaVncK6vMxY3pSePPxbyhDyMxCXyy2UVfHMBoEZo3NUNpnRNkdYeQFroygf5yuuXMBDyti2yTG",
  "key12": "38BYJGgks363nMwbnubSYpkrsanfpgDZUgMCALjv7Am2imy2hyHGQEx86oWLciA1CefY28sQF7oDB6zSnFzEqDgg",
  "key13": "5m1Vq4TnCvbyvZmhomqE1bb4zuiCTsrJuf7XDDU2DyGq3dMUxGeRCTRYB7VvAeD2s3iujhrp6UjHUsAoynTv2akM",
  "key14": "4ik1akfNr9Qpwc7emEHzfYUnNHivTENkxa9BPrZb3RbhfYqMNmWxnYcsB3jzj4JgG5RMe54xArikLH3DjFmyQwkp",
  "key15": "4w8iBykoRHQLVP11CLqSBwSM3nSP9mJkuuhbzBKHcNhyHUZwotaq4W2YHszbLHRQh8VqRpLWKgJnHEBokTCMJ96z",
  "key16": "fxYYDiXSoCGnaJQMV1ZFi7y5hMKTSXPhUS9esywm2AVhZ4PUKV9nvgRTJno1muwWZpLfnAh4Uc2bBQM7K3MfNjb",
  "key17": "2rn8gDFM4X18E4EJfe9Fs8sBGeAwuPQjZPcFLTwBZ8wddTcybLdsLmS6DGxtvDBVnZrbdc4wjTu54xoqHaGT4rLf",
  "key18": "3XjJWxPMJqLigVRrYFFDiuVFTfSJeXDkK7dN4xzgG1D41JkF6c76exSjTCZQ7bL9r6pDrzgyUhjjTGPrX6WNnSG5",
  "key19": "3WdPtkPG5Y6KoeKzogB2CwBgAASYJco6JDwKVaHTC6kVAazUDKyxHgzRWFt66bfabSnANWcbVbhjKAaSckcfsiUw",
  "key20": "2F7K8YWYzL2Y5ESShf78wvpaZC2pV1NM9gQHeQdoTbju6ULCDQW1URufdjcvVJHB2C2aCagvnVXDLrXi3G2HWUBc",
  "key21": "YP7xL278zvZzu5hn4TD4NQaWuc9a6D13VGi3YAvWFDdPWKNsr2riM7syKGL5C4Ut5TZxTd8d7qJgK1XQZqyxYSF",
  "key22": "2S8M3XZVAJRKHDn44B6KUh23Cp5asrFhMATgnrRX9bRWhawvmojgfK7DPXCvT3qPQJPt6Rmqki2KpmGC57Cixaqy",
  "key23": "3CqSoXw9fLv4WnVrmgkY9VVoWMozMkyJcEonijEUcRb736Le9KovFH1eCggS4ZddVAZoZakCjeYbHZsX2km4obR1",
  "key24": "2qVGZyRRwyFtLDQY2NG1LfqjFTZebPZyPUgUyKwW8ZQL6Ey2w2eWqAEL5uYckJkRrhptBhF32ecvJByuxyk1w47G",
  "key25": "3K5JAzCkQfCUmkPPyRRh1J6SCUYKRbHHMB4UbWtgsBhiJSWF7cj91sdUTEPfPCuVfNfV6LPToLyMzQYdD7ZzQfSp",
  "key26": "Tqc8e8RrEpX6EMA9Q63UQYTNX1PdC8XA1z7hQVkaLj8P2K7c4v7FmniYR1q1MqbVwwzXv2n2xWDLNCCU5eSA6y5",
  "key27": "2k6ogJWvn3qrchEWUXHEFEsP8c8SUxSYtw42LSfvsvv447heWCs5Y9T2CMTnhCEcdKaoZF3yjfzsZb1Lf62mzvvC",
  "key28": "4s95j6pHmfQsCJNF3aXGnSTBn3VVwrB5JUWAtaeWvC74LUWDheS1ZxqicaAVCaPCWDCwvQrZsNq6vSXRsGaETpoQ",
  "key29": "53h7b9PLctJMCtnVk5v3PTr1VXwg5HZh6aSy8HUq1rDf4mytyJnC7VBAaAvGzDpZ7eRxmjcu9R6hGHo9Fkg6HJCP"
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
