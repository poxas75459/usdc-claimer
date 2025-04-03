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
    "48y8BScjnxZTe5qowtL6mn2aY4bp8meJ5xD5syS9iRencD86ThkbXqN3vwuFtiBzMeL5PGoydGV2rkZXyAhLjvZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CDvNFbhzXjnyq5tQV3HWcifcS5WfhLRcpSunrH6sZrnhjMcUrFi2KCh2P5sQnjdD28DcqUuxqkgHaZQGJoygwrW",
  "key1": "5Q2RGtWn3Qts7R1PjaZuWCZBpbyswUEzX2pPDukXZnz9YcgpnEh2DKANNiGuNAn7AgGqijM6SJPxdBd8XZkhMHfz",
  "key2": "32p7Eigbbqr6CruvAPYBkgJzijwCdno3JGxgcY21kAEnxo1kPT7tTJckHFpAsePu7sXNu41Zk7iKt5fu4zmY5uqu",
  "key3": "5heVU1Ew2pAa9w1Fc1MT8P91SYUJYajarG3NDTTvWFMYFTCwFQyhUK8GQWRvHhUi9MeX3GnD5Lke1s5NTucevg6t",
  "key4": "2WTPMxWu5C1YhVqFBBndQd3zfnW7DCSmeCDhRyu41PKyDQNwPdy8JHnXD8aBRuBeFX3ykpDKSh1t2iKU4m2ADDRM",
  "key5": "3hnmHaKjSyZnxtwmCo9o5gvk5XZ1UF7oRJmccdTECaZEMaTFtcfgv4nvH46MeHCctRBvDx5ktfVDUmEgLbLEnFVw",
  "key6": "3BjxhHtGDAcVVitDJZj3uGb57z4vxrA2UDRp2gXLfFhsxkkcaYdsznW4zYLjMYVBnKptkiiY3kw8uzaB7aKaiV7G",
  "key7": "5Rd7UZc3JWUDezFcS1jejjXwvE7FhxxapWSW1aHpWKNXRbmnN1zdZTdBzqarfToqFcxo8rvTLc843PafReJviViz",
  "key8": "5QBCFcdCHDDy71bFnL376r7FCwbypCYM66B6AhhzkoGJfdqHSSJEgkp4LUUx5fn9d35sPCsL3ueVVyDeZ6zW53sX",
  "key9": "32v4joRHarYNzmt93hB3Nj7x2nUmtVwtzQf5FLqoMje3FB9ZfSZevzxnt3APrG13SsNMyKxupbT8MCj27eGJ6fhp",
  "key10": "QqPZgMoWRQBHDefaF5VWQtamrQ32vhMy8TshnKwpcNFZoRghUuC6adQnEqFbvecGNhrtM4EHQeWZqbBjBuKUoAV",
  "key11": "58Luk946vYdccd2pErEE6wA3cqoFKbCr7jQy9K56vnF2LSwhCBMKr3BuS9tPtg1ccXFrZvQpWzNKJjN4dHKfJsX2",
  "key12": "7sohqDM6ppzdmmSppoc3k2Myey49kMcLPm1mJPie1sLuNB5w8F7GugmK89Ary3X6RAUMWz4t96EhysYqSoqepWE",
  "key13": "51F7FsPurnfmcFJRbAmKJjUsLc8ke9My6CKZqmVXB4LnvZGZEZWngYF1wuVZfUDoyPL9es8Hwy15tnutG5FpxT7m",
  "key14": "4cMu7TUHYWpZ4YM5jZgw4EFNBAekNKQNeqHWU2nfwFEmpf3rKCXdh2awvWBRryj6tqQpbWxddxpNPe69gdyTmTCG",
  "key15": "29H65zEWiZfzd1sbREPgyAJLVHYh2XoMco7LN98VHzDaC5mC5b9svbDb1faW7w1Ck2jribuyZEVsYWJh2JqibvE8",
  "key16": "2kVsd5pmqt5wKq9rvdrt31P3c5NgcWYEHSQHMqUiQWYuQ4w66X7ByKZRmyyaeAczstdXki3j4ffPsWeECtgn3knR",
  "key17": "rN85bzrN4VoXNQQ3d4QhFzuNUtsAvtQ6RSmCweo78qp4rT4wrQTjXVzuJ6M1FLZ2jyNeby7bdwzJ2FAt3w4go4D",
  "key18": "2LNfAia9L6SyBSyWZd1LoTacrkTaipkW1a4x5pxjYaZenDwddg8YEaPbtuSQ2zTbMUubUMgLSZitVWGNAiZSgA5C",
  "key19": "2z7VEMTPjFkhJmMBVg4HVUKaZRyPDyzsZtK8dsZTxQUTQuGJDFvZ3u3VNioNuD5873MJrMSQ4jpy7WQe4irBwPXX",
  "key20": "67XEt8k7Gc5yBMZ7vvN6BkG51NrtmEtzBou3vXvJS8T3P3cdnNbbiu6bZdYf6dwV8m9ALeH1kknXmDH9uiijYRBR",
  "key21": "4kbqSQmcFaj8GJGqLKrTtTYTLXEURQ51RSNDWPbZ2Li5pL8MQX6rPHpJkexRfEJ6kwkyGvQbcAtkyyoXG4vDa2Wv",
  "key22": "VEQjzTZMaQa8hPgZVmUhyY5krLX1HmPtmpvytH3imAoVDhwgNFNauE8phJYFi4pc6nJ22HvySQGbgEmT9LcTSKP",
  "key23": "5Mm5gE4EeZrkWiQBoz8shdAGw86msy6toWw7gYNYady7ui8bVvfqk9pxk5yQCotsdfLYadHoJwnPBS9QMmGkS4tY",
  "key24": "9A4okt1tb6Yq2zL3wUMJ4SwgrtihQWQWW86BMLhKNqbqSvSHgmmNdo7PDdJmucn1Hh13LVKkUKzA79VxSEgSBdy",
  "key25": "5vETwNWtzBx7v7aP37jWUmg8wDqUUrvLW9WYxoYe8cDZ2E6WMNtMXrHuK5xa2ZoBQz3WKHebBCFNUXV92GJomFa9",
  "key26": "sh74ERU9DGjGBjqoL5UnLyWtjToSzfJsSHdT3PYYfyXej3ENNnhDiv3qRRYEQgtkANyxqaxVE7zDTvTBeL1Jsqu",
  "key27": "Va9vTVkNG7Ga9bk9dyoZocjg5iYMJx4cFQUHR3qca4xr3iH6vJ2dz9yZSzhWXobTC3ZxD2oQuhjF1TJ2sNy4Dhn",
  "key28": "3Lwh8RnzjZLqTkfHTnUAY6ToroxkUcNFdrFXHaDUJUarAgSKWcWGvPgMQi5Bz98UfXUJqPp1ojX8sGr9LNBKQtAv",
  "key29": "3qcSCjyw1TktZhHjsnDw3pvxCTYgRL6AKqKayb8AZN4YwZcMKR883p41zC2pr7BUhSquypNDuk1fv5n8bDgTmWYe",
  "key30": "26B83APZLfvajFWtyxvFgmpMmrgrBxCCQu1HYcH14eRP2VFLPc6fhjHdrRu3ysxC9X2JaWUksqZrNRoVmAL7fPWb",
  "key31": "43SzLiSiZUB8LJ4j2M3U15nT9NJrttX5A9r261jBiJNwLhU144rY983YZDJbwZjaBqNgeYvSHF8vA7mv5ERN3vRS",
  "key32": "3LzauUFirJGEjHxmRwBiuVrfshJ5fCqxA8ZR3aa8i9GCEnec5KJ7rpVS924wns2Z88VPJFMQuEVj2GmfFUPTXp4u",
  "key33": "ojj3UeX5zHkgS5TKTj7X8VCxxkcLRAQynNDwpV15yx3sSnMTNdR8nxfydnHAZztMjHWWyVALtq44fo3i4RhpUVa"
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
