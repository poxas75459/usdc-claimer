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
    "DCC1XqTwNkCoBDagbXJhpYS34sEZLMPSfophhxvTJDsrhTmNHrGxthAossGZLrLLYs5DQP69VrtjyiPCELbZRGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fpHeYWQNntYbzDSex5GWyZ9obaHMk18AvkdTpnk7CfCNvhbfYD5sY85vHgjFpwJyZ7MavNCbtEPSynjbX1PofU",
  "key1": "3Ph8CfyNk5UvEN9b175RDrzWrieBiaubjLFkR5fK24eB4QAbwasTdUprnihmRvNtdFtSxg3Cr4CwC9TcWQQHxLps",
  "key2": "5BNKwHxs32Mp9T94cfroiuJvnNaykaN1Uxcp2a3hGv67THGZrwxNFHp5NN9mWK439A7h41HPi7rYdCZBAzqhvUxA",
  "key3": "28rp2vqFK4bYVERZthJF5a7zBaVteT3rRaSLJaf5TytzBvXMNUWv1YLhJYHumyrchjA5SV5jhTadQkPFzvfMQxxk",
  "key4": "gMCgcp4uPjs32GNaQWK1FKFhArWffxfvUJFSE7QXE7YHwobtqhu8JSbWSND52VN8pkfU54ZRC9XSV9VsHhxMkGr",
  "key5": "5MYxPKPCmQUAuEzueeAUrMvfX1ArjKFjekiY4yHVsvJXRwV3Q8xipaJ6c93CzgcN5Qri2mj5f3BgaTE3U2hnqgwY",
  "key6": "4NFgzuNMWoLxBir6wSrTim87G6qUrRRGBxNV563UH2uzFCh13p4EE9ZuYcyqKm2emB8EuFGWixWES9evXinyigjC",
  "key7": "J6Q1CLp8oetxryTsMAfJjYb7yrN2TvCp3PuiaeiqVT9xxZ1zNKysgS5Cde6YH9DtWi2vYtgPAvQ3crRMdZQRhdu",
  "key8": "3HWJuPWuuPkJkx9ia43j9Afm5ENPn3ZRYesbTbbKHqCUd1nU6jQ4tZmvb8ETVPNtHiN65EodWixaS4hMUuBP5sx",
  "key9": "jGGPdoQ9YysJeNmodnabfUNKSsW34WFAAm4ReKYUkuvXSCtPs2HU6Xvp72Qp61FEBx3DuFCdbMjPwfneontLz9w",
  "key10": "27U1ikHfoWdMSA6zHNoK4fLBAqyDGqAGsCt2hx6BUGh5NDyu7ERh9xnU4Hf3AAtd9wQcXwDUYPnmRRZaev3j7AaV",
  "key11": "3gHR2w6cdWtAcbANP2hqs7YJKyELM7bbbaZozSL2VUiAudo6PR29si5urS1WQbFAsgLpvvnwZcXDc164rFSirW15",
  "key12": "53ssMM4NHQkTdmXhtRcb37mccAeY6is7fV9pCxAqvD4pWyeJm7d23x461SZ4EGPJA5jZVr9nXyRDXoM6K4bsb94q",
  "key13": "RXGo3MhSe53DMa7hKDdsVjGfG4DcazWoMHqM3CPiVnoqdFDtKUu5roCb26A2khpFF82sUE3Xy8RccKvKATo4NBK",
  "key14": "5F1V24GX8SUbGSk6cLB78KBmQeHLCuxQFLpGihjc8GvHwaRnAKBgccDYfYVdCnmy1rErMej1P22rvf31zMNEYHFB",
  "key15": "5LX8qdaWZYMnpbnDNgX1PmrBoXmrphmjHKJy4jrdZmfoVxaxGHisa5sEw4y2tfzJziqJVpdqSnSiXeeeiJ5jrDcX",
  "key16": "2cdWCXSMtCF44WnYuZhzGHyLDQzjxDihNaDNJeUkEsrCsk4sDhpiZqSviGxpkknBbGxQLV1XAco1shY2Jx2ch87c",
  "key17": "3xgWjeddYcZPWNDfsoErM1Xi7uFARxcaNE7CvkZ9QqN23yBCkmfVPUwBbqF2ypD4qDwHNbBXXsaMACh913JtoQek",
  "key18": "2U6dM9wvsDfVeYozQEMfa3cu55fFTDjyfSDYT1qBdEkMJcH4K5dDifstj64EFaurCL4tMBJGezuZTBr1DuqCnzXK",
  "key19": "43GfdsPQeKqJy5CAWt1xdbhNqEvSYPPXcUak7A3fvhwGwi9hssg3H2tuAhiuww6arDDWZeymF3GMBYVbUNq1GyNS",
  "key20": "4Vaed69gkRsMiRpmxmEYng9yigtFoRJK2ksjEiRrW4DZkYxkt4LQfnXjGsMxRSQQWv4ysi2Z5FFvMJ1gaoCPenez",
  "key21": "5GWuupRPLdriHXFcFa3ybfYtubT9KLQYQh9AejsGZWd4CT9hcSfpaDU8wn6sFLM1aq5RXqSEC5z4cDmUCRjY1Se8",
  "key22": "3LoKhd8ngMK1FkbkKj5UgJ61T32HbvQHqa7fZjzWbR5jjpwQ5N258feSXK26pMZTbnpTwZ8zFhEanus7Cir5fWLG",
  "key23": "2ckii2c25MUsbU3nzq7tS7dc48pw3PJUBdYjZYRijVTNxFbPSktgEBmMamG6C7WV8m4U5vMFA1NQN6h8fbwGXzrG",
  "key24": "3ikhn8EB1x2uX2wVYEHym72HULhN7rhHymMJMpCYH3pwsm577sSQ7FXy3SH3VNWRZUvk8EKki6HB2XV3qkxGTZtz",
  "key25": "65EfuxF5uEiXEHXBb5z8nNNE82j5QMz7vqkEipQLobSgVZ3dxe68we1ooJvpiBgMkLsTJyLQgmZEZP27Q7FSy385",
  "key26": "31U6u1zx6WUvD7upFKX1YipTp3jgyFrjTTdX84hk2JfymrzWEQQ3UeU2TAxrKTdHs1zRWS8YVxWoEYP7jNcBgmQW",
  "key27": "5cxyQPAxbPvFMxFLbkfL5twCd9MVcS5T6QscL8Xfpq2UiYi6T1sdRmypH775qhpt6hoGknSc1N9NNbt3ANfcjaQj",
  "key28": "4d8J6CDjokfSKUfWcP38TKohc2GQQXwJBWy36TS6FfwnrLapB8zEd4XezRJyoarocR2yrVxLGA47Mbw21XtMGSVz"
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
