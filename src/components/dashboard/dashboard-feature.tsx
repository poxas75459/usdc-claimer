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
    "2jnoNBeHvD3s3ipp9DKZLuh2S17k3TueWrH7cvNsJ2pGBEdsgTLXEsZNidYGWcuWguRBtjDBwce6WS5jLbtRNhBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ypckVWzENzoLntithQZuUGL2XxmLY9U5PZuQ1RqD34vbjzgvBpBcbXHTnynxwTUmWbZBdWwZniBJgTMEPXEArqg",
  "key1": "o6x5PtQujM9VDBy7CyctA4wnMYd6xxVQ8QiH7aTBTP5yKGs5GfE6oi3ZhuV1HLSNrVjfWszWGy22NKfuzX1Sj9t",
  "key2": "5VpSF1t8Ckb6AjfenvAT8i5mhj6mYUisKHMLQy8x4R7kJYwUHb4aKn151baheVXff5Tqw6dvWT699YHtVqmgmJjV",
  "key3": "Zvv7eDs1VU735yc12DATL2Z4PWcF1WnznW2ScZjHAMw5RjkB6sUs91Cz3aALLeWubUh9j9uGRVVrWXQ9ZmE8ueq",
  "key4": "4QrFqKW8wGHk3bXJCDpupUmb3fZPVkr8QYvszMr2GCiM2chT2QETZvUMisTL6bwjnTF66JcAsVWTVRgKnRSrmDKN",
  "key5": "44imoTXLHQ4KFTEicEGmGLJ5JpB56EU79R7MRG1S9expEcayewtua8sCFtUJSL2VJn6pjvPHAWbzKE5KX9m8YLqJ",
  "key6": "38z1spo1Ui8qhwRLHAVvfgdgkhsWngyRpR6t5ipNVKp9GxX8Sb3wruVi1fvcsMLPVks4qDAV38iTdXjbQjRfVeMv",
  "key7": "2FHVXtyQrKeJc39vzmNxSXRoaCvbTohhqg62rKJJs7ipniHJVGtg94X4rfy1tsuYmLQYfSA2p3oBFrkZTfwKepAu",
  "key8": "5S6qqHvB85GyYwmg6wXoCvPsKjha2Sj1VmeXHpYH1a5UnaAmP1cxoySCkJ3RJgEvDrDRPjgGTFSMoYAqoQXtfZL2",
  "key9": "57qsMM4bzoPDWcQA4UDh8uoEMFscJny4auFrtiPi3FMFGzE5UuiGWSUZgXGkcmo8PmzAWqEZAyMe8bLvJpm789Tv",
  "key10": "2jQPszJEEMGiyQBP9MzCddasNeFsjiAAh1DmSEWqmnpfWwKz6mAgr8ntCc7DmoZSceD9gQpQBgRmsWE4mihb6WPu",
  "key11": "5Me6rJiQHW1xjErW1Gss6pP65Nj2GLbpsRhc458YUN3D1C5rn52FW6Y7oK6WxYyEcnA2t8pvH2NdY9saxnYgP8Hr",
  "key12": "3PEGm9CjwH5U7vDVw9bkhaEiM3WYePBQNsTKpcMKLvgL8oZzygcHTgTEMF2MYb2MgTKQ7CPXeDWqLB73jrpAC79g",
  "key13": "2UnsLmwJnP3DRoZEFZXW9vphkCmdd6io7hPohUG77Syf7XgNvE7oyUKj5nR7C2quwqWhPp6Nn33Am9ZmjNkABkWH",
  "key14": "36BrEMwSSCNsW89dfiP5Pow2asxESFsAWrM1HLfdcHF1yhgSdCHvWdz7YuZt2LVR7SZfQ9sgyXVoNPDZ8QNuXcr6",
  "key15": "42JG5k5Gaj4Aanpp2VJDEjqimkNkjijW1XFKhcn7dYKxsggaEsc6XqQA5DcdWWnCgSQPB8izMQ1Z48Ef4LUG67Y9",
  "key16": "pKeLWpjvgCAiNtNqBSqzuBva9FBhVm5dmKrpHmGKmdHzosiEuVLjqskodvdknxccQmYS5JYDkFzr78MyonASvws",
  "key17": "29mDwCzRNLfFSE8gCbP1RDZuHVSyKg3reiW2EjYqa5nBouqYtWkRYcLE6qXU9AfyJnQF3HE4cobjiquPj8bwGQSf",
  "key18": "5q1MJbURoqwiW6AZfWLVZhPJD2qYuAXw2j2T7VhovzzgjUjBfuSG6aAtUN6MBK4jf4AfFbMKYABE1DL2amc89tUr",
  "key19": "3gNXevoSirbhmX3VCv2xLN8zEgyNBZoTkQGimg1uNVG7u1LE2QqvhRkt6YR3cGKrSbFhcvTNZEnakWvzphoKE5i8",
  "key20": "2JPr7Lyqwpw4AkDzKdZbpngMcp4nUEBSCjtotEKsUGCgKXFy8DfvhepS6mnW9GAPYxX4TASFqFTqW8TQ16hVQLhK",
  "key21": "5h9oWPZ1PakR6VfwhUNV1QNiptCv1QWTy3rAHAw7tykkcn4xpoGK4ws3inzs7ehLZSSZwVixUALrgRYFVCr3KSqX",
  "key22": "2DAyDkijqMcz2Lkcj35ucBouNkFmCLcpyrtM8Zy9bVT9kATfpEvSQEgPKLkkHRW2W4CZaFvBvJpeZPtV5XLhMVLT",
  "key23": "T5o3VGKa4eMLR4UYmuR2EaZbKPjgTcKoTaUeCTEH8xjaTcVCs1g6M6v98tj91N6spcKZH1CeLTt5QqhFX3cFJZH",
  "key24": "4rczqxeF8CHD9AMfcsV6xDe99kAAm2j463oX2NBVm5HQ3yjkA76tcQnL9dnhSy5waBQsKHq8PcfVRoihwNDCUkWC",
  "key25": "5Dr28nMHPEiaAxUfT8HsdtnZWphg3btsGREnTopGr1jEgUK6zY1Y7LBFfxsSi94u1bBxhXouUgcY5hwEMXNr4EFX",
  "key26": "hgcPdt7UXgTqpgdofLwxdaDmdWA93RFgAT4oHoYyHo5uzyJ9PfwvSThX5hEibuZtsJbZcSeUg9vgLGHoQMhqRtT",
  "key27": "2nZpAUu3K1ErwGVo671SNDBnLpAwHWYT4fwn9HtGgoetAeTnjHeHwn7etCE6rkNcVnehb4eJ59sgkW2dxPo5R5MJ",
  "key28": "3QYVCSYu1WbPLWRRRdYyjF79WoMm2bUx4GRvLP5ggZjyctkzw4GbS4SRZhECyzFDUzayXZnVQGp7JnTZn7KSpk24",
  "key29": "33Nwp9pXbBbXvbjvTKYT9coeUZACymmJxs15HuV3QnXJuKFxokdP1Ku5DFwZnNJ6FvnF7kdqyD4VN3aDX3EWXVAL",
  "key30": "4UHBbWwBPwGQ6d8FmYDn55K48R7aHGv5Jr7HcvtXf4vxFFTCZpfL15NBpDH4M3VmZCYj5QgYG4esyQtAvXF6AkoN",
  "key31": "4EciZJWqUcLobwSERWKtUV9hW3WQwqzfF6B7eGPVcoAwgGK2nthDqouRxW9wxL8ssqiPuTszfuV772AzzMhqMr6N",
  "key32": "2xZhYM6FKVuUCotGRVNFeNGRpAch1UtVqe5J4u654gW3T9LTb6aYAebxF7HiGSAQFCj7dRRSRFbvfEtT24YxcqPR",
  "key33": "3xkWWTqir38F1o54AX88dyRoCSyakdSyvj6B7WzuKZCQzNt4EY9kCGiFJQvff7DpKAfXpYvEkC8LxxvN9bKbT57C"
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
