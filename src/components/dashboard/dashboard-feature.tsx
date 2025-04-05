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
    "4kjXd8QpuPueWKr2AjA7w3jFvxBorja45nSWZ25kmmLZEpuCeUfdZJxUfunsLD91DRuRCuUzULfJWn9PwAq7VMFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41xn7AedRz9NaTc283whCKddkHT5LD9AwWfthvKKRbexGrA9NUNRoUxy7YHJh5KbsP1HXT8q5mjxuFiReeUuZJJn",
  "key1": "3VSrkWAXFQ8pXMvRfih9MpGSvoU5xfuiG3AF6RNXb8HaAwbSrTJZguBibhcxqLq3sq14Gv2StLPGtTK8TK8M1a3o",
  "key2": "EKYXEs9DiNj8DNwz1fb8YoWBuSqV4Nt4XxNxV6LujoHhx6wwJ2UtdWLadZ3uX8q1u8cemYHch9qt1WNzaMF6Epc",
  "key3": "3gwRt4QBZAncSwWauaMo9vW7TQGWEfJNBChFm3QWcFT5Ku4GbixhvVmwKhcBivUNsuXVF5D3jUk2MWQrRNR2aKJV",
  "key4": "BUjQ7czpGQVb7KpvrqgEMxP698dqdiw4FGiuPqCotVpgHJcwUVkDZbehS8GFKVSXnaWjHLy8okA4D5U1BPorPVC",
  "key5": "2y3GWivjg739JeKfv4a7p6Fhv32m6Yre9sGMwpz4kTuMbCHy2jvFM3Q4mh87NB5PAcMA6DSVaJK6ifkQxCC55V8L",
  "key6": "41GdZ9BcaaKJRVgEzgRyhtEqf7YmVtLpKmePiGFP4jypYNnfim5ia4KhpkZQDXr5fPtHKP95ju2VAu1ye8YUtRfB",
  "key7": "56fmfWXWskLnN6JEHP9JQvdWqwrJpgpcvKCXaBfkMcy28PBDuZLSAtqo2hRNGLoMG1i8tQ3m1B1u3Xymd6VFUPFz",
  "key8": "4Jg19TpU4oS526GkF4XfSHYtopCTL6C7LLjeWV2vRDX6wLz15WQkfj2o7kYnTVYwLUdkb1h48fhbnmnzPXRGoRE8",
  "key9": "daRiAeNzK8dtCAvKCvRADys2cuCh8VhrV4X9MmMCU8iDVKm3b6GV9HyHKQvFvFeTacSyLf29LLM34UvPynwtruM",
  "key10": "3RzkxwHR83NS1vSrfhHkUtWAhDyxRBD5jzjgWNhAYusyRK4zPZhoYMExY99W1MVyj1SJV75sy6W798AETgE6GQip",
  "key11": "pcvXceK13Bgu5iQDuczNDb1NCZBhgWvw1cw57iMuym8CtpcpJYWbyo1QyVngJv8vuZBYsarEroRXpHERhFLT6jx",
  "key12": "3s1NaRHLyf2eAS641aTjMVe2ZUBBoiWNf7SdGzZUFsfHN6afEnvP5eFjxwvjyo12CJkYBFKkXXW5RB4hcyZcZM2K",
  "key13": "4o5CVJMiRLCpMUtWHdZC1ZTakXcDjvv5cXpmt3wos4UjyF66upqhrN7ukF71K5XCT4bitgcoRRkEyVRxQD3xo8P8",
  "key14": "5Y4tLEYNoa8jWcCdXHvwgtKoZHzcrs3axcHdwGKYQE3ZmZvwqJN1XscxbVzSVeAy5EzY4kBEU615Lu4Y6c5Kg8Zn",
  "key15": "3r9BFFrRQRpuCRzUn1ebea8DgacvKq9RqCT9zrKuTxDwQwDSv2TYm67vavqjmxh1wbU8KPG9S8FrPEowiNT9hF5K",
  "key16": "44SonHTgeBZ3ShTSrhttA2pggVkZXdtarND4tXu9qvttFJ9pHsqjsYPjKBRD6sMxRa2ApsxDZ7xuYAWgkfSSji23",
  "key17": "2pvKhE3EnPbeebTB8NMZ1jBfDnydmvhnxGaGXWhHX51SGJjoR2gdGDpW7du1pHVnqWUWaB3o3oAQihQuUqHBxnEk",
  "key18": "4oULB3i6S56znpKWBj1NJjrT6zK2Nun5MLLWtwzAWc9cgWppJLkViHUe7Zk1PBeoF3w3oQGnr3b64gcuxAvdELDV",
  "key19": "2A61KJVP9ueQrvhbGiHQF4Z95ySHXvNr4gVcTb2KbJpCaUKmyp3tukXNByZM6oydYTczQZvXAWjXakE8ytVCaYrT",
  "key20": "3Pzx2QcX4BX1iEwBhLF5wdYWKDxSo223JbpYQpMCQE7EFhXbkrGgsd61b2gAN5F2h4hw1STA6Mp6CGhbiU8dpZsW",
  "key21": "2pWaeWBoJnfEwxwGN4i5z1jNo9xkYpMFCyaRs5TVxnDcDrxmmghij3sQx3U2wJK1SFEfmkd3uUtQZQBpBuDFp4qj",
  "key22": "3LpoZhsvXuULyPYNtc34ApZWpm9GakScQZ8KeTCTjTx8EY2NEKUxJzP59vRpNDsFCQKMS12HQc9mjTQ5dqkWgWC5",
  "key23": "D2oMDLtRA8uF89dJL5opUZFqtmjgd1TBwBDjs7mYdpJ8WNugNRrwVxXXDZXdGtbWbvLxq645RSwfmT1o6WdKdUx",
  "key24": "V59jxPdM5ZhSG8QNK19TwhizsV7QRB1mh3zinoHH2mPW3BkofqqAKfdxNhD2itLo6EVdYUqQvMbQWmeAQ2hTjqH",
  "key25": "5uqixtK1vqLZtUXygEgTWcAEi2YsvoE3cr8gGgHNEmoRLDzDXzCms2gMXAz95NTvjPr8eLdQL9bsVYsiWeEnzr9v",
  "key26": "2pj8J9jRaean5fe5j4YSwTCck87LNcxmvsBdgceHW9LXVcDbJ9JDV5EGxVn7PdwkXDScvJJqaVYSEcax93u6rouV"
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
