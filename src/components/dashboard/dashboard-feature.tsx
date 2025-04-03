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
    "sLqPci4rMcw1e4FpiAwHNqr6W6FA8v97VZU2necQdCVEq8L43ehfRH1dae2XccKqd8Y1SmDGty9Bivv9s1WpxiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HseHVPAJFcdfN6RKYKyoDigwpkBntYf2boXWWAhxeZGRYiF9ehvLaxTZRq87FQf2imFEpDGXvjMWCDrHNovMvRA",
  "key1": "4W8jnkU6zJkwXfWU5YYHyx6kGoRDj7tTq6sgqwZak921Fwiaie3RqjVWtrez3f9yeCBDHijZGyuztfBdYbLrCVWV",
  "key2": "2Pc6oTHfpp4MQ8teQDnfJJfYCQQKj4zSAGrHgEzgSJ1y6AbsYqQZgfaW6xfcVdEFeBN5zRDQBZ59JYsTDdNCYXpD",
  "key3": "33hnG6vxup2StX37ERHc7RvZSMBF6zasYG5P49A2ANy7uyjk79evtZTYi76GxRPrYczeTpMdaDt84pzYnCH549pr",
  "key4": "2ADFwrun1Rtgh3Ro1nacCBbW6D6G55rHMom5QcbXtDXc3A9zRu37j3pjoXVVt7S4DwuwQRkNfogkVJoQb24RKVNF",
  "key5": "5G3WUNkRfZEZn4X97q4vqDxHoudDZLbugg88CEYsExdbTy616KmeEDokU6XeotyaRHvo97ZVfkcd3KxhVcXK9ecs",
  "key6": "2tsJ4YEqzFpqdt5VG3jACaFQrw5DeRw7F6UT3LfmhTk8oQsE1LXRadft8DnTdzVEQxXvmhUL7vUnHzva31g1HLhS",
  "key7": "4LTJscdWB6ZhTPrGejy67EKsqTBGPaHATPossCpqedBX3g2NBWF58To4GxadmjNceZk6r3GiJKqGfGuzcgyfFd6F",
  "key8": "4CbQ3Gm9HM2J74VA47948HyEh2V69tPQ1N4Nm8FvbGK24E8LMaqQvJ5m2Vxz3RtRywpkWP8GRYex5C3jnR6ws3E6",
  "key9": "669vSKABgS9HdJGXWtEqiLbhvbMXB8oNezmyxpEybnUyCz4WGAe475Vp5M9hVGJEeTSxfaDaEQKaYZuJHqvNR31c",
  "key10": "42PrkVjUxj2aqpuwSzYQLWtKzyRCFBxxQqVdhUM3YWu4dWqcvAA8KSCmqaMfMQxWESKq9txU6kUmi9ABjtnTEQxi",
  "key11": "5D22Bkyw5kaPutWR3KJJnZfgSKtGSBjkkoyThDRSuqS79pcqjhNs5RHPdMH9Mqgra3zwR9pxebvmGZekQKjAAsj1",
  "key12": "39zydPiGTEChTGnoQtYfR2XdsWUDKN6qgqDtK4mqdiS2QZ78za56LkY2TjF98gJRqq7P2q8cwmWH6nP9kMoo3f6J",
  "key13": "4wRGVTUbeY4kro966v1Bu4znvmcbupXAqahapCwcuK5DMxdREpLDW9QoZJi6khHWEhMPvNrX9XddwFPVF9eWZon1",
  "key14": "2QbuQxhCyugkAq7i4cbbNQUpGyhspvcDYkyy2PAtS8sgvXM1a1gdabnPMET6NhaFtTkxMhSc9t9JNJ7rWdknfL75",
  "key15": "36HjH4hz8qJ8DQiiRasRsHZ3af8UG1KoCjvS893Bp9Ja84nru6h6tJ4hfLcijgZK6TLDav4F1kkcM7Lz7YsjjqKH",
  "key16": "32J1eThkediWxqvxBifLGkmbE1j1tqC8nmSskuPPrxQYm3WPmFdznFWxzZoGvEFE9m2KoKJozsCcnBvrwv697X8F",
  "key17": "5BEAZtTktjb4zWNKRNSEB55qw6a6wXMQSWSdBsDfdWkBQHvSKnWXAFuMSZCVeVfmf5mD17Ym9qK3kcJorBtX3yQK",
  "key18": "5mheSYkkzmwzKD4gUndebMmgqTFR1mE87v7WbQuJqx9Gd6rwNbJva4ZH5jsjYvLJwcdm4P674xadp2bmNyefndhz",
  "key19": "QCJe7QnbTpjCyEDNcNxQ58sxGLPgsSQYwz7bJuugaa3zA6E8evNAMsVhD92EFuGaGTpREzToFqP7HeWuXAWo4UU",
  "key20": "4w4EuAxRgqvaeCJp5gm6CAYwoUhNMHKbbTPFgveVMm4KoyV5wQP35jsfrBshSL4VFWvMPTdG7Wwmv5hTErC3C9XW",
  "key21": "24FYBE1RDqtzsdk3oHzwsAjeDveM6642Ub9kQLBq8pZkyEPjhcKviXEh2j9RFNF6GLyefcKGfNQVYUKmRCyJZC1V",
  "key22": "FG9RHt1y3w2GyuvAmRjXuD6aghYjqSQLrhXfzSzWNfgstiMzBPjTTBAkp5MAUbXuKNJaKn8HdyqP9UxY1N3aDh7",
  "key23": "5aujMke2qgyND3eMpASxMfFDjSegMdmdKB8ScWFnYwZbTqne5v6Yuc3aSCoNraCByZPGqnjNWFqkLtQMAtLyf5BL",
  "key24": "2y7xG1iAxUBQtmdNNdUjvcVhd5C5PDktiNJDPFQwNVGjFSq8Xd5ms8E8UPTkogmvuRXPdpY88ErN6KciJoA2xJ8k",
  "key25": "4epTHpQDgGJNBXqGNYiUADXYPFE8iwJ9Jf9fNrEM5H8zyiP5shvCDP63nFUqnL7FpKk5Hz2ty94rhWsEX2uuXwnX",
  "key26": "425KWcxNj15wXyCbrFEA1M1y3KUtGGsxe5u1UQqeVGBqA3Ms3UUrkQjauB3jwMir2LsXLVab6SQreGRyEEq2JzJM",
  "key27": "2vAwtGXZue2VPzyMu2ikpUPQVNsPDm2TixbYKo6hZbzkv1BXNhkAPV7rU3QMHXoAWUQSftr5H2Qd554G23zJb45e",
  "key28": "3qqSC7hwBNWGg4ZusHDCzPVrVKups6By8YzrwSxdNKhCnjvu48cM3k47sBMU5gjUKyz6MRa8i3LKQMpTWLTAQgwS",
  "key29": "5u9CvGSmpQq3LwMEUt8zbGraFd8P2UArA85iXytUdxMvBNJpW2UYpnCZ3ewMfA8HBG4xjPUN7ndxYXhGsbJAqWjP",
  "key30": "5h7ip3eSZ3q5tWe16EQHKcTqmXDoiBir6uKnDaRNBU4YhpcurZ2YZWQG3gK69m3C4jZhqzo7JdaMo3B6d3gxB2uo",
  "key31": "4ZCPtxFxYTLh7nCq9KVGCVarHE9CF8QuWQ7yHLs9J9twTt4KVb5wKW4i8dHKKebVT7iVrrZnT9PCSBS6cuLcVV4T",
  "key32": "2J6gUzXpHWguxyiUH5r7XvW5a5jS4DeeVHR5nv4CxgrY6Wy3x6eEiu1HtwF3EbixAnj8iKCZcTRNFX1RttiP8Z69",
  "key33": "4xAcUnEwBsFyp69GY1d992Gsp6iWvCzUVNe7oZpzUVjQnXmoiL5YuDy1ZWjNXtr3DWkaUXHGsEArxhQHisePxEdk"
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
