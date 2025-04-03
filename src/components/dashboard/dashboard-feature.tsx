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
    "1Qj5j1DSbyXzUSipFjLexBwFwRH3ujqKZ7GBMD12tp7sDKDq37VvHN9TQujJaUMwZe1GA5hSnQDmmZw5JDR9MJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5byetMtUuaJFgxWfcsbQEoYzF9hy3rTyigyzyYLqkP7EM9j4RfENgeyPALnFxrnFnYZJEtKTwad5QWyHFGM1mHrx",
  "key1": "p2GJp9m7Jrt8s6mXnus7qPEk9Lw51PwgadKCeFm9nLhsmcZvzCBrYJac7Ru8H37YTtyZV5EGvtht1LhroJQEu4c",
  "key2": "2jXRifLNJDo52JuRphDUE5ZA23r8HwcBgpRrhnHUY35nxUiTymtQBP4oZT67y3v6dxbgZGU7AabhVfUJxSomkz7G",
  "key3": "5S4rgoKJWAsHL7UGYQnQH1Rj4cmnA5kJGGyXefqWtCUbbUuDTQPLaRJJ7JnfZuRHETnjGQr47DqXMLBS33NqyEG1",
  "key4": "4idiysKbVxp4f3ayC18u4tkDsjqGEzCprHz9c7ytW4aeK45gBb2nvW5kwBNbZmUX4rRDJ7pyNAUaz6izFKRZK1aA",
  "key5": "2dJpcbcSJpDvwNYZoUh5aNNPMYhgMSsRdQ7tphmTPh6mgfos8KkNZKry5Tq3ZVhYRsfUqDUpWbzWZeVFWEXRqKPd",
  "key6": "5V3J7LXc1fh5qaaxiro5AxdnkHv7mN1CdcRPgrEXEBk4N16QLzFMFQ589NRfbtn8SMZ6ZM6rsLZ9SUqZSzBcfPxH",
  "key7": "2tn4JQtZWkysy96r1pEUACv3nqdK3mB73wFLJgGYyhxTeZtpenkbp5G1hHzEnatbwQJRqhdmzkzjiSpMH1Sz5LmQ",
  "key8": "3rDRRXgsJCc3xkecEw11jdeiKa38tEYutpSxmSNWH9YzeiYKVtBdiLHEuyiZyTbUSongGAYbirJFdHVmB4PNHQyY",
  "key9": "m8xsSWHo6kRkL9MWQWbauPL5BP7KTNhjmQNoiD9YQPmNn7aNVLMNkYFmLntagzNKZ8J1sezSPTUCaKoKthDySJ9",
  "key10": "65Grc6vJczUGyACXPHshp6q57FDorbnffW8Houk1BLDvYJbcP7iqvos9gkxQhjP2bDopwmfRySz1b1mmPPvbMCTG",
  "key11": "2xQKajxR9V7neGGVhUfRgPsX6xpfidZxcNsriQvrma2xy8rj1vDJxYzvqwA1aWFCtLBf5GmDrpeMY8VK9CmTuipz",
  "key12": "3nXcB3HNEdFbiiHKFLp7BkPVotBGJVjnGH8LaJo5gVMYcZSViM5tP6aqCciVs98B9iAm1h73iaNyGj3z9ztXhfPB",
  "key13": "2hkpZsErkZ63UmfJrDQbP1VS2PdxVhekuuYEUGyqBo6xZWQMPmGfekzJQztWdwh4P8tVpXdi9YwULSnwuK2necdJ",
  "key14": "5onSLoT2nyai1NMfXxZpyEkCk69sg5ykSSdfA8iCQYWRaTYEQcyh957T9PpJ243kk87onHz6hdF9pitjZUgDRF8X",
  "key15": "38u32WV56o4jELGQZ94mrG4xCbTaqz4iKJSejS3JRaXVKWxQn8Cxbe6ZCm6T2NFSzJ3Etsgeqiofnf94uJgGGXAh",
  "key16": "kTPkxyyszaXyZtnmXkp2VzxyN647LKuyRUYVr4GwVJYcBvqXTH9AsBcdCEL2vBgZr6YjUBTqPMfNAjfqnGnKY19",
  "key17": "5AK1omwWfcxCx4x4ct4GBFSLMobQcrMyvrzANrEGQH51hyhSwrFXb16oaVRzfFAhjnJCSaonHYGGc8eAywAi2xe",
  "key18": "9ByrkjCpVgcZE891eXcsuq4MhBM1zm2Z6iP55eXMQ1yQgYCvPrSGHUFV3NNi64M5ZZrvu5MP8RJnJTYm9Lh8idX",
  "key19": "gw3TRdZ1BnRWxjXvrgAYoaSxRKE14uY666ar1PVX9fbzwYx28cGNn818NGocPTXpvkHSEmpSaMkSVSpsGD4huNa",
  "key20": "xDhAowCV4nadf9wM4CKxK4hTTKNXgsoiYTDYGi1hyoEBLc3QBvY3PqM6o4PLVhjERX3EMHyYQHW8W1SnfitSWsy",
  "key21": "5MPxnbZh2nzdTCsXw9Q7d9u74ni7R4xDXMsxJEmh54zoGNCghXEjq8ENMGK64QvGnQKkUySTowzdJMjt1bitVDfi",
  "key22": "5fV4Fg6SNNt5CGYTxMGCKi1NTLY8fapcj93YPuf3CHtwqvjxqLNsVLtE8kjcyzjCTWJaHhj6qKQrBf8Dj7pih5je",
  "key23": "2TVddVKH9rtBnw4Hxv6a9bNtoMBiSHF7k8JEBwiPkmMNfmhFumdtU2mKskHEyfpaxxDXwuW6eJc8T9JukUuCuDKA",
  "key24": "4XFvnXfr4ZcnRtdByJyA7ifM9oDbyzJ9sLx9ytJCB7Cci4BdTpjpSFhirK5bL3W4nb8JR4SamvSnXRgnPMibNNjX",
  "key25": "GDTdwYkKbPgTJ7AZWdPLYa5mwgNvFxBQUD5kR4di2GJKTEmA1q4uAT6CLzwb3AgAVpte2hKZiWPBkFR7Jw4orbp",
  "key26": "j9TaxPCWATHQWvtBPvP5th5wnochd2bgoBcoFEXn1iN8e55nm35Dq7KtFkxEJqjgcKETNUzb7Wnt6ksBeonqvTh",
  "key27": "JETvuuFo61ExPG67TFMLCbew816sBzgk4pcoxC1Hc7RJnBRufQyghStnU2gvfGuKoDFR7S5FyKSuwSAky17b4FB",
  "key28": "51CXKvnsRhaU7v83LTq5grvLck3xRxD5htZpz451Ue4BpNV9yW17Mjt5fWqhJKa8ESRfUjSSEbiUaRzGcCoSRgcA",
  "key29": "4SXvU3wV666ANZ4Ar4JJeMzrnsgUsvF1x1Uimeqt1Wx23zWuPCeiNfzHfAhdasqYbMc9Pie3RNqPaKRr58Bb4WJ1",
  "key30": "2LjUMXgVXxwj6vSV4QhemPL2vGAvHD4P85fF5Dszoj8yt6Qih83Y5kQ8tNtG4ecLzanaXYnEyrTbhCZYqesJSqEr",
  "key31": "2xsNpftdQsV4TnkuFbPEsQcoV4Gt6cwX4KQAw4Rie1Awcsse9sUSgWwBuYkt4Kbw3FrbnhqP9G1Cf68zD6SEniaN",
  "key32": "2PjLYUUnYRtTz4NqBEZkGAwuJSjZGX9aY4ikUjmtcsgP8n2ZpakaGQUGvM1VsxzEzNRDiYLS8wnHYcQ9EthPSSUv",
  "key33": "2YJGuytaeQszFXd9LvpEEVwk83xFaPKyBSU4VT25S7PhGs7GSNzdSJCb9N94ihS8JUqe6jAuZD6YQxMWXbNJpVaX"
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
