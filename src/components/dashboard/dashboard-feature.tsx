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
    "5pqPGejbbf9ACr5wCUkiYrH3Ngj44uPKoEUrdC7ji3wavZ1mqYSAgmk984aBc19nvoev8PkqP5nwsYDNFXVU1kDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fknj8WG9tuRywazZmGdMv8V1dPKNP1iKs2aHreEJstbn5Z2muyLnm2PW12KVL2YuChHBL2dtcrRzbc9EGKXcLjc",
  "key1": "4CAmFsJhdGg3A47A2jbXeiSTJCHvFgNo8HS8aG4suLYBdFts443nAFvik1Qa65sP4uVHusN2gDL69PLUxNbfjkxe",
  "key2": "3nGcA5gJfKnTVkmgGPMn7o9SyqV28tz968rycUGECs2woyCDfRqSbR2GCqwsAURsngUGfzNfGCDcgwBkxv4CuuiJ",
  "key3": "Gpy4WytnkJ1iA1MKdmwZDVKzPKrSf1x4thDZ2b8uWTHWba3S97i3gaRQ53dyAaCYxDYitJR5ZsZhCVEQw13cf2E",
  "key4": "3r3juUqU4RJ31ekYnZffLQ2WW85byJgfo1Y5Wz6ZUvg5vdFLvJebRRDodgs9fpVidukmZHMrPGZnYLA8WnZK6xLu",
  "key5": "2nbpEpQd3d3kc2GM2aJyWtaQscU2xvr48jjFyGd7KpYUjpnZ48mL9QX4Yty6SJeMqQtgY9oZwvfuktPrmZ7NMWHq",
  "key6": "2weoCD9RmSh1W4MoMr1FS8P1KiqNinzGiDVarvwj52dHdSyAVAnQTGKX7JBciz7hahejgbXfkWkSyLB8JmzCikns",
  "key7": "27HVZws2LT2dtoD2RsjR27Rts5w9gpjHKBMXiBV1mcJjpxHzjpernUdYyBqF4Pv8cWs4AeTMySZH3vZkPT2x6zgC",
  "key8": "5xjjyaDsHhBdgFsUfzdbJqJhkGbamxeHUs6mhzkXwtzsLuDk3TxJawC5aJorGNoWJFmTGfCV5CGt8yNp9Sh3YwAf",
  "key9": "2BipoiChHo2GPoiVRhxDSHiu1jxEFpAmHR74Dc2ada3K9K25hoh4de6Fgvdx7eimwF8CZwVmGLF1U5E41yrbpBwj",
  "key10": "554Wdd27GTT8xQPmKiWtnYVX3uJvF2xpGg9GrCh39U4TiTz8EwsLv7FpHHEA8WQfziWUAkgYtwxTLRhhoi2e2f3c",
  "key11": "3tdkZgyz8R1n5bSg3V9F6zJ8zhoskLwG5PUsh5hKT17CgkhQXBQ2TpJa6uMaTtNsExuRkqybAccXRy7hkKaPU6Hc",
  "key12": "65jndieJh9Pj4V6TQpT8widkiJFRuuLXSg97vQSMY6RqqWiJcfWYpt3H3djXACU62Qh8FJJksZT4PFj8KvSDWbCc",
  "key13": "29wRmPJTs3i6TbQLKbuCxHopKmg6NbsQ65TWsc9F6b5mgok99RsufakeD3wB3dMyWLh5feMpGinPZccKqLL7wM34",
  "key14": "51ux2Sg2uKEw9yNL9BAtVC3MYgitJccYiT9bYUi8XAsxaW5rdmMWKGx3Aje8aGt2853wiCyQLJoCofv5Mj14Eiga",
  "key15": "pFFWRkG9MJSmiV5TVRZA8TY9RF7mk2y6d83B9DVc8zs69TytWEyUhMj2iJWTA3PeBRE2AcBjvwYvNt2C1u5X1BK",
  "key16": "3wB1o7TMKHrU2reME4sZhQkHcD3DAcwqA8tLkU22w4zJZArSQo9bvUcTEqsiTvEqN3q8eVEMbvtY7nWx3VQrcUKb",
  "key17": "2o549Sb8CcdVWSvVNaPQi2CvcLEdbSPngrZcTErKeaabZfW51CKUWFnHWy77JjhTm9tzdGAadmmgE5Aox2iij1Tj",
  "key18": "YbqcrZ1dARzbnBdXxZDwCJAwt9tZkTaWNLm23Ut2u7gdpJogXsaq1SsFcRzuUEKboxy8zYsw4SzqLzQDJBj2YC8",
  "key19": "2A8USPLaUpmz7Hga4w5uxWun8oSMCN23Zjfws411sFkiUsfRP16WEoW3z56Wj1eDs3snuA2HBm3Q8iDqWKSqphnj",
  "key20": "bjWFCpkWhSdRi7m72XuK6tUZcx93Dqtd9cpXBrU2qW9CKPN5aNM94fZqGPR2YvjsQYvZx3dpqHZJCoK8AwtJ4YN",
  "key21": "AGGg5AZL3kjupuNyyvJTa8KjsasqU9at4gF1xtcktJfSGY8c7beggSwNd1uJy4AbnhNUjvYK4bcUq8YsTK8zjZ3",
  "key22": "3YE9vRQEKD2L3by25KhSQXorS2hfifKVYSvGQkghz7rLi3KKwYrV4kQJRTJpf3cEw9fZAbUEqCMWyRs6BgBpMh2C",
  "key23": "5PvTJG6hdC74WdrQPzXjyu88n3JzkDgT2N9cZUDeebbhtVPjLSkyDJMAKZV7hDgTSAtszRVPY6TXrxrLEK2WAjNr",
  "key24": "4JfhA4J34rT92uSNJPnSWNpsceAL3fqRzoiWm76W3i8WgFsumkuJKs3EvTYRsSjUxodBXFCpiXMWWxhprFQv32Ru",
  "key25": "5FBD4g5LGpXhyb86rZAxf534d1HXkpoy9D9HRF2i7SS1AmyS322i6kdVfBP2qzDLqUkrsSDQ9YKuoPkFRiS7yZUw",
  "key26": "3oPFSvFEyANBjeombsJWp5wCyhH6YsN6XDFEY642sMAxzDGE2pMbvrmrgAXUhvo3HeB1TXrsDSBoBpjwPyanRujd",
  "key27": "4zk6j8uGvbSgz34xRz9mLRcZ9PR4vTh4zgBTegu7jBpuUjd5iEK5PF4PPdDXN9WxtpDaDVZ2R1vyRnGCutPQwSGa",
  "key28": "2kigXD67ggMKxiWm2FQ42CmT95Z8Fs8rhjY7yuqcDzdEdL5d2j2dJLBXyHpqFK68vbiZisf4tCCEWbgsVBp9m6x6",
  "key29": "4gKQ3944VzTRporCXNPFhgFSe6gnuCPAaenWSKdnbXuCDL3A5zpdP6u5Yr1CWSdffT2KRcCMrPnyTRvAnaLnTnQa",
  "key30": "4ijitfopVaiFXaL8uQfiEAmumNDkPHDLGoKsucgxri1Q18LrycnyxUaQgn81v1WySxsHu5Q3pw4nNrRCwZwNqAcs",
  "key31": "nDJQK1zwZCSHbSHfZfsmC5FMXE9DHhd1MY1hW9cZhTxSupHWtZdUXiZBdXznUEKuXA4UaSm8GYCxboUoF5fBhhH",
  "key32": "tPATaWdjdtrGyssmx5VQLKreb4ra9oeqGn6dFKXAGd2UsS1ek3gxUEssUVFYmjJVFNMCisHoiSn94MwkansKDci",
  "key33": "5gbALjjqVfsH1CiYvLRDqmudHA9wn5pmsakFywxJ9V5baT4bL4gbSwu6D1U24wsSm3qhyvaPJtagmTrNgrvuV5n5",
  "key34": "SAC21TPqxJSCDYqNJ6pvsxTzCm4ZX33AXhVrbHhJFUA5AFEy6PVZ4N4YbhbAMNL19VpMhvPq9mbgTAYxCuCA5FX",
  "key35": "4MX8tftHBKwTzXrFTEnQkQyiPGVWo31rjK6Gdotd2qvfCRnu1tpHJhXh75ytAg58BeTmTv9PmNT5ADjAKdpSWriC",
  "key36": "43PcXYRaFtn9yr8gH4qSVXtgKm4tsn461aFAkYWP71ehoHNyRz2rtvV7WXBFRYREdTL6rkF8DtbCK7SHiugcePWf"
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
