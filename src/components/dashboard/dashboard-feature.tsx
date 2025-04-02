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
    "3yeWeHb9rDnGVE2MHu6uFXQdDjG9QsYZEZLR8UFk2J7EBrxauxw9uL2gb7H98tHod37pBmpsiYBVtUAsDbFRjpEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46N7Tudwjx6ByboBrWLhnfjD2aw7W7qvmVfopJKajEeEBvsHY2KfP4fdHknVQm12oLat7QyjEPsHZbsMbRmoaFR8",
  "key1": "2SLejebP7DiXJo7C99umNPwrrMShaG7M7c81Pd727iSCXqnkiUtri8AmxaomUzsRyZmpZ1oSMCYMeEp5mMFuh9KT",
  "key2": "3hv28P4bzFWuJ2qbai31pY9Bs68tyR3CWLu9GEXo7ZVm4ERb132NnfY1sT1UiieXXpFCfxGsqgnneG1nWR7G5dUr",
  "key3": "3tyN2HHJ75vVgNGTQWunheWKnSS3KwKDe7hTcJ7pZ7DsPHA3UaZ77Da3vf2xbGsZanTA69BTK2KDvgwzgw3fdZ28",
  "key4": "671irn8FfbkFgujAdWxD7yUznuXPPzNRxh6iNFVntSMpsPR5CztCgKbfYXkPQHsk8E8b5Ws87zQZs9sAEF6zRrhc",
  "key5": "5Qgn5H2xYgpHUcC4ggGfYykXHKafTzzRcdVpWDLDhmGVxpFXSixMNr31e6smfZXtii4CeGEpwZvkiMbALygMMPzx",
  "key6": "iG5tf8Y5fPDQ3KWRTuX1Bu6TvuA776jko2kYmup1ERWGKgdLxBg12DtKyBUEVk39n2r2m4jTw2WL1ZmXaEixJyp",
  "key7": "5PcyRfieaeyPH1SqYE3JeE49qghSnDku84toZ5xEgfwST8s98HjHioVnA72oX1QC3iD9sSLx7zBmikKpVKwPPJph",
  "key8": "C8n6V4Ky5fw6Yv3oYtj7G2fGDciCEmkNbZCfS4cQgkVxAAUHGRFnSEcMt7SxZEG8idiXbyrU6gce5ZbMoHZkFQc",
  "key9": "4AFLAvk3JmphF7z28rGveSE647JM4khsVA4XvXWYwEibxjB4zTqe7yRQFqVtoGDB7BK8w3yifoXSCrrEWk6Wzr2q",
  "key10": "5myH88z4RRhG8eprLSWLpk4nANYT3QDowDv1XrMSkhYpQJwav64J3L8aDoWTMfCqF8iME7kCF95hwcpHUn21nLfN",
  "key11": "5EvAaMHyk63WX3eFybm4GiJHEmnjmkKpvJR3vYFnL6AB5hpiFtpznJmq5jcqpyQdbX99nyF3UJEdyyL6o1eVipU",
  "key12": "5hiz9Y2gTPHmrMF3etZbjBkD6HmV54ShaXYLtASKCKQKfdarTGCKEYp9ZbDYqzkdXVRZR7U5tnGsYCaUhMatGnYn",
  "key13": "4ys3JHpQ78JdiXacB6Bz6434F7MgbehPDsCEHbXMLURApjnzX8scj7vmqSycV6C9Q8cs37xCC7dg4hNBdVXTcGTQ",
  "key14": "NqkSyJG3AdkrV6J6FDVSJiV2gYpGakjx5ap4WwvvfaFKSTLcbce5hFhstf4qBURCKxR3fLCEeFgtw7kCBhb4NcG",
  "key15": "2VZS8A13uoUb9MYaEfQQJjbsftoq6b2oZ9JRpGADmJ7fDvL1PYHHNLJh1QGiqkKd38JrdrMmjheRmQYKLfXavCEL",
  "key16": "2ZCTJtY3Lb2AbDdpDyFT3uQV9sSQniZM2eJDHgwQZoZEq7CiHfB8a68M4YZ6i9VhXqRF9nz5ZXyDmcnaBZ75KK3n",
  "key17": "5e8TPmqjwn7t8o9aorMH2WSNDaRrGh2UvfFvmNw1NdUNjk2XUNRbmUHo7hMi8w1TkTYsDAcAkRnjfMtJQx6HWEs4",
  "key18": "2XVfUAhrM5AbuaLUm167gWJsbXj98P75YgwPdVVes5TkMnj15Cfjos8ZpdyYubyCKhscU57kGojwY7RBuHGhmGxJ",
  "key19": "31qpiXdtKK14R2Uc9Z4LGhEYpduKQzE8k8FUiPvkY587SW2pYaQ9t4biXCB7XXYXhg2mfCkH8za3mNtBcFJt53hn",
  "key20": "64NRmRGgum5jPmN9DJTVhJBPnieuEJGGSUUh4RDKc4zNWsokyYPPeMgPuGkyASaKZDbKJNVapnKo76J81AdDWhKj",
  "key21": "3GDvV5T92oCTxmo4ZwLfsdBkCQM4oJfVLEwBULn8QuCmrakm8G2639mZ1vL1nwMbsxukqA9r1WxtyssXCrXWEtkn",
  "key22": "49pA3D1Eu7TdeGyGa1C4aFuV7ENAgHCuF2TfkWRXoZqE9Ado6YTV8J8V9g3aLkw9BpUkzxFK9dtZrBZqdfjK2qjj",
  "key23": "3p2wLEmEoc5QiPmJDd8ir1dVLS31McmW8wt9WLcrDZwPeGGrqNZjGx1wMDwbk9gZsehBo2UgMAGzB7xU1a51hLVi",
  "key24": "2mXfPRgWaDCWJKo3efZn1Gxbg5wajvWYRLdpjk9P735GzKifdgTTgBX1f4LoWdfaajfpd8mjZ3hUsRbc6rjFbkqT",
  "key25": "3twz5pdqXWMywoRK35EzsaJ6y2Hp9bWLicgnXVDj5Z6eSBQfjS9NSGZrDdzpyHU6YEQEao5jQZLVdaGtfT5xsEsx",
  "key26": "k7fuAiQ8Niv6gqV4sZgGJ86hoG6U835N5ZJJfatP7bbhdSpMceXmDvsyv96rSLtqfGF8nzYnoKrTKjd1n3FW44i"
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
