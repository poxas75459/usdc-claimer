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
    "65Hr81C1sLME1QrBMzgokjmvVtmR9W2XoxrJ4iXHqiTZK8DYLXJBsxmreE74BTM5GyJopMgQdrhkQGFevrZni7tY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wzXYRYocRkMeZMg5xe4ohP33iqtGyDS3h8twLrLvjfray66oWrxsTfwQntePsEDbR2xc14kN5STgFph4aMf439y",
  "key1": "XYGXjFHFGjbMkULzqyuhw9eym18ju1VZLMsDZ7KhcHAx9MiG7Q6EnBp4txU2Znge6zpPg3XbTpeSUYkmsMVZ23s",
  "key2": "2jG15gsKqNWwBFgmP9f2Uezg4YEfxoCUrRmdKPtE64vBjCv5WmTCfcjg9ygmZr5CPNkaPyNSQbRBYCXbs86gftWn",
  "key3": "pdnHRpU1B1QvmU8G6qXZsc7G5iKckvrVpDr2nPidzVdXLnv6U9PZAXhHgutpWpvcaJCVV7s95NcyQgJzg4VCXVb",
  "key4": "4t3bb3NqcjCQUroTfsXvCMT8izHgHDVMZ1BRCsiwzkXLwcv1bctp7xjpVNBj9UZoHBYFgGyspUtrNY22pZoA4J8N",
  "key5": "55cPfTz1tbArVukcsp2gFKFmJDR8L5hZ1vomkEKGC4vhAduXKKbxQXmPv92jhdSyLZ5u7dxeS1mqFjKXTEobxCMC",
  "key6": "bi2Ze3agNRGtQm2NTho5JszD5BocjA7BQKFsEoc1T9kgCKAEjXMB4A94fxncgdethSy7CPwc7BNiQR67F4rsvLe",
  "key7": "4C8oJBWWrC6x9yYtRXSLbCDGHkjSK4S5n6a4eS6deKVuTkXKURe1EKJ9bUjpKWybR6yDhrgaywLEtf3TGTaoycyY",
  "key8": "5p65Pcr9NmqH9vThoiVyFQ4LjvVxhv4zwizK42TtTPybnYvh3DRTr54p3z13cdKACo2EBi7vJE3nJUNLPS8F9EjV",
  "key9": "35VvDMrVK4p7JveiDZLGeouNtBsrge2mEt5d3juES78u1w3wSFfyzfoBhEF6qCid8ycSptKGyzz19jmmZxmQsWPX",
  "key10": "5ixkxxNoZA2xKEih2Bxxj1UVRvxuMtnvEdNdetw9PumSzEoYWZRQ1Vbq13wov7dzPpnpVUGnmPvJtZqTMLGA9hgk",
  "key11": "3N1qZ1xNaMLyU8fZzMo7Ya22wru9eKScBxmLgBkDU3CjisBxAEgriM6fsn1b5vVRdXguX8iAjzDj8abJSEUhg95A",
  "key12": "66UJhxN3vuVJrKm9GWUBqqLHdcsfqUPNdEWqdwECY6epnLpfwvwaxbtwHzztvp1Jvs4jKEaS66grBagy7MHH1aMU",
  "key13": "3ibgu5A777oAXJnSWSUBciYYiZxbaNNWKx54JQvGfQtxzrhzvU1etzqUzj3Eu2JYsNz4Kgys8ysiVEsHSjAHnk5n",
  "key14": "3cNUtcmbJLiwJmVZZAhEvkVPCnmfqQjM1LdeJAuE5gT3MsBzsv2Qzu93emsdqmPESQxEZMGSZsWzzCj6cAuahsqH",
  "key15": "FX3Wvh6s9qae3ojS18eizKV3eRm9gnXStckKQ3vLTEys3azAfbXyMJsj1is2RgYKpvApBjBrr9S6WKNmXNHyi3f",
  "key16": "3FSXrnijipu4dLSDPUFk2vXNk9Fm3oMJXUeRmjj4opTXHZVTk5rWgitWLNGnKGvmz2pBEWV5hw9B92yJEJ5soUaJ",
  "key17": "3KJhbNAu2LthrAigQqYHzhecEEyeqhwm5neWzdoGLVGsYWw3KAusW639vGBTGZhRFsrDQs8Zv5gXwGYd9tSKrizY",
  "key18": "2ojH1rd6yFHjntRhmH94zBja8QpbHazU6a1YNbNBP1ELEmLVBYD5JXi3SxVWpnENkuZHywid97WoSYBeymH7Qzam",
  "key19": "4QnvCQwhrC1jj8SmpJvhExJuq8XBJ5HB1cwfQrHdbqHv5Eo9gDbe6uAn61i8CkYEkpwECbzGspn28eGtWu5T68km",
  "key20": "3LtRi6ZUKH6qVy9njvMNuCY8WurSNtB7n11E1XYFvE6J5YquvwZ6gfBsT1QWAYJpVvh2thEcT9mnQqLaeu1kE9Ka",
  "key21": "5yUQNXmBUKo64ixKrQpxzCssuSpN3htLhavDUrPBbYvjfKiLNRYyNJVbDegwPu4Zi8n57i8EjmqLXK6998AVqCfT",
  "key22": "3DQXi6krpPEXdk2noTseaXceuwHJ5XPLT7QRTbEChoR35WpeqXVezKxVXHJNB6zfuofqAVFBg9tUz455DAmEDY6y",
  "key23": "5Ex6RSPmc3eoU3omE8T8pkPHj7u4GCT8AK6fLrRTMvCxfnBR26iscrXE1iPE3fffCBxwaAzP4iuVQmngEDtYi9yh",
  "key24": "5vjUyCaxBAkbSHJ1NkrJrfQvjoeEQMu48G3emjeNRDu7Ri6BLVMDGixrTNL49PMymTkBcjhMdMHs2R7G6X5ctMas",
  "key25": "2SVEctShn2VLYbo2HHtEVBHtYz1ZSEQxFQNPHVUsEDNT1XsrPL53banxTr3K2ddCSVrojorSedwmGkvSuDeJ9Rmz",
  "key26": "5kiCnuS4DNiUtL9aUeiAjkXYNMwRxCDRDb2gK9qFfvCnocDoX4rpHPf6hJ54fdnY88xEXkQGqz46G13gY4CFSPZz"
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
