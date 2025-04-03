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
    "5F6TkjjAJcgzccMYhdqZcEVB3BKHpKmtoQtNBqFFYWeogiZ2dEjYRsmLZpTwuEeMoLrts44Pg35sFEkymHMHHABJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YrwjTd3ufrUKSmiGtqq3N4qrtyQvJPUhHK2WjAJehhM21DaEh68SKce6sHsJLYbfyhhBJtdofx6p4E1TrCHVEhM",
  "key1": "fTrKvg89HYRTQeFsT13z685dVz76h4cb93jmYqLeEwznk3LYv25BDEwPmz163cHp51un8tVvRQv2ajEPGMetwUa",
  "key2": "4t5D6aVdaMCaGqf7Qg7DkutSFXRYisLQo5yUKopEKj4FmWyihAbP4gEGEnm9hZAVp2SSbdzvmtC9npynSqfCdqGz",
  "key3": "2QubcLgUTYmixNvoVZHeNxKqQwmCqNFpcBhAeaQzvbdhawfjj3mmyMWKjs3QgBVAvofBe2CHgojfCgnAaD2qBoCV",
  "key4": "jftZx2qVYJMKx1N5ziP5p2eABhjPNbesYbZetZhXAWMUfx48FSXMy1v951SgU7ev351q8AqxwCauL5kP7dkfDrD",
  "key5": "5BKwwYFEKeGkzYwaQEanMvwR7YRSHdVQHaZKQTXxA87aYBU22eB1D2RgeRY8cwbdk5FdHg1ANrt134AqTASgsAVR",
  "key6": "3cWCRVcWFH3trYAi76nvsXGKPb2jSbMnCke3igTs7dWwt5cvMF8pyVXsEZyc6Niq7s8yU6y5pFzGQvVFWna1K7xy",
  "key7": "imE9C5swpoUuWPgRwNCtfjajdbc2k32XwhwsW1Xvrti8NACCdEFjDNLpjaMaDT9G6ubmoETvKutEnyM9MFihfNP",
  "key8": "i44u6BZ6DiUTZq4rrKjtdqAiC2qjr9mgQFupSWX4pJaGRSWtXqGmvAqrNZL1odvWYcaBRy2aLGSdrTCQJgc3cPU",
  "key9": "32WXC1rej5eycmNtcbSNaJSPsZ6CRQ43uo5szDVR1VBWYmbPuY8csSYxT4po16LPGHix9ZAtw7AH3zoTrRhRedss",
  "key10": "JyRhma5trEYBjcFDW8mbgyasSowbyjvc3DByRt6i6DoBP4AimJ2UyMcAjSV3CNQGafatXk23YyNzx9zaisARb2N",
  "key11": "5BSm661VjDjmSwSTrRdRLCwEM6HWuwgLJ5C3VfTwgvUSrGADRaXC1pNWchzVD3eWi6GptuxhjKHff29pqaabeCSX",
  "key12": "4fNoNL8nbNKAuFfNp8oSWbkiCCX1yS6537w8KK7djfUXRFvdTBdmWHzb85vx5fxRuJpSxECaViQhmWicNPgWRfAc",
  "key13": "65dkKd4TXBwtpSr3arvS47AdfpoRW2xetXbQuhfWJejvDvcyTR3RiwXxUqyzBiu3aEND9GKo3DYjS1YK7BDDTTx6",
  "key14": "4WNphF9J8ezhEfyRSNjyNiVc1pkMBoauNd4AHHnPEZt7YjdgJ4x6kWM99cGCZzkQujB8Wu9x5ts4kTsZBiXSUFhA",
  "key15": "2GMo57MJ2Gm4QBNTNUTU9RXB5Lk8ktyypsBGau1hPBcG4J35dM76psEUX3kUrTYdPKjVveZQgjKX88APdFgJEDzM",
  "key16": "43BXVRpoEtpnktywtYthcEviGVbt11RxhfL8sdUKnGWbUPbGc7JzLk2bGFWRgkPfLsvX6Q6HmSchTtSLZ6hANcW9",
  "key17": "2Ski7JRAfiHRGLv3Hzb5RW2rNQjrPM7EzVdJ4KGd3GVKyH2QbH5BAhwRQx4mGjkw8fpz2quwXCVDQLakjFBGS6Yj",
  "key18": "4bSiX5XFZqcgKrKExKNhofU3o9tibDdp2NvJ71venDXMTXcDxTa65JtVAsZmABeMaSwQZ3f1yUQmrEB8zSnADsEP",
  "key19": "2wRyMhAWUSaMrGGHCWBXTyWfKewiMhQ1BX1pwE4jVU9gda8EvrxG6HnstjJkW2pVkSxRiw8pcVZYMGyUZHPZUqaW",
  "key20": "2z2WR8sDQBoC9jMVFuf7Z6rwyNnSSWzFDz2gfbSDrcNzRapdsJLPkKvYQEVWwt2fTSmuBk24TudNXemxQthgvKey",
  "key21": "66M6Qg67m9JGNr5SHXjqFKMQD9m3UbHv337JsXKvKdJjmSNv5aCmf2vRiQFSGRHH1VhjyRmgkwLVjJbqP7QQ3iw3",
  "key22": "kAvFXAMhCE2ekoVrYdWbbja4u6HUxX1EofWFzEHZqQxaeQQfthMHnzM27k5MPJcN2kijSA64B5JnVt8qdNq85hz",
  "key23": "5zxLj6n8cN1731bGLF4mMNsEhdxjBxXnmM6uCbzy3EjuZn9qcQd3xsGg48oadyAMqFRAqmqyYGr2tPF2h5ZjV8fZ",
  "key24": "5cmdhDAHhnys2S5zh6ASr8bX5he6L4AD9VvXvD2BXuD4FurJPNfseQBpkZrrwU8Nr2NT3xUUALdfZT8pR3V6VGD7",
  "key25": "4xkzso1eTSrrP3yqkNhamTACfw3gS5NK49ZtjhWQRoXMpKXiWLnPdAiSMoGxbw7R2WEzMyfhkKuTfyvG7yqF6URJ"
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
