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
    "xxtdLHeNSVsmVc974bDiNkr7zdbFMASUivWEgNfHPTe5H5xSu1UvpXsuFqMG49EfRXpdmTpjQJ9ZdzaiTk1MMLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MkXt9x2hdDmHRiZgzdQUwoCBG54jF8yq3bxrFBHCHepMGv4EV5J1yeiQaQCnkNpiFbDBK5p8qux1Jrqw4hEJZah",
  "key1": "2UNnibmsMjNi25S4vC9Con1TqScc7AJTAK9nzmBcCs2rHP4QBxLDtxB7e2NAqaB1MLes7dsmiMniiQ23mtSmu1Ru",
  "key2": "2HCbjJmpaLKVKZGMnm6pXPdwUvhwyd7G6Kvv3oJTdvL3QupTDqzrTJy5pt9upbPCvBCupFiYhHPuLaryVxk1UmPJ",
  "key3": "46ztnAPKTczVpSa6J4mWW4QniLjkV5cJgb6CJw32RWzLLpawwtDr1bs5cDKt4uZCiUgTyx2VfXwekpMtLyM4zLiG",
  "key4": "431Wz5VSK5fZmxWej25kzAEwmL75PvGPBV8ZswEqGTxf26JQvKSUex3dSirpcyong9b2wo4MWm4nPjeU56VwWUwk",
  "key5": "47Z25u8U2rctdowA7B6yMxmUpunH7fd5fmtks7smL4nxxs6mmJAFWLK4dkRc6PacnyNaicxbyLFNYZ3ZHegefFyp",
  "key6": "3YzKVY3ycSpQYXJRue2z9PrCGAXAPKaJob7u5zakjAP3dtcjWRDw4BhXqvNuuiNehXp7oDGQrLApiDnh7gWYbEu1",
  "key7": "U5h65guLUKNsTe2UH71YpVwnxaGq9i5PPzfHXvKML6hgrMnWVUjHnRmZeaDvdTAnPqhEvLwAaSxZR77zEyq6BBE",
  "key8": "dhBUvHrVnnJXJBeQDqtnwhyc1QAKHMJU9daNpo9QnhrEH3qdevqtFFudWrRTzbaALdTnt7vvFzWfjVxyeXWh3CP",
  "key9": "3oniZ3MhqAKyHp65iaDL1mSjLj8CxvDzSmd7TLXLZUo5thWe99Ds1DBuCJwjcoL1cSA2sWJXdqLxtGKB9PDREjA6",
  "key10": "39qFzkLWCcsaEgLT3VCzqLiGkdD5rW16keNGrSMDzDaGQYznkRihPGMhEBVDXSRDenySEn5P8gwbDvuYSUygqevL",
  "key11": "2XidSwnphu1m9xVYtarpNPLNxyyx6iy2fXZyFCTxP5HDpuL2faQ3XMzFpckhS4aqE2NNZ7zNYbsvkWov9Kdq5sLo",
  "key12": "4B8T2sCjCjWXaJu8HVxXSiBWe8fQyVjog3XHs6CfkNibhjJgoM8oYSaNNsZmHiooZimyxU5jsTfKAyby9tB71DEN",
  "key13": "wV1PvmSN6bUTfHgt3Q21bBqbHWgxKJjUHebJ74qgruNLipoREA3fJetrhpUwXVSEWa1AeBx6xNKYzTJNyc3q1MB",
  "key14": "3DHdAxBCCFD1Mj2Zte7DPVPPJAkmyWz6N1cuCvfcCtFSy1MQeMpdkojVFzsVhXRnpsdjNYuNGB2cPFrftGNCcQM2",
  "key15": "29odyBEjzjHnxBDxJPDzNvuEfRqGQ61NdT4i5P7BxV82bAq1egij2zmwtn8hgXihXkH26JN2GBxyXh9Zw51jgFpE",
  "key16": "3t9KWxM2NaWcWFRKxx5CQahbouYrWukuM3vynrnKrKWKSuyi8yskw5oD5Kyrncwsok7d3omix8Y5B719mxJtwU8X",
  "key17": "4rtzducEfLj9xopFJ2MoQzSwm5isNEL49RF4oVFCxdtx8cJiM9D49gupX8odn7VphocFxGNY3EwzbGgiCNUZ1rBe",
  "key18": "2KAe5iRVNdNTh5CpZhCWGuHJNYUYXX47r8pQLZPtdJuw95sfuc5RFdMguiNL4AHCBtFyUJA1qajJTTvDBeYYh8ZR",
  "key19": "4F3cxv4BFR2sUSAzKG921yZPCCfp26oE4zdPwSJDzYLabot1qe2PRAawNseyKciGbDqtHwVkfms8SnNfqMu4iueK",
  "key20": "3fhHkGbxfDpWYcZaiXYpKG4Z8a2eiKEB7gMEmMpwMmJZPDwVTqxjGKrixMh7kAaxPGuJggZWzFY6T7B8H2477wdP",
  "key21": "49Rr9YZEjx5rpM1KLVMsJnmFUT84HeZGGTVRsFgy7mHToh9P6t4LtCQKq2qmdMUyF8xV6kTBTmqd2Cyy2BxshKFK",
  "key22": "2v2wUgLzRWZkX3sRwCTY9PVp6F4vDsizQrvn38zCWG4cnWc6cQE7yHZDVKA3KzwQJLRMyrkZBzPQCq3nBZc3ijHC",
  "key23": "2uEqzmqoBcshm1ZczqPEqj5mb1tBzSTeb4iBs6cFv6qmAn5p4ZTY4PRvkvmk7Lnp8MQWEvXyifxqpE4uUj89kcB9",
  "key24": "3dDjpBUyw1e5owVrGsh2oqa8KSVyUEnZbEBUCQWFxnMkG29M5GJ3x4XoPTjpNB17M5XaTmJysCWdi5z2bTcyiFJx",
  "key25": "25UrAMQPgNHy4GFgX9QbcMhj8vUJSJF8jp5WdWPDpQxqBzUSjx72g6FZQ3tZ48922p9Stf5WwPQGpa6k55urWsBR",
  "key26": "4Vri6k6c95xKi84s6K3fDZoYiDrefRTkPCCZ8bCjCWLzwwCGU4uSpCiBrqqMiSxQkxFt47NCmL8jfTp6GrXDA6Kj",
  "key27": "StxiMGGjUtQ6HV4RXhHX8nuhYroGanvm9qMc9GsvY3ekEonxQZp2vR1BfJtPz2FEYDkRdq1sRqqPUMMRCdz1Ym2"
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
