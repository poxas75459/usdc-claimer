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
    "4gdYALcynjwq2sJaSmXorScWG4oeyYfXFxcMK8U8sn9dW2FnoL3fKDLUGCXssXws5QVyt1szet5B2dsQDmevN5Yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qgBxJCVxh9Mnx9Sa7eXPHDWP3D95hfrndhf24HP67kqq5iVskmA4FR6SN3rxp2wXPa6k7wTPHMagEcNKnAWPjhe",
  "key1": "2WLC5DaiBZGM83CCHMDJCF2WmDM9PsTy1zVEzcYpj4YVqaEXPQHaErXFjdTgfy2uBuHrh9nVSKXekEhshAuHX1yE",
  "key2": "5rxsHwdasT281XeXFPu83cjTFPZJYrdxfGnrUsuAUUAeiYfyCyoh7bPAwRGA4qaK9hGZBR2rwsmTs4DGKogdRnmP",
  "key3": "2RadT3CaDMCuFBthbZrLqqhTU8vjXCjJHwLL1cvWR5zKtct8obyieuUmfxXRiiqGAhyLXhn9CNm5Y6cL82T7gk8J",
  "key4": "3kipM54LpfBHBKx2hsDT5FKNRFvqGiTgLZjtdkQBTdUhmCX9vbZrHskWFT2c4hnhy4qSSaX8UjqFLko4mfVJvdz6",
  "key5": "3DAnZaJgC7tnGKNm3nS6VemmCEusvz9LC7cTm2Gku4WG5HxkHTESctJaJxX5SGHayT9M5biBqiPfewQFGB22aEXU",
  "key6": "43hWCSNLQVzhk6Ne9kJVbD4b87dMp9v3Yw4ZuWapmrWdbxYEdqeQmw2354z95Wx2eAMnfBx6nALe9zSMb27ginhF",
  "key7": "kLmwevxcChpbfUuJZYRSr1wJGPEoq6AETVBPfsdJQKzJd4BDoQgQSYzM9QHZp9FB71tevVkwugkZtGBpQ1Ehfwb",
  "key8": "2UPWwKbg5iWEtAfujTiwzg2EZqfXyxMsX5oFPZcWqry511rwjJ43HZcymVzXRtuwVHR38vLTwG9eBTvH9L1tcVB3",
  "key9": "2XLW3q9tWHAsSTDpMdBtZzikfQBmUhfJfo2rgGHrvXM7Kk5nySjmozcPi4mFLJpEWs1xaAz5vAJx2SZiUti3TbsM",
  "key10": "32snBWnfwR1xkxD72VPX2Cd7jsuhFsdnoXfkfFgHHzUtbnuCribwdBhqR7UjmYpjmbbeiDzfeHng67YnpX8Uq22o",
  "key11": "2JFDzXCvSdFZkMhcPdfy8Taby9fXv2sBmh6AkuP9w86EZHG4tnQN4GmFAx9MJNwnB4FKbG9jZ4HRqRUnxT6mCHae",
  "key12": "5fP8ZUXPcnrRmpTK9igbrZ1dPyFFscjmNW8UBFMX78TU8T9KJZHniKd7JMi6hZ5XWe8SjXybnEmMPt3rKPSnBfMW",
  "key13": "2HLt7FoBzh2d8Yy2ArU7FfKByjGRHQJfDb5PzCy1ToXwaERd91x6wAMyLzen5RBxLSNCLiaTghKB1SNNfVxsKGTR",
  "key14": "qRXjuLPFvq7yuMhyCvjRT1Rcwhea2pqWiAGSShwtgzdDfE8tLs1YMQfEXpV4bzjTQUehZp71rNyRXv8tifr6htG",
  "key15": "54koXY32XKXC84NfW4ZHbcPXhpct5Ht9T2LZmXcmBsinaC27dx3g8rYAeTZuurrp9L7KnmLWc2ut1VnAFyhL6EE8",
  "key16": "5ALqcH1t8hMVA6nruA9GjArxQfBARV5SRcDEQspoqkHtbmWJBA4qo222Ugb1cmTV78SfSFkjxF18LtxfbpyCYkDP",
  "key17": "2MRtbfCs3rk1GdNBDK2xpj1K5uNJUwBNc28BaCvRLQgVDVA9w9N1f64qUDUnrqx4m4n5a7Lefpuxz27r94UkxpCv",
  "key18": "GJbVcViYegRTXiHwph3QZWLUgsSGWruHcdgBsVgD2Lnssf9ZmGKdyCLegTrzak2oeTW5Lw9GjtEALpVsGXBWDS1",
  "key19": "4kcxZvPWYJCZofwyU4mQhYKjwCq7SoJJmAHnemB5XfCDqEzonWW4bNNjjoT8LVa48sQLxig9pnDPdLYNdPHFVVma",
  "key20": "5EcimNs1ZNdbxBeoMkhJSNv7HTwj3xKjf5U1tCigUn8oZAbfcLtFdGCyYzrkuPeCz517aUDjVbFwvXHPsDLBqHFU",
  "key21": "35gscMnbDVQiG3rEc26RDaujGzssmbG2tg4w7GjhEEdvETwNVMSTonT7NRnA9xKZ9JVDMf7mmQkQsocGEhHCjSmi",
  "key22": "5XEpF4aPh3zaYXsaoFj9sLw6enryUwQN2GNxf1y7C62ZKFHgzTuVeKP9FywmzuvwiCU1ek69Pf5g1pHUSM4NUgiG",
  "key23": "3oeHXMjKhX66Gv9MXGPV7pnVKRhi1RZQ3VvER6btZnsJSofkdRmKmbNNMyk7Q31hFYyaordDcPFyqdS511fGDX8w",
  "key24": "3zC834ZjGBoUuKKLSnHFoJsSE4nZD3VdHnGDZaivDR4zXRBwk8MGywB79zPuVPrwVHdJ2tckrt1UcZfywMXEJ5zp",
  "key25": "4PWX7cvC1FNMsYp5CD81b5jYA6gGCjnVEHNxA2bHZiTyGfTczBanhgrweSjhPf7PwWUXv7nNt5ZBfc8TTG83zkLX",
  "key26": "5fiHo5yERFyZEFdApGUGmq7QKQdd8wZi4nxexWrhGdFNNTC5EQpHGRuneEVE95sno44Ed3dcUCWozHjMcqiaqfRt",
  "key27": "4qLsiqWh1CfgssYscxa37p79Je2d3P4i5wsku5ANjcNQAr2xd2nBEveydzAL81ufJ368ANLz3JzwJGyGMZquG8fX",
  "key28": "Te74s1H1b4YE91QiHyWwSXHCSeBonWZESnmMTziW9PdfYt89vL7v4UrRMiieb4jhKYbWkA52ushtGSfrn1tGKvL",
  "key29": "5ujLxz8F9Gq5G5D1LSPaQZvoRosRvnuVorKgCPCZCK4e59yZaTy9ksnJmb9GFYuwiojSuTVCnZQUVQHKg4uctkSx",
  "key30": "5APgcTUzy4xqchBtiPxxGJiB6rBNRocLwFy4KZNQbScNFaUU5TfG1yMy6QiqMur4DbGSBGmUUhXinLL3XVBWNhDY"
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
