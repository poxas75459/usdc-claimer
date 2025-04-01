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
    "5eFmoeMt2WzffUDRW23jFfUpJvo3svEMKXL18iwpG9nsg4H5vjsGEvQUhrJ3pGPwrghTRRbnkWjEa9dXAjtpGZYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M58YxukntXCGufGLXYVy6jwe8xR4f5ynr1gU3JhMoeuxKcoNjCgsEKPESUXDvGpm7AtuzEw542nmbY5zedCK36Y",
  "key1": "5kbf37KzhgTdKPiHt2nZpQGohxpoRs9DzWfgmPMcsuznNFtSb5A5ZdAFaB1VJMTvr4rZNPT9HTHbN7pdhj5faoBt",
  "key2": "4wvzcfCLVvp7qLSdwYXuZ83sZDHFeYgdQuDuTuwurgs1kXtFr1qFJK3Z5p2XKu77U5kczRwXXrJ4dLx9rREeEiQq",
  "key3": "2dE3LSJAojuTmwFRba3qY3ry2J5DJYg3ftj4uZ2cPEjuTR3uk6U7S8uRsccvGqkeDh9iJB1cYwhE4JKaRLJs3Egy",
  "key4": "3FVMDhwTrz6wUmPuqyW8ew4QnnfwckooVhfiXdmAfSXEigWBJH67mEaGf9DR1kgGiJjsj4vsfxNfj2zkJjZ7VKUv",
  "key5": "B7yJi9ux2dw6DfxV9XaF6nGxEwjRZP7E9YYy6fk4ALetiHwpvEQbqE3MFWvnwNFAbcPnqXsnwhV83SgYxU2mAfe",
  "key6": "5RPNo82ZaJgwgGJ5hnXaWbc9BLjW8xPtKsgRWwKEtCZf6ixLfK1pAQtsG72uHAFc1s9eYPG2yXKMP1EhajW3Gpx",
  "key7": "3Dz8wNSfEH6FJsicL8NumVcHp2PZNw2ZANdu394MRqdruEywSW1tpKyghd3K15AjF2wD5FRAQ9VGWpQy2yEkZ97V",
  "key8": "5YBdwg3frDHGwvanyxGJjrx46fQkaZFLfiHvZAfmdzSUsmHQyDfzMxhq1uFCukcug2T59LhowaM8UJy1kzRhS69d",
  "key9": "5cHDq5uUXXPZfZiNXA8GfDs5kSz8VHNLvBtwRWxy66nNZ1MwJrzMkfshASziFX38UQspZFdK7LQNU27mgZ52PPZX",
  "key10": "Y176ejS73pzcHWkkCgoh6v4bhdSaZSLUKvfbP5X6T6mogYXuUKtdo66ed6mJXQyDbpbGNnKuSLD9eUnXECirXDt",
  "key11": "4RQZNZYaoPFph7Piq2Ja9FAMiy3UhEeJGSHMXpBGCPhD3GdTT4xuCTh7MbEbW9XTbUqsEYyqcJ5yizRKeXGZ6jwS",
  "key12": "4HhuLoiTw4iZEfWeDnWeuBtSJUAy4UBwbSihDJNJvkwLCxfh1SBGrMsywBzDkKsX8Bx7PtACZs8amVGjS6sSVUWx",
  "key13": "6b5PjZnF4Wpnr5QKTqYqvTXQhvyhGK6aeQmNpkCCekUbsBPLnJ57kShSXPUDSnBTm97nqoSBWvoCQQKaASbQY3q",
  "key14": "5eCzzTNoNBccdTa5Zxne86Xn84xxFxB4Gk69v4Rnn9UL9Rb1mgS7kMe1KBUiz6EaXmCVmpkE8rs5aMoAaNX5R4C9",
  "key15": "j4i3Dk23gNSxtUQWa9HpQqA3Y3iiFhT8uW9oeQZPRQaUs17TD9vDW3EFviSAn6YTcDxxgTXTk8uv31uBzzBFTvW",
  "key16": "2LHD5rDzxU8E2uiZTxMuqFvoqji6pt98N1Xe3q2ysHfpKwrjXjeFcxrRViMLg24TpJRTXuxR3dYnGk2AuUfSVoyS",
  "key17": "jipWreEmWD1iZKuRmy4bmPiUbJiGTnZwSsHmRrYtyXKzyNDBtrTF9EKCPLTQCcf2oGJVuZyj6hdX4s6drb78Vsh",
  "key18": "5pzXERbf1yB3YfLomRUZUP1xwKxkXsituxFBQHCmABhh2Q5o5Nd2iSEtodtARvLiWeb69iMvU3jVrFeFfHxwqapV",
  "key19": "3uySZdLyqEngfLXPH24Qr2BM3Kx3EDkXNsCG2vFQ8AZp8TLPSgCCHPrAvPPiBGE9U7mUWdZicXBfG7AgFpsvZ79H",
  "key20": "oFPGQ35dc4Bq36nL2StPyA2oB8tgjzP2dEaquvuVybz7MYapmRKTXaUpY8rs7zA2TXwzBWthpTahxY486EAPjTh",
  "key21": "44vkGTRHrX42iUL5hvqG2vK7t8GW6MaxyhfbyWM1GYhF2ei9N7aHrhLcYPZQcJHzDtZ8CRvXuYmQ2jxpr9NyXhwy",
  "key22": "4E1uH2j76kQBnPtFnQUA4Cu8ueHeYncxXKivkXbtiv2UUKTjP5vUBxgUiv1qd6k1sdUw9z2XnMaeZemJ4rq629TE",
  "key23": "293zEysE3dnUQatXtNDT1XeemYsk1QGjMGLBX2rpUnbq5NNHFWDwkxCWXBEoyJay2tw613HUqQ9rX4KSqTaT4RiC",
  "key24": "4og58RAJXzikKya2pEPo16DttJBYxoSzG7mapR9PSHZuV74a4ptJxoeY1gxburKfgzmKLKxHC7u4ZfYGKjWYABA2",
  "key25": "5SUj7XsNrPYFNCfuXyrdhWqAGcKR9qtsXBb9tvxyG5udiFVNLgqnpQSdgWLTA4P1uPW9xELiiwzCQajrzShpR1Rf",
  "key26": "2kSAWfx5idnNv43rzheWiLjZmqTUA44rvV4JNCQHrTm1WQmd47KZvViujswtE5Z5ct5kHH39ZrN3yC5pvwWdw9kg",
  "key27": "5HwkucQBhuXrDGC1nmzc8ibE1hi9BCwRxb8ig3Jt3xU1xnAahtPveFWwMhtagVNqzJwapKta6fgrg4KuBxmFusQX",
  "key28": "yi6MbKSeDf2Aopa9Wv52yvmRsNb8h4ZwKHZuWqvMKjyvdvjwsKnryMSS8kidoVgsh5K9dqpkZYF3R584G2qUjG3",
  "key29": "4fog7HSvnh51xsDcAGkohrDRLoqGm1FmjPsy5Rdw2tyzz2TZS2UhGJMerHc1KNUsvwd2tkTjYiQ2WctuD2FGhZXo",
  "key30": "3jJz2zPGsx944SDFA1wQ2BuLJzqYFbi7C5MC7Fk9QtkhrViqpFv3aoEB1KjAuy1Ho1fDWx52SHta4KVfcpZf6F5P",
  "key31": "5P2yhrHcXzzFnyJioMHiQ6dJjmERAgYmmYELgVJjv5rQG4HTKP2skE9RxcgPwvBvnpWWQkiM46V9ETdeg7BjrTgr",
  "key32": "2wwtooioPWPFS8k9b8QRirdstWePmDjksWXP7pDRCHt2832AbtWh3dPYP6e6wUMrbLZZSUTSxruiWz8uZWEdi4fg",
  "key33": "4NDJQvBoHFU6gcg3DyhejLU6aL4cCToCRoPgZ7hHCcFT7ML68qZTaWu6hkafKo4BNg9eDL9X5DsCQsGQGrjZ6oHz",
  "key34": "3UmqdrUq3grepPS9P1hCgnyVD9wGahSgD5TWfx8ahYRRztVrXa1mbjHQhd13e1thKFkaU4BguvrmffkVrZBEWLVj",
  "key35": "2k25kEUyjVQ9d4djcGy1QJFaMzP3copTG112QZWZj5NqVKrUycnhoV3hiZ8myLiSWWxq6QcwYD6boaw56ghLRbwZ"
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
