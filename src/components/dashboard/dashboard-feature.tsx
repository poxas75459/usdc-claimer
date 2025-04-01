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
    "3jmq5bfCN7bGxSNJLUPPVpdkNuDDBd5Ke6sX1QpRFKkkJWiiLF3qqdTnyeYVN3NoAFSWJKbEEp9YSP2NU59M37KB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LekJgQ8mFzX5DD92qK5Zj3PmP9sz4TZg4eyzMuHZSbYPDJhHjPRfRbCEuPPJKY7C9vjoNMe6BGJbS849uKrDR48",
  "key1": "3hHATbMDWAVZb4BsPThKJcckgcGDTXpKZzRHY1YQZ8BZyXR9An4N2tNGS3pthD1Nvj6te8C7SmEUmvCBLEkhadsu",
  "key2": "5QMzd9BY4J2A1rgA6SEEesLP9TnKAruCHk8mDH9Uhgkq8ogFMYBhouTiU9w7QwZtSmy3MjZCuNCzYCNApCHJYwp4",
  "key3": "3ujd22viKS2D1iNLVgxweYgEZUVYNqziRw4NWD4RtUGLxM7aNe1eGuTSFVMSiCTnNuX9kvKJhaFHM8sRaFprnJbm",
  "key4": "3XjPiyzYsGvd7iZqsKhaw1XhQgjok3BmbZ1FqfchdZ2NVKfE2FxBSspyHtQK9GnzctxcgvZs7nMTxVz5vTEfrnk8",
  "key5": "P2R9ZGbrd4wXBUP85fGpxg3cikeVtHCmTRMLzLXkS4Bd7efKySYhNvhMh33RMrg1CpbeC58hZ3MAu92R9iQU2rw",
  "key6": "5NMAC56akXbrTfyyfYcnG1vF9QaRFnZMsXHfm27daA2oSzvsaE3G4CHYXpnfJrNy6qy2F1L3vWHReRcVxqoEcqH4",
  "key7": "2m2ErRrqzUzJ1pseHNcfK3wds9UU1VBeVYsbnSUc9t7dNLgmjFLJiTgN3bY5jBQwVdNeD3appinipZT75rJ4kSqR",
  "key8": "geZHkAEeveYsPee7vVEw7iiu6Wb8tHorm2K8pGPaxGyPwu44zUeqycgFr27o9g8eDAwBfKCn75s5SmnJvJua8Up",
  "key9": "UCMXanM1GWhz8EE1ZRuVzCSRjzBCsUdUKzoX2UBeZQYXLqU24g4KrB8esSM6MvGsmMbWfutfuzMyBdbvZZxRnVJ",
  "key10": "3GMquBsBjexWfGzZTRqV56BgMfM55XgTZemq82fQmw5LrmHHKtaZHMHbP1MDZk82tH3uuvCZeafRcCpQWYjn8ggq",
  "key11": "QVHQDcoPGeshtcPNgyyKoLMC9ivt3aVtLfaZSCEAERkTQhq9f8UkQeJrPwiJDBGp9zEPfpTCyqihGgCZcwrGvEr",
  "key12": "3H4B5yK93hezqVuj3VRffy2yN9UZbTdtr4ET2aeNhQNcoox4j8KvGkvAsRvQCMUgz7XANkUUMqHDm4iPbYmBLvKy",
  "key13": "3GsykBUk2RT1bqxX5Dzn76HV7UMLGaZtLYg8jiqibrQeTjVeTVzxN6P76cxW1YsqVGkUu51w6nYZn6FJUhgqJ4sb",
  "key14": "vSWZrgwvYXTFk61SiJNFktp9NmKxjgwBbJoJvEh8JmC2H6kC9yvdC6MFmrsRezZDeQHNHxn3yfzafPsX1eRsK92",
  "key15": "nSXE5o2AtNWeEyMhfE8wWqP4zyByvcKaKmer3zK6udCSFgt59gimN8ZXAY4BTbNS3RUcfPNxTcpLnnBDr3Ku4hC",
  "key16": "2Jt9SdPP1BeG2k26Y3YccctiMWikJ5Ckuq81C7ujn5QaScS9WtsGTHVz11TUXnEEkotzULVw3HxYXXXnzPbiDMH5",
  "key17": "4T6NbKp7rDRjwBWc7Wggi7w8snbVqLqMyys2pyQWQKFiZzRn38x14pcU5KLcEZuniWhuRt8kb37scnseuTrEc23p",
  "key18": "32yo2n69j23kbJ2R3WyU6Q53sLZKPYdJCz2Wt4Yx9ox9qzXxGdtfDCrQ8HqcHmMwCbDvYtJW46b48LFpBp5maYys",
  "key19": "3mSRu9Dhp7KidnENkSFaaez6XQWVStbbXFHvfZDiNGjt69HajGktFSTZUhXLSnVqdmqVuA9UTYyCAuSo1t8ekns3",
  "key20": "55UuZjYVF7edDX9eG9S4Qo3VdqsFBcgnbaKoZnqNX2SFq5DLRhXeRLgiSoMXrR8FY4ZmBJnPUDf3vXrCsmxHwK9D",
  "key21": "2N5LAP2W2aaRC9WDuwyERiTp9yc7gu5HVHYUnw7r5SyUPP3oJhLECzovxynjumXFPdsMzeiD2VSYCYaDo1Zb73vQ",
  "key22": "jw2YrC96x8HdRFKhV6zuvY2FfNDNsdQtdq3kUfxHLen6NSdaJwGhityqaUSj6Kaz1K3TxLopktqdTDdfDDAGptC",
  "key23": "4oMFBvAziutsQ6WsvYfA363vTMYh5wo2XHHUHRfwURrYucRqN29nuWDSMGTTeka9vDCGCBbnK3M4dtv5jvcjaC3b",
  "key24": "2RCaZLc2pWBjKfmwSny67qqfmv8LUa7vJCfSF3NNXUM1ibJeSb5jJPx9aUmMxu1PD8FNbWfDyUPJouG9h9rwDxYM",
  "key25": "yrKhKQifF34jsFXxUZCprMVJdmCTjeZTbgSzUNmgsraRUnbn6BFKKeFtVSncwsqrJSHXf6pqHpQdYh9u3zmReR3",
  "key26": "4P75s98fVVJBxJ3pMubCxwzjuQpyAcm6pnjWaQxTZtnYUaS3xekdo2NYNnJ7j33HQeLJJp6F4TeBavzgDhwAoGni",
  "key27": "449fK3s2RovdNBEZ8FfW7CZebkr9yPXMmvLsyP5XSWtp4Hq85fU2aHFhHJLqRFPVJbYT7KZmZotsgVKCCjGB5WKc",
  "key28": "2TVUnAnaFXf6tyH8WS9XRhZro8aHYtmoNkoXqh4Y86W58Q6cKRL19uQn4yVdMFCeueso9NhdELQmAu4ZXo8RXkwH"
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
