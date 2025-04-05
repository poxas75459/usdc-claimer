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
    "XRg9SPA7jAmuvZ5uHgvfXvwo1UxMatR7TYzAzK3cdpToPwJh8PDGJr1hxyMCwyVusS1Dzntode5aHb5Kcyj5Exy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KDUR1yMMjXN4v7gaJFaNbB22H9fsQAibVWukPoW4yxHDc8BfCrGHtapFqzCxtQqutH65ZjxPmpr2yJzP9qE85uW",
  "key1": "5kjLsLV9adw1q2gsGsPTPH1XH7gMLvLBGpL4nA4LCtJmu5zB5ycVow9VJ6SqAFqPLMnCs4ThMUE9FrHPtY4Sge6o",
  "key2": "2qL9zbBxQq9769PuY8EbWo8g2VgPK5zZqDJhp7dmCyLbB5tuCMhH4Yba6THfcUBDfPH8RMyxiXKEgVGbWJoE5waV",
  "key3": "4hGfGz9b8AhVJs7rZZW3N2ZrmBtzXN5BP1JWqUhn1Te5UnVGr6A7epZBTD6hqT1zDmj6tDo37jsXJMPxhPwHiYMD",
  "key4": "3Ezo3tKQ4SMdnWs3R7kBV3s23Hus3etEnZLFACvSCuvPVWGXCGLDCBZMd4V4p249Ziu5FvXHmvHCKe9n9MHNZdjc",
  "key5": "3K73dM2MWxxBHMQuNwmadQjawNGfCCFbev18dtUAjQY81ZtCfdkRbufkD8QHP53yvf24Jb246Fe1QPnStorhas4D",
  "key6": "4xtsGjYvWPvWSsyapLnAc3jZbA5PuePfRLQPBy9iQ2WCdqTedeJJj4MRpnSsR8chuHXNJjsHH2v6bievKdJgcewm",
  "key7": "51t2ncQ1F8wizmGK4oCoUaaxV9DbN22apwrVaE82fUbgxKUvHpFgD9ZmUM3i3K7jyfsnVDo8sYAwxJS97TkFiVPP",
  "key8": "4UnVfTcmtJVCgCmkxJJHjvNyp4McY7E43WsZfu8y9vvucJLuskXrpexgLnqL9iCjxLFgxUbViyKjmbPm6LwXQ2q3",
  "key9": "122veuvTR8MtHmw7usw2GHZjCiptA5Ro3mgsGvNEFzQt5CWnbPMui2q41kULKs6frdsEfGMgYDFFbdzGV6hWEzMy",
  "key10": "5Pg1PiUS9EnYypbHg3AEeho6AhfRxyjCEL9is7spvTG9fX5PdMe4hRTFGxakgBKQq5pmxGcnwGTPEd6LtSiw6D5G",
  "key11": "4xMeqyUbmquRWcx9DpKygn9qE5qZmRqgXeU8LoaLBezuHnx1b96pP7Jg3Yue381U56LqdagcSV1RpPXDPkeiYZhN",
  "key12": "3heMU5wewceZhjd9ZWmnNz2tTgAGZ8cHEwnNKwQ5b9grceKTU5XbtiXQPnKnQFRGKFrnKrWdCGSzSA4iKUBYySyt",
  "key13": "35rM53miQLhtruPL6C3kq9BFxAcTdQvqwpPWDH7u2KxrQp3Esz2dJGwbr5JvRJJd45An6odHUxp8XCX6d7cCBwhY",
  "key14": "4brqxo35ZuUnfHwmcPL7YnrzwryQkVQUtRX4RgMwqY9jcySwCGscdAEmzoTwYxEo1EbmeGTPLq4kuYnyvqLHZcZA",
  "key15": "hFSA1dnyPvG9TBFT3RzdTe5HxCaHvFKrk87sDU3Gg8N3CNuYKFpExm79ovhBD217D6RoMqM2x3VhobNSjoUdDKn",
  "key16": "PXn5mLeu3Ldek827Aw6PxfBuyqRDoU2fgptFqkh4jzg7z7sryf7RmerZqf7RnMCZZ1vvYAzAnk9URLKy3BbgKst",
  "key17": "35c1WS8LfQntmF3YJFGc6i7CC4GYUJxLCWv7gijGVcZKTxGP7cnBq9h4hkf6exwhBUfue8yF2YqjmBPtS9c4GE2M",
  "key18": "3AQbY2Bu52h1ZBjea7BebFDQ5Rj86YUVFYCBzeupRhcFzvQkW9DSKHs5TeM97T9CB1Dk6kghPYTVZesJmrUbFKFf",
  "key19": "24iAS8BXzXW1KPVp7vnnsUQrCX6rfJ6NsAnf31iY9nxjmbfWg9qv5NcAWrbNiVqXVadTHy3wg8oGSZNJ6YxVFw6J",
  "key20": "Vf9byRNkwiHatHXi9Qbc8Q2u3wEKoNEHnLm67faex3Rosq19SH3zU9ZTij3KA18xsnA7PcBwaz6rHQnnbN91pQ5",
  "key21": "3rcdReuo4ghQWTT8NLGR2ojA4HBZb16hNDeqfctoREv6s5stboHVxKD3h72EM1h9NkbmdJtzE9DBSpijbTxZkz6B",
  "key22": "2JLea3s9WEgrVQZMFyohHaEU2PZHiAdey7tXqmoKmqyuMryyTsqvXCaB73wPsfrhLVFEAYvMcHpBcuxUCnXkPAS7",
  "key23": "2Yiv1pbWTpgcrSTch7hhnZnZsVLGNtaHpQNuS73JvPovS5rYezPQ4whKHAyhv2GrkJaP6QTCAvseiGB7MKi5Lcsy",
  "key24": "41b4bYQke1igxGASD5tzPwa7w9hYhCCzMZbD4yU3F1TWxvNkSoZUneN8XVvgTiPrpJc2oaC3hvB2hwPFL2jbLmKr",
  "key25": "5Bd4meyrP8RfBBnTvm8H2avKrvFMr9RuBTp5zGsdqPy4yx7Scbt3E3rZqQK7SABn7NXe3C4ZLLCXzctRmU2pw5Ws",
  "key26": "3nbFq7wnJZRbmenwQfhYXqMwCrE78dBoF5qY2LWpwrLrT7hycov2iag6iUZHhgWGGrqtvAmTTHpPtFFUYd7tD1pj",
  "key27": "xn93yo99qVoQMDfdcGycCaGX73eTRxxoqv2zKuKTs9JcNZtmgrYm3gyxfMVY7LGSE3QPehnrtUc78gAf8zqXwcN",
  "key28": "55p52QXDj9Y65wQrxJ7yV5bnweT9F8n9aP4q6V16hk6tzCqrEGHmTj6oLajgpC7dt53hXdbaJNU2qegEyHJdKACn",
  "key29": "5guc5Vd65drGG8LUcunCkBBfeUsDPpFqajJZhJTx7CTVrdNjkjxpwNMumf4fCaG87EFREgmunvqepVw93BDj5C4e",
  "key30": "RKHG2yVNkCZLcNCmwBNd4TMtL8UEoWBLcAuinGVuvydYofQtnf3YAi3Je3nsdrsAuZoV9u3rF351DmCQikJ72br",
  "key31": "4FvDxBfG8u1rmuzEypueVMk9EaRsAizG55Qjj7PDftEvpbh67XGDynx2CTVb8HtAPthk5nNe1z9vsCeGq4qQj45h",
  "key32": "tNK3xL5svrwSaJMoycMHUyqpACMX6ksKrdxYyCkEZmV65gFLbrGQLZ46eHsdKd7vM1wHk3HYtoJ79ivucVBhjni",
  "key33": "2Y5JRGjM6z9wMBoVk5548mGX1r55fJqWFNEXwTLvBXwNHxrK5kxcZGUM1Afyyo6ePhNAaAvAVJxQb8jo67X6XLM5",
  "key34": "4kE6jRGixRAbBV887he2rLMVJTLUitJbNKpHNjswTkyuKzH2ax8tsarT7vqG2F54v6BLAK7dFupQYCxjt6kCYeH4",
  "key35": "3YshZYSLTmBfAEPERhC2Tgr8xXghsVRcpAkkzxvzeoVKWPWcZKDHrC6NPJEbby2BFQQC6LEcYUoPnSgGnjc81SbG",
  "key36": "3yc3o6o5Yxwioxd4Woi3UPsR2MkSWiENY7qeVrhSx6D313i5xFhyGXShtcxvzGAUSYB2Q9o89FDQAcrxvff7HmxY",
  "key37": "4LdAufVBCEu2M1nBDMR8DVUpsR4PChhqj2N9JVchSaumSZEv1mFx1afGp2QT92hMC51ngwJuTM3CSd1d8eGUGe5q",
  "key38": "5HQzVzKQvTMKBZLBwaY7Dvt2v2VY8KAYH88i7aahC9fgW9hyLqcvvpmDxLguQFLsFk4u5LdUyzwUgouQKLsSubWm",
  "key39": "dcduUTZRGq1BFvqrY1QmQs196As3GWy4g8LnubYaCeJ9QmgqoGcYh4d6jMdeaDX2hvfeuyPhj7mR83HZvXkNWtn",
  "key40": "3Vr7Md4f2hPfQ3KyxC4SETZzu9dzuXdB4QbSDF8SEVvDC9itqzbaZjd2QvWmqFaDjuyq3fHV6289gyEJEQRt8VLV",
  "key41": "36op2fwYq6nDkrht3qdh2Aujt2anEteEAE7occx8U1iYqVwPDKpaGVmAPtpaRdMD7FSrHg72KZwHDVdzb5emvufk",
  "key42": "2FxUgMxMuV3e5c8G74fDnzdreDyDnjD1UF8etRJ2kfiSxbwwcQFyPxjQXpkzUwuKCx6qXoq6PnbjPxF7mTrqgjWs",
  "key43": "GVhcuQxxDFWwDijXn8JfoMS7g9QcGSjZTnESzAPzGxKYtTMkKJrwMNCCjuRw6GJEXo2wqJn7NVYyM8eQZHWrjZo",
  "key44": "3J9Bed5LacbdSQWE1yEvDpKH5aQNXcBA5DUqBoSytVFFVrKmjB1mt7u1h9HDMMheXNCwGeiCnuSFcjiVAtBSEbLw",
  "key45": "3F8vDT4ChLL1JvGNRGkS3vYmYSwrUbvZDQtfzb5drp89uZMFV9qGPkp5zYCRR2TqRNwFDV3VLFMS2KPWNTGqwCzn",
  "key46": "4PYBY7G9MkgHkhfr4ZMJaKjyxipE9zj8svSmXoogw5U2bFyXs7SQvewMhB1cEB4HTFCF1KcjcyN26KzhzpJwCDwS"
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
