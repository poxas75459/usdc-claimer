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
    "cFfu6J6gcaYVtj77DNuFfqkS1v9pNx4S4LYfjPcNU4rU7KQYdaKXX9efY8YNHaePz4X5Rts6HnmNnHLSCxX8mKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RK5QMVgW5j6HKQq221snbXodiCh4y15KaDTgQ9FdZ4ngpjSogqLaC2V9rLtv37eRA9sHis9HVm4GWzQtVEbajN6",
  "key1": "3UEY2BwmxF5zuSmw3SbicxVr3dGKyYtd5p5dH4y2Xh1Satrjkx8tWetrAgWcMBwQNCvtfCwipVYpCUWkEbSjpstk",
  "key2": "2KmMaLSoyZtom9Tq6Fu9gKKEPmShaoVb17dLvojHCow63tzhmDygQCocStx7K25M6vVH5qNBaWbEPeJgYeTpwcrj",
  "key3": "3MxKZfw7ZAPm25P7optH36BsXsUZd1n6gyq35myJbfnfcaR74rwDYj3RF5ywuLaoqzEnF8CnGJpaJyiYgv6ZZmko",
  "key4": "5kc1cGrSYut8ef1kpVGmuCPdVMKE5XCE74DLjh3D8rDx3S5hjgJAT5VYqjKSBLWgsSw1z8o8SAMNzwbdFuVzXdyV",
  "key5": "35DQo6dbcz6yiAYVJ8Zh9HNjyrUWrVbaSHTkd3QE6bVf47M1RrSr6cyGUc1bymcwATgVnNjU3iiwhSrh9zsTxzVX",
  "key6": "37NdQMys98iERBUqSPNtpk7Yt5bVPXMEY6wVNsWbX7qwPQStZ9mBaWtrix11Mw4VMJcrY1v7bex51wmBkHDeVfee",
  "key7": "45Va8enGPHas7R6murw2yu3rUwF5w8XtiWn6o4GBJUP3WjukQ1oyHfH6ktUsdZ2GyZ9RFcmREHDdvAzcHY2ehKDV",
  "key8": "47xv7U7rzro3zEjopSxvVLVh61FAh93mnWHBkHmV3MQZ5sYqnthjrdnjFy6SAKHZHwP88JcJ4cF1X7GcncEFqnMH",
  "key9": "eMXUs8Zzru1ds5oen6KiVCdVypDK2VcThd4vxQKqgHnAqUBxqfW9W2whX2agvpyPEpyN4QQf8L4JtBGhKnpnWc4",
  "key10": "2R4uDdXwo3HKYTxt3w8QtvhyZmFPtHeczVTz96Lon1QEPzEbxwgamNGa5SY9HnnUUJ7QxdLizxmuuwLeNnsZpezM",
  "key11": "2V3Ynu1iNBFMBe4oEf19EqvHgdwuLn8Wwrhmdc5a5sZJvtLdpWX7MVg6eiCGXCBr5wdSi9DrfoyNNLjQhHAb2aZ4",
  "key12": "2zj1he9z1SmAKKwAeeuXcrGH5xRCP4XGENwMU8XyGLCUyvy1sNPossiJ58SFR8ZLMpg31L2zNh5zMQX3K9798Rwd",
  "key13": "5Ubh4G1hhUUJVUESYUDevmkT4Zfv2CKQWCRy9CquMwRvgmR15JScNMMpw49ikXsoWK7din5UoVWkosvVabaH65Um",
  "key14": "zDP7HDXtfavda9594v6gmaSZszb51EdiHcPytXUqiYyo2nMp9WH5ciBkrMdVoQ2fhSaZ95SaPWhN36ETFrdJWNx",
  "key15": "NZMeR45Q92E2rYMBGoisqsD3QZdRMvS7ePSgK3sRfG8N9uWozuDYK147F1h3Y7n642EcamQUhpGbV8Z1aAZP1Co",
  "key16": "pzv8Zeibyz16gLudKgTGe5fM1U77MUGJMQjcfZK34guan8ezdFXgSgdjVUkzXVepecTQ5r4To3Q5kDnQ9rcSVoL",
  "key17": "2sLjnXRrSiML92VJxiAKRYGTafUbQhXF8SxKTuPHcqKXXaR1U9z9AfTcztJ74hNt46QqKhm1agXjaSAHjmUzf3h5",
  "key18": "QzrqGa9SmDaptNwanfHxRH9uEaJW77kGu56N4tGC2v2Dtz7U9ayyV9oPYYuhJXq7sxEGySkBUwaDdPUqJUsbkR4",
  "key19": "5UoZtzHbuWQCgbHFQawHud7nLM7iF6NUH7KAfvJvEPwTYDAPaqgXNwoFo6ng3oQFY3YEeS4EEbHiecCqN99VmDVu",
  "key20": "4jTfJhxWf4PHbL2JkZcvmR6CKpSefZkCgZZv6RPGZU4HStNQdxe96z51LeLWsp9xMyS62qKsRYiU94FyJZSYvNQc",
  "key21": "a2P6ZJvRKjBcEm76zWSThf1vJVJnUMcZA4Wh9YWKw1vmiBi1PQnpbYg3z8tEqxNjPfcNc7yySTfbe9rkeW2w8Vz",
  "key22": "LNz9d9Pwao6gvttBWdwpY9Di5dCJDfKrV348MPZ23WvREqUgikQwuTWdCK29e4mvShwQcSCdWHZmrN7i5PJwAfF",
  "key23": "HvXq5zsj8C4NA4eZZSjbpky1k5oPrwDR3Zkkkz2epxJmRL8KzbFigfP4V6rRBdsqenZZwYYW8efacpd2bXpgtpg",
  "key24": "3tjEXGBAPeQoDa687uwuNFyrgdzGispcyFftBJAfj6URvY3L5gebgtU6LVyj8yP8JfzhkviiVXgzRDPLHT4s1sdL",
  "key25": "zhx8KhATW2Avw2HjgQ1c1XmfzDpmCUjGS7HTLoVcUN3CBA4Y63iQBMMYw1A7ceHZnAoX2tVVdnmvffcH36KQSbA",
  "key26": "4qZnpokuMHZKcVPWuTxP5SX6BAecoGviCwYxjhw77X2vAtNdwbJMDTHLnSqoonTQNzzjZoKpmy4RzrjKtzyoHE3J",
  "key27": "2iKBJ6XcFRYdUra1GbcyqCr4unfaqBauTC7DDvEGcviop9gQPnNvXpea1BA6Uv13ijnDHTWGeuE4HHPxSxvQ5DWS",
  "key28": "BQpvuS6UmrGGr414PDwctofCNMKWJ1w2t4TDDiRAmsZKzhp53Ynrm3dmQTcepPZm1iCTCEULwmFSawsQuR1a3Mo",
  "key29": "4XX85fu5ntjRMJph4LR6dBMcicznkmrGbgM1u4fzwnNskHEQfLeCau5ibPy4jha6UvBfP7CaGrN3zWgUkXViWj9v",
  "key30": "5SnKUY7cKdURTkqgDCVw3mrEKsx25628VuUuM9XVgTiAY14n99eh6wCDVJBuaatJyv381Vnfmi5GsUpajBpqfSWB",
  "key31": "2z5ZXKnQw6vwZYJDwguC7Z8gzXVP9bEaQtacPV5kxuumqe5SVMyDejneHgkGoQ7hGWqGDPw7jMRBJbSK6k5QFc5a",
  "key32": "3t9vZJHbStj2yKvvnoNSJ3okd6TCnFm47fkW8s396buoFFoexakzLVQNKhRAzMJtibAJbCys4rwCBiGwVZ5ACF5t",
  "key33": "3prmeKS37pprDRtb2sxRNQAkPssBPfoQ2bqX8aWo9f5MZ27iqt4A1Q4oJhzutzMTmWBJkAAzwW2aWy5MGE3NPZ12",
  "key34": "4nYMwgdNX1ddJxqticyRgceBuiyaia3Kya4jMDk1rnbKP2AZytfse2noDYkB2mX1Fxz2dguaMJpe84HTTF6PciSc",
  "key35": "4dMPbmj9BzfwNTcePPoztisEeQ2Pg4DueLhqAfT1RRPxZHDbt2Tq6DYUfJCVLjXeHV48nZXtb8Vz3HHdRFhRBnhh",
  "key36": "3UdENyAp2bi5bvQr1NuzsFzHGDtksoeTnuAaUMdgAhgtp7nJ2yUW4D5RDmv5ZEKmJd7HT4FzXwGaZZvdygVYvVNh",
  "key37": "2udMWSnPB4zY9UHPHzvDAQneztjF9TJfowrAkuaZhnH3rE2FfzBTyEp7FbnemhkuRZFT8ZnLGeC7APQJHCCnPezF",
  "key38": "5biHbLsJemWhN6KjZwv5cwV1fsrqGvRB3HsnhL8f4KzXYuTYzQhvtp5vfstF3e11i7mKJYG8RNPtwAjyqec3JMxX",
  "key39": "58mc1SPxujBkVbpZU9J11UtfuxeizPUCW5Nev4aMFV4vLGzLQSdLnn8BWyxvZa3WdKx59LSBQwjT5SXcPhSMsnZ3",
  "key40": "43xavfBDDASirZ23whEmuEsM9Xhczi2B6Ru2b7DZx8N96yJRyFbDw7ptuShdBWhiHKJbg3VXf3mULcf3UKwCt48k",
  "key41": "4G5pHm5ppoqj9zKeeETCYy6Ck3sGnbwkJssT8NGUJEmg4J18vxdfN2Tmuedh5HidxWEddKVBmp79qhAmjpHjUk7J",
  "key42": "599wyywJ78qfnSL3j7havzqZwRGT5L9zzCsxt2z7HCsME7DQXrvQ1djncK7e9YFgC6c7TDb2fLX61QETcXBjsCGB",
  "key43": "4cRAFSZnhJnmXQPGBKiXQCTaFEw68E4RJ9qbNkY7FtPBTRJjnyLyKsywRPsfKhmpfSbR8UXugHxrdhxTPvCffSDp",
  "key44": "4mMozn6U3yZFkpB9xTPvPqJYTXeQNnAee8x8VzSGYZYDVNUzFDM869qfxxa2zwdotGCi85uH7Qk3Mj4N7ZCpmb9v",
  "key45": "36fYkC3tStcJGJJJfSM9ZTmRPoPc6Kio3BpiLAsqMbh91WpWtsTkAAx1UDboaFVXUkDhmMRZZHaRmXLsjsF5HnTs",
  "key46": "5NwY8yP34vx3VfbLFiBcEw78ZJxHhNiwVtvGhDp5cnhCJZ7ZPNnYD4uyXLgTSb1eSSGPaMjxDAuXCBR3Wygq3RZk"
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
