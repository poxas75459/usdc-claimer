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
    "2m4YGMiXoLzxam6PXVwXWqiQHj6hwPincwmurbq5fBAzjtkwbyRDRHT1viAAfvU3y4TXchgviLsNJtxQCrsVB5mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mEs8ERcLrwT3tsd2QhPAuzEkiL61nrHjmRRrhgw3XQfLmaN8EFYzWYi1g4CiCxc2Q78cBvCqXjakyCkJ19HxreA",
  "key1": "2hpJSoAywKLumxPpQX82J8KvnMGNyckDNZkQB11V9ehehKyS3pE6CjDc2NyavbpkxF7VTNNFGJn4S4UjCTUz9YoG",
  "key2": "5JV4gyGg9BKnzcsZ3YR8NuvLi9cRgysJS5hU9sWqQtiN9nioDEfrWQndt4z31pCaEv1NzEksoJuqfz2BonG3Ek4d",
  "key3": "3BR63R17B3i3shjXTLG9pKtTZ5PRnfLAHtLZDMUAetZ8FFGot6kzmhGgAuiaiLENzMqEu1Ho5DBan56eBDH8CUko",
  "key4": "4saTUZ4XtkJXk7nVCggsaQ2YWw6zE1QGsDzhXoTFxL4LGeU47WER2SDuRiKw2nvNWFVxdnAKz9fMXywmzNAHcPiZ",
  "key5": "463BZG33YWgfqv7eBc5LMpyUHKxCqtCj6bJsrTZ5fuWWC6oxi8LwZa2bCwMiXh2SQzh2Xn46M3ePzmH9PmPBQct3",
  "key6": "44JEb9tcjw7dVR15casfUHSeXFPyFTSebk2aRbGDTFLazmtuhiJrKsxQGaZdQ1qPRNPFqgjqRQU3BmqrmhsjVvtB",
  "key7": "kEaociAQnS5DFuPbfd49LdJ2Ezj5P6iViw1aXeigeBPPbaLbMq4GjA2FmKnsi9PXxS17QZ7exQELsYt27NiQXj2",
  "key8": "JbSJs5uTcKANC9QREnh7VyaSZMkyuftAMFmRtynpzwehzeVyJ1BHAPHsJk8uG4vYBQdjAh8296Yg9UFo7MhGn3t",
  "key9": "4iKaaNPULaTvkSMGt9g5ruvrYyWhf6CsMwJV2JFLPdog7R9Y2rZXdq96PSo3osaRKMKZh1hUCYEFsNXadWWXVNNb",
  "key10": "5mn71RmxPF1MJiYjvyD3XoUnGh4B9wN5XEJ9HW79Co4JcatyP3sR83iyj3GYotrDUazRHNaLxWrtz8p6vVMtqD1n",
  "key11": "4RGJnhYH8r7MX2QCqZydamSgfzrX85Cgf8eEvtaogxkNyBrtEysmfJeFGwHvMHpn1y7ovcixNWy4RksfVqMZdUoH",
  "key12": "3SwtocZDbJ4VZ2CYsLDeYHcsmvMRCcx3hZEQQ5E5vtZsk39HQyr4JR7dLEfMhVK14N7vqsmU5c5JBGkjsHk2bMLj",
  "key13": "kXbyKkqaTHWBtvDYPUwXwzA1qBYN4yhJjEQrZfcGUP5aABWcW7erQHPEa2pK2UB3czNzT5iYcWviN8q8Rsrsxhy",
  "key14": "TGvMeKo2v5kYbPAJcPvCquL6vhTwgJpXThWWjKGWoDXBYoZoVXsoFXK7PukB8QLA5P8x7Loi1mPZryVuFah2txd",
  "key15": "44MmFTS3x1VD8AaMaMxGLduKo9sy1HXURSYKHtuCgqZPckpBm4ok2zvNM4zARPKE3GdQ6s36NbixzWDR7uLMCXgq",
  "key16": "3NZdTkTR5s5MVC1cnnuJqDkosAdt1JyAZoLkZK4zxDPikjfd2Y92PS6zre24Mg6PQw2kvrWdSfZT9XujcD1F4dPF",
  "key17": "KZ9wApWZtoHQWeWykqr5Txues1tCdQnBGcjkyBMZpPN3W64VaqDZhcKSs2dhFzx4GRwcNhQXrCxLTHehV53BWAF",
  "key18": "5CQGhBKjrcVfah6115w1diytX2VpFTFxwD9p3T1AoJTyyrjAjvrrQsdL7H3DLgvg8rA4U7HYGx7Ytd72AKD1VZCv",
  "key19": "3MDvHWnDJjH9hY92qrbUojJ8PDnyvSjCVeLHfoMkeEpyFj6R6kgFP2hNER8FMMH2Aq3BgSzweF8hzWpTKedZPzum",
  "key20": "5hsSdPmuxcu7aiikwtZktTEUpdMTHqTGaWGrUpNxPEhvPxAbtShUXJMYHXD6ACvB9626N86mUoJjAZoDQ7HEGnpa",
  "key21": "4Bob6wUPPLraDMLg7ALK4ScFzyGoWbcaB8XJByED7aBKB2oWom9CUxkobomUjF9bM31Mx88WK9zVnzxpQahHGA9i",
  "key22": "3Y2kXypwfjb1Kf3keCJpEm3HRpbm9aSVTyk3wyARLAUnRqkqy7psLypQXdQraTBhChAuKcUkcuMXBcepnPFjXNnU",
  "key23": "4pmeJyZRgwieCWMRHTrMtLSmYc2joXg3Gy2Cj753NgSPBSjNTBxzQG93GSzQt8ZCPBn1N4t2zx7GCRUo4zJskazV",
  "key24": "u3QUMX12xPwTfWwsun5AD56jFXEbWGCMHxj6WEJ6Voss8qs9uQqsiEdTmuucaisUvPww2ZfwJTHwRozUmyRCTTU",
  "key25": "jwpjyaH7biY814o3WTiFrUWEkmH6u9xfPqZq5mLXy7tM18gqGrHziFayMAmWLtM5CwxBst6HQ2ZsgiwaawAQvkr",
  "key26": "4P1y8fRM4mr6duPrz1BJa7jrtSusQLmq399MwwVpg7vMfxvvTsaSX6aCKZvjxSjqFcsx7mPCjM8zheGKUU6z3yk2",
  "key27": "5qmkf6SoUXQQ5wC6skiEZkzR1R2KEsnzEFcqfsfxGt3ToDgWmejAWvKgqiByvDTEua4ec91M5PYYQjtxihcuAKSz",
  "key28": "2rPe9CsFZ1Pcqo5DqeJZY6ajRwVF4gkBpTrras6gwhURDUWXVymzysXioeKR56g9DfpWuR9XKcYMnikd7sreKAKu",
  "key29": "4HEWoC1U1GZk6pFd9ip74X89ZybRtUzoa1TLD992RKL9MgwmFQCGpWSsD8iMyh7biAT4iKaoqPrpEcBvobnhnpkb",
  "key30": "4k6gLXJUR21J9Svt2AnMNYK9AxjmjrCt24p2WaH7sWwToWbW6Rf92CGpkA2X8k3EnWESqBxSZxkUPcUkgtdbSfMx",
  "key31": "5m3tKrWYdfdzEMBGHbxGCHNzK1KZwCzVzn5Ct6kgQcEeqPverGY5sPFPupa73RHF6ntbdbs8FH1r63pTqw23EanD",
  "key32": "51iKpTEd57vTXxaJ5TgzhZDrFbAGbeezN9MqrLv9g14UBtWW6o1HhJmnXhVFkF4AZh6zWuW4yjgTk66DnQrDDANP",
  "key33": "2okxLRVgBPPLExNH8DXA5gDSqYhFGKk5GEJfHT2wLcLw3xbUfyqQJXTFL3vwhzbMxTchB2KxyLFqspHrHJLgqVh3"
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
