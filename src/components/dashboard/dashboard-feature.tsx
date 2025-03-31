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
    "41rGEJ6wCoE2YzA9MzBY9pJki9pCxUUoyUDEZBooGWSct6dCZLq5637gWLgrU8C5VLiCgvyy8MVh3f6wLSR3S4tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewXH8vahDHYDfZQ7ZjKuBmmeF8TfP5STyyzByJuAhcaRzzxaDtSGZGLZnU2jj3snvKruf7jf4DRafCKmQKMWJqG",
  "key1": "2Cvf1xJWqyowhoagy6Jcm4fzgRKnErGaAgtqdP1KLLMDy3EfjyMbkCASD8uSCEYY5RVWL2H76NTooeQMnU6ERLwC",
  "key2": "46beaMuxGav8KfdPCytJG5oLL6nuv3LwE8WorT1ghvNY4U2k5YRrYLZ27ad92QkW35QT678QeQSaapsNxWKGqrVY",
  "key3": "4jcEHbTZWeQDxRozZrbr67KJQHkD5SZn5KWwafRHYapVCJ2LXU95RnJCjZjSRpe89fwQ2UBgJnXsNtNcsquBZH3R",
  "key4": "5q6T22RouMoxqCKdBU7eyxw6ieC3GVTwgDheMajSB79fz3TGbjC4vYcALWw8K1iNRMV6Nf14Fj8hq3nMRGzdUo9T",
  "key5": "32G4ZmjQViV11EYksDh7piXCoActwvqJtC5F8EcTP3icmgWU9cJeDBz3N8WWyk7P2CEKRxUgipTbtgpdN1KD2UEx",
  "key6": "3CzqAuGtPBR3wqUhJxyCktycHoVPUPXBAa73u31xngpd2aWJapRBodUenwtE9u4oyYq7xicruQFHLTZyJvicFb5d",
  "key7": "LQqn7imvWNKRF3cRjcS3mVvXbpYosycT3wF1tkjNuZuYbqpq9k6ACTHMi3k9xt4ZeY9hUAaZ6GKjnZq5mqdHcDe",
  "key8": "461d9jUquYvFS6SpcAN1yyXgnsMcqmXZWxzYRqCurXswVNpfsCceFrxA1uQZtZzgXoTgnPuY4LBxPEX4gN9R8YcH",
  "key9": "66eZVxgfxiXKMXZNDDHizrPUhomAGFVPJ6KLpfJmxv45bJSa9yTMGtjuwdVEb3MNnLjzFQK9ZFEtU2h7yBJy5Bsh",
  "key10": "jKsatz4fHRpdFkWjNdvQX3sM19z2dqoYiDNNansJSDEoQNqGii9SxjKcNBQnUVrwQrdZMVkp4S8tacHYZyMr1qF",
  "key11": "2hdCeYFKAyebKxCCXRBBYHWtW2HPe6XFRxw98No7BncNF2gxWWsHXFxYRn4H9cH68C5EXC6MDNaX2UyWh2pk9mja",
  "key12": "F5e9GzGXWR2Uow34PXNAB5w4BWR68wiqPegeChEm7pG7puwLdtyJoJxEMYASYa9ih8BPswdUid7EiNbkLrDXmR5",
  "key13": "5buyPiFKeBTcjvQiyUEMsLDBHFnoNXLY2QcMb6TFrXvRzACVHAtN173h1tAwJBLUw9UXAmtcc4tZJZFrTMH1A7dd",
  "key14": "2xaEPAZ3TMzytjyuguiqUax6yaDi8Duj1d6ABLpqgDEEgUh4eNDSYr3uNkonVGS1uQ1rn5JWWV5fnNLk7Vg9Rwrn",
  "key15": "2hCX2R8vEy2s3ithg1mjaHcFqoYaguJRXU1GRkHaibAHo1NnoWomU6xDhoVZ1it3oJLEGoYF5cfdJghrdH15LJmR",
  "key16": "awKdmG9PkP86Bx25Rf7CTkqW2cUCy5cMEVtz3uY1eAihzsu9SruboyA3g7uffZAH1qEpCGGFNh2ufQWpuPGssjw",
  "key17": "34VecCoVVCrnjti2pBstXJbPkHNigGQTxMF91S7zLYCqBMcoPTrw5L9zVqD2nbQH2T4BFoyWzzsNQnuA6grUnMr2",
  "key18": "5qxY1tfikK6z62fGoEd371nTqZkezbjRMoPitP8WMrKqSDHKx53dy2ECRPoPHYd8uiryWuYsi1La7qZeY44yztrN",
  "key19": "4dguuT74Q45rxUtZcLyot75uymhT7rUoMyo5oP9Mor1DasStHj31AEcyG8VAQDjSezxJoWAZWm24c5w3YLvNDnCn",
  "key20": "2PNe6hMfSaNFvymLMQRQr9Mb9WrnFSiUBdMP3XLrVzLNcPBKHJdK1yXpSWm3x18SsWcGhdmajCUQAt4W3egPVZwv",
  "key21": "5tougZdVxmgktUt1Ef9kpDmhDgiXi46Vm9iWGitVnb8SRaxVS9tWki7cSgYi3eF8YAPHkwS4wFkhcjTFX8y2bXPA",
  "key22": "2WHMaEmfmKfPYx1W3mgNRJELxX8sHrPngDAr4f1mntWneeFZabMmgkyRiEZHgHgS6956ZtK7TNMKs59w68biFtEo",
  "key23": "5iwCmREL8qEZVLSVmux6EqAtXthxdYyGDqHNf5R7mc68DvxVmS9CHjBKiAx8nvMHr8uPz4jc5ofJrKhZiW6c9Tsz",
  "key24": "4TdWxsAH4pgCee9zbae56QXF4JbaNdE1X9qAqZxeC9ToY14a2fwJJhZd24PRkAhfQFUG3849k4F6U9FGDvkiiTkF",
  "key25": "5TmdhMkL12qbZsitp91n7zhpjYMM5oi136mb1wtdoc8HCQS1a5YFrnUnnNefN1RfBYTBiuSiPfR2yrE2XLYLcYEX",
  "key26": "3rUHz59CUMaBFjKsn5CZ2phKxMYv7K91RXFNzycXsnyzBnGEJsAUS2Gma3pCdTZHoPQaLHjuran4svQLprttpJcp",
  "key27": "e4ujCFgLHkRCHkjwdaKNbQNi7WSNnPobkrn9UgCQXZZKYwrT9YPAFzaETQdcGnJqEKKVrPFSw7GVSSb1E1LFwLN",
  "key28": "5HzBLSkyihUDHc5NixP9GTKYjzwekhFPn3yWy5ZHqBsKS4SLWzDEp9NR6bLKtKqF6E2bZUTVwgKMPcRgTTWJQbJP",
  "key29": "5EZrV73eqcHqRfumJBAiAiw7No4oDfiS8Zt4G1bWgUDS9jN2Ds4egT6fqQ4Eox3aE1RqkjBwVtaqsp6C7BZcDyyu",
  "key30": "48kkjPqXHhrmHxpBXHjQFt1MtMW7z5oTRS7rZyC88wQhVDNCT8UqoF7QN9zbzTEAxuJsqkKY5HM1ZMNxgnfXLe7r",
  "key31": "tthCuwVTaFzoAUuYJmx1ndzJUzVKwSxwn8BFeJWh6Ne1ZyTDqTW5em7wWGLgZdC4nSXYbHqFzv5YgrYwDzPqEHg",
  "key32": "bRi2v2MibwbXwmvDU3Av2arHtqmyq9Mii95f4h6HuGCotBY2sJJ6MXJzDZ1A1LGyFvkcbB4Tbrm8iQLSscterxX"
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
