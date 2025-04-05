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
    "3A7KqfSDuA47w5mMR6SGJ8tmTDeWGjFmDozibozi3uGq7dn7W638DdGjs2kyUb5gKgY6qcFYwtZ7nwYxe81LPkfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y9zjLGE6ivrpacdffiKsauft8tQ789umHSNzbAZDtKER1bKyZ4j6GTSVeAnzvcjPLdGmKWESfuF9UmdLfd86DNL",
  "key1": "wPwiVPccYVmyUaxLdw1aiuceHjzPCxCagx1YLbtF732GHMHCnfX4QUVDpt9fZJyHdJdo2pmA32CnM4RiGH8tkHq",
  "key2": "23zk288BVYwjcXvKakjSo5SDegrquTGjZyajn7KSzcrAyxYNhXNYUyLxFPAuwhYF6Qg2Sms2pstuPxPpFJiz6DTa",
  "key3": "mNgsKJgbRJX5UVpXj9b77bb2KBad1ty4Zo3xYvf4NESbBtipKsT1Kj946Bi42wzpkzP8ZMZJ7jYW1Ko9b5dZpnG",
  "key4": "5Z95YZnka2Jze4jDsxeFmymhpSjdSKAYmZUBGfQjyhQudVHTrVq26c6Y1xSAgQSty2muDu7xRDyW9Emh7mJiuqf7",
  "key5": "3ofQqQot394drKpk9o8NUBzhhKdr4RFFCEmtPCx4Z2CQaadPiraj3RCSyuYZ5BsS6HK4gapMfFTKgztPe1Wz9Wpc",
  "key6": "3uTtDxVF41C65RopceYtu9fNcpeheSsu8gJqLc6H5Hq46jYKEu1GWdmEXJfdeSfSWhQcEgku3ykRjwrqDVNm9nPP",
  "key7": "3q9R73qeN7yUZsfkpnwzSMyQAgRvraMmYoWxcsyWavEuUcQokngEXiFTLdfEJYcSxJrU313a41BnYjHTXQc6NveZ",
  "key8": "2M7TXKNxWMpkD8xQvwUAiNYCxZGogZtChnZZzbYckKkNnEjShvNLjGrRZuVuRE2Ng79Co65nXWsES4KF1ABr2DGx",
  "key9": "5Aq8roXKk2d4zGwDrrr6qW82ck3NV1ZU81LWL7sU1JUBKqyzRZS1b4uaB4P51mtA6BPMr9QbDmVhLf4JBsgvsp4T",
  "key10": "3pw4unHNRmzPknMRRywAnXKH5ww2V7DHhJBxw2sas7o9htEBDcusgQbP17jXxhAFNVbuKjzStmZ8kCyAR14DETtT",
  "key11": "2L9K3UqjebEvUhK81LH9GkFjvRX6UYCsrBgLHT5ZCtCLxEADi4nNXYLHchCiKFMX5KUD54VsK6BQZAFYy5uWVGsv",
  "key12": "5zpzyuDzPnaBQNuEFc38KwubB9iBqCsLkxgsBGUEQPooD6hBf2V8oUHQ7pQW762TELd3TfCYdJKBTZEEHJ6S1yxN",
  "key13": "4PFg4BzaFtEGLJ9tcZwXzKTbNH6NeDVn4UzCNdXJ2A8TGGrSnkxTgNcxTCYcBGvkTyVCdADg8Q2YEx8E52hTtbnZ",
  "key14": "5qPAhnXss2xQPhZA95U58M9ffbmwNydrULxbAcfSnsFP86MdvNtLw6eonUiaBN9A5nz19xx1rALVGMdZVasuJVoC",
  "key15": "4BZbuPgLboNEcomJiP674oTQJTQegJ7tKU8CwFwZ4Uz1sPTcUbsCVmTVTVszftdqNojxrXTUwxrRFBQzrafHPQSD",
  "key16": "4z9CHgPie9ZTuanV31y5RVjHLKF1UMRiV3HcP5YWBCwPHEegtLdLdYVE3wM62HpBXNkAyHaJaornCwkqayYsS1Z4",
  "key17": "JgwiKLiAnx5HtgXpN9468WcbLG8Tx6Dby5JXXSzia4PyLc9PHe8vrMf3vBX3XvXpEitM1yRtrJDaAwRmduDS4Ex",
  "key18": "ANdyS8cDrtrpGjGomRPseJ5mpGvgABYZf6Wdtt2cmQy84NHJD9RDBSWHx7Bv4s2PwFfx1XW3yvDrQ4CHaSZYBVZ",
  "key19": "sfjvBtKafs5VhWs58TnNBc28p4By8aBQMS2xvZLcmrLvih8pzo79Aj6nZxqyWie1xeJEH3sqoiHhGy2yK1kdQJe",
  "key20": "2cQoxC8Ye5kiNFzd4K4VcF55CBjCgwWJ3ehWH4tQWvRDvJTMiN7C5dm4pWehjFwgsXNDQtvbMaYLLDusprvQ1y5",
  "key21": "4axDtzN3gabeSTwWeKk9gVazW1v6nkCdKojWDSNh3RjkcaF3WsdWAbNUWhX2PWFhpj6EZ6SKdMdXK5dQZ45DRU3W",
  "key22": "5aDhTC31hEKrkpEzwsgk3G6X7DYk1aBKruBdF6HwhXxdqMy4qKzqHHXsZ1FmZHGuFhN5XfXwD4xFK389E85WyewE",
  "key23": "338etR54KDqp9QqDLF9DF76bXgjESPMS62moKWKRYGCWFAk9KkXR7RZrU9BJq5dchLN5RpkeekS1GcRUDkJxfVdr",
  "key24": "1E2Ug97itkukwRtWBPWFRbUknVxs1mNXFXSXiweyNn8E6Ykbu9amXdfxweHjBMurkAErRjQrcAWKXmTRtpRH6rY",
  "key25": "hRDPcAFP3DLmPRnUsCvoqYfhYRsXtFCKQq31GMi4nuJTTUgxvzt1wJMHzKEaT3cqUBf5wnhn8M8kx2QrEjX2zCH",
  "key26": "3q8tPQdFPQ823joxaYejHMzqkaRHKd98krHJTtZVkdm2BEcPmMhydJNHYxYyvr73NnmxzaBdgtnUoo5aA3pDbJb5",
  "key27": "5WnQCWELqXtHMUiYHvLeRnegeLRZ2Y3uGWM6njp8H8vp8EFjRnixsezRGJqyQGpsYrKRxS9ChNBSFon95ShK6Xuw",
  "key28": "4nDh6xa4PPc5BwVRFecHxcJASZWgN5TEWjmeLM5tZWjQWJFB6BDuTovGaWcGZmtLUp2YrpP9cwwozThdkmtmbUEA"
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
