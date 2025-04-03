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
    "284DubcxLdvArxdEoHkPJcDRqHJJnYMz5skqkVrcRUP1ViSmXGMEuUjqCxdYtm5FjDgxK2d8sJqTEfd6PNA6a5dV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T5Cja1ezpZz6fazz7R51nuV4nEycVj6891HjrcWzVkTzrSkfoqyUTsw2vXFXniUSk5c6enXEJTaUyfHShwQDcJy",
  "key1": "3WAWfh2JxQaw7LgdJF4GcZp64QbPDNyvt43Aen8SX56iTEYCuLVzr6D4EcehRpYYjK7E9Vd7frMXRBM3z2uXm1Wj",
  "key2": "3dmkmojk2oAWMooPXuPLBAH3mVz5YuRmurqWX3hChrj9iZmEX85TkaFHchdGpKAGMBzgkwLsJbLhV9raPRCUoh7Y",
  "key3": "21iEXCx7b5jhQhZmsLKTfDFedAygtvw1A8r3FWwKQwmVNTm5juWfob1BtABvmBRuQL9UUNo5QmLcZvfNDximMFvN",
  "key4": "64PcSPwfAha6Thood93d56xHdQiLPnAaBcjxDUbc8iKuipDsYRmJ4xBue5odGPUMicv5LAycRDtggSy7JY5yASFi",
  "key5": "zbPBo2N6hg3agYUVfTMtJdTdHc8HcRDaRaqizSXH9Bc5e3JFq1F4uoSyWCaoLpXFcaRhLY3nJW4jg77xFhyRzAQ",
  "key6": "5t4L2Piap8PbYXxTihndwRvQ3jrc5D3a3uK9uiSxNvFDwmvowst79gPt3UeFSEFkoJYiMAP66FaGLmwzWLHN4we3",
  "key7": "KSSyppdydEHqgbCWJRLPgqCFLNkmEYBJVbP9cdYhgjeAPbYf9wSvf5ZdMj5kwCyrKobLBrpy8sdX7Fsuys3QppY",
  "key8": "4py9xgngfMdcRa5aU5nmcBtAEDHTeUstExMTjWQ262dpqbZWJGvG5xMFUm37NmkzJ61TGKPDEk5fYcvXqoSMmE3T",
  "key9": "5x8ozsB5rS1NFtniy4XDj5Tb8my6QPfiHrXeg28V8NToHBw4XwMb3EPbMj75oEGX6M958H1T1pyWbTvtewnbt3Am",
  "key10": "57KP5UmBoovAeaukh7MpN73byZBrjsZikqaanAYT16vgWFfjDdVoBbaX2zNV15m8wa4Ey9BXrSbkdJC4MPnKMYuZ",
  "key11": "xmQJCN9HqNAd8ieCZ1DkQ4yz9gxLWuN3swp6LBwoiqtB3doVzS8neMATYGmrMVPnjFDUvn1JncyQKYwZ919n21M",
  "key12": "9Q6mDXu9qYqu4DyFBSDDWLAF4pqepHDfFLU2KmQzioiWoVhR2PLKpBgdTzhmcsTbDzjsqxehsseNbdRGzDmn3Rd",
  "key13": "373X7XZAbDEyT7ghBvTNCTQCg5EKCrcp2gHP3ToseRTC7ZfCQCKRcRbgVbLGUCJ1CmUbnMGKnvMoqXUn8RbJRtzW",
  "key14": "4tdhce7TJ6DcKBC6HsHWzK9iB1BLxtuQgSADqUS2A1vn3cFNRcZtxhW3ffc3Nd2UcfLerVE7dLruFyFUjvjP1gYH",
  "key15": "65Sep86X39G6miZgjQntLGJiGabYVRJYp72XEmVfnM4Dzzg1KwX1oVmK5S1fKdi3wbScq1t6H3q4ddx3P9PtdkLs",
  "key16": "54arxpZWNuroyQjyf9dZehKJexfRuf3rrsKUHBz6aRS8JTXUc7fXezema81Ys4AVTapAqeFwJfEuzdQKRoki8gwz",
  "key17": "2vxsFaQ9RysfoKpYex3TfhufTTRfff9Z1rJa18eKLC4Pyz8j9uNAkTnGmweCN2Tx5KConxDwK9uhrEQ1Cv2zZ7TU",
  "key18": "5fcYrT6vo7Lc8E4SmYhtvEHrfVt9vcdb8eu9mHa5SFPHSMVpZtntnX1P6NudgP5eCi7grenLkgH54tHPaHnbQe8A",
  "key19": "5KYzyoxokyY1BFmB7tV6Zup2Srxoc6RUFhtu9jgMaEYxab96pbaMf2yR6oJknx8B2DppmE51UwVnN5JyktJKUp4E",
  "key20": "5ycwZEX6pW6kx3rDnUz3XsyLLQGALY2xRUvFR2ixUhaFSv9Fs38QtJdsvRtFW6KBdB3vQf6rfVri3Gqi7NbQuwGM",
  "key21": "62z2quxMbsCZJnsW4dP2UjZGbCkJzV9xxbbuzHTPk8RXSnApJyT1AFv6qa3vjbpQnwvGkARq1hbC8GrJcCA6sLiF",
  "key22": "4iySE5REePANKcXrTcqwLxQtctD1GTPQGV19fMKWE9T8aQgQyDWPDGM4WqHcWG3c5Nn2jUCxCvt6wcetAsZUBPhp",
  "key23": "3b5oEqRes5ifHq1kfgDxPVKDzgmhQAWnfyK2qF55zvGpxe2JwSQinTXCEZkXVLwtX4KUiEfJCT5nz7RDwa43Z6FL",
  "key24": "xxUGtT67tKc9otiM66yUrfeUSWietgyE8rJUWVpJ2HcvWymdGCRkFAJvG2qH9fUEZ5JUjHCdJqqjUGqYz1BWBtH",
  "key25": "3kz1mREYgxFTB9T6hfW7MV6ApJJRnBJmyDVZYwDQJB32VwHFuznN3RY3MZ9hkZcrTZTBHV7rKBZDN5rcf6xQe17h"
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
