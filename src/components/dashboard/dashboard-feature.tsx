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
    "hzRcgLFPq3UzDcqmNNZwjjgQnXycJ5U3E2HZFoTtbt6gyQHyhLZ7BkyFCkt4uSLK4P4S3PsgqxW4dYLHWtE2bnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EYwcXUGnVgAXn5V22sRmNZoi6n6BANoE5Cu8hzcAP7GPfdCaQzwFZoT9LvRG6CoiAmEQ52b7vF9PusPsKUL5o4W",
  "key1": "4LbjzVXoB5xvuZG715CWtEKBPZXvyVQxVR2rE53QZDMysJogStQPNJU6KaeJhLRmPgdqCXsFVp5boN5N9bTsvdYV",
  "key2": "Xoe3UeMs4EYQfebwKcXVxALjmTG7QUFu823jc67MPQgznJR84uT21RScGFwUvmd18xyWcFopddvXnwD9skCs8cV",
  "key3": "5JRiBhWXJeqqzngHPGcFXCef2xDVyKgeyPU99vMWzcZGPFVD4TzxczBk7mvNn3hUiGPeVzGtz19rQHyfVvrTNRZ2",
  "key4": "kMJSYubbhYY8dAyy6BMGxsRyaJbMKDpVX2JBpnYPoShK9M746317iM47quWMeWJWncjNPNzM2eMuqtf4Z4CHXJe",
  "key5": "4yUFGhHDMnc5DDuVFF8YgUzrevDGA4qdg3pPDNVqRHr7RYshZoxoYg9GBjqXFEDHMv37ozzGdypADJ2VXvnqRU56",
  "key6": "2vz7BfkkuvQ9fDfT19QYrmKJNMeViuvzaGzJAT3qgPtgnX6WeVV16yd7TxHKxi1YvKkD5L34XioBYQA2uZKqjvns",
  "key7": "5o13PmXcDmBRkWiqS1dsxgtoQHgeSXzDVMWfLWg5Y1fY7EDuDXpndibRbXuYQyvMHNzEmsC83Z2RAxp6bMSwYduh",
  "key8": "5AtNPjEuw2Ljo7wJFRV3T4C1ZTHSbbfzFDYpNsTiADXoauL2ASErhmtXyJ5DysvGGN2RaNd7xn57fU7JrxpaGBaE",
  "key9": "29g2ns43NdwuvmuwEr7ebU1G2wvVD247KKiAxNX5w8pWHKVepVobkZvgLDLHHWnT5APMYhENmw7C1FrESn2J1ai7",
  "key10": "5bosD7iexd6nwtczAzzxU98fijc9Wk6pGC57gvGAkiCm6JrTTYtdM8jANKEY6RoBjwtqbx7tfjF6SWzKBcY7d8DK",
  "key11": "2g2x8HeXZV11rtdVs8eRJCA2iqCQBK2UDYFxN8PcPhoAykJcKbGJrtRMw9NHn8k1NJniRcifxXpvJ1iDiNYKLF3W",
  "key12": "36HvDWmYusDCQG94kbXvRjKM2pKsz9f4hncYekrfCf6KgNtF4UXiKtf61B8rE3yogoyJBmQ7P2BMa3QsmTCgB3by",
  "key13": "5m6pVKQ9Qvhm7BfvLqGWSbJLYe6j8n8XYK9fCJFwJ3EBsyZJ5vWBezV9mZLy262USu8RjXKUYKW5W2bJnhtN2VNx",
  "key14": "3Bavgpz5FgTM4TFZkJcCKJFWVVz6hzDKp3SJ77VoTk82Mjz2ymq4tghz5ZnsqwqqmMqTf3DWkgVegcjjShEoM6TU",
  "key15": "3bBr73vtgDxGMppq28eWnmxMMjHRuqYv2xemuDaHj7FLUS7QwqpCk5rB6AvD1TtAgerQpuQbZHPFeh56w7aS4yXH",
  "key16": "3UJArhRE2PmZ3GbD7cgeydXELN9PR9cPqrT89bivNuAA1gCt9yR8DDndEo8XS2yRpCbz6Qqz7aiZxJyZwVKcpAFZ",
  "key17": "29GeWN2sUMS1s7HQ8Uyuy9TgihUc9imdGBhxdEpbWUbnJD5zYnDPVbVwJZK3sAExZZagu25xBrPHhangcX3KkUQJ",
  "key18": "4CjrKhTL5RHq9BqPUxLGvGsKsNoZU9Zzi8imt9RkjiMBiV4t3kgATqNwYSHL87jrZcYvcn3x2GSoEuaK8LaNQMyX",
  "key19": "5MwzLYanwYPWTkUDEdgVWYbcdLirjBKExDf3SJaLb1UFRnMALm1M1kf59XZdXrYAi4C4EZ9Bfzr3yjvuHa2zoDCm",
  "key20": "21VWYbEw6K2tAyruQYm6wn1DZThLSVyGo1uKwu45oTu5JUdSSoX4kwcxZySPvcMXGoCiq4eBQSWSXcniCFCCyTbB",
  "key21": "21x5pmZkGbmLkoUUk6hQaZiar7QbHTaWQ2x5uuk9g5Vfej5c3oZBGBTiVqdm1Cax7zzWQ5Kj4YppDf5ThvGhhzZy",
  "key22": "4wG5ytqniNWCLDunrgBphyM79Dcod4cCMUqTkZRDV4JfDYryPQcryKdvoeiqaFxuMqQmwzwjNChr8jVau7UjbpWF",
  "key23": "3tCoJ1ic6kZw1yTjg9NPRwpUjiTnuYydkYSCpSEsc3it13Vnzk7cJcQES8JZhW1TsYazzofsnDBWmnEbxf5Jb2to",
  "key24": "3DtaeTFKNhoVUeq48ES8YBWCxpnbEp1paxse8xZBsG9MqDoxokabLLZGD8YveaT4cLqsEu67neY5ZFEPSzZtwpRu",
  "key25": "2MKrA71PH5Lp53Bg9BLSubjbcTV4d2AcNYCXY8cT5V8BGtZR4pfhSgXnH1ttVhahpvw4nZ7u46etWY2YWLNEEWpk",
  "key26": "18bVLPmasigFFmJK8yNdkb7XJm7wm6h2yWkJXdRRoPhVzmRq9t17UK1FSZvG7btyiSxLQrYAwwhXAsGaqAKkE3X",
  "key27": "4yFdPg6pH2PgXstY6XYRWeQGbNzWYFJmCv6rqT3zspVrS2zvcG28MhkE6UCGss5Tk8CZ8JXfaw43RUu71BF14KtA",
  "key28": "4FKj1na3AHFSUrp2gyaS3CpZfj5MZerWpEFkVrnrw1VTXUePx3G12kaykEjS78FKWHLn3ofV4YWGVA7q4VRxWaXV",
  "key29": "46U7Kyk3u5TQDdHZGNBHJJSCJXjEvicfdte2sHhSjiJEKm8vQ3SpF14DdpP2Q6pFG5LHB85ngKCZji9qa7bbWhou",
  "key30": "4WSuVvWFzzoJV3HkBzZeQFAk1Gg1iqkZoLanH5SxSsmDkzcMfRjswi4LEtYbA2qzMqviVCqbPmWXdpQdGno6xJPu",
  "key31": "4bzVu2QQUE4SdGNGBjViSfzTDw1YWYk9EWBcaMffW7znbdrJeGPytcf5vwo7Q6sYJTVJHDAwGHzUzKiCntXZGabX",
  "key32": "3QkvZHBw5fYkKeaEp1jcQQX484p45Th8r812ezEyAaeiz8enthF2LVdRTy38u1XKF8twPDryK7sVqu2REFSfi5yt",
  "key33": "5iPfouvaFm53tmC3VjKvBnnVNfMDTpgJ9BwhQre7p63thnqkZGsUK67J188udh2V2h7KvJ736tB6qLwN4FMU3ps7",
  "key34": "4frqzsm4EKWRUSBc2togqmE19D5Mw3ehgwYePCGPLxKtewHYfEepfkBtLwZFbGtxhfWxZvia658hZvcYLEWwrhSX",
  "key35": "3rgytTBjLheqt3SwGQFPmbqbBuCqveZBnaypp5hDRwz2nt2AKH5J7oWif81BYnzz6CLWXxKwH42jBVv8YW4gDS4W",
  "key36": "tvdL1K5mEotrGg3nWDLijBmCQDU2gTjZYRXD7nvYMJbBX74vLGUEu48wPSwszRQFBtvig4JtDW2fBbPPM7GHEAB",
  "key37": "31JjsCESD5M3vDGTg54iYjkqiyhnWJaBTwv1BivJcoJfqAUQr1w6Dhaeus4bb6Jb7eY5xkzhPUuTgfSTwRgmh87x",
  "key38": "32s6ViudRT6b8zn8qX8HFCMzidoChx6tx9xBDhPjQjpeB4W36bW1Yb2nSDzyZ3NTQYLUgzgmBnpHwwvv9cVgjTMS",
  "key39": "5CKGfocKCRRGVhAtpEPvgpxWaE1iqUTD9EamhQfojKqvAvUSMoowtNA68zXLVKPZNdXbrPpnxbkGvEZAaz4ADpuC",
  "key40": "3aP7WKNftzz9E5tns8AK6HZ87xZZwDPJDRhmHFUurrzEmutAHzDaWMPVuan2iy5RYpYRVtminHn8rdrbazo7w6Eb",
  "key41": "zYHZ41MquAVxiwFjmjJ9FLtk4Gfop856krroeYD4QDgycy1VMPJj6Bk2QaBfZFCHhTdi7fxzrQTMMAknxm7NgdJ",
  "key42": "2EYxtLygU2ekSd8LbSXvLPqsZHFgMJ6cm4FzzCew8Psqed5pzHrMCpVUy63CJdnTnCHRE89t85v3BkCRrPehBHZ7"
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
