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
    "3pjJTB3PjpmuVf3sfXwP2Hs5NuJLDhh27a7EsimnXYiZy64tgZAasFAXyDwXXoDqc5c9dnf9rqS92xo3yk6Z5KxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XJa4aZMzNub2zsGzKZ5vVvMAK7gXiUGwAtNna8QqFvWfMX3b6ZLKQkqwemsGkAinSViKWyzhMGQk3KrnezdA79Y",
  "key1": "2RvWRE3Eg4mqWFU6A6jZdMx8S889aaQNALWREFBRNKMu3bnhL5JMPQVRRvUxagFuZfcwpUdMWHdiQpygWuhBUNee",
  "key2": "2xHfcyY5YsAn3dLu2KM4vpycFoFw76KmuXLyxeQyKvgC8VtaPggfjpUMoP8G5sUJG9HgHUvyXJqDVVHNLQbUQpA3",
  "key3": "4hUWrHrf3cuV6Dj6qXJGH7UW1fqDT2G9piDhqQ8ERNgFYdia2PXJiYJ6RSawMSJHjmz3TV55jAab3KdcqXdoRgrV",
  "key4": "2uQgrw5q9Uyt4ccQmiEEmumnTgjsFirRfvmUixAqCtmcdcbgZ5Hs4v8DoVN4dcN7KeZ4wPVBdqwT4GJe2QpAnHMR",
  "key5": "4swnHRcQQsJLYCvrV1SNdVgzMtdMi3HUfFWGiVdhEgGABL1K8KTqUHdopPzvXzF29tLQhi12sBhGMzRjVpzUxtLq",
  "key6": "56ZKFKnaKqomQEhnPEbSrjKbjyudYSRX6s53NQUhatCW9xjwVJpnh1rZrDsXSbwV4KorDfqwfMNZNZT3zSR7z6pD",
  "key7": "2dMF6BqTyRGhy9SXDATTs85zmQnqABZq1ZtT6jUqCL5zqZ6NG4HgqXJsEXH3h3M1qWHjFUHVScCBUNvw9TKZYDog",
  "key8": "24ZUMAyior9Vj8hGVxqprFYzoen3ipD5pTFm7UAcTEU63NSNGKQKS7CEoYogXBARDPpX3KFyncPpTNKqHgyzRYVy",
  "key9": "2ojmGEMQoS2LwcuZdPvvxJonBqwXb3kcw3GHjdxJHdacNcHW2gEVpCB2VNNSSeRK4zCBM44biN38ynWGq9gTGtvc",
  "key10": "28mAArkePHXkUWPh2f1ucGt4zRK9oHJsd2PWTdEoVvov3sKq9aZmQ8pkHcR65stY1phEB92Cu5oumWpiptVepkmA",
  "key11": "3b5hd5uLABM62KEpo75MRW18C3xpnvBxcMLRkS2yN7Rhp2MKwTtE3YZeDTAgpx9Ab69tUrSRt2QV4AtRckLmHkkC",
  "key12": "27WeBySnR9CU1vxmnbxvP7jMbbNRpazwgQQaxaAMTTzvWZEiquA2Wkk837DE2yimcQh5mAtJDStFnhevv5KY87oX",
  "key13": "4pfY44BHnNV9TiyJUMApr6kxzT8ZKLzaHHKWU266UfU16nJnDg4JkUfBCm6KWaRkABRtWoxYyBGL2JtaRddaDAk9",
  "key14": "4mXP4RPBCmh8xWhnxtobuJB9NrmCxZCx1HaUB7ZQnqn241vc1SfFEme4MMNpzw3BoCVegKTNs7DyuVnUuQdw5xyw",
  "key15": "3gq2c5pY63isHELyq2ETBVQdXT11ocAvV1iAvuC7CEzokeFP6VWVwxHLMZ6YrvobxxHrMeS3f9oj9kFu2Jqx2wJj",
  "key16": "2iKjVnzQUgko5LEckfvs7s5dTEakKr8YRAMgwv9aPkx57behMKBNb78t3zN72MHvk4JuSUqTK8PTU696UkZqWHts",
  "key17": "hbWo1Mwn9VijiLboh71SZ17uEpHawFf15VLFi4eewjcaMtQ1STdxUe5psPw9DtEwZu6cPgtokESUUGr8QrJMSAp",
  "key18": "2YkZ4nf3CeCHWaAoutRpRS1neX7C1ontJEwbUH6FRvX3V4NKUrJxthdAG1FUjQibgqPTn9DTb5rMNMxomYRKfPMa",
  "key19": "2ibJXuoQJE2kLFgKBHYqao3M5pkcQ7bLv3z68TbKk8mnR3PQKtSXM99zkSPwc9LGvybueSPgkKAgqpvgqbXmbtCn",
  "key20": "4Kqav3x4jjb9v4bQjQFSrJkzxEH6fXj4mAUxwWcwJZxcGg3iR5mKCHMwaz5YYnAmeQkGg9YyhLcRjDT63ehDfD6t",
  "key21": "4m3gZJGfgkwrya8P2iFTn4yaEyQn9nKYKrESCz6ajJUegf4zuaGJU9mmgqeQSMiuEzJmmM45EagWgAhk7EvNfV34",
  "key22": "5deB54hHWNwMuTNa9veH6kj72DZorVBuHvceSEkL9YEfJ6pfYoKVj8jJdSfyWhdgPkg9kbBUhzW7Hp3bXjFgu7Gr",
  "key23": "48hZkVTcYvNY7cNbLE8NY3ufG8nhWHpuF3sKjpbbFJGAePmD6Vvxfc9fgyT4SvMymaubmdTDEU7sDAcoqps3AYoB",
  "key24": "5PrJpeT9hF5jnLMYmerEWewW7JYzfLxxSA4BMMbQhhPHQv2YAgmewdgLQLLzvCG8cuLEBm1LJ7zCSL7KpGpRr29B",
  "key25": "4hCYjGVmrUS8gWTnqbmmYa4fSptk1EE86FFYzbuh4cMaxwkiPDLWrvjTtwAvYtUZfoBPavdfF2L578A81HmCV7cw",
  "key26": "LGYbtNBM7nkbdUNrtnp5yX8FBptBnxYmjQmSDqzAPwn2yRo7A9EVSNcRwit3v3wTd1rw8XNy2CWSgzPNXWLKGhG",
  "key27": "3fASGqkKfuBh5BoAg2YQqLzU6R5iqGKtfhPRhfboTFsF3SL8vTNfcTkkbTyfq5WZXHv9XBq9fUFrffmi99MqYPCG",
  "key28": "5RjLvfJiJLwZiQezM4ytDn3geH8rJH3WeD1UWnk7tEVyeKUKqPrzozDCtXhYcX8yPYnf5Yoqgjpxktg2swz1pZ1s",
  "key29": "2j8RgCxu8R6qrNhivWLQvTziJHLt9XGNDzvfU4vj8fxDEk851haxzC47oUAAbfvEByJ1XjazS9s44RB4SjCPnvgR",
  "key30": "35XoEVsJtnvQuSywu6pVhC2uPXnkYcYg1HDgDjovbAyQPVvBy9vhuB4Pifx8hDv3Yk9QkFbr9ZH8pLbAGmoVgSnD",
  "key31": "bNDd9R21VvDYj5sBdtgo9p4wE3eowFVWG6eVdnoMhFJt3yCN69nB53aAhQaBpXot7Rpu7bsvnPmwhhYZxTJAqJs",
  "key32": "3qh9fNwys6Fa173HB2geHmQcr4324HgowVMxsZ2tTnkiyG1QZSkKDaQ4WaPGBBW8ToBVRdux5w6Y5CTvnM8RGZXF",
  "key33": "2xdVuKc7eKzvrVCxppX2sjeDAbpsNUnocsvbV257j9Ru6622dqKZpLeuNnVDnTCJEsPrwVP4ccQ5CgYa9nBnULML",
  "key34": "5ibm9Cq9BUkeyHsHDbjGEd4DgyG2j9UCJ9HJJESDkbzMeHazZfmEKNYL7ktQRSjfBZWk2wpNNPukGUrBKRfmuUrz",
  "key35": "61UuxkjyJwagAts5JrNkiwK2V5STuEUSFD8rY7UCzzoTAdudKguwiNzyKAAVsaRFU7eoTBimBMpytkY2DhjQmHdP",
  "key36": "4XRZVqcD2bGJFb7hJ9wJaw2oxbkQKnkUTppCfUvV82Cuu4BTaWdhgmXxnjAdKJ7hGdgivBoMbDyWfAttSANupLKk",
  "key37": "49hfkyihGXZp4Noea7i1QB7VzJZML7TtBCG7vQNBBQjoCAdJ5idKNrPaLzk3bsKDPm2yq3qnNTFo5gJWkA55UH1F",
  "key38": "2ygW7jNq3SfNNT1wNdoD3PuEdjbzq7D6YGGaotxJrng1SfGes4b1unm5GUkMXtykCBna18CdF1pWhm5RuLwchebr",
  "key39": "3Nd27eLQ9X4D5b1NH7zhsWj4SqRFBvwYffWxw1aqKxCWBXGY8UEpS4mp1YVoo3W5CCTpRG8treMBeELZt4BwpAX6",
  "key40": "oZsw1YeabrwUdPy5g4yuMzfE8tL5iFcTncgqYQupWGawnndsmJS2ovgzNWQ6BBtEoVpKDuRJSGSXpTidvPvkVao",
  "key41": "24DxDTeZ8zAxxR2KTJk4EyB8JW6tGqAapZGNdDcyamV5F46cT2jVauPwBM2bxfgkn1N3XXTecTioMiLcyawL5Ryc",
  "key42": "vWr78NAByLF9UokUpKFy9MZnZMHP1n7PpLAr7Dnzm5Lsm8me7m69kwZU5vZH3dfNebE4j1hTiwFznk6aXLBDoKE",
  "key43": "5sSuBRRXaiaxtwA7QzfYHhScEJdMsUB2VNJYVHbg7Tyg5Z9hbpByuFEvhJEopryEKD9Gx45nABf61FY8hdNCazJp",
  "key44": "NSLVkKaVRG1dw61iNRDquntM1Huczy6n44smePAp5WExjtQ2mENUxPRtKqgpEnNnKZRJZRW7drjsD92xoQPMjiW",
  "key45": "2mhj53YH5qnSG5et9b26m4ayvxAEhyahk3AspgEAugucrdHyzQFTnXg772NkrgXhLYME87W8vLFXmecjTdUZJzbK",
  "key46": "PksBuF85gRusCcts4FzyosjUDnMo5kq3maDuwZFmMXsseLPbewFzdErFYyPF6uijHkrVgEDJyXWC63zkTefsEMt",
  "key47": "tJBcgqebhws7oRiFtZE1xnpLd5UEsCTfRdjh7YhD6zpjcDe6CKpZfwLdAtSb9T4EVaMkHpu73ccVHe6TFbBSjCw"
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
