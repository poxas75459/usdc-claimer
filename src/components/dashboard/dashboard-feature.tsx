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
    "3RDLeK8eTMsyoQ3RJbYRVcVJSjgSvNC7m2XZetvfJcEosDoJKKfL9YMvvi2yFcGE6jojqnb1QwDEpi2qVMUGJhXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3185UxNNaLTxD4QwtGRUnDYwDZWaxxohL5wEMXNpLz8pK7co6g5fvQmEoxPpfHSi2j7EwUecyKpzSDtvA9jDpUvP",
  "key1": "5ZF3VqpL3E7QzqXLY7AJBnEBNMZcTgXTU27wkU7JnusgBeW1gfan1Nh6KjRS8cxGdF1D32jDfkfPN5aHMGX2wMjw",
  "key2": "yvnMDNSBQSNwwqhVDn5gF7YaGoaFkhHGKkJtDny7ezzsTKR3NvNjhDEwC9xewqSRckRCbMS452Spba5QwTVBJ9Y",
  "key3": "5228VG7TidkpD3eMtSc7Z3Dc62hR4yV3bJYjxeWzhFVKBZh3D9JSjPF9zHwCSZ8T5qNizBmeXjbLiBwk2jMhrUkT",
  "key4": "2NdBLW1gDmiwyc26F3YxnJmgUoKnacoE2u4cCwTvTDEU6DDqFC3PptTyfmdbH7bgdC4qXncspoJUhcuQ9S4mD2qd",
  "key5": "3XmUSdGsZZ5FvqRh6bzrZT8toHi3qnjf8ceSZHQzLuCubyjGkixbsDUefs2orh7ARMw9FKkE3cs9V1RoDaDPXYZJ",
  "key6": "2kg2LweXucYUrjMsGydCSxb8J1wNqe28EfdT33p2BW28EGDmVWNJSe2D5HXDPNYCNwDUhQp5cCwvgyExwPvcRWdS",
  "key7": "5UpZobEqZTX7z6nPtwNc8GGZsJEyxkXfFDA1QHFbhaok8Sb1oMnABYvmo6vKsFV1RVNzFk5v5EiNXcWTLrgCycD7",
  "key8": "cjJisMz5Zg1qMdy7BMTKGQaLApsK8we3eD4nx7eaY34sCW7LRuMTDbA9Q44HreyoKQ7UMdnjqxQpdFGWh71MEA9",
  "key9": "5KUhbWNuh3dgAJC3vdCL2JzqJgn5rJnSE9pSLLKMgFzwKNEsj64xyENJj2zw9P6nayeaABDB2rYxjszSuH2idC1",
  "key10": "ifbB36i53dTVGCkTURey4qqaWmXSgrbr4PeM1iTmVMKvkWTPa5KnzW3R2BwPgBxj4jM71WNoypMstpdZScDNVTZ",
  "key11": "3CFLuP77u7fyT5KWHHBWjwcQjuSLmMSQBjf7ZqSVTsdWD9XmbTEawKYkRSdVKaeFeDaZ55rMe52U9kkHNQoi6Tto",
  "key12": "5TacbhVF38UwHJJcca4oEfoU9Pa3Uty2RnUoeQr1pz2xAnHySzcqtmxo5gV88q9PWfBNRmygZCahsaW8Fxdg7TsZ",
  "key13": "22pj6G8wbERRX8Tda8zE6Znq7gtHVoAWjhUEFhkeTfNn5DAAT2nw7ybzxffZsP5NVqEemwH9adGSV9r3ycdZ2Wi5",
  "key14": "5SArYGVVGHL9c5M1GybGNmRvVWZHEVkTU43uMXizKd3R2epjXNipXcEW9hZQUxbsNyas9eRkd85pwp4BdgbQZKiK",
  "key15": "5z4ndtBuuX5cY9JhFfdho6EkHKwJ7zno75YPtuVVKmp8NTPbWjQrksvsUAq5sVckCPWGPrfP8E67nu2SMerq9rPc",
  "key16": "7zjeccTKMir2Dpe9R46NDnehPq7UYzrszX2g72z5mQgku1QdjJrWcybsPHi6Fjq5thzAwhiPc6ZzrctwKSw9aRH",
  "key17": "5GgMtRChL3PubDwgMAC7t61JUi7XwLirERTHfRY1W6Fh2fP67GKvfrqU1QQUHtmUbK3BsyWx1yPxb8rcuc4BMCpJ",
  "key18": "5qBBuWC9RDsh2gL65ZArX7i7hCKdyv8YX8CHG1Fw2iDmAXbawLtiKKACLqZZLjKd4eosV3yjZgXvwtVaieKW8Jd1",
  "key19": "4U5mVpfvfdM6c59eAHSFgHcQF6ZT8v5ipNzdTvDnAhatPNmvPu1Shu1KvwX6RXYDvot8WvGHWjP6hpffdyFCcvQf",
  "key20": "3mp35sczDKMZUfLTJ9bWhM679pw492R5sFQtBtCVUMxqBKnrMFSqcXexu4xejiTXe39Xwx198R6djMBjAj2fmi1E",
  "key21": "2o3ss5PdDvtx2C4NacuGwG9TKGivi1D2Bomtijgh8qyrEVNWUQ6EZYFzftTAGPbVpKEbskVqWcusk2sG77TqpL15",
  "key22": "D6wKHyN56gWCicqPYUdayTVnB5Egzx3CUnUd2EjRBxF381qT5n8PfhhCGEfH8XmQC9jQVrnfESP9SfnJQDyv8Jn",
  "key23": "5szWcvajkd96YtF9CJj4DuDbZdThhiSjR16SZjvksteFTVqLJsDfCZi699jN2wvikT6ejhQZSTCydqgyQXSNKv1s",
  "key24": "4nunxQBbVBH8TJLgCs5kgPayRsvkCgB8M57pA7RqMa8VRQVmUdfsnm6EgRDrtQNJcCX2iCbeV7nCigQ29qEX6VQh",
  "key25": "5fEpzhsZutZQp6qfpzuxNFJbPfFccG3CsDEAMng33Z99xsuYvChGPfcrewkbkRkBboHvTbZJDUGAky8wYEUDjg9",
  "key26": "5En2WC3uevtAiMMJGHDqQTgEHDn3QFkkRaiYhX9b3aTCZQJbyQtG3wmwrYmp5qE4gKKyzPrQXNdzDZJiLfe9ssyx",
  "key27": "53kedTGDPMAXd3gUVVRp9mF9KTkKMjdjxMjECD8SNoZYoAQLcaHYVgZ5WAxPKdX9uBpqVtGrKe5z397nva75jNga",
  "key28": "FWecsRcjLHHvWeqgCBr7Amr2w3y4PS5UoNG5Uiseq8EizH4ozNyERVDKapCutp1uJKTWVNsuXThacnqeF6Xptc7",
  "key29": "5iCWTS5Gs96S51tBQ2EFckvMYxgbK3JJrWrg6gpFgYnuGQNMxiBtGVjaGdn4NrjSW12ji7aScbECXKaDb8dSazzc",
  "key30": "44E7ftPkxNYtd6T2dAC85CmQaytAhekcVKSdDrTuwXFdAJMzxd2Yp54Rmvfz6wY7nxonoGWmsbse2FuLtLjXrNBA",
  "key31": "2QS7tjDnyEeTUgGkq4n7DEiuTG5wHpwT4NUtRuw5u2idtp8Hsie1qxsZKhVTh9tcV27bR1FkPyvnJZKdxJZz6USZ",
  "key32": "gYp1k2MmFqbgEC1p9Fbi7gXPJGCin2DCmrd76iWt63Je6q9xMyL7v4U3AJizdjiD76oB6XhsjZy7ZKLF5ofypwm",
  "key33": "53TqJqnbrvEtypYisyKa63vYq4Beb9fHYuijMsxWWzLkCXGEYY6pA6q8uixoSsqUW8AKFeiJ5mtkmBp1NsRck7FY",
  "key34": "4scYMHJ3XXwCo4kZPFBoQCL1ufNwx1ddSUADvaLfJ6Uf5FvjfikeV7aoHWV69t3iu6EYBeMNthxmo3yVthHG1ZuR",
  "key35": "3Np7XcWmp7nFecY5tt2p6FewF8fVeEpEL2At6EdUqgqWZygLsG1MVbzZFygSYYyuLM1n7srfiRJnheppEz5oi6ei"
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
