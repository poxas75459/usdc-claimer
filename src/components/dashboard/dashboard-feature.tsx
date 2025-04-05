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
    "2EFWQNxWiVYJq8ASbJSEQH9egdCABXPpzvoPXso4F6cKFiFasVChrw6eW5crWk3WFScJ4pC9CjMtuerTxswu6ncZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Aa2U8h1oahXWKeCgG7KjVhnSpaE46jyYhS7BhcXcBMsMEP5Tp2KwMYhXyuyFdejeV4nfLNo4sZ5KX3XWdUjaxA",
  "key1": "2gWxFAFEvm5pMpZmp8SgQVFxh8V6nt89KbFZuhHiDL1e5mpmYM3mz1QXeZeZBKvqkshJBTwnDD1qArWhvW6ABpqw",
  "key2": "3ExbfsgjDK6Tu2DpgUccS5wybqmrxp5e8HaCrTJ1azkHz1vMowbLyRDHMxVz1vniC6dYiXytYaB1MA9xNxjZyU9E",
  "key3": "644p6Tpz7m1by2xTYiwhYcxyf2qmivprG1B8y7czr4QmgD3wGu73mtmAeF4ij37WTJEko2pDZGVE4TmDXWTKBR1w",
  "key4": "mqG5vajGdG7iteLGmPBUoYA8CXdEJWXNnaKdJWgmx9gw5ub9Tn9Y2U1XaGL2wGDvZnsf5ef5E9mcx73uUg6quT4",
  "key5": "4Jo2eH3JSoGRf2ERKVcXEtZuB88T4zuw3CK98NphpLReicBtdRwyNPk1W8W5MTnRvUy73gXpRMLfVVGxnYooQyDt",
  "key6": "525qMq1DARxjDo7HLTKBdurGDkowGJH88uW7SYq4MP9eHLNLHXpGAesVGKMiZfhfxVKFdiV6Gv2bF9MsJac3RMnq",
  "key7": "5aQ2vHkFBSg48HyvUu7reGDNJyUBYYrbs81Jk42thGY5Qu39WKePqhjEZCrCsG6BgqBzTZ7gsHzAnRhAy95hAnx4",
  "key8": "8bVoofYDkjHLPo8QhSvKBBeVCMRohqJ3dBgpQEyPsm8ZQz2MFSH1WCQ1Kt8PRDPtBjout3s2zNm7jnBFpqr8DoU",
  "key9": "bKkVut6HguQU9s5M4JtxeuuKSAupCVCfqbZ8tfxe1JeorPYjzn4WdS1YVfn93vprGN17qBiFQmq89nfkFgLzyXt",
  "key10": "3vzrTz319osPXShH65EHcPcERnE9S9wDLnWRmQjYaoi24QocGHi9WSqauYNnoLye7tqR5Fo3zj2RYHezjh7BUQmT",
  "key11": "rM3fXpL57fU8n9bhzTt1NVMrZQPjaYVqJGYbpbzqqZBfa3wa6eh9twKZySZpcbBiBxZCc3jaeyHNyM4s92ZDGQQ",
  "key12": "2v72rr9S9nFjNgGDLqujMZt1ztGEF6SB2xhii3T8VtYsqnv4VeEaDoJm9KD7ZoM9qQ6B1fzVvBETYJXqmmYHpwmS",
  "key13": "4dztmUdPP23Ex4CPyCyuFwFee527rWb5JyfBtPGqmYoKnk9QCGTSXBAsCE8CnTAsUfHq6tfKQwYPcHq9BUhUATCF",
  "key14": "5aWk5bM1Ez2ANJ4ktjpt43UnZAmxc4ET77QVkg1kyBAwGDZqx3vaGn4BNqS3fNNhbCtNagFxL98pRnjsE1HD4QHY",
  "key15": "2q49GvLF78BggfF1C3XF17zg7g8nfgBYZjqwefnAJFWHKy4UerVgYW4XXci2CokQ9Ziuak8bk14Wh4BxgArYUBPL",
  "key16": "4cnB5ceATufKDbrnitD8hDMCtZ7kJLn4ZuWTZRUB4ei6zyY5TqBLiWvu5y2RKEPCadbbTMurNbiQox9KR4oT7AL",
  "key17": "rgdwaxQC5J7fWqL8nQrskq5vb2uMd4UJ75Ywx6xV3ZFW4DBrAJvZLGpZRStRn6iXw1MjVh6hkYLVhDtFH3QDQ3j",
  "key18": "ZuwM6rPFcAZHhdeKrMRf3wFM8FfCiStS9zeS3uiUt5u7bhuGjVFZ2GRnSvPncNdLrCFC6Z81bSGyQtj5oiDWLhp",
  "key19": "4azMVX7ndEjzya9kSRAUgXdTUWGCvAi3NVSEnf3intTGYd2ZcG6kmEzHSn8xfC5nQCLArQsbiPDjWgbHKHXdQBEk",
  "key20": "5C3X5vRVAXKNUEokdWUr9aRuQ2u4i6S61a8SdHZNBsXLTmdj1MCtD6u5HXAreS1FBd2tauhgipY4MhwCpKc9J4QM",
  "key21": "4za6hgHKyxAasT44j4cNTdXoPPk4Sy6oauNUWy1TGLDegmVQGJYPf1Goy8dYbc66erbkNzQpBm7XzPm8MdsXfPbH",
  "key22": "EELcR3NWJMArt5QSaVwd8uq8k9JR8CHwHgfYXCnAdfxRLWv2mZFnFvLt4JxrN9RMi1nYVqoyT3zzT8LyeMuGVPW",
  "key23": "22ah5dzvHS9gWXnbNX4szdMGwFAFd4oYFRBKno5e1xn4mix4XZJjGG6duumAZjPJyWefjpX2JmTaMpW6Zp6StYtk",
  "key24": "3bnx4DRRXq911FT3ySsdMWdeQBpjz5VSXjvugm3m18HVuHwrAXWtFSTcbvAfxZXcPovuJ391Hr8DbqcHbFNJQq8c",
  "key25": "2SegSiob32nwqiba3GEgPowKPu3dECFvHFWPGiU8vqdFmSBTX5miqu6i9p7qHpo1DjaHwEmqR5Gie5pFgCXwQhgX",
  "key26": "3rowPpgu9zNdCM3RquBfcJHdMKy8yqWK9CdGRTDjZBESpmHGWtsvEuvbqopJTDuptnDoCDgeRBPxGFFcpGcaRVik",
  "key27": "2R2fMJT1iEk7APSEdaTcK9Wve7bGYpWEczWzY4zFaAFWrvvCC129mXL33qGK3VDVrLeCvQDTeGRoXDcqfvAjMcMv",
  "key28": "3QbsGwQaGrDfX7d9x2yWfGqdaTwSeLQoFMQgEkTXjpfR9t3qtfRYRh9g3pNnzG2DHfx1N5eCCobXmNEVeuHqQW2j",
  "key29": "2pNa4CN7f5dXdWSkAGjYJLSHvXzaXKev9HhS9BKHwwE3kAoAAhof38YMobfg7GZ3SB2ApYgF1PnHfdjwqFeeZJj",
  "key30": "29RuR4sxwGNgkZC64gViHYBYRGuyoNuupf1T5HQJXDNQxf6CdxFmBjcU31ZgrATCkAt87ZWdknhuF6ncVxSwKhSA"
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
