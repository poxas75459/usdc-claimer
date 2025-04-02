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
    "2LLLpFaTveKzvXMtZCtLGauc3xpfoXc6gvC641SRQBGJLtkwphxHdYn7AWYkcFxaAcL9nqiUniQNAUn5QZrQzGss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2modYY6Bo8VjPwzY1cttveeu5AXxGdwM6CN3anqQzHWR6un9LCGsMCFrDjM8ff6yV8XcGnh8QBv2xFZsLAusRG1C",
  "key1": "2mVWv8DxjXrGn4noq2XBbkhWvVRhpWCSrHJ26shxEjY9ULmnFgdUT5DRLSuxBibYrvWD6izvzZ3Je5knA3UfuQkW",
  "key2": "5X3Bon5xeCww3dCmkaqB6kQDfw4ocuvkFeu4YD2NnXDasADQMJEDZVYp9aufjMAg2Gn1cGA6HVLawecWXunXY4c9",
  "key3": "5qNedtW1fZYyGsHJdbvoVGMgHtJqkdqH75Ek7EkkuHUa43975E5rsDmpcTLjj1BD1DgmBwUWEsPMeHWp7UPHuEop",
  "key4": "4T4iYBKrXZZkPTjq36WEyqaC6qmJurfhcy2ueLcaFW22DRJswFmw9a6UKGcgVM69xpNx6ia3U9ZUcmo2nUHbppJi",
  "key5": "4sTm3qRHEi9bcYS6DFMTezSV4iq3YcTrwaKoyGUpVfoxNEyjzoYsp9p8mv5UbFGzLxEMTEhb2ZrjEfF3HnFmts89",
  "key6": "2zfcaoyGRby2EmP7yxW9pdD7NkQqBqCjAKqqZvTUXbv7qW2gnmjxqNJ26FD9NQMXamhRRNyEuzMCgrtccLshY2t5",
  "key7": "2634kNvx1WWy1TjHJoQaNbzq4QFhSt9JvQV3gu6pDGVeTr94NHf2rrfBZ5kvZDHfmwCRSiVEhH4YJgyAenCZ8Unh",
  "key8": "F3wbygC7aTRLs2A74Wgmq4yF8QByTJcvzsNHaottrrxCdbQ2TDTiDhjZiJ3sWhnLT33JEFPKF3vZFUEouA3Q1AY",
  "key9": "5ggtDKa6Pt5SrZzt29WaJj1LveHVzivwRDtYjv7tuxtyNjqm8RTfagPTL9D31Zjj48wCkAFnJGd28z2uU1cmgS3N",
  "key10": "3koDihttYNzdk5Tgng3e5QVKqC6o2Wdt1kHtPHXDi6SB6s5427oZSr8Ye6cRqgTZXYysc6pr6sDjQfasGCsqffTP",
  "key11": "THN25xKTxqFqYEJaBj39adUqPyWrcWSuqhG47CY2CNCvkKUpF7q33jR6We93w3ZgirJ2Nh9fLFSLgY8pwaKcxFB",
  "key12": "23PyQ3EMNuua135a1CCGvpmN8xgTSiEGDKnFHNdKBGnG7nnwT4c5KW82T99geqcjcES9WHqxM2XFMNhyPR1sgCU1",
  "key13": "2dqMvdpFePuMEqZxy5vMWjWqgcky6xtjhELDRMAhGYmeDzYsRmFZD6cJtEhydNxP1BddW3USjrjA3bE2xapExFSq",
  "key14": "2t5adjjNjBSF2ivv3qmVdffo8JBgmSbcEN23wptPfDp2jZhzfm4V1ArjX8spWugUF8wfoGKo8C1AMrfVPtHm42xJ",
  "key15": "2vZiKKuWdnoeyF86oJc6XBYaQQDoN1AJ575KSDiTeDGBPrCVvRmfyCVfp2qXgL3xWdgdQ2u8Pc5WnseStSV27iBJ",
  "key16": "2vAeygTk96RzjCiTm7Kgc19grivVcsa6XEj1XbCyHPQKe4aJgBxd1qds5Bw1XXMJEJigw1SToQDGC6oNn2o7nMQG",
  "key17": "4ajs6x6osnvFXpxWLJmqdL6YAxyDpzPvNQskBF7g5WNYqao6o3dc5tshN43TPw98V3zrsem5uWn47ArN3h1AqR6S",
  "key18": "ZAwnUMy8AEUCaJKB7aMJJ8ZkthJKe2vRCSzSzudKVmP3ZyApDsVrLEXNidQo6EKKdfqixhD6qajRZnmK5mzMGGZ",
  "key19": "3VLdWyiNC5u4r4NTHffArvwvg44ernLHSyxN56FuCxMM8vEKbJkao19Q9Jo2QKE9htmp7hdLjn8nwyKNZiarwu2n",
  "key20": "3DKRmXjRKRGyWiuUMuNvHXZVUE3iGagcxbM8mRWVW5EptfE9Wx86yB3sLc5NCYmdr8K5dEZr22CejS9UMov5p29t",
  "key21": "WdjLeQFv1WcgmFvLncUrXE7FVQtfGyQprwYKfBujbrnxZcgSy4UAa9L7u8zSfeeYEhcUShCug5k7vHted1KcbFz",
  "key22": "5ZexxVAEH7wRquRZA3zE6cwsiLD3TBupJXnPhNyq65P44SpnryFDAPYGKewbXU2hwsjiTukH5Hm1jy2ATAFmireW",
  "key23": "2mG2Dt5EhcLUt1DuAd5BjxTRGVZ7y9GxHAPTuNRH1nFmcgDo51aqd1MpD7ax8eLkzrBtbZwVcpZZBTXa3CxFiy48",
  "key24": "5432i2UuQCYkEhrmgA3CimGFioFtKhkp4Aip4ZTweXaawUr8XzikD3eb6RutvvHsojUc6PbYLKPLGdebXedVqXmK",
  "key25": "DCXPP8xwnqag9iknJMNprjFiq7HZV7NoRULtxipUJ6Fk9qMHEMJ5rrMwjkH9quygaGSw8NGfDhU2Nsu2Ang18zu",
  "key26": "mVi3v9gC8U5b5KS29o9oi5MZqMgpbHtsKyg3L2adZmgXztPpuxgjBU3inrDkQsArf48DULdecwz9SLAJSTC7Kdk",
  "key27": "4XENV5xnRWKuccgz5krvBamivJHimg3hgjBeYnni8j5eyBUYukne5VHKvVPwYMJFcYiwLzHmA9TfR8Ro6crnxRSh",
  "key28": "4TCNmiHin934dawgy3vcMazNP1FRDkpkC2VbJ2qaeTwcvvdm3X9aKUs1x3GQhAYG3mFAuzVCNxPcPPCKZtBzf34C",
  "key29": "QAssFzTTztzM8arcnrRKn5mWfGRmdJ9q6auKiFoJhyCVomx4gfQ5o7mAojQTuDqwRWQtYVYreGrQi8xkK1EAuRA",
  "key30": "5uZ4JcSqWDTqHUiXXjBo5iaTp1LFwDrK9ZePEdxVrZ58pgGFcJVDDDqMdh5sGAGDZ6ngk42VpEL4e6miFYDTDJiF"
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
