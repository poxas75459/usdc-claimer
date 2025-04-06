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
    "3BgNgeVsZrqrKHvwyM2dECCSb9cFJMnU9zbfGsMsUGvvVuewCpFSgbdcytQ4EsWxSNvaeZgyxCkyuP7Lujh369Q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fBQ2h9yzRrPgBdVA1eoUzrChekf5CBD6o4VgitbxEPXYPzMAwpUhCymwpgWfM5SnKfsKAyfxYgfrLjgh3mGETxE",
  "key1": "5jDRy7iZGo3utgwPevFwYKrijYoL48y9Pj5MiPaQvr5UfiZVPy3WvboJf59Ksq491MjKdeQdHyx8eFXN1EwYfYT4",
  "key2": "5kLvGGr3sF2Z7yqMCDnzpp3ciXsdqXG9u1LffDgiW85e8b9tcwf11okAfTwPcLCHBfpHXaVQfGwS8fdiz3fZQh8d",
  "key3": "5dmwJ9z3oASvjM6Di2uF2nFAhtsKjFvfGbvbib6HTmie91yyFQfS44NiS8zdaEhzqkk8gWcrjGWYyg2qpWqK1sQp",
  "key4": "4dfHrBR7Zch9usJ1F9BsFVxseqZSiN77234B61XoeKJ8MzaUfhotAVG9zwNdyoGsrxUS6W6kCWwP3muET3GbUBch",
  "key5": "2gjCMEpwnb7dzXEUrVYPYp2hbvWmFKTdUXr5rmfHhHKvxfZUbkgt9mGzZsJTLQ19DVMFBhDf68mhx5tE82eL1eJm",
  "key6": "2cBkuGA3NbsnZAzUV1M7qvtrWptsFHhXHijvjBgWucCJina4XbKmTBDVDdGDbPUbK2tk8QRghfVBjCKUE3bPnSwp",
  "key7": "42C6dUUp4iPU6h8GzaKoyYCJgU9kxT1TFK3fXXMfHXKv6btJbgGBMFKFAHro8axsJneLR2tntntD253fmsBSVbt1",
  "key8": "56whDdEKnxsazvBqPUccT76hgoAkUAWwqQpe4aXF2UFZ2ebG2FeM1S4JLse1mxidQr6pCeZkJX1J6A2R3c8krya6",
  "key9": "2SUUB3bMQTCLguVSasxeYCAhC6gUGbML8GrwtCYPL3iEFnaGYLthT1wXcDLeZFnnZMSqxEomtuHiDVkuBbkx6c83",
  "key10": "2zZ2AfHmEAft6bAjcYS1kvWreaMepCqJRw2efvgJWnm29nDE5LCpcFfvmZBbo8MmerAzLEaPQDidkhUF9bjzAZoK",
  "key11": "3ZAk3LeiHJ5wfYFcasKqV2ffZkUTACsvB7tQFwCLAXpnEcKMpoXvVqoggcL9Rhzffe2kQTExEHNS84wh8Z3tXFeb",
  "key12": "3Soa6arC483Yfi5ZbfJpZs8bwcjYmvRZ1ya6AmwJjCvPJ2aBsMiKz4nkf42D5AXDqqSgEwib8Mku7J1d7EoUBtAu",
  "key13": "4f4XfeYLufF4VFhsVK7TfiCMVLYgTvQCcW42JAucQU2Xb7mcn3MmCy5yQLHePsZ5Q1ERfFmtp4RXEAVfTd4ZSRZC",
  "key14": "2jVtbMCEovDQQ7ZcZ1VHz43npo4cQfw4vtjHhGXxkbqThHka6fsFF1NK3K2u5QBj8X8SffcmD7FyZUSJWYaMimrR",
  "key15": "2eNZZ3yZGH39PgL75mcfb6zx7zv5hwJqrJr3qLpbB5nvefSLnkeFoGQBGPMmcJgHxgxMGBFo1x4vZt134xp4xYqZ",
  "key16": "KLYx8TWjkQyzDUq4Hn7G4enUCUoBnfomfpk22aL6FJUU4F2uFAPh1YBrFL2rn8oYokew8SAHNqr7qp7YKsUfpVH",
  "key17": "2WNrhZDj2RJt2hbfN8wC71a9GbPdhh4ZJvix7UJZzT8dikuBvtFgvRD19oQTJtHWb3Kjt5puQ3iUZ2hw32nPuz4T",
  "key18": "6251UJHGSTFxQWfpk2FgPk92BpgovZq7SURaJaJfB4Hgm2xevUhMoWbLsQZasqqekEkTSn3Y1Mc5YkQsP3UpgM5S",
  "key19": "2Gv5NsEuYae9g6Uy82DExBgXYsGCdLYT8qnz7AbrzL9x3Q2UpWprf5y13LrkbNGyhZonVgPUaZSV54AnYD4wW4Qq",
  "key20": "27jLpAAbEbVZ5KNSrH64ogNQZsGnvzQvV77kkQCw8KCa836vRPXqLiQt51wYMzwP1hqDW355tX6pxX2DfER7rhjt",
  "key21": "4Q5kwTBeWeMbhZdhz7GjBoMJbWnBkbWMUdTAwPvrES64oEVQ4UsmcuWXe7mYwF4cua85W1Md138CGbd2nReFB6z7",
  "key22": "3gwVs9eKpcMgyBNQBYY8khxtJ2soicxpNB4NDCppRVJHMCyqd6xVYMJxdLswJYda4AXmcW589conZuDYib8qW1ed",
  "key23": "36XR9imoykgvxKXcBSUHAbUnT4XMWEKyXNdbmtKkgMRtJosgU9jweSaT7JocyQFzwNUgjCPD54UZxU9xuGKFz6tL",
  "key24": "vkaottjuzN1pyZNYBEAQkZDZqZApRnf4cAUFCrr5viNyRyynUSjmELbz5F1WLf6RTU1TrNcGPpUGsXAasaJv6Ft",
  "key25": "5k88pqp2GvFGi9jcJUrqYA8n165vYqxz49R9NDAtUVzxQbiJZjzwM3Axb1uFntEtkmFc5UNWh8vKv8CgXx3h8Fwd",
  "key26": "3N1Y5zWbJtbAcenBTdJz561s8xaRmjeFeUZyJDwkfE4gBvDmEeXHEsnRiYu7qAMqryhuX59yNKAM6DiuirnjwJN7",
  "key27": "4ZBEvGx8nCZy7zPpY1tWWnRabZQA2Yc4wqgFW8b3AwAmkiQQ9qYMdV4pVrDeXqmWHeHYeaGtTiBvQY9McDNsSjXE",
  "key28": "5rMEiymh6uAEv9J5EWCJTjwUaYuH6PMDbGYFcU3UtXTLgvH57VCVCPybMGfGACkVEmqwiZ5bFRsXZ173Zf7NXN2x",
  "key29": "4fSsVfMPH3kFQJeqZYEJ5QrD6tqiyKMkaTJePVbfVD4eJbzsQrS2mix6CkxdyUWFeuykAs3JSX1a33zwdW7k3nbT",
  "key30": "3pmm5aPxwnb7f48R5wPY5ZiYpVMbvCJkNQfokXrjvSYXrnJL5V2qEvuH7xDP73hA4zbnRxziJZcqSL8KcumcUCRz",
  "key31": "5vwiYfYgNn7ggER1tHzHrNgZHq2KD3HTmoGET3p95jad77Er9VfowQwgvX9xjdwFPnvWCqrF7RyFVSA1mbzQZtBo",
  "key32": "4g9MLc6TwmbvWcEwPbUDxRRpUQdqQYvR1yVmmXNDVLpmU19eYpzA3z9UXp6gnD9TJjWXSVJJjakjKYP25NbcUbWy",
  "key33": "5Qox9ZaskL2RPJnCDte8xt8HXDvpYXwC8c79Hf99cV5HwGRC3kDjjXZbCC5NTMvfvoD8gicy2VVeA1XpDUmraZkU",
  "key34": "2HvSuBUik9e9iEXhoQBVqtwmmANsbgXj8oMRFr7vmjjkxJk6dNwDZt3GBbdczsyc9UwSsewPtmLEjTeha1gHY2mp",
  "key35": "4AsxpCmKHsJemHE51fNPpquWHyvHbnN6digzubocJmpkggjB5x1fgT3tGKC3YcgayNVSq7wW9bZVs97xEvEvreC8",
  "key36": "67o14jny5PddRvC5PtN7L7DCiytJLULr1vT2L9YuqUcjdCNwrbYxRmgeu36ZjoaWA8oqLo8RAumPUouQV5qNoxY"
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
