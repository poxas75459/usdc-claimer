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
    "5wQXQxAWFXCE6RrzR1SjVU1Qy6iFhbZYTA9DSPmTJzUQmmQirAPWovjsv3KmBvNPP6gDXeW7cxCvdsMt7GoxRAwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TagQJLo655tw21mpHchpjqFiB2EZKtte8HDEHezTVZh8qa51Xu8VBVQxkfkRF8TdwYK6GdEQCC6LZCQWwaJChah",
  "key1": "3hxkxFCzSuXRCzkeBmgDvontQ1k6NKe6B2LauixYXSvhPFNiPG1BLb7jYtriYgxPc63W1MRE5mjpqpiHVkacKsZ8",
  "key2": "VTaVRFj2L1aUMPq91FjyVanjFYbwbzCBfNUre5JP4J3Vjos21YsM82NjA36b8nPFFNeezYwbLtgcefQGsryeEvD",
  "key3": "5ThhVgJmU4SsYSSreFM1oo25BVGr7hsgmYNGsSNTLqZo38p6MrFJMxFLfC9qa4ymE1NoCoVKWq5SWYE4bgQuP46P",
  "key4": "5iuzCibQG4fWTJCAgYVoEoTuqce8BWYYt4NbGbtnEP9BVryWo9qf3HWh5CntpytqivF8AD7zdPBnPHL3gMVKnfaa",
  "key5": "5f1JeVcbRddeUBTfsrnSYNy8sqBxUL61BqSUWfMjo7QnBXhBL2njTLQDZjjUD1UJrpdzcNDRYpL53wENXftvSWrD",
  "key6": "67BfzrJ3p61neTWtVQLhJLtLnXTVHGjk8s5q3aCRiPoLqdJxDQQWGE8WNQgkmK9jQbsR9QHLcLxAJK1ahiVVyJU7",
  "key7": "2TtmHL5zm81rBxEJc4Vsd96YqQrLsR9ArJVsn1TU3g6jm3maoGEdT7Vm6i6oazyFWoQo4sfGNsyv3Bw7wRNrDa9Z",
  "key8": "44UbpV4qEyKvsfh635bTgX6FXi3LZkcmTyCTYGhJKvGBNspZ3TvFDGGj2fsCEVoUkPfTeeJDzBsGhfxGMMUfCvG2",
  "key9": "ptHPmaUV6kBB4QswtKq6qsB1gLHqHdBu1ywVkYW4VZFx8BRXeurtgVF8sw3L5U3ebxZGyThpcbrnFA5rmnJm287",
  "key10": "S1KwQnUAk1S3GJrnsYd7wzQbXhJC16hJTmi6JCNbEj4pWhiXLRzSgyqSqwgqQ5v7R3TghrrRYgEY5ANu5s5aT1R",
  "key11": "3KS7dcmfQWKDy6q964YjgW96AdTZ3cTD9BMn8YxoT6rsnqtbCLNKc8reBrxatbyMexA7TKpN5qpHZRi2e31AYhZm",
  "key12": "5uEa47YgYyiskRmaDYPp2EcGxuCbdvUGLePjJCKmnaTEUkCzSqZqwLfpVTtHEzWVF5Fh1E1HySFbQtuMC7qPuaXZ",
  "key13": "QAs4dZCYKGUxDJvtVFEvFuU9mtHE3YUmzMhp5VDzJGHnEaqCRsbh4EX1kQ82oZAi8qsNmn6WLa71bSn4Kor1oWU",
  "key14": "24UNp64sg3rxXkRP6jArchLowDGC5aWzPPRHD1DfNr4hn9h2yZXhWCthPLi1qrWiX9p9Ebumf6UsYLi5iCeJae2N",
  "key15": "2Hvowho3UqH28nXJ1JSvHPSNsaDSmeoupmAEnu6EzR2LRxncfGsqc9K55MnsDR43oDUL4iboUNeHjnxTzwuikjQH",
  "key16": "41nvmVKeMgpjS66LBbx7JCAHMcHGrwUzagTQ6DMsv16QkbsiuhPhKDAx1k1fvtfrCSsTFGppwYYxQnUajLjahpLx",
  "key17": "S6wjSMgVYSTTE2qZowpqy7D77xbnApMfxFgXJ7eArrqFRWBZnozkBPNuY29AWftjrnV8P35jqruDMJRdcgJ1H87",
  "key18": "2vca6BVfNJVXoWtPHeAjCirGW4iFFwEAKR27VFmpsRSCXYu5sYS7MLvgAHZEWajaGEL3j7j7XRyZgfpRHrcYYZV1",
  "key19": "3cjQ5CfMvk8LaEyrEEZXiBd4Fm2C7Yhvmu6w8YGTkvBzN8DZwU2TpptmVWJRE33uCZVjioyQDBtmEBqacCmLhVBk",
  "key20": "2cDG1CXMjeeKZcgJfxi1m1CWtPJRg1mz5dJLfM4gfYx1RMqZ7t8ymuBKjHA8cFNxhqsB7DFxsqhdAi1Q1EQgknJu",
  "key21": "2vMz6AztUuoEBAyb2DXA7ERyxyEvLaR61SbDrcrh5vfa9pCPGXQadsP9M3G8S5nVhzVaQUsgzEWXB7eDA9Yrp8G8",
  "key22": "4Ty8rZfJRSmDhtgfkstwZnLbTRPF8XCgAgk5sPMi8Y5VUoUaYZVYh2oP3gp1Hw39tcxWSoRUDbVMCWMqGzwNWvtF",
  "key23": "45f4eZ6mQjK9gVf8MSv47t9bjjBwZiGaNoV3tUorqVqqCLz9e8NiC611wB1mqjhPhGtapoc28VaQWpHzLNpXpVxt",
  "key24": "2uc2hVFYeo8CwcSe3Wq96nN7WAHVejpjbRGigzpuvqL67YXreGmjFHVCYmYjxm2iagANRh1MgDbUKrUa2Y2WdNHy",
  "key25": "wHvZ4m5dXAGLaUGCywUrhBEQ1VDYyMCQcihwNbZhT1P78WGeEtQMrrnrMMUGkFhECoArBgBt2EuDdFDXoLrDXG8",
  "key26": "4YCzQLFhjeFHiHvJAKN587YQbXm2kx2sH3JotXfo3DjmEKK5Kzfu8CGszGdzGkjoPPXQ8jhxWXLU6UUyuPyhTyQm",
  "key27": "dmxKzrUvQom2Kj1fSv6x8ecGiTw4AghnXsh5hU52xiWqhCUNbLzmPoseDn4QtQm6Fi97Cay7chvZXBRpDwuiL6S",
  "key28": "4MxQrmzdH3CcG9rg6Me8ugCgntqWBjxsUgA8hLk8TmtfMsmKvPibmTouUhS3nX8jM6wMGYBL5Q2dpruYW6Zf4b1E",
  "key29": "2dBEvJb1zsr2ctTB31qPjtbWAbmVKbQraSH2powC7BV3KBjqGwCcDEBGyktxkFB6bW2BHJB7Djjace2wrfbSMw8f"
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
