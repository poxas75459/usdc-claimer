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
    "4g9P5nZDe4gW6Vdc4TmtwPR2hGbSYHDjhSQ2e4SgfTkk6fBVrpSg9gS79nSjwP1MwmkVm9mk5ShKYRRvyyxTYMsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zm39x1tAR3vLPTV1Jhw7SbctXxkYdHcdsSKSHA8DDGtJAB7jFnHbwY7mP2CkumB1iiPM9nPdrbynXBXQd6BfcHh",
  "key1": "3UywZGMW5uF31JMQRmukHccxH21QGExzKycjXM2xRnePEbGEQubcJ5jUJAuAj61U9VPTULKaPr9KnvtzrDMgs7sZ",
  "key2": "serFkk5pvi6RXiQAR2rA5dPhtZ7veCQEuy66knvJzCYZLkbBAKWxrC9GcDgUNkr9Bind5suk1osSNUMx4BtbywG",
  "key3": "4TDn8BhTxuPoki8ZvCQm33ozupASCnXvwvuuYGecsCthas8U5JtJHHGr51JmQDYSfm5WnwcuKNR2wmnFoGFMiMmF",
  "key4": "rPiRJormnLDshFrcy64jjAteFCandAxbuigNmC1t7sjny1DVUhiLi2UtpfjifeFN2ngQ57MUdPsbNrMNe4FCJkC",
  "key5": "asAJ1FHTNkhzA59HfTP1hecG11AEGJkA8Jy1UspFKNi1itFBnxXoUm8AzWq4LFaLBUWz5oQrrnk8hvZeeC8fcHd",
  "key6": "3z19VRSiVgG6wQWacd98rYJpoANKDtuArRoQPRUT6FEzhJaekLyJ3JatUpEPedYVHVmbVgd8udonzn2oZ3U6iBNF",
  "key7": "2JWCos6WSYu71yazAqcCVkszfhWKyMizhXj8f5KjesDHFQ4ytZBu2N1rxqQbNUjj8WSB5wqSE3NeVsN5kozYRjkV",
  "key8": "3GM3zYa4E4mGryhYQU1dKPuRFnPh2FsYSUh7QBFVvY2X9HtARhivChjWamJzUAGL4nSGAntzMb5U1rutcvSfgC3f",
  "key9": "4LaWaqiEqwR6qgZkYqxdw4TEw1iQx9a7YRUMQ2DHXqX68it58h5AXuPpj7WSqnmMCHn94Y6xRyAkJXbzLL58Dxkp",
  "key10": "kk7xyRrbApwsdh8nxvVBcbUuMAFnoVsWphPJ7QnevkA6vdCgrkQCp1uvxa5V8M4Bh2vsA8dMAiJr3dK3pLU5USP",
  "key11": "5zjvotKDtBt6R5wkwQ3f1NEFggvhc1E8o2ahd7qcDJoVdty1ULb6YVhRYpF7MtdaiXA66DG81vNJL2ooNrDWZXCY",
  "key12": "4gEDg1xMXdyXBbQHe78V8pkYWCwrvkSXipU8xXjV3ftP2HCteEX3saEqy1KyLBnK5fc4UcHkbJtfZA4gdBg6Bpyi",
  "key13": "3AfXTPfSZAVEtdWCzzeubM4FYUpKDXQFYKJRfSfrpwZTWCHSfaYg6bQawgP2qx6fZM8ENc7NYJQ3YrPwhEsQE1pg",
  "key14": "4LYC3obN5A3M5cbjTAxGvagwF2fyigKkPmkHk6n7KrxK4MFQy6KRktiJ5RJZ7LskHzDSy6Wk9uxFbvhwkNZwruEH",
  "key15": "3MEDvG3SNVYqceLatLJxZd8w52MnpoWVhuu67MuCFMefEC4UbEQDnD6232LX9p5fhsXjdRr5qmiiehUhvyWrMmZE",
  "key16": "4m857b2FtwTUmgVTRBiJMfav63AbbYrj1ifWu6XuvE6dG7uDesre2LaeyRa2CjHeUnwgLEnCn2Myf44X1xdqyHf4",
  "key17": "3W72mtbR9UxL6k1bowbde58WaB8iQAoLwQopXn3Y8Ly7qwRGBNKStrV7ZDXC4yLacpzPUEsf3MB2HMuDMqWrKp5p",
  "key18": "7vNKXW8Z3GonNymVMKMALSeFXnAMXox8KejuCAjdRjEPy7tWXthh36oGWciLznpdAyB3JkuK1otuCSJVR94AZXy",
  "key19": "K6TTgyYWkkJzU6XgKrVz5UhhefzBHMzLhfsjMapYB5HDS6CysU2uV58M9UzDNZTiEd6MwWe9S3PUojHirk5e4TY",
  "key20": "2EPs1cu4J4ryq1Uf2yk6VsEN2qGxAqMoWBXauDMy8azjgX4xZMYLcgC81E8dAXdpXuZvkLvzoJRKoFynCPadBy13",
  "key21": "3DoojYQAWKkeraC2mrFYybDUhCK874DcMzYcEChkivGufktVSNu2RXiVZ3LEJ8bAHbJaMERWzZsZU2v33gcgNreE",
  "key22": "4Kz42dsAj9wfLqigch2Qa8EBVBuPMq7rkXMTtkQisTYFqTKn8xHbtyyEwma3kf6pnzsuyREWyfSuTpUCsvVxQn3F",
  "key23": "A9hP8SekMer2puqQbVf6fqmYWH1GxvSDaNyNT4aHXvZFUyP6rTPMjr4jVQNMERY6eoFV27k93wHYcFH3bj5ekjQ",
  "key24": "3CWK6fVMNkwAzRPPFhDCZZNcKbgL5zqqdQbUasn3ZDQweV466F372BLKpYMgr8cqywgBeX9WuvntwniqzmySqoto",
  "key25": "5Bpc1YTPRqgbwTnnbFB1CQ2Gz1yWafdXASWHsG4vwNfUsGES5g3EjpZZCGNMS1ksbguVYT58cxzBrDGEBcRVDtUo",
  "key26": "bmtCyC5oZN8Ja8jtxiWTiHQqk6NzB6VMy2GmQAeN1epqb1dJbVBcUCAaD9rXH5yLWnAEurJQtP93QzBG7niyKy8",
  "key27": "5SFh5oygRf1mdQnanf4Nd2etmPFLeDFTwAsfbuaG1thmWop8c9VF27eoSJd8ZYBCdeWg56rghwvtHscR5CJ6qKq7",
  "key28": "3T1LLvuQrnz1qv28o2ts85gQABfcSJKYC9JFG784CpCLVwVUkWnAx95RQb64YYJCLHdHALbSsVcWG8hgMMWbwkKm",
  "key29": "vc83yZw1owJrzfC3wKLEEa37yv3YBmx4zkGUDnPNbipTtCvU8ihGLUxfy1pBsguBYVDSw1D8D1y8MX9ZSrBre7K",
  "key30": "33ywoaBtNuR3s7eQbe5pskguFUoqyLexnmFi9eQsQ1PWF4UNiE2DyNWnb38Cz7Csr3EpJsJy3U3kx28B5rcP1c3J",
  "key31": "5Tqy1MPX9b4LxvYbNPqsAMeeyMAYhSajVdBjNBjP2wu8oxMJQ11JxmYXiLhTqsSEyA4v2cyDX8V3eTuf44Wr4tB3"
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
