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
    "6Qhb7HJbv7iFcwwRbqxKLsoq9fMuQtwRSCyRBo49frqz569pif81uHoJDrj6ShJZb9AbzZjntgpDAUP1WNUz2ii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5owHy3NPZ4E3AwJmjeJtvguiXbgazeyi7kjdkHmscs1bf5Qi3wbLEN3myAFAdtr7KBw22EDJmUfwDJVmgEP6UvuM",
  "key1": "2D8TW239ebbFYvxfqUKDYdPQY1S1r1qLehPzrthPU2SUvUWPJEiTRoq5R7T38KchqQQV9BnVvorNZRHdvQDnReXb",
  "key2": "3dQN4v3TPP6eRv2nWcSq9iZ1w55kx5bUVGpzphYTNHMaqTSbTu8DQ9g6drwLQwEMse5yWr1PevHSPBd7F2aFZ1EC",
  "key3": "5gFKRi9y9UnXZrQRYHhakKHYU7MUmiAYD3V9uoPMooT71WHm9xcLue4Y24MR6gcpSzXpxV6ypBQ1okuSc5HW8dzb",
  "key4": "59hMSrrw1KPGUsBCzXfKUbr41NzZ4js9de2EMXu7eezq41mkSq5GDVMHFonXECgHdD5MSrkWrLBBi2iJHR1AnZp5",
  "key5": "4uhk3KXCZLxPqea6M7kXR3RwWdZJiFG1FrsDuzY7hgDJvcrS5tihkUUxKteKvx3AGPE2BguhDpTnfKfdZnzrRmeg",
  "key6": "4DxUWzou5QxfCV9E4ncdzj9CFCaNoKuegv1qvmkKVpHubmEtpHX4gSuSY1iLJsTYV8VYiNxhTvajxSyNcNgvgZwY",
  "key7": "3WWdH1UXkzAJZh9TFus4yc8eho8EH3a34oH6mB26dqRxJ7Rbvzyou1WWnMcbE3LTc27xzsioQCXq72rKHvYEuuZY",
  "key8": "5M6SoFVmgUuBpuBSxq5FhQd7i1ygYr7iZq1GJHqkZfMyWYvXvqoyRsJeUVGyLAqC9VqrbnjRKYsNsFxkkH28kZPS",
  "key9": "5rkeggKpsnZEJXytZm2cfGs4FwrgkEEmfujGz9H7NgKYGU8XeBfy6cCWYr5His6JKNjqy77iyFbZq3JQgiAream4",
  "key10": "3CLChNZWshSADUfwWY5Jw8iwGbfqq75vdmEyF5ukVGoNWFgxMXUZ25h8wjhvBfdZe4ojdNq5anFuDsQ55AT7miMJ",
  "key11": "2sR8hxnDMJc4yVrxzJuVXERtLhnAg3zWf8eFyHAgWqw4S2RJuw8kDbQoPG7EVqWktpwscqfa2Zh4DNPhyRUnDgnV",
  "key12": "4QmMa7XUsZ6H5K3YvWd7F5mTru1pUtF1ne9NESVUxPSEviVMpcZtedkL28k5FRG6YL97ZspxnAXkgJZZGjZBK82e",
  "key13": "2zqmzfs6k9mx21YxsEB2aoXXCS5zZ69t5UzRkFQWPLMr1tzXP53uhJ4PbZLzZepzQtvpUo4bLCj4euLyWyQkTRn1",
  "key14": "32ooK8JA91X6hY2PYhAtg2bzDNNY7H8dZhyNyJtKpKYpC68zmvmE8nkzAveF9GySQpibn14RpA75g7uzworCrSRB",
  "key15": "4jDTUz8HYcFncNAZ5n6dmt9GHVbU98MseWub3uwBwyYRbSq3FgBwGmVawyt9kS2JCmuR6JYVQb6mocFiB3r6DmP2",
  "key16": "3J9KKHtC7opC3QfpWfyTcWCtof8Nq5vMxGhXNNCou91E7mzNVJEVYsgHALDiQVimSU85BEWmWgyTUq2U5nDou2dr",
  "key17": "61rDRr9VeDeJsxBazh6eLkuYHAsREM4F74wwirDdHAun4pwA2GEmaP1VUQMV7wRZyqudwBwz8CDq5KFDBxzA1M1k",
  "key18": "31fgxKUxWT3RqSQRL9eNtJm4LYpdVkTerfrxgEXc61qnmp8vpdrJjH8pheWJpHLbjGtcfogePoLWMV6Wmry3eqwb",
  "key19": "j6vR5LfcqrLv81uKcNxQmMeotbkp4pCy6ArWeoMeZBEvJcWCL6f7GNVmCXxaW7FpgCVYFok6rJnzUVq59b9YdTX",
  "key20": "5LeWnvSkxGCK63wGEEMCoyxkMU3XNDaDmZ8buBWb9YWrzQ3kzrR1wakF34YpRPoXTSmF6TtwNaLPSgZLWGtHiCRJ",
  "key21": "5DksNad7LxDGvktcqjZsXTH2qfALfQSDcs2hGSwuxwF7wSYgCgRxZKfv7xBfMbTA8Cf8hvhFgibR4UHrS6o2JpK2",
  "key22": "3tjmmUGuW63a5jJUGfSA7W6gmJbJEBGqm8VoArdwYGdESmru8pnVNW1sDqNe5apLqUMGMkCYC1LAsDCSBJS1ANZE",
  "key23": "3BXrQuunpv29Zj4MWEyX6CnNpUJQnWY8zfQgg2oCWiDiJDgFMUwnLXnahgHPiVxz7WYRdLmCfAGj2DcWW9cRw6rA",
  "key24": "3tF2F9TnFY1Bie54GbmMPnqZve6V9n191TQDBuqwKe7d6jFxeN8tiu6kVSfymFgBDKAdUPoRGyww5XneTWVSxA9Y",
  "key25": "2ucJY3p1XikEbBVYmPvKb2RFhP4MAyG2oVS378HkkgAqr7wRRSC92XncRBuEKX133ZBNPc2erwnDsDbvQ56Bu34s",
  "key26": "5NMkMY8Xa9GmWCVBbwDTLvwMUfUt7sfhWkg5cX8mGW1mKuHiTAhjDaLd9yLM6MmnjgWVzNNrhYsb5F37AZntd9cQ",
  "key27": "4HGeeJggtfwX273Fr54Y1BcdDXS2gHsDRjytZYwEu9wZangwdSymBqtMAwutDKZZgFnW6JiYMgSg67Q76CoPiqTb",
  "key28": "2NKSLKog5hV1p3W55SBBEt31Rg5CBb4o73CLkoMErxF3WyWmXYmUGdqSdRdTwLMPwCZLoauvVLNGG9v75NmoxcQm",
  "key29": "3FAgqHM2XJjDPeHS1PjQw1HwJqVUFqtTU45Bo6r1L2pBXvLivpqaXkcYvGT2HYzJ6cXP78Qvqt9mUo8YmFcznkpX",
  "key30": "5drGuRwvtMwF5JWtgK6NjAvyog2tCQZQvrSmZonMAmmi8ecJHXZqDK6pUkKKjbWb4p6Ngbd7fog2HVJ4h2TFgnbf",
  "key31": "35euU6vhuu2XwoKkg2Ancfr1jbnYESaUt6XfnKs3SYtK8EeXKPWAatbnvx1YGiWnnHkHgLeyVdk7grtvidehA7mA",
  "key32": "5jZ6ePz2oUrLg1s9qqddd4GCsQPdzMVfaBmZfB1jCJVg4ZmEthH3VcGqh6vXo5d8F2MMpS2kkpLdM2vCwUsuYjhs",
  "key33": "5sgGRJ6DZLrdjG8BKMU7Z7GWhyLegL6pUitmGBQFeJhtdwTaNHnnPsoY4XujQWjMTkGUmeFRbEGjYW1GLzYsKqe5",
  "key34": "2LR9juaibCfzuJiszotoFsQretJT7QNmsryjnTk1AJfJr8EN8H7k7CDqQ6cmtYLZCw544hwTsCaX89M8BaT96nm8"
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
