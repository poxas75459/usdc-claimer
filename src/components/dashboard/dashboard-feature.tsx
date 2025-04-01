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
    "3P1tWp8NAQWTpQkpuGW2abhdB6E62W3LcBkQzeoWphj6tze6umfXWhetvacUR2j5Cqw4fykfVzVDaAgG4xN2XqU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jvjGhhFnhyirAgedLrK2KvuwoFAusHYJMLEKikQtM5Ke6BJV2uy6n29VpuH7U5oC65cTkWr71RueP3kdJ2e4Y3k",
  "key1": "2bAh6HFc9jWbncXzTFR7DEQ1wdxLSuvcNjKArMgD5uVx3ujq2Ctc2W2eZ4rULamo2zvkcQJuENB3i7ACuSVo63yn",
  "key2": "3A9ViTUSbd7522cAuHqBE8VCJvJhR8aEwf5XEXd5VKH7tF6TX2Mpbkvg9DrusRM9j7XdqmTiCkbyTvb6ZwEU6w7U",
  "key3": "2FcgKq3atXVEG9VMYeDfRxuKGr8PmPYaYfib3xbX33Dirmt4CRxTU9wpR5tiPgrbh9k1Cvh2zMqxqH4y45vHiJN8",
  "key4": "3kFta4U9WKpmJESFPwvgTeaGCuFRXRfmPeaBn9GpqD6GgEGmzYGAPSu1hkcZqaGfUzJaKg9eDvZLMjKKVBLqnLw1",
  "key5": "28PumteSBV8qKLUHqYs9Xw4RtaEGim8eaLZeaNnyg9siC59eFsrdC5N8FXa5fm24s8zKdqK8zdf214zQPyarVDqw",
  "key6": "217bHZ5RAR6HXyTHMWJQxQhfmEqriK8VocbzpDL31d9fSt6bKnX25tmCvmjSydi4bRr69vg7aQJHTZuuKNUM8oCc",
  "key7": "2VrFhyncsi5u4nShzMheNzewGpLgXbsJkd9DdDEyGH2DpHNEXf7GHTmhgvueykj4XV5DP8amtLRCWRhWvHgPN65r",
  "key8": "4Kcv3ZcCQBcZy1AR9rWP4AMw11iJqa4mgceQR7wTWTmMRybGK1GstFcrf9rRVAHZNANWnF3vYVJxoe1D7Ju9GRur",
  "key9": "3zPEYnWU611LYAXce4FnG7uXqnUKiqwkyRHNVCGBCjt5ArVQzLLGGYTJHJCVJuKuUEqg9FQ2fdYkdQ8hJpenFspS",
  "key10": "47NrRpWZkXiehyxAw8Ynrfty7dspraTsdEMbCxKVcypeNjyYs2ZPMHsP2txmXsLe7WQhG3jojid6N5Rj7SbkkH7F",
  "key11": "udu2AEzzZY7Y8A5wnfggUH3ud9K9hMuRWqWTTJ7jB2gykegBXS37cfTq9Qb7LPSPrU9oupbnA68zXZkUky1KciQ",
  "key12": "EaViuLr19GBschbqkvRoR3zdTSZm4Ajqt3TFE94b4TbfgEFSXGrtgi9D9J5TvrBvC7THAEhLQ4JHbtjZhUKp1bv",
  "key13": "2BZkvneaj27aAgt9LdqAU5xU9tTtSdcGJnf6JGqnw83zFV7gSwv1EUa6wpX2gLMcTa9eV9BY2YpRXXAUnCbnAhW4",
  "key14": "38cdqgfaZf3pmjEj2jowYwYsyNwfuumGjZN5SiTafjeN7kEGjZLCcAJHE4LmDPpqAKXkXFqBmDojWoxRwF2A3nn8",
  "key15": "2ec9Mo8XSsHLNrtKWzizkRvbo9K7woqnDvuLYcaZtWAKiB7Bfg2MXfQMm9t5B7SNgCgedWk5bbv2EksFtjfoKBYo",
  "key16": "BC2G4qSuY6LSeXdczdFnJHJvGqf8jaqzY99ABq8uz4amX68NPSGpgGnrt6erR1tVmGkANfq7Jkaz7ixhPehexcH",
  "key17": "54zSk2DfHLEjD5bpWqaYEVeo6EkBinVMyuohkeyBU2zdZSrmWAV29aJvFKEgaT13hShXMj96iZzhKPRMtUyqAfKb",
  "key18": "4zZyHw1eZSRkb9sQohMjygRbdcmiHsELaRTCjCBvXECeytKPcy14URZ2k8927qLGeKf3nSDgBtgLxNQo8MTvfM94",
  "key19": "NiUqhhjYk7iDfPsswaVGjAnv8NPdhCdDv6pGxQi4LSL8qwmKNZirgicLBXYK497vtSUMeZr7373AxD3Fre2xiHC",
  "key20": "3jcU49cwDiZ4jtJtiB8rA2EEbnR4oAG1UVSQrztmLdgwTZp6qepZ5fZSL1zHxVDMLwK9BwEFRAouTHYXPX3KiZbm",
  "key21": "HhAG3W7i5Xd75eFgjShTA7V8LQmUgeCGfWCS2n9WsaFhEhPa3ipmVq2qhHtNhFMBENj3mf7jU8YG9vHeBgRzj5L",
  "key22": "4KySBLgaSVD8wVAVtgHWpgUzECKYRP3WaMSseV7zhL7RT83N6T2UDnB46btrajqHDA9kYkqh1t6kXwhvZxko7Lao",
  "key23": "Hpje6EYiMi8HESNXnoajvbej7CtXGPw8VBLcpLHVfMa5u6UR39N4nVbFGj6U7t2aC9ju7ErfZRk1FYYTdhEt9q9",
  "key24": "AhEeJGaADybSW4T7xmUuMKuZ9aPqF27DKN1Qe3WLBY7cGBwA9ATA1daFoZtC7TFDSKCqPDkqDGy7vYbbCEhUFaa"
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
