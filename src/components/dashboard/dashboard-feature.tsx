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
    "2Mc4FsYYLJYJ6rFwoyBidyWfa82oVXF8KxAGQE2nHc1TvgTD1WLC3gwvcvyBwwthDsKzUtFRUgA32dpAj7wPc7Xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WsY9pkuUJgDjGDTBTQEWD3PSnPTyhx7d3vMAR4Df7Pm7jEvMpUfFCAMpk2TK9LLErQRq5c6x5n4JTJesw2gvMXU",
  "key1": "4MDzcGHSEZpD1zsmcHvBAWfKRStwrgkexyN3q65J4ADXevVg6CVWThTdNevFFRm9FHVj9tM5xdzapMh9YCWCjYPL",
  "key2": "32oUcruHtGLKdz4qSUDECvTcFw1CFdgNtnDtmThR5eQhN5o43tUuDqftqyGrjNWTFgbD9BVwoBoFrpJZeHkRGQLC",
  "key3": "4pGxXj5gqbFrmfFMGjokQA4shaPkqQK2Vm95am19nAGsFEsbFeREx1F6otAKUrkoC9t5GfVUX4zky4EmPEVmyLvC",
  "key4": "26wdKk8BpYxjuNhRfJWEwDbW8aGNmoDUkyHH4iUD1MWf4Z3zQutE6yXCAdFGWVZxb75PkZDG8u1CNh3jeYXJj5bF",
  "key5": "5kHnkiVJLh1EkiYabNXbz9QnCrvCDihfTVUxwi3B6mD4PkTeUZNnnqSVK9HiEajmHLKcmGgWo3vZnUtYfYkMQzp6",
  "key6": "ui8SuDZ76rSyVp23uRkdEySn7fWmw5iiTDezF2MjzG5kkLwt2KQHDPDvzJvGRvsoCfepwSqRfgEU9t8gLduP2T5",
  "key7": "EHA9o9gPCib5Wf2REBuFREtKjk8wkHk7WH458ftGMdXmicT8tHk2j4Fd8QuJSEWxj9jSH1B7EWk9L2WjWqQsN34",
  "key8": "4ftZnKy6HRerDJPrqbwFB41LFQrzeQ67HSrcFYmA3rjTANWqWvVdRTrRbbHMzBeN4dyrjbD1fcptuCUTeBj6rvnn",
  "key9": "4oTLmWroBaenTHsUCzzEWcMiWtKNGtFjDNu5FFLwso4rw3LyUifYWxSwyy65JeoXpAKCfKcbRPEvktmxtWggzTRD",
  "key10": "2HsP4sApJ4bVHMfHdb3ojPZPMTFRyPG9isB446ePYjj7xpsodK66VcmJx7Ag19AscxkrLDMfPy2xtTmEUGf1frYD",
  "key11": "4bN92SAMURkkAPCieqTo5DtP9r5oNCdbMCPesGr5VRT1Ezb8kvg7SZDEUBoZRCtntPJEbC6ELxoXbU4gJbCHq4BM",
  "key12": "2bi8LXLTGiLhcAcPUx5XqUy5A5Xe5j7cxCzDNR3ZCktLPE5cT64Ae6JEd85ZCwg13ckrX1eoQnK8fsxxTRtXdLHs",
  "key13": "3vPRzgsvSESaP18aheZbBREJ5bcHG1oTyZPA2kjX9Ptkassaqz9uLATguPnTnKCDZbASWxvBZvh59VPAESXPoWzD",
  "key14": "4K6qaNN6bKDufZaK5k9ZtqErPrP7gs8HqqtuAftnwsgGtDB8uYgJXvnMvbvDcq3HVEzaTZYDc9cdHUdDEHr4eLkp",
  "key15": "ZLBsmz1PuXpbjyFdSsW88JSLwFNrUd4eQjeoDqvkwsLQTSTXnW7MKffm3drCQKRNRAy66CLkhNZuFSmGmXQ3p3B",
  "key16": "39wCtszPWaHnVBS8gbjrXfzZUtNQKDuANm8LsdWxHE6FVrWPwDBxs4H9F86pYnY1i5pEpm2zYKGFTZtpxGvGUwgD",
  "key17": "3nN4Wx3m9qRAjG44ers5UCvHDR3x1aPsqGtXMGVsR8qj1Lyk7Fs5v9o3NGeEsKbvvHUFtSzsZna9RJ44pYNhq9TF",
  "key18": "2Lvasmp2ME9u4qMWsneVu7V9DdZvDcDbarsfLMTQF7Ydb4MudWdhzLfvYj8RVCnd1kUswFxyWZ4fP2tqNwdMUCg9",
  "key19": "3oUnBTAoytJvfHJVtu9BoAr5pwwiV1vKoRF9o9R6tLhMx2bLnyxwpARND9m4BeyAkGAbz9hRnCHGXjvMzhE6bPXB",
  "key20": "2PeW9w8txnQ2ywSJuciZdLTVuw7KuZV638wopow28DPvHYMfUNDCHb4H5MwQg8ViQozrqX1b8V7hy5xN1oLbmHf",
  "key21": "2c1hvoC7f4iYUAjvtjysUD8YphcufEMp98kMTJHFAmeHafXWnuw8cFGw43qyBnMDc5Cr7FQUBh8nvHWM5D3vaceo",
  "key22": "C78occkaXaPGGd5dUetCxka6jqXxuwkyhxoFotsg4MNhSChbKXdsubAHTMc4ch28LFKSLDwDv3Guz8QQhvAxvYZ",
  "key23": "3TGiEh3kcER6Ejsggody22FGWRGfUczpe9QLfUcBhXDgBF2vRs5E2av6CYAQ7QDu6tPw144zhBPSxKF5MiYT2TAi",
  "key24": "3YqUQbuggB1e5w7BDXPNRuqhRGZ1i7wbcAbGHQo3HEBYmZT87zSG9zRParE6UndKMZkr7Qk9Ysw41iS8k3GPPPZP",
  "key25": "26cdQ8o5a1r2dUvigyRDMDNiCMzu8FKjYvNCgQCo72mDsRBynndfUuk46wLFA3isNmiaWRkkmGSGK9MAuZHC3cQV",
  "key26": "3E9eygpDT7XCJTb7VoS7eKCooZ76eZwZfdxtStnA2XXgeqbUW4p5CgpW1UeqhzcuD7cVFwdb5JrDQWzjcTPiht95",
  "key27": "62brWeKaPVACKeTZvanXZCZe1C7JSPsdFvuNvGCaA75aSpmHbuiqfU9Ajkh9gqee6nPMwtNZ38AH8Qjs82BhpfxA",
  "key28": "2g9KdKgm9R48EjdFiVzQj21ZnUbeNPtvmj32xccY9CLC7GFBhcxsbkEQk2pq9de2zXxBr7mvtsYswVpGM3u5pFVU"
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
