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
    "FMmsv5hVvpCG3EYPC3NFJ2zyrCAcbqi51qt7LqVNCCbyfwv6tiMzKPHykEQQm9qs4FtB4MZDe6F9LErzq8k2ViK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KQqxmUwFPsoLR6yZkEeoMMBmPnvjn3hQZukwaNMfqcvcSdF1iMwgxbyjeo8Jtnc1wxyRAm44CHCuZC9wH48BxmD",
  "key1": "2qaY3NJmEUvUgfkzTRyf6EfHgDN8P6aAzvzWWwseVrfXNxK4py4XgcBMHNGikEETAD5BtjiBDJeNiqePYavB6Vs5",
  "key2": "4MWnqMPYHnekP4emRHCiytwgCLcnNoSbmuDE4RPrY1K3BEjjhgpnCJj6MVCfFCKUZfnkQCUt2zebmgiNLuqZz4JD",
  "key3": "2XnQYfr2JiwssRx4waJSWsEjq33dcdqQ4ySCNYogLEZwxNH7hbYr2JdB8fNqTtnYpca1ebdVXXGz1PNFJtqFKqcg",
  "key4": "DFACFeC1Mfjf5xEAXP3RbBaGyQAwgSfW85KXGcxHVzimBbQScpM43Ej4ZH1fygSSw77etZJcPGQGy7rgHc1CPV1",
  "key5": "3Xs7gnfEoZyn1T8xNGg9HNbFVU1eAy2A56QrzAf7mKQNrWhCR5B1ZVguj1eNCbobU3kcHd8LPxrHRZX5kx7kBTVi",
  "key6": "5bbr9Q3xU61c9GGZbi5tM5bkmcXNhWevkUkLvC19cjKA9Moz6FsbMGU9cBJG8V2Hgftr6ixUnUQ8n87CfiwA8GBp",
  "key7": "4GftNHGJSqh96jxWTCNynBjdGxjBTSusf4U9WiA6m17mAH6Kcs7X2dRshr8N2bQBkrerdDvmkDPcxt1oeZjcMcFa",
  "key8": "4Ey1MA6G3SsR4yGr57vzQLDutAH7fMKuGSUtoWv84LqQT62GsvTDRNoWUTyfnv29YuhdPSsLmgssa8JoT5NC416J",
  "key9": "B8xxegLxqVKrzMXmmCGBmJPheAub7XWkwaamxbpK9KnVoQyaZJxJKrbybuEbSCbkLvEYchL9qeg1x9kR8xpTy4j",
  "key10": "GoWc4mHxGiUh7waG9vgmtqj1hReAydgYmatk3yE63h26hg9aYje7gxJTjfomoFAP3HL42MGypzKv9xAh3Y7STh8",
  "key11": "3TtUkS5NoALLk6TRkae6QVWtF9Gguj1cGCbwo2YLvgUxKRoVqjDUs5chtCNLNFYrA7dTYgHmNSd5c1DCMPaWW4hy",
  "key12": "4e77WXjYwo8X85i4go8191GLhTKqTbFBc7JmKrntts7MJGJuxLcZYvejqUBGARhTZHLT9QQrKZ9aGD1j6R3ujVN3",
  "key13": "5MC5rwbyKDgCKTcTAMLpUBn6vT3C19StECEpt2Ppi8WEwgEZji5aqfLf9rDoxPsTrDmQtvX5UeNSYcNYp85Rvipu",
  "key14": "2HmVqRGdMZ9D4htQk5JAostHSr1hH4uVP3gGJzn3Lsi7nCWshCXStXxRJwSVcNr3RGBX4N4GCxVCqsBHq9c3c3xH",
  "key15": "4NUykGoaGZKb6rCAZtt2LyY9Gx3RK2NHvS1QAXMp9WjN7Xh9vnAFosj3JF6RBRsNpdwWyJ2QP2ai9usxUTXfauxj",
  "key16": "NbJWZ2tsnRc4pNzVFjHE7aZASkLkxLEasLSZhvi2XZ6vTgP9gHUDsykcKPYgAh3veuoMWwe4r8Kbe4Nofs2ERai",
  "key17": "3p3n51B4tG4KDJ2x8Hkwu1dkQoeCE3ULEJrht6VLFit2Vfu7EGM8WgqhoSsrrXrHuERoSWf3yVf7A6XgYi7VAf3x",
  "key18": "5JA2NhQSAm9mREtnWE7Ro1GZZDt4XSZ1ygdacYrq6PB4WHVGoiHeMKaFF4Rxk45n3SpQqyiD8StazhzDdr4BMzAw",
  "key19": "46dpKDgWRJktYZvJj4C2hwuU1Zd43XDVMgCJP7eCB2ijb4GibGNCXUZdyDcTxH7aJbg8FhWZuN9UCZ3jSAd5tByF",
  "key20": "4jKC4J5YTF7JWBXwsE1LagBwZ8ScHby5kvNW8Yua8fLegwnqZJZnPMg5PFmG6P6ytyFSxo4sp4tnxRaiYDD1yS8L",
  "key21": "371perQgD1TWuRM6wtJF8N9dGCzPxLBGwJn2ZKgMHGL1ns5CZcyu47fWZaYR8rek94eNkGCWBsMgJMBJhetQWeDj",
  "key22": "3QVT446gsQQg97Rx5BsAfASV3gGapbQD8a3BhoAgQ6UD96tfDzy2SvJ4SQWM5R5KDrXUDKx21e2ZBtiy36X53Urq",
  "key23": "haY59rKh1ss1LCCaVXc8peNJRUX94DnuyKyLMwN1KwfNLUS747Dp3NWKV52X2VMpiCzRAzXT1kHEAPaHpS71zX4",
  "key24": "vRxd3qbn1tC39kqMdosawtAd17fJWxbdVYEoswUgUfL4xos5WRStH28mgksnG3h5wFJAmqwAWDfQeXvwzvPUyi9",
  "key25": "4AVNEwiRULsmn4FqMbRqeoDUes4yksLyCr4T9bdTcvwTWCYJQC1kgDkL2nbmvq4JJuj9nLUTAsQQT5Eq6jLbPrhz",
  "key26": "3LaFUJMnWU9BepHXhQM42bbdYhJxAD2ziJbDCCs2TRppcG1HBnB2779f3qC8wVGjGbticZ8hmdsCyQqEK7iC5wv7",
  "key27": "3495Va8Ar9BvBjxLdaSnpT7JHFa8ejAWzxfRFCvtimrrDnJH251jc1qQefEd2FSShPtdGYch4XNEvxD3bfMeqwEV",
  "key28": "4tbFYidTTMMzxADxYc2AMDRxPdcvv4mc8m68XVRrdKwUvcEtYw7ir1E85DLY1fwxzuSYjozxR9ZCxZnt9rXm5vCj",
  "key29": "Gtrhh1nWbTGkEkuZTDELG1opC9YAM3eQgBPqZx2tKpGxqa9H4vtmn328b6Qoja6gxf7rnTRRzafpXze43vbFhhD",
  "key30": "9KNgfzwo1wkP483DMwdko7HYSNUReoWhd6mijRBgeuzjeQj5qpLrQywZYLymkYS2MCN8XkSHitsyMgT8SYju2k9",
  "key31": "4G5jpCMZUiQDr7Tc7SAFRcPAaYur9mzZnGyAP11p7fJfWATtD9PAXLA8DrPk5ubRZum9fD9eMuEZnswnGRd2eUN4",
  "key32": "5ipSWNtjLUhfUNAtSM4ksXVg8ioQAXmFY4koF3rgpTVU2N4mGH7tKZs23LHVWjQysCBsu1rtsfM6AGXjju2hiuJQ",
  "key33": "5UVPqUiSGsCNwGTKBxBKou9wzWAY4N36buPn9CpowTT8wm65KynubDz5MiJhbd67qN9R7ciipTkuicnv3qhsix8u",
  "key34": "HTtMzF8azVdKFPZWQpyau3VkdeT724NmqsiwGwyyR6S4Vv5ZdCKke4YLLENgyDkrEmwAX8tcS7oyhEqGM7R8nb2",
  "key35": "4qpHrmMP82JtfHnxp7QFxfUwDDa65e1M9768fSXqWScZ2bDrSR8ZdJ15FdkzfhaqEPEsfVe2MjWHDHRs4SyJuhU2",
  "key36": "bA92dg6nuWdycMAMYHj1JJhPwNXNFv7fNtCZGEgZVUgNkz7QozQ8fXvYp8nKXtLxLSjqFUX3AQDWioLfMfLPT3r",
  "key37": "2oKfz8QUjkdvUyLQFnJfVMXvTXndXePZc3EHWyFKo3pdLV8EtnLeapJphAXoyfZbPVrNKwYmA8svBVFrRz4cMnnc",
  "key38": "2nTRLfMukY2tcR9FeQYob3vtBxVjm8vuB8wp4JhCS7kHseHpJEPBCHyJRJBtLS9x8RgsVkg8De8XtvYYpNR55jK7",
  "key39": "4GEcjjLpecP1y6Qi42mn5hZ8nM8Ldkor5G1Hh8arzbAQxqwErcjrK4SehBfDQP1Fy6yPybjjmDEVy4Uxm8v7ai72",
  "key40": "5mCLHmnbRpTDMeccqzjoAA1C3mhPhnFGsF7YZxAQa9eZu3zv3KZjYhNRhy1zJmrfPgxn7FDuajrwBbcDxwQXsfwP",
  "key41": "3fMBqLu7EwiPrSWRkSyuYjdbvdUZcKX95xwPd8Fq3WHxhMd9pLAgveJ8yBmTotEoG1ge889RA2EeNbiCQCNLygqL"
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
