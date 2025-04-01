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
    "4SZuvLkJuqr52wvkPwyNdpMohhzXB3nEMyFUMQZUbdXmkyiGw2XdTRHHXtC4petXd7nTMzNwrMfpWd5FP1i6UE2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6bvueLP5qhmMY3n1YiEZ17yRJ2tQkq4YDLsz4X3pSpWUnjbsZqE84d1HPCgPuJ8wQsetkWcjxVZ4wGXxBX7wSZ",
  "key1": "3zdQzCTH91JwU2CvzUtiVABaZJgu9F1T4GzHyspeQLD88yCFEk6nW2PrgZZYELvUtK7k5q7voPz4RFCrTqkfLtaG",
  "key2": "2BsWNMxSSPbzMnWViw96H9gb98saoBu77HrVSPhKSQ73XKmbT1siSxk6nXifXLqpV4wbHd4DKMMKZ9SgqkiYBWcq",
  "key3": "2Gir814nLNmgg5bH1h5Xwr31HAqYbhWEYVMJsum23sNXtjyttg6vk7oMDE7pTMdpc7sWEwR35oWK1ced4EVHaWmf",
  "key4": "5pqgujDSunr5L1imwvLp8upNHpqZoLzoeSjp7gM2ho1bGeFFS1TxnVtpZTBguth7hynpE2ZbF7ucxgazF5FTq55X",
  "key5": "4dEqHuDJsnHfyDvMNfBK1TUqTewsQGPdBPzRQZrhxtP1hm7D9K4d3PuyKsZDFBtvxs81inozhSRZWFJkPVyyFe6V",
  "key6": "2xJ6jaXnzanh6rTxPubqxSk89L3oKUj47k9zAXv1iVqeSdNPPMBJvxkp5WUj1yJirpw66daEVdngmPNh7QQvLoU3",
  "key7": "4hP2cPNmhbLevEEnFvbATJURtunHqCvKjCYvX5ttnVdK9176hxxgWRQBjoRLGoCdVhj8wQHDXPxYysv44ygYEzzR",
  "key8": "SyH1zs75hQni17qNSkG28LfZxNY6orA9YEEzFBahDDL48q8EdHmfabJZqnXkyA3HyXVaPoE4AL47mAH92qySDy6",
  "key9": "3rZzxuegQMMnwdYJ5wvx4RCEpcG8kjVcK9saWNsE3MhwCkPAf6KejSMg4DosiBVxm4bkqG1RY6ZNturX9jqCCnXM",
  "key10": "2JXq7wodEeXCSe9QfuPdGTQEK3a4sdf8WsJ4qgLMuESTHww7SUvpc4z6dNwjvVZQ87SVgtJtFGbHDtrHfFjc9kYB",
  "key11": "5gt36bJAqTDzUUbZBWJYVbyMQ3EaN1j1NJdxkjpVvzP9FUYTvKBuXgtCcWtpxYFjoELHhSahoyA5uA6hd7GvZDHZ",
  "key12": "9eXuoHxjULHw8PhyKpRfLdsyiQvCqKvJSznVUMTkFJp63p8GaiCRp2RerBXCpsP7kpdLQXSgV4wMQzQwcHozjVM",
  "key13": "2vFuFPaPyUi3poLH7cRDnLYxeHKYMfh14cmfTwQ2oxZavSMS6vs5QpDwzwVht434Y8SoQwTGAUqnfxiSCp7MooZq",
  "key14": "5bhHGqoa5KiDLNfpVZVdFRAzXTwR5KYqisxeQGgYNY1tDosRCmFyLKPLc6oMGMQqZ7RMADHPPMC1yUngkuAeqXLD",
  "key15": "4HwZbzAjbRDuXN5uyJWQ5jcXfysxNwKmQnrd1H4KGTZnjnEHPnJX9jGXrA2bnP3zyCagz36wZnjA8AL3hSJ72hBb",
  "key16": "2VyMbFDt9eTV4RbF3awJSWHiA4JVjQiN1FGUwKV9zhiAwQYxFuBASkwQpJaLaoWBM7eYzRqz3pUheAd17k97y4cj",
  "key17": "2e36DRhigupwDMsoimC2Dko9mpmC9Pq3eZD87RbfWXC7RJoBjNWDzXqvmRvgFa6ZcLGoN94mSJGxMZJGpCaQrNkS",
  "key18": "2ejEg2aKkA73wKHH3rmz1QfhGdCXfvhbe1P1aXivc9a5ndywqvaeZF2izZf3X81ouy8piWYaJbGdFQoyZ3wpT3bM",
  "key19": "2ktmn2dfvWiYPSNc346pg5ci6YbQyUmUYWA8yUHA9ppqR5Nbok6YQqRdyWuXtNb3RsVARmfdSRSJQzMjWN8qjUQA",
  "key20": "3AfeUXQfDHDDnxDmuWbfdq5gpgSYjEqNnPHhiyBxo6wij7VfMs65F2HYRBoQupkNVpqpCWpKTXxy1zraPSrsm1bL",
  "key21": "5tDLYWx1bM15CsgCqNyaHjDXWHNH3PoDTmq3sJYUrhYqvv9oJBPAwk7xmzm6ZpDhxKRq76PmGfuBUgLT8ki753kW",
  "key22": "2GdcSssJ1nhVWtmoFx2YyZzK6zHkk1J6DkWPamksuWdUY9KNGZn75bwaayBUZGQEsrJSgisvqMSERXFAcbcmR8vY",
  "key23": "3jMLK8CEHjifYCmKVdfzqdNYBH6apWQ3heAkqAQWymuowByUSN9nyuTkQpX9ELh6hqgsgTd7tN38jKveJTUj8vvp",
  "key24": "3UQ1WFH1ffrHeveZFp9bUENXStZxzhdbqKvcdB5J8V2nHii3RB4Rzod15cyPkAq9vJRyiPCNhwcdndA6e6KS3R3x",
  "key25": "2XJX7YWvydfjuvYTPdDTPwfwYP6kXZqMSGhBDas1vVfR9khU11uXVQ58cnMG6KRLafJg19NGE94Ef7EKSxVNfmCn",
  "key26": "3kr31K1Jwr9RnfKyfBLfBq3MuEuRBGeRhiFq4umWhpw3NM9UWcKzULmCtDEQVEWmzTLovVrYgaMYLG1FzrtMDnvs",
  "key27": "63UEMs4E84zptw8yf5EqDGD8TX4HzARi1WgxPBqEh7pFTpC6to1MJ7VfUkSQqkSznm48gyZMvQUijvxViPgif9Ku",
  "key28": "5demswT2HcHFXLeTCXqH8ysh6T5b6WGd7qCZAoGeKQ8dqkBL2scxJphayqvANzQ3uUs6cuywHSzoTV4vmfDY1BZZ",
  "key29": "67CjAKurbbTpDEkxryTunU44YdpmERjY2xMBEYNocaBtDu9hEJGNk1gdUkDVzCaYcn7iLNZPsHVLU2F6UqPr7Wez",
  "key30": "584PwmGkpRmYPSuZC3nhtCF9Pvj76F9revknCPUVVnLcn642QtstiA5Qkin2X15z39Br1fK5BbHCoMXw4sHBEocc",
  "key31": "3FS44kcJFqqfPLi1rfBFRv8ugcHPyUuHLGCntsnejruS67YtUMT6s96oNwfDPj6MuTWaxqrZEUGLxzD1sGNwfXRj",
  "key32": "55m2x2vZKYWzhEYLpjYkwjcjHsoUfFmJuL98HaGiHpo6Rq4D3wJwrZeqMif96WtVDHgCLT95owB11svXaDkgjKz6",
  "key33": "4SLTTXuAXVFQDoyrrwHAUshrW9bcJXRscBHCLrBX3MVvPstP6thhq8fhkrqqXr3ix9HGe3Wjrpiw5szR7FfBYErS",
  "key34": "3HvpWqRuPcFUxFuBX236rbFjTnmn2QU2mAMpdZfZ1Efmb9kvix8XmQbYPCKtGs1ri1PQTohuFEmWk5j55pYFz43u",
  "key35": "hES4KXBAVWJ7DwpTfZscib9bkskajUuXiPQr3RTXzoC7CpWfurhTrBpopWWqLkCYZe3y2FSvPrmdFnxFZUf4dr7",
  "key36": "5ewPAznJo2UhNtbKht6vpm1N8YMCmKNdCgaAoGNxCsFWroD2ToXPrKaP8FUYoun1n5962h4WsHPvc2Jf35k3aUgq",
  "key37": "66ssNY3TvqrpuiawGhuLHfccy9J47K2528LYMw2hVfs4mdsBYWKo76h7KB7qXbNuYVEyDe12DQHAWvVR6TG2UyCP",
  "key38": "4X32VZqSnzHzFe5JWWAVgSs8neYCxT4zDhwmpetwjKRjZGb218YYcdZogUkdxUG3HXqGZAnQn9ZfwtZXuzypaU1",
  "key39": "5s37jcbnp2QaQkVGETUbX3ad3oJaRhfcRcaKyFj6wRsThesAAqQQuwqcyD58FF9tMFzUJpQ2s1rPgHLL3Wet7LR5",
  "key40": "4wYzzdNHfw5p4qG9M9qLF5vteDTuAgNJA8fVCbdGoHL5voxaZLPbg9aS5oSeTbJfGFdreE2jNoSV9k5ABPgoNEnB",
  "key41": "39DTVuyF6pmjgvmHC5oV8PcXkusiByuaeBbygU5i9vNHuVaNtLSoynodxaX2fYnGLPUDysoA4efFJQSKhaNJzYyW",
  "key42": "G6Eo78seYvAHnqezvwp8JabaZxPfSPjbGzBfYZ8iNTkvokKLWdotfV9fevXnF1LLJXyHhbuPC9p7kBF4oXBP55m",
  "key43": "5JXGkNH43MCzYnybnCwpj94L1LWq5hykR3haQz3Nxu3cBhkb9GBMibKoRdwoyzMsgWMwYifegBifezwoqYZaQUCB"
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
