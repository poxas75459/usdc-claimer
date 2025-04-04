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
    "2vSoth96ehdWen3Qugcz5RBF9xRcUjYakJ5Wror22dLMJag48aKxXHPiPztzuu43ytahuTRYcJ4RVFHzYdDPNXZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jqz5ymCtAXXsUXS7VCTfbs4dUv1Q3cHHVuNcrEX9bzaFp9ieQEhAYmdH5HHbBwBk27wR2ihhXsMtvWWR6BoYHMV",
  "key1": "RdgTbMMnnaZPZJAh63UY9Cbi3FWqnNvhM4wKGnxMHLuAzQqAbutzvGr3gQppcTfRzm3aKaZotnmzT9JvYrHRroA",
  "key2": "4GT5HHksHK9AECFJSGaRajMe1fyBEmGUc2RKUEXLFoDrWpovbN8jo7jnaGYdVtND4yzdw24ssjaqS67AgPjrDbQF",
  "key3": "3sr9h8Nkds9amWwFnDrMfpv5Dij5eJpyZ6AwGG1qvp8JTGc1dntyQTZKfarTstJ6q6W5PBhoJKdtkfapLZPcnVT2",
  "key4": "5K8atCKQuzSCZKsq6M77keBySBzKZTsWPUwo75qM9aaSSBDQSUx2RRchwAq1Ads9gMsAuoGwEUqiP5HP8B6FZctb",
  "key5": "5KkkCWPHEbFxEk3GhezBSVuibVp2kwoAdLaUfYHoqCqZ83oWBYoMJ7nzFNmqH4nERziSxT7BdbeT92QcToSK9hzh",
  "key6": "5SwodHgqrdxk352v86PM1HfVDxTc8XPWddRozvGYYpQSWGAvnRrAReexmqjnsCV2fHjkZyrgy9vPKuYw89nEqgvY",
  "key7": "Yn4C9Hcc1xNR91YuiywAeTnxs8caQVUw25yBZcmASF8p6MsNYYLNTjgEbYxJaCQh6bTyvJ4qfDvQzoEb56gnWW6",
  "key8": "4UipQdkagMZCmpa9i1QwKEmbu8nP1x9PMrgg69LKfdNAzpcyD1G5iDPw3c2FXC7SGtcd7pnadbXMj2TTpem1hJ9p",
  "key9": "4CwFM9xommJh6QC33wLjyRbw31FvVGL7S7QCPSn7usN955qhBRNw4BpMaaakNgEji19KC1XdYyzwkqkhYTpRHH9L",
  "key10": "2Cy7UXVKTvbgkbFhvYw8qjazFaCJShqibRyoJZxbzSyPphMhMLNjeHWt2eNDRhajPEVEvPebMdWjT9FhSQxEeNKT",
  "key11": "4QhyPxUY58wxut8Q2BdJuamgq2EnkGzZ9Btet6HC2e5e4CfCYw3c9B9dw8NkUMBX2PywktnooQExgvqGJDnEbKy3",
  "key12": "5LyfbtNy7EoJdQeS1jF8gp8qBb4ruFykjSxgWwkJh1cmExkNfkUPvFLESJvkk2KDsGEXxAQrcqcihQtdaruPmK7k",
  "key13": "5wzQTYgsXPzqgT38ZN312RFBztSpd2WsGHmxMtoT2Goh5BFE24hsyoabNjpyZDHt46udCC4DdZPsCkrNRWmhcStp",
  "key14": "5AsnVzUqpyR1k91SHj1TqnK2R4dwcn5nMk1AdUrm9z4Cch3jA2ex96Bw7t8bkRWmqJRFMtrfUcMHqmYzyXeTmkDk",
  "key15": "5S1C2oGSb8camquCHDWGCkXkc1oFEB8TQcPKgmPXcUQQAiXYPzUV1kXXuPYC9wHbgaNyzvhkN7zoUHs3NX3QUH5G",
  "key16": "5rRcxyasxxhrDpDdBV4xeUuHxVtqTk7izLakQRfinxCqQcsQZk23TEzRUTRRjU4eHceAjXNCmeJa9jiEyFdfMtRi",
  "key17": "2zKecuLR2G8afGqgPV6orvj1AyoNKsK4kK1rSGGebAWuTR1pyhWryn9LRdfBr9w6SLzMMg6dfjGAkmF5zn17okbZ",
  "key18": "5Wdbh94RqVpzhjWAQx3FePbTsqb3zHftET4EHviaR7E1Du1pTPCYB1mLvSQVqZrNrrXs3reYNAHoFL8Unxw9LfoL",
  "key19": "5uxzttJiRwprHrJDsDtMabi9reBd6oHF2mq4vHuUWjXbGZMDZqh5eTiJQvhjcXYhavEZaVzKtNkD4dameet1YUob",
  "key20": "66mqWM8TLJei5pSejiaWQjVazVnaToZWdiGFe15XQZuwHJJVskzugwndHdKExu5mPqi5oXo5s7Gxc4Ba88r3EF56",
  "key21": "4WkyT7FRtnAGE99dNwo8ePn9sCFXDxtc6a8bYLJSELadZa3Ut169bBhygEuGkp7NVBA8zjfD9Mtp7z8LAUt9W6Ay",
  "key22": "6jWcZcGHYrwepPXZVnrjGG7v4k4Y6WjeBNjcevcDeAxRGkbUkRBxQ5mLzT1jq4PGbtqZiZDaHKkM77fhmzhKvcN",
  "key23": "5qoCCR4rj7M3Cjh3kCFF8eiS87pybzMnvSxBam6TB1knYJFzELGpeUsGLC9MxyV73r74tonXboPVWNXxBuKbpQCs",
  "key24": "4gxv8Z8RCevURJndxZ2PvcMazyuCZMTJewLXZbcp2BVPDXXrnzJ28mwQ3yP1VwWEHjGZ6rjaCVsLnTyW5yTMTUKr"
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
