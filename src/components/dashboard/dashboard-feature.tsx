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
    "2P81b4TegVGtJHqTynDJZk2DazJNKCo8dYzmVeZJ33FYDKxYcZR8dA8QbCFd3r4MugihqZfAHoCdyUi3Hc4E1hMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "562ZVfhK5GSAXuZSeugmcQMzNgWTzR7X31PAyQ83LKhv4sPdmnsGteX2wKx6a9zwEkZuCwRjJ51hrwH2FiZWfsXV",
  "key1": "3BaoJwarJbnF5cyA87A1GSMVbNMXgUPH1Pa37kUZYFEUpUS5DMA2Qy98o34pimtvvBz4okitXZtcoGoUAS5ph8b8",
  "key2": "4aEFTohvc679N3kvGdKztC9CKVADN4owuuYTzN6SP4mMnmtzVh2N56DeNzaXsaZCoiqJ671YPHogcCWLGe6Bz5Ss",
  "key3": "4bNyFxfJkfT3AxZwJjZMbQKGmiM1XYW761sLpYVrmMjGrzMWFdghXC3xMKRy6oXX4Z2NHS3jbPSndwiHqz2Po2Hf",
  "key4": "5Bfeb1h563MNKSkCugeWystgELpqrGcEfvqUuCF5TqSMPgoqm9vTnbCy2WMhzso14XTDAWi42nYNk1seC5JEHnJ5",
  "key5": "5FkpMfbwH5MgMVASZ1Sm1gHnWQ39n12roSJBYQmcidKJudk9E5B13oAaa1fhb7LmvrWqTA1mRmFAxJ59X6B8zgKS",
  "key6": "9kni8eWokx55DzKAghbcVZGFBHhbPCX2LuAjsrWUGn6BvEqrKYLe2xosWjEu4ZijDNErggRQJ2p1pfciSvktWBz",
  "key7": "4jaoNvdqMJmmsXhMR4mfHpprdXDVYhnEbCgsEbE5nojAa4WzbeRdnrZKEXwG4DatHWg3SZ8DHKTCDDNzdXzs9uuF",
  "key8": "48AjTQgbG1Ecj6bqnVGHXq4D9aMetHSgzHawYyjHZpR45XYcyAAjiVXDrmHhGNu75yPJz5ENLm6rPZykxBNbafHt",
  "key9": "PXFW3e5fk8heXLNDWGdN35dc3uHSiyn9SWwcLJtXa2jUSqUZoZPgBADbbfbhhPvzQGXrodvvKiMbHkDy5Jhsyzs",
  "key10": "4pbFzx3ajfXjYBkpbgRxhDrq51ccSJ8JrGJVFqBegw4Tz9XSPPD9RiNxSj4j2thosjEkFpFzxsTa4nsWe61bVSHk",
  "key11": "ba93mVELfevQ3Dh8fLL2SV3dNV8RwfiVqU9SK6sjczq3BkHxXUMSbpFdbPjUoCdJqmwmfVqEsehPsdUEStWgPZu",
  "key12": "5inYjYnLY1nx4vFQjzwsh2cKuWE9AJqGqFdpL9GdE9CHnh3Y4d8cH7gwQk3JaYCJQNvqEpSQSKMVBrFLz62zKWqm",
  "key13": "5YaoXkraTK6WCH2tMaqpmxpvB4gf45BdgpdPPFMotLLj4HxfRDsFzpY3HFDmUvUg2A8VDxHt7AzmvfJUQJMmVkCU",
  "key14": "27oftmdgt7xpFT5nP6ofzo9htSa1QMxt8HXJXnw5ZhRFtZujF9Z2uJKzmGrS53NwcT7evCDWF73MGigq2jTTUBVq",
  "key15": "2jmWDejU7h3TpppnAeTgdT5TksBq7KofFV53bqKGm4aAoL7czBWNDWHPTZNisoRUh3dEuTEvr9BqyCRyfKfUc3eo",
  "key16": "2J72hYXB1fXPdvGUgvPqNdkzoED2PHWAxGXRvfqFNMVrrDoVXEwc39TLPvJJAMt28NtiZiXFh2WGTNBxzSvrvbpX",
  "key17": "2w6cUfjodwPzSt68JfAAgFeuGmZcsemYuk5ris82fTW3WockZCutKhKdxE1fuUH3PnXHR6BEhn3z9uoajJHeaK3E",
  "key18": "5YinQwsDSRejV9nyYZ8rCasVWcvQJEZS1y2KX2JeyURPUtSqnKMMn874gpmXuyqNHKTeobYgtbx1HNXVMbSzLF3y",
  "key19": "6u8KbBjtV751ZfwmXDKwe1nipYAACfSMiaGm2XWbqWHapoATXGJP2TxxPNBkp14UYhkL8dMjSKnuewEZJsBVhGi",
  "key20": "YyGp3Bv7YbkAL9kihvepibHpRHGn2WjFu3eDtCfBEzpsXaed4pLBSyJAH1xD59k5mkD1rdzHYyPk9mx5tHqpFEw",
  "key21": "rxvarLAbiFZMdcNfo9wBwjvV6pZ9i37sjw3Aq3kBJJAgEMgtWWYSpPKPzdkMpgKbxiuy8wtiT7VtsAZAmJkTVjA",
  "key22": "4YyEs9ivCVw15cmCeaVtBZ4YFHgMEaQAuTpmU1sAh7RNjHxWKD4RnDNGZM9CcworByaSUUthDgpMgteAeFJcE7MV",
  "key23": "61DiYUXPTNKBot3DMFtZPMV8gPqtEZmFvLYw9cZT1xofiW2o2nCa4av7mdNZknZeCXvV9janFBC3eDF1skRgXzsK",
  "key24": "3h4LSrZZeW7TJvMkwzRtcCTc3A6pcCogo3QbrQsdhFiKkzUfEC5bNCghprRTNfN68QjvoD124vFbeZXMViXK7AFP",
  "key25": "35WiTkPfDSUUQYttyKdkTvSHzWPceTHooCufmYq1XWmCAaCjU2UNy8YnrMNxyYYJJFakthwhNbT4DBk3hVVozfgX",
  "key26": "5BrV7Ta4kKtNbEkPwoi2gsUXNN69U6E1cv46bv69WVetmYV3svHEK35idLZEFjUX4nRn3Pyv3xXv64QqZRH8uHN9"
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
