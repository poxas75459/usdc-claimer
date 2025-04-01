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
    "5nrzWrx9moBqLWBG6BoPfp1inUfTo5cFSejMJfjTv1MfPsbvZPoPVYPgHCpxStrMgW9ja8wjdcxCzJ4Qsaknx2fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j9oVDzo2cnWaKhH2z1a9E6Gfdjf3uUQsmwKebbe5awCpYkRy3bgABLnHdF8yiKtcCQErQ3RSmQiEpD8EFJc8j3y",
  "key1": "VdbAxa6TiYZUUdnwaT5c3eCrhe4arPyc42GMdanhn24vUk7aEQgd3eZVwaf6UQxcu9wnd5erhvnBoNMQVULx2rM",
  "key2": "57zqUgsbhm8x6j3aXY19F9cHiWfWPkuDzk4ov3M2PoUkAbY9UGAvcW8mU7MPwnPgw2DPoZN3sjydxbT7csjHFFCm",
  "key3": "3eqi4LRzaASqSE81BupsiMxJo3NS8E52sqk6HTFhKNF29oHKYuJrQM8wf7cNXW4yXLaSnt8HTJtVK1UzSJ6JvWSk",
  "key4": "3uLQcxLT5VzcH5DsfATYNYqHPZRi3irLGa3chdFKPu1Yhe3XT46pJtDsXPAFz4TkbcHYWkLeS8M1JF9juNoWbfGH",
  "key5": "4NfHz9jtURnTsEwcSUA7c6PWhcEvhomYBgP91BF9dSBSdn2ZJkigN26ydwZCqFhobjXAGARseoBitkzJxeNFtZj8",
  "key6": "3A9NbbSASLfHV8AVwdqTGW96RTnpiQoVQvU9Nb2ELBX92XdwekwRK1ZY22PxqVMDuonK9VbDLE5cNsGp8sccKzWD",
  "key7": "jaWoCU3CWQkexkTR7uipvNTdKowd62x8iBmVRorDTfsk9UViqgZ9dUTNfGjk6gW98SUguDENw1aFPXN1CiB5BqS",
  "key8": "2vaS5qPehL7hhyPkGogXLuA62R58jEG4SG8cJgfksvAqUKpGppEDsFqjP8KzzY1PTz8235eH7AmUQpoYu5mGHMnY",
  "key9": "5kUmVuiXzEZuJeEmpcymgvcSURxpydGFgWwzEjxjpnWhBu8d4yqJ8HjxRCzy8XyBbRpRhGhRDQ6oC9css5S3hQwP",
  "key10": "7Jh3bZRokBjHsF6LE5bNHTrzMFHLjyMRngP4bsA4xPNwLP8aWP6M7qPyy3yijBDgvJHTLCcJB5fUhUM1jLVvXRe",
  "key11": "3oq5DZDm8N3BbGYsyjWyzVeWzLoFmwBKVMJktnxyac2z2AQZiYBBdAFyxgLTrbhQhTsyZLDPgVyNvEKxxKmR9zvu",
  "key12": "52U3SYyDwDSfpMCufbuJbquzxGrLgqZYu66Jm7FDd1HryT55zJGYSAoUPNGFUtiMJn1emGddJghGpzSetFEmdUyK",
  "key13": "5r6V2KXARr8kXtDmYbeTuNFP7wr1bUpWJjJx4bSnqLLN1UGnS3VLtC187MUgH9vdXJAWzncCqv1GGCyvCqYV541N",
  "key14": "24iXDUzjYLUXSx5kd8Qk8dvgjSwWhGPU6YPNBXHrVrDAQ2w2NGyZgJnwacLSsASH3HRHcqtWYVpeaPSfqLHf1rr5",
  "key15": "4dUVcqfvvnfhKRZv6Pi4fPBa5fRnQnCncJiTMdfeVFPGBNVZZqkCFDDmE7nf1siXajGPSiEeGWfZWetzb11XjScu",
  "key16": "3vdDkXiTycSJDr5tf8s4TQyEWVGdek73tWRQiZvzueBNYhJE9vAaym9ri3qJYeCtoSwGJ4FZNFKYc91vL9vtCo3X",
  "key17": "4LAuCnTRmsmaZ9ZdT9W8q5md9TUQXZvZ9o4ysQ3yrQUAhvaH95ZKZEGvmsF2YhFPqytsYBTB2qosyGeh35Einrjv",
  "key18": "bLCdi1sSMVsYptWVd7BiVsn38ax4QLU4tCa3FexfjSUrPJBWmX8eMRFUBwdkeHvgBZsCq9oJLZwgU1caQgfPJZg",
  "key19": "3yj3xDKbCSH2F6Gob2r1ZTKYyh5N8MqybPcLTXxka6gc1zpZ73XLBH9nrYQQZrBKTP4mNCpZygpf6BuKutGnEQcx",
  "key20": "67Q5BvKe2U5GfojvyxwjzMo74txsAj7N6FuieFBQfkfM5NpnPKyEW2UT5D9RdXa1SQqdXntrm5ZrwZyZXFtiyYM2",
  "key21": "4CTvx2MYuiiGrNjMf5ojw2xz8vpso96FCC1dToEz4T5tN1rgu2TxeFkkQCyZnYYNspHt1C1mTpAr8uVe2RTPAjJL",
  "key22": "wJrnspKjQhan4WidJSju7AEC59HimMA4jebxHkw9FkRaumu6zP6HYmSnGeAcrDXDM8Ck3o9U81cTEgjkvHZhopy",
  "key23": "27viV36tw22J5pty6BeyV31EMPPVmHTPD5NMFjYMaGSbJmoN9NxVAnpTgWbUQQWxuiWzyznwPxnzjvmcJJSzEvZA",
  "key24": "1Sm2ZiGN8Lyi9feBgps6S6k3SdrsjWmMwaK9wW6bhQKGvEboaqRGFpZyaTQYyt9xk9QwgL58e9yYg6xnfLhufrx",
  "key25": "4brD1YkXFLcobGQE68WZ2zSA2ZWyZniTcdVujDsvnTp4Mpezo5FqbLP3s3haqWHP4tnXkVioNKVZCbPb5UzxHoXP"
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
