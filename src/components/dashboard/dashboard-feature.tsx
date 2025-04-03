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
    "4ZXdjfPdHQgEGQcXVJmqWg6aYiLi7zzgjfPrA3nWZaB8AKSkcLXciSL8ifxuAu1GLcjUn4toDq6AUm4aBtoqaw6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmFeWsjK8aBspPo8BT2rNQWXb686h7fBpuH9mYKw1eozdpLmKQDArbiwMENyh9F5u5SPexNAzvjYRoy46X3PrFG",
  "key1": "5Bw9UT1kp6SPAGSfpDnvwFaEsjAoEGDPex5wegAoJB6QZ4LBW2jMn5xRiDATTKvEEMjPrxcBVFxmmrvmVwhEpMbe",
  "key2": "3gdJqYd6RcjuiD7Uq8NSFLmxjKNu1E32P942FALroCTTnK81M5SZAWFoGEY5YeH9DziFvZ42b3vTs58TUxYZ7pUL",
  "key3": "5rKMDFYqHPaAvUUMkn4jA7vP76G6XQnJ1Bg1WvQbFKb5xTasmSJXfkQEn8JP74GeEfhBvKx8uQU8k6rGUEATECSX",
  "key4": "5T1ADExKiPc9THyKZLipFCYNQHW4DifnVrWc5z61E3Wxd3UnGK1HceK7x2SoTRjxh1QJk2DJTuoucVMi51TUgjZu",
  "key5": "3aXzYGthFcgq8oHMo6QcsUAVamYhnNV4dUFb2ESHiVzBefYkVZWLjUWuxMqAto4N84SGZEHJDje1zEs4CVxmwxKj",
  "key6": "2FYiE9nugbbyTv5yUQ2Myf1znipQPVLJ7mxwGkRdgGvu7A3trftcr3jLm8sSpdJoh9B7he9nqBxqaMQF3wJAvq4G",
  "key7": "3WRJpZr26GVfd9WEywH8f4bTF1UxU6dLJwoYrugeeqJSEtr18HbyHLwEPYx2nBjQU9Ba4T7Mk5MqMWbfADsGptSN",
  "key8": "2UzB9mdCuYzeRMfe8pC5ARRbk6Shze3E5cbdM6UtChUw8yJpu9SVAPGGuH2xZU7tqV4YJWabEev8H1UPavepFr43",
  "key9": "5T9t4Lneqjcv7EwpoupHc2BVzMwZtb9iRPBFb9qPG9QQHjKqiktWm5jwcYetZ93phTHfBgcRsiyBueoD9vU77XN3",
  "key10": "DX4hQVSCKkhSBDNB4vyuvaV9tmUP2GzR69JVN2yedEU1ECoQQTFbayfWj9UnceraQ3Dkbpo9zVxhWj78UdL6fE3",
  "key11": "3Kgvr1P73azVL51yDPNYLFKTERoYpkCFTFnNyJd3i1rv6fSTR6bz3UaZfsJNS576TLv7MWKHXG4rDj9igcyqY4nk",
  "key12": "2wjLnS62WrXDigrDEPir7RKc6cQc9xU51TUc2qRECCKnBPBVekYC7VtTFuBKNNRsPCe6v8pkdAJioAX6XXYAXCQo",
  "key13": "4LkyBHuj7jzZHQYke766Xzgz3FzpnsNpoVP142oKncq4vxWVwxvabFFmrsEdi2ZTErdGf7Drawrb5b4Tcw1ujXxc",
  "key14": "4Jr8aZqxb27fLLeK84punriRTRZojEhZPSPg9NEFgUpkUg6qqhJCoFe9SEB6AsYXA52yvPRGrYBATwtRqUTFCZDt",
  "key15": "2H7qpUUnHxYnKDJZqsVNrpwHay13We1Yg2dzscEmxcBLSTDmYRvAH9FBQw3AWKbV45B3aM5VvpReBZyhycKKeEnZ",
  "key16": "66Atu282RMZNfRVcsKkJH376tr3t6qGfJPrSkjEBwBBUgv5RUJ4yBi1E7YjPNVYQA1WXhXtGH5weoTnDsiP2Lspo",
  "key17": "4miq4Pt5mffYPwn7Vys93MK728aSdNyHRxWY1zgVnYTnR93JqmZka4TQMto2AYBRGKawiU1YgqytTfnJLxiDNZm",
  "key18": "4Zrd2GYPotJ8EtdFUEEx7jSpT2vpbjoYrKBhnhFbNJZsFi7PoBpgUMoTCuKXLLYU3CiVThvHwpi6rBgn6PnZ5KUD",
  "key19": "5ykSdCY5uaMS3WkfiLKyULRf4msMxFBkCT4dnLfaf232Y12wiDeAbYD18ELYgiVX5Kj4Ca8kz6tZzkZNsdWvPsEB",
  "key20": "t8Uen1hdsEwnDewLtDRjVBYz69AfwFDU3hNKpDbhJpDWssjbTHifuKcTifSuVFdbjUPpgT2eTDk7nBXbmYwo4X5",
  "key21": "5kSpfe3xYYXKS9NnJzaraHXXEetyEGq5rzWNHBKYuUuWhwUxDcXHYBj4EEMVgbkoDoXSxkmoBnUwLEewarhreTd9",
  "key22": "DcJXhPJ7NV6EQPiVctZFCy4eyKhqy7qmgkPoaZSn2omnUaEq3V1LJGGb7V83yPEGLJSXv2QMReHzLNM3D851Gf4",
  "key23": "3naWwBp8yWraTJt7vyJUr6WYbjV3epTLZoBYsuzcDrQpo6pQYVxXVfLAHKrYjyqnevvRkKWE8YXHPiiMZRXeRiRg",
  "key24": "3XtiSiASkFk4gms72DziNop18pRu3sy8QkjMrUMr5SjixwvXCUcosYQ6o5UHtz2HqJpkYj35acKiCz65Zr5D4YvG",
  "key25": "3eQcUnL5zWFQVK2HCkmQEYFFbbayFiF14URczuU75SUwDKZ64YAN5vad9n7jpMAcYYM6GMBoFb8PUrQcXDwNAEGv",
  "key26": "4ph2Q2Zci5M1h2Rwm98Vs4NFirLCGBiVMdbARBxDRFhBcbWPfnnQB3mGcMtWn3k2wEXnBNJCv4RNcyKwFcEhYZmP",
  "key27": "2mj7JR3iJiairgoDUL6s9X9qoYi24syobryUNhND1JzbUTS5isDSdE9vaGug81mrrL67SFA8hQQeEZtArDjoNDhq",
  "key28": "5aYA2Z5vDHTaC3wuBUxLetQmZLQf47PvRPcqZsJ7VJKV4SANFAM3HuPY49X8owWHY9cVNoJDn17rNYGMCCChogGo",
  "key29": "9qDRHEtXVKW8HXcdnMQmFG3DD8y6ZNouUj1bHkt47hgrELAdowziXrsej7Z5fsSk8YQzXQYdjuSLFKehDnqJQR3",
  "key30": "5AWSxfzxQ7mMWNxBEaHMVh1oKAVLJTchCgzkGVG4FwZQmsHgjyyYz7ytQDv8f7xksyR4V2iApR66FHXPZbeaTLrk",
  "key31": "4TDTNz5K4pjjY2sHGye6VRpZyVHgkXH3eXu4R7BJ764PPo6gsSZr3npYE5ntJJCqJxjzpVerX2xLCQa3YMbUfDkz",
  "key32": "2tXX8t7pmMUNnqZoN8S2Af6PcPFvdpESkwchjnHTVhqMZZUmN3FuHdtrk1xF7HDDXLtvPau2B97hKUGbU2woE2WK",
  "key33": "5PcB3duayDZTM6hC3oVjU7WikLwpJw5ttfXV223JyyZLoczEHZqh27uEo5XWJHV83CkMqf35kefRqK5QwwFHX9S6",
  "key34": "616ZTWDwKKDctz1AByfA39B49B61NH9eLtHgUM5J8vVJR8JfQR1J3yBuNRc1gnpjJiguaAEqBWUgWimKXt8J1UeF",
  "key35": "2jsVYA2bUK2FR2A2CF489caUqXPtjkwRbahF2sZ8bMrui72CfjYiRC49fMdgNBPh1F5wxbi6FkBcHdU5gFY86NYH",
  "key36": "33GD5CBsadoLdGwHGqHBdnMDroUNfRKWSod5ny2rqHy8YveE71Ks6SjFty8JRQDj6CYio5qtJmdvzyE5QcUwtb3z",
  "key37": "3M67bWabMyrNVcRY6fDN1cefCX1RBPBL5t8ZrL9KmhaosP5R1YtYK1GwR89sErw4T4iaoDRuz8RNDbDHSD5dhhjd",
  "key38": "5VoDcydutB7y1GjnXfzdHj81v43bxdG2QehrD6D6Geus8cpofXQ9QnUsofN2uZ4eemUKXwJyfJPRS8y2MDEjmKXe",
  "key39": "2FQ4Xeyw6xSx2Kq7ScFQRYA23LZp7DLy9AqxUvDpkHaEim9fDhEz2SpGDhyApM41H5rMub4Dx97UmYhdPdbjHPMK",
  "key40": "3YuD2T4qRLssAkCH6cQEcCMNcGa7PQVywdCXnvJ7Nohtas5btqRMx8PhtzJaLa3mAoYUYHA6hcPeXBrgXf9MpRnt",
  "key41": "5bVdKBqQpaxsbNrYtmb7xKC7EE5GY7kNqj1pz7FCkHEggrHU4i5vxe63omGJBjzLD7T3hA2r9b5x3hRwgHiF4QMN",
  "key42": "4DuAzCe1f5dPmxNJyZAaBaexNY8PPyAXRkLkFwxrZjU8brkhym7ssde5LynSDjyZMyk7HsoWw8rNNGiAGAXSctGL",
  "key43": "555kYevqaJVinC9qBSW35LiZR6A2756HYhK8p9c2ieVgEC7AqLPGNfnwpCdNVZtZDe9RwCE7GE7AvxQbcLsff1nN",
  "key44": "4aZeqtSXpu7ocjziKbDPYMvb7v5Yrm4WKWxFEJ8QQFvw2mK6hWUz8uv7jgfbqvf2tqTxA4V2yWVT4Y4cDPvfW4Tp",
  "key45": "eKkLbzw89DLPxZMagufw1j4BcgZxJQtUTh8XfZmskYxxHShFYa7ZMNT8vSGc1ub7MEuPubvXC48PTqceZ24LA4G",
  "key46": "4Q7gF5CXWfEKKURLDSsQkmCesnT7KHrSeNhjcSpcegT1FF3UuhPjnmg63QqjbszBuUkVnPVRf8QgJMwBtre7ArVZ"
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
