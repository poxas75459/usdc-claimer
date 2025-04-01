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
    "3y5yEVib1VSyK5bj83a16EhPh7rQG6ChkWg9PW9APdZ1J1ksFdtXQrS7PAA5A59jD8RFMxYXP11h3twyHQJpFzKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wkmnF2BSKGS1LyJdftnKfhSxBMYe3Lr7eJsLj398Soc4BnQ7me6iEiZz1UArwQawUqYpTPdgBNPaAgDGpRVhQZ1",
  "key1": "2yA6jmNqaQwqiVFWufQrbu6RBmMDbqyJTzJQH4pq2xcmuByZBKowXmKQFJwgnqz4YoYJpkzq1zuyoBDpoNBPn8qM",
  "key2": "3uwzed3fCig6hfJyY232dGuCu2qv5tQT1h3TY16dfpDFHCo9uaBEt1NdZbJLFstRHU5AHQnv3uStLMHPJq9EdgZW",
  "key3": "5y9b8xrNZphxR9P3EuSWf9WWMF4Ho5S2XVW6CLnNwwj1Pv5VsUJ7qWP6hZGU1jtCWAHbt2CjBmZxRqo85VPX7Wwh",
  "key4": "3ssvmoqUNBvetsqkxeAs93nxLEDsKXJRiVocoVuGjTAtCKTry2KHFEVRmVDAiS93ffifdU3Edyt459sT7sNj1fxk",
  "key5": "bQzPa17CB2PCAgLZYdcSgz9Jc4WFet937sQQdbuBNUcVPzUjrwnkpJpYDyfzwTd5poPSiRpMiPofik1hsxAjUMj",
  "key6": "5GYPtsmGbSjwKv92TCn6MU4ib3ygLxTU1HwNb2kz6o2ffXXUajX5rrSAQ1Vdt4y2F3BSJpzWHUQbi9LjxunX14GZ",
  "key7": "4VwwRJi3pRsdJSL6CecxQRoaWeTgrXpAgCSmjTcyd2i1GrNCDZKJcmZw4rYcV9iGTXHw1ui6pRLZ9waqAwSwE2Sc",
  "key8": "4pSsznK4o5u9daAftp7B4PqhsrkbtjNUCboVZDCU1Fn4hTJFFJqY2RkoBKHYpJQevRuEuBRZNPPA1vHvzRn74sqL",
  "key9": "4BPYEpbLQi2nocTXmp7z4r4HiNqRmHzdW5wLN8KDSameJXAi2ckfUU3Lhe4PYYGqBprArpojnAhdUcuiJkoC4DBp",
  "key10": "31Qd6k12E9ssAivjy79jWAaD4Y47KswL1YYoAXma5yR1RWtCEhf8t3q97pNeVhqaqr2Dy3mVEA791hUx479QbjqQ",
  "key11": "5R2bZ4con3v7K3PuNAYNoYErWE1NjDAua9deh1KFjYjitBYWavcE3KKDCFdg3vn5k7scJhDpwux61XkScYrnE6Ue",
  "key12": "3yoS92RNY2qob2tJDcifNFy99CDK9NMLF5zSMGXZjP6KuR9hBGCk3vkp3aHLxjKLfrB5Gmeydjj52xjNfNwWRqDi",
  "key13": "2p28bHCFUiqW61qc2dCNepNC2iyr54TFmekc6cfpNqywCcSCvdoYTxEnbTSD7KUk3wmepbbwraULSdT813kag6sb",
  "key14": "2kkYCtDuDCRPjx3tSxS9ozZQSQ9XxDhnqiRvmmjD4xHq1ifV3GwigM3QM1yugCTShxnqV6MyQztBCKsP5sgpaeUT",
  "key15": "4KGzdCLp6XPxE1WYVgHyq3A4L14qDGNvVSt3Uqc24HD2ykkcx5wZEbZA2K6oba3V6jsHnYMdAyzxX3GgjHGaTRVc",
  "key16": "2JxSMYDzNVPL2uRGaibrnWMeowGquFAP9ZajAhS8bcArVC48jh2amxMFTis4MDiyTBv5a1WdRAhJUhVP8CLMk7uQ",
  "key17": "FRwJ7XWpS46iG9ihkHVThDBUUJ2Z3mZ1Mrwq7YbzwN8UVdLtk1XJW6C89MET8GV2ZGTU3kpaaGdoEY7wsPHdPKq",
  "key18": "2LX1dqo8TZyVWzTdUdQryyNwAYt1hDGGSrvGinqLPJTphGr9A4TFqzvUtHmjiJn3uLH3q5ncG9nECReUFAuWYvnH",
  "key19": "3hkfmuzCwnZ1Gz6cCcn13WqowhceBTsEFmhkf1hAkLjGM1U1Thn7UUtNie7Ckt4LfECK5YrfF12HT6ui7rKfxB3L",
  "key20": "31QdVSXsiXvu4EmZ3PrEvMrVLZdmiehC6SseyzwdPPDZYTB2MRFpH7PxtWY6FZFZC2WTDni5vwHLbLorCNFFKdtB",
  "key21": "5gytdtqRWg3b3Ph4L19ArjF7gxoypSpgyUGS6EwTDxdf91QiPN1BGuoZmECFfhB8tPrD1vht7bHQtXMGh7dKNG3m",
  "key22": "28mSVjs1gMA1GiGw2ZGRAGZRhtFNFn2EQaYLbu5cUa4VsXy6Bni8FRyVnNCGgyyM8cshLRCBXTKRfkUpR4xtxcD9",
  "key23": "3Jza7Z6vS9UgebafCGW1cPKJsUZPBp3P9t7GK84oA3t85YprTroRNzu3nDFLLCHKqGSjgh6uYGzrzwmsg3LDNsb5",
  "key24": "53LogwELmmpTEApAz5t9bAAJmLZY47v5qdqxbhVBqTnNtxbh7QGFEFNFDT6yGqwpj5vhWYHYtmVRQhjrW5yoKFmg",
  "key25": "4TbBjySkecMYyLDMWkcJQ1VHtvhKmgDR3QtRRcBFMWfFGW4Dh9czPLMhnroyUY1o2yjXyDzhH2GZEQT4H1tayGR8",
  "key26": "5Fm2TjqTeSEA95GAC3B3CkrsT7n7SJPdjtWx5R5k8S14urdWnZChyaAKkQbZCNd4gsk288BGZLMTk7GV53GViqM2",
  "key27": "2GoJU8LCQtvow9qUAEJDA1jV1fiU1bmFp3C2WTEG13bAsd8CLDeEBsRUmCPS8ssX73WkSjRopd4QsBiK4i5h2gpE",
  "key28": "33YxjkTCqquNaors1YYEoWe5iJeGF9cMmhEHZyJLHkwJdAJKdsAD9meynSBnNXAW6JH3cbhrhe5xrBBxdVaL44V5",
  "key29": "2iwpa63qtGptbxJEWfi2482ekWytMvzHLtCE5h7qco6NQPHhN5XHvWhfowa7qnzqf7w7PoRZAVZkfsBEyY89NjBz",
  "key30": "2LVnNyXoWCH6KaNWLAd2FHXeRRnFi8ChPi4FYNj8icL4qVvpxmVw6SkLCyXbd6XYudpmV6EYAjAmCSCr8yfhuRLY",
  "key31": "5Qg9NUDmZqVCVvLAFLZmTRqUrQG5WkJMngrHq8mmLFiSwk4yhqz1rNA4enbgQChgiXiSVmN8c9rgak3hcKhux6Fp",
  "key32": "3pYRhx1uKHQitV1gk1MrkqDJWgK1cqGeiFLbqgFDmwBbSUWJR6fWvEb7PCkZi1n4vLnnBhDHMzGdPr1TmSNBhv7T",
  "key33": "w8NktqTB9kHPENiWCQrvufzuWXum5HqrdpH6yHRzWvuWJiMXnKBiD3s91SzGRLPGyzP1Pkw5iuMadTaXVS2Vvcc",
  "key34": "5aa5BF8JYq3YstdAo7xZ8xrKprmsYankg7CwHnTV3zVeqxNKajydUDg6f1QXY8QhCsV2aHb48L8ZoCjLhdnehNYd"
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
