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
    "2Sip5G29CCe5qrpM1SXuyBPMCp81tbkXJV7fbQHh1xHM6R2pebYnCiYmycUGrdYW59aaQ7MBdZv48r2VHiLXYP8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28SyDWYr74bkStwHuscbW4LqCKRgSuD4pcqUs2UnwscKGCZp967n2tjLHQrdnoCBXnAZRzwRdKZ656ncXMznrprD",
  "key1": "3uCmyATFeBPHYS4aku4DZi8v2L78zkyF77eNj76gT5yQfUtGNDkFqnfnuKQMdpEK6aabEw8RLJ6quHGbdGtJ18FS",
  "key2": "2piqcMp5eUkP6QT1cRA53TuzmAvoZmKjks8ZYRp7FNm9k8d2hDfJLhjTNMg91zx56gvgggeczNnzP3h9veZqTFMQ",
  "key3": "pgFMSjyAW916wwxkc3KnjKzsHMeAyfZh7GEyEfhoQDvSr8ofpE6AAkkiqzwFAhj8CWdnSJvgD9D9fXaJtJGzxwZ",
  "key4": "64BPffyW2mKGRGdku7R842crLxwgqmW3AtTzHD7R6Vh8xNAqTT5m88KKGc4zZAAoZZ572GoD85sWs9RCPHjtumfd",
  "key5": "CHQumaRLeG6rLyeHWBZSrzNtuXx8UdiYqZhppXpZUipYg7K547BVs7wKAgKsXQY5ttCL87rm9r1Dho9LvituzEg",
  "key6": "5GeFHnZ3pAScfCdN71tMedDRjkqAAwWxZPX2uRUDDdp9od1ADKDyoGaQWScpqSjfUcuNzo9UHv6ge43zg7voxZAR",
  "key7": "5hr7vGPuAbG6DVyQdkbS4FrpkQDVokviYkA9uo5B4ZM7WnRWWzzobz7DmS8EMFESfrVoU7tHMgwoCoZ82zhcSgga",
  "key8": "2mwBKmXzbvWPiUsGJmutAoAUKTQqkSjQJ9nhw7Qn9yFRQr4G8P13ymiFVwCMmj1t4XFABtyyYTLpVEeDzCRV5y1a",
  "key9": "2bKp5SD7e5Yr357c5zmM1GLNFCktYX4d3VJdFubcuWFjYyhTRjMQMqnJQsP1EQbTPqMhoqytbVSPeT8aJGhXbLEg",
  "key10": "2n6UHPfEQ4jaF9EnvXAP9hPRar2Duvt4i7j1KUP2FYSHJ9L335c5JSmL3pwqZ9sSx634httuXyqPKccDoomty3j2",
  "key11": "59aaRk87DB8eqD1wfDjs5zkgr2TUWRH2Qfg463wVXWWWrLLm8WwBKP7mcytUr1RtQYhXPkZe643BVmcscaxoyCS1",
  "key12": "bkHKAykAHKY8e6x3kNhftiyxpvMEPMbcjxjVagxoR2av2uXHMCeUeF9vVSN2gffYt3wZhGCBQzGBQhSr9zmkhwG",
  "key13": "2FmaJccuhZXje6NPHkBEsLdrtYC12P7f59d1sobHDfCgv8M9rk7RKtC7QDSGJPf7guAoxhBYchp7WsDsug6cQLcL",
  "key14": "5pRNskDrhFeNjTt3Kehbq5nEaZmqdh9A9T1W3htUVxEQtoGhqos3AW5VsWfC9pDXmcPJrW1KWiufpF4xvDQRbdVv",
  "key15": "4zAwWzxJGqEFNnscWhFhar1Cr8zwcdxwJAnqufxSkGjyrqR8p455ZQpTaTNWkHEu6WqSmwR3HMoejie9Lf9rqY9n",
  "key16": "64PnnMUgjaBgofd2CUaMwV9PQhZjoCsN4pY8nkWgMC2Jn9m9yt8YPho6hTE3xxaJPL5Ddje3jdBueHp15HA6uGjs",
  "key17": "2gijWJru8FVvm4NcVLiRDu5WzV6MrhBhiSUxjBYzM5LYttLsy94Bee1GEzTi4uJfYjHuSDwf5oDdUXL9u2ktjuke",
  "key18": "5YyCJC8Kpu5sdi8oya5otX3aPNVm5Y2ESFn1Tf6XN9yTjDCYpwnYYhjisw99nzkMT3hVvMgHiw5Jx8NtQkSujcqV",
  "key19": "48TcnyMe3KvAfy7DRocHEMV3cUp51WR6ESiPK7KVm8d2MtMBP2EQXS32qXpyfd59XrTbi5HsgG2cBiZpTiJnZfVX",
  "key20": "2xJGxzeNtrhtQBbTiM8XrkQGbfgEaiHRLwws75nd3xduTTDiBPWtNEZdQgGbBMSV2gH248PpsMgV6PGHvybsCrk2",
  "key21": "2DmT4oMCZmaz9JGVk14Q2E6BGNeCiHZkM9m9oRysDi13omhZR14BQWjRq9G17hrLM1BKK6ayn9nYXUyuUkQDXFru",
  "key22": "2f5Y7zatLeGJCxypMiBffSMXRQUxdrN9nNSTybEVy41v8odQudYeJjxJk5AaV8RurwuWyc19FGz41KoBiZreXhKy",
  "key23": "eNhLfK9JEyGPnpP32izkFfcEktT3DW3sMy2D6JDNsXrvKNvMnAaptPYsPqYny5s3YE8rHuBVG6BvgELG6R6dRxF",
  "key24": "4tFhJsczxvA9GHj76wD9m6tsfNRKQGBnfa1BZfJ8Pnf5TcKCMj5F5sD2y7iCFnRSB1Xv3hnBqTsxqHRJXhRK9m3S",
  "key25": "aZD9sJjMcnfQt6FcFpmA53xJrMbhuwDkWcdt73faeQ7MdYUdNxeP46GzBxx52b8MKEH53GfhGAjcpwStcx74m3N"
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
