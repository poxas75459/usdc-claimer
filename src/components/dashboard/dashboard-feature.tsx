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
    "3putQFSEko2LCri2SnJiEMqYPcPbUCCEDJUteeRW4PPVUdZzDwE18gTopevVpy6TcqFATnyV9tT7BjXzeuJKFrXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vbo3K3nQj9iQaCoyMgQpzw3A7bbGPMEQfSMrXfqSAni1QBChKmfgDFFRC8WcTxcXQjKYT4qQK8nTuXWAJXVjYQ7",
  "key1": "Zp8PhyAbEpmbGsRoeTq5RrcV8P5QHgQHY6MCo7oVuEPJyzreFdpR3E7nQbgVnAnEoHVjqcexNLjKc8CAyGQBP3r",
  "key2": "9tF8HBRWa9RUywwHpupSLetqx24DXE4quSkTngjvvPTEADchcVgof1wtmEoNRHhs1vHFjH284EctwvSCD7b7HED",
  "key3": "c6pEsCnTEMLCNRmpYXbRNvw366g7eHQCSRyYEFaEd7FfujLh985LPaCEE6fN1i4zr5Kb5ZSjdezUEM5YLhYdvaR",
  "key4": "1Pw8CoTLEG9Xf2L7NgGpdiye2DXLNhWHCA9ifS2FP8iQYePxPH8c8tsTXHc7k3mLwVJCtcPv4CGkhAZbpyWwXCe",
  "key5": "eh9uPwBHCgEq4jKPnhStixMwfQM23YBgXTPDto2JfCBfRMPDwEEhp1fTcYwaCBKDKkKLvXKXhoDK1jCfT8y3L68",
  "key6": "2Kkv1Tkn5cTDTgSkdGrajrTF94fx78hW6H1pFxisQpbiVi8w1EZszT232K2t7L3m5yuF3Gd2NYdv5MQJq9heThSp",
  "key7": "zv7CP6B9LQGBposfScFmCgqH2PKqv9ZsAiDr93ob7DAGYau2HUFEJJ4EYpHvmZME2sZJbLTdav3Q5mVQcouhpmP",
  "key8": "4kNDkYgu1QdFpYAytpBYMMME6c1miB8Ngss2B9oAocmjGGDMKe4hCDi8nrWbMWrvQGdyfvRseKjoUSR6fUNVDBWw",
  "key9": "5zp3Q2YF9y8yu7EtTuMLyS4fhdNPreGgniP6vS2hqxz7eemppP3HuLrvdWqsDohjrP7uvjB4GZfChemwk2i863nL",
  "key10": "5mQtfYgN84nzpQa7QayuE2Vn1RAx1KnJwFSPq8kvCfJYrSBo7BAvoarr5GZvG7kxxAn1EAJ3aSiYoWfYweJD9UMx",
  "key11": "2hpUmP1FCvDApSqwfnxgQsggzv2MTvEpcqXuUDhitfLUJtAsYWmdYaruuDQk4jXadG5ZaqiCkiT1FtKGpSvey3Py",
  "key12": "2JBDyeJFXea3GFzZQL6psU6HEkYs4zhtHyGN6JsUC46F5TmzFVU6o1ce18iWRrSSzaezr8q8fhWXprP2VU5SDQHj",
  "key13": "52XUzkUgaTFbTifFKCUEBQSGNTJYb7ucPAUNBkWzzmtm1sogT7d4DbwZ2uu66B8cL56FvPVLFwZ7sKvKgD1LWYLQ",
  "key14": "4U8ZPEeYKpDjvPQbw8UHgTakcRo8ghDZjbv5xWJT3e6ozEor2hkqD9HwLmN3jFDvBNvxeQuUvyKe54SCrQRFdseu",
  "key15": "4AfhoLs6SmptUv6QkW8MXeo4kWxZWb2rPiJrgrJGVcqqMA4bfNvgyCfssp8TEBLXArMJX797CfaRBC96KYGZNSz4",
  "key16": "2jTjPrFCCju7ueuT6L4dwDzuFYLjRc3zWKNq7S3a7To9tQ4mtjGDZJ8ogwL4HCW6qfohuMG7USvysUZ1oQKqPgPw",
  "key17": "4YT36U39PxTE4SD4sP3PqUfLHaXfZzCPn5NyBH5DYr4veWWWynB4zdowrv4TBr7kA76r497aHhTegFQ5ZieJqjJW",
  "key18": "2Vu8Phu8Xyrn5G82Jk3NNt6BwXbTB3GW88CAK9WnemAY6mWgyGCsX8rPVUENXJVcjJyLceBx5ciGJyHeJZgm1eme",
  "key19": "5NKzSfAUZ43qLi8QGFEHAMQcExNjCDBCwp6NNkNaWzu16cvQoiiosRDrDjNzgKqPBEYfyoy5ioVBzXosUB68BCcs",
  "key20": "5Sa871W7TnQJq468htEab4mkxLXpNQm4fbMBCobBKyBBxBcRVestJnfb9tSH2GDqgwrdnMrew2hDbC9spiqrXiXD",
  "key21": "5mpmkGv9JTVQXMsbUJE2CSES5MN9StozD4a6wxykBwprAMA5JDbiBn8vFpij72V99pEjK8yfpYHKQUjxVFvXCkMp",
  "key22": "BgVvga8a35UdRzkXn4fctrd5ZQiNCDG114h8qpow5B7dg7Y4UpktdxaxWtfVDNPjQARv1CAzmbkpAWuMabjurgL",
  "key23": "CcD2K2BigeGvCVknjSnX4zZEhN2CY8ctuAAbLa6PmMSNC5duzL6L7o5sqe2sWLTavrAzePoSEktjHSuzrMUbRNa",
  "key24": "3i75cDTFmv8W8d8VmpuKMX6fKVdnECJpdwVieo1mfqEn2ohEr5TT77UEo1bwU7kVFkDVVxnUYhoViHKmx9KRHevZ",
  "key25": "2vyS9DPkvF5NvjtfFVks6vSyAmcJuC6ro4vtBy27prSygXrqy3AW1y4aRZCqKJDgEuDyWs8sHzV4GtALFMcATDhV",
  "key26": "5CTM5adZHHUcvTD3Ua9tocnQTQLuKuPG5yTEZE4ssHW9pYVL71QETJzf1JvVZEabRybFbjMfsJrcm8tLBgzLMaAG",
  "key27": "3f2s1ox2RTmfyqwmY6vYLbqVQfenTrDv4AKCKuPesr4NVBMQ3eprCk7ypus6F5sZstsX32FYXdWwuSsmctSSxMYu",
  "key28": "3pb5i466qBYaSovT4aFYsgdMNvwHEDCBnFvuDBLgpr8j9NTnPffnQmqUVLL3G7mMWV9s8rcmQ4vpDNsQZowdvwzR",
  "key29": "5u8sZY8CQtFV8FM13RRTTZQZ1HU16obf4Wp3F2SrQumvjreo9imX497w3QqcXNbdQyQUGvzJK38Hc21MFtK55cA1",
  "key30": "52JTsuiWRZ92LuHioMi33Srh75MPiLtWjGwNHyGonHueL5euuMjjNqUVGte3SnqPqn5RhVaUgUEWSzV3Wo2rdZoK",
  "key31": "evUxSqhQAu8M7D9a8KccbqoNs1GGiTK9wb8jrxX4vhg2Wd9cYW9gxJjqm4tZTLV6VTJveYD6Ehb8b5cQdmQVujX",
  "key32": "57fs4uwBhxaJNcQtCGsJZVxDDrwTzbjMQW5A3jcr5t4gVKycjUdWYNmULtrKpRU27k9rFGBTsQwBZzMBzZuqPcHe",
  "key33": "3P13tjB2NMDL4HjSzWLnjhLWbvBbib6rRdUT2cA7vGzWKr8ykfKeYcSVxb8ajfqvNEUbkC5MXdDsjeE9rvgQJXPu",
  "key34": "5qH2oUDbbDqJsLajm9hGqCqLW1WkZWsjvRjPk3PK674FDQYsFaiPgREh1pNEQbd7tRdn8ucP7Jn461KMprVpoL4q",
  "key35": "63MjBL7Am8BFezrg4PAkYWGXAmJQt19oL7ihieVc9frsnJTqwZxJKn7gNHRXX8cfwFzG9s2gombSJ52TijW3RobN",
  "key36": "2K68Vi8k9X6uNE7jD8cyCS51uZt5iYReEZBWGW4SvT6G1m1TqkgVTBvtLU3X2w6zWyZp82HGnWc9bG23WMEUnN77",
  "key37": "4T4YfenPi2ZUpmfzzHsDpqTc6y797NMvUUpAnjgQV2kbbVqh5uXHZK3SGFyQNWeGexfZgYQVUV8sPFss9iJva9q5",
  "key38": "3MaLxPtv6BeDkyas4SgmJJZebKE6w2y1eMoxxE9jjWc1wo6vEKqjN5EfR78tG8EXo8PrHHMCVZ5cK6EH18f4WBv"
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
