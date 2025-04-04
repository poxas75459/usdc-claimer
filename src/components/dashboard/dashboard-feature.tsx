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
    "e11z85QjqAWqBC5ye2Vzay1QaFG1TGZrEczaUSHuxftUnkKfiT1qSPGue4gv2A1d9NyDrGjxt1ww1g9zDZPwfeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VZoyuoqcJoo3m2AaNxtxZzpXq5RKHeRTa45naU9ciqbxz4QjTtaosKrxgKgypHaZJbV8wTztYEAN5ciMGfZu7hU",
  "key1": "5MgC2DnjtyoUw3vVYqTeqwm6NKBp6WkcDdGmS3ERUC32YLEGFsk3rqbRXFJvsKDScX5tUSCoooHyJcPs8E2ReqeR",
  "key2": "xXkS8bekGKPcQsDLo7ZQ7wuTW1EtdTyyDpKRHQ7BGrCmFAMixsPW6GE6TnL6nQVTTCjE77AufThBZAX1EFg9hj6",
  "key3": "6qd7JhJhuf9mNTe196MNnSquM8Xbn5Wi6KYM7kuEWtFhFnnfRAuGKcCdZKbauSp95qjRXLhDLZP9ZLUqi7p255o",
  "key4": "nAdZhC38et5pKWA6fy1U4SFyj4VB18zGwCypPfTfpSpchsaGv5QwtdKAPTPLp6uJ87RevYJ4gQ11Q9FpZMA3epF",
  "key5": "5s6DQ49W91jFftmmVYsSLtZvG9LEK9bvQ514c2Xb8smXjeMmozLfff67c5XRgkToWkcJeQtxzwAkCCXpJ4nAkAgv",
  "key6": "QUtrkTF7bjtW2X8wKgH3N2X9BgxHpmHniwKjU8iJ8BtWuQ9k8VQH8SUTVTfPGNTRYipAqKS2HV8qMCZ13ocLUms",
  "key7": "5bryn493ti4jq5VcxxpsG1X7C4pnBEvFNxcgWLuDetTdU4KVRufWEvqHisS9G9rwnbT29LxWkXBZYVfYazg6rQaV",
  "key8": "5ytxvm2sWvr8L5PDNFmSbr1ptskzPac2xFdPfAiY9HZKseGkDeXS4WM7G8swEDNKGuoqzEqx4pS8cz2mChg2MnnL",
  "key9": "5hMaWd3ok1mMzQBEEyNCvTwsxXRRE4xwpaF3rdotxRZEZhhuRsFgv3zFb3quLg36pZCtvrQQyNSmzychVk1kt2La",
  "key10": "4fSxKSsk1zhz7kavKSS4Xh7MvCNktfmtPUHf7xPqPYAdtSe9L7k3Yb3B2oBpPx7n3APWY7twLV1UcM7DC6uwfYN9",
  "key11": "yFkagHn33xbUvfE21btzUTJ28MXxA3Eio1dHehkim8iUm9KUofX9VKCgT5yUaHVYQwpE2Nf9cbMWLgNEAajQdrj",
  "key12": "XwPcipvngTL64qC4kYjj6qrCJMoogGz1nhdEUYBkhCwVwSHqb8T88Dbf9a4SmsFhh3M4cbk9cFYoSyXtnbqtETY",
  "key13": "4z7ePHSkm5EWf7SoaQBksLY17JCjApqBmhyvResGWMT48FvLZKLYLAhgvDeoRPS9LkTS9uakRsbEAgvSRvN8bCPR",
  "key14": "5pt3eBvgZrhScGWbWYueMPYbaiqU48Gw5WkCgbdfeQeMxiGnkMxdV1yRuC1bywNDCYA2peoHHCBW3xxMMCg8Gp9M",
  "key15": "3xWU6WgUMEQEYDtfuGiB3MNGAyRiPuQHAGxh9qB3aroNdTXNMMtt3XbJSTYC6rxbCSy7fxHZeMASTuLNfhFJ5tPV",
  "key16": "2kyHtBAzRGbskC7LLWaGAnbDitNAXYrN3FZ2p1B21oG7VUxfvtEwFcecrgGDa5xScukNjh6vGK3hfHt7w7b9Bsu7",
  "key17": "3JPLAs9gWWveLvBtjDQdGKraPXGYoWTA7Vqq2jKBYYvdX9roZtQFgUFmVa4fKCz9CvUyop6b6SYD2AyxDxKNmSTu",
  "key18": "5g8EinT3fhD2jDocFJTRJhbnBCmDjq62UTaa58VR4AEwu4HpgzKfgYa2Au6QFc8ZnQW23m4RRgwsJ4NQoSL9PHVn",
  "key19": "5Kw9gJbVFpWZfxY4uDJohnDHpx4WuURSdX9TUVWySoHKRdgza5Gv1oCRpoxj4m4YCt6DyvjzESmHjjDC3M3Cv8Er",
  "key20": "62Eo9euFbc11SxSAyoJjtzM6amLuu39W4c8TG88asTo2MPue8aPCjCfH2dmgGxQqxuSpzDFpUS2QsfvSTKg6fVLY",
  "key21": "3miDUzWAciXj9vcb2M3yewsEzYTeh3PvCt1tVkGdX2X2bt7mqSxHk6xuc2QqCEkKzhkVDsL1JVCygi2wCAbFvn7o",
  "key22": "2WRTm8yKWKSSaha48fYargoPm2ViKwXnMND2bzVpkcwQmS4LSbXT7XN5XQx1rHkJ6wYC12t5AQ3Mb4JM7McsfxHZ",
  "key23": "4A79PDwecvVpRi3xQFkydXQeUywQqBr4AWnAh2FxBBoR4ZvMzZcp7Q5TQukisXpGwJJmyiJbNxPrxJPG8GjLUMw5",
  "key24": "4HsdZBc6AETzv5v7ucutfNrC6zQReXEWi89LH2bUoA883tmCW12psTFYxTngpw5h8eAVu3TjGhUJEYDcQJKdJcsz",
  "key25": "3vqMxACMfjqCyeFjUDH8F9E6xvM8xFq6B5F6AmjUUtifzkUfK2fANdpoMTW4stf81BnyzDiCEXRqrhBYQxCJqkLb",
  "key26": "iYNgSw4u57d5nSyLjRAxAuG9dJG8nXNDqHu8TMZbe9zafzuSCP37hv6Duwnepcv3j5BS7ixFWePPX1fhZXtfVmw",
  "key27": "2DYc3tFnAjJtrkkscmp7NmUH7Y15NUDASADCTzaismJjyoDwcSPzaxn361wsuKs481vQxAx5ByjWtQNZXhLe1661",
  "key28": "4xt3kTdqgri6EbJEnZEXmZzH6EZnozkeg3nwsBLjWAh7ecQBscC7BZYZ3sBQaCwQG1k6vi72iSSmfcHRbUMpBTzW",
  "key29": "5c3wEXKoGPAZMZCpnC2cJ3NhfU2bgwiRUWNZw1Moziq7ZBin6A9nyPbkoUchZLbY4vwCMUF51Ubhy5fE7VE3iZnM",
  "key30": "4zX49HXpK6DWiSLs4msixXVdrzTAVCeiSLkYbKRq3YPBXmMnVRbWqHrQAumSyfbk6ZbiGRevQwUfQXz6HK1Z5Bi5",
  "key31": "2om4CWrkZxTvSKvP5YAcFnM6da3KPeangsTdHfNoCxXSRUQyV13AayipKrJAGrAwYehxibyVc2B6GPJsupwZh7J4",
  "key32": "2tkpvKJLABqYeNDBQ9gMFWBsYepVRhSQKhcDdscx63oacyV3ufZNfkaG5VxB73iLKsYo8JGrfCKPYSXuHQzVZnjt",
  "key33": "675jSXsXkHoHQ5D8TWUTVg4h3Z8JJXx7tEGsGNMKjwrbgZe6Lrn9YnKz3MU8zfeaSx9ReNYuLNE1Eipa1KRv92fi",
  "key34": "5ymowMQPJCwdBaGXZo3Ucc4BXHbJixm1mhWE5LHYu1RstuCZcjh2Fke1HbVbfCLhPzxHL1jT83BHH66LRf5AnZpj",
  "key35": "2YxvEBjva9BhK8ZD6t4ciDxygy8Wfjp7sRq5im3a4b1Zw1rb5NpwZQBtyEJG5bxKVBUPLSNPttGJLQhjEHpaUtvD",
  "key36": "3Ada54Y9JerFE1xogaaNRbt6AEq52gghtcbj1ypUMMiBPZ8mZethfvZFkpXKKTmu97onNv1o96JmRxHv4FULkCAh",
  "key37": "5ob4cra9PHpCpcZACJ88oVap2EvSDhDXLq9ss876S9CYvqoXNr1Em519xez9VTQfA3CbEtWrejShyjM4Q1CfTMcd",
  "key38": "3qy7gqxo2D4mN4WirusDAj9t2TwkrBGM8xNMwGeJDeUsXyqdME8g8VWQGJU5sxrRjzDoYoGmAeXaeEcNPAQWRgW7",
  "key39": "3S4f6xwLwjew5L84bJSBPbxukVWC2nmoXMnBb8iR4y489CdJtuwZzfNnTDeryWWAwLpZWTSPBZKy5NhVZGu6Ni1C",
  "key40": "3hmPUfmWzN4W3775d53CmKxZfqPFS3KHnrgrvPVCyrpdT4rWihLRJL5UYidmaXNz8VwoT3XdZvY7GFRGVRovMUun",
  "key41": "hKcfkaCUXCiM9XVJzDZd2szNjQU6DXyH59XRcdg8ox7NMUK83s6X3QsUc7oB7RroEJ5z2R1gd1unTYsvg1jvqdd",
  "key42": "3QNSug9sqevNqwdcdDzqVi8KDq4kVTCsGhAe6wTzEJYYZXwmTXY7woYJncV2wbvcqA3vyiprgqYrYiPHEkXCt14V",
  "key43": "3G4d3zyWsdPbTUUU7QsQmXqWthLToLHqRztuMC7Gc9Kpe5X6AT6ymLcLm7qTdAqR9AGNwaDRJMhQ4vMxWCqvSLVE",
  "key44": "KPHYApcaSPeakPfcNndoPqtBGwLz5n1dMJBx6w2rmyrHGRwkD6QXHaWdWLUtcVkPX8jTNvT8xuPJzLjgJdkPgcG",
  "key45": "Wt24LkPiFzMcQ3Bxfdjnm23ZsiWyB59G6jcBhmtRVSetuS4hA2YJ2ZBAwLW4CxZNVaP7TwkTaXAvKVPpviNPMDA"
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
