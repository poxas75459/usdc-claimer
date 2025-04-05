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
    "45SZ3HKgHFk1QyjzJVvxNvAHcJvXaqz7yRNuRFjgt9ZKPmcDK38zfq5VPEfhh2oyB7mkHUfDJXtyttoLVD7tSibt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22euQFYooYsyDbzfW798yVbZCgfZnfzkeeQeHKCDMDvNQsURu12cvzXkGqknF84Wy23AwseiKrsr45vdAv4TbbYo",
  "key1": "4WnMvn9E23VAgdb4DCiAwvCxUoMshbq1XU3kLhW2k2SPriU7AoApDhH6X88YQL1bBG9yJ9mNEtRXFf3BDGWbhH3i",
  "key2": "4LMGdaQSrgE82niQZZM7Sc6nTCC1SzpSUxuo2b9HGsBAYbRcTT7iqBW8bLPj9jRPukQge88jZFZpgmRtouXQDYfh",
  "key3": "LuV8NJFpL3qo1NvxMaHD5dYwk6NpYVCXnDYEbnLSjGNdixgnwC38r8qmgMw9kAHv3pyvWmEFgAYczyxBFxrqdok",
  "key4": "DK7EnL9pATZjSDSUTHSduhcX8qwZ8eKEq7EQaYDgVJyRhRW4LjvM1hpNE9bmfUNnyM5QEiaW5pQdxyHeKY3AGMQ",
  "key5": "4zfVCJjr3bT3riZmo1QXLUerRE5AEY84fuCV8hWLy5N2EiGFqE2LN2NqSnALy1K4dnWdbWNHcnkAkTEkAN6rLgu9",
  "key6": "3vbdp8B9m9rsn7jsFwy66jmHD2tHvNCzuaMmaa2YM3zyruTEtEAMQipwWfJyJuCrabpaJsrVreWqKUzzdk69HS1K",
  "key7": "mLvVnrp8C1k3LUpGZhKarDkNeVmGekgwGx3FtfcKRUWTVy7eD8yhptE9LLau5ywi6KbuTrj5BomVj7dMwJCkC1L",
  "key8": "2h1TxevnkybqLeqXc237gRAC3sBS21FM8dh7DJXxzhXTg7qt5zs77LCKvpQFXvAs2A8JAiq8ana6UcSygpbzGbNK",
  "key9": "48vsrhF9W4etVLTpUrxYm9XXgDtmnUiswjww41qCfy3EKzG8fqjvh2FJ6jF9WmuRCXjnf595d399A51DcCZxADgB",
  "key10": "5qMiXbdRCoYZ6z8bphgu1tu7zyMebNWtkYVtNPifePkRR7myzfcw6hnZeBPGRZ2mMaJt4XPoCVNAKxDmNtgCNk6g",
  "key11": "fsEy3FG5e4o1scAQVah7NjLWc499vfZLEBKMsMR7L33NePsxrtB5uoMUWk982w37pRAhCk9x2Xut8JiL6a6yxHc",
  "key12": "3VpoMKtBb7dsmAGhhBQNF5abN6thAcKGHY3Getm7qqBwo2UjGVXD7oARLiawb4hvrgQBUuJnfDN7rRE8RqQYfTyw",
  "key13": "45Jm6yYkccHovNFfnbyLAzTcTBqK4rXN6oh4pEHn62UaLBMoB7DTA6n68wDKPQ6TuLopQWigCBwdYve4YaWp2AYk",
  "key14": "2zPshmGwEvC3D34SpyoMeG2GQcWvqMdd4rWLWUHVATE2enfZktGvSCXkDX6N8n2ovJXbhZphC13a3BCQ4btvHK3K",
  "key15": "2N13awhHAZijF46EtcAZ1QE4ZssZMg3yyDfRQF4w14tLsAat2pCvWPTwHeUpHcoWuCBsyt8HCWgp9qZFR5V6tM24",
  "key16": "2yNuPwqP8S35sN82S916BCmdgM1YxFGz3jyBKbsT9zYaNKbB1KzSikrukoV2AHcMLWYTMNf4yc2UDrBKYGrPHeAw",
  "key17": "2cuNL3LZHMBkrddDoZ4PnNRUQs5NXwwDKKAaxzE7ieAtFK5q7JCMocJSTGmZeDzEQFTL4e9mnrTUgQ19WbjdEGN8",
  "key18": "7JLh9CdBEDKweW8uo2iwjiEndQqgrCv9kfcBkx74oF9AZKwg6DBxkwyUGBHGMHDE1QyEA1GASBtU9FgEg7ggUam",
  "key19": "4N4TgkqU4TMEQ6LGsyVY8N94ZvZBrH8eJNfr17x9uQ24Mcd2UNawv9FBG28ofiUmpkFG5ahPFC8XMp87HxRi4dB",
  "key20": "27SxQLPCBXKXrbFugcoqDhtWLj3PyDn7iwXSxh39NJDARCu88Gc3wr2QSPuAUZgrPn1n2gkC3PN6zQfyoFMxPm6E",
  "key21": "2D54tRgZkwXrBkeYfu8n3tZEmMfDBFzAxsJby9qvnA5kcbgMVQMR5jwQFgSRRwfS7rxYhCVJdVfYP2RPMFVVyHW5",
  "key22": "5TP8STvKUW5KGNmQMfibZMtUR9n6TLShPEJdkYFzfsny2G4c7h1pJRNUNpgdj7H1RjmLdSuZvHzyVcuxWmiJTQ5p",
  "key23": "4ncPgdwgBq8LbkMQuvAXURpvynAXHUzhwyk3v3AnBubWzmHKkTp4wqX4gFFzWJGCgwdBrZiuVvsF2wdyvviUYUHf",
  "key24": "4q69XeKKV2YsudwhNSedCC3gqUoDzk1yqqgHhZ3U2ProdJpBdC9322PxHPP6RcskSwYRjEv3KkfHPaCqPew9yfZt"
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
