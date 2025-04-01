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
    "3KF5eH395L4fvCHs7cDNt6v6rWej26QifqBNa5rcAizMKKzQzcNV8Zttx2u71oXXayP3PsFnG3hNwHjYcoSTueRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mRURCmbFbdEHPCVLjhzH368fbGSA84pHGCivTrG977hpxNwmvj41wahcHGNhTCuqVJnkNwCUuNbS1F7vYYter9F",
  "key1": "NU6zvGDfqsBr52jCgijnDk77yp2RyYNPYAuvNTpt8kHAgxdhP5V3Ay1hLi1jNAnX9kQ8NUEaZaURfaF3cEbEBhW",
  "key2": "4KZaydqYXR7FuR1H4UevDFMQocbgW2EtfrfTni95TdAJhC9MpcCpq3VuxHEVNctXStReVjpf9Hj9KW5tG6ZhmuEk",
  "key3": "3mGewm3dsB1LcKZLKhis5LqYAFbz67NKWM5wWbiq4d4TsyjAKV1bkQnKfE1JHXxNWp9f5HPRSV6hMVSSnkLiF15C",
  "key4": "h1CBGEdew3aqKsHWF3FMYUf6fiDjF4bJFPznzkifkXCJeM48jVhiyvDUBwj63HgBox9MberDEiu2KYakcjKTReY",
  "key5": "5kmeenH4Skk6gFUYcEoogb2fzQkUzDn8U5y6q1c7M1hcpKtGrzfTS81QDJmq8Jdxt2Q9e178WGdGBXvW1zHh3q1R",
  "key6": "2z13DKgS6AjMrrNiPUmXRA4JNBEY5KnQ4dJ8jVDN9kiHbr5hHvVTeWmZrPT82V7N9ufW3yGpsQp3bUDRvawS7yve",
  "key7": "acFZ4puJe4v66zQhuXymv6Pads7jjRPTTqnZK5M39R4EyXPBpZ4fxdkvHYKGheDWh2guQYbFKd8WZKH3YMPHdJv",
  "key8": "129VLh4zjGkQDUdKRnZUxH7CMrZtEs1TcTFezRsJnpBr24jSFzH8iQTZhEcoPXeekxriefiT8Y2mF3NatxtHdSka",
  "key9": "2fRceeuqtwqT8BGDSwMK3dLyW6h4SweGy6Uu72GuRHqmUx6h3zAE2BeGdPiSTsQvHrSDSQmW395x6frAqhnGP3Md",
  "key10": "2LFE4ykoeoz1jhnofkkrBNixi1ArXBd5ceHB9AFrzNitwCznEB9NKcCwNWGdFxgRXjW9hLHvQneqoymE44Vb6UG2",
  "key11": "3cBPwyiCwVt9tE4cp8FfPb3Vo1E87rERLqcXfTrWUJnhGZDbSXYaUhFqeijqtexkxoGT2ELNBVEZCf5CBMXssnjB",
  "key12": "4KkSQJq4uXjqRdR96B11a41ScNwDgdmBZjH48grWcy5jhv6mhDMtsa4Svirf8vvwV46RRmEoYLewF9QUZsE6FA8X",
  "key13": "4kYi9HdHyCRQp212CtRfavKNwLHgB7Kid64Hp7brMpeSWMazFuGREQE8isEM4zu6Hijy2nSscFiMKPqoWo62xu3d",
  "key14": "2oE4ZW8exVeYFdAAgyrxbWMcpteH8Ebfk6JygiswTCReT2DRSd5Naw199HzxYgZSgfP8SyY7cdvwMQpZftZeB8Yk",
  "key15": "3rEZcDegARjb5NucUF84D23u9h87rEi9hco6UQPR8PG7YD9bm3ibDuatGMc8PK1THo4H7Kphwse4yCiBUjdsVjZf",
  "key16": "akhBW21BEDfZJ4sZh1gdwJmxkFYGQae91HUAmUKcaKow29hC4aiRmPLhQX2v5ECZFJp97AtRJZq44vvyDYKWfQo",
  "key17": "5rbsFjp3RrjZrx9g3vFHMTx2so3B41wTGZhCmGodNTVp2q1uqQfbQqYFzHfzqou4HQFturuy7dNtJNiRYhHtUPzw",
  "key18": "A6vckdHLL5n2nTTYRLgzhRnQftzCZqZmWQWeD14QbR8dJSXLhHWdTF5vtwt8emiFZqWTUyQb4aHwJ63JxuG9NAi",
  "key19": "3oo7asNJ9ytakgP9BcWg2orafxRzxccvbK4B7j6pFsNT4eKeL7y733xcGzynPRB2UYZnNDeFXFQMJxh6dTBz9duY",
  "key20": "mm5Knb1SCr7V2vqUYGR2LT6LMpqSY1n86nVjXo42kQNyMeFtrFuguSQWCrd45KaPxnqAqgifHqjJsKH2NmkTMco",
  "key21": "4dsubTvzTLx7WWnUeiyJAbB6NtyNcNT9tyUE9w8ddtLSi1gUb5d7JmpGdcQ7CvTm8i7bKqgGRs7G1XfHPUqWCRmu",
  "key22": "2ozn4p5D5Zo5n3UQbRQ1gMgJiwUn4E1i7oapK4iftSXNiCv3f6vb7FBHEBuskp4JKKegHcDbzvzyj6DSErCfaD6Z",
  "key23": "3K9qyQfJA8P2kgXu8NdnaeTNwx6Dq2Sqd9335ERewec3J7bYmPuhcLxDEfBdQ6HGV2aUVoxUgCxMDNDLz1TomUfg",
  "key24": "58wduGJ1Xb4yXHxJtjmNHUEXfkDB4XAoZrr4Z167Xv7sbQgyaUoNXNMG1Fg2heAiBmV5AwRhEzdBwXeoVyUJKhkx",
  "key25": "5LzPa3mbXHkqgSkoSVivEVXPm9bY23ZhnvDbFjSB2z6crx514wRYWWC2CVzeYwyZMhtE6NxwpDEMT65wAF9qtUTJ"
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
