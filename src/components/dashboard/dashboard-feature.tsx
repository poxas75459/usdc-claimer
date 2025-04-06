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
    "39MfjbUi3n91qMZ6Rb7efTFgPSwL6MjxDRyth1tMREfBre2LQJURariv225hcsxFRE8Bx65Hzea9N4FV4Kk5JTRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "514cmjz6xwE1nqxgB8waEEzSkhjXxXuga7jFkxPALmhVzt7M8izJBAikVouNmpP3r8p5sTkSnwKUpE2EZkFUyiTz",
  "key1": "4pHbFVjLa8yj3D4JfBSDku1qfyZVejXqDaLtQBSeD23CRj7WybuHeV789D3241LJfTvfkmZQXgApe1Er2t1HNcn3",
  "key2": "KV6qLqWbhYnywCNduguiLYLrndvaVJBgPsSBi1BQ7vHcZXG38hi1vSrAHKnW4gpVEDjJVAbWBYnZMaN1yLJZduF",
  "key3": "5v8tVTau57EoA6nmQSUx7TAdaFghqbqBTqjMi5LKjiYbZK24LCnHLtJB3EUmq2wSVmkFU9htjTJ7oBtvsuPwZnz",
  "key4": "2LftNrpuJuWcwkZVbQCzJuWFzPTh3FRzgLLSKGuY7sviMMzTs2T5Mde2DZ297tHqp72vcGn1aN9qiW3E6c7HXVtt",
  "key5": "5pepC8stdGgKHyXhYyNMBsg4ZsWef3aqyqFuEXaDKduZtRsWcmhJu3AuxBJUsvZJiDmNWbYjKsH8NWmzrCGbW7qc",
  "key6": "3J1JHmwYuYr5vG7RJVMd8Zw4DTQq7vS7Ln2Qi5Fta7eBt9xh7c8mTNLYasvDTe14SeZFNc848sa3rR4kxXXD9oLg",
  "key7": "yocMgrLC2q3B3CoXY9iPFijc5ftJjdiHYsJVKxn1XAuJiCczrrZ8Xf2nbiVVAgn1h9ASooRBiUxoAoV5QvM7ugJ",
  "key8": "4tc1zgjnVhVMavM9YvcMaSsyjjcpNLrjSNnqDeeeVdnf3wVYUc3bwr27JHTUCN4eXMczSBQvAFVSeU2jXonLt61z",
  "key9": "4ZzyKn7PMYkFyREP8ANwqm1Moie5wADEmRNjAFYREfj6b29s1oQHcRjQQ3GrZE32WJHVsf66JtEHb1ATwg4Lp45s",
  "key10": "4Q2fzMbXGVLYXYsiHauotMgwU66kWR4FPoqmUQWYEo4NHbUbVWxNb5QxEVUkhEd3sY8azgF36ztr2pYv9ptWxquj",
  "key11": "33G5z5d7GLnY45KkHzMvaeDc2tavav3aSJJfNvTgcbZaiDqzyjLyzmKGwaoPXwxapy168r9pjigzn948i8AAT7T4",
  "key12": "3ydCpLvKGuDRpNxEFX4w1Tu6zWkxLnL33u3Pmq6NuZEf6JgHVh5cy2RYCSA9c7Bobu4f5EtU3XrqKN7p9WVefQ5t",
  "key13": "4rDnzf7BUKC9ZhhhQR4aPujNfhZ9FGMzA135a27fzoFg6Q8EvbAJ2TVqW4UGnq8Z98LhBSnhbEDjvixM3a3HaB51",
  "key14": "3pws2MSiqca5DHns8EXCP4Ka7znrxsd6qNNyD2c7bEFusMfuFtZaUnWy8ZWW9utBE8ugHDnfGcNMztnLjAxTUM85",
  "key15": "4SuxPJBEWTVX3CFpYKQrGbNJFRChk1pz2xvZx6Z2wQLrqJ7U2StdHGi97NyUL2tiLwqvENeng6K3LzHcjU9AJtrK",
  "key16": "4L3G5CERjzCYB6bGLjAixupzVXbDW7bjt11wvWMJymH65LbaAeAMtvoN1DZZ6N7XQNQhPRGcwQQ14WXuPXxDAiSH",
  "key17": "5hY1VmbirEMMTXdetVeG3tvCWDxicGuWYkvtUMLgx3BjuZqrcB1KcUjrNjzxyEbeV7J61uSGYkK6zvTybL9VuFCP",
  "key18": "5igkqiyGgc8LEd1uv5Q8J47BCn31mkDMP7vPKdSTt5vseiSxWmHtTZpFrMaZvNC1pasiW8ndSkk583L8LG5Quv1S",
  "key19": "5Ha7jVzNX54jrbprpS7bT8wg8Tppc94rF2bwR8PHJUnYSuAr6zudpiTesYVJgekNP7QErQPzvGxpyVvXRdUJaxT8",
  "key20": "2ouo2STJQfQmjAVr4mHboFUwE3tW6234AYBfmGMxayeAATrhuucNifXcn2zhfTqhijTTwdWsnfqQVKYv7bphheDc",
  "key21": "3K4RjuFmdATFGajWQyfLWuVgtAvhrsqsxFvdmdX5yphf6zRwEodfLbuLTpKAU3B8tTKVQDdw1KtsnU7BUdyYu82s",
  "key22": "xPx9EZ4c2W7kAQTsL4Vt9k1RyF3CKxUgMbz8d2Nex18f7YJbTFtdpHpXJ1vsX7xzoraq9xD5EHPssSwgC8qATtD",
  "key23": "67h8gz1pwZhNMvKy9eSpzaULsCQuzBC8dFCpk9EvBaAyP7iptRpJebjoSU2mCgVnL3LwjHUBd377CkGJQGYzgYjL",
  "key24": "2rVtAVQz9byQijxezA98wSCsvou2W3vVV3LRnbbc8isBvVe6UjvK2LxA7NFS47pJpnq2sn9wqpiSrbGMjCFBANX8",
  "key25": "ELYn3yd6HLAesLviUEiwW5VWwasz1Bxd3ADh2iv4UpCgPWSvMm83oLcaAZRT5eEwin8BdZSNvSNvatPL3zmYaCb",
  "key26": "4USPnuU8jmWLse6mbxBqunnpMigfDqJcELEQGFHZbAu7DJXHotcxPqebMSDgPrWbb5rZm6t4g841P8ATsD4uc4Lg",
  "key27": "61jSwdyzCaAkL7qeKmUY2tth4rzCoRzSUxH4UZDaw71E4y9CKXBq1R6EaEwLM7iY2MBKum496GrmomffAoCC26Lj",
  "key28": "5vnZbTsiTUa8QNnNEcTNYoNC7j4mvvzKciXGN1go4S9NNfRk4nqqDjQ1YzCxLG5EB27YHv7KjsSmvFXPFJWivJKh",
  "key29": "5qBe41Mb8tH858rzD2DGb5EeY3e6nRRoqiUaxBtmtpRNh8U3bAVbWGS1L3mniVgWVQoBEveGXNE6M2Ko9Mz6jhJo",
  "key30": "Eyg5xvTr5ndMQSnyNAMwiY11KbZG77um7ZPkT7yeUSjDZsMXAc1S7nkSKoSjWEaKCDLhQdbX79vu8mQ6pBJYvBJ",
  "key31": "5KR9XUxkp6wRYVpcERF1S6qyCF3SE8XfbfGLVDiqntwbK986gbRKuwN8n2unNWuni31Fc2n3u94Ed7dgGXD6aeEh",
  "key32": "45Cbfzxm7w1w4oA2Cufp9vmLieFTNsr9Dzht7Gsds1gs1xv3vjbRvMdtFY3f5JhXrmKGD4c44vmJogkpC2K4PJua",
  "key33": "kGMCRVMGV7zMQsjawf7XdAaqaNQY7wyFsaEsYdcKdAJvLQZfirhWHLAg4TPPGYGkh8og2Yg5jPYHJnYYeKSKWSD",
  "key34": "3TfREnnvSPFVxcec8t2YcJr9mFkrJpqdTTVCogrNZ9nZkmRWwgsrmP7nUNCEMonaMKdjaqNb8RywTBWANFYEeLqT",
  "key35": "2FumVS3XHJvp3aahpBgGiSbQ6XtrMFY29b7VqPBhndcfE1bhx7ver2HjZJCVUmANVbLmvrgk8pmdqMtNGCcsGj6V"
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
