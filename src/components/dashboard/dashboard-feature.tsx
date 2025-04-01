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
    "5gioBt6MhTb1Lb2sxH7RKvC2vJdvwxdV4ZUuUo4r3GF29WEcUQEtmCS2eanM7Afp1MdJb7oN89tDJYSdQL5p1XRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34hGRzAZRR2rkh1Y1PTgTsgsXUVEkX764PVu59RQ3xYYk7uunaQZwcxbsnnFchmHdm1k5mnfVXBQUFpTrStHUVS1",
  "key1": "2zvve8MtPHD7gfBHTVepJ2s19f9L3ozrESGYcHVuAWdB3QjCgc9aaiiCYHRSW3MmEqgNcXwQXvhNvJ6CQYcbnKqP",
  "key2": "2Ki6JW8s5REtb7tiJo5fbC3YVWNoDCL8LwgFCjJC46ZCSqjmKqyuVdUfG6Mpnsv9oji9RhDnkKinWzzzsTQKvohu",
  "key3": "3rT45hA2qHZ8JhzTsvXRCBZR46NWzLRU7y3GnkUU2n3bnenvBGjGDuLoj2fx4ngSb3MCwrqHWAXNNSyKoYZgRHNj",
  "key4": "23ns9GjqWdkFWApkgkEpRkvqT8ZmqGstFf1Q9PD6R1Xa2etxhkpAXay6W3Gomr2Q19sCMDwvY4gG7x2hYy9EChFJ",
  "key5": "ATCzddpGovFWCWtuQLzi8SZZxQc7WJvf6iByAkCMZdCP5EXGefqRs5aVks8As2XZ7qDBtFky98M8LYHjgdyNEZZ",
  "key6": "2WyEm3tdQrWreBTwcrLBGQnCcKUQuMBwBbUqgb76XAJrg5ffTLda6Xe2H9dxhMNJqhQssuzNAwmbsYN3RAcAwJ7W",
  "key7": "3W4SJtGvrNFh5bEQtFMdSUff7YqjWAoJoxfxtvM5wyBf7TRrWERH9ar8uQAAm7YoEnVUtRT2TAXj4Gnfevx2KSUY",
  "key8": "2vC5j46VcJCMDAJDq8q37ypwpxjtv6oAMZCoEfh3v4HBG9EBzqGwm5cTfFe43XsFcavipWTRKBsFLSjHTC22NoG1",
  "key9": "5s9Jdj1BzutP4gfStUVWuTokGdLSWK44YASFMozge9ZhwGUSnbvGKGwMjN91mev5EnDdPVToH6jKYhPmMmcMPAin",
  "key10": "38uSR6viFFVcXaC2mEK4krPnrJW18mqEBhbbT62CCJpu5t4vaGnECbNf2g5qrF7nRGJYVkMpnJAt4z8F2SSGkFKS",
  "key11": "P5Euv1YYL7ky85dZ5gHLQ6gtsmKnj1TexJKvE6ps2uhnveE8hJn6WguBkzqsJBbnR1Kj5A3h3a2wYth9MMA9ZXo",
  "key12": "3BqcpqLLouVCkAApjjdQASZCWM5RtwaNwe9N9tbkXHsovqRF4YEmt1PSSxnn428nSqEq374LgvH6Wkyt5CFqP3iy",
  "key13": "2pvfPzJYqyqtXSupdo3tyXTKmRgaV1T618gG8HFMPfT5CmDvsS81M9eFgLp8E1dBn5ZhwWR9JrGBZ65PqAZBmves",
  "key14": "3NWTdeoaf7w594F9HfSyrWEpGa1xzw4enMN9TXCjwg43ohnDm1pSeWtZp8hNCYLDm9GnLqFaQWpwXLbC1rC7PWv3",
  "key15": "4WD6ttGrGb764rj98eHiaKx7YVQgTokxze4VoQgarHJVrq8Q9CNQRPiHbS7mXj3cVsWXi4FmRwqP5hDFsFho6xHM",
  "key16": "49C8KatwQDE3amV2dxujahnaEA9h1TK5UmQxwVQV21jSrdCi8c92GNgxTqBfH8DGkZYLDHkosZNDWCuYyA5GWf6q",
  "key17": "2kJj2ij2VzZTyjNca9j6DzAhhMJm5TZAQfNP4xJeDjafhMLFnGdDmC2mPdJY7bFhzEGThXi7N9hTQfLQrHfLPX4W",
  "key18": "2xwVPQNJ7uEtioqmF4Ydq1i8pdgxny8jEoin1wfPoPxGhGjxem3bQqNhDDxkG7GAiBHDVxPdsKAyhJXSVmeRVyMW",
  "key19": "N2qo61tdLqC3JEpqhEoH5Vo3BxWvpLhHguoqyo1Q98VdersLJ8PzqrmNRh7kuy99LAf9nr5vTi5ifAhAEn6SvsZ",
  "key20": "te7cBXo7oEZ674HvM1NrchTxduTkgbAvtS97b7aH7AzXEW3J4ZeQ9bGULH5RTLNvsv6VF9CWyR4uP7n154K3D2y",
  "key21": "2a5HFcQkaMkL4cmjgwWJNvzRFmwwBhkKTDz9WoVcPvX3RANjen25mrLV9E1F87Q9iTDMt5Li3prNvUBux2UknH2J",
  "key22": "4VDEQzhVDG7SFQce5VvopQdhNSxNMkqcWrdMEAR5U29FpkWD1MTj9Vo3rz2vufcdPfi8rWAUnmGznvGuk3uMXWgL",
  "key23": "5HCwDh5D7H5CsUQfaLrLrFwrzNevy4mT3PB5jgRy1tEMToRNPTPjoEDAQyYs5KWKeu9CWAyQDCoqAGTaLxW79BTq",
  "key24": "4rvWhZrYSeQiJxc8tPHzQYGekHUoupjS1bDiBusvYx4AfrvkzzxgLTxhFXXKaG3HbhsGj1sf9GzEomzSrU49MzXa",
  "key25": "5wBMYoSEg3dte4GybQK7WQqqGerrDWxWoKCcHnBw4TZ8eRxhnNzDCAP5JzYwfHpAQ1bSthTpSfCaiTqBiFRacgzw",
  "key26": "2ZDmotyXKyqUhkgMXJMDe4hPg7GQGeisueEZBv4aFcA5mpH2ToxZ8u9QTvd1Npr1Jz6KLg5Z3zuYxqM1pUzYR42E",
  "key27": "2UfxBQgLbk5TCWBE5PBadDehuniKsVRj2YoA1e2CHbyBUGWSJeqCxociApXJ4nuteF9odBE9LjA3DfFLg6auWTJR",
  "key28": "5U8wf7bHk67WYf7UB3VaaPaCSfn9fBUNRPFm2BanRccyVciCn66GA51Q8RqkrrL32nok9UJVES7tmscZAgKwFK4i",
  "key29": "5nJpoWP5sdvHHuRRmkARcj9eXNzECVkPjLV7YCnYvTrjnQs7ANX5euXm1M6AhSL7dwdEXHE7fv6ct9m2Gi4R5det"
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
