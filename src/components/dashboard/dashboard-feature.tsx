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
    "4VoQyyWLu7kagtLZPVgz4BmYb9pVYxEnZxxsqufu2c24N83MYrVNEdoTUn9ksviPFuV7yFK8FLjG9mpUP5P9SfkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EGemP84GB2HpXWhSumoNXaPUNPM2PvV35Ee6YRYbbZHDvYTthEALEbTiAsbnQ7cd5cPCq54ANjuhmKEyDH1Ve23",
  "key1": "3n41zNjbeXjxZcPXwiwwKirXyv56nXdDTNbt3GABsnkRiWE88SnptGdoBud75S5uv2sQrkRn4HTshPhMdWyfXQY5",
  "key2": "D8pthCB1HhssBfj8Z6xDWRFK6rVF5DwCCZRoZa2q1ymSMsPGwTcJExVhzc4yVWHLWH7e3PwjuLcdEDFou22NocX",
  "key3": "Jz9Xtfx3CUHQhWeFoB9gs9YvDWhL2pXYWg8igNk4xTUDQfRhJnHtadikafnRDiisSrY81PRqxLNeMwNyrAvjxJy",
  "key4": "3ffawyfNVm2kds358Re3Mrhs5ksTqhHUF4kYnEH9t2cy3tAEoShvrvfepnpwiWe1LySwnr9vR285ArGypEaJPa77",
  "key5": "4fyjLHaaH9NiDMFr15q2wKP1PEoUEt8CgaRAAobyuVoggwe3zW75EUbT15xWTjg3684CPLtnfr6ezerYE8UHRhTg",
  "key6": "3oNrmXqWUveYZoEVxDdi73u4Aq4EiMQ6zQ5g58hEWKi2KYa533da8VDob5woTPtE2HyUUuS8yM8Nk3nY59vFcxwd",
  "key7": "2bfm5mEuj8v5ZuHqevZLSujtekHHTBzRJ3B2FxvRy5NbTaDzuRPkiJA5Nz8mPKr6Xw4THdbPcDzxmXUbnhV3jL1W",
  "key8": "4dWxD8SYPSAHtHvZkbFrJFNfWwhXdtYHrE2dPz8qfbXyhnmpzxrAT9ajkKNkUejeWfFTY8zHZ49orc61curFqRxZ",
  "key9": "4ujWc559pMFDe3BY25csisLuept97smEEnwU2K1qszevUpGHytgqzvAU9KfpSV2GDF6kPXjEEgYioir39BUuzcCr",
  "key10": "RmG5YeBt8iWdu62GeD8swB8yi8TDQFdvpE3TTzgtbGSbR1WiaCJbmm1KuG7hny1YC98gYqvzofHWeQgs4cf85mC",
  "key11": "2BCkV1M3xeLBdH8CaDmohkaRUXnNzoTgch9YfSQnFhQuG5e4nVYn1ieAjimurSvSPTri7op3MW1n6M72S6tKcSBx",
  "key12": "3Lc4a2JKbSSZzx9recb2eZo3tJJkvuEz7hW46k74X2TVXWJxLBRhKv5YFZRUGEMZZyatEAoLe4fa763s7zFWQdiY",
  "key13": "4qtiAuX41ta7vpa6HkfKLt8Pc8K67QwL4Qz42nP2Hhs3L6TSH6JQwagP4nWUQf6MetYoCNF2wqMJpbdFGFBEFKEH",
  "key14": "3xyZnNrP8BkrzxsngwStYC87qenfsUSmoht3EfDkyFYFDc7baPoX6p8Qj5BHPRg5u8c5exhVswWczd3HW9GTKUBn",
  "key15": "3NdjEPuEgJNiyhoPjmrVZ4tAHg8u39RC7rquU6yYkCPbYsnSkzwZd1pwCWr5bou3tZQejarCcm6WmY6qfia6ZE5M",
  "key16": "27Y9JYx9wCtq7nAiyWx7TbcCWEoZqMLxm7tiPRpJ15WejPay3rv6X2ubA8hZ9QQ166RYsyfgMwk4bpagsZXCMGaQ",
  "key17": "33zZefd4cWC5XKGFQMB5aHaoQ2yxAAWrBpPjgNCDi6H44Jgj9M95bLpmkSUvnWSsNgTEjaSiziNTcBQLhdCC682S",
  "key18": "2hfEvuWHiSkBGN44j6tXy6M4DvdR1JnqCcFNKDBehkgDmyEd5vAJvPi1DoxBLchpNqmAJFyyw13TjhD4aSTkUAJ6",
  "key19": "KYysm8b4pfwee2q766gdz4rnKKutNdXNsis9JAwFZsLumCu3SHbLTmFVmDvK2bi9UvjKxi5KxVE6ruWAQwVxiqt",
  "key20": "we6yMg3HL7rHZAPDbbMDtUziCaYnXrQDPKFcBXHZBi8wJomRS3YWYSLu1axxkEqJc6zgBmgqgCPBSk9qMJ9z496",
  "key21": "3mVwBuk3wNdBevzKfxetV3tCRnPqinaTLviusLU53oZBLy4Me5KD8HzivFabVzgQkQs6jzU7D1ca3kyHgLh3bjwj",
  "key22": "UiMkfrJB3WGg4dsQsnM7ogDEW4v5Z47WwexvgsGScxNZquU8Dn1s7A3XQCWM6hHw8XVWekqzDyGrVFWJi8GP1fq",
  "key23": "39NDEj8Q7sgrDp8MY8na9ra3mrkkBNsBdgNCreLuopfXVTfc8EAvAtdfDEEVDykimaAqCPjCR1kTsNgKahXe2mLv",
  "key24": "3SV4kTQFZMEYRejzsaieK1CWYZNb7sYzedHgYNHrgYzGGtQ7YEafgnQRXJSp4uBkfcPqY3nhsokpUFVFDqviPttg",
  "key25": "5cEnGV4g4b8nf8GkF8a9Xao32FnQvZVvqhhEN6P94yoX8ncxh1T479qRdsbeh949RCo9jDJ8RjdukKGKJPuPjCoL",
  "key26": "21fjA71V1Riu1o8G29dZbDAneponyR3kFkmF3jHKAbbSbDUMRwsDGLWe4AuXmcz2Y7nQPfsurSmdy8hbhJsa8keT",
  "key27": "3jXWACvgAnxkhR6cMVG4QYuwacXGVFgUu2E3ASvtN1vtjEbj6GTjFqfzseEMMT8ayuDk6CuKCjjAa1HuPN7etGwE",
  "key28": "5TuzP2419M7xubRQDsp9syqzo3n76EtJwk7qKMe9r3J14s8YmeQbCKtoQRdrEXXRgWqZz2VeqBR832YPfkzGGHfv",
  "key29": "5AH3dGwDgpAUKH8wsf7AoUAp26i958MzYmjrDzM8WqQw2XgT5d6J1yCC8PNTZ3GEQbFzutuevqc6Vz4pPA9A33s6",
  "key30": "2PGpXQKXLv6daGkzQPYfTkg8jh1ge2peXevP2RrWqTbpm3ac6zCWEdDBBKkZayDU6yhe2xZQs1hRkC8XuUzmMSww"
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
