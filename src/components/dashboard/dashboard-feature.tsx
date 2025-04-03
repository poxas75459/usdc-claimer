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
    "41LtBhKexNkwhrWAxA7Vbqa9QcuPSKTV6SW9kkqXBCc492ADHKkrRqY1DNi8j44yPGVKJ34r87w8AhjSbu4z3wzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f3vus6c4WkzmjdD5U6WphGFXBoRXonFYpF7b6P1aq4UWi7kERNYf6KFoY9GPwM4dQewCTRvqk5yTWHEoTXQhUUj",
  "key1": "5tfK9GHLw58rhX7AjRbxfaYhqxF2yjYWLBwWbBDKRDuMec5ommgzSKJJwEypUbULr1bUaa9xsbQLUNXZWY6FHEzA",
  "key2": "4ye6j7P8xpk9pc9awkP6eRe2cDiJxfiKHjmz8q2Vr3gDQwZoT4FnTn67EyBdE3zF88tDMN4z6quG8iFoNFkzWgub",
  "key3": "3UgWsvyhDftwKDgWQa1dFrYo9jxDSEaw2NJ4uFmu2Bn8LvXpNRrqsLaAVmXTkKK68JR3XrnCqxioPCK8TQJoBYm4",
  "key4": "2M7qwiaUEUMsEvLFVnTwTEj8gw5ws4tu51aJTcTAQ4KPaLbEZqCz1HGbcNDEdpyzYYhgkA6zYMte41Vw974fNzfw",
  "key5": "5cz7CDocsKkxq6NhSjwRm9xaffYAsiBuPpSqxPYr9mtSpreFajvnKsC5917xvhsxYdtAXDQRGE1A21CkaaUcrcRF",
  "key6": "2uPPwsaHF3cddWzwu3qcbfRp9ytihg5KYEY8c3DtBhpFznsy6DiR15qHh5H8tsVve2ikzuLCi8dynhnacyPpABfR",
  "key7": "3UGtFA47bUWmw5RRE1SC3tV6U1nmUpyyJyDnHRoBWq8M1Ba2tQWgK623mkfJ6rAuV9W3BbK8GWe4PpCorntzGaDU",
  "key8": "2uQzmwcdXgtKgFWBUqQ58F3pieMYzbD8FWXuyX6ds187uYM34XRagBjvFGkgtQ86RVReKjZsDcAMZfmXd1eHssFk",
  "key9": "3guwzNb2T5BkmqDZx2WwucVvu24gBfwezXVE7NVZACR9sasi2dGK5KekEeymsfCRfA5Py69Rta32L6VCAUcd1rNE",
  "key10": "2QG3aeuWwzZpsUmrm21tvFsKte842GWwUFK7F9w6GgH3GPbHtTnNRmnChLVTeUDoHXcxvJNXhQVX97Ny1tMXr1HT",
  "key11": "4UCJh3tfcic7VRkmMGdaj9w7ExdHHHR7J6aXNf6nqWFTdAxdEQchGrcZurEAjdQCvdybFseQR6WiwzW6ySzS5DMJ",
  "key12": "5kCRbVwZehPgRweFN6DjSVpXtRHP6bXZfsem7ZQSmBkxeZfzdFDxrd6EPJbhdDoEhkL9XqMcfviL8pTTReS6cmVU",
  "key13": "vsixXMWpiqikxGVmgV4UySpMnU6zMoYv9HdoSbSuQbtrbA2P1w7p6UZiT1pG7NqH3wj24ufdJRFb947ajYMfwTL",
  "key14": "3JtZwPUHo54aJRpPMiCxFStUPAf15gxww6ZSiPdVdUU8fapSnmEprjHpZWH5iqbyiDjPSWueBrYZv5oJPsAcve72",
  "key15": "VV8pNse1QHwwb6mBa4DqaVGHhVsyimVKcp78h2DVYtL4JR7LmHuQ14yjFdHCfyJ2urC9Fiz1QH4Je1F61AkJdrE",
  "key16": "4av1iGUcAcEvSKRMa1NXSraVEKteS6vgHCScNrus5eLxACNvTXEVeDSi7KHZFVmSem3wU2Aw7MJTUDdiWQybDX3v",
  "key17": "3rmW4o8ipHTMmoYTZUQgAwcpW5JhotQnK85DhQizMHEVkUDhMHGm8GEYqmKxDwTZ2Eq19upaiEGS5cnC9XUEDU3d",
  "key18": "rmhKS39P39wpq85F8CXMJcEW5RFEsssCSiCfZXuE4Uo3qPFrBfCtr9uALcKSuH2K3yk7LZSfBF7RmUwYjmSYFyV",
  "key19": "4VBTJhboGWZHuz1W39LibxDDohk13e3N746y4WsYrDKUa19eqceydFxxSzbhAe6bVibbucHLQvyGgqKCH5fWHqTn",
  "key20": "7kaVufdLvX7ngR8ZdFkaniBf7ecQiGuXGDvduzZAcLvVE2hqQ2PdzwYPX7wy5udbWheazXi86ntsWezkQULPPUm",
  "key21": "4qVyTA9kvrDuQDhqTAyqEArLK6EUf394wie6RBWdHAEhLYggwoey32Ej2C38WWAs1zAAX14oduHuYV1YQ1kgs5KN",
  "key22": "62iCT6GUMJyGSy7LxqgCjfecoFchsogBbvP8Cz6LkdGPXrrGevUfpxTWgG26hJwqaeKkq96dkJKhXXBXJmcMDtz2",
  "key23": "23tLTnfB8crup4fpoJvyNreChsE7pxDdXXiMS94hcTaBsaPcb5JDABrmbv4JjPLu25JVhjwfnEhrYeSySULruhRF",
  "key24": "4zAbAqyCDAtupiWecQdsRpqrMdvtyoUABhaNuwo5kfpZ27G4Nq2rnxqX5p5mAScXb21eBbjH2wZ6jXNvXAdhoxhq",
  "key25": "3mXnBnFrefKfwvBh7auFC2b6R6TqEEJVwaGqwikv4RbGQdSzAuCeJkdCPADezFhomkh4fRABp8ohdNkbtxBdEmse",
  "key26": "3D8DY91cW3fEcacZJoqQCpegMNKHcUWiZTg7Nzg7CdE8Sma9sGzSCDcCRe5q4qE7fXS6xCeiYNC3K93s4iBe1tgp",
  "key27": "FX9NzZddccZXr5CCTLdq1u3gX7AuGqN4BVJcTbTH6LsyxwGRA8An4e6oGe9NY8Gw5FQ46baKKqryqzw5cqYWJ8y",
  "key28": "48BmQbiVaR8EJriZFcKxs8dUY2mQ7VMx361UZukhnUt12UzPUBisXaahMSH4YuaJC56iVBmffJFC6a5ZQDG7LCjR",
  "key29": "2Nq1867zYrzY2kqaHZCHmFyGtpwN9hgSGtqV3vZFACGhaquEj9pT2TSZTmEyceJ71WxS4y62gjtb89BBS4fRnver",
  "key30": "2QqjRuzsNCkHfWyWFXx9xEmxF9S69FWafM4vxEFnYAnFisoHxw7J7aWLfXcdfFbrdSxNFeaPtPfbdtNW3ZxFg9xb",
  "key31": "4Hst6QvYYKhve69SGrb33dL1wfLx2J5uT3iWbCw8omUtrn8kvUDuvz3HmQvJbCWybUJtpkqiB8aT5LtxBdSB56Sm",
  "key32": "4kHCERU1F2VZtvteBd1rX1ade8A3wVXM43GNrrQ4joVPpQwJJoPiNthALTikzZ5AredKdLEbQnhmvMUwtKwMP9KC",
  "key33": "UJn7kVwHtScJZMmxFHhYj69Nf67HeCnE5mbiunWQVe3WweFNQxfMX3omxejFSc55Vf4s37RJNUANgStKGjbeFtD",
  "key34": "2iVRgivou18CSAAFqduKYmppSTgXx62KJvypj3o7jjYuPAb7WpcM3R1NEPncekioz781pxrsEWPiUeTgY92EqjVR",
  "key35": "A4867SLqvfuobWW8MH6bThMRd9SjRzWwD8uCAGVNuowi411KsJ13KmzThRbobdbK7Pi27dCqqkwRKBbLYmBpz8a",
  "key36": "3cnSbe5acbFJgLJYdsBrqkiqNJsXGCkdp26QckmBR1oxvJSmBd9CTnqmZSX8ewBUJPA5sL6QzpTDfD1JHDFQEJK1"
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
