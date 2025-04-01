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
    "UxmtjzQNomnVjvgcwr4GPycbJ6jYiwS5Ua8JTv3XCSd9ez5c6exipx6Ln2wJpvBhSbQKK99zJPg4PYnS1awywia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qCJawtpMwyoK4H7fna1GQX9e5ESPScU6TrRBDThD715HwPJ5JwoFADSKq3zAupT77NdqfaLVBeJDRtwB75LVmZ2",
  "key1": "n3qkiW8nCfKG2WqELfkLWjkSasrGMLsEGizgLeMz8D1CTy5ZzYdgtUpmf3Xtzqj3Eu9jTFSJ39sYSxg6XZuwY4B",
  "key2": "3SfiuveoXYXk8jLwKX8vG2rkJVtRSnc9wtxVcUJWroExCq4F6pHHjC6F7KtTJyKUAJw61Yh9o6T1kvWUSE7yewnx",
  "key3": "3rVAKeGzEkupkHmPSg3VUmX92hhVhNm2d98qXp4nXpWhFvb2V79Nz2DzF9bmFipyyKXYdUqGTTbLA59Q5wnoqfWX",
  "key4": "5r2qRpWMMLqzHDuWY6A3puT75va9wZivoH7411r1ZGjSVZ39PvXTop7sLxxbeGUWZacJNWZ4R4PjsWsHC4VZpWy3",
  "key5": "4EstpY7wCkwJAVARTkcfPJavqMcKVQz2HZRA8BcVgQNX7NYYyt4RhoNmVsKj2fWRrxdWpszy1jgNtiEV8WAhG3aV",
  "key6": "3iMD3ysH8KTXyE5Nr6GV38H2QRXBm5xjFzEPxU3q1brsjhLcK3quA2pym758rHqTxttV3mKrWpLbGnTbk13wdrHD",
  "key7": "56cF8J7bSsesPP1TdurR3rfnfEf6fjbQs8G21wEYGfmQZ6R5ahF9RFJqnARJvj9L65cFaMtE28WUdsmgUyWFPpgv",
  "key8": "43iVUAbYcwA7rXr6uL83suKTqacDKChcJmYAEYfzZye62WSMkRv4j6jzKhQZsqzjc7uN6QWZzBJwDJPUKscb8RbP",
  "key9": "29fpD19H7eKWatMfTKmqgqXDSX4AFxRqyUggpnBVd8qsboxzbBXEzuQAwemtSTX2P3M1Pzd8htm1o3fEMKBiCqk8",
  "key10": "3SnMoYRLoRtPMFupTpXHWZeUhTDFZ3DXMwTBoGPqZVTun2bWdgPbb7ZhdiqpG3EXcf1PVBCYQFNt64AgPcfNSoXs",
  "key11": "2Kc5CfRZnTvThojCQHDt8ECNjGCpbWXQngpFDHy6LdpFAs5aT3iznr5wTi794eK9HrQ5QGiQ7UK2kj4Z3C7m1NbH",
  "key12": "2RR9snEQW1encmTLZRFXGzXKyrt7695QSWwDLgwi8fWzMJ9YParSyYA7xdNURzGiENSmxkXYtQoodpwZKGyhYwLV",
  "key13": "fks5Wnxmu962EJFnvqP9dtEBMMz8brKKN8UqFiJ34TXX799eNpPQXVR8wLrdS1UNmYDALmiFySuHt55L7pcJJXE",
  "key14": "318Xfvnz2tBYbDtmkgBYfnE7favAxLo7cNiUGcMubpWwh13j9GohnDgT9E3Ln93SRhu6YC2gsY7nRtwsBtLMVc13",
  "key15": "hYPgbkcUs3cHE3DWzvycTtmfK9DgESUwW4jZDRCQvTSDnqhcvwtcMTipF7xXC3YM8R43kYJkcT6mjkcCZU2SN3h",
  "key16": "3xPenZFXroFjizaG4nrWseY7xufLV8vbBAiohCzfRHFAU1bcjzmr98QU4DeVYy8AXK7DkQ4m8c8WR4ERRg65wXNM",
  "key17": "3v1WEVJ574nNUzWwgkU88kBmxkeicefEp49AVzQUzTUmpSsf37ab5o9N7esi6t3ihVrKUQAWiq5T3aNyyxQgEnkp",
  "key18": "466PRVK61kBTWL7viERC9AM9QYAX98viHLvsCoUjwCEPJFheSzT3FPZCHi4KXcq6GGXPxaPYG2LqfGSL217wRfTA",
  "key19": "2pNgTDkyKFrT7oRiQKHdU1ex7W2G5BQ6BUXErLDHNwsLQqEN91MXWHnKgFE2qF9EkERxjftn8jXmGUp7csmH9agi",
  "key20": "5YuppRrQi23tpwscHh3zoBzsHJfLXaK1YvR8BSWtLHMTQW9fR4eFp8AsHraBXL7JjkvirRWeF6wGtbuUco6vGyTJ",
  "key21": "2EndwZ4VkpW17Ni6XWtMQQ1nbrpbSsN7NJE5VYCxzZGLxStE4NJrrn7TLhhEqWcERrxQXxJEX3btKQsYGVpp7ea2",
  "key22": "4mPeHgUQ5MBZ1ELfWSWXV4qcEvQ7xC6GYuetkQkzCXQhbPQZXEfckSTkG9BoZtz3mD78yLeUr3UwG5jEE1wBzmqB",
  "key23": "4fVDvpD4AyDgZgTpgveccM9DRAs6XyVfQoE8A9Se7eui58oit72cnp4k7H2bekhHP6m5uPRb2hMkSeig7Kz2WsS5",
  "key24": "2RTopPS7AGyPPSY4nCnkb4ccVgm7rmtbjHo4rtYiJDPyVSvcZnc3JGb4GqHAuZe77R88CA12WSr7e9N54Q3ZJx1L",
  "key25": "2K2eA28gRX355RyH5TneCmJguhrxxkpHErZuuUVuc6gDg4UYiK7oKPCrsxNMuorcr8MjZTZ4bW8htaRj7fryXEnT",
  "key26": "2g9YcjA5fwRi3FKBYcJYw1dsRTMvvSQNmqkqCQMmAfjxFwKm2wszzMMdmQrif3XmJCkRpfjGK1ueCFBDRYkgupfM",
  "key27": "3gtK5FEXLfLTwjwU6ianbLr92iMCkrE4Kw8U5mY9HKif1zrPoLi3vgREA4A9TbTEmS8rfFfnjFv3WfWqEi27jCTy",
  "key28": "gr9yAYQkB6AoM7H5TzMQwsj1E1EqWBALJyUZmSo1v9E8RzEoBaGPvtpPm3rX9GztdPD1ZeJqYUZzJamkM9Q8TaB",
  "key29": "34E6vuqybkRS8WBcMRZg42XPuDfJanEZgFBEAnYcDeSo33y9MNQVtWuZLqsE8WLHVMb28fV1XMRotJiA7yVLr1Ss",
  "key30": "5U8oeAcFriLLNmnkPmkyrsWK99wkhtZNuwfT1b1ip6KTV7mxkfi1WpwXbv3ZfkvRqq5Vxa9yLVLpD6K2qiob5mE4",
  "key31": "5hNARySJZyE1UqrtycBz1F1Y6AYAEsbAw8ueiG4BdfyB6KSBPX5kYNT7LcJJ2LJqgAZLAT2LPpLydKPQ89eu3wpY",
  "key32": "wECygf1mY56Lr9eTFnc9zPZzAieFnVFkLnne3vKqhAGjnNbYT6F7p5JRLPbPie2rthTEBFrLrZHfs934XPU2Gor",
  "key33": "3Ho6ubCEcVrxctnghJYPFV25Cu4D2JdmnNm3VswunBoRa3PKmyNVoKEWAU6MGGwnrSDWxcbRLapKRxPM45ggzmGc",
  "key34": "2UsTuGzuRnewntvrtGU2uRnLPrAekr2yMYR7V4pP8Ef832Jqnq513qCoJKmLmkBKeqSEcHWcrjpfh5qyMULVWjrQ",
  "key35": "4QVea47K6iBS34U6UucyBq4aog88C4nkti5CJt8tbtMXP9o2WrWVNgT7aQBDUZFKE8dHoYiJ8rRkWurm3wWhcCtB",
  "key36": "qUHMpGZRRX8EnA1MGyTv6ksUDRj7ox1QuRsTej6H15541RAFpSTYDmxipL6Kb6sTyJcHLUav4LYHztd2K97gRkY",
  "key37": "27L8yH9CqgK383EKuT5q9Phxtp7AnmtiTPPqnxLxgvLSfA7YnuhhypHoUGbmJ6YLRhpdP8SHZBUZZy4FQr1MTnRZ",
  "key38": "3rRRJAjvnaDCwAAaggmcYUZzn4LVcfeozamcaEsqUrCFPkyxzuLgJzJAMziH1FubEFF9ULA6BCmru18BAsyPNcjw"
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
