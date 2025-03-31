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
    "4eENDGqMje6hKmQyHvgCbqKgLAR345NRXey85fqaPgtkfUYacKqCuueRFSwdgJBFbgtFfPmVbwCVNccxPXRaHN9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h7N85sB53seTKRp6sjFKpmwHPGPzxtoV8NNkEJsPzZoJQu84KXJdgEm73p2mKAarZNLU2Ts7F7wpsWpuFUgLZ8S",
  "key1": "2dNcvuuUPgexEdmb2VGad1o6XhEVPEWTW9eyGTjPn6qUXgARzAxC6uNGjLcPYrUd9WkKXHP8yZB3R4v23JruFAzg",
  "key2": "DgM959uVTyZWTgC428SidimvsdfTz3iGC9Qzmyfvu2FGPVLEs6RnoVpkhfi6oAP7H7eDWfvVvX4cS8fBV33Nd7D",
  "key3": "4Q17U7A4TCkNY257B9L49GuKeH36adzw57yHtEBRugk5fKUrozwyJgh7GfzikdqHoqvdrZ4yuBoR8v5psfD3eGM2",
  "key4": "4VJffJzQdorcMDPTbpjHD8PQREupP9ScF2qbxiqw97oW1fHjAC7ZwY1SvD7XuNPhYE6JUpyFnHchURuwGgsGKpiP",
  "key5": "tepkE1UfUyrPBGeHdSN2SSnPUGxmtmJgGPcacQzzRMtU93VdkM8iNWQqA9ESV2em8Kbm7WkoXV2AMNEsxp79SUL",
  "key6": "2DkZEu3Vr1gKV31s8RWJ4jiTDEsQNYQa5V5PresFFGtNZfum3SesMDmbg75QZjCy7bhs6hiC2GULzjCMga4mENh7",
  "key7": "7rAh8F84ZWE7sUyqa8SZgjSCeCGatRAEpsFD2z6CM9pDo1D7qi6Rp5xcF83jaX3JyFnBqoybo15p5mKFRqQ9Gpb",
  "key8": "5BAGQ4kHSB4fym9KDfcDkEDYKXTodT6og1rGXtgr7EvSibfCrFiG7yt9XumNEnPrxQdcMrBzCDDsmzzhGsUyp6fK",
  "key9": "4mDnhmUnowu18GL4z7hL53mFSFhHJ5eTKgpYrZBEyP72cWpaksb1uc4H99xVgcfM7VUNz7uUu5Gmvr97zgU14qBn",
  "key10": "or8CTUvkAWVNEC9tpMKZzfQLE6ZJPKdCCoEX5NiWtTG5REc1gLJxf3na7WDYid4qfogp4AepM5Gi3eTn56cXhnd",
  "key11": "4wDzVrgiRsQnix9fPbkRBnrDzq35V7X8NuoS3rTcQoQCzRsju6fw9wncVBfTni3vmw9QkFU66sEJpGVrfnjMsW84",
  "key12": "pwnCk3oFx8UL5bNDPi6GwmLEvXcBoYrMyt9WAnAg4sXiYRcfAfa3DhZNe9VnuBVPkkYENLDk7G1S71FRpEKimiu",
  "key13": "5gzvdEdiE2bef8DPXncxXebeykdP3oKs3uGhYHBDjAGBJNoacTpn1sFZSc7yPepEjoAwnhPNFk5xuppNvRa9nPi5",
  "key14": "mRGinZtkAZJTwGjkVHbGNAWW1hi6MqSefkHZqSqMWPuyLsNfHrCCdgbnspjTsspMoms4U5MoqcUjDhdtnpqR6gu",
  "key15": "2NcgNFxmvpqNbsdxGdUtpAe1wUZVie4UBUw8Fp3sueEVbDPoBHw3RCzLLzx1bHkgbFcrKZENZMbMYfVAEnwyU9xu",
  "key16": "3fXXPMBgMWvwXKbrjnrz1vh9GYXLhTTXbnPzH8Qm5g9U6jEXFEfiZfxSx5Rnen9LD2uS98fXVP3V58Tsashd7XZh",
  "key17": "5LueqQHjBdafUokPd1DYQFPPuiMC4dqnxi3VFKzAWCF7H4A2tnnNUws8tZjX4NKoLyjNsaAhw8NEu63JGzx9fFj2",
  "key18": "5MDPJ2zta97cGJPrvNsKb2tRW3uBHnvVCxXs3TNipJTgkjfiNMmYSUKJKuuEWauKo54BPu95zrV7SBFJmxmrHXzb",
  "key19": "5MgcSSG3vkagmB2G3UZiXjDPdEQMBuqV3AE6EXTFGxCKiutTt96MwwSpndU2BHVjZxQdnvj5NSUkLS45TTWAkFkD",
  "key20": "51dAopxEYB8GX8eWFjduvBxaDRZD6jucQrkwYpCKtGf2SvuVXMaaRRZbud5jgcrxockkLKPaaSiwEwLSTgjQ7Hb",
  "key21": "639nkn4pcsiozMK6ZtTXaR91hBTSwXFGsfUZHAZRMjyqS7Jdfg8W1THwqwhGPuVSTGt9zFeZPfiPq8CK2k3Y3SYw",
  "key22": "xu8nd63zKKPnYhtWJEdyrMhW8nHKGGzonrbxr2nBEdzxEsaZd2Murn9s9jeJKzABDc7eDhc2skihayKVJLcb2gf",
  "key23": "UemTex1ucg8pfnJDvX8dM7ri4hkBQesDC21gPzL1uAJZm9X1A6CS8oC9PX7EHVsuaRAJAp654Xeka9wMAj2Sdod",
  "key24": "3U6dUkgMFf4dY9CmCJei4UiY2XMtKcoFQLNMhoyBPi3d8VH8KxyoL2rqQdSKn1cBjUwrN5HKCs3jmoQV3SJ4WBZS",
  "key25": "29BWrdNuLWd945CjaFoneLzrWCMgYnk6Q5LKrzAuCeBtWhTFZ79gLhVB6KJircbi7cniigzFYeTENTmPCEuCxqPs",
  "key26": "8XQXg8DKx7yoa6J8ScZdjBrjMGNssrjBLUdjHjJqvdiPaXtcMkU8XVzMTrmFCABKGKctaKkdu8A2DNLpajFZF5v",
  "key27": "5CakmRTzDkE3Bv9VZkP1Ujky8SjQxfGVjuNLcsdZifiri8LraPKszuNfmSNE881TKPe6xxn7RgvFW65w4VJbJtsw",
  "key28": "2pHGFPUBST6usR9hXEJj4KWT1tVbQhcZXxo2adoqAB2Q5kZsZUb6WzUsGjvBWWCv929BomUYTY1146p8biEQrE9k",
  "key29": "3nmkELbVbddFpqsk6DUQiXSLs7mmDYZfhnt6y8Y1MVSrZ5Fi2LHuyhKYCyNZbgPrXaiizc9JDPgLTq5hBk4RvhGN",
  "key30": "5RWcnLSggpeNRf9nfwWySuCP3haKQo8zae2WbRx5hiU6GUu5DLNcWAfXy3BDfP2ieBAruFGSgttcE1gR9zvsZK3h"
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
