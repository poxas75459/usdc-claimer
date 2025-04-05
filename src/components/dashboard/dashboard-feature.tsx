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
    "381ZpAQasmREQQNswaCxTZ5FLdguuPS1hVrARBz1s4SmgPgcFJozVNXtpcYrGe6fvD8PKWJxkmztPXW4D2fHsfJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ruXjjPjNHckhYXdvyd1qGYeRVf2pPvLcJVC4uHDXG3ZjDQXVTNKva4kwRUbvDeghFjVwqyerHRiGXRNxiQqSFm6",
  "key1": "tkzNKDSvHyx1BRbR7hwWoNpzwQ9gmXF3DAx14VaE2epEfHRzeqSsgiZBdxpVDWdbPG72sGnNL4GeRqgkiEpdhiq",
  "key2": "3vjU4P93mGVFpQaGYqRCpPU4yAgTZRvkSXbTjGK2dxj7N18XrV8PPAoKMnpVRRn2kmLwUh1Y7YLrvyQtP64CNKTD",
  "key3": "XCzXW7JLt1TEUNFvPsxMkBTM1rvRWbddWENPx4L9a7iU4SyexJW2LL7kTgzW7m7xeXmhcCUpf8i1xnFSyuZsfVL",
  "key4": "58sHrstmEey1covrQwAEC8qPQXsZZPTKEsWLa2apry731c7tYozkjgmgReLpQkqasik6TdzFNUDEfa47R1GzJCfq",
  "key5": "4BKfY5WAeFHRL8aaszmmEw6YhaCWKHLEqefWoCLX7rTo7GtZAHewuiWteG7BZuwzkpshXqNtWWYh8h4itRc4vvSF",
  "key6": "DyfhoL3T92pAiFd5TZhTF9eEKYpZHHfkz5X28BFmxQbbMndWSs57mGvdshVoMmA4pAjte3oPoy9J5bb7kp3YazM",
  "key7": "4n7tbA6ewdi1aWRefv9baimyUYN9E9fd1TeET1gPVjZvw5Jp9ybh8fQ4vTuHxP96yLRUqTiaRuoJzscDKgFxumgq",
  "key8": "2SwxjkKLab43v6HEjkvr4x7jNLjR5ZZFHByctaVVsLveZb5fciN5iV5hwSCXPh57aVbLvMTxkKSyXhrqF19H7Pk1",
  "key9": "5DngSCqBrJdG4LdFnKHNJF4m6P3CN2HjZphb7bxJ5jr862GmeSXV8phirTY3gKQuhKk9NZYVxzAKfgZQSz5L6jtV",
  "key10": "46tabMRsHG6o8pPWgojmaiUdHNETwEB7QM5YHgWmEKmEzwbpPL8uREb83PNfAN3cbAvkPN6BEsL798H9DtaEZWn8",
  "key11": "4RoWrnbqF9xg5hfEvUXdRgnZHWdWnPuHycCjMRynoeiP5VE5TT28srSNbmPUw4b3rU3hnPHZoYj2tRxKyCFuZAjQ",
  "key12": "4KvM2GCM7rzBNzEddEvsSNoE7Zn8UQHTgrgBFWL43vshokwcr5UHkDs6nqwQStUy7rseC8MpeesNTL48ppywCsxA",
  "key13": "2yS4d4Ne3cx1pXVeeTYzubN6qBdR6FRkVH8CKBtVWKZtBU3HaneQDYis98MCYas79MHJSvVe66bQRKnwHiydgDm6",
  "key14": "4vg22gChZyyjCnmwh7J6JVDxeZxS3UVWUQpWw58rEdmMEtqAsN6agmoppBTx9mRfxzirfbwwCGpMcTjXWcY2oSJs",
  "key15": "3NYSxSsuRxagaXBVbrLcEvc1XXzrkip3FEt6KuazNoBj65oETZbWBzAwuiujqyN1y6opJpYnYetkvGdV5NbDu1mE",
  "key16": "2JSa3xGZv4VSCpwxupoWEw8Gc2RhGyMMvXzfcmFexA2J142WRY2P2xwwi1qfBDFUio6ThgqMo2iCuPFbZh9kdhzj",
  "key17": "5JpDLrJeNvqy54Qq9Hh8nmA4krmZFicJrtAZBBYMgi25224X7ASR2aS2SiNmBbUprwv2GddHTPD8fvbUrJ12yz2D",
  "key18": "p7sVkH2ZXcGSGzZV2C7SYGRuWmw7TNi4kit7kbBHpH4X4CV98bZCziG4fMBuFxzvRgbZhLJ5PFyxc4zTDwzzqhT",
  "key19": "3BYu9SWDfh2tNWAX2pjjKvF3NGce61f4Duyabw5rF3WjFzQqeg3UmdaC3dRy3BBBLPUqBSUcTpKkQ3eSG5SNCagp",
  "key20": "2wkXGyfuYz8FjboqutqwzPjBLggPy4p89GKAUbQGWxzhPWK1eEm7ZnDrr4JLF87SjHCVabHNdwQXzK1GcL3DAR1",
  "key21": "38sXL32tJSiZqDKyhGqytKdeEFA3YSpFiiqDwioFgKxGAwJyrrJuhAtMVbHnforCYsUhB43YWgbo3di2v2xStmkP",
  "key22": "43uovi3R67Nc5y5c248TvCQNjwGC1PBVuBs5C5Aptp2P8A97aL3z4a2zcq86cEunXgGE3B2fVs4G1PsyBpsZBmCo",
  "key23": "4TudGzzFbEQVmbfzTP6oHAbiWaHqtDHgkzsCmDDuzSm5Pnp5bJidmdt7WDoGbgmGqmDdxZ8iRaj7iHWVDVcFNdzo",
  "key24": "5vf8zbLKt6NN8TGpdMu4bvcYJYMAh7fSKy1KS5aKUq4UvENyynmFEEzUJM83xGaHerfwpTqigFNFV7yWfVBeDMqj",
  "key25": "5m9UdH5wPTS9a11wUQ9Fen7rw4nsemcZ3GGXWuqBp13GpDNP1XaRPvvQyAh6jqjK2hPkfz9a7HN8SYkTu6kyTGTm",
  "key26": "3FHp59vEsEpbeVps8yHEsqYwEYxrsEq72f1DBakGN3vYDxWKjxF6f58Zn3NnD1HRmGJdbwmCW9SrUbspUR9edeFc",
  "key27": "5ZCoTT2nArb46wbTs5BHmtRZ2So2zUPinipF9x1bFmyN9aanwSkShwms6pNtJ1J2JdHnja3qsDqXgbgauomoKa4K",
  "key28": "rTA5rnSTwQFPjHBJowhr4ZzK9s9dJ8oJfRUbwyxieevTpL65AsJmG6bpGo2FkR2nYrrqDdsHe7hzBnGryzN4xVE",
  "key29": "3XjLjR969n5e5xsU4TMzcXxGjbhFAAKi4iP2cqaZRoMSTijZ31aJM6oyEvWr8saMhFBgABULn5hu7UeHdMUwsayi",
  "key30": "4RJKe2ZkuKndWVmNDKJcsrSszPhf3aCzeQ8oGi5wnLaRocz8KxVneHCmN39DhU81MojT6nhxF8S8paf8oUjepbiL",
  "key31": "2yFD1mCmFkrrgWqLkZrPtAG8g4c4tXE6NgFCYSfqmU8RCo7zgLMYPv72XuwquQC74qywKVUVQf3e4NqhVmHZZqN5",
  "key32": "2Fqdr4MUtMHv6qFCukcvGSZE2H9Wq75AWEUB4aKRaQUPEvcaKNjtQH1ypknNaLr8AwaRp3hYMkqtzNGER8dhYFR9",
  "key33": "VU7RwzmnJrHNTt5CdYSPJiJnwFVTA1NW5ydBLCbrBBP4Fww2fvNKPnsPB3tszMusrupMePKYfJtogxNxBtLisi6"
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
