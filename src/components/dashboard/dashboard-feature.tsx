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
    "43AXdjXLNU9R3s2A8GSVSUSWg6eBEgq7V91FTar2gnne8jPzusdh5iQJhrGeoRamG4RtpM1ku7GsgghCPwnvgujj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wsYetm7hFGe2Swew7YAL55dV76Mt7WQ7AMrxosJvguKUnmQgCuDYRG3BeqGECjL4fh6KdPk9jHQVMdpN45tAVAa",
  "key1": "vqGFhntQRXSrdmTj1VsroNsmMC32mgPBxykz4iTp1YGQGNus4hXHdcjrHMWDhFZx1qhPLZWAdxj2JHJtiqfyrKo",
  "key2": "255LTwRKJjx2DUxNhJXGaB98mCBo4AcHueR1PVxXDbBCmmsthCrxEamoQ2Eoy22C8dTyAkSuk6MVqKMG81fAkSAL",
  "key3": "2SStjS15Sh17HX9ns6ECRi7ka3LxH4dAbgxbc87qT3pDX14tWHGUrMgNKtdYTKSPUA4Jhp8c4ZZ2aRSusNEL7v9a",
  "key4": "47ZPhFM6aeTYXkdtmNjpwfzrqbF9CmPZY2Rio9i9ivpomEvc587QyjtAeJoWub4PhabACytHv43R8aqbLHTs2g2M",
  "key5": "5doJCRXxenmrkqeJXiSodgf7TzpXFGQrfBe9LQ89xDLF1bNn4Q36vhz2RJ8CZ4DUZtKaSdxR6VdTCPtXfrjo4ncz",
  "key6": "3xVwz3or69yTdtDKbHRffnAA7nDFSKGffkahCKRR9unsXGaaPtW6GPK47Wu2LxnDeVtmoKqWVYCPqS6aRT8bk94y",
  "key7": "4hfEfXr3bXjNLJ9Zsg3VUj2oQr4Dh15NZgyhpeLnjrUxbSp81ridi2TjCsAztuc4epwHyT9xCsakQYc6CnfsVXkc",
  "key8": "5Nb8K41dj6bTnu2TtF2TCNu4DgdE9oVQj5SaLV8TUcYNrz34KUkqbEgey8BNm9vythfGhromYTz11Vyrpq1ciHrf",
  "key9": "4gJeBWLieYTmgAtu5bHVcJCjYEjPyp7NR4VYz3MPJ9jE5JniWxs63qVez2ZgfoFKFyppjpbs9jQdTQDVYrxeXL54",
  "key10": "3GPH8kvz43LLXxddoTLEv62LR6RBUEJCvms3JjVzWrN3vfqqgNoibJsw6XS7pCjboRfPSf45TxgKehXW5kqLEv3R",
  "key11": "o92yBnChkokQWxCqFNeAJLiQjpwsUJ1vjcmehREU8npguR3oCyet75ZwySjqba97VN1e7iRjDkeem4o3Nz4UZo7",
  "key12": "4f7jgcQPMBPuDQKRG6ZuCMX83ZBavVBYB2FssGbuiWHn9VAyY7ZwfMiMhsN4v3NXP8qrxgADqpTxpc78Wfig9ysF",
  "key13": "57D2eVefWFDivv25kY5D3Giy9hQbvLL25iH2Wbe3mUsdJKNc266AgipXy6GYyTv8YUYNyrADaNw7tSkGJzcdvE84",
  "key14": "9pQY6z7AGvWfEdR3DCPJwo7tt8e2MAieMp5WHBPFAVb5YaW3qktZmnVZwQNSg1x2ngGLwfQdpq9jqsmZnuhNGjT",
  "key15": "SsVbxnwy5Kfp1eFBzJnpSsQktGuQWtpdgZxMkW4R1qqYT1DYhCWyyAbUpG1zz9mtzWBcTNX3YrPjvwymwindBR7",
  "key16": "61CMBDynD1ym5VXjiwuRkSP9Q3mb7eKQMEw6CYqSajqTAAwsTxJZkxPSe4U3EKUeUjnVyVcJGosaqNqipbNCLHBc",
  "key17": "58LbWRFRfqNeomJPqN9dhHwREKLDNh55f4b1X8LwTcAXDX4r5d6KKHCYVGyswmxDUHnGJaYqL37zCteRU3g6uQBt",
  "key18": "3WqXQF2A6ua92YpYsX2L7LQSmuJTwDTKpNAKS1kC5iqNTiMDt9spBqJ54bcXxPcPamY6ZBMrh8sYxoRGZvcxqCy6",
  "key19": "24xfaqeT953YTTq9CzMS3X4i1oUgGnpSAcDW4ZRvpfEZ85iFew4UuE84Echw2egupcchRDNTwm56ZaXosJFGgKAL",
  "key20": "2krXVP7C8Ur4byTqznDWyjYnE4gSNsqYEDG52C4fe3iNSY9cYez9emkKKUsT9P8KiZi5itPLM8mpXkSntDEqUWmn",
  "key21": "4pA4rast9uebWg2QBADErELYqQjyoZ7akz1dwcxTyNRv5bwkvhenYK7C4XMt5efkoaBdRQ8jfjwoykdU8DHENb6Q",
  "key22": "XwahYyAEGBDfDmZZcsUD75S8qucVVTdDQ6tzU1yWtc61KKmFPdT7x8qzRCUXpmzCzukCDeGVNMGKxioxHyGN91c",
  "key23": "53Sqkf67Mrswu86yNNRUKcGTotr9yMixVXCdQxn8X2Xd7f3Qf6XbNGmodRMGEGw59q23esz9iUmK9H2Y1KYjmV21",
  "key24": "5JrhCYcc7mC6jTLFUPbhwt4RJD3y87dgKgLoLzBCYUErFr8XbSYjKVxsZyHXnmp7YWPe83YFG33z6DETrxoM4Nc6",
  "key25": "5Zn2LsF9gbjWBqH4qk1bvRCRF2BjUStibRwnSiGBVdEpUovfonthdhJFHL14j2XBb459coAycZGAGi4hU5SZvcTk",
  "key26": "4WanvdMdYrNLdTEkubqx6L3zWe3yhuexHebbXUqdY397LR34r7HzBTWfMYrQ6hDjMTtFLrc8RyYhUCBiwoThaVVu",
  "key27": "2RtcK8cYYXM1nmDKo4sc3VVJfiY6KXpXiSrd9UVyYiSAJ1wmnrSnLT5Kb6iY6uWrcy6otK8UiqXCVAShbqjSfJiP",
  "key28": "4GcR3LaWsGKad2o4nYE12Yq1vJKuzadCkmWce16nAVz4wvE3ZPK3JR9EpfvCCYBBtKaNaKRr8JgDSdAXX1VWQVNn",
  "key29": "5f1d8mQxxz9cwHsx79U8UhpnmeHknB6dHVBh9Q8M7t1bCDpNsBQumotb3yD9gXQh5CXvDCiu9ZuTe7QYphZuTG3r",
  "key30": "RYspJbrghCvbv5JgzpGXUDzs7xBfQyiaGRnYiwFyLzmfUJw9jwHAtn1QeYvcskdLER2egmyuZxbKwkmZdzZyzm5",
  "key31": "5nUhziT1YgWyuis7X8PrnxrD8TwwD6uhr1betJtZpDbVUiK3tnPk7t3zEEQXDamJe69hLsgZjT5Nh7eK82tp2E78",
  "key32": "2AMf2QVypbNU6HtdSZbEfwBkVPYHNg6Wcz1yA17BPi8VHwgWyu3HqfHQUEC9oKeYeyR4hu8qNkd3bc1tMMPG2K9P",
  "key33": "5D1aNNtSzDDSTVJzo19LfvYXoeqwnyKVtKZJu3Cui4FhBuvbWHJAeMue2KLuaastCkJwS7ozztCa4VaYvFu6ajDE",
  "key34": "4NaFXsCPtvbU51U6pZX8B7LqVfU1PmjxyzXhEbCobo5serDbNvcLmfrtQGqk4zFsz3cKxktNCotzehqr72Hg5e5N",
  "key35": "AJZ9RstHqctCRVRVVGsFYQscJP8YJa9gtabYNDJqk7TBdzwTd253GVPWxgx13zYxwdKhQureEavmKcegchoZuP8",
  "key36": "jFddjp87Dafh4rNbffpsB82cLJCw3TGdXd33qqizxGFDqTamcnuX21zSYLn4U1rsXJkFYiGWg5QE2ecGvY8og6g",
  "key37": "BJdRmFdXAhukKVyKVFzpwox7yCApDfPRPcvBBjMhkVSrjbFcn41RCJDZZzxkETC5xTzMrotT5qa3cYjMePFA91u",
  "key38": "37w7DiznD2j3Wt9mnehDh4pBY6ZL5dmXH9HrT9DiqQnWfXuNp6oiHGjfZsRojHDXrjQ6rBKDzmArQKL5EWsdLmCi",
  "key39": "2pSk9SByrGQyBwsndPwP4HF1vsxmXysqYfXTNA3mmJxF1Q7reX1pQHCcx6mVCeHivwSa2HJ6rMLvQV6pGQsTDFgu",
  "key40": "5qkxQURDoWNMvHArDS2QJkmpBn5SLF8wPhk2FiuM8Wz2yeuvMrfx5oNz3TcW2c49qJV1amgZuwopdFX8uuQLWq9s",
  "key41": "3wb6p46v9ts6vwRRRXXQtsJiBAYhHMFP142WqSQgfeVYMj2TL4pTvTCQEcKcgrC55f7TRm9CF3MobYCMNF58aGjd"
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
