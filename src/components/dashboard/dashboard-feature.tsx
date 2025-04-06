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
    "2ipmuUSgzHBhrZ6NiykDCxAJAi4USbcebNNLEBL2cSL7tMXDtYHxxEDSb5GxmELKwwBJFpU79Zai5SXf1bAwqrE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39kgMULkhpGKgw5LRxn7AutKsnTaHF5LmRkdsvSLP4R9z19E2H4QmRJJLBNUEzeDW3b1gK4KPSppVpDMYnDLc1oc",
  "key1": "49nKAwZE3Z9o7KGNrmgbNEGgwtdabwXs8myxHjHdFMQDxYV7ggFb71JfwHSqe8thW3SBUQZ9rpmKirV6jRDPdomQ",
  "key2": "4VwNpYWUeixtotZNpJGnoSfhRULYcfNyvHfsCVUPCLa8bjbHEkqhoA854Nd5AQsPckvWxW9ua58EaFLxh3wLGyZb",
  "key3": "4G8uiVidzYKpmmhoWg4qcD6fPmLYujQQzfkxt8yGK6q157j4ieB7aTjoGrUjHwhWbYFBEnPnnZor2vWbdPFf6YyF",
  "key4": "2f15DPe5ZWZX2hXvd8JjZRfRYL46g2k6KJra68s4sraaXyQ2uekdVs5n9kzoBNuaEZLnEKGigFVRt8E9D8tAaFFq",
  "key5": "3vRr19pvDqKBh62mupzpzRNhyEMb9UdRK4zKpjx6pa88FALZdzSiJUvXqegGW3ZxZJtJkGg1h3uNcuLRi1wTz75T",
  "key6": "4oDLZ3dqa3omXKySAVFwwZGNHACNBirjszxNNn96bYNBhQvBNytXrMM6YJxVNN1BGz2tf3MNzqGKS8RPr4PYeu3S",
  "key7": "NqiwoYPeMUSMj1dDjZDSECz2T8TMyDExX6JkWqLWdKrKb7sP4LKNon6aqXGoYxm6vCTYYGCeGwdSR5gxbnv9pqs",
  "key8": "2rqyuG4yYSBVEA5ChLQjktsQMBY5qPRAYgKXXgbPMvMdZbpnAstJNuUSsNtrHhA1UxYjjSmk6G14AYexjAnnf8w6",
  "key9": "2YjLyjc1J4RdzJEMnM7VBg2uQjSkqsj8XJZhR7zg1Q9JYuY6aA7JapByUASrKNSHfECcK2smZ1BSjnrdBeKrRpk3",
  "key10": "5f516C9K9AuNaQ6Bpv4Y2XvFAntoU4Fq1k1drUpVk5xfrmBtaKuSt2MbiWhv7ztSizqm3VVWFVNBLFMHfhzCE2z9",
  "key11": "4WtVfotgLwsYEu2xxHMZ6xqqYPbHt1vh9duR76p1yyz1X56B1sFr3DkLZddkkVufKugFUfdfYHis8jCkngwSoSRw",
  "key12": "5uVPjhUT3RaeLfxaKeUiMc6FchzxWTr54H2bFm7MKNZwFkXHwBt58izQ9t6wJy1KS1uWkeiAcQfoUpci32VTUMoV",
  "key13": "25nTxLYsKuRhJXtnAGGpdpHAozTy1x7gE8FRaALyPqJGk17mYDENNqvnZSpXPs8TWSBkhjus9B6WJ3DqjKzryKBn",
  "key14": "2b3BoHhsyYDma3QBx9mmp4YxZzDubnBZprBGP18xAUciKZN6GvLX9oSXGVCaAB1ieoc23caMaxRqPirvfnJLLd6D",
  "key15": "2KrBPBModG3a36UNVHqNPAHhqCSVMfNaoruqEEibVjR97NcqdYtnRKf4BD2mD51hcngFbAiToo1iKtBKNnNzDj2s",
  "key16": "55hchqYTm5wN5wm74yp2pwzHBTsLFCpAq4vK1u3C3AWFxwTxkPp1aKGbPR2BLR3ZtfsiR5PWGZDy86ZuapPtCRYv",
  "key17": "3vstZvjbPX6TATBZGkAQftigf78374UPTDHpFcnh5NGwLVRHhTE12u46RpxJHrbkV9ZanXb482XKzy6BTThx9ujH",
  "key18": "4u2NkU5U4yd7oTXHCGdMbN19k5KghUgH8mZFRuE6WQPgb4FihcpZNs4YSxo18ZJZtbcHhxP2bFc9iJQwKQkSGn9v",
  "key19": "65EYsBmT2GNb97fjnW6CwSppCH4qsCySxtXgrQ6xjPLDk7WQfEicFqzWQY3DTs9hAKVtjeYrvNfzzZJmViofeCfG",
  "key20": "4gXdRm3m8u9RWT6Mp9bou6TKUzi3t3Vg9fxp6Zdbp4s5FYx9TnHSUqgjDyKSQm2BDYKv2wSGEXUHFzRHoTE5vEyn",
  "key21": "FKdqYJiuMF2oc9dSGEEkDmvHeKodXsDfcQtpbv3vVahhijRM6wZqXuwFdbR5zeAJhcLhuxmxXU4NMmRSUJh8Pk3",
  "key22": "2wcHEj1uYX4ApR7qYuCbrHxffLeJHg8w9GCQRp8VSmvteLuSdVEEsuqHoRW6HRuZApYUaTiY1EaTBmzgdkaeqpMo",
  "key23": "oqqEV757QL3HFGV7WSzbyfxLNSBhijUCCkHRVzpHot1rt3kNaogJQoDBYAiDo7jnEx31s6tFwcdF4VAzuSixYLF",
  "key24": "2wtDRpyzBCsi91mG3ggx6ZLcef2XJMgHo9hWzErn6PUcYBq9V2FpYuUi3iAKDXwzf2NyqpRrjyt614ogUKeNEuZ2",
  "key25": "4hf8efJncKC7TUiBoEvKNGv5UJwXTm3Ew8w2kJuGw81QnKMupQVN7wMM5wXEscSZuqaSpF5M4zBwywqtCE5z9nDL",
  "key26": "2gFJUiFBEUigUMqNgavwVD6Jfo7rEqKhzELyULtLSBo7wNzx8Z7kGsP7Bs94HXYGTNC83zYRhdCMKzZSoqwivUr6",
  "key27": "33DWFoRm7WNNgUzxZqN5fsZEJWCNURd6p7TvDvXtxLXvxCGhDpx1djYp5q8jUhmty1ZjdTMCbaXys7fb23amTLPG",
  "key28": "3FujNZiTTBybtKKmcVmvLpjXghxpgYCmht3wb8NoDjPHkef2r3CYUrrHa8Y8s5s1EcUTP4oYNh3pUYoa3NkcSdP6",
  "key29": "2ki5aBvZZYU72eFTXHHsJTNduZ1zo49GbsbT48VHkigXrNhLj73gA3uLzR4fUswjVd7gkmQU1F5QmxJ9aKvKoypW",
  "key30": "5gv6qMrneasXGANHFG3hJHBmn7AwvTPgwvk7CTvpseNL2t15kRS8RLBQkiuSWwcGSCDCXtUQq8EQKtWzAY89Pcrk",
  "key31": "5MjfY34tSP2L9QQQa3bNSbatSk9Ui96wtTsM7iAPC13bN5PPmyjPScfYgQmU3411NbTDPYMnXqPkpditE31Ka82J",
  "key32": "2htpGHZhPGQqPnyGRVwbWNyw5U1NEUBSoKF4Kb9T4qsfuT1kCSLdDooa7RTCczDQditNrwG81i7T8oCzThKXSFLv",
  "key33": "44KGPw4Bk1znqp2E3k5FhK3MMdiJ59vfFmZUszBv5hWuM54Q8nvpva9GeEr8S9mnJXvnju7FRQ3Taa47TJ3tjZEN",
  "key34": "QZ4yW1MeeMmDWXScN88h6qTvkYLDuf5rLEivJVNoGidNnKVJTj3WdgTPmpgUJdEuNfkb5Lv7RKE5iMoGfek53f7",
  "key35": "2jcxSGnTD6ikdfmmUgTDbMErn49vkxEhGv8WgHbDSWydNKD8U5YGPX58LedZTMSHPPrdhEvFd4YqT8EAAVVqBiuy",
  "key36": "3PGR7MnAg1iXFAFfCrSFNYWp37UkFoyVuc3MGYFS8YLNQNQUNh7TAA4ZmBpBo2yCJxB9g7T8Y8ZRk243uGnbuBaQ",
  "key37": "4EeMK1Coj4Fwzr5RScTiEy8J3SN6xM4wH6Q9wwezQN4fakFkjpH5UPc9KcQqKf69ij2nMPrg9GwJXBYfgJCmTjvB",
  "key38": "3wMzo3PxMqYwfn79PzJcejDCBqSq4MRxN2jit1ApPyHFW23SXBbDoWBdLeUZ9S4ovYuAuarmAHBiZMVsccMiRCQc"
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
