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
    "4B1TtYWuVFqgXMiGUjgKd19UaX61YMHBZx2JYD6pwjsn7WwvVv6VNzmhsXsgsrMN5dTs9KT27An8i4TxEQRGeE6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28PuNYWAR1JffJ7jBtCpvnGVHgFRkTstueZYoAowejdqPqF9ATyskjzfAxYVpceHvz82uDBoK4pp6kEpFQhXfJ1C",
  "key1": "3WdpBiSDRqawCZgzLJ8yB9SYVVBSK8hj9y7KKq8Bgk8tDek6jdPTV8eELSQzwGabxqhSKKWMc3S8HvwAUXHWcPDj",
  "key2": "4qJfheS7U9Zc5U6zXoT91iWQ356xxX8AHeLFHFNbsmqL7TaFducyCiqDs52mVjfqTgJ4PpjxyN7orzBZ5eFPPrsN",
  "key3": "4vAEH3Qhamz1wZcUWC24rFH1GhbcHuw8UrirhE4iggqTsyBD4Mp4muFD997W2oDU5VecXhpmxgiSpnyneKsZhwwh",
  "key4": "5wmQrFtvhXH9i7xYcfs2g1MLfDQvC2jyd9TTa3EUVoq3xzT2xskPmWpEbvZHiUTmziCtHyvZsoZAT5GhPGeqPMXX",
  "key5": "5SeqQmLNhdii1w2tyaSUuxr7P5pQ86WVjfWcnPLWNiSgcodtbZ7hany73sEGmVEUjC8ob8ndK2QY6NMsVZ1SzVzq",
  "key6": "4yJvnQpVT1V2FmSUyVARiB8DYyzwGFEu4uqxpafToGxmRtm2dV4pVdXHC6SNQDvromRLJx4JGDRkBspp8Ue8c8ch",
  "key7": "2NMcpb8KRc5RLs9VgAS5koW8v1ydYSfhAabc3UzhKod95MnCMjhMU5HrWQU5jE2WRt51Z4qj7us6CxSTvLDBpx5Z",
  "key8": "fMwM97tn4fXKnYLRT4y94iEcE5g2PPaUvZ5xuZbSkvs9F74cT61WneCWCRNqSrCBkDdZZEZCydTYX8jRyQPcinS",
  "key9": "57oAPo1CW2gYpAk36NbdayKDqcS4N3rA7m18SZLtjsRpvtTrojdmDfwpcgE3NGoE51VPJ8NmpKafDCgdkDuaktHm",
  "key10": "Fyt6svR7tzSKbFCgPXCQxf7ZHWDsyTZhcf9163YKoYCMaMVYwm8SUEzLA8Sj6kTGTj9KcgB2fwbeLjtU3C1K4D7",
  "key11": "2AgACn3e45UgLxeArsNXx9TwD7gXcVrDSTAAry2u8cLAMSTbJu1Gh8vDmtKtXfBh2hjLnnX5yhWvLZqA2ZqfFM8t",
  "key12": "2JUooAmjA1ypfLnM4F9X6vQFtC5SHkDVhXYP7fNFfjfDe7jytHNkQjmSmiiwfWARhxvrgwTAqyaH9s7nmqWUshUd",
  "key13": "5ESaVfNZkzTy8ATCedkh76dA9cbNeRxWRnqCZZrLjS64GCNwtn1zbwWa3odLapFvNBmMGVPGkkrPW5GW2kQjLa5D",
  "key14": "2WgJhRd18DDdxGJxSoFZPpNUFiR3TR1WjyWNfW5vFdb3CesbsNESZF32uVjCATJLkN6vHRuSPJs2PbJFiXroJarq",
  "key15": "2H5Kq1LLZ4vw1k4zUq56iaKsqeuYRut71GZtsUmGziBiw17A5Siqwe6fzoANinkLL365eoX2hn1aMqiTpk1NSehU",
  "key16": "ZfELbqQrhHDJwiUa8hNXhFSZkuuEvvz2GStztDidZXbXqiCY3Evyepff7JnFJoonoeRUK2VvKwmuEGhX8yS98as",
  "key17": "4cn4goo66aTM6f294YeBr5TGUK5VWuh6BWHvMHqt5ZhLVGpnyY6Jb16T8vXtTN1jgBF2woMzPLtdif49Q7EZheX",
  "key18": "46eSPtzt4QdtApDiG5WWzm2b4WUV6MbDowe526ME63RqYUPeqH1NJtuwSY74KAWgNTmCiMvEb2f3ueRuW3REXAMG",
  "key19": "32XXKzC48NYQ1sCoUZnsAgWP2YXTDFoYEUkTBV58hhHWXedwBp9BqV3YyhASbK6fq6DRjJSXAasiUbyfFkwU1SRt",
  "key20": "SGkDKVoUWPqdh9CYupYpCpa4WGixu78piJJqHKz9JMnzCzbkHe1gBrYPz47vZ9Z5CPPiLbpixvhVFAaX6CY9jXk",
  "key21": "2ygMF7e6JPgxYEnBL5kpxYTBG7Sjkw5cM8MQ82QiQ2hYkNn5RRX1BdHaBoJWaaGsSbFSymBfzdKfNAgNZNPzton2",
  "key22": "2RxtZTEsDBDvwPmdpubP5qDJ7xbY98ttN1bXThZYu5Asaa1JX9cG8MjzqKdCD13967ePtnppnLKh9jBM7484pPxv",
  "key23": "2rVtmduDhY7mZEqRabu2FmPmLTpNjz6nJJAw3oh683gnSeZdqLRKyzvFn7e53dfJMZKWeog1r1oMxboiZcnGr6i6",
  "key24": "2kUynnSyMsZeBqTxtz34vJi86s9a82hBWKya8TDLWowHbiWmWXFGfenuhJPhexH3MX8daTgK2NmuYAFpCdM6nxiS",
  "key25": "5WRiC4C6yG7eVDHz2p6Sxs9mxbSvRVkntPnkpJxrFonyEvh42q7K37jDPQRid9fBUxunt9tNeVnJJ1gQUqQtSEQ5",
  "key26": "3MkrvGtDr1r52D2i4mf9D3E1A2ksJP3bWRM4qQddgEsmk1L5oZmaWhU3cWrsW3SnHpQB7bYuAPCqPKxBuU6BV2iK",
  "key27": "BACUignRUmf8XzNeji8c5ugcZiQ4GMhfrPFAbJEev191TiAKxnQQKRVrCvGanmo3heP9MLEj56ten93a7n85Abw",
  "key28": "4RGHq3R7sqUute2VCjbvp9VwSXspwHc87FtMdednJouY7WxykcGCotJ3VncNHLnYBjfwU3ye9LgXrPNZD8t6Y1Kx"
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
