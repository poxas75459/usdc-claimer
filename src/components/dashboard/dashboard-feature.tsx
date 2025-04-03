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
    "2EUW5YzwPqQCipBYYzo63CUybetoKAeUf48THAyMYp97tAn6vNukrAgYJ6T4jRwb8DaRRsWcFVdftVHX2DDj5tsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51HRLYQ7E4MLanSYnyDMSM1x5EH9YWZH7dqPMepMoes2vpfaHrdC3VZZ63vBc8aFmHHk3zVDrQVkkBGErikByySk",
  "key1": "3nkWXq1xHVyHSr9iogd1M4W6cdmNLmKZrPbJbN8hMJpTU1NGnRCW88q8sFzhaKEdEkzEvTNUacFYsH2b9dGqUhub",
  "key2": "5oQZ4NQW8tGC5EkLsomUkeZWuHfZBLukq8GisoCCVtqbL6krjyE55HHpdN2gW5TYrBURpDQYQutYtdtEGXxXrSko",
  "key3": "4EaMZfeaxkoYnNdpK9kMa6ALhhVpgYEsY9FCQyTc7pboEbrwAqwQuL3deuC1VjdX69TXQWfBM2JmTjXXHBBUiNUg",
  "key4": "3gA3x24aqfexu7R8G4XN9WqbZMFof19Ye7mDqyKp8KFdYByuyk1ZT4cfEyhgrpvpCHkJBnc62jYRYC4SjmhM1CN7",
  "key5": "4Dv458zGwQdx7S4Xxt3wpnUcAckEwCYEZhfXMcKp63jFMwtMgzCgm3QiMfmMWN4cQgRi1d2sppuqU3L1SGpdALEq",
  "key6": "4aZGHQRa7oarL5oxYFf7D8AE3sDw9rT4SDZy1tDpem7bRmYXABgxTPVf6ZiHkYKtPq2fnEhZxv6aNWtSkr9VDjr7",
  "key7": "3GQ9TQKKtzeX1D6kF5w5xdqKJVgYN6X1eGsE3sMN42vjF3qx13JD8z9gcJirAHZANdmPtuQZf8yuMnyRBaiWGNkv",
  "key8": "2s439qdDNxDC4HtCJre8MuAqDbYp8v5cwVuHUkB4Ya8MtB1JLANb2vkh6phVDiZssU51nU7432cftn9spbr8eXTh",
  "key9": "2qfid7RRA522D2f3D3uzvkaJ8zaN9rKN7hVP5muFwYDNMQ9XcGJNtoJLXurS5mo4fkgno2AVimpd3VK3XPUdJk6v",
  "key10": "63vFphStpqhTCfTeA7aoXxkacz99AaR6xvAtGQXgzPb6ABtNQB7FZAvaK1eQxJhiZomMWxErVWrBze1YjokPyTNs",
  "key11": "5yygcekEd2kHsmssYPtjSTBm2fTFTkZznX47XkL7Vsg5h281de9KZMnK7v2uCWEnnStUaYqFcoRmHj9z8uzQybBf",
  "key12": "oHBWanvSwiZyxqwpsrUMPKZrnP4vMhL99sR5xxLZ5DvGfxmD2J8ELXWzQ5bPQ2198Qio2c3MiBy21vajgnzJF7A",
  "key13": "5TULoLRKxi3Dknsq72RFwcunfuCcyNxCze2CEydXNK4TAkLdUdMKtFwACWksGnttdHyLPZouX3F8iefyBB15E42Y",
  "key14": "29Y1N5afKP8Kj9m8DzhysfMay46nKBGpjuZ6JB6Q51M13v6UkxFpML4PVT6HCa5U7nac8CGMpPQZ48KxpXk9nMYR",
  "key15": "2pi6iq4wpti3CuL5S8SYp8Y5pLpY9Ww8rnBLQ8LdyqGgx7GE6sLdnCBE5cRZZdNk8KBYJ6G8ECeJnLsd2gnKRMza",
  "key16": "3D4t9inAfgVwGurMyYh81BBAz1qrv4TB29V3XX8Xfr4EAajaiNFeBtJbrqcMEsbCMVbSGaXFiJJ28ZUU65HyJXtL",
  "key17": "2QwA3bF72ig2hG45i4ycb3y4mS2FJDpgC9aJxheHF9dT2frBAAnko1RRnYM2eSHiBxYtzspe76e63kyuQCyCXovy",
  "key18": "2bYPvDxU1KtpNcN5UckzSLQhMtpgtGayuULxU1wY8CaofWxMVJ2BcVvcqUHUrkhwWZvdrSipEHxcT96VWMdmGLhf",
  "key19": "5rProETh7zLr5uW5fAmFg3Q6m9ibE1Grg43Qr8pP1uWnXzeDERcevuYpvaaoGLohKG1LNuenxgBas1onhkBwVeCu",
  "key20": "32xf6UnSUWukfiHyoPjBdnzKafv4u2U4wVaHctAnZYEbB8PVF9MzSuRe2f3TCdWcinmLADTWbFbishUMJYjixUyj",
  "key21": "4YUo9A45YnSCmos63o2tjfb2E3DW3mT1BAJxpVnXGQRHNUPGHp9QvVuCusfWeaxdicYs5QWWDmmtMuRXXmv8WzNL",
  "key22": "53pY9xwWLTHt3117YXrrxWseRyoCSor6Zfh93EgWJ1BWYEc1B6gGaFASH6bxNDghJxaEXcLRwA2pAvmkCaarQEYb",
  "key23": "21qjWeEKtP4rHUhEihR5Lg8VPoWh8n5H1w1WnWMHqmcyZqzcq418TwUaNpeufMrMtYYeEoMNmiNTmP5BkfdDH4oZ",
  "key24": "4MdCTQaNw5DnBawxJ24pt7s4Xo5rbi7mHEiDD4AyuBwrngqArmQg4oQwJtF9qBPiT7p6KuFFCWm58JgfwUT7Hn89",
  "key25": "2oHV15rmxyzWnzNQCszruBjFtuwh3xNTujLwJRxkJzrbEWNoj6ZgoT9KFXW49WnPzNnKpsLDzvQNie9Ud8Yhf1wo",
  "key26": "61MkcH1grbay1PMNPh3cp6ZKUJD45JgcbQ3fp7jtHnPjXAEowY4pAiTJiufCW4USNuWREGbikWJR11Hotyr9rZtu",
  "key27": "4MYnUqhgixcU242aFaCyssnejdrXi4XHWkMWNBJK8mCsRJmxc1fnanGNVjhEtNhcJ4AethmR96WJPmy1zVVd3x8q",
  "key28": "9Jy19kB9JRM6MjkAMvp6NXY2bSwqBuwVifNtTizuAvGdbPvXLHKw6bYJNtEjRyBc1UfNMafGHMFGRW7Gasnrv4t",
  "key29": "2WwxdNx8UYauPWJkwwkXDcC6rbwPEZvMog9qQF7e466vtNf3Pir5MUnWC37Bp4djxkNbJ78kZZgHgMBP6aqH45MV",
  "key30": "3yCPFzyQXc5QL5AvHuBNuaNgFtL7V4QA1DRDADBSeaHVN3gC8o8Va8V1WPNhSW5SrDjPpWDUCNnJDDUoCdKq4f8v",
  "key31": "igCkF7SoHcLKWjvhzVAt7LQsik5qrLx8vB96sXQZ4AmhNrroEMToseTd2ZuCvJ2sN5ABRemSwtBE9pCf7oLt24V",
  "key32": "5sMP8tewvc28LsHBDh2ZH45fKK1svrp3gEzd15fumK2cuZGxr2kWH1LVpWgSo8iDvYaFToe9Cjat6DEG5Ux84USa",
  "key33": "z4PiMY9M3KibSJaaT5hiAsSGr9sy4BBcdpodL2uXnutzxPFcZ3orUjxS8U3yLMUkNrzZ6Wx2cfZ91YjVvku3Qu1",
  "key34": "tFXRP4kfxCqth9EA7icoPaAejsALx9wzfFJxHy7P5PLRJFuD8WtF4s8qhmvNp7EjgFqiJHnDeVDJCsH5VwBsx2X",
  "key35": "4xYi3ovMAUL6zuHsDwVQpDLfS2oeS5otNXTatErGpGTVACpZGsyQU6faUeQjYUcWpgWzirpuSBaSt76YXt7ZCfqy",
  "key36": "677EvFCaJmUQvHfeeLBFniNHRoQcDRsuqiZXqC8PtNTV9MorBZddoSeptWYwFqJZnKvs4Ay2rPBEKQo8mF1byHJ1",
  "key37": "4QeXG66i4pPBgBBLCHXmEz57Tof75PR4i1mXB8qupEsqr2MryYrsmcqYMizUy9BRwRdF9SaujwkfRvswmYVmit1U",
  "key38": "3n7vMimfvdpBkqcNUsq56norxdNjBSi8xyXYZbFkBqFejzSkJFPXgoYo22EwbNUH5CromnTWjkcQ8vRuCjaiejGR",
  "key39": "3c77KALUuh9Br4SdNvNMZ7F2MFDp8gEoHQg4A5qXsyaoGgdrXotjkHnF9oebVgHxa1NZ3TLQvgtRKi5kUN48jNAp"
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
