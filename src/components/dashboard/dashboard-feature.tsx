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
    "MY4QmByGQMtw3nEMZPGsuC8NVLvYFNUFCYB8r49w4t6Xg72Mop5JjitmLFq4ZT3waAcdfoLtLyvosTkYdYAgyhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vJKv5UjX35AQenmLPsZ14aVSdc3up6PeJJvuHPLMUC8hB1rdUBZwpCZvAGJn5jxYh99UVKRqKoVfrS82A9Tpi8o",
  "key1": "9NhjQANYawsF8g9uDyCckGWVuc8B1ASiYsXkW7TsS2SPCupgL9DBLrgYbV4GJYJJGmXqbduAE5UruLjvFbNASJX",
  "key2": "2bcYSAB6jco8TmqpujoAr1tLpucQ9kp4kNbL899WszaRU5jp5PWh4v4SLcyjfs16mSkEyhif1LS8zQBoDGDyxsS3",
  "key3": "2ui2XRPAVmyydSqHbvF2xzxDbxjoYJJuUeGAf8KMdVMeiDTBitjocFrfxvw1VuzSsao3GqPidYyMKwsboDMUMNzk",
  "key4": "3hh8hPKu2z5wvxop9RtNxDKZn2FcL4Ft46qqxJ6PjAPAvffyUkNzts4az72er2UQvQPZhFhnXBt1nzstuy61n33B",
  "key5": "37aevPWXJMKoi1VJVjRTaDiHUpL5W4N1cTNwgTUB5HHDWDqwWrqowspzNFS1QmrhnNA8N53a2XwbpyhyWzdYd3a4",
  "key6": "4vWyzGFpa8baeNDb5QhunsyoJydLRxD3bVwsGxArC4oBMNduAs6VhKYGbHqW8nkvuGKtWaTW2bR8KSnC9yyvnvh3",
  "key7": "3PDxeCJLpStayQTf4Co2CVAud3CNEMeCxkpcY4TmDRsN67wX1F3EGJp7hoKJpJmDdQZ8WmP4pcRFKwEqrhccm1HF",
  "key8": "t4Lw9iorTFsSw5mzRaquwPvn8qpBu4caLCXArGvZjU3QhhCBjuazdcfLEyrhWMyCndh6FKTS328S6VNRJu3HmNz",
  "key9": "4kBPa5Z7R92yXb4G4LpCKjh5oTh8StbrRQGdydgKcw3AmP8rhi6nmGfxd7are5ekuJMtMP1fABWcgrsNQ2uNfdns",
  "key10": "2AkZyH2uaLztps2qXmmNan8gtnFdEXZvc42BPFXj1UQPgeKeXJ7sHXymbVKHBBrzzfBnsVShZhFCwfCJCKtq6HDT",
  "key11": "3rFnYKVgnYrhEaUzwg8XjHbw9fvTcTfbz43G1npAJCqdDvLRjVawrfLc5WtRqU1ZPTN8gJhRCtePcXS4kdTUTza5",
  "key12": "CoSSXAAAzSGMws2TNAUFajqtMviAkfTpuqhcV6Tm33yCN1kQSE3nb2YbiPNhJdWPXeFNQkfJgNx8fBxwneYz42d",
  "key13": "63VZrWj4escbKAs2K7FRwDaccZh1c3Keau6vcyXhSizto9wrYLT5wKCEFkyaVWoGEkgoW6uAHbVgoyRv9zMW718V",
  "key14": "27n6zKhaWkiXGpvvjuomUftw8dBcgHAMJkfAYyEFd9goX4LRS5sAiBb38VfBanTdLpFTurpQJfiPtKbJj3kpxKcs",
  "key15": "FehhXpQw1bCunBPvu82zbTDZsZ8TpqG4893uQdbUiXyKuXhSm1J1pK7xvzmbhHxPZRwmP6DRk4jJK9zbVGDfhG9",
  "key16": "4QM5GjqWPUi5zAmp1QjQVDSYra4QD4upiKE66TianqhXSCp9ZQUpdwNyH9p1VMpbqKkDBD4GMGrEWaoSGo3UYu3c",
  "key17": "rt54QxrS9PfuGxP5KvvuTQ4Mwd7orbugj5bcsaYGGRaKQdqFqeTGrQHcuSG75nk1UKXc6fe2nYDKch8XT6iYnZj",
  "key18": "5sSa63Num1K3xnspzvBuVx4YEBkbeYkHaCVxXCYEyDD5rCYN8n5DFtKsuggxYgQKEkWFtY6CFfUnF3ApNvfGAYsQ",
  "key19": "4huCVtQscx3nZCASyBpsJZHzXPCgca3HiaCdXPqgABWCwPVdUS8A6L1HquLueAn9RZZke77TEKK1EHLqFBQgzPm7",
  "key20": "4ah2Tfz9MaThHEo6peTmKWdprpHkiASCBwvYvpCCwTHJsArLEZtRAN9U598XW8V9pJxrcnrsmRJekniEuoPXbW4o",
  "key21": "4ZLXcS1LJztjyRfk4FVF8YtoYDvmqtunSXTREpxPgwn15x9RC6VVySuUmWrUAJyBjAknQERH1ANMnHQVZ9KDnNCy",
  "key22": "5HGoPorvsMRUqxwepBic2t83bZjxZ3TVPNDWLZg3mae12SWJtWKRKMzH6H5GRcfz72ZPgpC8TdN6k4afVoPcjwEL",
  "key23": "3WcnM2FFg9asHffB7euPav9iTjHRYMVN6cb73VGYDRsE28KGWKB6EGEqSrypmpAMKTTVPcJn4GVtWWQ7Fr3xtn5A",
  "key24": "4ez1myJb3jv4hY519U68TqRcS8Fqcy9rSr527Esk4hJ4jHocAat3FH7GtQmWavZTNMJB4pxEqxZ3PVjEy8juPjUN",
  "key25": "3qxdN2Hx52qivqoKer2bxce7W5zwStJpXGQbJW4gBjiHCexE3AxUE1MNouTQh3adea6YRKLuistzGnLL7rESAwGg",
  "key26": "59KiEUea8JL7LC8kAfNYEcL3GE9H59HSPkeDanrt3pM3gmPb8YNwXQDpQDhTs9WSckME8d2a1WrmHzaGcWX9EfWh",
  "key27": "5CPKmoaGnrEG85MuJj3LkCvzmZ25L8nigXHC6W5S43zBUGB9y6ySGqZjmmELXTJVu22wozWfDnXqs1oc3wduXiYs",
  "key28": "2XBxxVCaD6gRMpydPf9E4V24E3ViXcrtuiATFbwRxV3MvN3K8zT7Yx9GC11RuDfDkKMDA3qBqzN2ZedPKcGqjdRx",
  "key29": "3fVBRSpMD3kYSk6BZBdFqvrUzbAvnKo2B5GE2ssFg5FywCQ956sKyHKUU5xU9duvZZLgmcyWAHaeHiGqcQWdtz8q",
  "key30": "YExFLkLoXzygLso9bzhuqgeF63LNAASb7LtBN4aNXAmxJKccXzY8NT1HyntP3MVyw2N3AH4AYf24nJRyDtrhm3d",
  "key31": "2sTQ8CecLvwNkPAHoVsykvkKCZBCxtESzyDKs8EEmfKmRhdBK1cZPs6YeAzkw1UYf2a2s9fa4FnN94zjrho73E5u",
  "key32": "xr8Saxp2zSdLkZsJxeCTnM4xPRYCtWeScAPEGVmuxdD5gLKg7GRUi55pR4roiz7m6je9MuCimATUHF7aEqcbmG9",
  "key33": "8FRkiZM3pX9J1LXiD5MyiyZRuUv5XR8DVBPsEgcPjbXHxiYFbHYiSfmDskXimENECeqsiuXS1JuqgkrCMQMyVNh"
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
