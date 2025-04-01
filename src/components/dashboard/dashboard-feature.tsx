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
    "jFNqFnjBkmsoDs7a1FZWwrvufC5ZGUzLSqGkxhN1jFAYX3NxzZWG68LmSoMdRiAhZwa7wMD9ggcrGAmWdkLY9gM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rVtbipYs8QsFZuji8S1ZNzNARSUTUzpfuFhxiB2YGd2AjonNAAbFShBF7UzyEFJGUXLq2VAEmLgYZzwFSLcpAxe",
  "key1": "5i5CQsBCASFGhFM4rnBxYMHAMoimdPzoa5qDfSS2xowx8JKTTcjAdQ9AG1Guu5FGmnSvYC7AnaYdB9zAX3UmGzjH",
  "key2": "42taS76qzMgMmhCPEAyKQB7D5xraQ4T4WQ2jLeWKoqgNPF4B8faMhVt1jnncsDAH1FsTYn8pXMn96CVwxaimjthZ",
  "key3": "2RzYX2u1NkAUtxaScy5aLx754Mc9Dr5F9E9gNZ5omNYWyCX62K5fqA1EWt98eWFnDMftuGi9QipFQ4Bznh6hoC9w",
  "key4": "4k6WkHsLZi9Q7uuVEmGqmTWyPhT1YAa9msbuJzsCzXL7Z9XATj2ZbkiWAx4HfgLtKdXWyVwuqiS6SGxNNBXDb1Zy",
  "key5": "5HkNK228f18Ho1tikKufwQd7w2WNJz43oMHQqe1vx7j8GvGhobN4x4rKrTNPk2bn7UiQx3ejhRSiYgEKVSiD5Z3Y",
  "key6": "31Gz7RFUpXWzpg9M9CPvAgHyQ2mV7tdmVanMacQHuJLvUdXxWhL41zzt3YP3s5sP3i5t8Nq9fwhvhQMU1iSi32fj",
  "key7": "5zawLpjhEDhs1YdopAEBpHzMkePMLeVnjY32UBmsAiFbyQ3F4b2hwG1ijKBtTbCSDwZUWgkrJJMYmX1Qj9qHUueH",
  "key8": "S32zMywTK5XMCZTsWpz1t8XTXeATsMYZfoKMUwW2r13MhS6xuRzP3kQqMePerPYe4sWPiQPt8prR46SGgqtb3RB",
  "key9": "KZG2kxC5dizhbj7ZA1wJWYk3Qj5mi8qYm5GGk83iFPDmTi1jhmoFQVMkCjDnsgK4pjjKDRAozKABzPyr4tLUcAb",
  "key10": "41Sgmefa2U8jNUbBipNUdW5RuE2oQU8sBpc7CBQKhGncVShMznB43Yb4LhaQp6r3dWnL9Pjuzx7WGJzoupWzPVMi",
  "key11": "XqvMM3TK9p2XFErC9JniW57mhFyXScYsFaLWLNRcYo2wVS5h7g7rT48U8N9b2fDmYz9Vvf92WGpBpjf2AgRcwqU",
  "key12": "5cSv1yAaXdN3N1m7pb87SSRhqPo7uyJEigD9N1cL7a64WZoSdrocB1GSzzbtJMJunQQogYg879FkLuNM1bA9MMGA",
  "key13": "2Bca4BwqUn13yfGNcTBYPPhQ4UCR7Z5iaQQ1FVcLusT24eMcJgtnq2TY7kjEqsVY6ueMsNTBDrAJ5dr4exCTvsGU",
  "key14": "3FTT8QAs3c3vnBrsAyaCNfbaht63KHiH6WYdTEFyScnn2jcyFJZuQciP98cMA1ZK1YgDoUfHY12knHq3rTPvmA8n",
  "key15": "c5xBK41BHSAEvkXg5wx3C6kaFkmUZxKgr1vg3CFbDGtjCBmbq6KNgsN7WpECahT6r2P4prSjJ4bBRcNKejtGrGn",
  "key16": "4QAiEvG26U9zV58xqh78rK8z8Dj8cU1W7f1Ycm8enRhEXRQsLccsSFEQ8bP2xna7Lf9dY3eY6sie8yyep6vYA5HR",
  "key17": "5shBaJb788a8UwCjP3ezTr3sy23X7SDeKtc4S3FGh8tkLufRSM8QP7huveaqjmT6dD8s1tHvbFqx6g6eid8sS1wP",
  "key18": "3FoDnkGzycK6fiFvwUs3cd97G42BBz1LbBixikz9ed5oh2BdR3zm1ZbbFgCwjKdLxY9bNnTU4C1LgXKTkuJui1VS",
  "key19": "4JDiFRRkW85qU1wEiqCCbvwWAZJG5t4jd9pjb64pFk8qf5a2nBmzyUkoRNqPvNdJX2iFzSys2m8TvTqBqgnBivE1",
  "key20": "5fdQsSdachhHFobu1j6V5up5kFCHYtXGSqEmm7pnjw4Li7ujffEtPLwieQALDV6FynVBYFDA9zrwnG25QkrjqRhw",
  "key21": "5ajce1CsZrfXpgisPYHHhhRdjy74ZiB8kEBMU6FGPwCgC5dqn3rcVQudfCcpbAgqscbAN3pSgFuZBgHW7D2SKJty",
  "key22": "TwssQ2Nkd82AW6YrRARPDbsrXQXXmsTmdSJMfLMMYcSY2DZgaNVJ3AVXbfdHVuQawybVP9CXnVSEMYm2iAoqnAh",
  "key23": "67LZaYGEk1cnfdH38ASQTSHKHMUXAkyEodGuRxqYg4ebAtmGfp9jeRbwM8mYH1iyS81j8zXZYQJ29a5G2ht314bf",
  "key24": "64iEoadJWSaChPafDWAm5xWRMaABSnGbSRdYrLNxQ3KE7NXvhDZzijd2AUStuXuv6jwqHgwCLMaHxFuCWQeP1shf",
  "key25": "5ia8MCrhn8g9oA9ZHf3XQ84WB63i6VfehT2FiaNRcgoEZy3GUnqeb4By3v7EearTGXTgvWKUmNfrh64RFea2wzU8",
  "key26": "A19bQussRqx58Qsqn1zpRcLnPMVxdRRdyGVJFRK4mwst9FuuvjjQjGxWjd8R7zkmf4G6wFMjXEsZawCcFQihB8j",
  "key27": "s2YwVMtwxGxDqCHVwDybkPnupwGizcwqdoBTZXkBtcd317u92ARz7qvJ72hFus7QFXeCck2DAsasQvYye9qvzaz",
  "key28": "4aqXgrHFBXkcbo5S5WkSB4MM77VLYxwfmavxhMcL7DhRHLk5TwhnNyg4uiV4HqrDucFvJ3FTUifaf3vga6zmRzZC",
  "key29": "461nNQhAjb6MkRo4ag3qeWEh7CubBtAVF6WNgiQ5ciAevk422jtc94T352gbfFM3zkBJ6BUQJidmE8Y6F9ycEirW",
  "key30": "2KCBWNag7axmVDC7kPv3vP7KC2V948PsDGHLJ14koH6f8TAKkn1TNZNQPQikgpwcHjQtGDA9ScFwcty2fp6iuA2m",
  "key31": "3RKCd67yT4aBqZWCNrxtrC4aNDkyajFPv6JNBgkjZGstUWsUTx3TL5Mo6uUcobVxGRBeiHcJCZkawcUbu3qC9o2U",
  "key32": "dDbz2tGQQrj3pEFbjsmBJkJxkvRZxBfoySKNkUoZ7gHYcVcL5pZsA56q7DqR8whmxJeyNysPSkCSYRSm3KAuNDw",
  "key33": "5Q1kKQzCqLCxGxKHNULWffvqVtN7aSRBmJCwndkUh5BpsGePAjU8dLsF8z3EtM8RY1uM6d7o8AdcFBqoW1mzeaB2",
  "key34": "3RL5iG3KHhCqKZWv7qCo5dSijaMfcJztEFaDYM3Jf86K1e8V9Hg5ALWy1UKAze5oheymN8ByaQBcEAGVwsvfF7Dc",
  "key35": "5Pct8wHM86dRLXB1UM9XRiSfiTmjQayqdYoeCfqXdybAHgnYM9a4CwgFSona4KNVvDnPcG8SR71dwqcTFahHtyiP"
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
