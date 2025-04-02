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
    "5PQeQcs6T4aTmTdW63M8cgiVhD7wj6A2vdd2gD31yB3MvFqUBbtouYf7E2Z94G8XTbQxjUa5g7dPkZ7Ny5xFqbg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ReV4Vt7G9ukWXGQsm1UTdHrArS62zQBdgn6W4ER5oTDy4zFKDL7CtvfE9JE5GDCL7s9wiJBgHjLzQW5nzNbPcVZ",
  "key1": "2dkfxxdGYZJmXYAMCH6org5xzgUjkuvoAWVpbvApoAgnhFnQuWH7HaKRfCevWthjw2fe1sFGjW8BkRRG4qJDUmJV",
  "key2": "Kmjb7NEBap4StbpVCvM9bLZBBofetvKhqJSP9BCVxZTDFhyK5H9b79269ebMpfanbSeitFb5LKNNVnMEucHFRus",
  "key3": "4Ajj5XgRenz8kB6wb3FN9vgcbBoYZd1Gzx3h4CrCkURYJm6SPYXgTUnKUHhCP4Tuo7T6dDkN6FgdLCxFj4iuZu2s",
  "key4": "2ZXKN6QKLJVrRLGyUE4uT2koKV1c31BfW5BZC6nmwNAUE1rymrG4opL47A1rEZTNWLFNm6m4eXkuNJwBHmzzTANm",
  "key5": "2eoBnTkCrSKaopDgFJzJnAGttdWFbFK6eJhRNUwWyjCpCqPRGbx18kcf4EMLZKCBDUK2VsVXZ8wytDfjVVaDErkb",
  "key6": "UdPryjJKd8s78vLhYJvQ8Q5v7zvKqDmuVt13vWc46cVutXFAmBZN1bwpQJ892oW6WpiA8WFa7njiZCza7eJhLLL",
  "key7": "3bKeHsYuK5JbTSn52GAdQgQPyGjAaRRrp7krXpzUhcs8SCDGSXsoy9H14WgUTLDiEVxzwDEC5s1hZsJiN671nA8L",
  "key8": "qrH7zG7WHvnVjnAxT57MMnVLCNBXBWhbRJbAQUWvGcp71sgC8cpTe25TLwbqKSBzn88B2W7KJ1Q4TTN5smkgAxn",
  "key9": "Zt1weWanrA1PwQMh2xDUzUd9WasxEYH3T8wQpf3Lj6kyDMEhqT7EuZMw72ciiURfsqDaVWyZu3LLPiyVZWeRJLp",
  "key10": "4JAVShbrLb6yrkMUcv9pQG1yKNPDE3HXAKFVonCRusYcH9YhxBkpge2RqYVE4Zqfu9wUhjCNp6xnCzS3wV1pTa5y",
  "key11": "sHSV7W3UGmjcQPmMBeCiEaffdfnSfgoKXmLe3KwY3xjLJ3XFBMrfvMfyeNSSTHHXGP3gYr5AA1GizzYLrrmkdkk",
  "key12": "4446twtrLgraGnA4WhmoHzJ8bJF4vGvcaJ5zuNFFJsEP8F4JM7zur6q1pSChDWnVdPrjqdtuc9FfMzhgM1gShQTJ",
  "key13": "5ESQbW3YjWyoEGaxJqxajrgQex9QxrgdSpgrjHaQoeh71nU9ecG4LsaTwNgM6mtTTTbEqDjiiYkD2obNimqVMWwY",
  "key14": "4C1LxodqbVjshKj4vzBkEKqme51JMb3QmXZ5kLJZhicYuMUtEBVzUm2KonC8xDo7eKSujeh184uRysbFW5Zwe2my",
  "key15": "f1oqDs7MmSAarxDA8sWCEPS7ocmoCbkVYurmo8xmxF1LtZw7uh3uNuQfjehTuUxYU4rtfU1wM15ZWag5RvyQ955",
  "key16": "5mxuKW2fVDLTjBqv3iRvZKWtVHsyavt2iounNUjgtrPswYWyKQTqB2hzZueZL4HKSnbofokiUHx9pvUm8KX3umx9",
  "key17": "2adDg8GhxAz6WV1J5M7xhNJJvFkNJVV8DgE2Zvf7EeoHj7LTNZMq3iTPvD835ovJ1484r71m6ZNNCh5vERd5LhCk",
  "key18": "q1JqmJ1viuftAsyVWKm2UzpXJXvUSmuhWTU8vfdzUhHAPQ92b2JjbfU8aKRVRu6CiVdvMo7svsS9kwM3ZKAz12i",
  "key19": "3p97q6QiippkbCYPUC1tRLcCamdG1sv6utyVu9YA9XL91Ud3LLU8cbBNtYVoTYznRBWDSXtTfCjGP4J9nbWdRrHJ",
  "key20": "6351DUpMeKrvQMJGGxvGZdYGmU1vTu7Rn7nHyiSBTFVwhfTGHustY5djM5y4W1EFSuja8PLVSoYQXj4bGM4nn27a",
  "key21": "5Kk42qDYYWcFSuWRUwwPFrtRHwmga75vppKYoAEqadrcGJb7uHffxpP8b9xtcu7hNsThvoNKRAV8WrgoBw39JCqJ",
  "key22": "3X1YrZbuX7dV45Nfaq2hw44VUzqbmfxP5WZe3nWcqA5WF4Ja5CigU65aQAk8U4GrMFCah6W5HZJfAfSVRGESJH4Z",
  "key23": "2EVvWDE14VpdHBffxzPP8wsEbtqzHxMCaDvvgqUitEEQ9WjVqm4HMy3CbqQWTSW2Ag1RQsh2Cb2N1GXzGt3v7sEc",
  "key24": "4vxoCi8c5RqBiBV2pR1EaE61YX8Ws5dyREdzpoBQYN8wMsWmdr4jbNEY4Mn6Th1UgTsiE6TPyznoJotKUWHoVUjR",
  "key25": "2nvbQvLRPZqpZSVzzoBanD2WhF3y3fBd8NhdxPwkMwBHoURH435gTf6Eahj47YMJmQ2q7Cu9eazhzw24SudKBg2r",
  "key26": "5kvmZKcKekWiEJ3jS1NGJa9WW55w6dEXCRCMMHmynnmiAu6qkCb1MM56hwJcDtGmXnTiRC5xDHHYgqzrLHW9MaqU",
  "key27": "5ovVRaEn2aB7PiEowKwKUjgDRsZ37RCTPWYz62UUPyc8pVzE1tkMq1ZhM5ZMahGNPYr5p87qkRDFq4LMkEVzBdnq",
  "key28": "kc61NDEy4yZg8HB93qJDRWS6mgjMgnAZ1oFtiasSWND5JyujHV933FZf7BmYM5zUov7GyMXqhZd2yzzy7HUtZnp",
  "key29": "3pX6EGNJUsLiaC1EjbKCsrJXxCmdW9DGiuC6XNPYVwgbvBFez8CrvxdfquZPKhU9p2MUV6zCz86pvFdtjBTdHASQ",
  "key30": "3xKsB5QaiyVxQRthZmfhCLayHiqfu76rocq5tLJhZx8J56k9Drd2hKbyWMTQpK5pdkWEkSquESWd97Qeuy8fxcjt",
  "key31": "3NcCgnH4jq2QJhca3LtPWYYxZi3ThcDrNBL5T58H1yzkDryg58SCmrEKWGrvctbAxiwQtqZ4Qz6n7p15XCEGFCTS"
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
