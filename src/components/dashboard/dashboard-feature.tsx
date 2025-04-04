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
    "2jZWuAixNJbX8oyK3g8KrgHyJNQ3yMxZzNggofUwg2MkbVcqbPHETwJJzCNAJyGeE2bmXTvAx71eocLVU436ePos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XFw21JdtM6GNvLDwDxyV1h9A7xKcBCCuAG8LCgreJFFvgvoffp1XPoJf7GrpmZVkikL5vpkW79Qa5uXntzzUDDX",
  "key1": "5FmL4PgTQTFeKGHBS8grNYAfvU3WiTjiLULVnRm3FJpQTXwtT28aen78KZuF4bFDADZqifWna6JhfzELTMBoaAcX",
  "key2": "5ndrQwKNpqD5QSEioVPCb8yicrYLPWJcb9yvfbu5i7zX5e8b8z7qJyJH3fD7eW3d3jaAscLxPqH7TkZa7NTntaoL",
  "key3": "2WoshbhNiBHxxPZ3fMrWNS1PHMywHADnh1eQqMBfr8rtustYD7EDrziCs7ZdmUC9cXvBkcctY52ycfa6bjmkHR77",
  "key4": "2bhpXLn2fVaugoQZpcR8GRCXvoifYUYG5q4FH5ehPjU7sK1WdkRLB9ySfDMFZxZy4WvrkPcVybzCmfpLyGQmrJx2",
  "key5": "5wdSgE5KV7DK7vVFfpKVJxuc9Vhb6vnGQePAz9gvbGixEXnLVvHUP44tUdByXmpuTKkN5ZWWe5tw24toaRjmZzPS",
  "key6": "4cmpVSG7Ksu828Rbu9pRvz6sECdipQcWryUJGUxkXvHxpkLSduqmQnrvAoABmxRKnFxUf6VprM3Gjpry7UaSHXBY",
  "key7": "2nRseUovWJUB3toJRdk8PZM7y3Lg6RTaKxkh2J31qfohG3ubDdgudQpgM4kTmHMyQUbxm5obrXafqtu6g5p1yPBY",
  "key8": "5QGfu64Snw1zEi3q6NsH7yYkUAmuwmmTyX4DXsBqn9nKcvgK5mGZmKyZabckJcBT6hoB9oTqHNdadSJqaMe8T1J9",
  "key9": "3QJcp3iqxw8tXNcgYJwwoc7aSzdF8nMwpo2TbCoVqWrMFLpVh2iPoMpR72a36V9X1Gg4HTfHY9cu7aTSunrS9Jot",
  "key10": "q7zzfbKgnouseoaNvkbWQNYxdpQZhSuX9HibPxivxyXTSmZstoGRjpXfu2SWNdpogG9PTvCJrAiA4xdiDQaoURj",
  "key11": "4HfStmUsRM2yrsuA2JfPoy3JYX9ovuUuT4EpquLesdpSPTHLTjc19tPzq6tVArcjiqtBfnJhqdKcRxW1cRb7ZvAp",
  "key12": "2WKcnxD4EWrVrXfu3gaYnrptPHQ2pxgkvfo3jt3L6zDsWY4At9bRr64qvPDR8GS6xBLn3HYLcfw7nZjkc9MdxZRD",
  "key13": "jLPXUKtZq7a2BoyJdNeqWGmZLPsoTr7pDfMKvBZAHYWyfLwawrSKytVNKTP5axRHRTD7gS1EdUKYnxVVd6qdA4y",
  "key14": "36vx8nXpKdKCzsq5we4CqsktbUwx6Cj4fm8DtFmuaC4i1TCUJsExfALbuBYxZV9BhNtyMkAy1GpDT7cPACkhfbdw",
  "key15": "2aZzBSJEmknyqFgn6WuXm84JTnr9Vqvpe745jsf4D248BAzZBQjP25h9rfYrizYQe2ez2d9e47725F2CGYArKv8W",
  "key16": "3e1J9qexXJi5ApfDqN8yEYmJjK4DTmY7NgscTRwqAdnY8TfUpYjiSK8Jwv7uWNTGkZQrUVPgEA2jCjQ98tfHW2XJ",
  "key17": "3nMz4vYG6bsM6eiKEjcbvK6BGcZfvgKTsu1ZduAFPAshRLnC9x3MNr3gQrnmrgj8tbzSbYnUbZwMTY7GQSUYbtYx",
  "key18": "2As6kuoWWWWvdNi1VC8zmHLv7e2zTHT7xsLMte3hstmGZRQpSuycBRtJXrMyWBunXNE7E2S4XKcgYZydyiRf1t2y",
  "key19": "3BC3nEPsBRK9Wg8sP6bKC7zUDoUjvMLcziUePikBBqPfxvGeNJLRYXGsKCE8mGsTvqv4dWiNWXUPuCoPBTyH5pAZ",
  "key20": "311iZ2mcgt3AXJ8SXkiHj67qP29KVKLeDDBKTjXXPuftqJdyc9i37nXhAUZkKQT2ZV7XfCAJBn1Azz6RppjCXKuL",
  "key21": "3YTcxmkzicB1aDzxZqqZEVmmVCfBkdF79ATSs1LaKhqVgkS3oBZhae3jeg5M92bVYoUhpu3EHpdTnXrVDA4KvspJ",
  "key22": "57cu6N8dHvP2TGzd7GCa8VUy7xxJXXhGcQmDqXGu2bKCtsvoSepeqYTcum4tR8bpnrmiBiu38jfo1AxwD6Ksu2yB",
  "key23": "3rbh7VzTkkDKRQfgRc2jtyvQJfZu89m3rgSavVq4SS4MnwD8tFi7TMVnYCiqiCpv6N1K2dNca8TfTs2vGDUSCkcJ",
  "key24": "65YLwc8ZGfAaHjNsSWUfTxPT7LdGAeaijiGFq7tYq3WfjyHrVUTFZA2PBA7J7keyffEVukz9JtAkkq8v4oBxDQqK",
  "key25": "3HhWhGwWafbP6hrAEVhrDZ8AXwdjnKvW9iuAFshRGtg8RwVwJM8f8DjAx968oAh2TFmWJWngrtDwx4AwZJhiWhna",
  "key26": "4kpRhXQ6KBVpCoDHK9z7M7NjcFC4WVP2CbwfHgh4oWWoqDeKUGEiD6qfiiWjAn7zcB2iKNjbYUKJUMNGG5pAhNK3",
  "key27": "DmbUAVP4BN3rTA2tjjVzRdqotjsvrGG2Mb5QWhvyxcVbdBxwXTNHqLN6oT4wBsGeH7bhSC1mdQ8H11jznj4MB8R",
  "key28": "2A3cVaXCsW2FkZk63ZrHZ3SD9v7VR4NjQTrbhNpnhRjxhoUYFXGTr84isNdDSHiRMBtv1dVmYjsVoWutp2tMjE8S",
  "key29": "gbH2QtD2zffyusLazyrd4sN1BX9u1gUAYdCJL4CwdtW6dCuspeoWnjMyCW1myJYGDKae2rhrGvivNurDzBDKXrM",
  "key30": "2zkXfwv39ZKFWDQSpHsD1ZY922LvS5LqtQS3qfVq3uAxtNDoM49kjg5dbBFCeeka8iLUoribXkLbv9jEYg7nkrUP",
  "key31": "qxm2XATVBuWvLfrxgj2nbqQPBKgVR2wFAZ3aEGwFD4chamfWF4ZzNizHWyBHEs4o2Nmv8uoC4tFrvyRMUjiQ4Qi",
  "key32": "4bHc7op6w92e9RbKgo2poSjUjSHExKhMysQFp3cuhFfnq4ZnyfMVeGbr5Nh2Z4KaPnogBEahfFeTXcFnkpejnHTq",
  "key33": "E7j8BiHnDRYyKuCRYrJDnzz2NSCPdJrH6K5oFb38L9skCVw2x73kxJYX3ey4edQf5xj4Ji6fAZ9V9HZUtHtmCf6",
  "key34": "59atY7Yea8opSsLSDX3vr6rcuEhqk54NeCtJjmEfnd9PXPFsFheVHBW3JH3srTStFQQ2GWDaqKBfNb3jmxp3DDvo",
  "key35": "2c9hKdrgShmn1twdzsg4DEpPPss9ZJbqoi8NBEq3weqQFjXsyrvyzA7SwbGq5EtBr4FoBqzRNJ6QQZjET1GMvMY2",
  "key36": "47ShwmHNn3gYqJENZh2BACkK13QKBkGvHjdDVVNfzTovB9uvw7FycC8AzDx2wuRVU8Jjh3y7AAFotuYMpzZnxFrc",
  "key37": "23MvWwSm9CUYWvL9orNFbNXt5p3HpfzDynYnMkYxeTcdL27HGAbyrztXppJYSWSF5BeVwUNhqfkMGaVsXQcsuHNb",
  "key38": "3TWtL8QQFCWqpGxa6fYkJN83xfwdp6A73DtqPiJkooHTGoucPiDc7GVk3FbTjn4MDxnzC4qJu7Eix813xG9FFqV3",
  "key39": "4ku1EGWMCNPPvcqhDGr6UFN6jror2WSTSn1czQ7qPWhRdCvFeAgKAc8N9ChX951BGc5aoDmyhBLyaKcq8oMZFZMo",
  "key40": "4Qh8ASiSLL4X14zAM2xQLok9s9yD6Md4puWYAAu5BGWXTfHCiaoxSjjdsAfc8xDF8FrDCKQ6kGBE5uuPtBKmFF1E",
  "key41": "4oze1cxSoh94yyuSUWio9jGPpCd3N4sQgSk4L8VzLggfKpgcUFfJ6tX4vt4bTmciyRGNHorVmfCPjM6t5SUBi6wT",
  "key42": "vp6nNJJmhUgDqKPTdML1R6eoFUHuGRiYVyvxPgBobUw1692Q4j2Di3YgdzjLUqumcazk39a49pEe4mdT2uZh2in",
  "key43": "33p3L686ZR5iFqAwTouXuayXFzabtKNuMJUZZ76sFNR2P67kVirjcReWHBFL5TTPKLMoZaKNughw4CdezG6hPJ9s",
  "key44": "3WwZjh6DUdyktwmBcKQuYkqAHeaZqX8YiLiFjsYpK7CVYgbNYYMDvbhrwbaR1ASR6tSsTivgE6fYNG552wEnjVdf",
  "key45": "4wa1Dec21XuQAP215uqdizsw4tgt6kyuY7DEmEwWnSiwkfuU5Q2UwQpR4eJB5xPR5VS79vVd8X6NDfewKqxQbM3J",
  "key46": "4J2DzExniMrdZejGyqHJ1EZbBjiffsMrcJcE1P4iyguUiqDnmm1P3mxCTaVVeyfWd41QEzacqepVhSksJyvX21id",
  "key47": "4FEYrgbx2kBuptgGjJgLPY3EofkcddiDKLjqCGuRcB2vxVSeYJV8ZvvE4RWLRhEkaLSrLm2Hu6rR67dpV8kmjFbo",
  "key48": "4vhFzbd8SHK6g1ASt1c2xW5YzqB78eHb6jTudenDff1f4An74fknyAi1B6dr5z5JcEoYohxwCvivBUeB2c91g4VA"
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
