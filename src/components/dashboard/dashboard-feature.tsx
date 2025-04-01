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
    "2RMPTbPS7JfZNbTDgDFtcjZs56EbW8eFwxenuRJt3zmYzx7Dw9ubGPNntxrPfUWLRs2GvV24UzEmaxQjbPPFKHUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iSovNXSvfXNimtsPC3rK6VZaWNP7RK8FtMcmhVKZsxRJCLo1fYE7CqsmNosVYAD2QoNWxq5s8nhejayvmFfEruz",
  "key1": "5nzNWJZaMfuZCwjGJXXgFwQ8ZLCcEnePsGvzovHFAgrp3BUTKYQNcxpvnjj2MMM1Qm4efZvcn4S9Geifp5gvmWoh",
  "key2": "LhH2hQdF8aMSSbyKKt52USGzpidURdd9evUtDo4gBRxh4wXastyHYB2iJ6pXR4CxFx4sxYfpwxVgxE36R1GowQu",
  "key3": "3bhiy72WDhDaxMvEVHuRcxFYP2YZMm7dT15XD64boCS8hxakT7rTSYW84PzUcEB5XF8KUcSikCUdLnT5oCTjNdBC",
  "key4": "yMw9NZnmoxRL9UHAG24xU5Z8K1BzAfVdM1Eo1ye1qBmC8g2wEi111qGab5PXzD7kCFhAqxR9L5tzf9Pnar8Dfvk",
  "key5": "KNNHkNdDY9bKQ6XiQmrJRkvSkLRbKUCzrSBxSBD77Fuxga3EwV2zp5SKqfMw1SHWF3bBYtNkngisVFJP7XtZnMd",
  "key6": "4cjCv23ME5V3ZZ3q6UY1oz6CqpC49kBzPCi8heh8ZDh8HTpbMLnLxJytzmipxGXRGU3iUSBzR4DLuh947YSRWTkr",
  "key7": "5K9h8unkdRrk88xvzmQUZFVtsJsVMwXGp8EDLMAXSksvdP3fQeBFGYiWTzNQXry6ws4gTDJjmrWJeSFK1gNwBe5e",
  "key8": "X6qLoXt6xAdvxLvCXjHTLPeRcnXSfGpRWCdwyheJhwFgwqpj8taoF4cdk1QXa63XH2FHjisTdG3g31vBye8J9rs",
  "key9": "5TGo9cUjRPMm3oQ91AqjREi4a147QQe1VquFCSTMUEpYPB9xC22Na1W87Ymff2JgudwsSk1RVKceyX89w91HFErU",
  "key10": "3wmoGzugvYZku7g7dzYWbBs2uNT5q7PcFsjYnfEY7xqVwgThxkbaiGssboGULNKcmKTKoR3M8hPrwcvumdxi6hXT",
  "key11": "2SpbrW3KDn8Wib3Mm2viLKTwFb3SapTGJpLpfrrEJq9jeLyDFJtbFtJ7UPYgsa84uR9PArQp5TfBNuu9ER8q69dJ",
  "key12": "2tJ75qPcUvKEpdvmzgMniL7krWsfNUQ1vyR6hvJNwVrq54g9JBYwqqmSWy6tw9TvWqsqtcereAStrJjpCfgtzWVZ",
  "key13": "5ZAxWiLNytQpYwGTBEYbsCA5Eirpm95cL91GdsJTNtqdJAnwqHsFVUu9z17ZBj4jdejj7xqTcW75r7Yw5UzUv1PM",
  "key14": "4wvuSVWAEqSRXgnWKZJhJV8RWsQpoqHQmb3oosDeVmVWsL8HQ6hPf7yHX6Ng2nMjCNbWWqRoNJ4cjRWqZQdTUeYW",
  "key15": "3LbQ4zRhp7ATshC8G75aKEKnUQEyN2nUCJv2NajiCEVU3FWF93D8cpCWWXtVdpYYbXrBgcpfqgGGNNjRoRa9oJFY",
  "key16": "2j3EzxNu1xKr2TyKgDf1woy3kbd9XStzsoWEbPWicv8GD1CzvgvmS8U9oQMti2iQ9Y9cBXP8UZBnpEjUYZ2xS2bp",
  "key17": "5ZA8EoyVsfmv84RvzM13dqy2urVChmBTXe854gXWiw7Cu6kRUW3n7rbZweQDVDzmfrUif24fe4W7Yy4vMcsPYFyG",
  "key18": "4MkRBFQgU7cEoZoytKADt3hWRiC6UU3ypDQpfd12Z4nBP5odg4eZApf1eadNxKJxL5WDN9qVjBohFkn2qZ8YJM2x",
  "key19": "37CFBFx3Cee5rmJc1LFfEcJA5gcerB5HL3q3XhRcaiCHBDNdJFBLW9ReM7G7KbK6egBoFDo4FEiodBrfm2vWqDCV",
  "key20": "2FmKCRwFrorsHK2G2ScnHVHmUu3rPJpKrjLMMQ2kcg2MEjhK4zifQwZ26VTFzWx6EyJT6ABv3wMnMHfauWCruvio",
  "key21": "2gYDfTewF65MWr2z3xYS3EXm4BfWXBJd5xWx6iF3kWy6GxZ8e9jSukA2FQNm2yxSJph3x1zkpNMfwjWvtPnYEQWR",
  "key22": "44DvDSmhghd6eQR1nihujAJjwKZSk1PzLKdtTFK1Cioehs2Jj2BUbBE7rx8brfYkGNBmk6XCVwASTivDRQ1QR8E2",
  "key23": "5tpvXqJacrJxtQDa3sHbZz4ExBFEf1V1eNZYjY5kB8F9EyLtKgdsAVrxnv3mTx2KvfKGrhu2FLPq28dpCpThWE6C",
  "key24": "L5412MJi6zQDE77XjQ7z753rhuxDSmXk57TbfQeSC6fkLzrm5gkXEMgJFfpeWMhbA6th3fTFWzLh3PbVQ7Ab4dC",
  "key25": "sorFce8UfS9qn5KChzkoP7kvVVyBLLX2F1mVgptyDsvAn4dLmPhDrxcHETy5NKMAfyecjdGjK4ALvPAseZqYhdP",
  "key26": "3G8ikA2CGiPZR4K4Gac1KX3AddWuR7fCBvi2qzT7Q2FYAV9upb8Nan43gMuJCQoeTyb6m7UiFEjQ8bny4PuaXvpo"
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
