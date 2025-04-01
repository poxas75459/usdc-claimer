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
    "4VYVdG4bWCBxRwAptobpGQRhwUPENU6Q4p5jFKrDCCMtddSC15cQc3SeKy2jPy3fZZQKW976RmsHzqMgDgJWRz6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hWF1hboDNxLCU5QBFAYzKvW1B1GhD88ZSALcE4N3WvhSBC7CWRzhTuHEyS4F8pJHGeXW6yT8Up5qpoRZHAaxCpR",
  "key1": "5zJyszwS6bbMxQ3ye8apkrqPGwXNbZhfnbWXvjFvXmkG78xycAzwYKWvsYQJiSdrCeD5QaLZWeuiedRqPnBETWcv",
  "key2": "3FKAmawdh9jEPLb22Pi5BPbAnLc1txsP3Noc4D6aEzexGW4vvWHxbX9QuYN1qFuK5UB8EzpkckT1e5sDbfoiEzKq",
  "key3": "4PRcSGBmMPWuSMw9qb6zBaxAbAdEVykRgmkUPb5PRdzk2Ub6eAj349ixpmkexXU1a3sh3docNLrupQqy271rga8o",
  "key4": "xtsMRCzaezniggSqxue3jCj196PX6RR3JPGzkwcDYsxjzS1hx14Z5aaCRMVY8USQ5yjFspsCgDF9Wp73EuuJTTG",
  "key5": "4QfHGLgopcwqjt1ftKHV7ryNYALMU6J7y7NCm1QSeJ1wMe1xKoAPmfN9iZ7XybAruYmAdnK2CNssXCE6UuomPMj1",
  "key6": "4pPwXHoXeWNy88xwufawj2MCg6N8jSnymYPhvvwmXWCkAXDwutLyUovxcmF4vZx9Dy8u54Fp98HqzWumY9L654uf",
  "key7": "3gNWP1kidHgc6wehypWqAZtRApT2RVUAwavZe4kH6oCfvrgVrLuX45mZYm1BUcrYs29K347Wq1bkM5cSUrBoTKD5",
  "key8": "2sd8duhXDPyC4dsmNYxcXBzZ7x9cda9s3yeMXk1AB35PN6XZG92Jv3vMZR3C6Gmj9jSxNDD4eZRRpEjTTsc2p4iA",
  "key9": "5pbUaY2mhFzwa9wFkW5YHPenY1VZZaJUVds7kNMpPpwUiadHe6s7vWgcWbKikV5tSi9Qn3rHNman6F9pkHmsjBrJ",
  "key10": "3k6iXsPzrLbzFfVkFHzscEW1vBcy8nKW2LCtVsRZubMQfY2w7Km4xXXJuuAL86hx4xjnYUxsFRBfyuysicGvPYmV",
  "key11": "4sENMn2s3Rf923CdTiKrJ7a7g96mwPoUmmngHYPFK7xiZygmzt8TaiNEL7h39x6mHnFed1vpHXgLq31EUS1E7qvH",
  "key12": "7fkNVAEzxuCfxqjyRbhBdkU5m4P6m6dhtZpiGby86S3JLFyjyAJdaJF86JxUhAnkba9NStaUwtohXYbXxNKCc2K",
  "key13": "vSF6VeXmiZC7HxhCuJ6MLcrCZJH8TKKDvey6krc6MRmm7m6uJnkn1XxVJzgdCGydx2USjBNwqfW5rKSaKDgcRz8",
  "key14": "4MaMHeYCLfhrctGURgBMLNCdYzmxUtbkN4NkuMcL231hNLTTr93z4nE66ZPnXx2o5LrqJmembXkuBnALjtzzSbi4",
  "key15": "5Uny6uMpwo87Q2qZ1ytV5j7pkHajqpE5BiYVv5dB2XNV8HxBVQJ2rsm9VoMmZCaeYRx1Sbyci7vTT638dTokRQcd",
  "key16": "39JkQrVVBxbpfVW91bicUDEDVG4Rx98hK9aYJstYAX7V69Pr1HVVBJQvgoLBmgrX8JcWZT7wEELMyD74A7hWAEn1",
  "key17": "5FfgMBMasEKhjDUZnPpb1pug76rTnjTbpNqK77VGKwEEaHfJmhvxr17vsmGaPDeq4VjMVr3RGyXCDKTW4F8Hof1c",
  "key18": "3CYm5Pq6TDZJEK3E5m86CDcyHCbNzbWPcKY75pNbobdZUGwBL7cdtHftcNktqNz5DPbPaUiQbAyZ41K5Frc4xqQX",
  "key19": "5SndS5b1Gn8ksqtMG9pZHPgnayVJF48FhsoJ9XFZNs2VWtFND7WiNRx36P34vhK148TdXakiV8agXtxrHmGeHm3E",
  "key20": "2yia6S2qiNt1Le45sf5fYZukTfykeERs1gksKGkWzudoaUhMKFUL7nyKDEVTgowppQmesue3X1AtVuigghPzfwMd",
  "key21": "4avr388oiq36MsJnzmkNkQqvo3ZChmnBLvKcbefTTGHPpYpQxBaC3rQeyRrAU8XM6oJ9u8vwunroaoKPDpzYHFC",
  "key22": "5AQhk2f5QAKFoF7zLiVtpKaKDAuHxsJDn77pa6UjsiX4BDVNn2MjHTCmZ7Y59NXwqhu3mHSN9teKnP3aNRW2Z7Sg",
  "key23": "61J7EQYCfbskv8GPRkqf3PHJRaP3sRG91XpY92MQPrLFnzhiRBtiyFWHAo9usSWKiPcbFqaRZPQc7z9b77Wp3a3j",
  "key24": "3VrBjcG9EJ7CT6qG3L7vsqA266LbZfaB4TLfSPSJkgwfZ4CFNXZR5XyD4WWghMR1kbx6nujExPkSfzG6aH7gegRH"
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
