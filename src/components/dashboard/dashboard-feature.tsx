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
    "2evWTn2kHAGuMiu6WcvWEt3jEYxZfcANhibLsYLqqXEKHDZMYgHBNuQvJpEcRQGWqziwtQ2JVoWLsRyATYWEFxsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31om12uWjwMMUZrrYBU2VAuja4tAwVgKSvNP77p2jNpkzFSUUrUDtkUbB9c9Ris5jHLyUVkZ4SYHNT3KnXboubu3",
  "key1": "dmgNY5aMZH5rEbTrB3KgHEL4nZGzFA4vkpD1fm32GUaHSu6yvbWFP6ENVdRaGADGZRxfWojxXFdqs3N8Czsy4MK",
  "key2": "KXWh93VEZJRc8pEcUNT5LZDs9birmUrfqPX8LCs1cQxAfVrB31Mwb2WNqvJ95zYseRjDHjNJaAos1yx9c7UvhVF",
  "key3": "oThDLaF6Uu2DM7CBSe1FE6GLtxhrWMrfC4duNQ2F19FcmMdJrtF6Ndb4HEjTqUwzNJGa4UwkfaeD1PDvzW2Aw69",
  "key4": "3nsoF92mYw2VFEGkT16yzBugwwZG4eo1CuTQsB7HYhKRcY8meM8Cozj3ZLfbAH1AZ9v9ELSZovyc6SgA3xCZwUAe",
  "key5": "3awJbgEpbUWvSa9LZ7miWqBze2LKj69jyFCPKkvLSptaVM6k5k9oParNekKE42usB72Gur6K6ZaKqgBFpvyQns18",
  "key6": "4uKp121wCQPW6gjwScpsevxBPtwPsVWqupJsVU1HYj7EpEEqywPQLndy6SmCBnZPSmWJQNicErUC2RnfvxVSHUVm",
  "key7": "5qLFzSXRpiFrh9v5Q39zwFnMtfp58mkYzMYGG9TDofCmFyAw58fYLbuyHKDDkSpBLr5awh8DSBbaFRjhnVjZnrnm",
  "key8": "3b7qF98HPRebzMt77rLczQf5ioJC33sLxugGH2ecMUMpk2P2SRLajbPqttY4cB3aDwe4ZZTgJvRr3LreNvvZ7DHh",
  "key9": "5v2RJUNeHxPreKgGV7D1x4XRi1acYF2QjRmUfdqdG2feNFL6PEedZDMC9FhoTMy6eqzV3vSdtm5YcJym6u9MNZF4",
  "key10": "3ByogXuBTTAGWbsNXYCMSc4yTBJL6LbwzodENPCT6sYH72aCvoTeqhYTEZpYQ7Ri6r3QC3mThV1m6juJdDQcaMxA",
  "key11": "4sk22pUHhufb5MC7kwD8xPARfmQapg1PXoEniMDPiT4V2SNxjpsJ8fvfb2TRvkgNUB217h2xdfU5xDNu9FNF7oVo",
  "key12": "37DiEqDff4fJwfLmDj7Hxuz7CkSFhUq8rJfzBLoQuSyKxp15FWCgTqW7cs7xCyEekuFtPQw9FvfBdxENA2UicNCJ",
  "key13": "GtsGfUvmBWPBNkv3VoWETRLp2ybfqFc1Lxvmn6FUBqTkZZyg2ZFqpWs5VGJSz16K7rqU48XcSAA2JiQ5SpZddu9",
  "key14": "4TYVFkeJv7UXDtB3tBtYTE1rf3ParWv4hHnAkr6kmnuHFzLwXuBQ4kpMt89riUr7GCWQXqxXPQPKcij4iYhpsBSP",
  "key15": "2oUHAmX7H8o6sAQp1apwQiNNhMjkhUToUprNTv3gxK6tnZasmWGSkNQr2fGnh7zyBEV1EDKPrthe19cYutrWwRTx",
  "key16": "4T6VvZ4n6mFq2R4NsDDEzpzKjvpqqR2t7NmgQbQQqQPGnvo9hm4gj3J2r9EGwK9NPq3uuBw87hconW4H2Dguv5Hk",
  "key17": "XsixSMvvqjNFuKYM34rd3WvsbnDE66aRoFykaZf98LQtvnyBDL5vd7XfR5zfR5JFXRhhRJp7U21e1XoN3x66y5k",
  "key18": "616MWxrKa3yj9qm5Mcy3E9MD8SCAbmfAk9Bio3ZcDzouRtPAciFFpRUiP2xioE2MRyf5GUw9XJcuZeKm9cGQeD18",
  "key19": "5ephJojasFRm43JThFGU2W42bu61iHSrpRkzYH7KyY6FsK7JzMA2oUauzXnXFgLv7L5mMhLFYte375pGR56qXH4B",
  "key20": "5tPqySyxyER98u3PFaa1uFsFt9rdPyj8F8AYpmrpyVrwKjUgASeMTEjAPRKcv5CHKQGS1uXn82Rsf5RpcUtGDWZb",
  "key21": "66FBp3hGq5hKcSN6WCPofH18bbmE4Fd1QySkTkkF2qjrNaMr5dKnwmPewkZkU5Zb6rPsuxKiPwqdV8XvkkxfupFP",
  "key22": "3UfroLuJzUHtmKMVxKZ9Dhg8dtn33RxRHHA9f4yPcccWvcBU5zS6noU6k4SK9egxH23huVkdZmzoLVrZVaGiq8iZ",
  "key23": "zgvgpQ5J73HEy9qvKHTpMhxWonuB6VxNDLPGwcC3n8X8tD7vCK7DGJAtgPLntkiMEC129jg3ZoHzPN9CSkc3j2W",
  "key24": "3CPgLmQUegrK4arz398trmwbYzbdUcfVz6V5Z53KhM8ZZxS6anQTUM7uzTURGveP77457TKrTeyQ5EJF6JwMH7XB",
  "key25": "57QJhtfWaNKEWRPeMYjhhQE7yEWfd4bkSBNqxdzrHAhmAKdtqvTNDrxiCJYmy2dZTxVo5LbuB6NvxgXoEnx5MAHD",
  "key26": "5GRdFoXL5MH9Xzv7kMuQHJxBmZp4wfdgqnugQk6XwYH9qHF8EaoFqBwEGhcBWFFJNcD2E2ReDhHpuEuUVemJuCop",
  "key27": "NHPQpQAeMdTSz4VmVeuXZWvLd9yYoExKwShqFPhsXX77MnDU62mQfo2HHjAiesKJrQZM6WGarmc65uM7otfdpxU"
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
