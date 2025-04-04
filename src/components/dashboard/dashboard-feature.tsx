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
    "qG38cHo8NXDovTmEbn1yW5ysKyJMFLPWNE8cphsbsfEaqbo5HvaiDb91RP8P63qG3ddcANsX3czToHpBNisN1tN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uin8d9fx1ipVM8AjXUKz6MjSRzSwcmFLN1TLv9rofx7AFWqgHrRgP18CUqWMmdjuDGzDBJzwpWSatpx9vAAJNDP",
  "key1": "56H3AMYrTHc15RbvxrCDkJoLydtVdaajB1SitWjUxry2nSqK9HfTm9QF8B6sXTvHawoV7cXVFf6vB4AxnYFWbu6N",
  "key2": "42ZCS2b9a2QJ9mWq2sTmp1cJPJB4AnQkFedNkJ8XHsxbQmi59vX4a6uShAfrkNVuPcxmLNCU2wY2JuF57SCyrDZ6",
  "key3": "4T1U4y3CsvXvHCrvmus4LX7BWvtKjNCKhvZcrL7hvkZ5rqvSXMnyFn2SuPTQuDDXoTgbrL8gN6SMJMMYKZjzzc5U",
  "key4": "5QffsEG6WG6Go46zBzFemau7WPHtyV4haPv3djweoz3UMRgjGnsqHykNSUjh5HUaxE2t8eoDVPjDP291tEqVfDbA",
  "key5": "29jGNURKMUh4Cs8y6kznJxZVT2zLuKfixNKPRDJPoZnGdJsHaiQt8VsX5GrFNmr6QLn3zaAwRfUc9iia8accroJv",
  "key6": "pL3w4qFdUy3NRyySwYfzdL3q3PcDu9oCYqM3M5zJU3RZa9kUFYCHZmNiPsUmZD1Fo1qBuyf6qdWw7BD5Awj3SgX",
  "key7": "63XC5puJAPPhZJroUKadtkU7e7BLkfR1Mkrf3zzPR4Up62QpxLMJLTbBBJXb5ZZdiFgFTFDjNXoW67UE23qgi3LM",
  "key8": "5Ve48cqh64Wb7rgWzZcT8oou69VFP6fpDuyn6d1tMCgYJD9kwo2UkkuCQmx8Rz74E1A3Wo4ofWdi7CPGFpu4kor7",
  "key9": "491pXY4cLYgtuGUZpt1P8EEUER6yr9fmr28FHJGUHs7i8wTDbQAdHrKCVmY874QjcFpK1LYVY7WAuRVAvCa64J24",
  "key10": "58PdbRE9zDLSEVxcPz358HC5Hy2EpHTVcBVZWZHYkfvXVyUwrnADkmv3XnvNQzh9rNTu9mw9pZkqPw8LeDec4qV5",
  "key11": "35JYwM7q9bwyhtfz2DYx9a5iLHCgmRvB62fae6ejEjBn5CK1qFu36rgRhCzgTr5QJXu1QuPPFLVEVfJ9y5J1QzjQ",
  "key12": "3dwUNpJVwgnFjifSeVakXRq1LcCakUBMryHghkzqMycxuWyvTR4FDyy3tyH9CMTVtGcyQPxgthqhGhKxYKYTffhA",
  "key13": "5K1uBMbbmUxwVbUm4pQ6mBEpborYYeHbM5nne7G3r5NmkD5XEPg8TcKdUvJMPuXWgDaXSKJPRkziMtHatqUqkM38",
  "key14": "3XMmpvhJRfSZyGGCs7ScEWnUBR3Y4apTg2EHUi44vNGjexqCcfyPWJhNbfFnfGqyoBbkwT7HxRVbDVQpinWVJEoQ",
  "key15": "4eC6fVGnvKRKu9J5my1DQ6RoBAQhNghoqNUfuWm2ePSzsv3Unq1KnJnb6CcFkGjCjKoog8Wj84Po74dJcyZ3ELTt",
  "key16": "3E8RA1mpjWx5uEYgd7XCngHUEGr5JXbeELwkq9tgNkZTywPJxtCAfVBvFUum9zmCmGboEQEpAHyKsdaeN7ybAx3e",
  "key17": "2Wrroo6Yq4z9Yu2iAkVqbPm4LMsyVfUMW94wAYcppcMwiGRkNAXFqPPrjtv5amL4kHkVjRyJF96X96yqgVHARKZF",
  "key18": "wzzACsSDhTBX9FEo8FZF9FAJjw7V3mvP7wx85yEjaHTrRFXJqSgxjrVFCJRzJbP7pi4YK3ykKx48cpfuKyNzWBf",
  "key19": "3R9sSUjhDcrBDUs5ynGfaqJpSRjA7cVZLG41qXSaV5xLTuexb6jrJHD6CWc5RoxM8ogSNRV2HQaxL7Hg75zWhJX4",
  "key20": "2xjXBXaHRSt8mpBdQJSHh9tXd8NAi7sMgTiekxrMo5pzK5PF3mjRFzSeKxUZNDTn4YnMP6TAWLFztMUsnMMx9HvR",
  "key21": "5MyG5bBakpjH5rJKwPfoWMEsUuqLcqSgpsNPJuftuLAxifoSHuWYA9tYgWA7DChngs5JR6Xv7Z2ojJaSA8YwimTP",
  "key22": "gAziKAVTC2mtH9ihUPRdtM1QrpkFaKNp3Hywx52DNSeKYMN6ds6YZDMkrWAx3UL5bCEbiwpsH9RdwcAJtWSWAco",
  "key23": "4qMMpNoN9pam3oAgBVQdyM6353vnNDrGv1Vfhm4UJPoqRpgYEH7CuMixD5BoK2LPvfq24mjVWpEomTvkwYu3wGr2",
  "key24": "5P47ghM4L5R3MXLxdSJMHPfDb5LJMrBVKbLT4JghTvwi4eLpSgJ3azTALdhcQ3axKunbyj7S9uAFQ15yrhLv7f4p",
  "key25": "5ngU1y4XZWJUwiBh5FqsQbLfryjZX67C7egWKsAB9tpxLdoZEqwyAb8EGaL7pXovDCJMPudMxX3ENnGnHZRf7BJv",
  "key26": "4rBjaMSgGxxSog6gdV6NzXdKob9FYRs5qtHML2TiZEM3fNQWVqZuZUYEiKTk8ofMbiUhtfEiQGNGXxNCkFzD7Jd9",
  "key27": "g8gDbuc2FtasAmbUiWGYuiPyfxVskNspRDce2QeJo8hyNtp13MrjzpZEFusqx9qgxDs5NQdg7RsK8MiF9BtX6B1",
  "key28": "4aAFG2BzBbjZRant59T8uJzSfnUxoCEvK18J2zUXU1kYN5MBYM1WgtZ2rMtNKzBrZGuwgY8QJ3unjetwCxZuFg3F",
  "key29": "3WRvzZmnjcbYf2ZHK8K1X8UmdsLhe6JHaENYxKMpVZDdLm4sLQpNgNegG8u54EZRZTRJ83U7zEnWxpbJSJpYRqXy",
  "key30": "5TtNn2rN7iGbAumWchrrfWowuQhRB1rFTtDesAFdZAoNesVmUbmNcefynYCaZmtdH6DXkKEdvK4uNGHX68gJ3TpM"
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
