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
    "3SfAo6QoYW6NZb32Gg5ATobbm2CSV289Z9qrz6nqssDYAeiR1SPhRmxgAZDKG2Vn54WybRyEW53tstwjDmWn3rZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ws146T8Xp94hTFeYBEK7q2uUmEGDhC8gpXNkgV7z6THn6PgzSqo3HFC7zXfHDeoL3gcD9QsiuswYHmkRiAkuCG2",
  "key1": "2LCK46jYRVbyT1xkWbyiZPgy3VnsMtFsgt4nhGuJVZytwjdupLxQD4TjQ6dagFFJBd6kfAqBr67pbVbbuHRE1Jpc",
  "key2": "4mbPciRDrjED7GEQ5VoC6NXjdZdcaDuNignxU4QoVdSfUD7wHvyzAb92e8Q2j387mt7NdoXSfg7mKoni789o1jYG",
  "key3": "2LmCmDzLwjk4mkJB8KCmT9ZdpQoygkoqrtmjtdv36L3JbotiPsXjg7HiWfGMHYi483yE8qwVXCbVGdT1jHWJjzyf",
  "key4": "2EpCJbdjcKM54ad1M1mYKiohneYLfEteC9zqPh2Qqc69FoSWWv2nT8AtNNfxecSWgNrtpoJdShhbEkEQ52SVcqyH",
  "key5": "4gg6JFEGKpvuHuRqAsCs32sSBCpn6oqEqSe5YMXVMPHLvvLAvNm9os2fr9vNsEjhXMTNN2QmqogzUZBifUFgrYk4",
  "key6": "PVWHdXt4DY5LyUccCZY6DrABBeGCwPVFrjR9uNFKVPakuJxYKdw6pE3zk8KBky4x2PWuAJPq71mQMvdGFGUDs1C",
  "key7": "4VZoNH9CbnC4yXoNjsiW7ThSJ7w7PKa6zu5nHx8M696dBX1DMrY1dUPjYUUGeQBtfUAfeYqfTs47Yo3fD6SATyMX",
  "key8": "4exnh1E4s8xv6vnYC1GdzwcHiwLconuy7sCziSJdWhWfFTuWx553KsQb9bjMPYuzrNTAmnGZ32aadzi66nMgWkyk",
  "key9": "Dve7LKQa71rs3y31x5hA4Y3WCSHG4B5ECz3HtX6dLJRkoNLWyWWB3igbb6ktoLsgAak8C9GsQrrVBhyppzrFTey",
  "key10": "gVTYyW26VxP9yBpRZeLPoHUK82VgmTyBtybgdzuoN3utHZSb3JQ2PD91TvbVj3BSTb73Co4VNE83mzwFNVQ9zHb",
  "key11": "3zb8Gp57GS67jnz3Z3iEJ4mZY2kHRC8caZt9fgwpUnx16TXfPjD8zVQgZJtTG5rziGacVPtc76mnVWtNwQqeGKYi",
  "key12": "4tyWzL2nTHSZyZgeGR4cN3WtbxhKfWk5Je7qLfUw3uo6KJ4ZqhF5PQUiD3LkiNaRwKbbyUCRgyA7m44eHDFfm9CA",
  "key13": "3MuzyuGW6hNYTkdBrJ9J6DvG9KyZbYWmrReQsRJJhWPmnBnTSnknG8KZ2g4SdQQ7w49tJouQDBo6Xy7EULiZyXHo",
  "key14": "3VFSi6uDGYLQjRPUL6FqDbHJgWU4AMXTmPgDyW5bwUTZUyt2rW7KbzwWUEbJPpFXSSiKHCucQP5jfDkmKPSuMtxY",
  "key15": "YMpBqtRPvX7sbU14rAPxT49CgphgJaFg2SAKtK9VkUqKtnHiyQ92d6DadxBc1sULLKhcGBjWHeFzcKL6CgVKnks",
  "key16": "26wk3UaJCTSdsf9QK9PN7Djf1s7H8yJp7MDbyio7CrgDZonW5db1BfDdoN3Asm6ZaRT2MjXrpyujUERQhHxinv4U",
  "key17": "3prhgzoEpNz71LUTvpw1iBdzpxZg3hQresRjXjhCGYHuUaLrEYhtipSxD9Y2ALofpLVbcjgALAzYYibRY2vNYues",
  "key18": "3wvxmS1Dy7GAydTXGeCbFM7vUgSRB1fJL4dDTj7QmXXgzpcLzZpRj9oeDFJpmj34DSX3q7cvr5zYjXNxma1RrBZi",
  "key19": "ve41VMvetMGSRkbzCdGSjKxw7apkwyK95azH5upNdWzsDPQssuutp2Svju79fv4VfHsCgJJVCSEjrH5L9XbzhwK",
  "key20": "UjBwQmRJHgQakKwd2ep12Fso5UPM8JGBpn24c5hWjJSQjsmK9PqnKHsWwP6JnB9ZvR7C4Xs3CGvAonJpDWHDwYT",
  "key21": "2qpYzCEmMhEooMST7hdmjw7p4PqZVTWNgHmcbB6F9K3g5ACQE3hgjyq4bdAg6gZaLJjPDydj1RSz9xQUQqGzuewW",
  "key22": "3ArgmJ4roiYSUqRk7Dn7vzq7NPXz2SBxnsbiosMfGdGdfkDyz1MpYzVTFQaarNFYk1UC5FK8kowPpPXmAA8SoCi8",
  "key23": "xWzxF4esNYjEznhr4sX1FP8FxKoAWKgL76syhHQ9WcgWrDuSyUqxqNfvRt7h3AdH4mkSM3mV3PPUzoRiQgXJkYc",
  "key24": "5fy3dwa9meg1jU9qjenyeCtEL1VCkCbBapLjdZGZbXzTp9wbMi8Z27KL4PutkGKQXmtyQQLw1BHmbVKbwQaoiYop",
  "key25": "5XNkdNYQFt6yugjvvLVCgqaxgAPN2fLhFtH6Y7AV2Lv5bFxY4V4htthWbnG3N1Noce4sxt8sYJBv3LT9PfLwt7SC",
  "key26": "Y9duwmxV3XS12J3yG6vGwm3emr96FVCU1nFbNUEuXD1cBSiPMcVVYRq78JTALym6FMYu51JTQ9ZR1R48zXSwx7y",
  "key27": "3Uo2gGZhRJmHB1oMypLLSi7ogPjWQFbXxqkFa27Rt4SocSZyYGoV6NJiLcFTRfWUtrTz9XjMbiwyWqkkmqyZcJr1",
  "key28": "sQM6QyPGFw2iYr5LfEvZSsZWZu41ZcdP5PyoqnNUYb8j82Zw46gNZqpxnvP7PNtTPAqyxdXyYP5UzapYyz6u4ZD",
  "key29": "43tuJwCFujhvaLEqWTQg5jcC5VRsGdPQWbz8aQhL4DpZ9ePMtxD4dFVRg6tuksLbLh9pyGiGT4Y5XSxyGE2jhRr6"
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
