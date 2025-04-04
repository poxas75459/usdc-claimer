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
    "5jLVmqqDfoK5W3VwJMHyvKJQqqD62wEusruagf7YiDZ1Fr9fvvhd949JWFWghLJrEmP7cJpKK9YKbZRSEs1B68jP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39KmezZoceUeBNjgMan9n7EjtQPyLB2CkNYjeSz9wyNuEcRggYwqgqHpDqvnB8fjD3yqV9gWQrQWKtecAxsynF52",
  "key1": "5rijUmhAde49hNd8sgmBg136NHJsEpcPhnQJdJwMzSgwTucFcpQhRyuZx1fmYLSVZEXVV5VxfHMUCKHbbCYtyyJ1",
  "key2": "3WwL6FgXBRbgXFytpXDhJP6SQyHiaVf3E7s4xPmSMpjE3Ddrv8Kccpsbp8aeERyZ6AvvQ3ib6UrWmtSt32rGuEH3",
  "key3": "2VtZSX1stqGmVgiC1vem5wkxLUbXV1VDmWgyrKLWh2qmwapunztush7BbR1AHdRqX431DpTT7JvFK3DDu8v2gbNv",
  "key4": "WhR1nnotcP4e4m1wPoDkrS6SVQdogJpjLax7QNhL72rBGj7nDUzAZWbtivYExYDJTwKnGCKX2dwFWRJWjE6gy1W",
  "key5": "SDfUstvuNRohdGoVNQWWpKekhLE7mN5Pn4TFbYuP43UbPNFtKvgbQYQ93UcaPfhHKm2oAngWPifYZfezemTXNyr",
  "key6": "3jXPvgnHiMC7s4AMt7mXFFR18MpNwLoCvnq31yVTLNd5FDdauk8nR9b2dpUUCzwSvYoBM1i4VYUs16qUNowf7ZBu",
  "key7": "2DYPFnYf5j7ibwC2zYAQpFn5Rdxkzu1ZvwsU21rrahYoKJa66G6eWDAXNreESjDjPSTctCq8531Mz7HnjRyvbfAL",
  "key8": "4xehUQ8Q6KGYQ5xceMBRC7sdkBpVJziY3eVEaSm1uB4Z5Cia14h3CiqMTDQjVAEeYwFvquzfwZ4qbnxSJ3qBSs6W",
  "key9": "qPRRojnQSh5S4TS8Yp6f6rZSsrMuNrX89edRMBr3JvQpXNDKVfz6SnMC2Y8CfbuQ6KqU4QioDVE3Ya8iFpUSh3o",
  "key10": "3P1MzmvMRRNHNxG7gWRuEaPbxzC6bygi9cq1jBEx1abNURtQ3B3u2bTJd8KpyALp6ahsrXDbUUnE6J7MtNeDg7LD",
  "key11": "5UYKqPEo3K96KwpLhzxzk7nfnmppBTQJWSNMVTAdnQxeRcyWMt8NNV7AXasPjS1QqEPm5YynUnrgJsHDY9M9kfeK",
  "key12": "9SgoL6tLz5U7Ea59whstcxsPdWhBXVBKJXvedDhooBGHiS5zbnzFA2fHVFbLsqBsWZJsYG4iXHX1jbVkzeZUQ72",
  "key13": "4Gjnw3DgVcryr9bAndKZ94RwqGz56nfTDYhxr6HvKceyrXNLafujnVGVGa83XHQyHpdM78uMDJrR9D4soTxwxLfw",
  "key14": "4NsBqLCS7oDy8EwbyKL4mgSRSrkLQ94RXWMWua4qPjNgrUL6Y632KxorNMsjX1vfDid4XFnvdK25jEbRs1qnaGc1",
  "key15": "3r4rvHfmqvUL8QgsjETg9Wgq9tL6NKjUpB2sw9bSFJZfh6ys2LcGZbbCtiHi9tV5wpwQfQsJj8w7Lzq5K4G3Qr1W",
  "key16": "4YUiC9LujrRtm5h8akmYu4U49i1U6jDfKEnfWuoHZuBfcF5WUCBFPmgEQ4w61zTvpu8Dmx82AgwrkZHQSrXuLQK6",
  "key17": "4wYUprusQJEgUj14hpLurvFonuiu1UrkfWs1jRXCJUoDiCm7apnR9czRzcsTe7za8jqRoBDiPmaC56CGTZTJNocj",
  "key18": "Tt4Kda5J5z5sHPjgTJGzStyPernCrjK1qRCkDWLSSDB3M2xPddikxjPTWiCZgmPSKHRTF6B8K34TBPsNh5nYE74",
  "key19": "3qssSgyAbfuPGGye6Q7gCwM6chns27LnqQkkmJPnNJDeURVmmSjrVDozvBNeubaWCENNB4B6ybJzQcHMNJixcZA3",
  "key20": "4QhbBpRSyCq8CzESSxx6NZ1MfaPhP1xiEEc6co27U88uGa3kKubNkcDggBxWQojRkvEbKRoxaZTfQguEpy7gkCsQ",
  "key21": "5VXgEvNC8ZoSTwGJs9BHZjbbTWtnSfANnaz8BAAmjCuw27MTesLWYnGwfpQ8Z5D1c2mRGfheqJZGj7ysb5fMpQH2",
  "key22": "dujtMaXwRFiMLEzueJpx2mjQG9e8FFLBCnnrdHP8kbifjZaFNDzyiWgTY4GN3qVuZwtjGYhmHo6LCzKr3gQPRXk",
  "key23": "3hhyLabSjsZ6Yk4TekLqcLume9pMY9xT7YwqsRycv3RwnudBizG595X3g2b4ejiYm7piLUn5e1nDqg2DTqoLAHNF",
  "key24": "3GChTJm9xeGjz3NYB1Zb2wNYBaPXP5vF8NbXyWC5nRLWS1jNa6feY5akAyYxG4pbwh8cEQJ67Az1cwycTqf3MmG1",
  "key25": "VqYBQVYJMNwvrJXsVg9CkKKcDBQJy5RmhmzvoGk1B8ASgNSfYo65qyvJHADAA2UoYaoMYTzQbAH93KgZExXX3bU",
  "key26": "4njPaoLvQyFgWYCQb9Vy6WfSYZS5kfJKQ3zBe51wrkvi9q32PudSnoDLCGoETfGGpT8hCHnxaCGbqFEdRkuaPr2k",
  "key27": "24UvA5Cbh6snF2tDpdTB6iv7EBfz8R8mG7jdUmobABYYPcMebSzdHDxV89GsGJmB4BCbCeu1nKTLi1ScXCfiPfyF",
  "key28": "C2hBVZ9Zm9ydHXiDTs6s4DtxYqwGyAXxPDVFrNKHVyqSpNoMATtQ1iKg2pYXHSsz3zZPzBjQndhRdCJGaZ7yvLR",
  "key29": "dXW1uj2CEhPP1g2tCjVo3qniKra11zHBKsADsDE43vqPMuG4x8Ndfv8o91Vz2a9JQ1o4knVyj1SXHYfEBcYDgCU"
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
