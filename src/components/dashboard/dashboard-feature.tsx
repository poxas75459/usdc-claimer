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
    "3vDgQsJitML52cqjr4CboLa6VEiRgqRhcE5z7TFXgCXUvoJKqnxefaTyKVdazp9S7bzgea8F74yTe9RV5w2afUQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m2LLCxjoYKEM4u8Um4pZik1aZG8JJc45v6Q1HiqALWmuaTTBkGbdyDiE45xXdetc7nvrB3GDCmX4XvdArUtbkn5",
  "key1": "4RbhzFCgYoUgsPg2SSSKP641gAVuxtLrJpnzt9gp7NkiBn5hkx5pqxBcJwyPLWqc5YHhX5Q311Vd2ciYBgNzwP7n",
  "key2": "2xWBPjqXjGU1QU3EG7wVUPxviA61tZ7kmD9bdgtyJtFMTap9jEzMibux4kJkQpnB5ZV3uupvAZ9FyEUtz1aXEtw2",
  "key3": "5vakvuQduTqjYRwyB7U4mgXKfLvzfzQCwccAUCtkSEcaW9VyV3gP4z4z1FgRoMTx7xf5c2gqmCfTB2DdVhdAUcWm",
  "key4": "41Ye8Sf16bQZqFtfnpLacXk77D4Qp6mfiwdHcdXbW52nMkz9SsuShJt8vGsNj4NCykhuZsoooxQeWufRG753PHMg",
  "key5": "2Q8pPEhdjDPi57iFXVUVqDSJUpy5oShymCSCdqffJF7YmXe2xz3b653NNcGxwAXgHcrgNikA2tfypQNQk8cdfSsW",
  "key6": "2od3YwRiAqbPDjHn4Z34fTGecY8ge34gZUCiFoRGfYTNFepraoD3rZYVaBbGwpgWBJpJjjcRGHewAtPa1K4pVWPA",
  "key7": "3v5KocUnyUy4muyeVvccjsSRHxJRhLtn82gTPWhFPNWHWqrKajbdru1MLJskEvUK9f9LrgK917FmwWtWfmbtwsT3",
  "key8": "3sqxi6eUUkHbdBCBd9qMVKZ7CAeNGL39P7KfDPCe3jcGUxBNwxT3JJS5WZ3qELVkCfpuyr4GshAzaGx2w39Kt65n",
  "key9": "uhZkv9p3FsAXWhKdqPmM38shzrwgh8MpiXpvtY7jTri2SbmMQZNoFDRrUHBPPMh4rb2wbjd6GZJB9K7qpfNXCab",
  "key10": "2jwFqH84tsTEozp9UkwpecEuVrYrMdtVL8txFE2SkMrfkjuuJ7foREz895jSR2M3GDdkRsrzsFKErcDT4WDt8k9P",
  "key11": "3JDehyexy8KQumQUeRdMYXWdfPXbqucRtb8xZ2XkJBabFJ8ZgMBA78NUMhVsmf4QW6L7tceCfKHd94VMZoxGeTRU",
  "key12": "4YkCZ1VMrfohCK3q68axhgvGbhGW6bnfM1oMvD6NtwKzoMQTRB1rtfr9dA3rB6xF1tZLzCPaRynnhg7ZG43KE1Ns",
  "key13": "GQkYrM7ujTJS5nCAbQxB47gEW6hQpdRNFDezV6VVuuCPK1Am1qPmcT1bHCaxGZdfzr7NUeEATF2rGy7NDgPUtHZ",
  "key14": "2RAbmm2deENbLWUk3jSXD9z5c1SnFvVy739qaZKj62D4eDjjKjQREnbDhsX3pSwh4riwYYb7fkLaCzNALsEnBGpN",
  "key15": "hc9jqhj8rSasLqTaiYbTrac1dEjQ3vAmCNiHQRwmkSFUwJ5HjvkzTyK6Re91KAzC13uqHxXNNCHodWAyTBGkoUD",
  "key16": "52xYSDxWUYU6oJ63gmbttonMRgjUySkZerwJ7DNTWhWh1zS1wkNCusrBmtu4H9Mc1vP8nZdg5aLPuZHBEuu8UosS",
  "key17": "5M8eKSuCkTQTjJ95sJ3q1bmCZ9jyNXr7x6rEDM2R8CNoiEK3uDSYRAQHkWRSmj8yp83WakUsXTNs9jxosYjtNbEX",
  "key18": "2CEwJAEB17Nk27GyCMFR3DDgcGYwH9Pn58ZFxBqPugNXXokTYhf3zQ4DweuMmDi1g6QwKLTmSRVs2XDvQ4nYhy5M",
  "key19": "54LBHFhk2B9GdjDpK1Vqb1PUKZ5WB5S1kGppXFNLmpouk9ZMLPZD9qcTbmA4148Qt8AoZn3sgmq4nB3eMvwmbWxM",
  "key20": "KHFyuDFuj4oqX3v3tjica9YEQs8KPG4ge7pe8z7XJgdxCV7r2MiBe6j1LMRhHNDipTV5KQKEv6AXgnrXqEULzzH",
  "key21": "7ZDcexx4vtEuw2c2N88PefX96NELP17euvcMgatMbL5FbPX3G2RQW6moHGwmohWvh9hj1THDxk7yfddoqTu5ShJ",
  "key22": "5QArvQo8NteKbSCA27KybCXxXUys5zctuuoMoWU8WjEDCVXxs1c6prjC9aLxWghjvdN8AhyyNyhQ63aXwYUu4Z5v",
  "key23": "2bgeKUdVBbu868VTpa5PyCNibajezxhkEWQg9Pye4oNVEA1KKiCSvbxXGGePuqi3uuG4BaPUPH8vTetcamxoEwav",
  "key24": "5akQsykDuPdpJwAkTNR1WdtCkWYy5qx4v7EN7GPnopSrRUhBaC2GyFrFnAgauLsKXMu4JXXUom67cdQbzPDP3Dan",
  "key25": "33BN7RuWwt7tNqhjuVRwYMxx8i3dzAUEDWL8iVLytE5chzovX2JB9TKVvncFPVvj7dPeNPKHc56Y8XwHegxD6EUL",
  "key26": "2r1T7SCkWzjAGsvnmsqZwwcaLVKzcrzRCLW7foeJHXPDc6cvoiht7rMgWR9xzVNX7wFZntdVj9jJqeDksT5itUff",
  "key27": "5HNSgEjGBFK4MAAvMYCPSHeAtkq1bM4uqYCsTToLhVUAFq8hKYooVi1QyWUARm2b6GxKwyFKAjZguT1sdgfguHXY",
  "key28": "63KBHRVznwZ4ymFaEogaJetzaYVeV8S3oQUp24tWP3T9P4uu6dj8Rz9s4yy83xntvWoLizeDnXfkyktDLzoKYh9o",
  "key29": "3e981u4GvTXyMUBa4UNjRfCtVpjBPDfSvoFdGFeXVnkxQRUdGrfkEtS9YM3A9YSajUnyNd2dB1XxwRSxcQiSAHbs",
  "key30": "2v8ZQGjFEsRabjUuwa4fFwu9EBkHqU4GnS72XFJBY1A7MXzMKZX6rHtn98zfqXXLCgGs3WBy7DY27TWB7kFmTef7",
  "key31": "31cUo2hKZk4aFEqPRLV1DESogBzkBUJWvFqyMLVANiE9Sa5XnrPqshwBpun4UKezoZdBRPQ3FUyBX7gYLzX6qaCK",
  "key32": "17Ded7q1FWfoV4Q6zJ6952Aysv4287UCCZFFbMSiPC6X3Ym8xfz6ZoRnsH1foyYrgUwwy9v7xg4DYDMtC14kfmZ",
  "key33": "4tm9N3sBGJqD2xqebEfF8afPiiRTogGfg2soWZgpMdDXSvotjjooauvHmmaBnzfxEowaHXKL1gB5V6nuCGyACYZr",
  "key34": "4fZ5KRcsmrZQhgJci4F6zUyM5AdazJFpku2bnAVyJvDNeuCvso9MMvwjxLgwrEyjo8x43hLEnzG2Us6tPRMTvZRs",
  "key35": "5gRsn4Qzqcw9hTgLcekuNVEpQzozhCH2vfpay2qobHZVjR8m8KYGMLifG5BkwbZfb3pWkL1qeYmz1p9QpHqAUWFP",
  "key36": "3aJwvPxc5Src5LHCY5HThqKN9K7358RF2sKpdzzNVo58ZPSURwFJG8ya1dw2SSQujTcuQWQapzGXSexkZpTHkAN9",
  "key37": "5tvmNqgikLVux8nRXEsUNiCZpi8XnNUnYx1sa5oY3mYYJd1b6nWqCLPsDgc5qvDRsAr57UoMr3zwJsd4A2TS7Kbe"
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
