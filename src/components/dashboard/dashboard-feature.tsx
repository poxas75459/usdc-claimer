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
    "23okkE737mWWqmbNt3hMapS5Cwpn5ckFEUku7iMhZq23HsDxsp8B5GEntwgiz1Gg3Ab4W3FAoSxCXgD4dZBJR1w2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dJyeh1vcNNUhdR7dcD8TG53sQgPwkh2haudkBrZdKPYZ2Rcnm3qUgznE4JFas7vuR7SzW6z7yrRzcKk9GX2jMhR",
  "key1": "4gMeov4RLf6ikZQKxtK1v9nNWQLqnZJwAwoLWVVmr79ZhzDicJjNSNBXo6DCy9qFGrDbdo8fvh5yUN8Fo1Wn31Ly",
  "key2": "aY5kZ42RRh7u2n11VkzjWs86SdLYyWGZCn3r5fiKvALaHUQUFRvQHntS8w8pCBGTobPKMAjZ4W321TCJZgmqHqH",
  "key3": "4JVQNmMPDoUrQqtrp1BDwX69hYjpHxAW7QQGJfphyzoHqHTQEcBnL83kWQbikhaR1uH3ewx7D3msZJQkZQeyCob2",
  "key4": "43QHVjSx5xar3LdV74vjJ5qWxzAVBPM9XxVjXsif342MXmKJMaeuVz9t5g62X2u5Eun8LApPXyR665D3GkrWQpqv",
  "key5": "e7Fs88krwBEk8duSHNpirANESJ3ze16WKWFWvTqEDjK96iLu87Q2FBRKZBvM4ojVwGda3Ki5bqrCcUTme9q55g7",
  "key6": "3QX6nR6iVgK3wjF9dnrRDgDWwrPhtAhk9pFNSLfiYEQmzouMQT5e14vR5yZC7HNmVv7fUBvXRzWRrJeRpCYy5wEF",
  "key7": "5CJfZzrscfFrJN5oFRUkAhwGT4rdmnNCiHp56Z82wUfndEVqLGFuEBs6bCdmDPkFJmNpfhnqWkk1dpbzG6QfWP7R",
  "key8": "5oXGgntLrGoeA6DcuVzeTEge93FRGiucjH1b2pzEMQ5Z3ZnacoQoNhfNFkkTS45wUq6SH4j4tZSnqcXBxNpGv3zb",
  "key9": "3mfZuLtCWDoysmWivHSLAppCvsbL5CYMonRorffZmzdevLwBabqtxo4bJwNpJjR5deAMP7zQa4p38Rb1jusHCaMu",
  "key10": "GQFz3vccqxAUuxsyt3BeGuVMDfpk6EXoSNFuVhD1nSq8FG2iZRbr99Hr1aZjqfkHFPyenhYuLatJMiS7HxzmBAQ",
  "key11": "4szrLYL8dZLM4iPa8kSksc2uugXfNVMEbAPbKfCDtH82jRWfqWEHpwNxz7ymQ9zMkBqLSPuhMHJry5HodxzhxuPd",
  "key12": "pxmjcjqMpkFXkUDyb5qd8vxYQDU2FoMa8NGkvDTngd5uSoVkYayTWeDkJvVu5XnXYaVgiD39rJ5sGaMhcAZW7V1",
  "key13": "5ugX9ppJ2UaRWMVQvD1hmVfvuxFbWFw6MEwm6o7AWuySzmc5Pce859PPtARwahvfSFgtQwtyGQJMaqCpXDiSBdrm",
  "key14": "44kBhGL7veZZ3ZfPgjwmk8GX5EQdGakUeW7JZ1smS1u4GcS3mv29AnZ7wb3sEgA9wnoEcUALMXgETihPbXpMWBBY",
  "key15": "4ZPBWZrQ6QfqffUYXMbdMbFnJh2wSF3sEP626NiRLgvztHBnB6YurjArUWP5My4TiUBDq1bXMwJ8S3sdaHZYTBDr",
  "key16": "qVvzttBx6gGh3jE6CaXkww5T5fAz56y4McJPZCMAujmLNQfr1v22Kh2BayVCS9HncV5vZgWpaEUuPysM7pWL95Y",
  "key17": "3Q2h2cBvMc6e16sjcgoPkLabcgprGVWfSTGriepDv17Pkn2W3TEiktooCMMCt1ue97yZe8hDyK1KHfCVpb7YtCh8",
  "key18": "4K3ukP6TGictgKMGrcvATiSxugh9f3pYvAxNCuZRwqGBhe5DmtwVSwBmWVSiAz5FSzibWsJAkJLjqLUQsTFECd3S",
  "key19": "dcBwQzpd3p135WpAm19pFPumZ3CPGecLieYecrdaBNwZvrLUD3L5V3GcpQ2eb6BXdqMxa8HHeM5LVcEAAojP9ZS",
  "key20": "2JjRJhkUaTZ4QyrtRERNYBnj8mpi7XtzBEiKrLdgSNKkEU7LLiNoiL18RUAwrkZYVPsZwx5WyEpxJkyrdqSfEF2y",
  "key21": "5tjzWjZakkA5cmVZixyoGLoCJhqn7jfBPj41ksgDS8zh5bb7FRwABD8QkcTc4tywfANp1FRFZ94Gdguhw9UVEgFU",
  "key22": "5QJNvSAWDHrLFNNjiyPNAawGL38HBVbz5BHTiZmun1xemJCrw9FBpvphqpBz5dJixDA8KSiMeLt2UdUEjP5CvkrH",
  "key23": "pmwjCKcuSWqGHgs44n1ZzD7uttweqqaYT7bNJx2k5ep2x2hHskBTV1Vz2yVkatWYPQs2V1PQbCibxH5CVtQXmMc",
  "key24": "5rxUWPTytHom97YQr8Po9EM6Uyh3sqMjjHmxSuK7nS8o1qegu7SNDHTXBoXLe1MpCE88Ahf4V9UMdpEQdv4geG3m",
  "key25": "5mG9yaA2ibiBqDHcLTL2aV8vEsFaRwEFAdPFMHTpQU7SpkbnyPebKgmpJeCBBokBGs15x4Lok5ToU8LkR53FeCF8",
  "key26": "28HfxBJTsUucxSfezt2Y4ZNyUPtYkVcbDmkt4fK3MFbMGAmyXjH6VV2be1GC7rBnnfKv1ydhiS1a4KFodj5Q9WjC",
  "key27": "36dJnxixpYZVeoZD7esRG1GqzFSdivjGSBEfP3BwxhHmdNtdJRLD74MR5QTVuUgsQfjfC5VgtV5R1dXFHUcmt3Kd",
  "key28": "5hZfVfBNYEegZXVd4EtyWCFYBDCMv1GgnYudSc4mWffPUgc23HuQNDA5sYvqvpXcCnodPtfEsJh5FNmQfyhQAUTG"
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
