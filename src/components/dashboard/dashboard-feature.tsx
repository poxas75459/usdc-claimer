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
    "2sqaAgXom6mJUjgLAAysa4YEJ7oDa5mW5p4n8ZpNPspQo7J8SCvnpAZrFHawJns9jgpVKMPrVVgCfqCyTVo8nYGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h2Cm7yJTptVCsmikx9HyzhskxYYThTFsRHQDKdAaNKnsScHze5ACe1KjTshcPUugnLTXBQHLSF5FkctnrEVWscL",
  "key1": "4LBFGts9n16Ns9796ujuBx9yqSvqotiXfzZaWhFpYW8iqUd8RUioAHW2FG24B9YNX2ixQuvM731g33rj8nH5yPP7",
  "key2": "4jtDqq7WTkrEGDrAGkDg6QBAyuiQvPCvZBCQR3WjnfFAUf8z1KbpsLgjd4WxtYxneLzXnuKpTRQHebcwZvsNG7pE",
  "key3": "3jiSz96ZqNNuLBCpbYWPes7h93UyxtCq4vc6xnD1UvLXgoxRKNrewsam1ksfFzsm9u2CTrjDenX1aTQtwxGz4KxJ",
  "key4": "384FViR5iTiR94TCvfeWEdxR9FNjHR5ceEN2o5rVEARSre1Po5FjDid8xPGxyXnSKtreXi1sEEdSC3r7nHcJmrNN",
  "key5": "2Vf1g1S5NQC2iZy4RZujUroqk1djeXY1bxH2M61uStZ96LXLS8Um8DNHqRNRZGiMnZg1eneDpKhVY6pkZuPr4eb8",
  "key6": "NWCraPN3Lfqt5FDaYTqTMrNDtVn4vJH4KHS6Td3St2TyzLdJo8s2suN6e1tbUdRtz8m4NjHBD3Y1ZbyP1LZd5Gb",
  "key7": "3mUtMbdbLvTbrgVz1rgfxFtSnuXWhHXX39fmjeSMC7pNLfsb4AcWLUkxdSkgWqAcm7B78zyf2s5NnAUrTHB5Exnz",
  "key8": "2bJbzrFAnWErdUcmLRM6A8rys3WPdyVjQUWApLRBrFPXsXwyBaoUH8vU7X1V8BJ2QJeb1kzwAaw3NgBavtdL4W1b",
  "key9": "DBgx4iV1vZUHHhjSsjAXrkMAvhK1X1it5i9fwiYvp23ZPCbLcZNKBwr4AKT44Swox7Y5imCZXfAR4uF355NRmap",
  "key10": "2JnLW3YB3SHzJYapmRgaMgdRbmqEQ6BNkb8KxU5sqsJE7oJd99WamYQyGzjXY9A1ZBJgdfAEddA7TfB7dZeKu12a",
  "key11": "26kUFTaKC2LNmYK5wVj4Hfozd5FQSBXrXRHJghVPTHVynun3qnFfHngK7xwt3bD3u8R8tLpFoFufo1TTp1oGvAFB",
  "key12": "nTY6BLhDks63QPRgQXnEwFuZn18rzaVqcyDLy61iZzxFPx86Sy7SahKgP17rWCJxq6PSsd5ZBBxAP3j25wkj5dd",
  "key13": "4zeWZpSwcqaYhvsQJCuaebuEAKddzvEwsG73xVXUU4xpbZzdM5V2owegor34zmpPkQhUG4wUDCHPY7L6RfebbKKE",
  "key14": "5gTAEdasQsiHvJvu97kbNLCJ2kJ9p4LjqoLNqSpGzde8y2SfEoWiqXzQ9paiPDbecCziCt1trbwJcCiKzj1h6dEE",
  "key15": "3fNkMBWkkNrydqkXH7PHMWHnKyh8BznoyCX9g59638U6z5Ampx6EzmAdZxNijvjGdTSDbzcoSKXmZ8WUcV1Xq3fR",
  "key16": "5DjqidbqUYABvSXNw6jDzaRFxceVrQaC5Q4U22HCmD6wgWWdNRhH5KhsWyyGkGvShLYQh5zhvjFtaBiQrbHGE1vk",
  "key17": "2DP3tHeGAATmKs5E5YXXGd7BhEAHcbcFe6jbSAsBPqAuvtFsNsFF9te8az44vhk8V7jAzehmKhK2ZhpPvv3ZfXCJ",
  "key18": "32GDapibuRWzUCDkwcszjZB2WnM33qrtgryUdw7U3ZNpFEAwdvjdW1L3m1UJgL7sxfqbNRteL6RPKNEKrvbncBMa",
  "key19": "367SQ6y4z9WHsAdyPqcwUwYED9KGff6ku1i3bVYLVRp6DXpgBq2tNNzNMUWGgkYFykap9V8dXbjJF2cEc9Kn4V3Z",
  "key20": "2sZ7DYgLtEMhc5TP1jmqgtziNpgnB5KL7z71dWiQjXL4NLjjiFCM7DNWu1UGqr1rxB9SeG2xaJ7SamxLtDSFao5i",
  "key21": "4TLQVdnZeqCfwAzPQ5TZXeepi9gUq9hmtm4dyXJbe3TS94DZWiswSyZSFXTHhvNVbqJe2kf7Q4GkDKHK838VpjAi",
  "key22": "6VcwN8nTUsgbVB1ZLAjwxzFp17XrH614F3tDLWbYmMxqpzRWtoLze1G3SGptfUnMVJn97AZXGxSs1BGZDBRK7pj",
  "key23": "voEp5StSjQ7EVhCvBPvZBJztCERcQrtV5B5rfo4NfuHM4Yg6Ln3H9pXHTRmMwB9AzYLozsLuqXKiMHSwRG7QnrA",
  "key24": "5b5tK1FLvV5nsFNVJt418jTjBCrhzZ3vrf1JYoKcmrWKnzUecHNsZFpgSsD4uttxi8mTTiJgkpH7Z453CBGaZAKx",
  "key25": "2xJgyP1k1KtdN4e5pbFZSSWaXsF7U4F1Y9RU7cM1NMW68c6jzoycdhyvjxJ2q8z3Xd5mQy4uVKwbsJMyXBQGcXvV",
  "key26": "3eY7obnqYhBe5a7xmRTVtBRHYDsuiLJV2dvSnkKunj1aVHyVWPt9CuA1Subitk7xHnCk7nJcmsXaguYRptv4X9Cz",
  "key27": "CCUPXk4Fx5e96U9YwPAPJGEbLbvva9ZQutQNBgPCtX4n5MTHHWeLAjNDC8iouzS5dDaqzdkWJvkXrUbk47wnK4P",
  "key28": "3kYpY1LsS5ccFENPsdSeY5j8RDpThoB8zRR4XEZqMMWaNkKiyKuyQVKCfudZevwrK5eapSfSRge2wqh1TCxArfRx",
  "key29": "TRddpWi1hxTjThrNmu2jxqJbcvH2bXY2V1JFttGAgyPJnBrE8cTdohvgPyrWQJSAZAmdPQ83UHt4zg4BuqRDZyR",
  "key30": "1rWDKD4i2AwN6JfboGSpjjMhTuHDqPgULxY1iv2fU6g8xJ5wYo4hZYZWwysxzhxui7KxmEH3c423n6EYn7Nc53X",
  "key31": "2EL71g8pxwShk1jgoF2rVGyDPhzusUm6jdxHQopfAWmJGiCn8vLbTcAuHWSCCQtAHqJnBTzQqjMncLEPj1VwWnnk",
  "key32": "2ywhvPW6WzZp7QSkqmw83EhEbLTb7dUKeyL7dDaqdA78qFBwrSzZNoeH2pa6YgQ2VKXUUHHyXG22DQr81W8uderq",
  "key33": "267saVSNN5U9voAK8FrGzNhZhQRQjsNyT9s8eTEAETk9b8eBfZg98VSzqMkgpSaFDiEnYeoMVxeUsuDGN12Gw45P",
  "key34": "EgrrR2m8ZQJUWhzfospRMdqcXURgAAAnNrsR79qNzj3TDbJ558tgXiHkUMsVBU44EuekkJ5LWRB2qYGb7DdcfVc",
  "key35": "4yoWgUFhw58GYQ51TEu1EGqFixLXwYMjuSxgEaSJL3VAUyJrvBEUXCab7Kta2mKC6PhW48Vu2gSVD1bQVVvfQ81E"
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
