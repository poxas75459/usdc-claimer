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
    "5tC5g3dn86Hm31euP9jU37wLvdg3y8S2X9dX9wM12Ai2iJy7mRYtJreP3xL4VPPFoJyJhaV1JkcqcrnK1S1ybB4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "489nVeKPF7QS5ZzAV3KrQh53R1NVZB6Lh59F7BVVzMB71BxGwaxePCfJYz8FiXa3pkfa31LbvMTc79QLHNbTzvyF",
  "key1": "4RQV6XHM4pWoQrYQjPM1J5UKCtmet9RJfHXy65o6AddxHavccTtqcoFzQEs5sUvrc5ps8z6NTLVUH935ybo3EtNb",
  "key2": "2wZWyUgHY5Z2YatzCrf3epMBhnnGwW8ZAvLr7BHPhLFXMsqxSZR7fFVHBGyBhxDkUsavNMZWE4Ev1as4TTKbJNMv",
  "key3": "4RW64YUsujbMapw9hgpz97qb4ELphuQSyZWnecTnzMXWv7s6mRX7TEfnPPEoropeqwMR8cRmMySTW37pWMya8hya",
  "key4": "EWoCGbifeZxFjeEjFm848XX2SGPqb4VSqMBA7Nuss1HkPuBQiQ6ZeYKwbMucGW1475R6v7jNxURfewzUDp8UzgD",
  "key5": "2crwqQgTcZSXeQScSmSCAvyNHefMF8e2vuGwBiXyuBnPHx1qGbCF3qfkCs2ScpCmhjv6Ao3FEe8JZhMfMph7D44q",
  "key6": "2x76sVFncn73YHHsEmowgWbecQjbAr5WWRyLA1TN7izLnP2aZCAKwmgB1nu2x3MA2LKjfYFVXBYp11qwWB21rw7N",
  "key7": "3bjXuBRDPeUBoU8TyAHmmJS8jRZ6U8nDVU5sDnCBTiaEHMtTtxJ1ZTM8ZWx1oZU3XyN7VSB2mhi4U8S6uWjGsXyx",
  "key8": "2YSy9HQsuPFiSGhQSKomHpWCXoxfqhjPoWazdtFFrSeiHsfx4jqnWotHuywVJU2Au6EybyEYd23JKJpcHjNTqHui",
  "key9": "PThKiu5DuNL1VsTvtksJzmbFSW1RTVc8q9ZP3kcFGb4cyLMVKTNLhrmUyNkRxt7nN2TdNGC981SQAzadNEBS13k",
  "key10": "2YXndzfHLbgXcp51wxFqh2inzqJdWSdYUHJvJubBBG4g9C2bxRiVGLkyjmTpepgdu1LYdBYQiPwia6o6Q3wSThVz",
  "key11": "4mTGkhMq8YiL1ahsBgifqGG8k39ubPVcQ8cH6yZQF5hGmbgy1jPd3GCNm5YLXrkp1vXXfb8ifa63EmGv96QWrhET",
  "key12": "2RU7pU7SzD2qPj2YPa2875wnKLjrh3HY3gwdVUeVne4Vohpt8qVw9WyQ5aPShJV6jgyWu2TkiSCXNn17SdLSAsFH",
  "key13": "5hmAbo8M1RrMj8E5PKcMntoknSQwRyLnNwAuvBTRDrGD5XAG2e1EFhjKqTZQ8g2XmdkieK9EPYZNsPjy1eAxkE6s",
  "key14": "qrMu2928FrfqukRN3McUPypPUDoczUyKvs5SnjXVeFDHiuDMwa4RPB1cvQKZfAkhCDmtq1ptVe6SWXABZXdDEx5",
  "key15": "2fDw4kXS4PrbXXES4EPrdtVzCucr9KaCdLTZNJujPbSKX6gtcaXvRQk1TEMy5wBUm1GdZRiD5GE2d4Bqg7DAa8Ji",
  "key16": "3kn2MMepLTaSxkAwTqDHifHgAKQrGGVykmpGEqnRzipT1G4De5uo6H129ESEXYd8feEjDjp1ATkD1paVXG4LStfd",
  "key17": "3nd5jwW5cR3aZFLz2BMz58ETycTD3XYFjZExjbgUmoY1b4WydkqpmdLopphtkDbjEwwsMgo6GvP44Encofq3mg4e",
  "key18": "4wfiRSp8JnnaC6sEBYJ76WCpX29FcziqYmHkLxmMfxKJNUbhikMZE7s8HHg1zyM36ZrsDh8MaAR3ZNEQC5Fo1ZHS",
  "key19": "3QdxBBCzNX1s71K8ZwgUMreuSRqGEPeYW1s7pe8uVAaADb93D66BCkiEE3JvFU2g574GdeVt9Xzfe1WXb1uxvhsc",
  "key20": "5Y4SQG1HFfxsYFk4D6aReMb8KDjr55Mata9omNiVkV8SYKp9gDuFdDrZ1Sx6obWHcKqzbscnSLPgo5guFMH78P3x",
  "key21": "2GdEQtLHqHofHEvNuuM79u249t7Ty65k91c3B3JFMvs8znMdWntYWhvx8S4C4jiZ8QgHnL92KeuunA925DBA9xmN",
  "key22": "2qYhBpdooewaPoT1h9jAb7CmWz7RFSqUh2KRbCxipqWiBajrAnBeSHFAV7Yv2TutKSWT242yg4FmeJP87SeVPhN7",
  "key23": "23Xgf9chZQkWqHFbxGYHQqCyJJoEczUpVpfnfVie76vCHTcZrS8prmfhz7rJ95c8MCsqVzLUJ5B3TCCVAXEkU128",
  "key24": "464qj21vZ3dwy8iqifHyuh9zZ5gKq6qsmyR58iakemBZasSogN7JCU5zhZbW1NdesHvgDhVMWYEBiKAy9PtbaWey",
  "key25": "4NAdASJ6EZfHk8X7w9MajSbN6HBMo5X9ywsLXiZWovUnz4DzyeVuVUp3MzLSTvM7kYHJdQ3KJZvqr6Ng5sWYcpBM",
  "key26": "5xQtCdbZcKJAu8yC7CArP7aHXvh6nP3KpkMYrapMM1Va2NiRuwZQ8sx6jPsHpQ4LAteNkYDwBz48yNx5UL2LePH9",
  "key27": "2pZHoaHLChAVQAxdRdy1bkAjLsfg6qf2suJRwsZRvyqNQk7hMus3bxwkj2xmjW8fqDvjneD6EswEJi5NJELCKexV",
  "key28": "2zpKPZUvPhs7QumADEZfaVaxc8whJLVM4kNYpvn9p6DkzLHcFEN7kkV5mjQWk3rChZwWRKqbPiPQiwB2dGVtNwa8",
  "key29": "5LacWs9TSqWaWnwwhqSdjSmiKHBoUTQhNcHj4RxJvtBuqTJ5RAdAL18asexPr38AWMbLzc5rFiLgrm8BJwPBDp9N",
  "key30": "2STo5efCpUSLtioEH3aqMkPggSsa27apoo3gWyQohnbkU2HyamU48Em8Nb558GJGg9CWfVAJ6MhEY8bSgCooGRN5",
  "key31": "26YWESPsBuKegu9ymQ43Nzfx4PGwgr9QHWDoc7mFqdcJuReTMbTEdEDp5xUfabKdfNHm5FDDyDLoFRG5PjZvBWYm",
  "key32": "59SF87ccmXnk3JqqDgZZMRZUqsovL5ouLAo84msPzEpsPvhniZrjcHB3BY5N7f5xAsE3XN995QU2Cj6qwvmr6Rj4",
  "key33": "4CDHCFQdLJyLm4pEZfjNLLmMHUzWUJkWpp6HvJ8UNivsESjywAKDcaGF9iqA8J74xAuVJa1mHqFse3LLifUnBzFT",
  "key34": "4GkQWiqskEL928PbJGJ5ivgvsk8PHdyQzEhqtHoGrqNyKYMP1cguauwRUtuHLDFJwKTARofjorbeUsb1HoEkLAB9"
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
