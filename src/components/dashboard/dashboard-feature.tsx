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
    "3yba8S2C5zo5na5278beNw2QCWnb6hZ36kh3qvBn2MVpGqAsDRLmtoFRqebpQYeTFxj4w9AMZsLkvusG1KHoEXkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ufq7Umrzd3ND2Wag8FEJEquL6GY7M5vs7WdKLM84D696ifbzAC7nxptCRSabY7PUUqdgcTiLK31aa9di29mEpsA",
  "key1": "cbimVj16d3Rtq2TxjGhdMiaNcxDABKrSR6JHebULWpDCQauWAWiGoG8rTM61xytrb42EzVMWtLpBz3XKTX9bm9Z",
  "key2": "KiRNRwxgWHbrPoWCRZqSM5PhNKmbpMGv3PuCnZ2JeEMuJBg6Uyx9JBGaozA3Dz8xTqFrUW6M5YSygdYmzGGLEqi",
  "key3": "23qJyiyUZT7m3UVZRCSLkM8SMetzxFf7MepFreuWyjb3GtaU9oaZE2dtcudBaGR9mbnkk1qp5Bg5eZmTTV47MU8K",
  "key4": "5D3LvJgmA7qKp835oW9U2XHyZwjgeN75jXZ579yQq7pN4BDWWgqvtjiGQgFmm77zdPtSxBEMk3Zon4ZkykieWiB2",
  "key5": "47ayZDaFhxLxbsstVfyKp5iM5f9vSGGmPgeQiKe7FhgTgM1UAijbjFLfWTLBy4zCWSWEmKLdfiwvnf3kx119Vjwg",
  "key6": "2PSpYcu1oN1ouz8SaWVrtf3u5sYbuB5gNxRZ7yMyU43ENRKEMzLio2qcNtkyUfeqzAH7tA32suUFyJ9HdK2AdGFk",
  "key7": "2Wyp1PALTwHpMxBG4s4SUwJK99HsPcQUrQPffvHWqtbMyavq1ks61nPJxPzMyKbm2ZPYyA7xwYbiKmtgLCwfWd3g",
  "key8": "3hpRmgUwFewFxfYg28se2tQq8pNqhPtND7Vpsuc3TtpoLWceWtB2J5nnfH5BPPPdoyPez9id79BR6FGuVC1ti2sn",
  "key9": "2poryXQNksYh4i9n1QenKzDH5JcWcDd83nFJYMA2AGekfuBj5CgdRTkYn76AkbLAURDUW42dmBpE31txFU857Avq",
  "key10": "Y7xLHVCA9ZisoMhrKKRvANyn61wpKEKp9Wx72m6mk9e2q4XRe2MdRkHqWmRvbq7ang6qJ84pZzGFAN4yGLxaw8Q",
  "key11": "5yyhNVY9aeF5npMHhS94wmgeBCmjsuEJteQMZDWGyMwGbyrrXMFXyVjmaH8mQ4jWVzWzqUAcB1gnXMkrDRELZwch",
  "key12": "51RWii6WxsHJYnsNuTsL17UcotE4vrdVftaivw4SzZLfRSUCNR9ou1cot47K1qRPEWvUwXqQiFPQ3QhkjfPTSeyT",
  "key13": "uUJiaMsbhVJFFwvpSbfrXzMhgvmdtGbgpZFjBKxXC9pocDtCqxbZNnsB99XeCV3rUPAdkRMtaTLapTGi4h4xCi1",
  "key14": "5vzVMF1xFLnCyEEte4jYbNxH5wUWtYYbccZJiwod22QRARsuhuKk3hvhtHN3mP8YQr7WKFMYXBnSBmyKBU62H4C5",
  "key15": "2isxuAgDiXBPZzNv7L8ZN33sw3dAeN1P85wKxQXkvsJVY5bVjQh9CsKeynEth2YDefuT6g2vUhP2FHDjJycsd5XL",
  "key16": "9Awif3Ys9y3W6Gaq97yYtrRNEcpet9vbkhGZ6WaVJGMxHpXuX9Eu1eH3ffxem59rUFnCdbHnwR7mcnia33mi5ao",
  "key17": "dBMuSYRuQBuSgSmnjzdJqA7BWQuEiocv8GVtB2QuN46u48cfSpD4ALYoYk86w6Eq1TSu9XhXAjmfDVFviAiXZG5",
  "key18": "63n9LhEfVJERmsKQchqcPLNf3AusTikGXge9DsU3P4zW6vWWxJX65wgUtj1oApt6Lho1cW2k2S2YweocoMAT6HU4",
  "key19": "fzAVp6eMWZZaDa5L9Y6tchibL7rmA2CV91WDnW29AK3icbBxg6cxWAuUPqy9G3y7cjBnK6JJz8WN8GGMMqn9KrL",
  "key20": "5vBPPEJJn4bQvcUWHVdFcjhbaL7t8TUc4dV9JXMG66b9mXNCaCrPmBevFtBqGeFmi1mbx9SJsRt6gAVbzLWdB19W",
  "key21": "48dBKyYZ3fuWPgZJTjq8rartApSqEwGWQJ87AFCvWbN4PohXVKdVs9vc1xkysfnNWiRKcWkrXxQfDVm7f4ZvYfhY",
  "key22": "4SDrrujxbMmkgHnxzPUtcAafjW1kHjmPDKRR5kV16p637As7mVaZmmdxRbBVsdZ9jHY5uX3UgbBRMYRSXHYGgCdz",
  "key23": "3irF4FUqvCvFYrvPaHa8VPvwrRUzZ92vGMzh6x5qUsuafAwHWbGQfW3BQ7UWtm7R8K92KBCQVsBegMreEcxWDSMB",
  "key24": "4KiLLvpYMDf5BEag8T3JMDwPf5Y8fk8bs7kyUvfo9BMh7Ez7hDDMpqKaEEjcU4svxTfHLPben8TRrifcWGoTyU5",
  "key25": "6188wTNTRKkBH42SaXPQJ1QMpcgCv8EiNdpwMEVstjnXyHMrJm9Lm19HdpsA2kRvrp7TVd1zZV47yMhzVq4MvLJq",
  "key26": "r8YuZzr2SKWMvEUBQNb8kvVhQdv3L2eARL9Kk63nN91PK1Jmc5sc9Y2Qse54aFWXoRKYSvAU5inDD47GAdTt9C2",
  "key27": "54gYE92wpM8CRTS68qHVa2EFXkVUNu5DuVR6fLTewVaGPRo2VTKRnBMBrGDRdrFuGiao4i7iD4axmoUVARie45zA",
  "key28": "44KvwwB5iF8cD7RCTYfeUbYgmS519cUVzsh7MxWfx7mGAGeiuxHn7L5VL7iTnaHXVxncUZuJsZfiNr1RguAFnCfC",
  "key29": "31fbZN83PhkMERx6xnrw35VhVHU8xLbHucXYzuzdsSkshzYHhgNEdfCTAKgyEaFoTAz9LUMGf9tbxTfSnsenGxDh",
  "key30": "2zWHyKL35dXofZag2jBzmfcgBrNBC9f35zMUm5eQbTccLsPgspHwQDL7QxxxLVcdotswNmeUXr3VGqYpgscLNpy1",
  "key31": "5hjPgJUPnnz2pc4KBNuiwQiKqJvHfqgyYXisyDEaMyd2gN8jHusjYA6wMwbfZww2rutb4RM3SdoDGtWzfDvQLqcQ",
  "key32": "2i5SVcJuGLuRsEuYzGiHPZV8ztJdj1pC977fWnR8XWVChEVgV15cxZjikDbm98opUKcgVwNdEkdpyTVWXyGBx13A",
  "key33": "3A5BeroCsMxUy5fGgTFmHr7wSB9xUWNFJFQKWELtjeYUioYKvcJmRVyKfSbk45eUzwT5gsPmjmLYES8tzFEUEf3W",
  "key34": "4B2RaQwsdEb2KgrbmASV9nv42mzYdt9UHtxQa8wZTTdcLNmZDcBJQsiRfDpoEzCTBhmriVM17tSoPKQFFRK8XR98",
  "key35": "5DvKs91nmTJQqs6a9enKhM1d9Lg1kmeGRQ9sv3huMY5vSKJDdsWV5GEGfzFmoobcyrMMfGYosQEJ7vouABoa6AKB",
  "key36": "525BqgUyNVJRk3uBiqVquyeihp2eT86SWyWTxvDrR4wKYFhM4aDNq7ADNESEAQed55QYweSZvEnUiyFHyEtdFgum",
  "key37": "5x4qq5u3djbgeJvweny8ksk7snYQXd6m7HfNCdA5DbeLzXnBdyoZzxj63ZVY3AiCYX3u6q6nphEH3CXHCgeSdiHm"
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
