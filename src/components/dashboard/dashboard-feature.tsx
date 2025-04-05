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
    "3emyphvpyHkMW2Xwuh8s2xCHdMCb1eb31YBa4Za14rCJeQvWjhAuUQD3HULs3q6Dozm63Cw8kR2ZH9STcKCxBWDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dk3kHvu7HfP65eFHVjqFu1Xp1UE1bm9SwMgALedR7cu6dBAWsh2pTqjEJd2phk9HnXnweRoAnS5hopwjKAq96hE",
  "key1": "3nHpmLxxobGsR4Xee95kNPUAMxJDmEZ4AzWwmMFAtNsPutrZnMczMLvCjDwhmoS1B3DkkabRYS7LUHuKxDfYhFFU",
  "key2": "2N1WLDGf8CPVqnnHWsSe5qPiKA5kufXbnoKgP5wLfwQgEYwMJpC52EhhemjeasRgQroNtRoTSHsU7Jx9FgXX699",
  "key3": "4p9PUFzeHTAYT6ogzv2YE4PcF1Zr8QshWdVEga2geTz423YCp4ATG95126ugaaJVd6WKj6kdwEJqBRAgb2ADpFwT",
  "key4": "TPHmXKrbmP5t9foTfJ8cSZhkaYtnNJLu6TfFNhxoRXvKEA4xuaPSdJsu4GL2Rp7XwePzEjjf4XK5zXvcKVpKM9D",
  "key5": "pGYWTReeBzHnW7UkvBARK8UQVxzTSxH8KvH4LZLLPqP4qV7X4raEicSxF3QsoYBUMyUMUfa6MxkucSwxqRhtUzU",
  "key6": "pfwxDJpoQgKMb3PDn45THL9KJbSPqM3AL3KMAFVc7C55xApKrGsZfDG2u8feJA8Gg16dh3L7iXxR2fmtz4L8aRP",
  "key7": "4LFRpp6daYWzrzauASEgJcXtMYva4RqEhhvx6XXnEyEEGymRnWuTFW69fdTEGPY7pzNc4fejBKKkN8JJCV7snB1d",
  "key8": "7PmtBvceqVRaDt8vRSo7bJKucGAByoG66a5JjoBezn2iGgZNXpBBRCban35GYSezzt6yrAEdB3Fk25fhFpLbjee",
  "key9": "2DivXitDuyeb9a3Z8ogvMe8coHyRA1URzkq5KTmbrVwAvpgZo9Y7SgQ3n27ywuuwxQNDKJd4p8X9h4yN2i2iix2c",
  "key10": "Jk3gtKvJECzwtXXpzwLyfb8ZYQQctX2E6CyXpyrf9ivfhbBG2eaR1ZMwCt7nZuECozQs4z6CnhcH3j1wrdXicbW",
  "key11": "4TRacA9xBsC1wNxRzTG1xthzwoZgK9XVLanvTstUaCeMfjmoHz3ERB2earQCAQuEZ85fbUS9eoJCLmkBqu1nSRfg",
  "key12": "3hd999urjwKr5Nfyg4g5kUHRYFELkE475sAjiEgAC2Jo4JJZU7k4CJghaXH3HpRXdmG3TYSrRemnYn2tws9CJscd",
  "key13": "wn9UxLAFs2BGVhUGLTQxDtuErnR7FSfctXi2ikZSJ97PbZSFLBZdhUFpvDmb49PT93MJnLV9USbDWrCKFmPXJin",
  "key14": "4aBX3Eg5Y4FEVJtZZJDnEmG29W4Tk4aR9RJZnCtHf4WjfKoR2hCB62zGPWHvhNdjM65PjrTR3ByrzPbZrvKQmiME",
  "key15": "3N7DdrJZGBuJKzgCRbWQXV8fZirbaoHun1XhgAhDq21tptugFU2hF5w4F5hyTGRFhzCMLcbbauRsauaH7nSTyvjW",
  "key16": "4e1W9Rt9WcBiBQUpqnqNvtBWiuzN8ysAeQJ6fvAdTC4eAUP4hMh4zoUSjCdYuZdWReEMqmLvYkW5S7DuXsaWHxK",
  "key17": "AAL8txoQrj2hnSNj1hdfWes6gbmz9e5wHxnaic6UTHsuYqvLV41haTB4hV1xdZrMNnPCihuWpekzWVdgmC2gRWB",
  "key18": "2t7FhCeeXQDsADYUGydwUiHnR1kNj8yNvJUzJ57kLEGCL3ae5ExApxnNw1earE8MNqZJ5rY6vtX78ArtTZuTvD72",
  "key19": "3jL927UKtQhyrfqbqJyeTzyv9FUAnzrAREX3hfKMWgq1oK7vSVKuaRiXhfMDBKnZN9mRdNns99Tx3igK6c5W4DUo",
  "key20": "5c9j1h7juDhekY7bLQjGQrR1gUXvodYARsRUzCeioGw376iP7kRoewXZ1Axf2B58CXMTEaVRS7cEKK1jnXBmcbpW",
  "key21": "2nseVEqkSCPPkSYvwBjGXxTfMG8QLqjmcB5HrWD2zAdj2aRPMurjtPPMStajeFYAtZHB5p5y78iqk7MJCik9vg86",
  "key22": "5ovP2hD76e375Tk5t6ef9ie9CKEmEhKGBCfHVyiTH5rzuh2V2osnDuBBoGW5qEE1Fdf3KWbKubDiNRYHkbkeuEi8",
  "key23": "9Fo2PWwmkvkd5PXSom2JETa5j1nATrYUJZgoq7ainJdN2RyzdFDAHMZ3WMiLFDkemovLZpDXFUGsri4unG4M4jP",
  "key24": "2AiQr7d99kRQktE3Nw5TYU7mgLRo5C3fBuwYhCULbtuBx86aq6ECLaBjiD74MDfpXRwXEUNsMuXRypsLvW8v8zRa",
  "key25": "3WqmcxvPddj6zK75mjcrXHyv4h33QPMBLp7xQjnjCeHJj6jkbP9ZAsL5pqczTtCjqSrSh3cYGaJGEWdJ5CX2PzPZ",
  "key26": "k6FK2w56FYfmtgqLH1sjMyAzqiq2ZNDesEWvGUPf8BL7TEV1eyHAyzb2hU6eCTKkCCfPf2QxeuNMpmSDHRmSWzT",
  "key27": "SYwrroxcG5VC4ktC2YNujno8eHCSVtB35r88FikV8ZZcaiT8GKcUxbQ1KDdBNxDVWevVzWC5pn3jvBk7EHtom2z",
  "key28": "5iEkS63nPg2ExQn4SkRX8Q7sSGWdUWwq41mGRHvvrpUyaSnUyQHdfm4mJY3dYK45xaWD3dN8d5x5ds2P7MRtcMre",
  "key29": "azVyjm2NF7WWBZNqkys1GCagSk3TUvFVmyCacdpNanne9QfvmLuQpBYAM8VKQsmGfCtjo6wLKHCxjW1kUqmg9z1"
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
