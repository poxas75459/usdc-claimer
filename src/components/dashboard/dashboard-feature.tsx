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
    "5PJ73hzw8Wgfn53jPRx4p9qYLdgMCyoScfLgcMFwP8V3LZTES8QWUPPpULzTXLKRBt3VePiPuSGJ42c2WYk6pMxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cjxpKreiSuG4wphwcMejtLi8MLeEwQE8yuPjb46ckU4JpvmRJgrDTzo4hPGbuxVRZffvZMAP8uXu3En2ekfBJ2J",
  "key1": "5VrkwyvKHi3gqD9SqscEEqh3ny7yNjCUDhKhaw43fWMS7jnodMdnPjDQMgeGLNfotxs7TRJcHcwFDkYTSBkWTp8V",
  "key2": "4VnAK7WmDQBxCuZpmdUWRJMgBaohZgzESzHzsFa2ndd1najPTfFV32BkLaBrEK9E67zDwgCQYDhtKYqQACLugJsk",
  "key3": "5jAe6YUrccKm5edjnmeZuLWneyjeD8KPVsKomqSYyErRaDCjm1KRKqtAk6HLXL6brsvZcvTr4cJhosX4Ngdcmu3E",
  "key4": "YLAkaABXPMbZAjXWpgJVNjaa2CkPmJa2861zsEeap1WTNYC7wgTt12hrb5QFjpMuQ5s5gr1c5C5s8WgqF2icx92",
  "key5": "56DoKityFhTBCk4vQAkTuwmZPP7m7J6ChUYBK21b76tet48qiFEaSeps1m5PDqVyW8qRRsPab3WPcz4zpHDH6cag",
  "key6": "2vy65QUGtuJ4k2kUa21MinjvhZNmVa3LN5jgDy3vRpzXUUkPGJgLkc3RrmSnP6J6oehQ3hFNCsnmj8DMeUQyjfqM",
  "key7": "5cg8C3RNrGmQ933rUiGiPZjJeRwf9Z4uRMFxkuJvJPYSqbJ524tMCFMC891QDAXr8TJAEjTd9Wf6MqVcKGUR3vNf",
  "key8": "Xzci4b1xRsqHj2n8bpbUHuEAPW6KsuKWEJgDybBp63ZRKDp5w5TKJYD1ciuBEx9tz7p3hczTcnnghva7jsUqf4H",
  "key9": "53wU4Yx6Azc6asXXXScK7wv38TLqbJaX1Rm3bGB2xKeC6xREuRBd9uxehAfE4TqYe9Bp74U5Vh28Pc7uLiFqDT5E",
  "key10": "38bWQVe54c2bhMyajDpKfKfLcjB6AM9WRqCMQiW3vuBdPeLyfFHqCg7uwgFo598wNeMaykprnxPHXePctSq5hB3B",
  "key11": "5MZHMuqi5QLb3FSCXGu9BKRMZAkgs3G7azJj8vVsL5hSSU83MQwuMCimUnjmiuhMyp6ExVGJn7rT1jp72UpYqtZR",
  "key12": "21ngzg2AQBZiHLx4VKVsRQAwx2cys19q4NU9YNbnRkrp2r4RpYriosW6cyYd11pqbC9Mhxj5pCTDB2jEab8iWcVk",
  "key13": "35n6rzdtfbnUqTHSxrpurU3n8x3wz4LVUBG7rg2vPCdosCJgYch2z56yKe3kKm7u6wxM8YTRomsMm1pDKG1ys8BM",
  "key14": "2xPCiSHbLUnia7nsTDmYEN6E515LjF4ym6NPaYpiyHQbGvaZihWh5ZbznUEHpaxPV5md3X69unMnkXLQirJ1LRgU",
  "key15": "2pbwdWNsohrn2JuFoX7JCrE4CepV1xotD4axLfdBLbfNrzmzuyx3NfhDzGva4t13y94roHXXm8fvt8NiRJXokykD",
  "key16": "5izXsEMxXFV1Zm1pvjjJ4UVTNeokG4rbekXyCLQAsJdw32ND48Lpy45etzfsHrTgbM39hKJtaeGg9R8sTLCh7AfD",
  "key17": "5Ft6MUS9JSm2RtSYhSA4XCNjAtqZ2LArjNvQathKtErMUutjS19KAjKKuEhRup5nWFmJXBuuZHB95XprzNFd6NEv",
  "key18": "557v9nGM4nKqocKJQNUYYPiNKCdDrUvL7U3AnfeqmXcRsQSzE8BgAT8v1CRTx7t2BS4y22QH5kKJkBKkkfRpQZLt",
  "key19": "4DKwcbg4rfpM7jQrk2iQm69tnSuxDp7sXPbntoCAnfQNjbSkByY14SHwdWC6XwDeCAWQgmAGJNwxvdGmkZmfCydd",
  "key20": "2V3NvDt3F8idFmXxTH2CdaapEMtNrscugzhoNCUi3etBR6xCHKrRTPJacwtTzKhLtaapC9poZY9B1bHTgBqzagGL",
  "key21": "48HTctMm2Vx3D5N61cJmcqVinBi4GBXbq4M28TmkV2pr4PnpqqTe4YJKKzL8ksAJCopjnaumb7FLnCkJ788eXAT8",
  "key22": "5jqE5Psad63QsSEpRsgxR5W834aVZBNJT1a6yXjaCLwrVc2zjQRq6icZPZm3EhzYabVMohVSViiz65yyyqb2gtaN",
  "key23": "5tW4pCdSXh8f18CnpSvSzcY6krDHgdjqg9jusbYvughPXCrkBMQ3RcYBGiV4NMxZoz2kUA2yaMm3srtZTQQZToDp",
  "key24": "5V9H4dsc8m9Mgqt17Agx9vdTaJQUPtYq2HPkyry2Lt28JtMX3o8nYhVU2F5SyCMtMbDht7Z11RuPPLfnNegdz3pa",
  "key25": "wDxopyMYfRND2hyLj6L4waZN7oMLdMENojwwT18gbzXgUJiFQgkL9nHvnDyRTjktjaae8GjHEYhjp3sA6VPV64x",
  "key26": "4LczUffCLwX98Zndp2sJYZ7gA3GqUXwkWVUcxw9KRqqBWK4Y9XxZq68MG2fgQfJc523iCa2afk1vuqgWRjmH5PSP",
  "key27": "2WNW26aZJJq5ETFZQ3JtLzN6xyRvzeeEAsoohjRSs8rdmQvUKHCtEN4UmfXCjw5JDcfh7MJufx41vZZ7xYFHBNAG",
  "key28": "48fhh52uUtF1BvsepVMmVUejfjWok3dSDYsNN6c9fRsnndAPUHdfm6SmZ7dvmM3DibaqTNWsv4t165WQ7QNGJJ1E",
  "key29": "4vu3Sw1RtUoKV4of3DQrf4KPMLth4hu3pKW8eVcq5QXfYjoBr81bvLG6jvxn68hiLvUxUjGre2veC17yGPUm3rbG",
  "key30": "5HRhCAWvpkr9AVQnGpr1fGED7Ffa3HkXPBFC7XLS3hjuZ7WShG83bFUVWigM5R1EYuNyZdWmJqUU3RjmodVMWgsP"
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
