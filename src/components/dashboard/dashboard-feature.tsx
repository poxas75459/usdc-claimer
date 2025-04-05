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
    "4aankfcMk4mETyvYCiXQCEUL1QDzhRRM5MuF4g3qEWHVyFikRWP3y9vwJRM2B9HW9frxEzQuLzcf8Zu4afy5tEre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41FXcZaP6qrypgZwjGtfNtkfTvTVbpEzUevpHSY2mPVGocXyHPohjZGfjE1YF7oGKJUuPBUgWLhfszz1FFgWVin7",
  "key1": "c7rdJHcd3noha3e8cMqFqVYN72Q87gwDXsmyn5WdWLyan6zGfpx4513qWPMhvhCCWtHJqbJPb8nbm6TX8ZKmXby",
  "key2": "59si33WHPWtdTottDv7sU69FGSbNzcdQx64skSY9tswPK78vwB4Zqp5xa8P6UGnr15k2w1fq6PNkD3htwvdhgiEe",
  "key3": "4PbvvuzsLUvhqTs3r4CPTxFiqugHeqjan7Foo1ZQmyKBWPbhNaJRjTj18TbMwtye49Jch3s96MEGjBjYNymK174A",
  "key4": "4Z1ox91cabTnaqt6CZngatQhUtbdMME3pRawJyygyNyZe8Wnj2VPLKGNAABgGmzu36MHGkCijUsVsn4ybqEcVoJg",
  "key5": "38cCtB9WRTHnQK2wPiU64MKagws6ufmeNJ9ntYXfVz6kfeStMjHWN36HZRCJD6xa4Y78mX4sX7FoHG8fuKv671a6",
  "key6": "AbonjzKEMgMcrN2961ZF4yeZ1sPCoB6yjUmK1RERTUFHG3v5aEdYXabQyGYKvyp7V9pn4essWJEQfvohLEpmmds",
  "key7": "2iA5QwXPnmgxU7u7vtwo3iBp98y9A8v1D8Ak4v3bNZcqUnB5EJJhRGy9RRadgG7Z4cTcAueTxVuZHcw3LmCUTxZt",
  "key8": "2SHJSoHCxzjUW9a6niXpJMRuKGNTo6pLB136775UsQGKu1eusNH66azguXNLq81VoRkzWdYcdvSzYgCr3w4yr1f9",
  "key9": "3Nwr96jW7DAGmmKhymTaBQBaw2AYobkcFgZ855kubE3d7sebTGS6LYc3aJFxhLEjR8bLfb4bwn8czL2V7tDn989N",
  "key10": "2hreZiKW8HV1QDtd7Q2piSZeYU3Q73QZccEvDFeUgMbxDU4BhGsnHDVLeacqRij56ZnD6jhiyVo3zcWwbTMpNSB1",
  "key11": "5zPmG5KDoEFSDC6p6y49U84R61fMhyLL87pV9F8TwMZjRcZukMcA1vcWqcf95wdTpUvHthqkpkyL7tJUL43ksPSm",
  "key12": "3zxoWD7Z5JDXKTmfPJBCNhYZGZtXFM4RRwVbZQw3cBQuBPSMaN4Lq7srqHcR7rjGM6iQDAbg1YJ6oZn1cCquvfcx",
  "key13": "4H7QUv8SKmmzJVY4x1C8NcLG4qpcZUFq4MBqKzZjVHxDWZpypTihW8gRH87339arVLmTqAXtjZwdpwMKCHGLrNHt",
  "key14": "3kbge72Q8CH8ewY7VpB2Xp9UJz5kwyjwxQnAjqgJGS4gT7h4wEd85RYo3owrULztxVSNAngrCsZVJs7eb4Rgsj7q",
  "key15": "4KVpyDf4pRVaxB8XbXUktKE5qwJTbmoHHwe4QdTB1smTMb2n5NDVDgd8jDZ7s4TqEx5KffkFPdkA1NrWfR7hFjP7",
  "key16": "LDB91j1Ay8gtJmT4U9xZyD5Qbj9JCz7dEqtMSbd8dN8qrwS3fXTdbwDLrqm8HWyNScVwtf7zXMqLyQsF7W2RcZV",
  "key17": "4W3C8bdZQ97vTFgGkqncXvvRCmWotdvfk6vxusdJzyjrqHtLW9KZZ36PXpTSqMrc23GtHRANkXD1xHh7xEP8Ew4E",
  "key18": "BLNTAuMa2ZqBd1QhSVfRvhqqME7vtyvE1m38rVbpx42TzGAYJrisEvziFyTYBpQtn6Nhu3dmpa64VnC6y7y8PEE",
  "key19": "49EywXdmdXWwNJPoMBsTUojRF1bqemrQLkiamR93zP6S6g6gvkwxCsPyHi4HFnxAj7zeUkLpNt5MESpt1aCZKU65",
  "key20": "636WbF8geGxStLLFRYbLeUsS1qZdPTGZm6nKL8JV9mrcg6UdbXcsCZscPgRLLbzS57ifbSKqfEnbeuLshUTGUiYk",
  "key21": "5sUtPEri8LpeNP4fheiR5TMtZFK8gkZJnTf6cP3BaZwk8kkwG6qeqtqZMdi1kQ6ByYdUVBNtte67a9hngaeV2eLm",
  "key22": "3KZtpnRbXbyLrMCQMCEoMC2rgzZH22KyrfVpvpfnwUYTgnAJNiW98qn2iuCSutbXNw7WsKUumtWRc6HJ1gsEaLjj",
  "key23": "3f4f9gXvjQSVbZvv2G4hNUgYDDYdnttS72XcrM2nM9EErCpxDrK8zSvq375QbXkEuz1M3CEvJLKVt3o89Kd4syY4",
  "key24": "5f9qMKhuuugoPmgwvTYehDTa2BYDRy2Tg4CTGEQXvYFRfdDfXm55qyDTVNhvS1nWjPvDBUEmPyCWdwsDbHrGDVBW",
  "key25": "3mTHmVmXuyDytUaLcYJd8JknptFwcjzh35fC2ayrtc5yuV49CBcQACJUUm83MCWbwLbNHqLeaf2xFtwZCPM7i2wj",
  "key26": "5z5Ao85BF3zDebJH64g2iJYxi1FCJakQA91VQGhdSPqiZS2n4PGLTxCnwmsVTiUhCbS9paCWkMMmgRtGdKD5Fwxy",
  "key27": "3b5EqWUB2D3ZrF5G3n76ME6uPfUcWdARSXfb36ssLz81uyYXLvnEADkPAghKTj9cMdF12mFnAjrxJwyY8WTH42o",
  "key28": "2pWKQjKTCoD8VUpLkk8ManB6zJJWuQqUGwN5JuujqxapgwHAFPVz1i3V66DW2oDYXveZUfdVz8CgmHGZY9ipexT7",
  "key29": "5KVE6swGycTJ2tBDUkVbFJ6RZMUd8756entyUX8bSacSqzweK3VxqqKBfpj1CqXKcgHue53X8nKCwtLhppGMdwUB"
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
