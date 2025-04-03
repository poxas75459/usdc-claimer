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
    "Tft5B41BP1itPqtnG3XW2FhLNBC5Yq4yg2QrukLCTSdgKRD2ULXBFRTjiuEuSXFeWsQxmUy7piCknRWZMSyEtMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xara2oNcKfPTVfPR3aUzA9sM26qJHwsmCVnyp2RQgBAbux9vnWu7wA3cYtDfgnC6rLxFoGzb3ZsqKhKbu2GRq1R",
  "key1": "2uUBCTdENJNSm2YjAFNfivxARSdvCcsjXDPhj4Kf8c7bQn7ZMebGnzzzCVyTbfRPYURke49jgNTkPCi2vkTkvA4o",
  "key2": "sUsFVWauatsKZyLb4jaT8D128y17B95Cqqge58FNFDRmqb1WMd6YaHapNXi7h1vPANzXNgpHU7mXPG3CdBc55FK",
  "key3": "5BASPJ3KUtTSWwbmayxWhMjU29e8VGo9RqttbthPpiaC6hFonD874Ux5EEjFZ5b8VpRq5X3pcf4qQm7ixVQa7tcG",
  "key4": "hNQ6g7CKSLR9wK2aHzsLkjSZiEpYxGnJrVBKjabtyYbKYjoW8S8Aph7eCH6KkJrRzPkvXJjrezNrEASE2DPM3Qc",
  "key5": "31x2PL8KVeAQ2Vd2BHPSUK6eAcFF2HSScZDNFoT5zmhTwhss4qesgtMVHkePtp7XxmcMKE4va9N2RdkEWyxNjk24",
  "key6": "3WEA1MVZ5NvPNKNvj13p37XwzEmAbcoTi8oFYk4ZLbfox9DF84UCiZT9ayMTyrPJHrj5KbXiYJoKcJiZtq6PNu3K",
  "key7": "3JibXPj8fFmuL3gPAZvyTM173Yf7VEnnoe7ECzSuXUjHTcLbfvE4zQfuxQ6UGzCEh4hnP2mRQb6piNkSGPKMYHZY",
  "key8": "5jkY7SpnRnPfbR433k4A1A5wdYqH7KfJuseT8LdsqVkfHp2uvHHuo4W2Ncn48AbQrhCVnvd72Mx1ThUJZKLRYfSH",
  "key9": "5foRTJMNkTjdmxKsHBWvfbK8HZ4ciB6S3PPAZxcR3mL8kAHq8tkQpdBcG2d9NYBqG9jvCPYL8xsZpHqm2Y5ddWy4",
  "key10": "5vWCVURwkbDxweVJGBZq4oAuM4Ei6kajcV7F5LUWotyHcSHMGF31voR3TXRHgnCyThqdtqDidWAP5fkAoMxNJjrc",
  "key11": "3mRjfF6DHhoWBVAkmR3vPRFsLTasXCXhJD64vziEVKAjTchQnFyZshtmJcUAs9vbZw2Fwckc8uffnQJKVdgCATPp",
  "key12": "376Yrr6FyrNx9NNAz612Y779ypBVS3kEbpjR71MzwD2hAyun4GaPG1iavcP7Y8QPzEYCPvHQHbttjPtTvFb3MVpr",
  "key13": "4uqpDH35stTVvCdrAukVncrZNNYZ7dGH84eBkpdD4xir4wxUY2c79ECFLXNkLjxonL9NGTJjE6pWdiDsBh5ysrVw",
  "key14": "47qNaBmLPHFBhnQnGhe5AW6hqnb8im9Vg46FaNBTSyajaVs9bW3n6SDPwYzwmNxUVnVSY88G4m7R2tq5ZrxedkaN",
  "key15": "5voNMT3wdcHMuj6t5Jyi7LUyhB7uVtjFjX7HQNue3mTEv6cG9LMAiCDJ8S8Bx3gCkqdtFLqpFaVN4MZnenTJa5Cj",
  "key16": "4dkS3dbUKoCUrMUTrhaWJLKmbKryS6c26xaKZuMo94x7WCmESA4VWx17kVKCRNX6PCGPmR8eZZoxcLTcU3uL5pKh",
  "key17": "3rW3cLs5k7bkTFqzuHdXbqJjzJAteH5yK3orHT5yikS3PWTN2y7jK1A4sNH76eb3viHR4ZpzYfYQnaQVHRt26enZ",
  "key18": "2HxvWAxkR5vhvMcu7nSzAeBBfWyBgfyaUPwNrBrEPs6vZtLxAPCr6AiVQqFAGGPqTMSiAkZXqK5TEbeWmX1rnTZT",
  "key19": "4xmqN2weSmTZzE1V6F5e8vQ4TA7APBdE4evpCZExpcDPqJVHk9GcPMwnLtHL6wGQ8HzTcfnKgUvJ6EWLC8KEWXhJ",
  "key20": "5KA153AMsRJrXMsPZW6ebiNDotbvCV8DZQpwXxZvMtEdvGafmbJx4wieSsUPZ6UnExkUixdbvE9QWcYGEHe9LdGY",
  "key21": "M3tt6B33euGPQAnRmEZiUkNPedf7YruCKa8J4Xb4YY6XSxukpi59qnhtBaA1uwdBJ9Ez3V31jh8AEk41Y3sz4t4",
  "key22": "3QuiTwDKAEVHMohE3452mZdZ7eEyefUgp4PQRwqTnm9xYyn5eaFm9K4vQV4BZnh4h6BCz9GNAMmJLBNpkDxu4zU1",
  "key23": "2p2P5JCW1ZqVBHGJF4SbuFqTyyk4jhpieyehzjEdtct8jRBizMrV88dA5FVAYEWvBr1JLadqoWo2WTrYh4uYUSk2",
  "key24": "5sqDVN7oYN7qdb6SJyVtkfr9jUYqvNuPwf3AjsZwBapSBSJRJchpDX7Wcdh8detBQuvh2JMqFrAkQDVRYdJUJZK8",
  "key25": "2GWngXjnQWjZM2b1ZoX9asL3g5HcXqZRE9bjBq9Wnetim6sJ78v7yQrPbTDVQbLyLV8DWGgkx3zgYShQs1wZZRzm",
  "key26": "5U872YjLXg9dJU11EYX9BrHUZbkK6kGUYi1V5wfRozbZGDRox3wzgXzGky7nJ8fN9WKJrZ5kNQXxAaMtjX5M17UF",
  "key27": "2JVte7C2fCwBJG51mbqGmtxqWou88A7zyrumNpeFgeXjM8SY77npN8Ad7f8h5wGM2YezK7jBvaiJ3PVfak5NJSRr",
  "key28": "5UtyY7UGvTsnCfmCQHEerWoMDabFGEcuK6aLrhxBeRsaciapkAjFsM5GuBXkf1UCA611iyMBt2wgD7tp15XXMePD",
  "key29": "qrF9wrGGmz7JGJSxoQH1bQWjG1RH86frvF1Fx8apX24JgpWPhKDPsEFz9eD6ZCiu2tNfvyNKWiaoWUmfc7vrHWo",
  "key30": "K9yoCfTL4AYAMeHXnnJfto8RmU2gdz9TkY5ru4zNujYcRjx3Q512hUPP1xLhxTFVDYDZvLV4HGisg2aAZUhvRED",
  "key31": "4gx68dUmmAxEVLSd6nFEYM67gjPAGLccKFuatR2muhNQNn62hGWcX257MpRyRwnd5oSJdWAyjzVqCeQZuseYLkva"
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
