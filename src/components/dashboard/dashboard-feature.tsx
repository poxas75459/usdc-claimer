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
    "4Ppjk7iUuZE6ytm49LUj7TFihqMtTHcApTXCoy6HhzV248tHQQHigs1UPS9BZp7FFoDCdWS1KjRbXTFp3tn3qDeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ht7hGFD7uXYdQeMrAaEu8X8gBq8rVnuGRc1MAJ5x39oedSKZkvKFjvkHPRwwToDJztboKKmSGeGmJnv1ihFRBjw",
  "key1": "2rB8UVuLYR3kNqQQXJi83whh2nKkhvR7ympHdRbV8aa573GfPaL2ru4ueuLVm1eopeMoZMbvnSo3m4BUskGNCuyM",
  "key2": "32FiM8RygodRM5NufwwmbsmZxxnDkAZAbZwd38CdfgW4Wj7s5gD9dhiZK4vtbfqEELJEGqUnRpCettXs6tfhnHuW",
  "key3": "5SWENKQKrrkjVrdkA3uFg3N24GGvfzmBqmbocUdhQnvs6dwixggM6miBTuAwWtuR9r2bBgp5a3z33N28oGVABnbP",
  "key4": "5fckiXvmTfCs9aBTL1u1JJMnw9teueRNBUzoVMh1XyvHK6ufFNfkefgufUR8pxPqRyDxquCXr9RZjjg3GcWud6Bp",
  "key5": "d5VcB8zuV1R5qx6d1XY3jp4cMBmftmDtokYd2gtmpxRcLxjK1JVrjSdhqFYDHcRXu4uAD1J3kTnxoeyFg57FKbL",
  "key6": "4dhqHtT8sFPokbfm74qSrnVRA7R4tvKDNZbUd6ga8GmgaKFLyJK2XxJMtPQH84hTJ91UoiDv7iMLGGH1v1Cevgcv",
  "key7": "5iXBzEN8rGmSg6Nwj32cwXYwjDjwSAsjqYAPgEAJWypTdvToXvzkPtMf57kYCtCCoWLY9skeF3kKnLNaXYs7ecpi",
  "key8": "56Z7XnZyh3KbueN3EwuB8cuvBojvD1UDh2S88LZYzBJZDNrHe3Y4HwQT3r5o799S1zaTZsZhFrgb2u5B7ScuUhRW",
  "key9": "4soxiF2Jyy7463Nynq1EB56zxXZ9JypPHDdJjWZij52QbTrHJ1mn7BYTGnGQxTBE8wAwwu1exhdiWfwUQQy55z6D",
  "key10": "2zufFzTmbqi8Mf7ew863NtzL65TUdWGzp7bbQhyiFQbSMjRbuiYwVtEmMRTYD5yEM6vshEYDeRQxJ4zXEiBfSCfA",
  "key11": "3taBsyyueVA2WAuPq6C91f7xfnuCL28riAeTYVcnWqrvQVT1EUtruhiFFPrxcupkZgPBWBj8timykWggH3pZFWsN",
  "key12": "3ZVEeQ8pHk4eEEmxrZXAdh6Ffx79S2iLpxtYTuHBb7kQYARqPRjjkrSQaLfxpZYdkepBge161a93T5o1wbVXpLCr",
  "key13": "2cnTfVde58UCUp33eacHa73jH8QS9myQMiq1TVczxHYHRMNfvowu2ntrf68sqj39HtdpxfD6CuL82cCVtXYooUz8",
  "key14": "2Bn9Bj5VnSqd8aSVLdiRYNEcceedX2rEkg83Xi8HJTNe7XcAtwGqgHvNW4ZdEXYqNUYWrotQKNwvgeJ5TXe3CkRC",
  "key15": "GV3MYtWxHifY8dwpKtEFBJaicZNZFbUkPb1baFTusbn6nHjwg8dnrLDFRvYCpHJBG5Ngwyyp48u4NMucM8kmwTk",
  "key16": "33y3FneubQPm4ahtALn26SJCyeufM37wAgmeddwjbQ3wFsJxf5jK1uyZcSKjh5LUHrXz9zKtsXeECfRFizsEWeu1",
  "key17": "5y5xSieJ21ZzWcTCkS9JAaxJGffVoY6xWG2PmxLNkanZ29mVpQEi6W6DtxvB5v2D6mkp9Yv95mfhVh3cJS2jo5WJ",
  "key18": "3RpoinML76tKVjGNnQzyPFbgQKcxuGwGtJ9Ufxv3vRpuNcg9ZbsCNJRWNKmjYjFCgDymwey6Kq7ZrHf3sy19aZaZ",
  "key19": "5Yv22WGNZJ2gD5zfwgHxCnm5xEoXAd35QuaTeuQmNwJHFh7di2Y22XehHN6u8BTt3q6URo1PhNTcbMCFo2HogUdP",
  "key20": "2qwwkFErC3KsYSACePDSLQBzBzuMGM41qPGutDuQ9jYHKw39L4WCXKpEzFB1kT6oDu9WpZN4TnTe6E5S9jFe6qyn",
  "key21": "26BmVbcF2G73LWxRF3fU5Ka8hCVaRYnnD1HMcSRNTDadH9Fk55TR19Z2NdeVGYVHEXeLpbMt2CQJH1LtDMKNzEBP",
  "key22": "46La2fcpA5iyhy9xWRvYRiksHLAH95UZ5t5tPxMR78EBYRsf8j9UK6wo6f3AdMPG6wwArP27ncSMJsKwuQMjLJGP",
  "key23": "2dPRagGXTXmwcqaKaNfBgJd3dEW62xTMpNKAMSooFrx3xdznozB3BK3qsSHueny9Z7EVDnmXdWmMD5PbTsoBXJid",
  "key24": "4yvZWrhT8ju4TQpYH6JiyCgfEc17QrUJxenRzScWNRtDkHstczdfvcDP8zbhrjwrMZMdFssuzeNFLHKYtt9xnf1j"
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
