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
    "31CRtvwjqCCgHVJsMFNfHWJcPTP5EobFJNv57FxNRjR96NutrVrdgcXymY91d9dXsNgZdCN8SSB1Mu64D97YWyXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kDqC1trgSUyFF6Lj8qFGwypjd9ykJH1FFRjL5ga4Y5pfz4c5SKPzzfJC3pU3gDbJaJvrW7oCQgF9YZ1WSBceZYD",
  "key1": "5geo9DLxFT4jJHfkbuv6HjKDWqBGwrveNtjyAuQR5VXVpjEDxjrYPpQuqbSnerioMNJfHG9oHwr3LNHRcWASE7Jq",
  "key2": "2fbVywYfbR68WjQtHzzQrXj8LKayyeYdVU8zDUmcnvZi4BsaNFLMcvyMPavVQRh1yYLjL7HPNDrcMwoN7jd22xvp",
  "key3": "3AAfH5TQMShMxEeR61Ku2Y8GZXJJ9T5hDTgJusBSejJuKpmhqjBkVk88NqKuj5thpCXAYnZyHkZ7cP6j5LhSGsbv",
  "key4": "5e44SmEZGsbd9vF6z4AegsUSgtHcGRVjhqqFVFj23NmXoUqdivBBUMp2PmhuZF3uy7rUDUNRiX2chFJ8N7TodL5R",
  "key5": "XMbMwPFfK6obfUhC6o65Lren4pfBFE7aBtWXDpauHrnFqRvi3onjGK9t9AgcprTsGmtyUCT71q8k9MrMEgTuMwP",
  "key6": "3wSCUV7YC3Swkhf5vHFpeisptRYshYLxEW99J3geZn4ZkT7fTT2dLxBFACrYstX1pZgUp46r1nLF6jVEZ2Cjiwzn",
  "key7": "3peMSj5ifd1v8texuooQpryjJksL7fhecpEeaVHYBeMGyepJbG1PYAfJSVA3dNHcrVSjrQT2cf4S7izk92Nhf8Su",
  "key8": "3JWBU9X1HWaRH2nCHar2MpmeCoQ95gCh49L5N2JxXp264qRQyn67ce4dtnJNCCWVcdGAdijXhGuUxgNTQc2qRrm4",
  "key9": "4BK9noZUZiAaGFUnbeXrzUBYBCbcZAG1SnmcWHW4J26VTiApBZn4uFitMu7w953yHintmJTw9A7STrZu4eTAor9n",
  "key10": "3cyt58jbHDUtWf1V7J3PDQaZfmcYmXi7U9i5ngDSBLUwDo3o2RqFyhoMtZfXjZHq7rtzbHnHvxPG9e45PXAicLht",
  "key11": "37XXDbBQXyhQfqxfZQbuj1usXMuBbrkMTSkvZpg21hQAcrPrQy3NRrsGu2vzFyM4PebiHELyCYXerDsZtfhNvNU1",
  "key12": "3ZLeZtzPR4V2M5BVPeQvirMWUb5WedqgHUHZiFgY9otGbcH2ZHDWGvHbcvqs7zd6s3zNp4bNhk4QZv3Vsvm4Mw6h",
  "key13": "5cncuhewA78XfXMoCohan2H9GmhE57LYGuvHakn2K8Ag4PmdKTzgsPwwjtkLWgjdg1GddMj1LZ1TnzgmcvyK62r4",
  "key14": "5qUcxjSHYdeYkr9YaMwWb1ELfYXUF9UqtX1eYDxTrJNwvAaw62Ux18Pvo7HwE3h3r2an7sihpCYCFUUVxSf4jRti",
  "key15": "5SNn9sZZXkcVkTsNG7iQF8MRPbEyHsx9efhco7m32tYDE1HqttNka1jnUyayVUea3AzRqC87ZfZVYNZvk98q5wQW",
  "key16": "5917yERQhUWWtS9BR76ohfGUd9XgwPVyS8wVcfWkxedYdLsAgwCPhycBuxxJd6RfsY6S5aTFowJC1K6J8tUWxkk1",
  "key17": "2FsigpjYSaCGTRJP19kcYCG1y2v3zLMRTLt8wKKqomvVXpSEQ9qdjZTyWPQmBiubhbiAvgWqd6P2wzok3SXig3YT",
  "key18": "yk3ms54TpfCQWvYfBDZSp6boyGXVsSi7E612Yi8wAkYAj4WFjLMwFwWM4VDeck8GQFojysP5yi5FF5cyYs7pgQW",
  "key19": "59otBWsogXneQzRLqxZpYqXJ3R9Sn8Gy3SgGoM2CVWytbJyUrJzUnjp8EeRVBAskyptKWeuoAzYwcEDj7KuQw1Th",
  "key20": "2D6Le6kL4emH73FiYVYYeXjg1XkqjepnZ6kh95Mvqa5PR3bxjRH81yLb4G2gud8SAbL2pwbB3pbKDyFLYUAHW7Wb",
  "key21": "5gfkUFxGaAU5LL1MFRtiTQw2ws6RE4Nn2UUH1Bzf4NzPCDdHVCVy8gVCic5YNYDuTYVkfiBph7QsfmPECBxqb6i3",
  "key22": "56nsWmkFuufgRbQ6yFdsshaQJBWsiwjUTzPWnDbfBP9EG3aCRBr2SwBdZmeepb4aszugATKdSxp4uGDWN6SBZxN",
  "key23": "3kqjvczBhcVMqeBTgG3nD2oSKR5SLC8hMaPWxYG218JWhmiTdjkZDXXbFdfYbzW6etoxVvrtFm7BaAQPeL2J1YZ1",
  "key24": "zEAHRr9TT6CjDXVAqTdHHYZRebbBkz2JpSs22vVNYSSi5Sz7AXv7YuMNbyRGZxt2U9im1pVNbPg25ztoQVAg7wz",
  "key25": "GbGF5ah1Qz4EUDhdAe5LynbtmcBD5QfJ8A8AHbSKusijZ5rPBKKSjSxKd4tmaGYWw8hwazPeKLPqRsufPncD1Nt",
  "key26": "3fGFbxftCyx45BRbdEQKhTsJatNsx4y9Wj71ghH2DhxdaJ5BMMpMshgvFhW9RaA1wtMNocYmnnHftuGQukb6UWJt",
  "key27": "54MLuNvTLbnDQ8pMVt66MQWZGuxitUbPUt6Fj7xCxmx7A2eyxGJyy4k69etSDyyrcHECxSxMnRMCvWYNoUMKyv1p",
  "key28": "2qh4ALipoJGitSU681kCDkKGtFhcpWptBhWzrtr4cKw6PTkFk6pAVJft6kPbBoTx1YBxRS7zTgZbG471WfgeTzWz",
  "key29": "3i1o4wZkzLHT13emG9uqdz4yqDpmkV7Ec5X9gjbhG3oSBMR9NWF892WzZ8Lyp8FZBH8H4HX9e3QmnAL2pLJPfmeS",
  "key30": "4DnTt28pUtZEFADPf5yb81BynKRzxVz7anjaSDSVdBnMoQHHG3Q7eynYtCVnUyQtTeocihMyFStq6QiK2gyhyjCj",
  "key31": "5JPup8eb5y3mETiAESkqhePrsH25RE4CQXo3sqK3retLTC2be2emvxCt4HPPgG8DppyzushGTE9AcF2fUoz6Cfqb"
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
