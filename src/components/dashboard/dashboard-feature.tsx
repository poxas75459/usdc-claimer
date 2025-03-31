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
    "4kiFGvza3gCxRrbZPe7oQwBwp9pL1SzUc6GbtAa4bn4zFZhjAnFqno5cUNudw5om2LGk1SrjuQEckfc34CA79GeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rSPgAe4ZC5ysDmBEyKTpiAefzWqZr3MdbVipAwH7fTA7gdSLszxk1Qq5FuK7zB8fQKNAtfkrMFMMe9t8rRdn5FM",
  "key1": "4Pyt3ptVuAzeTU37YCQY1hZ31o4G5ZUo4pPeMDc6CiqmJnRUtaCabh5tjbcxhj6KeKCQ7SGSexgSRXFPWRfz9bPq",
  "key2": "4V2QSX822iDHXuNRbCP54k7dVmGRxfaxk8yEwFpBNEaJVCYj3HTVKzzsJcQWgzsxPfZbRNZjkydKhk2cfatbPEMn",
  "key3": "4fbJg67yfhHCEdEN7koehUEUH5cDv3fUi3T3QjKd3D18tyKTAq871oDrTmdhsSrTxTzxZ8YEX3wJjY68eKDLCtYs",
  "key4": "E8w8hU9fYyJfwTE6iFoz3WL7BjuHaA4xsP2kKxe1jLEX4grxWtyGNrETJ5ZcbgeSnyZGQ7hi8QpRCzswJWPLnqS",
  "key5": "62sxZxDkr6Nj6CNg87xJv3L2JCTXaeaYYMUqGMCCroQSAGoYR4wxGFL6hnGoGAaHMMbUm6PCSvFP5rd7psc3a9CU",
  "key6": "5Ndc9JTtLCrBnVgpKwfsfL8aTqVh9ZKojjTV8HgETswm1CvthnWtsufUVZehrmkoUDDRkRLWZC34qwRYJze7PXrG",
  "key7": "2kLYFRr28cVv2LDDkU63xEZuq9qtcGbVEv4MrNwXNp5kok39PRt2KA3LtfpfmEEQob1wsdMfRbRvcjZpjjoAMp4Q",
  "key8": "2vQcBAzqt66ugM8YYqKQpWmhrWU3f9VFbeyiepBKRtRfb7ETQB3wzrjpTqJz4JZYAyk847CgAFU5A6rMuxiRzKMV",
  "key9": "3UFZTGjcxYE2K8suNrnaAmYF9zZhdnzjRAQqM3ooFbuKtMSq4i4kxTB6QyXjn7ckejgWYgrZo4qV2W11oH6pv43A",
  "key10": "4qaCaEqHPUs2e2UtUcrhzcZynuvjd4PHKhFqfQM6rnZ9TtqFbfHEVdG8p2NgGzHwSjssgFw5taz9TSX4S1SRBw2E",
  "key11": "XwcnbKUdbGX9P6rNygdqjET8VPPLppKv4eGBpnML67Z7NSnCjGDBUfQB6qFxv1yk6kwQohZcBsLqYJi2Jqm7edv",
  "key12": "5FGiCjVCmVDFFJGX2cH4woVGUUWGNFo6mbZoHudxi1NCPfRTJxs7s5Ng63nketVjiEKHfXmnBYdwRpzrer8p4x4f",
  "key13": "65h81YDA2Q2AWQAi8hPkhfDLbrr3CCeXA7Dq7XHJyyH9etr4cHEpVX9a773aqPpoS4zJpoAU8HazYGLGHF9ACgNS",
  "key14": "5L3ZAMx2i92uQNdxW1DGySuFdUUA8mnMvBS1uaPWUc3SjJKGGMQb2uRWVYisC77QPaPCQ1gXxzBz8xtt8m38gjht",
  "key15": "5gu8JvbjPy5ft4SfffKPRgP75MrKttaukSTae4wfmeZb9EVfDHHA2w353281FFiyK7TzJhKJw94W24HH5HY4G3aB",
  "key16": "3pi9dhkSA1p5r8yGqrmKgUFtN1QPMrU5UbXZXY3UzZqQrWDn1KA4Rpq7kLLHYGTqFK4bDd3v6qbhZV85bFobPfhn",
  "key17": "3F2ogMMLKHdVHz5FLjBvTSzuA8nVuWqPneGD2vqznK12brPovpSsAqiABFrQ9Uu4Jt8bzB8zy7Z1CJRop1sHMmnQ",
  "key18": "3feYbrcqDP4hVQcekJXPjnNrZYQuKCYf6MqHxsCwPRcvZ9E76m7tC3hTd9FSwVCnCpcD5f5PS5XFMTr3Ro3eNY2s",
  "key19": "rBuM2xudbAzhLTgCyfLvG5zKY5TTJqd24FgkaCvVXRqAUqN3uHPSvums6jFZx3p75yzAweQYDz3dg47H9zrqoAG",
  "key20": "5zcrHNNsW9rysqTEFcYArUZtY9cKJmq4f7TLn7qwmRaAbTVQdsCaio6jkMr6CQt6k7jLKfy62GedhFLyuxWjL2ny",
  "key21": "2EwXbr3zMaGYAU7H9Y1BcpcrWa8rHaR7rQewJ3UEhVPqCEzRB8VkBJJxCwpHhaNFyRe5CVEQycRkt6H3m7eDLgzC",
  "key22": "4g6a5DEYMjXXsCBD1bA6CwNoNafJZGKravSh1vM9g1u5bHw2ReoxovCg5vBhQkakYzbiiXJ2AH8RkWAdDKnqpFJr",
  "key23": "44G6gD1UFzDFgHpBgJXChv24J4wWNFu54SeUDBxugAdhpsEdNVdigazjwCogv6gRT3AiRuTzbKdk9TJxCwAkoFd1",
  "key24": "4bRwhc3ceo5c5D5aVAqKtmovYp4r6GY3ijtt5XVkPXk9shWvN93jyFov64BA5wAejeWPjUsvb1jccw4AM4dyNGf7"
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
