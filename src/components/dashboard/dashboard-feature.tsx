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
    "3Q2FLitpTX4AxxRdoqZDDqXU8PrHNkWAL3YRBB6gHjzMVwaHC5DHiCHLBxALFVSc9n34Gqp8i7VygbYWtRauoanx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KPVt2vLrz94Qh2K7ohBQgX5pvycMVda5Annc6D79eWyLJbDedN5ZKDcXZsQ7awhucenkwaZDnGDoraW9Qev6MSU",
  "key1": "3mNEKvEL8PCqpNVJHwZVJwzqtft2sfJKnsrtCqmxdnJ5JD9ftXhCPtE3cJynfKswDhk9nHMGzry1fPcwLLMJW6xB",
  "key2": "3bDD9SgRxsk3iSXusWYpoTJ89nSQ6YLY1fHPbzrG7CjMKkwV7yNViCTeGmEuo6MhuiW9PTTmDSh6Qg7Nb6EaoVJk",
  "key3": "2eZy5gZUAJhsEM3TztBnDYFMVVPfjirPsfj6F3DDYGfmUqzNXZ8Hz2cQmF7oeHpY3bzYFXHQxj5N5VSaxoPkTPXs",
  "key4": "jZedoyNmkWzJmENrGRwz2u2ojAqXxnQQc64GvPQQv47Mc1TTtJ3L6ZpRPqj4EvsssQCEVpzo8U5MKYMyntipCXe",
  "key5": "2UWQqfwfaDqa6s2k6r3RYgDXtmcpHu8Rd7x62LgEUTYga7C2duz5D3SQqAMnQy4zwdp4NJPx3DXFCrE4peJzryN7",
  "key6": "4PS4AQkC9F8iTjitqamJ7yrqPRCF6aBWEeqxBG4tvTHuKrE2iJbVNenHav8u7H9WTd4AYGs5BAXewdpnzdQh5ehe",
  "key7": "3EMYqPuVY45bfZD2o4yEaYGwo9sk9K16Y5LMZKsWcyfDw9MtXcXeJWQuCWNPrTVyqZmsSF1hJwayKftQvdu8L8A",
  "key8": "2mBSzAyNCMJiJa6XzWJZuAoCkpd6ps5waYWhYthAnqYUQYN6Yz77LTSsoX6r3orzNZFSTivunLchzLe9znvLfHUT",
  "key9": "5nBTPMBWSJ2znBXZwPasLvKQoBmy4Xuxzi1eDiqWCqbgixJLFNSqXKF5YwVEB16xAL924n1Zcw7mMqrCYZEjeAgM",
  "key10": "ABXRDQPz3VEa2DzViJnryVinWsLoxrNGQCPXY7AbALTwKmgCh46Y9uRBJW1cxHQxRhaefMC1zgNWamURLnRajdT",
  "key11": "47CBYUeZhdcdH4T7Tayh4Xr82BeTAkgSAyXdeGyU864EfxwQs9cgHERUcgMMLij9DwdB7DdBkn5suCFj57mb1JJZ",
  "key12": "3UvCRYY94fgC5Gi3yooqXorzjKAf9xmQw8GnTupUvA449V8xngfxwnH87EzbgRhv6JhoDLMfj2giPwjnZNiNhB8f",
  "key13": "4Q8ET8zbyphXCkzcEaDmgYRc4YK5mkwaebf8jtjhXA5e5pjRiipk9pYU9BmwGGqm2CJf9akFyz9mawePXGBZo2tY",
  "key14": "4kAftXv86Q7P7Jkat1GCkk4fiaLSfRYEtPGS6vAqxsr1JE22RiGnnqqReSwpCzVoMPTyc6A35TiTQCCGwkupWpwB",
  "key15": "dAKad8pV1HnR19brQRYv1A2w6hRZ7v8442EEdm6VFXUnZVdmY9MgbmfDYjJ5vhvL56e7mhfqeqe22xJnVYtX6QD",
  "key16": "2M6kiULDhBAJewHCo1eLSozA7WnnVcyMdAvriWronMDaWtoZoHwpso5r6AcbdGqbwc88pzJdgmkXGozgGLLWbXRP",
  "key17": "34auiCGLLRRgsjg6bqDQKG9eaFh8x21ZzxsTQ4Ghzdr23syXzsVbBRxyMRb7WCuGRpaU9N7rgynmsFgt9gZmTGJe",
  "key18": "2F5NEAKvsHPKygveTjjx9z9UkzLSzHi2DuQ9dbguc8eVZgTnvwj4ZGzQpFJfiyjiReKgdKn9etwpzVmzsfLEBem5",
  "key19": "3poCEKQAUwLLTPn5HjWZUegjBtPKMAPDhKsUoXq9WvCpSmUGemSbBGvcgtKMQpNKafYRzTjZ1GHKBwjibxb5SjcA",
  "key20": "33Wz7K5PMvSt2HGqibbzgzcijFmcKG4bzfpbnbUNyMWZ5cNvpP7dYKA8tsXCRvcdy5vcMY6e3CjLvquvk69zAivp",
  "key21": "2cBAumgnr3UztS8H2pfpbMv4v73tnyBgVYFDft49nBvgmHh8EHqJ7rR58gcAvPiZ9hWAY2dqi22pfHHtxBEWLkrK",
  "key22": "maAWxA7dykXbFjUyt3aQ73P2bXMUb6Amm18mB6k27oEWDfK1yWbqpwgku1QTvQBcULeT6QK45s8sK4gVCSgFVaQ",
  "key23": "33u3Sev1G5ZfP5SFWdWMUDvU9vpnGm9AJLrmxftfuYy6A4TMcdmkSM6Xwyq3pYkrMyNWTQFyBGPVLjhJEkJQi9f8",
  "key24": "3J2ReKX3CxyzjGh4Tmvg5c7kZNhPwo8fJ9Mm8UjuzJ4WPLYPd17qnU8CEvaLqKW1UpCovAhhZJK7Py89G4zEpSab",
  "key25": "4D3SnfvxFryagVrSsZko61q5rJUPtHPnXyJi6xyfNNWKSG7TFuDfArNf6o1EmWqombZNwsrHz4YNScE9cws7eXU",
  "key26": "xGhbMYoDCKHWxdezheSiK2257BnpTBQnZLW8tKEF8uauSAiMe9TB8vgFZK2LrBhSi26dxybRGgPvmoxNmSvZLHg",
  "key27": "2nLxDV32SH3ZG6m6UggSSMBTqoHaxcCoagLg4ThMNTvZ7LL1eLbjWBfSisnHjTTDxL8dpFm2RtA6iK7BVZjwEW3E",
  "key28": "5PF3zKuYHCoRP7LpuKaB4gWsndWWrQ9thK8wZTMsJVj1KiMMPMmNFq3MLamSh9K6GTkFbBsXBdeLECxVxE1K1oVF",
  "key29": "26UpxLetjqgDuMPLmroXCpxgvvzRihwLxA8qdCqiRusGE79npbap1132nuTmTJbTgsrc153hNeRf1XJpYvfgbogR",
  "key30": "5Rj4weHGQM4GNcCaWeiyzo63UPdRNjzVgtLr8bJCbDm37jQobryDyNYPocUXVuEd6gXiggkRPfQztXj3ztHoRVcA",
  "key31": "PR94nuayaKU1SMg44LqhNX7WvwzBTwUeY2jfQENuRu93eDpEz1TfNwXpbqQd583BTcxij2vqcFPAHNZpWVTPnp1",
  "key32": "5kjY93LAHo42FCWW5ZBQgfnWWoCFRamEY9qWQF53zuPrcxuJoug9d6zc5LK9YsSh45HvpR62U68MrQE1x6qcrrXE",
  "key33": "2TRfyrPouH9LQJCcQFZiVDZUQY4JLEKBTWgfEy7Myv2yucQkq1hkyV4P8QWQobdfKyPsh4ntw8rMRyDm5tt75Wfh",
  "key34": "2oD679YLNUQpvRtJVhFYgMW6PYtpmaKVTugrjsfpVjQkv8vw3RToPz8nEoKbpbrHPs4ExQDZBJ1KaZVavyhNhtsY",
  "key35": "2uQqqfUQSVbuuJVbZKNGLMqgDhKa6rTnyWiohxZkM77jdySQGUeWdUaCBM6JECkywDCNdJNGzEf24xLVpvD2YCCe",
  "key36": "42rFa9BKaXXzkZd39JSYcVwNLxuuvPtJxeABHEDSpnvKcsUqWttYhHBGsDV4GwqzKntggSzZsb1jy3pMJJfxVbTW",
  "key37": "Lbmjvx9bVZoWRkRjqJKqjWvLJ3MYjTe3MrZPmkP6LzdWAXwuFhFhzSwG4ppC6UFwyMp7dAdJeY7ynA1fasSaQPv",
  "key38": "636D8p6LUefYHXoNPbKXVhDRN8JggRAdf7j5Wk6DWbCizLZkAek2Qpr1HGUwQNuTQuRh7pj2zLtdfbsbmtfvSbgc",
  "key39": "5dqY5mKMKb2DEQVQumgqRcrBTkGjpAH63e6PiiVeMpCBhBrw8F313Rf7ztLG7xASHmuTPFHNxDBR2ucTfg84wfW6",
  "key40": "3hkLdxntTNSPrn5pBy95Vnsk73aKrk2FDvEGm6p5SeYch43rcLpdanHT2L6XefDvLioE1TfvKfou9TAVdWHuGFc3",
  "key41": "5mBRbK9ttV87GPV913duBA2WcF5KoCSuVcq8T7UX3Hexke1QWZUBxoYoUwsxCvu36d34pkP8krHqJuiZ8KWaCgFH",
  "key42": "27EXrunKTiC6twpK7GjdecqQV9sKUmsMfQrMjPKKqKtowgvFqoB1BwRwtB8f3j1U1pYKB9ZbGVp6PtiHvCKPv2sx"
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
