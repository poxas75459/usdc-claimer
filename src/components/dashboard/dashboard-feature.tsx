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
    "dX3DFpJ3Gd4Lj2fi2qrKCAus8t8JNXxbM6jpQ497fP5SEU3avVAeJT9fyhSsUC7RNpV7sMKdTBEaDqVcDk3HEhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wZhx25gCgjx3PSyoeyoR5cdnrDoGbPWJYoG9n6sXsz2JV4uXaoiaSjgDkVjRUPM7j24ELDULN9KsWX8MEGZo464",
  "key1": "5MpJB35g4W3ua99qct15kaCSTdC93ABwBCjEJZVr2qR4CVUbhmDkkkDxymtaiFiYWCWmBY2TPQQkEbrwLogXkBkK",
  "key2": "3ucKNXf2w9fJdxuKUc6eQk3aJHUJXSNDMJeWCqzo81fzHPhWbEung8gADXFdtYtFtfRqhUDqZnChZjjvJNYtPTqW",
  "key3": "gjzHXTHbvA45gMcZjiJYbLcRT4H7DicFPPLdPgdgiKgwLc62ne2HFnn39yKu9H4h7RGAxJiVDx91Vj7ACPohnM2",
  "key4": "pYD7JuAo34JWYa5XBRthDJ8yLnRZDdqgHQBRD3L5NtQTkNLwmUCNeRc2TgSrba3nq5fT69m6ez56s5r7NxUWeZn",
  "key5": "MTgPDTVi7GtGMuBj16rs1GDyQtSAaWw3zNfb4VdN7qT2J9TWyTQsLcysNLt8vLCsmMbiB7zTuMJ6eGGTa9hxDv9",
  "key6": "2gYcTPdrpGPyZNP31oMShpxyU9yjwW5nkKdy3xtk3hUdPNqNSoeLCCTs1nChABxFRy77QoCXgm8JmR7Hy3SkjAQR",
  "key7": "4hTudrERLb8fYAbUWNNRtyGdTkXjZ1TZ1NQ739D44gkN7SAXojfigEgvXVBvSHprCbh6DKDCQcht12xH6UAuzdvn",
  "key8": "4PSrgDsHAZ8J4EUNRjsFq7XUjpAVaRnYNPk3o4ShBzSTo4eDLwnuNQuLVjrhCvLEtiuHeX5tPGTfrf8a7dXqWwzg",
  "key9": "2yUrdfaKmscb6nfCz1W4Di8r7cGxGGmg36SH41iU8GRWfCuhos2bjiB38SPpZn5XWTx4svYwfaxyBFM4XBazeaUb",
  "key10": "2NQyrrFp5srmBa6Prgz7N4oZAx5qMjRyECC9ioroWhWiqriGYT92ovHxMmbQ6oA6xZhYTPi6UsWthAUpfHwPDc1w",
  "key11": "56fqwqiP1cScn7KqD9wm83We8MgMkXSdCDcJRM4u3EbK34RNsqXN1qP4QBZwevx6eMGiJ2EuhMajyuKJbktHSLC1",
  "key12": "4jrJyotLCGAnhZKQxSCFG1PAZu1e1NqMEBSrTPK2vCdQVK23SmYQtEQFAKqu9aU7YakMv3YoFoqqn2PUfPnaohZ8",
  "key13": "4w6FQdwoqAFX61ebyGYxjq7ZbYKxqR62GfH78E3KTaGMCCipGxjrNUHDCqLsvtf33ug4GhxiawK1BkYctfZNwnXE",
  "key14": "Z9rAwuw5KTBfxcFhFzpZSDvhfp1MqiXa9Rvw9TekNyaSLWMSGXHFFNomxU2WV55xaGvS4nHHfCKpCDWU7XbbfSs",
  "key15": "5Fd4D2hMRcrnqFmitXdFC3H9H4iV3aTYufTvH7Ep1Ku87PCdkBoYZbK2GKqbXRXasmfhn2aFXdREKo8k2gTE3rn8",
  "key16": "jC7Uu8wQZPmQqctfeGxF24TUZ5g2xx2aikLMxviHr5eZU6mocuooTG5DMYcx47xv66uukhq7ubRWer5V8HUEKy2",
  "key17": "2DonUPnKTja5uKnN4XcUNCwXvGSS2Q64evnhmL1tvMeWwHPq1hFM2kqCaLgSkdSzaSfLhSkKPgPuk8grmgR7momR",
  "key18": "b83pb9avk6KgJBaDz4p9b1pRr6cDx32LTS1xww7NLH5m8uNay7MmjkHPryoLS7Erpc4yLimu12p2ZEJhcx4Etvw",
  "key19": "3fikSwgHhrAmJp9VJUAa9yQ4sg6XmXeij65uE2mRJFaMvtJerwKvYFC6VmkKQaoc6ZeF3xMHpV3sz4AN6Mg4jT9q",
  "key20": "Bf4zwLRYKY6TbwTgXyrWNUAnVUzbuc22rvz6do9MqTrvMn5WRvvQ5LVm9EjiSq6EcpUzAq8ZWmaWxAGoJ14HFvr",
  "key21": "3FJgHNcysB6bwP9AA5mtt2wCfRmpWaahuBKkZqkAv9NfRYAVL3s7x3UQzcNXCDzXKJ6XE3X8Yi4P1TBVEDkhbrto",
  "key22": "4HD4ntiRPjsoLSqGnz5HPi6vKvWzLtMWqpFasiTmviUGTfNboHaEDSszvDFrKH2ZmAS5fodtxuJ9NNGQaUNqf8k6",
  "key23": "24y7EbuYJSjkY6xYYXC8cGpNcPNq8xLhpUJHHXrD8WZmoBrCzebPjkPVdgBmw5dgz5e35AEV3nPhFAMTibTcTkV4",
  "key24": "2bSX1yrSpfTpg2fd53A2o4XZJvdCZoXe3X7qvpmFric1dPL1dLK8ujTCqyjrqAd5eB39PyDKGg5dy8HsS1RSZDZ9",
  "key25": "4uJmPHXeyab45LvDcUvSn6BKRhCeURcFQ9GkuKVAbtMUjyZPk7uqmLbDsuKwMNXgv6D3TmnqAihYx5m3z9kReGxL",
  "key26": "3j4X7twS15eN2KsQQSuER5KbXYyZsG8CbJZfWkUenvpXxRiVYmKhnF3Ve3Q3Y5jtQp2tUp5BXGAfYXEEFkenHgPd",
  "key27": "5X8GVvMBMomJcnabTALPNFhmeWwaizvBhHuEv5bqUHiCvw6oCUJPVJ2reWeKJSGq5dbAaw6bBDpgXqf9xSf6LDyY",
  "key28": "514PxoeZA5KmcBwLHJ6SPe7NzjiRZzKBMDW9h1PekTpRTG3P2TfskuTdk7T6NpnPWVfgCzFcKeKDzPyvrzMXCeNo",
  "key29": "mnkwHXu1hEggYkUkt943QBUqzv48c1Vh8uuA9fUiw4GdNVbCA49q1xb7JJHgSrknmCEArf72NLtSpFcRRQCK8Dy",
  "key30": "5FmHPRTPfpMsLGH77ocR7tneHfvvbpDUV91CmqsxeTY4y6PUCBph6wAYYFpo5t2MzuwJKP3NqrkxE4HU3T7Q8ww7",
  "key31": "5XxfgubyUheZwSU3zEfoPKd4JdamBihDuhi8pyqU7d8Tfzddxy1Yr1xKqvu6wivDictYUwAqQxVGAXHyiwCwrKcE",
  "key32": "3rK8wAebWZBHMYp13f63XTjuHFUTH4mNM55xvee4EPyJrUvtWue69YbxcVZ49ohtekeMCrXB58jVsXUXcWtsBWG",
  "key33": "3LTZWNvzGTcYrqcB4UpLYBBaDCPJZAg7g4jdJJRLT6J9nYDhiGXy6CXvFpZY2S8wHTPDq1bXnh1YaY5dWQ8MuUK8",
  "key34": "2RcJQiabmJCSEcfwsYdwmHSQhg9x1kEKftKgAUW96TXjUaQRLoj6mzVqjpMsEh5QSo636zeoZVq9GPJxjF4EiCW4"
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
