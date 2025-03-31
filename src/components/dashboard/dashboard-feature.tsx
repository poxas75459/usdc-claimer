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
    "BQP6LGD365agLgsWe3vJAy4sGeJ3W8HCM3zxA1F71QRXN1b6zTDDe1PBmi4Py7RtBUb4tKaah8CjUPJyqKDg3Uy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D4EcbmtSuU5JH9BgBCTtkYMQegdKdsME4z3Znxzz821es7vZDq5RCTgLwXFeRhCotopVcePNyNfQ5rV9jsGub4T",
  "key1": "61k3mMsnHqMVHbgGU3LyzLnFdBqjyyJ38EhK1oguKeKEvzVjguJvvmToB82UWHdtCfoKXCub4kRMzFGhqYTPbBoo",
  "key2": "4daGdUtdPAPEuAtiwcCNkbDvBT6dbuZXBR3SXr3YecgFz9qeVkzMoadZ1BuMLwQMrj4FQ5CsQ9Ch3ZcV3r1T3EjK",
  "key3": "5ogNTd52pYcDTsypFfN8dR5TCSGMcCsh9jSsKY3BWmpYbj2E3kM9T4Rgbu3d8wKq39zjDw1ZcRb53nj3sYc38hL8",
  "key4": "gcQiH2Mswdfd4bjENsXasehdyi7fJMX6aLb3LC6XK3vndktqjUPWEFCRKP42gmXgtBSpuQH8K3qS4wogdEKiLA5",
  "key5": "5YHezK7mkAdYCsdwPQArnMPDhXqxTVhwtxmUDQFjzXYH9K6LB5BY8BDNFzhRvkv8DsdNxAuTt5Tu62PTtWDU77ta",
  "key6": "4ci5TcVzt4e75kVGcoofg7MkUdL9xnrKYaHcVLy54ye33fgjjJCF49gUrQn3gYwePcDgB9yh4CbHz1bGb8cGGopb",
  "key7": "YjESheqPNZCJ2JP9mGMZDF4Dt1Nd5EL1CZnTH5Gycw2rjXDKEWhLxNtxhvrivZR2A4CjwMw9Fsx7JUqPsYsFZrW",
  "key8": "62FHCGW6HoJ8UrPQa281hixkhBYDymn2ooJb9yS9wfgzW459WVxtP88eJixDz7A8XCEmywqK5P1WWdusBYrjQ9YK",
  "key9": "53GtPg3zuLzGQUQMNJoggySoaK2xjfXatjA2Xezc3xaNFgPKFaC4umxLz7v22MLYmWTCi8BWegLH9j9kTbMgchLh",
  "key10": "3eBoKvGBEgy7Dw4dUsNj5sEVy1c13n9XfdiFCmo3QfKQtyaeJPLMZtRoqPr83Tnq4TyrikBxfpdzEttQyisccPwv",
  "key11": "3rQdw6Yu3by8CTTw4PqnWA2TTrfnfhAPWTZdDBKqYiKeoLRskfFbaRxQeDKiksTiXdweXpP9jjtsG4iTCY5PrLgN",
  "key12": "2X8WTUQiPE1gL6zJHRJetqPkpg7ha2qpgr8rG4XUXXDemJsSjz2hE1hPJr7N7bbh7kjxGLviVHMDBGDQgYAgknQ6",
  "key13": "5B11pBdntCyHxGHqyE3aub3kqRFXbeoAUtnm47bjx8m6MNuo1h6eV7LX43HHaLHfSYpk52DfaQFu4GW72jymCR97",
  "key14": "2uxVSAZyiQvWNwou2DNYkyPU9y4FtjF7LYPq8d5wip929D5seLvYrrKA226dHj2BZMigaHXpnsm8q1coLvb6Stz9",
  "key15": "q2LgPGSFWZDFLB6gHSg1uZ1VUKdFDm5yXKCQJqC7onS7GaFgJzxmM3ZZXdCcaBLxCbYUHApDCyNTr12jhGRJTF1",
  "key16": "2ix1ocdFTq6U1f7K8wKMvyh2vmKTB4jf78rg4xDdEheP3XnyvybqsnQx4hNumvAtak5XeiN3SSVZuDS2eEZbYjjA",
  "key17": "5Xj1QJoejPEVWDSFi6JVGRh8YVsYPdJHNjXbExKufugPApRK8FaD6nkADU1Vp4jYVH2Wj67BbtPBwenPMHciPmYz",
  "key18": "tgY92ZVihy9GUGnSUbhZQeZwn8EkxUoGBYKwaPS7NxuxeAPjdmCQMtPBB2bfMx9464Tizus1NDnGj8Pha8M7XSf",
  "key19": "3bKhM13Pyx95YB1n6dGDZiND1QVnJPMmpaRPJzXP4Btw6eTGg26CC6P6pMLGrQLB4K7FwAa4fmr3LPXALLwKYRfj",
  "key20": "4ERosLisCKQ1rmqgLEmJouqtmkyu23oc55my946hsxYivC3XXpRhRTsNX4Z5X1VFXKzXV5Uq5cTT2uvTKuJmgTds",
  "key21": "42SKqvTHGSuAGT3HEwrepUsZdzm2oHhU3VEsZ6QWS2eZ7D2cBufmRNUvHBJRBdR8KsdHbASbaWA3wQ4N6ddKJd8p",
  "key22": "27HZ6Lm8fhcVM5on5gpbdtc3Agn8cH7aBq7gTUAzLbp2apfFAMnbCkrMiFYc5Sas5htAgceQSeGT6Mcdhh6q3esQ",
  "key23": "3tNBbx8a1SNw7SQkfL4Gup6zWPqayf8AMyWSFSh9RLkEmoLbGU5VHkytrwjgjHC7VyyBvuEXDWL1Z8xuiYqhSNTK",
  "key24": "3eFMK1swE1SvxQSVFxPoAqwTmQNdctnrMRRJXX9KcgsFrRiEurgxD4ytTtTr62y4gTxpYTXLyeL5W9boiNmkXR4Q",
  "key25": "g3PFKawu1hakwEzcGp91yvvaUUW2yNkurXYwq3DWa2eQZ3uuo97GYoArjNtHtEa59MKFerszSBaMUXYyCD6pQSR",
  "key26": "3pfoS1VhLs5AQmLdCmNF1w6LHZDc79Fo2MG8HSwuWjGmoq3TUmpganWCKTdNFDJnPCr7iiMCLkoyco5domqL3Au8",
  "key27": "qJxdCUpJE4b6yJc28FkPeikbqtjPTksmMrU9zjruiMdm11Zca6zJgHufqNWdajpQg8hGV4FJDrFhntG8h79iQap",
  "key28": "3W6x8VP6JYmYxDpv94E5rwtifFzvt48CoL4UkU2vymu7nnBFECXk5daiQ7EqEPmgALuGYCaRP3cr5w4XuHcYHoRD",
  "key29": "5y97gxs81ShDoe1R6qbMEAGmA2KbV1c5vwPic2DNZt7Ynk8A6PAvmgkcYG8h5ttxifQP5mTShKbjTN4uodb69QZk",
  "key30": "5TVH4FiiPw7VUDsPT8CGtCniLvPspfE8cbiHzCARKrKJ727T8nGj3NmpCTytFo2RQ7TfTEna11fdGRppYzLmmtn3",
  "key31": "ZEi8XHFP2eSdFxiHH6hD6gctESmRGn87ZooGbop4mUbokVCswQfpqVCiXvf66K85VeaHc8Md3EBGhnrzUMajyxo"
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
