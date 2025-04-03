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
    "T78gXgJ5Zz73iyVS9WjUjYSfUYGNone7YqYAp1QiZhg9Z5UmEnSbj9K1YHBTqK9nqFiDuJKiidvRdZRQYZAkDCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mTJAWMNK1APW11o1xEQ22aeLQgDv7dH2ZckpVTyC2UQSvt7MGA3bvCqZoZxxjZQVov3XEbto5RZ5yroNofFcTxh",
  "key1": "34GF5wwXQ6hJrxh3hyfW5mQgR7MTcFyeWtR6573xVHBGpXWfJXiHuziMFEyhTjAqgcVvTti39kXGhoZcSepjf1nu",
  "key2": "2fsvcsFsLJoEffUP8MwvMETJkbovNNEojjFLKkcuo2i1TK9CKHjjMcVxo8WKrwRk2v1L7TBk1miZXA32CSP3Qf7N",
  "key3": "5G5NiFWQszwBq8cKTi2v5NKAQg9Hqo4xwZxqyoJsFYfDjQsJnSetMjRbYrJR9mYmQ4UZEuuv11WPyMD79x8jWmUc",
  "key4": "4QRaq5FgEZu7vLi3TcFfhNNPboyvkFSKkCVjSCyDF4fyrpKyZ5JfnKkCXdZfe62CSyJ6CutALxgreG34adCK8By8",
  "key5": "5dwyC2qMYmY289jUQwYCwzueZJMdc9QKAG7shvuPcmKaanyhLgrcW7km5B1y3odzoVLKYor9SfhXRM3Nve9VuTGY",
  "key6": "2PhoHdzYue3bu3NAm8b3DBvNasjcvRdZHpJuHgaKThpnmoBtg7Sq2z5mWUmbQcggwa3kVHwpeDTVMez84cGBgQr6",
  "key7": "62XoUE1q7ndBz2JYKepyCJfioG41esz7MSoY4URBpbqRbiHRR4jf3PcmVCqA6BtTWHLcAv5J3oza4SyCGyMmLDm4",
  "key8": "3g6XNiu31JuXgu6VPGGuWBj9GJxmmKikDUMDhBwRKtmXVvoi3eP6TpdsUnEwjJb9dWZr2H6wgDnqeib9kkaoCg6y",
  "key9": "5jMYUTJazNP11j8rCDAYLoYSnFtwMU4gACc9nc4ky9xTqEaP1z99cdNWpSHMiHHwvm6eaQQu9mKNTGLjoxs7pw41",
  "key10": "49NESBcxXXfVrcBoTSJvvRw5yVujbdSncGxbhC5ok6MCQPZwG6H7i91BBVDNxwn3p3HhpSFbLVcXVkzc3edcMqSM",
  "key11": "pf1X1TfaUvYBVTjqbzLbb8ndphPVA6uwgxo4bQoeTcXeUKWFkX5fSqfAFJpcMExpoyLf71GtMiUXHiUu6gprQvv",
  "key12": "3dgZvH3RNSJsZjrXaYzhmiHX3fWTRZxx1gcwMJzAPLP1E28rC7pt2q73QxZ9B6j7fQQzHF3PBzeXyVv5KkNdG1Cu",
  "key13": "5U2tdYYj49Zxn7eH8hCmWYmQUJ23SF876HNE8aGZaN8airtdr6M3YvADeHYRKnYGxxQWNH7G2gsHq1AY1BJXXuXL",
  "key14": "5vFJcpHwWbtZpw6Q9n2hFv6CrCFHP5DDMdhLCMGjhdDH1aw1BkcivP3MkvNCFXwSdUsTqF5xxXVwoKLwkSnR9C9o",
  "key15": "3hUHYBm5br4SaazdEvWcD2VSeDU4tAfdGX4zGwRCYN83QMWyikTEPAyYMCuxuAijwQB2QrRGuu2tK31p8rriMBpn",
  "key16": "4Ntgr1DeHWrMeryJBk3MzrajLTFcaq8sqAw64hRXD5t2bEvtr5W8mkTifYVz54wUCoZPw7MN1BUbMRh5XY3tkGD3",
  "key17": "34vKf1Gx5aSBKDeyYcU1w2f5vpveKVBx8bbKFxhyRXTJHw9jWVrbQEpafJr6iE96cYjzd8Zc1uPxWZ2fPmEb3Qf7",
  "key18": "31J4isSKeraYG9iiQAaVrUr9rbhtWrJCeX2oG7deRE2NW2xgEsWE4RhzmQPM2G2XG2j2u6DMEEmNiSo6yXoRwhgC",
  "key19": "5Lw6ExnNbC4heKr4KpVaGEcQHCJbFBWTb7wiuQSiJ1MWxKQzDXpJYk7JLVNbi8PVs9tYFW2sLn9uKTV7TQvAe8Ax",
  "key20": "3mxViJN5MhDTv5YLvT6QdHHp3znLeuprhvp1TgsxfY93ekZ5ADTrsXBAi1Y1bWK4K4tibPsKTBNpwuCPWsEcb7vG",
  "key21": "6126d9K2kt1idBMsGr6dwGqEUT82scbhM6HFnpjar6qPJBYjpFiFHLHrZcrDw2ZACiNCMUBNrpBbfiw79YqgHjjY",
  "key22": "TDqS7ywgoL1a4DmcxK9aDeuUKf6X5J12wQ8zRVVu8QcuVwjfiJkQoYPY5Ht6hndSpoewgkEySEBTBU9MfC2nJLH",
  "key23": "5kUNF4ymm8V1Txp8hSDe6hC4vnimrfBUiX5p8pzjktJy7mWXp3iUmfPJq2uAgSFymRDAexvnqnBUBHmbgqsNDB1D",
  "key24": "YKoYJWov2m4hK7Jc3z4NczBJ2CL1AsxQ69G7BVHJ24W85XJ8RMcLoBtHj83URzZsA89unW2VMRD21V3HEjGoH3y",
  "key25": "2SWfgLjqSJEFs7DRE5eetN8KAywYkdUnnT6jrnio6VBFvhvQiMB4EcxoDM6kY6AQZEkbTPnxvXS5jzQWJRnmQ1sb",
  "key26": "5DnKb4RAEgxshRuNGgnNA7DTDP6DHXPk9W66uN3GxFJaPRYch2xvmRKQF2qwMiej2w5koux3YgtugLoeXbk1tBsx",
  "key27": "BNfwTnw4J7CUN5UKb4cdPmDYXzvfRF8YCM7ptNe6Q1V8KbDXfUSRdVB3S1ksoHY6wDMBJcB5MMDSLttbr5R5CSn",
  "key28": "52Bbu585PsE7oourN1DUG86N342LEGRXAaf622g4MbFyGknHURvbP9TBkbW4qNCbQW7mDJ7qW8jS2YpRTYFRh4ah",
  "key29": "5yE66zK6cUXgVQWAxBwx9WEy1NnTZgLaSQaRSXTAgPCfuxgFuctPF2RFnLiaWSGPYTtYWA4LQLN5TRJBSyerHmjk"
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
