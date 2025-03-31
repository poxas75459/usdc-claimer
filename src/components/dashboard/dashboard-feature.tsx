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
    "3rxcdB5pqXodJsyrVppxy5JaHoLc3DRJ45SRc9JpPBhjE5evr2LZJNHsDeCPVyVuT9hghHk38Y3diakcLqEsykMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fyiHUPETCE354bb3nJK6qpafTLX5rkoixz7fPJ5F3i3eKcfghw5tHtE52J1ajkKPQxCdiwb1u7cKgNqndrjqX7U",
  "key1": "3eJXwB4psDw5VLNcXCZHa1Hs8H3dy57vH8Vuos1msVro87XCsB3zydF3H9LwZ9zPKyLyKPEw1ackfykcG44Go7qh",
  "key2": "224w4i6mVqiHJ8dCb46u8vP6dpgEiDbugjWfQ3p2MhPc9pKKArxWDEXd3gzHSqr1mxbSajYUZSjStFGMsGVQfhnt",
  "key3": "3FkX6tLydywaLTCBVHJaqWmo4waAGZgge5wmF3r56e7JrMZQ9BnYsz3yFomeiwBWbNpYeJKY94PGkkGaeLjznLZ8",
  "key4": "PHTVgycCvRuUxfYFJKBGPCkGZ2oSb8nYEcp9t7wa9NtZuGJnmG6FD8o28GabEYHeAwbzmEhhMo6NBtb9c4jWzuv",
  "key5": "4K4jRLrBRwMGLqyRELj7miTf3qaba59ZvWZXt1RpoPT8Dko5W6QBToTH5L7tGen4f3hFfUUSdYrRXpQXFB7WHkuY",
  "key6": "4i4ec9ndd5bMqio631Cq85mscWUBNn4MieCkh1mg8eUYi8hu9sYVjWs2u5m3UJcWudmeLeJy86UQC5ZHaTbCeCjT",
  "key7": "2BCDjFm45w8isMiyyjA9UXSw2KMUjgBUQk3wwrwEt7ATW7zipY5L2yTwES2dny9uGTHq5yk45VgueTHqiUJru38u",
  "key8": "4SSr7pfhNW9yWFZ3ifsXMSotefF1cLVvmFPqMQGT3HGBDtqJUhT3CjYek2vFmq92GwchEhxbCgNWJKfFTxVgrKqG",
  "key9": "D74wDRtYzPxG4EpwpTdBvkRdS9LCXpECoHVvYjCfk63mkED9etyCBf1yaAGgUrnnPyo5tLxxf1D2th1EBMFvpjr",
  "key10": "2HAkoL9yE3MyRB29cqv2iX6nb5ym1GzHCfdamacRXztHvVhR2zY8JU7EmdJyUR2JiwmFRAoPKTZqCYtGTkzKFdPD",
  "key11": "4J5YGRxikWiGt5q8WCMYdM1eQTWFAezhU1GhCprUgDTrPLw7bvEvNsbkjSj4sg81peGXEqX2L5jmPMcvGpxXYMt9",
  "key12": "2UKT35X68o2aPtmzKeF4D7WmcS5GmEf6sXiWQ4ZyXYpckAWX9tokq5GjTGCK1tuzgCqtZzTxoAKBHfqwQEpcFszX",
  "key13": "2kDXNJfxazkJxG7EtikVYTVPG49DWtQZjYR85raLxwWH7Lf8yJjSiyLwPFGhhGK7kABmw89JRFeen4qbGXWzvoNw",
  "key14": "3Ah7rnzaRTXLkayatUcGVLRC4XoRcBFVT1NmDJRbnbK5mkL2MqgJH2fv4WW4XA2hyRXEaL9dRiTYwZkREEebG113",
  "key15": "5pr43oSedP4yTwbpFFowxpTWyK3uj5qQAPWtSkWqkcfnv93HSd7c6icudrUyrqAJ9z4Kma6UmQg1kQt418P3stid",
  "key16": "5VbofDUxFHrTL8ezM6AQrMpFMFbRCGwGk5B5CuiNbGL8c42ErUnpANCWFZCbfMmmbQoYz1pt7mUwDD64jTmobN5B",
  "key17": "AtNZAtAbAGrxb5NgpWsMskchrGL3EvRffMmh7Ah7hjUENBpkUPpEdXcz7Ec5qENBU5eWT3iYzHk6DjP3EkDMVRg",
  "key18": "3jkGiMQRPZ1ECniU12Y1AHM96MRh2NU3WqNnFkTwSkhoT1Q7dTdJJbN9sjMFciuAjD9mKvsFXhTN6gdht95EUhx9",
  "key19": "4jbN8RjTC2jhBJnFNmY7VshiR7mM2BdNrLA5LhaoBW6jWPNfzGKwf2B83CLMhPLfqkJDRFSWwnZW9Ha3nYfSnPL8",
  "key20": "5cfswtXx3qUZYQTj6DYqWScVbnqzkzL2vQekQP1xV1UpRiEAYgEqxTk5EqRM7ND2uJ3auqzjxewFoEe3N1DYLFiR",
  "key21": "4sNcxbgWKrTFhTRwXxrqeSJoNzX9mQv4e9qMAjew28tCoypeEMy9FBGuUmzz7vwpfAfnBsASUcsaZbciRhCJBwR9",
  "key22": "33wecnN84pRzNBfyS27JEoHTp3GzuhMMonvQjgP1CF5xVCY7i6WCJK74vHExkGwPShwvPWvFn3G24eh6JrNtvTKG",
  "key23": "45MkUk8LQv1CRyUDrC12TTKEf8CVxXso4rpRDe92NYSZX8aEe4ATFgBqb5Ymy9vTXW3v4ZqLdTm6PHAWfUJZ2eKq",
  "key24": "5rqswAaR7YbZze6JewL5AzYeGM4HRDptZHC4jUzndzDNRC31qshtMJhE3LwyCfJkVMnxZa4vioxRMayTNjxVgmxF"
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
