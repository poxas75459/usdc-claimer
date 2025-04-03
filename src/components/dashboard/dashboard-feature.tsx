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
    "3LNmhAP4c9ZnAc8yBPL3QTue9cxxNUzUQrn1qbLMqeTC9xNayZZjLmFnbm3XkxocAerigFhsmqKPBxgrfqP43Jbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c5CArKGDoiNHfsh48gk7LP9HCWjabxZgtjMwYSNdyufQRv8D7ucHGG2ARp12N79MtTCREPMMsX6RYPLc3x7rZpe",
  "key1": "2BDCWBZ9mmWXhcXS7PW1FCKrBRehYNM5Nv9B4TimduQxbTE2ThhAe7Zf7aak5xVqx5xDShydywNjBubyHo3R7XN7",
  "key2": "Ls5wyWqdZjHWeg88coX2nX4Gai3nciXscyGxMCtxKBqZ7t8Q8bZpARLxNG4Gsm7Tv86xHnQ461tZXvwKEH1Ef9B",
  "key3": "2as6H9DitzUXWRChDdgzE9kauLkioyCSd6GSoZL4KXPaX8mL548FcdRQMVuF34SSC41A9kYEyZ3esxUd4Lmhq6bQ",
  "key4": "2r2id1CcviDL2AbqpM8NJd8kcV8HobNizt3GL6ECFmkJm4H8yQLCD1SfoUZNnBa6fRsxFdR7sTC7s9GkdJM5Nr98",
  "key5": "4e16trSdeVPXTv5hZPseAH47GRELpLXBed2p94pexSKu5PAVEEK3mChHcFoJqhWXPRjLZp8vj4v3KFsKC4Xab93m",
  "key6": "3iWSbHxigqET7MeN4ESHjaEfXA2aCEUEHofAVc6Hiyfjgkxpzqjo3ovGXX79PymEzcz1hu58ufWU17CX8H42LgTp",
  "key7": "35Riny98CWB6aGYPT6KUJCVN58paUekfBzGx2CiYySacwBFdMfhmPvprDYc8TzXciSjuj2ZqeHpae5xb7hr12h76",
  "key8": "3oMeVcJAZXNgqpmnYizyWtk3oLJ11mXC2JTMnFici51YMohVymhVV5a6BjLkaTRqh4En7TKp28RTXzeVJGVhx2s6",
  "key9": "49kaW5ZHK8S1Ju7LRYUCi4EY3qDKhJX9nbxeQ3e2LPyarpPpUhsjEmvtmTF8Dd4hZqqrcMyTTnx68p2Q2bEv8BVa",
  "key10": "2PUtYgPQipH5XxmCod8jN8YLasC7T5owvRWHQmQa1sagcoXhwXPLgG9TEdC1z6guB5MtoE3BANtruHYjqxjmqJ1X",
  "key11": "265dHbf9ZeJjyRWcCqpZkxmewhFpqbC7tzpMqx3bbNhVmU99Qqwy4jYqmAQdFssXgbNZz3Ngsu5Hoe5DyYTPMLJi",
  "key12": "3bUVJQBgcTSxygq7FipwvTqqsdyaSBxTnBDis6YyfKjQtNzLLtfw2tZDfyYGase7zUbwRhZTE5PbowWTEDPj7faJ",
  "key13": "2YFu3j6UvaXKXQpjWBnFfMGnAZFT7wZbPSaZAcXdDPKxRUppFAL5xP4NUti7uVFrk1U5Mcw5mh54yMkFS6QqPhHz",
  "key14": "3cBmzsjDr8NcTBzZgHrW2JwdpZBDvQwMbY92oC5Dv8CNUYTMF9HGdN1eXJ58kjdi3hscoMp5CxiwkSSZiQU6Mgs5",
  "key15": "2EDaFg1GMAKKFUsZ4qh4W8xFFHRS4CW2vZP7Re4hru7D9nLyuW9bCQM3JfnpNSer2SaGdcuFDezF5JrJiDvCJJwt",
  "key16": "3zE4Ee9U41pCq7iDzGFBySjUwyUjxBfoWn6LcRgF1RrEkbCKsKYrvMaQwpPw2ZhPkjyjhm3XWxnEvuCmaV2Dx4DG",
  "key17": "38LkXJnL6BBNRim2s3vue1HDvnw1ErDiSZx8XqnZAgBCmshU76BVfVRVLYq7eNVFcopJR2bcW2ud1M3fAr6yywPM",
  "key18": "4GxFtiQHHZNkB29NGietJmjh8vFb8KP8KQfytZzKAFpmsrWXhUanZipfezfrNgs2qLMngJD73cdTdBwbAEYxJJor",
  "key19": "3HvGX64JeVGWfHYgcNT3wH3Mds2VAG9kpr8woRjEe1arAqJML6wen2L3hPH8guGyypD4zM8N4oX4RwV5aMY5JxMA",
  "key20": "dd9kBjUDSE7PaL1N2QvSyLb1oiNmDknxHgF4VXRegR1zWtSmkFpKyG8vApqGWoQrfcctt7k1jxrWJj4Ha7b6oiP",
  "key21": "2PqskrGx6ziYaHRdpdfaqJpbnJ3ES7ozCxYFkdKGsXZ23ZhZSi2KbQCh2ifvddBFFWss4RL6akT2fz2hwUBgwdVM",
  "key22": "3ytyrmFCDw331nzhbwfFavMej1toxJVTzPvRKDtCJhuFeTMQF2g8ZLx25rEumTJwBHQdbtJG9CMgdK7jmsysxH7o",
  "key23": "2W93z756NsQUTThrL6gNqBJ5t1gmX9LGQeFrS5q12bnXnCwQQzxMb7meAugFnrRJLcBnfmEj5hsP2qHB8viJHQZ5",
  "key24": "48gaNQSUE8K3kjvSbukhvDRJoeEXzm6wndRMYrciiCqpRxdaWRTvwGTchs4zLshHL49jf49UVupXjAhPzG49NEUP",
  "key25": "4pyfgnWD322k6MXfmtYE9w6xbiQAMDcmtJwWyJtrgh4GNDNKSfUg1JCgSNRYDWFqHEMWVhTBTqo8x9YiSP4KpaB3",
  "key26": "9apwpoFGZKoydbPamjG5fJfmXzYRM14wLnxLXVnNzAHnAwSsLTx5yunjh4cpVUdoui1RxQ9S4G1N8JLNsYxrBWL",
  "key27": "3mcsWS1fzXiwuDsDEM2pNow3sc8CzHRxBzWMDgeGixqbq1cmA2gCuqqzvnDUSXxUCaknd7mPSRqc3k4Xbr3c63ca",
  "key28": "3ed2fPcBKspxvhZBLhxNS1YG7tsmCDs2acn2M5M3BrqXHDtrSPeSbgz5tKEw7FRxV7tDyNYyaScoAtyAPYJMeHyw",
  "key29": "5U2A6XquHHtEz4J3PdM9PcYw7MRE1MuLH7EvbXLhhKvpNhp3vqKHG71h1xTZk887bN72mqt4PU8YwxCmkPAT4NLo",
  "key30": "22V5LPc3wsjr2f5RCT7B6aLoPtfyMRk2a825ECFvAANKU9xWu55Cvw1b8r7vM1rvUUX9G9vSkPzkrVqwb84nQoUU",
  "key31": "42w599ppUSiWBmUwASA4LA8WuqTyv1wQ75cBjHqpk3UGPDzcXmjRE6oeC25DJDYs5UvdSShSg15KpYmB6fknu8h6",
  "key32": "QBGsD1ziMuG3YVM3xbY2mNhrzkev84i3hAXwp2wKhrPYDqMR2zM3iUdJ6fN5d28uXYSeGHs45QMPCA9dRTaLpd6",
  "key33": "5B89beYW8Q5fdJomvhfcpTnJvwUcSJxLbdBmREtj4P7qzo67LmPgPwAwL1XiiWUHA3mphps8rkjHCcCBZ1waw42k",
  "key34": "22UPvd45cPJAYEjRvJaCnYA5gWhJSYR3WiEq78nhpqiFeVUwppQUVpvZN7hBqE2GG44vbzbvQrL3fSYnnfL5gsYk",
  "key35": "5JVcB7jwFouKpCpGehoYb68GBZXEXyW6wpBikjXE5XcfBsFxgc3k1AMgnqEWoC3k5KWPfxnz3qznqout9SUE2tPz",
  "key36": "4J5HRenV7JqQrQ9mxP8jqZH7BDB43c19Q47az4YJNStjcqthbiCf29U1eBCkW1GyMqmQdiHtTEfVvbAANw5dqkhM",
  "key37": "5xdRsowVFoTC48E2FWKZAxDyyZyQVjrEtZGoDVvr9cA3Wjgj23qcNayD2vc7WCbJ3hbU6MUgugF8UYfLrLdph5n5",
  "key38": "5qtZCitoWGYANMD6tCcoSGW8MBepbGpaRmvkkCAE4QaTSu9aHvhXtEXPC71n8vbPnKRiYr1kxAqG53LHrYS1VEnG",
  "key39": "5HenE1QT5ZCKLBxzqAUj9UZsZGNF6ChQUczKPXUPwUdcWapUoME5o1GJRbH9nXPBdoRnmRhcpeGBrLRYuQ6LMrKh",
  "key40": "3qMYSZkPx1fFqtYnPZpWPbfUoKGUJKrumMuZ3c6Rq3EEfHo3ajrY2tvu5H671uwAsLegV6vBy7i8CknMR3yEKwba",
  "key41": "5J7sRS8RZu3j4zr7qnWvYgaWkqRLYeipJsGtPw9TP15nE1PHG1VK9sXjqHMGmCZK1qm81JSo25psF4zR46Bb5ZbR",
  "key42": "3HEoJiastmhAGSWfEAxQkezMQ9dbx6y8cAvZmQkWcS7Kr5YJoAqyyuMFMv8tgwQj99NQau5vTMwS8z8wLpsLf9zm",
  "key43": "2PU6yRHfLUBpFX5XHJSLtajrv1D3LCZjYv4L4CRVeWh1tfaZ4cqUXpLjRyvnbayxG2nYBdnZjnJXbYrEa4KazWhm",
  "key44": "2dbzG1aDmNoaHg3d7oRYsRzLBFjEo5s1N4Q4qztxQUbR5UhFjGXRPKRhG198mPrRGurM7Jo7rkjU1oUZ4WQsULLN"
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
