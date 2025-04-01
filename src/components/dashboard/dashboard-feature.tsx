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
    "2SEeX8EfHU1hsV9XtyXx6Wyc6ETF2oM7wo3nRMxd8bmy7QHG1jtoX6BMm38rVJ3GUA4UMiZDTqgyotoYLqGcrSfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o8hqTb2qTfgDNez4E4hMA9pnsoaC8vDbpZdcHDzyuGedzTBo4az8z3ffbABrMefy4JY4xG1XA3kEMZVaBMbsmQk",
  "key1": "65SBi2pKrS37FVqHsEQEm2poWRgzhXU28zdoMuTC1CPgsHf5HyLJFymjLPLKYgSPAU6MLzrDxpBbWCcPLavHw67A",
  "key2": "k9NZVwKYHYuyACLYyHkHqJAba4cegStk8EtLnw3ZH2mSeKKWKUiYJYAUn7EXLkGz5oiScGfZdGyx6YMUg6SC5dJ",
  "key3": "3RMjj317rk94AN2RfuaLFZPneUjhXcExKNEq9ZwNcqcqVRmpVS6kHzdRoxbM3HAM92nGfSkDXB6TwiCfU2fFFU8m",
  "key4": "3qEbsQL1fPmKi2sXwQJEWB36zJHBMzAEh3BnuSzEyhwQXZgSVMXzS7GyuH9qNrncK4TA3gamx48SDE2caATLe8ab",
  "key5": "4GUcfNaz6mMyQpYizaChPzZfyaGuzfbF4HAcBfBX1SJG7KCC8E2i5VX4q7jSzV9DdwUu4ZEqM5uiCvbumyu9GEow",
  "key6": "56RkDvVNUF7o1veD1xY8ya7JWYKU5h3Q979Bqsg1kCczNEPgynnMu1jYroYXbxb1C7KB16CKWPbDN9q9mRmJQ4h7",
  "key7": "3VWQyJeo5u8mpAJU6CM6ZdJjAKEAZbnLkWBUVFwm2aG6pgeNmgUKhLiv6QQyGpxCptfxLRE5V391TcmpmsgZwKk3",
  "key8": "4juqP8tEf7nAp7yXYvkXMS4iNEVp8peafuseXpV44WnWdnVfFfXXpPy373ErEANhjKV6LNn84MKnRzxeX9PMNvQ5",
  "key9": "4bWovY1NRTdBJmrkZXXipHj3kfdKR8VDF7PF1DXxGnXehN9ui4DU3PdvzJVdp9bSmizV79ANtvHfjdB2DyrwWkiq",
  "key10": "7obqREBbzGNo17f7pVz93ekKGVQLBPsRofqx7fcQwhBFt2tFBQ8Jic8Hj3ZoAStKXqAjndE1iwKscFV9PY4Hz5f",
  "key11": "55Sbjwk8KHggdXSFpJLRibayu5An62duuevgMYMuRTJ3pNrHUgnvjWsJWKBC5VbyzhREfYRstkqntfWUQjK59hZt",
  "key12": "27PjTg3tjYB4UDxrg393gVNMxdsuiPYMvW6iCVjxSA63v3MUUn1vWQ3kL8j3LXavYgv4GrExgMi1tQyafkPPDUGd",
  "key13": "UsqXLdEHXnus5Tm1AgEiwBrfU8mw6guvWq5K4gv5678Z7vjtjvVRKqPE3m4pcwaGSjANv7dG7sFtL1Dhz2fuFQS",
  "key14": "JnXmxGsN5dMTYv7iBWn8MthrH2KmttwaXjjq2NQLdji8uqtVxpLxkaoHFHUDm3nacK8pCZmP392YGB3spEsVrJ8",
  "key15": "3E46YHwT5B2f37mwsxZjds7de7MuZNfvZek536A2P9aEZGNKLFyDf5abtGqtFTgJ3d7TVFajD38BCwnpSfbHb4MZ",
  "key16": "4XyruWKu3Wka7WGUM7wbNXMGosJnwHRWVhFzz8eSn7ds3sWUbRztQEzbnF26VoR3jGd83LVjTZPbpdaC2VaxMBjV",
  "key17": "VsxJseicQzMNbLHKAPhUHPbe4F4sPc7bTVa2xLVATVpi6xqk5yiBBoVcZo3XFr7ku2TAB2jUFUHcPML4WGLfHSt",
  "key18": "3avA3XXGL8fJ5DNx9xqd8jwrjhUbxZ2nAZJ8xEY7gk5Y9zSqGySr5zp1SWkbC7joSvNuujosPkYKvYHMggcr4eXX",
  "key19": "5Bcvqk7UbAzsjG9cSKrwK11nqydjvcVCZnWb9Kqz8MPBRf6McjswEsDqpcstX1Kydav84sLA4mj8Tu9QGEoYszcL",
  "key20": "57GE1pQkk7wN4M6SB5x8pp7hos7PygLdNYihkfqCFfEd6mkiGFwBnzes5VhhqB648dZysTwPoKgqEP7DzFCCNKYm",
  "key21": "cJmr484XBXMu7e8iU6i2YwBXxJLuUJJoL53iunoc6cYCvpsJkjSW84U8aoX8oVE8ELZ787nTSgD4t5QkL8KQctp",
  "key22": "4akBseRRFVELJrupnk7DdMHDzLS4ZJEwCCSJiVUmwQ1RrqU3vHtUYifyHXSsXPuev6LveimBSE1viyvxaegnQE76",
  "key23": "g3F5e2XQ6sg38cbVv39oxj5cZC3hKRxrv5du3Gaz58pFLDksyVpWmiMoNFP7y56TR7hSnqVaUtv89S1yukrCT1t",
  "key24": "2oyusFy1F7W7RdGYS6LhW5MMKtFJq9E9hQcQDbCroJFUe4cNhnQZbYHfEPtFC8ptvFFqnQ7t3ZVskNSeAPStoj8A",
  "key25": "3QuKEf95Y5uysERL1Gb3XAxb3P1BEtaUs8ErMrMA3xR9Q8PugwMwyMSqpDSYsrGUCRnZxLxrigQXNAuEjKKorb2E",
  "key26": "2yMKsfwNwvXrgEiC28dTtUSApgQyD2tpxCybBwGsNWAPeoYcpnArXHzDtKKgRSJ8xrAckjgpbxianU1uWe6rRZr6",
  "key27": "2VyvGo5EzytCih9t2Zbfev61HJJXesjDHHNzvJxj5vkmcGQSYem5gXwZioizHRgSogZ57iCcFZND23TiAYKwWZEC",
  "key28": "277movNwNiAn1wCCAcsCwYvtEQiuYPQHgCwxsnCQZ9riovABrFDuyHTayMASaaZqtNWU3JqELhGvFAf4xyTs1XhK",
  "key29": "2bX4wwftft9Z5m2pZwFausbfETm5qwi4Rsr4ATMGEGCmcnuzxU3oN5KK9u3Ysu9jR8vgMKbTwy4PG43yGAkMckhN",
  "key30": "suPuozQSTjH7uAPFKWQcaA2Y9RCGNngasaLfHQBdFqpn3kj3L52n5vCstEFsiyMkdVXkgmR194BmBHgi74pz4ZQ"
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
