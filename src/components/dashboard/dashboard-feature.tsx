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
    "5F86Ea4WgPeyS1dLDehL595BiRC7f4CuPB2QGV55pSrMrJTzcNMENKdggQW1bsEexBAGWsUfqQJUXpM8gyj9ancQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M2MX3KYrY2TCp3Ls53mkupD6ksRSR3yvUJ4jNLFvrSLrz2JdnfL3DJcd832yvuEpiixRvd8Mc6V2T5rUhcXQywn",
  "key1": "5dtsuRUdGkwZtNaUnAneYeKcvzkB13gZWRqhyLVqEGUrisythxSgPdwQrCG7gMjt3SpjrKum78ewqZabdLKKYAUT",
  "key2": "w4jdkZGUcJPTwu77wrHJ5qs9qPLQUGmXbFvz3Q4TQC38fuMa7FQcbFr9opt4t9NxrG3Nt2bCFmG23DLGx9JirWg",
  "key3": "2s41A4k9CnuXzXVHD2SFG7cmNv3vKbvWAQg9KdCZrFFg8WXB6XDgMzj7JXwB6XyjajzJdUXrxmjL16zyzUSkaYJs",
  "key4": "Z8LKpGZkLGsVeCSQEj3SgeVqYKSKwMVbB46JZCLr6pzGpFfwkQKSrMZGxpAxzQs2h3aUDVqKEVzYsHuVkMQiMxq",
  "key5": "55uFmfk53F2UF7r2jvgQY67ZfjNwk2Se5saUjWDT42pBJhNgfwfTZyKrtpJCJ7LLML1uw5wBubjy67UW4qgoewXx",
  "key6": "8aV9GV8ZRcB5TQMmV9XAwPgGnsv3jFZMXhiMm5aBrzmZANx7ETud3FhCZ6hq6PehKv3twv5oMRvbqwy2w5vZs2e",
  "key7": "4eXJNjt8vTaowh2hCBdpdLPEi6rqzmXDeHYXKzwomG4WKrgA1ubXQBydazq6zL2SYaTTFpNXFSQhAuReiwpkqx8j",
  "key8": "2xaLeL2yP9pZsPT1o2B3nfju78RFznLBY2QusqivuJq1gs7ktf5eWy7FkcLLtobMvBXgXC3uU3L42ENzaonHoGPV",
  "key9": "WWeDAbc5sYjYQ38GjPMoXCDMnrLomz211VQxGVGdgc5GqS6XvjGVuKkmc8G2qXm3F5rsi6NZQcfBBjsmnPzw8T8",
  "key10": "3341yXiFsKE8GdRtc7Ee7TM5rTBP6tdJEWmm5ggAZv2CMV7Bue69rLcqHVi9UFUbyzpd7VrsaAqxt7wgYyqrPS4",
  "key11": "5fHFyShEhbxoMcMAdSSWkSrkdvLadqmEiopTJ3fzXFrRNxcDojsEkHTBAkRgW7DapJxS5iCnsyBdfLajurxXWkUx",
  "key12": "26UxBcZkVN5XWKhVCfEfsovWwEANcBUR174oSDzSB4XWc5s1JeLAFjLL9GbyGsgcxzRtJsMFceJ5XYivq8EQaeeC",
  "key13": "U4Tw6VMDna5w9biKenL4hyd6yoBnEhyoddj6ZHzaqDvVRtEtE98spkdXHuyAtyva7zsQ4wZE4BCo9S7dEgQgeur",
  "key14": "4TAg5f5czEYGnsLpsU4wrSTjBgKLZf4eRphb5V7zhQrHgzwPbXP1jNewdPGqLef1c2iUYb1v6cHrcGtC3H5qwLMD",
  "key15": "5uioi3nQsUaFtYtkvew8Tc8WSwtpdJAg8XN8GE6naZs91VjmsXv6YkoBNkkG1PGVBF1N6pBydqkpaUFmZxVrguZs",
  "key16": "5ir2nnBTfMLrFuLe2doifS4pjWt2insUC8Uh1ys3YkMcdcnUgfNFAK3mFNNiUeG7DtfHGuAJEMk2tXSBFqLNuyH6",
  "key17": "fMS2PAmnN7ss62SBTiwZzUHL9mh8ncF87jmTzHqS9rgvPBpCmrovULcZZH1MDsKToUrQiLTtJScAvuEoX1FsZwJ",
  "key18": "3Uo5yVq1JnVupXpNtHcd9fa7nWZdYfE9Et3B8g4jPnZKrWfGLW2CFoxtvLarsEh695YrCvALBefEzYiFwyHh28nV",
  "key19": "5i5Rs7duqbgWQKtaufmnW5kMP1LNd8kd5U7EQM4PJ4cSEhJsjA4fZTaLHaMePn4GQKeswbwRAN4CFkJqak8wc3GF",
  "key20": "jT2823g51ytQL3HmTDmozaS48HW2nVw5TGcdwHHaEk828AGSZqkG7TVVLEtNcv3HT2cNncbJi94NUgXES9qsiL1",
  "key21": "s4WEitYFxyozUEpRuKUQQSEmcTaMD2ATpXLQ4RBbT7UyBMuxPxyK7oSjBJpxGFK3oH72qKHRKYQ6W1zRtLAoP4g",
  "key22": "45jqhjqYPv1qVoHP7diVHwGy2c99vrhbyJ7CAJmGEpAS79ir3s6WDi592SiSusFboGqEA9oUwoyjZj2AmCF7arfd",
  "key23": "8X5E56L8N6frxdBionaa7gqSSMiAa7o2Cvq78wWsXrH3DrZQsSuJ1zBtATZaQYWYbNmW8deCEmL6pPDGBboF1uw",
  "key24": "32wxT1tNiyz3nSyVddMk4s5yHciH34WGNNnPCH6Taf16osMBJSTX789L7NdqyeL6YqgnYjPt2VaBjxLGnVx3k28m",
  "key25": "3XaGVkNoBasfUUnpqZLTVsg3dQfvBqYkYH2UqcKiSakpYrWubvyHGK2n59BCGYf7rPxE8yEwBdNX2r2UECEhsA6y",
  "key26": "57WTaoygxjauP8pe3Kn33dC3Ydgb1FDC3ss4L5kGCqCu45t28Uw5WC8C2wouk4kRJNbULBUZRh5Lwi3m5ZNT73yD",
  "key27": "hS2EjBpRLuF2cGB3RPGLMus4jQYB6R31byiK2zRLdcgaEB73mqY3aQUzCuBGDL2dbBMG4oB3uz87antf9pe4JPf",
  "key28": "4ZjRpLrDKaybqJKeWqAWXWzxQdNAbMkswvd9sgFTVvnwzKizCVJtSZiTL5fPEBKrMwLqiZov6WoZwGTEXULnbBiD",
  "key29": "d8FTHMpAQWwZkCv7q9SQvxbCRDpDZt1bv5QZDvpFnWRHFNQ64RKCkUQinsoWDCkdFVwUMFbwU4Tjh6eS6okc3Sd",
  "key30": "4WTS39Ndqh1zTqJ92KRdU9dg977iMNMRcaJxT67PBRK4iYRto53cuKpNt1RGbdBX4xbqLsLUKm39pjUyf2wQwTN7",
  "key31": "2wZAUtb7ySZUsu8gw4pfhYwqFbCCjX9u171oaVCVsdygAKLao25hkKQXryqAadTVUx91f6E4YghQo1YPN1XE8WX2",
  "key32": "TvpXkkCfCCKAyyUEJogs2aoh2wbBC11RGjNhqn9CQjQUENDet1yYmp1XCjq7aHoF4veV7KLyxKXmV5e3AihJdkb",
  "key33": "ic1vvMrLJdpjDF3wF1nW9vNLCiEdPRJniVA68aeG7G9BuSruKqTFWDwRYT5Yz3pyMRgs41S9GsEXMJWeNAp1suH",
  "key34": "62djDSyNyHBsSHfrQ3ixbtnHpuqbEsToufznJe9Wv9keu71yrQ9hSGGqxKyaaKW8j93hKhtiqpprqhTRAjsSGxks",
  "key35": "2XpZ7qmz6gTDN4xzhPZfz2UZ8ifSuHRw5LGx5ndutBnYa7xMckdpppepy5bNqE4wybh3xpjCcWrQyqDFuap9THZ1",
  "key36": "63YrgvPPn18DFhksyUoorykb4LqL5f3SkndGMfJMdMQx8TBezTbxMa3T1LwehfByDMUqti8PP8VyeFLALY4yTMeB"
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
